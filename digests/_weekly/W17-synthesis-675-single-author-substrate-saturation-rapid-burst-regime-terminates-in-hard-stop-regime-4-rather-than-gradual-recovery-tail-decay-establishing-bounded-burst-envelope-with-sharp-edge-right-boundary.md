# W17-synthesis-675 — Single-Author Substrate-Saturation Rapid-Burst Regime Terminates In Hard-Stop Regime-4 Rather Than Gradual Recovery-Tail Decay, Establishing Bounded-Burst Envelope With Sharp-Edge Right-Boundary Distinct From Synth-674's Three-Regime Cadence Model

**Date**: 2026-05-05 (Add.346 capture window 06:25–07:15Z UTC, with rolling lookback to Add.343 origin 03:29Z)

## Observation

Synth-674 documented morgmart's block/goose substrate-saturation UNDECET as a three-regime cadence (anchor-prelude → rapid-burst → recovery-tail) and forecast (P-345.B prior 0.50) **continued monotonic injection** at either rapid-burst (~3-min cadence, predicted DUODECET-class N=15+) or recovery-tail (~15-min cadence, predicted N=14) rates within the Add.346 capture window.

**Add.346 capture (snapshot 2026-05-05T06:54:29Z) falsifies both regimes**: morgmart's last touch is #9014 update at 05:41:31Z, **73 minutes before snapshot**. Zero fresh-opens, zero head-changes on any of the 11 in-window legs. Net-OPEN holds at N=10; distinct-submission cardinality holds at N=11 (or N=12 with anchor #9004) — **no monotonic injection at any cadence**.

| Regime | Synth-674 prediction | Add.346 observation |
|---|---|---|
| Rapid-burst continuation (~3-min, N=15+ predicted) | prior 0.25 | NOT-OBSERVED |
| Recovery-tail decay (~15-min, N=14 predicted) | prior 0.25 | NOT-OBSERVED |
| **Hard-stop (regime-4, not-modeled)** | **prior 0.0 (implicit)** | **OBSERVED** |

The session terminates at #9014 (`show unread state for background chat responses`, head `ec224a170d8196c831481b33aee588e2533a0efe`, last-update 05:41:31Z) with **regime-4: hard-stop** — a sharp-edge right-boundary regime that synth-674's three-regime model treated as zero-prior implicit state.

## In-window morgmart timeline (verified head SHAs at Add.346 snapshot 2026-05-05T06:54:29Z UTC)

All SHAs verified via `gh pr view <num> --repo block/goose --json headRefOid,state,createdAt,updatedAt,mergedAt,closedAt`:

| # | PR | createdAt (UTC) | last-update (UTC) | State | Head SHA |
|---|---|---|---|---|---|
| 1 | goose #9008 | 2026-05-05T03:29:47Z | 03:29:47Z | OPEN | `87e22199581b02adc3b01833646f2964e211d37e` |
| 2 | goose #9009 | 2026-05-05T04:52:26Z | 05:32:33Z (CLOSED) | CLOSED | `9e073e9fce126ae3e5c205f0256a203860ab6aba` |
| 3 | goose #9010 | 2026-05-05T04:58:16Z | 04:58:16Z | OPEN | `3e1c7bc96ea49d0ead6b96aa0d72a261a4e445f1` |
| 4 | goose #9011 | 2026-05-05T04:59:55Z | 04:59:55Z | OPEN | `ad0c9f63a90e569882db944c8e9dd0d4b619f45d` |
| 5 | goose #9012 | 2026-05-05T05:01:02Z | 05:01:02Z | OPEN | `936f5d9e07e5aaeb617afa2c1bf89df41ef278db` |
| 6 | goose #9013 | 2026-05-05T05:04:19Z | 05:04:19Z | OPEN | `c2f4ede3c7eef21771714c98cddeabf317e4692d` |
| 7 | goose #9014 | 2026-05-05T05:08:34Z | **05:41:31Z (LAST AUTHOR TOUCH)** | OPEN | `ec224a170d8196c831481b33aee588e2533a0efe` |
| 8 | goose #9016 | 2026-05-05T05:10:27Z | 05:10:27Z | OPEN | `169d521f34c86e2053f8d855c5b92b814137f9bf` |
| 9 | goose #9017 | 2026-05-05T05:12:31Z | 05:12:31Z | OPEN | `b19db05c0ea80b72a463f22adfb686f35344a173` |
| 10 | goose #9018 | 2026-05-05T05:15:41Z | 05:15:41Z | OPEN | `fb429659db87defd4713ab0c81d36b8903832344` |
| 11 | goose #9019 | 2026-05-05T05:32:15Z | 05:32:15Z | OPEN | `270600151176cdf64acb9d0a35b02477af5f2673` |
| 12 (anchor) | goose #9004 | 2026-05-04T22:06:30Z | 03:20:09Z | OPEN | `a8a3de5773c0e230262fe2d68cbc7bf43f346a90` |

**Time-since-last-touch at Add.346 snapshot**: 06:54:29Z − 05:41:31Z = **1h12m58s** of zero-author-activity since #9014's last touch. This vastly exceeds the recovery-tail's modeled ~15-minute cadence (5× over) and the rapid-burst regime's ~3-minute cadence (24× over).

## Why this is a primitive

Synth-674 modeled the morgmart UNDECET as a **3-regime monotonic-injection process** with implicit unbounded extension via Markov-chain-style regime persistence. The Add.346 observation proves the process has a **bounded right-boundary** with sharp-edge termination — the burst is **closed-form-finite**, not open-form-monotonic.

