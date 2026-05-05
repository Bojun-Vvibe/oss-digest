# W17-synth-695 — sub-mode-4 sub-class E formal definition: N≥5 single-author single-carrier metadata-only mass-touch event with all head OIDs unchanged within <60s clock window — orthogonal to sub-class D (which requires fresh head OIDs); first observed simultaneously in two carriers at Add.358 (evawong-oai codex N=5 + morgmart goose N=7) suggesting tooling-driven workflow signature rather than human-throughput artefact

**Captured**: 2026-05-05T16:16:04Z (Add.358 tick).

**Cross-carrier hypothesis**: Two carriers exhibit the same mass-metadata-touch signature in the same tick by **different authors** on **different surfaces** with **different stack-depths**, but with **identical density signature** (≥5 PRs touched within seconds, all heads unchanged, monotone inter-update gap). This co-occurrence is the diagnostic signature of a **shared upstream cause**: workflow tooling (`gh stack rebase`, `gt stack restack`, label-add scripts, batch-comment automation) rather than coincidental human action.

## Specific PRs cited per carrier (≥3 each, with head SHAs)

### openai/codex (evawong-oai sub-class E primary instance)

- **#21184** evawong-oai `Use direct deny ACLs for Windows metadata sentinels` head `95ef124d6194bd2126c11928cb3973214f9ac63a` updated **16:07:16Z** (head unchanged from Add.353).
- **#21175** evawong-oai `Wire missing Windows metadata to deny sentinel` head `8f93be5b9e21e89802d601fb67596023c858d076` updated **16:07:02Z** (head unchanged).
- **#21174** evawong-oai `Add Windows missing metadata deny sentinel` head `6e60556d73a9df88266e5fe17e2add1e5f9d51f2` updated **16:06:52Z** (head unchanged).
- **#21173** evawong-oai `Wire Windows metadata monitor through sandbox exits` head `0e9394dbd8265f17f4c78d8641009c08bcbad857` updated **16:06:40Z** (head unchanged).
- **#21172** evawong-oai `Add Windows missing metadata monitor runtime` head `6df1455723e4254ce7b7ac59a79d60f5daa0a24e` updated **16:06:24Z** (head unchanged).

**Pattern**: 5 PRs / 52s = **5.77 PRs/min**. Inter-update gaps: 12s + 12s + 12s + 14s = monotone-near-uniform. PR numbers strict-consecutive #21172–21175 + #21184. Surface: stacked Windows-metadata-deny-sentinel security series.

### block/goose (morgmart sub-class E secondary instance, same tick)

- **#9019** morgmart `fix goose2 small-window chat and settings layouts` head `270600151176cdf64acb9d0a35b02477af5f2673` updated **15:50:06Z** (head unchanged from Add.357).
- **#9018** morgmart `keep settings open during window drag` head `fb429659db87defd4713ab0c81d36b8903832344` updated **15:46:38Z**.
- **#9017** morgmart `soften goose2 text selection polish` head `b19db05c0ea80b72a463f22adfb686f35344a173` updated **15:46:36Z**.
- **#9016** morgmart `make collapsed sidebar search actionable` head `169d521f34c86e2053f8d855c5b92b814137f9bf` updated **15:46:33Z**.
- **#9014** morgmart `show unread state for background chat responses` head `ec224a170d8196c831481b33aee588e2533a0efe` updated **15:46:32Z**.
- **#9013** morgmart `add empty sidebar state` head `c2f4ede3c7eef21771714c98cddeabf317e4692d` updated **15:46:30Z**.
- **#9012** morgmart `soften chat code block styling` head `936f5d9e07e5aaeb617afa2c1bf89df41ef278db` updated **15:46:28Z**.
- **#9011** morgmart `polish inline code snippet styling` head `ad0c9f63a90e569882db944c8e9dd0d4b619f45d` updated **15:46:27Z**.

**Pattern**: 7 PRs / 3m39s clock window (with 6 of 7 inside a single 11-second sub-window 15:46:27Z–15:46:38Z). Heads all unchanged from prior bump. Surface: goose2 UI polish.

### corroborating tertiary signature: BerriAI/litellm aryamaddel #27195

- **#27195** aryamaddel `fix: guard against model_info=None in router_strategy callbacks` head `f9645e51864ef67e9abfc1802cbe57edfbef92db` updated **15:46:50Z** (head unchanged from Add.357 `f9645e51`, but updatedAt advanced 15:26:06Z → 15:46:50Z = +20m metadata-touch). N=1 in litellm — **not sub-class E by itself** but corroborates mass-metadata-touch as a cross-carrier common-cause regime within the same wall-clock window 15:46:27Z–16:07:16Z.
- **#27190** dennishenry `fix: replace user api key auth with authorization or cookie for mcp server creation` head `a1cda015b6b28e5745ed390a6487deaf88e336fd` updated 13:23:59Z — control PR (no metadata touch this tick), confirms metadata-touch is selective not global.
- **#27185** Sameerlite `feat(audio_transcription): add NVIDIA Riva STT provider` head `da06ac5448dcb12504708af391a243134e8a04bd` updated 12:34:19Z — control PR (no metadata touch this tick), confirms selectivity.

## Hypothesis (H695): Sub-class E is a tooling-driven workflow signature, distinct from sub-class D human-throughput

**Definition**: Sub-class E is satisfied iff a single author has **N≥5 PRs in the same carrier's top-N open-PR snapshot** with:

- All N head SHAs **unchanged from prior tick**
- All N updatedAt timestamps **within a single ≤60s clock window** (or ≤4min for relaxed-E)
- Inter-update gap **monotone** or **near-uniform** (variance/mean < 0.3)
- PR numbers typically (but not necessarily) strict-consecutive

**Mechanism**: The signature is consistent with one of:

1. **Stack-rebase tooling** (`gt stack restack`, `gh stack sync`, custom git scripts) that pushes empty/no-content updates to N PRs to refresh their base.
2. **Label/milestone batch operations** (`gh pr edit --add-label foo` in a loop) that mutate PR metadata without touching commits.
3. **Comment-batch automation** (post the same comment to N PRs as a status update).
4. **Reviewer-add/remove batch** (`gh pr edit --add-reviewer`) coordinated as a stack-wide review request.

All four mechanisms produce **identical observable signatures** at the gh-api level: head unchanged, updatedAt advances, no new commits.

**Why H695 separates E from D**:

- Sub-class D (synth-693, morgmart Add.357): N≥6 with **distinct head OIDs** — measures **code-throughput** by single author.
- Sub-class E (this synth, evawong-oai + morgmart Add.358): N≥5 with **identical-to-prior head OIDs** — measures **workflow-tooling-throughput** by single author.

The two sub-classes can co-occur in the **same author** (morgmart exhibits both at Add.358: D with N=8 distinct heads opened earlier today + E with N=7 metadata-touched within 3m39s now). They are **independent dimensions**: an author can be high-D + low-E (writes lots of code by hand, doesn't use stack tooling) or low-D + high-E (uses stack tooling on legacy stalled stack, doesn't open new PRs).

## Confirmation/falsification of prior W17 hypotheses

- **REFINES synth-693 sub-class taxonomy**: Sub-classes A, B, C, D were defined by **N + clock-window + cardinality**. Sub-class E adds a fourth axis: **head-stability**. The full sub-mode-4 taxonomy is now:
  - A (iterating-leg): N=2–3, hours, mixed head-stability
  - B (stable-only): N=2, ≥2 ticks frozen, all heads unchanged
  - C (cold-start): N=2, first-time-W17 author
  - D (throughput-burst): N≥6, <40min, all heads distinct (first-commits)
  - **E (tooling-burst, NEW)**: N≥5, <60s (or relaxed ≤4min), all heads unchanged
- **REFINES synth-694 H694 power-law freeze model**: H694 modelled freeze-time as power-law on `time-since-content-iteration`. Sub-class E demonstrates that **author-attention-time is decoupled from head-iteration-time**. Two different freeze metrics now exist: `head-freeze-time` (synth-694 power-law) and `attention-freeze-time` (likely much shorter / different distribution). H694 should be **interpreted as head-freeze only**.
- **REINFORCES synth-691 release-cadence inversion**: opencode (high-cadence carrier) shows **zero sub-class E activity** at Add.358 — confirms that high-cadence carriers eliminate stack-tooling-burst behaviour because stacks merge faster than they accumulate. Codex (low-cadence) and goose (low-cadence) show E. This is a **second mechanism** by which release-cadence inversely couples to multi-PR-mode density.

## Falsifiable predictions (P-695)

- **P-695.A (sub-class E recurrence within 3 ticks, prior 0.55)**: Some author in {evawong-oai, morgmart, jif-oai, yiliang114, B-A-M-N, wenshao} produces another N≥5 metadata-touch within <60s. Stack-tooling users tend to re-invoke their tooling.
- **P-695.B (sub-class E never observed in opencode within W17, prior 0.65)**: opencode's high author-cardinality and high release-cadence preclude the stacked-PR-series substrate that E requires. Falsified by any opencode E-observation.
- **P-695.C (next tick reveals exactly one sub-class E carrier, prior 0.40 vs zero 0.30 vs two 0.20 vs three+ 0.10)** — assuming E is workflow-tooling driven, occurrence rate per tick should follow a sparse Poisson with λ ≈ 0.6.
- **P-695.D (when sub-class E is observed, the same author has N≥1 sub-class B leg in same snapshot, prior 0.75)** — stack-tooling implies stable-head PRs; B is the natural co-occurrence.
- **P-695.E (sub-class E + sub-class D co-occurrence in same author within same tick is rare; observed at most once per W17, prior 0.50 for at-most-once)** — morgmart Add.358 may be unique unless tooling-heavy authors who also code-burst become common.
- **P-695.F (sub-class E inter-update-gap variance/mean ratio remains <0.3 in all future observations, prior 0.70)** — diagnostic of script-driven mechanism. If a future E-event shows ratio ≥0.5, the cause is likely human-batch-clicking rather than scripting.

## Operational consequence

Sub-class E is the first sub-mode-4 sub-class that is **not directly informative about author code-output**. It measures **author tooling sophistication** and **stack-depth maintenance** instead. Future synth files should track D and E **as separate counts**, never collapsing them into a single "multi-PR-mode" tally, because they have **opposite cadence implications**: D is coupled to upcoming high-throughput tick; E is coupled to upcoming **stack-merge or stack-abandonment** event (the metadata refresh is preparation for either action). Predictive value: an author exhibiting E is more likely to close/merge ≥1 of the touched PRs within 2 ticks (testable via P-358.I in Add.358 prediction set).
