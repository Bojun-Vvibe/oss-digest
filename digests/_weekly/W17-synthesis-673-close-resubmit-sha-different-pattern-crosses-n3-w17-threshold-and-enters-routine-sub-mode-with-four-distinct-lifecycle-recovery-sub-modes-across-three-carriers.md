# W17-synthesis-673 — Close-Resubmit-SHA-Different Pattern Crosses N=3 W17 Threshold and Enters Routine Sub-Mode With Four Distinct Lifecycle-Recovery Sub-Modes Across Three Carriers

**Date**: 2026-05-05 (Add.345 capture window 05:35–06:25Z UTC)

## Observation

Within Add.345's 50m capture window, **openai/codex** carrier sees the **third W17-documented close-resubmit-SHA-different cycle**, this time with **sub-12-minute total cycle time and a title-pivot-semantic-escalation sub-mode**:

- openai/codex #21151 — `28dd793da5dd6673a66cb87a8fa1e0714a5e09ab` (abhinav-oai — `[codex] suspend legacy notify deprecation warning`; OPEN 05:48:17Z → CLOSED 05:57:28Z; **lifespan 9m11s**).
- openai/codex #21152 — `503cba1f6a4acc3491fa7a17138ac0385780c066` (abhinav-oai — `[codex] revert legacy notify deprecation`; OPEN 05:57:22Z, **6 seconds before** #21151's close timestamp — CLOSE-AFTER-RESUBMIT ordering inversion).

Combined with prior W17 instances:

- **N=1 (Add.341)**: openai/codex viyatb-oai #21126 → #21127 (`fix(linux-sandbox): avoid panic on bwrap build failures`; minimal-rebase-resubmit; head pivot only).
- **N=2 (Add.344)**: sst/opencode LifetimeVip #25820 → #25823 (`feat(todo): auto-cleanup` + bilingual `/clear-tasks` + `/清除任务` slash commands; scope-expansion-resubmit; lifespan 19m57s).
- **N=3 (Add.345 this synthesis)**: openai/codex abhinav-oai #21151 → #21152 (`suspend warning` → `revert deprecation`; title-pivot-semantic-escalation-resubmit; lifespan 9m11s with 6-second close-after-open ordering inversion).

Plus **Add.345 immediate sequel** observed in same capture window:

- **N=4 (Add.345 same-tick)**: block/goose morgmart #9009 → #9019 (small-window-layout substrate; rescope-resubmit; lifespan 40m07s — outside synth-673 sub-12min cycle band).

## Why this is a primitive

Three independent W17 instances across two distinct carriers (openai/codex × 2, sst/opencode × 1) and three distinct authors (viyatb-oai, LifetimeVip, abhinav-oai) within ~6h rolling window establishes **close-resubmit-SHA-different as a routine carrier-agnostic PR-recovery pattern**, no longer an Add-level anomaly.

Critically, **four distinct sub-modes** of close-resubmit-recovery now have at least one W17 instance each:

