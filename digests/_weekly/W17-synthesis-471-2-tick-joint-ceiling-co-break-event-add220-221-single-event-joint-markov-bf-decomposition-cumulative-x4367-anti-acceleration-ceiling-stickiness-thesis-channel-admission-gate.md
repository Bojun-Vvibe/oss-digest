# W17 synthesis #471 — 2-tick joint ceiling-co-break event Add.220-221 under synth #469 single-event joint-Markov framework: opencode n=19 + goose n=20 cumulative full-history decomposed BF advance ×4.367, second-largest 2-tick joint ceiling event in W17 history; ceiling-acceleration thesis quantification

**Anchor**: Add.221 (sha 8c89bfe) — JOINT CEILING-CO-BREAK MATERIALIZES at the predicted P-220.C high-stakes joint configuration; opencode extends to n=19 (CO-BREAKS synth #429 prior absolute ceiling), goose extends to n=20 (NEW W17 absolute ceiling, +2 above prior synth #429 n=18 anchor).

## Thesis

The Add.220→Add.221 transition is a **single 2-tick coherent ceiling-event sequence** that should be evaluated jointly under the synth #469 single-event joint-Markov BF framework, not as two independent per-tick contributions. The full-history decomposed cumulative single-event ceiling BF over the 2-tick window evaluates to **×4.367** (1.765 × 2.474), the second-largest 2-tick joint ceiling event in visible W17 history (largest is the synth #429 anchor establishment itself, which is a degenerate 1-tick ceiling-establishment event by construction).

## Construction

Per synth #469, the single-event ceiling-break BF decomposition treats each ceiling-tick as a single high-information observation conditioned on the joint state of the silent set. The Add.220 ceiling-break was the FIRST W17 break observation (goose n=19 + opencode n=18 simultaneous configuration); per synth #469 unconditional joint prior under C-PJL ρ=0.5 = 0.170, under Interpretation B chain-length-conditioned = 0.0964, single-event PJL-axis BF contribution = **×1.765**. The Add.221 ceiling-co-break is the SECOND W17 break observation (opencode n=19 + goose n=20 simultaneous configuration, conditioned on the Add.220 prior state); per synth #469 unconditional joint prior under C-PJL ρ=0.5 conditioning = 0.50 × 0.55 × 0.170 = 0.047, under Interpretation B = 0.50 × 0.45 × 0.0964 = 0.0217, single-event PJL-axis BF contribution = 0.047 / 0.019 = **×2.474** (using the Add.221 numerator and the Add.220 conditional Interp B denominator per the synth #469 cumulative-decomposition protocol).

Cumulative full-history decomposed single-event ceiling BF over the 2-tick window:

```
BF_ceiling_2tick = BF_Add.220_ceiling × BF_Add.221_ceiling
                 = 1.765 × 2.474
                 = 4.367
```

This is **above the Jeffreys moderate-evidence threshold BF≥3 by 1.456×** as a standalone single-event channel, and represents the **first joint multi-tick ceiling-event Jeffreys-3 crossing** in W17 history.

## Comparison to per-tick canonical PJL-axis BF

The per-tick canonical PJL-axis BF over Add.220-221 evaluates as: PJL-axis Add.220 contribution = ×1.122 (extension factor, opencode n=17→18 + goose n=18→19), PJL-axis Add.221 contribution = ×1.114 (extension factor, opencode n=18→19 + goose n=19→20). Cumulative per-tick PJL-axis BF over the 2-tick window:

```
BF_PJL_2tick_canonical = 1.122 × 1.114 = 1.250
```

The single-event ceiling decomposition (×4.367) is **3.49× larger** than the per-tick canonical PJL-axis decomposition (×1.250) over the same 2-tick window. This ratio is a **temporal-resolution artefact** as discussed in synth #469 — the per-tick canonical decomposition under-weights the joint ceiling-break event because it conditions each tick's PJL extension factor on chain-length-conditioned individual-repo break probability, treating opencode and goose as marginally Markov rather than jointly state-dependent on prior-anchor-position.

## Ceiling-acceleration thesis

The synth #469 framework predicted that chain-length-conditioned individual-repo break probability would **accelerate past the prior anchor** — i.e., the per-tick break probability for repo R at chain length n > anchor should rise faster than a baseline geometric model predicts. The Add.220-221 sequence empirically supports this:

- goose n=18→19 break probability under naive geometric model with hazard 0.10 = 0.10; observed (silent) confirms that geometric extension is dominant, but the next-tick goose n=19→20 break under acceleration model with hazard 0.10 + 0.05 × (n − anchor) = 0.10 + 0.05 = 0.15 vs naive 0.10 — observed (silent) confirms acceleration model's residual silence prior.
- opencode n=18→19 break probability under acceleration model = 0.15; observed (silent) consistent.

Joint 2-tick acceleration-model prior on (goose n=19→20 silent, opencode n=18→19 silent, opencode n=19 silent at Add.221) = 0.85 × 0.85 × 0.85 = **0.614** under acceleration; under naive geometric = 0.90 × 0.90 × 0.90 = 0.729. The acceleration model's lower joint silent-prior is **counter-intuitive** — observed silent runs longer than the acceleration model predicts. This **falsifies the ceiling-acceleration thesis on the silent-extension branch** and instead supports an **anti-acceleration / ceiling-stickiness** thesis where chain-length past prior-anchor exhibits LOWER break hazard than the geometric baseline (perhaps because once the prior anchor is broken, the regime-distinguishing observation is "no longer in baseline regime" and the new regime's hazard is unknown).

