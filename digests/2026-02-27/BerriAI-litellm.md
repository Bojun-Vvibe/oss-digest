# BerriAI/litellm — 2026-02-27

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-02-26T23:59:59.000Z → 2026-02-27T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A very heavy merge day on `main` — no formal releases, issues, or new open PRs in the window, but ~90 commits landed, dominated by a large batch of OpenRouter/OpenAI fixes from @Chesars and new UI/access-control features from the Berri team.

**Headline: new OpenAI models and a Projects UI.** `gpt-realtime-1.5` (#22304) and `gpt-audio-1.5` (#22303) were added to the model cost map with corrected endpoint scoping (realtime-only vs chat-completions-only, see commits c7ab631/da73e54/1ca4dd8). Vertex `gemini-3.1-flash-image-preview` pricing also landed (#22223), as did OpenRouter `claude-opus-4.6` (commit c47d219). On the proxy UI, a new **Projects page** under ACCESS CONTROL was merged (#22315), with a follow-up fix to include `created_at`/`updated_at` in `/project/list` (#22323), plus tags-in-projects (#22216) and a bidirectional team/key sync for access groups (#22253).

**OpenRouter / OpenAI correctness fixes worth reading:**
- Pattern-based fix for native OpenRouter model double-stripping (#20516, commit d292da2) and a related `register_model` index-error fix for openrouter names without `/` (#19792).
- Streaming fixes: provider-reported usage when `stream_options` absent (#21592), `output_index` for parallel tool-call streaming (#21337), and ChatGPT tool_calls streaming indexes (#21498).
- GPT-5 supported-params audit (#21576) and gpt-5-search params (#21574).

**Other notable fixes:**
- `/v1/messages/count_tokens` was dropping `system` and `tools` — now forwarded (#22301).
- `image_edit` now passes `model_info`/`metadata` so custom pricing works (#22307); `image_generation` now forwards `extra_headers` (#22300, fixes #22285).
- MCP: strip stale `mcp-session-id` to prevent 400s in multi-worker Uvicorn deployments (#21417, fixes #20992).
- Helicone gains Gemini/Vertex support (#19288); Moonshot preserves `image_url` blocks (#21595); Vertex Gemini passes through native `imageConfig` (#21585); Azure Document Intelligence resolves `api_base` from env (#21581).
- Infra: LLMClientCache regression tests for httpx eviction safety (#22306, #22313); Presidio guardrail memory-leak fix (commit 5d5409e); spendlog deletion cron optimization (#21930); Claude Code Plugin schema fix (#22271).

Start with the Projects UI merge (#22315) and the OpenRouter double-strip fix (#20516) if triaging.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`64c85db`](https://github.com/BerriAI/litellm/commit/64c85dbc9fd3673b76693bbedf604ed6ff25d5d4) Fix/claude code plugin schema (#22271) — _@rahulrd25_
- [`03720ec`](https://github.com/BerriAI/litellm/commit/03720ec08c6be63acba7038c340cd913d6ff62c9) Merge pull request #22315 from BerriAI/litellm_projects_page — _@yuneng-jiang_
- [`7cffd77`](https://github.com/BerriAI/litellm/commit/7cffd77d68403ada5be39cbba8b484d698788fee) Merge pull request #22323 from BerriAI/litellm_project_list_timestamps — _@yuneng-jiang_
- [`8bb6457`](https://github.com/BerriAI/litellm/commit/8bb64574712e907186d0a76d9f26f17ffee7567f) [Fix] Include created_at and updated_at in /project/list response — _@yuneng-jiang_
- [`f1c563d`](https://github.com/BerriAI/litellm/commit/f1c563d2b2550d553f7adc368d5097dbbf2f92a7) org-exclusive-add-member — _@atapia27_
- [`d292da2`](https://github.com/BerriAI/litellm/commit/d292da2c142b617c1625cccf14df0f919c904c66) fix(openrouter): pattern-based fix for native OpenRouter model double-stripping — _@tombii_
- [`7d084df`](https://github.com/BerriAI/litellm/commit/7d084dfb9d034a04a267678e2bb7a1382fba1898) Merge pull request #20525 from Chesars/docs/opus-4-6-openrouter-and-1m-context — _@Chesars_
- [`5628ba0`](https://github.com/BerriAI/litellm/commit/5628ba0831d3c0f0d4c425f2a286a1debb36ae61) docs: remove openrouter/anthropic/claude-opus-4.6 from backup JSON — _@Chesars_
- [`c47d219`](https://github.com/BerriAI/litellm/commit/c47d21980626eded69208a75ec9a36af3c25f464) docs: add openrouter/anthropic/claude-opus-4.6 to main model cost map — _@Chesars_
- [`ab8ffb0`](https://github.com/BerriAI/litellm/commit/ab8ffb05735878468ceb04a755144dc3103fa2f1) Merge upstream/main into fix-model-management-ui — _@Chesars_
- [`6430173`](https://github.com/BerriAI/litellm/commit/6430173bded0f2b1e07eba40d3fb9f5dc1b3a5f6) Merge pull request #20516 from Chesars/fix/openrouter-native-model-double-strip — _@Chesars_
- [`e05865f`](https://github.com/BerriAI/litellm/commit/e05865fc1f4cb767b5e68efdcc8b22cfccec955b) Merge pull request #20520 from Chesars/feat/add-openrouter-native-models — _@Chesars_
- [`587977e`](https://github.com/BerriAI/litellm/commit/587977e19a5b55d89261e0e582fe670b683d401a) Merge pull request #19792 from Chesars/fix/openrouter-register-model-index-error — _@Chesars_
- [`7749677`](https://github.com/BerriAI/litellm/commit/77496776c15aa29dbca670288fd581f8cbe17b95) fix(register_model): align membership check with stored value for openrouter models — _@Chesars_
- [`b5cd282`](https://github.com/BerriAI/litellm/commit/b5cd2820b14753bb89d1e518f02b656382a2faf5) Merge upstream/main into feat/add-openrouter-native-models — _@Chesars_
- [`18bc0d4`](https://github.com/BerriAI/litellm/commit/18bc0d4ec94f04bc3b284003f43a90f6d15a39e4) reusable-credentials — _@atapia27_
- [`1e68b17`](https://github.com/BerriAI/litellm/commit/1e68b17a14a859340849c299b4f6379dc1198adb) Merge pull request #19288 from Chesars/fix/helicone-gemini-support — _@Chesars_
- [`2613277`](https://github.com/BerriAI/litellm/commit/2613277ede94529de7b2542f579fe02486cd48e8) [Feature] UI - Projects: Add Projects page with list and create flows — _@yuneng-jiang_
- [`47a7645`](https://github.com/BerriAI/litellm/commit/47a76455840e57a50a4bb1b1f4205e5389f2f166) Merge pull request #22301 from Chesars/fix/count-tokens-include-system-and-tools — _@Chesars_
- [`c5ddbb9`](https://github.com/BerriAI/litellm/commit/c5ddbb9660bf8282b1446eedcf6e0c1e2d545b0f) Merge pull request #19786 from Chesars/fix/python310-any-subclass-error — _@Chesars_
- [`88c465b`](https://github.com/BerriAI/litellm/commit/88c465b5ef79c039efb5accd08d0f574eba2b771) Merge pull request #20102 from Chesars/xai-deprecation-dates — _@Chesars_
- [`d9cfae9`](https://github.com/BerriAI/litellm/commit/d9cfae9092ba36d22adeaa144bbcf7676e58bb54) Merge pull request #22313 from BerriAI/tests/add_llmclientcache_regression_tests — _@ryan-crabbe_
- [`dce597b`](https://github.com/BerriAI/litellm/commit/dce597b806ea029d8a15390c2dde09fa83a463da) Close httpx clients after assertions to prevent resource leaks — _@ryan-crabbe_
- [`8f02d2d`](https://github.com/BerriAI/litellm/commit/8f02d2d840008b5a93ed866ed59838ba9ac7a1ea) Merge pull request #21337 from Chesars/fix/streaming-parallel-tool-call-index — _@Chesars_
- [`fc7bc91`](https://github.com/BerriAI/litellm/commit/fc7bc9147faefb3f8360f0ae53226743c111e7be) Merge pull request #21629 from Chesars/fix/pydantic-serialization-warnings — _@Chesars_
- [`1552775`](https://github.com/BerriAI/litellm/commit/155277516629b30da13ec76655502a57a571a945) Merge pull request #21595 from Chesars/fix/moonshot-preserve-image-url-content — _@Chesars_
- [`0b7e9a1`](https://github.com/BerriAI/litellm/commit/0b7e9a19719118db15226489bda940671ac18441) Add e2e tests: httpx clients survive LLMClientCache eviction — _@ryan-crabbe_
- [`6490ad1`](https://github.com/BerriAI/litellm/commit/6490ad1d484d848ede12e6f390922893ed4d2466) Revert "Add LLMClientCache regression tests for httpx client eviction safety" — _@ryan-crabbe_
- [`bb8e6b1`](https://github.com/BerriAI/litellm/commit/bb8e6b14263e4f89f20cffa9fef6770966b4190e) Merge pull request #21592 from Chesars/fix/openrouter-stream-usage-no-stream-options — _@Chesars_
- [`acf2fd9`](https://github.com/BerriAI/litellm/commit/acf2fd9828d1bd29c81fcfe7806c0aad5c990547) Merge branch 'main' into fix/openrouter-stream-usage-no-stream-options — _@Chesars_
- [`955bf90`](https://github.com/BerriAI/litellm/commit/955bf9032102a92cf6d80a0da3bed4f51b103f42) Merge pull request #21585 from Chesars/fix/vertex-gemini-image-config-params — _@Chesars_
- [`1943e02`](https://github.com/BerriAI/litellm/commit/1943e02cc7596864fa530e4c9cf7ae9b3045e330) Merge pull request #21582 from Chesars/fix/publicai-apertus-function-calling — _@Chesars_
- [`f64790c`](https://github.com/BerriAI/litellm/commit/f64790c59ad3dd11c2fc5398538bf9dd2b212087) Merge pull request #21581 from Chesars/fix/azure-doc-intelligence-api-base-env — _@Chesars_
- [`c4b3f37`](https://github.com/BerriAI/litellm/commit/c4b3f37a02de4d0802df664b7063417d4147bf21) Merge pull request #21574 from Chesars/fix/gpt5-search-supported-params — _@Chesars_
- [`6a9ea86`](https://github.com/BerriAI/litellm/commit/6a9ea863b9b0f754b96eddf2c037b66be5f04d5d) Merge branch 'litellm_oss_staging_02_27_2026' into fix/gpt5-search-supported-params — _@Chesars_
- [`493f2e9`](https://github.com/BerriAI/litellm/commit/493f2e918874c5eb0aa0f8b774d4ebc8135dec0f) Merge pull request #21576 from Chesars/fix/gpt5-supported-params-audit — _@Chesars_
- [`761ae7e`](https://github.com/BerriAI/litellm/commit/761ae7e896970be60b5539c8809f9a545918da68) Merge pull request #21498 from Chesars/fix/chatgpt-streaming-tool-call-indices — _@Chesars_
- [`7346551`](https://github.com/BerriAI/litellm/commit/734655137e0214f26919c8fbd4c562f4b89fd864) Merge pull request #22307 from Chesars/fix/22244-image-edit-custom-pricing — _@Chesars_
- [`ea5d551`](https://github.com/BerriAI/litellm/commit/ea5d551525f49b25dd0cd02b3f88ac1e5816dabb) Merge pull request #22304 from Chesars/feat/add-gpt-realtime-1.5-model — _@Chesars_
- [`d8fa43a`](https://github.com/BerriAI/litellm/commit/d8fa43a0ccf00cb2507b81125c6dd36828cf3c94) Merge pull request #22303 from Chesars/feat/add-gpt-audio-1.5-model — _@Chesars_
- [`72980f4`](https://github.com/BerriAI/litellm/commit/72980f4dede0001a0a9010c32fc3aba76352b4ac) Merge pull request #22300 from Chesars/fix/image-generation-extra-headers-22285 — _@Chesars_
- [`a08e519`](https://github.com/BerriAI/litellm/commit/a08e5195e50bba0985865c3259715d250cd786de) fix: put image_edit_request_params spread first to avoid overwriting model_info/metadata — _@Chesars_
- [`727adb0`](https://github.com/BerriAI/litellm/commit/727adb0117ec88d78a825aacca5bc18a1af9b2d6) fix(images): pass model_info and metadata in image_edit for custom pricing — _@Chesars_
- [`dc97e2f`](https://github.com/BerriAI/litellm/commit/dc97e2f714c515c53bebbf484f881039d3011521) Merge pull request #22306 from BerriAI/tests/add_llmclientcache_regression_tests — _@ryan-crabbe_
- [`98e944c`](https://github.com/BerriAI/litellm/commit/98e944c0cf7c70619d21dc1e7bdbf15344c7770c) Merge pull request #22253 from BerriAI/litellm_access_group_sync — _@yuneng-jiang_
- [`ad9c70e`](https://github.com/BerriAI/litellm/commit/ad9c70ec5d14e8947a33d796b9c0b85ae32b1b16) Add LLMClientCache regression tests for httpx client eviction safety — _@ryan-crabbe_
- [`1ca4dd8`](https://github.com/BerriAI/litellm/commit/1ca4dd8542bfcd3fc2ec691b6125d78975c546e2) fix: gpt-audio-1.5 only supports /v1/chat/completions endpoint — _@Chesars_
- [`da73e54`](https://github.com/BerriAI/litellm/commit/da73e54b1bd9e8c8974e912500b989ba080f1c02) fix: gpt-realtime-1.5 only supports /v1/realtime endpoint — _@Chesars_
- [`c7ab631`](https://github.com/BerriAI/litellm/commit/c7ab631bb045caebc588b94a890305612d47146e) fix(audio): detect gpt-realtime models as audio-capable for Chat Completions — _@Chesars_
- [`1f88754`](https://github.com/BerriAI/litellm/commit/1f887547f6652d7bc5f87fa44f8563131b853124) feat(models): add gpt-realtime-1.5 to model cost map — _@Chesars_
- [`29bb73f`](https://github.com/BerriAI/litellm/commit/29bb73ffcace33e65f39429493a10b1ecb76c909) fix(mcp): strip stale mcp-session-id header to prevent 400 in multi-worker deployments (#20992) (#21417) — _@gavksingh_
- [`1144d05`](https://github.com/BerriAI/litellm/commit/1144d05cbab94c473964ab8be575015f767cd073) feat(models): add gpt-audio-1.5 to model cost map — _@Chesars_
- [`d13508c`](https://github.com/BerriAI/litellm/commit/d13508c1c56074a894ffd365b615037353c92d2b) Enable local file support for OCR (#22133) — _@noahnistler_
- [`c4458c0`](https://github.com/BerriAI/litellm/commit/c4458c09fe4b423eec26ce9b5c3bb0b4abe6d821) fix(count_tokens): include system and tools in token counting API requests — _@Chesars_
- [`dc4f713`](https://github.com/BerriAI/litellm/commit/dc4f713c6d6c48fd730514073516244c7eb6e3eb) fix(images): forward extra_headers on OpenAI code path in image_generation() — _@Chesars_
- [`2553698`](https://github.com/BerriAI/litellm/commit/2553698da530c624983ff00096a5841cb84ba098) feat: health check max tokens — _@Harshit28j_
- [`adb9d94`](https://github.com/BerriAI/litellm/commit/adb9d94833cfc38d615e92ca12cef58a5897817a) Merge pull request #22293 from BerriAI/litellm_27_02_lock2 — _@Sameerlite_
- [`3bec6f5`](https://github.com/BerriAI/litellm/commit/3bec6f5a9a349a2b55273511e93c83f4247dd947) Fix: poetry lock — _@Sameerlite_
- [`ec8aaa9`](https://github.com/BerriAI/litellm/commit/ec8aaa9d2f1a48edab7a31319aa5f1f45940537a) Merge pull request #22155 from BerriAI/litellm_fix_image — _@Sameerlite_
- [`63c9b3a`](https://github.com/BerriAI/litellm/commit/63c9b3a1374b35b70d8fa5b7ca2fce4b3c469468) Merge pull request #22087 from BerriAI/litellm_fix_anthropic_responses — _@Sameerlite_
- [`547e844`](https://github.com/BerriAI/litellm/commit/547e84418e84009b49007a3ec39fe1b98bbc3c3b) Merge pull request #22258 from BerriAI/litellm_fix_free_models — _@Sameerlite_
- [`e583489`](https://github.com/BerriAI/litellm/commit/e583489abe31e3469cec88496fd6d32f57229477) Merge pull request #22260 from BerriAI/litellm_Fix_tool_pass — _@Sameerlite_
- [`f297036`](https://github.com/BerriAI/litellm/commit/f2970364017000faede14030e941794cf2d37bde) Merge pull request #22267 from BerriAI/litellm_fixParallel_tool_cal — _@Sameerlite_
- [`e575b80`](https://github.com/BerriAI/litellm/commit/e575b80f012ec8ada28e7c76a525d864cf59b3a9) Merge pull request #21930 from Harshit28j/litellm_fix_index_query_call — _@Harshit28j_
- [`25fa9af`](https://github.com/BerriAI/litellm/commit/25fa9af272757c878a20a36a898810973d5b70ea) Merge branch 'main' into litellm_fix_tts_metrics — _@Harshit28j_
- [`1c0d072`](https://github.com/BerriAI/litellm/commit/1c0d07291270b231a69bc7dc35e75816b48a1698) Update litellm/proxy/proxy_server.py — _@Harshit28j_
- [`39e0fa9`](https://github.com/BerriAI/litellm/commit/39e0fa9ea93a316c26d0efff6147bf44f307f74c) Merge pull request #22223 from emerzon/feat/vertex-gemini-3-1-flash-image-preview-pricing — _@Sameerlite_
- [`3210da1`](https://github.com/BerriAI/litellm/commit/3210da1e2a0bfcfabb6384766d5835875670a7a2) fix: req changes — _@Harshit28j_
- [`1b632ed`](https://github.com/BerriAI/litellm/commit/1b632ed473852c0a3f028ec7fe62654bfcacd675) chore: remove debug logs from presidio guardrail — _@Harshit28j_
- [`5d5409e`](https://github.com/BerriAI/litellm/commit/5d5409e77aa899887a4fc9c010100de4a61f4b56) fix presidio memory leak — _@Harshit28j_
- [`b6a53fb`](https://github.com/BerriAI/litellm/commit/b6a53fb174f832c1dc0690a1350d77e158f5e793) Update tests/test_litellm/integrations/datadog/test_datadog_metrics.py — _@Harshit28j_
- [`04fda9e`](https://github.com/BerriAI/litellm/commit/04fda9ec4ac9e28b6b73d0a3ee82a51cb6aaf98f) Update tests/test_litellm/integrations/datadog/test_datadog_metrics.py — _@Harshit28j_
- [`44dd139`](https://github.com/BerriAI/litellm/commit/44dd13994157d4ce479f68e7fa3a4084e202aabb) Update tests/test_litellm/integrations/datadog/test_datadog_metrics.py — _@Harshit28j_
- [`8dc8e82`](https://github.com/BerriAI/litellm/commit/8dc8e826ba6d0dd97bf5c170be5d2d367faaab18) Update tests/test_litellm/integrations/datadog/test_datadog_metrics.py — _@Harshit28j_
- [`c58aea4`](https://github.com/BerriAI/litellm/commit/c58aea4888465f5a7815288a0ed2aaada0cb4f9c) chore: regenerate poetry.lock to match pyproject.toml (#1) — _@github-actions[bot]_
- [`9d3e97a`](https://github.com/BerriAI/litellm/commit/9d3e97a2d8d33849ed6fead42a1e689e1f096f3f) Update litellm/integrations/datadog/datadog_metrics.py — _@Harshit28j_
- [`9e4cf0e`](https://github.com/BerriAI/litellm/commit/9e4cf0e4df174004b9f872fca9f3ac12157c3c4d) Update tests/test_litellm/integrations/datadog/test_datadog_metrics.py — _@Harshit28j_
- [`d8b134d`](https://github.com/BerriAI/litellm/commit/d8b134d78110e4491a8e74deb0cc6dd45bcaf18d) Merge pull request #22216 from BerriAI/litellm_project_tags_handle — _@Harshit28j_
- [`9b7b987`](https://github.com/BerriAI/litellm/commit/9b7b987b35902f4e9a26a1d6c57688f4504de47a) fix: req changes — _@Harshit28j_
- [`72d7f64`](https://github.com/BerriAI/litellm/commit/72d7f64345a40be62b4f0aaa6e1f49b2cbd0f48c) fix: relevant comment req changes — _@Harshit28j_
- [`a9d0e2c`](https://github.com/BerriAI/litellm/commit/a9d0e2cf91663a5bcc7ddfffaf8b4683b3ee5c31) fix: req changes — _@Harshit28j_
- [`2fa9b81`](https://github.com/BerriAI/litellm/commit/2fa9b81e2fb5aae7ad8dc74663b6b5b3de6696c0) Add docs for opt out variable — _@Sameerlite_
- [`99c62ca`](https://github.com/BerriAI/litellm/commit/99c62ca40ea82ab31d61a251410d1a0367ae7aff) Add opt out varible for v1/messages to responses — _@Sameerlite_
- [`33e6b9c`](https://github.com/BerriAI/litellm/commit/33e6b9c67d2e7bca97417069bba02fe01d7eb4d5) Merge branch 'main' into litellm_fixParallel_tool_cal — _@Sameerlite_
- [`d0445e1`](https://github.com/BerriAI/litellm/commit/d0445e1e33590963018f0be4b644c4f4905fae0a) Fix converse handling for parallel_tool_calls — _@Sameerlite_
- [`3369cd9`](https://github.com/BerriAI/litellm/commit/3369cd9d5d2136bb3cded971e38bfe36bad3026a) Merge pull request #22265 from BerriAI/revert-21659-litellm_fix_converse_disable_tool — _@Sameerlite_
- [`8565c70`](https://github.com/BerriAI/litellm/commit/8565c70e539dd307918a430926330c0d285cb19b) Revert "Fix mapping of parallel_tool_calls for bedrock converse" — _@Sameerlite_
- [`596437b`](https://github.com/BerriAI/litellm/commit/596437b3b901db2f2b01e8a134d308fbaf46b4c4) Add Regression tests for image_url blocks in assistant message content. — _@Sameerlite_
- [`6b9ec42`](https://github.com/BerriAI/litellm/commit/6b9ec4247f51faf42da893e1cc7fe952d2cdface) Preserve forwarding server side called tools — _@Sameerlite_
- [`aaf0570`](https://github.com/BerriAI/litellm/commit/aaf0570f225201f82fe7236355aae70c6d59bcf2) fix: normalize null to [] for all Optional[List[str]] fields in update_data — _@yuneng-jiang_
- [`cde23e9`](https://github.com/BerriAI/litellm/commit/cde23e9b6eaea89e43f07ef4b7393cd1a424e93b) fix: normalize null list fields to [] in update_data before DB write — _@yuneng-jiang_
- [`a732c3f`](https://github.com/BerriAI/litellm/commit/a732c3f177ba6f9432610ffb7bd85f8574e94b00) Merge pull request #22248 from BerriAI/litellm_public_endpoints — _@yuneng-jiang_
- [`2144e79`](https://github.com/BerriAI/litellm/commit/2144e79bada00324025b0bd2f5083bd6fd644c10) fix: guard against null assigned_*_ids in update_access_group delta computation — _@yuneng-jiang_
- [`06c90ec`](https://github.com/BerriAI/litellm/commit/06c90ecf62cb8ecd35b8995aef7926fe209d772f) Update litellm/proxy/public_endpoints/public_endpoints.py — _@yuneng-jiang_
- [`577f703`](https://github.com/BerriAI/litellm/commit/577f7037698450d393b115c715d785f8e7ebbcb4) Register custom pricing in litellm.model_cost — _@Sameerlite_
- [`57c5efc`](https://github.com/BerriAI/litellm/commit/57c5efc785c2a222f33ac2669c370492f25b5728) refactor: initialize delta vars before try block and avoid redundant find_unique on delete — _@yuneng-jiang_
- [`d9af321`](https://github.com/BerriAI/litellm/commit/d9af3216100fec406f4f8a2bd3d3c5a10bb40938) Fix free models working from UI — _@Sameerlite_
- [`7e2f5b7`](https://github.com/BerriAI/litellm/commit/7e2f5b7c5b4dac3d0fe1690ecd20d6d49391c986) Merge pull request #22255 from BerriAI/litellm_e2e_fix_feb26 — _@yuneng-jiang_
- [`1e82ec6`](https://github.com/BerriAI/litellm/commit/1e82ec644828e28df67576aea5368268b2eb9255) adding build — _@yuneng-jiang_
- [`ee7b737`](https://github.com/BerriAI/litellm/commit/ee7b73764cd7fe023087fa2500584f966ff019b7) bump: version 0.4.48 → 0.4.49 — _@yuneng-jiang_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
