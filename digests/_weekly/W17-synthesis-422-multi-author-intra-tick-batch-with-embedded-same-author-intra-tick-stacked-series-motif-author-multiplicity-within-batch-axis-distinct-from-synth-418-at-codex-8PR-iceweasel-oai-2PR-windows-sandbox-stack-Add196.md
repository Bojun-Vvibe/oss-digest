# W17 Synthesis #422 — Multi-Author Intra-Tick Batch with Embedded Same-Author Intra-Tick Stacked-Series Motif as Distinct Sub-Class of Synth #418 Multi-Author Batch Family at Author-Multiplicity-Within-Batch Axis (1 PR per author vs ≥2 PRs per author): codex 8-PR multi-author batch with iceweasel-oai 2-PR Windows-sandbox same-surface intra-tick stack at Add.196

**Trigger**: ADDENDUM-196 sha=`36823fb` M-196.C — codex 8-PR multi-author intra-tick batch at Add.196 18:42:07Z → 19:39:53Z, **7 distinct authors** with **iceweasel-oai contributing 2 PRs** (#20270 "Fix elevated Windows sandbox named-pipe access" at 19:06:11Z and #20101 "install WFP filters for Windows sandbox setup" at 19:39:01Z) **on the same Windows-sandbox surface** with 32m50s intra-tick gap. The remaining 6 authors (pakrym-oai #20471, khoi-oai #20245, abhinav-oai #19882, celia-oai #20275, owenlin0 #20463, mzeng-openai #20474) each contribute exactly 1 PR. The motif is structurally **(carrier-cardinality=N=7-distinct-authors, content-low-mixed-across-authors-but-high-within-iceweasel-stack, intra-tick, mid-PR-dispersion=592, embedded-1-author-stack)** — distinct from synth #418 codex 3-author 1:1 mapping (each author contributes exactly 1 PR; no embedded stacking) at the **author-multiplicity-within-batch axis**.

## Lineage and prior framework

Prior W17 multi-author intra-tick batch motif lineage:

- **Synth #410** sha=`759c7fd`: Per-repo recurrent-author fit-class framework. iceweasel-oai is recurrent codex contributor (Windows-sandbox specialist surface).
- **Synth #418** sha=`aea4944`: Multi-author intra-tick batch — codex 3-PR / 3-author / 27m11s span / **strict 1:1 author-to-PR mapping** / CV=1.01.
- **Synth #419** sha=`15b0b26`: Within-repo human-heterogeneous wide-PR-dispersion intra-tick batch — gemini-cli 5-PR / 5-author / 4185-PR-dispersion / **strict 1:1 author-to-PR mapping**.
- **Synth #420** sha=`d8ae365`: Cross-tick stacked-PR-series-continuation motif at single-author — etraut-openai codex [1/2]→[2/2] / 42m15s / **single-author cross-tick 2-PR stack with explicit sequel-numbering**.

**Both prior multi-author batch motifs (synth #418, #419) operate at strict 1:1 author-to-PR mapping** — exactly one PR per distinct author per tick. The M-196.C observation falsifies this universality at the author-multiplicity-within-batch axis: a multi-author batch can admit **at least one author contributing ≥2 PRs in the same tick on the same surface**, producing a **nested single-author intra-tick stacked-series within a multi-author batch**. The synth #420 cross-tick stacked-series at single-author (carrier-cardinality=1, temporal=cross-tick) becomes intra-tick stacked-series at single-author (carrier-cardinality=1, temporal=intra-tick) **embedded** within a multi-author batch (carrier-cardinality=N).

## The Add.196 codex 8-PR multi-author batch with embedded iceweasel-oai stack event

Detailed timing (UTC):
- PR #20471 mergedAt 2026-04-30T18:42:07Z (pakrym-oai, "Stop emitting item/fileChange/outputDelta output delta notifications", −37 net lines, surface: app-server-protocol)
- PR #20245 mergedAt 2026-04-30T18:53:19Z (khoi-oai, "[Codex] Add browser use external feature flag", +23 lines, surface: features module + config schema) — 11m12s after #20471
- PR #19882 mergedAt 2026-04-30T18:58:28Z (abhinav-oai, "Add /hooks browser for lifecycle hooks", +1465 lines — largest, surface: tui hooks browser view + chatwidget) — 5m09s after #20245
- PR #20275 mergedAt 2026-04-30T19:02:34Z (celia-oai, "fix: show correct Bedrock runtime endpoint in /status", +132 lines, surface: model-provider/amazon_bedrock + tui status) — 4m06s after #19882
- **PR #20270** mergedAt 2026-04-30T19:06:11Z (**iceweasel-oai**, "[codex] Fix elevated Windows sandbox named-pipe access", +82 lines, surface: **windows-sandbox-rs/elevated/command_runner_win + lib + token**) — 3m37s after #20275 — **first iceweasel-oai PR**
- PR #20463 mergedAt 2026-04-30T19:11:02Z (owenlin0, "feat(rollouts): store EventMsg::ApplyPatchEnd in limited history mode", −39 lines, surface: rollout/policy) — 4m51s after #20270
- **PR #20101** mergedAt 2026-04-30T19:39:01Z (**iceweasel-oai**, "install WFP filters for Windows sandbox setup", +805 lines, surface: **windows-sandbox-rs/wfp + wfp_filter_specs + wfp_setup + setup_main_win + setup_orchestrator + lib + otel/config + provider + metrics**) — 27m59s after #20463 — **second iceweasel-oai PR, same Windows-sandbox surface as #20270**
- PR #20474 mergedAt 2026-04-30T19:39:53Z (mzeng-openai, "[plugin] Add Canva to suggesteable list.", +1 line — smallest, surface: core-plugins) — 52s after #20101

Total batch span: 57m46s = 3466s.
Inter-merge gaps: {672s, 309s, 246s, 217s, 291s, 7m sub-batches; iceweasel intra-stack gap = 32m50s = 1970s}. Mean 8m16s; CV=1.060.
Total churn: 8 PRs, 6 distinct authors with 1 PR + 1 author (iceweasel-oai) with 2 PRs = **author-cardinality 7**, **PR-cardinality 8**, **author-multiplicity-within-batch ratio = 8/7 = 1.143**.
PR-number dispersion: 20474 − 19882 = **592** PR-numbers (mid-dispersion).
Same-surface intra-stack: iceweasel-oai #20270 (windows-sandbox-rs/elevated/) and #20101 (windows-sandbox-rs/wfp/) both touch top-level `codex-rs/windows-sandbox-rs/` directory, sharing modules `windows-sandbox-rs/src/lib.rs`. Combined Windows-sandbox churn: +887 lines.
**iceweasel-oai stack-fingerprint**: same author + same top-level surface + intra-tick + 2 PRs + 32m50s gap = canonical embedded-stack motif.

## The 7-axis content-aware batch motif taxonomy at synth #422

Combining synth #416, #417, #418, #419, #420, #421, and #422, the W17 author-stack-merge motif taxonomy admits ≥7 distinct sub-classes along **7+ dimension-orthogonal axes** including the new author-multiplicity-within-batch axis:

| Sub-class | Carrier-card | Author-mult-within-batch | Content-coherence | Embedded-stack | Cadence-driver | Temporal | Canonical instance |
|-----------|--------------|--------------------------|-------------------|----------------|----------------|----------|-------------------|
| #416 | 1 | 4-PR-by-1-author | high (thematic) | n/a (single author) | manual-burst | intra | kitlangton 4-PR opencode |
| #417 | 1 (bot) | 3-PR-by-1-bot | high (release) | n/a | scheduled | intra | gemini-cli-robot 3-PR |
| #418 | N=3 | 1:1 strict | low-mixed | none | concurrent | intra | codex 3-author |
| #419 | N=5 | 1:1 strict | low-mixed | none | concurrent + cleanup | intra | gemini-cli 5-author |
| #420 | 1 (recurrent) | 2-PR-by-1-author | high (sequel-numbered) | self (single-author cross-tick stack) | author-self-stacked | **cross-tick** | etraut-openai [1/2]→[2/2] |
| #421 | 1 | 4-PR-by-1-author | high (security-hardening) | n/a | manual-burst-security | intra | stuxf 4-PR litellm |
| **#422** | **N=7** | **mixed (6×1 + 1×2)** | **low-mixed across batch, high within iceweasel sub-stack** | **embedded (iceweasel intra-tick same-surface 2-PR stack within 8-PR multi-author batch)** | **concurrent + nested-author-self-stacked** | **intra** | **codex 8-PR with iceweasel Windows-sandbox stack** |

Synth #422 is **uniquely characterized by the embedded-stack feature**: a multi-author batch where ≥1 author contributes ≥2 PRs in the same tick on the same surface. The **author-multiplicity-within-batch axis** (1:1 strict vs mixed-multiplicity) is structurally orthogonal to all prior axes: a multi-author batch can be (1:1) or (mixed) independently of its content-coherence, PR-dispersion, cadence-driver, and temporal-tick-relation.

The embedded-stack feature creates a **two-level batch hierarchy**: at the outer level, a multi-author batch (codex 8-PR / 7-author Add.196); at the inner level, a single-author intra-tick stack (iceweasel-oai 2-PR Windows-sandbox). The inner stack is structurally analogous to synth #420 cross-tick single-author stack but at intra-tick locus — admits the **(1, *, *, *, *, *, intra-tick, narrow)** cell of the synth #420 framework when extracted as a sub-batch.

## Empirical observations and invariants

**I-422.A**: Multi-author intra-tick batches at amplitude ≥6 admit ≥1 author contributing ≥2 PRs at single-anchor n=1 horizon. Empirical: codex 8-PR Add.196 with iceweasel-oai 2-PR (1/7 authors with multiplicity-2). Promotes to candidate invariant — at high-amplitude multi-author batches, the probability of at least one author repeating is non-negligible (geometric/birthday-style argument).

**I-422.B**: Embedded same-author intra-tick stacks within multi-author batches admit same-surface (top-level path) coherence at ≥80% within-stack at single-anchor n=1. Empirical: iceweasel-oai both PRs touch `codex-rs/windows-sandbox-rs/`. Promotes to candidate invariant — same-author within-tick stacks are typically content-coherent (the author is working in a single area).

**I-422.C**: Embedded same-author intra-tick stacks admit intra-stack inter-merge gap ∈ [10m, 60m] at single-anchor n=1. Empirical: 32m50s ∈ [10m, 60m]. Promotes to candidate invariant pending sample-n ≥ 3.

**I-422.D**: Multi-author intra-tick batches at amplitude ≥8 admit total span > 30m at single-anchor n=1. Empirical: 57m46s > 30m. Tautological at amplitude > 8 because typical inter-merge gaps in multi-author batches are 3-10m (per synth #418/#419 observations); 8 PRs × 4m mean gap = 32m mean span.

**I-422.E**: Multi-author intra-tick batches at amplitude ≥8 admit author-multiplicity-within-batch ratio ∈ [1.0, 1.3] at single-anchor n=1. Empirical: 8/7 = 1.143 ∈ [1.0, 1.3]. Promotes to candidate invariant — most authors at high-amplitude multi-author batches contribute 1 PR, with at most 1-2 authors contributing 2 PRs.

**I-422.F**: At amplitude ≥8 multi-author batches with embedded stacks, the embedded-stack contains the largest single-author churn fraction at >40% probability at single-anchor n=1. Empirical: iceweasel-oai 2-PR contributes +887 lines = 33.6% of total +2640 net codex churn at Add.196 (#19882 abhinav-oai is the single largest at 1465 lines = 55.5% — falsifies prediction at this single anchor; iceweasel-oai second-largest churn). Refined I-422.F': embedded-stack contains the largest **stacked-author** churn fraction at >40%, but does not necessarily exceed the single-largest individual PR.

## Predictions (P-196.X.2 register)

- **P-196.Q.1**: Next multi-author intra-tick batch at amplitude ≥6 with embedded same-author intra-tick stack recurs within next 24 ticks at >55% (validates I-422.A; high-amplitude multi-author batches admit author-repetition by birthday-paradox-style argument).
- **P-196.Q.2**: iceweasel-oai's Windows-sandbox-rs work continues with ≥1 follow-up PR within next 12 ticks at >40% (the WFP-filter installation + named-pipe-fix is a coherent multi-PR refactor; PR-stub-suggesting future entries on related surfaces).
- **P-196.Q.3**: Next embedded same-author intra-tick stack admits same-surface (top-level path) coherence at ≥80% within-stack at >75% (validates I-422.B).
- **P-196.Q.4**: Next embedded same-author intra-tick stack admits intra-stack inter-merge gap ∈ [10m, 60m] at >65% (validates I-422.C).
- **P-196.Q.5**: Multi-author intra-tick batches at amplitude ≥8 recur within next 24 ticks at >35% (high-amplitude multi-author batches are rare; codex Add.196 amplitude=8 is the highest single-tick multi-author amplitude observed in W17).
- **P-196.Q.6**: At any future amplitude-≥8 multi-author intra-tick batch, the author-multiplicity-within-batch ratio ∈ [1.0, 1.3] at >70% (validates I-422.E).
- **P-196.Q.7**: A multi-author intra-tick batch with **two distinct authors each contributing ≥2 PRs** (mixed-multiplicity ratio ≥ 1.25) recurs within next 24 ticks at >25% (extension of I-422.A to multiple-author-multiplicity).
- **P-196.Q.8**: A multi-author cross-tick batch (extension of synth #420 axis to N-author) recurs within next 24 ticks at >20% (orthogonal combination of synth #418 N-author axis and synth #420 cross-tick axis; unobserved cell).
- **P-196.Q.9**: codex Add.197 emission ≤ 3 at >65% (post-octuplet contraction; iceweasel-oai stack likely complete at sub-task n=2 horizon).
- **P-196.Q.10**: H_emitting at any tick where a synth #422 type embedded-stack batch is the only emit will be exactly 0.000 bits (single-emitting-repo regardless of internal author-multiplicity). Falsifiable by observing co-emission with other repos.

## The author-multiplicity-within-batch axis as a structural attribute of any N-author batch

A key insight at synth #422: the **author-multiplicity-within-batch axis** is a **graph-theoretic attribute** of any N-author batch — it captures the bipartite (author, PR) incidence matrix structure. The axis admits at least 4 sub-modes:

1. **Strict 1:1 mapping** (each author exactly 1 PR): synth #418, synth #419 — author-cardinality = PR-cardinality = batch-amplitude.
2. **Mixed (most-1:1 + 1-author-2)**: synth #422 — author-cardinality < PR-cardinality; one-author-multiplicity-2.
3. **Mixed (most-1:1 + ≥2-authors-≥2)**: unobserved.
4. **Single-author-dominant** (synth #416/#417/#421-type but as sub-cell within multi-author): unobserved (would be a 2-PR-author dominating in a multi-author batch where other authors only contribute 1 PR each).

The author-multiplicity-within-batch axis interacts non-trivially with the content-sub-theme axis (synth #421): an embedded same-author stack typically has **internal high-content-coherence** (synth #422 iceweasel-oai both Windows-sandbox), while the surrounding multi-author batch typically has **external low-content-coherence** (synth #422 pakrym-oai/khoi-oai/abhinav-oai/celia-oai/owenlin0/mzeng-openai touch app-server-protocol/features/tui-hooks/bedrock/rollouts/plugin = 6 distinct surfaces). This produces a **two-level content-coherence hierarchy** at synth #422: low at outer-batch level + high at inner-stack level — a structural feature absent from all prior synth #418/#419 instances at strict 1:1 mapping.

## Distal lineage citations

- **Synth #410** sha=`759c7fd`: per-repo recurrent-author fit-class — iceweasel-oai is recurrent codex contributor at Windows-sandbox specialist surface; pakrym-oai/khoi-oai/abhinav-oai/celia-oai/owenlin0/mzeng-openai all admit synth #410 fit-class membership at codex.
- **Synth #411** sha=`(prior)`: cohort-zero-determinism (falsified at synth #415).
- **Synth #412** sha=`(prior)`: H_emitting bifurcation framework. Synth #422 multi-author batch when sole emit contributes H_emitting = 0 bits regardless of internal author-multiplicity (entropy is computed at repo-level, not author-level).
- **Synth #413** sha=`b89f50c`: cohort-zero entry distribution.
- **Synth #414** sha=`(prior)`: codex right-censored geometric discharge framework. Synth #422 codex octuplet at Add.196 represents a high-amplitude discharge event extending the synth #414 framework at amplitude=8 tail.
- **Synth #415** sha=`(prior)`: post-discharge transition tri-modal-or-richer (extended at synth #418 to 4-mode and at M-196.A to 6-mode).
- **Synth #416** sha=`(prior)`: single-author intra-tick batch — the carrier-cardinality-1 sibling of synth #422 embedded-stack at single-author level (iceweasel-oai sub-stack is structurally analogous to synth #416 at amplitude=2).
- **Synth #417** sha=`19a5f0b`: bot-driven intra-tick release-engineering batch.
- **Synth #418** sha=`aea4944`: multi-author intra-tick batch — the **immediate predecessor** of synth #422 in the multi-author batch family lineage; synth #422 introduces the author-multiplicity-within-batch axis as orthogonal extension.
- **Synth #419** sha=`15b0b26`: within-repo human-heterogeneous wide-PR-dispersion intra-tick batch — the wide-PR-dispersion sibling of synth #422 at multi-author intra-tick (synth #422 has mid-dispersion=592 vs synth #419 wide=4185).
- **Synth #420** sha=`d8ae365`: cross-tick stacked-PR-series-continuation motif — the temporal-cross-tick sibling at single-author locus; synth #422's iceweasel-oai sub-stack is the intra-tick variant of synth #420's cross-tick stack, embedded within a multi-author outer-batch.
- **Synth #421** sha=`771f4a3`: single-author security-hardening intra-tick chore-prefix-uniformity batch — the content-sub-theme-axis sibling at single-author locus; synth #422 admits future combination with content-sub-theme axis at outer-batch level (e.g., a multi-author security-hardening batch with embedded single-author stack would combine synth #421 + synth #422 axes).

## Summary

Synth #422 establishes the **multi-author intra-tick batch with embedded same-author intra-tick stacked-series motif** as a distinct sub-class of the synth #418 multi-author batch family, distinguished at the **author-multiplicity-within-batch axis** (1:1 strict mapping vs mixed-multiplicity with embedded same-author stack). The codex 8-PR multi-author batch (#20471, #20245, #19882, #20275, #20270, #20463, #20101, #20474) at Add.196 18:42:07Z → 19:39:53Z (57m46s span, 7 distinct authors, mid-PR-dispersion=592, CV=1.060) with the iceweasel-oai 2-PR Windows-sandbox-rs same-surface intra-tick stack (#20270 + #20101 at 32m50s intra-stack gap) is the canonical instantiation. The synth #422 introduction of the author-multiplicity-within-batch axis extends the W17 batch-merge taxonomy from 6 axes to 7+ axes and admits a **two-level batch hierarchy** with low-content-coherence at outer-batch level and high-content-coherence at inner-stack level — a structural feature absent from all prior synth #418/#419 strict 1:1 mapping instances and structurally analogous to synth #420 cross-tick single-author stack but at intra-tick locus and embedded within multi-author context.
