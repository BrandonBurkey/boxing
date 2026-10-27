# Swimming: vertical scout

Checked 2026-10-27. TikTok numbers come from plain `curl` of public profile pages (`webapp.user-detail`).

## Verdict: MAYBE, 71/100. Format is CONTESTED.
- An animated 3D swim-technique account already exists: **@umutswimlab**, "Swimming Technique Visualization".
  A third-party tracker puts it at about 384k Instagram followers. That is a search snippet only, and I could
  not open the page.
- Its TikTok handle does not return a normal public profile.
- Swim Smooth has also had an animated stroke model ("Mr Smooth") for years.
- Paying adults (triathletes, masters swimmers) exist, and MySwimPro proves app spend.
- Our flat 2D side-view rig handles badly the one thing swimming needs most: body roll and the underwater
  catch, seen from more than one angle.
- Worth a second look only if the founder accepts a front-on or underwater camera and a water-line prop.

## 1. Saturation
**Searches run (7):**
- "swimming technique animation tiktok account freestyle catch animated"
- `site:tiktok.com` animated swimming technique breathing freestyle animation
- "Phelps stroke explained animation 3D swimming technique channel shorts"
- "umutswimlab 3D swimming animation instagram tiktok followers"
- "animated swimming technique instagram account 3D swimmer breakdown viral reels"
- "tiktok swimming animation account … 3D animated technique creator followers"
- "swimming app waitlist tiktok animated swim technique AI coach app"

The shared search budget ran out after these, one short of the brief's 8.

