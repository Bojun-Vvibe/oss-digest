# openai/codex — 2026-04-03

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-02T23:59:59.000Z → 2026-04-03T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline change is the **removal of the `OPENAI_BASE_URL` environment variable fallback** ([#16720](https://github.com/openai/codex/commit/4b8bab6ad3d80d2d20d17f18e4120dbc86681972)) — a deliberate deprecation in favor of the `openai_base_url` config field, which will break setups still relying on the env var. Operators upgrading should read this first.

Several user-visible fixes landed alongside it:

- **macOS sandbox panic in the HTTP client** when proxy discovery hit a NULL `SCDynamicStore` is fixed ([#16670](https://github.com/openai/codex/commit/1cc87019b413f38664f1248ca954ac872a5a9149), addresses #15640).
- **MCP tool listing for hyphenated server names** now resolves correctly ([#16674](https://github.com/openai/codex/commit/a3b3e7a6cc1725b6210250ef5eaf02dfcdef3457), addresses #16671, #14927).
- **macOS malloc diagnostics no longer leak into the TUI composer** as fake pasted input ([#16699](https://github.com/openai/codex/commit/a71fc47cf8a7ade4ca7c1823d9affa02749c9ecd), addresses #11555).
- **`bwrap` warning is suppressed when sandboxing is bypassed** ([#16667](https://github.com/openai/codex/commit/0f7394883e59c2a183b707cedbb7e640893d6245), addresses #15282).
- **`/copy` stale output** after commentary-only turns is fixed ([#16648](https://github.com/openai/codex/commit/cc8fd0ff65b603133304db268dd4b7a86b304dc3), addresses #16454).
- **Deprecated `codex login --api-key`** parses again so users see the deprecation guidance instead of a Clap error ([#16658](https://github.com/openai/codex/commit/8cd7f20b482a14c18e0db86ed3cb5c6d105e4dbb), addresses #16655).

Two notable behavioral changes worth flagging: `codex --remote --cd <path>` now properly forwards the working directory to remote app-server sessions ([#16700](https://github.com/openai/codex/commit/0ab8eda375b60dbefd9bf30f2c37d090643866ee), addresses #16124); and forked child threads now have their history sanitized to keep only system/developer/user and final assistant messages, stripping parent tool/reasoning items ([#16709](https://github.com/openai/codex/commit/567d2603b8f8ea0cc5c1140a235aaa81d532f5dd)). Thread starts also auto-trust the cwd when the sandbox is elevated ([#16492](https://github.com/openai/codex/commit/95e809c135344747008ae84c7b328399d29f1946)). A new config switch lets users disable the generated `<permissions instructions>` and `<apps_instructions>` prompt blocks ([#16735](https://github.com/openai/codex/commit/8d1964686196b7231e7fc2a2f522d715476b5b0c)).

Internally, a major **`models-manager` extraction from `codex-core`** landed ([#16508](https://github.com/openai/codex/commit/6fff9955f192f6bc47a8458475239f6d14ccc9aa)), followed by removal of temporary re-export shims ([#16626](https://github.com/openai/codex/commit/af8a9d2d2ba84a1dafad6fa51fe3d63e96aceb75)) — relevant for downstream importers. The rest of the day is dominated by Windows-under-Bazel CI plumbing and clippy cleanups (#16450, #16528, #16711, #16662, #16665, #16668, #16629, #16635, #16633, #16715, #16722, #16634), of interest mainly to contributors.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`8d19646`](https://github.com/openai/codex/commit/8d1964686196b7231e7fc2a2f522d715476b5b0c) [codex] allow disabling prompt instruction blocks (#16735) — _@tibo-openai_
- [`f263607`](https://github.com/openai/codex/commit/f263607c60e5e4dc42d4be14374fae171d4da5bb) bazel: lint rust_test targets in clippy workflow (#16450) — _@bolinfest_
- [`eaf12be`](https://github.com/openai/codex/commit/eaf12beacf748a8275ebaa9752ab537075382bc7) Codex/windows bazel rust test coverage no rs (#16528) — _@bolinfest_
- [`4b8bab6`](https://github.com/openai/codex/commit/4b8bab6ad3d80d2d20d17f18e4120dbc86681972) Remove OPENAI_BASE_URL config fallback (#16720) — _@etraut-openai_
- [`a70aee1`](https://github.com/openai/codex/commit/a70aee1a1e778a534df85ae3f3257530249aa86c) Fix Windows Bazel app-server trust tests (#16711) — _@bolinfest_
- [`567d260`](https://github.com/openai/codex/commit/567d2603b8f8ea0cc5c1140a235aaa81d532f5dd) Sanitize forked child history (#16709) — _@aibrahim-oai_
- [`3d8cdac`](https://github.com/openai/codex/commit/3d8cdac7978d6414a6164399d7b0d6c9f44c8b33) fix(tui): sort skill mentions by display name first (#16710) — _@fcoury-oai_
- [`1d4b5f1`](https://github.com/openai/codex/commit/1d4b5f130c772ad04bc0ee6c25403f74e56e98fc) fix windows-only clippy lint violation (#16722) — _@bolinfest_
- [`dc07108`](https://github.com/openai/codex/commit/dc07108af8b0c92adc0bcb320d62db774a06c900) fix: address clippy violations that sneaked in (#16715) — _@bolinfest_
- [`faab4d3`](https://github.com/openai/codex/commit/faab4d39e18465f6111b9ba5b2ee0dbbae600bd2) fix: preserve platform-specific core shell env vars (#16707) — _@bolinfest_
- [`0ab8eda`](https://github.com/openai/codex/commit/0ab8eda375b60dbefd9bf30f2c37d090643866ee) Add remote --cd forwarding for app-server sessions (#16700) — _@etraut-openai_
- [`a71fc47`](https://github.com/openai/codex/commit/a71fc47cf8a7ade4ca7c1823d9affa02749c9ecd) Fix macOS malloc diagnostics leaking into TUI composer (#16699) — _@etraut-openai_
- [`1cc8701`](https://github.com/openai/codex/commit/1cc87019b413f38664f1248ca954ac872a5a9149) Fix macOS sandbox panic in Codex HTTP client (#16670) — _@etraut-openai_
- [`0f73948`](https://github.com/openai/codex/commit/0f7394883e59c2a183b707cedbb7e640893d6245) Suppress bwrap warning when sandboxing is bypassed (#16667) — _@etraut-openai_
- [`a3b3e7a`](https://github.com/openai/codex/commit/a3b3e7a6cc1725b6210250ef5eaf02dfcdef3457) Fix MCP tool listing for hyphenated server names (#16674) — _@etraut-openai_
- [`cc8fd0f`](https://github.com/openai/codex/commit/cc8fd0ff65b603133304db268dd4b7a86b304dc3) Fix stale /copy output after commentary-only turns (#16648) — _@etraut-openai_
- [`af8a9d2`](https://github.com/openai/codex/commit/af8a9d2d2ba84a1dafad6fa51fe3d63e96aceb75) remove temporary ownership re-exports (#16626) — _@aibrahim-oai_
- [`b15c918`](https://github.com/openai/codex/commit/b15c918836ae114f9706e24532465e864f5506c4) fix: use cmd.exe in Windows unicode shell test (#16668) — _@bolinfest_
- [`14f95db`](https://github.com/openai/codex/commit/14f95db57b269a06c8b56b62a280ae54c7bf819b) fix: use COMSPEC in Windows unicode shell test (#16665) — _@bolinfest_
- [`b4787bf`](https://github.com/openai/codex/commit/b4787bf4c00fa0c3253f5979330b37d41e740da7) fix: changes to test that should help them pass on Windows under Bazel (#16662) — _@bolinfest_
- [`6fff995`](https://github.com/openai/codex/commit/6fff9955f192f6bc47a8458475239f6d14ccc9aa) extract models manager and related ownership from core (#16508) — _@aibrahim-oai_
- [`8cd7f20`](https://github.com/openai/codex/commit/8cd7f20b482a14c18e0db86ed3cb5c6d105e4dbb) Fix deprecated login --api-key parsing (#16658) — _@etraut-openai_
- [`6db6de0`](https://github.com/openai/codex/commit/6db6de031aaa2c30c690ab9749aee449d653e236) build: fix Bazel lzma-sys wiring (#16634) — _@starr-openai_
- [`beb3978`](https://github.com/openai/codex/commit/beb3978a3ba15c631d6844a967b05e0b68a3a196) test: use cmd.exe for ProviderAuthScript on Windows (#16629) — _@bolinfest_
- [`862158b`](https://github.com/openai/codex/commit/862158b9e990f06c64419258f7ec661b94a4f8a1) app-server: make thread/shellCommand tests shell-aware (#16635) — _@bolinfest_
- [`cb9fb56`](https://github.com/openai/codex/commit/cb9fb562a46c2217ff0386bb487932db828b3cda) fix: address unused variable on windows (#16633) — _@bolinfest_
- [`95e809c`](https://github.com/openai/codex/commit/95e809c135344747008ae84c7b328399d29f1946) Auto-trust cwd on thread start (#16492) — _@aibrahim-oai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
