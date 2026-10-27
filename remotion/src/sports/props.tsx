// Sport-agnostic props for ball/racket sports. Everything is keyframed (no physics) and driven from script overlays.
import React from 'react';
import {theme, FLOOR_Y} from '../theme';
import {Compiled, ease} from '../timeline';
import {solve} from '../rig';
import {actorAt} from '../timeline';

type O = Compiled['overlays'][number];
type Pt = [number, number];

export const PROP_WORLD_TYPES = ['ball', 'prop', 'held', 'arrow'];
export const PROP_TOP_TYPES = ['pitch', 'tball', 'player'];

const fade = (o: O, t: number) => ease('snap', (t - o.t0) / 0.15) * (1 - ease('in', (t - (o.t1 - 0.12)) / 0.12));

// Ball moving along keyframed legs: legs = [{at, dur, from:[x,y], to:[x,y], arc}], times relative to overlay start.
export const ballPos = (o: O, t: number): {x: number; y: number; moving: boolean} => {
  const legs: {at: number; dur: number; from: Pt; to: Pt; arc?: number; ease?: string}[] = o.legs ?? [{at: 0, dur: o.dur ?? 0.5, from: o.from, to: o.to, arc: o.arc}];
  const local = t - o.t0;
  let pos: Pt = legs[0].from;
  let moving = false;
  for (const l of legs) {
    if (local < l.at) break;
    const k0 = Math.min(1, (local - l.at) / l.dur);
    const k = l.ease === 'linear' ? k0 : ease('out', k0) * 0.35 + k0 * 0.65;
    const x = l.from[0] + (l.to[0] - l.from[0]) * k;
    const y = l.from[1] + (l.to[1] - l.from[1]) * k - (l.arc ?? 0) * 4 * k * (1 - k);
    pos = [x, y];
    moving = k0 < 1;
  }
  return {x: pos[0], y: pos[1], moving};
};

const BallShape: React.FC<{x: number; y: number; r: number; kind: string; spin: number}> = ({x, y, r, kind, spin}) => {
  const fill = kind === 'basketball' ? '#E8823A' : kind === 'tennis' ? '#D8F04A' : kind === 'cricket' ? '#B8312F' : kind === 'rugby' || kind === 'american' ? '#9A5B34' : kind === 'golf' ? '#F4F6F8' : '#F4F6F8';
  const oval = kind === 'rugby' || kind === 'american';
  return (
    <g transform={`translate(${x},${y}) rotate(${spin})`}>
      <ellipse rx={oval ? r * 1.35 : r} ry={r} fill={fill} />
      {kind === 'basketball' && (
        <g stroke="#2B1A10" strokeWidth={r * 0.09} fill="none">
          <line x1={-r} x2={r} y1={0} y2={0} />
          <line y1={-r} y2={r} x1={0} x2={0} />
          <path d={`M${-r * 0.7},${-r * 0.7} Q0,0 ${-r * 0.7},${r * 0.7}`} />
          <path d={`M${r * 0.7},${-r * 0.7} Q0,0 ${r * 0.7},${r * 0.7}`} />
        </g>
      )}
      {kind === 'football' && (
        <g fill="#1A1F29">
          <polygon points={Array.from({length: 5}).map((_, i) => `${Math.cos((i / 5) * Math.PI * 2 - Math.PI / 2) * r * 0.38},${Math.sin((i / 5) * Math.PI * 2 - Math.PI / 2) * r * 0.38}`).join(' ')} />
        </g>
      )}
      {kind === 'tennis' && <path d={`M${-r * 0.9},${-r * 0.4} Q0,${r * 0.5} ${r * 0.9},${-r * 0.4}`} stroke="#fff" strokeWidth={r * 0.12} fill="none" />}
      {kind === 'cricket' && <line x1={0} x2={0} y1={-r} y2={r} stroke="#F2E6C8" strokeWidth={r * 0.14} strokeDasharray={`${r * 0.12} ${r * 0.1}`} />}
      {oval && <line x1={-r * 0.5} x2={r * 0.5} y1={0} y2={0} stroke="#F4F6F8" strokeWidth={r * 0.12} />}
      <ellipse cx={-r * 0.3} cy={-r * 0.35} rx={r * 0.35} ry={r * 0.22} fill="#fff" opacity={0.18} />
    </g>
  );
};

