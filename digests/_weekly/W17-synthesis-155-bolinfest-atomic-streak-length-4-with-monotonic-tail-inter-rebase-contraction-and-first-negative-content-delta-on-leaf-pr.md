# W17 / synth #155 — Bolinfest stack atomic-streak extends to length 4 with monotonic-tail inter-rebase contraction; atomic-long coupling now at threshold margin

## Pattern

The bolinfest stack on `openai/codex` (PRs #19606 / #19395 / #19394 / #19393 / #19392) produced a fourth consecutive atomic same-second rebase at **2026-04-26T12:37:51Z** (rebase #19, all five PRs commit-stamped to the same second, updatedAt propagation in 13s). Combined with rebases #16, #17, #18, the tracked atomic-streak length is now **4**, satisfying synth #153's P-153.A.

| Rebase | committedDate (UTC)      | Inter-rebase delta | Cluster | Atomic? | Net adds on #19606 |
|--------|--------------------------|--------------------|---------|---------|--------------------|
| #16    | ~10:04:19Z 2026-04-26    | —                  | —       | yes     | (baseline)         |
| #17    | 10:55:26Z 2026-04-26     | 51m24s             | long    | yes     | +1696              |
| #18    | 11:51:44Z 2026-04-26     | 56m18s             | long    | yes     | +1678              |
| #19    | 12:37:51Z 2026-04-26     | **46m07s**         | long*   | yes     | **+1676**          |

(* "long" defined per synth #153 P-153.B as ≥45m. #19's 46m07s clears the threshold by 1m07s, the tightest margin in the tracked long-cluster series.)

Two simultaneous developments distinguish #19 from #17 and #18:

1. **Inter-rebase delta is contracting**: 51m24s → 56m18s → 46m07s. Not strictly monotone (the #18 step expanded), but the #18→#19 contraction is the largest single-step change in the tracked rebase series at **−10m11s**. The delta is now **at threshold margin** for synth #153's atomic-long coupling.
2. **Net additions on #19606 contracted by 2** (+1678 → +1676). First **negative-delta** content rev across rebase#16-#19. All prior rebases produced net-positive or net-stable additions on #19606. This suggests rebase#19 is not a pure base-bump but includes a small pruning component on `bolinfest`'s side of the diff, while still preserving the atomic same-second propagation across the five PRs.

## Discriminator vs prior synths

| Synth | Pattern | Match? | Why distinct |
|-------|---------|--------|---------------|
| #153  | Atomic-long coupling at length 3 | extends | #155 is the length-4 extension and adds the **margin-contraction** dimension — atomic-long is no longer at "comfortable" 6m24s margin (rebase #18) but at **1m07s** margin (rebase #19) |
| #146  | Split-recurrence reading | further contradicted | Length-4 atomic streak makes split-recurrence the minority regime in the tracked range by an even wider margin |
| #142  | Short-bias 4:3 from rebase #13 | further unwound | Three consecutive long events; short cluster has been silent four rebase events running |
| #148  | Atomic vs split alternation | retired | Length-4 atomic streak triple-falsifies alternation; #148 is now W16 history only |
| #97   | Same-author n3 self-merge series with monotonically contracting lifespans | partial structural echo | #97 is on merged self-PRs with shrinking lifespan; #155 is on stack-rebases with shrinking inter-rebase delta — same shape, different surface (rebase cadence vs PR lifespan) |

Synth #155 is **distinct** by characterizing **atomic-streak extension to length 4 with concurrent inter-rebase delta contraction approaching the long/short threshold**, AND **first negative content-delta on the leaf PR** of the stack. The combination of these three signals (atomic geometry + long cluster + contracting margin + content pruning) suggests rebase #19 is the **transition rebase** — the last "long" event before either the streak breaks or the cluster flips short.

## Falsifiable predictions (for next 4 rebase events: #20, #21, #22, #23)

- **P-155.A**: Rebase #20 will land **<45m** after #19 (i.e. `<13:22:51Z` if #20 occurs in the next ~45m). If <45m, the atomic-long coupling **breaks** — atomic streak may continue but the long-cluster constraint fails, and synth #153 collapses to "atomic streak only" (a weaker claim).
- **P-155.B**: Rebase #20 will land **atomic same-second** (extending the streak to 5). If split, the streak terminates at 4 and the regime reverts to mixed-mode.
- **P-155.C**: Rebase #20 will produce a **net additions delta on #19606 ≤ +1676** (continuing the contraction). If +adds rises (e.g. ≥ +1700), the rebase #19 pruning was a one-off, not the start of a contraction trend.
- **P-155.D** (joint test): If P-155.A AND P-155.B both hold (sub-45m AND atomic), the rebase #19 transition reading is confirmed; the new live regime is **atomic-short coupling**, distinct from synth #153's atomic-long coupling. If P-155.A holds but P-155.B fails (sub-45m AND split), the atomic streak terminates exactly when the cluster flips — supporting an **atomic-IFF-long** invariant rather than two independent regimes.
- **P-155.E** (cross-stack negative test): If a non-bolinfest stack appears on `openai/codex` in W17 with ≥3 PRs, its first rebase will land atomic same-second (per synth #153 P-153.D, repeated here). If split, the entire atomic-long coupling is **author-coupled to bolinfest**, not codex-tooling.

## Refines / falsifies prior synths

- **Extends synth #153** to length 4; P-153.A confirmed.
- **Tests synth #153 P-153.B** at threshold; the 1m07s margin makes the next rebase the decisive test.
- **First negative content-delta** on #19606 across the rebase #16-#19 series — this is a **new dimension** not predicted by any prior bolinfest-stack synth.
- **Couples with synth #150 regime B** (codex stack-only) which extended to length 6 in Add.55 — bolinfest is now the **sole codex author-write channel for six consecutive windows AND four consecutive atomic-long rebases**. The two regimes are reinforcing.

## Anchor PRs / SHAs

- openai/codex#19606 head `58b111611cfb` (rebase #19, +1676/−699); was `911ab1f829e7` (#18, +1678/−699), `d317ae2c54a6` (#17), `0d7e33845b59` (#16)
- openai/codex#19395 head `62788b743cf6` (rebase #19, +269/−148); was `9f14fd73ae31` (#18)
- openai/codex#19394 head `d623f2e705a8` (rebase #19, +230/−304); was `3b0d5b8ea7a6` (#18)
- openai/codex#19393 head `b1aad0444ae1` (rebase #19, +367/−165); was `76f8d3f63c82` (#18)
- openai/codex#19392 head `5f1835244012` (rebase #19, +569/−439); was `fa4b2eb2c644` (#18)

All five committedDate **2026-04-26T12:37:51Z** (atomic same-second). updatedAt 12:38:03/04Z (propagation 13s, identical to rebase #18).

## Source addenda

ADDENDUM-52 (#16 tail), ADDENDUM-53 (#17), ADDENDUM-54 (#18), ADDENDUM-55 (#19).
