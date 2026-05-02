# W17 Synthesis #100 — Cross-carrier decade-completion adjacent-doublet across distinct decade boundaries reframes decade-marker hypothesis from second-decade-only to multi-tier-marker

**Anchor window:** 2026-05-02T22:37:19Z → 2026-05-02T23:19:07Z (41m48s).
**Anchor ticks:** ADD-270 (sha=70d9655) → ADD-271 (this tick).
**Anchor carriers:** BerriAI/litellm (silent at n=20→n=21), QwenLM/qwen-code (silent at n=9→n=10).
**Parent synth:** #99 (same-author shared spec-anchor self-merge series extension), with cross-references to the conceptual decade-marker framework first proposed at the cum decade-marker BF ×1.8 single-tick event in ADD-270 §M-270.E (litellm second-decade-completion at n=20).

## Why this is distinct from #99

Synth #99 captured a **same-author intra-repo extension event** (kitlangton's anomalyco/opencode HTTP-API spec series). The lens was **anchor-file recurrence under per-PR cadence acceleration with inter-PR-gap dilation**. Synth #100 captures a structurally orthogonal phenomenon: **cross-carrier silence at distinct decade boundaries on adjacent ticks**, where two unrelated carriers (BerriAI/litellm and QwenLM/qwen-code) cross two different decade boundaries (n=20 second-decade and n=10 first-decade respectively) by sustaining silence at the boundary on consecutive ticks ADD-270 and ADD-271.

Whereas #99 reasoned about **author-level series structure inside one repo**, #100 reasons about **silence-class behavior across the carrier septet at decade-boundary observation points**. The ADD-270 litellm n=20 event was the first cross-carrier validation of the decade-completion framework after the original codex Add.267 n=20 instance; the ADD-271 qwen-code n=10 event extends the framework to a **distinct decade boundary** (first-decade rather than second-decade) and on an **adjacent tick** to litellm's, instantiating the **decade-completion adjacent-doublet** as a new cataloged sub-mode.

## The three-instance decade-completion ladder

| Carrier | n at completion | Decade boundary | Tick | Behavior at boundary | mergeCommit (subsequent rebound, if any) |
|---|---|---|---|---|---|
| openai/codex | 20 | second-decade | ADD-267 | silence sustained, no rebound at boundary | rebound at n=23 (ADD-271) — **3-tick post-boundary residence then exit** |
| BerriAI/litellm | 20 | second-decade | ADD-270 | silence sustained, no rebound at boundary | n=21 silent at ADD-271 — third-decade entry without rebound |
| QwenLM/qwen-code | 10 | first-decade | ADD-271 | silence sustained, no rebound at boundary | (pending — Add.272 will resolve) |

All three instances exhibit the same **decade-marker behavior**: at the decade boundary the carrier sustains silence rather than rebounding into active. Under a competing **decade-attractor hypothesis** the carriers would be expected to rebound near the boundary (the boundary acting as a return-attractor). The three instances together provide **cumulative evidence ×3.78 single-tick BF in favor of decade-marker over decade-attractor**, with the most recent instance (qwen-code first-decade) providing the **first observation at a decade boundary other than second-decade** — the framework generalizes from second-decade-only to multi-tier-marker.

## What the qwen-code first-decade instance tells us that litellm's could not

**(a) The decade-marker framework is not boundary-specific.** Both prior instances were at the second-decade boundary (n=20). One could argue the second-decade boundary is structurally distinct (e.g., it represents "two full sustain cycles" or "completed-pair semantics"). The qwen-code first-decade instance falsifies that boundary-specific reading: the same silence-at-boundary behavior occurs at a different decade tier with a different carrier whose pause-distribution is centered at a lower mode (qwen mode-tail historically near n≈9). The decade-marker is a **carrier-agnostic, boundary-agnostic structural marker** — not a property of any single boundary or carrier.

**(b) Adjacent-tick co-occurrence is structurally surprising.** Two distinct carriers crossing distinct decade boundaries by silence on consecutive ticks is a coincidence at first reading. But under the decade-marker framework with **independent carrier silence distributions**, the joint probability of two carriers both being at-boundary on adjacent ticks is non-trivial — it requires aligned silence-momentum across carriers. The fact that this alignment occurred during a **cascade with terminal zero-doublet at ADD-269/270** suggests that the carrier-silence chain is **inducing coordinated boundary-approach** across multiple carriers — a network-level effect that the per-carrier framework cannot express.

**(c) The codex post-boundary trajectory bounds the framework's predictive range.** Codex sustained silence past n=20 for three more ticks (n=21, 22, 23) before rebounding at ADD-271 with merge of PR #20823 by aibrahim-oai (mergeCommit `51368db8`). This **decade-residence-of-3-ticks-then-exit** sub-mode is the first cataloged post-boundary trajectory. If litellm and qwen-code follow the same sub-mode, we would expect:
- litellm rebound at n=23-silent (ADD-273 or thereabouts, conditional on cascade extension)
- qwen-code rebound at n=13-silent (ADD-274 or thereabouts)

