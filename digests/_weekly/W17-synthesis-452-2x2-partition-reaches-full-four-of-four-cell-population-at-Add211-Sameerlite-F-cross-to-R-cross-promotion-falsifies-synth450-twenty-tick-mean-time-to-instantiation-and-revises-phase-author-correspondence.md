# W17 Synthesis #452 — Synth #450 2×2 partition (recurrence × vendor-locality) reaches full 4/4 cell population at Add.211 with Sameerlite F-cross→R-cross promotion (PR #26964 sha 02cb8b0) at t+1 from synth #450 publication, falsifying the P-450.B ~20-tick mean-time-to-instantiation prior to the upside, and partially falsifying the synth #450 P-450.E phase-author correspondence hypothesis since the R-cross author appears at the partial-recovery phase rather than at a slow descent/decay phase

## Pattern statement

Synth #450 partitioned the W17 carrier-author space along two orthogonal binary axes (recurrence × vendor-locality) into a 2×2 cell partition. At publication time, **3 of 4 cells were populated**: F-internal (wiltzius-openai @ codex Add.209, ACTRF=0.143), F-cross (Sameerlite @ litellm Add.206, ACTRF=0.143), R-internal (yuneng-berri @ litellm Add.204/205/206/210, ACTRF=0.571). The empty 4th cell, **R-cross** (recurring author whose work crosses vendor boundaries), was nominated as a W17 W-feature candidate with predicted instantiation probability ~0.40 within the next 20 ticks per P-450.B.

Add.211's M-211.C observation **promoted Sameerlite from the F-cross cell to the R-cross cell** by virtue of a second appearance at litellm (PR #26964 `merge main` sha 02cb8b0 mergedAt 2026-05-01T06:12:10Z) after a 4-tick silence-gap (Add.207-210). The 2×2 partition is now **fully populated 4/4** at Add.211 — the W-feature has been instantiated **at t+1 from synth #450 publication**, far below the predicted ~20-tick mean-time-to-instantiation. The Sameerlite ACTRF updates from 0.143 (Add.204-210, 1/7) to **0.250** (Add.204-211, 2/8), establishing the W17 R-cross reference value.

## Updated 2×2 partition with full population

| | internal-vendor | cross-vendor |
|---|---|---|
| **fresh (F)** | F-internal: wiltzius-openai @ codex (Add.209), ACTRF=0.143; xli-oai @ codex (Add.211), ACTRF=0.125 (1/8) | F-cross: NO CURRENT EXEMPLAR (Sameerlite promoted out) |
| **recurring (R)** | R-internal: yuneng-berri @ litellm (Add.204/205/206/210), ACTRF=0.571 | **R-cross: Sameerlite @ litellm (Add.206/211), ACTRF=0.250** |

Two cell-population transitions occurred in a single tick:

1. **F-cross → R-cross promotion** (Sameerlite via second-appearance at Add.211 after 4-tick gap). The promotion **vacates the F-cross cell** since Sameerlite was its sole exemplar at synth #450 publication time. F-cross is now an **empty cell awaiting fresh re-instantiation**.
2. **F-internal cohort expansion** (xli-oai joins wiltzius-openai as the second F-internal exemplar at codex). F-internal is the only cell with **multi-exemplar density** (2 authors) at Add.211.

The dynamics expose an **asymmetry in cell-residency**: F-class cells are by definition **transient** (an F-class author who appears at a second tick is automatically promoted to R-class), while R-class cells are **accretive** (R-class authors retain R-class membership across all subsequent ticks regardless of additional appearances). The 2×2 partition therefore has **inherent flow** F→R, with no reverse flow R→F — synth #450's static partition framing must be amended with a **directional flow framework** to capture the cell-residency dynamics.

## Definition: cell-flow rate and W17 author-promotion velocity

Define the **F→R promotion event** as: an author observed at exactly one prior visible W17 tick re-appears at the current tick and is **promoted from F-class to R-class** (preserving vendor-locality). The cumulative W17 promotion count and the per-tick promotion rate are:

- **Promotion events in visible Add.193-211 lookback**: 1 (Sameerlite F-cross→R-cross at Add.211)
- **Visible-window length**: 19 ticks (Add.193-211 inclusive)
- **Per-tick promotion rate**: 1/19 = **0.0526 promotions/tick**

