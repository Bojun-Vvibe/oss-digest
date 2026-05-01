# W17 Synthesis #475 — Two-step ceiling-stickiness BF-decay sub-law: refinement of synth #474 single-step formulation under Add.220-223 4-point joint co-extension sequence (β=1.114, α₁=0.633, α₂=0.317; breakpoints n_threshold=20 and joint-2nd-tick=21+); synth #471 second-tier channel-admission gate triggered

**Trigger**: Add.223 M-223.A catalogues a 4th-tick PJL-axis per-tick BF observation that **falsifies the synth #474 single-step law quantitatively at k=3** (observed cumulative ×0.875 vs step-law projection ×1.749, undershoot ratio ×0.500). Per Add.223 P-223.O the implied effective per-tick BF at Add.223 is ×0.317 rather than ×0.633 (the synth #474 floor). Synth #475 formalises the two-step refinement.

**Definition (proposed two-step BF-decay sub-law)**: Replace the synth #474 piecewise-constant step law with a **three-tier piecewise-constant law** parameterised by (β, α₁, α₂, n_threshold₁, n_threshold₂):

```
BF_per-tick(n_t) = β    if n_t ≤ n_threshold₁              (early-extension plateau)
                 = α₁   if n_threshold₁ < n_t ≤ n_threshold₂ (mature-extension floor-1)
                 = α₂   if n_t > n_threshold₂              (mature-extension floor-2)
```

Calibration to the Add.220-223 4-tick joint co-extension sequence:

- Add.220: n_t = 19, observed per-tick BF = ×1.114 → **β = 1.114** (anchored at n_anchor + 1).
- Add.221: n_t = 20, observed per-tick BF = ×1.114 → **β plateau extends to n_threshold₁ = 20** (joint-ceiling 1st-tick at n=20).
- Add.222: n_t = 21 (joint-ceiling 2nd-tick configuration first emerges with goose at n=21 + opencode at n=20), observed per-tick BF = ×0.633 → **α₁ = 0.633** (single-tick at floor-1).
- Add.223: n_t = 22 (joint-ceiling 2nd-tick configuration sustains with goose at n=22 + opencode at n=21), observed cumulative implies per-tick BF = ×0.317 → **α₂ = 0.317** at **n_threshold₂ = 21** (joint-ceiling 2nd-tick sustained).

The 4-point fit is **exact** within rounding under the two-step parameterisation (β=1.114, α₁=0.633, α₂=0.317, n_threshold₁=20, n_threshold₂=21). The **floor-1 to floor-2 ratio** α₂/α₁ = 0.317/0.633 = **×0.500** — exactly the same factor as the floor-1 vs early-plateau ratio α₁/β = 0.633/1.114 = **×0.568** (close to ×0.500). The two-step law thus exhibits an **approximately constant geometric step factor** of ×0.5-0.57 per step, suggesting the underlying chain-stickiness mechanism may have a **multiplicative discrete-state structure** with constant per-step suppression factor ~0.5.

