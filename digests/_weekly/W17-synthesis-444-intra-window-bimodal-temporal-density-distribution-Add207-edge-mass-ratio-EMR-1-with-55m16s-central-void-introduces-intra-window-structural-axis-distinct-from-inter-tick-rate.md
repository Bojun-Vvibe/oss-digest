# W17 Synthesis #444 — Intra-window bimodal temporal-density distribution at Add.207 with extreme edge-mass concentration (3 PRs split as 2-PR opening cluster within 5m08s of window-open + 0-PR central void of 55m16s + 1-PR terminal-edge merge 50s before window-close) introduces edge-mass-ratio (EMR) sub-observable as intra-window structural axis distinct from inter-tick rate observable

## Pattern statement

Within the **single Add.207 capture window** (02:58:19Z → 03:59:32Z, width 61m13s), the 3 in-window merges are **NOT distributed uniformly** but instead form a **strict bimodal density distribution with a central void**:

| timestamp (Z) | offset from window-open | repo | PR# | author | inter-merge gap |
|---------------|------------------------|------|-----|--------|-----------------|
| 03:00:08 | +1m49s | codex | #20298 | xli-oai | (window-open) |
| 03:03:26 | +5m07s | codex | #20511 | pakrym-oai | 3m18s |
| 03:58:42 | +60m23s | litellm | #26292 | akh64bit | **55m16s** |

The 55m16s **inter-cluster gap** is **the longest intra-window inter-merge gap in the visible W17 Add.193-207 lookback** — it spans **90.4% of the 61m13s window** with **zero merge activity**.

Critically, **all 3 PRs land within the first 5m07s OR the last 50s of the window** (the third PR at +60m23s sits 50s before the window-close at 61m13s). The **edge-mass-ratio (EMR)**, defined as the fraction of PRs landing in the outer 10% of the window divided by total PRs, equals:

- Opening edge (first 6m07s = ~10% of window): 2/3 = 0.667 of total mass
- Closing edge (last 6m07s = ~10% of window): 1/3 = 0.333 of total mass
- **Combined EMR = 1.0** (all 3 PRs in outer 20% of window; central 80% is empty)

This is a **structurally extreme distribution** that the synth #442 / #443 inter-tick rate observables CANNOT capture — the per-minute rate (3 / 61.22 = 0.0490) treats the window as a uniform Poisson process, but the actual distribution is **maximally non-uniform within the window**.

## Introduction of the EMR (edge-mass-ratio) sub-observable

Synth #444 formally introduces the **edge-mass-ratio (EMR)** as a new intra-window structural sub-observable, defined as:

```
EMR(window, edge_fraction=0.10) = (count of merges in first edge_fraction OR last edge_fraction) / total_count
```

For uniformly-distributed Poisson arrivals, expected EMR ≈ 2 × edge_fraction = 0.20. For the Add.207 window, observed EMR = 1.0 — **5x the uniform-distribution expectation** — a strong signal of **non-Poisson clustering**.

Sub-decompositions:

- **Opening-EMR (first 10%)** = 0.667 (Add.207)
- **Closing-EMR (last 10%)** = 0.333 (Add.207)
- **Asymmetry ratio** (Opening-EMR / Closing-EMR) = 2.0 (opening-weighted bimodal)

## Specific observables (Add.207)

