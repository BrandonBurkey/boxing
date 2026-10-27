// Script JSON (studio/scripts) -> voiceover (Kokoro) -> timed data for Remotion (src/data).
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';

const root = path.resolve(import.meta.dirname, '..');
const PY = path.join(root, 'studio/audio/.venv/bin/python');
const TTS = path.join(root, 'studio/audio/tts.py');
const ids = process.argv.slice(2);
const voice = process.env.VOICE ?? 'am_michael';
const speed = Number(process.env.SPEED ?? 1.1);

for (const id of ids) {
  let src = path.join(root, 'studio/scripts', id + '.json');
  if (!fs.existsSync(src)) {
    const v = fs.readdirSync(path.join(root, 'studio/verticals')).map((d) => path.join(root, 'studio/verticals', d, 'scripts', id + '.json')).find((f) => fs.existsSync(f));
    if (!v) throw new Error('script not found: ' + id);
    src = v;
  }
  const script = JSON.parse(fs.readFileSync(src, 'utf8'));
  const outDir = path.join(root, 'remotion/public/vo', id);
  fs.mkdirSync(outDir, {recursive: true});
  const lines = script.beats.map((b) => ({id: b.id, text: b.vo.replace(/\*/g, '').replace(/ — /g, ', ')}));
  const linesFile = path.join(outDir, 'lines.json');
  const prev = fs.existsSync(linesFile) ? fs.readFileSync(linesFile, 'utf8') : '';
  const next = JSON.stringify({voice, speed, lines}, null, 1);
  if (prev !== next || !fs.existsSync(path.join(outDir, 'manifest.json'))) {
    fs.writeFileSync(linesFile, next);
    execFileSync(PY, [TTS, linesFile, outDir], {stdio: 'inherit'});
  }
  const manifest = JSON.parse(fs.readFileSync(path.join(outDir, 'manifest.json'), 'utf8'));
  const vo = {};
  for (const l of manifest.lines) {
    const b = script.beats.find((x) => x.id === l.id);
    if (b) b.voDur = l.duration;
    vo[l.id] = `vo/${id}/${path.basename(l.file)}`;
  }
  const sfx = fs.readdirSync(path.join(root, 'remotion/public/sfx')).filter((f) => f.endsWith('.wav')).map((f) => f.replace('.wav', ''));
  fs.writeFileSync(path.join(root, 'remotion/src/data', id + '.json'), JSON.stringify({script, vo, sfx}, null, 1));
  const total = script.beats.reduce((a, b) => a + b.voDur + (b.pad ?? 0.22), 0);
  console.log(`${id}: ${script.beats.length} beats, ~${total.toFixed(1)}s`);
}
