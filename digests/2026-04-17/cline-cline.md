# cline/cline — 2026-04-17

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-04-16T23:59:59.000Z → 2026-04-17T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is security and model-catalog hygiene rather than new features. Maintainers pushed through an axios 1.13.6 → 1.15.0 bump across every package (`#10271`, commit `c5657a1`), closing out a cluster of Aikido and Dependabot PRs (`#10297`, `#10272`, `#10298`, `#10228`, `#10229`) that flagged critical SSRF/proxy-bypass, prototype-pollution RCE, and follow-redirects auth-header leakage. If you maintain a fork or vendored build, this is the change to pull first.

On the product side, docs were updated for the **Claude Opus 4.7** release (`#10295`, commit `9a8fbf9`), adding `claude-opus-4-7` and `claude-opus-4-7:1m` to the Anthropic provider config and demoting Opus 4.6 to "previous generation." This signals v3.79.0 is shipping with Opus 4.7 as the default-tier Anthropic model — worth checking if you pin model IDs.

The most interesting in-flight work is `#10304` ("Vertex AI Architecture Overhaul"), still open, which decouples `vertexRegion` so Plan and Act modes can target different regions (e.g., Gemini in us-central1 for Plan, Claude 1M elsewhere for Act). It's a follow-up to the partial Vertex implementation tracked in `#10295`-adjacent issue `#10295`/`#10295` and aligns the provider with the April 17 platform spec — read this if you use Vertex.

Enterprise users should look at `#10283` (merged), which wires remote `globalSkills` end-to-end into the extension, treating `frontmatter.name` as the canonical skill identity with drift warnings. This completes the loop started in `#10236` so the core-platform dashboard's saved skills actually surface in-extension.

Finally, observability got a boost via `#10195` (commit `10af243`): a comprehensive prompt-storage schema (S3/R2 setup, IAM, sync-worker behavior) and an OpenTelemetry events catalog covering 80+ events across 8 categories with Datadog/Grafana/New Relic integration examples — the reference to bookmark if you're instrumenting Cline at scale.

No releases cut and no notable issues filed in the window.

## Releases

_None in window._


## Merged PRs

- [#10195](https://github.com/cline/cline/pull/10195) **docs: add prompt storage schema and OpenTelemetry events reference** — _by @jl-codes, merged 2026-04-17T21:59:36Z_
- [#10295](https://github.com/cline/cline/pull/10295) **docs: update Anthropic docs for Claude Opus 4.7 release** — _by @jl-codes, merged 2026-04-17T18:51:45Z_
- [#10271](https://github.com/cline/cline/pull/10271) **chore: update axios to 1.15.0 across all packages** — _by @TheRealSpencer, merged 2026-04-17T15:52:28Z_
- [#10283](https://github.com/cline/cline/pull/10283) **feat: wire up remote globalSkills with enterprise UI and architectural fixes [ENG-1774]** — _by @robinnewhouse, merged 2026-04-17T01:38:02Z_


## Open PRs (new or updated)

- [#10304](https://github.com/cline/cline/pull/10304) **feat: Vertex AI Architecture Overhaul (Claude 4.7, Gemini 3.1, & Region Decoupling)** — _by @TAMdrew, updated 2026-04-17T21:55:30Z_
- [#10281](https://github.com/cline/cline/pull/10281) **chore(deps): bump follow-redirects from 1.15.11 to 1.16.0** — _by @dependabot[bot], updated 2026-04-17T15:54:11Z_
- [#10103](https://github.com/cline/cline/pull/10103) **chore(deps-dev): bump rollup from 4.56.0 to 4.60.1 in /evals/analysis** — _by @dependabot[bot], updated 2026-04-17T15:53:06Z_


## Closed PRs (not merged)

- [#10297](https://github.com/cline/cline/pull/10297) **[Aikido] Fix 21 security issues in axios, node-forge, basic-ftp and 6 more** — _by @aikido-autofix[bot], closed 2026-04-17T22:48:58Z_
- [#10272](https://github.com/cline/cline/pull/10272) **[Aikido] Fix 3 security issues in axios, follow-redirects** — _by @aikido-autofix[bot], closed 2026-04-17T22:48:36Z_
- [#10298](https://github.com/cline/cline/pull/10298) **chore(deps): bump the npm_and_yarn group across 5 directories with 13 updates** — _by @dependabot[bot], closed 2026-04-17T15:55:29Z_
- [#10228](https://github.com/cline/cline/pull/10228) **chore(deps): bump axios from 1.13.6 to 1.15.0** — _by @dependabot[bot], closed 2026-04-17T15:53:53Z_
- [#10229](https://github.com/cline/cline/pull/10229) **chore(deps): bump the npm_and_yarn group across 4 directories with 10 updates** — _by @dependabot[bot], closed 2026-04-17T05:21:15Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`10af243`](https://github.com/cline/cline/commit/10af2439be8a700efdf3fa498bff834f84833812) docs: add prompt storage schema and OpenTelemetry events reference (#10195) — _@jl-codes_
- [`9a8fbf9`](https://github.com/cline/cline/commit/9a8fbf9852fd82ad62b1517a56445a8bdbc6b271) docs: update Anthropic docs for Claude Opus 4.7 release (#10295) — _@jl-codes_
- [`c5657a1`](https://github.com/cline/cline/commit/c5657a14bbfdfea12c7cbcbce77811ab785b984d) chore: update axios to 1.15.0 across all packages (#10271) — _@TheRealSpencer_
- [`955ae8d`](https://github.com/cline/cline/commit/955ae8df7a4d3827695f1fdcc069f1628d4e9f3a) feat: wire up remote globalSkills with enterprise UI and architectural fixes [ENG-1774] (#10283) — _@robinnewhouse_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
