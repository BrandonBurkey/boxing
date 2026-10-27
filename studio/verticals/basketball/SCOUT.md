# Basketball scout: is the animated-technique format open?

**Verdict: GO, with one check first. Score 78/100. Saturation: OPEN (provisional, low confidence).**

- No credible faceless animated technique account turned up on TikTok.
  - The biggest one that does basketball animation of any kind has **45 followers** (@hoopanimations).
- The attention sits with real-footage trainers, and some of them already plug apps.
  - @dribble2much has 210.5k followers and plugs a training app.
  - @handleyourgame (134.5k) has a paid app.
- Demand and star power are the best of any sport we can name.
- The weak spots:
  - **HomeCourt**, a cheap, NBA-partnered incumbent app with 15K ratings.
  - **Ball physics:** dribbles, shot arcs and rebounds need new engine work.
- **Before committing:** the founder should spend 15 minutes searching TikTok in the app on a phone. Search "basketball animation", "hoops explained animation" and "shooting form animation".
  - Our tools could not search inside TikTok, and the web-search budget ran out mid-scout.
  - If a 50k+ animated account appears, downgrade to CONTESTED and re-score format_gap to 2.

All TikTok profile fetches were plain `curl -sS -L https://www.tiktok.com/@<handle>` on 2026-10-27, read from
`webapp.user-detail`. No spoofed user agent, no headless browser, nothing posted.

---

## 1. Saturation: does the format already exist?

### Searches run (13 WebSearch queries; then the shared search budget was exhausted)
1. `basketball animation tips tiktok`: animation-tool pages only, no accounts. [snippet]
2. `site:tiktok.com basketball animated breakdown`: the site filter was ignored; no animated account. [snippet]
3. `basketball IQ animation tiktok account`: no animated account.
   - It surfaced HooperIQ, an app that uses real NBA clips. [snippet]
4. `basketball stick figure technique animation shooting form`: academic papers and drawing guides only. [snippet]
5. `Steph Curry shooting form explained animation tiktok`: written guides only; no animated explainer. [snippet]
6. `basketball tactics 2D animation tiktok faceless account`: tactic-board apps, nothing on TikTok. [snippet]
7. `basketball training app waitlist tiktok`: no waitlist-plug account.
   - It surfaced a vertical-jump app sold on Microns (see §3). [snippet]
8. `faceless basketball account animated youtube shorts`: generic faceless-channel guides only. [snippet]
9. `tiktok "animated" basketball explainer ... defense footwork 3D figures`: returned real TikTok pages, all live-action coaching.
   - Example: Coach Larry / T2S on defensive slides, https://www.tiktok.com/@keth3don/video/7659913601108446494 [snippet]
10. `site:tiktok.com basketball animation shooting form`: one hit, @basketballformtrainer, which is real footage plus a product. [snippet]
11. `site:tiktok.com "@" basketball animated tips handles crossover animation`: no TikTok pages returned. [snippet]
12. `instagram reels basketball animated breakdown account mannequin`: no mannequin or animated account. [snippet]
13. `youtube shorts channel animated basketball technique breakdown 3D figures`: Blender tutorials and BBALLBREAKDOWN, which uses real footage. [snippet]

The planned queries 14–16 (JabMax basketball spin-off, TikTok discover pages, 2D NBA-play creators) were
**not run**: the shared web-search budget was used up. To compensate, I probed 40+ plausible handles directly
(below). That is a weaker method than in-app search. Hence "low confidence".

### Accounts that do basketball *animation* (the format's nearest neighbours)
| Handle | Followers | Likes | Videos | Bio | App plug? | Source |
|---|---|---|---|---|---|---|
| @hoopanimations | 45 | 991 | 48 | "I create animated videos. YouTube : @hoopanimations" | No | https://www.tiktok.com/@hoopanimations [verified-fetch] |
| @basketballanimation | 41 | 402 | 5 | (empty) | No | https://www.tiktok.com/@basketballanimation [verified-fetch] |
| @nbaanimation | 138 | 1,323 | 18 | (empty) | No | https://www.tiktok.com/@nbaanimation [verified-fetch] |
| @animatedhoops ("HoopsToons") | 3 | 77 | 16 | "Bringing basketball to life through animations." | No | https://www.tiktok.com/@animatedhoops [verified-fetch] |
| @hoopstoons | 6 | 73 | 4 | NBA lover | No | https://www.tiktok.com/@hoopstoons [verified-fetch] |

