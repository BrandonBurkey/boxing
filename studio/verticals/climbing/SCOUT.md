# Climbing: vertical scout

Checked 2026-10-27. TikTok numbers come from plain `curl` of public profile pages (`webapp.user-detail`).

## Verdict: MAYBE, 69/100. Format looks OPEN.
- I found no animated climbing-technique account, and the geometry is excellent: hips to the wall, a triangle
  base, weight over the feet.
- But the audience is smaller. The UK has about 1M indoor climbers a year [snippet]. The climbing-technique
  accounts I found on TikTok are tiny.
- The app market is a cheap, crowded mix: Crimpd and KAYA at about $60 a year, plus a wave of new
  "AI bouldering coach" apps.
- Honnold is famous outside climbing. Few other names are.
- A good second or third vertical, not a first.

## 1. Saturation
**Searches run (5):**
- "climbing technique animation tiktok account footwork animated stick figure"
- `site:tiktok.com` climbing animation footwork body positioning
- "bouldering technique animated explainer instagram reels 3D climber drop knee flagging animation account"
- "climbing tiktok animated beta explainer Honnold Ondra technique animation"
- "climbing app waitlist tiktok bouldering technique AI coach app beta visualization"

The shared search budget ran out after these, short of the brief's 8. Treat "OPEN" as provisional.

**Result.** No animated or faceless climbing-technique account surfaced on TikTok, Instagram or YouTube.
[snippet]
- Hits were stick-figure walk-cycle tutorials, stock footage, Ondra/Honnold conversation videos, and one
  YouTube "rock climbing stick figure" gag.
