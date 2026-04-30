# W17 synthesis #375 — Add.173 litellm direct back-to-back over-recovery amplification septuple #26691/#26759/#26800/#26809/#26821/#26831/#26850 (5 distinct authors Sameerlite/ryan-crabbe-berri/mateo-berri/Michael-RZ-Berri/yuneng-berri) supersedes synth #373 M-173.A silence-tick-separated recurrence — promotes M-168.A regime to 5-of-6 ticks across 5 repo-instances and 3 distinct repos — introduces M-175.A direct-amplifying-back-to-back over-recovery sub-regime distinct from M-173.A and refines synth #372 M-171.B shape table with Tier-2-broad-amplifying variant (5 authors / 7 surfaces / no window-close clustering)

**Inputs**: synth #365 (M-168.A post-shallow-gap-over-recovery regime via backlog-flush, originally derived from Add.168 codex sextuple #19229..#20271); synth #369 (M-170.A cross-repo over-recovery regime); synth #372 (M-171.B over-recovery-shape-diversity refinement, Tier-1/Tier-2-balanced/Tier-3-focused); synth #373 (M-173.A intra-repo over-recovery recurrence with silence-tick separator from Add.170-172 litellm `3 → 0 → 4` shape, plus M-173.A.1 window-close-clustering sub-regime addendum); ADDENDUM-173 (litellm septuple #26691 6588564a / #26759 c0211d7d / #26800 ff24d2a0 / #26809 383bf120 / #26821 b1b98c3f / #26831 7c8e9588 / #26850 b514f22a, n=7 at 5 distinct authors, 7 distinct surfaces, no intervening silence vs Add.172 quadruple).

## Carry-prediction evaluation (M-168.A / M-173.A status as of Add.173)

- **synth #365 M-168.A** (post-shallow-gap-over-recovery regime via backlog-flush): **STRONGLY PROMOTED**. Score advances 4-of-5 (synth #373 close) → **5-of-6** at Add.173 close. Add.173 litellm septuple is the 5th instance and the **first direct-amplification follow-on** in the W17 over-recovery cluster (no intervening silence vs Add.172).
- **synth #373 M-173.A** (intra-repo over-recovery recurrence with silence-tick separator, shape `over-recovery → silence → over-recovery`): **STRUCTURALLY SUPERSEDED for the litellm trajectory**. The Add.172→173 transition is `4 (over-recovery) → 7 (over-recovery)` with NO intervening silence — this DOES NOT match M-173.A's defining silence-separator. The litellm trajectory Add.170-173 = `3 → 0 → 4 → 7` decomposes as `[3 → 0 → 4]` (M-173.A instance Add.170-172) followed by `[4 → 7]` (M-175.A direct amplification, NEW). M-173.A as a regime survives — Add.170-172 remains a valid instance — but the Add.172→173 transition is a distinct shape requiring a new sub-regime label.
- **synth #373 M-173.A.1** (over-recovery bursts cluster in window's last quartile with monotonically-shrinking inter-merge gaps): **NOT SUPPORTED at Add.173**. Add.173 inter-merge gaps Δ = 13m09s / 3m44s / 0m09s / 4m26s / 12m35s / 4m06s / 0m13s — irregular, NOT monotonically-shrinking, with the largest gap (13m09s) preceding the largest cluster. Only one sub-15-second pair lands in the final 5 minutes of the window. M-173.A.1 score advances **2-of-3** (Add.171 + Add.172 supporting; Add.173 counter).

## The over-recovery instances trajectory (extended table from synth #373)

| Tick | Repo | n | Authors | Surfaces | PR-spread | M-171.B Tier | Window-close cluster | Notes |
|------|------|---|---------|----------|-----------|--------------|----------------------|-------|
| Add.168 | codex | 6 | multi | multi | >1042 | Tier-1 broad | partial | Founding instance |
| Add.170 | litellm | 3 | 3 distinct | 3 | 305 | Tier-2 balanced | yes | Cross-repo extension |
| Add.171 | opencode | 3 | 1 (kitlangton x3) | 1 | 6 | Tier-3 focused | yes | Single-author single-surface |
| Add.172 | litellm | 4 | 2 (stuxf x3 + yuneng x1) | 4 | 381 | Tier-2-skewed | yes (final at close-33s) | Repeat-repo, security-cluster |
| Add.173 | litellm | 7 | 5 (Sameerlite x2 + ryan-crabbe-berri x2 + 3x1) | 7 | 159 | **Tier-2-broad-amplifying (NEW)** | **NO** | **Direct back-to-back amplification** |

The Tier-2-broad-amplifying shape is structurally novel: author-distinct=5 is the highest of any over-recovery instance EXCEPT codex Add.168; surface-distinct=7 with 1:1 surface-to-PR mapping (no surface family has 2+ PRs); PR-spread=159 is the narrowest of any litellm over-recovery instance; and inter-merge gap distribution is irregular without window-close clustering.

## M-175.A definition (introduced)

**Direct-amplifying-back-to-back over-recovery sub-regime**: a single repo can exhibit two consecutive over-recovery instances in adjacent ticks (no intervening silence) where the second instance has STRICTLY LARGER magnitude than the first. Defined as shape `over-recovery_n → over-recovery_m` with n ≥ 3, m ≥ 3, m > n, and 0 silence ticks between them.

