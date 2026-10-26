import React from 'react';
import {theme, FLOOR_Y} from '../theme';
import {Compiled, ease, gloveWorld, headWorld, topAt} from '../timeline';

type O = Compiled['overlays'][number];

const appear = (o: O, t: number, d = 0.25) => ease('snap', (t - o.t0) / d) * (1 - ease('in', (t - (o.t1 - 0.18)) / 0.18));

// ---------- world-space overlays (move with camera) ----------
export const WorldOverlay: React.FC<{o: O; c: Compiled; t: number}> = ({o, c, t}) => {
  const k = appear(o, t);
  if (k <= 0) return null;
  switch (o.type) {
    case 'height': {
      const h = headWorld(c, o.actor, t);
      const x0 = h.top.x - 110;
      const len = 220 * ease('out', (t - o.t0) / 0.4);
      const y = h.top.y - 6;
      return (
        <g opacity={k}>
          <line x1={x0} x2={x0 + len} y1={y} y2={y} stroke={theme.text} strokeWidth={4} strokeDasharray="3 10" strokeLinecap="round" opacity={0.75} />
          <text x={x0 + (o.align === 'right' ? 220 : 0)} y={y - 20} textAnchor={o.align === 'right' ? 'end' : 'start'} fontFamily={theme.fontHead} fontWeight={900} fontSize={64} fill={o.color ?? theme.text}>
            {o.text}
          </text>
          {o.sub && (
            <text x={x0 + (o.align === 'right' ? 220 : 0)} y={y - 92} textAnchor={o.align === 'right' ? 'end' : 'start'} fontFamily={theme.fontBody} fontWeight={800} fontSize={22} letterSpacing="0.22em" fill={theme.textDim}>
              {o.sub}
            </text>
          )}
        </g>
      );
    }
    case 'name': {
      const h = headWorld(c, o.actor, t);
      const y = h.top.y - (o.high ? 190 : 70);
      const w = o.text.length * 23 + 60;
      return (
        <g opacity={k} transform={`translate(${h.top.x - w / 2},${y - (1 - k) * 20})`}>
          <rect width={w} height={62} rx={8} fill="rgba(10,13,19,0.85)" stroke={theme.accent} strokeWidth={3} />
          <text x={w / 2} y={43} textAnchor="middle" fontFamily={theme.fontHead} fontWeight={900} fontSize={44} letterSpacing="0.04em" fill={theme.text}>
            {o.text}
          </text>
          <path d={`M${w / 2 - 12},62 L${w / 2},78 L${w / 2 + 12},62 Z`} fill={theme.accent} />
        </g>
      );
    }
    case 'marker': {
      const h = headWorld(c, o.actor, t);
      const bob = Math.sin(t * 8) * 6;
      return (
        <g opacity={k} transform={`translate(${h.top.x},${h.top.y - 40 + bob})`}>
          <path d="M-18,-26 L18,-26 L0,0 Z" fill={o.color ?? theme.accent} />
          <text y={-44} textAnchor="middle" fontFamily={theme.fontBody} fontWeight={900} fontSize={30} letterSpacing="0.16em" fill={o.color ?? theme.accent}>
            {o.text}
          </text>
        </g>
      );
    }
    case 'gap': {
      const g = gloveWorld(c, o.actor, t, o.hand ?? 'lead');
      const h = headWorld(c, o.target, t).head;
      const tipX = g.x + (h.x > g.x ? 30 : -30);
      const edge = h.x + (h.x > g.x ? -38 : 38);
      const y = g.y;
      return (
        <g opacity={k}>
          <line x1={tipX} x2={edge} y1={y} y2={y} stroke={o.color ?? theme.danger} strokeWidth={6} strokeDasharray="2 12" strokeLinecap="round" />
          <text x={(tipX + edge) / 2 - (h.x > g.x ? 40 : -40)} y={y + 62} textAnchor="middle" fontFamily={theme.fontHead} fontWeight={900} fontSize={50} fill={o.color ?? theme.danger}>
            {o.text}
          </text>
        </g>
      );
    }
    case 'zone': {
      const top = FLOOR_Y - 8;
      const w = (o.x2 - o.x1) * ease('out', (t - o.t0) / 0.45);
      const pulse = 0.75 + 0.25 * Math.sin(t * 6);
      return (
        <g opacity={k}>
          <rect x={o.x1} y={top} width={w} height={16} rx={8} fill={o.color ?? theme.danger} opacity={0.85 * pulse} />
          <rect x={o.x1} y={top - 120} width={w} height={120} fill={o.color ?? theme.danger} opacity={0.07} />
          <text x={o.x1 + (o.x2 - o.x1) / 2} y={top + 60} textAnchor="middle" fontFamily={theme.fontBody} fontWeight={900} fontSize={28} letterSpacing="0.2em" fill={o.color ?? theme.danger}>
            {o.label}
          </text>
        </g>
      );
    }
    case 'vision': {
      const h = headWorld(c, o.actor, t).head;
      const a = c.actors[o.actor];
      const kk = ease('inout', (t - o.t0 - (o.delay ?? 0)) / (o.ramp ?? 0.35));
      const open = o.from + (o.to - o.from) * kk;
      const len = 330;
      const spread = 95 * open;
      const dir = a.dir;
      const col = open < 0.3 ? theme.danger : theme.accent;
      return (
        <g opacity={k * 0.9}>
          <path d={`M${h.x + dir * 30},${h.y} L${h.x + dir * len},${h.y - spread} L${h.x + dir * len},${h.y + spread} Z`} fill={col} opacity={0.16} />
          <line x1={h.x + dir * 30} y1={h.y} x2={h.x + dir * len} y2={h.y - spread} stroke={col} strokeWidth={3} strokeDasharray="4 10" />
          <line x1={h.x + dir * 30} y1={h.y} x2={h.x + dir * len} y2={h.y + spread} stroke={col} strokeWidth={3} strokeDasharray="4 10" />
          {o.label && open < 0.3 && (
            <text x={h.x} y={h.y - 120} textAnchor="middle" fontFamily={theme.fontHead} fontWeight={900} fontSize={52} fill={theme.danger}>
              {o.closedLabel ?? 'EYES SHUT'}
            </text>
          )}
          {o.label && open >= 0.3 && (
            <text x={h.x + dir * (len - 10)} y={h.y - spread - 22} textAnchor={dir === 1 ? 'end' : 'start'} fontFamily={theme.fontBody} fontWeight={900} fontSize={26} letterSpacing="0.16em" fill={col}>
              {open < 0.3 ? o.closedLabel ?? 'EYES SHUT' : o.label}
            </text>
          )}
        </g>
      );
    }
    case 'float': {
      const h = headWorld(c, o.actor, t).head;
      const life = (t - o.t0) / (o.t1 - o.t0);
      return (
        <text x={h.x + (o.dx ?? 70)} y={h.y - 40 - life * 60} fontFamily={theme.fontHead} fontWeight={900} fontSize={o.size ?? 48} fill={o.color ?? theme.accent} opacity={k} textAnchor="middle">
          {o.text}
        </text>
      );
    }
    case 'target': {
      const h = headWorld(c, o.actor, t);
      const p = o.on === 'head' ? h.head : h.chest;
      const r = 26 + Math.sin(t * 7) * 4;
      return (
        <g opacity={k}>
          <circle cx={p.x} cy={p.y} r={r} fill="none" stroke={theme.accent} strokeWidth={5} />
          <circle cx={p.x} cy={p.y} r={7} fill={theme.accent} />
          <line x1={p.x - r - 16} x2={p.x - r + 6} y1={p.y} y2={p.y} stroke={theme.accent} strokeWidth={4} />
          <line x1={p.x + r - 6} x2={p.x + r + 16} y1={p.y} y2={p.y} stroke={theme.accent} strokeWidth={4} />
          {o.label && (
            <text x={p.x} y={p.y + r + 46} textAnchor="middle" fontFamily={theme.fontBody} fontWeight={900} fontSize={26} letterSpacing="0.16em" fill={theme.accent}>
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

// ---------- top-down view ----------
export const TopView: React.FC<{c: Compiled; t: number; overlays: O[]; scale: number}> = ({c, t, overlays, scale}) => {
  const ids = Object.keys(c.actors);
  return (
    <g>
      {overlays.map((o, i) => {
        const k = appear(o, t, 0.4);
        if (k <= 0) return null;
        if (o.type === 'ring' || o.type === 'band') {
          const p = topAt(c.topKFs[o.actor], t);
          const grow = ease('out', (t - o.t0) / 0.5);
          if (o.type === 'band') {
            const r1 = o.r1 * grow;
            const r2 = o.r2 * grow;
            return (
              <g key={i} opacity={k}>
                <circle cx={p.x} cy={p.y} r={(r1 + r2) / 2} fill="none" stroke={o.color ?? theme.danger} strokeWidth={r2 - r1} opacity={0.22 + 0.06 * Math.sin(t * 6)} />
                <circle cx={p.x} cy={p.y} r={r2} fill="none" stroke={o.color ?? theme.danger} strokeWidth={3} strokeDasharray="6 10" />
                {o.label && (
                  <text x={p.x} y={p.y - r2 - 18} textAnchor="middle" fontFamily={theme.fontBody} fontWeight={900} fontSize={28} letterSpacing="0.2em" fill={o.color ?? theme.danger}>
                    {o.label}
                  </text>
                )}
              </g>
            );
          }
          return (
            <g key={i} opacity={k}>
              <circle cx={p.x} cy={p.y} r={o.r * grow} fill={o.fill ?? 'none'} fillOpacity={0.12} stroke={o.color ?? theme.textDim} strokeWidth={3} strokeDasharray={o.solid ? undefined : '6 10'} />
              {o.label && (
                <text x={p.x + (o.lx ?? 0)} y={p.y + (o.ly ?? -o.r - 16)} textAnchor="middle" fontFamily={theme.fontBody} fontWeight={900} fontSize={26} letterSpacing="0.2em" fill={o.color ?? theme.textDim}>
                  {o.label}
                </text>
              )}
            </g>
          );
        }
        if (o.type === 'path') {
          const pts: [number, number][] = o.points;
          const d = pts.map((p, j) => (j === 0 ? 'M' : 'L') + p[0] + ',' + p[1]).join(' ');
          const total = pts.slice(1).reduce((acc, p, j) => acc + Math.hypot(p[0] - pts[j][0], p[1] - pts[j][1]), 0);
          const prog = ease('inout', (t - o.t0) / (o.draw ?? 0.6));
          const last = pts[pts.length - 1];
          const prev = pts[pts.length - 2];
          const ang = (Math.atan2(last[1] - prev[1], last[0] - prev[0]) * 180) / Math.PI;
          return (
            <g key={i} opacity={k}>
              <path d={d} fill="none" stroke={o.color ?? theme.accent} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={`${total * prog} ${total}`} />
              {prog > 0.97 && <path d="M0,-18 L30,0 L0,18 Z" fill={o.color ?? theme.accent} transform={`translate(${last[0]},${last[1]}) rotate(${ang})`} />}
              {o.label && prog > 0.5 && (
                <text x={o.lx} y={o.ly} textAnchor="middle" fontFamily={theme.fontBody} fontWeight={900} fontSize={28} letterSpacing="0.16em" fill={o.color ?? theme.accent}>
                  {o.label}
                </text>
              )}
            </g>
          );
        }
        if (o.type === 'line') {
          const a = topAt(c.topKFs[o.from], t);
          const b = topAt(c.topKFs[o.to], t);
          return (
            <g key={i} opacity={k}>
              <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={o.color ?? theme.danger} strokeWidth={5} strokeDasharray="3 12" strokeLinecap="round" />
              {o.label && (
                <text x={(a.x + b.x) / 2} y={(a.y + b.y) / 2 + (o.ly ?? 60)} textAnchor="middle" fontFamily={theme.fontBody} fontWeight={900} fontSize={26} letterSpacing="0.2em" fill={o.color ?? theme.danger}>
                  {o.label}
                </text>
              )}
            </g>
          );
        }
        return null;
      })}
      {ids.map((id) => {
        const a = c.actors[id];
        const p = topAt(c.topKFs[id], t);
        const pal = a.palette === 'you' ? theme.you : theme.opp;
        const s = (a.heightPx / 560) * scale;
        return (
          <g key={id} transform={`translate(${p.x},${p.y}) rotate(${p.a}) scale(${s})`}>
            <ellipse cx={0} cy={0} rx={30} ry={78} fill={pal.body} />
            <path d={`M10,-58 L52,-34`} stroke={pal.body} strokeWidth={20} strokeLinecap="round" />
            <path d={`M10,58 L56,30`} stroke={pal.far} strokeWidth={20} strokeLinecap="round" />
            <circle cx={66} cy={-30} r={27} fill={pal.glove} />
            <circle cx={70} cy={26} r={27} fill={pal.gloveFar} />
            <circle cx={4} cy={0} r={36} fill={pal.joint} />
            <circle cx={8} cy={0} r={29} fill={pal.body} />
          </g>
        );
      })}
    </g>
  );
};

// ---------- screen-space overlays ----------
export const ScreenOverlay: React.FC<{o: O; t: number}> = ({o, t}) => {
  const k = appear(o, t);
  if (k <= 0) return null;
  switch (o.type) {
    case 'hud': {
      const kk = ease('inout', (t - o.t0 - (o.delay ?? 0.15)) / (o.ramp ?? 0.9));
      const val = o.from + (o.to - o.from) * kk;
      const col = o.color ?? (val < 30 ? theme.danger : theme.accent);
      const segs = 20;
      const lit = Math.round((val / 100) * segs);
      const flash = val < 25 ? 0.55 + 0.45 * Math.abs(Math.sin(t * 9)) : 1;
      return (
        <div style={{position: 'absolute', left: o.x ?? 66, top: o.y ?? 1420, opacity: k, transform: `translateX(${(1 - k) * -40}px)`}}>
          <div style={{display: 'flex', justifyContent: 'space-between', width: o.w ?? 600, fontFamily: theme.fontBody, fontWeight: 900, fontSize: 28, letterSpacing: '0.2em', color: theme.text, marginBottom: 10}}>
            <span>{o.label}</span>
            <span style={{color: col, opacity: flash}}>{o.valueText ?? Math.round(val) + '%'}</span>
          </div>
          <div style={{display: 'flex', gap: 5, padding: 6, border: `2px solid ${theme.textDim}55`, borderRadius: 6, width: (o.w ?? 600) - 16}}>
            {Array.from({length: segs}).map((_, i) => (
              <div key={i} style={{flex: 1, height: 26, borderRadius: 2, background: i < lit ? col : 'rgba(255,255,255,0.07)', opacity: i < lit ? flash : 1, boxShadow: i < lit ? `0 0 10px ${col}66` : 'none'}} />
            ))}
          </div>
        </div>
      );
    }
    case 'score': {
      const vals: [number, number, number][] = o.values; // [[t, you, him]...] t relative to overlay start
      let cur = [0, 0];
      for (const v of vals) if (t - o.t0 >= v[0]) cur = [v[1], v[2]];
      return (
        <div style={{position: 'absolute', left: o.x ?? 66, top: o.y ?? 1420, opacity: k, fontFamily: theme.fontBody, fontWeight: 900, color: theme.text}}>
          <div style={{fontSize: 26, letterSpacing: '0.24em', color: theme.textDim, marginBottom: 8}}>{o.label ?? 'PUNCHES LANDED'}</div>
          <div style={{display: 'flex', gap: 22, alignItems: 'baseline'}}>
            <span style={{fontSize: 30, letterSpacing: '0.16em'}}>YOU</span>
            <span style={{fontFamily: theme.fontHead, fontSize: 88, color: theme.danger, minWidth: 60}}>{cur[0]}</span>
            <span style={{fontSize: 30, letterSpacing: '0.16em', marginLeft: 26}}>HIM</span>
            <span style={{fontFamily: theme.fontHead, fontSize: 88, color: theme.text, minWidth: 60}}>{cur[1]}</span>
          </div>
        </div>
      );
    }
    case 'tag': {
      return (
        <div style={{position: 'absolute', left: o.x ?? 66, top: o.y ?? 1440, opacity: k, transform: `translateY(${(1 - k) * 24}px)`, display: 'flex', alignItems: 'center', gap: 14, background: 'rgba(10,13,19,0.88)', border: `2px solid ${theme.accent}`, borderRadius: 999, padding: '14px 28px'}}>
          <div style={{width: 16, height: 16, background: theme.accent}} />
          <span style={{fontFamily: theme.fontBody, fontWeight: 900, fontSize: 28, letterSpacing: '0.2em', color: theme.text}}>{o.text ?? 'JOIN THE WAITLIST'}</span>
        </div>
      );
    }
    case 'typer': {
      const text: string = o.text;
      const n = Math.min(text.length, Math.floor((t - o.t0) / (o.cps ? 1 / o.cps : 0.035)));
      return (
        <div style={{position: 'absolute', left: o.x ?? 66, top: o.y ?? 1420, opacity: k, fontFamily: theme.fontBody, fontWeight: 900, fontSize: o.size ?? 34, letterSpacing: '0.12em', color: o.color ?? theme.text, whiteSpace: 'pre'}}>
          {text.slice(0, n)}
          {n < text.length && <span style={{color: theme.accent}}>▍</span>}
        </div>
      );
    }
    case 'chips': {
      const items: string[] = o.items;
      return (
        <div style={{position: 'absolute', left: o.x ?? 66, top: o.y ?? 1420, display: 'flex', gap: 14, flexWrap: 'wrap', width: 900}}>
          {items.map((it, i) => {
            const kk = ease('back', (t - o.t0 - i * (o.step ?? 0.45)) / 0.3) * (1 - ease('in', (t - (o.t1 - 0.18)) / 0.18));
            if (kk <= 0) return null;
            return (
              <div key={i} style={{transform: `scale(${kk})`, background: i === items.length - 1 && o.lastAccent ? theme.accent : 'rgba(255,255,255,0.08)', color: i === items.length - 1 && o.lastAccent ? '#0B0E14' : theme.text, border: `2px solid ${theme.accent}`, borderRadius: 10, padding: '12px 22px', fontFamily: theme.fontBody, fontWeight: 900, fontSize: 30, letterSpacing: '0.14em'}}>
                {it}
              </div>
            );
          })}
        </div>
      );
    }
    default:
      return null;
  }
};

// ---------- impacts ----------
export const ImpactFx: React.FC<{p: {x: number; y: number}; age: number; size: number; heavy?: boolean}> = ({p, age, size, heavy}) => {
  const d = heavy ? 0.5 : 0.36;
  if (age < 0 || age > d) return null;
  const k = age / d;
  const e = ease('out', k);
  const r = (heavy ? 150 : 100) * size * e;
  return (
    <g>
      <circle cx={p.x} cy={p.y} r={(heavy ? 70 : 46) * size * (1 - k * 0.5)} fill="#fff" opacity={(1 - k) * 0.55} />
      <circle cx={p.x} cy={p.y} r={r} fill="none" stroke={theme.accent} strokeWidth={14 * (1 - k)} opacity={1 - k} />
      <circle cx={p.x} cy={p.y} r={r * 0.62} fill="none" stroke="#fff" strokeWidth={6 * (1 - k)} opacity={1 - k} />
      {Array.from({length: 9}).map((_, i) => {
        const a = (i / 9) * Math.PI * 2 + 0.3;
        const r1 = r * 0.7;
        const r2 = r * 1.15;
        return <line key={i} x1={p.x + Math.cos(a) * r1} y1={p.y + Math.sin(a) * r1} x2={p.x + Math.cos(a) * r2} y2={p.y + Math.sin(a) * r2} stroke="#fff" strokeWidth={6 * (1 - k)} strokeLinecap="round" opacity={1 - k} />;
      })}
    </g>
  );
};
