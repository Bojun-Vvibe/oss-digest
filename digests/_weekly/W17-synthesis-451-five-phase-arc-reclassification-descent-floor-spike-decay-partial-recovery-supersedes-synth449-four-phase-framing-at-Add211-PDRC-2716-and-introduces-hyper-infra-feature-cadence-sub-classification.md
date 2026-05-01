# W17 Synthesis #451 — Five-phase arc reclassification (descent → floor → spike → decay → partial-recovery) supersedes synth #449 four-phase descent-floor-spike-decay framing at Add.211 with PDRC=2.716 post-decay rebound coefficient, and introduces sub-2m hyper-cadence sub-classification at the same-author intra-repo cadence axis based on etraut-openai 40s pair vs yuneng-berri 13m06s infra-cadence pair vs synth #421 5-15m feature-cadence reference

## Pattern statement

Synth #447 introduced the rate-chain recovery-amplitude (RCRA) observable at Add.209 with the 4-phase **descent → floor → recovery** framing. Synth #449 falsified the recovery-sustain implication at Add.210 with the post-rebound decay coefficient PRDC=0.209 and reclassified the arc as **descent → floor → spike → decay** (4-phase, asymmetric). Add.211's M-211.A observation extends the trajectory by one more tick: rate climbs from 0.0324 (Add.210 decay floor) to 0.0880 (Add.211 partial-recovery), defining the **post-decay rebound coefficient PDRC := r_post-decay / r_decay = 2.716**. The Add.204-211 arc is therefore **NO LONGER a 4-phase descent-floor-spike-decay arc** — it is a **5-phase descent → floor → spike → decay → partial-recovery arc** with strictly distinct rate values across all 5 phases.

## Definition: PDRC and the 5-phase arc structure

For an Add-N → Add-(N+1) → ... → Add-(N+k) rate trajectory traversing 5 distinct rate levels, define:

- **r_descent_head** = leading rate (chain head)
- **r_floor** = global minimum rate within the arc (typically 0.0000 at a null window)
- **r_spike** = single-tick rebound rate immediately following the floor
- **r_decay** = post-spike attenuated rate
- **r_partial_recovery** = post-decay rebound rate (the new 5th phase)

For the Add.204-211 arc:

| phase | tick | rate | cardinality | role |
|-------|------|------|-------------|------|
| descent (head) | Add.204 | 0.1747 | 3 | r_descent_head |
| descent (tail) | Add.205 | 0.1029 | 3 | descent continuation |
| descent (tail) | Add.206 | 0.0679 | 2 | descent continuation |
| descent (tail) | Add.207 | 0.0490 | 2 | terminal descent before floor |
| floor | Add.208 | 0.0000 | 0 | r_floor (universal silence MODE-X) |
| spike | Add.209 | 0.1552 | 3 | r_spike (RCRA=0.888) |
| decay | Add.210 | 0.0324 | 1 | r_decay (PRDC=0.209) |
| **partial-recovery** | **Add.211** | **0.0880** | **2** | **r_partial_recovery (PDRC=2.716)** |

