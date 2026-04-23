# openai/codex — 2026-04-14

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-13T23:59:59.000Z → 2026-04-14T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Headlining today is a busy alpha release, **0.121.0-alpha.9**, that bundles a notable security/UX reversal: `danger-full-access` denylist-only network mode is gone, with PR #17732 reverting #16946 and removing the corresponding config. If you depended on that mode, read this first.

Two architectural threads dominate the day. First, **filesystem/environment abstraction** continues: `apply_patch` now routes through the selected Environment filesystem rather than self-exec (#17674), skill loading became filesystem-aware so repo skills can be read from remote environments (#17720), `AbsolutePathBuf` was spread through more code paths (#17792), and `is_symlink` was added to `FsMetadata` (#17719). A new `ThreadStore` interface (#17659) starts mediating access to the rollout JSONL + sqlite thread storage, with follow-ups expected. Second, **app-server concurrency**: #17372 refactors `MessageProcessor` and per-connection state to allow initialized RPCs to run concurrently — and #17830 lands a quick fix for analytics build breakage caused by that move.

Marketplace/skills work also progressed: `codex marketplace add` was unified onto a shared core flow (#17717), then extended with local directory sources (#17756); the TUI `$` skill popup was fixed to load reliably against a remote app-server (#17702); and plugin loading went async (#17747).

Realtime/voice got several improvements: output modality (text/audio) is now plumbed end-to-end through app-server, core, API, and TUI (#17701), with trace-only wire logging for websocket payloads and WebRTC SDP behind `RUST_LOG=codex…` (#17838) and a Location-header trace log (#17761).

Smaller but user-visible: the TUI status line now shows context percent (#17637); guardian review timeouts render as explicit terminal history entries instead of disappearing (#17557); MCP default tool result caps were adjusted to allow larger result sets for selected tools (#17684); and an apply-patch binary refresh bug on update was fixed (#17808). Analytics is now stable and on by default (#17389), with `thread_source` added to turn metadata (#17374). Supply-chain hardening: cargo-deny now rejects unknown git/registry sources unless allowlisted, and git patch deps are pinned (#17471). Original image detail is always-on for supported models (#17665, #17803).

## Releases

- **[rust-v0.121.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.121.0-alpha.9)** _(prerelease)_ — 0.121.0-alpha.9 _by @github-actions[bot] at 2026-04-14T16:45:24Z_
  > Release 0.121.0-alpha.9


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`3cc689f`](https://github.com/openai/codex/commit/3cc689fb2378fba47dd3a1db6c55b62775b67e73) [codex] Support local marketplace sources (#17756) — _@xli-oai_
- [`96254a7`](https://github.com/openai/codex/commit/96254a763aac421cbc7d723d85cb86a66ebead57) Make skill loading filesystem-aware (#17720) — _@pakrym-oai_
- [`5ecaf09`](https://github.com/openai/codex/commit/5ecaf09ab0a2417f2b961b7226d134e86859a521) Add Bazel verify-release-build job (#17705) — _@bolinfest_
- [`78835d7`](https://github.com/openai/codex/commit/78835d7e6321448697823989ce309b12da78f763) Adjust default tool search result caps (#17684) — _@malone-oai_
- [`8b7d0e9`](https://github.com/openai/codex/commit/8b7d0e920186642177924f4118b24e3947b250a1) Add realtime wire trace logs (#17838) — _@aibrahim-oai_
- [`42166ba`](https://github.com/openai/codex/commit/42166ba26035981305c4d84c472d6706b08b9171) fix: apply patch bin refresh (#17808) — _@jif-oai_
- [`dd1321d`](https://github.com/openai/codex/commit/dd1321d11b8a8d4c625d3208ed84ebf84d1beb42) Spread AbsolutePathBuf (#17792) — _@pakrym-oai_
- [`dae5699`](https://github.com/openai/codex/commit/dae56994da917ae7bff84dae6f633ad17e5e1293) ThreadStore interface (#17659) — _@wiltzius-openai_
- [`d6b1327`](https://github.com/openai/codex/commit/d6b13276c79e0d7c03ad58d3f4cf1b16aae7dba2) [codex-analytics] enable general analytics by default (#17389) — _@rhan-oai_
- [`1fd9c33`](https://github.com/openai/codex/commit/1fd9c3320726126aedb9ce2d35b627d1230a4531) [codex] Fix app-server initialized request analytics build (#17830) — _@etraut-openai_
- [`706f830`](https://github.com/openai/codex/commit/706f830dc6c7234ace6a84e5d2ebffbf28dbbd5e) Fix remote skill popup loading (#17702) — _@starr-openai_
- [`c24124b`](https://github.com/openai/codex/commit/c24124b37d3b4f26ccab46d778610efac63d0edb) Route apply_patch through the environment filesystem (#17674) — _@starr-openai_
- [`440597c`](https://github.com/openai/codex/commit/440597c7e754c08522ba26edfde8da98fdc3115c) Refactor Bazel CI job setup (#17704) — _@bolinfest_
- [`23d4098`](https://github.com/openai/codex/commit/23d4098c0f5ef26deca8aaff4851055aadd82e37) app-server: prepare to run initialized rpcs concurrently (#17372) — _@euroelessar_
- [`769b1c3`](https://github.com/openai/codex/commit/769b1c3d7e40195f5a4048f82245e3fc19441c4d) Keep image_detail_original as a removed feature flag (#17803) — _@fjord-oai_
- [`d013576`](https://github.com/openai/codex/commit/d013576f8bd8f03144881a3756332e3e1079283c) Redirect debug client output to a file (#17234) — _@rasmusrygaard_
- [`81c0bcc`](https://github.com/openai/codex/commit/81c0bcc9215e61b422f31e2f3443f0ac64fa68bc) fix: Revert danger-full-access denylist-only mode (#17732) — _@viyatb-oai_
- [`b3ae531`](https://github.com/openai/codex/commit/b3ae531b3a6c4f9742dff6a7bd1b14796bde9c53) feat: codex sampler (#17784) — _@jif-oai_
- [`4f2fc3e`](https://github.com/openai/codex/commit/4f2fc3e3fa8d72e2eafc133fc3c9c4281f4dad81) Moving updated-at timestamps to unique millisecond times (#17489) — _@ddr-oai_
- [`61fe231`](https://github.com/openai/codex/commit/61fe23159ed275e444e9b7614bb59a3ac4639f2a) [codex-analytics] add session source to client metadata (#17374) — _@marksteinbrick-oai_
- [`f030ab6`](https://github.com/openai/codex/commit/f030ab62ebee01cae5a4d18a7a167a81e3f836c4) Always enable original image detail on supported models (#17665) — _@fjord-oai_
- [`e6947f8`](https://github.com/openai/codex/commit/e6947f85f6620390ebca1c48353773ece735c08e) feat: add context percent to status line (#17637) — _@jif-oai_
- [`34a9ca0`](https://github.com/openai/codex/commit/34a9ca083ee1e3ad478e51465e8a7fcfeabb1813) nit: feature flag (#17777) — _@jif-oai_
- [`2f6fc7c`](https://github.com/openai/codex/commit/2f6fc7c137bfa1b607b97bd932370022bea198eb) Add realtime output modality and transcript events (#17701) — _@aibrahim-oai_
- [`a6b03a2`](https://github.com/openai/codex/commit/a6b03a22cc35b36d46065185c7982cd02bb82c4e) Log realtime call location (#17761) — _@aibrahim-oai_
- [`b704df8`](https://github.com/openai/codex/commit/b704df85b856cc7ae20fb339b25742fdf7150d5c) [codex-analytics] feature plumbing and emittance (#16640) — _@rhan-oai_
- [`05c5829`](https://github.com/openai/codex/commit/05c582992359e47afaa298c045c62af42001a463) [codex] drain mailbox only at request boundaries (#17749) — _@tibo-openai_
- [`ad37389`](https://github.com/openai/codex/commit/ad37389c18afbe58374936731956cd9cdf24a5a8) [codex] Initialize ICU data for code mode V8 (#17709) — _@pakrym-oai_
- [`3b24a9a`](https://github.com/openai/codex/commit/3b24a9a53264f96e7caeea0577b994b0d10a8c6f) Refactor plugin loading to async (#17747) — _@pakrym-oai_
- [`ff584c5`](https://github.com/openai/codex/commit/ff584c5a4bff27adbd689d997010880b989645b9) [codex] Refactor marketplace add into shared core flow (#17717) — _@xli-oai_
- [`d9a385a`](https://github.com/openai/codex/commit/d9a385ac8c2ff91b3180cddd3c973095eafb2d88) fix: pin inputs (#17471) — _@viyatb-oai_
- [`0c8f317`](https://github.com/openai/codex/commit/0c8f3173e4bdd62c1dad8fa401ed835146e07a94) [codex] Remove unused Rust helpers (#17146) — _@pakrym-oai_
- [`f3cbe3d`](https://github.com/openai/codex/commit/f3cbe3d38564c9ced399f18fca7435b9843f9e43) [codex] Add symlink flag to fs metadata (#17719) — _@pakrym-oai_
- [`495ed22`](https://github.com/openai/codex/commit/495ed22dfb04e25b0d269d86cec87fd8fc6bca99) guardian timeout fix pr 3 - ux touch for timeouts (#17557) — _@won-openai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
