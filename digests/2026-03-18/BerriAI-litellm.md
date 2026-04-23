# BerriAI/litellm — 2026-03-18

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-17T23:59:59.000Z → 2026-03-18T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is a wave of proxy auth and billing correctness fixes landing on `main`, alongside a docs site revamp and continued UI refactors. No releases, PRs, or issues were captured in the window — this is a commits-only digest.

**Auth/key endpoint hardening.** A cluster of fixes corrects misleading 401s on key management endpoints: `/key/block` and `/key/unblock` now return 404 for non-existent keys (#23977, commits 19efe55, b428cfb), and the same fix is being prepared for `/key/update` (f6cd0a8). A short-lived patch that prevented a body `key` field from overriding the `Authorization` header (2c874a7) was reverted (b0990e2) in favor of per-handler existence checks. Worth a read if you operate the proxy.

**Billing & observability fixes.** Sameerlite landed a double-billing fix in file_search (32ded9b, 7660f39) by suppressing sub-call billing and promoting a managed-vector-store DB helper. Langfuse OTEL traceparent propagation got an opt-in `ignore_context_propagation` flag (#24048, merged cbb4c2c). LangSmith now populates `usage_metadata` so the Cost column renders (fcea560). A proxy fix syncs normalized `call_type` into `model_call_details` for proxy-only errors (71b687e), and #23509 prevents duplicate callback logs on pass-through endpoint failures (244bdff). #23774 fixes model-level guardrails not executing for non-streaming `post_call` (0d7425a).

**Responses API / Anthropic.** Significant work surfacing Anthropic server-side tool results as `code_interpreter_call` in the Responses API, including streaming `container_id` propagation, multi-execution dedup, and skipping non-bash tool results (92b8935, 2bf8751, 8f60117, cf8d1ac). Sameerlite also added prompt management support for responses (0d70864) with an async double-management fix (021540b).

**UI & docs.** Playground refactors continue: `FilePreviewCard` (#23973) and `ChatMessageBubble` (3ba18d7) extracted from `ChatUI`, plus tests for 10 previously untested components (#24036). Default Team Settings gained missing permission options (#24039), and a guardrail_mode crash on non-string values was fixed (#24035). Arindam's large docs revamp landed (#24023) with new navigation and landing pages. Staging release `0.4.58` was cut (f88e51e), and Ishaan's March 17 staging batch (#23903) added xAI grok-4.20 beta 2 model variants.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`f6cd0a8`](https://github.com/BerriAI/litellm/commit/f6cd0a827ae84cffa838eac859eaea504bd6464a) fix: /key/update returns 404 (not 401) for nonexistent body key — _@yuneng-jiang_
- [`b55cb24`](https://github.com/BerriAI/litellm/commit/b55cb249fe276996e9ca351e31d08e7cff4a9542) Address Greptile feedback: use EndpointType enum, add CHAT MCP test — _@yuneng-jiang_
- [`3ba18d7`](https://github.com/BerriAI/litellm/commit/3ba18d708472869f7d6f7bbdb37c1cc2b471b56a) [Refactor] UI - Playground: Extract ChatMessageBubble from ChatUI — _@yuneng-jiang_
- [`7cbabd9`](https://github.com/BerriAI/litellm/commit/7cbabd9ddd9723ae15254b4d92f5ea8fea90bbc3) Merge pull request #23977 from BerriAI/litellm_key-endpoint-authentication-7c1d — _@yuneng-jiang_
- [`ee96ac9`](https://github.com/BerriAI/litellm/commit/ee96ac9514513f14e1747abc2912d52ed3c91345) merge: resolve conflicts with latest litellm_yj_march_18_2026 — _@cursoragent_
- [`d98440f`](https://github.com/BerriAI/litellm/commit/d98440f45226ccbbb394d9ac122379deb4e164c5) Merge remote-tracking branch 'origin' into litellm_yj_march_18_2026 — _@yuneng-jiang_
- [`f9e57c7`](https://github.com/BerriAI/litellm/commit/f9e57c700a4eed8f1161cb5cba5f6dd8c3c7f2b5) merge: resolve conflicts with litellm_yj_march_18_2026 base branch — _@cursoragent_
- [`3de0a2a`](https://github.com/BerriAI/litellm/commit/3de0a2a834c00f740f02de11db8f8b394efe4f69) docs: encrypted_content_affinity requires LiteLLM >= 1.82.3 — _@milan-berri_
- [`83d185d`](https://github.com/BerriAI/litellm/commit/83d185d86787d94f2063d1a40874cb600974584b) Merge pull request #24039 from BerriAI/litellm_/vibrant-hypatia — _@yuneng-jiang_
- [`488b93c`](https://github.com/BerriAI/litellm/commit/488b93c4777201ee6808a56da4ff3d43133f3453) Merge pull request #24055 from BerriAI/litellm_yj_march_17_2026 — _@yuneng-jiang_
- [`1e6abf8`](https://github.com/BerriAI/litellm/commit/1e6abf8142d1b9d96cea8cf15152a3ae036e8712) Merge branch 'main' into litellm_yj_march_17_2026 — _@yuneng-jiang_
- [`8e61b32`](https://github.com/BerriAI/litellm/commit/8e61b32b8e76b3318cd74532fa4dcf1af51803c4) [Staging] - Ishaan March 17th  (#23903) — _@ishaan-jaff_
- [`2c0c087`](https://github.com/BerriAI/litellm/commit/2c0c08722a509d2151513165c10f975d088106da) Merge pull request #24035 from BerriAI/litellm_fix_guardrail_mode_type_crash — _@yuneng-jiang_
- [`5ffe490`](https://github.com/BerriAI/litellm/commit/5ffe4906055979ccaaa548c43bd62711f8df2c7c) Merge pull request #24036 from BerriAI/litellm_/vigorous-beaver — _@yuneng-jiang_
- [`cbb4c2c`](https://github.com/BerriAI/litellm/commit/cbb4c2c2203a164657febce01ac5a40facb09fde) Merge pull request #24048 from jyeros/fix-langfuse-otel-traceparent-propagation — _@Krish Dholakia_
- [`02ebd13`](https://github.com/BerriAI/litellm/commit/02ebd1302e088a531cd1aa6579f1c4d2349b26ca) Code review — _@jyeros_
- [`2242dd1`](https://github.com/BerriAI/litellm/commit/2242dd171b918f424351685a19b6020c6fcebdbf) updating poetry lock — _@yuneng-jiang_
- [`7aa673a`](https://github.com/BerriAI/litellm/commit/7aa673a1375f9054a9df3c4ceb4675c5ecc72b54) adding build — _@yuneng-jiang_
- [`f88e51e`](https://github.com/BerriAI/litellm/commit/f88e51e1b925f82909d805f0b1a97c8734c50de9) bump: version 0.4.57 → 0.4.58 — _@yuneng-jiang_
- [`71b687e`](https://github.com/BerriAI/litellm/commit/71b687e00a43486ae3171102772a3be02f72ba26) fix(proxy): sync normalized call_type into model_call_details for proxy-only errors — _@Alexey_
- [`7fac4d4`](https://github.com/BerriAI/litellm/commit/7fac4d48ac9461de0271855467e0d9fd0a8e5617) Update docs — _@jyeros_
- [`2b6a32e`](https://github.com/BerriAI/litellm/commit/2b6a32e0cd966f0b758eea416e88a6f757b0a966) Add tests — _@jyeros_
- [`bb628e9`](https://github.com/BerriAI/litellm/commit/bb628e974a122a8d89ecad2123bb22a4e95173fb) Add otel ignore_context_propagation as opt in — _@jyeros_
- [`b00096f`](https://github.com/BerriAI/litellm/commit/b00096f2a08a5d56d2a1d84c663b833dcdda5f66) chore: regenerate poetry.lock to match pyproject.toml (#2) — _@github-actions[bot]_
- [`845ad04`](https://github.com/BerriAI/litellm/commit/845ad042913dd3d85d7f5d484fc0acc9ea990f14) Address router generic API review feedback — _@emerzon_
- [`98311e0`](https://github.com/BerriAI/litellm/commit/98311e0f0a57094eb8cba5b0ec82e5af671b890d) Preserve router model_group in generic API logs — _@emerzon_
- [`51f78b7`](https://github.com/BerriAI/litellm/commit/51f78b7d7250a86f127d02fbe964968b2a8a41e2) address greptile review feedback (greploop iteration 4) — _@yuneng-jiang_
- [`eb7efa3`](https://github.com/BerriAI/litellm/commit/eb7efa36daf03f23d81d137122c0b8e3f1575067) Add missing permission options to PERMISSION_OPTIONS list — _@yuneng-jiang_
- [`fcea560`](https://github.com/BerriAI/litellm/commit/fcea5606827552b506fb1de478ec1c6d095e7152) fix(langsmith): populate usage_metadata in outputs for Cost column — _@avik2004_
- [`b75266d`](https://github.com/BerriAI/litellm/commit/b75266d2540dbb76143e224be1bfd02002dc36e0) merge origin/main, resolve test file conflicts — _@yuneng-jiang_
- [`af8363a`](https://github.com/BerriAI/litellm/commit/af8363a77f6af288089852a987dc56e2fb13ef1e) Merge pull request #24023 from Arindam200/v0-docs — _@Krish Dholakia_
- [`bbc1200`](https://github.com/BerriAI/litellm/commit/bbc120095e2dcc9477f76d647d01490699861114) address greptile review feedback (greploop iteration 3) — _@yuneng-jiang_
- [`56ed837`](https://github.com/BerriAI/litellm/commit/56ed8379e297e20fb219817690d3b197c440ab69) address greptile review feedback (greploop iteration 2) — _@yuneng-jiang_
- [`7714d1b`](https://github.com/BerriAI/litellm/commit/7714d1be0b236871ffd24424d8513fd4630eaffb) address greptile review feedback (greploop iteration 3) — _@yuneng-jiang_
- [`6902355`](https://github.com/BerriAI/litellm/commit/6902355f5ba7ae6de8af2366d8ec0ce372c20b9b) address greptile review feedback (greploop iteration 2) — _@yuneng-jiang_
- [`40721ab`](https://github.com/BerriAI/litellm/commit/40721ab18f15bf4e3df2c1c04d8aba2be155e9e0) address greptile review feedback (greploop iteration 1) — _@yuneng-jiang_
- [`1c8b5f7`](https://github.com/BerriAI/litellm/commit/1c8b5f77c96be048e83a2b35c7679fd8d546e53b) address greptile review feedback (greploop iteration 1) — _@yuneng-jiang_
- [`4da2730`](https://github.com/BerriAI/litellm/commit/4da2730607d5643805cd5737bb1dc7c386d44399) Refactor TOC component to use Docusaurus Link for navigation — _@Arindam200_
- [`20c1d98`](https://github.com/BerriAI/litellm/commit/20c1d984a610935368bacb215773135ac109cd5c) [Test] UI: Add unit tests for 10 previously untested components — _@yuneng-jiang_
- [`b13a7c6`](https://github.com/BerriAI/litellm/commit/b13a7c679033ceea1b93ca82440f5b6bf15a8bd7) Fix guardrail_mode.replace crash when backend returns non-string value — _@yuneng-jiang_
- [`441f768`](https://github.com/BerriAI/litellm/commit/441f768abd5465ef640c9f1941b2369c4fe15dc2) Merge remote-tracking branch 'origin' into litellm_yj_march_17_2026 — _@yuneng-jiang_
- [`dcc0c70`](https://github.com/BerriAI/litellm/commit/dcc0c709365eca246ea16d7ded577728af2c6d52) [Refactor] Extract _convert_teams_to_response_models to fix PLR0915 — _@yuneng-jiang_
- [`244bdff`](https://github.com/BerriAI/litellm/commit/244bdffd1bfe7bebdfdef516e1ebe426a898e2f0) Merge pull request #23509 from michelligabriele/fix/pass-through-duplicate-failure-logs — _@Krish Dholakia_
- [`6d12161`](https://github.com/BerriAI/litellm/commit/6d121616273f4016204f1d8a60781d361d355196) Enhance navigation and sorting functionality in Docusaurus config — _@Arindam200_
- [`0690114`](https://github.com/BerriAI/litellm/commit/06901143aae0b9a93e43e7a9dc4457689c740c66) Update release notes section — _@Arindam200_
- [`0d7425a`](https://github.com/BerriAI/litellm/commit/0d7425a437b30021efdbab57b5dadca9c0314d55) Merge pull request #23774 from michelligabriele/fix/model-level-guardrails-non-streaming-postcall — _@Krish Dholakia_
- [`9ad52b1`](https://github.com/BerriAI/litellm/commit/9ad52b1bf396b291a49444040fbe85a9393f9f19) update: authors image url & linkedin url — _@Arindam200_
- [`643bfdd`](https://github.com/BerriAI/litellm/commit/643bfdd04276b606eb26885493a68fd076ba8469) Update docs/my-website/docs/proxy/docker_quick_start.md — _@Arindam200_
- [`4bedb64`](https://github.com/BerriAI/litellm/commit/4bedb6439e8c71b113c3295deeae16b57219ec31) update sidebar — _@Arindam200_
- [`ca71028`](https://github.com/BerriAI/litellm/commit/ca7102879819db00fee8698396e760e0518a5e9b) merge: update sidebars for mcp docs — _@Arindam200_
- [`40c7873`](https://github.com/BerriAI/litellm/commit/40c7873166e505dbd87f2d0a9b8fde728a2ebc02) chore(docs): add mcp_zero_trust sidebar entry — _@Arindam200_
- [`b4a5e51`](https://github.com/BerriAI/litellm/commit/b4a5e516680bb23e48e876cadbd3a76b3bacc100) Merge pull request #23820 from joereyna/release-notes/v1.82.3-v2 — _@Krish Dholakia_
- [`ea80a19`](https://github.com/BerriAI/litellm/commit/ea80a19a3970f338b398dafb6f57881f52bad30a) Fix greptile review — _@Sameerlite_
- [`b56fdf1`](https://github.com/BerriAI/litellm/commit/b56fdf188ed95d7db6457caec8f3008c4f0e97f4) Fix greptile review — _@Sameerlite_
- [`8e94392`](https://github.com/BerriAI/litellm/commit/8e943929a2a3802f03036437521ce73cdd2a2c50) docs(sidebar): add vertex PayGo tutorial under Spend Tracking — _@Sameerlite_
- [`17efd96`](https://github.com/BerriAI/litellm/commit/17efd96e6173bd2eee3ee5cc8ee1640dc0799cb4) docs(vertex): add concise PayGo/Priority guide with cost-tracking flow — _@Sameerlite_
- [`3759d1c`](https://github.com/BerriAI/litellm/commit/3759d1c82fa0e1b514a153b19c6acbf5aff97031) Merge branch 'main' into improve-llm-repeated-message-detection-performance — _@hytromo_
- [`76c8b38`](https://github.com/BerriAI/litellm/commit/76c8b388f61295d2f335553db7eb27cabcdcea46) Merge pull request #5 from Astrodevil/v0-docs — _@Astrodevil_
- [`143cd66`](https://github.com/BerriAI/litellm/commit/143cd66fa0ac7d46a33706b801617a5fe2f39c69) docs: Learn page updates, card links, integrations, sidebar changes — _@Astrodevil_
- [`f29b498`](https://github.com/BerriAI/litellm/commit/f29b4981a0fca42eb7c3918da1649a9036d74e49) fix(prompting): preserve separator for assistant(tc)->assistant edge case — _@Sameerlite_
- [`021540b`](https://github.com/BerriAI/litellm/commit/021540b2e2d7083cecfadfdcc4cd1f08abb43e31) fix: prevent double prompt management in async path, preserve optional params — _@Sameerlite_
- [`cf8d1ac`](https://github.com/BerriAI/litellm/commit/cf8d1ac521648fea10bc121cd51da166e96493a4) fix: streaming container_id and consistent Pydantic types in output — _@andrzej-pomirski-yohana_
- [`d10007c`](https://github.com/BerriAI/litellm/commit/d10007cef49ae278e97c05e40ce367481e983975) test: add non-bash skip test and mock end-to-end streaming integration test — _@andrzej-pomirski-yohana_
- [`8f60117`](https://github.com/BerriAI/litellm/commit/8f60117228821ccde41d4845382afee507dfb70c) fix: guard code_interpreter conversion to bash_code_execution results only — _@andrzej-pomirski-yohana_
- [`3962fbc`](https://github.com/BerriAI/litellm/commit/3962fbc33ac12c8a6e232dea488779f5570cb5f2) fix: non-dict tool result content falls back to outputs=None — _@andrzej-pomirski-yohana_
- [`5b3e84f`](https://github.com/BerriAI/litellm/commit/5b3e84f383627c951c4d7bf5f150e4173c39fdc4) fix: address remaining review feedback — _@andrzej-pomirski-yohana_
- [`4be1d76`](https://github.com/BerriAI/litellm/commit/4be1d76fd7da5c4c0b04f1ead59e98bcf54d1dfb) fix: empty stdout/stderr produces str(content) instead of empty logs — _@andrzej-pomirski-yohana_
- [`2bf8751`](https://github.com/BerriAI/litellm/commit/2bf8751f6b0cfe30b51e4bb298c7e36ebc4ea46b) fix: streaming code_interpreter_results dropped for multiple code executions — _@andrzej-pomirski-yohana_
- [`92b8935`](https://github.com/BerriAI/litellm/commit/92b89353ae6017bcc2cec821c4a9c6a71c6e0da5) fix: surface Anthropic code execution results as code_interpreter_call in Responses API — _@andrzej-pomirski-yohana_
- [`22fc08d`](https://github.com/BerriAI/litellm/commit/22fc08d602598f5b5cbe2293ccbd146bb748e622) fix(prompting): revert _insert_assistant_continue_message to adjacent-check logic — _@Sameerlite_
- [`d333dc4`](https://github.com/BerriAI/litellm/commit/d333dc4077b98012b08709ce0ed31881ec06879e) address greptile review feedback (greploop iteration 1) — _@Sameerlite_
- [`67f5ce9`](https://github.com/BerriAI/litellm/commit/67f5ce9c7c23d476eeb371885b401c625ca61a40) address greptile review feedback (greploop iteration 1) — _@Sameerlite_
- [`b32f5ea`](https://github.com/BerriAI/litellm/commit/b32f5ea379f4f4792d1b892cf6fdc3e3d63f80af) Fix greptile comments — _@Sameerlite_
- [`0941e40`](https://github.com/BerriAI/litellm/commit/0941e4036365ad9a57db604d35d98f0356022b54) fix(prompting): address greptile review - fix SyntaxError, restore backward compat, add trailing tool-call test — _@Sameerlite_
- [`35b3ed5`](https://github.com/BerriAI/litellm/commit/35b3ed58a8bdc190c9256d3bbfc706a63623c2e9) Fix greptile review — _@Sameerlite_
- [`ae350ed`](https://github.com/BerriAI/litellm/commit/ae350ed3708b9e90a5a185e9fb5d1073f6b0dc35) Fix greptile comments — _@Sameerlite_
- [`7e4ec10`](https://github.com/BerriAI/litellm/commit/7e4ec1000718f2f35854552eaf0d3aac43f48fa4) Update litellm/litellm_core_utils/prompt_templates/common_utils.py — _@Sameerlite_
- [`f1421d1`](https://github.com/BerriAI/litellm/commit/f1421d10825d299fae3f2605c4e48e2cb3655b4f) fix(prompting): preserve tool chains in alternation insertion — _@Sameerlite_
- [`0d70864`](https://github.com/BerriAI/litellm/commit/0d70864d0905c7bdd537facb286938a73081a410) Add support for prompt management for responses — _@Sameerlite_
- [`3cdabff`](https://github.com/BerriAI/litellm/commit/3cdabff323538df780ce0dc736c22d2f57fd323c) Fix greptile review — _@Sameerlite_
- [`b9266bb`](https://github.com/BerriAI/litellm/commit/b9266bb3b9e69b0943c86cce4d2f8c5425ff50f7) Fix ensure_alternating_roles for correct order — _@Sameerlite_
- [`3f7f23c`](https://github.com/BerriAI/litellm/commit/3f7f23cd3c0a26203b7de2fdf8b9a17640dfb79b) chore: restore original dev_config.yaml — _@cursoragent_
- [`5e7645a`](https://github.com/BerriAI/litellm/commit/5e7645a99b6c432cdafd7cc9a21be3851bd327c2) chore: remove unused imports (get_key_object, _cache_key_object) — _@cursoragent_
- [`b428cfb`](https://github.com/BerriAI/litellm/commit/b428cfb4a4b249768ef29c9ba6cf1c1134cef52e) test: add unit tests for block_key/unblock_key with non-existent keys — _@cursoragent_
- [`19efe55`](https://github.com/BerriAI/litellm/commit/19efe556cbd5e52f4ad68414400b9e88f86706de) fix: /key/block and /key/unblock return 404 instead of misleading 401 for non-existent keys — _@cursoragent_
- [`464e5fa`](https://github.com/BerriAI/litellm/commit/464e5fa2b4513e4c12cce172cc8c4e0147527e42) Merge pull request #4 from Astrodevil/v0-docs — _@Arindam200_
- [`b200d47`](https://github.com/BerriAI/litellm/commit/b200d472f561f08842e89f05202bfb88a191862f) fix: docker proxy guide — _@Arindam200_
- [`bbabdaa`](https://github.com/BerriAI/litellm/commit/bbabdaab384f2480fb3fdeaaf9904bd05f059fe8) Merge pull request #23973 from BerriAI/litellm_/fervent-hypatia — _@yuneng-jiang_
- [`cd549bf`](https://github.com/BerriAI/litellm/commit/cd549bf4f5d61d3eaf0195371a5d2a5dcf98df0a) [Refactor] UI - Playground: Extract FilePreviewCard from ChatUI — _@yuneng-jiang_
- [`70a9e60`](https://github.com/BerriAI/litellm/commit/70a9e6038e8e5761705314859f22383227e00dcf) fix:expected response — _@Arindam200_
- [`3fd50c9`](https://github.com/BerriAI/litellm/commit/3fd50c913278cff7e55d417138470f7db8b9211e) docker proxy guide fix — _@Arindam200_
- [`32ded9b`](https://github.com/BerriAI/litellm/commit/32ded9b2f8f917a46e22a56cef785c961c4716f1) fix double-billing issue — _@Sameerlite_
- [`7660f39`](https://github.com/BerriAI/litellm/commit/7660f39fdbccfa0353b3cdfdcfb02cdc08931c24) fix(file_search): promote DB helper, suppress sub-call billing, add queries-plural test — _@Sameerlite_
- [`b0990e2`](https://github.com/BerriAI/litellm/commit/b0990e2684d8379e740e2f608e8f21a0cb491404) Revert "fix: prevent body 'key' field from overriding Authorization header in auth" — _@yuneng-jiang_
- [`d2e77e7`](https://github.com/BerriAI/litellm/commit/d2e77e74eec8c57c245213a8df71d1d0cfd27311) Merge pull request #23938 from BerriAI/litellm_/sweet-austin — _@yuneng-jiang_
- [`2c874a7`](https://github.com/BerriAI/litellm/commit/2c874a7f3cb25a384336cb4061cebdce51457866) fix: prevent body 'key' field from overriding Authorization header in auth — _@yuneng-jiang_
- [`76176f2`](https://github.com/BerriAI/litellm/commit/76176f2a643a01af7544d68fdb7ad85d2c313bf3) fix(file_search): restore should_use_emulated helper, fix dedup, extract DB helper, clean docstring — _@Sameerlite_
- [`694cf22`](https://github.com/BerriAI/litellm/commit/694cf22c9e13cd6b901d3bb5c83a67f6c691aa9c) Update tests/test_litellm/llms/vertex_ai/test_vertex_ai_batch_transformation.py — _@Sameerlite_
- [`cec3e9e`](https://github.com/BerriAI/litellm/commit/cec3e9e7d4224585a93fbf5ad9a1876aaa379595) Merge pull request #23808 from voidborne-d/fix/shared-aiohttp-session-auto-recovery — _@Krish Dholakia_
- [`8a4ef0b`](https://github.com/BerriAI/litellm/commit/8a4ef0bd050e9c688fddb0dfc25c5307c051ed44) revert: restore full changelog base to v1.82.0-stable — _@joereyna_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
