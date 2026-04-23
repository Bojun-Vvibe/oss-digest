# cline/cline — 2026-03-11

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-03-10T23:59:59.000Z → 2026-03-11T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is CLI ergonomics work from maintainer `saoudrizwan`: `feat(cli): add mcp add shortcuts for stdio/http servers` (#9773) gives users first-class `cline mcp add` commands instead of hand-editing `cline_mcp_settings.json`, and explicitly guards against the common mistake of passing a URL without `--type http` (which previously produced a silently broken stdio config). Paired with it, #9763 adds `cline kanban` / `cline --kanban` aliases that shell out to `npx kanban --agent cline`, with Windows-aware `npx.cmd` handling and short-circuit behavior when a prompt is passed.

On the prompt/provider correctness side, #9764 (`fix(prompt): resolve native tool placeholder interpolation`) is worth a look: native tool schema descriptions were leaking raw `{{CWD}}` and `{{MULTI_ROOT_HINT}}` markers into provider payloads (including Vertex Gemini 3). The fix resolves them at schema-construction time and shares a multi-root hint constant — a follow-up to feedback on #9738.

Documentation got a refresh via #9772, updating the `jupyter-explain-improve-cell.gif` and `jupyter-generate-cell.gif` assets that accompany the large Jupyter Notebook support feature (#8053) merged earlier in the cycle.

Notable closures without merge: the Aikido autofix PR #9761, which proposed bumping `hono`, `@aws-sdk/xml-builder`, `simple-git` and others to resolve 17 CVEs (2 critical, including authorization bypass in Hono and RCE in Git operations), was closed unmerged after one day — worth tracking whether these CVEs get addressed via another path. Dependabot's `dompurify` 3.2.7 → 3.3.2 bump (#9703) was also closed without merge. Two duplicate Copilot-authored draft PRs (#9733, #9734) attempting to catch errors in `ListFiles`/`SearchFiles`/`ListCodeDefinitionNames` handlers (same class as #9730's `ReadFileToolHandler` crash) were closed as drafts — the underlying CLI-crash-on-bad-path bug may still be open.

Still open and worth watching: #9744 (cache_creation_input_tokens misreporting across cline/openrouter/vercel-ai-gateway providers) and #9769 (Hicap model-list fetching in CLI). No releases or new issues in the window.

## Releases

_None in window._


## Merged PRs

- [#8053](https://github.com/cline/cline/pull/8053) **Jupyter Notebook Enhancements** — _by @tekulam, merged 2026-01-20T04:18:39Z_
- [#9773](https://github.com/cline/cline/pull/9773) **feat(cli): add mcp add shortcuts for stdio/http servers** — _by @saoudrizwan, merged 2026-03-11T23:17:43Z_
- [#9772](https://github.com/cline/cline/pull/9772) **Update Jupyter Notebook gifs** — _by @ajjuaire, merged 2026-03-11T23:25:46Z_
- [#9764](https://github.com/cline/cline/pull/9764) **fix(prompt): resolve native tool placeholder interpolation** — _by @arafatkatze, merged 2026-03-11T15:10:59Z_
- [#9763](https://github.com/cline/cline/pull/9763) **feat(cli): add kanban command aliases** — _by @saoudrizwan, merged 2026-03-11T04:57:16Z_


## Open PRs (new or updated)

- [#9769](https://github.com/cline/cline/pull/9769) **improve: fetch models list for hicap in CLI, update endpoint to fetch models list** — _by @MarcoChavez1940, updated 2026-03-11T17:26:37Z_
- [#9744](https://github.com/cline/cline/pull/9744) _(draft)_ **fix: read cache_creation_input_tokens for cache write tokens in providers** — _by @alex-lum, updated 2026-03-11T16:48:11Z_
- [#9250](https://github.com/cline/cline/pull/9250) **Revert "Finish adding Amazon Bedrock to `isNexGenModelProvider()` list [CLINE-1291]"** — _by @candieduniverse, updated 2026-03-11T15:35:20Z_


## Closed PRs (not merged)

- [#9761](https://github.com/cline/cline/pull/9761) **[Aikido] Fix 17 security issues in hono, @aws-sdk/xml-builder, simple-git and 7 more** — _by @aikido-autofix[bot], closed 2026-03-11T23:34:46Z_
- [#9703](https://github.com/cline/cline/pull/9703) **chore(deps): bump dompurify from 3.2.7 to 3.3.2 in /webview-ui** — _by @dependabot[bot], closed 2026-03-11T20:46:55Z_
- [#9734](https://github.com/cline/cline/pull/9734) **fix: catch errors in path-based tool handlers instead of crashing** — _by @Copilot, closed 2026-03-11T03:31:47Z_
- [#9733](https://github.com/cline/cline/pull/9733) **fix: catch errors in path-based tool handlers instead of crashing** — _by @Copilot, closed 2026-03-11T03:29:18Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`44cbfe9`](https://github.com/cline/cline/commit/44cbfe9d9c9e889996af48dca0b3bb4f67fac76a) Update Jupyter Notebook gifs (#9772) — _@ajjuaire_
- [`4ecccf5`](https://github.com/cline/cline/commit/4ecccf51053ff435e26eee7c254d41bd3c307977) feat(cli): add mcp add shortcuts for stdio and http servers (#9773) — _@saoudrizwan_
- [`6d29bc6`](https://github.com/cline/cline/commit/6d29bc6551ba9af46939c610172ad797743bd0db) fix(prompt): resolve native tool placeholder interpolation (#9764) — _@arafatkatze_
- [`8200573`](https://github.com/cline/cline/commit/820057308a5dd65daa7ba370f5dcd2771744aead) feat(cli): add kanban alias command (#9763) — _@saoudrizwan_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
