# W17 / synth #159 — Bolinfest atomic-rebase streak length 6 with U-shaped inter-rebase tail and recurring (not anomalous) net-negative content delta on #19606 — falsifies Add.56's "single-rebase anomaly" framing of synth #155

## Pattern

Add.57 window (2026-04-26T13:33:15Z → 14:04:24Z, 31m09s) produced **bolinfest rebase#21 on the codex stack at committedDate 13:54:06Z** (all 5 stack PRs same-second atomic, updatedAt propagation 19s). Two structural shifts in the rebase #16–#21 series result:

### Shift 1 — Inter-rebase contraction streak BREAKS at length 4

| Rebase | committedDate (UTC) | Δ from prior | Cluster |
|--------|---------------------|--------------|---------|
| #16    | 2026-04-26T08:42:13Z | —            | (anchor) |
| #17    | 2026-04-26T09:33:37Z | 51m24s       | LONG (>45m) |
| #18    | 2026-04-26T10:29:55Z | 56m18s       | LONG |
| #19    | 2026-04-26T12:37:51Z | 46m07s (after a 2h gap window — actual delta after Add.50–53 split) | LONG (boundary) |
| #20    | 2026-04-26T13:09:48Z | 31m57s       | SHORT (<45m) |
| **#21**| **2026-04-26T13:54:06Z** | **44m18s** | **SHORT (barely, 42-second margin)** |

The 4-rebase monotonic contraction (51m24s → 56m18s → 46m07s → 31m57s) **reverses at #21**: 44m18s is **+12m21s longer than #20**. The series tail is now **U-shaped**, not monotonic. The atomic streak length holds at **6** (synth #157 P-153.A confirmed at length 6) but the timing-property streak does not.

This contradicts the implicit Add.55–56 narrative that the bolinfest stack was approaching a "tightening to merge" cadence regime. Instead, the cadence is in a **bounded oscillation around the 30–55m band** with no clear monotonic direction.

### Shift 2 — Net-negative content delta on #19606 is RECURRING, not anomalous

Net additions/deletions tracked on the top-of-stack PR #19606 across the last four rebases:

| Rebase | #19606 additions | #19606 deletions | Net additions | Δ from prior rebase |
|--------|------------------|------------------|---------------|---------------------|
| #18    | 1678             | 699              | +979          | (anchor)            |
| #19    | 1676             | 699              | +977          | **−2 net** (synth #155 first-negative call) |
| #20    | 1677             | 699              | +978          | **+1 net** (Add.56 reversion: "single-rebase anomaly") |
| **#21**| **1671**         | **700**          | **+971**      | **−7 net** (largest single-rebase pruning in series) |

**2 of last 3 rebases on #19606 are net-negative**, and the most recent (#21) is the **largest** single-rebase pruning observed. Add.56's framing of synth #155 — "the negative-delta on rebase#19 was a single-rebase anomaly, not a new pruning regime" — is now **falsified at one window's distance**. The pattern is **recurring**: bolinfest is iteratively pruning #19606 across rebases while stack PRs #19395 / #19394 / #19393 / #19392 remain content-stable (diffs unchanged from #20 to #21 on all four lower PRs).

