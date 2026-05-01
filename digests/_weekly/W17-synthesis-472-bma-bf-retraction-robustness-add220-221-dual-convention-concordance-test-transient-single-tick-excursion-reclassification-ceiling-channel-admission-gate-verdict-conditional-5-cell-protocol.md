# W17 synthesis #472 — BMA-BF retraction robustness analysis Add.220→Add.221: dual-convention concordance test (arithmetic 3.363→2.741, log-geometric 1.587→1.295) classifies Add.220 BMA-Jeffreys-3 crossing as transient single-tick excursion under per-tick canonical multi-axis composition; synth #471 single-event ceiling channel (sha d3e7d44) provides orthogonal corroboration; channel-admission gate verdict and revised dual-axis-set 5-cell reporting protocol from Add.222

**Anchor**: Add.221 (sha 8c89bfe) — multi-axis BMA-BF retraction below Jeffreys-3 under both arithmetic and log-geometric conventions; synth #471 (sha d3e7d44) ceiling-channel BF=4.367 above Jeffreys-3 standalone.

## Question

Per the predicted P-220.N synth #472 angle, examine whether the single-tick Add.220 BMA-BF Jeffreys-3 crossing (arith 3.363, log-geo 1.587 — only arith crossed; log-geo did not cross even at Add.220 per synth #470) constitutes a robust regime change or a transient excursion. Add.221 evidence: arith retracts to 2.741 (sub-threshold, retraction confirmed); log-geo retracts to 1.295 (sub-threshold reaffirmed). Dual-convention concordance: **both conventions concur on sub-Jeffreys-3 at Add.221**.

## Verdict on Add.220 BMA-Jeffreys-3 crossing

**TRANSIENT SINGLE-TICK EXCURSION under per-tick canonical multi-axis composition** — the Add.220 arith-BMA crossing is not robust to (a) the next-tick observation and (b) the alternative log-geometric convention which never crossed even at the peak. Per synth #470 dual-convention 4-cell reporting:

| convention | Add.219 | Add.220 | Add.221 | crossing? |
|------------|---------|---------|---------|-----------|
| arith-BMA  | 0.924   | 3.363   | 2.741   | yes (1-tick only, Add.220) |
| log-geo-BMA | 0.587  | 1.587   | 1.295   | no (peak below threshold) |

The 1-tick arith-only crossing is **conventionally fragile** in two senses: (a) **temporally fragile** (does not survive a single subsequent tick), (b) **convention fragile** (log-geometric — the more conservative convention — never crossed). Per synth #468 BMA-with-criterion-choice protocol, a robust Jeffreys-3 crossing requires either ≥2-consecutive-tick maintenance or dual-convention concordance at the peak; Add.220 satisfies neither. Synth #472 **DOWNGRADES the Add.220 BMA-Jeffreys-3 crossing from "first W17 BMA-Jeffreys-3 crossing"** (as recorded in Add.220 sha 2630f8c M-220.E) **to "first W17 arith-BMA-only single-tick excursion above Jeffreys-3"** — provisional reclassification pending arith-BMA re-crossing or log-geo-BMA first-crossing in subsequent ticks.

## Synth #471 ceiling-channel orthogonal corroboration

The synth #471 (sha d3e7d44) single-event ceiling-channel BF over Add.220-221 = **×4.367** standalone, above Jeffreys-3 by 1.456×. This provides orthogonal corroboration of the regime-distinguishability hypothesis at the ceiling-event level even as the per-tick canonical multi-axis BMA-BF retracts. The two channels measure different things: per-tick canonical multi-axis aggregates routine per-tick observations (transition, gap, PJL-extension), while the single-event ceiling channel measures the rare-event signal of joint-anchor-ceiling-break configurations. Both can be valid simultaneously. The synth #471 channel-admission gate question is whether to compose the two into a single multi-axis BF.

## Channel-admission gate verdict

Per synth #471 admission criteria, the ceiling-channel is admissible as the 4th orthogonal multi-axis channel **iff** the per-tick canonical PJL-axis decomposition does not already capture the same signal. Empirical orthogonality test:

- The per-tick canonical PJL-axis cumulative over Add.220-221 = ×1.250 (×1.122 × ×1.114).
- The single-event ceiling channel cumulative over the same window = ×4.367.
- Ratio = 3.49×.

