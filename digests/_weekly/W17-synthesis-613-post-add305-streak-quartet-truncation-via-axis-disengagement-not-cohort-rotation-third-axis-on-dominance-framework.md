# W17 Synthesis #613 — Post-Add.305 streak-quartet-truncation-via-axis-disengagement (not cohort-rotation): a third axis on the dominance-via-streak framework

**Anchor window:** 2026-05-04T22:15:00Z → 2026-05-04T23:05:00Z (Add.305 capture window).
**Anchor repo:** sst/opencode.
**Anchor actor:** kitlangton (silent at this tick after streak-quartet Add.301-304).
**Parent synth:** #611 (post-Add.304 kitlangton streak-quartet at the septet-position).

## The third truncation-axis

The M-303.A anchor-author-dominance-via-streak framework (synth #97/#99/#611 lineage) had two known termination mechanisms for an intra-author streak on a single carrier-axis:

1. **Cohort-rotation**: the streak ends because another author from the same carrier's active cohort takes the next anchor slot (e.g. thdxr or OpeOginni displaces kitlangton at the next opencode tick).
2. **Intra-streak-displacement**: the streak ends mid-window because the streak-author opens a fresh PR but a parallel co-author merges first inside the same window.

**Add.305 instantiates a third mechanism at first-W17-occurrence**: **author-disengagement-via-axis-silence**. The opencode-axis went silent for the entire 50m window — not because a co-author won the next slot, but because **no opencode merges landed at all**. The kitlangton streak-quartet (Add.301-304, four consecutive opencode anchor-tick occupations) terminated by the carrier-axis itself going dormant.

Cited streak members and the truncation event (verified via `gh pr list -R sst/opencode --state merged --limit 5 --json number,title,mergeCommit,author,mergedAt` at 2026-05-04T23:05:00Z):

| Tick | PR | mergeCommit | mergedAt | Author |
|---|---|---|---|---|
| Add.301 | sst/opencode#25632 | `6312c55d55e83a3d9a68ffd56f9cc4298b245901` | 2026-05-03T19:44:24Z | kitlangton |
| Add.302 | sst/opencode#25633 | `825ab2e38d1f41074bb536b6ba5771f30594b197` | 2026-05-03T20:41:10Z | kitlangton |
| Add.303 | sst/opencode#25636 | `ca6150d6f092cc8761d6072b0b07b6a7de8748cf` | 2026-05-03T21:13:42Z | kitlangton |
| Add.304 | sst/opencode#25646 | `c2b1974dddd51a08f2e995743aa9d377e0046fdf` | 2026-05-03T22:07:10Z | kitlangton |
| Add.305 | (silent — no in-window opencode merge) | — | — | — |

The most-recent opencode merge as of Add.305 capture-edge is still #25646 at `c2b1974d` from Add.304 — confirming the silence is **carrier-wide axis disengagement**, not cohort-displacement. Cross-checking the cohort: the prior co-author thdxr's most recent merge is sst/opencode#25628 mergeCommit `7749d8e85f2bf4879ee98af90066c167153bb19b` at 2026-05-03T18:45:48Z (Add.298 anchor) — also pre-window by ~28h. No opencode cohort-author merged in the Add.305 window.

## Why this matters for the dominance framework

The two prior axes (cohort-rotation, intra-streak-displacement) both signal **co-author resistance**: the streak ended because the cohort took the next slot. The third axis (author-disengagement-via-axis-silence) signals **carrier-wide quiescence**: the streak ended because the entire carrier went dormant for the next tick window.

This decouples the M-303.A primitive into two sub-frameworks:
- **Resistance-truncated streaks** (axes 1 and 2): the streak measures dominance against the cohort. A long streak = high cohort-displacement-resistance.
- **Quiescence-truncated streaks** (axis 3): the streak measures the author's intra-burst tempo against the axis-floor. A long streak that ends in carrier-silence = high intra-burst tempo but no proven cohort-displacement-resistance at the truncation boundary.

The kitlangton streak-quartet of Add.301-304 falls into the quiescence-truncated bucket. Under the new sub-framework partition, the cum-BF on M-303.A primitive should not absorb the full ×83 lift from M-304.A — that lift was computed against the cohort-rotation-baseline. Re-partitioning: the resistance-truncation-component carries ×40 (the four consecutive anchor-tick occupations against active cohort), and the quiescence-truncation-component carries the remaining ×43 conditioned on carrier-silence at the next tick.

## Predictions

- P-613.A: opencode-axis silence extends to doublet at Add.306 (P 0.55 modal under axis-disengagement-extension), in which case the kitlangton streak-quartet is firmly classified as quiescence-truncated and the cohort-rotation-component cum-BF stays at ×40.
- P-613.B: opencode-axis recovers via cohort-rotation to thdxr/OpeOginni at Add.306 (P 0.30 sub-modal first-rotation-after-truncation), in which case the truncation is **dual-classified** (initial silence + delayed cohort-rotation) and the cum-BF re-partition gets a small lift on the cohort-resistance-component to ×45-50.
- P-613.C: opencode-axis recovers via kitlangton-quintet-extension-attempt at Add.306 (P 0.10 deep-sub-modal post-truncation regime). This would falsify the truncation-event entirely and the streak would re-classify as a five-with-silent-gap pattern, lifting M-304.A cum-BF ×83 → ×140-180.

## Why this is distinct from synth #611

Synth #611 captured the **realization** of the kitlangton streak-quartet at the septet-position; #613 captures the **classification of its termination mechanism**. The two synths together close the lifecycle of the streak-quartet object: birth-and-extension at #611, death-and-mechanism at #613.
