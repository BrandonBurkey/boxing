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

## Look
Palette and fonts are in `src/theme.ts`. Change the accent there when the brand is picked.
The figures are drawn procedurally: two-bone IK for arms and legs, tapered capsules, joint caps.
No real faces, likenesses or third-party assets.
