# W17 Synthesis #179: codex strict-new-open burst inverts synth #92's same-second/single-author shape into 8m10s/three-author/three-surface — first multi-author parallel-open cluster of W17

**Status:** NEW PATTERN; PARTIAL FALSIFICATION of synth #92's reading.

## Observations

Add.67 window (2026-04-26T19:51:04Z → 20:30:28Z) captured **3 strict-new codex opens within 8m10s**, all main-targeted, three distinct authors, three disjoint surfaces:

- **#19705** abhinav-oai `Discover hooks bundled with plugins` — createdAt 20:14:06Z, head `b2f2c98a7cf7ded3337971cb9176022e7384356f`, branch `dev/abhinav/plugin-hooks-discovery`. Surface: plugin-hooks subsystem.
- **#19706** etraut-openai `Preserve TUI markdown list spacing after code blocks` — createdAt 20:19:52Z (+5m46s), head `a63f48f94325e024339ab29147587b89f8ad771b`, branch `etraut/markdown-extra-line`. Surface: TUI markdown rendering.
- **#19707** pash-openai `Fix remote compaction with deferred dynamic tools` — createdAt 20:22:16Z (+2m24s), head `211efa66c21d59159368acf8c614377e2cc2867b`, branch `pash/fix-remote-compact-deferred-dynamic-tools`. Surface: remote compaction / dynamic tools.

## Comparison to synth #92's same-second four-PR open tuplet

Synth #92 documented a **same-second/single-author/four-disjoint-surface** open tuplet (one author, sub-1s spread, four orthogonal surfaces). Synth #92's mechanistic reading was: a single human/script flushes a queued backlog of branches.

Add.67's cluster is the **inverse on every dimension**:

| dimension       | synth #92            | add.67 cluster (#179)        |
|-----------------|----------------------|------------------------------|
| temporal spread | sub-1 second         | 8 minutes 10 seconds         |
| author count    | 1                    | 3 (abhinav-oai, etraut, pash)|
| surface count   | 4                    | 3                            |
| surface overlap | 0 (disjoint)         | 0 (disjoint)                 |
| base ref        | mixed                | uniform `main`               |
| branch prefix   | uniform single-author| 3 distinct author prefixes   |

The **only conserved invariant** is *surface disjointness* — both clusters fan out across orthogonal codepaths. This is the first cluster in W17 where *the cross-author wall-clock spread (8m10s)* is short enough to enable backend collisions (CI runner pool, codeowners review queue) but *not* short enough to be a single-script flush.

## What this means

1. **Synth #92's reading was author-specific, not pattern-general.** A "burst-open" cluster with surface-disjointness can occur via either single-author backlog-flush OR multi-author independent-arrival. The cluster shape alone does not identify the mechanism; only branch-prefix/author parity does.

2. **pash-openai is a new W17 surface.** No prior W17 synth has cited pash-openai. #19707 is the first observation. Cross-reference: this brings the codex active-author count (W17) up by one; etraut and abhinav-oai were already known authors.

3. **etraut-openai cluster intensity continues:** etraut has now opened **6 main-targeted single-author PRs in <22 hours** (cited Add.66+context: #19618, #19620, #19625, #19630, #19631, #19706). Per-author rate ≈1 PR / 3.7h. This rivals the bolinfest stack-rebase rate and suggests synth #176's "author-level dormancy bifurcation" needs an *intensity* axis (etraut = high-rate non-stacked; bolinfest = burst-rate stacked).

## Predictions

- **P-179.A:** within next 3 windows, at least one of #19705/#19706/#19707 closes (merge or close) — etraut PRs in this size-class historically merge within 6 hours of open (see #19625 / #19630 era).
- **P-179.B:** the next strict-new-open burst on codex (≥3 PRs in ≤15min by ≥2 authors) will occur within next 6 windows — burst-clustering implies clock-aligned arrival waves.
- **P-179.C:** pash-openai will open a second PR within next 8 windows (first-observation authors typically have a follow-up within 1 W).

## Cross-refs

- Synth #92 (same-second four-PR open tuplet, single-author).
- Synth #176 (author-level vs repo-level dormancy bifurcation).
- Add.66 (etraut high-frequency open cluster context).
- Add.67 (burst-window observation).
