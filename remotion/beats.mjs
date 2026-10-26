import fs from 'node:fs';
const d = JSON.parse(fs.readFileSync(`src/data/${process.argv[2]}.json`,'utf8'));
let t=0; for (const b of d.script.beats){ const dur=b.voDur+(b.pad??0.22); console.log(b.id, Math.round(t*30), Math.round((t+dur)*30), b.vo.slice(0,40)); t+=dur; }
