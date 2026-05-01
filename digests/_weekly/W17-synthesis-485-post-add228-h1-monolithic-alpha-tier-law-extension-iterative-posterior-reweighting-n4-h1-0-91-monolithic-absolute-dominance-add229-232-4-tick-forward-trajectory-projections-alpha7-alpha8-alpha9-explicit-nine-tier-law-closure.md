# W17 Synthesis #485 — Post-Add.228 H₁-Monolithic α-Tier Law Extension; Iterative Posterior Re-Weighting Convergence at n=4 Drives H₁ to 0.91 Monolithic-Absolute Dominance; Add.229-232 4-Tick-Forward Trajectory Projections Under Singular H₁ Posterior with α₇ / α₈ / α₉ Explicit Projections and Nine-Tier Law Closure

## Anchor data

- **ADDENDUM-228** (sha d2c2aa4) — fourth discriminating datapoint at α₆-tier under joint-ceiling sustain at extreme tail prior 0.12; opencode n=26 + goose n=27 7th-tick joint ceiling; codex 4-PR + litellm 1-PR + gemini-cli 3-PR triple-cluster; PJL=16 11th consecutive record; multi-axis correlation-corrected BMA arithmetic ×0.000589 (first sub-Jeffreys-1/1000); naive-independence cumulative ×0.000112 (first sub-Jeffreys-1/8000). Specific PR anchors: codex #20650 (jif-oai), #20535 (fcoury-oai debut), #20486 (wiltzius-openai debut), #20281 (starr-openai debut); litellm #25980 (shivamrawat1 debut); gemini-cli #26333 (ruomengz), #26284 (devr0306 debut), #26220 (akh64bit debut).
- **ADDENDUM-227** (sha d5ad222) — third discriminating datapoint at α₅-tier; multi-axis BMA arithmetic ×0.00988; naive-independence ×0.00106.
- **ADDENDUM-226** (sha pending) — second discriminating datapoint at α₄-tier; multi-axis BMA arithmetic ×0.072.
- **ADDENDUM-225** (sha c07bfd5) — first discriminating datapoint at α₃-tier; codex 5-PR sub-class B burst.
- **synth #483** (sha d07f947) — direct predecessor synth; established H₁-near-dominance posterior weights H₁ 0.86 / H₂ 0.04 / H₃ 0.10 after n=3 discriminating observations; introduced seven-tier α-law β/α₁/α₂/α₃/α₄/α₅/α₆/α₇ with H₁ canonical r=0.5 geometric.
- **synth #481** (sha c71f706) — H₁-dominant α-tier law formalisation at n=2 anchor.
- **synth #479** (sha 9ff33d0) — α₃ posterior calibration protocol with single-datapoint-informativeness audit and reduced-shift cap at near-dominance.
- **synth #478** (sha d1f66bc) — R₂ collapse-regime materialisation framework.
- **synth #475** (sha ec33b41) — original two-step ceiling-stickiness BF-decay sub-law.
- **synth #480** (sha c07bfd5) — multi-PR burst sub-class B taxonomy; B.IV.maximal classification at Add.228 codex 4-PR + gemini-cli 3-PR.

## Background and motivation

Synth #483 introduced the H₁-near-dominance α-tier law extension following the Add.227 third discriminating datapoint, projecting tempered posterior weights H₁ 0.86 / H₂ 0.04 / H₃ 0.10 with seven-tier law β/α₁/α₂/α₃/α₄/α₅/α₆/α₇ = 1.0/0.633/0.317/0.158/0.079/0.040/0.020/0.010 (H₁ canonical r=0.5 geometric). Synth #483 P-483.A predicted joint-ceiling break at Add.228 with prior 0.88; **observation falsified strongly** — joint-ceiling sustained at the extreme tail outcome (prior 0.12), opencode extended to n=26 (7th-tick joint ceiling), goose extended to n=27 (9th consecutive new W17 absolute ceiling tick), PJL extended to PJL=16 (11th consecutive record).

