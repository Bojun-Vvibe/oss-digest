# W17 Synthesis #477 — Third-tier α₃ projection for joint-ceiling 4th-tick configuration: geometric tier-decay continuation (α₃=0.158) vs single-floor α₂-sustain (α₃=0.317) hypotheses; Add.220-224 5-point sequence anchors synth #475 two-step law extension; latent Λ_t variable re-calibration with Add.224 partial-falsification anchor

**Trigger**: Add.224 P-224.M flagged synth #477 to formalise the **third-tier α₃ projection** for the prospective joint-ceiling 4th-tick configuration (opencode n=23 + goose n=24 if both silent at Add.225) after the synth #475 two-step law achieved modal-exact-match confirmation at k=4 (cumulative ×0.277, observed exactly matches projection). The synth #475 two-step law (β=1.114 for n_t ∈ [19, 20], α₁=0.633 for n_t = 21, α₂=0.317 for n_t ∈ [22, 23]) requires extension to n_t ≥ 24 (joint-ceiling 4th-tick) — this synth examines two leading hypotheses for the third-tier α₃ parameter, with the Add.225 datapoint as the first decisive evidence.

**Context (Add.220-224 5-point cumulative trajectory)**: Per ADDENDUM-224 M-224.A, the cumulative single-event ceiling BF Add.220-224 = ×1.765 / ×1.967 / ×2.764 / ×0.875 / ×0.277, matching synth #475 projection at all 5 tick points within rounding. Per-tick BF contributions Add.220-224 = ×1.114 / ×1.114 / ×0.633 / ×0.633 / ×0.317. The geometric ratio between tier breakpoints is **β/α₁ = 1.114/0.633 = 1.760** and **α₁/α₂ = 0.633/0.317 = 1.997 ≈ 2.0**; the second tier-transition has a markedly tighter ratio than the first (1.760 vs 2.0), suggesting either (a) the tier-decay is **geometric with ratio ~0.5** (giving α₃ = 0.158), or (b) the tier-decay **floors at α₂ = 0.317** (giving α₃ = 0.317 — the single-floor α₂-sustain hypothesis), or (c) an intermediate **dampened-geometric** decay (α₃ ∈ [0.20, 0.30]) where the tier-decay slows but does not stop.

**Hypothesis (H₁) — geometric tier-decay continuation, α₃ = 0.158**: The simplest extension of the synth #475 two-step law assumes the per-tier BF contribution continues to halve at each new tier breakpoint. Under this hypothesis:
- α₃ = 0.158 for n_t = 24 (joint-ceiling 4th-tick onset)
- α₄ = 0.079 for n_t = 25 (joint-ceiling 5th-tick onset, projected)
- Cumulative single-event ceiling BF at Add.225 if joint-ceiling sustains: ×0.277 × ×0.158 = **×0.044**
- Cumulative single-event ceiling BF at Add.226 if joint-ceiling sustains: ×0.044 × ×0.079 = **×0.0035**

