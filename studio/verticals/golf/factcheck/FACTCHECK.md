# Golf fact-check: gf-v01, gf-v02, gf-v03

Checked 2026-10-27 against the shipping fields in the JSON (`vo`, overlay `text` / `label` / chip `items`, `caption`).
The scripts were not edited. Every change below is a proposed replacement for the script author.

**Result: all three FAIL as written. Each one PASSES once the listed replacements are applied.** Most of the
facts check out. What fails is a few lines worded more absolutely than the sources support, plus one contested cue
("low and slow").

Levels: `[verified-fetch]` = I opened the page and read the quoted text. `[snippet]` = search result only.
"Scenario" = a line describing the viewer's own fault ("your arms fold"). It is a teaching set-up rather than a factual claim,
and it is listed so nothing is skipped.

## Key sources

| # | Source | Level |
|---|---|---|
| S1 | PGA TOUR player profile, Rory McIlroy. Height widget reads `5'10"`, label "Height". https://www.pgatour.com/player/28237/rory-mcilroy | [verified-fetch] (curl, 2026-10-27) |
| S2 | PGA TOUR, 9 Mar 2024: "Last year, McIlroy led the PGA TOUR with an average Driving Distance of 326.3 yards." https://www.pgatour.com/article/news/latest/2024/03/09/rory-mcilroy-becomes-first-player-to-drive-bay-hills-10th-green-arnold-palmer-invitational | [verified-fetch] |
| S3 | GolfMagic, updated 31 Aug 2023: McIlroy No.1, 326.3 yds, "2022-23 season". https://www.golfmagic.com/pga-tour/rory-mcilroy-crushes-bryson-dechambeau-record-pga-tour | [verified-fetch] |
| S4 | Golf Compendium, leaders by year: "2023 — Rory McIlroy, 326.3". https://golfcompendium.com/2018/11/pga-tour-driving-distance-leaders.html | [verified-fetch] |
| S5 | Golf Monthly, Top 25 coach Clive Tucker, 13 Jul 2018: "great driver swings are consistently wide in 'shape' back and through", "He maintains that wide look – his left arm is long", "maintain his wide swing for longer". https://www.golfmonthly.com/tips/rory-mcilroy-driver-swing-keys-160193 | [verified-fetch] (curl) |
| S6 | GOLF.com, Mark Immelman, 30 Sep 2020: "the bigger (wider) the arc around which the clubhead travels", the farther the ball goes; "an uptick in power". https://golf.com/?p=15418968 | [verified-fetch] |
| S7 | Caddie blog (Spencer Lanoue), 2 Nov 2025: "the goal isn't a locked, rigid, or tense lead arm"; width gives "more time and space" to build clubhead speed. https://www.caddiehq.com/resources/how-to-keep-lead-arm-straight-in-golf-swing | [verified-fetch] (lower-tier source) |
| S8 | GOLF.com, Mark Hackett, 4 Sep 2019: "keeping the clubhead low to the ground" in the takeaway. https://golf.com/instruction/approach-shots/low-and-slow-takeaway-golf-tip/ | [verified-fetch] |
| S9 | Golf Digest, Jon Rahm cover story: "Forget low and slow". Argues against the slow takeaway. https://www.golfdigest.com/story/jon-rahm-forget-low-and-slow-snatch-it-back-instruction-cover-story | [snippet] (403 on fetch) |
| S10 | Sports Illustrated, 2021: *Five Lessons* serialised in SI from 11 Mar 1957, published 1957 by A.S. Barnes, illustrated by Anthony Ravielli. https://www.si.com/golf/travel/feature-2021-05-31-ben-hogans-5-lessons-endures-time-technology-scrutiny | [verified-fetch] |
| S11 | Kwon & Casebolt, "Kinematic analysis of sports movements: golf swing plane analysis", ISBS proceedings (Texas Woman's University). Hogan & Wind (1957) visualised the backswing plane "as a large pane of glass that rests on the shoulders and inclines upward from the ball". The "downswing plane is less steeply inclined than the backswing plane". https://ojs.ub.uni-konstanz.de/cpa/article/view/3041/2848 | [verified-fetch] (PDF text extracted) |
| S12 | Coach Ortiz, notes on *Five Lessons* ch. 4: "If the arms thrust up above the plane, so that they would shatter the glass, we headed for disaster." https://sites.google.com/site/coachortizpe/home/blog/benhogansfivelessons04thefirstpartoftheswingnotes | [verified-fetch] (secondary notes on the book) |
| S13 | TrackMan, "Face to Path": a positive face-to-path is "open" to the path, and the ball "should curve towards the face angle and away from the club path". https://www.trackman.com/blog/golf/face-to-path | [verified-fetch] |
| S14 | TrackMan, "6 numbers all amateur golfers should know": "If you hit a fade or a slice, one of the reasons could be that you are swinging out to in". The face "will dictate the ball's start direction" in most cases. https://www.trackman.com/blog/golf/6-trackman-numbers-all-amateur-golfers-should-know | [verified-fetch] |
| S15 | Skillest (Brian Park), 14 Jun 2026: the club "goes 'over the top' of the swing plane on the way down rather than dropping underneath it". Slice = path left with the face open to it, so the ball starts "left of target or at it, then curves hard right". Fix: "Feel your right elbow drop toward your right hip". https://skillest.com/blog/over-the-top-golf-swing/ | [verified-fetch] |
| S16 | American Golf (Martin Vousden), 17 Nov 2022: the over-the-top move is "probably the single greatest cause" of a slice, starting down with shoulders and arms throws the club over the top, aiming left "exacerbates the problem rather than fixes it", and the goal is "attacking the ball from the inside". https://blog.americangolf.co.uk/how-to-fix-a-slice/ | [verified-fetch] |
| S17 | GOLF.com / GOLFTEC (Josh Troyer), 17 Jun 2025: "A slice typically occurs when an out-to-in swing path meets an open clubface"; slicers "try to aim left because they lose the ball to the right". https://golf.com/instruction/two-reasons-golfers-slice-ball-golftec/ | [verified-fetch] |
| S18 | Golf Digest, Leadbetter 2009: drop the right elbow into the "slot" on the downswing. https://www.golfdigest.com/story/leadbetter-2009-01 | [snippet] |
| S19 | Wikipedia, Scottie Scheffler: Masters wins 2022 and 2024. Solo 4th in 2025, solo 2nd in 2026 one behind McIlroy. "Scheffler shuffle": "a pronounced sliding motion in his back foot and a rolling of the lead ankle through impact", "a product of using ground reaction forces". https://en.wikipedia.org/wiki/Scottie_Scheffler | [verified-fetch] |
| S20 | GOLF.com, Joe Plecker (Top 100), 18 Apr 2024: "Shifting forward — and torque — creates the foot slide", "moving pressure from his right foot into his left foot". https://golf.com/instruction/scottie-scheffler-crazy-footwork-explained/ | [verified-fetch] |
| S21 | Todd Anderson (PGA TOUR Performance Center) via Korea JoongAng Daily, 7 Mar 2024: "he uses his feet to push off the ground to create force"; "I would not try and copy his footwork". https://www.koreajoongangdaily.com/sports/todd-anderson-tutorial-breaking-down-scottie-schefflers-fancy-footwork/12378768 | [verified-fetch] |
| S22 | GolfMagic (John Hoskison): "see if you can hold the finish position for a count of '1...2...3 seconds'". https://golfmagic.com/instruction/driving/hold-your-finish-for-a-controlled-swing/14926 | [verified-fetch] |
| S23 | GOLF.com, Gia Liwski, 4 Feb 2023: "finish on top of your lead leg stacked … head on top of the shoulders on top of your hips … Nice and balanced". Start with a small swing. https://golf.com/instruction/how-to-finish-balanced-in-golf-swing-gia-liwski/ | [verified-fetch] |
| S24 | Golf Distillery: "95% of your weight should be on your left foot … your right foot is only touching the ground with the tip toe". https://www.golfdistillery.com/golf-tips/swing/follow-through/ | [verified-fetch] (curl) |
| S25 | Golf Digest (Watson tip): "If you lose your balance, you're probably swinging too fast. Slow down until you can hold your finish." https://www.golfdigest.com/story/watson-2008-12 | [snippet] (403 on fetch and curl) |
| S26 | GOLF.com, Dana Dahlquist, 18 Jul 2023: players "struggle getting, not only to their left side, but let alone holding their finish". https://golf.com/instruction/drill-improves-golf-swing-balance/ | [verified-fetch] |
| S27 | Jonathan Yarwood (via search summary): the Scheffler footwork "can put stress on your ankle joints". | [snippet] (page not opened) |

---------------------------------------------------------------------------------------------------
## gf-v01-short-arc (McIlroy)

| Beat · field | Claim | Verdict | Source | Level | Replacement wording |
|---|---|---|---|---|---|
| b01 vo | "Short golfers don't lose distance." | **Unsupported absolute.** Nothing found says height never matters. The script's own notes admit it overstates. | — | [unverified] | "Short golfers can still hit it *far*." (backed by b09–b10: listed 5'10", No.1 in distance) |
| b02 vo | "A short arc does." | Partly supported: a wider arc means more distance (S6). Reword so it pairs with the new b01. | S6 | [verified-fetch] | "A short *arc* costs you distance." |
| b02 label | "SHORT ARC" | OK (illustration). | — | — | keep |
| b03–b05 vo + "ARMS FOLD", "TIGHT", "HARDER?" | Fault scenario | Scenario, not a factual claim. Consistent with S6 (the trail arm sets backswing width). | S6 | [verified-fetch] | keep |
| b06 vo + "SMALL CIRCLE" | Small circle → less runway | Supported as a coaching principle. | S6, S7 | [verified-fetch] | keep |
| b07 vo + chips "LESS RUNWAY / LESS SPEED" | Less runway → less speed | Supported as a coaching principle (S7 is the speed wording; S6 says "power"). No number claimed. | S6, S7 | [verified-fetch] | keep |
| b08 vo | Swinging harder won't widen the circle | Teaching logic, not a fact. OK. | — | — | keep |
| b09 vo, overlays "RORY McILROY", "5'10\"" | Listed at 5'10" | **Verified.** The PGA TOUR profile Height widget shows 5'10". Secondary sites say 5'9", which is why "listed at" is correct. | S1 | [verified-fetch] | keep |
| b09 "TALLER GOLFER" | Grey comparison figure | No identity or height claimed. OK. | — | — | keep |
| b10 vo + typer "PGA TOUR DRIVING DISTANCE · NO.1 · 2023" | Led the PGA Tour in driving distance in 2023 | **Verified.** No.1, 326.3 yds, 2022-23 season (which the Tour labels 2023). | S2, S3, S4 | [verified-fetch] | keep |
| b11 vo + "WIDE ARC" | His arms stay long going back | **Verified.** "his left arm is long", "extension in the takeaway". | S5 | [verified-fetch] | keep |
| b12 vo + chips "WIDE BACK / WIDE THROUGH" | Wide back, wide through | **Verified.** "consistently wide in 'shape' back and through". | S5 | [verified-fetch] | keep |
| b13 vo (plug) | App opens each drill with a checkpoint | Matches MVP feature #3. Placed after the McIlroy section, so see the endorsement flag. | MVP.md | — | keep |
| b14 vo + label "LOW AND SLOW" | "low and slow" takeaway | **Contested.** "Low" is supported (S8) and width is supported (S5). "Slow" is disputed by Golf Digest's Rahm piece (S9). | S8, S5 / S9 | [verified-fetch] / [snippet] | VO: "Start the club *low and wide* away from the ball." Label: "LOW AND WIDE" |
| b15 vo + "LONG, NOT LOCKED" | Lead arm long, not locked | Supported. "Not locked" is a lower-tier source. | S5, S7 | [verified-fetch] | keep |
| b16 vo + "EXTEND" | Arms extend after the ball | Supported ("maintain his wide swing for longer", wide through). | S5 | [verified-fetch] | keep |
| b17–b18 vo | Can't change height, can change arc | Teaching line. OK. | — | — | keep |
| caption | "listed at 5'10\", No.1 in PGA Tour driving distance in 2023" | Verified. Add a no-affiliation line (endorsement flag). | S1, S2 | [verified-fetch] | append " Not affiliated with Rory McIlroy or the PGA TOUR." before the hashtags |

**gf-v01: FAIL as written** (b01 is unsupported; the b14 cue is contested). **PASS** with the b01, b02, b14 and caption changes.

---------------------------------------------------------------------------------------------------
## gf-v02-pane-of-glass (Hogan)

| Beat · field | Claim | Verdict | Source | Level | Replacement wording |
|---|---|---|---|---|---|
| b01–b02 vo + "OVER THE TOP" | Not always grip; often downswing | Supported. Over the top is "probably the single greatest cause". The hedge is correct. | S16, S15, S17 | [verified-fetch] | keep |
| b03 vo + "SLICE", "RIGHT-HANDED GOLFER" | "starts left, then curves hard right" | **Incomplete.** An out-to-in slice starts "left of target or at it". Start direction follows the face. | S15, S14 | [verified-fetch] | "The ball starts left or straight, then curves hard *right*." |
| b04 vo + "AIM LEFT" | Slicers aim left to allow for it | Verified as behaviour. The implied "it makes it worse" is also verified (S16). | S17, S16 | [verified-fetch] | keep |
| b05 vo + "SWING PLANE" | Watch the downswing | Instruction. OK. | — | — | keep |
| b06 vo + "OUT", "OVER THE TOP" | "Your hands get thrown out toward the ball" | **Not found as stated.** Sources blame the shoulders and arms throwing the club out. | S15, S16 | [verified-fetch] | "Your shoulders throw the club out toward the *ball*." |
| b07 vo + "ABOVE THE PLANE" | Comes down above the backswing line | **Verified.** Over the plane "rather than dropping underneath it". | S15 | [verified-fetch] | keep |
| b08 vo + "OUT TO IN" | Cuts across, out to in | Verified. | S15, S14 | [verified-fetch] | keep |
| b09 vo + "SLICE" | Face open to path → slice | **Verified** (TrackMan face-to-path). | S13, S17 | [verified-fetch] | keep |
| b10 vo + "BEN HOGAN", typer "FIVE LESSONS · 1957" | Hogan's book, 1957 | **Verified.** "Book pictured" is right: Ravielli drew it, and it was co-written with Herbert Warren Wind. | S10, S11 | [verified-fetch] | keep |
| b11 vo + "PANE OF GLASS" | Tilted pane of glass | Verified. | S11 | [verified-fetch] | keep |
| b12 vo | Resting on your shoulders, down to the ball | **Verified:** "rests on the shoulders and inclines upward from the ball". | S11, S12 | [verified-fetch] | keep |
| b13 vo + "DON'T BREAK THE GLASS" | Swing under it, never break it | Supported. Hogan warns against arms that "shatter the glass", and his downswing plane is less steep (sits under the glass). Strictly, his warning is about the backswing arms. The VO generalises it fairly. | S12, S11 | [verified-fetch] | keep |
| b14 vo (plug) | "shows you the plane before every drill" | Slight overreach. MVP #3 opens each drill with the checkpoint for *that* drill, and only plane drills show the plane. | MVP.md | — | "Staying under it takes practice — the app I'm building shows you the plane before each slice drill — so try this." |
| b15 vo + "ELBOW DOWN" | "let your trail elbow drop *first*" | The elbow drop is supported. "First" conflicts with coaches who start the downswing with the lower body (S15 says the same). | S15, S18 | [verified-fetch] / [snippet] | "From the top, let your trail elbow drop toward your *hip*." |
| b16 vo + chips "DOWN / NOT OUT", "UNDER THE GLASS" | Hands fall down, not out | Supported: drop underneath the plane, not over it. | S15, S11 | [verified-fetch] | keep |
| b17 vo + "FROM INSIDE" | Arrive from inside | Verified: "attacking the ball from the inside". | S16 | [verified-fetch] | keep |
| b18 vo | "Your slice starts at the top." | **Absolute.** It contradicts the script's own b01 hedge. Sources say "single greatest cause", not the only one. | S16 | [verified-fetch] | "Many slices start at the *top*." |
| b19 vo + "PANE OF GLASS" | Start down under the glass | Supported (downswing plane less steep). | S11 | [verified-fetch] | keep |
| caption | Five Lessons 1957; downswing causes many slices | Verified. | S10, S16 | [verified-fetch] | keep (see the Hogan brand flag below) |

**gf-v02: FAIL as written** (b03, b06, b15 and b18 overstate; the b14 plug overreaches slightly). **PASS** with those five changes.

---------------------------------------------------------------------------------------------------
## gf-v03-happy-feet (Scheffler)

| Beat · field | Claim | Verdict | Source | Level | Replacement wording |
|---|---|---|---|---|---|
| b01 vo | "Moving your feet isn't a swing fault." | **Absolute, unsupported.** Sources show it *can* work (Scheffler). None says it is never a fault. | S20, S21 | [verified-fetch] | "Moving your feet isn't always a *fault*." |
| b02 vo + "FALLING" | Losing balance is | Supported: a balanced finish is the standard check. | S22, S23, S26 | [verified-fetch] | keep |
| b03–b05 vo + "DON'T MOVE", chips "STIFF / STILL FALLING" | Fault scenario | Scenario, not a factual claim. | — | — | keep |
| b06–b07 vo + "WEIGHT?", chips "STUCK BACK / TIPPING FORWARD" | Weight ends up wrong | Supported by contrast: the target is "stacked" on the lead leg (S23). Players struggle to get to their lead side (S26). | S23, S26 | [verified-fetch] | keep |
| b08 vo + "WOBBLE" | Wobbly finish is the clue | Verified (finish hold as a balance check). | S22 | [verified-fetch] | keep |
| b09 vo + "SCOTTIE SCHEFFLER", typer "MASTERS CHAMPION · 2022 · 2024" | Feet move a lot; Masters 2022, 2024 | **Verified and not stale:** 4th in 2025, 2nd in 2026 to McIlroy. | S19 (2026 result also [snippet] from search) | [verified-fetch] | keep |
| b10 vo + "FOOT SLIDES" | Trail foot slides through | **Verified.** | S19, S20 | [verified-fetch] | keep |
| b11 vo + "PUSH" | Coaches tie it to pushing into the ground | **Verified:** "uses his feet to push off the ground to create force", plus ground reaction forces. | S21, S19, S20 | [verified-fetch] | keep |
| b12 vo + "DON'T COPY THE SLIDE" | You don't need to copy it | Verified: "I would not try and copy his footwork". | S21 | [verified-fetch] | keep |
| b13 vo (plug) | Filmed swing next to checkpoint | Matches MVP #4. | MVP.md | — | keep |
| b14 vo | Swing at three-quarter speed | Drill, consistent with "start small" and with the slow-down advice. | S23, S25 | [verified-fetch] / [snippet] | keep |
| b15 vo + chips "TALL / LEAD FOOT / TRAIL HEEL UP" | Finish tall, weight on lead foot, trail heel up | Verified ("stacked" on the lead leg; 95% on the left foot; right foot on its toe). | S23, S24 | [verified-fetch] | keep |
| b16 vo + typer "1 · 2 · 3" | Hold for three seconds | Verified as an established drill ("1...2...3 seconds"). | S22 | [verified-fetch] | keep |
| b17 vo | Slow down until you can | Supported: "Slow down until you can hold your finish". | S25 | [snippet] | keep |
| b18–b19 vo | Let feet move; hold finish | Teaching line. OK once b01 is hedged. | — | — | keep |
| caption | Feet move, try 3-second finish | OK. Add a no-affiliation line. | S19, S22 | [verified-fetch] | append " Not affiliated with Scottie Scheffler, the PGA TOUR or the Masters." before the hashtags |

**gf-v03: FAIL as written** (b01 is absolute). **PASS** with the b01 and caption changes.

---------------------------------------------------------------------------------------------------
## Flags

**Injury and medical**
- None of the scripts gives medical or injury advice. Keep it that way.
- v03: one teacher says the Scheffler slide "can put stress on your ankle joints" (S27, snippet only). The script already says "don't copy the slide", which is the safe direction. **Do not** add an injury claim such as "copying it can hurt you". It is only a snippet, and it would be health advice.
- v01: "long, not locked" is the safer cue. Do not change it to "keep your lead arm straight/locked". "Swing harder" appears only as a fault. That is fine.
- v03: the 3-second hold at three-quarter speed is low-risk.

**Endorsement and trademarks**
- Every plug comes straight after the athlete section, and v01 and v02 say "a checkpoint like this". A viewer could read that as the player's method being inside our app. Add the no-affiliation line to the v01 and v03 captions as listed above.
- "PGA TOUR" (v01 typer) and "MASTERS CHAMPION" (v03 typer) are factual uses of the names. Keep them as plain text: no logos, no green-jacket or Augusta imagery, no tour wordmark styling.
- v02: "Ben Hogan" is also a live golf-equipment brand. The use here is factual and historical. Do not pair the name with a club graphic that looks like a branded product. An optional caption line is "Not affiliated with Ben Hogan Golf."
- Apply TikTok's AI-generated-content label to all three (synthetic voice and visuals, CLAUDE.md §3).

**Housekeeping (SCRIPTS.md, not shipped)**
- The claims list says McIlroy's profile currently shows him 2nd in driving distance (2026). The pgatour.com stat page (stat 101) served on 2026-10-27 showed him tied 1st at 330.3. Nothing on screen depends on this, but don't reuse the "2nd" note.
- Claim 6 cites USGTF for "ball through the top of the shoulders". That is fine, but S11 (Kwon & Casebolt) is the stronger citation for "rests on the shoulders".
