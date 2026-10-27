# Cricket scout

Scouted 2026-10-27. Plain requests only. TikTok profiles fetched with plain `curl -sS -L` and the
`webapp.user-detail` JSON read. No spoofed user agent, no headless browser.

## Verdict: MAYBE, 63/100. OPEN for the format (low confidence).

- **No animated, faceless cricket technique account was found on TikTok.**
- The tips demand is proven by a live-footage coaching account, **@cricket_mentoring**. It has 219,779 followers and
  sells online coaching.
- **Big caveat 1: the saturation search is incomplete.** The shared web-search budget ran out before any cricket
  mechanic searches ran. This report rests on 35 plain-curl handle probes, not the 8+ mechanic searches the brief
  requires. Re-run them before committing.
- **Big caveat 2: India.** About 90% of cricket's fanbase is in South Asia, and TikTok has been banned in India since
  29 June 2020. Our reachable TikTok audience is the UK, Australia, Pakistan, South Africa, the Caribbean and the
  diaspora.
  - Kohli and Bumrah still pull in those markets, but the India audience sits on **YouTube Shorts and Instagram
    Reels**.
  - A cricket vertical should cross-post there from day one.

## 1. Saturation

### Searches run
- **WebSearch: 0 cricket queries.** The session's shared search limit (200 per turn, across all agents) ran out
  during the rugby scout. I did not work around it.
- **The queries still owed:**
  - "cricket animation tips tiktok"
  - "cricket batting animated breakdown"
  - "site:tiktok.com cricket technique animation"
  - "Kohli cover drive explained animation"
  - "Bumrah action explained animation"
  - "Warne ball of the century animation"
  - "faceless cricket account"
  - "cricket coaching app waitlist tiktok"
  - Urdu and Hindi variants, and YouTube Shorts animated cricket channels.
- **What I did instead:** probed 35 likely TikTok handles with plain curl, with controls.

### Accounts found (plain profile fetch, 2026-10-27, all `[verified-fetch]` from `https://www.tiktok.com/@<handle>`)
| Handle | Followers | Likes | Videos | Bio (verbatim, trimmed) | App/product plug? | Format match |
|---|---|---|---|---|---|---|
| @cricket_mentoring | 219,779 | 3,167,578 | 1,084 | "🏏 Online Cricket Coaching & Mentoring 🌍📱Join our next tour to India 🇮🇳✈️" | **Yes**, coaching and tours | Coach-led tips. Likely live footage (format not viewed, `[unverified]`). **Strongest adjacent incumbent.** |
| @cricketmastery | 11,924 | 164,909 | 439 | "The ridiculously easy batting plan no coach talks about - check out the link" | **Yes**, a batting plan | Batting tips with a product plug. Format not viewed `[unverified]`. cricketmastery.com looks unrelated (an article site) [verified-fetch]. |
| @englandcricket | 415,846 | 11,209,202 | 890 | "We Are England Cricket. The Official Home of All England Cricket teams on Tiktok" | No | Official. Footage. |
| @icc | 3,273,261 | 79,120,368 | 2,935 | "Official TikTok Account for the International Cricket Council." | Tickets | Official. Footage. |
| @cricketcoaching | 1,110 | 2,326 | 108 | "cricket and fitness coach at Pakistan cricket board" | No | Coach, small. |
| @cricket_animation | 2 | 5 | 1 | "Cricket Animation 🏏 Artist🎨 … YT Cricket Animation" | No | Fan animation, negligible. |
| @cricketanimations | 5 | 10 | 2 | "Only Cricket video … Tiktok Cricket academy" | No | Negligible. |
| @cricketexplained | 0 | 0 | 8 | "hey guys uploaded cricket short vadio…" | No | Negligible. |

