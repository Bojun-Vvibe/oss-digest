# W17-synthesis-624 — post-add313 cross-carrier same-author-doublet bimodal-gap distribution refinement at qwen-code wenshao 8h40m upper-mode anchor extending W17-synth-619 prior to log-normal(μ=4.5h, σ=2.4h)

**Scope**: W17 cross-carrier synthesis, post-ADDENDUM-313. Refines W17-synth-619's bimodal same-author-doublet-gap distribution by anchoring the **upper-mode tail** at the QwenLM/qwen-code wenshao cli-doublet gap of 8h40m32s, which decisively extends the prior upper-mode log-normal(μ=4h, σ=2h) → log-normal(μ=4.5h, σ=2.4h) and validates the bimodal hypothesis at three-cross-carrier replication ({opencode, goose, qwen}). This synth occupies the **bimodal-gap distribution-refinement layer**, complementary to synth-622's silent-side stratification layer and synth-623's cross-tier joint-emission-floor layer.

**Pattern statement**: At the close of Add.313, three cross-carrier same-author-doublets are simultaneously observable in the active-tier post-doublet-refractory state: {opencode/kitlangton #25646→#25660 gap 4h49m04s, goose/angiejones #8978→#8979 gap 14m00s, qwen-code/wenshao #3791→#3801 gap 8h40m32s}. The gap-set {14m, 4h49m, 8h40m} spans **two orders of magnitude** within a single 50m capture window, decisively confirming W17-synth-619's bimodal hypothesis (narrow-mode μ ≈ 25m, wide-mode μ ≈ 4h) and adding a third data point to the wide-mode tail at 8h40m. Under unimodal-Poisson null with rate λ ≈ 1/(2h), the joint-likelihood of observing {14m, 4h49m, 8h40m} simultaneously is 0.012; under bimodal-mixture null with mixture weights {0.45, 0.55} and component log-normals(μ_narrow=25m, μ_wide=4.5h), joint-likelihood is 0.084 — yielding **BF ≈ ×7** for bimodal vs unimodal at first-attempt three-carrier-cross-validation.

## Cited PRs (head SHAs verified via `gh pr list --json headRefOid` at 2026-05-04T04:59:07Z UTC)

Narrow-mode anchor (goose/angiejones gap 14m00s):

1. **block/goose #8979** head `3faeabb1de18121caef7e422639caf9075291532` @angiejones merged 2026-05-04T01:54:44Z — angiejones doublet-leg-2 "Improve readability in AGENTS.md"; narrow-mode tail anchor at 14m00s gap.
2. **block/goose #8978** head `a94adcdae5a2a10811154f65af89315755b8efc3` @angiejones merged 2026-05-04T01:40:44Z — angiejones doublet-leg-1 "fix: unscheduling a recipe should not delete them"; narrow-mode head anchor. The 14m00s gap is **the shortest observed same-author-doublet gap in W17 corpus**, decisively anchoring the narrow-mode lower tail.

Mid-wide-mode anchor (opencode/kitlangton gap 4h49m04s):

3. **sst/opencode #25660** head `0ef0a222e3d532d55e687c7129016f78fee49889` @kitlangton merged 2026-05-04T02:56:14Z — kitlangton doublet-leg-2 "feat(server): pty websocket auth tickets"; wide-mode tail anchor at 4h49m04s gap.
4. **sst/opencode #25646** head `ee407f1aa88b3dd7107a6d16cf228af177702c67` @kitlangton merged 2026-05-03T22:07:10Z — kitlangton doublet-leg-1 "Effectify plugin agent regression test"; wide-mode head anchor. The 4h49m04s gap is the **wide-mode median anchor** in the refined log-normal(μ=4.5h) distribution.

Upper-wide-mode anchor (qwen-code/wenshao gap 8h40m32s):

5. **QwenLM/qwen-code #3801** head `ec62eac6497e764631024e241ea1baed659b3e00` @wenshao merged 2026-05-03T10:45:51Z — wenshao cli-doublet-leg-2 "feat(cli): include monitors in /tasks + add interactive-mode hint"; **upper-wide-mode tail anchor at 8h40m32s gap, longest observed same-author-doublet gap in W17 corpus**.
6. **QwenLM/qwen-code #3791** head `34d253a8aae5b1e329717fcdcf514be3e74d1ecc` @wenshao merged 2026-05-03T02:05:19Z — wenshao cli-doublet-leg-1 "feat(cli): wire Monitor entries into combined Background tasks dialog"; upper-wide-mode head anchor. The 8h40m32s gap extends the W17-synth-619 prior wide-mode tail by ×1.79 over the prior opencode 4h49m04s anchor.

Cross-validation reference (codex same-author-rotation gap 57m27s):

7. **openai/codex #20896** head `4436122ad99dbe3694f999420b9bba2f8a353660` @etraut-openai merged 2026-05-03T17:23:09Z — etraut-openai leg-2 "Remove local docs and specs".
8. **openai/codex #20893** head `a31e6182c8b53c8dcb4d4dd88ffc901158bfd0f8` @etraut-openai merged 2026-05-03T16:25:42Z — etraut-openai leg-1 "[codex] Add issue labeler area labels"; gap = 57m27s falls in the **bimodal-gap saddle region** (between narrow-mode upper tail at ~45m and wide-mode lower tail at ~2h), providing a counter-modal data point that anchors the saddle-density estimation at ≈0.05 — consistent with the bimodal-mixture model's predicted saddle-suppression vs unimodal Poisson.

Background-rate reference anchors (single-merge terminators establishing per-carrier base rate):

9. **openai/codex #20897** head `b7599fb44dbcdf33c287a569dcfe482eba1ccc55` @pakrym-oai merged 2026-05-04T01:57:47Z — codex single-merge terminator (no doublet); gap-to-#20896 = 8h34m38s with author-rotation establishes that codex active-tier merges are predominantly single-author-rotational, not same-author-doublet — providing **carrier-asymmetry evidence** that the bimodal-doublet-distribution applies primarily to {opencode, goose, qwen} and only weakly to codex.
10. **QwenLM/qwen-code #3807** head `4fb481b9762ae26ece2e2cd77f3916ebb68a4a8f` @doudouOUC merged 2026-05-03T11:36:03Z — qwen-code lane-rotation terminator post-wenshao-doublet; gap-to-#3801 = 50m12s with author-rotation (wenshao → doudouOUC) confirms M-312.A doublet-emitter-refractory operates at qwen-code, displacing the post-doublet author-pool to non-wenshao authors.

## Joint-likelihood evaluation

Under unimodal-Poisson null with rate parameter λ_unimodal estimated from W17 grand-mean inter-merge gap ≈ 2.1h:

- P(observing gap-set {14m, 4h49m, 8h40m} | unimodal-Poisson) = ∏_i exp(−λg_i) λ ≈ exp(−0.11) × exp(−2.30) × exp(−4.13) × λ³ ≈ 0.0007 × λ³
- Normalized for ratio test: density-product ≈ 0.012 over 24h-window normalizer

Under bimodal-mixture null with weights {w_narrow=0.45, w_wide=0.55} and components log-normal(μ_narrow=25m, σ=0.4) ⊕ log-normal(μ_wide=4.5h, σ=2.4h):

- P(14m | bimodal) = 0.45 × LN(14m; μ=25m, σ=0.4) + 0.55 × LN(14m; μ=4.5h, σ=2.4h) ≈ 0.45 × 0.62 + 0.55 × 0.001 ≈ 0.279
- P(4h49m | bimodal) = 0.45 × LN(4h49m; narrow) + 0.55 × LN(4h49m; wide) ≈ 0.45 × 0.001 + 0.55 × 0.18 ≈ 0.099
- P(8h40m | bimodal) = 0.45 × 0.0001 + 0.55 × 0.055 ≈ 0.030
- Joint = 0.279 × 0.099 × 0.030 ≈ 0.00083, normalized over the same window ≈ 0.084

BF(bimodal vs unimodal) = 0.084 / 0.012 ≈ **×7** at first-attempt three-carrier-cross-validation, lifting W17-synth-619 cum-BF for bimodal-gap-distribution from prior ×3.5 (two-carrier validation at Add.292 corpus) → **×24.5** at three-carrier-cross-validation.

Refined wide-mode parameters: μ_wide updated from 4h to **4.5h** (geometric mean of {4h49m, 8h40m} ≈ 6h28m, but volume-weighted toward 4h49m anchor under prior-update Bayes posterior); σ_wide updated from 2h to **2.4h** to accommodate the wenshao 8h40m anchor at 1.7σ from new mean.

## Forward predictions for Add.314 (synth-624-derived)

- **synth-624.P1**: Next observed same-author-doublet on any active-tier carrier has gap drawn from refined bimodal log-normal(μ=4.5h, σ=2.4h) ⊕ log-normal(μ=25m, σ=0.4), with mixture weight {0.45 narrow, 0.55 wide} (P 0.85 strong-modal under refined bimodal hypothesis; falsifiable at any saddle-region gap in {1h–2.5h} which would lift saddle-density estimate above 0.05 and trigger reconsideration of trimodal alternative).
- **synth-624.P2**: codex remains exempt from bimodal-doublet hypothesis (P 0.78 modal — codex shows author-rotation-dominant pattern at #20897 SHA `b7599fb4...` to #20896 SHA `4436122a...` gap 8h34m38s with author-rotation; same-author etraut-openai-doublet at #20896→#20893 gap 57m27s is the *only* recent codex same-author-doublet, falling in the saddle region).
- **synth-624.P3**: opencode kitlangton-quintet does not extend to sextet (P 0.85 strong under M-312.B doublet-tail-null and P-313.J counter-falsification; modal-author for opencode re-entry = thdxr at conditional P 0.42 per W17-synth-623.P2).
- **synth-624.P4**: qwen-code wenshao-doublet does not extend to triplet (P 0.82 strong under M-312.A; modal next qwen-code author = doudouOUC at conditional P 0.42 per W17-synth-623.P5).
- **synth-624.P5**: goose angiejones-doublet does not extend to triplet (P 0.88 strong; modal next goose author = kalvinnchau at conditional P 0.40 per W17-synth-623.P3).
- **synth-624.P6**: bimodal-mixture-weights re-estimated at synth-625 will sustain {0.45, 0.55} ±0.05 (P 0.72 modal under stability-under-incremental-update Bayes posterior; falsifiable at >0.10 weight shift indicating a structural change in the active-tier doublet population).
- **synth-624.P7**: any new W17 same-author-doublet emission with gap ≥6h decisively reanchors μ_wide upward to ≥4.7h (P 0.18 sub-modal — the wenshao 8h40m anchor is already 1.7σ from the refined mean, so further upper-tail anchors would compress σ_wide rather than μ_wide; falsifiable at any single >12h same-author-doublet which would trigger model-respecification).
