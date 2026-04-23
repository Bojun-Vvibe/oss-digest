# charmbracelet/crush — 2026-04-11

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-04-10T23:59:59.000Z → 2026-04-11T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is a sweep to **drastically shrink tool-call descriptions** across nearly every built-in tool, landing as a long series of `chore(tools/*)` commits gated behind a new `CRUSH_SHORT_TOOL_DESCRIPTIONS` env var (`a02ce4a`). The change touches `bash`, `edit`, `multiedit`, `view`, `ls`, `glob`, `grep`, `write`, `agent`, `agentic_fetch`, `fetch`/`web_fetch`/`web_search`, `download`, `sourcegraph`, `lsp`, `mcp`, `jobs`, `todos`, `crush_info`, and `crush_logs` — effectively a coordinated prompt-budget reduction for the agent's toolset (kicked off by `f78baed`). Two follow-up fixes restored cross-platform guidance in the bash tool (`4d62229`) and added a missing `strconv` import (`d96d044`), both interestingly self-attributed as "Generated with Crush / Assisted-by: GLM-5.1," suggesting maintainers are dogfooding GLM-5.1 through Crush itself. VCR cassettes were re-recorded (`ff003b4`) and tests were pinned to short descriptions (`23073a3`) to lock the new behavior in.

The most interesting new PR is **#2601** (`fix: refresh TUI when session is updated by an external process`) from dshumphr: running `crush run --continue` in a second terminal currently leaves the interactive TUI stale because the pubsub broker is in-process only and never sees SQLite writes from another `crush` process. The fix targets cross-process session sync — worth a read for anyone using Crush across multiple panes.

Also of note, **#2553** (OpenAI Codex subscription login + usage limits in CLI/TUI, by marang) saw activity on the 11th although it remains a closed draft; it proposes OAuth login/logout for `openai-codex`, dynamic `/wham/usage` limit fetching, and a new `crush status` command. No releases or new issues today, and CLA bot commits confirm @bensantora and @dshumphr signed (`e23ef33`, `b612a39`).

Net: read the tool-description sweep if you care about agent prompt size/quality, and #2601 if you use multi-terminal sessions.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

