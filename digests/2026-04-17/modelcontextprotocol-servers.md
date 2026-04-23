# modelcontextprotocol/servers — 2026-04-17

> Reference MCP server implementations; canonical examples for the protocol.

**Window:** 2026-04-16T23:59:59.000Z → 2026-04-17T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Maintainer @cliffhall did a documentation cleanup pass on the reference servers, merging six docs PRs in a ~15-minute window late on 2026-04-17. No releases shipped and no new issues were filed; all activity is docs or small fixes.

The most consequential merge is a new root **`CLAUDE.md`** plus an `AGENTS.md` typo fix ([#3733](https://github.com/modelcontextprotocol/servers/pull/3733)), which formalizes monorepo guidance (7 servers, 4 TS + 3 Python, build/test/lint commands, code style) for Claude Code — useful context for anyone contributing or running the existing `claude.yml` workflow against this repo. Alongside it, [#3659](https://github.com/modelcontextprotocol/servers/pull/3659) adds Windows `npx` wrapper examples to the getting-started docs and to per-server READMEs that show stdio configs (closes #3460), and [#3877](https://github.com/modelcontextprotocol/servers/pull/3877) expands the `sequentialthinking` README with concrete usage prompts and verification steps (fixes #3132). Smaller polish: a VS Code typo fix ([#3693](https://github.com/modelcontextprotocol/servers/pull/3693)) and two Docker-note formatting fixes ([#3694](https://github.com/modelcontextprotocol/servers/pull/3694), [#3695](https://github.com/modelcontextprotocol/servers/pull/3695)). Merge commits: 4503e2d, 7e6b780, c3448d7, 74cdb4d, 756db5b, bb0a189.

A batch of "add my server to the README" PRs was closed without merging, consistent with the repo's standing policy to redirect submissions to the MCP Server Registry: AgentBase ([#3956](https://github.com/modelcontextprotocol/servers/pull/3956)), Ens MCP ([#3962](https://github.com/modelcontextprotocol/servers/pull/3962)), ToolRoute ([#3963](https://github.com/modelcontextprotocol/servers/pull/3963)), ChainMemory ([#3968](https://github.com/modelcontextprotocol/servers/pull/3968)), plus a Windows filesystem setup doc ([#3087](https://github.com/modelcontextprotocol/servers/pull/3087)) and a memory cognitive-extension doc ([#3813](https://github.com/modelcontextprotocol/servers/pull/3813)).

Worth tracking among the new open PRs:

- [#3970](https://github.com/modelcontextprotocol/servers/pull/3970) (filesystem) — makes CLI-provided allowed directories take precedence over MCP roots, with roots as fallback. This is a behavior change for clients implementing the roots protocol that previously had their roots silently override explicit CLI config.
- [#3969](https://github.com/modelcontextprotocol/servers/pull/3969) — fixes `scripts/release.py` `has_changes()` skipping version bumps when only lockfiles (e.g. dependabot `uv.lock`) changed, and adds unit tests. Relevant if you depend on CalVer bumps reflecting dependency updates.
- [#3804](https://github.com/modelcontextprotocol/servers/pull/3804) documents a WSL2 stdio JSON-parse failure caused by `npx` writing to stdout, with two workarounds.

## Releases

_None in window._


## Merged PRs

- [#3659](https://github.com/modelcontextprotocol/servers/pull/3659) **docs: add Windows npx wrapper examples** — _by @ShionEria, merged 2026-04-17T22:59:54Z_
- [#3693](https://github.com/modelcontextprotocol/servers/pull/3693) **Fix typo in usage instructions for VS Code** — _by @nipunnegi2, merged 2026-04-17T22:57:30Z_
- [#3694](https://github.com/modelcontextprotocol/servers/pull/3694) **Fix formatting in README for Docker usage note** — _by @nipunnegi2, merged 2026-04-17T22:57:07Z_
- [#3695](https://github.com/modelcontextprotocol/servers/pull/3695) **Fix formatting in README for docker usage note** — _by @nipunnegi2, merged 2026-04-17T22:56:41Z_
- [#3733](https://github.com/modelcontextprotocol/servers/pull/3733) **docs: add root CLAUDE.md and fix AGENTS.md typo** — _by @Zandereins, merged 2026-04-17T22:50:58Z_
- [#3877](https://github.com/modelcontextprotocol/servers/pull/3877) **docs: clarify sequentialthinking usage and add examples** — _by @Chelebii, merged 2026-04-17T22:44:10Z_


## Open PRs (new or updated)

- [#3112](https://github.com/modelcontextprotocol/servers/pull/3112) **docs: standardize installation instructions** — _by @sudoingX, updated 2026-04-17T23:33:17Z_
- [#3804](https://github.com/modelcontextprotocol/servers/pull/3804) **docs(memory): add WSL2 troubleshooting for npx stdout JSON parse errors** — _by @ssam18, updated 2026-04-17T22:55:56Z_
- [#3970](https://github.com/modelcontextprotocol/servers/pull/3970) **fix(filesystem): preserve CLI directories when MCP roots are available** — _by @Christian-Sidak, updated 2026-04-17T05:01:24Z_
- [#3969](https://github.com/modelcontextprotocol/servers/pull/3969) **Fix release script skipping version bump for lockfile-only changes** — _by @Christian-Sidak, updated 2026-04-17T04:39:29Z_


## Closed PRs (not merged)

- [#3087](https://github.com/modelcontextprotocol/servers/pull/3087) **Document setup for Filesystem MCP Server on Windows** — _by @bobmcgurk, closed 2026-04-17T23:28:56Z_
- [#3813](https://github.com/modelcontextprotocol/servers/pull/3813) **docs(memory): add cognitive memory extension pattern** — _by @haroldfabla2-hue, closed 2026-04-17T22:51:53Z_
- [#3956](https://github.com/modelcontextprotocol/servers/pull/3956) **Add AgentBase to community resources** — _by @revmischa, closed 2026-04-17T22:33:25Z_
- [#3962](https://github.com/modelcontextprotocol/servers/pull/3962) **feat: add Ens MCP** — _by @junct-bot, closed 2026-04-17T22:33:23Z_
- [#3963](https://github.com/modelcontextprotocol/servers/pull/3963) **Add ToolRoute: MCP gateway with 87 curated tools** — _by @Instabidsai, closed 2026-04-17T22:33:21Z_
- [#3968](https://github.com/modelcontextprotocol/servers/pull/3968) **Add ChainMemory - Permanent blockchain memory for AI agents** — _by @chaelynet, closed 2026-04-17T22:33:18Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`4503e2d`](https://github.com/modelcontextprotocol/servers/commit/4503e2d12b799448cd05f789dd40f9643a8d1a6c) Merge pull request #3659 from ShionEria/fix/issue-3460-windows-npx-docs — _@cliffhall_
- [`7e6b780`](https://github.com/modelcontextprotocol/servers/commit/7e6b7807af8fbffc80c826cadffa30ea672a6120) Merge pull request #3693 from nipunnegi2/patch-2 — _@cliffhall_
- [`c3448d7`](https://github.com/modelcontextprotocol/servers/commit/c3448d71b56cffd20980984d047008232a4914e5) Merge pull request #3694 from nipunnegi2/patch-3 — _@cliffhall_
- [`74cdb4d`](https://github.com/modelcontextprotocol/servers/commit/74cdb4d867227832bd6bf00a936ef933cd5d2611) Merge pull request #3695 from nipunnegi2/patch-4 — _@cliffhall_
- [`756db5b`](https://github.com/modelcontextprotocol/servers/commit/756db5b42ad8c243d5a17d1ee184d1e5f25da9c0) Merge pull request #3733 from Zandereins/docs/add-claude-md — _@cliffhall_
- [`bb0a189`](https://github.com/modelcontextprotocol/servers/commit/bb0a1893e75b2817e43b9c41ac71eeb92b2b65fe) Merge pull request #3877 from Chelebii/docs-3132-sequentialthinking-usage — _@cliffhall_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
