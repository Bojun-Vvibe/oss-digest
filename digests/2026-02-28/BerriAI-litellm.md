# BerriAI/litellm — 2026-02-28

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-02-27T23:59:59.000Z → 2026-02-28T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is the **v1.82.0 release** (commit 65c5d5a), cut alongside a flurry of stability, security, and provider fixes. If you read one thing, skim the release notes commit (92db5a9) and the "Litellm stability fix v2" rollup (#22452).

**Security & correctness fixes worth attention:**
- Plaintext JWTs were leaking into debug logs; now wrapped in a `RedactedDict` at the request entry point (#22424).
- OIDC discovery URLs, roles-array handling, and dot-notation error hints fixed for Azure AD JWT auth (#22336).
- MCPs now default `available_on_public_internet=true`, reversing a prior private-by-default behavior that broke setups (#22331).
- MCP auth headers from the request are now forwarded into tool fetch for `/v1/responses` and chat completions (#22291).
- Admin users finally get `user_id`/`user_info` populated in `/user/info` (#22239), and a system user gets `PROXY_ADMIN` for key rotation (#21896).

**Provider/streaming work:**
- Sync streaming mid-stream fallback added, plus 429 handling fixed across all streaming paths for Vertex/Bedrock (#22375) — likely the most impactful reliability change for proxy users.
- Targeted streaming hot-path perf wins: aiohttp pool raised 300→1000 (50→500/host) and `model_copy()` skipped per chunk (#22346).
- Anthropic `output_config` now populated when `reasoning_effort` is used on Claude 4.6 (#22410); Vertex AI rawPredict sends `anthropic-beta` as an HTTP header (#22321).
- Bedrock Converse no longer leaks the internal `json_tool_call` when mixed with real tools (#21107, fixes #18381).
- OpenRouter gains image-edit support via chat completions (commit 3775ba3) with proper API-key validation (7c4e576).
- New Cursor Cloud Agents pass-through provider added (#22432).

**UI / proxy ops:**
- Projects feature expanded heavily: details page (#22360), keys table + project dropdown on key create/edit (#22373), delete action (#22412), `project_id`/`access_group_id` filters on `/key/list` (#22356), and an `enable_projects_ui` opt-in toggle (#22416). A `beforeunload` listener memory leak in UserDashboard was also fixed (#22430).
- `litellm-enterprise` bumped to 0.1.33 with a manual PyPI publish workflow (#22421); `litellm-proxy-extras` to 0.4.50 (#22417).
- New duplicate-issue detection bot (#22034) and a custom CodeQL workflow replacing the expensive default (commit 53f3123) to unblock CI.

No new issues, PRs, or formal releases were recorded in the window — everything landed as direct commits to the staging branch.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`d524b79`](https://github.com/BerriAI/litellm/commit/d524b795743e002ad1a433079eb91107fd72c71d) fix(types): normalize null top_logprobs to [] in ChatCompletionTokenLogprob (#22245) — _@shivaaang_
- [`245d52d`](https://github.com/BerriAI/litellm/commit/245d52d73488baee5b69f3bb7fdc3ac292f1c568) fix(vertex_ai): Set anthropic-beta as HTTP header for Vertex AI rawPredict (#22321) — _@castrapel_
- [`9897477`](https://github.com/BerriAI/litellm/commit/98974771fdcaddcb182e4a11ad881bfc50e4c777) fix: add sync streaming fallback + fix 429 for all streaming paths (#22375) — _@CSteigstra_
- [`92db5a9`](https://github.com/BerriAI/litellm/commit/92db5a990cc5920660608c2b4546284793eadb4c) release notes — _@ishaan-jaff_
- [`ec4be19`](https://github.com/BerriAI/litellm/commit/ec4be19ab06b383f49b34faf86b8c0c4649ca8d8) fix(anthropic): populate output_config when reasoning_effort is used on Claude 4.6 (#22410) — _@giulio-leone_
- [`07def97`](https://github.com/BerriAI/litellm/commit/07def978cfc8afaa565cfb6bd1b883ce404ba1b9) Fix plaintext JWTs leaking in debug logs (#22424) — _@ryan-crabbe_
- [`7a33d51`](https://github.com/BerriAI/litellm/commit/7a33d51edf091e9c797177347953509a72311492) fix: resolve ruff PLR0915 and mypy type checking lint errors (#22359) — _@anencore94_
- [`755ae9e`](https://github.com/BerriAI/litellm/commit/755ae9ed560fb9c3352e0e3646b7725e93696e57) Litellm stability fix v2 (#22452) — _@ishaan-jaff_
- [`b232e2f`](https://github.com/BerriAI/litellm/commit/b232e2f5645767370435f59262d299507f13deff) docs(agents.md): update agents.md — _@Krrish Dholakia_
- [`4e3274c`](https://github.com/BerriAI/litellm/commit/4e3274c6048d61b2ef63673a665e2d513e049e27) Merge pull request #22430 from BerriAI/litellm_ui_memory_leak — _@yuneng-jiang_
- [`647b376`](https://github.com/BerriAI/litellm/commit/647b3765425cce6a6d5028e53fd79aea413af598) fix(test): add spend data polling + graceful skip to Gemini e2e spend tests (#22446) — _@ishaan-jaff_
- [`e375625`](https://github.com/BerriAI/litellm/commit/e3756252a8904cebecdaf0b9a4e1db253bb9ed28) Development environment setup (#22432) — _@ishaan-jaff_
- [`73de1ac`](https://github.com/BerriAI/litellm/commit/73de1acdc7582e9d4292a9055bc6c5859ecd8e39) fix: correct test_no_double_strip_on_second_call assertions — _@tombii_
- [`edc19b4`](https://github.com/BerriAI/litellm/commit/edc19b483063ad0a70ae697c132627b1b482e0d0) [Fix] UI - Virtual Keys: Fix beforeunload listener memory leak in UserDashboard — _@yuneng-jiang_
- [`bc9c28e`](https://github.com/BerriAI/litellm/commit/bc9c28eb8073f4ea718de0bb8017a67ca0835ce1) Merge pull request #22397 from BerriAI/fix/codeql-custom-workflow — _@jquinter_
- [`aa62923`](https://github.com/BerriAI/litellm/commit/aa62923b4af26d4ecaef9fe359972b389d568f51) Merge pull request #22413 from BerriAI/fix/mcp-contextvar-propagation — _@jquinter_
- [`b5f5b42`](https://github.com/BerriAI/litellm/commit/b5f5b4203580e8b5fbebb1a511880ae11673446b) bump: litellm-enterprise 0.1.32 → 0.1.33 + manual publish workflow (#22421) — _@ishaan-jaff_
- [`17f9ccb`](https://github.com/BerriAI/litellm/commit/17f9ccbf16c168ef215d07f8870211e9a6fa6d3d) fix(mypy): fix 3 mypy errors in presidio.py and _health_endpoints.py (#22422) — _@ishaan-jaff_
- [`b54688c`](https://github.com/BerriAI/litellm/commit/b54688c450abfed31378061ad81708b08cbbeb9a) Merge pull request #22423 from BerriAI/ui_build_feb28 — _@yuneng-jiang_
- [`0bfbadd`](https://github.com/BerriAI/litellm/commit/0bfbadd31b32b4ef34f5cddeb3789f5d0e7f88c1) chore: update Next.js build artifacts (2026-02-28 18:44 UTC, node v22.16.0) — _@yuneng-jiang_
- [`fef6fe0`](https://github.com/BerriAI/litellm/commit/fef6fe052ce1c4596937293fa1c32fbedb4057b4) Merge pull request #22416 from BerriAI/litellm_project_opt_in — _@yuneng-jiang_
- [`6a916e7`](https://github.com/BerriAI/litellm/commit/6a916e7f55f5057655c9718f6eb9469fb8a1e98c) Merge pull request #22420 from BerriAI/litellm_fix_flaky_mcp_test — _@yuneng-jiang_
- [`c04be31`](https://github.com/BerriAI/litellm/commit/c04be31610bb0675e57c4520b9e27c6a1a4bbb66) [Infra] Remove stale _experimental/out build artifacts — _@yuneng-jiang_
- [`7c2dc5c`](https://github.com/BerriAI/litellm/commit/7c2dc5ca99093f74e4a9977d9b77e0fe223c2ae6) [Infra] Restore _experimental/out to match branch base — _@yuneng-jiang_
- [`8affa73`](https://github.com/BerriAI/litellm/commit/8affa730ff3d55e160fdf731557cb42fe1f897f2) [Infra] Revert _experimental/out build artifacts from PR — _@yuneng-jiang_
- [`44c3b4b`](https://github.com/BerriAI/litellm/commit/44c3b4bc55596d660924d18d05283df21c11e8e8) [Feature] UI: Add New badges for Projects discoverability — _@yuneng-jiang_
- [`e325db3`](https://github.com/BerriAI/litellm/commit/e325db35a3e96049c6e98d232e41aaeb5cf0a18d) [Fix] Add useUISettings mock to KeyInfoView test — _@yuneng-jiang_
- [`2abe290`](https://github.com/BerriAI/litellm/commit/2abe2901c6a4dbc22e6eb96a0b86bb21c53f21d7) [Feature] UI - Admin Settings: Add opt-in flag for Projects feature — _@yuneng-jiang_
- [`2285dc7`](https://github.com/BerriAI/litellm/commit/2285dc78b945b3e084e5fc3a4578124932f54bfe) [Fix] UI - resolve flaky tests from leaked @tremor/react Tooltip timer — _@yuneng-jiang_
- [`65c5d5a`](https://github.com/BerriAI/litellm/commit/65c5d5a8d3d049430488351ef1a0fef40a25ed2d) bump: version 1.81.16 → 1.82.0 — _@ishaan-jaff_
- [`3ff7059`](https://github.com/BerriAI/litellm/commit/3ff70598ad8dc830ea8401ae18167db8d266b207) fix: bump litellm-proxy-extras to 0.4.50 and fix 3 failing tests (#22417) — _@ishaan-jaff_
- [`3e37f44`](https://github.com/BerriAI/litellm/commit/3e37f447898c1f05ce7a6bb6e8cd9e916852ab99) Merge pull request #22412 from BerriAI/litellm_ui_project_delete — _@yuneng-jiang_
- [`ccf2b7b`](https://github.com/BerriAI/litellm/commit/ccf2b7b74683ac7e23aeb123ca33b60e801fe4df) fix(ci): handle inline table in pyproject.toml for litellm-proxy-extras version check (#22414) — _@ishaan-jaff_
- [`456ad50`](https://github.com/BerriAI/litellm/commit/456ad503d1fcae279a8b8639de55ecabe087729e) fix(mcp): set LITELLM_MASTER_KEY env var in e2e tests to prevent lifespan reset — _@jquinter_
- [`29e3fd5`](https://github.com/BerriAI/litellm/commit/29e3fd5d79c3263eea440b919d9d3c1a13400523) [Release Fix]  (#22411) — _@ishaan-jaff_
- [`926d95c`](https://github.com/BerriAI/litellm/commit/926d95cd191d9574e3eaae310fbb0aa06618f084) [Feature] UI - Projects: Add delete project action to projects table — _@yuneng-jiang_
- [`6e533e7`](https://github.com/BerriAI/litellm/commit/6e533e7406cd67a21348a56a94e8785e80c7798c) Merge pull request #20632 from Harshit28j/litellm_fix_tts_metrics — _@Harshit28j_
- [`13ea00a`](https://github.com/BerriAI/litellm/commit/13ea00acddff72bdaccca4de2b574624b17c0f5f) Merge pull request #22224 from BerriAI/fix/isolate-get-config-from-model-sync — _@jquinter_
- [`ce07532`](https://github.com/BerriAI/litellm/commit/ce0753243b557aed95355660ebb32f9921221e8f) Merge pull request #22193 from BerriAI/test/secret-scan-ci — _@jquinter_
- [`597f88d`](https://github.com/BerriAI/litellm/commit/597f88dade5dbc902bbe94fb9c5683c1348b731e) Merge pull request #22002 from jquinter/fix/flaky-rpm-limit-test — _@jquinter_
- [`62d2bf2`](https://github.com/BerriAI/litellm/commit/62d2bf25e75c4bbafa683bc8423488f9b1f9d641) Merge pull request #22328 from BerriAI/fix/ruff-plr0915-too-many-statements — _@jquinter_
- [`c3bb1cb`](https://github.com/BerriAI/litellm/commit/c3bb1cb10c742e990709da9a506b6a3858fe4e98) Merge pull request #22405 from Chesars/fix/scan-duplicate-issues-env — _@Chesars_
- [`7c4e576`](https://github.com/BerriAI/litellm/commit/7c4e576400c48f9153b80b63e7af57ca209d9d18) fix: add API key validation in OpenRouter image edit config — _@shivaaang_
- [`10a91c5`](https://github.com/BerriAI/litellm/commit/10a91c51997938d4379a4999d84e4e00aa5762e2) fix(ci): remove duplicate env key in scan_duplicate_issues workflow — _@Chesars_
- [`3775ba3`](https://github.com/BerriAI/litellm/commit/3775ba3eaa1f7423a8b338f9c85191c96af42bd5) feat(openrouter): add image edit support for OpenRouter models — _@shivaaang_
- [`7f5c865`](https://github.com/BerriAI/litellm/commit/7f5c8653f0e1bb04cbe331c3b48275bf35bf97c9) Merge pull request #18478 from Chesars/fix/prevent-scheduled-workflow-in-forks — _@Chesars_
- [`99210e9`](https://github.com/BerriAI/litellm/commit/99210e986792737b1aa9c868f2256f0d28ea9d5b) fix req changes — _@Harshit28j_
- [`d7340b5`](https://github.com/BerriAI/litellm/commit/d7340b595beb8ebc75ce6868b2429e8989c611a8) Update .github/workflows/codeql.yml — _@jquinter_
- [`e1d09a1`](https://github.com/BerriAI/litellm/commit/e1d09a17b75bb78e61fb37406c1b39b8b0672525) Merge pull request #22283 from BerriAI/litellm_presidio_stream_v3 — _@Harshit28j_
- [`53f3123`](https://github.com/BerriAI/litellm/commit/53f3123030edffee17e2e028ac408137c1ee0ff6) fix(ci): add custom CodeQL workflow to replace expensive default setup — _@jquinter_
- [`1c9ecd4`](https://github.com/BerriAI/litellm/commit/1c9ecd4ec6a9b085cb2979d9a9c8228b6209067d) Merge pull request #22384 from BerriAI/litellm_aws_edge_case — _@Harshit28j_
- [`1073ba6`](https://github.com/BerriAI/litellm/commit/1073ba6d13507234bb54f33518039d2a4795cc85) fix req changes — _@Harshit28j_
- [`1badece`](https://github.com/BerriAI/litellm/commit/1badececa31d3a7a3312e6417a74053249ee0e91) fix: presidio req change — _@Harshit28j_
- [`8a85a2c`](https://github.com/BerriAI/litellm/commit/8a85a2cf821ac348ead69c05de5eeaa3f3cd3538) Merge branch 'litellm_oss_staging_02_27_2026' of https://github.com/BerriAI/litellm into litellm_oss_staging_02_27_2026 — _@Chesars_
- [`df99be9`](https://github.com/BerriAI/litellm/commit/df99be904c1250acb346fce72aff3ed2c3358b4f) Merge pull request #22034 from BerriAI/feat/duplicate-issues-bot — _@jquinter_
- [`83cab3f`](https://github.com/BerriAI/litellm/commit/83cab3f54a3f68f5bddac633e2184953f4dfbc2a) Rewrite test to exercise actual failure_handler code path — _@Harshit28j_
- [`315b00f`](https://github.com/BerriAI/litellm/commit/315b00fd193a361e581877253c545a127ad5f31c) Fix Langfuse failure path kwargs and add session_id trace tests — _@Harshit28j_
- [`bfdea42`](https://github.com/BerriAI/litellm/commit/bfdea4227a92d6b8a50bc2b242c2995071a9a2d6) Merge pull request #22103 from Harshit28j/litellm_feat_datadog_metrics — _@Harshit28j_
- [`7e9930c`](https://github.com/BerriAI/litellm/commit/7e9930cc3b4dbee6970124eb6122fd351f1593db) Fix Langfuse trace_id mapping for failed logs and prioritize session_id — _@Harshit28j_
- [`09b557f`](https://github.com/BerriAI/litellm/commit/09b557f861af8ba06e7c7f9161513d0d62580e3b) Merge pull request #22385 from BerriAI/litellm_security_release_notes — _@Harshit28j_
- [`b392180`](https://github.com/BerriAI/litellm/commit/b39218059a381d4ba842078e39a4b4aa2cd5a458) fix req change — _@Harshit28j_
- [`24aa8ba`](https://github.com/BerriAI/litellm/commit/24aa8bac09d32d5ca7dd04df9c43b02af35b09bd) fix req changes test case — _@Harshit28j_
- [`539f2ee`](https://github.com/BerriAI/litellm/commit/539f2eeba41a0cdaabe792af8133c596de8b04d7) Update litellm/proxy/management_endpoints/key_management_endpoints.py — _@Harshit28j_
- [`dee2a62`](https://github.com/BerriAI/litellm/commit/dee2a62686e59b340698647bc7c4c637d3f4f163) Add security vulnerability scan report to v1.81.14 release notes — _@Harshit28j_
- [`0b7d8b9`](https://github.com/BerriAI/litellm/commit/0b7d8b9a0d91f75a6cf6e525e312a9cb72e4daee) fix: edge case when key alias empty — _@Harshit28j_
- [`29d1d04`](https://github.com/BerriAI/litellm/commit/29d1d0479f3ef7d897fbd7cb707b0744f727101b) [Feature] Add Gemini 3.1 Flash Image Preview input and output cost details — _@davidvpe_
- [`dcfd25e`](https://github.com/BerriAI/litellm/commit/dcfd25e1f1e5a7707ac54fcc168b64ed0d732493) [Feature] Add Gemini 3.1 Flash Image Preview pricing details — _@davidvpe_
- [`290ecf8`](https://github.com/BerriAI/litellm/commit/290ecf88f833979bac6813c2bd695a025009a435) Merge branch 'main' of https://github.com/BerriAI/litellm — _@Harshit28j_
- [`1576033`](https://github.com/BerriAI/litellm/commit/1576033495710f3bacc068e085353f3a7a2ccf2e) Merge pull request #22299 from BerriAI/litellm_health_check_tokens — _@Harshit28j_
- [`e0168db`](https://github.com/BerriAI/litellm/commit/e0168db68358b07013bc249b25be355001b75591) add docs and formatting — _@Harshit28j_
- [`8abba63`](https://github.com/BerriAI/litellm/commit/8abba63b48b90e688bb60e7db743c92e168fca3a) Merge pull request #22373 from BerriAI/litellm_ui_project_keys — _@yuneng-jiang_
- [`465adce`](https://github.com/BerriAI/litellm/commit/465adce8721249af4ccab094daf307c71ffc955d) feat reaq changes — _@Harshit28j_
- [`b914c98`](https://github.com/BerriAI/litellm/commit/b914c98562cdd56d8788a6a6334b7f835932d276) [Feature] UI - Projects: Add project key table, project dropdown on key create/edit — _@yuneng-jiang_
- [`9dc0856`](https://github.com/BerriAI/litellm/commit/9dc085694c7dcfaedc13df3a873483df226f61dc) feat: jwt mapping vkeyv — _@Harshit28j_
- [`a4b7a93`](https://github.com/BerriAI/litellm/commit/a4b7a93a37c512d16cff82a97010e01b1b6744ae) Merge pull request #22360 from BerriAI/litellm_ui_project_info — _@yuneng-jiang_
- [`50dc7b5`](https://github.com/BerriAI/litellm/commit/50dc7b520cc7ba0211af064598b69a435b9da661) Update ui/litellm-dashboard/src/components/Projects/ProjectModals/CreateProjectModal.tsx — _@yuneng-jiang_
- [`c4b21fa`](https://github.com/BerriAI/litellm/commit/c4b21fab0637d6af43be0b493979a07a7f8fe2f2) Merge pull request #22356 from BerriAI/litellm_key_list_filters — _@yuneng-jiang_
- [`061703a`](https://github.com/BerriAI/litellm/commit/061703abc09f215f7046e4a737f3997b87f90c04) [Feature] UI - Projects: Add Project Details page with Edit modal — _@yuneng-jiang_
- [`6d8b5b7`](https://github.com/BerriAI/litellm/commit/6d8b5b75cea57764c10122469d0c3774153626a3) [Feature] Key list endpoint: Add project_id and access_group_id filters — _@yuneng-jiang_
- [`85590e4`](https://github.com/BerriAI/litellm/commit/85590e4538dbd1e96d6a5ad66f65282259e4d3ab) Merge pull request #22354 from BerriAI/litellm_cost_tracking_vitest — _@yuneng-jiang_
- [`c4a0174`](https://github.com/BerriAI/litellm/commit/c4a0174e0072218b00574053f952ac2c4e33db69) test: add comprehensive Vitest coverage for CostTrackingSettings — _@yuneng-jiang_
- [`9f24537`](https://github.com/BerriAI/litellm/commit/9f2453712ec054b8ad8888d314bb24f6c42316c6) perf: streaming latency improvements — 4 targeted hot-path fixes (#22346) — _@ishaan-jaff_
- [`ee703ce`](https://github.com/BerriAI/litellm/commit/ee703cea99252c0e45b2a74b9f376e2ecda9ea65) fix(jwt): OIDC discovery URLs, roles array handling, dot-notation error hints (#22336) — _@ishaan-jaff_
- [`8ab5428`](https://github.com/BerriAI/litellm/commit/8ab542875c26d7def4c5dda18e9b237e7c37958a) Merge pull request #21107 from BerriAI/fix/bedrock-filter-json-tool-call-scoped — _@jquinter_
- [`eea083f`](https://github.com/BerriAI/litellm/commit/eea083fa4bab12a5cbc8e9f85b4821295791eadd) fix(mcp): default available_on_public_internet to true (#22331) — _@ishaan-jaff_
- [`bffce84`](https://github.com/BerriAI/litellm/commit/bffce842a14ed7bf9995e0410fc1cb66a7aca23a) Remove Apache 2 license from SKILL.md (#22322) — _@rasmi_
- [`9db4ab1`](https://github.com/BerriAI/litellm/commit/9db4ab1188612d2495e7c51c520004d2f11743ab) Merge pull request #22039 from demoray/bcaswell/fix-long-path-filenames — _@jquinter_
- [`bcf9acf`](https://github.com/BerriAI/litellm/commit/bcf9acf5ea8cc7b026f2d3d3b272051fc9bc4ffc) Update litellm/proxy/guardrails/guardrail_hooks/litellm_content_filter/guardrail_benchmarks/test_eval.py — _@demoray_
- [`37ec9f8`](https://github.com/BerriAI/litellm/commit/37ec9f89956b8ea2651b92d102dcf3938357f9b0) fix: shorten guardrail benchmark result filenames for Windows long path support — _@demoray_
- [`fdf4c9d`](https://github.com/BerriAI/litellm/commit/fdf4c9dbdcb91cf7c6aae19f9eab82955c47ac85) fix: use correct class name AmazonConverseConfig in helper method calls — _@jquinter_
- [`b983352`](https://github.com/BerriAI/litellm/commit/b983352d11bd9c88de6765c492abdb1a88a312ed) refactor: extract duplicated JSON unwrapping into helper method — _@jquinter_
- [`fcabf9b`](https://github.com/BerriAI/litellm/commit/fcabf9b602ade7a6986c46b360c2aa67b30fe27e) fix(bedrock): filter internal json_tool_call when mixed with real tools — _@jquinter_
- [`5a28ca9`](https://github.com/BerriAI/litellm/commit/5a28ca985c1869c15d335fb0a98ec7a8d77d50f7) Update .github/workflows/scan_duplicate_issues.yml — _@jquinter_
- [`94b7342`](https://github.com/BerriAI/litellm/commit/94b7342da8806160a89a3755f786d734a1e71901) Update .github/workflows/check_duplicate_issues.yml — _@jquinter_
- [`1ac3c23`](https://github.com/BerriAI/litellm/commit/1ac3c230cb8fc96261a760734d101035d371ad20) Update .github/scripts/close_duplicate_issues.py — _@jquinter_
- [`d49abf8`](https://github.com/BerriAI/litellm/commit/d49abf857715c466713ec0a7484d94a60041a1c8) [Fix] Pass MCP auth headers from request into tool fetch for /v1/responses and chat completions (#22291) — _@shivamrawat1_
- [`2d649f2`](https://github.com/BerriAI/litellm/commit/2d649f239f6ec7d30030209c30af8bdbf8d0b3be) Merge pull request #22026 from ZeroClover/fix/img-extra-headers — _@jquinter_
- [`98bc247`](https://github.com/BerriAI/litellm/commit/98bc2476187bcf9c664f5ee5c021b889fce97f32) Merge pull request #22143 from shivaaang/fix/llm-client-cache-unawaited-coroutine — _@jquinter_
- [`3e60ca3`](https://github.com/BerriAI/litellm/commit/3e60ca368253f388b496f3cddb611d9ab9cffbce) fix: populate user_id and user_info for admin users in /user/info (#22239) — _@milan-berri_
- [`594600d`](https://github.com/BerriAI/litellm/commit/594600dcb528c66fe918c85f3bc53c9f72fa5d31) fix: Add PROXY_ADMIN role to system user for key rotation (#21896) — _@milan-berri_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
