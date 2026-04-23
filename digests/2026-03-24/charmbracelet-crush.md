# charmbracelet/crush — 2026-03-24

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-03-23T23:59:59.000Z → 2026-03-24T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## Crush — 2026-03-24

The day's headline is the **v0.51.3 patch release**, a small bug-fix drop that improves detection of long pasted content (single-line blobs like un-indented JSON are now attached as files, not just 3+ line pastes) and limits fetched web-page size so big pages don't blow out the model's context window.

The most interesting open work is a **security-oriented contribution** to move credentials out of plaintext config. PR [#2480](https://github.com/charmbracelet/crush/pull/2480) (replacing the quickly-closed [#2479](https://github.com/charmbracelet/crush/pull/2479), which closes issue #2477) introduces a `KeyringStore` abstraction backed by `zalando/go-keyring`, storing API keys and OAuth tokens in the OS-native keychain (macOS Keychain, Windows Credential Manager, Linux Secret Service). Existing plaintext keys in `~/.local/share/crush/crush.json` are auto-migrated on first load, and env-var references like `$OPENAI_API_KEY` are left intact. Worth a close review given the blast radius on user config.

Also notable on the open side:

- [#2475](https://github.com/charmbracelet/crush/pull/2475) makes the bash tool's blocked-command list configurable via a new `tools.bash.allowed_commands` opt-in, while tightening safe-command detection so wrapper commands and unsafe `git` forms still trigger permission prompts. Tests and agent cassettes are refreshed.
- [#1769](https://github.com/charmbracelet/crush/pull/1769) (still draft) saw activity — running Crush as an Agent Client Protocol server.

Merged: [#2469](https://github.com/charmbracelet/crush/pull/2469) by maintainer meowgorithm, a grab-bag of small testing-driven improvements. On the docs side, [#2454](https://github.com/charmbracelet/crush/pull/2454) (Novita AI as a custom-provider example) was closed without merge on the 23rd but had trailing activity today.

Direct commits on `main` are mostly maintenance: a log fix that stops conflating body-drain errors with HTTP errors ([ffc7a9d](https://github.com/charmbracelet/crush/commit/ffc7a9d261421de4031b386da030b696e88aa95d)), a db-package interface modernization ([6920cf1](https://github.com/charmbracelet/crush/commit/6920cf1174e9f33b82e5f4a2ac2f93eba6b6ce1c)), a CLA-workflow revert ([e7b57ef](https://github.com/charmbracelet/crush/commit/e7b57efc1e900c4d2875727620bbefef53decb34)), and the version bump ([ec48103](https://github.com/charmbracelet/crush/commit/ec481031c6c1b1e09540d14d460673124d536f67)). No new issues were filed.

## Releases

- **[v0.51.3](https://github.com/charmbracelet/crush/releases/tag/v0.51.3)** — v0.51.3 _by @github-actions[bot] at 2026-03-24T20:25:19Z_
  > # Little patch
  > 
  > A couple small bugs were fixed in this release.
  > 
  > ## Long pasted content
  > 
  > We improved the detection of long text pasted into the prompt. Crush will add the content as a file attachment if the content is 3+ lines long, but that wasn't accounting for long single line texts (like a big un-indented JSON). This is now addressed.
  > 
  > ## Fetching big web pages
  > 
  > The model tried to fetch a web page that is long enough, it could not have enough context window to handle all that. We reduced the…


## Merged PRs

- [#2469](https://github.com/charmbracelet/crush/pull/2469) **chore: minor things** — _by @meowgorithm, merged 2026-03-24T20:21:54Z_


## Open PRs (new or updated)

- [#2480](https://github.com/charmbracelet/crush/pull/2480) **feat(config): store API keys in OS keychain instead of plaintext** — _by @officialasishkumar, updated 2026-03-24T21:56:00Z_
- [#1769](https://github.com/charmbracelet/crush/pull/1769) _(draft)_ **feat: run Crush as an ACP server** — _by @Amolith, updated 2026-03-24T21:04:24Z_
- [#2475](https://github.com/charmbracelet/crush/pull/2475) **feat: make bash blocked commands configurable** — _by @UnderLotus, updated 2026-03-24T14:30:57Z_


## Closed PRs (not merged)

- [#2479](https://github.com/charmbracelet/crush/pull/2479) **feat(config): store API keys in OS keychain instead of plaintext** — _by @officialasishkumar, closed 2026-03-24T21:08:58Z_
- [#2454](https://github.com/charmbracelet/crush/pull/2454) **docs: add Novita AI as a custom provider example** — _by @Alex-wuhu, closed 2026-03-23T20:50:09Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`ffc7a9d`](https://github.com/charmbracelet/crush/commit/ffc7a9d261421de4031b386da030b696e88aa95d) fix(log): don't conflate body drain errors with HTTP errors — _@meowgorithm_
- [`6920cf1`](https://github.com/charmbracelet/crush/commit/6920cf1174e9f33b82e5f4a2ac2f93eba6b6ce1c) chore(lint): modernize interfaces in the db package — _@meowgorithm_
- [`ec48103`](https://github.com/charmbracelet/crush/commit/ec481031c6c1b1e09540d14d460673124d536f67) v0.51.3 — _@andreynering_
- [`e7b57ef`](https://github.com/charmbracelet/crush/commit/e7b57efc1e900c4d2875727620bbefef53decb34) ci(cla): revert commit title change — _@andreynering_
- [`f9cb29f`](https://github.com/charmbracelet/crush/commit/f9cb29fd3c472e0662721184721d3fa78e0bc18e) chore(legal): @malikwirin has signed the CLA in $pullRequestNo — _@charmcli_
- [`ec45e15`](https://github.com/charmbracelet/crush/commit/ec45e15f33a86350be7df66fd68b70451a05ddb6) chore(legal): @UnderLotus has signed the CLA in $pullRequestNo — _@charmcli_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
