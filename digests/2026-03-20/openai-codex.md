# openai/codex — 2026-03-20

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-19T23:59:59.000Z → 2026-03-20T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Heavy infrastructure day in `openai/codex` with 29 commits landing across plugins, the executor split, V8 build work, and remote-execution scaffolding — no releases, PRs, or issues surfaced in the window.

The most consequential thread is the **continued split of the executor into local vs. remote implementations**. `403b397` refactors `ExecServer`'s filesystem layer into a trait + local + remote implementation pattern, and `96a8671` mirrors that structure for the exec process, exposing `ExecProcess` on `Environment`. Building on this, `ba85a58` adds a `CODEX_TEST_REMOTE_ENV` CI matrix that runs integration tests inside a Docker container, and `4ddde54` teaches Codex a "remote test" skill. If you read one area, read these together.

**Plugins** moved from experimental toward usable: `f7201e5` adds the initial read-only `/plugins` TUI menu (tui + tui_app_server), `10a936d` then gates it behind `--enable plugins`, `0a344e4` installs/auths MCPs when `plugin/install` is called, `b1570d6` adds a one-time startup remote sync for users who already enabled apps, `e5f4d1f` prefers `git clone` (with HTTP fallback) for curated sync, and `35f8b87` fixes a subtle semantics bug distinguishing missing vs. empty plugin product lists.

**Crate reorganization** continues: `2e22885` extracts a new `codex-features` crate from `codex-core`, and `2aa4873` moves auth into `codex-login` (with re-exports for compatibility). `ea8b07e` removes the now-default `Feature::PowershellUtf8`.

**V8/Bazel build** lands in two pieces: `ded7854` introduces a Bazel-built musl V8 for x86/aarch64 (rusty_v8 elsewhere), and `1350477` adds a `v8-poc` consumer linking against it. `b9fa08e` unblocks Bazel macOS CI by bumping the llvm module past Apple's 403'd SDK URL.

