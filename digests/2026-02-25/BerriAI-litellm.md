# BerriAI/litellm — 2026-02-25

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-02-24T23:59:59.000Z → 2026-02-25T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Headline: a busy day on `main` shipped a new **Realtime API stack with spend-log storage, playground UI, tool logging and guardrails** ([#22105](https://github.com/BerriAI/litellm/commit/adba088)) and a major **Agents push** — virtual keys can now be assigned to agents ([#22045](https://github.com/BerriAI/litellm/commit/60bcb26)), agents can be scoped to specific tools with a per-session `max_iterations` cap ([#22064](https://github.com/BerriAI/litellm/commit/12c4876)), and a new **tool policies guardrail** auto-discovers tools and enforces allow/deny rules ([#22041](https://github.com/BerriAI/litellm/commit/6ee50ff)). Version bumped 0.4.47 → 0.4.48.

Performance & spend-log work is the other big theme:
- Proxy DB writes batched: 11 `create_task()` calls collapsed into 1 in `update_database()` ([#22028](https://github.com/BerriAI/litellm/commit/b9dd36c)), plus a Redis pipeline for spend updates ([#22044](https://github.com/BerriAI/litellm/commit/9857643)).
- New `request_duration_ms` column on `LiteLLM_SpendLogs` with backfill via COALESCE ([#22066](https://github.com/BerriAI/litellm/commit/243a207)), wired into the UI Logs view as a sortable column.
- Failure spend logs now enriched with key alias / user / team metadata, including the auth-error path ([#22049](https://github.com/BerriAI/litellm/commit/ec7dc44)).

Security/correctness fixes worth noting: an **unauthenticated RCE + sandbox escape in the Custom Code Guardrail** was patched ([#22095](https://github.com/BerriAI/litellm/commit/fbffa9a)); a hardcoded base64 secret flagged by GitGuardian was scrubbed ([#22125](https://github.com/BerriAI/litellm/commit/54e4af8)); Presidio guardrail no longer crashes on non-JSON responses ([#22084](https://github.com/BerriAI/litellm/commit/d2aeb3e)); vLLM `NoneType` mapping bug fixed ([#22080](https://github.com/BerriAI/litellm/commit/ebe35aa)); Bedrock batches health check fixed ([#22081](https://github.com/BerriAI/litellm/commit/0516577)).

Provider/feature additions: forward provider auth headers ([#22070](https://github.com/BerriAI/litellm/commit/ec3ae25)), OpenAI `prompt_cache_key`/`prompt_cache_retention` plumbed through ([#20397](https://github.com/BerriAI/litellm/commit/fa87291)), OpenAI SDK bumped ([#22094](https://github.com/BerriAI/litellm/commit/47c24ef)), new Azure models added (0d94ea6), and a new code-execution eval dataset ([#22065](https://github.com/BerriAI/litellm/commit/00ab4d2)).

UI shipped user filtering on the Usage page ([#22059](https://github.com/BerriAI/litellm/commit/5662228)), an "Ask AI" chat for usage patterns ([#22042](https://github.com/BerriAI/litellm/commit/360643e)), and a reusable `KeyInfoHeader` ([#22047](https://github.com/BerriAI/litellm/commit/9837a1b)). New docs cover credential usage tracking ([#22112](https://github.com/BerriAI/litellm/commit/edd00c0)) and request tags ([#22129](https://github.com/BerriAI/litellm/commit/cc85fe5)).

**Read first:** the Realtime PR (#22105), the tool-policies guardrail (#22041), and the RCE fix (#22095).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`adba088`](https://github.com/BerriAI/litellm/commit/adba088df2a2f3574e50968211f211c67692fed4) Realtime API: spend log storage, playground UI, tools logging, and guardrail support (#22105) — _@ishaan-jaff_
- [`cc85fe5`](https://github.com/BerriAI/litellm/commit/cc85fe5921106d485d2f697dd9cfecddb6aa1ebf) Proxy request tags docs (#22129) — _@ishaan-jaff_
- [`54e4af8`](https://github.com/BerriAI/litellm/commit/54e4af84d6c7f6a9d10fa49c4a6fa75e57f07d17) fix(auth): remove hardcoded base64 string flagged by secret scanner (#22125) — _@jquinter_
- [`743b8fd`](https://github.com/BerriAI/litellm/commit/743b8fd307235799fd76c2a95a432df6f66671d4) reverting experimental out — _@yuneng-jiang_
- [`5140062`](https://github.com/BerriAI/litellm/commit/5140062c0965c902f7ebeadf30fd0ca140ad09bc) [Feature] UI - Logs: Use backend request_duration_ms and make Duration sortable — _@yuneng-jiang_
- [`b9dd36c`](https://github.com/BerriAI/litellm/commit/b9dd36c14b58c9c430a7ca87e2cd25f9f68bf4dd) Merge pull request #22028 from BerriAI/litellm_batch_update_database_tasks — _@ryan-crabbe_
- [`1c1b9cd`](https://github.com/BerriAI/litellm/commit/1c1b9cda42ae6aa50ff22c59faead30bd1eaed77) merge: resolve conflict with origin/main in test_db_spend_update_writer.py — _@ryan-crabbe_
- [`e1e05d2`](https://github.com/BerriAI/litellm/commit/e1e05d27f80cf14bd67f1502c0fd047059de4162) Merge remote-tracking branch 'origin/main' into litellm_batch_update_database_tasks — _@ryan-crabbe_
- [`9857643`](https://github.com/BerriAI/litellm/commit/9857643eb4612405f7f6ff586807284b082deeff) Merge pull request #22044 from ryan-crabbe/litellm_redis_pipeline_spend_updates — _@ryan-crabbe_
- [`6e10428`](https://github.com/BerriAI/litellm/commit/6e10428e0062a64da2f232928f1d42ee8d4c99bb) chore: regenerate poetry.lock to match pyproject.toml (#22120) — _@github-actions[bot]_
- [`243a207`](https://github.com/BerriAI/litellm/commit/243a207b1e218ccd5a3d2673944f843d75d44464) Merge pull request #22066 from BerriAI/litellm_spend_log_duration — _@yuneng-jiang_
- [`db05a5f`](https://github.com/BerriAI/litellm/commit/db05a5f02542fbd5d42867b059efcebfbb0beef4) adding build artifacts — _@yuneng-jiang_
- [`1132176`](https://github.com/BerriAI/litellm/commit/1132176289e89a934cd548da9db3644c12e8750f) bump: version 0.4.47 → 0.4.48 — _@yuneng-jiang_
- [`9d6f02e`](https://github.com/BerriAI/litellm/commit/9d6f02e8b78f9f481d0ae349ee80937774b9abed) Merge remote-tracking branch 'origin' into litellm_spend_log_duration — _@yuneng-jiang_
- [`a4fd75f`](https://github.com/BerriAI/litellm/commit/a4fd75fd31bdc0aa97a31eaf08ff41a8ba59f57e) [Fix] UI - MCP Servers: Make auth value optional for create flow — _@yuneng-jiang_
- [`12c4876`](https://github.com/BerriAI/litellm/commit/12c4876891dc0ed81560700f764516201bac811b) Agents - assign tools  (#22064) — _@Krish Dholakia_
- [`a4baa02`](https://github.com/BerriAI/litellm/commit/a4baa022c5b83003ba0017675942ff22fc97d287) Merge pull request #22116 from BerriAI/ui_build_fix_feb25 — _@yuneng-jiang_
- [`30e8151`](https://github.com/BerriAI/litellm/commit/30e8151288e32042406841220164360225ba79e0) fixing build and tests — _@yuneng-jiang_
- [`edd00c0`](https://github.com/BerriAI/litellm/commit/edd00c025c9ad044f9669204b1c3131f224a325b) Merge pull request #22112 from BerriAI/litellm_credential_tag_docs — _@yuneng-jiang_
- [`7daeaf8`](https://github.com/BerriAI/litellm/commit/7daeaf81063cf45859bfc7028fc610d0b1f55a8c) [Docs] Add Credential Usage Tracking documentation — _@yuneng-jiang_
- [`b9d3fdf`](https://github.com/BerriAI/litellm/commit/b9d3fdf93eaf792d9dacaf9c845d67503917200f) Merge remote-tracking branch 'origin' into ui_build_fix_feb25 — _@yuneng-jiang_
- [`cd41b49`](https://github.com/BerriAI/litellm/commit/cd41b490614d64e9e429d7eb6f1d18747df374d2) fixing build — _@yuneng-jiang_
- [`243771f`](https://github.com/BerriAI/litellm/commit/243771f99a0440e7dedc480ad9ef3f02f23af2c4) Merge pull request #22108 from BerriAI/litellm_pricing_calc_tests — _@yuneng-jiang_
- [`5662228`](https://github.com/BerriAI/litellm/commit/5662228e207c5b5f49a727594949118f4a6524c4) feat(ui): add user filtering to usage page (#22059) — _@Krish Dholakia_
- [`0d94ea6`](https://github.com/BerriAI/litellm/commit/0d94ea6ae1c1c46d8091fc8a40fabcaad9b6311b) add new azure models — _@marty-sullivan_
- [`a38993b`](https://github.com/BerriAI/litellm/commit/a38993b871a32090caea0941427a8bc5489a5c02) Merge pull request #22107 from BerriAI/litellm_fix_ui_duplicate_import_v2 — _@yuneng-jiang_
- [`6ae7e84`](https://github.com/BerriAI/litellm/commit/6ae7e84a0b89ce42b35db2ee9739bb058f0c98ce) [Test] UI - Pricing Calculator: Add comprehensive unit tests — _@yuneng-jiang_
- [`115b9a2`](https://github.com/BerriAI/litellm/commit/115b9a2d29640dbf85db95e6317d0e54d024f1e7) fix(ui): remove duplicate antd import in ToolPolicies — _@Shin_
- [`c08ef3f`](https://github.com/BerriAI/litellm/commit/c08ef3f96a8441ec79c0d4fa61ffa02702000885) Update docs/my-website/docs/observability/datadog.md — _@Harshit28j_
- [`cd60e3d`](https://github.com/BerriAI/litellm/commit/cd60e3d4e0add4e3a84ce6c5f284a4863b8a9cad) fix: req changes — _@Harshit28j_
- [`10e769a`](https://github.com/BerriAI/litellm/commit/10e769a5e4108b669fb1a39ee01c4bb660d524e2) feat: ability to trace metrics — _@Harshit28j_
- [`47c24ef`](https://github.com/BerriAI/litellm/commit/47c24ef8ae1b6c77827491437b3e3ed143c1e77f) Merge pull request #22094 from BerriAI/litellm_bump_openai_25_02 — _@Sameerlite_
- [`0516577`](https://github.com/BerriAI/litellm/commit/05165779aca1aeb0e25fc73d64e5ce86ad1fedd3) Merge pull request #22081 from BerriAI/litellm_fix_bedrock_batch_health_check — _@Sameerlite_
- [`ebe35aa`](https://github.com/BerriAI/litellm/commit/ebe35aad9a78afe3e2fcaaefae2b422d193b6780) Merge pull request #22080 from BerriAI/litellm_vllm_response_fix — _@Sameerlite_
- [`ec3ae25`](https://github.com/BerriAI/litellm/commit/ec3ae25a3a412e967d425ddee7fdf0384c9fdd28) Merge pull request #22070 from BerriAI/litellm_forward_auth_headers — _@Sameerlite_
- [`fbffa9a`](https://github.com/BerriAI/litellm/commit/fbffa9a215b1a33f6fe199c6deba1a0070794b96) Merge pull request #22095 from Harshit28j/litellm_fix_RCE_issues — _@Harshit28j_
- [`c3e32b4`](https://github.com/BerriAI/litellm/commit/c3e32b450e71225eea288215e9bbe9a6c3365e9a) Address CR feedback: fix auth dependency duplication, correct logger wording, clean imports — _@Harshit28j_
- [`e50b448`](https://github.com/BerriAI/litellm/commit/e50b4486d0f7aa0497185a1ebcdd2c91f1769eba) fix Unauthenticated RCE and Sandbox Escape in Custom Code Guardrail — _@Harshit28j_
- [`ec9ec6b`](https://github.com/BerriAI/litellm/commit/ec9ec6b77139bff6e86419d535c705c3a54680c6) remove comment — _@Sameerlite_
- [`955b850`](https://github.com/BerriAI/litellm/commit/955b85015fc3d5ea79c65db1fc6b9916d7e53876) Bump openai package — _@Sameerlite_
- [`6e85080`](https://github.com/BerriAI/litellm/commit/6e850805a33caf1a8a982482d0e87e6123064e80) Add audio as supported openai param — _@Sameerlite_
- [`f453427`](https://github.com/BerriAI/litellm/commit/f453427264866e038d9b714701fbce925e0fe6c6) Add v1 for anthropic responses transformation — _@Sameerlite_
- [`d2aeb3e`](https://github.com/BerriAI/litellm/commit/d2aeb3e51367e29303561f6f5504a112c6531127) Merge pull request #22084 from Harshit28j/litellm_presidio-non-json-response-handling — _@Harshit28j_
- [`6a80522`](https://github.com/BerriAI/litellm/commit/6a8052295bd2b0824991258efebbb41fa8b94cbc) fix(guardrails): prevent presidio crash on non-json responses — _@Harshit28j_
- [`66c49db`](https://github.com/BerriAI/litellm/commit/66c49dbb9c6550357a93d4ff97fd4875d5af9ce0) Merge pull request #22077 from Harshit28j/litellm_gemini_trace_id_missingv2 — _@Harshit28j_
- [`61f9222`](https://github.com/BerriAI/litellm/commit/61f9222156f4a5b7df112bd94e49a80111f415b4) Fix: Test connect failing for bedrock batches mode — _@Sameerlite_
- [`45c87a7`](https://github.com/BerriAI/litellm/commit/45c87a714e3c6afd3267067261c18559f56308cb) Fix None (TypeError: 'NoneType' object is not a mapping) — _@Sameerlite_
- [`23e84eb`](https://github.com/BerriAI/litellm/commit/23e84eb7897c54fa46f6f46129dcfac94d83e18a) fix: Metadata / Trace ID Missing in S3 Streaming Callbacks — _@Harshit28j_
- [`897b472`](https://github.com/BerriAI/litellm/commit/897b47201189de4e96e8681aefa458ccdfefec16) fix: Metadata / Trace ID Missing in S3 Streaming Callbacks — _@Harshit28j_
- [`83afa31`](https://github.com/BerriAI/litellm/commit/83afa310d688792835039ed5bf43194da22abd8e) Fix clean header logger — _@Sameerlite_
- [`0e806c8`](https://github.com/BerriAI/litellm/commit/0e806c83c1d205b715c3d986c67897f846ecb99f) Fix docs — _@Sameerlite_
- [`a43d613`](https://github.com/BerriAI/litellm/commit/a43d6139c7243666610a309645967cf9e15a065a) Fix docs — _@Sameerlite_
- [`1f8f66d`](https://github.com/BerriAI/litellm/commit/1f8f66de698cf3a0898a797132d25a3d85ca1b35) add docs for Authentication Headers forwarding — _@Sameerlite_
- [`886f9d6`](https://github.com/BerriAI/litellm/commit/886f9d6a7020e5d2973851fa2da10c056ead18f7) Add support for forwarding provider's auth headers — _@Sameerlite_
- [`b78a30f`](https://github.com/BerriAI/litellm/commit/b78a30f7737618a2dc6b964cb96b27ccb4ed264b) [Feature] Add request_duration_ms to SpendLogs — _@yuneng-jiang_
- [`00ab4d2`](https://github.com/BerriAI/litellm/commit/00ab4d2067605b6ad181c9682dc5a2b6023a342c) feat: add new code execution dataset (#22065) — _@Krish Dholakia_
- [`ec7dc44`](https://github.com/BerriAI/litellm/commit/ec7dc44e73caa3ce4dfa7e236ca648d04f6d6fe5) Merge pull request #22049 from BerriAI/litellm_spend_log_key_info — _@yuneng-jiang_
- [`b2c0bec`](https://github.com/BerriAI/litellm/commit/b2c0bec5c54acd64ea3c637719c7729251c27443) fix(test): Update status enum values to match Google Interactions OpenAPI spec (#22061) — _@shin-bot-litellm_
- [`aa48a7e`](https://github.com/BerriAI/litellm/commit/aa48a7ec00001662d3e3ce2202335634824db853) Allow DB fallback for failure metadata enrichment lookups — _@yuneng-jiang_
- [`7a8b3da`](https://github.com/BerriAI/litellm/commit/7a8b3daff5e1099340e3e5e5309c49e54f98f6eb) address greptile review feedback (greploop iteration 2) — _@yuneng-jiang_
- [`bf77a11`](https://github.com/BerriAI/litellm/commit/bf77a114cc6758cdb9619dec0c028a85db33ba90) address greptile review feedback (greploop iteration 1) — _@yuneng-jiang_
- [`8f118fb`](https://github.com/BerriAI/litellm/commit/8f118fbbce6bdb87ef2ea6b63d7809f13b129c92) Merge pull request #22053 from atapia27/healthcheck-typo-fix — _@yuneng-jiang_
- [`60bcb26`](https://github.com/BerriAI/litellm/commit/60bcb26dc8a8c064183ca516aff54172bb0b0522) feat(agents): assign virtual keys to agents (#22045) — _@ishaan-jaff_
- [`4e84e4c`](https://github.com/BerriAI/litellm/commit/4e84e4c60729bdd63d03538ed6143e84a2bffe32) fix(ui): show real tool names in logs for Anthropic format tools (#22048) — _@ishaan-jaff_
- [`b1423bc`](https://github.com/BerriAI/litellm/commit/b1423bc8bf462388f7920a06244358bc6f03d4b2) removed extra comma typo — _@atapia27_
- [`3f1554c`](https://github.com/BerriAI/litellm/commit/3f1554c0995718188b52840d24bf477b4d72eef9) Merge pull request #21071 from atapia27/feat/healthcheck-model_id-fix — _@yuneng-jiang_
- [`f4e23c9`](https://github.com/BerriAI/litellm/commit/f4e23c97fd7261f43646261692e35022a710ea3e) [Fix] Enrich failure spend logs with key/team metadata — _@yuneng-jiang_
- [`80c0929`](https://github.com/BerriAI/litellm/commit/80c09295add6d6fdf22180cc7ecc43244261c538) Merge upstream/main - resolve health check conflicts — _@atapia27_
- [`9837a1b`](https://github.com/BerriAI/litellm/commit/9837a1bd2a860a330f0c1a9334da257ed0655ebd) Merge pull request #22047 from BerriAI/litellm_key_info_page_email — _@yuneng-jiang_
- [`fa87291`](https://github.com/BerriAI/litellm/commit/fa87291bd9ee9cb1ba005afac1d2f897def2d5cf) Merge pull request #20397 from ryan-crabbe/fix/openai-prompt-cache-params — _@ryan-crabbe_
- [`50ba698`](https://github.com/BerriAI/litellm/commit/50ba6986ef803168a9a9739dc81192ed5dd09fe7) [Feature] UI - Virtual Keys: Add KeyInfoHeader component with metadata display — _@yuneng-jiang_
- [`adafac1`](https://github.com/BerriAI/litellm/commit/adafac1117f95a6fa3b31379d4481c396c4603bc) fix: add prompt_cache_key and prompt_cache_retention support for OpenAI — _@ryan-crabbe_
- [`360643e`](https://github.com/BerriAI/litellm/commit/360643e21315eb02ca790eb22effb87a6d48167b) [Feat] UI - Allow using AI to understand Usage patterns  (#22042) — _@ishaan-jaff_
- [`7511344`](https://github.com/BerriAI/litellm/commit/75113440ab539be371754a6141c98a7d65d1f294) Merge pull request #20509 from ryan-crabbe/docs/mcp-trailing-slash — _@ryan-crabbe_
- [`d581c22`](https://github.com/BerriAI/litellm/commit/d581c229ef0584d079f2cb3f13aaf90f43f0e128) Merge pull request #20376 from ryan-crabbe/fix/model-group-info-cache-invalidation — _@ryan-crabbe_
- [`6ee50ff`](https://github.com/BerriAI/litellm/commit/6ee50ff73e47da30c31526c22c8b58979248348c) feat(proxy): tool policies - auto-discover tools + policy enforcement guardrail (#22041) — _@ishaan-jaff_
- [`ba0f794`](https://github.com/BerriAI/litellm/commit/ba0f79459181a5f4710538c7057218eeda9fea48) Merge origin/main; keep both model_group_info and access_groups cache invalidation — _@ryan-crabbe_
- [`857816f`](https://github.com/BerriAI/litellm/commit/857816fe6d1d42a1a4cf7272c5fb0a5f56a61b0e) Merge pull request #22043 from BerriAI/litellm_router_settings_vitest — _@yuneng-jiang_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
