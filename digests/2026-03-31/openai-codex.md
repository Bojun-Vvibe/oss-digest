# openai/codex — 2026-03-31

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-30T23:59:59.000Z → 2026-03-31T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline change is a major **auth subsystem overhaul** by bolinfest and etraut-openai: `AuthManager` now owns external bearer auth end-to-end, with `ExternalAuthRefresher` generalized to any bearer-only source ([#16286](https://github.com/openai/codex/pull/16286), [#16287](https://github.com/openai/codex/pull/16287)), followed by a refactor collapsing the external-auth enum and refresher trait into a single `ExternalAuth` trait ([#16356](https://github.com/openai/codex/pull/16356)). Building on this, custom model providers with `requires_openai_auth = false` can now use **dynamic auth tokens** instead of only static `env_key` credentials, fixing #15189 ([#16288](https://github.com/openai/codex/pull/16288)). A follow-up patches a Windows test regression from #16287 ([#16366](https://github.com/openai/codex/pull/16366)).

User-visible TUI fixes worth noting: `/status` no longer shows stale weekly rate-limit numbers — it had been reusing a cached snapshot from session start ([#16201](https://github.com/openai/codex/pull/16201), addressing #16194) — and `/feedback` submissions now route through the app server rather than uploading directly via the local feedback crate, restoring app-server behavior ([#16184](https://github.com/openai/codex/pull/16184)).

The agent/turn machinery saw heavy iteration from jif-oai: a new **fork pattern v2** with a `fork_turns` schema property ([#15771](https://github.com/openai/codex/pull/15771)), corrected fork-boundary computation ([#16322](https://github.com/openai/codex/pull/16322)), restriction of `spawn_agent` v2 to messages ([#16325](https://github.com/openai/codex/pull/16325)), a fix reviving the end-of-turn watcher ([#16308](https://github.com/openai/codex/pull/16308)), wait-v2 cleanup ([#16317](https://github.com/openai/codex/pull/16317)), dropping `interrupt` from `send_message` ([#16324](https://github.com/openai/codex/pull/16324)), and more frequent log-DB maintenance with incremental `VACUUM` ([#16330](https://github.com/openai/codex/pull/16330)).

On analytics, rhan-oai landed thread lifecycle events (`thread/start`, `thread/fork`, `thread/resume`) behind the `GeneralAnalytics` feature flag ([#15690](https://github.com/openai/codex/pull/15690)).

Infra/quality: CI now verifies every `codex-rs` Cargo manifest inherits workspace settings to close a gap where Bazel clippy caught lints `cargo clippy` missed ([#16353](https://github.com/openai/codex/pull/16353)); the oversized `chatwidget/tests.rs` was split into topical modules to stay under the repo blob-size limit ([#16361](https://github.com/openai/codex/pull/16361)); and the PR babysitter watcher now prioritizes new review comments ahead of CI/mergeability handling ([#16363](https://github.com/openai/codex/pull/16363)).

No releases, merged PRs (via the PR list), or notable issues were recorded in the window — all activity arrived as direct commits to `main`.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`ae057e0`](https://github.com/openai/codex/commit/ae057e0bb9f3cde31c54fcca59a78456f7805282) Fix stale /status rate limits in active TUI sessions (#16201) — _@etraut-openai_
- [`424e532`](https://github.com/openai/codex/commit/424e532a6b1642358fa9e9a23c7e4af5550859ee) Refactor chatwidget tests into topical modules (#16361) — _@etraut-openai_
- [`9a8730f`](https://github.com/openai/codex/commit/9a8730f31e458850094f2e3b09479b7acd1457c5) ci: verify codex-rs Cargo manifests inherit workspace settings (#16353) — _@bolinfest_
- [`04ec9ef`](https://github.com/openai/codex/commit/04ec9ef8af6f3e8d112b073deb8b5f25c056e6ac) Fix Windows external bearer refresh test (#16366) — _@bolinfest_
- [`103acdf`](https://github.com/openai/codex/commit/103acdfb062f8d1e30e64251cda8d02b93032e38) Refactor external auth to use a single trait (#16356) — _@etraut-openai_
- [`0fe873a`](https://github.com/openai/codex/commit/0fe873ad5f4d0a9e5c5cc78fa34ad1e3ac373b64) Fix PR babysitter review comment monitoring (#16363) — _@etraut-openai_
- [`e8de4ea`](https://github.com/openai/codex/commit/e8de4ea953423542e064993e8128872a41fc85fb) [codex-analytics] thread events (#15690) — _@rhan-oai_
- [`868ac15`](https://github.com/openai/codex/commit/868ac158d7e7c3e4618e531d85595da53222d742) feat: log db better maintenance (#16330) — _@jif-oai_
- [`f396454`](https://github.com/openai/codex/commit/f396454097a189fc0c8b8b395b6b9244ca2c2abc) Route TUI `/feedback` submission through the app server (#16184) — _@etraut-openai_
- [`03b2465`](https://github.com/openai/codex/commit/03b24655910323021de545fb69705611c65b493e) fix: fix clippy issue caught by cargo but not bazel (#16345) — _@bolinfest_
- [`b09b58c`](https://github.com/openai/codex/commit/b09b58ce2d52e93930be9b22c185267657d74920) chore: drop interrupt from send_message (#16324) — _@jif-oai_
- [`285f4ea`](https://github.com/openai/codex/commit/285f4ea8176c74934e22fc9f78e216b9c7da429c) feat: restrict spawn_agent v2 to messages (#16325) — _@jif-oai_
- [`4c72e62`](https://github.com/openai/codex/commit/4c72e62d0bf345a57749cfd867951be1a49162b6) fix: update fork boundaries computation (#16322) — _@jif-oai_
- [`1fc8aa0`](https://github.com/openai/codex/commit/1fc8aa0e169c74b571960f529baafc17d686beda) feat: fork pattern v2 (#15771) — _@jif-oai_
- [`2b8d29a`](https://github.com/openai/codex/commit/2b8d29ac0de716628f4522ab4bff3ab1e73b45a2) nit: update aborted line (#16318) — _@jif-oai_
- [`ec21e1f`](https://github.com/openai/codex/commit/ec21e1fd01dcc8ca503de4c1dc7b7e716a3bda9f) chore: clean wait v2 (#16317) — _@jif-oai_
- [`25fbd7e`](https://github.com/openai/codex/commit/25fbd7e40e53b9896aa4cca0149cf220686f3663) fix: ma2 (#16238) — _@jif-oai_
- [`873e466`](https://github.com/openai/codex/commit/873e46654937aa90eb009f3e09fbd859118f99f4) fix: one shot end of turn (#16308) — _@jif-oai_
- [`20f43c1`](https://github.com/openai/codex/commit/20f43c1e05b2b3890a20521a8138aa53ddaf9837) core: support dynamic auth tokens for model providers (#16288) — _@bolinfest_
- [`0071968`](https://github.com/openai/codex/commit/007196882993dbb987905acf30d450279cc8d560) auth: let AuthManager own external bearer auth (#16287) — _@bolinfest_
- [`ea650a9`](https://github.com/openai/codex/commit/ea650a91b31eef5b3b376ca4282686df242b9132) auth: generalize external auth tokens for bearer-only sources (#16286) — _@bolinfest_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
