# BerriAI/litellm — 2026-03-23

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-22T23:59:59.000Z → 2026-03-23T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Three releases shipped today — `v1.82.5.dev.1`, `v1.82.6.rc.1`, and `v1.82.6.dev1` — all rolling up the recent Anthropic `thinking.summary` preservation work when routing to the OpenAI Responses API (#21441, #22823), a Gemini image-token undercounting fix (#22608), and an opt-out flag for default reasoning summaries. If you're using Anthropic-via-Responses or Gemini vision, these are the notable user-visible changes to read.

On `main`, the most consequential merge is **#24434** (Krish Dholakia): Prometheus custom labels now include `spend_logs_metadata`, so values passed via the `x-litellm-spend-logs-metadata` header flow into Prometheus combined_metadata and become usable as custom label dimensions (commits `7fa623d`, `dd0e7dc`). Paired with this, commit `6809213` threads a new `project_alias` through the proxy callback metadata pipeline alongside `project_id`, giving callbacks a human-readable project name — relevant if you build custom loggers.

The other merged fix is **#23910** (michelligabriele): post-call guardrail responses (specifically OpenAI Moderation) were not being captured for downstream logging due to two independent bugs — a metadata `pop()` mutating a copy rather than the real dict (`4625ccb`), and the Responses API streaming fallback path not passing real `request_data` (`9a231bd`, `d8fd9a2`). Worth reading if you rely on guardrail audit trails.

Streaming correctness work in progress (not yet merged): commits `d560e4c` and `1716956` from `nielei3` fix `LiteLLMCompletionStreamingIterator` to actually emit `content_part.added` events for non-OpenAI providers (Claude, etc.) on the Responses API — `create_content_part_added_event()` was defined but never called. Tests for `test_anthropic_via_responses_api` are updated to expect `CONTENT_PART_ADDED` between `OUTPUT_ITEM_ADDED` and subsequent deltas.

Two in-flight commits from `J-Byron` add org budget metrics initialization at startup and on the failure path — watch for an associated PR if you use org-level budget tracking. Also a small docs correction to `completion_model` config (referencing #21554). No new issues or open PRs surfaced in the window.

## Releases

- **[v1.82.6.dev1](https://github.com/BerriAI/litellm/releases/tag/v1.82.6.dev1)** — v1.82.6.dev1 _by @github-actions[bot] at 2026-03-23T17:45:37Z_
  > **Full Changelog**: https://github.com/BerriAI/litellm/compare/v1.82.6.rc.1...v1.82.6.dev1
- **[v1.82.6.rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.82.6.rc.1)** — v1.82.6.rc.1 _by @github-actions[bot] at 2026-03-23T16:27:11Z_
  > ## What's Changed
  > * fix(anthropic): preserve thinking.summary when routing to OpenAI Responses API by @Chesars in https://github.com/BerriAI/litellm/pull/21441
  > * docs: add thinking.summary field to /v1/messages and reasoning docs by @Chesars in https://github.com/BerriAI/litellm/pull/22823
  > * fix(gemini): resolve image token undercounting in usage metadata by @gustipardo in https://github.com/BerriAI/litellm/pull/22608
  > * feat(anthropic): add opt-out flag for default reasoning summary by @Chesars…
- **[v1.82.5.dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.82.5.dev.1)** — v1.82.5.dev.1 _by @github-actions[bot] at 2026-03-23T18:49:50Z_
  > ## What's Changed
  > * fix(anthropic): preserve thinking.summary when routing to OpenAI Responses API by @Chesars in https://github.com/BerriAI/litellm/pull/21441
  > * docs: add thinking.summary field to /v1/messages and reasoning docs by @Chesars in https://github.com/BerriAI/litellm/pull/22823
  > * fix(gemini): resolve image token undercounting in usage metadata by @gustipardo in https://github.com/BerriAI/litellm/pull/22608
  > * feat(anthropic): add opt-out flag for default reasoning summary by @Chesars…


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`8a3aa4d`](https://github.com/BerriAI/litellm/commit/8a3aa4d31cc85752b6e20513c75eb835682f8c81) Merge pull request #24434 from BerriAI/krrishdholakia/prometheus-spend-metadata — _@Krish Dholakia_
- [`8a58281`](https://github.com/BerriAI/litellm/commit/8a58281cbff0c217dbed25aaf6799dbed6ac0b6b) Add org budget metrics initialization at startup — _@J-Byron_
- [`7fcf99f`](https://github.com/BerriAI/litellm/commit/7fcf99ffaf2b2d931ca341fa90ea772e31131e9d) Add org budget metrics to failure path — _@J-Byron_
- [`1716956`](https://github.com/BerriAI/litellm/commit/1716956520e12588e2918eb0d9e109b68b6549f0) test(responses): update expected events and add mock test for content_part.added — _@nielei3_
- [`d560e4c`](https://github.com/BerriAI/litellm/commit/d560e4c009b6da2afa0ee9bbb1414cde51a62cd4) fix(responses): emit content_part.added event for non-OpenAI models — _@nielei3_
- [`dd0e7dc`](https://github.com/BerriAI/litellm/commit/dd0e7dcca839c8858e15130536527371febb7d0b) test(prometheus): add tests for spend_logs_metadata in custom labels — _@Krrish Dholakia_
- [`7fa623d`](https://github.com/BerriAI/litellm/commit/7fa623df919a3ef0cce876ec4d5ae24d5a1e3f90) feat(prometheus): include spend_logs_metadata in custom labels — _@Krrish Dholakia_
- [`6809213`](https://github.com/BerriAI/litellm/commit/6809213957c011edf64e3e67a41984d43db4a952) feat(proxy): add project_alias tracking through callback metadata pipeline — _@Krrish Dholakia_
- [`63425b4`](https://github.com/BerriAI/litellm/commit/63425b4cb4965319ead7b01c766b12832de33477) Merge pull request #23910 from michelligabriele/fix/guardrail-post-call-logging — _@Krish Dholakia_
- [`fa7ccf0`](https://github.com/BerriAI/litellm/commit/fa7ccf0893f647645fb48a6db912898daf4c0655) fix(test): add request_data param to test mock + black formatting — _@michelligabriele_
- [`9a231bd`](https://github.com/BerriAI/litellm/commit/9a231bd75820c90c15b7c6fffd1b7744c3e244ce) fix(proxy): use real request_data in Responses API streaming fallback path — _@michelligabriele_
- [`4625ccb`](https://github.com/BerriAI/litellm/commit/4625ccbaa2531778599524cbd4da49d6a37fe0ec) fix(proxy): anchor metadata dict in _process_response/_process_error so pop() mutates the real dict — _@michelligabriele_
- [`d8fd9a2`](https://github.com/BerriAI/litellm/commit/d8fd9a20ed40a5ff4505778be4137d3076fd05e9) fix(proxy): address Greptile review — streaming request_data, OCR backward compat, test coverage — _@michelligabriele_
- [`ae454fd`](https://github.com/BerriAI/litellm/commit/ae454fd7005a5706f7bdc3d4b584ae865e5013c3) fix(proxy): OpenAI Moderation post-call guardrail response not captured for logging — _@michelligabriele_
- [`847c12e`](https://github.com/BerriAI/litellm/commit/847c12e4f5bfef0356aed793fb1e425b8aa8a10b) Update docs/my-website/docs/proxy/config_settings.md — _@benlangfeld_
- [`5a846c2`](https://github.com/BerriAI/litellm/commit/5a846c2e640727d11c113d9d92ec08e2f58ecb11) Correct documentation of completion_model — _@benlangfeld_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
