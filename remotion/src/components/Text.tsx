import React from 'react';
import {theme} from '../theme';
import {BeatTiming, ease} from '../timeline';

type Word = {w: string; accent: boolean};

export const parseWords = (text: string, allAccent: boolean): Word[] =>
  text
    .split(/\s+/)
    .filter(Boolean)
    .map((raw) => {
      const accent = allAccent || /\*/.test(raw);
      return {w: raw.replace(/\*/g, ''), accent};
    });

const autoSize = (chars: number) => (chars <= 18 ? 150 : chars <= 30 ? 128 : chars <= 46 ? 108 : chars <= 70 ? 90 : chars <= 100 ? 76 : 66);

// Words appear in sync with the voiceover (spread by length across the spoken duration).
const wordTimes = (words: Word[], dur: number, slam: boolean) => {
  if (slam) return words.map((_, i) => i * 0.045);
  const weights = words.map((w) => w.w.length + 2.2);
  const total = weights.reduce((a, b) => a + b, 0);
  const speak = dur * 0.9;
  let acc = 0;
  return weights.map((wt) => {
    const at = (acc / total) * speak - 0.06;
    acc += wt;
    return Math.max(0, at);
  });
};

const Line: React.FC<{bt: BeatTiming; t: number; size?: number; dim?: boolean}> = ({bt, t, size, dim}) => {
  const b = bt.beat;
  const words = parseWords((b.text ?? b.vo).toUpperCase(), !!b.accent);
  const chars = words.reduce((a, w) => a + w.w.length + 1, 0);
  const fs = size ?? b.size ?? autoSize(chars);
  const times = wordTimes(words, b.voDur ?? bt.dur, !!b.slam);
  const local = t - bt.start;
  return (
    <div style={{fontFamily: theme.fontHead, fontWeight: 900, fontSize: fs, lineHeight: 0.92, letterSpacing: '0.005em', display: 'flex', flexWrap: 'wrap', columnGap: fs * 0.22, opacity: dim ? 0.9 : 1}}>
      {words.map((w, i) => {
        const k = ease('snap', (local - times[i]) / 0.16);
        if (k <= 0) return <span key={i} style={{opacity: 0}}>{w.w}</span>;
        const scale = 1 + (1 - k) * 0.28;
        return (
          <span
            key={i}
            style={{
              color: w.accent ? theme.accent : theme.text,
              opacity: Math.min(1, k * 1.4),
              transform: `translateY(${(1 - k) * fs * 0.25}px) scale(${scale})`,
              transformOrigin: 'left bottom',
              display: 'inline-block',
              textShadow: '0 6px 28px rgba(0,0,0,0.55)',
            }}
          >
            {w.w}
          </span>
        );
      })}
    </div>
  );
};

export const Headline: React.FC<{beats: BeatTiming[]; t: number}> = ({beats, t}) => {
  const idx = beats.findIndex((b) => t >= b.start && t < b.end);
  const i = idx === -1 ? beats.length - 1 : idx;
  const chain: BeatTiming[] = [beats[i]];
  let j = i;
  while (beats[j].beat.stack && j > 0) {
    j -= 1;
    chain.unshift(beats[j]);
  }
  // For stacked lines use one shared size so the pair reads as a unit.
  const stackSize = chain.length > 1 ? Math.min(...chain.map((c) => c.beat.size ?? autoSize((c.beat.text ?? c.beat.vo).length))) : undefined;
  return (
    <div style={{position: 'absolute', left: 64, top: 252, width: 930, display: 'flex', flexDirection: 'column', gap: 14}}>
      {chain.map((c) => (
        <Line key={c.beat.id} bt={c} t={t} size={stackSize} />
      ))}
    </div>
  );
};

export const ChapterTag: React.FC<{bt: BeatTiming; t: number}> = ({bt, t}) => {
  const local = t - bt.chapterStart;
  const label = bt.chapter.toUpperCase();
  const n = Math.min(label.length, Math.floor(local / 0.03));
  const sq = ease('back', local / 0.25);
  return (
    <div style={{position: 'absolute', left: 66, top: 198, display: 'flex', alignItems: 'center', gap: 16}}>
      <div style={{width: 22, height: 22, background: theme.accent, transform: `scale(${sq}) rotate(${(1 - sq) * 90}deg)`, boxShadow: `0 0 18px ${theme.accent}88`}} />
      <div style={{fontFamily: theme.fontBody, fontWeight: 800, fontSize: 27, letterSpacing: '0.32em', color: theme.textDim}}>
        {label.slice(0, n)}
        {n < label.length && <span style={{color: theme.accent}}>▍</span>}
      </div>
    </div>
  );
};