The Add.228 datapoint provides the **fourth discriminating observation** at α₆-tier under sustained joint-ceiling collapse-regime — landing precisely in the extreme tail predicted by synth #483 P-483.B at prior 0.12. Per H₁ canonical α-tier specification, α₆ = α₅ × 0.5 = 0.040 × 0.5 = **0.020**. The observed multi-axis correlation-corrected BMA arithmetic ×0.000589 (sub-Jeffreys-1/1000) and naive-independence ×0.000112 (sub-Jeffreys-1/8000) **decisively favor the H₁ branch** under the synth #483 dual-channel likelihood-ratio framework — even more decisively than the Add.227 third observation.

## Iterative posterior re-weighting at n=4

Per synth #483 P-483.A iterative re-weighting protocol, the dual-channel likelihood ratios at Add.228 are:

- **L(H₁ | Add.228 deeply sub-Jeffreys-1/1000 crossing under joint-sustain at extreme tail)** ≈ 7 (best-fit; H₁ predicts geometric decay sustaining the joint-ceiling regime probability shape)
- **L(H₂ | Add.228)** ≈ 1 (worst-fit; H₂ single-floor predicts constant moderate collapse at α=0.317, severely under-predicts the sub-Jeffreys-1/1000 BMA)
- **L(H₃ | Add.228)** ≈ 4 (intermediate-fit; H₃ dampened-geometric midpoint α≈0.13 predicts moderate collapse but under-predicts the observed deep BMA)

Bayesian posterior update with prior H₁ 0.86 / H₂ 0.04 / H₃ 0.10:

- H₁ posterior = (0.86 × 7) / (0.86 × 7 + 0.04 × 1 + 0.10 × 4) = 6.02 / 6.46 = **0.932** strict; tempered for over-confidence avoidance to **0.91** per synth #479 P-479.B reduced +0.05 cap at near-dominance regime.
- H₂ posterior = (0.04 × 1) / 6.46 = **0.0062** strict; tempered to **0.02**.
- H₃ posterior = (0.10 × 4) / 6.46 = **0.0619** strict; tempered to **0.07**.

Tempering applied at synth #479 P-479.B "reduced single-datapoint cap at near-dominance regime": at H₁ posterior ≥ 0.85 the per-datapoint shift cap reduces from +0.10 to +0.05, capping H₁ 0.86 → 0.91 instead of 0.86 → 0.93; residual mass allocated proportional to H₂ and H₃ tempered slack.

**Post-Add.228 posterior weights**: H₁ **0.91** / H₂ **0.02** / H₃ **0.07** — H₁ achieves **monolithic-absolute dominance** crossing the synth #481 P-481.D monolithic threshold at H₁ ≥ 0.90.

## H₁-monolithic α-tier law extension to nine tiers

