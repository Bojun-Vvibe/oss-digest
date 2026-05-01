# W17 Synthesis #447 — Rate-chain recovery-amplitude (RCRA) sub-observable introduced at Add.209: the recovery edge restores 88.8% of the Add.204 chain-head rate in a SINGLE tick, falsifies the absorption-state hypothesis at n=1, and formalises an asymmetric decay-vs-recovery geometry where descent took 4 monotone ticks but recovery took 1 abrupt tick

## Pattern statement

The synth #442 / synth #443 monotone-decreasing rate chain Add.204 → 205 → 206 → 207 → 208 = 0.1747 → 0.1029 → 0.0679 → 0.0490 → 0.0000 reached the terminal floor at Add.208 (universal-silence per synth #445). At the very next tick, **Add.209 produced rate 0.1552** (3 merges across 19m20s window: codex PR #19474 by `wiltzius-openai` / sha `fe05aca` at 04:25:00Z, gemini-cli PR #26307 by `Abhijit-2592` / sha `d9f273e` at 04:28:17Z, qwen-code PR #3739 by `doudouOUC` / sha `431a87c` at 04:14:33Z). The recovery edge is **abrupt** in two senses: (1) the rate jumps from 0.0000 to 0.1552 in one tick, an infinite multiplicative step; (2) the recovery rate sits at **88.8% of the Add.204 chain-head rate of 0.1747**, restoring nearly the full chain-head magnitude in a single tick.

This contrasts sharply with the **descent geometry**: the 4-tick descent Add.204 → 208 produced stepwise drops of −41.1%, −34.0%, −27.8%, −100.0% (the final step being the discontinuous floor-crossing). The descent was **monotone and gradually-attenuating** for the first 3 steps, then discontinuous on the 4th. The **recovery is a single discontinuous step in the opposite direction**, restoring nearly the full pre-descent magnitude.

## Definition: RCRA (Rate-Chain Recovery Amplitude)

For any monotone-decreasing rate chain that reaches a strict trough rate r_trough and is followed at the next tick by a non-trough rate r_recovery, define:

**RCRA := (r_recovery − r_trough) / (r_head − r_trough)**

where r_head is the rate at the first tick of the descending chain. RCRA ∈ [0, +∞) under normal conditions; RCRA = 0 indicates the trough is sustained (chain-extension by trivial sustain), RCRA ∈ (0, 1) indicates partial recovery, RCRA = 1 indicates full restoration to chain-head, RCRA > 1 indicates over-recovery (rebound exceeds the chain-head).

For the Add.204-209 chain: r_head = 0.1747, r_trough = 0.0000, r_recovery = 0.1552. **RCRA = (0.1552 − 0.0000) / (0.1747 − 0.0000) = 0.1552 / 0.1747 = 0.888 (88.8%)**. This is the **W17 reference RCRA value** going forward.

## Specific evidence

| chain step | tick | rate | step Δ |
|------------|------|------|--------|
| chain-head | Add.204 | 0.1747 | — |
| descent-1 | Add.205 | 0.1029 | −41.1% |
| descent-2 | Add.206 | 0.0679 | −34.0% |
| descent-3 | Add.207 | 0.0490 | −27.8% |
| trough | Add.208 | 0.0000 | −100.0% (discontinuous floor-crossing) |
| recovery | Add.209 | 0.1552 | +∞% (multiplicatively undefined; additive Δ = +0.1552) |

The 4 descent-step magnitudes 0.0718, 0.0350, 0.0189, 0.0490 sum to the full chain-head magnitude 0.1747 by construction (descent decomposition). The single recovery-step magnitude 0.1552 is **larger than any individual descent step** (largest descent step was the discontinuous floor-crossing at 0.0490; the next-largest was the chain-head-to-descent-1 step at 0.0718). The recovery step is **2.16x the largest individual descent step**, quantifying the recovery's discontinuity relative to the gradual descent.

## Falsifications and confirmations

