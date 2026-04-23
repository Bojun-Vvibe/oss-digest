# OpenHands/OpenHands — 2026-03-18

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-03-17T23:59:59.000Z → 2026-03-18T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A busy day of bug fixes and incremental enterprise/frontend features in OpenHands, with no releases, merged PRs metadata, or new issues recorded — just a stream of ~20 commits to `main`.

The most consequential change is a **race-condition fix in `LocalFileStore`**, which now uses atomic writes to prevent corruption under concurrent access (#13480). Two other reliability fixes stand out: handling **tagless container images in `DockerSandboxService`** (#13238), and returning an **empty skills list rather than 404 for stopped sandboxes** (#13429), both of which should reduce spurious failures in sandbox lifecycle handling. A **CVE fix bumps `pyasn1` to 0.6.3** to address CVE-2026-30922 (#13452) and is worth picking up promptly.

On the org/enterprise track, several changes land together from the org project:
- A new **service API for automation API key creation** (#13467) and a **`GET /api/keys/current` endpoint exposing API key `org_id`** (#13469).
- Frontend polish: **preserving the settings route on refresh** (#13462), a **clearer conversation-access error with workspace hint** (#13461), and **contextual info messages on the LLM settings page** (#13460).

Other notable fixes: stop calling the agent-server `/generate_title` endpoint (#13093), which removes a dead/expensive call path; handle **empty body in the GitHub issue resolver** (#13039); add a **sleep to the container wait loop** to avoid a tight-loop security/perf issue (#12869); and add **loading feedback to the git-changes refresh button** (#12792).

Smaller but user-visible: a **Catalan translation** (#13299), sentence-case for the "Waiting for sandbox" string (#12958), and rendering of **V1 paired tool summaries** in the UI (#13451). Docs/contrib updates include a new **cross-repo SDK ↔ OH Cloud e2e testing skill** (#13446), a clarified provider-token docstring (#13386), CONTRIBUTING tweaks (#13463), and removal of the unused `WORK_HOSTS_SKILL_FOOTER` (#12594).

Read first: #13480 (atomic writes), #13452 (CVE), #13238 and #13429 (sandbox robustness).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`7edebcb`](https://github.com/OpenHands/OpenHands/commit/7edebcbc0c09fd0edc6c666b327919f267e12197) fix: use atomic write in LocalFileStore to prevent race conditions (#13480) — _@tofarr_
- [`abd1f99`](https://github.com/OpenHands/OpenHands/commit/abd1f9948f888c73440b94334e57771aabee5556) fix: return empty skills list instead of 404 for stopped sandboxes (#13429) — _@HeyItsChloe_
- [`2879e58`](https://github.com/OpenHands/OpenHands/commit/2879e587813b8a128c155d9e2bbcece862b6153c) Fix CVE-2026-30922: Update pyasn1 to 0.6.3 (#13452) — _@aivong-openhands_
- [`1d1ffc2`](https://github.com/OpenHands/OpenHands/commit/1d1ffc2be0454db99cfc77dc05cba5da5e74688c) feat(enterprise): Add service API for automation API key creation (#13467) — _@malhotra5_
- [`db41148`](https://github.com/OpenHands/OpenHands/commit/db41148396188a7566f412f1053211a655aaea7d) feat(backend): expose API key org_id via new GET /api/keys/current endpoint (org project) (#13469) — _@hieptl_
- [`39a4ca4`](https://github.com/OpenHands/OpenHands/commit/39a4ca422f35b276d8b508bf52e9fddd9ae5a0d5) fix: use sentence case for 'Waiting for sandbox' text (#12958) — _@rbren_
- [`6d86803`](https://github.com/OpenHands/OpenHands/commit/6d86803f4154894db19230d66c83e2d18fd3f9dd) Add loading feedback to git changes refresh button (#12792) — _@veeceey_
- [`8e0386c`](https://github.com/OpenHands/OpenHands/commit/8e0386c4163e9e2d16a68a974dbd2150a6b1af12) feat: add Catalan translation (#13299) — _@jordimas_
- [`48cd85e`](https://github.com/OpenHands/OpenHands/commit/48cd85e47e7f87c5cc64ceafa28b4c412333e96f) fix(security): add sleep to container wait loop (#12869) — _@Fieldnote-Echo_
- [`c62b47d`](https://github.com/OpenHands/OpenHands/commit/c62b47dcb13daa567860ae624a1fb32787b2dd37) fix: handle empty body in GitHub issue resolver (#13039) — _@stakeswky_
- [`eb9a822`](https://github.com/OpenHands/OpenHands/commit/eb9a822d4c5ad3283d12cc6c1dc5c72158862004) Update CONTRIBUTING.md (#13463) — _@jamiechicago312_
- [`fb7333a`](https://github.com/OpenHands/OpenHands/commit/fb7333aa62aee39e86bd4c3a659a4f3be2e5074e) fix: stop calling agent-server /generate_title (#13093) — _@enyst_
- [`fb23418`](https://github.com/OpenHands/OpenHands/commit/fb23418803e463a356778a172e2e8eadce70f1dd) clarify docstring for provider token reference (#13386) — _@aivong-openhands_
- [`991585c`](https://github.com/OpenHands/OpenHands/commit/991585c05d995e5a6d89308fbef2e9d8aea7de7c) docs: add cross-repo testing skill for SDK ↔ OH Cloud e2e workflow (#13446) — _@xingyaoww_
- [`35a40dd`](https://github.com/OpenHands/OpenHands/commit/35a40ddee87427c1fa3f156be42965ef5b61a840) fix: handle containers with tagless images in DockerSandboxService (#13238) — _@cbagwell_
- [`5d1f9f8`](https://github.com/OpenHands/OpenHands/commit/5d1f9f815ac35421bad541e4dc56cdab67979b92) fix(frontend): preserve settings page route on browser refresh (org project) (#13462) — _@hieptl_
- [`d3bf989`](https://github.com/OpenHands/OpenHands/commit/d3bf989e7745c785c2d2befb7111118429b8a6ff) feat(frontend): improve conversation access error message with workspace hint (org project) (#13461) — _@hieptl_
- [`6589e59`](https://github.com/OpenHands/OpenHands/commit/6589e592e371a9320abd9f8da1c1c8dbde3078ab) feat(frontend): add contextual info messages on LLM settings page (org project) (#13460) — _@hieptl_
- [`fe4c056`](https://github.com/OpenHands/OpenHands/commit/fe4c0569f7ec8ea2cfb87dfee892e6be9f5d2840) Remove unused WORK_HOSTS_SKILL_FOOTER (#12594) — _@cbagwell_
- [`28ecf06`](https://github.com/OpenHands/OpenHands/commit/28ecf0640425a4e27e1fde7d6b7b863a3e70de51) Render V1 paired tool summaries (#13451) — _@xingyaoww_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