- I could not see whether these videos teach technique or recreate highlights.
  - The bios suggest highlight animation.
  - The YouTube page for @hoopanimations returned no subscriber data. [verified-fetch, empty]
- Whatever they post, none of them has traction.

### Handles probed that do not exist (status 10221)
@hoopsanimated, @basketballanimated, @animatedbasketball, @hoops.animated, @bball.animated, @bballanimation,
@nbaanimated, @stickfigurehoops, @hoopsgeometry, @hoopgeometry, @hooperiq, @hoopmaxapp, @ballmaxapp,
@hoopsapp, @hooperapp, @gbghoopsapp, @taapbasketball. [verified-fetch]
- A JabMax-style basketball sibling ("HoopMax" etc.) was **not found**.
  - @hoopmax exists but has 10 followers and 4 videos.
  - @dribblemax exists with 0 followers.
  - @swishmax exists with 0 followers.

### The real competition: live-action tips accounts (not our format, but they own the attention)
| Handle | Followers | Likes | Videos | Bio / plug | Source |
|---|---|---|---|---|---|
| @overtime | 35,402,543 | 3.74B | 10,388 | Media brand, highlights | https://www.tiktok.com/@overtime [verified-fetch] |
| @basketball__central | 402,011 | 34.3M | 276 | "Relatable and entertaining content" | https://www.tiktok.com/@basketball__central [verified-fetch] |
| @dribble2much | 210,510 | 3.06M | 195 | **"Handlelife training app LIVE. TRAIN LIKE A PRO!"**, links to playbookapp.io | https://www.tiktok.com/@dribble2much [verified-fetch] |
| @handleyourgame | 134,483 | 1.96M | 580 | Links handleyourgame.com (has a paid iOS app, §3) | https://www.tiktok.com/@handleyourgame [verified-fetch] |
| @hoopstudy | 107,003 | 2.04M | 1,868 | In-person training and camps, NJ | https://www.tiktok.com/@hoopstudy [verified-fetch] |
| @t2sbasketballacademy | 39,401 | 1.13M | 94 | Training academy, NJ | https://www.tiktok.com/@t2sbasketballacademy [verified-fetch] |
| @bballbreakdown | 32,682 | 980.9k | 514 | "NBA film + shooting coach" (real film with arrows) | https://www.tiktok.com/@bballbreakdown [verified-fetch] |
| @shotmechanics (Coach Collin) | 21,903 | 265.1k | 82 | Pro shooting coach, 1M+ YouTube subs claimed | https://www.tiktok.com/@shotmechanics [verified-fetch] |
| @basketballformtrainer | 11,123 | 146.9k | 143 | Sells a shooting-form product | https://www.tiktok.com/@basketballformtrainer [verified-fetch] |
| @dribbleup | 11,845 | 98.7k | 677 | Smart-ball hardware | https://www.tiktok.com/@dribbleup [verified-fetch] |

Reference control: @jabmaxapp (boxing) had **89,122 followers, 1.29M likes, 20 videos**, and a waitlist link
(jabmax.app/waitlist) at fetch time. https://www.tiktok.com/@jabmaxapp [verified-fetch]

**Classification: OPEN (provisional).**
- **Strongest format incumbent:** @hoopanimations, 45 followers.
- **Strongest adjacent threat:** @dribble2much, 210.5k followers, real footage, already plugging an app.
- **What this means:** the "app plug at the end of a tips video" move is already normal in basketball. The faceless geometry explainer is not.

---

## 2. Demand

### TikTok hashtags
- Plain curl of /tag/basketballtips, /tag/basketballtraining, /tag/hoops, /tag/basketballdrills,
  /tag/shootingform and /tag/streetball returned pages **without** `webapp.challenge-detail`.
  - The page only has app-context keys. [verified-fetch]
  - The boxing control /tag/boxingtips behaved the same.
- **Hashtag view counts: not present.** I have not estimated them.

### Account-level proxies [verified-fetch, URLs above]
- @nba: 27,368,642 followers. https://www.tiktok.com/@nba
- @overtime: 35.4M followers.
- Several tips-only trainers sit at 100k–400k followers. That is a deep pool of people who watch technique content.

