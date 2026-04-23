# openai/codex — 2026-03-19

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-18T23:59:59.000Z → 2026-03-19T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The biggest theme today is the new **exec-server** stack landing in three stacked PRs by @starr-openai and @pakrym-oai: an initialize-only stub plus protocol docs (#15089), the actual exec RPC implementation and process/event flow (#15090), and removal of the deprecated stdio transport (#15119), wired up via experimental URL handling (#15196) and a new `Environment` abstraction with pluggable service traits (#15125). Anyone tracking Codex's runtime architecture should start here.

App-server and tracing also saw significant surface-area growth. `thread/shellCommand` was added so clients can implement `!` shell commands (#14988); `mcpServer/startupStatus/updated` notifications are now exposed as API v2 (#15220); turn spans are tagged with `turn_id` for filterable tracing (#15206) and new turn spans flow over websockets (#14632). MCP turn metadata is now plumbed through `_meta` to group tool calls with sessions (#15190). Note that yesterday's "Forward session and turn headers to MCP HTTP requests" (#15011) was reverted in #15185 as merged-by-mistake.

Agent orchestration gained a graph representation enabling cascade-close/restore of child agents (#15056), plus a fix for already-closed agents (#15163). The hooks system got a `turn_id` extension for Stop & UserPromptSubmit (#15118) and now persists Stop-hook continuation prompts as user messages rather than hidden developer messages (#14867).

On the product side: plugins now support product-scoped filtering via `SessionSource::Custom` and `--session-source` (#15041), featured plugins (#15042), hardened feature gating (#15104), and `needs_auth` exposure for `plugin/read` (#15217). TUI improvements include `/title` for terminal titles across multi-session workflows (#12334), simple directory mentions (#14970), full image paths for VSCode terminal (#15154), and image-gen output relocated to `codex_home/imagegen/thread_id/` (#15222). Windows shell tools received explicit destructive-command guidance (#15207), and automated reviewer approvals are now logged distinctly from user approvals (#15201). Refactor of note: `terminal.rs` extracted into a standalone `terminal-detection` crate (#15216).

No releases, issues, or PR list entries in this window.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`6b8175c`](https://github.com/openai/codex/commit/6b8175c7346d25a13479bc044819ca406ea1c3ae) changed save directory to codex_home (#15222) — _@won-openai_
- [`9e695fe`](https://github.com/openai/codex/commit/9e695fe83083ba5201f9b53021a56fec183d32c6) feat(app-server): add mcpServer/startupStatus/updated notification (#15220) — _@owenlin0_
- [`2bee37f`](https://github.com/openai/codex/commit/2bee37fe69fee6a8af13cd82850718433e8eb742) Plumb MCP turn metadata through _meta (#15190) — _@nicholasclark-openai_
- [`2254ec4`](https://github.com/openai/codex/commit/2254ec4f30b78469bbb0fc310894ea2d7bf6944f) feat: expose needs_auth for plugin/read. (#15217) — _@xl-openai_
- [`27977d6`](https://github.com/openai/codex/commit/27977d67166cc3d0b32c04780e153d05077a66a1) adding full imagepath to tui (#15154) — _@won-openai_
- [`69750a0`](https://github.com/openai/codex/commit/69750a0b5a9f10f2e085b48943d41fd5b12ebc0b) add specific tool guidance for Windows destructive commands (#15207) — _@iceweasel-oai_
- [`7eb19e5`](https://github.com/openai/codex/commit/7eb19e53198470304eb9e74599ec8fb4b97adc3c) Move terminal module to terminal-detection crate (#15216) — _@aibrahim-oai_
- [`668330a`](https://github.com/openai/codex/commit/668330acc12b8907ecd82bc15148e0a627246783) feat(tracing): tag app-server turn spans with turn_id (#15206) — _@owenlin0_
- [`60cd0cf`](https://github.com/openai/codex/commit/60cd0cf75eb29798c71bdfd80f1625e69a26d58d) feat(tui): add /title terminal title configuration (#12334) — _@yvolovich-cyber_
- [`fe287ac`](https://github.com/openai/codex/commit/fe287ac467e915a4a75fccb8ce7b7b82d5c12e53) Log automated reviewer approval sources distinctly (#15201) — _@gabec-openai_
- [`1d210f6`](https://github.com/openai/codex/commit/1d210f639e39040bdb1611267b02df723eb1901f) Add exec-server exec RPC implementation (#15090) — _@starr-openai_
- [`b87ba0a`](https://github.com/openai/codex/commit/b87ba0a3cc1ee3cb1f558233a8d4e3b994217795) Publish runnable DotSlash package for argument-comment lint (#15198) — _@bolinfest_
- [`1837038`](https://github.com/openai/codex/commit/1837038f4e65ba37022d0163894cf29883b4d620) Add experimental exec server URL handling (#15196) — _@pakrym-oai_
- [`267499b`](https://github.com/openai/codex/commit/267499bed853c0011613a1ef26cf2e4db711e556) [hooks] use a user message > developer message for prompt continuation (#14867) — _@eternal-openai_
- [`5ec121b`](https://github.com/openai/codex/commit/5ec121ba120ba40cc4fa89960093a115e5e58da2) Revert "Forward session and turn headers to MCP HTTP requests" (#15185) — _@nicholasclark-openai_
- [`859c58f`](https://github.com/openai/codex/commit/859c58f07dc3768b654711b7841f35e676005e6c) chore: morpheus does not generate memories (#15175) — _@jif-oai_
- [`2cf4d5e`](https://github.com/openai/codex/commit/2cf4d5ef353a0264df280644b26fa7d8fb42d406) chore: add metrics for profile (#15180) — _@jif-oai_
- [`dee03da`](https://github.com/openai/codex/commit/dee03da508a2cdefa9cf8eadad083f6af7fe49f8) Move environment abstraction into exec server (#15125) — _@pakrym-oai_
- [`32d2df5`](https://github.com/openai/codex/commit/32d2df5c1e97948cb5c55481f0b5fd3f8dfabf43) fix: case where agent is already closed (#15163) — _@jif-oai_
- [`70cdb17`](https://github.com/openai/codex/commit/70cdb17703a4310b7173642e011f7534d2b2624f) feat: add graph representation of agent network (#15056) — _@jif-oai_
- [`db5781a`](https://github.com/openai/codex/commit/db5781a08872873a4df82fbb4b3dc6ffd98b5d15) feat: support product-scoped plugins. (#15041) — _@xl-openai_
- [`01df50c`](https://github.com/openai/codex/commit/01df50cf422b2eb89cb6ad8f845548e8c0d3c60c) Add thread/shellCommand to app server API surface (#14988) — _@etraut-openai_
- [`10eb3ec`](https://github.com/openai/codex/commit/10eb3ec7fccaf805c7162d8370b5b99bf57ddc48) Simple directory mentions (#14970) — _@canvrno-oai_
- [`42e932d`](https://github.com/openai/codex/commit/42e932d7bf70cc8e7ce912b4bbd27c0266293ad5) [hooks] turn_id extension for Stop & UserPromptSubmit (#15118) — _@eternal-openai_
- [`b14689d`](https://github.com/openai/codex/commit/b14689df3b97245faa9c29a0b8f3f6c4d09393bf) Forward session and turn headers to MCP HTTP requests (#15011) — _@nicholasclark-openai_
- [`20f2a21`](https://github.com/openai/codex/commit/20f2a216df3e2d534069438ca7126811de9ff89a) feat(core, tracing): create turn spans over websockets (#14632) — _@owenlin0_
- [`903660e`](https://github.com/openai/codex/commit/903660edba6e1ecfd7c9b1782105be4ebf0e02a7) Remove stdio transport from exec server (#15119) — _@pakrym-oai_
- [`4fd2774`](https://github.com/openai/codex/commit/4fd2774614182ebaf74f2e7a8c04bbcf0b09ed96) Add Python SDK thread.run convenience methods (#15088) — _@shaqayeq-oai_
- [`825d093`](https://github.com/openai/codex/commit/825d09373dc6676ade6860f8052fc5018ea7197f) Support featured plugins (#15042) — _@alexsong-oai_
- [`81996fc`](https://github.com/openai/codex/commit/81996fcde605a452ca94662eb7028e8c8b6f9ebb) Add exec-server stub server and protocol docs (#15089) — _@starr-openai_
- [`dcd5e08`](https://github.com/openai/codex/commit/dcd5e0826960258b0b0c79fbd80aa66e9dd24296) fix: harden plugin feature gating (#15104) — _@xl-openai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
