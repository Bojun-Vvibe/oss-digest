# W17 Synthesis #100 — Author-anchored series extension via substrate-jump (closing one substrate, opening a disjoint one) past the QUARTET cap

**Anchor window:** 2026-05-05T01:52:44Z → 2026-05-05T04:08:41Z (2h15m57s).
**Anchor repo:** sst/opencode.
**Anchor actor:** `Hona` (Luke Parker).
**Sibling synths:** #97 (same-author N=3 self-merge series with shared spec-file co-touch and monotonically contracting lifespans), #99 (same-author shared-spec-anchor self-merge series extension with growing inter-PR-open gap and amplified anchor edit), and Add.341 P-341.B prediction (which assumed Hona QUARTET caps at N=4 — falsified this tick at prior 0.78).

## What this synth captures that #97 and #99 could not

Synths #97 and #99 are about a **substrate-anchored series**: each member touches the **same anchor file** (`packages/opencode/specs/effect/http-api.md` in #99), and the unit of analysis is "how does the through-line edit accumulate". The series N grows because the author keeps coming back to the same surface.

Synth #100 captures a **substrate-jumping series**: the author crosses a **substrate boundary** to extend N. Specifically, Hona's W17 series on sst/opencode looked like a closed QUARTET on the workspace.warp / UI-test substrate cluster:

| PR | Opened | Final state | Substrate cluster | Head SHA (final) |
|---|---|---|---|---|
| sst/opencode #25773 | (prior tick) | MERGED (per Add.340) | UI-unit-test in CI | (per Add.340) |
| sst/opencode #25792 | (prior tick) | MERGED (Add.341 confirmed `a81103953bef558463a3beaac77ea7caf973c935`) | Run UI unit tests in CI | `a81103953bef558463a3beaac77ea7caf973c935` |
| sst/opencode #25795 | (prior tick) | MERGED (per Add.340) | workspace.warp / SDK | (per Add.340) |
| sst/opencode #25797 | 01:52:44Z | **CLOSED 03:07:45Z** (1h15m01s open-lifetime) | `Fix workspace warp SDK null id` | `047fdd65f296672937cc03f82f3994b8c8434002` |
| sst/opencode #25813 | 04:08:41Z | OPEN at window close | **`fix(desktop): stabilize Windows titlebar zoom`** | `57c7c812f91942bd071ce5d6cacae1218659da9f` |

