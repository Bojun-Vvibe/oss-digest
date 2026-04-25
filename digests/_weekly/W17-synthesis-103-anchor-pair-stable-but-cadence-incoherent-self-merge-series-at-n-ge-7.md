# W17 Synthesis #103 — Anchor-Pair-Stable but Cadence-Incoherent Self-Merge Series at N≥7

**Status:** new anchor. Supersedes synth #97 (lifespan contraction) and synth #101 (monotonically rising inter-PR open gaps) for the `kitlangton` spec-anchored self-merge series after both prior claims were formally falsified at N=7.

**Window of evidence:** 2026-04-25 12:51:36Z (#24352 merge) → 2026-04-25 19:35:15Z (#24371 merge). 6h43m39s, single repo, single author, anchored on a shared file pair.

## The series at N=7

| # | PR | merged at | lifespan | files | adds/dels | inter-merge gap |
|---|---|---|---|---|---|---|
| 1 | anomalyco/opencode#24352 | (Add. 25) | 24m57s | 5 | +93/-2   | — |
| 2 | anomalyco/opencode#24353 | (Add. 25) | 13m47s | 4 | +56/-1   | (Add. 25 intra-tick) |
| 3 | anomalyco/opencode#24356 | (Add. 26) | 4m09s  | 3 | +44/-3   | (Add. 26) |
| 4 | anomalyco/opencode#24365 | (Add. 28) | 11m48s | 8 | +270/-13 | 26m23s (vs #24356 open→#24365 open) |
| 5 | anomalyco/opencode#24366 | (Add. 28) | 5m15s  | 4 | +29/-2   | 15m57s |
| 6 | anomalyco/opencode#24368 | (Add. 28) | 18m02s | 6 | +68/-1   | 15m51s |
| 7 | anomalyco/opencode#24371 | 19:35:15Z | 2m50s  | 6 | +167/-48 | 11m07s |

Merge SHAs (short): #24352..#24356 documented in Addenda 25-26; #24365 `95d4bb21`, #24366 `b749866f`, #24368 `b4f4134e`, #24371 `885c59ff`. All seven self-merged by `kitlangton` into base `dev`.

## What survives across N=7 (the invariants)

1. **Single-author exclusivity.** Every PR opened, every PR self-merged, by `kitlangton`. Zero maintainer-other interactions on any of the seven PRs.
2. **Anchor-pair file co-touch.** Every member modifies BOTH `packages/opencode/specs/effect/http-api.md` AND `packages/opencode/src/server/routes/instance/index.ts`. Across 36 distinct file touches in the series, those two files appear in 14/36 (every PR contributes exactly one touch to each anchor file).
3. **Spec-then-code edit shape.** Every PR's diff includes a `.md` spec edit *and* a corresponding `.ts` route handler edit on the same anchor pair — the spec file is treated as a load-bearing source, not as documentation drift.
4. **Base = `dev`.** All seven target the `dev` branch, never `main` / `beta`.
5. **Self-merge gap to next-merge-candidate is sub-hour.** All six inter-merge gaps fall in `[5m15s, 28m38s]`. The author maintains a sub-30-minute merge cadence across the full 6h43m span without a single inter-merge gap exceeding half an hour.

## What is FALSIFIED at N=7

- **Synth #97 claim:** "monotonically contracting lifespans." Falsified at N=4 (#24365's 11m48s > #24356's 4m09s). At N=7 the lifespan sequence is `25 → 14 → 4 → 12 → 5 → 18 → 3` minutes — no monotone trend; the global minimum is **N=7's 2m50s**, not N=3's 4m09s as #97 implied.
- **Synth #101 claim:** "monotonically rising inter-PR open gaps." Falsified at N=7. The inter-merge-gap sequence is `26m23 → 15m57 → 15m51 → 11m07` — strictly *decreasing* across N=4..7 (after the N=3→N=4 window break that originally seeded #101's monotone-rise hypothesis).

## Falsifiable claim for synth #103

**A single-author spec-anchored self-merge series can stabilize on a fixed file-pair anchor and a sub-30-minute inter-merge cadence band while exhibiting NO monotone trend in either lifespan or inter-merge gap.** The structural invariant is the *anchor pair* and *cadence band*; the structural non-invariant is *trend within the band*.

**Implication for prior synths:** synths that hypothesize trend within a self-merge series (#97 contraction, #101 rise) on N=3 or N=4 evidence are at high risk of falsification by N=6-7. A series's *anchor-pair stability* is forecastable from N=3; its *trend* is not.

**Test/escalation:** synth #103 is itself falsified if N≥10 of the same series shows either (a) the anchor pair drops out for ≥1 member, or (b) inter-merge gap crosses 30 minutes for ≥2 consecutive members (cadence-band drift).

## Distinguishing from existing synths

- **#83** (single-author 30-min metronome) — #83 requires near-uniform 30m gap; #103 explicitly observes 5-28m gap variance with no metronome property.
- **#91** (single-author triplet self-merge metronome on disjoint surfaces) — #91 requires *disjoint surfaces*; #103 requires *shared anchor pair* across all members.
- **#97 / #99 / #101** — all superseded by #103 as their trend claims are falsified.
