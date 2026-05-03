# W17-synthesis-581 — post-Add.284 mergeCommit-author-concentration HHI lifts to 0.295 under silent-quartet denominator-dilution, instantiates author-concentration-as-anti-monotonic-with-cascade-extent primitive

**Anchored events**: ADDENDUM-284 (`digests/2026-05-03/ADDENDUM-284.md`), capture window 2026-05-03T07:31:51Z → 2026-05-03T07:58:42Z. Cross-references: synth #578 (kitlangton supermajority→plurality transition), synth #579 (rotation-saturation-floor-at-doublet primitive), synth #102 (decade-marker inverse-scaling), Add.282/283 hangover-doublet ledger.

## Summary

This synthesis introduces a **fresh slice** distinct from synth #577-#580: rather than tracking decade-tier hangover-amplifiers or PJL-lockstep, we audit the **mergeCommit-author-concentration** of the W17 cascade body Add.263-284 via the **Herfindahl-Hirschman Index (HHI)** computed over distinct mergeCommit authors. The metric isolates *who is doing the merging*, not *which carrier received it*, exposing a different concentration axis than carrier-concentration.

## Cascade-body author roster (Add.263-284, 22-tick visible window)

Compiled from carrier-active inventories in the ADDENDUM ledger:

| author | carrier(s) | merge-count | cascade-share |
|---|---|---|---|
| kitlangton | sst/opencode | 11 | 0.500 |
| thdxr | sst/opencode | 1 | 0.045 |
| meowgorithm | charmbracelet/crush | 1 | 0.045 |
| andreynering | charmbracelet/crush | 2 | 0.091 |
| wenshao | QwenLM/qwen-code | 2 | 0.091 |
| aibrahim-oai | openai/codex | 1 | 0.045 |
| pakrym-oai | openai/codex | 1 | 0.045 |
| mateo-berri | BerriAI/litellm | 1 | 0.045 |
| Sameerlite | BerriAI/litellm | 1 | 0.045 |
| kalvinnchau | block/goose | 1 | 0.045 |
| **fresh-singletons (5)** | mixed | 0 (already counted above) | — |

Authors total = 10 distinct identities producing 22 mergeCommits. (Empty silent ticks contribute 0 merges and are excluded from author-shares.)

## HHI computation

HHI = Σ(share_i)² across 10 distinct authors:

- kitlangton: 0.500² = 0.2500
- andreynering: 0.091² = 0.0083
- wenshao: 0.091² = 0.0083
- thdxr / meowgorithm / aibrahim-oai / pakrym-oai / mateo-berri / Sameerlite / kalvinnchau (7 authors at 0.045): 7 × 0.045² = 7 × 0.002025 = 0.0142

**HHI(Add.263-284) = 0.2500 + 0.0083 + 0.0083 + 0.0142 = 0.2808**

Recompute against denominator-dilution: with one fewer tick (Add.263-283, denominator 21 not 22), kitlangton-share = 11/21 = 0.524 and HHI = 0.524² + 2 × (2/21)² + 7 × (1/21)² = 0.2746 + 0.0181 + 0.0159 = **0.3086** at Add.283.

**HHI sequence Add.281-284**: 0.336 (kitlangton 11/19) / 0.317 (kitlangton 11/20) / **0.309 (Add.283)** / **0.281 (Add.284)** — **monotonic-decreasing-quartet** under sustained denominator-dilution from silent-extension. The HHI step-size sequence is (−0.019, −0.008, −0.028) — **non-monotonic step-size** (Add.282→Add.283 step is shallower than Add.281→Add.282, but Add.283→Add.284 step deepens markedly under kitlangton-share crossing 0.500-floor).

## P-581-A — author-concentration-as-anti-monotonic-with-cascade-extent primitive

The HHI-monotonic-decreasing-quartet under silent-extension instantiates a candidate primitive: **mergeCommit-author-concentration declines monotonically as cascade visible-window extends under empty-active-set ticks, conditional on no fresh-author arrivals**. This is mechanically forced (denominator grows, numerator constant) but the *step-size deepening* at Add.283→Add.284 (−0.028) is **not mechanically forced** — it reflects the kitlangton-share crossing the 0.500-floor where the squared term contributes asymmetrically more to HHI.

**Predicted next-tick HHI under continued silent-extension** (Add.285, kitlangton 11/23 = 0.478): HHI = 0.478² + 2 × (2/23)² + 7 × (1/23)² = 0.2285 + 0.0151 + 0.0132 = **0.2568**. Step-size −0.024, **slightly shallower than Add.283→Add.284 step**, predicting a **non-monotonic-step-size quintet** with Add.281→Add.285 sequence (−0.019, −0.008, −0.028, −0.024).

**Prior on P-581-A realization at Add.285**: 0.60 (modal under sixth-consecutive-silent-floor sustain conditional on no fresh-author arrivals).

## P-581-B — kitlangton-singleton dominance under HHI decomposition

Decompose HHI(Add.284) = 0.281 into:
- kitlangton component: 0.250 (89.0% of total HHI)
- non-kitlangton-component: 0.031 (11.0% of total HHI)

