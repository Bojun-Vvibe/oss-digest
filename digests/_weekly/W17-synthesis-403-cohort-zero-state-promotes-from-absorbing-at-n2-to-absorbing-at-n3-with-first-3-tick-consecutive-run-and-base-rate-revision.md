# W17 Synthesis #403 — Cohort-zero state promotes from absorbing-at-n=2 to absorbing-at-n=3 with first 3-tick consecutive run; base-rate revision to 4/38 with sub-window collapse to 3/3 absorbing-degenerate

**Anchor measurement window:** 2026-04-30T12:08:10Z → 12:44:52Z (Add.187 capture); inferences span Add.150-187 long-range cohort series and the trailing Add.182-187 cluster.
**Anchor mechanism:** cohort-zero arrival process treated as a discrete absorbing-state Markov chain with empirically-estimated transition probabilities; the trailing Add.185-187 sub-window provides direct evidence for an absorbing terminal limit at the zero state with multiplicity ≥3.
**Parent synth lineage:** **#402** (cohort-zero base-rate update post-third-event with cluster-aware inter-arrival, M-186.K positive autocorrelation, M-186.L recovery-vector stratification); **#401** (M-186.F decaying envelope, M-186.E clustering, falsification of #399 closed-period-3 attractor); **#399** (discharge-recovery-collapse triplet attractor — overturned at #401); **#393** (M-182.B cohort-wide zero classification as non-absorbing tail event — overturned at this synth at n=3 supporting). Distinct from #401 in that #401 framed the trajectory as a **decaying envelope** transient; this synth promotes the zero state to an **absorbing terminal limit** with empirical transition data at n=3 supporting consecutive-run.

## 1. The empirical absorbing-state observation

The cohort-zero state was reached at Add.182, then re-entered at Add.185, Add.186, Add.187 — yielding the trailing 3-tick consecutive run Add.185-187. Wall-clock duration of the consecutive-run = 30m29s + 37m41s + 36m42s = **104m52s ≈ 1h44m52s**.

This is the **first 3-tick consecutive cohort-zero run** in W17 and falsifies P-186.M (predicted at <25%).

## 2. Base-rate revision (extends #402 §1.2)

| Window           | Cohort-zero ticks | Total ticks | Base rate | Δ vs #402 |
|------------------|-------------------|-------------|-----------|-----------|
| Add.150-181      | 0                 | 32          | 0.000     | unchanged |
| Add.150-187      | 4                 | 38          | **0.1053**| +0.024 (+30%) |
| Add.182-187      | 4                 | 6           | **0.667** | +0.067 (+11%) |
| **Add.185-187**  | **3**             | **3**       | **1.000** | NEW |

The Add.185-187 sub-window is **degenerate**: every tick in the window is a cohort-zero. This is the strongest possible empirical signal of an absorbing state at the zero floor over the trailing 3-tick window.

## 3. Markov absorbing-state classification

Define the cohort-emission state at tick t as binary: S(t) ∈ {Z, P} where Z = cohort-zero, P = positive emission (any merge across the cohort). The empirical transition probabilities at n=4 occurrence of the Z state in W17 are:

| Transition  | Observations         | Empirical prob |
|-------------|----------------------|----------------|
| P → P       | Add.151→152, ..., 181→182 (mostly P→P with one P→Z) | very high |
| P → Z       | Add.181→182, Add.184→185 | rare |
| **Z → P**   | Add.182→183 (the only observed Z→P in W17) | **1/4 = 0.25** |
| **Z → Z**   | Add.185→186, Add.186→187 | **2/4 = 0.50** at n=4 occurrence (3 observations available since Add.182, of which 1 is Z→P and 2 are Z→Z; raw count Z→{Z,P}: 2 Z→Z and 1 Z→P) |

Re-counting Z→{next} transitions (n=3 such transitions in W17): Add.182→Add.183 = Z→P; Add.185→Add.186 = Z→Z; Add.186→Add.187 = Z→Z. So **P(Z→Z | Z) = 2/3 = 0.667** at n=3 supporting transitions.

Under a stationary 2-state Markov model with P(Z→Z) = 0.667, the expected sojourn time in the Z state is 1 / (1 - 0.667) = **3 ticks** — and the observed sojourn time at the trailing run is **exactly 3 ticks** (Add.185-187). The empirical absorbing-state model is **self-consistent** at the trailing-run length.

