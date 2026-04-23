# OpenHands/OpenHands — 2026-04-02

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-04-01T23:59:59.000Z → 2026-04-02T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Most notable today: a security fix landed for **CVE-2026-33699** by bumping `pypdf` to 6.9.2 ([#13689](https://github.com/OpenHands/OpenHands/commit/45f0c77f364498ea45a241fce4f3223d8c950891)), alongside two dependabot bumps in the `security-all` group ([#13706](https://github.com/OpenHands/OpenHands/commit/fe3d33f222dc8376878bd4b65f2e01be450a15e8), [#13607](https://github.com/OpenHands/OpenHands/commit/2b53d44c2a941d185abe17a72afa917eadcd8bfb)). Anyone running self-hosted should pull these.

On the runtime side, `git` was added to the app container's runtime dependencies ([#13715](https://github.com/OpenHands/OpenHands/commit/f76517732dbb8390bffc50fe2bc78c61fdc35373)), with a related draft PR [#13717](https://github.com/OpenHands/OpenHands/pull/13717) opened and quickly closed by tofarr — suggests a recent regression where git was missing from images. Also notable is the addition of API endpoints to **claim and disconnect git organizations** ([#13683](https://github.com/OpenHands/OpenHands/commit/5d593ca6e4cd247824b5de3143ff0f84352d929e)) and a frontend swap from mocked git conversation routing to real API integration ([#13698](https://github.com/OpenHands/OpenHands/commit/7bb567734de6b5d416b1e40d4ab8d75da63c1e1f)) — together these flesh out real multi-org git support. Keycloak gained a Laminar redirect URI on the allhands client ([#13666](https://github.com/OpenHands/OpenHands/commit/1bbf69949831dbbc33dc2eee38e39f5fb85615f0)).

PR activity skewed toward closures-without-merge: rbren's `litellm==1.80.16` exact pin ([#13566](https://github.com/OpenHands/OpenHands/pull/13566), defending against the malicious 1.82.8 wheel from BerriAI/litellm#24512) was closed unmerged, as were several BillionClaw fixes — docker-dev host-user ownership ([#13438](https://github.com/OpenHands/OpenHands/pull/13438)), SQLAlchemy mypy deps ([#13426](https://github.com/OpenHands/OpenHands/pull/13426)), and a Slack resolver duplicate-finish-message race condition ([#13423](https://github.com/OpenHands/OpenHands/pull/13423)) — plus an Ollama Basic-mode UI overhaul ([#13066](https://github.com/OpenHands/OpenHands/pull/13066)) and a PostHog signup-event timing fix ([#13077](https://github.com/OpenHands/OpenHands/pull/13077)). Worth checking whether these were superseded or rejected.

New opens worth tracking: a fourth sandbox backend, **OpenSandbox**, integrating Anthropic's Lifecycle API for V1 ([#13406](https://github.com/OpenHands/OpenHands/pull/13406)); a V0 `metadata.json` recovery fix ([#13542](https://github.com/OpenHands/OpenHands/pull/13542)); a `base_url` validator that rejects full API endpoint paths with a clear error ([#13303](https://github.com/OpenHands/OpenHands/pull/13303)); and a small docs link cleanup ([#13710](https://github.com/OpenHands/OpenHands/pull/13710)). Two parallel spinner-consolidation PRs ([#13523](https://github.com/OpenHands/OpenHands/pull/13523), [#13513](https://github.com/OpenHands/OpenHands/pull/13513)) remain open and likely need deduping.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

- [#13710](https://github.com/OpenHands/OpenHands/pull/13710) **docs: fix stale internal README links** — _by @xsfX20, updated 2026-04-02T15:52:35Z_
- [#13600](https://github.com/OpenHands/OpenHands/pull/13600) **fix: [Bug]: Frequent logout in cloud environment (SaaS)** — _by @luquibotbol, updated 2026-04-02T14:31:46Z_
- [#13594](https://github.com/OpenHands/OpenHands/pull/13594) **fix: restore Bitbucket integration for local OpenHands instances** — _by @luquibotbol, updated 2026-04-02T14:31:18Z_
- [#13542](https://github.com/OpenHands/OpenHands/pull/13542) **fix: recover malformed V0 conversation metadata.json** — _by @CMLKevin, updated 2026-04-02T14:27:25Z_
- [#13534](https://github.com/OpenHands/OpenHands/pull/13534) **app_server: add env guard for default SetTitleCallbackProcessor** — _by @andyelka-creator, updated 2026-04-02T14:26:27Z_
- [#13523](https://github.com/OpenHands/OpenHands/pull/13523) **refactor(frontend): consolidate loading spinner components** — _by @RekklesNA, updated 2026-04-02T14:18:29Z_
- [#13514](https://github.com/OpenHands/OpenHands/pull/13514) **Consolidate multiple loading spinner implementations into single reusable component** — _by @vincent067, updated 2026-04-02T14:17:47Z_
- [#13513](https://github.com/OpenHands/OpenHands/pull/13513) **feat(frontend): Add unified Spinner component to consolidate loading indicators** — _by @vincent067, updated 2026-04-02T14:17:26Z_
- [#13406](https://github.com/OpenHands/OpenHands/pull/13406) **feat: add OpenSandbox as a new sandbox backend for V1** — _by @hellomypastor, updated 2026-04-02T14:07:17Z_
- [#13359](https://github.com/OpenHands/OpenHands/pull/13359) **[FEAT] Configurable LLM_TIMEOUT for OSS using file configuration only** — _by @joseluisll, updated 2026-04-02T14:05:54Z_
- [#13313](https://github.com/OpenHands/OpenHands/pull/13313) **fix(app_server): handle exceptions in SetTitleCallbackProcessor #13311** — _by @tigerbreak, updated 2026-04-02T14:04:09Z_
- [#13303](https://github.com/OpenHands/OpenHands/pull/13303) **fix: reject API endpoint paths in base_url with clear error message** — _by @MaxwellCalkin, updated 2026-04-02T14:02:15Z_


## Closed PRs (not merged)

- [#13717](https://github.com/OpenHands/OpenHands/pull/13717) **Make sure git is available in docker** — _by @tofarr, closed 2026-04-02T20:08:36Z_
- [#13566](https://github.com/OpenHands/OpenHands/pull/13566) **fix: pin LiteLLM version exactly** — _by @rbren, closed 2026-04-02T14:29:00Z_
- [#13438](https://github.com/OpenHands/OpenHands/pull/13438) **fix(containers): run docker-dev with host user to prevent root-owned files** — _by @BillionClaw, closed 2026-04-02T14:12:33Z_
- [#13426](https://github.com/OpenHands/OpenHands/pull/13426) **fix(enterprise): add SQLAlchemy to mypy pre-commit dependencies** — _by @BillionClaw, closed 2026-04-02T14:11:59Z_
- [#13423](https://github.com/OpenHands/OpenHands/pull/13423) **fix(slack): prevent duplicate finish messages in Slack resolver** — _by @BillionClaw, closed 2026-04-02T14:11:21Z_
- [#13077](https://github.com/OpenHands/OpenHands/pull/13077) **fix(frontend): defer capturing user signup event until after user is identified** — _by @amanape, closed 2026-04-02T14:03:48Z_
- [#13066](https://github.com/OpenHands/OpenHands/pull/13066) **feat: improve local Ollama LLM setup with streamlined Basic mode UI** — _by @timon0305, closed 2026-04-02T13:56:43Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`1bbf699`](https://github.com/OpenHands/OpenHands/commit/1bbf69949831dbbc33dc2eee38e39f5fb85615f0) Add Laminar redirect URI to Keycloak allhands client (#13666) — _@aivong-openhands_
- [`f765177`](https://github.com/OpenHands/OpenHands/commit/f76517732dbb8390bffc50fe2bc78c61fdc35373) Add git to app container runtime dependencies (#13715) — _@malhotra5_
- [`7bb5677`](https://github.com/OpenHands/OpenHands/commit/7bb567734de6b5d416b1e40d4ab8d75da63c1e1f) feat(frontend): replace mocked git conversation routing with real API integration (#13698) — _@hieptl_
- [`45f0c77`](https://github.com/OpenHands/OpenHands/commit/45f0c77f364498ea45a241fce4f3223d8c950891) Fix CVE-2026-33699: Update pypdf to 6.9.2 (#13689) — _@aivong-openhands_
- [`fe3d33f`](https://github.com/OpenHands/OpenHands/commit/fe3d33f222dc8376878bd4b65f2e01be450a15e8) chore(deps): bump the security-all group across 1 directory with 2 updates (#13706) — _@dependabot[bot]_
- [`2b53d44`](https://github.com/OpenHands/OpenHands/commit/2b53d44c2a941d185abe17a72afa917eadcd8bfb) chore(deps): bump the security-all group across 1 directory with 1 update (#13607) — _@dependabot[bot]_
- [`0541cb5`](https://github.com/OpenHands/OpenHands/commit/0541cb58b28f558730799d9f67ec7deaf3ce6ade) chore(deps): bump dawidd6/action-download-artifact from 6 to 15 (#13001) — _@dependabot[bot]_
- [`5d593ca`](https://github.com/OpenHands/OpenHands/commit/5d593ca6e4cd247824b5de3143ff0f84352d929e) feat(backend): add API endpoints to claim and disconnect git organizations (#13683) — _@hieptl_
- [`2158e30`](https://github.com/OpenHands/OpenHands/commit/2158e30e8734b88ca33e9309f881e9a0bfcdf732) Fix README intro link formatting (#13695) — _@jamiechicago312_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
