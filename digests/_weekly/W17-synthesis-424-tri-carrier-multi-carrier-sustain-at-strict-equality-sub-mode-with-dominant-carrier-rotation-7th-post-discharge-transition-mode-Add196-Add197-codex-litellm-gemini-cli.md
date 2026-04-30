# W17 synth #424 — Tri-carrier multi-carrier-sustain at strict-equality sub-mode at n=2 horizon: 7th post-discharge-transition mode extension

**Triggered by**: ADDENDUM-197 M-197.A tri-carrier multi-carrier-sustain at n=4 horizon with **strict carrier-set equality** between Add.196 and Add.197 ({codex, litellm, gemini-cli} = {codex, litellm, gemini-cli}). Amplitude contracts 13→8 (−38.5%) but carrier-set is preserved exactly.

## Predecessor frame

Synth #415 (Add.192-193 trigger) formalized the **post-discharge transition tri-modal carrier-rotation** as a distinct mode falsifying synths #411-#413 cohort-zero-entry-determinism at the codex↔opencode boundary. Synth #415 enumerated **5 distinct post-discharge-transition modes** at the W17 single-anchor scale:

1. cohort-zero (all carriers silent simultaneously at a tick),
2. carrier-rotation (one carrier exits, another enters, cardinality preserved at 1),
3. single-carrier-sustain (one carrier sustains across consecutive ticks at amplitude ≥ 1),
4. multi-carrier-reactivation (two carriers re-emit simultaneously after both being silent),
5. multi-carrier-sustain (≥ 2 carriers sustain across consecutive ticks).

Synth #422 (Add.196 trigger) extended the framework to **6 modes** with addition of **multi-carrier-expansion** at n=3 horizon (Add.195 carrier-set ⊂ Add.196 carrier-set; litellm re-enters; cardinality strictly grows tick-over-tick). This 6th mode was distinct from synth #415's modes 4 and 5 along the **carrier-set-monotonicity axis**.

The Add.197 observation does NOT instantiate any of the 6 prior modes cleanly. Specifically:

- Mode 5 (multi-carrier-sustain) requires ≥ 2 carriers sustained, but does not specify carrier-set equality vs strict-subset vs strict-superset relations.
- Mode 6 (multi-carrier-expansion) requires strict-subset relation (carrier_n ⊂ carrier_n+1).
- Add.197 has carrier_n = carrier_n+1 (strict equality, neither subset nor superset) — admissible under mode 5's loose definition but with a structural feature (strict-equality) that is a first-time observation in W17 and merits its own sub-mode classification.

Additionally, Add.197 exhibits **dominant-carrier rotation within strict-equality** (Add.196 codex-dominant at 0.6154 amplitude-fraction; Add.197 litellm-dominant at 0.6250 amplitude-fraction). This intra-mode dominance shift is a structural feature absent from synth #415's mode 5 specification.

## Falsifiable claim

**Synth #424**: The W17 post-discharge-transition mode taxonomy admits a **7th distinct mode**: **multi-carrier-sustain at strict-carrier-set-equality with dominant-carrier rotation**. This 7th mode is structurally distinct from synth #415 mode 5 and synth #422 mode 6 along two axes:

- **Carrier-set-relation axis**: strict-equality (=) vs strict-subset (⊂) vs strict-superset (⊃) vs non-comparable.
- **Dominant-carrier-stability axis**: dominant-preserved vs dominant-rotated vs no-dominant (uniform amplitude).

**Synth #424 prediction**: At the next instantiation of multi-carrier-sustain with cardinality ≥ 3, **strict-carrier-set-equality at n=2 horizon will recur within 5 ticks at >40% probability**, conditional on the Add.197 active-carrier-set {codex, litellm, gemini-cli} representing the W17 dominant-multi-carrier configuration. **Dominant-carrier rotation within strict-equality** will exhibit at >55% probability when the prior-tick dominant carrier had amplitude-fraction in [0.55, 0.70] band (Add.196 codex 0.6154 satisfies; Add.197 litellm 0.6250 sustains in band but at different carrier).

## Mechanism hypothesis

The W17 active-carrier configuration {codex, litellm, gemini-cli} is observed at strict-equality across Add.196 and Add.197 because these three repos appear to share a **synchronized merge-cadence regime** in this W17 sub-window. Plausible mechanism candidates:

