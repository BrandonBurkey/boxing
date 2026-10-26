import {Pose, POSES, lerp, lerpPose, solve} from './rig';
import {FLOOR_Y} from './theme';

export const FPS = 30;
export const PX_PER_INCH = 8;

// ---------- Script types (authored JSON) ----------
export type Move = {
  at: number; // seconds from beat start
  dur?: number;
  pose?: string | Partial<Pose>;
  x?: number; // base x in world px
  dx?: number; // relative base move
  tension?: number;
  opacity?: number;
  ease?: Ease;
  do?: 'jab' | 'cross' | 'hook' | 'rearHook' | 'body' | 'rearBody' | 'upper' | 'slip' | 'step' | 'flinch' | 'hit';
  hold?: number;
  speed?: number;
  then?: string; // pose to return to after a punch (default: current pose name)
};

export type TopMove = {at: number; dur?: number; x?: number; y?: number; a?: number; ease?: Ease};

export type ActorDef = {
  id: string;
  palette: 'you' | 'opp';
  heightIn: number;
  x: number;
  dir: 1 | -1;
  nearSide: 'lead' | 'rear';
  reach?: number;
  pose?: string;
  top?: {x: number; y: number; a: number};
};

export type Overlay = {type: string; at?: number; dur?: number; [k: string]: any};
export type Impact = {at: number; actor: string; hand?: 'lead' | 'rear'; size?: number; heavy?: boolean};
export type Cam = {at: number; dur?: number; zoom?: number; cx?: number; cy?: number; ease?: Ease};
export type Sfx = {at: number; sfx: string; vol?: number};

export type Beat = {
  id: string;
  chapter?: string;
  vo: string;
  text?: string; // on-screen override (default vo). *word* = accent.
  accent?: boolean; // whole line accent
  stack?: boolean; // keep previous line on screen (hook / payoff)
  size?: number;
  view?: 'side' | 'top';
  pad?: number;
  voDur?: number;
  actors?: Record<string, Move[]>;
  top?: Record<string, TopMove[]>;
  overlays?: Overlay[];
  impacts?: Impact[];
  cam?: Cam[];
  sfx?: Sfx[];
  slam?: boolean;
};

export type Script = {
  id: string;
  title: string;
  caption?: string;
  actors: ActorDef[];
  beats: Beat[];
  endHold?: number;
  topScale?: number;
};

export type Ease = 'inout' | 'out' | 'in' | 'linear' | 'snap' | 'back';
export const ease = (e: Ease | undefined, t: number) => {
  t = Math.min(1, Math.max(0, t));
  switch (e) {
    case 'linear':
      return t;
    case 'in':
      return t * t * t;
    case 'out':
      return 1 - Math.pow(1 - t, 3);
    case 'snap':
      return 1 - Math.pow(1 - t, 5);
    case 'back': {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    }
    default:
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
};

// ---------- Compiled timeline ----------
type ActorState = {pose: Pose; x: number; tension: number; opacity: number};
type KF = ActorState & {t: number; ease?: Ease};
type TopState = {x: number; y: number; a: number};
type TKF = TopState & {t: number; ease?: Ease};

export type BeatTiming = {beat: Beat; start: number; end: number; dur: number; index: number; chapter: string; chapterStart: number; view: 'side' | 'top'};

export type Compiled = {
  script: Script;
  beats: BeatTiming[];
  duration: number;
  actorKFs: Record<string, KF[]>;
  topKFs: Record<string, TKF[]>;
  overlays: (Overlay & {t0: number; t1: number; beatIndex: number})[];
  impacts: (Impact & {t: number})[];
  cams: (Cam & {t: number})[];
  sfx: (Sfx & {t: number})[];
  actors: Record<string, ActorDef & {heightPx: number}>;
};

const poseOf = (p: string | Partial<Pose> | undefined, base: Pose): Pose => {
  if (!p) return base;
  if (typeof p === 'string') {
    const found = POSES[p];
    if (!found) throw new Error('Unknown pose ' + p);
    return {...found};
  }
  return {...base, ...p};
};

const PUNCH: Record<string, {pose: string; out: number; back: number; hold: number}> = {
  jab: {pose: 'jab', out: 0.11, back: 0.17, hold: 0.05},
  cross: {pose: 'cross', out: 0.13, back: 0.2, hold: 0.06},
  hook: {pose: 'hook', out: 0.14, back: 0.2, hold: 0.06},
  rearHook: {pose: 'rearHook', out: 0.15, back: 0.2, hold: 0.06},
  body: {pose: 'body', out: 0.15, back: 0.22, hold: 0.07},
  rearBody: {pose: 'rearBody', out: 0.15, back: 0.22, hold: 0.07},
  upper: {pose: 'upper', out: 0.13, back: 0.2, hold: 0.06},
  slip: {pose: 'slip', out: 0.16, back: 0.24, hold: 0.18},
  flinch: {pose: 'flinch', out: 0.1, back: 0.35, hold: 0.35},
  hit: {pose: 'hit', out: 0.07, back: 0.3, hold: 0.08},
};

export const PUNCH_SFX = new Set(['jab', 'cross', 'hook', 'rearHook', 'body', 'rearBody', 'upper']);

export const estimateVo = (text: string) => {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1.1, words / 2.75 + 0.25);
};

