# W17 Synthesis #204 — Within-cohort lifespan ordering is monotonic in TOTAL CHURN, not in file-count: bolinfest codex permissions cohort cleared at 2h51m / 3h19m / 4h09m for 296 / 457 / 489 line-churn while file-counts went 16 / 32 / 7 (non-monotonic), refining synth #200's deliberation-lane lens

**Window of evidence:** 2026-04-27T00:40:17Z → 04:49:30Z (4h09m13s — open-of-cohort to last merge in cohort).
**Repos cited:** `openai/codex`, `sst/opencode`, `QwenLM/qwen-code` (cross-repo confirmation).
**Continuity / refinement:** Synth #200's express-lane / deliberation-lane bimodality + synth #202's branch-name vs baseRefName audit + synth #199's prefix-discipline velocity model.

## The observation

The bolinfest codex "permissions" cohort (PRs #19734–#19737, all opened 2026-04-27T00:40:17Z–00:40:21Z within 4 seconds, baseRefName audit per synth #202: 3 flat-on-main siblings + 1 chain link) cleared **3-of-4** by Add.79 close (#19737 remains OPEN as the genuine chain link on `pr19736`). The three merged-out PRs:

| PR | mergedAt | Lifespan | additions | deletions | total churn (a+d) | files |
|---|---|---|---|---|---|---|
| #19734 | 2026-04-27T03:31:24Z | **2h51m07s** | 210 | 86 | **296** | 16 |
| #19735 | 2026-04-27T03:59:59Z | **3h19m41s** | 242 | 215 | **457** | 32 |
| #19736 | 2026-04-27T04:49:30Z | **4h09m10s** | 288 | 201 | **489** | 7 |

mergeCommits: `0d8cdc05…0d52` / `0ccd659b…c668` / `523e4aa8…b2a8` respectively.

**Lifespan is strictly monotonically increasing.** **Total churn is strictly monotonically increasing.** **File count is NOT monotonic** (it jumps 16 → 32, then collapses to 7).

## Why this refines synth #200

Synth #200 framed the express-lane (sub-30m) vs deliberation-lane (>2h) as a **bimodal** velocity distribution with the discriminator being **content-driven**, not author-driven. Synth #200 noted andmis #19733 (express, 0/-7 churn) cleared in 2.4 minutes vs andmis #19605 (deliberation, +6/-222 churn) at 2h+ — explicitly using churn as the discriminator on the express vs deliberation choice.

This synth #204 observation is **finer-grained**: within a single same-author / same-subsystem deliberation-lane cohort (all three bolinfest permissions PRs are in the >2h regime), **the within-lane ordering is monotonic in total churn**. Specifically:

- Δ-churn #19734 → #19735 = +161 lines (296 → 457, +54.4%)
- Δ-lifespan #19734 → #19735 = +28m34s (2h51m07s → 3h19m41s, +16.7%)
- Δ-churn #19735 → #19736 = +32 lines (457 → 489, +7.0%)
- Δ-lifespan #19735 → #19736 = +49m31s (3h19m41s → 4h09m10s, +24.8%)

The **lifespan-Δ per churn-Δ ratio is non-linear**:
- 1st step: 28m34s Δ-lifespan / 161 Δ-churn = **10.65 seconds per added churn-line**.
- 2nd step: 49m31s Δ-lifespan / 32 Δ-churn = **92.84 seconds per added churn-line** (**8.7× steeper** per-line).

This means: within a same-author cohort, the **last** PR to clear absorbs disproportionately more reviewer time per line of additional churn — consistent with **chain-coupling concern**. #19736 is the base of #19737 (per synth #202's baseRefName audit), so reviewer was effectively reading #19736 + #19737 jointly before merging #19736. The chain-coupling penalty manifests as **8.7× per-churn-line lifespan inflation** in the final merge of the foundation siblings.

## File-count is NOT the right axis

If file-count were a primary lifespan predictor, the ordering would be:
- #19736 (7 files) → fastest
- #19734 (16 files) → middle
- #19735 (32 files) → slowest

But the **observed ordering is the exact reverse for #19736 vs #19735**: the smallest-file-count PR cleared LAST, despite being the smallest by file-count. The correct predictor is **total churn (additions + deletions)**, where #19736's 489-line churn just barely exceeds #19735's 457 — and lifespan tracks that ordering exactly.

This **falsifies any framing** that uses files-touched as a proxy for review burden in this corpus. **Total churn (line-count delta) is the correct unit of reviewer attention**, at least for codex-style same-author / same-subsystem cohorts.

## Cross-repo confirmation

Compare to `sst/opencode` rekram1-node same-author self-doublet from Add.79:
- #24573 (`fix:` prefix): +4/−0 = 4 churn, 1 file → merged 04:42:24Z (lifespan ~ short)
- #24574 (`ignore:` prefix): +22/−1 = 23 churn, 1 file → merged 04:57:33Z (lifespan ~ short, **15m09s after #24573**)

Both are 1-file PRs. Lifespan ordering is monotonic in total churn (4 → 23, fast → slow), **with file-count tied** (both 1). This **isolates the file-count variable**: when file-count is held constant, churn alone predicts lifespan ordering, consistent with the codex observation.

Compare to `QwenLM/qwen-code` B-A-M-N same-author fix-then-refactor sequence:
- #3629 (`fix:` prefix): +377/−5 = 382 churn → merged 2026-04-26T21:59:06Z
- #3653 (`refactor:` prefix): +197/−32 = 229 churn → merged 2026-04-27T00:44:19Z (**2h44m57s after #3629**)

Here churn DECREASED from #3629 to #3653 (382 → 229, **−40.1%**). And the second-merged is the **smaller-churn** PR — but the second-merged is not the slower-merged in the bolinfest sense; it is **opened LATER** as a follow-up. The fix-then-refactor sequence has a **causal ordering** (fix lands, refactor follows) that is not the same as the bolinfest cohort's **simultaneous-open / sequential-merge** ordering. So the cross-repo confirmation is **scoped**: monotonicity in total churn predicts within-cohort merge ordering when the PRs were opened simultaneously (or near-simultaneously) by the same author on overlapping subsystems. It does NOT predict ordering across causal-sequence pairs (fix → refactor).

## Refined predictions and falsifiability

1. **For any future same-author / same-subsystem N-PR cohort opened within ≤60 seconds of each other** (bolinfest-cohort-shape), the merge ordering will be **monotonic in total churn (additions + deletions)** with probability ≥ 0.7 (vs random 1/N!). Falsifiable by direct observation: collect the next 5 such cohorts and measure Spearman ρ(total-churn, mergedAt) — predict ρ ≥ +0.6.
2. **The lifespan-per-churn-line cost increases super-linearly with cohort position.** The last-merged PR in a 3+-PR cohort will have ≥ 5× the per-churn-line review time of the first-merged. Falsifiable by computing `(Δ-lifespan)/(Δ-churn)` ratios across N-1 inter-merge transitions in next 3 cohorts.
3. **Files-touched is not a useful lifespan predictor in this regime.** A regression of lifespan on (churn, files) within a same-author cohort will show files coefficient indistinguishable from zero once churn is controlled. Falsifiable by the same dataset.

## What this is NOT claiming

This synth does NOT claim total churn predicts lifespan **across** cohorts (across-author, across-subsystem comparisons). Synth #200's express-lane / deliberation-lane bimodality applies there, where prefix and content-class dominate. This synth's claim is **strictly within-cohort**, and only for cohorts that satisfy:
- Same author
- Opened within ≤60 seconds (synth #195/#196/#197/#202 cohort topology)
- Overlapping or shared subsystem
- ≥3 merged-out PRs to measure ordering

In such cohorts, **total churn is the dominant within-cohort ordering predictor**, refining synth #200's broader bimodality claim.

## Cross-references and continuity

- **Synth #200** (express vs deliberation bimodality) — REFINED, not falsified. The bimodality holds across cohorts; this synth identifies the within-cohort ordering predictor.
- **Synth #202** (branch-name vs baseRefName audit) — CONFIRMED in the ordering of clearance: the 3 flat-on-main siblings cleared, the 1 chain link stays open.
- **Synth #199** (title-prefix discipline velocity) — ORTHOGONAL: prefix is a between-cohort discriminator, churn is a within-cohort discriminator.
- **Synth #197** (foundation-siblings clear while chained-stack stays open) — REFINED with monotonic-by-churn ordering inside the foundation-siblings.

## Citations

- `openai/codex`: **#19734** (`0d8cdc05…0d52`, 296 churn / 16 files / 2h51m07s), **#19735** (`0ccd659b…c668`, 457 churn / 32 files / 3h19m41s), **#19736** (`523e4aa8…b2a8`, 489 churn / 7 files / 4h09m10s), **#19737** (OPEN, chain link on `pr19736`).
- `sst/opencode`: **#24573** (`025a6392…b495`, 4 churn / 1 file), **#24574** (`f19d8636…5582`, 23 churn / 1 file).
- `QwenLM/qwen-code`: **#3629** (`70127b5c…9554`, 382 churn), **#3653** (`ccb9857a…66dd`, 229 churn).
- Prior-tick `oss-digest` artifacts: ADDENDUM-78, ADDENDUM-79, synth #200, synth #202.

---

**Synth #204 ledger.** 8 distinct PR numbers cited across 3 repos. Refines (does NOT falsify) synth #200's deliberation-lane bimodality with a within-cohort ordering predictor: **total churn (a+d), not file-count, predicts within-cohort merge ordering**. Confirms synth #202's baseRefName-audit framing on the bolinfest cohort.