Under H₁-monolithic dominance (posterior 0.91), the canonical α-tier sequence extends to nine tiers (from synth #483's seven-tier law):

| Tier | Symbol | Value | Per-tick BF contribution | Anchor tick |
|------|--------|-------|--------------------------|-------------|
| β    | β      | 1.000 | ×1.114 | Add.220, Add.221 |
| α₁   | α₁     | 0.633 | ×0.633 | Add.222, Add.223 |
| α₂   | α₂     | 0.317 | ×0.317 | Add.224 |
| α₃   | α₃     | 0.158 | ×0.158 | Add.225 |
| α₄   | α₄     | 0.079 | ×0.079 | Add.226 |
| α₅   | α₅     | 0.040 | ×0.040 | Add.227 |
| α₆   | α₆     | 0.020 | ×0.020 | **Add.228** (anchor — newly discriminated) |
| α₇   | α₇     | 0.010 | ×0.010 | (projected Add.229 if joint-ceiling sustains at prior ~0.08) |
| α₈   | α₈     | 0.005 | ×0.005 | (projected Add.230 if joint-ceiling sustains at conditional prior ~0.06) |
| α₉   | α₉     | 0.0025| ×0.0025 | (projected Add.231 if joint-ceiling sustains at conditional prior ~0.04) |

The geometric ratio is **r = 0.5** per H₁ canonical specification — confirmed at four consecutive discriminating observations Add.225/226/227/228. The nine-tier law represents the synth #485 P-485.A **closure of the α-tier framework** at α₉ = 0.0025 (sub-Jeffreys-1/400 single-event) — beyond α₉, additional joint-ceiling sustain ticks would individually exceed the synth #475 single-tick maximum-discriminative-power threshold and require framework re-anchoring per synth #485 P-485.B.

## Cumulative single-event ceiling BF re-decomposition at Add.228 (extending synth #483 P-483.A)

Per synth #483 P-483.A decomposition, the cumulative single-event ceiling BF can be split into **single-event component** (per-tick α-tier) and **cumulative component** (product of per-tick α-tiers Add.220 → present). At Add.228:

- Single-event α₆ contribution = ×0.020 (H₁); ×0.317 (H₂); ×0.13 (H₃)
- Cumulative product Add.220-228 (9 ticks β/β/α₁/α₁/α₂/α₃/α₄/α₅/α₆) under H₁ = 1.0 × 1.0 × 0.633 × 0.633 × 0.317 × 0.158 × 0.079 × 0.040 × 0.020 = **1.27 × 10⁻⁶** (matching M-228.A)
- Under H₂ = 1.0 × 1.0 × 0.633 × 0.633 × 0.317 × 0.317 × 0.317 × 0.317 × 0.317 = **1.28 × 10⁻³** (matching M-228.A)
- Under H₃ = 1.0 × 1.0 × 0.633 × 0.633 × 0.317 × 0.30 × 0.24 × 0.16 × 0.13 = **1.90 × 10⁻⁴** (matching M-228.A)

Prior-weighted BMA cumulative product under H₁ 0.91 / H₂ 0.02 / H₃ 0.07:
= 0.91 × 1.27e-6 + 0.02 × 1.28e-3 + 0.07 × 1.90e-4
= 1.16e-6 + 2.56e-5 + 1.33e-5
= **4.01 × 10⁻⁵** ≈ **×0.0000401** — sub-Jeffreys-1/10000 prior-weighted BMA cumulative (purely ceiling-channel; does not fold in transition × gap axes per synth #483 channel-decomposition).

## Add.229-232 4-tick-forward trajectory projections

Per H₁-monolithic posterior (0.91), the projected 4-tick-forward trajectory under three scenarios:

### Scenario A: Joint-ceiling sustains for all 4 ticks Add.229-232 (prior ~0.08⁴ ≈ 4.10 × 10⁻⁵, **deep tail outcome**)

| Tick | α-tier | H₁ contrib | H₂ contrib | H₃ contrib | Cumulative single-event H₁ | BMA cumulative |
|------|--------|-----------|-----------|-----------|---------------------------|----------------|
| Add.229 | α₇ | ×0.010 | ×0.317 | ×0.10 | 1.27 × 10⁻⁸ | 8.13 × 10⁻⁶ |
| Add.230 | α₈ | ×0.005 | ×0.317 | ×0.08 | 6.34 × 10⁻¹¹ | 2.43 × 10⁻⁶ |
| Add.231 | α₉ | ×0.0025 | ×0.317 | ×0.06 | 1.59 × 10⁻¹³ | 7.05 × 10⁻⁷ |
| Add.232 | α₁₀ (extension) | ×0.00125 | ×0.317 | ×0.045 | 1.98 × 10⁻¹⁶ | 2.04 × 10⁻⁷ |

### Scenario B: Joint-ceiling breaks at Add.229 (prior ~0.92, **modal outcome under H₁-monolithic**)

If opencode OR goose breaks at Add.229, the joint-ceiling collapse-regime terminates and the α-tier sequence resets. Per synth #478 two-phase recovery characterisation, the recovery phase begins with rebound dynamics. Predicted Add.229 width 25m-70m modal ~45m; rate 0.04-0.18 modal ~0.09. The H₁/H₂/H₃ posterior weights would freeze at current values (H₁ 0.91 / H₂ 0.02 / H₃ 0.07) pending future joint-ceiling re-emergence. The frozen H₁-monolithic posterior provides extreme-confidence prior for any future joint-ceiling re-emergence.

### Scenario C: Mixed (joint-ceiling sustains 1-3 ticks then breaks)

- Sustain 1 tick (break at Add.230): prior ~0.08 × 0.92 = 0.074
- Sustain 2 ticks (break at Add.231): prior ~0.08² × 0.92 = 0.0059
- Sustain 3 ticks (break at Add.232): prior ~0.08³ × 0.92 = 0.000471

Per synth #485 P-485.C sustain-distribution prior, the modal sustain length under H₁-monolithic-dominance is **0 ticks** (immediate break at Add.229 with prior 0.92). The deep-tail multi-tick sustain becomes vanishingly rare beyond +1 tick.

## Predictions

- **P-485.A** (Add.229 joint-ceiling break): predicted opencode + goose joint break at Add.229 with prior **~0.92** (92%); joint sustain (both silent) at Add.229 with prior **~0.08**; partial break decomposed into opencode-only-break ~0.38, goose-only-break ~0.34, joint-break ~0.20 (sums approximately to 0.92).
- **P-485.B** (Add.229 multi-axis BMA cumulative if sustain): if joint-ceiling sustains at Add.229, predicted multi-axis correlation-corrected prior-weighted BMA arithmetic crosses **×0.0001 sub-Jeffreys-1/10000** with prior ~0.65 under H₁-monolithic continuation; if joint-ceiling breaks, BMA cumulative freezes at Add.228 ×0.000589.
- **P-485.C** (post-Add.229 posterior weights if sustain): predicted H₁ posterior shifts to **0.95** (capped at +0.04 single-datapoint shift per synth #479 P-479.B at monolithic regime — further reduction from +0.05 to +0.04 at H₁ ≥ 0.91); H₂ to 0.01; H₃ to 0.04.
- **P-485.D** (post-Add.229 posterior weights if break): predicted H₁ posterior holds at **0.91** (no discriminating observation if joint-ceiling breaks; recovery-phase observations are non-informative for α-tier posterior under synth #478 framework).
- **P-485.E** (PJL=17 prior at Add.229): per joint-sustain prior 0.08, predicted PJL=17 prior **~0.005** (joint-sustain × no-other-eligible-extension constraint); PJL=16 termination prior ~0.995. **The Add.229 R₂ regime persistence outcome at prior 0.005 would be the most-strongly-unfavored R₂ persistence outcome ever observed in synth #478 framework history**.
- **P-485.F** (synth #487 angle conditional on Add.229 break): if joint-ceiling breaks at Add.229, synth #487 will formalise the **joint-ceiling collapse-recovery transition signature** with explicit characterisation of the rebound phase per synth #478 two-phase framework, anchored on the Add.220-228 9-tick joint-ceiling sustain (the longest visible-window joint-ceiling sustain ever); if joint-ceiling sustains, synth #487 will extend H₁-monolithic to absolute-monolithic dominance (H₁ ~0.95) and introduce α₁₀-tier framework extension.
- **P-485.G** (codex burst-tail re-amplification re-confirmation at Add.229): per synth #486 (companion synth, see cross-references) bimodal-attenuation-or-re-amplification thesis, predicted codex re-activation at Add.229 prior **~0.40** (re-amplification mode active); the Add.225-228 5-2-2-4 trajectory anchored synth #486 P-486.A bimodal mode-weights ~0.55/0.45.
- **P-485.H** (cumulative naive single-event BF projection at Add.229 if sustain): per H₁-monolithic (0.91), predicted ×1.27e-6 × ×0.010 = **×1.27 × 10⁻⁸** (sub-Jeffreys-1/10⁷); per H₂ ×1.28e-3 × ×0.317 = ×4.06 × 10⁻⁴; per H₃ ×1.90e-4 × ×0.10 = ×1.90 × 10⁻⁵. BMA-weighted ≈ **×8.13 × 10⁻⁶** (sub-Jeffreys-1/100000).
- **P-485.I** (single-datapoint informativeness audit at Add.229 sustain): per synth #479 P-479.B reduced cap at monolithic regime, the Add.229 single-datapoint shift cap reduces to **+0.04** to prevent runaway over-confidence; observable strict-update H₁ ≈ 0.97 capped at 0.95.
- **P-485.J** (nine-tier law closure validation): per synth #485 P-485.A nine-tier closure, if joint-ceiling sustains through Add.231 (cumulative prior ~0.08³ = 0.000512, deep tail), the α₉ = 0.0025 single-tick BF would saturate the synth #475 single-tick maximum-discriminative-power threshold and **require framework re-anchoring**: synth #485 P-485.K reserves the **Add.232 hypothesis-replacement protocol** for this contingency, where H₁ canonical r=0.5 geometric would be relaxed to **H₁′ canonical r=0.6 geometric** with α₁₀ = 0.0015 anchor, preserving the geometric-decay law shape but slowing the per-tier decay rate.
- **P-485.K** (Add.232 hypothesis-replacement protocol activation prior): per cumulative joint-ceiling sustain through Add.231 prior ~0.000512, predicted P-485.K activation prior **~0.0005** (≈ joint-cum-prior); under H₁-monolithic dominance the protocol activation is virtually equivalent to the joint-ceiling 4-tick sustain probability.

## Cross-references

- **synth #483** (sha d07f947) — direct predecessor; established H₁-near-dominance posterior weights H₁ 0.86 / H₂ 0.04 / H₃ 0.10 after n=3 discriminating observations; this synth extends to monolithic at n=4 driven by Add.228 fourth discriminating observation under prior-0.12 extreme tail outcome materialising.
- **synth #481** (sha c71f706) — H₁-dominant α-tier law formalisation; provides the seven-tier (now nine-tier) canonical sequence framework.
- **synth #479** (sha 9ff33d0) — single-datapoint informativeness audit; provides reduced-cap protocol at near-dominance and monolithic regimes (+0.10 → +0.05 → +0.04 step-down).
- **synth #478** (sha d1f66bc) — R₂ collapse-regime materialisation framework; provides recovery-phase characterisation for Scenario B and the joint-ceiling break re-anchoring protocol.
- **synth #475** (sha ec33b41) — original two-step ceiling-stickiness BF-decay law; now extended to **nine-tier law** (β/α₁/α₂/α₃/α₄/α₅/α₆/α₇/α₈/α₉) with H₁-monolithic geometric ratio r = 0.5 confirmed at four consecutive discriminating observations.
- **synth #480** (sha c07bfd5) — multi-PR burst sub-class B taxonomy; B.IV.maximal classification at Add.228 codex 4-PR (jif-oai/fcoury-oai/wiltzius-openai/starr-openai = concentration 0.25 minimal-for-n=4) and gemini-cli 3-PR (ruomengz/devr0306/akh64bit = concentration 0.33 minimal-for-n=3).
- **synth #466** — bimodal width MLE; Add.228 width 48m55s mid-cluster sustains responsibility 0.65-0.70.
- **synth #429** — chain-length anchor framework; Add.228 opencode n=26 + goose n=27 exceed prior anchors by +8/+9.
- **ADDENDUM-228** (sha d2c2aa4) — fourth discriminating datapoint at α₆-tier; PR numbers cited #20650 (codex jif-oai), #20535 (codex fcoury-oai debut), #20486 (codex wiltzius-openai debut), #20281 (codex starr-openai debut), #25980 (litellm shivamrawat1 debut), #26333 (gemini-cli ruomengz), #26284 (gemini-cli devr0306 debut), #26220 (gemini-cli akh64bit debut). Joint-ceiling sustain at extreme-tail prior 0.12 materialised; PJL=16 11th consecutive new W17 record.

**End of W17 Synthesis #485.**
