# W17 Synthesis #249 — litellm deferred-batch resumption regime: 4-tick zero-merge silence (Add.102-105) terminates at Add.106 with a 2-merge doublet inside 2m39s (#26655 mateo-berri 00:36:47Z + #26651 lmcdonald-godaddy 00:39:26Z), refining synth #246's "decoupled-down" reading toward "deferred-batch with author-class stratification (internal-bounded-trivial + external-data-only)" — falsifying synth #246 R1/M1 (steady decoupled regime) in favor of a periodic-burst model

**Status:** PROMOTED from ADDENDUM-106 Pred L deadline-tick evaluation. **Pred L (Add.105: by Add.106, litellm in-window merge:open ratio across Adds 102-106 ≤0.2) PASSES literally** (ratio 2/19 ≈ 0.105) **but the underlying mechanism inverts** — the predicate was set under the assumption the deadline tick would extend the zero-merge regime; instead, the deadline tick itself produced **2 merges in a 2m39s doublet** after a 4h43m+ pause, ending the streak. The literal pass is structurally misleading; this synth captures the corrected mechanism.

## Core empirical claim

The litellm merge sequence across W17 ticks Add.102-Add.106:

| Tick | Capture instant (Z) | litellm merge-silence at capture | In-window MERGED | In-window OPENs | Cumulative merges (Add.102-N) | Cumulative opens (Add.102-N) |
|------|----------------------|------------------------------------|---------------------|--------------------|----------------------------------|-------------------------------|
| Add.102 | 22:18Z | (entering pause, anchor: #26622 19:13:14Z) | 0 | (baseline) | 0 | (baseline) |
| Add.103 | 22:39Z | 3h26m | 0 | 3 | 0 | 3 |
| Add.104 | 23:00Z | 3h47m | 0 | 4 | 0 | 7 |
| Add.105 | 23:57Z | 4h43m46s | 0 | 4 | 0 | 11 |
| Add.106 | 00:50Z | 13m13s (post-doublet) | **2** | 1 | **2** | 12 |

**The doublet at Add.106:**
- **#26655** mateo-berri `docs: update pull_request_template to add Linear ticket mentioning` (head `7d69621b592321e04b6559b5853dd4b6e6d3ff36`) merged 00:36:47Z, lifespan-to-merge from 00:31:47Z = **5m00s** (shortest litellm merge in W17 sample to date). Internal `-berri` author, docs/template-only change.
- **#26651** lmcdonald-godaddy `fix(pricing): GPT-5.5 Pro Pricing` (head `ea0ce944cd37552c6a37cb148c8a9b5c2a5937a5`) merged 00:39:26Z, lifespan-to-merge from 22:52:23Z = **1h47m03s**. External GoDaddy contributor, pricing-data-only change.

**Inter-merge gap: 2m39s.** Doublet release inside 3 minutes after a 4h43m+ silence. **This is the deferred-batch signature**: long pause → tight cluster resumption.

## Falsification angle vs synth #246

Synth #246 framed litellm as a "decoupled-down regime" under maintainer-attention M1 hypothesis: a steady-state reduced-merge-rate maintained by ongoing review bottleneck. Under that reading, Add.106 should have shown either (a) continued zero merges or (b) a single isolated merge — **not** a 2-merge doublet inside <3 minutes. The doublet pattern suggests **batched review release** rather than steady throttling: maintainers were reviewing during the silence and accumulated approvals released at once.

Three candidate mechanisms refine synth #246:
- **M1' (deferred-batch review release):** Maintainers review continuously but defer merge actions, then batch-merge approved PRs in clusters. Predicts inter-merge gaps within a cluster ≪ inter-cluster gaps; the cluster size and inter-cluster gap should be roughly stationary across the W17 sample.
- **M2' (author-class-prioritized release):** When merges resume, the first-merged PRs are systematically of bounded-scope-trivial classes (docs/data/template), reflecting reviewer pick-low-hanging-fruit-first behavior post-pause. Predicts the in-cluster merge order is correlated with PR-content-complexity (trivial first).
- **M3' (release-coordination signal):** The 2 merges share an external trigger (release coordination, end-of-day batching, on-call rotation handoff). Predicts the doublet timing correlates with calendar markers (UTC midnight in this case — both merges are within 40min of 00:00Z UTC).

The Add.106 evidence is **consistent with M1' AND M2'** simultaneously: the cluster (≤3min spread) confirms M1' batching, and the 2 PR contents (docs-template + pricing-data, both bounded-scope) confirm M2' triviality-first. M3' is **circumstantially supported** (both merges within ~40min of 00:00Z UTC) but unprovable from a single observation. This synth promotes M1'+M2' as the **deferred-batch with author-class stratification** model and frames M3' as auxiliary.

## Predicates

- **Pred 249-1 (deferred-batch recurrence):** by Add.112, litellm produces ≥1 further doublet (≥2 merges within ≤5min after a ≥2h merge-silence). If yes, deferred-batch is a stable regime; if no, the Add.106 doublet was a one-shot, and synth #249 reduces to a **single-event observation** without regime weight. **Falsifier:** if Add.107-Add.112 sees only singleton merges spread out (no two merges within 5min of each other), M1' is empirically retracted in favor of a "post-pause singleton resumption" model.
- **Pred 249-2 (author-class triviality-first ordering):** the next litellm merge cluster (defined as ≥2 merges within ≤10min after a ≥1h silence) will have its **first merge** be a bounded-scope-trivial PR (docs/template/pricing-data/typo-fix/dep-bump) at ≥70% probability. If the next cluster's first merge is a substantive code-change PR, M2' is weakened.
- **Pred 249-3 (calendar-marker correlation, M3' test):** of the next 3 litellm merge clusters by Add.116, ≥2 will have at least one merge within ±30min of a UTC hour-boundary divisible by 3 (00:00Z, 03:00Z, ..., 21:00Z). If yes, M3' has weak-but-nonzero support. If only ≤1 of 3 hits the calendar marker, M3' is consistent with chance and should be retracted.
- **Pred 249-4 (cluster-size stationarity):** the size of litellm merge clusters (across Add.106-Add.116) is bounded above by 4 PRs per cluster. If a cluster of ≥5 PRs in ≤10min appears, the deferred-batch model needs a higher cap and the synth #249 cluster-size assumption falsifies.
- **Pred 249-5 (cross-author cluster composition):** within a single deferred-batch cluster, the merged PRs come from ≥2 distinct authors (i.e., clusters are not single-author burst-merges). The Add.106 doublet has 2 authors (mateo-berri, lmcdonald-godaddy). If a future cluster contains ≥2 merges by the same author, the cluster is more author-burst-driven than reviewer-batch-driven, and M1' (reviewer-side mechanism) needs adjustment toward a hybrid M1'+author-burst model.

## Distinguishing predicates from synth #246

Synth #246's M1 reading would predict that merge-silence ends with a singleton merge from a maintainer-clean PR; **synth #249 explicitly predicts the opposite**: pause-ending events are **clusters** (≥2 merges in ≤10min), not singletons. The Add.106 evidence supports synth #249 over synth #246-M1. Synth #246's M2 (CI catch-up) is consistent with codex's behavior (singleton-merge-after-pause: #19884 at Add.105, #19892 at Add.106) but **not litellm's**, suggesting M2 is a per-repo mechanism (codex) and M1' is a different per-repo mechanism (litellm). **This bifurcation strengthens synth #247's stratified-mechanism reading** — different repos run different pause/resumption regimes.

## Carry-relations to prior synths

- **Refines synth #246** (cross-repo coherence) by replacing M1 (steady throttling) with M1' (deferred-batch) for litellm specifically.
- **Validates synth #247** (stratified-resumption) by showing litellm and codex resume via different mechanisms (M1' batch vs M2 singleton).
- **Co-fires with synth #248** (gemini-cli paused-regime exemplar): gemini-cli at Add.106 is still in pause (3h32m+), giving a still-active control case for the not-yet-resumed deep-pause class. When gemini-cli eventually resumes, Pred 248-2 (R3 first-merge-not-from-current-backlog) interacts with Pred 249-2 (M2' triviality-first): if gemini-cli's first post-pause merge is a fresh trivial PR opened post-pause, both predictions hold simultaneously.
- **Methodological note (synth #234, #238):** Pred L's *literal* pass at Add.106 (ratio 0.105 ≤ 0.2) **with mechanism inversion** is a textbook case of the predicate-formulation issue catalogued in synth #234 — predicates set without specifying the mechanism direction can pass numerically while their underlying claim falsifies. **Future predicate formulations should bind the mechanism direction explicitly** (e.g., "ratio ≤0.2 maintained by continued zero-merge regime" rather than "ratio ≤0.2"). Add to operational checklist.
- **Co-fires with sub-pattern (b) catalog (synth #245):** the ishaan-berri #26649 → #26657 close-and-refile (3m57s self-close + 2h08m later refile with rephrased title) is a **W17 second confirmed sub-pattern (b) instance among `-berri` authors** (joining yuneng-berri #26638 → #26643 from Add.103/104). The `-berri` author class displays **both deferred-batch merge participation (mateo-berri #26655) AND close-and-refile preparation behavior (ishaan-berri #26649→#26657)**, suggesting an **internal-author workflow signature**: short-form prep-and-revise cycle preceding eventual deferred-batch merge.

## Falsifier conditions (what would retract #249)

- **F1:** if Pred 249-1 evaluates negative (no further doublet by Add.112), synth #249 reduces to single-event status.
- **F2:** if Pred 249-2 evaluates negative (next cluster first merge is substantive code), the M2' triviality-first refinement retracts and synth #249 reverts toward simpler M1' (batching without author-class stratification).
- **F3:** if a litellm cluster of ≥5 PRs in ≤10min appears by Add.116, Pred 249-4 fails and the cluster-size cap needs reformulation.
- **F4:** if a litellm "cluster" turns out to be all from one author (e.g., 3 merges by skgandikota in 5min), the reviewer-batch reading retracts and the mechanism shifts toward author-burst-merge.

## Capture metadata

Promoted at ADDENDUM-106 close (00:50:00Z, 2026-04-28). Source citations: Add.102 (litellm pause anchor #26622 19:13:14Z), Add.103-105 (zero-merge tick confirmations), Add.106 (doublet #26651/#26655 + new open #26657 ishaan-berri 00:50:01Z + carry-closes #26646 oss-agent-shin 6s self-close + #26649 ishaan-berri 3m57s self-close). PRs cited by number across this synth: litellm #26622 (anchor merge), #26651 (lmcdonald-godaddy merged 00:39:26Z, head `ea0ce944cd37552c6a37cb148c8a9b5c2a5937a5`), #26655 (mateo-berri merged 00:36:47Z, head `7d69621b592321e04b6559b5853dd4b6e6d3ff36`), #26657 (ishaan-berri OPEN 00:50:01Z, head `57d6500d5fc286b7f435c7c98a518e242d84d18e`), #26646 (oss-agent-shin self-close 6s), #26649 (ishaan-berri self-close 3m57s, refiled as #26657), #26643 (yuneng-berri carry OPEN), #26638 (yuneng-berri sub-pattern-b precursor from Add.103). Codex contrast cites: #19884 (mzeng-openai merged Add.105), #19892 (miz-openai merged Add.106 — singleton resumption pattern).