export const PropWorld: React.FC<{o: O; c: Compiled; t: number}> = ({o, c, t}) => {
  const k = fade(o, t);
  if (k <= 0) return null;
  switch (o.type) {
    case 'ball': {
      const r = o.r ?? 22;
      const p = ballPos(o, t);
      const trail = o.trail !== false && p.moving;
      const shadowScale = Math.max(0.3, 1 - (FLOOR_Y - p.y) / 900);
      return (
        <g opacity={k}>
          <ellipse cx={p.x} cy={FLOOR_Y + 4} rx={r * 1.1 * shadowScale} ry={r * 0.25 * shadowScale} fill="rgba(0,0,0,0.45)" />
          {trail &&
            [0.05, 0.1, 0.15].map((d, i) => {
              const q = ballPos(o, t - d);
              return <circle key={i} cx={q.x} cy={q.y} r={r * (0.85 - i * 0.2)} fill={theme.accent} opacity={0.22 - i * 0.06} />;
            })}
          <BallShape x={p.x} y={p.y} r={r} kind={o.kind ?? 'football'} spin={(t - o.t0) * (o.spin ?? 540)} />
        </g>
      );
    }
    case 'prop': {
      const col = o.color ?? 'rgba(220,228,240,0.85)';
      if (o.kind === 'hoop') {
        // backboard + rim + net, rim at (x,y), facing left by default
        const d = o.dir ?? -1;
        return (
          <g opacity={k}>
            <line x1={o.x - d * 70} y1={o.y + 30} x2={o.x - d * 70} y2={FLOOR_Y} stroke="rgba(160,175,200,0.5)" strokeWidth={14} />
            <rect x={o.x - d * 70 - 8} y={o.y - 120} width={16} height={170} rx={4} fill={col} />
            <line x1={o.x - d * 60} y1={o.y} x2={o.x + d * 40} y2={o.y} stroke={theme.danger} strokeWidth={8} strokeLinecap="round" />
            <path d={`M${o.x - d * 55},${o.y} L${o.x - d * 40},${o.y + 60} L${o.x + d * 25},${o.y + 60} L${o.x + d * 38},${o.y}`} fill="none" stroke="rgba(240,240,240,0.5)" strokeWidth={3} strokeDasharray="6 6" />
          </g>
        );
      }
      if (o.kind === 'goal') {
        const w = o.w ?? 300;
        const h = o.h ?? 240;
        return (
          <g opacity={k}>
            <rect x={o.x} y={FLOOR_Y - h} width={w} height={h} fill="url(#none)" stroke={col} strokeWidth={10} />
            {Array.from({length: 8}).map((_, i) => (
              <line key={i} x1={o.x + (i * w) / 8} y1={FLOOR_Y - h} x2={o.x + (i * w) / 8} y2={FLOOR_Y} stroke="rgba(220,228,240,0.15)" strokeWidth={2} />
            ))}
          </g>
        );
      }
      if (o.kind === 'net') {
        return (
          <g opacity={k}>
            <line x1={o.x} y1={FLOOR_Y} x2={o.x} y2={FLOOR_Y - (o.h ?? 90)} stroke={col} strokeWidth={8} />
            <rect x={o.x - 4} y={FLOOR_Y - (o.h ?? 90)} width={8} height={o.h ?? 90} fill="rgba(220,228,240,0.25)" />
          </g>
        );
      }
      if (o.kind === 'stumps') {
        return (
          <g opacity={k}>
            {[-14, 0, 14].map((dx) => (
              <rect key={dx} x={o.x + dx - 4} y={FLOOR_Y - (o.h ?? 150)} width={8} height={o.h ?? 150} rx={3} fill="#E9D9B5" />
            ))}
            <rect x={o.x - 20} y={FLOOR_Y - (o.h ?? 150) - 6} width={40} height={6} rx={3} fill="#E9D9B5" />
          </g>
        );
      }
      if (o.kind === 'cone') {
        return <path opacity={k} d={`M${o.x - 20},${FLOOR_Y} L${o.x},${FLOOR_Y - 46} L${o.x + 20},${FLOOR_Y} Z`} fill={o.color ?? '#FF8A1F'} />;
      }
      if (o.kind === 'line') {
        // floor marking seen side-on, with label (e.g. 3PT LINE, CREASE)
        return (
          <g opacity={k}>
            <rect x={o.x - 6} y={FLOOR_Y - 3} width={12} height={10} fill={col} />
            {o.label && (
              <text x={o.x} y={FLOOR_Y + 56} textAnchor="middle" fontFamily={theme.fontBody} fontWeight={900} fontSize={24} letterSpacing="0.18em" fill={theme.textDim}>
                {o.label}
              </text>
            )}
          </g>
        );
      }
      return null;
    }
    case 'held': {
      // racket / bat / club / stick held in an actor's hand, along the forearm direction plus an offset angle
      const a = c.actors[o.actor];
      const st = actorAt(c.actorKFs[o.actor], t);
      const s = solve(st.pose, a.reach ?? 1);
      const hand = s[(o.hand ?? 'lead') as 'lead' | 'rear'];
      const wx = (p: {x: number; y: number}) => ({x: st.x + a.dir * p.x * a.heightPx, y: FLOOR_Y - p.y * a.heightPx});
      const g = wx(hand.glove);
      const el = wx(hand.el);
      const base = Math.atan2(g.y - el.y, g.x - el.x) + ((o.angle ?? 0) * Math.PI) / 180 * a.dir;
      const L = (o.len ?? 0.32) * a.heightPx;
      const ex = g.x + Math.cos(base) * L;
      const ey = g.y + Math.sin(base) * L;
      const kind = o.kind ?? 'bat';
      return (
        <g opacity={k}>
          {kind === 'racket' ? (
            <g>
              <line x1={g.x} y1={g.y} x2={g.x + Math.cos(base) * L * 0.45} y2={g.y + Math.sin(base) * L * 0.45} stroke="#2A2F3A" strokeWidth={12} strokeLinecap="round" />
              <ellipse cx={g.x + Math.cos(base) * L * 0.75} cy={g.y + Math.sin(base) * L * 0.75} rx={L * 0.3} ry={L * 0.22} transform={`rotate(${(base * 180) / Math.PI} ${g.x + Math.cos(base) * L * 0.75} ${g.y + Math.sin(base) * L * 0.75})`} fill="rgba(198,255,61,0.12)" stroke={theme.accent} strokeWidth={8} />
            </g>
          ) : kind === 'club' ? (
            <g>
              <line x1={g.x} y1={g.y} x2={ex} y2={ey} stroke="#C9D1DC" strokeWidth={8} strokeLinecap="round" />
              <rect x={ex - 14} y={ey - 9} width={34} height={18} rx={6} fill="#C9D1DC" transform={`rotate(${(base * 180) / Math.PI} ${ex} ${ey})`} />
            </g>
          ) : (
            <line x1={g.x} y1={g.y} x2={ex} y2={ey} stroke={kind === 'stick' ? '#3A2A1E' : '#D9B77E'} strokeWidth={kind === 'bat' ? 22 : 12} strokeLinecap="round" />
          )}
        </g>
      );
    }
    case 'arrow': {
      const pts: Pt[] = o.points;
      const prog = ease('inout', (t - o.t0) / (o.draw ?? 0.5));
      const d = pts.map((p, j) => (j === 0 ? 'M' : 'L') + p[0] + ',' + p[1]).join(' ');
      const total = pts.slice(1).reduce((acc, p, j) => acc + Math.hypot(p[0] - pts[j][0], p[1] - pts[j][1]), 0);
      const last = pts[pts.length - 1];
      const prev = pts[pts.length - 2];
      const ang = (Math.atan2(last[1] - prev[1], last[0] - prev[0]) * 180) / Math.PI;
      const col = o.color ?? theme.accent;
      return (
        <g opacity={k}>
          <path d={d} fill="none" stroke={col} strokeWidth={7} strokeDasharray={o.dashed ? '4 12' : `${total * prog} ${total}`} strokeLinecap="round" />
          {prog > 0.95 && <path d="M0,-16 L28,0 L0,16 Z" fill={col} transform={`translate(${last[0]},${last[1]}) rotate(${ang})`} />}
          {o.label && (
            <text x={o.lx ?? last[0]} y={o.ly ?? last[1] - 30} textAnchor="middle" fontFamily={theme.fontBody} fontWeight={900} fontSize={26} letterSpacing="0.16em" fill={col}>
              {o.label}
            </text>
          )}
        </g>
      );
    }
    default:
      return null;
  }
};

