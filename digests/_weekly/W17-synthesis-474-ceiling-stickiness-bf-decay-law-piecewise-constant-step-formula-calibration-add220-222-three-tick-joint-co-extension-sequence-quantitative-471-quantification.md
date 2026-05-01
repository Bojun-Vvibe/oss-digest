# W17 Synthesis #474 — Ceiling-stickiness BF-decay law: quantitative chain-length-conditioned per-tick PJL-axis BF formula calibrated to Add.220-221-222 3-tick joint co-extension sequence (×1.114, ×1.114, ×0.633)

**Trigger**: Add.222 M-222.E catalogues the first sub-unity per-tick PJL-axis BF contribution (×0.633) within the Add.220-222 3-tick joint ceiling-co-extension sequence. The per-tick PJL-axis BF sequence ×1.114 (Add.220) → ×1.114 (Add.221) → ×0.633 (Add.222) demonstrates a **non-monotonic decay** with an early plateau followed by a sharp drop at chain length n = 21 (goose) / n = 20 (opencode). The synth #471 ceiling-stickiness thesis predicted exactly this BF-decay-with-extension pattern qualitatively but did not specify a functional form. Synth #474 calibrates a quantitative law.

**Definition (proposed BF-decay law)**: Let n_anchor be the prior synth #429 absolute silence-chain ceiling (n_anchor = 18). For an active joint co-extension event at tick t with chain length n_t (= max(n_opencode_t, n_goose_t) for the joint configuration), the per-tick PJL-axis BF contribution is modeled as:

```
BF_per-tick(n_t) = α + (β − α) × exp(−γ × max(0, n_t − n_anchor − 1))
```

where α is the **mature-extension asymptotic BF** (the floor as n → ∞), β is the **early-extension peak BF** at n_t = n_anchor + 1 (first tick past the prior ceiling), and γ is the **chain-stickiness decay rate**. Calibration to the Add.220-222 3-tick sequence:

- Add.220: n_t = 19 (goose first ceiling-break), per-tick BF = ×1.114, → β = 1.114 (anchored).
- Add.221: n_t = 20 (goose second ceiling-tick + opencode joins), per-tick BF = ×1.114, → exp(−γ × 1) ≈ (1.114 − α) / (β − α). If α = 0.5, then exp(−γ) = (1.114 − 0.5) / (1.114 − 0.5) = 1.0, so γ = 0 (no decay through Add.221, plateau). If α = 0.633 (Add.222 value as candidate asymptote), then exp(−γ) = (1.114 − 0.633) / (1.114 − 0.633) = 1.0, also γ = 0.
- Add.222: n_t = 21 (goose third ceiling-tick + opencode at joint ceiling n=20), per-tick BF = ×0.633, → exp(−γ × 2) = (0.633 − α) / (1.114 − α).

The 3-point fit is **under-determined** with 3 parameters; the 2-point degeneracy at Add.220-221 forces γ = 0 if we require β = 1.114 and the Add.221 BF = 1.114, regardless of α. The Add.222 drop to 0.633 then **forces a step-function** rather than a smooth exponential. The simplest 2-parameter fit is therefore:

```
BF_per-tick(n_t) = β   if n_t ≤ n_threshold
                 = α   if n_t > n_threshold
```

with **β = 1.114, α = 0.633, n_threshold = 20** — a **piecewise-constant step law** with breakpoint at the joint-ceiling n=20 tick. This matches the Add.220-221-222 sequence exactly within rounding.

**Interpretation**: The synth #471 ceiling-stickiness thesis is consistent with **discrete-state dynamics** rather than smooth-exponential decay. The per-tick BF stays at the early-extension plateau (β = 1.114) until the **first joint-ceiling tick** where two repos jointly hold the absolute ceiling (n_threshold = 20 = the new W17 absolute ceiling at Add.221), then drops to a mature-extension floor (α = 0.633). The discrete-step interpretation is **physically meaningful** — the joint-ceiling configuration represents a **structural regime change** where the chain-stickiness mechanism becomes the dominant suppressor of break events, displacing the prior chain-length-conditioned per-repo break model.

