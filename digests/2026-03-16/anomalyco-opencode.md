# anomalyco/opencode — 2026-03-16

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-15T23:59:59.000Z → 2026-03-16T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is a sustained **Effect-based service refactor** by `kitlangton`, plus the **v1.2.27 release** (`4ee426b`) and several user-visible fixes worth pulling.

`v1.2.27` ships a batch of fixes from the prior day's work. On top of that, today's notable bug fixes include:

- **GitHub Copilot Enterprise integration** is fixed (#17847) — relevant if you've been blocked on enterprise auth.
- **Windows `/editor` support restored** (#17146), and a Windows CI workaround using Bun's hoisted linker (#17751).
- **Context-overflow detection** now recognises `code: context_length_exceeded` as an overflow condition rather than a generic API error (#17748) — should improve auto-compaction behaviour against more providers.
- **Message transforms are now applied during compaction** (#17823), which fixes a class of subtle truncation/format bugs in long sessions.
- **Agent switch no longer resets thinking level** (#17470), and **prompt tool enables are preserved when agent permissions are empty** (#17064) — both quality-of-life fixes for multi-agent workflows.
- **Active org labels are scoped to the active account** (#16957), fixing cross-account label bleed in the CLI.
- A small but real fix to the **VCS watcher if-statement** (#17673), with a follow-up `fix+refactor(vcs)` that also effectifies `VcsService` and corrects a HEAD filter bug (#17829).

The bulk of the diff volume is `kitlangton`'s migration of internal services to scoped Effect services via `LayerMap`: `SkillService` (#17849), `FileService` (#17845), `FormatService` (#17675), `FileTimeService` with Semaphore locks (#17835), the file-watcher service (#17827), and the underlying move of scoped services into `LayerMap` (#17544). No behaviour change is claimed, but anyone touching service wiring or writing plugins should skim #17544 first as it sets the new pattern the others follow.

Minor polish: question option descriptions now wrap instead of truncating (#17782), and a test fix around ID parsing (#17745). No new issues or PRs were opened in-window; activity was entirely commits to `dev`.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`60af447`](https://github.com/anomalyco/opencode/commit/60af44790856b6217ccd4ec2f0481f9650e36c7d) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`1cdc558`](https://github.com/anomalyco/opencode/commit/1cdc558ac06af73fad9d5023ffbed7d5d6811e8c) chore: generate — _@opencode-agent[bot]_
- [`3849822`](https://github.com/anomalyco/opencode/commit/38498227697e2ef12a2e073b9617e25031ffbf08) refactor(skill): effectify SkillService as scoped service (#17849) — _@kitlangton_
- [`e9a17e4`](https://github.com/anomalyco/opencode/commit/e9a17e4480c8295ae3f72d4ea68c55ae07bfdc41) fix(windows): restore /editor support on Windows (#17146) — _@AbigailJixiangyuyu_
- [`6880936`](https://github.com/anomalyco/opencode/commit/68809365dfe32dd13ad9b3a8c2f555b2e8fa049b) fix: github copilot enterprise integration (#17847) — _@rekram1-node_
- [`8da511d`](https://github.com/anomalyco/opencode/commit/8da511dfa825fdfbdac08b2738ce38b64f0af46b) chore: generate — _@opencode-agent[bot]_
- [`69381f6`](https://github.com/anomalyco/opencode/commit/69381f6aea7cec16b469e6242137f0262aac24c5) refactor(file): effectify FileService as scoped service (#17845) — _@kitlangton_
- [`df65085`](https://github.com/anomalyco/opencode/commit/df6508530f1f7b22787ac931bf93a1b530b98c33) chore: generate — _@opencode-agent[bot]_
- [`3353562`](https://github.com/anomalyco/opencode/commit/335356280ce4bbb67b1b5e47265087e85a364988) refactor(format): effectify FormatService as scoped service (#17675) — _@kitlangton_
- [`03d84f4`](https://github.com/anomalyco/opencode/commit/03d84f49c2b947d94ac8bcb5f8ba7c2fc4907e8d) chore: generate — _@opencode-agent[bot]_
- [`2cbdf04`](https://github.com/anomalyco/opencode/commit/2cbdf04ec9970c297acdfdebb4511329fc429639) refactor(file-time): effectify FileTimeService with Semaphore locks (#17835) — _@kitlangton_
- [`410fbd8`](https://github.com/anomalyco/opencode/commit/410fbd8a00fad793e980cab7efe2b99b3963dc5b) chore: generate — _@opencode-agent[bot]_
- [`e5cbecf`](https://github.com/anomalyco/opencode/commit/e5cbecf17c09efc84049473679aec537d30a40ab) fix+refactor(vcs): fix HEAD filter bug and effectify VcsService (#17829) — _@kitlangton_
- [`ca3af5d`](https://github.com/anomalyco/opencode/commit/ca3af5dc6a73a52b225c36376fd51b153fd6ad95) chore: generate — _@opencode-agent[bot]_
- [`9e740d9`](https://github.com/anomalyco/opencode/commit/9e740d9947e6a4c61680c8dd00cb1fd11adf12af) stack: effectify-file-watcher-service (#17827) — _@kitlangton_
- [`d4694d0`](https://github.com/anomalyco/opencode/commit/d4694d058cc590b0f05261a04460034d2fa8541d) chore: generate — _@opencode-agent[bot]_
- [`469c3a4`](https://github.com/anomalyco/opencode/commit/469c3a4204310aa3b87f2355122d392baad312df) refactor(instance): move scoped services to LayerMap (#17544) — _@kitlangton_
- [`4cb2996`](https://github.com/anomalyco/opencode/commit/4cb29967f6e09828daab404ad4c14274bae2bb97) fix(opencode): apply message transforms during compaction (#17823) — _@Tarquinen_
- [`e718db6`](https://github.com/anomalyco/opencode/commit/e718db624fd0694cbdd051c8d27b577560cb057c) fix(core): consider code: context_length_exceeded as context overflow in API call errors (#17748) — _@ghost91-_
- [`15b27e0`](https://github.com/anomalyco/opencode/commit/15b27e0d182b0b5db0eae45d2cc9ac1c670dd381) fix(app): agent switch should not reset thinking level (#17470) — _@bugulo_
- [`c523aac`](https://github.com/anomalyco/opencode/commit/c523aac586b5b5d3d59143f19cad65c935090e4e) fix(cli): scope active org labels to the active account (#16957) — _@kitlangton_
- [`51fcd04`](https://github.com/anomalyco/opencode/commit/51fcd04a70258e40f04ec1b5ca165aab6a6dfc32) Wrap question option descriptions instead of truncating (#17782) — _@nexxeln_
- [`4d7cbdc`](https://github.com/anomalyco/opencode/commit/4d7cbdcbef92bb69613fe98ba64e832b5adddd79) fix(ci): workaround by using hoisted Bun linker on Windows (#17751) — _@Hona_
- [`59c530c`](https://github.com/anomalyco/opencode/commit/59c530cc6cac6992f89d6b8387acd8dd74efc0ca) fix(opencode): teach Kit's test what an ID is (#17745) — _@Hona_
- [`c2ca149`](https://github.com/anomalyco/opencode/commit/c2ca1494e5f2b21655982d694b6bafd4526f147e) fix(opencode): preserve prompt tool enables with empty agent permissions (#17064) — _@jquense_
- [`4ee426b`](https://github.com/anomalyco/opencode/commit/4ee426ba549131c4903a71dfb6259200467aca81) release: v1.2.27 — _@opencode_
- [`5103742`](https://github.com/anomalyco/opencode/commit/510374207dcca69a6f7d2a4bae606822662925a2) fix: vcs watcher if statement (#17673) — _@rekram1-node_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
