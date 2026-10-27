import React, {useEffect, useMemo, useState} from 'react';
import {AbsoluteFill, Audio, Sequence, continueRender, delayRender, staticFile, useCurrentFrame} from 'remotion';
import {theme, W, H} from './theme';
import {Compiled, FPS, Script, actorAt, camAt, compile, ease, gloveWorld, headWorld, withIdle} from './timeline';
import {Background, Floor} from './components/Stage';
import {Mannequin} from './components/Mannequin';
import {ChapterTag, Headline} from './components/Text';
import {ImpactFx, ScreenOverlay, TopView, WorldOverlay} from './components/Overlays';
import {PROP_TOP_TYPES, PROP_WORLD_TYPES, PropTop, PropWorld} from './sports/props';

// Stage is authored at 1x and shown larger so figures fill the frame like a close shot.
const STAGE_SCALE = 1.15;

export type VideoData = {script: Script; vo: Record<string, string>; sfx: string[]};

const WORLD_TYPES = new Set(['height', 'name', 'marker', 'gap', 'zone', 'vision', 'float', 'target', ...PROP_WORLD_TYPES]);
const TOP_TYPES = new Set(['ring', 'band', 'path', 'line', ...PROP_TOP_TYPES]);
const PROP_W = new Set(PROP_WORLD_TYPES);
const PROP_T = new Set(PROP_TOP_TYPES);

// Per-script accent colour (sport verticals). Boxing keeps the default.
const DEFAULT_ACCENT = {accent: theme.accent, accentDim: theme.accentDim, glove: theme.you.glove, gloveFar: theme.you.gloveFar};
const applyAccent = (accent?: string, accentDim?: string) => {
  theme.accent = accent ?? DEFAULT_ACCENT.accent;
  theme.accentDim = accentDim ?? (accent ? accent : DEFAULT_ACCENT.accentDim);
  theme.you.glove = accent ?? DEFAULT_ACCENT.glove;
  theme.you.gloveFar = accentDim ?? (accent ? accent : DEFAULT_ACCENT.gloveFar);
};

const useFonts = () => {
  const [handle] = useState(() => delayRender('fonts'));
  useEffect(() => {
    Promise.all([
      document.fonts.load(`900 100px "Big Shoulders Display"`),
      document.fonts.load(`900 40px Inter`),
      document.fonts.load(`800 40px Inter`),
    ])
      .then(() => continueRender(handle))
      .catch(() => continueRender(handle));
  }, [handle]);
};

const SideStage: React.FC<{c: Compiled; t: number}> = ({c, t}) => {
  const overlays = c.overlays.filter((o) => WORLD_TYPES.has(o.type) && t >= o.t0 && t <= o.t1);
  const ids = Object.keys(c.actors);
  return (
    <g>
      <Floor />
      {overlays.filter((o) => o.type === 'prop' || o.type === 'plane' || o.type === 'arcTrail').map((o, i) => <PropWorld key={'p' + i} o={o} c={c} t={t} />)}
      {overlays.filter((o) => o.type === 'zone').map((o, i) => <WorldOverlay key={'z' + i} o={o} c={c} t={t} />)}
      {ids.map((id, i) => {
        const a = c.actors[id];
        const st = actorAt(c.actorKFs[id], t);
        return (
          <Mannequin
            key={id}
            pose={withIdle(st.pose, t, i * 0.37)}
            baseX={st.x}
            heightPx={a.heightPx}
            dir={a.dir}
            palette={a.palette === 'you' ? theme.you : theme.opp}
            nearSide={a.nearSide}
            reach={a.reach}
            tension={st.tension}
            opacity={st.opacity}
            hands={a.hands}
          />
        );
      })}
      {overlays.filter((o) => o.type === 'held').map((o, i) => <PropWorld key={'h' + i} o={o} c={c} t={t} />)}
      {overlays.filter((o) => o.type !== 'zone' && !PROP_W.has(o.type)).map((o, i) => <WorldOverlay key={'w' + i} o={o} c={c} t={t} />)}
      {overlays.filter((o) => o.type === 'ball' || o.type === 'arrow').map((o, i) => <PropWorld key={'b' + i} o={o} c={c} t={t} />)}
      {c.impacts.map((im, i) => {
        const age = t - im.t;
        if (age < 0 || age > 0.6) return null;
        const g = gloveWorld(c, im.actor, im.t, im.hand ?? 'lead');
        const a = c.actors[im.actor];
        // ring sits on the glove's front face, where the punch connects
        const p = {x: g.x + a.dir * a.heightPx * 0.06, y: g.y};
        return <ImpactFx key={i} p={p} age={age} size={im.size ?? 1} heavy={im.heavy} />;
      })}
    </g>
  );
};

