# Running: vertical scout

Checked 2026-10-27. TikTok numbers come from plain `curl` of public profile pages, parsed from `webapp.user-detail`.

## Verdict: GO, 85/100. Format is OPEN, and the attention market is crowded.
- I found no faceless animated running-technique account. Live-action coaches own the space. The biggest is
  @mattchoi6 with 473k followers.
- Running form is one body, drawn side-on: foot landing under the hip, shin angle, cadence. That is the
  closest fit to our engine of any sport here.
- Willingness to pay is proven: Strava bought Runna, and Runna charges about $119 a year. The catch is that
  Strava, Runna and Nike Run Club own "plans" and "tracking". Our app needs a form wedge. Ochy already does
  AI gait analysis, but it is small.
- Weak spot: stars carry less search pull than in boxing, and form science is contested ("there is no
  universal optimal form"). Every hook must stay inside what the evidence supports.

## 1. Saturation
**Searches run (9):**
- "running form animation tiktok account animated breakdown"
- `site:tiktok.com` running form animation cadence
- `site:tiktok.com` sprint mechanics animated Usain Bolt stride
- "Kipchoge running form explained animation short video"
- "faceless running tips account tiktok stick figure animation"
- "running technique 3D animation instagram reels … overstriding heel strike animated"
- "tiktok running coach animated running form videos viral overstriding"
- "sprinting technique animation tiktok … account"
- "running animated explainer youtube shorts channel mannequin"

**Result.** No search returned an animated or faceless running-technique account on TikTok, YouTube Shorts or
Instagram. Every hit was live-action coaching, written guides, or animation-tutorial and stock pages. [snippet]
The closest animated item was a Stony Brook student project using computer graphics to show form, and that
is not an account. [snippet] (https://you.stonybrook.edu/334afeatherstone)

**Caveat.** The search engine indexes TikTok poorly. Plain `site:tiktok.com` queries often came back with no
TikTok pages at all. The shared search budget ran out before I could run more variants. "Not found" here
means not found by 9 searches. It does not mean proven absent. Before committing, the founder should spend
15 minutes scrolling TikTok in-app for "running form animation".

**Accounts found.** All are live-action. Profiles were fetched by plain curl on 2026-10-27. [verified-fetch]

| Handle | Followers | Likes | Videos | Format | Bio plug |
|---|---|---|---|---|---|
| @_charihawkins | 975,042 | 33.8M | 1,259 | Olympian, live action | none (beacons link) |
| @mattchoi6 | 473,364 | 22.2M | 3,308 | creator/athlete, live drills | none |
| @trainingtall | 227,734 | 4.85M | 648 | coach, live action | paid running course (Podia) |
| @strava | 196,737 | 1.54M | 511 | brand | app |
| @r4ucoaching | 156,970 | 3.04M | 1,105 | PT, live action | 1:1 coaching |
| @runna | 129,859 | 7.11M | 1,023 | brand, "entertaining & educating runners" | app (Linktree) |
| @tommyrunpt | 127,412 | 2.59M | 690 | coach, live action | coaching |
| @findyourstridecoach | 25,238 | 357k | 145 | coach, live action | 1:1 coaching |
| @coachdex_757 | 8,986 | 124k | 76 | Pose-method coach | Stripe checkout |

- @nikerunclub has 20 followers and 0 videos, so it is not Nike's official account. Nike's real TikTok
  handle was not found.
- @ochy.run returned 10221, meaning no such user.

**Classification: OPEN for the format** (no credible animated account found).
- Strongest incumbent for running-technique attention overall: **@mattchoi6, 473,364 followers**
  [verified-fetch]. That is live action, not our format.

## 2. Demand
**TikTok hashtags.** I fetched `/tag/runningtips` and `/tag/runningform`. Both returned HTTP 200, but neither
contained `webapp.challenge-detail`, so there are no stats to record. Not present. [verified-fetch]

**Participation:**
- England: "around 7.1 million adults" run, "up by over 500,000 in the past year". Sport England Active
  Lives, Nov 2024–Nov 2025. [verified-fetch] (https://www.sportengland.org/activelivesapril26)
- US: SFIA says running/jogging was the most intended new activity among younger age groups, but I found no
  headcount. [snippet] (https://sfia.org/resources/sfia-releases-first-edition-of-mid-year-participation-report-with-real-time-analysis/)

## 3. App market
App Store ratings below are from Apple's lookup endpoint, US store, 2026-10-27. [verified-fetch]

| App | Price model | US rating (count) | Signal |
|---|---|---|---|
| Strava | Free + subscription (~$79.99/yr at acquisition) | 4.81 (378,989) | Bought Runna, Apr 2025 [verified-fetch] (https://dcrainmaker.com/2025/04/strava-acquires-runna-thoughts-forward.html) |
| Runna | Subscription, $119/yr after a 7-day trial [verified-fetch, same source] | 4.85 (35,210); App Store seller now "Strava Inc." | Joint Strava+Runna plan, $149.99 / £119.99 a year [snippet] (https://www.tomsguide.com/wellness/fitness/strava-and-runna-launch-joint-subscription-heres-what-you-need-to-know) |
| Nike Run Club | Free | 4.77 (420,015) | Free guided runs; anchors the price low |
| Ochy (AI gait analysis) | Free + IAP: $12.99–29.99/mo, $59.99–69.99/yr [snippet] | 4.54 (300) | $1.7M pre-seed, adidas adiClub tie-in [snippet] (https://www.businesswire.com/news/home/20250219340484/en/) |
| RunForm AI, GaitLab | Gait-analysis apps | not checked | They exist (App Store hits) [snippet] |

**Judgement.**
- Willingness to pay is high and proven, at around $60–150 a year.
- "Plans + tracking" is owned by Strava/Runna and is cheap or free through NRC.
- "Learn running technique on your phone" has no strong owner. Ochy is the closest, and it is small (300 US
  ratings).
- A plausible plug: "film 10 seconds side-on and see where your foot lands versus your hip." That makes Ochy
  the direct rival.

## 4. Format fit: 10 hooks
- Devices: D = distance line, A = angle, T = timing bar, TD = top-down.
- None needs ball physics. Only #3 and #7 benefit from a second body (a ghost comparison runner).
- Every fact below must pass fact-check before use. Citations are the leads.

1. **"Short legs don't make you slow. Landing in front of your hips does."** Kipchoge. D: foot-to-hip
   distance. Overstriding is defined as landing 20–30 cm ahead of the centre of mass. [snippet] (https://ctyeh.com/articles/5415?lang=en)
2. **"Heel striking isn't your problem. Where your foot lands is."** Kipchoge vs a beginner. D. One source
   says a meta-analysis found 79% of runners always heel strike. [snippet] (https://marathonhandbook.com/overstriding/)
3. **"Long legs don't make Bolt fast. Fewer, harder steps do."** Bolt. T plus a step counter. Reported 41
   strides per 100 m vs rivals' 45. [snippet] (https://3quarksdaily.com/?p=2021) *2 bodies.*
4. **"Your lungs don't quit first. Your cadence does."** Kipchoge. T with a metronome. Cadence "around 190
   steps per minute". [snippet] (https://www.triathlete.com/training/how-mere-tri-mortals-can-run-like-eliud-kipchoge/)
5. **"Leaning forward isn't speed. Bending at the waist is braking."** A: trunk line.
6. **"Tight shoulders don't hold you up. They swing your arms across you."** TD: arm-path line across the
   midline.
7. **"Popping up early doesn't win the start. Staying low does."** Bolt / Lyles. A: shin and trunk angle in
   the drive phase. [snippet] (https://www.thespeedproject.com/how-to-run-100m/) *2 bodies.*
8. **"Your arms aren't passengers. Restricting them costs energy."** Kipchoge. T. A cited range of +3–13%
   metabolic cost. This claim needs the primary study. [snippet, via a coach's TikTok caption]
9. **"Bolt's stride isn't even. And he's still the fastest ever."** Bolt. T: left/right contact bars. SMU
   asymmetry study. [snippet] (https://blog.smu.edu/research/?p=12638)
10. **"Marathoners don't sprint on their toes. They land under the hip."** Kipchoge. D: midfoot landing.
   [snippet] (https://marathonhandbook.com/kipchoge-running-form/)

**Props and rigs needed:**
- run-cycle IK loop (new motion, same mannequin)
- ground line with a moving track or treadmill texture
- centre-of-mass marker
- cadence metronome HUD
- lane lines for the top-down view
- starting blocks (optional)
- no ball

## 5. Handles
Controls passed: @tiktok returned status 0 (exists) and @zq8vx0plmk2291rr returned 10221. [verified-fetch]

| Handle | Result |
|---|---|
| @stridelines | **free** (10221) |
| @runangles | **free** (10221) |
| @footstrikelab | **free** (10221; control @qq71zzkv0pp3x also 10221, @tiktok 0) |
| @cadencecode | taken, 15 followers |

## 6. Score

| Factor | Score | Why |
|---|---|---|
| Demand | 5 | 7.1M English runners; coaches with 100k–470k followers |
| Format gap | 4 | No animated incumbent found; confidence capped by weak TikTok indexing |
| Geometry fit | 5 | 1 body, side view, distances and angles |
| Name pull | 3 | Bolt and Kipchoge are global, but running content is searched by problem, not by star |
| WTP | 4 | Runna/Strava prove spend; incumbents own plans and NRC is free |
| Reuse | 4 | Needs a run cycle and ground scroll; no new props of note |
| Risk | 4 | No footage dependency; injury claims (shin splints etc.) are contested, so phrase carefully |

**Total** = 5×4 + 4×4 + 5×3 + 3×2 + 4×3 + 4×2 + 4×2 = **85** (arithmetic, see scorecard.json).


## Update 2026-10-27 (lead): multi-sport '.geometry' operator
Plain-curl checks [verified-fetch]: @tennis.geometry 4,267 followers / 28 videos; @padel.geometry 2,948 / 38; @golf.geometry 678 / 30; @running.geometry 0 / 3. They share one bio pattern ("<Sport>, explained with angles", "One fix a day"), so this is likely one operator expanding sport by sport. Not found (10221): basketball, hoops, football, soccer, boxing, mma, pickleball, cricket, rugby, muaythai, badminton, hockey. Format gap lowered 4→3, total −4.
