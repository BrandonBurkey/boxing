# Video engine (Remotion)

Renders a video in our house style from a JSON script. Output is 1080x1920 at 30fps.

## Pipeline
1. Write `studio/scripts/<id>.json`, with one beat per voiceover line. `*word*` marks an accent word.
2. Run `node prepare.mjs <id>`. It generates the voiceover with Kokoro (`studio/audio/tts.py`),
   measures each line, and writes `src/data/<id>.json`. Set `VOICE` and `SPEED` env vars to override the voice.
3. Run `node stills.mjs <id> <outdir> <frame> [...]` to check frames quickly, and `node beats.mjs <id>` to print beat start frames.
4. Run `node render.mjs <id> [...]`. The MP4 goes to `studio/renders/<id>.mp4`.
5. Run `npm run studio` to open the live editor.
   A new script id must also be imported in `src/Root.tsx`.

## Script vocabulary
- **Actor moves:**
  - `{"at", "do": "jab|cross|hook|rearHook|body|rearBody|upper|slip|flinch|hit|step", "then"?, "hold"?}`
  - `{"at", "dur", "pose": "<name>", "dx"|"x", "tension"}`
- **Poses** (`src/rig.ts`): guard, jab, cross, hook, rearHook, body, rearBody, upper, slip, crouch, flinch, hit,
  tense, tired, relaxed, stance.
- **Overlays:**
  - On the figures: height, name, marker, gap, zone, vision, float, target
  - Fixed on screen: hud, score, tag, typer, chips
  - Top view only: band, ring, path, line
- **Other beat fields:** `impacts`, `cam`, `sfx`, `view: "side"|"top"`, `slam`, `stack`, `accent`, `size`, `pad`.

## Sport props (`src/sports/props.tsx`)
- **Side view:**
  - `ball` (`kind`: basketball, football, tennis, cricket, rugby, american, golf; `legs`: `[{at, dur, from, to, arc}]`)
  - `prop` (`kind`: hoop, goal, net, stumps, cone, line)
  - `held` (`actor`, `hand`, `kind`: racket, bat, club, stick; `angle`, `len`)
  - `arrow` (`points`, `label`, `dashed`)
- **Top view:**
  - `pitch` (`rects`, `lines`, `circles`, `arcs`)
  - `player` (extra dots, static or with `legs`)
  - `tball`
- **Script-level options:** `accent` / `accentDim` change the brand colour. Actor `"hands": "hands"` swaps boxing gloves for bare hands.
- `props-test` is a smoke-test composition. Boxing output was checked byte-identical after adding props.

## Look
Palette and fonts are in `src/theme.ts`. Change the accent there when the brand is picked.
The figures are drawn procedurally: two-bone IK for arms and legs, tapered capsules, joint caps.
No real faces, likenesses or third-party assets.
