# W17 Synthesis #255 — Deferred-batch promotes to **W17 canonical resumption mechanism** based on independent-author independent-repo replication (3 repos × 6 authors at Add.108) PLUS the **cross-repo zero-merge tick at Add.109** as the predicted batch-pause counterpart; close-and-refile with title-class self-correction (litellm #26665→#26667 at Add.109) confirms intra-author quality-loop as a **batch-internal self-correction mechanism**

**Status:** PROMOTED from synth #254 (Add.108) candidate language ("supports promoting deferred-batch to a W17 canonical resumption mechanism at synth #255 candidate status") to formal canonical-mechanism status at Add.109. Builds on synth #249 (litellm deferred-batch, Add.107), synth #252 (fluid stratification, Add.107), synth #253 (kitlangton metronome — methodologically corrected to author-non-independent regime), synth #254 (fluid stratification with deferred-batch generalization, Add.108).

**Anchor addendum:** ADDENDUM-109 (capture 03:20Z 2026-04-28).

## Why this is distinct from synth #254

Synth #254 introduced deferred-batch as a **cross-repo generalization candidate** based on 3 repos × 6 authors at Add.108. Synth #254 explicitly held back from full canonization, citing the need to observe **the predicted batch-pause counterpart** — i.e., a tick where the deferred-batch model predicts zero merges and zero merges are observed. **ADDENDUM-109 IS that observation.** The 39-minute window 02:41Z→03:20Z yielded **0 merges across all 6 repos** for the first time in the Add.103-Add.109 sample (7 ticks). This is not a null result — it is **the predicted batch-pause counterpart** to the synth #249 deferred-batch resumption events.

Synth #255 is the formalization of the **batch-pause-batch-pause oscillation as the W17 canonical merge-flow regime**, with three structural objects:

