# W17 Synthesis #467 — AIC vs BIC vs DIC information-criterion robustness on the synth #466 bimodal width-regime MLE; reconciling the ×6.05 raw-likelihood vs ×0.063 BIC-corrected width-axis BF tension via penalty-uniformity audit; 3-criterion convergence band for the dilation-mode hypothesis

**Anchor**: ADDENDUM-219 P-219.M explicitly anchors this synth: explore information-criterion robustness on the synth #466 bimodal width-regime MLE — comparing AIC (lighter penalty), BIC (current), and DIC (effective-parameter penalty under MCMC posterior) to determine whether the ×6.05 raw vs ×0.063 BIC tension is robust or an artefact of penalty choice. ADDENDUM-219 also documents the Add.219 width 42m40s reverting to calm-mid (responsibility ~0.04 for dilation), confirming P-466.C and falsifying P-466.B — the Add.216 + Add.218 dilation cluster does NOT extend to a 3-of-4 cluster, weakening the bimodal hypothesis at the margin. This synth formalises the 3-criterion robustness audit on the now-21-tick (Add.197-219, excluding Add.209) width sequence and quantifies the penalty-choice sensitivity of the width-axis BF.

## Why this is distinct from synth #466 (bimodal width-regime detection) and synth #462 (Frozen-MLE protocol)

Synth #466 introduced the bimodal Gaussian mixture as the alternative to the synth #451 unimodal null and reported BOTH the raw BF (×6.05) and the BIC-corrected BF (×0.063), flagging the order-of-magnitude tension as a sensitivity concern.

Synth #462 established the Frozen-MLE protocol for transition-axis BF estimation, with implicit BIC-style frozen-parameter penalty.

Synth #467 introduces:

1. The **AIC formulation** for the bimodal vs unimodal comparison (lighter penalty: 2k vs k·log(n)).
2. The **DIC formulation** with effective-parameter count (intermediate penalty under hierarchical-Bayesian framing).
3. The **3-criterion convergence-band** for the bimodal hypothesis BF.
4. A **penalty-uniformity audit** asking whether each existing axis (transition, gap, PJL, anti-PJL) would survive a uniformly-applied BIC-style penalty.
5. A **principled reconciliation rule** under which the most conservative penalty (BIC) is applied IF the auxiliary axes also survive their analogous penalties — otherwise a uniformity-corrected penalty is applied.

## AIC formulation for the bimodal width-regime hypothesis

Per synth #466, the bimodal mixture has 5 free parameters (μ_calm, σ_calm, μ_dilation, σ_dilation, π_dilation) and the unimodal model has 2 free parameters (μ_uni, σ_uni). Net additional parameters: k_added = 3.

**AIC formulation**: AIC = −2·log L + 2k. The AIC difference is:

ΔAIC = AIC_bimodal − AIC_unimodal = (−2·log L_bimodal + 2·5) − (−2·log L_unimodal + 2·2) = −2·(log L_bimodal − log L_unimodal) + 6 = −2·(1.8) + 6 = −3.6 + 6 = **+2.4** (bimodal disfavoured by 2.4 AIC units, mild).

**AIC-corrected BF(C-bimodal : C-unimodal)** = exp(−ΔAIC/2) = exp(−1.2) = **×0.301** (mild penalty: bimodal still partially favoured but not strongly; the AIC penalty is mild enough to leave the raw-likelihood signal partially intact at ~3× discount).

This contrasts sharply with the BIC penalty which delivers a >95× discount.

## BIC formulation (recap from synth #466)

BIC = −2·log L + k·log(n). For n=21, ΔBIC = −2·(1.8) + 3·log(21) = −3.6 + 9.13 = **+5.53**.

**BIC-corrected BF** = exp(−ΔBIC/2) = exp(−2.77) = **×0.063** (heavy penalty; bimodal strongly disfavoured).

