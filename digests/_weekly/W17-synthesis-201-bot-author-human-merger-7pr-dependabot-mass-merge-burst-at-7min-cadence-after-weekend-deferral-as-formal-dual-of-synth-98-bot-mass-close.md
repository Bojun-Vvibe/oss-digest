# W17 synthesis #201 — bot-author / human-merger hybrid mass-MERGE batch on dependabot weekend-deferred queue: 7-PR goose burst (#8829, #8827, #8825, #8824, #8819, #8818, #8820) cleared in 1h18m56s at uniform ~7-minute inter-merge cadence after 2.4-day weekend deferral, formal dual of synth #98's bot-driven sub-10s mass-CLOSE on the author/merger/cadence axes

**Lens novelty.** Synth #98 documented a **bot-driven sub-10s n=3 stale-PR mass-CLOSE sweep across heterogeneous dependency surfaces with multi-day age dispersion** — entirely autonomous, terminal-state operations on others' PRs, sub-10-second cadence. Synth #201 documents the formal **dual** along three axes simultaneously:

| Axis | Synth #98 (mass-CLOSE) | Synth #201 (mass-MERGE) |
|---|---|---|
| **Author of PRs being acted on** | mixed (humans, mostly-stale) | single bot author (`app/dependabot`) |
| **Actor performing terminal op** | single bot (sub-10s autonomous loop) | human reviewer (or auto-merge bot at green-CI threshold) |
| **Inter-event cadence** | sub-10 seconds (all 3 within 10s) | 6m24s–9m51s for 6 of 6 tight gaps + 1 outlier 41m09s gap |
| **Terminal state** | CLOSED-without-merge | MERGED |
| **Age dispersion at op time** | multi-day (variable per PR) | tight: 26m31s open-window for opens, all opened on the same Friday |
| **Trigger relationship to PR content** | content-blind (stale-only filter) | content-aware (per-PR confirmation) |

This is the cleanest dual observed in W17: **same multi-PR-burst topology, opposite values on author / merger / cadence / terminal-state axes**. The two synths together establish a 2×2 matrix of bot-involvement in PR multi-burst events:

|  | Bot author | Human author |
|---|---|---|
| **Bot terminal-actor** | (no W17 obs yet — would be dependabot-self-close, plausible) | **synth #98** (bot mass-close on stale humans) |
| **Human terminal-actor** | **synth #201** (human merges dependabot batch) | most W17 multi-PR shapes (#92, #189, #194, etc.) |

Three of four cells are now populated; the bot-author/bot-actor cell remains hypothetical.

## The configuration: block/goose dependabot 7-PR cohort, opened 2026-04-24, merged 2026-04-27

Source: ADDENDUM-78 (capture window 03:29:27Z–04:21:28Z) and `gh pr view`-confirmed lifespans, mergeCommit SHAs, file diffs.

| PR | Title (truncated) | createdAt | mergedAt | Lifespan | Inter-merge gap | mergeCommit | Diff |
|---|---|---|---|---|---|---|---|
| **#8829** | `bump winreg 0.55.0→0.56.0` | 2026-04-24T17:54:22Z | 2026-04-27T**03:01:59Z** | 2d9h7m37s | (first) | `ba88d336…` | +5/−5, 2 files |
| **#8827** | `bump rcgen 0.13.2→0.14.7` | 2026-04-24T17:53:17Z | 2026-04-27T**03:11:50Z** | 2d9h18m33s | **+9m51s** | `958f63c9…` | +94/−4, 2 files |
| **#8825** | `bump lopdf 0.36.0→0.40.0` | 2026-04-24T17:52:12Z | 2026-04-27T**03:18:55Z** | 2d9h26m43s | **+7m05s** | `b9dafd03…` | +13/−5, 2 files |
| **#8824** | `bump anstream 0.6.21→1.0.0` | 2026-04-24T17:51:39Z | 2026-04-27T**03:26:05Z** | 2d9h34m26s | **+7m10s** | `9d0e87f6…` | +15/−39, 2 files |
| **#8819** | `bump setup-rust-toolchain 1.15.4→1.16.0` | 2026-04-24T17:27:56Z | 2026-04-27T**03:33:22Z** | 2d10h5m26s | **+7m17s** | `b52a8d70…` | +1/−1, 1 file |
| **#8818** | `bump harden-runner 2.14.1→2.19.0` | 2026-04-24T17:27:51Z | 2026-04-27T**03:39:46Z** | 2d10h11m55s | **+6m24s** | `e7157944…` | +1/−1, 1 file |
| **#8820** | `bump postcss 8.5.6→8.5.10` (docs) | 2026-04-24T17:46:20Z | 2026-04-27T**04:20:55Z** | 2d10h34m35s | **+41m09s** | `4dce997f…` | +5/−5, 2 files |

**Open-burst:** 26m31s (17:27:51Z first open → 17:54:22Z last open) on **Friday 2026-04-24**.
**Merge-burst:** **1h18m56s** (03:01:59Z first merge → 04:20:55Z last merge) on **Monday 2026-04-27**.
**Deferral:** **min 2d9h7m37s, max 2d10h34m35s** — a tight 1h27m lifespan-spread despite the deferral being roughly the entire weekend.

## Why this is not a batch-merge-script artifact

A naive `gh pr merge --auto`-style batch script would yield sub-second inter-merge times. The observed cadence is **6m24s–9m51s for the first six gaps**, with median **7m10s**, standard deviation under 90 seconds across five back-to-back accept events. The 7-minute spacing is consistent with:

1. **Per-PR human review confirmation** (open PR, scan diff, click "Squash and merge", wait for next CI to reset, repeat).
2. **CI-rebase-and-merge cycle** where each accept triggers dependabot's "rebase" feature on the next PR before the maintainer can merge it (cargo deps share `Cargo.lock`).
3. A combination — maintainer queues the next PR while CI re-runs on the just-rebased predecessor.

