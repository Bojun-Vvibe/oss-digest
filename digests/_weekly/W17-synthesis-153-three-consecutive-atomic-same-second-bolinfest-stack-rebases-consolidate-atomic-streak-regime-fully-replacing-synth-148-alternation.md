# W17 / synth #153 — Three consecutive atomic same-second bolinfest stack rebases (#16, #17, #18) consolidate atomic-streak regime, fully replacing synth #148's alternation reading

## Pattern

Across the bolinfest stack on `openai/codex` (PRs #19606 / #19395 / #19394 / #19393 / #19392), the last three observed rebase events have all landed as **atomic same-second** events on all five PRs:

| Rebase | committedDate (UTC) | Inter-rebase delta | Geometry |
|--------|---------------------|--------------------|----------|
| #16    | ~10:04:19Z 2026-04-26 | — | atomic same-second |
| #17    | 10:55:26Z 2026-04-26 | 51m24s (long cluster) | atomic same-second |
| #18    | 11:51:44Z 2026-04-26 | 56m18s (long cluster) | atomic same-second |

Three consecutive atomic same-second rebases by `bolinfest` on the same five-PR stack, all in long-cluster inter-rebase spacing (≥51m). updatedAt propagation across the five PRs completes within ≤17 seconds of the commit timestamp in all three cases (Add.52: 0s; Add.53: 17s; Add.54: 13s).

## Discriminator vs prior synths

| Synth | Pattern                                                        | Match? | Why now-distinct                                                 |
|-------|----------------------------------------------------------------|--------|-------------------------------------------------------------------|
| #146  | Bolinfest stack rebase splits **recurrent** with non-stack-ordered geometry | No (now contradicted) | Synth #146 read split-mode as a recurring feature; three consecutive atomic rebases push the recurrence to atomic, not split |
| #148  | Atomic vs split rebases **perfectly alternating** across rebases #13–16 | **Falsified** at rebase #17 (already noted in Add.53), now **doubly falsified** at rebase #18 | Two alternation-violating events in a row; the alternation hypothesis is fully dead |
| #142  | Short-bias 4:3 from rebase#13                                  | Already unwound at rebase#17; now further inverted by rebase#18 (long again) | Long cluster now ≥6 events; short:long ratio at parity then long-leaning |

Synth #153 is **distinct** by characterizing **atomic-streak persistence** as the new live regime for bolinfest stack rebases, **and** noting that the streak co-occurs with **long-cluster inter-rebase spacing** — the two regimes (atomic geometry + long spacing) are now empirically coupled across the last three observations.

## Falsifiable predictions (for next 4 rebase events: #19, #20, #21, #22)

- **P-153.A**: Rebase #19 will land **atomic same-second** (continuing the streak to 4). If split, the atomic-streak regime is broken at length 3 and reverts to mixed-mode.
- **P-153.B**: Rebase #19's inter-rebase delta from #18 will be ≥45m (long-cluster). If <45m, the atomic↔long coupling is broken — atomic geometry can occur in short cluster too, and #153's "coupled regime" reading collapses to two **independent** regime claims (atomic streak + long streak), each weaker.
- **P-153.C**: If P-153.A and P-153.B both hold for **all** of rebases #19–#22, the atomic-long-coupled regime is **established as the dominant bolinfest stack rebase mode for W17**, and synths #146 and #148 are formally retired as W17 readings (kept only as W16 history).
- **P-153.D** (cross-stack consistency test): If a non-bolinfest stack appears on `openai/codex` in W17 with ≥3 PRs, its first rebase will land atomic same-second (testing whether atomic geometry is bolinfest-author-specific vs codex-stack-tooling-specific). If a non-bolinfest stack lands split, atomic geometry is **author-coupled**, not tooling-coupled.

## Refines / falsifies prior synths

- **Falsifies synth #148** (alternation reading) doubly — already noted at rebase #17 (Add.53), now reinforced at rebase #18.
- **Contradicts synth #146** (split-recurrence reading) — three consecutive atomic events make split-recurrence the minority regime in the latest observable window.
- **Refines synth #142** (short-bias) — short cluster has been silent for three consecutive rebase events; the bias has fully unwound and tipped long-leaning.
- **Couples to synth #150's regime B** (codex stack-only) — five consecutive windows of codex stack-only activity, all bolinfest-driven, three of which produced atomic-long rebases. The author-channel for codex regime B is now empirically a single-author single-mode channel.

## Anchor PRs / SHAs

- openai/codex#19606 head `911ab1f829e7` (rebase #18); was `d317ae2c54a6` (#17), `0d7e33845b59` (#16)
- openai/codex#19395 head `9f14fd73ae31` (rebase #18); was `87c5d8349476` (#17)
- openai/codex#19394 head `3b0d5b8ea7a6` (rebase #18); was `e10e264508ab` (#17)
- openai/codex#19393 head `76f8d3f63c82` (rebase #18); was `91f67e203d9b` (#17)
- openai/codex#19392 head `fa4b2eb2c644` (rebase #18); was `cb6f12ee239a` (#17)

All five committedDate **2026-04-26T11:51:44Z** (atomic same-second).

## Source addenda

ADDENDUM-52, ADDENDUM-53, ADDENDUM-54 (rebases #16-tail, #17, #18 respectively).
