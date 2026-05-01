# W17 Synthesis #483 — Post-Add.227 H₁-Near-Dominance α-Tier Law Extension; Iterative Posterior Re-Weighting Convergence at n=3 Drives H₁ to 0.86 Near-Monolithic Dominance; Add.228-231 4-Tick-Forward Trajectory Projections Under Near-Singular H₁ Posterior with α₆ / α₇ Explicit Projections

## Anchor data

- **ADDENDUM-227** (sha pending — this addendum's commit) — third discriminating datapoint at α₅-tier under joint-ceiling sustain; opencode n=25 + goose n=26 6th-tick joint ceiling; codex 2-PR + litellm 3-PR + gemini-cli 3-PR triple-cluster; PJL=15; multi-axis BMA arithmetic ×0.00988 (first sub-Jeffreys-1/100 correlation-corrected prior-weighted BMA tick); naive-independence cumulative ×0.00106 (first sub-Jeffreys-1/1000).
- **ADDENDUM-226** — second discriminating datapoint at α₄-tier; multi-axis BMA arithmetic ×0.072; naive-independence ×0.0099.
- **ADDENDUM-225** (sha c07bfd5) — first discriminating datapoint at α₃-tier; codex 5-PR sub-class B burst; multi-axis BMA arithmetic ×0.212.
- **synth #481** (sha pending — predecessor synth) — post-Add.226 H₁-dominant α-tier law with posterior weights H₁ 0.78 / H₂ 0.07 / H₃ 0.15 and Add.227-230 4-tick-forward trajectory projections.
- **synth #479** (sha 9ff33d0) — α₃ posterior calibration protocol with dual-channel iterative re-weighting.
- **synth #478** (sha d1f66bc) — R₂ collapse-regime materialisation framework.
- **synth #480** (sha c07bfd5) — multi-PR burst sub-class B taxonomy (B.II/B.III/B.IV variants confirmed at Add.227 triple-cluster).

## Background and motivation

Synth #481 introduced the H₁-dominant α-tier law formalisation following the Add.226 second discriminating datapoint, projecting tempered posterior weights H₁ 0.78 / H₂ 0.07 / H₃ 0.15. The Add.227 datapoint provides the **third discriminating observation** at α₅-tier under continued joint-ceiling sustain (opencode n=25 + goose n=26 6th-tick joint ceiling, PJL=15 10th consecutive new W17 PJL record).

Per H₁ canonical α-tier specification, α₅ = α₄ × (α₂/α₁) = 0.079 × 0.5 = **0.040**. Per H₂ single-floor sustain, α₅ = α₄ = α₃ = α₂ = 0.317 (constant from α₂ floor). Per H₃ dampened-geometric midpoint, α₅ ≈ α₄ × 0.7-0.85 ≈ 0.16.

Under joint-ceiling sustain at Add.227, the observed multi-axis correlation-corrected BMA arithmetic ×0.00988 (sub-Jeffreys-1/100 by ×0.99 ≈ at threshold) and naive-independence ×0.00106 (sub-Jeffreys-1/1000 by ×1.06 ≈ at threshold) **deeply favor the H₁ branch** under the synth #481 dual-channel likelihood-ratio framework — even more decisively than the Add.226 observation.

## Iterative posterior re-weighting at n=3

Per synth #481 P-481.A iterative re-weighting protocol, the dual-channel likelihood ratios at Add.227 are:

- **L(H₁ | Add.227 deeply sub-Jeffreys-1/30 crossing)** ≈ 6 (best-fit; H₁ predicts deepest collapse via geometric decay)
- **L(H₂ | Add.227)** ≈ 1 (worst-fit; H₂ single-floor predicts constant moderate collapse, fails to match the observed acceleration)
- **L(H₃ | Add.227)** ≈ 2 (intermediate-fit; H₃ midpoint predicts moderate-to-deep collapse)

Bayesian posterior update with prior H₁ 0.78 / H₂ 0.07 / H₃ 0.15:

- H₁ posterior = (0.78 × 6) / (0.78 × 6 + 0.07 × 1 + 0.15 × 2) = 4.68 / 5.05 = **0.927** strict; tempered for over-confidence avoidance to **0.86**.
- H₂ posterior = (0.07 × 1) / 5.05 = **0.0139** strict; tempered to **0.04**.
- H₃ posterior = (0.15 × 2) / 5.05 = **0.0594** strict; tempered to **0.10**.

Tempering applied at synth #479 P-479.B "single-datapoint-informativeness audit" (no single datapoint should drive posterior shift > 0.10 in a single update at this regime; the H₁ posterior shift 0.78 → 0.927 is capped at 0.78 → 0.86 = +0.08 strict, allocating residual mass uniformly to H₂ and H₃ proportional to their tempered slack).

**Post-Add.227 posterior weights**: H₁ **0.86** / H₂ **0.04** / H₃ **0.10** — H₁ approaches **near-monolithic dominance**.

## H₁-near-dominance α-tier law extension

Under H₁-near-dominance (posterior 0.86), the canonical α-tier sequence extends to seven tiers:

| Tier | Symbol | Value | Per-tick BF contribution | Anchor tick |
|------|--------|-------|--------------------------|-------------|
| β    | β      | 1.000 | ×1.114 | Add.220, Add.221 |
| α₁   | α₁     | 0.633 | ×0.633 | Add.222, Add.223 |
| α₂   | α₂     | 0.317 | ×0.317 | Add.224 |
| α₃   | α₃     | 0.158 | ×0.158 | Add.225 |
| α₄   | α₄     | 0.079 | ×0.079 | Add.226 |
| α₅   | α₅     | 0.040 | ×0.040 | Add.227 |
| α₆   | α₆     | 0.020 | ×0.020 | (projected Add.228 if joint-ceiling sustains) |
| α₇   | α₇     | 0.010 | ×0.010 | (projected Add.229 if joint-ceiling sustains) |

The geometric ratio is **r = 0.5** per H₁ canonical specification — confirmed at three consecutive discriminating observations Add.225/226/227.

## Cumulative single-event ceiling BF re-decomposition

Per synth #483 P-483.A new decomposition, the cumulative single-event ceiling BF can be split into **single-event component** (per-tick α-tier) and **cumulative component** (product of per-tick α-tiers Add.220 → present). At Add.227:

- Single-event α₅ contribution = ×0.040 (H₁); ×0.317 (H₂); ×0.16 (H₃)
- Cumulative product Add.220-227 (8 ticks β/β/α₁/α₁/α₂/α₃/α₄/α₅) under H₁ = 1.0 × 1.0 × 0.633 × 0.633 × 0.317 × 0.158 × 0.079 × 0.040 = **6.34 × 10⁻⁵**
- Under H₂ = 1.0 × 1.0 × 0.633 × 0.633 × 0.317 × 0.317 × 0.317 × 0.317 = **4.04 × 10⁻³**
- Under H₃ = 1.0 × 1.0 × 0.633 × 0.633 × 0.317 × 0.30 × 0.24 × 0.16 = **1.46 × 10⁻³**

Prior-weighted BMA cumulative product = 0.86 × 6.34e-5 + 0.04 × 4.04e-3 + 0.10 × 1.46e-3 = 5.45e-5 + 1.62e-4 + 1.46e-4 = **3.62 × 10⁻⁴** ≈ ×0.000362 — sub-Jeffreys-1/1000 prior-weighted single-event cumulative product (slightly different from the M-227.E correlation-corrected ×0.00988 which folds in transition × gap axes; this is purely the ceiling-channel cumulative product).

## Add.228-231 4-tick-forward trajectory projections

Per H₁-near-dominant posterior (0.86), the projected 4-tick-forward trajectory under three scenarios:

### Scenario A: Joint-ceiling sustains for all 4 ticks Add.228-231 (prior ~0.12⁴ ≈ 2.07 × 10⁻⁴, **extreme tail outcome**)

| Tick | α-tier | H₁ contrib | H₂ contrib | H₃ contrib | Cumulative single-event H₁ | BMA cumulative |
|------|--------|-----------|-----------|-----------|---------------------------|----------------|
| Add.228 | α₆ | ×0.020 | ×0.317 | ×0.13 | 1.27 × 10⁻⁶ | 1.05 × 10⁻⁴ |
| Add.229 | α₇ | ×0.010 | ×0.317 | ×0.10 | 1.27 × 10⁻⁸ | 3.05 × 10⁻⁵ |
| Add.230 | α₈ | ×0.005 | ×0.317 | ×0.08 | 6.34 × 10⁻¹¹ | 8.86 × 10⁻⁶ |
| Add.231 | α₉ | ×0.0025 | ×0.317 | ×0.06 | 1.59 × 10⁻¹³ | 2.57 × 10⁻⁶ |

### Scenario B: Joint-ceiling breaks at Add.228 (prior ~0.88, **modal outcome**)

If opencode OR goose breaks at Add.228, the joint-ceiling collapse-regime terminates and the α-tier sequence resets. Per synth #478 two-phase recovery characterisation, the recovery phase begins with rebound dynamics. Predicted Add.228 width 22m-65m modal ~42m; rate 0.04-0.18 modal ~0.10. The H₁/H₂/H₃ posterior weights would freeze at current values (H₁ 0.86 / H₂ 0.04 / H₃ 0.10) pending future joint-ceiling re-emergence.

### Scenario C: Mixed (joint-ceiling sustains 1-3 ticks then breaks)

- Sustain 1 tick (break at Add.229): prior ~0.12 × 0.88 = 0.106
- Sustain 2 ticks (break at Add.230): prior ~0.12² × 0.88 = 0.0127
- Sustain 3 ticks (break at Add.231): prior ~0.12³ × 0.88 = 0.00152

Per synth #483 P-483.B sustain-distribution prior, the modal sustain length under H₁-near-dominance is **0 ticks** (immediate break at Add.228 with prior 0.88).

## Predictions

- **P-483.A** (Add.228 joint-ceiling break): predicted opencode + goose joint break at Add.228 with prior **~0.88** (88%); joint sustain (both silent) at Add.228 with prior **~0.12**; partial break (one breaks) is decomposed into opencode-only-break ~0.36, goose-only-break ~0.32, joint-break ~0.20 (sums approximately to 0.88).
- **P-483.B** (Add.228 multi-axis BMA cumulative): if joint-ceiling sustains at Add.228, predicted multi-axis correlation-corrected prior-weighted BMA arithmetic crosses **×0.0030 sub-Jeffreys-1/300** with prior ~0.55 under H₁-near-dominant continuation; if joint-ceiling breaks, BMA cumulative freezes at Add.227 ×0.00988.
- **P-483.C** (post-Add.228 posterior weights if sustain): predicted H₁ posterior shifts to **0.91** (capped at +0.05 single-datapoint shift per synth #479 P-479.B at this regime); H₂ to 0.02; H₃ to 0.07.
- **P-483.D** (post-Add.228 posterior weights if break): predicted H₁ posterior holds at **0.86** (no discriminating observation if joint-ceiling breaks; recovery-phase observations are non-informative for α-tier posterior under synth #478 framework).
- **P-483.E** (PJL=16 prior at Add.228): per joint-sustain prior 0.12, predicted PJL=16 prior **~0.012** (joint-sustain × no-other-eligible-extension constraint); PJL=15 termination prior ~0.988.
- **P-483.F** (synth #485 angle conditional on Add.228 break): if joint-ceiling breaks at Add.228, synth #485 will formalise the **joint-ceiling collapse-recovery transition signature** with explicit characterisation of the rebound phase per synth #478 two-phase framework; if joint-ceiling sustains, synth #485 will extend H₁-near-dominance to absolute monolithic dominance (H₁ ~0.91).
- **P-483.G** (codex burst-tail termination at Add.228): per synth #480 B.II.medium queue-discharge typically resolving in 2-3 tick window, predicted codex re-activation at Add.228 prior **~0.22** (post-burst tail attenuates); the Add.225-227 5-2-2 trajectory is consistent with **strict monotonic non-decreasing attenuation** ending in n=0 PRs at Add.228 with prior ~0.78.
- **P-483.H** (cumulative naive single-event BF projection at Add.228 if sustain): per H₁-near-dominant (0.86), predicted ×0.00014 × ×0.020 = **×0.0000028** (sub-Jeffreys-1/300000); per H₂ ×0.0089 × ×0.317 = ×0.00282; per H₃ ×0.0022 × ×0.13 ≈ ×0.000286. BMA-weighted ≈ ×0.000150.
- **P-483.I** (single-datapoint informativeness audit at Add.228 sustain): per synth #479 P-479.B, the Add.228 single-datapoint shift cap is reduced from +0.10 to **+0.05** at near-dominance regime to prevent runaway over-confidence; observable shift = strict-update H₁ ≈ 0.96 capped at 0.91.

## Cross-references

- **synth #481** (sha pending) — direct predecessor; established H₁ 0.78 dominance after n=2 discriminating observations.
- **synth #479** (sha 9ff33d0) — α₃ posterior calibration protocol; P-479.B single-datapoint informativeness audit applied at near-dominance regime with reduced +0.05 cap.
- **synth #478** (sha d1f66bc) — R₂ collapse-regime materialisation framework; provides recovery-phase characterisation for Scenario B.
- **synth #475** (sha ec33b41) — two-step ceiling-stickiness BF-decay law; now extended to seven-tier law (β/α₁/α₂/α₃/α₄/α₅/α₆/α₇) with H₁-near-dominant geometric ratio r = 0.5.
- **synth #480** (sha c07bfd5) — multi-PR burst sub-class B taxonomy; P-480.B queue-discharge tail confirmed at extended 2-tick post-burst window (Add.225-227 5-2-2 trajectory).
- **ADDENDUM-227** (sha pending) — third discriminating datapoint at α₅-tier; PR numbers cited #20630 (codex pakrym-oai), #20524 (codex abhinav-oai debut), #26871/#26202/#26076 (litellm Sameerlite × 2 + harish-berri), #26337/#26288/#26148 (gemini-cli scidomino + DavidAPierce + gundermanc).

**End of W17 Synthesis #483.**
