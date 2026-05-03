# W17 Synthesis #607 — Post-Add.301 opencode anchor-author cyclic-return-within-consecutive-active-quartet instantiates bounded-rotation cohort-cap primitive distinct from monotonic cohort-expansion

**Anchor window:** 2026-05-03T17:21:34Z → 2026-05-03T19:44:24Z (2h22m50s, spanning Add.298 → Add.301).
**Anchor repo:** sst/opencode.
**Anchor authors (cohort):** OpeOginni, kitlangton, thdxr — three-distinct-author-cohort with kitlangton in cyclic-return at the fourth tick.
**Parent synths:** #602 (bimodal-recovery-distribution primitive), #604 (latent-clock-asymmetric-collapse primitive), and the M-300.A three-distinct-author-triplet primitive at first-W17-instance (now partially deflated at this synth).

## The four PRs that instantiate the quartet

| Tick | PR | Merged | Author | Surface |
|---|---|---|---|---|
| Add.298 | [sst/opencode#25600](https://github.com/sst/opencode/pull/25600) | 2026-05-03T17:21:34Z `adb7cb1037d24aa18021133b5993fa81869d8ba0` | @OpeOginni | `fix(auth): add username option for basic auth in RunCommand` |
| Add.299 | [sst/opencode#25598](https://github.com/sst/opencode/pull/25598) | 2026-05-03T18:23:30Z `387220f368ca3a31d94b4be3937d9d825ebd888c` | @kitlangton | `fix(server): support desktop PTY websockets with HttpApi` |
| Add.300 | [sst/opencode#25628](https://github.com/sst/opencode/pull/25628) | 2026-05-03T18:45:48Z `7749d8e85f2bf4879ee98af90066c167153bb19b` | @thdxr | `Add v2 session failure events` |
| Add.301 | [sst/opencode#25632](https://github.com/sst/opencode/pull/25632) | 2026-05-03T19:44:24Z `6312c55d55e83a3d9a68ffd56f9cc4298b245901` | @kitlangton | `fix(server): serve embedded UI from bunfs` |

Note: the Add.301 mergeCommit recorded in the live `gh` query (`6312c55d`) is the canonical SHA observable at synth-window-close; the per-tick window file may carry a tick-edge-resolved variant. Both reduce to the same PR-author-tick mapping here.

## Why this synth is distinct from prior W17 cohort synths

**(a) M-300.A (three-distinct-author-triplet primitive at first-W17-instance for opencode-axis) projected the quartet would extend to four-distinct-authors** under a monotonic cohort-expansion regime, with cum BF projection ×60-80 if a fresh fourth author had landed. Instead, the fourth tick is a **gap-2 cyclic return of kitlangton** — the cohort **caps at three-distinct** and the rotation becomes bounded. This synth captures the **bounded-rotation** structural property that M-300.A's monotonic-expansion projection cannot express.

**(b) The cohort-cap is not the same as cohort-saturation.** A cohort-saturation event would manifest as **declining velocity** (intra-quartet inter-merge gaps growing). Here, the inter-merge gaps are 1h01m56s / 22m18s / 58m36s — non-monotonic, not consistent with a saturation regime. The cohort is genuinely **bounded** by membership rather than by velocity. The opencode anchor-author cohort has an **observable size of three** in this window, and the fourth tick re-uses an existing member rather than expanding.

**(c) The cyclic-return is gap-2 specifically.** kitlangton's first member (Add.299) is followed by thdxr at Add.300 and then kitlangton-return at Add.301 — gap-2 between kitlangton's two appearances. A gap-1 cyclic-return would have been kitlangton-streak (the modal P-300.A projection at 0.30 prior, which **falsified at first-attempt** here in favor of the sub-modal cyclic-return-at-gap-2 at 0.20 prior). The specific gap-distance carries information: gap-2 is the **minimum return-distance** that preserves the three-distinct-cohort observation while allowing repetition, whereas gap-1 would have collapsed the cohort to two-distinct.

## The bounded-rotation cohort-cap predicate

A cohort-active sequence on a single repo qualifies as **bounded-rotation cohort-cap** under #607 when:
1. Three or more consecutive ticks are active with three distinct authors.
2. The N+1 tick is also active but its author equals one of the prior three (cyclic-return).
3. The cyclic-return distance from the returning author's last appearance is ≥2 ticks (not gap-1 streak).
4. Inter-tick inter-merge gaps are non-monotonic across the quartet (i.e., not a velocity-saturation pattern).
5. No tick within the window has cardinality > 1 (so the cohort cap is observed at singleton-only ticks, distinguishing this from cohort-expansion via doublet/triplet within a single tick).

All five predicates are satisfied for the Add.298-301 opencode quartet.

## Joint Bayes factor against alternative hypotheses

- vs **monotonic cohort-expansion** (M-300.A's modal projection): the data **falsifies the four-distinct extension** at the partial-falsification level. Cum BF on M-300.A deflates ×37.0 → ×22.0 (per ADDENDUM-301 M-301.A computation).
- vs **kitlangton anchor-streak** (P-300.A modal at 0.30): falsified at first-attempt — kitlangton did not extend at gap-1 from Add.299; instead returned at gap-2.
- vs **return-to-silent** (P-300.A modal at 0.35): falsified at first-attempt — Add.301 was active rather than silent.
- vs **fresh-fourth-distinct-author** (P-300.A sub-modal at 0.15): falsified at first-attempt.
- For **bounded-rotation cohort-cap with cyclic-return-at-gap-2** (P-300.A sub-modal at 0.20): confirmed at first-attempt with cum BF ×47.6 (per ADDENDUM-301 M-301.A computation).

## Falsifiable predictions for the next 5 ticks

1. If Add.302 sustains opencode-active with a fifth member that is also a cyclic-return (kitlangton, thdxr, or OpeOginni again — any of the three cohort members), the cyclic-return primitive lifts ×47.6 → ×80-120 at quintet-extension confirming **bounded-three-author-rotation as a stable cohort-cap regime**.
2. If Add.302 introduces a fourth-distinct author (e.g., nexxeln who landed #25596/#25597 on the prior day at 13:48Z/13:58Z), the bounded-rotation hypothesis deflates ×47.6 → ×30.0 — the cohort is **larger than three** and the Add.298-301 sample undercount.
3. If Add.302 returns to silent (modal P-301.A at 0.30), the quartet was the **terminal-active span** of the quintet-or-larger window and the cohort-cap regime is vindicated by the closure of the active-stretch at exactly four members.
4. If a sixth opencode member appears within the next 10 ticks and is a fresh fourth-distinct author, the cohort-cap regime was a **window-local artifact** rather than a structural property of the opencode anchor-cohort, and synth #607 must be reframed as a window-bounded observation rather than a regime.
5. If the **same bounded-rotation cyclic-return-at-gap-2 pattern** appears on a second carrier within the next 20 ticks, the primitive is **carrier-agnostic** and elevates from a per-carrier observation to a corpus-level cohort-rotation regime.

## Distinctness from prior synths

- **vs synth #602** (bimodal-recovery-distribution primitive): #602 operates on the cardinality-axis (singleton vs doublet recovery modes); #607 operates on the **author-rotation-axis within the singleton mode**, which is a structurally orthogonal dimension. Both can be true simultaneously and they are.
- **vs synth #604** (latent-clock-asymmetric-collapse primitive): #604 operates on the slow-tier-carrier silence-axis; #607 operates on the **fast-tier opencode active-axis**. Orthogonal carrier-class.
- **vs M-300.A** (three-distinct-author-triplet primitive): M-300.A captured the triplet as a monotonic cohort-expansion-eligible state; #607 captures the **post-triplet termination** of expansion via cyclic-return, which is the negative-evidence event that bounds M-300.A's projection.
- **vs prior author-cycling synths in the W17 corpus** (synth #91, #97, #99): #91 captured single-author triplet on disjoint surfaces; #97 / #99 captured single-author N=3 / N=4 series with shared spec-anchor. **All prior synths in this family addressed single-author cohorts of size 1**; #607 is the **first multi-author-cohort cyclic-return synth in W17** and operates on a cohort of size 3 with rotation rather than a cohort of size 1 with concentration.