Probed and dead or empty:
- **Tiny accounts:** @cricketmentoring (4 followers), @wisden (3), @crickettips (2,496 followers, 1 unrelated
  video), @cricketcoach, @battingtips, @cricketanimation, @cricketiq, @thecricketcoach, @cricketskills, @cricket360,
  @crickettechniques, @cricket.coaching, @cricket_tips, @bowlingtips, @pitchvision.
- **Inactive handle:** @cricket.com.au returned status 10222 (unrelated "Eddie", 4 followers).
- **10221 (no such user):** @cricket.explained, @cricketcoachingtips, @crickettechnique, @cricketbattingtips,
  @cricketmentoringofficial, @howtoplaycricket, @cricketbattingcoach, @cricketcoachingpro, @thecricketmentor,
  @cricketbowlingtips, @battingcoach and @squidgecricket.

### Classification: **OPEN for the animated format, CONTESTED for cricket tips in general**
- Strongest incumbent: **@cricket_mentoring**, with 219,779 followers, 3.17M likes and 1,084 videos. It is a coaching
  business, and as far as the bio shows it is not faceless or animated.
- No credible animated technique account turned up among the handles probed.
- **Confidence is low** until the mechanic searches run. Handle probing misses accounts with unpredictable names.

## 2. Demand
- **Hashtag reach:** I fetched `/tag/cricket`, `/tag/crickettips`, `/tag/battingtips` and `/tag/cricketcoaching`
  with plain curl. Each returned HTTP 200, but `webapp.challenge-detail` was **not present**, so there are no numbers
  [verified-fetch].
- **Large cricket audiences on TikTok:** @icc has 3,273,261 followers. @englandcricket has 415,846. @cricket_mentoring
  has 219,779 [verified-fetch].
