# Golf: vertical scout report

Date: 2026-10-27. Method: 20 web searches, plain `curl` of 60 public TikTok profile pages, 5 tag pages, and direct fetches of app and stats pages. No spoofed user agents, no headless browser, nothing posted.

## Verdict: GO, provisionally. Score 83/100. Saturation: OPEN (medium confidence).

- **Nobody credible was found making faceless animated golf technique explainers on TikTok.**
  - The closest account is `@golfanimated`, with **1,026 followers**, 14.4k likes and 37 videos. Its bio reads "Animating every swing in the world" and links to a shop. It looks like swing art, not instruction (the content type is inferred from the bio [unverified]).
- **Golf on TikTok is dominated by real coaches on camera.** The biggest found is `@rickshielspga` with 544,501 followers. Several more sit at 100–215k.
  - This proves demand. It does not fill the gap: none of them use faceless mannequins and geometry.
- **Willingness to pay is the strongest of any sport we can imagine.** Adults already pay $110/yr for Sportsbox 3D and from $275 for a HackMotion sensor. GolfFix reports 1.5M+ downloads.
  - The flip side: AI swing analysis on a phone is already owned. Our app must pick a different job (see §3).
- **Main caveat.** The web-search budget ran out after 20 queries. Search engines index TikTok poorly: `site:tiktok.com` returned almost no profiles.
  - Before engine work, the founder should spend 10 minutes in the TikTok app searching "golf animation", "golf swing 3d" and "golf explained". That is a manual check we are not allowed to automate.

---

## 1. Saturation: does the format already exist?

### Searches run (WebSearch, 2026-10-27)
1. golf swing animation tips tiktok faceless account
2. site:tiktok.com golf swing animated breakdown
3. site:tiktok.com golf animation slice fix 3D mannequin
4. Scottie Scheffler swing explained animation
5. golf stick figure swing technique animation shorts channel
6. 3D golf swing animation instagram reels account followers
7. site:tiktok.com golf swing 3d animation tips
8. golf training app waitlist tiktok animated golf tips
9. tiktok golf animation account swing explained famous golfer 3D avatar viral (extended)
10. Sportsbox AI tiktok 3D avatar pro swing Scheffler McIlroy
11. golf animated explainer tiktok account "swing plane" animation followers
12. youtube shorts animated golf tips channel cartoon golfer explains swing
13. Ben Hogan swing animation tiktok
14. faceless golf tiktok account AI voiceover golf tips grows followers
15. tiktok.com/@ golf animation swing tips animated (domain: tiktok.com)
16. golf swing animation explained (domain: tiktok.com)
17. 3d golf swing animation pro golfer (domain: tiktok.com)
18. golf slice fix animation (domain: tiktok.com)
19. golf animation tiktok discover golf swing animation account (domain: tiktok.com)
20. animated golf tips cartoon (domain: tiktok.com)
21. golf swing mannequin animation physics explained "golf physics"
22. instagram golf animation 3D swing biomechanics reels "kinematic sequence"

Three more queries were refused once the shared search budget ran out. They were a direct search for `golfanimated`, "3D animated recreations of pro swings", and diagram-style ball-flight Shorts. **Those gaps are not filled.**

### What the searches found
- **TikTok golf-tip results were all live-action coaches.** Every TikTok video and discover page returned shows a real person, a real swing, or slow-motion footage. Examples:
  - `@markwoodgolf`, `@altusperformance`, `@drahmangolf`, `@performancegolfzone` and `@golfforbegginers` (a Rory slow-mo).
  - Sources: https://www.tiktok.com/@markwoodgolf/video/7625975280431107330, https://www.tiktok.com/@drahmangolf/video/7319549021192768811, https://www.tiktok.com/@golfforbegginers/video/7503577848460987670 [snippet]
- **Animated golf on TikTok is cartoon comedy, not instruction.** Examples are Fox's `@anidom` (Family Guy and Universal Basic Guys clips) and Simpsons and Tom & Jerry clips.
  - Sources: https://www.tiktok.com/@anidom/video/7403738997526138142, https://www.tiktok.com/discover/cartoon-characters-playing-golf [snippet]
- **3D on golf TikTok is people showing app output.** One example is a coach running Sportsbox AI on his own swing.
  - Source: https://www.tiktok.com/@brad_swingfitacademies/video/7246828778121415963 [snippet]
- **Famous-player swing explainers are made by media brands with real footage and on-camera coaches.** These include Golf Digest "Film Study", GOLF.com, Golf Channel, GolfPass and GolfTEC on Scheffler's footwork.
  - Sources: https://www.golfdigest.com/story/masters-2024-scottie-scheffler-footwork-golf-swing-slide-video-explain, https://golf.com/instruction/scottie-scheffler-crazy-footwork-explained/ [snippet]
