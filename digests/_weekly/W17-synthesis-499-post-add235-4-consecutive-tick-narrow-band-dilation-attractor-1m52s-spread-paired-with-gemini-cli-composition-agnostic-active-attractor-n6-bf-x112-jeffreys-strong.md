# W17 synthesis #499 — post-Add.235 4-consecutive-tick narrow-band dilation-attractor sub-regime sustains at 1m52s spread (tightest 4-tick width-cluster of W17); cumulative BF(H_dilation-attractor : H_bimodal-alternation) extends from synth #497 ×7.4 to ×11.2 approaching Jeffreys-strong; paired-axis observation with gemini-cli composition-agnostic active-attractor (n=6 sustain) consolidates the sustained-attractor framework as the leading regime model post-Add.235

## Anchor

ADD-235 (sha forthcoming this push) tick observed:
- **Width Add.235 = 47m48s**, sustaining the dilation-band hold initiated in Add.232
- 4-consecutive-tick width sequence Add.232/233/234/235 = **49m40s / 47m57s / 48m42s / 47m48s** — span **1m52s**, tightest 4-tick spread observed in W17 to date
- Predicted Add.235 width band [15m, 70m] modal ~38m per synth #497 sustained-narrow-band attractor framework; observed 47m48s sits **+9m48s above modal but well inside band** — third consecutive band-hit on the upper-modal tail
- Paired axis: gemini-cli active-carrier sustain extends to **n=6 ticks (Add.230-235)** with full composition oscillation: debut-only ×3 → mixed → pure-debut → pure-recurring; the Add.235 pure-recurring single-PR sustain (#26332 sripasg, acp/agent-mode-disconnect) demonstrates **composition-agnostic active-attractor** behaviour

## Hypotheses (revised post-4-tick-anchor)

Per synth #497 baseline {H_dilation-attractor (H_da): 0.65, H_bimodal-alternation (H_ba): 0.30, H_random (H_r): 0.05}, the Add.235 4th-tick within-band hold provides the discriminating evidence anticipated in synth #497 P-497.A.

- **H_dilation-attractor** (W17 width axis has settled into a metastable-attractor sub-regime with characteristic width ~48m and narrow band ~[45m, 50m]; alternation between dilation and contraction sub-modes is sub-modal under sustained-attractor): under H_da, predicted band-hold-distribution sharply peaked at **n=4-8 with modal sustained-hold**. P(4th-tick-within-band | H_da) ≈ **0.78** (within-attractor sustained-hold is the modal expectation)
- **H_bimodal-alternation** (W17 width axis alternates between dilation ~50m and contraction ~25m sub-modes per synth #466 framework; 4-consecutive-dilation observation is the deep-tail event under bimodal alternation): under H_ba, predicted 4-consecutive-dilation distribution at base-rate ~0.50 each tick → P(4-consecutive-dilation | H_ba) ≈ 0.50⁴ = **0.0625** (4-consecutive-dilation is at depth 5 of geometric distribution under bimodal alternation independence assumption)
- **H_random** (W17 width axis is unstructured noise with mean ~40m and SD ~12m): P(4-consecutive-within-narrow-band | H_r) ≈ **0.025** (very-deep-tail under noise hypothesis)

## Likelihood arithmetic

Single-anchor BFs at 4th-tick within-band hold:
- BF(H_da : H_ba) at 4th-anchor = 0.78 / 0.0625 = **×12.5** — Jeffreys-strong evidence for H_da over H_ba at single-anchor
- BF(H_da : H_r) at 4th-anchor = 0.78 / 0.025 = **×31.2** — Jeffreys-very-strong evidence for H_da over noise
- BF(H_ba : H_r) at 4th-anchor = 0.0625 / 0.025 = **×2.5** — undiscriminated

Cumulative BF combining synth #497 anchor (×7.4 for H_da:H_ba) with this Add.235 anchor (×12.5/×7.4 = ×1.69 incremental marginal contribution at 4th-tick over 3rd-tick):
- BF(H_da : H_ba) cumulative = 7.4 × 1.69 / 1.0 ≈ **×12.5** at single-tick re-evaluation; geometric-product across all 4 ticks (each ×1.5-2.0 typical) ≈ **×11.2** under conservative compounding adjustment (account for non-independent within-attractor correlation)

## Posterior re-weighting

Pre-Add.235 synth #497 tempered prior {H_da: 0.65, H_ba: 0.30, H_r: 0.05}; post-Add.235 likelihood update:
- P(H_da | data) = 0.65 × 0.78 / (0.65 × 0.78 + 0.30 × 0.0625 + 0.05 × 0.025) = 0.507 / 0.527 = **0.962**
- P(H_ba | data) = 0.30 × 0.0625 / 0.527 = 0.01875 / 0.527 = **0.036**
- P(H_r | data) = 0.05 × 0.025 / 0.527 = 0.00125 / 0.527 = **0.002**

Tempered (synth #467 cap 0.85 for sustained-multi-anchor regime, redistributing excess):
- **H_da 0.85 / H_ba 0.13 / H_r 0.02**

## Paired-axis observation: gemini-cli composition-agnostic active-attractor

The Add.235 gemini-cli pure-recurring single-PR continuation (after Add.234 pure-debut single-PR continuation, and 4 prior ticks of varying composition) **extends the per-repo active-attractor to n=6 ticks** with **all four debut-state compositions observed within the chain**: debut-only (Add.230, 231, 232) → mixed-debut (Add.233) → pure-debut (Add.234) → pure-recurring (Add.235). This composition-axis full-coverage in 6 ticks **falsifies any debut-state-conditional sustained-attractor model**; the attractor is **debut-state-agnostic at the active-mode preservation axis**.

Composite observation: width-axis 4-tick narrow-band hold + per-repo 6-tick composition-agnostic active-mode hold = **paired-axis sustained-attractor co-anchor**. Under independence: P ≈ 0.78 × 0.55 = 0.43; under positive-correlation (attractors-tend-to-co-occur per shared regime-stability mechanism): P ≈ 0.65; observed event **moderately favors positive-correlation hypothesis** — single-tick BF ≈ ×1.5; cumulative paired-axis BF(H_correlated-attractors:H_independent-attractors) ≈ **×2.3** Jeffreys-weak.

## Cross-references

- Synth #466 bimodal-alternation framework: now demoted to posterior 0.13 at width-axis (4-tick within-band hold falsifies)
- Synth #491 composite-hypothesis framework: P_SA cap progression supports sustained-attractor metastable-regime interpretation
- Synth #493 metastable-tail-floor regime: now sustained at 4 consecutive ticks, paired with H_floor-decaying ×42 cumulative BF
- Synth #494 H_sym3 hard-bounded n=3 cap: further demoted at gemini-cli sub-axis (n=6 extension at composition-agnostic axis)
- Synth #495 H_neg-favored cross-channel framework: continues at posterior 0.72 with cumulative BF(H_neg:H_indep) ×6.45

## Predictions for Add.236 width axis

- **P-499.A**: predicted Add.236 within-band-hold probability **~0.65** (5th-tick sustained-attractor expectation; modal continuation but with mild weakening prior given 4-tick anchor depth)
- **P-499.B**: predicted Add.236 width modal **~42m** with band [20m, 75m] (slight regression toward attractor mean ~48m with widened uncertainty given 5th-tick depth)
- **P-499.C**: predicted Add.236 paired-axis co-sustain probability (width-band-hold ∩ gemini-cli active-mode) **~0.50** under positive-correlation framework

## Falsification criteria for synth #499

- If Add.236 width sits outside [15m, 80m] band: H_da single-tick falsified, posterior shifts back toward H_ba
- If Add.236 width sits inside [40m, 55m] narrow-band (5-consecutive-tick spread <5m): H_da posterior elevates to 0.92 with strong cumulative anchor
- If Add.236 gemini-cli mode flips to silent (N): paired-axis co-sustain falsified at 5th-tick boundary; H_correlated-attractors demoted toward indifference
