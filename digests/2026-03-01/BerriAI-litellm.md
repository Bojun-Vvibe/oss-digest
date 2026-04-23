# BerriAI/litellm — 2026-03-01

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-02-28T23:59:59.000Z → 2026-03-01T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline work is a new **observatory test workflow for RC/stable releases** (PR #22508, commits d7dd7ef → ac6e1d9), which spins up a LiteLLM container from the release image, exposes it via a pinned cloudflared tunnel (7a46aaf), and triggers remote test runs. It landed with a flurry of hardening: input validation against script injection (a24ba22), jq-based JSON payload construction with a 30-min job timeout (a2946e2), polling `/run-status/{request_id}` instead of the global queue to dodge race conditions (1fdaa15), early-failing on missing request_id (58264aa), moving all secrets into env blocks (369edb2), and several follow-up fixes for the workflow itself — invalid `secrets` context in step-level `if:` (PR #22517), checkout failing on short commit hashes (PR #22518), and DNS flakiness on tunnel verification plus a PLR0915 lint suppression in the router (PR #22525). A separate undefined-`kwargs` F821 in `InFlightRequestsMiddleware` was also patched (PR #22523), and `_combine_fallback_usage` was extracted to dedupe sync/async streaming iterators (262172d).

On the product side, **UI session duration is now configurable** via `LITELLM_UI_SESSION_DURATION` (PR #22182), and the **Audit Logs UI moves to server-side pagination/filtering** with a drawer view, dropping the 5-second polling loop (705ef64). A latent UI bug where `QueryClient` was instantiated per-component is fixed by hoisting to a single root provider (PR #22463), and **invite links can no longer be reused for password resets** — `is_accepted` now flips on POST `/onboarding/claim_token` rather than GET (PR #22462). Project Management UI docs landed (PR #22472), and Ishaan added logos/mappings for all backend providers in the UI (PR #22461).

Provider/model fixes worth noting: an **OCR guardrail_translation handler for Mistral OCR** (PR #22145), Featherless AI using the wrong env var name `FEATHERLESS_API_KEY` instead of `FEATHERLESS_AI_API_KEY` (7d21770, with test isolation follow-ups 7934810/a8adbee), a corrected `litellm_provider` for `gemini/gemini-2.5-flash-image` (PR #22156), managed-batches fixes for Gemini/Vertex (b16397a), and JWT key-mapping endpoint hardening — pagination, hash_token correctness, and `@log_db_metrics` instrumentation (0f9d380, 941129c, 28a48ac).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`a8adbee`](https://github.com/BerriAI/litellm/commit/a8adbee6c9de5e3e544f2947d0fb0547817ca463) fix(tests): use monkeypatch for env var isolation in featherless tests — _@giulio-leone_
- [`40f1cfd`](https://github.com/BerriAI/litellm/commit/40f1cfdb7b4a935cf94854c5f4b93daabc148f04) Merge pull request #22526 from BerriAI/fix/router-plr0915-noqa — _@jquinter_
- [`fc68609`](https://github.com/BerriAI/litellm/commit/fc68609b424ff310b6aeb259981afd11a5c69a5d) Merge pull request #22525 from BerriAI/fix/observatory-tunnel-retry — _@jquinter_
- [`262172d`](https://github.com/BerriAI/litellm/commit/262172d7e7f232a5a2b486ac714aa7ecd9676fdb) Extract _combine_fallback_usage to deduplicate streaming iterator logic — _@jquinter_
- [`3faa864`](https://github.com/BerriAI/litellm/commit/3faa864713b909d0d978fad490c15caf7cf002da) Fix PLR0915 lint error in _completion_streaming_iterator — _@jquinter_
- [`2f6298d`](https://github.com/BerriAI/litellm/commit/2f6298d00f6f738d4ad5935168c2bf7abc137109) Fix observatory tunnel flaky DNS and suppress PLR0915 in router — _@jquinter_
- [`00affc0`](https://github.com/BerriAI/litellm/commit/00affc01b564867345c6f8466526047b717dfcea) Merge pull request #22523 from BerriAI/fix/lint-undefined-kwargs — _@jquinter_
- [`22140b0`](https://github.com/BerriAI/litellm/commit/22140b06536b59a5ad253b0e0038a0c7a752a462) Fix undefined kwargs in InFlightRequestsMiddleware — _@jquinter_
- [`7f1ca95`](https://github.com/BerriAI/litellm/commit/7f1ca956be5bd23818845ad74d347c297fc3de85) Merge pull request #22518 from BerriAI/fix/observatory-checkout — _@jquinter_
- [`cc0b132`](https://github.com/BerriAI/litellm/commit/cc0b1323d7e2e4aaac06ee996d53cc0297f3fb67) Fix observatory checkout failing on commit hash ref — _@jquinter_
- [`5a35dfc`](https://github.com/BerriAI/litellm/commit/5a35dfc258dfebb46cbc2ac395ccbcf359a20920) Merge pull request #22517 from BerriAI/fix/test-linting-secrets-context — _@jquinter_
- [`b40b1e6`](https://github.com/BerriAI/litellm/commit/b40b1e6a4b8dd4193c5ab888d95a4c26dc7ac203) Fix invalid secrets context in test-linting workflow — _@jquinter_
- [`ac6e1d9`](https://github.com/BerriAI/litellm/commit/ac6e1d9fd1853de2918d0638c3f120b833a47db9) Merge pull request #22508 from BerriAI/observatory-ci-integration — _@jquinter_
- [`369edb2`](https://github.com/BerriAI/litellm/commit/369edb2afbb70c226da80a762a739e6fe018093a) Move all secrets to env blocks instead of direct interpolation — _@jquinter_
- [`a24ba22`](https://github.com/BerriAI/litellm/commit/a24ba226ba7132a94c1c472a6a4560164ce1a4bf) Validate tag input and add explicit cleanup step — _@jquinter_
- [`a2946e2`](https://github.com/BerriAI/litellm/commit/a2946e2cc80373a20fcfbc0f6caf3cd999a24bb1) Add job timeout and use jq for safe JSON construction — _@jquinter_
- [`7a46aaf`](https://github.com/BerriAI/litellm/commit/7a46aaff2ba635fdbef89ae73f316f344c1759a8) Pin cloudflared to v2025.2.1 for reproducible builds — _@jquinter_
- [`58264aa`](https://github.com/BerriAI/litellm/commit/58264aadb77f8c149d1e5e76258000bae5fb7ab5) Validate request_id before polling — _@jquinter_
- [`b4e0c4d`](https://github.com/BerriAI/litellm/commit/b4e0c4db07b7ff86dbe700ca9d7fee26a27f9bab) Use temp file for JSON result passing between steps — _@jquinter_
- [`1fdaa15`](https://github.com/BerriAI/litellm/commit/1fdaa1588d191a6f8819c9476a4ebdbff9d1aa61) Address PR review comments on observatory workflow — _@jquinter_
- [`d7dd7ef`](https://github.com/BerriAI/litellm/commit/d7dd7ef33baefdd211278293541400db15716ae9) Add observatory test workflow for RC/stable releases — _@jquinter_
- [`7934810`](https://github.com/BerriAI/litellm/commit/7934810e21b734c247d4934e663281611c40022e) fix(tests): isolate env vars in featherless AI tests — _@giulio-leone_
- [`7d21770`](https://github.com/BerriAI/litellm/commit/7d21770d995f708a3e299bf0ac0b11c3c29f09e0) fix(featherless_ai): use correct FEATHERLESS_AI_API_KEY env var name — _@giulio-leone_
- [`28a48ac`](https://github.com/BerriAI/litellm/commit/28a48acce645deaee4b53b485f1ad9eb022cfc70) fix: add @log_db_metrics and move jwt mapping before auth_builder — _@Harshit28j_
- [`911ba14`](https://github.com/BerriAI/litellm/commit/911ba14e45509a250b19ca7c480dad188ac1ccca) fix: address remaining greptile feedback for jwt key mapping — _@Harshit28j_
- [`0e2dd4a`](https://github.com/BerriAI/litellm/commit/0e2dd4aac1a71623a72af4b2199731c27f5eaccc) Update litellm/proxy/management_endpoints/jwt_key_mapping_endpoints.py — _@Harshit28j_
- [`0f9d380`](https://github.com/BerriAI/litellm/commit/0f9d3808748b74a35539c4ad1bf6dcfb1bc395cf) fix: add pagination to jwt key mapping list endpoint — _@Harshit28j_
- [`9633909`](https://github.com/BerriAI/litellm/commit/963390928d3be222170178848b20703d8f861391) Update litellm/proxy/management_endpoints/jwt_key_mapping_endpoints.py — _@Harshit28j_
- [`8053be6`](https://github.com/BerriAI/litellm/commit/8053be60df24c04418d6beddb4a4242d4696ac02) Merge pull request #22182 from BerriAI/litellm_make_session_duration_configurable — _@yuneng-jiang_
- [`705ef64`](https://github.com/BerriAI/litellm/commit/705ef64ffcb20d9ee5cb9557e8f66e713b1b0167) fix(ui): Audit logs - server-side pagination, filtering, and drawer view — _@yuneng-jiang_
- [`74d8a1a`](https://github.com/BerriAI/litellm/commit/74d8a1a3fabdce8d8bba6572a1c1af2e84937598) Merge pull request #22463 from BerriAI/litellm_fix_queryclient_scope — _@yuneng-jiang_
- [`1c4da7a`](https://github.com/BerriAI/litellm/commit/1c4da7aef8a4240f16dea8bed51b2ab92953a32a) Merge pull request #22472 from BerriAI/project_ui_docs — _@yuneng-jiang_
- [`ef9fc87`](https://github.com/BerriAI/litellm/commit/ef9fc872af9c7044d2825b402afe155142d983e9) Update docs/my-website/docs/proxy/ui_project_management.md — _@yuneng-jiang_
- [`709fd51`](https://github.com/BerriAI/litellm/commit/709fd5167236ac6a3f9b4a314ce66715ea85eab7) [Docs] UI - Project Management: Add comprehensive UI documentation with beta notice — _@yuneng-jiang_
- [`d55d199`](https://github.com/BerriAI/litellm/commit/d55d1995464a689f33901df1bab6ef3f3db42a2e) project docs — _@yuneng-jiang_
- [`121c633`](https://github.com/BerriAI/litellm/commit/121c633d6e3cc49f7fb4427d007f9542cd8beb58) Merge pull request #22462 from BerriAI/litellm_invite_link_reuse_fix — _@yuneng-jiang_
- [`8269f31`](https://github.com/BerriAI/litellm/commit/8269f319215a1eea2a20381491fe610d4f03587b) refactor: extract ReactQueryProvider into dedicated context file — _@yuneng-jiang_
- [`b16397a`](https://github.com/BerriAI/litellm/commit/b16397ae1ab6d91472323673f990db6a0f3bf80f) Managed batches fixes for Gemini/Vertex — _@ephrimstanley_
- [`c7d2033`](https://github.com/BerriAI/litellm/commit/c7d203366c90b941665a1911e049e9277a1cd796) [Fix] UI - QueryClient: move to single root-level provider — _@yuneng-jiang_
- [`a80a6c9`](https://github.com/BerriAI/litellm/commit/a80a6c9f0871a5d4c85f202419466c136ea52216) Add OCR guardrail_translation handler and support (#22145) — _@Krish Dholakia_
- [`c2e7cf1`](https://github.com/BerriAI/litellm/commit/c2e7cf160fd4172489f9c76395c9846efd05a050) fix(onboarding): prevent invite link reuse for password reset — _@yuneng-jiang_
- [`c4ca456`](https://github.com/BerriAI/litellm/commit/c4ca4566c0bc78e758e719d0f754769c15af3bab) docs: Clean up budget reset and timezones documentation (#22428) — _@Krish Dholakia_
- [`500a88f`](https://github.com/BerriAI/litellm/commit/500a88f01b28a80ba058dae75d882c86fedf2ac5) [UI QA] - Add all provider models + providers on ui (#22461) — _@ishaan-jaff_
- [`35f6fd4`](https://github.com/BerriAI/litellm/commit/35f6fd4223065eb2c1710964ba43c60b25f9edff) Managed batches fixes for Gemini/Vertex — _@ephrimstanley_
- [`941129c`](https://github.com/BerriAI/litellm/commit/941129c9e0bcf2206a439b9d1994d23496e15710) fix: resolve field mismatches and direct DB query in jwt key mapping — _@Harshit28j_
- [`0f4771f`](https://github.com/BerriAI/litellm/commit/0f4771fe19b41aec28166d32c485c64cd3af435f) fix(ui): Display newlines correctly in tool descriptions (#22363) — _@RussellLuo_
- [`13e74dd`](https://github.com/BerriAI/litellm/commit/13e74dd389ef131631ef045620b2c253b1178b8c) fix(model-map): correct litellm_provider for gemini/gemini-2.5-flash-image (#22156) — _@Dima-Mediator_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
