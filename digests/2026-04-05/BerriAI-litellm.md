# BerriAI/litellm — 2026-04-05

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-04T23:59:59.000Z → 2026-04-05T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Headline: a quiet maintenance day capped by the **v1.83.3 release** (#25162), with version bumps for `litellm-enterprise` 0.1.36 (#25164) and `litellm-proxy-extras` 0.4.65 (#25163), plus a `poetry.lock` regeneration to resync with `pyproject.toml` (#25169). No new issues, PRs, or GitHub releases landed in the window — all activity arrived as merged commits on `litellm_internal_staging`.

The most consequential bug fixes worth pulling:

- **Cache correctness**: `get_cache_key` no longer raises a "multiple values" `TypeError` when callers pass kwargs that already include `preset_cache_key` (#20261). Anyone composing cache keys programmatically should pick this up.
- **MCP tool routing**: `is_tool_name_prefixed()` now validates against the set of known server prefixes instead of naively matching any `-` in the tool name, fixing false positives for tools whose names legitimately contain hyphens (#25085, fixes #25081).
- **S3 v2 logging**: SigV4-signed S3 requests now use the prepared URL, fixing signature mismatches on uploads (#25074).
- **Presidio PII guardrail**: `anonymize_text` now uses the correct start/end offsets returned by Presidio, so anonymized spans line up with the original text (#24998, fixes #24160) — a quiet but meaningful correctness fix for anyone running PII redaction.

Observability gets a small but useful upgrade: Prometheus `LATENCY_BUCKETS` are extended with **7m and 10m histogram buckets** (#25071), so dashboards can actually distinguish long-running LLM requests instead of clipping them into the 5m overflow bucket. Worth redeploying scrape configs for teams running long-context or agentic workloads.

Remaining traffic is housekeeping: two unlabeled `chore: fixes` commits from yuneng-berri (1d3fb58, 4ca3689), a Next.js admin-UI build artifact refresh (#25158), a docs "week 1 checklist" with a Railway URL update (#25083), and minor docs/image cleanups around toolsets and the 1.83.3 release notes (#25171, #25166).

For most readers: skim the v1.83.3 bump and the four fix PRs above; skip the rest.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`1d3fb58`](https://github.com/BerriAI/litellm/commit/1d3fb58752519e8de0854f043023968180d19ba4) chore: fixes — _@yuneng-berri_
- [`4ca3689`](https://github.com/BerriAI/litellm/commit/4ca368923054ef1df73c1f3b815e39716ff2ce71) chore: fixes — _@yuneng-berri_
- [`23e702d`](https://github.com/BerriAI/litellm/commit/23e702dae609aa79682b971967dcf0bc05efab59) feat(prometheus): add 7m and 10m latency histogram buckets (#25071) — _@kulia26_
- [`fc75380`](https://github.com/BerriAI/litellm/commit/fc75380b88481bff17a0b25d6c7d7cf49e11c361) fix(presidio): use correct text positions in anonymize_text (#24998) — _@Dmitry-Kucher_
- [`e68cfaa`](https://github.com/BerriAI/litellm/commit/e68cfaae0c1238d19a4944efb8af47c41dc949ce) fix(cache): Prevent "multiple values" error in get_cache_key (#20261) — _@hunterchris_
- [`d6351a3`](https://github.com/BerriAI/litellm/commit/d6351a3966e5cbbddee1bacd63020bb6aa857614) fix(s3_v2): use prepared URL for SigV4-signed S3 requests (#25074) — _@nehaaprasad_
- [`cf94f4d`](https://github.com/BerriAI/litellm/commit/cf94f4d8b720e63beadd10a28cea8c1787830814) fix(mcp): is_tool_name_prefixed validates against known server prefixes (#25085) — _@voidborne-d_
- [`d251238`](https://github.com/BerriAI/litellm/commit/d251238bd7008ea9fae5843a44bc06b7e3a7efc0) docs: week 1 checklist (#25083) — _@mubashir1osmani_
- [`c5686b9`](https://github.com/BerriAI/litellm/commit/c5686b97268221c0108e3e264383ddce2d3ca9ea) [Nit] Small docs fix, fixing img + folder name  (#25171) — _@ishaan-berri_
- [`9088b46`](https://github.com/BerriAI/litellm/commit/9088b46b90b940d83620dc26587a971b2c1ef055) Litellm docs 1 83 3 (#25166) — _@ishaan-berri_
- [`cf045dc`](https://github.com/BerriAI/litellm/commit/cf045dc6d2b9b4383703628fb26feb9769190281) fix: regenerate poetry.lock to match pyproject.toml (#25169) — _@ishaan-berri_
- [`1e66050`](https://github.com/BerriAI/litellm/commit/1e660504232f8403c501b8e7aef334f1cc37fc8c) bump litellm-enterprise to 0.1.36 (#25164) — _@ishaan-berri_
- [`d2102e9`](https://github.com/BerriAI/litellm/commit/d2102e992a8aca208a1bf90aece205599f02a88e) bump litellm-proxy-extras to 0.4.65 (#25163) — _@ishaan-berri_
- [`eed8a38`](https://github.com/BerriAI/litellm/commit/eed8a38eca55e6fe9394c86e9fe5469c944d9657) bump: version 1.83.2 → 1.83.3 (#25162) — _@yuneng-berri_
- [`3e90565`](https://github.com/BerriAI/litellm/commit/3e90565ca3bd2144e1d116e8c778c7c97b44d9a5) chore: update Next.js build artifacts (2026-04-04 23:58 UTC, node v22.16.0) (#25158) — _@yuneng-berri_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
