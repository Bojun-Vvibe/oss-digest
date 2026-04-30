# W17 synthesis #407 — Cohort-zero absorbing-state framing decisively falsified at n=4 sojourn cap; revert to finite-sojourn model

**Anchor**: ADDENDUM-189 (sha `1cc14c0`), window 2026-04-30T13:23:03Z..14:47:53Z (84m50s), 5 merges across 2 repos (qwen-code n=2, gemini-cli n=3).

## §1 — Falsification of synth #405's absorbing-state framing

Synth #405 (sha `144edc5`) promoted the cohort-zero state from "non-absorbing at n=3" (M-186.A lineage) to "absorbing at n=4" (M-188.A) on the basis of the 4-tick consecutive cohort-zero run Add.185-188 (143m03s wall-clock, base rate Add.185-188 = 4/4 = 1.000). The promotion was conditional on the predicted P-188.N "5-tick absorbing-state extension at <35%" — i.e., the absorbing-state framing required either continued zero-sustain at Add.189 (promoting to n=5 absorbing) or a falsification at the 5-tick boundary. Add.189 (sha `1cc14c0`) decisively delivers the falsification: 5 merges across 2 repos at Add.189, ending the run at finite-sojourn n=4.

### §1.1 — Sojourn-cap reading

The cohort-zero state in W17 now exhibits **maximum observed sojourn = 4 ticks at single anchor**. The synth #405 absorbing-state model predicted unbounded sojourn under the asymptotic-absorbing limit; the observed bound at 4 ticks falsifies the unbounded prediction at the first available test (Add.189). The finite-sojourn reading is now the supported framing: cohort-zero is a recurrent finite-sojourn state with empirical sojourn distribution {1 (Add.182), 1 (Add.185), 1 (Add.186), 1 (Add.187), 1 (Add.188)} consolidating into a single 4-tick run Add.185-188 plus a single 1-tick instance Add.182. Two distinct cohort-zero instances in W17, with sojourns {1, 4} and inter-instance gap = 3 ticks.

### §1.2 — Base-rate revision propagation

Synth #405 §3 revised the Add.150-188 base rate to 5/39 = 0.1282 and the Add.182-188 sub-window to 5/7 = 0.714. Add.189 propagates the revision: Add.150-189 base rate = 5/40 = 0.1250 (no Add.189 cohort-zero); Add.182-189 = 5/8 = 0.625; Add.185-189 = 4/5 = 0.800. The 4-tick subwindow base-rate Add.185-188 = 4/4 = 1.000 is now demonstrably **non-stationary** — the base rate decays under post-rebound observation, confirming the finite-sojourn framing.

### §1.3 — Inter-arrival pattern terminal-saturation bounded at multiplicity 2

The inter-arrival gaps {3 (Add.182→185), 1 (Add.185→186), 0 (Add.186→187), 0 (Add.187→188)} from M-188.B retain the terminal saturation at gap=0 for multiplicity 2 only. Add.189 is non-zero, so the would-be next gap is undefined (no second cohort-zero instance to terminate). The synth #402 §1.3 / M-186.K positive lag-autocorrelation extrapolation past n=2 multiplicity is **decisively falsified** — the saturation does not extend to a third gap=0 transition. Terminal saturation reading: bounded at multiplicity 2.

## §2 — Revert to finite-sojourn model with W17-anchored sojourn distribution

### §2.1 — Sojourn distribution

Two cohort-zero instances in W17:
- Instance 1: Add.182 (sojourn = 1 tick).
- Instance 2: Add.185-188 (sojourn = 4 ticks).

Sojourn distribution: {1: 1, 4: 1} at n=2 supporting (single anchor for sojourn=4). The sojourn = 4 reading is the **single largest cohort-zero sojourn observed in W17** by a factor of 4.

### §2.2 — Inter-instance recurrence interval

