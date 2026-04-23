# BerriAI/litellm — 2026-04-08

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-07T23:59:59.000Z → 2026-04-08T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is a **security fix for MCP stdio transport** (#25343, commit `2dac54b`): arbitrary command execution via `/mcp-rest/test/*` endpoints is now blocked by a command allowlist, and those test endpoints are restricted to the `PROXY_ADMIN` role. A new `LITELLM_MCP_STDIO_EXTRA_COMMANDS` env var lets operators extend the allowlist (commit `65829f7`), with defense-in-depth that warns rather than hard-fails for legacy server configs (commit `ad31e79`). Anyone running LiteLLM as an MCP gateway should upgrade and audit their stdio server definitions.

On the **release** front, `v1.83.5-nightly` was cut (bumped in #25316), alongside republished stable/RC artifacts `v1.83.3.rc.1`, `v1.82.6.rc.4`, and patch `v1.82.3-stable.patch.3`. The nightly rolls up the MCP fix and the day's infra/UI work.

**Testing & infra** got a major investment:
- A new Playwright **E2E UI test suite** for proxy-admin team and key management landed via #25365, with CI integration, fixtures, role definitions, and removal of older broken key tests (commits `d09d98a`, `a8f4f46`, `467dbc4`). A separate fix restructures HTML files post-UI-build so extensionless routes work in CI (`4ee7d42`).
- **Redis caching tests migrated from GHA to CircleCI** (#25354, commit `3a02c0a`) so they can access Redis secrets; coverage was wired into the combine step (`0104b60`) and `pytest-rerunfailures` added to the job (`7ba0c69`).

**Other notable merges:** Dockerfile fix for the node-gyp symlink path after the npm upgrade (#25048, commit `41407d0`), unblocking image builds. A UI fix replaces a static `Modal.confirm` with `DeleteResourceModal` so policy attachment deletes actually call the API, with a regression test (commit `a02ec3b`).

Also flowing through (older commits surfaced via merges): Gemini **Veo Lite pricing** with size→resolution mapping and `video_resolution`-based cost tiers (`c68a19b`), and a new `BACKGROUND_HEALTH_CHECK_MAX_TOKENS` env var to cap tokens used by background health checks (`6621c40`).

No new issues or PRs were opened in the window — activity was entirely merges, the security patch, and release plumbing.

## Releases

- **[v1.83.5-nightly](https://github.com/BerriAI/litellm/releases/tag/v1.83.5-nightly)** — v1.83.5-nightly _by @github-actions[bot] at 2026-04-08T04:31:27Z_
  > ## Verify Docker Image Signature
  > 
  > All LiteLLM Docker images are signed with [cosign](https://docs.sigstore.dev/cosign/overview/). Every release is signed with the same key introduced in [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0).
  > 
  > **Verify using the pinned commit hash (recommended):**
  > 
  > A commit hash is cryptographically immutable, so this is the strongest way to ensure you are using the original signing key:
  > 
  > ```bash
  > cosign verify \
  >   -…
- **[v1.83.3.rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.83.3.rc.1)** — v1.83.3.rc.1 _by @yuneng-berri at 2026-04-08T21:57:49Z_
  > ## Verify Docker Image Signature
  > 
  > All LiteLLM Docker images are signed with [cosign](https://docs.sigstore.dev/cosign/overview/). Every release is signed with the same key introduced in [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0).
  > 
  > **Verify using the pinned commit hash (recommended):**
  > 
  > A commit hash is cryptographically immutable, so this is the strongest way to ensure you are using the original signing key:
  > 
  > ```bash
  > cosign verify \
  >   -…
- **[v1.82.3-stable.patch.3](https://github.com/BerriAI/litellm/releases/tag/v1.82.3-stable.patch.3)** — v1.82.3-stable.patch.3 _by @yuneng-berri at 2026-04-08T21:53:49Z_
  > ## Verify Docker Image Signature
  > 
  > All LiteLLM Docker images are signed with [cosign](https://docs.sigstore.dev/cosign/overview/). Every release is signed with the same key introduced in [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0).
  > 
  > **Verify using the pinned commit hash (recommended):**
  > 
  > A commit hash is cryptographically immutable, so this is the strongest way to ensure you are using the original signing key:
  > 
  > ```bash
  > cosign verify \
  >   -…
- **[v1.83.2-nightly](https://github.com/BerriAI/litellm/releases/tag/v1.83.2-nightly)** — v1.83.2-nightly _by @yuneng-berri at 2026-04-08T21:38:22Z_
  > ## Verify Docker Image Signature
  > 
  > All LiteLLM Docker images are signed with [cosign](https://docs.sigstore.dev/cosign/overview/). Every release is signed with the same key introduced in [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0).
  > 
  > **Verify using the pinned commit hash (recommended):**
  > 
  > A commit hash is cryptographically immutable, so this is the strongest way to ensure you are using the original signing key:
  > 
  > ```bash
  > cosign verify \
  >   -…
- **[v1.82.6.rc.4](https://github.com/BerriAI/litellm/releases/tag/v1.82.6.rc.4)** — v1.82.6.rc.4 _by @yuneng-berri at 2026-04-08T21:51:12Z_
  > ## Verify Docker Image Signature
  > 
  > All LiteLLM Docker images are signed with [cosign](https://docs.sigstore.dev/cosign/overview/). Every release is signed with the same key introduced in [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0).
  > 
  > **Verify using the pinned commit hash (recommended):**
  > 
  > A commit hash is cryptographically immutable, so this is the strongest way to ensure you are using the original signing key:
  > 
  > ```bash
  > cosign verify \
  >   -…


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`072d410`](https://github.com/BerriAI/litellm/commit/072d4108c3252e7943cd49b4481b3205c692eee0) Merge pull request #25365 from BerriAI/litellm_e2e_ui_tests — _@yuneng-berri_
- [`d871bce`](https://github.com/BerriAI/litellm/commit/d871bce86e5302dc7c9b36ac8aff9257a5e73cff) Merge pull request #25354 from BerriAI/litellm_migrate_redis_tests_to_circleci — _@shin-berri_
- [`467dbc4`](https://github.com/BerriAI/litellm/commit/467dbc4a3c1b74473b245da21ce3e9faeb82e534) [Fix] Remove old broken key tests superseded by proxy-admin/keys.spec.ts — _@yuneng-berri_
- [`4ee7d42`](https://github.com/BerriAI/litellm/commit/4ee7d42981a2b3b5bcae3b6fd33135bc66aa1597) [Fix] Restructure HTML files after UI build so extensionless routes work in CI — _@yuneng-berri_
- [`ac9ebdf`](https://github.com/BerriAI/litellm/commit/ac9ebdf4d8d90b3f2d9fed2faedca1925ff76ccf) [Fix] Rename CI job to e2e_ui_testing and remove duplicate old job definition — _@yuneng-berri_
- [`a8f4f46`](https://github.com/BerriAI/litellm/commit/a8f4f464ceb4602e6b2c75e899444745649e15a8) [Fix] Add missing test fixtures and address review feedback — _@yuneng-berri_
- [`d09d98a`](https://github.com/BerriAI/litellm/commit/d09d98a70a8bd5f2b9d04998bb6a31192be7965f) [Feature] E2E UI tests: proxy-admin team and key management with CI integration — _@yuneng-berri_
- [`7ba0c69`](https://github.com/BerriAI/litellm/commit/7ba0c69a07a0eed811970281340e39a77026d411) [Fix] Install pytest-rerunfailures in redis caching CircleCI job — _@yuneng-berri_
- [`2dac54b`](https://github.com/BerriAI/litellm/commit/2dac54b732e93baf5964ff739f9c4efa3d2d7eb1) Merge pull request #25343 from BerriAI/litellm_fix-mcp-stdio-rce3 — _@yuneng-berri_
- [`0104b60`](https://github.com/BerriAI/litellm/commit/0104b60d8e2cb92ffc869c76a05ba27ecfcec2c0) [Infra] Add redis_caching_coverage to coverage combine command — _@yuneng-berri_
- [`2834659`](https://github.com/BerriAI/litellm/commit/2834659f198887e396033588a6c5b0b2420188be) fix tests and mypy — _@Sameerlite_
- [`64cbadb`](https://github.com/BerriAI/litellm/commit/64cbadb216050bac9b96e8bdcda400bc07065f8d) Fix greptile review — _@Sameerlite_
- [`3a02c0a`](https://github.com/BerriAI/litellm/commit/3a02c0ac6b1770b1083965c68946e45bf7a3193d) [Infra] Migrate Redis caching tests from GHA to CircleCI — _@yuneng-berri_
- [`b08e058`](https://github.com/BerriAI/litellm/commit/b08e05845158b89f11b9200a4c07d5a2ca9d6181) Fix greptile reviews — _@Sameerlite_
- [`d8598ab`](https://github.com/BerriAI/litellm/commit/d8598abf150f0e3716718f0d6060dae858d016fc) Fix code qa — _@Sameerlite_
- [`65829f7`](https://github.com/BerriAI/litellm/commit/65829f79d7cad231f20dc82f4e44ef153da792bd) docs: document LITELLM_MCP_STDIO_EXTRA_COMMANDS in env reference — _@Sameerlite_
- [`69be5be`](https://github.com/BerriAI/litellm/commit/69be5be88b3243ac05ac38f37abe7aae61d20f2c) fix(mcp): move inline imports to module level and enforce stdio allowlist — _@Sameerlite_
- [`e748aa8`](https://github.com/BerriAI/litellm/commit/e748aa8e16830e3d59776c5b8aee0e937b7ed36f) Add docs — _@Sameerlite_
- [`c68a19b`](https://github.com/BerriAI/litellm/commit/c68a19b8830110543e4948814cc6afad620929db) feat(gemini): Veo Lite pricing, size→resolution, usage video_resolution for cost tiers — _@Sameerlite_
- [`6621c40`](https://github.com/BerriAI/litellm/commit/6621c40622bf6e37879529c111d0a1cc9e2f2cd2) feat(health-check): add BACKGROUND_HEALTH_CHECK_MAX_TOKENS env var — _@Sameerlite_
- [`ad31e79`](https://github.com/BerriAI/litellm/commit/ad31e79b975830611b16b98ebf30b8ea920c89aa) fix(mcp): address Greptile review feedback — _@Sameerlite_
- [`7b7f304`](https://github.com/BerriAI/litellm/commit/7b7f30467599a52bb028c3c98cbae4f45b4779f3) fix(mcp): block arbitrary command execution via stdio transport — _@Sameerlite_
- [`727a6f2`](https://github.com/BerriAI/litellm/commit/727a6f21b813caaa1724ed70d455570af40f6213) Update ui/litellm-dashboard/src/components/policies/index.tsx — _@Lucas-Song-Dev_
- [`a02ec3b`](https://github.com/BerriAI/litellm/commit/a02ec3bfa0d72fcf674c86828974bd6d5853c5c4) fix(ui): delete policy attachments via controlled modal — _@Lucas-Song-Dev_
- [`62757ff`](https://github.com/BerriAI/litellm/commit/62757ff48f59d74c0ca681feb85522f9d003a9e7) Merge pull request #25316 from BerriAI/litellm_yj_apr7 — _@shin-berri_
- [`bd327db`](https://github.com/BerriAI/litellm/commit/bd327dbe5457055ca06821fbbd70894465fd1627) bump: version 1.83.4 → 1.83.5 — _@yuneng-berri_
- [`5f49f29`](https://github.com/BerriAI/litellm/commit/5f49f29f4e4c0679e0af7604a349e7b2a4ee3513) Merge pull request #25048 from joereyna/fix/dockerfile-node-gyp-path — _@yuneng-berri_
- [`41407d0`](https://github.com/BerriAI/litellm/commit/41407d0287ee8bb521799373cc2c4371ea5e6693) Fix node-gyp symlink path after npm upgrade in Dockerfile — _@joereyna_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
