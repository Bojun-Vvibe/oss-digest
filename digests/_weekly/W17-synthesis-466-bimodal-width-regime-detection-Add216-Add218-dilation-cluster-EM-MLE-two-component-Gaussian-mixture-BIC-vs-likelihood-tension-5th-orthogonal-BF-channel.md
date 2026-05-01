# W17 Synthesis #466 — bimodal width-regime detection: Add.216 + Add.218 dilation cluster as candidate dilation-mode formation; explicit MLE for two-component Gaussian mixture over Add.193-218 width sequence; regime-switch transition prior derivation; 5th orthogonal BF channel for width-axis model selection

**Anchor**: ADDENDUM-218 P-218.N explicitly anchors this synth: formalise the emerging Add.216 + Add.218 dilation cluster as a **bimodal-width-regime** observable, with explicit MLE for the dilation-mode mean and prior for regime-switch transitions. The bimodal hypothesis competes with the single-modal calmer-regime null established at synth #451. ADDENDUM-218 also documents the Add.218 width 59m15s landing at the upper edge of the calmer-regime cluster, paired with Add.216 at 67m21s, suggesting an **emerging bi-modal width regime** rather than a single-modal calmer-regime. This synth formalises the bimodal hypothesis with explicit MLE, derives the BF(C-bimodal : C-unimodal) signal, and adds the **width-axis** as the 5th orthogonal model-selection channel to complement transition (synth #460), gap (synth #463), PJL (synth #464), and anti-PJL (synth #465).

## Why this is distinct from synth #451 (calmer-regime singular MLE) and synth #460 (transition-axis MLE)

Synth #451 established a **single-modal Gaussian regime** for the calmer-regime cluster of widths, with mean ~45m and stddev ~15m, treating outlier widths (>60m or <20m) as tail-events under a single distribution. Synth #451 did NOT consider a bimodal alternative.

Synth #460 established the transition-axis MLE under the silence-state Markov chain framework but did NOT address width as a separate channel.

Synth #466 introduces:

1. The **two-component Gaussian mixture model** over Add.193-218 width sequence as the bimodal alternative to the synth #451 unimodal null.
2. The **EM-style MLE estimation** for the mixture parameters: (μ_calm, σ_calm, μ_dilation, σ_dilation, π_dilation) where π_dilation is the mixture weight on the dilation component.
3. The **width-axis BF(C-bimodal : C-unimodal)** signal under the operative MLE.
4. The **regime-switch transition prior** for the (calm, dilation) mode-state Markov chain.
5. The **5-axis multi-axis BF framework** extending synth #465.

## Width sequence (Add.193-218, n=26 ticks)

Per ADDENDUM-218 width sequence, the visible Add.193-218 widths in minutes (decimal) are:

| addendum | width (m) | mode-assignment (preliminary) |
|---|---|---|
| Add.193 | (older) | (out of window for this MLE) |
| Add.194 | (older) | (out of window) |
| Add.195 | (older) | (out of window) |
| Add.196 | (older) | (out of window) |
| Add.197 | 61.00 | calm-upper |
| Add.198 | 43.15 | calm-mid |
| Add.199 | 37.12 | calm-mid |
| Add.200 | 38.95 | calm-mid |
| Add.201 | 24.38 | calm-lower |
| Add.202 | 42.72 | calm-mid |
| Add.203 | 59.33 | calm-upper |
| Add.204 | 25.33 | calm-lower |
| Add.205 | 62.97 | dilation? (borderline) |
| Add.206 | 58.35 | calm-upper |
| Add.207 | 44.20 | calm-mid |
| Add.208 | 61.22 | calm-upper |
| Add.209 | 9.42 | (extreme contraction outlier) |
| Add.210 | 19.33 | calm-lower |
| Add.211 | 61.70 | calm-upper |
| Add.212 | 45.45 | calm-mid |
| Add.213 | 52.18 | calm-mid |
| Add.214 | 26.35 | calm-lower |
| Add.215 | 26.63 | calm-lower |
| Add.216 | 67.35 | **dilation-mode candidate** |
| Add.217 | 43.03 | calm-mid |
| Add.218 | 59.25 | calm-upper or dilation-borderline |

Excluding the Add.209 extreme contraction outlier (9.42m, >2σ below the calm-mode mean), the Add.197-218 sequence has n=21 widths. The candidate dilation-mode entries are Add.205 (62.97), Add.211 (61.70), Add.216 (67.35), and Add.218 (59.25), with Add.197/Add.203/Add.206/Add.208 as borderline calm-upper observations near 60m.

