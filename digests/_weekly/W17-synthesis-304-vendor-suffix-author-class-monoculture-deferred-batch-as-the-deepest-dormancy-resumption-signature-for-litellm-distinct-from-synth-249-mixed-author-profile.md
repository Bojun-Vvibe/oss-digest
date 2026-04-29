# W17 Synthesis #304 — Vendor-suffix author-class-monoculture deferred-batch as the deepest-dormancy-resumption signature for litellm, distinct from synth #249 mixed-author profile

**Thesis.** Synth #249 framed litellm deferred-batch resumption as a doublet inside 2m39s after a 4h43m pause with author-class stratification (mixed vendor-suffix + outsider). ADDENDUM-136's litellm silence-break at the n=6 W17 record dormancy depth (5h45m+ post-#26675 yuneng-berri Add.130) is structurally distinct: a **3-merge vendor-suffix-monoculture deferred-batch** with monotonically contracting cadence (42m14s → 16m05s) and zero outsiders. The depth-dependent transformation — mixed→monoculture, doublet→triplet, sub-3-min→sub-1h cadence — is the new evidence.

**Evidence chain.**
- Add.130-135: litellm silent for n=6 consecutive ticks, depth growth ~37m/tick → ~65m/tick (window-width-driven), reaching 5h45m+ at Add.135 close. Synth #216 4-tier dormancy regime predicted unbounded depth growth.
- Add.136 in-window litellm merges (chronological): ryan-crabbe-berri #26721 `89f0d402` 23:23:22Z `fix(tests): replace deprecated Bedrock Claude 3.7 Sonnet model ID`; Michael-RZ-Berri #26629 `0520d5ce` 00:05:36Z `[Fix] Unify cost calc in success_handler dict and typed branches`; krrish-berri-2 #26727 `fd32f29e` 00:21:41Z `Revert "[Feat] Lazy-load optional feature routers on first request"`.
- All 3 authors are vendor-suffix internal maintainers (`-berri`, `-berri-2`, `-RZ-Berri`). Zero non-suffix outsiders. Subsystems disjoint: tests/bedrock-model-id, cost-calc/success-handler, optional-feature-routers/revert.
- Inter-merge spacings 42m14s, 16m05s — monotonically contracting *within* the batch (consistent with synth #249's contraction direction but two orders of magnitude longer in absolute span).
- Depth-axis comparison: synth #249 at 4h43m → doublet 2m39s span, mixed authors. Synth #304 at 5h45m+ → triplet 58m19s span, pure vendor-suffix. **Depth-cardinality coupling**: deeper dormancy → larger batch cardinality and broader batch span; depth-author-class coupling: deeper dormancy → narrower author class.

**Distinctness from neighbouring synths.** Synth #226 outsider-author silence-break-vector for staging queues is *refuted* at this depth — the deepest litellm dormancy is broken exclusively by vendor-suffix internals, not outsiders. Synth #281 dispersed multi-author deferred-batch covers cross-repo dispersion; here dispersion is contained within a single author class within a single repo. Synth #255 deferred-batch as canonical resumption mechanism is *extended* — synth #304 specifies the depth-dependent author-class collapse axis missing from #255.

**Falsifiability.**
- (a) If Add.137 litellm silence (post-#26727) is broken by a non-vendor-suffix outsider within <1h, synth #304's "vendor-suffix monoculture is depth-dependent" claim weakens to a tick-local accident.
- (b) If Add.137-139 (forward 3 ticks) repeatedly resume litellm silence with vendor-suffix monoculture at any depth (not just record depth), the depth-coupling collapses and the regime becomes simply "litellm post-Add.130 is internal-maintainer-only" — orthogonal to dormancy depth.
- (c) If a future litellm record-depth dormancy resumes with a doublet not triplet (or a quadruplet), the depth-cardinality coupling refines toward a continuous monotone rather than discrete doublet/triplet jumps.

**Cross-link.** Anchored in ADDENDUM-136 events 1, 6, 7, 8. References synths #216 (falsified 4-tier dormancy), #226 (refuted at deepest band), #249 (parent deferred-batch model), #255 (canonical resumption framing being extended), #281 (cross-repo dispersion contrast).
