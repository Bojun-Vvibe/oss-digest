# OpenHands/OpenHands — 2026-04-14

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-04-13T23:59:59.000Z → 2026-04-14T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is infrastructure: enterprise builds now produce native **ARM64 images using native runners for all images** (#13921), which changes the release matrix for self-hosted users. Alongside it, a `LICENSE` update landed (#13924) — worth a glance for anyone tracking redistribution terms.

On the bug-fix side, two correctness issues in shared-event handling shipped: `ef452b6` fixes concurrent `GET /api/v1/web-client/config` calls (#13905), and `eab9d9e` fixes pagination through backend pages when filtering shared events (#13910). The Jira integration also gained V1 conversation support along with several bug fixes (#13909), and a new "manage automations" permission with org-selection broadcast landed for the SaaS path (#13908).

Notably, the **Automations settings page** PR (#13622) was *closed without merging* the same day — readers tracking the automations rollout should check whether it's being re-split, since the backend permission for it did merge (#13908). Similarly, the Astraflow / UCloud ModelVerse provider PR (#13919) was closed unmerged within ~10 minutes of opening; if you want a new provider integration reference, the still-open Novita AI PR (#13530) and the Bedrock credential-chain/bearer-token overhaul (#13110) are the live ones.

A large dependency bump touching 36 frontend packages including `@heroui/react` 2.8.7 → 3.0.2 and `react-router` 7.13 → 7.14 (#13867) was **closed unmerged** — likely to be re-opened in smaller chunks; worth watching if you depend on the frontend lockfile.

Several older PRs got bulk activity (mostly status churn from `MkDev11` and `jpshackelford`) but nothing new merged from them. Security-relevant items still open and worth review: open-redirect fix in the GitHub proxy (#13615, CWE-601, High), missing-auth on feedback endpoint (#13619, CWE-862), plugin-URL credential redaction (#12979), and secret-value redaction in `add_env_vars` errors (#12965). The mobile chat composer layout PR (#13907) was also closed unmerged. No releases or new issues in the window.

## Releases

_None in window._


## Merged PRs

- [#13397](https://github.com/OpenHands/OpenHands/pull/13397) **chore: Update imagemagick in Debian images for security patches** — _by @raymyers, merged 2026-03-14T03:48:50Z_


## Open PRs (new or updated)

- [#13251](https://github.com/OpenHands/OpenHands/pull/13251) _(draft)_ **Fix GitHub webhook ClientDisconnect handling** — _by @malhotra5, updated 2026-04-14T21:45:53Z_
- [#13321](https://github.com/OpenHands/OpenHands/pull/13321) _(draft)_ **fix: surface detailed MCP errors in V1 conversation start failures** — _by @jpshackelford, updated 2026-04-14T21:44:41Z_
- [#13593](https://github.com/OpenHands/OpenHands/pull/13593) **refactor: consolidate loading spinner implementations** — _by @luquibotbol, updated 2026-04-14T21:43:44Z_
- [#12979](https://github.com/OpenHands/OpenHands/pull/12979) **fix(security): redact credentials in plugin source URLs before serial…** — _by @ramya-yalamarti, updated 2026-04-14T21:42:37Z_
- [#13344](https://github.com/OpenHands/OpenHands/pull/13344) **fix(event): apply limit and page_id to items in search_events** — _by @nehaaprasad, updated 2026-04-14T21:41:44Z_
- [#13300](https://github.com/OpenHands/OpenHands/pull/13300) **Fix variable shadowing of start_id in StateTracker._init_history** — _by @jnMetaCode, updated 2026-04-14T21:40:39Z_
- [#13110](https://github.com/OpenHands/OpenHands/pull/13110) **fix(llm): Improve Bedrock support — default credential chain, bearer token, inference profiles, max_output_tokens** — _by @zxkane, updated 2026-04-14T21:38:32Z_
- [#13422](https://github.com/OpenHands/OpenHands/pull/13422) **fix(frontend): prevent hydration mismatch in useBreakpoint hook** — _by @BillionClaw, updated 2026-04-14T21:37:36Z_
- [#13457](https://github.com/OpenHands/OpenHands/pull/13457) **fix: stale useMemo closures in git hooks and incorrect SQLAlchemy result handling** — _by @wishhyt, updated 2026-04-14T21:36:49Z_
- [#13576](https://github.com/OpenHands/OpenHands/pull/13576) **Fix infinite loop when reading .ipynb files (Issue #13517)** — _by @K09-0, updated 2026-04-14T21:35:52Z_
- [#13619](https://github.com/OpenHands/OpenHands/pull/13619) **fix: add authorization check to feedback submission endpoint (CWE-862)** — _by @sebastiondev, updated 2026-04-14T21:33:37Z_
- [#13615](https://github.com/OpenHands/OpenHands/pull/13615) **fix: validate redirect_uri in GitHub proxy to prevent open redirect (CWE-601)** — _by @sebastiondev, updated 2026-04-14T21:32:37Z_
- [#13447](https://github.com/OpenHands/OpenHands/pull/13447) _(draft)_ **Use absolute paths for git hooks** — _by @chuckbutkus, updated 2026-04-14T21:28:58Z_
- [#13442](https://github.com/OpenHands/OpenHands/pull/13442) _(draft)_ **Fix Changes pane to display file deletions correctly** — _by @jpshackelford, updated 2026-04-14T21:27:33Z_
- [#13530](https://github.com/OpenHands/OpenHands/pull/13530) **feat: add Novita AI as an LLM provider** — _by @Alex-wuhu, updated 2026-04-14T21:26:54Z_
- [#13533](https://github.com/OpenHands/OpenHands/pull/13533) **feat(frontend): Add color-coded task status icons** — _by @VascoSch92, updated 2026-04-14T21:26:06Z_
- [#13543](https://github.com/OpenHands/OpenHands/pull/13543) **fix: recover corrupted V0 metadata.json files** — _by @CMLKevin, updated 2026-04-14T21:25:22Z_
- [#13350](https://github.com/OpenHands/OpenHands/pull/13350) **feat: add custom docker run options to sandbox service** — _by @cbagwell, updated 2026-04-14T21:19:11Z_
- [#13396](https://github.com/OpenHands/OpenHands/pull/13396) **test: add coverage for maybe_setup_git_hooks in V1 app server** — _by @jpshackelford, updated 2026-04-14T21:18:10Z_
- [#12980](https://github.com/OpenHands/OpenHands/pull/12980) **feat: add validation for secret names to ensure valid env var format** — _by @jpshackelford, updated 2026-04-14T21:17:33Z_
- [#12965](https://github.com/OpenHands/OpenHands/pull/12965) _(draft)_ **fix: redact secret values from error messages in add_env_vars** — _by @jpshackelford, updated 2026-04-14T21:16:56Z_
- [#13531](https://github.com/OpenHands/OpenHands/pull/13531) **feat: add structured audit logging for secrets access endpoints** — _by @karanjaxyz, updated 2026-04-14T18:43:30Z_
- [#13916](https://github.com/OpenHands/OpenHands/pull/13916) _(draft)_ **feat(runtime): configurable timeout for Docker runtime image builds** — _by @noyahazzan-art, updated 2026-04-14T06:18:06Z_
- [#13083](https://github.com/OpenHands/OpenHands/pull/13083) _(draft)_ **fix: exclude unused pypdf2 transitive dependency (CVE-2023-36464) (#1…** — _by @timon0305, updated 2026-04-14T02:14:59Z_
- [#13116](https://github.com/OpenHands/OpenHands/pull/13116) **chore: remove unused subscription-related code** — _by @voidborne-d, updated 2026-04-14T02:14:57Z_


## Closed PRs (not merged)

- [#13091](https://github.com/OpenHands/OpenHands/pull/13091) **feat: Add validation for plugin parameter types** — _by @MkDev11, closed 2026-04-14T21:47:28Z_
- [#13043](https://github.com/OpenHands/OpenHands/pull/13043) **feat(slack-v1): post final assistant message instead of LLM summary** — _by @MkDev11, closed 2026-04-14T21:46:46Z_
- [#12779](https://github.com/OpenHands/OpenHands/pull/12779) **feat: forward LLM_* env vars to agent-server containers (#12854)** — _by @MkDev11, closed 2026-04-14T21:45:57Z_
- [#13372](https://github.com/OpenHands/OpenHands/pull/13372) **DRAFT: Design - Chat Message Draft Persistence (M1)** — _by @jpshackelford, closed 2026-03-13T04:15:34Z_
- [#13867](https://github.com/OpenHands/OpenHands/pull/13867) **chore(deps): bump the version-all group across 1 directory with 36 updates** — _by @dependabot[bot], closed 2026-04-14T14:28:23Z_
- [#13622](https://github.com/OpenHands/OpenHands/pull/13622) **feat(frontend): Add Automations settings page** — _by @xingyaoww, closed 2026-04-14T13:24:43Z_
- [#13919](https://github.com/OpenHands/OpenHands/pull/13919) **feat: Add Astraflow (UCloud ModelVerse) LLM provider support** — _by @ucloudnb666, closed 2026-04-14T12:02:46Z_
- [#13907](https://github.com/OpenHands/OpenHands/pull/13907) **Improve mobile chat composer layout** — _by @arienkock, closed 2026-04-14T03:25:02Z_
- [#12991](https://github.com/OpenHands/OpenHands/pull/12991) **Don't require auth for /ready endpoint** — _by @chuckbutkus, closed 2026-04-14T02:15:04Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`ef452b6`](https://github.com/OpenHands/OpenHands/commit/ef452b6544b7ed6336735a6b435e6f5cf4e408b7) Fix concurrent GET /api/v1/web-client/config calls (#13905) — _@tofarr_
- [`0eafa9f`](https://github.com/OpenHands/OpenHands/commit/0eafa9fd15ee8e8bdcc899817ec8e1006d5ca094) APP-1170: Jira : add V1 conversation support and multiple bug fixes (#13909) — _@tofarr_
- [`ab64a65`](https://github.com/OpenHands/OpenHands/commit/ab64a65f25c918bacf8db4ea22c9786212a22bec) feat(enterprise): Build ARM64 image for enterprise, use native runners for all images (#13921) — _@jlav_
- [`4cdf88d`](https://github.com/OpenHands/OpenHands/commit/4cdf88d4802332a59b95c9b07f5698c9b9dd00c6) Update LICENSE (#13924) — _@enyst_
- [`eab9d9e`](https://github.com/OpenHands/OpenHands/commit/eab9d9e3c7023670e5c94453e0275c429c1bfbc8) fix: paginate through backend pages when filtering shared events (#13910) — _@xingyaoww_
- [`58df84e`](https://github.com/OpenHands/OpenHands/commit/58df84e16c78b8308f0fe721d6dbd15030469c17) feat: add manage automations permission and broadcast org selection (#13908) — _@hieptl_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
