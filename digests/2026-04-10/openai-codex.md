# openai/codex — 2026-04-10

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-09T23:59:59.000Z → 2026-04-10T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is an incident-driven revert: PR #16969 ("Notify Workspace Owner When Usage Limit is Reached"), which had landed earlier the same day, was rolled back in #17391 after triggering 500s on the OpenAI workspace's `accountscheckversion` endpoint (sev3-2026-04-10). If you read one thing, read the revert and the original PR side-by-side to understand the regression.

The bulk of activity centers on **Realtime V2 / background agent** work from aibrahim-oai. #17264 streams background-agent progress to the Realtime client while the task is still running; #17306 builds on it to queue `response.create` calls while a response is active and flush after `response.done`. #17278 renames the delegation tool to `background_agent`, #17280 refactors the input task select-loop into named handlers, #17267 stops treating `response.done` as a Codex handoff, and #17363 strengthens the prompt so the realtime model delegates repo/command/implementation work to the backend agent by default.

**Guardian** also saw a coherent set of changes: #17298 introduces stable `review_id`s exposed via app-server `item/auto…`, #17269 sends only transcript deltas on guardian follow-ups (instead of the full transcript), and #17194 / #17249 add `parent_thread_id` to the guardian prompt and subagent-start analytics.

**App-server / reliability** highlights: #17223 fixes MCP leaks by unifying disconnect and explicit-unsubscribe teardown; #17214 makes the rollout recorder reliable, with real Result acks for flush/persist/shutdown and retry on failed flushes; #16344 moves exec-server to session-scoped ownership so WS disconnects no longer kill running remote exec processes; #17288 installs the rustls crypto provider to fix a panic in `codex --remote wss://…` (#17283); #17371 adds a pipelined config-RPC regression test.

