// Mannequin rig: pose parameters -> 2D joint positions (side view).
// Local units are fractions of figure height, x = forward, y = up from the floor.

export type Pose = {
  fx: number; bx: number; // front / back ankle x
  fl: number; bl: number; // foot lift
  hx: number; hy: number; // hip centre
  lean: number; // torso lean, degrees forward
  shrug: number; // 0..1 shoulders up to ears
  hdx: number; hdy: number; // head offset
  lgx: number; lgy: number; // lead glove target, relative to shoulder
  rgx: number; rgy: number; // rear glove target, relative to shoulder
  club: number; // held-club angle in degrees: 0 forward, 90 down, 180 back, -90 up (used only by golf props)
};

const RAW_POSES: Record<string, Omit<Pose, 'club'> & {club?: number}> = {
  guard: {fx: 0.17, bx: -0.17, fl: 0, bl: 0, hx: -0.01, hy: 0.465, lean: 9, shrug: 0, hdx: 0.0, hdy: 0, lgx: 0.17, lgy: 0.05, rgx: 0.1, rgy: 0.065},
  jab: {fx: 0.19, bx: -0.16, fl: 0, bl: 0, hx: 0.02, hy: 0.46, lean: 14, shrug: 0, hdx: 0.0, hdy: -0.005, lgx: 0.6, lgy: 0.06, rgx: 0.1, rgy: 0.07},
  cross: {fx: 0.19, bx: -0.15, fl: 0, bl: 0.012, hx: 0.04, hy: 0.455, lean: 18, shrug: 0, hdx: 0.0, hdy: -0.01, lgx: 0.12, lgy: 0.06, rgx: 0.6, rgy: 0.06},
  hook: {fx: 0.18, bx: -0.17, fl: 0, bl: 0, hx: 0.02, hy: 0.45, lean: 12, shrug: 0, hdx: 0, hdy: -0.01, lgx: 0.27, lgy: 0.04, rgx: 0.1, rgy: 0.07},
  rearHook: {fx: 0.18, bx: -0.16, fl: 0, bl: 0.01, hx: 0.03, hy: 0.45, lean: 14, shrug: 0, hdx: 0, hdy: -0.01, lgx: 0.11, lgy: 0.06, rgx: 0.3, rgy: 0.03},
  body: {fx: 0.2, bx: -0.17, fl: 0, bl: 0, hx: 0.03, hy: 0.4, lean: 24, shrug: 0, hdx: 0.0, hdy: -0.01, lgx: 0.34, lgy: -0.16, rgx: 0.09, rgy: 0.05},
  rearBody: {fx: 0.2, bx: -0.16, fl: 0, bl: 0.01, hx: 0.04, hy: 0.4, lean: 26, shrug: 0, hdx: 0.0, hdy: -0.01, lgx: 0.11, lgy: 0.06, rgx: 0.36, rgy: -0.15},
  upper: {fx: 0.18, bx: -0.17, fl: 0, bl: 0, hx: 0.03, hy: 0.44, lean: 12, shrug: 0, hdx: 0, hdy: 0, lgx: 0.11, lgy: 0.06, rgx: 0.24, rgy: 0.1},
  slip: {fx: 0.18, bx: -0.18, fl: 0, bl: 0, hx: 0.0, hy: 0.41, lean: 20, shrug: 0, hdx: 0.03, hdy: -0.03, lgx: 0.16, lgy: 0.06, rgx: 0.09, rgy: 0.07},
  crouch: {fx: 0.2, bx: -0.18, fl: 0, bl: 0, hx: 0.02, hy: 0.405, lean: 26, shrug: 0, hdx: 0.02, hdy: -0.02, lgx: 0.15, lgy: 0.07, rgx: 0.09, rgy: 0.08},
  flinch: {fx: 0.16, bx: -0.2, fl: 0, bl: 0, hx: -0.05, hy: 0.47, lean: -10, shrug: 0.7, hdx: -0.035, hdy: -0.01, lgx: 0.09, lgy: 0.12, rgx: 0.05, rgy: 0.12},
  hit: {fx: 0.16, bx: -0.19, fl: 0, bl: 0, hx: -0.04, hy: 0.465, lean: -8, shrug: 0.2, hdx: -0.04, hdy: 0.0, lgx: 0.14, lgy: 0.0, rgx: 0.06, rgy: 0.02},
  tense: {fx: 0.17, bx: -0.17, fl: 0, bl: 0, hx: -0.01, hy: 0.47, lean: 6, shrug: 1, hdx: 0, hdy: 0, lgx: 0.16, lgy: 0.08, rgx: 0.1, rgy: 0.09},
  tired: {fx: 0.17, bx: -0.18, fl: 0, bl: 0, hx: -0.01, hy: 0.45, lean: 17, shrug: 0, hdx: 0.01, hdy: -0.02, lgx: 0.15, lgy: -0.1, rgx: 0.09, rgy: -0.08},
  relaxed: {fx: 0.17, bx: -0.17, fl: 0, bl: 0, hx: -0.01, hy: 0.46, lean: 7, shrug: 0, hdx: 0, hdy: 0, lgx: 0.16, lgy: 0.035, rgx: 0.1, rgy: 0.05},
  stance: {fx: 0.15, bx: -0.15, fl: 0, bl: 0, hx: 0.0, hy: 0.475, lean: 5, shrug: 0, hdx: 0, hdy: 0, lgx: 0.15, lgy: 0.04, rgx: 0.09, rgy: 0.06},
  // ---- golf, down-the-line view (golfer faces the ball, to the right) ----
  address: {fx: 0.04, bx: 0.0, fl: 0, bl: 0, hx: -0.08, hy: 0.5, lean: 40, shrug: 0, hdx: 0.01, hdy: 0, lgx: 0.14, lgy: -0.3, rgx: 0.15, rgy: -0.28, club: 60},
  takeaway: {fx: 0.04, bx: 0.0, fl: 0, bl: 0, hx: -0.08, hy: 0.5, lean: 39, shrug: 0, hdx: 0.01, hdy: 0, lgx: 0.07, lgy: -0.28, rgx: 0.08, rgy: -0.26, club: 158},
  halfBack: {fx: 0.04, bx: 0.0, fl: 0, bl: 0, hx: -0.085, hy: 0.5, lean: 38, shrug: 0, hdx: 0.01, hdy: 0, lgx: -0.03, lgy: -0.19, rgx: -0.02, rgy: -0.17, club: 182},
  top: {fx: 0.04, bx: 0.0, fl: 0.004, bl: 0, hx: -0.085, hy: 0.5, lean: 36, shrug: 0, hdx: 0.01, hdy: 0, lgx: -0.04, lgy: 0.12, rgx: -0.03, rgy: 0.14, club: 200},
  wideTop: {fx: 0.04, bx: 0.0, fl: 0.004, bl: 0, hx: -0.085, hy: 0.5, lean: 36, shrug: 0, hdx: 0.01, hdy: 0, lgx: -0.12, lgy: 0.16, rgx: -0.11, rgy: 0.18, club: 196},
  shortTop: {fx: 0.04, bx: 0.0, fl: 0.004, bl: 0, hx: -0.085, hy: 0.5, lean: 36, shrug: 0.3, hdx: 0.01, hdy: 0, lgx: 0.04, lgy: 0.05, rgx: 0.05, rgy: 0.07, club: 235},
  transition: {fx: 0.04, bx: 0.0, fl: 0, bl: 0, hx: -0.075, hy: 0.5, lean: 37, shrug: 0, hdx: 0.01, hdy: 0, lgx: -0.03, lgy: 0.0, rgx: -0.02, rgy: 0.02, club: 168},
  overTop: {fx: 0.04, bx: 0.0, fl: 0, bl: 0, hx: -0.07, hy: 0.5, lean: 33, shrug: 0, hdx: 0.01, hdy: 0, lgx: 0.19, lgy: -0.04, rgx: 0.2, rgy: -0.02, club: 242},
  impact: {fx: 0.04, bx: 0.0, fl: 0, bl: 0.012, hx: -0.065, hy: 0.5, lean: 37, shrug: 0, hdx: 0.0, hdy: 0, lgx: 0.15, lgy: -0.29, rgx: 0.16, rgy: -0.27, club: 62},
  earlyExt: {fx: 0.04, bx: 0.0, fl: 0, bl: 0.02, hx: 0.01, hy: 0.54, lean: 24, shrug: 0, hdx: 0.0, hdy: 0, lgx: 0.13, lgy: -0.32, rgx: 0.14, rgy: -0.3, club: 60},
  through: {fx: 0.04, bx: 0.0, fl: 0, bl: 0.03, hx: -0.05, hy: 0.51, lean: 30, shrug: 0, hdx: 0.0, hdy: 0, lgx: 0.25, lgy: -0.12, rgx: 0.25, rgy: -0.1, club: 0},
  finish: {fx: 0.04, bx: -0.01, fl: 0, bl: 0.06, hx: -0.01, hy: 0.57, lean: 3, shrug: 0, hdx: 0.0, hdy: 0, lgx: -0.06, lgy: 0.12, rgx: -0.05, rgy: 0.14, club: -165},
  offBalance: {fx: 0.12, bx: -0.02, fl: 0.04, bl: 0.05, hx: -0.07, hy: 0.55, lean: -12, shrug: 0, hdx: -0.02, hdy: 0, lgx: -0.02, lgy: 0.1, rgx: -0.01, rgy: 0.12, club: -140},
};

