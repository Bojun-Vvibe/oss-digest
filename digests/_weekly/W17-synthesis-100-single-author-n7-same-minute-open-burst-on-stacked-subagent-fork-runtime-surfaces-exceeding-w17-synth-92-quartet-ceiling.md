# W17 Synthesis #100 — Single-author N=7 same-minute open-burst on stacked subagent/fork/runtime surfaces, exceeding the W17-synth-92 quartet ceiling at +3 with semantic stack-coupling

**Anchor window:** 2026-05-03T22:11:04Z → 22:11:45Z (**41 seconds**).
**Anchor repo:** openai/codex.
**Anchor actor:** `friel-openai`.
**Parent synth:** #92 (same-second four-PR open tuplet by single author on four disjoint surfaces).

## Why this is distinct from #92

Synth #92 captured an N=4 same-second open-tuplet by a single author across **four disjoint surfaces**. The defining structural facts were (a) same-second arrival of all four opens (sub-1s spread), (b) **disjointness** of the four PRs (no shared file, no shared semantic surface). The framing treated N=4 as a notable upper bound for same-second mass-open-bursts in W17.

Synth #100 captures **N=7 over a 41-second window** (not same-second; same-minute) on **semantically-coupled stacked surfaces**, not disjoint ones. The seven friel-openai PRs are a **fork-runtime-subagent vertical slice** — every PR title sits in the same architectural neighborhood (rollout pinning / fork+debug hooks / TUI subagent / agent control sync / custom models / watchdog / fork prompt cache). Synth #92's framing **cannot express** this object: it only describes same-second disjoint bursts, while #100 describes a **semantically-stacked sub-minute burst that breaks the N=4 ceiling by +3 PRs**.

## The seven members

