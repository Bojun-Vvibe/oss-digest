# BerriAI/litellm — 2026-03-10

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-09T23:59:59.000Z → 2026-03-10T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A heavy day of MCP and Responses API work dominates activity, with no formal releases, issues, or open PRs in window — all signal is in commits to `main`.

The biggest themes are **MCP server hardening and UI** and **OpenAI Responses API polish**. Ishaan landed several MCP fixes: an OAuth flow fix covering transport mapping, error messages, and discovery bypass (9d83a6f → `1c0c504`, #23300); a tightening that requires explicit opt-in for OAuth2 M2M `client_credentials` rather than auto-detecting from field presence (#23187) — worth reading if you deploy MCP, as it's a behavior change; plus chat-UI improvements showing per-server tools and OAuth2 badges (#23294, #23291), an OpenAPI MCP server quick-picker (#23200), and a new BYOM submission + admin review workflow (#23205). Milan added token auth for MCP servers (#23260), and Bedrock AgentCore MCP gained AWS SigV4 auth (#22782).

On the model/provider side, Chesars unified `finish_reason` mapping to OpenAI-compatible values while exposing `native_finish_reason` in `provider_specific_fields` (#22138), simplified the Perplexity Responses transformation from ~410 to ~50 lines (with a base_url `/v1` fix, `90a77c6`), added `supports_web_search` to 31 OpenAI Responses-API models (`6bc4cc8`), skipped harmful Vertex schema transforms for Gemini 2.0+ tool params (#23265), added a missing `gpt-5.3` entry (#23275, fixes #23267), and fixed thinking-block ordering across multiple web searches (#23093). Snowflake `tool_choice` is now coerced to object form (#23268), and `stream_chunk_builder` no longer crashes on unknown finish reasons (#22673).

Notable infra/safety: Postgres indexes added for the top CPU-burning queries (#23147); proxy startup now fails fast if Prisma migrate fails (`4714128`); `secret_fields` are stripped from guardrail responses before logging to spend logs/OTEL (#23162) — a real PII/secret leak fix worth noting. A new PANW Prisma AIRS guardrail also landed (#22999). The "policy builder" docs PR (#23287) was merged then immediately reverted (#23295). UI/admin work continued on virtual-keys table consolidation, Tremor→AntD migration (#23215), and tag usage cost panel zero fix (#23202).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`9d83a6f`](https://github.com/BerriAI/litellm/commit/9d83a6f814454a6b2f8374c16c571c31d58252c7) [Feature] UI - Keys: Improve VirtualKeysTable column display and usability — _@yuneng-jiang_
- [`1c0c504`](https://github.com/BerriAI/litellm/commit/1c0c504877d9662231a9cce4b32a7ce35679f594) fix(mcp): fix OpenAPI OAuth flow — transport mapping, error messages, discovery bypass (#23300) — _@ishaan-jaff_
- [`a2781f0`](https://github.com/BerriAI/litellm/commit/a2781f0db3f96434f735aecc99bc174eefa9e3de) fix(perplexity): remove models from shared TypedDict and restore error handling — _@Chesars_
- [`cf331c4`](https://github.com/BerriAI/litellm/commit/cf331c4fc546743de6a9b4f22ca62fa006d7de62) Merge pull request #23295 from BerriAI/revert-23287-docs_flow_builder — _@shivamrawat1_
- [`a71ba39`](https://github.com/BerriAI/litellm/commit/a71ba39b78eeecb0d04d0baa1e4a88af817a757c) Revert "policy builder" — _@shivamrawat1_
- [`90a77c6`](https://github.com/BerriAI/litellm/commit/90a77c6466f8b1182c9ed2d866bc2ec338e1cd85) fix(providers): correct perplexity base_url to include /v1 — _@Chesars_
- [`e0927d1`](https://github.com/BerriAI/litellm/commit/e0927d1bace011b4a0c6484b010cc2c80f6fc7cb) fix(tests): update Perplexity tests for simplified config — _@Chesars_
- [`5f5e47f`](https://github.com/BerriAI/litellm/commit/5f5e47fc24be86bb35eeb60a7037999a841ba65a) Merge pull request #22138 from Chesars/fix/unify-finish-reason-mapping — _@Chesars_
- [`e223b29`](https://github.com/BerriAI/litellm/commit/e223b29d31255325f698068f9b8438a7da76b9d2) fix(responses): add models to TypedDict and fix test state corruption — _@Chesars_
- [`55f4c8d`](https://github.com/BerriAI/litellm/commit/55f4c8d2033d891810b5f3253878acfef0b9147d) fix: address Greptile review feedback — _@Chesars_
- [`3bf91ed`](https://github.com/BerriAI/litellm/commit/3bf91ed9fed2b0b4a018cf8a706c17b5f6bbbe25) Merge pull request #23258 from Chesars/docs/openai-tool-search — _@Chesars_
- [`d501c33`](https://github.com/BerriAI/litellm/commit/d501c33a9dc5b25a3afbfab22df3bb07e77da355) feat(types): expose native_finish_reason in provider_specific_fields — _@Chesars_
- [`e7a9c1e`](https://github.com/BerriAI/litellm/commit/e7a9c1e1566d53d29acce37678c0b4e44b275935) docs(responses): remove unused json import from tool search example — _@Chesars_
- [`3b80b31`](https://github.com/BerriAI/litellm/commit/3b80b312a997228aef9a6cdd0e34553fc5d5cf23) feat(ui): show tools per MCP server in chat panel (#23294) — _@ishaan-jaff_
- [`6faad29`](https://github.com/BerriAI/litellm/commit/6faad2919a53f020b444a88895d5becf3261856d) feat(chat-ui): add MCP OAuth2 value prop and server auth badges (#23291) — _@ishaan-jaff_
- [`23e4f00`](https://github.com/BerriAI/litellm/commit/23e4f00eb38824210bb1ba673c6087b16eda3592) fix(responses): prioritize Python classes over JSON in get_provider_chat_config — _@Chesars_
- [`6bca746`](https://github.com/BerriAI/litellm/commit/6bca746d23a60f16c065e2dd7d9e82db4eb16fbb) Merge pull request #21601 from Chesars/feat/model-cost-aliases — _@Chesars_
- [`e4fddb9`](https://github.com/BerriAI/litellm/commit/e4fddb9f245465a13a59ee1f1fd18e506f6ab752) Merge pull request #23093 from MaxwellCalkin/fix/thinking-blocks-interleave-23047 — _@Chesars_
- [`b905e14`](https://github.com/BerriAI/litellm/commit/b905e1493be9eea7fa9bf6310a38b3ff7bc874f4) Merge pull request #23201 from Chesars/claude/brave-ritchie — _@Chesars_
- [`d349999`](https://github.com/BerriAI/litellm/commit/d34999900cfd15da72f825b3a10f154443e91316) Merge pull request #23265 from Chesars/fix/vertex-gemini2-tool-schema-minimal-transform — _@Chesars_
- [`375b766`](https://github.com/BerriAI/litellm/commit/375b7665ad103d7b453bc558b1d8e2dd53cdae3a) Merge pull request #23275 from Chesars/fix/add-gpt-5.3-model-entry — _@Chesars_
- [`8c12781`](https://github.com/BerriAI/litellm/commit/8c12781487c5a30d1e9c607cb124c238a9cf0a0d) feat(ui): OpenAPI MCP server support with popular API quick-picker (#23200) — _@ishaan-jaff_
- [`373e5e3`](https://github.com/BerriAI/litellm/commit/373e5e316b13fe06f21d58dd38fe546229bc22da) feat(mcp): BYOM — non-admin MCP server submission + admin review workflow (#23205) — _@ishaan-jaff_
- [`6a3b029`](https://github.com/BerriAI/litellm/commit/6a3b0290661ae42f04408dee0dd97e8a45b07098) Merge pull request #23271 from Chesars/docs/gpt54-reasoning-tools-limitation — _@Chesars_
- [`9100e16`](https://github.com/BerriAI/litellm/commit/9100e167765179c8561eb28c9c9cc27314b623a5) docs: pip venv upgrade workflow (#23290) — _@milan-berri_
- [`e88dc2e`](https://github.com/BerriAI/litellm/commit/e88dc2e428c5cb6b77e8799dfb441ad24c3b199c) feat(openai): add supports_web_search to o4-mini models — _@Chesars_
- [`7bac87e`](https://github.com/BerriAI/litellm/commit/7bac87e9b99dfb714838a5dc92428a4585004607) feat(openai): add supports_web_search to o4-mini models — _@Chesars_
- [`97c92cc`](https://github.com/BerriAI/litellm/commit/97c92cc84e019daab014083bfbc192e4ee82f467) Merge pull request #23287 from BerriAI/docs_flow_builder — _@shivamrawat1_
- [`592232e`](https://github.com/BerriAI/litellm/commit/592232e8350758f97b3271b348f15f18225f71d8) Update docs/my-website/docs/proxy/guardrails/guardrail_pipeline_flow_builder.md — _@shivamrawat1_
- [`f3844d8`](https://github.com/BerriAI/litellm/commit/f3844d835607dfacfe85867d8efe0eae5568a3b7) Update docs/my-website/docs/proxy/guardrails/guardrail_pipeline_flow_builder.md — _@shivamrawat1_
- [`bead0b7`](https://github.com/BerriAI/litellm/commit/bead0b7d908c9dd353e94d5946a6133a36383a2c) [Test] UI - Logs: Add unit tests for 5 untested view_logs components — _@yuneng-jiang_
- [`926a0df`](https://github.com/BerriAI/litellm/commit/926a0df9b08f26dab050d97e9c7d9314b7e659d7) Merge main into feat/openai-like-responses-api — _@Chesars_
- [`2315d4b`](https://github.com/BerriAI/litellm/commit/2315d4b73c66d5492d53158c0eceba4c180b642b) fix: resolve merge conflicts with staging branch — _@Chesars_
- [`2341a38`](https://github.com/BerriAI/litellm/commit/2341a38c08671f71281f8c0bd763bc60b46e22e4) fix(snowflake): transform tool_choice string to object format (#23268) — _@stevejaker_
- [`95ef97b`](https://github.com/BerriAI/litellm/commit/95ef97bd34f526127ff50140e3c195e8c5af1a09) docs: expand aliases section in add_model_pricing guide — _@Chesars_
- [`effaef3`](https://github.com/BerriAI/litellm/commit/effaef3cfb7d8e208f7fae49de67df27259660c7) fix: remove duplicate supports_web_search keys — _@Chesars_
- [`7a0c8af`](https://github.com/BerriAI/litellm/commit/7a0c8af458af4514e48ab68043b11ec7c6c9f4da) merge: resolve conflicts with upstream/main — _@Chesars_
- [`3fe4829`](https://github.com/BerriAI/litellm/commit/3fe48296768896883ddc20438ff09266a968f310) fix: include redacted_thinking in list-content thinking block detection — _@Chesars_
- [`70fca22`](https://github.com/BerriAI/litellm/commit/70fca22f68c078880cc60f1d4f7102ae6bfc3222) feat(panw-prisma-airs): PANW Prisma AIRS guardrail with apply_guardrail support (#22999) — _@jroberts2600_
- [`6bc4cc8`](https://github.com/BerriAI/litellm/commit/6bc4cc8f0f93823e7e6acf487636c17c9d92f205) feat(openai): add supports_web_search to OpenAI models with Responses API — _@Chesars_
- [`6469de9`](https://github.com/BerriAI/litellm/commit/6469de9516093b44d8e5984bae3f52c6817fc277) fix: address Greptile review feedback — _@Chesars_
- [`fa330ed`](https://github.com/BerriAI/litellm/commit/fa330ed96bb5434128582892c3c2e8e8bdf18cd1) policy builder — _@shivam_
- [`af297dc`](https://github.com/BerriAI/litellm/commit/af297dc082aa5b688f0385e54f421ea979261070) fix(openai): clean up gpt-5.3 model entry fields — _@Chesars_
- [`7ccb14c`](https://github.com/BerriAI/litellm/commit/7ccb14cab4ca3401cccab986db7321e224bb6d96) feat: add model cost aliases expansion support — _@Chesars_
- [`ffc89e4`](https://github.com/BerriAI/litellm/commit/ffc89e4ef6334e78617f622d1e2a21153279b928) fix(mcp): add AWS SigV4 auth for Bedrock AgentCore MCP servers (#22782) — _@michelligabriele_
- [`9543d78`](https://github.com/BerriAI/litellm/commit/9543d785b59c95eb801a5f2b909f53bba0aae1b5) fix(mcp): don't auto-detect M2M OAuth from field presence (#23187) — _@ishaan-jaff_
- [`26febf1`](https://github.com/BerriAI/litellm/commit/26febf11a777f986d5d97e0a8a40305d736b845c) Merge pull request #23202 from mubashir1osmani/fix/tag-usage-cost-panel-zero — _@mubashir1osmani_
- [`88d0f9d`](https://github.com/BerriAI/litellm/commit/88d0f9d8348db8928849b4807c13c91de2f0015e) added comments — _@mubashir1osmani_
- [`6a59ec5`](https://github.com/BerriAI/litellm/commit/6a59ec5ddf715749cf8d57769f4b1237c8e73f71) fix: anthropic prompt caching returns a string instead of an int — _@mubashir1osmani_
- [`0a32466`](https://github.com/BerriAI/litellm/commit/0a324663fb0cea8d04d9ad4320a956c9dd129e97) Merge pull request #23215 from BerriAI/litellm_migrate_user_buttons_tremor_to_antd — _@ryan-crabbe_
- [`b02ecc7`](https://github.com/BerriAI/litellm/commit/b02ecc7807866c1a70d167b383d4dac5d91bbc83) Merge pull request #23260 from milan-berri/feat/mcp-token-auth-support — _@yuneng-jiang_
- [`4c9220b`](https://github.com/BerriAI/litellm/commit/4c9220bdec68d5f6f551077716351db193c627c9) feat(mcp): add token authentication support for MCP servers — _@milan-berri_
- [`336fb0c`](https://github.com/BerriAI/litellm/commit/336fb0cfebcbd2c7b1436e248776954893d61742) fix(security): strip secret_fields from guardrail logging response (#23162) — _@milan-berri_
- [`810de55`](https://github.com/BerriAI/litellm/commit/810de556bd84a0f69a437f1723f94765ddce114b) fix(streaming): map unknown finish_reason values to finish_reason_unspecified to prevent ValidationError in stream_chunk_builder (#22673) — _@xykong_
- [`0680a97`](https://github.com/BerriAI/litellm/commit/0680a974092a57cb3c575f5ba126b3c54a762bcb) fix: handle list-content messages in thinking block interleaving — _@Chesars_
- [`424a965`](https://github.com/BerriAI/litellm/commit/424a96580babffeb67acc003cea4f7a7d5e21f77) Merge pull request #22627 from BerriAI/litellm_presidio_antropic_edge_case — _@Harshit28j_
- [`e1c2c36`](https://github.com/BerriAI/litellm/commit/e1c2c36f670b66c9b8fb8d30ea4d2edeb817d4de) Merge pull request #23259 from BerriAI/litellm_claude_missing_reqs — _@Harshit28j_
- [`fdb0a46`](https://github.com/BerriAI/litellm/commit/fdb0a46242547585c912b3e3666c2e3a5037e5bd) Merge pull request #23209 from BerriAI/litellm_silent_metrics — _@Harshit28j_
- [`a7e9bca`](https://github.com/BerriAI/litellm/commit/a7e9bca10349105fd410dc3eee93e6c72e6b7b96) Merge pull request #23214 from BerriAI/litellm_deployment_helm_chart — _@Harshit28j_
- [`8c2c379`](https://github.com/BerriAI/litellm/commit/8c2c379cb5c083cbcc9c535d3456917967fec656) fix(openai): add missing gpt-5.3 model entry — _@Chesars_
- [`323b473`](https://github.com/BerriAI/litellm/commit/323b473835550676b42eb72a290d11590055ad1d) fix: add missing indexes for top CPU-consuming queries (#23147) — _@CAFxX_
- [`d232d0d`](https://github.com/BerriAI/litellm/commit/d232d0de6c22ef09912086d2ca19f0dde1f28794) docs(openai): document gpt-5.4 reasoning_effort + tools limitation — _@Chesars_
- [`08d81f5`](https://github.com/BerriAI/litellm/commit/08d81f5d7c7239cbf065e8de45506184ba917742) fix(vertex): shallow copy parameters before mutating in _build_vertex_schema_for_gemini_2 — _@Chesars_
- [`2b093aa`](https://github.com/BerriAI/litellm/commit/2b093aa7961c055a5ffec4f2476d6870a0b6cc9d) Merge pull request #23196 from CAFxX/docs/claude-md-db-performance-guidelines — _@RheagalFire_
- [`a9c3095`](https://github.com/BerriAI/litellm/commit/a9c3095cc539c446884649fe6855b44861182c96) fix(vertex): skip harmful schema transforms for Gemini 2.0+ tool parameters — _@Chesars_
- [`a6cb510`](https://github.com/BerriAI/litellm/commit/a6cb510703a2cf2cb91e35e881ed90d48b4416d5) merge: resolve conflicts between main and litellm_oss_staging_03_04_2026 — _@Chesars_
- [`8fac042`](https://github.com/BerriAI/litellm/commit/8fac04208d046ca6b432ef7229090553e9280746) docs(responses): add tool_search bridge examples for chat completions — _@Chesars_
- [`17804ed`](https://github.com/BerriAI/litellm/commit/17804edc7887343adfce25606203de3ab465376c) Update litellm/utils.py — _@Harshit28j_
- [`81bd62e`](https://github.com/BerriAI/litellm/commit/81bd62e8b03cac3bdbc532f061689eb2e9b36052) Update litellm/utils.py — _@Harshit28j_
- [`558523f`](https://github.com/BerriAI/litellm/commit/558523fd75b730041c0f800e8fa435e647d63b85) fix: req changes by greptile — _@Harshit28j_
- [`2f5a553`](https://github.com/BerriAI/litellm/commit/2f5a553a7d8e8cad9035f3b3c8e22cd6b16d1732) test: assert setup_database called with correct args — _@Harshit28j_
- [`8c3d6db`](https://github.com/BerriAI/litellm/commit/8c3d6db4824dbf0b5b4ffd8d7209b73d5f6e2c8e) fix: claude code req traces on langfuse — _@Harshit28j_
- [`bec12db`](https://github.com/BerriAI/litellm/commit/bec12db6358e0ef7117dbd634b97a8d8e214ce8d) docs(responses): add tool_search & namespaces section for gpt-5.4 — _@Chesars_
- [`a788b21`](https://github.com/BerriAI/litellm/commit/a788b21092d02d58b16c16a573f4ea649306dac8) Merge pull request #23243 from BerriAI/litellm_bedrock-completion-tokens-details — _@Sameerlite_
- [`cd80213`](https://github.com/BerriAI/litellm/commit/cd80213f1cb63d461967ad91b3f1336558fb8527) Merge pull request #23151 from BerriAI/litellm_preserve-reasoning-summary-for-responses-api — _@Sameerlite_
- [`b3c4326`](https://github.com/BerriAI/litellm/commit/b3c43268451785c1be792a13a56060b06b061fb1) Merge pull request #23131 from BerriAI/litellm_vertex_ai_extra_body_cache_fix — _@Sameerlite_
- [`aae2deb`](https://github.com/BerriAI/litellm/commit/aae2deb839c8f39f82a58140f2ffa97b42d97a61) fix: remove redundant import and add test for startup failure — _@Harshit28j_
- [`4714128`](https://github.com/BerriAI/litellm/commit/4714128da5f59e993a21f53518dc77a6eca5dd9c) fix: fail proxy startup if prisma migrate fails — _@Harshit28j_
- [`9bc7357`](https://github.com/BerriAI/litellm/commit/9bc7357e7ca262aa91b2eb5462b72e8953ce983e) Merge pull request #23222 from BerriAI/litellm_oss_staging_02_18_2026 — _@Sameerlite_
- [`b211b67`](https://github.com/BerriAI/litellm/commit/b211b67ceae954f97ff75819a0adc5ffc8f2ceaa) Merge pull request #23164 from BerriAI/litellm_oss_staging_03_09_2026 — _@Sameerlite_
- [`d0d1291`](https://github.com/BerriAI/litellm/commit/d0d1291c15211a6e12494ee190231f53062d0bd6) Merge pull request #22628 from BerriAI/litellm_oss_staging_03_02_2026 — _@Sameerlite_
- [`9bee76c`](https://github.com/BerriAI/litellm/commit/9bee76c30da4dd13461d8f9dcb2ecd51989a86f7) Merge pull request #23253 from BerriAI/main — _@Sameerlite_
- [`72fc2f7`](https://github.com/BerriAI/litellm/commit/72fc2f77cfa1b781799d3290f70cb1c6d6492c65) Merge pull request #23252 from BerriAI/main — _@Sameerlite_
- [`9f15a99`](https://github.com/BerriAI/litellm/commit/9f15a9915ec50874cfc843b26a0d26b017b784b4) Merge branch 'main' into litellm_langfuse_key_leakage — _@Harshit28j_
- [`3f17a63`](https://github.com/BerriAI/litellm/commit/3f17a63b8135fdb808bc58fc5ce8c931ec470967) Merge branch 'main' into litellm_oss_staging_03_02_2026 — _@Sameerlite_
- [`20bf3aa`](https://github.com/BerriAI/litellm/commit/20bf3aa8070a4dc150bb8edaddb6bd3306b83a53) fix: pop sensitive keys from langfuse — _@Harshit28j_
- [`631aefe`](https://github.com/BerriAI/litellm/commit/631aefea18e407922122b7ffc10a6d672801a3a5) fix: req changes on feedback from greptile — _@Harshit28j_
- [`212059c`](https://github.com/BerriAI/litellm/commit/212059cd118029f5f65df2883ad662f02730c6b9) fix: presidio improvements — _@Harshit28j_
- [`12de8a7`](https://github.com/BerriAI/litellm/commit/12de8a724f578a68d83529839b6b2718e6df4a98) fix: clean approach instead of UUID — _@Harshit28j_
- [`14ecc79`](https://github.com/BerriAI/litellm/commit/14ecc79760b50d5d857923840cd036e46b64b8ff) fix: req changes greptile hallucinates — _@Harshit28j_
- [`a28fbba`](https://github.com/BerriAI/litellm/commit/a28fbba3b17d5a4014f5624361b4ad6740b2c467) fix: req changes to improve score — _@Harshit28j_
- [`1bfd88a`](https://github.com/BerriAI/litellm/commit/1bfd88a33caec6c16aab4d7a0847c33640376781) fix: req changes — _@Harshit28j_
- [`1ba42d1`](https://github.com/BerriAI/litellm/commit/1ba42d1d994177f5009fd33cb647f4b0018c311f) fix: address req changes — _@Harshit28j_
- [`861db11`](https://github.com/BerriAI/litellm/commit/861db111a08ecd58d825ef2e86cf07d52374b008) fix: presidio edge case with antropic handle on pii token leak — _@Harshit28j_
- [`94b0020`](https://github.com/BerriAI/litellm/commit/94b002066e3ae7fcd105890715496bae374bd5a6) Merge pull request #23244 from BerriAI/litellm_skills_api_folder_name_match — _@Sameerlite_
- [`88c4079`](https://github.com/BerriAI/litellm/commit/88c4079b1670030c5c097715eacfb47c3c8a975b) fix(skills): match zip folder name to skill name in SKILL.md for Anthropic API — _@Sameerlite_
- [`0122abf`](https://github.com/BerriAI/litellm/commit/0122abfa2ba8b173c3e80b0a883669c290d5864f) fix(bedrock): populate completion_tokens_details in converse _transform_usage — _@Sameerlite_
- [`afb117f`](https://github.com/BerriAI/litellm/commit/afb117f5d325b7c4f3a5afb12a08f953d8eaaf7e) fix: req changes from greptile — _@Harshit28j_
- [`b731e43`](https://github.com/BerriAI/litellm/commit/b731e432f88ee026f38ef93a6974782c62f68d9f) feat: record silent metrics — _@Harshit28j_
- [`3e1f343`](https://github.com/BerriAI/litellm/commit/3e1f343d1ad0cd2fcbc52aa1481a3eec2b38269b) Merge pull request #23242 from BerriAI/litellm_fix_redaction_and_charity_engine_provider — _@Sameerlite_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