export const POSES: Record<string, Pose> = Object.fromEntries(Object.entries(RAW_POSES).map(([k, p]) => [k, {club: 54, ...p} as Pose]));

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export const lerpPose = (a: Pose, b: Pose, t: number): Pose => {
  const out = {} as Pose;
  (Object.keys(a) as (keyof Pose)[]).forEach((k) => {
    out[k] = lerp(a[k], b[k], t);
  });
  return out;
};

type V = {x: number; y: number};
const v = (x: number, y: number): V => ({x, y});
const add = (a: V, b: V) => v(a.x + b.x, a.y + b.y);
const rad = (d: number) => (d * Math.PI) / 180;

// Two-bone IK. bendSign picks which side the middle joint goes.
export const ik = (root: V, target: V, l1: number, l2: number, bendSign: number) => {
  const dx = target.x - root.x;
  const dy = target.y - root.y;
  let d = Math.hypot(dx, dy);
  const maxD = l1 + l2 - 1e-4;
  const minD = Math.abs(l1 - l2) + 1e-4;
  const dirA = Math.atan2(dy, dx);
  d = Math.min(Math.max(d, minD), maxD);
  const cosA = (l1 * l1 + d * d - l2 * l2) / (2 * l1 * d);
  const a = Math.acos(Math.min(1, Math.max(-1, cosA)));
  const ang = dirA + bendSign * a;
  const mid = v(root.x + Math.cos(ang) * l1, root.y + Math.sin(ang) * l1);
  const endAng = Math.atan2(target.y - mid.y, target.x - mid.x);
  // When the target is out of reach the chain points straight at it.
  const end = v(root.x + Math.cos(dirA) * d, root.y + Math.sin(dirA) * d);
  const dEnd = Math.hypot(end.x - mid.x, end.y - mid.y);
  const endFixed = v(mid.x + ((end.x - mid.x) / dEnd) * l2, mid.y + ((end.y - mid.y) / dEnd) * l2);
  return {mid, end: endFixed, endAng};
};