1. **Resumption events** (synth #249 deferred-batch doublets — confirmed cross-repo at Add.107-108).
2. **Pause events** (extended single-repo silence — observable at any tick boundary, e.g. gemini-cli 7-tick zero-merge under Pred I).
3. **Cross-repo zero-merge ticks** (the predicted intersection event when all 6 repos sit in the pause phase of their independent oscillations — first observed at Add.109).

Synth #254 had #1 and #2 but no observation of #3. Synth #255 closes the model with #3.

## The empirical anchor in three rows

| Add | Window | Cross-repo merges | Cross-repo opens | Per-repo merge events | Comments |
|---|---|---|---|---|---|
| Add.107 | 00:50Z→02:11Z (81m) | 3 (opencode #24693, #24703, #24705 — all kitlangton) | 6 across 3 repos | opencode 3, others 0 | kitlangton metronome dominates; codex/litellm/qwen-code in pause |
| Add.108 | 02:11Z→02:41Z (30m) | 2 (opencode #24706, #24711 — both kitlangton) | 5 (3 opencode + 1 codex + 1 litellm) | opencode 2, others 0 | kitlangton accelerates; cross-repo still pause-biased |
| Add.109 | 02:41Z→03:20Z (39m) | **0** | 7 (2 opencode + 2 codex + 1 litellm + 1 gemini-cli + 1 qwen-code) | none | **First cross-repo zero-merge tick**; kitlangton metronome silenced; opens distributed across 5 of 6 repos |

The Add.107→Add.108→Add.109 sequence shows:
- **Merge concentration collapses from 3 → 2 → 0**, all attributable to opencode/kitlangton's metronome turning off.
- **Open distribution simultaneously diversifies from 3 repos → 3 repos → 5 of 6 repos**. The opens are no longer concentrated in the merging repo.
- The **flow ratio (opens/merges) goes from 6/3=2.0 → 5/2=2.5 → 7/0=∞** — the inverse coupling is the deferred-batch signature.

Per synth #249/254, this pattern would arise if **each repo independently oscillates between batch-merge and pause states**, AND **kitlangton's opencode metronome was the only sustained batch-merge channel** during the Add.107-108 window, AND **kitlangton's pause at Add.109** removes the only repo from batch-merge state, leaving all 6 in pause-state simultaneously.

## The close-and-refile mechanism as batch-internal self-correction

litellm #26665 (Bytechoreographer, opened Add.108 02:33:45Z, closed without merge Add.109 03:00:26Z, lifespan 26m41s) was immediately refiled as #26667 with the **title-class realigned from `feat(ui)` to `fix(ui)`** to match the original branch name (`fix/team-members-tab-slow-render`). This is a 1-tick resolution of Pred GG (Add.108) under outcome (a)+(c) hybrid: close-and-refile (a) executed by author with title-class realignment (c).

Under synth #255, this close-and-refile is **internal to the litellm batch-pause phase** at Add.109 — there were no merges in litellm during the 39m Add.109 window, so the close-and-refile is a **non-merge-flow event** that happens DURING pause-state. The close-and-refile fits naturally into the deferred-batch model:

- **Pause-state internal events** include: metadata-touches (Michael-RZ-Berri 3-PR stack at Add.108), title-edits (#24692 d7pow at Add.109), close-and-refile cycles (#26665→#26667), in-progress iteration on existing OPEN PRs (#19905, #19899/#19900 same-second touches at Add.109).
- **Batch-state events** include: clustered merges (deferred-batch doublets), the kitlangton metronome (3 merges/81m at Add.107), single-repo concentrated merge bursts.

The mechanism is: during pause-state, the **author-scope quality loop** runs (re-titling, refiling, metadata-touching to keep PRs visible to maintainers), and the **batch-state then commits the accumulated quality** in clustered merges. **Synth #255 names the pause-state as the "QA-phase" and the batch-state as the "commit-phase"** of the deferred-batch oscillation.

## The 7-PR open-burst at codex as a QA-phase signature

Add.107's codex 7-PR open-burst (#19895, #19896, #19899, #19900, #19901, #19904, #19905, #19907 — actually 8 PRs) occurred during a mid-pause (1h28m at Add.107). Add.108 added #19912; Add.109 added #19914 + #19917. **11 PRs opened across 5 ticks while codex was in mid-or-deepening pause.** Of these 11, **0 have merged**, and **5 of 11 received in-window metadata-touches at Add.109** (#19895, #19899, #19900, #19904, #19905). This is **45% touch rate during pause-phase** — a hallmark QA-phase signature.

**Pred 254-5 (≥4 of 7-PR Add.107 open-burst merge by Add.111) was framed under synth #254's batch-prep interpretation.** Under synth #255's QA-phase / commit-phase model, **Pred 254-5 is now reframed:** the 11-PR open-burst is the **QA-phase accumulation**, and the merge cluster is the **commit-phase counterpart**. The commit-phase has not yet fired for codex (codex has been in pause-state for 2h37m at Add.109). **Pred 254-5 is not directly testing the QA→commit transition; Pred 255-1 (NEW) is the proper test.**

## Synth #255 operational predicates

**Pred 255-1 (codex commit-phase fires by Add.113 with ≥3 merges drawn from the 11-PR open-burst):** if codex's commit-phase fires with ≥3 of the 11 burst-PRs merging within 30 minutes of each other (a deferred-batch cluster), the QA-phase / commit-phase model is confirmed for codex. Falsifier: codex extends pause to Add.113 with 0 merges from the 11-PR burst, OR ≥3 of the burst-PRs merge but distributed across >2 ticks (would suggest the merges are gradual cadence-restoration not deferred-batch).

**Pred 255-2 (cross-repo zero-merge ticks occur in clusters of ≤2 consecutive):** under the QA-phase / commit-phase oscillation, a single zero-merge tick is consistent with all 6 repos being in pause-phase simultaneously, but ≥3 consecutive zero-merge ticks across a 6-repo population would require a structural attractor distinct from independent oscillation. Falsifier: ≥3 consecutive zero-merge ticks within Add.109-Add.116. (Refines and tightens Pred 254-NEW's 8-tick window framing to a stricter sequential-cluster framing.)

**Pred 255-3 (close-and-refile cycles concentrate in pause-state):** of the next 5 close-and-refile cycles observed across all 6 repos within Add.109-Add.115, ≥4 occur during a tick where the originating repo is in mid-or-deeper pause-state (≥1h merge-silence). Tests the claim that close-and-refile is QA-phase signature. Falsifier: ≥3 of the next 5 close-and-refile cycles occur during shallow-state (<45m merge-silence).

**Pred 255-4 (per-repo open rate inverse-correlates with per-repo merge rate over 3-tick windows):** across Add.109-Add.115 (7 ticks), compute Pearson r between (opens-per-tick, merges-per-tick) for each repo. Under the QA-phase / commit-phase model, r should be **negative** (high opens during pause = QA accumulation; high merges during commit = burst). Specific quantitative prediction: **r < -0.30** for at least 3 of 6 repos over the 7-tick window. Falsifier: r ≥ -0.10 for ≥4 of 6 repos (would indicate opens and merges are decoupled or positively correlated, contradicting QA/commit model).

**Pred 255-5 (kitlangton metronome is a deferred-batch SPECIAL CASE with τ ≪ 1 tick):** kitlangton's Add.107-108 cadence (3 merges in 81m, 2 merges in 30m) is interpretable as **deferred-batch with very short pause periods** (< 30 minutes between batches). Under this view, the Add.109 silence is kitlangton's **pause-phase** (predicted to be < 1 tick under typical kitlangton cadence). **Pred 255-5: kitlangton resumes with ≥1 merge by Add.111 (within 2 ticks of Add.109 pause-onset).** Falsifier: kitlangton has 0 merges across Add.110 + Add.111, indicating the metronome is not just paused but terminated.

## Distinguishing from synth #254

| Aspect | Synth #254 | Synth #255 |
|---|---|---|
| Resumption mechanism | Deferred-batch (cross-repo generalization candidate) | **Deferred-batch (canonical, with QA-phase/commit-phase explicit nomenclature)** |
| Pause mechanism | Per-repo independent extension during silence | **Per-repo independent pause as QA-phase** |
| Cross-repo zero-merge | Implied possible but unobserved | **Observed at Add.109; predicted as recurring batch-pause-intersection event** |
| Close-and-refile | Not modeled | **Modeled as batch-internal self-correction during QA-phase** |
| 11-PR open-burst at codex | Tested via Pred 254-5 (batch-prep framing) | **Reframed as QA-phase accumulation; tested via Pred 255-1 (commit-phase firing)** |
| kitlangton metronome | Methodologically demoted (synth #253) | **Reinterpreted as deferred-batch special case with τ≪1 tick** |
| Stratification labels | Snapshot of batch-pause oscillation phase | **Same — QA-phase repos appear mid-or-deep, commit-phase repos appear shallow** |

The unifying thread: synth #254 had the mechanism (deferred-batch) and the dynamics (fluid stratification); synth #255 adds the **temporal phase nomenclature** (QA-phase / commit-phase) and the **cross-repo zero-merge tick prediction** that makes the oscillation observable at the corpus level rather than only the per-repo level.

## Refining and refuting prior synths

- **Synth #246 (cross-repo synchronous merge-pause)** — RETRACTED at synth #252; Add.109 zero-merge tick **does NOT revive synth #246** because the Add.109 zero-merge is the result of **independent per-repo oscillations happening to align by chance/probability**, not a synchronizing maintainer-tide. Pred 254-4 outcome at Add.112 will further test (if outcome (a) — both deep-cohort repos resume simultaneously — synth #246 partially revives; if outcome (b) — independent resumption — synth #246 stays retracted). **Synth #255 explicitly stays retracted on synth #246's synchronization claim.**
- **Synth #247 (stratified resumption)** — RETRACTED at synth #254; synth #255 reaffirms retraction. Class membership has zero predictive power for next-tick merge probability under the QA-phase / commit-phase model — only the **time-since-last-batch** and the **OPEN-PR backlog readiness for commit** carry predictive signal.
- **Synth #249 (litellm deferred-batch)** — PROMOTED to synth #255 as the canonical resumption mechanism with explicit QA-phase / commit-phase nomenclature.
- **Synth #252 (fluid stratification)** — PRESERVED as the snapshot framing, with synth #255 adding the underlying generative dynamics (deferred-batch oscillation).
- **Synth #253 (kitlangton metronome regime promotion)** — PARTIALLY RETRACTED at synth #255: the kitlangton metronome is reinterpreted not as a regime in its own right but as a **deferred-batch special case with τ ≪ 1 tick**. The methodological correction in synth #253 (regime promotion requires independent-author independent-repo replication) stands; synth #255 satisfies that bar with 3 repos × 6 authors at the deferred-batch level.
- **Synth #254** — PROMOTED to synth #255 with QA-phase / commit-phase nomenclature and zero-merge-tick observation.

## Refuting Pred FF directly

Synth #253's Pred FF (introduced at Add.108) predicted kitlangton sustained-burst-mode with per-minute throughput ≥0.10 PR/min for Add.109 + Add.110. **Add.109 measured 0.000 PR/min — Pred FF FALSIFIED in 1 tick.** Under synth #255's reinterpretation, **Pred FF was framed under the wrong regime**: kitlangton is not a sustained-burst author but a **deferred-batch author with very short batch-pause-batch cycles**. The Add.108 burst was a **commit-phase**; Add.109 silence is the **QA-phase**. Pred 255-5 is the corrected prediction (kitlangton resumes within 2 ticks).

## Distinctness from prior synths in detail

- **vs synth #244 (transient bursts)**: synth #244 modeled bursts as transient phenomena without a generative mechanism. Synth #255 provides the generative mechanism (deferred-batch oscillation) and predicts the burst-pause cycle structure.
- **vs synth #248 (gemini-cli pause-deepening exemplar)**: synth #248 framed gemini-cli as an exemplar of unidirectional pause-deepening. Synth #255 reinterprets gemini-cli's 7-tick zero-merge (Pred I) as **a single extended QA-phase that has not yet transitioned to commit-phase**, predicting eventual deferred-batch resumption (or, if the QA-phase extends past 12+ ticks, falsification of the QA-phase / commit-phase model in favor of a structural-inactivity attractor — which would support new Pred LL for goose).
- **vs synth #251 (cross-repo regime — promoted)**: synth #251 is the cross-repo stacked-pair regime. Synth #255 is the cross-repo deferred-batch oscillation regime. Both are corpus-level claims; they coexist as separate structural objects (the stacked-pair pattern is a finer-grained author-cohort signature within the deferred-batch oscillation).

## Risk and operational lens

**Detector implication 1**: a cross-repo zero-merge tick is no longer an anomaly to flag — it is a **predicted batch-pause-intersection event** under synth #255. Detectors should NOT alert on single zero-merge ticks but should alert on **3+ consecutive zero-merge ticks** (Pred 255-2 falsifier).

**Detector implication 2**: close-and-refile cycles within ≤30m of close should be auto-linked as part of a single QA-phase event (synth #244 sub-pattern (b) extended). Reviewers seeing #26665 closed should be auto-pointed to #26667 with the title-diff highlighted (`feat(ui)` → `fix(ui)`) as scope-class self-correction context.

**Detector implication 3**: the 11-PR codex open-burst plus the 5/11 in-window metadata-touch rate at Add.109 is a **QA-phase signature**. Detectors monitoring codex should track the open-burst as a single cluster and forecast commit-phase firing within Add.110-Add.113 (Pred 255-1).

**Risk lens**: under synth #255, the W17 corpus is in a **batch-pause-batch-pause oscillation regime**. The Add.109 zero-merge tick is not a degradation of merge throughput — it is a **predictable trough** in the oscillation. Risk teams should look at **multi-tick rolling averages** of merge throughput rather than per-tick snapshots to detect actual throughput degradation.

## Capture close

Synth #255 promotes deferred-batch from "cross-repo generalization candidate" (synth #254) to "**W17 canonical resumption mechanism**" with explicit QA-phase / commit-phase nomenclature. The Add.109 zero-merge tick is the **first observed batch-pause-intersection event** in the corpus and serves as the empirical bridge between synth #249's per-repo deferred-batch and synth #255's corpus-level oscillation framing. Pred 255-1 through Pred 255-5 are the operational tests for the next 4-7 ticks. Pred 255-5 in particular provides a direct path to either rehabilitating or fully retracting synth #253's kitlangton metronome regime.

The next decisive observations will be at Add.110-Add.113:
- Add.110 will test Pred A''''' (kitlangton metronome under stress), Pred CC (deep-pause synchrony falsifier), Pred V (gemini-cli-robot title-leak persistence falsifier), and the new Pred 255-2 zero-merge-cluster tightening.
- Add.111 will test Pred 254-5 (codex burst→merge transition) and the corrected Pred 255-1 (commit-phase firing with ≥3 burst-PR merges).
- Add.112 will test Pred 254-4 (deep-cohort resolution).
- Add.113 will test Pred FF', GG', II', KK, and Pred 255-1 deadline.

If Pred 255-1 confirms (codex commit-phase fires with ≥3 burst-PR cluster merges within 30 minutes), synth #255 graduates from W17-canonical to a **multi-week structural model candidate** for promotion at the W17→W18 boundary.
