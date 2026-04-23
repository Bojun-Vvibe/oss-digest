# BerriAI/litellm — 2026-03-15

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-14T23:59:59.000Z → 2026-03-15T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day is dominated by an extensive CI/infrastructure overhaul by `yuneng-jiang` — roughly 30 of ~40 commits target test flakiness, isolation, and CircleCI cost/perf, with only a handful of user-facing changes.

**Most notable user-facing change:** PyJWT bumped to ^2.12.0 for security across `pyproject.toml`, `poetry.lock`, and all Dockerfiles (`Dockerfile`, `Dockerfile.database`, `Dockerfile.dev`, `Dockerfile.non_root`) — merged via PR #23678 (commits `c1dadc0`, `d3587b1`, `1f48500`, `548e7eb`). Anyone pinning PyJWT downstream should review.

**Other functional fixes:**
- Multi-header → customer user role mapping landed (PR #23664, commit `dd1ea3d`) — new auth feature for proxy operators.
- `stream_chunk_builder` now merges annotations from *all* streaming chunks instead of only the first (`7ed9be5`, by external contributor `bbarwik`) — fixes silent annotation loss in streamed completions.
- Batch retrieve double-encoding bug fixed by resolving `output_file_id` via DB lookup instead of the managed-files hook (`a75964f`); related fix for DB-cached batch retrieval populating `_hidden_params` (`31e6393`).
- CodSpeed performance benchmarks added (PR #23676).

**CI/infra (bulk of activity):** Hanging tests in `custom_httpx/test_http_handler` fixed via PR #23674 (`b14eade`, `460f620`, `062cd4a`) — removed real network calls and `gc.get_objects()` scans that hung xdist workers. A sweep of flaky tests was stabilized by switching to `mock_response`, fixing global-state leaks (`litellm.callbacks`, `pre/post_call_rules`, `model_fallbacks`), updating deprecated models (`gpt-3.5-turbo-1106`, Together's Llama-3.2-3B → 3.3-70B), and clearing HTTP client caches in `encrypted_content_affinity` tests. CircleCI was significantly retuned: xlarge → medium downsizing on over-provisioned jobs (`27f1d33`, `2e27e32`, `4c4246a`), `-n` worker counts aligned to vCPUs (`65575f3`), `no_output_timeout` cut from 120m to 15m (`eb7222c`), Docker image builds consolidated (`5091375`), `ui_build`/`ui_unit_tests` moved to docker executor with npm caching (~20m → ~5–7m, `95b6821`, `e38ee6a`), and `ui_unit_tests` is now required for PyPI publish (`45ff66a`).

No releases, open PRs, or issues in the window.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`a81a196`](https://github.com/BerriAI/litellm/commit/a81a1968edb8cc909cbcb5f55d28fb9f8babb365) Fix test isolation: clear litellm.callbacks and model_fallbacks between tests — _@yuneng-jiang_
- [`4c4246a`](https://github.com/BerriAI/litellm/commit/4c4246ab4a2c396a9524eb585d1835d94c21686c) Downgrade oversized resource classes to match actual workload — _@yuneng-jiang_
- [`65575f3`](https://github.com/BerriAI/litellm/commit/65575f3992b81b06bd990227ee6d82625208bcf8) Fix pytest -n worker oversubscription to match available CPUs — _@yuneng-jiang_
- [`673f3d5`](https://github.com/BerriAI/litellm/commit/673f3d59de32c68ce9999a1174e7371df9a4a2b5) Increase file deletion retry budget to 50s for batch_processed race — _@yuneng-jiang_
- [`1092c17`](https://github.com/BerriAI/litellm/commit/1092c1746804b4a4141891c373c7b94717aeacad) Fix flaky encrypted_content_affinity tests: mock at handler level — _@yuneng-jiang_
- [`a66b635`](https://github.com/BerriAI/litellm/commit/a66b635a4cc527c596f8068b01223379f0a87e05) Upsize ui_build and ui_unit_tests CI machines for faster feedback — _@yuneng-jiang_
- [`a75964f`](https://github.com/BerriAI/litellm/commit/a75964f040da411cecd81af70e8a28a01c423007) Fix batch retrieve double-encoding: resolve output_file_id via DB lookup instead of hooks — _@yuneng-jiang_
- [`ff869e9`](https://github.com/BerriAI/litellm/commit/ff869e91b0214f5e8e9a934516c00cb024c9eee1) Fix flaky caching tests: use mock_response, add parallelism, remove fail-fast — _@yuneng-jiang_
- [`67e905f`](https://github.com/BerriAI/litellm/commit/67e905f0d0cc2dd9ead3d1bac24918e31e8b096e) Fix flaky encrypted_content_affinity tests: clear HTTP client cache, disable retries — _@yuneng-jiang_
- [`31e6393`](https://github.com/BerriAI/litellm/commit/31e6393458c9a6dcfc9553920e6b9ea8b5b9681e) Fix flaky proxy_e2e_azure_batches_tests: populate _hidden_params for DB-cached batch retrieval — _@yuneng-jiang_
- [`87e3e84`](https://github.com/BerriAI/litellm/commit/87e3e84e6b98fb268b79076fe2cb8ab18614af5c) Set semgrep job to medium resource class explicitly — _@yuneng-jiang_
- [`2e27e32`](https://github.com/BerriAI/litellm/commit/2e27e32d3372c6aaad6505b842b237086512b89d) Downsize remaining xlarge CI jobs to match actual workload — _@yuneng-jiang_
- [`82d3b23`](https://github.com/BerriAI/litellm/commit/82d3b235262270473a86aba8a0bccc593ddf2741) Update deprecated Together AI model in test_completion_together_ai_llama — _@yuneng-jiang_
- [`ed1320e`](https://github.com/BerriAI/litellm/commit/ed1320e6d15e66980f4624072ba156274dd4a6b9) Fix test_completion_sagemaker_messages_api retry flakiness — _@yuneng-jiang_
- [`717d37c`](https://github.com/BerriAI/litellm/commit/717d37cc5b3d9c1f08abd2eb48431e6cfe19d0b5) Fix flaky CI: update deprecated model, filter leaked async task logs — _@yuneng-jiang_
- [`968d7a3`](https://github.com/BerriAI/litellm/commit/968d7a3eca3bbc663bc1b7b69a79a2996af81e96) Fix test isolation: save/restore pre_call_rules and post_call_rules — _@yuneng-jiang_
- [`dd1ea3d`](https://github.com/BerriAI/litellm/commit/dd1ea3d39ef8d2584a31454e35e6130e7a7d4b79) Support multiple headers mapped to the customer user role (#23664) — _@brtydse100_
- [`7ed9be5`](https://github.com/BerriAI/litellm/commit/7ed9be55b1a1adc357c3894c3a833487ecb9ef9f) fix: merge annotations from all streaming chunks in stream_chunk_builder — _@bbarwik_
- [`568726b`](https://github.com/BerriAI/litellm/commit/568726b06eb92e06e02421906271b5c7a4213388) Fix test_aaarouter_dynamic_cooldown_message_retry_time isolation issue — _@yuneng-jiang_
- [`023654d`](https://github.com/BerriAI/litellm/commit/023654d9ad521d49c2c68627d326fdc911618a4d) Fix flaky CI tests: mock timeout race, update deprecated model, fix callback leak — _@yuneng-jiang_
- [`bcd887e`](https://github.com/BerriAI/litellm/commit/bcd887ea612c96c169f70253c3e3a3d608e8ddff) Fix test_async_fallbacks_streaming to use mock_response instead of real API — _@yuneng-jiang_
- [`f73ff72`](https://github.com/BerriAI/litellm/commit/f73ff72ab5017341d33e55fcb0989eefafb93b7f) Fix router test isolation: update deprecated model, remove shared Redis state — _@yuneng-jiang_
- [`f838bea`](https://github.com/BerriAI/litellm/commit/f838bea85b3b444294621ce37588d93c37191a65) Optimize CI: parallelize router and guardrails test jobs, fix test isolation — _@yuneng-jiang_
- [`5091375`](https://github.com/BerriAI/litellm/commit/509137580cb4e6c9e217492e91dd09efec43c69f) Consolidate duplicate Docker image builds to reuse pre-built image — _@yuneng-jiang_
- [`cc80771`](https://github.com/BerriAI/litellm/commit/cc80771835b2955b3034066232b29b4971c104f8) Cache Next.js build cache for ui_build job — _@yuneng-jiang_
- [`6147682`](https://github.com/BerriAI/litellm/commit/614768257ba429a5add6b0bef0d9e0f60bd3b933) Switch test_bad_database_url from Dockerfile.non_root to Dockerfile.database — _@yuneng-jiang_
- [`e38ee6a`](https://github.com/BerriAI/litellm/commit/e38ee6a531ee9095b406dd0bffd0e4f3021aa4bf) Optimize ui_build job and gate ui_unit_tests behind it — _@yuneng-jiang_
- [`45ff66a`](https://github.com/BerriAI/litellm/commit/45ff66ab906a2d4bc33fa855901d9323af95980e) Add ui_unit_tests as requirement for publish_to_pypi — _@yuneng-jiang_
- [`548e7eb`](https://github.com/BerriAI/litellm/commit/548e7ebd602b286f24d6cdb4abbf9f604d340112) Merge pull request #23678 from BerriAI/litellm_security_bump_mar14 — _@yuneng-jiang_
- [`95b6821`](https://github.com/BerriAI/litellm/commit/95b6821436ef0b339ad0c737317bb52315531cc1) Speed up ui_unit_tests CI job (~20min -> ~5-7min) — _@yuneng-jiang_
- [`d3587b1`](https://github.com/BerriAI/litellm/commit/d3587b1d8eb98b43faf48da837bf1e76bcf94993) fix: bump PyJWT to 2.12.0 in all Dockerfiles and tar to 7.5.11 — _@yuneng-jiang_
- [`1f48500`](https://github.com/BerriAI/litellm/commit/1f485007fb0c49fd318c43ce861dec48aa193585) fix: update PyJWT pin in Dockerfile.non_root to 2.12.0 — _@yuneng-jiang_
- [`eb7222c`](https://github.com/BerriAI/litellm/commit/eb7222c7cbdfd3375e7c0657c17a930f8b0c139c) [Infra] Reduce CI no_output_timeout and tighten Playwright timeouts — _@yuneng-jiang_
- [`188a864`](https://github.com/BerriAI/litellm/commit/188a864a7873b4609238f69d035c8014ee39d1cc) updating poetry lock — _@yuneng-jiang_
- [`c1dadc0`](https://github.com/BerriAI/litellm/commit/c1dadc0c807c5281aa55a416a689953037318999) bumping pyJWT for security — _@yuneng-jiang_
- [`b988a8d`](https://github.com/BerriAI/litellm/commit/b988a8df91e085e5170fa8686278c9169dd8978a) Merge pull request #23654 from BerriAI/litellm_internal_dev_03_14_2026 — _@yuneng-jiang_
- [`be20a8a`](https://github.com/BerriAI/litellm/commit/be20a8a93dd429bcc5d40666174d3dc616d72dd5) Add CodSpeed performance benchmarks (#23676) — _@codspeed-hq[bot]_
- [`82fc819`](https://github.com/BerriAI/litellm/commit/82fc819abfbb96573fb311baeab09537a1abd471) Merge remote-tracking branch 'origin' into litellm_internal_dev_03_14_2026 — _@yuneng-jiang_
- [`d907a81`](https://github.com/BerriAI/litellm/commit/d907a8127038ad3c1306691940244ae9ed41ac0d) Merge pull request #23674 from BerriAI/litellm_fix_hanging_httpx_tests — _@yuneng-jiang_
- [`460f620`](https://github.com/BerriAI/litellm/commit/460f6208c5d9153b4c18e766096a72897472b24d) Fix __main__ exit bug, close litellm_async_client, restore global state — _@yuneng-jiang_
- [`062cd4a`](https://github.com/BerriAI/litellm/commit/062cd4a2a1c7aa246b7d4c56fea29f5dc622fb22) Remove gc.get_objects() from test_gemini_session_leak.py — _@yuneng-jiang_
- [`b14eade`](https://github.com/BerriAI/litellm/commit/b14eadef866c5ca45caf33f0dbd7d6b169348444) Fix hanging CI tests in test_http_handler.py — _@yuneng-jiang_
- [`27f1d33`](https://github.com/BerriAI/litellm/commit/27f1d33e05e199958dff057e0eb14dba9ceb6b4f) Downgrade resource_class on over-provisioned CI jobs — _@yuneng-jiang_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