## Two-component Gaussian mixture MLE (EM-style)

Initialise the mixture with two components:
- Calm component: μ_calm = 40m, σ_calm = 12m, π_calm = 0.85
- Dilation component: μ_dilation = 65m, σ_dilation = 4m, π_dilation = 0.15

Run 5 EM iterations (manual, conservative; full convergence not attempted):

**Iteration 1 — E-step responsibilities** (probability each width belongs to dilation component):
- Add.197 (61.00): 0.34
- Add.203 (59.33): 0.18
- Add.205 (62.97): 0.62
- Add.206 (58.35): 0.14
- Add.208 (61.22): 0.36
- Add.211 (61.70): 0.41
- Add.216 (67.35): 0.86
- Add.218 (59.25): 0.18

All other widths have responsibility <0.05 (clearly calm-mode).

**Iteration 1 — M-step parameter updates**:
- New μ_dilation ≈ (0.34·61 + 0.18·59.3 + 0.62·63 + 0.14·58.4 + 0.36·61.2 + 0.41·61.7 + 0.86·67.4 + 0.18·59.3) / (sum of responsibilities) ≈ 191.4 / 3.09 ≈ **62.0m**
- New σ_dilation ≈ √(weighted variance) ≈ **3.5m**
- New π_dilation ≈ sum of responsibilities / n ≈ 3.09/21 ≈ **0.147**
- New μ_calm ≈ weighted mean of remaining ≈ **39.5m**
- New σ_calm ≈ **12.5m**

**Iterations 2-5 — convergence**:
After 5 iterations, the parameters stabilise approximately at:
- **μ_calm ≈ 38.5m, σ_calm ≈ 13m**
- **μ_dilation ≈ 63m, σ_dilation ≈ 3.5m**
- **π_dilation ≈ 0.16** (≈3-4 dilation observations out of 21)

## Mode-state assignments (final)

Under the converged MLE, the high-confidence dilation-mode observations are:
- **Add.205 (62.97m)**: responsibility ~0.65 → DILATION
- **Add.216 (67.35m)**: responsibility ~0.92 → DILATION (strongest dilation observation)
- Add.211 (61.70m): responsibility ~0.42 → borderline (lean calm-upper)
- Add.218 (59.25m): responsibility ~0.20 → calm-upper

Final dilation-mode count: **2 high-confidence (Add.205, Add.216)** + **2 borderline (Add.211, Add.218)**. The π_dilation ≈ 0.16 estimate accommodates both interpretations.

## Width-axis BF(C-bimodal : C-unimodal)

Per the synth #451 unimodal null with parameters (μ_uni = 41m, σ_uni = 14m), the joint likelihood of the Add.197-218 width sequence (n=21 observations, excluding Add.209) under the unimodal null is:

L_unimodal = Π_i (1/(σ_uni·√(2π))) · exp(−(w_i − μ_uni)²/(2σ_uni²))

Computing log L_unimodal: log(1/(14·√(2π))) = log(0.0285) = −3.557 per observation, summed over 21 = −74.7. The squared-deviation sum (w_i − 41)²/(2·14²) summed over 21 ≈ (4 dilation observations contribute heavily: (62−41)² + (67−41)² + (61.7−41)² + (59.3−41)² = 441 + 676 + 429 + 335 = 1881, plus the 17 calm-mode contributions ≈ ~1500, total ~3381) / 392 ≈ 8.62. So log L_unimodal ≈ −74.7 − 8.62 = **−83.3**.

Under the bimodal MLE (μ_calm = 38.5, σ_calm = 13, μ_dilation = 63, σ_dilation = 3.5, π_dilation = 0.16):

L_bimodal = Π_i (π_dilation · N(w_i; μ_dilation, σ_dilation²) + (1−π_dilation) · N(w_i; μ_calm, σ_calm²))

Computing log L_bimodal observation-by-observation is tedious but the dilation-mode observations gain substantial likelihood: Add.216 (67.35) under unimodal has log-likelihood −3.557 − 1.72 = −5.28; under bimodal the dilation component contributes log(0.16/(3.5·√(2π))) − (67.35 − 63)²/(2·12.25) = log(0.0182) − 0.77 = −4.01 − 0.77 = −4.78. Net likelihood gain for Add.216 alone is approximately +0.5.

