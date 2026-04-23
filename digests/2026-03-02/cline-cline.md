# cline/cline — 2026-03-02

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-03-01T23:59:59.000Z → 2026-03-02T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Headline today is a release: VSCode extension `3.69.0` and CLI `2.5.2` shipped via #9640, bundling the day's reliability fixes below. The release flow itself was also streamlined in #9584, which adds a default `auto_create_tag_from_main` mode to the Publish Release workflow (creating/pushing the tag from latest `origin/main`) while preserving the manual hotfix path.

The most consequential bug fix is #9620 (saoudrizwan), addressing a nasty checkpoint failure mode where nested repositories could be left renamed from `.git` to `.git_disabled`, silently breaking users' git workflows. `addCheckpointFiles()` disables nested repos during checkpointing and restores them in `finally`, but the prior `renameNestedGitRepos()` swallowed rename errors. The fix hardens cleanup with retries and surfaces failures rather than leaving the working tree in a broken state. Anyone who hit issue #9590 should upgrade.

Also notable for stability: #9633 fixes a regression where OpenRouter context-window overflows weren't recognized as context-overflow errors by Cline's retry logic, so auto-compaction didn't trigger reliably (issue #9592). The fix preserves status codes through the OpenRouter error path and detects wrapped 400 context errors in `task/index.ts`'s retry handling — worth a look if you're an OpenRouter user seeing tasks stall on long contexts.

Smaller but user-visible: #9612 (Br1an67) fixes diff view for non-ASCII filenames (e.g. Chinese like `研究内容-大纲.md`), which were being percent-encoded by `vscode.Uri.from()` and failing to open. The fix switches to `vscode.Uri.parse().with()` for diff URI construction (closes #9604).

Docs-only: #9597 surfaces SDK docs on the Cline page.

Several long-running PRs were closed without merging today, including #4017 (State revert, draft since June), #3914 (removing MCP args from system prompt — a minor security/privacy hardening that didn't land), and #9045 (A/B test enrollment tracking for feature flags) — likely candidates to be reopened or superseded if you were tracking them. No new issues or releases beyond the version bump itself.

## Releases

_None in window._


## Merged PRs

- [#9640](https://github.com/cline/cline/pull/9640) **Release: version bump and changelog updates** — _by @candieduniverse, merged 2026-03-02T23:53:07Z_
- [#9620](https://github.com/cline/cline/pull/9620) **fix(checkpoints): retry nested git restore and prevent silent .git_disabled leftovers** — _by @saoudrizwan, merged 2026-03-02T20:22:02Z_
- [#9584](https://github.com/cline/cline/pull/9584) **workflow: add default auto-tag flow for Publish Release** — _by @arafatkatze, merged 2026-03-02T19:38:48Z_
- [#9633](https://github.com/cline/cline/pull/9633) **fix: trigger auto-compaction on OpenRouter context overflow errors** — _by @saoudrizwan, merged 2026-03-02T18:34:27Z_
- [#9612](https://github.com/cline/cline/pull/9612) **fix: prevent Chinese filename escaping in diff view** — _by @Br1an67, merged 2026-03-02T18:35:49Z_
- [#9597](https://github.com/cline/cline/pull/9597) **[doc] show sdk docs in cline page** — _by @reneehuang1, merged 2026-03-02T18:14:41Z_


## Open PRs (new or updated)

_None in window._


## Closed PRs (not merged)

- [#4017](https://github.com/cline/cline/pull/4017) **State revert** — _by @Garoth, closed 2026-03-02T21:27:32Z_
- [#3914](https://github.com/cline/cline/pull/3914) **Remove mcp args system prompt** — _by @celestial-vault, closed 2026-03-02T21:26:08Z_
- [#9045](https://github.com/cline/cline/pull/9045) **feat: A/B test enrollment tracking for feature flags** — _by @abeatrix, closed 2026-03-02T19:23:15Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`fc3d986`](https://github.com/cline/cline/commit/fc3d986d05be2787e76f862aeb9ecd483f779575) Release: version bump and changelog updates (#9640) — _@candieduniverse_
- [`520ddb8`](https://github.com/cline/cline/commit/520ddb83bba4053de03a44be85af9a847bdafb6b) fix(checkpoints): retry nested git restore and prevent silent .git_disabled leftovers (#9620) — _@saoudrizwan_
- [`d96c5d4`](https://github.com/cline/cline/commit/d96c5d4b409e2940d6ec2026bdfc3ec7bd3e1517) workflow: add default auto-tag flow for Publish Release (#9584) — _@arafatkatze_
- [`e6cbae0`](https://github.com/cline/cline/commit/e6cbae0edc1db7af97c54365ab612472d041d18a) fix: prevent Chinese filename escaping in diff view (#9612) — _@Br1an67_
- [`76bd092`](https://github.com/cline/cline/commit/76bd0926e63c4d375ff7b038c9bb989140940f86) fix: trigger auto-compaction on OpenRouter context overflow errors (#9633) — _@saoudrizwan_
- [`819f9ce`](https://github.com/cline/cline/commit/819f9ce00d71d06bc7652680ad5575d748d9a35e) show sdk docs in cline page (#9597) — _@reneehuang1_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
