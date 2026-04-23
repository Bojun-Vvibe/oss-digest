# BerriAI/litellm — 2026-03-17

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-16T23:59:59.000Z → 2026-03-17T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A heavy commit day on `main` with no formal releases or new PRs/issues in the window — activity centers on bug fixes across providers, a new guardrail integration, and proxy-key hardening.

**Headline:** A new aiohttp session auto-recovery landed in the proxy (#23806, `7b66c97`), fixing a long-standing failure mode where a closed shared session permanently broke the proxy after network blips, idle timeouts, or Redis failovers. Pair this with a follow-up `asyncio.Lock` to prevent connector leaks during concurrent recreation (`ab4fda2`, `ef22144`).

**New integrations & models:**
- Akto Guardrails support added end-to-end (#23250, `bed44f5`), including frontend wiring; DynamoAI guardrail registration also fixed (#23752).
- Initial `gpt-5.4 mini`/`nano` model-map entries (`1b91e16`, `a286050`, `8a8047e`).
- Vertex AI batch cancel support (`0bc609a`, `d8e3abf`).
- File search for Responses API — Phase 1 native passthrough + Phase 2 emulated fallback for non-OpenAI providers (`c7352515`), with several follow-up fixes (`289f698`, `e6d5e3a`, `5692db8`).

**Notable fixes worth reading:**
- Anthropic: `cache_control` was being dropped on file/document blocks — fixed (`20f8d41`, `d0c5f49`, fixes #23873); `refusal` stop_reason now correctly maps to `content_filter` instead of silently becoming `stop` (#23899).
- Vertex/Gemini: `vertex_count_tokens_location` no longer hard-overridden to `us-central1` for Claude (`8f015e2`); streaming `finish_reason` for `gemini-3.1-flash-lite-preview` correctly reports `tool_calls` instead of `stop` (#23895); tool_result image support for `/v1/messages` (#23724).
- Redis cluster cache startup_nodes ordering bug (#23480).
- Fireworks: `#transform=inline` no longer corrupts base64 data URLs (#23729, fixes #23583).
- Langsmith: avoid "no running event loop" during sync init (#23727).
- DeepSeek-on-Vertex `supported_regions` corrected (#23864, fixes #23859); `gpt-4-0314` restored to model prices (#23753).
- Proxy `max_budget` env var now coerced to float (#23855, fixes #23843).

**Proxy/UI hardening:** Internal users can no longer create unbound/invalid keys via `key/generate` or `key/update` (`bc752fb`); key_alias re-validation skipped when unchanged so legacy aliases aren't blocked (#23798); new "Disable custom Virtual key values" UI toggle (#23812); CSV export on Global Usage page fixed (#23819).

**Reverted:** "langfuse trace leak key on model params" (#22188) was reverted same-day (#23868) — worth tracking if you depend on Langfuse logging.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`96bd1a3`](https://github.com/BerriAI/litellm/commit/96bd1a3b745f378212a04eb6a38f124c1042c43b) Merge branch 'Arindam200:v0-docs' into v0-docs — _@Astrodevil_
- [`12822f1`](https://github.com/BerriAI/litellm/commit/12822f14ab93037e991de7233d578812bc6fd0f0) docs: sidebar updates, letta resources links, Google GenAI SDK, cost tracking order — _@Astrodevil_
- [`16fecb0`](https://github.com/BerriAI/litellm/commit/16fecb06c1efdf2921caaaa8fd19fee11f04eb9b) docs: update Docker quick start guide for LiteLLM proxy — _@Arindam200_
- [`c6e9a2a`](https://github.com/BerriAI/litellm/commit/c6e9a2a40f3b8dec7cd605e560622c31162f3264) Merge branch 'main' into fix/cache-control-params-anthropic-document-file-message-blocks — _@kelvin-tran_
- [`8f015e2`](https://github.com/BerriAI/litellm/commit/8f015e2db2ebb16598bf15e14e0e9d9d8509a2d4) fix(vertex): respect vertex_count_tokens_location for Claude count_tokens — _@Chesars_
- [`20f8d41`](https://github.com/BerriAI/litellm/commit/20f8d413e59098bad5410e2d737e54c6beba40bd) fix(anthropic): preserve cache_control on file-type content blocks — _@Chesars_
- [`f9f7d0a`](https://github.com/BerriAI/litellm/commit/f9f7d0a21cb045efbc39918e64317678e79261b7) docs: simplify sidebar labels and remove outdated project links — _@Arindam200_
- [`1f5a67a`](https://github.com/BerriAI/litellm/commit/1f5a67ab459055b748e6ae331a7fbed4d76a0a9f) Merge pull request #23895 from Chesars/fix/streaming-tool-call-finish-reason-empty-content — _@Chesars_
- [`c1db67a`](https://github.com/BerriAI/litellm/commit/c1db67ab675022b0f0f27ca044461f6751a07b7a) Merge pull request #23899 from Chesars/fix/map-anthropic-refusal-finish-reason — _@Chesars_
- [`bed44f5`](https://github.com/BerriAI/litellm/commit/bed44f5fe53cff86b0818844db3be05a3bc77719) Add Akto Guardrails to LiteLLM (#23250) — _@rzeta-10_
- [`d0c5f49`](https://github.com/BerriAI/litellm/commit/d0c5f494a8bf99a078561a939cb0e557559c614f) fix: cache_control directive dropped anthropic document/file blocks — _@kelvin-tran_
- [`79e6005`](https://github.com/BerriAI/litellm/commit/79e600507682a976aa246842301c2d562bf48c28) docs: enhance gateway and SDK quickstart documentation — _@Arindam200_
- [`8b4a74a`](https://github.com/BerriAI/litellm/commit/8b4a74a69c14b1a806d7e332cf371303de8c52f2) fix(core): map Anthropic 'refusal' finish reason to 'content_filter' — _@Chesars_
- [`0c28b47`](https://github.com/BerriAI/litellm/commit/0c28b47057102720353c04fbafd11f64760eb196) fix(vertex): streaming finish_reason="stop" instead of "tool_calls" for gemini-3.1-flash-lite-preview — _@Chesars_
- [`251c279`](https://github.com/BerriAI/litellm/commit/251c279b174afd3d4178b2586fe4e29745c68528) Merge pull request #23891 from BerriAI/litellm_/mystifying-tereshkova — _@yuneng-jiang_
- [`e0e1ac6`](https://github.com/BerriAI/litellm/commit/e0e1ac617acedab7c1fb35a6372210a9e933efde) [Test] UI: Add unit tests for 10 previously untested components — _@yuneng-jiang_
- [`26dce15`](https://github.com/BerriAI/litellm/commit/26dce15f073016fca6718f2ae69eb4948ab49ee4) docs: update sidebar structure and enhance guides — _@Arindam200_
- [`a51c670`](https://github.com/BerriAI/litellm/commit/a51c670f2f759de63ad51736ad0933508c922ba0) revert: remove provider_endpoints_support.json changes, docs only — _@joereyna_
- [`ca8f5cf`](https://github.com/BerriAI/litellm/commit/ca8f5cffa0051dfb9f607b4f4f7fe925312c9a18) style: apply black formatting to fix CI lint check — _@voidborne-d_
- [`cb88836`](https://github.com/BerriAI/litellm/commit/cb888364867f7d4226c3162b411cea0299d60d0a) Add incomplete response error propagation test — _@xianzongxie-stripe_
- [`bd5c39c`](https://github.com/BerriAI/litellm/commit/bd5c39c4d1da36f6641ce5ea57df9067b93241ee) Log incomplete details in background streaming — _@xianzongxie-stripe_
- [`3ff4ac3`](https://github.com/BerriAI/litellm/commit/3ff4ac3de3fc2fb013ed2ecbe4b5b82304d43fe1) Capture incomplete terminal error in background streaming — _@xianzongxie-stripe_
- [`ef22144`](https://github.com/BerriAI/litellm/commit/ef22144854f0248163ff9250060ed49afff23bdc) address P2 feedback: add lock docstring warning, remove redundant mock write — _@voidborne-d_
- [`a34f7e4`](https://github.com/BerriAI/litellm/commit/a34f7e483112c7a4b958cf19debc50e891fdd52c) Fix paranthesis: — _@Sameerlite_
- [`0ecea85`](https://github.com/BerriAI/litellm/commit/0ecea85bd0e6f4187f22176f7317d3fb1f498847) Fix supports none flag — _@Sameerlite_
- [`1b91e16`](https://github.com/BerriAI/litellm/commit/1b91e1656aba9f0ab99e62659ca520e5fd4eee41) Add support for gpt-5.4 mini and nano — _@Sameerlite_
- [`b0db75d`](https://github.com/BerriAI/litellm/commit/b0db75df1fb9f5871cdea662035ee719ef0a9149) fix(proxy): convert max_budget to float when set from environment variable (#23855) — _@rstar327_
- [`28506ed`](https://github.com/BerriAI/litellm/commit/28506edd4951b2120779f0fefc745d36fc637dff) Add dodcs for gpt-4.5-mini — _@Sameerlite_
- [`bb8e0cd`](https://github.com/BerriAI/litellm/commit/bb8e0cd3e21aeea2cf23cbb3de28e37a1a492bfc) Update 5.4 family values correctly — _@Sameerlite_
- [`ef9cc33`](https://github.com/BerriAI/litellm/commit/ef9cc33ee3d5404642e9a73075814319d7614ca1) Merge pull request #23822 from BerriAI/litellm_ryan_march_16 — _@ryan-crabbe_
- [`a622a1f`](https://github.com/BerriAI/litellm/commit/a622a1fa356cfe82bce224552d71a37b8cc80954) Merge pull request #23827 from BerriAI/litellm_internal_dev_03_16_2026 — _@yuneng-jiang_
- [`d6b4015`](https://github.com/BerriAI/litellm/commit/d6b4015ed6e5328ad125e620733fd0d1bb84ff5f) Merge pull request #3 from Astrodevil/v0-docs — _@Arindam200_
- [`b4c9c8a`](https://github.com/BerriAI/litellm/commit/b4c9c8a9f08797d3afe47f668aca42fce9342360) Merge pull request #23868 from BerriAI/revert-22188-litellm_langfuse_key_leakage — _@yuneng-jiang_
- [`467706e`](https://github.com/BerriAI/litellm/commit/467706ea301a367d92e8957a01b1d3a978c418d5) Revert "fix: langfuse trace leak key on model params" — _@yuneng-jiang_
- [`3eeb14b`](https://github.com/BerriAI/litellm/commit/3eeb14bf1a17f52382d0e82b58979147e99fd89d) fix(cache): Fix Redis cluster caching (#23480) — _@cohml_
- [`0be8085`](https://github.com/BerriAI/litellm/commit/0be80855640abb30dfe2dea5c4e2b3c818ad93bb) Merge pull request #23753 from Chesars/fix/restore-gpt-4-0314 — _@Chesars_
- [`f2b5bec`](https://github.com/BerriAI/litellm/commit/f2b5beceb1ac06e6f7bc8432efa1776142d309cf) Merge pull request #23864 from Chesars/fix/deepseek-v3.2-vertex-region — _@Chesars_
- [`d39eac2`](https://github.com/BerriAI/litellm/commit/d39eac26832f0168be871a6d069b74d11e31b55d) fix: move supported_regions before supports_* fields for alphabetical order — _@Chesars_
- [`2442922`](https://github.com/BerriAI/litellm/commit/24429227d31be7e94c02d84e2f480fe945be5a1c) fix(model-prices): correct supported_regions for Vertex AI DeepSeek models — _@Chesars_
- [`32ecd24`](https://github.com/BerriAI/litellm/commit/32ecd241168c57fcc1de28c75b3cb72524af8ea2) fix: address P2 review feedback - exception handling and warning accuracy — _@d_
- [`8b7eac5`](https://github.com/BerriAI/litellm/commit/8b7eac5dc93db889a43f7ef233e44472b832b447) Fix doc — _@Sameerlite_
- [`464ac7b`](https://github.com/BerriAI/litellm/commit/464ac7be12e14f61c0b5b677e7f631be0c95890a) Fix doc — _@Sameerlite_
- [`34af653`](https://github.com/BerriAI/litellm/commit/34af653ff8b050a914166a96543c2646e3f8dd7f) docs: note min version for encrypted_content_affinity — _@milan-berri_
- [`d2ea8c1`](https://github.com/BerriAI/litellm/commit/d2ea8c15e3648760142d91cc771f44ac5fe1bea2) docs: sidebar QA fixes and index updates — _@Astrodevil_
- [`8a8047e`](https://github.com/BerriAI/litellm/commit/8a8047e5190fc7c3c0bbca692a19bef2a184eadc) Add all missing entries in model entries — _@Sameerlite_
- [`a286050`](https://github.com/BerriAI/litellm/commit/a286050293b448bdf8eb3d33755df9ce6b2915d9) Add basic gpt-5.4 mini and nano entry in model map — _@Sameerlite_
- [`8eb8756`](https://github.com/BerriAI/litellm/commit/8eb8756e844049dd9d1f9b32d1f8f27058e28d0f) fix: Preserve annotations in Azure AI Foundry Agents responses — _@Sameerlite_
- [`5692db8`](https://github.com/BerriAI/litellm/commit/5692db812389efd118a14fb403b1da1e278c56ee) fix(file_search): address latest greptile feedback — _@Sameerlite_
- [`9e09bbc`](https://github.com/BerriAI/litellm/commit/9e09bbc1dfbccc551a8898ab3268a1014c7c81d1) fix: reset _shared_session_lock in all tests for event loop isolation — _@voidborne-d_
- [`77a5093`](https://github.com/BerriAI/litellm/commit/77a5093ce287db8bdd32ca753a2dd84977cd066e) fix(file_search): preserve emulated response params and hidden metadata — _@Sameerlite_
- [`729f7d4`](https://github.com/BerriAI/litellm/commit/729f7d48eb0f575bc11b0e13b870f96fe522aaf5) fix(file_search): address greptile review on follow-up calls and tests — _@Sameerlite_
- [`e22d903`](https://github.com/BerriAI/litellm/commit/e22d9031e0a50ea522fa4d549bd1e8e1e9e88028) docs(response_api): move file_search details to dedicated tutorial — _@Sameerlite_
- [`82c2dce`](https://github.com/BerriAI/litellm/commit/82c2dce6b994433b9630d9546c1bf8c51cf719f9) docs(file_search): streamline guide with usage tabs, architecture, and Q&A — _@Sameerlite_
- [`e6d5e3a`](https://github.com/BerriAI/litellm/commit/e6d5e3af02cd838e8b173a44e90e00f53a3f7c73) fix(responses): avoid sending empty tools list in follow-up turns — _@Sameerlite_
- [`289f698`](https://github.com/BerriAI/litellm/commit/289f698a3c2e6763a0f87b74ba89a90e2c153701) fix(responses): align emulated file_search output and multi-query behavior — _@Sameerlite_
- [`ab4fda2`](https://github.com/BerriAI/litellm/commit/ab4fda2eebbc6e1dbc772e93d4be8c18b58deb8c) fix: add asyncio.Lock to prevent session/connector leak on concurrent recreation — _@voidborne-d_
- [`dcbaa05`](https://github.com/BerriAI/litellm/commit/dcbaa0512b94c812af1c39781f53fee5595f2047) Merge pull request #23826 from BerriAI/litellm_yj_march_16_2026 — _@yuneng-jiang_
- [`ad62071`](https://github.com/BerriAI/litellm/commit/ad62071fd386b698c74d70559b826c8a4e1af315) Merge pull request #22188 from BerriAI/litellm_langfuse_key_leakage — _@yuneng-jiang_
- [`1d6c55d`](https://github.com/BerriAI/litellm/commit/1d6c55de50c0aa6e6fce706632bc61a957bfa95e) docs: add e2e testing tutorial for file_search Responses API — _@Sameerlite_
- [`c735251`](https://github.com/BerriAI/litellm/commit/c7352515707fbcc83907000b5487d4f5162bf1d2) feat(responses): file_search support — Phase 1 native passthrough + Phase 2 emulated fallback — _@Sameerlite_
- [`37b7a7f`](https://github.com/BerriAI/litellm/commit/37b7a7fb576279a41817ef8239d2e24b79e56f7b) chore(config): restore proxy_server_config.yaml — _@Sameerlite_
- [`d8e3abf`](https://github.com/BerriAI/litellm/commit/d8e3abf3cef95365fa6b1cc0af68e32a33319bd1) fix(vertex-ai): apply review updates for batch cancel — _@Sameerlite_
- [`1c90d92`](https://github.com/BerriAI/litellm/commit/1c90d92bf5acb4d5f90a565b56862272aa454316) fix: update ZAI docs link to dedicated provider page — _@joereyna_
- [`0bc609a`](https://github.com/BerriAI/litellm/commit/0bc609affdc09c4071c72f4035591289685af8e4) fix(vertex-ai): support batch cancel via Vertex API — _@Sameerlite_
- [`afd6c4c`](https://github.com/BerriAI/litellm/commit/afd6c4c6246836110517bc5d37647359b9baef99) fix: correct Nebius AI PR link in release notes (22614 not 21542) — _@joereyna_
- [`302292c`](https://github.com/BerriAI/litellm/commit/302292c8050c4e3598d9c846f179b703ac399adc) Merge remote-tracking branch 'origin/main' into litellm_ryan_march_16 — _@ryan-crabbe_
- [`71db624`](https://github.com/BerriAI/litellm/commit/71db624bfb70c93cb1f502171e75ad70fcd8bd25) fix: add interactions: false to sagemaker_nova provider entry — _@joereyna_
- [`cde28aa`](https://github.com/BerriAI/litellm/commit/cde28aa018cdfae749141dc47d250bc1607f71e1) Merge pull request #23819 from BerriAI/litellm_fix-csv-export — _@ryan-crabbe_
- [`7348a53`](https://github.com/BerriAI/litellm/commit/7348a537e8f85ed1d4a949c3c7dff758ec504287) docs: add v1.82.3 release notes and update provider_endpoints_support.json — _@joereyna_
- [`186c2ad`](https://github.com/BerriAI/litellm/commit/186c2adb326050587f4577f09e7dedcaafc982d8) fix(gemini): support images in tool_results for /v1/messages routing (#23724) — _@awais786_
- [`a087c44`](https://github.com/BerriAI/litellm/commit/a087c44c95197a3fb053e4edaa2ae8f983cfe0f2) Merge pull request #23812 from BerriAI/litellm_disable_custom_api_keys — _@yuneng-jiang_
- [`c098eca`](https://github.com/BerriAI/litellm/commit/c098eca509ef5f0393ac4e33bc9e5ae2eeb283f8) fix(ui): CSV export empty on Global Usage page — _@ryan-crabbe_
- [`471e0f1`](https://github.com/BerriAI/litellm/commit/471e0f147e3a19da4c55e7b54a92c4023a07f49c) [Fix] Remove "API" from custom key description text — _@yuneng-jiang_
- [`e9291a9`](https://github.com/BerriAI/litellm/commit/e9291a97c32303a2ca18313bede88a75a52ce258) fix(langsmith): avoid no running event loop during sync init (#23727) — _@pandego_
- [`84b4af4`](https://github.com/BerriAI/litellm/commit/84b4af40fa7c8fd5a249ced6203da4c09c7dad87) fix(fireworks): skip #transform=inline for base64 data URLs (#23729) — _@awais786_
- [`0b0fe7e`](https://github.com/BerriAI/litellm/commit/0b0fe7e26374b5473bdfe67c76eb952828c26ce4) [Fix] Rename toggle label to "Disable custom Virtual key values" — _@yuneng-jiang_
- [`245a3d2`](https://github.com/BerriAI/litellm/commit/245a3d2b2658fe1cfcfa2138961a51dfde593812) Revert "docs: add v1.82.3 release notes and update provider_endpoints_support…" (#23817) — _@Krish Dholakia_
- [`c687e63`](https://github.com/BerriAI/litellm/commit/c687e631b4581afcf9df057f9ad8e5d9c6ec7aa1) [Feature] Add disable_custom_api_keys toggle to UI Settings page — _@yuneng-jiang_
- [`9661249`](https://github.com/BerriAI/litellm/commit/966124966f83e6e1091ad08d9dfee6e341d3ad85) docs: add v1.82.3 release notes and update provider_endpoints_support.json (#23816) — _@joereyna_
- [`d15c2d5`](https://github.com/BerriAI/litellm/commit/d15c2d546ecf3448b2447b24aea0d7643b6efe3f) fix: Register DynamoAI guardrail initializer and enum entry (#23752) — _@Harshit28j_
- [`72aa5fc`](https://github.com/BerriAI/litellm/commit/72aa5fc21926865d3aa6b20afad11c51273539ac) [Fix] Add disable_custom_api_keys to UISettings Pydantic model — _@yuneng-jiang_
- [`53d96c8`](https://github.com/BerriAI/litellm/commit/53d96c8353b2fd18669a54ec0ff2410ff3518ad5) [Feature] Disable custom API key values via UI setting — _@yuneng-jiang_
- [`7b66c97`](https://github.com/BerriAI/litellm/commit/7b66c970e9706a5b96c1987bc445ff941e51fb66) fix: auto-recover shared aiohttp session when closed (#23806) — _@voidborne-d_
- [`a771fe5`](https://github.com/BerriAI/litellm/commit/a771fe55e478bdc06e4b8b47177f7f12cfc7f44b) [Fix] Update log filter test to match empty-result behavior — _@yuneng-jiang_
- [`616b311`](https://github.com/BerriAI/litellm/commit/616b311decf293e5c57cd349a9385fcf2b23a534) Merge pull request #23798 from BerriAI/litellm_skip_alias_revalidation_on_update — _@yuneng-jiang_
- [`4a92db8`](https://github.com/BerriAI/litellm/commit/4a92db8da16180da10f12ef72625ff9869c8a9bd) [Fix] Skip key_alias re-validation on update/regenerate when alias unchanged — _@yuneng-jiang_
- [`c8c4774`](https://github.com/BerriAI/litellm/commit/c8c47742133d27ccb6eb745b53b142a0ff56c800) Merge pull request #23795 from BerriAI/litellm_fix_internal_user_invalid_keys — _@yuneng-jiang_
- [`208740a`](https://github.com/BerriAI/litellm/commit/208740a87c4da78028475b87222f3c9ea1ee05ef) [Fix] Remove duplicate get_team_object call in _validate_update_key_data — _@yuneng-jiang_
- [`bc752fb`](https://github.com/BerriAI/litellm/commit/bc752fb10965de0210ebf695310035ad903608c2) [Fix] Prevent internal users from creating invalid keys via key/generate and key/update — _@yuneng-jiang_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
