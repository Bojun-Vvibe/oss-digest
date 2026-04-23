# openai/codex — 2026-04-19

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-18T23:59:59.000Z → 2026-04-19T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Two alpha releases shipped today (`0.122.0-alpha.11` and `0.122.0-alpha.12`), bundling a sizable batch of TUI, Windows, and agent-infrastructure work.

The headline user-facing additions are in the TUI. `/side` conversations (#18190) introduce ephemeral forks so users can ask quick questions without derailing a long-running thread, addressing #18125. Slash and shell prompts can now be queued while a task is running (#18542), resolving long-standing asks in #14081, #14588, #14286, and #13779. The plan-implementation prompt now displays context used so users can decide whether to clear context before implementing (#18573).

On Windows, two security-relevant sandbox fixes landed: #18443 stops Codex from granting sandbox ACLs across the whole `USERPROFILE` (which was breaking OpenSSH key/permission checks under `~/.ssh`, `~/.tsh`, etc.), and the follow-up #18493 filters additional SSH-config-referenced roots (IdentityFile, CertificateFile, UserKnownHostsFile). Windows also gets a working `codex app` launcher with Intel-vs-Apple-Silicon DMG selection on macOS plus Microsoft Store handoff on Windows (#18500), and a path-handling fix for the desktop launcher (#18530).

Agent/MCP infrastructure: agent tasks are now persisted and prewarmed per thread to avoid re-registration cost (#17978); the executor-backed RMCP stdio transport landed as step 5/6 of the MCP rework (#18212); and two stacked PRs add an `inject_skills_message` toggle for spawned agents (#18444) and force-disable skills injection in guardian review sessions (#18445) — note both show `merged_at: null` despite being closed, so worth confirming they actually shipped.

Smaller fixes worth scanning: a plugin-cache panic when cwd is unavailable (#18499, fixes #16637), a redundant "Memories will be enabled" notice on `/experimental` no-op saves (#18580, fixes #18554), realtime session-id logging (#18571), a fallback source for the external official marketplace (#18524), and removal of the stale `models.json` catalog (#18585).

Still open and worth tracking: #18392 fixes a `turn/interrupt` RPC hang when interrupting an already-completed turn, and #18536 proposes restoring the pre-app-server limited rollout history for TUI sessions (regression from #14717).

## Releases

- **[rust-v0.122.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.12)** _(prerelease)_ — 0.122.0-alpha.12 _by @github-actions[bot] at 2026-04-19T18:48:30Z_
  > Release 0.122.0-alpha.12
- **[rust-v0.122.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.11)** _(prerelease)_ — 0.122.0-alpha.11 _by @github-actions[bot] at 2026-04-19T16:41:50Z_
  > Release 0.122.0-alpha.11


## Merged PRs

- [#17978](https://github.com/openai/codex/pull/17978) **Persist and prewarm agent tasks per thread** — _by @adrian-openai, merged 2026-04-19T22:45:29Z_
- [#18493](https://github.com/openai/codex/pull/18493) **Filter Windows sandbox roots from SSH config dependencies** — _by @efrazer-oai, merged 2026-04-19T21:58:33Z_
- [#18443](https://github.com/openai/codex/pull/18443) **Do not grant Windows sandbox ACLs on USERPROFILE** — _by @efrazer-oai, merged 2026-04-19T20:58:57Z_
- [#18580](https://github.com/openai/codex/pull/18580) **Avoid redundant memory enable notice** — _by @etraut-openai, merged 2026-04-19T20:48:15Z_
- [#18190](https://github.com/openai/codex/pull/18190) **Add `/side` conversations** — _by @etraut-openai, merged 2026-04-19T18:59:41Z_
- [#18585](https://github.com/openai/codex/pull/18585) **Remove unused models.json** — _by @aibrahim-oai, merged 2026-04-19T18:58:55Z_
- [#18571](https://github.com/openai/codex/pull/18571) **Log realtime session id** — _by @aibrahim-oai, merged 2026-04-19T18:23:25Z_
- [#18524](https://github.com/openai/codex/pull/18524) **Add fallback source for external official marketplace** — _by @alexsong-oai, merged 2026-04-19T18:04:14Z_
- [#18542](https://github.com/openai/codex/pull/18542) **Queue slash and shell prompts in the TUI** — _by @etraut-openai, merged 2026-04-19T17:52:17Z_
- [#18500](https://github.com/openai/codex/pull/18500) **Support `codex app` on macOS (Intel) and Windows** — _by @etraut-openai, merged 2026-04-19T17:30:13Z_
- [#18573](https://github.com/openai/codex/pull/18573) **feat(tui): show context used in plan implementation prompt** — _by @fcoury-oai, merged 2026-04-19T17:01:59Z_
- [#18530](https://github.com/openai/codex/pull/18530) **Fix Windows codex app launcher paths** — _by @fcoury-oai, merged 2026-04-19T04:52:37Z_
- [#18212](https://github.com/openai/codex/pull/18212) **[5/6] Wire executor-backed MCP stdio** — _by @aibrahim-oai, merged 2026-04-19T04:47:44Z_
- [#18499](https://github.com/openai/codex/pull/18499) **Fix plugin cache panic when cwd is unavailable** — _by @etraut-openai, merged 2026-04-19T02:04:53Z_


## Open PRs (new or updated)

- [#18392](https://github.com/openai/codex/pull/18392) **Fix hang on turn/interrupt** — _by @danwang-oai, updated 2026-04-19T20:10:19Z_
- [#18536](https://github.com/openai/codex/pull/18536) **Restore limited rollout history for TUI app-server sessions** — _by @etraut-openai, updated 2026-04-19T05:21:03Z_


## Closed PRs (not merged)

- [#18445](https://github.com/openai/codex/pull/18445) **Disable skills in guardian review sessions** — _by @dylan-hurd-oai, closed 2026-04-19T22:27:27Z_
- [#18444](https://github.com/openai/codex/pull/18444) **feat(agent-roles) add skills message toggle** — _by @dylan-hurd-oai, closed 2026-04-19T22:27:11Z_
- [#16734](https://github.com/openai/codex/pull/16734) **deliberate cfg(test) windows clippy violation to verify Bazel catches it** — _by @bolinfest, closed 2026-04-19T06:35:55Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`e5b52a3`](https://github.com/openai/codex/commit/e5b52a3caa7a050c4df81570f5698d74793ef942) Persist and prewarm agent tasks per thread (#17978) — _@adrian-openai_
- [`b885c3f`](https://github.com/openai/codex/commit/b885c3f8b1dc66cf1f89b55f06f8f55c293a846a) Filter Windows sandbox roots from SSH config dependencies (#18493) — _@efrazer-oai_
- [`715fafa`](https://github.com/openai/codex/commit/715fafa23c73c07f934f73c047db4ac7bf313db0) Do not grant Windows sandbox ACLs on USERPROFILE (#18443) — _@efrazer-oai_
- [`ce0e28e`](https://github.com/openai/codex/commit/ce0e28ea6fa6415b9e580bd8db0c6a35382632fb) Avoid redundant memory enable notice (#18580) — _@etraut-openai_
- [`95dafbc`](https://github.com/openai/codex/commit/95dafbc7b5b5c6905db9015b3850dc5967523b2a) Add `/side` conversations (#18190) — _@etraut-openai_
- [`ed1c501`](https://github.com/openai/codex/commit/ed1c5013abebe23048392bd59473682922c9cbff) Remove unused models.json (#18585) — _@aibrahim-oai_
- [`d556e68`](https://github.com/openai/codex/commit/d556e68ff0a2d64cd2aaa6e00748cb977f511981) Log realtime session id (#18571) — _@aibrahim-oai_
- [`cce6002`](https://github.com/openai/codex/commit/cce6002339cbefe4018036b8badc79a1c5217aeb) Add fallback source for external official marketplace (#18524) — _@alexsong-oai_
- [`917a85b`](https://github.com/openai/codex/commit/917a85b0d6811cd1352e8f3dba38b88948fd26cb) Queue slash and shell prompts in the TUI (#18542) — _@etraut-openai_
- [`1163170`](https://github.com/openai/codex/commit/116317021de867f12ea61bd02c118c91d3c3de42) Support `codex app` on macOS (Intel) and Windows (#18500) — _@etraut-openai_
- [`241136b`](https://github.com/openai/codex/commit/241136b0e9cd5d787d74a905af315252930c886b) feat(tui): show context used in plan implementation prompt (#18573) — _@fcoury-oai_
- [`996aa23`](https://github.com/openai/codex/commit/996aa23e4ce900468047ed3ec57d1e7271f8d6de) [5/6] Wire executor-backed MCP stdio (#18212) — _@aibrahim-oai_
- [`e3f44ca`](https://github.com/openai/codex/commit/e3f44ca3b30f85c139f717d271fa6f0e5aa64560) Fix plugin cache panic when cwd is unavailable (#18499) — _@etraut-openai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
