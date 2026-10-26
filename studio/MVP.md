# MVP concept — iOS boxing coach for beginners and improvers (DRAFT, for approval)

**One line:** Learn the moves you see in the videos: angles, footwork, defence. Short guided
drills you can do in your living room, with a coach in your ear.

**Who it's for:** people in their first 0–2 years of boxing. Typical users: gym-goers who feel lost
in class, people who gas out or freeze in sparring, shorter fighters facing taller ones, and home
trainers with no coach.

**Not for v1:** camera punch tracking, sparring partner matching, a live coach, nutrition or
weight-cut plans. Each of these is a separate product and would slow the launch.

## Core features (v1)

| # | Feature | What it does | Video plugs it backs |
|---|---------|--------------|----------------------|
| 1 | **Guided drills (audio coach)** | 3–10 minute sessions. A voice calls out the moves ("jab, step left, pivot") with the round timer running. Works on a heavy bag, with shadowboxing, or on pads. | "the app trains you to do exactly this" for any single technique |
| 2 | **Footwork & angles track** | A drill path for pivots, L-steps, step-and-turn and cutting off the ring. Each drill opens with a 10-second top-down animation in the same style as the videos. | Angle and footwork videos (short vs tall, Lomachenko-style angles) |
| 3 | **Defence track** | Slips, rolls, parries and catch-and-counter, with a reaction mode where callouts come at random so you can't anticipate them. | Flinching, getting hit, Mayweather-style shoulder roll |
| 4 | **"Fighter style" programmes** | 1–2 week plans built around a style (pressure fighter, counter-puncher, out-boxer), in the style's own words. We never use a fighter's name, face or likeness in the app itself. | Each video's "how [fighter] does it" chapter |
| 5 | **Round timer** | Custom rounds, rest and warning bell. Free tier. | Gassing out / pacing |
| 6 | **Progress tracking** | Streak, rounds logged, drills mastered, and a self-rated skill map (footwork, defence, combos, conditioning). All on-device. | "track whether you're actually improving" |

## Monetisation (proposal)
- **Free:** round timer + 3 starter drills.
- **Pro:** subscription through Apple IAP. Proposed price **£7.99/month or £49.99/year**, to be tested.
  Free trial length to be decided.
- **Waitlist perk:** founding members get the first month free. That only works if we can deliver it
  through App Store offer codes, so I'll confirm the mechanism before we promise it anywhere.

## Build notes
- SwiftUI, on-device data, no accounts in v1.
- Drill audio is pre-recorded or TTS (Cartesia), bundled with the app or downloaded.
- The animated drill intros reuse the Remotion template we build for TikTok, so one pipeline serves
  both.
- Data protection: UK GDPR. v1 holds no personal data off-device. The waitlist email list is the only
  personal data, and it needs a privacy notice.

## Rule for video plugs
Every plug must name one of features 1–6. Approved plug lines get stored in `studio/PLUGS.md` after
you sign off this page. Anything outside the list is cut at the script stage.

## Questions for you
1. Name pick (see `brand/BRAND_OPTIONS.md`).
2. Are features 1–6 the right v1 scope? Anything to add or cut?
3. Is the pricing direction OK?
4. Voice for drills and videos: one consistent coach voice through Cartesia?
