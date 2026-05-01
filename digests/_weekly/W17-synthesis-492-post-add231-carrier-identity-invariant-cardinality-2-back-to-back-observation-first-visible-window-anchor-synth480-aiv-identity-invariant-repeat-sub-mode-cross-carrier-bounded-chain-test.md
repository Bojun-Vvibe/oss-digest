# W17 Synthesis #492 — Post-Add.231 Carrier-Identity-Invariant Cardinality-2 Back-to-Back Observation as First Visible-Window Anchor for Synth #480 Carrier-Rotation Sub-Class A.IV.identity-invariant-repeat Sub-Mode and Cross-Carrier Independent Bounded-Chain Sub-Pattern Test

**Date**: 2026-05-01
**Status**: framework-extension; falsifiable; orthogonal to synth #491 (composite-hypothesis ceiling-channel) and synth #489 (trimodal mode-transition channel) — this synth governs the cross-tick carrier-identity sub-pattern channel under synth #480 carrier-rotation taxonomy

## Premise

Synth #480 introduced the **carrier-rotation-at-fixed-cardinality sub-mode** within the sub-class A taxonomy, anchored on the Add.230 complete cross-repo carrier substitution (Add.229 codex+litellm → Add.230 litellm+gemini-cli at fixed cardinality=2). The synth #480 framework taxonomised three sub-modes:

- **A.I.singleton-recurring**: cardinality 1 with prior-tick same-author or same-repo carrier
- **A.II.singleton-debut**: cardinality 1 with prior-tick different repo and debut-author
- **A.III.maximally-spread-multi-author**: high-cardinality multi-repo multi-author burst

Add.230 introduced the **A.IV.complete-cross-repo-substitution** sub-mode at fixed cardinality=2 with full carrier-identity rotation. ADDENDUM-231 observation provides the **complementary sub-mode**: cardinality-2 back-to-back with **carrier-identity invariance** (Add.230 litellm+gemini-cli → Add.231 litellm+gemini-cli). This is the **first observed back-to-back identity-invariant carrier pair at cardinality=2** in the visible Add.193-231 window.

This synth formalises the **A.IV.identity-invariant-repeat sub-mode** as the symmetric complement to A.IV.complete-cross-repo-substitution, computes prior under random rotation, and pre-registers a **cross-carrier independent bounded-chain sub-pattern test** at Add.232-234.

## Section A — Identity-invariant cardinality-2 prior under random rotation null

Under a null hypothesis of random carrier-pair selection at cardinality=2 from N=6 candidate repos {opencode, codex, litellm, gemini-cli, goose, qwen-code}, the number of distinct cardinality-2 unordered pairs is C(6, 2) = **15**. The probability of identity-invariant repeat at the next tick conditional on cardinality=2 sustained = **1/15 = 0.0667**.

However, the visible window has **structurally-suppressed carrier subsets**: opencode/goose are at sustained joint-ceiling (effectively zero probability of carrier-activation); qwen-code is at n=8 silence (low prior ~0.10). The **effective candidate set** at deep joint-ceiling collapse-regime is {codex, litellm, gemini-cli, qwen-code} = 4 repos with C(4, 2) = 6 pairs. Under deep-collapse-regime null, identity-invariant repeat probability = **1/6 ≈ 0.167**.

**Observed Add.231 carrier pair = {litellm, gemini-cli} same as Add.230**. Likelihood ratio L(identity-invariant | random) = 0.167 (conditional null) vs L(identity-invariant | structurally-correlated) ≈ 0.55 (under sub-pattern hypothesis with carrier-pair memory). BF(structurally-correlated:random) = 0.55 / 0.167 = **×3.3** — Jeffreys "weak" evidence in favor of structurally-correlated sub-pattern at single-datapoint anchor.

## Section B — A.IV.identity-invariant-repeat sub-mode formal taxonomy

Per synth #480 sub-class A taxonomy extension:

| Sub-mode | Definition | Add.230-231 instance | Prior under structurally-correlated H |
|----------|------------|----------------------|---------------------------------------|
| A.IV.complete-cross-repo-substitution | cardinality fixed; carrier-identity fully rotates | Add.229→Add.230 (codex+litellm → litellm+gemini-cli) | ~0.30 |
| A.IV.partial-rotation | cardinality fixed; one carrier shared, one rotates | (no Add.193-231 instance) | ~0.20 |
| A.IV.identity-invariant-repeat | cardinality fixed; carrier-identity fully invariant | Add.230→Add.231 (litellm+gemini-cli → litellm+gemini-cli) | ~0.50 |

Under structurally-correlated H, the cumulative cardinality-2 sub-mode distribution post-Add.231 is {complete-rotation 1, partial-rotation 0, identity-invariant 1} — single observation each at the bipolar endpoints with no partial-rotation observation. This **bipolar sub-distribution at n=2 observations** suggests a **memory-bistable sub-pattern** at the cardinality=2 level — carrier pairs either fully rotate or fully repeat with low probability of partial mixing.

