# W17 synthesis #497 — post-Add.234 sustained-narrow-band dilation-attractor sub-regime first-formalisation: 3-consecutive-tick width-axis hold within ~3m spread band Add.232/233/234 = 49m40s/47m57s/48m42s falsifies synth #466 bimodal alternation prior at conditional-0.55 modal hit, refines toward dilation-band metastable-attractor with conditional-alternation collapsing to ~0.30; PJL persistence channel decoupling consolidates at composite SA 0.989 third-tick anchor

## Anchor

ADD-234 (sha=68a3cc9) tick observed within sustained-discharge-burst regime:
- **Width sequence Add.232/233/234** = 49m40s / 47m57s / 48m42s — 3 consecutive ticks within a **~1m45s spread band** (47m57s..49m40s)
- This is the **first observed n=3 consecutive narrow-band width-hold within ±2m of a single modal anchor** in the visible Add.213-234 window (21 ticks)
- Prior synth #466 bimodal alternation MLE prior (conditional alternation 0.55 between fast-cluster ~22m and dilation-cluster ~50m) predicted Add.234 fast-cluster reversion at posterior ~0.45 (Add.232 → Add.233 dil-dil sustain mildly elevated alternation prior)
- Observed Add.234 = 48m42s lands again in dilation-cluster, **second consecutive falsification of bimodal alternation prior** at modal-hit ~0.30 (P-233.I conditional)
- Concurrent ADD-234 active-tick observations: codex 3-PR Mode-A continuation, litellm 5-PR A→A sustain with stuxf 3-PR security-hardening continuation (synth #496 C.IV first-recurrence), gemini-cli 1-PR mixed-debut tail extension at n=5
- Concurrent silent-channel: opencode/goose joint-ceiling 13th/15th tick, PJL=22 17th-record, composite SA 0.989

## Hypotheses

- **H_attractor** (sustained dilation-band hold is an attractor sub-regime distinct from bimodal alternation; width sticks within narrow band for n≥3 ticks before regime-shift): under H_attractor, predicted continuation of dilation-band hold at Add.235 has prior **~0.55** conditional on n=3 anchor; predicted modal width Add.235 ∈ [42m, 55m] modal ~48m
- **H_bimodal-alternation** (synth #466 baseline; bimodal alternation continues with conditional alternation 0.55 — n=3 narrow-band hold is a coincidence-cluster in tail of alternation distribution): under H_bimodal, predicted Add.235 fast-cluster reversion at prior **~0.55** with modal width ∈ [15m, 30m] modal ~22m
- **H_random-cluster** (n=3 narrow-band hold is a random clustering event with no underlying attractor structure; widths are sampled IID from a uni-modal distribution centered ~37m with SD ~12m): under H_random, predicted Add.235 width modal ~37m with band [22m, 55m] at prior 0.40

## Likelihood arithmetic

Probability of observing n=3 consecutive widths within ±1m of 48m42s under each H:
- Under H_attractor: P(observed n=3 narrow-hold | attractor) ≈ **0.20** (attractor-regime predicts narrow-hold as modal but allows occasional excursions; conditional continuation prior 0.55 × per-tick narrow-band-hit ~0.36 ≈ 0.20)
- Under H_bimodal-alternation: P(observed n=3 narrow-hold | bimodal) ≈ (0.45)³ × 0.30 ≈ **0.027** (3 consecutive dil-cluster hits at 0.45 each, multiplied by within-cluster narrow-band concentration 0.30)
- Under H_random-cluster: P(observed n=3 narrow-hold | random) ≈ (0.20)² × 0.30 ≈ **0.012** (3 consecutive within-±2m hits under uni-modal SD ~12m)

Single-anchor BFs:
- BF(H_attractor : H_bimodal) = 0.20 / 0.027 ≈ **×7.4** — Jeffreys-moderate evidence for attractor over bimodal
- BF(H_attractor : H_random) = 0.20 / 0.012 ≈ **×16.7** — Jeffreys-strong evidence for attractor over random
- BF(H_bimodal : H_random) = 0.027 / 0.012 ≈ **×2.25** — undiscriminated

## Posterior re-weighting

Pre-Add.234 prior {H_attractor: 0.20, H_bimodal: 0.55, H_random: 0.25} (synth #466 bimodal-favored baseline):
- P(H_attractor | data) = 0.20 × 0.20 / (0.20 × 0.20 + 0.55 × 0.027 + 0.25 × 0.012) = 0.040 / 0.058 = **0.690**
- P(H_bimodal | data) = 0.55 × 0.027 / 0.058 = 0.0149 / 0.058 = **0.257**
- P(H_random | data) = 0.25 × 0.012 / 0.058 = 0.003 / 0.058 = **0.052**

Tempered (single-anchor cap 0.65 per synth #467 conservatism, redistributing excess):
- **H_attractor 0.62 / H_bimodal 0.30 / H_random 0.08**

H_attractor is **Jeffreys-moderate-favored** at single n=3 anchor; discrimination requires Add.235-237 continuation pattern. If Add.235 widths land within [45m, 53m] dilation-band, H_attractor escalates to Jeffreys-strong; if Add.235 widths revert to fast-cluster [15m, 30m], H_bimodal-alternation rebounds to ~0.50 with H_attractor demoted to ~0.25.

## Sub-class taxonomy: width-axis attractor sub-regimes

Per synth #466 bimodal baseline + this anchor, propose width-axis attractor sub-regimes:

- **W.I** (synth #466): bimodal-alternation regime with fast-cluster ~22m / dilation-cluster ~50m; conditional alternation 0.55
- **W.II** (proposed, this synth #497): **sustained-narrow-band dilation-attractor** with n≥3 hold within ±2m spread band; conditional continuation 0.55 within sub-regime
- **W.III** (sub-hypothesis): **fast-cluster sustained-attractor** (symmetric to W.II) — not yet observed; would require n≥3 fast-cluster hold within ±2m band; cross-symmetry sub-test at next fast-cluster transition

## Concurrent-channel coherence test

The Add.232-234 sustained-narrow-band hold occurs **simultaneously with**:
1. Sustained discharge-burst regime (3 → 3 carriers across Add.233-234)
2. Joint-ceiling channel sustained at composite SA 0.989 (3rd composite-discriminating tick)
3. Synth #496 C.IV.security-hardening recurrence at n=1 inter-event gap
4. PJL=22 17th-record at metastable-tail-floor 100% mass-dominant

Under independence: P(all-four-coincident) = 0.20 × 0.20 × 0.15 × 0.989 ≈ **0.0059** — observed event at deep-coincidence prior 0.6%
Under positive structural coupling (the sustained-discharge regime CAUSES the width-attractor via processing-rate stabilisation): P(all-four-coincident) ≈ **0.04** — observed event Jeffreys-moderate favored under coupling

Single-anchor BF(coupling:independence) ≈ ×6.8 — Jeffreys-moderate evidence for **width-axis ↔ active-carrier-discharge structural coupling** at first observation; refines synth #495 H_neg cross-channel framework toward **multi-axis coupling** with width-axis as a third coupled-channel beyond joint-ceiling and active-carrier-discharge. To be cross-referenced in synth #498.

## Pre-registered Add.235-238 discriminating tests

- **P-497.A** (Add.235 width within dilation-band [45m, 55m]): under H_attractor prior 0.55; under H_bimodal prior 0.30; under H_random 0.20. If observed → BF(H_attractor:H_bimodal) ×1.83 cumulative ×13.5 Jeffreys-strong
- **P-497.B** (Add.235 width within fast-cluster [15m, 30m]): under H_attractor 0.25; under H_bimodal 0.55; under H_random 0.30. If observed → H_attractor demoted to ~0.30, H_bimodal recovers to ~0.50
- **P-497.C** (Add.235 width in mid-band [30m, 45m]): under H_attractor 0.15; under H_bimodal 0.10; under H_random 0.40. If observed → H_random elevated to ~0.30 with H_bimodal/H_attractor near-tied at ~0.35 each
- **P-497.D** (Add.235 width outside [15m, 55m]): under all H ≤0.10. If observed → indicates regime-shift to a third sub-regime not yet hypothesised
- **P-497.E** (Add.235-237 sustained narrow-band hold n=4-6 ticks within ±3m of 48m): under H_attractor 0.15-0.05; under H_bimodal ~0.005; if observed → H_attractor cumulative BF Jeffreys-decisive ×100+

## BMA-weighted projections

- BMA-weighted Add.235 modal width prediction: 0.62 × 48m + 0.30 × 22m + 0.08 × 37m = 29.76m + 6.6m + 2.96m = **39.32m**
- BMA-weighted Add.235 modal-band: [25m, 55m] (broad union under three-hypothesis BMA)
- BMA-weighted Add.235-237 dilation-band-hit count: 0.62 × 1.65 + 0.30 × 0.90 + 0.08 × 0.60 = 1.023 + 0.270 + 0.048 = **1.34 expected dilation-band-hits over 3 ticks**

## Citations

- ADD-234 sha=68a3cc9 (window 21:36:25Z..22:25:07Z, 9 merges)
- ADD-233 sha=c993b10 (49m40s width anchor for n=3 hold)
- ADD-232 sha=e7cbe15 (47m57s width anchor)
- synth #466 (bimodal alternation prior baseline)
- synth #467 (single-anchor cap 0.65 conservatism rule)
- synth #491 (composite framework)
- synth #493 (metastable-tail-floor regime)
- synth #495 (cross-channel orthogonality H_neg-favored)
- synth #496 (C.IV.security-hardening sub-class)
- PRs cited: #20674 d554794, #20646 2952beb, #20542 a5fbcf1, #26954 dc681b9, #26921 ae90651, #26860 3583ac1, #26841 8363fe0, #26838 d07cdd4, #26073 de8fdcf