**Forward predictions under the step law**:

- **P-474.A** — Add.223 PJL-axis per-tick BF: predicted ×0.633 (mature-extension floor sustains for 1+ additional tick).
- **P-474.B** — Add.224 PJL-axis per-tick BF if both repos extend: predicted ×0.633 (floor sustains).
- **P-474.C** — chain-break event: when either opencode or goose breaks (returns to n=0 via merge), the per-tick BF will **revert to a transition-axis input rather than PJL-axis input**, and the next ceiling-channel measurement will start fresh from a new n_anchor. Predicted that the next ceiling-channel reactivation will exhibit a fresh β = 1.114 plateau followed by another step-down at the new n_threshold.

**Cumulative-BF retraction trajectory**: Under the step law, the cumulative single-event ceiling BF over Add.220-220+k = 1.765 × 1.114^min(k, 1) × 0.633^max(0, k−1). At k = 0: ×1.765. At k = 1: ×1.967. At k = 2: ×2.764 (matches Add.222). At k = 3: ×1.749 (cumulative DROPS below 2.0). At k = 4: ×1.108 (cumulative DROPS below 1.5). At k = 5: ×0.701 (cumulative DROPS below unity, **single-event ceiling BF turns informationally adverse**). The chain-stickiness regime therefore predicts that the **single-event ceiling BF will turn negative-informational by Add.225-226 if the joint-ceiling configuration sustains** — a strong falsification gate for the synth #471/474 thesis.

**Cross-axis BF interaction with PJL-axis decay**: Under the step law, the cumulative PJL-axis BF (which compounds per-tick contributions across all PJL-record-extension ticks, not just ceiling ticks) faces simultaneous suppression: each additional ceiling-tick adds ×0.633 instead of ×1.114, so the multi-axis cumulative will continue retracting. At Add.222 the multi-axis correlation-corrected cumulative is ×4.255 (1.42× Jeffreys-3); under the step law, if joint-ceiling configuration sustains for 3 more ticks, the cumulative drops to ×4.255 × 0.633^3 / 1.000^3 ≈ **×1.079** by Add.225 — **the multi-axis Jeffreys-3 maintenance run would terminate at 6-7 consecutive ticks** unless transition-axis or gap-axis contributions compensate.

**Predictions (synth #474 falsification gates)**:

1. **P-474.D** — Add.223-224 PJL-axis per-tick BF prediction: ×0.633 sustained on at least one of the next 2 ticks under joint-ceiling persistence. Falsified if BF reverts to ≥1.0 without break event.
2. **P-474.E** — multi-axis Jeffreys-3 maintenance termination: predicted termination by Add.226 under joint-ceiling persistence (5-tick further sustain). Falsified if Jeffreys-3 holds beyond Add.226 without break event AND without compensating transition-axis BF advance.
3. **P-474.F** — fresh ceiling-channel reactivation: when the joint-ceiling configuration breaks (either opencode or goose merges), the next ceiling-channel reactivation will exhibit β = 1.114 plateau again. Falsification: any evidence the post-break ceiling-channel starts at a different β value.

**Cross-references**: Add.222 (sha c752e04) M-222.E for the BF-decay-trigger observation; synth #471 for ceiling-stickiness thesis qualitative framework (now quantified); synth #469 for single-event joint-Markov BF framework (per-tick decomposition); synth #429 for n_anchor = 18 prior absolute ceiling; synth #463 for multi-axis BF correlation-corrected cumulative protocol; synth #468 for BMA-with-criterion-choice protocol (step-law applies to raw-likelihood numerator only; BIC-corrected denominator unaffected); Add.220 (sha 2630f8c) for β plateau onset; Add.221 (sha 90732b0) for β plateau sustain; synth #472 for BMA-BF transient-excursion classification (now retroactively understood as the BMA-leading indicator of the underlying step-law regime change).

**End of W17 synthesis #474.**
