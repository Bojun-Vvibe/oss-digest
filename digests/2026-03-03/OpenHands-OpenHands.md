# OpenHands/OpenHands — 2026-03-03

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-03-02T23:59:59.000Z → 2026-03-03T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is a major new integration: **Bitbucket support for both Cloud and Server APIs** has landed (#11052), significantly expanding OpenHands' Git provider coverage alongside existing GitHub/GitLab options. Closely related, **V1 GitLab support** was added as part of a broader typing pass (#13171), and **V1 path-based routing** infrastructure was merged (#13120) — both signals that V1 is actively being built out.

A second major theme is a sweeping **async database refactor** across the enterprise codebase, driven by tofarr: `OrgStore` (#13154), `OrgMemberStore` (#13173), `RoleStore` (#13184), `SlackTeamStore` (#13160), `openhands_pr_store` (#13186), `TokenManager` token methods (#13147), plus a "Round 3" general async sessions refactor (#13148). Anyone touching enterprise persistence should expect interface changes.

Third, malhotra5 pushed an aggressive **mypy cleanup campaign** touching Slack (#13177), Jira (#13181), GitLab (#13172), `token_manager`/`auth_token_store` (#13179), enterprise union-attr errors (#13176), `UserAuth` vs `SaasUserAuth` annotations (#13149), generic manager type hints (#13174), and a `Message` type tightening from `dict | str` to `dict` (#13144) — the last is potentially breaking for downstream consumers.

Security and dependency hygiene also saw notable activity: **CVE-2025-69223** fixed by bumping aiohttp to 3.13.3 (#13008), **CVE-2023-36464** addressed twice by removing pypdf2 via openhands-aci 0.3.3 (#13142, #13170), and python-jose replaced with jwcrypto in lockfiles (#13105).

Bug fixes worth noting: a `UserData` validation crash when a GitHub user has no OpenHands account (#13135), two timezone-mismatch DB errors in `validate_api_key` (#13158) and `accept_tos` (#13155), and a UI fix syncing pin/unpin state across conversation tabs (#12932, closing #12884).

Tooling: a new `upcoming-release` skill (#13180, clarified in #13185) and a script that lists PRs between two commits (#13175) — both suggest release-process automation is being formalized.

No releases, issues, or PR-list entries were reported in the window; all activity is via direct commit landings.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`0ae9128`](https://github.com/OpenHands/OpenHands/commit/0ae9128ed7a054e067417ca14d4e98a37e2aa947) Fix CVE-2025-69223: Update aiohttp to 3.13.3 (#13008) — _@aivong-openhands_
- [`4fc5351`](https://github.com/OpenHands/OpenHands/commit/4fc5351ed7136fda15eff5a055704a5900171a0a) Refactor openhands_pr_store.py to use async db sessions (#13186) — _@tofarr_
- [`a1271dc`](https://github.com/OpenHands/OpenHands/commit/a1271dc129609456944112e536a5edc3e9e70f36) Fix mypy type errors in token_manager.py and auth_token_store.py (#13179) — _@malhotra5_
- [`45b970c`](https://github.com/OpenHands/OpenHands/commit/45b970c0dd4afd318af548632ec3441d05b09ccc) Refactor RoleStore to fully async (#13184) — _@tofarr_
- [`4688741`](https://github.com/OpenHands/OpenHands/commit/46887413249a2db51c86ac395954c8cc5f302af1) Fix Slack integration mypy type errors (#13177) — _@malhotra5_
- [`79a0cee`](https://github.com/OpenHands/OpenHands/commit/79a0cee7d930a2dfe16d0ffa1f262f270f2a98ef) Fix mypy type errors in Jira integration (#13181) — _@malhotra5_
- [`d19ba0d`](https://github.com/OpenHands/OpenHands/commit/d19ba0d16628d913f6cf6cdd0ea41cb170086075) Clarify upcoming-release skill (#13185) — _@mamoodi_
- [`63654c4`](https://github.com/OpenHands/OpenHands/commit/63654c4643e68f426b97055b68023df4ac3749b6) Add a new upcoming-release skill (#13180) — _@mamoodi_
- [`2f11f6a`](https://github.com/OpenHands/OpenHands/commit/2f11f6a39a6bb653bc4aad4406da30f420e85a48) refactor(enterprise): Convert OrgMemberStore to fully async (#13173) — _@tofarr_
- [`5cad59a`](https://github.com/OpenHands/OpenHands/commit/5cad59a6610d824fae5b2ca76026b832ea0ae5b8) Fix UserData validation error when GitHub user has no OpenHands account (#13135) — _@malhotra5_
- [`6dff07e`](https://github.com/OpenHands/OpenHands/commit/6dff07ea355d516d19de719c843f7ddcfa294441) Fix union-attr mypy errors in enterprise code (#13176) — _@malhotra5_
- [`117ea04`](https://github.com/OpenHands/OpenHands/commit/117ea0466ddcb31efd6c8d17c866eb84dd17136d) Add script that outputs the PRs between two commits (#13175) — _@mamoodi_
- [`6822169`](https://github.com/OpenHands/OpenHands/commit/6822169594b7710d30d64a6ce80190f2f51ed627) Fix type signatures for mypy compliance + V1 GitLab Support  (#13171) — _@malhotra5_
- [`35024ae`](https://github.com/OpenHands/OpenHands/commit/35024aeffe138e0c9548820e748e90a45a2fe0fe) chore(deps): bump pypdf from 6.7.3 to 6.7.5 (#13157) — _@dependabot[bot]_
- [`a051f7d`](https://github.com/OpenHands/OpenHands/commit/a051f7d6f603e1dd44cce1e2a70f59941b5f0b19) Add generic type hints to manager class declarations (#13174) — _@malhotra5_
- [`4fe3da4`](https://github.com/OpenHands/OpenHands/commit/4fe3da498ad51308550509a461cb1b1249978ba0) Fix GitLab integration type errors for mypy compliance (#13172) — _@malhotra5_
- [`b890e53`](https://github.com/OpenHands/OpenHands/commit/b890e53a6e8a0e58568d3c9d468e89b12afd564e) Fix UserAuth vs SaasUserAuth type annotations (#13149) — _@malhotra5_
- [`8aa7301`](https://github.com/OpenHands/OpenHands/commit/8aa730105a5d2a5279a6c2498ad74a6f273df5e9) Fix CVE-2023-36464 update openhands-aci in enterprise poetry lock to remove pypdf2 (#13170) — _@aivong-openhands_
- [`e7934ea`](https://github.com/OpenHands/OpenHands/commit/e7934ea6e57c9097d85bcc07ac7827e301225acd) feat(bitbucket): supports cloud and server APIs (#11052) — _@phymbert_
- [`a927b9d`](https://github.com/OpenHands/OpenHands/commit/a927b9dc732ef3f709277ab7b73627dd91cee6f7) Fix CVE-2023-36464 update to openhands-aci 0.3.3 to remove pypdf2 (#13142) — _@aivong-openhands_
- [`0b9fd44`](https://github.com/OpenHands/OpenHands/commit/0b9fd442bd8cac12e488244f1bdd6284cf19c78a) chore: update uv lock and enterprise poetry lock to replace python-jose with jwcrypto (#13105) — _@aivong-openhands_
- [`501bf64`](https://github.com/OpenHands/OpenHands/commit/501bf643122e5d82f7dad7bb2fbfb26c49a73253) Make SlackTeamStore fully async (#13160) — _@tofarr_
- [`6f1a7dd`](https://github.com/OpenHands/OpenHands/commit/6f1a7ddadd17c3a5ae0391ae58a9a3d68dc842db) fix(backend): resolve timezone mismatch in validate_api_key causing database error (#13158) — _@hieptl_
- [`f302658`](https://github.com/OpenHands/OpenHands/commit/f3026583d70a5c299477cb994fcd7d689baaba75) Refactor enterprise code to use async database sessions (Round 3) (#13148) — _@tofarr_
- [`4a3a42c`](https://github.com/OpenHands/OpenHands/commit/4a3a42c8584821fe769c1f409bb585cf33487018) refactor(enterprise): make OrgStore fully async (#13154) — _@tofarr_
- [`2d057bb`](https://github.com/OpenHands/OpenHands/commit/2d057bb7b408ccfed80717da3c6ad56825304e9e) fix(backend): resolve timezone mismatch in accept_tos causing database error (#13155) — _@hieptl_
- [`a7a4eb2`](https://github.com/OpenHands/OpenHands/commit/a7a4eb2664c48c5f24dae44c91a92d6b7382f238) fix(ui): sync pin/unpin state across conversation tabs (#12884) (#12932) — _@bendarte_
- [`0c7ce4a`](https://github.com/OpenHands/OpenHands/commit/0c7ce4ad486fbeeb01ac5f734d2e36de71dc12e4) V1 Changes to Support Path Based Routing (#13120) — _@chuckbutkus_
- [`4dab34e`](https://github.com/OpenHands/OpenHands/commit/4dab34e7b0b447954ff6c7812a526e31614378b2) fix(enterprise): fix type errors - missing returns and async interface (#13145) — _@malhotra5_
- [`f8bbd35`](https://github.com/OpenHands/OpenHands/commit/f8bbd352a9bd14aa9153a81fbeeaa6aec88f3754) Fix typing: make `Message` a dict instead of `dict | str`  (#13144) — _@malhotra5_
- [`17347a9`](https://github.com/OpenHands/OpenHands/commit/17347a95f8dd1d95ae4b6bf77f9bcbf0a6b5c6ad) Make load_org_token and store_org_token async in TokenManager (#13147) — _@tofarr_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
