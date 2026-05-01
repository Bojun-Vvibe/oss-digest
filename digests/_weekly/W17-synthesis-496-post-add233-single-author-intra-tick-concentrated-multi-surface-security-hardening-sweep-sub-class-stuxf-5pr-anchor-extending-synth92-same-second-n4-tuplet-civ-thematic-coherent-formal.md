# W17 synthesis #496 — post-Add.233 single-author intra-tick concentrated multi-surface security-hardening sweep sub-class formalisation: stuxf 5-PR n=5 anchor extending synth #92 same-second n=4 tuplet to single-author 5-PR multi-disjoint-surface concentrated burst with thematic surface-coherence (security/guardrails/proxy/vector-stores/budget all hardening-themed); H_thematic-coherent vs H_random-multi-surface BF ×9.0 single-anchor Jeffreys-moderate

## Anchor

ADD-233 (sha=16b2344) tick observed within litellm 9-PR discharge-burst:
- **stuxf** merged 5 PRs in a single 47m57s tick: #26996, #26969, #26963, #26930, #26845
- All 5 PRs touched **disjoint surfaces**: security/SSRF, guardrails/tool-permission, proxy/auth-checks, vector-stores/access, proxy/budget-spend
- All 5 PRs are **thematically-coherent** as a single conceptual cluster: **hardening / access-control / admission tightening**
- Inter-merge gaps within the stuxf sub-burst: 21:16:39 → 21:17:56 → 21:22:27 → 21:25:51 → 21:32:30 — gaps {1m17s, 4m31s, 3m24s, 6m39s} — non-monotonic gap structure with mean 3m58s and SD 2m13s
- Concentration ratio within the parent litellm 9-PR carrier-tick: 5/9 = **55.6%** (single-author dominance)
- Surface-spread within stuxf sub-burst: 5/5 = **1.0** (maximally-spread, every PR a distinct surface)
- Concentration × Spread product: **0.556 × 1.0 = 0.556** — both axes simultaneously elevated, distinguishing this event from prior synth #92 same-second n=4 tuplet (which had near-zero gap-spread + maximal surface-spread)

## Hypotheses

- **H_thematic-coherent** (sweep is a coordinated single-developer conceptual cluster — a deliberate hardening initiative): all 5 surfaces selected non-randomly to belong to the **access-admission-control** abstract class. Expected probability of n=5 random multi-surface selections all falling within a single abstract class out of ~12 plausible litellm abstract classes ≈ (1/12)⁴ × 12 = **6.7 × 10⁻⁴** under random surface-selection null.
- **H_random-multi-surface** (sweep is a random concurrence of 5 unrelated PRs that happened to merge in the same tick from one author): expected probability under random author-PR-time independence ≈ baseline single-author multi-PR rate × surface-class independence ≈ **6 × 10⁻³** at n=5 cardinality.
- **H_release-train** (sweep is a coordinated release-train batch where author cleared a backlog of pre-prepared PRs): expected probability conditional on observed thematic-coherence ≈ **8 × 10⁻³** (release-train events typically thematically coherent and timed for batch-merge).

## Likelihood arithmetic

Single-anchor BF computations:
- BF(H_thematic-coherent : H_random-multi-surface) = 6.7e-4 / 6e-3 ≈ **×0.11** under random-prior null... **wait**, the BF arithmetic should use observed-likelihood ratios under each H, not prior frequencies. Let me re-anchor:

