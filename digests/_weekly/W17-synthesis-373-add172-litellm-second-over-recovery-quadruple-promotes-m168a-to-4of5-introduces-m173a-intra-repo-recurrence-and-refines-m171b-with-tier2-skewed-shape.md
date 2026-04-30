# W17 synthesis #373 — Add.172 litellm second over-recovery quadruple #26463/#26484/#26489/#26844 (stuxf x3 + yuneng-berri x1) within 3 ticks of Add.170 litellm triplet establishes intra-repo back-to-back over-recovery shape (post-over-recovery silence-then-second-over-recovery) — promotes M-168.A regime to 4-of-5 ticks across 4 repo-instances (codex Add.168 / litellm Add.170 / opencode Add.171 / litellm-again Add.172) — introduces M-173.A intra-repo over-recovery recurrence sub-regime and refines synth #372 M-171.B shape table with Tier-2-skewed (single-dominant-author multi-author) variant

**Inputs**: synth #365 (M-168.A post-shallow-gap-over-recovery regime via backlog-flush, originally derived from Add.168 codex sextuple #19229..#20271); synth #367 (M-169.A backlog-flush-as-singleton-attractor, FALSIFIED by synth #372); synth #369 (M-170.A cross-repo over-recovery candidate from Add.170 litellm triplet #26793/#26518/#26823 ishaan-berri/stuxf/ryan-crabbe-berri); synth #372 (M-171.B over-recovery-shape-diversity refinement with Tier-1/Tier-2/Tier-3 variants from Add.168 codex sextuple, Add.170 litellm triplet, Add.171 opencode kitlangton triplet); ADDENDUM-172 (litellm quadruple #26463 2e561bd0 + #26484 c6c546ba + #26489 00d71f58 + #26844 1557b1f4).

## Carry-prediction evaluation (M-168.A status as of Add.172)

- **synth #365 M-168.A** (post-shallow-gap-over-recovery regime via backlog-flush): **STRONGLY PROMOTED**. Score advances 3-of-4 (synth #372 close) → **4-of-5** at Add.172 close. Add.172 litellm quadruple is the 4th instance and the **first repeat-repo instance** in the W17 over-recovery cluster.
- **synth #369 M-170.A** (cross-repo over-recovery candidate): **CONFIRMED CROSS-REPO REGIME**. With litellm Add.172 as the 4th instance, the regime spans 3 distinct repos (codex/litellm/opencode) and 4 distinct repo-tick combinations within a 5-tick window.
- **synth #372 M-171.B** (over-recovery-shape-diversity refinement, Tier-1/Tier-2/Tier-3): **REFINED**. The Add.172 litellm quadruple introduces a 4th observed shape — Tier-2-skewed (single-dominant-author 3-of-4 + supporting-author 1-of-4, multi-surface security-clustered, PR-spread 381). This sits between Tier-2 "balanced multi-author multi-surface tight" (Add.170 litellm triplet, 3 distinct authors) and Tier-3 "focused single-author single-surface" (Add.171 opencode, 1 author).

## The 4-of-5 over-recovery instances (extended table)

| Tick | Repo | n | Authors | Surfaces | PR-spread | M-171.B Tier | Notes |
|------|------|---|---------|----------|-----------|--------------|-------|
| Add.168 | codex | 6 | multi | multi | >1042 | Tier-1 broad | Founding instance |
| Add.170 | litellm | 3 | 3 distinct (ishaan/stuxf/ryan) | 3 | 305 | Tier-2 balanced | Cross-repo extension |
| Add.171 | opencode | 3 | 1 (kitlangton x3) | 1 (HttpApi middleware tests) | 6 | Tier-3 focused | Single-author single-surface |
| Add.172 | litellm | 4 | 2 (stuxf x3 + yuneng x1) | 4 (vertex-batches test / vector-stores creds / auth alias / mcp routing) | 381 | **Tier-2-skewed (NEW)** | Repeat-repo, security-cluster |

