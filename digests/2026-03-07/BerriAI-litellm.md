# BerriAI/litellm — 2026-03-07

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-06T23:59:59.000Z → 2026-03-07T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A busy maintenance day on litellm with no releases or formally merged PRs in the window, but ~70 commits landing directly to staging — dominated by UI polish, proxy/infra fixes, and a few notable backend features.

The headline item is the **HashiCorp Vault config-override frontend** (#23036), which wires Vault settings into the UI on top of the previously-merged backend (#22939) — worth reading if you manage secret backends. Alongside it, a new **config_overrides table** required a Prisma schema sync, migration, and `litellm-proxy-extras` bumps to 0.4.51 then 0.4.52 (#23029, #23008 reverted in #23017, then re-bumped; see also lockfile sync fix #23059 and prisma-import guard #23058 — relevant if you self-host the proxy).

Notable backend/feature work:
- **Canadian PII (PIPEDA) protection** with 6 new regex detectors and a policy template (#22951).
- **Per-worker startup hooks** via `LITELLM_WORKER_STARTUP_HOOKS` (#22931).
- **OAuth2 M2M auth extended** to `/key/info`, `/team/info`, `/user/info`, `/model/info` (#22713).
- **Tag-based guardrails** now accept a list of modes (#23020); **key aliases** allow `@` for email-style names (#23003), behind a new validation feature flag (#23027).
- Provider fixes: Vertex `anyOf` handling for bare `{}` schemas (#23060), DeepSeek now uses `DeepSeekChatConfig` instead of `OpenAIConfig` (#22971), Bedrock image-edit debug-write removed (#21494), Azure AI **grok-4-1-fast** models added (#22587), and MCP OpenAPI parser now resolves `$ref` and path-level params (#22952).

Reliability fixes worth noting: proxy startup is now **blocked when `use_redis_transaction_buffer` is set without Redis** (#23019); Redis Cluster detection via `REDIS_CLUSTER_NODES` env var fixed in `Cache`/`Router` (#22790); internal users can again access `/key/aliases` (#23011); and budget-linked keys finally get spend reset (#20688). One regression was reverted: "Team Usage Spend Truncated Due to Pagination" (#23028).

UI churn is mostly cosmetic — Playground "Open Chat UI" 404 fix (#23053), SERVER_ROOT_PATH respected for chat links (#23021), MCP Servers transport-type column (#23051), and several button/spinner polish PRs (#23049, #23038).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`3ad9a53`](https://github.com/BerriAI/litellm/commit/3ad9a536d3fc11454454f67a4e3d260639550c40) fix(vertex): drop bare {} schemas from anyOf before adding nullable=True (#23060) — _@ishaan-jaff_
- [`15cc641`](https://github.com/BerriAI/litellm/commit/15cc641b7e93829c80a3612217344d4e3cb9ea4f) fix: sync poetry.lock with pyproject.toml (litellm-proxy-extras 0.4.51 → 0.4.52) (#23059) — _@ishaan-jaff_
- [`4a14683`](https://github.com/BerriAI/litellm/commit/4a14683c7e821ae30b69d57888b9e3e442b68191) fix: guard prisma import in config_override_endpoints (#23058) — _@ishaan-jaff_
- [`af61132`](https://github.com/BerriAI/litellm/commit/af61132a3f4331a2ff352d38ec92b03835a126e8) refactor: use DualCache for UI settings reads and get_team_object for team lookup — _@yuneng-jiang_
- [`0790163`](https://github.com/BerriAI/litellm/commit/0790163396d910422a64896c89d7d8f94fa0b5d1) Merge pull request #23056 from BerriAI/litellm_fix_team_member_count — _@ryan-crabbe_
- [`79e80aa`](https://github.com/BerriAI/litellm/commit/79e80aa151254d36ebd263198d0c02c726c0bb3e) fix: removed total count — _@ryan-crabbe_
- [`c631708`](https://github.com/BerriAI/litellm/commit/c631708df636ff7544bfa75d3e897471da04ba06) feat: add opt-in scope_user_search_to_org flag for /user/filter/ui — _@yuneng-jiang_
- [`dc9c2fe`](https://github.com/BerriAI/litellm/commit/dc9c2fe51ff1ff2f6b47d30c135d8a88899aeb3f) fix member count being on an irrelevant page — _@ryan-crabbe_
- [`6dd2a9a`](https://github.com/BerriAI/litellm/commit/6dd2a9a3eaf25286d0531c8b494f2613d5c58311) Merge pull request #23053 from BerriAI/litellm_fix_chat_ui_link — _@yuneng-jiang_
- [`28c33f5`](https://github.com/BerriAI/litellm/commit/28c33f53a36af05a346573a2589bdc5100ab1d8d) CircleCI test stability (#23055) — _@ishaan-jaff_
- [`ff6dc51`](https://github.com/BerriAI/litellm/commit/ff6dc519875b384337d324a41b9b9064af39b2d2) fix(ui): fix playground banner Open Chat UI button 404 — _@yuneng-jiang_
- [`cfd0e2c`](https://github.com/BerriAI/litellm/commit/cfd0e2cf9924c7cf0c64cd37298710f7b125a8d1) [Feat] UI Polish - MCP Servers page - show transport type  (#23051) — _@ishaan-jaff_
- [`ac22edf`](https://github.com/BerriAI/litellm/commit/ac22edf9ef92da47c1e9eddd88a1bf46c1b4e95b) Merge pull request #23049 from BerriAI/litellm_fix_save_button_loading_member_permissions — _@ryan-crabbe_
- [`2bcdb40`](https://github.com/BerriAI/litellm/commit/2bcdb409f2b63b5d651b8c50b4038356167cb812) Merge pull request #23045 from BerriAI/ui_build_mar7 — _@yuneng-jiang_
- [`52e530b`](https://github.com/BerriAI/litellm/commit/52e530bc8c5c4ef9def7e26799f62a89a3a51df0) fix(ui): use icon prop on Save Changes button to fix duplicate loading spinner — _@ryan-crabbe_
- [`dff4191`](https://github.com/BerriAI/litellm/commit/dff419125310bd6cb850d9ca7a329f1e770a6414) fix(bedrock): remove response_data.json debug write in image edit transform (#21494) — _@emerzon_
- [`847dd59`](https://github.com/BerriAI/litellm/commit/847dd5974fa84a16672d78477315a9b87789eb29) chore: update Next.js build artifacts (2026-03-07 19:16 UTC, node v22.16.0) — _@yuneng-jiang_
- [`fe1ee4b`](https://github.com/BerriAI/litellm/commit/fe1ee4b039f575c8c1b13e00d045ed64b9db80b7) Merge pull request #23036 from BerriAI/litellm_hashicorp_vault_frontend — _@ryan-crabbe_
- [`2390ab2`](https://github.com/BerriAI/litellm/commit/2390ab2c2ca7d3ad15c34296bec4be129ed1c7a1) fix: align detectAuthMethod priority with backend — _@ryan-crabbe_
- [`0367f61`](https://github.com/BerriAI/litellm/commit/0367f61323f959fcf9155152b62c35c830d3fe24) Merge pull request #23038 from BerriAI/litellm_fix_add_member_button_primary — _@ryan-crabbe_
- [`e697b81`](https://github.com/BerriAI/litellm/commit/e697b81b3f04e31ba5f3919bcb01bddb3083b916) fix(ui): make Add Member button primary with icon and loading state — _@ryan-crabbe_
- [`bcdcc8b`](https://github.com/BerriAI/litellm/commit/bcdcc8b1b7c72cc8da4bd4430bb4ccde0351d14c) Merge pull request #23040 from BerriAI/ui_release_build_mar7 — _@yuneng-jiang_
- [`536457f`](https://github.com/BerriAI/litellm/commit/536457fb31b272087b63c8ac10d91b4ff5e32ff4) address review: use AntD Flex/Space, extract vault API from networking — _@ryan-crabbe_
- [`621292c`](https://github.com/BerriAI/litellm/commit/621292cf7e08416ac26b529bad9f45a65b68451a) chore: update Next.js build artifacts (2026-03-07 18:30 UTC, node v22.16.0) — _@yuneng-jiang_
- [`0dff602`](https://github.com/BerriAI/litellm/commit/0dff602423362269d66b89ea7a02ad3a83d71e5f) fix: align frontend sensitive fields with backend — _@ryan-crabbe_
- [`78834b5`](https://github.com/BerriAI/litellm/commit/78834b5fa4fa7685369336313d6040a8d9cfbccc) Merge pull request #22786 from milan-berri/fix/custom-sso-handler-user-info — _@yuneng-jiang_
- [`37de206`](https://github.com/BerriAI/litellm/commit/37de206c5bf792d2dd44adbbd41f8ebe0a8212bb) polish changes — _@ryan-crabbe_
- [`277ad67`](https://github.com/BerriAI/litellm/commit/277ad677c596dde253ea5251b0a61c9b468c2a68) chore: remove debug print statements from custom_sso.py — _@milan-berri_
- [`e5edbc6`](https://github.com/BerriAI/litellm/commit/e5edbc629b3ad34a1d4c3ec70ea6f0afa6360723) Merge pull request #23029 from BerriAI/litellm_config_overrides_table — _@yuneng-jiang_
- [`5b0c963`](https://github.com/BerriAI/litellm/commit/5b0c963977b6bdb328b1c2c6e15d0e2255e5472d) adding builds — _@yuneng-jiang_
- [`55f448a`](https://github.com/BerriAI/litellm/commit/55f448abb819dfa9ec6ca7c9ed3bce4f0983198a) bump: version 0.4.51 → 0.4.52 — _@yuneng-jiang_
- [`315d04e`](https://github.com/BerriAI/litellm/commit/315d04e92c7e7147ffb9a04d5aad64e80360deed) Merge pull request #23021 from BerriAI/litellm_fix_chat_root_path — _@yuneng-jiang_
- [`cb0d01f`](https://github.com/BerriAI/litellm/commit/cb0d01ff26f495e96f5fed6ee3f659dfad4cffd2) Merge pull request #23028 from BerriAI/revert-22938-litellm_fix_team_usage_spend — _@yuneng-jiang_
- [`034e83e`](https://github.com/BerriAI/litellm/commit/034e83e716794f589057d72e4d14ebd41aa6014f) Revert "[Fix] Team Usage Spend Truncated Due to Pagination" — _@yuneng-jiang_
- [`edf9688`](https://github.com/BerriAI/litellm/commit/edf96886da8921af095e054a97024ca974df348f) Merge pull request #23027 from BerriAI/litellm_validate_key_alias_format — _@Harshit28j_
- [`1452237`](https://github.com/BerriAI/litellm/commit/1452237ec61b95ba3891ff7fa3bcf48b39aae97b) fix req changes — _@Harshit28j_
- [`e33b26a`](https://github.com/BerriAI/litellm/commit/e33b26a45a4adaab59601682289945fbca436c51) doc: add about flag feature — _@Harshit28j_
- [`d78752b`](https://github.com/BerriAI/litellm/commit/d78752b85b1a843318a03029b1ae05031622e23e) feat: feature flag on validate key alias — _@Harshit28j_
- [`4f4225f`](https://github.com/BerriAI/litellm/commit/4f4225fdbf51721374d8faf857038a7a2d9ced91) Merge pull request #23020 from Harshit28j/litellm_feat_guardrails_tags — _@Harshit28j_
- [`be379b7`](https://github.com/BerriAI/litellm/commit/be379b7b1e28a9a682fd0f668f51c1a331d60c55) Merge pull request #22722 from atapia27/feat/org-exclusive-add-member — _@yuneng-jiang_
- [`aae0c81`](https://github.com/BerriAI/litellm/commit/aae0c81cd1bf30c3cca655815cb160d929312705) [Fix] UI Chat - respect SERVER_ROOT_PATH for chat and back-to-console links — _@yuneng-jiang_
- [`39c5adc`](https://github.com/BerriAI/litellm/commit/39c5adcff1ad5199b9a9f631c0fe84a6800a9a2f) Merge pull request #23019 from BerriAI/litellm_redis_txn_buffer_check — _@yuneng-jiang_
- [`b70ba3e`](https://github.com/BerriAI/litellm/commit/b70ba3e6ed89a7a64743260c03a0eacb3656d429) Update error message for missing Redis config — _@yuneng-jiang_
- [`f18f4e3`](https://github.com/BerriAI/litellm/commit/f18f4e3bbd6ccd06bbc82ac34a78c98c4214775d) feat: allow multiple calls from tags — _@Harshit28j_
- [`497be5f`](https://github.com/BerriAI/litellm/commit/497be5fb112060dabc9789a565a4c9928f819c99) Merge pull request #23001 from Harshit28j/litellm_fix3458 — _@Harshit28j_
- [`9d9a591`](https://github.com/BerriAI/litellm/commit/9d9a59190c470c6fd905f517fb531a6a8060d9ec) Use passed general_settings parameter instead of global import — _@yuneng-jiang_
- [`3a15e1c`](https://github.com/BerriAI/litellm/commit/3a15e1cc2ef68ba96abe9ad7b03e627cb21f8da4) [Fix] Block proxy startup when use_redis_transaction_buffer is enabled without Redis cache — _@yuneng-jiang_
- [`4eee2b7`](https://github.com/BerriAI/litellm/commit/4eee2b752d8f84d8a283ed4070b622bccfeae37b) Merge pull request #23011 from BerriAI/litellm_key-aliases-internal-user — _@yuneng-jiang_
- [`b314e8d`](https://github.com/BerriAI/litellm/commit/b314e8d20a9daa8934153f1668d2174136cc50fa) Merge pull request #20688 from BerriAI/litellm_budget_tier_enforcement_for_keys — _@yuneng-jiang_
- [`6e09a52`](https://github.com/BerriAI/litellm/commit/6e09a52456d4b6a05a5faa915f908670173287d6) Merge pull request #23017 from BerriAI/revert-23008-litellm_bump-proxy-extras-0.4.51 — _@Harshit28j_
- [`fd43475`](https://github.com/BerriAI/litellm/commit/fd4347533fea9f9e939b3bed834ab72c871f4081) Revert "bump litellm-proxy-extras 0.4.50 → 0.4.51" — _@Harshit28j_
- [`8e9fa6e`](https://github.com/BerriAI/litellm/commit/8e9fa6e993785770929a1985c76aedf8985daf80) Merge pull request #23008 from Harshit28j/litellm_bump-proxy-extras-0.4.51 — _@Harshit28j_
- [`de8d0f4`](https://github.com/BerriAI/litellm/commit/de8d0f467a163dc661179ae85b26e79f7183d4a2) bump: version 0.4.50 → 0.4.51 — _@Harshit28j_
- [`ff8e01d`](https://github.com/BerriAI/litellm/commit/ff8e01d20bd62b84f9c508263c6e0c88c3ac9fc0) feat: Add Canadian PII protection (PIPEDA) (#22951) — _@Krish Dholakia_
- [`8388e77`](https://github.com/BerriAI/litellm/commit/8388e77b592e99fc069f12af45e616c8f8e1f7d0) wire in the hashicorp settings — _@ryan-crabbe_
- [`12005c4`](https://github.com/BerriAI/litellm/commit/12005c4a02a4c022429c9219c722eac352126724) Fix /key/aliases auth for internal users and scope results by role — _@yuneng-jiang_
- [`7f5d5c5`](https://github.com/BerriAI/litellm/commit/7f5d5c5c6ea356bc0b79d91f2432c4e7de95ed8f) fix: use DeepSeekChatConfig instead of OpenAIConfig for deepseek provider (#22971) — _@yangqian_
- [`a323d37`](https://github.com/BerriAI/litellm/commit/a323d37a5d20a74e1068fa859efd767b058db9e3) Merge pull request #23009 from BerriAI/feature/vkey-modal-squashed — _@yuneng-jiang_
- [`1a395e1`](https://github.com/BerriAI/litellm/commit/1a395e1bae17c592306e6493b37e0b5d9978d003) Merge branch 'main' into litellm_hashicorp_vault_frontend — _@ryan-crabbe_
- [`0e78aa4`](https://github.com/BerriAI/litellm/commit/0e78aa4cf17898fd7b2f7371db218ef9026a995d) feat: add Azure AI grok-4-1-fast model support (#22587) — _@emerzon_
- [`b7b2066`](https://github.com/BerriAI/litellm/commit/b7b20664c19e943efca1372505c4f26db5c82500) Gflags worker parameters (#22931) — _@ishaan-jaff_
- [`bb52b0b`](https://github.com/BerriAI/litellm/commit/bb52b0b6b0a658f66d9aada1ce1780947b719c19) fix(mcp): resolve $ref params and path-level params in OpenAPI spec parsing (#22952) — _@ishaan-jaff_
- [`c2b03c1`](https://github.com/BerriAI/litellm/commit/c2b03c15b9f017241c9af52263d1b6896892087a) Merge pull request #22939 from BerriAI/litellm_hashicorp_vault_backend — _@yuneng-jiang_
- [`6091621`](https://github.com/BerriAI/litellm/commit/6091621bec2daaf48f4e6d6771fb84be0a7fb009) Build artifacts — _@ryan-crabbe_
- [`a9dcc1a`](https://github.com/BerriAI/litellm/commit/a9dcc1ab37da84ddf7f6293f7f7e7beef33056dd) bump: version 0.4.50 → 0.4.51 — _@ryan-crabbe_
- [`b87133a`](https://github.com/BerriAI/litellm/commit/b87133ae04af4bc02d4f7f04e27fec3a2563a892) fix json loads, migration file — _@ryan-crabbe_
- [`5c8bd6a`](https://github.com/BerriAI/litellm/commit/5c8bd6a6ca6a21c37f0314c0238fc54a6147d469) Merge pull request #23006 from BerriAI/litellm_policy_component_tests — _@yuneng-jiang_
- [`8dc0c97`](https://github.com/BerriAI/litellm/commit/8dc0c979585103d992da5d1c84e2f5c3cf0d9c40) fix(caching): check REDIS_CLUSTER_NODES env var in Cache and Router class selection (#22790) — _@michelligabriele_
- [`c64140e`](https://github.com/BerriAI/litellm/commit/c64140e4c58e59b9804a28c3cd9eb5e83d306039) [Feat[ extends OAuth2 M2M authentication support to info routes (/key/info, /team/info, /user/info, /model/info) (#22713) — _@v0rtex20k_
- [`07ac97a`](https://github.com/BerriAI/litellm/commit/07ac97aff4ea5d90638f43e74425e7b23acfed47) feat(key_management): allow @ in key_alias for email-based aliases (#23003) — _@hliu-roblox_
- [`a0fb994`](https://github.com/BerriAI/litellm/commit/a0fb994ef0d3468bed4534413e1588fdc6595abc) [Test] Add unit tests for 5 untested policy components — _@yuneng-jiang_
- [`34769fd`](https://github.com/BerriAI/litellm/commit/34769fdbf45160a05ce534fc15af9d6e56ff04a5) Merge remote-tracking branch 'origin' into feature/vkey-modal-squashed — _@yuneng-jiang_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