Smaller but worth noting: `9eef2e9` fixes restricted filesystem profiles to still read Codex's helper executables, `9e31aea` pins Python SDK app-server stdio to UTF-8 on Windows, `cc19276` disables hooks on Windows pending verification, `a941d84` bumps `aws-lc-rs` for RUSTSEC-2026-0048, and `79ad7b2` switches multi-agent referencing from UUIDs to a URI/path scheme (#15313).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`7754dd1`](https://github.com/openai/codex/commit/7754dd1b89c763b7ebba9f01a51f23a58dab2989) chore(core) update prefix_rule guidance (#15231) — _@dylan-hurd-oai_
- [`9eef2e9`](https://github.com/openai/codex/commit/9eef2e91fc862246578280016faf895dd545e2c2) fix: allow restricted filesystem profiles to read helper executables (#15114) — _@celia-oai_
- [`10a936d`](https://github.com/openai/codex/commit/10a936d1270575fd137e26b394e7d3fc395a5296) Gate tui /plugins menu behind flag (#15285) — _@canvrno-oai_
- [`3431f01`](https://github.com/openai/codex/commit/3431f01776de7ba2c87de294a973e0593d0123a2) Add realtime transcript notification in v2 (#15344) — _@aibrahim-oai_
- [`ea8b07e`](https://github.com/openai/codex/commit/ea8b07e680da44d8670ed4405ca4a48c468be0ae) chore(core) Remove Feature::PowershellUtf8 (#15128) — _@dylan-hurd-oai_
- [`dd88ed7`](https://github.com/openai/codex/commit/dd88ed767b852a6e279f063e926be90693c53cc1) [apps] Use ARC for yolo mode. (#15273) — _@mzeng-openai_
- [`1350477`](https://github.com/openai/codex/commit/135047715054b7cefaa9a474cd5135dafe9482fc) Add v8-poc consumer of our new built v8 (#15203) — _@cconger_
- [`a941d84`](https://github.com/openai/codex/commit/a941d8439d623149ab9b4698bf0dc90ec1b2f2bd) Bump aws-lc-rs (#15337) — _@cconger_
- [`9e31aea`](https://github.com/openai/codex/commit/9e31aeadce22fad2cdb7d2d90e7e7bbb9ac4dc77) Pin Python SDK app-server stdio to UTF-8 on Windows (#15244) — _@shaqayeq-oai_
- [`79ad7b2`](https://github.com/openai/codex/commit/79ad7b247bb6805853b00f55d2e992810ce949ea) feat: change multi-agent to use path-like system instead of uuids (#15313) — _@jif-oai_
- [`4ddde54`](https://github.com/openai/codex/commit/4ddde54c19fb984886e08aff063be4baa132611d) Add remote test skill (#15324) — _@pakrym-oai_
- [`b9fa08e`](https://github.com/openai/codex/commit/b9fa08ec619c96617a9ae2041c9ddb02d2c02434) try to fix bazel (#15328) — _@jif-oai_
- [`4f28b64`](https://github.com/openai/codex/commit/4f28b64abcf9eedbf46e87783b127ae89e3a55e7) Add temporary app-server originator fallback for codex-tui (#15218) — _@etraut-openai_
- [`ba85a58`](https://github.com/openai/codex/commit/ba85a580394c862af1cb16b0530f7f857cad43a6) Add remote env CI matrix and integration test (#14869) — _@pakrym-oai_
- [`e5f4d1f`](https://github.com/openai/codex/commit/e5f4d1fef59a3309339394575052c7cc1fff0996) feat: prefer git for curated plugin sync  (#15275) — _@xl-openai_
- [`461ba01`](https://github.com/openai/codex/commit/461ba012fc20449fe2c81230387289abf2e6f0e6) Feat/restore image generation history (#15223) — _@won-openai_
- [`b3a4da8`](https://github.com/openai/codex/commit/b3a4da84da7f93664f0bba6807c0600a318732ec) Add guardian follow-up reminder (#15262) — _@charley-oai_
- [`b1570d6`](https://github.com/openai/codex/commit/b1570d6c2355372c33ee6d095543ee23b2e65672) feat: Add One-Time Startup Remote Plugin Sync (#15264) — _@xl-openai_
- [`cc19276`](https://github.com/openai/codex/commit/cc192763e10f55f5d374b60b50e2421d032ea681) Disable hooks on windows for now (#15252) — _@eternal-openai_
- [`f7201e5`](https://github.com/openai/codex/commit/f7201e5a9f8dd35d13d1599697da946b5a26276b) Initial plugins TUI menu - list and read only. tui + tui_app_server (#15215) — _@canvrno-oai_
- [`fa2a2f0`](https://github.com/openai/codex/commit/fa2a2f0be94e744d6d565a803e12c870d283f930) Use released DotSlash package for argument-comment lint (#15199) — _@bolinfest_
- [`96a8671`](https://github.com/openai/codex/commit/96a86710c3b19f5154c7ce388026f7f6ac947377) Split exec process into local and remote implementations (#15233) — _@starr-openai_
- [`2e22885`](https://github.com/openai/codex/commit/2e22885e79bd793316da217929996149860fff43) Split features into codex-features crate (#15253) — _@aibrahim-oai_
- [`35f8b87`](https://github.com/openai/codex/commit/35f8b87a5b396ac9780fa0100cf6fb1af5a5e282) fix: Distinguish missing and empty plugin products (#15263) — _@xl-openai_
- [`a3e59e9`](https://github.com/openai/codex/commit/a3e59e9e851a85f02b1b5213d897910ffe110801) core: add a full-buffer exec capture policy (#15254) — _@bolinfest_
- [`0a344e4`](https://github.com/openai/codex/commit/0a344e4fab8111acc1833091f26ff0b628853dc0) [plugins] Install MCPs when calling plugin/install (#15195) — _@mzeng-openai_
- [`2aa4873`](https://github.com/openai/codex/commit/2aa4873802134124071b160ddfa21bab28bd45da) Move auth code into login crate (#15150) — _@aibrahim-oai_
- [`ded7854`](https://github.com/openai/codex/commit/ded7854f09d210b4ae7236272ef002279b3f5de2) V8 Bazel Build (#15021) — _@cconger_
- [`403b397`](https://github.com/openai/codex/commit/403b397e4e1d1830a5848367fe05096f8b41faac) Refactor ExecServer filesystem split between local and remote (#15232) — _@pakrym-oai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