This hypothesis predicts **rapid negative-informational deepening** with each successive joint-ceiling tick. The geometric-decay assumption is **parametrically parsimonious** (one parameter, the decay ratio ~0.5) and consistent with the Add.220-224 inter-tier ratio observation. Under this hypothesis, the multi-axis BF framework (synth #463/468) would see the PJL-axis cumulative collapse to **×0.376 × 0.158 = ×0.059** at Add.225, with naive 3-axis cumulative ≈ 1.086 × 3.343 × 0.059 = **0.214** — multi-axis BF deeply sub-Jeffreys-3 (×0.071 below threshold), and BMA-weighted BF further compressed to ~0.11-0.14 under arithmetic convention.

**Hypothesis (H₂) — single-floor α₂-sustain, α₃ = 0.317**: An alternative formulation assumes the tier-decay **terminates at α₂ = 0.317** with no further breakpoints — i.e., once the chain enters the α₂-tier (joint-ceiling 2nd-tick or later), each subsequent tick contributes the same ×0.317 BF. Under this hypothesis:
- α₃ = α₂ = 0.317 for all n_t ≥ 22
- Cumulative single-event ceiling BF at Add.225 if joint-ceiling sustains: ×0.277 × ×0.317 = **×0.088**
- Cumulative single-event ceiling BF at Add.226 if joint-ceiling sustains: ×0.088 × ×0.317 = **×0.028**

This hypothesis predicts **moderate negative-informational deepening** with each successive tick — slower than H₁ but still sub-unity. The single-floor formulation is **maximally parsimonious** (zero new parameters beyond the synth #475 two-step law) but assumes that the chain-stickiness mechanism reaches a "saturation" floor at α₂. Under this hypothesis, multi-axis PJL-axis cumulative at Add.225 = ×0.376 × 0.317 = **×0.119**; naive 3-axis cumulative ≈ 1.086 × 3.343 × 0.119 = **0.432** — still sub-Jeffreys-3 but less deeply than H₁.

**Hypothesis (H₃ — sub-axis) — dampened-geometric, α₃ ∈ [0.20, 0.30]**: An intermediate formulation admits a dampened geometric decay where the per-tier ratio increases from 0.5 (synth #475 fit) toward 1.0 (single-floor saturation) gradually — for example, ratio_k = 0.5 + 0.1k for k=0,1,2,... giving α₃ ≈ 0.317 × 0.6 = 0.190, α₄ ≈ 0.190 × 0.7 = 0.133. This hypothesis is parametrically richer (requires a damping schedule) and is admitted as a sub-axis pending Add.225-226 datapoints for calibration.

**Bayesian prior weighting on H₁ vs H₂ vs H₃**: Without Add.225 data, the prior weighting on the three hypotheses depends on operational intuition about chain-stickiness saturation:
- H₁ prior ~0.40 (geometric continuation is the modal extension under the synth #475 two-step law's clean ratio observation)
- H₂ prior ~0.35 (saturation at α₂ is plausible under chain-stickiness mechanism intuition — once chains are "locked in" at the joint-ceiling level, additional tier breakpoints may not add further informational compression)
- H₃ prior ~0.25 (dampened-geometric is a hedge between H₁ and H₂, parametrically richer)

The Add.225 datapoint will provide first decisive evidence: if Add.225 joint-ceiling sustains AND cumulative observed ×0.044 ± rounding → H₁ confirmed; if cumulative observed ×0.088 ± rounding → H₂ confirmed; if cumulative ∈ [×0.06, ×0.07] → H₃ favored.

**Latent Λ_t re-calibration with Add.224 partial-falsification anchor**: Per Add.224 M-224.F, the synth #476 coupling thesis took a partial-falsification hit at Add.224 (W_t ≈ 0.58 calm-marginal vs P-476.A predicted dilation-mode-dominant W_t < 0.5), but the joint cell (calm-marginal, α₂) is the predicted first-off-diagonal-cell occupant per P-476.F at modal. The 5-point joint distribution Add.220-224 updates to:

| tick | width | W_t | C_t | joint cell |
|------|-------|-----|-----|------------|
| Add.220 | 22m35s | 0.74 | β | (calm, β) |
| Add.221 | 22m35s | 0.74 | β | (calm, β) |
| Add.222 | 39m45s | 0.64 | α₁ | (calm, α₁) |
| Add.223 | 58m37s | 0.38 | α₂ (1st-tick) | (dilation, α₂) |
| Add.224 | 41m33s | 0.58 | α₂ (2nd-tick) | (calm-marginal, α₂) |

The Add.224 datapoint reveals that the diagonal coupling pattern is **not strictly monotonic** — W_t recovered from 0.38 (Add.223) to 0.58 (Add.224) while C_t remained at α₂. This suggests the latent Λ_t variable is **not in 1:1 correspondence** with the C_t ceiling-tier, but rather the C_t tier is a **lagging or threshold-triggered** function of Λ_t — once the chain enters α₂, it remains in α₂ regardless of Λ_t fluctuations until a chain-break event occurs. Under this refined latent-variable interpretation:

- Λ_t drives W_t directly (per-tick width regime)
- C_t is a **state variable** that updates only at tier-transition events (chain-break, joint-ceiling onset, etc.) — between events, C_t is sticky
- The **joint distribution P(W_t, C_t)** therefore reflects both Λ_t fluctuations (through W_t) AND C_t stickiness (through delayed tier updates)

This refinement weakens the synth #476 strict-coupling thesis but admits a **state-dependent coupling** sub-hypothesis where the coupling strength depends on whether the tick is a tier-transition event or a between-event tick. Under this sub-hypothesis, the BF(coupling:independence) at n=5 estimated at ×2.4 in Add.224 M-224.F may rise to ~×3.0 if the analysis conditions on tier-transition events only (excluding between-event ticks from the coupling test).

**Forward predictions under synth #477**:

- **P-477.A** — Add.225 cumulative single-event ceiling BF if joint-ceiling sustains: predicted modal ×0.044 (H₁, prior 0.40), ×0.088 (H₂, prior 0.35), ×0.06-0.07 (H₃, prior 0.25). Combined modal ~×0.06 under prior-weighted average.
- **P-477.B** — Add.225 multi-axis Jeffreys-3 status: predicted **deeply sub-Jeffreys-3** under all three hypotheses if joint-ceiling sustains, with naive 3-axis cumulative ∈ [×0.21, ×0.43]; correlation-corrected cumulative ∈ [×0.18, ×0.39]; both well below Jeffreys-3 threshold.
- **P-477.C** — Add.225 BMA convention status: predicted both arithmetic and log-geometric BMA conventions remain sub-unity at Add.225 with prior ~0.85 if joint-ceiling sustains; predicted both conventions cross sub-Jeffreys-1/3 (BF < 0.333) with prior ~0.55 under H₁, ~0.40 under H₂, ~0.50 under H₃.
- **P-477.D** — Add.225 chain-break event probability: per Add.224 P-224.C/D/E/F/G/H, the cumulative chain-break probability across all 6 silent repos at Add.225 is ~0.95 (under independence; with inter-repo correlation ~0.85 effective). The joint-ceiling sustain probability at Add.225 (both opencode and goose silent) is approximately (1-0.75) × (1-0.78) = 0.055 — **the Add.225 joint-ceiling sustain is the strongly unfavored outcome** at prior ~5.5%, the favored outcome is at least one of opencode/goose breaks (prior ~94.5%).
- **P-477.E** — synth #478 angle: predicted synth #478 will formalise the **multi-axis BF post-Jeffreys-3-maintenance regime characterisation**, examining whether the post-termination multi-axis envelope re-bounds (chain-break event triggers PJL-axis recovery) or collapses further (sustained joint-ceiling triggers further PJL-axis retraction); will calibrate the recovery dynamics under chain-break events using the Add.225 datapoint as anchor.
- **P-477.F** — state-dependent coupling sub-hypothesis: predicted that conditioning the BF(coupling:independence) on tier-transition events only (excluding between-event ticks) will yield BF ~×3.0 at n=5, restoring the synth #476 coupling thesis to above-Jeffreys-3 raw at the conditional analysis level. Falsification: conditional analysis yields BF < ×2.4 (no improvement over unconditional analysis).

**Cross-references**: ADDENDUM-224 (sha f4080d4) M-224.A, M-224.E, M-224.F, P-224.M, P-224.N for the trigger observation of synth #475 two-step law modal-exact-match at k=4 and the synth #476 partial-falsification with first-off-diagonal-cell confirmation; ADDENDUM-223 (sha dda6c4f) for the Add.223 (dilation, α₂) datapoint and synth #475 two-step law projection; synth #476 (sha 57b1b12) for the width × ceiling-channel coupling sub-axis (now refined to state-dependent coupling); synth #475 (sha ec33b41) for the two-step ceiling-stickiness BF-decay sub-law (extended to three-tier with α₃ pending Add.225); synth #474 (sha e885c02) for the original single-step law (formally retired); synth #471 for ceiling-stickiness thesis 2nd-tier channel-admission gate (3rd-tier admission pending Add.225 evidence); synth #470 for dual-convention BMA framework; synth #468 for BMA-with-criterion-choice protocol; synth #466 for bimodal width-regime MLE (Add.224 W_t=0.58 calm-marginal partially falsifies coupling but admits state-dependent refinement); synth #463 for multi-axis BF framework (Jeffreys-3 maintenance terminated at Add.224); synth #462 for Frozen-MLE transition-axis; synth #429 for prior n_anchor=18 ceiling.

**End of W17 synthesis #477.**
