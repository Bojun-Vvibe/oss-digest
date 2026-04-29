# W17 synthesis #365 — Add.168 codex sextuple-recovery-burst falsifies P-167.A magnitude-bound and introduces M-168.A: post-shallow-gap over-recovery regime

**Inputs**: ADDENDUM-168 (codex 6 merges across PRs #19229, #19435, #19852, #20136, #20243, #20271 in 39.98m window 22:47:10Z–23:27:09Z); ADDENDUM-167 (codex 2 merges #20231, #20242 post-Add.166 silence(n=1)); ADDENDUM-166 (codex silence n=1, depth ~52m).

## Carry-prediction evaluation

- **P-167.A** (codex Add.168 emits ≥1 merge sustaining 11-of-12 active rate, >70%): **CONFIRMED on direction** but the magnitude (6 merges) is well above the implicit "1-3 merge sustaining" expectation. Prediction's lower bound met; upper open. Confidence calibration: P-167.A correctly identified the resumption but did not anticipate the over-recovery shape — partial credit.
- **P-167.G** (Add.168 per-minute rate ≤0.12, >55%): **FALSIFIED** at 0.2752 (more than 2× the bound, joint-highest of Add.158-168).
- **P-167.H** (cross-repo count Add.168 ∈ [3,7], >70%): **FALSIFIED** at 11 (upper-tail breach).
- **P-167.E** (litellm silence does not extend to n≥3, >60%): **CONFIRMED** — litellm Add.168 doublet (#26225, #26813).

## Specific PRs supporting M-168.A

The codex Add.168 merge set (#19229 rasmusrygaard 22:48:27Z, #19435 iceweasel-oai 23:06:33Z, #19852 evawong-oai 23:14:14Z, #20136 rafael-jac 23:14:53Z, #20243 pakrym-oai 22:58:09Z, #20271 bolinfest 23:20:00Z) shares three structural properties:

1. **Long-tail PR ages**: the lowest PR number (#19229) is ~1042 below the highest (#20271). This is an old-backlog flush, not a same-day-opened-and-merged cluster (compare Add.162 codex 11-merge keystone, where PR-number spread was tighter).
2. **Author-handle composition**: 5 of 6 authors are first-time-in-Add.158-168 union members (rasmusrygaard, iceweasel-oai, evawong-oai, rafael-jac, pakrym-oai-confirm) — only bolinfest is a returning regular. This implies a **maintainer-batch-merge event** (one or more reviewers landing a queued backlog), not an organic author-arrival burst.
3. **Surface diversity within tick**: API-listing (#20243), sandbox-policy (#19852), Windows-runtime (#19435), graph-store (#19229), login-UX (#20136), CI-config (#20271) — 6 distinct surfaces in one tick. Compared to Add.162 keystone burst (which clustered around 1-2 surfaces), Add.168 is **wide-surface within high-cardinality**.

## M-168.A definition (introduced)

**Post-shallow-gap over-recovery regime**: when a repo with active rate ≥85% rolling W17 enters a single-tick silence (n=1), the recovery tick may exhibit *over-recovery* (merge count ≥3× the pre-silence per-tick mean) when the silence coincides with a maintainer-batch-merge event signaled by (a) PR-number spread > 800 within tick AND (b) novel-author-fraction > 60%.

**Falsifiable form**: Across the next 6 codex active ticks (Add.169-174), at most 1 silence-recovery tick may exhibit over-recovery (≥6 merges with PR-number spread >800 AND novel-author-fraction >60%). If ≥2 such bursts occur, M-168.A becomes a steady-state attractor rather than a one-off; if 0 occur, M-168.A is an Add.168 outlier and synth #363 M-167.A shallow-gap-fast-recovery regains primacy in the unmodified form (recovery ≈ 1-2 merges).

## Relation to prior synths

- **Extends synth #363 (M-167.A shallow-gap-fast-recovery)**: M-167.A predicted single-tick recovery with doublet (n=2) shape. Add.168 codex showed n=6 recovery — a *magnitude-shape* deviation from M-167.A, not a falsification of the *timing* claim. M-168.A nests inside M-167.A as the magnitude-tail sub-regime conditioned on backlog-flush signals.
- **Contrasts synth #361 (M-166.A keystone-carrier-rotation)**: M-166.A described keystone identity rotating across ticks. Add.168 sees codex re-asserting keystone status (6 merges = single-repo keystone) within 2 ticks of losing it — rotation may be *short-period* (1-2 ticks), not sustained substitution.
- **Reinforces synth #355 (sub-author n=2 invariant cross-class)**: litellm Add.168 doublet (yuneng-berri + ishaan-berri sub-2-minute interval not measured here, but two distinct authors within tick) extends synth #355's cross-class generalization to a 4th W17 instance.

## Hypothesis for Add.169

If M-168.A is a one-off (the more common prior under base rates), Add.169 codex reverts to ≤2 merges. If M-168.A is an attractor, Add.169 OR Add.170 will see another novel-author backlog-flush event at codex OR a different repo (gemini-cli is the next candidate given its 4-tick carrier streak — backlog-flush risk if maintainer batches PRs).