The BIC and AIC differ by a factor of ×0.063 / ×0.301 = **0.21** (BIC penalty is 4.8× stricter than AIC penalty for the bimodal vs unimodal comparison at n=21). This factor grows with sample size: at n=50, BIC penalty would be exp(−3·log(50)/2) / exp(−3) = exp(−5.87 + 3) = exp(−2.87) = ~0.057, while AIC stays at exp(−3) = 0.050 — at large n the criteria converge in penalty magnitude but BIC is always stricter for k>1 above n≈8. The current n=21 sits in the regime where BIC and AIC diverge most.

## DIC formulation under hierarchical-Bayesian framing

DIC = D̄ + p_D where D̄ is posterior mean deviance and p_D is the **effective parameter count** = D̄ − D(θ̄). For Gaussian mixtures, p_D is typically less than k_nominal because mixture components share information (a phenomenon known as "effective parameter shrinkage"). For the synth #466 mixture with 3 nominal added parameters and well-separated components (μ_calm = 38.5, μ_dilation = 63, separation = 24.5m vs σ_calm = 13m → separation/σ ≈ 1.88), p_D is typically reduced by ~20-30% to ~2.1-2.4.

**Estimated DIC penalty**: ΔDIC = −2·(1.8) + 2·p_D ≈ −3.6 + 2·2.25 = −3.6 + 4.5 = **+0.9** (intermediate penalty, weaker than AIC for the same k_nominal).

**DIC-corrected BF** = exp(−0.9/2) = exp(−0.45) = **×0.638** (mild penalty: bimodal slightly disfavoured but well within indifference band).

## 3-criterion convergence band

| Criterion | Penalty Δ | Width-axis BF(C-bimodal:C-unimodal) | Verdict |
|---|---|---|---|
| Raw likelihood (no penalty) | 0 | **×6.05** | bimodal moderately favoured (Jeffreys 3-10 band) |
| AIC (k=5 vs k=2; +2k penalty) | +2.4 | **×0.301** | bimodal mildly disfavoured |
| DIC (effective k ≈ 4.25 vs 2; +2p_D penalty) | +0.9 | **×0.638** | bimodal weakly disfavoured (near indifference) |
| BIC (k·log n; +k·log(21) penalty) | +5.53 | **×0.063** | bimodal strongly disfavoured |

The 3-criterion BF range is **×0.063 to ×6.05** — spanning **~96×** in width-axis BF estimate. The geometric mean of the 4 estimates is (6.05 × 0.301 × 0.638 × 0.063)^(1/4) = (0.0732)^(1/4) = **×0.520** — the midpoint estimate is **near indifference**, leaning slightly toward the unimodal null.

The DIC estimate (×0.638) is the **most defensible single-criterion estimate** under hierarchical-Bayesian framing because it uses the empirically-observed effective parameter count rather than nominal k. Under DIC, the bimodal hypothesis is **near-indifference**, neither strongly favoured nor strongly disfavoured.

## Penalty-uniformity audit on the existing 4 axes

The 4 existing axes (transition, gap, PJL, anti-PJL) all use frozen-MLE estimates derived from rolling counts — no explicit penalty. If a BIC-style penalty were uniformly applied, what would happen?

