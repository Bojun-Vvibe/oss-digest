# openai/codex — 2026-03-27

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-26T23:59:59.000Z → 2026-03-27T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A busy infrastructure day in `openai/codex`: no releases or PR/issue activity surfaced, but 36 commits landed, dominated by a major TUI restructure, continued `codex-tools`/`codex-utils-template` refactors, sandbox/permissions hardening, and a new inter-agent "spawn v2" feature.

The headline change is the deletion of the legacy TUI in favor of `tui_app_server` (#15922), part 1 of a two-PR split. Two follow-up fixes immediately landed against the new server: a `/copy` regression in turn completion (#16021, addressing #16019) and a hook notification rendering/replay fix that replaces a fragile JSON bridge (#16013, addressing #15984).

On the agent side, jif-oai shipped **spawn v2 as inter-agent communication** (#15985) and made task names mandatory for it (#15986). Approval-mode behavior changed too: MCP read-only tools now bypass guardian routing in auto/approve/always-allow modes (#16044), and `apply_patch` no longer adds redundant writable parent dirs (#16030)—a meaningful semantic change on Windows.

Sandbox/permissions saw several notable updates: a refactor of network permissions into explicit domain and unix-socket rule maps (#15120), Windows sandbox gaining enforced network proxy support (#12220), removal of macOS seatbelt extension profiles from `PermissionProfile` (#15918), folding `MACOS_DEFAULT_PREFERENCES_POLICY` into the base seatbelt policy (#15931), and a `bwrap` lookup fix for multi-entry `PATH` (#15973).

bolinfest continued carving `codex-tools` out of `codex-core`: extracting the Responses API tool models (#16031), named tool definitions (#15953), dynamic tool adapters (#15944), MCP schema adapters (#15928), and shared schema parsing (#15923). In parallel, jif-oai migrated six prompt/template sites (review prompts, sandbox prompts, collaboration presets, search tool descriptions, login error page, review-exit XML) onto `codex-utils-template` (#15995–#16001), with a Windows CRLF follow-up fix (#16027).

Other items worth a glance: ChatGPT device-code login added to the app server (#15525), a generic `ClientResponse` type for app-server-protocol (#15921), new usage-based business plan enums (#15934), curated plugin sync cleanup with metrics (#16035), Bazel clippy CI workflow (#15955), and pinning of GitHub Actions to immutable SHAs (#15828).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`f4f6eca`](https://github.com/openai/codex/commit/f4f6eca871c3983dfee7c7873816179535534997) [codex] Pin GitHub Actions workflow references (#15828) — _@hintz-openai_
- [`d65deec`](https://github.com/openai/codex/commit/d65deec61718f291cba5a51de9489603865779df) Remove the legacy TUI split (#15922) — _@etraut-openai_
- [`307e427`](https://github.com/openai/codex/commit/307e427a9b82f47021ad1939dcf9c5d7495c2552) don't include redundant write roots in apply_patch (#16030) — _@iceweasel-oai_
- [`5b71e51`](https://github.com/openai/codex/commit/5b71e5104fec88a9982c55a6cf39623c28144540) [mcp] Bypass read-only tool checks. (#16044) — _@mzeng-openai_
- [`465897d`](https://github.com/openai/codex/commit/465897dd0f3ab0732227ca2736c103f675f5d292) Fix /copy regression in tui_app_server turn completion (#16021) — _@etraut-openai_
- [`c5778df`](https://github.com/openai/codex/commit/c5778dfca27fe977e714aedc28997e5dce11cd86) Fix tui_app_server hook notification rendering and replay (#16013) — _@etraut-openai_
- [`16d4ea9`](https://github.com/openai/codex/commit/16d4ea9ca8dd2f6ce586168467b568b2ac6973c1) codex-tools: extract responses API tool models (#16031) — _@bolinfest_
- [`82e8031`](https://github.com/openai/codex/commit/82e8031338a5a94172d985662ca1f0cd0a0d3bfb) Add usage-based business plan types (#15934) — _@bwanner-oai_
- [`81abb44`](https://github.com/openai/codex/commit/81abb44f686359719da32974fc3ceec5c1c52db6) plugins: Clean up stale curated plugin sync temp dirs and add sync metrics (#16035) — _@xl-openai_
- [`8002594`](https://github.com/openai/codex/commit/8002594ee3ad32bc7dd9c2465949212bef1c017d) Normalize /mcp tool grouping for hyphenated server names (#15946) — _@pakrym-oai_
- [`95845cf`](https://github.com/openai/codex/commit/95845cf6ceb85a5793aeb227b5a03056cb508756) fix: disable plugins in SDK integration tests (#16036) — _@bolinfest_
- [`15fbf9d`](https://github.com/openai/codex/commit/15fbf9d4f5fcc224c4c97e015253aeef52939ed4) fix: fix Windows CI regression introduced in #15999 (#16027) — _@bolinfest_
- [`caee620`](https://github.com/openai/codex/commit/caee620a530bf65ad4a440909ef5dc64f2c8a3ae) codex-tools: introduce named tool definitions (#15953) — _@bolinfest_
- [`2616c7c`](https://github.com/openai/codex/commit/2616c7cf122d97514bf67dd2cc740fba9236d083) ci: add Bazel clippy workflow for codex-rs (#15955) — _@bolinfest_
- [`617475e`](https://github.com/openai/codex/commit/617475e54be4ac4bc3aca3868c979f157f5ca7ae) codex-tools: extract dynamic tool adapters (#15944) — _@bolinfest_
- [`ec089fd`](https://github.com/openai/codex/commit/ec089fd22aba2c8df074b8abfd42d286b38b399c) fix(sandbox): fix bwrap lookup for multi-entry PATH (#15973) — _@viyatb-oai_
- [`426f28c`](https://github.com/openai/codex/commit/426f28ca99a809134bbc9d4879789582f80093c1) feat: spawn v2 as inter agent communication (#15985) — _@jif-oai_
- [`2b71717`](https://github.com/openai/codex/commit/2b71717ccf43e36453c2dbac3f02a4dd04e062be) Use codex-utils-template for review exit XML (#15999) — _@jif-oai_
- [`f044ca6`](https://github.com/openai/codex/commit/f044ca64df3f13faa679341aeb4469706c458f4d) Use codex-utils-template for search tool descriptions (#15996) — _@jif-oai_
- [`37b057f`](https://github.com/openai/codex/commit/37b057f0030ab34f66dbb6eb6f8e7e7a3443407c) Use codex-utils-template for collaboration mode presets (#15995) — _@jif-oai_
- [`2c85ca6`](https://github.com/openai/codex/commit/2c85ca68429539ce27b346e573fbd07a18616c53) Use codex-utils-template for sandbox mode prompts (#15998) — _@jif-oai_
- [`7d5d9f0`](https://github.com/openai/codex/commit/7d5d9f041b3c7817abf7874b386b1f68ec6872b4) Use codex-utils-template for review prompts (#16001) — _@jif-oai_
- [`270b765`](https://github.com/openai/codex/commit/270b7655cd46e8f7573aea122f87b619b225a754) Use codex-utils-template for login error page (#16000) — _@jif-oai_
- [`6a0c470`](https://github.com/openai/codex/commit/6a0c4709ca2154e9f3ebb07e58fb156386630188) feat: spawn v2 make task name as mandatory (#15986) — _@jif-oai_
- [`2ef91b7`](https://github.com/openai/codex/commit/2ef91b71406da6c88cad959d647915b4e7909f1f) chore: move pty and windows sandbox to Rust 2024 (#15954) — _@bolinfest_
- [`2e84970`](https://github.com/openai/codex/commit/2e849703cd8a2eaebff094ef2a5108a1393d02ed) chore: drop useless stuff (#15876) — _@jif-oai_
- [`47a9e2e`](https://github.com/openai/codex/commit/47a9e2e084e21542821ab65aae91f2bd6bf17c07) Add ChatGPT device-code login to app server (#15525) — _@daniel-oai_
- [`dd30c8e`](https://github.com/openai/codex/commit/dd30c8eedd171d2dda71c43fac27dc42f457da5f) chore: refactor network permissions to use explicit domain and unix socket rule maps (#15120) — _@celia-oai_
- [`21a03f1`](https://github.com/openai/codex/commit/21a03f16718dae1ca2f810c33b50c99b5634c931) [app-server-protocol] introduce generic ClientResponse for app-server-protocol (#15921) — _@rhan-oai_
- [`41fe98b`](https://github.com/openai/codex/commit/41fe98b18538c60feeb779f8fad685a1b048da7b) fix: increase timeout for rust-ci to 45 minutes for now (#15948) — _@bolinfest_
- [`be5afc6`](https://github.com/openai/codex/commit/be5afc65d31728c11d67c589cebbc64a87979e74) codex-tools: extract MCP schema adapters (#15928) — _@bolinfest_
- [`d838c23`](https://github.com/openai/codex/commit/d838c23867f6fe2e3e43a0c82d25c17cb3730b1d) fix: use matrix.target instead of matrix.os for actions/cache build action (#15933) — _@bolinfest_
- [`d76124d`](https://github.com/openai/codex/commit/d76124d656424cd9a15c9ef9e901fc1a9f3679c1) fix: make MACOS_DEFAULT_PREFERENCES_POLICY part of MACOS_SEATBELT_BASE_POLICY (#15931) — _@bolinfest_
- [`81fa047`](https://github.com/openai/codex/commit/81fa04783a551d7e2fc5cfdfc91921aaec3e64bb) feat(windows-sandbox): add network proxy support (#12220) — _@viyatb-oai_
- [`e6e2999`](https://github.com/openai/codex/commit/e6e2999209a9a0c3c25a4d2f37aa73d0c400862e) permissions: remove macOS seatbelt extension profiles (#15918) — _@bolinfest_
- [`44d28f5`](https://github.com/openai/codex/commit/44d28f500f7f21fa13f0e9eea87544a6269efde7) codex-tools: extract shared tool schema parsing (#15923) — _@bolinfest_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
