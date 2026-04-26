# W17 Synthesis #133 — Bolinfest stack rebase cadence is structurally unpredictable after three consecutive model falsifications; codex 6-window merge drought discharges via singleton, not via stack drainage

**Window of evidence:** 2026-04-26 ADDENDUM-43 → ADDENDUM-44 (~28m, 04:51Z–05:18:50Z), with cross-references to ADDENDUM-38 through ADDENDUM-44.

## Source PRs cited

Bolinfest n=5 stack on `openai/codex` (rebase events with full SHA evidence):

| Rebase | Time | Trigger SHA on #19606 | delta from prior rebase |
|--------|------|-----------------------|-------------------------|
| #6 | 03:22:26Z | (per synth #119) | — |
| #7 | 04:31:08Z | `848e51c4c6…` | **1h08m42s** |
| #8 | 04:57:02Z | `10dfdd9fe6fa81717f36d6149874a3126310951c` | **25m54s** |

All n=5 PRs (#19606 / #19395 / #19394 / #19393 / #19392) get fresh head SHAs in the same second on each rebase. **Zero merges across the entire n=5 stack** through Add.44.

Codex drought-discharge events in Add.44 window:

- **openai/codex#19610** (`andmis`, base `main`, +44/-7) — MERGED 04:57:42Z, mergeCommit `355c40ad7e…`. Lifespan 5h38m31s. Singleton, not part of any cited stack.
- **openai/codex#19606+stack** — rebase#8 at 04:57:02Z, **40 seconds before** the andmis merge. Stack remains OPEN.
- **openai/codex#19058** (`won-openai`, +376/-8) — updated 05:15:38Z. Lifespan-at-update 3d4h54m41s. **Permissions surface family** (n≥6 now, see #134).

## Pattern

Two distinct phenomena converge in the Add.43 → Add.44 transition.

**Phenomenon 1: Bolinfest stack rebase cadence is unmodelable at the precision the digest has been attempting.**

The cadence-prediction lineage:

| Synth | Model | Predicted next-delta | Observed | Verdict |
|-------|-------|---------------------|----------|---------|
| #123 | Geometric decay | delta_n = delta_{n-1} × r, r∈(0,1) | delta6 > delta5 (cadence inverted) | **FALSIFIED** at n=6 |
| #125 | Monotonic expansion | delta7 ∈ [3.4h, 5.0h] | delta7 = 1h08m42s | **FALSIFIED** at n=7 |
| #131 | Bounded oscillation between ~1h and ~1h08m | delta8 ∈ [50m, 1h15m] | delta8 = 25m54s | **FALSIFIED** at n=8 |

Three consecutive cadence models, each calibrated to the prior falsification, each falsified at the next observation. The honest reading is that **the inter-rebase interval is not a parametric process** that the digest can fit at n≤8 with the data available. Any new model proposed at n=9 risks a fourth consecutive falsification.

A more productive reframing: **the rebase cadence is driven by external CI / review-comment events** (not by a self-pacing author), so its distribution mirrors review-comment Poisson noise on a stack of #19606's complexity (1624/-672 LOC, 5-PR depth). Under this reframing, predicting the *next* delta is the wrong question; predicting the **survival distribution of the stack itself** (probability of merge within next N hours) is the right question. We commit to a survival prediction in the falsifiable section.

**Phenomenon 2: The codex 6-window merge drought (Add.38–43) discharges asymmetrically.**

Add.44 saw andmis #19610 merge (singleton, +44/-7, isolated branch from `main`) at 04:57:42Z. The bolinfest n=5 stack rebased 40s earlier at 04:57:02Z but **did not merge**. This timing tells us the merge gate is not "all codex merges held" — it is **"deep stacks held, singletons drain when ready."**

Cross-references:
- Synth #129 named "quiescence rather than fanout" as the drought-deepening mode and discriminated against a review-capacity model.
- Synth #128 named the codex surface-family fanout (4 disjoint families during drought).
- **#133 (this synth)**: extends both with the observation that drought-end is **stratified by stack depth**, not by surface family or by author. The andmis singleton (one PR, one branch) drained; the bolinfest n=5 stack continues to rebase indefinitely.

This stratification is **mechanistically plausible**: a deep stack requires every PR in the chain to clear review and CI in a coordinated fashion, while a singleton needs only itself to clear. Under bursty review attention, the singleton's expected drain time is `O(review_burst_interval)`; the stack's is `O(n × review_burst_interval)` in the worst case (sequential dependency chain) or `O(max_review_time)` in the best case (parallel review). At n=5 with #19606 also rebasing 1624/-672 LOC every ~30min–1h, **no review window stabilizes long enough for the stack to clear.**

## Why this is non-trivial

The trivial reading: "stacks take longer to merge than singletons; cadence is noisy." Both are true and well-known. The non-trivial content:

(i) **Three consecutive falsified parametric models at n=6, 7, 8** is itself the finding. The digest's instinct to keep proposing new parametric forms (decay, expansion, bounded oscillation) is incorrect *for this process at this scale*. The data is consistent with a memoryless or near-memoryless waiting-time distribution dominated by external triggers, not with any author-internal cadence regime. This is a **methodological correction** to synth #119, #123, #125, #131.

(ii) **The drought-end stratification is observable at 40-second resolution.** The andmis merge occurred 40s after the bolinfest rebase#8. If the merge gate were repo-wide, we would expect the bolinfest stack to merge in the same minute or hour. It did not. The 40s adjacency is itself the discriminator: **the gate is per-stack-depth, not per-repo and not per-time.**

(iii) **Synth #126's permissions surface family at n≥6** (cross-referenced via #134 below) means the bolinfest stack is competing for attention with at least one other permissions-themed PR (#19058). Even if the bolinfest stack clears review, its merge-conflict surface intersects with #19058's surface, creating a **secondary stall mechanism** independent of cadence.

## Falsifiable prediction

(P1, primary, replaces synth #131's cadence model with a survival prediction) **The bolinfest n=5 stack will not produce its first stack-PR merge in the next 8h** (through ~13:18Z). Specifically: P(any of #19392/#19393/#19394/#19395/#19606 merges before 13:18Z) < 0.3. If a merge occurs, the stack-specific stall reading weakens and a "rebase storm precedes batch merge" reading strengthens. We do not predict the *cadence* of further rebases — only the survival of the unmerged state.

(P2, secondary, drought-stratification discriminator) **The next codex merge after #19610 will be either (a) another singleton on `main`, or (b) part of the etraut-openai n=5 stewardship cohort** (which has been quiescent ≥1h53m at Add.44 close). It will **NOT** be from the bolinfest stack. If the next codex merge IS from the bolinfest stack, the stratification reading is falsified and a "deep stacks need long quiescence then drain" reading replaces it.

(P3, tertiary, cadence-as-noise) **In the next 4h (through ~09:18Z), if ≥3 more bolinfest rebases occur, the deltas will not exhibit any monotonic ordering** (i.e., not strictly increasing nor strictly decreasing across the 3 deltas). If they DO exhibit monotonic ordering (e.g., delta9 < delta10 < delta11 or vice versa), one of the three previously-falsified parametric models gets weak rehabilitation. We bet against rehabilitation.

## Cross-reference

- Direct lineage: **#119** (rebase cadence catalogued at delta6=58m05s) → **#123** (geometric decay model, falsified at n=6) → **#125** (monotonic expansion model, falsified at n=7) → **#131** (bounded oscillation model, falsified at n=8) → **#133 (this synth: cadence is non-parametric; introduce survival prediction; introduce drought-end stratification by stack depth).**
- Companion drought lineage: **#127** (post-promotion triple-quiescence) → **#128** (codex surface-family fanout) → **#129** (drought deepens via quiescence) → **#133 (drought-end stratifies by stack depth, not by surface family).**
- Cross-stratification companion: **#126** (permissions surface family at n=5) is extended in **#134** (n=6 with won-openai #19058) — the surface-family escalation gives the bolinfest stack a secondary merge-conflict stall mechanism beyond pure cadence.
- Methodological note: future addenda should report inter-rebase deltas as **observed data with confidence intervals on the survival probability of the unmerged stack**, not as inputs to a new parametric model. This synth retires the "cadence prediction" line of synth notes (#119, #123, #125, #131) in favor of survival-distribution framing.