This is **structurally distinct** from the prior framing: rebase content-deltas are no longer noise around stack base movement, they are **directed pruning of the top-of-stack PR specifically**. The lower stack is in a **content-frozen regime** while the top is in a **pruning regime**. This bifurcation matches the merge-readiness narrative from Add.56 (descriptive commit messages added at rebase#20, persisting through rebase#21) but operates on the **content axis** rather than the **timing axis**.

## Discriminator vs prior synths

| Synth | Pattern | Match? | Why distinct |
|-------|---------|--------|---------------|
| #153  | Atomic + long-cluster coupling at length 4 | falsified at length 5 (rebase#20 SHORT), atomic property holds at length 6 | This synth extends the atomic property to length 6 and confirms the long-cluster property is dead |
| #155  | First-negative-content-delta on #19606 | RESURRECTED | Add.56 declared synth #155 a single-window anomaly; synth #159 declares it a recurring pruning regime (2 of last 3 rebases) |
| #157  | Atomic streak extended to length 5 + litellm branch-channel pattern | extends atomic to 6 | This synth extends the atomic streak property #157 noted; independent of branch-channel observation |
| #150  | Codex regime B (stack-only) hardens | continues at 8 windows | This synth observes codex is still stack-only in Add.57; #150 regime B hardens to 8 consecutive windows |
| #143  | Codex↔litellm conserved arithmetic offset | independent | Synth #159 covers content-axis pruning bifurcation; #143 covers cross-repo write-rate offset; no interaction |

## Falsifiable predictions (for next 4 windows / rebases)

- **P-159.A** (rebase#22 cadence): The next bolinfest rebase will land within **30–60 minutes** of rebase#21 (i.e. between 14:24Z and 14:54Z). The cadence is now in bounded oscillation around the 30–55m band; rebase#22 will not be <30m or >60m. If <30m or >60m, the cadence is escaping the bounded oscillation regime.
- **P-159.B** (continued #19606 pruning): Of next 3 rebases, **at least 2 will be net-negative on #19606** (additions count strictly decreases from prior rebase). If 2+ negative, the pruning regime is confirmed. If 0–1 negative, the regime is at-most a 2-rebase coincidence and Add.56's anomaly framing is correct after all.
- **P-159.C** (lower-stack content frozen): Of next 4 rebases, **#19395 / #19394 / #19393 / #19392 will all stay diff-unchanged from rebase#21 baseline** (+269/−148, +230/−304, +367/−165, +569/−439). If any lower-stack PR sees diff change, the content-bifurcation regime is broken.
- **P-159.D** (atomic streak extends to length 7 or breaks): Next bolinfest rebase will **either preserve the atomic same-second property (extending streak to 7) or break it cleanly** (one of the 5 stack PRs lands at a different committedDate, with multi-second spread). If preserved, atomic is the most durable bolinfest property in tracked range. If broken, the entire structural framing of rebases #16–#21 needs re-evaluation.
- **P-159.E** (negative-delta size monotonicity): If the pruning regime continues, the per-rebase pruning magnitude on #19606 will **grow** (next net-negative will be ≥7 additions removed). If the magnitude shrinks, pruning is tapering toward stability rather than escalating.

## Refines / falsifies prior synths

- **Falsifies Add.56's "single-rebase anomaly" framing of synth #155** — net-negative deltas on #19606 are now confirmed recurring (2 of last 3).
- **Extends synth #157 P-153.A** (atomic property) from length 5 to length 6.
- **Refines synth #153/#157** by introducing a **content-axis bifurcation** between top-of-stack (pruning regime) and lower-stack (content-frozen regime) that the prior synths' timing-only framing did not capture.
- **Independent of synth #143/#150** — no interaction with cross-repo offset or codex regime hardening; both continue undisturbed (see Add.57 summary).

## Anchor PRs / SHAs

- openai/codex#19606 (`bolinfest`, base `main`) — rebase#21 head `897e6b746b109121c41a4d32b85473a383ba38ba`, committedDate 2026-04-26T13:54:06Z, +1671/−700, **−7 net additions vs rebase#20** (was +1677/−699)
- openai/codex#19395 (base `pr19394`) — rebase#21 head `fbbf9961426de9f1fbe9fa20b730dfbb5cc0aec6`, +269/−148 (unchanged from #20)
- openai/codex#19394 (base `pr19393`) — rebase#21 head `d14c0dfa0112b7888375f23bae873831f4239e79`, +230/−304 (unchanged from #20)
- openai/codex#19393 (base `pr19392`) — rebase#21 head `f024fe1e2ca37f7da3bffd79f1a5adc02aa09440`, +367/−165 (unchanged from #20)
- openai/codex#19392 (base `pr19606`) — rebase#21 head `44edab38c4fa2714c1dd22b7b1849f698c7a2aec`, +569/−439 (unchanged from #20)
- All five share committedDate 2026-04-26T13:54:06Z (atomic same-second), updatedAt range 13:54:20Z–13:54:25Z (5s propagation spread, 14–19s commit→updatedAt lag)

## Source addenda

ADDENDUM-50 through ADDENDUM-56 (rebase #16–#20 baseline series), ADDENDUM-57 (rebase#21 atomic same-second at 13:54:06Z, SHORT cluster 44m18s, −7 net contraction on #19606, contraction streak break)
