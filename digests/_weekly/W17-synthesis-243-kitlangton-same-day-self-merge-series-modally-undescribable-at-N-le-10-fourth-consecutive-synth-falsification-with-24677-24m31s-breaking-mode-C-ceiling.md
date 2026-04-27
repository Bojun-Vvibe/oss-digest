# W17 synthesis #243 — kitlangton same-day self-merge series is **modally undescribable at N≤10**: synth-promoted kinetic models fail at first real test in 4 consecutive cycles (#97 → #239 → #241 → #243 here), with #24677 (24m31s) falsifying synth #241's Mode C upper bound by 2m31s and opening a hypothetical Mode D ≈23–28m that the series itself cannot afford to populate

## Context

Four consecutive ticks have promoted progressively-revised kinetic models for the kitlangton same-day opencode self-merge series:

- **Synth #97** (early W17): monotonically contracting lifespans (N≥4). **Falsified** by synth #238 cycle.
- **Synth #239**: bimodal Mode A (≤5m) + Mode B (12–16m), with session-opener star outlier. **Falsified** by ADDENDUM-102 capture (#24671 19m43s).
- **Synth #241**: ≥3-modal with shrinking inter-mode gaps; Mode A {≤5m}, Mode B {12–16m}, Mode C {17–22m}; star outlier {2h+}. Pred F-extension as carried in Add.102: "#24677 lands ≤5m or 17–22m, **not in 6–11m gap and not >22m**." **Falsified by ADDENDUM-103** capture: #24677 merged at **24m31s**, outside Mode C upper bound by 2m31s.

Each falsification arrived **inside one tick of the predecessor synth's promotion**. The methodological note appended to synth #241 ("any kinetic-modality claim on the kitlangton series must defer promotion until N≥12 with ≥3 entries in any non-Mode-A cluster") was provisional. It is now **vindicated as an empirical rule** by a fourth consecutive falsification.

## The data

Full N=10 chronological lifespan vector for the kitlangton 2026-04-27 same-day session:

```
[2h01m58s, 15m28s, 4m01s, 15m51s, 14m14s, 3m40s, 3m51s, 19m43s, 1m46s, 24m31s]
```

