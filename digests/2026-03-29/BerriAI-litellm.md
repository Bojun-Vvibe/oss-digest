# BerriAI/litellm — 2026-03-29

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-28T23:59:59.000Z → 2026-03-29T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day is dominated by a large internal **test-suite cleanup** by krrish-berri-2 — roughly 18 of 28 commits are `test:`/`refactor:` churn (e.g. `5cd8ca2`, `6df995d`, `cdcab8a`), removing dead tests, renaming env vars, updating to new Vertex AI keys, and fixing Azure audio/standard tests. This culminates in the merge of #24755 ("Litellm test cleanup", `a671083`) and a related fix #24756 (`5812053`) that removes the `NLP_CLOUD_API_KEY` requirement from `test_exceptions.py` since only a bad key is needed to exercise `AuthenticationError` handling. If you maintain forks or downstream test rigs, expect breakage from removed tests and renamed env vars.

The other notable infra change is **#24754** (`c271144`), which deletes 10 CircleCI jobs now fully duplicated by GitHub Actions workflows (caching unit tests, security tests, etc.). This continues the ongoing CircleCI → GHA migration and is worth a look if you rely on CircleCI status checks.

On the user-facing side, two feature merges landed:

- **#24750** (`93d8b7f`) — a sizeable UI chore migrating Tremor components, plus fixes for log filters, access-group models, and substring key search. Includes a small style nit (`fdad43b`) standardizing `not team_object.models` empty-list checks.
- **#24449** (`bc33cf6`) — new Prometheus **org budget metrics** from external contributor J-Byron, useful for anyone monitoring per-organization spend.
- **#23794** (`92db2df`) — Bedrock provider: native structured-output model list moved into the cost JSON, and **Claude Sonnet 4.6** added to Bedrock.

