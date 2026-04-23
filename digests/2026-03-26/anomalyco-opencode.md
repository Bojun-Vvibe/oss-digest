# anomalyco/opencode — 2026-03-26

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-25T23:59:59.000Z → 2026-03-26T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Headline today is the **v1.3.3 release** (`54443bf`), shipped alongside a major UX change: the **WebUI is now embedded directly in the binary** with new proxy flags (#19299), and the TUI gained a worker that **bypasses local SSE event streaming** (#19183) — both worth reading if you care about how opencode serves its frontend.

A second theme is a sweeping **"effectify" refactor** by kitlangton, migrating core services to the Effect runtime: Config (#19139, plus a follow-up bump to effect beta.37 in #19322), LSP with InstanceState (#19150), the Bus service moving to Effect PubSub (#18579), and Effect.cached-based load/scan deduplication for skills (#19165) and file scanning (#19164). MCP also got a lifecycle/cancelPending fix and Effect migration (#19042), plus a follow-up to close transport on failed/timed-out connections (#19200). If you depend on opencode internals, expect API churn.

On the core architecture side, jlongster **removed the workspace server and WorkspaceContext** as a step toward better routing (#19316) — a notable structural change. Separately, **git-backed review modes were rolled back** (#19295), so anyone tracking that feature should pause.

Model/provider work: a dedicated **GPT system prompt** for non-Codex GPT models, modeled after the Codex CLI (#19220); enterprise auth URL fix (#19212); gitlab-ai-provider bumped to 5.3.3 for DWS tool approval (#19185); and WIP commits toward "zen" model handling by fwang (`2ad190e`, `2d502d6`).

Smaller fixes worth noting: Windows web UI bundle build (#19337), markdown jank reduction during streaming responses (#19304), startup perf improvements (#19288), font bundling removed (#19329), shell tool defaults to collapsed (`ad3b350`), fork-session button removed (`311ba41`), and image paste on Windows Terminal 1.25+ with kitty keyboard (#17674). Windows e2e tests restored to 5 workers (#19188).

No new issues, PRs, or formal release notes surfaced in the window beyond the v1.3.3 tag itself.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`ef7d1f7`](https://github.com/anomalyco/opencode/commit/ef7d1f7efa2e682cf0e3e322009fe84b577bbe02) fix: web ui bundle build on windows (#19337) — _@Hona_
- [`b7a06e1`](https://github.com/anomalyco/opencode/commit/b7a06e193952a66a8efa07feb4e105f44bf7ea8b) fix(ui): reduce markdown jank while responses stream (#19304) — _@nexxeln_
- [`311ba41`](https://github.com/anomalyco/opencode/commit/311ba4179a3c112a7e0cbbeae152a971284a3632) fix(app): remove fork session button — _@adamdotdevin_
- [`ad3b350`](https://github.com/anomalyco/opencode/commit/ad3b35067298a0803eef0c306510d37670ec8b18) fix(app): default shell tool to collapsed — _@adamdotdevin_
- [`590523d`](https://github.com/anomalyco/opencode/commit/590523dcd15e8011c86732f5bbd44f1b64342a12) chore: generate — _@opencode-agent[bot]_
- [`b8fb75a`](https://github.com/anomalyco/opencode/commit/b8fb75a94adbd9f0175e29403cd85fde55cc2793) fix(app): don't bundle fonts (#19329) — _@adamdotdevin_
- [`98a31e3`](https://github.com/anomalyco/opencode/commit/98a31e30ccc5efed528db5cb7afe9eb00f5aa2d2) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`c333e91`](https://github.com/anomalyco/opencode/commit/c333e914eecfe3716ec703e17425af0b908a21f5) chore: generate — _@opencode-agent[bot]_
- [`c7760b4`](https://github.com/anomalyco/opencode/commit/c7760b433b1bdbcaed7e7cd55d53b5b331f0f0fa) fix(app): more startup perf (#19288) — _@adamdotdevin_
- [`2e6ac8f`](https://github.com/anomalyco/opencode/commit/2e6ac8ff49eabcb1b62c1bd504338e7449f80c6e) fix(mcp): close transport on failed/timed-out connections (#19200) — _@kitlangton_
- [`1ebc92f`](https://github.com/anomalyco/opencode/commit/1ebc92fd36837b1e31e7dbab52f378cd62aa7157) refactor(config): use cachedInvalidateWithTTL, bump effect to beta.37 (#19322) — _@kitlangton_
- [`9f94bdb`](https://github.com/anomalyco/opencode/commit/9f94bdb49634bda90a2804585b8d739228dde876) chore: generate — _@opencode-agent[bot]_
- [`28f5176`](https://github.com/anomalyco/opencode/commit/28f5176ffd499b7572faf01a56d3778248449287) effectify Config service (#19139) — _@kitlangton_
- [`3845044`](https://github.com/anomalyco/opencode/commit/38450443b18c4736acaa2310fbe480674f68369d) feat(core): remove workspace server, WorkspaceContext, start work towards better routing (#19316) — _@jlongster_
- [`da1d372`](https://github.com/anomalyco/opencode/commit/da1d37274fcc6dcb81ff76ebcf2818100239aa87) feat: add gpt prompt so non codex gpt models have their own system prompt modeled after codex cli (#19220) — _@rekram1-node_
- [`17e8f57`](https://github.com/anomalyco/opencode/commit/17e8f577d681db858c7a24db2c91d1b45b7b85c9) chore: generate — _@opencode-agent[bot]_
- [`c7d2309`](https://github.com/anomalyco/opencode/commit/c7d23098d13ab051874cfc6833756d3f35d7858e) refactor(lsp): effectify LSP service with InstanceState (#19150) — _@kitlangton_
- [`bcf18ed`](https://github.com/anomalyco/opencode/commit/bcf18edde4fe835b8e064e36f019e947429a9178) changelog ci tweaks — _@thdxr_
- [`9a2482a`](https://github.com/anomalyco/opencode/commit/9a2482ac09c03d32d9331a84b8b8bd137301ead0) chore: generate — _@opencode-agent[bot]_
- [`54443bf`](https://github.com/anomalyco/opencode/commit/54443bfb7e090ec3130dc972e689a3e5cc55a7f9) release: v1.3.3 — _@opencode_
- [`ec20efc`](https://github.com/anomalyco/opencode/commit/ec20efc11a256444d5359d4520f24239d4dd36b1) feat: embed WebUI in binary with proxy flags (#19299) — _@thdxr_
- [`83ed1c4`](https://github.com/anomalyco/opencode/commit/83ed1c4414859b53c91f1e2f6985c3498bac1e84) tui: bypass local SSE event streaming in worker (#19183) — _@thdxr_
- [`1d363fa`](https://github.com/anomalyco/opencode/commit/1d363fa19fe9c1445f635498da48211bf09cbc97) chore: generate — _@opencode-agent[bot]_
- [`1b028d0`](https://github.com/anomalyco/opencode/commit/1b028d0632c78a9061d8c235e329313b8f41646f) revert: roll back git-backed review modes (#19295) — _@nexxeln_
- [`d500a84`](https://github.com/anomalyco/opencode/commit/d500a8432a690e802edcc065df84a9c9ec8c3652) fix: ensure enterprise url is set properly during auth flow (#19212) — _@rekram1-node_
- [`2d502d6`](https://github.com/anomalyco/opencode/commit/2d502d6ffe1aaf8c02d26b863ad4fd8d82bf28b5) go: do not respect disabled zen models — _@fwang_
- [`2ad190e`](https://github.com/anomalyco/opencode/commit/2ad190e4828aa8e098f7871c38f7620937290866) wip: zen — _@fwang_
- [`16742af`](https://github.com/anomalyco/opencode/commit/16742af7f317fb90474008c703110bd06a9ca3fc) wip: zen — _@fwang_
- [`652313e`](https://github.com/anomalyco/opencode/commit/652313e03635f14c10b7acdeab18adb8d75a5a47) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`1a4a6ea`](https://github.com/anomalyco/opencode/commit/1a4a6eabe207156f5ee0584c48e04db7e556f10a) fix(opencode): image paste on Windows Terminal 1.25+ with kitty keyboard (#17674) — _@Hona_
- [`ba244a6`](https://github.com/anomalyco/opencode/commit/ba244a6e62dab9d95496527684dcb46cf939d087) test: restore 5 workers on Windows e2e (#19188) — _@kitlangton_
- [`7cb690d`](https://github.com/anomalyco/opencode/commit/7cb690d7e5f687a00e8988473bd395e0e46c4899) fix: bump gitlab-ai-provider to 5.3.3 for DWS tool approval support (#19185) — _@vglafirov_
- [`31ad6e8`](https://github.com/anomalyco/opencode/commit/31ad6e85ba62ff6d7ad375a584f5ea8a3b66aef3) chore: generate — _@opencode-agent[bot]_
- [`ea04b23`](https://github.com/anomalyco/opencode/commit/ea04b23745b34a9cab0c5d27053398db65e0dbf6) skill: use Effect.cached for load deduplication (#19165) — _@kitlangton_
- [`05c3cfb`](https://github.com/anomalyco/opencode/commit/05c3cfb2aa088d569cdac261fddca01b330a6c4d) ignore: update disavowed list (#19184) — _@rekram1-node_
- [`f54e4b6`](https://github.com/anomalyco/opencode/commit/f54e4b60ccb2c2ad4ebb5fdee48fe45d24af3a88) file: use Effect.cached for scan deduplication (#19164) — _@kitlangton_
- [`97c15a0`](https://github.com/anomalyco/opencode/commit/97c15a087d34f40f4cc09c5c347fbc49b7c7af38) effectify Bus service: migrate to Effect PubSub + InstanceState (#18579) — _@kitlangton_
- [`b90de75`](https://github.com/anomalyco/opencode/commit/b90de755f9b9aa334077f771c67ad7c454896925) fix+refactor(mcp): lifecycle tests, cancelPending fix, Effect migration (#19042) — _@kitlangton_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
