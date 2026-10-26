#!/usr/bin/env python3
"""Procedural sound design for the boxing TikTok pipeline.

Everything is synthesised from oscillators and noise (no sample packs), so
there are no licence questions. Output: 44.1 kHz stereo 16-bit WAVs.

Usage:
    studio/audio/.venv/bin/python studio/audio/make_sfx.py [outdir]
Default outdir: <repo>/remotion/public/sfx
Deterministic: a fixed seed per sound, so re-running gives identical files.

Mixing note: phone speakers roll off below ~150 Hz, so every low-end sound
(impact_heavy, bass_hit) carries saturation harmonics that keep it audible on
a phone while the sub still lands on headphones.
"""
import os
import sys

import numpy as np
import soundfile as sf
from scipy import signal

SR = 44100
HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.abspath(os.path.join(HERE, "..", ".."))
DEFAULT_OUT = os.path.join(REPO, "remotion", "public", "sfx")


# ---------- building blocks ----------

def t_axis(dur):
    return np.arange(int(dur * SR)) / SR


def rng(seed):
    return np.random.default_rng(seed)


def sweep_phase(f):
    """Phase (radians) for an instantaneous-frequency array f (Hz)."""
    return 2 * np.pi * np.cumsum(f) / SR


def exp_curve(a, b, n, shape=1.0):
    """Exponential glide from a to b over n samples (shape>1 = later move)."""
    x = np.linspace(0, 1, n) ** shape
    return a * (b / a) ** x


def sos(kind, freq, order=2):
    return signal.butter(order, freq, btype=kind, fs=SR, output="sos")


def filt(x, kind, freq, order=2):
    return signal.sosfilt(sos(kind, freq, order), x)


def svf_bandpass(x, fc, q):
    """Time-varying state-variable band-pass (TPT/Zavalishin). fc: per-sample Hz."""
    g = np.tan(np.pi * np.clip(fc, 20, SR * 0.45) / SR)
    k = 1.0 / q
    a1 = 1.0 / (1.0 + g * (g + k))
    ic1 = ic2 = 0.0
    y = np.empty_like(x)
    for i in range(x.size):
        v3 = x[i] - ic2
        v1 = a1[i] * ic1 + g[i] * a1[i] * v3
        v2 = ic2 + g[i] * v1
        ic1 = 2 * v1 - ic1
        ic2 = 2 * v2 - ic2
        y[i] = v1 * k  # unity-peak band-pass
    return y


def svf_lowpass(x, fc, q=0.707):
    g = np.tan(np.pi * np.clip(fc, 20, SR * 0.45) / SR)
    k = 1.0 / q
    a1 = 1.0 / (1.0 + g * (g + k))
    ic1 = ic2 = 0.0
    y = np.empty_like(x)
    for i in range(x.size):
        v3 = x[i] - ic2
        v1 = a1[i] * ic1 + g[i] * a1[i] * v3
        v2 = ic2 + g[i] * v1
        ic1 = 2 * v1 - ic1
        ic2 = 2 * v2 - ic2
        y[i] = v2
    return y


def env_ad(n, attack, decay_tau, sr=SR):
    """Linear attack (s) then exponential decay with time-constant decay_tau (s)."""
    t = np.arange(n) / sr
    a = np.clip(t / max(attack, 1e-6), 0, 1)
    d = np.exp(-np.maximum(t - attack, 0) / decay_tau)
    return a * d


def env_swell(n, peak_pos, rise_pow=2.0, fall_pow=1.5):
    """0 -> 1 at peak_pos (0..1) -> 0, smooth bell, asymmetric."""
    x = np.linspace(0, 1, n)
    up = np.sin(0.5 * np.pi * np.clip(x / peak_pos, 0, 1)) ** rise_pow
    dn = np.cos(0.5 * np.pi * np.clip((x - peak_pos) / (1 - peak_pos), 0, 1)) ** fall_pow
    return np.where(x <= peak_pos, up, dn)


def fade_edges(x, fin=0.001, fout=0.004):
    x = x.copy()
    a, b = int(fin * SR), int(fout * SR)
    if a:
        x[:a] *= np.linspace(0, 1, a)[:, None] if x.ndim == 2 else np.linspace(0, 1, a)
    if b:
        x[-b:] *= np.linspace(1, 0, b)[:, None] if x.ndim == 2 else np.linspace(1, 0, b)
    return x


