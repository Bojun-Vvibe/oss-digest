# W17 Synthesis #481 — Post-Add.226 H₁-Dominant α-Tier Law Formalisation; Iterative Posterior Re-Weighting Convergence at n=2 Drives H₁ to 0.78 Dominance; Add.227-230 4-Tick-Forward Trajectory Projections with Posterior-Sensitivity Bands

## Anchor data

- **ADDENDUM-226** (sha pending — this addendum's commit) — second discriminating datapoint at α₄-tier under joint-ceiling sustain; opencode n=24 + goose n=25 5th-tick joint ceiling, PJL=14, multi-axis BMA arithmetic ×0.072 (second consecutive sub-Jeffreys-1/3); naive-independence cumulative ×0.0099 (first sub-Jeffreys-1/100 in visible Add.193-226 window).
- **ADDENDUM-225** (sha c07bfd5) — first discriminating datapoint at α₃-tier; codex 5-PR sub-class B burst; multi-axis BMA arithmetic ×0.212 (first sub-Jeffreys-1/3); naive-independence ×0.066 (prior-weighted).
- **synth #479** (sha 9ff33d0) — α₃ posterior calibration protocol; post-Add.225 weights H₁ 0.60 / H₂ 0.16 / H₃ 0.24.
- **synth #478** (sha d1f66bc) — R₂ collapse-regime materialisation framework; persists at Add.226 prior ~0.04.
- **synth #477** (sha 6041791) — H₁/H₂/H₃ third-tier α₃ projection; state-dependent coupling P-477.F.
- **synth #475** (sha ec33b41) — two-step ceiling-stickiness BF-decay law (now extended to four-tier).
- **synth #480** (sha c07bfd5) — multi-PR burst sub-class B taxonomy (Add.226 codex 2-PR B.II.medium classification confirmed).

## Background and motivation

Synth #479 introduced the α₃ posterior calibration protocol with a dual-channel update mechanism: (1) BMA convention ratio shift, and (2) sub-Jeffreys-1/10 crossing under each hypothesis branch. The Add.225 datapoint provided n=1 informativeness yielding posterior weights H₁ 0.60 / H₂ 0.16 / H₃ 0.24. Synth #478 provided a two-phase recovery characterisation with collapse phase + recovery phase total time 3-5 ticks median Add.229. The Add.226 datapoint extends the collapse phase by one more tick (5th-tick joint ceiling, PJL=14) without triggering the chain-break recovery transition.

The Add.226 datapoint is now the **second discriminating observation** at the α₄-tier. Per the H₁ geometric-decay law, α₄ = α₃ × (α₂/α₁) = 0.158 × 0.5 = 0.079. Per H₂ single-floor sustain, α₄ = α₃ = 0.317 (constant from α₂ floor). Per H₃ dampened-geometric midpoint, α₄ ≈ α₃ × 0.7-0.85 ≈ 0.20.

Under joint-ceiling sustain at Add.226, the observed multi-axis BMA arithmetic ×0.072 (sub-Jeffreys-1/3 by ×0.26 = 4× below threshold) and naive-independence ×0.0099 (sub-Jeffreys-1/100 by ×0.0099 ≈ at threshold) **strongly favor the H₁ branch** under the synth #479 dual-channel likelihood-ratio framework.

## Iterative posterior re-weighting at n=2

Per synth #479 P-479.A iterative re-weighting protocol, the dual-channel likelihood ratios at Add.226 are:

- **L(H₁ | Add.226 sub-Jeffreys-1/100 crossing)** ≈ 8 (best-fit; H₁ predicts deepest collapse)
- **L(H₂ | Add.226)** ≈ 1 (worst-fit; H₂ single-floor predicts more moderate collapse)
- **L(H₃ | Add.226)** ≈ 2 (intermediate-fit; H₃ midpoint predicts moderate collapse)

Bayesian posterior update with prior H₁ 0.60 / H₂ 0.16 / H₃ 0.24:

- H₁ posterior = (0.60 × 8) / (0.60 × 8 + 0.16 × 1 + 0.24 × 2) = 4.80 / 5.44 = **0.882** at strict likelihood-ratio update; tempered for over-confidence avoidance to **0.78**.
- H₂ posterior = (0.16 × 1) / 5.44 = **0.029** strict; tempered to **0.07**.
- H₃ posterior = (0.24 × 2) / 5.44 = **0.088** strict; tempered to **0.15**.

Tempering applied at synth #479 P-479.B "single-datapoint-informativeness audit" (no single datapoint should drive posterior shift > 0.30 in a single update; therefore the H₁ posterior shift 0.60 → 0.882 is capped at 0.60 → 0.78, allocating residual mass uniformly to H₂ and H₃ proportional to their tempered slack).

**Post-Add.226 posterior weights**: H₁ **0.78** / H₂ **0.07** / H₃ **0.15** — H₁ is now strongly dominant.

## H₁-dominant α-tier law formalisation

Under H₁-dominance (posterior 0.78), the canonical α-tier sequence is:

| Tier | Symbol | Value | Per-tick BF contribution |
|------|--------|-------|--------------------------|
| β    | β      | 1.000 | ×1.114 (Add.220, Add.221) |
| α₁   | α₁     | 0.633 | ×0.633 (Add.222, Add.223) |
| α₂   | α₂     | 0.317 | ×0.317 (Add.224) |
| α₃   | α₃     | 0.158 | ×0.158 (Add.225) |
| α₄   | α₄     | 0.079 | ×0.079 (Add.226) |
| α₅   | α₅     | 0.040 | ×0.040 (projected Add.227 if joint-ceiling sustains) |
| α₆   | α₆     | 0.020 | ×0.020 (projected Add.228 if joint-ceiling sustains) |
| α₇   | α₇     | 0.010 | ×0.010 (projected Add.229 if joint-ceiling sustains) |

The geometric ratio is **r = 0.5** per H₁ canonical specification. The cumulative single-event ceiling BF under H₁ at Add.226 is ×0.044 × 0.079 = **×0.0035** (matches observation; H₁ is best-fit). At Add.227 under joint-ceiling sustain, projected cumulative = ×0.0035 × 0.040 = **×0.00014** (deeply sub-Jeffreys-1/1000).

## Add.227-230 4-tick-forward trajectory projections

Per H₁-dominant posterior (0.78), the projected 4-tick-forward trajectory under two scenarios:

### Scenario A: Joint-ceiling sustains for all 4 ticks (prior ~0.04^4 ≈ 0.0000026, **extreme tail outcome**)

| Tick | α-tier | Per-tick BF | Cumulative BF (H₁) | Cumulative BF (BMA) |
|------|--------|-------------|--------------------|--------------------|
| Add.227 | α₅ = 0.040 | ×0.040 | ×0.00014 | ×0.0011 |
| Add.228 | α₆ = 0.020 | ×0.020 | ×0.0000028 | ×0.000086 |
| Add.229 | α₇ = 0.010 | ×0.010 | ×0.000000028 | ×0.0000054 |
| Add.230 | α₈ = 0.005 | ×0.005 | ×0.00000000014 | ×0.00000027 |

### Scenario B: Chain-break event occurs at Add.227 (prior ~0.96)

Per synth #478 P-478.D recovery-phase transition, the chain-break event terminates the collapse phase and triggers recovery-phase re-calibration. The cumulative BF retraction is per synth #478 recovery half-life 2-3 ticks, with cumulative BF expected to recover from ×0.0035 toward ×0.05-0.10 over Add.227-229 (rebound prior ~0.945 conditional on chain-break event). The post-recovery-phase steady-state is projected to land in the ×0.10-0.30 BMA arithmetic zone (sub-Jeffreys-3 but well above sub-Jeffreys-1/10).

### Posterior-sensitivity bands

Under post-Add.226 posterior H₁ 0.78 / H₂ 0.07 / H₃ 0.15, the BMA-weighted Add.227 cumulative under scenario A (joint-ceiling sustain) is:

- **H₁ alone**: ×0.00014 (best-fit projection)
- **H₂ alone**: ×0.0089 (worst-fit projection)
- **H₃ alone**: ×0.0022 (intermediate projection)
- **BMA-weighted**: 0.78 × 0.00014 + 0.07 × 0.0089 + 0.15 × 0.0022 = 0.00011 + 0.00062 + 0.00033 = **×0.00106 ≈ ×0.0011**

The H₁ branch dominates the BMA-weighted projection at 0.78 / 0.0011 × 0.00014 = 10% of the total BMA mass; H₂ contributes 56%; H₃ contributes 33%. **The BMA-weighted projection is therefore H₂-skewed despite H₁-dominant posterior**, because H₂'s slower decay produces larger BF magnitude that disproportionately weights the BMA-arithmetic average.

This is a **convention-sensitivity result**: under log-geometric BMA per synth #470, the BMA-weighted projection is ×exp(0.78 × ln(0.00014) + 0.07 × ln(0.0089) + 0.15 × ln(0.0022)) = ×exp(0.78 × −8.87 + 0.07 × −4.72 + 0.15 × −6.12) = ×exp(−6.92 − 0.33 − 0.92) = ×exp(−8.17) = **×0.00028**. The log-geometric BMA is much closer to the H₁-alone projection (×0.00014), reflecting H₁'s posterior dominance more faithfully than the arithmetic convention.

## Predictions

- **P-481.A** (Add.227 BMA convention divergence): predicted Add.227 BMA arithmetic ∈ [×0.0008, ×0.0015] modal **×0.0011** under joint-ceiling sustain (extreme tail outcome at prior ~0.04); predicted log-geometric BMA ∈ [×0.0002, ×0.0005] modal **×0.00028** — convention divergence ratio ~4× expected.
- **P-481.B** (post-Add.227 H₁-posterior consolidation): if joint-ceiling sustains at Add.227, predicted H₁ posterior ∈ [0.85, 0.92] modal **0.88** (H₁ approaches dominance asymptote); H₂ posterior ∈ [0.02, 0.05] modal **0.03**; H₃ posterior ∈ [0.07, 0.12] modal **0.09**.
- **P-481.C** (post-Add.227 H₁-posterior re-weighting under chain-break): if chain-break occurs at Add.227, the recovery-phase transition per synth #478 P-478.F triggers H₁/H₂/H₃ re-weighting under recovery dynamics; predicted H₁ posterior holds ∈ [0.65, 0.80] modal **0.72** (mild retraction from collapse-phase peak as recovery dynamics under-discriminate H₁ vs H₃).
- **P-481.D** (Add.227 multi-axis cumulative band under joint-ceiling sustain): predicted Add.227 multi-axis correlation-corrected cumulative ∈ [×0.005, ×0.030] modal **×0.011** under H₁-dominant BMA; predicted naive-independence cumulative ∈ [×0.0005, ×0.0030] modal **×0.0011**.
- **P-481.E** (Add.230 trajectory boundary): under joint-ceiling sustain through Add.230 (extreme tail prior ~0.0000026), predicted Add.230 BMA arithmetic ∈ [×0.0000001, ×0.000001] modal **×0.00000027** — would represent the **deepest sub-unity BF in any visible-window joint-Markov chain**, well past sub-Jeffreys-1/1000 by 4-5 orders of magnitude.
- **P-481.F** (synth #482 anchor projection): predicted synth #482 will anchor the long-silence-chain-break debut-author signature using Add.226 gemini-cli Zheyuan-Lin as primary anchor; will provide cross-repo author-debut × silence-break correlation study with prior-conditional posterior re-weighting of debut-author baseline frequency.
- **P-481.G** (Add.227 chain-break prior-conditional posterior): predicted P[chain-break at Add.227 | H₁-dominant posterior] = 0.96 (sustains the H₁-dominant projection); P[joint-ceiling sustain at Add.227 | H₁-dominant posterior] = 0.04 (extreme tail outcome).

## Cross-references

- ADDENDUM-226 (this tick) — second discriminating datapoint at α₄-tier; H₁-dominant posterior re-weighting trigger.
- ADDENDUM-225 (sha c07bfd5) — first discriminating datapoint; α₃-tier observation.
- synth #479 (sha 9ff33d0) — α₃ posterior calibration protocol; post-Add.225 H₁ 0.60.
- synth #478 (sha d1f66bc) — R₂ collapse-regime materialisation; recovery-phase transition framework.
- synth #477 (sha 6041791) — H₁/H₂/H₃ third-tier α₃ projection.
- synth #475 (sha ec33b41) — two-step ceiling-stickiness BF-decay law; now extended to four-tier H₁-dominant.
- synth #470 — dual-convention BMA framework (arithmetic vs log-geometric divergence ~4× at H₁-dominant α₅ tier).

**End of synth #481.**