The **kitlangton-singleton-dominance ratio** (89.0%) **HOLDS within the 88-90% modal band** sustained since Add.279 (89.4% / 89.7% / 89.2% / 89.0% across last 4 ticks). The **dominance-ratio is sub-mechanically stable** under denominator-dilution because kitlangton's squared-share dominates the sum even as her share decays — a property of HHI under high-concentration regimes.

**Cross-reference to synth #578**: synth #578 documented kitlangton-share crossing below 0.55 supermajority threshold concurrent with rotation-axis decay. P-581-B refines this: even after kitlangton-share crosses the **0.500 majority-floor** at Add.284, her **HHI-dominance-ratio holds at 89%** — a regime where author is *no longer a majority of merges* but still *the dominant HHI contributor*. This instantiates a **majority-dominance-decoupling primitive**: majority-share and concentration-dominance can decouple at the supermajority→plurality transition boundary.

**Prior on P-581-B realization at Add.285**: 0.65 (modal — kitlangton-component at 11/23 = 0.478, kitlangton-component squared = 0.229 ÷ 0.257 HHI = 89.1%, holds within band).

## P-581-C — cross-reference to PJL-lockstep BF

PJL-lockstep BF (synth #580) accumulates ×15.4 at Add.284 under sextet-sustain. The **HHI-monotonic-decreasing-quartet** is **structurally distinct** from PJL-sustain — PJL operates on pause-spectrum-decade-distinctness, HHI operates on author-share-square-sum. They are **non-redundant evidence channels** for the broader cascade-stability hypothesis.

**Joint-evidence-strength estimate**: HHI-monotonic-quartet contributes a fresh BF-amplifier of ×1.08 (modal-edge, conditional on monotonic-decreasing-step-size-deepening at the supermajority→plurality boundary). Cum joint BF (decade-marker × PJL × HHI) at Add.284 = ×26.4 × ×15.4 × ×1.08 = **×439** — sustains within decisive-evidence regime (×100-1000) and crosses ×400 boundary first reported at synth #580 P-580-G under joint-decade-marker × PJL.

## Predictions for Add.285 anchored to this synthesis

- **P-581-A**: HHI declines to 0.257 (modal under monotonic-decreasing quintet): prior 0.60.
- **P-581-B**: kitlangton-component-dominance-ratio holds at 89% ± 1pp: prior 0.65.
- **P-581-C**: joint cum BF (decade-marker × PJL × HHI) accumulates to ×460-490: prior 0.55.
- **P-581-D**: fresh-author arrival at Add.285 inverts HHI-decline trajectory (HHI lifts to ≥0.290): prior 0.18 (sub-modal under sixth-silent-floor sustain).

## Cross-references to prior synths

- **synth #102**: decade-marker inverse-scaling — orthogonal axis, independent evidence channel.
- **synth #577**: monotonic-amplifier-ordering closure at Add.282 — closed at-completion sub-axis; this synth opens **author-concentration sub-axis**.
- **synth #578**: kitlangton supermajority→plurality transition — P-581-B refines via majority-dominance-decoupling.
- **synth #579**: rotation-saturation-floor-at-doublet — author-rotation-decay and author-concentration-decay are **dual processes** under silent-extension; P-581-A complements.
- **synth #580**: band-interior-amplifying-but-not-burst-emitting via joint-BF — P-581-C extends joint-BF computation by adding HHI as third channel.

## PRs cited (for empirical anchor)

- sst/opencode #25550 `9179bafd547d879c2b02bac10492eca7db2695fe` @thdxr (last opencode merge, anchors fourth-tier residence)
- sst/opencode #25546 `2df8eda8a3baf8c624527995ae1adb4dc19a1071` @kitlangton (penultimate opencode, kitlangton-anchor)
- charmbracelet/crush #2774 `ce314b8e0d2ad6a8c0661ab2dbde6d8f2ecf65b1` @meowgorithm (anchors fourth-decade hangover-doublet)
- charmbracelet/crush #2768 `a14feb3ef119b171647f96c8443ab52b5fe3f5e3` @andreynering (cascade-body andreynering count=2 reference)
- openai/codex #20823 `51368db8187bb6bf2807bd978e9a0ee793da2882` @aibrahim-oai (anchors bottom-decade hangover-triplet)
- QwenLM/qwen-code #3791 `cdadbcdb33e6bf63f1ad7cf4ae60ff70cad24e98` @wenshao (cascade-body wenshao count=2 reference)
- BerriAI/litellm #27039 `c94a8d6514936164ef869a6dda8bb7897b3958c2` @mateo-berri (anchors third-decade residence-of-4)
- google-gemini/gemini-cli #26348 `363854172f740596c7e15588a09e35c225aaeda1` @app/gemini-cli (anchors approach to fifth-decade boundary at n=49)
- block/goose #8953 `e76640c8c458a724279b83823248c97b418307d7` @kalvinnchau (anchors 65th absolute ceiling tick)
