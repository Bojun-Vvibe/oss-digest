# W17 Synthesis #262 — **Pred OO' axis decomposition**: `-berri` cohort hypothesis splits into **cardinality axis** (≥6 distinct logins by W18 close — currently STALLED at 5) vs **activity axis** (any in-window `-berri` PR — yuneng-berri #26675 RECURS at Add.114 after 3-tick litellm zero-merge run); FALSIFIES the conflated single-axis framing of synth #258's `-berri` cohort observation; introduces **cohort-tracking decomposition** as a general methodology pattern applicable to other cohort predictions (`-openai`, `-oai`, `-anthropic-staff`); cross-validates synth #261's resurrection regime by demonstrating **cohort-author re-entry** (yuneng-berri prior W17 PR #26643 still OPEN — return-to-stack-augmentation, not fresh debut)

**Status:** REFINES synth #258 (deep-cohort cardinality conservation framework) by extracting a **cardinality-vs-activity decomposition** that synth #258 left implicit. SUSTAINS synth #260 author-pool-broadening (activity axis is broadening sub-signal). REFINES synth #261 prediction-resurrection regime (cohort-author re-entry distinguishes from per-author resurrection). FALSIFIES the single-axis framing of Pred OO' that conflated cardinality growth with cohort activity.

## Cross-references
- REFINES synth #258 (deep-cohort cardinality conservation) — extracts the cardinality vs activity decomposition.
- SUSTAINS synth #260 (author-pool-broadening) — activity axis IS the broadening signal applied to a specific cohort.
- REFINES synth #261 (prediction-resurrection regime) — cohort-author re-entry is a 4th axis distinct from debut/re-entry/resurrection.
- Cross-references Pred OO (litellm `-berri` author commit-phase dominance — PAUSED-EXTENDED-3-TICK).
- Cross-references Pred OO' (cohort cardinality ≥6 by W18 close — currently STALLED-CARDINALITY / RECURRING-ACTIVITY).

## Empirical basis (Add.114 cohort decomposition trigger)

At Add.111, ryan-crabbe-berri DEBUTED (1st W17 appearance) with merged litellm #26631. The `-berri` cohort grew to **5 distinct W17 logins**: ishaan-berri, krrish-berri, yuneng-berri, ryan-crabbe-berri, +1. Synth #258 observed cardinality conservation; Pred OO' predicted growth to ≥6 by W18 close.

Across Add.112-Add.113, Pred OO' was annotated **STALLED** — no new `-berri` debut. The framing was implicitly **cardinality-axis** (counting distinct logins).

At Add.114, **yuneng-berri opens litellm #26675** (`fix(vertex): preserve items on array branches in anyOf with null + de-flake test`) at 06:38:00Z. yuneng-berri is **already in the cohort** (since pre-Add.111). The cardinality is **unchanged at 5**. BUT the **cohort activity** (any in-window `-berri` PR) has RECURRED after a 3-tick zero-litellm-merge run.

The single-axis framing of Pred OO' cannot describe this state — cardinality is STALLED (no growth) while activity is RECURRING (cohort-member re-engages). Synth #262 decomposes Pred OO' into two sub-predictions to disambiguate.

Additionally, yuneng-berri has a **prior W17 OPEN PR** — #26643 (`[Fix] /config/update: targeted per-section writes, drop store_model_in_db gate`) opened 22:00:41Z 04-27, still OPEN at lifespan ~8h47m+ at Add.114. **#26675 is a stack-augmentation, not a session-resumption** — yuneng-berri is iterating on litellm config-axis surfaces in parallel rather than returning to a single stale PR.

## Synth #262 claim — Cohort-tracking decomposition