export const DIM = {
  spine: 0.3,
  thigh: 0.255,
  shin: 0.25,
  upper: 0.17,
  fore: 0.16,
  headRx: 0.064,
  headRy: 0.074,
  glove: 0.06,
};

export type Solved = {
  hip: V; chest: V; shoulder: V; neck: V; head: V;
  lead: {sh: V; el: V; wr: V; glove: V};
  rear: {sh: V; el: V; wr: V; glove: V};
  front: {hip: V; knee: V; ankle: V; toe: V; heel: V};
  back: {hip: V; knee: V; ankle: V; toe: V; heel: V};
  headTop: V;
};

// reach scales arm length (1 = default proportions).
export const solve = (p: Pose, reach = 1): Solved => {
  const hip = v(p.hx, p.hy);
  const L = rad(p.lean);
  const up = v(Math.sin(L), Math.cos(L));
  const shoulder = add(hip, v(up.x * DIM.spine, up.y * DIM.spine - 0.012 * p.shrug));
  const chest = add(hip, v(up.x * DIM.spine * 0.62, up.y * DIM.spine * 0.62));
  const neckLen = 0.045 * (1 - 0.75 * p.shrug);
  const hL = rad(p.lean * 0.6);
  const hu = v(Math.sin(hL), Math.cos(hL));
  const neck = add(shoulder, v(hu.x * neckLen * 0.5, hu.y * neckLen * 0.5));
  const head = add(shoulder, v(hu.x * (neckLen + DIM.headRy) + p.hdx + 0.012, hu.y * (neckLen + DIM.headRy) + p.hdy));
  const headTop = v(head.x, head.y + DIM.headRy);

  const up1 = DIM.upper * reach;
  const fo1 = DIM.fore * reach;
  const arm = (shOff: V, gx: number, gy: number) => {
    const sh = add(shoulder, shOff);
    const target = add(shoulder, v(gx, gy));
    // Elbow bends downward (bendSign chosen so the elbow sits below the line).
    const sol = ik(sh, target, up1, fo1, target.x >= sh.x ? -1 : 1);
    const dir = v(Math.cos(sol.endAng), Math.sin(sol.endAng));
    const wr = sol.end;
    const glove = add(wr, v(dir.x * DIM.glove * 0.55, dir.y * DIM.glove * 0.55));
    return {sh, el: sol.mid, wr, glove};
  };
  const lead = arm(v(0.012, -0.012), p.lgx, p.lgy);
  const rear = arm(v(-0.03, -0.006), p.rgx, p.rgy);

  const leg = (hOff: number, ax: number, lift: number) => {
    const h = add(hip, v(hOff, 0));
    const ankle = v(ax, 0.034 + lift);
    // Knees bend forward.
    const sol = ik(h, ankle, DIM.thigh, DIM.shin, ankle.x >= h.x ? 1 : 1);
    const knee = sol.mid.x < Math.min(h.x, ankle.x) - 0.02 ? ik(h, ankle, DIM.thigh, DIM.shin, -1).mid : sol.mid;
    return {hip: h, knee, ankle: sol.end, toe: v(sol.end.x + 0.075, Math.max(0.018, sol.end.y - 0.016)), heel: v(sol.end.x - 0.03, Math.max(0.018, sol.end.y - 0.012))};
  };
  const front = leg(0.015, p.fx, p.fl);
  const back = leg(-0.015, p.bx, p.bl);
  return {hip, chest, shoulder, neck, head, lead, rear, front, back, headTop};
};
