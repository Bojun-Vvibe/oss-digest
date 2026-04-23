# openai/codex — 2026-03-25

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-24T23:59:59.000Z → 2026-03-25T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The dominant theme today is a large-scale **modularization of `codex-core`**, with `aibrahim-oai` extracting five new crates in a single push: `codex-rollout` (#15548), `codex-instructions` (#15744), `codex-utils-plugins` (#15746), `codex-plugin` (#15747), `codex-analytics` (#15748), and `codex-core-skills` (#15749). Anyone working in `codex-core` should expect significant import churn and rebase pain.

The other major thread is the **plugins/apps rollout going live**. `mzeng-openai` flipped the `plugins` and `apps` feature flags on (#15713), enabled tool-search and additional flags (#15719, #15722), and decoupled `tool_suggest` from tool search (#14856). TUI polish followed: hidden `/apps` menu and "OpenAI Curated" label (#15802), hidden App ID on details (#15708), a legal-disclosure link to plugin details (#15692), and removal of provenance filtering for `$mentions` (#15700). A new app-server method allows global feature-flag overrides (#15601).

Notable functional changes worth a closer look:

- **WebSocket auth on app-server** before JSON-RPC `initialize` (#14847) — a security-relevant transport change by `viyatb-oai`.
- **Cached environment manager** singleton created early in app-server, before skill/config loading (#15785).
- **ChatGPT `hc` plan now treated as Enterprise** (#15789) — entitlement change.
- **Default MCP approval behavior** when annotations are missing now follows MCP spec defaults rather than allowing unannotated tools through (#15519).
- **Windows restricted-token sandbox** now supports split carveouts (#14172).

`tui_app_server` got several fixes from `fcoury`: transcript corruption under backpressure (#15759), duplicate live reasoning summaries (#15758), and remote subagent switching/agent-name display (#15513); plus `etraut-openai`'s stale-turn steering recovery (#15714) and a duplicate-auth-refresh fix in `getAuthStatus` (#15798).

Smaller but useful: `codex resume --include-non-interactive` (#15339), multi-thread log query for multi-agent v2 (#15776), a new rendering library v1 intended to replace askama (#15778), MCP tool-call spans (#15659), `AbsolutePathBuf` migration for `cwd` (#15710), deferred fork context injection (#15699), `~` expansion in MDM `writable_roots` (#15351), and removal of legacy `read_file`/`grep_files` handlers (#15773, #15775).

No releases, PRs, or issues surfaced in the window — commit stream only.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`8fa88fa`](https://github.com/openai/codex/commit/8fa88fa8cabddb15c6477b84f2d1774ce50b20bd) Add cached environment manager for exec server URL (#15785) — _@pakrym-oai_
- [`f24c55f`](https://github.com/openai/codex/commit/f24c55f0d53842ca0061d149380a8cfd4b4bdda4) TUI plugin menu polish (#15802) — _@canvrno-oai_
- [`eee692e`](https://github.com/openai/codex/commit/eee692e35167e9c6b7eec459fd8f4b0c347a4458) Treat ChatGPT `hc` plan as Enterprise (#15789) — _@arnavdugar-openai_
- [`b652451`](https://github.com/openai/codex/commit/b6524514c1343c42d9520f1c60a6c5cf4ee5c15f) Add MCP tool call spans (#15659) — _@nicholasclark-openai_
- [`2c67a27`](https://github.com/openai/codex/commit/2c67a27a719d6db46ea29e3a4f306d34db52ace2) Avoid duplicate auth refreshes in `getAuthStatus` (#15798) — _@etraut-openai_
- [`9dbe098`](https://github.com/openai/codex/commit/9dbe0983490c2f952b8791e634b5ec3ce94edee9) Extract codex-core-skills crate (#15749) — _@aibrahim-oai_
- [`e9996ec`](https://github.com/openai/codex/commit/e9996ec62a9ae4e2d7c6e4f1c701544da7067def) fix(tui_app_server): preserve transcript events under backpressure (#15759) — _@fcoury_
- [`6124564`](https://github.com/openai/codex/commit/6124564297289ddadd5ab364bb961ea367fff8d0) feat: add websocket auth for app-server (#14847) — _@viyatb-oai_
- [`9133739`](https://github.com/openai/codex/commit/91337399fe3c216949b7fd5203fa7737b86841ed) [apps][tool_suggest] Remove tool_suggest's dependency on tool search. (#14856) — _@mzeng-openai_
- [`79359fb`](https://github.com/openai/codex/commit/79359fb5e78d470c69a7b6e82291608ed685c3bb) fix(tui_app_server): fix remote subagent switching and agent names (#15513) — _@fcoury_
- [`6566ab7`](https://github.com/openai/codex/commit/6566ab7e021b7138672757538407ebd070f2a4ae) Clarify codex_home base for MDM path resolution (#15707) — _@evawong-oai_
- [`d273efc`](https://github.com/openai/codex/commit/d273efc0f31615ffdfe23481829d3dbb1e729861) Extract codex-analytics crate (#15748) — _@aibrahim-oai_
- [`2bb1027`](https://github.com/openai/codex/commit/2bb1027e37fd2ff7b5a72de8b5f5d8ce8cca2cba) Extract codex-plugin crate (#15747) — _@aibrahim-oai_
- [`ad74543`](https://github.com/openai/codex/commit/ad74543a6f6e5590ae8839142259df571405da28) Extract codex-utils-plugins crate (#15746) — _@aibrahim-oai_
- [`6b10e18`](https://github.com/openai/codex/commit/6b10e186c4d1b544745d241416c9d94bb83a9fef) Add non-interactive resume filter option (#15339) — _@nornagon-openai_
- [`fba3c79`](https://github.com/openai/codex/commit/fba3c79885188b9b88bbceee9e9b872933393aee) Extract codex-instructions crate (#15744) — _@aibrahim-oai_
- [`303d019`](https://github.com/openai/codex/commit/303d0190c5f3818146c917e58ece725178e49ebf) feat: add multi-thread log query (#15776) — _@jif-oai_
- [`14c35a1`](https://github.com/openai/codex/commit/14c35a16a8a41cc16c5e36c2c4287b7b2db6e975) chore: remove read_file handler (#15773) — _@jif-oai_
- [`c6ffe9a`](https://github.com/openai/codex/commit/c6ffe9abab04bd3349ecc49fffc0fbf9551826e6) fix(tui): avoid duplicate live reasoning summaries (#15758) — _@fcoury_
- [`f190a95`](https://github.com/openai/codex/commit/f190a95a4f0d7195c1c5cff48157b6c451be7c27) feat: rendering library v1 (#15778) — _@jif-oai_
- [`504aeb0`](https://github.com/openai/codex/commit/504aeb0e09bbc40771d4f23fc89c8571c27289cd) Use AbsolutePathBuf for cwd state (#15710) — _@pakrym-oai_
- [`178c3b1`](https://github.com/openai/codex/commit/178c3b15b475104459815767e0561756c8cd00ed) chore: remove grep_files handler (#15775) — _@jif-oai_
- [`32c4993`](https://github.com/openai/codex/commit/32c4993c8a17cb0608d747f268e3d543745de962) fix(core): default approval behavior for mcp missing annotations (#15519) — _@fouad-openai_
- [`047ea64`](https://github.com/openai/codex/commit/047ea642d2989f4095a6dc5070aaa818554e550e) chore: tty metric (#15766) — _@jif-oai_
- [`f5dccab`](https://github.com/openai/codex/commit/f5dccab5cf9674f46c8bd2cc9606d9d6cd94fadb) Update plugin creator skill. (#15734) — _@xl-openai_
- [`e590fad`](https://github.com/openai/codex/commit/e590fad50b832bebc68e7f18067cad5fe13a7d85) [plugins] Add a flag for tool search. (#15722) — _@mzeng-openai_
- [`c0ffd00`](https://github.com/openai/codex/commit/c0ffd000dd6d246be139b888b316531c80d6538a) Fix stale turn steering fallback in tui_app_server (#15714) — _@etraut-openai_
- [`95ba762`](https://github.com/openai/codex/commit/95ba76262059226193af10fdfbbb529000f8463c) fix: support split carveouts in windows restricted-token sandbox (#14172) — _@viyatb-oai_
- [`8c62829`](https://github.com/openai/codex/commit/8c62829a2b0e46fe0a9b62145eddad696fbac700) [plugins] Flip on additional flags. (#15719) — _@mzeng-openai_
- [`0bff38c`](https://github.com/openai/codex/commit/0bff38c54a89f4658cfe79466e8a17a469f9e201) [plugins] Flip the flags. (#15713) — _@mzeng-openai_
- [`fece9ce`](https://github.com/openai/codex/commit/fece9ce7455261bf8a158c350970984bfff581d1) Fix stale quickstart integration assertion (#15677) — _@shaqayeq-oai_
- [`2250508`](https://github.com/openai/codex/commit/2250508c2e900c577c48de2620d4f3cd0575e1c9) TUI plugin menu cleanup - hide app ID (#15708) — _@canvrno-oai_
- [`0b08d89`](https://github.com/openai/codex/commit/0b08d893042ba0c0d5c2f020b1c78b46af2ebe59) [app-server] Add a method to override feature flags. (#15601) — _@mzeng-openai_
- [`d72fa2a`](https://github.com/openai/codex/commit/d72fa2a209837e549769b4452b599960464ba1d8) [codex] Defer fork context injection until first turn (#15699) — _@charley-oai_
- [`2e03d8b`](https://github.com/openai/codex/commit/2e03d8b4d247e762bbd7a3756d5e8a227883bd79) Extract rollout into its own crate (#15548) — _@aibrahim-oai_
- [`ea3f346`](https://github.com/openai/codex/commit/ea3f3467e29a3870132632ba3ef76df1554c5cdc) Expand ~ in MDM workspace write roots (#15351) — _@evawong-oai_
- [`38b638d`](https://github.com/openai/codex/commit/38b638d89d89bdc2a6bc43d0bc2d084254df29b9) Add legal link to TUI /plugin details (#15692) — _@canvrno-oai_
- [`05b967c`](https://github.com/openai/codex/commit/05b967c79a72e409cd9d8d6536ca29201e4873fb) Remove provenance filtering in $mentions for apps and skills from plugins (#15700) — _@canvrno-oai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
