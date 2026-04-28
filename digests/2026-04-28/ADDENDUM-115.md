# ADDENDUM-115 — 2026-04-28 (capture 2026-04-28T07:45Z)

**Capture window:** 07:00:00Z → 07:45:00Z UTC. Window width: **45m00s** (widens from Add.114's 30m).
**Predecessor:** ADDENDUM-114 (closed 07:00:00Z; carry preds incl. ZZ TRACKING, AAA MARGINAL, BBB PASSING-DIRECTION, CCC NEW, DDD NEW, OO PAUSED-EXTENDED-3-TICK, OO' STALLED-CARDINALITY/RECURRING-ACTIVITY, 254-1 STRESSED-FALSIFIED-DIRECTION, 255-1'' RESOLVED-FALSIFIED, 258-1 RESOLVED-FALSIFIED-DIRECTION, SS' RESOLVED-FALSIFIED-DIRECTION, VV RESURRECTION-EVENT, XX RESOLVED-FALSIFIED, 262-1 STALLED, 262-2 PASSING).

## Headline events — **commit-phase COLLAPSES at Add.115: only 1 merge across 6 repos (goose morgmart #8868 breaks 8h48m+ deep silence), 7 in-window opens, 1 closed-no-merge; opens-without-merge regime emerges (qwen-code N=3 sub-2-min open cluster, opencode N=2 opens, litellm N=1 open, all zero-merge); Pred OO' cohort-recurrence DOUBLES (mateo-berri #26676 second `-berri` recurrence within 2 ticks); Pred AAA STRESSED (opencode 4th consecutive zero-merge tick); deep-cohort cardinality SWAPS (qwen-code shallow→shallow extended, goose deep→shallow exit, gemini-cli deep persists)**

1. **Cross-repo merge count this window: 1 merge, 7 opens, 1 closed-no-merge.** Per-minute merge rate **0.022** (Add.114 was 0.100 — **4.5× collapse**). **Cross-repo concentration: 1/1 goose (100%) — first goose-monoculture commit-phase tick in W17 corpus.** Per-repo-tick crossing rate this tick: opencode (mid→mid), litellm (mid→mid), codex (shallow→mid — silence breach pending), qwen-code (shallow→shallow), goose (deep→shallow), gemini-cli (deep→deep) = **1/6 = 16.7%** — **3rd consecutive tick below 254-1 band floor [20%, 40%]**. **Pred 254-1 4-tick rolling = (33% + 0% + 16.7% + 16.7%) / 4 = 16.6%** — **3-tick run below band floor**; trajectory escalates to **RESOLVED-FALSIFIED-DIRECTION** (3-tick rule satisfied).

2. **goose breaks 8h48m+ deep silence — morgmart #8868 (`redesign skills library`) MERGED 07:12:01Z, mergeCommit `b35eaf4b`, lifespan 10h59m32s = AGED-class (multi-day-adjacent).** First goose merge since #8854 22:11:20Z 04-27 (8-tick zero-activity record now broken). **Deep-cohort {gemini-cli, qwen-code, goose} (post-Add.114 reduction) further contracts at Add.115: goose exits → cohort cardinality drops to 1 (gemini-cli alone).** **Pred 258-1 (cardinality conservation) further FALSIFIED at Add.115 — second consecutive uncompensated exit.** **Pred EEE (NEW): gemini-cli sustains deep state for ≥3 more ticks (deadline Add.118) given absence of compensating entries. Falsifier: gemini-cli merges before Add.118 OR a non-deep repo (opencode/codex/litellm) crosses into deep (≥6h merge-silence) by Add.118.** opencode currently 2h45m+, codex 71m+, litellm 3h24m+ — none near 6h threshold; falsifier from deep-side requires gemini-cli merge.

3. **Pred OO' cohort-recurrence DOUBLES at Add.115: mateo-berri #26676 (`compat-matrix: open a docs-repo PR instead of direct-pushing main`) opened 07:43:54Z** — mateo-berri is **already in W17 `-berri` cohort** (prior W17 PRs: #26655 04-28 00:31Z, #26535, #26530, #26491, #26483-26479 from 04-25). **Cardinality unchanged at 5 (or 6 if mateo-berri was the unidentified "+1"); ACTIVITY axis recurs for 2nd consecutive tick** (yuneng-berri #26675 at Add.114, mateo-berri #26676 at Add.115). **Pred 262-2 (cohort produces ≥1 PR per 3 ticks): rolling 3-tick (Add.113-114-115) = 0+1+1 = 2 — PASSING with margin.** **Pred 262-3 (stack-augmentation modality): mateo-berri #26676 is NEW PR (no prior open mateo-berri litellm PR in active state — #26655 status pending verify) — provisional 2nd of 3 supports.** **Pred 262-1 (cardinality reaches ≥6 by W18 close): STILL STALLED — neither yuneng-berri nor mateo-berri produces cardinality growth.**

4. **NEW pattern at Add.115 — opens-without-merge regime across 3 repos simultaneously:** qwen-code 3 opens (tanzhenxin #3693 07:11:40Z `fix(core): set DeepSeek V4 context to 1M and output to 384K`, tanzhenxin #3694 07:11:55Z `test(cli): remove 8 flaky TUI input tests surfaced by CI history mining`, qqqys #3692 07:10:11Z `fix(core): route countSessionMessages through parseLineTolerant`) — **N=3 sub-2-minute open cluster (Δt #3692→#3693 = 89s, #3693→#3694 = 15s)**, 0 merges. opencode 2 opens (kzekiue #24745 07:24:00Z `fix(app): persist project edit metadata`, sdwolf4103 #24746 07:35:21Z `docs: add opencode-working-memory to ecosystem`), 0 merges. litellm 1 open (mateo-berri #26676), 0 merges. **Opens : Merges = 7 : 1 = 7.0** (vs Add.114's 1.67, Add.113's 3.00). **Pred FFF (NEW): opens-without-merge regime (Opens:Merges ≥5:1 with ≥3 distinct repos contributing opens) reverses to merges-dominant (Opens:Merges ≤1:1) within 3 ticks (deadline Add.118). Falsifier: 3 consecutive ticks at Opens:Merges ≥3:1.** Tests reservoir-fill → reservoir-drain dynamic — accumulating open inventory must eventually convert.

5. **Pred AAA STRESSED at Add.115: opencode 4th consecutive zero-merge tick.** Brendonovich #24738 (Add.113 open) STILL OPEN ~1h35m+; rektide #24728 (Add.111) STILL OPEN ~3h45m+; ualtinok #24740 (Add.114) STILL OPEN ~1h17m+; PLUS new opens kzekiue #24745, sdwolf4103 #24746. Stack of 5 unmerged opencode opens. **Score still 1 of 3 merged by Add.115 (rekram1-node #24730 only). Need ≥2 by Add.116 — single tick remaining for confirmation.** Trajectory: **MARGINAL → STRESSED-DIRECTION**.

6. **Pred ZZ TRACKING at Add.115: bolinfest #19900 STILL OPEN at lifespan ~7h00m+** (since 00:53Z open). **deadline ~12:08Z = Add.119 — 4 ticks remain.** No movement. The bolinfest `permissions:` self-merge series (#19775, #19776, #19899) ended at Add.114 capture-edge; #19900 has not converted in 7h. Trajectory: **STRESSED-DIRECTION** (lifespan exceeds peer self-merge median by ~3×).

7. **Pred CCC TRACKING at Add.115:** No qwen-code release-train tick this window (no qwen-code-ci-bot activity). Tick 1 of 5 inconclusive (no test condition triggered). Pred CCC count: 0 of 0 evaluated. Defer.

8. **Pred DDD TRACKING at Add.115: of {etraut-openai, rekram1-node, kitlangton-ext} RESOLVED-FALSIFIED at Add.113, returns by Add.117.** etraut-openai already 1 of 3 (Add.114). At Add.115: **0 additional returns** (no rekram1-node, no kitlangton-ext activity). Score 1 of 3, 2 ticks remain. Trajectory: **PASSING-MARGINAL** (need ≥1 more by Add.117).

9. **Pred BBB TRACKING at Add.115: kitlangton 7 consecutive ticks of silence (Add.109-Add.115).** No kitlangton activity this window. Deadline Add.116 (8-tick threshold). Trajectory: **PASSING-DIRECTION (7 of 8 ticks confirmed) — 1 tick from confirmation**.

10. **Pred SS' aftermath:** Add.115 has 1 merge + 7 opens cross-repo. Per-repo basis: goose 1+0 (counter-pattern), opencode 0+2 (open-side only), litellm 0+1 (open-side only), qwen-code 0+3 (open-side only), codex 0+0, gemini-cli 0+0. **No repo this tick exhibits both-positive (merge AND open) — extreme co-fire breakdown** (0/6 = 0% co-fire if testing per-repo). Pred SS' (positive open-merge correlation in commit-phase) **FURTHER FALSIFIED at Add.115 by complete absence of co-fire across all 6 repos.**

11. **NEW pattern at Add.115 — qwen-code intra-author rapid-open doublet at 15-second interval:** tanzhenxin #3693 (07:11:40Z) and #3694 (07:11:55Z), Δt=15s, on **disjoint surfaces** (#3693 is `core` model context config, #3694 is `cli` test pruning). **15s same-author doublet** matches synth #85 (sub-10s same-author cross-PR doublet on adjacent surfaces) **with surface-disjointness exception** (model-config vs test-pruning are not adjacent surfaces). **Pred GGG (NEW): tanzhenxin's #3693+#3694 doublet converts asymmetrically — exactly 1 of 2 merges within next 4 ticks (Add.116-Add.119), the other still-open at Add.119. Falsifier: both merge OR both still-open at Add.119.** Tests asymmetric-half-merge (synth #87) extension to surface-disjoint same-author doublets.

12. **goose merger morgmart #8868 lifespan 10h59m32s context:** opened 04-27 20:12:29Z, MERGED 04-28 07:12:01Z. Crosses **midnight UTC boundary** = multi-day-adjacent aged-class. **Pred 255-1'' aftermath (RESOLVED-FALSIFIED at Add.114 with 0.71:1 burst:aged): Add.115 +1 aged → cumulative Add.110-Add.115 = 6 aged + 7 burst = 0.86:1**. Still below 1:1 — falsification holds. Trend: AGED catching up but still BURST-dominant.

In the 45m window 07:00Z → 07:45Z:

| Repo | In-window MERGED | In-window OPEN | In-window CLOSED-no-merge | Merge-silence at 07:45Z |
|------|------------------|----------------|---------------------------|--------------------------|
| anomalyco/opencode | 0 | **2** (#24745 kzekiue 07:24:00Z, #24746 sdwolf4103 07:35:21Z) | 0 | **3h00m+** (since #24730 04:44:21Z) — **mid** (extends 4th tick) |
| openai/codex | 0 | 0 | 0 | **1h11m+** (since #19933 06:33:59Z) — **shallow** (transitioning toward mid) |
| BerriAI/litellm | 0 | **1** (#26676 mateo-berri 07:43:54Z) | 0 | **3h24m+** (since #26631 04:21:28Z) — **mid** (extends 4th tick) |
| google-gemini/gemini-cli | 0 | 0 | 0 | **10h27m+** (since #26079 21:17:32Z 04-27) — **deep** (13-tick zero-merge — record extends) |
| block/goose | **1** (#8868 morgmart 07:12:01Z, `b35eaf4b`, AGED 10h59m32s) | **1** (#8874 jh-block 07:42:51Z) | 0 | **33m02s** (since #8868) — **shallow** (transition deep→shallow, breaks 8h48m+ silence) |
| QwenLM/qwen-code | 0 | **3** (#3692 qqqys 07:10:11Z, #3693 tanzhenxin 07:11:40Z, #3694 tanzhenxin 07:11:55Z) | 0 | **45m+** (since #3688 06:59:13Z) — **shallow** (extends from Add.114's 47s) |

**Cross-repo merge count: 1; opens: 7; closed-no-merge: 0.** **Open-to-merge ratio: 7.00** (vs Add.114's 1.67, Add.113's 3.00). **New W17 ratio extreme — exceeds prior maximum of ~5.00** (synth-ledger pending verify). Cross-repo merge concentration: goose-monoculture (first W17 instance).

## goose in-window — **1 merge (#8868 morgmart aged 10h59m32s); 1 in-window open; 8h48m+ deep silence broken**

In-window MERGED: **1**.

- **#8868** morgmart `redesign skills library` (lifespan 10h59m32s, AGED-class, mergeCommit `b35eaf4b`). Multi-day-adjacent (opened 04-27 20:12Z, merged 04-28 07:12Z).

In-window OPENED: **1** (jh-block #8874 07:42:51Z `docs: hide Windows CUDA download links until release`).

**Falsifies extended deep-cohort silence record at tick 8 (goose 8-tick zero-activity → 0-tick).**

## qwen-code in-window — **0 merges; 3 in-window opens including tanzhenxin 15s same-author doublet**

In-window MERGED: **0**.

In-window OPENED: **3**.

- **#3692** qqqys 07:10:11Z `fix(core): route countSessionMessages through parseLineTolerant` (sha `4acc6e74`).
- **#3693** tanzhenxin 07:11:40Z `fix(core): set DeepSeek V4 context to 1M and output to 384K` (sha `e6151786`).
- **#3694** tanzhenxin 07:11:55Z `test(cli): remove 8 flaky TUI input tests surfaced by CI history mining` (sha `05f2cede`).

**tanzhenxin same-author doublet Δt=15s on disjoint surfaces (core vs cli) — opens Pred GGG.**

## opencode in-window — **0 merges; 2 in-window opens; stack of 5 unmerged opens accumulates**

In-window OPENED: **2**.

- **#24745** kzekiue 07:24:00Z `fix(app): persist project edit metadata` (sha `257e48b6`).
- **#24746** sdwolf4103 07:35:21Z `docs: add opencode-working-memory to ecosystem` (sha `eb2284a0`).

**4th consecutive zero-merge tick. Pred AAA STRESSED.**

## litellm in-window — **0 merges; 1 in-window open (mateo-berri cohort-recurrence)**

In-window OPENED: **1**.

- **#26676** mateo-berri 07:43:54Z `compat-matrix: open a docs-repo PR instead of direct-pushing main` (sha `a59a200d`).

**`-berri` cohort-recurrence 2 of 2 ticks (synth #262 activity-axis support).**

## Notable absences

- **gemini-cli 13-tick zero-merge record** — extends; cohort sole-survivor of original deep-cohort {gemini-cli, qwen-code, goose}.
- **codex 0 merges, 0 opens** — first dual-zero codex tick in 6 ticks. Merge-silence transitioning shallow→mid (1h11m+ vs 1h threshold). **Pred E (eternal-openai #19905) STILL OPEN, 6th consecutive quiet tick.** **Pred H (evawong-oai 5-PR stack) all 5 STILL OPEN, lifespan 13h32m+, 5th consecutive quiet tick.**
- **codex shallow-streak record from Add.114 ends** — silence pushes into mid territory by Add.116 if no merge.

## Pred carry table (delta from Add.114 only)

| Pred | Status at Add.114 close | Status at Add.115 close | Delta |
|------|-------------------------|-------------------------|-------|
| 254-1 | STRESSED-FALSIFIED-DIRECTION (16.7%) | **RESOLVED-FALSIFIED-DIRECTION (16.6%)** | 3rd consecutive tick below band — 3-tick rule satisfied |
| 255-1'' | RESOLVED-FALSIFIED (0.71:1) | UNCHANGED-RESOLVED (0.86:1) | aged catching up |
| 258-1 | RESOLVED-FALSIFIED-DIRECTION | **FURTHER-FALSIFIED** | goose exit, no compensation |
| OO | PAUSED-EXTENDED-3-TICK | **PAUSED-EXTENDED-4-TICK** | 4 consecutive zero-merge litellm |
| OO' | STALLED-CARDINALITY / RECURRING-ACTIVITY | **STALLED-CARDINALITY / RECURRING-ACTIVITY-2-TICK** | mateo-berri 2nd recurrence |
| BBB | PASSING-DIRECTION (6 of 8) | **PASSING-DIRECTION (7 of 8)** | 1 tick from confirmation |
| SS' | RESOLVED-FALSIFIED-DIRECTION (4/5) | **FURTHER-FALSIFIED (4/6, 0/6 per-repo)** | extreme co-fire breakdown |
| VV | RESURRECTION-EVENT | UNCHANGED | etraut-openai not active again |
| WW | PASSING-DIRECTION (1/2) | UNCHANGED | no codex activity |
| ZZ | TRACKING (6h14m, deadline 12:08Z) | **STRESSED-DIRECTION (7h00m+, 4 ticks remain)** | #19900 still open |
| AAA | MARGINAL (1 of 3) | **STRESSED-DIRECTION (1 of 3, 1 tick left)** | needs 1 merge by Add.116 |
| CCC | NEW | UNCHANGED-DEFERRED (no qwen-code release-train tick) | tick 1 of 5 inconclusive |
| DDD | NEW (1 of 3) | **PASSING-MARGINAL (1 of 3)** | needs ≥1 by Add.117 |
| 262-1 | STALLED | **STALLED (2-tick)** | no `-berri` debut |
| 262-2 | PASSING | **PASSING-WITH-MARGIN (2 in 3-tick rolling)** | activity recurrence sustained |
| 262-3 | NEW (1 of 1) | **PASSING-DIRECTION (provisional 2 of 2)** | mateo-berri #26676 is stack-augmentation |
| EEE | — | NEW | gemini-cli sustains deep ≥3 ticks |
| FFF | — | NEW | opens-without-merge regime reversal |
| GGG | — | NEW | tanzhenxin 15s doublet asymmetric-half-merge |

**Synth pair #263 (drafted in tandem)** formalizes the **opens-without-merge regime** (Pred FFF) as a cross-repo reservoir-accumulation pattern with merge-conversion lag prediction. **Synth pair #264 (drafted in tandem)** formalizes **deep-cohort sole-survivor dynamics** (Pred EEE) — when cohort cardinality contracts to 1 via uncompensated exit, the survivor's behavior diverges from its prior cohort-coupled pattern (gemini-cli now isolated from former deep-peers).
