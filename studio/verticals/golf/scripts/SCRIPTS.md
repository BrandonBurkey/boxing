# Golf scripts 01–03 (drafts, NOT fact-checked)

> **Status: draft.** The JSON files (`gf-v01-short-arc.json`, `gf-v02-pane-of-glass.json`,
> `gf-v03-happy-feet.json`) are what renders. This file is the readable version plus the claims list for the
> fact-checker. Nothing has been rendered.

Voice: second person. Short single-clause lines. Plug at 62–66% of runtime.
Timings are **estimates**: words ÷ 3.65 per second + 0.22s pad. That rate is calibrated on the boxing v01/v02
Kokoro output. `prepare.mjs` measures the real times.
`[H]` = headline text on screen. `VO` = voiceover, also shown as karaoke captions. Golfer is right-handed,
camera is down-the-line (side view, golfer facing the ball on the right). Top view: golfer at the bottom
facing right, target line running up the screen.

Engine notes for the animator:
- Club: one `held` overlay in b01 with `followPose`, `untilBeat` = last beat.
- Ball: the brief's form, `legs` with `from == to`, approximate pixels. The engine's pose test also uses
  `anchorClub: "you"`. Swap to that if it positions the ball better.
- Comparison golfer (v01 only): actor `opp`, `heightIn` 76, hidden with an `opacity: 0` move in b01, shown in
  b09, hidden again in b11.
- v02 b04 uses a top-view actor move `{"a": -12}` to turn the golfer's aim left. If `a` isn't animatable,
  drop it. The grey "AIM LEFT" path carries the idea on its own.
- `plane` is always triggered while the golfer is at `address`, because it freezes the shaft line at the moment it appears.

---------------------------------------------------------------------------------------------------
## 01 · "The Short Arc" · Rory McIlroy · distance
One idea: distance comes from the width of your arc, not your height. Keep your arms long going back and through.
Plug feature: **MVP #3 Animated checkpoints** (the arc-width checkpoint).
Estimated length **48.1s**, 18 lines. Plug starts at **30.0s (62%)**.

| ~t (s) | Chapter | VO | On screen / device |
|---|---|---|---|
| 0.0 | ■ SHORT GOLFERS | Short golfers don't lose distance. | [H] · camera settles · swing with `shortTop` · club + ball |
| 1.9 | | A short arc does. | [H accent, stack, slam] · red `arcTrail` "SHORT ARC" |
| 3.2 | ■ THE PROBLEM | As the club goes back, your arms fold. | address → takeaway → `shortTop` · float "ARMS FOLD" |
| 5.9 | | At the top, the club sits tight to your head. | camera push to the top position · marker "TIGHT" |
| 8.7 | | So you swing harder to make up for it. | snap through → `offBalance` · float "HARDER?" (grey) |
| 11.3 | ■ WHY IT FAILS | A small circle gives the clubhead less runway. | full short swing with red `arcTrail` "SMALL CIRCLE" |
| 14.0 | | Less runway means less speed. | chips SMALL CIRCLE → LESS RUNWAY → **LESS SPEED** |
| 15.9 | | Swinging harder won't make the circle bigger. | short swing ending `offBalance` |
| 18.4 | ■ HOW McILROY DOES IT | Rory McIlroy is listed at five foot ten. | name RORY McILROY · height 5'10" · grey taller golfer fades in with "TALLER GOLFER" label |
| 20.9 | | In 2023, he led the PGA Tour in driving distance. | wide swing · typer "PGA TOUR DRIVING DISTANCE · NO.1 · 2023" |
| 24.1 | | Watch his arms. They stay long going back. | taller golfer fades out · takeaway → `wideTop` · gold `arcTrail` "WIDE ARC" |
| 26.6 | | Wide on the way back. Wide on the way through. | impact → through → finish · chips WIDE BACK / **WIDE THROUGH** |
| 30.0 | ■ THE FIX | Width is a feel you can train — the app I'm building opens each drill with a checkpoint like this — so here's yours. | JOIN THE WAITLIST `tag` at +1.5s for 1.5s · golfer resets, then takeaway → `wideTop` |
| 36.2 | | Start the club low and slow away from the ball. | slow takeaway · arrow "LOW AND SLOW" along the ground |
| 39.2 | | Keep your lead arm long, not locked. | `wideTop` · float "LONG, NOT LOCKED" |
| 41.6 | | Then let your arms extend after the ball. | impact → through → finish · gold `arcTrail` "EXTEND" |
| 44.0 | ■ REMEMBER | You can't change your height. | [H] |
| 45.6 | | You can change your arc. | [H accent, stack, slam] · takeaway → `wideTop` |

