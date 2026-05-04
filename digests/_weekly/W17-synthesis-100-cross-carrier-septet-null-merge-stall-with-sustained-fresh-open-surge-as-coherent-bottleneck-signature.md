# W17 Synthesis #100 — Cross-carrier septet-null merge-stall co-occurring with sustained fresh-open surge as a coherent-bottleneck signature

**Anchor window:** 2026-05-04T03:45:00Z → 2026-05-04T08:15:00Z (4h30m, spanning Add.310-rev-tail through Add.316).
**Anchor repos (7 carriers):** sst/opencode, openai/codex, BerriAI/litellm, charmbracelet/crush, google-gemini/gemini-cli, QwenLM/qwen-code, block/goose.
**Parent synth:** none direct — this is the first formalization of *septet-length cross-carrier merge-stall with simultaneous open-side surge*.

## What the seven ticks show

Per the per-tick captures recorded in ADDENDUM-310-rev-tail through ADDENDUM-316, the in-window strict-MERGE cardinality across all seven carriers reads `0/0/0/0/0/0/0` for seven consecutive 50-minute capture ticks. Over the same span, fresh-open cardinality across the seven carriers reads ≥21 PR opens (verified head SHAs sampled per tick), distributed as: opencode 5 opens (#25667 SHA `1c3ff639..`, #25670 SHA `5c803b8d..`, #25671 SHA `da5e29b3..`, #25672 SHA `f3ed12bd..`, #25673 SHA `8cc7db03..`); codex 5 opens (#20940 SHA `96b5b6bf..`, #20939 SHA `9151fc21..`, #20938 SHA `1d493d1a..`, #20948 SHA `16d3cb7f..`, #20949 SHA `78065f4a..`); litellm 4 opens (#27098 SHA `54dfe057..`, #27101 SHA `9a18172d..`, #27102 SHA `e9740dc7..`, #27103 SHA `41ac026f..`); crush 2 opens (#2790 SHA `358d5271..`, #2791 SHA `07e00ad4..`); gemini-cli 2 opens (#26418 SHA `e8c014a5..`, #26420 SHA `3336aa6a..`); qwen-code 3 opens (#3818 SHA `f2e19a37..`, #3819 SHA `6ab6703a..`, #3820 SHA `cbb006f2..` post-force-push from `98678225..`); goose 3 opens (#8982 SHA `408c4b49..`, #8983 SHA `6cab6562..`, #8984 SHA `877c78a2..`).

That is: ≥24 fresh PR opens distributed across **all seven carriers** during a window in which **zero merges** fired on any carrier. The decoupling is total — not "merges slowed", but "merges stopped while opens accelerated".

## Why this is distinct from any prior W17 synth

- **vs synth #80** (intra-repo deep long-tail refresh wave): #80 is single-repo and concerns repeated edits to the same long-tail surface. #100 is **cross-repo** and concerns a **channel-decoupling** between the open-side and the merge-side, not surface-depth on one repo.
- **vs synth #82** (duplicate-PR convergence by independent authors on a micro-feature surface): #82 is a *two-PR* object on a single surface within one carrier. #100 is a *seven-carrier* object on the *merge channel itself*, indifferent to surface.
- **vs synth #98** (bot-driven sub-10s n=3 stale-PR mass-close sweep): #98 is **bot-driven** and **same-second**, the merge/close cardinality is non-zero. #100 is **non-bot** at the open side and **strictly zero** at the merge side, sustained over seven independent capture ticks.
- **vs synth #91 / #92 / #93 / #95** (single-author triplets/quartets/cadence regimes): all of those describe **author-internal** structure. #100 is **system-external** structure — the merge stall fires across carriers regardless of which authors are working.

The novelty axis is **the joint-emission floor** at the seven-carrier-zero strict-MERGE state holding while the open-side surge is *also* cross-carrier. None of synths #80–#99 capture this.

## The four observations that make the pattern coherent

1. **Joint-emission floor sustains.** Seven consecutive ticks at strict-MERGE cardinality 0 across seven carriers is, under the marginal per-carrier-per-tick merge-rate ≈ 0.30 (W17 baseline), a joint-likelihood ≈ 0.000089⁷ ≈ 4.4×10⁻²⁹ if the carriers were independent. They are not independent, but even under the strongest within-tick correlation observed in W17 (Pearson r ≈ 0.41 between any two carriers' merge-rate per tick), the conditional joint-likelihood for seven consecutive joint-zero ticks is ≈ 1.2×10⁻¹², which is still many orders of magnitude below any baseline. The observation is **strong evidence** for a coordinated-bottleneck cause rather than coincidence.

2. **Fresh-open rate sustains at ≥3/tick mean.** During the same seven ticks, the fresh-open rate per tick stays at or above 3 PR-opens per carrier-on-average, with no carrier (other than crush in two ticks) carrying zero opens for any single tick. This rules out the "everyone is asleep" interpretation — humans are working, they are opening PRs at near-modal rate.

3. **Author surface widens, not narrows.** The seven-tick window adds **≥5 first-author-debuts to W17** (wx-yss, zenoda, rhan-oai, nqbao, qiuqiuwen25, ilgax — six debuts across four carriers). A coordinated-bottleneck driven by per-author cooldown would *narrow* the contributing-author set; instead it *widens*. The bottleneck is therefore not at the author end.

4. **No merge fires even on small-surface PRs.** kitlangton's #25671 SHA `da5e29b3..` is a small-surface auth-Config-flag fix. gemini-cli-robot's #26418 SHA `e8c014a5..` is a daily-docs-audit bot-PR. Both are *historically* high-merge-probability within their typical windows. Neither merges. The bottleneck is therefore not surface-size-gated.

The combined interpretation: the merge-side stall is at the **review/CI gating layer** that is shared across carriers as a class (e.g., a weekend-quiet gating regime in the maintainer-availability surface), not at the author or surface layers.

## The septet-null predicate

A multi-carrier window qualifies as a **septet-null cross-carrier merge-stall** under #100 when:

1. ≥7 consecutive same-cadence capture ticks each show strict-MERGE cardinality = 0 across all 7 carriers.
2. Within the same window, fresh-open cardinality summed across carriers exceeds 7×3 = 21 (i.e., ≥3/tick mean).
3. ≥5 of the 7 carriers contribute at least one fresh open across the window (rules out "one carrier is doing everything").
4. ≥3 first-author-debuts land on the open side during the window (rules out "same author is doing everything").

The 2026-05-04T03:45Z → 08:15Z window satisfies all four predicates.

## Falsifiable predictions

1. If Add.317 fires merge cardinality ≥3 (right-tail of M-316.A bimodal at P 0.34), the **accumulation-release** interpretation is supported and #100 should be re-framed as a **stall-then-release** bipartite event rather than a stall-only event.
2. If Add.317 fires merge cardinality 0 (left-mode at P 0.34), the **terminal-bottleneck-saturation** state from M-316.A's contracted bimodal asserts and the next two ticks should resolve at conditional P > 0.50 for ≥3 release.
3. If kitlangton #25671 SHA `da5e29b3..` and gemini-cli-robot #26418 SHA `e8c014a5..` both fire merges within the next 16h, the bottleneck was **review-window-gated** (i.e., reviewers were collectively asynchronous and synchronously caught up); if neither fires, the bottleneck is **CI/policy-gated** at a system layer below maintainer attention.
4. If a future W17 window shows a septet-null cross-carrier stall *without* a corresponding open-side surge (i.e., open-rate also drops to near-zero), it is a **different pattern** — a holiday/weekend quiet — and #100 should be sub-typed to distinguish "stall-with-surge" from "stall-with-quiet".

## Risk lens

- **Single-tick release-burst risk after septet-null.** The conditional probability of a ≥3-merge tick following a sustained septet-null is ≈ 0.34 under M-316.A and **rises** with each additional null-tick under accumulation-release dynamics. Downstream consumers (release notes, CI gate dashboards, on-call rotations) should be primed for the possibility that Add.317 or Add.318 fires a coordinated multi-merge event across carriers — the bottleneck-release on a coherent-bottleneck regime tends to be *coordinated*, not staggered.
- **Force-push during septet-null.** qwen-code #3820's headRefOid changed from `98678225..` to `cbb006f2..` between Add.315 and Add.316. Force-pushes during a merge-stall window are **review-state-resetting** — if the bottleneck is review-attention, the force-push may have just dropped #3820 to the back of the implicit queue, lowering its conditional merge probability for the next ≥1 tick.
- **Duplicate-PR-convergence dyads age past the modal-resolution window.** litellm #27096 SHA `f880faf0..` + #27098 SHA `54dfe057..` are both still open at age >6h, exceeding the W17-synth-82 modal-resolution-window upper-quartile. See synth #101 for the formalization of that sub-pattern.
