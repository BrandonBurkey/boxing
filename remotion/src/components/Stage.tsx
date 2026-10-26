import React from 'react';
import {theme, W, H, FLOOR_Y} from '../theme';

export const Background: React.FC<{cam: {zoom: number; cx: number; cy: number}; t: number; floor: boolean}> = ({cam, t, floor}) => {
  // Grid drifts slightly with the camera for depth.
  const ox = ((cam.cx - 540) * 0.35) % 60;
  const oy = ((cam.cy - 1000) * 0.35 + t * 6) % 60;
  return (
    <svg width={W} height={H} style={{position: 'absolute', inset: 0}}>
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={theme.bgTop} />
          <stop offset="1" stopColor={theme.bgBottom} />
        </linearGradient>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse" x={-ox} y={-oy}>
          <path d="M60 0 L0 0 0 60" fill="none" stroke={theme.grid} strokeWidth="1.5" />
        </pattern>
        <pattern id="grid4" width="240" height="240" patternUnits="userSpaceOnUse" x={-ox} y={-oy}>
          <path d="M240 0 L0 0 0 240" fill="none" stroke={theme.gridStrong} strokeWidth="1.5" />
        </pattern>
        <radialGradient id="vig" cx="0.5" cy="0.52" r="0.75">
          <stop offset="0.55" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.7" />
        </radialGradient>
        <radialGradient id="spot" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#9fb4d8" stopOpacity="0.16" />
          <stop offset="1" stopColor="#9fb4d8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glow" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0" stopColor={theme.accent} stopOpacity="0.07" />
          <stop offset="1" stopColor={theme.accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width={W} height={H} fill="url(#bg)" />
      <rect width={W} height={H} fill="url(#grid)" />
      <rect width={W} height={H} fill="url(#grid4)" />
      <rect x={-200} y={500} width={W + 400} height={1100} fill="url(#glow)" />
      {floor && <ellipse cx={540} cy={FLOOR_Y + 10} rx={620} ry={120} fill="url(#spot)" />}
      <rect width={W} height={H} fill="url(#vig)" />
    </svg>
  );
};

export const Floor: React.FC = () => (
  <g>
    {/* ring ropes far behind */}
    {[0, 1, 2].map((i) => (
      <line key={i} x1={-400} x2={1480} y1={FLOOR_Y - 520 + i * 95} y2={FLOOR_Y - 520 + i * 95} stroke="rgba(160,175,200,0.07)" strokeWidth={5} />
    ))}
    <line x1={-600} x2={1680} y1={FLOOR_Y} y2={FLOOR_Y} stroke="rgba(190,205,230,0.28)" strokeWidth={3} />
    {Array.from({length: 7}).map((_, i) => (
      <line key={'f' + i} x1={-600} x2={1680} y1={FLOOR_Y + 22 + i * i * 9} y2={FLOOR_Y + 22 + i * i * 9} stroke={`rgba(160,175,200,${0.1 - i * 0.012})`} strokeWidth={2} />
    ))}
    {Array.from({length: 23}).map((_, i) => {
      const x = -600 + i * 100;
      return <line key={'p' + i} x1={x} y1={FLOOR_Y} x2={540 + (x - 540) * 1.9} y2={FLOOR_Y + 420} stroke="rgba(160,175,200,0.06)" strokeWidth={2} />;
    })}
  </g>
);