**Statement:** Cohort-membership predictions (e.g., Pred OO') must be decomposed into **two orthogonal axes**:
- **Cardinality axis**: count of distinct cohort logins observed in W17 corpus.
- **Activity axis**: count of in-window cohort-author actions (open/merge/close).

The two axes evolve independently. Cardinality growth requires DEBUT events (synth #260) or RESURRECTION-DEBUT events (a never-before-seen cohort author appearing). Activity recurrence only requires any cohort-member re-engagement (synth #261-style resurrection or routine cadence).

**Mechanism:** Cohort-membership is a slowly-evolving structural property (vendor onboarding, staff hiring, contributor reach). Cohort-activity is a fast-evolving operational property (commit-phase pressure, release cadence, individual author session-timing). Conflating them obscures the rate of structural change vs operational change.

**This is non-obvious because:** Cohort predictions are typically framed as growth predictions (Pred OO' "≥6 logins"), but their day-to-day evolution is dominated by activity recurrence which does not advance the cardinality state. The decomposition reveals that **cardinality predictions can be STALLED while activity predictions are RECURRING** — a state combination not naturally expressible without decomposition.

## Predictions opened by synth #262

### Pred 262-1 (replaces Pred OO' single-axis) — Pred OO'-cardinality: cohort reaches ≥6 distinct logins by W18 close
**Statement:** ≥1 NEW `-berri` author (never-before-seen in W17) debuts a litellm PR by W18 close.
**Falsifier:** W18 closes with `-berri` cohort still at 5 distinct logins.
**Trajectory:** STALLED (5 logins held since Add.111, no debut in 3 ticks).
**Cross-check:** Pred 260-4 (`-berri` debuts only in commit-phase ticks) constrains the falsification — if ALL upcoming litellm ticks are non-commit-phase, falsification is auto-supported by Pred 260-4 mechanism.

### Pred 262-2 (NEW companion) — Pred OO'-activity: cohort produces ≥1 in-window PR per 3 ticks
**Statement:** Across all rolling 3-tick windows from Add.114 to W18 close, ≥1 `-berri` cohort member produces an in-window PR (open/merge/close).
**Falsifier:** Any 3-tick window has ZERO `-berri` cohort PR activity.
**Empirical seed:** Add.112-Add.113-Add.114 had 0+0+1 (yuneng-berri #26675) = 1 = passes. Add.111-Add.112-Add.113 had 1+0+0 = 1 = passes.
**Trajectory:** PASSING (activity recurrence within 3-tick window).

### Pred 262-3 — Cohort-author stack-augmentation precedes resurrection in cohort context
**Statement:** Across the next 3 cohort re-engagement events (any cohort author returning after ≥1-tick silence), ≥2 of 3 produce a NEW PR (stack-augmentation) rather than activity on a stale PR (session-resumption).
**Falsifier:** ≥2 of 3 re-engagement events are session-resumption on stale PR.
**Empirical seed:** yuneng-berri #26675 is stack-augmentation (NEW PR while #26643 still open) — 1 of 1 supports.
**Mechanism:** Cohort authors operate within a defined surface (litellm internals, staff scope) and prefer parallel small PRs to single-monolithic PR iteration. Stack-augmentation is the modal pattern; session-resumption is rarer.

### Pred 262-4 — Cardinality axis is anti-correlated with activity axis within commit-phase ticks
**Statement:** Across the next 4 litellm commit-phase ticks (≥1 in-window merge), the tick with maximum cohort-debut count has the minimum cohort-activity count and vice versa.
**Falsifier:** ≥3 of 4 commit-phase ticks have cohort-debut count and cohort-activity count moving in the same direction.
**Mechanism hypothesis:** Reviewer attention is finite — a tick with large debut surge consumes attention bandwidth that would otherwise pull existing cohort members forward. The two axes compete for the same merge-slot capacity.
**Test:** Requires ≥4 litellm commit-phase ticks; current frequency suggests ≥6-tick test horizon.

### Pred 262-5 — Cohort-tracking decomposition applies to `-openai` and `-oai` cohorts symmetrically
**Statement:** Within the next 6 ticks, applying the cardinality-vs-activity decomposition to the codex `-openai` cohort (etraut-openai, evawong-oai, eternal-openai, mzeng-openai, abhinav-oai, canvrno-oai, etc.) reveals a similar STALLED-cardinality / RECURRING-activity state for ≥1 tick.
**Falsifier:** All 6 next ticks have either advancing cardinality OR zero activity for the `-openai` cohort.
**Empirical seed:** Add.114 etraut-openai resurrection (Pred VV) is a `-openai` activity recurrence; cardinality of `-openai` cohort is unchanged. 1 of 1 supports the symmetry.

## Linkage to synth #260, #261, and #258

The four axes of author-pool evolution are now:

| Axis | Synth | Mechanism | Add.114 instance |
|------|-------|-----------|------------------|
| DEBUT | #260 | 1st W17 appearance | ualtinok #24740 (opencode) |
| RE-ENTRY | (PP-class) | Return after multi-tick silence | none at Add.114 |
| RESURRECTION | #261 | Return immediately after explicit falsification | etraut-openai #19933 |
| COHORT-RECURRENCE | #262 | Cohort-member re-engagement, cohort-cardinality unchanged | yuneng-berri #26675 |

This is the **complete decomposition** of W17 author-pool change events. Pred 262-5 tests whether the framework generalizes across cohorts.

## What synth #262 does NOT claim

- Does NOT retract Pred OO' — it explicitly **decomposes** it into Pred 262-1 (cardinality) and Pred 262-2 (activity).
- Does NOT claim the 4 axes are mutually exclusive — a single PR can simultaneously trigger multiple (e.g., a NEW author from `-berri` cohort would be DEBUT + cohort-cardinality-growth + cohort-activity).
- Does NOT predict the cardinality axis is more important than the activity axis — Pred 262-4 explicitly tests competition between them.
- Does NOT generalize to non-suffix-marked cohorts (e.g., random independents) — the decomposition requires a clearly-defined cohort-membership criterion.

## Capture summary

Add.114's yuneng-berri #26675 open is the **first cohort-recurrence event in W17 corpus** that explicitly contradicts the cohort-cardinality-growth framing. Synth #262 decomposes Pred OO' into Pred 262-1 (cardinality) and Pred 262-2 (activity) and adds two general-purpose tests (Pred 262-3 stack-augmentation modality, Pred 262-4 cardinality-vs-activity anti-correlation). Pred 262-5 tests cross-cohort symmetry. **The combined synth #260 + #261 + #262 framework provides a 4-axis decomposition of author-pool change events** — DEBUT / RE-ENTRY / RESURRECTION / COHORT-RECURRENCE — that should be applied uniformly to all author-cadence and cohort-membership predictions in subsequent ticks. **Synth #262 does not retract any prior synth; it formalizes a methodology refinement that all four currently-active cohort/author predictions inherit.**