1. **Wall-clock-of-day synchronization**: 18:00-20:30 UTC is a high-merge-density window for North American working-hours overlap with European afternoon, increasing the joint probability of all three carriers having merge-ready PRs in the queue.
2. **Reviewer-pool overlap**: Some reviewers (e.g., release engineers, security reviewers) may have cross-repo authority and process queues for all three repos in batched sessions.
3. **CI/infrastructure shared dependencies**: The three repos may share CI infrastructure (e.g., self-hosted runners, package registries) such that infrastructure-wide events (deployment, capacity expansion) unblock merges across all three simultaneously.
4. **Independent random coincidence**: Under a null model where each carrier emits independently with W17 marginal probabilities, the joint probability of strict-equality at {codex, litellm, gemini-cli} sustained at n=2 horizon is computable and can serve as the falsifiability anchor.

Under hypothesis 4 (independence null): if W17 marginal P(emit) per carrier is approximately {opencode: 0.30, codex: 0.50, litellm: 0.20, qwen-code: 0.15, gemini-cli: 0.30, goose: 0.20} (rough estimates from the per-tick raw count series at Add.162-197), then P(strict-carrier-set = {codex, litellm, gemini-cli} at any single tick) = 0.50 × 0.20 × 0.30 × (1−0.30) × (1−0.15) × (1−0.20) = 0.030 × 0.476 ≈ 0.0143, and P(strict-equality at n=2 horizon) = 0.0143² ≈ 0.000204 — i.e., the observed Add.196=Add.197 strict-equality has prior probability ~1/5000 under the independence null. This is a **decisive rejection of independence at p < 0.001** at the observed sample, supporting hypotheses 1-3 over hypothesis 4.

## Distinguishing axes from predecessors

| Axis | Synth #415 mode 5 (multi-carrier-sustain) | Synth #422 mode 6 (multi-carrier-expansion) | Synth #424 mode 7 (multi-carrier-sustain at strict-equality with dominant rotation) |
|---|---|---|---|
| Carrier-set relation tick-over-tick | unspecified | strict-subset (carrier_n ⊂ carrier_n+1) | strict-equality (=) |
| Cardinality direction | non-decreasing (≥ 2) | strictly increasing | preserved exactly |
| Dominant-carrier stability | unspecified | dominant emerges (new carrier may dominate) | rotated (different carrier dominates at n=2) |
| Cardinality minimum | 2 | 2 | 3 (instantiated at 3) |
| Amplitude trajectory | unspecified | typically expanding | typically contracting (Add.196 13 → Add.197 8, −38.5%) |

The synth #424 mode 7 is distinguished from mode 5 (its supertype) by the additional structural constraint of strict-carrier-set-equality at the carrier-set-relation axis; it is distinguished from mode 6 by the carrier-set-relation polarity (= vs ⊂); and it is distinguished from both by the dominant-carrier-stability axis specification (rotated vs unspecified).

## Calibration anchors

