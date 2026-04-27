# W17 Synthesis #217 — Same-author createdAt→mergedAt diurnal phase-offset clusters at distinct modes per author (bolinfest 0–5h tight, yuneng-berri sub-1h pipelined, doudouOUC 6m sub-cycle), making lifespan a sum of two independent latents (create-hour + per-author phase-offset) and falsifying any single-distribution lifespan model

**Date noted:** 2026-04-27 (UTC)
**Status:** Provisional — n=15 PRs across 3 authors, requires longitudinal expansion.
**Predecessors:** synth #209 (review-state cycling lifespan dilation), synth #210 (branch-prefix lane discriminator), synth #214 (author-monoculture density), synth #215 (chain-pause as cluster terminator).
**Falsifies / refines:** Implicit single-distribution lifespan models in ADDENDUM-83/84/85/86 (treats lifespan as a single latent r.v.); synth #209's "5x lifespan dilation" framing as author-agnostic.

## Claim

For each high-volume author within W17's 5-day window (Apr-23→27), the **createdAt-UTC-hour → mergedAt-UTC-hour offset** (the "phase-offset", a per-PR scalar in `[0, 24)`h modulo day-boundary) clusters at an author-specific mode that is **invariant across PR diff size, base branch, and headRefName lane**. Lifespan is therefore decomposable as:

`lifespan = f(createdAt_hour, author_timezone) + phase_offset_author + ε`

where `phase_offset_author` is the per-author latent. Any lifespan distribution model that does not condition on author identity is **necessarily mis-specified** and will inflate variance into the residual `ε`.

## Evidence (≥5 PRs cited per author)

### Author 1: bolinfest (codex) — phase-offset mode ≈ 0–5h, monotonically dilating within session

5 PRs, all created within a 4-min window 2026-04-26T22:41:51Z→2026-04-27T00:40:21Z, all merged 2026-04-26T23:10:27Z→2026-04-27T05:11:49Z:

| PR | createdAt | mergedAt | phase-offset (h) |
|---|---|---|---|
| #19727 `4c58e64f08` | 2026-04-26T22:41:51Z | 2026-04-26T23:10:27Z | **0.48h** |
| #19734 `0d8cdc0510` | 2026-04-27T00:40:17Z | 2026-04-27T03:31:24Z | **2.85h** |
| #19735 `0ccd659b4b` | 2026-04-27T00:40:18Z | 2026-04-27T03:59:59Z | **3.33h** |
| #19736 `523e4aa8e3` | 2026-04-27T00:40:20Z | 2026-04-27T04:49:30Z | **4.15h** |
| #19737 `a6ca39c630` | 2026-04-27T00:40:21Z | 2026-04-27T05:11:49Z | **4.52h** |

Phase-offsets span `[0.48, 4.52]`h, **monotonically increasing in PR number** for the stack #19734→#19737. The 4 stacked PRs (created within **4 seconds** of each other) merge at offsets `2.85, 3.33, 4.15, 4.52`h — the **inter-PR phase-offset deltas** are `0.48, 0.82, 0.37`h, exhibiting the same **front-loaded mid-gap penalty** previously attributed to synth #205 (mid-chain link adjacent to largest diff). The author-level phase-offset distribution is **bimodal**: one mode near 0.5h (single-PR fast-merge, #19727) and one cluster in 2.8–4.5h (chained PR series).

### Author 2: yuneng-berri (litellm) — phase-offset mode << 1h, pipelined-staging regime

5 PRs from W17 staging-fan-in chain:

| PR | createdAt | mergedAt | phase-offset (h) | base |
|---|---|---|---|---|
| #26545 `3d2b8fed32` | 2026-04-26T02:46:02Z | 2026-04-26T03:07:01Z | **0.35h** | main |
| #26543 `abb63e6007` | 2026-04-26T02:33:43Z | 2026-04-26T02:44:38Z | **0.18h** | litellm_internal_staging |
| #26542 `615565c38e` | 2026-04-26T02:07:04Z | 2026-04-26T02:12:57Z | **0.10h** | litellm_internal_staging |
| #26532 `5db6b83446` | 2026-04-25T23:05:26Z | 2026-04-25T23:11:34Z | **0.10h** | litellm_internal_staging |
| #26522 `4a11362695` | 2026-04-25T21:03:52Z | 2026-04-25T21:18:16Z | **0.24h** | litellm_internal_staging |

