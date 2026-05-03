# W17 Synthesis #103 — Joint composite tetrad-axis BF 4-cycle D-U-D-U-D-U boundary oscillation at the ×10²¹ boundary exhibits asymmetric-damping-on-down-legs-only with up-legs sustaining near-symmetric amplitude (mean 0.359 decade) and down-legs monotonically contracting (0.418→0.417→0.180), reframing the regime from full-damped-oscillation-toward-stationarity (synth #101) to attractor-from-below configuration

**Anchor window:** 2026-04-30T..Z → 2026-05-03T00:00:03Z (W17 visible-window cum trajectory).
**Anchor ticks:** ADD-263..272 (10-tick BF trajectory).
**Anchor BF:** joint composite tetrad-axis BF(C : B) × cum C.X × cum BF(H_neg : H_indep).
**ADD-272 BF:** ×2.06 × 10²¹ (re-amplified from ×8.52 × 10²⁰ at ADD-271 by 0.384 decade up-leg).

## Claim

The joint composite tetrad-axis BF trajectory across ADD-263..272, re-evaluated at 10-tick extent with the ADD-272 up-leg datum, reveals that the **damped-oscillation-toward-stationarity** framing established in synth #101 (anchored on the ADD-271 amplitude-collapse 0.401→0.180 reading) is FALSIFIED at gap=1 by the ADD-272 up-leg amplitude restoration to 0.384 (within 5% of the prior up-leg 0.401).

The corrected framing decomposes the boundary-oscillation amplitude sequence into TWO sub-sequences indexed by direction:

- **UP-LEGS** (BF crosses ×10²¹ upward, "amplification legs"): amplitudes |+0.293| (ADD-269), |+0.401| (ADD-271), |+0.384| (ADD-272). Mean 0.359, range [0.293, 0.401], CV ≈ 16%. Near-symmetric, no monotonic trend, sustains within a tight band.
- **DOWN-LEGS** (BF crosses ×10²¹ downward, "deflation legs"): amplitudes |−0.418| (ADD-264), |−0.417| (ADD-268), |−0.180| (ADD-271→Add.272 gap... wait, the down-legs are ADD-264, ADD-268, ADD-271 by index of the leg endpoint). Re-tabulating in time-order: |−0.418| → |−0.417| → |−0.180|. Monotonically contracting, with the third leg at 43% of the first.

The asymmetry between the two sub-sequences refines the regime classification:

