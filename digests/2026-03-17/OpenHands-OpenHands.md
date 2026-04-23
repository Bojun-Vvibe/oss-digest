# OpenHands/OpenHands — 2026-03-17

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-03-16T23:59:59.000Z → 2026-03-17T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline change is a **security hotfix for CVE-2026-27962**, bumping `authlib` to 1.6.9 (#13439), which anyone running OpenHands in production should pick up immediately. A second hotfix from `malhotra5` switches the file-download result to use a direct attribute access (#13448), suggesting a regression in how downloads were being serialized.

On the platform/API side, `xingyaoww` landed a notable feature exposing an `expose_secrets` parameter on `/users/me` and introducing a sandbox-scoped secrets API (#13383) — worth reading if you integrate against the OpenHands API or care about secret-handling semantics. Relatedly, `aivong-openhands` disabled budget enforcement when `ENABLE_BILLING=false` (#13440, PLTF-309), which fixes a likely footgun for self-hosted users who weren't running billing.

Frontend saw a coordinated push from `HeyItsChloe` rolling out new CTAs across the home page (#13339), login page (#13337), and context menu (#13338), plus a new self-hosted new-user questionnaire flow (#13367). Together these represent a visible UX refresh; reviewers focused on the self-hosted experience should look at #13367 in particular. A planner fix from `nehaaprasad` corrects PLAN.md rendering and search labels (#13418).

Documentation got meaningful attention: `jamiechicago312` reworked Development.md and CONTRIBUTING.md with OS-specific setup guides (#13432), and `saurya` merged a long-pending PR adding architecture diagrams covering system components and the WebSocket flow (#12542) — useful onboarding material for new contributors. Smaller doc/chore items include a README typo fix (#13444), a skills-path comment cleanup (#12794), and a dependabot bump of `mcp` from 1.25.0 → 1.26.0 in the mcp-packages group (#13314).

No new issues, PRs, or releases were recorded in the window — all activity came through direct merges to `main`. Priority reading order: #13439 (CVE), #13448 (hotfix), #13383 (secrets API), then #13440 and the frontend CTA cluster.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`26fa118`](https://github.com/OpenHands/OpenHands/commit/26fa1185a47e82b7c5e5d36f0a5cf55e88d6ff46) chore(deps): bump mcp from 1.25.0 to 1.26.0 in the mcp-packages group (#13314) — _@dependabot[bot]_
- [`d3a8b03`](https://github.com/OpenHands/OpenHands/commit/d3a8b037f25cc0c488b53ce97072cd33869694fe) feat(frontend): home page cta (#13339) — _@HeyItsChloe_
- [`af1fa89`](https://github.com/OpenHands/OpenHands/commit/af1fa8961af6501c2734a3bb559649c2ed4a9a04) feat(frontend): login page cta (#13337) — _@HeyItsChloe_
- [`3b215c4`](https://github.com/OpenHands/OpenHands/commit/3b215c4ad1c9982c0a4a68f1fe589b5adf0a17d3) feat(frontend): context menu cta (#13338) — _@HeyItsChloe_
- [`7516b53`](https://github.com/OpenHands/OpenHands/commit/7516b53f5a3bceed94f6a4776dd426df396e67e6) feat(frontend): self hosted new user questions (#13367) — _@HeyItsChloe_
- [`855ef7b`](https://github.com/OpenHands/OpenHands/commit/855ef7ba5f417fd9cffa09beba178bbfb3689251) PLTF-309: disable budget enforcement when ENABLE_BILLING=false (#13440) — _@aivong-openhands_
- [`09ca1b8`](https://github.com/OpenHands/OpenHands/commit/09ca1b882f348ba3122fc648f568239929878437) (Hotfix): use direct attrib for file download result (#13448) — _@malhotra5_
- [`79cfffc`](https://github.com/OpenHands/OpenHands/commit/79cfffce60b0db5a4c4759ded9944a0825ca3839) docs: Improve Development.md and CONTRIBUTING.md with OS-specific setup guides (#13432) — _@jamiechicago312_
- [`b68c752`](https://github.com/OpenHands/OpenHands/commit/b68c75252dd56c05f503697e1c942921229d5ff5) Add architecture diagrams explaining system components and WebSocket flow (#12542) — _@saurya_
- [`d58e12a`](https://github.com/OpenHands/OpenHands/commit/d58e12ad74598f1d8adb3f0f4a55ec6ad1048a09) Fix CVE-2026-27962: Update authlib to 1.6.9 (#13439) — _@aivong-openhands_
- [`bd83703`](https://github.com/OpenHands/OpenHands/commit/bd837039dd8ae2babaacabd68f533307f5bd46cc) chore: update skills path comments (#12794) — _@enyst_
- [`8a77790`](https://github.com/OpenHands/OpenHands/commit/8a7779068a3ece16f3221263a29ec67c434a37a6) docs: fix typo in README.md (#13444) — _@travellingsoldier85_
- [`3809993`](https://github.com/OpenHands/OpenHands/commit/38099934b6927aed7202cf257b7506954859061b) fix : planner PLAN.md rendering and search labels (#13418) — _@nehaaprasad_
- [`75c823c`](https://github.com/OpenHands/OpenHands/commit/75c823c4862eda39180d214a3ab359f63add3151) feat: expose_secrets param on /users/me + sandbox-scoped secrets API (#13383) — _@xingyaoww_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
