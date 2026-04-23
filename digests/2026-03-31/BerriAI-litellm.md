# BerriAI/litellm — 2026-03-31

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-30T23:59:59.000Z → 2026-03-31T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is the **v1.83.0-nightly release** ([release page](https://github.com/BerriAI/litellm/releases/tag/v1.83.0-nightly)), accompanied by a major hardening of the release/CI/security infrastructure. The version bump landed via #24840, with `litellm-proxy-extras` going to 0.4.62 (#24828) for schema changes.

**Release & supply-chain infra.** A new `create-release.yml` workflow plus a committed cosign public key was merged (#24877), giving signed Docker images verifiable via `cosign verify ghcr.io/berriai/litellm:v1.83.0-nightly`. Follow-up commits made release creation atomic (draft-then-publish) and prepended cosign verification instructions to auto-generated notes (commits 8071691, 05368d9). On the npm side, #24838 hardened the UI supply chain: pinned `>=` overrides, enforced `npm ci`, added `ignore-scripts`, and #24829 pinned `axios=1.13.6`. CodeQL high-severity alerts in the UI were also resolved — explicit `isValidReturnUrl()` at the redirect site in `page.tsx` and `replaceAll()` fixes in `public_model_hub.tsx` (commit d12f849).

**Notable bug fixes worth reading.**
- #24078 restores MCP server fields that were silently dropped by a `schema_sync` migration — a real data-loss class fix for MCP users.
- #24826 fixes failure callbacks being silently skipped when `customLogger` wasn't initialized in sync/async failure handlers (commit 86dd36e).
- #24445 emits the missing `content_part.added` event in the Responses API for non-OpenAI models.
- #24753 makes batch completions return the actually-picked model rather than a comma-separated list.
- Commit 4b5ca49 maps `file_url → file_id` correctly in Responses→Completions translation.

**Docs.** A new "JWT → Virtual Key Mapping" guide was merged (#24882) with a mermaid sequence diagram of the key resolution flow, linked from the existing `token_auth` page and sidebar. Security.md was rewritten to direct reports to GitHub and announce a new bug bounty (#24867, #24868, #24871).

**CI churn.** The bulk of the day's commits are Codecov path-remapping iteration by joereyna (≈10 commits culminating in c903845 using unique per-matrix-job filenames) and a long tail of test stabilization — moving Snowflake/AssemblyAI/`add_and_delete_models` to mocked unit tests (#24822, #24837), fixing Redis env vars and Azure AD token mocking (#24824), and switching to dynamic DB for tests (#24827). Mostly noise unless you maintain CI.

## Releases

- **[v1.83.0-nightly](https://github.com/BerriAI/litellm/releases/tag/v1.83.0-nightly)** — v1.83.0-nightly _by @github-actions[bot] at 2026-03-31T21:49:27Z_
  > ## Verifying the Docker Image
  > ```
  > cosign verify --insecure-ignore-tlog=true --key https://raw.githubusercontent.com/BerriAI/litellm/main/cosign.pub \
  >   ghcr.io/berriai/litellm:v1.83.0-nightly
  > ```
  > Output:
  > ```
  > Verification for ghcr.io/berriai/litellm:v1.83.0-nightly --
  > The following checks were performed on each of these signatures:
  >   - The cosign claims were validated
  >   - The signatures were verified against the specified public key
  > ```
  > 
  > ## What's Changed
  > * ci: skip scheduled workflows on forks b…


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`c903845`](https://github.com/BerriAI/litellm/commit/c903845266ae6ac9f10c6b6d8c790794c3c91d98) Use unique filenames per matrix job to preserve all coverage reports — _@joereyna_
- [`98a51e0`](https://github.com/BerriAI/litellm/commit/98a51e088d8d1dbd54fb054f845963e703cfca0f) Remove debug step from upload-coverage job — _@joereyna_
- [`695d726`](https://github.com/BerriAI/litellm/commit/695d726352b038e4ff86aedf8fa0137b2e0b99cc) Revert to --cov=litellm, add checkout and root_dir to upload job — _@joereyna_
- [`b8eac30`](https://github.com/BerriAI/litellm/commit/b8eac3059aec9c04bd454f2d4629b8ff5f6b9851) Measure coverage from repo root so filenames include litellm/ prefix — _@joereyna_
- [`fdfd0e5`](https://github.com/BerriAI/litellm/commit/fdfd0e58edecbdf6db11ce039683a11b62b025e3) Force coverage path remapping via explicit coverage xml step — _@joereyna_
- [`57c22d3`](https://github.com/BerriAI/litellm/commit/57c22d3a41966877ae6a6046ceb9614350c4907d) Add debug step to inspect coverage XML paths — _@joereyna_
- [`0687ebb`](https://github.com/BerriAI/litellm/commit/0687ebb130c2e750edf82ffbe7fc71389b8d88da) Fix coverage paths: use absolute->relative remapping for Codecov — _@joereyna_
- [`a8a3eb9`](https://github.com/BerriAI/litellm/commit/a8a3eb9d5b6e1cf39ab2bcc255af21d43debe421) Fix Codecov path prefix via fixes directive — _@joereyna_
- [`e7e0637`](https://github.com/BerriAI/litellm/commit/e7e0637f53a27aaceea4142f457f0bd42690c7fe) Fix coverage source paths for Codecov — _@joereyna_
- [`4d7045d`](https://github.com/BerriAI/litellm/commit/4d7045d981c80a510f4a9d13730a1487748f73fb) Fix coverage path mismatch for Codecov — _@joereyna_
- [`b55b3cf`](https://github.com/BerriAI/litellm/commit/b55b3cfc0588f461eb72fbff118a76d554a7958d) Add pytest-cov to poetry.lock — _@joereyna_
- [`1366057`](https://github.com/BerriAI/litellm/commit/13660572caf3087efd310adf7b8e2c696ce24d8b) Add pull-requests write permission for Codecov PR comments — _@joereyna_
- [`aaa5973`](https://github.com/BerriAI/litellm/commit/aaa5973b884a3264950bcc53edc0f6de0813335f) Use OIDC for Codecov upload instead of static token — _@joereyna_
- [`8358650`](https://github.com/BerriAI/litellm/commit/8358650660ea75ff860a69169089489c4dc62117) Isolate Codecov upload into separate job to protect CODECOV_TOKEN — _@joereyna_
- [`b3eee71`](https://github.com/BerriAI/litellm/commit/b3eee71084a7aab477ae1855c2329a751a190e30) Pin codecov-action to immutable SHA (v5.5.4) — _@joereyna_
- [`d38498c`](https://github.com/BerriAI/litellm/commit/d38498c3ef1962d080c098d6f6a2c421fab05f56) Re-add Codecov coverage upload to GHA matrix workflow — _@joereyna_
- [`94e0f44`](https://github.com/BerriAI/litellm/commit/94e0f44798f00de1c167b970b096ea11870fdbe4) Merge pull request #24882 from BerriAI/worktree-piped-exploring-patterson — _@ishaan-berri_
- [`cbb84b6`](https://github.com/BerriAI/litellm/commit/cbb84b6650c523c48c1c6fd97a46b358833985bf) docs: add mermaid sequence diagram for JWT → key resolution flow — _@ishaan-jaff_
- [`64ec11d`](https://github.com/BerriAI/litellm/commit/64ec11df8b014e6b86e775cef1d7c58df874d4e6) docs: fix unused import, clarify Claude Code JWT env var — _@ishaan-jaff_
- [`f357177`](https://github.com/BerriAI/litellm/commit/f357177338b4f0430f080f9c92154daa01b0d7eb) docs: add jwt_key_mapping to sidebar under Authentication — _@ishaan-jaff_
- [`d3175a8`](https://github.com/BerriAI/litellm/commit/d3175a826203116f9b8473bcc655b45ebb17c13b) docs: link JWT → Virtual Key Mapping from token_auth page — _@ishaan-jaff_
- [`83546cc`](https://github.com/BerriAI/litellm/commit/83546cc57d9f002bb3d0f37bce368036a1ba0987) docs: JWT → Virtual Key Mapping guide — _@ishaan-jaff_
- [`8071691`](https://github.com/BerriAI/litellm/commit/8071691ffcf24782a266db9bbcafbb3ce1927142) [Fix] Address review feedback on release workflow — _@yuneng-berri_
- [`d12f849`](https://github.com/BerriAI/litellm/commit/d12f8490bf836f64ef5a962bbfa5b984cbac0940) fix: resolve CodeQL high-severity alerts in UI components — _@stuxf_
- [`05368d9`](https://github.com/BerriAI/litellm/commit/05368d9b1a029d6704e7834c3297e0fb7ba72940) [Infra] Add cosign verification section to release notes — _@yuneng-berri_
- [`5ebc7b5`](https://github.com/BerriAI/litellm/commit/5ebc7b53b4a067cf7f75eaba4c3fc3094c719ac0) docs fix — _@ishaan-jaff_
- [`c86cf98`](https://github.com/BerriAI/litellm/commit/c86cf98aff9ddbfdc28bfd12978cf7aec685d88c) Merge pull request #24877 from BerriAI/litellm_release_action — _@ishaan-berri_
- [`b587b41`](https://github.com/BerriAI/litellm/commit/b587b41c605f9ee0e23a8b2f7d2a252ed51eed0d) docs v1.83.0 — _@ishaan-jaff_
- [`0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) [Infra] Add release workflow and cosign public key — _@yuneng-berri_
- [`7066c89`](https://github.com/BerriAI/litellm/commit/7066c895f610efbaa0a36bac22843cb05b5cf7d6) chore: harden npm supply chain — pin overrides, enforce npm ci, add ignore-scripts (#24838) — _@stuxf_
- [`134b01d`](https://github.com/BerriAI/litellm/commit/134b01d5308fa5287ed8dd6d9c340e08b769f423) Merge pull request #24078 from vanhtuan0409/fix-schema-drift — _@ishaan-berri_
- [`ca316f0`](https://github.com/BerriAI/litellm/commit/ca316f082c577c1f7e8d9a923819d24564e3600c) chore: update security.md (#24871) — _@stuxf_
- [`a8e002d`](https://github.com/BerriAI/litellm/commit/a8e002dbf61ad043fffdfeac9ca85fbb66bc6091) Merge branch 'main' into fix-schema-drift — _@ishaan-berri_
- [`4b5ca49`](https://github.com/BerriAI/litellm/commit/4b5ca49cd2218699897dfff396171b04d85d9b45) fix: map file_url -> file_id in Responses->Completions translation — _@ishaan-jaff_
- [`7046a58`](https://github.com/BerriAI/litellm/commit/7046a58885eb75be51fb752068663f9a9790d280) docs: tell people to report security issues on github - easier tracking — _@krrish-berri-2_
- [`7833eee`](https://github.com/BerriAI/litellm/commit/7833eee344547db34444cfa50a56af1b9e3eb5d9) Merge pull request #24868 from BerriAI/ishaan-berri-patch-1 — _@ishaan-berri_
- [`1110a20`](https://github.com/BerriAI/litellm/commit/1110a206aeb1c1b8268d5facc448f95c53747f27) Update security.md — _@ishaan-berri_
- [`26e9b0e`](https://github.com/BerriAI/litellm/commit/26e9b0e8b737d3e058867d9b98c2ccdfde221870) Merge pull request #24867 from BerriAI/ishaan-berri-patch-1 — _@ishaan-berri_
- [`5435858`](https://github.com/BerriAI/litellm/commit/5435858965d98047adc23a126f95ec6b45fd4ea3) Update security.md — _@ishaan-berri_
- [`50a52f6`](https://github.com/BerriAI/litellm/commit/50a52f62e3ad8c903068fdd580b98eb7adc30918) fix: fix wording — _@krrish-berri-2_
- [`d47faaa`](https://github.com/BerriAI/litellm/commit/d47faaad0f99b634c70e220b9592f3acbba23a0f) docs: update security update, with new release information — _@krrish-berri-2_
- [`9942d59`](https://github.com/BerriAI/litellm/commit/9942d59631934cc3f9fe1994618e4cf6d9f736b5) fix(lint): apply Black formatting to 14 files (#24532) — _@joereyna_
- [`08be1e5`](https://github.com/BerriAI/litellm/commit/08be1e52ae073db76e9373309149b55f6c14c23d) Merge pull request #24839 from BerriAI/litellm_new_ci_cd_improvements — _@krrish-berri-2_
- [`f0518c1`](https://github.com/BerriAI/litellm/commit/f0518c1d984947a219335a857e2f8835ae5eb76f) Merge pull request #24840 from BerriAI/litellm_version_bump_1_83_0 — _@ishaan-berri_
- [`51830de`](https://github.com/BerriAI/litellm/commit/51830de709ed417ea41603b0ab13e4d6d8ab16e1) update poetry.lock for version bump — _@yuneng-berri_
- [`6a23fab`](https://github.com/BerriAI/litellm/commit/6a23fab43c08446334a7f7426906c83733b0e702) bump version to 1.83.0, litellm-proxy-extras to 0.4.62 — _@yuneng-berri_
- [`ee4116a`](https://github.com/BerriAI/litellm/commit/ee4116a450f3749d0cf161116646a60f0776e2ff) docs: cleanup docs — _@krrish-berri-2_
- [`0ea0546`](https://github.com/BerriAI/litellm/commit/0ea05469bcea24bad9860648038edb77b2f37ee6) test_completion_azure — _@ishaan-jaff_
- [`be553c7`](https://github.com/BerriAI/litellm/commit/be553c72040dcb36b5b9b91b077b56d3741b8eb5) fix aporia — _@ishaan-jaff_
- [`77e6546`](https://github.com/BerriAI/litellm/commit/77e6546e55ff7b9043832ad87495240d58dc4fcf) Merge pull request #24837 from BerriAI/lllm_build_and_test_fail — _@ishaan-berri_
- [`d259892`](https://github.com/BerriAI/litellm/commit/d259892f6983ca577c0a690aa2d6ec106c2e849d) test fix — _@ishaan-jaff_
- [`e014dfb`](https://github.com/BerriAI/litellm/commit/e014dfb8e0e5b518424be8f61fd580a28f6a415b) fix: mock encrypt_value_helper in lifecycle test — _@yuneng-berri_
- [`823e7b2`](https://github.com/BerriAI/litellm/commit/823e7b2a9d735dc4533a470a8a45ced2dd57a832) test_completion_azure — _@ishaan-jaff_
- [`3034ac2`](https://github.com/BerriAI/litellm/commit/3034ac26f7d06d1baa36dab8be005091b8a86867) fix — _@ishaan-jaff_
- [`b48c037`](https://github.com/BerriAI/litellm/commit/b48c0377127055e08da340ffba021d67eb42d78c) test: replace test_add_and_delete_models integration test with mock — _@yuneng-berri_
- [`669d2a6`](https://github.com/BerriAI/litellm/commit/669d2a6d8bb6726207f190c5a02d9995f78501b2) test_router_init_azure_service_principal_with_secret_with_environment_variables — _@ishaan-jaff_
- [`8c6a67d`](https://github.com/BerriAI/litellm/commit/8c6a67dae12a98f2c1f4fa1dec27e37c95e35b3d) test_bedrock_embedding_cohere — _@ishaan-jaff_
- [`a7bfe0c`](https://github.com/BerriAI/litellm/commit/a7bfe0c540e7c5af9186bc18d57b6b6867181ae8) test_completion_azure — _@ishaan-jaff_
- [`9b46d88`](https://github.com/BerriAI/litellm/commit/9b46d883719596b6de6707dae6f17e57db91cd02) test_completion_azure — _@ishaan-jaff_
- [`cbd6253`](https://github.com/BerriAI/litellm/commit/cbd6253f9cbeeff778fe1259c2ea6b994da0b0b3) test: skip chromium/firefox check - TODO: move to a dynamic db — _@krrish-berri-2_
- [`1746d39`](https://github.com/BerriAI/litellm/commit/1746d392eaf7c4859eef0c649d1deddc36922a30) fix: fix linting errors — _@krrish-berri-2_
- [`360c4f4`](https://github.com/BerriAI/litellm/commit/360c4f47a9dd65283c4d3bff57aab6e745ddce0d) Merge pull request #24829 from BerriAI/litellm_pin_axios — _@ishaan-berri_
- [`f636c3b`](https://github.com/BerriAI/litellm/commit/f636c3b3b786dae26edebe6da56032d3138e7fd8) pin axios — _@ishaan-jaff_
- [`81028b9`](https://github.com/BerriAI/litellm/commit/81028b96823c137b2e9d8564ba4ffdd7e9755cf2) use mock tests for assembly AI — _@ishaan-jaff_
- [`5c1f2e0`](https://github.com/BerriAI/litellm/commit/5c1f2e04b23382a65c233fad585bf3f13d065502) Merge pull request #24828 from BerriAI/claude/infallible-mahavira — _@krrish-berri-2_
- [`ead71c9`](https://github.com/BerriAI/litellm/commit/ead71c90ae13ac1befef1edf8a79dd5cdc8a9bef) Merge pull request #24826 from BerriAI/litellm_/dazzling-jackson — _@ishaan-berri_
- [`4f42e78`](https://github.com/BerriAI/litellm/commit/4f42e783e7431817e9cf80522d355d154a4355b5) bump: litellm-proxy-extras 0.4.61 → 0.4.62 for schema changes — _@krrish-berri-2_
- [`f1e7aa9`](https://github.com/BerriAI/litellm/commit/f1e7aa9dbbaf9f2736293abdb0d602ec615cde0f) db_migration_disable_update_check — _@ishaan-jaff_
- [`3fbe7d1`](https://github.com/BerriAI/litellm/commit/3fbe7d1059fc76b25b06b914b02cee569b259304) prisma_schema_sync — _@ishaan-jaff_
- [`35742bc`](https://github.com/BerriAI/litellm/commit/35742bc3f05af056079077a6c5c540cda7175481) Merge pull request #24827 from BerriAI/litellm_use_dynamic_db — _@krrish-berri-2_
- [`5d6c76a`](https://github.com/BerriAI/litellm/commit/5d6c76aa1a5fdc4e97ccdca8b73414dbd78a5852) Merge pull request #24823 from jaydns/fixes — _@krrish-berri-2_
- [`37440c2`](https://github.com/BerriAI/litellm/commit/37440c28b76bd9f59e7b0678fc1df7aad23ebf17) test: use dynamic db — _@krrish-berri-2_
- [`3308fb9`](https://github.com/BerriAI/litellm/commit/3308fb92cdebfc1b6ecb19b156d4b7e1486f84f8) Merge remote-tracking branch 'origin/main' into litellm_/dazzling-jackson — _@yuneng-berri_
- [`632beb0`](https://github.com/BerriAI/litellm/commit/632beb0db0431855b1d0c164702181b852e18d06) fix new_budget — _@ishaan-jaff_
- [`86dd36e`](https://github.com/BerriAI/litellm/commit/86dd36e12a5bbe646c1333cfa7b1f4dce8276fee) [Fix] Initialize customLogger in failure handlers to ensure callbacks fire — _@yuneng-berri_
- [`0cf4b05`](https://github.com/BerriAI/litellm/commit/0cf4b05991b9eb812648068e8f9db4fc0c09c80e) test: remove bad e2e tests - e2e failing due to low rate limits on ci/cd — _@krrish-berri-2_
- [`c6f1f8b`](https://github.com/BerriAI/litellm/commit/c6f1f8b6b3dcafe1fc1dd737876972d9ae799da7) fix: move to new vertex credentials — _@krrish-berri-2_
- [`9ca1560`](https://github.com/BerriAI/litellm/commit/9ca156050128398505638b89a477fb9a8781fcd6) chore: fix test — _@jaydns_
- [`40074ff`](https://github.com/BerriAI/litellm/commit/40074fffe1eafa5800a63ff3c7c44d3729506ca7) Merge pull request #24824 from BerriAI/litellm_fix_test_redis_and_azure_mock — _@krrish-berri-2_
- [`7954d1a`](https://github.com/BerriAI/litellm/commit/7954d1a11ffa14f6f1cbbfc2566555f793954349) test_azure_ai_model_router_streaming_cost_with_stream_options — _@ishaan-jaff_
- [`89091e4`](https://github.com/BerriAI/litellm/commit/89091e4f293b978f6aca62f15f2c468c9e16b937) test: fix assemblyai passthrough transcription request format — _@krrish-berri-2_
- [`e69dfbc`](https://github.com/BerriAI/litellm/commit/e69dfbc07dd73f4918db229cf8fc2f0c6f6bcf3e) Merge main and resolve conflict in test_router_client_init.py — _@yuneng-berri_
- [`7e93256`](https://github.com/BerriAI/litellm/commit/7e93256da4caf033b4164a074eab1ea7efd0068e) test_bedrock_document_understanding — _@ishaan-jaff_
- [`57c0545`](https://github.com/BerriAI/litellm/commit/57c05459ae9b4e607bfb35228ec13a3ee8586ce4) chore: fixes — _@jaydns_
- [`05ecfa3`](https://github.com/BerriAI/litellm/commit/05ecfa3470f6809497f4c6f35f4849c0e84b0dd2) [Fix] Use correct Redis env vars and fix Azure AD token test mocking — _@yuneng-berri_
- [`7cc997b`](https://github.com/BerriAI/litellm/commit/7cc997bd755051b6daae8228c0ea0a23ec5a1e2f) Merge pull request #24822 from BerriAI/litellm_/romantic-galileo — _@ishaan-berri_
- [`0298c1f`](https://github.com/BerriAI/litellm/commit/0298c1f58daabb8c8ae5620a79961280c07dddf6) test_basic_s3_v2_logging — _@ishaan-jaff_
- [`e17acd6`](https://github.com/BerriAI/litellm/commit/e17acd6b69570d3a506f22415e3442536cf546ec) test: make tests smarter — _@krrish-berri-2_
- [`83dc158`](https://github.com/BerriAI/litellm/commit/83dc158a2ade7250fdabebee2bc24f622797f3df) test fix — _@ishaan-jaff_
- [`74008e3`](https://github.com/BerriAI/litellm/commit/74008e3220692924658dc387ae753d70af775970) test: cleanup test impacted by deployment name change — _@krrish-berri-2_
- [`2b374a2`](https://github.com/BerriAI/litellm/commit/2b374a2abfc9e8ead5c7ce8d9d6724b2a799eb8d) Merge main and resolve Snowflake test conflict — _@yuneng-berri_
- [`19f8b58`](https://github.com/BerriAI/litellm/commit/19f8b5804623fba78ab6d03e5e944e2f0b78e873) [Test] Move mocked Snowflake chat completion tests to unit test directory — _@yuneng-berri_
- [`949a395`](https://github.com/BerriAI/litellm/commit/949a395b01d1d29a3e757d80265d3fa54651fd1a) test: use env var azure model router api base — _@krrish-berri-2_
- [`facb230`](https://github.com/BerriAI/litellm/commit/facb230fee78eb361bf19092716d9f73e17e7f40) test_create_vertex_fine_tune_jobs_mocked — _@ishaan-jaff_
- [`5596728`](https://github.com/BerriAI/litellm/commit/5596728cae0352bca59348beee0428933aef4e58) Merge pull request #24753 from BerriAI/litellm_dev_03_27_2026_p1 — _@krrish-berri-2_
- [`7844571`](https://github.com/BerriAI/litellm/commit/7844571d36ec3380a30339250d6ca1a53fc52328) test GCS BUCKET — _@ishaan-jaff_
- [`ee4ded4`](https://github.com/BerriAI/litellm/commit/ee4ded4c44cdf4d23b16d38e2e13b9d9c8f8b8b2) Merge pull request #24445 from quora/fix/missing-content-part-added — _@krrish-berri-2_
- [`9d4090b`](https://github.com/BerriAI/litellm/commit/9d4090bc5ac456b48cf1cdac8830751ef2038f6b) test fix - remove tests that were skipped — _@ishaan-jaff_
- [`13b7c2e`](https://github.com/BerriAI/litellm/commit/13b7c2e60251fdb28211ca7ef4da04bc36ec83b2) test: update testing — _@krrish-berri-2_
- [`6c3de43`](https://github.com/BerriAI/litellm/commit/6c3de43fcf5a016a0079b5f164259136c7bcae4a) test_enterprise_custom_auth_returns_string — _@ishaan-jaff_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
