# BerriAI/litellm — 2026-04-04

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-03T23:59:59.000Z → 2026-04-04T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Heavy day on the staging fork (`litellm_internal_staging`), dominated by UI/proxy fixes and several cherry-picked feature backports — no upstream releases, PRs, or issues in the window.

The most consequential item is a wave of MCP and routing backports from Ishaan: **MCP Toolsets + GCP caching fix** (#25146/#25155), **MCP metadata support** cherry-picked alongside a tag-query fix (#25145), the **team model-group name routing fix** (#25148/#25154), and a broader rollup including `allowed_fails_policy` integration into router health checks (#24988 via #25150). A separate rollup (#25113) brings in Brave Search as a provider entry and other pricing/provider tweaks, and #24887 (via #25151) adds the missing unversioned `vertex_ai/claude-haiku-4-5` price entry that was causing $0.00 cost tracking.

UI work is the other major theme, mostly from Ryan:
- **Team guardrails from the UI** (#25038) landed, plus team-scoped guardrail submissions (non-admins now see only their teams' submissions instead of 403'ing) and a route-permission fix for `/guardrails/submissions` (commits 79064a6, ab9c875).
- **Per-model rate limits in team edit/info views** (#25144), exposing existing `model_tpm_limit`/`model_rpm_limit` metadata, with validation requiring TPM or RPM on save (11a43d6, f0bbd41).
- **Azure Entra ID credential fields** (tenant/client id/secret) in the provider form (#25137).
- Fix to stop injecting `vector_store_ids: []` on model edit while still preserving explicit clears (#25133, 445c1fa) — worth noting if you've seen vector store associations silently wiped.
- Smaller fixes: usage export now uses entity key instead of mining `api_key_breakdown` (#25153), team-update sends `null` (not `""`) for cleared `organization_id` (c495acd).

Notable infra/perf: **access-group resources are now batch-fetched in team endpoints** to remove an N+1 (#25027, 93369bf); a **Prisma JSON path filter** that 500'd team model updates was replaced with a `model_name` prefix query (#25152, 8e6300f); and the non-root Docker runtime image now includes the enterprise bridge so enterprise hooks register (#24917). A self-contained Playwright E2E suite against local Postgres landed (8a0ddd4), and a broken codeql-action SHA in the scorecard workflow was fixed (#24815). Project-level guardrails (#25087) and an A2A JSON-RPC envelope fix for AgentCore (#25092) also merged.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`6bc4b46`](https://github.com/BerriAI/litellm/commit/6bc4b46e5620a1cf9aa5801dffb2aee69e85c6f6) Merge pull request #25156 from BerriAI/litellm_ryan-apr-4 — _@ryan-crabbe-berri_
- [`8ecbf75`](https://github.com/BerriAI/litellm/commit/8ecbf757b292b7024100e7ec224b86cf2a7be1b1) Merge pull request #25038 from BerriAI/litellm_feat-add-guardrail — _@ryan-crabbe-berri_
- [`61b2952`](https://github.com/BerriAI/litellm/commit/61b295238b85a8ef1c7a1a3c5525ee31f7c3578a) cherry-pick: tag query fix + MCP metadata support (#25145) — _@ishaan-berri_
- [`e87f6ca`](https://github.com/BerriAI/litellm/commit/e87f6cae5be7e3fb776d5062b5ae475dcf720975) chore: poetry lock — _@ryan-crabbe-berri_
- [`a36fe70`](https://github.com/BerriAI/litellm/commit/a36fe70fde0bc6dddfb9504ba623d220b01e6713) test(ui): fix guardrails.test.tsx after antd Tabs migration — _@ryan-crabbe-berri_
- [`693ad49`](https://github.com/BerriAI/litellm/commit/693ad49719f147e103479d4024063d39374eab3d) Litellm ishaan march23 - MCP Toolsets + GCP Caching fix  (#25146) (#25155) — _@ishaan-berri_
- [`c663926`](https://github.com/BerriAI/litellm/commit/c663926fb8597fbf6bd8d02f2fc5b79e5f1a7f6c) Merge remote-tracking branch 'origin/main' into litellm_feat-add-guardrail — _@ryan-crabbe-berri_
- [`55734ee`](https://github.com/BerriAI/litellm/commit/55734ee27217465054db7f422f5e48a3b130043a) Merge pull request #25153 from BerriAI/litellm_fix-export — _@ryan-crabbe-berri_
- [`cc867f1`](https://github.com/BerriAI/litellm/commit/cc867f117db8e17f27deeec61d4653cdd9a7c118) Merge pull request #25144 from BerriAI/litellm_feat-per-team-per-model-rate-limit-ui — _@ryan-crabbe-berri_
- [`8b8f5ce`](https://github.com/BerriAI/litellm/commit/8b8f5cede06a8b7f30367701b6c39c9f1fdcfe9f) Merge pull request #25137 from BerriAI/litellm_feat-azure-entra-id — _@ryan-crabbe-berri_
- [`79064a6`](https://github.com/BerriAI/litellm/commit/79064a68e4161c95c043eddcebde308b54a172ef) fix: allow non-admin access to /guardrails/submissions and fix register membership check — _@ryan-crabbe-berri_
- [`5187629`](https://github.com/BerriAI/litellm/commit/51876292a0edcefca1419794cd4bcc4661514b98) Litellm ishaan april4 2 (#25150) — _@ishaan-berri_
- [`ab9c875`](https://github.com/BerriAI/litellm/commit/ab9c875a0019037d7adf59a3e14bb8625faa5eea) feat: scope guardrail submissions to team members — _@ryan-crabbe-berri_
- [`8d9e5ff`](https://github.com/BerriAI/litellm/commit/8d9e5ff3d4f1606dd527aae14f9427a155229e4c) Litellm team model group name routing fix (#25148) (#25154) — _@ishaan-berri_
- [`90b9a2f`](https://github.com/BerriAI/litellm/commit/90b9a2f6d898893633c0d9d447c7d15295718859) Merge pull request #25152 from BerriAI/litellm_fix_team_model_update_prisma_json_filter — _@yuneng-berri_
- [`b53cfe7`](https://github.com/BerriAI/litellm/commit/b53cfe729abc3210b245a204bf2577713704dd85) Litellm ishaan march30 (#24887) (#25151) — _@ishaan-berri_
- [`5452692`](https://github.com/BerriAI/litellm/commit/5452692af4bce8d0af456125749b27ea7f9c86ee) test(ui): align EntityUsageExport tests with entity-key display logic — _@ryan-crabbe-berri_
- [`566a041`](https://github.com/BerriAI/litellm/commit/566a04126fb1091790fd487956b7f6a26d445c60) test: add unit tests for _get_team_deployments filtering logic — _@yuneng-berri_
- [`8e6300f`](https://github.com/BerriAI/litellm/commit/8e6300f0bf501b57e431d41099e1cb0686e5f8f1) fix: replace unsupported Prisma JSON path filter in _get_team_deployments — _@yuneng-berri_
- [`08df864`](https://github.com/BerriAI/litellm/commit/08df8643bf00d45d5e82c8f07c4c167056e70237) fix(docker): include enterprise bridge in non-root runtime image (#24917) — _@Sameerlite_
- [`9dca431`](https://github.com/BerriAI/litellm/commit/9dca4319892642650644013f6fcd4185ed8947eb) fix(ui): use entity key for export instead of extracting team_id from api_key_breakdown — _@ryan-crabbe-berri_
- [`f0bbd41`](https://github.com/BerriAI/litellm/commit/f0bbd415c8ca5d9ec78e3de73612058ad60b9603) fix(ui): require TPM or RPM when adding a per-model team rate limit — _@ryan-crabbe-berri_
- [`11a43d6`](https://github.com/BerriAI/litellm/commit/11a43d6e509b074b9165042ceb3a4f8c0c2ae29c) feat(ui): add per-model rate limits to team edit/info views — _@ryan-crabbe-berri_
- [`4c06e43`](https://github.com/BerriAI/litellm/commit/4c06e4379bca30b29b57e4a31e527893cd22f93d) Litellm ishaan april2 (#25113) — _@ishaan-berri_
- [`2488639`](https://github.com/BerriAI/litellm/commit/24886394b35e5c12b98e5b6d41ddfb8b3ee9d051) Merge pull request #25133 from BerriAI/litellm_fix-vector-store-id-model-update — _@yuneng-berri_
- [`baeda23`](https://github.com/BerriAI/litellm/commit/baeda235bb9b0474b80fc572a73e4da766d247e2) feat(ui): expose Azure Entra ID credential fields in provider form — _@ryan-crabbe-berri_
- [`c898edb`](https://github.com/BerriAI/litellm/commit/c898edbd14b82f5f93a77d1b12a1e2a80af71a62) Merge pull request #25136 from BerriAI/ui_build_apr4 — _@yuneng-berri_
- [`445c1fa`](https://github.com/BerriAI/litellm/commit/445c1fa0ec55aa13d7f5f80c0d6e4c564d660900) fix(ui): preserve clear-vector-stores intent on model edit — _@ryan-crabbe-berri_
- [`1e414b5`](https://github.com/BerriAI/litellm/commit/1e414b5da542c05749477e72de4da200eebee172) chore: update Next.js build artifacts (2026-04-04 17:55 UTC, node v22.16.0) — _@yuneng-berri_
- [`fba3bbe`](https://github.com/BerriAI/litellm/commit/fba3bbe47accac78b54c993ac0f8031d51ce2a79) test(ui): add regression test for vector_store_ids edit-model bug — _@ryan-crabbe-berri_
- [`91d8873`](https://github.com/BerriAI/litellm/commit/91d88737b40ae013c40037c89247d019d3ed664e) fix(ui): don't overwrite vector_store_ids with empty array on model edit — _@ryan-crabbe-berri_
- [`fa9e3d8`](https://github.com/BerriAI/litellm/commit/fa9e3d82fccbc4c164ed1ba40c23c561d7e087ac) Merge pull request #25119 from BerriAI/litellm_ryan-march-31 — _@yuneng-berri_
- [`76c0591`](https://github.com/BerriAI/litellm/commit/76c05913dd52401f6ed7eae770dddb75c6998487) chore: regen poetry.lock for litellm-proxy-extras 0.4.64 bump — _@ryan-crabbe-berri_
- [`ad81892`](https://github.com/BerriAI/litellm/commit/ad81892f05676ca36c8df0f079fda1e5a91a2177) Merge remote-tracking branch 'origin/main' into litellm_ryan-march-31 — _@ryan-crabbe-berri_
- [`ad203dc`](https://github.com/BerriAI/litellm/commit/ad203dc9a79ff32962431eca6ac557338a8788d4) poetry — _@ryan-crabbe-berri_
- [`c495acd`](https://github.com/BerriAI/litellm/commit/c495acda1b5801690d1b11c96bc22df047a19180) fix(ui): send null (not '') for cleared organization_id on team update — _@ryan-crabbe-berri_
- [`866c4a2`](https://github.com/BerriAI/litellm/commit/866c4a25ffb5ec4a7d65e45bc950245a903e5ba9) test(ui): update tests to match new team_id / access-group signatures — _@ryan-crabbe-berri_
- [`ce219fc`](https://github.com/BerriAI/litellm/commit/ce219fcc9623bfb9c1584a6014518f764dc2b53d) refactor(proxy): extract helpers to fix PLR0915 violations — _@ryan-crabbe-berri_
- [`f53db7f`](https://github.com/BerriAI/litellm/commit/f53db7f113c420a7385850abc06546d1d54c8bc9) Merge remote-tracking branch 'origin/main' into litellm_ui_e2e_psql_pr — _@yuneng-berri_
- [`8a0ddd4`](https://github.com/BerriAI/litellm/commit/8a0ddd46d567ec8dabe893fa69c65fbc2baf3ca4) [Test] UI - Add Playwright E2E tests with local PostgreSQL — _@yuneng-berri_
- [`a5322c6`](https://github.com/BerriAI/litellm/commit/a5322c6efcd579c0ee8af7bae0f27fb07e350fd1) Merge pull request #24815 from joereyna/feat/re-add-codecov-ci — _@yuneng-berri_
- [`4c1ef42`](https://github.com/BerriAI/litellm/commit/4c1ef4234d88cb8b9b01b0f1dd02d8eab3a81d64) feat(ui): add guardrails support to project create/edit forms (#25100) — _@michelligabriele_
- [`a292add`](https://github.com/BerriAI/litellm/commit/a292add9bd53a87e919a79aaeae8bbcb542cd033) fix(a2a): preserve JSON-RPC envelope for AgentCore A2A-native agents (#25092) — _@michelligabriele_
- [`f74cd07`](https://github.com/BerriAI/litellm/commit/f74cd074196bf8ed6269277fddb3e2708c44dc38) feat(proxy): add project-level guardrails support (#25087) — _@michelligabriele_
- [`127149c`](https://github.com/BerriAI/litellm/commit/127149c263b1676927adda56bf969a50e0ff132f) bump litellm-proxy-extras to 0.4.64 (#25121) — _@ishaan-berri_
- [`0331fb5`](https://github.com/BerriAI/litellm/commit/0331fb5a8f7a241fded08b729a0d9c9edb71a502) Merge pull request #25027 from BerriAI/litellm_add-access-group-to-model — _@ryan-crabbe-berri_
- [`93369bf`](https://github.com/BerriAI/litellm/commit/93369bf60d7ad87f33c56ca66ce20a3994419e8d) perf(teams): batch-fetch access groups in single DB query — _@ryan-crabbe-berri_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
