# modelcontextprotocol/servers — 2026-04-20

> Reference MCP server implementations; canonical examples for the protocol.

**Window:** 2026-04-19T23:59:59.000Z → 2026-04-20T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Quiet day on `modelcontextprotocol/servers`: no releases, no commits to `main`, and no new issues in the 24h window. Activity was dominated by maintainer triage — a large batch of long-standing community PRs (mostly from 2025) was bulk-touched on Apr 20, and three small README submissions were closed without merging.

The most notable signal is the **closures of three "add my project to README" PRs** within minutes of each other: MCPBundle Studio + MCP Bundles Hub (#3987), ControlKeel (#3978), and HttpStatus MCP Server (#3964) were all closed unmerged. Maintainers appear to be tightening the bar for resource-list additions — worth checking if you've been planning a similar README PR.

The bulk-update sweep refreshed a wide cross-section of open enhancement PRs without merging any. Themes worth scanning if you track these servers:

- **Filesystem** continues to attract the heaviest contribution volume: rename/split of `search_files` (#897), streaming `get_file_hash` (#2516), copy tool (#3176), line-limit configs (#2115, still draft), comprehensive file-ops + tests (#3339), UTF-8/Unicode fixes for macOS umlauts and symlinks (#3238), structuredContent test fixes (#3270), and a `--read-only` enforcement flag (#3505).
- **Security hardening** is a clear cross-server trend: SSRF protection and host allowlisting for fetch (#3180, #2568), configurable SSL verify (#3179), and a strict-ACL fail-closed startup mode spanning filesystem/fetch/git (#3440), plus fail-closed manifest validation (#3391).
- **Git server** has four pending tool additions: `git_pull` (#1923), `git_push` (#2961), GPG-signed commits (#2981), and branch/remote introspection tools (#3396).
- **Memory server** has multiple competing proposals around graph traversal and efficiency: `get_node_relations` (#2310), `read_graph_summary` (#2619), case-normalization (#1769), cross-process file locking (#3286), a fix for `open_nodes` missing outgoing relations (#3332), and a CWD-default path change (#2160).
- **Transport / robustness**: streamable HTTP for memory + sequential-thinking (#3084), and an unbounded-memory fix for sequential-thinking that cites 10GB+ RAM in long sessions (#3321) — probably the highest-impact bug fix sitting in the queue.

Two duplicate "gracefully handle unavailable directories" PRs (#3187, #3277) were closed on Apr 18, suggesting that fix may have landed via another path worth verifying.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

- [#897](https://github.com/modelcontextprotocol/servers/pull/897) **Rename "search_files" to "search_files_by_name"** — _by @sebastien-rosset, updated 2026-04-20T17:19:37Z_
- [#1769](https://github.com/modelcontextprotocol/servers/pull/1769) **Optimize Memory Search: Normalize entity names and observation contents to lowercase on add, create and delete for consistent comparisons** — _by @bernoussama, updated 2026-04-20T17:19:36Z_
- [#1923](https://github.com/modelcontextprotocol/servers/pull/1923) **feat: add git_pull tool support and cursor usage** — _by @majinghe, updated 2026-04-20T17:19:33Z_
- [#2115](https://github.com/modelcontextprotocol/servers/pull/2115) _(draft)_ **Add line limits and env variable configs** — _by @olaservo, updated 2026-04-20T17:19:32Z_
- [#2160](https://github.com/modelcontextprotocol/servers/pull/2160) **mcp-server-memory: use working directory for default path** — _by @solatis, updated 2026-04-20T17:19:30Z_
- [#2310](https://github.com/modelcontextprotocol/servers/pull/2310) **Add get_node_relations function for efficient graph traversal** — _by @enthali, updated 2026-04-20T17:19:28Z_
- [#2516](https://github.com/modelcontextprotocol/servers/pull/2516) **feat(filesystem): add streaming `get_file_hash` tool for cryptographic digests (md5/sha1/sha256)** — _by @Pucciano, updated 2026-04-20T17:19:26Z_
- [#2568](https://github.com/modelcontextprotocol/servers/pull/2568) **Add host allowlisting and IP blocking to Fetch server** — _by @olaservo, updated 2026-04-20T17:19:25Z_
- [#2619](https://github.com/modelcontextprotocol/servers/pull/2619) **feat(memory): add read_graph_summary function for efficient entity overview** — _by @nhickster, updated 2026-04-20T17:19:23Z_
- [#2831](https://github.com/modelcontextprotocol/servers/pull/2831) **everything: zip tool: add outputType to control resource vs. resource link output** — _by @ochafik, updated 2026-04-20T17:19:19Z_
- [#2961](https://github.com/modelcontextprotocol/servers/pull/2961) **Add git_push tool to Git MCP server** — _by @thecoderpanda, updated 2026-04-20T17:19:17Z_
- [#2981](https://github.com/modelcontextprotocol/servers/pull/2981) **feat(git): add signed commit tool with GPG support** — _by @joaommartins, updated 2026-04-20T17:19:15Z_
- [#3084](https://github.com/modelcontextprotocol/servers/pull/3084) **add streamable http transport support to memory and sequentialthinking** — _by @robertlestak, updated 2026-04-20T17:19:13Z_
- [#3176](https://github.com/modelcontextprotocol/servers/pull/3176) **feat: add filesystem copy tool** — _by @liam61, updated 2026-04-20T17:19:07Z_
- [#3180](https://github.com/modelcontextprotocol/servers/pull/3180) **feat(fetch): add SSRF protection and comprehensive security test suite** — _by @Tomo1912, updated 2026-04-20T17:19:05Z_
- [#3286](https://github.com/modelcontextprotocol/servers/pull/3286) **feat(memory): add file locking to support multi-instance** — _by @xz-dev, updated 2026-04-20T17:18:46Z_
- [#3324](https://github.com/modelcontextprotocol/servers/pull/3324) _(draft)_ **feat(sequential-thinking): Add comprehensive test coverage, architectural improvements, and robustness hardening** — _by @vlordier, updated 2026-04-20T17:18:41Z_
- [#3339](https://github.com/modelcontextprotocol/servers/pull/3339) **Add comprehensive file operations tool with more tests** — _by @hamzaMissewi, updated 2026-04-20T17:18:37Z_
- [#3396](https://github.com/modelcontextprotocol/servers/pull/3396) **feat(git): add git_current_branch, git_default_branch, and git_remote tools** — _by @cblecker, updated 2026-04-20T17:18:32Z_
- [#3440](https://github.com/modelcontextprotocol/servers/pull/3440) **Add strict ACL startup mode for filesystem, fetch, and git servers** — _by @davidahmann, updated 2026-04-20T17:18:29Z_
- [#3505](https://github.com/modelcontextprotocol/servers/pull/3505) **Filesystem Server Hardening: Enforce Read-Only Capability Boundaries** — _by @failuresmith, updated 2026-04-20T17:18:26Z_
- [#3580](https://github.com/modelcontextprotocol/servers/pull/3580) **feat(fetch): add tool annotations** — _by @nielskaspers, updated 2026-04-20T17:18:22Z_
- [#630](https://github.com/modelcontextprotocol/servers/pull/630) **Resolve #604 Running mcp-server-git with uvx gives full disk access/--repository param is ignored** — _by @sparesparrow, updated 2026-04-20T17:17:47Z_
- [#2205](https://github.com/modelcontextprotocol/servers/pull/2205) **fix: Containers - Bind Mounts - Security and Compatibility (Docker / Podman / SELinux) for Fetch, Git, and Time Servers** — _by @trentapple, updated 2026-04-20T17:17:45Z_
- [#3179](https://github.com/modelcontextprotocol/servers/pull/3179) **fix(fetch): add configurable SSL certificate verification** — _by @Tomo1912, updated 2026-04-20T17:17:41Z_
- [#3238](https://github.com/modelcontextprotocol/servers/pull/3238) **fix (filesystem): Add UTF-8 encoding and Unicode normalization for umlauts and symlinks** — _by @kernhuber, updated 2026-04-20T17:17:33Z_
- [#3270](https://github.com/modelcontextprotocol/servers/pull/3270) **fix(filesystem): fix structuredContent tests and update dependencies** — _by @forbiddancherry, updated 2026-04-20T17:17:30Z_
- [#3321](https://github.com/modelcontextprotocol/servers/pull/3321) **fix(sequentialthinking): prevent unbounded memory growth in thought history** — _by @Limitless2023, updated 2026-04-20T17:17:22Z_
- [#3332](https://github.com/modelcontextprotocol/servers/pull/3332) **fix: include outgoing relations in open_nodes** — _by @Limitless2023, updated 2026-04-20T17:17:20Z_
- [#3391](https://github.com/modelcontextprotocol/servers/pull/3391) **validation: fail closed on unknown declaration manifests** — _by @davidahmann, updated 2026-04-20T17:17:12Z_
- [#3905](https://github.com/modelcontextprotocol/servers/pull/3905) **fix: treat lockfile-only package changes as releasable** — _by @haosenwang1018, updated 2026-04-20T17:15:55Z_


## Closed PRs (not merged)

- [#3187](https://github.com/modelcontextprotocol/servers/pull/3187) **fix(filesystem): gracefully handle unavailable directories** — _by @eran3d, closed 2026-04-18T02:43:01Z_
- [#3277](https://github.com/modelcontextprotocol/servers/pull/3277) **fix(filesystem): gracefully handle unavailable directories on startup** — _by @Sean-Kenneth-Doherty, closed 2026-04-18T02:43:06Z_
- [#3987](https://github.com/modelcontextprotocol/servers/pull/3987) **Add MCPBundle Studio (For clients) and MCP Bundles Hub (Resources)** — _by @TonyLLondon, closed 2026-04-20T14:30:41Z_
- [#3978](https://github.com/modelcontextprotocol/servers/pull/3978) **Add ControlKeel to MCP resources list** — _by @aryaminus, closed 2026-04-20T14:30:40Z_
- [#3964](https://github.com/modelcontextprotocol/servers/pull/3964) **Update README.md** — _by @httpstatus-com, closed 2026-04-17T22:33:20Z_


## Notable Issues

_None in window._


## Commits on `main`

_None in window._


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