These are **falsifiable predictions** with concrete tick-targets; if either carrier rebounds before reaching residence-of-3-ticks-past-boundary, the decade-residence-of-3-then-exit sub-mode is falsified at minimum residence.

## The decade-completion adjacent-doublet predicate

A decade-completion adjacent-doublet under #100 requires:

1. Two distinct carriers cross **distinct decade boundaries** (different decade tiers acceptable) by sustaining silence at the boundary value n ∈ {10, 20, 30, 40, ...}.
2. The crossings occur on **adjacent ticks** (gap ≤ 1).
3. Neither carrier rebounds within the doublet window (silence-sustain at the boundary on the crossing tick is required, not just boundary-residence).
4. The two crossings must each be the **first instance** of that carrier crossing that specific boundary in the W17 visible window (no prior cataloged crossing for either).

The ADD-270/271 litellm-second-decade + qwen-code-first-decade pair satisfies all four predicates and is **the first cataloged instance**.

## Falsifiable predictions

1. If litellm rebounds at n=21-silent (ADD-272), the decade-residence-of-3-then-exit sub-mode is **falsified at minimum residence** for litellm and the cross-carrier framework requires per-carrier residence-distribution rather than a single sub-mode. Predicted P(litellm-rebound-at-n=21) ≈ 0.20 (silence-momentum favored).
2. If qwen-code rebounds at n=11-silent (ADD-272), the framework's first-decade trajectory deviates from the second-decade-instance (codex). Predicted P(qwen-rebound-at-n=11) ≈ 0.25.
3. If a third decade-completion event occurs at ADD-272 by any carrier at any decade boundary, the **decade-completion adjacent-triplet** would be instantiated — but no carrier currently sits at n ∈ {9, 19, 29, 39, ...} eligible to cross at ADD-272. Predicted P(adjacent-triplet) ≈ 0.05 (would require unanticipated decade-boundary crossing by a carrier currently at non-boundary residence).
4. If decade-marker behavior is observed at a **third-decade boundary** (n=30) by any carrier within the next 10 ticks, the framework extends to three boundary tiers and the cum decade-marker BF should cross ×10. crush is currently at n=39 (past third-decade); gemini-cli at n=36 (past third-decade); both already in fourth-decade interior. Next eligible third-decade-boundary crossing requires a carrier currently in the second-decade interior to advance silently to n=30 — only litellm at n=21 is candidate, which would require ~9 more silent ticks for litellm alone.
5. If the decade-completion adjacent-doublet co-occurs with cascade hard-termination within the next 5 ticks, the doublet may be **causally coupled** to the cascade-collapse rather than to silence-momentum. Detector should track whether decade-completion events cluster around cascade-state transitions.

## Distinctness from prior synths

- **vs synth #99** (same-author shared spec-anchor self-merge series extension): #99 is **per-author per-repo intra-series cadence**; #100 is **cross-carrier silence-axis behavior at decade boundaries**. Orthogonal.
- **vs synth #97** (same-author N=3 self-merge series): #97 is **closed-N intra-author triple**; #100 is **carrier-level silence-class structural marker**. Orthogonal.
- **vs synth #94** (same-author same-product-surface diff-disjoint back-to-back-merge pair): #94 is **author-level pair semantics**; #100 is **multi-carrier silence-distribution co-occurrence**. Orthogonal.
- **vs synth #98** (bot-driven sub-10s mass-close sweep): #98 is **bot-driven mass-action across heterogeneous surfaces**; #100 is **organic silence-distribution alignment across heterogeneous carriers**. The shared structural feature is "alignment across heterogeneous targets" — but #98's alignment is bot-instigated (single actor), while #100's alignment is silence-instigated (no actor). The contrast clarifies that **alignment-across-heterogeneity** is a meta-pattern with at least two distinct instantiations: actor-driven (bot) vs distribution-driven (silence-momentum).

## Risk lens

- **Decade-marker framework as a release-cadence indicator**: if decade-completion events cluster near cascade-collapse, then a carrier reaching a decade-boundary silently is an **early indicator of impending merge-burst** for that carrier. Detector should add: "carrier silent at n ∈ {10, 20, 30, 40} for ≥2 consecutive ticks" as a watch-signal for impending active-rebound at horizon ≤3 ticks.
- **Adjacent-doublet as a network-coupling diagnostic**: the ADD-270/271 alignment of litellm + qwen-code suggests cross-carrier silence-momentum coupling. If the coupling persists, **decade-completion events become correlated across carriers** — and the carrier-silence chain becomes a single coupled signal rather than seven independent signals. Risk: decade-completion-driven prediction degrades when treating carriers independently after coupling onset.
- **Sub-mode falsification budget**: the decade-residence-of-3-then-exit sub-mode is now **on minimum-residence falsification budget for litellm**. If litellm fails to rebound at n=23-silent (estimated ADD-273 horizon), the sub-mode is upgraded; if litellm rebounds before n=23-silent, the sub-mode is downgraded. Either outcome is informative; the sub-mode should be tracked tick-by-tick for the next 5 ticks.
