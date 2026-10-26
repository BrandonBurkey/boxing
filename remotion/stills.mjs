import {bundle} from '@remotion/bundler';
import {renderStill, selectComposition} from '@remotion/renderer';
import path from 'node:path';
const [id, outDir, ...frames] = process.argv.slice(2);
const serveUrl = await bundle({entryPoint: path.resolve('src/index.ts')});
const comp = await selectComposition({serveUrl, id});
console.log(id, 'frames', comp.durationInFrames, (comp.durationInFrames / 30).toFixed(1) + 's');
for (const f of frames) {
  await renderStill({composition: comp, serveUrl, output: path.join(outDir, `${id}_${f}.jpg`), frame: Number(f), scale: 0.5, imageFormat: 'jpeg'});
}
console.log('done');
