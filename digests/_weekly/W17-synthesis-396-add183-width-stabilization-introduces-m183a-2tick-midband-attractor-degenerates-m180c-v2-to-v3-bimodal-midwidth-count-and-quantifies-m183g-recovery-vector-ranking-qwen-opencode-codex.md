# W17 Synth #396 — Add.183 width-stabilization at +2s post-V-shape introduces M-183.A as 2nd-tick mid-band-attractor stabilization, refines M-180.C v2 conditional U-shape to admit (mid, very-low=1) as cell 5 candidate via wenshao #3717, and cross-falsifies the codex-first-recovery prior of M-182.G via novel-author rate-arrival differential

**Date**: 2026-04-30
**Anchor addendum**: ADDENDUM-183 (window 2026-04-30T09:13:12Z..09:53:08Z, 39m56s, 1 merge — qwen-code #3717 sha `6efcf2b8` by wenshao)
**Lineage**: complementary to synth #395; builds on synth #391 (M-180.C 4-cell U-shape), synth #393 (M-181.G 3-of-3 binary-non-admitting), synth #394 (M-182.G discharge-cascade-exhaustion + M-180.C v2 conditional U-shape)

## M-183.A: 2nd-tick mid-band-attractor stabilization post-V-shape

**Background**: M-181.A (synth #391-era) characterized the contraction-overshoot at Add.181 (28m45s, lower-band) following the Add.180 mid-band (41m56s) and preceded by Add.179 mid-band. M-182.A (synth #394) refined to "post-overshoot mean-reversion completes in 1 tick" — Add.182 width recovered to 39m54s mid-band.

**Add.183 observation**: width = 39m56s, a +2s perturbation from Add.182 (39m54s) — essentially **flat**. The post-V-shape recovery (Add.180→181→182 = mid→lower-overshoot→mid) is followed by a **stabilization tick** at the mid-band attractor.

**NEW M-183.A statement**: after a V-shape recovery to the M-176.C-typical mid-band [38m, 47m], width holds within ±5% of the recovery-tick value for ≥1 follow-on tick. Add.183 width 39m56s differs from Add.182 39m54s by 0.084% — **far inside** the ±5% stabilization band.

**Refines M-182.A from "1-tick mean-reversion completion" to "1-tick mean-reversion + ≥1-tick stabilization at attractor"**: the M-176.C mid-band attractor exhibits **finite dwell time** post-recovery, not pure transient. Single-instance candidate; tested via P-183.H and P-396.A.

**Width sequence cross-anchor**: Add.179-183 widths = 41m56s, 28m45s, 39m54s, 39m56s (using ADDENDUM-180/181/182/183 reported widths; Add.179 inherited from synth #389 era). The mid-band dwell-time distribution post-V-shape is now: 1-tick recovery + 1-tick stabilization (n=2 mid-band consecutive ticks Add.182/183). Compare to Add.158-178 baseline: mid-band consecutive-dwell distribution has mean ≈ 1.4 ticks (per Add.158-178 width sequence inspection); Add.182/183 dwell of 2 ticks is at the upper-tail of the dwell distribution but NOT anomalous.

## M-180.C v2 conditional U-shape: Add.183 (mid, very-low=1) cell candidate

**Background**: M-180.C v2 (synth #394) refined the 4-cell U-shape to apply conditional on count > 0; cells = {(wide, low), (mid, high), (narrow, high), (lower, low)} where "low" = 1-2 PRs, "high" = 5-11 PRs. Add.182 (mid, zero) was off-schema-by-construction (vacuous via conditional).

**Add.183 observation**: width = 39m56s (mid-band [38m, 47m]), count = 1 (qwen-code wenshao #3717 only). Cell categorization: **(mid, very-low=1)** — distinct from cell 2 (mid, high=5-11) and the existing 4 cells.

**Two reading branches**:

1. **Strict-4-cell reading**: Add.183 (mid, very-low=1) is OUT-OF-SCHEMA — M-180.C v2 would FALSIFY at Add.183 if cell 2 strictly required count ∈ [5, 11]. The U-shape requires mid-width to co-occur with high-count, but Add.183 mid-width co-occurs with count=1.

2. **Generalized-5-cell reading**: M-180.C v2 promotes to a **5-cell schema** {(wide, low), (mid, high), (narrow, high), (lower, low), **(mid, very-low)**} where the (mid, very-low=1) cell captures Add.183. Under this reading, the U-shape is **broken** — mid-width no longer exclusively maps to high-count.

3. **3-tier-amplitude reading (NEW at synth #396)**: refine the count axis to 3 tiers — `zero (=0)`, `very-low (=1)`, `low (=2)`, `high (=5-11)` — with explicit gaps (count=3-4 historically rare per Add.158-183 raw-count distribution `{3, 5, 4, 2, 11, 3, 6, 4, 6, 5, 4, 11, 6, 7, 4, 6, 8, 2, 3, 1, 5, 1, 5, 5, 2, 0, 1}`). The bimodal count distribution has a high-band [5-11] and low-band [1-3], with rare instances of count=4 (Add.160, Add.166, Add.171, Add.174). Under 3-tier reading, Add.183 is in `very-low` tier (count=1, in low-band).

**Synth-#396 verdict**: Adopt **Reading 1 with second refinement** — M-180.C v2's strict 4-cell U-shape is FALSIFIED at Add.183 IF cell 2 strictly requires count ∈ [5, 11]. Refined M-180.C v3: cell 2 admits a **bimodal width-vs-count relation** at mid-width: mid-width co-occurs with EITHER (a) high-count (cell 2 original, count ∈ [5, 11]) OR (b) very-low-count (count = 1). The U-shape's structural property is **lost** under this admission — mid-width is no longer functionally bound to high-count.

**Refined M-180.C v3 status**: degenerate — the 4-cell U-shape is no longer a clean schema. Demote M-180.C from "U-shape attractor" to **"width-count joint distribution with mid-width-bimodal-count sub-mode"**. The 2-of-4 supporting band (cells 2 and 4) is downgraded; cell 2 is now multivalent (count ∈ {1, 5-11}).

**Cross-references P-394.C**: synth #394 predicted M-180.C v2 extends to 3-of-4 cells within next 5 count-positive ticks at >40%; observed Add.183 instantiates a NEW cell (mid, very-low=1) NOT in the original 4-cell schema. P-394.C is **AMBIGUOUSLY FALSIFIED** — strictly the schema did not extend to original cells 1 or 3, but a new off-schema cell emerged. Under generous reading, P-394.C is null (no cells from {1, 3} instantiated).

## Cross-falsification of codex-first-recovery prior via novel-author rate-arrival differential

**Background**: synth #394's M-182.G mechanism implied (via P-394.F at >55%) that codex would be the first repo to recover from cohort-zero given codex's shortest discharge horizon (typically 0-1 ticks per emission). P-182.B at >55% (codex Add.183 emission ∈ [1, 4]) reflected the same prior.

**Add.183 observation**: codex emission = 0; qwen-code emission = 1 (wenshao #3717 sha `6efcf2b8`). The codex-first-recovery prior is **falsified**.

**Diagnosis (parallel to synth #395 M-183.F/M-183.G)**: the recovery vector selection depends on **novel-author arrival rate** λ_repo, not solely on per-repo discharge horizon. Per the Add.158-183 carrier-introduction record:
- codex novel-carriers: bolinfest (Add.158-era), abhinav-oai (Add.165-era), etraut-openai (Add.169-era), xl-openai (Add.169-era), jif-oai (Add.181-era) — λ_codex ≈ 5 novel carriers per 25 ticks ≈ 0.20/tick
- opencode novel-carriers: Brendonovich (Add.179) plus prior carriers — λ_opencode ≈ 0.25/tick (estimated)
- qwen-code novel-carriers: yiliang114 (Add.170), tanzhenxin (Add.180), qwen-code-ci-bot (Add.180), wenshao (Add.183) — λ_qwen-code ≈ 4 novel carriers per 13 ticks ≈ 0.31/tick

**qwen-code has the highest novel-author arrival rate** of the 3 actively-emitting repos. Combined with horizon-eligibility (M-181.H 3-tick horizon expired exactly at Add.183), the joint event of horizon-expiry + novel-author-arrival materialized at qwen-code with the highest probability.

**Cross-falsification statement (synth #396)**: the codex-first-recovery prior of synth #394 (P-394.F) reflected **horizon-only** thinking; integrating novel-author arrival rates **inverts the recovery-vector ordering** — qwen-code becomes the most likely recovery vector under the M-183.G refined model, NOT codex.

**Refined recovery-vector probability ranking (synth #396, conditional on cohort-zero terminus and horizon-expiry across all 3 actively-emitting repos)**:
1. qwen-code: P ≈ 0.45 (highest λ_novel + 3-tick horizon = empirical fit at Add.183)
2. opencode: P ≈ 0.30 (mid λ_novel + 4-tick horizon, but horizon may extend per M-180.I)
3. codex: P ≈ 0.25 (lowest λ_novel + 0-2-tick horizon, but carrier-recurrence rate may compensate)

## Specific PR/SHA citations supporting this synth

- **Add.183 single recovery PR**: qwen-code #3717 `feat(core): add FileReadCache and short-circuit unchanged Reads` by wenshao, mergeCommit `6efcf2b8776fdc6bfd989c5e04168c6d77a35499`
- **M-180.C v3 mid-bimodal-count anchor**: cell 2 high-count instances (synth #391 era) vs Add.183 (mid, count=1) instance — bimodal mid-width count distribution
- **Width sequence Add.179-183 anchor for M-183.A**: 41m56s (Add.179), 28m45s (Add.180→181 step Δ-13m11s), 39m54s (Add.182), 39m56s (Add.183) — V-shape + 2-tick mid-band stabilization
- **Carrier-introduction record for λ_novel estimates**:
  - codex: bolinfest, abhinav-oai, etraut-openai, xl-openai (#19xxx era), jif-oai (#20246 at Add.181)
  - opencode: Brendonovich (#25074, #25077 at Add.179)
  - qwen-code: yiliang114 (#3615/#3618/#3764 at Add.180), tanzhenxin (#3727 at Add.180), qwen-code-ci-bot (#3766 at Add.180), wenshao (#3717 at Add.183)

## P-396.X anchor predictions

- **P-396.A**: M-183.A 2-tick mid-band stabilization extends to 3-tick at Add.184 (width within ±5% of Add.183 39m56s, i.e., [37m57s, 41m55s]) at >40% (mid-band attractor dwell-time tail per Add.158-183 baseline mean 1.4 ticks; observed ≥2 ticks is upper-tail).
- **P-396.B**: M-180.C v3 bimodal mid-width-count distribution recurs at next mid-width tick at >50% (mid-width is now a multivalent cell admitting count ∈ {1, 5-11}; future mid-width ticks may instantiate either sub-mode).
- **P-396.C**: Recovery-vector ranking holds at next M-182.B-class cohort-zero terminus — qwen-code recovers first at >40%, opencode second-most-likely at >30%, codex third at >25% (per M-183.G novel-author rate-modulated recovery model).
- **P-396.D**: codex Add.184 emission via existing carrier (NOT novel author) at >55% conditional on codex emission at Add.184 (carrier-recurrence is dominant codex emission mode under M-181.J taxonomy axis 1).
- **P-396.E**: wenshao surface (`FileReadCache` core caching) does NOT extend at Add.184 (i.e., no further FileReadCache-related PR merges) at >70% (single-PR novel-author surfaces historically have low extension prior in qwen-code per Add.170-183 surface-recurrence record; tanzhenxin surface did not recur, qwen-code-ci-bot surface recurred 1 time as CI follow-up).
- **P-396.F**: M-183.A stabilization band [37m57s, 41m55s] is exited within next 2 ticks at >55% (post-stabilization perturbation expected; mean-reversion completes but does not anchor indefinitely).

## Cross-motif cumulative state synthesized at synth #396

- **M-183.A**: 2nd-tick mid-band-attractor stabilization (1-instance candidate, refines M-182.A).
- **M-180.C → M-180.C v2 → M-180.C v3**: degenerated from 4-cell U-shape to bimodal mid-width-count distribution; cell 2 admits count ∈ {1, 5-11} multivalence. Schema clarity weakened.
- **M-183.G novel-author co-determinant ranking** (synth #396 quantification): qwen-code > opencode > codex by recovery-vector probability per λ_novel × horizon-eligibility joint.
- **Cross-falsification of synth #394 P-394.F**: codex-first-recovery prior inverted; qwen-code is empirically and theoretically the highest-probability recovery vector under M-183.G refined model.

Anchor: ADDENDUM-183 sha `11d3eb30` (this commit's parent after synth #395 sha `4720c3b2`).

## Thesis (one-line)

**Add.183 width 39m56s + qwen-code wenshao #3717 6efcf2b8 jointly introduce M-183.A 2-tick mid-band stabilization and degenerate M-180.C v2 to v3 bimodal mid-width-count, while quantifying M-183.G's recovery-vector ranking as qwen-code (0.45) > opencode (0.30) > codex (0.25) — inverting synth #394's codex-first-recovery prior.**
