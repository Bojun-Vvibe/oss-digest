# OpenHands/OpenHands — 2026-04-18

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-04-17T23:59:59.000Z → 2026-04-18T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's most user-visible fix landed via #13970 / commit 9db83a1: saving a GitHub/GitLab token in Integrations settings now refreshes the UI immediately instead of requiring a browser reload. The root cause was a React Query key mismatch (`["settings", organizationId]` vs the canonical `["settings", scope, organizationId]`), and to prevent recurrence, neubig opened #14011 to enforce a shared `SETTINGS_QUERY_KEYS` helper as the single source of truth for settings query keys — worth a look if you touch frontend data fetching.

A second notable frontend bug fix, #13936, addresses a stuck "Agent has finished the task" status when resuming a V1 conversation from the conversation list; previously users needed one or two refreshes before new prompts behaved correctly. The PR is closed (not merged) — check whether it was superseded.

On the settings/UX front, #13977 (still open) adds a confirmation modal warning users before saving a less-detailed SDK settings view would silently reset hidden, non-default schema-backed fields. Commit 8f5b3ce also realigns the MCP settings layout with other settings pages (#13996).

Backend/API: #13885 unifies `/api/v1/git/branches/search` to make `query` optional and paginate when omitted, deprecating the separate `/repository/branches` endpoint — relevant if you consume the git API.