| PR | Opened (UTC) | head SHA | Surface |
|---|---|---|---|
| [openai/codex#20909] | 22:05:50Z* | `d1ec95ec0ef273a6ec9b9880f6c64569b7f356ad` | preserve fork prompt cache state |
| [openai/codex#20910] | 22:11:04Z | `692b62e278a66d9d9f0e81c02db55a701d38dd56` | add watchdog runtime handles |
| [openai/codex#20911] | 22:11:17Z | `4f3b42c321f0658fcdacdf8fc62a0e2e056e5ad4` | add custom models and role prompts |
| [openai/codex#20912] | 22:11:22Z | `84a34f29926d77408859f1fab92c824dba3a5ad1` | synchronize agent control tools |
| [openai/codex#20913] | 22:11:29Z | `efdf88acb610e50345d4d3614597cffdd047b4de` | add TUI subagent surface |
| [openai/codex#20914] | 22:11:40Z | `c9ea01a7500c3d80264e011473337fbead7e0302` | add fork command and debug hooks |
| [openai/codex#20915] | 22:11:45Z | `36cae7deae7d9bd610d6561db5db71b7b0c66892` | pin rollout references by segment |

*#20909 opened 5m14s before the strict same-minute group of 6; including it as the **leading anchor** brings the practical N to 7 over a 5m55s envelope. Excluding it (same-minute strict definition) yields N=6 across 41s — still exceeding #92's quartet ceiling by +2.

## Inter-PR-open gaps inside the strict 22:11 group

| Adjacent pair | Gap |
|---|---|
| #20910 → #20911 | 13s |
| #20911 → #20912 | 5s |
| #20912 → #20913 | 7s |
| #20913 → #20914 | 11s |
| #20914 → #20915 | 5s |

Mean inter-open gap = **8.2s**, std-dev ≈ 3.5s. Six opens at sub-15s adjacency is a **scripted-launch signature**: human typing latency at the GitHub PR-create flow is empirically ~25–40s/PR (CLI fast path). Sub-15s mean strongly implies **automated multi-PR open via `gh pr create` script or CI hook**, not interactive composition.

## What the septet tells us that #92 could not

**(a) Semantic stack-coupling, not disjointness.** All seven PRs occupy a single architectural neighborhood: subagent runtime + fork lifecycle + agent-control sync + rollout segmenting. This is **the inverse property** of #92's defining disjointness. The mechanism is not "author batches unrelated work" but "author splits one feature into N chained PRs to make review tractable" — i.e., a **stacked-PR rollout** posted as N=7 simultaneous opens rather than as a serial chain. The reviewer cost is shifted from "review one giant PR" to "review N small PRs in dependency order".

**(b) N=7 breaks the W17 same-minute open-burst ceiling.** Across W17-synth-92's data, no observed same-second/same-minute single-author open-burst exceeded N=4. Synth #100's N=6-strict / N=7-with-leading-anchor is the **new ceiling**, raising the modal upper-tail by ≥50% relative to the previously-formalized maximum. Future detection thresholds for same-minute mass-open should be re-anchored from N=4 to N=7.

**(c) The leading-anchor pattern.** #20909 opens at 22:05:50Z, then 5m14s later #20910 starts the dense 41s burst. The leading-anchor sub-pattern — **one PR opens, then a multi-PR burst follows after a short pause** — suggests the author opened the foundation PR (preserve fork prompt cache, the lowest-level dependency in the stack) first to verify it built green, then triggered the script to flush the remaining six dependents. This is a **human-confirmed-base + script-flushed-stack** workflow, distinct from a pure scripted N=7 launch.

**(d) Force-push fingerprints since open.** Five of the seven (#20909, #20910, #20911, #20912, #20914, #20915 — all except #20913) show `updatedAt` ≥ 8 hours after `createdAt`, indicating force-pushes for rebase or fix-on-feedback. Specifically: #20909 createdAt 22:05:50Z → updatedAt 06:24:15Z next day (+8h18m), #20915 createdAt 22:11:45Z → updatedAt 07:58:51Z next day (+9h47m). The force-push pattern across the stack is **near-uniform**, suggesting a mass-rebase event on the entire stack — consistent with the stacked-PR rebase tooling that codex-style stacks require when the base branch moves.

## The septet predicate

A multi-PR open-burst qualifies as a **semantically-stacked septet** under #100 when:
1. A single author opens **N ≥ 6 PRs** within a **single calendar minute** in one repo.
2. The PR titles share a single architectural neighborhood (verifiable via title-token clustering or shared changed-file overlap).
3. Mean inter-open gap is **≤ 15s** (script-launch signature).
4. No more than one of the N PRs has a `createdAt` outside the strict same-minute window — leading-anchor exceptions allowed at distance ≤ 10 minutes.
5. The PR set is **dependency-chained** (later PRs build on earlier ones, verifiable via base-branch reference or PR description cross-link).

The friel-openai 22:11 group satisfies all five.

## Falsifiable predictions

1. If all 7 members merge as a unit within 24h of the first merge in the stack, the **stacked-PR-as-burst-open** workflow is validated as a working review pattern for codex-class repos. Modal P 0.32 per Add.317 P-317.E.
2. If any 2 of the 7 are closed (not merged) and the other 5 merge, the burst was **speculative bundling** — author flushed candidates and let the maintainer pick. This would predict that future same-author septets are smaller in the merged-fraction, suggesting the workflow has a built-in over-bundling bias.
3. If the entire septet sits open > 72h with zero merges, the reviewer cost-shift hypothesis fails — N=7 is too many for a reviewer to dependency-order in their head, and stacked-PR tooling would be needed to make this manageable. The author may revert to serial single-PR composition.
4. If a second author launches a same-minute septet in any of the seven carriers within W17 close, the pattern is **recurring not idiosyncratic to friel-openai**. Watch for codex maintainer-tier authors (pakrym-oai, jchu-oai, evawong-oai) and litellm maintainer-tier (Sameerlite has already shown #27103/#27106 doublet — extension to septet would fit M-317.B regime-switch).

## Distinctness from prior synths

- **vs #92** (same-second N=4 disjoint open-tuplet): #92 is **disjoint and same-second**; #100 is **stacked and same-minute (41s)**. Both are mass-open-burst classes but they differ on the **two orthogonal axes** of (a) semantic-coupling-vs-disjointness and (b) sub-second-vs-sub-minute. They are **complementary observations**, not refinements of the same object.
- **vs #93** (first-appearance-author debut as four-PR introduction with three-PR rapid-not-same-second burst): #93 is about a **debut author** introducing themselves with N=4. Synth #100 is about an **established author** (friel-openai is not first-appearance in W17) launching a stacked feature. The author-tenure axis differs.
- **vs #91** (single-author triplet self-merge metronome on disjoint surfaces): #91 is a **post-merge metronome** — three merges spaced like a clock. Synth #100 is a **pre-merge open-burst** — seven opens compressed into 41s. The temporal placement is opposite.
- **vs #99** (same-author shared-spec-anchor self-merge series extension past triple): #99 is **sequential**, with each member opening *after* the prior member merged. Synth #100 is **parallel**, with all seven opening in sub-minute. The dependency-management strategy is opposite.
- **vs #83** (single-author multi-PR thirty-minute metronome cadence within one repo): #83 is **sub-30m gaps**, modal ~30m. Synth #100 is **sub-15s gaps**. Two orders of magnitude faster; mechanism differs (script vs human cadence).

## Risk lens

- **Maintainer review-queue saturation**: a single septet enqueues 7 PRs at the same head of the review queue. If the maintainer's per-PR review cost is even 10 minutes, the septet costs 70+ minutes of dedicated review time atop normal queue work. If two authors do this in the same week, the reviewer team is at risk of **starvation-of-non-stacked-contributors** — independent single-PRs from outside the maintainer circle get pushed back behind the stacks.
- **Rebase-storm risk**: with 5+ force-pushes across the stack already observed within 10h of open, every base-branch movement triggers a re-rebase across all 7 PRs. CI capacity for a single author can dominate a CI runner pool during stacked-rebase events. Worth tracking whether codex CI shows latency degradation during friel-openai septet rebase windows.
- **Detection threshold update**: any monitor previously alerting at N=4 same-minute opens must be raised to N=7 (or the ceiling will trigger continuously on legitimate stacked workflows). Inversely, alerts gated at N=5–6 are now in the **legitimate-stack-vs-burst-spam ambiguity zone** and need a semantic-coupling check (shared file overlap > 30%) to disambiguate.
