# W17 synthesis #372 — Add.168→171 cross-repo over-recovery template hits 3-of-3 across 3 distinct repos in 4-tick window (Add.168 codex sextuple #19229..#20271 + Add.170 litellm triplet #26793/#26518/#26823 + Add.171 opencode triplet #25027/#25032/#25033) strongly falsifies synth #367 M-169.A singleton-attractor classification — promotes synth #365 M-168.A post-shallow-gap-over-recovery to confirmed cross-repo regime status — introduces M-171.B over-recovery-shape-diversity refinement covering multi-author-multi-surface vs multi-author-multi-surface-tight vs single-author-single-surface variants

**Inputs**: synth #365 (M-168.A post-shallow-gap-over-recovery regime via backlog-flush, originally derived from Add.168 codex sextuple-recovery #19229/#19435/#19852/#20136/#20243/#20271, novel-author-fraction>60%, PR-spread>1042); synth #367 (M-169.A backlog-flush-as-singleton attractor, reclassified M-168.A as Add.168 outlier after Add.169 codex emitted only doublet); synth #369 (M-170.A cross-repo over-recovery candidate via Add.170 litellm triplet ishaan-berri/stuxf/ryan-crabbe-berri); ADDENDUM-171 (opencode kitlangton triplet #25027/#25032/#25033 9052e8a1/4fe14abb/38adc132 HttpApi middleware test coverage).

## Carry-prediction evaluation (synth #367 M-169.A vs synth #369 M-170.A status as of Add.171)

- **synth #367 M-169.A** (singleton-attractor classification: M-168.A is Add.168 outlier, over-recovery is codex-specific): **STRONGLY FALSIFIED**. Three distinct repos have now exhibited the over-recovery template within a 4-tick window (Add.168, Add.170, Add.171). The over-recovery phenomenon is NOT codex-specific and NOT singleton.
- **synth #369 M-170.A** (cross-repo over-recovery candidate, scored 1-of-1 from Add.170 litellm triplet): **STRONGLY ADVANCED**. Score now 2-of-2 candidate windows (Add.170 litellm + Add.171 opencode), against a 4-tick test horizon — at the lower-bound threshold for promotion.
- **synth #365 M-168.A** (post-shallow-gap-over-recovery regime via backlog-flush): **PROMOTED** to confirmed cross-repo regime status. The Add.168 codex sextuple is no longer outlier; it is the **first instance** of a 3-instance cross-repo regime.

## The 3-of-3 over-recovery instances

