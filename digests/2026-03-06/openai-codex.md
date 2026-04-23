# openai/codex — 2026-03-06

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-05T23:59:59.000Z → 2026-03-06T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline change is the start of a new permission/sandbox config language: `config.toml` now has initial support for permission profiles (#13434), with `SandboxPolicy` being decomposed into separate concerns. Companion work lands structured macOS additional permissions end-to-end through protocol/core/app-server and merges them into sandbox execution (#13499), plus a fix to accept two macOS automation input shapes for approval payloads (#13683) and removal of legacy `MacOsPermissions`/`MacOsPreferences` types (#13677). `SandboxPermissions::requires_additional_permissions()` semantics were also clarified (#13703). If you only read one thing, read #13434 alongside #13499.

Plugin/marketplace work is the other major theme. `plugin/list` now reads from local `marketplace.json` and `plugin/install` got a new signature (#13540); `plugin/install` additionally reports which apps still need ChatGPT auth (#13685). `@plugin` mentions are introduced (#13510) and then upgraded to structured parsing with TUI support (#13711).

Storage and observability got a heavy pass. SQLite logs move to a dedicated `logs_1.sqlite` to cut lock contention (#13772, with a Bazel follow-up #13787), retention drops from 90 to 10 days (#13781), per-log row caps are added (#13763), the sqlite-db feature flag is dropped (#13750), discrepancy metrics are removed (#13753), DB flushing is made lazier (#13620), and old memories are pruned (#13734). On OTEL: turn-level TTFT/TTFM metrics land in codex-core (#13630), a "safe tracing" reorganization of the `[otel]` knobs (#13626), and a structural cleanup of `codex-otel` (#13800).

Other notable items: auth login diagnostics for failed browser flows (#13797); CLI releases now auto-publish to winget (#12943); rmcp-client recovers from streamable HTTP 404 session expiry (#13514); thread rollback now replays from rollout history rather than truncating in-memory state (#13615); a real-data status line (#13619); image-gen now saves to CWD (#13607); and a global `*` proxy domain pattern is rejected (#13789). Two large files (`core/src/codex.rs`, `core/src/config/mod.rs`, the latter >7k lines) had their unit tests split out (#13780, #13783).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`f82678b`](https://github.com/openai/codex/commit/f82678b2a466b3e6e30b8f1eb5ca2dbae528daa7) config: add initial support for the new permission profile config language in config.toml (#13434) — _@bolinfest_
- [`8ba718a`](https://github.com/openai/codex/commit/8ba718a6113d543f36c08b928247c3d0aa772e8f) docs: remove auth login logging plan (#13810) — _@joshka-oai_
- [`d6c8186`](https://github.com/openai/codex/commit/d6c8186195cd3166dec3c8013e013ac0a44803ae) Clarify js_repl binding reuse guidance (#13803) — _@fjord-oai_
- [`5b04cc6`](https://github.com/openai/codex/commit/5b04cc657f39dde43f63f2626c7040529cb1a528) utils/pty: add streaming spawn and terminal sizing primitives (#13695) — _@euroelessar_
- [`4e68fb9`](https://github.com/openai/codex/commit/4e68fb96e238de1ffaa48ce056b2c3c642fa8145) feat: add auth login diagnostics (#13797) — _@joshka-oai_
- [`dd4a521`](https://github.com/openai/codex/commit/dd4a5216c97645ece4194d602b32c7a85a6460f6) chore(otel): reorganize codex-otel crate (#13800) — _@owenlin0_
- [`8ede180`](https://github.com/openai/codex/commit/8ede18011a8723820630c3956188447777813335) Codex/winget auto update (#12943) — _@iceweasel-oai_
- [`9a4787c`](https://github.com/openai/codex/commit/9a4787c24076ac4ca08a62507262818aa63d35f5) fix: reject global wildcard network proxy domains (#13789) — _@viyatb-oai_
- [`7a5aff4`](https://github.com/openai/codex/commit/7a5aff4972e7fc2908bca5ff22a37e207851b473) fix bazel build (#13787) — _@bolinfest_
- [`488875f`](https://github.com/openai/codex/commit/488875f24d1552a014c357ebce4bee556df54184) fix: move unit tests in codex-rs/core/src/codex.rs into their own file (#13783) — _@bolinfest_
- [`39869f7`](https://github.com/openai/codex/commit/39869f74435cb199d56ca5d53cf198f7c5332eec) fix: move unit tests in codex-rs/core/src/config/mod.rs into their own file (#13780) — _@bolinfest_
- [`ad98504`](https://github.com/openai/codex/commit/ad98504d74d7d372f1fcaeb6e907c1fd005dc49e) Reduce SQLite log retention to 10 days (#13781) — _@charley-oai_
- [`8a54d3c`](https://github.com/openai/codex/commit/8a54d3caaa9ec91be396ed6a815f389c07367411) feat: structured plugin parsing (#13711) — _@sayan-oai_
- [`0e41a5c`](https://github.com/openai/codex/commit/0e41a5c4a8f51304ea076dcdedf1d876f1fd939e) chore: improve DB flushing (#13620) — _@jif-oai_
- [`4e6c619`](https://github.com/openai/codex/commit/4e6c6193a19361c06af3ea970621cef1f53f14aa) Move sqlite logs to a dedicated database (#13772) — _@charley-oai_
- [`51fcdc7`](https://github.com/openai/codex/commit/51fcdc760d83c16cc7fa5aeea4503facbadbc9e8) app-server: Emit `thread/name/updated` event globally (#13674) — _@euroelessar_
- [`3449e00`](https://github.com/openai/codex/commit/3449e00bc9a9e28abc7d0db57057f76731ca673b) feat(otel, core): record turn TTFT and TTFM metrics in codex-core (#13630) — _@owenlin0_
- [`6c98a59`](https://github.com/openai/codex/commit/6c98a59dbdcac96c74d2ae3bb124c95ce47d6378) fix(app-server): fix turn_start_shell_zsh_fork_executes_command_v2 flake (#13770) — _@owenlin0_
- [`cb1a182`](https://github.com/openai/codex/commit/cb1a182bbeaa5c2d22f909820fd44e67b87e5ecc) Clarify sandbox permission override helper semantics (#13703) — _@charley-oai_
- [`c8f4b5b`](https://github.com/openai/codex/commit/c8f4b5bc1e0033afd53a41c2324f1c28f331beb1) feat: limit number of rows per log (#13763) — _@jif-oai_
- [`f891f51`](https://github.com/openai/codex/commit/f891f516a5b5d0dc96a471e6d979f5517143594d) feat: drop discrepency metrics (#13753) — _@jif-oai_
- [`fa16c26`](https://github.com/openai/codex/commit/fa16c26908cd6881f03e6484fb60d20c1ad63a53) feat: drop sqlite db feature flag (#13750) — _@jif-oai_
- [`b3765a0`](https://github.com/openai/codex/commit/b3765a07e8b57fdd21919ae5dde781d70230e7ca) [rmcp-client] Recover from streamable HTTP 404 sessions (#13514) — _@caseychow-oai_
- [`5d43035`](https://github.com/openai/codex/commit/5d4303510cc35571ae99a0a4a7d6ac40ccc03089) fix: windows normalization (#13742) — _@jif-oai_
- [`b5f475e`](https://github.com/openai/codex/commit/b5f475ed16ac78229a8cf68a3c5439351def2183) Add timestamps to feedback log lines (#13688) — _@etraut-openai_
- [`8ad768e`](https://github.com/openai/codex/commit/8ad768eb7691430f934c0e08854fcf262742dd56) feat: prune old memories in DB (#13734) — _@jif-oai_
- [`b6d43ec`](https://github.com/openai/codex/commit/b6d43ec8eb38738c648acc20aeccd1080d9d5381) feat: status line with real data (#13619) — _@jif-oai_
- [`98dca99`](https://github.com/openai/codex/commit/98dca99db7f72353f0c89eb9f9d573ae8e7ce9fd) [elicitations] Switch to use MCP style elicitation payload for mcp tool approvals. (#13621) — _@mzeng-openai_
- [`ee1a202`](https://github.com/openai/codex/commit/ee1a20258ac56ff298a9bea27d3a83022d7a9aa8) Enabling CWD Saving for Image-Gen (#13607) — _@won-openai_
- [`6638558`](https://github.com/openai/codex/commit/6638558b8807328e852b54580b010be7034699b7) change sound (#13697) — _@aibrahim-oai_
- [`014a59f`](https://github.com/openai/codex/commit/014a59fb0b8d70429d5b398e316ea5cfd9e01098) check app auth in plugin/install (#13685) — _@sayan-oai_
- [`4c9b1c3`](https://github.com/openai/codex/commit/4c9b1c38f6da7555081f5b6c607577c8b7dbccd1) fix(tui) remove config check for trusted setting (#11874) — _@dylan-hurd-oai_
- [`14de492`](https://github.com/openai/codex/commit/14de492985c0a98e33d71f7704edb45c57dc3962) copy current exe to CODEX_HOME/.sandbox-bin for apply_patch (#13669) — _@iceweasel-oai_
- [`6a79ed5`](https://github.com/openai/codex/commit/6a79ed5920b62e50277936761cb5a511cf7108c2) refactor: remove proxy admin endpoint (#13687) — _@viyatb-oai_
- [`f9ce403`](https://github.com/openai/codex/commit/f9ce403b5a9c95f65855a36e960adaae23ab07cf) fix: accept two macOS automation input shapes  for approval payload compatibility (#13683) — _@celia-oai_
- [`fb9fcf0`](https://github.com/openai/codex/commit/fb9fcf060f15a314b38440377c8366930fa4abbd) chore: remove unused legacy macOS permission types (#13677) — _@celia-oai_
- [`520ed72`](https://github.com/openai/codex/commit/520ed724d2f598999b5e1cd330ab130ff9b3ffbd) support plugin/list. (#13540) — _@xl-openai_
- [`56420da`](https://github.com/openai/codex/commit/56420da857fe9f02a154a8c97412058db0e08e35) tui: sort resume picker by last updated time (#13654) — _@charley-oai_
- [`9f91c7f`](https://github.com/openai/codex/commit/9f91c7f90f27258c520817cbd08d59861b2357c7) Add timestamped SQLite /feedback logs without schema changes (#13645) — _@charley-oai_
- [`e15e191`](https://github.com/openai/codex/commit/e15e191ff76c17ac6045c6e9df9a725372ffa590) fix(tui): clean up pending steer preview wrapping (#13642) — _@charley-oai_
- [`629cb15`](https://github.com/openai/codex/commit/629cb15bc6cd93dc481af460d0e1a7d2e0db2493) Replay thread rollback from rollout history (#13615) — _@aibrahim-oai_
- [`6cf0ed4`](https://github.com/openai/codex/commit/6cf0ed4e79468d2f3fd3855458bf05419d4fac64) Refine realtime startup context formatting (#13560) — _@aibrahim-oai_
- [`c3736cf`](https://github.com/openai/codex/commit/c3736cff0a1fbaeecceb3fc0b97324b935c44a59) feat(otel): safe tracing (#13626) — _@owenlin0_
- [`3ff618b`](https://github.com/openai/codex/commit/3ff618b493b6994257fadddfa139035d2ef1a552) Update models.json (#13617) — _@aibrahim-oai_
- [`aaefee0`](https://github.com/openai/codex/commit/aaefee04cd62bd54d248901e670a78285dc0748d) core/protocol: add structured macOS additional permissions and merge them into sandbox execution (#13499) — _@celia-oai_
- [`4e77ea0`](https://github.com/openai/codex/commit/4e77ea0ec7757a57ab7af1bdf49a2394383818a9) add @plugin mentions (#13510) — _@sayan-oai_
- [`1ed542b`](https://github.com/openai/codex/commit/1ed542bf31638541c15b71b745de26456cd9a92c) Clarify js_repl image emission and encoding guidance (#13639) — _@fjord-oai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
