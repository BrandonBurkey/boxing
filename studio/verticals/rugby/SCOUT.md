# Rugby scout (union + league)

Scouted 2026-10-27. Plain requests only. TikTok profiles fetched with plain `curl -sS -L` and the
`webapp.user-detail` JSON read. No spoofed user agent, no headless browser.

## Verdict: MAYBE, 59/100. CONTESTED (weakly).

- One small account already runs a close version of our format: **@rugbyeverest**. It has 4,382 followers and
  161 videos, posts animated lineout and backline plays, and plugs its own "playbook app" in the bio. It is small and
  team-tactics led, not a famous-player technique account. The gap is real but not empty.
- Demand for rugby tips on TikTok is proven by a live-footage coach account: **@rugbybricks** has 201,916 followers.
- Two things hold the score down. The core technique (tackling) carries head-injury liability. Willingness to pay is
  thin: the rugby apps we could see have 1–2 ratings.
- **If we enter, lead with stepping, evasion and ball-carry body height, not tackle coaching.** Keep any tackle content
  strictly inside World Rugby and union guidance.

## 1. Saturation

### Searches run (12 WebSearch queries, before the shared search budget ran out)
1. `rugby animation tips tiktok`
2. `site:tiktok.com rugby animated breakdown tackle technique`
3. `rugby IQ animation explained shorts`
4. `Antoine Dupont explained animation`
5. `faceless rugby account tiktok animated`
6. `rugby tactics 2D animation tiktok`
7. `tiktok.com/discover rugby animation`
8. `"rugby" animated technique explainer youtube shorts channel stick figure`
9. `rugby training app waitlist tiktok`
10. `site:tiktok.com rugby tips animation`
11. `rugby explained animation account instagram reels tactics breakdown`
12. `Jonah Lomu stepping explained animation`, plus `NRL rugby league animated explainer tiktok tackle technique animation`,
    `"rugby" "animation" tiktok account followers technique coaching shorts 2026` and three handle-hunting queries.

The web index covers TikTok poorly, and most queries returned no TikTok pages. One extended query surfaced TikTok
discover pages naming "Rugby Slate", "Rugby Everest" and a "Tacticboard" video [snippet]. TikTok discover pages
return no video data to plain curl or WebFetch (checked), so I found the handles by probing likely names.

### Accounts found (plain profile fetch, 2026-10-27, all `[verified-fetch]` from `https://www.tiktok.com/@<handle>`)
| Handle | Followers | Likes | Videos | Bio (verbatim, trimmed) | App plug? | Format match |
|---|---|---|---|---|---|---|
| @rugbyeverest | 4,382 | 77,586 | 161 | "For rugby players who want to go pro. Free position guide + playbook app ↓" (link rugbyeverest.app) | **Yes** | **Closest.** Animated lineout plays, with an animated version offered for a comment [snippet]. Team plays, not star technique. |
| @squidgerugby | 22,638 | 444,027 | 200 | "A desperate attempt to understand a sport where not even the ball makes sense" | No (YouTube link) | Faceless voiceover analysis over **match footage**. Not animated. |
| @rugbybricks | 201,916 | 5,016,263 | 1,677 | "OUTWORK OUTLEARN" (link rugbybricks.com) | Sells courses + gear | Live-footage skills/kicking coaching. Proves tips demand. Not animated. |
| @rugbydump | 46,390 | 3,649,192 | 160 | "The home of grassroots rugby 🏉" | No | Highlights. Not technique. |
| @rugbypass | 2,544,672 | 167,784,974 | 3,016 | "RugbyPass, the home of rugby 👇" | No | Media/highlights. Not technique. |
| @rugbyrenegade | 17,848 | 155 | 5 | "RUGBY" | No | 5 videos. The likes/followers ratio looks odd. Probably not the coaching brand. |
| @rugbyslate | 4 | 2 | 1 | (empty) | No | Not the RugbySlate brand. RugbySlate's real TikTok handle was **not found**. |
| @theproplife | 788 | 47,835 | 26 | "PPL / ME 👨‍✈️Aviation content" | No | TikTok's 2022 newsroom named this a rugby creator [snippet], but the handle now posts aviation content. |

