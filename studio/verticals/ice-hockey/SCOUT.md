# Ice hockey: scout report (second-tier, lighter pass)

**Verdict: MAYBE. Total 73/100. Saturation: OPEN for the animated format (low confidence).**
The audience is huge on TikTok, but every big account is live-action. No faceless animated technique
account was found. The cost is the engine: skating is a new way of moving, and shooting needs a stick and puck.

Checked 2026-10-27. Profiles were read with plain `curl` from `webapp.user-detail`.

## Limits of this pass (read first)
- The search engine barely indexes TikTok. `site:tiktok.com` queries returned no TikTok pages. "Not found"
  means not found by web search and handle probes, not proven absent. TikTok's in-app search was not used.
- The shared web-search budget ran out (200 per turn). Participation figures are "not found".
  The IIHF survey page returned 403. [verified-fetch of the 403]
- Tag pages returned no `webapp.challenge-detail` data, so there are no hashtag numbers.
- Verdict thresholds (my own): GO at 75 or more, MAYBE at 60–74, NO below 60.

## 1. Saturation
**Mechanic searches run (5):**
1. "ice hockey animated technique tiktok skating stride animation account": only live-action creators
   (e.g. Luke Croucher, crossover tutorials), the Coach Mary Skating paid program and How To Hockey
   slow-motion analysis. No animation account. [snippet] https://learn.neumann.edu/news/canadian-skater-is-a-tiktok-star
2. "site:tiktok.com hockey animation tips": no TikTok pages. HockeyShare's drill diagrammer has an
   "Animation Mode" (a coach tool, not an account). [snippet] https://support.hockeyshare.com/article-tags/diagrammer/
3. "youtube shorts animated hockey breakdown channel 2D animation explained McDavid": only article-style
   frame-by-frame breakdowns (theScore) and NHL's own "animation tech" in team breakdowns. No account. [snippet] https://www.thescore.com/news/1401711
4. "best hockey training TikTok accounts skating tips creators followers": a Feedspot list (verified below). [verified-fetch] https://creators.feedspot.com/ice_hockey_tiktok_influencers/
5. Handle probes for animated names (below).

**Handle probes (controls: `zqxjvbkw9271qq` → 10221; `tiktok` → 96.45M):**
| Handle | Result | Level |
|---|---|---|
| @hockeyanimated, @hockey.animation, @hockeyexplained, @howtohockey, @howtohockeycom | 10221, no such user | [verified-fetch] |
| @hockeyiq | exists: 5 followers, 1 video, bio "Hockey Takes" | [verified-fetch] |
| @hockeytraining | exists: 22 followers, 2 videos | [verified-fetch] |

**Live-action incumbents (demand signal, not this format):**
| Handle | Followers | Likes | Videos | Bio | App plug? | Level |
|---|---|---|---|---|---|---|
| @alwayshockey (Zac Bell) | 1,203,217 | 36,611,917 | 590 | "Artist". POV stickhandling (per search). | no | [verified-fetch] |
| @heybarber (Pavel Barber) | 1,183,597 | 43,889,290 | 1,017 | "Stickhandling Specialist" + bit.ly link | link only | [verified-fetch] |
| @coachjeremy (How To Hockey) | 963,436 | 38,917,972 | 672 | "Merch, Training, Links" | sells training via linktree | [verified-fetch] |
| @cherkasov_17 | 290,295 | 7,709,440 | 508 | "Hockey content creator" | no | [verified-fetch] |

**Class: OPEN** for faceless animation. The tips space itself is **SATURATED** with live-action
creators. Coach Jeremy (963k) already sells training, which makes him the nearest competitor for app sign-ups.

## 2. Demand
- Hashtags #hockeytips and #hockeytraining: tag pages had **no challenge-detail data**. [verified-fetch]
- Three verified tip accounts each have about 1M followers or more. That is the strongest audience of the four sports. [verified-fetch]
- Registered players: **not found** (the IIHF page returned 403; search budget exhausted).

## 3. App market
| App / product | Price model | Signal | Level |
|---|---|---|---|
| Coach Mary Skating "Stride Guide" (Playbook app) | paid program | page returned 403 | [snippet] https://my.playbookapp.io/coachmaryskating/programs/the-stride-guide/43032 |
| How To Hockey / Coach Jeremy training | paid training via linktree | 963k TikTok | [verified-fetch] profile; price not checked |
| HockeyShot Training Academy | content + equipment store | not checked | [snippet] https://hockeyshot.com/blogs/training-academy/synthetic-ice-skating-series-part-1-strides |

No dominant cheap app was found in this pass. Willingness to pay is likely high, because hockey is an
expensive sport with paying parents and adult rec leagues (estimate, no source). App ratings were not
checked, because the search budget ran out.

## 4. Format fit
Hooks. All facts need the fact-check pass.
1. "Short legs don't make you slow. A stride that pushes back instead of out does." (Push-angle line, top-down.) McDavid.
2. "Your shot isn't weak. Your weight is on the wrong foot." (Weight bar.) Ovechkin.
3. "Small players don't get knocked off the puck. Standing tall does." (Knee-bend angle.) Gretzky.
4. "Bad hands don't lose the puck. Looking down does." (Sightline cone.)
5. "Crossovers aren't for turning. They're for speed." (Top-down arc and edge lines.) McDavid.
6. "Gretzky wasn't the fastest. He stood where the puck was going." (Top-down positioning.) **2+ bodies.**
7. "Your stride isn't short. Your recovery is high." (Foot-height bar.)
8. "Snipers don't aim at the net. They aim at where the goalie can't move." (Angle from the shooter.) **Puck + goalie.**
9. "Slow starts aren't about legs. Your first three steps are too long." (Step-length bars.)
10. "Backward skating isn't hard. Your hips are square." (Hip-angle line.)

**Props/rigs:** skates (a new **glide** locomotion cycle; the boxing rig steps, it doesn't glide), stick
(a two-hand IK attachment), puck, rink lines and boards (top-down), and a goal net. This is the most
new rig work of the four sports.

## 5. Handles (controls: `zqxjvbkw9271qq` → 10221, `tiktok` → exists)
| Handle | Result |
|---|---|
| @stridegeometry | free (10221) |
| @hockeyangles | free (10221) |
| @edgeiq.hockey | free (10221) |

## 6. Score
| Factor | Score | Why |
|---|---|---|
| Demand (×4) | 4 | Three verified accounts at about 1M; no hashtag or participation data |
| Format gap (×4) | 4 | No animated account found; capped by the search limits |
| Geometry fit (×3) | 3 | Stride angles and positioning are drawable; shooting is stick + puck |
| Name pull (×2) | 4 | McDavid, Gretzky and Ovechkin are searchable and carry verifiable records |
| WTP (×3) | 4 | Coach Jeremy sells training; expensive sport (estimate) |
| Reuse (×2) | 2 | Glide locomotion, stick IK, rink |
| Risk (×2) | 4 | No footage needed; avoid NHL logos and jerseys; contact-sport injury advice is limited |
| **Total** | **73** | 16+16+9+8+12+4+8 |
