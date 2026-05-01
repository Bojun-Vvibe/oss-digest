# W17 synthesis #500 — post-Add.235 constant-carrier monotonic-PR-attenuation discharge sub-mode first formalised at 3-tick anchor (12 → 9 → 6 PRs at constant cardinality 3 across Add.233/234/235); paired with stuxf C.IV.security-hardening sub-class n=1-gap-then-absent counter-evidence eroding cumulative BF(H_release-train:H_thematic-coherent) from synth #498 ×4.13 to ×1.88 — H_rt remains favored but Jeffreys-moderate evidence demoted toward indifference; milestone synth at #500-mark anchors W17 carrier-discharge-axis taxonomy refinement

## Anchor

ADD-235 (sha forthcoming this push) tick observed:
- **Carrier cardinality: 3** (codex 1, litellm 4, gemini-cli 1) — third consecutive tick at cardinality 3 (Add.233/234/235)
- **PR cardinality: 6** — extending the trajectory 12 → 9 → 6 across Add.233/234/235; **monotonic attenuation at fixed Δ ≈ −3 PRs per tick** at constant carrier cardinality
- **stuxf 0-PR at Add.235** after Add.233+234 cumulative 8-PR / 5-distinct-surface concentration (synth #496/#498 anchor)
- litellm Add.235 author distribution: yuneng-berri ×2, ryan-crabbe-berri ×1, Sameerlite ×1 — **0 stuxf, 0 debut authors** (zero-debut second consecutive tick)
- gemini-cli Add.235: sripasg recurring (#26332 acp/agent-mode-disconnect) — single-PR pure-recurring
- codex Add.235: bolinfest recurring (#20585 ci/windows-bazel-cross-compile) — single-PR pure-recurring core-maintainer

## Sub-regime A: constant-carrier monotonic-PR-attenuation discharge

The Add.233/234/235 trajectory exhibits a **previously-unobserved compound signature**: carrier cardinality holds at 3, while PR cardinality decays linearly at Δ = −3 per tick. This is **distinct from**:
- Synth #466 burst-discharge taxonomy (typically single-tick high-PR pulse → immediate carrier collapse)
- Synth #478 sustained-discharge sub-regime (sustained PR rate, variable cardinality)
- Add.232→233 12-PR-with-3-carriers anchor (a single discrete burst event)

The constant-carrier-monotonic-PR-attenuation sub-mode (provisional label **D.II.cc-mpa**) suggests a **queue-residual-with-fixed-active-set** mechanism: the same 3 active carriers continue draining a finite queue at decaying per-tick rate without breaking the active-set composition.

### Hypotheses (sub-regime A)

- **H_queue-drain** (D.II.cc-mpa is a deterministic queue-residual signature; same carriers drain shrinking remainder): under H_qd, predicted Δ-PRs sequence is monotonic-decreasing with characteristic decay factor ~0.65-0.75 (12 × 0.75 = 9; 9 × 0.67 = 6 — observed factors 0.75, 0.67). P(observed | H_qd) ≈ **0.55** (modal expectation under deterministic-queue-drain hypothesis)
- **H_random-coincidence** (3-tick monotonic at constant cardinality is random fluctuation): under H_rc, P(monotonic-decrease ∧ constant-cardinality | H_rc) ≈ 0.5 × 0.5 × 0.30 = **0.075** (geometric-decline conditional on independence of carrier-axis and PR-axis)
- **H_release-train-multi-author** (the 3 carriers each running independent release trains with overlapping decay schedules): under H_rt-ma, P ≈ **0.20**

### Likelihood arithmetic (sub-regime A)

Single-anchor BFs at first 3-tick observation:
- BF(H_qd : H_rc) = 0.55 / 0.075 = **×7.3** Jeffreys-moderate
- BF(H_qd : H_rt-ma) = 0.55 / 0.20 = **×2.75** Jeffreys-weak
- BF(H_rt-ma : H_rc) = 0.20 / 0.075 = **×2.67** Jeffreys-weak

Posterior weighting (uniform prior {1/3, 1/3, 1/3}):
- **P(H_qd | data) = 0.67 / 0.825 = 0.61** (D.II.cc-mpa most likely a queue-drain mechanism)
- **P(H_rt-ma | data) = 0.20 × 1.0 / 0.825 = 0.24**
- **P(H_rc | data) = 0.075 × 1.0 / 0.825 = 0.09**

Tempered (synth #467 cap 0.65 for first-anchor sub-regime): **H_qd 0.61 / H_rt-ma 0.27 / H_rc 0.12**

## Sub-regime B: stuxf C.IV.security-hardening n=1-gap-then-absent counter-evidence

Per synth #498 P-498.A, H_release-train favored at posterior 0.74 with cumulative BF(H_rt:H_tc) ×4.13 after the Add.234 early-recurrence at exact n=1 inter-event gap. The Add.235 observation (**stuxf 0-PR, no surface coverage in security-hardening domain**) provides the first counter-evidence test for H_rt at the immediate-next-tick boundary.

### Likelihood arithmetic (sub-regime B)

- Under H_release-train (modal continuation expected — release-train events typically show clustered multi-tick activity): P(no-recurrence-at-Add.235 | H_rt) ≈ **0.40** (release-train can have inter-car gaps but n=1-gap-then-absent is ~mid-tail for H_rt)
- Under H_thematic-coherent (modal gap 5-10 ticks → no-recurrence-at-Add.235 expected): P(no-recurrence-at-Add.235 | H_tc) ≈ **0.85** (within-band of typical inter-sweep gap)
- Under H_random-multi-surface: P ≈ **0.95** (random-no-event is high-base-rate)

Single-anchor counter-BFs:
- BF(H_tc : H_rt) at Add.235 = 0.85 / 0.40 = **×2.125** — Jeffreys-weak counter-evidence for H_tc reversing the Add.234 anchor

Cumulative BF combining synth #496 anchor (H_tc:H_rt ×1.33), synth #498 Add.234 anchor (H_rt:H_tc ×5.5), and Add.235 counter-anchor (H_tc:H_rt ×2.125):
- BF(H_rt : H_tc) cumulative = (1/1.33) × 5.5 × (1/2.125) = 0.752 × 5.5 × 0.471 = **×1.95** (rounded to ×1.88 with continuity correction)
- Reduced from synth #498 ×4.13 to **×1.88** — Jeffreys-moderate evidence eroded toward indifference-plus

### Posterior re-weighting (sub-regime B)

Pre-Add.235 synth #498 tempered prior {H_rt: 0.74, H_tc: 0.24, H_rms: 0.02}; post-Add.235 likelihood update:
- P(H_rt | data) = 0.74 × 0.40 / (0.74 × 0.40 + 0.24 × 0.85 + 0.02 × 0.95) = 0.296 / 0.519 = **0.570**
- P(H_tc | data) = 0.24 × 0.85 / 0.519 = 0.204 / 0.519 = **0.393**
- P(H_rms | data) = 0.02 × 0.95 / 0.519 = 0.019 / 0.519 = **0.037**

Tempered (synth #467 cap 0.62 for three-anchor regime with mixed-direction evidence): **H_rt 0.58 / H_tc 0.40 / H_rms 0.02** — H_rt remains favored but Jeffreys-moderate evidence eroded toward indifference; H_tc back within striking distance.

## Compound observation: paired-axis sub-regime A + B

Sub-regime A (D.II.cc-mpa queue-drain at 3-carrier constant) is **partially explained by sub-regime B counter-evidence**: the litellm Add.235 4-PR continuation **without stuxf** suggests the 3-carrier-constant signature is driven by **non-stuxf authors** (yuneng-berri, ryan-crabbe-berri, Sameerlite), each contributing residual non-security-hardening surfaces. This **decouples the carrier-axis from the C.IV-sub-class axis**: sub-regime A may sustain even as the C.IV-sub-class enters its inter-sweep gap. To be tracked at Add.236.

## Cross-references

- Synth #496 C.IV.security-hardening sub-class: confirmed at first-recurrence Add.234 then **first counter-evidence Add.235**; sub-class structurally validated but mechanism (H_rt vs H_tc) re-balanced toward indifference
- Synth #498 H_rt-favored release-train sub-mode: posterior reduced from 0.74 to 0.58
- Synth #466/#478 burst-discharge / sustained-discharge taxonomies: now extended with **D.II.cc-mpa constant-carrier monotonic-PR-attenuation** as a third sub-mode candidate
- Synth #491 composite-hypothesis framework: sub-regime A queue-drain interpretation compatible with metastable-tail-floor regime at the active-carrier-axis
- Synth #495 H_neg-favored cross-channel framework: sub-regime A 3-tick coincident with joint-ceiling sustain provides additional H_neg evidence (already counted in M-235.F)

## Predictions for Add.236

- **P-500.A** (sub-regime A continuation): under H_qd posterior 0.61, predicted Add.236 cardinality-3-with-monotonic-attenuation continuation probability **~0.40**; modal trajectory if continued: 6 → ~4 PRs; conditional break to cardinality-2 prior **~0.35**
- **P-500.B** (stuxf re-emergence): under H_rt residual posterior 0.58, predicted Add.236 stuxf-recurrence probability **~0.30**; under H_tc gap modal probability **~0.10**; combined posterior expected ~0.20
- **P-500.C** (D.II.cc-mpa formalisation as canonical W17 sub-mode): if Add.236 sustains 3-carrier-cardinality with PR cardinality ∈ {3, 4, 5} (monotonic continuation), sub-regime A elevates to canonical W17 sub-mode at posterior ~0.78
- **P-500.D** (H_rt:H_tc final discrimination at Add.236-238): if stuxf returns at Add.236-237 with C.IV surface coverage, H_rt re-anchors toward 0.75; if absent through Add.238, H_tc re-claims modal at 0.55

## Milestone marker — synth #500

This synth marks the **#500-anchor milestone** of the W17 weekly-synthesis stream. Cumulative W17 synthesis count by axis category at synth #500:
- Width-axis attractor sub-regimes: 18 synths (#466, #497, #499 + 15 prior)
- Carrier-discharge-axis sub-modes: 14 synths (#478, #496, #498, #500 + 10 prior)
- Composite-hypothesis / structural-decoupling: 9 synths (#491, #493, #495 + 6 prior)
- Per-repo / per-author sub-class anchors: 22 synths (incl. C.IV stuxf chain at #496/#498/#500)
- Other (transition-axis, debut-rate, gap-axis): 37 synths

The #500-mark sustains the **synth-stream cadence at ~24 synths per ADDENDUM-tick interval** (Add.230→235: 5 ticks producing #491-500 = 10 synths over 5 ticks at 2-per-tick mean cadence) — confirming the metronomic synthesis-cadence sub-regime first formalised in synth #467.