1. **Minimal-rebase-resubmit** (Add.341 viyatb-oai): same title, same scope, head pivot only. Motivation: stale rebase or merge-conflict cleanup.
2. **Scope-expansion-resubmit** (Add.344 LifetimeVip #25820→#25823): title-family broadens (auto-cleanup + bilingual slash-commands). Motivation: review-feedback-driven scope-broadening.
3. **Title-pivot-semantic-escalation-resubmit** (Add.345 abhinav-oai #21151→#21152): title pivots from non-breaking-suppress ("suspend warning") to behavior-rollback ("revert deprecation"). Motivation: review-feedback-driven scope-pivot — distinct from broadening because the original semantic is **abandoned, not extended**.
4. **Silent-force-push-consolidation** (Add.345 LifetimeVip #25823 head update): no close, no resubmit, head silently force-pushes from `a09f5dbb…` → `210b6037…`. Motivation: in-place head consolidation as alternative to close-resubmit. Listed alongside close-resubmit-recovery because it functionally replaces a resubmit.

Add a fifth sub-mode candidate from same-tick:

5. **Rescope-resubmit-on-overlapping-substrate** (Add.345 morgmart #9009→#9019): title scope shifts from `fix small window chat and settings layout` → `fix goose2 small-window chat and settings layouts` — adds product-prefix `goose2`, pluralizes `layouts`. Motivation: substrate-narrowing or product-version-targeting clarification on resubmit.

## Sub-mode taxonomy and carrier-substrate matrix

| Sub-mode | Carrier | Author | Lifespan | Title-family delta |
|---|---|---|---|---|
| Minimal-rebase-resubmit | codex | viyatb-oai | (Add.341 baseline) | identity |
| Scope-expansion-resubmit | opencode | LifetimeVip | 19m57s | broadens (+ bilingual cmd surface) |
| Title-pivot-semantic-escalation-resubmit | codex | abhinav-oai | 9m11s | semantic pivot (suppress → rollback) |
| Silent-force-push-consolidation | opencode | LifetimeVip | n/a (no close) | identity (head-only change) |
| Rescope-resubmit-overlapping-substrate | goose | morgmart | 40m07s | narrowing (+ product version prefix) |

The lifespan distribution is **monotonically contracting** through W17: Add.341 (untimed minimal-rebase) → Add.344 LifetimeVip 19m57s → Add.345 abhinav-oai 9m11s. Hypothesis: as the pattern normalizes across the W17 author population, recovery cycles compress because authors are pre-committed to the resubmit decision before initiating the close (evidenced by abhinav-oai's **6-second close-after-resubmit ordering inversion**).

## Cross-link

- Synth-655: regime-level burst envelope (this primitive sits inside the burst-envelope as a within-burst recovery sub-process).
- Synth-668: bot-meta-lifecycle survival comparator (close-resubmit cycles compress while bot-PR survival extends — opposite direction).
- Synth-670: declared-multi-PR-sequence injection primitive (declared sequences stall on TICK-1 advance, while close-resubmit cycles execute in TICK-1 — opposite cadence).
- Synth-671: substrate-saturation-no-merge accumulation mode (close-resubmit-recovery is an alternative to substrate-saturation; both are pre-merge holding patterns).
- Synth-672: 0:11-anchor circadian-window primitive (now downgraded — close-resubmit cycles do NOT cluster at any anchor minute, distributed across 02:17–05:57Z range).

## Verified head SHAs

**Add.345 (this synthesis primary):**
- openai/codex #21151 — `28dd793da5dd6673a66cb87a8fa1e0714a5e09ab` (abhinav-oai, CLOSED).
- openai/codex #21152 — `503cba1f6a4acc3491fa7a17138ac0385780c066` (abhinav-oai, OPEN).
- sst/opencode #25823 head update — `a09f5dbb8b41fd89c1fad9b3ec68e5af0098d6b9` → `210b6037dba5957ae1810b7e845f71d4b8f98934` (LifetimeVip, silent force-push).
- block/goose #9009 — `9e073e9fce126ae3e5c205f0256a203860ab6aba` (morgmart, CLOSED).
- block/goose #9019 — `270600151176cdf64acb9d0a35b02477af5f2673` (morgmart, OPEN).

**Add.344 (prior precedent):**
- sst/opencode #25820 — `ddbac5d6cbd39cd0e682e4e67e2e5698a55f528c` (LifetimeVip, CLOSED).
- sst/opencode #25823 (initial) — `a09f5dbb8b41fd89c1fad9b3ec68e5af0098d6b9` (LifetimeVip, OPEN).

**Add.341 (prior precedent):**
- openai/codex #21126 — `0da22772580d5b0490d6b8622ed9a3f49eef1f0b` (viyatb-oai, CLOSED).
- openai/codex #21127 — `1ccdef222fffe45f5b881685ff0839a013b77215` (viyatb-oai, OPEN).

## Calibration

The close-resubmit-SHA-different pattern is **upgraded from anomaly (N=1) to recurrent-mode (N=2 in Add.344) to routine sub-mode (N=3 in Add.345)** on a per-tick promotion ladder. With N=3 across three authors and two carriers, the pattern's substrate-independence is established. Future W17 ticks should expect ≥1 close-resubmit cycle per ~3-tick rolling window as a baseline rate; absence of any close-resubmit in a 3-tick window becomes a falsification signal.

The **6-second close-after-resubmit ordering inversion** observed in abhinav-oai's #21151→#21152 transition is the strongest single calibration update this synthesis. It implies authors using the close-resubmit pattern at routine status pre-stage the new PR draft locally before initiating the close — i.e., the workflow is a deliberate two-step authoring move, not a reactive response to a close event. This shifts the primitive from **close-then-author-replacement** (W17 default model under Add.341) to **stage-replacement-then-close-original** (Add.345 routine model).

This is the second W17 primitive to migrate from Poisson-anomaly to routine-sub-mode in W17 (after synth-668 bot-meta-lifecycle survival), and the first to do so within a single 50m tick (Add.345 saw both N=3 instantiation and immediate same-tick N=4 sequel).