This is the **W17 reference promotion velocity** going forward. With the visible F-class population at Add.211 = {wiltzius-openai (F-internal), xli-oai (F-internal)} cardinality 2, the **expected next-promotion tick** under a Poisson model with rate 0.0526 is approximately **Add.211 + 19 = Add.230**, though authors with shorter inter-tick gaps will promote sooner. The Sameerlite gap was 5 ticks (Add.206 first-appearance → Add.211 second-appearance with Add.207-210 silence); this is a **fast-promotion observation** relative to the population-mean expected time-to-promote.

## Phase-author correspondence revisited

Synth #450 P-450.E proposed the **phase-author correspondence hypothesis**: R-internal authors carry the descent and decay phases (slow attenuation), while F-class authors carry the spike phase (abrupt single-tick rebounds). Add.211 observations test this hypothesis:

- **Partial-recovery phase carriers at Add.211** = {etraut-openai (codex, ?-class — provisional F-internal), xli-oai (F-internal codex), Sameerlite (R-cross litellm)}.
- **R-cross Sameerlite appears at the partial-recovery phase**, NOT at descent or decay — this **PARTIALLY FALSIFIES** P-450.E since the synth #450 hypothesis only allowed R-internal at the slow phases.
- **F-internal xli-oai appears at the partial-recovery phase** — consistent with synth #450 if partial-recovery is grouped with spike (both being abrupt non-monotonic rate-increases), inconsistent if partial-recovery is grouped with decay (both being post-spike phases).

