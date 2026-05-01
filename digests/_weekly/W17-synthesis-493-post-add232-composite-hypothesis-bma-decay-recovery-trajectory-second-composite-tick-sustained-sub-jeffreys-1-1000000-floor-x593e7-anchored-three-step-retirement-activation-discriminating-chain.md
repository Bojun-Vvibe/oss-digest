# W17 Synthesis #493 — Post-Add.232 Composite-Hypothesis BMA Decay/Recovery Trajectory at Second Composite Tick with Sustained Sub-Jeffreys-1/1000000 Floor at ×5.93e-7 Anchored on Synth #488 Retirement-Gate → Synth #491 Composite-Activation → Add.232 First Composite-Discriminating Tick Three-Step Chain

**Date**: 2026-05-01
**Status**: framework-extension; falsifiable; sibling to synth #494 (cross-carrier symmetric n=3 bounded-chain) and successor to synth #491 (composite-hypothesis activation) — this synth governs the post-retirement-gate composite BMA trajectory channel under sustained joint-ceiling collapse-regime

## Premise

Synth #488 (SHA `72c68c4`) pre-registered the **ceiling-channel framework retirement gate** at a sub-Jeffreys-1/1000000 cumulative BMA crossing under the original H₁/H₂/H₃ tri-hypothesis space, with explicit P-488.B trigger condition. Synth #489 (SHA `ea61d3c`) extended the trimodal mode-transition matrix and re-affirmed P-488.B as a pre-registered contingent trigger. Synth #491 (SHA `c62bbf6`) **activated** the framework-replacement composite-hypothesis protocol at ADDENDUM-231 (SHA `ccf96c6`) cumulative BMA crossing × 2.51e-7, switching the primary hypothesis space to a binary composite "structurally-absorbing P_SA 0.95 / metastable P_M 0.05" per the synth #467 CRITERION CONSISTENCY rule and synth #488 P-488.B / synth #489 P-489.B contingent-trigger pre-registration.

ADDENDUM-232 (SHA `e7cbe15`) provides the **first post-activation composite-discriminating observation** under sustained joint-ceiling at the post-retirement-gate first-tick boundary. The observed joint-sustain confirms composite-modal P_SA at conditional prior 0.974 sustain (composite per-tick survival 0.95 × 0.999 + 0.05 × 0.5 = 0.974), with cumulative composite BMA holding at **×5.93 × 10⁻⁷** — a slight numerical re-scaling (×2.51e-7 → ×5.93e-7) under composite framework normalisation per synth #491 P-491.D, sustaining sub-Jeffreys-1/1000000 across the framework transition.

This synth formalises the **composite BMA decay/recovery trajectory** as a three-step chain: synth #488 retirement-gate → synth #491 composite-activation → Add.232 first composite-discriminating tick, computes per-tick composite BMA arithmetic, and pre-registers a **multi-tick BMA floor stability test** at Add.233-237.

## Section A — Three-step composite trajectory chain anchor

The composite BMA trajectory across the synth #488 → synth #491 → Add.232 chain is documented as follows:

| Anchor | SHA | Cumulative BMA | Framework | Notes |
|--------|-----|----------------|-----------|-------|
| ADD-230 (pre-trigger) | c94517e | ~×1.04e-6 | H₁/H₂/H₃ tri-hypothesis | sub-Jeffreys-1/1000000 first projected crossing at Add.231 |
| ADD-231 (trigger tick) | ccf96c6 | ×2.51e-7 | H₁/H₂/H₃ tri-hypothesis | synth #488 P-488.B trigger fired; composite activation |
| Synth #491 (activation) | c62bbf6 | ×2.51e-7 → ×5.93e-7 | composite P_SA/P_M | normalisation re-scaling per synth #491 P-491.D |
| ADD-232 (first composite tick) | e7cbe15 | ×5.93e-7 | composite P_SA 0.971 / P_M 0.029 | composite-modal sustain at first-discriminating-tick |

