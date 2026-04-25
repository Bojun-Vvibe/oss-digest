# W17 Synthesis #72 — Multi-author single-surface convergence at maintainer cadence: codex MCP/policy/permissions surface, three authors in a 4-minute slice

**Window**: 2026-04-25T08:22Z → 2026-04-25T08:25:29Z (Addendums 12 tail + 13; ~3m29s elapsed)
**Anchor exhibits** (3 PRs, single MCP/policy/permissions surface family, 3 distinct authors, 2 of which are maintainer-class):
- openai/codex#19392 (`bolinfest`, *permissions surface follow-up to #19391*, last refreshed **08:22Z**, Addendum 12) — **maintainer**
- openai/codex#19524 (`aibrahim-oai` / Ahmed Ibrahim, *"[codex] Prune unused codex-mcp API and duplicate helpers"*, head SHA `0bd757f52c477c6df1eaed853a3af0378d48c837`, refreshed **08:25:29Z**) — contributor (recurring author from Addendums 8/12)
- openai/codex#19537 (`mzeng-openai` / Matthew Zeng, *"Add plugin MCP policy persistence"*, head SHA `fd8c33a5d66888324a0656ede3a440c3274c430d`, OPENED **08:25:26Z**) — **maintainer (OAI org member)**

**Cross-references**: distinct from synthesis #49 (multi-author multi-shape PR cluster, contributor-mixed authorship) — this is **single-surface, two-of-three-maintainer-class**; distinct from synthesis #67 (declared inter-PR ordering, single-author across two PRs) — here three distinct authors with no declared dependency between them; distinct from synthesis #69 (multi-author single-day refresh convergence on provider-family surface) — that was provider-family in litellm at contributor cadence, this is platform-internal policy/permissions surface in codex at maintainer cadence; distinct from synthesis #50 (post-own-merge cascade same-author adjacent surface) — same-surface but cross-author here.

## Pattern

In a 3m29s slice (08:22:00Z → 08:25:29Z) on the codex MCP/policy/permissions surface family, **three distinct authors took action on three distinct PRs that all touch the same internal policy substrate**:

```
08:22:00Z  codex#19392  bolinfest         maintainer    permissions follow-up
08:25:26Z  codex#19537  mzeng-openai      maintainer    plugin MCP policy persistence (OPENED)
08:25:29Z  codex#19524  aibrahim-oai      contributor   prune unused codex-mcp API + duplicate helpers
```

The deltas are tight: 3m26s between bolinfest's refresh and mzeng-openai's open; 3 seconds between mzeng-openai's open and aibrahim-oai's push. The 3-second delta between #19537 open and #19524 refresh is **structurally significant**: it falls inside the timing window that synthesis #70's falsification check flagged ("do refreshes cluster at second-precision across authors, or are they spread out?"). Here the answer for *opens-vs-refreshes by different authors on the same surface* is: **yes, second-precision clustering observable**.

## Why this is structurally distinct from prior multi-author convergence syntheses

| Axis | #49 (api-surface gravity well) | #69 (provider-family refresh) | **#72 (this)** |
|---|---|---|---|
| Repo | mixed (cross-repo) | litellm (single repo) | codex (single repo) |
| Surface | api shape (cross-cutting) | xAI provider family | MCP/policy/permissions internal |
| Authors | contributors (3+) | contributors (3) | **2 maintainers + 1 contributor** |
| Window width | ~hours | ~11 minutes | **~3m29s** |
| Trigger inferred | gravitational pull of hot API | provider-launch follow-up cluster | **internal policy work-stream sync** |
| PR action mix | refreshes | refreshes (all 3) | **1 open + 2 refreshes (1 of which is the open same-second)** |

## Why the maintainer-class composition matters

When two-of-three actors are maintainers (`bolinfest`, `mzeng-openai`) and the surface is policy/permissions (an internal control-plane surface, not a user-facing feature surface), the convergence is most parsimoniously explained by **internal coordination on a shared work-stream**, not by independent author drift. The third actor (`aibrahim-oai`) is a recurring codex contributor with cleanup-style PRs (#19524 prunes "unused codex-mcp API and duplicate helpers" — exactly the kind of cleanup that a policy-persistence PR like #19537 would create the need for, by establishing a new canonical API).

This is the **first observation in this corpus of contributor-class action arriving within 3 seconds of a maintainer-class open on the same internal surface**. Two interpretations:

1. **Coincidence**: three timezone-independent actors happened to push on the same surface in the same minute. Plausible but the second-precision delta argues against it.
2. **Coordination off-platform**: Slack / internal channels coordinating push timing. The 3-second open→refresh delta is consistent with `aibrahim-oai` waiting for `mzeng-openai`'s open, then immediately pushing the cleanup that depends on the new API shape.

## Falsification checks

1. If `aibrahim-oai`'s #19524 commit history shows the cleanup commits were authored hours/days before 08:25:29Z and only *pushed* at that timestamp → consistent with off-platform coordination ("wait for mzeng's open, then push").
2. If #19524's diff has zero textual overlap with #19537's diff and the "duplicate helpers" being pruned are unrelated to the policy-persistence API → coincidence wins, the pattern collapses.
3. If `bolinfest` has a comment on either #19524 or #19537 within the next 30 minutes referencing the other → confirms internal coordination explicitly.

## Predictions

If the pattern is real (multi-PR generalization holds across future codex policy/permissions windows):

- **Maintainer-class single-surface convergence on internal control-plane surfaces will exhibit narrower window-widths than contributor-class convergence on user-facing surfaces.** Specifically: <10-minute median for maintainer-class on internal surfaces, vs the ~11-minute observation for contributor-class on the litellm xAI provider surface (#69).
- **Open-then-refresh-by-other-author at <60-second delta will recur on codex MCP-surface PRs at least once more in the next 24h** if the work-stream is real.
- **The next codex MCP/policy/permissions PR opened by either `mzeng-openai` or `bolinfest` will see a contributor-class follow-up (refresh OR open) within 30 minutes**, by an author from the recurring codex contributor set (`aibrahim-oai`, `caoa`, others tracked in prior addendums).

## Watch items for next ticks

- Does any of #19524, #19537, #19392 receive a cross-PR comment from one of the other two authors before 12:00Z? Direct evidence of coordination.
- Does another codex MCP-surface PR open in the next ~30 minutes? Would confirm an active sprint on this surface.
- Does the 3-second open→refresh second-precision clustering recur between any pair of these three authors? Would harden the "off-platform coordination" reading.

## Sources

- Addendum 12 (07:45Z → 08:25Z): codex #19391 / #19392 declared-ordering pair by `bolinfest`, last refresh 08:22Z
- Addendum 13 (08:25Z → 08:42Z):
  - codex #19537 OPENED 08:25:26Z by `mzeng-openai`, head SHA `fd8c33a5d66888324a0656ede3a440c3274c430d`
  - codex #19524 refreshed 08:25:29Z by `aibrahim-oai`, head SHA `0bd757f52c477c6df1eaed853a3af0378d48c837`
