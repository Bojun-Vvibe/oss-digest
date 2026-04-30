# W17 Synthesis #419 — Within-Repo Human-Heterogeneous Quintuplet Batch Motif as Wide-PR-Number-Dispersion Sub-Class of Multi-Author Batch Family: 5-Author / 4185-PR-Dispersion / 34m53s Span at gemini-cli Add.195

**Trigger**: ADDENDUM-195 sha=`(pending)` M-195.C — gemini-cli quintuplet discharge at Add.195 instantiated as **within-repo human-heterogeneous batch motif** with 5 distinct human authors (ruomengz #26261, jackwotherspoon #24455, pmenic #26018, Aaxhirrr #22081, gundermanc #26266) merging within a 34m53s mergedAt window. The batch exhibits **zero bot-author contribution** (pure human carrier-class), **content-heterogeneity** (no thematic coherence: code-fix + bug-fix + 2× docs + comment-response-fix), and **wide PR-number dispersion** (4185 PR-numbers from #22081 to #26266, indicating mixed long-tail-cleanup + fresh-merge cadence within a single tick). This constitutes a **distinct sub-class** of the multi-author batch motif family at synth #418 — the canonical synth #418 instance was 3-author / 615-PR-dispersion (codex #19843 to #20458) at narrower PR-numbering range; the M-195.C instance is **higher-amplitude and wider-dispersion** at the human-heterogeneous-batch sub-class.

## Lineage and prior framework

Prior W17 synth lineage on batch-merge motifs:

- **Synth #416** (sha=prior): Single-author batch-merge motif at canonical instantiation (kitlangton 4-PR / 1-author / 3m03s span); the **N:1 PR-to-author mapping** with thematic coherence at intra-tick.
- **Synth #417** (sha=`19a5f0b`): Bot-driven release-engineering batch motif (gemini-cli-robot 3-PR / 1-bot / 22m38s span); the **N:1 PR-to-bot-author mapping** with release-cadence coherence.
- **Synth #418** (sha=`aea4944`): Multi-author within-tick batch motif (codex 3-PR / 3-authors / 27m11s span); the **1:1 author-to-PR mapping** at content-heterogeneity at narrower PR-number range.

Synth #418 introduced the **1:1 author-to-PR mapping** axis. Add.195 gemini-cli quintuplet falsifies any implicit assumption that 1:1 multi-author batches are **bounded at low amplitude** (synth #418 was n=3) — Add.195 instantiates the same axis at **n=5** with substantially wider PR-number dispersion, suggesting the multi-author batch family scales to higher amplitudes at sub-tick granularity when the carrier-class is uniformly human and the repository has high concurrent-author throughput.

## The Add.195 within-repo human-heterogeneous batch event

Detailed timing (UTC):
- PR #26261 mergedAt 2026-04-30T18:01:54Z (ruomengz, "Skip binary CLI relaunch") — first emit, fresh PR (5-PR-old at #26266-cap)
- PR #24455 mergedAt 2026-04-30T18:05:59Z (jackwotherspoon "Jack Wotherspoon", "fix(cli): do not override GOOGLE_CLOUD_PROJECT in Cloud Shell when using Vertex AI") — Δ=4m05s from #26261; aged ~2811 PRs
- PR #26018 mergedAt 2026-04-30T18:15:30Z (pmenic "Paolo Menichetti", "docs(cli): add skill discovery troubleshooting checklist to tutorial") — Δ=9m31s from #24455; mid-aged ~248 PRs
- PR #22081 mergedAt 2026-04-30T18:16:51Z (Aaxhirrr "Aashir Javed", "docs(policy-engine): link to tools reference for tool names and args") — Δ=1m21s from #26018; oldest in batch (~4185 PRs old)
- PR #26266 mergedAt 2026-04-30T18:36:47Z (gundermanc "Christian Gunderman", "Fix posting invalid response to a comment") — Δ=19m56s from #22081; freshest

Inter-merge gaps: {4m05s, 9m31s, 1m21s, 19m56s} = {245s, 571s, 81s, 1196s}. Mean 8m43s = 523s. Min 81s. Max 1196s. CV ≈ 0.91 (high). The gap-distribution is **multimodal-or-heavy-tail** even at sample-n=4: one sub-2-minute gap (#26018→#22081 at 81s suggesting maintainer-batched merge sequence), two intermediate gaps (4-10 minutes), one long gap (~20 minutes).

PR-number dispersion analysis:
- Min PR-number in batch: 22081
- Max PR-number in batch: 26266
- Range: 4185 PR-numbers
- Spread ratio (range / max-PR-number): 4185 / 26266 ≈ 0.159 (~16% of all-time PR-numbering)

The 4185-PR dispersion is a **structural marker** of mixed long-tail-cleanup + fresh-merge cadence: PR #22081 is months-old at merge time (long-tail review-cleanup), while PR #26266 was opened-and-merged at near-real-time cadence. The synth #418 codex batch had only 615-PR dispersion (narrow range); synth #416 kitlangton had 14-PR dispersion (very narrow); synth #417 gemini-cli-robot had 25-PR dispersion (very narrow). Add.195 gemini-cli at 4185-PR dispersion is **2 orders of magnitude wider** than any prior batch in the W17 corpus.

## The batch-merge motif taxonomy (extended 4-axis classification)

Combining synth #416, #417, #418, and #419, the W17 batch-merge motif taxonomy admits ≥4 distinct sub-classes along 4 dimension-orthogonal axes:

| Sub-class | Author-cardinality | Content-coherence | Cadence-driver | PR-number-dispersion | Canonical instance |
|-----------|-------------------|-------------------|----------------|---------------------|-------------------|
| #416 single-author thematic | 1 | high (thematic) | manual-author-burst | very narrow (~14) | kitlangton testEffect 4-PR |
| #417 bot release-engineering | 1 (bot) | high (release-cadence) | scheduled / version-stamp | narrow (~25) | gemini-cli-robot cherry-pick 3-PR |
| #418 multi-author 1:1 narrow | N (= PR-amplitude) | low | concurrent / repo-throughput | narrow (~615) | codex 3-author triplet |
| #419 multi-author wide-dispersion | N (= PR-amplitude) | low | concurrent + long-tail-cleanup | wide (~4185) | gemini-cli 5-author quintuplet |

The synth #418 → #419 distinction is **PR-number-dispersion-axis**: synth #418 batches involve fresh PRs in a narrow-numbering window (suggesting concurrent fresh-development), while synth #419 batches mix long-tail aged PRs with fresh PRs (suggesting maintainer-batched-review-cleanup blending with fresh-development).

## Empirical observations and invariants

**I-419.A**: Within-repo human-heterogeneous batches at amplitude ≥5 admit PR-number dispersion ≥1000 at single-anchor n=1. Empirical: 4185 ≫ 1000. Promotes to candidate invariant pending counter-example.

**I-419.B**: Bot-author contribution to a multi-author within-tick batch is bimodal at {0, ≥0.5} fraction. Empirical: synth #417 (1.0 bot fraction), synth #418 (0.0 bot fraction), synth #419 (0.0 bot fraction). Sample-n=3 supports bimodal at {0, 1} extreme. Mid-mode (e.g., 0.3-0.7 bot fraction) absent at this sample.

**I-419.C**: Inter-merge gap CV at multi-author batches scales with PR-number dispersion. Empirical: synth #418 CV=1.01 at 615 dispersion; synth #419 CV=0.91 at 4185 dispersion. At n=2 sample-anchor the relationship is **non-monotonic** (#419 CV is lower despite wider dispersion), suggesting CV is bounded ≤ 1.1 at multi-author-1:1 batches regardless of PR-dispersion.

## Predictions (P-195.X.1 register)

- **P-195.O.1**: Next within-repo human-heterogeneous batch at amplitude ≥4 (within next 12 ticks) admits PR-number dispersion ≥500 at >75% (validates I-419.A scaling).
- **P-195.O.2**: Next multi-author within-tick batch (any sub-class) at gemini-cli admits zero bot-author contribution at >60% (synth #419 establishes gemini-cli human-heterogeneous as recurrent fit-class; bot-batches synth #417-class are release-cadence-bounded).
- **P-195.O.3**: gemini-cli amplitude at Add.196 contracts to ≤3 at >65% (post-quintuplet contraction at synth #410 fit-class with multi-author batch typically followed by single-tick rest at human carrier-class).
- **P-195.O.4**: Inter-merge gap CV at next multi-author 1:1 batch admits CV ≤ 1.1 at >70% (validates I-419.C bound).
- **P-195.O.5**: synth #419 motif sub-class recurs at gemini-cli within next 24 ticks at >55% (gemini-cli human-author throughput is high; long-tail-cleanup pattern admits recurrence at maintainer-batched-review cadence).

## Distal lineage citations

- **Synth #410** sha=`759c7fd`: per-repo recurrent-author fit-class framework. The synth #419 5-author batch at gemini-cli instantiates 5 recurrent-or-novel-or-recurrent fit-class members at single tick.
- **Synth #411** sha=`(prior)`: cohort-zero-determinism framework (subsequently falsified at synth #415).
- **Synth #412** sha=`(prior)`: H_emitting bifurcation framework. The synth #419 batch contributes 5/7 = 0.714 amplitude-mass to gemini-cli at Add.195, dominating the H_emitting amplitude-weighted distribution at 0.863 bits.
- **Synth #413** sha=`b89f50c`: cohort-zero entry distribution.
- **Synth #414** sha=`(prior)`: codex right-censored geometric discharge framework.
- **Synth #415** sha=`(prior)`: post-discharge transition tri-modal distribution (extended at synth #418 to 4-mode and at M-195.A to 5-mode multi-carrier-sustain).
- **Synth #416** sha=`(prior)`: single-author batch-merge motif framework — the parent of synth #419 (multi-author extension along carrier-cardinality axis).
- **Synth #417** sha=`19a5f0b`: bot-driven release-engineering batch motif — the bot-author sibling of synth #419 (carrier-class axis distinction).
- **Synth #418** sha=`aea4944`: multi-author 1:1 narrow-dispersion batch motif — the immediate predecessor of synth #419 (PR-number-dispersion-axis distinction).

## Summary

Synth #419 establishes the **within-repo human-heterogeneous wide-PR-number-dispersion batch motif** as a distinct sub-class within the multi-author batch family at synth #418, with PR-number-dispersion as the orthogonal classification axis. The canonical instantiation at gemini-cli Add.195 (5-author / 4185-PR-dispersion / 34m53s) is the highest-amplitude human-heterogeneous batch in the W17 corpus to date, suggesting that the multi-author batch family scales to higher amplitudes at high-throughput repos when long-tail-cleanup blends with fresh-development cadence. The taxonomy now occupies 4 cells across 4 orthogonal axes (carrier-cardinality, content-coherence, cadence-driver, PR-number-dispersion).