- **Opening cluster** = {#20298 xli-oai, #20511 pakrym-oai} — both **codex**, both **-oai author suffix** (same-organization-affiliated cluster), inter-merge gap 3m18s, deep-backlog dispersion 213 PR# units.
- **Central void** = 55m16s with **zero merges across all 6 watched repos**.
- **Terminal-edge merge** = #26292 akh64bit at litellm, evals/test-only surface, fresh author (no Add.193-206 prior).
- The **opening cluster and terminal-edge merge are repo-disjoint** (codex vs litellm), **author-disjoint** ({xli-oai, pakrym-oai} ∩ {akh64bit} = ∅), and **surface-disjoint** (admin-status + dead-code-removal vs evals/test-only).

The bimodal structure is therefore **not a single-cohort burst-then-decay** (which would predict the terminal merge to be from the same cohort); instead it is a **two-cohort stochastic co-occurrence** where the opening codex cluster and terminal litellm singleton are **independent author / surface populations**.

## Comparison to W17 prior intra-window distributions

The visible W17 Add.193-207 lookback lacks any prior synthesis explicitly characterizing intra-window temporal-density. Existing synths that touch this dimension only obliquely:

- **Synth #221 / #224 / #355** (doublet regime mid-band kinetics) — characterizes inter-merge gaps but assumes the gaps are within a single cluster, not split by a central void.
- **Synth #437** (deep-backlog dispersion) — characterizes PR-number dispersion within a cohort but does NOT address temporal distribution within the window.
- **Synth #438** (multi-author multi-doublet intra-tick co-occurrence) — addresses author-cardinality but assumes temporal proximity of doublets within the window.
- **Synth #442 / #443** (rate chain) — uses per-minute rate as a uniform-Poisson summary statistic, **explicitly washing out intra-window non-uniformity**.

Synth #444 is therefore the **first W17 synthesis to formally introduce an intra-window structural axis orthogonal to inter-tick aggregates**. The EMR sub-observable can be computed retroactively for all Add.193-206 prior windows; an EMR scan of the lookback would reveal whether Add.207's EMR=1.0 is a singular event or a recurrent regime previously hidden by aggregate observables.

## Mechanism hypotheses for the EMR=1.0 bimodal signature

Three candidate mechanisms for the Add.207 bimodal distribution with central void:

1. **Boundary-edge merge clustering**: human-author or bot-driven merge windows align to specific clock-time boundaries (e.g., top of the hour 03:00, end of US-PT business window ~04:00 UTC). The 03:00:08 / 03:03:26 cluster aligns with a top-of-hour boundary; the 03:58:42 merge aligns with the next pre-hour-boundary edge. **Falsifiable**: EMR scan of prior windows should show elevated EMR around hour-boundaries.

2. **Cross-cohort temporal-clustering coincidence**: the codex opening cluster and the litellm terminal merge are **independent stochastic events** that happened to land at opposite window edges by chance. Under uniform-Poisson with rate 0.0490 PR/min, the probability of all 3 PRs landing in the outer 20% is `0.20^3 = 0.008` (0.8%) — i.e., the observed EMR=1.0 is a **~125:1 long-tail event** under the null hypothesis. **Falsifiable**: if EMR=1.0 events recur in W17 at frequency > ~1/125 windows, the null hypothesis is rejected.

3. **Window-boundary artifact**: addendum capture-window boundaries themselves create the apparent clustering because PRs are deterministically partitioned at window-edges. **Falsifiable**: shifting the window-boundary by ±15 minutes should preserve the underlying clustering if mechanism 1 is correct, or destroy it if mechanism 3 is correct.

## Cross-reference to synth #442 / #443

The EMR=1.0 observation at Add.207 **does NOT contradict** the rate-chain extension flagged in synth #443; instead it **adds an orthogonal characterization** of the same tick. The rate-chain framing treats Add.207 as a low-rate post-discharge trough; the EMR framing reveals that within this trough, merge activity is **concentrated at boundary edges with a structural void in the interior**. These are **compatible at the joint observable level**: a low-rate window can be either uniformly-sparse (low EMR) or boundary-clustered (high EMR), and Add.207 specifically realizes the **boundary-clustered low-rate sub-regime**.

This compatibility suggests a **2D rate-EMR observable space** where W17 windows can be classified into 4 quadrants: (high-rate, low-EMR) = uniform burst, (high-rate, high-EMR) = double-burst, (low-rate, low-EMR) = uniform trough, (low-rate, high-EMR) = boundary-clustered trough. Add.207 is the first W17 instance of the (low-rate, high-EMR) quadrant explicitly identified.

## Falsifiable predictions

- **P-444.A** (EMR persistence at Add.208): if Add.208 produces ≥ 3 in-window merges, the predicted EMR at edge_fraction=0.10 is **modal ≈ 0.20** (uniform-Poisson reversion) with **secondary ≈ 0.50-1.00** (chain-mode boundary-clustering). EMR ≥ 0.67 at Add.208 would establish a **2-tick high-EMR chain** and seed a synthesis on **boundary-clustering regimes**.
- **P-444.B** (retroactive EMR scan): an EMR scan of Add.193-206 will reveal **at least 1 prior window with EMR ≥ 0.67** under the null (random clustering) — if zero such priors exist, Add.207's EMR=1.0 is a **singular W17 event** and elevated to W-feature status.
- **P-444.C** (boundary-mechanism test): if the EMR=1.0 signature recurs in future Add.208+ windows specifically when those windows span hour-boundaries (XX:00 ± 5m), mechanism 1 (boundary-edge clustering) is supported. If EMR=1.0 windows occur with no boundary alignment, mechanism 2 (stochastic coincidence) or mechanism 3 (window-artifact) is supported.
- **P-444.D** (cross-tick-author coupling): the Add.207 opening cluster authors {xli-oai, pakrym-oai} are predicted to NOT recur at Add.208 (4-tick null-intersection chain established at codex; chain-extension to 5 has W17 historical priors of high probability); the terminal author akh64bit is predicted to NOT recur at Add.208 at litellm (synth #434 fresh-author-as-singleton non-chaining tail).

## Promotion of intra-window temporal-density to first-class W17 observable

Synth #444 promotes intra-window temporal-density distribution from an **implicit / unnamed dimension** to a **first-class W17 observable** with its own sub-observables (EMR, opening-EMR, closing-EMR, asymmetry ratio, central-void-length). All future addendum narratives are recommended to record intra-window timestamps with offset-from-window-open as standard, enabling EMR computation retroactively. This expands the W17 synthesis observable-space from primarily inter-tick aggregates (rate, cardinality, amplitude trajectories) to **dual inter-tick + intra-tick structural characterization**.

**End of W17 synthesis #444.**
