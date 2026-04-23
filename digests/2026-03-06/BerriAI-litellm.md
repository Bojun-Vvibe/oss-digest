# BerriAI/litellm — 2026-03-06

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-05T23:59:59.000Z → 2026-03-06T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is the **5.4 release prep around OpenAI's GPT-5.4 family** plus a sizable **Hashicorp Vault config-override backend** landing on the proxy.

GPT-5.4 work dominates commits: flex pricing was merged via #22992 (`6034efb`), `gpt-5.4-pro` was added to the model map at $30/$180 per 1M with a 1.05M context window (#22954), a 272K-tier pricing rule (2x input / 1.5x output for prompts >272K tokens) was added (`d8f139f`), and `reasoning_effort` is now dropped automatically when tools are present because function calls aren't supported alongside it (`14b52b1`). Reasoning support is also generalized: a `_supports_factory` lookup with new `supports_none_reasoning_effort` / `supports_xhigh_reasoning_effort` flags replaces hardcoded checks (#22953), reasoning_effort dicts are normalized to strings for chat completions (#22981), and Gemini 3.1-flash now handles `minimal` reasoning_effort (#22920). Older 5.x models (`gpt-5.1/5.2/5.3`) gained `supports_web_search` (#22934), and ChatGPT 5.3/5.4 aliases were added (#22734).

On the proxy/enterprise side, Ryan Crabbe landed a multi-commit **Hashicorp Vault config-override backend** with CRUD endpoints, background sync, an admin UI panel, and a fix adding `CONFIG_OVERRIDES` to `SupportedDBObjectType` so polling isn't silently skipped (`21718d2`, `c98da10`, `537be61`). Other notable proxy fixes: BYOK / client-side provider key precedence for Anthropic `/v1/messages` via `forward_llm_provider_auth_headers` (#22964), prevention of LiteLLM proxy auth headers leaking to upstream providers (`e9d797b`), Azure AI router flat cost ($0.14/M input) when responses contain the actual model (#22957), Vertex AI WIF auth now accepts explicit AWS credentials (#21472), and a2a custom headers (#22888).