The QUARTET (#25773 + #25792 + #25795 + #25797) was substrate-coherent: workspace.warp SDK + UI-unit-test-in-CI surfaces are adjacent (test runner needs the SDK that warp returns). #25797 is the QUARTET's tail; **its CLOSE** at 03:07:45Z is the substrate's terminating event.

61 minutes after #25797 closes, **#25813 opens on a disjoint substrate**: `fix(desktop): stabilize Windows titlebar zoom` is a desktop/Windows shell concern with no shared file path against any of the four QUARTET members. Hona's series N is now 5, but the **substrate has rotated**.

## The substrate-jump signature in three measurable parts

**(a) Pre-jump close, post-jump open ordering.** The author **closes the prior-substrate tail** (#25797) at 03:07:45Z, waits 61m, then opens the new-substrate head (#25813) at 04:08:41Z. The close is not coincidental — closing #25797 (rather than letting it stay OPEN as a stale leg) signals **the author treats the prior substrate as terminated** before pivoting. Compare to W17-synth-99 where the substrate-anchor `specs/effect/http-api.md` PRs all *merged* in sequence; here the tail of the old substrate cluster is **explicitly closed** (not merged), which means the author is also abandoning a non-trivial fraction of pre-jump work as part of the rotation.

**(b) Substrate-disjoint anchor file set.** The QUARTET members (per Add.340 + Add.341 capture) had file overlap across `packages/opencode/src/server/routes/instance/index.ts` and the workspace.warp SDK headers. #25813's diff anchor is `packages/desktop/...` (Windows titlebar zoom plumbing). **Zero file-path overlap** against the QUARTET. There is no shared anchor file the way #99 had `specs/effect/http-api.md` as a through-line.

**(c) Inter-member gap is dominated by the close-event, not by the merge-event.** In #99, the inter-PR gap dilation was measured between merge-of-N and open-of-N+1 (21m23s for the #24356 → #24365 transition). Here the gap is **between close-of-N and open-of-N+1** (61m for the #25797 close → #25813 open), and the prior gaps inside the QUARTET were merge-to-open gaps. The series clock is **discontinuous**: the QUARTET's gap is measured against merges, the extension's gap is measured against a close. **A closed PR is a different kind of series boundary than a merged PR**, and the author treats them differently — the close-then-open transition is a deliberate substrate-pivot, not a tempo continuation.

## What this falsifies about prior W17 synthesis assumptions

W17-synth-99 implicitly modeled the series unit as "an extending vertical-slice rollout where each PR adds an HTTP-API surface route while incrementally extending the same OpenAPI spec contract". That model **predicts** that series extension past N=3 should continue **on the same substrate** (the spec file) with growing-but-still-shared anchor-file edits. Add.341 P-341.B applied the same implicit model to Hona, predicting at prior 0.78 that QUARTET caps at N=4 (i.e., assuming substrate-exhaustion = series-end).

Hona #25813 falsifies the substrate-anchored model in two ways:

1. **N can extend past the substrate's natural cap by jumping**, not just by amplifying the existing surface (compare #99's anchor-file edit jump from 1/3/1 → 24 lines, which stayed on the same file).
2. **The author identity is the series anchor, not the substrate**. The series unit is "Hona's open PRs on sst/opencode within a rolling 4h window", and the substrate is a per-member attribute, not a series-level invariant.

This means the QUARTET cardinality observation in Add.341 (Hona QUARTET stable, krrish-berri-2 QUARTET stable) was misframed: those QUARTETs may be **substrate-bounded** but the **author-series** is unbounded. A different W17 carrier could have an author whose series spans 8 PRs across 4 substrates; a substrate-anchored count would record this as four DOUBLETs and miss the author-anchored unit entirely.

## Counterfactual the data does not refute

The data is consistent with two distinct generative mechanisms for the substrate-jump:

- **(i) Author-online-window mechanism**: Hona is online for a continuous 4h window and works through whatever substrate happens to need attention next. The substrate-jump is incidental; the author was going to open more PRs regardless.
- **(ii) Substrate-saturation-rotation mechanism**: Hona deliberately closes #25797 because the workspace.warp SDK substrate has **converged or stalled** (a reviewer asked for a redesign, or the author noticed the fix was wrong), and rotates to a queued-up disjoint task on the desktop/Windows substrate.

Mechanism (i) predicts the substrate-jump should be **stochastic in substrate distance** — the next substrate is whatever's near the top of the author's todo list. Mechanism (ii) predicts the substrate-jump correlates with a **failure-signal on the prior substrate** — closes (not merges) are the trigger.

The fact that the prior-substrate tail was **closed not merged** (and that close happened 61m **before** the new-substrate open, not interleaved with it) is weak evidence for (ii). One observation is not enough to discriminate; W17-synth-100 logs the discrimination criterion for future detection: **does substrate-jump always co-occur with a close-event on the prior substrate, or does it sometimes happen after a clean merge?**

## Operational rule extracted

When counting N for an author-series within a 4h window, **do not stop counting at the first substrate boundary**. Instead:

1. Anchor on `(author, repo)` pair, not on `(author, repo, substrate-cluster)` triple.
2. Treat **close-events on prior-substrate tails** as series-membership events (they're how the author terminates a substrate before rotating).
3. Distinguish **substrate-coherent N** (e.g., Hona's QUARTET-on-workspace.warp at N=4) from **author-anchored N** (Hona's series at N=5 across two substrates) and report both.

Add.341's P-341.B "QUARTET caps at N=4" was correct under the substrate-coherent count (#25797 was the tail of a 4-leg substrate cluster) but wrong under the author-anchored count (Hona's series extended to N=5 within the next tick). Future predictions on series cap should specify which N they refer to.

## Cross-references

- W17-synth-97: same-author N=3 self-merge series (substrate-coherent, monotone-contracting lifespans). Substrate-coherent N capped naturally at 3.
- W17-synth-99: same-author series extension past triple **on the same anchor file** with amplified anchor-edit. Substrate-coherent N extended to 4.
- W17-synth-100 (this): same-author series extension past QUARTET **across a substrate boundary** via close-then-open rotation. Author-anchored N extended to 5; substrate-coherent N capped at 4.

The progression #97 → #99 → #100 traces a hierarchy of N-extension mechanisms: **(a) intra-substrate burst (#97), (b) intra-substrate amplified late-extension (#99), (c) cross-substrate jump-extension (#100)**. Each adds a degree of freedom to how a single author's W17 series can grow.

## Forward detection criterion

For Add.343 P-342.B (prior 0.18, "Hona N=5 series substrate-jumps again on a third disjoint substrate within next 2 ticks"), realization confirms the substrate-jump mechanism is **iterable** rather than one-shot. Falsification (Hona absent or returns on existing #25813 desktop substrate) confirms the substrate-jump is **a single-pivot event per online-window**.
