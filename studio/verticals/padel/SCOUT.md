# Padel — vertical scout

**Verdict: MAYBE (62/100). Saturation: CONTESTED.** @padel.geometry already runs the exact idea ("Padel
explained with lines & angles"), but it is small: 2,948 followers. Demand is real and growing fast in the UK.
Two things hold padel back. Star names barely pull outside Spain and Argentina, which weakens the
famous-athlete chapter. And the signature skill (wall play) needs ball-off-glass physics plus four bodies,
which is costly for our engine.

Checked 2026-10-27 with plain `curl` of public TikTok profiles (`webapp.user-detail`), oEmbed, WebSearch and
direct page fetches. Controls on every handle batch: random handles (`zqxw8vbn3kq1`, `xq7vplm2zk0w`) → 10221;
`khaby.lame` and `patrickmouratoglou` → found.

## 1. Saturation — does the format already exist?

**Searches run (5 padel queries, short of the 8 the brief asks for):** `site:tiktok.com padel animation
positioning tips`; "padel animation studio tiktok … why players move together"; "padel tactics animated
videos instagram youtube channel 3D animation"; "tiktok padel táctica animación cuenta vídeos animados
posicionamiento"; "tennis tactics 2D animation tiktok …", which also returned padel. A sixth
(`"padel.geometry" OR "Padel Geometry" tiktok`) was refused because the shared web-search budget for this turn
ran out. **Gap:** to make up for it, I probed 10+ likely padel handles directly on TikTok (below). A
follow-up pass with fresh search budget should add 3+ queries, especially Spanish-language and Instagram.

**Accounts found**

| Handle | Followers | Likes | Videos | Bio | App plug? | Format evidence |
|---|---|---|---|---|---|---|
| @padel.geometry | 2,948 | 43,067 | 38 | "Padel explained with lines & angles 📐 One fix a day. Win the point first. 🎾" | No | Bio states the format [verified-fetch]. Search summary said it posts a "slide with your partner" tactic and offers animations for brands [snippet]. Visual style: [unverified]. |
| @padeuxpadel (PADEUX) | 113,307 | 6,043,199 | 3,643 | "✨ Join the VIP Waiting List \| Edition One Drop 👇🏼" → padeux.com | Waitlist, apparently for an apparel drop [unverified] | A positioning video ("You're defending the wrong space!") has 255,200 plays, 5,149 likes, 880 saves, 4,095 shares: https://www.tiktok.com/@padeuxpadel/video/7653359923543149846 [verified-fetch]. Whether it is animated: [unverified]. |
| @thepadelschool | 148,174 | 1,987,103 | 2,331 | "Play your best padel / START HERE" → thepadelschool.com | Own coaching site/app | Real-footage coaching [snippet]; app "The Padel School" 3.5★ / 4 ratings (below) |
| @padelshopcom | 25,471 | 509,003 | 425 | "YOUR BEST TEAMMATE🔥🎾 The specialist in Padel" | Shop | Real-footage tips [snippet] |
| @kuketpadel86 | 19,123 | 1,242,862 | 1,889 | "Los mejores puntos…" | No | Highlights; one video titled "Dibujos Animados de Padel: El Mejor Punto" [snippet]. Not a technique explainer. |
| @padeliq | 1 | 8 | 2 | "Padel tactics, made simple 🎾 One smart tip a day." | No | New/dormant [verified-fetch] |
| @betapadellab | 0 | 0 | 2 | "Nos gusta el padel" | No | A GitHub repo describes 3D animated padel reels under this name [snippet]; the TikTok is empty [verified-fetch] |

Profile source: `https://www.tiktok.com/@<handle>` [verified-fetch]. Handles probed and not existing (10221):
`animatedpadel`, `padel.animated`, `padelanimated`, `betapadel_lab`.

Also seen: open-source projects building padel tactic-video templates (top-down court, player tokens,
arrows) "for TikTok": https://github.com/edubusluc/zyra-videos/pull/16 [snippet]. The idea is in the air.

**Classification: CONTESTED.** Strongest format incumbent: **@padel.geometry, 2,948 followers, 43,067 likes,
38 videos** [verified-fetch]. The large padel accounts (The Padel School 148k, PADEUX 113k) are
real-footage coaching or brand accounts, as far as found, so they compete for attention, not for this format.
Note that @tennis.geometry and @golf.geometry share the bio pattern; one operator is likely [unverified].

## 2. Demand
- **Hashtag reach:** `tiktok.com/tag/{padel,padeltips,padeltraining}` contain **no `webapp.challenge-detail`**
  when fetched plainly. Not present [verified-fetch].
- **Engagement proxy:** a single padel positioning tip reached 255,200 plays with an 0.34% save rate
  (880 / 255,200) [verified-fetch; arithmetic is an estimate].
- **Participation:**
  - Britain: the LTA padel site reports a "record 1.5 million people playing padel in Britain" (World Padel
    Day article, URL dated October 2026): https://www.ltapadel.org.uk/ [verified-fetch]. Wikipedia cites a
    Guardian figure (25 Mar 2026) of 860,000+ people playing at least once, at 1,553 courts / 559 venues
    [verified-fetch of Wikipedia; the Guardian page was not fetchable]. The two figures use different dates and
    definitions.
  - UK growth: about 90,000 players in 2023, per the LTA via the FT, cited on Wikipedia:
    https://en.wikipedia.org/wiki/Padel [verified-fetch of Wikipedia]. That would be roughly 10–17× in 2–3 years
    (estimate: 0.86M–1.5M ÷ 0.09M).
  - Global: 35M+ players in 150+ countries (FIP World Padel Report 2025, cited on Wikipedia) [verified-fetch of
    Wikipedia; FIP original unverified]. Spain 6M+ (Statista via Wikipedia) [same].

## 3. App market (willingness to pay)
Source: Apple catalog lookup `https://itunes.apple.com/search?term=padel+coach&entity=software&country=us`
and `term=padel` [verified-fetch]. IAP prices not captured.

| App | Model | Rating | Ratings | Note |
|---|---|---|---|---|
| Playtomic – Padel & pickleball (id1242321076) | Free | 4.85 | 13,966 | Court booking, not training. Owns the player relationship. |
| Padelio (Pickleball/padel tracker) | Free + IAP | 4.75 | 773 | Score/stat tracking |
| Padel Mates | Free | 4.72 | 447 | Social/matchmaking |
| Padel Chess: Tactics Trainer | Free + IAP | 4.94 | 16 | Closest to our concept: interactive positioning puzzles |
| The Padel School | Free + IAP | 3.5 | 4 | The biggest padel TikTok coach has a near-unrated app |
| PadelShot AI, Padlo, PadelUp, Linceya, Padel Coach | Free | 0–5 | 0–6 each | Brand-new AI-coach long tail |

Read: **no padel training app has traction** (the best coaching app has 16 ratings). That is a gap, but also a
warning: paid demand for padel coaching apps is unproven. Spending is on courts and kit. Revenue/funding: not
found this pass.

## 4. Format fit — 10 hooks
Pattern: "[Belief] doesn't lose you the point. [Real mistake] does." Player facts are [unverified] for the
fact-checker. Name pull is weak, so the hook often has to carry the video alone.

| # | Hook | Star | Geometry device | Ball physics / >2 bodies? |
|---|---|---|---|---|
| 1 | "Your partner doesn't leave the gap. You both standing still does." | Tapia & Coello | Top-down "rope" between partners, middle gap | 4 bodies |
| 2 | "The glass isn't your enemy. Turning to chase the ball is." | Galán | Top-down: ball path off back glass, player stays side-on | Ball off glass; >2 bodies |
| 3 | "Smashing harder doesn't win the point. Smashing from the wrong spot does lose it." | Lebrón | Side-view: contact height vs net distance | Ball arc |
| 4 | "You don't lose the net to power. You lose it by not following your lob in." | Coello | Top-down two-step advance, partners together | 4 bodies, lob arc |
| 5 | "Big swings don't beat good teams. A low ball at their feet does." | Tapia | Side-view: ball height window over the net | Ball arc |
| 6 | "Standing on the service line doesn't protect you. Standing two metres back does." | Galán | Top-down distance from net | No (zones only) |
| 7 | "Down the line isn't brave. It opens the middle." | Tapia | Top-down angle of cross vs line, middle gap | 4 bodies |
| 8 | "Lunging doesn't save the ball off the glass. Small steps do." | Sanyo Gutiérrez (fame: low) | Step-count timing bar | Ball off glass |
| 9 | "Your return isn't short. Your contact point is late." | Coello | Top-down contact zone | Ball |
| 10 | "Tennis players don't struggle in padel because of the racket. They struggle because they swing too big." | Andy Murray (links padel and tennis) | Side-view swing-arc length | 1 body |

Best 3: #1 (partner gap, top-down, our geometry view does it), #6 (net distance, no ball physics), #10
(tennis converts, a big UK cohort). 7 of 10 need ball physics and/or four bodies.

**Props and rigs needed:** solid padel bat, ball, net, court lines, **glass back and side walls plus mesh**,
4 mannequins (2 colourways), ball-off-wall bounce path, top-down court view, smash/bandeja/vibora poses.

## 5. Handles (10221 method, controls above)
| Handle | Result |
|---|---|
| @padelblueprint | FREE (10221) |
| @glassgamepadel | FREE (10221) |
| @thewallplay | FREE (10221) |
| (rejected) @padelframe | TAKEN, 0 followers, 0 videos |
| (avoid) "*geometry*", "*iq*" | incumbent / squatted |

## 6. Score
| Factor | Score | Why |
|---|---|---|
| Demand (×4) | 4 | UK 0.86M–1.5M players, steep growth; 100k+ coaching accounts |
| Format gap (×4) | 3 | @padel.geometry is the same idea at 2.9k |
| Geometry fit (×3) | 3 | Positioning is drawable top-down, but 4 bodies; wall play needs ball physics |
| Name pull (×2) | 2 | Tapia/Coello/Galán are niche outside Spain/Argentina; Wikipedia's padel article names no current pros |
| WTP (×3) | 3 | Affluent players, but no training app with traction |
| Reuse (×2) | 2 | Glass walls, 4 bodies, bounce paths, new poses |
| Risk (×2) | 4 | No footage needed; low injury-advice risk |
| **Total** | **62** | 16+12+9+4+9+4+8 |

**Case in one line:** a fast-growing UK audience and an open app market, but weak star pull, a costly
4-body/wall engine and an existing small clone. Revisit after tennis, reusing its racket rig.


## Update 2026-10-27 (lead): multi-sport '.geometry' operator
Plain-curl checks [verified-fetch]: @tennis.geometry 4,267 followers / 28 videos; @padel.geometry 2,948 / 38; @golf.geometry 678 / 30; @running.geometry 0 / 3. They share one bio pattern ("<Sport>, explained with angles", "One fix a day"), so this is likely one operator expanding sport by sport. Not found (10221): basketball, hoops, football, soccer, boxing, mma, pickleball, cricket, rugby, muaythai, badminton, hockey. 
