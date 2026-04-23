# BerriAI/litellm — 2026-04-03

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-02T23:59:59.000Z → 2026-04-03T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Two version bumps shipped today: **v1.83.1** (#25054) and **v1.83.2** (#25112), plus a nightly **v1.83.1-nightly** that the LiteLLM team flags as a test of a new cosign signing workflow — co-sign verify will not work for that nightly, so don't gate CI on it.

The bulk of the day's work is **admin UI hardening from ryan-crabbe-berri**, much of it worth a look if you operate the proxy:

- **Virtual Keys**: the Key Alias dropdown was leaking aliases across teams regardless of the team filter — now correctly scoped via `team_id` (#25114).
- **Usage page**: static team dropdown replaced with a paginated, debounced `TeamMultiSelect` backed by `v2/team/list` (#25107) — relevant for tenants with many teams where the old dropdown was unusable.
- **Team settings**: organization is now an editable select instead of read-only badges, with the update only firing when changed (#25095).
- **Guardrails UI**: tabs migrated from Tremor `TabGroup` to antd `Tabs` to fix blank content for non-admins (commit a287154); a new "Submit Guardrail" form is wired to `POST /guardrails/register`, with backend now requiring `team_id` and validating team membership (PROXY_ADMIN bypass added after review, commit adb7454).
- Smaller fixes: missing `access_group_*` fields added to the `TeamData` TS type (bb03a11), and corrected mock targets in `TestResolveAccessGroupResources` that were patching a non-existent symbol (38f6c94).

On the model/provider side: **Bedrock model catalog refresh for 2026-03-26** (#24645) adds new Bedrock entries and a non-regional minimax-2.5; **Bedrock + Anthropic `file_id`** support fixed on the async path with document URL→base64 conversion and beta-header filtering (#25047/#25050); **Model Armor streaming blocks** now correctly return HTTP 400 instead of 500 (#24693); and a small **gpt-5.4 pricing** correction landed (#24748).

Security/ops: a new **April 2026 security hardening blog post** was published (#25101/#25102); `/key/update` now enforces upperbound key params and gains a `custom_key_update` hook plus hashed `token_id` support (#24969, #25103); and `Dockerfile.non_root` was fixed to install `node-gyp` so `npm ci` stops failing on wolfi-base (#25037).

## Releases

- **[v1.83.1-nightly](https://github.com/BerriAI/litellm/releases/tag/v1.83.1-nightly)** — v1.83.1-nightly _by @ishaan-berri at 2026-04-03T05:24:22Z_
  > This release was from the LiteLLM team. We are testing out a new signing process and it is safe to use. 
  > 
  > This was a test release from us and co sign verify will not work for this release as we are testing a new cosign workflow from us.


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`bb03a11`](https://github.com/BerriAI/litellm/commit/bb03a11d7c43dd36c6a2b075afd780670b11a42e) fix(ui): add missing access_group fields to TeamData.team_info type — _@ryan-crabbe-berri_
- [`3bdd042`](https://github.com/BerriAI/litellm/commit/3bdd04250784a10ce031c35c0cd50e7f03001243) fix(ui): remove model source legend from team detail view — _@ryan-crabbe-berri_
- [`ea32cb5`](https://github.com/BerriAI/litellm/commit/ea32cb58a8a9cc12eeef9f6e5db6ff1f0666b112) fix: use direct attribute access with or [] fallback in _resolve_access_group_resources — _@ryan-crabbe-berri_
- [`38f6c94`](https://github.com/BerriAI/litellm/commit/38f6c9491d602dd3b39938d1a5543806be2d2735) fix(tests): correct mock targets in TestResolveAccessGroupResources — _@ryan-crabbe-berri_
- [`eb780a8`](https://github.com/BerriAI/litellm/commit/eb780a85bb2d02a5c22780bc434a542f4fa1e1d0) Merge pull request #25032 from BerriAI/litellm_docs-default-team-params — _@ryan-crabbe-berri_
- [`20077fe`](https://github.com/BerriAI/litellm/commit/20077fe478b4b6d96d249244432067e23358711c) Merge pull request #25095 from BerriAI/litellm_fix-ui-update-org-teams — _@ryan-crabbe-berri_
- [`0575c3f`](https://github.com/BerriAI/litellm/commit/0575c3f96c68f48b9005c663094e8346ccceded2) Merge pull request #25107 from BerriAI/litellm_fix-team-id-search-filter — _@ryan-crabbe-berri_
- [`1521004`](https://github.com/BerriAI/litellm/commit/1521004462bb8fa92d1bc7fad4e653a6464a7ac6) Merge pull request #25114 from BerriAI/litellm_fix-virtual-keys-team-filter-alias-dropdown — _@ryan-crabbe-berri_
- [`96b660b`](https://github.com/BerriAI/litellm/commit/96b660b25766a9b390d962728f1c2db389663e29) fix(ui): wire team_id filter to key alias dropdown on Virtual Keys tab — _@ryan-crabbe-berri_
- [`48d4dec`](https://github.com/BerriAI/litellm/commit/48d4dec5c6f096fd244191528f89f3fb39036a2b) Merge pull request #25112 from BerriAI/worktree-vast-swinging-goose — _@yuneng-berri_
- [`a86f19f`](https://github.com/BerriAI/litellm/commit/a86f19f6dabcdac84d87055903666eede8940b87) bump: version 1.83.1 → 1.83.2 — _@ishaan-berri_
- [`c6aa3ea`](https://github.com/BerriAI/litellm/commit/c6aa3ea45226db5912170722a524bd5c89657c5b) Litellm ishaan april1 try2 (#25110) — _@ishaan-berri_
- [`1533f68`](https://github.com/BerriAI/litellm/commit/1533f6896e51c9848b2ef9b4e95f194f89a2a26f) fix(ui): fix imports and update placeholder for team multi select — _@ryan-crabbe-berri_
- [`cd7b262`](https://github.com/BerriAI/litellm/commit/cd7b2620c7778dc006ca7e2a6ad599e94ac4e4d1) fix(ui): add paginated team search to usage page filter — _@ryan-crabbe-berri_
- [`fc885af`](https://github.com/BerriAI/litellm/commit/fc885af99441f5e1e344942895063a1188c1c5e1) docs(blog): add security hardening April 2026 post (#25101) (#25102) — _@ishaan-berri_
- [`1bb726a`](https://github.com/BerriAI/litellm/commit/1bb726aa7acb7a09341acfc11eb65ebc5f3f131a) fix(ui): only send organization_id when changed and use raw initial value — _@ryan-crabbe-berri_
- [`5a8f910`](https://github.com/BerriAI/litellm/commit/5a8f910fe3c35d14ff1e20c0429e652faca227ab) add: making organizations a select instead of read only badges — _@ryan-crabbe-berri_
- [`6cc56f5`](https://github.com/BerriAI/litellm/commit/6cc56f58fd273541d7c73d6809c9f401e95da6be) Fix broken codeql-action SHA in scorecard workflow — _@joereyna_
- [`a287154`](https://github.com/BerriAI/litellm/commit/a287154905df6812553a983215dbbfd18f489e21) fix(ui): migrate guardrails tabs to antd and fix internal user view — _@ryan-crabbe-berri_
- [`d4a3a5e`](https://github.com/BerriAI/litellm/commit/d4a3a5e530422d6ccd4dff82637ca275aa4e507d) fix gpt-5.4 pricing (#24748) — _@mubashir1osmani_
- [`50f4fde`](https://github.com/BerriAI/litellm/commit/50f4fdea3e4a0d2666c7100e1ff5ebb70e0d0c7a) bump: version 1.83.0 → 1.83.1 (#25054) — _@yuneng-berri_
- [`a6dfd02`](https://github.com/BerriAI/litellm/commit/a6dfd02610bf3e4a5b94ab1a96d0be37b09d4203) fix(guardrails): return HTTP 400 instead of 500 for Model Armor streaming blocks (#24693) — _@michelligabriele_
- [`52a596d`](https://github.com/BerriAI/litellm/commit/52a596d2a4402cef5990de848a6b354497a34eb0) Bedrock Model Updates 2026-03-26 (#24645) — _@marty-sullivan_
- [`1e5b79d`](https://github.com/BerriAI/litellm/commit/1e5b79d887ca01c3ac477db837e9d830697d12b4) [Bedrock] Fix Anthropic file_id support - async path + document URL→base64 + beta header filtering (#25047) (#25050) — _@ishaan-berri_
- [`ee3e848`](https://github.com/BerriAI/litellm/commit/ee3e848deddd275cca1ad0a0abb20b01ab8b1135) allow hashed token_id in /key/update endpoint (#24969) — _@joereyna_
- [`adb7454`](https://github.com/BerriAI/litellm/commit/adb7454f857f39d22442c422a6436f29a912817b) fix: address review feedback on guardrail registration — _@ryan-crabbe-berri_
- [`0d60285`](https://github.com/BerriAI/litellm/commit/0d602857af262ec8e196eb49fbbdf03dfb73c6b5) feat: wire guardrail submission to backend and allow internal user access — _@ryan-crabbe-berri_
- [`4094801`](https://github.com/BerriAI/litellm/commit/4094801b3ce0e99d8944d6c533d3ea674171b636) Merge pull request #25037 from BerriAI/litellm_fix_non_root_docker_build — _@yuneng-berri_
- [`fe8cc10`](https://github.com/BerriAI/litellm/commit/fe8cc100de83eb8b8064eca79c0e14cd6950812f) feat: wire submit guardrail form to POST /guardrails/register — _@ryan-crabbe-berri_
- [`d4813a2`](https://github.com/BerriAI/litellm/commit/d4813a2a0f01c0bc4f48959d8d90d3e54d66ffa9) adding poetry lock — _@yuneng-berri_
- [`fa629c3`](https://github.com/BerriAI/litellm/commit/fa629c307c31d7b9793b9b2137a67ca71190ce8a) [Fix] Dockerfile.non_root: install node-gyp for npm ci — _@yuneng-berri_
- [`7a27434`](https://github.com/BerriAI/litellm/commit/7a27434f890db534bb1ebd723c925b28fb2ad275) feat(ui): add submit guardrail form to Submitted Guardrails tab — _@ryan-crabbe-berri_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