- **Fanbase:** "cricket's fanbase cross[es] one billion people, with 90% of them in South Asia"
  [verified-fetch: https://en.wikipedia.org/wiki/Cricket, the cited source's publisher is not visible].
- **India:** TikTok was "banned completely in India by the Ministry of Electronics and Information Technology on
  29 June 2020" [verified-fetch: https://en.wikipedia.org/wiki/Censorship_of_TikTok].
  - The page I read did not confirm whether the ban still stands. Current status: `[unverified]`, widely reported as
    still in force.
  - Reach judgement: drop India from TikTok sizing. Pakistan, the UK, Australia, South Africa, the Caribbean and the
    diaspora remain.
- **UK participation:** about 181,500 people played cricket at least twice a month in 2020–21 (Active Lives survey,
  via [verified-fetch: https://en.wikipedia.org/wiki/Cricket_in_England]). Primary ECB and Sport England figures were
  not fetched.
- **Global participation:** not found (no search budget).

## 3. App market (willingness to pay)
- **Paying signals seen on TikTok:**
  - @cricket_mentoring sells online coaching and tours to India.
  - @cricketmastery sells a "batting plan" via a bio link [verified-fetch, profile bios].
  - Prices: not found. cricketmentoring.com returned an empty page to WebFetch.
- **PitchVision:** a cricket coaching platform I expected to check. The host is outside the session's allowed
  network, so it was not checked. The network allowlist would need to include www.pitchvision.com.
- **App Store and Google Play cricket training apps:** not found. No search budget was left to locate listings, and I
  did not guess app IDs.
- **WTP score: 2, on thin evidence.** Coaching businesses exist and sell, but I verified no app ratings or prices.

## 4. Format fit: 10 hooks
Every player fact is `[unverified]` until the fact-checker sources it. **Most cricket hooks need ball physics**
(bounce, swing, spin), which our boxing engine does not have.

| # | Hook | Star | Geometry device | >2 bodies? | Ball physics? |
|---|---|---|---|---|---|
| 1 | "Pace doesn't beat you. Reaching for the ball does." (playing late) | Virat Kohli | Timing bar: contact point under the eyes vs in front | No | **Yes** |
| 2 | "Bumrah isn't quick because of his run-up. His release point is." | Jasprit Bumrah | Side view, arm angle + release height line | No | **Yes** |
| 3 | "Spin doesn't get you out. Staying in your crease does." | Shane Warne | Top-down distance from crease to the pitch of the ball | No | **Yes** |
| 4 | "Getting bowled isn't the ball. It's your head falling over." | Joe Root | Side view, vertical head line over front foot | No | Light |
| 5 | "Edges aren't bad luck. They're your bat face angle." | Joe Root | Top-down bat face angle vs ball line | No | Light |
| 6 | "The ball of the century wasn't luck. It was drift, then dip, then turn." (1993) | Warne | Top-down curved path + side-view dip | No | **Yes**, heavy |
| 7 | "Short batters don't get bounced out. Planting the front foot early does." | short-batter star TBC | Timing bar, trigger movement | No | **Yes** |
| 8 | "Losing pace isn't weak arms. It's a collapsing front knee." | Bumrah / pace bowler | Side view, front-knee angle at landing | No | No |
| 9 | "Slow bowling isn't low effort. It's a lazy front arm." | spin or seam star TBC | Side view, front-arm pull angle | No | No |
| 10 | "Run-outs aren't slow legs. They're the call." | famous pair TBC | Top-down: two runners, distance + timing bar | No (2) | Light |

**Best three for launch:** #8 (needs no ball), then #4 and #1. #4 and #1 work with a simple straight ball path.
Warne #6 is the big name-pull video, but it needs a proper curved-trajectory rig first.

### Props and rigs needed
- A bat with grip IK on both hands, plus pads, helmet and gloves.
- A ball with bounce, seam and spin paths: a 3D path drawn as a 2D side and top line.
- Stumps and bails, crease lines, and a 22-yard pitch strip, in both top-down and side views.
- A bowling-action pose set: gather, front-foot landing, release.
- A pitch map / length zones overlay (top-down).

## 5. Handles (10221 method, 2026-10-27)
Controls in the same run:
- @qzxv9kwplm3rr and @xk2vq9zzpl0w returned 10221, as expected.
- @tiktok returned status 0 with 96,452,382 followers.
- @icc returned status 0 with 3,273,261 followers.

| Brand | Handle | Result |
|---|---|---|
| Playing Late | @playinglate | **free** (10221). @playing.late is taken (status 10222, 0 followers, unrelated). |
| Off Stump Lab | @offstumplab | **free** (10221) |
| Crease Theory | @creasetheory (also @crease.theory) | **free** (10221) |

10221 means no live user. A reserved or banned name could also return it, so confirm in the app. Ask the founder
before registering.

## 6. Score
| Factor | Score | Why |
|---|---|---|
| Demand (×4) | 3 | Huge sport, but India is off TikTok. The reachable markets are mid-sized. Coaching tips do reach 220k. |
| Format gap (×4) | 4 | No animated technique account found. Low confidence: the mechanic searches were not run. |
| Geometry fit (×3) | 3 | Body angles (front knee, head line, release) are clean 1–2 body geometry. Most batting lessons need ball paths. |
| Name pull (×2) | 4 | Kohli, Bumrah, Root and Warne are global names with well-documented moments. |
| WTP (×3) | 2 | Coaching businesses sell, but no app prices or ratings were verified. |
| Reuse (×2) | 2 | Bat, ball trajectory, stumps, pitch and a bowling pose set are all new. |
| Risk (×2) | 4 | Low injury-advice risk (mention helmets for pace). No footage dependency. |
| **Total** | **63** | 12+16+9+8+6+4+8 |

**Before any GO:**
1. Run the 8+ owed mechanic searches, including YouTube Shorts and Instagram, plus Hindi and Urdu terms.
2. Check App Store and Google Play cricket training apps for ratings and prices.
3. Decide whether the vertical is TikTok-first (UK, AU, PK) or Shorts/Reels-first (India). That choice changes the
   demand score.
