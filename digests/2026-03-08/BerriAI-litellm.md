# BerriAI/litellm — 2026-03-08

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-07T23:59:59.000Z → 2026-03-08T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline change is **agent governance**: Krish Dholakia merged per-agent and per-session **max budget + TPM/RPM limiting** (#22849), plus an **agents health check** toggle that runs concurrent GETs from the agents page (#23044). Together these turn `/v1/agents` into something operators can actually meter and monitor.

Close behind is a large **Org Admin** push from yuneng-jiang, landing in two merges:
- #23080 lets org admins view the Internal Users page and invite users (with a multi-org selector, server-side org scoping on `/user/list`, and opening `/user/available_roles` to any authenticated user — see ce31714, 8bf3c0c, 67884c2).
- #23095 extends org-admin reach to **team management** endpoints (`/team/list`, `/team/info`, etc.), pushing the org filter into a Prisma `WHERE` clause rather than fetching the full team table (063198c). A follow-up (#23098) repairs `AgentsPanel` test assertions after a table refactor.

**Provider/runtime fixes worth noting:**
- Anthropic: enforce `type:'object'` on tool input schemas (7815921), deduplicate `tool_result` by `tool_call_id` to satisfy Anthropic's 1:1 rule on resumed sessions (5d1106f), and preserve thinking-block order when interleaved with server tool calls during extended thinking + web search (e3717c0, tests in 95ecf9f from MaxwellCalkin).
- Bedrock: strip unsupported `output_config` from Invoke requests (#23042).
- Pass-through: inject cost into Anthropic streaming chunks — previously only Vertex was wired up (#23078).
- Streaming: stop emitting spurious `reasoning_tokens=0` for non-reasoning models (#23076).
- Notable **revert**: ishaan-jaff rolled back PR #22589 and the follow-up Vertex `anyOf` fixes (#23083) — worth checking if you depend on Vertex schema handling.

**Supply chain / packaging:** CVE bumps for tar/minimatch/pypdf with hardened Docker SBOM patching (#23082); optional deps no longer pinned to exact versions (#23052); poetry.lock regenerated (#23088).

The rest of the day is heavy test churn (flaky e2e create-key, DALL-E 2 square-PNG fixture, OpenAI SDK 2.24.0 image-variation compat, Bedrock nova-premier→nova-pro swap, member-count assertion cleanups). No releases, PRs, or issues surfaced in the window — only commits.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`ffc6d84`](https://github.com/BerriAI/litellm/commit/ffc6d84f2762939d11cec4b0ee478e925134f441) fix: shallow copy input_schema to avoid caller mutation + add mutation guard test — _@netbrah_
- [`5d1106f`](https://github.com/BerriAI/litellm/commit/5d1106f018a4ea0f17c23cef882e78857d1bfd48) fix(anthropic): deduplicate tool_result messages by tool_call_id — _@netbrah_
- [`7815921`](https://github.com/BerriAI/litellm/commit/78159212d92c4709b8f679c6ccd44c3611ce1300) fix(anthropic): enforce type:'object' on tool input schemas — _@netbrah_
- [`160e2d9`](https://github.com/BerriAI/litellm/commit/160e2d9642dda1632b3ba04d2a9e964610dbc50e) Merge pull request #23098 from BerriAI/litellm_org_admin_team_fix — _@yuneng-jiang_
- [`81b2231`](https://github.com/BerriAI/litellm/commit/81b223138aaf4ca59bcbfefb96983b377eeb5a5b) fix(test): update agents.test.tsx for AgentsPanel table refactor — _@yuneng-jiang_
- [`5acb25f`](https://github.com/BerriAI/litellm/commit/5acb25fd9e97fb165e945620ecbded52683671b8) Merge pull request #23095 from BerriAI/litellm_org_admin_add_user_e2e — _@yuneng-jiang_
- [`3a1ac96`](https://github.com/BerriAI/litellm/commit/3a1ac964f7a4b7e9dd246f93cf58c3beab354612) fix: pass organization_ids=None in get_users test calls — _@yuneng-jiang_
- [`7006642`](https://github.com/BerriAI/litellm/commit/70066426d036dbe08cc03592fc7a8dc4632babfa) fix: missing closing paren in agent_endpoints get_agents Query() — _@yuneng-jiang_
- [`ac51284`](https://github.com/BerriAI/litellm/commit/ac5128493e30057b25378ca44f6e5d7f7b733445) fix: repair test regressions from org admin auth changes — _@yuneng-jiang_
- [`063198c`](https://github.com/BerriAI/litellm/commit/063198cf8e65bd8a4a6b3604c172b44f681e2fee) fix: push org filter into DB query for /team/list, fix agents.tsx build — _@yuneng-jiang_
- [`8f33983`](https://github.com/BerriAI/litellm/commit/8f33983389edf6808ef7c988d5c9ed89b366cdc9) Merge remote-tracking branch 'origin' into litellm_org_admin_add_user_e2e — _@yuneng-jiang_
- [`f77b5a2`](https://github.com/BerriAI/litellm/commit/f77b5a24c3b5e8c47214f53f0e6db4289fe76414) fix: resolve ruff PLR0915 and F401 lint errors — _@yuneng-jiang_
- [`ce31714`](https://github.com/BerriAI/litellm/commit/ce317148b9947deb065a7c4b4e19da29803aefc1) feat: org admin access to team management — backend auth, UI visibility, tests — _@yuneng-jiang_
- [`95ecf9f`](https://github.com/BerriAI/litellm/commit/95ecf9f46dfa564176bbdaef7853f3b4e5a43a64) test: add tests for thinking block interleaving with server tool calls — _@MaxwellCalkin_
- [`e3717c0`](https://github.com/BerriAI/litellm/commit/e3717c0067688c07d91d6125b787ebf9b503aba2) fix: preserve thinking block order when interleaved with server tool calls — _@MaxwellCalkin_
- [`8bf3c0c`](https://github.com/BerriAI/litellm/commit/8bf3c0c67fd8022089bdf86848c9b1f46c4bedf5) fix: org admin invite user — multi-org selector, organizations list in POST body, auth check — _@yuneng-jiang_
- [`67884c2`](https://github.com/BerriAI/litellm/commit/67884c279a0164015399fae7e07b978d2f6df1ed) fix: allow any authenticated user to call /user/available_roles — _@yuneng-jiang_
- [`1c37872`](https://github.com/BerriAI/litellm/commit/1c3787264bf183d63de887abf445fae300ab79c7) fix(bedrock): strip output_config from Bedrock Invoke requests (#23042) — _@giulio-leone_
- [`e156507`](https://github.com/BerriAI/litellm/commit/e156507ca7f54bb37d5b910b62d1a28835be6c81) chore: regenerate poetry.lock to match pyproject.toml (#23088) — _@github-actions[bot]_
- [`5801f0b`](https://github.com/BerriAI/litellm/commit/5801f0b97f13e6dafc21cf7382411ae5efc10a7f) Don't pin to exact versions of optional deps (#23052) — _@ctcjab_
- [`52ae177`](https://github.com/BerriAI/litellm/commit/52ae17746bf8107a4d9dff2e7c73d1eebcc4360b) docs: link dynamic TPM/RPM limiting to request prioritization doc (#22988) — _@Krish Dholakia_
- [`cf439c2`](https://github.com/BerriAI/litellm/commit/cf439c269c77909a02fba3cdcd827c2e4bed1eaa) Agents - add max budget + tpm/rpm limiting per agent AND per agent session  (#22849) — _@Krish Dholakia_
- [`03ca981`](https://github.com/BerriAI/litellm/commit/03ca98123f04840ecfd135cb205d63fde5d038d4) Agents health checks (#23044) — _@Krish Dholakia_
- [`0a0c0d8`](https://github.com/BerriAI/litellm/commit/0a0c0d8017895153cc3e887ab1786fbdf76829f1) Merge pull request #23080 from BerriAI/litellm_org_admin_invite_users — _@yuneng-jiang_
- [`e7714f0`](https://github.com/BerriAI/litellm/commit/e7714f0ce6115d522d7ca658ded4b4a5058a153c) Fix CVEs: bump tar/minimatch/pypdf + harden Docker SBOM patching (#23082) — _@Krish Dholakia_
- [`fd29d15`](https://github.com/BerriAI/litellm/commit/fd29d15a64fba8d857a835793e8f386b30629726) fix: use comma-separated organization_ids param instead of repeated query params — _@yuneng-jiang_
- [`41d89ab`](https://github.com/BerriAI/litellm/commit/41d89ab84eeea0c75b96223b3317ebbd8c61dedb) fix: address review feedback for org admin user management — _@yuneng-jiang_
- [`9e53119`](https://github.com/BerriAI/litellm/commit/9e531195ec970a35506131e486edf4d819a3eba5) Merge pull request #23057 from BerriAI/litellm_fix_user_filter_scope — _@yuneng-jiang_
- [`ec9791f`](https://github.com/BerriAI/litellm/commit/ec9791f72b79a87e0088cb15a70bb936df0df58f) Merge pull request #23085 from BerriAI/litellm_fix_team_info_test — _@yuneng-jiang_
- [`efcde74`](https://github.com/BerriAI/litellm/commit/efcde7471143d3c83585f0891db2b9b4681e0d84) fix(test): update TeamInfo virtual keys tests for removed member count display — _@yuneng-jiang_
- [`bd9fe1c`](https://github.com/BerriAI/litellm/commit/bd9fe1cd63ed5995ae3d7a8643350aae2a920336) fix: improve error messages and extract helper to fix C901 complexity — _@yuneng-jiang_
- [`fc81edc`](https://github.com/BerriAI/litellm/commit/fc81edc4c45103247a760de57527d633c204357e) revert: undo PR #22589 and follow-up vertex anyOf fixes (#23083) — _@ishaan-jaff_
- [`906288a`](https://github.com/BerriAI/litellm/commit/906288a1b29daa6dd0d67f33d0cb9d750b58c1d3) Merge pull request #23065 from BerriAI/litellm_fix_team_scoped_virtual_keys — _@yuneng-jiang_
- [`cb7da30`](https://github.com/BerriAI/litellm/commit/cb7da3044ddcfd193336fd7622a6c34870bdf08a) feat: allow org admins to view Internal Users page and invite users — _@yuneng-jiang_
- [`2b8db87`](https://github.com/BerriAI/litellm/commit/2b8db87a35b14547ceacd9a0709a9edf196d2c08) fix(pass_through): inject cost into Anthropic streaming chunks + fix SSE parsing in tests (#23078) — _@ishaan-jaff_
- [`d1abe15`](https://github.com/BerriAI/litellm/commit/d1abe15bbe73340768c4623c6b5f78557ef324c3) Merge pull request #23067 from BerriAI/litellm_fix_e2e_create_key — _@yuneng-jiang_
- [`517a929`](https://github.com/BerriAI/litellm/commit/517a929ccdfdc0fb1ba5433e2a3c0a7c37653ec5) fix(streaming): return None from count_reasoning_tokens when no reasoning content found (#23076) — _@ishaan-jaff_
- [`ada8877`](https://github.com/BerriAI/litellm/commit/ada8877aeb29997a09b2dc3cf1601d1dcfa42c47) Merge pull request #23074 from BerriAI/litellm_fix_member_count_tests — _@ryan-crabbe_
- [`a30b71c`](https://github.com/BerriAI/litellm/commit/a30b71c9464c2484144ae91b4ace7eb965dcf92c) fix(tests): generate square PNG in image_url fixture for DALL-E 2 variation test (#23073) — _@ishaan-jaff_
- [`ec4ef9c`](https://github.com/BerriAI/litellm/commit/ec4ef9c924ea8f9fe7931002a7a90eab2262ae12) tests: update tests to not assert member count text because we removed that from this view — _@ryan-crabbe_
- [`34984d2`](https://github.com/BerriAI/litellm/commit/34984d22ae3080170a80cf42fb63a787f2fbe4a7) fix(test): update openrouter image generation assertion for gemini-2.5-flash-image (#23070) — _@ishaan-jaff_
- [`7f6adf2`](https://github.com/BerriAI/litellm/commit/7f6adf2e1ad4ad4db26d0cc2d1a06beb0b22dc40) fix(anthropic/skills): remove ?beta=true query param from Skills API URLs (#23069) — _@ishaan-jaff_
- [`08e2ec3`](https://github.com/BerriAI/litellm/commit/08e2ec3412a0a6a58acbe63b409cce786771dbdd) Fix flaky e2e tests by using regex selectors — _@yuneng-jiang_
- [`66c8224`](https://github.com/BerriAI/litellm/commit/66c822435e4a286ee5555bfb7a63caa40a99ddb3) fix(ci): image variation openai sdk 2.24.0 compat + swap bedrock nova-premier to nova-pro (#23066) — _@ishaan-jaff_
- [`2cd0c76`](https://github.com/BerriAI/litellm/commit/2cd0c767ee82b032919ed70253b382e045482da2) fix: regression test — _@ryan-crabbe_
- [`c11477f`](https://github.com/BerriAI/litellm/commit/c11477fb6fa5de8836bab63665662de054a09fbf) fix: add 10-minute TTL to UI settings cache and refresh on GET — _@yuneng-jiang_
- [`daf7c0c`](https://github.com/BerriAI/litellm/commit/daf7c0c3a85947aaadb8cc6ea2679fda70ee3183) fix: scoping virtual keys in the teams view to be applying the team filter globally instead of an or branch — _@ryan-crabbe_
- [`e8a7116`](https://github.com/BerriAI/litellm/commit/e8a7116899b6045adf88ca29a50d81be8e4962e8) fix(tests): fix repeating chunk and audio usage streaming tests (#23061) — _@ishaan-jaff_
- [`fffc069`](https://github.com/BerriAI/litellm/commit/fffc069eb959078fd38176e1b2241cf7577f8b17) [Fix] UI - MCP Servers: stop health checks triggering on deletion — _@yuneng-jiang_
- [`a50a84c`](https://github.com/BerriAI/litellm/commit/a50a84c16c5aacab2918879e4acf2c0030d13084) fix(tests): update redaction assertion + remove flaky qwen3 streaming test (#23062) — _@ishaan-jaff_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