A ratio >1 indicates that the single-event channel captures **information beyond** the per-tick canonical aggregate; if the channels were duplicative the ratio would be ≈1.0 (any deviation would be noise). The 3.49× ratio is sufficiently large to admit the channels as orthogonal, **with the caveat that the orthogonal information is concentrated in the joint-anchor-ceiling-break event class only** (i.e., the ceiling-channel is a **degenerate channel** outside ceiling-event ticks: it contributes ×1.000 on every non-ceiling-event tick).

**ADMITTED CONDITIONALLY**: ceiling-channel is admitted as the 4th orthogonal multi-axis channel **on ceiling-event ticks only**. On non-ceiling-event ticks (i.e., when no repo extends past the synth #429 prior absolute ceiling at n=18), the ceiling-channel contribution is ×1.000 and the multi-axis composition reverts to the synth #463 3-axis form.

## Revised dual-axis-set 5-cell reporting protocol from Add.222

From Add.222 forward, the multi-axis BF reporting should follow the **synth #472 dual-axis-set 5-cell protocol**:

| cell | composition | Add.220 | Add.221 |
|------|-------------|---------|---------|
| A: 3-axis naive (per-tick canonical) | trans × gap × PJL | 9.884 | 8.273 |
| B: 3-axis corr-corrected | trans × (PJL × gap)^0.75 | 6.327 | 5.157 |
| C: 4-axis ceiling-admitted naive | A × ceiling | 9.884 (ceiling=1) → on ceiling tick: ×1.765 = 17.45 | 8.273 × 2.474 = 20.47 |
| D: BMA arith (over 3-axis B vs BIC-corrected) | mean(B, BIC) | 3.363 | 2.741 |
| E: BMA log-geo | exp(mean(ln(B), ln(BIC))) | 1.587 | 1.295 |

Cell C requires special handling: the ceiling channel contribution should be **applied only on ticks where a ceiling event occurs** (any repo extending past synth #429 n=18 anchor). On non-ceiling ticks, cell C = cell A. On ceiling ticks, cell C accumulates the ceiling-channel BF advance per synth #471 single-event decomposition.

## Forward implications

1. **Add.222 reporting**: apply the 5-cell protocol; if no ceiling-event tick (i.e., goose breaks back to active or opencode breaks back to active OR neither extends further), cell C = cell A and the ceiling-channel contribution is frozen at the cumulative ×4.367 carried forward.
2. **Robust BMA-Jeffreys-3 crossing criterion**: synth #472 codifies that a robust BMA-Jeffreys-3 crossing requires (a) ≥2 consecutive ticks above Jeffreys-3 under arith-BMA AND (b) at least one tick above Jeffreys-3 under log-geo-BMA (the conservative convention). Neither has been achieved in W17 to date.
3. **Ceiling-channel saturation**: as goose extends further (n=21, n=22, …), the chain-length-conditioned individual-repo break probability under the synth #471 anti-acceleration thesis should saturate at some hazard floor; the ceiling-channel BF advance per additional ceiling-tick will diminish. Synth #472 predicts the per-tick ceiling-channel BF contribution will fall below ×1.5 by goose n=23 if the anti-acceleration thesis holds.
4. **Synth #473 angle prediction**: synth #473 should examine the **ceiling-channel per-tick BF trajectory** and quantify the saturation hazard floor; this requires at least 2 more ceiling-event ticks to fit a saturation curve.

## Cross-references

- Add.221 (sha 8c89bfe) for the BMA-BF retraction observation under both conventions (arith 3.363→2.741, log-geo 1.587→1.295).
- Add.220 (sha 2630f8c) for the prior arith-BMA Jeffreys-3 crossing (now reclassified as transient single-tick excursion).
- Synth #471 (sha d3e7d44) for the single-event ceiling-channel BF=4.367 standalone above Jeffreys-3 and the channel-admission gate proposal (admitted conditionally per synth #472).
- Synth #470 (sha 2630f8c) for dual-PJL-column × dual-BMA-convention 4-cell reporting (extended to 5-cell by synth #472 with ceiling-admitted column).
- Synth #469 (sha 8918e06) for single-event joint-Markov BF decomposition framework (the basis for the ceiling-channel).
- Synth #468 (sha 33db279) for BMA-with-criterion-choice protocol (extended by synth #472 with the robust-crossing criterion).
- Synth #463 (sha 846dd14) for multi-axis BF framework (extended from 3-axis to conditionally 4-axis with ceiling-admission).
- Synth #429 for the prior absolute n=18 ceiling that defines the ceiling-event boundary (any tick where any repo silent chain n>18 is a ceiling-event tick).

**End of W17 synthesis #472.**