- **No stick-figure or mannequin golf explainer channel was found** on YouTube Shorts or Instagram. "Stickman Golf" results were spam pages about a game.
- **A demand signal for animation exists, but not a supply of it.** An Upwork job titled "Motion Graphics / AI Animation Artist for Golf Performance Content" asked for "simple biomechanics explainers and swing visualizations".
  - Source: https://www.upwork.com/freelance-jobs/apply/Motion-Graphics-Animation-Artist-for-Golf-Performance-Content_~022059280450456913838/ [snippet; page returned 403]
  - Someone may be building this. We could not see who.

### Profiles fetched (plain curl, `webapp.user-detail`, 2026-10-27)
Controls: `@tiktok` resolved (96,452,380 followers), and a nonsense handle `@qpzvxkmw77391z` returned 10221. All rows below are [verified-fetch].

**Format candidates (animated or faceless golf):**
| Handle | Followers | Likes | Videos | Bio | App plug? |
|---|---|---|---|---|---|
| @golfanimated | 1,026 | 14,427 | 37 | "Animating every swing in the world · Email for business enquiries · Shop now: bit.ly/Golfanimated". Account created Oct 2023 (createTime 1697999708). | No. Plugs a shop. |
| @golf.ai | 354 | 1,204 | 42 | (empty) | No. Content not inspected. |
| @sportsboxai | 120 | 109 | 5 | "Helping golfers improve their game. AI-powered #3DGolf for smarter training." | Is the app's own brand account. |
| @hackmotion | 554 | 776 | 27 | "Brilliantly easy to use golf swing analyzer · hackmotion.com" | Is the brand account. |
| @stickmangolf | 9 | 210 | 6 | "Stick man golf is my life" | No |
| @golf.explained | 3 | 23 | 3 | "All About Golfing Improvement & Tips" | No |

**Live-action golf-tips accounts (demand context, not this format):**
| Handle | Followers | Likes | Videos | Bio / link | App plug? |
|---|---|---|---|---|---|
| @rickshielspga | 544,501 | 9,515,733 | 1,083 | "Join the Creator Golf Club" | Membership link |
| @jakehuttgolf | 214,364 | 2,538,237 | 598 | "Golf Tips + Raps" | No |
| @meandmygolf | 160,042 | 1,899,143 | 1,109 | "Follow for daily tips." | **Yes.** The link is a HackMotion affiliate URL. |
| @dannymaudegolf | 108,330 | 788,464 | 210 | "1M YouTube Subscribers" | YouTube |
| @peterfinchgolf | 103,005 | 1,991,192 | 970 | — | No |
| @alexelliottgolf | 98,219 | 1,714,047 | 1,420 | "PGA Top 50 World Golf Coach" | YouTube |
| @birdiegum | 50,544 | 590,198 | 219 | "Tips & drills built for golfers" | Product (gum) |
| @performancegolfzone | 37,402 | 761,426 | 422 | "Personalized instruction for everyday golfers" | Linktree |
| @golfprowannabes | 35,704 | 1,164,019 | 2,426 | "Golf EBOOK" | Ebook |
| @drahmangolf | 33,583 | 368,450 | 1,037 | "functional tips for competitive golfers" | Coaching site |
| @tylerslocumgolf | 17,420 | 161,006 | 66 | tylerslocumgolf.com | Site |
| @markwoodgolf | 7,726 | 110,238 | 539 | "Daily tips to lower scores" | Community |
| @golfskool | 6,110 | 65,044 | 175 | "Online Golf Coaching" | Coaching |
| @golfwithaimee | 3,070 | 8,137 | 73 | "470k+ on YouTube" | Site |

**Probed handles that do not exist (10221):** golfanimations, golfanimation, animatedgolf, golf.animated, golfswinganimation, golfmechanics, golfphysics, golfswingexplained, golfbiomechanics, golfstickman, animatedgolfer, theanimatedgolfer, golfgeometry, golfanimations3d, golfanimation3d, golfiqapp, golffixapp, sparrow.golf.

