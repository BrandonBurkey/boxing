#!/usr/bin/env python3
"""Kokoro TTS voiceover renderer for the boxing TikTok pipeline.

Usage:
    studio/audio/.venv/bin/python studio/audio/tts.py <lines.json> <outdir>

lines.json:
    {"voice": "am_michael", "speed": 1.05,
     "lines": [{"id": "l01", "text": "..."}]}
    Optional per-line overrides: "voice", "speed".
    Optional top-level: "lufs" (default -16), "pad_ms" (default 40).

Writes <outdir>/<id>.wav (mono, 24 kHz, 16-bit) and <outdir>/manifest.json:
    {"voice", "speed", "sample_rate", "lufs",
     "lines": [{"id", "file", "duration"}]}
Each line is trimmed to ~pad_ms of silence at both ends, then loudness
normalised to the target LUFS (ffmpeg loudness measure + gain + peak limiter
at -1.5 dBFS).
"""
import json
import os
import subprocess
import sys
import tempfile

import numpy as np
import soundfile as sf

HERE = os.path.dirname(os.path.abspath(__file__))
MODELS = os.path.join(HERE, "models")
SR = 24000

# Prefer quality: fp32 > fp16 > int8, whichever is present.
MODEL_CANDIDATES = ["kokoro-v1.0.onnx", "kokoro-v1.0.fp16.onnx", "kokoro-v1.0.int8.onnx"]
VOICES_FILE = os.path.join(MODELS, "voices-v1.0.bin")


def load_kokoro():
    from kokoro_onnx import Kokoro

    for name in MODEL_CANDIDATES:
        path = os.path.join(MODELS, name)
        if os.path.exists(path):
            return Kokoro(path, VOICES_FILE)
    sys.exit(f"No Kokoro model found in {MODELS}. Expected one of {MODEL_CANDIDATES}.")


def lang_for(voice):
    # b* voices are British English; a* voices are American English.
    return "en-gb" if voice.startswith("b") else "en-us"


def trim_silence(x, sr, pad_ms=40, thresh_db=-45.0, win_ms=10):
    """Trim leading/trailing silence, keeping pad_ms either side of speech."""
    if x.size == 0:
        return x
    win = max(1, int(sr * win_ms / 1000))
    n = int(np.ceil(x.size / win))
    padded = np.zeros(n * win, dtype=np.float32)
    padded[: x.size] = x
    rms = np.sqrt(np.mean(padded.reshape(n, win) ** 2, axis=1) + 1e-12)
    peak = float(np.max(np.abs(x))) + 1e-12
    gate = peak * (10 ** (thresh_db / 20.0))
    voiced = np.where(rms > gate)[0]
    if voiced.size == 0:
        return x
    pad = int(sr * pad_ms / 1000)
    start = max(0, voiced[0] * win - pad)
    end = min(x.size, (voiced[-1] + 1) * win + pad)
    y = x[start:end].copy()
    # 5 ms fades so the cut points never click.
    f = min(int(sr * 0.005), y.size // 2)
    if f > 0:
        ramp = np.linspace(0.0, 1.0, f, dtype=np.float32)
        y[:f] *= ramp
        y[-f:] *= ramp[::-1]
    return y


def measure_lufs(path):
    """Integrated loudness via ffmpeg loudnorm's analysis pass (EBU R128)."""
    p = subprocess.run(
        ["ffmpeg", "-hide_banner", "-nostats", "-i", path,
         "-af", "loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json", "-f", "null", "-"],
        capture_output=True, text=True, check=True,
    )
    err = p.stderr
    m = json.loads(err[err.rindex("{"): err.rindex("}") + 1])
    return float(m["input_i"])


def loudnorm(src, dst, lufs=-16.0, ceiling_db=-1.5):
    """Normalise to `lufs` integrated with a static gain, then a fast look-ahead
    limiter catches any peaks above `ceiling_db`. (loudnorm's linear mode backs
    off when the true-peak target would be hit, which left peaky lines ~5 LU
    quiet; dynamic mode pumps on short clips. Gain + limiter avoids both.)
    A second gain trim corrects the small loss the limiter causes."""
    tmp = dst + ".tmp.wav"
    limit = 10 ** (ceiling_db / 20.0)
    src_i = measure_lufs(src)
    gain = lufs - src_i
    for _ in range(2):
        subprocess.run(
            ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", src, "-af",
             f"volume={gain:.3f}dB,alimiter=limit={limit:.4f}:attack=2:release=40:level=false",
             "-ar", str(SR), "-ac", "1", "-c:a", "pcm_s16le", tmp],
            check=True,
        )
        err = lufs - measure_lufs(tmp)
        if abs(err) < 0.3:
            break
        gain += err
    os.replace(tmp, dst)


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    spec_path, outdir = sys.argv[1], sys.argv[2]
    with open(spec_path, encoding="utf-8") as fh:
        spec = json.load(fh)
    voice = spec.get("voice", "am_michael")
    speed = float(spec.get("speed", 1.05))
    target = float(spec.get("lufs", -16.0))
    pad_ms = int(spec.get("pad_ms", 40))
    os.makedirs(outdir, exist_ok=True)

    kokoro = load_kokoro()
    out = []
    with tempfile.TemporaryDirectory() as tmp:
        for line in spec["lines"]:
            lid, text = line["id"], line["text"].strip()
            v = line.get("voice", voice)
            s = float(line.get("speed", speed))
            samples, sr = kokoro.create(text, voice=v, speed=s, lang=lang_for(v))
            assert sr == SR, f"unexpected sample rate {sr}"
            y = trim_silence(np.asarray(samples, dtype=np.float32), sr, pad_ms=pad_ms)
            raw = os.path.join(tmp, f"{lid}.raw.wav")
            sf.write(raw, y, sr, subtype="FLOAT")
            fname = f"{lid}.wav"
            dst = os.path.join(outdir, fname)
            loudnorm(raw, dst, lufs=target)
            info = sf.info(dst)
            dur = round(info.frames / info.samplerate, 3)
            out.append({"id": lid, "file": fname, "duration": dur})
            print(f"{lid}: {dur:.3f}s  [{v} @ {s}]  {text[:60]}")

    manifest = {"voice": voice, "speed": speed, "sample_rate": SR, "lufs": target, "lines": out}
    with open(os.path.join(outdir, "manifest.json"), "w", encoding="utf-8") as fh:
        json.dump(manifest, fh, indent=2)
    print(f"wrote {len(out)} lines + manifest.json to {outdir}")


if __name__ == "__main__":
    main()
