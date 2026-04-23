# BerriAI/litellm — 2026-03-24

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-23T23:59:59.000Z → 2026-03-24T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is a **security update blog post for a March 2026 supply chain incident** (#24537, commit 4571f2a/eaa025e), published alongside a related fix pinning the Trivy version in `security_scans.sh` after CI breakage (#24525, referencing issue #24518). Anyone running LiteLLM in production should read the blog before anything else.

On the release front, four builds shipped: `v1.82.6.rc.2`, `v1.82.6.dev2`, and two stable patches `v1.82.3-stable.patch.1/2`. The dev2 release bundles a notable proxy fix where post-call guardrail responses were not being captured for logging (#23910), plus two new observability features from @krrishdholakia: `spend_logs_metadata` exposed as custom Prometheus labels (#24434) and `project_alias` tracking propagated through callbacks and spend logs (#24432, follow-up test fix in 26d162c). The stable patches additionally roll up an important reliability fix preventing HTTP/SDK clients from being closed on `LLMClientCache` eviction (#22926), and UI work adding an Organization dropdown to key creation (#23595) and team membership management for internal users.

Other merges worth noting:
- **SSO fix** (#24475): `return_to` is now silently ignored when `control_plane_url` is unconfigured, instead of returning HTTP 400 — a behavioral change for SSO integrators.
- **CI hardening** (#24460): scheduled workflows (stale, CodeQL, daily staging branch) now skip on forks via a `github.repository` guard, with CodeQL narrowed to schedule-only so push/PR scans still run.
- **UI migration** (#24485): `route_preview.tsx` moved from Tremor to Ant Design, continuing the ongoing component migration; new unit tests landed for 5 previously untested frontend components (e.g. `AntDLoadingSpinner`, `MessageManager`).

Documentation churn was heavy: an audit-log-export-to-S3 guide (#24486), an OpenCode guide explaining how to drop the `reasoningSummary` Responses API param via `additional_drop_params`, a `reasoning_content.md` refresh, and a small `completion_model` doc correction (#24413). No new issues or open PRs were recorded in the window.

## Releases

- **[v1.82.6.rc.2](https://github.com/BerriAI/litellm/releases/tag/v1.82.6.rc.2)** — v1.82.6.rc.2 _by @github-actions[bot] at 2026-03-24T03:39:29Z_
  > **Full Changelog**: https://github.com/BerriAI/litellm/compare/v1.82.6.dev1...v1.82.6.rc.2
- **[v1.82.6.dev2](https://github.com/BerriAI/litellm/releases/tag/v1.82.6.dev2)** — v1.82.6.dev2 _by @github-actions[bot] at 2026-03-24T04:25:34Z_
  > ## What's Changed
  > * fix(proxy): post-call guardrail response not captured for logging by @michelligabriele in https://github.com/BerriAI/litellm/pull/23910
  > * feat(prometheus): include spend_logs_metadata in custom labels by @krrishdholakia in https://github.com/BerriAI/litellm/pull/24434
  > * feat(proxy): add project_alias tracking in callbacks by @krrishdholakia in https://github.com/BerriAI/litellm/pull/24432
  > 
  > 
  > **Full Changelog**: https://github.com/BerriAI/litellm/compare/v1.82.5.dev.1...v1.82.6…
- **[v1.82.3-stable.patch.2](https://github.com/BerriAI/litellm/releases/tag/v1.82.3-stable.patch.2)** — v1.82.3-stable.patch.2 _by @github-actions[bot] at 2026-03-24T06:10:51Z_
  > ## What's Changed
  > * fix: don't close HTTP/SDK clients on LLMClientCache eviction by @ishaan-jaff in https://github.com/BerriAI/litellm/pull/22926
  > * [Feature] UI - Keys: Add Organization Dropdown to Create/Edit Key by @yuneng-jiang in https://github.com/BerriAI/litellm/pull/23595
  > * [Test] UI - Add Unit Tests for 5 Untested Components by @yuneng-jiang in https://github.com/BerriAI/litellm/pull/23607
  > * [Feature] UI - Internal Users: Add/Remove Team Membership by @yuneng-jiang in https://github.com/…
- **[v1.82.3-stable.patch.1](https://github.com/BerriAI/litellm/releases/tag/v1.82.3-stable.patch.1)** — v1.82.3-stable.patch.1 _by @github-actions[bot] at 2026-03-24T03:33:50Z_
  > ## What's Changed
  > * fix: don't close HTTP/SDK clients on LLMClientCache eviction by @ishaan-jaff in https://github.com/BerriAI/litellm/pull/22926
  > * [Feature] UI - Keys: Add Organization Dropdown to Create/Edit Key by @yuneng-jiang in https://github.com/BerriAI/litellm/pull/23595
  > * [Test] UI - Add Unit Tests for 5 Untested Components by @yuneng-jiang in https://github.com/BerriAI/litellm/pull/23607
  > * [Feature] UI - Internal Users: Add/Remove Team Membership by @yuneng-jiang in https://github.com/…
- **[v1.82.3.dev.5](https://github.com/BerriAI/litellm/releases/tag/v1.82.3.dev.5)** — v1.82.3.dev.5 _by @github-actions[bot] at 2026-03-24T00:17:30Z_
  > **Full Changelog**: https://github.com/BerriAI/litellm/compare/v1.82.5.dev.1...v1.82.3.dev.5


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`4571f2a`](https://github.com/BerriAI/litellm/commit/4571f2a6c1deb34c19c129f5d58c2d1543559164) fix: add tldr to blog post — _@Krrish Dholakia_
- [`7455b11`](https://github.com/BerriAI/litellm/commit/7455b115bfc1ddcca50be34adde993c1461011dd) Merge pull request #24537 from BerriAI/litellm_blog-security-incident — _@ishaan-berri_
- [`eaa025e`](https://github.com/BerriAI/litellm/commit/eaa025ef7dbd9b7b91e78278a814c32f2afcbc14) docs: add security update blog post for March 2026 supply chain incident — _@ryan-crabbe_
- [`f9d29e4`](https://github.com/BerriAI/litellm/commit/f9d29e4e4e33e6b8d2181aa602111170f3c5e427) fix(security_scans.sh): move to older trivvy version, based on https://github.com/BerriAI/litellm/issues/24518#issuecomment-4120401246 — _@Krrish Dholakia_
- [`0af114f`](https://github.com/BerriAI/litellm/commit/0af114fb3abc60910f5f36a6d48a627bd6fd71af) Merge pull request #24525 from BerriAI/litellm_pin_trivvy — _@krrish-berri-2_
- [`fb37986`](https://github.com/BerriAI/litellm/commit/fb379865ab1f903d89a023d13aa5e1f1a73c3d85) fix(security_scans.sh): pin trivvy version — _@Krrish Dholakia_
- [`764b96b`](https://github.com/BerriAI/litellm/commit/764b96b1aa26f2ec31b07335feb68b9f3b76476e) Merge pull request #24486 from BerriAI/litellm_ryan-march-23-audit-log-export — _@ryan-crabbe_
- [`ffbe389`](https://github.com/BerriAI/litellm/commit/ffbe3896d296aff8ad4b3c9c195cae32bb74b07c) Update docs/my-website/docs/proxy/multiple_admins.md — _@ryan-crabbe_
- [`4629dfe`](https://github.com/BerriAI/litellm/commit/4629dfe394ec7e890a1c0df7754c781da8473031) Merge pull request #24485 from BerriAI/litellm_migrate-route-preview-tremor-to-antd — _@ryan-crabbe_
- [`57c027a`](https://github.com/BerriAI/litellm/commit/57c027a2dc01e83ea63a35bffa09d33832869035) docs: add audit log export to S3 documentation — _@ryan-crabbe_
- [`9343aee`](https://github.com/BerriAI/litellm/commit/9343aeefca37aa49a6ea54397d7615adae5c72c9) Merge pull request #24413 from benlangfeld/patch-2 — _@Krish Dholakia_
- [`7e50af9`](https://github.com/BerriAI/litellm/commit/7e50af922800d731d3a574276c0b942a6ceaabd9) Migrate route_preview.tsx from Tremor to Ant Design — _@ryan-crabbe_
- [`fb92ea2`](https://github.com/BerriAI/litellm/commit/fb92ea21bcb1b2afde0b832680cd81259dc4c1f1) Merge pull request #24475 from BerriAI/litellm_fix-sso-return-to-validation — _@ryan-crabbe_
- [`e40f68a`](https://github.com/BerriAI/litellm/commit/e40f68aec45ddc5ca526eb8d206e214e8e9a3faa) test(ui): add unit tests for 5 untested frontend components — _@ryan-crabbe_
- [`0aadf51`](https://github.com/BerriAI/litellm/commit/0aadf51342a1c82963b78622a6b986b89559a259) fix(proxy): ignore return_to in SSO when control_plane_url is not configured — _@ryan-crabbe_
- [`80af635`](https://github.com/BerriAI/litellm/commit/80af635eb1764a20a16314cbe15e4f77b0500def) Fix docs — _@Sameerlite_
- [`4e6e566`](https://github.com/BerriAI/litellm/commit/4e6e566b4d5a83aff02f4d6be7d7afec36470954) docs(opencode): fix model prefix and clarify drop_params scope — _@Sameerlite_
- [`17e6e7a`](https://github.com/BerriAI/litellm/commit/17e6e7a4cc5e5504c973ea12101f0d8a8970fbc0) docs(opencode): add guidance for dropping reasoningSummary param — _@Sameerlite_
- [`3292d02`](https://github.com/BerriAI/litellm/commit/3292d02aa48782adb1b20472780fd3ebdfa14eed) Merge pull request #24460 from DmitriyAlergant/ci/skip-scheduled-workflows-on-forks — _@Krish Dholakia_
- [`14fffc2`](https://github.com/BerriAI/litellm/commit/14fffc2770cf6879d0985e465df13f6de172b2f2) Merge pull request #24432 from BerriAI/krrishdholakia/project-id-tracking — _@Krish Dholakia_
- [`1310a27`](https://github.com/BerriAI/litellm/commit/1310a275d2d20d938e41bd176225370bc66adb77) ci: narrow codeql guard to schedule-only — _@DmitriyAlergant_
- [`91bc095`](https://github.com/BerriAI/litellm/commit/91bc095e18e8fce767bb9dd0fb80f777f166f48a) ci: skip scheduled workflows on forks — _@DmitriyAlergant_
- [`26d162c`](https://github.com/BerriAI/litellm/commit/26d162ccf4aa88053c384512b2307df203eb7bfb) fix(test): add user_api_key_project_alias to spend logs expected keys — _@Krrish Dholakia_
- [`742e176`](https://github.com/BerriAI/litellm/commit/742e176611a0d1ecfa53644b34d0356743455877) docs(reasoning_content.md): update guide — _@Krrish Dholakia_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
