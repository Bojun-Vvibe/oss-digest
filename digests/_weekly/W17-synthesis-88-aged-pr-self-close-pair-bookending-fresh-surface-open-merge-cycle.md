# W17 Synthesis #88 — Aged-PR self-close pair on disjoint surfaces book-ending one fresh-surface open-merge cycle (single-author multi-surface queue triage)

**Window anchor:** Addendum 21 (2026-04-25 13:30Z–14:20Z), with backreference to Addendum 20 and synth #78.

## Lens

Synthesis #78 catalogued **single-author backlog prune with fresh open injection on the same surface** — an author closes an aged PR and opens a new one on the *same* surface in the same window, treating the close as a refile-on-the-same-axis. Synthesis #41 catalogued **stacked PR rejected after parent merged** (review-driven, not author-driven). Synthesis #50 catalogued **post-own-merge same-author cascade** (success on PR A triggers A2/A3 same-author follow-ups on the same surface).

This synthesis isolates a **structurally different shape**: a single author, within a 24-minute window, executes **two aged-PR self-closes on two disjoint surfaces, book-ending exactly one fresh-surface open-merge cycle**. The author is not refiling, not stacking, not following up — they are **triaging a multi-surface PR backlog by closing dead branches on disjoint old surfaces while simultaneously shipping work on a new third surface**. The pattern is single-author **multi-surface queue triage** with the fresh-surface success in the *middle* of the cleanup, not before or after it.

This is the **temporal signature of an author choosing to declare bankruptcy on two unrelated stalled efforts in order to lock in fresh-surface progress**: the close-open-open-merge-refresh-close cascade is **structurally a Q-shape in surface-vs-time**: enter on stalled surface A (close), pivot to fresh surface C (open + open + merge + refresh), exit on stalled surface B (close). Surfaces A, B, C are pairwise disjoint.

## Anchor evidence — `aibrahim-oai` codex 24-minute cascade (Addendums 20 → 21)

| Event # | Time (Z) | PR | Action | Surface family | PR age at action | Δ from prior |
|---:|---|---|---|---|---|---|
| 1 | 13:18:18 | #18787 | self-close (unmerged) | realtime / codex-core teardown | **4d11h19m** | — |
| 2 | 13:21:30 | #19526 | OPEN | codex-mcp item-ordering / visibility | (fresh, draft 5h57m old) | +3m12s |
| 3 | 13:21:39 | #19524 | OPEN | codex-mcp API pruning + duplicate helpers | (fresh, draft 6h11m old) | +9s |
| 4 | 13:36:08 | #19524 | **MERGED by author (self)** | (same as above) | 14m29s old at merge | +14m29s |
| 5 | 13:41:22 | #19526 | refresh (head SHA push) | (same) | 19m52s old | +5m14s |
| 6 | 13:42:21 | #19064 | self-close (unmerged) | OAuth bootstrap via HttpClient (`[5/5]` of a 5-PR stack tail) | **2d12h08m** | +59s |

Total span: **24m03s**. Three pairwise-disjoint surface families: realtime/codex-core teardown, codex-mcp visibility/pruning, OAuth-via-HttpClient stacked refactor.

Load-bearing observations:

- **Both self-closes are on aged unmerged PRs** (4d11h and 2d12h), and both are explicitly *self-closes* (`closed_at` by author, no maintainer involvement, no `closes #X` linkage).
- **#19064 is the `[5/5]` tail of a five-PR stack**. Closing the tail of a stacked refactor 21 minutes after self-merging an unrelated mcp PR is **author-driven stack abandonment triggered by parallel-surface success** — the author is consciously choosing to ship the new fast thing (mcp pruning) instead of finishing the stack tail.
- **The fresh-surface activity sits in the middle** (events 2–5), not before or after the closes. The cascade is **B-then-C-then-A**, not B-then-A-then-C — i.e., the author *did not* clean up before pivoting; they *interleaved* cleanup with pivoting, with the cleanup brackets ordered by surface staleness (oldest [4d11h #18787] first, second-oldest [2d12h #19064] last).
- **Net author state at end of window**: -2 unmerged stalled PRs from the queue, +1 self-merged fresh PR, +1 fresh open under iteration. The author goes from **four open backlog items and zero fresh wins** to **two open backlog items, one fresh win, one fresh in-flight** — a **net-positive queue triage**.

## Falsification cases — what would invalidate this lens

1. **If #19064 is reopened within ~24h**, the close was not a queue-triage abandonment; it was a transient close (e.g., to drop CI noise, to re-target the base branch). The lens then collapses into a different shape.
2. **If a third aged PR by the same author is closed within the next ~hour on yet another disjoint surface**, this is not a *book-ending pair* but an extended **multi-surface mass-prune** — synth #88 weakens; the right lens is "single-author multi-surface backlog declaration of bankruptcy."
3. **If the fresh-surface PRs (#19524 + #19526) themselves get reverted or closed within ~24h**, the *fresh-surface success* center of the Q-shape vanishes and the closes look retrospectively like noise, not triage.
4. **If `aibrahim-oai` shows the same B-C-A book-ending shape on a different day in W17–W18**, it is the author's personal habit, not a single-day artifact. (This *strengthens* the lens, but only if multiple instances are observed; one-off doesn't generalize.)

## Distinctness from prior synth

| Synth | Pattern | This synth differs by |
|---|---|---|
| #41 | Stacked PR rejected after parent merged | Author self-closes, not maintainer rejection; close is on **stack tail**, not on **child of merged parent** |
| #50 | Post-own-merge same-author cascade | Cascade is on the **same surface** in #50; here the closes are on **two surfaces both disjoint from the merged surface** |
| #52 | Overlapping double-jump close-and-refile | #52 is close-then-refile-on-same-axis (single surface); here close is on **disjoint** surface (no refile) |
| #65 | Single-author micro-burst with self-merge inside | #65 has merge inside a single-surface burst; here the merge is **inside a fresh surface** that sits *between* two cleanups on **disjoint surfaces** |
| #78 | Single-author backlog prune with fresh open injection | #78 is **same-surface** prune+open; here prune is on **two disjoint surfaces both different from the fresh-open surface** |
| #84 | Recurring same-second long-tail PR pair co-bump | #84 is mechanical co-fire on adjacent PRs; here closes are 24 minutes apart and on **non-adjacent** surfaces |

Synth #88's nearest neighbor is synth #78. The decisive difference: **disjointness of cleanup surfaces from the fresh-progress surface, and from each other.** Synth #78 is a one-axis maneuver; synth #88 is a three-axis maneuver.

## Why this matters mechanistically

The Q-shape (close-old-A → open-fresh-C → merge-fresh-C → close-old-B) reveals **what the author was actually doing all morning**: the draft branches for #19524 (created 07:10:04Z) and #19526 (created 07:24:31Z) were prepared **~6 hours before the window**. The aged PRs #18787 (4d11h) and #19064 (2d12h) had been sitting in the queue for days. The 13:18Z–13:42Z window is **the moment the author chose to flip the new drafts to open AND retire the old ones**.

This is **batch-mode PR-queue management**: the author bundles "ship new" and "abandon old" into one ~24-minute session, rather than handling them in separate sessions or in temporal order. The cost-minimization logic: doing them together means one mental context-switch into "PR queue mode" instead of two; the act of *opening* the new doublet may itself trigger a mental sweep of "what else can I close while I'm here?"

If this is the mechanism, it predicts that **aged-PR self-closes cluster temporally with fresh-PR opens by the same author**, regardless of surface relationship. The fresh-surface success is the **trigger** for the cleanup, not its target.

## Predictive value

If the lens holds, expect:

1. **A future fresh-PR open burst by `aibrahim-oai` in W17–W18** to be accompanied (within ~30 minutes either side) by **at least one aged-PR self-close on a surface disjoint from the fresh burst.** If next burst has zero aged self-closes, the trigger-mechanism is wrong.
2. **Other `*-oai`-cohort accounts** (`mzeng-openai`, `mchen-oai`) **to show the same Q-shape if they have aged backlog**. If they don't, the pattern is per-author and not cohort-wide.
3. **Aged-PR self-closes in codex during W17–W18 to disproportionately occur in temporal proximity to fresh-PR opens by the same author**, more than would be expected from a uniform-rate cleanup background. If self-closes are uniform-distributed in time, the synth #88 trigger-coupling claim is wrong.

## Cited PRs

- `openai/codex#18787` — sha `5c85133b552b` — self-closed unmerged 13:18:18Z by `aibrahim-oai`, age 4d11h19m, surface: realtime/codex-core teardown
- `openai/codex#19526` — sha `fa4b5dcdd4e5` → `34f1839017d7` — opened 13:21:30Z by `aibrahim-oai`, refreshed 13:41:22Z, surface: codex-mcp item-ordering/visibility
- `openai/codex#19524` — sha `8a3719048a40` — opened 13:21:39Z, self-merged 13:36:08Z by `aibrahim-oai` (+3/-493), surface: codex-mcp API pruning
- `openai/codex#19064` — sha `f128f30011dd` — self-closed unmerged 13:42:21Z by `aibrahim-oai`, age 2d12h08m, surface: OAuth bootstrap via HttpClient (`[5/5]` stack tail)