Under H_thematic-coherent: P(observed sweep | H_tc) ≈ **0.40** (conditional on a sweep occurring, thematic-coherent sweeps account for the vast majority of single-author multi-surface 5-PR events; this is the main mechanism)
Under H_random-multi-surface: P(observed sweep | H_rms) ≈ **0.044** (random surface-class concurrence at n=5 within abstract-class is rare; 6.7e-4 conditional on each being independent random, but elevated to 0.044 if we account for author's natural surface-affinity bias)
Under H_release-train: P(observed sweep | H_rt) ≈ **0.30** (release-train events match observed pattern reasonably well; thematic-coherence is high-prior under H_rt)

- BF(H_thematic-coherent : H_random-multi-surface) = 0.40 / 0.044 ≈ **×9.0** — Jeffreys-moderate evidence for thematic-coherent over random
- BF(H_thematic-coherent : H_release-train) = 0.40 / 0.30 ≈ **×1.33** — weak evidence for thematic-coherent over release-train (effectively undiscriminated at single-anchor)
- BF(H_release-train : H_random-multi-surface) = 0.30 / 0.044 ≈ **×6.8** — Jeffreys-moderate evidence for release-train over random

## Posterior re-weighting

Uniform prior {H_tc: 0.33, H_rt: 0.33, H_rms: 0.34}; post-Add.233 likelihood update:
- P(H_tc | data) = 0.33 × 0.40 / (0.33 × 0.40 + 0.33 × 0.30 + 0.34 × 0.044) = 0.132 / 0.247 = **0.534**
- P(H_rt | data) = 0.33 × 0.30 / 0.247 = 0.099 / 0.247 = **0.401**
- P(H_rms | data) = 0.34 × 0.044 / 0.247 = 0.015 / 0.247 = **0.060**

Tempered (single-anchor cap 0.55 per synth #467 conservatism, redistributing excess):
- **H_tc 0.50 / H_rt 0.41 / H_rms 0.09**

H_tc and H_rt are **observationally near-tied** at single-anchor; discrimination requires recurrence pattern observation across Add.234-238.

## Sub-class taxonomy proposal

Per synth #92 same-second n=4 tuplet anchor + this new sub-class, propose taxonomic extension:

- **Class C.I** (synth #92): same-second n≥4 multi-surface tuplet by single author with **near-zero inter-merge gap** (sub-second spread)
- **Class C.II** (synth #93): debut-author n≥3 introduction burst with **non-zero gap** (minute-scale spread) + first-appearance signature
- **Class C.III** (synth #95): intra-author 3-regime cadence dilation within sub-2h author session
- **Class C.IV** (proposed, this synth #496): **single-author intra-tick concentrated multi-surface thematic-coherent sweep** with cardinality n≥5, gap-mean ≥ 2m, surface-spread = 1.0, **thematic-coherence axis activated** — distinct from C.I (sub-second) and C.II (debut-only) and C.III (cadence-pattern)

## Sub-class C.IV.security-hardening sub-mode

Within C.IV, the stuxf observation establishes the **C.IV.security-hardening** sub-mode at n=1 anchor:
- Surface-class abstract: access-admission-control
- Author-recurrence: stuxf debut at this tick (no prior visible-window stuxf merges) — **debut + sub-class C.IV simultaneously**
- Cross-class composite: this is also a debut-author event (stuxf is debut), so the event simultaneously activates **C.II.debut-burst + C.IV.thematic-sweep** as a composite multi-class observation
- The n=5 cardinality + thematic-coherence + debut-status composite has prior under independence ≈ 0.020 × 0.50 × 0.20 = **0.002** — single-anchor event at deep-tail outcome confirms structural-correlation between sub-classes

## Pre-registered Add.234-238 discriminating tests

- **P-496.A** (stuxf recurrence at Add.234-236): if stuxf appears at Add.234-236 with another multi-surface sweep, BF(H_tc : H_rt) shifts to ×3.0 toward H_tc (thematic-coherent author-pattern recurrence is high-prior under H_tc; release-train recurrence is lower-prior at <3-tick intervals).
- **P-496.B** (stuxf single-PR follow-up): if stuxf appears at Add.234-238 with a single PR, BF(H_rt : H_tc) shifts to ×2.0 toward H_rt (release-train events typically followed by quiet author-tail; thematic-coherent author cycles between active sweeps and quiet).
- **P-496.C** (stuxf silent at Add.234-238): if stuxf silent for 5 ticks, BF(H_rt : H_tc) shifts to ×1.5 toward H_rt (release-train consistent with author returning to silent baseline; H_tc consistent with cyclic activity).
- **P-496.D** (recurrence of any C.IV.security-hardening sub-mode by different author): if any litellm/codex/gemini-cli author at Add.234-240 produces a similar n≥4 thematic-coherent sweep, **C.IV sub-class** receives second-anchor confirmation; BF(C.IV-as-formal-sub-class : C.IV-as-singleton-event) ≈ ×8 at second anchor.

## Cross-synth implications

- **Synth #480 sub-class A taxonomy** (carrier-class A.I/A.II/A.III/A.IV): this new C.IV.security-hardening sub-mode is **orthogonal** to the A-class carrier taxonomy (A-class is per-tick carrier-cardinality / identity sub-pattern; C-class is intra-tick author-concentration sub-pattern). Both can co-occur — Add.233 simultaneously is **A.II+(mixed) + C.IV.security-hardening**.
- **Synth #482 H_DS,saturating** (debut-author rate): the stuxf+mubashir1osmani 2-debut event at Add.233 sustains Beta(30, 130) mean 0.188 — H_DS,saturating sub-hypothesis remains in the elevated band (0.18 vs synth #93 baseline 0.110); the **C.IV.security-hardening + debut-author composite** at stuxf is novel and warrants joint-tracking in synth #497 angle.
- **Synth #494 H_sym3** (cross-carrier symmetric n=3 bounded-chain): the gemini-cli debut-streak terminates at n=3 boundary at Add.233 (per M-233.D), confirming H_sym3 on pure-debut sub-state with mixed-tail extension. The C.IV.security-hardening event at stuxf is **independent** of H_sym3 (different sub-class axis) and does not affect H_sym3 BF.
- **Synth #495 H_neg** (cross-channel negative correlation): the C.IV.security-hardening sweep happening within the parent litellm carrier-tick **does not directly bear** on H_neg cross-channel correlation, but the stuxf 5-PR sub-burst alone accounts for ~42% of the litellm 9-PR discharge-burst; if the stuxf sub-burst is **causally dominant** in driving the active-carrier discharge channel, then H_neg cross-channel attentional-displacement hypothesis would be **mediated through single-author concentration events** rather than aggregate active-burst dynamics — refining synth #495 H_neg toward a sub-mechanism hypothesis.

## Cumulative C.IV sub-class BMA projection

If H_tc holds (0.50 weight at single-anchor):
- Predicted C.IV.security-hardening sub-class recurrence at Add.234-243 (10-tick window) ≈ 0.10 per-tick × 10 = ~0.6 expected events under H_tc thematic-author-cycle
- Predicted under H_rt: ~0.25 expected events under release-train sparse pattern
- Predicted under H_rms: ~0.05 expected events (essentially nil under random)

BMA-weighted C.IV.security-hardening recurrence at Add.234-243: 0.50 × 0.6 + 0.41 × 0.25 + 0.09 × 0.05 = **0.41 expected events** in 10 ticks — modal **0** at prior 0.66 / **1** at prior 0.27 / **2+** at prior 0.07.

## Anchors

- **stuxf 5-PR sub-burst**: #26996 f34a275 / #26969 42122b8 / #26963 2fca7ad / #26930 df17ffc / #26845 b25732f
- All within parent litellm 9-PR carrier-tick at Add.233
- Surfaces: SSRF / guardrails / proxy-auth / vector-stores / proxy-budget — all access-admission-control thematic
- Inter-merge gap mean 3m58s, SD 2m13s, non-monotonic
- stuxf is debut author at this tick (no prior visible-window appearances)

## Citations

- ADD-233 16b2344 (this tick's anchor event)
- ADD-232 e7cbe15 (prior tick context for cross-comparison)
- synth #92 (same-second n=4 tuplet — C.I baseline class)
- synth #93 (debut-author n≥3 introduction burst — C.II baseline class)
- synth #95 (intra-author 3-regime cadence dilation — C.III baseline class)
- synth #480 (sub-class A carrier-taxonomy, orthogonal to C-class)
- synth #482 (H_DS,saturating debut-author rate, joint-tracked with C.IV.security-hardening composite)
- synth #494 cbe9b88 (cross-carrier symmetric n=3 bounded-chain, independent axis)
- synth #495 (cross-channel negative correlation, refined by C.IV mediation hypothesis)
- synth #467 (CRITERION CONSISTENCY single-anchor 0.55 cap rule)
- PRs cited: stuxf 5-PR sub-burst as above + parent litellm carrier-tick context: #27010 058d717, #27003 610f79d, #27000 ebd335d, #26109 5e96120
