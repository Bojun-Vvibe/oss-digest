# cline/cline — 2026-04-09

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-04-08T23:59:59.000Z → 2026-04-09T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline change is a new in-chat **SpendLimitError UI** for org-admin spend caps (#10207, merged). Previously a `429 SPEND_LIMIT_EXCEEDED` from the Cline backend fell through to the generic "rate limit" text; now hitting an admin-set per-user cap surfaces a dedicated, actionable error component instead. This is the only merge in the window and the one to read if you operate Cline at an org level.

The more strategically interesting activity is a wave of **feature-removal PRs** opened by `candieduniverse`, signaling a deliberate trim of built-in slash commands and prompt-injected workflows:

- **#10213 — Remove the workflows feature end-to-end.** Deletes user-defined markdown-backed slash commands across runtime, autocomplete, state/storage, RPC, and remote-config sync. The author explicitly notes "We will not be releasing this," so it reads as a staging/cleanup branch but worth tracking if you rely on workflows.
- **#10211 — Remove `/reportbug`** built-in slash command and its internal `report_bug` tool/ask/RPC/UI flow, while reserving the protobuf enum slot for compatibility.
- **#10210 — Remove `/deep-planning`** built-in slash command and its dedicated prompt tree under `src/core/prompts/commands/deep-planning/`; docs are rewritten to point users to Plan mode instead.

Also opened: **#10194**, a `/lg-task` URI handler from `saoudrizwan` that lets the LG dashboard launch Cline via a spec file plus webhook config (writing `~/Documents/Cline/webhook_config.json`) rather than stuffing prompts into the URI — relevant if you're integrating external dashboards.

Housekeeping: a large batch of older PRs (#6467, #6365, #6286, #6266, #6234, #5874, #5873, #5802, #5748, and #9607) were **closed without merge** in a single sweep, including doc updates (zAI, LM Studio Qwen3 Coder, Qwen Code provider), a VSCode API linter tightening, the SWE-bench-verified evals addition, and a fix for MCP server requests respecting user-defined timeouts (#9607). No releases and no new issues were filed.

## Releases

_None in window._


## Merged PRs

- [#10207](https://github.com/cline/cline/pull/10207) **feat(chat): add SpendLimitError UI for SPEND_LIMIT_EXCEEDED (429)** — _by @RobertoLangarica, merged 2026-04-09T21:55:58Z_


## Open PRs (new or updated)

- [#10213](https://github.com/cline/cline/pull/10213) **Remove workflows feature end-to-end** — _by @candieduniverse, updated 2026-04-09T23:20:13Z_
- [#10211](https://github.com/cline/cline/pull/10211) **Remove `/reportbug` built-in slash command** — _by @candieduniverse, updated 2026-04-09T22:40:38Z_
- [#10194](https://github.com/cline/cline/pull/10194) **feat(uri): add /lg-task webhook integration for LG dashboard flow** — _by @saoudrizwan, updated 2026-04-09T20:16:35Z_
- [#10210](https://github.com/cline/cline/pull/10210) **Remove `/deep-planning` built-in slash command** — _by @candieduniverse, updated 2026-04-09T20:10:03Z_


## Closed PRs (not merged)

- [#6467](https://github.com/cline/cline/pull/6467) **fix: prevent tooltip hovering by using inline pointer-events none** — _by @celestial-vault, closed 2026-04-09T22:31:04Z_
- [#6365](https://github.com/cline/cline/pull/6365) **make ModelContextTracker a utility function** — _by @celestial-vault, closed 2026-04-09T22:30:35Z_
- [#6286](https://github.com/cline/cline/pull/6286) **ci: add GitHub Actions workflow to deploy Storybook to Pages** — _by @abeatrix, closed 2026-04-09T22:30:20Z_
- [#6266](https://github.com/cline/cline/pull/6266) **Update zAI endpoint, subscription plans, and usage details** — _by @saoudrizwan, closed 2026-04-09T22:28:16Z_
- [#6234](https://github.com/cline/cline/pull/6234) **Update VSCode API linter rules** — _by @sjf, closed 2026-04-09T22:27:44Z_
- [#5874](https://github.com/cline/cline/pull/5874) **Update LM Studio docs with Qwen3 Coder 30B recommendations** — _by @nickbaumann98, closed 2026-04-09T22:27:15Z_
- [#5873](https://github.com/cline/cline/pull/5873) **Add Qwen Code provider documentation and update Grok models** — _by @nickbaumann98, closed 2026-04-09T22:26:45Z_
- [#5802](https://github.com/cline/cline/pull/5802) **Fix #5726: editing chat message with 'Restore chat' button sending the old message** — _by @saoudrizwan, closed 2026-04-09T22:26:09Z_
- [#5748](https://github.com/cline/cline/pull/5748) **add swe-bench verified to evals** — _by @steve2972, closed 2026-04-09T22:24:15Z_
- [#9607](https://github.com/cline/cline/pull/9607) **fix: respect user-defined timeout in MCP server requests** — _by @Chelebii, closed 2026-04-09T12:35:09Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`10197b0`](https://github.com/cline/cline/commit/10197b038dbfd236fe7fa0ea94276bf3f0e6087e) feat(chat): add SpendLimitError UI for SPEND_LIMIT_EXCEEDED (429) (#10207) — _@RobertoLangarica_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
