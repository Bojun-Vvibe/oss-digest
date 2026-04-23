# openai/codex — 2026-03-28

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-27T23:59:59.000Z → 2026-03-28T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is a major **CI/build infrastructure overhaul** centered on Bazel and the new `codex-tools` crate, with no PRs, issues, or releases recorded — only commits landing on `main`.

## Build & CI restructuring

The most consequential change is splitting the monolithic `rust-ci.yml` into a fast PR-time Cargo workflow plus a full post-merge lane (#16072), paired with the migration of `argument-comment-lint` from a shell-wrapped `cargo dylint` into a native Bazel aspect (#16106). Follow-ups cleaned up lint violations on Windows (#16071) and Linux (#16118), rewrote the lint wrappers in Python (#16063), routed Windows through the packaged wrapper (#16130), and moved non-Windows runs to BuildBuddy (#16136). The full Windows gnullvm Bazel path is now enabled (#15952), with Bazel clippy running on it (#16067), stack flags wired into unit-test binaries (#16074), and a PowerShell parser process reused to unblock the `shell-command` lane (#16057). The macOS SDK pin was also refreshed to unstick BuildBuddy (#16128), and SDK tests now consume a Bazel-built `codex` (#16046). If you only read one thread, read #16106 + #16072 — they reshape contributor feedback loops.

## codex-tools migration

bolinfest continued peeling passive tool-definition layers out of `codex-core` into a new `codex-tools` crate: tool-spec models (#16047), configured tool specs (#16129), code-mode tool spec adapters (#16132), and local host tool specs (#16138). Worth tracking if you touch tool plumbing.

## TUI / app-server fixes

The `tui_app_server` directory was renamed back to `tui` (#16104), and the temporary `codex-tui` originator workaround was removed (#16116). Bug fixes: skills picker `$` scrolling truncation (#16109, fixes #16091), agent-picker closed-state regression (#16014, addresses #15992), `resume <name>` lookup (#16050, addresses #16049), and footer refresh on collaboration-mode changes (#16026). Custom prompt support was fully removed from protocol, core, and TUI slash-command flow (#16115) — a notable user-facing simplification.

## New capability

`codex exec` now supports **stdin piping** à la `claude -p` (#15917), enabling `echo "..." | codex exec -p "summarize"` workflows.

Other: stale curated plugin cache refresh race fixed (#16126); review-policy exec tests made hermetic (#16137); PR Babysitter skill updated for review replies (#16112).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`4e119a3`](https://github.com/openai/codex/commit/4e119a3b38e4a4decfccb003acecabc4614142b6) codex-tools: extract local host tool specs (#16138) — _@bolinfest_
- [`46b653e`](https://github.com/openai/codex/commit/46b653e73c7900cc7fb2e06effc5cf305541aa76) Fix skills picker scrolling in tui app server (#16109) — _@etraut-openai_
- [`f7ef959`](https://github.com/openai/codex/commit/f7ef9599eddade2c4d1763fcc04581315994dbc6) exec: make review-policy tests hermetic (#16137) — _@bolinfest_
- [`a16a910`](https://github.com/openai/codex/commit/a16a9109d7c464be03c463074fbe2daaa465b727) ci: use BuildBuddy for rust-ci-full non-Windows argument-comment-lint (#16136) — _@bolinfest_
- [`2238c16`](https://github.com/openai/codex/commit/2238c16a914c9b7337b2bd87bc65972f8daf06d1) codex-tools: extract code mode tool spec adapters (#16132) — _@bolinfest_
- [`c25c0d6`](https://github.com/openai/codex/commit/c25c0d6e9efb143df91fe91e56c1bb05f09359bd) core: fix stale curated plugin cache refresh races (#16126) — _@bolinfest_
- [`313fb95`](https://github.com/openai/codex/commit/313fb959896b257ab1df2aa32adb8efc789806aa) ci: keep rust-ci-full Windows argument-comment-lint on packaged wrapper (#16130) — _@bolinfest_
- [`4e27a87`](https://github.com/openai/codex/commit/4e27a87ec6e1ac95e5bc8a56e5687829e809270c) codex-tools: extract configured tool specs (#16129) — _@bolinfest_
- [`ae8a3be`](https://github.com/openai/codex/commit/ae8a3be9585d0918fe38fa199c963aeb80ee4f55) bazel: refresh the expired macOS SDK pin (#16128) — _@bolinfest_
- [`bc53d42`](https://github.com/openai/codex/commit/bc53d42fd98c3e7bc74ece9ac31ddbe894b7a942) codex-tools: extract tool spec models (#16047) — _@bolinfest_
- [`178d2b0`](https://github.com/openai/codex/commit/178d2b00b1da55e24a16695337bb1b78d6f5883c) Remove the codex-tui app-server originator workaround (#16116) — _@etraut-openai_
- [`48144a7`](https://github.com/openai/codex/commit/48144a7fa41e2343c7622f01e82eb6065e29b7b7) Remove remaining custom prompt support (#16115) — _@etraut-openai_
- [`fce0f76`](https://github.com/openai/codex/commit/fce0f76d577b5070f1e2b4a2abaa8350acfc38ff) build: migrate argument-comment-lint to a native Bazel aspect (#16106) — _@bolinfest_
- [`65f631c`](https://github.com/openai/codex/commit/65f631c3d671d0328271b4462656d47f5003cde5) fix: fix comment linter lint violations in Linux-only code (#16118) — _@bolinfest_
- [`61429a6`](https://github.com/openai/codex/commit/61429a6c1047244c91732e87b5898867853705f0) Rename tui_app_server to tui (#16104) — _@etraut-openai_
- [`3d1abf3`](https://github.com/openai/codex/commit/3d1abf3f3d5c9f9bcc7b1d93ce509ae75e01214b) Update PR babysitter skill for review replies and resolution (#16112) — _@etraut-openai_
- [`bede1d9`](https://github.com/openai/codex/commit/bede1d9e23202e2fce23b2ad6d154255672a675b) fix(tui): refresh footer on collaboration mode changes (#16026) — _@fcoury_
- [`e39ddc6`](https://github.com/openai/codex/commit/e39ddc61b14a8c645124f5d45ab912989a02e5fb) bazel: add Windows gnullvm stack flags to unit test binaries (#16074) — _@bolinfest_
- [`b943664`](https://github.com/openai/codex/commit/b94366441ee80f4c583e321ebb181c4805dad736) ci: split fast PR Rust CI from full post-merge Cargo CI (#16072) — _@bolinfest_
- [`e02fd6e`](https://github.com/openai/codex/commit/e02fd6e1d3d0ee7a47780ab3efc1c769cd373337) fix: clean up remaining Windows argument-comment-lint violations (#16071) — _@bolinfest_
- [`f4d0cbf`](https://github.com/openai/codex/commit/f4d0cbfda61ad81559cb8d7b800b67fef2034748) ci: run Bazel clippy on Windows gnullvm (#16067) — _@bolinfest_
- [`343d1af`](https://github.com/openai/codex/commit/343d1af3da64fcfd52260149855159048e9c5178) bazel: enable the full Windows gnullvm CI path (#15952) — _@bolinfest_
- [`5037a2d`](https://github.com/openai/codex/commit/5037a2d19924f2e49490453ab2a913da938afbe5) refactor: rewrite argument-comment lint wrappers in Python (#16063) — _@bolinfest_
- [`142681e`](https://github.com/openai/codex/commit/142681ef932eab1da27c2a501c60bc857e755a0e) shell-command: reuse a PowerShell parser process on Windows (#16057) — _@bolinfest_
- [`71923f4`](https://github.com/openai/codex/commit/71923f43a7ef8ed02531a885228257e9c5b87c7b) Support Codex CLI stdin piping for `codex exec` (#15917) — _@jliccini_
- [`61dfe0b`](https://github.com/openai/codex/commit/61dfe0b86c75bb4e6c173a70ca9fb2f2daac2f67) chore: clean up argument-comment lint and roll out all-target CI on macOS (#16054) — _@bolinfest_
- [`ed977b4`](https://github.com/openai/codex/commit/ed977b42ac4f0b71ea218546153a751866f25b5b) Fix tui_app_server agent picker closed-state regression (#16014) — _@etraut-openai_
- [`8e24d5a`](https://github.com/openai/codex/commit/8e24d5aaea1ca44bde08fe7f9b7a2541a4469fe6) Fix tui_app_server resume-by-name lookup regression (#16050) — _@etraut-openai_
- [`2ffb32d`](https://github.com/openai/codex/commit/2ffb32db98b2c1ac83cb811e7ce1c0de2320c09d) ci: run SDK tests with a Bazel-built codex (#16046) — _@bolinfest_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
