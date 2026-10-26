import {bundle} from '@remotion/bundler';
import {renderMedia, selectComposition} from '@remotion/renderer';
import path from 'node:path';
const ids = process.argv.slice(2);
const serveUrl = await bundle({entryPoint: path.resolve('src/index.ts')});
for (const id of ids) {
  const composition = await selectComposition({serveUrl, id});
  const out = path.resolve('../studio/renders', id + '.mp4');
  const t0 = Date.now();
  await renderMedia({composition, serveUrl, codec: 'h264', crf: 17, audioCodec: 'aac', audioBitrate: '192k', outputLocation: out, concurrency: 4, imageFormat: 'jpeg', jpegQuality: 92});
  console.log(`${id} -> ${out} in ${((Date.now() - t0) / 1000).toFixed(0)}s`);
}