- @rockclimbingvideos on Instagram (56k, reposts real footage). [snippet] (https://www.instagram.com/rockclimbingvideos/)

**Accounts checked.** Plain curl, 2026-10-27. [verified-fetch]

| Handle | Followers | Likes | Videos | Note |
|---|---|---|---|---|
| @hoopersbeta | 3,892 | 33k | 56 | Training/injury library; points to YouTube |
| @rockclimbingvideos | 3,757 | 110k | 86 | Reposted real footage |
| @adamondra | 28 | 463 | 10 | Not Ondra (bio points to unrelated IG) |
| @crimpd | 61 | 23 | 0 | Not the app |
| @latticetraining | 2 | 0 | 0 | Not Lattice |
| @magnusmidtbo, @kayaclimb | — | — | — | 10221, no such user |

The big climbing creators' real TikTok handles were not found within budget. Do not read the table above as
"climbing TikTok is small". It shows only that these guessed handles are not the official ones.

**Classification: OPEN** (provisional).
- Strongest incumbent found: none animated.
- Largest climbing-education account verified: **@hoopersbeta, 3,892 TikTok followers** [verified-fetch]. It
  is live action.

## 2. Demand
**TikTok hashtags.** `/tag/climbingtips` and `/tag/bouldering` returned HTTP 200 with no `challenge-detail`.
Not present. [verified-fetch]

**Participation:**
- UK: about **1 million** people climb indoors each year, growing about 20% a year, per the Association of
  British Climbing Walls. [snippet] (https://www.yorkshireeveningpost.co.uk/business/scaling-new-heights-in-harrogate-4569749)
- UK: of those, about 100,000 climb at least twice a month. [snippet] (https://sustainhealth.fit/lifestyle/rise-of-bouldering-2024/)
- Sport England's Nov 2024–25 release does not mention climbing. [verified-fetch] (https://www.sportengland.org/activelivesapril26)
- North America: 875 climbing gyms at end-2024. [snippet] (https://climbingbusinessjournal.com/gyms-and-trends-2024/)
- North America: 53 new gyms in 2025, with 73% of operators reporting worsening conditions. [snippet] (https://www.athleticbusiness.com/operations/budgeting/article/15817979/study-climbing-gym-numbers-slip-in-2025-revenues-flat)
- US: "upwards of 7m Americans are climbers". [snippet] (https://thehustle.co/originals/how-climbing-gyms-took-over-the-world). This is a secondary source.

## 3. App market
Ratings are from Apple lookup, US store. [verified-fetch]

| App | Price model | US rating (count) | Signal |
|---|---|---|---|
| KAYA | Free + Pro $59.99/yr or $9.99/mo [snippet] | 4.29 (1,329) | Seed funding, reported $3M–8M (sources conflict) [snippet] (https://app.dealroom.co/companies/kaya_climb) |
| Crimpd | Free + Crimpd+ $12.99/mo, $59.99/yr [snippet] | 4.57 (101) | Training plans; no funding found |
| Climbah (AI video feedback) | Free + IAP | 4.88 (32) | New entrant |
| Bouldering AI: Coach | Free + subscription | no ratings yet | New entrant (Aug 2026 version) |
| Visionclimb, MoveCl, klettra | AI hold detection / video feedback | not checked | Crowded new-entrant field [snippet] |

**Judgement.**
- Spend sits at about $60 a year, with modest rating counts.
- No strong incumbent owns "learn technique on your phone". But five or more fresh AI-coach apps are
  attacking it, so our app would be one of many.

## 4. Format fit: 10 hooks
- Devices: D = distance line, A = angle, T = timing bar, V = weight vector.
- No ball physics. All are one body. **★ = needs a hip twist (3D) that a flat rig must fake.**

1. **"Weak fingers don't pull you off. Hips away from the wall do."** Ondra. D: hip-to-wall distance.
   [snippet] (https://www.hants.gov.uk/thingstodo/outdoors-news/indoor-climbing-technique)
2. **"You don't need more grip. You need weight on your feet."** Honnold. V: centre-of-mass line through the
   feet.
3. **"A narrow stance isn't control. A wide base is."** Garnbret. A: triangle base. [snippet] (https://www.gubbies.com/blog/foot-technique-for-beginners)
4. **"Strong arms don't save you. Straight arms do."** Ondra. A: elbow angle vs a pump meter HUD.
5. **"Short arms don't stop your reach. Square hips do."** Garnbret. ★ Drop knee, A: hip rotation.
6. **"Flagging isn't for show. It stops the barn door."** Ondra. V: centre of mass outside the base.
7. **"Small footholds don't kill your feet. Standing on your arch does."** Honnold. A: toe-on-edge close-up.
8. **"Dynos aren't jumps. They're timed hips."** Ondra. T: hip-drive timing bar.
9. **"Looking up isn't the mistake. Not watching your foot land is."** Honnold. T: eyes-on-foot bar.
10. **"Overgripping doesn't make you safe. It makes you pump out."** Honnold. Grip-force HUD bar.

Honnold, Ondra and Garnbret facts (routes, grades, heights) are not sourced here. The fact-checker must source
them, or they get cut.

**Props and rigs needed:**
- climbing wall plane (vertical and overhang angle)
- hold set (jug, crimp, sloper, foothold edge)
- hanging/reaching IK poses (arms above head, high step, drop knee)
- centre-of-mass marker and weight-vector arrow
- pump/grip HUD bar
- crash pad (optional)

## 5. Handles
Controls: @tiktok returned 0, and @zq8vx0plmk2291rr and @qq71zzkv0pp3x returned 10221. [verified-fetch]

| Handle | Result |
|---|---|
| @climbgeometry | **free** (10221) |
| @betageometry | **free** (10221) |
| @hipstowall | **free** (10221) |
| @betalines | taken, 66 followers |

## 6. Score

| Factor | Score | Why |
|---|---|---|
| Demand | 3 | About 1M UK indoor climbers [snippet]; much smaller than running or swimming |
| Format gap | 4 | No animated account found; capped by 5 searches only |
| Geometry fit | 4 | Distance-to-wall and base triangles are ideal; drop knees need faked twist |
| Name pull | 3 | Honnold is crossover-famous; Ondra and Garnbret mostly in-sport |
| WTP | 3 | About $60/yr apps, small rating counts, crowded AI entrants |
| Reuse | 3 | Wall, holds and new hanging poses |
| Risk | 4 | No footage; finger/fall injury advice needs care |

**Total** = 3×4 + 4×4 + 4×3 + 3×2 + 3×3 + 3×2 + 4×2 = **69**.
