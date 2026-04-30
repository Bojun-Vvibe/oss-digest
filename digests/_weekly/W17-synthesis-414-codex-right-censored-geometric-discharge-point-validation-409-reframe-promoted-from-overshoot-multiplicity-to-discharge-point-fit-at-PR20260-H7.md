# W17 Synthesis #414 — codex right-censored geometric discharge-point validation: synth #409 reframe transitions from "candidate-with-overshoot-multiplicity" to "candidate-with-discharge-point-fit" at PR #20260 H=7→8

**Status**: synth #414, W17 series. Date 2026-04-30. Direct continuation of synth #408 (linear-piecewise H ≈ max(0, 6-A) candidate) and synth #409 (linear lineage terminally invalidated, right-censored geometric reframe). Lineage anchor: ADDENDUM-192 sha=`f75a52c`, ADDENDUM-191 sha=`83888a2`, synth #408 sha=`019640d`, synth #409 sha=`4764146`, synth #413 sha=`b89f50c`.

## 1. Statement

The synth #409 right-censored geometric reframe of the codex post-amplitude-A silence-horizon discharge model — proposed at Add.187 as a replacement for the synth-#404-#408 linear-piecewise H ≈ max(0, k-A) lineage after the second-overshoot falsification — receives **first directly-observed discharge-point validation** at ADDENDUM-192 (sha=`f75a52c`) where codex PR #20260 (`3516cb97`, mergedAt 16:30:44Z, fix(core) truncate large mcp tool outputs in rollouts, author owenlin0) terminates the post-amplitude-1 silence at horizon **H=7 ticks** with discharge at n=8.

**LAW L-414.1 (codex post-amplitude-A silence-discharge as right-censored geometric)**: The silence-horizon distribution following codex amplitude-A discharge is:
$$P(\text{silence-horizon} = n) = (1-p_A)^{n-1} \cdot p_A$$
with per-tick discharge probability p_A ∈ [0.10, 0.15] at A=1. MLE point estimate at single-anchor n=1 supporting yields p̂_{A=1} = 1/8 = **0.125** (single observed discharge at silence-tick n=8 of the post-Add.184 series).