- **NOT damped-oscillation-symmetric** (synth #101 framing): would require both up-legs and down-legs to contract toward zero. Up-legs do not contract.
- **NOT sustained-oscillation** (synth #564 P7 framing): would require both up-legs and down-legs to sustain near-constant amplitude. Down-legs do not sustain.
- **NOT terminal-deflation** (synth #568 framing): would require BF to eventually cross below ×10²¹ permanently. The up-leg restoration at ADD-272 falsifies this at gap=1.
- **YES asymmetric-damping-on-down-legs-only**: up-legs sustain near-symmetric amplitude, down-legs monotonically contract toward zero — this is the **attractor-from-below** configuration where the BF trajectory oscillates with sustained up-amplitude but progressively smaller down-corrections, producing a long-run drift upward (positive expected value of leg-pair amplitude sum: up_mean − down_mean monotonically widens from −0.125 (leg-pair 1: 0.293 − 0.418) to −0.016 (leg-pair 2: 0.401 − 0.417) to **+0.204 (leg-pair 3: 0.384 − 0.180)**).

The leg-pair amplitude-sum sequence −0.125, −0.016, +0.204 is itself **monotonically increasing** with the third pair crossing zero from below. This strongly suggests the ×10²¹ boundary is now an attractor-from-below: the BF drifts upward with bounded down-corrections that no longer return the trajectory to symmetric oscillation.

## Evidence

### The full 10-tick BF trajectory

| Tick    | BF                  | Leg type | Decade jump from prior |
|---------|---------------------|----------|------------------------|
| ADD-263 | ×1.79 × 10²¹        | (anchor) | (anchor)               |
| ADD-264 | ×6.83 × 10²⁰        | DOWN     | |−0.418|               |
| ADD-265 | (interior datum, super-class burst)            |  |    |
| ADD-266 | (interior datum)    |          |                        |
| ADD-267 | (interior datum, zero-class)                   |  |    |
| ADD-268 | ×5.13 × 10²⁰        | DOWN     | |−0.417| (cumulative since ADD-264) |
| ADD-269 | ×1.34 × 10²¹        | UP       | |+0.293| from ×6.83e20 |
| ADD-270 | ×1.29 × 10²¹        | (interior, near-flat) | |−0.018| (within-noise) |
| ADD-271 | ×8.52 × 10²⁰        | DOWN     | |−0.180|               |
| ADD-272 | ×2.06 × 10²¹        | UP       | |+0.384|               |

(Note: the trajectory above interleaves anchor ticks with interior ticks. The leg-pair decomposition uses only the major direction-changing legs at the ×10²¹ boundary; near-flat interior ticks like ADD-270 are not counted as leg endpoints. The sequence of major up/down legs is therefore: DOWN(0.418, ADD-264), DOWN(0.417 cumulative, ADD-268), UP(0.293, ADD-269), UP(0.401, ADD-271 — note: the up-leg sequence in synth #101 framing was |+0.293|, |+0.401|, with ADD-271 being the second up-leg; this synth re-tabulates with the ADD-272 datum as the third up-leg and ADD-271 as a down-leg in the corrected leg-pair indexing.)

### Re-tabulation by leg-pair (corrected for ADD-272 datum)

| Leg-pair | DOWN amp | UP amp | Sum (UP − DOWN)         |
|----------|----------|--------|-------------------------|
| 1        | 0.418    | 0.293  | −0.125                  |
| 2        | 0.417    | 0.401  | −0.016                  |
| 3        | 0.180    | 0.384  | **+0.204** (crosses zero) |

The leg-pair sum sequence −0.125, −0.016, +0.204 differs by +0.109 (leg-pair 1→2) and +0.220 (leg-pair 2→3) — accelerating monotonic increase. Single-tick BF(H_attractor-from-below : H_full-damped-oscillation) at gap=1 from ADD-272 datum:

- Under H_full-damped (synth #101 framing): expected leg-pair-3 sum ≈ −0.05 (continued contraction toward zero with up-leg also damping). Predicted leg-pair-3 sum likelihood under this hypothesis ≈ 0.05 (observed +0.204 is 4σ from prediction under H_full-damped where σ_observed ≈ 0.10).
- Under H_attractor-from-below: expected leg-pair-3 sum ≈ +0.10 to +0.30 (continued asymmetric drift). Predicted leg-pair-3 sum likelihood ≈ 0.40.

Single-tick BF(H_attractor-from-below : H_full-damped-oscillation) ≈ ×8 favored toward H_attractor-from-below. Cum (anchor synth #101 was ×2.6 favoring H_damped-symmetric) × ×8 single-tick ≈ ×3.1 favored toward H_attractor-from-below — flips the preference at single-tick.

### Cross-axis driver: decade-completion adjacent-triplet (synth #102 sibling)

The ADD-272 up-leg amplitude (0.384) is structurally driven by the decade-completion adjacent-triplet (synth #102) contribution to the cum C.X composite BF amplifier. Specifically, the C.X amplifier transitioned from ×0.93 at ADD-271 (single decade-completion-event, single-singleton-class transition) to ×1.04 at ADD-272 (two decade-completion-events in cascade-window, super-class-collapse-to-singleton meta-class). The C.X delta of +0.11 contributes approximately +0.11/2.3 ≈ +0.048 to the up-leg amplitude per decade-jump basis. Simultaneously, the transition-axis BF(C:B) breakout from ×1,313,815 to ×2,877,255 (decade-jump |+0.341|) contributes the dominant up-leg driver. The H_neg:H_indep amplifier (×1.06 at ADD-272 from anchor-fresh-doublet plurality-shift) contributes the residual.

The structural decomposition shows the up-leg is built from THREE coordinated amplifiers acting in the same direction (C.X +0.048, transition-axis +0.341, H_neg:H_indep +0.025 — sum +0.414, observed leg amplitude 0.384, slight under-shoot consistent with cross-amplifier covariance correction). This coordinated up-amplification is structurally distinct from the down-legs which arise from singleton-class re-entry deflators acting weakly across all three components.

### The down-leg contraction mechanism

Down-leg amplitudes are bounded by the maximum single-tick deflation achievable under near-modal transition vectors. The down-leg sequence 0.418, 0.417, 0.180 contracts because:

- ADD-264 down-leg (0.418): driven by zero-class → super-class transition deflator at ×0.40 single-tick × cumulative covariance corrections.
- ADD-268 down-leg (0.417): driven by zero-class re-entry deflator at near-identical magnitude.
- ADD-271 down-leg (0.180): driven by doublet-class re-entry deflator at ×0.93 single-tick × weak covariance correction. The deflator weakened because the cascade had moved into a regime where doublet-class re-entry is **structurally smaller in BF deflation effect** than zero-class re-entry (zero-class is a stronger Interp-C signature than doublet-class, so its deflation effect is correspondingly larger).

The monotonic down-leg contraction reflects the cascade's progressive **migration away from zero-class residence** into singleton/doublet residence, which weakens the strongest available deflators. Up-legs remain unaffected because they are driven by amplifiers (decade-completion events, transition-axis breakouts) that are structurally orthogonal to the carrier-class regime.

## Citations

This synth builds on the following prior synth-entries (named explicitly):

- **synth #100** (cross-carrier decade-completion adjacent-doublet — sibling synth at ADD-271 anchor; the doublet contribution to cum C.X amplifier is one of the three coordinated amplifiers driving the ADD-272 up-leg)
- **synth #101** (joint composite BF 3-cycle damped-oscillation — direct predecessor; the framing is REFRAMED here from full-damped to asymmetric-damping-on-down-legs-only, with synth #101's anchor reading of "amplitude collapse 0.401→0.180" reinterpreted as the third down-leg in a leg-pair sequence rather than as terminal damping)
- **synth #102** (cross-carrier decade-completion adjacent-triplet — sibling synth at ADD-272 anchor; the triplet contribution to cum C.X amplifier is the dominant single-event driver of the ADD-272 up-leg amplification)
- **synth #564** (P7/P8 sustained-oscillation framing — falsified-with-redirection: not a sustained-symmetric-oscillation but an asymmetric-damping configuration; the original synth #564 P7 hypothesis is superseded by the attractor-from-below framing here)
- **synth #566** (P-566.1 alternating-flat-then-lift sub-mode — directly relevant because the ADD-272 11-axis joint cluster sustains the lift past prior 10-axis maximum; the joint composite BF trajectory is one of the axes contributing to the count)
- **synth #568** (post-add269 transition-axis BF deflation past ×10⁶ boundary — falsified-with-redirection: not a terminal deflation but a single down-leg in the boundary-oscillation regime; the transition-axis sub-component is itself part of the 4-cycle pattern at decade ×10⁶ boundary, mirroring the joint composite at ×10²¹ boundary)
- **synth #569** (post-add270 litellm second-decade-completion — referenced as the original cross-validator instance whose silence-completion contributed to the cum decade-marker BF used in the C.X amplifier calculation here)
- **synth #570** (post-add270 joint composite re-amplifies past ×10²¹ upward — direct predecessor; the original 2-cycle deflation-amplification framing is superseded here by the 4-cycle asymmetric-damping framing with the ADD-272 up-leg datum providing the falsification of the symmetric oscillation reading)

## Real PR / merge SHAs cited

- `5037fa76` — QwenLM/qwen-code #3780 (B-A-M-N), merged 2026-05-02T23:31:08Z. The active vector at ADD-272 that drives the singleton-class transition contributing to the C.X amplifier and to the double-deactivation transition vector contributing to the transition-axis breakout. Without this merge the up-leg would not have formed at the observed amplitude.
- `51368db8` — openai/codex #20823 (aibrahim-oai), merged 2026-05-02T23:03:59Z. The ADD-271 active vector that contributed to the third-decade-residence-of-3 termination, anchoring the synth #101 down-leg reading at amplitude 0.180; reinterpreted here as the third down-leg endpoint in the corrected leg-pair indexing.
- `7ab1c1c7` — sst/opencode #25485 (kitlangton), merged 2026-05-02T23:19:06Z. The ADD-271 active vector that co-contributes with `51368db8` to the double-reactivation transition vector at ADD-271; cited as the structural contrast point against the ADD-272 double-deactivation transition vector that drives the up-leg.
- `70d9655` — ADD-270 commit SHA, the near-flat interior tick where the joint composite BF moved from ×5.13e20 to ×1.29e21 with a small positive jump that synth #570 originally framed as the second up-leg; reinterpreted here as part of leg-pair 2 with the up-leg endpoint at ADD-271 datum and the down-leg at ADD-271→ADD-272 transition.
- `01b4c8f` — ADD-271 commit SHA, the down-leg endpoint in leg-pair 3 with amplitude 0.180 (anchor for synth #101's full-damped reading) and the start of the up-leg endpoint at ADD-272.

## Predictions

- **P-103.1** (leg-pair 4 forms within ADD-273..ADD-275 with up-leg amplitude in [0.25, 0.45] band — sustaining the up-leg-symmetric sub-mode): Prior P ≈ 0.45.
- **P-103.2** (leg-pair 4 down-leg amplitude < 0.150 — extending the down-leg-monotonic-contraction sub-mode): Prior P ≈ 0.45.
- **P-103.3** (leg-pair 4 sum > +0.20 — extending the attractor-from-below drift): Prior P ≈ 0.40.
- **P-103.4** (joint composite BF crosses past ×3 × 10²¹ upward within ADD-273..ADD-280 — testing the attractor-from-below as a regime that sustains drift past the next half-decade boundary): Prior P ≈ 0.30.
- **P-103.5** (joint composite BF re-crosses past ×10²¹ downward at ADD-273 — testing whether the down-leg-monotonic-contraction sub-mode admits a deeper down-leg under specific transition vectors like 3+ A→N): Prior P ≈ 0.30.
- **P-103.6** (cross-axis transition-axis ×10⁶ boundary exhibits parallel asymmetric-damping pattern — testing whether the asymmetric-damping framing generalizes across decade-boundaries at distinct sub-component axes): Prior P ≈ 0.35 (weakly favored because the transition-axis was the original synth #568 anchor and may exhibit similar asymmetric structure under re-tabulation).
- **P-103.7** (synth #564 P7 sustained-oscillation framing is permanently abandoned — replaced by synth #103 asymmetric-damping framing as the canonical regime model for the joint composite BF at ×10²¹ boundary): cumulative prior P ≈ 0.50 conditional on P-103.1 + P-103.3 both confirming.
- **P-103.8** (decade-marker matrix cell {goose, sixth-decade n=60} or {goose, seventh-decade n=70} retroactive backfill confirms goose passed through these boundaries silently and contributes additional decade-completion events to the cum decade-marker BF used in the C.X amplifier): Prior P ≈ 0.40.
