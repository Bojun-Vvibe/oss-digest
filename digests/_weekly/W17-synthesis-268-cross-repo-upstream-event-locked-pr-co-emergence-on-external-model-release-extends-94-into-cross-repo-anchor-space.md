# W17 Synthesis #268 — **Cross-repo upstream-event-locked PR co-emergence on external model release**: at Add.117 qwen-code #3693 tanzhenxin (`fix(core): set DeepSeek V4 context to 1M and output to 384K` `8807c026` MERGED 08:44:20Z) and litellm #26678 cdxiaodong (`Fix DeepSeek V4 reasoning_content in multi-turn chat` `a3dbffa8` OPEN 08:45:24Z) appear within **64 seconds of each other** (Δt=64s) on the **same external upstream model surface (DeepSeek V4)** despite being authored by independent developers in independent repos with independent CI/release cadences; this is preceded by litellm #26660 ishaan-berri (`fix(deepseek): DeepSeek V4 support - model registry, multi-turn thinking fix, no-prefix routing` OPEN since 04-28T01:29Z, ~8h+ STILL OPEN at Add.117 close) — establishing a **3-PR cross-repo DeepSeek-V4 cohort** spanning ≥7h on two repos with two different authors per repo (ishaan-berri/cdxiaodong on litellm, tanzhenxin on qwen-code); EXTENDS synth #94 (same-author same-product-surface diff disjoint back-to-back merge pair) into a **cross-repo / different-author / external-upstream-trigger** dimension where the unifying anchor is NOT the author or the repo but an **out-of-cohort upstream release event**; OPENS Pred KKK tracking 3rd/4th repo recurrence (codex / opencode / goose / gemini-cli) within 4 ticks; provides a **new cohort-tracking axis** (upstream-event-anchored, orthogonal to synth #262's 4-axis cardinality/activity/recurrence framework)

**Status:** EXTENDS synth #94 from same-author/same-repo into cross-repo external-anchor space. INTRODUCES upstream-event-anchored cohort as a 5th axis to synth #262 framework. OPENS new prediction class for cross-repo trigger-locking.

## Cross-references
- EXTENDS synth #94 same-product-surface co-touch — generalizes anchor from intra-repo author-driven to cross-repo upstream-driven.
- ORTHOGONAL to synth #262 4-axis evolution framework (cardinality, activity, recurrence, prime-axis decomposition) — adds 5th axis: **external-trigger anchor**.
- Cross-references synth #258/#260 deep-cohort framework — cross-repo trigger-locking can convert silent repos into active repos, breaking deep-cohort entry trajectories.
- Cross-references synth #266 tanzhenxin quartet — #3693 is BOTH the quartet's pentet-via-boundary AND the upstream-event-locked PR; dual structural role.
- Cross-references Pred KKK (NEW at Add.117): 3rd-repo DeepSeek-V4 PR within 4 ticks (deadline Add.121).

## Empirical basis (DeepSeek V4 cross-repo cohort, Add.115 → Add.117)

| Order | PR | Repo | Author | Surface | Timestamp | SHA | Δt from prior |
|-------|----|----|--------|---------|-----------|-----|----------------|
| 1 | #26660 | litellm | ishaan-berri | DeepSeek V4 model registry / multi-turn thinking / no-prefix routing | 2026-04-28T01:29:52Z (OPEN) | `c54ff386` | — (anchor — first DeepSeek-V4 surface PR in tracked cohort) |
| 2 | #3693 | qwen-code | tanzhenxin | DeepSeek V4 context window 1M / output 384K | 2026-04-28T08:44:20Z (MERGED) | `8807c026` | +7h14m28s |
| 3 | #26678 | litellm | cdxiaodong | DeepSeek V4 reasoning_content multi-turn chat | 2026-04-28T08:45:24Z (OPEN) | `a3dbffa8` | +1m04s (from #3693) |