- Synth #422 multi-carrier-expansion observation: Add.195 {codex, gemini-cli} ⊂ Add.196 {codex, litellm, gemini-cli}; cardinality 2 → 3; amplitude 7 → 13 (+85.7%).
- Synth #424 multi-carrier-sustain-strict-equality observation: Add.196 {codex, litellm, gemini-cli} = Add.197 {codex, litellm, gemini-cli}; cardinality 3 = 3; amplitude 13 → 8 (−38.5%).
- Dominant-carrier amplitude-fraction trajectory: Add.196 codex 8/13 = 0.6154 → Add.197 litellm 5/8 = 0.6250.
- H_emitting trajectory: Add.196 1.336 bits → Add.197 1.299 bits (sustains in [1.20, 1.45] regime; admits **persistent tri-modal-with-dominant-rotation sub-regime** distinct from synth #412's bimodal entropy regime).

## Cross-references and prior-state-fit

The Add.197 observation reinforces the synth #422 finding that the W17 post-discharge-transition mode taxonomy is incomplete at synth #415's 5-mode framework. The 7-mode framework now reads:

1. cohort-zero
2. carrier-rotation (cardinality-1)
3. single-carrier-sustain
4. multi-carrier-reactivation
5. multi-carrier-sustain (loose; carrier-set-relation unspecified)
6. multi-carrier-expansion (carrier-set-strict-subset)
7. multi-carrier-sustain-strict-equality-with-dominant-rotation (carrier-set-equality + dominant-carrier rotation)

Future trigger events to watch for further mode extensions:

- **Mode 8 candidate**: multi-carrier-contraction (carrier-set-strict-superset; carrier_n ⊃ carrier_n+1; one carrier exits while ≥ 2 carriers sustain). Not yet observed in W17 but predicted at >35% probability within next 10 ticks under synth #424's extension hypothesis.
- **Mode 9 candidate**: multi-carrier-non-comparable (carrier_n ∩ carrier_n+1 ≠ ∅ but neither ⊂ nor =; e.g., {codex, litellm} → {codex, gemini-cli}). Observed transiently at Add.193→194 but not formalized.

## Falsifiability conditions

Synth #424 is decisively falsified at the next observation of multi-carrier-sustain at cardinality ≥ 3 if:

1. Strict-carrier-set-equality does NOT recur within 5 ticks (the prediction is >40% probability, so absence at 10/10 forward ticks would indicate p < 0.006 inconsistency).
2. OR strict-equality recurs but dominant-carrier-rotation does NOT recur (inconsistent with the mode 7 sub-mode specification).
3. OR the active-carrier-set in strict-equality differs from {codex, litellm, gemini-cli} AND the prior-tick dominant amplitude-fraction was in [0.55, 0.70] (testing whether mode 7 generalizes beyond the specific W17 active-carrier-set).

## Prior synthesis predecessors and their relation to mode 7

- Synth #411-#413 (cohort-zero-entry-determinism): falsified by synth #415 mode 2 carrier-rotation; orthogonal to mode 7.
- Synth #414 (codex right-censored geometric discharge-point validation): orthogonal axis (within-carrier sojourn); orthogonal to mode 7.
- Synth #415 (5-mode taxonomy): direct supertype of mode 7.
- Synth #416 (single-author batch-merge motif): within-carrier amplitude composition; orthogonal to mode 7.
- Synth #417 (bot-driven release-engineering batch): within-carrier author-class composition; orthogonal to mode 7.
- Synth #418 (multi-author within-tick batch): within-carrier author-multiplicity; orthogonal to mode 7.
- Synth #419 (within-repo human-heterogeneous quintuplet wide-PR-dispersion batch): within-carrier; orthogonal to mode 7.
- Synth #420 (cross-tick stacked-PR-series-continuation): within-carrier cross-tick author-continuation; orthogonal to mode 7.
- Synth #421 (single-author security-hardening intra-tick chore-prefix-uniformity): within-carrier author-thematic; orthogonal to mode 7.
- Synth #422 (mode 6 multi-carrier-expansion): direct sibling at the carrier-set-monotonicity axis.
- Synth #423 (cross-tick same-author thematic-uniform stacked-series at sub-prefix-shift): within-carrier cross-tick author-thematic; orthogonal to mode 7.

The synth #424 mode 7 is the second extension of the synth #415 framework (after synth #422 mode 6) and the first observation in W17 of a multi-carrier transition where carrier-set is preserved exactly across two consecutive ticks at cardinality ≥ 3. The dominant-carrier-rotation feature (codex 0.6154 dominant at Add.196 → litellm 0.6250 dominant at Add.197) is a first-class structural axis admitted only by mode 7 in the current taxonomy.

## Summary

Synth #424 promotes the W17 post-discharge-transition mode taxonomy from 6 modes (synth #422) to 7 modes by formalizing **multi-carrier-sustain at strict-carrier-set-equality with dominant-carrier rotation** as mode 7. The Add.196→Add.197 observation provides canonical instantiation at cardinality 3, carrier-set {codex, litellm, gemini-cli}, amplitude trajectory 13→8 (contracting), dominant-carrier rotation codex→litellm with prior-tick dominant amplitude-fraction in [0.55, 0.70] band. Independence-null prior probability of the joint observation is ~1/5000, decisively rejecting random-coincidence hypothesis 4 at p < 0.001 and elevating wall-clock-synchronization, reviewer-pool-overlap, and shared-CI-infrastructure hypotheses 1-3 as candidate mechanisms. Mode 7 admits two future-mode candidates (mode 8 multi-carrier-contraction at strict-superset; mode 9 multi-carrier-non-comparable) for forward-watch falsification.
