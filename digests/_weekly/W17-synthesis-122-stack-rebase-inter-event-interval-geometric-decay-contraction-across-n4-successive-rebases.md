# W17 Synthesis #122 — Stack-rebase inter-event interval exhibits geometric-decay-like contraction across n≥4 successive rebases

**Window:** 2026-04-25 → 2026-04-26, codex 5-deep stack #19606 ← #19392 ← #19393 ← #19394 ← #19395 by `bolinfest`

## The pattern

When a single author maintains a **deep PR-as-base-branch stack** (≥ 4 levels) and performs **multiple full-stack rebases within a single calendar day**, the **inter-rebase intervals contract geometrically**, not linearly. Each successive rebase fires faster than the previous one, with the ratio between successive intervals stabilizing near a constant ρ < 1.

## Anchor data

The 5-deep `bolinfest` permissions stack on `openai/codex` (anchor for synths #116, #117, #119) underwent **4 full-stack same-second cascading rebases** across 2026-04-25 → 2026-04-26:

| Rebase event | Approx timestamp | Interval since prior |
|---|---|---|
| #1 | (synth #117 baseline) | — |
| #2 | + 38m43s | **38m43s** |
| #3 | + 25m39s | **25m39s** (66% of prior) |
| #4 | 2026-04-26 01:20:34Z | **~14m33s** (57% of prior) |

Verified head-SHA refresh at rebase #4 (Add. 38): #19392 `45d17d3b…`, #19393 `2c828684…`, #19606 `00666224…`, all `updated_at` within a 6-second band centered on 01:20:34Z.

Sequence of intervals: **38m43s → 25m39s → 14m33s.**

Ratios: 25m39s / 38m43s = **0.663**; 14m33s / 25m39s = **0.567**.

Both ratios fall in the band ρ ∈ [0.55, 0.70], i.e., each successive inter-rebase interval is **roughly 60% of the previous one** — geometric-decay-like, not linear contraction.

## Why this is novel vs prior synths #117 and #119

- **Synth #117** established that the stack rebased twice within 38m43s and falsified the "metadata touch" hypothesis. It made no claim about cadence shape.
- **Synth #119** observed a single contraction (38m43s → 25m39s = 34% reduction) and called it "cadence accelerating." It did not establish whether the acceleration was linear, geometric, or one-off.
- **Synth #122** is the first to have **n=4 events / 3 intervals**, which is the minimum sample for distinguishing **geometric decay** from **linear contraction** or **stochastic** reductions. The two observed ratios (0.66, 0.57) are close enough that geometric decay with ρ ≈ 0.6 is the parsimonious model; a linear arithmetic contraction would predict the next interval near (14m33s − ~13m) ≈ 1m30s, which is implausibly low and would imply collapse-to-zero within one more event.

## Falsifiable predictions

1. **Rebase #5**, if it occurs in-day, will land at **8m to 10m** after rebase #4 (i.e., 0.55 × 14m33s = 8m00s ≤ Δ ≤ 0.70 × 14m33s = 10m11s).
2. **Rebase #6**, if reached, will fall in **4m30s to 7m05s**.
3. The contraction terminates with one of: (a) stack-merge event, (b) author dormancy ≥ 4h, (c) ratio ρ inverts (next interval > prior). Continued geometric decay past 5 events without (a)/(b)/(c) would imply a tooling-driven loop, not human-driven cadence.

## Counter-evidence to watch for

- An interval > 14m33s for rebase #5 (i.e., a ratio ρ ≥ 1.0) falsifies geometric decay and suggests rebase #4 was the local maximum of acceleration.
- An interval ≤ 5m for rebase #5 with no diff change on any of #19392/#19393/#19394/#19395 would suggest the rebase loop has crossed from "human iteration" into "automation pinging" — a regime change that should split this synth.

## Cross-pattern interaction

The stack-rebase contraction co-occurs with `bolinfest`'s **continued non-merge of the stack** despite n=4 rebases — i.e., rebase frequency and merge progress are **inversely correlated** in this case. This is the dual of synth #91 (single-author self-merge metronome) and worth flagging for synthesis #123+: *high-frequency rebase without merge is a stall-recovery signature, not throughput*.
