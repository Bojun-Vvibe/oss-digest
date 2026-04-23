# openai/codex — 2026-04-02

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-01T23:59:59.000Z → 2026-04-02T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Heavy refactor day dominated by @bolinfest's ongoing `codex-core` → `codex-tools`/`codex-mcp` decomposition, with notable compile-time wins and a wave of TUI fixes from @etraut-openai. No releases, PRs, or issues surfaced in the window — all signal is in commits.

The headline is compile-time: `SessionTask` was rewritten to use native async instead of `#[async_trait]`, cutting `codex-core` compile time by 48% on top of a 63% reduction from the same treatment applied to `ToolHandler` ([#16631](https://github.com/openai/codex/pull/16631), [#16630](https://github.com/openai/codex/pull/16630)). If you only read one diff today, read these — they establish a pattern likely to be applied elsewhere.

The second big thread is the long-running extraction of MCP and tools machinery out of `codex-core`. @aibrahim-oai landed the large `codex-mcp` crate split ([#15919](https://github.com/openai/codex/pull/15919)), and @bolinfest pushed it forward with `core` switching to `codex-mcp` APIs directly ([#16510](https://github.com/openai/codex/pull/16510)), removal of cross-crate re-exports ([#16512](https://github.com/openai/codex/pull/16512), [#16482](https://github.com/openai/codex/pull/16482)), config types moved into `codex-config` ([#16523](https://github.com/openai/codex/pull/16523), shim removed in [#16529](https://github.com/openai/codex/pull/16529)), and a series of incremental tool extractions into `codex-tools` ([#16493](https://github.com/openai/codex/pull/16493), [#16497](https://github.com/openai/codex/pull/16497), [#16499](https://github.com/openai/codex/pull/16499), [#16503](https://github.com/openai/codex/pull/16503), [#16504](https://github.com/openai/codex/pull/16504), [#16509](https://github.com/openai/codex/pull/16509), [#16513](https://github.com/openai/codex/pull/16513), [#16521](https://github.com/openai/codex/pull/16521)). Downstream crates depending on `codex-core` as a proxy will need to update imports.

TUI/UX fixes from @etraut-openai cluster around resume/review flows: fork source restored in `/status` ([#16596](https://github.com/openai/codex/pull/16596)), stale-turn crash on `/review` follow-ups ([#16588](https://github.com/openai/codex/pull/16588)), resume picker stale titles and loading state ([#16601](https://github.com/openai/codex/pull/16601), [#16591](https://github.com/openai/codex/pull/16591)), permission-profile grant loss ([#16284](https://github.com/openai/codex/pull/16284)), Ctrl+C "not available in TUI" regression ([#16273](https://github.com/openai/codex/pull/16273)), and paste-driven completion teardown ([#16202](https://github.com/openai/codex/pull/16202)). Zellij users get scrollback/composer fixes via [#16578](https://github.com/openai/codex/pull/16578).

@jif-oai reworked the turn state machine and fixed end-of-turn / pending races ([#16566](https://github.com/openai/codex/pull/16566), [#16561](https://github.com/openai/codex/pull/16561), [#16567](https://github.com/openai/codex/pull/16567)). Windows CI was stabilized via PowerShell startup-timeout bumps and pwsh fallback paths ([#16604](https://github.com/openai/codex/pull/16604), [#16608](https://github.com/openai/codex/pull/16608), [#16613](https://github.com/openai/codex/pull/16613), [#16617](https://github.com/openai/codex/pull/16617)).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`7a3eec6`](https://github.com/openai/codex/commit/7a3eec6fdb356bd71f80582119eb829179ff0da1) core: cut codex-core compile time 48% with native async SessionTask (#16631) — _@bolinfest_
- [`3c7f013`](https://github.com/openai/codex/commit/3c7f013f9735e67796c70d95f75f436b7f97e3ec) core: cut codex-core compile time 63% with native async ToolHandler (#16630) — _@bolinfest_
- [`0bd31dc`](https://github.com/openai/codex/commit/0bd31dc382bd1c33dc2bb6b97069c76aa10ba14b) fix(tui): handle zellij redraw and composer rendering (#16578) — _@fcoury-oai_
- [`9bb7f0a`](https://github.com/openai/codex/commit/9bb7f0a6947c06fdebc99151bbeff570a11d5657) Fix fork source display in /status (expose forked_from_id in app server) (#16596) — _@etraut-openai_
- [`93380a6`](https://github.com/openai/codex/commit/93380a6fac0e97e5f653d3bf591c503d8bfd05d6) fix: add shell fallback paths for pwsh/powershell that work on GitHub Actions Windows runners (#16617) — _@bolinfest_
- [`57b98bc`](https://github.com/openai/codex/commit/57b98bc4cdce713824fed159614a107814315a4d) Fix stale turn steering during TUI review follow-ups (#16588) — _@etraut-openai_
- [`f5d39a8`](https://github.com/openai/codex/commit/f5d39a88ce0997a6477e23899b03d56903d4e6d5) Fixed some existing labels and added a few new ones (#16616) — _@etraut-openai_
- [`c0f2fed`](https://github.com/openai/codex/commit/c0f2fed67e54cd6ca700e94161989f2f338adf8d) Fix resume picker stale thread names (#16601) — _@etraut-openai_
- [`30ee9e7`](https://github.com/openai/codex/commit/30ee9e769e8f32eb0f57399fec5c18a981438d53) fix: increase another startup timeout for PowerShell (#16613) — _@bolinfest_
- [`cb8dc18`](https://github.com/openai/codex/commit/cb8dc18a64d1457d660357bae6bf7cdca896dca8) Fix resume picker initial loading state (#16591) — _@etraut-openai_
- [`5d64e58`](https://github.com/openai/codex/commit/5d64e58a380382f1020a1443f3d8a12d07cb966a) fix: increase timeout to account for slow PowerShell startup (#16608) — _@bolinfest_
- [`f894c3f`](https://github.com/openai/codex/commit/f894c3f687b3e036dec0071936292ffa1c38e711) fix: add more detail to test assertion (#16606) — _@bolinfest_
- [`2146e1b`](https://github.com/openai/codex/commit/2146e1b82d18e536911bd8bfa93087381a38c17a) test: deflake external bearer auth token tests on Windows (#16604) — _@bolinfest_
- [`1d8a22e`](https://github.com/openai/codex/commit/1d8a22e9dd7008c5e5dbde1a381cf44b81cdad2c) Fix non-determinism in rules_rs/crate_git_repository.bzl (#16590) — _@tyler-french_
- [`95b0b5a`](https://github.com/openai/codex/commit/95b0b5a20468dae4d225a82e9a316119c2752b06) chore: move codex-exec unit tests into sibling files (#16581) — _@bolinfest_
- [`a098834`](https://github.com/openai/codex/commit/a0988341483676caa019a5e288f69e45c5d5c058) ci: upload compact Bazel execution logs for bazel.yml (#16577) — _@bolinfest_
- [`7fc3624`](https://github.com/openai/codex/commit/7fc36249b5f8661fd067018282e68c12a3ae0912) chore: rename assign_task for followup_task (#16571) — _@jif-oai_
- [`ea27d86`](https://github.com/openai/codex/commit/ea27d861b21c0540b323bf925feba634eafdd6ef) nit: state machine desc (#16569) — _@jif-oai_
- [`ab6cce6`](https://github.com/openai/codex/commit/ab6cce62b8a7c12c35a2f91a3373b66d2a828a1d) chore: rework state machine further (#16567) — _@jif-oai_
- [`e47ed5e`](https://github.com/openai/codex/commit/e47ed5e57f299df15a3e40e413171ed331def8cd) fix: races in end of turn (#16566) — _@jif-oai_
- [`bd50496`](https://github.com/openai/codex/commit/bd50496411a827a0f48d50d34ef950bd03817f96) nit: lint (#16564) — _@jif-oai_
- [`627299c`](https://github.com/openai/codex/commit/627299c5511cc3ce7513dfa6a3751c2f04b89c9e) fix: race pending (#16561) — _@jif-oai_
- [`97df35c`](https://github.com/openai/codex/commit/97df35c74fcb042ab5568d6f8fa8c88ca3cea8ed) chore: memories mini model (#16559) — _@jif-oai_
- [`c1d18ce`](https://github.com/openai/codex/commit/c1d18ceb6f22ae3acd67bbd6badad0f475b31dfc) [codex] Remove codex-core config type shim (#16529) — _@bolinfest_
- [`e846fed`](https://github.com/openai/codex/commit/e846fed2b1755cab6c1d5a656a49db76b2778e91) fix: move some test utilities out of codex-rs/core/src/tools/spec.rs (#16524) — _@bolinfest_
- [`f32a5e8`](https://github.com/openai/codex/commit/f32a5e84bf925db613c1738052aa96bfc1f954f6) [codex] Move config types into codex-config (#16523) — _@bolinfest_
- [`5131e0d`](https://github.com/openai/codex/commit/5131e0de4524d28f3e9bd848de035b557c21eeff) Move tool registry plan tests into codex-tools (#16521) — _@bolinfest_
- [`828b837`](https://github.com/openai/codex/commit/828b837235f0bf6adaf4f8648951bf60c722e86b) Extract tool registry planning into codex-tools (#16513) — _@bolinfest_
- [`52e779d`](https://github.com/openai/codex/commit/52e779d35dc1af1c8682e1a87aaec20d7fd5c3d0) fix: add update to Cargo.lock that was missed in #16512 (#16516) — _@bolinfest_
- [`aa2403e`](https://github.com/openai/codex/commit/aa2403e2eb4126a6bebb50b9db8d943510bd37b9) core: remove cross-crate re-exports from lib.rs (#16512) — _@bolinfest_
- [`9f71d57`](https://github.com/openai/codex/commit/9f71d57a655628c3fdd20301a62df4446df2a924) Extract code-mode nested tool collection into codex-tools (#16509) — _@bolinfest_
- [`cc97982`](https://github.com/openai/codex/commit/cc97982bbb8b0e1acb8e6c296f5092273d59e59e) core: use codex-mcp APIs directly (#16510) — _@bolinfest_
- [`1b5a16f`](https://github.com/openai/codex/commit/1b5a16f05eb9e7c19ae6390bac9d7c817c860678) Extract request_user_input normalization into codex-tools (#16503) — _@bolinfest_
- [`7c1c633`](https://github.com/openai/codex/commit/7c1c633f3f8e4d7a15ef9440a669ef0b1f5d9491) core: use codex-tools config types directly (#16504) — _@bolinfest_
- [`e19b351`](https://github.com/openai/codex/commit/e19b35136417d151ce09ca4a59d42dbdee4d7d09) Fix paste-driven bottom pane completion teardown (#16202) — _@etraut-openai_
- [`cb9ef06`](https://github.com/openai/codex/commit/cb9ef06eccb5ccf514cc07eb77f93ef21f74b89a) Fix TUI app-server permission profile conversions (#16284) — _@etraut-openai_
- [`d1068e0`](https://github.com/openai/codex/commit/d1068e057a2fae156eef53fa446baae786255505) Extract tool-suggest wire helpers into codex-tools (#16499) — _@bolinfest_
- [`c2699c6`](https://github.com/openai/codex/commit/c2699c666ccee395b25b0b48885787ca165840b9) fix: guard guardian_command_source_tool_name with cfg(unix) (#16498) — _@bolinfest_
- [`0b856a4`](https://github.com/openai/codex/commit/0b856a4757f8c1c5685b2f34826c733caa5b18d1) Extract tool-search output helpers into codex-tools (#16497) — _@bolinfest_
- [`74d7149`](https://github.com/openai/codex/commit/74d7149130fc0b63e48cb8b151afa15f14d2e8ab) Fix regression: "not available in TUI" error message (#16273) — _@etraut-openai_
- [`5a2f3a8`](https://github.com/openai/codex/commit/5a2f3a81028d762a1bda011ddd63d197e2d4c19b) Extract built-in tool spec constructors into codex-tools (#16493) — _@bolinfest_
- [`d7e5bc6`](https://github.com/openai/codex/commit/d7e5bc6a3aa18e57b84e2052d5ef607d2bae3413) fix: remove unused import (#16495) — _@bolinfest_
- [`d446412`](https://github.com/openai/codex/commit/d4464125c5059268f5b47619bf87fac3d24b9fcc) Remove client_common tool re-exports (#16482) — _@bolinfest_
- [`59b68f5`](https://github.com/openai/codex/commit/59b68f5519cc43270c1eb6dc2d9fbd1dd4a13b8a) Extract MCP into codex-mcp crate (#15919) — _@aibrahim-oai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
