# W17 Synthesis #77 — Single-Author Multi-PR Scope-Split Triplet on a Single Surface Family Without Surrounding Cohort

**Status:** new pattern observation (extends synthesis #75 which framed the same shape as a doublet).

## Pattern

A single author opens **three distinct PRs** within a tight window (~25 minutes), all targeting the same surface family but each addressing a structurally distinct sub-surface, with **no other author participating in that surface family** during the burst. The pattern is structurally identical to synthesis #61 (single-author multi-PR scope-split inside a multi-author surge cohort), except here **the author IS the entire cohort** — there is no surrounding multi-author surge to split inside of.

## Concrete instance (today)

`kiyeonjeon21` in BerriAI/litellm, all on the **budget enforcement** surface family:

1. **#26498** — OPENED 2026-04-25T09:16:39Z, head SHA `46509bf2e9d0`. *"fix(auth): apply temp_budget_increase on cache-hit path."* Sub-surface: **auth cache-hit read-path budget application**.
2. **#25609** — refreshed 2026-04-25T09:24:20Z (created 2026-04-12, ~13 days old long-tail), head SHA `4689447416c2`. *"fix(proxy): update existing budget row in /team/member_update instead of creating new."* Sub-surface: **team_member_update write-path budget-row management**.
3. **#26499** — OPENED 2026-04-25T09:41:02Z, refreshed 09:44:49Z, head SHA `9f1e970a68d7`. *"fix(auth): join team-member budget so rpm/tpm limits are enforced."* Sub-surface: **team-member rpm/tpm join enforcement at auth time**.

Three PRs in **24m23s**, all touching budget enforcement, but spanning read/write/join boundaries on three distinct sub-surfaces. Two are fresh opens (#26498, #26499), one is a 13-day-old long-tail refresh (#25609). The author touches each PR exactly once (no further cycles within the burst). No other litellm author is active on the budget surface during this window — `yuneng-berri` is ~4h dormant, `MackDing` is on a UI-registry surface (synthesis #77 considers them a separate surface family).

## Distinction from prior syntheses

- **vs #47 (same-author rapid-fire doublet)**: #47 covers two PRs; this is three. #47 doesn't require sub-surface scope-split; this requires the three PRs to address structurally distinct sub-surfaces under one umbrella.
- **vs #61 (single-author scope-split inside multi-author surge)**: #61 *requires* surrounding multi-author cohort. Here there is none — `kiyeonjeon21` is the only litellm author active during the entire 25-minute burst.
- **vs #75 (cross-temporal same-author doublet)**: #75 was a 2-PR observation; this triplet shows #75 was an under-count. The actual shape extends to 3 with another fresh leg ~17 minutes after the doublet.
- **vs #71 (vendor-self-onboarding sub-hourly self-iteration)**: #71 is a single PR with self-iteration cycles; this is three distinct PRs with no within-PR cycling.

## Why this matters

Three PRs by one author on one surface family in 25 minutes implies the author is **decomposing a single mental model of "budget enforcement is broken in 3 places" into 3 separate review-able units**. This is **the inverse of a "single PR that touches 3 sub-surfaces"** — the author is choosing PR multiplication over scope expansion. The interesting question is *why the author makes this choice* and *what it predicts about review outcome*.

## Falsifiable hypothesis

**H77.1**: When a single author opens N≥3 PRs on the same surface family within 30 minutes with no other author cohort, the per-PR review latency (open → first maintainer comment) is **shorter** than the same author's solo PRs on unrelated surfaces, because reviewers batch-evaluate the surface family as one mental unit. Predict: `kiyeonjeon21`'s next maintainer comment on any of #26498/#25609/#26499 will arrive **within 4 hours** of the third open (i.e., before 2026-04-25T13:41Z), and once it arrives, the next two maintainer comments on the other two PRs will arrive **within 30 minutes of each other** (batch-evaluation signal).

**Falsified if**: any single PR receives a maintainer comment >6 hours after the triplet completes, OR the inter-comment gap on the remaining two exceeds 2 hours.

**H77.2**: Single-author scope-split bursts of N≥3 on one surface family **predict a follow-up consolidation PR** within 48 hours that supersedes ≥1 of the burst PRs (i.e., the author or a maintainer reorganizes the burst into a smaller set after seeing review feedback). Predict: by 2026-04-27T09:41Z, at least one of #26498 / #25609 / #26499 will be closed-without-merge in favor of a follow-up PR by `kiyeonjeon21` or a maintainer.

**Falsified if**: all three PRs are merged independently, OR all three remain open with no superseding PR by the deadline.

## Measurement

Track for each litellm budget-surface PR opened by `kiyeonjeon21` since 2026-04-25T09:16Z:
- timestamp of first non-author comment;
- timestamp of merge or close;
- whether a superseding PR appears citing it.

If H77.1 holds, this becomes the **first known evidence** that maintainers batch-process scope-split bursts as cohorts despite the author being solo. If H77.2 holds, the burst is in fact a *PR-as-thinking-out-loud* shape and the rational action is for maintainers to wait 48 hours before reviewing any single leg.

## Signal class

`single-author / multi-pr / surface-family-scope-split / no-surrounding-cohort / cross-temporal-leg-included / triplet-or-greater`