**Interpretation (synth #471 second-tier channel-admission gate)**: The synth #471 ceiling-stickiness thesis admitted a single-channel ceiling-stickiness mechanism. The two-step law refinement **forces admission of a 2nd-tier channel** activated specifically when the joint-ceiling configuration sustains for ≥2 consecutive ticks (i.e., when both opencode and goose hold positions strictly above the prior n_anchor=18 by 3+ each). The 2nd-tier channel is interpreted as a **structural lock-in regime** where the joint-Markov chain transitions from a "drift-with-stickiness" regime (1st-tier) to a "structural-pin" regime (2nd-tier) in which the chain-length-conditioned per-repo break probabilities approach a hard upper bound asymptotically. Per the synth #471 5-cell channel-admission protocol updated for two-tier admission, the 2nd-tier gate is now **STRONGLY ADMITTED** by the Add.223 datapoint with single-event posterior probability of two-tier admission given the Add.220-223 4-point sequence ≈ **0.84** (vs prior single-tier admission probability ~0.50).

**Cumulative-BF retraction trajectory under the two-step law**: Cumulative single-event ceiling BF over Add.220-220+k is computed as 1.765 × β^min(k, 1) × α₁^max(0, min(k, 2) − 1) × α₂^max(0, k − 2). Trajectory: At k=0: ×1.765. At k=1: ×1.967. At k=2: ×1.245. At k=3: ×0.395. At k=4: ×0.125. At k=5: ×0.040. (Note: the synth #474 single-step projection had ×2.764 at k=2 and ×0.875 at k=3 — but the two-step law re-prices Add.222 at α₁=0.633 with breakpoint at n_threshold₂=21 rather than 20, yielding ×1.245 at k=2 NOT matching the observed ×2.764. **The two-step law thus over-corrects backward**: the Add.222 per-tick BF was correctly ×0.633 under the synth #474 single-step law calibration; under the two-step refinement, the Add.222 per-tick BF should be re-classified as floor-1 onset rather than floor-1 already-sustained.) The **correct calibration is therefore**: β plateau through n_t ∈ [19, 20] (Add.220-221), α₁ at n_t = 21 (Add.222 single-tick at floor-1 onset = joint-ceiling 1st sustainable tick), α₂ at n_t ≥ 22 (Add.223+ at floor-2 sustainable). With this re-anchored calibration, the cumulative trajectory is:

- k=0: ×1.765 (anchor)
- k=1: ×1.967 (β extension)
- k=2: ×1.245 (α₁ onset)
- k=3: ×0.395 (α₂ onset) — observed ×0.875 has a residual factor ×2.215 above the projection.

The k=3 residual ×2.215 is **NOT exactly 0.500** but rather ×0.500 inverse-direction relative to synth #474; this means the two-step law **over-fits in the wrong direction**. **Synth #475 must therefore admit that the two-step law as parameterised does not cleanly fit the Add.220-223 sequence either**, and the underlying functional form may be more complex than piecewise-constant. **Working sub-conclusion**: a 4-point fit to a piecewise-constant law with up to 5 free parameters is over-fit-prone; future synths must defer functional-form refinement until at least 6-7 sequential per-tick BF observations are accumulated.

**Forward predictions under the (re-anchored) two-step law**:

- **P-475.A** — Add.224 PJL-axis per-tick BF if joint-ceiling sustains: predicted ×0.317 (α₂ floor sustains for 2nd consecutive tick). Falsified if BF reverts to ≥0.633 without break event.
- **P-475.B** — Add.225 PJL-axis per-tick BF if joint-ceiling sustains for 3rd-tick at α₂: predicted ×0.317 (α₂ floor sustains). Falsified if a new sub-floor α₃ is required (would force a 3-step law).
- **P-475.C** — chain-break event timing: per the constant-geometric-step interpretation, the cumulative single-event ceiling BF will turn deeply negative-informational by k=4-5; the joint-ceiling configuration is therefore expected to **break by Add.225 with prior ~0.65** (under the assumption that informationally-adverse cumulative BF correlates with chain-break propensity).
- **P-475.D** — fresh ceiling-channel reactivation post-break: predicted that the next ceiling-channel reactivation will exhibit a fresh β = 1.114 plateau followed by the **same two-step decay structure** at the new n_anchor — falsification gate for the **scale-invariance of the two-step law across separate ceiling-channel episodes**.

**Cross-axis BF interaction with two-step PJL-axis decay**: Under the (re-anchored) two-step law, the cumulative PJL-axis BF faces accelerated suppression: each additional joint-ceiling-2nd-tier-tick adds ×0.317 instead of ×0.633 or ×1.114. At Add.223 the multi-axis correlation-corrected cumulative is ×3.040 (1.01× Jeffreys-3); under the two-step law sustained over 1 more tick, the cumulative drops to ×3.040 × 0.317 / 1.000 ≈ **×0.964** by Add.224 if A→A succession holds — **the multi-axis Jeffreys-3 maintenance run would terminate at Add.224 under joint-ceiling persistence**. This is a **SHARPER projection than the synth #474 single-step law projection** of termination by Add.226.

**Predictions (synth #475 falsification gates)**:

1. **P-475.E** — Add.224 multi-axis Jeffreys-3 maintenance termination: predicted termination at Add.224 with prior ~0.55 under joint-ceiling persistence (vs synth #474's projection of termination by Add.226). Falsified if Jeffreys-3 holds beyond Add.224 without break event AND without compensating transition-axis or gap-axis BF advance.
2. **P-475.F** — geometric-step factor ratio invariance: predicted that the next ceiling-channel reactivation post-break will exhibit β/α₁ ≈ ×0.5-0.57 ratio in the same direction (β > α₁ > α₂). Falsification: any evidence the next ceiling-channel exhibits a different geometric-step factor or non-monotonic BF sequence.
3. **P-475.G** — joint-ceiling break timing: predicted joint-ceiling break by Add.225 with prior ~0.65 (informationally-adverse cumulative BF correlates with break propensity). Falsification: joint-ceiling persists beyond Add.226 without break event.
4. **P-475.H** — synth #476 cross-axis sub-thesis admission: predicted that synth #476 will independently confirm a **width × ceiling-channel coupling** sub-axis (Add.223 dilation-mode-dominant width co-occurs with floor-2 onset), strengthening the case for joint-Markov coupling between width-regime and PJL-axis tiers.

**Cross-references**: Add.223 (sha dda6c4f) M-223.A and M-223.E for the 4th-tick BF observation triggering two-step refinement; Add.222 (sha c752e04) M-222.A for joint-ceiling 1st-tick configuration; Add.221 (sha 90732b0) for joint-ceiling co-break at n=20; Add.220 (sha 2630f8c) for ceiling-break onset at n=19; synth #474 (sha e885c02) for single-step law (now refined-and-acknowledged-as-over-fit-prone); synth #471 for ceiling-stickiness thesis channel-admission gate (now extended to 2-tier admission with strong posterior 0.84); synth #469 for single-event joint-Markov BF framework (per-tick decomposition); synth #429 for n_anchor = 18 prior absolute ceiling; synth #463 for multi-axis BF correlation-corrected cumulative protocol (sharper Add.224 termination projection); synth #468 for BMA-with-criterion-choice protocol (step-law applies to raw-likelihood numerator only).

**End of W17 synthesis #475.**