Test-suite hygiene continues under the PLTF-1269 banner from aivong-openhands: replacing real `time.sleep`/`asyncio.sleep` with `asyncio.sleep(0)` and `threading.Barrier` to de-flake maintenance runner and featurizer thread-safety tests (#13930, #13992), splitting `test_user_model` into per-model tests (#13997), extracting fixtures in `test_billing.py` (#13998), and renaming `test_should_*` to `test_verb_noun_context` (#14015). Docstrings for mock runner classes also landed (commit e23af62).

Docs: two near-duplicate PRs (#14017, #14018) from JefferyLiu6 add missing `Accordion`, `Dialog`, `Select`, `Spinner`, `Tabs`, `Toast` entries to the `openhands-ui` README — one should likely be closed. Commit 1af04f2 corrects the app_server README structure.

Remainder of the day is dependabot churn: cryptography 46.0.5→46.0.7 (CVE-2026-39892, PR #14016 was auto-closed), pytest 9.0.3, pygments 2.20.0, node 25.9-trixie-slim, and several docker/* GitHub Actions bumps.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

- [#14017](https://github.com/OpenHands/OpenHands/pull/14017) **docs: fix formatting and add troubleshooting steps to frontend README** — _by @JefferyLiu6, updated 2026-04-18T21:17:55Z_
- [#14018](https://github.com/OpenHands/OpenHands/pull/14018) **docs: add missing components to openhands-ui README** — _by @JefferyLiu6, updated 2026-04-18T21:11:41Z_
- [#13977](https://github.com/OpenHands/OpenHands/pull/13977) **Warn before resetting hidden SDK settings** — _by @neubig, updated 2026-04-18T19:30:51Z_
- [#13885](https://github.com/OpenHands/OpenHands/pull/13885) **feat: support pagination for branch search queries** — _by @Ricardo-M-L, updated 2026-04-18T17:24:53Z_
- [#13930](https://github.com/OpenHands/OpenHands/pull/13930) **PLTF-1269: replace real sleeps with asyncio.sleep(0) in maintenance runner tests** — _by @aivong-openhands, updated 2026-04-18T16:35:10Z_
- [#13992](https://github.com/OpenHands/OpenHands/pull/13992) **PLTF-1269: replace time.sleep with threading.Barrier in enterprise featurizer thread safety test** — _by @aivong-openhands, updated 2026-04-18T16:35:06Z_
- [#13997](https://github.com/OpenHands/OpenHands/pull/13997) **PLTF-1269: split enterprise test_user_model into focused per-model tests** — _by @aivong-openhands, updated 2026-04-18T16:35:03Z_
- [#13998](https://github.com/OpenHands/OpenHands/pull/13998) **PLTF-1269: extract fixtures and parametrize tests in test_billing.py** — _by @aivong-openhands, updated 2026-04-18T16:35:02Z_
- [#14015](https://github.com/OpenHands/OpenHands/pull/14015) **PLTF-1269: replace test_should_ naming with test_verb_noun_context convention** — _by @aivong-openhands, updated 2026-04-18T16:34:59Z_
- [#14011](https://github.com/OpenHands/OpenHands/pull/14011) **Enforce canonical settings query keys in frontend** — _by @neubig, updated 2026-04-18T12:00:42Z_


## Closed PRs (not merged)

- [#14016](https://github.com/OpenHands/OpenHands/pull/14016) **chore(deps): bump cryptography from 46.0.5 to 46.0.7** — _by @dependabot[bot], closed 2026-04-18T18:41:41Z_
- [#13936](https://github.com/OpenHands/OpenHands/pull/13936) **fix(frontend): resume conversation leaves agent status stuck on "finished"** — _by @moorsecopers99, closed 2026-04-18T15:59:20Z_
- [#13970](https://github.com/OpenHands/OpenHands/pull/13970) **fix(frontend): refresh integrations UI after saving git provider token** — _by @VascoSch92, closed 2026-04-18T11:58:30Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`f212e0e`](https://github.com/OpenHands/OpenHands/commit/f212e0e856a649c940e7b027e6a2d4ececfe2c10) chore(deps): bump node from 25.8-trixie-slim to 25.9-trixie-slim in /containers/app (#13829) — _@dependabot[bot]_
- [`918b0a8`](https://github.com/OpenHands/OpenHands/commit/918b0a8b59bf4df1f20992acf35634713863e720) chore(deps-dev): bump pytest from 9.0.2 to 9.0.3 (#13935) — _@dependabot[bot]_
- [`119b0c9`](https://github.com/OpenHands/OpenHands/commit/119b0c99a8cc59df13b4bcf9e6a5a4ae3989c62a) chore(deps): bump pygments from 2.19.2 to 2.20.0 (#13934) — _@dependabot[bot]_
- [`0628679`](https://github.com/OpenHands/OpenHands/commit/0628679307d938adc6aa30182cfd75647d535bdb) chore(deps): bump docker/build-push-action from 6 to 7 (#13961) — _@dependabot[bot]_
- [`e8249f0`](https://github.com/OpenHands/OpenHands/commit/e8249f00a89fe748a33005850ba0164c0a98f9e2) docs: align AgentHub task tracking references (#13708) — _@xsfX20_
- [`1651edf`](https://github.com/OpenHands/OpenHands/commit/1651edf8c92424311eea9b2d3b9eb31b50c09625) chore(deps): bump docker/login-action from 3 to 4 (#13960) — _@dependabot[bot]_
- [`1fd9467`](https://github.com/OpenHands/OpenHands/commit/1fd94675d01e37546d6b9f9e521b530a3ea36539) chore(deps): bump actions/download-artifact from 7 to 8 (#13700) — _@dependabot[bot]_
- [`b841e1a`](https://github.com/OpenHands/OpenHands/commit/b841e1acb0dcbf8a764b38551b219b8cfc695144) chore(deps): bump docker/metadata-action from 5 to 6 (#13959) — _@dependabot[bot]_
- [`1af04f2`](https://github.com/OpenHands/OpenHands/commit/1af04f283316b366dc0184df5ba54f7539611ca6) docs: fix app_server README to reflect actual module structure (#13890) — _@JefferyLiu6_
- [`b87f08f`](https://github.com/OpenHands/OpenHands/commit/b87f08f65156500def5fdc124cf256c15a329fd0) docs: add note about updating enterprise poetry lockfile (#13761) — _@aivong-openhands_
- [`e23af62`](https://github.com/OpenHands/OpenHands/commit/e23af62a576d835d03f6e92f1e34170b6cf0e1d4) PLTF-1269: add docstrings to mock classes in maintenance runner tests (#13931) — _@aivong-openhands_
- [`9db83a1`](https://github.com/OpenHands/OpenHands/commit/9db83a1555e3ece3fb24fe1afc0b1fba09cfcb64) Refresh git settings after provider updates (#13979) — _@neubig_
- [`8f5b3ce`](https://github.com/OpenHands/OpenHands/commit/8f5b3ceb6c85990464ac707ea8c3ef65c5cd0ba9) fix(settings): align MCP settings layout with other settings pages (#13996) — _@octo-patch_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