def soft_sat(x, drive):
    return np.tanh(drive * x) / np.tanh(drive)


def phone_layer(x, drive=5.0, bias=0.35, band=(150, 700)):
    """Asymmetric saturation (2nd + 3rd harmonics), band-limited to what a phone
    speaker can play, so a sub reads as 'bass' on a phone (missing-fundamental)."""
    y = np.tanh(drive * (x + bias)) - np.tanh(drive * bias)
    return filt(y, "bandpass", list(band))


def stereo(mono, width=0.0, pan=None, side=None):
    """mono -> (n,2). pan: per-sample -1..1 (equal power). side: decorrelated signal for width."""
    n = mono.size
    p = np.zeros(n) if pan is None else np.broadcast_to(pan, (n,))
    ang = (p + 1) * np.pi / 4
    L, R = mono * np.cos(ang) * np.sqrt(2), mono * np.sin(ang) * np.sqrt(2)
    if side is not None and width > 0:
        L, R = L + width * side, R - width * side
    return np.stack([L, R], axis=1)


def finish(x, peak_db=-1.0, hp=None):
    """DC/HPF clean-up, edge fades, peak normalise (no clipping)."""
    if x.ndim == 1:
        x = np.stack([x, x], axis=1)
    if hp:
        x = signal.sosfilt(sos("highpass", hp), x, axis=0)
    x = fade_edges(x)
    peak = np.max(np.abs(x))
    return (x / peak * 10 ** (peak_db / 20)).astype(np.float32)


# ---------- sounds ----------

def whoosh(dur=0.35, f_lo=280, f_hi=3200, q=1.3, seed=1, peak=0.58, pan_span=0.6):
    n = int(dur * SR)
    r = rng(seed)
    nl, nr = r.standard_normal(n), r.standard_normal(n)
    env = env_swell(n, peak, rise_pow=1.6, fall_pow=1.2)
    # cutoff follows the envelope: rises into the pass-by, falls a bit after
    fc = f_lo * (f_hi / f_lo) ** env
    L = svf_bandpass(nl, fc, q)
    R = svf_bandpass(nr, fc * 1.06, q)  # slight offset = wide, not phasey
    body = filt(r.standard_normal(n), "lowpass", 380) * 0.9  # air "mass"
    mid = 0.5 * (L + R) + body
    side = 0.5 * (L - R)
    pan = np.linspace(-pan_span, pan_span, n)  # travels left -> right
    return finish(stereo(mid * env, width=0.6, pan=pan, side=side * env), hp=70)


def whoosh_fast():
    return whoosh(dur=0.18, f_lo=700, f_hi=6500, q=1.6, seed=2, peak=0.5, pan_span=0.35)


def impact_heavy(dur=0.42):
    n = int(dur * SR)
    t = t_axis(dur)
    r = rng(3)
    f = exp_curve(120, 45, n, shape=0.55)
    tone = np.sin(sweep_phase(f)) * env_ad(n, 0.002, 0.11)
    harm = phone_layer(tone, drive=4.0) * 1.0  # audible on phone speakers
    tone = soft_sat(tone, 2.2)
    # chest "thump" — low-passed noise body
    body = filt(r.standard_normal(n), "lowpass", 260) * env_ad(n, 0.001, 0.035) * 0.9
    # leather click transient
    click = filt(r.standard_normal(n), "bandpass", [1800, 7000]) * env_ad(n, 0.0003, 0.006) * 0.55
    # low-mid "smack" so it reads as a body shot, not a kick drum
    smack = np.sin(2 * np.pi * 210 * t) * env_ad(n, 0.0005, 0.03) * 0.5
    mono = tone + harm + body + click + smack
    side = filt(r.standard_normal(n), "bandpass", [900, 5000]) * env_ad(n, 0.0005, 0.012) * 0.15
    return finish(stereo(mono, width=1.0, side=side), hp=30)


def impact_light(dur=0.15):
    n = int(dur * SR)
    t = t_axis(dur)
    r = rng(4)
    snap = filt(r.standard_normal(n), "bandpass", [1500, 9000]) * env_ad(n, 0.0003, 0.012)
    crack = filt(r.standard_normal(n), "highpass", 5000) * env_ad(n, 0.0001, 0.003) * 0.6
    low = np.sin(sweep_phase(exp_curve(190, 95, n))) * env_ad(n, 0.001, 0.03) * 0.55
    pop = np.sin(2 * np.pi * 520 * t) * env_ad(n, 0.0005, 0.012) * 0.25
    mono = snap + crack + soft_sat(low, 1.5) + pop
    side = filt(r.standard_normal(n), "bandpass", [2000, 8000]) * env_ad(n, 0.0003, 0.008) * 0.3
    return finish(stereo(mono, width=1.0, side=side), hp=60)


