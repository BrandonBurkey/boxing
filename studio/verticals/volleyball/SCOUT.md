# Volleyball: scout report (second-tier, lighter pass)

**Verdict: MAYBE. Total 66/100. Saturation: OPEN (low confidence).**
Nobody found doing faceless animated volleyball technique on TikTok. The audience is real, but it skews
young, which raises the risk on the waitlist. Volleyball also needs more ball and team physics than boxing.

Checked 2026-10-27. TikTok profiles were read with plain `curl` from `webapp.user-detail`.

## Limits of this pass (read first)
- **The search engine barely indexes TikTok.** Every `site:tiktok.com` query returned spam or non-TikTok
  pages. "Not found" here means not found by web search and handle probes. It does **not** mean nobody
  on TikTok is doing it. TikTok's own in-app search was not used, because the rules forbid scraping it.
- **The shared web-search budget ran out** (200 per turn) partway through all four sports.
  Participation figures could not be looked up and are marked "not found".
- Tag pages (`/tag/<x>`) returned no `webapp.challenge-detail` data for any tag, so there are no hashtag numbers.
- Verdict thresholds (my own, since the playbook sets none): GO at 75 or more, MAYBE at 60–74, NO below 60.

## 1. Saturation
**Mechanic searches run (6):**
1. "volleyball animation tips tiktok animated technique": drawing tutorials and SEO spam only. [snippet]
2. "site:tiktok.com volleyball animated breakdown approach jump": no TikTok pages. [snippet]
3. "volleyball IQ animation account tiktok rotations explained 2D": scraper pages list *untitled-creator*
   videos such as "5-1 Rotation in Volleyball: Explained With Animations". Animated **rotation** explainers
   exist somewhere (YouTube-style titles). No account was identified. [snippet] e.g. https://revistasdemo.untumbes.edu.pe/information/volleyball-5-1-rotation-explained-26735
4. "faceless volleyball account animated tips instagram youtube shorts": generic faceless-account guides only. [snippet]
5. "volleyball tiktok account animations explained with animation creator": nothing relevant. Volleyball England runs @vballengland (clips, not animation). [snippet] https://volleyballengland.org/article/676/
6. "site:tiktok.com volleyball animation tips": no TikTok pages. [snippet]
7. "volleyball approach animation 3D tutorial app": found 2D *coach play-diagram* apps with animated plays
   (Volleyball Playview, Volley++, Sportplan animator). These are tools for coaches, not TikTok accounts. [snippet] https://apps.apple.com/us/app/volleyball-playview/id1073333198

**Handle probes (plain curl, controls: `zqxjvbkw9271qq` → 10221; `tiktok` → 96.45M followers):**
| Handle | Result | Followers / likes / videos | Bio / app plug | Level |
|---|---|---|---|---|
| @volleyballexplained | exists | 21 / 126 / 11 | "Watch in youtube.com/volleyballexplained". Format unconfirmed (the YouTube page fetch was empty). No app. | [verified-fetch] |
| @volleyballiq | exists | 38 / 10 / 1 | empty | [verified-fetch] |
| @volleyballtips | status 10222 (private/restricted) | 42 / 213 / 0 | none | [verified-fetch] |
| @volleyballanimated, @volleyball.animation, @volleyballanimations, @vballiq | 10221, no such user | – | – | [verified-fetch] |

**Live-action tip incumbents (demand signal, not this format):**
| Handle | Followers | Likes | Videos | Bio | App plug? | Level |
|---|---|---|---|---|---|---|
| @coachchijo | 427,999 | 13,006,118 | 754 | "Volleyball Coach in Oregon, USA for 30+ years" + linktree | linktree only | [verified-fetch] |
| @coachkiy | 121,625 | 14,272,519 | 1,345 | coach, team development | no | [verified-fetch] |

**Class: OPEN.** No credible faceless animated technique account was found.
**Strongest incumbent overall (live-action):** @coachchijo, 428k followers.
Low confidence, because of the search limits above.

## 2. Demand
- Hashtags #volleyball, #volleyballtips and #volleyballtraining: the tag pages returned **no challenge-detail data**. [verified-fetch]
- A third-party ranking lists players at the top: Tobias Krick 5.6M and Erik Shoji 1.3M TikTok followers. [snippet] https://heepsy.com/top-tiktok/volleyball
- Participation (USA Volleyball, NFHS): **not found**, because the search budget ran out.
- Audience skew: US girls' and club volleyball. Many viewers are likely under 18. (estimate; no source)

## 3. App market
| App | Price model | Rating | Level |
|---|---|---|---|
| VolleyVision: Volleyball Coach | Free + IAP, $4.99/wk to $59.99/yr | 4.6 ★, 127 ratings | [verified-fetch] https://apps.apple.com/app/id6756837513 |
| VertMax (vertical jump, targets spiking) | Free + IAP, $4.99/wk, $34.99/yr | 3.0 ★, 2 ratings | [verified-fetch] https://apps.apple.com/app/id6748640285 |
| VolleyTrain (360+ drills) | IAP $19.99–$199.99 | not enough ratings | [snippet] |
| Volleyball Playview / Volley++ | coach play diagrams | not checked | [snippet] |

No strong, cheap incumbent owns "learn volleyball technique on your phone". Rating counts are small.
Willingness to pay likely runs through parents of club players (estimate, no source). That adds a
consent and minors problem to any waitlist.

## 4. Format fit
Hooks. Every athlete fact needs the fact-check pass.
1. "Short players don't get blocked. A late, flat approach does." (Approach angle, timing bar.) Yuki Ishikawa.
2. "Weak arms don't shank passes. A platform pointed at the floor does." (Platform angle line.) Erik Shoji.
3. "Jumping higher won't fix your spike. Your last two steps will." (Step-length bars.) Wilfredo León.
4. "Your block isn't too short. Your hands are reaching up instead of over." (Hand-penetration angle.)
5. "Hard serves don't win points. Serving the seam does." (Top-down seam lines.) **Needs 2+ bodies and ball flight.**
6. "Slow feet don't lose digs. Standing tall does." (Hip-height bar.)
7. "Your arm swing isn't weak. Your elbow drops before contact." (Elbow-angle device.)
8. "Setters don't lose the ball with their hands. They lose it with their feet." (Square-to-target line.) **Ball physics.**
9. "Blocking isn't about height. It's about where you start your step." (Top-down lateral footwork.)
10. "Bad hitters don't swing late. They start the approach late." (Timing bar against the set.) **Ball + 2 bodies.**

**Props/rigs:** ball (with arc), net and antenna, court lines (top-down), a jump/arm-swing pose set, and a
two-arm platform pose. Team rotations would need six bodies. Avoid those.

## 5. Handles (controls: `zqxjvbkw9271qq` → 10221, `tiktok` → exists)
| Handle | Result |
|---|---|
| @approachiq | free (10221) |
| @spikeangle | free (10221) |
| @vball.geometry | free (10221) |

## 6. Score
| Factor | Score | Why |
|---|---|---|
| Demand (×4) | 4 | 428k and 122k tip accounts verified; no hashtag data |
| Format gap (×4) | 4 | None found; capped at 4 because TikTok search could not be reached |
| Geometry fit (×3) | 3 | Approach, platform and block are single-body; much else is ball or team |
| Name pull (×2) | 2 | Few stars with search pull among a Western TikTok audience (estimate) |
| WTP (×3) | 3 | Paid apps exist, with small rating counts |
| Reuse (×2) | 3 | Ball, net, court, jump poses |
| Risk (×2) | 3 | Young audience; collecting minors' emails on a waitlist |
| **Total** | **66** | 16+16+9+4+9+6+6 |
