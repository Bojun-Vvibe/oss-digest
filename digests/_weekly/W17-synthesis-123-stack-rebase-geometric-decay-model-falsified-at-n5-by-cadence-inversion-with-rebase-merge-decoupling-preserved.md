# W17 Synthesis #123 — Stack-rebase geometric-decay model falsified at n=5 by cadence inversion, while rebase/merge decoupling is preserved

**Window:** 2026-04-25 → 2026-04-26, codex 5-deep stack #19606 ← #19392 ← #19393 ← #19394 ← #19395 by `bolinfest`

## The pattern

Synth #122 hypothesized that successive full-stack rebases on a deep PR-as-base-branch stack contract **geometrically** with ρ ≈ 0.6, and predicted rebase #5 would land in **8m00s ≤ Δ ≤ 10m11s** after rebase #4. **The 5th rebase fired at 2026-04-26 01:50:20Z, exactly 29m46s after rebase #4 (01:20:34Z).** Observed ratio ρ = 29m46s / 14m33s = **2.05**, i.e., the inter-rebase interval *more than doubled*, landing **~3× above the predicted upper bound**. Geometric decay is falsified at the minimum-evidence sample (n=5 events / 4 intervals) where it could first be checked.

## Anchor data

| Rebase | Timestamp (UTC) | Δ from prior | Ratio vs prior |
|---|---|---|---|
| #1 | (synth #117 baseline) | — | — |
| #2 | + 38m43s | 38m43s | — |
| #3 | + 25m39s | 25m39s | 0.663 |
| #4 | 2026-04-26 01:20:34Z | 14m33s | 0.567 |
| **#5** | **2026-04-26 01:50:20Z** | **29m46s** | **2.046** |

Rebase #5 verification (Add.39): 4 of 5 stack PRs (#19392/#19394/#19395/#19606) all `updated_at` within a 1-second band at 01:50:20Z, with new head SHAs `cb9184a4…`/`440eee2c…`/`7caafabe…`/`b0de9cbd…`, distinct from Add.38's rebase #4 SHAs (`45d17d3b…`/`2c828684…`/`00666224…`). #19393 caught a separate update at 02:12:50Z, likely review activity rather than the rebase itself.

## What synth #122 got right vs wrong

- **Right**: identified that the stack was in an active high-frequency rebase regime; identified rebase/merge decoupling (rebase volume up, merges still 0).
- **Wrong**: assumed the underlying cadence-shaping force was *monotonic* and could be modelled as a single decay constant. The interval sequence **38m43s → 25m39s → 14m33s → 29m46s** is not monotonic — it has a single-event minimum at rebase #4 and immediately reverts.

## Reframing: cadence as bursty, not decaying

The corrected model: **stack rebase cadence on the `bolinfest` permissions stack is not a geometric decay; it is a single burst-and-cooldown around a local minimum**. Rebase #4 was the local cadence minimum (14m33s), not a point on a continuous descent. Rebase #5's interval (29m46s) is closer to the *median* of the prior intervals (38m43s, 25m39s, 14m33s → median 25m39s), suggesting reversion-to-median behaviour after a minimum.

## Cross-pattern: rebase/merge decoupling is preserved across the falsification

Critically, **the qualitative observation from synth #122's footnote — high-frequency rebase without any merge — survives** even though the quantitative geometric model didn't. As of end of Add.39:
- 5 full-stack rebases of #19606 ← #19392 ← #19393 ← #19394 ← #19395.
- 0 merges of any of those 5 PRs.
- codex repo overall: **2 consecutive empty merge windows** (Add.38, Add.39) despite being the rebase-volume leader.

This is the strongest evidence yet that **rebase frequency and merge progress are not just decorrelated but *inversely* correlated** on this stack — the pattern is robust to the cadence-shape model used.

## Falsifiable predictions

1. **Rebase #6**, if it occurs before stack-merge or 4h dormancy, will fall in the band **15m to 45m** after rebase #5 (i.e., within ±50% of the median of the 4 observed intervals 38m43s/25m39s/14m33s/29m46s, median 27m42s). A ρ ≥ 2.0 again (Δ ≥ 60m) **or** a ρ ≤ 0.5 again (Δ ≤ 14m53s) would falsify the burst-with-reversion model and indicate either dormancy onset or a second local-minimum burst.
2. **Stack-merge of any of #19392/#19393/#19394/#19395/#19606 within the next 6 windows** (≈ 4h) would terminate the rebase series and validate the "rebase storm precedes merge" reading. **Continued rebase to n≥7 with 0 merges** would falsify it and indicate a structural review/CI block, not iteration progress.
3. **Within 24h of this synth's writing (i.e., by 2026-04-27 ~03:00Z)**, either (a) the stack will have merged ≥ 1 PR, or (b) it will have been touched ≤ 1 more time. If neither holds (i.e., the stack continues to absorb ≥ 2 more rebases without merging), then the regime is mechanical-loop, not human-iteration, and merits a separate synth #N+ classification.

## Methodological note for future synths

Synth #122 hit the floor of n=4 events / 3 intervals required to *propose* a curve fit, but that floor is too low to *confirm* it. **Future cadence-shape synths should require n ≥ 5 events / 4 intervals before naming a parametric law**, and should explicitly state the falsifying band before the next event lands. Synth #122 did the latter (which is why it could be cleanly falsified here); the gap was n.

## Counter-evidence already present

The strongest counter-evidence to *any* monotonic-cadence model is that the only observed interval sequence on a single stack already contains a non-monotonic point (rebase #5). Anyone proposing a future cadence law on this same stack must explain rebase #5's reversion as either a one-off perturbation (and predict ρ < 1 again at #6) or a phase change (and predict ρ ≥ 1 sustained at #6+).