**Found, animated:**
- **@umutswimlab.** A Notion archive describes "original swimming technique breakdowns using 3D animation and
  educational narration", with entries such as freestyle breathing mistakes vs a correct model. It says the
  videos are on Instagram. [snippet] (https://innate-dandelion-5ae.notion.site/umutswimlab-3D-Technical-Analysis-Archive-1f2a20f6c1e480b5bceae71250d0b0d3)
  - My WebFetch of that page returned only the word "Notion". [verified-fetch, empty]
  - HypeAuditor says Instagram has **384,423 followers, 22 posts**, category "Swimming Technique
    Visualization". [snippet] (https://hypeauditor.com/instagram/umutswimlab/). WebFetch got a 403, so this
    is not verified.
  - TikTok `@umutswimlab` returned status **10202**. That is not 10221 (no such user) and not 0 (normal
    profile), so it is not a normal public profile. Banned, private or restricted, I cannot tell.
    [verified-fetch]
- **Swim Smooth "Mr Smooth".** An animated freestyle visualisation on YouTube
  (https://www.youtube.com/watch?v=IyR7JYllk9U) [snippet], and a $1.99 iOS app last updated 2020-03-13 with
  13 US ratings. [verified-fetch, Apple lookup]
  - @swimsmooth on TikTok has 2 followers and 0 videos, so it is not theirs. [verified-fetch]
- **SwimCues app.** Offers "technique cues and animations" for the four strokes. [snippet]

**Found, live action.** Plain curl, 2026-10-27. [verified-fetch]

| Handle | Followers | Likes | Videos | Format | Bio plug |
|---|---|---|---|---|---|
| @myswimpro | 401,453 | 7.02M | 2,109 | brand, tips + workouts | "Download the #1 app for swimmers" |
| @effortlessswimming | 108,139 | 902k | 785 | coach, filmed footage + text | none in bio |
| @swimsuccess | 97,910 | 1.27M | 463 | coach/brand | "adaptive swim training app… free week" |
| @swimwithliam | 14,606 | 435k | 814 | teacher | YouTube |
| @hydranimate | 153,838 | 853k | 21 | 2D cartoon comedy, **not technique** | none |

**Classification: CONTESTED.**
- Strongest animated incumbent: **@umutswimlab, ~384k Instagram followers** [snippet; TikTok status 10202].
- Strongest swim-tips account on TikTok: **@myswimpro, 401,453 followers** [verified-fetch]. It is app-backed
  and live action.

## 2. Demand
**TikTok hashtags.** `/tag/swimmingtips` and `/tag/swimmingtechnique` returned HTTP 200 with no
`challenge-detail`. Not present. [verified-fetch]

**Participation:**
- England: "4.4 million people swimming", Active Lives Nov 2024–Nov 2025. [verified-fetch] (https://www.sportengland.org/activelivesapril26)
- Swim England: "4.2 million adults swim at least twice a month (9 per cent of the population)", from older
  Active Lives data. [verified-fetch] (https://www.swimming.org/swimengland/key-swimming-statistics/)
- US: SFIA mid-year 2025 shows team swimming down 2.7%. I found no headcount. [snippet] (https://sfia.org/resources/sfia-releases-first-edition-of-mid-year-participation-report-with-real-time-analysis/)

## 3. App market

| App | Price model | US rating (count) | Signal |
|---|---|---|---|
| MySwimPro | Free + subs; IAP tiers $29.99 / $39.99 / $179.99 [snippet] | 4.48 (5,954) [verified-fetch] | Wefunder rounds; ~$1.1M raised per Kingscrowd [snippet] (https://kingscrowd.com/myswimpro-on-wefunder-2023/) |
| Swim Success | Subscription, free week (per TikTok bio) [verified-fetch] | not checked | 97.9k TikTok followers feeding the app |
| Mr Smooth Pro | $1.99 one-off | 4.54 (13) [verified-fetch] | dormant since 2020 |
| Swimmie, Swim Ai, aquaAI, Swimio | waitlist / AI stroke scoring | not checked | Swimmie runs a waitlist; aquaAI scores a stroke video [snippet] |

**Judgement.**
- Adults pay, MySwimPro being the proof.
- Two swim-tips accounts (@myswimpro, @swimsuccess) already run the "TikTok → own app" funnel. An animated
  newcomer would plug into a funnel they already own.
- A cluster of new AI stroke-analysis apps is chasing the same "learn on your phone" job.

## 4. Format fit: 10 hooks
- Devices: A = angle, D = distance, T = timing bar, TD = top-down.
- None needs ball physics. All need a water line.
- **★ = needs body roll or a front/underwater view.** Our flat side rig does these poorly.

1. **"Weak arms don't slow your freestyle. A dropped elbow does."** Phelps. A: elbow angle at the catch. ★
2. **"You're not out of breath. You're lifting your head to breathe."** Ledecky. A: head vs water line.
3. **"Kicking harder won't save you. Sinking hips slow you down."** Phelps. A: body line vs water line.
4. **"Pulling more water doesn't help. Holding it does."** Ledecky. D: hand stays still, body moves past.
   The "ladder" cue. [snippet] (https://www.tiktok.com/@effortlessswimming/video/7445335786918137096) ★
5. **"Long arms aren't Phelps' secret. Moving like a dolphin is."** Phelps. Wave line through the body.
   Johns Hopkins analysis. [snippet] (https://engineering.jhu.edu/magazine-archive/wp-json/wp/v2/posts/945)
6. **"Phelps didn't swim even strokes. He galloped."** Phelps. T: left/right stroke timing bars. "Loping"
   freestyle. [snippet] (https://community.usms.org/swimming/f/general/9715/freestyle---picking-the-right-technique)
7. **"Breathing isn't your problem. Holding your breath underwater is."** Ledecky. T: exhale bar.
8. **"Your hand entry isn't wasted. Crossing the midline is."** Phelps. TD: hand path vs centre line.
   [snippet] (https://swimsmooth.com/videos/elite)
9. **"Your turn isn't slow. Your streamline is."** Marchand. D: glide distance off the wall.
   [unverified — Marchand facts need sourcing]
10. **"Breaststroke isn't about a big pull. It's kick-glide timing."** Marchand. T. [unverified]

**Props and rigs needed:**
- water surface line with ripple
- pool lane lines and wall (top-down)
- horizontal swimmer pose set (freestyle recovery, catch, flutter kick)
- body-roll faking (limb layering swap)
- underwater tint and bubbles
- breathing head-turn pose

## 5. Handles
Controls: @tiktok returned 0 and @zq8vx0plmk2291rr returned 10221; a second run had @tiktok 0 and
@qq71zzkv0pp3x 10221. [verified-fetch]

| Handle | Result |
|---|---|
| @strokegeometry | **free** (10221) |
| @swimangles | **free** (10221) |
| @swimgeometry | **free** (10221) |
| @catchlines | taken, 0 followers |

## 6. Score

| Factor | Score | Why |
|---|---|---|
| Demand | 4 | 4.4M English swimmers; swim-tip accounts at 100k–400k |
| Format gap | 3 | A 3D animated incumbent at ~384k on Instagram [snippet]; its TikTok presence is unclear |
| Geometry fit | 3 | Angles work, but roll and the underwater catch need views our side rig lacks |
| Name pull | 4 | Phelps and Ledecky are household names with deep stat records |
| WTP | 4 | MySwimPro 5,954 ratings and $180 tier; triathletes spend |
| Reuse | 3 | New horizontal poses, water line, roll faking |
| Risk | 4 | No footage dependency; beginner breathing advice near water-safety territory, so phrase carefully |

**Total** = 4×4 + 3×4 + 3×3 + 4×2 + 4×3 + 3×2 + 4×2 = **71**.
