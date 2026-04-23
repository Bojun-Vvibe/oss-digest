# openai/codex — 2026-04-16

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-15T23:59:59.000Z → 2026-04-16T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Two alpha releases shipped today — `rust-v0.122.0-alpha.3` and `rust-v0.122.0-alpha.5` — capping a heavy day of ~50 commits focused on feature-flag flips, refactors, and TUI/flake fixes.

The most user-visible changes are two defaults being promoted to stable: image generation is now on by default (#17153), and `ToolSearch` graduates to stable and ships in the default feature set (#17854). Guardian reviews now use the `codex-auto-review` model slug (#18169), and a new first-class filesystem policy lets configs declare deny-read globs like `**/*.env` against project roots (#15979). Server-level approval defaults (`default_tools_approval_mode`) are now supported for custom MCP servers (#17843), and a new MCP server environment config lands as part 1/8 of a series, with piped-stdin support for the exec process API as 2/8 (#18085, #18086). Marketplaces get best-effort auto-upgrade tracked via `config.toml` revisions (#17425).

Security/safety: yolo (`DangerFullAccess`) turns now fully opt out of managed-network tool enforcement and stop leaking managed proxy settings (#18042, #17742). A Codex Security finding led to dropping a `state` lock before `send_event().await` (#18178).

Refactors dominate the core crate: turn execution moved to `codex/turn.rs` (#18206), op handlers split out (#18200), AGENTS.md discovery encapsulated in `AgentsMdManager` (#18035), connector logic relocated (#18158), plugin/marketplace code extracted to a new `codex-core-plugins` crate (#18070), and config loading went async in prep for executor-sourced config (#18022). A remote thread store implementation also landed (#17826).

TUI fixes worth noting: replay token usage after resume/fork (#18023), no fatal errors on skills/list failure (#18061), invalid resume hints fixed (#18059), `/rename` prefills current name (#18057), duplicate `context-remaining` statusline item removed (#18054), `/model` menu loop fix (#18154), and YOLO permissions now shown in the TUI header (#17877). MCP startup cancellation through the app server is fixed (#18078). A new `codex-pr-body` skill was introduced for updating PR metadata post-creation (#18033). The rest is Bazel/Windows flake stabilization from jif-oai and others.

## Releases

- **[rust-v0.122.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.5)** _(prerelease)_ — 0.122.0-alpha.5 _by @github-actions[bot] at 2026-04-16T23:47:36Z_
  > Release 0.122.0-alpha.5
- **[rust-v0.122.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.3)** _(prerelease)_ — 0.122.0-alpha.3 _by @github-actions[bot] at 2026-04-16T18:09:22Z_
  > Release 0.122.0-alpha.3


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`bf6e7e1`](https://github.com/openai/codex/commit/bf6e7e12aa0cc072117623155f55582891fda3e1) Use in-process app-server for unknown-thread MCP read test (#18196) — _@mzeng-openai_
- [`65cc12d`](https://github.com/openai/codex/commit/65cc12d72e25723aece48edd6ff93dd288b6c042) Use codex-auto-review for guardian reviews (#18169) — _@jeffsharris_
- [`a1736fc`](https://github.com/openai/codex/commit/a1736fcd20396976daa631bd4ed53ca7d066bbb6) [codex] Split codex turn logic (#18206) — _@pakrym-oai_
- [`fa5d14e`](https://github.com/openai/codex/commit/fa5d14e27623193b5726bd56a5ad267b27855676) Add tabbed lists, single line rendering, col width changes (#18188) — _@canvrno-oai_
- [`6a1ddfc`](https://github.com/openai/codex/commit/6a1ddfc366d90efc571292acad1c3c67b5504e42) [codex] Update realtime V2 VAD silence delay and 1.5 prompt (#18092) — _@bxie-openai_
- [`d9c71d4`](https://github.com/openai/codex/commit/d9c71d41a9149f70119970c8cb09b89d1b92f6eb) Add OTEL metrics for hook runs (#18026) — _@abhinav-oai_
- [`55c3de7`](https://github.com/openai/codex/commit/55c3de75cba1a65088ff02b91527b94a1b60a69b) Register agent tasks behind use_agent_identity (#17387) — _@adrian-openai_
- [`0708cc7`](https://github.com/openai/codex/commit/0708cc78cb9da20087e3013cab71e880290dc427) [codex] Split codex op handlers (#18200) — _@pakrym-oai_
- [`3905f72`](https://github.com/openai/codex/commit/3905f728918abd6ebaa63a4368f52754c7a3e26c) Throttle Windows Bazel test concurrency (#18192) — _@starr-openai_
- [`37bf42d`](https://github.com/openai/codex/commit/37bf42d5d560854b8e04801cc62685e73e87ae8b) [codex] Make realtime startup context truncation deterministic (#18172) — _@bxie-openai_
- [`ec8d4bf`](https://github.com/openai/codex/commit/ec8d4bfc77353ac328a7b4897ab47b296e90f19e) fix(app-server): replay token usage after resume and fork (#18023) — _@fcoury-oai_
- [`ea34c6e`](https://github.com/openai/codex/commit/ea34c6ed8de87c72616ac08c9c5e399ebd1f9c58) fix: fix clippy issue in examples/ folder (#18184) — _@bolinfest_
- [`8720b7b`](https://github.com/openai/codex/commit/8720b7bdce451c2f805894501317579b7c667c39) Add codex_hook_run analytics event (#17996) — _@abhinav-oai_
- [`62847e7`](https://github.com/openai/codex/commit/62847e7554759b8a5b28e90863e94a5b2211d7db) Make thread unsubscribe test deterministic (#18000) — _@starr-openai_
- [`dfff8a7`](https://github.com/openai/codex/commit/dfff8a7d0352631efe5e9424da4f148b1d8223f5) fix: drop lock earlier; was held across send_event().await unnecessarily (#18178) — _@bolinfest_
- [`7117457`](https://github.com/openai/codex/commit/71174574adb09a90ebd83e2acfe284a39aaca2cf) Add server-level approval defaults for custom MCP servers (#17843) — _@mzeng-openai_
- [`206dd13`](https://github.com/openai/codex/commit/206dd13c329e4174090b8d77b4da088ffa930144) Move more connector logic into connectors crate (#18158) — _@pakrym-oai_
- [`ab97c9a`](https://github.com/openai/codex/commit/ab97c9aaad7cb29a5d23c7485318e0ad6b20400c) Refactor AGENTS.md discovery into AgentsMdManager (#18035) — _@pakrym-oai_
- [`faf4848`](https://github.com/openai/codex/commit/faf48489f3ade607701de064300ee127b1fb71d8) Auto-upgrade configured marketplaces (#17425) — _@xli-oai_
- [`109b22a`](https://github.com/openai/codex/commit/109b22a8d024084cd86704dc183c6616891fac96) Improve external agent plugin migration for configured marketplaces (#18055) — _@alexsong-oai_
- [`6862b9c`](https://github.com/openai/codex/commit/6862b9c745066e6b7f73ea7483c9abb0df696594) feat(permissions): add glob deny-read policy support (#15979) — _@viyatb-oai_
- [`ff9744f`](https://github.com/openai/codex/commit/ff9744fd661988450a24d845cb3416ad2af71f7d) Avoid fatal TUI errors on skills list failure (#18061) — _@etraut-openai_
- [`2ca270d`](https://github.com/openai/codex/commit/2ca270d08dfda06e44df579b86d62d96e388019d) [2/8] Support piped stdin in exec process API (#18086) — _@aibrahim-oai_
- [`6e72f0d`](https://github.com/openai/codex/commit/6e72f0dbfd5e6b875e1ce00e8079e2bc15e28fe4) [codex] Add remote thread store implementation (#17826) — _@wiltzius-openai_
- [`baaf42b`](https://github.com/openai/codex/commit/baaf42b2e4f885361ddde2176e76c99e2dc544e0) fix: model menu pop (#18154) — _@jif-oai_
- [`3a4fa77`](https://github.com/openai/codex/commit/3a4fa77ad7ef9a99e16e74c409c70d2deb7488ce) Make yolo skip managed-network tool enforcement (#18042) — _@won-openai_
- [`85203d8`](https://github.com/openai/codex/commit/85203d8872b139ab6c8fd8478d557d8f5de694ae) Launch image generation by default (#17153) — _@won-openai_
- [`ab82568`](https://github.com/openai/codex/commit/ab82568536d63528e6222eba32661ca329a674ca) Fix invalid TUI resume hints (#18059) — _@etraut-openai_
- [`9c56e89`](https://github.com/openai/codex/commit/9c56e89e4f7b2c0433f832bd76399203891a954e) Prefill rename prompt with current thread name (#18057) — _@etraut-openai_
- [`9c6d038`](https://github.com/openai/codex/commit/9c6d0386220071f3fd313c819c8eb3a8c54b6dec) [code mode] defer mcp tools from exec description (#17287) — _@sayan-oai_
- [`8475d51`](https://github.com/openai/codex/commit/8475d51655a3eb922f84a8737e998a00a693d21d) fix(tui): remove duplicate context statusline item (#18054) — _@etraut-openai_
- [`b4be361`](https://github.com/openai/codex/commit/b4be3617f9d1836414143a026c16ebe9135509a3) [1/8] Add MCP server environment config (#18085) — _@aibrahim-oai_
- [`b178d1c`](https://github.com/openai/codex/commit/b178d1cf17d7a74cb08bf51608781d91b9532eff) chore: use `justfile_directory` in just file (#18146) — _@jif-oai_
- [`76ea694`](https://github.com/openai/codex/commit/76ea694db503b6939c7a344db327d40e5fe43d7b) fix: auth preflight (#18117) — _@jif-oai_
- [`6adba99`](https://github.com/openai/codex/commit/6adba99f4d1205c554bf82ac42dd36c1740332b4) Stabilize Bazel tests (timeout tweaks and flake fixes) (#17791) — _@ddr-oai_
- [`895e2d0`](https://github.com/openai/codex/commit/895e2d056f5358688fb5e3793d1e1a9c8cb262f6) nit: get rid of an expect (#18144) — _@jif-oai_
- [`b33478c`](https://github.com/openai/codex/commit/b33478c23627c64c0864ae7f2f649d9d201b6261) chore: unify memory drop endpoints (#18134) — _@jif-oai_
- [`18e9ac8`](https://github.com/openai/codex/commit/18e9ac8c75695d6b8375f125ec43b1ee4a424a31) chore: more pollution filtering (#18138) — _@jif-oai_
- [`de98b1d`](https://github.com/openai/codex/commit/de98b1d3e8b9f36a63e4b872d138d8401b4f50a3) debug: windows flake (#18135) — _@jif-oai_
- [`9c326c4`](https://github.com/openai/codex/commit/9c326c4cb4febbf5ed38ffec95f9f38e95085c1a) nit: add min values for memories (#18137) — _@jif-oai_
- [`d422309`](https://github.com/openai/codex/commit/d4223091d07a7647535b46795aa87cf78550e3f4) fix: windows flake (#18127) — _@jif-oai_
- [`b0324f9`](https://github.com/openai/codex/commit/b0324f9f0569ebfc5534fd6844971d9ae029c791) fix: more flake (#18006) — _@jif-oai_
- [`f97be7d`](https://github.com/openai/codex/commit/f97be7dfff18d99f1b6b25b7613a03d1f42d82d0) [codex] Route Fed ChatGPT auth through Fed edge (#17151) — _@jackz-oai_
- [`4cd85b2`](https://github.com/openai/codex/commit/4cd85b28d2713289d5940b6cb967894277a17419) Fix MCP startup cancellation through app server (#18078) — _@etraut-openai_
- [`48cf3ed`](https://github.com/openai/codex/commit/48cf3ed7b03267c42e1a3d39e2b345a01493ad36) Extract plugin loading and marketplace logic into codex-core-plugins (#18070) — _@xl-openai_
- [`224dad4`](https://github.com/openai/codex/commit/224dad41ac1bdf0c8a848b1fd0068262f1f99223) [codex][mcp] Add resource uri meta to tool call item. (#17831) — _@mzeng-openai_
- [`77fe33b`](https://github.com/openai/codex/commit/77fe33bf72a7a1a0f2687c0487b6558fd2a82d1c) Update ToolSearch to be enabled by default (#17854) — _@mzeng-openai_
- [`bd61737`](https://github.com/openai/codex/commit/bd61737e8afb2b52f8a03893172db1523f59e357) Async config loading (#18022) — _@pakrym-oai_
- [`d97bad1`](https://github.com/openai/codex/commit/d97bad1272ce9ad6cc353b33d92df40d0cbc9436) Display YOLO mode permissions if set when launching TUI (#17877) — _@canvrno-oai_
- [`d63ba2d`](https://github.com/openai/codex/commit/d63ba2d5ecdbcc4cd2b1fb517e96f5cf1bade307) feat: introduce codex-pr-body skill (#18033) — _@bolinfest_
- [`f948690`](https://github.com/openai/codex/commit/f948690fc8fdc90995c507227540b2df13255885) [codex] Make command exec delta tests chunk tolerant (#17999) — _@euroelessar_
- [`e2dbe7d`](https://github.com/openai/codex/commit/e2dbe7dfc37e1c368ac521429a82a7562ebaaca2) removing network proxy for yolo (#17742) — _@won-openai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