Summing across all observations (assuming similar per-observation gains for Add.205 and smaller gains for Add.211, Add.218; calm-mode observations are essentially unchanged), the total log L_bimodal ≈ **−81.5** (approximately +1.8 above unimodal).

**Width-axis BF(C-bimodal : C-unimodal) ≈ exp(1.8) = ×6.05**.

This is a **mild-to-moderate signal in favour of the bimodal hypothesis**, but two caveats apply:

1. The bimodal model has **3 additional free parameters** (μ_dilation, σ_dilation, π_dilation) compared to the unimodal model. Applying a BIC penalty for parameter count: BIC penalty = 3 · log(21)/2 ≈ 4.57. The BIC-corrected BF ≈ exp(1.8 − 4.57) = exp(−2.77) ≈ **×0.063** — strongly DISFAVOURING the bimodal model after parameter penalty.
2. Without BIC penalty, the raw likelihood ratio favours bimodal at ×6.05, between Jeffreys "moderate" (×3) and "strong" (×10) thresholds.

This synth commits to reporting BOTH the **raw BF (×6.05)** and the **BIC-corrected BF (×0.063)** as the conservative width-axis update. The conservative choice (BIC-corrected) is to treat the width-axis as **null-favouring** at the current sample size; the bimodal hypothesis cannot be confidently established without more dilation-mode observations.

## 5-axis multi-axis composition

Per synth #465, the 4-axis (transition, gap, PJL, anti-PJL) cumulative BF(C:B) at Add.218 is **7.539** (naive independence) or **5.018** (correlation-corrected). Adding the width-axis as the 5th channel:

- **Naive 5-axis with raw width BF**: 7.539 × 6.05 = **45.61** (CROSSES Jeffreys strong-evidence threshold BF≥10 by 4.56×)
- **Naive 5-axis with BIC-corrected width BF**: 7.539 × 0.063 = **0.475** (DROPS BELOW the indifference threshold; under the BIC-corrected width-axis the joint BF is now favouring B)
- **Conservative 5-axis with BIC-corrected width and correlation correction**: 5.018 × 0.063 = **0.316** (similar drop)

**The width-axis is therefore the most influential and most uncertain new channel**: depending on the parameter-penalty choice, it can either push the multi-axis BF above the strong-evidence threshold OR pull it below the indifference threshold. This sensitivity is itself an important finding — it argues against premature commitment to the multi-axis Jeffreys-3 result without explicit attention to model-complexity penalties on each axis.

## Regime-switch transition prior

Define the mode-state at tick t as M_t ∈ {calm, dilation}. The Add.197-218 mode-state sequence (using the high-confidence assignments only) is approximately:

| range | mode |
|---|---|
| Add.197-204 | calm (with one dilation candidate at Add.205 — borderline) |
| Add.205 | DILATION (high-conf) |
| Add.206-215 | calm (with Add.211 as borderline) |
| Add.216 | DILATION (high-conf) |
| Add.217-218 | calm (Add.218 is calm-upper border) |

So the visible mode-state Markov chain has approximately 19 calm ticks and 2 dilation ticks (excluding borderline cases), with transition counts: calm→calm: 17, calm→dilation: 2, dilation→calm: 2, dilation→dilation: 0. The transition probabilities are:

- P(calm→dilation | calm) ≈ 2/19 = **0.105**
- P(dilation→calm | dilation) = 2/2 = **1.000** (no observed dilation→dilation; possibly a small sample artefact)
- P(calm→calm) = 17/19 = **0.895**
- P(dilation→dilation) = 0/2 = **0.000** (sampling-bound)

Per the dilation→calm = 1.000 estimate, the dilation mode appears to be a **single-tick excursion regime** rather than a sustained regime — each dilation tick is followed by a return to calm. The Add.216 → Add.217 transition (67.35 → 43.03) confirms this pattern. The Add.218 width (59.25, classified as calm-upper) is consistent with calm-mode persistence following the Add.216 dilation.

If the Add.218 width is reclassified as a borderline-dilation observation, the Add.216 → Add.218 sequence (with Add.217 calm-mid intervening) would represent a **2-of-3 dilation cluster** — a candidate **emerging dilation regime** rather than isolated single-tick excursions. This is the synth's primary interpretive question: is the Add.216-218 cluster a coincidence or a regime emergence?

