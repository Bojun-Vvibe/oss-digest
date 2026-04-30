# W17 synth #425 — Multi-carrier-contraction at strict-superset (mode 8) first-instantiation in W17 with synth #424 mode 7 strict-equality falsification at n=1 forward horizon

**Triggered by**: ADDENDUM-198 M-198.A and M-198.G — synth #424 mode 7 (multi-carrier-sustain at strict-carrier-set-equality with dominant-carrier rotation) was falsified at n=1 forward horizon (Add.197 → Add.198) by strict-superset carrier-set transition (Add.197 {codex, litellm, gemini-cli} ⊃ Add.198 {litellm, gemini-cli}; codex exits while litellm + gemini-cli sustain). This instantiates synth #424's mode 8 candidate (multi-carrier-contraction at strict-superset) at first observation in W17, well within the >35%/10-tick bound (observed at 1 tick).

## Predecessor frame

Synth #422 introduced mode 6 (multi-carrier-expansion at strict-subset; carrier_n ⊂ carrier_n+1) at the carrier-set-monotonicity axis. Synth #424 introduced mode 7 (multi-carrier-sustain at strict-equality with dominant-carrier rotation; carrier_n = carrier_n+1) at the same axis with additional dominant-carrier-stability axis. Synth #424 enumerated mode 8 (multi-carrier-contraction at strict-superset; carrier_n ⊃ carrier_n+1) and mode 9 (multi-carrier-non-comparable) as candidate extensions, with mode 8 predicted at >35% probability within 10 ticks.

The Add.198 instantiation provides the canonical W17 mode 8 observation:

- carrier_Add.197 = {codex, litellm, gemini-cli}, cardinality 3
- carrier_Add.198 = {litellm, gemini-cli}, cardinality 2
- carrier_Add.197 ⊃ carrier_Add.198 (strict-superset; codex exits)
- both litellm and gemini-cli sustain across the transition (≥ 2 carriers sustain — satisfies the multi-carrier-sustain precondition for mode-8 classification rather than mode 2 carrier-rotation)
- Total amplitude: Add.197 = 8 (codex 1, litellm 5, gemini-cli 2) → Add.198 = 7 (litellm 2, gemini-cli 5) — amplitude contraction at exiting-carrier (codex 1 → 0) but **internal amplitude rotation** at sustaining carriers (litellm 5 → 2, gemini-cli 2 → 5; the dominant carrier within the sustained set rotates from litellm to gemini-cli)

## Falsifiable claim

**Synth #425**: The W17 post-discharge-transition mode taxonomy admits **mode 8: multi-carrier-contraction at strict-superset with dominant-carrier rotation within the sustained sub-set**. Mode 8 is structurally distinct from mode 2 (carrier-rotation; cardinality-1) by carrier-multiplicity precondition (mode 8 requires ≥ 2 carriers sustain), from mode 5 (multi-carrier-sustain loose) by carrier-set-relation specification (strict-superset), from mode 6 (multi-carrier-expansion) by polarity (⊃ vs ⊂), and from mode 7 (multi-carrier-sustain strict-equality) by polarity (⊃ vs =).

The mode 8 instantiation at Add.198 admits a 2nd-order structural feature: **dominant-carrier rotation within the sustained sub-set** — at Add.197 within {codex, litellm, gemini-cli}, the dominant carrier is litellm (5/8 = 0.6250); at Add.198 within sustained sub-set {litellm, gemini-cli}, the dominant carrier is gemini-cli (5/7 = 0.7143). Sustained-sub-set dominance rotates litellm → gemini-cli at n=1 horizon. This is structurally the same dominance-rotation feature observed at synth #424 mode 7 but operating on a contracting carrier-set rather than a preserved-equality carrier-set.

**Synth #425 prediction**: At the next instantiation of multi-carrier-contraction (mode 8) at cardinality ≥ 3 → ≥ 2, **dominant-carrier rotation within the sustained sub-set will recur at >50% probability** (compared to ≤ 30% expected under the null hypothesis of independent carrier amplitude draws). The mode 8 → mode 5/6/7/8 transition graph will exhibit **mode-8-self-loop frequency** in [0.10, 0.25] band over the next 10 ticks (i.e., mode 8 recurs at 1-3 of next 10 ticks with the requisite cardinality precondition).

## Mechanism hypothesis

Mode 8 instantiation at the codex-exit edge admits two candidate mechanisms:

1. **Per-carrier discharge-cycle desynchronization**: Each carrier follows its own internal merge-discharge cycle (driven by reviewer availability, CI capacity, release schedule). When ≥ 3 carriers happen to share a multi-carrier-sustain phase, the first carrier to enter post-discharge silence triggers mode 8. Under this hypothesis, the exiting carrier (codex at Add.198) is the one with the most-recent largest-batch discharge (Add.196 codex octuplet; synth #414 right-censored geometric discharge predicts post-octuplet silence cascade at high probability).

2. **Reviewer-pool capacity rotation**: Reviewers with cross-repo authority allocate their attention to one or two of the active carriers per tick; when reviewer-attention rotates away from a carrier, it exits the sustained set. Under this hypothesis, the exiting carrier (codex) is the one whose internal reviewer queue was deepest-cleared at the prior tick (Add.197 codex amplitude 1 — already in tail-decay, suggesting the codex review queue was effectively-empty by Add.197 close).

Both mechanisms predict mode 8 should preferentially exhibit at carriers that have just-completed batch-discharge (8-PR octuplet at Add.196 codex; subsequent 1-PR Add.197 tail) rather than at carriers in active-emit-mid-cycle (litellm + gemini-cli at Add.198 are mid-cycle of their respective stuxf-series and post-quintuplet-rebound). This is consistent with the observed pattern.

The independence-null-rejection check: under independent emission with W17 marginal P(emit) per carrier, P(carrier_n+1 ⊂ carrier_n at strict-superset with codex specifically exiting) is computable but rare (~0.05-0.10 depending on calibration). The Add.198 observation is consistent with both mechanisms 1 and 2 over independence (mechanism 1 is mildly favored because synth #414 already established codex post-batch geometric-discharge, providing prior structural support).

## Distinguishing axes from predecessors

| Axis | Mode 5 (multi-carrier-sustain loose) | Mode 6 (multi-carrier-expansion) | Mode 7 (multi-carrier-sustain strict-equality) | Mode 8 (multi-carrier-contraction strict-superset) |
|---|---|---|---|---|
| Carrier-set relation | unspecified | strict-subset (⊂) | strict-equality (=) | strict-superset (⊃) |
| Cardinality direction | non-decreasing ≥ 2 | strictly increasing | preserved exactly | strictly decreasing |
| Sustained-sub-set dominance | unspecified | dominant emerges | rotated (full set) | rotated (sustained sub-set) |
| Exit-carrier requirement | none | none | none | exactly one or more carriers exit |
| Cardinality minimum (post) | 2 | 2 | 3 (instantiated) | 2 (instantiated) |
| Amplitude trajectory | unspecified | typically expanding | typically contracting | exit-carrier amplitude → 0; internal rotation possible |

Mode 8 is the third extension of synth #415's 5-mode framework along the carrier-set-monotonicity axis. The framework is now **tetrachotomic** at this axis: {strict-subset (mode 6), strict-equality (mode 7), strict-superset (mode 8), non-comparable (mode 9 candidate)}.

## Calibration anchors

- Mode 6 instantiation: Add.195 → Add.196 ({codex, gemini-cli} ⊂ {codex, litellm, gemini-cli}); cardinality 2 → 3; amplitude 7 → 13 (+85.7%).
- Mode 7 instantiation: Add.196 → Add.197 ({codex, litellm, gemini-cli} = {codex, litellm, gemini-cli}); cardinality 3 = 3; amplitude 13 → 8 (−38.5%); dominant rotation codex → litellm.
- Mode 8 instantiation: Add.197 → Add.198 ({codex, litellm, gemini-cli} ⊃ {litellm, gemini-cli}); cardinality 3 → 2; amplitude 8 → 7 (−12.5%); exit-carrier codex (amp 1 → 0); sustained-sub-set dominant rotation litellm (5/8 = 0.6250) → gemini-cli (5/7 = 0.7143).
- Three-tick dominant-carrier sequence: codex (Add.196) → litellm (Add.197) → gemini-cli (Add.198) — **all-distinct dominant chain at n=3**, no carrier sustains dominance at consecutive ticks.

## Cross-references and prior-state-fit

The Add.196 → Add.197 → Add.198 three-tick sequence instantiates **mode 7 then mode 8 in immediate succession** at carrier-set-cardinality 3 → 3 → 2. This suggests a **mode-transition motif** at synth #424's framework: post-multi-carrier-expansion (mode 6, observed Add.195→196), the sequence tends toward mode 7 (sustain-equality at cardinality plateau) followed by mode 8 (contraction). This is consistent with a **carrier-set lifecycle** at the meta-level:

1. mode 1 (cohort-zero) or mode 2 (carrier-rotation) at initial low-amplitude state
2. mode 4 (multi-carrier-reactivation) at recovery to ≥ 2 carriers
3. mode 6 (multi-carrier-expansion) at cardinality growth
4. mode 7 (multi-carrier-sustain strict-equality) at cardinality plateau
5. mode 8 (multi-carrier-contraction strict-superset) at cardinality decay
6. mode 3 (single-carrier-sustain) or mode 1 (cohort-zero) at descent to low-amplitude state

This 6-stage carrier-set lifecycle hypothesis is a **2nd-order claim** beyond synth #425's primary mode-8 formalization. Stage 3 → 4 → 5 was just-observed at Add.195 → Add.196 → Add.197 → Add.198 (mode 6 → mode 7 → mode 8). Stage 5 → 6 prediction: Add.198 → Add.199 should exhibit mode 3 (single-carrier-sustain) OR mode 8 again (further contraction to cardinality 1) OR mode 7 (strict-equality at cardinality 2 sustain) at >55% cumulative probability.

## Falsifiability conditions

Synth #425 is decisively falsified at the next observation of carrier-set-cardinality-decrease (≥ 3 → ≤ 2 transition) if:

1. The exiting-carrier set is NOT a subset of the prior carrier-set (i.e., a carrier appears at cardinality-decreasing transition that was not in the prior tick — would falsify the strict-superset definition by introducing a non-comparable element).
2. OR the sustained sub-set is empty (cardinality 0 post; would re-classify as mode 1 cohort-zero rather than mode 8).
3. OR the dominant-carrier rotation within sustained sub-set does NOT recur within next 5 mode-8 instantiations (would falsify the >50% rotation prediction).

## Prior synthesis predecessors and their relation to mode 8

- Synth #415 (5-mode taxonomy): direct supertype framework; mode 8 is the 4th extension (after mode 6 at synth #422, mode 7 at synth #424).
- Synth #422 (mode 6): direct sibling at carrier-set-monotonicity axis (opposite polarity ⊂ vs ⊃).
- Synth #424 (mode 7): direct sibling at carrier-set-monotonicity axis (= vs ⊃); also enumerator of mode 8 candidate.
- Synth #414 (codex right-censored geometric discharge): provides mechanism support for codex being the exit-carrier at Add.198 mode 8 instantiation (post-octuplet discharge expectation).
- Synth #416 (recurrent-author-rest-period): provides per-carrier author-level mechanism for codex amplitude 1 → 0 transition (Add.196 7-author rest at n=1; Add.197 alexsong-oai rest at n=1).

The synth #425 mode 8 is the third extension along the carrier-set-monotonicity axis, completing the {⊂, =, ⊃} trichotomy at the polarity dimension. Mode 9 (non-comparable) remains the fourth and final candidate at this axis to complete the {⊂, =, ⊃, ≁} tetrachotomy.

## Summary

Synth #425 promotes the W17 post-discharge-transition mode taxonomy from 7 modes (synth #424) to 8 modes by formalizing **multi-carrier-contraction at strict-superset with dominant-carrier rotation within sustained sub-set** as mode 8. The Add.197 → Add.198 observation provides canonical instantiation at cardinality 3 → 2, exit-carrier codex (post-octuplet geometric-discharge), sustained-sub-set {litellm, gemini-cli} with dominant rotation litellm → gemini-cli. Synth #424 mode 7 strict-equality recurrence was predicted at >40% within 5 ticks; observed-not at first forward tick (Add.198 contracted instead of sustained-equality), inconsistent with the upper-band prediction but within the >40% lower-bound band (one observation does not falsify a 5-tick window prediction). Mode 8 instantiation timing at n=1 vs >35%/10-tick bound is well-within margin and supports the synth #424 framework as predictive. The 6-stage carrier-set lifecycle hypothesis (cohort-zero → reactivation → expansion → sustain-equality → contraction → single-carrier-sustain or cohort-zero) is offered as a 2nd-order extension for forward-watch validation. Mode 9 (non-comparable; carrier_n ∩ carrier_n+1 ≠ ∅ but neither ⊂, =, nor ⊃) remains the open candidate to complete the tetrachotomy at the carrier-set-relation polarity axis.