- [#2601](https://github.com/charmbracelet/crush/pull/2601) **fix: refresh TUI when session is updated by an external process** — _by @dshumphr, updated 2026-04-11T12:21:07Z_


## Closed PRs (not merged)

- [#2553](https://github.com/charmbracelet/crush/pull/2553) **feat: add OpenAI Codex subscription login and usage limits in CLI/TUI** — _by @marang, closed 2026-04-02T18:43:38Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`ff003b4`](https://github.com/charmbracelet/crush/commit/ff003b461548c4efd0a41178d31aac00a07e80bc) chore(tests): re-record vcr cassettes — _@meowgorithm_
- [`23073a3`](https://github.com/charmbracelet/crush/commit/23073a3e4a7f38a5dbe35a38ef44868768f72f82) test: always use short tool descriptions for tests — _@andreynering_
- [`d96d044`](https://github.com/charmbracelet/crush/commit/d96d0443c2d61e4684514ce8545dd3db919063e3) fix(tools): add missing strconv import — _@meowgorithm_
- [`4d62229`](https://github.com/charmbracelet/crush/commit/4d62229045b4cc0242056ae2b57caedb14a53320) fix(tools/bash): restore cross-platform instructions in bash tool — _@meowgorithm_
- [`b680a4a`](https://github.com/charmbracelet/crush/commit/b680a4a1cf96e757d772e7f462e08da2809418e2) fix: use proper bool check — _@meowgorithm_
- [`a02ce4a`](https://github.com/charmbracelet/crush/commit/a02ce4a98b6af7ff4f75491d838c901f4a3916a4) chore(tools): gate short descs with CRUSH_SHORT_TOOL_DESCRIPTIONS — _@meowgorithm_
- [`2e8767d`](https://github.com/charmbracelet/crush/commit/2e8767df512b4ab2245c7477f1f18ad6ae690c27) fix(tools): modernize string split — _@meowgorithm_
- [`c9be462`](https://github.com/charmbracelet/crush/commit/c9be4629891a47a1292a1a696237dabf9543671d) chore(tools/bash): improve tool description — _@meowgorithm_
- [`20606b5`](https://github.com/charmbracelet/crush/commit/20606b5b6ef9e3cb62f92b713c40472a099b00ed) chore(tools/crush_logs): improve tool description — _@meowgorithm_
- [`2dd5502`](https://github.com/charmbracelet/crush/commit/2dd5502851e4fe0c084f0fb2b17c4f49a45838ba) chore(tools/crush_info): improve tool description — _@meowgorithm_
- [`67ee624`](https://github.com/charmbracelet/crush/commit/67ee62448bcb4226da37ba3caf1e15303d610de8) chore(tools/todos): improve todo tool description — _@meowgorithm_
- [`591e229`](https://github.com/charmbracelet/crush/commit/591e2295d5b6e56db1f6502f243fa31064badfdf) chore(tools/jobs): improve job tool descriptions — _@meowgorithm_
- [`7230b48`](https://github.com/charmbracelet/crush/commit/7230b48f71ec013443f11f730e470d7189fb203c) chore(tools/agentic_fetch): improve tool description — _@meowgorithm_
- [`4fe6ff4`](https://github.com/charmbracelet/crush/commit/4fe6ff42291343247d8f69ec73712b726eaa8040) chore(tools/mcp): generally improve mcp tool descriptions — _@meowgorithm_
- [`dfa1cf8`](https://github.com/charmbracelet/crush/commit/dfa1cf8e38bfe742816ecb105ffb141ce28cfc08) chore(tools/lsp): improve LSP tool descriptions — _@meowgorithm_
- [`485ee03`](https://github.com/charmbracelet/crush/commit/485ee03b74f9c45aad501e2a668dd758bef603ec) chore(tools/sourcegraph): improve tool description — _@meowgorithm_
- [`f01e422`](https://github.com/charmbracelet/crush/commit/f01e422070a5244cf59a582d9b8877bf0029b012) chore(tools/grep): improve tool description — _@meowgorithm_
- [`741e1b1`](https://github.com/charmbracelet/crush/commit/741e1b1c1bbf91fe9a00d014dc96bc36a20fb7b1) chore(tools/multiedit): improve tool description — _@meowgorithm_
- [`2e141fe`](https://github.com/charmbracelet/crush/commit/2e141feb80040cc0dfae1686c85151e7cbf79436) chore(tools/download): improve download tool description — _@meowgorithm_
- [`d4cf8a0`](https://github.com/charmbracelet/crush/commit/d4cf8a0242f48e9c68f1c57658f1189da1190a85) chore(tools/fetch,web_fetch,web_search): improve tool descriptions — _@meowgorithm_
- [`013efa0`](https://github.com/charmbracelet/crush/commit/013efa0eba986780f9a9698dd266356c799460b9) chore(tools/write): improve tool description — _@meowgorithm_
- [`21c6c98`](https://github.com/charmbracelet/crush/commit/21c6c98d9df31149e66484a7a49ef268d0c0a945) chore(tools/glob): improve tool description — _@meowgorithm_
- [`0a3c66f`](https://github.com/charmbracelet/crush/commit/0a3c66f79dc0e5a7a8c3554a6d2fff024322a0d0) chore(tools/ls): improve tool description — _@meowgorithm_
- [`887fab5`](https://github.com/charmbracelet/crush/commit/887fab53f3afcf37c9c75c606f64988d25e4dade) chore(tools/edit): improve tool description — _@meowgorithm_
- [`535c877`](https://github.com/charmbracelet/crush/commit/535c877e66ee78ead302e2cd6b0a69455995a56b) chore(tools/view): improve tool description — _@meowgorithm_
- [`70d6927`](https://github.com/charmbracelet/crush/commit/70d6927f44be30553c86760da3ad48343608a314) chore(tools/agent): improve and correct tool description — _@meowgorithm_
- [`f78baed`](https://github.com/charmbracelet/crush/commit/f78baed0f06e40a3be64d21c69422ef8a6def832) fix(tools): drastically reduce tool call description lengths — _@meowgorithm_
- [`e23ef33`](https://github.com/charmbracelet/crush/commit/e23ef333aa7b58aed57a0e238cd72a908eb1e20d) chore(legal): @bensantora has signed the CLA — _@charmcli_
- [`b612a39`](https://github.com/charmbracelet/crush/commit/b612a398bdb61bc950236e1793ee875699611d1f) chore(legal): @dshumphr has signed the CLA — _@charmcli_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