def bell(dur=2.1, f0=820.0, strikes=(0.0,)):
    n = int(dur * SR)
    t = t_axis(dur)
    r = rng(5)
    # (ratio, amplitude, decay tau s) — inharmonic, bright brass ring-bell set
    partials = [
        (0.50, 0.30, 1.40),
        (1.00, 1.00, 1.10),
        (1.19, 0.45, 0.80),
        (1.56, 0.55, 0.65),
        (2.00, 0.50, 0.55),
        (2.51, 0.40, 0.40),
        (2.66, 0.35, 0.35),
        (3.42, 0.25, 0.25),
        (4.18, 0.18, 0.18),
        (5.37, 0.10, 0.12),
    ]
    L = np.zeros(n)
    R = np.zeros(n)
    for s in strikes:
        k0 = int(s * SR)
        tt = t[: n - k0]
        for i, (ratio, amp, tau) in enumerate(partials):
            f = f0 * ratio
            beat = 0.6 + 0.35 * i  # paired detune -> shimmer and slow beating
            ph = r.uniform(0, 2 * np.pi)
            e = amp * np.exp(-tt / tau)
            L[k0:] += e * np.sin(2 * np.pi * (f - beat / 2) * tt + ph)
            R[k0:] += e * np.sin(2 * np.pi * (f + beat / 2) * tt + ph + 0.3)
        hit = filt(r.standard_normal(n - k0), "bandpass", [2500, 9000]) * env_ad(n - k0, 0.0002, 0.004) * 1.2
        L[k0:] += hit
        R[k0:] += hit
    x = np.stack([L, R], axis=1)
    x = soft_sat(x / np.max(np.abs(x)), 1.3)
    x[-int(0.25 * SR):] *= np.linspace(1, 0, int(0.25 * SR))[:, None] ** 2
    return finish(x, hp=200)


def tick(dur=0.025):
    n = int(dur * SR)
    t = t_axis(dur)
    r = rng(6)
    tone = np.sin(2 * np.pi * 2600 * t) * env_ad(n, 0.0002, 0.0035)
    tone += 0.5 * np.sin(2 * np.pi * 4100 * t) * env_ad(n, 0.0001, 0.002)
    grain = filt(r.standard_normal(n), "bandpass", [3000, 9000]) * env_ad(n, 0.0001, 0.0015) * 0.4
    return finish(tone + grain, peak_db=-6.0, hp=400)  # soft: it repeats per character


def pop(dur=0.12):
    n = int(dur * SR)
    r = rng(7)
    # bubbly pop: fast upward glide then settle
    f = np.concatenate([exp_curve(320, 980, int(0.022 * SR), 0.7),
                        exp_curve(980, 900, n - int(0.022 * SR))])
    tone = np.sin(sweep_phase(f)) * env_ad(n, 0.003, 0.03)
    tone += 0.18 * np.sin(2 * sweep_phase(f)) * env_ad(n, 0.002, 0.018)
    air = filt(r.standard_normal(n), "bandpass", [1500, 6000]) * env_ad(n, 0.0005, 0.004) * 0.25
    return finish(tone + air, peak_db=-3.0, hp=150)


def riser(dur=1.2):
    n = int(dur * SR)
    t = t_axis(dur)
    r = rng(8)
    x = np.linspace(0, 1, n)
    amp = x ** 2.2  # crescendo, peak at the very end (cut straight into the hit)
    fc = exp_curve(250, 9000, n, shape=1.6)
    nl = svf_lowpass(r.standard_normal(n), fc, q=2.2)
    nr = svf_lowpass(r.standard_normal(n), fc * 1.04, q=2.2)
    # tonal layer: detuned saw-ish stack rising an octave and a fifth
    f = exp_curve(110, 330, n, shape=1.3)
    tone = np.zeros(n)
    for det in (-0.6, 0.0, 0.7):
        ph = sweep_phase(f * (1 + det / 100))
        for h in range(1, 7):
            tone += np.sin(h * ph) / h
    tone = svf_lowpass(tone, exp_curve(400, 5000, n, shape=1.4), q=1.2) * 0.22
    # accelerating flutter for tension
    rate = exp_curve(4, 22, n)
    trem = 1 - 0.25 * x * (0.5 + 0.5 * np.sin(sweep_phase(rate)))
    mid = (0.5 * (nl + nr) + tone) * amp * trem
    side = 0.5 * (nl - nr) * amp * trem
    out = stereo(mid, width=0.8, side=side)
    out = soft_sat(out / np.max(np.abs(out)), 1.4)
    return finish(out, hp=60)