Off-TikTok: **RugbySlate** posts animated union moves and tactics on YouTube and Instagram and calls them "free to all"
[snippet: https://rugbyslate.com/, https://www.youtube.com/RugbySlate]. Its YouTube page returned no counts to WebFetch.
Its TikTok handle was not found.

Also probed and not a match: @rugbyexplained (2 followers), @ruckscience (7), @rugbyiq (7), @therugbysite (35),
@rugbytips (9). The handles @rugby_slate, @rugbyslate.official, @rugbyslateofficial, @therugbyslate, @tacticboard,
@tacticboardapp, @rugbytacticboard, @rugbyanimator and @rugbycoachweekly returned 10221 (no such user).

### Classification: **CONTESTED (weak)**
- Strongest format incumbent: **@rugbyeverest**, with 4,382 followers, 77,586 likes and 161 videos, and an app plug.
  It is small after 161 posts (estimate: 4,382 / 161 ≈ 27 followers per video).
- No one found does **famous-player technique** in flat-mannequin style (Dupont, Kolisi, Lomu). Rugby Everest
  and RugbySlate are tactics boards (dots and lines, team plays).
- Caveat: TikTok search isn't reachable, so an account that our handle guesses and the web index both miss could exist.

## 2. Demand
- **Hashtag reach:** I fetched `/tag/rugby`, `/tag/rugbytips`, `/tag/rugbytraining`, `/tag/rugbyskills` and
  `/tag/rugbyleague` with plain curl. Each returned HTTP 200, but `webapp.challenge-detail` was **not present**, so I
  have no hashtag numbers [verified-fetch]. A search summary said #rugby is "close to 12 billion views overall",
  but the source page URL was not captured `[unverified]`. Do not use this figure.
- **Big rugby audiences on TikTok:** @rugbypass has 2,544,672 followers and @rugbybricks has 201,916 [verified-fetch].
- **TikTok backs the sport:** TikTok has sponsored Six Nations Rugby since 2022 [snippet:
  https://newsroom.tiktok.com/six-nations-rugby-and-tiktok-announce-landmark-partnership?lang=en-GB].
- **Participation:**
  - Global: "In 2023, there were more than 10 million players worldwide, of whom 8.4 million were registered"
    [verified-fetch: https://en.wikipedia.org/wiki/Rugby_union, citing World Rugby].
  - England: 340,347 registered players (infobox, undated). A 2010 Sport England survey found 170,200 people playing
    weekly [verified-fetch: https://en.wikipedia.org/wiki/Rugby_union_in_England].
  - These come from Wikipedia, not World Rugby or the RFU directly. A fresh primary-source check is pending, because the
    search budget ran out.
- **Rugby league participation:** not found.

## 3. App market (willingness to pay)
| Product | Price model | Rating | Signal | Source |
|---|---|---|---|---|
| Rugby Renegade (S&C programmes + coaching, iOS/Android app) | £27/month after a 7-day trial | not shown | "more than 1,000 rugby players have joined", est. 2014 | [verified-fetch] https://rugbyrenegade.com/faqs/ |
| Rugby Skills Booster (Loyal/Fitivity) | Free + IAP, rugby yearly $39.99 / monthly $9.99 | 5.0 (1 rating) | Negligible traction | [verified-fetch] https://apps.apple.com/us/app/-/id889302523 |
| RugbyFit | not stated | 5.0 (2 ratings), <1k downloads | First released 15 Apr 2026 | [verified-fetch] https://mwm.ai/apps/rugbyfit/6745445973 |
| Tactic Board – Rugby Animator | Free, Pro $3.99 | 5.0 (1 rating) | Coach tool that exports animated plays | [verified-fetch] https://apps.apple.com/app/id6782612497 |
| Rugby Everest playbook app | not found | not found | Plugged from the 4.4k TikTok | [verified-fetch] https://rugbyeverest.app/ (no price shown) |
| Rugby Bricks courses, Rugby Ready Academy | prices not shown (NZD store) | n/a | 201.9k TikTok; founded by kicker Peter Breen | [verified-fetch] https://rugbybricks.com/ |

What this shows:
- No strong, cheap incumbent owns "learn rugby technique on your phone".
- The paying behaviour we can see is **S&C programmes** (Rugby Renegade), not technique.
- Technique apps have almost no ratings. That suggests weak willingness to pay for technique alone.
- Score: WTP 2.

## 4. Format fit: 10 hooks
Every player fact below is `[unverified]` until the fact-checker sources it. Bodies count includes the ball only where noted.

| # | Hook | Star | Geometry device | >2 bodies? | Ball physics? |
|---|---|---|---|---|---|
| 1 | "Slow feet don't get you caught. Running straight at him does." | Cheslin Kolbe | Top-down angle of approach, step line | No | No |
| 2 | "Lomu didn't beat England on speed. He beat them on the angle." (1995 RWC semi) | Jonah Lomu | Top-down running line vs defender lines | Yes (3) | No |
| 3 | "Being small doesn't get you smashed. Arriving upright does." (ball carrier) | Antoine Dupont | Side view, hip-height line at contact | No | No |
| 4 | "Weight doesn't win contact. Your height into contact does." | Siya Kolisi | Side view, shoulder-hip angle | No | No |
| 5 | "Missed tackles aren't about courage. They're about the last two metres." ⚠ safety | Kolisi | Top-down closing distance bar | No | No |
| 6 | "Losing the ruck isn't about size. Arriving second is." | Kolisi | Timing bar, arrival order | Yes (3–4) | No |
| 7 | "Bad hands don't drop the pass. Flat hips do." | Dupont | Side/top angle of hips to target | No | **Yes** |
| 8 | "Box kicks don't go short on leg power. They go short on the drop." | Dupont | Side view, drop height + foot angle | No | **Yes** |
| 9 | "Line breaks aren't missed tackles. They're the gap you left." | league or union defence | Top-down spacing distances | Yes (4+) | No |
| 10 | "Offloads don't fail on hands. They fail on timing." (league) | Sonny Bill Williams | Timing bar, release window | Yes (3) | **Yes** |

**Best three for launch:** #1, #3 and #2. They need two or three bodies, no ball physics and no tackle coaching.

**Safety rule for this vertical.** Any tackle content must match World Rugby's Tackle Ready programme and current union
tackle-height law. That law changed in the community game, so the fact-checker must confirm it from primary sources.
Never show or imply head contact. Never call a technique "safe". Show "the position coaches teach", and state that
head injuries are a real risk.

### Props and rigs needed
- An oval ball, with a carry pose and pass/kick arcs.
- Pitch lines: the try line, the 22, the 10 m line, and touch.
- A rig for contact between two bodies. Boxing figures never grapple. Tackle and ruck poses need body-on-body IK.
- A ruck pile (3–4 bodies), tackle pads/bags, and lineout lifting poses (later).
- A defender-line top-down view: several dots/figures with spacing labels.

## 5. Handles (10221 method, 2026-10-27)
Controls in the same run:
- @qzxv9kwplm3rr and @xk2vq9zzpl0w returned 10221, as expected.
- @tiktok returned status 0 with 96,452,382 followers.
- @icc returned status 0 with 3,273,261 followers.

| Brand | Handle | Result |
|---|---|---|
| Gainline IQ | @gainlineiq (also @gainline.iq) | **free** (10221) |
| Ruck Theory | @rucktheory (also @ruck.theory) | **free** (10221) |
| Try Lines | @trylines | **free** (10221) |

Note: 10221 means no live user. A banned or reserved name could also return it. Confirm in the app before
registering. Asking the founder comes first.

## 6. Score
| Factor | Score | Why |
|---|---|---|
| Demand (×4) | 3 | Big rugby accounts (2.5M media, 202k tips) and 8.4M registered players. A regional sport, and no hashtag numbers. |
| Format gap (×4) | 4 | Only a 4.4k tactics-board account does animation + app. No famous-player mannequin technique account found. |
| Geometry fit (×3) | 3 | Stepping and contact height are clean 2-body geometry. Rucks, lineouts and passing need many bodies or a ball. |
| Name pull (×2) | 3 | Dupont, Kolisi and Lomu are strong in rugby nations and weak globally. |
| WTP (×3) | 2 | Rugby Renegade at £27/mo with 1,000+ players is the only paying signal. Technique apps have 1–2 ratings. |
| Reuse (×2) | 3 | Needs a ball, pitch lines and a body-on-body contact rig. |
| Risk (×2) | 2 | Tackle and head-injury advice carries real liability and is under law change. Mitigated by avoiding tackle coaching. |
| **Total** | **59** | 12+16+9+6+6+6+4 |

**Evidence gap:** the web search budget ran out during this scout. Before committing, re-run 4–6 mechanic
searches, especially French-language ones ("rugby animation technique", "plaquage animation tiktok"), because France
is a large rugby market.
