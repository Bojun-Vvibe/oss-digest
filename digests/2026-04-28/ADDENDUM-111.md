# ADDENDUM-111 — 2026-04-28 (capture 2026-04-28T04:55Z)

**Capture window:** 04:00:00Z → 04:55:00Z UTC. Window width: **55m00s** (slightly above ≤45m target — operational note: enforce ≤45m at Add.112).
**Predecessor:** ADDENDUM-110 (closed 04:00:00Z; carry preds A''''' (RESOLVED-FALSIFIED), B (gemini-cli structural), CC (RESOLVED-FALSIFIED), DD (archived), E, EE', FF', GG', H, HH (RESOLVED-PARTIAL), I, II, II', JJ, KK, LL/LL', MM (NEW), NN (NEW), OO (NEW), R, S, T, V (RESOLVED-FALSIFIED), Y, Z', AA (RESOLVED-FALSIFIED), 254-1 STRESSED, 254-2, 254-3, 254-4, 254-5 (trajectory FALSIFY), 254-NEW, 254-NEW2 (RESOLVED-FALSIFIED), 255-1 partial / 255-1' NEW, 255-2 PASSED, 255-3, 255-4, 255-5 STRESSED, 256-1 (RESOLVED-FALSIFIED), 256-2 trajectory CONFIRMED, 256-3, 256-4, 256-5 PASSED).

## Headline events — **commit-phase EXTENDS into Add.111: codex 3 merges (incl. burst-PR #19912 etraut-openai), litellm 1 merge (#26631 ryan-crabbe-berri — Pred OO instant-confirm with 2nd `-berri` author in 2 ticks), opencode breaks 1h36m+ pause with 2 merges (#24730 rekram1-node 12m07s fast-class + #23792 Brendonovich aged-22h); gemini-cli/goose/qwen-code persist deep (deep-cohort cardinality holds at 3 for 2nd consecutive tick — synth #258 conservation sustains); Pred 254-5 RESOLVED-FALSIFIED; Pred 255-1' trajectory leans GRADUAL; Pred 255-5 (kitlangton resumption) FALSIFIES at deadline**

1. **Cross-repo merge resumption EXTENDS: 7 merges in 55m vs Add.110's 3 merges in 40m** (per-minute rate 0.127 vs 0.075 — ≈1.7× higher). Per-repo: codex 3 (#19912 etraut-openai 04:45:15Z, #19763 efrazer-oai 04:09:26Z, #17689 marksteinbrick-oai 04:32:10Z); litellm 1 (#26631 ryan-crabbe-berri 04:21:28Z); opencode 2 (#24730 rekram1-node 04:44:21Z, #23792 Brendonovich 04:24:30Z); gemini-cli/goose/qwen-code 0. **The commit-phase that fired at Add.110 has not retracted at Add.111** — instead it **broadened**, adding opencode to the commit-phase cohort. **3 of 6 repos in commit-phase at Add.111** (codex, litellm, opencode) vs 2 of 6 at Add.110 (codex, litellm). **Per-repo-tick crossing rate this tick: 1 (opencode mid→shallow) + 0 (codex stays shallow) + 0 (litellm stays shallow) + 0 (gemini-cli stays deep) + 0 (goose stays deep) + 0 (qwen-code stays deep) = 1/6 = 17%** — **below the [20%, 40%] band**. **Pred 254-1 TRAJECTORY: 4-tick rolling = (33% + 50% + 42% + 17%) / 4 = 35.5%** — **back inside the band after Add.110 stress**. **Pred 254-1 RECOVERS at Add.111**. The Add.110 stress was a single-tick high-crossing event, not the start of a band-exit.

2. **Pred OO (litellm "*-berri" suffix author commit-phase dominance) INSTANT-PARTIAL-CONFIRM at Add.111 with #26631 ryan-crabbe-berri.** Of the 2 litellm merges since Pred OO opened (Add.110's #26460 milan-berri + Add.111's #26631 ryan-crabbe-berri), **2 of 2 are `-berri` suffix authors**. The next 3 litellm merges will determine resolution — but the trajectory is **strongly toward CONFIRMED** in 2 ticks. **Sub-observation: ryan-crabbe-berri is also a NEW author in the W17 sample** (no prior PRs noted in Add.103-Add.110), making this the **5th distinct `-berri` cohort member in the W17 corpus** (alongside ishaan-berri, milan-berri, yuneng-berri, Michael-RZ-Berri). **The `-berri` cohort is itself growing** — Pred OO' (NEW): the `-berri` cohort cardinality reaches ≥6 distinct logins by W18 close. Falsifier: cohort cardinality plateaus at ≤5 through W18.

3. **Pred 254-5 (≥4 of 7-PR codex Add.107 open-burst merge by Add.111) RESOLVED-FALSIFIED at Add.111.** At Add.111 close, the codex burst-PR merge inventory: **#19917 (Add.110, canvrno-oai) + #19912 (Add.111, etraut-openai) = 2 of the 11-PR extended burst merged**. The **original 7-PR Add.107 burst** has merged 0 of 7 still — #19912 was opened in Add.107's expansion (02:32:10Z 04-28, NOT in the original Add.107 02:00Z window) — strict reading: 0 of 7 from Add.107 strict-burst merged. Even on the broadest reading (11-PR extended-burst), only 2 merged vs predicted ≥4. **Pred 254-5 RESOLVED-FALSIFIED.** The codex open-burst does NOT convert at the predicted rate within 4 ticks; the QA→commit-phase lag is empirically longer than synth #254 modeled.

4. **Pred 255-1' (gradual vs clustered codex commit-phase) TRAJECTORY: GRADUAL.** Pred 255-1' required ≥2 additional codex burst-PR merges by Add.113 for "gradual" classification. At Add.111 we see **1 additional burst-PR merge** (#19912 etraut-openai), bringing cumulative burst-merges to 2 across Add.110 + Add.111 (#19917 + #19912). Plus **#19763 efrazer-oai (NON-burst, 24h-aged)** and **#17689 marksteinbrick-oai (NON-burst, 14d-aged — extreme aged-class)**. **The codex commit-phase is NOT clustering on burst-PRs; it is interleaving 1 burst-PR per tick with 2 NON-burst aged PRs per tick.** This is a **stronger-than-predicted gradual signal** — gradual not just across ticks but across PR-age-classes within tick. **Pred 255-1' on track for CONFIRMED at Add.112 if 1 more burst-PR merge appears.** **Pred 255-1'' (NEW refinement): codex commit-phase preferentially fires on aged PRs (lifespan >12h) over burst-PRs (lifespan <2h) at a ratio ≥2:1 across Add.110-Add.113 cumulative. Falsifier: ratio <1:1 cumulative.** At Add.111 cumulative: 3 aged-merges (#19773, #19763, #17689) vs 2 burst-merges (#19917, #19912) = **1.5:1 — currently passing direction but below 2:1 threshold**.

5. **Pred 255-5 (kitlangton resumption by Add.111) RESOLVED-FALSIFIED at Add.111.** At Add.111 close, kitlangton has **0 merges across Add.109 + Add.110 + Add.111** (3 consecutive ticks of silence). **kitlangton's per-tick metronome is empirically broken for ≥3 ticks.** This jointly RESOLVES Pred A''''' / Pred FF' / Pred 255-5 toward the **kitlangton-pause-regime** branch. **Pred 255-5 RESOLVED-FALSIFIED.** **Pred PP (NEW): the kitlangton-pause-regime persists ≥5 consecutive ticks (Add.109-Add.113) with 0 in-window kitlangton merges. Falsifier: any in-window kitlangton merge by Add.113.** This formalizes the regime-switch from per-tick-metronome to multi-tick-pause for kitlangton.

6. **opencode #24730 rekram1-node `fix: sanitize tools for moonshot` — fast-class merge at lifespan 12m07s (opened 04:32:14Z, merged 04:44:21Z).** **Fastest opencode merge in W17 corpus.** Fix-class single-purpose PR with vendor-specific scope (moonshot tool sanitization). The 12m07s lifespan is **comparable to the gemini-cli viethungvili #26090 7m28s close-cycle** (Pred MM) but on the **merge axis** rather than close axis. **Pred QQ (NEW): of the next 8 cross-repo PRs with lifespan ≤15m, ≥5 are bug-class (fix(...) or hotfix) AND ≥3 are vendor-specific scope (named provider/model in title). Falsifier: ≤3 of 8 are bug-class OR ≤1 of 8 are vendor-specific.** Tests whether fast-class merges concentrate on narrow-scope bug-fixes (the **commit-fast-path** sub-pattern under synth #244).

7. **opencode #23792 Brendonovich `refactor(app): load sync state through TanStack Query` — aged 6d22h merge.** Opened 04-22 05:50:08Z, merged 04-28 04:24:30Z. **Aged refactor-class PR** — fits the "aged-class merges fire during commit-phase resumption" pattern from synth #244. **Brendonovich is also a NEW author in W17 sample; 1st PR in corpus.** Combined with rekram1-node and rektide (all NEW W17 authors at Add.111), **opencode is broadening its author-pool aggressively** — 3 NEW W17 authors in 1 tick is the **highest single-tick author-debut rate for opencode in W17**.

8. **Deep-cohort cardinality conservation (synth #258) holds for 2nd consecutive tick.** At Add.111 close: gemini-cli (deep, **7h37m+ silence**, 9-tick zero-merge), goose (deep, **6h43m+ silence**, 4th consecutive Add of zero in-window activity), qwen-code (deep, **3h32m+ silence**). **Same 3 repos in deep cohort as Add.110 close.** **No composition rotation this tick** — this is a **lower-stress test** of synth #258's conservation claim than Add.110's full rotation. **Synth #258 conservation property: SUSTAINS at Add.111 with the additional observation that under low-crossing-rate ticks (Add.111 = 17%), the deep-cohort composition is also stable** — i.e., conservation operates trivially when no crossings occur. **The non-trivial test of synth #258 remains the high-crossing-rate tick (Add.110)**, which it passed.

In the 55m window 04:00Z→04:55Z:

| Repo | In-window MERGED | In-window OPEN | In-window CLOSED-no-merge | Merge-silence at 04:55Z |
|------|------------------|----------------|---------------------------|--------------------------|
| anomalyco/opencode | **2** (#24730 rekram1-node 04:44:21Z, #23792 Brendonovich 04:24:30Z) | **1** (#24728 rektide 04:23:51Z) | 0 | **11m** (since #24730 04:44:21Z) — **shallow** |
| openai/codex | **3** (#19763 efrazer-oai 04:09:26Z, #17689 marksteinbrick-oai 04:32:10Z, #19912 etraut-openai 04:45:15Z) | 0 (none new in window) | 0 | **10m** (since #19912 04:45:15Z) — **shallow** |
| BerriAI/litellm | **1** (#26631 ryan-crabbe-berri 04:21:28Z) | 0 | 0 | **34m** (since #26631 04:21:28Z) — **shallow** |
| google-gemini/gemini-cli | **0** | 0 | 0 | **7h37m** (since #26079 21:17:32Z 04-27) — **deep** (9-tick zero-merge) |
| block/goose | **0** | 0 | 0 | **6h43m+** (since #8854 22:11:20Z 04-27) — **deep** (4-tick zero-activity) |
| QwenLM/qwen-code | **0** | 0 | 0 | **3h32m+** (since #3682 01:22:18Z) — **deep** |

**Cross-repo merge count this window: 7 merges, 1 open, 0 close-no-merge.** **Open-to-merge ratio at Add.111: 0.143** — **lowest open-to-merge ratio in the W17 corpus**. The ratio inversion (merges >> opens) is the **inverse signature of QA-phase**. This Add.111 is the **strongest commit-phase signal in W17**.

## codex in-window — **3 merges (commit-phase EXTENDS); 1 burst-PR (#19912) + 2 aged NON-burst (#19763 24h, #17689 14d); 0 new opens; merge-silence at 10m (shallow)**

In-window MERGED: **3** — **strongest single-tick codex commit-phase in W17 corpus**.

- **#19763** efrazer-oai `refactor: load agent identity runtime eagerly` (opened 04-27 04:26:56Z, MERGED 04:09:26Z, lifespan **23h42m**, +43/-188 net code-shrink). **Refactor-class aged PR.** Closes the efrazer-oai agent-identity pair (#19764 still OPEN). Code-shrink (-145 net) is the **largest net-shrink in any W17 codex merge** — sub-pattern: refactor-class aged merges produce code-shrink.
- **#17689** marksteinbrick-oai `[codex-analytics] include user agent in default headers` (opened 04-13 20:26:03Z, MERGED 04:32:10Z, lifespan **14d8h6m** — **extreme aged-class**, single-PR record for W17). **The longest-lived merging codex PR in the W17 corpus.** **Sub-pattern: commit-phase resumption fires on PRs aged across multiple sprint-weeks**, not just within-week. **Pred RR (NEW): of the next 12 codex merges, ≥1 has lifespan >7 days. Falsifier: 0 of 12 have lifespan >7 days.** Tests whether the aged-class long-tail merges are sustained or one-shot.
- **#19912** etraut-openai `Clarify PR template invitation requirement` (opened 04-28 02:32:10Z, MERGED 04:45:15Z, lifespan **2h13m**, +1/-1 trivial-class doc edit). **Burst-PR merge (2nd of the extended burst after #19917).** **Trivial code change (1 line)** — fits the **trivial-fast-merge** sub-pattern. **etraut-openai is the same author who opened #19920 at Add.110 (`Allow large remote app-server resume responses`)** — etraut-openai is now a **2-PR W17 author with 1 merge in 2 ticks** (debut + merge ratio 50% on first appearance — high).

In-window NEW OPENs (0). **Notable absence**: the codex open-burst inventory STOPPED expanding. Add.107-Add.110 added 13 PRs across 4 ticks (avg 3.25/tick); Add.111 adds 0. **The codex open-burst has a defined endpoint** — confirmed at Add.111 with 0-open count. **Sub-observation: the open-burst-end coincides with the commit-phase peak** (3 merges this tick). **Pred SS (NEW): codex open-burst phases and commit-phase peaks are anti-correlated at the per-tick level (Spearman r ≤ -0.6 across 6+ ticks). Falsifier: r > -0.3 across 6 ticks.** This formalizes synth #255's QA-phase / commit-phase oscillation at the codex-internal level with a quantitative threshold.

In-window CLOSED-no-merge (0).

**codex extended-burst inventory at Add.111:** 11 PRs opened Add.107-Add.109 (#19895, #19896, #19899, #19900, #19901, #19904, #19905, #19907, #19912, #19914, #19917) + 2 added Add.110 (#19919, #19920) = 13 total. **2 merged at Add.111 close (#19917, #19912)** = success ratio 2/13 = **15.4%** (vs Add.110's 1/13 = 7.7%). **Pred 254-5 strict-FALSIFIED** (above) — but the **gradual-merge trajectory under Pred 255-1' is on track**.

**Pred S (bolinfest #19899/#19900 doublet):** both STILL OPEN at lifespan **4h08m+** each. **Branch (iii) "both still OPEN ≥4h" of Pred S resolution: CONFIRMED at Add.111** — the doublet has now persisted past the 4h threshold without any merge or close. **Pred S RESOLVED-CONFIRMED at branch (iii).** This strengthens synth #251's paired-PR-deferred-batch sub-pattern: paired-PRs are NOT eligible for the same commit-phase that single-PRs see. **Pred S' (NEW carry): if either #19899 or #19900 merges within 12h (by Add.~123), the doublet completes a deferred-batch cycle longer than synth #251's modeled cycle. Falsifier: 12h passes with neither merged.**

**Pred H (evawong-oai 5-PR stack):** all 5 still OPEN, lifespan now **10h42m+**. **No in-window updates** to any of the 5 in the 55m window — **first quiet tick for the evawong-oai stack since Add.107**. **Pred H trajectory: STILL passing predicted-direction**, but the quiet tick is a slight stress (the stack was previously continuously-iterating).

**Pred E aftermath (eternal-openai #19905 lifecycle-hooks):** still OPEN, **3h32m+**, **2nd consecutive quiet tick** (no in-window UPDATE). **Pred EE' STRESSED**: the iteration cadence has empirically halted. **Pred EE' RESOLVED-FALSIFIED branch likely at Add.112 if no UPDATE appears.**

**Pred KK (jackmhny refile within 4 ticks of Add.109):** no jackmhny PR in Add.111 window. **2 ticks remaining to Pred KK deadline (Add.113).** Carry; trajectory neutral.

**Trailing merge-silence at capture: 10m.** codex stays **shallow** for 2nd consecutive tick — first 2-tick shallow streak for codex since pre-burst-period.

## opencode in-window — **2 merges break 1h36m+ pause; rekram1-node 12m07s fast-class + Brendonovich aged 6d22h; 1 NEW open (rektide #24728); kitlangton silent 3rd consecutive tick (Pred 255-5 FALSIFIES)**

In-window MERGED: **2** — **strongest single-tick opencode commit-phase in W17 corpus alongside the multi-author author-debut signature**.

- **#24730** rekram1-node `fix: sanitize tools for moonshot` (opened 04:32:14Z, MERGED 04:44:21Z, lifespan **12m07s**). **Fastest opencode merge in W17 corpus.** Headline event 6 above; introduces Pred QQ.
- **#23792** Brendonovich `refactor(app): load sync state through TanStack Query` (opened 04-22 05:50:08Z, MERGED 04:24:30Z, lifespan **6d22h34m**). **Aged refactor-class** (similar age-class profile to codex's #19763 same-tick merge — refactor + aged + commit-phase resumption signature). **3-tick rolling cross-repo aged-refactor count: opencode #23792 + codex #19763 + #17689 = 3 in 1 tick** (all in Add.111). Headline event 7.

In-window NEW OPENs (1):
- **#24728** rektide `feat: \`opencode session move\` / \`session detached\`` (04:23:51Z). Surface: **session/move-detach**. **First rektide PR in W17 sample.** Feature-class with multi-command scope.

In-window CLOSED-no-merge (0).

**Active opencode OPENs from prior Adds (carry):**
- **#24720** isac322 — STILL OPEN; no further in-window title-edits in this window. **Pred NN (title-edit asymmetry) — no new title-edits at Add.111 to test.** Lifespan now **1h52m+**. Carry.
- **#24717, #24716** kitlangton httpapi pair — STILL OPEN at lifespan **2h14m+**, no in-window updates. **Pred A''''' / FF' / 255-5 jointly RESOLVED-FALSIFIED at Add.111.**
- **#24712, #24707** kitlangton — STILL OPEN at **2h28m+** / **2h48m+**, no in-window updates. **Pred Z' carry.**
- **#24704** jlongster — STILL OPEN at **3h03m+**.
- **#24702, #24701** dixoxib / workdocyeye — both STILL OPEN at **3h21m+**.
- **#24692** d7pow — STILL OPEN at **5h08m+**.
- **#24691** LCubero — STILL OPEN at **5h20m+** (Pred R deadline 23:34Z 04-28, **18h39m remaining**). Carry.
- **#24725** Sleepful — STILL OPEN at **1h32m+**, no in-window iteration.
- **#24726** Alchuang22-dev — STILL OPEN at **1h26m+**.
- **#24724** KTibow — STILL OPEN at **1h39m+**, no in-window updates.

**Trailing merge-silence at capture: 11m** (shallow). opencode crossed **mid → shallow** in this tick — joining codex and litellm in the shallow-cohort. **Stratification distribution at Add.111: 3 shallow + 0 mid + 3 deep — bimodal split with no mid-cohort.** This is the **most bimodal stratification in W17 corpus**.

## litellm in-window — **1 merge (#26631 ryan-crabbe-berri); 2nd consecutive `-berri` author commit-phase event (Pred OO trajectory CONFIRMED-DIRECTION); 0 new opens; merge-silence at 34m (shallow)**

In-window MERGED: **1**.
- **#26631** ryan-crabbe-berri `fix(ui): move 'Store Prompts in Spend Logs' toggle to Admin Settings` (opened 04-27 19:07:43Z, MERGED 04:21:28Z, lifespan **9h13m**). **Mid-aged fix-class UI PR.** **2nd consecutive `-berri` author commit-phase merge** (after Add.110's milan-berri #26460). **Pred OO PARTIAL-CONFIRM** (2 of 5 needed; trajectory points to CONFIRMED at Add.115). **ryan-crabbe-berri is a NEW W17 author** — the `-berri` cohort is GROWING in cardinality.

In-window NEW OPENs (0).
In-window CLOSED-no-merge (0).

**Active litellm OPENs from prior Adds (carry):**
- **#26667** Bytechoreographer (refile of #26665) — STILL OPEN at lifespan **1h54m+**. **Pred GG' (terminal-correction within 4 ticks) carry — 3 ticks remaining.**
- **#26569, #26468, #26534, #26629** various — STILL OPEN; in-window iteration check pending (skipped detailed check this tick to honor time budget).
- **Pred AA (ishaan-berri triple)** — RESOLVED-FALSIFIED at Add.110; archived.
- **Pred HH** — RESOLVED-PARTIAL at Add.110; archived.

**Pred T (litellm deferred-batch literal recurrence):** 1 in-window merge but no doublet (no 2nd merge within 30m of #26631). **Pred T STILL pending literal recurrence at Add.111**; carry. 2 consecutive single-merge ticks at litellm (Add.110 + Add.111) — **the doublet-class commit-phase from synth #249 is empirically rare in this period**. **Pred T trajectory: leans toward FALSIFICATION of literal-recurrence**.

**Trailing merge-silence at capture: 34m** (shallow). litellm stays in **shallow** for 2nd consecutive tick.

## gemini-cli in-window — **0 merges, 0 opens, 0 closes, 0 metadata-touches in 55m; deep-pause hits 7h37m (9-tick zero-merge)**

In-window MERGED: **0**.
In-window NEW OPENs (0).
In-window CLOSED-no-merge (0).
**No in-window activity at all** — first time gemini-cli matches goose's full-silence signature in W17. **Pred I extends to 9-tick zero-merge.**

**Pred MM (viethungvili #26090 close-cause discriminator):** no viethungvili PR in window. 3 ticks remaining to deadline (Add.114). Carry.

## goose in-window — **0 merges, 0 OPENs, 0 closes, 0 metadata-touches; 4th consecutive zero-activity tick; Pred LL' on track**

In-window MERGED: **0**. **No in-window activity** for the **4th consecutive tick** (Add.108-Add.111). **Pred LL' (5-tick zero-activity attractor by Add.112) on track for CONFIRMATION** with 1 tick remaining.

**Trailing merge-silence: 6h43m+** since #8854 22:11:20Z. goose stays **deep**.

## qwen-code in-window — **0 merges, 0 new opens, in-window touches limited; pause deepens to 3h32m+**

In-window MERGED: **0**. In-window NEW OPENs (0).

**Trailing merge-silence at capture: 3h32m+.** qwen-code stays **deep**.

**Pred II' (doudouOUC sibling-cluster):** carry; no new resolution this tick.

## Cross-repo merge-pause inventory at capture 04:55Z (synth #255 fluid + QA/commit + synth #258 conservation)

| Repo | Merge-silence at 04:55Z | In-window merges | Stratification class | Direction since Add.110 |
|------|--------------------------|--------------------|------------------------|---------------------------|
| anomalyco/opencode | **11m** | 2 | **shallow** | mid→shallow (commit-phase fires) |
| openai/codex | **10m** | 3 | **shallow** | shallow→shallow (commit-phase EXTENDS) |
| BerriAI/litellm | **34m** | 1 | **shallow** | shallow→shallow (commit-phase EXTENDS) |
| google-gemini/gemini-cli | **7h37m** | 0 | **deep** (9-tick zero-merge) | deep→deeper |
| block/goose | **6h43m+** | 0 | **deep** (4-tick zero-activity) | deep→deeper |
| QwenLM/qwen-code | **3h32m+** | 0 | **deep** | deep→deeper |

**Stratification distribution at Add.111: 3 shallow + 0 mid + 3 deep — perfectly bimodal split.** **Compared to Add.110: 2 shallow + 1 mid + 3 deep.** **Net direction: full-bimodal-polarization** — mid cohort empties, shallow cohort gains opencode. **Per-repo-tick crossing rate: 17%** — first sub-band reading after the 33%/50%/42% high-crossing streak. **Synth #258 conservation: deep-cohort cardinality holds at 3 with NO composition rotation** (trivial-pass under low-crossing-rate).

## Pred-status table for ADDENDUM-111 close

- **Pred A''''' (kitlangton httpapi-metronome)** → **already RESOLVED-FALSIFIED at Add.110** (Pred 255-5 confirms at Add.111). Archived → carry as Pred PP.
- **Pred B** → still falsified across 10 ticks; structural falsification holds.
- **Pred E / EE'** → STRESSED; #19905 2nd quiet tick; FALSIFICATION branch likely at Add.112.
- **Pred FF'** → kitlangton 3-tick zero-merge cumulative; **RESOLVED-FALSIFIED jointly with Pred 255-5**.
- **Pred GG'** → #26667 OPEN, no resolution this tick. Carry, 3 ticks remaining.
- **Pred H** → STRESSED (1st quiet tick for evawong-oai stack). 5/5 still OPEN at 10h42m+.
- **Pred I** → CONFIRMED, extends to 9-tick at Add.111.
- **Pred II / II'** → carry; no merge at qwen-code.
- **Pred JJ** → carry; #24707 / #24712 OPEN with no in-window updates this tick.
- **Pred KK** → carry; jackmhny no refile in Add.111. 2 ticks remaining.
- **Pred LL'** → on track for CONFIRMATION at Add.112 (4 of 5 ticks confirmed).
- **Pred MM (viethungvili refile by Add.114)** → no PR. 3 ticks remaining. Carry.
- **Pred NN (title-edit asymmetry)** → no new title-edits this tick. Carry.
- **Pred OO (litellm `-berri` dominance)** → **PARTIAL-CONFIRM at Add.111** (2 of 2 needed-direction). 3 more litellm merges to evaluate. Trajectory: CONFIRMED.
- **Pred OO' (NEW)** → `-berri` cohort cardinality ≥6 distinct logins by W18 close.
- **Pred PP (NEW)** → kitlangton-pause-regime persists ≥5 consecutive ticks (Add.109-Add.113).
- **Pred QQ (NEW)** → fast-class merge (lifespan ≤15m) bug-class + vendor-specific concentration (≥5 of 8 bug-class, ≥3 of 8 vendor-specific). Tests commit-fast-path under synth #244.
- **Pred RR (NEW)** → ≥1 of next 12 codex merges has lifespan >7 days.
- **Pred S** → **RESOLVED-CONFIRMED branch (iii)** at Add.111 (doublet still OPEN ≥4h). Pred S' (NEW carry) opened.
- **Pred S' (NEW)** → bolinfest doublet completes deferred-batch cycle by Add.~123 (12h).
- **Pred SS (NEW)** → codex open-burst phases and commit-phase peaks are anti-correlated (Spearman r ≤ -0.6 over 6 ticks).
- **Pred T** → carry; trajectory leans FALSIFICATION on literal doublet recurrence.
- **Pred V** → RESOLVED-FALSIFIED at Add.110. Archived.
- **Pred Y** → carry; 0 cross-repo doublets at Add.111.
- **Pred Z'** → carry; #24707 still OPEN. Deadline Add.115.
- **Pred AA** → RESOLVED-FALSIFIED at Add.110. Archived.
- **Pred CC** → RESOLVED-FALSIFIED at Add.110. Archived.
- **Pred 254-1** → **RECOVERS at Add.111** (4-tick rolling 35.5% inside band).
- **Pred 254-2** → carry; 0 doublets at Add.111, 7 single-merges.
- **Pred 254-4** → carry; deep-cohort cardinality conservation holds at 3 (trivial-pass).
- **Pred 254-5** → **RESOLVED-FALSIFIED at Add.111** (only 2 of 11 burst-PRs merged, predicted ≥4).
- **Pred 254-NEW** → 1/3 of evaluated ticks zero-merge. On track. Carry.
- **Pred 255-1'** → **TRAJECTORY: GRADUAL** (cumulative 2 burst + 3 NON-burst aged merges across Add.110-Add.111). Pred 255-1'' (aged > burst ratio ≥2:1) introduced.
- **Pred 255-1'' (NEW)** → codex commit-phase aged-PR-preference (lifespan >12h) over burst-PRs at ratio ≥2:1 across Add.110-Add.113. Currently 1.5:1 — passing direction.
- **Pred 255-2** → PASSES; sustained at Add.111 (no consecutive zero-merge ticks).
- **Pred 255-3** → carry.
- **Pred 255-5** → **RESOLVED-FALSIFIED at Add.111** (3 ticks of kitlangton silence).
- **Pred 256-1** → already RESOLVED-FALSIFIED at Add.110.
- **Pred 256-2** → STRESSED; Add.111 PDT count: ~6 resolutions (254-5 falsified, 255-5 falsified, OO partial-confirm, S confirmed, 254-1 recovers, EE' stressed) = PDT ≈ 6. 3-tick rolling: (3 + 8 + 6)/3 = 5.7. **PDT spikes coincide with state-transitions (Add.111 = commit-phase EXTENSION, a sustained transition)** — 3 of 3 PDT-spike ticks observed have coincided with state-transitions. **Pred 256-2 CONFIRMED at Add.111.**
- **Pred 256-5** → PASSES at Add.111 (codex commit-phase fires 3 merges, PDT ≈ 6 >> 2).

## New predicates opened by ADDENDUM-111

- **Pred OO'** — `-berri` cohort cardinality reaches ≥6 distinct logins by W18 close (currently 5: ishaan-berri, milan-berri, yuneng-berri, Michael-RZ-Berri, ryan-crabbe-berri).
- **Pred PP** — kitlangton-pause-regime persists ≥5 consecutive ticks (Add.109-Add.113) with 0 in-window kitlangton merges.
- **Pred QQ** — fast-class merge (lifespan ≤15m) bug-class concentration (≥5 of 8) AND vendor-specific concentration (≥3 of 8). Tests commit-fast-path sub-pattern.
- **Pred RR** — ≥1 of next 12 codex merges has lifespan >7 days (extreme aged-class persistence).
- **Pred S'** — bolinfest doublet (#19899/#19900) completes deferred-batch cycle within 12h of branch (iii) confirmation.
- **Pred SS** — codex open-burst phases and commit-phase peaks anti-correlated (Spearman r ≤ -0.6 over 6+ ticks).
- **Pred 255-1''** — codex commit-phase aged-PR-preference over burst-PRs at ratio ≥2:1 across Add.110-Add.113.

## Capture close

**04:55:00Z (2026-04-28).** Window width 55m — 10m above ≤45m target; **operational note: enforce ≤45m at Add.112**. **ADDENDUM-111 captures the commit-phase EXTENSION** (3 repos in commit-phase vs Add.110's 2), with **7 merges total** including the **fastest opencode merge in W17** (#24730, 12m07s) and the **longest-lived codex merge in W17** (#17689, 14d8h). The **7-merge / 1-open ratio (0.143) is the strongest commit-phase signal in W17 corpus** — open-to-merge inversion confirms synth #255's commit-phase model. **Synth #258's deep-cohort conservation property sustains** trivially under the low-crossing-rate (17%) tick. **6 predicates resolved this tick (254-5, 255-5, S, V archived, AA archived, CC archived) + multiple partial-confirms and trajectory-confirms; 7 NEW predicates opened**. **Add.112 will be jointly decisive for Pred LL' (goose 5-tick attractor), Pred EE' (eternal-openai #19905 cadence break), Pred PP (kitlangton 5-tick pause), and Pred 255-1'' (codex aged vs burst ratio).**
