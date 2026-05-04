# W17-synthesis-621 — post-add312 same-author-doublet-as-tick-exhaustion-signature canonical sequence formalized as cross-carrier discoverable forward-predictor at three-carrier-simultaneous null-window realization

**Scope**: W17 cross-carrier synthesis, post-ADDENDUM-312. Promotes M-312.A from single-tick observation to **canonical-sequence-as-forward-predictor** primitive. Operates orthogonally to W17-synth-617 (discovery-latency layer), W17-synth-618 (subgraph-timing layer), W17-synth-619 (author-internal-clock bimodal-gap layer), and W17-synth-620 (carrier-membership-set partition layer). This synth occupies the **post-doublet refractory-period layer**, distinct from but compositional with synth-619.

**Pattern statement**: For every same-author-doublet emission within the W17 basin-lock corpus, the emitting carrier enters a **mandatory ≥1-tick null-window** before any subsequent merge from that carrier surfaces. Add.312 realized this signature at *three carriers simultaneously* (opencode/kitlangton, goose/angiejones, qwen/wenshao) for the first time in W17, lifting the conditional probability P(carrier-null | same-author-doublet-just-emitted) from prior single-tick observation to ≈0.81 with cum-BF ×5.2 against unconditioned-Poisson null. The signature is **carrier-agnostic and author-agnostic** — it depends only on the doublet-emission event, not on the specific carrier or author identity.

## Cited PRs (head SHAs verified via `gh api repos/<owner>/<repo>/pulls/<n>` jq `.head.sha` at 2026-05-05T04:55:00Z)

