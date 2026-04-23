# openai/codex — 2026-04-11

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-10T23:59:59.000Z → 2026-04-11T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is the new top-level **`codex marketplace add` command** ([#17087](https://github.com/openai/codex/pull/17087)) for installing plugin marketplaces into Codex's local cache, with source parsing for local paths and a follow-up test stabilization ([#17424](https://github.com/openai/codex/pull/17424)). This lands alongside MCP Apps part 3 ([#17364](https://github.com/openai/codex/pull/17364)), which adds an app-server method letting MCP Apps call their own MCP server directly — the marketplace + MCP work together signal a clear push toward an extensible plugin ecosystem.

Sandbox/permissions got two notable fixes worth reading if you run Codex on macOS or with symlinked roots: [#17370](https://github.com/openai/codex/pull/17370) unblocks private DNS in the macOS sandbox by stripping hostname suffixes from the managed `NO_PROXY` while preserving private/link-local entries, and [#15981](https://github.com/openai/codex/pull/15981) fixes symlinked writable roots by preserving logical symlink paths during permission normalization and binding real targets. Both touch security-sensitive code paths.

TUI fixes dominate the rest of the day. [#17415](https://github.com/openai/codex/pull/17415) restores the resume hint on exit for the standalone `codex-tui` entrypoint; [#17416](https://github.com/openai/codex/pull/17416) clears `/ps` immediately after `/stop` instead of waiting for exec-end; [#17430](https://github.com/openai/codex/pull/17430) routes a closed input stream through normal shutdown; [#17336](https://github.com/openai/codex/pull/17336) lands the MVP of local in-session recall for accepted slash commands; and [#17399](https://github.com/openai/codex/pull/17399) enforces a TUI ↔ `codex-core` boundary to prevent further coupling regressions.

Smaller but useful: `prolite` plan type is now recognized for rate-limit fetching ([#17419](https://github.com/openai/codex/pull/17419)); `thread/list` cwd filtering handles Windows verbatim paths so `resume --last` works ([#17414](https://github.com/openai/codex/pull/17414)); a `use_agent_identity` feature flag was added ([#17385](https://github.com/openai/codex/pull/17385)); guardian review timeouts now have protocol representations (`ReviewDecision::TimedOut`, [#17381](https://github.com/openai/codex/pull/17381)) and an analytics event schema ([#17055](https://github.com/openai/codex/pull/17055)); feedback uploads now carry the active turn id ([#17314](https://github.com/openai/codex/pull/17314)); and a separate secure customer devcontainer profile was added ([#10431](https://github.com/openai/codex/pull/10431)). Internal refactor [#17402](https://github.com/openai/codex/pull/17402) unifies tool name+namespace into a single type keying `ToolRegistry`.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`1325bcd`](https://github.com/openai/codex/commit/1325bcd3f6ff054d88170413f0946c3434533430) chore: refactor name and namespace to single type (#17402) — _@sayan-oai_
- [`7a62663`](https://github.com/openai/codex/commit/7a6266323c6d0f17afa2549f5cff02c7c98a3c68) Restore codex-tui resume hint on exit (#17415) — _@etraut-openai_
- [`1e27028`](https://github.com/openai/codex/commit/1e27028360c4afa647d756625932fb8d3b2ffadf) Clear /ps after /stop (#17416) — _@etraut-openai_
- [`3b948d9`](https://github.com/openai/codex/commit/3b948d9dd8d2e13a36e95a05efb6bb2288b801c4) Support prolite plan type (#17419) — _@etraut-openai_
- [`163ae7d`](https://github.com/openai/codex/commit/163ae7d3e6578c69afcf4ba80353bc76c86a683b) fix (#17493) — _@aibrahim-oai_
- [`640d3a0`](https://github.com/openai/codex/commit/640d3a036fcc0547959c6cad3f5cf2cc481a1119) Update issue labeler agent labels (#17483) — _@etraut-openai_
- [`39cc853`](https://github.com/openai/codex/commit/39cc85310fbb1c4d04034e596cd7420090875799) Add use_agent_identity feature flag (#17385) — _@adrian-openai_
- [`51d58c5`](https://github.com/openai/codex/commit/51d58c56d53047760a082e694b9c9452f8cc6b6a) Handle closed TUI input stream as shutdown (#17430) — _@etraut-openai_
- [`0bdeab3`](https://github.com/openai/codex/commit/0bdeab330b378fa3df4296d3354c4dbc821eecca) fix(tui): recall accepted slash commands locally (#17336) — _@fcoury-oai_
- [`be13f03`](https://github.com/openai/codex/commit/be13f03c396b54b85b858bd023bf930b06164e33) Pass turn id with feedback uploads (#17314) — _@ningyi-oai_
- [`dbfe855`](https://github.com/openai/codex/commit/dbfe855f4fd0f5dcdf079882652a8efe622b0595) feat(devcontainer): add separate secure customer profile (#10431) — _@viyatb-oai_
- [`e9e7ef3`](https://github.com/openai/codex/commit/e9e7ef3d366fdb95c24d24fea734b0fa47d79fc4) Fix thread/list cwd filtering for Windows verbatim paths (#17414) — _@etraut-openai_
- [`a9796e3`](https://github.com/openai/codex/commit/a9796e39c45c12be4e4dab963dd01a3cb672b2d3) Stabilize marketplace add local source test (#17424) — _@ningyi-oai_
- [`b7139a7`](https://github.com/openai/codex/commit/b7139a7e8f685e1571817f182234d60bd0b8a9d7) [mcp] Support MCP Apps part 3 - Add mcp tool call support. (#17364) — _@mzeng-openai_
- [`f8bb088`](https://github.com/openai/codex/commit/f8bb088617af44292e76304b93041308adce3c58) update cloud requirements parse failure msg (#17396) — _@alexsong-oai_
- [`8a474a6`](https://github.com/openai/codex/commit/8a474a6561076e9ebdb902a88483d94cffed50cd) fix: unblock private DNS in macOS sandbox (#17370) — _@viyatb-oai_
- [`66e13ef`](https://github.com/openai/codex/commit/66e13efd9cfd0dd3525713c8cf27ea7fbcb6b3e4) TUI: enforce core boundary (#17399) — _@etraut-openai_
- [`37aac89`](https://github.com/openai/codex/commit/37aac89a6db500b8647f8b0fc9251e629eecea51) representing guardian review timeouts in protocol types (#17381) — _@won-openai_
- [`824ec94`](https://github.com/openai/codex/commit/824ec94eab098375dcbb9cf2da1d666fb68ad40f) Fix Windows exec-server output test flake (#17409) — _@etraut-openai_
- [`f9a8d18`](https://github.com/openai/codex/commit/f9a8d1870fbfd8c3e1feb9e5401b46f19e1e7de9) Add marketplace command (#17087) — _@xli-oai_
- [`5893323`](https://github.com/openai/codex/commit/58933237cda27a965927f8cc13fee56ff8e7dcef) feat(analytics): add guardian review event schema (#17055) — _@owenlin0_
- [`b114781`](https://github.com/openai/codex/commit/b114781495f97aa11d2831f81f27f2634842ab24) fix(permissions): fix symlinked writable roots in sandbox permissions (#15981) — _@viyatb-oai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
