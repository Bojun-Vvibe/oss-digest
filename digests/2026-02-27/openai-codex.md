# openai/codex — 2026-02-27

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-02-26T23:59:59.000Z → 2026-02-27T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline work is around **realtime audio, sandboxing, and session/rollout plumbing** — no releases or new issues/PRs were recorded in the window, just a heavy merge day on `main`.

On the realtime/voice front, the TUI push-to-talk path was aligned with `gpt-4o-mini-transcribe` and 24 kHz mono i16 capture (#13030), a dedicated `/audio` picker landed for realtime mic/speaker selection with persisted choices (#12850), websocket tracing was added around connect/close/parse (#12981), and a flaky realtime audio test was made deterministic via a websocket request waiter (#12959). Together these signal that voice/realtime is moving toward a shippable UX.

Sandboxing and exec policy got several meaningful changes: Linux bubblewrap now honors restricted `ReadOnlyAccess` via `readable_ro` (#12369), `execpolicy` learned `host_executable()` path mappings so prefix rules aren't tied to the literal first token (#12964), `PermissionProfile` roots moved to `AbsolutePathBuf` for type-level safety (#12970), and on-request permission guidance was clarified for sandbox-related network failures during dependency installs (#13051).

Session/app-server work is the other big theme. #12612 unifies rollout reconstruction with resume/fork `TurnContext` hydration under a single `Session::rec…` path — likely the most architecturally important change to read. #12560 replays pending client requests after `thread/resume` so approval/input UIs recover correctly, and #13047 deflakes running-thread-resume tests. The apps surface stabilized its `app/list updated` event to just two emissions (#13067) and improved `force_fetch=true` cache behavior (#12745). Model metadata gained structured `availability_nux` (#12972) and richer `model/list` upgrade info (#12958).

Smaller but notable: theme-aware TUI diff backgrounds (#13037) and Windows Terminal ANSI16→truecolor promotion (#13016); multimodal `custom_tool_call_output` payloads matching `function_call_output` (#12948); MCP `oauth_resource` handling for streamable login flows (#12866, building on community #12763); a 30-min cloud requirements cache with a 5-min refresh job (#12936); and a `notify` hook payload that now identifies the originating client (#12968). CI: Bazel disabled on `ubuntu-24.04-arm` until stabilized (#13055).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`c3c7587`](https://github.com/openai/codex/commit/c3c75878e86e23694f189cfd7fe4cc5939842a45) fix(tui): theme-aware diff backgrounds with fallback behavior (#13037) — _@fcoury_
- [`a39d76d`](https://github.com/openai/codex/commit/a39d76dc454158ea20179e7685af7a5dedeef10c) feat(linux-sandbox): support restricted ReadOnlyAccess in bwrap (#12369) — _@viyatb-oai_
- [`392fa7d`](https://github.com/openai/codex/commit/392fa7de50f604581b5e1384dc871775c3eab85d) [apps] Stablize app list updated event. (#13067) — _@mzeng-openai_
- [`695957a`](https://github.com/openai/codex/commit/695957a348eb672d1a94797907cb324585b4a8f0) Unify rollout reconstruction with resume/fork TurnContext hydration (#12612) — _@charley-oai_
- [`6046ca1`](https://github.com/openai/codex/commit/6046ca19ba42e7e895eb79f416b5560ca86c71d7) Clarify escalation guidance for sandbox-related network failures (#13051) — _@daniel-oai_
- [`b148d98`](https://github.com/openai/codex/commit/b148d98e0eaed114b38c461e6cd9ef845bb491d1) execpolicy: add host_executable() path mappings (#12964) — _@bolinfest_
- [`6e0f1e9`](https://github.com/openai/codex/commit/6e0f1e9469a07f6bef2346795eb54f4f1a1fda5d) fix: disable Bazel builds in CI on ubuntu-24.04-arm until we can stabilize them (#13055) — _@bolinfest_
- [`69d7a45`](https://github.com/openai/codex/commit/69d7a456bbffd019504ab471a8f2a02abefaa0ae) app-server: Replay pending item requests on `thread/resume` (#12560) — _@euroelessar_
- [`66b0adb`](https://github.com/openai/codex/commit/66b0adb34c3d1665a81e548d319cb16ee069f1c8) app-server: deflake running thread resume tests (#13047) — _@bolinfest_
- [`bc0a584`](https://github.com/openai/codex/commit/bc0a5843df5c3afea0027ef61173aa089958be07) Align TUI voice transcription audio with 4o ASR (#13030) — _@nornagon-openai_
- [`3b5996f`](https://github.com/openai/codex/commit/3b5996f988c35ef282e04df7b7f311a83b562363) fix(tui): promote windows terminal diff ansi16 to truecolor (#13016) — _@fcoury_
- [`d09a753`](https://github.com/openai/codex/commit/d09a7535edee7a5b9cf3df4e4069af3392c60663) fix: use AbsolutePathBuf for permission profile file roots (#12970) — _@bolinfest_
- [`8cf5b00`](https://github.com/openai/codex/commit/8cf5b00aef0d4eda507f1b03ae4b669a6a8013d5) fix: more stable notify script (#13011) — _@jif-oai_
- [`fe439af`](https://github.com/openai/codex/commit/fe439afb81c1ba9999a29e9e996ac6fca561ae4a) chore: tmp remove awaiter (#13001) — _@jif-oai_
- [`c76bc8d`](https://github.com/openai/codex/commit/c76bc8d1ce351405b46459a2711218a5ec10bf2f) feat: use the memory mode for phase 1 extraction (#13002) — _@jif-oai_
- [`bbd2373`](https://github.com/openai/codex/commit/bbd237348d677e26f4030ab0d8fe38263232068f) feat: gen memories config (#12999) — _@jif-oai_
- [`a63d8bd`](https://github.com/openai/codex/commit/a63d8bd56912249d59f087fba633b10a28a75cfc) feat: add use memories config (#12997) — _@jif-oai_
- [`e6cd75a`](https://github.com/openai/codex/commit/e6cd75a684d133268748a27125cf09e8de31f120) notify: include client in legacy hook payload (#12968) — _@bolinfest_
- [`53e28f1`](https://github.com/openai/codex/commit/53e28f18cf0877a058a35ac5c86eb3a643b0a6e0) Add realtime websocket tracing (#12981) — _@aibrahim-oai_
- [`4d180ae`](https://github.com/openai/codex/commit/4d180ae4286aa27f5fb18cdbe0ef9740e8f038c0) Add model availability NUX metadata (#12972) — _@aibrahim-oai_
- [`f53612d`](https://github.com/openai/codex/commit/f53612d3b24e5f61ed4bd08a2b6fb4bd70a5b8fd) Add a background job to refresh the requirements local cache (#12936) — _@alexsong-oai_
- [`cee009d`](https://github.com/openai/codex/commit/cee009d1174258d90dd8e59d6e1e5b49d77a4a18) Add oauth_resource handling for MCP login flows (#12866) — _@etraut-openai_
- [`6fe3dc2`](https://github.com/openai/codex/commit/6fe3dc2e22c6316ada30bd638f38471596871994) [apps] Improve app/list with force_fetch=true (#12745) — _@mzeng-openai_
- [`7e980d7`](https://github.com/openai/codex/commit/7e980d7db665ebfe365c6aeb546405d59d91ff32) Support multimodal custom tool outputs (#12948) — _@fjord-oai_
- [`f90e97e`](https://github.com/openai/codex/commit/f90e97e4148b4ccc57cd7b1765466cb8b2769474) Add realtime audio device picker (#12850) — _@aibrahim-oai_
- [`8715a6e`](https://github.com/openai/codex/commit/8715a6ef841d05d30ef39cdbbe29b9e5ef1f9f72) Feat: cxa-1833 update model/list (#12958) — _@shijie-oai_
- [`a11da86`](https://github.com/openai/codex/commit/a11da86b376e21cd806d3847f79ea66d22f6011e) Make realtime audio test deterministic (#12959) — _@aibrahim-oai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