Inter-instance gap: Add.182 → Add.185 = 3 ticks (the original {3, 1, 0, 0} pattern's leading 3-tick gap is now reframed as the inter-instance recurrence interval). Single anchor at n=1 supporting.

### §2.3 — Recovery-vector at sojourn-exit

At Add.189 sojourn-exit (cohort-rebound), the rebound vector is **novel-carrier-mediated at both rebounding repos**:
- qwen-code: PR #3725 (pomelo-nwu, mergeCommit `3ee90b7`, recurrent) + PR #3723 (B-A-M-N novel author, mergeCommit `4cd9f0c`).
- gemini-cli: PR #26224 (Adib234 novel author, mergeCommit `487fb21`) + PR #26208 (cocosheng-g recurrent, mergeCommit `d743c6f`) + PR #26202 (cocosheng-g recurrent, mergeCommit `a15568e`).

Both rebounds include at least one novel-carrier introduction. The synth #402 M-186.L recovery-vector silence-depth ordering (binary-non-admitting >> class-rebound-mediated >> novel-carrier-mediated) **inverts at sojourn-exit**: under cohort-rebound pressure, novel-carrier-mediated strata recover first (single-anchor n=1 supporting at Add.189). M-189.J prediction at >55% extends this to n=2 supporting if the next cohort-rebound pattern repeats.

## §3 — New motifs (M-407.X)

- **M-407.A**: Cohort-zero in W17 is a recurrent finite-sojourn state with sojourn distribution {1, 4} at n=2 instances, NOT an absorbing state. Falsifies M-188.A and M-186.K-extrapolation. Single-anchor n=1 for sojourn = 4.
- **M-407.B**: The {3, 1, 0, 0} inter-arrival pattern from M-188.B is a **single-instance internal-gap pattern**, not a cohort-zero arrival process. Re-frames the {0, 0} terminal-saturation as **intra-sojourn ticks** of a single 4-tick instance, not as transitions between distinct instances. Promotes a structural distinction at single-anchor n=1.
- **M-407.C**: Recovery-vector ordering inverts at sojourn-exit: novel-carrier-mediated strata recover first under cohort-rebound pressure (vs binary-non-admitting last under silence pressure). Single-anchor n=1 supporting at Add.189; M-189.J test deferred to next sojourn-exit.
- **M-407.D**: Width-expansion of +122% at sojourn-exit (Add.188 38m11s → Add.189 84m50s) is a **single-tick regime-change signal** correlated with cohort-rebound. NEW M-407.D candidate: cohort-zero sojourn-exit is accompanied by ≥+50% width expansion at n=1 supporting; falsification test at next cohort-zero sojourn-exit.
- **M-407.E**: The synth #405 base-rate revision Add.185-188 = 1.000 is **non-stationary** at the 5-tick window boundary (Add.185-189 = 0.800). The asymptotic-absorbing reading required base-rate stationarity at 1.000; the observed decay falsifies the asymptotic limit. Single-anchor n=1 supporting.

## §4 — Predictions (FP-407.X)

- **FP-407.1**: Next cohort-zero instance in W17 will exhibit sojourn ∈ [1, 4] at >70% (bounded by observed maximum); sojourn ≥ 5 at <15% (would re-open absorbing-state question at single anchor); sojourn = 4 again at <25% (single-anchor n=1 not yet promoted to regular).
- **FP-407.2**: Inter-instance recurrence interval to next cohort-zero will be ≥ 3 ticks at >55% (anchors on the single observed inter-instance gap; intervals < 3 at <30%).
- **FP-407.3**: At next cohort-zero sojourn-exit, the rebound vector will include ≥1 novel-carrier introduction at >50% (anchors on M-407.C; recurrent-only at <30%).
- **FP-407.4**: At next cohort-zero sojourn-exit, the width expansion vs the terminal sojourn-tick will be ≥+50% at >40% (anchors on M-407.D at single-anchor n=1).
- **FP-407.5**: The synth #405 absorbing-state framing will not be re-promoted in W17 — base-rate Add.185-end-W17 will not return to 1.000 at >85% (irreversibly falsified at Add.189).

## §5 — Cross-referencing

- **Confirms**: M-186.L stratification ordering at silence-pressure direction (still holds); finite-sojourn framing of M-186.F decaying envelope (now the supported framing post-rebound).
- **Falsifies**: M-188.A absorbing-horizon promotion; M-188.B asymptotic terminal-saturation; M-186.K positive lag-autocorrelation extrapolation past n=2; synth #405 §1 absorbing-state model in toto.
- **Refines**: M-186.A band-stability is a property of post-anchor mid-band sustain, not of cohort-zero sustain — the two are now structurally distinct readings.

## §6 — Discrimination test

The next cohort-zero instance in W17 (if any) will discriminate between:
- (a) finite-sojourn with hard cap at 4 ticks (FP-407.1 supported),
- (b) finite-sojourn with sojourn distribution {1, 4} extending to {1, 4, 5+} at single re-occurrence,
- (c) re-opening of the absorbing-state question at sojourn ≥ 5 (low prior at <15%).

The discrimination resolves the framing question definitively at second cohort-zero instance post-Add.189.