Bug fixes worth noting: batch list no longer shows stale "validating" status after completion because the `file_object` JSON column wasn't being updated (#22982); team usage spend was being truncated by un-paginated UI fetches against a 1000-row Prisma page (#22938); admin viewers couldn't list all organizations due to a role check (#22940); key expiry now accepts `null` to never expire (#22956). A new **ChatGPT-like Chat UI with MCP tools and streaming** also landed (#22937, with routing fixes in #22945), and a large OpenTelemetry cleanup (`0b67b64`) removes redundant span attributes, fixes orphaned guardrail traces, and restores missing response IDs.

No releases, PRs, or issues were reported in the window — all activity is direct commits to staging.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`0b67b64`](https://github.com/BerriAI/litellm/commit/0b67b642cbc85ed9064159f308afb47eb86ef698) Fix OTEL span redundancy, orphaned guardrail traces, and missing response IDs — _@Harshit28j_
- [`3a2cba4`](https://github.com/BerriAI/litellm/commit/3a2cba43dc45fd65ef087b5338c04a6e5764f446) Merge pull request #22992 from BerriAI/litellm_5.4_relase_flex — _@Sameerlite_
- [`6034efb`](https://github.com/BerriAI/litellm/commit/6034efb9c65c7d7cd2e2ea517c1a79020bea1e8f) Add flex pricing — _@Sameerlite_
- [`11e2bdb`](https://github.com/BerriAI/litellm/commit/11e2bdbaecea389c6721020d2485c39c8d954663) Merge pull request #22981 from BerriAI/litellm_reasoning-effort-dict-normalization — _@Sameerlite_
- [`7d2681f`](https://github.com/BerriAI/litellm/commit/7d2681fa36ae95cb1aaeaec440e6958c7d602bde) Merge pull request #22982 from BerriAI/litellm_fix_batch_stale_status — _@ryan-crabbe_
- [`5e34fdc`](https://github.com/BerriAI/litellm/commit/5e34fdce774362b70ad6f8b9675a3cfc16ce2e01) feat(vertex_ai): support explicit AWS credentials for WIF auth (#21472) — _@michelligabriele_
- [`c4db53a`](https://github.com/BerriAI/litellm/commit/c4db53a98a65474ffb3a58c795211fb858d8e057) Address review feedback: remove dead code, add error handling, strengthen test assertions — _@ryan-crabbe_
- [`7d524fe`](https://github.com/BerriAI/litellm/commit/7d524fe5a81a308cc84173d6e266f25a567efeb8) Fix model map — _@Sameerlite_
- [`dd7ab3f`](https://github.com/BerriAI/litellm/commit/dd7ab3f01f3c4e2cd94beb041c76628614a0904d) Fix model map — _@Sameerlite_
- [`a796780`](https://github.com/BerriAI/litellm/commit/a7967801b00ebb1cdfea420c0e3bb06b2ddc4198) Fixed o file — _@Sameerlite_
- [`91fc91c`](https://github.com/BerriAI/litellm/commit/91fc91c9c34e60dd85156edc0bd1ceecae2f2078) Fixed o file — _@Sameerlite_
- [`d8f139f`](https://github.com/BerriAI/litellm/commit/d8f139fe4dfadb2f60727bf5e8c6ccbf0196917c) feat(openai): add 272K tier pricing for GPT-5.4/5.4-pro — _@Sameerlite_
- [`3d55f7f`](https://github.com/BerriAI/litellm/commit/3d55f7f6abf60bd21ce02e70a1c6d79fd15e9e13) Fix batch list showing stale "validating" status after completion — _@ryan-crabbe_
- [`14b52b1`](https://github.com/BerriAI/litellm/commit/14b52b131883f87f01fcacd1c6553c149e701da3) feat(openai): drop reasoning_effort for gpt-5.4 when tools present — _@Sameerlite_
- [`b6344c3`](https://github.com/BerriAI/litellm/commit/b6344c319b82d84f6fe8e34a90ab9948ad4feb0d) feat(openai): normalize reasoning_effort dict to string for chat completion API — _@Sameerlite_
- [`8b0375f`](https://github.com/BerriAI/litellm/commit/8b0375f99c59d824d701a8950f30080cf2003f07) Merge pull request #22888 from BerriAI/litellm_a2a-custom-headers — _@Sameerlite_
- [`447b760`](https://github.com/BerriAI/litellm/commit/447b760a83db454a4a969defba04068164013212) Merge pull request #22964 from BerriAI/litellm_claude-code-byok — _@Sameerlite_
- [`e9d797b`](https://github.com/BerriAI/litellm/commit/e9d797bd8d4e6cafe7877041f6d7511a33d6e54a) fix(proxy): do not forward Authorization header to LLM provider when used for LiteLLM proxy auth — _@Sameerlite_
- [`159c477`](https://github.com/BerriAI/litellm/commit/159c477c18f938d1864cf7dd30b0d657adfe3250) feat(proxy): client-side provider API key precedence for Anthropic /v1/messages — _@Sameerlite_
- [`118cad8`](https://github.com/BerriAI/litellm/commit/118cad8b5433c1fbe9713625609aa7049c190ee5) Merge pull request #22957 from BerriAI/litellm_azure-model-router-cost-tracking — _@Sameerlite_
- [`c23eb5a`](https://github.com/BerriAI/litellm/commit/c23eb5afc6a7a408712328459643842701667d9a) feat(azure_ai): add router flat cost when response contains actual model — _@Sameerlite_
- [`0d699d0`](https://github.com/BerriAI/litellm/commit/0d699d06f161cd5500547fdeb3f7c7b43e97b5f7) Merge pull request #22953 from BerriAI/litellm_gpt5_reasoning_model_map — _@Sameerlite_
- [`6ba2e9f`](https://github.com/BerriAI/litellm/commit/6ba2e9f10f0d7c309c2f1c1ff56602ee006dbc68) feat(gpt-5): add supports_none_reasoning_effort and supports_xhigh_reasoning_effort to model cost map — _@Sameerlite_
- [`8523bb6`](https://github.com/BerriAI/litellm/commit/8523bb6b48052479e0bbbd5c4aa19a9a446b638e) Merge pull request #22956 from BerriAI/litellm_key_null_duration — _@yuneng-jiang_
- [`e468b02`](https://github.com/BerriAI/litellm/commit/e468b0278ff41f9f4a5a6464af93d77a32ef624c) [Fix] Key Expiry Default Duration - support null to never expire — _@yuneng-jiang_
- [`99c4f3c`](https://github.com/BerriAI/litellm/commit/99c4f3cbeacc59408820237b8f672e8bb2a5ac96) Merge pull request #22938 from BerriAI/litellm_fix_team_usage_spend — _@yuneng-jiang_
- [`8b2dd4f`](https://github.com/BerriAI/litellm/commit/8b2dd4f65a54cd4f79cfeea4dd26d4a334e443c8) fix(pricing): add supports_web_search for OpenAI gpt-5.1/5.2/5.3 models (#22934) — _@yudelevi_
- [`ad59aa0`](https://github.com/BerriAI/litellm/commit/ad59aa02bbb086d1c1f57bc0ce0a9c275f81383f) Merge pull request #22954 from BerriAI/litellm_gpt-5-4-pro-model-map — _@Sameerlite_
- [`0505034`](https://github.com/BerriAI/litellm/commit/050503469a372632d58fbf2dd320e00e97309b6b) feat(openai): add gpt-5.4-pro to model map — _@Sameerlite_
- [`83e237b`](https://github.com/BerriAI/litellm/commit/83e237bac2477c9fa0afc9aed1cd1032b978c821) fix(chat): fix /ui/chat routing, Suspense boundary, serverRootPath support (#22945) — _@ishaan-jaff_
- [`bc481f4`](https://github.com/BerriAI/litellm/commit/bc481f49d3c1adacce71c1941315ecbdc286f7af) Merge pull request #22895 from BerriAI/litellm_o-series-generalize-detection — _@Sameerlite_
- [`91a8937`](https://github.com/BerriAI/litellm/commit/91a89377051bdb126139d0aafef4127108a68639) Merge pull request #22750 from BerriAI/litellm_mcp_doc_update — _@Sameerlite_
- [`20ec949`](https://github.com/BerriAI/litellm/commit/20ec949cf17d1143c988a18945a03ba38a23eedd) Merge pull request #22734 from vincentkoc/vincentkoc-code/chatgpt-53-oauth-models — _@Sameerlite_
- [`57596ca`](https://github.com/BerriAI/litellm/commit/57596cab1a2b5966e99c4e5e27b7763996d5607e) Merge pull request #22920 from Varad2001/litellm_gemini_3.1_reasoning_effort — _@Sameerlite_
- [`31c43ba`](https://github.com/BerriAI/litellm/commit/31c43ba187da2c54a8dc0968f0f01b93b3646498) Merge pull request #22948 from BerriAI/litellm_vertex-paygo-docs — _@Sameerlite_
- [`baa5d72`](https://github.com/BerriAI/litellm/commit/baa5d7262da7a08900719eecfe62b2b1f45cae22) docs: add PayGo/priority cost tracking for Gemini Vertex AI — _@Sameerlite_
- [`ec600aa`](https://github.com/BerriAI/litellm/commit/ec600aa70a06e3c0d92467472f5e75e474b79485) feat(ui): add Chat UI — ChatGPT-like interface with MCP tools and streaming (#22937) — _@ishaan-jaff_
- [`bc23c08`](https://github.com/BerriAI/litellm/commit/bc23c08d03118cb70d14a6f8601be25459bc964d) Merge pull request #22940 from BerriAI/litellm_fix_admin_viewer_org_list — _@ryan-crabbe_
- [`73a8e8c`](https://github.com/BerriAI/litellm/commit/73a8e8cf07535cbd5ab648ed0939219a70543591) fix(vault): resolve merge conflict, use async auth, include error details — _@ryan-crabbe_
- [`8d539db`](https://github.com/BerriAI/litellm/commit/8d539db108dc55cca303e8f2c6757243e7dfaa1e) Fix admin viewer unable to see all organizations — _@ryan-crabbe_
- [`11f83ff`](https://github.com/BerriAI/litellm/commit/11f83ff5224ffd7998420470fd85f1546f536bc5) Merge branch 'main' into litellm_hashicorp_vault_backend — _@ryan-crabbe_
- [`c953388`](https://github.com/BerriAI/litellm/commit/c953388927d44be1877b70f6fb39a16b07e7c11e) fix(vault): remove approle_role_id from sensitive fields, use async HTTP for test_connection — _@ryan-crabbe_
- [`537be61`](https://github.com/BerriAI/litellm/commit/537be618d4234826fcbb2a654fa2682971f3dc72) fix(types): add CONFIG_OVERRIDES to SupportedDBObjectType enum — _@ryan-crabbe_
- [`d0e4804`](https://github.com/BerriAI/litellm/commit/d0e480414ce23c2c278d1c7f5885afc6d1dd1e4e) Fix team usage spend showing lower than expected values — _@yuneng-jiang_
- [`53a1e31`](https://github.com/BerriAI/litellm/commit/53a1e31729b105cb61decd359031319ae0205c10) feat(spend-logs): add truncation note when error logs are truncated for DB storage (#22936) — _@Krish Dholakia_
- [`21718d2`](https://github.com/BerriAI/litellm/commit/21718d208d78eec53e668891956bffc7d5d7fd32) feat: Hashicorp Vault config override backend endpoints — _@ryan-crabbe_
- [`92b3160`](https://github.com/BerriAI/litellm/commit/92b3160206b89543fe970db4b5a1402b20d4cd81) Merge pull request #22858 from BerriAI/litellm_rbac_vector_agents — _@yuneng-jiang_
- [`c98da10`](https://github.com/BerriAI/litellm/commit/c98da10b842062fcba669e305bc84e5832a0e71c) feat: Hashicorp Vault config UI components — _@ryan-crabbe_
- [`d904b92`](https://github.com/BerriAI/litellm/commit/d904b92f5a6488e501093ad584414b4ebc2e776f) [Fix] Sync UI settings into general_settings on proxy startup — _@yuneng-jiang_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
