# W17 Synthesis #78 — Single-Author Backlog-Prune-With-Fresh-Open Injection: Self-Closes Plus a New Open in One Tick

**Status:** new pattern observation. No prior synthesis covers this exact shape.

## Pattern

A single author, in one ~30-minute window, **closes multiple of their own long-open PRs (self-closes, not maintainer merges)** and **simultaneously opens at least one fresh new PR** on a related-but-distinct surface. The closes span a wide age distribution (fresh + multi-week-old), and the fresh open arrives *between* close events (not before, not after) — i.e., the author is *interleaving* backlog cleanup with new-work injection rather than batching.

This is structurally distinct from:
- *batch close* (close N old PRs together, no fresh open) — the long-tail-pruning shape;
- *fresh-open burst* (open N new PRs together, no closes) — the rapid-fire opens shape (synthesis #47, #61, #77);
- *post-merge cascade* (merge or maintainer-driven close triggers downstream) — synthesis #50.

The injected fresh open is the **distinguishing feature**: the author is signaling *"I'm cleaning up stale work AND I have new work to file in the same surface family"* in a single coordinated action.

## Concrete instance (today)

`jeevan6996` (`Jeevan Mohan Pawar`) in anomalyco/opencode, all touching the **opencode TUI / config / session-cwd** family of surfaces, in a 31m39s window:

1. **#24118** CLOSED 2026-04-25T09:53:01Z — *"fix(config): avoid parseManagedPlist crash on non-object JSON."* Created 2026-04-24T07:23:10Z (~26h old, head SHA `cccbd5998bf6`). Mid-tail self-close on config-parser hardening surface.
2. **#20769** CLOSED 2026-04-25T09:54:21Z — *"fix(opencode): tolerate wrapped workflow tool arguments."* Created 2026-04-03T00:07:55Z (~22 days old, head SHA `c3b947d3577f`). Deep long-tail self-close on workflow-tool argument-shape surface.
3. **#24285** OPENED 2026-04-25T10:09:48Z — *"fix(tui): add copy action for native question prompts."* Head SHA `8f9a70342e84`. Fresh open on TUI / question-prompt surface.
4. **#20773** CLOSED 2026-04-25T10:24:40Z — *"fix(opencode): use session cwd for command substitution."* Created 2026-04-03T00:27:22Z (~22 days old, head SHA `04d0652197ce`). Deep long-tail self-close on session-cwd / command-substitution surface.

**Sequence:** close (mid-tail) → close (deep) → **open (fresh)** → close (deep). The fresh open is sandwiched 15m27s after the second close and 14m52s before the third close — **interleaved, not bracketed**.

Surface family unification: all four PRs touch how the opencode runtime parses / interprets ambient inputs — config JSON (#24118), tool arguments (#20769), session cwd (#20773), or user prompts (#24285). The author is consolidating their own footprint on the *runtime input-handling* surface family.

## Why this is not "long-tail pruning"

Long-tail pruning would predict a monotonic close-only sequence with no opens. The fresh-open injection mid-sequence implies the author has **decided to close some old work because they have a clearer formulation now** that they want to file as #24285 — rather than continuing to push on the existing PRs. The closes are not "abandoning the surface", they are *reframing the surface*.

## Distinction from prior syntheses

- **vs #50 (post-own-merge cascade)**: #50 requires a merge to trigger followup. Here there is no merge — all closes are self-closes, no maintainer involvement.
- **vs #59 (sub-15-minute self-close on flaky-test surface)**: #59 is a single fast self-close on flaky tests; this is multiple slow self-closes spanning 22-day-old PRs on input-parsing surfaces.
- **vs #71 (vendor-self-onboarding sub-hourly self-iteration)**: #71 is one PR with self-iteration cycles; this is four distinct PRs.
- **vs #77 (single-author scope-split triplet, this digest)**: #77 is open-only; #78 is mostly-close with one open injection.

## Falsifiable hypothesis

**H78.1**: When a single author closes ≥2 self-owned long-tail PRs (each ≥7 days old) on a surface family AND opens ≥1 fresh PR on the same family within a 60-minute window, the **fresh PR's review-acceptance probability is higher than the closed PRs' would have been if continued**. Operationalize: by 2026-05-02 (7 days hence), the merge-or-still-open-with-positive-comment rate of #24285 should exceed the same author's prior 30-day baseline merge rate on opencode by ≥20 percentage points.

**Falsified if**: #24285 is closed-without-merge or sits with zero maintainer comments for ≥7 days, indicating the reframing did not actually unblock the surface.

**H78.2**: The interleaving pattern (close → close → open → close) is **non-random**: the author opens the fresh PR after closing enough old PRs to "earn slot space" in their own mental model, then closes one more to confirm the reframing. Predict: across the next 7 days, no further `jeevan6996` activity on #20773's session-cwd sub-surface (i.e., the third close was a *terminal* close on that sub-surface), but >0 activity on #24285's TUI question-prompt sub-surface.

**Falsified if**: `jeevan6996` opens any new PR within 7 days that re-touches the session-cwd command-substitution code path closed in #20773.

## Measurement

For each tracked repo, instrument:
- per-author per-day tuples of (close events, open events, surface-family overlap between them);
- flag a tuple as a "prune-with-injection" if it has ≥2 self-closes + ≥1 fresh open on overlapping surface family within 60 minutes;
- compare merge rate of injection PRs vs author's baseline.

Across the 9 tracked repos this would produce a per-week count of "prune-with-injection" events. Hypothesis: this rate is **<5 per week per repo** (rare), and when it occurs, the injection PR has **above-baseline merge probability**.

## Signal class

`single-author / mixed-mode / self-close-plus-fresh-open / surface-family-internal / interleaved-not-batched / multi-week-age-span`

## Cross-reference

The temporal layout of `jeevan6996`'s prune-with-injection (10:09:48Z fresh open) **collides within 1 second** with `manascb1344`'s long-tail refresh on #14591 *"docs: add new plugin opencode-mermaid-live to ecosystem"* at 10:09:49Z — a coincidental cross-author single-second event boundary on the same repo. This is a **null signal** (different authors, different surface families) and is exactly the kind of base-rate noise event H78 must be measured against to avoid false-positive cohort claims.
