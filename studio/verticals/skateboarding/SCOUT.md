# Skateboarding: vertical scout

Checked 2026-10-27. TikTok numbers come from plain `curl` of public profile pages (`webapp.user-detail`).

## Verdict: NO, 56/100. Format is CONTESTED.
- Demand for trick tutorials on TikTok is huge. Braille Skateboarding has 989k followers, but it is live
  action and already runs its own paid app.
- A skater-animator, **@reesganimator (182k)**, already sits next to our format. I could not confirm whether
  his videos are trick tutorials.
- Every trick is board physics: flip axis, pop, catch. That is the "ball physics" problem the playbook scores
  against.
- Willingness to pay is weak. The market leader charges $6.99–9.99, and the audience skews young.

## 1. Saturation
**Searches run (6):**
- "skateboarding trick animation tiktok kickflip explained animated physics account"
- "ReesGAnimator tiktok skate animation kickflip tutorial"
- "whythetrick skateboarding app animated trick science"
- `site:tiktok.com` ollie explained animation skateboard physics
- "skateboarding animated tutorial account tiktok instagram 2D animation how to ollie faceless"
- "skate trick 3D animation account tiktok … blender trick breakdown"

The shared search budget ran out before I could run a follow-up on ReesGAnimator's content.

**Found, animated or adjacent:**
- **@reesganimator.** 182,254 followers, 3.73M likes, 168 videos. Bio: "Skater and animator… Support ⬇️",
  linking to Patreon. No app plug. [verified-fetch]
  - A TikTok discover snippet credits ReesGAnimator with a 3D kickflip animation "promising a detailed
    kickflip tutorial and tips". [snippet] (https://www.tiktok.com/discover/skateboard-kickflip-gif)
  - The profile page held no video IDs, so I could not open a video. Whether this account teaches technique
    or only animates skating is **unverified**.
