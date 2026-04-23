# BerriAI/litellm — 2026-03-28

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-27T23:59:59.000Z → 2026-03-28T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A busy infra + UI hardening day on the internal staging fork — no public releases, PRs, or issues, but ~40 commits landed, dominated by GHA test workflow isolation and a batch of admin UI / auth fixes.

The headline is **CI infrastructure overhaul** (PRs #24740, #24741, #24742): the monolithic matrix unit-test workflow was replaced with individually-named, isolated workflows backed by a shared reusable base that provisions Postgres + Redis service containers (3d527b7, 6549f3e). Hardening followed quickly — Postgres credentials and `DATABASE_URL` were moved out of workflow files into environment secrets to silence secret scanners (3ae8040, d42e2f6), and Redis-only suites were repointed to the integration env since GHA can't conditionally start service containers (3b5b983). Test isolation fixes for agent health checks and doc tests also shipped (7100ed5, 7851567).

On the **proxy/auth side**, several small but user-visible fixes merged:
- `fastest_response` routing now returns the actual winning model name instead of the comma-separated input list (32adda8).
- JWT user cache is now invalidated after role/team sync so role changes take effect immediately rather than waiting for TTL (#24717, with explicit TTLs added in dd11e77).
- `/user/bulk_update` was added to `management_routes` to stop it 403'ing for proxy admins (#24708).
- Additional JWT/SSO guards merged via #24706 and #24701.

**Admin UI** got substring search for `user_id` and `key_alias` on `/key/list` (#24746) — initially gated to admins for ID-leak reasons (8881c36), then simplified to apply unconditionally (65df501); worth a look if you care about the security tradeoff. Other UI fixes: budget page rewritten on React Query to fix crashes (#24711), logs page no longer shows unfiltered results when a filter returns zero rows (#24745, 12a55a8), and access-group models now appear in the team model listing (#24743). A Tremor→antd/native-span migration in `logging_settings_view` (191bb95) and an HA control-plane diagram refresh (#24747) round things out.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`191bb95`](https://github.com/BerriAI/litellm/commit/191bb9504d770416a7cfdd436bc22a29d61c62fb) chore(ui): migrate Tremor Text/Badge to antd Tag and native spans in logging_settings_view — _@ryan-crabbe-berri_
- [`8fb27c6`](https://github.com/BerriAI/litellm/commit/8fb27c697cbfac92324d6e46a2a65f40f5d6a834) Merge pull request #24746 from BerriAI/litellm_feat-substring-key-filters — _@ryan-crabbe-berri_
- [`a59acc8`](https://github.com/BerriAI/litellm/commit/a59acc8f8a1521767a68494cf76a50869cb430df) [Fix] Derive use_substring_matching from role, not auto-set path — _@ryan-crabbe-berri_
- [`77ad1ab`](https://github.com/BerriAI/litellm/commit/77ad1ab53073daabafa5b34443f03988c7ec7598) Merge pull request #24745 from BerriAI/litellm_fix-logs-filtering — _@ryan-crabbe-berri_
- [`8a2186a`](https://github.com/BerriAI/litellm/commit/8a2186a654b67fff101e5f8ac5a68167a2ca52cc) [Fix] Reset page to 1 on filter reset and use pageSize param in fallbacks — _@ryan-crabbe-berri_
- [`9c59d5e`](https://github.com/BerriAI/litellm/commit/9c59d5ee1b1962d65680de976d84a1450e67c5c3) Merge pull request #24747 from BerriAI/litellm_docs-high-availability — _@ryan-crabbe-berri_
- [`9284395`](https://github.com/BerriAI/litellm/commit/9284395c1df3872f5741a36ffadd9b231c41ff60) [Fix] Hide connector label on mobile, remove stale master key mention — _@ryan-crabbe-berri_
- [`d332c5b`](https://github.com/BerriAI/litellm/commit/d332c5b5417a09bf38429feda1983678876091fe) [Docs] Improve high availability control plane diagram clarity — _@ryan-crabbe-berri_
- [`40d4e79`](https://github.com/BerriAI/litellm/commit/40d4e79a00f4c387b41d499564ef70615a36676f) Merge pull request #24742 from BerriAI/litellm_gha_p3 — _@yuneng-berri_
- [`65df501`](https://github.com/BerriAI/litellm/commit/65df501f155dec1b9773816912590bdb0512bb74) Simplify substring search — remove admin-only gating — _@ryan-crabbe-berri_
- [`3b5b983`](https://github.com/BerriAI/litellm/commit/3b5b98327e466b0b1e7350d5056a0c0fb3b327d2) [Fix] Use integration-redis-postgres env for Redis workflows since Postgres always starts — _@yuneng-berri_
- [`8881c36`](https://github.com/BerriAI/litellm/commit/8881c364055e4caeedaf45fcaae642cc242cf96a) [Fix] Restrict substring key filters to admin users only — _@ryan-crabbe-berri_
- [`33bd570`](https://github.com/BerriAI/litellm/commit/33bd570d5e9815fad67364235486724fe05d3eff) [Feat] Support substring search for user_id and key_alias filters on /key/list — _@ryan-crabbe-berri_
- [`fbddab6`](https://github.com/BerriAI/litellm/commit/fbddab6178e690c0757d44bc68ac46fe7fa1f721) Handle search error state and cancel wasted API call on filter reset — _@ryan-crabbe-berri_
- [`3ae8040`](https://github.com/BerriAI/litellm/commit/3ae80407dd1e9c1ea3c55fcb3cbd485a253c94c8) [Fix] Move Postgres username and password to environment secrets — _@yuneng-berri_
- [`d42e2f6`](https://github.com/BerriAI/litellm/commit/d42e2f64291136b4853908a534db8579da9edd2a) [Fix] Move Postgres DATABASE_URL to environment secret to avoid credential leak warnings — _@yuneng-berri_
- [`479c5e2`](https://github.com/BerriAI/litellm/commit/479c5e21aa2833e3effadd873be08ac68d7d4f10) Merge pull request #24743 from BerriAI/litellm_fix-access-group-models-in-ui — _@ryan-crabbe-berri_
- [`640ea92`](https://github.com/BerriAI/litellm/commit/640ea9228fac910aff441bea3f944cf6d3bd99ff) Remove unnecessary getattr defense for Prisma-backed field — _@ryan-crabbe-berri_
- [`8d9bbc6`](https://github.com/BerriAI/litellm/commit/8d9bbc6eb2f004538a6291bf38ed88c0f304a9f2) [Fix] Include access group models in UI model listing — _@ryan-crabbe-berri_
- [`6549f3e`](https://github.com/BerriAI/litellm/commit/6549f3eb1a94b1672f7d66e9fe825834ccf3b1c9) [Infra] Add unit test workflows for Postgres, Redis, and security test suites — _@yuneng-berri_
- [`12a55a8`](https://github.com/BerriAI/litellm/commit/12a55a8a6f8f94d97413a489523b18499a241108) Fix logs page showing unfiltered results when filter matches zero rows — _@ryan-crabbe-berri_
- [`666a31d`](https://github.com/BerriAI/litellm/commit/666a31d47a5eb313803313639de2f52cad9f3df4) Merge pull request #24741 from BerriAI/litellm_gha_p2 — _@yuneng-berri_
- [`7851567`](https://github.com/BerriAI/litellm/commit/7851567091f7033e4b90f84fd709ae77c30fdf25) [Fix] Scope documentation workflow to match CircleCI and add missing router settings — _@yuneng-berri_
- [`7100ed5`](https://github.com/BerriAI/litellm/commit/7100ed5d0aaa7942a8b01d1ef87a0c27d573b682) [Fix] Test isolation for agent health checks and documentation test path resolution — _@yuneng-berri_
- [`428d837`](https://github.com/BerriAI/litellm/commit/428d837704fed19a8190aeb1eaef7c2874c798e1) Merge pull request #24740 from BerriAI/litellm_unit_test_workflow_isolation — _@yuneng-berri_
- [`c717189`](https://github.com/BerriAI/litellm/commit/c717189ed2549b8dd28ec8f3ac4286e4aa748de9) [Infra] Remove workflows that require API keys or external services — _@yuneng-berri_
- [`a34ed20`](https://github.com/BerriAI/litellm/commit/a34ed20901e96fdee82adcc7facc01f1082de1f5) [Infra] Fix job naming in reusable workflow callers — _@yuneng-berri_
- [`3d527b7`](https://github.com/BerriAI/litellm/commit/3d527b722da2552e0b464989c7f7a991cda13d32) [Infra] Add isolated unit test workflows with hardened security posture — _@yuneng-berri_
- [`2eb3c20`](https://github.com/BerriAI/litellm/commit/2eb3c20e76fa923044e95de491fee4817a8aca2b) Merge pull request #24718 from BerriAI/litellm_ryan-march-26 — _@ryan-crabbe-berri_
- [`32adda8`](https://github.com/BerriAI/litellm/commit/32adda8a49e488a327ebeaf8fe81f158f317cf97) fix: return winning model name instead of comma-separated list for fastest_response — _@krrish-berri-2_
- [`726a346`](https://github.com/BerriAI/litellm/commit/726a34627cc46ed77cb9b31eaa794bae4b5db71d) Merge pull request #24717 from BerriAI/litellm_fix-user-cache-invalidation — _@ryan-crabbe-berri_
- [`7907e5e`](https://github.com/BerriAI/litellm/commit/7907e5e1262a09ab365bf7c1e3000a362346fbe5) Merge pull request #24711 from BerriAI/litellm_fix-edit-budget — _@ryan-crabbe-berri_
- [`dd11e77`](https://github.com/BerriAI/litellm/commit/dd11e778529cc3582d037b7edd0d49703ae028f6) fix: add explicit TTL to cache writes and test coverage for user cache invalidation — _@ryan-crabbe-berri_
- [`2ece799`](https://github.com/BerriAI/litellm/commit/2ece79930b1b2884b76a33582c91615f2c70a544) fix(jwt): invalidate user cache after role/team sync updates — _@ryan-crabbe_
- [`98ecf17`](https://github.com/BerriAI/litellm/commit/98ecf1755008c55cb39ea1952fcd4cabe85d3365) fix(ui): refactor budget page to React Query hooks and fix crashes — _@ryan-crabbe-berri_
- [`5b65104`](https://github.com/BerriAI/litellm/commit/5b651048f2067aec6a6d52c02b093089e5cf1832) Merge pull request #24706 from BerriAI/litellm_fix-jwt-none-guard — _@ryan-crabbe-berri_
- [`a533de0`](https://github.com/BerriAI/litellm/commit/a533de0b08abd90bd58752840c7222620aea6982) Merge pull request #24701 from BerriAI/litellm_fix-jwt-role-mappings — _@ryan-crabbe-berri_
- [`52e9ca7`](https://github.com/BerriAI/litellm/commit/52e9ca7a7393c99c9bcd982b93f7cb1b0d023653) Merge pull request #24708 from BerriAI/litellm_fix-bulk-update — _@ryan-crabbe-berri_
- [`0c67f27`](https://github.com/BerriAI/litellm/commit/0c67f274e58f5e402c80aa6221d0b3a769f6875f) docs: add /user/bulk_update to internal_user_endpoints module docstring — _@ryan-crabbe-berri_
- [`a5ff668`](https://github.com/BerriAI/litellm/commit/a5ff668f5e2a9584796eaf87f569d611f1ff7d5d) fix: add /user/bulk_update to management_routes so proxy admins can access it — _@ryan-crabbe-berri_
- [`fe080a8`](https://github.com/BerriAI/litellm/commit/fe080a86b2f22f7839ae1190cad9350776804e8e) Merge pull request #24705 from BerriAI/litellm_auto_schema_sync — _@yuneng-berri_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