The Tier-2-skewed shape has author-distinct=2 with author-skew (3:1), placing it strictly between Tier-2 balanced (author-distinct ≥3, no skew) and Tier-3 focused (author-distinct=1).

## M-173.A definition (introduced)

**Intra-repo over-recovery recurrence sub-regime**: a single repo can exhibit a second M-168.A over-recovery instance within ≤3 ticks of the first, separated by exactly 1 silence tick (shape `over-recovery → silence → over-recovery`). Add.172 litellm is the first observed instance: shape Add.169-172 = `3 → 0 → 4`, where the Add.169 value of 3 is the original Add.169-170 trajectory anchor (litellm was active in Add.169 but the dominant signal was the Add.170 triplet). More precisely, focusing on the over-recovery anchor: litellm Add.170-172 = `3 (over-recovery) → 0 (silence) → 4 (over-recovery)`.

This shape is distinct from M-167.A doublet (`silence → over-recovery → silence`) and from a pure burst extension (`over-recovery → over-recovery` without intervening silence). It is also distinct from cross-repo over-recovery propagation (different repos in consecutive ticks).

## Window-close clustering pattern (cross-instance observation)

The Add.172 litellm quadruple inter-merge gaps are 20m04s / 1m37s / 0m51s — **monotonically shrinking and accelerating into the window close** (final merge at 02:31:00Z, 33 seconds before the Add.172 close at 02:31:33Z). Same pattern observed in:
- Add.171 opencode kitlangton triplet: gaps 16m41s / 10m07s, final merge AT the close.
- Add.170 litellm triplet (per synth #369): clustered late in window.

Across all 3 most recent Tier-2/Tier-3 over-recovery instances, the **final merge of the burst lands within the last 60 seconds of the window** in 2-of-3 cases (Add.171 opencode #25033 at 01:34:52Z = window-close; Add.172 litellm #26463 at 02:31:00Z = window-close minus 33s). This suggests over-recovery bursts are not random within the window but **right-skewed toward window-close**, possibly due to merge-queue / CI-completion timing.

This is a candidate **M-173.A.1 sub-regime addendum**: over-recovery bursts exhibit window-close clustering with monotonically-shrinking inter-merge gaps in the final tail.

## Falsifiable predictions

- **P-373.A**: Within Add.173-176 (4-tick horizon), at least one additional intra-repo over-recovery recurrence shape (`over-recovery → silence → over-recovery` within 3 ticks for a single repo) is observed in a repo other than litellm; >40% prob.
- **P-373.B**: litellm Add.173 emits 0-1 merges (post-over-recovery re-silence template within litellm: 2-of-2 within Add.169-171 prior; Add.172 just completed second over-recovery, so re-silence highly likely); >65% prob.
- **P-373.C**: In Add.173-176, NO repo exhibits a third over-recovery instance within the 5-tick window (litellm at 2 instances should saturate; codex at 1 instance Add.168 should not re-emit before Add.173 given current sub-floor sustained); >55% prob.
- **P-373.D**: M-168.A regime advances to ≥5-of-7 ticks by Add.174 close — at least one new over-recovery instance occurs in Add.173-174; >50% prob.
- **P-373.E**: stuxf does NOT anchor (≥3 merges) in any repo at Add.173-174 (single-tick author-anchor saturation, parallels kitlangton Add.171→172 transition 3→0); >65% prob.
- **P-373.F**: M-173.A intra-repo recurrence sub-regime score after Add.173-176 horizon: ≥1 additional instance observed (counting any repo) — score 1-of-1 at intro becomes 2-of-N at horizon; >35% prob.
- **P-373.G**: Window-close clustering — at the next M-168.A over-recovery instance (whenever it occurs), the final merge of the burst lands within the last 120 seconds of the capture window; >55% prob.
- **P-373.H**: Tier-2-skewed shape (single-dominant-author 3:1 multi-surface) recurs at least once in Add.173-180 (8-tick horizon); >40% prob.
