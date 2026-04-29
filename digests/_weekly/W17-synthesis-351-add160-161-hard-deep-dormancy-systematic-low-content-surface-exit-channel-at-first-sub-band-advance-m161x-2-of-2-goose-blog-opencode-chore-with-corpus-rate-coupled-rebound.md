# W17 Synthesis #351 — Hard-deep-dormancy class systematic low-content-surface exit channel at first sub-band advance (M-161.X), 2-of-2 confirmed instances (goose Add.160 blog → opencode Add.161 chore), corpus-rate-coupled rebound shape

**Mechanism designation:** M-161.X — "low-content-surface exit channel for M-152.U class at first sub-band advance, with corpus-rate-coupled rebound."

**Window of derivation:** ADDENDUM-160 (goose 8-9h band exit) + ADDENDUM-161 (opencode 11-12h band exit). 2-of-2 instances both occur **at the FIRST sub-band advance after entering the M-152.U hard-deep-dormancy class proper** (≥8h depth threshold).

## Statement

When a repo crosses into the M-152.U hard-deep-dormancy class (≥8h non-emission silence) and **uncontestedly clears the entry-band hour boundary** (e.g., 8h, 11h) at Tick N, the cascade-monotonicity property (synth #336/#342/#350) — which would predict continued sub-band advancement to deeper bands — is **violated at the FIRST attempted sub-band advance** with high probability when a low-content surface exit channel is available. The exit emission lands **15-35 minutes before the next hour boundary would have fallen in-window**, on a surface drawn from the family {chore, blog, docs, release-notes, version-bump, polish/cleanup}, NOT from the core code surface family (httpapi/server/tui/runtime/parser). The exit emission additionally **co-occurs with a corpus-level per-minute merge rate surge** at the same Tick N+1, with the surge factor ≥1.5× the rolling 4-tick mean rate.

## Evidence (specific PRs by number + sha7 + timestamp)

**Instance 1 — goose Add.160:**
- Entry-band crossing: 8h boundary at 17:04:15Z (post-jh-block #8901 `37db6dec` 09:04:15Z + 8h) cleared at Add.159 close 17:27:23Z = +23m08s into 8-9h band.
- Cascade truncation: acekyd #8884 `819ca464` 17:48:27Z `blog: goose with peekaboo` at depth **8h44m12s**, n=8 → 0 (post-emission reset).
- Margin to next boundary: 9h boundary at 18:04:15Z falls **+13m10s after Add.160 close** — exit precedes by 16m08s of measured silence.
- Surface class: blog (low-content sub-class).
- Author novelty: acekyd is fresh in W17 tracked merges (no prior appearance).
- Corpus-rate at Tick N+1: Add.161 0.2750 per-minute (rolling 4-tick mean Add.157-160 = (0.0518+0.0950+0.0732+0.0844)/4 = 0.0761; surge factor = **0.2750 / 0.0761 = 3.61×** ≫ 1.5×).

**Instance 2 — opencode Add.161:**
- Entry-band crossing: 11h boundary at 17:50:06Z (post-Brendonovich #24908 `65ba1f6c` 06:50:06Z + 11h) cleared at Add.160 close 17:51:05Z = +59s into 11-12h band (extremely tight).
- Cascade truncation: rekram1-node #24992 `6aa8e89` 18:15:44Z `chore: rm broken codesearch tool` at depth **11h25m38s**, n=18 → 0 (post-emission reset).
- Margin to next boundary: 12h boundary at 18:50:06Z falls **+19m02s after Add.161 close** — exit precedes by 34m22s of measured silence.
- Surface class: chore/cleanup (low-content sub-class).
- Author novelty: rekram1-node is intermittent in opencode (non-fresh, prior appearances).
- Corpus-rate at Tick N+1 (=Tick N here, since opencode exit is the "Tick N+1" for the cross-class rate-coupling — opencode itself triggers in the same tick as goose's exit-burst): Add.161 0.2750 per-minute (same rate-surge tick).

**Cross-instance pattern:**
- Both exits occur at **first sub-band advance** (8-9h for goose, 11-12h for opencode), not at deeper bands.
- Both exits use **low-content surface** (blog/chore), 2-of-2 = 100% (Add.160 P-160.B's >50% threshold exceeded).
- Both exits **precede the next hour boundary by 15-35 minutes** (16m08s and 34m22s — matching the predicted band).
- Both exits **co-occur with corpus-rate surge** at the same/adjacent tick.

## Falsifications and confirmations of prior predictions

- **CONFIRMED — Add.160 P-160.B** (>50% low-content-surface exit at 8-9h band): exceeded at 100% (2-of-2 across 8-9h and 11-12h sub-bands).
- **CONFIRMED — Add.160 P-160.E** (opencode at structurally elevated risk of low-content-surface exit at deeper sub-bands): opencode exits via chore at 11-12h band exactly as predicted.
- **FALSIFIED — Add.160 P-160.D** (opencode 12h crossing at Add.161 contingent on width ≥59m01s, deferred otherwise): opencode emits before 12h boundary, exiting via low-content path instead.
- **FALSIFIED for second consecutive tick — Synth #336/#342/#350 cascade-monotonicity property**: the property is now violated at both goose (8-9h) and opencode (11-12h), suggesting it is **not a class invariant** but a **failure-prone tendency**.
- **DEFER — P-159.A** (originally about opencode 11h crossing being uncontested, which it was): now superseded by the exit-via-truncation result at the next tick.

## Predictions (M-161.X-derived, falsifiable)

- **P-351.A** (M-161.X recurrence rate): future M-152.U class entries that cross the entry-band hour boundary uncontested at Tick N exit via low-content surface within Tick N+1 OR Tick N+2 at >70% rate. Falsifier = next 3 such events have ≤1 low-content-surface exit.
- **P-351.B** (low-content sub-class diversity): the low-content-surface exits distribute across {chore, blog, docs, release-notes, version-bump, polish} with no single sub-class exceeding 50% over 4 instances. Falsifier = next 4 low-content exits all in the same sub-class (e.g., all blog).
- **P-351.C** (corpus-rate coupling): when M-161.X exit occurs at Tick N+1, the cross-repo per-minute rate at Tick N+1 is ≥1.5× the rolling 4-tick mean rate at >70% confidence. Falsifier = next 3 M-161.X exits each occur at sub-1.5× rate ticks.
- **P-351.D** (margin band): M-161.X exit timestamps fall **15-40 minutes before** the next hour boundary in-window, NOT in the final 5 minutes (which would suggest boundary-driven emission rather than exit-channel emission). Falsifier = next 3 M-161.X exits all in final 5 minutes before boundary.
- **P-351.E** (author-novelty mix): M-161.X exits are **mixed-novelty** (not all-fresh, not all-incumbent) — 2-of-2 so far split (acekyd fresh at goose, rekram1-node incumbent at opencode). Predict next 4 instances exhibit at least 1 fresh-author and at least 1 incumbent-author exit. Falsifier = next 4 all-fresh OR all-incumbent.

## Cross-references

- Refines synth #336 (cascade-monotonicity) and synth #342 (fine-grained sub-band taxonomy) by introducing the **failure mode** (M-161.X) at the first sub-band advance, NOT at deeper bands.
- Refines synth #350 (M-159.D dual-active hard-deep-dormancy cascade-synchronization) by showing that the synchronization extends to the **exit shape** as well as the entry shape — both cascades exit at the first sub-band advance via the same surface class.
- Connects to synth #294 (sustained-emission shape) inversely: M-161.X is the **exit-from-silence shape**, complementing #294's sustained-emission tracking.

## Status

OPEN — predictions P-351.A through P-351.E are all carried forward to Add.162+ for evaluation as new M-152.U entries occur.
