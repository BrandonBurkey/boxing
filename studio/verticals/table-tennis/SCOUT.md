# Table tennis: scout report (second-tier, lighter pass)

**Verdict: NO (for now). Total 62/100. Saturation: OPEN for the animated format (low confidence).**
No animated technique account was found. But the sport *is* spin. That means ball physics in almost every
lesson, which is our engine's weakest area. The big TikTok accounts are entertainment, not lessons.
The "huge in Asia" audience is mostly on Douyin, not TikTok (unverified, general knowledge).
No paid-app signal was verified.

Checked 2026-10-27. Profiles were read with plain `curl` from `webapp.user-detail`.

## Limits of this pass (read first)
- The search engine barely indexes TikTok. "Not found" means not found by search and handle probes. TikTok in-app search was not used.
- **Only 4 web searches ran for this sport before the shared search budget (200 per turn) was exhausted.**
  That is below the 5 asked for. A fifth "search" was a batch of direct handle probes. Participation is "not found".
- Tag pages (#tabletennis, #pingpong) returned no `webapp.challenge-detail` data.
- Verdict thresholds (my own): GO at 75 or more, MAYBE at 60–74, NO below 60. At 62 this is technically a
  MAYBE. I call it NO because of the spin-physics problem and the missing WTP evidence.

## 1. Saturation
**Mechanic searches run (4 + probes):**
1. "table tennis animation tips tiktok animated spin explained account": spin guides and a student
   animation project. No account. [snippet] https://you.stonybrook.edu/334misik
2. "site:tiktok.com table tennis animation explained": no TikTok pages. A 3D mocap asset pack for game developers. [snippet] https://superhivemarket.com/products/table-tennis-animations---motion-cast19-vol
3. "Ma Long technique explained animation forehand table tennis 3D animation youtube": forum threads and
   ITTF slow-motion video only. No animated breakdown found. [snippet] https://www.tabletenniscoaching.com/node/2560
4. "table tennis TikTok creators tips most followed": TTBL is "one of the biggest table tennis channels".
   "Best Of Table Tennis" is listed at 202.3k by Modash. The handle I probed (@bestoftabletennis) has 165 followers, so the Modash entry is likely a different handle. [snippet] https://www.modash.io/find-influencers/tiktok/tennis/male
5. Handle probes (below).

**Handle probes (controls: `zqxjvbkw9271qq` → 10221; `tiktok` → 96.45M):**
| Handle | Result | Level |
|---|---|---|
| @tabletennisanimation, @pingpongiq, @tabletennisiq, @tabletennisexplained, @tabletennisdaily | 10221, no such user | [verified-fetch] |
| @pingskills | exists: 7 followers, 0 videos (likely a squatter, not the coaching brand) | [verified-fetch] |
| @tomlodziak | exists: 20 followers, 17 videos | [verified-fetch] |

**Biggest accounts (entertainment or league, not lessons):**
| Handle | Followers | Likes | Videos | Bio | App plug? | Level |
|---|---|---|---|---|---|---|
| @pongfinity | 1,793,615 | 36,119,962 | 208 | "Check out our store!" | merch store | [verified-fetch] |
| @ttbl (German Bundesliga) | 392,012 | 14,777,971 | 755 | league account | no | [verified-fetch] |

**Class: OPEN** (for animated technique). Strongest account in the sport: @pongfinity, 1.79M (trick shots, not lessons).

## 2. Demand
- Hashtag data: not present on tag pages. [verified-fetch]
- Participation (ITTF, Sport England): **not found** (search budget exhausted).
- Table tennis's Asian mass audience is mostly in China, where TikTok is not available. Douyin is a separate
  app. [unverified] That weakens the "huge in Asia" case for a TikTok account.

## 3. App market
| Product | Price model | Signal | Level |
|---|---|---|---|
| PingSkills | free lessons, free 4-week plan, video coaching "free during beta"; paid plan page not read | no member count shown | [verified-fetch] https://www.pingskills.com/ |
| Table Tennis Touch (game, not training) | – | – | [snippet] |

Paid table tennis training apps with real ratings or revenue: **not found** in this pass. The biggest coach
brand gives a lot away free, which suggests WTP is low.

## 4. Format fit
Hooks. All facts need the fact-check pass. Most need **ball + spin physics**.
1. "Your loop isn't weak. You're hitting through the ball, not brushing it." (Bat-angle line.) Ma Long. **Spin.**
2. "Slow reactions don't lose points. Standing square does." (Stance-angle top-down.) Fan Zhendong.
3. "Short arms don't lose rallies. Standing too close does." (Distance bar from the table.) Ma Long.
4. "Your serve isn't easy to read because it's slow. It's because your wrist shows the spin." **Spin.**
5. "Your backhand isn't late. Your elbow is stuck to your ribs." (Elbow-angle device.)
6. "Footwork isn't about speed. It's one step, not three." (Step-count top-down.) Ma Long.
7. "Your topspin doesn't miss long. Your bat angle is open." (Bat-angle line.) **Spin.**
8. "Your arm doesn't power the forehand. Your hips do." (Hip-rotation arc.)
9. "Chops don't lose to loops. Standing too close does." (Distance bar.) **2 bodies + ball.**
10. "Receive doesn't fail at the bat. It fails at your feet." (Weight bar.)

**Props/rigs:** table (top-down and side), net, bat (one-hand attachment), a small ball with **visible spin
arrows and a curved trajectory**, and a low athletic-stance pose set.

## 5. Handles (controls: `zqxjvbkw9271qq` → 10221, `tiktok` → exists)
| Handle | Result |
|---|---|
| @spinangle | free (10221) |
| @pingpong.geometry | free (10221) |
| @spinlines.tt | free (10221) |
| (@loopiq) | taken: 49 followers, 0 videos (dropped) |

## 6. Score
| Factor | Score | Why |
|---|---|---|
| Demand (×4) | 3 | Big accounts are entertainment; China is off TikTok |
| Format gap (×4) | 4 | None found; capped by the search limits |
| Geometry fit (×3) | 2 | Spin and ball flight are central |
| Name pull (×2) | 3 | Ma Long and Fan Zhendong are huge in Asia, weaker in the West (estimate) |
| WTP (×3) | 2 | No verified paid-app signal; free lessons dominate |
| Reuse (×2) | 3 | Table, bat, ball, stance poses |
| Risk (×2) | 5 | Low injury risk; no footage needed |
| **Total** | **62** | 12+16+6+6+6+6+10 |
