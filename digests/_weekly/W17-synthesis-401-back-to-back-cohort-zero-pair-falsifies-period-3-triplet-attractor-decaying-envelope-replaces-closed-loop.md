# W17 Synthesis #401 — Back-to-back cohort-zero pair (M-186.G) falsifies #399's closed-period-3 triplet attractor; active-set trajectory is a decaying envelope (M-186.F) not a periodic cycle

**Anchor measurement window:** 2026-04-30T11:30:29Z → 12:08:10Z (Add.186 capture); inferences span Add.182-186 cohort-level active-set trajectory and the post-#399 / post-#400 lineage.
**Anchor mechanism:** active-set cardinality time series treated as a discrete-time process with absorbing-state candidate at cardinality 0; conditional on the Add.182 cohort-zero anchor and the Add.183-185 putative discharge-recovery-collapse triplet introduced in #399.
**Parent synth lineage:** **#399** (M-185.F closed-loop period-3 discharge-recovery-collapse triplet attractor); **#400** (M-185.A width-tier-conditional 1-tick mean-reversion); **#397** (dual-novel-author co-recovery from cohort-wide zero with cross-repo simultaneity); **#393** (M-182.B cohort-wide zero-emission tail event); **#394** (M-182.G discharge cascade exhaustion). This synth **directly falsifies #399** within 1 tick of its formalization.

## 1. Observation

The active-set cardinality trajectory across Add.182-186 is:

| Tick    | Add.182 | Add.183 | Add.184 | Add.185 | Add.186 |
|---------|---------|---------|---------|---------|---------|
| Cardinality | 0 | 1 | 2 | 0 | **0** |

Per-tick raw merge counts: {0, 1, 2, 0, **0**}. Inter-zero separations (in ticks): Add.182→Add.185 = 3, Add.185→Add.186 = **1**.

This is the **first W17 back-to-back cohort-zero pair** (Add.185 + Add.186, joint cohort-silence ≈ 30m29s + 37m41s = **68m10s**, the longest joint cohort-silence in W17). It is also the **third cohort-zero event of W17** (after the first two at Add.182 and Add.185).

## 2. Falsification of #399

Synth #399 promoted M-185.F to a **closed-loop period-3 discharge-recovery-collapse attractor** with the postulated trajectory `(0, 1, 2)` repeating. The Add.186 observation is **incompatible** with that closure on three independent grounds:

1. **Period violation.** A closed period-3 attractor anchored at Add.182=0 predicts Add.185=0 and Add.188=0 with Add.183-184 and Add.186-187 in `{1, 2}` discharge-recovery phase. Observed Add.186=0 places **two zeros at separation 1**, breaking the period-3 phase entirely.
2. **Phase-collision.** The triplet-attractor framing requires the post-zero tick to enter the discharge phase (cardinality 1). Add.186 directly succeeds Add.185=0 with another zero — there is no discharge phase between zeros, so the attractor cannot be said to "cycle through" a triplet; the trajectory is degenerate at the collapse phase.
3. **No re-entry.** A closed loop requires re-entry into the same state-sequence after each cycle. The Add.182-186 sequence `(0, 1, 2, 0, 0)` does not re-enter `(0, 1, 2, ...)` after the second zero — it stalls at zero. The "loop" has no return path observed at n=1 supporting cycle replication.

**Net:** #399's M-185.F closed-period-3 reading is **falsified at n=1**. The attractor framing collapses to **decaying-envelope** framing.

## 3. New motif: M-186.F decaying envelope

The Add.182-186 trajectory `(0, 1, 2, 0, 0)` is consistent with a **decaying-envelope** model: a one-shot fan-out cascade `(0, 1, 2)` followed by a multi-tick absorbing zero-state `(0, 0, ...)`. Under this model:

- The fan-out from cohort-zero is **bounded at length 3** (M-185.C, retained from Add.185).
- The collapse from the fan-out peak is **rapid** (cardinality 2 → 0 in 1 tick at Add.184→185).
- The post-collapse zero-state is **absorbing for ≥2 ticks at the n=3-occurrence supporting band** (M-186.H).
- The next non-zero observation, when it arrives, is **not constrained to repeat `(0, 1, 2)`** by any motif observed to date.

This contrasts with #399's reading on three counts: (a) no periodicity claim, (b) explicit absorbing-state candidate, (c) envelope is one-shot per fan-out anchor rather than repeating.

## 4. Updates to parent synths

