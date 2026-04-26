# W17 Synthesis #121 — Same-author n≥4 *active-stewardship* tuplet across heterogeneous PR ages on disjoint surfaces

**Window:** 2026-04-26 01:06:01Z → 01:43:30Z (Addendum-38, codex)

## The pattern

A single author concurrently stewards **n ≥ 4 distinct live PRs** on **disjoint surface families**, where the PRs span a **wide age dispersion** — i.e., the tuplet mixes long-aged stack PRs with same-window fresh opens — and **all n PRs receive author activity (push, edit, or open) inside a single sub-40-minute window**.

This is the *concurrent-live-state* generalization of the same-second n=4 open tuplet (synth #92) and the n=3 self-merge metronome (synth #91). Where #92 captured instantaneous fan-out and #91 captured serialized self-merge cadence, #121 captures the **steady-state load** an individual contributor sustains.

## Anchor

`fcoury-oai` on `openai/codex` in Add. 38 window:

| PR | Surface | Base | Age at window | Activity in window |
|----|---------|------|---------------|--------------------|
| #18594 | TUI keymap (slash command) | `fcoury/keymap-core` (personal) | multi-day | rebase 01:32:56Z |
| #18595 | TUI vim composer mode | `fcoury/keymap-command` (personal, on top of #18594) | multi-day | rebase 01:32:56Z (same second as #18594) |
| #19617 | TUI session header logo | `main` | ~50 min (replacement for closed #19616) | rebase 01:35:36Z |
| #19624 | Skills budget warning UX | `main` | 2 min | **fresh open 01:41:30Z** |

**Four live PRs, four disjoint surface concerns** (keymap, vim mode, header chrome, skills UX), **two distinct base regimes** (personal-stack vs `main`), **age range from 2 minutes to several days**, **all touched by the same author inside 37m29s**.

## Why this is novel vs prior W17 synths

- **vs #92** (same-second n=4 open tuplet): #92 fires all n in one second as a fan-out event; #121 is steady-state stewardship — pushes, edits, and a fresh open are interleaved across the window, not co-fired.
- **vs #91 / #97 / #99** (single-author self-merge series): those require *merges* in series; #121 has zero merges in window — it's load-bearing on **simultaneous live PRs**, not throughput.
- **vs #63** (hot-author multi-surface fan-out span): #63 measured opens-only span; #121 mixes opens with pushes on long-aged stack PRs, which is a different cognitive load profile.
- **vs #83** (single-author 30-min metronome cadence within one repo): #83 was rhythmic same-surface iteration; #121 is *parallel* across surfaces.

## Falsifiable claims

1. The author's *next* window (≤45 min) will see ≥ 1 merge or ≥ 1 close on at least one of the 4 PRs (concurrent-stewardship is a pre-merge funnel, not steady state).
2. Replacement-after-close PRs (#19617 lineage from #19616) are over-represented in n≥4 stewardship tuplets — they signal the author is recovering capacity that frees them to also touch unrelated surfaces.
3. n=4 stewardship tuplets correlate with imminent author dormancy (12+ hour gap) within 2 windows — burst-then-rest signature.

## Counter-evidence to watch for

- A 3-window stretch where the same author sustains n=4 active stewardship without any merge or close would falsify claim 1 and elevate this from "burst signature" to "steady contributor mode."
