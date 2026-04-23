# BerriAI/litellm — 2026-04-11

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-10T23:59:59.000Z → 2026-04-11T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A heavy internal staging day on `litellm_internal_staging` — no releases, no tracked issues/PRs in the window, but ~60 commits land via several batched merge PRs. The headline is a **cross-tenant permission hardening pass** (#25554) that aligns Org and Team endpoint auth checks: `_verify_org_access` is added to the deprecated `POST /organization/info` (commit `218daca`), the `all_users` bulk update path is restricted to proxy admins (`bdc7265`), and field-level checks are extended to the bulk user update path (`128d32d`). Worth reading if you run multi-tenant deployments.

Other notable merges:

- **Pass-through proxy fix (#25464)** — multipart uploads and Bedrock JSON body now flow through correctly via a new `LITELLM_PASS_THROUGH_CUSTOM_BODY_STATE_KEY` placed in `types` to break a CodeQL-flagged cyclic import (`3742b0c`, `574eb20`).
- **Team-wide spend logs (#25458)** — new team-member permission for `/spend/logs` with UI + RBAC.
- **Azure containers (#25287)** — routing, managed container IDs, and delete response wire format.
- **OpenAI file content streaming (#25450)** — OOM fix for large file uploads, with a refactored `FileContentStreamingHandler`.
- **Spend timezone fix (#25542)** — raw SQL date filters in `spend_management_endpoints.py` now use TZ-aware UTC datetimes, fixing session-TZ-dependent results in spend/error log queries (`423677f`).
- **Prometheus cardinality (#25527)** — default latency histogram buckets reduced and made configurable; relevant if you scrape litellm metrics.
- **S3 retries (#25530)** — exponential backoff on transient 503/500s.
- **Langfuse metadata (#25448)** — proxy key-auth metadata is now preserved on `/v1/messages` traces (previously overwritten by `update_from_kwargs()`).
- **Bedrock guardrails (#25558)** — preserve dict guardrail `HTTPException.detail` plus context.
- **Bedrock Converse (#25419)** — skip the dummy user "continue" message when prefilling an assistant prefix under `modify_params`.

Infra: a 500-error fix in Docker images by copying local `litellm-proxy-extras` migrations (`e5824b1`), plus extensive CI repair around the `uv` migration, supply-chain hardening (dockerize removed, tools pinned with checksum verification, `78c282f`), and three UI rebuilds shipped through the day.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`d7823e3`](https://github.com/BerriAI/litellm/commit/d7823e3a0998ee992f5df1162b74327bacc69559) Merge pull request #25577 from BerriAI/yj_apr11_build_3 — _@yuneng-berri_
- [`a89ad3a`](https://github.com/BerriAI/litellm/commit/a89ad3aaff1ac523b41c5c8764cb515edc1afde1) chore: update Next.js build artifacts (2026-04-11 22:57 UTC, node v22.16.0) — _@yuneng-berri_
- [`99cb3af`](https://github.com/BerriAI/litellm/commit/99cb3af1a640f7cbfdeeeac4a6dbec9ca0392195) Merge pull request #25562 from BerriAI/litellm_internal_staging_04_11_2026 — _@yuneng-berri_
- [`c40e459`](https://github.com/BerriAI/litellm/commit/c40e459447d213d6ee672cb7c8d86f783b3e5820) fix linting — _@yuneng-berri_
- [`9092477`](https://github.com/BerriAI/litellm/commit/909247785e9262dd1d3d6859b5aa6ae65738db43) Merge remote-tracking branch 'origin' into litellm_internal_staging_04_11_2026 — _@yuneng-berri_
- [`9a43e32`](https://github.com/BerriAI/litellm/commit/9a43e32d6e4f825357873e541270876aed7b8401) Merge pull request #25464 from BerriAI/litellm_passthrough_contenttype — _@yuneng-berri_
- [`3742b0c`](https://github.com/BerriAI/litellm/commit/3742b0cee1eca234b6059c7b2a7d14d17cdcaf83) refactor: define pass-through custom body state key in types module — _@shivamrawat1_
- [`574eb20`](https://github.com/BerriAI/litellm/commit/574eb207c86ba063127caffee30e33c9e5566f49) fix: import LITELLM_PASS_THROUGH_CUSTOM_BODY_STATE_KEY for bedrock passthrough — _@shivamrawat1_
- [`627d70a`](https://github.com/BerriAI/litellm/commit/627d70affd18b735f309df40487cb93511c9a63f) Potential fix for pull request finding 'CodeQL / Module-level cyclic import' — _@shivamrawat1_
- [`21e4071`](https://github.com/BerriAI/litellm/commit/21e4071f252b7c8e56250e83c815ccac7226a973) Merge pull request #25573 from BerriAI/yj_apr11_build_2 — _@yuneng-berri_
- [`20b16b3`](https://github.com/BerriAI/litellm/commit/20b16b377c0ddff19831e591493d0674d57924f2) chore(proxy): match CRLF line endings in pass_through_endpoints — _@shivamrawat1_
- [`b42a875`](https://github.com/BerriAI/litellm/commit/b42a8750df2d07145c26bc59326c87b1b31b65e4) chore: update Next.js build artifacts (2026-04-11 21:00 UTC, node v22.16.0) — _@yuneng-berri_
- [`56e8245`](https://github.com/BerriAI/litellm/commit/56e82451df9d60d0546ce48f105516058bf7be2b) Merge pull request #25458 from BerriAI/litellm_team_members_logs — _@yuneng-berri_
- [`dbcdb15`](https://github.com/BerriAI/litellm/commit/dbcdb1565c54a350bc5235213d4ba2fbc449f77c) Merge pull request #25241 from BerriAI/es_allow_applyguardrails_for_iam — _@yuneng-berri_
- [`0169f14`](https://github.com/BerriAI/litellm/commit/0169f140bf2ac116a515be2e64bff2d304499e7b) Merge pull request #25571 from BerriAI/yj_apr11_build — _@yuneng-berri_
- [`da75012`](https://github.com/BerriAI/litellm/commit/da75012a50340a045d01fc514657fb609b8d9c57) Merge pull request #25569 from BerriAI/litellm_harish_april11 — _@ishaan-berri_
- [`18caee3`](https://github.com/BerriAI/litellm/commit/18caee3ef4f2f6db53242352a229823ec5a6fe58) chore: update Next.js build artifacts (2026-04-11 20:19 UTC, node v22.16.0) — _@yuneng-berri_
- [`014ec9b`](https://github.com/BerriAI/litellm/commit/014ec9bf8e359d79d80782c1f92256160d42bf54) [Fix] test_databricks: don't assert stream in request body when not passed — _@yuneng-berri_
- [`60d20ac`](https://github.com/BerriAI/litellm/commit/60d20ace5bc7364df49f70907055cd69067cebbd) [Fix] test_ratelimit: skip over-limit cases that race with background RPM tracking — _@yuneng-berri_
- [`ec0cd5c`](https://github.com/BerriAI/litellm/commit/ec0cd5c17d810a2f063c2d286a29f4c4fd5a9050) Update streaming.py. Provide Type Annotation for empty dict — _@harish-berri_
- [`150c37c`](https://github.com/BerriAI/litellm/commit/150c37c47d558b6cabee3af0203ccdeaf923867e) Merge pull request #25568 from BerriAI/litellm_yj_apr_10_2026 — _@yuneng-berri_
- [`218daca`](https://github.com/BerriAI/litellm/commit/218daca867b5bcd32e8b529b5f172a3a1a72c92b) [Fix] Address Greptile review: POST /organization/info auth bypass, inline imports, team access denial tests — _@yuneng-berri_
- [`e5824b1`](https://github.com/BerriAI/litellm/commit/e5824b1ec2e3dd27336fc5d7831bceee2df05cf2) fix(docker): copy local litellm-proxy-extras migrations into Docker image to fix 500 errors — _@ishaan-berri_
- [`c70a3c7`](https://github.com/BerriAI/litellm/commit/c70a3c709354628668d40dad898325529268af72) Merge pull request #25450 from harish876/oom-file-fix-openai — _@ishaan-berri_
- [`e8519b3`](https://github.com/BerriAI/litellm/commit/e8519b31092290e7317ef5a3233b8e792df369f4) [Fix] Databricks: add provider prefix to response model name — _@yuneng-berri_
- [`5cb9b08`](https://github.com/BerriAI/litellm/commit/5cb9b087ade49cdbb5b9e6e1c77e85c7c8a6ea7e) Merge pull request #25545 from BerriAI/litellm_ishaan_april10 — _@ishaan-berri_
- [`d22a07a`](https://github.com/BerriAI/litellm/commit/d22a07a9ba39ba6122317719819252dcf4dbfa63) Merge remote-tracking branch 'origin/main' into ci-fix-april6-fixes — _@ishaan-berri_
- [`69eb345`](https://github.com/BerriAI/litellm/commit/69eb34597cad1c04c5d124c6723ca827ccaa45ad) Refactor file content streaming handling to improve routing and support — _@harish876_
- [`92bbf0a`](https://github.com/BerriAI/litellm/commit/92bbf0a0d33683d048b046a3e999ed807b45e4a2) Merge remote-tracking branch 'origin' into litellm_oss_staging_04_09_2026 — _@yuneng-berri_
- [`57b77fe`](https://github.com/BerriAI/litellm/commit/57b77fecbd780d39e00019a47f73e7f0160757aa) Merge pull request #25554 from BerriAI/litellm_cross_tenant_resource_checks — _@yuneng-berri_
- [`aff352b`](https://github.com/BerriAI/litellm/commit/aff352b9e32180c647d10989a6c0e84e4e413b02) fix(team_endpoints): suppress type error on budget_limits assignment — _@ishaan-berri_
- [`3df367b`](https://github.com/BerriAI/litellm/commit/3df367bdb8ff9400943292f779a8307605c1bd3c) fix(reset_budget_job): use spend_counter_cache from proxy_server in reset_budget_windows — _@ishaan-berri_
- [`011e087`](https://github.com/BerriAI/litellm/commit/011e087939fa14bd0cd7e2b9ea16fb292a0cb889) fix(anthropic): guard against non-dict messages in strip_advisor_blocks_from_messages — _@ishaan-berri_
- [`082f0af`](https://github.com/BerriAI/litellm/commit/082f0afb835c33fe7d7a6a63fd1e9c2f55d39d2e) refactor(anthropic): extract output_config validation to helper to fix ruff PLR0915 — _@ishaan-berri_
- [`f409954`](https://github.com/BerriAI/litellm/commit/f40995418bb923844bb2167d532ad2b2183937ba) fix(types): annotate ANTHROPIC_ADVISOR_TOOL_TYPE as Literal to satisfy mypy — _@ishaan-berri_
- [`eabb6a3`](https://github.com/BerriAI/litellm/commit/eabb6a31f1096d98374126002a67980a306e94c5) Merge pull request #25542 from BerriAI/litellm_fix-timestamp — _@ryan-crabbe-berri_
- [`75438ac`](https://github.com/BerriAI/litellm/commit/75438ac19a9cd36f28e84fbf58d7986220aa705e) docs: add LITELLM_CORS_ORIGINS and LITELLM_CORS_ALLOW_CREDENTIALS to env vars reference — _@ATR-3_
- [`01b9b50`](https://github.com/BerriAI/litellm/commit/01b9b50b431c837916ae7f4638685e617adf8be2) Add Screenshots / Proof of Fix section to PR template (#25564) — _@krrish-berri-2_
- [`f686d33`](https://github.com/BerriAI/litellm/commit/f686d33408f95c096cf512063b398347e6dbde24) refactor: extract _get_cors_config() for testability, fix no-op CORS tests — _@ATR-3_
- [`423677f`](https://github.com/BerriAI/litellm/commit/423677f19ee0fcd51c3e0492014acc47863e7a2e) fix(spend): convert string dates to tz-aware UTC datetimes in _get_spend_report_for_time_range — _@ryan-crabbe-berri_
- [`363f9fe`](https://github.com/BerriAI/litellm/commit/363f9fe5da3a338abca045842a1bbfd548820653) fix(proxy): preserve dict guardrail HTTPException.detail + bedrock context (#25558) — _@michelligabriele_
- [`2fe615b`](https://github.com/BerriAI/litellm/commit/2fe615b37346d8bcba8a3900110a1ccf8575b121) fix(s3): add retry with exponential backoff for transient S3 503/500 errors (#25530) — _@jimmychen-p72_
- [`7d2f069`](https://github.com/BerriAI/litellm/commit/7d2f0693616d9946c38266d7908a3df76364b417) Reduce default latency histogram bucket cardinality (#25527) — _@J-Byron_
- [`c9e4949`](https://github.com/BerriAI/litellm/commit/c9e4949485291f06b769da78d648876bcf390fcf) fix(logging): preserve proxy key-auth metadata on /v1/messages Langfuse traces (#25448) — _@michelligabriele_
- [`e01fe01`](https://github.com/BerriAI/litellm/commit/e01fe01d35d825ab946c1b124bc2517b6ecf9b4d) fix: address Greptile P1 review comments — _@ATR-3_
- [`d03eced`](https://github.com/BerriAI/litellm/commit/d03ecedba165da8df0dfaa43a7f43f1daad20d3f) feat(containers): Azure routing, managed container IDs, delete response parsing (#25287) — _@Sameerlite_
- [`83c4592`](https://github.com/BerriAI/litellm/commit/83c459225c2a43562f5a457793c9a9b9df31e753) [Fix] CI: fix GHA timeouts and uv lock --check failures — _@yuneng-berri_
- [`40d8a25`](https://github.com/BerriAI/litellm/commit/40d8a25df968dbfcecf58408951b2e3836a43863) feat(bedrock): skip dummy user continue for assistant prefix prefill (#25419) — _@Sameerlite_
- [`c13be44`](https://github.com/BerriAI/litellm/commit/c13be44e44decfe022640c112c3b79259051906e) feat(guardrails): optional skip system message in unified guardrail inputs (#25481) — _@Sameerlite_
- [`dc200c3`](https://github.com/BerriAI/litellm/commit/dc200c34a214543983b2697fc2779c4590bcb348) fix(responses): map refusal stop_reason to incomplete status in streaming (#25498) — _@Sameerlite_
- [`519095b`](https://github.com/BerriAI/litellm/commit/519095bfe5b5f5911a1ee123f22ebdfdd1d25ca5) test: add structural proxy_server CORS invariant test (Greptile review feedback) — _@ATR-3_
- [`e079ee7`](https://github.com/BerriAI/litellm/commit/e079ee779f7ebc5e4ac2dd50996640c4a7266581) fix: harden CORS, create_views exception handling, and spend log cleanup loop — _@ATR-3_
- [`ef71016`](https://github.com/BerriAI/litellm/commit/ef71016dfe408af72b67d1b24d857ce556530211) address greptile review feedback (greploop iteration 1) — _@yuneng-berri_
- [`d9a4602`](https://github.com/BerriAI/litellm/commit/d9a460277a27d9108342cedc4c181d3a43596d0c) [Fix] CI: fix uv lock resolution and tiktoken test timeout — _@yuneng-berri_
- [`09ffc87`](https://github.com/BerriAI/litellm/commit/09ffc877341bb32e08e3837a044f22736130f11d) fix: align org and team endpoint permission checks with existing patterns — _@yuneng-berri_
- [`78c282f`](https://github.com/BerriAI/litellm/commit/78c282f400f054be4a64e876939e1805a4574791) [Infra] CI: harden supply chain — remove dockerize, pin tools, verify checksums — _@yuneng-berri_
- [`9dfc6b1`](https://github.com/BerriAI/litellm/commit/9dfc6b15b176f5b4830124bae00a19684430bb72) [Fix] CI: remove duplicate helm lint from check_code_and_doc_quality — _@yuneng-berri_
- [`bc05219`](https://github.com/BerriAI/litellm/commit/bc05219ba92758e233165b2267cc974149a002ef) [Fix] CI: fix helm not found and MCP tests on Python 3.9 — _@yuneng-berri_
- [`491aa7e`](https://github.com/BerriAI/litellm/commit/491aa7ea51c1bee465ed94f3c2877b937800fbec) [Fix] CI: fix 6 more CircleCI job failures from uv migration — _@yuneng-berri_
- [`bdc7265`](https://github.com/BerriAI/litellm/commit/bdc72651e8338059afb5119c48c999fecbdefcc5) fix: restrict all_users bulk update path to proxy admins — _@yuneng-berri_
- [`93d340c`](https://github.com/BerriAI/litellm/commit/93d340c1ad7699bb81ff7494b6d87b72d75b5134) [Fix] CI: fix uv migration breaking 7 CircleCI jobs — _@yuneng-berri_
- [`f523ccb`](https://github.com/BerriAI/litellm/commit/f523ccb2fe63016ebfc7dae278c08cc0e772fe06) Update import paths in tests for StorageBackendFileService — _@harish876_
- [`68bc6de`](https://github.com/BerriAI/litellm/commit/68bc6de214cbe0346849e3319f12eabbedb3d963) resolving dependency issues — _@harish876_
- [`c7934c4`](https://github.com/BerriAI/litellm/commit/c7934c460d4182f5545c385429d42ae3da7faf0e) fix(spend): session-TZ-independent date filtering for spend/error log queries — _@ryan-crabbe-berri_
- [`128d32d`](https://github.com/BerriAI/litellm/commit/128d32d2494b759c5d15da3452452af4c6a34c01) fix: extend field-level checks to bulk user update path — _@yuneng-berri_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
