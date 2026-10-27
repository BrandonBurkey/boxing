# Pickleball — vertical scout

**Verdict: MAYBE (71/100). Saturation: OPEN, as far as found.** No TikTok account doing faceless animated
pickleball technique was found, and every likely handle I probed is empty or unused. Demand is very large
in the US (24.3M players in 2025). The kitchen and dink game is mostly zone geometry, which suits our
top-down view. What holds it back: pro names have little pull outside the core, which weakens the
famous-athlete chapter, and evidence of willingness to pay for apps is modest. It has the best format gap
of the three sports. Search coverage was thin (see below), so treat "OPEN" as provisional.

Checked 2026-10-27 with plain `curl` of public TikTok profiles (`webapp.user-detail`), oEmbed, WebSearch and
direct page fetches. Controls on every handle batch: random handles (`zqxw8vbn3kq1`, `xq7vplm2zk0w`) → 10221;
`khaby.lame` and `patrickmouratoglou` → found.

## 1. Saturation — does the format already exist?

**Searches run (4 pickleball queries, short of the 8 the brief asks for):** `site:tiktok.com pickleball animation
strategy kitchen dink`; "pickleball animated strategy videos youtube channel animations kitchen positioning
2D"; `"pickleball" animated tiktok account "animation" tips viral faceless`; `"animated pickleball" tiktok OR
instagram OR youtube`. The split-step query (tennis) also surfaced pickleball material. The shared
web-search budget for this turn then ran out. **Gap:** to compensate, I probed 10 likely handles directly
(below). A follow-up pass should run 4+ more queries, for example "pickleball IQ animation", "pickleball
stick figure", "Ben Johns explained animation", "pickleball training app waitlist tiktok".

**Accounts found**

| Handle | Followers | Likes | Videos | Bio | App plug? | Format |
|---|---|---|---|---|---|---|
| @tanner.pickleball | 77,820 | 1,453,647 | 1,150 | "⏱️ PRO pickleball tips in under 60 seconds 🥇 Learn what ACTUALLY wins matches ⬇️ Free Newsletter" | Newsletter | Real-footage tips (kitchen strategy, dinks, 3rd-shot drop) [snippet]. Not animated, as far as found. |
| @eddiegonzalez.pb | 22,322 | 116,952 | 106 | "the only pickleball account you need / DM for coaching" | Coaching DMs | Real footage; a topspin-dink video with 114.1K likes [snippet] |
| @allthingspickleball | 17,387 | 262,643 | 759 | "Pickleball Content Creator… Shop Pickleball Pajamas" | Merch | Real footage, drills |
| @pickleballiq | 139 | 65 | 3 | (empty) | No | Dormant |
| @pickleball.iq | 2 | 0 | 2 | "Daily Pickleball Trivia 🏓" | No | Dormant |
| @puntopickle | 758 | 5,558 | 15 | "PuntoPickle.com" | Site | Spanish explainer ("¿Qué es un dink?") [snippet] |

Profile source: `https://www.tiktok.com/@<handle>` [verified-fetch]. Probed and **not existing (10221)**:
`pickleball.geometry`, `pickleballgeometry`, `animatedpickleball`, `pickleball.animated`, `pickleballanimated`,
`kitchen.geometry`, `dinkgeometry`, `mypickleballconnect`. The "<sport>.geometry" operator that runs tennis,
padel and golf has **not** taken pickleball [verified-fetch]. They could at any time.

**Off-TikTok animated pickleball:**
- My Pickleball Connect runs a "Pickleball IQ · Animated breakdown" series of 60-second, top-down animated
  lessons (kitchen rule, ready position, split step): https://www.mypickleballconnect.com/iq/kitchen-rule/
  [snippet]. The page returned **HTTP 429 / a Vercel security checkpoint** to plain requests, so I could not
  confirm whether it has a TikTok account. No TikTok under `@mypickleballconnect` [verified-fetch].
- "Prickled", an animated pickleball sitcom on YouTube (comedy, not technique):
  https://pickleball.com/culture/pickleballs-first-animated-sitcom-prickled-premieres-on-youtube [snippet].
- Pickleheads hosts learn-to-play videos (positioning, kitchen):
  https://www.pickleheads.com/learn-to-play-pickleball/watch/positioning [snippet]. Style not checked.

**Classification: OPEN (provisional).** No faceless animated technique account found on TikTok. The strongest
pickleball tips account overall is **@tanner.pickleball: 77,820 followers, 1,453,647 likes, 1,150 videos**
[verified-fetch]. It uses real footage, so it competes for attention, not on format. The closest format
competitor is a website (My Pickleball Connect), not a TikTok account.

## 2. Demand
- **Hashtag reach:** `tiktok.com/tag/{pickleball,pickleballtips,pickleballtiktok,pickleballstrategy}` contain
  **no `webapp.challenge-detail`** when fetched plainly. Not present [verified-fetch].