- **whythetrick.io.** An interactive 3D kickflip explainer covering flick direction and pop mechanics. [snippet]
  (https://whythetrick.io/how-to/the-science-of-kickflip-in-skateboarding/). Web only, not TikTok.
- **Rodney Mullen × Physics Girl, "Why This Skateboarding Trick Should Be Impossible".** Animated physics on
  PBS/YouTube. [snippet] (https://www.pbs.org/video/why-this-skateboarding-trick-should-be-impossible-ft-rodney-zsgmx8)
- Blender skate-animation posts by small accounts. Modest engagement, follower counts not found. [snippet]

**Found, live action.** Plain curl, 2026-10-27. [verified-fetch]

| Handle | Followers | Likes | Videos | Bio plug |
|---|---|---|---|---|
| @braille_skate | 989,422 | 21.3M | 2,303 | "Learn to skate!" → Brailleskateboarding.com |
| @aaron.kyro | 313,263 | 5.86M | 1,125 | free beginner course → Braille |
| @_aliminator | 108,788 | 1.45M | 94 | own skate brand |
| @satra.sk8 | 27,477 | 988k | 657 | YouTube (adult learner) |

**Classification: CONTESTED.**
- Strongest adjacent animated account: **@reesganimator, 182,254 followers** [verified-fetch]. Its tutorial
  content is unverified.
- Tutorial attention is dominated by **@braille_skate, 989,422** [verified-fetch], which is live action.

## 2. Demand
**TikTok hashtags.** `/tag/skateboardingtips` and `/tag/skatetok` returned HTTP 200 with no
`challenge-detail`. Not present. [verified-fetch]

**Participation:**
- US: about **9.3 million** skateboarders in 2024, per a market-research firm, not SFIA, with methodology not
  verified. [snippet] (https://www.kenresearch.com/industry-reports/usa-skateboard-market.md)
- US: about 8.92M in 2023, Statista-based. [snippet]
- US: SFIA mid-year 2025 shows skateboarding down 2.4%. [snippet] (https://sfia.org/resources/sfia-releases-first-edition-of-mid-year-participation-report-with-real-time-analysis/)
- UK: not found.

## 3. App market
Ratings are from Apple lookup, US store. [verified-fetch]

| App | Price model | US rating (count) | Signal |
|---|---|---|---|
| Braille Skateboarding / Braille Army+ | Membership $6.99–9.99, 7-day trial [snippet] (https://www.brailleskateboarding.com/products/braille-army) | 4.34 (499) | 989k TikTok funnel; earlier app listed at $5.99/mo or $49.99/yr [snippet] |
| Skate Tricks: Learn & Ride | Free + IAP | 4.69 (566) | Step-by-step tricks, foot placement, slow-mo video [snippet] |
| Braille Skateboard Academy | $39 subscription (date unclear) [snippet] | — | Video coaching |
| Skate Dice | Free/paid game-of-SKATE dice | not checked | Novelty |

**Judgement.**
- A strong, cheap incumbent (Braille) already owns "learn to skate on your phone", and owns the TikTok funnel
  into it.
- Prices are single-digit dollars a month.
- Willingness to pay is low, as the founder suspected.

## 4. Format fit: 10 hooks
- Devices: A = angle, D = distance, T = timing bar, TD = top-down.
- **Every hook needs board physics (B).** None needs 2 bodies.

1. **"Weak legs don't kill your ollie. Not sliding your front foot does."** Rodney Mullen. A: board angle. B
2. **"Your kickflip doesn't need a harder flick. It needs a flick off the corner."** Mullen. TD: flick line.
   B. [snippet, whythetrick]
3. **"Jumping higher won't level your ollie. Lifting your back knee will."** Tony Hawk. D: knee height. B
4. **"Popping harder doesn't help. Jumping late does."** Nyjah Huston. T: pop vs jump timing. B. The
   tail-strike physics is in Physics World. [snippet] (https://physicsworld.com/a/skateboard-videos-reveal-the-physics-of-doing-an-ollie)
5. **"Your board doesn't steer. Your shoulders do."** Nyjah Huston. TD: shoulder line vs board. B
6. **"Manuals aren't balance. They're hips over the truck."** Mullen. A: centre-of-mass vs axle. B
7. **"Your shuv-it isn't a kick. It's a scoop."** Tony Hawk. TD: back-foot path. B
8. **"Landing bolts isn't luck. Catching with your front foot is."** Nyjah Huston. T: catch timing. B
9. **"Drop-ins don't punish fear. They punish leaning back."** Tony Hawk. A: trunk vs ramp. B. ⚠ Injury-risk
   advice.
10. **"Speed doesn't make tricks harder. Weight over the bolts makes them easier."** Mullen. D. B

Mullen, Hawk and Huston facts are not sourced here.

**Props and rigs needed:**
- skateboard prop with 3-axis flip/rotation and wheel contact
- ramp/quarterpipe
- ledge/rail
- flat-ground line
- foot-on-board contact constraints
- board-path trail

This is a large new physics prop.

## 5. Handles
Controls: @tiktok returned 0 and @zq8vx0plmk2291rr returned 10221. [verified-fetch]

| Handle | Result |
|---|---|
| @popgeometry | **free** (10221) |
| @flickangle | **free** (10221) |
| @skateangles | **free** (10221) |

## 6. Score

| Factor | Score | Why |
|---|---|---|
| Demand | 4 | Braille 989k, Kyro 313k; about 9M US skaters [snippet] |
| Format gap | 3 | ReesGAnimator 182k skater-animator adjacent; whythetrick already explains trick physics |
| Geometry fit | 2 | Every lesson is board rotation and pop: the ball-physics problem |
| Name pull | 3 | Tony Hawk and Nyjah are known; trick searches beat star searches |
| WTP | 2 | $6.99–9.99 market leader; young audience |
| Reuse | 2 | New physics board, ramps, foot contact |
| Risk | 3 | Young audience, falls and injury advice; no league footage |

**Total** = 4×4 + 3×4 + 2×3 + 3×2 + 2×3 + 2×2 + 3×2 = **56**.