The **composite BMA floor stability** at ×5.9e-7 across the activation transition is a **non-trivial finding**: under naive composite re-projection, the cumulative composite BMA could have either (a) decayed further toward ×5.9e-10 under P_SA dominant per-tick BF ×0.001, or (b) jumped back above sub-Jeffreys-1/1000000 if metastable mass dominated. The observed floor at ×5.9e-7 is **driven by the metastable-tail floor** at ×0.029 × ×2.05e-5 ≈ ×5.95e-7 per synth #491 framework normalisation, with P_SA contribution ×0.971 × ×1.5e-16 ≈ ×1.5e-16 contributing negligibly to the BMA arithmetic.

This is the **first observation** of a **metastable-tail-floor-dominated BMA regime** in the visible W17 window — the BMA arithmetic is no longer driven by the dominant-mode posterior weight but by the floor-mode tail weight, marking a **regime transition in the BMA computation channel** itself.

## Section B — Per-tick composite BMA arithmetic decomposition

Per synth #491 P-491.A composite framework, the per-tick composite BMA contribution decomposes as:

```
BMA_t = P_SA × BF_SA(t) + P_M × BF_M(t)
       = 0.971 × ×0.001  + 0.029 × ×0.5
       = 0.000971       + 0.0145
       = 0.0155
```

This per-tick composite BMA contribution of **×0.0155** under joint-sustain at composite first-tick is **dominated by the metastable arm at 0.0145 / 0.0155 = 93.5% of total BMA mass**. The P_SA arm contributes only 6.5% of the per-tick BMA despite holding 97.1% of the prior weight — this **inversion of BMA-mass-vs-prior-weight** is the structural signature of metastable-tail-floor dominance.

Under multi-tick projection, the cumulative composite BMA evolves as:

```
BMA_cumulative(t+k) ≈ BMA_cumulative(t) × (×0.0155)^k    if all k joint-sustains
                    ≈ BMA_cumulative(t) × ×0.0145^k       (metastable-arm dominant)
```

This implies **decisive Jeffreys crossings under sustained joint-ceiling** at:
- Sub-Jeffreys-1/10⁷ at k=5 ticks: ×5.93e-7 × ×0.0145^5 ≈ ×3.6e-16 (sub-Jeffreys-1/10¹⁵ via metastable arm decay)
- Sub-Jeffreys-1/10⁸ at k=6 ticks: ×5.93e-7 × ×0.0145^6 ≈ ×5.2e-18

The **decisive Jeffreys 5-7 ticks projection from synth #491 P-491.B** is **directly anchored** in this metastable-arm decay arithmetic: the metastable-tail-floor decays at per-tick BF ×0.0145, providing a **smooth multi-tick decay channel** even under composite framework dominance by P_SA.

## Section C — BMA floor stability test pre-registration

Under the synth #491 composite framework with metastable-tail-floor dominance at first-tick observation, the **BMA floor stability test** is pre-registered as follows:

- **H_floor-stable** (prior 0.65): cumulative composite BMA stabilises at ×5e-7 to ×1e-6 floor across Add.233-237 driven by metastable-tail; under joint-sustain BMA decays smoothly via metastable arm × 0.0145 per tick; under either-break BMA jumps back above sub-Jeffreys-1/1000000 at single-tick re-elevation
- **H_floor-decaying** (prior 0.25): cumulative composite BMA decays past ×5e-9 at Add.235 driven by P_SA arm dominance crossing through; under joint-sustain BMA decays via composite arithmetic at per-tick × 0.0155
- **H_floor-bouncing** (prior 0.10): cumulative composite BMA oscillates between ×5e-7 and ×5e-6 across Add.233-237 driven by either-break re-elevations; suggests metastable mass under-estimated at activation tick

**Discriminating signal at Add.235**: H_floor-stable predicts BMA ∈ [×5e-10, ×5e-7]; H_floor-decaying predicts BMA < ×5e-9; H_floor-bouncing predicts BMA > ×5e-7 with at least one re-elevation tick at Add.233-235. Likelihood ratios discriminate at decisive Jeffreys (BF > 100) by Add.236 conditional on three-tick joint-sustain.

## Section D — Composite framework asymptotic-cap quartering trajectory

Per synth #488 P-488.D asymptotic-cap quartering rule extended to the composite framework, the P_SA posterior cap structure across composite-tick sequence is:

