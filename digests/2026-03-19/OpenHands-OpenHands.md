# OpenHands/OpenHands — 2026-03-19

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-03-18T23:59:59.000Z → 2026-03-19T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day was dominated by **security and multi-tenant isolation fixes**, with no releases, issues, or PRs in the window — just 18 merged commits.

The most consequential change is a cluster of cross-organization data leakage fixes: secrets deletion no longer cascades across orgs when storing secrets (#13500), API key authorization now validates `org_id` to block cross-org access (#13468), and frontend organization data queries are properly scoped by org ID (#13459). Anyone running multi-tenant deployments should pull these.

A parallel security sweep patched several CVEs and vulnerable dependencies in runtime images: GLib CVE-2025-14087 (#13403), pypdf bumped to 6.9.1 for CVE-2026-33123 (#13473), OpenSSL updated in Debian base images (#13401), vulnerable VSCode extensions removed from the `build_from_scratch` path (#13399), and `socket.io-parser` bumped to 4.2.6 in the frontend (#13474). Relatedly, the enterprise base image now pins a commit SHA instead of a mutable branch tag (#13498), closing a supply-chain footgun.

Notable functional changes:
- **New `/clear` endpoint for V1 conversations** (#12786) — the only real feature shipped today.
- **Auto-forward `LLM_*` env vars to agent-server** plus a host-network config fix (#13192), which simplifies local agent-server setups.
- **VSCode stays accessible when the agent errors** (#13492), a useful debugging UX win.

Bug fixes worth noting: auto-logout on 401 errors is suppressed in OSS mode (#13466), budget handling no longer crashes when values are `None` (#13482), the frontend now picks the correct git path based on sandbox grouping strategy (#13488), and LiteLLM user creation is ensured before API key generation (#12667).

Frontend refactors from @hieptl extracted `AddCreditsModal` into its own component (#13490) and added a small delay before closing the user context menu (#13491) — low-risk, skip unless touching that UI.

**Recommended reads:** #13500, #13468, #13459 (org isolation); #12786 (`/clear`); #13192 (env var forwarding).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`f75141a`](https://github.com/OpenHands/OpenHands/commit/f75141af3e94528c18536b6d7697fe0ed652f17c) fix: prevent secrets deletion across organizations when storing secrets (#13500) — _@chuckbutkus_
- [`e4515b2`](https://github.com/OpenHands/OpenHands/commit/e4515b21eba030cec031cbd48f3e5051327b57b3) chore(deps): bump socket.io-parser from 4.2.5 to 4.2.6 in /frontend in the security-all group across 1 directory (#13474) — _@dependabot[bot]_
- [`a8f6a35`](https://github.com/OpenHands/OpenHands/commit/a8f6a353416e391271f17c3be84f044fcb840c6a) fix: patch GLib CVE-2025-14087 in runtime Docker images (#13403) — _@aivong-openhands_
- [`f706a21`](https://github.com/OpenHands/OpenHands/commit/f706a217d0e658c088d22a7192067e506ddd79a5) fix: Use commit SHA instead of mutable branch tag for enterprise base (#13498) — _@jlav_
- [`0137201`](https://github.com/OpenHands/OpenHands/commit/0137201903c05d748da99a36e0f68b512d24ed6b) fix: remove vulnerable VSCode extensions in build_from_scratch path (#13399) — _@aivong-openhands_
- [`49a9888`](https://github.com/OpenHands/OpenHands/commit/49a98885aba218379f8876d30006828aa576debb) chore: Update OpenSSL in Debian images for security patches (#13401) — _@aivong-openhands_
- [`38648bd`](https://github.com/OpenHands/OpenHands/commit/38648bddb3afbbef1fc93c5631724118cbc69191) fix(frontend): use correct git path based on sandbox grouping strategy (#13488) — _@hieptl_
- [`b44774d`](https://github.com/OpenHands/OpenHands/commit/b44774d2be0b910ae776a001a40bc8982ef8a067) refactor(frontend): extract AddCreditsModal into separate component file (#13490) — _@hieptl_
- [`0433089`](https://github.com/OpenHands/OpenHands/commit/04330898b6fca7dbe642e8221076783b94b1754d) refactor(frontend): add delay before closing user context menu (#13491) — _@hieptl_
- [`120fd75`](https://github.com/OpenHands/OpenHands/commit/120fd7516a4e4eb9b4aa808bfaf53eb3072558e3) Fix: Prevent auto-logout on 401 errors in oss mode (#13466) — _@cbagwell_
- [`2224127`](https://github.com/OpenHands/OpenHands/commit/2224127ac305f353d2013655e71b591c33291056) Fix when budgets are None (#13482) — _@chuckbutkus_
- [`2d1e9fa`](https://github.com/OpenHands/OpenHands/commit/2d1e9fa35b58f22bbafc266fe61f045e0d781cbd) Fix CVE-2026-33123: Update pypdf to 6.9.1 (#13473) — _@aivong-openhands_
- [`0ec962e`](https://github.com/OpenHands/OpenHands/commit/0ec962e96be6281a4603e851536bcd7953613f67) feat: add /clear endpoint for V1 conversations (#12786) — _@MkDev11_
- [`3a9f00a`](https://github.com/OpenHands/OpenHands/commit/3a9f00aa3714cd67398aa8ac7ccfe1b966134073) Keep VSCode accessible when agent errors (#13492) — _@enyst_
- [`e02dbb8`](https://github.com/OpenHands/OpenHands/commit/e02dbb89749c6a4874ea6ca5cdb78037699f7ecd) fix(backend): validate API key org_id during authorization to prevent cross-org access (org project) (#13468) — _@hieptl_
- [`8039807`](https://github.com/OpenHands/OpenHands/commit/8039807c3f4c8bd8eeea96c2fe6bd87399285317) fix(frontend): scope organization data queries by organization ID (org project) (#13459) — _@hieptl_
- [`a96760e`](https://github.com/OpenHands/OpenHands/commit/a96760eea70fa99b1bcb73bd6a35171c596366d1) fix: ensure LiteLLM user exists before generating API keys (#12667) — _@saurya_
- [`dcb2e21`](https://github.com/OpenHands/OpenHands/commit/dcb2e21b87b87d9a52c23c8a44f3d907f0648f60) feat: Auto-forward LLM_* env vars to agent-server and fix host network config (#13192) — _@saurya_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