### Participation
- **England / UK:** "over 1.5 million people playing weekly"; basketball is the second most popular team sport.
  - Source: Wikipedia, "Basketball in England", citing Basketball England (2024) and BBC Sport (1 Jul 2025). https://en.wikipedia.org/wiki/Basketball_in_England [verified-fetch of Wikipedia; primary source not reached]
  - The same page gives 1,198,900 under-16s weekly and 344,400 adults in England, from Basketball England's
    "Facts and Figures", year not stated.
  - Basketball England's own page returned 403. [unverified at primary]
- **US:** 24.3 million registered players (2018). Source: Wikipedia, "Basketball in the United States", citing a Statista chart. https://en.wikipedia.org/wiki/Basketball_in_the_United_States [verified-fetch of Wikipedia; primary not reached]
- **US high school (NFHS 2024–25):** 540,704 boys and 356,240 girls on school teams. Same Wikipedia page, citing NFHS. [verified-fetch of Wikipedia]
- **Global (FIBA estimate):** not found. Wikipedia's "Basketball" article (two-thirds read) gave no worldwide figure.
- **Streetball and pickup:** there is no separate count. These players are inside the participation figures above and are not counted separately.

---

## 3. App market (willingness to pay)
| App | Model and price | Rating | Signal | Source |
|---|---|---|---|---|
| **HomeCourt** (NEX Team) | Free + HomeCourt Plus $7.99/mo or $69.99/yr | 4.8 (~15K ratings) | "Official partner of the NBA"; camera shot-tracking | https://apps.apple.com/us/app/id1258520424 [verified-fetch] |
| **GBG Hoops** | Starter $9.99 / $99.99 yr; Pro $39.99 / $359.99 yr | 4.8 (173) | High price points that people pay | https://apps.apple.com/us/app/id6503405525 [verified-fetch] |
| **HooperIQ** | Free + MVP Pass $4.99–$14.99/mo, $29.99–$69.99/yr | 4.5 (240) | Basketball-IQ quizzes on real NBA clips | https://apps.apple.com/us/app/id1662110984 [verified-fetch] |
| **TAAP** (MaxOne) | Free, free trial mentioned | 4.5 (42) | Small | https://apps.apple.com/us/app/id1555142361 [verified-fetch] |
| **Handle Your Game** | Free + subscription (prices not listed) | 4.5 (2) | Tied to the 134k TikTok account | https://apps.apple.com/us/app/id6593696491 [verified-fetch] |
| **Vertical-jump iOS app** (unnamed, Microns listing) | Subscription | n/a | **$35,600 ARR, 512 customers, $3.6k MRR**, launched Jan 2026, organic posting only; audience "male basketball players 16-22" on TikTok/Instagram; asking $150k, marked "Already Sold" | https://www.microns.io/startup-listings/basketball-training-ios-app [verified-fetch] |

**Judgement:**
- People do pay. A six-month-old app reached $3.6k MRR from organic social alone.
- But HomeCourt is a strong, cheap, NBA-partnered incumbent with 15K ratings. It owns "train basketball with your phone camera".
- The audience skews young (16–22), with less money than boxing's adult hobbyists.
- **Our wedge must be different.** One option is a defence / IQ / footwork app built on geometry, which HomeCourt does not teach.
  - HooperIQ is the nearest product to that, at only 240 ratings.
- WTP: **3/5**.

---

## 4. Format fit: 10 hooks
Pattern: "[Belief] doesn't lose to [X]. [Real mistake] does."
- Every height or stat must pass the fact-check before use.
- Ball = needs ball physics (bounce or arc). 2+ = more than 2 bodies.

| # | Hook | Star | Geometry device | Ball? | 2+? |
|---|---|---|---|---|---|
| 1 | "Slow feet don't get you blown by. Square hips do." | Jrue Holiday | Top-down hip-angle line vs driving lane | No (ball carried) | No |
| 2 | "Being short doesn't get your jumper blocked. Shooting it in front of your face does." | Steph Curry | Side view: release-point height line vs defender's reach | Arc | No |
| 3 | "Length doesn't block your layup. Finishing on his side of the rim does." | Victor Wembanyama | Top-down reach-radius circle; body between ball and arm | Arc | No |
| 4 | "Closeouts aren't lost to slow guys. They're lost running in at full speed." | Kawhi Leonard | Distance bar + chop-step timing bar | No | No |
| 5 | "Kobe's footwork wasn't fast. It was one pivot ahead." | Kobe Bryant | Pivot-foot circle, separation distance bar | No | No |
| 6 | "Being slow isn't why you can't get past him. Driving at his chest is." | Nikola Jokić | Top-down attack angle at the lead foot | Dribble | No |
| 7 | "A weak handle doesn't get you picked. Dribbling above your waist does." | Kyrie Irving | Ball-height bar vs defender's hand height | Bounce | No |
| 8 | "Your shot isn't flat because you're weak. You're releasing on the way down." | Klay Thompson | Timing bar on jump apex + arc trace | Arc | No |
| 9 | "Pickup games aren't lost to the guy with handles. They're lost to the guy who reaches." | LeBron James (chase-down timing) | Reach angle vs balance line; side view | No | No |
| 10 | "Not being athletic doesn't keep you off the boards. Watching the ball does." | Dennis Rodman / Jokić | Top-down box-out positions + rebound zone | Rim bounce | **Yes (3: shooter, you, opponent)** |