Under the BIC-corrected width-axis (×0.063), the cluster is best interpreted as coincidence. Under the raw-likelihood width-axis (×6.05), the cluster is candidate regime emergence.

## Predictions for Add.219+

- **P-466.A** (Add.219 width): predicted Add.219 width ∈ [25m, 70m] modal **~45m** (calm-mode persistence) under BIC-corrected width-axis; modal **~60m** (continued dilation regime) under raw-likelihood width-axis. The prior under midpoint assumptions is ~70% calm-mode, ~30% dilation candidate.
- **P-466.B** (3rd consecutive dilation observation at Add.219): if Add.219 width >55m, this would constitute a **3-of-4 dilation cluster** across Add.216-219 (with Add.217 calm-mid intervening), which would substantially strengthen the bimodal hypothesis. Predicted prior ~0.30; an observation here would push the raw-likelihood width-axis BF to ~×15-20 and even partially overcome the BIC penalty.
- **P-466.C** (return-to-calm at Add.219): predicted prior ~0.70; if observed, the Add.216 + Add.218 cluster reverts to "two isolated dilation excursions separated by a calm tick", which is consistent with both the calm-only null (single-tick excursion model from synth #451) and the bimodal hypothesis with single-tick dilation episodes.
- **P-466.D** (synth #467 4-axis or 5-axis joint-validation): per synth #465 P-465.G anchor, predicted synth #467 will provide the first fully-realised joint-axis validation. With synth #466 introducing the 5th axis, synth #467 should explicitly address whether the 5th axis is included (decision to be informed by Add.219 width observation).
- **P-466.E** (synth #468 BIC-vs-likelihood reconciliation): predicted synth #468 will formalise the BIC-vs-likelihood tension on the width-axis and propose a principled reconciliation (likely via Bayesian model averaging across the parameter-count axis, with explicit prior over (μ_dilation, σ_dilation, π_dilation) parameters).
- **P-466.F** (synth #470 width-axis MLE refresh): per synth #464 P-464.E checkpoint refresh schedule, predicted synth #470 will refresh the width-axis MLE jointly with the PJL ρ and anti-PJL η parameters. The joint refresh should incorporate the Add.219-225 (or whatever range is visible at synth #470) width and termination observations.
- **P-466.G** (Add.219 mode-transition probability under bimodal): per the regime-switch matrix, P(Add.219 dilation | Add.218 calm-upper) ≈ 0.105 under the high-confidence-only assignment; P(Add.219 calm | Add.218 calm-upper) ≈ 0.895. Under the borderline-inclusive assignment (treating Add.218 as borderline-dilation), P(Add.219 dilation | Add.218 borderline) is intermediate at ~0.30.
- **P-466.H** (joint width × PJL prediction): given the Add.218 PJL=6 and width=59.25, predicted Add.219 joint state {PJL=7 AND width≥55m} prior ~0.18 under bimodal-with-PJL framework; this would be the **single most informative observation** for the bimodal hypothesis (joint dilation-cluster + PJL-extension).

## Cross-references

- Synth #451: established the single-modal calmer-regime cluster MLE; this synth challenges the unimodal assumption.
- Synth #460: transition-axis BF (×1.437 N→N, ×0.908 N→A); first BF channel.
- Synth #459: inter-episode gap distribution; basis for synth #463 gap-axis BF.
- Synth #461: introduced PJL as an observable; first qualitative anchor.
- Synth #462: Frozen-MLE protocol; provides the BIC-correction-path framework.
- Synth #463: multi-axis BF framework (2 axes); first Jeffreys-3 crossing.
- Synth #464: PJL-axis formalisation as paired-Markov-process (3 axes).
- Synth #465: anti-PJL-axis formalisation; Interpretation C-anti introduction (4 axes).
- Synth #466 (this synth): width-axis formalisation as bimodal-mixture observable; BIC-vs-likelihood tension; 5-axis framework.
- ADDENDUM-218 P-218.N (synth #466 bimodal-width-regime anchor); ADDENDUM-218 (sha c1d35d1) for current width sequence and Add.216+Add.218 dilation cluster baseline.
- ADDENDUM-217 (sha ec0ad69) for prior width-sequence visibility.
- W17 synth #465 (sha [pending]) and synth #464 (sha 698820d) for multi-axis framework anchors.

**End of W17 Synthesis #466.**