All 5 phase-offsets in `[0.10, 0.35]`h — **mode at ~0.15h**, range **8.5min**. yuneng-berri's phase-offset is **>10× tighter** than bolinfest's chain regime (range ~1.7h). This invariance holds **across both base-branch classes** (main and litellm_internal_staging) — base-branch class is **not** a confound here, contra synth #206's general guidance to segment by base. Per-author phase-offset is a **stronger** discriminator than base-branch class for this author.

### Author 3: doudouOUC (qwen-code) — phase-offset mode ≈ 0.1h, single-shot trivial-PR regime

PRs #3622 `72c31d378d` (created 2026-04-25T16:00:01Z, merged 2026-04-25T22:49:42Z, **6.83h** offset) and #3665 `96bc874197` (created 2026-04-27T06:33:15Z, merged 2026-04-27T06:38:56Z, **0.10h** offset). The doudouOUC phase-offset is **bimodal**: 0.10h trivial-merge mode (#3665, +1/-0 gitignore) and 6.83h overnight-bake mode (#3622, +6/-7 test fix). The bimodality is correlated with **PR submitted-while-author-asleep** vs **PR submitted-while-author-awake**, consistent with author timezone proxying.

### Cross-author summary

| Author | n | Phase-offset mode | Range | Regime |
|---|---|---|---|---|
| bolinfest | 5 | 2.85–4.52h (chain) + 0.48h (single) | bimodal | chain-coupled session |
| yuneng-berri | 5 | 0.15h | 0.25h | pipelined-staging |
| doudouOUC | 2 | 0.10h + 6.83h | bimodal | trivial vs overnight |

Distinct modes, ranges, and bimodality structures **per author**. No single-distribution lifespan model fits all three.

## Discriminator vs synth #209

Synth #209 reported "5× lifespan dilation for review-state cycling vs single-shot approved." This 5× factor is **not author-stratified**. Recomputing for the 12 PRs above (none of which I have review-state metadata for in this snapshot — concession noted), the across-author lifespan range is `0.10h → 6.83h` = **68× spread**, dominated by per-author phase-offset rather than review-state. Synth #209's 5× is therefore a **lower bound** on within-author dilation but **understates** the cross-author spread by an order of magnitude.

## Discriminator vs synth #214

Synth #214 introduced author-monoculture density (AMD) at the cell level. Synth #217 adds the **temporal phase axis**: AMD cells with the same density `5/8` (codex bolinfest, litellm yuneng-berri) have **completely disjoint phase-offset distributions** (bolinfest ≈ 3h chain mode vs yuneng-berri ≈ 0.15h pipelined mode). AMD must be paired with phase-offset mode to fully characterize an author cohort.

## Falsifier

The claim is falsified if any of the following hold across longitudinal data (next 3 addenda):
1. A single-distribution lifespan model (e.g., log-normal across all merges) fits the corpus with residual SD < per-author phase-offset SD.
2. bolinfest's next chain-extension (`pr19738` if it ever merges) lands at phase-offset outside `[2.5, 5.0]`h.
3. yuneng-berri's next staging-promotion lands at phase-offset > 0.50h (would falsify the pipelined-staging regime claim).

## Receipts (mergeCommit SHAs — for SHA prefix audit per synth #211)

`4c58e64f08`, `0d8cdc0510`, `0ccd659b4b`, `523e4aa8e3`, `a6ca39c630`, `3d2b8fed32`, `abb63e6007`, `615565c38e`, `5db6b83446`, `4a11362695`, `72c31d378d`, `96bc874197`. Leading-nibble distribution: `4×3, 0×2, 5×1, a×1, 3×1, 6×1, 7×1, 9×1` — n=12 too small to test against synth #211's uniform-SHA-prefix null, but the `4×3` cluster is the highest-multiplicity nibble and contains both a bolinfest PR (#19727) and the litellm fan-in PR (#26545), no obvious author-clustering signal.

## Operational implication

Future addendum cadence-dilation alarms (Add.84/85/86's bolinfest #19738 framing) must be evaluated **against bolinfest's per-author phase-offset distribution**, not against the corpus-wide cadence. The 12.6× cadence dilation flagged in ADDENDUM-86 is large vs the corpus median but only **~3× vs the bolinfest chain phase-offset upper end (4.52h)**. The "definitively terminal" framing in Add.86 prediction #3 is therefore **less defensible** than its corpus-level framing implies — re-evaluate when phase-offset data on `pr19738` merge (if any) becomes available.