The **41m09s gap before #8820** breaks the rhythm. #8820 is the only **npm/documentation** PR in the cohort (touches `documentation/postcss` rather than the cargo deps + GitHub-action deps that dominate the first six). The gap is consistent with a **session pause** (maintainer takes a break, returns, processes the last queued PR) or a **separate-subsystem batch** (the doc-deps bucket required a different attention context).

## Why "weekend-deferral" is the right label

The 7 PRs were opened in a **26m31s window on Friday late-afternoon (UTC 17:27:51Z–17:54:22Z)** — i.e., **Friday 13:27–13:54 US-Eastern**, dependabot's typical scheduled-run window. They cleared on **Monday 03:01:59Z–04:20:55Z UTC** — **Sunday 23:01–00:20 US-Eastern Sunday-night-into-Monday**. The deferral pattern is "Friday-PRs-wait-for-Monday-morning-review" with the merger working **just after midnight US-Eastern Monday**, which is a recognizable maintainer-cadence signature for a US-based developer starting their workweek before standard work hours.

## Cohort-internal ordering vs createdAt

The merge order does **not** match createdAt order:

| Merge order | PR | createdAt order |
|---|---|---|
| 1 | #8829 | **last opened** (7th) |
| 2 | #8827 | 6th |
| 3 | #8825 | 5th |
| 4 | #8824 | 4th |
| 5 | #8819 | 2nd |
| 6 | #8818 | **first opened** (1st) |
| 7 | #8820 | 3rd |

The merge order **inverts the open order for the cargo block** (#8829 → #8827 → #8825 → #8824 are merged in **reverse** of their open order, since #8824 opened first within the cargo cohort and #8829 opened last). The two GitHub-action PRs (#8819, #8818) are merged after the cargo block, also in reverse of their open order. The npm/doc PR (#8820) is merged last regardless. This is **stack-discipline-style merge ordering**: most-recently-opened cargo PR first (likely the maintainer worked top-of-list-down in the GitHub UI, which sorts by recency by default).

## Surface heterogeneity vs synth #98 dispersion

Synth #98's mass-close swept across heterogeneous dependency surfaces — but the heterogeneity was **across PR ages** (multi-day age dispersion). Synth #201's mass-merge has heterogeneity across **dependency-class subsystems** (5 cargo + 2 GitHub-action + 1 npm-doc) but homogeneity across **PR ages** (all within a 26m31s open-window, all within a 1h27m lifespan-band). The two synths thus partition the heterogeneity axis differently:

- Synth #98: heterogeneous in age, homogeneous in trigger (stale-filter)
- Synth #201: heterogeneous in subsystem, homogeneous in age (single dependabot scheduled run)

## Predictions / falsifiable

**P201a.** The next dependabot-burst on goose will exhibit (i) opens within a single dependabot-scheduled-run window (≤30 min open-burst), (ii) merges deferred to a 2–3-day weekend-or-overnight window, (iii) inter-merge cadence in the 5–10 minute range when human-merger-driven, (iv) at least 80% of cohort cleared within a 90-minute merge-burst when the cohort is uniform in dependency-class. Falsifier: a same-second mass-merge (sub-10s inter-merge across ≥3 PRs), or a single-PR merge with the rest of the cohort closed-without-merge, or a >7-day deferral.

**P201b.** Across the corpus repos (sst/opencode, charmbracelet/crush, QwenLM/qwen-code, block/goose, cline/cline, BerriAI/litellm, openai/codex, google-gemini/gemini-cli), the dependabot-burst-then-Monday-merge pattern will be **most pronounced on goose** (where this synth originated) and on **codex** and **opencode** (where prior W17 evidence shows similar maintainer-attention-to-deps patterns). Falsifier: a different repo exhibits a tighter (sub-1-min) or much looser (>30-min) merge cadence on a comparable cohort.

**P201c.** Synth #98's bot-actor / synth #201's human-actor distinction will hold strictly: there will be no W17 observation of a **same-second n≥3 dependabot-PR mass-merge** (which would imply a batch-merge bot in the loop, not a human). Falsifier: any single repo's dependabot batch clearing within a 60-second window across ≥3 PRs.

## Where this lands in the W17 multi-PR-shape taxonomy

Updated taxonomy (synth #194's running list extended):

1. **Single-author same-second n=4 disjoint open-tuplet** (synth #92)
2. **Single-author chained-base 4-PR stack bootstrap** (synth #189) — partially refuted by Add.78 (see synth #202)
3. **Sibling-branch sequential merge with shared file overlap** (synth #193)
4. **Single-author cross-repo subsystem-doublet then docs-pivot triplet** (synth #194)
5. **Stack-abandonment then flat-replacement** (synth #195)
6. **Bot-driven sub-10s n=3 mass-CLOSE** (synth #98)
7. **Bot-author / human-merger 7-PR mass-MERGE-burst at 7-min cadence after weekend-deferral** (synth #201, this) ← **new**

The new shape is the **only one in the taxonomy where the bot is the PR author and a human is the terminal actor**; all others are human-author + human-actor or bot-actor on human PRs. It is also the **largest multi-PR cohort in W17 by terminal-event-count** (n=7 merges in one session), exceeding the prior record (synth #185's 8-PR mass-close, but that was close-without-merge, not merge).

## One-line summary

A bot-authored 7-PR cohort, opened in 26m31s on Friday and merged in 1h18m56s at uniform 7-minute cadence on Monday-pre-dawn, populates the previously-empty bot-author/human-merger cell of the W17 multi-PR-burst matrix and stands as the formal dual of synth #98's bot-actor/human-author mass-CLOSE on three axes simultaneously.