Excluding the session-opener (2h01m58s, **#24626**), the trailing N=9 vector by candidate-mode:

| PR | Lifespan | Synth #241 mode | Status under #241 model |
|---|---|---|---|
| #24640 | 15m28s | B | fits |
| #24656 | 4m01s | A | fits |
| #24660 | 15m51s | B | fits |
| #24662 | 14m14s | B | fits |
| #24663 | 3m40s | A | fits |
| #24667 | 3m51s | A | fits |
| #24671 | 19m43s | C | fits (this is the PR that *created* Mode C in #241) |
| #24676 | 1m46s | A | fits |
| **#24677** | **24m31s** | **none** | **falsifies** |

The N=9 trailing vector now spans **{1m46s, 3m40s, 3m51s, 4m01s} ∪ {14m14s, 15m28s, 15m51s} ∪ {19m43s} ∪ {24m31s}**. To rescue the multi-modal model would require positing a fourth mode {≈23–28m} with **N=1 evidence**. By the methodological rule that promotes a mode only at N≥3, this is **not promotable** — at the same time, classifying #24677 as a Mode C extension (i.e., Mode C is actually 17–28m) collapses the previously-claimed contracting-gap structure: the gap from Mode B ceiling (15m51s) to Mode C floor (19m43s) is 3m52s, but if Mode C ceiling extends to 28m the within-mode width (8m+) exceeds the inter-mode gap, **invalidating the modal partition itself**.

## The meta-claim

**At N≤10 the kitlangton same-day self-merge series cannot support a discrete-modal kinetic model that survives a single new observation.** Concretely:

- **Discrete-mode N=2 model** (synth #239): one observation outside both modes falsifies. Survival window: 0 promotions.
- **Discrete-mode N=3 model** (synth #241): one observation outside all three modes falsifies. Survival window: 0 promotions (#241 was promoted in Add.102 alongside the falsifying observation in Add.103, which is **same-tick falsification under the W17 ADDENDUM cadence of ≈40min per tick**).
- **Continuous-distribution model**: not yet attempted, but with N=10 (or N=9 trailing) a continuous fit would have to place ≥30% of mass in the gaps between observed clusters, which is **inconsistent with the actual gap structure** (no observations in {5–14m} ∪ {16–19m} ∪ {20–24m} regions — three gaps that aggregate to 12 minutes of empty interval out of a 0–25m bounded support).

The series is therefore in the **awkward regime where the data is too sparse for continuous fitting and too irregular for discrete-modal fitting**. The honest model is **"random-walk over a skewed lifespan distribution with author-and-surface-class confounding that decomposes only at N >> 10."**

## What killed each prior model — common pattern

In each of the four falsification events, the killing observation was **one mode-step beyond the highest mode previously seen**:

| Falsification | Prior max-mode | Killing observation | Step out |
|---|---|---|---|
| #97 → #238 cycle | "monotone contraction" | non-monotone re-expansion | **1 directional step** |
| #239 → #241 | Mode B {≤16m} | 19m43s (Mode C creation) | **+3.7m beyond ceiling** |
| #241 → #243 (here) | Mode C {≤22m} | 24m31s (Mode D candidate) | **+2.5m beyond ceiling** |

The killing step has **monotonically decreased** (from "topological re-expansion" → 3.7m → 2.5m). Naively this might suggest the series is **converging** on its true upper-mode boundary. But three observations are insufficient to support a convergence claim, and the more conservative reading is that **as the series fills out its support, the killing observation just has to land marginally beyond the prior maximum** — which is mechanically guaranteed for any heavy-tailed distribution.

## Cross-author control — the meta-claim is series-specific, not author-specific

The four-cycle falsification chain is **specific to the kitlangton same-day self-merge series, not to kitlangton across all sessions**. The session-opener star outlier #24626 (2h01m58s) is the **only** such star observed for kitlangton this week; #24640's session opening (presumed earlier this same day) is not yet captured in the N=10 vector. **Other tracked authors with multi-PR same-day series**:

- **codex evawong-oai N=5 preserved-path stack** (#19846, #19847, #19848, #19849, #19852, plus sibling-now-closed #19867): **0/5 merged at 4h26m+ since open**, plus 1/6 closed → kinetics is "stalled," not modal. Synth #240 captures this.
- **codex jif-oai N=5+ memory-split series** (#19792, #19809, #19812, #19813, #19818, #19860): all merged within the same day, lifespan vector roughly **{2h53m, 19m43s, 14m59s, 14m19s, 20m24s, ?(open)}** — heterogeneous, no obvious modes. Worth its own synth eventually.
- **codex bolinfest** (#19851, #19854, #19841, #19776+): bridged Class F (9m58s, 22m36s) and Class S (#19841 2h43m55s) within hours per synth #242 — **not modal but surface-stratified**.
- **opencode jeevan6996 N=3 OPEN burst** (#24674, #24678, #24680): all still OPEN at Add.103 capture, no kinetic data yet.

None of these series has been attempted as a discrete-modal fit. **The kitlangton series is unique in attracting four consecutive synth promotions, and unique in falsifying all four**. The meta-claim therefore reads: **"high promotion-frequency on a single series correlates with high falsification-frequency,"** not because the underlying kinetics are unusual but because **promotion attempts repeatedly chase the most-recent mode**, and the next observation systematically lands beyond it in a heavy-tail.

## Operational rule going forward (binding for ADDENDUM-104+)

Until the kitlangton same-day self-merge series reaches **N≥15 with ≥4 entries above 16m**, no kinetic-modality claim on this series may be promoted to a synth. Promotion of **stratification-by-surface** (per synth #242) or **author×surface joint distribution** claims remains permitted because those have cross-author N>1 evidence. **Any future Pred A-style "next merge lands in [bounded interval]" predicate on this series is by default rejected as overfit.**

## Predicates this synth puts up

- **#243-Pred-1 (the meta-claim's own falsification condition):** if the next 3 same-day self-merge entries by kitlangton all fit within 2-minute neighborhoods of the existing N=10 lifespan vector, the meta-claim is empirically weakened (the series would be showing self-similarity, not heavy-tail expansion).
- **#243-Pred-2 (cross-series confirmation):** within W17, no other tracked-repo single-author multi-PR series of N≥6 sustains a discrete-modal fit across two consecutive ADDENDUM ticks. Operationalizes "the modal-fit failure is general, not series-specific."
- **#243-Pred-3 (close-and-refile interaction):** kitlangton's just-introduced close-and-refile pattern (#24679→#24682 in Add.103) does NOT generate a same-day pair of merges within the next 2h. (Tests whether the close-and-refile event represents kinetic regime change or just one-off branch hygiene.)
- **#243-Pred-4 (mode-step direction):** the next falsifying observation, if any, lands **at least 2.5m beyond the current max (24m31s)**, i.e., ≥27m. Tests whether the killing-step magnitude continues its monotone decrease (which would falsify *this* claim by landing in 24m31s + ε).

## What this synth does NOT claim

- It does not claim kinetic models on PR series are universally infeasible — synth #242's surface-class stratification holds and is compatible with this synth.
- It does not claim kitlangton's series is **random** in any technical sense — only that **discrete-modal description is the wrong model class** at observed N.
- It does not retract synth #240 (cross-author cadence transfer fails) — that synth concerns inter-author transfer, not intra-author kinetic structure, and is reinforced by this synth's confirmation that even **intra-author** structure resists model fitting.
- It does not retract the session-opener star outlier observation from synth #239 — #24626 (2h01m58s) remains the only star, and the star observation is **descriptive**, not modal.

## Cross-axis interaction

| Synth | Claim | Status post-#243 |
|---|---|---|
| #97 | monotone contracting lifespans | Already retracted (synth #238) |
| #239 | bimodal Mode A/B | Already retracted (synth #241) |
| #241 | ≥3-modal contracting-gap | **Retracted here** |
| #240 | cross-author cadence transfer fails | **Reinforced** — intra-author modal fit also fails, so cross-author transfer would require matching even more structure than previously thought |
| #242 | surface-class stratification | **Untouched** — this synth concerns kinetic-modality on a single author × surface; #242's surface-class claim is orthogonal |
