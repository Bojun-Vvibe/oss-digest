# BerriAI/litellm — 2026-04-01

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-31T23:59:59.000Z → 2026-04-01T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's dominant theme is a large dependency-pinning and supply-chain hardening push on the `litellm_internal_staging` branch, driven almost entirely by `yuneng-berri`. The headline is the merge of #24905 ([7250cba](https://github.com/BerriAI/litellm/commit/7250cba3db85366346a0b2972ab2e7ca054778b9)) — "[Infra] Pin All Docker Build Dependencies" — which pins every dep across all three production Docker images to exact versions so future upgrades are intentional ([5f63873](https://github.com/BerriAI/litellm/commit/5f63873dcad12d0aee51eabc974273eda5278205)). A companion change ([006d481](https://github.com/BerriAI/litellm/commit/006d48102563de962f62a8a118a4aa3919858f90)) removes `@neondatabase/api-client` and `neonctl` to mitigate the axios supply-chain CVE-2026-25639, and pins all JS deps to exact versions.

Most of the remaining commits are fallout from that pinning effort and are worth scanning if you maintain the build:

- A persistent `boto3` 1.42.80 vs `aioboto3` 15.5.0 / `aiobotocore` botocore-range conflict required overrides in `uv-overrides.txt` ([467abd1](https://github.com/BerriAI/litellm/commit/467abd19090e731bd13dcd0de8e0e07e78a1820f), [b7849bf](https://github.com/BerriAI/litellm/commit/b7849bff56dd5de05111ab7c6b6fbcd89176197d)), filtering `aioboto3` from the resolver ([fc8eb81](https://github.com/BerriAI/litellm/commit/fc8eb81549f4e5a3992f9abad91978ecdf11e43a)), and ultimately removing the unused `aioboto3` dep entirely since async SageMaker doesn't actually import it ([85f72c9](https://github.com/BerriAI/litellm/commit/85f72c9d2457af8f1e0dc4aae058fad7f7d7884e)).
- `cryptography` was reverted to 43.0.3 because 46.0.5 drops Python 3.9.0/3.9.1 support, which conflicts with the project's `>=3.9` range ([0fb5ab5](https://github.com/BerriAI/litellm/commit/0fb5ab515dfbd0bf798aa5e55e3a3e7a02dd8739)).
- `pytest-asyncio` 1.x no longer auto-provides an event loop in sync fixtures, so several tests/fixtures were marked async ([7b277d3](https://github.com/BerriAI/litellm/commit/7b277d36cd7113d2d114f2ab52cf21a9bef04a9b)).
- License-checker allowlist additions for `aioitertools`, `wrapt`, and `hf-xet` ([9c6d5f2](https://github.com/BerriAI/litellm/commit/9c6d5f2b605a0a6c4d23771668234f304571918c), [7bd6fa8](https://github.com/BerriAI/litellm/commit/7bd6fa850900b6676b4a1cf2c1bd3191e7859d3f)).

The one notable runtime fix is #24592 ([283375f](https://github.com/BerriAI/litellm/commit/283375f4d6910eb92e0a926a5182e493f73ef7b4)): a race condition in proxy streaming where `asyncio.create_task` in `CSW.__anext__` scheduled deferred guardrail-information logging as an independent task, racing with stream completion. Also merged: Codecov re-enabled in the GHA matrix (#24804), CodeQL UI fixes (#24880), a release workflow with cosign verification (#24881), and a Bedrock test fix for `claude-haiku-4-5` (#24931). No releases, PRs, or issues in the window.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`006d481`](https://github.com/BerriAI/litellm/commit/006d48102563de962f62a8a118a4aa3919858f90) [Fix] Remove neon CLI dependency and pin all JS dependencies — _@yuneng-berri_
- [`7250cba`](https://github.com/BerriAI/litellm/commit/7250cba3db85366346a0b2972ab2e7ca054778b9) Merge pull request #24905 from BerriAI/litellm_pin_pip_2 — _@yuneng-berri_
- [`d038093`](https://github.com/BerriAI/litellm/commit/d038093562bb0c251f9b21596c09e5303bfb768e) add poetry lock — _@yuneng-berri_
- [`0fb5ab5`](https://github.com/BerriAI/litellm/commit/0fb5ab515dfbd0bf798aa5e55e3a3e7a02dd8739) [Fix] Revert cryptography to 43.0.3 in pyproject.toml for Python 3.9.0/3.9.1 compat — _@yuneng-berri_
- [`85f72c9`](https://github.com/BerriAI/litellm/commit/85f72c9d2457af8f1e0dc4aae058fad7f7d7884e) [Fix] Remove unused aioboto3 dependency and botocore conflict workarounds — _@yuneng-berri_
- [`9c6d5f2`](https://github.com/BerriAI/litellm/commit/9c6d5f2b605a0a6c4d23771668234f304571918c) [Fix] Add aioitertools and wrapt to authorized licenses — _@yuneng-berri_
- [`821a634`](https://github.com/BerriAI/litellm/commit/821a634d25bf060059525aa4826e7ca1f7230231) [Fix] Handle boto3/aioboto3 botocore conflict across CI and Docker builds — _@yuneng-berri_
- [`fc8eb81`](https://github.com/BerriAI/litellm/commit/fc8eb81549f4e5a3992f9abad91978ecdf11e43a) [Fix] Filter aioboto3 from resolver to fix boto3/aioboto3 conflict — _@yuneng-berri_
- [`b7849bf`](https://github.com/BerriAI/litellm/commit/b7849bff56dd5de05111ab7c6b6fbcd89176197d) [Fix] Add boto3 override alongside botocore in uv-overrides.txt — _@yuneng-berri_
- [`467abd1`](https://github.com/BerriAI/litellm/commit/467abd19090e731bd13dcd0de8e0e07e78a1820f) [Fix] Add uv override for boto3/aioboto3 botocore conflict — _@yuneng-berri_
- [`43077af`](https://github.com/BerriAI/litellm/commit/43077af3786caaa3679fcbb90536fa1eff80692e) [Fix] Sync CircleCI dependency pins with requirements.txt — _@yuneng-berri_
- [`e4442a4`](https://github.com/BerriAI/litellm/commit/e4442a4d982ce6f0b6ad7f7009adf8cb4bbe588a) test fix us.anthropic.claude-haiku-4-5-20251001-v1:0 (#24931) — _@ishaan-berri_
- [`c987bdb`](https://github.com/BerriAI/litellm/commit/c987bdba84cf3e1d43155af12105681e3aed8370) fix lint problem (#24932) — _@clfhhc_
- [`0d637b1`](https://github.com/BerriAI/litellm/commit/0d637b1a766696f2f31488b3ab20522ae21fabb3) [Fix] Align requirements.txt versions with pyproject.toml after merge — _@yuneng-berri_
- [`6a2b03a`](https://github.com/BerriAI/litellm/commit/6a2b03a850e6501eba40792231d6c7bab8d6e30d) [Infra] Merge main and resolve dependency pin conflicts — _@yuneng-berri_
- [`7bd6fa8`](https://github.com/BerriAI/litellm/commit/7bd6fa850900b6676b4a1cf2c1bd3191e7859d3f) [Fix] Add hf-xet to authorized packages in license check — _@yuneng-berri_
- [`0f88968`](https://github.com/BerriAI/litellm/commit/0f88968da921e17e84ac237488abbe4f26306a9b) Merge pull request #24804 from joereyna/feat/add-codecov-to-ci — _@yuneng-berri_
- [`7b277d3`](https://github.com/BerriAI/litellm/commit/7b277d36cd7113d2d114f2ab52cf21a9bef04a9b) [Fix] Fix test failures and Docker build from pinned dependency upgrade — _@yuneng-berri_
- [`283375f`](https://github.com/BerriAI/litellm/commit/283375f4d6910eb92e0a926a5182e493f73ef7b4) fix(proxy): eliminate race condition in streaming guardrail_information logging (#24592) — _@michelligabriele_
- [`62b3769`](https://github.com/BerriAI/litellm/commit/62b3769fb467c6926673b9d82250a8e7c4b84675) [Infra] Update poetry.lock with pinned dependencies — _@yuneng-berri_
- [`296dd3e`](https://github.com/BerriAI/litellm/commit/296dd3e8a2b66f5ce645fca63ae338d50e656f78) [Infra] Fix pyproject.toml pins for Poetry Python 3.9 compatibility — _@yuneng-berri_
- [`5f63873`](https://github.com/BerriAI/litellm/commit/5f63873dcad12d0aee51eabc974273eda5278205) [Infra] Pin all Docker build dependencies to exact versions — _@yuneng-berri_
- [`33c3f13`](https://github.com/BerriAI/litellm/commit/33c3f13443eaf990ac8c6e3da78bddbc2b7d0e7a) Merge pull request #24880 from stuxf/fix/codeql-ui-alerts — _@yuneng-berri_
- [`2f1cfb0`](https://github.com/BerriAI/litellm/commit/2f1cfb0548e02524b5e5468a866b122d4d84cc88) Merge pull request #24751 from BerriAI/litellm_ryan-march-28 — _@ryan-crabbe-berri_
- [`a320dcc`](https://github.com/BerriAI/litellm/commit/a320dcc198c8e26f92e806ccba7986f075461a40) Merge pull request #24881 from BerriAI/litellm_release_action — _@yuneng-berri_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