**Best three for our engine** (two bodies, little or no ball physics, big names): #1 Holiday hips, #3 Wembanyama
reach circle, #2 Curry release point. Hooks #4 and #9 serve the streetball and pickup crowd.

### Props and rigs needed
- **Basketball:**
  - carried or held (easy)
  - parabolic shot arc with a dotted trail (moderate)
  - dribble bounce cycle (moderate)
  - rim bounce (hard; avoid in v1)
- **Hoop:** rim, backboard, net, in side view and top-down.
- **Half-court markings:** key, free-throw line, three-point arc and baseline, for the top-down geometry view.
- **New poses:**
  - triple threat
  - defensive stance (wide, hips angled)
  - shooting set-point and release
  - layup gather
  - low dribble
  - closeout chop
  - box-out
- **Devices:** reach-radius circle, hip-angle line, height and release markers (the boxing height labels reuse as-is).
- **Reuse as-is:** mannequin rig, chapter tags, headline, HUD/timing bars, top-down view, voiceover, captions.

---

## 5. Handles
Controls in the same run:
- @nba: exists, 27.37M followers. [verified-fetch]
- @xq7zzv0091bb: 10221, no such user. [verified-fetch]

| Brand option | Handle | Result |
|---|---|---|
| Hoop Geometry | @hoopgeometry | **Free** (10221) |
| Hoop Geometry | @hoopgeometryapp | **Free** (10221) |
| Release Point | @releasepointhoops | **Free** (10221) |
| Release Point | @releasepointapp | **Free** (10221) |
| Release Point | @releasepoint | Taken: 0 followers, 0 videos |
| Court Lines | @courtlineshoops | **Free** (10221) |
| Court Lines | @courtlines | Taken: 1,603 followers |
| (rejected) | @hoopangles | Taken: 6 followers, "Hoop angle" |

- 10221 can also mean a banned or deleted account whose name cannot be re-registered. Availability is only confirmed at sign-up, and sign-up needs founder approval.
- All three brands are distinct from the incumbents above (none uses "animation", "toons", "breakdown" or "IQ").
- **Recommendation:** Hoop Geometry (@hoopgeometry). It names the mechanic we sell and maps to the top-down view.

---

## 6. Score (PLAYBOOK rubric)
| Factor | Score | Why |
|---|---|---|
| Demand (×4) | 5 | Huge account pool (@nba 27.4M, @overtime 35.4M); several pure tips accounts at 100–400k; 1.5M weekly UK players, 24.3M US |
| Format gap (×4) | 4 | No animated technique account above 138 followers found; not 5 because discovery was low-confidence and real-footage tips accounts are crowded |
| Geometry fit (×3) | 3 | Defence, footwork and finishing angles fit well; shooting and handles need ball arc or bounce; rebounding needs 3 bodies |
| Name pull (×2) | 5 | Curry, LeBron, Jokić, Wembanyama, Kobe: global search pull, public heights and stats |
| WTP (×3) | 3 | Proven payers (HomeCourt, GBG, $35.6k ARR jump app), but HomeCourt is a strong cheap incumbent and the audience skews young |
| Reuse (×2) | 3 | Rig, HUD and top-down view reuse; new ball, hoop, court lines and ~7 poses |
| Risk (×2) | 4 | No footage or logo dependency; low injury risk in the advice; avoid NBA team names and marks |

**Total = 5×4 + 4×4 + 3×3 + 5×2 + 3×3 + 3×2 + 4×2 = 20 + 16 + 9 + 10 + 9 + 6 + 8 = 78.**

### Gaps to close
- An in-app TikTok search for animated accounts (founder, 15 minutes).
- Hashtag view counts (not present in plain fetches).
- A primary-source check of the UK and US participation figures.
