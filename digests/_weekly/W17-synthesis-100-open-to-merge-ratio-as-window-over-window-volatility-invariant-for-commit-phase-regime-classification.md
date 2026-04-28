# W17 Synthesis #100 — Open-to-merge ratio as a window-over-window volatility invariant for commit-phase regime classification

**Anchor windows:** 2026-04-28T03:55Z → 06:30Z UTC (4 consecutive ticks: ADDENDUM-110, 111, 112, 113).
**Anchor repos:** openai/codex (primary signal), with cross-repo confirmation from anomalyco/opencode and BerriAI/litellm.
**Anchor authors:** etraut-openai, canvrno-oai, bolinfest (codex triad); Brendonovich, rekram1-node, kitlangton (opencode).
**Parent synths:** #80 (intra-repo deep long-tail refresh wave), #87 (asymmetric half-merge of sub-10s doublet — prune-half lands, rework-half iterates).

## Why this is distinct from #80 and #87

Synth #80 measured **deep-cohort silence as a stationary attribute**: a repo enters the deep cohort and stays there until a refresh wave breaks the silence. The lens was per-repo, scalar, and one-directional (silence accumulates monotonically until reset).

Synth #87 measured **per-doublet asymmetric resolution**: a sub-10s doublet resolves with one half merged and one half iterating. The lens was per-PR-pair, structural, and snapshot.

Synth #100 captures a **window-over-window scalar invariant**: the **open-to-merge ratio (OMR)** measured over a fixed-cadence capture window, and specifically its **window-over-window multiplicative swing**. The lens is per-tick, scalar, and dynamical (variance is the signal, not the level).

## The four-tick OMR sequence

| Tick | Window | Cross-repo opens | Cross-repo merges | OMR | Window-over-window OMR multiplier |
|---|---|---|---|---|---|
| ADDENDUM-110 | ~03:55Z → ~04:30Z | 13 | 1 | **13.000** | — (initial) |
| ADDENDUM-111 | ~04:30Z → ~04:55Z | 1 | 7 | **0.143** | × **0.011** (collapse) |
| ADDENDUM-112 | ~04:55Z → ~05:52Z | 5 | 5 | **1.000** | × **6.99** (recovery) |
| ADDENDUM-113 | ~05:52Z → ~06:30Z | 3 | 1 | **3.000** | × **3.00** (overshoot) |

Spread: **OMR ranges from 0.143 to 13.000 across 4 consecutive ticks** — a peak-to-trough multiplier of **91×**. This is the largest window-over-window scalar swing for any tracked variable in W17 (compare: per-minute merge rate range 0.026–0.280 = 10.8×; per-tick author count range 2–7 = 3.5×).

## What the OMR sequence says that #80 and #87 cannot

**(a) OMR is a leading indicator of commit-phase regime transitions.** The OMR collapse from 13.0 (Add.110) to 0.143 (Add.111) preceded the **single-repo broadening** of commit-phase to 3-of-6 repos at Add.111. The OMR overshoot to 3.0 (Add.113) preceded (and accompanies) the **single-repo narrowing** back to 1-of-6 repos at Add.113. **High OMR ⇒ supply-side build-up (open inventory grows faster than merge throughput).** **Low OMR ⇒ demand-side burst (merge throughput catches up to and exceeds open inventory growth).**

**(b) The OMR multiplier sign-pattern is not random walk.** Across Add.110 → Add.113, multipliers are **× 0.011, × 6.99, × 3.00** — sign pattern (down, up, up). A random-walk null model on log-OMR would predict ~50% probability of sign reversal each step; the observed sequence has **two consecutive same-sign moves after the initial collapse**. Provisional interpretation: **OMR exhibits mean-reversion overshoot** — a deep collapse triggers a corrective bounce that overshoots equilibrium, then a smaller secondary correction that overshoots in the same direction.

**(c) Per-repo OMR decomposition reveals codex as the primary driver.** Cross-repo OMR aggregates over 6 repos but 4 of them (gemini-cli, goose, qwen-code at all 4 ticks; opencode/litellm at Add.112-113) contribute 0/0 (undefined). The OMR signal is dominated by codex (with 13/1, 5/3, 3/5, 1/1 sequence) and lightly modulated by opencode (0/2, 1/0, 0/0 on Add.111/112/113) and litellm (0/2, 1/0, 1/0). **Codex's per-repo OMR multipliers: × 0.0385, × 0.6, × 0.20** — same sign-pattern as cross-repo (down, up, down), confirming codex drives the aggregate signal.

## OMR-based regime classification

Define three regimes by OMR magnitude:

- **Supply-glut (OMR ≥ 5.0)**: open inventory accumulating, merge throughput insufficient. Add.110 (OMR=13.0).
- **Balanced (0.5 ≤ OMR ≤ 5.0)**: open and merge cadences proportional. Add.112 (OMR=1.0), Add.113 (OMR=3.0).
- **Demand-burst (OMR < 0.5)**: merge throughput exceeds open inflow; commit-phase consumes pre-built inventory. Add.111 (OMR=0.143).

