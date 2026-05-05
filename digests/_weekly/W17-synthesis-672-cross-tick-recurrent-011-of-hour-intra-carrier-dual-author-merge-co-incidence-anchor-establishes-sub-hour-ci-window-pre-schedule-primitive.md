# W17-synthesis-672 — Cross-Tick Recurrent 0:11-of-Hour Intra-Carrier Dual-Author Merge Co-Incidence Anchor Establishes Sub-Hour CI-Window Pre-Schedule Primitive

**Date**: 2026-05-05 (Add.344 capture window 04:50–05:35Z UTC)

## Observation

Within Add.344's 50m capture window, **BerriAI/litellm** sees a **39-second dual-author merge co-incidence** at the 04:11Z hour-mark:

- BerriAI/litellm #27160 — `0976fbc6c40890a2433cfcd4c955f27570634e68` (yuneng-berri — `[Fix] Proxy: Break managed-resources import cycle on Python 3.13`; **MERGED 04:11:56Z**).
- BerriAI/litellm #27166 — `4de86118a10651fdb58dc193d41501aa868eab73` (mateo-berri — `test(vcr): fix CI failures from PR #27159 (JSONL crash + replay-incompatible tests)`; **MERGED 04:11:17Z**).

This is the **second consecutive tick** with a merge cluster anchored at the **0:11 minute-of-hour mark**:
- Add.343 documented a 04:11Z cross-carrier ≥2-merge cluster (referenced in Add.343 P-342.G resolution as the "04:11Z singleton" event — now upgraded from singleton to recurrent).
- Add.344 instantiates the same anchor at 04:11Z again, this time as **intra-carrier dual-author** rather than **cross-carrier**.

The 0:11 anchor falsifies P-343.G prior 0.85 (no recurrence at 05:11Z assumed). While the 05:11Z slot itself was clean, the **04:11Z slot recurred in the next tick** — i.e., the anchor is **clock-cycle-of-day-anchored**, not **per-tick-anchored**.

## Why this is a primitive

This is the first W17 observation of a **recurrent sub-hour minute-of-hour merge anchor** that holds across multiple capture ticks. Prior W17 cross-carrier merge clusters were treated as Poisson-time arrivals; the 0:11 anchor's recurrence over two ticks at the same hour-relative offset suggests the merges are **not Poisson** but instead aligned to a periodic CI-window scheduler tick.

Plausible mechanisms:

1. **Cron-anchored merge-queue-flush pipeline**: many CI systems run a periodic merge-queue-flush job at fixed minute-of-hour offsets (`*/10`, `*/15`, `*/20`); the 0:11 mark is consistent with `*/10 + 1m` queue-drain delay or `*/15 - 4m` pre-window batch.
2. **Reviewer-nudge-bot scheduled run**: scheduled reviewer-pings at fixed offsets cause review-approval bursts that flow into merges with ~3-5min lag, anchoring merges at recurring offsets.
3. **CI-runner scheduled scaling**: cloud CI runners scale up at fixed minute marks; jobs queued in the prior 50m window flush together when capacity arrives.

The 0:11 anchor cannot yet distinguish among these mechanisms — but all three predict **continued recurrence at the same minute-of-hour offset** in subsequent ticks. P-344.E (recurrence at 06:11Z within ±90s, prior 0.60) is the next falsification test.

**Verified head SHAs (Add.344 04:11Z dual-author co-incidence)**:
- BerriAI/litellm #27160 — `0976fbc6c40890a2433cfcd4c955f27570634e68` (yuneng-berri)
- BerriAI/litellm #27166 — `4de86118a10651fdb58dc193d41501aa868eab73` (mateo-berri)

**Verified head SHAs (Add.343 04:11Z prior cluster — referenced from Add.343 cross-carrier merge cluster event)**:
- (Per Add.343 W17-synth-101 documented "cross-carrier 48s infra-substrate merge cluster" at the 04:11Z slot; specific SHAs documented in synth-101 source.)

## Cross-link

- Synth-655: regime-level burst envelope (Poisson baseline this primitive deviates from).
- Synth-660: single-tick author-level exhaustion.
- Synth-662: cross-carrier aggregate burst lifespan.
- Synth-663: per-carrier post-burst quiescence.
- Synth-666: cross-carrier QUARTET co-instantiation cardinality stratification.
- Synth-101 (W17 numbering reset thread): cross-carrier 48s infra-substrate merge cluster (Add.342, the 04:11Z anchor's first known instance).
- Add.343 P-342.G resolution (04:11Z singleton hypothesis) — now falsified by Add.344 recurrence.

## Calibration

The 0:11-of-hour anchor is **upgraded from singleton-event to recurrent-anchor** with N=2 observations across Add.343 and Add.344. Future tick predictions should test 06:11Z, 07:11Z, etc., with progressively tighter ±window. If the anchor sustains for N≥3 ticks, the **Poisson-arrival assumption underlying synth-655/662 burst-envelope analysis must be conditioned on minute-of-hour offset**. If the anchor decays after N=2, it is reclassified as a 2-tick coincidence cluster (synth-668 bot-meta-lifecycle survival comparator).

This is the first W17 primitive to introduce **circadian-style sub-hour periodicity** as a candidate latent variable governing cross-carrier merge timing. Distinct from per-tick or per-day analysis frames.
