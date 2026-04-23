# openai/codex — 2026-03-11

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-10T23:59:59.000Z → 2026-03-11T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Heavy day on `openai/codex` — ~50 commits landed, dominated by **code mode** (now renamed `exec`) maturation and **multi-agent spawn** ergonomics. No releases, PRs, or issues in the window.

The `code_mode` → `exec` rename (#14254) is the headline churn: tooling, runner, instructions, and error text all switched names. Around it, code mode gained store/load state across invocations (#14259), model-controlled output truncation via `set_max_output_tokens_per_exec_call` (#14258), strongly-typed `exec_command` results (#14183), `output_text`/`output_image` helpers (#14244), success/failure prefixes with error stacks (#14272), MCP tool result exposure with output schemas (#14236), `ALL_TOOLS` export for tool search (#14294), and typed snippets so models understand return types (#12ee9eb / #14284). `js_repl` also picked up `codex.cwd`/`codex.homeDir` (#14385).

Multi-agent work is similarly active: `spawn_agent` now accepts `model` and `reasoning_effort` overrides validated against config (#14160), the TUI shows the spawned agent's model/effort (#14273) and supports keyboard fast-switching between agents (#13923, with a fix in #14376 to avoid hijacking draft editing), role files can carry agent metadata (#14177), `spawn_csv` was split off from `multi_agent` as a standalone feature (#14282), and the spawn prompt was clarified for locked role settings (#14283) plus general prompt updates (#14362).

Notable fixes and infra: revert of "Pass more params to compaction" (#14298, reverting #14247); HTTP proxy listener forced to HTTP/1 so CONNECT works (#14395); OTLP HTTP trace export hardened for app-server runtimes (#14300); Linux tmux segfault fixed by switching to `getpwuid_r` (#13900); resumed-but-incomplete turns now mark interrupted when idle to unstick threads (#14125); websocket `response.failed` delivery stabilized (#14017); a release-mode integration-test compile fix (#13603); and CI now blocks binaries >500KB with an allowlist (#14382).

Smaller but worth noting: initial context insertion deferred to first turn (#14313), `image_detail_original` opt-in for models (#14175), `[tools].web_search` accepts a bool (#14352), per-turn `codex.turn.network_proxy` metric (#14250), ARC monitor for MCP tool calls (#13936, path fix in #14290), extra macOS sandbox levers for Launch Services/Contacts/Reminders (#14155), and a new OpenAI Docs skill (#13596).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`f50e88d`](https://github.com/openai/codex/commit/f50e88db829f7b68f8ffe35733e644bfcc341f70) check for large binaries in CI (#14382) — _@owenlin0_
- [`8791f0a`](https://github.com/openai/codex/commit/8791f0ab9a63e186315eaade28496926fbcbe2f0) Let models opt into original image detail (#14175) — _@fjord-oai_
- [`f548309`](https://github.com/openai/codex/commit/f548309797c3bb23a12ae7d3af0767f5cd501cca) Keep agent-switch word-motion keys out of draft editing (#14376) — _@joshka-oai_
- [`5a89660`](https://github.com/openai/codex/commit/5a89660ae426b34b3e69642215aea52518a85f37) Add js_repl cwd and homeDir helpers (#14385) — _@fjord-oai_
- [`5259e5e`](https://github.com/openai/codex/commit/5259e5e2362b85e9243f5e4685c321615f6a2ec1) fix(network-proxy): serve HTTP proxy listener as HTTP/1 (#14395) — _@viyatb-oai_
- [`f5bb338`](https://github.com/openai/codex/commit/f5bb338fdb8d634ed96d384b3651fca6ca8b2861) Defer initial context insertion until the first turn (#14313) — _@charley-oai_
- [`c32c445`](https://github.com/openai/codex/commit/c32c445f1cb7542f5bd69f6ffed5ab3159e188c9) Clarify locked role settings in spawn prompt (#14283) — _@aibrahim-oai_
- [`52a3bde`](https://github.com/openai/codex/commit/52a3bde6ccaf23f41712593f5b987ca05e2b41f4) feat(core): emit turn metric for network proxy state (#14250) — _@viyatb-oai_
- [`8f8a0f5`](https://github.com/openai/codex/commit/8f8a0f55ceda03680b28bf92a99ca2393793b895) spawn prompt (#14362) — _@aibrahim-oai_
- [`65b3251`](https://github.com/openai/codex/commit/65b325159d51cf2f70ced1fe6117b606cc4355cd) Add ALL_TOOLS export to code mode (#14294) — _@pakrym-oai_
- [`7b2cee5`](https://github.com/openai/codex/commit/7b2cee53dba4e7d20a365c4942dd67cbeffcd8ab) chore: wire through plugin policies + category from marketplace.json (#14305) — _@sayan-oai_
- [`fa1242c`](https://github.com/openai/codex/commit/fa1242c83b024882ddcacb924d13cfd514c8632a) fix(otel): make HTTP trace export survive app-server runtimes (#14300) — _@owenlin0_
- [`5485831`](https://github.com/openai/codex/commit/548583198ac52808e1ddd4550065f74f924e9e2d) Allow bool web_search in ToolsToml (#14352) — _@pakrym-oai_
- [`7f22329`](https://github.com/openai/codex/commit/7f223293892ffac8a75a71823dca90bab870e630) Revert "Pass more params to compaction" (#14298) — _@rasmusrygaard_
- [`fd4a673`](https://github.com/openai/codex/commit/fd4a67352542c8d95c8599f0914ba351f8ca1856) Responses: set x-client-request-id as convesration_id when talking to responses (#14312) — _@cconger_
- [`f385199`](https://github.com/openai/codex/commit/f385199cc023a514b603a99507e2a8708a98f51c) fix(arc_monitor): api path (#14290) — _@fouad-openai_
- [`180a582`](https://github.com/openai/codex/commit/180a5820fc1fa3ca398f088f8906cfe74f7c22a0) Add keyboard based fast switching between agents in TUI (#13923) — _@gabec-openai_
- [`12ee9eb`](https://github.com/openai/codex/commit/12ee9eb6e0021ed8e1c22ea68b2de1b2bbf7283a) Add snippets annotated with types to tools when code mode enabled (#14284) — _@pakrym-oai_
- [`a4d884c`](https://github.com/openai/codex/commit/a4d884c767622e694899a8ddc2de6e4c165aae1c) Split spawn_csv from multi_agent (#14282) — _@aibrahim-oai_
- [`39c1bc1`](https://github.com/openai/codex/commit/39c1bc1c68d2ee8c30cf3100f50e6646ca3c8468) Add realtime start instructions config override (#14270) — _@aibrahim-oai_
- [`31bf1db`](https://github.com/openai/codex/commit/31bf1dbe63d06a45de78a0701cf3593d343a4d9b) Make unified exec session_id numeric (#14279) — _@pakrym-oai_
- [`01792a4`](https://github.com/openai/codex/commit/01792a4c61735f0c396090e061115075ae823549) Prefix code mode output with success or failure message and include error stack (#14272) — _@pakrym-oai_
- [`da74da6`](https://github.com/openai/codex/commit/da74da6684026d68bbbfc5019411508cac707030) render local file links from target paths (#13857) — _@pash-openai_
- [`c8446d7`](https://github.com/openai/codex/commit/c8446d7cf3e749420a1963ecb17c574601652467) Stabilize websocket response.failed error delivery (#14017) — _@aibrahim-oai_
- [`285b3a5`](https://github.com/openai/codex/commit/285b3a51435d3ff1da7e4e78b613d2f451f04915) Show spawned agent model and effort in TUI (#14273) — _@aibrahim-oai_
- [`8a099b3`](https://github.com/openai/codex/commit/8a099b3dfb67951dd041077e3acbda529355acbe) Rename code mode tool to exec (#14254) — _@pakrym-oai_
- [`e77b2fd`](https://github.com/openai/codex/commit/e77b2fd925b4f5581a7db6235353ab74b6f5cdce) prompt changes to guardian (#14263) — _@maja-openai_
- [`9b5078d`](https://github.com/openai/codex/commit/9b5078d3e8480e75771da24e5ce7ba7588cd7011) Stabilize pipe process stdin round-trip test (#14013) — _@aibrahim-oai_
- [`c1a4246`](https://github.com/openai/codex/commit/c1a424691f388830c096b6d1d31921df6e441981) chore: add a separate reject-policy flag for skill approvals (#14271) — _@celia-oai_
- [`83b22bb`](https://github.com/openai/codex/commit/83b22bb612f66cf7f60fd37b62b444f81b194113) Add store/load support for code mode (#14259) — _@pakrym-oai_
- [`2621ba1`](https://github.com/openai/codex/commit/2621ba17e3d1303662141abb70f11be241dcbf90) Pass more params to compaction (#14247) — _@rasmusrygaard_
- [`889b479`](https://github.com/openai/codex/commit/889b4796fca2f292cd57438da90057234f1e6ea7) feat: Add additional macOS Sandbox Permissions for Launch Services, Contacts, Reminders (#14155) — _@leoshimo-oai_
- [`8ac27b2`](https://github.com/openai/codex/commit/8ac27b2a161c08268a774bf8790087a79ac3b119) Add ephemeral flag support to thread fork (#14248) — _@joeytrasatti-openai_
- [`07c22d2`](https://github.com/openai/codex/commit/07c22d20f614838dbec1bc8066ec0a23f5e90f2a) Add code_mode output helpers for text and images (#14244) — _@pakrym-oai_
- [`ce1d9ab`](https://github.com/openai/codex/commit/ce1d9abf117651965ffb312d94929267190a3149) Clarify close_agent tool description (#14269) — _@aibrahim-oai_
- [`b1dddcb`](https://github.com/openai/codex/commit/b1dddcb76e30a50a9196491cabfc6ff7beafabe8) Increase sdk workflow timeout to 15 minutes (#14252) — _@aibrahim-oai_
- [`a67660d`](https://github.com/openai/codex/commit/a67660da2d274282c9c8dee7101787bf023e6f94) Load agent metadata from role files (#14177) — _@gabec-openai_
- [`3d41ff0`](https://github.com/openai/codex/commit/3d41ff0b77506c3e7bd46f7d267b431e0923b6db) Add model-controlled truncation for code mode results (#14258) — _@pakrym-oai_
- [`ee8f841`](https://github.com/openai/codex/commit/ee8f84153efd90d06c7d6f7f3f3eb1ed3a09d9f7) Add output schema to MCP tools and expose MCP tool results in code mode (#14236) — _@pakrym-oai_
- [`d569452`](https://github.com/openai/codex/commit/d5694529caaa89c69f9edbe27f2c25424f65d7ba) app-server: propagate nested experimental gating for AskForApproval::Reject (#14191) — _@dylan-hurd-oai_
- [`722e8f0`](https://github.com/openai/codex/commit/722e8f08e173472095fe001b7cfeb96b62acde95) unifying all image saves to /tmp to bug-proof (#14149) — _@won-openai_
- [`91ca20c`](https://github.com/openai/codex/commit/91ca20c7c39e326aa995c350cb68547d57a9bf54) Add spawn_agent model overrides (#14160) — _@aibrahim-oai_
- [`3d4628c`](https://github.com/openai/codex/commit/3d4628c9c4b84232c5901e5e160db6cbad49e367) Add granular metrics for cloud requirements load (#14108) — _@alexsong-oai_
- [`d751e68`](https://github.com/openai/codex/commit/d751e68f4464ebd099330939b360fdb7a7714762) feat: Allow sync with remote plugin status. (#14176) — _@xl-openai_
- [`f2d66fa`](https://github.com/openai/codex/commit/f2d66fadd8e4d63fab099ca4afb0c4512f32e194) add(core): arc_monitor (#13936) — _@mzeng-openai_
- [`b7f8e91`](https://github.com/openai/codex/commit/b7f8e9195abb2fac4b0535030fd071374e5b9b2a) Add OpenAI Docs skill (#13596) — _@cguo-oai_
- [`3b1c78a`](https://github.com/openai/codex/commit/3b1c78a5c5fcb81a732de64afffc352403dd8964) [skill-creator] Add forward-testing instructions (#13600) — _@ebrevdo_
- [`4ac6042`](https://github.com/openai/codex/commit/4ac60428508c2a4af21c66d37d23593244f1f593) Mark incomplete resumed turns interrupted when idle (#14125) — _@guinness-oai_
- [`c4d3508`](https://github.com/openai/codex/commit/c4d35084f56313d657ad7b6f16f8aee45f5d242c) Reuse McpToolOutput in McpHandler (#14229) — _@pakrym-oai_
- [`52a7f4b`](https://github.com/openai/codex/commit/52a7f4b68b13f4e0b4eea90a0671890bd09e7ed7) Stabilize split PTY output on Windows (#14003) — _@aibrahim-oai_
- [`00ea8aa`](https://github.com/openai/codex/commit/00ea8aa7eeebb8b921573a40f4306ef3e18cf084) Expose strongly-typed result for exec_command (#14183) — _@pakrym-oai_
- [`f9cba5c`](https://github.com/openai/codex/commit/f9cba5cb168c3e3bf325d30ef73d47c87ed895e1) Log ChatGPT user ID for feedback tags (#13901) — _@etraut-openai_
- [`026cfde`](https://github.com/openai/codex/commit/026cfde023e3fae85d12e414b78b9059437e303e) Fix Linux tmux segfault in user shell lookup (#13900) — _@etraut-openai_
- [`7144f84`](https://github.com/openai/codex/commit/7144f84c6948b0ccf18801a298ee2968c14d32bd) Fix release-mode integration test compiler failure (#13603) — _@etraut-openai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
