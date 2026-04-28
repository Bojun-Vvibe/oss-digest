# ADDENDUM-117 — 2026-04-28 (capture 2026-04-28T09:26Z)

**Capture window:** 08:43:00Z → 09:26:00Z UTC. Window width: **43m00s** (contracts from Add.116's 58m00s).
**Predecessor:** ADDENDUM-116 (closed 08:43:00Z; carry preds incl. ZZ FURTHER-STRESSED, BBB RESOLVED-PASSING, AAA RESOLVED-PASSING, CCC TRACKING, DDD PASSING-DIRECTION, OO PAUSED-EXTENDED-5-TICK, OO' DUAL-STALLED, EEE PASSING tick 1/3, FFF PASSING-DIRECTION tick 1/3, GGG FALSIFIED tick 1/4, 254-1 RECOVERED-IN-BAND, 255-1'' TRENDING-BURST, 258-1 STILL-FALSIFIED-NEW-ENTRY-PENDING, 262-1 STALLED-3-tick, 262-2 PASSING-CONTRACTING, 262-3 PAUSED, 264-1/3/4 PASSING tick 1, HHH NEW deadline Add.121, VV EXTENDED, WW TRENDS-PASSING, SS' PARTIAL-RECOVERY).

## Headline events — **commit-phase RE-COLLAPSES sharply at Add.117 from Add.116's 8-merge rebound: only 1 cross-repo merge (qwen-code #3693 boundary tanzhenxin 08:44:20Z `8807c026`, +1m past Add.116 close); single net in-window open (cdxiaodong #26678 litellm 08:45:24Z DeepSeek V4 reasoning_content); zero opencode / codex / goose / gemini-cli / litellm activity in 41 of 43 minutes; Pred 254-1 4-tick rolling collapses to 16.7% — RE-EXITS BAND; Pred FFF flips PASSING-DIRECTION → FALSIFIED-DIRECTION (Opens:Merges 1:1 = 1.00, formal threshold met by trivial-volume coincidence not regime change); Pred OO escalates to PAUSED-EXTENDED-6-TICK — litellm enters DEEP cohort (≥6h zero-merge: 5h05m+ tracking to 6h crossing within 1 tick); Pred 264-4 multi-member-deep PARTIAL-FORMATION at tick 2 of 5 (litellm joins gemini-cli-deep on next tick projection); Pred HHH (tanzhenxin merge-burst recurrence) DORMANT tick 1 of 5 — quartet author silent post-#3693; sub-tick exhaustion signature**

1. **Cross-repo merge count this window: 1 merge, 1 net-new open, 0 closed-no-merge.** Per-minute merge rate **0.023** (Add.116 was 0.138 — **6.0× re-collapse, mirroring Add.115→Add.116 rebound magnitude in reverse**). **Cross-repo concentration: qwen-code 1/1 (100% via boundary #3693).** Per-repo-tick crossing rate this tick: opencode (shallow→mid — 1h35m+ since #24749), codex (shallow→mid — 1h33m+ since #19914), litellm (mid→mid-deep — 5h05m+, 6th tick), qwen-code (shallow→shallow — 41m+ since #3693), goose (shallow→mid — 1h31m+ since #8874), gemini-cli (deep→deep — 12h08m+, 15-tick zero-merge record extends) = **1/6 = 16.7%** — **RE-ENTERS sub-band floor [20%, 40%]**; **Pred 254-1 4-tick rolling = (16.7% + 16.7% + 66.7% + 16.7%) / 4 = 29.2%** — still in band by 4-tick smoothing but **single-tick RE-EXIT** restores Add.115-class floor. Trajectory: **RECOVERED-IN-BAND → SINGLE-TICK-FLOOR-ECHO** (rebound was non-persistent; reservoir-drain regime collapses back to suppression).

2. **tanzhenxin quartet aftermath at Add.117 — DORMANT, Pred HHH tick 1 of 5 PASSING-DIRECTION-FOR-FALSIFIER.** #3693 (`fix(core): set DeepSeek V4 context to 1M and output to 384K`, MERGED 08:44:20Z, sha `8807c026`) was the final merge in the tanzhenxin Add.116 cluster — boundary entry for Add.117. Net post-#3693 tanzhenxin activity in 41-min window: **zero new opens, zero new merges**. **Quartet exhaustion signature: 4 merges in 1h41m followed by ≥41m dead-air**. **Pred HHH falsifier criterion (5 ticks elapse without ≥3 same-author merges within any 60min window in qwen-code) tick 1 of 5 PASSING-toward-FALSIFICATION** — i.e., quartet did NOT recur within first post-cluster tick. **NEW Pred III**: tanzhenxin same-author cluster COOL-DOWN exceeds 4 ticks (≥3.4hr gap before next tanzhenxin merge in qwen-code). Falsifier: tanzhenxin merges any PR in qwen-code within next 4 ticks (deadline Add.121).

3. **Pred FFF (opens-without-merge regime reversal) FORMAL-THRESHOLD-MET-VACUOUSLY at Add.117 — Opens:Merges 1:1 = 1.00.** Add.115 was 7:1 = 7.0; Add.116 was 9:8 = 1.13; Add.117 is 1:1 = 1.00. **Threshold criterion (Opens:Merges ≤1:1 within 3 ticks) formally met at tick 2 of 3**, but **regime interpretation is degenerate** — only 1 merge and 1 open in window means ratio is determined by trivial volume, not by genuine open/merge balance. **Resolved-trajectory split**: nominal PASS by criterion, semantic FALSIFICATION by reservoir-drain hypothesis (Add.116 drained Add.115's reservoir; Add.117 has no reservoir to drain because nothing accumulated). **Pred FFF marked RESOLVED-AMBIGUOUS — split between letter (PASS) and spirit (FAIL)**. NEW Pred JJJ added to disambiguate: 3-tick rolling Opens:Merges ratio ≤1.5:1 sustained across Add.117-Add.118-Add.119 (current rolling Add.115-116-117 = (7+9+1):(1+8+1) = 17:10 = 1.7 — close but above). Falsifier: 3-tick rolling exceeds 2.5:1 in any of Add.118/119/120.

4. **litellm enters DEEP cohort at Add.117 — Pred OO PAUSED-EXTENDED-6-TICK; Pred 258-1 NEW-ENTRY-CONFIRMED imminent.** Last litellm merge: krrish-berri-2 #26661 01:46:21Z. Silence at Add.117 close: **7h40m+** — **DEEP-class crossed (≥6h threshold per synth #258 framework)**. In-window litellm opens: **1** (cdxiaodong #26678 08:45:24Z `Fix DeepSeek V4 reasoning_content in multi-turn chat`). In-window litellm merges: **0**. Litellm Opens:Merges this tick = 1:0 (undefined). **6-tick consecutive litellm zero-merge: NEW W17 RECORD** (prior record was 5-tick at Add.116; surpasses #258 5-tick framework boundary). **Pred 258-1 STILL-FALSIFIED but NEW-ENTRY-PENDING flips to NEW-ENTRY-CONFIRMED at Add.118 if litellm zero-merge persists** (will hit 8h+ deep-deep classification). **Pred 264-4 (no other repo enters deep within 5 ticks of gemini-cli sole-survivorship): FALSIFIED at tick 2 of 5** by litellm crossing 6h threshold. Sole-survivor period for gemini-cli: 14 ticks (Add.103→Add.116) — ends here. Multi-member-deep cohort RE-FORMS at cardinality 2 (gemini-cli + litellm).

5. **DeepSeek V4 cross-repo theme emerges at Add.117 — same-day, two-repo, two-author bug surface.** qwen-code #3693 tanzhenxin (`fix(core): set DeepSeek V4 context to 1M and output to 384K`, MERGED 08:44:20Z `8807c026`) and litellm #26678 cdxiaodong (`Fix DeepSeek V4 reasoning_content in multi-turn chat`, OPEN 08:45:24Z) appear within **64 seconds of each other** on the **same external upstream model release** (DeepSeek V4 — implied just-released, given two independent agent toolchains both shipping config/bug fixes in same minute). Plus litellm-side ishaan-berri #26660 from Add.115/116 (`fix(deepseek): DeepSeek V4 support - model registry, multi-turn thinking fix, no-prefix routing`, OPEN since 04-28T01:29Z, ~8h+ STILL OPEN). **Cross-repo upstream-event-locked PR co-emergence**: extends synth #94-style same-product-surface co-touch into cross-repo / non-doublet space. **NEW Pred KKK**: a 3rd repo (codex / opencode / goose / gemini-cli) ships a DeepSeek-V4-related PR within 4 ticks (deadline Add.121). Falsifier: 4 ticks elapse without DeepSeek-V4 PR outside qwen-code/litellm.

6. **opencode / codex / goose all cross shallow→mid threshold at Add.117 — synchronized post-rebound silence.** opencode last merge #24749 Brendonovich 07:51:19Z; silence at Add.117 close = **1h35m+** (mid-class ≥1h). codex last merge #19914 xl-openai 07:53:28Z; silence = **1h33m+** (mid). goose last merge #8874 jh-block 07:54:48Z; silence = **1h31m+** (mid). **Three repos cross same threshold within ±4min of each other at Add.117 close** — synchronized cohort transition signature. **NEW Pred LLL**: ≥2 of {opencode, codex, goose} cross mid→deep (≥6h) within 4 ticks (deadline Add.121 ≈ 13:30Z). Falsifier: ≤1 of the three crosses 6h-deep before deadline. (Notable: this would push deep-cohort cardinality from 2 to 3-4, a major regime shift from synth #264 sole-survivor framework into a **deep-cohort majority** regime.)

7. **Pred ZZ (bolinfest #19900) STILL OPEN — lifespan now ~8h40m+** (since 00:46:23Z). bolinfest's adjacent #19899 (`mark permission profiles experimental`, MERGED 06:08:35Z) was the last bolinfest activity. **#19900 lifespan crosses 8h class** — entering W17 stretch-tail; deadline ~12:46Z = Add.119, 2 ticks remain. Trajectory: **FURTHER-STRESSED-8H-CLASS → if unmerged by Add.119, ZZ resolves FALSIFIED**. Probability of self-merge in 2 ticks given 8h+ inactivity: low (per synth #88-style aged-PR self-close pattern signal).

8. **Pred BBB carry — kitlangton 9 consecutive ticks of silence (Add.109-Add.117).** No kitlangton activity. **Pred BBB held-RESOLVED-PASSING; extension trajectory: kitlangton silence escalates to N=9 ticks ≈ 7h+ contiguous quiet** (last merge #24711 02:24:04Z). Author-quiescence regime confirmed. **NEW Pred MMM**: kitlangton breaks 10-tick silence (returns within 1 tick — Add.118). Falsifier: kitlangton silent through Add.118.

9. **Pred AAA carry — opencode AAA RESOLVED-PASSING held; no further opens converted at Add.117.** Brendonovich #24738 STILL OPEN ~3h16m+; ualtinok #24740 STILL OPEN ~2h59m+; rektide #24728 STILL OPEN ~5h02m+; kzekiue #24745 STILL OPEN ~2h02m+; sdwolf4103 #24746 STILL OPEN ~1h51m+. **Five-PR opencode unmerged-stack persists; conversion rate post-Brendonovich-self-merge stalls at 0/5 in this window.** **Pred NNN**: at least 1 of the 5-stack converts within 3 ticks (deadline Add.120). Falsifier: 5/5 still open at Add.120.

10. **Pred OO' axis-decomp at Add.117: BOTH AXES STALLED-EXTENDED.** **Cardinality-axis**: no new `-berri` debut, count holds at 5+. **Activity-axis**: in-window `-berri` PR count = 0 (mateo-berri #26676 still OPEN ~1h42m+; yuneng-berri #26675 still OPEN ~2h48m+; ishaan-berri #26660/#26664 STILL OPEN; krrish-berri-2 #26661 was pre-window). **Pred 262-2 (≥1 cohort PR per 3 ticks) rolling 3-tick (Add.115-116-117) = 1+0+0 = 1 — STILL PASSING but margin contracts to 1.** Margin one tick from violation. **Pred 262-3 (PASSING-DIRECTION) FALSIFIED at Add.117** — 2 consecutive ticks zero-cohort-activity. Trajectory shifts: **OO' DUAL-STALLED → ACTIVITY-AXIS-COLLAPSE-CONFIRMED-2-TICK**. Per synth #262 framework: cardinality stalls at 5, activity collapses 2 of 3 ticks — 4-axis evolution framework now records "frozen-cardinality + suppressed-activity" regime.

11. **gemini-cli sole-survivor extends — Pred 264-1 holds tick 2 of 3 PASSING.** No gemini-cli merges in 43-min window. Last merge devr0306 #26079 21:17:32Z 04-27 — silence now **12h08m+ (15 ticks)**. In-window opens: **0** (latest opens were #26088 03:33:52Z, #26092 04:19:01Z, #26093 04:34:13Z all pre-Add.116 window). **Net Add.117 in-window gemini-cli activity: 0 merges, 0 opens — DUAL-ZERO TICK 2 of 3** (Add.116 was also dual-zero). **Pred 264-3 (sole-survivor zero-open): tick 2 of 3 PASSING.** **Pred 264-4 (no other repo enters deep within 5 ticks): FALSIFIED at tick 2 of 5** by litellm 7h40m+ crossing 6h threshold (see headline 4). Sole-survivor period: 15 ticks then ENDS at Add.117 with litellm joining deep cohort. Cohort cardinality: 1 → 2.

12. **Per-repo silence escalation table (Add.117 close):**

| Repo | Silence | Class |
|------|---------|-------|
| gemini-cli | 12h08m+ | DEEP-DEEP (15-tick record) |
| litellm | 7h40m+ | **DEEP (NEW entrant — first since Add.103)** |
| opencode | 1h35m+ | mid (just-crossed) |
| codex | 1h33m+ | mid (just-crossed) |
| goose | 1h31m+ | mid (just-crossed) |
| qwen-code | 41m+ | shallow |

In the 43m window 08:43Z → 09:26Z:

| Repo | In-window MERGED | In-window OPEN | In-window CLOSED-no-merge | Merge-silence at 09:26Z |
|------|------------------|----------------|---------------------------|--------------------------|
| anomalyco/opencode | 0 | 0 | 0 | **1h35m+** (since #24749) — **mid** (resets from shallow) |
| openai/codex | 0 | 0 | 0 | **1h33m+** (since #19914) — **mid** (resets from shallow) |
| BerriAI/litellm | 0 | **1** (#26678 cdxiaodong 08:45:24Z) | 0 | **7h40m+** (since #26661 01:46:21Z) — **DEEP** (6th tick, NEW deep entrant) |
| google-gemini/gemini-cli | 0 | 0 | 0 | **12h08m+** (since #26079 21:17:32Z 04-27) — **DEEP-DEEP** (15-tick record extends) |
| block/goose | 0 | 0 | 0 | **1h31m+** (since #8874) — **mid** (resets from shallow) |
| QwenLM/qwen-code | **1** (#3693 tanzhenxin 08:44:20Z `8807c026`, BURST 33m04s — boundary entry from Add.116 capture) | 0 | 0 | **41m+** (since #3693) — **shallow** |

**Cross-repo merge count: 1; opens: 1; closed-no-merge: 0.** **Open-to-merge ratio: 1.00** (vs Add.116's 1.13, Add.115's 7.00). **Re-collapse regime confirmed at tick 1 post-rebound — Add.116 rebound was non-persistent.** Cross-repo merge concentration: qwen-code-only (100% boundary entry) — 1-repo-positive collapse.

## qwen-code in-window — **1 boundary merge (tanzhenxin #3693); 0 in-window opens; quartet aftermath silent**

In-window MERGED: **1** (boundary entry from Add.116).

- **#3693** tanzhenxin 08:44:20Z `fix(core): set DeepSeek V4 context to 1M and output to 384K` (sha `8807c026`, BURST 33m04s). DeepSeek-V4-locked surface (cross-repo with litellm #26678).

In-window OPENED: **0**.

**Pred HHH (tanzhenxin merge-burst recurrence) tick 1 of 5 — DORMANT, falsifier on track.** No new tanzhenxin PR opened or merged in 41 min post-#3693.

## litellm in-window — **0 merges; 1 in-window open (cdxiaodong DeepSeek V4); enters DEEP cohort**

In-window MERGED: **0**.

In-window OPENED: **1**.

- **#26678** cdxiaodong 08:45:24Z `Fix DeepSeek V4 reasoning_content in multi-turn chat` (sha `a3dbffa8`). Non-`-berri` author. **Cross-repo DeepSeek-V4-locked with qwen-code #3693 (Δt=64s).**

**Pred OO PAUSED-EXTENDED-6-TICK — DEEP cohort entry confirmed (7h40m+ ≥ 6h threshold).** First litellm DEEP-class entry in W17 since synth #258 framework codified.

## opencode in-window — **0 merges; 0 in-window opens; mid-class silence**

In-window MERGED: **0**. In-window OPENED: **0**.

**5-PR Brendonovich/ualtinok/rektide/kzekiue/sdwolf4103 stack STILL UNCONVERTED (Pred NNN tick 0 of 3).**

## codex in-window — **0 merges; 0 in-window opens; mid-class silence**

In-window MERGED: **0**. In-window OPENED: **0**.

**xl-openai #19914 was the last codex commit; eternal-openai #19905 STILL OPEN 8th consecutive quiet tick; evawong-oai 5-PR stack STILL OPEN 7th consecutive quiet tick; bolinfest #19900 STILL OPEN ~8h40m+ (Pred ZZ FURTHER-STRESSED-8H-CLASS).**

## goose in-window — **0 merges; 0 in-window opens; 2-tick streak ENDS**

In-window MERGED: **0**. In-window OPENED: **0**.

**goose 2-tick consecutive merge streak (Add.115-Add.116) ENDS at Add.117 — back to mid-class silence.**

## gemini-cli in-window — **dual-zero tick 2 of 3; 15-tick deep extends**

In-window MERGED: **0**. In-window OPENED: **0**.

**Pred 264-1, 264-3 PASSING tick 2 of 3.** **Pred 264-4 FALSIFIED tick 2 of 5 by litellm deep crossing.**

## Notable absences

- **No `-berri` PR opened or merged in Add.117 window** — second consecutive dual-zero `-berri` tick; OO' activity-axis collapse 2-tick confirmed.
- **No tanzhenxin activity post-#3693** — quartet exhaustion signature.
- **Pred ZZ bolinfest #19900 STILL OPEN ~8h40m+** — 8h-class crossed.
- **No new opencode opens** despite 5-PR unconverted stack — opencode open-side production also halts.
- **No DeepSeek-V4 PR yet from codex/opencode/goose/gemini-cli** — Pred KKK tick 0 of 4.

## Pred carry table (delta from Add.116 only)

| Pred | Status at Add.116 close | Status at Add.117 close | Delta |
|------|-------------------------|-------------------------|-------|
| 254-1 | RECOVERED-IN-BAND (25.0%) | **SINGLE-TICK-FLOOR-ECHO (29.2% / single-tick 16.7%)** | rebound non-persistent; floor restored |
| 255-1'' | TRENDING-BURST (0.75:1) | **UNCHANGED (0.75:1)** | no goose merge this tick |
| 258-1 | STILL-FALSIFIED-NEW-ENTRY-PENDING | **STILL-FALSIFIED-NEW-ENTRY-CONFIRMED (litellm 7h40m+)** | litellm crosses 6h-deep |
| OO | PAUSED-EXTENDED-5-TICK | **PAUSED-EXTENDED-6-TICK / DEEP-COHORT-ENTRY** | NEW W17 record |
| OO' | DUAL-STALLED | **ACTIVITY-AXIS-COLLAPSE-CONFIRMED-2-TICK** | 2nd consecutive zero-cohort tick |
| BBB | RESOLVED-PASSING (8 of 8) | **HELD; EXTENDS to 9 ticks** | kitlangton still silent |
| SS' | PARTIAL-RECOVERY (3/6 co-fire) | **REGRESSED (1/6 co-fire — qwen only)** | reservoir-drain co-fire collapses |
| VV | EXTENDED (xl-openai cohort?) | **STALLED** | no new debut |
| WW | TRENDS-PASSING (codex shallow) | **REGRESSED-MID** | codex re-enters mid-class |
| ZZ | FURTHER-STRESSED (7h50m+) | **FURTHER-STRESSED-8H-CLASS (8h40m+)** | crosses 8h |
| AAA | RESOLVED-PASSING (2 of 3) | **HELD; 5-stack zero-conversion** | no new self-merge |
| CCC | TRACKING (release-train) | **HELD** | no new release activity |
| DDD | PASSING-DIRECTION (2 of 3 etraut-openai) | **HELD; rekram1-node still 0** | Pred BBB confirmation rules out kitlangton |
| EEE | PASSING tick 1 of 3 | **PASSING tick 2 of 3** | gemini-cli zero merges |
| FFF | PASSING-DIRECTION tick 1 of 3 | **RESOLVED-AMBIGUOUS (1.00 letter, FAIL spirit)** | trivial-volume coincidence |
| GGG | FALSIFIED at tick 1 of 4 | **HELD-FALSIFIED** | terminal |
| 262-1 | STALLED (3-tick) | **STALLED (4-tick)** | no `-berri` debut |
| 262-2 | PASSING-CONTRACTING (2 in 3-tick rolling) | **PASSING-MARGIN-1 (1 in 3-tick rolling)** | one tick from violation |
| 262-3 | PAUSED | **FALSIFIED-DIRECTION (2-tick zero)** | second consecutive zero-cohort tick |
| 264-1 | PASSING tick 1 of 3 | **PASSING tick 2 of 3** | gemini-cli zero merges |
| 264-3 | PASSING tick 1 of 3 | **PASSING tick 2 of 3** | gemini-cli zero opens |
| 264-4 | PASSING tick 1 of 5 | **FALSIFIED tick 2 of 5** | litellm crosses 6h-deep |
| HHH | NEW (deadline Add.121) | **PASSING-FALSIFIER tick 1 of 5** | tanzhenxin dormant |
| III | — | **NEW** (tanzhenxin 4-tick cool-down) |
| JJJ | — | **NEW** (3-tick rolling Opens:Merges ≤1.5:1) |
| KKK | — | **NEW** (3rd-repo DeepSeek-V4 PR within 4 ticks) |
| LLL | — | **NEW** (≥2 of {opencode,codex,goose} cross mid→deep within 4 ticks) |
| MMM | — | **NEW** (kitlangton breaks 10-tick silence at Add.118) |
| NNN | — | **NEW** (≥1 of opencode 5-stack converts within 3 ticks) |

**Synth pair #267 (drafted in tandem)** formalizes the **single-tick-rebound non-persistence pattern**: Add.116 8-merge rebound (66.7% per-repo crossing) collapses to Add.117 1-merge (16.7% crossing) within one tick — refining synth #265 single-tick reservoir-drain rebound by adding the **post-drain echo collapse** as a coupled second-half signature. **Synth pair #268 (drafted in tandem)** formalizes the **cross-repo upstream-event-locked PR co-emergence** (qwen-code #3693 + litellm #26678 within 64s of each other on DeepSeek V4 surface across two independent toolchains), extending synth #94 same-product-surface co-touch into the **cross-repo / different-author / external-upstream-trigger** dimension and opening Pred KKK to test recurrence in 3rd / 4th repos.