**Probed handles that are dormant (0–55 followers, unrelated):** golf3d, swingplane, golfiq, golffix, golfdigest (17 followers; not the magazine's real account), golfsidekick, golfswingai, swingai, golfhacks, golfmotion, golfcartoon, golfai, golfexplained.

`@golfmax` returned status 10222, likely a private account.

### Classification: **OPEN**
- **Strongest incumbent in the format:** `@golfanimated`, 1,026 followers, 37 videos, apparently swing art plus a shop [verified-fetch for the numbers; content type unverified].
- **Nearest adjacent threat:** the app makers themselves.
  - Sportsbox already renders 3D avatars of swings. If they started a faceless pro-swing explainer channel they would be dangerous.
  - Today their TikTok has 120 followers.
- **Confidence: medium.** Search reach into TikTok was weak, and three planned queries were refused. A manual in-app search is the cheapest way to raise confidence.

## 2. Demand
- **Hashtag reach: not present.** Plain curl of `tiktok.com/tag/golftips`, `golfswing`, `golftiktok`, `golfinstruction` and `golf` returned 200, but with no `webapp.challenge-detail` block. The control `boxingtips` behaved the same, so this is TikTok's page shape, not a golf-specific block. No numbers recorded.
- **Creator-side proxy:** at least six live-action golf-tips accounts sit at 98k–545k followers (table above) [verified-fetch]. A trade blog ranked the most-liked TikTok golf tips at around 127k likes for the top video [snippet] (https://surprizeshop.co.uk/blogs/default-blog/the-20-most-liked-golf-tips-on-tiktok-to-improve-your-swing).
- **Participation, US:** in 2025, 29.1M Americans aged 6+ played on a course, and 48.1M played in total including ranges and simulators. Source: https://www.ngf.org/golf-industry-research/ [verified-fetch]
- **Participation, UK and global: not found.** The R&A page tried returned 404, and the search budget was gone.

## 3. App market (willingness to pay)
| App | Price model | Rating | Signal | Source |
|---|---|---|---|---|
| Sportsbox 3D Golf | Freemium. Free tier is 5 swings/month. Website shows $9.17/mo on annual billing. App Store IAPs: $15.99, $109.99, $79.99, $799.99 | 4.9 (3.7K ratings) | "50,000+ golfers, 500+ coaches". A Bryson DeChambeau-led group acquired it in April 2026 [snippet]. | https://apps.apple.com/us/app/sportsbox-3d-golf/id1578921026 [verified-fetch], https://www.sportsbox.ai/ [verified-fetch], https://www.businesswire.com/news/home/20260407643695/en/ [snippet; 403 on fetch] |
| GolfFix | Freemium (price not shown on site) | 4.9 (count not shown) | "1.5M+ downloads, 65+ countries, 15M+ swing analyses" | https://golffix.io/ [verified-fetch] |
| HackMotion | Hardware sensor + app, from $275 / $420 / $915 | — | "80,000+ golfers". Me and My Golf (160k TikTok) carries its affiliate link. | https://www.hackmotion.com/ [verified-fetch] |
| Swing Coach – Golf Pro | Free + IAP: $9.99/wk, $9.99/mo, $49.99/yr | Not enough ratings | New AI entrant | https://apps.apple.com/us/app/swing-coach-golf-pro/id6748265621 [verified-fetch] |
| Golf Secrets | Free + IAP: $4.99/mo, $49.99/yr, $99.99 lifetime | Not enough ratings | "1000+ quick tips" format. The tips-library idea is not enough on its own. | https://apps.apple.com/bf/app/golf-secrets/id6474728889 [verified-fetch] |

**Judgement:**
- Golfers pay, and pay a lot: $110/yr software and $275+ sensors.
- But "analyse my swing on my phone" is owned by strong 4.9-rated incumbents: Sportsbox, now Bryson-backed, and GolfFix with 1.5M downloads.
- A tips library alone is weak, since Golf Secrets has no ratings yet. Our app should not be another swing analyser.
- **The defensible angle is a structured "fix one fault" practice planner.** Example: a 14-day slice plan with range drills and a ball-flight log. That matches what our videos teach.
- MVP decision for the founder, not the scout.

## 4. Format fit
Pattern: "[Belief] doesn't [lose]. [Real mistake] does." Every athlete fact below is **[unverified] and must pass the fact-checker before use.**

| # | Hook | Star | Geometry device | Ball physics? | >2 bodies? |
|---|---|---|---|---|---|
| 1 | "Short golfers don't lose distance. A short arc does." | Rory McIlroy (height and driving-distance rank to verify) | Height labels + swing-arc radius | Light (carry-distance bar) | No |
| 2 | "Moving your feet isn't a swing fault. Losing your balance is." | Scottie Scheffler | Side view + pressure-shift arrow + timing bar | No | No |
| 3 | "Your slice isn't your speed. It's your path cutting across the ball." | (generic) + Tiger Woods contrast | Top-down: target line vs club path, face angle | **Yes** (curved flight line, 2D only) | No |
| 4 | "A flat swing isn't old-fashioned. It's how Hogan hit it straight." | Ben Hogan (the "pane of glass" image from *Five Lessons*) | Down-the-line plane line | No | No |
| 5 | "Big muscles don't make speed. Sequence does." | Rory McIlroy | Timing bar: hips → chest → arms → club | No | No |
| 6 | "Looping swings don't lose. Arriving square at impact does." | Jim Furyk | Backswing plane vs downswing plane, two lines | No | No |
| 7 | "Looking up doesn't miss putts. Your shoulders swaying does." | Tiger Woods | Top-down putter path line | Light (straight roll) | No |
| 8 | "Weight shift isn't sliding. It's turning onto your lead side." | Tiger Woods | Face-on pelvis line + distance marker | No | No |
| 9 | "Swinging harder doesn't add yards. Centre strike does." | Bryson DeChambeau | Clubface impact-dot map | Light | No |
| 10 | "A bowed wrist isn't a flaw. It's how DJ shuts the face." | Dustin Johnson | Wrist angle + face-angle arc | No | No |

All hooks need only one body. Golf suits our engine better than boxing in this respect: no opponent is needed.

**Props and rigs needed:**
- **Golf club:** a long lever held by both hands, with a two-hand IK constraint. This is the main new rig.
- **Putter variant.**
- **Ball, tee, hole + flag.**
- **Ground lines:** target line, ball line, alignment stick.
- **Top-down fairway/green tile, with a ball-flight tracer curve.** A 2D bezier, not physics.
- **Down-the-line "plane" line overlay.**
- **New poses:** address, top, impact, finish.
- **Camera views:** face-on and down-the-line are the two standard golf views, and both are flat side views, so our 2D figure style holds.

## 5. Handles (TikTok, plain curl, 2026-10-27, 21:44 UTC)
Controls ran in the same batch: `@tiktok` existed (96,452,380 followers) and `@qpzvxkmw77391z` returned 10221.

| Option | Result | Notes |
|---|---|---|
| @golfgeometry | **free** (10221) | Says exactly what we do. Distinct from "Golf Animated". |
| @swingplanelab | **free** (10221) | |
| @faceandpath | **free** (10221) | Refers to the "face and path" ball-flight idea. Niche but sticky. |

Also free: @clubfacelab, @golfgeometrylab. Instagram, YouTube and domain availability were not checked.

## 6. Score
| Factor | Score | Weight | Reason |
|---|---|---|---|
| Demand | 4 | ×4 | Several 100k–545k tips accounts [verified-fetch]. 29.1M US on-course golfers [verified-fetch]. Hashtag views not present, so not a 5. |
| Format gap | 4 | ×4 | No credible faceless animated explainer found. Biggest is 1,026 followers. Not 5, because search coverage was cut short. |
| Geometry fit | 4 | ×3 | One body. Plane, path, face, arc and sequence are all lines and angles. The club rig and 2D ball curves cost a point. |
| Name pull | 5 | ×2 | Tiger, Rory, Scheffler and Hogan are globally searched, with well-documented records. |
| WTP | 5 | ×3 | $110/yr Sportsbox at 4.9/3.7K ratings; $275+ HackMotion; GolfFix 1.5M downloads. Adults with money. |
| Reuse | 3 | ×2 | Needs a two-hand club IK rig, a putter, ball/tee/flag, top-down green tile and a flight tracer. |
| Risk | 4 | ×2 | No footage dependency. Low injury risk (back strain is the main one, so avoid "swing harder" advice). Avoid tour, Masters and club logos and equipment brands. |

**Total = 4×4 + 4×4 + 4×3 + 5×2 + 5×3 + 3×2 + 4×2 = 16+16+12+10+15+6+8 = 83 / 100.**

## Open items before committing
1. A manual in-app TikTok search by the founder: "golf animation", "golf swing 3d", "golf explained", "swing plane". Note any account over 10k followers. If one is found, re-score the format gap.
2. Check whether `@golfanimated` actually posts instruction. This needs a look at its videos, which the profile JSON does not list.
3. UK and global participation figures (not found this pass).
4. Choose an app job that does not compete with Sportsbox or GolfFix swing analysis.


## Update 2026-10-27 (lead): multi-sport '.geometry' operator
Plain-curl checks [verified-fetch]: @tennis.geometry 4,267 followers / 28 videos; @padel.geometry 2,948 / 38; @golf.geometry 678 / 30; @running.geometry 0 / 3. They share one bio pattern ("<Sport>, explained with angles", "One fix a day"), so this is likely one operator expanding sport by sport. Not found (10221): basketball, hoops, football, soccer, boxing, mma, pickleball, cricket, rugby, muaythai, badminton, hockey. Format gap lowered 4→3, total −4.
