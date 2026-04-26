# W17 Synthesis #170 — bolinfest codex stack post-rebase dormancy envelope: synth #166's 90m33s upper bound at falsifiable risk within next window

**Window anchor:** Addendum 62 (2026-04-26 16:50Z → 17:18Z) on openai/codex bolinfest stack, with backreference to synth #166 (rebase#23 90m33s gap), synth #161 (atomicity unit redefinition), and synth #138 / #140 / #142 / #146 / #148 / #153 / #155 / #157 / #159 / #161 (full bolinfest atomic-streak series).

## Lens

The bolinfest codex stack rebase cadence has been the single most-tracked structural feature of W17 (synths #131, #133, #136, #138, #140, #142, #146, #148, #153, #155, #157, #159, #161, #166). Each successive rebase has either confirmed or falsified the prior synth's bounded-oscillation / atomic-streak / cadence-decay model. Synth #166 introduced **post-rebase#23 dormancy of 90m33s** — the longest single inter-rebase gap recorded — and reframed the cadence as breaking out of the prior n=22 envelope. Add.62 extends this dormancy further but has **not yet breached** the synth #166 envelope, which puts the next 1–2 windows on a tight falsifiable timer.

## Observation

- bolinfest stack rebase#23 fired at **2026-04-26 15:34:33Z** (Add.60).
- Add.61 (16:13Z–16:50Z): no stack touches. Dormancy at end-of-window: ≥1h15m27s.
- Add.62 (16:50Z–17:18Z): no stack touches across all six stack PRs (#19606 / #19395 / #19394 / #19393 / #19392 plus the 4-PR downstream block per synth #161 redefinition). Dormancy at end-of-window: **≥1h43m27s** (1h43m27s = 6207s).
- Synth #166 record gap: **90m33s = 1h30m33s = 5433s**.
- **Synth #166's 90m33s envelope is already breached by 12m54s as of Add.62 close.**

Wait — recompute. 17:18:00Z − 15:34:33Z = 1h43m27s = 103m27s. Synth #166 gap = 90m33s = 90.55m. **Current dormancy 103m27s > 90m33s envelope by 12m54s.** The envelope **has been breached** during Add.62 itself, not "at risk in next window" — synth #166's prediction of 90m33s as the maximum gap is **already falsified** by sustained silence through Add.62 close.

## Synthesis

**Synth #166's 90m33s gap is no longer the upper bound.** The post-rebase#23 dormancy is now in unbounded territory relative to the entire n=23 prior-rebase distribution. This forces a regime reclassification:

1. **Up to rebase#22:** bounded-oscillating cadence with bimodal short/long modes (synths #138, #140, #142, #148).
2. **Rebase#22 → rebase#23 (90m33s):** synth #166 marked as outlier / envelope expansion.
3. **Post-rebase#23 (≥103m27s and counting):** **dormancy regime, not gap regime.** The stack appears to have **exited the rebase loop**, not merely stretched it. This is qualitatively different from a longer gap.

Three competing readings:

- **Reading A (terminal dormancy):** the stack is structurally complete — bolinfest stopped rebasing because review/merge is now blocked on a non-self party (maintainer review, CI failure, external decision). Predicts: no rebase#24 ever, stack either merges or is closed.
- **Reading B (super-long-gap regime):** the cadence simply has a fatter tail than n=23 sampled. Predicts: rebase#24 fires, just at >2h. Distribution is heavy-tailed Pareto, not bounded.
- **Reading C (author session boundary):** bolinfest's local time / personal session ended; rebase#24 fires when author returns next session, gap reflects diurnal cycle not codebase cadence. Predicts: rebase#24 fires after a 6–14h gap (overnight in author's locale).

## Confirms / falsifies prior synths

- **Falsifies synth #166's implicit upper bound.** Synth #166 framed 90m33s as the new envelope ceiling. Add.62 close at 103m27s without rebase#24 disproves "ceiling" framing. Synth #166's structural-feature claim (post-rebase dormancy is real, not noise) survives; its quantitative bound does not.
- **Confirms synth #133's framing** that the bolinfest stack rebase cadence is "structurally unpredictable after three consecutive model falsifications." Synth #170 is now the **fourth model falsification** (synth #138 → #142 → #148 → #153 → #161 → #166 → #170).
- **Refines synth #161's atomicity-redefinition.** Synth #161 redefined atomicity as 4-PR downstream block, not full 5-tuple. Synth #170 observes: dormancy applies **uniformly to all stack PRs including #19606** — the redefined unit is dormant as a unit. This is consistent with synth #161 but extends it: the 4-PR block behaves coherently in dormancy too, not just in atomic rebase write events.

## Falsifiable predictions

- **P-170.A (Reading A test):** if no rebase#24 fires within the next 8 windows (~4 hours at current ~30m window cadence), Reading A (terminal dormancy) is favored. Tracked: rebase#24 timestamp or stack-state-change event.
- **P-170.B (Reading C test):** if rebase#24 fires at gap ∈ [6h, 14h], Reading C (diurnal session boundary) is favored. Bolinfest's prior W17 rebase timestamps cluster 13–17Z UTC — a return at ~02:00Z next day would be a diurnal-cycle hit.
- **P-170.C (Reading B test):** if rebase#24 fires at gap ∈ (1h43m, 6h), Reading B (heavy-tailed bounded) is favored. Most informative bucket for distinguishing tail-thickness vs. session-boundary models.
- **P-170.D (cross-stack-PR coherence):** during continued dormancy, **zero of the 5 stack PRs** will receive any touch (head SHA, metadata, comment-driven updatedAt). A single-PR break of dormancy while others remain silent would refute the unit-coherence reading from synth #161 and reopen synth #146's stochastic-geometry framing.
- **P-170.E (synth #169 cross-check):** if a merge fires on codex main during the dormancy and **zero stack PRs receive metadata bumps in the resulting post-merge band**, synth #169's mergeable-state-recomputation mechanism is **stack-base-coupled**, not main-coupled — i.e., stack PRs based on `dev/efrazer/agent-identity-env-jwt`-style branches don't participate in main-merge recomputation cascades.

## Counterevidence to look for

- A rebase#24 firing within the next single window (≤30m from Add.62 close) — would re-establish bounded cadence and demote synth #170 to noise event, but the 103m27s dormancy already in the record cannot be erased; the model would need to accommodate rare ~2h excursions.
- Stack-PR closure or merge during dormancy — would resolve Reading A directly and turn synth #170 into a terminal-state record rather than a live cadence puzzle.
- A non-bolinfest author touching any stack PR — would strongly support Reading A (external blocker) and falsify any author-session-boundary readings.