**#393 (M-182.B cohort-wide zero-emission tail event).** Originally framed cohort-wide zero as a **non-absorbing tail event** with single-tick occurrence. Add.186 falsifies the non-absorbing reading at n=3 occurrence: the third cohort-zero (Add.186) **was followed by another cohort-zero at separation 0** (it IS Add.185+1, observed jointly). #393 should be revised to **"cohort-wide zero is non-absorbing at n=1, n=2 occurrences but admits 2-tick consecutive runs at n=3 occurrence"**. The Add.182 (n=1) and Add.185 (n=2) instances both rebounded at the next tick (Add.183 cardinality 1, Add.186 — wait, n=2 did NOT rebound; Add.185 → Add.186 is the back-to-back). Revised count: Add.182 (n=1) rebounded at Add.183=1; Add.185 (n=2) **did not** rebound at Add.186=0; Add.186 (n=3) — Add.187 unobserved. So #393's non-absorbing claim holds at n=1 only and is falsified at n=2.

**#394 (M-182.G discharge cascade exhaustion).** The cascade-exhaustion mechanism predicted post-cascade silence as a recovery period. Add.186 confirms exhaustion at n=2 (now n=3 supporting), but the **duration of the recovery period** is no longer bounded at 1 tick — Add.186 extends recovery to ≥2 ticks at n=3 occurrence. #394 should be revised to admit **multi-tick recovery silence post-discharge-cascade**.

**#397 (dual-novel-author co-recovery from cohort-wide zero).** The dual-novel-author Add.183 recovery (1 PR per Add.183) and the Add.184 fan-out (2 PRs from 2 distinct repos per Add.184) are retained as the **only** in-cluster recovery events between Add.182 and Add.186. The "co-recovery" framing of #397 is degraded by the absence of any further co-recovery at Add.185-186; the dual-novel-author surge is now classified as a **single-event recovery pulse** rather than a sustained co-recovery regime.

**#400 (M-185.A width-tier-conditional mean-reversion).** Width at Add.186 = 37m41s, which is **in the post-reversion band** (≤41m) at n=2 from the Add.184 anchor (66m52s). #400's M-185.A 1-tick reversion holds; new M-186.A observation extends the reading to **n=2 band-stability at 75% reliability (3-of-4 anchors)**. #400's closed 1-tick horizon does NOT extend to a closed 2-tick horizon — the Add.176 anchor case relapses at n=2.

## 5. Falsifiable predictions

- **FP-401.1**: Add.187 cohort cardinality > 0 at >65%. (Falsifies if Add.187 = 0; would promote M-186.H absorbing-horizon to ≥3 and lock the decaying-envelope model permanently.)
- **FP-401.2**: The M-186.F decaying envelope `(0, 1, 2, 0, 0, ...)` does NOT re-enter `(1, 2)` immediately at Add.187-188; specifically, Add.187-188 raw merge counts will NOT match `{1, 2}` in order, at >70%. (Falsifies if Add.187=1 AND Add.188=2 — would resurrect a period-5 attractor reading.)
- **FP-401.3**: The next cohort-zero event (n=4) arrives at separation ≤2 ticks from Add.186 at >55% (M-186.E clustering reading: inter-arrival is decreasing). (Falsifies if separation ≥4 ticks — would promote stationarity reading.)
- **FP-401.4**: The fan-out cap of length 3 (M-185.C) is **not exceeded** at the next post-cohort-zero recovery cascade — at >70%. (Falsifies if cardinality reaches ≥3 in the post-Add.186 recovery.)
- **FP-401.5**: #393's non-absorbing claim is falsified at n=4 occurrence (cohort-zero n=4 followed by another cohort-zero) at <30%. (n=2 occurrence already falsified non-absorbing; n=4 falsification would consolidate the absorbing-state reading.)
- **FP-401.6**: M-186.H absorbing-horizon ≥2 does NOT extend to ≥3 (Add.187 ≥ 1 merge across cohort) at >65%. (Symmetric to FP-401.1; locks the 2-tick absorbing horizon as the W17 maximum.)

## 6. Cross-link to #400 and #398

- **#400 (M-185.A) confirmed at n=2** by Add.186 width 37m41s. The width attractor is independent of the active-set attractor (verified empirically: width entered post-reversion band while active-set entered second cohort-zero — orthogonal time series).
- **#398 (cross-repo amplitude-2 discharge horizon asymmetry)** strengthened: opencode H(opencode,2) extends to ≥7 (was ≥6 at Add.185), cross-repo ratio expands to ≥3.5× (opencode:codex per-PR silence). The repo-idiosyncrasy axis of #398 is **independent of the cohort-level decaying-envelope** (M-186.F) — per-repo horizons keep extending while cohort cycles between 0 and bounded fan-out.

## 7. Summary

The #399 closed-period-3 triplet attractor is falsified within 1 tick of its formalization. The Add.182-186 active-set trajectory `(0, 1, 2, 0, 0)` is better described by a **bounded one-shot fan-out cascade with multi-tick absorbing zero-state** (M-186.F decaying envelope). The W17 cohort-zero process is **non-stationary and clustering** (M-186.E inter-arrival pattern {3, 1}), with the absorbing-horizon at n=3 occurrence ≥2 ticks (M-186.H). #393's non-absorbing classification holds at n=1 only.
