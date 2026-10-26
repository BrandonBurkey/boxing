import React from 'react';
import {Composition} from 'remotion';
import {Video, VideoData, durationFrames} from './Video';
import {FPS} from './timeline';
import v01 from './data/v01-middle-distance.json';
import v02 from './data/v02-stop-leaking-gas.json';
import v03 from './data/v03-eyes-open.json';

const videos = [v01, v02, v03] as unknown as VideoData[];

export const RemotionRoot: React.FC = () => (
  <>
    {videos.map((d) => (
      <Composition key={d.script.id} id={d.script.id} component={Video} durationInFrames={durationFrames(d.script)} fps={FPS} width={1080} height={1920} defaultProps={{data: d}} />
    ))}
  </>
);
