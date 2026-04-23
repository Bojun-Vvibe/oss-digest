# BerriAI/litellm — 2026-04-07

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-06T23:59:59.000Z → 2026-04-07T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is a major performance fix: PR #25258 batch-limits stale managed object cleanup to prevent a 300K-row UPDATE from blocking the proxy DB, replacing `update_many` with a raw `_expire_stale_rows` call (commit 7a9a9f0). Anyone running litellm at scale with managed objects should pull this — it shipped in version bumps to litellm 1.83.4 (#25266) and litellm-enterprise 0.1.37 (#25265), tagged as prerelease v1.82.3.dev.7.

Notable feature and refactor work:

- **New bulk team permissions endpoint** (#25239): `POST /team/permissions_bulk_update` lets admins update `team_member_permissions` across all teams (cursor-paginated) or a targeted set — useful for rolling out permission policy changes (commit fdd2672).
- **Auth/JWT routing fix** (#25252): selective JWT override for OAuth2 routing — JWTs matching `routing_overrides` can now use OAuth2 introspection without flipping global OAuth2 on (commit bf8b615), unblocking mixed-auth deployments.
- **AWS GovCloud support** (#25254): adds us-gov Bedrock model entries with max_tokens metadata (commit 2bb7387).
- **/v2/key/info aligned with v1** (#25313): the v2 endpoint was missing response filtering that v1 had; behavior is now consistent (commit 021429b).

Infra / hardening:

- Cosign public key verification is now pinned to the immutable initial commit hash `0112e53` rather than fetched off the release tag (#25273), closing a supply-chain trust gap on docker image verification.
- `Dockerfile.non_root` no longer breaks when `.npmrc` (temporarily removed during build for lifecycle scripts) is missing (#25307, commit 537727f).
- UI E2E Playwright tests with a local PostgreSQL fixture finally landed (#25126), including role-specific assertions (e.g., team-admin should not see Admin Settings).

Test/lint cleanup: `check_responses_cost` tests updated for the new `_expire_stale_rows` path (#25299); Ishaan extracted `_try_provider_token_count` and `_validate_plugin_source` helpers and applied several CodeQL autofixes (cyclic import, unused imports, syntax) on in-flight branches.

No new issues or external PRs landed in the window — activity is entirely Berri-internal merges hardening the 1.83.x line.

## Releases

- **[v1.82.3.dev.7](https://github.com/BerriAI/litellm/releases/tag/v1.82.3.dev.7)** — v1.82.3.dev.7 _by @github-actions[bot] at 2026-04-07T01:10:21Z_
  > ## Verify Docker Image Signature
  > 
  > All LiteLLM Docker images are signed with [cosign](https://docs.sigstore.dev/cosign/overview/). To verify the integrity of an image before deploying:
  > 
  > ```bash
  > cosign verify \
  >   --key https://raw.githubusercontent.com/BerriAI/litellm/v1.82.3.dev.7/cosign.pub \
  >   ghcr.io/berriai/litellm:v1.82.3.dev.7
  > ```
  > 
  > Expected output:
  > 
  > ```
  > The following checks were performed on each of these signatures:
  >   - The cosign claims were validated
  >   - The signatures were verified agai…


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`08f34aa`](https://github.com/BerriAI/litellm/commit/08f34aa3cc86a3aafc49815a4ba574389d21a06c) Merge pull request #25313 from BerriAI/litellm_align_v2_key_info_with_v1 — _@yuneng-berri_
- [`096893e`](https://github.com/BerriAI/litellm/commit/096893ea972c8349152376f21606d4007717df6f) Merge pull request #25273 from BerriAI/litellm_pin_cosign_pub_to_commit — _@yuneng-berri_
- [`021429b`](https://github.com/BerriAI/litellm/commit/021429b797d5213d07772831c6454234306e69a7) [Refactor] Align /v2/key/info response handling with v1 — _@yuneng-berri_
- [`bf8b615`](https://github.com/BerriAI/litellm/commit/bf8b615b6461d36e107abc60613a46973c419ff6) fix(auth): support selective jwt override oauth2 routing (#25252) — _@milan-berri_
- [`168b0a0`](https://github.com/BerriAI/litellm/commit/168b0a05c41bd39bc63322312cefd92d0ac7cbbc) added changes based on the feedback — _@kothamah_
- [`f3bc200`](https://github.com/BerriAI/litellm/commit/f3bc20056d1ea76818edacc2af3abe1ce31c7fbf) Merge pull request #25307 from BerriAI/litellm_/fix_npmrc_dockerfile — _@yuneng-berri_
- [`537727f`](https://github.com/BerriAI/litellm/commit/537727f0dacb5ffd3dc28b228371f910fdcff00e) [Fix] Dockerfile.non_root: handle missing .npmrc gracefully — _@yuneng-berri_
- [`23e1a7d`](https://github.com/BerriAI/litellm/commit/23e1a7d7c2f7ecd4802a96038ae36d90e1748efd) Merge pull request #25126 from BerriAI/litellm_ui_e2e_psql_pr — _@yuneng-berri_
- [`184050e`](https://github.com/BerriAI/litellm/commit/184050e2a1de4a5355457230ae4ebc929dd9bac2) Merge remote main into litellm_ui_e2e_psql_pr — _@yuneng-berri_
- [`ce75fde`](https://github.com/BerriAI/litellm/commit/ce75fde727204b92034623fae4196d34e86b72b9) Merge remote main into litellm_pin_cosign_pub_to_commit — _@yuneng-berri_
- [`730ba0f`](https://github.com/BerriAI/litellm/commit/730ba0f6708b731f7fd6c7320da3fd2d2d86f25e) Merge pull request #25299 from BerriAI/litellm_fix_check_responses_cost_tests — _@yuneng-berri_
- [`48a6823`](https://github.com/BerriAI/litellm/commit/48a68230c872f409d5254323e225bbd208f62f69) fix(test): update check_responses_cost tests for _expire_stale_rows — _@yuneng-berri_
- [`9de2ae6`](https://github.com/BerriAI/litellm/commit/9de2ae65442f01f76a5473b196f2e8963b02d616) fix(lint): extract _try_provider_token_count to reduce token_counter statement count — _@ishaan-berri_
- [`c0101b1`](https://github.com/BerriAI/litellm/commit/c0101b1ab60f4f38d8314b4e3ee0a3b866c50a54) fix(lint): extract _validate_plugin_source to reduce register_plugin statement count — _@ishaan-berri_
- [`e3c8867`](https://github.com/BerriAI/litellm/commit/e3c8867a37d17feb3096291942fbdbf67ad77e59) Potential fix for pull request finding 'CodeQL / Unused variable, import, function or class' — _@ishaan-berri_
- [`fdcab4d`](https://github.com/BerriAI/litellm/commit/fdcab4dc5558cd1b013b35b920306315c6a7c1fd) Potential fix for pull request finding 'CodeQL / Cyclic import' — _@ishaan-berri_
- [`0a1ded5`](https://github.com/BerriAI/litellm/commit/0a1ded5d54d2571c2ed02d430ca0af198cb6c1f5) Potential fix for pull request finding 'CodeQL / Unused variable, import, function or class' — _@ishaan-berri_
- [`67e491c`](https://github.com/BerriAI/litellm/commit/67e491cca5d18abde2f6ac3ce78c85536e893f29) Potential fix for pull request finding 'CodeQL / Syntax error' — _@ishaan-berri_
- [`4aed2c9`](https://github.com/BerriAI/litellm/commit/4aed2c9e3b63b84aa250e33475293e91026b7825) Update litellm/proxy/proxy_server.py — _@ishaan-berri_
- [`8c16bc0`](https://github.com/BerriAI/litellm/commit/8c16bc0346cc308bb2acf2cf881ba0523f0f2505) Merge remote-tracking branch 'origin/main' into litellm_ui_e2e_psql_pr — _@yuneng-berri_
- [`2bb7387`](https://github.com/BerriAI/litellm/commit/2bb7387a83fa7c3ab3c7750547c1a54d8159c68a) Litellm aws gov cloud mode support (#25254) — _@shivamrawat1_
- [`54f4be6`](https://github.com/BerriAI/litellm/commit/54f4be6ab6b70464b0a4568a690d32cc5ffab5a8) Merge remote-tracking branch 'origin/main' into litellm_ui_e2e_psql_pr — _@yuneng-berri_
- [`965879e`](https://github.com/BerriAI/litellm/commit/965879e74f40dda202a640f5430220fd7f3775d8) fix: address Greptile review comments — _@yuneng-berri_
- [`3056558`](https://github.com/BerriAI/litellm/commit/30565581be0e0b9d407036354f7cf3192d576f3a) [Infra] Pin cosign.pub verification to initial commit hash — _@yuneng-berri_
- [`03d9746`](https://github.com/BerriAI/litellm/commit/03d97468154bf98b8af6e018a20213d936a55fbf) bump litellm version to 1.83.4 (#25266) — _@ishaan-berri_
- [`4bcd4be`](https://github.com/BerriAI/litellm/commit/4bcd4bef44fa940d04f9a70422c78d71c0d86fc7) bump litellm-enterprise to 0.1.37 (#25265) — _@ishaan-berri_
- [`7a9a9f0`](https://github.com/BerriAI/litellm/commit/7a9a9f0c791a29b3cc979a11c10f70e1006240e5) fix: batch-limit stale managed object cleanup to prevent 300K row UPD… (#25258) — _@ishaan-berri_
- [`3ac61a5`](https://github.com/BerriAI/litellm/commit/3ac61a519b8ed80eb13003205972c6b63236e91e) Merge pull request #25239 from BerriAI/litellm_backfill-team-member-permissions — _@ryan-crabbe-berri_
- [`fdd2672`](https://github.com/BerriAI/litellm/commit/fdd2672e9325433ac766f18c0e3bab013198912c) feat: add POST /team/permissions_bulk_update endpoint — _@ryan-crabbe-berri_
- [`1c238b6`](https://github.com/BerriAI/litellm/commit/1c238b630fd289e146b532e309e4e2c81f093622) fix(tests): update upsert tests to reflect new update-in-place behavior for existing budget_id — _@ishaan-berri_
- [`9e0fb6b`](https://github.com/BerriAI/litellm/commit/9e0fb6bd17d1b347e331795e5c02a6087043d2a5) fix(tests): set default_team_member_models=None on team mocks to match new field — _@ishaan-berri_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
