# W17 Synthesis #97 — Same-author N=3 self-merge series with shared spec-file co-touch and monotonically contracting lifespans

**Anchor window:** 2026-04-25T17:46:01Z → 18:12:55Z (26m54s).
**Anchor repo:** anomalyco/opencode.
**Anchor author:** `kitlangton`.

## The shape

Three same-author self-merges (N=3), all touching the **same spec-anchor file** plus the **same router-index file**, with **monotonically contracting lifespans**. This is a deliberate spec-anchored vertical-slice rollout — distinct from prior synths that documented either disjoint-surface metronomes (synth #91), or shared-content co-fires by **multiple** authors (synth #84), or single-PR vertical-slice stacks (synth #44).

## The three members

| # | PR | Open | Merge | Lifespan | Δlines | Δfiles |
|---|---|---|---|---|---|---|
| 1 | [anomalyco/opencode#24352] (`feat(tui): read Zed editor context from state db`) | 17:46:01Z | 18:10:58Z | **24m57s** | +221/-6 | 3 |
| 2 | [anomalyco/opencode#24353] (`feat(httpapi): bridge catalog read endpoints`) | 17:46:44Z | 18:00:31Z | **13m47s** | +208/-81 | 9 |
| 3 | [anomalyco/opencode#24356] (`feat(httpapi): bridge file search endpoints`) | 18:08:46Z | 18:12:55Z | **4m09s** | +111/-3 | 4 |

Head SHAs: `4e902ab0`, `d4e5dd9f`, `36197f36`. Merge SHAs: `625aca49`, `eb021998`, `05661c60`. All merges by `kitlangton` (self-merge).

## Why "shared spec-file co-touch"

Every member touches:
- `packages/opencode/specs/effect/http-api.md` (cumulative +5/-6 across the triple)
- `packages/opencode/src/server/routes/instance/index.ts` (cumulative +12/-4)

The spec file is the OpenAPI/effect-schema anchor; the router index is the dispatch table. Each PR adds one route group to the spec and the corresponding handler. This is not the per-PR-independent change pattern of synth #91 — it is **explicitly correlated structural growth** where the spec file functions as a shared coordination point that every PR in the series must amend.

## Why "monotonically contracting lifespans"

24m57s → 13m47s → 4m09s. Ratios 1.81× and 3.32× contraction. Author moves from review-pause posture (PR 1 sits 25min) to near-instant self-merge (PR 3 lands in 4min) within a 27-minute author session. This is the **inverse** of synth #95's `pascalandr` cadence-dilation signature (cadence-between-opens dilating across regimes); here the contraction is **lifespan-of-merge** within a fixed-author shared-surface series.

## Distinctness from prior synths

- **Synth #44** (vertical-slice PR stack refreshed in lockstep): single stack of mutually-dependent PRs that all rebase together. Synth #97 is **independent merges** that share an anchor file by design, not by stacking.
- **Synth #84** (recurring same-second long-tail PR pair co-bump): multi-PR mechanical co-fire where bumps are noise. Synth #97 is human-driven, content-bearing, sequenced.
- **Synth #91** (single-author triplet self-merge metronome on disjoint surfaces): N=3 self-merge series but **disjoint** surfaces and **constant** inter-merge cadence. Synth #97 is **shared** anchor file and **contracting** lifespan.
- **Synth #94** (same-author same-product surface diff-disjoint back-to-back merge pair nested in multi-author merge wave): N=2, surface-diff-disjoint. Synth #97 is N=3 with surface-diff-overlap on two specific files.
- **Synth #95** (intra-author cadence-dilation across three regimes): describes inter-PR-open cadence, not within-PR lifespan.

## Falsifiable predictions

1. If a 4th `kitlangton` PR appears in the next ~30 minutes touching the same `http-api.md` spec, lifespan should land **<4m09s** (continuation of contraction).
2. If a 4th PR appears but does **not** touch the spec file, the contraction stops and the series terminates.
3. The two shared files should appear in the diff of **every future member** of the series until `kitlangton` finishes the bridge work; failure to touch the spec file is the series-end marker.

## Risk lens

Shared-spec-file series carries inherent merge-conflict risk between members. The fact that all three landed cleanly (no force-push, no rebase storm) suggests `kitlangton` is **serializing** the series locally and pushing each only after the prior lands — a pattern observable from spec-file diff non-overlap (each PR touches different lines). Future detection: if shared-spec-file PRs from the same author **overlap on identical lines** of the spec, expect rebase events between merges.