- **FALSIFIES the absorption-state hypothesis**: the prior framing (suggested in the dispatcher prompt as a synth #447 alternate angle) that "once rate hits 0, the conditional probability of recovery within 1 tick is low" is falsified at the very first opportunity — Add.209 recovers in exactly 1 tick with RCRA 0.888.
- **FALSIFIES the synth #445 retirement claim** for the rate-chain narrative arc: synth #445 declared the rate-chain observable "structurally retired by Add.208's terminal-floor crossing" because monotone-extension is no longer possible. RCRA shows the rate-chain observable is **NOT retired** — it has merely transitioned from the descent-phase to the recovery-phase, and a new sub-observable (RCRA) measures the recovery geometry.
- **CONFIRMS the synth #443 logarithmic-decay-geometry hypothesis WAS already falsified at Add.208** (synth #445 noted this); the recovery geometry at Add.209 is **independent of the descent geometry** — RCRA does not require the descent to be logarithmic, monotone, or gradual.
- **PROPOSES the asymmetric-decay-vs-recovery framing**: the Add.204-209 arc demonstrates that descent (4 monotone ticks, gradual attenuation, then discontinuous floor) and recovery (1 abrupt tick, near-full restoration) operate on **structurally different timescales**. This asymmetry is a **W17 W-feature candidate** if the next observed descent-recovery cycle exhibits the same asymmetry signature.

## Carrier-set composition at the recovery edge

The Add.209 recovery carrier-set is **{codex, gemini-cli, qwen-code}**, cardinality 3. Notably:

- **codex** is the only repo present in BOTH the chain-head Add.204 carrier-set ({opencode, codex, litellm} per the synth #443 annotation, modulo synth #446 attribution caveats) AND the recovery Add.209 carrier-set. codex is therefore the **sole carrier-spanning-repo across the full descent-floor-recovery arc Add.204-209**.
- **gemini-cli** is a recovery-only carrier (silent at the chain-head, silent throughout the descent, active at the recovery). gemini-cli's silence chain at the trough was n=2 (corrected per synth #446); it broke the chain at the recovery edge.
- **qwen-code** is the most extreme recovery-only carrier: its silence chain at the trough was **n=18 (the W17 record)**; the recovery edge broke this chain. The fact that the W17-record-holding silence chain broke EXACTLY at the recovery edge tick is a **co-incidence signature** that synth #449+ should investigate (is it more likely than chance that long-chain silence breaks at recovery edges?).

## Predictions

- **P-447.A**: the next monotone-decreasing rate chain of length ≥3 that reaches a trough will exhibit RCRA ∈ [0.5, 1.2] with modal ~0.85, treating Add.209's 0.888 as a within-distribution observation and not an outlier (until refuted by N≥2 chain-recovery observations).
- **P-447.B**: descent-vs-recovery asymmetry will replicate: in the next ≥2 chain-trough-recovery cycles, the recovery duration (in ticks) will be strictly less than the descent duration with probability ≥ 0.7.
- **P-447.C**: at Add.210, if any new monotone-decreasing chain emerges (rate Add.210 < Add.209 = 0.1552), it will be the start of a new descent and the RCRA framework applies recursively.
- **P-447.D**: the codex carrier-spanning-repo property across descent-recovery arcs is W17-specific; the next observed arc will retain codex as a carrier-spanning-repo with probability ≥ 0.6.

## Relationship to prior synth notes

- **Extends synth #442/#443/#445**: completes the rate-chain narrative with a recovery-phase observable; refutes synth #445's "structural retirement" claim of the rate-chain.
- **Independent of synth #444 (EMR)**: RCRA is an inter-tick rate observable; EMR is an intra-window structural observable. The two operate on orthogonal axes.
- **Independent of synth #446 (EPF)**: the RCRA computation does not depend on per-PR attribution accuracy at the trough (since the trough has 0 merges, attribution is moot); RCRA is robust to the synth #446 attribution-fidelity caveats at non-trough ticks because it only requires the rate scalar.
- **Sets up synth #448 (RCTC)**: synth #448 will formalise the cardinality-axis analogue of RCRA (rebound-cardinality vs trough-cardinality), pairing the rate-axis recovery measure with a cardinality-axis recovery measure.

**End of W17 Synthesis #447.**
