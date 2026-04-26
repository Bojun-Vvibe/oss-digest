# W17 Synthesis #163 — synth #162's two-active-repo concentration regime collapses in 1 window via sst/opencode multi-author wake (kitlangton merge #24484 + same-second triplet #24485/#24486/#24487 + MrMushrooooom merge #24500 + alfredocristofano sequential triplet + JoaquinGimenez1 #24499); P-162.B confirmed at minimum timescale, P-162.C falsified by inverse-direction cardinality jump (+4) — and synth #161 P-161.B responsive-rebase branch independently falsified by ≥66m16s post-rebase#22 codex dormancy

**Window of evidence:** Add.58 → Add.59 transition, with anchor on Add.59 (14:31:28Z → 15:33:52Z, 62m24s).

**Prior threads being resolved:**
- Synth #162 P-162.B: silence-break expected within 3 windows in litellm/goose/OpenHands/aider — **CONFIRMED** at next-window timescale, but the wake repo set was misframed (see below).
- Synth #162 P-162.C: single-active-repo qwen-code Add.59 outcome non-trivially likely — **FALSIFIED** with maximum directional violence (cardinality went UP, not down).
- Synth #161 P-161.B: cadence compression continues if responsive-rebase reading holds — **FALSIFIED**, ≥66m16s post-#22 dormancy unambiguously rules out the responsive-rebase branch.
- Synth #160 P-160.A (bolinfest single-surface) and the implicit "yiliang114 sustains within-window single-PR cadence on #3615" — **both FALSIFIED**.

## Observation 1: synth #162 was right about timing, wrong about the wake repo

Synth #162 P-162.B explicitly named litellm / goose / OpenHands / aider as the candidates for silence-break within the next 3 windows. The actual wake set in Add.59 is:

- **sst/opencode** (4 authors, 8 events including 2 merges) — the **most-silent** repo at synth #162 issuance (6 consecutive silent windows Add.53–58), explicitly excluded from synth #162's candidate set because the silence had become "durable" enough to motivate P-162.A (sst/opencode produces no close-without-merge for remainder of W17).
- **OpenHands** (xingyaoww #14133, tofarr #14135) — IN candidate set, confirms.
- **crush** (meowgorithm #2718 merge, KimBioInfoStudio #2709 open) — NOT in candidate set.
- **cline** (FuturMix #10406) — NOT in candidate set.

**P-162.A is now in tension with the data.** P-162.A predicted no close-without-merge events on sst/opencode for remainder of W17. Add.59 had **zero close-without-merge events on sst/opencode** (both #24500 and #24484 are merges, not closes), so P-162.A is **not yet falsified** — but the underlying assumption (sst/opencode is in a durable-silence regime) is **structurally falsified** by 8 events in one window. Re-budget: P-162.A retained on technical grounds (it predicts close-not-merge, not opens-or-merges) but with **substantially reduced confidence** — the regime that justified the 4→6→7-window horizon overshoot reasoning has evaporated.

## Observation 2: P-162.C falsified by directional inversion

P-162.C named single-active-repo qwen-code as a "plausible Add.59 outcome." Actual Add.59 active-repo cardinality: **6** (sst/opencode + codex + qwen-code + crush + OpenHands + cline). Cardinality moved from 2 → 6, a jump of **+4** — the largest single-window cardinality increase in the tracked Add.50–59 range. **Maximum-directional violence falsification.** The two-active-repo regime is now confirmed as a **transient floor**, not a steady state — the natural opposing prediction P-163.A: tracked-repo activity has a **mean-reverting cardinality** around 4–5, with two-active-repo states being **single-window minima** that mechanically rebound.

## Observation 3: P-161.B falsified by codex stack dormancy

Synth #161 P-161.B framed two branches:
- (a) Compression continues (next rebase < 30m): responsive-rebase reading holds.
- (b) Cadence reverts to 30–50m band: #22 was a one-off externally-triggered event.

Actual: **≥66m16s post-#22 dormancy at window-end**, with NO further commits to any of #19392/#19393/#19394/#19395/#19606. This is **outside both branches** — neither sub-30m (compression) nor 30–50m band (revert). The data falsifies P-161.B branch (a) and **forces a third branch** not previously enumerated: the rebase-event series has **terminated** (or paused indefinitely), with #22 as the last entry. **Why this matters**: it means bolinfest has either (i) landed (or is about to land) #19606 separately and will let the four downstream PRs be merged or rebased by maintainers, or (ii) abandoned the active rebase-cadence pattern in favor of NEW work — and observation 4 below corroborates (ii).

## Observation 4: bolinfest opens first non-stack PR — single-surface concentration broken

**#19683** `test: harden app-server integration tests` by bolinfest (head `3099353c`, OPEN at 15:20:16Z) is the **first bolinfest PR in the tracked Add.50–59 range that is not a member of the #19606/#19392-19395 stack**. Synth #160 P-160.A (bolinfest single-surface concentration) is **falsified**. The combination of (a) ≥66m post-#22 stack dormancy and (b) bolinfest opens new test-hardening PR strongly suggests **bolinfest is entering a stack-cooldown phase** — the stack rebase cadence that drove synths #153/#157/#159/#161 has run its course at #22.

## Observation 5: kitlangton's inverse-direction stack pattern

**#24484 merge → #24485/#24486/#24487 same-second triple-open at 15:32:01Z (15s post-merge).** This is a **structurally inverse** pattern to bolinfest's:

| Property | bolinfest codex stack | kitlangton sst/opencode httpapi stack |
|---|---|---|
| Atomicity unit | 4-PR downstream block (synth #161 redefinition) | 3-PR same-second open triplet |
| Root behavior | persists, gets independently rebased | merges first, then triple opens against clean main |
| Direction | top-down rebase cascade | bottom-up post-merge open cascade |
| Inter-event signature | committedDate same-second on heads | updatedAt same-second on PR objects (open events) |

This is the **second discovery of a same-second multi-PR atomic pattern in W17** after bolinfest's. The mechanism is different (open-burst vs rebase-burst) but the **same-second signature is identical**. **P-163.B**: same-second multi-PR atomic patterns are a **general feature of stack-tooling-assisted workflow** (Graphite, Sapling, custom git-stack scripts), not specific to bolinfest. Test: look for further same-second triplet opens by other authors using stack-style PR titles (e.g., `feat(X): ...` series) over Add.60–63. Falsification: 0 additional same-second triplet opens by distinct authors in next 4 windows.

**P-163.C**: kitlangton's three open PRs (#24485/#24486/#24487) will merge **in numerical order, sequentially**, with inter-merge gaps in the 30s–5min band — mirroring the inverse-direction nature of the open burst. Falsification: any of the three merges out of numerical order, OR inter-merge gap > 30 min.

---

**Test horizon for P-163.A/B/C:** Add.60 through Add.63 (next 4 windows).
