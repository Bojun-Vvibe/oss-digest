# charmbracelet/crush — 2026-03-04

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-03-03T23:59:59.000Z → 2026-03-04T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## Crush v0.47.0 ships with community contributions

The headline today is the **v0.47.0 release**, a "community patch" featuring two notable contributions: a new `wait: true` parameter on the `job_output` tool (by @portertech) so the model can block on background jobs instead of polling and burning tokens, and an LSP connection fix from @taigrr. Worth a read if you rely on background commands or LSP-heavy workflows.

The LSP fix landed today as #2349, falling back to `Kill()` on timeout to prevent hung LSP processes; full benefit requires an upstream `charmbracelet/x` PR (#791) but it's already useful standalone. Paired with a `powernap` bump to v0.1.2 (commit aa0997b).

A second LSP correctness fix went in just after the release: #2325 from @meowgorithm fixes LSP edits misbehaving on non-ASCII characters (CJK), with the bulk of the fix landing upstream in `powernap`. This closes issue #2313 and is the most user-visible bug fix of the day for international users.

On the infra/provider side, @andreynering shipped three quick maintenance PRs: golangci-lint bumped to v2.10 with new lint issues fixed (#2355), a `hyper` provider update (#2354), and a labeler config addition for hyper (commit 5b2e5be), plus a catwalk update (commit 6d89de6).

One notable rejection: #2348 from @bittoby, which proposed a `LanguageModel` wrapper to detect tool calls embedded as plain-text JSON from Ollama's OpenAI-compatible endpoint (where local models stuff tool-call JSON into the content field instead of `tool_calls`), was closed unmerged. Worth skimming if you're running local models through openai-compat — the problem description is solid even if the fix didn't land here.

Two open PRs continue to wait on review: #2043 (allowed_commands config + `-a/--allowed` CLI flag for whitelisting otherwise-blocked bash commands) and #2337 ("Muse mode" proactive thinking, submitted directly without a prior maintainer discussion — likely needs to move to Discussions first). No new issues filed.

## Releases

- **[v0.47.0](https://github.com/charmbracelet/crush/releases/tag/v0.47.0)** — v0.47.0 _by @github-actions[bot] at 2026-03-04T14:49:43Z_
  > # Community patch
  > 
  > We're shipping a small release with two nice contributions from the community.
  > 
  > ## Better background jobs
  > 
  > @portertech implemented a new `wait: true` optional parameter on the `job_output` tool. This means that the model can now ask Crush to wait for a background job command to finish before returning its output. This is important to prevent polling, which would also consume more tokens than needed.
  > 
  > ## LSP connection fix
  > 
  > @taigrr worked on a patch to ensure that LSP connectio…


## Merged PRs

- [#2325](https://github.com/charmbracelet/crush/pull/2325) **fix(lsp/edit): properly handle non-ascii chars (e.g. CJK)** — _by @meowgorithm, merged 2026-03-04T22:09:02Z_
- [#2355](https://github.com/charmbracelet/crush/pull/2355) **ci: update golangci-lint to v2.10 and fix new issues** — _by @andreynering, merged 2026-03-04T21:33:13Z_
- [#2354](https://github.com/charmbracelet/crush/pull/2354) **chore: update hyper** — _by @andreynering, merged 2026-03-04T19:22:44Z_
- [#2349](https://github.com/charmbracelet/crush/pull/2349) **bugfix(lsp): fallback to Kill() on timeout** — _by @taigrr, merged 2026-03-04T08:07:46Z_


## Open PRs (new or updated)

- [#2043](https://github.com/charmbracelet/crush/pull/2043) **feat: add allowed_commands configuration with CLI support** — _by @liannnix, updated 2026-03-04T22:03:22Z_
- [#2337](https://github.com/charmbracelet/crush/pull/2337) **Feat/Muse mode — Proactive "Bestie" Thinking** — _by @vmfu, updated 2026-03-04T05:11:44Z_


## Closed PRs (not merged)

- [#2348](https://github.com/charmbracelet/crush/pull/2348) **feat(agent): add toolcall detection wrapper for openai-compat provide…** — _by @bittoby, closed 2026-03-04T14:19:54Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`fae0f2e`](https://github.com/charmbracelet/crush/commit/fae0f2e82da57a0e0335d86b417a819121f4e69f) fix(lsp/edit): properly handle non-ascii chars (e.g. CJK) (#2325) — _@meowgorithm_
- [`8a9000b`](https://github.com/charmbracelet/crush/commit/8a9000b6bd23f0451f953282c5c59a91add8c0c8) ci: update golangci-lint to v2.10 and fix new issues (#2355) — _@andreynering_
- [`ae1bac3`](https://github.com/charmbracelet/crush/commit/ae1bac33d20768c95327120fd7d11eaf4dd29f73) chore: update hyper (#2354) — _@andreynering_
- [`5b2e5be`](https://github.com/charmbracelet/crush/commit/5b2e5befe670517b951efe4735c7159fcb92126a) ci: add hyper to labeler — _@andreynering_
- [`8bcca78`](https://github.com/charmbracelet/crush/commit/8bcca78520e5dd082bdf254a4a915a1505bc5c29) v0.47.0 — _@andreynering_
- [`6d89de6`](https://github.com/charmbracelet/crush/commit/6d89de6320761c6eb8791cd7e87c3812a6ee5ce0) chore: update catwalk — _@andreynering_
- [`56d79d1`](https://github.com/charmbracelet/crush/commit/56d79d108ee5036224ef13155871457425c7729e) fix(lsp): fallback to Kill() on timeout (#2349) — _@taigrr_
- [`aa0997b`](https://github.com/charmbracelet/crush/commit/aa0997b31590d4ac61221f6d6f35eef2de50628f) chore: bump powernap to v0.1.2 — _@aymanbagabas_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
