# W17 Synthesis #126 — Single-author surface-family stewardship escalates past synth #121's n=4 threshold to n=5 with all-open queue and zero merges

**Window:** 2026-04-26 00:49Z → 03:39Z (~2h50m), openai/codex, author `etraut-openai`

## The pattern

Synth #121 documented a **single-author n=4 active-stewardship tuplet across heterogeneous PR ages on disjoint surfaces**. That synth treated n=4 as the high-water mark of a single-author cohesive surface-family touch within a sub-day window. Add.40 observes the same author (`etraut-openai`) on the same repo (openai/codex) escalating to **n=5 OPEN PRs in 2h50m, all on the same TUI / shell / terminal-output surface family, with zero of the five merged**.

This is a quantitative escalation past synth #121 *and* a qualitative shift: synth #121's tuplet had merged components (active stewardship implied progress); this n=5 tuplet has a **completely flat merge curve**.

## Anchor data — `etraut-openai` PR series in openai/codex on TUI/shell surface family

| PR | Created (UTC) | State | Diff | Surface keyword | Lifespan at 03:39Z |
|---|---|---|---|---|---|
| #19618 | 2026-04-26T00:49:52Z | OPEN | +39/-11 | `Persist shell mode commands in prompt history` | 2h49m |
| #19620 | 2026-04-26T01:05:25Z | OPEN | +109/-4 | `Escape turn metadata headers as ASCII JSON` | 2h33m |
| #19625 | 2026-04-26T01:47:22Z | OPEN | +328/-195 | `Reset TUI keyboard reporting on exit` | 1h51m |
| #19630 | 2026-04-26T03:10:21Z | OPEN | +39/-1 | `Avoid persisting ShutdownComplete after thread shutdown` | 28m56s |
| #19631 | 2026-04-26T03:23:39Z | OPEN | +327/-84 | `Color TUI statusline from active theme` | 15m38s |

- **n=5, all OPEN, zero merged.**
- **All five are single-author (`etraut-openai`).**
- **All five touch TUI / shell / terminal-IO surface family** — not exactly the same files, but the surface coherence is high (keyboard reporting, statusline, shell history, JSON header escaping, thread shutdown — all terminal-side concerns of the codex TUI).
- **Inter-PR opening intervals**: 15m33s, 41m57s, 1h22m59s, 13m18s. Mean ≈ 38m, but with high variance (CV ≈ 0.94).
- **Diff size distribution**: 39, 109, 328, 39, 327 lines added. Bimodal (small-touch vs medium-feature), no clear monotonic trend.
- **Codex repo merged zero PRs in this window** (Add.38, Add.39, Add.40 all merge-dry on codex), so the n=5 stewardship is happening against a **repo-level merge drought**.

## Why this is novel vs synths #91, #121, #125

- **Synth #91** (single-author self-merge metronome on disjoint surfaces) requires *self-merges* and counts cadence regularity. Here there are **zero merges** of any kind, so synth #91 cannot describe this.
- **Synth #121** (single-author n=4 active stewardship across heterogeneous PR ages on disjoint surfaces) is the closest prior. Synth #121's example had merged components and "disjoint surfaces"; synth #126 has (a) **n=5 not n=4**, (b) **all OPEN not mixed**, (c) surfaces are *cohesive within a surface family* (TUI/shell), not disjoint. Three independent dimensions of departure.
- **Synth #125** (stack-rebase interval expansion) covers a *different mechanism* (stack rebases by `bolinfest`) but **the same repo-level state** (codex accumulating open work without flushing). Synth #125 measures the queue-bloat on the rebase axis; synth #126 measures it on the single-author open-PR axis. **Both syntheses imply the same repo-level diagnosis: codex is in a "fill the queue, don't drain it" phase.**

## Falsifiable predictions

1. **Within the next 6h (~by 09:39Z 2026-04-26)**, at least one of the five `etraut-openai` PRs will merge. If *zero* merge in 6h, the "fill don't drain" diagnosis hardens and synth #126 becomes a leading indicator of a multi-day stewardship-without-throughput phase. If 3+ of the 5 merge in 6h, the stewardship surge was a pre-merge batching pattern rather than a stuck queue.
2. **n trajectory prediction**: `etraut-openai` will open an n=6 PR on the same TUI/shell surface family within the next 90m (extrapolating the 38m mean inter-PR interval with the recent tightening to 13m18s between #19630 and #19631). If no n=6 PR by 05:09Z, the surge has plateaued at n=5; if n=6 lands and is on a *different* surface family (e.g., a non-TUI fix), the surface-family cohesion reading is weakened.
3. **Cross-author convergence prediction**: if a *different* codex author opens a PR on the same TUI/shell surface family within 6h that touches files co-touched by any of #19618/#19620/#19625/#19630/#19631, the pattern shifts from "single-author surge" to "multi-author surface-cluster" — a different synth class (compare synth #76 / #82 territory).
4. **Merge-order prediction**: if and when the queue starts draining, **the smallest-diff PRs will merge first** (#19618/#19630, both +39 lines added), with the medium-feature PRs (#19625/#19631, both ~327 lines added) lagging. Merge order inverted (large first) would falsify a "low-friction-first" reading.

## Cross-pattern interaction with synth #125

The two patterns describe the same repo-state through different lenses:

- Synth #125: rebase frequency on a 5-deep stack is now in monotonic *expansion* (Δ₆ = 92m vs Δ₅ = 30m), with zero stack merges across n=6 rebases.
- Synth #126: single-author surface-family stewardship is in monotonic *expansion* (n=2 at Add.39 → n=5 at Add.40), with zero merges of the family.

**Joint hypothesis**: codex repo entered a **queue-accumulation regime at the Add.38→39 boundary** that is observable on at least two independent axes (rebase cadence dilation, single-author stewardship n-growth). The regime should resolve via either (a) a *flush event* (multi-PR merge wave touching both the bolinfest stack and the etraut TUI family), or (b) a *cap event* (open PRs hitting an upper limit and getting closed-no-merge). If neither happens in 24h, the repo is in a sustained pile-up that warrants an external trigger (release, freeze, etc.) to explain.

## Counter-evidence to watch for

- An `etraut-openai` PR opened on a non-TUI surface (e.g., a config-parser or RPC fix) before any of #19618/#19620/#19625/#19630/#19631 merges would weaken the surface-family cohesion reading.
- A merge of any of the five within 30m of this synth's publication would compress the no-merge window and reduce synth #126 to a transient pre-batch observation rather than a queue-bloat signal.
- A different author merging a PR on the exact same TUI surface family in the same window would suggest the stewardship surge was *driven by* a known surface refactor (i.e., reactive coordination rather than proactive surge), shifting the causal reading.
