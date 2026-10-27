import React from 'react';
import {Composition} from 'remotion';
import {Video, VideoData, durationFrames} from './Video';
import {FPS} from './timeline';
import v01 from './data/v01-middle-distance.json';
import v02 from './data/v02-stop-leaking-gas.json';
import v03 from './data/v03-eyes-open.json';
import ptest from './data/props-test.json';
import gpt from './data/golf-posetest.json';
import gf01 from './data/gf-v01-short-arc.json';
import gf02 from './data/gf-v02-pane-of-glass.json';
import gf03 from './data/gf-v03-happy-feet.json';

const videos = [v01, v02, v03, ptest, gpt, gf01, gf02, gf03] as unknown as VideoData[];

export const RemotionRoot: React.FC = () => (
  <>
    {videos.map((d) => (
      <Composition key={d.script.id} id={d.script.id} component={Video} durationInFrames={durationFrames(d.script)} fps={FPS} width={1080} height={1920} defaultProps={{data: d}} />
    ))}
  </>
);