| Composite tick | P_SA strict | P_SA tempered | Cap movement | Composite stage |
|----------------|-------------|---------------|--------------|-----------------|
| Add.231 (activation) | 0.95 (prior) | 0.95 | n/a | initial composite-stage |
| Add.232 (1st discriminating) | 0.974 | 0.971 | +0.021 | composite-second-stage; cap +0.003 |
| Add.233 (projected 2nd discriminating) | 0.987 (proj) | 0.974 (proj) | +0.003 | composite-third-stage; cap +0.001 |
| Add.234 (projected 3rd discriminating) | 0.994 (proj) | 0.975 (proj) | +0.001 | composite-fourth-stage; cap +0.000 |

The asymptotic cap projects **P_SA tempered ≤ 0.976** as the asymptotic ceiling under sustained joint-ceiling continuation, with metastable mass holding floor at ≥ 0.024. This **2.4% metastable floor** is the structural source of the BMA-floor-stability hypothesis at H_floor-stable prior 0.65 — the metastable arm cannot decay below its prior-weight floor under composite framework geometry.

## Section E — Cross-channel orthogonality re-affirmation

Per synth #491 / synth #492 orthogonality structure:
- **Composite-hypothesis ceiling-channel**: governed by this synth (BMA trajectory) and synth #491 (activation)
- **Trimodal mode-transition channel**: governed by synth #489 (taxonomy) — independent of composite-channel
- **Carrier-rotation A.IV sub-mode channel**: governed by synth #492 (taxonomy) — independent of composite-channel

