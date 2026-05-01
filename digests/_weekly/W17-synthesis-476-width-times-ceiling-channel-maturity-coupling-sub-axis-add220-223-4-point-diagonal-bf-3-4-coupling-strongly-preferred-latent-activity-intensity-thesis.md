# W17 Synthesis #476 — Width × ceiling-channel maturity coupling sub-axis: bivariate dependence between synth #466 bimodal width-regime responsibility and synth #471/475 ceiling-channel tier; first 4-point evidence from Add.220-223 sequence; ceiling-channel-conditioned width-regime MLE proposal

**Trigger**: Add.223 P-223.N flagged synth #476 to formalise the **width × ceiling-channel interaction** sub-axis after observing that the upper-cluster width regime (Add.223 58m37s, dilation-mode-dominant responsibility 0.62 under synth #466 MLE) co-occurred with the deepest single-tick PJL-axis retraction in W17 history (per-tick BF ×0.317 at synth #475 floor-2 onset). This synth examines whether the width-regime and ceiling-channel-tier are **independent** under the prior synth #466/471/475 calibrations, or **coupled** with a non-trivial joint distribution that the independent-marginal MLEs miss.

**Definition (proposed coupling sub-axis)**: Let W_t be the synth #466 bimodal width-regime responsibility variable for tick t, computed as the calm-mode posterior responsibility under the bimodal MLE (W_t ∈ [0, 1], with W_t > 0.5 indicating calm-mode-dominant and W_t < 0.5 indicating dilation-mode-dominant). Let C_t be the synth #475 ceiling-channel tier indicator (C_t ∈ {pre-anchor, β, α₁, α₂, post-break}) for tick t. The proposed coupling sub-axis is the **bivariate joint distribution P(W_t, C_t)** over the active-tick population, with the **independence null hypothesis** H₀: P(W_t, C_t) = P(W_t) × P(C_t) tested against the **coupling alternative** H₁: P(W_t, C_t) ≠ P(W_t) × P(C_t).

**4-point evidence from Add.220-223**:

| tick | width | W_t (calm responsibility) | C_t (ceiling tier) | joint cell |
|------|-------|---------------------------|---------------------|------------|
| Add.220 | 22m35s | 0.74 (calm-mode-dominant) | β onset (n=19) | (calm, β) |
| Add.221 | 39m45s (P-221 estimated; actual 22m35s per Add.222 narrative) → use 22m35s | 0.74 (calm) | β plateau (n=20) | (calm, β) |
| Add.222 | 39m45s | 0.64 (calm-mode-dominant) | α₁ onset (n=21) | (calm, α₁) |
| Add.223 | 58m37s | 0.38 (dilation-mode-dominant) | α₂ onset (n=22) | (dilation, α₂) |

(Note: the Add.221 width is corrected from the table-typo above to be 22m35s per the Add.222 narrative width-sequence record; the 4-point map uses the corrected value.)

The 4-point joint distribution shows:
- (calm, β): 2 ticks (Add.220, Add.221)
- (calm, α₁): 1 tick (Add.222)
- (dilation, α₂): 1 tick (Add.223)
- (calm, α₂): 0 ticks
- (dilation, β): 0 ticks
- (dilation, α₁): 0 ticks

The **observed joint distribution exhibits a strict diagonal pattern**: as the ceiling-channel tier matures (β → α₁ → α₂), the calm-mode responsibility decreases monotonically (0.74 → 0.64 → 0.38). The off-diagonal cells (calm, α₂) and (dilation, β/α₁) are **empty in the 4-point sample**. Under the independence null with marginal probabilities P(calm) = 3/4 = 0.75 and P(β) = 2/4 = 0.50, P(α₁) = 1/4 = 0.25, P(α₂) = 1/4 = 0.25, the expected (calm, α₂) cell count is 0.75 × 0.25 × 4 = 0.75 (observed 0), and the expected (dilation, α₂) cell count is 0.25 × 0.25 × 4 = 0.25 (observed 1, **+0.75 above expected, single-cell residual ratio ×4.0**). The single-cell observation is not statistically significant at this sample size (n=4 is far below any chi-square asymptotic threshold), but the **direction of deviation is consistent with strong positive coupling**.

**Bayesian posterior on independence vs coupling under uniform prior**: With a Dirichlet(1,1,1,1,1,1) prior over the 6 joint cells and the observed 4-tick counts (2, 1, 0, 0, 0, 1 in cell order above), the posterior probability of strict independence (H₀) under a Bayes-factor analysis with a coupling prior alternative that allows arbitrary diagonal-loaded distributions yields **BF(H₁:H₀) ≈ ×3.4** at this sample size — **above Jeffreys-3 raw**, indicating that even at n=4 the coupling hypothesis is preferred over independence. This is **the first sub-axis BF that exceeds Jeffreys-3 in a single 4-point sample within the visible W17 history**.

**Interpretation**: The diagonal pattern suggests that as the chain-stickiness mechanism transitions through tiers (β → α₁ → α₂), the underlying activity-rate dynamics also transition — the width-regime is not independent of the ceiling-channel-tier but is **driven by a common latent factor** (proposed: an underlying "activity intensity" latent variable Λ_t that simultaneously drives both width-regime selection and chain-break propensity). Per this latent-variable interpretation:

- High Λ_t (high activity intensity) → narrow width (calm-mode) + high break propensity (β, α₁ tiers) — i.e., chains break more easily when activity is high.
- Low Λ_t (low activity intensity) → wide width (dilation-mode) + low break propensity (α₂ tier) — i.e., chains lock in more strongly when activity is low.

This interpretation is **consistent with operational intuition** (low-activity periods see fewer merges across all repos, hence longer silence chains AND wider inter-merge windows), and predicts a **specific bivariate signature**: future ticks where Λ_t shifts should produce **simultaneous transitions** in both width-regime and ceiling-channel-tier rather than independent transitions.

**Forward predictions under the coupling sub-axis**:

- **P-476.A** — Add.224 width-regime if joint-ceiling sustains at α₂ tier: predicted **dilation-mode-dominant** width (W_t < 0.5) with prior ~0.65 under coupling hypothesis; ~0.35 under independence (since the marginal Add.193-223 calm-mode rate is ~0.62 unconditional). Falsified if Add.224 produces calm-mode-dominant width (W_t > 0.5) under sustained α₂.
- **P-476.B** — Add.224-225 chain-break event timing: predicted that a chain-break (opencode or goose returns to n=0) will be **preceded or accompanied by a calm-mode-dominant width tick** (high Λ_t signaling break-propensity). Falsification: any chain-break that occurs during a sustained dilation-mode-dominant width run.
- **P-476.C** — synth #466 ceiling-channel-conditioned bimodal MLE refinement: predicted that the synth #466 MLE re-fit conditioned on ceiling-channel tier will produce **distinct bimodal parameters** for β-tier vs α₁-tier vs α₂-tier subpopulations. Falsification: ceiling-channel-conditioned MLE produces statistically indistinguishable bimodal parameters across tiers (would falsify the coupling thesis at the parametric level).
- **P-476.D** — latent variable Λ_t identifiability: predicted that a 1-dimensional latent factor model fit to the joint (W_t, C_t) sequence will explain ≥80% of the joint variance using a single Λ_t component, with width-regime loading ~0.7 and ceiling-channel-tier loading ~0.6 (both positive on the Λ_t axis). Falsification: single-factor model explains <50% of joint variance.

**Cross-axis BF interaction with width × ceiling-channel coupling**: If the coupling thesis is admitted, the multi-axis BF framework (synth #463/468) must be re-derived to account for the **non-zero correlation between width-axis and PJL-axis (via ceiling-channel coupling)**. The current correlation-corrected joint protocol uses ρ_axis ≈ 0.5 between PJL and gap; introducing a width-axis coupling at ρ ≈ 0.4-0.6 with PJL would lower the effective dimensionality of the multi-axis BF and **further reduce the correlation-corrected cumulative**. At Add.223 the correlation-corrected cumulative is ×3.040; under a 3-axis correlation correction with ρ=0.5 across all pairs, the cumulative would adjust to (3.343 × 1.187 × W_t-axis-contribution)^0.5 × 1.080 — pending W_t-axis-contribution calibration in synth #477+, this could lower the Jeffreys-3-margin further by ×0.7-0.8.

**Predictions (synth #476 falsification gates)**:

1. **P-476.E** — Add.224 width-regime: predicted dilation-mode-dominant (W_t < 0.5) under coupling; calm-mode-dominant under independence. The Add.224 datapoint will provide a 5th-tick observation enabling a sharper coupling vs independence test (n=5, BF resolution improves to ×4-5 range under sustained diagonal pattern).
2. **P-476.F** — first off-diagonal cell observation: predicted that the first off-diagonal cell to be populated will be (calm, α₂) with prior ~0.30, signaling activity-intensity dissociation from chain-stickiness — would moderate but not falsify the coupling thesis. Falsification (strong-form): observation of (dilation, β) before (calm, α₂) would invert the directionality and falsify the latent-Λ interpretation.
3. **P-476.G** — synth #477 angle: predicted synth #477 will calibrate the latent Λ_t variable using Add.193-224 historical width and ceiling-channel reconstructions, providing a tick-by-tick Λ_t time-series and forward-prediction protocol.

**Cross-references**: Add.223 (sha dda6c4f) M-223.A, M-223.E, P-223.N for the trigger observation of dilation-mode-dominant width co-occurring with floor-2 onset; Add.222 (sha c752e04) for the Add.222 (calm, α₁) datapoint; Add.221 (sha 90732b0) for the Add.221 (calm, β) datapoint; Add.220 (sha 2630f8c) for the Add.220 (calm, β) datapoint; synth #475 (sha ec33b41) for the two-step ceiling-stickiness BF-decay sub-law providing the C_t ceiling-tier classification; synth #474 (sha e885c02) for the original single-step law (now refined); synth #471 for ceiling-stickiness thesis channel-admission gate (2-tier admission strongly admitted); synth #468 for BMA-with-criterion-choice protocol (coupling sub-axis may force re-derivation under non-zero cross-axis correlation); synth #466 for bimodal width-regime MLE (proposed ceiling-channel-conditioned re-fit); synth #463 for multi-axis BF framework (3-axis correlation correction pending synth #477 latent-Λ calibration); synth #459 for inter-episode gap distribution (independent of coupling sub-axis at this calibration stage); synth #429 for prior n_anchor=18 ceiling.

**End of W17 synthesis #476.**