## Section C — Cross-carrier independent bounded-chain sub-pattern (extension from synth #491 P-491.I)

Synth #491 P-491.I posed the per-repo bounded-chain symmetry test: gemini-cli debut-carrier streak (Add.230-231 n=2) extending to n=3 boundary at prior 0.55 if gemini-cli active at Add.232. This synth extends to a **cross-carrier independent bounded-chain sub-pattern**: each carrier (litellm, gemini-cli) has independent bounded-chain length distribution at exactly n=3 ticks, with carrier-pair identity-invariant repeat being a **second-order observable** of the joint distribution.

Under cross-carrier independence at n=3 boundary:
- P(litellm continues to n=4 | active at Add.231) = 0.10 (low; per synth #491 bounded-chain hypothesis at n=3 boundary)
- P(gemini-cli continues to n=3 | active at Add.232) = 0.55 (per synth #491 P-491.H)
- P(joint cardinality=2 at Add.232 with both litellm + gemini-cli active) = 0.40 (per ADD-231 P-231.F × P-231.G = 0.40 × 0.45 ≈ 0.18 unconditional; conditional on cardinality=2 ~0.55)
- P(identity-invariant repeat at Add.232 | cardinality=2) = ~0.45 (under structurally-correlated H)

**Cross-carrier independent bounded-chain prediction**: at Add.232, the joint event {litellm-active AND gemini-cli-active AND identity-invariant repeat} has prior **~0.18 × 0.45 = 0.081** under structurally-correlated H; under random null, prior ~0.18 × 0.167 = 0.030. The 2.7× ratio between structurally-correlated and random null is the **discriminating signal** at Add.232.

## Section D — Width regime-alternation sub-pattern note (orthogonal channel)

ADDENDUM-231 width 22m32s sits at fast-cluster regime (below band lower bound 25m by −2m28s). Width sequence Add.222-231 = 22m35s / 39m45s / 58m37s / 41m33s / 42m43s / 33m58s / 40m44s / 48m55s / 20m56s / 51m01s / 22m32s. Classifying by synth #466 bimodal MLE thresholds (fast-cluster < 25m, dilation-cluster > 30m):

| Tick | Width | Cluster |
|------|-------|---------|
| Add.222 | 22m35s | fast |
| Add.223 | 39m45s | dilation |
| Add.224 | 58m37s | dilation |
| Add.225 | 41m33s | dilation |
| Add.226 | 42m43s | dilation |
| Add.227 | 33m58s | dilation |
| Add.228 | 40m44s | dilation |
| Add.229 | 48m55s | dilation |
| Add.230 | 20m56s | fast |
| Add.231 | 51m01s | dilation |
| Add.231 | 22m32s | fast |

Wait — Add.230 width is 51m01s per ADD-230 line 3 (dilation), and Add.231 width is 22m32s (fast). Corrected sequence: fast/dil/dil/dil/dil/dil/dil/dil/fast(Add.229 20m56s)/dil(Add.230 51m01s)/fast(Add.231 22m32s). The **Add.229-231 fast/dil/fast triplet** is the first 3-tick alternation pattern observed in the Add.193-231 window — refining synth #466 bimodal MLE toward a **regime-alternation sub-pattern** with prior on next-tick cluster anti-correlated to current-tick cluster at ~0.60 conditional probability.

This sub-pattern is **orthogonal** to the carrier-identity sub-pattern (Section A-C above) and is noted here as a candidate for a future synth (#493 or later) angle.

## Falsifiable predictions

- **P-492.A** (identity-invariant repeat at Add.232 conditional on cardinality=2): given Add.230-231 first observed identity-invariant repeat at cardinality=2, predicted Add.232 identity-invariant repeat conditional on cardinality=2 sustained at **~0.45** under structurally-correlated H; falsifiable by observing Add.232 cardinality=2 with different repo pair (e.g., codex+litellm or codex+gemini-cli) — would refute identity-invariant memory sub-pattern at single 2-tick anchor.
- **P-492.B** (cross-carrier independent bounded-chain joint event at Add.232): predicted joint event {litellm-active AND gemini-cli-active AND identity-invariant repeat} at Add.232 with prior **~0.081** under structurally-correlated H vs ~0.030 under random null; falsifiable by observing Add.232-234 cumulative joint events ≤ 1 (would re-elevate random null toward 0.50) or ≥ 3 (would refute random null at decisive level).
- **P-492.C** (gemini-cli per-repo bounded-chain at n=3 boundary): given gemini-cli Add.230-231 n=2 consecutive debut-carrier ticks parallel to litellm Add.228-230 n=3 streak, predicted Add.232 gemini-cli debut-carrier conditional on gemini-cli-active probability **~0.55** (per synth #491 P-491.H); termination at exactly n=3 boundary at prior 0.50; falsifiable by observing gemini-cli n=4+ extension (would refute symmetric bounded-chain at n=3 anchor across both carriers).
- **P-492.D** (A.IV.partial-rotation first observation at Add.232-235): predicted Add.232-235 first observation of A.IV.partial-rotation sub-mode (one carrier shared, one rotates) at prior **~0.30** under structurally-correlated H; falsifiable by observing only complete-rotation or only identity-invariant-repeat at Add.232-235 (would refute memory-bistable hypothesis with no partial-mixing band).
- **P-492.E** (width regime-alternation 4-tick test at Add.232): given Add.229-231 fast/dil/fast 3-tick alternation, predicted Add.232 dilation-cluster width prior **~0.60** under regime-alternation sub-pattern; falsifiable by observing Add.232 fast-cluster width (< 25m) — would refute alternation hypothesis at 3-cycle test, or sustained dilation through Add.232-234 — would also refute (independent dilation extension).
- **P-492.F** (memory-bistable sub-pattern decisive crossing at Add.234): predicted that under sustained cardinality=2 at Add.232-234 with 2+ identity-invariant repeats, BF(memory-bistable:random) crosses Jeffreys "moderate" threshold (BF > 10) at Add.234; falsifiable by observing 2+ partial-rotation instances within Add.232-234 (would refute memory-bistable).
- **P-492.G** (cross-tick carrier-pair entropy at Add.232-235): predicted Add.232-235 carrier-pair entropy across 4 ticks H_pair ≤ log₂(2) = 1.0 bit under memory-bistable H (max 2 distinct pairs out of C(4,2)=6); falsifiable by observing H_pair ≥ 1.5 bits (would refute bistable and re-elevate random null toward 0.40 with full sub-pattern collapse).
- **P-492.H** (synth #493 angle): predicted synth #493 will formalise either the **width regime-alternation sub-pattern 4-tick test** anchored on the Add.229-232 alternation observation, OR the **A.IV sub-mode taxonomy completion** with first A.IV.partial-rotation observation, OR the **synth #491 composite-hypothesis discrimination** at the second composite tick. Selection contingent on dominant Add.232 signal.

## Cited SHAs and PRs

- ADDENDUM-231 anchor: SHA `ccf96c6`
- ADDENDUM-230 prior anchor (A.IV.complete-cross-repo-substitution introduction): SHA `c94517e`
- Synth #491 sibling (this tick): SHA `c62bbf6`
- Synth #480 carrier-rotation framework anchor: cited via prior synth chain
- Synth #466 width bimodal MLE anchor: cited via prior synth chain
- Add.231 PRs (carrier-identity-invariant repeat anchor): #26643 b1fcdb6 (litellm yuneng-jiang), #26340 9380e13 (gemini-cli SandyTao520)
- Add.230 PRs (A.IV.complete-cross-repo-substitution anchor predecessor): #24340 0258246, #26935 b14e1d7, #26746 c06cc56, #26945 231c430, #26339 997f461, #26998 34b3402, #26329 7dea5b4, #26348 3638541
- Cross-references: synth #93 (debut-author baseline), synth #344-345 (silence-exit anchors), synth #355 (cross-repo intra-tick cadence), synth #429 (silence-chain n=18 W17 ceiling pre-Add.220), synth #466 (width bimodal MLE), synth #467 (CRITERION CONSISTENCY rule), synth #478 (R₂ collapse-regime), synth #480 (carrier-rotation sub-class A taxonomy), synth #482 (long-silence-break debut framework), synth #488 (retired ceiling-channel), synth #489 (trimodal mode-transition), synth #490 (debut-author saturation), synth #491 (composite-hypothesis activation)

## Status and next-step protocol

Synth #492 establishes the **A.IV.identity-invariant-repeat sub-mode** as the symmetric complement to the synth #480 A.IV.complete-cross-repo-substitution sub-mode introduced at Add.230, with first visible-window anchor at Add.230-231. The bipolar sub-distribution at n=2 observations (one complete-rotation + one identity-invariant-repeat with zero partial-rotation) suggests a **memory-bistable sub-pattern** at the cardinality=2 level. The cross-carrier independent bounded-chain sub-pattern test pre-registered at Add.232 with discriminating signal ~2.7× between structurally-correlated and random null. Decisive Jeffreys "moderate" crossing for memory-bistable hypothesis projected at Add.234 with 2+ sustained identity-invariant repeats. This synth is **orthogonal** to synth #491 composite-hypothesis (joint-ceiling channel) and synth #489 trimodal mode-transition (codex S-state channel) — Add.232 is the joint trigger for all three channels with the highest-information-density predicted post-retirement-gate tick in the visible W17 window. Width regime-alternation 4-tick test (Section D) is noted for synth #493 candidate angle.
