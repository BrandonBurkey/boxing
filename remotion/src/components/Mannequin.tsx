import React from 'react';
import {Pose, solve, DIM} from '../rig';
import {theme, FLOOR_Y} from '../theme';

type P = {x: number; y: number};

// Tapered capsule between a (radius ra) and b (radius rb), as an SVG path.
export const capsule = (a: P, b: P, ra: number, rb: number) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 0.0001;
  const nx = -dy / len;
  const ny = dx / len;
  const a1 = {x: a.x + nx * ra, y: a.y + ny * ra};
  const a2 = {x: a.x - nx * ra, y: a.y - ny * ra};
  const b1 = {x: b.x + nx * rb, y: b.y + ny * rb};
  const b2 = {x: b.x - nx * rb, y: b.y - ny * rb};
  return `M${a1.x},${a1.y} L${b1.x},${b1.y} A${rb},${rb} 0 0 1 ${b2.x},${b2.y} L${a2.x},${a2.y} A${ra},${ra} 0 0 1 ${a1.x},${a1.y} Z`;
};

export type Palette = typeof theme.you;

export type MannequinProps = {
  pose: Pose;
  baseX: number; // world px
  heightPx: number;
  dir: 1 | -1; // 1 faces right
  palette: Palette;
  nearSide: 'lead' | 'rear';
  reach?: number;
  tension?: number; // 0..1 red glow on shoulders/arms
  opacity?: number;
  floorY?: number;
};

export const toWorld = (bx: number, h: number, dir: number, floorY = FLOOR_Y) => (p: P): P => ({
  x: bx + dir * p.x * h,
  y: floorY - p.y * h,
});

export const Mannequin: React.FC<MannequinProps> = ({pose, baseX, heightPx: Hp, dir, palette, nearSide, reach = 1, tension = 0, opacity = 1, floorY = FLOOR_Y}) => {
  const s = solve(pose, reach);
  const w = toWorld(baseX, Hp, dir, floorY);
  const r = (u: number) => u * Hp;

  const nearArm = nearSide === 'lead' ? s.lead : s.rear;
  const farArm = nearSide === 'lead' ? s.rear : s.lead;
  const nearLeg = nearSide === 'lead' ? s.front : s.back;
  const farLeg = nearSide === 'lead' ? s.back : s.front;

  const limb = (a: P, b: P, ra: number, rb: number, fill: string, key: string) => (
    <path key={key} d={capsule(w(a), w(b), r(ra), r(rb))} fill={fill} />
  );
  const joint = (p: P, rr: number, fill: string, key: string) => <circle key={key} cx={w(p).x} cy={w(p).y} r={r(rr)} fill={fill} />;

  const leg = (L: typeof s.front, near: boolean, k: string) => {
    const body = near ? palette.body : palette.far;
    const jt = near ? palette.joint : palette.far;
    return (
      <g key={k}>
        {limb(L.hip, L.knee, 0.05, 0.04, body, k + 't')}
        {limb(L.knee, L.ankle, 0.04, 0.027, body, k + 's')}
        {limb(L.heel, L.toe, 0.022, 0.018, body, k + 'f')}
        {joint(L.knee, 0.033, jt, k + 'kj')}
      </g>
    );
  };

  const arm = (A: typeof s.lead, near: boolean, k: string) => {
    const body = near ? palette.body : palette.far;
    const jt = near ? palette.joint : palette.far;
    const g = w(A.glove);
    const wr = w(A.wr);
    const ang = Math.atan2(g.y - wr.y, g.x - wr.x);
    const gr = r(near ? DIM.glove : DIM.glove * 0.94);
    return (
      <g key={k}>
        {limb(A.sh, A.el, 0.036, 0.03, body, k + 'u')}
        {limb(A.el, A.wr, 0.03, 0.025, body, k + 'f')}
        {joint(A.el, 0.026, jt, k + 'ej')}
        <g transform={`translate(${g.x},${g.y}) rotate(${(ang * 180) / Math.PI})`}>
          <rect x={-gr * 1.05} y={-gr * 0.92} width={gr * 2.05} height={gr * 1.84} rx={gr * 0.9} fill={near ? palette.glove : palette.gloveFar} />
          <rect x={-gr * 0.2} y={gr * 0.42 * (dir === 1 ? 1 : -1) - gr * 0.17} width={gr * 0.95} height={gr * 0.34} rx={gr * 0.17} fill="rgba(0,0,0,0.13)" />
          <rect x={-gr * 1.25} y={-gr * 0.55} width={gr * 0.4} height={gr * 1.1} rx={gr * 0.16} fill={near ? palette.glove : palette.gloveFar} />
        </g>
      </g>
    );
  };

  const hipW = w(s.hip);
  const head = w(s.head);
  const tilt = (pose.lean * 0.35 + pose.hdx * 120) * dir;

  return (
    <g opacity={opacity}>
      {/* floor shadow */}
      <ellipse cx={w({x: (s.front.ankle.x + s.back.ankle.x) / 2, y: 0}).x} cy={floorY + 6} rx={r(0.27)} ry={r(0.022)} fill="rgba(0,0,0,0.45)" />
      {leg(farLeg, false, 'fl')}
      {arm(farArm, false, 'fa')}
      {leg(nearLeg, true, 'nl')}
      {/* torso */}
      <path d={capsule(w(s.hip), w(s.shoulder), r(0.082), r(0.098))} fill={palette.body} />
      <path d={capsule(w(s.hip), w(s.chest), r(0.05), r(0.06))} fill={palette.shade} />
      {/* hip block */}
      <ellipse cx={hipW.x} cy={hipW.y} rx={r(0.09)} ry={r(0.07)} fill={palette.body} />
      <rect x={hipW.x - r(0.09)} y={hipW.y - r(0.018)} width={r(0.18)} height={r(0.036)} rx={r(0.018)} fill={palette.shade} />
      {/* neck + head */}
      <path d={capsule(w(s.shoulder), w(s.neck), r(0.03), r(0.028))} fill={palette.joint} />
      <g transform={`rotate(${tilt} ${head.x} ${head.y})`}>
        <ellipse cx={head.x} cy={head.y} rx={r(DIM.headRx)} ry={r(DIM.headRy)} fill={palette.body} />
        <ellipse cx={head.x - dir * r(0.018)} cy={head.y + r(0.012)} rx={r(0.034)} ry={r(0.05)} fill={palette.shade} />
      </g>
      {/* shoulder cap */}
      <circle cx={w(nearArm.sh).x} cy={w(nearArm.sh).y} r={r(0.042)} fill={palette.joint} />
      {tension > 0.01 && (
        <g opacity={tension}>
          <circle cx={w(nearArm.sh).x} cy={w(nearArm.sh).y} r={r(0.1)} fill="none" stroke={theme.danger} strokeWidth={r(0.012)} opacity={0.8} />
          <circle cx={w(s.neck).x} cy={w(s.neck).y} r={r(0.14)} fill={theme.danger} opacity={0.14} />
        </g>
      )}
      {arm(nearArm, true, 'na')}
    </g>
  );
};