Caption: `Rory McIlroy: listed at 5'10", No.1 in PGA Tour driving distance in 2023. You can't change your height. You can change your arc ⛳ #golf #golftips #rorymcilroy #golfswing #drivingdistance`

Hook variants:
1. SHORT GOLFERS DON'T LOSE DISTANCE. / A SHORT ARC DOES. **(used)**
2. YOUR HEIGHT ISN'T COSTING YOU YARDS. / YOUR FOLDED ARMS ARE.
3. YOU DON'T NEED TO BE TALLER. / YOU NEED TO BE WIDER.

Plug variants:
1. Width is a feel you can train — the app I'm building opens each drill with a checkpoint like this — so here's yours. **(used, #3)**
2. Width is the first thing the distance plan in the app I'm building drills — fifteen minutes a day — so start with your takeaway. (#2)

---------------------------------------------------------------------------------------------------
## 02 · "The Pane of Glass" · Ben Hogan · slice / swing plane
One idea: many slices start with an over-the-top downswing. Picture Hogan's pane of glass and start down under it.
Plug feature: **MVP #3 Animated checkpoints** (the swing-plane checkpoint).
Estimated length **49.4s**, 19 lines. Plug starts at **32.4s (66%)**.

| ~t (s) | Chapter | VO | On screen / device |
|---|---|---|---|
| 0.0 | ■ THE SLICE | Your slice isn't always your grip. | [H] · golfer at address · club + ball |
| 2.1 | | Often it's your downswing. | [H accent, stack, slam] · top → `overTop` → impact → finish · float "OVER THE TOP" (red) |
| 3.7 | ■ THE PROBLEM | The ball starts left, then curves hard right. | **top view**: target line · ball · red curved path "SLICE" · typer "RIGHT-HANDED GOLFER" |
| 6.4 | | So you aim further left to allow for it. | golfer rotates left · grey path "AIM LEFT" |
| 9.1 | ■ WHY IT FAILS | Watch the start of your downswing. | **side view** · `plane` "SWING PLANE" drawn at address · takeaway → top |
| 11.2 | | Your hands get thrown out toward the ball. | `overTop` · arrow "OUT" (red) · float "OVER THE TOP" |
| 13.9 | | The club comes down above the line it went up on. | camera push · top → `overTop` → impact · red `arcTrail` "ABOVE THE PLANE" |
| 17.2 | | So it cuts across the ball, out to in. | **top view**: red club path crossing the ball, out to in |
| 19.8 | | Leave the face open to that path and it slices. | red "SLICE" ball flight draws |
| 23.1 | ■ HOW HOGAN DID IT | Ben Hogan's book pictured this in 1957. | **side view** · name BEN HOGAN · typer "FIVE LESSONS · 1957" |
| 25.8 | | A tilted pane of glass. | `plane` "PANE OF GLASS" |
| 27.6 | | Resting on your shoulders, down to the ball. | camera push along the plane |
| 30.3 | | The idea: swing under it, and never break it. | full on-plane swing · float "DON'T BREAK THE GLASS" |
| 33.0 | ■ THE FIX | Staying under it takes practice — the app I'm building shows you the plane before every drill — so try this. | JOIN THE WAITLIST `tag` at +1.5s for 1.5s · takeaway → top |
| 38.4 | | From the top, let your trail elbow drop first. | `transition` · arrow "ELBOW DOWN" |
| 41.4 | | Hands fall down, not out. | impact → through → finish · gold `arcTrail` "UNDER THE GLASS" · chips DOWN / NOT OUT |
| 43.2 | | Feel the club arrive from inside the ball. | **top view**: gold club path "FROM INSIDE" |
| 45.7 | ■ REMEMBER | Your slice starts at the top. | [H] · **side view**, address |
| 47.8 | | Start down under the glass. | [H accent, stack, slam] · `plane` at address → top → `transition` |

Caption: `Ben Hogan's pane of glass (Five Lessons, 1957) and the downswing that causes so many slices ⛳ #golf #golftips #benhogan #golfswing #slicefix`

Hook variants:
1. YOUR SLICE ISN'T ALWAYS YOUR GRIP. / OFTEN IT'S YOUR DOWNSWING. **(used)** Softened from the brief's "Your slice isn't your grip". A weak grip can genuinely open the face, so the absolute version is false.
2. AIMING LEFT WON'T FIX YOUR SLICE. / YOUR DOWNSWING WILL.
3. HOGAN FIXED THIS IN 1957. / WITH A PANE OF GLASS. (Risky: "fixed" overclaims. Keep it only if the fact-checker accepts it as figurative.)

Plug variants:
1. Staying under it takes practice — the app I'm building shows you the plane before every drill — so try this. **(used, #3)**
2. If you're not sure your slice is a path problem — the app I'm building asks three questions about your ball flight and suggests a plan — but over the top is the usual suspect. (#1. "Usual suspect" needs a source or a cut.)

---------------------------------------------------------------------------------------------------
## 03 · "Happy Feet" · Scottie Scheffler · balance
One idea: moving feet are fine. Losing balance isn't. Check it by holding your finish for three seconds.
Plug feature: **MVP #4 Film & compare**.
Estimated length **48.6s**, 19 lines. Plug starts at **30.6s (63%)**.
Safety: the lesson is balance. The script tells beginners **not** to copy his slide (b12) and to slow down (b14, b17).

| ~t (s) | Chapter | VO | On screen / device |
|---|---|---|---|
| 0.0 | ■ FOOTWORK | Moving your feet isn't a swing fault. | [H] · full swing · club + ball |
| 2.4 | | Losing your balance is. | [H accent, stack, slam] · `offBalance` · float "FALLING" (red) |
| 3.7 | ■ THE PROBLEM | You swing hard and your feet move. | swing → `offBalance` |
| 6.1 | | So you try to glue them to the ground. | back to address · float "DON'T MOVE" (grey) |
| 9.1 | | Now you're stiff, and still off balance. | stiff short swing → `offBalance` · chips STIFF / **STILL FALLING** |
| 11.5 | ■ WHY IT FAILS | The problem is where your weight ends up. | holds `offBalance` · zone "WEIGHT?" |
| 14.2 | | Stuck on your back foot, or tipping toward the ball. | chips STUCK BACK / TIPPING FORWARD |
| 17.4 | | A wobbly finish is the clue. | camera push on the feet · marker "WOBBLE" |
| 19.6 | ■ HOW SCHEFFLER DOES IT | Scottie Scheffler's feet move a lot. | name SCOTTIE SCHEFFLER · typer "MASTERS CHAMPION · 2022 · 2024" |
| 21.4 | | His trail foot slides through the shot. | full swing · arrow "FOOT SLIDES" along the ground |
| 23.8 | | Coaches tie it to how hard he pushes into the ground. | arrow "PUSH" up from the feet |
| 27.4 | | That slide is his. You don't need to copy it. | float "DON'T COPY THE SLIDE" (grey) |
| 30.6 | ■ THE FIX | Balance is easy to check — the app I'm building puts your filmed swing next to the checkpoint — so here's the test. | JOIN THE WAITLIST `tag` at +1.5s for 1.5s · address |
| 36.6 | | Swing at three-quarter speed. | `halfBack` swing → finish |
| 38.1 | | Finish tall, weight on your lead foot. | `finish` · chips TALL / LEAD FOOT / **TRAIL HEEL UP** |
| 40.6 | | Now hold it for three seconds. | typer "1 · 2 · 3" counting at 4 characters per second |
| 42.7 | | Can't hold it? Slow down until you can. | `offBalance` → `finish` |
| 45.4 | ■ REMEMBER | Let your feet move. | [H] |
| 46.7 | | Hold your finish. | [H accent, stack, slam] |

Caption: `Scottie Scheffler's feet move. Your balance shouldn't. Try the 3-second finish ⛳ #golf #golftips #scottiescheffler #golfswing #balance`

Hook variants:
1. MOVING YOUR FEET ISN'T A SWING FAULT. / LOSING YOUR BALANCE IS. **(used)**
2. SCHEFFLER'S FEET MOVE. / HIS FINISH STILL HOLDS. (Needs a source that he holds his finish. Not found, so not used.)
3. STILL FEET WON'T FIX YOUR SWING. / A BALANCED FINISH WILL.

Plug variants:
1. Balance is easy to check — the app I'm building puts your filmed swing next to the checkpoint — so here's the test. **(used, #4)**
2. Balance is one of the fourteen-day plans in the app I'm building — a few minutes of finishes a day — and it starts with one test. (#2)

---------------------------------------------------------------------------------------------------
## Factual claims for the fact-checker

Verification levels follow CLAUDE.md. `[verified-fetch]` = I opened the page. `[snippet]` = search result only.
Technique cues ("low and slow", "lead arm long, not locked", "trail elbow drops first", "hold for three
seconds") are standard coaching advice offered as the video's own teaching, not as facts. They are listed at the end (claims 13–15) so the checker can rule on them.

**01 · McIlroy**
1. **Rory McIlroy is listed at 5'10".** (VO b09, on screen, caption.) His PGA Tour profile shows 5'10" `[verified-fetch, curl of the page, 2026-10-27]`: https://www.pgatour.com/player/28237/rory-mcilroy. **Conflict:** many secondary sites say 5'9" (175 cm), e.g. https://www.nationalclubgolfer.com/tour/rory-mcilroy-height `[snippet]`. That is why the script says "listed at" and uses the tour's own figure.
2. **He led the PGA Tour in driving distance in 2023** (No.1, 326.3 yards, the 2022-23 season). (VO b10, typer, caption.)
   - Golf Channel season review: https://www.golfchannel.com/news/2023-pga-tour-in-review-rory-mcilroy-was-pga-tours-longest-driver-who-joined-him-in-top-10-top-10-shortest `[snippet; 403 on fetch]`
   - Golfmagic, No.1 at 326.6 yards as of 17 April 2023: https://www.golfmagic.com/pga-tour/pga-tour-driving-distance-2023-rory-mcilroy-leads-liv-golf-pro-still-top-10 `[verified-fetch, mid-season only]`
   - Sportskeeda, 326.3 yards final: https://sportskeeda.com/golf/news-rory-mcilroy-shatters-pga-tour-driving-distance-record-average-326-3-yards-surpassing-bryson-dechambeau `[snippet]`
   - The yardage is not on screen, only the rank and year. Context: his PGA Tour profile currently shows him 2nd in driving distance (2026 season) `[verified-fetch]`.
3. **His arms stay long (wide) going back and through.** (VO b11–b12.) Golf Monthly coach Clive Tucker says great driver swings stay wide back and through and that McIlroy gets extension in the takeaway without swaying: https://www.golfmonthly.com/tips/rory-mcilroy-driver-swing-keys-160193 `[snippet]`.
4. **A wider arc gives the clubhead more distance to travel, and so more speed ("less runway, less speed").** (VO b06–b07.) This is widely taught. Examples: Titleist "The Right Way to Create Width in Your Golf Swing", https://www.titleist.com/videos/instruction/right-way-to-create-width-in-your-golf-swing `[snippet]`, and GOLF.com, https://golf.com/?p=15418968 `[snippet]`. It is a coaching principle, not a measured law; no numeric speed gain is claimed. The hook "Short golfers don't lose distance. A short arc does." overstates it, since height can matter. The fact-checker may prefer hook variant 3.

**02 · Hogan**
5. **Ben Hogan's *Five Lessons: The Modern Fundamentals of Golf* was first published in 1957** (A.S. Barnes; first serialised in Sports Illustrated from 11 March 1957). (VO b10, typer, caption.) https://www.si.com/golf/travel/feature-2021-05-31-ben-hogans-5-lessons-endures-time-technology-scrutiny `[verified-fetch]`
6. **Hogan used the image of a pane of glass to show the swing plane.** (VO b10–b11, on screen.) USGTF: "Hogan used the image of a pane of glass to illustrate this point". It also describes his plane as running from the ball through the top of the shoulders, and notes the book came from the SI series. https://www.usgtf.com/?p=17931 `[verified-fetch]`.
   - VO says "Ben Hogan's book pictured this", not "Hogan drew", because the illustrations were by Anthony Ravielli: https://www.rotaryswing.com/golf-lessons-blog/ben-hogan-pane-of-glass-drill/ and the SI piece above [snippet].
7. **The glass rests on the shoulders and slopes down to the ball.** (VO b12.) USGTF (above) `[verified-fetch]`, plus Titleist and RotarySwing descriptions, https://www.rotaryswing.com/golf-lessons-blog/ben-hogan-pane-of-glass-drill/ `[snippet]`.
8. **The idea is to swing under it and not break it.** (VO b13.) Titleist instruction says Hogan tried to avoid crossing the plane on the backswing and the downswing, https://titleist.com/videos/instruction/use-your-stand-bag-to-get-on-plane `[snippet; 403 on fetch]`. RotarySwing advises staying under it `[snippet]`.
9. **Over the top → the club comes down above the plane → out-to-in path. With the face open to that path, the ball starts left and curves right (right-hander).** (VO b03, b06–b09.)
   - Titleist, "Over-The-Top Fix to Cure Your Slice": https://titleist.com/instruction/titleist-tips-over-the-top-fix-to-cure-your-slice `[snippet]`
   - Skillest: path sets the start, face-to-path sets the curve, https://skillest.com/blog/over-the-top-golf-swing/ `[snippet]`
   - GOLFTEC: https://golftec.com/blog-posts/why-you-slice---and-how-golftec-fixes-it `[snippet]`
   - Note: an out-to-in path with the face open *to the target* starts the ball right of target, not left. "Starts left, curves right" describes the classic pull-slice. The checker may want "starts left or straight".
10. **"Your slice isn't always your grip. Often it's your downswing."** (Hook.) Hedged on purpose. Sources agree that both the face (which grip affects) and the path matter (claim 9). "Often" is a coaching judgement; no frequency statistic is claimed.

**03 · Scheffler**
11. **Scottie Scheffler won the Masters in 2022 and 2024.** (Typer b09.) https://en.wikipedia.org/wiki/Scottie_Scheffler `[verified-fetch]`. Also Al Jazeera 2024: https://www.aljazeera.com/amp/sports/2024/4/15/world-number-one-scottie-scheffler-claims-second-masters-golf-title `[snippet]`.
12. **His feet move a lot, his trail (back) foot slides through the shot, and coaches tie it to his pressure shift and how hard he pushes into the ground.** (VO b09–b11.)
    - Wikipedia: "Scheffler shuffle", a back foot that slides and a lead ankle that rolls through impact `[verified-fetch]`
    - GOLF.com: lateral shift, turn, vertical push, and pressure moving from the right foot to the left, per coach Joe Plecker. https://golf.com/instruction/scottie-scheffler-crazy-footwork-explained/ `[verified-fetch]`
    - Jorge Parada's "dynamic balance", pushing hard against the ground: via search summary `[snippet]`.
    - "Don't copy the slide" is our advice. A PGA professional is quoted calling it a result of his hip drive and "not something to be copied" `[snippet, source page not opened]`.

**Coaching cues (the video's own teaching, flagged so the checker can rule):**
13. "Start the club low and slow", "lead arm long, not locked", "let your arms extend after the ball" (v01). Takeaway-extension advice: Nicklaus via GOLF.com and Titleist width tip, as in claim 4 `[snippet]`.
14. "Let your trail elbow drop first", "hands down, not out", "arrive from inside" (v02). Trail-elbow and inside-path drills appear in the slice sources in claim 9 `[snippet]`.
15. "Finish tall, weight on your lead foot, trail heel up; hold it for three seconds; slow down until you can" (v03). This is a standard balance check. **No source opened for the three-second figure.** It is a drill convention, not a claim about Scheffler. Mark it `[unverified]` and present it as our drill.

**Not claimed anywhere (deliberately avoided):** McIlroy's exact yardage, clubhead speed, the average tour player's height, Scheffler's current world ranking, and any claim that Scheffler holds his finish.
