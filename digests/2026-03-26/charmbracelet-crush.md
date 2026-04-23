# charmbracelet/crush — 2026-03-26

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-03-25T23:59:59.000Z → 2026-03-26T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline change is a UX upgrade: the prompt input field now grows dynamically up to 15 rows as you type ([#2468](https://github.com/charmbracelet/crush/pull/2468), commit `a81a652`), depending on a companion change in `charmbracelet/bubbles#910`. If you only read one thing today, read this PR — it visibly changes how the TUI feels.

The other notable merge fixes a real correctness bug that broke conversations after Esc-cancellation of a tool call: the assistant `tool_calls` message was being left in history with no matching tool response, causing 400s from providers on the next turn. The fix in [#2492](https://github.com/charmbracelet/crush/pull/2492) switches to the parent `ctx` (rather than the cancelled request `genCtx`) when persisting tool tracking and results, so cancellation still produces a coherent transcript. Worth a look if you've been seeing flaky errors after pressing Esc twice.

Two smaller fixes round out the day's merges: [#2491](https://github.com/charmbracelet/crush/pull/2491) corrects an invalid `"finish"` key binding name to `"enter"` in the OAuth success dialog (the previous binding silently didn't work), and [#2497](https://github.com/charmbracelet/crush/pull/2497) tunes the session-title prompt to address a language-detection issue (closes #2495).

On the open-PR front, there's meaningful LSP work in flight from `iceymoss`. [#2493](https://github.com/charmbracelet/crush/pull/2493) refactors `internal/lsp/manager.go` to use `singleflight` so concurrent startup requests for the same server name coalesce instead of racing and creating throwaway clients. [#2498](https://github.com/charmbracelet/crush/pull/2498) is a related reliability fix: it scopes the "LSP unavailable" cache per-`Manager` rather than as a process-global, and adds a 30s retry backoff so a transient `LookPath` miss no longer permanently blocks a server for the lifetime of the process. Together these are worth tracking if you depend on LSP integrations.

Also still open: [#2476](https://github.com/charmbracelet/crush/pull/2476) re-adds file-secret support to MCP config via a new `env_files` field, replacing the awkward `$(echo $VAR)` shell-expansion pattern for tools like sops/systemd-creds/Docker secrets (closes #2334).

No releases or new issues in the window.

## Releases

_None in window._


## Merged PRs

- [#2468](https://github.com/charmbracelet/crush/pull/2468) **feat(ui): variable height prompt input field** — _by @meowgorithm, merged 2026-03-26T19:24:05Z_
- [#2492](https://github.com/charmbracelet/crush/pull/2492) **fix: append error tool message when tool call is cancelled** — _by @fuleinist, merged 2026-03-26T14:01:43Z_
- [#2491](https://github.com/charmbracelet/crush/pull/2491) **fix(dialog): use valid key binding name for OAuth success state** — _by @huaiyuWangh, merged 2026-03-26T13:43:45Z_
- [#2497](https://github.com/charmbracelet/crush/pull/2497) **fix: enhance session title prompt to fix language issue** — _by @andreynering, merged 2026-03-26T13:41:08Z_
- [#2483](https://github.com/charmbracelet/crush/pull/2483) **fix(tui): complete file picker dialog action** — _by @huaiyuWangh, merged 2026-03-25T14:09:23Z_


## Open PRs (new or updated)

- [#2498](https://github.com/charmbracelet/crush/pull/2498) **fix(lsp): replace sticky unavailable cache with retry backoff** — _by @iceymoss, updated 2026-03-26T14:20:25Z_
- [#2476](https://github.com/charmbracelet/crush/pull/2476) **Fix: mcp config: readd support for file secrets** — _by @malikwirin, updated 2026-03-26T14:27:29Z_
- [#2493](https://github.com/charmbracelet/crush/pull/2493) **refactor(lsp): coalesce concurrent server startup in manager** — _by @iceymoss, updated 2026-03-26T13:34:19Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`a81a652`](https://github.com/charmbracelet/crush/commit/a81a652178eb25dde56fc5caecc9a8ebeabd13ba) feat(ui): variable height prompt input field (#2468) — _@meowgorithm_
- [`2928dcb`](https://github.com/charmbracelet/crush/commit/2928dcb2e81dd68919b5fde3b1abd2ca4172c8c8) fix: append error tool message when tool call is cancelled (#2492) — _@fuleinist_
- [`4a3df1e`](https://github.com/charmbracelet/crush/commit/4a3df1ec90eb9536e74b54d292d75a1442e4e58e) fix(dialog): use valid key binding name for OAuth success state (#2491) — _@huaiyuWangh_
- [`dd7b58d`](https://github.com/charmbracelet/crush/commit/dd7b58df1b8037146f4aa8d33e09b711ef777196) fix: enhance session title prompt to fix language issue (#2497) — _@andreynering_
- [`71ddb7a`](https://github.com/charmbracelet/crush/commit/71ddb7aa52acbce7e30604ca8d238b538cd026d3) chore(legal): @iceymoss has signed the CLA — _@charmcli_
- [`0525f01`](https://github.com/charmbracelet/crush/commit/0525f016a5b5188818bd148bde6aaa9bc6106cba) chore(legal): @fuleinist has signed the CLA — _@charmcli_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