**TUI / hooks / misc**: #17266 quiets transient hook activity in history, #17189 emits typed `hookPrompt` item-completed notifications, #17073 surfaces `/clear` as a distinct `SessionStart` source, #17187 adds optional thread-title to the TUI status line, #17210 renders MCP `outputSchema` in code-mode, #17263 preserves tool-search result ordering (was alpha-sorted via BTreeMap), and #14568 adds split-carveout support to the Windows elevated sandbox.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`0a99943`](https://github.com/openai/codex/commit/0a99943a9404a1fc38bfc235e8eeeb1c9fed37f9) app-server: add pipelined config rpc regression test (#17371) — _@euroelessar_
- [`930e5ad`](https://github.com/openai/codex/commit/930e5adb7eae9a9fd35f9649ddc192e6308d3bbc) Revert "Option to Notify Workspace Owner When Usage Limit is Reached" (#17391) — _@shijie-oai_
- [`a3be741`](https://github.com/openai/codex/commit/a3be74143ab7a1d9641b234ffb11f826cee471e1) fix(guardian, app-server): introduce guardian review ids (#17298) — _@owenlin0_
- [`7999b0f`](https://github.com/openai/codex/commit/7999b0f60f048ca8398ec988f3aabd09d278e058) Support clear SessionStart source (#17073) — _@abhinav-oai_
- [`87b9275`](https://github.com/openai/codex/commit/87b9275fff599139c9ae5d28820a85f0ee792358) [codex] Improve hook status rendering (#17266) — _@abhinav-oai_
- [`147cb84`](https://github.com/openai/codex/commit/147cb8411267062c5c2b93e95171ec13c943338c) add parent-id to guardian context (#17194) — _@won-openai_
- [`aac1e74`](https://github.com/openai/codex/commit/aac1e74cd5a9301009a44a0a536d0d5d15f13cd8) Add thread title to configurable TUI status line (#17187) — _@canvrno-oai_
- [`5779be3`](https://github.com/openai/codex/commit/5779be314a5bb2f2fc5ec3f23eaa4ed63e31142f) [codex-analytics] add compaction analytics event (#17155) — _@rhan-oai_
- [`029fc63`](https://github.com/openai/codex/commit/029fc63d13b943c1f10c8c66da6fa16488fc1ed5) Strengthen realtime backend delegation prompt (#17363) — _@aibrahim-oai_
- [`8732897`](https://github.com/openai/codex/commit/87328976f644a283b51801421737a320f5ed2216) fix: main (#17352) — _@jif-oai_
- [`2e81eac`](https://github.com/openai/codex/commit/2e81eac004e280fdb447f0d8b74dfc76f4db2913) Queue Realtime V2 response.create while active (#17306) — _@aibrahim-oai_
- [`88165e1`](https://github.com/openai/codex/commit/88165e179a9547e6ff56a6538462f6efdf04db46) feat(guardian): send only transcript deltas on guardian followups (#17269) — _@owenlin0_
- [`d39a722`](https://github.com/openai/codex/commit/d39a722865f5e6af210f752a6603329b2566f676) feat: description multi-agent v2 (#17338) — _@jif-oai_
- [`8d58899`](https://github.com/openai/codex/commit/8d58899297deeccdebb1b162d9738eda58c46790) fix: MCP leaks in app-server (#17223) — _@jif-oai_
- [`8035cb0`](https://github.com/openai/codex/commit/8035cb03f1a5061d0342cb8fa3a10a18068ca683) feat: make rollout recorder reliable against errors (#17214) — _@jif-oai_
- [`085ffb4`](https://github.com/openai/codex/commit/085ffb445642452d6fcf79dcda34e88f4d108afb) feat: move exec-server ownership (#16344) — _@jif-oai_
- [`7bbe3b6`](https://github.com/openai/codex/commit/7bbe3b6011ca66a20260a3a352cca1e98f532c4f) Add output_schema to code mode render (#17210) — _@vivi_
- [`1de0085`](https://github.com/openai/codex/commit/1de0085418340b3e7f7136cfb5e56b4bebafc584) Stream Realtime V2 background agent progress (#17264) — _@aibrahim-oai_
- [`4e910bf`](https://github.com/openai/codex/commit/4e910bf151d5a037dc522939c837ec5a81b516ec) adding parent_thread_id in guardian (#17249) — _@won-openai_
- [`26a28af`](https://github.com/openai/codex/commit/26a28afc6da5e570b63b92da7300e714f0a529b6) Extract realtime input task handlers (#17280) — _@aibrahim-oai_
- [`60236e8`](https://github.com/openai/codex/commit/60236e8c920f59ddec4faa70f7a7d58a2984b2f9) Rename Realtime V2 tool to background_agent (#17278) — _@aibrahim-oai_
- [`9f2a585`](https://github.com/openai/codex/commit/9f2a58515354ef1f919c3bd43696be4fd1879499) Option to Notify Workspace Owner When Usage Limit is Reached (#16969) — _@richardopenai_
- [`36712d8`](https://github.com/openai/codex/commit/36712d854646d8733a692cd6d05729ab155ec668) Install rustls provider for remote websocket client (#17288) — _@etraut-openai_
- [`f6cc2bb`](https://github.com/openai/codex/commit/f6cc2bb0cb030e5c8c3324a96e6f9a0daf264ff9) Emit live hook prompts before raw-event filtering (#17189) — _@abhinav-oai_
- [`04fc208`](https://github.com/openai/codex/commit/04fc208b6dae3b76ba535db54de716aa818bb70d) preserve search results order in tool_search_output (#17263) — _@sayan-oai_
- [`b976e70`](https://github.com/openai/codex/commit/b976e701a85eb6a7432ab5200a242fc2e00cc514) fix: support split carveouts in windows elevated sandbox (#14568) — _@viyatb-oai_
- [`3222487`](https://github.com/openai/codex/commit/32224878b31b81a9f1ea92c6cce41fde20fbb443) Stop Realtime V2 response.done delegation (#17267) — _@aibrahim-oai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
