# charmbracelet/crush — 2026-03-19

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-03-18T23:59:59.000Z → 2026-03-19T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

# Crush v0.51.0 lands Docker MCP integration, followed by v0.51.1 patch

The headline today is **v0.51.0**, which ships a native integration with the [Docker MCP Catalog](https://hub.docker.com/mcp) — a long-running effort that finally merged via #2026 (open since late January, by @kujtimiihoxha, co-authored with @andreynering and @meowgorithm). If you only read one thing, read the v0.51.0 release notes and #2026 to understand the new MCP discovery/enable flow.

A same-day follow-up release, **v0.51.1**, patches a regression in the Avian provider via #2438, which bumps Fantasy to fix SSE event handling in some OpenAI-compatible providers. As a bonus, OpenRouter now sends Crush's official `User-Agent`. This closes issue #2431.

The Docker MCP work also got polish in #2434 from @meowgorithm, with two behavior-relevant fixes worth knowing about:
- Config is no longer written until the MCP is successfully enabled (commit 351e562), avoiding stale/broken entries on failed startup.
- The Docker availability check now runs asynchronously so it doesn't block the UI (commit 6003105).

Additional MCP hardening landed in commits df094bd (handle raw/whitespace base64) and 6c61cae (stable sort of MCP parameters in the UI).

On the CLI/UX side, two quality-of-life PRs from @andreynering merged:
- #2422 extends `--session` and `--continue` to the TUI (previously `crush run` only), letting you jump straight into a given or most-recent session.
- #2424 adds short aliases `crush r` → `run` and `crush s` → `session`.

Still open: #2436 from @Gustave-241021 proposes a "terminal mode" for direct shell execution, reopening the earlier #1745. It's labeled `area: shell` and has not yet had maintainer review beyond the contributing checklist; worth watching but not urgent.

No new issues were filed in the window. Net: a significant feature release plus a quick stability follow-up — upgrading to v0.51.1 directly is the safe path.

## Releases

- **[v0.51.1](https://github.com/charmbracelet/crush/releases/tag/v0.51.1)** — v0.51.1 _by @github-actions[bot] at 2026-03-19T20:53:52Z_
  > # Mini Avian fix
  > 
  > Hi! This is a tiny patch to fix the Avian provider. Fly, Robin, fly!
  > 
  > xx, Charm 💘 
  > 
  > ## Changelog
  > ### Fixed
  > * ad5368f1d3192e12bca20cecfc0b46b688c294cb: fix: update fantasy with a fix for avian (#2438) (@andreynering)
  > * df094bdeca6717cb36c127fddda69a041b4e38f1: fix(mcp): handle raw/whitespace base64 (@meowgorithm)
  > * 351e5620f7c63cec6c2d2b42ce4b5e17031f6423: fix(mcp/docker): only write config after docker startup succeeds (@meowgorithm)
  > * 600310508e2b00a933454e3afcea33cd5eda3054:…
- **[v0.51.0](https://github.com/charmbracelet/crush/releases/tag/v0.51.0)** — v0.51.0 _by @github-actions[bot] at 2026-03-19T17:56:04Z_
  > # Crush + Docker MCP :whale:
  > 
  > We teamed up with [Docker](https://www.docker.com/) to natively integrate the [Docker MCP Catalog](https://hub.docker.com/mcp) into Crush and—if we do say so ourselves—it rocks!
  > 
  > There are also some CLI improvements and bug fixes in this release, too. Let’s get to it!
  > 
  > ## One MCP to Rule Them All
  > 
  > <p><img width="300" alt="image" src="https://github.com/user-attachments/assets/b6bb6fdd-e7c6-48aa-8a03-8971c08796c8" /></p>
  > 
  > As we were saying, the big feature in this re…


## Merged PRs

- [#2434](https://github.com/charmbracelet/crush/pull/2434) **fix(mcp/docker): odds and ends** — _by @meowgorithm, merged 2026-03-19T20:41:17Z_
- [#2438](https://github.com/charmbracelet/crush/pull/2438) **fix: update fantasy with a fix for avian** — _by @andreynering, merged 2026-03-19T19:08:46Z_
- [#2026](https://github.com/charmbracelet/crush/pull/2026) **feat: docker mcp integration** — _by @kujtimiihoxha, merged 2026-03-19T14:59:19Z_
- [#2424](https://github.com/charmbracelet/crush/pull/2424) **feat: add aliases: `crush r` -> `crush run`, `crush s` -> `crush session`** — _by @andreynering, merged 2026-03-19T14:07:17Z_
- [#2422](https://github.com/charmbracelet/crush/pull/2422) **feat: add support for `--session` and `--continue` for the tui** — _by @andreynering, merged 2026-03-19T14:06:14Z_


## Open PRs (new or updated)

- [#2436](https://github.com/charmbracelet/crush/pull/2436) **feat: implement terminal mode for direct shell execution** — _by @Gustave-241021, updated 2026-03-19T16:44:32Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`c7ce471`](https://github.com/charmbracelet/crush/commit/c7ce471bb38e53d63d2e73824a7a75d7eb697d8e) v0.51.1 — _@andreynering_
- [`7e29c85`](https://github.com/charmbracelet/crush/commit/7e29c8578f9fa60aeb3bfe67142efcb292726da4) chore: gofumpt — _@andreynering_
- [`12dfcdf`](https://github.com/charmbracelet/crush/commit/12dfcdf25aae3b204247b8912461dfe7e44e10ef) docs(mcp/docker): comments — _@meowgorithm_
- [`6003105`](https://github.com/charmbracelet/crush/commit/600310508e2b00a933454e3afcea33cd5eda3054) fix(ui/docker): don't block ui when checking for docker desktop — _@meowgorithm_
- [`351e562`](https://github.com/charmbracelet/crush/commit/351e5620f7c63cec6c2d2b42ce4b5e17031f6423) fix(mcp/docker): only write config after docker startup succeeds — _@meowgorithm_
- [`6c61cae`](https://github.com/charmbracelet/crush/commit/6c61cae0003a32efbce087116af67ad65c7c2a8c) fix(ui/docker): stable sort mcp parameters — _@meowgorithm_
- [`f6e7a43`](https://github.com/charmbracelet/crush/commit/f6e7a43a81b342bae6c7ed4d8f3c72087bc9de4c) fix(mcp/docker): harden tests — _@meowgorithm_
- [`df094bd`](https://github.com/charmbracelet/crush/commit/df094bdeca6717cb36c127fddda69a041b4e38f1) fix(mcp): handle raw/whitespace base64 — _@meowgorithm_
- [`00cefc9`](https://github.com/charmbracelet/crush/commit/00cefc951a10423db00c1285adccaf124279ca61) fix: remove deadcode — _@meowgorithm_
- [`ad5368f`](https://github.com/charmbracelet/crush/commit/ad5368f1d3192e12bca20cecfc0b46b688c294cb) fix: update fantasy with a fix for avian (#2438) — _@andreynering_
- [`562d6f3`](https://github.com/charmbracelet/crush/commit/562d6f34210e57c884b4e9a3aa63c0fbea8bd5d0) v0.51.0 — _@andreynering_
- [`a3288de`](https://github.com/charmbracelet/crush/commit/a3288de0d2a6b70aab1c1caa238f307a401b259f) chore: auto-update files — _@charmcli_
- [`e0dcaba`](https://github.com/charmbracelet/crush/commit/e0dcaba820b1a5f391fad9b89590e8c8932b6404) feat: docker mcp integration (#2026) — _@kujtimiihoxha_
- [`ddd99cd`](https://github.com/charmbracelet/crush/commit/ddd99cd2f650adfa9dc9ec961365266d8512c4a0) feat: add aliases: `crush r` -> `crush run`, `crush s` -> `crush session` (#2424) — _@andreynering_
- [`630ff8c`](https://github.com/charmbracelet/crush/commit/630ff8c5dfeaabc96b8f05917d28455ad7e1075e) feat: add support for `--session` and `--continue` for the tui (#2422) — _@andreynering_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
