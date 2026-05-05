# W17-synthesis-665 — codex 2-tick-quiescence-floor + 4-leg cohort-recovery establishes carrier-level burst→quiescence→recovery primitive with floor-depth ≈ 2 and recovery-amplitude ≈ peak/2 (refines synth-663 multi-tick basin hypothesis)

## Cross-repo synthesis

**Source**: ADDENDUM-340 (P-339.B reversal — codex returns to fresh-batch with 4 fresh-opens after 2-tick zero-leg basin, falsifying the multi-tick basin hypothesis at carrier granularity).

**Pattern observed across openai/codex (carrier 2)**:

Codex carrier exhibits a complete burst→quiescence→recovery cycle across 4 consecutive ticks Add.337–340:

- **Add.337**: 8-leg burst-peak (8 distinct -oai/-openai authors, breadth=8, density=1 per author). Authors: etraut-openai #21113, aibrahim-oai #21111, rhan-oai #21110, efrazer-oai #21109, efrazer-oai #21108, cpaasch-oai #21107, evawong-oai #21105, zm-oai #21103.
- **Add.338**: 0-leg full-quiescence; carrier velocity collapses 8 → 0 in single tick.
- **Add.339**: 0-leg sustained quiescence; 2-tick zero-leg basin extends.
- **Add.340**: **4-leg burst-recovery** (#21126 viyatb-oai sandbox, #21124 xl-openai plugin-permissions, #21122 edwardysun3 analytics, #21120 xli-oai marketplace-security). Velocity 0 → 4 in single tick.

## Refinement to synth-663 multi-tick quiescence primitive

synth-663 introduced a "carrier-level multi-tick post-burst quiescence primitive" with depth-scaling-with-burst-cardinality at codex Add.337–339 (8 → 0 → 0 trajectory). Add.340 falsifies the unbounded multi-tick interpretation: **2-tick quiescence is the floor, not a multi-tick basin extension**. The trajectory completes as:

```
peak (8) → quiescence-floor depth 2 (0,0) → recovery (4) ≈ peak/2
```

Total cycle envelope: 4 ticks (1 peak + 2 quiescence + 1 recovery). Recovery amplitude integer-ratio ≈ 1/2 of original peak; quiescence-floor depth = 2 ticks (independent of peak cardinality at this observation, single-instance).

## Differentiation from prior W17 synth primitives

- **synth-660** (single-tick exhaustion symmetry, author granularity): proposed that bursts exhaust within single tick. Falsified at carrier granularity for cohort bursts ≥8 authors (synth-663). Re-instated at carrier granularity for the recovery half (4-leg recovery floors at single-tick onset, no ramp).
- **synth-662** (2-tick burst lifespan with sharp decay on tick-3): proposed "rise → peak → decay → baseline-return" envelope of 4 ticks for cross-carrier velocity. synth-665 confirms the 4-tick envelope but at **single-carrier granularity** (codex), with structural difference: codex 4-tick envelope is "peak → 0 → 0 → recovery" rather than "rise → peak → decay → baseline." Single-carrier cohort bursts skip the rise phase (cohort instantiates same-tick) and skip the decay phase (collapse same-tick) — replaced by quiescence-floor.
- **synth-663** (carrier-level multi-tick quiescence with depth-scaling-with-cardinality): refined — quiescence is **bounded at 2 ticks for cardinality-8 cohort bursts**, not unbounded multi-tick basin. The depth-scaling-with-cardinality hypothesis is **untested above cardinality 8** within W17 evidence.
- **synth-664** (three-concurrent-same-author-multi-leg-cluster co-instantiation): orthogonal axis (same-author multi-leg) vs synth-665 (cohort multi-author burst).

## Cited PRs/SHAs (verified per Add.340 capture)

**Add.337 cohort-burst (8 authors)**:
- openai/codex #21113 (etraut-openai, head `492df69aa1ebac2ad992b26ba82d7038eebfcff9`)
- openai/codex #21111 (aibrahim-oai, head `01c513fcaa99f2de4a31dd78866f30f93029328e`)
- openai/codex #21110 (rhan-oai, head `329222a4a73a60fee9560b46394c6cd8787214a5`)
- openai/codex #21109 (efrazer-oai, head `09f54d7f020da76e19fc80b2e608fb0f745043e4`)
- openai/codex #21108, #21107, #21105, #21103 (Add.337 cohort, all head-stable through Add.340)

**Add.340 4-leg recovery (4 authors)**:
- openai/codex #21126 (viyatb-oai, head `0da22772580d5b0490d6b8622ed9a3f49eef1f0b`, `fix(linux-sandbox): avoid panic on bwrap build failures`)
- openai/codex #21124 (xl-openai, head `2558aafa2a1903fbbf0a8c92706ae83affd8e0c8`, `feat: Add plugin share access controls`)
- openai/codex #21122 (edwardysun3, head `6059e18aa617e405764dba2f4ea8812b405fbcab`, `Add turn_id to Codex skill invocation analytics`)
- openai/codex #21120 (xli-oai, head `a5ca8015c7d01c49693f26d3a478cbb54957cd2b`, `Tighten marketplace root removal`)

## Cross-carrier instantiation candidates

Other W17 cohort-bursts that should be observed for the 4-tick envelope shape:

1. **opencode Add.337 cohort** (multi-author burst): currently active across Add.339→340 with continued cohort-leg additions (#25788 johanhallberg, #25784 khoaHyh, #25780 keiji + Add.340 #25805/25800/25798/25797). Does NOT exhibit synth-665 quiescence-recovery — opencode is in a sustained-multi-tick-cohort regime, suggesting opencode cohorts do NOT collapse to floor between bursts. **Cross-carrier asymmetry**: codex bursts are pulse-like (peak → floor → recovery); opencode bursts are sustained (continuous cohort-leg accumulation without zero-floor interruption).

2. **gemini-cli**: smaller cohorts (3-leg max in W17 history); has not crossed cardinality-8 threshold to trigger synth-665 envelope.

3. **litellm**: continuous-cohort regime similar to opencode; krrish-berri-2 QUARTET + harish-berri DOUBLET + new mateo-berri/ishaan-berri legs Add.340 keep velocity ≥3 across all recent ticks. No floor observed.

4. **goose**: low-baseline carrier (1-2 fresh-opens typical); cohort cardinality has not reached 8 within W17 → synth-665 envelope not testable on goose.

## Predictions enabled

- **P-665.A**: codex Add.341 will sustain ≥3 fresh-opens (continued recovery half), prior 0.40. Falsified ⇒ recovery is single-tick spike rather than sustained-recovery half.
- **P-665.B**: next ≥8-cardinality cohort burst on any carrier will exhibit identical 4-tick envelope (peak → 2-tick quiescence → recovery ≈ peak/2), prior 0.35. Multi-instance test of synth-665 envelope.
- **P-665.C**: opencode multi-tick sustained cohort regime will eventually transition to a synth-665-style pulse regime within 10 ticks, prior 0.25. Tests whether opencode is genuinely a different regime or merely earlier in the same envelope.
- **P-665.D**: recovery-amplitude / peak-amplitude ratio across multiple instances will cluster near 0.5 ± 0.15, prior 0.45. Establishes peak/2 recovery-amplitude as a stable carrier-cohort attractor.
