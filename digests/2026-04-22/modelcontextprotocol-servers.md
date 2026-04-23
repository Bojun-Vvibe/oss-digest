# modelcontextprotocol/servers — 2026-04-22

> Reference MCP server implementations; canonical examples for the protocol.

**Window:** 2026-04-21T23:59:59.000Z → 2026-04-22T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A burst of duplicate security/quality fixes targeting the `everything` and `filesystem` servers dominates today's activity — no merges or releases landed, but reviewers will want to triage overlapping PRs before more pile up.

The most consequential thread is a **secret-leakage bug in the `everything` server's `get-env` tool**, which currently returns all of `process.env`. Three independent fixes now require a `key` parameter and return only the requested var (#4001, #4011, #4013), plus a docs-only warning patch (#4009). All close or reference issue #3986. Maintainers should pick one and close the others quickly.

The **`filesystem` server has a similar pile-up**. Two PRs (#4014, #3938) fix the same issue (#3929) where MCP `roots` capability unconditionally overrides CLI-provided directories; both now only consult roots when no CLI dirs are passed. Separately, #4016 normalizes paths to Unicode NFC so macOS APFS (NFD) directory names like `01_ナレッジベース` no longer fail `isPathWithinAllowedDirectories()`. Schema/docs hygiene also lands via #4003 (fixes `move_file` outputSchema MCP `-32602` errors, closes #3093) and #4004 (adds descriptions to all 18 tool input schemas, closes #3984).

For **`fetch`**, two competing PRs add a fallback when Readability over-strips progressive-SSR pages: #3922 proposes a 3-stage pipeline (Readability → readabilipy → markdownify) gated at <1% of original size; #4002 is a simpler <5% raw-markdownify fallback closing #3878. The `everything` server also gets an HTTP-elicitation fix (#3816) using the SDK's existing `relatedTask` option rather than a new API, and `sequential-thinking` gets a render fix (#4005) where ANSI escape codes were inflating box borders and multi-line thoughts broke layout. The `memory` server's scalability work (#3959) adds pagination/limit options to `read_graph`, `search_nodes`, `open_nodes` to curb context explosion (fixes #3953).

Two community-server additions are pending review: AgentCard A2A identity (#4015) and Swiss Truth (#4007), plus a Kiro one-click install badge for filesystem (#4010). Only one new issue (#4008) — self-marked as a wrong post.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

- [#4016](https://github.com/modelcontextprotocol/servers/pull/4016) **fix(filesystem): normalize paths to NFC for Unicode consistency** — _by @Will-hxw, updated 2026-04-22T23:08:23Z_
- [#4015](https://github.com/modelcontextprotocol/servers/pull/4015) **Add AgentCard to Resources — open A2A identity standard with MCP server** — _by @kwailapt, updated 2026-04-22T21:05:25Z_
- [#3959](https://github.com/modelcontextprotocol/servers/pull/3959) **feat(memory): add lightweight read modes for scalability** — _by @surapuramakhil, updated 2026-04-22T20:22:48Z_
- [#4014](https://github.com/modelcontextprotocol/servers/pull/4014) **fix(filesystem): only apply MCP roots when no CLI directories are provided** — _by @Will-hxw, updated 2026-04-22T19:22:59Z_
- [#4013](https://github.com/modelcontextprotocol/servers/pull/4013) **fix(everything): add key parameter to get-env tool to prevent secret leakage** — _by @Will-hxw, updated 2026-04-22T19:19:49Z_
- [#4012](https://github.com/modelcontextprotocol/servers/pull/4012) **docs(everything): add allowed values description to resourceType in get-resource-reference** — _by @Will-hxw, updated 2026-04-22T19:19:45Z_
- [#4011](https://github.com/modelcontextprotocol/servers/pull/4011) **fix(everything): require key parameter for get-env tool to prevent env leakage** — _by @Will-hxw, updated 2026-04-22T19:19:42Z_
- [#4007](https://github.com/modelcontextprotocol/servers/pull/4007) **feat: add Swiss Truth MCP to community servers** — _by @swisstruthorg, updated 2026-04-22T18:23:31Z_
- [#4010](https://github.com/modelcontextprotocol/servers/pull/4010) **docs: Add one-click 'Add to Kiro' install badge for filesystem server** — _by @Jay2113, updated 2026-04-22T17:36:15Z_
- [#4009](https://github.com/modelcontextprotocol/servers/pull/4009) **docs(everything): warn that get-env may expose secrets** — _by @beejak, updated 2026-04-22T14:47:20Z_
- [#3816](https://github.com/modelcontextprotocol/servers/pull/3816) **fix(everything): use relatedTask option to enable elicitation over HTTP (#3228)** — _by @galagaevdc, updated 2026-04-22T12:36:37Z_
- [#3922](https://github.com/modelcontextprotocol/servers/pull/3922) **fix(fetch): fall back when Readability strips hidden SSR content** — _by @Christian-Sidak, updated 2026-04-22T05:23:44Z_
- [#4005](https://github.com/modelcontextprotocol/servers/pull/4005) **fix(sequential-thinking): render box correctly with ANSI codes and multi-line thoughts** — _by @abhicris, updated 2026-04-22T05:18:02Z_
- [#4003](https://github.com/modelcontextprotocol/servers/pull/4003) **fix(filesystem): fix move_file outputSchema to return array of content objects** — _by @Jim1874, updated 2026-04-22T03:34:04Z_
- [#4004](https://github.com/modelcontextprotocol/servers/pull/4004) **fix(filesystem): add description fields to tool input schemas** — _by @Jim1874, updated 2026-04-22T03:17:35Z_
- [#4002](https://github.com/modelcontextprotocol/servers/pull/4002) **fix(fetch): fallback when Readability strips too much content** — _by @Jim1874, updated 2026-04-22T03:17:09Z_
- [#4001](https://github.com/modelcontextprotocol/servers/pull/4001) **fix(tools): restrict get-env to accept key parameter only** — _by @Jim1874, updated 2026-04-22T03:16:56Z_
- [#4000](https://github.com/modelcontextprotocol/servers/pull/4000) **fix(resources): add resourceType description to resourceTypeCompleter** — _by @Jim1874, updated 2026-04-22T03:16:25Z_
- [#3938](https://github.com/modelcontextprotocol/servers/pull/3938) **fix(filesystem): respect CLI directories when client supports MCP roots** — _by @ssam18, updated 2026-04-22T00:23:45Z_


## Notable Issues

- [#4008](https://github.com/modelcontextprotocol/servers/issues/4008) **bug in continue of idea** _[bug]_ — _by @tommyonsn_


## Commits on `main`

_None in window._


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
