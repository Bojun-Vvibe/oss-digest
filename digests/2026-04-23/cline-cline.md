# cline/cline — 2026-04-23

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-04-22T08:51:15.545Z → 2026-04-23T08:51:15.545Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

> _v0.1: deterministic template, no LLM summary yet (see `docs/ROADMAP.md`)._

## Releases

- **[v3.80.0](https://github.com/cline/cline/releases/tag/v3.80.0)** — v3.80.0 _by @github-actions[bot] at 2026-04-22T18:38:10Z_
  > ### Added
  > 
  > - Wire up remote `globalSkills` from enterprise remote config with full UI, toggle support, and system prompt integration — enterprise-managed skills now appear under a dedicated "Enterprise Skills" section and support `alwaysEnabled` enforcement
  > - Onboarding flow now uses dynamically fetched recommended models instead of a hardcoded list, with a fallback to the welcome view on failure
  > - Add dedicated "Quota Exceeded" error message in the chat error UI when Cline account spend caps ar…


## Merged PRs

- [#10343](https://github.com/cline/cline/pull/10343) **feat(memory-observability): add periodic memory logging to cline-core** — _by @mkondratek, merged 2026-04-23T04:34:52Z_
- [#10365](https://github.com/cline/cline/pull/10365) **fix: pin protobufjs to 7.5.5 to address CVE-2026-41242** — _by @TheRealSpencer, merged 2026-04-23T03:22:32Z_
- [#10363](https://github.com/cline/cline/pull/10363) **docs: remove demo video from README** — _by @saoudrizwan, merged 2026-04-23T01:46:17Z_
- [#10356](https://github.com/cline/cline/pull/10356) **update changelog** — _by @maxpaulus43, merged 2026-04-22T18:03:36Z_
- [#10355](https://github.com/cline/cline/pull/10355) **Use the recommended model list for the onboarding flow** — _by @BarreiroT, merged 2026-04-22T17:32:45Z_
- [#10354](https://github.com/cline/cline/pull/10354) **Remove old hardcoded banners** — _by @BarreiroT, merged 2026-04-22T17:21:01Z_
- [#10344](https://github.com/cline/cline/pull/10344) **Add SDK nightly publish workflow** — _by @arafatkatze, merged 2026-04-22T17:13:56Z_
- [#10353](https://github.com/cline/cline/pull/10353) **Use details instead of caught error message** — _by @JicLotus, merged 2026-04-22T14:50:45Z_


## Open PRs (new or updated)

- [#10350](https://github.com/cline/cline/pull/10350) **docs: add SDK documentation** — _by @saoudrizwan, updated 2026-04-23T08:21:17Z_
- [#10319](https://github.com/cline/cline/pull/10319) **fix: Model metadata fails to update when change model (#10248)** — _by @water-in-stone, updated 2026-04-23T07:51:42Z_
- [#10369](https://github.com/cline/cline/pull/10369) **fix(ollama): strip data URI prefix from images for Ollama API compati…** — _by @alkul93123, updated 2026-04-23T07:29:25Z_
- [#10367](https://github.com/cline/cline/pull/10367) **chore(deps): bump uuid from 11.1.0 to 14.0.0** — _by @dependabot[bot], updated 2026-04-23T03:41:22Z_
- [#10366](https://github.com/cline/cline/pull/10366) **chore(deps): bump the npm_and_yarn group across 4 directories with 11 updates** — _by @dependabot[bot], updated 2026-04-23T03:26:51Z_
- [#10160](https://github.com/cline/cline/pull/10160) **chore(deps): bump vite from 7.3.1 to 7.3.2** — _by @dependabot[bot], updated 2026-04-23T03:25:55Z_
- [#10157](https://github.com/cline/cline/pull/10157) **chore(deps-dev): bump vite from 7.2.2 to 7.3.2 in /webview-ui** — _by @dependabot[bot], updated 2026-04-23T03:24:20Z_
- [#10364](https://github.com/cline/cline/pull/10364) **chore(deps): bump uuid from 9.0.1 to 14.0.0 in /webview-ui** — _by @dependabot[bot], updated 2026-04-23T00:18:29Z_
- [#10362](https://github.com/cline/cline/pull/10362) **[Aikido] Fix 22 critical issues in protobufjs, node-forge, basic-ftp and 7 more** — _by @aikido-autofix[bot], updated 2026-04-22T22:50:28Z_
- [#10361](https://github.com/cline/cline/pull/10361) **[Aikido] Fix 3 security issues in langium, lodash-es, dompurify** — _by @aikido-autofix[bot], updated 2026-04-22T22:49:32Z_
- [#10357](https://github.com/cline/cline/pull/10357) **chore(deps): bump dompurify from 3.3.3 to 3.4.1 in /webview-ui** — _by @dependabot[bot], updated 2026-04-22T18:12:34Z_


## Closed PRs (not merged)

- [#10258](https://github.com/cline/cline/pull/10258) **WIP not ready for review** — _by @dominiccooney, closed 2026-04-23T04:35:54Z_
- [#10305](https://github.com/cline/cline/pull/10305) **chore(deps): bump the npm_and_yarn group across 5 directories with 12 updates** — _by @dependabot[bot], closed 2026-04-23T03:25:29Z_
- [#10299](https://github.com/cline/cline/pull/10299) **chore(deps): bump protobufjs from 7.5.4 to 7.5.5** — _by @dependabot[bot], closed 2026-04-23T03:24:02Z_
- [#10300](https://github.com/cline/cline/pull/10300) **chore(deps): bump protobufjs from 7.5.4 to 7.5.5 in /webview-ui** — _by @dependabot[bot], closed 2026-04-23T03:24:02Z_
- [#10347](https://github.com/cline/cline/pull/10347) **[Aikido] Fix 22 critical issues in protobufjs, node-forge, basic-ftp and 10 more** — _by @aikido-autofix[bot], closed 2026-04-22T22:47:53Z_
- [#10360](https://github.com/cline/cline/pull/10360) **[Aikido] Fix 1 critical issue in langium, lodash-es** — _by @aikido-autofix[bot], closed 2026-04-22T22:47:15Z_
- [#10296](https://github.com/cline/cline/pull/10296) **[Aikido] Fix 3 security issues in langium, lodash-es, dompurify** — _by @aikido-autofix[bot], closed 2026-04-22T22:27:00Z_
- [#10285](https://github.com/cline/cline/pull/10285) **chore(deps): bump dompurify from 3.3.3 to 3.4.0 in /webview-ui** — _by @dependabot[bot], closed 2026-04-22T18:12:34Z_
- [#6554](https://github.com/cline/cline/pull/6554) **Override undici timeout to guarantee that ollama timeout will be honored.** — _by @hadsie, closed 2026-01-12T21:12:10Z_


## Notable Issues

- [#10208](https://github.com/cline/cline/issues/10208) **Stuck thinking for ever.** _[VS Code]_ — _by @Susanoo1337_
- [#10370](https://github.com/cline/cline/issues/10370) **Cline removes "data:" on lines that contain "metadata:" on YAML files** _[VS Code]_ — _by @mperlinesfortes_
- [#9522](https://github.com/cline/cline/issues/9522) **OpenRouter Provider gives me a Error 401** _[CLI]_ — _by @HEIN390_ _(closed 2026-02-26T22:15:10Z)_
- [#10368](https://github.com/cline/cline/issues/10368) **Bug: Ollama vision models fail to process images due to incorrect Base64 format** _[VS Code]_ — _by @alkul93123_
- [#10330](https://github.com/cline/cline/issues/10330) **Model stream repeatedly ends without producing output when using AWS Bedrock — hits consecutive mistake limit** _[VS Code]_ — _by @shubhamgowdaa_
- [#10135](https://github.com/cline/cline/issues/10135) **Claude Code API Provider: Command failed with exit code 1 for all sonnet models** _[JetBrains]_ — _by @emrul_
- [#10035](https://github.com/cline/cline/issues/10035) **Save/Reject buttons become disabled on second file during multi-file edit approval** _[JetBrains, P3]_ — _by @AlexeySa_
- [#9167](https://github.com/cline/cline/issues/9167) **Error using grok-code-fast-1** _[stale, Model Quality, JetBrains, Bot Responded]_ — _by @mjgchase_ _(closed 2026-04-23T02:14:41Z)_
- [#9340](https://github.com/cline/cline/issues/9340) **Add image/vision support for multimodal models** _[Help Wanted, stale, CLI]_ — _by @Daniel-Santiago-Acosta-1013_
- [#10352](https://github.com/cline/cline/issues/10352) **Duplicate references cause cline to freeze** _[VS Code]_ — _by @Andre-Medina_
- [#7262](https://github.com/cline/cline/issues/7262) **Cline returning over and over again: Invalid API Response: The provider returned an empty or unparsable response** _[VS Code, Linear, Bot Responded]_ — _by @savina-dimitrova_
- [#10358](https://github.com/cline/cline/issues/10358) **consecutiveMistakeCount should reset on user message boundary (YOLO trips on "continue" / task resumption)** — _by @rubenmajor2_
- [#10359](https://github.com/cline/cline/issues/10359) **Qwen3.6 leading to 'UND_ERR_BODY_TIMEOUT'** _[VS Code]_ — _by @PathosEthosLogos_
- [#10287](https://github.com/cline/cline/issues/10287) **Vertex AI: Global endpoint for Claude models returns 404 - incorrect hostname construction** _[VS Code]_ — _by @WandLZhang_
- [#10015](https://github.com/cline/cline/issues/10015) **Cline wants to execute this command:  Skipped, thinking** _[VS Code]_ — _by @happyrwandan_
- [#7574](https://github.com/cline/cline/issues/7574) **Regression: command execution quoting on Windows ("cmd /c dir" error)** _[VS Code, Bot Responded]_ — _by @Gonzo15918_ _(closed 2026-04-22T10:48:04Z)_
- [#7044](https://github.com/cline/cline/issues/7044) **Frequent Task Completions are Disrupting Usability - Can it be disabled?** _[Model Quality, VS Code, Bot Responded]_ — _by @softworkz_ _(closed 2026-04-22T10:48:04Z)_
- [#9010](https://github.com/cline/cline/issues/9010) **AI assistant stuck in plan mode loop despite being in ACT mode** _[stale, Model Quality, VS Code, Bot Responded]_ — _by @bkibbeyWork_


## Commits on `main`

- [`70f0e8d`](https://github.com/cline/cline/commit/70f0e8d548329f72e4c70378c377847d1f5ce2ed) feat(memory-observability): add periodic memory logging to cline-core (#10343) — _@mkondratek_
- [`5accd88`](https://github.com/cline/cline/commit/5accd88d731c2574660429fdc2fa8751b42d4add) fix: pin protobufjs to 7.5.5 to address CVE-2026-41242 (#10365) — _@TheRealSpencer_
- [`5b29be6`](https://github.com/cline/cline/commit/5b29be63b890b1b83d671c08d8e64b9b3e6c0931) docs: remove demo video from README (#10363) — _@saoudrizwan_
- [`9dea336`](https://github.com/cline/cline/commit/9dea336cedccc52024bb0dd1641b4e4e0a9bc7f4) update changelog (#10356) — _@maxpaulus43_
- [`697f801`](https://github.com/cline/cline/commit/697f801937bee9f33097b9aa14e72fd9a32434cb) Use the recommended model list for the onboarding flow (#10355) — _@BarreiroT_
- [`6be35bf`](https://github.com/cline/cline/commit/6be35bfcea8811a627df9e58eb0402b722b3fc36) Remove old hardcoded banners (#10354) — _@BarreiroT_
- [`5a91800`](https://github.com/cline/cline/commit/5a91800b6cc343ce7158a17dac966ffd7626e88f) Add SDK nightly publish workflow (#10344) — _@arafatkatze_
- [`dacadba`](https://github.com/cline/cline/commit/dacadbaae02e29e93bd36e0b60d5bbd3352f10b7) use details instead of catched error message (#10353) — _@JicLotus_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.1 deterministic template._
