# openai/codex — 2026-03-23

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-22T23:59:59.000Z → 2026-03-23T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is a major push on **multi-agent v2 infrastructure** by jif-oai, landing as a coordinated series of commits: a new `InterAgentCommunication` op type ([#15556](https://github.com/openai/codex/commit/18f1a08bc9c6e39331d9cf34ee240ea0124173cb)), serde-based message encoding/decoding to distinguish inter-agent messages from regular assistant output ([#15560](https://github.com/openai/codex/commit/191fd9fd16e8f4ea43adb438122fb13f1b2ed674)), structured author/recipient message formatting ([#15515](https://github.com/openai/codex/commit/37ac0c093cb4be42f7812737366cab181b9d0417)), and a new custom watcher that emits `InterAgentCommunication` at end-of-turn together with a `wait` tool that simply returns "Wait completed/timed out" while real content flows via the notification watcher ([#15570](https://github.com/openai/codex/commit/4605c653085ac1ea3a4c48e4d1727022bd942f68), [#15575](https://github.com/openai/codex/commit/0b5ba25b467869c35891c9c2b38178a5d13011bd), [#15576](https://github.com/openai/codex/commit/527244910fb851cea6147334dbc08f8fbce4cb9d)). A cleanup split ([#15540](https://github.com/openai/codex/commit/450dc289c3305bf9d94d862d6d30c4916aa2497a)) and a TUI hotfix ([#15557](https://github.com/openai/codex/commit/7eb9e75b864db7c2e6d8e4b68811ecf4843ea914)) accompany the series. Anyone tracking sub-agent architecture should read these together.

Notable security/sandbox fix: bolinfest's [#15338](https://github.com/openai/codex/commit/d1088158b8cc230c14613cea9467fc3ad4ff100a) falls back to vendored bubblewrap when the system `bwrap` lacks `--argv0`, fixing sandboxed tool-call failures on older distros (issue #15283). Relatedly, eternal-openai added a non-streaming `PreToolUse` hook for shell-only execution with deny-list blocking before dispatch ([#15211](https://github.com/openai/codex/commit/73bbb07ba8302932a5462811bc68da0ef66ce50a)).

On the TUI/plugins front: install/uninstall actions are now wired into the plugins menu ([#15342](https://github.com/openai/codex/commit/b5d0a5518ded010f9c78227ec723e63f072dbd83)); duplicate plugin-backed app/skill mentions are suppressed ([#15279](https://github.com/openai/codex/commit/54801634e17e114c5e07be3e1aba6dc5a4ff7879)); skills can be disabled by name for plugin stability across versions ([#15378](https://github.com/openai/codex/commit/9a33e5c0a08e67b85ab80125d62bbe359c06cdd3)); realtime stop handling is unified across `/realtime`, Ctrl+C, and meter deletion ([#15529](https://github.com/openai/codex/commit/7b92a90612b6c2e1075a0f4087ff924f8ca74b58)); `/compact` now queues follow-up input until the manual compact turn ends ([#15259](https://github.com/openai/codex/commit/e838645fa264ef108bb66b74ad284224d2a10ac0)); and tmux users get Shift+Left to edit queued messages ([#15480](https://github.com/openai/codex/commit/5e3793def286099deaf5a6ae625e1f31ad584790)).

Other notable changes: a managed-ChatGPT auth bug where stale processes refreshed with old tokens is fixed by reloading guarded disk state first ([#15357](https://github.com/openai/codex/commit/f55f5c258f0588dd9acc38811a2260d5debc9bd3)); guardian Responses-API errors now surface as denial rationale ([#15516](https://github.com/openai/codex/commit/332edba78e6d3bdccba709801a54f55b835136e8)); `Op::UserTurn` gains an `approvals_reviewer` field ([#15426](https://github.com/openai/codex/commit/67c1c7c054dc494044e091acf17b3f666d5b7658)); and the legacy `smart_approvals` → `guardian_approvals` config alias is removed ([#15464](https://github.com/openai/codex/commit/e830000e4130b932f1ba286974f5d9a414858a9c)).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`5272449`](https://github.com/openai/codex/commit/527244910fb851cea6147334dbc08f8fbce4cb9d) feat: custom watcher for multi-agent v2 (#15576) — _@jif-oai_
- [`0b5ba25`](https://github.com/openai/codex/commit/0b5ba25b467869c35891c9c2b38178a5d13011bd) feat: custom watcher for multi-agent v2 (#15575) — _@jif-oai_
- [`4605c65`](https://github.com/openai/codex/commit/4605c653085ac1ea3a4c48e4d1727022bd942f68) feat: custom watcher for multi-agent v2 (#15570) — _@jif-oai_
- [`0f34b14`](https://github.com/openai/codex/commit/0f34b14b4193ae39fc2c39bad38645b646d448ca) [codex] Add rollback context duplication snapshot (#15562) — _@charley-oai_
- [`67c1c7c`](https://github.com/openai/codex/commit/67c1c7c054dc494044e091acf17b3f666d5b7658) chore(core) Add approvals reviewer to UserTurn (#15426) — _@dylan-hurd-oai_
- [`191fd9f`](https://github.com/openai/codex/commit/191fd9fd16e8f4ea43adb438122fb13f1b2ed674) feat: use serde to differenciate inter agent communication (#15560) — _@jif-oai_
- [`73bbb07`](https://github.com/openai/codex/commit/73bbb07ba8302932a5462811bc68da0ef66ce50a) [hooks] add non-streaming (non-stdin style) shell-only PreToolUse support (#15211) — _@eternal-openai_
- [`18f1a08`](https://github.com/openai/codex/commit/18f1a08bc9c6e39331d9cf34ee240ea0124173cb) feat: new op type for sub-agents communication (#15556) — _@jif-oai_
- [`7eb9e75`](https://github.com/openai/codex/commit/7eb9e75b864db7c2e6d8e4b68811ecf4843ea914) fix: main tui (#15557) — _@jif-oai_
- [`7b92a90`](https://github.com/openai/codex/commit/7b92a90612b6c2e1075a0f4087ff924f8ca74b58) Unify realtime stop handling in TUI (#15529) — _@aibrahim-oai_
- [`9a33e5c`](https://github.com/openai/codex/commit/9a33e5c0a08e67b85ab80125d62bbe359c06cdd3) feat: support disable skills by name. (#15378) — _@xl-openai_
- [`332edba`](https://github.com/openai/codex/commit/332edba78e6d3bdccba709801a54f55b835136e8) Thread guardian Responses API errors into denial rationale (#15516) — _@charley-oai_
- [`450dc28`](https://github.com/openai/codex/commit/450dc289c3305bf9d94d862d6d30c4916aa2497a) chore: split sub-agent v2 implementation (#15540) — _@jif-oai_
- [`b5d0a55`](https://github.com/openai/codex/commit/b5d0a5518ded010f9c78227ec723e63f072dbd83) Plugins TUI install/uninstall (#15342) — _@canvrno-oai_
- [`f55f5c2`](https://github.com/openai/codex/commit/f55f5c258f0588dd9acc38811a2260d5debc9bd3) Fix: proactive auth refresh to reload guarded disk state first (#15357) — _@celia-oai_
- [`37ac0c0`](https://github.com/openai/codex/commit/37ac0c093cb4be42f7812737366cab181b9d0417) feat: structured multi-agent output (#15515) — _@jif-oai_
- [`e838645`](https://github.com/openai/codex/commit/e838645fa264ef108bb66b74ad284224d2a10ac0) tui: queue follow-ups during manual /compact (#15259) — _@charley-oai_
- [`5480163`](https://github.com/openai/codex/commit/54801634e17e114c5e07be3e1aba6dc5a4ff7879) Label plugins as plugins, and hide skills/apps for given plugin (#15279) — _@canvrno-oai_
- [`2887f16`](https://github.com/openai/codex/commit/2887f16cb97b6fd365fb4b2cf8d1c491ae78fa01) fix: cargo deny (#15520) — _@jif-oai_
- [`d108815`](https://github.com/openai/codex/commit/d1088158b8cc230c14613cea9467fc3ad4ff100a) fix: fall back to vendored bubblewrap when system bwrap lacks --argv0 (#15338) — _@bolinfest_
- [`d807d44`](https://github.com/openai/codex/commit/d807d44ae7fb69e8e05fc6e6fddea65f7e9421f5) nit: guard -> registry (#15317) — _@jif-oai_
- [`5e3793d`](https://github.com/openai/codex/commit/5e3793def286099deaf5a6ae625e1f31ad584790) Use Shift+Left to edit queued messages in tmux (#15480) — _@charley-oai_
- [`85065ea`](https://github.com/openai/codex/commit/85065ea1b83d86220c905b00ca9c9597f623957e) core: snapshot fork startup context injection (#15443) — _@charley-oai_
- [`e830000`](https://github.com/openai/codex/commit/e830000e4130b932f1ba286974f5d9a414858a9c) Remove smart_approvals alias migration (#15464) — _@charley-oai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