There were no releases, no merged PRs outside the above, no new open PRs, and no notable issues recorded in the window. Net: a quiet day feature-wise but a heavy internal hygiene push (tests + CI), with the Bedrock Sonnet 4.6 addition (#23794) and Prometheus org-budget metrics (#24449) being the two items most likely to matter to end users.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`5812053`](https://github.com/BerriAI/litellm/commit/58120537af4f3975550206a88bdf133e31832de8) Merge pull request #24756 from BerriAI/litellm_/pensive-sinoussi — _@krrish-berri-2_
- [`a671083`](https://github.com/BerriAI/litellm/commit/a6710835967d9fea98f7185ded8d5dc9505e0824) Merge pull request #24755 from BerriAI/litellm_test_cleanup — _@krrish-berri-2_
- [`85cc7bc`](https://github.com/BerriAI/litellm/commit/85cc7bc433b9dec89bbc4df876293bd7c5157fa7) refactor: make unit test — _@krrish-berri-2_
- [`1ba1090`](https://github.com/BerriAI/litellm/commit/1ba109079dd90ec682382261f810f3825fcb059c) test: update tests — _@krrish-berri-2_
- [`9e07014`](https://github.com/BerriAI/litellm/commit/9e070143fbe9f90d27a160257abc4a32a2a96411) test: update key names — _@krrish-berri-2_
- [`25f2baa`](https://github.com/BerriAI/litellm/commit/25f2baad717e8ff8d291794558e69952bc6b6bef) test: cleanup dead tests — _@krrish-berri-2_
- [`14095ee`](https://github.com/BerriAI/litellm/commit/14095ee14444c3bfaff5546dc10d6ea0e664dc2d) [Fix] Remove NLP_CLOUD_API_KEY requirement from test_exceptions.py — _@yuneng-berri_
- [`a92b31a`](https://github.com/BerriAI/litellm/commit/a92b31a63613a64413d628ba2b3d08effb137505) test: remove dead tests — _@krrish-berri-2_
- [`fe379fd`](https://github.com/BerriAI/litellm/commit/fe379fd7386c2b30794f4bd7e89ae3566654862f) test: rename env var — _@krrish-berri-2_
- [`0fef88d`](https://github.com/BerriAI/litellm/commit/0fef88d67c63b8a045d1085ad997b632d392cdf4) test: remove dead tests — _@krrish-berri-2_
- [`c271144`](https://github.com/BerriAI/litellm/commit/c27114470eb053d87d33e5f9f2fe32d258a5f00c) Merge pull request #24754 from BerriAI/litellm_gha_p3b — _@yuneng-berri_
- [`1fb6777`](https://github.com/BerriAI/litellm/commit/1fb677702dc0ad4dea16639a2a54095463f0c7a3) test: update to new vertex ai keys — _@krrish-berri-2_
- [`92db2df`](https://github.com/BerriAI/litellm/commit/92db2df2f676417fc616b9edd727b3dffaaf15c1) Merge pull request #23794 from ndgigliotti/feat/bedrock-structured-output-cost-json — _@krrish-berri-2_
- [`ce26dd4`](https://github.com/BerriAI/litellm/commit/ce26dd4101ff6f0636e129bced8a669c355e6e2e) test: update tests — _@krrish-berri-2_
- [`cdcab8a`](https://github.com/BerriAI/litellm/commit/cdcab8a243e4d48639ab628b161a0351131e7768) refactor: cleanup deprecated models — _@krrish-berri-2_
- [`bc829d5`](https://github.com/BerriAI/litellm/commit/bc829d51f2650609a0f4079e2412e4cd5ceaa042) test: test — _@krrish-berri-2_
- [`7aec910`](https://github.com/BerriAI/litellm/commit/7aec9101f56001a73a806ddc9d5b509ca926d948) [Infra] Remove CircleCI jobs now covered by GitHub Actions — _@yuneng-berri_
- [`a41ba7b`](https://github.com/BerriAI/litellm/commit/a41ba7bb6a454b01ac5dc6f846e5ca0652b208d0) test: update test — _@krrish-berri-2_
- [`bee1607`](https://github.com/BerriAI/litellm/commit/bee16072484ebe321f07efe0145adabb485a4eda) test: update test apis — _@krrish-berri-2_
- [`564ad31`](https://github.com/BerriAI/litellm/commit/564ad3195b347121a9c898474f9f30ae2df49a7a) test: update testing — _@krrish-berri-2_
- [`5cd8ca2`](https://github.com/BerriAI/litellm/commit/5cd8ca236506b954f97af872ec9075df165aa962) refactor: refactor testing — _@krrish-berri-2_
- [`6df995d`](https://github.com/BerriAI/litellm/commit/6df995d0d1bc80e8cdb6500af1e06ec6e8625c1d) refactor: dead test cleanup — _@krrish-berri-2_
- [`44b03e6`](https://github.com/BerriAI/litellm/commit/44b03e6138e40412ef48dedf5aeb755b48d25f47) fix: fix azure tests — _@krrish-berri-2_
- [`c75fb36`](https://github.com/BerriAI/litellm/commit/c75fb3650aa7229396dba1fd6b56ced57dbec225) fix: fix azure audio test — _@krrish-berri-2_
- [`b63b43f`](https://github.com/BerriAI/litellm/commit/b63b43fe095d54f61475b369a6943cddf9ca7bf2) docs: add faq to docs — _@krrish-berri-2_
- [`93d8b7f`](https://github.com/BerriAI/litellm/commit/93d8b7f75af2d59b5755e8524a4c3fb4dd6741b0) Merge pull request #24750 from BerriAI/litellm_chore-migrate-tremor — _@ryan-crabbe-berri_
- [`fdad43b`](https://github.com/BerriAI/litellm/commit/fdad43b6dd68411aaeb05b41af003136846fe7be) style: use `not team_object.models` consistently for empty-list checks — _@ryan-crabbe-berri_
- [`bc33cf6`](https://github.com/BerriAI/litellm/commit/bc33cf662f51e3b2904b093692ccf1ffc18e6798) Merge pull request #24449 from J-Byron/feat/prometheus-org-budget-metrics — _@krrish-berri-2_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