export const compile = (script: Script): Compiled => {
  const actors: Compiled['actors'] = {};
  const actorKFs: Compiled['actorKFs'] = {};
  const topKFs: Compiled['topKFs'] = {};
  const lastPoseName: Record<string, string> = {};
  script.actors.forEach((a) => {
    actors[a.id] = {...a, heightPx: a.heightIn * PX_PER_INCH};
    const pose = poseOf(a.pose ?? 'guard', POSES.guard);
    lastPoseName[a.id] = a.pose ?? 'guard';
    actorKFs[a.id] = [{t: 0, pose, x: a.x, tension: 0, opacity: 1}];
    const tp = a.top ?? {x: a.x, y: 1060, a: a.dir === 1 ? 0 : 180};
    topKFs[a.id] = [{t: 0, ...tp}];
  });

  const beats: BeatTiming[] = [];
  const overlays: Compiled['overlays'] = [];
  const impacts: Compiled['impacts'] = [];
  const cams: Compiled['cams'] = [];
  const sfx: Compiled['sfx'] = [];
  let t = 0;
  let chapter = '';
  let chapterStart = 0;
  let view: 'side' | 'top' = 'side';

  const push = (id: string, k: KF) => {
    const list = actorKFs[id];
    const last = list[list.length - 1];
    if (k.t < last.t) k.t = last.t;
    list.push(k);
  };
  const lastOf = (id: string) => actorKFs[id][actorKFs[id].length - 1];

  script.beats.forEach((b, index) => {
    const dur = (b.voDur ?? estimateVo(b.vo)) + (b.pad ?? 0.22);
    if (b.chapter && b.chapter !== chapter) {
      chapter = b.chapter;
      chapterStart = t;
    }
    if (b.view) view = b.view;
    beats.push({beat: b, start: t, end: t + dur, dur, index, chapter, chapterStart, view});

    Object.entries(b.actors ?? {}).forEach(([id, moves]) => {
      const H = actors[id].heightPx;
      moves.forEach((m) => {
        const t0 = t + m.at;
        const cur = lastOf(id);
        const holdStart = {...cur, pose: {...cur.pose}, t: Math.max(t0, cur.t)};
        if (m.do && PUNCH[m.do]) {
          const spec = PUNCH[m.do];
          const sp = m.speed ?? 1;
          const back = poseOf(m.then ?? lastPoseName[id], POSES.guard);
          push(id, holdStart);
          push(id, {...holdStart, pose: poseOf(spec.pose, cur.pose), t: holdStart.t + spec.out / sp, ease: 'snap'});
          const hold = m.hold ?? spec.hold;
          push(id, {...lastOf(id), pose: {...lastOf(id).pose}, t: lastOf(id).t + hold / sp});
          push(id, {...lastOf(id), pose: back, t: lastOf(id).t + spec.back / sp, ease: 'inout'});
          if (m.then) lastPoseName[id] = m.then;
          if (PUNCH_SFX.has(m.do)) sfx.push({t: holdStart.t, at: m.at, sfx: 'whoosh_fast', vol: 0.55});
          return;
        }
        if (m.do === 'step') {
          const d = m.dur ?? 0.36;
          const target = m.x ?? cur.x + (m.dx ?? 0);
          const delta = ((target - cur.x) / H) * actors[id].dir;
          push(id, holdStart);
          const mid = {...cur.pose, fx: cur.pose.fx + delta * 0.6, fl: 0.03, hx: cur.pose.hx + delta * 0.3};
          push(id, {...holdStart, pose: mid, t: holdStart.t + d * 0.45, ease: 'out'});
          push(id, {...holdStart, pose: {...cur.pose}, x: target, t: holdStart.t + d, ease: 'inout'});
          sfx.push({t: holdStart.t, at: m.at, sfx: 'whoosh_fast', vol: 0.25});
          return;
        }
        const d = m.dur ?? 0.3;
        const pose = poseOf(m.pose, cur.pose);
        if (typeof m.pose === 'string') lastPoseName[id] = m.pose;
        push(id, holdStart);
        push(id, {
          t: holdStart.t + d,
          pose,
          x: m.x ?? cur.x + (m.dx ?? 0),
          tension: m.tension ?? cur.tension,
          opacity: m.opacity ?? cur.opacity,
          ease: m.ease ?? 'inout',
        });
      });
    });

    Object.entries(b.top ?? {}).forEach(([id, moves]) => {
      moves.forEach((m) => {
        const list = topKFs[id];
        const cur = list[list.length - 1];
        const t0 = Math.max(t + m.at, cur.t);
        list.push({...cur, t: t0});
        list.push({x: m.x ?? cur.x, y: m.y ?? cur.y, a: m.a ?? cur.a, t: t0 + (m.dur ?? 0.4), ease: m.ease ?? 'inout'});
      });
    });

    (b.overlays ?? []).forEach((o) => {
      const t0 = t + (o.at ?? 0);
      const t1 = o.dur != null ? t0 + o.dur : o.untilBeat ? Number.POSITIVE_INFINITY : t + dur;
      overlays.push({...o, t0, t1, beatIndex: index});
    });
    (b.impacts ?? []).forEach((im) => {
      impacts.push({...im, t: t + im.at});
      sfx.push({t: t + im.at, at: im.at, sfx: im.heavy ? 'impact_heavy' : 'impact_light', vol: im.heavy ? 0.9 : 0.75});
    });
    (b.cam ?? []).forEach((c) => cams.push({...c, t: t + c.at}));
    (b.sfx ?? []).forEach((s) => sfx.push({...s, t: t + s.at}));
    t += dur;
  });

  // overlays with untilBeat: close at the end of that beat id
  overlays.forEach((o) => {
    if (o.t1 === Number.POSITIVE_INFINITY) {
      const target = beats.find((bt) => bt.beat.id === o.untilBeat);
      o.t1 = target ? target.end : t;
    }
  });

  return {script, beats, duration: t + (script.endHold ?? 0.6), actorKFs, topKFs, overlays, impacts, cams, sfx, actors};
};