// Top view: pitch/court markings, extra players (dots) and a ball.
export const PropTop: React.FC<{o: O; t: number}> = ({o, t}) => {
  const k = fade(o, t);
  if (k <= 0) return null;
  if (o.type === 'pitch') {
    const col = o.color ?? 'rgba(200,215,235,0.35)';
    return (
      <g opacity={k}>
        {(o.rects ?? []).map((r: number[], i: number) => <rect key={'r' + i} x={r[0]} y={r[1]} width={r[2]} height={r[3]} fill="none" stroke={col} strokeWidth={4} />)}
        {(o.lines ?? []).map((l: number[], i: number) => <line key={'l' + i} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} stroke={col} strokeWidth={4} />)}
        {(o.circles ?? []).map((cc: number[], i: number) => <circle key={'c' + i} cx={cc[0]} cy={cc[1]} r={cc[2]} fill="none" stroke={col} strokeWidth={4} />)}
        {(o.arcs ?? []).map((a: string, i: number) => <path key={'a' + i} d={a} fill="none" stroke={col} strokeWidth={4} />)}
      </g>
    );
  }
  if (o.type === 'tball') {
    const p = ballPos(o, t);
    return (
      <g opacity={k}>
        <circle cx={p.x} cy={p.y} r={o.r ?? 16} fill={o.color ?? '#F4F6F8'} stroke="#0B0E14" strokeWidth={3} />
      </g>
    );
  }
  if (o.type === 'player') {
    // extra top-view players without full rigs: {x,y} or legs (moving), team: 'you'|'opp'
    const p = o.legs || o.from ? ballPos(o, t) : {x: o.x, y: o.y};
    const col = o.team === 'you' ? theme.you.body : theme.opp.body;
    return (
      <g opacity={k}>
        <circle cx={p.x} cy={p.y} r={30} fill={col} stroke={o.team === 'you' ? theme.accent : theme.opp.joint} strokeWidth={6} />
        {o.label && (
          <text x={p.x} y={p.y + 62} textAnchor="middle" fontFamily={theme.fontBody} fontWeight={900} fontSize={22} letterSpacing="0.14em" fill={theme.textDim}>
            {o.label}
          </text>
        )}
      </g>
    );
  }
  return null;
};
