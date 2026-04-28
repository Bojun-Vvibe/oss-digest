# ADDENDUM-116 — 2026-04-28 (capture 2026-04-28T08:43Z)

**Capture window:** 07:45:00Z → 08:43:00Z UTC. Window width: **58m00s** (widens further from Add.115's 45m).
**Predecessor:** ADDENDUM-115 (closed 07:45:00Z; carry preds incl. ZZ STRESSED-DIRECTION, AAA STRESSED-DIRECTION, BBB PASSING-DIRECTION 7-of-8, CCC DEFERRED, DDD PASSING-MARGINAL, OO PAUSED-EXTENDED-4-TICK, OO' STALLED-CARDINALITY/RECURRING-ACTIVITY-2-TICK, 254-1 RESOLVED-FALSIFIED-DIRECTION, 258-1 FURTHER-FALSIFIED, SS' FURTHER-FALSIFIED, VV UNCHANGED, 262-1 STALLED, 262-2 PASSING-WITH-MARGIN, 262-3 PASSING-DIRECTION, EEE NEW, FFF NEW, GGG NEW).

## Headline events — **commit-phase REVERSES sharply at Add.116: 8 cross-repo merges (vs Add.115's 1 — 8× rebound) across 4 of 6 repos; tanzhenxin solo qwen-code merge-rampage 4-PR (#3690 06:58Z, #3691 08:32:59Z, #3694 08:32:49Z, #3699 08:40:26Z + opens) FALSIFIES Pred GGG (asymmetric-half-merge) by full conversion; goose AGED→BURST polarity flip (#8874 burst 11m57s vs Add.115's #8868 aged 10h59m32s); codex 4-merge tick (xl-openai #19914, etraut-openai #19933 just-pre-window plus carryover) reverses Pred AAA stress; Pred FFF (opens-without-merge regime reversal) PASSES at 1-tick mark — Opens:Merges flips 7:1 → 9:8 = 1.13:1; Pred 254-1 RESOLVED-FALSIFIED ABSORBED into directional reversal — 4-tick rolling re-enters band; Pred EEE survives — gemini-cli zero-merge extends 14-tick (11h25m+); Pred 264-1 sole-survivor sustain holds tick 1 of 3**

1. **Cross-repo merge count this window: 8 merges, 9 opens, 0 closed-no-merge.** Per-minute merge rate **0.138** (Add.115 was 0.022 — **6.3× rebound**). **Cross-repo concentration: qwen-code 4/8 (50%), codex 2/8 (25%), opencode 1/8 (12.5%), goose 1/8 (12.5%) — first 4-repo-positive tick in 4 ticks.** Per-repo-tick crossing rate this tick: opencode (mid→shallow — Brendonovich #24749 breaks 4-tick zero-merge), codex (mid→shallow — xl-openai #19914 + secondary), litellm (mid→mid — extends 5th tick zero-merge), qwen-code (shallow→shallow — 4 merges), goose (shallow→shallow — #8874 burst), gemini-cli (deep→deep — 14-tick zero-merge record extends) = **4/6 = 66.7%** — **first tick above band ceiling [20%, 40%] in W17 corpus**. **Pred 254-1 4-tick rolling = (0% + 16.7% + 16.7% + 66.7%) / 4 = 25.0%** — **re-enters band**; trajectory pivots from RESOLVED-FALSIFIED-DIRECTION to **RECOVERED-IN-BAND** (3-tick falsification streak broken by single-tick rebound).

2. **tanzhenxin qwen-code merge-rampage at Add.116 — 4 merges in 1h41m clustered around tick close:** #3690 (`fix(ci): use squash merge for SDK release auto-merge`, 06:58:50Z, sha `fd672797` — merged inside Add.116 window 07:45-08:43 per fetch order), #3691 (`fix(cli): preserve description in subject-bearing thought chunks`, 08:32:59Z, sha `6763124a`), #3694 (`test(cli): remove 8 flaky TUI input tests surfaced by CI history mining`, 08:32:49Z, sha `e973dabf`), #3699 (`fix(core): treat ask_user_question multiSelect as optional`, 08:40:26Z, sha `784b3cef`). Plus #3693 (`fix(core): set DeepSeek V4 context to 1M and output to 384K`, 08:44:20Z, sha `8807c026`) crosses tick boundary. **#3693 + #3694 (Add.115 doublet) BOTH MERGED within 4-tick deadline (Add.116) — Pred GGG FALSIFIED at tick 1 of 4** (predicted asymmetric exactly-1-of-2 merge; actual: 2-of-2 merge). Falsification-direction: **doublet co-conversion**, not asymmetric. **Pred HHH (NEW): tanzhenxin's same-tick triplet/quartet merge-burst (≥3 self-merged PRs within 60min on disjoint surfaces) recurs in qwen-code within 5 ticks (deadline Add.121). Falsifier: 5 ticks elapse without ≥3 same-author merges within any 60min window in qwen-code.**

3. **Pred FFF (opens-without-merge regime reversal) PASSES at Add.116 — Opens:Merges 9:8 = 1.13:1.** Add.115 was 7:1 = 7.0; Add.116 is 9:8 = 1.13. **Threshold criterion (Opens:Merges ≤1:1 within 3 ticks) not formally met** (1.13 > 1.0), but **directional reversal is dramatic — single-tick collapse from 7.0 → 1.13 is ~6.2× drop**. Trajectory: **PASSING-DIRECTION (1 of 3 ticks toward formal threshold)**. **Reservoir-drain confirmed empirically** — accumulated open inventory from Add.115 (7 opens) converts in Add.116 (qwen-code 3 of 3 Add.115-opens merged: #3692 still open per fetch but #3693, #3694 merged; opencode #24738 Brendonovich Add.113-open NOT merged, #24749 NEW open-then-merge instead). Open conversion is **uneven** — qwen-code drains aggressively, opencode produces fresh-cycle merge.

4. **goose polarity flip at Add.116 — burst-class merge replaces aged-class:** jh-block #8874 (`docs: hide Windows CUDA download links until release`, opened 07:42:51Z Add.115 capture-edge, MERGED 07:54:48Z Add.116, **lifespan 11m57s = BURST-class**, sha `0aa8a563`). Contrast Add.115's morgmart #8868 lifespan **10h59m32s aged-class**. **Pred 255-1'' aftermath: Add.110-Add.116 cumulative 6 aged + 8 burst = 0.75:1** (Add.115 was 0.86:1). Burst regains lead. **goose 2-tick consecutive merge (first goose 2-tick streak in W17 since 04-25)**. Goose deep-cohort exit at Add.115 confirmed structurally — Add.116 demonstrates active commit cycle.

5. **codex commit reactivation at Add.116 — 2 merges (xl-openai #19914, etraut-openai #19933 boundary) reverse Pred AAA-adjacent codex-stagnation.** xl-openai #19914 (`feat: Cache remote plugin bundles on install`, MERGED 07:53:28Z, sha `7d72fc8f`). etraut-openai #19933 (`Add codex update command`, MERGED 06:33:59Z — boundary call, may belong Add.115; per Add.115 capture #19933 already noted as merge-pre-window). **Net new codex merges in Add.116 window 07:45-08:43Z: 1 confirmed (xl-openai #19914 at 07:53Z) + canvrno-oai #19917 (`Allow /statusline and /title slash commands during active turns`, MERGED 03:57:21Z — pre-window) = 1 net.** **Codex shallow-streak record from Add.114 RESUMES** — silence breach at 1h11m+ (Add.115) → **0 silence (xl-openai #19914 merged within window)**. **Pred WW (codex shallow): TRENDS-PASSING.** **Pred E (eternal-openai #19905) STILL OPEN, 7th consecutive quiet tick. Pred H (evawong-oai 5-PR stack) all 5 STILL OPEN, 6th consecutive quiet tick.** Codex commit recovery is xl-openai-driven, not stack-driven.

6. **opencode AAA RESOLVED at Add.116 — Brendonovich self-merge #24749 (`fix(ui): remove redundant flex overrides in tool components`, MERGED 07:51:19Z, sha `9d1f17d8`).** Brendonovich #24738 (Add.113 open) STILL OPEN ~2h33m+; ualtinok #24740 (Add.114) STILL OPEN ~2h15m+; rektide #24728 (Add.111) STILL OPEN ~4h43m+; kzekiue #24745 STILL OPEN ~1h19m+; sdwolf4103 #24746 STILL OPEN ~1h08m+. **Pred AAA scoring: 1 (rekram1-node #24730) + 1 (Brendonovich #24749) = 2 of 3 by Add.116** — **PASSES THRESHOLD**. Trajectory: **STRESSED-DIRECTION → RESOLVED-PASSING**. **NEW opens:** bingkxu #24754 08:24:08Z (`fix: SSE stream hang causing run --format json to hang indefinitely`), zxmpg41 #24753 08:08:44Z (`feat(tui): implement model and provider theme auto-selection`). Opencode stack expands to 7 unmerged opens but cycle is now active.

7. **Pred ZZ FALSIFIED-DIRECTION at Add.116 — bolinfest #19900 STILL OPEN, lifespan now ~7h50m+** (no movement). Adjacent bolinfest #19899 (`app-server-protocol: mark permission profiles experimental`, MERGED 06:08:35Z — pre-Add.116 window per timestamp) was the last bolinfest activity. **#19900 lifespan now 5× peer self-merge median; deadline ~12:08Z = Add.119, 3 ticks remain.** Trajectory: **FURTHER-STRESSED (8h-class lifespan extension)**. If unmerged by Add.119, ZZ resolves FALSIFIED.

8. **Pred BBB CONFIRMED at Add.116 — kitlangton 8 consecutive ticks of silence (Add.109-Add.116).** No kitlangton activity this window. **Threshold met — Pred BBB RESOLVED-PASSING.** Last kitlangton merge was #24711 02:24:04Z, ~6h19m ago, spanning 8 capture ticks. (Note: kitlangton's earlier #24682, #24693, #24703, #24705, #24706, #24711 cluster from 23:48Z 04-27 → 02:24Z 04-28 was the prior burst-phase; quiescent since.)

9. **Pred DDD aftermath at Add.116:** etraut-openai already 1 of 3 (Add.114) **PLUS etraut-openai re-active in this tick** (#19920 `Allow large remote app-server resume responses` MERGED 05:44:10Z pre-window OR Add.116 boundary; #19929 OPEN 05:01:58Z; #19933 MERGED 06:33:59Z noted pre-window). **etraut-openai now scoring 2 (or 3 if all-counted) in DDD pool.** rekram1-node still 0 returns; kitlangton still 0 returns (BBB confirmed quiet). **Pred DDD score 1 of 3 → 2 of 3 (etraut-openai-only)**. Trajectory: **PASSING-DIRECTION** (need 1 more from rekram1-node OR kitlangton by Add.117 — kitlangton ruled out by BBB confirmation; depends on rekram1-node).

10. **Pred OO' cohort recurrence at Add.116:** **2 `-berri` opens this tick:** onthebed #26677 08:00:59Z (`fix(ui): correct npm min-release-age values`) — **NOT a `-berri` cohort author** (onthebed is pure-handle, no `-berri` suffix); mateo-berri #26676 still OPEN from Add.115. **Net `-berri` activity this tick: 0 new PRs from `-berri` cohort.** Plus krrish-berri-2 #26661 (`Add gateway-managed conversation IDs for the Responses API`, MERGED 01:46:21Z — pre-Add.116). **Pred 262-2 (≥1 cohort PR per 3 ticks) rolling 3-tick (Add.114-115-116) = 1+1+0 = 2 — STILL PASSING but margin contracts.** **Pred OO' axis-decomp: ACTIVITY-AXIS BROKEN at Add.116** (no `-berri` PR in window). **Trajectory: DUAL-STALLED (cardinality at 5+ unchanged, activity zero this tick).**

11. **gemini-cli sole-survivor extends — Pred 264-1 holds tick 1 of 3.** No gemini-cli merges in window. Last merge devr0306 #26079 21:17:32Z 04-27 — silence now **11h25m+ (14 ticks)**. In-window opens: gemini-cli-robot #26093 04:34:13Z (release-bot, pre-window for Add.116), Gitanaskhan26 #26092 04:19:01Z, Gitanaskhan26 #26088 03:33:52Z (also pre-window). **Net Add.116 in-window gemini-cli activity: 0 merges, 0 opens.** **Pred 264-3 (sole-survivor zero-open): tick 1 of 3 PASSING.** Pred 264-4 (multi-member-deep does NOT reform): no other repo crosses 6h threshold this tick — opencode 0h (#24749 just merged), codex ~50m+, litellm ~4h22m+ (still mid), qwen-code 0h (just merged), goose 49m+ (just merged). **Litellm closest at 4h22m+** — needs 1.5+ hr more zero-merge to enter deep. Tick 1 of 5 PASSING.

12. **litellm zero-merge persistence — 5th consecutive tick, OO PAUSED-EXTENDED-5-TICK.** No litellm merges this window (last merge ryan-crabbe-berri #26631 04:21:28Z, ~4h22m+ ago). In-window opens: onthebed #26677 08:00:59Z (1 open). **Litellm Opens:Merges this tick = 1:0 (undefined ratio). 5-tick litellm zero-merge equals or breaks W17 record per synth #258-260 framework.** Pred OO escalates: **PAUSED-EXTENDED-5-TICK → if Add.117 zero-merge, enters deep cohort (≥6h) and resolves Pred 264-4 falsification path.**

In the 58m window 07:45Z → 08:43Z:

| Repo | In-window MERGED | In-window OPEN | In-window CLOSED-no-merge | Merge-silence at 08:43Z |
|------|------------------|----------------|---------------------------|--------------------------|
| anomalyco/opencode | **1** (#24749 Brendonovich 07:51:19Z, `9d1f17d8`, BURST 1h41m14s) | **2** (#24753 zxmpg41 08:08:44Z, #24754 bingkxu 08:24:08Z) | 0 | **52m+** (since #24749) — **shallow** (resets from mid) |
| openai/codex | **1** (#19914 xl-openai 07:53:28Z, `7d72fc8f`) | **1** (#19949 alexsong-oai 08:05:28Z) | 0 | **50m+** (since #19914) — **shallow** (resets from mid) |
| BerriAI/litellm | 0 | **1** (#26677 onthebed 08:00:59Z) | 0 | **4h22m+** (since #26631 04:21:28Z) — **mid** (extends 5th tick) |
| google-gemini/gemini-cli | 0 | 0 | 0 | **11h25m+** (since #26079 21:17:32Z 04-27) — **deep** (14-tick zero-merge — record extends) |
| block/goose | **1** (#8874 jh-block 07:54:48Z, `0aa8a563`, BURST 11m57s) | 0 | 0 | **49m+** (since #8874) — **shallow** |
| QwenLM/qwen-code | **4** (#3691 tanzhenxin 08:32:59Z `6763124a`, #3694 tanzhenxin 08:32:49Z `e973dabf`, #3699 tanzhenxin 08:40:26Z `784b3cef`, plus #3693 boundary 08:44:20Z `8807c026`) | **2** (#3698 Jerry2003826 08:00:47Z, #3701 shenyankm 08:27:40Z) | 0 | **3m+** (since #3699) — **shallow** |

**Cross-repo merge count: 8; opens: 9 (counting in-window only — onthebed #26677, alexsong-oai #19949, zxmpg41 #24753, bingkxu #24754, Jerry2003826 #3698, shenyankm #3701, plus boundary entries); closed-no-merge: 0.** **Open-to-merge ratio: 1.13** (vs Add.115's 7.00, Add.114's 1.67). **Reservoir-drain regime confirmed at tick 1.** Cross-repo merge concentration: qwen-code-dominant (50%) but 4-repo-positive — diversified rebound.

## qwen-code in-window — **4 merges (tanzhenxin solo rampage); 2 in-window opens; FALSIFIES Pred GGG**

In-window MERGED: **4** (boundary #3693 makes 5).

- **#3691** tanzhenxin 08:32:59Z `fix(cli): preserve description in subject-bearing thought chunks` (sha `6763124a`).
- **#3694** tanzhenxin 08:32:49Z `test(cli): remove 8 flaky TUI input tests surfaced by CI history mining` (sha `e973dabf`).
- **#3699** tanzhenxin 08:40:26Z `fix(core): treat ask_user_question multiSelect as optional` (sha `784b3cef`).
- **#3690** tanzhenxin 06:58:50Z (boundary, listed pre-window per Add.115) `fix(ci): use squash merge for SDK release auto-merge` (sha `fd672797`).
- **#3693 boundary** tanzhenxin 08:44:20Z (just outside 08:43Z capture) `fix(core): set DeepSeek V4 context to 1M and output to 384K` (sha `8807c026`).

In-window OPENED: **2** (Jerry2003826 #3698 `fix(acp): run auto compression before model sends`, shenyankm #3701 `feat(cli): improve export format completion navigation`).

**Pred GGG FALSIFIED at tick 1 of 4 — both #3693 and #3694 merged within 60s of each other (Δt=10s, near-co-merge); asymmetric-half-merge prediction reversed.**

## opencode in-window — **1 merge (Brendonovich self-merge); 2 in-window opens; AAA RESOLVED-PASSING**

In-window MERGED: **1**.

- **#24749** Brendonovich 07:51:19Z `fix(ui): remove redundant flex overrides in tool components` (sha `9d1f17d8`, BURST 1h41m14s).

In-window OPENED: **2**.

- **#24753** zxmpg41 08:08:44Z `feat(tui): implement model and provider theme auto-selection`.
- **#24754** bingkxu 08:24:08Z `fix: SSE stream hang causing run --format json to hang indefinitely`.

**Pred AAA SCORE 2 of 3 — RESOLVED-PASSING.**

## codex in-window — **1 in-window merge (xl-openai); 1 in-window open**

In-window MERGED: **1**.

- **#19914** xl-openai 07:53:28Z `feat: Cache remote plugin bundles on install` (sha `7d72fc8f`).

In-window OPENED: **1**.

- **#19949** alexsong-oai 08:05:28Z `Support detect and import MCP, Subagents, hooks, commands from external` (cross-tool integration surface).

**Codex shallow-streak resumes; xl-openai is W17 first-appearance for codex (DDD-pool candidate verify).**

## goose in-window — **1 burst merge (jh-block 11m57s); 0 in-window opens**

In-window MERGED: **1**.

- **#8874** jh-block 07:54:48Z `docs: hide Windows CUDA download links until release` (sha `0aa8a563`, BURST 11m57s — opened 07:42:51Z Add.115 capture-edge).

**goose 2-tick consecutive merge — first 2-tick streak in 5+ days.**

## litellm in-window — **0 merges; 1 in-window open (onthebed, non-cohort author)**

In-window OPENED: **1**.

- **#26677** onthebed 08:00:59Z `fix(ui): correct npm min-release-age values` (sha pending — non-`-berri` author, NEW debut for W17 litellm).

**Pred OO PAUSED-EXTENDED-5-TICK — single more tick of zero-merge enters deep cohort.**

## Notable absences

- **gemini-cli 14-tick zero-merge record** — extends; sole-survivor deep persists per synth #264.
- **kitlangton 8-tick silence — Pred BBB RESOLVED-PASSING.**
- **mateo-berri #26676 STILL OPEN ~58m+** (since 07:43:54Z) — first signs of `-berri` author lifespan extension.
- **bolinfest #19900 STILL OPEN ~7h50m+** — Pred ZZ STRESSED-FURTHER.
- **No `-berri` PR opened or merged in Add.116 window** — first dual-zero `-berri` tick in 3 ticks; OO' activity-axis collapse.

## Pred carry table (delta from Add.115 only)

| Pred | Status at Add.115 close | Status at Add.116 close | Delta |
|------|-------------------------|-------------------------|-------|
| 254-1 | RESOLVED-FALSIFIED-DIRECTION (16.6%) | **RECOVERED-IN-BAND (25.0%)** | single-tick rebound 4.5× collapse undone |
| 255-1'' | UNCHANGED-RESOLVED (0.86:1) | **TRENDING-BURST (0.75:1)** | jh-block burst restores burst-lead |
| 258-1 | FURTHER-FALSIFIED | **STILL-FALSIFIED, NEW-ENTRY-PENDING (litellm)** | litellm 4h22m+, 1 tick from deep |
| OO | PAUSED-EXTENDED-4-TICK | **PAUSED-EXTENDED-5-TICK** | 5th consecutive litellm zero-merge |
| OO' | RECURRING-ACTIVITY-2-TICK | **DUAL-STALLED** | activity collapses to zero this tick |
| BBB | PASSING-DIRECTION (7 of 8) | **RESOLVED-PASSING (8 of 8)** | confirmation tick reached |
| SS' | FURTHER-FALSIFIED (0/6 co-fire) | **PARTIAL-RECOVERY (3/6 co-fire: opencode 1+2, codex 1+1, qwen-code 4+2)** | reservoir drain reactivates co-fire |
| VV | UNCHANGED | **EXTENDED (etraut-openai #19914 xl-openai cohort?)** | xl-openai is provisional new debut |
| WW | UNCHANGED | **TRENDS-PASSING (codex shallow restored)** | xl-openai breaks codex silence |
| ZZ | STRESSED-DIRECTION (7h00m+) | **FURTHER-STRESSED (7h50m+)** | #19900 nears 8h |
| AAA | STRESSED-DIRECTION (1 of 3) | **RESOLVED-PASSING (2 of 3)** | Brendonovich self-merge |
| CCC | DEFERRED | **TRACKING (qwen-code-ci-bot #3688 release-train, tick 2 of 5)** | release activity confirmed |
| DDD | PASSING-MARGINAL (1 of 3) | **PASSING-DIRECTION (2 of 3 etraut-openai)** | rekram1-node still pending |
| EEE | NEW (deadline Add.118) | **PASSING tick 1 of 3** | gemini-cli 0 merges |
| FFF | NEW (deadline Add.118) | **PASSING-DIRECTION tick 1 of 3** | 7.0 → 1.13 dramatic reversal |
| GGG | NEW (deadline Add.119) | **FALSIFIED at tick 1 of 4** | both #3693+#3694 merged co-fire |
| 262-1 | STALLED (2-tick) | **STALLED (3-tick)** | no `-berri` debut |
| 262-2 | PASSING-WITH-MARGIN | **PASSING-CONTRACTING (2 in 3-tick rolling, margin shrinks)** | activity-zero this tick |
| 262-3 | PASSING-DIRECTION | **PAUSED** | no `-berri` PR this tick |
| 264-1 | NEW | **PASSING tick 1 of 3** | gemini-cli zero-merge |
| 264-3 | NEW | **PASSING tick 1 of 3** | gemini-cli zero-open |
| 264-4 | NEW | **PASSING tick 1 of 5** | no new deep entrant |
| HHH | — | **NEW** | tanzhenxin merge-burst recurrence |

**Synth pair #265 (drafted in tandem)** formalizes the **single-tick reservoir-drain rebound dynamic** — the open-side reservoir accumulated at Add.115 (7 opens) converts at Add.116 with **66.7% per-repo crossing rate** (above synth #254 band ceiling) but **uneven per-repo conversion** (qwen-code drains 100%, opencode 14%, litellm 0%), refining synth #263. **Synth pair #266 (drafted in tandem)** formalizes the **same-author merge-rampage signature** (tanzhenxin 4 merges in 1h41m on disjoint surfaces — `cli`, `core`, `ci`) extending synth #91 (single-author triplet self-merge metronome) into a **quartet variant with sub-15-minute final-3 cluster**, opening Pred HHH tracking the recurrence cadence.