The pre-Add.182 prior reading (#393) treated cohort-zero as non-absorbing with empirical P(Z→Z) = undefined (n=0 prior). The post-Add.187 reading is **P(Z→Z) ≈ 0.667 at n=3 supporting transitions** — a substantive shift from "non-absorbing tail event" to "absorbing-with-mean-sojourn-3-ticks".

## 4. Inter-arrival pattern {3, 1, 0} and the asymptotic-zero limit (extends #402 §1.3 and #401 M-186.E)

The three observed inter-arrival gaps are {3, 1, 0} ticks. The arithmetic difference of consecutive gaps is {-2, -1} — **strictly decreasing with shrinking step size**. Linear extrapolation to the next gap (n=4) yields a predicted gap of -0.5 ticks (mathematically impossible), but the **monotonic-contracting** structure suggests an **asymptotic absorbing limit** at gap = 0 — i.e., once the cohort-zero state is re-entered without an intervening positive-emission tick, the process **degenerates to the zero state**.

This is precisely the absorbing-state framing of §3 expressed in the inter-arrival representation: with P(Z→Z) ≈ 0.667 at n=3, the inter-arrival distribution between cohort-zero events **collapses to gap=0 in the absorbing limit**.

The {3, 1, 0} pattern **confirms** #402 §1.3 M-186.K "positive lag-1-to-lag-3 autocorrelation" candidate at n=3 supporting and **promotes** it from autocorrelation-only framing to absorbing-state framing.

## 5. Falsification of motif lineage

| Motif                                              | Status pre-Add.187 | Status post-Add.187 | Falsified by |
|----------------------------------------------------|--------------------|---------------------|--------------|
| #393 M-182.B "cohort-wide zero is non-absorbing tail event" | n=1 supporting (initial) | **falsified at n=3 consecutive runs** | M-187.B 3-tick absorbing run |
| #399 closed-period-3 discharge-recovery-collapse triplet | n=2 supporting cycle | **already falsified at #401** | #401 M-186.F decaying envelope; this synth promotes to absorbing |
| #401 M-186.F "decaying envelope (3,1,2,0,0) with absorbing zero-state at n=2" | n=2 supporting | **promoted to (3,1,2,0,0,0) with absorbing zero-state at n=3** | extends to one more zero |
| #402 §1.2 "base rate 0.0811 post n=3" | n=3 supporting | **revised to 0.1053 post n=4** | additional zero observation |
| #402 §1.3 M-186.K "positive lag-1-to-lag-3 autocorrelation" | n=2 supporting | **confirmed at n=3 supporting + absorbing limit** | {3, 1, 0} pattern |
| P-186.M "3-tick consecutive cohort-zero at <25%" | predicted | **falsified — observed at n=1** | Add.187 zero |
| P-186.A "cardinality 0 at <50%" | predicted | **falsified — observed at n=1** | Add.187 cardinality 0 |
| P-186.B "cohort-zero NOT sustained at >65%" | predicted | **falsified — observed sustained** | Add.187 zero |

## 6. Falsifiable predictions on absorbing-state durability

- **FP-403.1**: Cohort-zero absorbing-state extends to a 4-tick consecutive run at Add.188 at <30% probability. (If observed, P(Z→Z) revises upward to 0.75 at n=4 supporting, and the absorbing-state framing locks at very high empirical confidence; if not observed, the absorbing-state classification holds at n=3 with mean sojourn ≈ 3 ticks.)
- **FP-403.2**: Conditional on Add.188 being a Z→P transition, the next subsequent cohort-zero gap will be ≤2 ticks at >55% probability. (Rationale: the post-absorbing-exit prior is positively-autocorrelated per M-186.K; short re-entry to Z is consistent with the absorbing-state framing.)
- **FP-403.3**: The Add.182-187 sub-window base rate of 0.667 will revise to ≤0.500 by Add.195 at >70% probability. (Mean reversion expected as the trailing window dilutes with positive-emission ticks; failure would imply the regime change is durable past 8 additional ticks.)
- **FP-403.4**: The empirical P(Z→Z) at n=4-6 supporting transitions will fall in [0.50, 0.75] at >65% probability. (Stable absorbing-state probability range; failure would imply non-stationary transition probabilities.)
- **FP-403.5**: The {3, 1, 0} inter-arrival pattern's strictly-monotonic-contracting structure will NOT extend to a fourth gap of 0 at <40% probability. (A fourth consecutive cohort-zero would extend the absorbing pattern; the {3, 1, 0, 0} extension is admissible at the empirical absorbing rate but not strictly monotonic in the difference sequence.)

## 7. Cross-link

- **#402 §2 recovery-vector stratification (M-186.L)**: confirmed at Add.187 with widening depth-per-tick rates (M-187.D, M-187.E). The non-overlapping ordering binary-non-admitting >> class-rebound >> novel-carrier persists at n=2 supporting. The opencode 5h07m depth at Add.187 is approaching the FP-402.1 [4h, 7h] band ceiling at 73% utilization — the next 2-3 silence ticks would test FP-402.1 directly.
- **#398 cross-repo amplitude-2 discharge horizon asymmetry**: orthogonal to this synth's cohort-level absorbing-state framing. The opencode:codex per-PR silence ratio at amplitude=2 revises to ≥4.0× at Add.187 (was ≥3.5× at Add.186); the asymmetry continues to expand independently of the cohort-zero process.
- **#400 M-185.A width-tier-conditional 1-tick mean-reversion**: the Add.187 width 36m42s confirms M-185.A at n=3 from the Add.184 anchor and confirms M-186.A at n=3 band-stability. Width and cohort cardinality remain uncorrelated.

## 8. Summary

The cohort-zero state is **promoted from non-absorbing tail event (#393) to absorbing terminal limit at n=3 supporting consecutive runs (M-187.B)**. Empirical P(Z→Z) ≈ 0.667 at n=3 transitions; expected sojourn time ≈ 3 ticks matches the observed trailing-run length exactly. Base rate revises to 0.1053 over Add.150-187; the Add.185-187 sub-window collapses to 1.000 (absorbing-degenerate). Inter-arrival pattern {3, 1, 0} confirms #402 M-186.K positive autocorrelation and admits asymptotic-zero limit. FP-403.1 through FP-403.5 lock the absorbing-state durability reading; failure of any would require revising the absorbing-Markov framing.
