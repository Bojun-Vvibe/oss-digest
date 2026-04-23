# OpenHands/OpenHands — 2026-04-03

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-04-02T23:59:59.000Z → 2026-04-03T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is the continued **V1 API migration (APP-1197)** led by `tofarr`: settings, secrets, and health routes were consolidated into the `app_server` package and shipped as `/api/v1/*` endpoints, with their V0 counterparts marked deprecated (commits 732a1c1, e38eda4, 0a9570e, b9b10eb, ce6d5b7). A flurry of related draft PRs (#13725, #13726, #13727, #13728, #13729, #13732, #13733, #13734) were closed without merge as the work was rolled up into the landed commits — worth tracking if you depend on V0 endpoints for settings, secrets, git providers, user/*, microagents, options/models, agents, or security-analyzers.

Security and supply-chain fixes also landed: a credential leak in callback event logging was fixed (commit a458c9b), CVE-2026-25645 was patched by bumping `requests` to 2.33.1 (#13692) and CVE-2026-22815 by bumping `aiohttp` to 3.13.5 (#13705), plus a security-group dependency bump (#13764). Relatedly, #13757 proposes stopping `sk-oh-` token exposure in URL query params with a deprecated fallback — closed unmerged but security-relevant.

On the product side, resolver conversations can now be routed to claimed org workspaces across GitHub (#13713), GitLab (d058323), and Slack (a65ddc3); the Jira equivalent (#13760) was closed as draft. The frontend now displays the LLM model on conversation cards and headers (#13616), and conversation metadata gained tag storage (#13680).

Notable open PRs to review: #13510 normalizes null `llm_base_url` from the settings API in the frontend, #13756 makes the Slack resolver update its initial ack with the final result (fixes #13736), #13753 strips unsupported LiteLLM params for OpenRouter Xiaomi models (fixes #13563), and #13750 adds a `/events/latest-agent-response` REST endpoint (closed as draft but useful for SDK consumers).

A large cluster of small hardening PRs from `suyua9` and `haimingZZ` (#13741–#13772) clamps negative pagination `page_id` values, trims env-var helpers, normalizes feature flags, and rejects malformed JSON bodies across `app_server` — low-risk individually but collectively tighten the V1 surface. No releases were cut today.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

- [#13510](https://github.com/OpenHands/OpenHands/pull/13510) **fix(frontend): normalize null llm base url from settings api** — _by @antonstrobe, updated 2026-04-03T23:58:55Z_
- [#13772](https://github.com/OpenHands/OpenHands/pull/13772) **fix(app_server): ignore invalid title poll payloads** — _by @suyua9, updated 2026-04-03T16:49:01Z_
- [#13768](https://github.com/OpenHands/OpenHands/pull/13768) **fix(app_server): trim config env helpers** — _by @suyua9, updated 2026-04-03T15:54:00Z_
- [#13767](https://github.com/OpenHands/OpenHands/pull/13767) **fix(app_server): normalize web client feature flags** — _by @suyua9, updated 2026-04-03T15:47:29Z_
- [#13766](https://github.com/OpenHands/OpenHands/pull/13766) **fix(frontend): explain OpenAI-compatible provider settings** — _by @suyua9, updated 2026-04-03T15:46:52Z_
- [#13765](https://github.com/OpenHands/OpenHands/pull/13765) **fix(app_server): clamp negative event callback page ids** — _by @suyua9, updated 2026-04-03T15:42:42Z_
- [#13756](https://github.com/OpenHands/OpenHands/pull/13756) **fix(slack): update initial resolver ack with final result** — _by @nehaaprasad, updated 2026-04-03T14:05:09Z_
- [#13753](https://github.com/OpenHands/OpenHands/pull/13753) **fix: strip unsupported params for OpenRouter Xiaomi models** — _by @nehaaprasad, updated 2026-04-03T08:43:52Z_
- [#13751](https://github.com/OpenHands/OpenHands/pull/13751) **fix(app_server): require true to expose enterprise sso** — _by @haimingZZ, updated 2026-04-03T06:53:09Z_
- [#13752](https://github.com/OpenHands/OpenHands/pull/13752) **fix(app_server): trim aws s3 secure env flag** — _by @haimingZZ, updated 2026-04-03T06:52:49Z_
- [#13749](https://github.com/OpenHands/OpenHands/pull/13749) **fix(app_server): clamp negative process sandbox page ids** — _by @haimingZZ, updated 2026-04-03T06:28:52Z_
- [#13748](https://github.com/OpenHands/OpenHands/pull/13748) **fix(app_server): clamp negative remote sandbox page ids** — _by @haimingZZ, updated 2026-04-03T04:13:41Z_
- [#13747](https://github.com/OpenHands/OpenHands/pull/13747) **fix(app_server): clamp negative preset sandbox page ids** — _by @haimingZZ, updated 2026-04-03T04:02:30Z_
- [#13746](https://github.com/OpenHands/OpenHands/pull/13746) **fix(app_server): strip .git from plugin display names** — _by @haimingZZ, updated 2026-04-03T03:53:20Z_
- [#13745](https://github.com/OpenHands/OpenHands/pull/13745) **fix(app_server): ignore invalid event search page ids** — _by @haimingZZ, updated 2026-04-03T03:47:13Z_
- [#13743](https://github.com/OpenHands/OpenHands/pull/13743) **fix(app_server): use unique cursor for skills pagination** — _by @haimingZZ, updated 2026-04-03T03:41:21Z_
- [#13709](https://github.com/OpenHands/OpenHands/pull/13709) **docs: update README CLI docs link** — _by @xsfX20, updated 2026-04-03T03:23:02Z_
- [#13742](https://github.com/OpenHands/OpenHands/pull/13742) **fix(app_server): reject non-object pending message bodies** — _by @haimingZZ, updated 2026-04-03T03:21:25Z_
- [#13712](https://github.com/OpenHands/OpenHands/pull/13712) **fix(app_server): fall back to default sandbox spec for file reads** — _by @xsfX20, updated 2026-04-03T00:24:17Z_


## Closed PRs (not merged)

- [#13757](https://github.com/OpenHands/OpenHands/pull/13757) **fix(security): stop exposing sk-oh- tokens in URL query parameters** — _by @simonrosenberg, closed 2026-04-03T20:06:08Z_
- [#13760](https://github.com/OpenHands/OpenHands/pull/13760) **fix(backend): route Jira resolver conversations to claimed org workspaces** — _by @hieptl, closed 2026-04-03T19:28:30Z_
- [#13763](https://github.com/OpenHands/OpenHands/pull/13763) **chore(deps): bump the version-all group with 6 updates** — _by @dependabot[bot], closed 2026-04-03T19:05:55Z_
- [#13734](https://github.com/OpenHands/OpenHands/pull/13734) **APP-1197 Deprecate /api/options/models endpoint** — _by @tofarr, closed 2026-04-03T12:41:57Z_
- [#13726](https://github.com/OpenHands/OpenHands/pull/13726) **APP-1197 Add V1 git providers endpoints and deprecate V0** — _by @tofarr, closed 2026-04-03T12:43:32Z_
- [#13727](https://github.com/OpenHands/OpenHands/pull/13727) **APP-1197 Deprecate conversation feedback, config, and trajectory endpoints** — _by @tofarr, closed 2026-04-03T12:42:56Z_
- [#13728](https://github.com/OpenHands/OpenHands/pull/13728) **APP-1197 Deprecate /api/options/agents and /api/options/security-analyzers** — _by @tofarr, closed 2026-04-03T12:42:43Z_
- [#13729](https://github.com/OpenHands/OpenHands/pull/13729) **APP-1197 Add V1 secrets endpoints and deprecate V0** — _by @tofarr, closed 2026-04-03T12:42:31Z_
- [#13732](https://github.com/OpenHands/OpenHands/pull/13732) **APP-1197 Deprecate all /api/user/* endpoints** — _by @tofarr, closed 2026-04-03T12:42:16Z_
- [#13733](https://github.com/OpenHands/OpenHands/pull/13733) **APP-1197 Deprecate microagent-related endpoints** — _by @tofarr, closed 2026-04-03T12:42:07Z_
- [#13725](https://github.com/OpenHands/OpenHands/pull/13725) **APP-1197 Add V1 settings endpoints and deprecate V0** — _by @tofarr, closed 2026-04-03T12:38:30Z_
- [#13750](https://github.com/OpenHands/OpenHands/pull/13750) **feat: Add /events/latest-agent-response endpoint to REST API** — _by @xingyaoww, closed 2026-04-03T06:15:34Z_
- [#13741](https://github.com/OpenHands/OpenHands/pull/13741) **fix(app_server): reject non-object pending message bodies** — _by @xsfX20, closed 2026-04-03T03:21:59Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`8ce3089`](https://github.com/OpenHands/OpenHands/commit/8ce3089a68018c507025c7410ee3ba25856b23fd) Add contributors section to README (#13696) — _@jamiechicago312_
- [`b9b10eb`](https://github.com/OpenHands/OpenHands/commit/b9b10ebf5ebb0ff23763d3a1db34c4875fed4626) APP-1197 Mark conversation endpoints as deprecated with updated docs (#13775) — _@tofarr_
- [`ce6d5b7`](https://github.com/OpenHands/OpenHands/commit/ce6d5b77c40514e914fa3b6a4c77e8b6a007fb7c) Add more endpoints as deprecated (microagent repository endpoints) (#13776) — _@tofarr_
- [`a458c9b`](https://github.com/OpenHands/OpenHands/commit/a458c9b785a1b016e9f8c4e190a0fd9960c6e58e) Fix credential leak in callback event logging (#13718) — _@simonrosenberg_
- [`a65ddc3`](https://github.com/OpenHands/OpenHands/commit/a65ddc3db6294cd6f1e0a56a849603ecad85a338) feat(backend): route Slack resolver conversations to claimed org workspaces (#13758) — _@hieptl_
- [`732a1c1`](https://github.com/OpenHands/OpenHands/commit/732a1c19911a182653556c18c4fd1c19a38ff44a) APP-1197 Migrate secrets endpoints to V1 API (#13770) — _@tofarr_
- [`d058323`](https://github.com/OpenHands/OpenHands/commit/d058323a8725d45086e9d5a44a6ad55247c3a69d) feat(backend): route gitlab resolver conversations to claimed org workspaces (#13755) — _@hieptl_
- [`7d04cff`](https://github.com/OpenHands/OpenHands/commit/7d04cffe4ec3e723fee04d89a8ba0e19d910c049) Fix CVE-2026-25645: Update requests to 2.33.1 (#13692) — _@aivong-openhands_
- [`6ad27b7`](https://github.com/OpenHands/OpenHands/commit/6ad27b77bb6ac4356682a4e962465e9c25a0210c) feat(backend): route resolver conversations to claimed org workspaces (#13713) — _@hieptl_
- [`2739fc8`](https://github.com/OpenHands/OpenHands/commit/2739fc8fbebf5bad41113b89bb80848735756e37) Fix CVE-2026-22815: Update aiohttp to 3.13.5 (#13705) — _@aivong-openhands_
- [`38b7e10`](https://github.com/OpenHands/OpenHands/commit/38b7e102526298e31d66f84d4bd32dd201a401ed) chore(deps): bump the security-all group across 1 directory with 2 updates (#13764) — _@dependabot[bot]_
- [`7b7d1c0`](https://github.com/OpenHands/OpenHands/commit/7b7d1c0c55fa73f01555e2d5f5a908a5a7a5c996) Update CODEOWNERS (#13762) — _@mamoodi_
- [`e38eda4`](https://github.com/OpenHands/OpenHands/commit/e38eda4ac9709d6d45a0aae50cf81767ff48b65a) APP-1197 Migrate settings endpoints to V1 API (/api/v1/settings) (#13759) — _@tofarr_
- [`99c19b6`](https://github.com/OpenHands/OpenHands/commit/99c19b6ef047cdea2e2121f4492405e8996f744c) enterprise lock update openhands aci to version already in openhands (#13704) — _@aivong-openhands_
- [`0731e8c`](https://github.com/OpenHands/OpenHands/commit/0731e8c68a8f80c0157c13ff4c35e79ed655e39a) feat(frontend): Display LLM model on conversation cards and header (#13616) — _@sjathin_
- [`0a9570e`](https://github.com/OpenHands/OpenHands/commit/0a9570eea22ca0f42dbd055d03d146375853c56c) APP-1197 Consolidate health routes to app_server package (#13724) — _@tofarr_
- [`c00f90b`](https://github.com/OpenHands/OpenHands/commit/c00f90bf86715dc8ea342efb835f92c74077be02) feat: add tags storage for conversation metadata (#13680) — _@malhotra5_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
