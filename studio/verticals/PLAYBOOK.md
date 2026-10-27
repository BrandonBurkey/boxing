# Vertical playbook: cloning the boxing engine into a new sport

## What we proved in boxing
- **Reference:** a competitor account (JabMax) reached 88.4k followers in about 4 weeks from 23 posts.
  - Its top video: 10.1M plays, 733.8k likes, 158k saves.
  - Format: faceless flat mannequins, a contrarian two-line hook, chapter tags, a famous fighter, a one-line
    app plug at about 63% through, and a voiceover. Full breakdown in `studio/REFERENCE_STUDY.md`.
- **Our engine** (`remotion/`) renders that style from a JSON script, with:
  - an IK mannequin rig, chapter tags, a word-synced headline, HUD bars, a scoreboard and a top-down geometry view
  - impact rings, camera moves, Kokoro voiceover and synthesised SFX
- **Output so far:** three 42–52s videos, rendered in 1.5–2 minutes each.

## Why it works (the mechanics to look for in another sport)
1. **Insecurity hook.** A belief the viewer holds about their own weakness, flipped ("Short arms don't lose
   fights. Standing at his distance does.").
2. **Geometry you can draw.** Angles, distance, lines, timing, body position: things a top-down view or a
   side view with dotted lines makes obvious in 2 seconds.
3. **Famous-name search pull.** A star the audience already searches for, in the text and the caption.
4. **Beginner-saveable.** One drill or cue the viewer can try today.
5. **A plausible paid app.** A training app the audience would plausibly pay for. The plug names one real feature.

## How to score a sport (each item 1–5; weighted total out of 100)
| Factor | Weight | 5 means |
|---|---|---|
| Audience demand on TikTok | 20 | Large hashtag views for tips/training content; many amateur players |
| Format gap (saturation) | 20 | No account doing faceless animated technique explainers; or only weak/small ones |
| Geometry fit for our engine | 15 | Technique explained by angles/positions of 1–2 bodies; minimal ball physics |
| Famous-name pull | 10 | Global stars people search, with verifiable stats/heights/moments |
| App willingness to pay | 15 | Existing paid training apps with real ratings/revenue signals; adults with money |
| Engine reuse cost | 10 | Few new props/rigs needed (5 = reuse as-is) |
| Rights and safety risk | 10 | Low risk (5 = no league/footage dependency, low injury risk in advice) |

## Steps to launch a vertical (once it's chosen)
1. **Scout** (`.claude/agents/vertical-scout.md`): market and saturation report, plus 3 hook ideas and handle checks.
2. **Founder approval** of the sport, the name and the MVP feature list (one page, like `studio/MVP.md`).
3. **Engine work** (`.claude/agents/vertical-animator.md`): sport props (ball, court/pitch markings, goal,
   hoop, bat, racket), sport poses, and a theme in `remotion/src/sports/<sport>.ts`. Boxing must still render.
4. **Scripts** (`.claude/agents/vertical-scriptwriter.md`): 3 scripts in the proven arc, JSON + markdown.
5. **Fact-check** (`.claude/agents/vertical-factchecker.md`): sourced table. FAIL → reword or cut.
6. **Render**, review stills, render MP4s, build posting packages in `studio/verticals/<sport>/ready/`.
7. **Founder approves and posts.** The analyst loop starts.

## Folder layout per sport
```
studio/verticals/<sport>/
  SCOUT.md          market + saturation report (evidence tagged)
  scorecard.json    the 7 factor scores + total + verdict
  MVP.md            app concept (after approval)
  scripts/          <id>.json + SCRIPTS.md
  factcheck/        FACTCHECK.md
  ready/            posting packages
```
Renders go to `studio/renders/` with a sport prefix, e.g. `bb-v01-...mp4`.
