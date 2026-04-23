# BerriAI/litellm — 2026-04-02

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-01T23:59:59.000Z → 2026-04-02T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A busy infra-and-fixes day on the Berri internal fork (default branch `litellm_internal_staging`); no public releases, PRs or issues in window. Version bumped 0.4.62 → 0.4.63 (3ad953e), with the internal dev branch merged into main via #25036 (3604b60) and an extras version bump via #25034 (f11cdf7).

The headline functional change is around **team access groups and model allowlists**. A new feature resolves access-group-derived models/MCPs/agents in `/team/info` and `/v2/team/list` responses (f626587), followed by a perf pass that collapses three separate access-group lookups into a single pass with `asyncio.gather` in the list endpoint (bbe708b). A cyclic-import fix lazy-loads `get_access_object` and short-circuits the all-proxy-models display path (f0bd334). Related auth hardening: custom auth now enforces key-level model allowlists via `custom_auth_run_common_checks` (folded into #25036), and budgets are now enforced for models not present in the cost map (#24949, adedae2), which also fixes a log-injection issue in debug messages.

**Supply-chain hardening** landed via #25023 (51af6fe / 9c5fda4): removed the unused `ci_cd/publish-proxy-extras.sh` PyPI publish script and `.pre-commit-config.yaml` (which pulled external hooks), and added a pip binary-only install policy. Separately, #24951 (068e6e2) removes the Neon CLI and pins all JS dependencies — worth a look if you consume the admin UI build.

**Bedrock model catalog refresh** in #24947 (d1df4e8) updates `model_prices_and_context_window`, replaces stale Sonnet model IDs and fixes pricing; downstream test fixes for gov pricing followed in #25022 (b7ccc5b), including a cost-expectation update because a US-based model is now used.

Docs: April townhall announcement and a hardcoded URL fix (#25021, cae8613); `default_team_params` added to the config reference with sub-fields (59b0910); clarification that the `models` sub-field only applies to SSO auto-created teams (c19a63e); general cleanup (#25026).

Read first if you operate the proxy: #25036 (auth allowlist) and #24949 (budget enforcement gap).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`3604b60`](https://github.com/BerriAI/litellm/commit/3604b600d3fa6b0217c751ba9166f3fcbc5a24c7) [Infra] Merge internal dev branch with main (#25036) — _@yuneng-berri_
- [`f11cdf7`](https://github.com/BerriAI/litellm/commit/f11cdf79349bb4dfc141c00601e6d10b3867fa97) Merge pull request #25034 from BerriAI/extras_apr2 — _@shin-berri_
- [`f0bd334`](https://github.com/BerriAI/litellm/commit/f0bd33486ead7ed2ac025ab3675a92969920e649) fix: lazy import get_access_object to break cyclic import + short-circuit all-proxy-models display — _@ryan-crabbe-berri_
- [`3ad953e`](https://github.com/BerriAI/litellm/commit/3ad953e75cc49535932695321cdf963f59e118cc) bump: version 0.4.62 → 0.4.63 — _@yuneng-berri_
- [`c19a63e`](https://github.com/BerriAI/litellm/commit/c19a63e2bf263f585a5e13e5073d73e20b539dc2) docs: clarify that models sub-field only applies to SSO auto-created teams — _@ryan-crabbe-berri_
- [`b7ccc5b`](https://github.com/BerriAI/litellm/commit/b7ccc5b691d90ecca83cf1b8ce12140022247634) [Test Fix] fix gov pricing tests (#25022) — _@clfhhc_
- [`59b0910`](https://github.com/BerriAI/litellm/commit/59b09102b93060b0960de0108cb5a1e457ef9188) docs: add default_team_params to config reference and update examples — _@ryan-crabbe-berri_
- [`06df8ed`](https://github.com/BerriAI/litellm/commit/06df8edf922b6b08c70afbc4aa1cfa1f1ac46192) docs: cleanup (#25026) — _@krrish-berri-2_
- [`bbe708b`](https://github.com/BerriAI/litellm/commit/bbe708b093d4fc4f59f451599eb86b991dc85b91) perf(teams): single-pass access group resolution + asyncio.gather in list endpoint — _@ryan-crabbe-berri_
- [`9c5fda4`](https://github.com/BerriAI/litellm/commit/9c5fda435f49b827644207ecbd0a8203cd258495) Merge pull request #25023 from BerriAI/litellm_/fervent-noether — _@yuneng-berri_
- [`51af6fe`](https://github.com/BerriAI/litellm/commit/51af6fedb31452dced171df53a133082bc18adca) [Infra] Harden supply chain: remove unused scripts, add pip binary-only install — _@yuneng-berri_
- [`cae8613`](https://github.com/BerriAI/litellm/commit/cae86136608d6a160cdbc46e42aa3d190a13b427) Announce April Townhall (#25021) — _@krrish-berri-2_
- [`068e6e2`](https://github.com/BerriAI/litellm/commit/068e6e2a9ec85921367024a4c6b0c19e7dfcf7bc) Merge pull request #24951 from BerriAI/litellm_remove_neon_cli — _@yuneng-berri_
- [`f626587`](https://github.com/BerriAI/litellm/commit/f62658795aeb1202df80cf290e9525de1ea85b2c) feat(teams): resolve access group models/MCPs/agents in team endpoints — _@ryan-crabbe-berri_
- [`d1df4e8`](https://github.com/BerriAI/litellm/commit/d1df4e838b3d105ebd78865ee879ebaa7e65b6a6) Litellm fix update bedrock models (#24947) — _@clfhhc_
- [`adedae2`](https://github.com/BerriAI/litellm/commit/adedae2cfac11051a2be7e3bddd5122d3ae9801b) fix(auth): enforce budget for models not in cost map (#24949) — _@michelligabriele_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
