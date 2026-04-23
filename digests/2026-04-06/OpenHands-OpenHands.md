# OpenHands/OpenHands — 2026-04-06

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-04-05T23:59:59.000Z → 2026-04-06T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline work is the continued **V1 API migration** led by tofarr: new V1 git routes with pagination for installations/repositories (#13790), a new V1 user-git-info endpoint deprecating the old one (#13787), and the merge of `/users/me` returning the new `UserMeta` model (#13778). Readers tracking the API rewrite should also note PR #13775/#13776 marking conversation, feedback, trajectory and microagent endpoints as deprecated.

Two security/credential fixes are worth attention. Commit b8f2932 (#13720) redacts credentials from MCP config logging, complementing the earlier fix that stopped full `Event` objects (containing pasted API keys) from being serialized into Datadog logs. On the SaaS side, #13785 fixes a bug where a user-supplied API key was being overwritten when selecting a non-OpenHands provider in basic view, and #13786 stops the "out of credits" banner from vanishing ~500ms after appearing (superseding the older draft #13443, which was closed).

Infrastructure: #13795 (commit 54858c0) **retires Blacksmith from all GitHub Actions workflows** — relevant to anyone debugging CI runners. #13637 adds the SDK to mypy checking and fixes the resulting type errors. #13618 adds **KVM device passthrough** for hardware virtualization in runtimes. #13721 (rename `levelname` so Datadog stops misclassifying INFO as error) was closed without merging.

Notable new open PRs to triage:
- #13796 consolidates the frontend's many spinner implementations into one reusable `Spinner` component (fixes #12550).
- #13572 claims to fix severe typing lag in long conversations on Firefox by removing per-keystroke Zustand re-renders — high user-impact if it lands.
- #13551 (draft) proxies VS Code and agent-server traffic through the OpenHands server, enabling single-port reverse-proxy deployments and unlocking image preview in the embedded editor.
- #13678 adds a configurable `llm_max_output_tokens` setting to replace the hard-coded 65536 that breaks OpenRouter and smaller-context models.

No releases or new issues were filed in the window. Slack resolver UX got a small fix (#13791, "No Repository" option shows immediately).

## Releases

_None in window._


## Merged PRs

- [#13658](https://github.com/OpenHands/OpenHands/pull/13658) **fix(backend): persist disabled_skills in SaaS settings store** — _by @hieptl, merged 2026-03-30T19:23:08Z_
- [#13604](https://github.com/OpenHands/OpenHands/pull/13604) **Release 1.6.0** — _by @mamoodi, merged 2026-03-30T16:01:16Z_
- [#13561](https://github.com/OpenHands/OpenHands/pull/13561) **docs(AGENTS.md): add guidance to preserve tool versions when regenerating lockfiles** — _by @aivong-openhands, merged 2026-03-30T16:23:39Z_
- [#13643](https://github.com/OpenHands/OpenHands/pull/13643) **Handling the new server error event** — _by @tofarr, merged 2026-03-30T16:56:37Z_
- [#13670](https://github.com/OpenHands/OpenHands/pull/13670) **fix(frontend): pin axios version to mitigate supply chain attack** — _by @hieptl, merged 2026-03-31T12:29:02Z_
- [#13663](https://github.com/OpenHands/OpenHands/pull/13663) **Remove unused KEYCLOAK_PROVIDER_NAME constant** — _by @jlav, merged 2026-03-31T13:46:25Z_
- [#13669](https://github.com/OpenHands/OpenHands/pull/13669) **feat(frontend): add feature flag for organization claims resolver routing** — _by @hieptl, merged 2026-03-31T14:39:38Z_
- [#13673](https://github.com/OpenHands/OpenHands/pull/13673) **Revert "[fix] maintainer doc"** — _by @jamiechicago312, merged 2026-03-31T15:10:00Z_
- [#13668](https://github.com/OpenHands/OpenHands/pull/13668) **feat(frontend): add Git Conversation Routing section for org claims UI** — _by @hieptl, merged 2026-03-31T15:14:47Z_
- [#13659](https://github.com/OpenHands/OpenHands/pull/13659) **Improve README trusted-by logos across light and dark themes** — _by @jamiechicago312, merged 2026-03-31T16:18:25Z_
- [#13667](https://github.com/OpenHands/OpenHands/pull/13667) **Validate selected branch names before checkout** — _by @enyst, merged 2026-03-31T16:21:21Z_
- [#13676](https://github.com/OpenHands/OpenHands/pull/13676) **feat(backend): develop api to retrieve git organizations for the current organization** — _by @hieptl, merged 2026-03-31T18:31:14Z_
- [#12190](https://github.com/OpenHands/OpenHands/pull/12190) **chore(deps): bump peter-evans/find-comment from 3 to 4** — _by @dependabot[bot], merged 2026-03-31T20:23:51Z_
- [#12259](https://github.com/OpenHands/OpenHands/pull/12259) **chore(deps): bump actions/checkout from 4 to 6** — _by @dependabot[bot], merged 2026-03-31T20:25:24Z_
- [#12260](https://github.com/OpenHands/OpenHands/pull/12260) **chore(deps): bump actions/download-artifact from 6 to 7** — _by @dependabot[bot], merged 2026-03-31T20:25:58Z_
- [#12261](https://github.com/OpenHands/OpenHands/pull/12261) **chore(deps): bump actions/stale from 9 to 10** — _by @dependabot[bot], merged 2026-03-31T20:34:22Z_
- [#13684](https://github.com/OpenHands/OpenHands/pull/13684) **fix: remove resolver summary language hint** — _by @enyst, merged 2026-04-01T14:35:29Z_
- [#13686](https://github.com/OpenHands/OpenHands/pull/13686) **ci: skip PyPI release for cloud- tags** — _by @mamoodi, merged 2026-04-01T17:18:51Z_
- [#13687](https://github.com/OpenHands/OpenHands/pull/13687) **ci: add cloud-semver tag support for enterprise image** — _by @jlav, merged 2026-04-01T18:50:15Z_
- [#13421](https://github.com/OpenHands/OpenHands/pull/13421) **refactor: single source of truth for verified models** — _by @neubig, merged 2026-04-01T21:00:29Z_
- [#13640](https://github.com/OpenHands/OpenHands/pull/13640) **fix: upgrade pip to fix CVE-2025-8869** — _by @aivong-openhands, merged 2026-04-01T21:53:11Z_
- [#13695](https://github.com/OpenHands/OpenHands/pull/13695) **Fix README intro link formatting** — _by @jamiechicago312, merged 2026-04-02T00:32:01Z_
- [#13683](https://github.com/OpenHands/OpenHands/pull/13683) **feat(backend): add API endpoints to claim and disconnect git organizations** — _by @hieptl, merged 2026-04-02T05:35:30Z_
- [#13001](https://github.com/OpenHands/OpenHands/pull/13001) **chore(deps): bump dawidd6/action-download-artifact from 6 to 15** — _by @dependabot[bot], merged 2026-04-02T13:55:12Z_
- [#13607](https://github.com/OpenHands/OpenHands/pull/13607) **chore(deps): bump the security-all group across 1 directory with 1 update** — _by @dependabot[bot], merged 2026-04-02T14:32:37Z_
- [#13706](https://github.com/OpenHands/OpenHands/pull/13706) **chore(deps): bump the security-all group across 1 directory with 2 updates** — _by @dependabot[bot], merged 2026-04-02T15:57:05Z_
- [#13689](https://github.com/OpenHands/OpenHands/pull/13689) **Fix CVE-2026-33699: Update pypdf to 6.9.2** — _by @aivong-openhands, merged 2026-04-02T16:14:39Z_
- [#13698](https://github.com/OpenHands/OpenHands/pull/13698) **feat(frontend): replace mocked git conversation routing with real API integration** — _by @hieptl, merged 2026-04-02T18:05:28Z_
- [#13715](https://github.com/OpenHands/OpenHands/pull/13715) **APP-1204 Add git to app container runtime dependencies** — _by @malhotra5, merged 2026-04-02T18:43:23Z_
- [#13666](https://github.com/OpenHands/OpenHands/pull/13666) **Add Laminar redirect URI to Keycloak allhands client** — _by @aivong-openhands, merged 2026-04-02T19:15:59Z_
- [#13680](https://github.com/OpenHands/OpenHands/pull/13680) **feat: add tags storage for conversation metadata** — _by @malhotra5, merged 2026-04-03T00:54:31Z_
- [#13724](https://github.com/OpenHands/OpenHands/pull/13724) **APP-1197 Consolidate health routes to app_server package** — _by @tofarr, merged 2026-04-03T03:34:40Z_
- [#13616](https://github.com/OpenHands/OpenHands/pull/13616) **feat(frontend): Display LLM model on conversation cards and header** — _by @sjathin, merged 2026-04-03T10:57:38Z_
- [#13704](https://github.com/OpenHands/OpenHands/pull/13704) **enterprise lock update openhands aci to version already in openhands** — _by @aivong-openhands, merged 2026-04-03T13:57:14Z_
- [#13759](https://github.com/OpenHands/OpenHands/pull/13759) **APP-1197 Migrate settings endpoints to V1 API (/api/v1/settings)** — _by @tofarr, merged 2026-04-03T15:38:25Z_
- [#13762](https://github.com/OpenHands/OpenHands/pull/13762) **Update CODEOWNERS** — _by @mamoodi, merged 2026-04-03T16:01:58Z_
- [#13764](https://github.com/OpenHands/OpenHands/pull/13764) **chore(deps): bump the security-all group across 1 directory with 2 updates** — _by @dependabot[bot], merged 2026-04-03T16:46:46Z_
- [#13705](https://github.com/OpenHands/OpenHands/pull/13705) **Fix CVE-2026-22815: Update aiohttp to 3.13.5** — _by @aivong-openhands, merged 2026-04-03T18:21:05Z_
- [#13713](https://github.com/OpenHands/OpenHands/pull/13713) **feat(backend): route resolver conversations to claimed org workspaces** — _by @hieptl, merged 2026-04-03T18:32:43Z_
- [#13692](https://github.com/OpenHands/OpenHands/pull/13692) **Fix CVE-2026-25645: Update requests to 2.33.1** — _by @aivong-openhands, merged 2026-04-03T18:55:31Z_
- [#13755](https://github.com/OpenHands/OpenHands/pull/13755) **feat(backend): route gitlab resolver conversations to claimed org workspaces** — _by @hieptl, merged 2026-04-03T19:27:46Z_
- [#13770](https://github.com/OpenHands/OpenHands/pull/13770) **APP-1197 Migrate secrets endpoints to V1 API** — _by @tofarr, merged 2026-04-03T20:06:51Z_
- [#13758](https://github.com/OpenHands/OpenHands/pull/13758) **feat(backend): route Slack resolver conversations to claimed org workspaces** — _by @hieptl, merged 2026-04-03T20:09:21Z_
- [#13718](https://github.com/OpenHands/OpenHands/pull/13718) **Fix credential leak in callback event logging** — _by @simonrosenberg, merged 2026-04-03T20:29:27Z_
- [#13776](https://github.com/OpenHands/OpenHands/pull/13776) **Add more endpoints as deprecated (microagent repository endpoints)** — _by @tofarr, merged 2026-04-03T20:45:15Z_
- [#13775](https://github.com/OpenHands/OpenHands/pull/13775) **APP-1197 Mark conversation endpoints as deprecated with updated docs** — _by @tofarr, merged 2026-04-03T20:45:32Z_
- [#13696](https://github.com/OpenHands/OpenHands/pull/13696) **Add contributors section to README** — _by @jamiechicago312, merged 2026-04-03T23:27:45Z_
- [#13786](https://github.com/OpenHands/OpenHands/pull/13786) **fix(frontend): prevent budget/credit error banner from disappearing immediately** — _by @hieptl, merged 2026-04-06T14:13:30Z_
- [#13785](https://github.com/OpenHands/OpenHands/pull/13785) **fix(backend): custom API key overwritten when using non-OpenHands provider in basic view** — _by @hieptl, merged 2026-04-06T14:14:14Z_


## Open PRs (new or updated)

- [#13796](https://github.com/OpenHands/OpenHands/pull/13796) **refactor: consolidate loading spinners into single reusable component** — _by @chernistry, updated 2026-04-06T19:14:53Z_
- [#13524](https://github.com/OpenHands/OpenHands/pull/13524) **fix(frontend): make conversation header sticky at narrow window widths** — _by @gpothier, updated 2026-04-06T18:51:14Z_
- [#13572](https://github.com/OpenHands/OpenHands/pull/13572) **Fixes severe typing lag in long conversations** — _by @gpothier, updated 2026-04-06T18:51:01Z_
- [#13551](https://github.com/OpenHands/OpenHands/pull/13551) _(draft)_ **feat: proxy VS Code and agent-server traffic through OpenHands server** — _by @gpothier, updated 2026-04-06T18:50:49Z_
- [#13678](https://github.com/OpenHands/OpenHands/pull/13678) **Feat/configurable max output tokens** — _by @Desel72, updated 2026-04-06T16:30:11Z_


## Closed PRs (not merged)

- [#13721](https://github.com/OpenHands/OpenHands/pull/13721) **fix: rename levelname so data dog can correctly categorize errors** — _by @HeyItsChloe, closed 2026-04-06T18:45:04Z_
- [#13778](https://github.com/OpenHands/OpenHands/pull/13778) **Add V1 /users/me endpoint returning UserMeta** — _by @tofarr, closed 2026-04-06T15:11:48Z_
- [#13664](https://github.com/OpenHands/OpenHands/pull/13664) **Bump SDK packages to v1.16.0** — _by @all-hands-bot, closed 2026-04-06T14:49:20Z_
- [#13443](https://github.com/OpenHands/OpenHands/pull/13443) **fix(frontend): prevent out of credits error message from disappearing automatically** — _by @hieptl, closed 2026-04-06T13:19:02Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`54858c0`](https://github.com/OpenHands/OpenHands/commit/54858c0fc02196f797e4bb411eb00bc12267b0cc) ci: retire Blacksmith from all GitHub Actions workflows (#13795) — _@raymyers_
- [`384c324`](https://github.com/OpenHands/OpenHands/commit/384c3246525e96de2c078e7a85cedffe0f3de256) fix(slack): immediately display 'No Repository' option (#13791) — _@malhotra5_
- [`4e68f57`](https://github.com/OpenHands/OpenHands/commit/4e68f578075e60376cc805ffd98428bb5e80be4f) Add V1 git routes with pagination for installations and repositories (#13790) — _@tofarr_
- [`649ebc4`](https://github.com/OpenHands/OpenHands/commit/649ebc4078b9623507c7b3e4c3797c884254f570) Succinct pr template (#13779) — _@jamiechicago312_
- [`e3246c2`](https://github.com/OpenHands/OpenHands/commit/e3246c27d44d57d438e4870762a70ad15e2027e9) Added new v1 endpoint for user git info and deprecated old endpoint (#13787) — _@tofarr_
- [`72194f1`](https://github.com/OpenHands/OpenHands/commit/72194f19db6170e1f601c478c48869e38d27adef) chore: Add sdk to mypy checking and fix the resulting errors (#13637) — _@raymyers_
- [`0c5e30a`](https://github.com/OpenHands/OpenHands/commit/0c5e30ab33a2286821df5b5012abc2345a9002ce) Add KVM device passthrough support for hardware virtualization (#13618) — _@gpothier_
- [`b8f2932`](https://github.com/OpenHands/OpenHands/commit/b8f2932b023306926f8adc29d06621d1cf2e9432) fix(security): redact credentials from MCP config logging (#13720) — _@simonrosenberg_
- [`62673c0`](https://github.com/OpenHands/OpenHands/commit/62673c028ac3f207f434e5fda17106165058ad33) chore(deps): bump the version-all group across 1 directory with 7 updates (#13774) — _@dependabot[bot]_
- [`7af2285`](https://github.com/OpenHands/OpenHands/commit/7af2285fe6ec9e2755776650aafdaec61acaee43) fix(backend): custom API key overwritten when using non-OpenHands provider in basic view (#13785) — _@hieptl_
- [`69d281c`](https://github.com/OpenHands/OpenHands/commit/69d281c6be58f07510a3c9c795c8cc83ec69e0ed) fix(frontend): prevent budget/credit error banner from disappearing immediately (#13786) — _@hieptl_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
