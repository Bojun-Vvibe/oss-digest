# W17 Synthesis #102 — Author-Monoculture Merge-Stream Window with Cross-Repo Asymmetric Volume Concentration on a Single Producer

**Status:** new anchor. Distinct pattern axis from synth #101 (which characterizes the *content-shape* of the kitlangton series); this synth characterizes the *merge-stream demographics* of the same window — who got merged, how concentrated, and how the cross-repo volume distributed.

**Window of evidence:** 2026-04-25 18:44:00Z → 2026-04-25 19:30:00Z (46 minutes — Addendum 28 window).

## The observation

Across **5 tracked repos** (anomalyco/opencode, BerriAI/litellm, openai/codex, ollama/ollama, sst/opencode) in a 46-minute window, the merge stream was:

| repo | merges | distinct authors | merge SHAs |
|---|---|---|---|
| anomalyco/opencode | **4** | **1** (`kitlangton`) | `95d4bb21`, `b749866f`, `b4f4134e`, `cd64b670` |
| BerriAI/litellm | 1 | 1 (`he-yufeng`) | `f63a6f1b` |
| openai/codex | 0 | — | — |
| ollama/ollama | 0 | — | — |
| sst/opencode | 0 | — | — |
| **total** | **5** | **2** | — |

PRs merged: #24365, #24366, #24368, #24014 (all anomalyco/opencode by `kitlangton`); #26401 (BerriAI/litellm by `he-yufeng`).

## Three structural facts

### Fact 1 — Author monoculture inside one repo

`kitlangton` produced **4 of 4** merges into anomalyco/opencode in this window. Three of those are spec-anchored series members (#24365, #24366, #24368 — synth #101); one is a 4-day-old long-tail TUI PR (#24014) on a structurally unrelated surface. Other authors active in the prior addendum (`pascalandr` with 14 PRs/day, `rudraksha-avatar` debut-installer-doublet, `tiffanychum` test-only PR, `rekram1-node` deepseek fix, `simonklee` 5-day-old #23557) all received **zero** merges in this window despite the volume of open PRs.

The merge gate was held by a single author for the full 46 minutes.

### Fact 2 — Cross-repo volume concentration on one producer

Of 5 total merges across 5 repos, **4 (80%)** came from one author in one repo. The merge stream is not just author-monocultured *within* a repo — it is volume-concentrated *across* the entire 5-repo perimeter on `kitlangton`. The HHI (Herfindahl-Hirschman Index) of merge attribution by author across the window is:

- `kitlangton` share: 0.8 → contribution 0.64
- `he-yufeng` share: 0.2 → contribution 0.04
- HHI = **0.68** (highly concentrated; > 0.25 = highly concentrated under standard antitrust thresholds, applied here as a structural metric, not a market claim).

For comparison, Addendum 27's window (~24 min) saw merges from `Chesars` (#26510 self-merge into staging) + `krrish-berri-2` (#26122 maintainer-merge of `mverrilli`'s PR) — N=2 merges, 2 distinct attribution actors, HHI = 0.5. Addendum 28's HHI = 0.68 is **higher** despite more total merges. Cross-repo author concentration **rose** as merge volume rose.

### Fact 3 — Three of five tracked repos went merge-silent

`openai/codex`, `ollama/ollama`, `sst/opencode` produced **zero** merges in the 46-minute window. Codex's `bolinfest` 5-deep permissions stack remains frozen across multiple consecutive windows (Addenda 22-28, ~4h+ open-no-merge dwell). Ollama and sst/opencode show no in-window activity at all. The cross-repo merge stream is not a uniform pulse — it is **two-repo-concentrated** with the other three idle.

## Why this is distinct from prior synths

- **Synth #74** (open-velocity leadership rotation) tracked *open* PR rates across consecutive ticks, not merges, and tracked rotation between repos, not concentration on one author.
- **Synth #91** (single-author triplet self-merge metronome) tracked a single repo, single author, three-merge metronome — but on **disjoint surfaces**, with sub-15m inter-merge cadence. The current observation is N=4 inside one window with one of those four being a long-tail drain on a *different* surface, and one author dominating across **the whole tracked perimeter** (5 repos), not just one repo.
- **Synth #97 / #99 / #101** characterize the *content* of the kitlangton series. Synth #102 characterizes the *demographic* shape of the surrounding merge stream — every other author in every other repo went silent or near-silent during this window.

The new structural object is: **a 46-minute cross-repo merge-stream window in which a single author produces ≥80% of all merges across a 5-repo tracked perimeter, with three of the five repos going merge-silent and the other "active" repo contributing only a single staging-branch self-merge from one other author.**

## Mechanism candidates (not yet falsified)

1. **Maintainer-shift hypothesis**: anomalyco/opencode reviewer/merge bandwidth was held by a single maintainer (`kitlangton` is a frequent in-repo merger) for this 46-minute span, and that maintainer was self-merging their own series. Other authors' PRs sit unreviewed because the merger is busy producing.
2. **Series-priority hypothesis**: the spec-anchored series has an implicit dependency chain (each PR builds on the prior — adding `httpapi` endpoints in sequence), so the single author drains their own queue before context-switching to others' PRs.
3. **Window-coincidence hypothesis**: 46 minutes is short; with a Poisson rate of ~1 merge / 5 min from the dominant author and ~1 merge / 30 min from each other author, observing 4-vs-1 in 46 minutes is not extreme. Falsifies if the same concentration recurs across multiple non-contiguous windows.

## Falsifiable prediction

If hypothesis (1) is correct, the next 60-minute window after `kitlangton` stops self-merging will show a **burst** of non-`kitlangton` opencode merges (catch-up). If hypothesis (2) is correct, the spec-anchored series ending will not produce a non-author-merge burst — instead the merge rate will fall to baseline. If hypothesis (3) is correct, the next 46-minute window with merges in opencode will randomly have HHI either above or below 0.5 with no preference.

**Detector for synth #102 recurrence:** any window of 30-90 minutes where a single author produces ≥75% of merges across the tracked 5-repo perimeter AND ≥3 of 5 repos go merge-silent. If observed ≥3 times across the remainder of W17, promote to a numbered cross-window pattern; if observed only this once, leave as a singleton structural anomaly.