export const Video: React.FC<{data: VideoData}> = ({data}) => {
  useFonts();
  applyAccent(data.script.accent, data.script.accentDim);
  const frame = useCurrentFrame();
  const t = frame / FPS;
  const c = useMemo(() => compile(data.script), [data]);
  const idx = Math.max(0, c.beats.findIndex((b) => t >= b.start && t < b.end));
  const bt = c.beats[idx === -1 ? c.beats.length - 1 : idx] ?? c.beats[c.beats.length - 1];
  const cam = camAt(c.cams, t);

  // camera shake after heavy impacts
  let shx = 0;
  let shy = 0;
  for (const im of c.impacts) {
    const age = t - im.t;
    if (age >= 0 && age < 0.28) {
      const amp = (im.heavy ? 16 : 7) * (1 - age / 0.28);
      shx += Math.sin(age * 90) * amp;
      shy += Math.cos(age * 77) * amp;
    }
  }
  const camT = `translate(${W / 2 + shx},${1000 + shy}) scale(${cam.zoom * STAGE_SCALE}) translate(${-cam.cx},${-cam.cy})`;

  // view transitions
  const prev = idx > 0 ? c.beats[idx - 1] : undefined;
  const changed = prev && prev.view !== bt.view;
  const tk = changed ? ease('out', (t - bt.start) / 0.32) : 1;
  const showSide = bt.view === 'side' || (changed && tk < 1);
  const showTop = bt.view === 'top' || (changed && tk < 1);
  const sideOpacity = bt.view === 'side' ? tk : 1 - tk;
  const topOpacity = bt.view === 'top' ? tk : 1 - tk;
  const topOverlays = c.overlays.filter((o) => TOP_TYPES.has(o.type) && t >= o.t0 && t <= o.t1);
  const screenOverlays = c.overlays.filter((o) => !WORLD_TYPES.has(o.type) && !TOP_TYPES.has(o.type) && t >= o.t0 && t <= o.t1);

  // ---------- audio cues ----------
  const cues = useMemo(() => {
    const list: {t: number; sfx: string; vol: number}[] = c.sfx.map((s) => ({t: s.t, sfx: s.sfx, vol: s.vol ?? 0.7}));
    c.beats.forEach((b, i) => {
      if (i > 0 && b.chapterStart === b.start && b.chapter !== c.beats[i - 1].chapter) list.push({t: b.start, sfx: 'whoosh', vol: 0.45});
      if (i > 0 && b.view !== c.beats[i - 1].view) list.push({t: b.start, sfx: 'whoosh', vol: 0.5});
      if (b.beat.slam) list.push({t: b.start, sfx: 'bass_hit', vol: 0.75});
    });
    c.overlays.forEach((o) => {
      if (o.type === 'hud' || o.type === 'score') list.push({t: o.t0, sfx: 'hud_beep', vol: 0.35});
      if (o.type === 'tag' || o.type === 'name' || o.type === 'height' || o.type === 'marker' || o.type === 'target') list.push({t: o.t0, sfx: 'pop', vol: 0.4});
      if (o.type === 'chips') (o.items as string[]).forEach((_, i) => list.push({t: o.t0 + i * (o.step ?? 0.45), sfx: 'pop', vol: 0.4}));
    });
    return list.filter((q) => data.sfx.includes(q.sfx));
  }, [c, data.sfx]);

  return (
    <AbsoluteFill style={{background: theme.bgBottom}}>
      <Background cam={cam} t={t} floor={bt.view === 'side'} />
      <svg width={W} height={H} style={{position: 'absolute', inset: 0}}>
        <g transform={camT}>
          {showSide && (
            <g opacity={sideOpacity}>
              <SideStage c={c} t={t} />
            </g>
          )}
          {showTop && (
            <g opacity={topOpacity} transform={`translate(540,1000) scale(${bt.view === 'top' ? 1.1 - 0.1 * tk : 1}) translate(-540,-1000)`}>
              {topOverlays.filter((o) => o.type === 'pitch').map((o, i) => <PropTop key={'tp' + i} o={o} t={t} />)}
              <TopView c={c} t={t} overlays={topOverlays.filter((o) => !PROP_T.has(o.type))} scale={data.script.topScale ?? 1} />
              {topOverlays.filter((o) => o.type === 'player' || o.type === 'tball').map((o, i) => <PropTop key={'tb' + i} o={o} t={t} />)}
            </g>
          )}
        </g>
      </svg>
      {showTop && (
        <div style={{position: 'absolute', right: 150, top: 1490, opacity: topOpacity * 0.85, fontFamily: theme.fontBody, fontWeight: 900, fontSize: 24, letterSpacing: '0.28em', color: theme.textDim}}>TOP VIEW</div>
      )}
      {screenOverlays.map((o, i) => (
        <ScreenOverlay key={i} o={o} t={t} />
      ))}
      <ChapterTag bt={bt} t={t} />
      <Headline beats={c.beats} t={t} />

      {c.beats.map((b) =>
        data.vo[b.beat.id] ? (
          <Sequence key={'vo' + b.beat.id} from={Math.round(b.start * FPS)} durationInFrames={Math.ceil(((b.beat.voDur ?? b.dur) + 0.3) * FPS)}>
            <Audio src={staticFile(data.vo[b.beat.id])} volume={1} />
          </Sequence>
        ) : null,
      )}
      {cues.map((q, i) => (
        <Sequence key={'sfx' + i} from={Math.max(0, Math.round(q.t * FPS))} durationInFrames={75}>
          <Audio src={staticFile('sfx/' + q.sfx + '.wav')} volume={q.vol} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export const durationFrames = (s: Script) => Math.ceil(compile(s).duration * FPS);
// re-export for stills
export {headWorld};
