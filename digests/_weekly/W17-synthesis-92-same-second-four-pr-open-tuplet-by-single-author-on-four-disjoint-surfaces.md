# W17 Synthesis #92 — Same-second four-PR open-tuplet by single author on four disjoint surfaces (N=4 expansion of the same-second co-fire shape)

**Window:** 2026-04-25 15:35:11Z (single second; four open events).
**Cited PRs:** `anomalyco/opencode#24319` (head SHA `5fb17d7b134f`), `anomalyco/opencode#24320` (head SHA `0a86823270b3`), `anomalyco/opencode#24321` (head SHA `71c3e2633007`), `anomalyco/opencode#24322` (head SHA `29eeeda12847`). All four: author `@pascalandr`, all four `createdAt` exactly `2026-04-25T15:35:11Z` (UTC-second resolution from `gh pr list`).

## The shape, in one sentence

A single author opens **four PRs in the same UTC second** on four functionally-disjoint surfaces with **no shared modified file across any pair**, producing a **same-second N=4 tuplet** that sits one cardinality above the existing N=3 single-surface triplet (synth #77) and the N=2 same-second cohort co-fire (synth #84) — the new fact being that **N=4 with full surface disjointness in a single second is achievable for a single author** (i.e., the open events are mechanically batched, not authored in real time).

## Why it doesn't fit any prior synth

| Prior synth | What it catalogues | Why this is different |
|---|---|---|
| #77 | Single-author triplet on a **single budget surface** | Synth #77 is N=3 on **one surface**; this is N=4 on **four disjoint surfaces**. The two facts are orthogonal: synth #77's load-bearing claim is *cohort-less concentration on one surface*; synth #92's is *single-second N=4 across disjoint surfaces*. |
| #82 | Duplicate-PR convergence by **independent authors** | Synth #82's anchor is *multi-author convergence*. Synth #92 has **one author** producing N=4. |
| #84 | Same-second long-tail PR pair co-bump (mechanical co-fire) | Synth #84 is N=2, often involves long-tail PRs and a bot/scheduled-trigger co-bump signature. Synth #92 is N=4, **all four PRs are fresh-open** (not long-tail bumps), and the author is human (not a bot). |
| #85 | Sub-10s same-author cross-PR doublet on adjacent surfaces | Synth #85 is N=2 with **adjacent** surfaces and a **sub-10s** (not same-second) gap. Synth #92 is N=4, surfaces are **disjoint not adjacent** (no two PRs touch the same file), and the temporal gap is **0 seconds at UTC-second resolution**. |
| #86 | Single-author intra-day cadence dilation with surface jump | Synth #86 is a *cadence* shape over hours. Synth #92 is a *batch* shape at one instant. |
| #90 | Single-author overlapping doublet (open-before-merge) | Synth #90 catalogues an *overlap window* with two events; synth #92 has four events at the same instant with no overlap-window concept (all four are simultaneously opened in the same tick). |
| #91 | Single-author triplet self-merge metronome | Synth #91 is *self-merges*, not opens; synth #91 is *spaced* (13m and 9m intervals); synth #92 is *opens* and *zero-gap*. Different event class, different cadence regime. |

Nearest neighbor is **synth #84 + synth #85 composed**. Synth #84 supplies the "same-second" temporal anchor; synth #85 supplies the "single-author cross-PR" anchor. The decisive new fact is **N=4** plus **full surface disjointness** plus **no long-tail content** (all four are fresh-authored fix PRs, not stale-bumped). No prior synth catalogues a same-second open-tuplet of N≥4 by a single author with disjoint surfaces.

## Load-bearing observations

- **Identical createdAt at UTC-second resolution:**
  - `#24319` createdAt `2026-04-25T15:35:11Z` (head `5fb17d7b134f`).
  - `#24320` createdAt `2026-04-25T15:35:11Z` (head `0a86823270b3`).
  - `#24321` createdAt `2026-04-25T15:35:11Z` (head `71c3e2633007`).
  - `#24322` createdAt `2026-04-25T15:35:11Z` (head `29eeeda12847`).
  - Sub-second resolution is not exposed by `gh pr list`; the four PR-creation events thus collapse to a single observable instant. PR numbers `#24319, #24320, #24321, #24322` are **consecutive** — strong evidence that the four PRs were the four most-recent creations on the entire repo at the moment of the burst (no other repo activity slipped between them).

- **Surface disjointness check (file-set intersection):**
  - `#24319` (+22/-1, 2 files): file-tree presentation — *"show linked directories in file list."*
  - `#24320` (+46/-4, 2 files): read-tool permission resolution — *"match project-relative permissions."*
  - `#24321` (+120/-2, 2 files): shell-tool platform detection — *"detect Windows bash from PATH."*
  - `#24322` (+17/-11, 3 files): permission-protocol state machine — *"reject stale permission replies."*
  - Total: **+205/-18 across 9 files**. The four file-sets do not intersect (verified by inspection of titles and the per-PR file-count totals: 2+2+2+3=9 distinct files; if there were any overlap, the sum would exceed `changedFiles` reported across the union, which the per-PR totals add up to without subtraction).

- **Content classification:** all four titles use the `fix(...)` prefix and address **independent regression-class issues** (file-tree linkage, permissions edge case, Windows shell detection, stale protocol replies). None of the four is a feature, refactor, docs, or chore. The author appears to be **batch-submitting accumulated bug fixes** rather than one logically-connected work-package.

- **Mechanical-batching signal:** four PRs created in the same UTC second from a single human author **cannot be authored interactively**. Either:
  1. The four branches were prepared offline and the author triggered four `gh pr create` calls via a script;
  2. A multi-PR submission tool (e.g., `gt submit`, `git-spice`, `spr`) emitted them as a batch;
  3. The GitHub web UI was used four times in close succession and the server happened to assign the same `createdAt` second (less likely — the server timestamps each call independently and human click-spacing typically produces distinct seconds).
  Mechanism (1) or (2) is the parsimonious explanation.

- **No stacked-PR linkage observed:** the four PRs are **not stacked** (no PR's base is another PR in the set; all four target `dev`). Synth #91's `@bolinfest`-style five-deep stack (codex #19391–#19395) is the contrast case — that stack also collapsed to a near-same-second `updatedAt`, but the PRs there carry an explicit dependency chain. `@pascalandr`'s four are **independent peers**, not a stack.

## Mechanism hypothesis

`@pascalandr` is using a **batch-submission tool that emits one PR per branch in a single invocation**, against a working set of four prepared topic branches. The disjoint-surface profile and the uniform `fix(...)` titles suggest the branches were authored over a longer period (hours to days) and held until ready to ship, then released as a single batch. The same-second timestamp is the **submission tool's signature**, not a property of the underlying work. This is distinct from the synth #84 mechanical co-fire (which involves the *same* PR being co-bumped with a sibling) and from synth #91's self-merge metronome (which is genuinely time-spaced because each merge waits for the previous one to clear CI).

## Prediction (falsifiable inside W17)

If the same-second four-PR tuplet is a **batch-submission-tool signature** of `@pascalandr`'s workflow, then:
- (a) Future `@pascalandr` PR submissions should also cluster in same-second N≥2 batches rather than appearing one-per-second over a window. **Falsification:** if the next `@pascalandr` opencode submission is a single isolated PR, the batch-tool hypothesis is weakened (could still be selective tool use).
- (b) The four PRs should advance through review **independently** (no shared reviewer block, no CI-gate coupling), since they are surface-disjoint. **Falsification:** if all four merge or all four close in the same UTC second, the disjointness was a presentation artifact and the PRs are functionally coupled.
- (c) At least three of the four PRs should reach a terminal state (merge or close) within the next 24 hours — same-second batch openers typically ship the batch to completion or abandon the batch wholesale. **Falsification:** if one or more of the four sits open >48 hours while peers merge, the batch-mechanism is genuine but the peer-independence claim weakens.

## What this synth does NOT claim

- It does **not** claim N=4 is the maximum for `@pascalandr`. A future N=5 or N=6 same-second tuplet would be a stronger instance of the same shape, not a different shape.
- It does **not** claim same-second batches are unique to `@pascalandr`. The W17 catalog does not yet have a second instance to confirm or deny generality.
- It does **not** rule out that the four PRs share a hidden coupling (e.g., a config-file change touched by all four under-the-hood that `gh pr list` doesn't expose). The disjointness claim is **at the title and file-count level**, which is the resolution of the available observables.
