# openai/codex — 2026-03-17

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-16T23:59:59.000Z → 2026-03-17T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A heavy commit day (~40 merges) with no releases or new issues/PRs surfaced — most activity is stabilization across realtime audio, the app-server TUI, and Linux/Windows sandboxes.

The most consequential fix is `fix(linux-sandbox): prefer system /usr/bin/bwrap when available` (#14963), which restores the default Linux sandbox on Ubuntu/AppArmor hosts that broke after the switch to vendored bubblewrap. Two related Linux sandbox fixes also landed: ignoring missing writable roots (#14890) and canonicalizing symlinked cwds (#14849). On Windows, the elevated command runner now uses framed IPC (#14846), and "private desktop" is temporarily disabled until it works with that path (#14986).

Realtime audio got a focused stack of changes from aibrahim-oai: unified shutdown path (#14902), v2-gated interruption logic (#14984), current-thread context at startup (#14829), reduced self-interruptions during playback (#14827), and the underlying v2 wire/runtime alignment (#14830). Together these should noticeably reduce dropped/looped audio sessions.

The app-server TUI continues to mature: device-code ChatGPT sign-in and token refresh (#14952), `/mcp` inventory restored in remote mode (#14931), remote resume/fork history fixed (#14930), a hanging first-turn fix when websocket prewarm stalls (#14838), and a partial revert (#14899) backing the TUI off the in-process app server added in #14512 — worth reading if you're tracking that architectural direction. Duplicate legacy stream events from the in-process server are also now ignored (#14892).

Other notable items: a new Python SDK public API and examples (#14446); the `exec_wait` tool renamed to `wait` for code mode (#14983); plugin install elicitation support (#14896) plus `forceRemoteSync` on install/uninstall (#14878) and marketplace display names (#14861, #14886); latest model and reasoning effort now persisted in sqlite for resume (#14859); a JSON schema generated for `RolloutLine` (#14434); and a cluster of CI flake fixes around approval-matrix, permissions popup, Windows cmd shells, and fuzzy file search (#14968, #14966, #14958, #14955). Minor: shell-snapshot suffixes (#14938), tighter shell quoting in GH workflows (#14864), and "Jason" added to the subagent name pool (#14881).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`fc75d07`](https://github.com/openai/codex/commit/fc75d07504ae816c57ec8d3102a45137e89c535f) Add Python SDK public API and examples (#14446) — _@shaqayeq-oai_
- [`0d1539e`](https://github.com/openai/codex/commit/0d1539e74c28c7de9a6c471c7e96d77f15dfcd6e) fix(linux-sandbox): prefer system /usr/bin/bwrap when available (#14963) — _@viyatb-oai_
- [`98be562`](https://github.com/openai/codex/commit/98be562fd393b23250090e36b43012ed69000a69) Unify realtime shutdown in core (#14902) — _@aibrahim-oai_
- [`c6ab4ee`](https://github.com/openai/codex/commit/c6ab4ee537e5b118a20e9e0d3e0c0023cae2d982) Gate realtime audio interruption logic to v2 (#14984) — _@aibrahim-oai_
- [`1a9555e`](https://github.com/openai/codex/commit/1a9555eda98cc561b4beec51fd1c577b0b068e2a) Cleanup skills/remote/xxx endpoints. (#14977) — _@xl-openai_
- [`43ee72a`](https://github.com/openai/codex/commit/43ee72a9b9c9c88dccc86e1e50901ac90dadcc37) fix(tui): implement /mcp inventory for tui_app_server (#14931) — _@fcoury_
- [`0d2ff40`](https://github.com/openai/codex/commit/0d2ff40a58dde63e5aa8be85b5a5f19f384c354c) Add auth env observability (#14905) — _@ccy-oai_
- [`ee756eb`](https://github.com/openai/codex/commit/ee756eb80f94fe018c7a07306c0e43e1a42bcfa6) Rename exec_wait tool to wait (#14983) — _@pakrym-oai_
- [`2cc4ee4`](https://github.com/openai/codex/commit/2cc4ee413f8d86c38a5a46887d2fd5a18d40efbe) temporarily disable private desktop until it works with elevated IPC path (#14986) — _@iceweasel-oai_
- [`4d9d4b7`](https://github.com/openai/codex/commit/4d9d4b7b0f2b8cfbe4ab18e31a7bd80465a975e4) Stabilize approval matrix write-file command (#14968) — _@aibrahim-oai_
- [`23a44dd`](https://github.com/openai/codex/commit/23a44ddbe8f45154a6e55280a74d28957dfefe72) Stabilize permissions popup selection tests (#14966) — _@aibrahim-oai_
- [`b023886`](https://github.com/openai/codex/commit/b02388672f7df432fbe34a9128f78e7a1e9d43ea) Stabilize Windows cmd-based shell test harnesses (#14958) — _@aibrahim-oai_
- [`683c37c`](https://github.com/openai/codex/commit/683c37ce755f198f417db27f780965a5972b5b7b) [plugins] Support plugin installation elicitation. (#14896) — _@mzeng-openai_
- [`49e7dda`](https://github.com/openai/codex/commit/49e7dda2dfd6e67dd5f9dd8bfa22b7c2b1df17ef) Add device-code onboarding and ChatGPT token refresh to app-server TUI (#14952) — _@etraut-openai_
- [`95bdea9`](https://github.com/openai/codex/commit/95bdea93d2600aabef1b87ee5fab05a6022a7d45) use framed IPC for elevated command runner (#14846) — _@iceweasel-oai_
- [`904dbd4`](https://github.com/openai/codex/commit/904dbd414f223027ecdb3d54a8444d3c94395aa6) generate an internal json schema for `RolloutLine` (#14434) — _@keyz_
- [`0d531c0`](https://github.com/openai/codex/commit/0d531c05f2cc497d29da8e478f6770850cdb51bc) Fix code mode yield startup race (#14959) — _@aibrahim-oai_
- [`d484bb5`](https://github.com/openai/codex/commit/d484bb57d9baea4603df0a89ad4f602cee79871d) feat: add suffix to shell snapshot name (#14938) — _@jif-oai_
- [`f26ad3c`](https://github.com/openai/codex/commit/f26ad3c92c3ac1bd1c63325d74924053d3cd0c01) Fix fuzzy search notification buffering in app-server tests (#14955) — _@aibrahim-oai_
- [`78e8ee4`](https://github.com/openai/codex/commit/78e8ee4591d4ff42d180000fbad29d5fb3bcd2a5) fix(tui): restore remote resume and fork history (#14930) — _@fcoury_
- [`8e258eb`](https://github.com/openai/codex/commit/8e258eb3f57a42477b5811a54321263185136a6a) Feat: CXA-1831 Persist latest model and reasoning effort in sqlite (#14859) — _@shijie-oai_
- [`6ea0410`](https://github.com/openai/codex/commit/6ea041032b500a6f3e8511d225af366d5e53439b) fix(core): prevent hanging turn/start due to websocket warming issues (#14838) — _@owenlin0_
- [`e8add54`](https://github.com/openai/codex/commit/e8add54e5dda2fc6f49757aa939378a21b8515e9) feat: show effective model in spawn agent event (#14944) — _@jif-oai_
- [`ef36d39`](https://github.com/openai/codex/commit/ef36d39199c7328899e4f1f6b20a2c9ba5065f83) Fix agent jobs finalization race and reduce status polling churn (#14843) — _@daveaitel-openai_
- [`4ed19b0`](https://github.com/openai/codex/commit/4ed19b07664d28ef67592ab5d77aa30d13d3aba0) feat: rename to get more explicit close agent (#14935) — _@jif-oai_
- [`3164856`](https://github.com/openai/codex/commit/31648563c8d7f77957c79cc04501d0ed11844635) feat: centralize package manager version (#14920) — _@jif-oai_
- [`603b649`](https://github.com/openai/codex/commit/603b6493a9d93f110bacf8d29295acdcdc080d89) fix(linux-sandbox): ignore missing writable roots (#14890) — _@viyatb-oai_
- [`d37dcca`](https://github.com/openai/codex/commit/d37dcca7e080a8d397f37f8bf4bf695d40f7d88e) Revert tui code so it does not rely on in-process app server (#14899) — _@etraut-openai_
- [`57f865c`](https://github.com/openai/codex/commit/57f865c069c4acc213d43371a82671b2deed4e1c) Fix tui_app_server: ignore duplicate legacy stream events (#14892) — _@etraut-openai_
- [`db7e02c`](https://github.com/openai/codex/commit/db7e02c73988f643722b98fdd47d40340b72d6b7) fix: canonicalize symlinked Linux sandbox cwd (#14849) — _@viyatb-oai_
- [`32e4a5d`](https://github.com/openai/codex/commit/32e4a5d5d9ae1acad2e85a142c1b2d446306a4e5) [stack 4/4] Reduce realtime self-interruptions during playback (#14827) — _@aibrahim-oai_
- [`79f476e`](https://github.com/openai/codex/commit/79f476e47dc9d6055ef85322481d56302bfccf53) [stack 3/4] Add current thread context to realtime startup (#14829) — _@aibrahim-oai_
- [`15ede60`](https://github.com/openai/codex/commit/15ede607a087d043a834aaae5021453377e79fd9) fix: tighten up shell arg quoting in GitHub workflows (#14864) — _@bolinfest_
- [`8e34caf`](https://github.com/openai/codex/commit/8e34caffcc3678212acf5ce14ce94adf60ee9f48) [codex] add Jason as a predefined subagent name (#14881) — _@tibo-openai_
- [`e5a28ba`](https://github.com/openai/codex/commit/e5a28ba0c2fd27f58c4949821d4fb886c54a44d3) fix: align marketplace display name with existing interface conventions (#14886) — _@xl-openai_
- [`fbd7f9b`](https://github.com/openai/codex/commit/fbd7f9b9864bef4ee074974d649f0939f3bc91e9) [stack 2/4] Align main realtime v2 wire and runtime flow (#14830) — _@aibrahim-oai_
- [`1d85fe7`](https://github.com/openai/codex/commit/1d85fe79edd7235fc56d6607db03109f6c3dd101) feat: support remote_sync for plugin install/uninstall. (#14878) — _@xl-openai_
- [`49c2b66`](https://github.com/openai/codex/commit/49c2b66ece0d1c19245cdc78a94036313b8eaacc) Add marketplace display names to plugin/list (#14861) — _@xl-openai_
- [`59533a2`](https://github.com/openai/codex/commit/59533a2c26e349c59417e4773b930c26211d7bdd) skill-creator: default new skills to ~/.codex/skills (#14837) — _@xl-openai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
