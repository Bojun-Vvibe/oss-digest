# W17 Synthesis #91 — Single-author triplet self-merge metronome on disjoint surfaces with sub-15-minute inter-merge cadence

**Window:** 2026-04-25 14:46:17Z → 15:08:19Z (21m45s end-to-end; three self-merge events).
**Cited PRs:** `anomalyco/opencode#24305` (head SHA `761249eed235`), `anomalyco/opencode#24309` (head SHA `3dec86b2e036`), `anomalyco/opencode#24310` (head SHA `fc720d1d52cf`). All three: author `@thdxr`, all three self-merged.

## The shape, in one sentence

A single author lands **three of his own PRs as self-merges** within a 21m45s window, with **inter-merge intervals of 13m00s and 9m02s**, where each PR (a) lives less than 14 minutes end-to-end, (b) targets a **functionally disjoint surface** from the other two, and (c) is self-merged with no intervening review activity catalogued — producing a metronome whose tick interval is **bounded by individual PR lifespan, not by an external cadence**.

## Why it doesn't fit any prior synth

| Prior synth | What it catalogues | Why this is different |
|---|---|---|
| #50 | Same-author **post-own-merge** cascade across two events | Two events, not three; #50 measures the *open of N+1 after the merge of N*. Synth #91 measures **self-merge intervals** of N+1 after N (a different temporal anchor) and requires three events. |
| #65 | Single-author micro-burst with **one** self-merge inside | Synth #65 is one self-merge plus surrounding opens. Synth #91 is **three self-merges with no opens-only events between**. |
| #77 | Single-author triplet on a **single budget surface** | Surfaces here are **disjoint** (spawn-runtime cleanup vs 166-file package rename vs startup debug command — no file overlap, no functional overlap). Synth #77 explicitly anchors on cohort-less single-surface concentration. |
| #78 / #88 | Single-author backlog **prune** with fresh open injection | These are *closes*, not self-merges. Synth #91 is three landed merges (additive to default-branch), not housekeeping. |
| #83 | Single-author **30-minute metronome** within one repo | Synth #83 catalogues a cadence-class shape with ~30m spacing across **opens or mixed events**. Synth #91 is **~10m spacing**, **self-merge-only**, with the explicit constraint that **each event terminates a PR rather than starting one**. The cadence is finer-grained and the event class is narrower. |
| #84 / #85 | Same-second / sub-10s same-author co-fire | Both catalogue *simultaneous-or-near-simultaneous* shapes with N=2. Synth #91 is **deliberately spaced** (13m and 9m intervals — well outside coordination noise) and N=3. |
| #87 | Asymmetric half-merge of sub-10s doublet | Synth #87 catalogues a *failed* doublet (half-merged, half-iterating). Synth #91 catalogues a **fully-completed triplet** — all three PRs land. |
| #90 | Single-author overlapping doublet (open precedes earlier merge) | Synth #90 catalogues *overlap window* between two PRs. Synth #91 catalogues a **non-overlapping linear sequence**: each PR's full lifespan ends before the next PR's lifespan begins (or with at most a 2-minute gap). The events are sequential, not interleaved. |

Nearest neighbor is **synth #83 + synth #50 composed**. Synth #83 supplies the cadence framing; synth #50 supplies the same-author chain framing. The decisive new fact is **the third event** plus **the disjoint-surface constraint** plus **the self-merge-only event class**. None of the prior synths treats three consecutive self-merges on disjoint surfaces as a unit.

## Load-bearing observations

- **Self-merge timestamps and lifespans:**
  - `#24305`: opened `14:38:34Z`, **self-merged `14:46:17Z`** (lifespan **7m43s**, +1/-10, 1 file, surface: spawn-runtime cleanup, head SHA `761249eed235`).
  - `#24309`: opened `14:45:20Z`, **self-merged `14:59:17Z`** (lifespan **13m57s**, +218/-218, **166 files**, surface: package rename `shared` → `core`, head SHA `3dec86b2e036`).
  - `#24310`: opened `15:01:03Z`, **self-merged `15:08:19Z`** (lifespan **7m16s**, +13/-0, 2 files, surface: startup debug command, head SHA `fc720d1d52cf`).