**INVARIANT I-414.A (Discharge-point validation strengthens synth #409 over synth #408)**: At n=1 supporting, the right-censored geometric model predicts P(discharge by n=8) = 1 − 0.875⁷ = 1 − 0.393 = 0.607 under p̂=0.125 — observed discharge realized within high-probability region. The synth #408 piecewise-H model required k=8 to predict discharge at n=7; this k=8 contradicts the synth-#406-#408 slope-revision lineage monotonicity (k revisions traversed 4 → 5 → 6 with overshoots at each; backwards-revision to k=8 violates the implicit monotone-revision invariant established at synth #408 §4). The **linear-piecewise lineage is terminally invalid not just at silence-extension overshoots but also at the discharge endpoint** at single-anchor n=1.

## 2. Anchored evidence

### 2.1 Pre-discharge silence-horizon overshoot multiplicity (synth #408 → #409 lineage)
- Add.184 (sha=preceding `f08fc06`): codex amplitude=1 PR `f08fc06` discharged.
- Add.185-191: silence H=1 → 2 → 3 → 4 → 5 → 6 → 7 (7 consecutive silence ticks).
- Synth #404 H ≈ max(0, 4-A) predicted H=3 at A=1; overshoot at Add.187 (H=4 observed). Synth-level k revised to 5 at synth #406.
- Synth #406 H ≈ max(0, 5-A) predicted H=4 at A=1; overshoot at Add.188 (H=5 observed). Synth-level k revised to 6 at synth #408.
- Synth #408 H ≈ max(0, 6-A) predicted H=5 at A=1; overshoot at Add.189 (H=6 observed). Synth #409 reframed to right-censored geometric at p ≤ 0.18.
- Synth #409 right-censored geometric at p ≤ 0.18 predicted P(discharge by H=7) = 1 − 0.82⁶ = 0.696; observed silence at H=6 (Add.189) consistent at n=1 supporting.
- Add.190 silence H=6: synth #409 p ≤ 0.18 still consistent; refined to p ≤ 0.15 at single-anchor n=2 supporting.
- Add.191 silence H=7: synth #409 refined to p ≤ 0.13 at single-anchor n=3 supporting (synth #410 §3 footnote).

### 2.2 Discharge event (Add.192 sha=`f75a52c`)
- codex PR #20260 (`3516cb97`, mergedAt 16:30:44Z, author owenlin0): fix(core) truncate large mcp tool outputs in rollouts.
- Discharge at silence-tick n=8 (Add.192 closes 16:33:21Z; silence began at Add.184 close).
- Discharge amplitude = 1 (single PR), preserving the post-amplitude-1 → amplitude-1 rebound symmetry across the codex H-fit lineage.

### 2.3 Point estimate refinement under MLE

| Quantity | Pre-discharge bound (synth #409 at Add.191) | Post-discharge MLE (Add.192) | Source |
|----------|---------------------------------------------|------------------------------|--------|
| p_{A=1} upper bound | ≤ 0.13 | — | Synth #409 §3 |
| p_{A=1} MLE | undefined (no discharge observed) | 0.125 (= 1/8) | Add.192 single-anchor |
| Mean silence-horizon E[H] under MLE | ≥ 7.7 | 8.0 (= 1/p̂) | Geometric-mean formula |
| Variance Var[H] under MLE | undefined | 56.0 (= (1-p̂)/p̂²) | Geometric-variance formula |
| P(silence ≥ H=7) under MLE | 0.434 (at p=0.13) | 0.448 (at p̂=0.125) | (1-p̂)^(H-1) |

The discharge-point validation provides the **first MLE-anchored point estimate** for the codex single-repo discharge-probability — previously the synth #409 reframe carried only an upper bound, with no MLE due to right-censoring. The single-anchor n=1 supporting value p̂=0.125 sits **within the synth #409 upper bound band** at the boundary (0.13 vs 0.125), consistent at single-anchor.

## 3. Cross-process invariant: codex H-fit discharge-event distribution

The codex single-repo discharge process has now been observed across **two complete amplitude-A silence-horizon cycles** in W17:

| Cycle | Discharge tick | Predecessor discharge | Predecessor amplitude | Silence-horizon H | Discharge amplitude |
|-------|----------------|-----------------------|-----------------------|-------------------|---------------------|
| 1 | Add.171 (sha referenced via prior series) | Add.169 sextuple | A=5 | H=1 | A=4 |
| 2 | Add.172 | Add.171 | A=4 | H=1 | A=6 |
| 3 | Add.173 (mid-window) | Add.172 | A=6 | H=1 | A=1 |
| 4 | Add.174 | Add.173 | A=1 | H=1 | A=1 |
| 5 | Add.175 | Add.174 | A=1 | H=1 | A=1 |
| 6 | Add.176 silence | Add.175 | A=1 | H=1 (silence) | — |
| 7 | Add.177 | Add.176 | A=0 (silence) | H=2 | A=1 |
| ... | ... | ... | ... | ... | ... |
| Final pre-#414 | Add.184 | Add.183 | A=2 | H=2 | A=1 |
| **#414 cycle** | **Add.192** | **Add.184** | **A=1** | **H=7→discharge at n=8** | **A=1** |

The Add.192 cycle is the **single longest silence-horizon discharge cycle observed in W17 for codex** at single-anchor n=1 supporting. Prior cycles all discharged at H ∈ {1, 2}; the Add.184 → Add.192 cycle at H=7 is **6× the median pre-#414 cycle horizon**, consistent with the right-censored geometric tail and inconsistent with the linear-piecewise lineage at any k ≤ 6.

## 4. Falsification of competing fits at the discharge point

### 4.1 Linear-piecewise H ≈ max(0, k-A) candidate at A=1
- Predicted discharge at H = k − 1.
- k=4 (synth #404) → H=3; observed H=8 → overshoot multiplicity 5.
- k=5 (synth #406) → H=4; overshoot multiplicity 4.
- k=6 (synth #408) → H=5; overshoot multiplicity 3.
- k=7 (hypothetical) → H=6; overshoot multiplicity 2.
- k=8 (hypothetical, contradicts monotonicity) → H=7; observed at n=1.
- **No k ≤ 7 in the linear-piecewise lineage produces discharge at H=8**; the entire linear-piecewise lineage is **terminally invalid at the discharge point**.

### 4.2 Constant-discharge-probability geometric (memoryless)
- Predicts discharge-tick distributed Geom(p). MLE p̂ = 0.125 at sample-n=1.
- Variance estimate at single-anchor: Var = (1-p̂)/p̂² = 56 (high; consistent with single-observation under-determination).
- **Survives at single-anchor n=1**; will be refined at the next discharge cycle when sample-n=2 admits sample variance estimation.

### 4.3 Hazard-rate-increasing (Weibull-class with shape > 1) discharge model
- Predicts hazard increasing with horizon length; would suggest discharge probability per tick increasing as silence extends.
- Empirical: 7 consecutive non-discharge ticks → discharge at n=8. Compatible with hazard-increasing if p_n increases linearly from low value.
- However, parsimony: with single observation, hazard-rate-increasing requires ≥ 2 parameters (shape + scale); geometric requires 1.
- **Loses parsimony vs L-414.1 at single-anchor n=1**; deferred to next discharge cycle for discrimination.

### 4.4 Hazard-rate-decreasing (Weibull-class with shape < 1) / heavy-tail
- Would predict longer post-discharge silence-horizons concentrated; observed H=8 consistent at the heavy tail.
- Discrimination from constant-rate geometric requires sample-n ≥ 3 — deferred.

### 4.5 Hazard-rate-piecewise (synth #408 reframe attempt at Add.187 §3.2)
- Predicts hazard step-function in horizon. Empirical H=8 at A=1 sits in the long-tail region of any reasonable step-function; consistent with constant-rate geometric at single-anchor n=1.
- Loses parsimony vs L-414.1 at single-anchor n=1.

## 5. Predictions

- **P-414.A**: Next codex amplitude-A discharge cycle (post Add.192) silence-horizon E[H | A=1] ≈ 8 ticks at MLE point estimate; band [4, 12] at single-anchor n=1 supporting at >55%; tail ≥ 15 ticks at <12% under L-414.1 geometric tail.
- **P-414.B**: codex Add.193 emission ∈ [0, 1] at >75% per Add.192 P-192.C — post-discharge silence-resumption is canonical at single-anchor n=1 of post-discharge.
- **P-414.C**: Next discharge cycle MLE p̂_{A=1} sample-n=2 estimate ∈ [0.08, 0.18] at >65% (single-anchor band; Bayesian posterior under Beta(1,1) prior + observed (1, 7) success-failure yields posterior-mean = 2/10 = 0.20, posterior-mode = 1/8 = 0.125).
- **P-414.D**: Hazard-rate-increasing alternative discriminated against L-414.1 at synth-level n=3 (i.e., after 3 discharge cycles observed) at >50% — first cross-cycle discrimination test.
- **P-414.E**: codex per-PR silence ratio asymptotes toward E[H | A=1] / 1 ≈ 8 silence-ticks-per-amplitude-1-PR at single-anchor n=2 supporting at >50% (one observation at ratio 7.0; one at 8.0; asymptote band [6, 10]).
- **P-414.F**: F-414.1 falsification candidate: if next codex amplitude-1 silence-horizon < 4 OR > 14, L-414.1 single-parameter geometric is rejected (band-exit at MLE p̂=0.125 → P(H<4 ∪ H>14) ≈ 0.34 + 0.16 = 0.50 — moderate-discrimination at single-anchor n=2). Falsification at <40%.
- **P-414.G**: Synth-level promotion of L-414.1 from "candidate-with-discharge-point-validation" to "law-with-multi-discharge-point-validation" deferred to synth #415+ at sample-n ≥ 3 of discharge events.

## 6. Notes on synth lineage and process-class positioning

- **Promotes synth #409** right-censored geometric reframe from "candidate-with-overshoot-multiplicity-supporting (n=3-4 supporting)" to **"candidate-with-discharge-point-validation at single-anchor n=1 of discharge"**. The discharge-point validation is qualitatively stronger than overshoot-multiplicity supporting because it provides MLE rather than upper-bound on p_{A=1}.
- **Decisively invalidates synth #408 lineage at the discharge point** — the linear-piecewise H ≈ max(0, k-A) framework cannot produce H=7→discharge-at-n=8 at any k ≤ 6 in the synth-#406-#408 monotone-revision lineage. The lineage is **dual-falsified** at silence-extension AND discharge endpoints; full retirement is appropriate.
- **Orthogonal to synth #411** (cohort-amplitude geometric-decay L-411.1 at r ≈ 0.20). Synth #414 addresses single-repo discharge probability at A=1; synth #411 addresses cohort-aggregate amplitude decay across all 6 repos. Both are geometric-class fits but at distinct process scales (single-repo vs cohort).
- **Orthogonal to synth #412** (fit-class entropy bifurcation). Synth #414 refines the codex-class assignment under L-412.1 — codex remains in the right-censored class with discharge-point validation strengthening the class-assignment confidence; H_silent invariant at 2.585 bits unchanged.
- **Orthogonal to synth #413** (cohort-zero sojourn-distribution bimodal-or-heavy-tail revision). Synth #414 addresses single-repo discharge; synth #413 addresses cohort-zero sojourn structure. Codex Add.192 discharge is the trigger event for sojourn-block-2 termination at n=1 (synth #413 §2.2), creating a coupling between the two synthesis lineages at the process-event level even though the underlying claims are orthogonal.
- **Anchor commits**: ADDENDUM-184 sha (referenced via series, codex prior amplitude-1 PR `f08fc06`), ADDENDUM-189 sha=`1cc14c0`, ADDENDUM-190 sha=`ab94b04`, ADDENDUM-191 sha=`83888a2`, ADDENDUM-192 sha=`f75a52c`, synth #404 (linear k=4 origin), synth #406 (k revised to 5) sha=`d20f6ee`, synth #408 sha=`019640d`, synth #409 sha=`4764146`, synth #413 sha=`b89f50c`.
- **Termination criterion** for L-414.1 lineage: F-414.1 falsification at next discharge cycle (silence-horizon < 4 OR > 14 at A=1); OR convergence to constant-rate geometric MLE within band [0.10, 0.15] at sample-n=3+ supporting; OR observation of A ≥ 2 discharge admitting cross-A discharge-probability comparison (currently A=1 at sole-discharge-cycle supporting, A ≥ 2 cycles deferred).
- **Future synth axis**: synth #415+ candidate is the **second discharge-cycle observation** at codex A=1 — provides the first sample-n=2 estimation of p̂_{A=1} variance and admits the first hazard-rate-increasing vs constant-rate discrimination test. Synth #416+ candidate is the **cross-A discharge-probability estimation** at A ≥ 2 (e.g., post-rupture amplitude=5 discharge cycle), admitting the L-414.1 generalization to A-dependent p_A.
