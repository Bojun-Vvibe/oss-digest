# BerriAI/litellm — 2026-04-13

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-12T23:59:59.000Z → 2026-04-13T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline change is a new `litellm.compress()` utility (#25637) that adds BM25-based prompt compression with a retrieval tool — a notable surface-area addition for users hitting context limits. Worth a read for anyone managing long-context costs.

On the proxy/auth side, #25634 lands a security-relevant fix that gates post-custom-auth DB lookups behind an opt-in flag — review if you run custom auth, as behavior changes by default. Related observability hardening: callback params containing `os.environ/` references now raise `ValueError` instead of being silently dropped (commit df75e79), which can break previously-tolerant integration configs on upgrade.

Guardrails get a meaningful feature: per-team opt-out for specific global guardrails (#25575), letting teams disable individual globally-enforced guardrails rather than all-or-nothing. This is paired with substantial UI work — a new `GuardrailSettingsView` extracted and reused across team views (84d7816), Global vs. Team-specific subsections (6ae693b), guardrails surfaced in the Team Settings read view for the first time (1dcccfc), an a11y fix adding a `GlobalOutlined` icon so global vs. non-global isn't color-only (1f57292), and a Tremor→antd migration of the component (842523a).

`/spend/logs` filter handling was aligned with user scoping (#25594) — a correctness fix worth checking if you build dashboards on that endpoint.

Tooling/housekeeping: the deprecated `tests/ui_e2e_tests/` suite is removed (#25657), superseded by `ui/litellm-dashboard/e2e_tests/`; a new e2e test covers editing team model TPM/RPM limits end-to-end (44614c4). A blog dark-mode CSS fix (#25620) restores readable text. Docs additions include a cost-discrepancy debugging guide with screenshots (5e830e0) and a week-2 README checklist (#25452).

No releases, no new issues, and no externally-opened PRs in the window — activity was entirely internal commits and merges, dominated by the guardrails UI refactor and the `compress()` feature.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`c08fb82`](https://github.com/BerriAI/litellm/commit/c08fb82cae048201f68b0dac21566cdfb5e90759) Merge pull request #25657 from BerriAI/litellm_chore-e2e-tests — _@ryan-crabbe-berri_
- [`44614c4`](https://github.com/BerriAI/litellm/commit/44614c43c6973c1a218920ee296c2f7b34dbad29) test(e2e): add edit team model TPM/RPM limits test — _@ryan-crabbe-berri_
- [`004964f`](https://github.com/BerriAI/litellm/commit/004964f421f411270013c67f1b0ff8a9a46c6bde) chore: remove deprecated tests/ui_e2e_tests/ suite — _@ryan-crabbe-berri_
- [`548225e`](https://github.com/BerriAI/litellm/commit/548225ef31c10bd12f8cbd7237c9d227aa3db505) Merge pull request #25586 from BerriAI/litellm_ishaan_april11 — _@ishaan-berri_
- [`65d9fad`](https://github.com/BerriAI/litellm/commit/65d9fadf45f1a91c3c45fa4de9fe055a533ff2f5) Merge pull request #25575 from BerriAI/litellm_feat-per-guardrail-opt-out-for-global-guardrails — _@ryan-crabbe-berri_
- [`6e6ed4f`](https://github.com/BerriAI/litellm/commit/6e6ed4fa66704ee6b3a9d4489c0670b8c2fa4c82) Merge pull request #25452 from mubashir1osmani/readme — _@ishaan-berri_
- [`26c7412`](https://github.com/BerriAI/litellm/commit/26c741233961eec03a49c1c68578286d58b188fb) feat: add litellm.compress() — BM25-based prompt compression with retrieval tool (#25637) — _@krrish-berri-2_
- [`2d14e4a`](https://github.com/BerriAI/litellm/commit/2d14e4a4ed61d550230bde4d4fd291e7c4afcdf8) test(ui/team): fix guardrails overview test for new component — _@ryan-crabbe-berri_
- [`df75e79`](https://github.com/BerriAI/litellm/commit/df75e796150a2762908a6d4b2cedda2df2eda7f7) raise ValueError on os.environ/ references in request-supplied callback params — _@yuneng-berri_
- [`842523a`](https://github.com/BerriAI/litellm/commit/842523a9185a53ef84d917087bd88db23adf6f77) chore(ui): use antd in GuardrailSettingsView and document the rule — _@ryan-crabbe-berri_
- [`84d7816`](https://github.com/BerriAI/litellm/commit/84d7816bc989cfffeedb591cbb83f1ebe50c7362) refactor(ui/team): extract GuardrailSettingsView and reuse across team views — _@ryan-crabbe-berri_
- [`26c35aa`](https://github.com/BerriAI/litellm/commit/26c35aa8ebfba63f95fc5fb7dccc281780f8141a) Merge pull request #25594 from BerriAI/litellm_spend_logs_user_scoping — _@yuneng-berri_
- [`1dcccfc`](https://github.com/BerriAI/litellm/commit/1dcccfc1d183c97b7a5868795d735c2a55c7051b) feat(ui/team): show guardrails in team settings read view — _@ryan-crabbe-berri_
- [`6ae693b`](https://github.com/BerriAI/litellm/commit/6ae693b85c81583cb03c4d8b26c1f31a4d844098) refactor(ui/team): split team read view guardrails into Global and Team-specific sections — _@ryan-crabbe-berri_
- [`1f57292`](https://github.com/BerriAI/litellm/commit/1f5729236325ec4e5786ccd8d5fd2c965b982bea) fix(ui/team): add GlobalOutlined icon to global guardrail markers — _@ryan-crabbe-berri_
- [`d319cd8`](https://github.com/BerriAI/litellm/commit/d319cd8cc6ecb64d3a0ac3939858a9b91f44281b) fix: blog dark mode - text invisible on dark background (#25620) — _@krrish-berri-2_
- [`0eae9f1`](https://github.com/BerriAI/litellm/commit/0eae9f101e221e2320a9b9f8676d22f16027f7c1) fix(auth): gate post-custom-auth DB lookups behind opt-in flag (#25634) — _@michelligabriele_
- [`639135e`](https://github.com/BerriAI/litellm/commit/639135e3658a9fefe73ac0cc28b227f211ac9766) Update docs/my-website/blog/debug_cost_discrepancy/index.md — _@Sameerlite_
- [`5e830e0`](https://github.com/BerriAI/litellm/commit/5e830e0d556b4e061c3ad9a903dad04ab68c4e68) docs(troubleshoot): add cost discrepancy debugging guide — _@Sameerlite_
- [`5e80e07`](https://github.com/BerriAI/litellm/commit/5e80e075c7d12a816bea9bc4f6fed4c876aae9c8) Merge pull request #25397 from BerriAI/litellm_oss_staging_04_08_2026 — _@Sameerlite_
- [`fa605d8`](https://github.com/BerriAI/litellm/commit/fa605d85c01744d124e6f73b09e9017ee77c4ff9) Merge pull request #25616 from BerriAI/main — _@Sameerlite_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