export const actorAt = (kfs: KF[], t: number): ActorState => {
  if (t <= kfs[0].t) return kfs[0];
  for (let i = 0; i < kfs.length - 1; i++) {
    const a = kfs[i];
    const b = kfs[i + 1];
    if (t >= a.t && t <= b.t) {
      const span = b.t - a.t;
      const k = span <= 0 ? 1 : ease(b.ease, (t - a.t) / span);
      return {pose: lerpPose(a.pose, b.pose, k), x: lerp(a.x, b.x, k), tension: lerp(a.tension, b.tension, k), opacity: lerp(a.opacity, b.opacity, k)};
    }
  }
  return kfs[kfs.length - 1];
};

export const topAt = (kfs: TKF[], t: number): TopState => {
  if (t <= kfs[0].t) return kfs[0];
  for (let i = 0; i < kfs.length - 1; i++) {
    const a = kfs[i];
    const b = kfs[i + 1];
    if (t >= a.t && t <= b.t) {
      const span = b.t - a.t;
      const k = span <= 0 ? 1 : ease(b.ease, (t - a.t) / span);
      return {x: lerp(a.x, b.x, k), y: lerp(a.y, b.y, k), a: lerp(a.a, b.a, k)};
    }
  }
  return kfs[kfs.length - 1];
};

export const camAt = (cams: Compiled['cams'], t: number) => {
  let cur = {zoom: 1, cx: 540, cy: 1000};
  for (const c of cams) {
    if (t < c.t) break;
    const d = c.dur ?? 0.6;
    const k = ease(c.ease ?? 'inout', (t - c.t) / d);
    const target = {zoom: c.zoom ?? cur.zoom, cx: c.cx ?? cur.cx, cy: c.cy ?? cur.cy};
    cur = {zoom: lerp(cur.zoom, target.zoom, k), cx: lerp(cur.cx, target.cx, k), cy: lerp(cur.cy, target.cy, k)};
  }
  return cur;
};

// Idle bounce so figures never look frozen.
export const withIdle = (pose: Pose, t: number, phase: number): Pose => {
  const s = Math.sin((t * 1.7 + phase) * Math.PI * 2);
  const c = Math.cos((t * 1.7 + phase) * Math.PI * 2);
  return {...pose, hy: pose.hy + s * 0.0055, lgy: pose.lgy + c * 0.006, rgy: pose.rgy + s * 0.005, hdy: pose.hdy + s * 0.003};
};

export const worldPoint = (a: ActorDef & {heightPx: number}, x: number, p: {x: number; y: number}) => ({
  x: x + a.dir * p.x * a.heightPx,
  y: FLOOR_Y - p.y * a.heightPx,
});

export const gloveWorld = (c: Compiled, actorId: string, t: number, hand: 'lead' | 'rear') => {
  const a = c.actors[actorId];
  const st = actorAt(c.actorKFs[actorId], t);
  const s = solve(st.pose, a.reach ?? 1);
  return worldPoint(a, st.x, s[hand].glove);
};

export const headWorld = (c: Compiled, actorId: string, t: number) => {
  const a = c.actors[actorId];
  const st = actorAt(c.actorKFs[actorId], t);
  const s = solve(st.pose, a.reach ?? 1);
  return {head: worldPoint(a, st.x, s.head), top: worldPoint(a, st.x, s.headTop), chest: worldPoint(a, st.x, s.chest), shoulder: worldPoint(a, st.x, s.shoulder)};
};