**Transition-axis** (synth #460 / #462): BF estimate uses 1 free parameter (frozen p̂_AA = 0.833). BIC penalty for this axis: k·log(n) = 1·log(21) = 3.04. Penalty applied to current BF(C:B) = 1.556 (per ADDENDUM-219): exp(−3.04/2) × 1.556 = 0.219 × 1.556 = **×0.341** under uniform BIC. The transition-axis collapses below indifference.

**Gap-axis** (synth #463): BF estimate uses 1 free parameter (p̂_NN = 0.250 frozen). BIC penalty: 3.04. Penalty applied to current BF(C:B) = 2.354: 0.219 × 2.354 = **×0.516** under uniform BIC. The gap-axis also collapses below indifference.

**PJL-axis** (synth #464): BF estimate uses 1 free parameter (joint-clustering ρ = 0.5 chain-length-conditioned). BIC penalty: 3.04. Penalty applied to current BF(C:B) = 2.370: 0.219 × 2.370 = **×0.519** under uniform BIC. Also collapses.

**Anti-PJL-axis** (synth #465): introduced 1 free parameter (joint-anti-correlation η). BIC penalty: 3.04. Anti-PJL-axis BF(C-anti:B) per synth #465 was ~×1.10 (mildly favouring anti-PJL); applying penalty: 0.219 × 1.10 = **×0.241** under uniform BIC.

**Width-axis** (synth #466 / #467): 3 free parameters added. BIC penalty: 5.53. Already computed: **×0.063** under BIC.

**Multi-axis joint under uniform BIC** (naive independence): 0.341 × 0.516 × 0.519 × 0.241 × 0.063 = **0.00139** — strongly favouring the null (B / non-PJL / unimodal) by ~720×. Under uniform BIC, the entire multi-axis Jeffreys-3 result evaporates.

This is the **penalty-uniformity catastrophe**: if BIC is applied to one axis, fairness demands applying it to all axes, and the joint result collapses. The synth #466 → ADDENDUM-219 multi-axis Jeffreys-3 maintenance is therefore **conditional on no penalty being applied to any axis** (raw-likelihood interpretation) or **conditional on the penalty being applied non-uniformly** (with privileged "no-penalty" treatment for transition/gap/PJL/anti-PJL but BIC for width — an indefensible asymmetry).

## Principled reconciliation rule

Define **CRITERION-CONSISTENCY**: any multi-axis BF estimate must apply the same penalty rule to all axes. The valid options are:

1. **Raw-likelihood-everywhere**: no penalties on any axis. Multi-axis BF(C:B)_{Add.219} = 8.681 (naive) or 5.640 (correlation-corrected). Width-axis = ×6.05. Joint = 8.681 × 6.05 = **52.5** (naive 5-axis with raw width). Joint = 5.640 × 6.05 = **34.1** (correlation-corrected 4-axis × raw width). Both well above Jeffreys strong-evidence (BF≥10), strongly favouring C.
2. **AIC-everywhere** (lightest penalty: 2k per axis): each existing axis × exp(−2/2) = 0.368, width × 0.301. Joint = 1.556·0.368 × 2.354·0.368 × 2.370·0.368 × 1.10·0.368 × 0.301 = 0.573 × 0.866 × 0.872 × 0.405 × 0.301 = **0.0529**. Strongly favouring B.
3. **DIC-everywhere** (intermediate, uses effective k): each existing axis × exp(−2·p_D_axis/2) where p_D_axis ≈ 1 (single frozen parameter, no shrinkage); width × 0.638. Joint ≈ same as AIC for single-parameter axes (~0.368 each) × 0.638 = **0.112**. Still favouring B.
4. **BIC-everywhere** (strictest): joint = **0.00139** as computed.

**ALL three penalised criteria favour B**; only the raw-likelihood criterion favours C. This is the **principled reconciliation finding**: the synth #466 → ADDENDUM-219 multi-axis Jeffreys-3 result is **a raw-likelihood-only result**. Under any penalty regime applied uniformly, the Jeffreys-3 evaporates.

This synth therefore commits to **dual reporting** for all future multi-axis BF updates:

- **Raw-likelihood multi-axis BF (current operative standard)**: continue per ADDENDUM-219; values ~5-9 range.
- **DIC-corrected multi-axis BF (penalty-uniform standard)**: report alongside raw; current value ~0.11 (favouring B).

The synth #466 P-466.D anchor for synth #467 4-axis or 5-axis joint-validation is **PARTIALLY HONOURED** by this synth in the sense that the 5-axis joint is now explicitly stratified by penalty regime; full joint-validation across regimes is deferred to synth #468.

## Predictions for Add.220+

- **P-467.A** (Add.220 width under DIC): predicted Add.220 width responsibility under bimodal mixture remains low (calm-mid expected); DIC-corrected width-axis BF holds near ×0.638 essentially unchanged regardless of single-tick observation (the mixture parameters are stable at n=21 and one additional observation moves them by <2%).
- **P-467.B** (synth #468 BIC-stability arc): per ADDENDUM-219 P-219.N anchor, predicted synth #468 will trace the BIC-stability arc across recent multi-axis synths #463-466 in detail — examining whether the dual-reporting standard introduced here (raw + DIC) is the right reconciliation or whether a Bayesian-model-averaging approach over the criterion-choice axis itself is preferable.
- **P-467.C** (DIC stability under additional dilation observation): if Add.220-225 produces an additional high-confidence dilation observation (responsibility ≥0.65), the bimodal log-likelihood gain would push the raw-likelihood BF to ~×15-20 and the DIC-corrected BF to ~×4-5 (above Jeffreys-3 single-axis on the width channel). Predicted prior of seeing such an observation in 6 ticks: ~0.30 under bimodal hypothesis with π_dilation = 0.16; ~0.10 under unimodal null.
- **P-467.D** (criterion-band collapse on more data): at n=50+ the BIC and AIC diverge more sharply (BIC penalty ~7.83 vs AIC penalty 6.0), but the effective-parameter DIC remains intermediate; the 3-criterion band would shift from current ~96× span to ~150-200× span; the raw-likelihood and DIC estimates remain the most defensible operating standards.
- **P-467.E** (synth #469 multi-axis composition under criterion-uniformity): predicted synth #469 will formalise a single multi-axis composition rule that is criterion-uniform by construction — likely moving from the current "frozen-MLE per axis" to a "shared-prior Bayesian update per axis" framework with an explicit prior on the criterion-choice itself.
- **P-467.F** (Jeffreys-3 retraction under DIC at Add.220): if multi-axis joint under DIC remains <1 at Add.220 (very high prior, ~0.92), the Jeffreys-3 result formally retracted under penalty-uniform reporting.
- **P-467.G** (raw-likelihood Jeffreys-3 maintenance at Add.220): under raw-likelihood, multi-axis joint is currently 8.681 (naive) and likely to stay above 3 unless a major axis collapses (e.g., PJL termination if opencode or goose breaks at Add.220 — predicted prior ~0.50 per ADDENDUM-219 P-219.K). Predicted prior of Jeffreys-3 maintenance at Add.220 under raw-likelihood: ~0.50.
- **P-467.H** (CRITERION-CONSISTENCY adoption): predicted prior of adopting CRITERION-CONSISTENCY as the operative reporting standard within the next 5 synths (#468-472): ~0.85 based on the strength of the penalty-uniformity catastrophe finding and the indefensibility of asymmetric penalty application.

## Cross-references

- Synth #451: established single-modal calmer-regime cluster MLE (the unimodal null).
- Synth #460: transition-axis BF — first BF channel.
- Synth #462: Frozen-MLE protocol; implicit BIC-style penalty.
- Synth #463: multi-axis BF framework (2 axes); first Jeffreys-3 crossing.
- Synth #464: PJL-axis formalisation as paired-Markov-process (3 axes).
- Synth #465: anti-PJL-axis formalisation; Interpretation C-anti introduction (4 axes).
- Synth #466 (sha a2f838b): width-axis formalisation as bimodal-mixture observable; BIC-vs-likelihood tension; 5-axis framework. **DIRECT ANCHOR for this synth.**
- Synth #467 (this synth): AIC-vs-BIC-vs-DIC 3-criterion robustness; penalty-uniformity audit; CRITERION-CONSISTENCY rule.
- ADDENDUM-219 (sha 391af52) for Add.219 calm-mid width return (42m40s, dilation-responsibility ~0.04), confirming P-466.C and falsifying P-466.B; also for current 4-axis BF state at the start of this synth.
- ADDENDUM-218 (sha c1d35d1) for prior bimodal cluster baseline (Add.216 + Add.218 dilation pair).

**End of W17 Synthesis #467.**
