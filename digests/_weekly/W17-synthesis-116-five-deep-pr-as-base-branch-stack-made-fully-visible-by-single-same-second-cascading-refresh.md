# W17 Synthesis #116 — Five-deep PR-as-base-branch stack made fully visible by a single same-second cascading refresh: stack topology readable from PR metadata alone

**Window:** 2026-04-25T23:59:33Z → 2026-04-25T23:59:38Z (5-second cascade inside Add. 35)
**Repos:** openai/codex

## Pattern statement

A single author (`bolinfest`) maintains an open **5-deep PR ladder** in which each layer's `base.ref` is the literal branch name of the PR one layer below (`pr<N>` convention). At 23:59:33Z–23:59:38Z, **all 5 layers' `updated_at` fields advance within 5 seconds**, simultaneously revealing the full stack topology in a single API snapshot. The topology is recoverable **from PR metadata alone (number, head SHA, base ref, author, title prefix, updated_at)** — no diff inspection, no commit-graph traversal, no GitHub stack-tooling annotation required. This is the **mechanical-refresh signature of stacked-PR tooling** (e.g., `git-spice`, Graphite, `spr`, `ghstack`) operating on its full chain.

## Anchor evidence — full 5-layer chain

| Layer | PR | base.ref | head SHA | updated_at |
|-------|-----|----------|-----------|------------|
| 0 (root, base→main) | **[openai/codex#19606]** | `main` | `5f1fed5e89543d80419a5edc6e3f95a64f66fa58` | 23:59:33Z |
| 1 | **[openai/codex#19392]** | `pr19606` | `be7a4f35fdac690afdae32b84b53ea281aa02ada` | 23:59:33Z |
| 2 | **[openai/codex#19393]** | `pr19392` | `5a078c1d6bcaedbb121b186290e22cf9e78b7ad6` | 23:59:33Z |
| 3 | **[openai/codex#19394]** | `pr19393` | `346d2ace3067ff223fe8a031ef11bda018956b31` | 23:59:33Z |
| 4 (top) | **[openai/codex#19395]** | `pr19394` | `02458defe878ff0004499daef4285108e0d0cc7b` | 23:59:38Z |

**All 5 PRs:** author = `bolinfest`, title prefix = `permissions:`, state = open, opened 2026-04-24T16:02:53Z–16:02:58Z (a **5-second open-burst on 2026-04-24** that became visible only in the **5-second close-burst-of-refreshes 31h57m later**). #19606 root carries **+1383/-655 across 59 files** (the heavy parent); upper layers are smaller in line count (per Add. 34's tracking #19391 was +1351/-644 — comparable magnitude on the same surface).

## Falsifiable signals

1. **`base.ref` matches `pr<peer-PR-number>`** for layers 1–4 — non-`main` bases on a PR, where the base name is literally `pr<N>` and N is another PR in the same repo. This is the **strongest single-field signal** of stacked-PR tooling.
2. **All 5 `updated_at` values fall within a 5-second window** with 4 of 5 at exact second 23:59:33Z. **Same-second cascade across the entire stack** is a tooling fingerprint — humans cannot push 5 PRs in a sub-5-second interval; this is `git push --atomic` + GitHub webhook fanout.
3. **All 5 PRs share the same author** — eliminates multi-collaborator-stack confound.
4. **All 5 PRs share a common title prefix** (`permissions:`) — eliminates "5 unrelated PRs happened to refresh."
5. **All 5 PRs were opened within a 5-second burst on a prior day** (2026-04-24 16:02:53–16:02:58Z) — confirms the original creation was also a `git push --atomic` + automated PR-creation, not interleaved manual opens.

## Comparison to synth #114 (anchor: codex #19391 → pr19604)

Synth #114 anchored on a **2-layer chain** (#19391 base=`pr19604`, #19604 base=`main`) with merge-time visibility. Synth #116 generalizes:

- **Depth scales**: synth #114 was N=2; synth #116 is N=5 (2.5×).
- **Visibility mechanism differs**: synth #114 became visible at **merge boundaries** (child merge into parent's branch, then parent merge into main, 39m06s gap). Synth #116 became visible at a **same-second cascading refresh** with the entire stack still open — visibility precedes any merge.
- **Open-burst signature**: synth #116 reveals that the stack was **created in a 5-second open-burst** (on a prior day) — a creation fingerprint absent from synth #114's anchor.
- **Same author both anchors**: `bolinfest`. Synth #116's anchor is the **rebuilt stack on top of #19606** (which is the refile of synth #114's already-merged #19391). This means **synth #114's bottom-layer merge enabled synth #116's full-stack rebase** — the two synths chain.

## Distinguishing from prior synths

- **Not synth #44** (vertical-slice PR stack refreshed in lockstep): synth #44 noted lockstep refresh; synth #116 specifies the **`pr<N>`-as-base-branch** convention as the diagnostic signal and provides **5-second precision** as the cadence threshold.
- **Not synth #57** (periodic CI burst as stack-burst-update signature): synth #57 attributes lockstep to CI; synth #116 attributes it to **stacked-PR tooling local push** (`git push --atomic` against `gh` API or equivalent).
- **Not synth #41** (stacked PR rejected after parent merged): synth #116 has **no merges yet** — pattern is observable on a **fully-open** stack.
- **Not synth #67** (declared vs inferred multi-PR sequences): synth #116's stack is **machine-declared via `base.ref` field** — fully inferred from API, no human-readable PR-body cross-references needed.

## Generalization

Stacked-PR tooling leaves a **single-API-call signature** when refreshing a stack:

1. **N PRs by same author with `base.ref = pr<peer-N>`** for N–1 of them and `base.ref = main` (or default) for exactly 1 (the root).
2. **All N `updated_at` within ≤ 10 seconds** of each other (humans cannot manually rebase N≥3 PRs in <10s).
3. **All N share a common title prefix** (the stack's logical theme).
4. **All N opened within a sub-10-second burst** at some prior time (the stack creation was also automated).

The codex `permissions:` stack satisfies all 4 criteria with N=5 at 5-second precision. **Any future stack with N≥3 satisfying criteria 1–4 is a confirmed instance of the same tooling fingerprint.**

## Watch list (next 3 addenda)

- Does the stack **merge bottom-up** (#19606 → main first, then #19392, etc.)? Synth #41 + synth #114 predict bottom-up; synth #116 sets a precise sequencing test.
- Does any **other author** in any tracked repo exhibit a comparable N≥3 `pr<N>`-base-branch stack? If yes, synth #116 promotes from **single-author signature** to **tooling-class signature** (i.e., the tool is in widespread use, not just `bolinfest`'s personal workflow).
- Does the next stack-refresh occur on a **non-5-second cadence** (e.g., 30s, 60s)? Variation in cadence would distinguish `git push --atomic` (sub-second) from per-PR `gh pr edit` loops (multi-second-per-PR).