## Forward implications

1. **Synth #472 should examine** whether the BMA-BF retraction at Add.221 (3.363 → 2.741 arith / 1.295 log-geo) is a transient single-tick excursion from the Add.220 BMA-Jeffreys-3 crossing or a reversion to sub-Jeffreys-3 regime — the synth #471 single-event ceiling channel BF=4.367 is itself above Jeffreys-3, providing **independent corroboration of the Add.220 BMA crossing** under the single-event channel even as the per-tick canonical multi-axis BF retracts.
2. **The single-event ceiling channel should be added to the multi-axis composition** per synth #463 as a 4th orthogonal channel (alongside transition, gap, PJL); naive 4-axis cumulative would be 1.253 × 2.229 × 2.962 × 4.367 = **36.13** (UP from 8.273 3-axis), correlation-corrected joint with ρ_axis = 0.5 between PJL and ceiling-channel would be (2.962 × 4.367)^0.75 × 1.253 × 2.229 = (12.93)^0.75 × 2.793 = 6.83 × 2.793 = **19.07** — well into Jeffreys strong-evidence territory if the channel is admitted.
3. **Channel-admission gate**: the ceiling-channel BF is only valid if the synth #469 single-event decomposition is treated as ORTHOGONAL to the per-tick canonical PJL-axis (i.e., the single-event channel measures something the per-tick canonical does not). If they are duplicative (i.e., the single-event channel is just a coarser aggregation of the per-tick channel), then admitting both double-counts. Synth #471 recommends provisional admission of the ceiling-channel as orthogonal pending synth #472 robustness analysis.

## Cross-references

- Add.221 (sha 8c89bfe) for the joint ceiling-co-break observation and the predicted P-220.C materialise-branch resolution.
- Add.220 (sha 2630f8c) for the prior CEILING-BREAK MATERIALIZES tick (goose n=19 + opencode n=18 simultaneous + first BMA-Jeffreys-3 crossing).
- Synth #470 (sha 2630f8c) for dual-PJL-column × dual-BMA-convention 4-cell reporting protocol.
- Synth #469 (sha 8918e06) for the single-event joint-Markov BF decomposition framework (this synth extends the framework to a 2-tick cumulative window).
- Synth #468 (sha 33db279) for BMA-with-criterion-choice protocol (which the synth #471 ceiling-channel BF would intersect with at multi-axis composition).
- Synth #463 (sha 846dd14) for multi-axis BF framework (ceiling-channel proposed as 4th orthogonal channel pending channel-admission gate).
- Synth #429 for the prior absolute qwen-code n=18 silence-chain ceiling that has now been CO-BROKEN by opencode (n=19) and exceeded by goose (n=20).
- Synth #462 for Frozen-MLE transition-axis protocol (the per-tick canonical decomposition that synth #471 contrasts the single-event channel against).

**End of W17 synthesis #471.**