- **Participation (US):** 24.3M Americans played in 2025, of whom 7.48M were "core" (8+ times a year), up 22.8%
  year on year, per SFIA's 2026 Topline Participation Report:
  https://www.thedinkpickleball.com/report-24-million-americans-are-now-playing-pickleball-up-171-in-just-3-years/
  [verified-fetch of The Dink's report; the SFIA original was not opened]. 13.6M in 2023 (SFIA, via Wikipedia):
  https://en.wikipedia.org/wiki/Pickleball [verified-fetch of Wikipedia].
- UK/Europe participation: not found this pass. Treat pickleball as a US play.
- Demographics: none given in the SFIA summary [verified-fetch]. That the audience is older and affluent is
  [unverified].

## 3. App market (willingness to pay)
Source: Apple catalog lookup `https://itunes.apple.com/search?term=pickleball+training&entity=software&country=us`
and `term=pickleball` [verified-fetch]. IAP prices not captured.

| App | Model | Rating | Ratings | Note |
|---|---|---|---|---|
| Pickleheads – Play Pickleball | Free | 4.87 | 11,082 | Court finder/community |
| SwingVision: Tennis Pickleball | Free + IAP | 4.71 | 4,973 | AI video analysis; covers pickleball |
| DUPR | Free | 4.12 | 3,941 | Rating system |
| Pickleball+ | Free + IAP | 4.72 | 3,065 | Scoring/tracking |
| Pickleball Drills (Pickleball Playbook LLC) | Free + IAP | 4.81 | 311 | Closest to "learn technique on your phone" |
| PB Vision | Free + IAP | 4.69 | 141 | AI video analysis |
| Pickleball Strategy 3.5+ Guide | Free + IAP | 4.70 | 44 | Strategy content, our niche |
| Effective Pickleball Training | Free + IAP | 3.94 | 33 | Training plans |

Read: the big apps are community and rating tools. Training-content apps are small (311 ratings at most). No
cheap, loved incumbent owns "learn pickleball strategy on your phone". Revenue/funding: not found this pass.

## 4. Format fit — 10 hooks
Pattern: "[Belief] doesn't lose you the point. [Real mistake] does." Rule facts (for example, a 7-ft
non-volley zone) and player facts are [unverified] here and go to the fact-checker.

| # | Hook | Star | Geometry device | Ball physics / >2 bodies? |
|---|---|---|---|---|
| 1 | "Soft hands don't win the dink battle. Dinking to the front of the kitchen loses it." | Ben Johns | Top-down kitchen split into front/back halves, target zone | Short dink arc |
| 2 | "You're not too slow to reach the kitchen. You're rushing in and getting caught mid-court." | Anna Leigh Waters | Top-down "transition zone" with a timing bar | 2 bodies |
| 3 | "Your third shot isn't too soft. It's landing in the wrong half of the kitchen." | Ben Johns | Side view: drop arc apex vs net | Ball arc |
| 4 | "Popping up the dink isn't your paddle. It's standing up through the shot." | Anna Leigh Waters | Side-view knee/hip angle | Short arc |
| 5 | "Hard drives don't beat you at the line. A high paddle ready position does." | Ben Johns | Side-view paddle height line | No |
| 6 | "Your partner isn't leaving the middle open. You're both chasing the ball." | Johns brothers | Top-down "shift together" lines, 4 bodies | 4 bodies |
| 7 | "Getting lobbed isn't bad luck. Standing on your toes at the line is." | Ben Johns | Side view: weight-distribution bar | Lob arc |
| 8 | "Speed-ups don't come from wrist. They come from a ball above net height." | Anna Leigh Waters | Side view: net-height line vs contact | Ball |
| 9 | "Kitchen faults aren't clumsy feet. Your momentum is." | Ben Johns | Side-view momentum arrow over the line | No |
| 10 | "Tennis players don't lose at pickleball for lack of power. They lose by staying back." | Ben Johns (also a tennis-to-pickleball story, [unverified]) | Top-down baseline vs kitchen distance | 2 bodies |

Best 3: #1 (kitchen depth, top-down zones), #9 (kitchen momentum fault, 1 body, no ball), #2 (transition
zone). Mostly 1–2 bodies plus zones. Ball arcs are short and simple. Name pull is the weak link: Ben Johns
is named on Wikipedia's pickleball page [verified-fetch]; Anna Leigh Waters is [unverified] in this pass.

**Props and rigs needed:** paddle, perforated ball, low net, court lines with the **kitchen (non-volley zone)
shaded**, top-down court view, dink/ready-position/drop poses, 4 mannequins for doubles (2 colourways), and a
short ball-arc helper.

## 5. Handles (10221 method, controls above)
| Handle | Result |
|---|---|
| @kitchenlinelab | FREE (10221) |
| @dinkblueprint | FREE (10221) |
| @pickleblueprint | FREE (10221) |
| (rejected) @kitchenframe | TAKEN — 53 followers, 82 videos |
| (avoid) @pickleballiq, @pickleball.iq | taken (dormant) |

## 6. Score
| Factor | Score | Why |
|---|---|---|
| Demand (×4) | 4 | 24.3M US players; 78k-follower tips account; hashtag counts not readable |
| Format gap (×4) | 4 | No TikTok incumbent found; provisional because search was thin |
| Geometry fit (×3) | 4 | Kitchen zones, depth and paddle height are top-down/side-view geometry with short arcs |
| Name pull (×2) | 2 | Ben Johns / Anna Leigh Waters are known to the core, not to the mass audience |
| WTP (×3) | 3 | Training apps exist but small (≤311 ratings); big apps are community/rating tools |
| Reuse (×2) | 3 | Paddle, ball, net, kitchen lines; 4 bodies for doubles |
| Risk (×2) | 4 | No footage needed; some injury-advice care for an older audience |
| **Total** | **71** | 16+16+12+4+9+6+8 |

**Case in one line:** the widest-open format gap and a huge US audience. The weak star pull means hooks must
carry the video. Run 4+ more saturation queries before committing.
