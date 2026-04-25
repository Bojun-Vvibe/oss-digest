# W17 Synthesis #113 — Cross-author re-implementation arbitrage: external OSS-staging merge triggers near-identical internal-staging refile within sub-3-minute latency

**Window:** 2026-04-25T22:34:00Z → 23:29:48Z (Add. 34)
**Repos:** BerriAI/litellm

## Pattern statement

A non-trivial external-author PR merges into a public OSS-staging branch, and within a sub-3-minute latency a *different* in-org author opens a fresh PR with **verbatim-near-identical title and same surface area**, targeted at `litellm_internal_staging`. This is a new failure mode of the staging-branch topology mapped in synth #108: not a sync-PR (synth #106), not a duplicate-open by the same author (synth #107), not a post-own-merge fanout (synth #110) — it is **cross-author re-implementation arbitrage** between OSS- and internal-staging.

## Anchor pair

- **[BerriAI/litellm#26439]** — `dkindlund` (external), opened 2026-04-24T22:17:58Z, **MERGED 2026-04-25T22:36:50Z**, merge SHA `b55a0f0681127a46f0834ee9d7732823ec8569b3`. Base **`litellm_oss_staging_04_25_2026`**. Title: *"fix(adapters,vertex): pass output_config through to backends that accept it (closes #23380, supersedes #23475/#23396/#23706/#22727)."* +526/-82.
- **[BerriAI/litellm#26530]** — `mateo-berri` (in-org, debut in tracking), **OPENED 2026-04-25T22:39:25Z** (T+2m35s after #26439 merge), head SHA `0644a1b02b43444d7e2567f965e63637557692fc`. Base **`litellm_internal_staging`**. Title: *"fix(adapters,vertex): pass Anthropic `output_config` through to backends that accept it."* +1003/-93.

## Falsifiable signal

The re-implementation has **larger diff** (+1003/-93 vs +526/-82, a 1.9× expansion in additions and 1.13× in deletions) on the same surface family (`adapters,vertex`) and the same goal token (`output_config` pass-through). It is **not a cherry-pick / port** (different head SHA, different diff size), and it does **not reference** #26439 in title. The 2m35s latency is short enough to rule out independent discovery.

## Why this is not synth #106 / #107 / #110

- **Not synth #106 (sync-PR)**: head SHAs differ; #26530 is not a fast-forward of #26439's merge SHA. There is no head-SHA equality across the boundary.
- **Not synth #107 (same-author duplicate)**: authors differ (`dkindlund` vs `mateo-berri`).
- **Not synth #110 (post-own-merge fanout)**: #26530's author did not merge #26439 — `mateo-berri` is not the merger of #26439 (maintainer non-self merge).
- **Not synth #112 (base-branch jump)**: it is *two PRs by two authors*, not one author moving base.

## Generalization

The litellm staging topology (synth #108) has an **OSS-staging surface that lands external contributors** and an **internal-staging surface owned by `*-berri` authors**. When an external fix lands on the OSS surface, the internal-staging owner of the same surface area **does not cherry-pick** — they re-author from scratch with a wider diff. This is the topology's specific signature for *content propagation across the staging boundary*: cross-author, larger-diff, near-identical-title, sub-3-minute latency.

## Watch list (next 3 addenda)

- Does #26530 get merged? If yes, by whom (self-merge or maintainer)? Lifespan?
- Does it cite or close #26439, or do the two PRs land independently with #26439's superseded chain (#23475/#23396/#23706/#22727) still propagating internally?
- Does the same arbitrage repeat for the next external `litellm_oss_staging_*` merge?
