# BerriAI/litellm — 2026-03-22

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-21T23:59:59.000Z → 2026-03-22T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is the **v1.82.6 release train** (`v1.82.6-nightly` and `v1.82.6.dev.1`), cut by yuneng-jiang with a version bump from 1.82.5 → 1.82.6 (`fa65433`). The nightly notes call out two provider-correctness fixes worth reading: `fix(anthropic): preserve thinking.summary when routing to OpenAI Responses API` (#21441) and `fix(gemini): resolve image token undercounting in usage metadata` (#22608) — both have direct billing/observability implications. A new opt-out flag for the default Anthropic reasoning summary also lands in the same release, alongside companion docs for the `thinking.summary` field on `/v1/messages` (#22823).

The dev.1 release bundles UI and access-control work: `/v2/team/list` gains org-admin access control, a `members_count` field, and new indexes (#23938) — relevant if you consume the teams API. It also includes a session-stability fix, `auto-recover shared aiohttp session when closed` (#23808), which is a good candidate to pull into your own pin if you've seen sporadic upstream connection errors.

Most of the day's commit churn is UI cleanup merged via PR #24342, "[Fix] UI - Teams: Table refresh, infinite dropdown, leftnav migration" (`c89496f`, `aea8e32`, `9073dae`): OldTeams now refreshes via `fetchTeamsV2` after create instead of optimistically appending, TeamDropdown is rewritten with `useInfiniteQuery` and restyled to match OrganizationDropdown, and leftnav routing is fixed for dashboard routes. PR #24334 (`f5194b5`) is the release-build infra merge.

One notable revert: `Revert "fix(proxy): restore per-entity breakdown in aggregated daily activity endpoint"` (`9963b31`) — if you were depending on that breakdown landing, it's been pulled back out before the 1.82.6 cut and is worth tracking for a follow-up fix.

No new issues, no new external PRs, and no community-opened items in the window — activity is entirely maintainer-driven release prep.

## Releases

- **[v1.82.6.dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.82.6.dev.1)** — v1.82.6.dev.1 _by @github-actions[bot] at 2026-03-22T07:16:11Z_
  > ## What's Changed
  > * [Test] UI: Add unit tests for 10 untested components by @yuneng-jiang in https://github.com/BerriAI/litellm/pull/23891
  > * fix: auto-recover shared aiohttp session when closed by @voidborne-d in https://github.com/BerriAI/litellm/pull/23808
  > * [Feature] /v2/team/list: Add org admin access control, members_count, and indexes by @yuneng-jiang in https://github.com/BerriAI/litellm/pull/23938
  > * [Refactor] UI - Playground: Extract FilePreviewCard from ChatUI by @yuneng-jiang in https…
- **[v1.82.6-nightly](https://github.com/BerriAI/litellm/releases/tag/v1.82.6-nightly)** — v1.82.6-nightly _by @github-actions[bot] at 2026-03-22T07:00:36Z_
  > ## What's Changed
  > * fix(anthropic): preserve thinking.summary when routing to OpenAI Responses API by @Chesars in https://github.com/BerriAI/litellm/pull/21441
  > * docs: add thinking.summary field to /v1/messages and reasoning docs by @Chesars in https://github.com/BerriAI/litellm/pull/22823
  > * fix(gemini): resolve image token undercounting in usage metadata by @gustipardo in https://github.com/BerriAI/litellm/pull/22608
  > * feat(anthropic): add opt-out flag for default reasoning summary by @Chesars…
- **[v1.82.1.dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.82.1.dev.1)** — v1.82.1.dev.1 _by @github-actions[bot] at 2026-03-22T03:11:14Z_
  > **Full Changelog**: https://github.com/BerriAI/litellm/compare/v1.82.1-nightly...v1.82.1.dev.1


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`c89496f`](https://github.com/BerriAI/litellm/commit/c89496f3789b4855913c27218c22ad7f0731311a) Merge pull request #24342 from BerriAI/litellm_yj_march_21_2026 — _@yuneng-jiang_
- [`38d4775`](https://github.com/BerriAI/litellm/commit/38d477507dad09c560db18a15ca8fb0e33bf2a4b) remove outdated e2e test — _@yuneng-jiang_
- [`6bb0888`](https://github.com/BerriAI/litellm/commit/6bb08883af9bc778b594f48751453561e74ac51c) adding poetry lock — _@yuneng-jiang_
- [`fa65433`](https://github.com/BerriAI/litellm/commit/fa65433c8ce2bc59c56fd575073efcd6a6a04db8) bump: version 1.82.5 → 1.82.6 — _@yuneng-jiang_
- [`d91980d`](https://github.com/BerriAI/litellm/commit/d91980dc4551d201659927513cc39b318abbb7cd) adding build — _@yuneng-jiang_
- [`071c864`](https://github.com/BerriAI/litellm/commit/071c8641dedae702354fcd9cf32fb4709b7f7bce) bump: version 0.4.59 → 0.4.60 — _@yuneng-jiang_
- [`88a4c7a`](https://github.com/BerriAI/litellm/commit/88a4c7aeaf4b20ae3ab42effbdc91c4156b9cea5) bump: version 0.4.58 → 0.4.59 — _@yuneng-jiang_
- [`34d0799`](https://github.com/BerriAI/litellm/commit/34d079910bc85563c97ea23950cb2908c90b68b1) chore: update Next.js build artifacts (2026-03-22 05:53 UTC, node v22.16.0) — _@yuneng-jiang_
- [`9073dae`](https://github.com/BerriAI/litellm/commit/9073daeebcd4b0ca97645c5e0eb47d9364aaf09f) [Fix] UI - TeamDropdown: Match org dropdown styling and fix test mock — _@yuneng-jiang_
- [`aea8e32`](https://github.com/BerriAI/litellm/commit/aea8e320489420b3359db37cc62524a27f6c6d1f) [Fix] UI: Team table refresh, infinite team dropdown, leftnav for dashboard routes — _@yuneng-jiang_
- [`9963b31`](https://github.com/BerriAI/litellm/commit/9963b31e071971a51391fb809d11d39f6c7e71cc) Revert "fix(proxy): restore per-entity breakdown in aggregated daily activity endpoint" — _@yuneng-jiang_
- [`f5194b5`](https://github.com/BerriAI/litellm/commit/f5194b5ce32a937a5bca7605e5085b80f69f4347) Merge pull request #24334 from BerriAI/litellm_yj_march_21_2026 — _@yuneng-jiang_
- [`d217e49`](https://github.com/BerriAI/litellm/commit/d217e491938d80e88c8ae1e1ba939c9206d1b95e) chore: update Next.js build artifacts (2026-03-22 01:02 UTC, node v22.16.0) — _@yuneng-jiang_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
