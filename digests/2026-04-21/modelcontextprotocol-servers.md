# modelcontextprotocol/servers — 2026-04-21

> Reference MCP server implementations; canonical examples for the protocol.

**Window:** 2026-04-20T23:59:59.000Z → 2026-04-21T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

No releases or merged PRs landed in the 24h window — the day's signal is almost entirely a flood of new/refreshed contributor PRs against the reference servers, plus one fresh bug report.

The only new issue is [#3998](https://github.com/modelcontextprotocol/servers/issues/3998), reporting that `headroom wrap claude` (Headroom 0.8.2) fails authentication against a Claude Pro license when proxying through `127.0.0.1:8787`. Worth triaging since it touches the wrapper/auth flow that many users hit first.

On the PR side, contributor `Will-hxw` opened a burst of seven small, focused fixes in a single sitting — likely the most reviewable batch of the day:
- [#3990](https://github.com/modelcontextprotocol/servers/pull/3990) adds `.describe()` to 18 filesystem schema properties (Gemini CLI compatibility)
- [#3992](https://github.com/modelcontextprotocol/servers/pull/3992) adds the missing description on `resourceType` in `get-resource-reference` (everything)
- [#3991](https://github.com/modelcontextprotocol/servers/pull/3991) corrects `get-env` docs to reflect the `key`-required behavior
- [#3993](https://github.com/modelcontextprotocol/servers/pull/3993) makes `release.py`'s `has_changes()` count `.lock` files so dependabot-only bumps aren't skipped (overlaps with [#3892](https://github.com/modelcontextprotocol/servers/pull/3892))
- [#3994](https://github.com/modelcontextprotocol/servers/pull/3994) stops MCP roots from clobbering CLI-provided `allowedDirectories` (overlaps with [#3616](https://github.com/modelcontextprotocol/servers/pull/3616), [#3612](https://github.com/modelcontextprotocol/servers/pull/3612))
- [#3995](https://github.com/modelcontextprotocol/servers/pull/3995) and [#3996](https://github.com/modelcontextprotocol/servers/pull/3996) re-do the Windows UNC path fix and fetch tool annotations — both already have multiple competing PRs ([#3791](https://github.com/modelcontextprotocol/servers/pull/3791), [#3921](https://github.com/modelcontextprotocol/servers/pull/3921), [#3601](https://github.com/modelcontextprotocol/servers/pull/3601); [#3650](https://github.com/modelcontextprotocol/servers/pull/3650), [#3876](https://github.com/modelcontextprotocol/servers/pull/3876)). Maintainers will need to pick winners rather than merge all of them.

Also new today: [#3997](https://github.com/modelcontextprotocol/servers/pull/3997) makes `mcp-server-git --repository` walk up to find `.git/` so any path inside a worktree works (fixes the longstanding [#3029](https://github.com/modelcontextprotocol/servers/issues/3029) friction), and [#3989](https://github.com/modelcontextprotocol/servers/pull/3989) corrects invalid JSON in the Zed `uvx` config snippets in the git and time READMEs.

The remaining ~50 PRs in the window are touch-only `updated_at` bumps from the existing backlog (filesystem UNC/symlink/roots fixes, everything-server tool annotations, fetch schema/encoding fixes) — no new activity, just churn. The duplication around UNC paths, MCP-roots-vs-CLI merging, and everything-server annotations is now severe enough that maintainer arbitration is the bottleneck, not contributions.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

- [#3732](https://github.com/modelcontextprotocol/servers/pull/3732) **fix(schema): add missing property descriptions across official MCP servers** — _by @radeshgovind-2005, updated 2026-04-21T17:11:03Z_
- [#3891](https://github.com/modelcontextprotocol/servers/pull/3891) **feat(everything): add tool annotations to all tools** — _by @m1lestones, updated 2026-04-21T16:49:36Z_
- [#3806](https://github.com/modelcontextprotocol/servers/pull/3806) **fix(filesystem): wait for roots initialization before handling tool calls** — _by @majiayu000, updated 2026-04-21T16:15:00Z_
- [#3616](https://github.com/modelcontextprotocol/servers/pull/3616) **fix(filesystem): merge MCP roots with CLI-provided directories instead of replacing them** — _by @flobo3, updated 2026-04-21T15:53:46Z_
- [#3812](https://github.com/modelcontextprotocol/servers/pull/3812) **fix(fetch): make fetch tool schema Gemini/OpenAPI 3.0 compatible** — _by @Dharit13, updated 2026-04-21T15:00:02Z_
- [#3163](https://github.com/modelcontextprotocol/servers/pull/3163) _(draft)_ **feat(everything): add trigger-agentic-sampling tool** — _by @olaservo, updated 2026-04-21T14:51:06Z_
- [#3334](https://github.com/modelcontextprotocol/servers/pull/3334) **Add URL Elicitation cases** — _by @evalstate, updated 2026-04-21T14:50:59Z_
- [#3678](https://github.com/modelcontextprotocol/servers/pull/3678) **feat(filesystem): add --follow-symlinks and --symlink-depth options** — _by @CodeForgeNet, updated 2026-04-21T14:49:54Z_
- [#3202](https://github.com/modelcontextprotocol/servers/pull/3202) _(draft)_ **feat(everything): add resource collection example** — _by @olaservo, updated 2026-04-21T14:49:34Z_
- [#3175](https://github.com/modelcontextprotocol/servers/pull/3175) _(draft)_ **Register MCP reference servers in the official MCP Registry** — _by @olaservo, updated 2026-04-21T14:49:29Z_
- [#3246](https://github.com/modelcontextprotocol/servers/pull/3246) **feat(everything): add tool-level annotations to get-annotated-message** — _by @olaservo, updated 2026-04-21T14:49:26Z_
- [#3274](https://github.com/modelcontextprotocol/servers/pull/3274) **feat(time): add time_ prefix to tool names for consistency** — _by @Sean-Kenneth-Doherty, updated 2026-04-21T14:49:14Z_
- [#2816](https://github.com/modelcontextprotocol/servers/pull/2816) **feat(filesystem): add append_file and write_or_update_file tools** — _by @agn-7, updated 2026-04-21T14:49:09Z_
- [#3543](https://github.com/modelcontextprotocol/servers/pull/3543) **feat(everything): add tool annotations to all 18 tools** — _by @nielskaspers, updated 2026-04-21T14:49:08Z_
- [#3323](https://github.com/modelcontextprotocol/servers/pull/3323) **feat(memory): expose knowledge graph as MCP Resource** — _by @RaidLZ, updated 2026-04-21T14:48:59Z_
- [#3273](https://github.com/modelcontextprotocol/servers/pull/3273) **added read_binary_file tool for file system MCP server** — _by @robertyates, updated 2026-04-21T14:48:59Z_
- [#3895](https://github.com/modelcontextprotocol/servers/pull/3895) **feat(everything): add URL elicitation example (SEP-1036)** — _by @JosephDoUrden, updated 2026-04-21T14:48:52Z_
- [#3874](https://github.com/modelcontextprotocol/servers/pull/3874) **feat(memory): add tool annotations** — _by @ykshah1309, updated 2026-04-21T14:48:51Z_
- [#3181](https://github.com/modelcontextprotocol/servers/pull/3181) **Feature/distill token optimization** — _by @Tomo1912, updated 2026-04-21T14:48:49Z_
- [#3805](https://github.com/modelcontextprotocol/servers/pull/3805) **test(filesystem): add regression tests for Docker Linux path handling** — _by @majiayu000, updated 2026-04-21T14:48:40Z_
- [#3385](https://github.com/modelcontextprotocol/servers/pull/3385) **scripts: add deterministic CI check-state classifier** — _by @davidahmann, updated 2026-04-21T14:48:38Z_
- [#3890](https://github.com/modelcontextprotocol/servers/pull/3890) **feat: Add compare_directories tool for directory comparison** — _by @nagual2, updated 2026-04-21T14:48:30Z_
- [#3245](https://github.com/modelcontextprotocol/servers/pull/3245) **test(filesystem): add MCP SDK regression coverage for directory_tree** — _by @lopopolo-openai, updated 2026-04-21T14:48:30Z_
- [#3243](https://github.com/modelcontextprotocol/servers/pull/3243) **Enable Dependabot** — _by @koic, updated 2026-04-21T14:48:29Z_
- [#3876](https://github.com/modelcontextprotocol/servers/pull/3876) **fix: add tool annotations to server-fetch** — _by @Chelebii, updated 2026-04-21T14:48:26Z_
- [#3875](https://github.com/modelcontextprotocol/servers/pull/3875) **feat(filesystem): add idempotentHint and openWorldHint annotations** — _by @ykshah1309, updated 2026-04-21T14:48:24Z_
- [#3650](https://github.com/modelcontextprotocol/servers/pull/3650) **feat(fetch): add tool annotations to server-fetch** — _by @jasonmatthewsuhari, updated 2026-04-21T14:48:21Z_
- [#3260](https://github.com/modelcontextprotocol/servers/pull/3260) **ci: add MCP interface diff workflow for Everything server** — _by @SamMorrowDrums, updated 2026-04-21T14:48:21Z_
- [#3748](https://github.com/modelcontextprotocol/servers/pull/3748) **chore(deps): bump the uv group across 3 directories with 2 updates** — _by @dependabot[bot], updated 2026-04-21T14:48:08Z_
- [#3907](https://github.com/modelcontextprotocol/servers/pull/3907) **ci: pin TypeScript workflow actions to immutable SHAs** — _by @grtninja, updated 2026-04-21T14:48:04Z_
- [#3377](https://github.com/modelcontextprotocol/servers/pull/3377) **chore(deps): bump minimatch from 10.0.1 to 10.2.1 in the npm_and_yarn group across 1 directory** — _by @dependabot[bot], updated 2026-04-21T14:48:01Z_
- [#3547](https://github.com/modelcontextprotocol/servers/pull/3547) **fix(fetch): block autonomous fetching when robots.txt returns 5xx** — _by @ElliotJLT, updated 2026-04-21T14:36:31Z_
- [#3595](https://github.com/modelcontextprotocol/servers/pull/3595) **fix(filesystem): handle paths containing tilde (~) without crashing** — _by @VoidChecksum, updated 2026-04-21T14:34:34Z_
- [#3414](https://github.com/modelcontextprotocol/servers/pull/3414) **fix(filesystem): improve roots diagnostics and add tilde path coverage** — _by @ahmetguness, updated 2026-04-21T14:34:30Z_
- [#3513](https://github.com/modelcontextprotocol/servers/pull/3513) **Add structured filesystem startup validation errors** — _by @davidahmann, updated 2026-04-21T14:34:27Z_
- [#3218](https://github.com/modelcontextprotocol/servers/pull/3218) **refactor: update file write operations to use copy instead of rename …** — _by @mahdirajaee, updated 2026-04-21T14:34:23Z_
- [#3303](https://github.com/modelcontextprotocol/servers/pull/3303) **everything: safer CORS + loopback bind for HTTP transports** — _by @TheodorNEngoy, updated 2026-04-21T14:34:20Z_
- [#3149](https://github.com/modelcontextprotocol/servers/pull/3149) **fix(memory): add 'type' to schemas and use passthrough for Gemini CLI…** — _by @ericnjurio, updated 2026-04-21T14:34:19Z_
- [#3607](https://github.com/modelcontextprotocol/servers/pull/3607) **Classify filesystem root and path validation failures** — _by @davidahmann, updated 2026-04-21T14:34:17Z_
- [#3411](https://github.com/modelcontextprotocol/servers/pull/3411) **Assert deterministic tool registration order for capability exposure** — _by @davidahmann, updated 2026-04-21T14:34:16Z_
- [#3615](https://github.com/modelcontextprotocol/servers/pull/3615) **fix(filesystem): preserve UNC paths in access validation** — _by @BillionClaw, updated 2026-04-21T14:34:08Z_
- [#3405](https://github.com/modelcontextprotocol/servers/pull/3405) **Use collision-resistant request IDs for long-running operation notifications** — _by @davidahmann, updated 2026-04-21T14:33:54Z_
- [#3588](https://github.com/modelcontextprotocol/servers/pull/3588) **filesystem: normalize text structuredContent shape** — _by @davidahmann, updated 2026-04-21T14:33:44Z_
- [#3610](https://github.com/modelcontextprotocol/servers/pull/3610) **fix(filesystem): harden file replacement with EPERM fallback** — _by @Chelebii, updated 2026-04-21T14:33:43Z_
- [#3776](https://github.com/modelcontextprotocol/servers/pull/3776) **fix(filesystem): move_file outputSchema returns array not string** — _by @haroldfabla2-hue, updated 2026-04-21T14:33:41Z_
- [#3623](https://github.com/modelcontextprotocol/servers/pull/3623) **fix: correct 6 bugs across multiple servers** — _by @wishhyt, updated 2026-04-21T14:33:41Z_
- [#3601](https://github.com/modelcontextprotocol/servers/pull/3601) **fix(filesystem): normalize UNC paths in access check** — _by @nielskaspers, updated 2026-04-21T14:33:41Z_
- [#3612](https://github.com/modelcontextprotocol/servers/pull/3612) **fix(filesystem): preserve CLI directories when merging with MCP roots** — _by @Bingtagui404, updated 2026-04-21T14:33:39Z_
- [#3361](https://github.com/modelcontextprotocol/servers/pull/3361) **fix(filesystem): add symlink startup test and clarify catch block comment** — _by @olaservo, updated 2026-04-21T14:33:34Z_
- [#3651](https://github.com/modelcontextprotocol/servers/pull/3651) **fix(filesystem): sort directory_tree entries in stable lexicographic order** — _by @jasonmatthewsuhari, updated 2026-04-21T14:33:33Z_
- [#3360](https://github.com/modelcontextprotocol/servers/pull/3360) **fix: prevent server crash on malformed input in fetch and git servers** — _by @TopangaLudwitt, updated 2026-04-21T14:33:33Z_
- [#3540](https://github.com/modelcontextprotocol/servers/pull/3540) **filesystem: make directory_tree output ordering deterministic** — _by @davidahmann, updated 2026-04-21T14:33:31Z_
- [#3948](https://github.com/modelcontextprotocol/servers/pull/3948) **fix(filesystem): tolerate Windows realpath ENOENT** — _by @krot4u, updated 2026-04-21T14:33:30Z_
- [#3753](https://github.com/modelcontextprotocol/servers/pull/3753) **fix: pin 8 unpinned action(s)** — _by @dagecko, updated 2026-04-21T14:33:27Z_
- [#3526](https://github.com/modelcontextprotocol/servers/pull/3526) **filesystem: add stable fail-closed path validation reason codes** — _by @davidahmann, updated 2026-04-21T14:33:27Z_
- [#3296](https://github.com/modelcontextprotocol/servers/pull/3296) **fix(filesystem): handle Windows EPERM when renaming over locked files** — _by @MattBenesch, updated 2026-04-21T14:33:26Z_
- [#3231](https://github.com/modelcontextprotocol/servers/pull/3231) **fix(filesystem): handle negative values in formatSize()** — _by @nulone, updated 2026-04-21T14:33:26Z_
- [#3880](https://github.com/modelcontextprotocol/servers/pull/3880) **fix(fetch): detect encoding for non-UTF-8 pages using charset-normalizer** — _by @olegsa, updated 2026-04-21T14:33:18Z_
- [#3614](https://github.com/modelcontextprotocol/servers/pull/3614) **Revalidate git roots on each request** — _by @davidahmann, updated 2026-04-21T14:33:18Z_
- [#3353](https://github.com/modelcontextprotocol/servers/pull/3353) **fix(filesystem): fix quote style and add fileURLToPath regression test** — _by @olaservo, updated 2026-04-21T14:33:12Z_
- [#3791](https://github.com/modelcontextprotocol/servers/pull/3791) **fix: preserve UNC path prefix in isPathWithinAllowedDirectories** — _by @hashwnath, updated 2026-04-21T14:33:09Z_
- [#3966](https://github.com/modelcontextprotocol/servers/pull/3966) **fix(memory): remove Zod-based outputSchema to fix serialization failures** — _by @ianliuy, updated 2026-04-21T14:32:57Z_
- [#3840](https://github.com/modelcontextprotocol/servers/pull/3840) **fix(ci): use pull_request_target in readme-pr-check so fork PRs work** — _by @yoryocoruxo-ai, updated 2026-04-21T14:32:57Z_
- [#3653](https://github.com/modelcontextprotocol/servers/pull/3653) **fix(memory): add trailing newline to JSONL output** — _by @nickveenhof, updated 2026-04-21T14:32:57Z_
- [#3882](https://github.com/modelcontextprotocol/servers/pull/3882) **fix(filesystem): add optional depth parameter to list_directory** — _by @lui62233, updated 2026-04-21T14:32:54Z_
- [#3921](https://github.com/modelcontextprotocol/servers/pull/3921) **Fix isPathWithinAllowedDirectories for UNC paths on Windows** — _by @Christian-Sidak, updated 2026-04-21T14:32:51Z_
- [#3716](https://github.com/modelcontextprotocol/servers/pull/3716) **fix(filesystem): clarify that search_files matches names, not contents** — _by @chasewhughes, updated 2026-04-21T14:32:48Z_
- [#3965](https://github.com/modelcontextprotocol/servers/pull/3965) **fix(filesystem): normalize path separators in search_files results** — _by @ianliuy, updated 2026-04-21T14:32:38Z_
- [#3893](https://github.com/modelcontextprotocol/servers/pull/3893) **fix(memory): resolve Vitest false positive for expected rejection** — _by @JosephDoUrden, updated 2026-04-21T14:32:38Z_
- [#3792](https://github.com/modelcontextprotocol/servers/pull/3792) **fix(sequential-thinking): remove unused dependency** — _by @kt3k, updated 2026-04-21T14:32:32Z_
- [#3892](https://github.com/modelcontextprotocol/servers/pull/3892) **fix(release): include all file changes in version bump detection** — _by @JosephDoUrden, updated 2026-04-21T14:32:29Z_
- [#3997](https://github.com/modelcontextprotocol/servers/pull/3997) **fix(git): auto-detect repo root from --repository** — _by @FazeelUsmani, updated 2026-04-21T13:38:55Z_
- [#3996](https://github.com/modelcontextprotocol/servers/pull/3996) **fix(fetch): add tool annotations to fetch tool** — _by @Will-hxw, updated 2026-04-21T04:48:02Z_
- [#3995](https://github.com/modelcontextprotocol/servers/pull/3995) **fix(filesystem): handle UNC paths on Windows in path validation** — _by @Will-hxw, updated 2026-04-21T04:20:23Z_
- [#3994](https://github.com/modelcontextprotocol/servers/pull/3994) **fix(filesystem): prevent MCP roots from overriding CLI-provided directories** — _by @Will-hxw, updated 2026-04-21T04:10:15Z_
- [#3993](https://github.com/modelcontextprotocol/servers/pull/3993) **fix(release): include lock files in version bump check** — _by @Will-hxw, updated 2026-04-21T04:00:37Z_
- [#3992](https://github.com/modelcontextprotocol/servers/pull/3992) **fix(everything): add missing description to resourceType arg in get-resource-reference** — _by @Will-hxw, updated 2026-04-21T03:51:11Z_
- [#3991](https://github.com/modelcontextprotocol/servers/pull/3991) **docs(everything): fix get-env description to match actual behavior** — _by @Will-hxw, updated 2026-04-21T03:44:07Z_
- [#3990](https://github.com/modelcontextprotocol/servers/pull/3990) **fix(filesystem): add missing description fields to 18 schema properties** — _by @Will-hxw, updated 2026-04-21T02:56:58Z_
- [#3989](https://github.com/modelcontextprotocol/servers/pull/3989) **docs(git,time): fix invalid JSON in Zed uvx config examples** — _by @abhicris, updated 2026-04-21T01:04:46Z_


## Closed PRs (not merged)

- [#3739](https://github.com/modelcontextprotocol/servers/pull/3739) **feat(fetch): include page title in extracted content** — _by @Christian-Sidak, closed 2026-04-19T05:25:26Z_
- [#3740](https://github.com/modelcontextprotocol/servers/pull/3740) **feat(time): default to configured timezone when omitted** — _by @Christian-Sidak, closed 2026-04-19T05:25:25Z_
- [#3947](https://github.com/modelcontextprotocol/servers/pull/3947) **fix(fetch): add fallback extraction for readability-stripped content** — _by @morozow, closed 2026-04-18T02:43:10Z_
- [#3738](https://github.com/modelcontextprotocol/servers/pull/3738) **fix(filesystem): improve edit_file error with nearest-match diagnostics** — _by @Christian-Sidak, closed 2026-04-19T05:25:28Z_
- [#3852](https://github.com/modelcontextprotocol/servers/pull/3852) **fix: all mcp protocol endpoints (/sse, /message, /mc... in sse.ts** — _by @orbisai0security, closed 2026-04-18T02:43:38Z_


## Notable Issues

- [#3998](https://github.com/modelcontextprotocol/servers/issues/3998) **Headroom 0.8.2, claude and Pro API failed** _[bug]_ — _by @pprados_


## Commits on `main`

_None in window._


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