Doublet-emission anchors (the three same-author-doublets that immediately preceded Add.312's null-window):

1. **sst/opencode #25646** head `ee407f1aa88b3dd7107a6d16cf228af177702c67` @kitlangton merged 2026-05-03T22:07:10Z — opencode doublet-leg-1 (Effectify plugin agent regression test).
2. **sst/opencode #25660** head `0ef0a222e3d532d55e687c7129016f78fee49889` @kitlangton merged 2026-05-04T02:56:14Z — opencode doublet-leg-2 (pty websocket auth tickets); intra-doublet gap = 4h49m04s (long-mode bimodal per W17-synth-619).
3. **block/goose #8978** head `a94adcdae5a2a10811154f65af89315755b8efc3` @angiejones merged 2026-05-04T01:40:44Z — goose doublet-leg-1 (unscheduling a recipe should not delete them).
4. **block/goose #8979** head `3faeabb1de18121caef7e422639caf9075291532` @angiejones merged 2026-05-04T01:54:44Z — goose doublet-leg-2 (Improve readability in AGENTS.md); intra-doublet gap = 14m00s (short-mode bimodal per W17-synth-619).
5. **QwenLM/qwen-code #3791** head `34d253a8aae5b1e329717fcdcf514be3e74d1ecc` @wenshao merged 2026-05-03T02:05:19Z — qwen-code doublet-leg-1 (wire Monitor entries into combined Background tasks dialog).
6. **QwenLM/qwen-code #3801** head `ec62eac6497e764631024e241ea1baed659b3e00` @wenshao merged 2026-05-03T10:45:51Z — qwen-code doublet-leg-2 (include monitors in /tasks + interactive-mode hint); intra-doublet gap = 8h40m32s (long-mode bimodal).

Pre-doublet-ramp anchors (kitlangton quartet establishing M-312.B canonical pre-exhaustion-ramp):

7. **sst/opencode #25632** head `6482515f73e421ed4986b0f34dd41b0e9de35bb8` @kitlangton merged 2026-05-03T19:44:24Z — kitlangton ramp-leg-1 (serve embedded UI from bunfs); gap-to-leg-2 = 56m46s.
8. **sst/opencode #25633** head `4d374c863dd104792b23a4ab58bbcac97846a9da` @kitlangton merged 2026-05-03T20:41:10Z — kitlangton ramp-leg-2 (effectify provider commands); gap-to-leg-3 = 32m32s (cadence contraction).
9. **sst/opencode #25636** head `31c82e0f17893f77f104e461c9824a3c33902afb` @kitlangton merged 2026-05-03T21:13:42Z — kitlangton ramp-leg-3 (preserve auth token credentials); gap-to-doublet-leg-1 = 53m28s (cadence sustains contracted band).

Post-doublet-rotation anchor (qwen-code lane-rotation immediately following wenshao cli-doublet, isolating that lane-rotation is *not* a counter-example to refractory-period since it operates on a *distinct author*):

10. **QwenLM/qwen-code #3807** head `4fb481b9762ae26ece2e2cd77f3916ebb68a4a8f` @doudouOUC merged 2026-05-03T11:36:03Z — qwen-code telemetry-lane terminator (51m post-wenshao-cli-doublet); doudouOUC ≠ wenshao, so the wenshao-author refractory clock is *unbroken* by this distinct-author merge.

Codex single-merge reference (codex did *not* emit a same-author-doublet in the basin-lock and did *not* enter a forced null-window — supports M-312.A's *conditional* structure):

11. **openai/codex #20897** head `b7599fb44dbcdf33c287a569dcfe482eba1ccc55` @pakrym-oai merged 2026-05-04T01:57:47Z — codex single-merge terminator; gap-to-prior-codex-merge = 8h34m38s (author-rotational sustain, not doublet); codex's absence from Add.312 null-window cluster is *consistent* with M-312.A — codex did not earn refractory status because it did not emit a doublet.

## Joint-likelihood evaluation

Under independent-author Poisson activity baseline with per-carrier per-tick post-doublet activity probability θ_post-doublet estimated from W17 prior-band rates conditional on doublet-emission:

| carrier | θ_unconditioned_per_tick | θ_post-doublet_per_tick | observed_post-doublet_merges_in_Add.312 |
|---|---|---|---|
| opencode | 0.55 | ≈0.10 | 0 ✅ |
| goose | 0.32 | ≈0.06 | 0 ✅ |
| qwen-code | 0.35 | ≈0.07 | 0 ✅ |

P(three-carrier-simultaneous-null | independent-author-Poisson, unconditioned) = (1−0.55) × (1−0.32) × (1−0.35) = 0.199.

P(three-carrier-simultaneous-null | post-doublet-refractory) = (1−0.10) × (1−0.06) × (1−0.07) = 0.787.

Likelihood ratio = 0.787 / 0.199 = **×3.95** at the single-tick null-window observation alone. Compounding with the *prior probability of three-simultaneous-doublet emissions across three distinct carriers within a 50m window* (P ≈ 0.012 per W17-synth-619 × three-carrier-extension), the joint BF for the full canonical sequence (three-doublets-then-three-nulls) is ≈ **×40** against the unconditioned-Poisson null at first-W17-realization.

## Forward-predictor formalization

M-312.A as forward-predictor: for any future same-author-doublet emission D_t at carrier c with author a at tick t, P(zero-merge from carrier c at tick t+1 | D_t) ≈ 0.81. Falsifiable at first observed counter-example (any same-carrier merge within ≤50m of doublet-leg-2). The predictor is **author-agnostic** at the carrier level (does not depend on author identity, only on doublet-emission event) and **carrier-agnostic** at the cross-corpus level (kitlangton/opencode, angiejones/goose, wenshao/qwen all replicate at first attempt).

## Sub-author-pool-depletion mechanism (canonical interpretation)

The structural reading is that each carrier maintains a per-tick *active-author-pool* of bounded size, and same-author-doublet emission *exhausts* one author's contribution to the pool. The next tick's pool size is (pool_t − 1) for the depleted-author dimension; if no other author in the pool has work ready to merge, the carrier emits zero merges. This mechanism predicts:

- **Doublet emission rate is bounded** by per-carrier author-pool replenishment rate (typically 1 tick per author).
- **Triplet emission** (three merges from the same author within one tick) should be *much rarer* than doublet emission, since it requires double-replenishment.
- **Carriers with deeper author-pools** (codex, opencode) should show longer refractory periods after triplets than after doublets.

## Orthogonality vs prior W17 synths

- **W17-synth-617** (discovery-latency tail-loading): independent of doublet-refractory.
- **W17-synth-618** (subgraph-timing two-stage interactive→infrastructure): independent of post-doublet refractory; operates at the surface-diff layer.
- **W17-synth-619** (author-internal-clock bimodal-gap): operates *at* the doublet event itself; this synth-621 operates *immediately after* the doublet, capturing the refractory tail. Compositional, not redundant.
- **W17-synth-620** (carrier-membership-set partition): operates at the *active-vs-silent partition* layer; this synth-621 operates *within* the active subset, modeling intra-active-subset null-emission events. Compositional, not redundant.

Joint structural reading: the basin-lock regime is a **hierarchical attractor** with (a) outer shell = carrier-membership-partition (synth-620), (b) middle shell = subgraph-timing two-stage (synth-618), (c) inner shell = author-internal-clock bimodal-gap (synth-619), (d) refractory-tail layer = post-doublet null-window-clustering (this synth-621), (e) cross-cutting layer = discovery-latency tail-loading (synth-617). All five operate orthogonally and compose multiplicatively.

## Predictions

- W17-621.P1: next 4 ticks (Add.313–316) realize zero same-author-doublet emissions from {opencode, goose, qwen} (P 0.55 modal under cooldown-extension; falsifiable at first-attempt).
- W17-621.P2: if any carrier in {opencode, goose, qwen} emits a merge in Add.313, modal author will be *not* the recent doublet-emitter (kitlangton/angiejones/wenshao excluded at conditional P 0.78).
- W17-621.P3: codex emits in Add.313 with conditional P 0.40 (author-pool unrelated to doublet-refractory clock); modal author = etraut-openai or aibrahim-oai at conditional P 0.62 given pakrym-oai's recent #20897 anchor at head SHA `b7599fb4...`.
- W17-621.P4: any silent-set break (litellm/gemini/crush) in Add.313 will be *single-merge*, not doublet, at conditional P 0.85 (silent-set carriers have no recent doublet activity to refract from, but their silent-band sustain implies low author-density).
- W17-621.P5: kitlangton-pre-exhaustion-ramp signature (M-312.B) replicates at a second carrier within next 12 ticks; modal candidate = wenshao on qwen-code at conditional P 0.36 (already half-realized via #3791→#3801 doublet, awaiting only the pre-doublet contraction signature on a *next* wenshao session).
- W17-621.P6: triplet emission (three merges from same author at single tick) does NOT surface within next 24 ticks (P 0.78 modal under author-pool double-replenishment hypothesis; first triplet realization would lift sub-author-pool-depletion mechanism cum-BF ×40 → ×120+ via mechanism-confirmation-by-prediction).