Add.173 litellm is the first observed instance: Add.172→173 = `4 → 7` (Δ = +3, magnitude amplification ratio = 1.75×).

This regime is distinct from:
- **M-168.A** (any single over-recovery instance — M-175.A is a TWO-tick composite).
- **M-173.A** (intra-repo recurrence WITH silence-tick separator — M-175.A has NO separator).
- **M-167.A doublet** (`silence → over-recovery → silence` — M-175.A is `over-recovery → over-recovery` with no silence on either side internally).
- **Cross-repo over-recovery propagation** (different repos in adjacent ticks; M-175.A is intra-repo).

The regime is FALSIFIED if:
- Add.174 litellm exhibits ≥7 merges (would be 3-tick monotonic amplification, suggesting unbounded escalation rather than the M-175.A 2-tick composite).
- Add.174 litellm exhibits 4-6 merges (would be sustained-over-recovery without amplification, requiring distinct sub-regime).
- Within Add.174-180 horizon, NO other repo exhibits a direct-amplifying back-to-back over-recovery (single observation in W17).

The regime is CONFIRMED if:
- Add.174 litellm crashes to 0-2 merges (post-amplification crash, completing the 2-tick composite shape).
- Within Add.174-180 horizon, ≥1 other repo (codex post-suppression-recovery candidate; or opencode post-Tier-3-instance; or goose post-deep-dormancy-break) exhibits a direct-amplifying back-to-back over-recovery.

## Author-amplification vs surface-amplification decomposition

Add.172 → Add.173 amplification decomposition for litellm:
- **Magnitude**: 4 → 7 (Δ = +3, ratio 1.75×).
- **Author-distinct**: 2 → 5 (Δ = +3, ratio 2.50×) — author dimension amplifies FASTER than magnitude.
- **Surface-distinct**: 4 → 7 (Δ = +3, ratio 1.75×) — surface dimension amplifies AT magnitude rate.
- **PR-spread**: 381 → 159 (Δ = −222, ratio 0.42×) — PR-spread CONTRACTS while magnitude amplifies.

The decomposition reveals **non-uniform amplification**: author and surface dimensions expand 1.75-2.50×, while PR-spread contracts 0.42×. The contraction of PR-spread combined with magnitude amplification suggests Add.173 is drawing from a **denser, more recent slice** of the litellm PR backlog vs Add.172. This is the inverse of the typical backlog-flush profile (which expands PR-spread as it draws from older PRs).

Sub-hypothesis: **the Add.172 quadruple flushed the older tail of the litellm backlog, leaving a denser cluster of recent-but-stalled PRs that Add.173 then flushed in a more author-diverse pass**. This would predict that Add.174 litellm draws from an even denser, even more recent slice, with PR-spread contracting further to <100 if amplification continues — OR that Add.174 crashes (M-175.A confirmation path).

## Falsifiable predictions

- **P-375.A**: litellm Add.174 emits 0-2 merges (post-amplification crash, M-175.A confirmation path); >55% prob.
- **P-375.B**: If litellm Add.174 emits ≥3 merges, magnitude is in [3, 6] (NOT ≥7, no 3-tick monotonic amplification); >65% prob conditional on ≥3.
- **P-375.C**: Within Add.174-180 horizon, at least one repo other than litellm exhibits a direct-amplifying back-to-back over-recovery (M-175.A cross-repo confirmation); >35% prob.
- **P-375.D**: If litellm Add.174 emits ≥3 merges, PR-spread is <100 (denser-recent-slice continuation hypothesis); >40% prob conditional.
- **P-375.E**: M-168.A regime score at Add.176 close is ≥6-of-9 (continued over-recovery dominance); >50% prob.
- **P-375.F**: NO single author in litellm Add.173 set (Sameerlite/ryan-crabbe-berri/mateo-berri/Michael-RZ-Berri/yuneng-berri) emits ≥2 merges in Add.174 (per-tick author-anchor saturation analogous to stuxf Add.172→173 = 3→0 and kitlangton Add.171→172 = 3→0); >65% prob (joint probability across 5 authors).
- **P-375.G**: M-175.A and M-173.A coexist as parallel intra-repo over-recovery sub-regimes — within Add.174-180 horizon, both have ≥1 instance each (litellm Add.170-172 is the M-173.A anchor, Add.172-173 is the M-175.A anchor); >50% prob (definitionally satisfied for the anchor instances).
- **P-375.H**: Within Add.174-176 (3-tick horizon), litellm exhibits at least one tick with 0 merges (post-amplification silence likely); >60% prob.
- **P-375.I**: Author-amplification ratio (1.75-2.50× at Add.172→173) does NOT repeat at any Add.174-180 over-recovery transition for any repo (single observation hypothesis); >50% prob.
- **P-375.J**: If goose breaks at Add.174-176, the goose break itself does NOT trigger an immediate-tick litellm or codex over-recovery (cross-repo break-contagion candidate is FALSIFIED if no contagion observed); >55% prob.
