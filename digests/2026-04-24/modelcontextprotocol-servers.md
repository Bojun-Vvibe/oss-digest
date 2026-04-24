# modelcontextprotocol/servers — 2026-04-24

> Reference MCP server implementations; canonical examples for the protocol.

**Window:** 2026-04-23T04:39:30.304Z → 2026-04-24T04:39:30.304Z  
**Default branch:** `main`  
**Source:** [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

> _Deterministic template only — no LLM summary for this run._

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

- [#4004](https://github.com/modelcontextprotocol/servers/pull/4004) **fix(filesystem): add description fields to tool input schemas (closes #3984)** — _by @Jim1874, updated 2026-04-24T02:39:52Z_
- [#4003](https://github.com/modelcontextprotocol/servers/pull/4003) **fix(filesystem): fix move_file outputSchema to return array (closes #3093)** — _by @Jim1874, updated 2026-04-24T02:37:09Z_
- [#3921](https://github.com/modelcontextprotocol/servers/pull/3921) **Fix isPathWithinAllowedDirectories for UNC paths on Windows** — _by @Christian-Sidak, updated 2026-04-24T02:00:32Z_
- [#3922](https://github.com/modelcontextprotocol/servers/pull/3922) **fix(fetch): fall back when Readability strips hidden SSR content** — _by @Christian-Sidak, updated 2026-04-24T02:00:30Z_
- [#3610](https://github.com/modelcontextprotocol/servers/pull/3610) **fix(filesystem): harden file replacement with EPERM fallback** — _by @Chelebii, updated 2026-04-23T23:08:59Z_
- [#3607](https://github.com/modelcontextprotocol/servers/pull/3607) **Classify filesystem root and path validation failures** — _by @davidahmann, updated 2026-04-23T23:08:59Z_
- [#3999](https://github.com/modelcontextprotocol/servers/pull/3999) **feat: add BusinessHotels.com Agentic Booking server** — _by @businesshotelsdeveloper-dot, updated 2026-04-23T20:37:19Z_
- [#4016](https://github.com/modelcontextprotocol/servers/pull/4016) **fix(filesystem): normalize paths to NFC for Unicode consistency** — _by @Will-hxw, updated 2026-04-23T20:03:32Z_
- [#4014](https://github.com/modelcontextprotocol/servers/pull/4014) **fix(filesystem): only apply MCP roots when no CLI directories are provided** — _by @Will-hxw, updated 2026-04-23T20:02:52Z_
- [#4013](https://github.com/modelcontextprotocol/servers/pull/4013) **fix(everything): add key parameter to get-env tool to prevent secret leakage** — _by @Will-hxw, updated 2026-04-23T19:18:20Z_
- [#4028](https://github.com/modelcontextprotocol/servers/pull/4028) **RFC: Kaelis Memory Extension for Shared Persistent Memory** — _by @Alex-conder, updated 2026-04-23T19:16:52Z_
- [#4022](https://github.com/modelcontextprotocol/servers/pull/4022) **docs(readme): remove outdated GitLab server reference** — _by @Will-hxw, updated 2026-04-23T18:48:34Z_
- [#3948](https://github.com/modelcontextprotocol/servers/pull/3948) **fix(filesystem): tolerate Windows realpath ENOENT** — _by @krot4u, updated 2026-04-23T15:48:05Z_
- [#4027](https://github.com/modelcontextprotocol/servers/pull/4027) **Add REG-Vault (retro-gaming metadata + MCP)** — _by @rtissera, updated 2026-04-23T09:50:21Z_
- [#4025](https://github.com/modelcontextprotocol/servers/pull/4025) **feat(filesystem): add head/tail support to read_multiple_files** — _by @factspark23-hash, updated 2026-04-23T06:54:34Z_
- [#4024](https://github.com/modelcontextprotocol/servers/pull/4024) **feat(filesystem): add compare_files tool for file diff comparison** — _by @factspark23-hash, updated 2026-04-23T06:54:14Z_
- [#4023](https://github.com/modelcontextprotocol/servers/pull/4023) **feat(filesystem): add maxDepth parameter to directory_tree** — _by @factspark23-hash, updated 2026-04-23T06:54:03Z_
- [#4021](https://github.com/modelcontextprotocol/servers/pull/4021) **fix(everything): add description to get-resource-reference resourceType** — _by @Will-hxw, updated 2026-04-23T04:42:04Z_
- [#4017](https://github.com/modelcontextprotocol/servers/pull/4017) **fix(filesystem): add optional depth parameter to list_directory** — _by @Will-hxw, updated 2026-04-23T04:40:42Z_


## Notable Issues

- [#4033](https://github.com/modelcontextprotocol/servers/issues/4033) **Submission: FinMCP - Financial Intelligence MCP Server** — _by @zhaohongyuziranerran_
- [#4032](https://github.com/modelcontextprotocol/servers/issues/4032) **Submission: HumanizerMCP - AI Text Humanization** — _by @zhaohongyuziranerran_
- [#4031](https://github.com/modelcontextprotocol/servers/issues/4031) **"Invalid prompt: your prompt was flagged as potentially violating our usage policy" after GPT-5.5 uses Sequential Thinking** — _by @metalbladex4_
- [#4029](https://github.com/modelcontextprotocol/servers/issues/4029) **filesystem: read_media_file returns invalid 'blob' content type, violating MCP spec** — _by @blackwell-systems_
- [#4026](https://github.com/modelcontextprotocol/servers/issues/4026) **Filesystem MCP writes hang when launched via `npx -y`; reliability improves with pinned global install** _[bug]_ — _by @pmabray_


## Commits on `main`

_None in window._


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (deterministic template; no LLM for this run)._