This synthesis introduces:

- **Regime-4: hard-stop** — a sharp-edge termination regime where the inter-submission Δ extends to ≥5× the prior regime's modal cadence, with no head-change activity on any in-window leg. Operationally detected when the snapshot-time minus last-touch-time exceeds 4× the rolling Δ-median.
- **Bounded-burst envelope hypothesis**: substrate-saturation single-author bursts have **author-specific exhaustion floors** that terminate the rapid-burst regime within a single tick of regime-3 entry. Morgmart's exhaustion floor in this instance: **N=11 distinct submissions over 2h02m28s before hard-stop**.

## Calibration against synth-674

Synth-674 closed with: *"if morgmart's monotonic injection cadence holds at the ~3-minute rapid-burst rate post-recovery-tail, the next 50m capture window should see N=15+ distinct submissions ... If instead the recovery-tail regime persists (~15-minute cadence), expected N=14 distinct submissions by Add.346 capture."*

**Observed**: N=11 (UNDECET cardinality unchanged from Add.345). **Both predictions wrong**; the regime-4 hard-stop dominates.

The synth-674 framework MUST be amended:

1. The 3-regime model (anchor-prelude / rapid-burst / recovery-tail) describes the **interior** of the burst envelope but does NOT specify the **right-boundary terminator**.
2. The recovery-tail regime (per synth-674: 16m34s gap between #9018 → #9019) was **not** the prelude to gradual decay — it was the prelude to hard-stop. The recovery-tail and hard-stop are **operationally indistinguishable from a single observation** until the next-tick snapshot fails to materialize a follow-up submission.
3. **The synth-671 substrate-saturation framework's "submission-axis cardinality" extension (synth-674's primitive) holds only within the burst envelope**; once regime-4 fires, both submission-axis and net-OPEN cardinality freeze together.

## Cross-mode comparison

Within W17 sub-cycle, the bounded-burst pattern can be retroactively detected in:

- **yuneng-berri litellm QUINTET (Add.343)**: 5 submissions in ~25 minutes → all rapidly self-merged → **regime-4 hard-stop** at N=5 with ~6h author-recess to follow. Bounded-burst envelope = **5 submissions × 25 minutes**.
- **doudouOUC qwen-code QUINTET (Add.343/344)**: 5 submissions over ~2h on sdk-python release-tooling → 1 self-merge (#3834 Add.345) → quiescence. Bounded-burst envelope = **5 submissions × ~2h**.
- **morgmart goose UNDECET (Add.343/344/345/346)**: 11 submissions over 2h02m28s → 0 merges → **regime-4 hard-stop** with ≥73-minute author-recess. Bounded-burst envelope = **11 submissions × 2h02m28s** = current W17 high-water-mark for envelope volume (1346 submission-minutes vs yuneng-berri 125 and doudouOUC 600).

Across these three W17 instances, the **post-burst author-recess duration appears to scale inversely with merge-during-burst rate**: yuneng-berri merged all 5 → ~6h recess; doudouOUC merged 1 of 5 → ~24h+ recess (still in progress); morgmart merged 0 of 11 → ≥73-minute recess at synthesis-time. Sample N=3 too small for tight calibration but signals **merge-during-burst as a session-extender** (paradoxically: more merges → longer follow-on session, suggesting merge-completion provides positive-reinforcement loop on author-side).

## Cross-link

- **Synth-671** (substrate-saturation no-merge accumulation mode): this synthesis adds the **right-boundary terminator** to synth-671's interior framework.
- **Synth-674** (submission-axis cardinality decoupling): this synthesis falsifies synth-674's monotonic-injection extrapolation and amends the 3-regime model to 4 regimes.
- **Synth-670** (declared-multi-PR-sequence injection primitive): morgmart's UNDECET is **undeclared but executed**, with regime-4 hard-stop at N=11; wenshao's labeled "PR-N of M" sequence is **declared but stalled at PR-1** (3-tick stall through Add.346) — different patterns, but **both terminate short of a closed-form completion event**.
- **Synth-673** (close-resubmit routine sub-mode): morgmart's #9009→#9019 (40m07s lifespan) is a synth-673 sub-mode-5 instance occurring **within the rapid-burst regime**, NOT at the burst envelope's right-boundary.
- **Synth-668** (bot-meta-lifecycle persistence): bot-side persistence is OPPOSITE to human-side bounded-burst — bots extend survival monotonically (gemini-cli-robot #26482/#26483 now at 5-tick floor); humans terminate sharply.

## Calibration

The **morgmart regime-4 hard-stop falsifies the implicit-monotonic-injection assumption** in synth-674's 3-regime model. Bounded-burst envelopes must be modeled with explicit right-boundary terminators; the prior on regime-4 firing within 1 tick of regime-3 entry should be raised from implicit-zero to **≈0.55** based on this single-instance observation (sample N=1, weak prior).

For Add.347 prediction: morgmart's hard-stop persists ≥1 more tick (P-346.B prior 0.55) reflects the inverse-recess-scaling hypothesis — zero merges during burst → expected long author-recess. If a fresh morgmart leg materializes within Add.347 capture, the bounded-burst envelope hypothesis weakens (regime-4 reclassifies as transient-pause rather than terminator); if quiescence persists through Add.347 + Add.348, regime-4 promotes from one-instance hypothesis to W17-routine sub-mode.

This is the first W17 synthesis to formally introduce **right-boundary regime modeling** for substrate-saturation bursts — a structural amendment that the synth-674 monotonic-injection failure makes necessary.
