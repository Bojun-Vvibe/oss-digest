# modelcontextprotocol/servers — 2026-03-15

> Reference MCP server implementations; canonical examples for the protocol.

**Window:** 2026-03-14T23:59:59.000Z → 2026-03-15T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is a **security hardening fix in the git reference server**: [#3545](https://github.com/modelcontextprotocol/servers/pull/3545) extends the existing `startswith("-")` argument-injection guard to four previously unprotected functions — `git_show`, `git_create_branch`, `git_log` (timestamps), and `git_branch` (`contains`/`not_contains`). Only `git_diff` and `git_checkout` had the guard before, leaving a defense-in-depth gap exploitable by an attacker with filesystem write access. Six new test cases cover each parameter. Worth a read for anyone running the git server.

A second notable robustness fix lands in the fetch server: [#3515](https://github.com/modelcontextprotocol/servers/pull/3515) flips `raise_exceptions=True` → `False` in `server.run()`, preventing `mcp-server-fetch` from being killed by a single malformed JSON-RPC byte on stdin (fuzz testing in #3359 showed it crashed where other servers survived). The sequential-thinking server gets a similar resilience patch in [#3533](https://github.com/modelcontextprotocol/servers/pull/3533), switching `z.number()`/`z.boolean()` to `z.coerce` variants so LLM clients that send `thoughtNumber` or booleans as strings no longer trigger Zod validation errors (fixes #3428).

The rest of the day is a coordinated push to add MCP `ToolAnnotations` (`readOnlyHint`, `destructiveHint`, `idempotentHint`, `openWorldHint`) across the remaining reference servers, closing out a long-running effort:
- **git** server — all 12 tools annotated ([#3589](https://github.com/modelcontextprotocol/servers/pull/3589), fixes #3573)
- **time** server — both tools annotated ([#3581](https://github.com/modelcontextprotocol/servers/pull/3581), fixes #3574)
- **sequential-thinking** — described as the last unannotated single-tool reference server ([#3534](https://github.com/modelcontextprotocol/servers/pull/3534), fixes #3403)

Notably, [#3425](https://github.com/modelcontextprotocol/servers/pull/3425) (annotations for the GitHub server, 26 tools) was **closed unmerged** after sitting since Feb 28 — worth checking why if you're tracking that effort.

Several community-server README additions were also closed unmerged ([#3586](https://github.com/modelcontextprotocol/servers/pull/3586) Signbee, [#3582](https://github.com/modelcontextprotocol/servers/pull/3582) Runframe, [#3531](https://github.com/modelcontextprotocol/servers/pull/3531) Pyth, [#3529](https://github.com/modelcontextprotocol/servers/pull/3529) Defillama), consistent with the project's standing policy directing submissions to the MCP Server Registry instead. No releases or new issues today.

## Releases

_None in window._


## Merged PRs

- [#3533](https://github.com/modelcontextprotocol/servers/pull/3533) **fix(sequential-thinking): use z.coerce for number and boolean params** — _by @nielskaspers, merged 2026-03-15T17:09:04Z_
- [#3589](https://github.com/modelcontextprotocol/servers/pull/3589) **add tools | #3589** — _by @SupunGeethanjana, merged 2026-03-15T16:05:24Z_
- [#3545](https://github.com/modelcontextprotocol/servers/pull/3545) **fix(git): add missing argument injection guards** — _by @ElliotJLT, merged 2026-03-15T16:04:24Z_
- [#3581](https://github.com/modelcontextprotocol/servers/pull/3581) **feat(time): add tool annotations** — _by @nielskaspers, merged 2026-03-15T15:51:03Z_
- [#3534](https://github.com/modelcontextprotocol/servers/pull/3534) **feat(sequential-thinking): add tool annotations** — _by @nielskaspers, merged 2026-03-15T15:50:09Z_
- [#3515](https://github.com/modelcontextprotocol/servers/pull/3515) **fix(fetch): handle malformed input without crashing** — _by @anshul-garg27, merged 2026-03-15T15:35:30Z_


## Open PRs (new or updated)

_None in window._


## Closed PRs (not merged)

- [#3425](https://github.com/modelcontextprotocol/servers/pull/3425) **Add tool annotations to server-github** — _by @Ratnaditya-J, closed 2026-03-15T15:59:42Z_
- [#3586](https://github.com/modelcontextprotocol/servers/pull/3586) **Add Signbee MCP server to Community Servers** — _by @talentseek, closed 2026-03-15T14:25:40Z_
- [#3531](https://github.com/modelcontextprotocol/servers/pull/3531) **feat: add Pyth MCP** — _by @srimisra, closed 2026-03-15T10:23:20Z_
- [#3529](https://github.com/modelcontextprotocol/servers/pull/3529) **feat: add Defillama MCP** — _by @srimisra, closed 2026-03-15T10:22:56Z_
- [#3582](https://github.com/modelcontextprotocol/servers/pull/3582) **Add Runframe MCP server** — _by @niks918, closed 2026-03-15T07:14:37Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`1cdf806`](https://github.com/modelcontextprotocol/servers/commit/1cdf806d21c3afdeb203c04705e8892d0f9d832f) fix(sequential-thinking): use z.coerce for number and boolean params (#3533) — _@nielskaspers_
- [`c7e0c7e`](https://github.com/modelcontextprotocol/servers/commit/c7e0c7e7302cd94a2f36be753e2b18331504407c) add tools | 3573 (#3589) — _@SupunGeethanjana_
- [`ae40ec2`](https://github.com/modelcontextprotocol/servers/commit/ae40ec239d80713c5fa892766ccf8285aecf1270) fix(git): add missing argument injection guards to git_show, git_create_branch, git_log, and git_branch (#3545) — _@ElliotJLT_
- [`81f8301`](https://github.com/modelcontextprotocol/servers/commit/81f8301cd2b4a9c32d925083b86c0885b1ba9fbf) feat(time): add tool annotations to get_current_time and convert_time (#3574) (#3581) — _@nielskaspers_
- [`c2ee97e`](https://github.com/modelcontextprotocol/servers/commit/c2ee97e792655f3452bb1c1066e58f90e036b147) feat(sequential-thinking): add tool annotations (#3534) — _@nielskaspers_
- [`83b2205`](https://github.com/modelcontextprotocol/servers/commit/83b22050b833a1c64e8f7b277c60e17c79d860f9) fix(fetch): handle malformed input without crashing (#3515) — _@anshul-garg27_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
