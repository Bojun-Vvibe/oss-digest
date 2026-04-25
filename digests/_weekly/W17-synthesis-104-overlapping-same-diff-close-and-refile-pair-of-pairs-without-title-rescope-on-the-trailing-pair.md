# W17 Synthesis #104 — Overlapping Same-Diff Close-and-Refile Pair-of-Pairs Without Title Rescope on the Trailing Pair

**Status:** new anchor. Distinguishes from synth #54 (close-and-refile with explicit title rescope) and synth #87 (asymmetric half-merge of sub-10s doublet) by introducing a **double-doublet** structure where the trailing pair shares a head SHA but reverts the title.

**Window of evidence:** 2026-04-25 19:34:21Z → 19:50:14Z (15m53s, single repo, single author, identical diff size).

## The pattern instance

`v1truv1us` (`John Ferguson`) opened the same docs PR — *"docs: sync env vars with source code"*, +1197/-831 across 36 files — **four times** in anomalyco/opencode against base `dev`:

| PR | opened | closed | lifespan | head SHA | title |
|---|---|---|---|---|---|
| anomalyco/opencode#24372 | 19:34:21Z | 19:46:12Z | 11m51s | `3c69da17` | "docs: sync env vars with source code" |
| anomalyco/opencode#24375 | 19:39:50Z | 19:46:13Z | 6m23s | `3c69da17` | "docs: sync env vars with source code (v2)" |
| anomalyco/opencode#24377 | 19:46:23Z | 19:50:14Z | 3m51s | `b2fa9170` | "docs: sync env vars with source code" |
| anomalyco/opencode#24378 | 19:47:05Z | (OPEN) | — | `b2fa9170` | "docs: sync env vars with source code" |

Diff size (1197 additions, 831 deletions, 36 files) is **byte-identical across all four PRs**. There is **exactly one head-SHA mutation** in the window: `3c69da17` → `b2fa9170` between the two pairs.

## The structural object

A **double-doublet** of close-and-refile activity with three properties:

1. **Within-pair head-SHA equality.** `#24372` and `#24375` share head SHA `3c69da17`; `#24377` and `#24378` share head SHA `b2fa9170`. The two members of each pair are content-identical, only the PR-number identity differs.
2. **Within-pair temporal overlap with synchronized close.** In pair 1, #24375 opens 5m29s into #24372's lifespan and closes **1 second** after #24372 closes (19:46:12Z and 19:46:13Z). In pair 2, #24378 opens 42s into #24377's lifespan and is the **survivor**; #24377 closes 3m09s after #24378 opens.
3. **Title-rescope confined to the leading pair.** Only `#24375` carries the "(v2)" title suffix. The trailing pair (`#24377`, `#24378`) reverts to the original title. This breaks synth #54's title-rescope pattern, which assumed the rescope persists across refiles.

## Falsifiable claim for synth #104

**A single author can consume 4 PR numbers in <16 minutes by issuing two overlapping close-and-refile pairs in series, where the within-pair members share a head SHA, the across-pair head SHA mutates exactly once, and a title rescope appears only on the leading pair's second member but not on the trailing pair.** The structural function of the second mutation appears to be **purely identity-rotation**, not content rework — the trailing pair carries the same line-count diff and the same title as the leading pair's first member.

**Possible drivers (not asserted, listed for falsification):**
- (a) **CI-status-rotation hypothesis** — author closing/reopening to retrigger required checks that were stuck or red on the original PR number.
- (b) **Branch-protection-counter-reset hypothesis** — some branch-protection systems cap "open-then-close-then-reopen" counters per PR number, forcing a fresh number to reset state.
- (c) **Reviewer-attention-bid hypothesis** — author attempting to surface a stale PR by generating new-PR-opened webhook noise.

**Test:** synth #104 is falsified at N=2 if any other instance of the four-PR-overlapping-pair-of-pairs pattern in W17 (a) carries a title rescope on the trailing pair, (b) shows ≥2 head-SHA mutations across the four PRs, or (c) ends with a merge of any of the four (this case ended with the survivor still OPEN, zero merges).

## Distinguishing from existing synths

- **#43** (rejected PR resurrected same-day unchanged) — #43 covers maintainer-rejection→author-refile of one PR. #104 is author self-close in a four-PR overlapping double-doublet with no maintainer involvement.
- **#54** (close-and-refile with explicit title rescope) — #54 assumes title rescope as the marker. #104 explicitly observes title rescope appearing only on the leading pair's second member, then reverting.
- **#85** (sub-10-second same-author cross-PR doublet) — #85 covers two PRs on adjacent surfaces; #104 covers four PRs on the *same* surface with the same diff.
- **#90** (single-author overlapping doublet — second open precedes first self-merge) — #90's terminal state is a self-merge. #104's terminal state is **three closes + one open survivor + zero merges**, after 15m53s of churn.

## Why this matters as a structural pattern

If pattern #104 recurs, it implies a class of contributor behavior in which **PR-number identity is treated as a renewable resource** rather than a stable handle for a piece of work. The author treats the (PR number, head SHA, title) triple as decoupled and rotates them independently to either drive CI state, drive maintainer attention, or work around platform-side counter caps. This is structurally distinct from "stack burst" (synth #57) or "vertical slice prefix merge" (synth #55) patterns, which preserve PR-number identity across iterations.