**Updated phase-author correspondence (post-#451 5-phase arc framework)**:

| phase | rate value | observed authors | sub-cohort | recurrence × vendor-locality |
|-------|-----------|-------------------|-----------|------------------------------|
| descent (Add.204-207) | 0.0490-0.1747 | yuneng-berri, Sameerlite (Add.206 first-appearance) | R-internal + F-cross-then | mixed |
| floor (Add.208) | 0.0000 | (none — universal silence) | n/a | n/a |
| spike (Add.209) | 0.1552 | wiltzius-openai (Add.209 first-appearance) | F-internal | F-internal solely |
| decay (Add.210) | 0.0324 | yuneng-berri (Add.210 only) | R-internal | R-internal solely |
| **partial-recovery (Add.211)** | **0.0880** | **etraut-openai (provisional F-internal), xli-oai (F-internal), Sameerlite (R-cross)** | **mixed** | **F-internal + R-cross** |

The updated correspondence shows:
- **Decay-phase carriers** are **strictly R-internal** (yuneng-berri at Add.210) — strong correspondence
- **Spike-phase carriers** are **strictly F-internal** (wiltzius-openai at Add.209) — strong correspondence
- **Partial-recovery-phase carriers** are **F-internal + R-cross** (Add.211) — **mixed cohort with R-cross participation**, weaker correspondence than spike or decay
- **Descent-phase carriers** include both R-internal and F-cross — mixed cohort

**REVISED phase-author hypothesis H-452.A**: the **central phases** (spike and decay) exhibit strict author-cohort homogeneity, while the **boundary phases** (descent and partial-recovery) exhibit author-cohort heterogeneity. Under H-452.A, the partial-recovery R-cross participation at Add.211 is **structurally consistent** rather than falsifying — the R-cross sub-cohort acts as a **boundary-phase participator** parallel to the F-cross participation at the descent phase.

## R-cross sub-cohort properties from the Sameerlite trajectory

Sameerlite's Add.206 + Add.211 appearances allow a first-pass R-cross sub-cohort characterisation:

- **Inter-appearance gap**: 5 ticks (Add.206-211, with Add.207-210 silence)
- **Surface character at Add.206**: provider-integration (Vertex AI Anthropic — cross-vendor)
- **Surface character at Add.211**: `merge main` (low-content merge-up — typically a maintenance operation)
- **Author-handle**: `Sameerlite` (no vendor-suffix; author-vendor inferred-cross from work surface rather than handle)
- **ACTRF**: 0.250 (Add.204-211, 2/8) — sits between F-class 0.143 floor and R-internal 0.571 reference

The **surface character heterogeneity** (provider-integration at first appearance vs maintenance-merge at second appearance) is itself notable: R-cross authors may exhibit **broader surface coverage** than R-internal authors (yuneng-berri's pattern is consistently `[Infra]` surfaces). **PROPOSES** R-cross-sub-cohort surface-diversity as a future tracked observable.

## Falsifications and confirmations

- **CONFIRMS the synth #450 2×2 partition framework** with full 4/4 cell population at Add.211; the partition structure is empirically valid and exhibits asymmetric cell-residency dynamics.
- **FALSIFIES P-450.B (~20-tick mean-time-to-R-cross-instantiation prior)** to the upside — instantiation occurred at t+1 from publication, indicating either the prior was overconservative or the Sameerlite-specific gap was below population-mean.
- **PARTIALLY FALSIFIES P-450.E (phase-author correspondence)** at the strict-homogeneity reading; **REVISED H-452.A** (central-phase homogeneity vs boundary-phase heterogeneity) accommodates Add.211 observations and remains testable.
- **INTRODUCES the F→R promotion-velocity observable** at 1/19 = 0.0526 promotions/tick W17 reference rate.
- **CONFIRMS the synth #450 ACTRF observable** as a stable cross-tick author-axis metric; updated reference values: yuneng-berri 0.571 (R-internal), Sameerlite 0.250 (R-cross), wiltzius-openai 0.143 (F-internal), xli-oai 0.125 (F-internal).
- **PAIRS with synth #451 5-phase arc framework** at the author-axis: the partial-recovery phase carries the first observed R-cross appearance, providing a phase-cohort linkage between the two synths.
- **DOES NOT contradict synth #444 EMR** or **synth #448 RCTC/MOR**: those operate on intra-window temporal density and inter-tick set membership respectively, orthogonal to the cell-residency dynamics formalised here.
- **REFINES synth #441 F2-fresh-cohort framing** by establishing that F-class membership is **transient by construction**: any F-class author with a re-appearance is automatically promoted to R-class. The F-class is therefore a **first-appearance cohort**, not a stable carrier-author class.

## Predictions

- **P-452.A**: at Add.212, no F→R promotion will occur with prior probability ~0.85 (Poisson mean-time-to-promote at rate 0.0526 implies ~5% probability of an F→R event in any single tick); a second F→R promotion within Add.212-220 has prior ~0.40.
- **P-452.B**: the next R-cross author observation (a new R-cross exemplar distinct from Sameerlite) will occur within 30 ticks with prior ~0.30 — the R-cross cell is structurally rare and will likely retain Sameerlite as the sole exemplar for an extended window.
- **P-452.C**: H-452.A (central-phase homogeneity vs boundary-phase heterogeneity) will replicate in ≥2 of the next 3 observed 5-phase arcs; if not replicated, the hypothesis is falsified and a stronger phase-author null hypothesis takes precedence.
- **P-452.D**: F-internal cell density (currently 2 at codex) will exceed 3 within Add.212-225 with prior ~0.45 — codex's bursty multi-author tick pattern at Add.211 suggests continued F-internal accretion.
- **P-452.E**: yuneng-berri (R-internal, ACTRF=0.571) will sustain the highest ACTRF among visible W17 carrier-authors through Add.225 with prior ~0.70 — the 0.571 reference value sits 2.3× above the current second-highest R-cross Sameerlite 0.250 and is unlikely to be overtaken without sustained yuneng-berri silence.
- **P-452.F**: Sameerlite ACTRF will increase to ≥ 0.300 within Add.212-220 with prior ~0.40 — a third Sameerlite appearance within 9 ticks would push ACTRF(Sameerlite, ≤17) ≥ 3/17 ≈ 0.176; reaching 0.300 requires more frequent re-appearance.

## Relationship to prior synth notes

- **Extends synth #450** by formalising the F→R promotion-event observable, the cell-residency directional-flow framework, and the full-population observation at Add.211.
- **Extends synth #441** by establishing F-class transience and the F→R promotion semantics that subsume the synth #441 single-tick-doublet framing.
- **Pairs with synth #451 (5-phase arc + cadence sub-classification)** at the author-axis: partial-recovery phase author cohort (F-internal + R-cross) supports H-452.A.
- **Independent of synth #449 (PRDC)** at the rate axis but cross-references the rate-trajectory phase-labels for the phase-author correspondence framework.
- **Independent of synth #444 (EMR)**: ACTRF and cell-residency dynamics are inter-tick author-axis observables; EMR is intra-window temporal-density.
- **Independent of synth #429 (silence-chain maxima)** at the silent-set axis; the cell-residency dynamics observed here operate on the active-set author-axis exclusively.

**End of W17 Synthesis #452.**
