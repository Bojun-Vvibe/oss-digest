# BerriAI/litellm — 2026-04-18

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-17T23:59:59.000Z → 2026-04-18T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Headline change today is a big infrastructure floor-raise: PR [#26022](https://github.com/BerriAI/litellm/pull/26022) bumps the proxy extras (`orjson` 3.11.5, `fastapi-sso`, `python-multipart`) and raises `requires-python` from 3.9 to 3.10 (Python 3.9 is EOL). Anyone pinning 3.9 in CI or Docker base images will need to update. Paired with [#25983](https://github.com/BerriAI/litellm/pull/25983), which merges the dev branch into main.

Notable feature work landed:
- Configurable **multi-threshold budget alerts** for virtual keys ([#25989](https://github.com/BerriAI/litellm/pull/25989)) — replace the hardcoded 80% email with a per-key JSON map (e.g. `{"50": [...], "75": [...], "100": [...]}`), with a `default_key_max_budget_alert_emails` global fallback.
- **Project-level model-specific rate limits** are now actually enforced ([#25994](https://github.com/BerriAI/litellm/pull/25994)) — previously `model_rpm_limit`/`model_tpm_limit` in `project_metadata` were silently ignored by `parallel_request_limiter_v3`.
- **Claude Code BYOK** is now configurable from the admin UI instead of `config.yaml` ([#25998](https://github.com/BerriAI/litellm/pull/25998)).
- Prometheus `exclude_labels` support in `PrometheusMetricsConfig` ([#26018](https://github.com/BerriAI/litellm/pull/26018)).
- Adaptive routing groundwork landed via direct commit [dd4a1d2](https://github.com/BerriAI/litellm/commit/dd4a1d2be2f95ac67df2744b6218ff07af65336b).

Several user-impacting bug fixes:
- MCP regression from #25441 fixed: PKCE-triggering 401 restored when no stored per-user OAuth token exists ([#26032](https://github.com/BerriAI/litellm/pull/26032), and the older [#25769](https://github.com/BerriAI/litellm/pull/25769)).
- A/B agent endpoints (`GET /v1/agents/{id}` and `a2a/<name>` routing) now enforce per-agent ACLs — previously any authenticated user with the agents feature could read any agent config ([#25922](https://github.com/BerriAI/litellm/pull/25922)).
- Bedrock Anthropic streaming no longer produces negative costs on start-only cache usage ([#25846](https://github.com/BerriAI/litellm/pull/25846)).
- `/key/update` UI no longer injects `policies:[]` and trips the enterprise license error on second save ([#26023](https://github.com/BerriAI/litellm/pull/26023)); model edit no longer silently zeroes `input/output_cost_per_token` (still open: [#26001](https://github.com/BerriAI/litellm/pull/26001)).
- `prometheus_helpers` file/package shadowing that broke `/global/spend/logs` resolved ([#26026](https://github.com/BerriAI/litellm/pull/26026)).
- Default end-user `budget_id` now persists so the reset job picks them up ([#25991](https://github.com/BerriAI/litellm/pull/25991)).
- Health checks for reasoning models get their own max-token env ([#25936](https://github.com/BerriAI/litellm/pull/25936)); Azure DI OCR now honors `pages` ([#25929](https://github.com/BerriAI/litellm/pull/25929)); Helm `extraContainers` gain `tpl` support ([#25494](https://github.com/BerriAI/litellm/pull/25494)).

Open and worth watching: per-request DB hits for `budget_reset_at` in Prometheus ([#26020](https://github.com/BerriAI/litellm/pull/26020), fixes #24875) and Cloudflare Workers AI OpenAI-shape response handling ([#26028](https://github.com/BerriAI/litellm/pull/26028)).

## Releases

_None in window._


## Merged PRs

- [#25989](https://github.com/BerriAI/litellm/pull/25989) **feat: configurable multi-threshold budget alerts for virtual keys** — _by @ryan-crabbe-berri, merged 2026-04-18T23:21:30Z_
- [#26032](https://github.com/BerriAI/litellm/pull/26032) **fix(mcp): restore PKCE-triggering 401 when no stored per-user token exists** — _by @ishaan-berri, merged 2026-04-18T21:52:32Z_
- [#26022](https://github.com/BerriAI/litellm/pull/26022) **[Infra] Bump proxy dependencies and raise minimum Python to 3.10** — _by @yuneng-berri, merged 2026-04-18T21:44:24Z_
- [#25983](https://github.com/BerriAI/litellm/pull/25983) **[Infra] Merge dev branch** — _by @yuneng-berri, merged 2026-04-18T21:43:04Z_
- [#25994](https://github.com/BerriAI/litellm/pull/25994) **fix: enforce project-level model-specific rate limits in parallel_req…** — _by @shivamrawat1, merged 2026-04-18T21:31:08Z_
- [#26026](https://github.com/BerriAI/litellm/pull/26026) **[Fix] Resolve prometheus_helpers file/package shadow breaking /global/spend/logs** — _by @yuneng-berri, merged 2026-04-18T20:18:04Z_
- [#26018](https://github.com/BerriAI/litellm/pull/26018) **feat(prometheus): add exclude_labels support to PrometheusMetricsConfig** — _by @ishaan-berri, merged 2026-04-18T20:16:04Z_
- [#25969](https://github.com/BerriAI/litellm/pull/25969) **Feat/prometheus exclude labels** — _by @J-Byron, merged 2026-04-18T20:16:01Z_
- [#26023](https://github.com/BerriAI/litellm/pull/26023) **[Fix] UI - Keys: strip empty premium fields from key update payload** — _by @yuneng-berri, merged 2026-04-18T20:01:38Z_
- [#26003](https://github.com/BerriAI/litellm/pull/26003) **fix(ui): extra_headers not persisting on MCP server edit** — _by @ryan-crabbe-berri, merged 2026-04-18T19:08:35Z_
- [#25991](https://github.com/BerriAI/litellm/pull/25991) **Litellm persist default router end budget** — _by @shivamrawat1, merged 2026-04-18T18:52:21Z_
- [#25936](https://github.com/BerriAI/litellm/pull/25936) **fix(proxy): prioritize reasoning health-check max token precedence** — _by @Sameerlite, merged 2026-04-18T18:35:04Z_
- [#25846](https://github.com/BerriAI/litellm/pull/25846) **fix(bedrock): prevent negative streaming costs for start-only cache usage** — _by @Sameerlite, merged 2026-04-18T18:30:08Z_
- [#25769](https://github.com/BerriAI/litellm/pull/25769) **fix(mcp): restore pre-emptive 401 for missing per-user OAuth tokens** — _by @milan-berri, merged 2026-04-18T17:32:32Z_
- [#25494](https://github.com/BerriAI/litellm/pull/25494) **feat(helm): add tpl support to extraContainers and extraInitContainers** — _by @jlav, merged 2026-04-18T17:31:38Z_
- [#25929](https://github.com/BerriAI/litellm/pull/25929) **feat(ocr/azure-di): support Mistral-style pages param via analyze query string** — _by @shivamrawat1, merged 2026-04-18T17:26:59Z_
- [#25879](https://github.com/BerriAI/litellm/pull/25879) **chore(ui): migrate router_settings page from Tremor to antd** — _by @ryan-crabbe-berri, merged 2026-04-18T17:23:11Z_
- [#25749](https://github.com/BerriAI/litellm/pull/25749) **chore(ui): migrate GuardrailTestPlayground off @tremor/react to antd** — _by @ryan-crabbe-berri, merged 2026-04-18T17:14:48Z_
- [#25791](https://github.com/BerriAI/litellm/pull/25791) **Langfuse credential leak** — _by @J-Byron, merged 2026-04-18T17:12:20Z_
- [#25998](https://github.com/BerriAI/litellm/pull/25998) **[Feature] UI - Settings: Claude Code BYOK support** — _by @yuneng-berri, merged 2026-04-18T16:29:41Z_
- [#25995](https://github.com/BerriAI/litellm/pull/25995) **[Fix] Remove unresolved merge conflict markers in bedrock test file** — _by @yuneng-berri, merged 2026-04-18T01:37:50Z_
- [#25922](https://github.com/BerriAI/litellm/pull/25922) **[Fix] Agent endpoint and routing permission checks** — _by @yuneng-berri, merged 2026-04-18T00:19:59Z_


## Open PRs (new or updated)

- [#26034](https://github.com/BerriAI/litellm/pull/26034) **chore: split CLAUDE.md by domain for lazy context loading** — _by @ryan-crabbe-berri, updated 2026-04-18T22:33:26Z_
- [#26030](https://github.com/BerriAI/litellm/pull/26030) **feat(prometheus): add exclude_labels support to PrometheusMetricsConfig** — _by @ishaan-berri, updated 2026-04-18T20:54:27Z_
- [#26020](https://github.com/BerriAI/litellm/pull/26020) **fix(prometheus): stop hitting DB on every request for budget_reset_at** — _by @ishaan-berri, updated 2026-04-18T20:53:50Z_
- [#26008](https://github.com/BerriAI/litellm/pull/26008) **fix(router): randomize deployment selection on exact cost ties in lowest_cost strategy** — _by @sparrowhe, updated 2026-04-18T20:44:54Z_
- [#26028](https://github.com/BerriAI/litellm/pull/26028) **fix(cloudflare): handle OpenAI-compatible response schema for newer Workers AI models** — _by @sharziki, updated 2026-04-18T20:32:26Z_
- [#26004](https://github.com/BerriAI/litellm/pull/26004) **fix: preserve service_account_id in metadata on /key/update** — _by @ryan-crabbe-berri, updated 2026-04-18T18:58:12Z_
- [#25984](https://github.com/BerriAI/litellm/pull/25984) **Skills Marketplace: GitHub PAT import + agent registry discovery** — _by @ishaan-berri, updated 2026-04-18T18:37:39Z_
- [#25588](https://github.com/BerriAI/litellm/pull/25588) **fix(prometheus): stop hitting DB on every request for budget_reset_at** — _by @ishaan-berri, updated 2026-04-18T17:42:53Z_
- [#26016](https://github.com/BerriAI/litellm/pull/26016) **fix: apply cache_read_input_token_cost to cached tokens in Fireworks AI cost calculation** — _by @VANDRANKI, updated 2026-04-18T17:24:47Z_
- [#26002](https://github.com/BerriAI/litellm/pull/26002) **fix(ui): use stored-credentials endpoint for tools fetch on MCP edit page** — _by @ryan-crabbe-berri, updated 2026-04-18T16:22:06Z_
- [#24759](https://github.com/BerriAI/litellm/pull/24759) **Fix Usage AI chat for proxy model aliases and model groups** — _by @kalp9197, updated 2026-04-18T16:15:23Z_
- [#26012](https://github.com/BerriAI/litellm/pull/26012) **fix(router): strip thinking blocks when switching between providers with incompatible formats** — _by @shiva-manu, updated 2026-04-18T16:10:34Z_
- [#25329](https://github.com/BerriAI/litellm/pull/25329) **docs: add asqav audit trail callback integration** — _by @jagmarques, updated 2026-04-18T08:27:33Z_
- [#26001](https://github.com/BerriAI/litellm/pull/26001) **fix(ui): stop injecting $0 cost on model edit** — _by @ryan-crabbe-berri, updated 2026-04-18T05:34:59Z_
- [#25997](https://github.com/BerriAI/litellm/pull/25997) **Feat(extract models from all team models and all proxy models)** — _by @Lucas-Song-Dev, updated 2026-04-18T05:23:55Z_
- [#25462](https://github.com/BerriAI/litellm/pull/25462) **feat(azure_ai): native /responses routing for project-based endpoints** — _by @Christian-Sidak, updated 2026-04-18T05:06:16Z_
- [#25465](https://github.com/BerriAI/litellm/pull/25465) **fix(azure_ai): strip max_retries from /v1/messages request body** — _by @Christian-Sidak, updated 2026-04-18T05:06:15Z_
- [#25990](https://github.com/BerriAI/litellm/pull/25990) **Add Anthropic task_budget support** — _by @itsmejay80, updated 2026-04-18T01:57:47Z_
- [#25993](https://github.com/BerriAI/litellm/pull/25993) **fix(zai): flatten list-format content in tool/assistant messages before sending to GLM** — _by @octo-patch, updated 2026-04-18T01:21:17Z_
- [#25992](https://github.com/BerriAI/litellm/pull/25992) **fix(ollama): raise BadRequestError on malformed tool call JSON arguments** — _by @octo-patch, updated 2026-04-18T01:15:24Z_
- [#25986](https://github.com/BerriAI/litellm/pull/25986) **Fix /metrics hang when require_auth_for_metrics_endpoint is true and auth succeeds #25980** — _by @shivamrawat1, updated 2026-04-18T00:19:37Z_
- [#18558](https://github.com/BerriAI/litellm/pull/18558) **fix: preserve metadata field in pass-through endpoint requests** — _by @QwertyJack, updated 2026-04-18T00:09:32Z_
- [#19246](https://github.com/BerriAI/litellm/pull/19246) **fix: redact langfuse_secret_key from user_api_key_auth_metadata logging** — _by @theonlypal, updated 2026-04-18T00:09:20Z_
- [#19269](https://github.com/BerriAI/litellm/pull/19269) **test(ollama): add regression tests for Pydantic response_format (#17807)** — _by @siddikisahil47, updated 2026-04-18T00:09:18Z_
- [#19274](https://github.com/BerriAI/litellm/pull/19274) **Format example code in openrouter.md** — _by @jack-mcivor, updated 2026-04-18T00:09:17Z_


## Closed PRs (not merged)

- [#26029](https://github.com/BerriAI/litellm/pull/26029) **fix(mcp): restore PKCE-triggering 401 when no stored per-user token exists** — _by @ishaan-berri, closed 2026-04-18T21:04:38Z_
- [#26017](https://github.com/BerriAI/litellm/pull/26017) **Litellm ishaan april18** — _by @ishaan-berri, closed 2026-04-18T20:37:58Z_
- [#25910](https://github.com/BerriAI/litellm/pull/25910) **[Infra] Fix llm_translation worker OOMs at the root: proper test isolation** — _by @yuneng-berri, closed 2026-04-18T19:05:55Z_
- [#25512](https://github.com/BerriAI/litellm/pull/25512) **fix: replace bare raise Exception with descriptive ValueError in streaming wrapper** — _by @mohi-devhub, closed 2026-04-18T16:58:54Z_
- [#25186](https://github.com/BerriAI/litellm/pull/25186) **add XecGuard guardrail integration** — _by @clyang, closed 2026-04-18T13:52:00Z_
- [#25168](https://github.com/BerriAI/litellm/pull/25168) **Fix: Persist default end-user budget_id to DB for budget reset job** — _by @krrish-berri-2, closed 2026-04-18T00:52:03Z_
- [#25988](https://github.com/BerriAI/litellm/pull/25988) **Add Anthropic task budget support** — _by @itsmejay80, closed 2026-04-18T00:38:24Z_


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`0278d73`](https://github.com/BerriAI/litellm/commit/0278d73cd9d46fd1e5140bc3870f3839d958d72d) Merge remote-tracking branch 'origin/litellm_internal_staging' into yj_ui_build_apr18 — _@yuneng-berri_
- [`aab3ef8`](https://github.com/BerriAI/litellm/commit/aab3ef8988b12d166b20356a81c53127480f1125) chore: update Next.js build artifacts (2026-04-18 23:46 UTC, node v22.16.0) — _@yuneng-berri_
- [`ba24e4a`](https://github.com/BerriAI/litellm/commit/ba24e4a1b3228d747c9d1bd8339ca56fb8ba9aec) remove next env — _@yuneng-berri_
- [`dd4a1d2`](https://github.com/BerriAI/litellm/commit/dd4a1d2be2f95ac67df2744b6218ff07af65336b) feat: add adaptive routing to litellm — _@krrish-berri-2_
- [`9bea02c`](https://github.com/BerriAI/litellm/commit/9bea02c2918cb11f291b14a10e15a492ae1551f4) Merge remote-tracking branch 'origin/litellm_internal_staging' into litellm_feat-add-reload-flag-proxy — _@ryan-crabbe-berri_
- [`67bf18d`](https://github.com/BerriAI/litellm/commit/67bf18dfe02160eb247fbdcea5031b6043ec2769) Merge pull request #25989 from BerriAI/litellm_feat-multi_threshold_budget_alerts — _@ryan-crabbe-berri_
- [`c8b7c1b`](https://github.com/BerriAI/litellm/commit/c8b7c1bafa7262a38d643d4661788c7745a0af7c) Merge remote-tracking branch 'origin/litellm_internal_staging' into litellm_feat-multi_threshold_budget_alerts — _@ryan-crabbe-berri_
- [`eb6fd98`](https://github.com/BerriAI/litellm/commit/eb6fd98611cd478e98a775e447126a8384d314f6) Merge remote-tracking branch 'origin/main' into litellm_feat-multi_threshold_budget_alerts — _@ryan-crabbe-berri_
- [`ecff06d`](https://github.com/BerriAI/litellm/commit/ecff06df65042eb1f6dae68ec094c465096e7023) Merge pull request #26032 from BerriAI/litellm_mcp_pkce_fix_v2 — _@ishaan-berri_
- [`de790fd`](https://github.com/BerriAI/litellm/commit/de790fd2739bce7e9b7fc28d3e452bb561e3bdea) chore: update Next.js build artifacts (2026-04-18 21:49 UTC, node v22.16.0) — _@yuneng-berri_
- [`85b1b93`](https://github.com/BerriAI/litellm/commit/85b1b9366121c1f10f2170e11ebf0530248dcb72) Merge pull request #26022 from BerriAI/litellm_/reverent-kirch-7cf0a6 — _@shin-berri_
- [`e690519`](https://github.com/BerriAI/litellm/commit/e69051916e096e0e4046c12bb7a37ee869145ef9) Merge pull request #25983 from BerriAI/litellm_yj_apr17 — _@yuneng-berri_
- [`63313bc`](https://github.com/BerriAI/litellm/commit/63313bcd77f221aade1748e0b7c18f75f7085aff) Merge pull request #25994 from BerriAI/litellm_project_rate_limiting — _@yuneng-berri_
- [`0a4b02f`](https://github.com/BerriAI/litellm/commit/0a4b02fe76b30e1265833d4da4dd289a35b5c493) fix: tighten recipient_emails guard to reject empty list — _@ryan-crabbe-berri_
- [`b7813aa`](https://github.com/BerriAI/litellm/commit/b7813aad412337e29aabd510e02304b1bf87dcd9) fix(mcp): restore PKCE-triggering 401 when no stored per-user token exists — _@ishaan-berri_
- [`029d9bc`](https://github.com/BerriAI/litellm/commit/029d9bcfc786bb35b3a7a31d1d87859febb01aeb) refactor: inline _parse_email_list in auth_checks to drop enterprise dep — _@ryan-crabbe-berri_
- [`8b86a3b`](https://github.com/BerriAI/litellm/commit/8b86a3b04112e51f3d885ac93c7b8a5980abc389) fix: normalize alert-email configs at merge boundary — _@ryan-crabbe-berri_
- [`09a524a`](https://github.com/BerriAI/litellm/commit/09a524a35152fb4315e90c92d9fed300b66b7c42) fix: narrow CallInfo.max_budget_alert_emails to Dict[str, List[str]] — _@ryan-crabbe-berri_
- [`dbf4f96`](https://github.com/BerriAI/litellm/commit/dbf4f9637fc1a4cd4c924a7593aa7728f5ece276) Merge remote-tracking branch 'upstream/litellm_internal_staging' into litellm_project_rate_limiting — _@shivamrawat1_
- [`f483f1e`](https://github.com/BerriAI/litellm/commit/f483f1e800518fe5414626f489afbe5786432211) Merge remote-tracking branch 'origin/litellm_internal_staging' into litellm_yj_apr17 — _@yuneng-berri_
- [`ec590f9`](https://github.com/BerriAI/litellm/commit/ec590f938b08627ddb22c1219ea122704a793267) Merge remote-tracking branch 'origin/litellm_internal_staging' into litellm_/reverent-kirch-7cf0a6 — _@yuneng-berri_
- [`643e941`](https://github.com/BerriAI/litellm/commit/643e941b644fc543b9400a7a6e0e4821f03cba2f) Merge pull request #26026 from BerriAI/litellm_fixPrometheusHelpersPackageCollision — _@yuneng-berri_
- [`cfdf893`](https://github.com/BerriAI/litellm/commit/cfdf893226e26264bdd99d2605c94ea460445979) [Fix] Merge prometheus_helpers.py into prometheus_helpers/__init__.py to resolve file/package collision — _@yuneng-berri_
- [`8e00f61`](https://github.com/BerriAI/litellm/commit/8e00f61026e65b8fcc3ca09f24a03a08e376d6ec) Merge pull request #26023 from BerriAI/litellm_/eloquent-feistel-b346ec — _@yuneng-berri_
- [`f24c8db`](https://github.com/BerriAI/litellm/commit/f24c8dbf79f67d8564a707230370178bf4e03d09) chore: bump CircleCI conda envs from python 3.9 to 3.10 — _@yuneng-berri_
- [`9bdb3b1`](https://github.com/BerriAI/litellm/commit/9bdb3b177261828690292de895534b52d105b524) chore: lower python floor from 3.11 to 3.10 — _@yuneng-berri_
- [`d1e6657`](https://github.com/BerriAI/litellm/commit/d1e665742bd1e0420e7eb9357f5ddbb2c15870f0) chore: drop stale python_version markers after floor raise — _@yuneng-berri_
- [`cae8b74`](https://github.com/BerriAI/litellm/commit/cae8b74b0b13dd714209fb296ca5258d1244512b) Fall back to top-level keyData when resolving previous premium value — _@yuneng-berri_
- [`2c41f3c`](https://github.com/BerriAI/litellm/commit/2c41f3c291208c4f78f6c56a2f4b4587f335bd1f) [Fix] UI - Keys: strip empty premium fields from key update payload — _@yuneng-berri_
- [`1c29c5e`](https://github.com/BerriAI/litellm/commit/1c29c5e903fc3e84ac3be700f8b426c4afbe11f9) chore: bump proxy deps and raise python floor to 3.11 — _@yuneng-berri_
- [`fc35c68`](https://github.com/BerriAI/litellm/commit/fc35c681088bda7b7a3013dd862be3c9f8df6c2e) Merge pull request #26003 from BerriAI/litellm_fix-extra-headers-not-persisting — _@ryan-crabbe-berri_
- [`f870095`](https://github.com/BerriAI/litellm/commit/f870095f3f96c5b906043e739b7007f034230c24) Merge pull request #25991 from BerriAI/litellm_persist_default_router_end_budget — _@shivamrawat1_
- [`0d95061`](https://github.com/BerriAI/litellm/commit/0d950612f41e83fdc4c183729c850331c41365d4) refactor: extract success pipeline ops to fix PLR0915 in parallel_request_limiter_v3 — _@shivamrawat1_
- [`d03c301`](https://github.com/BerriAI/litellm/commit/d03c301c79ab0c2590921ce5e1110320e6879300) Merge pull request #25936 from BerriAI/litellm_health-check-reasoning-tokens — _@ishaan-berri_
- [`f476447`](https://github.com/BerriAI/litellm/commit/f4764478758f2dbf350f5b0ebcb6a1eb334eff49) Merge pull request #25846 from BerriAI/litellm_bedrock_cache_start_negative_cost — _@ishaan-berri_
- [`9c0b73e`](https://github.com/BerriAI/litellm/commit/9c0b73e5f41f4f3e598d8fdc38c64910d80ce295) [Fix] should_create_missing_views returns False for reltuples=0 (falsy zero bug) — _@yuneng-berri_
- [`46a04e2`](https://github.com/BerriAI/litellm/commit/46a04e26f1a69ae20b47a6d815672f2b24a6fad3) fix: increment model_per_project TPM counter in async_log_success_event — _@shivamrawat1_
- [`6bf90fb`](https://github.com/BerriAI/litellm/commit/6bf90fb10a332629c45898a81413f175261e95c0) fix(mypy): cast msg and pending_delta in _promote_message_stop_usage to resolve union-attr and assignment errors — _@ishaan-berri_
- [`319839d`](https://github.com/BerriAI/litellm/commit/319839d8d6c3b545f87bf0cc1f0d890c0cf37711) Merge pull request #25494 from jlav/jl/helm-tpl-extra-containers — _@ishaan-berri_
- [`5c0d0cb`](https://github.com/BerriAI/litellm/commit/5c0d0cba7939046fa8cc0aa65686a2a7fc02620b) Merge remote-tracking branch 'origin/main' into litellm_feat-add-reload-flag-proxy — _@ryan-crabbe-berri_
- [`d042b44`](https://github.com/BerriAI/litellm/commit/d042b4418aeea2312fe85537f8092e8074103168) Merge pull request #25929 from BerriAI/litellm_pages_support_for_ocr — _@ishaan-berri_
- [`55d3229`](https://github.com/BerriAI/litellm/commit/55d3229a635dfe2024ac0d4dc2fec865ba2dafad) Merge pull request #25879 from BerriAI/litellm_chore-migrate-router-settings-page-off-of-tremor — _@ryan-crabbe-berri_
- [`2a76f10`](https://github.com/BerriAI/litellm/commit/2a76f10991b209fa5e1ed7c10d38db88e42559ec) Merge pull request #25749 from BerriAI/litellm_chore-migrate-guardrail-test-playground-off-tremor — _@ryan-crabbe-berri_
- [`545db8c`](https://github.com/BerriAI/litellm/commit/545db8c4e159fee569275eb6b2b17b114332153f) Merge remote-tracking branch 'origin/main' into litellm_chore-migrate-router-settings-page-off-of-tremor — _@ryan-crabbe-berri_
- [`746d10f`](https://github.com/BerriAI/litellm/commit/746d10f1dd04a173ad391077deffbe2eab731d36) Merge remote-tracking branch 'origin/main' into litellm_chore-migrate-guardrail-test-playground-off-tremor — _@ryan-crabbe-berri_
- [`18a5fe5`](https://github.com/BerriAI/litellm/commit/18a5fe546af06e3711b6f3592f96502ca06c8aa3) Merge pull request #25998 from BerriAI/litellm_/wonderful-bouman — _@yuneng-berri_
- [`ecf65f5`](https://github.com/BerriAI/litellm/commit/ecf65f5d61c3f8ccf0435f9e7f53dbbe6fd682cf) Merge remote-tracking branch 'origin/litellm_internal_staging' into litellm_yj_apr17 — _@yuneng-berri_
- [`48fb19b`](https://github.com/BerriAI/litellm/commit/48fb19b4fde2e00def22c6a8acf8ee59c92412a5) fix: align test assertion with additive merge semantics — _@ryan-crabbe-berri_
- [`e2e5b63`](https://github.com/BerriAI/litellm/commit/e2e5b63b413ec4116c90649cd80aef0f0f454c6a) fix(ui): revert submit guard to allow intentional extra_headers clearing — _@ryan-crabbe-berri_
- [`c288777`](https://github.com/BerriAI/litellm/commit/c28877757cf9aa9b83034b439ed0caeeb8a1fc7f) fix(ui): extra_headers not persisting on MCP server edit — _@ryan-crabbe-berri_
- [`ec564f5`](https://github.com/BerriAI/litellm/commit/ec564f5e0092d33fd8bb8c6e4cd4d09aa19808a1) fix: resolve mypy errors in multi-threshold budget alerts — _@ryan-crabbe-berri_
- [`e004876`](https://github.com/BerriAI/litellm/commit/e004876950d8292d9f134eaa0703e59e61652583) Merge remote-tracking branch 'origin/litellm_internal_staging' into litellm_/wonderful-bouman — _@yuneng-berri_
- [`6fe7903`](https://github.com/BerriAI/litellm/commit/6fe79035d9cddca10f17e5e6bb1a8c4274b126f1) [Fix] UI - Settings: clarify Max-subscription vs BYOK toggle descriptions (independent of each other) — _@yuneng-berri_
- [`acb4f89`](https://github.com/BerriAI/litellm/commit/acb4f8925400d4dc41c7f1de56f18f4db2977cbe) [Fix] UI - Models: clarify Anthropic api_base label and tooltip to prevent recursive-loop misconfiguration — _@yuneng-berri_
- [`e8c3340`](https://github.com/BerriAI/litellm/commit/e8c33409ad7d98ae950654ba45d53b7a4103521d) test: add coverage for get_project_model_rpm/tpm_limit and check_complete_credentials — _@shivamrawat1_
- [`37765e6`](https://github.com/BerriAI/litellm/commit/37765e679f0c6eb2cb5ca727f8f7162e28e8974c) Merge branch 'litellm_internal_staging' into litellm_pages_support_for_ocr — _@shivamrawat1_
- [`a449fc1`](https://github.com/BerriAI/litellm/commit/a449fc11a6ec8375d2676990f3d397c67d57989a) Merge branch 'litellm_internal_staging' into litellm_project_rate_limiting — _@shivamrawat1_
- [`fad884e`](https://github.com/BerriAI/litellm/commit/fad884e9a7ca989954e688e207b0eae747a86fbe) Merge branch 'litellm_internal_staging' into litellm_persist_default_router_end_budget — _@shivamrawat1_
- [`c1503d3`](https://github.com/BerriAI/litellm/commit/c1503d30884ee14fe7169fff16c2675ac49500e1) fix: escape user-controlled greeting in max budget alert email template — _@ryan-crabbe-berri_
- [`0b50a29`](https://github.com/BerriAI/litellm/commit/0b50a29bafff7b3abfa8d663f13942d7ee2cefc1) Merge pull request #25995 from BerriAI/litellm_fixBedrockTestMergeMarkers — _@yuneng-berri_
- [`a282ac4`](https://github.com/BerriAI/litellm/commit/a282ac417069b0364803a241d4718d8d066aa57a) [Fix] Remove unresolved merge conflict markers in bedrock test file — _@yuneng-berri_
- [`6fd49f1`](https://github.com/BerriAI/litellm/commit/6fd49f1da15a86716b595ef1d730263535018b13) fix: enforce project-level model-specific rate limits in parallel_request_limiter_v3 — _@shivamrawat1_
- [`44eb2ea`](https://github.com/BerriAI/litellm/commit/44eb2ea56e882c29f7ad17f9b9dee47c29efb183) fix: address Greptile review — empty recipients guard, type annotation, task pre-filter — _@ryan-crabbe-berri_
- [`bb9955b`](https://github.com/BerriAI/litellm/commit/bb9955beca7baee74d0339f075b237cbe812ad70) [Fix] Budget reset job now resets implicitly-created end users with NULL budget_id — _@krrish-berri-2_
- [`41a719a`](https://github.com/BerriAI/litellm/commit/41a719a53782015b40f0b721f89552662e4ea686) feat: add global fallback config, fix no-owner crash, improve email greeting — _@ryan-crabbe-berri_
- [`8936562`](https://github.com/BerriAI/litellm/commit/89365628c905852e73eafddf7f3542752c7a5511) [Fix] Persist default end-user budget_id to DB so budget reset job picks up implicitly created users — _@krrish-berri-2_
- [`11c3270`](https://github.com/BerriAI/litellm/commit/11c3270cdc3f91fe76a751bafd352d562579124f) Merge remote-tracking branch 'origin/litellm_internal_staging' into litellm_yj_apr17 — _@yuneng-berri_
- [`ea509ec`](https://github.com/BerriAI/litellm/commit/ea509ec6b99e87c6d23779c2c35da25906be1d0c) Run key budget alert check before max-budget enforcement — _@ryan-crabbe-berri_
- [`b9f5be8`](https://github.com/BerriAI/litellm/commit/b9f5be8956d0956ed6e9340050c73e86d218c5ce) Merge pull request #25922 from BerriAI/litellm_a2a_agent_acl — _@yuneng-berri_
- [`779a9fa`](https://github.com/BerriAI/litellm/commit/779a9fab8efcacf0557aee2239d4be752005f6bd) feat: add configurable multi-threshold budget alerts for virtual keys — _@ryan-crabbe-berri_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