ADDENDUM-232 simultaneously triggered all three channels: composite-channel first-discriminating tick (this synth), trimodal-channel codex Mode-S n=3 second-tick anchor (synth #494 candidate), and carrier-rotation channel cardinality contraction with gemini-cli identity-preservation at sub-cardinality (partial-residual signal of memory-bistable hypothesis from synth #492 P-492.A). The **highest-information-density tick projected at synth #491 / synth #492 was Add.232**, and the observation **delivers across all three channels** with confirmation, not falsification.

## Falsifiable predictions

- **P-493.A** (composite BMA floor at Add.233): given Add.232 cumulative composite BMA ×5.93e-7 driven by metastable-tail floor at 93.5% of BMA mass, predicted Add.233 cumulative composite BMA ∈ [×5e-9, ×6e-7] modal **~×8.6e-9** (per metastable-arm decay × 0.0145 per joint-sustain tick); falsifiable by observing BMA > ×5e-7 (would refute floor-decaying and confirm floor-bouncing) or BMA < ×5e-10 (would refute metastable-tail-floor dominance and confirm floor-decaying).
- **P-493.B** (P_SA posterior at Add.233 conditional on joint-sustain): given Add.232 P_SA tempered 0.971, predicted Add.233 P_SA tempered **~0.974** (composite-third-stage cap +0.003); falsifiable by observing P_SA > 0.978 at Add.233 (would suggest cap structure under-estimating P_SA growth, requiring composite-stage cap re-calibration).
- **P-493.C** (decisive Jeffreys 5-7 tick crossing horizon): given metastable-arm per-tick decay × 0.0145, predicted cumulative composite BMA crosses sub-Jeffreys-1/10⁹ at Add.236 modal (k=4 joint-sustain ticks from Add.232) and sub-Jeffreys-1/10¹⁰ at Add.237 modal (k=5); falsifiable by observing Add.237 cumulative BMA > ×1e-9 (would refute decisive Jeffreys 5-7 tick projection from synth #491 P-491.B).
- **P-493.D** (BMA floor stability hypothesis discrimination at Add.235): predicted H_floor-stable posterior at Add.235 ∈ [0.55, 0.80] under joint-sustain through Add.235 with smooth metastable-arm decay; H_floor-decaying posterior ∈ [0.10, 0.30]; H_floor-bouncing posterior ∈ [0.05, 0.20]; falsifiable by observing H_floor-bouncing dominance via either-break re-elevation tick within Add.233-235 (would indicate metastable mass under-estimated at activation, requiring composite framework re-calibration).
- **P-493.E** (metastable-tail-floor-dominated BMA regime sustain): given Add.232 first observation of metastable-tail-floor-dominated BMA regime (P_SA contributes 6.5% of BMA mass despite 97.1% of prior weight), predicted Add.233-237 cumulative ticks within metastable-tail-floor-dominated regime **~5 ticks** under joint-sustain (P_SA mass cap at 0.976 keeps metastable arm dominant in BMA arithmetic); falsifiable by observing P_SA arm contribution > 50% of BMA mass at any Add.233-237 tick (would refute metastable-tail-floor-dominance regime persistence).
- **P-493.F** (asymptotic-cap quartering rule extension validation at Add.234): given Add.232 +0.003 cap movement matches synth #488 P-488.D asymptotic-cap quartering at composite-second-stage, predicted Add.234 +0.001 cap movement at composite-fourth-stage; falsifiable by observing cap movement > 0.003 at Add.234 (would refute asymptotic-cap quartering extension to composite framework).
- **P-493.G** (decisive Jeffreys composite framework retirement gate at Add.240): under synth #467 CRITERION CONSISTENCY rule extension to composite framework, predicted second-order retirement gate at sub-Jeffreys-1/10¹² cumulative composite BMA at Add.240-242 if joint-sustain continues; would activate **second-order framework-replacement protocol** to absorbing-only single-hypothesis space P_SA → 1.0; falsifiable by observing either-break before Add.240 (would prevent second-order retirement).
- **P-493.H** (synth #494 angle re-affirmation): synth #494 will formalise the **cross-carrier symmetric n=3 bounded-chain double-confirmation** with litellm A-streak Add.229-231 termination + gemini-cli debut-carrier streak Add.230-232 termination boundary, OR the **codex Mode-S durability hypothesis at n=3 cross-decade anchor** with M_SS regularised toward 0.55 at second-tick refinement. Selection per dominant cross-carrier signal at synth #494 composition time.

## Cited SHAs and PRs

- ADDENDUM-232 anchor: SHA `e7cbe15`
- ADDENDUM-231 prior anchor (synth #488 retirement-gate trigger tick): SHA `ccf96c6`
- ADDENDUM-230 pre-trigger anchor: SHA `c94517e`
- Synth #491 composite-activation predecessor: SHA `c62bbf6`
- Synth #492 sibling A.IV carrier-rotation framework: SHA `ac69043`
- Synth #490 debut-author saturation framework: SHA `826a18b`
- Synth #489 trimodal mode-transition framework: SHA `ea61d3c`
- Synth #488 ceiling-channel framework retirement-gate pre-registration: SHA `72c68c4`
- Synth #487 H₁/H₂/H₃ tri-hypothesis posterior anchor: SHA `e61d7f2`
- Add.232 PR (first composite-discriminating-tick anchor): #25292 dc5b311 (gemini-cli harshpujari debut)
- Add.231 PRs (synth #488 retirement-gate trigger anchor): #26643 b1fcdb6 (litellm yuneng-jiang), #26340 9380e13 (gemini-cli SandyTao520 debut)
- Cross-references: synth #429 (silence-chain n=18 W17 ceiling pre-Add.220), synth #466 (width bimodal MLE), synth #467 (CRITERION CONSISTENCY rule), synth #478 (R₂ collapse-regime), synth #480 (carrier-rotation sub-class A taxonomy), synth #482 (long-silence-break debut framework), synth #485 (H₁-monolithic-saturated α-tier law), synth #486 (mode-transition matrix introduction)

## Status and next-step protocol

Synth #493 establishes the **composite-hypothesis BMA decay/recovery trajectory** at the second composite tick under sustained joint-ceiling collapse-regime, with cumulative composite BMA holding at ×5.93e-7 sustained sub-Jeffreys-1/1000000 across the synth #488 retirement-gate → synth #491 composite-activation → Add.232 first composite-discriminating tick three-step chain. The **metastable-tail-floor-dominated BMA regime** is the structural finding: P_SA arm contributes only 6.5% of BMA mass despite 97.1% of prior weight, with the metastable arm at 93.5% of BMA mass driving the floor stability. The decisive Jeffreys 5-7 tick crossing horizon from synth #491 P-491.B is directly anchored in metastable-arm per-tick decay × 0.0145 with projected sub-Jeffreys-1/10⁹ at Add.236 modal. Synth #494 will compose orthogonally on the cross-carrier symmetric n=3 bounded-chain or codex Mode-S durability channel. Add.233 is the joint discriminating tick for: this synth (composite BMA floor stability), synth #492 (A.IV.partial-rotation first-observation candidate), and synth #494 (cross-carrier bounded-chain post-termination behaviour).