The five rate values 0.1747 / 0.0000 / 0.1552 / 0.0324 / 0.0880 are **strictly distinct** with no equality between any pair, and the trajectory crosses **6 distinct cells** in the (rate, cardinality) plane (Add.204 and Add.205 share cardinality 3; Add.206 and Add.207 share cardinality 2; all other ticks occupy unique cells). The 5-phase arc is therefore the **W17 reference exemplar** for non-monotonic rate trajectories that contain both a recovery edge (synth #447) AND a post-recovery decay (synth #449) AND a post-decay rebound (this synth).

## Composite recovery measures across the full 5-phase arc

Define the **end-to-head ratio** EHR := r_partial_recovery / r_descent_head. For the Add.204-211 arc, EHR = 0.0880 / 0.1747 = **0.504** — the partial-recovery sits at **50.4% of the chain head**. This contrasts with:

- RCRA (Add.209) = 0.888 (spike-vs-head amplitude)
- PRDC (Add.210) = 0.209 (decay-vs-spike retention)
- PDRC (Add.211) = 2.716 (partial-recovery-vs-decay amplitude)
- EHR (Add.211) = 0.504 (full-arc-end-vs-head amplitude)

The four ratios are **multiplicatively consistent**: RCRA × PRDC × PDRC = 0.888 × 0.209 × 2.716 = **0.504** = EHR. This identity provides a **W17 algebraic invariant** linking the 4 phase-transition coefficients to the end-to-head amplitude, and offers a falsifiability check on future Add-N rate-trajectory observations: any future arc must satisfy the same multiplicative identity.

## Sub-classification: same-author intra-repo cadence sub-categories

M-211.B observed an etraut-openai 40s same-author intra-repo cadence pair at codex (PR #20558 sha d898cc8 → PR #19631 sha a93c89f, both TUI-surface). Compared to:

- **synth #421 reference** (general same-author intra-repo cadence): typical 5-15m gaps on feature surfaces — **feature-cadence**
- **Add.210 yuneng-berri / yuneng-jiang infra cadence pair**: 13m06s gap on [Infra]-prefixed surfaces — **infra-cadence** (PR #26961 sha 9397409 → PR #26962 sha 934ecdc)
- **Add.211 etraut-openai pair**: 40s gap on TUI feature surface — **hyper-cadence**

This 3-tier sub-classification refines synth #421's monolithic same-author-cadence framing. Sub-2m gaps are **at least one order of magnitude tighter** than the synth #421 typical band and indicate **batch-merge dynamics** (multiple PRs queued and merged in a single CI/review burst) distinct from the **interactive author-driven dynamics** of feature-cadence or the **scheduled infrastructure-pulse dynamics** of infra-cadence.

| sub-category | typical gap | surface character | exemplar | tick |
|--------------|-------------|-------------------|----------|------|
| **hyper-cadence** | sub-2m | feature/UI batch-merge | etraut-openai @ codex (40s) | Add.211 |
| **infra-cadence** | 10-30m | infra/version-bump scheduled | yuneng-berri @ litellm (13m06s) | Add.210 |
| **feature-cadence** | 5-15m | feature interactive | synth #421 reference distribution | Add.193+ |

The sub-classification is **falsifiable**: if a future yuneng-berri pair is observed at sub-2m gaps, the infra-cadence framing weakens and the gap-vs-surface correspondence falls apart. Conversely, replication of the etraut-openai pattern (sub-2m gaps on TUI/feature surfaces) at additional ticks would strengthen the hyper-cadence sub-category as a stable W17 sub-observable.

## Cross-repo hyper-cadence: a new observable

M-211.E observed a **cross-repo 55s gap** between the Add.211 trailing pair: xli-oai @ codex PR #20265 (sha a62b52f) at 06:11:15Z → Sameerlite @ litellm PR #26964 (sha 02cb8b0) at 06:12:10Z. This 55s gap **also qualifies as sub-2m hyper-cadence** but with the qualitative difference that the two merges are by **different authors at different repos** with no plausible interactive coordination. Synth #421 has historically catalogued only same-author or same-repo cadences; cross-repo hyper-cadences require a different generative model.

**HYPOTHESIS H-451.A** (shared dispatcher-pulse): cross-repo hyper-cadences indicate the two repos share an **upstream merge-dispatcher** or **CI-pulse signal** that releases queued merges in synchronised batches. Under H-451.A, the inter-merge gap distribution of cross-repo hyper-cadences would be statistically clustered around specific dispatcher-pulse intervals (e.g. 1m, 5m, 15m) rather than uniformly distributed.

**HYPOTHESIS H-451.B** (coincidental):  the 55s gap is a chance coincidence drawn from independent author-driven Poisson processes at the two repos. Under H-451.B, cross-repo hyper-cadences would occur at frequency proportional to (rate_repo1 × rate_repo2 × hyper-cadence-window), and would not exhibit clustering at specific intervals.

The two hypotheses are **distinguishable** by accumulating cross-repo gap measurements across future ticks; current Add.211 observation is a single datapoint and cannot distinguish them. **PROPOSES** tracking all cross-repo merge gaps ≤ 5m at future ticks to populate the discriminating distribution.

## Falsifications and confirmations

- **CONFIRMS synth #447 RCRA framework** as the spike-phase coefficient within the 5-phase arc; RCRA remains the canonical spike-vs-head amplitude observable.
- **CONFIRMS synth #449 PRDC framework** as the decay-phase coefficient within the 5-phase arc; PRDC remains the canonical decay-vs-spike retention observable.
- **EXTENDS synth #449's 4-phase descent-floor-spike-decay framing** to a 5-phase descent-floor-spike-decay-partial-recovery framing; the 4-phase classification was a **truncation artifact** observable only because Add.211 had not yet been recorded at synth #449 publication time.
- **CONFIRMS the multiplicative identity RCRA × PRDC × PDRC = EHR** as a W17 algebraic invariant for 5-phase arcs; provides a falsifiability check for future arcs.
- **REFINES synth #421 same-author intra-repo cadence framing** by introducing the 3-tier hyper/infra/feature sub-classification keyed on inter-merge gap and surface character.
- **PROPOSES cross-repo hyper-cadences as a new observable** independent of the same-author cadence distribution; H-451.A vs H-451.B remain unresolved at single-datapoint resolution.
- **DOES NOT contradict synth #444 EMR**: the Add.211 EMR=0.500 sits at the axis midpoint and is consistent with the EMR mean-reverting-oscillation hypothesis surfacing across Add.207-211.
- **INDEPENDENT of synth #450 ACTRF** at the rate axis but **CORRELATES at the author-axis**: the 5-phase arc's partial-recovery phase carries an R-cross author (Sameerlite, see synth #452) plus an F-internal author (xli-oai), refining the synth #450 phase-author correspondence hypothesis.

## Predictions

- **P-451.A**: at Add.212, the 5-phase arc Add.204-211 will either **terminate** (rate moves to a new regime not classifiable as continuation of the partial-recovery) or **extend to a 6-phase arc** with a new phase label (e.g. **secondary-decay** if rate drops back below Add.211 0.0880, or **full-recovery** if rate returns to ≥ Add.204 0.1747 chain-head). Termination probability ~0.55; 6-phase extension ~0.45.
- **P-451.B**: the **multiplicative identity RCRA × PRDC × PDRC = EHR** will replicate exactly in the next observed 5-phase arc (the identity is algebraic, not empirical, so any deviation indicates a measurement error rather than a falsification of the framework).
- **P-451.C**: the **hyper-cadence sub-classification** will be observed again within the next 30 addendum ticks with probability ~0.60; if observed, the sub-2m gap will most likely occur on **feature/UI** surfaces rather than infra surfaces (contrasting yuneng-berri-class infra cadence which has historically clustered at 10-30m gaps).
- **P-451.D**: cross-repo hyper-cadences (sub-2m gaps between merges at distinct repos) will be observed at base-rate ~1 per 50 ticks under H-451.B (Poisson coincidence) or ~1 per 10 ticks under H-451.A (shared dispatcher); the next 20-tick observation window will discriminate between the two hypotheses with moderate confidence.
- **P-451.E**: the EHR ≈ 0.5 partial-recovery level at Add.211 will be near the **stationary point** of the W17 rate distribution within the 5-phase arc framework: future arcs are predicted to terminate near EHR ∈ [0.3, 0.7] with prior ~0.55, with full-recovery (EHR ≥ 0.9) at ~0.20 and full-collapse (EHR ≤ 0.1) at ~0.25.

## Relationship to prior synth notes

- **Supersedes synth #449's 4-phase descent-floor-spike-decay framing** at the structural level; synth #449 PRDC remains valid as the decay-phase coefficient inside the broader 5-phase framework.
- **Pairs with synth #447 (RCRA)** and **synth #449 (PRDC)** as the third coefficient in the 3-coefficient phase-transition sequence (RCRA, PRDC, PDRC).
- **Refines synth #421 (same-author intra-repo cadence)** by introducing the hyper/infra/feature sub-classification.
- **Independent of synth #441 (F2-fresh-cohort)** but the partial-recovery phase carriers (xli-oai, Sameerlite) interact with the synth #450 ACTRF framework — see synth #452 for the cross-tick author-axis treatment.
- **Composes with synth #444 (EMR)** at orthogonal axes: rate-trajectory phase (this synth) vs intra-window temporal density (EMR).
- **Composes with synth #448 (RCTC / MOR)** at the cardinality axis: the 5-phase arc's cardinality trajectory 3/3/2/2/0/3/1/2 has its own structural decomposition that synth #452 will expand.

**End of W17 Synthesis #451.**