- **Inter-merge intervals:**
  - merge(#24305) → merge(#24309): **13m00s**
  - merge(#24309) → merge(#24310): **9m02s**
  - **Decreasing**: 13m00s then 9m02s. The cadence accelerates between events 2 and 3. Not constant-period; not a true metronome in the strict sense, but tight enough that the *order of events* is bounded by individual PR lifespans rather than by external delays.

- **Disjoint surface check (file-level):**
  - `#24305`'s 1 file is in the spawn-runtime path.
  - `#24309`'s 166 files are package-rename targets across the entire `shared`/`core` package boundary; the byte-balanced +218/-218 confirms pure rename, no semantic change.
  - `#24310`'s 2 files implement a new startup-debug CLI command.
  - The intersection of touched-file sets across the three PRs is **empty** by inspection of the three diffs (the 166-file rename is mechanical and does not touch the spawn-runtime cleanup site or the startup-debug entry point).

- **Self-merge-only event class:** between merge(#24305) at 14:46:17Z and merge(#24310) at 15:08:19Z, `@thdxr` produces **no opens-only events** outside the three PRs in question. Specifically: #24309 was opened *before* the first merge (at 14:45:20Z, 57s before #24305's merge — see synth #90 for the overlap analysis); #24310 was opened at 15:01:03Z, **1m46s after #24309's merge**. The author's only events in the window are these three open/merge pairs.

- **Independent-author noise within the same window:** `@Kayphoon` opens opencode #24311 at 15:01:12Z, **9 seconds after** `@thdxr` opens #24310 at 15:01:03Z. There is no apparent author coordination (`@Kayphoon`'s PR is +4939/-186, an entirely different scope class), but the 9-second gap means the metronome is **observable against ambient open-event noise** — it is not the only activity on the repo during the window.

## Mechanism hypothesis

`@thdxr` is operating in a **maintainer self-rebase staging discipline**: each landed PR clears the way for the next by either (a) eliminating dependency conflict (the spawn-runtime cleanup at #24305 lands before the package rename touches anything in the spawn path), (b) consolidating the new package layout (the rename at #24309 establishes the `core` namespace before the startup-debug command at #24310 is added to it — and the +13/-0 add suggests the new command was authored against the post-rename `core` namespace), or (c) flushing a small accumulated todo queue before context-switching. The accelerating interval (13m → 9m) is consistent with **dependency-ordered execution where later PRs are smaller and have less CI surface to traverse**. The self-merge-only event class implies **the author has trusted-merge authority and is operating without external review constraints in this window**.

## Prediction (falsifiable inside W17)

If this is genuinely a **dependency-ordered metronome**, the three PRs should be **mergeable in order without rebase**: #24305 should not depend on #24309 or #24310, #24309 should not require #24310, and #24310 should compile against the post-rename `core` namespace introduced by #24309. The rename PR (#24309) should be the **largest by file count** (✅ confirmed: 166 files vs 1 vs 2). If a fourth `@thdxr` self-merge appears within the next 30 minutes (by 15:38:19Z) on a fourth disjoint surface, the metronome **continues** and the cadence-acceleration pattern (13m → 9m → ?) becomes the load-bearing observable. If no fourth event appears within 60 minutes, the triplet is **a closed dependency chain**, not an open-ended cadence. **Falsification check at the next addendum:** look for any `@thdxr` self-merge in opencode after 15:08:19Z. Absence within 60 minutes confirms the dependency-chain interpretation; presence within 30 minutes confirms the cadence-as-habit interpretation.

## What this synth does NOT claim

- It does **not** claim that all three self-merges were uncoordinated/spontaneous; the dependency-chain interpretation requires that they were *planned in order*.
- It does **not** generalize to other authors. The "self-merge-only metronome" is here observed for `@thdxr` only; `@kitlangton` (Addendum 22) produced a *one* self-merge plus a *different-surface* fresh open (synth #65 shape), not a triplet.
- It does **not** claim the inter-merge intervals are stable across days. The W17 cadence-class lens (#83) suggests `@thdxr`'s typical inter-event spacing is ~30m, not ~10m; the compressed cadence here may be window-local.
