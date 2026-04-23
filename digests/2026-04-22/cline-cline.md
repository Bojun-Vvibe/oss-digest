# cline/cline — 2026-04-22

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-04-21T23:59:59.000Z → 2026-04-22T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

# cline/cline — 2026-04-22

The headline is the **v3.80.0 release** ([release notes](https://github.com/cline/cline/releases/tag/v3.80.0)), which ships enterprise-managed `globalSkills` (with an "Enterprise Skills" UI section and `alwaysEnabled` enforcement), a dynamic recommended-model list in onboarding (replacing the hardcoded list, with welcome-view fallback), and a dedicated "Quota Exceeded" chat error when Cline account spend caps are hit. Most of today's merged PRs feed directly into this release.

Notable merges backing the release:
- #10355 wires the onboarding flow to the dynamic recommended-models endpoint.
- #10353 switches the quota-exceeded path to use the API's `details` field instead of the caught error message, giving the backend freedom to reword errors.
- #10354 removes stale hardcoded banners from the webview.
- #10356 updates the changelog for v3.80.0.

On release infrastructure, #10338 reroutes regular nightlies to the Cline (Nightly) extension's *release* channel, freeing the *pre-release* channel for dogfooding the SDK-based VSCode port. Complementing that, #10344 adds a separate, manually dispatched, environment-gated **SDK nightly publish workflow** so PAT-protected SDK builds can ship without allowing arbitrary refs to use Marketplace secrets. Anyone tracking the SDK port should read both.

Security/dependency churn is heavy: Aikido auto-fix bot opened #10362 (22 critical issues across protobufjs, node-forge, basic-ftp et al.) and #10361 (langium, lodash-es template-injection RCE, dompurify), superseding earlier closed PRs #10347/#10360/#10296. Dependabot's #10357 bumps dompurify to 3.4.1, replacing #10285. None are merged yet — worth a review pass before the next release.

New issues worth triaging:
- #10358: `consecutiveMistakeCount` persists across user-message boundaries, causing YOLO mode to abort on the first tool call of a resumed task — includes a clear repro and proposed fix scope.
- #10359: Qwen3.6 via the openai provider repeatedly hits `UND_ERR_BODY_TIMEOUT` after a few edits (v3.79.0).
- #10351: LM Studio context-window field is disabled in the GUI, blocking startup against `google/gemma-4-26b-a4b`.

Long-running issue #10287 (Vertex AI global endpoint 404 for Claude models) saw activity but remains open.

## Releases

- **[v3.80.0](https://github.com/cline/cline/releases/tag/v3.80.0)** — v3.80.0 _by @github-actions[bot] at 2026-04-22T18:38:10Z_
  > ### Added
  > 
  > - Wire up remote `globalSkills` from enterprise remote config with full UI, toggle support, and system prompt integration — enterprise-managed skills now appear under a dedicated "Enterprise Skills" section and support `alwaysEnabled` enforcement
  > - Onboarding flow now uses dynamically fetched recommended models instead of a hardcoded list, with a fallback to the welcome view on failure
  > - Add dedicated "Quota Exceeded" error message in the chat error UI when Cline account spend caps ar…


## Merged PRs

- [#10356](https://github.com/cline/cline/pull/10356) **update changelog** — _by @maxpaulus43, merged 2026-04-22T18:03:36Z_
- [#10355](https://github.com/cline/cline/pull/10355) **Use the recommended model list for the onboarding flow** — _by @BarreiroT, merged 2026-04-22T17:32:45Z_
- [#10354](https://github.com/cline/cline/pull/10354) **Remove old hardcoded banners** — _by @BarreiroT, merged 2026-04-22T17:21:01Z_
- [#10344](https://github.com/cline/cline/pull/10344) **Add SDK nightly publish workflow** — _by @arafatkatze, merged 2026-04-22T17:13:56Z_
- [#10353](https://github.com/cline/cline/pull/10353) **Use details instead of caught error message** — _by @JicLotus, merged 2026-04-22T14:50:45Z_
- [#10338](https://github.com/cline/cline/pull/10338) **chore: Publish regular nightlies to Cline (Nightly) *release* channel** — _by @dominiccooney, merged 2026-04-22T04:26:57Z_


## Open PRs (new or updated)

- [#10362](https://github.com/cline/cline/pull/10362) **[Aikido] Fix 22 critical issues in protobufjs, node-forge, basic-ftp and 7 more** — _by @aikido-autofix[bot], updated 2026-04-22T22:50:28Z_
- [#10361](https://github.com/cline/cline/pull/10361) **[Aikido] Fix 3 security issues in langium, lodash-es, dompurify** — _by @aikido-autofix[bot], updated 2026-04-22T22:49:32Z_
- [#10357](https://github.com/cline/cline/pull/10357) **chore(deps): bump dompurify from 3.3.3 to 3.4.1 in /webview-ui** — _by @dependabot[bot], updated 2026-04-22T18:12:34Z_


## Closed PRs (not merged)

- [#10347](https://github.com/cline/cline/pull/10347) **[Aikido] Fix 22 critical issues in protobufjs, node-forge, basic-ftp and 10 more** — _by @aikido-autofix[bot], closed 2026-04-22T22:47:53Z_
- [#10360](https://github.com/cline/cline/pull/10360) **[Aikido] Fix 1 critical issue in langium, lodash-es** — _by @aikido-autofix[bot], closed 2026-04-22T22:47:15Z_
- [#10296](https://github.com/cline/cline/pull/10296) **[Aikido] Fix 3 security issues in langium, lodash-es, dompurify** — _by @aikido-autofix[bot], closed 2026-04-22T22:27:00Z_
- [#10285](https://github.com/cline/cline/pull/10285) **chore(deps): bump dompurify from 3.3.3 to 3.4.0 in /webview-ui** — _by @dependabot[bot], closed 2026-04-22T18:12:34Z_
- [#6554](https://github.com/cline/cline/pull/6554) **Override undici timeout to guarantee that ollama timeout will be honored.** — _by @hadsie, closed 2026-01-12T21:12:10Z_


## Notable Issues

- [#7262](https://github.com/cline/cline/issues/7262) **Cline returning over and over again: Invalid API Response: The provider returned an empty or unparsable response** _[VS Code, Linear, Bot Responded]_ — _by @savina-dimitrova_
- [#10358](https://github.com/cline/cline/issues/10358) **consecutiveMistakeCount should reset on user message boundary (YOLO trips on "continue" / task resumption)** — _by @rubenmajor2_
- [#10359](https://github.com/cline/cline/issues/10359) **Qwen3.6 leading to 'UND_ERR_BODY_TIMEOUT'** _[VS Code]_ — _by @PathosEthosLogos_
- [#10287](https://github.com/cline/cline/issues/10287) **Vertex AI: Global endpoint for Claude models returns 404 - incorrect hostname construction** _[VS Code]_ — _by @WandLZhang_
- [#10015](https://github.com/cline/cline/issues/10015) **Cline wants to execute this command:  Skipped, thinking** _[VS Code]_ — _by @happyrwandan_
- [#7574](https://github.com/cline/cline/issues/7574) **Regression: command execution quoting on Windows ("cmd /c dir" error)** _[VS Code, Bot Responded]_ — _by @Gonzo15918_ _(closed 2026-04-22T10:48:04Z)_
- [#7044](https://github.com/cline/cline/issues/7044) **Frequent Task Completions are Disrupting Usability - Can it be disabled?** _[Model Quality, VS Code, Bot Responded]_ — _by @softworkz_ _(closed 2026-04-22T10:48:04Z)_
- [#9010](https://github.com/cline/cline/issues/9010) **AI assistant stuck in plan mode loop despite being in ACT mode** _[stale, Model Quality, VS Code, Bot Responded]_ — _by @bkibbeyWork_
- [#10351](https://github.com/cline/cline/issues/10351) **API Provider - LM Studio: context windows size is disabled (GUI) - I cannot get LM Studio to start. "You may need to load the model with a larger context length to work with Cline's prompts"** _[VS Code]_ — _by @LaKanDoR_
- [#9065](https://github.com/cline/cline/issues/9065) **When using environment variables in the MCP server configuration, the value is overwritten with resolved value when server is disabled/enabled from the UI** _[Help Wanted, stale, VS Code, Bot Responded]_ — _by @ensonik_ _(closed 2026-04-22T02:14:20Z)_
- [#9081](https://github.com/cline/cline/issues/9081) **API Request progress indicator missing in v3.56.2** _[stale, VS Code, Bot Responded, Regression]_ — _by @ybxywz_ _(closed 2026-04-22T02:14:18Z)_
- [#9092](https://github.com/cline/cline/issues/9092) **Executing multiple shell commands simultaneously causes 400 error: toolResult blocks exceed toolUse blocks** _[stale, Investigation Needed, VS Code, Bot Responded]_ — _by @ybxywz_ _(closed 2026-04-22T02:14:17Z)_
- [#9094](https://github.com/cline/cline/issues/9094) **When I asked a question, Cline completely froze.** _[stale, Needs User Input, VS Code, Bot Responded, Regression]_ — _by @Gahim-Chan_ _(closed 2026-04-22T02:14:15Z)_
- [#9129](https://github.com/cline/cline/issues/9129) **Cline: CLI Search history is not visible in VSC** _[stale, QA, VS Code, CLI, Bot Responded]_ — _by @RajatNagoria_ _(closed 2026-04-22T02:14:13Z)_


## Commits on `main`

- [`9dea336`](https://github.com/cline/cline/commit/9dea336cedccc52024bb0dd1641b4e4e0a9bc7f4) update changelog (#10356) — _@maxpaulus43_
- [`697f801`](https://github.com/cline/cline/commit/697f801937bee9f33097b9aa14e72fd9a32434cb) Use the recommended model list for the onboarding flow (#10355) — _@BarreiroT_
- [`6be35bf`](https://github.com/cline/cline/commit/6be35bfcea8811a627df9e58eb0402b722b3fc36) Remove old hardcoded banners (#10354) — _@BarreiroT_
- [`5a91800`](https://github.com/cline/cline/commit/5a91800b6cc343ce7158a17dac966ffd7626e88f) Add SDK nightly publish workflow (#10344) — _@arafatkatze_
- [`dacadba`](https://github.com/cline/cline/commit/dacadbaae02e29e93bd36e0b60d5bbd3352f10b7) use details instead of catched error message (#10353) — _@JicLotus_
- [`8d020e8`](https://github.com/cline/cline/commit/8d020e89e6ff3d323df9cbebe405c62ae5cc0cfb) chore: Publish regular nightlies to Cline (Nightly) *release* channel (#10338) — _@dominiccooney_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
