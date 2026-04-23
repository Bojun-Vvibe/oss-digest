# cline/cline — 2026-04-10

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-04-09T23:59:59.000Z → 2026-04-10T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Release **v3.78.0** (VSCode extension) and **CLI v2.14.0** shipped today, cut via #10227. The user-facing changes are modest: a dedicated "Spend Limit Reached" error UI when spend caps are hit, docs updates, and a fix to show the actual `read_file` line ranges in the chat UI. If you only read one thing, skim the release notes to see the new spend-limit UX.

The rest of the day was housekeeping and security hygiene rather than feature work:

- **Security / CI hardening**: #10230 validates the `FORCE_PUBLISH` workflow input to close an action injection risk; #10225 removes the old NPM publish workflows that Aikido had flagged for unsafe triggers; #10226 deletes the old evals tool (keeping only the deprecation notice) to silence further Aikido warnings. The Aikido autofix bundle #10192 (path-to-regexp / xmldom / node-forge upgrades for ReDoS, XML injection, DoS, and signature-forgery CVEs) was *closed without merge* — worth checking whether the fixes were absorbed elsewhere or deliberately deferred. Dependabot bump #10190 (basic-ftp 5.2.0→5.2.1, control-character injection fix) was also closed unmerged, as was the broader npm group bump #10102.
- **Policy**: #10117 updates SECURITY.md to point researchers at Cline's new Bugcrowd VDP — relevant if you triage inbound vulnerability reports.

Notable still-open PRs accumulating review activity: #10193 (a syntax-error fix from jl-codes, no description detail), #10150 (switch temp dirs from `cline` to `cline-{username}` to fix multi-user isolation on shared Linux/macOS/Windows hosts, fixes #10128 — small but a real correctness issue worth landing), and stale dependency bumps #10101 (path-to-regexp 8.4.2), #10100 (lodash 4.18.1), #9759, #9662 that have been re-pinged but not merged.

No new issues were filed and no substantive feature commits landed outside the release PR. Quiet day; the signal is the release plus the security-workflow cleanup by BarreiroT.

## Releases

- **[v3.78.0](https://github.com/cline/cline/releases/tag/v3.78.0)** — v3.78.0 _by @github-actions[bot] at 2026-04-10T20:40:51Z_
  > ### Added
  > 
  > - Add a dedicated "Spend Limit Reached" error UI when spend caps are hit
  > - Docs updates
  > 
  > ### Fixed
  > 
  > - Show actual `read_file` line ranges in chat UI
  > 
  > **Full Changelog**: https://github.com/cline/cline/compare/v2.13.0-cli...v3.78.0


## Merged PRs

- [#10230](https://github.com/cline/cline/pull/10230) **Validate the FORCE_PUBLISH input** — _by @BarreiroT, merged 2026-04-10T21:05:07Z_
- [#10226](https://github.com/cline/cline/pull/10226) **Remove old evals tool** — _by @BarreiroT, merged 2026-04-10T21:04:52Z_
- [#10227](https://github.com/cline/cline/pull/10227) **Changelog and version bump for release** — _by @candieduniverse, merged 2026-04-10T19:48:17Z_
- [#10117](https://github.com/cline/cline/pull/10117) **update security policy to include bugcrowd vdp** — _by @TheRealSpencer, merged 2026-04-10T18:21:35Z_


## Open PRs (new or updated)

- [#10101](https://github.com/cline/cline/pull/10101) **chore(deps): bump path-to-regexp from 8.3.0 to 8.4.2** — _by @dependabot[bot], updated 2026-04-10T19:49:55Z_
- [#10100](https://github.com/cline/cline/pull/10100) **chore(deps): bump lodash from 4.17.23 to 4.18.1** — _by @dependabot[bot], updated 2026-04-10T19:49:49Z_
- [#9759](https://github.com/cline/cline/pull/9759) **chore(deps): bump express-rate-limit from 8.2.1 to 8.3.1** — _by @dependabot[bot], updated 2026-04-10T19:48:27Z_
- [#9662](https://github.com/cline/cline/pull/9662) **chore(deps): bump underscore from 1.13.7 to 1.13.8** — _by @dependabot[bot], updated 2026-04-10T19:48:25Z_
- [#10193](https://github.com/cline/cline/pull/10193) **fix syntax error** — _by @jl-codes, updated 2026-04-10T18:18:50Z_
- [#10150](https://github.com/cline/cline/pull/10150) **fix: use user-specific temp directories for multi-user support** — _by @RealMisterPotato, updated 2026-04-10T10:44:16Z_


## Closed PRs (not merged)

- [#10192](https://github.com/cline/cline/pull/10192) **[Aikido] Fix 14 security issues in path-to-regexp, @xmldom/xmldom, node-forge and 3 more** — _by @aikido-autofix[bot], closed 2026-04-10T22:47:38Z_
- [#10225](https://github.com/cline/cline/pull/10225) **Remove old NPM publish workflows** — _by @BarreiroT, closed 2026-04-10T20:21:39Z_
- [#10102](https://github.com/cline/cline/pull/10102) **chore(deps): bump the npm_and_yarn group across 3 directories with 8 updates** — _by @dependabot[bot], closed 2026-04-10T19:51:46Z_
- [#10190](https://github.com/cline/cline/pull/10190) **chore(deps): bump basic-ftp from 5.2.0 to 5.2.1** — _by @dependabot[bot], closed 2026-04-10T03:50:03Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`a0faf7c`](https://github.com/cline/cline/commit/a0faf7c6778fda100c10af5f8686d9dfa30b3d53) Fix action injection risk (#10230) — _@BarreiroT_
- [`1dcf356`](https://github.com/cline/cline/commit/1dcf356f9877190433f23b910631ef75a58f49bd) Remove old evals tool (#10226) — _@BarreiroT_
- [`71d795e`](https://github.com/cline/cline/commit/71d795eec8e65d72dd1a3d85a63eaeee9a8da171) Changelog and version bump for release (#10227) — _@candieduniverse_
- [`792b9e8`](https://github.com/cline/cline/commit/792b9e89a15be72ab100284b8ea95d1a11a2dc1f) update security policy to include bugcrowd vdp (#10117) — _@TheRealSpencer_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