def bass_hit(dur=0.8):
    n = int(dur * SR)
    t = t_axis(dur)
    r = rng(9)
    f = exp_curve(78, 36, n, shape=0.45)
    sub = np.sin(sweep_phase(f)) * env_ad(n, 0.003, 0.28)
    harm = phone_layer(sub, drive=4.0, band=(120, 600)) * 1.0  # phones hear this
    sub = soft_sat(sub, 2.6)
    knock = np.sin(sweep_phase(exp_curve(160, 60, n, 0.4))) * env_ad(n, 0.001, 0.04) * 0.6
    click = filt(r.standard_normal(n), "bandpass", [1200, 6000]) * env_ad(n, 0.0002, 0.005) * 0.35
    rumble = filt(r.standard_normal(n), "lowpass", 140) * env_ad(n, 0.01, 0.2) * 0.25
    mono = sub + harm + knock + click + rumble
    side = filt(r.standard_normal(n), "bandpass", [300, 3000]) * env_ad(n, 0.002, 0.05) * 0.12
    out = stereo(mono, width=1.0, side=side)
    out[-int(0.15 * SR):] *= np.linspace(1, 0, int(0.15 * SR))[:, None]
    return finish(out, hp=25)


def hud_beep(dur=0.075):
    n = int(dur * SR)
    t = t_axis(dur)
    # two-step digital blip, band-limited square (odd harmonics) so it isn't harsh
    f = np.where(t < 0.032, 1320.0, 1980.0)
    ph = sweep_phase(f)
    sq = sum(np.sin(h * ph) / h for h in (1, 3, 5, 7))
    gate = np.ones(n)
    g0 = int(0.032 * SR)
    gate[g0 - int(0.003 * SR):g0] = np.linspace(1, 0.25, int(0.003 * SR))
    e = env_ad(n, 0.001, 0.05) * gate
    x = filt(sq * e, "lowpass", 7000)
    return finish(x, peak_db=-3.0, hp=300)


SOUNDS = {
    "whoosh": whoosh,
    "whoosh_fast": whoosh_fast,
    "impact_heavy": impact_heavy,
    "impact_light": impact_light,
    "bell": bell,
    "tick": tick,
    "pop": pop,
    "riser": riser,
    "bass_hit": bass_hit,
    "hud_beep": hud_beep,
}


def stats(x):
    peak = float(np.max(np.abs(x)))
    rms = float(np.sqrt(np.mean(x.astype(np.float64) ** 2)))
    return {
        "duration": round(x.shape[0] / SR, 3),
        "peak_dbfs": round(20 * np.log10(peak + 1e-12), 2),
        "rms_dbfs": round(20 * np.log10(rms + 1e-12), 2),
        "crest_db": round(20 * np.log10((peak + 1e-12) / (rms + 1e-12)), 2),
        "clipped_samples": int(np.sum(np.abs(x) >= 0.999)),
    }


def main():
    outdir = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_OUT
    os.makedirs(outdir, exist_ok=True)
    print(f"{'file':18s} {'dur':>6s} {'peak':>7s} {'rms':>7s} {'crest':>6s} clip")
    for name, fn in SOUNDS.items():
        x = fn()
        assert x.ndim == 2 and x.shape[1] == 2 and np.all(np.isfinite(x))
        path = os.path.join(outdir, f"{name}.wav")
        sf.write(path, x, SR, subtype="PCM_16")
        s = stats(sf.read(path)[0])
        print(f"{name + '.wav':18s} {s['duration']:6.3f} {s['peak_dbfs']:7.2f} {s['rms_dbfs']:7.2f} "
              f"{s['crest_db']:6.2f} {s['clipped_samples']}")
    print(f"wrote {len(SOUNDS)} files to {outdir}")


if __name__ == "__main__":
    main()
