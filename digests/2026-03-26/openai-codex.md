# openai/codex — 2026-03-26

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-25T23:59:59.000Z → 2026-03-26T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Heavy commit-only day (40+ merges, no releases or new issues/PRs surfaced) dominated by sandbox hardening, plugin/MCP rollout, and continued `app-server` modularization.

The most security-relevant changes harden the Linux sandbox and command allowlists. `fix(network-proxy): fail closed on network-proxy DNS lookup errors` (#15909) makes the local/private IP pre-check fail closed on DNS errors or timeouts rather than letting requests through. `fix: resolve bwrap from trusted PATH entry` (#15791) stops hardcoding `/usr/bin/bwrap` and skips PATH entries inside the workspace, while #15693 restores compatibility with older system bubblewrap that rejects `--argv0` (fixes #15283). `Block unsafe git global options from safe allowlist` (#15796) prevents auto-approval of git invocations that could redirect config/repo/helper lookup, and #15067 extends first-time `./.codex` directory protection across both Linux and macOS sandboxes. Test coverage was added for denylist wildcards-in-the-middle (#15813).

Plugins/MCP went live: #15820 flips the plugin feature flags on, #15829 updates the suggestable plugins list, and #15891 polishes prompts to distinguish missing connectors from discoverable plugins. On the MCP side, #15800 adds "don't ask again" for custom MCP tool calls and gates yolo mode, #15885 fixes legacy_tools, and #15805 enriches `codex.mcp.call` telemetry with tool/connector metadata and duration. Skill metadata cleanup continued in #15812, #15900, and #15906.

For the `app-server`/TUI track, #15661 enables `tui_app_server` by default; supporting fixes include duplicate `/review` messages (#15839), quoted-command rendering (#15825), terminal title support (#15860), and `ReloadUserConfig` wiring (#15806). Remote websocket auth landed in #14853. Transport code was split into per-impl files (#15811, #15810).

Notable refactors worth a glance: `exec-server` prep for unified exec (#15691) plus a typed `ProcessId` (#15866); replacing `askama` with an internal templating lib (#15784); dropping the artifact tool/feature (#15851, #15864); and an AGENTS.md update (#15910) explicitly discouraging new code in the already-oversized `codex-core` crate — relevant for anyone landing patches here.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`a27cd2d`](https://github.com/openai/codex/commit/a27cd2d28150b71882847a8bfdc03d275e29a1eb) bazel: re-organize bazelrc (#15522) — _@sluongng_
- [`c264c6e`](https://github.com/openai/codex/commit/c264c6eef975d4abaf67beefd60added71c90950) Preserve bazel repository cache in github actions (#14495) — _@siggisim_
- [`aea82c6`](https://github.com/openai/codex/commit/aea82c63eac85f5d5fd85de5ac79a0b1ff8369d4) fix(network-proxy): fail closed on network-proxy DNS lookup errors (#15909) — _@viyatb-oai_
- [`5906c6a`](https://github.com/openai/codex/commit/5906c6a658d6b91ccd0963ee6741bdb559b8f78e) chore: remove skill metadata from command approval payloads (#15906) — _@bolinfest_
- [`b52abff`](https://github.com/openai/codex/commit/b52abff279ffe57de90cabc536e30737002b7a73) chore: move bwrap config helpers into dedicated module (#15898) — _@viyatb-oai_
- [`609019c`](https://github.com/openai/codex/commit/609019c6e5a055914dc7d51b111d93db4bd342e1) docs: update AGENTS.md to discourage adding code to codex-core (#15910) — _@bolinfest_
- [`dfb3657`](https://github.com/openai/codex/commit/dfb36573cd0c6aed5a61d6e11ed6d34a34e160ff) sandboxing: use OsString for SandboxCommand.program (#15897) — _@bolinfest_
- [`b23789b`](https://github.com/openai/codex/commit/b23789b770039bca614ac109f3600919c381fbcb) [codex] import token_data from codex-login directly (#15903) — _@bolinfest_
- [`86764af`](https://github.com/openai/codex/commit/86764af684e9091963085f361daa3c521649bb76) Protect first-time project .codex creation across Linux and macOS sandboxes (#15067) — _@rreichel3-oai_
- [`9736fa5`](https://github.com/openai/codex/commit/9736fa5e3d5da08e20c533f07c30c2960475e19b) app-server: Split transport module (#15811) — _@euroelessar_
- [`b3e069e`](https://github.com/openai/codex/commit/b3e069e8cbed9ef86a47335041632ddfb458b79f) skills: remove unused skill permission metadata (#15900) — _@bolinfest_
- [`b6050b4`](https://github.com/openai/codex/commit/b6050b42ae7e13b1eb26e9732a1582bd3c055505) fix: resolve bwrap from trusted PATH entry (#15791) — _@viyatb-oai_
- [`3360f12`](https://github.com/openai/codex/commit/3360f128f46f2aed392dea0d9557d0bb9536d2c2) [plugins] Polish tool suggest prompts. (#15891) — _@mzeng-openai_
- [`25134b5`](https://github.com/openai/codex/commit/25134b592c13328f76b2a56631dcec1abdb1b5b6) [mcp] Fix legacy_tools (#15885) — _@mzeng-openai_
- [`2c54d4b`](https://github.com/openai/codex/commit/2c54d4b1608d6305362dd2c776ee6ac83a37852a) feat(tui): add terminal title support to tui app server (#15860) — _@fcoury_
- [`970386e`](https://github.com/openai/codex/commit/970386e8b2a776d47ef6ac6c2bd67a3c0ed86744) fix: root as std agent (#15881) — _@jif-oai_
- [`0bd34c2`](https://github.com/openai/codex/commit/0bd34c28c768fce784d0648fe45e651b9a9b37d4) Add wildcard in the middle test coverage (#15813) — _@evawong-oai_
- [`af04273`](https://github.com/openai/codex/commit/af0427377898290356e47b9b3a3311083d9ed3fb) [codex] Block unsafe git global options from safe allowlist (#15796) — _@adrian-openai_
- [`e36ebaa`](https://github.com/openai/codex/commit/e36ebaa3daca0e5e73dc2d2af82b04c9eca2526b) fix: box apply_patch test harness futures (#15835) — _@bolinfest_
- [`e7139e1`](https://github.com/openai/codex/commit/e7139e14a29de0411a61658a0e5765e2502a0cd2) Enable `tui_app_server` feature by default (#15661) — _@etraut-openai_
- [`8d479f7`](https://github.com/openai/codex/commit/8d479f741c501fc21e65f58918548b669a9b492d) Add MCP connector metrics (#15805) — _@nicholasclark-openai_
- [`0d44bd7`](https://github.com/openai/codex/commit/0d44bd708eef1fe0a00f601ffe2ecab89a77434e) Fix duplicate /review messages in app-server TUI (#15839) — _@etraut-openai_
- [`352f37d`](https://github.com/openai/codex/commit/352f37db03315dc215fbf23cb36b442554afb8c5) fix: max depth agent still has v2 tools (#15880) — _@jif-oai_
- [`c921419`](https://github.com/openai/codex/commit/c9214192c52aef31758088b5e87e971fc57a0478) [plugins] Update the suggestable plugins list. (#15829) — _@mzeng-openai_
- [`6d2f4aa`](https://github.com/openai/codex/commit/6d2f4aaafc1623a9c5a4b994778329a3a1c686bb) feat: use `ProcessId` in `exec-server` (#15866) — _@jif-oai_
- [`a5824e3`](https://github.com/openai/codex/commit/a5824e37db4834a0eb4c191e67de0dfec4b8fff0) chore: ask agents md not to play with PIDs (#15877) — _@jif-oai_
- [`26c66f3`](https://github.com/openai/codex/commit/26c66f3ee1dda627d08daa50a3f809b5a1825357) fix: flaky (#15869) — _@jif-oai_
- [`01fa4f0`](https://github.com/openai/codex/commit/01fa4f0212db10f0ea3b27e3a0657c5fba504588) core: remove special execve handling for skill scripts (#15812) — _@bolinfest_
- [`6dcac41`](https://github.com/openai/codex/commit/6dcac41d5375d70dc9606c790c68b63260fb2635) chore: drop artifacts lib (#15864) — _@jif-oai_
- [`7dac332`](https://github.com/openai/codex/commit/7dac332c9340c689cbc9641c5fca21306b916f00) feat: exec-server prep for unified exec (#15691) — _@jif-oai_
- [`4a5635b`](https://github.com/openai/codex/commit/4a5635b5a0336274b6ee196140bfe151b18a642d) feat: clean spawn v1 (#15861) — _@jif-oai_
- [`b00a05c`](https://github.com/openai/codex/commit/b00a05c7855eb81e61f95f4d7f00b8c97a13b284) feat: drop artifact tool and feature (#15851) — _@jif-oai_
- [`7ef3cfe`](https://github.com/openai/codex/commit/7ef3cfe63e435ee03812cfb818c4ba8a063a6833) feat: replace askama by custom lib (#15784) — _@jif-oai_
- [`937cb50`](https://github.com/openai/codex/commit/937cb5081df1ac9c458a7bcd784e9878ac924a47) fix: fix old system bubblewrap compatibility without falling back to vendored bwrap (#15693) — _@viyatb-oai_
- [`6d0525a`](https://github.com/openai/codex/commit/6d0525ae7015cb9239cc907fe78e88cf2fea5ce5) Expand home-relative paths on Windows (#15817) — _@tiffanycitra_
- [`1ff39b6`](https://github.com/openai/codex/commit/1ff39b6fa812e987c143c976c488794fd4966f2d) Wire remote app-server auth through the client (#14853) — _@etraut-openai_
- [`b565f05`](https://github.com/openai/codex/commit/b565f05d79c9e6ee8bc891353ae4c037c5982a01) Fix quoted command rendering in tui_app_server (#15825) — _@etraut-openai_
- [`4b50446`](https://github.com/openai/codex/commit/4b50446ffa3385f8b72a5ced71a1306d28646d02) [plugins] Flip flags on. (#15820) — _@mzeng-openai_
- [`c4d9887`](https://github.com/openai/codex/commit/c4d9887f9a11965221bb2b2dc98f68e46b2681e8) [hooks] add non-streaming (non-stdin style) shell-only PostToolUse support (#15531) — _@eternal-openai_
- [`78799c1`](https://github.com/openai/codex/commit/78799c1bcfb997c7f39625d6f47f33e55fe82708) [mcp] Improve custom MCP elicitation (#15800) — _@mzeng-openai_
- [`d7e35e5`](https://github.com/openai/codex/commit/d7e35e56cff9157e4f1ba8da50a44a7bc6353028) app-server: Organize app-server to allow more transports (#15810) — _@euroelessar_
- [`2794e27`](https://github.com/openai/codex/commit/2794e278497e7e604a512ce877d16ed8e8fe6be9) Add ReloadUserConfig to tui_app_server (#15806) — _@canvrno-oai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