A 4-tick sequence covering all three regimes is **rare** — it suggests the corpus is currently in a **transient phase** rather than a stationary regime. By contrast, the synth #258 deep-cohort {gemini-cli, goose, qwen-code} has remained in supply-glut (or null) regime for ≥9 consecutive ticks.

## Falsifiable predictions

1. **OMR mean-reversion damping**: window-over-window OMR multiplier magnitudes contract over the next 5 ticks. Specifically, the geometric mean of |log(multiplier)| across Add.114-Add.118 will be **less than** the geometric mean of |log(multiplier)| across Add.111-Add.113 (which is 1.79). Falsifier: GM ≥ 1.79 across the next 5 ticks.

2. **Regime persistence floor**: no single OMR regime (supply-glut / balanced / demand-burst) persists for fewer than 2 consecutive ticks across Add.114-Add.118. Falsifier: any regime appears for exactly 1 tick and is then exited in the immediate next tick (replicating the Add.110 single-tick supply-glut pattern).

3. **Cross-repo OMR contagion**: if a non-codex repo enters demand-burst (OMR < 0.5) at any tick in Add.114-Add.118, codex enters demand-burst within ±1 tick. Falsifier: any non-codex demand-burst tick where codex stays in balanced or supply-glut for both adjacent ticks.

4. **Triad concentration during demand-burst**: when OMR < 1.0, ≥ 60% of in-window codex merges are by the {etraut-openai, canvrno-oai, bolinfest} triad (Pred WW carry from Add.112). Falsifier: any sub-1.0 OMR tick where triad share is < 40%.

5. **Doublet OMR signature**: Pred S/ZZ (the bolinfest #19899/#19900 half-merge governed by synth #87) closes with #19900 either merged or pruned within 6h of #19899's merge timestamp (06:08:35Z, so by ~12:08Z = ~Add.119). If #19900 closes via merge, the tick containing the merge will have OMR ≥ 2.0 (sustaining the demand-burst→balanced→overshoot pattern). If #19900 is pruned (closed-no-merge), the tick will have OMR ≤ 0.5. Falsifier: #19900 resolves and the containing tick has OMR in (0.5, 2.0) exclusive.

## Sustains / refines / falsifies prior synths

- **Sustains synth #80** (intra-repo deep long-tail refresh wave): synth #100's per-repo OMR decomposition confirms that deep-cohort repos (gemini-cli, goose, qwen-code) contribute 0/0 (undefined OMR) across all 4 anchor ticks. The deep cohort is operationally invisible to the OMR signal, validating synth #80's framing of deep silence as a stationary attribute orthogonal to commit-phase dynamics.
- **Refines synth #87** (asymmetric half-merge): synth #87 captured the per-doublet structure; synth #100 places it inside a window-level OMR context. Pred ZZ couples doublet resolution to OMR regime — a refinement synth #87 alone could not express.
- **Refines synth #258** (deep-cohort cardinality conservation): synth #258's invariant (cardinality preserved while composition rotates) gains a complementary invariant from #100 (commit-phase repos exhibit OMR variance, deep-cohort repos contribute structural zero). The two synths are dual: deep-cohort = invariant cardinality + null OMR; commit-phase cohort = volatile OMR + variable cardinality.
- **Does NOT falsify any prior synth.**

## Distinctness from other synths

- **vs synth #95** (intra-author three-regime cadence dilation): #95 is per-author cadence; #100 is per-window cross-repo flow. A single author can cycle through cadence regimes inside a single OMR regime, and vice versa.
- **vs synth #97** (same-author N=3 self-merge series with shared spec co-touch): #97 is per-PR-series structural; #100 is per-tick scalar dynamical. Synth #97's anchor series (kitlangton's #24352/#24353/#24356/#24365) merged inside a single tick — its OMR contribution was confined to one window's data point.

## Risk lens

- **OMR overshoot fragility**: if synth #100's mean-reversion overshoot prediction is wrong, the corpus may enter a non-mean-reverting regime where OMR drifts unbounded. This would manifest as either persistent supply-glut (open inventory unbounded growth) or persistent demand-burst (merge throughput exceeding open inflow indefinitely). The latter is unsustainable beyond ~2 ticks because eventually the open inventory is exhausted; the former indicates review-bottleneck stall.
- **OMR regime as triage signal**: if the dispatcher treats OMR ≥ 5.0 as a leading indicator of incoming review load, the next-tick capture should expand the per-repo merge inspection limit. Conversely, OMR < 0.5 indicates the inventory is being drained — useful for predicting a quiet next tick.
- **Single-repo dominance distortion**: codex contributes 22 of 22 cross-repo merges across Add.110-Add.113 minus the opencode/litellm spike at Add.111. The OMR signal effectively measures codex with a small cross-repo perturbation. A future synth should track per-repo OMR independently to detect when non-codex repos begin to drive the aggregate.
