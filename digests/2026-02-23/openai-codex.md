# openai/codex — 2026-02-23

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-02-22T23:59:59.000Z → 2026-02-23T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is a wave of multi-agent ("steer"/collaboration) infrastructure landing alongside two notable user-facing features: **voice transcription** in the TUI via press-and-hold spacebar (#3381) and a reworked **`/clear`** that starts a fresh chat on a clean terminal, with a macOS Terminal bug fix (#12520). Voice is the most worth-trying change for end users.

On the multi-agent track, the `steer` collaboration-modes feature flag was removed and the code path is now the default direction (#12028). Supporting work from jif-oai includes landing **SQLite** persistence (#12141), agent role metrics (#12579), agent nicknames on the model (#12575), keeping dead agents visible in the picker (#12570), a memories doc + feature-flag rename from `memory_tool` to `memories` (#12565, #12580), a UUID helper (#12500), plus several smaller renames/awaiter chores (#12559, #12562, #12568). If you only read one, skim #12028 to understand what "always-on steer" implies.

TUI reliability got several fixes worth noting: a race where pressing Enter while the final answer was still streaming left the UI in a dead state (#12569, fixing issue #11008); a `panic!` in `map_owned_wrapped_line_to_range` replaced with recoverable handling (#12609); ellipsis truncation for the status indicator (#12540); and showing in-progress background terminal commands under the status header (#12549).

Under the hood, tool runtimes now share an `Arc`-based `ToolCtx` (#12583), the unix module layout for `exec-server`/shell-escalation was normalized (#12556), MCP policy construction was decoupled from the escalate server (#12555), and the app-server boxes its request-dispatch future to reduce stack pressure (#12421). Realtime gained `spawn_transcript` delegation handling (#12619), `view_image` now returns image content via the Responses API (#12553), and `exec resume` accepts `--output-last-message` after the subcommand (#12541). Test infra: zsh fork is now vendored via DotSlash to stabilize tests (#12518), and Bazel CI prints failed test.log tails (#12576). Routine dependabot bumps: owo-colors, syn, libc (#12530, #12529, #12528). No releases, PRs, or issues were reported in the window.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`10a3ada`](https://github.com/openai/codex/commit/10a3adad8ee8d2cc5a22d0d85622d9ea84d2989f) Handle realtime spawn_transcript delegation (#12619) — _@aibrahim-oai_
- [`855e275`](https://github.com/openai/codex/commit/855e275591dfd85ab278916ddfb78365768d4a2f) voice transcription (#3381) — _@nornagon-openai_
- [`50953ea`](https://github.com/openai/codex/commit/50953ea39ad7a2c675a411b1175ad8f93806414a) fix: show command running in background terminal in details under status indicator (#12549) — _@sayan-oai_
- [`cd5acf6`](https://github.com/openai/codex/commit/cd5acf6af767db50935c018bb9902dd249adec1c) chore(deps): bump owo-colors from 4.2.3 to 4.3.0 in /codex-rs (#12530) — _@dependabot[bot]_
- [`be42030`](https://github.com/openai/codex/commit/be4203023d0514abcfba94a0f2aacb592d72c3dc) fix(tui): queue steer Enter while final answer is still streaming to prevent dead state (#12569) — _@guidedways_
- [`48e08a1`](https://github.com/openai/codex/commit/48e08a156133c5f53bbfdcafd13e0dd03379cb6a) fix(tui): recover on owned wrap mapping mismatch (#12609) — _@fcoury_
- [`bfe622f`](https://github.com/openai/codex/commit/bfe622f4955b8a25ad64253b7ebb4f80a452c904) fix: add ellipsis for truncated status indicator (#12540) — _@sayan-oai_
- [`7f75e74`](https://github.com/openai/codex/commit/7f75e74201363acd419470d8e96479b0c1708076) Use Arc-based ToolCtx in tool runtimes (#12583) — _@bolinfest_
- [`fec517c`](https://github.com/openai/codex/commit/fec517cd38ee47f552b911f8708f3e7852ca922e) chore(deps): bump syn from 2.0.114 to 2.0.117 in /codex-rs (#12529) — _@dependabot[bot]_
- [`5c52ef8`](https://github.com/openai/codex/commit/5c52ef8e6037c01d9e1c0bade4ce1be21b3950c1) chore(deps): bump libc from 0.2.180 to 0.2.182 in /codex-rs (#12528) — _@dependabot[bot]_
- [`3cea3e6`](https://github.com/openai/codex/commit/3cea3e665e238eaa431ca443e353a7f7f34e6462) app-server: box request dispatch future to reduce stack pressure (#12421) — _@charley-oai_
- [`5221575`](https://github.com/openai/codex/commit/5221575f2336b17e2ec13f943d93356138d2590f) refactor: normalize unix module layout for exec-server and shell-escalation (#12556) — _@bolinfest_
- [`a606e85`](https://github.com/openai/codex/commit/a606e85859e88c56ba47fe8c2884fd15358ef722) tweaked /clear to support clear + new chat, also fix minor bug for macos terminal (#12520) — _@won-openai_
- [`6e60f72`](https://github.com/openai/codex/commit/6e60f724bcd18e722086e646f9d7e4f19214a9f1) remove feature flag collaboration modes (#12028) — _@aibrahim-oai_
- [`3b6c50d`](https://github.com/openai/codex/commit/3b6c50d925027d5d315a2a6ea77dd062a4f0c697) chore: better bazel test logs (#12576) — _@jif-oai_
- [`eace7c6`](https://github.com/openai/codex/commit/eace7c661026658873d54d452db1f9434d8ee8eb) feat: land sqlite (#12141) — _@jif-oai_
- [`2119532`](https://github.com/openai/codex/commit/2119532a812831578a8ffeb2b5ac014037518106) feat: role metrics multi-agent (#12579) — _@jif-oai_
- [`862a5b3`](https://github.com/openai/codex/commit/862a5b3eb396fd8cd4d3f1fc47261415a7ff1927) Allow exec resume to parse output-last-message flag after command (#12541) — _@etraut-openai_
- [`e8709bc`](https://github.com/openai/codex/commit/e8709bc11a00f9a5ad7976c011dad724d9b6b712) chore: rename memory feature flag (#12580) — _@jif-oai_
- [`764ac94`](https://github.com/openai/codex/commit/764ac9449f82ef3df09671138179d91017793515) feat: add uuid helper (#12500) — _@jif-oai_
- [`cf0210b`](https://github.com/openai/codex/commit/cf0210bf22c5b2f0dbf5c2610add895f6ee8e96b) feat: agent nick names to model (#12575) — _@jif-oai_
- [`829d108`](https://github.com/openai/codex/commit/829d1080f641197c3ce8351c3e9951dccc3636c6) feat: keep dead agents in the agent picker (#12570) — _@jif-oai_
- [`9d826a2`](https://github.com/openai/codex/commit/9d826a20c69e5f3dc6c2196e8e7fbce7912ec5f3) fix: TUI constraint (#12571) — _@jif-oai_
- [`6fbf19e`](https://github.com/openai/codex/commit/6fbf19ef5f8f43712d3bb0e116df6adbdeb66d65) chore: phase 2 name (#12568) — _@jif-oai_
- [`2b9d0c3`](https://github.com/openai/codex/commit/2b9d0c385fba4356ddea5bfa5f615f767ce34136) chore: add doc to memories (#12565) — _@jif-oai_
- [`cfcbff4`](https://github.com/openai/codex/commit/cfcbff4c482cb37f13975972cb62ff2f632f8387) chore: awaiter (#12562) — _@jif-oai_
- [`8e93129`](https://github.com/openai/codex/commit/8e9312958d9c71fa8850605852595754bb522fed) chore: nit name (#12559) — _@jif-oai_
- [`956f2f4`](https://github.com/openai/codex/commit/956f2f439ed2fc6a82e571adefe8dafdd7aaf7ed) refactor: decouple MCP policy construction from escalate server (#12555) — _@bolinfest_
- [`335a4e1`](https://github.com/openai/codex/commit/335a4e1cbceb96c280e070729b8759af045b6211) Return image content from view_image (#12553) — _@pakrym-oai_
- [`e8949f4`](https://github.com/openai/codex/commit/e8949f45070dfed64e0e1bc47469180177432616) test: vendor zsh fork via DotSlash and stabilize zsh-fork tests (#12518) — _@bolinfest_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
