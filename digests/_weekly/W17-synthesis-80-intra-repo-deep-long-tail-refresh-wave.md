# W17 Synthesis #80 — Intra-Repo Deep-Long-Tail Refresh Wave: Five Aged PRs Bumped Within 38 Minutes by Five Distinct Authors with No Maintainer Trigger

**Status:** new pattern observation. Refines synthesis #70 (cross-repo long-tail refresh wave) into its intra-repo dual.

## Pattern

Within a single repository, in a sub-hour window, **five or more PRs all aged ≥30 days** are refreshed by **five distinct authors**, touching **five distinct surfaces**, with **no visible maintainer-side trigger** (no shared maintainer comment, no merged migration that would force rebase, no CI-policy change announced in the window). The refreshes are SHA-changing (not just stale-bot bumps) — i.e., authors actually pushed new commits.

The wave stretches the **age axis** (33 days → 75 days in the index instance) rather than the breadth axis. It is the *intra-repo* counterpart to synthesis #70, which observed the same shape across multiple repos.

The structural distinguishing feature: **no shared trigger and no shared surface**, only a shared *latency*. The PRs share only the property of *having waited a long time*. This implies the trigger is something like a self-coordinated "I should rebase my old PR" reflex synchronized across the contributor base — possibly weekend-edge timing, possibly a shared expectation that maintainers triage on certain days.

## Concrete instance — anomalyco/opencode, 2026-04-25 10:40Z → 11:18Z

| PR | Author | Created | Age at refresh | Surface | Head SHA |
|---|---|---|---|---|---|
| #13854 | `mocksoul` (Vadim Fint) | 2026-02-16 | **~68 days** | TUI streaming markdown/code completion | `399dd8afb170` |
| #18767 | `noahbentusi` | 2026-03-23 | **~33 days** | Mobile touch optimization | `2e2c3773f082` |
| #12822 | `jerome-benoit` (Jérôme Benoit) | 2026-02-09 | **~75 days** | env proxy vs snapshot | `41e084699ba2` |
| #15603 | `aklajnert` (Andrzej Klajnert) | 2026-03-01 | **~55 days** | question recovery on app start | `a4e632be3f32` |
| #14573 | `zer0Black` (Li Xuetao) | 2026-02-21 | **~63 days** | CLI `--global` flag for session-list | `76612d63e222` |

- **Window:** 38 minutes (10:40:13Z → 11:18:15Z).
- **Authors:** 5 distinct, zero overlap with each other or with the rest of the day's opencode activity (no overlap with `jeevan6996` synthesis #78, `kiyeonjeon21` litellm cluster, `aeroxy`/`MrMushrooooom` collision in Addendum 16, or `herjarsa`/`menardorama` synthesis #79 PRs).
- **Surfaces:** 5 distinct (TUI streaming, mobile UX, env handling, question lifecycle, CLI flag).
- **Same-second start**: #13854 and #18767 refreshed at the *exact same UTC second* (10:40:13Z) — two deep long-tails by two unrelated authors, simultaneous to the second.
- **Maintainer involvement in window:** none observed. `thdxr` and other opencode maintainers had refresh activity earlier in Addendum 15 / 16 (#24222 at 09:30:11Z) but none in this 10:40Z–11:18Z slice.

## Why this is structurally distinct from #70

Synthesis #70 (cross-repo long-tail refresh wave) observed multi-week-aged PRs synchronizing across **unrelated repos**. The hypothesis there was that contributors across the ecosystem share a common rebase-cadence external trigger (likely a shared time-of-week or maintainer-cycle signal).

#80 is the **intra-repo dual**: same latency-axis convergence, but contained within one repo. This rules out the "shared external timing" hypothesis as *necessary* — the synchronization happens even when only one repo is involved. The remaining candidate trigger is **the maintainer review cadence of that specific repo**: contributors learn that opencode maintainers tend to triage at specific times, and self-rebase ahead of expected triage windows.

## Distinction from prior syntheses

- **vs #44 (vertical-slice PR stack refreshed in lockstep)**: #44 requires a *single author* refreshing a *related stack*. #80 is multi-author, unrelated surfaces.
- **vs #56 (lockstep refresh of aged PRs as bot-rebase-train signal)**: #56 attributed the lockstep to bot/rebase-train automation. The five PRs in the #80 instance are SHA-changing pushes by humans, not bot rebases.
- **vs #70 (cross-repo long-tail refresh wave)**: scope difference — #70 is cross-repo, #80 is intra-repo. Same latency convergence, different boundary.
- **vs #75 (cross-temporal same-author doublet)**: #75 is one author across two times; #80 is five authors in one short window.

## Falsifiable hypothesis

If this is a recurring pattern at opencode specifically (rather than a 2026-04-25 fluke):
1. We should observe ≥1 similar wave per week (≥4 PRs, ≥4 distinct authors, ≥3 surfaces, all aged ≥30 days, sub-1h window) in opencode at roughly the same hour-of-week.
2. The wave should *not* recur with the same intensity in lower-velocity repos (continue, browser-use, OpenHands) — those repos have insufficient long-tail population to produce a 5-PR wave.
3. The wave should correlate temporally with subsequent maintainer triage activity on at least 2 of the 5 PRs within 24h. If maintainer follow-up is zero, the contributors' implicit model of triage timing is wrong and we'd expect the pattern to dissipate.

If we observe waves *without* subsequent maintainer engagement for 4+ consecutive weeks, the pattern is falsified — contributors are rebasing on a phantom signal.

## Operational implication

For maintainers of high-long-tail-count repos: **the long-tail population has a self-synchronizing rebase reflex**, which means a single "triage batch" you ship at a predictable time will produce an *inbound rebase wave* that may overwhelm review capacity in the following hour. Consider either (a) randomizing triage timing or (b) explicitly publishing a triage cadence so the wave is at least predictable.

For contributors: **same-second collisions on long-tail refreshes are *not* a coordination signal**, they are a synchronization-on-shared-external-clock signal. Don't infer cohort membership from co-temporal refresh.
