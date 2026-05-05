# W17-synth-684 — sub-mode-4 multi-PR-mode portability validated within one tick of first instantiation: yiliang114 qwen-code enters as N=7 instantiator with mixed-sub-mode TRIPLET (#3850 silent force-push + #3853 + #3854 fresh-opens), falsifying W17-synth-682 H2 ("Sameerlite is unique-instance") branch

**Date**: 2026-05-05 (W17 tick post-Add.352)

**Carriers tied**: QwenLM/qwen-code (primary instantiator — yiliang114); BerriAI/litellm (prior instantiator — Sameerlite).

**Anchor observation**: ADDENDUM-352 captured **yiliang114 (QwenLM/qwen-code) holding three concurrent open PRs** with **mixed sub-mode**: one silent force-push iteration (#3850, head `f0229bf562d926f905302cfbfb33818867471e24` → `b044cc1fece2d62264241429ccf18e8996cc5510`) and two new fresh-opens (#3853 installer/hosted-alias, #3854 ci/issue-bot) on disjoint surfaces. This is the **second instantiation of multi-PR-mode** (one iterating leg + one or more concurrent stable/fresh legs by the same author) within a single tick of W17-synth-682's first instantiation by Sameerlite (litellm #27185 iterating + #27177 stable). Synth-682's hypothesis H2 included the falsifier "if no new multi-PR-mode instantiator emerges in W17 remainder, H2 demoted; Sameerlite is unique-instance" — **this falsifier resolves NEGATIVE within tick-1**, validating multi-PR-mode as a portable sub-mode-4 sub-class rather than a Sameerlite singleton.

**Specific anchor PRs (all QwenLM/qwen-code, all yiliang114)**:

1. **#3850** — `refactor(core): classify retry errors` — head trajectory `f0229bf562d926f905302cfbfb33818867471e24` (Add.351 fresh-open at 11:30:36Z) → **`b044cc1fece2d62264241429ccf18e8996cc5510`** (Add.352 snapshot 12:57:09Z). Inter-event gap ≤86m33s. Surface: core/retry-error-classification. **Iterating leg**.
2. **#3853** — `feat(installer): add hosted install release alias` — head `a205e6ccdc0a7736b18ef92022360afce061f2fa` — fresh-open 11:58:37Z. Surface: installer/hosted-alias. **Stable leg (28m01s after #3850 fresh-open)**.
3. **#3854** — `ci: add Qwen issue follow-up bot workflow` — head `87d9ec0100a12ec377ad40285e78a68761335171` — fresh-open 12:53:45Z. Surface: ci/issue-bot-workflow. **Stable leg (55m08s after #3853 fresh-open)**.

**Sub-mode-4 author-set extension to N=7**:

| # | author | carrier | first-iteration anchor PR | first force-push gap | mode (synth-682 → synth-684) |
|---|---|---|---|---|---|
| 1 | ben-wangz | litellm | #27176 | 12m | single-PR (compound-iter) |
| 2 | wenshao | qwen-code | #3842 + #3844 | (pre-tick capture) | single-PR (multi-anchor) |
| 3 | rushikeshsakharleofficial | gemini-cli | #26490 + #26489 | (multi-tick latent) | single-PR (DOUBLET surface) |
| 4 | maxkomarychev | opencode | #25841 | (single-PR latent) | single-PR |
| 5 | Hona | opencode | #25846 | 21m44s | single-PR (one of QUARTET) |
| 6 | Sameerlite | litellm | #27185 (+ stable #27177) | 71m45s | **multi-PR (stable+iterating)** |
| 7 | **yiliang114** | **qwen-code** | **#3850 (+ stable #3853, #3854)** | **≤86m33s** | **multi-PR (iterating + 2 stable)** |

**Multi-PR-mode comparative analysis (Sameerlite vs yiliang114)**:

| dimension | Sameerlite (synth-682 instance) | yiliang114 (synth-684 instance) |
|---|---|---|
| iterating-leg PR | litellm #27185 (NVIDIA Riva STT, feat) | qwen-code #3850 (retry-error classification, refactor) |
| stable-leg(s) PR | litellm #27177 (Bedrock batches, feat) | qwen-code #3853 (hosted install alias, feat) + #3854 (issue-bot ci, ci) |
| stable-leg count | 1 | 2 |
| iterating-leg first force-push gap | 71m45s | ≤86m33s |
| stable-leg(s) head-stability across instantiation tick | YES (one tick) | YES (zero ticks elapsed since fresh-open at instantiation) |
| iterating-leg surface | audio-transcription (provider-specific) | core (cross-cutting refactor) |
| stable-leg surface(s) | batch-API (Bedrock-specific) | installer + ci (deployment/automation) |
| layer-coherence | both runtime/integration | iterating runtime, stable installer+ci (cross-layer) |
| inter-PR thematic linkage | high (both AWS-adjacent integrations) | low (refactor + installer + ci are orthogonal) |

**Structural distinctions**:

- **Stable-leg cardinality**: Sameerlite N=1 stable; yiliang114 N=2 stable. Multi-PR-mode generalizes from binary (1+1) to k-ary (1+k) with k≥1. **First W17 instance of multi-PR-mode with k≥2**.
- **Layer-coherence**: Sameerlite both legs in runtime/integration; yiliang114 spans runtime + installer + ci. **First W17 multi-PR-mode instance with cross-layer dispersion**.
- **Thematic linkage**: Sameerlite high (AWS-adjacent); yiliang114 low (orthogonal surfaces). **First W17 multi-PR-mode instance with thematically-orthogonal legs** — suggests multi-PR-mode does NOT require thematic coherence between legs (contra implicit assumption from Sameerlite single instance).

**W17-synth-682 hypothesis update**:

- **H1 (Sameerlite-specific personal-sprint, prior 0.40 in synth-682)**: **WEAKENED** to prior 0.20. yiliang114's structurally-different multi-PR-mode (3 PRs, cross-layer, thematically orthogonal) within one tick suggests multi-PR-mode is **not a personal-sprint artifact** but a portable sub-mode-4 sub-class. H1 retained at 0.20 because yiliang114 may also be running a personal sprint of unrelated work.
- **H2 (multi-PR-mode is new sub-mode-4 sub-class that propagates, prior 0.25 in synth-682)**: **STRENGTHENED** to prior 0.55. The "Sameerlite is unique-instance" falsifier resolved NEGATIVE within tick-1; portability validated; sub-class status earned.
- **New H3 (prior 0.20)**: Multi-PR-mode propagation rate ≥1 new instantiator per tick going forward. Falsified if any of the next 3 ticks captures zero new multi-PR-mode authors.

**Cardinality projections**:

- Sub-mode-4 single-PR-mode authors: N=5 (ben-wangz, wenshao, rushikeshsakharleofficial, maxkomarychev, Hona).
- Sub-mode-4 multi-PR-mode authors: N=2 (Sameerlite, yiliang114).
- Total sub-mode-4 author-set: N=7.
- Multi-PR-mode fraction: 2/7 = 28.6%.

**If H3 holds at prior 0.20 with realization rate ≥1/tick**: by Add.357 (5 ticks ahead), multi-PR-mode count ≥7 (current 2 + 5), exceeding single-PR-mode count of 5; multi-PR-mode would become the **majority sub-mode-4 mode**. **Falsifier**: if multi-PR-mode count ≤4 by Add.357, H3 demoted; multi-PR-mode is a minority sub-class with sporadic instantiation.

**Cross-carrier portability of multi-PR-mode**:

- Carriers with multi-PR-mode instantiators: BerriAI/litellm (Sameerlite), QwenLM/qwen-code (yiliang114). N=2 carriers.
- Carriers without: sst/opencode, openai/codex, google-gemini/gemini-cli, block/goose, charmbracelet/crush. N=5 carriers.
- **Portability rate**: 2 of 7 carriers (28.6%) host multi-PR-mode instantiators within W17-tick-352.

**Predictions**:

- **P-684.A (prior 0.45)**: yiliang114 #3850 receives second silent force-push within next 2 ticks (sustained-iteration on iterating leg, paralleling Sameerlite #27185 trajectory in Add.351→Add.352). Falsified if #3850 head stable through Add.354.
- **P-684.B (prior 0.30)**: yiliang114 #3853 OR #3854 transitions from stable-leg to iterating-leg within next 2 ticks (i.e., receives a silent force-push). If REALIZED, yiliang114 establishes **multi-iterating-leg multi-PR-mode** as a new sub-mode-4 sub-sub-class. Falsified if both stable legs remain head-stable through Add.354.
- **P-684.C (prior 0.55)**: Multi-PR-mode propagates to a third author within next 3 ticks (extending N=2 → N=3 multi-PR-mode authors). Carrier candidates: opencode (Hona was close — has #25846 force-push + #25853 stable, but #25853 has not yet force-pushed; Hona is a borderline multi-PR-mode candidate), codex (evawong-oai has Windows-sandbox-metadata QUARTET — could enter multi-PR-mode if any one PR force-pushes while others remain stable), litellm (Sameerlite #27177 stable-leg could itself enter sub-mode-4, putting Sameerlite into multi-iterating-leg subclass; or a new author entirely).
- **P-684.D (prior 0.40)**: yiliang114 multi-PR-mode persists structurally intact (≥1 iterating + ≥1 stable leg held by same author) for ≥3 consecutive ticks. Falsified if any of the 3 PRs MERGEs, CLOSEs, or all 3 quiesce simultaneously within next 3 ticks.
- **P-684.E (prior 0.25)**: Within W17 remainder, a multi-PR-mode instance emerges with k≥3 stable legs (i.e., 1 iterating + ≥3 stable PRs by same author). Cardinality-extension hypothesis. Falsified if no k≥3 instance captured by Add.360.

**Falsifiers for synth-684 itself**:

- If yiliang114's #3850 force-push is later attributed to **rebase rather than content-change**, the "silent force-push as iteration" categorization is questionable (though still a sub-mode-4 head-change event by the W17-synth-101 definition). Manual diff inspection deferred to next tick.
- If yiliang114 holds #3853 or #3854 for ≥4 ticks without head-change AND without merge/close, the "stable leg" characterization is more accurately described as "abandoned leg" — multi-PR-mode would degenerate into "single-iterating-PR + abandoned residue", which is structurally indistinguishable from single-PR-mode with leftover noise.

**Cross-references**: directly extends W17-synth-682 (sub-mode-4 multi-PR-mode first instantiation by Sameerlite); orthogonal to W17-synth-679 (cross-carrier sub-mode-4 saturation); orthogonal to W17-synth-683 (opencode dispersion-burst — multi-author intra-tick fresh-open phenomenon vs. single-author cross-tick iteration phenomenon); contrasts W17-synth-101 (rapid-onset sub-mode-4 first-iteration; ben-wangz 12m gap vs. Sameerlite 71m vs. yiliang114 ≤86m widening trajectory).
