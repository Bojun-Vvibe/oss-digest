# cline/cline — 2026-03-08

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-03-07T23:59:59.000Z → 2026-03-08T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline change is new **Anthropic Claude Opus 4.6 fast-mode support** ([#9725](https://github.com/cline/cline/pull/9725)), which exposes two new selectable variants in the Anthropic provider — `claude-opus-4-6:fast` (200K context) and `claude-opus-4-6:1m:fast` (1M context beta). The implementation is intentionally minimal and local to the Anthropic provider rather than refactoring the request flow, so reviewers and integrators should look here first.

A second batch of provider/agent-quality work from robinnewhouse landed:

- **`--auto-condense` CLI flag** ([#9705](https://github.com/cline/cline/pull/9705)) exposes the existing AI-powered context compaction toggle to eval harnesses (Harbor / SWE-bench) without touching the VS Code UI, mirroring the `--double-check-completion` pattern.
- **Gemini parameter descriptions** ([#9681](https://github.com/cline/cline/pull/9681)): the Gemini tool-schema converter was the only provider not sending parameter-level descriptions, leaving the model to guess at fields like `replace_in_file`'s arguments. Likely a meaningful quality bump for Gemini users.
- **Crash fix in `list_files` / `list_code_definition_names`** ([#9680](https://github.com/cline/cline/pull/9680)) when the model passes a file path instead of a directory — globby would throw; now guarded with an `isDirectory` check.
- **System-prompt rules** ([#9679](https://github.com/cline/cline/pull/9679)) to stop Cline from rewriting tests to match buggy code, and to push it to run the existing test suite after a fix. Also makes `CLI_RULES` language-agnostic.

Docs: a `.github/copilot-instructions.md` was merged ([#9606](https://github.com/cline/cline/pull/9606)) covering architecture, build commands, and the protobuf RPC workflow — useful onboarding reference.

On the open-PR side, the **proto field-number stability** issue is getting heavy attention: [#9724](https://github.com/cline/cline/pull/9724) (hyphenated keys + map types) and [#9689](https://github.com/cline/cline/pull/9689) (regex behavior) both target `generate-state-proto.mjs`, overlapping with the earlier [#9611](https://github.com/cline/cline/pull/9611). Expect consolidation. Several smaller Br1an67 fixes remain open: `.clinerules` for commit messages ([#9616](https://github.com/cline/cline/pull/9616)), Azure content-filter wording for plan/act toggle ([#9617](https://github.com/cline/cline/pull/9617)), MCP image/text ordering ([#9618](https://github.com/cline/cline/pull/9618)), context-window bar NaN ([#9613](https://github.com/cline/cline/pull/9613)), and dropping `tmp`/`temp` from default ignores ([#9610](https://github.com/cline/cline/pull/9610)). No releases or new issues in window.

## Releases

_None in window._


## Merged PRs

- [#9705](https://github.com/cline/cline/pull/9705) **Add --auto-condense CLI flag for AI-powered context compaction** — _by @robinnewhouse, merged 2026-03-08T23:28:49Z_
- [#9681](https://github.com/cline/cline/pull/9681) **fix: add parameter descriptions to Gemini tool schemas** — _by @robinnewhouse, merged 2026-03-08T23:27:51Z_
- [#9680](https://github.com/cline/cline/pull/9680) **fix(tools): prevent crash when list_files/list_code_definition_names receives a file path** — _by @robinnewhouse, merged 2026-03-08T23:07:03Z_
- [#9679](https://github.com/cline/cline/pull/9679) **prompt: add test verification rules and make CLI_RULES language-agnostic** — _by @robinnewhouse, merged 2026-03-08T22:58:13Z_
- [#9725](https://github.com/cline/cline/pull/9725) **feat: add Anthropic Opus 4.6 fast mode variants** — _by @saoudrizwan, merged 2026-03-08T22:31:38Z_
- [#9606](https://github.com/cline/cline/pull/9606) **docs: add .github/copilot-instructions.md for AI coding agents** — _by @mitsu888, merged 2026-03-08T21:51:55Z_


## Open PRs (new or updated)

- [#8940](https://github.com/cline/cline/pull/8940) **Use a file for feature flags caching** — _by @BarreiroT, updated 2026-03-08T22:05:13Z_
- [#9616](https://github.com/cline/cline/pull/9616) **fix: load cline rules for commit message generation** — _by @Br1an67, updated 2026-03-08T20:12:57Z_
- [#9617](https://github.com/cline/cline/pull/9617) **fix: rephrase plan-to-act toggle text to avoid Azure content filter** — _by @Br1an67, updated 2026-03-08T20:12:51Z_
- [#9618](https://github.com/cline/cline/pull/9618) **fix: preserve content block order in MCP tool responses** — _by @Br1an67, updated 2026-03-08T20:12:44Z_
- [#9611](https://github.com/cline/cline/pull/9611) **fix: handle map<> types in proto field regex** — _by @Br1an67, updated 2026-03-08T17:59:50Z_
- [#9613](https://github.com/cline/cline/pull/9613) **fix: hide context window bar when token usage is unavailable** — _by @Br1an67, updated 2026-03-08T17:47:26Z_
- [#9610](https://github.com/cline/cline/pull/9610) **fix: remove tmp and temp from default ignore directories** — _by @Br1an67, updated 2026-03-08T17:36:21Z_
- [#9724](https://github.com/cline/cline/pull/9724) **fix: preserve proto field numbers for hyphenated keys and map types** — _by @MaxwellCalkin, updated 2026-03-08T17:00:42Z_
- [#9689](https://github.com/cline/cline/pull/9689) **Fix regex behavior of `generate-state-proto.mjs`** — _by @candieduniverse, updated 2026-03-08T05:09:44Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`f6d2b4d`](https://github.com/cline/cline/commit/f6d2b4d9acbf52d5fc5ad4e8f519a2d2d45e5dfb) Add --auto-condense CLI flag to enable AI-powered context compaction (#9705) — _@robinnewhouse_
- [`911fcfd`](https://github.com/cline/cline/commit/911fcfda47784faa3246888dc3b67b758ca3a4ce) gemini-hc: add parameter descriptions to Gemini tool schemas (#9681) — _@robinnewhouse_
- [`55569ef`](https://github.com/cline/cline/commit/55569efb74aa5965327bdd79f1e5a6312b3bceaa) fix(tools): prevent crash when list_files/list_code_definition_names receives a file path (#9680) — _@robinnewhouse_
- [`18561ed`](https://github.com/cline/cline/commit/18561ed59d2093941d74efe14474f7b044588150) prompt: add test verification rules and make CLI_RULES language-agnostic (#9679) — _@robinnewhouse_
- [`fa7265f`](https://github.com/cline/cline/commit/fa7265fa3313ebb5c4f3b661899aa5e7fac9f1ea) feat: add Anthropic Opus 4.6 fast mode variants (#9725) — _@saoudrizwan_
- [`bf96223`](https://github.com/cline/cline/commit/bf9622363939d7f9d2309f28c0b2fbb0e1e5d3a1) docs: add .github/copilot-instructions.md for AI coding agents (#9606) — _@mitsu888_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
