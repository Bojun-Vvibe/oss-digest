# ADDENDUM-123 — 2026-04-28 (capture 2026-04-28T14:50Z)

**Capture window:** 13:55:00Z → 14:50:00Z UTC. Window width: **55m00s** (Add.122 was 47m00s — 1.17× window; mid-band, returns to Add.121's 55m00s exactly).
**Predecessor:** ADDENDUM-122 (closed 13:55:00Z). Carry preds: ZZZ-A jif-oai #19970 declarative-block (RESOLVED — see §1), ZZZ-C litellm 12h class (RESOLVED PASS at Add.122), ZZZ-E yiliang114 follow-up (tick 2/4), ZZZ-F codex 3-tick resume (tick 2/3), ZZZ-G litellm 13h class within 2 ticks (tick 1/2), ZZZ-H gemini-cli 17h within 1 tick (tick 1/1 DEADLINE THIS TICK), VVV bolinfest #19900 (tick 4/6), P-278-A opencode roster repeat (tick 1/1 DEADLINE THIS TICK).

## Headline events — **codex jif-oai #19970 MERGES at 14:23:14Z `a9e5c340` ENDING the 2h51m codex zero-merge silence and RESOLVING Pred ZZZ-F at tick 2/3 PASS; gemini-cli STILL silent through 17h32m+ — Pred ZZZ-H tick 1/1 DEADLINE PASSES with 17h crossed (32m past threshold) = ZZZ-H RESOLVED PASS; litellm STILL silent at 13h03m+ — CROSSES 13h class threshold = Pred ZZZ-G tick 1/2 RESOLVED PASS one tick early; opencode ZERO merges in-window (vs Add.122's 3-merge triplet) — P-278-A FALSIFIED at tick 1/1 (opencode roster did NOT repeat at Add.123, A-B-C-B chain does not extend to A-B-C-B-B).**

1. **Cross-repo merge count this window: 1 merge (codex jif-oai #19970 14:23:14Z `a9e5c340`), 5 strict net-new opens visible in-window (opencode #24798 sentisso 13:42Z, #24799 kitlangton 13:48Z, #24806 edemaine 14:31Z, codex #19986 fcoury-oai 14:00Z, #19990 jif-oai 14:36Z, #19995 viyatb-oai 14:46Z = 6), 2 closed-no-merge (opencode #24801 mrsimpson 14:06Z).** Per-minute merge rate **0.018** (Add.122 was 0.064 — 0.28× — sharp drop, third tick at non-zero but lowest of the four). **Cross-repo concentration: codex 1/1 (100%) — SECOND CONSECUTIVE single-repo-monopoly tick, but DIFFERENT repo from Add.122 (codex now, opencode then)** = the A-B-C-B chain extends to **A-B-C-B-D** with D=codex (codex was slot A in Add.119) = **A-B-C-B-A**, a lag-4 recurrence on slot-A repo, which is the synth #278 P-278-E falsifier resolution PATH (codex re-entered at Add.123, lag-4 from Add.119 origin). Per-repo silence-class crossing this tick: codex (mid+→shallow RESET via #19970 — silence resets from 2h51m to 27m), opencode (shallow→shallow+ — 1h25m+ since #24792), litellm (DEEP-EXTREME→DEEP-EXTREME+ — **13h03m+, 12-tick W17 record**, **CROSSES 13h class boundary**), gemini-cli (DEEP-DEEP-EXTREME→DEEP-DEEP-EXTREME+ — **17h32m+, 22-tick, CROSSES 17h class boundary**), qwen-code (shallow→shallow+ — 1h45m+ since #3708), goose (shallow→shallow+ — 1h54m+ since #8866) = **3/6 repos cross threshold this tick (codex shallow RESET DOWN; litellm 13h crossing; gemini-cli 17h crossing).**

2. **codex jif-oai #19970 MERGE — silence-break with 51-minute review-to-merge gap.** #19970 `a9e5c34083d4593b51d520f4d45f751ef9eee297` `feat: trigger memories from user turns with cooldown` opened 11:47:48Z, MERGED 14:23:14Z = **2h35m26s open lifespan**. The `[do not merge]` declarative-block flagged in Add.121–122 as Pred ZZZ-A was REMOVED prior to merge (resolution mode: block-clear → merge, not block-clear → re-open → merge). **Pred ZZZ-A RESOLVED PASS** (declarative-block cleared and merge completed within Add.123 window, well inside the 6-tick deadline). **codex 6-tick zero-merge silence (Add.117–Add.122) ends at Add.123 = 7 ticks total dormancy followed by reset** — Pred ZZZ-F (codex resume within 3 ticks deadline Add.124) **RESOLVED PASS at tick 2/3** with 1 tick to spare. jif-oai is the same author as Add.119's 4-merge sprint (#19961, #19963, #19967, #19970-as-then-blocked) — same-author resumption confirms the synth #50 post-own-merge cascade pattern carries across **multi-tick silence gaps** (Add.119 sprint → 7-tick silence → Add.123 single-merge resumption by SAME jif-oai author).

3. **litellm CROSSES 13h class boundary — 12th consecutive zero-merge tick, deepest W17 silence on litellm.** Silence at Add.123 close = 14:50:00Z − 01:46:21Z (krrish-berri-2 #26661) = **13h03m39s**. **Pred ZZZ-G (13h class within 2 ticks deadline Add.124) RESOLVED PASS at tick 1/2** — 13h crossed at Add.123 with 1 tick to spare (mirroring Pred ZZZ-C's 12h-class tick-2-of-3 resolution, both crossed early-by-one). In-window 0 merges, 6+ new opens (#26676 mateo-berri 07:43Z carry, #26677 onthebed 08:00Z carry, #26678 cdxiaodong 08:45Z carry, #26680 mseep-ai 09:29Z carry, #26684 Sameerlite 10:07Z CLOSED, #26685 Sameerlite 10:13Z carry, #26686 jtstothard 10:23Z carry, #26688 onthebed 10:47Z carry, #26690 kimsehwan96 11:26Z, #26691 Sameerlite 11:28Z, #26694 milan-berri 11:47Z, #26695 hxrikp1729 12:12Z) — **active open-PR backlog growing while merge engine remains stalled** — synth #267 conversion-rate-collapse axis at extreme. **Pred ZZZ-I**: litellm crosses **14h class within 1 tick (deadline Add.124)** — falsifier: any litellm merge before Add.124 close (would also break the consecutive-tick streak at 13).

4. **gemini-cli CROSSES 17h class boundary — 22-tick sequence, Pred ZZZ-H RESOLVED PASS at deadline.** Silence at Add.123 close = 14:50:00Z − 21:17:32Z (devr0306 #26079) = **17h32m28s**. **Pred ZZZ-H (17h within 1 tick deadline Add.123) RESOLVED PASS** at deadline tick with **32 minutes past 17h threshold**. In-window 0 opens visible, 0 merges. **Pred ZZZ-J**: gemini-cli crosses **18h within 1 tick (deadline Add.124)** — minimal extension prediction (needs only 28 additional minutes silence on a typical 50m+ tick width).

5. **opencode ZERO-MERGE TICK — 1h25m+ silence at Add.123 close, P-278-A FALSIFIED at deadline.** Last opencode merge iamdavidhill #24792 at 13:24:47Z = **1h25m13s silence at close**. **Pred P-278-A (Add.123 active roster contains opencode) FALSIFIED at tick 1/1** — opencode did NOT merge in-window, the A-B-C-B chain does NOT extend to A-B-C-B-B. Instead the chain becomes **A-B-C-B-A** (codex re-entry at slot 5) = lag-4 recurrence of slot-A repo. **Synth #278's lag-spectrum claim (lag-2 recurrence as sole break mode) is NOW WEAKENED** — Add.123 demonstrates a **lag-4 recurrence** as alternative break mode. The chain's full prefix Add.119–Add.123 is {codex} → {opencode} → {qwen-code, goose} → {opencode} → {codex} — 5-tick chain with 3 distinct rosters and 2 recurrences (opencode at lag-2, codex at lag-4). **Synth #278's n_max=3 ceiling claim STANDS** (no n≥4 disjoint sequence emerged); P-278-C lag-spectrum prediction is **partially-falsified-at-instance-1** (lag-4 not in predicted lag-2 family). In-window opencode opens: #24798 sentisso `feat: add support for named agent colors` 13:42Z, #24799 kitlangton `refactor(httpapi): fork server startup by flag` 13:48Z (kitlangton's THIRD `httpapi`-prefix touch in W17 after #24716/#24717 doublet), #24806 edemaine `fix: ensure EOL at end of help messages` 14:31Z. **kitlangton's #24799 is a `refactor(httpapi):` follow-up to the Add.122 `fix(httpapi):` doublet** — refactor following two fixes on identical surface = synth #76 config-application-ordering surface contention extended to the httpapi-server-startup-axis at single-author granularity.

6. **qwen-code post-RESET continues: 1h45m+ silence at Add.123 close.** Last merge yiliang114 #3708 at 13:04:53Z. In-window 0 merges, 1 open (chiga0 #3710 `feat(cli): customize banner area (logo, title, hide)` 14:06Z). doudouOUC #3684 (event monitor) and #3685 (PyPI workflow) BOTH STILL OPEN — 11h+ and 11h+ self-stall continues. **Pred ZZZ-E (yiliang114 follow-up by Add.125) tick 2/4 NEUTRAL** — yiliang114 silent in-window.

7. **goose post-RESET continues: 1h54m+ silence at Add.123 close.** Last merge jamadeo #8866 at 12:56:08Z. In-window 0 activity. github-actions-bot #8875 `chore(release): release version 1.33.0` (10:09Z, OPEN) is the release-bump-pair PR for #8872 (already MERGED at 10:08:54Z) — release-bot follow-up open while v1.33.0 release artifact pipeline finalizes.

8. **bolinfest #19900 — STILL OPEN at Add.123 close, 14h04m+ lifespan, 7-tick consecutive bolinfest silence (Add.117–Add.123).** Pred VVV tick 4/6 NEUTRAL. bolinfest's 7-tick silence is now **synth #157 atomic-streak-length-5–6 ceiling EXCEEDED on the silence-axis** (synth #157 was merge-axis), establishing that silence-axis bolinfest streaks can exceed merge-axis streaks (asymmetric durability of the two streak families).

9. **In-window cross-repo activity table (merges + key opens):**

| PR | Repo | Author | Action | Surface | SHA |
|----|------|--------|--------|---------|-----|
| #19970 | codex | jif-oai | MERGED 14:23:14Z | `feat:` (memory cooldown) | `a9e5c340` |
| #19986 | codex | fcoury-oai | OPEN 14:00:38Z | `fix(tui):` | (none) |
| #19990 | codex | jif-oai | OPEN 14:36:47Z | `feat:` (rate-limit memory skip) | (none) |
| #19995 | codex | viyatb-oai | OPEN 14:46:45Z | `[codex] proxy host matching` | (none) |
| #24798 | opencode | sentisso | OPEN 13:42:27Z | `feat: agent colors` | (none) |
| #24799 | opencode | kitlangton | OPEN 13:48:15Z | `refactor(httpapi):` | (none) |
| #24806 | opencode | edemaine | OPEN 14:31:03Z | `fix:` (EOL) | (none) |
| #3710 | qwen-code | chiga0 | OPEN 14:06:48Z | `feat(cli):` (banner) | (none) |

10. **Per-repo silence escalation table (Add.123 close 14:50Z):**

| Repo | Silence | Class | Δ from Add.122 |
|------|---------|-------|-----------------|
| gemini-cli | 17h32m+ | DEEP-DEEP-EXTREME+ (22-tick, **17h crossed**) | +55m, +1 tick, +1 class |
| litellm | 13h03m+ | DEEP-EXTREME+ (12-tick, **13h crossed**) | +55m, +1 tick, +1 class |
| codex | 27m+ | shallow (RESET via #19970) | −2h24m, RESET |
| opencode | 1h25m+ | shallow+ | +1h25m (was 0 at Add.122) |
| goose | 1h54m+ | shallow+ | +55m, +1 tick |
| qwen-code | 1h45m+ | shallow+ | +55m, +1 tick |

11. **Predictions opened this tick:**
- **Pred ZZZ-I**: litellm crosses 14h within 1 tick (deadline Add.124).
- **Pred ZZZ-J**: gemini-cli crosses 18h within 1 tick (deadline Add.124).
- **Pred ZZZ-K** (synth #279 candidate): codex jif-oai re-engages within 3 ticks of #19970 merge (deadline Add.126) — same-author cascade prediction. jif-oai opened #19990 at 14:36Z (13 minutes after own #19970 merge) — Pred ZZZ-K ALREADY ACTIVE on #19990 lifecycle.
- **Pred ZZZ-L** (synth #280 candidate): kitlangton's #24799 `refactor(httpapi):` merges within 4 ticks (deadline Add.127) following the Add.122 `fix(httpapi):` doublet → refactor sequence (fix-then-refactor surface-pattern).

12. **Predictions closed this tick:**
- ZZZ-A jif-oai #19970 declarative-block: **RESOLVED PASS** (block cleared, merged at 14:23:14Z).
- ZZZ-F codex 3-tick resume: **RESOLVED PASS** at tick 2/3 (codex merged in-window).
- ZZZ-G litellm 13h class within 2 ticks: **RESOLVED PASS** at tick 1/2 (13h crossed in-window).
- ZZZ-H gemini-cli 17h within 1 tick: **RESOLVED PASS** at deadline tick (17h crossed by 32m).
- P-278-A opencode roster repeat: **FALSIFIED** at tick 1/1 (zero opencode merges in-window).

13. **Carry-forward predictions for Add.124:**
- ZZZ-E yiliang114 follow-up by Add.125 (tick 2/4 NEUTRAL).
- VVV bolinfest #19900 by Add.126 (tick 4/6 NEUTRAL).
- ZZZ-I litellm 14h within 1 tick (tick 1/1 DEADLINE Add.124).
- ZZZ-J gemini-cli 18h within 1 tick (tick 1/1 DEADLINE Add.124).
- ZZZ-K jif-oai #19990 same-author cascade (tick 1/3 ACTIVE).
- ZZZ-L kitlangton #24799 refactor merge (tick 1/4 ACTIVE).

**Status:** Add.123 is a **5-prediction-resolution tick** (4 PASS + 1 FALSIFIED) — highest single-tick prediction-clearance rate in W17 to date. The chain Add.119–Add.123 = A-B-C-B-A establishes both lag-2 (synth #278) and lag-4 (this addendum) recurrence modes for slot-A repo, suggesting roster-recurrence is **multi-modal** rather than synth #278's single-modal lag-2 framing.
