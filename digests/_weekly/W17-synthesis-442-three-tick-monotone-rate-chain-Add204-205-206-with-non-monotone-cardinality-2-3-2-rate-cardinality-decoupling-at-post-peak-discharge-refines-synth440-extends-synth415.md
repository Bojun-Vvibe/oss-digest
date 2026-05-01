# W17 Synthesis #442 — 3-tick monotone-decreasing per-minute-merge-rate chain Add.204→205→206 (0.1747→0.1029→0.0679, cumulative −61.1%) co-occurring with non-monotone carrier-cardinality trajectory 2→3→2 establishes rate-cardinality joint-trajectory decoupling at post-peak-discharge transition refines synth440 extends synth415

## Pattern statement

Across the **3-tick window Add.204 / Add.205 / Add.206**, the per-minute cross-repo merge rate produced a **strictly monotone-decreasing chain**:

| tick | width (m) | merge count | per-minute rate | carrier-cardinality |
|------|-----------|-------------|-----------------|---------------------|
| Add.204 | 62.97 | 11 | **0.1747** | 2 ({codex, litellm}) |
| Add.205 | 58.35 | 6 | **0.1029** | 3 ({codex, litellm, gemini-cli}) |
| Add.206 | 44.20 | 3 | **0.0679** | 2 ({codex, litellm}) |

The rate trajectory **0.1747 → 0.1029 → 0.0679** is **strictly monotone-decreasing across 3 consecutive ticks** with cumulative drop **−61.1%** (intermediate steps **−41.1%** and **−34.0%**). This is the **first 3-tick monotone-decreasing rate chain in the visible W17 Add.193-206 lookback**.

Crucially, the carrier-cardinality trajectory **2 → 3 → 2** is **non-monotone with a single mid-peak at Add.205** — i.e., the **rate observable and the cardinality observable decouple in their trajectories** across this 3-tick window. The rate descends monotonically while the cardinality rises then falls.

## Specific observables (Add.204-206)

- **Add.204** (peak rate, baseline cardinality):
  - 11 merges across {codex (n=6 sextet), litellm (n=5 incl. yuneng-berri/Michael-RZ-Berri double-doublet pair flagged by synth #438)}.
  - Rate 0.1747 = peak of the 3-tick window.
- **Add.205** (mid-peak cardinality, mid-rate):
  - 6 merges across {codex (n=2: #20341 euroelessar `972b8192`, #20300 rhan-oai `6b1b2278`), litellm (n=1: #26826 shivamrawat1 `ebbe2f49`), gemini-cli (n=3: bdmorgan triplet #26290 `c427bd44`, #26308 `2e3090b6`, #26309 `4e81f486` flagged by synth #439)}.
  - Rate 0.1029. Carrier expands to 3 (gemini-cli entry).
- **Add.206** (post-peak rate floor, cardinality contracts):
  - 3 merges across {codex (n=1: #20484 wiltzius-openai `c39824c2`), litellm (n=2: #25499 Sameerlite `72ddbce5`, #26222 Sameerlite `efa33bfe` flagged by synth #441)}.
  - Rate 0.0679. Carrier contracts back to 2 (gemini-cli exits at n=1, opposite of Add.205 entry).

## Decoupling analysis

The joint-trajectory **(rate, cardinality)** traces the following path in 2D observable-space across the 3 ticks:

```
Add.204:  (0.1747, 2)   — high rate, low cardinality
Add.205:  (0.1029, 3)   — mid rate,  HIGH cardinality
Add.206:  (0.0679, 2)   — LOW rate,  low cardinality (back to Add.204 cardinality)
```

The **rate axis monotone-descends** while the **cardinality axis traces an inverted-V**. This is **structurally distinct** from W17 hypotheses that previously assumed rate and cardinality co-vary:

- **Synth #424 / #428 / #431** (mode-progression framework): assumed cardinality changes drive rate changes monotonically.
- **Synth #440** (cross-tick amplitude-cardinality anticorrelation Add.203-204-205): identified an **anticorrelation between amplitude and cardinality** at the Add.204 → Add.205 transition (amplitude 11→6, cardinality 2→3). Synth #442 now extends this by adding the Add.206 step where **amplitude AND cardinality both contract** (6→3 and 3→2) — i.e., the anticorrelation **breaks at n=2** when both observables co-contract.

Synth #442 therefore **REFINES synth #440** by establishing that the amplitude-cardinality anticorrelation is **not a sustained regime** but a **single-tick transition signature at the cardinality-expansion boundary only**; once cardinality starts to contract, the anticorrelation reverses to **co-contraction**.

## Post-peak-discharge transition framing

The 3-tick joint trajectory matches the **post-discharge transition tri-modal distribution** flagged by synth #415, with **Add.205 as the discharge-peak** (cardinality maximum) and **Add.206 as the immediate post-peak step**.

Specifically:

- **Add.204** = pre-discharge build-up (high amplitude, narrow cohort).
- **Add.205** = discharge-peak (cohort expands to absorb a transient entrant — gemini-cli/bdmorgan; the transient is a low-content docs-only oscillation per synth #439).
- **Add.206** = post-discharge floor (transient exits, cohort contracts back to baseline backbone-pair {codex, litellm}, amplitude contracts further than the cardinality contraction would predict).

This is the **first W17 instance of a fully resolved 3-tick post-peak-discharge curve** observed end-to-end with both the build-up tick AND the recovery tick visible. The synth #415 framework predicted such curves but did not have a named exemplar within the W17 lookback until Add.206 closed the cycle.

## Falsifiable predictions

- **P-442.A** (rate-chain extension at n=4): if Add.207 produces a per-minute rate **< 0.0679**, the monotone-decreasing rate chain extends to **4 ticks** — a structurally significant escalation. Modal prediction: **chain breaks at Add.207** with rate ≥ 0.0680. Chain extension to 4 would seed a new synthesis on **rate-only multi-tick discharge regimes**.
- **P-442.B** (cardinality non-monotone signature recurrence): the (rate-monotone, cardinality-non-monotone) joint-trajectory signature is hypothesized as a **leading indicator of post-peak-discharge transitions**. If a future 3-tick window in W17 reproduces this signature with a different carrier-set, the joint-trajectory observable is **promoted from instance to regime**.
- **P-442.C** (backbone-pair survival hypothesis): {codex, litellm} survives as a strict subset of the carrier-set across all 3 ticks Add.204-206. Predicted Add.207 carrier-set ⊇ {codex, litellm} with probability ≥ 0.7 (the backbone-pair has 3-tick survival evidence and synth #315/#319 prior support).
- **P-442.D** (Add.207 rate-cardinality joint-cell): given the post-peak-discharge curve, Add.207 most likely lands in the **(low-rate, low-cardinality) cell** ≈ (0.04-0.10, 1-2), continuing the trough phase before any next discharge build-up.

## Cross-reference to synth #441

Synth #441 and synth #442 co-describe the **same Add.206 tick from orthogonal observables**: synth #441 zooms in on a **single carrier-internal author-cohort sub-mode** (Sameerlite F2 fresh-author cross-vendor doublet), while synth #442 zooms out to the **3-tick aggregate rate-cardinality joint-trajectory**. The litellm 1→2 amplitude rebound flagged in synth #441 is the **carrier-internal rebound inside the aggregate-rate descent** — formalized here as the **carrier-aggregate decoupling sub-observable** at Add.206.

**End of W17 synthesis #442.**
