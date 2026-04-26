# W17 Synthesis #117 — Same 5-deep PR-as-base-branch stack undergoes two full rebases (all 5 head SHAs change) within 38m43s, establishing a measurable inter-rebase cadence and falsifying the "metadata-touch" hypothesis from synth #116

**Window:** 2026-04-25T23:59:33Z → 2026-04-26T00:38:22Z (Add. 35 cascade → Add. 36 cascade)
**Repos:** openai/codex

## Pattern statement

The same 5-deep `bolinfest` permission-profile stack documented in synth #116 (#19606 → #19392 → #19393 → #19394 → #19395) underwent a **second full cascading refresh** at 2026-04-26T00:38:16Z–00:38:22Z (6-second cluster), exactly **38m43s** after the first cascade at 2026-04-25T23:59:33Z–38Z. **Critically, all 5 head SHAs changed across the cycle** — every layer's commit hash advanced. This **falsifies the alternative hypothesis** that synth #116's same-second cascade was a metadata-only touch (e.g., GitHub UI re-index, `gh pr view` ping, base-branch FFW with no commit motion). The signature is a **real `git rebase --update-refs`** (or equivalent stacked-PR tool restack) propagating new commits down the entire ladder. The emerging cadence (~39 min) is consistent with a **scheduled or trigger-based restack**, not an on-demand human action.

## Anchor evidence — head SHA delta across cycle

| PR | Layer | head SHA @ 23:59:33–38Z (synth #116) | head SHA @ 00:38:16–22Z (Add. 36) | Δ files | Δ lines |
|----|-------|--------------------------------------|-----------------------------------|---------|---------|
| **[openai/codex#19606]** | 0 (base→main) | `5f1fed5e89543d80419a5edc6e3f95a64f66fa58` | `0066622440b881d2cca7154b86190f313ed3b024` | 59 → 59 | +1383/-655 → +1430/-655 (**+47/0**) |
| **[openai/codex#19392]** | 1 (base→pr19606) | `be7a4f35fdac690afdae32b84b53ea281aa02ada` | `7b27340c…` | unknown → 40 | unknown → +571/-439 |
| **[openai/codex#19393]** | 2 (base→pr19392) | `5a078c1d6bcaedbb121b186290e22cf9e78b7ad6` | `e77f974b…` | unknown → 25 | unknown → +372/-167 |
| **[openai/codex#19394]** | 3 (base→pr19393) | `346d2ace3067ff223fe8a031ef11bda018956b31` | `0df2309c…` | unknown → 13 | unknown → +209/-303 |
| **[openai/codex#19395]** | 4 (top, base→pr19394) | `02458defe878ff0004499daef4285108e0d0cc7b` | `30ae99be…` | unknown → 11 | unknown → +269/-148 |

**All 5 head SHAs are distinct from synth #116 snapshot.** The root layer #19606 grew by **+47 lines on the same 59-file footprint** — a small forward edit on the base of the stack that propagated through all 4 dependent layers via restack. No layer was abandoned, no layer was inserted, no layer was reordered: **stack topology is preserved**, only commits advanced.

## Inter-rebase cadence

| Cycle | First update_at in cluster | Last update_at in cluster | Cluster span | Δ from prior cycle |
|-------|---------------------------|---------------------------|--------------|---------------------|
| Cycle 1 (synth #116) | 23:59:33Z | 23:59:38Z | 5s | — |
| Cycle 2 (Add. 36 §codex) | 00:38:16Z | 00:38:22Z | 6s | **38m43s** |

**Within-cluster span (5s → 6s) is stable**; **between-cluster gap = 38m43s**. A third cycle, if cadence holds, lands at **~01:17:00Z** (next addendum window). **Falsifiable:** if Add. 37 captures no third cascade between 01:14Z–01:20Z, the "scheduled restack" hypothesis is rejected and the cadence is pure coincidence; if it captures one within ±90s of 01:17Z, the scheduled-trigger hypothesis is sharply confirmed.

## Why this is a synth-grade pattern, not a noise observation

Synth #116 established the **topology-from-metadata** claim using a single same-second event. A single event cannot distinguish between (a) a real restack producing real new commits and (b) a metadata-level event (GitHub re-index, base-branch fast-forward with no propagation, bulk `pr edit` touch). **Two cycles, both with all-5-SHAs-changed and both in 5-6s span**, falsify (b): metadata touches do not change commit hashes. The stack is being **actively rebuilt on a sub-hour cadence**, indicating it is **the author's primary working surface** during this multi-hour session, not a parked WIP. The merge of the Add. 35 reversion #19609 (Bazel timeout 45min→30min) **does not appear in any of the 5 stack diffs** — the stack is independent of `main`-direct hotfixes flowing through the same author in the same hours.

## Implications

- The `pr<N>` base-ref convention (synth #116) plus the sub-hour rebase cadence (synth #117) jointly identify this as **stacked-PR tooling output**, not hand-managed branches.
- The stack is the **dominant codex artifact in the 23:29–00:44Z observation window** (10 of the last 11 codex `updated_at` events in the window touched these 5 PRs).
- **Watch for cycle 3** at ~01:17:00Z ± 90s; absence falsifies cadence, presence sharpens to a measured-period restack signal that should be tracked as a baseline rate going forward.
