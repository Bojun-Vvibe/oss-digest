# modelcontextprotocol/servers — 2026-04-12

> Reference MCP server implementations; canonical examples for the protocol.

**Window:** 2026-04-11T23:59:59.000Z → 2026-04-12T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's signal in modelcontextprotocol/servers is **bug-fix maintenance on the `fetch` and `filesystem` reference servers**, against a backdrop of mass-closing community-server submissions (the repo is no longer accepting README additions; submitters are being redirected to the MCP Server Registry).

**Bug fixes worth reading**

The `fetch` server had a long-standing failure mode on SSR sites (Next.js, Remix) where Mozilla Readability would strip nearly all content from progressively-hydrated pages, returning the unhelpful `<error>Page failed to be simplified from HTML</error>`. Two independent fixes for issue #3878 were closed on the same day: #3879 (morozow) adds fallback extraction inside `extract_content_from_html()` in the Python server, and #3894 (peteroyce) adds a length-threshold check that falls back to raw HTML conversion when Readability output is too short. Worth checking which (if either) actually landed vs. was closed unmerged — both show `merged_at: null`.

#3920 (Yanhu007) fixes a Windows UNC-path regression in the `filesystem` server (issue #3756): `path.normalize` was stripping a leading backslash from `\\server\share`, which `path.resolve` then misinterpreted as drive-relative, causing `isPathWithinAllowedDirectories` to always reject network shares. The fix introduces a `safeNormalize()` helper that restores the `\\` prefix post-normalization.

**Docs**

#3910 adds a pointer under the Security section to an independent trust-assessment resource for MCP servers (input validation, permission scope, rate limiting) before production deployment.

**Closed-not-merged community submissions**

A large batch of "add my server to README" PRs was closed in a single sweep around 21:16–21:17 UTC: #3456, #3641, #3644, #3881, #3884, #3886, #3888, #3889, #3902, #3903, #3909, #3914, #3916, #3917, #3918, #3919, #3923, #3925, plus stale #1202. The boilerplate response in #3909 confirms the policy: README additions are no longer accepted — publish to the [MCP Server Registry](https://github.com/modelcontextprotocol/registry) instead. No releases or direct commits in the window.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Closed PRs (not merged)

- [#3456](https://github.com/modelcontextprotocol/servers/pull/3456) **Add senior-design-director-mcp — design director intelligence for Cla…** — _by @AbrahamOO, closed 2026-04-12T22:50:31Z_
- [#3894](https://github.com/modelcontextprotocol/servers/pull/3894) **fix(fetch): fall back to raw HTML conversion when Readability returns empty content** — _by @peteroyce, closed 2026-04-12T21:38:01Z_
- [#3879](https://github.com/modelcontextprotocol/servers/pull/3879) **fix(fetch): add fallback extraction for readability-stripped content** — _by @morozow, closed 2026-04-12T21:37:57Z_
- [#3920](https://github.com/modelcontextprotocol/servers/pull/3920) **fix(filesystem): preserve UNC path prefix during normalization** — _by @Yanhu007, closed 2026-04-12T21:37:53Z_
- [#3910](https://github.com/modelcontextprotocol/servers/pull/3910) **docs: add independent trust assessment resource for MCP server security** — _by @karlmehta, closed 2026-04-12T21:17:30Z_
- [#3641](https://github.com/modelcontextprotocol/servers/pull/3641) **feat: add Sift agent execution governance MCP server** — _by @walkojas-boop, closed 2026-04-12T21:17:27Z_
- [#3881](https://github.com/modelcontextprotocol/servers/pull/3881) **db-metadata-extractor-mcp server** — _by @karpsetgo, closed 2026-04-12T21:17:24Z_
- [#3909](https://github.com/modelcontextprotocol/servers/pull/3909) **feat: Add Universal Agent Economy OS** — _by @sommerhussain, closed 2026-04-12T21:17:21Z_
- [#3918](https://github.com/modelcontextprotocol/servers/pull/3918) **Add codelens-mcp to Community Servers** — _by @mupozg823, closed 2026-04-12T21:17:11Z_
- [#3644](https://github.com/modelcontextprotocol/servers/pull/3644) **feat: Add API Design Reviewer to community servers** — _by @sharmasundip, closed 2026-04-12T21:17:08Z_
- [#3884](https://github.com/modelcontextprotocol/servers/pull/3884) **Add MCP Dev Brasil — 37 servers for Brazilian commerce and agentic payments** — _by @fabianocruz, closed 2026-04-12T21:17:05Z_
- [#3886](https://github.com/modelcontextprotocol/servers/pull/3886) **Add SUMA Memory — persistent semantic knowledge graph MCP server** — _by @sumanaddanki, closed 2026-04-12T21:17:02Z_
- [#3888](https://github.com/modelcontextprotocol/servers/pull/3888) **Add Meta-Stamp Pockets - licensed AI content access MCP server** — _by @Christebob, closed 2026-04-12T21:16:59Z_
- [#3889](https://github.com/modelcontextprotocol/servers/pull/3889) **Add Spring AI Playground to the Frameworks For Servers** — _by @JM-Lab, closed 2026-04-12T21:16:56Z_
- [#3902](https://github.com/modelcontextprotocol/servers/pull/3902) **Add H33 to Official Integrations** — _by @H33ai-postquantum, closed 2026-04-12T21:16:53Z_
- [#3903](https://github.com/modelcontextprotocol/servers/pull/3903) **Add lazymac/mcp and lazymac/k-mcp to Community Servers** — _by @lazymac2x, closed 2026-04-12T21:16:50Z_
- [#3916](https://github.com/modelcontextprotocol/servers/pull/3916) **Add Swiss Truth MCP — verified knowledge base for AI agents** — _by @swisstruthorg, closed 2026-04-12T21:16:45Z_
- [#3919](https://github.com/modelcontextprotocol/servers/pull/3919) **Add tickerr-mcp — live AI tool status, incidents, and API pricing ** — _by @imviky-ctrl, closed 2026-04-12T21:16:42Z_
- [#3923](https://github.com/modelcontextprotocol/servers/pull/3923) **Add Sverklo to Community Servers** — _by @nike-17, closed 2026-04-12T21:16:40Z_
- [#3925](https://github.com/modelcontextprotocol/servers/pull/3925) **Add Last Minute Deals MCP server (booking execution for AI agents)** — _by @johnanleitner1-Coder, closed 2026-04-12T21:16:37Z_
- [#1202](https://github.com/modelcontextprotocol/servers/pull/1202) **Add my MCP commands server to the list of Community Servers.** — _by @g0t4, closed 2025-06-09T16:17:58Z_
- [#3917](https://github.com/modelcontextprotocol/servers/pull/3917) **Add wisdomGraph — Neo4j-native DIKW accumulative memory MCP server** — _by @cklam12345, closed 2026-04-12T08:38:04Z_
- [#3914](https://github.com/modelcontextprotocol/servers/pull/3914) **feat: add Agentra** — _by @agentrapay, closed 2026-04-12T01:41:03Z_


## Notable Issues

_None in window._


## Commits on `main`

_None in window._


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