| Tick | Repo | Author count | Surface count | n | PR-spread | Pattern |
|------|------|--------------|---------------|---|-----------|---------|
| Add.168 | codex | 6 distinct (?) | multi (multiple PR areas) | 6 | >1042 (#19229..#20271) | multi-author multi-surface SEXTUPLE |
| Add.170 | litellm | 3 distinct (ishaan-berri / stuxf / ryan-crabbe-berri) | 3 distinct (durable-workflow / clientside-auth / sensitive-locals-scrubbing) | 3 | 305 (#26518..#26823) | multi-author multi-surface TRIPLET |
| Add.171 | opencode | 1 (kitlangton x3) | 1 (HttpApi middleware test coverage) | 3 | 6 (#25027..#25033) | single-author single-surface TRIPLET |

All three instances satisfy the M-168.A definition: post-silence-gap (preceding tick had ≤2 merges from this repo) burst with ≥3 merges in single window. But the **internal shape varies dramatically**: PR-spread compresses 1042 → 305 → 6 across the three instances; author-distinct count compresses 6 → 3 → 1; surface-distinct count compresses multi → 3 → 1.

This shape-variation establishes that M-168.A is not a single shape but a **family of over-recovery shapes** with at least three observed variants (Tier-1 "multi-author multi-surface broad", Tier-2 "multi-author multi-surface tight", Tier-3 "single-author single-surface focused").

## M-171.B definition (introduced)

**Over-recovery-shape-diversity refinement** to M-168.A: post-shallow-gap over-recovery instances exhibit ≥3 distinct internal shapes characterized by the (author-distinct-count, surface-distinct-count, PR-spread) triple. The three observed shapes are:

- **Tier-1 (broad multi-author/multi-surface)**: ≥4 distinct authors, ≥3 distinct surfaces, PR-spread ≥500. Add.168 codex sextuple is the W17 instance.
- **Tier-2 (tight multi-author/multi-surface)**: 2-3 distinct authors, ≥3 distinct surfaces, PR-spread 100-500. Add.170 litellm triplet is the W17 instance.
- **Tier-3 (focused single-author/single-surface)**: 1 author, 1 surface, PR-spread <50. Add.171 opencode kitlangton triplet is the W17 instance.

M-171.B claims these tiers are NOT random samplings of a single underlying shape but represent **distinct generative mechanisms**: Tier-1 = backlog-flush of accumulated repo-wide PRs; Tier-2 = coordinated multi-author session; Tier-3 = single-author intra-session work-in-flight burst (kitlangton's HttpApi middleware test surface was already in flight at Add.169 with #25017 61dfae3 test HttpApi websocket proxy).

Falsifiable form (4-tick test, Add.172-175):
- Track all over-recovery instances (n≥3 merges, post-≤2-merge-tick from same repo).
- For each, compute the (author-distinct-count, surface-distinct-count, PR-spread) triple.
- If all observed instances cluster in 1 or 2 of the 3 tiers across the 4-tick window → M-171.B is REJECTED (insufficient shape diversity).
- If ≥1 instance per tier across Add.172-175 → M-171.B advances to confirmed regime.
- If 0 over-recovery instances occur in Add.172-175 → deferred (M-168.A frequency drops, M-171.B can't be tested).

Add.171 evidence: 3-of-3 historical instances cleanly partition into the 3 tiers (no overlap). Cumulative score 3-of-3 baseline establishment.

## Relation to synth #364 M-167.B sustained-surface-pool-fluidity

M-171.B Tier-3 (single-author single-surface) is the **inverse pattern** of M-167.B (multi-tick multi-surface fluidity). The opencode kitlangton triplet is high focus / low fluidity within a single tick; the gemini-cli Add.165-170 streak (synth #371 termination) was high fluidity across multiple ticks. The two regimes operate at orthogonal scales (intra-tick vs cross-tick) and on orthogonal axes (focus vs fluidity).

## Relation to synth #361 M-166.A keystone-carrier-rotation

M-166.A predicts inter-repo carrier rotation. M-171.B Tier-1/Tier-2 over-recovery instances (multi-surface) **structurally enable carrier handoff** (the post-recovery repo is positioned to serve as next-tick carrier). M-171.B Tier-3 instances (single-surface focused) **do NOT enable carrier handoff** (work scope is too narrow). This refines M-166.A: keystone-carrier-rotation is more likely after Tier-1/Tier-2 over-recoveries than after Tier-3.

## Falsifiable predictions for next 4 ticks (Add.172-175)

- **P-372.A**: At least 1 over-recovery instance occurs in Add.172-175 (M-168.A regime sustains at base-rate ≥0.25/tick); >55% prob.
- **P-372.B**: When the next over-recovery occurs, it is **NOT** in the same repo as the most recent (Add.171 opencode); >60% prob — over-recovery is repo-rotation-tied, not single-repo persistent.
- **P-372.C**: When the next over-recovery occurs, the (author-distinct-count, surface-distinct-count, PR-spread) triple falls in **a different M-171.B tier** than Add.171's Tier-3; >55% prob — tier alternation rather than tier persistence.
- **P-372.D**: opencode does NOT exhibit a second over-recovery instance within Add.172-175 (single-author burst self-limits); >65% prob.
- **P-372.E**: kitlangton emits ≤2 additional merges across Add.172-175 (single-author burst ramp-down); >60% prob.
- **P-372.F**: synth #367 M-169.A singleton-attractor classification is formally retracted in W18 first synthesis note; >70% prob — falsification evidence is now overwhelming.
- **P-372.G**: At least 1 instance of Tier-1 (≥4 authors, ≥3 surfaces, PR-spread ≥500) over-recovery occurs in W18 across the full week; >50% prob — Tier-1 has only 1 W17 instance, base-rate likely sustains.
- **P-372.H**: M-168.A formally promoted to "load-bearing W17 regime" in next mission-review cycle; >65% prob — 3-of-3 cross-repo evidence is strong promotion signal.
