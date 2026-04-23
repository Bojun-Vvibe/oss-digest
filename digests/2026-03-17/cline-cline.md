# cline/cline — 2026-03-17

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-03-16T23:59:59.000Z → 2026-03-17T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is a UX addition: rotating **feature tips now appear below the "Thinking" indicator** to educate users on capabilities like Plan Mode, .clinerules, MCP servers, and checkpoints. The new `FeatureTip` component ships 12 curated tips with a 2s delayed fade-in and 8s cycling, visible throughout the reasoning phase (#9799). Worth a look if you care about onboarding or in-product education surfaces.

On the provider side, the **Oracle Code Assist (OCA)** integration gained additional fields on its Responses API path (#9852), and a pair of targeted fixes landed for local/self-hosted setups:

- `fix(litellm)`: `LiteLlmHandler.getModel()` was silently dropping `this.options.liteLlmModelInfo`, ignoring user-configured context windows in favor of cached info or sane defaults. Now respects the stored `planModeLiteLlmModelInfo`/`actModeLiteLlmModelInfo` settings — relevant for anyone overriding context size on a LiteLLM proxy (#9834, closes #9748).
- `fix(browser)`: `modelDoesntSupportWebp()` previously only excluded Grok; **GLM (4.5, 4.6V) and Devstral** vision models served via llama.cpp were hitting 400s because llama.cpp's STB image lib has no WebP support. Browser screenshots now fall back to a supported format for these models (#9837, closes #8203).

Notable open PRs to track:

- #9849 adds a "double-check completion latch" so verification rejections don't repeat indefinitely; the latch invalidates on successful `write_to_file`/`apply_patch` edits.
- #9855 fixes the CLI `--yolo`/piped plain-text mode, which was emitting only the last assistant message via `.at(-1)` and dropping earlier text segments (closes #7534).
- #9530 finally renders the Cline logo in Windows (`ToastGeneric` + `AppLogoOverride`) and Linux (`notify-send --icon`) system notifications.
- CLI continues to grow: `/mcp` (#9538) and a draft `/rules` (#9760) slash commands from shey-cline; #9538 also fixes a `toggleServerDisabledRPC` bug where enabling left servers stuck "connecting".

A Kanban launch banner PR (#9841) was opened and closed same-day without merging. No releases or new issues in the window.

## Releases

_None in window._


## Merged PRs

- [#9799](https://github.com/cline/cline/pull/9799) **feat: add feature tips tooltip during thinking state** — _by @jl-codes, merged 2026-03-17T20:51:37Z_
- [#9852](https://github.com/cline/cline/pull/9852) **Added Fields to Responses API for the Oracle Code Assist (OCA) Provider** — _by @CharlotteRStinson, merged 2026-03-17T20:41:39Z_
- [#9837](https://github.com/cline/cline/pull/9837) **fix(browser): skip WebP screenshots for GLM and Devstral models (llama.cpp STB doesn't support WebP)** — _by @ClineXDiego, merged 2026-03-17T17:57:40Z_
- [#9834](https://github.com/cline/cline/pull/9834) **fix(litellm): respect user-configured context window in getModel()** — _by @ClineXDiego, merged 2026-03-17T12:36:45Z_


## Open PRs (new or updated)

- [#9530](https://github.com/cline/cline/pull/9530) **fix: show Cline logo in system notifications on Windows and Linux** — _by @CodeForContribute, updated 2026-03-17T19:21:12Z_
- [#9855](https://github.com/cline/cline/pull/9855) **fix(cli): add line breaks between text segments in plain mode** — _by @CodeForContribute, updated 2026-03-17T19:10:03Z_
- [#9760](https://github.com/cline/cline/pull/9760) _(draft)_ **Add /rules to CLI** — _by @shey-cline, updated 2026-03-17T16:52:19Z_
- [#9538](https://github.com/cline/cline/pull/9538) **Add /mcp to CLI** — _by @shey-cline, updated 2026-03-17T16:49:29Z_
- [#9849](https://github.com/cline/cline/pull/9849) **fix(task): latch double-check completion until next edit** — _by @arafatkatze, updated 2026-03-17T13:40:11Z_


## Closed PRs (not merged)

- [#9815](https://github.com/cline/cline/pull/9815) **Update add-endpoints-to-jetbrains.sh - see the code.** — _by @saarors, closed 2026-03-17T18:09:22Z_
- [#9841](https://github.com/cline/cline/pull/9841) **feat: add Kanban launch banner** — _by @saoudrizwan, closed 2026-03-17T00:55:38Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`71e312e`](https://github.com/cline/cline/commit/71e312e92a526488e3fb002c8771d4577cd31779) feat: add feature tips tooltip during thinking state (#9799) — _@jl-codes_
- [`5903840`](https://github.com/cline/cline/commit/5903840f79b896d6f36a49266ed00b1cb555f2b2) Added Fields to Responses API for the Oracle Code Assist (OCA) Provider (#9852) — _@CharlotteRStinson_
- [`0c677b6`](https://github.com/cline/cline/commit/0c677b63dbad9a2bf4513bd6ec84cd5f6503a31e) fix(browser): skip WebP for GLM and Devstral models running through llama.cpp (#9837) — _@ClineXDiego_
- [`b741135`](https://github.com/cline/cline/commit/b741135f85c44ebb0b4ce5c06159953828208d03) fix(litellm): respect user-configured context window in getModel() (#9834) — _@ClineXDiego_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