**Key signature features:**
- **Cross-repo:** 2 distinct repos (litellm, qwen-code).
- **Cross-author within repo:** 2 distinct litellm authors (ishaan-berri, cdxiaodong).
- **Cross-author across repos:** all 3 PRs by 3 distinct authors (no shared author).
- **External upstream anchor:** all 3 PRs reference DeepSeek V4 — a model release external to all 6 tracked repos.
- **Two distinct sub-surface clusters within DeepSeek-V4 anchor:**
  - **Model registry / config surface** (#26660, #3693) — both encode DeepSeek-V4 capabilities into local model metadata.
  - **Inference protocol surface** (#26678) — handles reasoning_content tag preservation across chat turns.
- **Sub-tick co-emergence cluster:** PRs #3693 and #26678 emerge within **64 seconds of each other** despite being on different repos with no inter-repo coordination signal.

## Synth #268 claim — External upstream model releases create cross-repo PR co-emergence clusters with sub-tick same-minute timing on independent toolchains

**Statement:** When an external upstream model release occurs (e.g., DeepSeek V4), tracked agent toolchains exhibit cross-repo PR co-emergence with the following structural features:
1. **Sub-tick clustering:** ≥2 PRs across ≥2 repos by ≥2 different authors emerge within ≤5min of each other on the same upstream-anchored surface.
2. **Surface partition:** the cross-repo PR cohort partitions into **config/registry-surface** PRs (encoding model capabilities into local metadata) vs **protocol-surface** PRs (handling new wire-format quirks like reasoning tags, tool-call schemas, streaming envelope changes).
3. **Long-tail anchor lead:** the first PR in the cohort (the "anchor") typically opens ≥4h before the cluster — community contributors stage the initial integration; the sub-tick cluster represents convergence by other authors once the upstream behavior is community-confirmed.
4. **Cross-author exclusivity:** the anchor author and the sub-tick cluster authors are **disjoint** — the anchor author has already moved on to other surfaces by the time the cluster emerges. This contrasts with synth #94's same-author co-touch.

**Mechanism:**
- Upstream model releases create immediate integration pressure across all tracked agent toolchains because each toolchain wraps multiple model providers.
- The first integrator (anchor) does the **initial discovery work** — encoding capability bounds, identifying protocol quirks. This PR is exposed publicly via the open queue, providing a signal to other toolchain maintainers.
- Other toolchains' maintainers then **independently re-discover** the same upstream behavior in their own integration tests, leading to sub-tick co-emergence on the **same upstream model surface** in different repos.
- The 64s timing between #3693 (qwen-code) and #26678 (litellm) is too tight for cross-repo coordination — it implies independent same-minute decisions to file PRs, suggesting an **upstream-side trigger** (e.g., DeepSeek's own announcement timestamp) is the synchronizing event.

**This is non-obvious because:** synth #94 framed same-product-surface co-touch as an **intra-author** signature (same author touching disjoint files in same product surface back-to-back). Synth #268 demonstrates the **inter-author cross-repo** analog where the unifying anchor is an external event rather than internal authorial intent. The 4-axis framework of synth #262 (cardinality, activity, recurrence, prime-axis decomposition) tracks intra-cohort dynamics; synth #268 reveals that **inter-cohort upstream-event-locking** is a 5th axis that the framework does not currently capture.

## Predictions opened by synth #268

### Pred 268-1 (operationalizes Pred KKK) — 3rd repo DeepSeek-V4 PR within 4 ticks
**Statement:** A DeepSeek-V4-related PR (config, registry, protocol, or capability surface) opens or merges in any of {codex, opencode, goose, gemini-cli} within 4 ticks of Add.117 (deadline ≈ Add.121 ≈ 13:30Z).
**Falsifier:** 4 ticks elapse without a DeepSeek-V4 PR outside qwen-code/litellm.
**Confidence:** moderate — opencode and codex both have moonshot/anthropic/openai-class model registries that will eventually require DeepSeek-V4 support. goose is less likely (focused on agent runtime, not model registry). gemini-cli is dedicated to Gemini and unlikely.

### Pred 268-2 — Surface partition holds in 3rd-repo PR
**Statement:** If Pred 268-1 passes, the 3rd-repo PR will be a **config/registry-surface** PR (not a protocol-surface PR), because the protocol-surface concerns are typically handled by the litellm-class abstraction layer that downstream toolchains consume.
**Falsifier:** 3rd-repo PR is protocol-surface (e.g., reasoning_content, tool-call schema) rather than config-surface.

### Pred 268-3 — Anchor author exclusivity
**Statement:** ishaan-berri (the litellm anchor author of #26660) does NOT file additional DeepSeek-V4 PRs on qwen-code, codex, opencode, goose, or gemini-cli within 4 ticks. Anchor moves on; cluster is filled by independent authors.
**Falsifier:** ishaan-berri files cross-repo DeepSeek-V4 PR within Add.118-Add.121.

### Pred 268-4 — Anchor lead lower bound
**Statement:** The next observed cross-repo upstream-event-locked PR cohort (any external model release, not just DeepSeek) exhibits anchor lead ≥4h before sub-tick cluster emergence.
**Window:** next 30 ticks (deadline ≈ end of W17).
**Falsifier:** observed cohort with anchor lead <4h.

## Implications

1. **Cross-repo cohort tracking** is a 5th axis to add to the synth #262 framework. Current axes track intra-cohort dynamics (e.g., -berri authors within litellm); upstream-event anchors create inter-cohort dynamics across repos.
2. **Upstream model releases are observable signals** — sub-tick cross-repo PR co-emergence can be used to *infer* unannounced upstream releases. The DeepSeek V4 cohort signature suggests V4 was released within ≤8h before Add.117.
3. **Surface partition** (config/registry vs protocol) provides a triage heuristic — config-surface PRs propagate to all toolchains; protocol-surface PRs concentrate at the abstraction layer (litellm).
4. **Anchor-cluster temporal asymmetry** (≥4h lead, then sub-tick burst) is the inverse of synth #266's quartet rampage (anchor + final cluster within 1h41m by single author). Same shape, opposite directionality: synth #266 = single-author intra-repo time-spread cluster; synth #268 = multi-author cross-repo time-compressed cluster.
5. The 4-tick KKK window is tight. If Pred 268-1 passes, framework requires a 5th axis. If it fails, DeepSeek-V4 is anomalous and synth #268 needs broader empirical base before generalization.
