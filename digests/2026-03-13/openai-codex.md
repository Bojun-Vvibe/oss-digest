# openai/codex — 2026-03-13

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-12T23:59:59.000Z → 2026-03-13T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A heavy commit day (40+ merges) dominated by two themes: **multi-agent / subagents stabilization** and **realtime voice session work**.

The headline change is that the `multi_agent` feature is now **stable and on by default** (#14622), with the model-facing tool renamed from `wait` to `wait_agent` (#14631, follow-up test fixes in #14637, #14639) and user-facing TUI wording rebranded to "subagents" with a new `/subagents` slash command (#14618). Handler code was split per-tool across dedicated files (#14535, #14603) and now returns typed `ToolOutput` values (#14536). Companion to this, **Smart Approvals** lands a `guardian_subagent` reviewer option across core/app-server/TUI (#13860).

Realtime websocket sessions saw a major refactor: v1/v2 config is unified under a single `[realtime]` block with `version`/`type` keys (#14606), a v2 event parser landed behind a feature flag (#14537), transcription mode was added (#14556), and a `codex` function tool is now advertised for v2 handoff (#14554). Two same-day fixes followed: parser-specific voice enums (#14636) and dropping `tools` from transcription `session.update` payloads (#14635).

Other notable platform work:
- **App-server v2 filesystem APIs** for read/write/list/watch (#14245), and OS/family info now in the init response (#14527).
- **TUI now boots on the embedded app server** (#14512), continuing the migration off direct core access.
- **Code mode** gains a `code_mode_only` feature flag (#14617), single-line TS tool declarations (#14526), and moves exec params to a `@pragma` first line (#14511).
- **Sandboxing**: Windows sandbox children launch on a private desktop instead of `Winsta0\Default` (#14400); Linux bubblewrap correctly reopens writable carveouts under denied parents (#14514).
- **Custom CA support** extended to login flows (#14178) and HTTPS/websocket clients (#14239).
- **Hooks**: stop hooks now receive `stop_hook_active` and can loop (#14532).
- Skill configs can override managed network domains per-skill (#14522); plugin usage telemetry added (#14531); `/copy` OSC52 now works under WSL/SSH (#13201).

No issues, PRs, or releases were recorded in the window — all activity is direct-to-`main` commits.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`7fa5201`](https://github.com/openai/codex/commit/7fa52013653465661441ac016886ee843855a08c) Use parser-specific realtime voice enum (#14636) — _@aibrahim-oai_
- [`e9050e3`](https://github.com/openai/codex/commit/e9050e3e649a0d659208f8fc3ed9082f6b9ec4c1) Fix realtime transcription session.update tools payload (#14635) — _@aibrahim-oai_
- [`9a44a7e`](https://github.com/openai/codex/commit/9a44a7e499f18eaed5d06aabb5acf9184deb06b8) [hooks] stop continuation & stop_hook_active mechanics (#14532) — _@eternal-openai_
- [`467e621`](https://github.com/openai/codex/commit/467e6216bbfd2ffb1dbdeeffda248cd040274131) Fix stale create_wait_tool reference (#14639) — _@charley-oai_
- [`bc24017`](https://github.com/openai/codex/commit/bc24017d64829d0b97b8bc6ed529a389e1e8bc1b) Add Smart Approvals guardian review across core, app-server, and TUI (#13860) — _@charley-oai_
- [`e3cbf91`](https://github.com/openai/codex/commit/e3cbf913e801a611f0b17fa14e9a77865244ba8f) Fix wait_agent expectations in core tests (#14637) — _@charley-oai_
- [`cb7d8f4`](https://github.com/openai/codex/commit/cb7d8f45a1393d71b333aea64123227028ae535f) Normalize MCP tool names to code-mode safe form (#14605) — _@pakrym-oai_
- [`f8f82bf`](https://github.com/openai/codex/commit/f8f82bfc2b558229cc4f7ef6245c474ee8b389c7) app-server: add v2 filesystem APIs (#14245) — _@euroelessar_
- [`36dfb84`](https://github.com/openai/codex/commit/36dfb844277e79793766f96305c9633f90bc043e) Stabilize multi-agent feature flag (#14622) — _@aibrahim-oai_
- [`cfd97b3`](https://github.com/openai/codex/commit/cfd97b36da76a17db407b2d9653ed993636e0a30) Rename multi-agent wait tool to wait_agent (#14631) — _@aibrahim-oai_
- [`6720caf`](https://github.com/openai/codex/commit/6720caf778acd9a9ec5f8eb838b48e1a4ce944e8) Slash copy osc52 wsl support (#13201) — _@won-openai_
- [`477a2dd`](https://github.com/openai/codex/commit/477a2dd3458be962178abc891422215bf3c22f52) Add code_mode_only feature (#14617) — _@pakrym-oai_
- [`ef37d31`](https://github.com/openai/codex/commit/ef37d313c6c0c00b91f2ea8a0641d4deace1d67b) fix: preserve zsh-fork escalation fds across unified-exec spawn paths (#13644) — _@bolinfest_
- [`014e195`](https://github.com/openai/codex/commit/014e19510d9fb4bc09c3b8e90fb05d7f3aa39700) feat(app-server, core): add more spans (#14479) — _@owenlin0_
- [`914f7c7`](https://github.com/openai/codex/commit/914f7c73175b038b4d396219754fe21ba6678af2) Override local apps settings with requirements.toml settings (#14304) — _@canvrno-oai_
- [`d58620c`](https://github.com/openai/codex/commit/d58620c852c5ff5cfd65959d80de265c225e59ba) Use subagents naming in the TUI (#14618) — _@aibrahim-oai_
- [`50558e6`](https://github.com/openai/codex/commit/50558e6507f5f5e31106948e341dbf2920adbe8a) app-server: Add platform os and family to init response (#14527) — _@euroelessar_
- [`3aabce9`](https://github.com/openai/codex/commit/3aabce9e0a75767edadf9f1543bb13f731b91ad9) Unify realtime v1/v2 session config (#14606) — _@aibrahim-oai_
- [`9dba733`](https://github.com/openai/codex/commit/9dba7337f21dbc720bd5af70c1628d7c3217f47b) Start TUI on embedded app server (#14512) — _@etraut-openai_
- [`8567e3a`](https://github.com/openai/codex/commit/8567e3a5c7e11cb854c5e5950d9ce200bea517a0) [bazel] Bump up cc and rust toolchains (#14542) — _@zbarsky-openai_
- [`9f2da5a`](https://github.com/openai/codex/commit/9f2da5a9ce13138b6c455ef0bf205cdad69658c8) chore: clarify plugin + app copy in model instructions (#14541) — _@sayan-oai_
- [`59b588b`](https://github.com/openai/codex/commit/59b588b8ec11686d38fc62ff8b6ec491d00fc85d) Improve granular approval policy prompt (#14553) — _@mousseau-oai_
- [`958f93f`](https://github.com/openai/codex/commit/958f93f899c99e8954535c0a6a2e75adde8fd601) sending back imagaegencall response back to responseapi (#14558) — _@won-openai_
- [`6b3d82d`](https://github.com/openai/codex/commit/6b3d82daca540318d074c1ad2afcaba5b3337a3d) Use a private desktop for Windows sandbox instead of Winsta0\Default (#14400) — _@iceweasel-oai_
- [`9c9867c`](https://github.com/openai/codex/commit/9c9867c9fafb98cbae885ee44c0d3327abebb9cf) code mode: single line tool declarations (#14526) — _@pakrym-oai_
- [`8e89e9e`](https://github.com/openai/codex/commit/8e89e9ededc64253c228749521fc9d8049f8947b) Split multi-agent handler into dedicated files (#14603) — _@pakrym-oai_
- [`c7e847a`](https://github.com/openai/codex/commit/c7e847aaeb2dba6655f663ed8a887c4e488f2dd6) Add diagnostics for read_only_unless_trusted timeout flake (#14518) — _@aibrahim-oai_
- [`2253a9d`](https://github.com/openai/codex/commit/2253a9d1d7832cacb86cebf48c267eb58d039603) Add realtime transcription mode for websocket sessions (#14556) — _@aibrahim-oai_
- [`eaf81d3`](https://github.com/openai/codex/commit/eaf81d3f6f3d8c9c80ef977bf8da6a3c03f9b900) Add codex tool support for realtime v2 handoff (#14554) — _@aibrahim-oai_
- [`0c60eea`](https://github.com/openai/codex/commit/0c60eea4a5e125f888140f83e8c87519cc038f62) feat: support skill-scoped managed network domain overrides in skill config (#14522) — _@celia-oai_
- [`7c7e267`](https://github.com/openai/codex/commit/7c7e2675010df55565b547ed101aaea60f9acfe4) Simplify permissions available in request permissions tool (#14529) — _@mousseau-oai_
- [`3e8f471`](https://github.com/openai/codex/commit/3e8f47169e523d2004fe4491bd2e29e78f9c6720) Add realtime v2 event parser behind feature flag (#14537) — _@aibrahim-oai_
- [`650beb1`](https://github.com/openai/codex/commit/650beb177e675aa8b0498b459b757451c347db57) Refactor cloud requirements error and surface in JSON-RPC error (#14504) — _@alexsong-oai_
- [`0daffe6`](https://github.com/openai/codex/commit/0daffe667a755d8d34965e6ffb27b8a1f4a40e83) code_mode: Move exec params from runtime declarations to @pragma (#14511) — _@cconger_
- [`1a363d5`](https://github.com/openai/codex/commit/1a363d5fcfadfac0278c4ffe70d53a8130c13c5e) Add plugin usage telemetry (#14531) — _@alexsong-oai_
- [`f194d4b`](https://github.com/openai/codex/commit/f194d4b11539a446629b10c93b67c2b95eb5500a) fix: reopen writable linux carveouts under denied parents (#14514) — _@viyatb-oai_
- [`7626f61`](https://github.com/openai/codex/commit/7626f612748515d6d79e149c2ae37d7d783cf989) Add typed multi-agent tool outputs (#14536) — _@pakrym-oai_
- [`6912da8`](https://github.com/openai/codex/commit/6912da84a869a313e77a03b0baf0f35f21d34d8c) client: extend custom CA handling across HTTPS and websocket clients (#14239) — _@joshka-oai_
- [`d9a403a`](https://github.com/openai/codex/commit/d9a403a8c01b864d284daf0f4ac545fb442d4c40) [js_repl] Hard-stop active js_repl execs on explicit user interrupts (#13329) — _@aaronl-openai_
- [`793bf32`](https://github.com/openai/codex/commit/793bf32585c31e5c3a33a538bc816c8023074da7) Split multi-agent handlers per tool (#14535) — _@pakrym-oai_
- [`76d8d17`](https://github.com/openai/codex/commit/76d8d174b1c1fa3978eb4a8cdd437b055b2d7144) login: add custom CA support for login flows (#14178) — _@joshka-oai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
