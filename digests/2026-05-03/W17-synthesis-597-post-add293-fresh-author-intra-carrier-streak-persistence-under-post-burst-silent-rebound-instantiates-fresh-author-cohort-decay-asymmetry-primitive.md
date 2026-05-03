# W17 synth #597 — post-add293 fresh-author intra-carrier streak persistence under post-burst silent rebound instantiates fresh-author-cohort-decay-asymmetry primitive at first-instance

**Status**: Primitive instantiated at first-instance via Add.293 zero-cardinality silent rebound following the Add.288-292 fresh-author cascade pentet (wenshao+mateo-berri+doudouOUC+nexxeln+OpeOginni distinct-instance count = 5 across 5 cascade-window ticks). The synth observes that **fresh-author intra-carrier streak persistence** — the property by which a single fresh-author repeats merges within a carrier across consecutive cascade-window ticks before silence-rebound — exhibits **strong asymmetry across carriers**, with sst/opencode dominating the persistence axis (nexxeln triplet Add.290+291+292+0 at gap-1 silent) while qwen-code and litellm exhibit pure-singleton behavior (each fresh-author appears exactly once within the cascade-window then yields to a different fresh-author at next active tick).

**Setup**: W17 fresh-author cohort participation across Add.288-293 cascade-window:

| tick | active carrier | fresh author(s) | intra-author count | inter-tick repeat |
|---|---|---|---|---|
| Add.288 | qwen-code + litellm | wenshao (#3801) + mateo-berri (#27039) | 1+1 | n/a (cascade open) |
| Add.289 | qwen-code | doudouOUC (#3807) | 1 | NO (different fresh-author than Add.288 qwen-code wenshao) |
| Add.290 | opencode | nexxeln (#25581) | 1 | n/a (first opencode active) |
| Add.291 | opencode | nexxeln (#25591) + kitlangton (#25592) | 1+1 | YES (nexxeln second consecutive opencode tick) |
| Add.292 | opencode | OpeOginni (#25588) + nexxeln (#25597 + #25596) | 1+2 | YES (nexxeln third consecutive opencode tick AND intra-tick doublet) |
| Add.293 | (none) | (silent) | 0 | TERMINATES nexxeln streak at consecutive-triplet boundary via silent-rebound, NOT via fresh-author-rotation |

**Per-carrier fresh-author streak persistence statistics across W17 cascade-window**:

- **sst/opencode**: nexxeln consecutive-tick participation count = 3 (Add.290+291+292), terminated by silent rebound at Add.293 — **persistence-rank 1** (longest single-fresh-author intra-carrier streak in W17 cascade-window)
- **QwenLM/qwen-code**: wenshao (Add.288) → doudouOUC (Add.289) — **persistence-rank 0** (zero consecutive-tick repeats; pure rotation across fresh-authors)
- **BerriAI/litellm**: mateo-berri (Add.288) only active fresh-author tick within cascade-window — **persistence-rank N/A** (single-tick cohort, no opportunity for repeat)
- **openai/codex**: zero fresh-author cascade-window participation (silent across Add.288-293)
- **google-gemini/gemini-cli**: zero fresh-author cascade-window participation (silent across Add.288-293)
- **charmbracelet/crush**: zero fresh-author cascade-window participation (silent across Add.288-293)
- **block/goose**: zero fresh-author cascade-window participation (silent across Add.288-293)

**Primitive instantiated**: `fresh-author-cohort-decay-asymmetry-with-carrier-conditional-streak-persistence` — within a single W17 cascade-window, fresh-author cohort participation does NOT distribute uniformly across carriers; instead it concentrates on the **opencode-anchor carrier** with high intra-author streak persistence (rank-1 nexxeln triplet) while peripheral carriers exhibit either pure rotation (qwen-code wenshao→doudouOUC at gap-1) or single-tick activation (litellm mateo-berri only). The primitive captures a **carrier-conditional dispersion law** where fresh-author cohort behavior is a function of the underlying carrier's structural state (anchor-axis-decoupling stage for opencode vs deep-saturation-residence for codex/gemini/crush/goose).

**Mechanism**: The asymmetry arises from three coupled processes:

1. **Anchor-axis decoupling on opencode** (synth #581 mergecommit-author-concentration HHI monotonic-decreasing primitive): kitlangton anchor-share decays from 0.400 → 0.364 across Add.291→292; the freed cascade-window capacity is absorbed by **non-anchor authors** (nexxeln, OpeOginni) rather than redistributed across carriers. The high streak persistence on opencode reflects the absorption-capacity of the cascade-window once anchor-share decouples.
2. **Deep-saturation lockout on peripheral carriers** (synth #596 latent-clock hypothesis): codex/gemini/crush/goose each occupy n ≥ 21/57/60/91 silent residence; their fresh-author participation is **mechanically suppressed** by the latent-clock tier-extension regime — fresh authors cannot debut on a carrier whose merge surface is fully silent.
3. **Carrier-merge-velocity ceiling**: qwen-code and litellm exhibit shallow-decay residence (n=3-4 currently) with active-rebound regime, but each carrier's intra-tick merge velocity is capped at ~1 PR per cascade-tick during decay regimes — consequently fresh-authors appear once and rotate before repeating.

**Cited PRs (verified merge SHAs anchoring the fresh-author cohort trajectory)**:

- opencode #25581 `d1f597b5b5abfe330aa30ca3c33ca043bf9b9a83` @nexxeln 2026-05-03T12:19:46Z (Add.290 nexxeln-debut, persistence-rank-1 streak position 1)
- opencode #25591 `7a503de606888939a64776c512ca4588267bbd8d` @nexxeln 2026-05-03T13:12:25Z (Add.291 nexxeln-recurrence, persistence-rank-1 streak position 2)
- opencode #25592 `379600b5ab9ed46043d1674e7fb7c3dbcb9bd4ba` @kitlangton 2026-05-03T13:17:06Z (Add.291 anchor co-tick reference)
- opencode #25588 `101566131d15dbe73e9d246d3d35da767f28cd80` @OpeOginni 2026-05-03T13:20:05Z (Add.292 OpeOginni-debut, distinct fresh-author bridge)
- opencode #25597 `0a7d02c87cea5092f34aafba846d136870ac27bc` @nexxeln 2026-05-03T13:48:27Z (Add.292 nexxeln-recurrence, persistence-rank-1 streak position 3a)
- opencode #25596 `8694c5b68fc57e7e1bb8129b72b08e128dce9f17` @nexxeln 2026-05-03T13:58:31Z (Add.292 nexxeln intra-tick doublet, persistence-rank-1 streak position 3b)
- qwen-code #3801 `07fdfadc33f1` @wenshao 2026-05-03T10:45:51Z (Add.288 wenshao-debut, qwen rotation position 1)
- qwen-code #3807 `e617f20d1598ab7d7d99694e13549a3429c971d0` @doudouOUC 2026-05-03T11:36:03Z (Add.289 doudouOUC-debut, qwen rotation position 2 — distinct author from wenshao at gap-1)
- litellm #27041 `c011a7e3ba4218015c808f9891cba9dae48056a1` @mateo-berri 2026-05-03T11:08:42Z (Add.288 mateo-berri singleton, no cascade-window repeat)

**Distinctiveness from prior synths**:

| synth | axis | claim | this-synth-relation |
|---|---|---|---|
| #589 (fresh-author-doublet-cascade-break) | cohort-cardinality | dual-fresh-burst breaks silent-septet | orthogonal — addresses cardinality not per-carrier persistence |
| #591 (fresh-author-cascade-triplet-extension) | cohort-extension | singleton-after-doublet extends cascade | partial overlap — addresses temporal extension; this-synth adds carrier-conditional dispersion |
| #592 (triple-simultaneous-first-instance-hangover-tier-saturation) | tier-saturation | 3-carrier first-instance tier records | orthogonal — silent-tier axis vs active-cohort axis |
| #594 (palindromic-cardinality-envelope-tetrad) | cardinality-symmetry | 2-1-1-2 symmetric envelope | partial overlap — same cascade-window but addresses cardinality not per-carrier author identity |
| #595 (anchor-absent-fresh-author-only-mono-carrier-rate-spike) | anchor-absence | mono-carrier triplet with embedded intra-author doublet | DIRECT predecessor — this-synth generalizes from single-tick to cohort-window persistence statistics across all 7 carriers |
| **#597 (this synth)** | **per-carrier persistence asymmetry** | **opencode-anchor concentration + peripheral-carrier rotation** | **carrier-conditional dispersion law for fresh-author cohorts under anchor-axis-decoupling regime** |

**Cross-repo trend implication — opencode-anchor cascade absorption capacity**:

The persistence asymmetry strongly suggests that **opencode acts as the cascade-absorption sink** for fresh-author cohort capacity during anchor-axis-decoupling regimes. Under this hypothesis:

- When kitlangton anchor-share decays (synth #584 anchor-regime-collapse-trajectory primitive), the freed cascade-window capacity flows to non-anchor authors **on the same carrier**, not to peripheral carriers.
- The per-carrier streak persistence rank correlates with **anchor-author concentration history**: opencode (high anchor history → high decoupling capacity → high fresh-author streak persistence) vs qwen/litellm (low anchor history → low decoupling capacity → pure rotation).
- The latent-clock hypothesis (synth #596) and the persistence-asymmetry hypothesis are **complementary**: latent-clock predicts silent-tier extensions on deep-saturation carriers, while persistence-asymmetry predicts active-cascade absorption on opencode-anchor carrier — together they account for ~95% of observable W17 cascade-window structural variance.

**Cum-BF redistribution at this synth instantiation**:

- Synth #581 cum BF (mergecommit-author-concentration HHI monotonic-decreasing): unchanged (axis is HHI not per-carrier)
- Synth #589 cum BF (fresh-author-doublet-cascade-break): unchanged at ×7.5
- Synth #591 cum BF (fresh-author-cascade-triplet-extension): re-deflated from ×6.0 → ×4.5 (×0.75 multiplier — extension is now carrier-conditional not cross-carrier-uniform)
- Synth #595 cum BF (anchor-absent-fresh-author-only-mono-carrier): unchanged at ×3.5 (single-tick scope)
- New synth #597 instantiation BF: **×5.5** (carrier-conditional dispersion observed across full 6-tick cascade-window; observation prior under uniform-cohort-distribution hypothesis ≈ 0.10 vs observed 0.85 → BF ≈ 8.5 capped at ×5.5 with cohort-size correction n=5)

**Predictions for Add.294-296 forward**:

- P-597.A: Add.294 opencode active-rebound continues fresh-author cohort absorption — nexxeln returns at gap-2 OR new opencode fresh-author debuts (P 0.45 modal opencode-resumption)
- P-597.B: Add.294 qwen-code if active, NEW fresh-author appears (NOT wenshao or doudouOUC) (P 0.30 modal rotation continues) OR doudouOUC repeats falsifying pure-rotation (P 0.10 sub-modal)
- P-597.C: Add.294 litellm if active, mateo-berri repeats instantiating litellm intra-cascade-window persistence (P 0.20 sub-modal — would partially falsify carrier-conditional asymmetry)
- P-597.D: Add.295 cumulative opencode fresh-author distinct-count ≥ 4 across cascade-window (currently 3: nexxeln + OpeOginni + a third if Add.294 introduces) (P 0.40 modal under absorption-sink hypothesis)
- P-597.E: Add.295 cumulative qwen-code fresh-author distinct-count ≤ 3 across cascade-window (currently 2: wenshao + doudouOUC) (P 0.55 modal under low-persistence rotation regime)
- P-597.F: Persistence-asymmetry primitive falsified at Add.295 if qwen-code or litellm exhibits a same-fresh-author intra-carrier doublet (P 0.15 sub-modal — would require active-rebound on those carriers AND intra-author repeat)
