# anomalyco/opencode — 2026-03-08

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-07T23:59:59.000Z → 2026-03-08T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Release **v1.2.22** shipped (`1db292f`), bundling a batch of TUI/app stability fixes plus a small model-routing change: fallback to free nano for the small model is now disabled (`7d7837e`), so anyone relying on implicit small-model fallback should re-check their config.

The most user-visible fixes in this release:
- **TTY/exit hardening**: `guard tui exit` (#16640) and a fix to `avoid TTY corruption from double cleanup` (#16565) should reduce broken terminals after crashes.
- **cwd correctness**: TUI now canonicalizes cwd after chdir (#16641), with a cross-platform process cwd test (#16594) and a Windows ripgrep path normalization (`e30678a`) — useful if you've hit symlink/path mismatches.
- **/mcp toggling fix** (#16431) restores broken MCP enable/disable in the TUI.
- **Session/cache reliability**: pruning and eviction of stale app session caches (#16584), trimming retained desktop terminal buffers (#16583), and a fix for messages not loading reliably (`c797b60`).

The desktop app also got polish: sidebar background color when collapsed (`d15c2ce`), suppressed hover flicker on project menu / right-click (`5cc4bb4`), and less aggressive auto-expand/collapse (`c53d1d3`), plus a UI hooks refactor (`f386137`).

Notable churn worth skipping unless you follow TUI design closely: `iamdavidhill` landed a series of composer redesigns (auto-accept docking, model/thinking selectors beside Add file, prompt-control padding, new-session logo) across `69cb49f`, `426dcfa`, `9813537`, `12d862d`, `207ebf4`, `e66fd07`, `ae25c1e` — and then reverted essentially all of them later the same day (`8fa0498`, `a5710ed`, `2efdc9d`, `0c24588`, `f03288b`, `09388c9`, plus the earlier `9dc8ac4` and `b5151c4`). Net effect on the composer: unchanged. If you were tracking the auto-accept-as-permissions-select idea, it's parked, not shipped.

Test coverage was also tightened around process, ripgrep, and installation helpers (`e6d1aae`), with unused Ripgrep.search coverage removed (#16554). No new issues or open PRs in window.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`7d7837e`](https://github.com/anomalyco/opencode/commit/7d7837e5b6eb0fc88d202936b726ab890f4add53) disable fallback to free nano for small model — _@thdxr_
- [`1db292f`](https://github.com/anomalyco/opencode/commit/1db292f4df3bd69d4262ca6471aa5879b83b1fd1) release: v1.2.22 — _@opencode_
- [`49a3a9f`](https://github.com/anomalyco/opencode/commit/49a3a9fe365ab7c971220ac58572e34f2cc68897) guard tui exit (#16640) — _@kommander_
- [`e51ed46`](https://github.com/anomalyco/opencode/commit/e51ed460a6d5392c67485a829e2b1991ec50dbe8) fix(tui): canonicalize cwd after chdir (#16641) — _@Hona_
- [`d15c2ce`](https://github.com/anomalyco/opencode/commit/d15c2ce349f7c73aad25138de27df61ebe9bc634) tui: fix sidebar background color when collapsed — _@iamdavidhill_
- [`5cc4bb4`](https://github.com/anomalyco/opencode/commit/5cc4bb408914e2da35de66def1925867bceac230) app: suppress hover when opening project menu or right-clicking to prevent flickering — _@iamdavidhill_
- [`6e9e027`](https://github.com/anomalyco/opencode/commit/6e9e027886e78bdf08ecf94bc365537576b76b26) fix: trim retained desktop terminal buffers (#16583) — _@nexxeln_
- [`f9a3d12`](https://github.com/anomalyco/opencode/commit/f9a3d129a4a852558a1cfdf6949839834d8a4438) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`c53d1d3`](https://github.com/anomalyco/opencode/commit/c53d1d3ad8280881fbb4364e0061a682608c420f) fix(app): less auto-expand/collapse — _@adamdotdevin_
- [`f386137`](https://github.com/anomalyco/opencode/commit/f386137fbaf2e2f56fb32f8656e802f592a41341) chore: refactoring ui hooks — _@adamdotdevin_
- [`c797b60`](https://github.com/anomalyco/opencode/commit/c797b60069df9b6510442e6e2d582c572f88d5c1) fix(app): messages not loading reliably — _@adamdotdevin_
- [`a139e92`](https://github.com/anomalyco/opencode/commit/a139e9297d2a269308c66efbc7ed2b7a53a59a16) fix: prune and evict stale app session caches (#16584) — _@nexxeln_
- [`050f99e`](https://github.com/anomalyco/opencode/commit/050f99ec54db39eb2bfaab17c5deb522c25fa306) test: make process cwd check cross-platform (#16594) — _@nexxeln_
- [`23ed652`](https://github.com/anomalyco/opencode/commit/23ed65290112250f37d07d26ad5c2d20960300ee) docs(zen.mdx): correct Italian grammar and punctuation errors (#16590) — _@Bezkup_
- [`13a68f3`](https://github.com/anomalyco/opencode/commit/13a68f3de368a9c5257ba620d791e290379ceb0a) fix(opencode): avoid TTY corruption from double cleanup (#16565) — _@tobwen_
- [`fdad35a`](https://github.com/anomalyco/opencode/commit/fdad35aaa70f9999a19b064c8d99731303b58db9) fix(tui): fix broken /mcp toggling (#16431) — _@natewill_
- [`a2ce4eb`](https://github.com/anomalyco/opencode/commit/a2ce4eb6506a61ed9f48fecd31e9085109fe3b47) test: remove unused Ripgrep.search coverage (#16554) — _@thdxr_
- [`8fa0498`](https://github.com/anomalyco/opencode/commit/8fa04986cff0d213e1e1c00124a00dcb959a8a3f) Revert "tui: dock auto-accept after thinking and move Add file to bottom-left" — _@iamdavidhill_
- [`a5710ed`](https://github.com/anomalyco/opencode/commit/a5710ed3e1627d793f368101be8e194f555aa291) Revert "tui: keep model + thinking selectors beside Add file" — _@iamdavidhill_
- [`2efdc9d`](https://github.com/anomalyco/opencode/commit/2efdc9df93f9e97506d7d0108877b624b8b78fe0) Revert "tui: add more editor bottom padding for prompt controls" — _@iamdavidhill_
- [`0c24588`](https://github.com/anomalyco/opencode/commit/0c245886fe11c2a681eac7a66030857c834f43cb) Revert "tui: expose auto-accept as a permissions select" — _@iamdavidhill_
- [`f03288b`](https://github.com/anomalyco/opencode/commit/f03288b411b67cd70fbc724d17004543aad88928) Revert "tui: use text-base color for prompt selects" — _@iamdavidhill_
- [`09388c9`](https://github.com/anomalyco/opencode/commit/09388c98f3bbf737615845e3d40c2adfe66089f7) Revert "tui: remove prompt model/thinking/permissions selectors on dev so the composer stays simple" — _@iamdavidhill_
- [`ae25c1e`](https://github.com/anomalyco/opencode/commit/ae25c1e7b75c17d799f7a245f03ca0cd8bef1eab) tui: remove prompt model/thinking/permissions selectors on dev so the composer stays simple — _@iamdavidhill_
- [`0813c14`](https://github.com/anomalyco/opencode/commit/0813c14cc65bd13caadd77139a05cc81550e830e) tui: restore new-session logo on dev so users recognize OpenCode immediately — _@iamdavidhill_
- [`b5151c4`](https://github.com/anomalyco/opencode/commit/b5151c421f44c393e914d2f8b772f4a8ef5c4666) tui: revert new-session logo on dev so this UI change only ships with auto-accept-permissions — _@iamdavidhill_
- [`e66fd07`](https://github.com/anomalyco/opencode/commit/e66fd079dbb8467ab7bad8296f6e7f6907323938) tui: add opencode logo to new session screen so users can immediately identify the app when starting a fresh session — _@iamdavidhill_
- [`207ebf4`](https://github.com/anomalyco/opencode/commit/207ebf4b8cc53b6390ab96f393cbbbbaacd49781) tui: use text-base color for prompt selects — _@iamdavidhill_
- [`12d862d`](https://github.com/anomalyco/opencode/commit/12d862dbd3ec0cea6da7daa8e53ec71183480a9b) tui: expose auto-accept as a permissions select — _@iamdavidhill_
- [`9813537`](https://github.com/anomalyco/opencode/commit/981353793d47280973f46022292f2e8dd7dfd681) tui: add more editor bottom padding for prompt controls — _@iamdavidhill_
- [`426dcfa`](https://github.com/anomalyco/opencode/commit/426dcfa3b0cacc79abac6c6f61a03613b572ad64) tui: keep model + thinking selectors beside Add file — _@iamdavidhill_
- [`69cb49f`](https://github.com/anomalyco/opencode/commit/69cb49f7cc6557f8d9529695d7ecc75c0ac8a5aa) tui: dock auto-accept after thinking and move Add file to bottom-left — _@iamdavidhill_
- [`e30678a`](https://github.com/anomalyco/opencode/commit/e30678a088d7921a4084595ae3c83a2095dbd0f2) test: normalize ripgrep path assertion on windows — _@thdxr_
- [`771b29a`](https://github.com/anomalyco/opencode/commit/771b29a857339cf2156d80b275888ee98ed9a708) chore: generate — _@opencode-agent[bot]_
- [`e6d1aae`](https://github.com/anomalyco/opencode/commit/e6d1aae33afc1270a94b8e26f8a520caa275ddd3) test: lock in process, ripgrep, and installation helpers — _@thdxr_
- [`9dc8ac4`](https://github.com/anomalyco/opencode/commit/9dc8ac47341032096e10761c570e498cc26d2ec1) tui: revert prompt control docking — _@iamdavidhill_
- [`fdd037b`](https://github.com/anomalyco/opencode/commit/fdd037ba204126c37bd175ace3428d35c7502619) tui: dock auto-accept after thinking and move Add file to bottom-left — _@iamdavidhill_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
