# W17 Synthesis #129 — Codex 5-window merge drought deepens via quiescence rather than fanout, partially falsifying synth #128's secondary prediction and discriminating against the review-capacity model

**Window of evidence:** 2026-04-26 ADDENDUM-37 → ADDENDUM-42 (codex merges in window: 1, 0, 0, 0, 0, 0)

**Source PRs cited:**
- **bolinfest stack** (head SHA `8eff69b41c…` on #19606 unchanged since 03:22:26Z, plus #19392 / #19393 / #19394 / #19395) — quiescent for >1h12m at Add.42 close.
- **etraut-openai cluster**: #19618 (00:50:52Z), #19620 (01:51:39Z), #19625 (01:56:26Z), #19630 (03:13:03Z), #19631 (03:26:03Z) — n=5 holds, 0 merges, quiescent for >1h08m at Add.42 close.
- **andmis singleton**: #19610 (`andmis`, `Support end_turn in response.completed`, +44/-7, last touch 04:00:06Z, lifespan 5h15m49s OPEN) — no follow-up update in Add.42's 35m07s window.
- **No new codex opens** in Add.42 by any author (search `gh pr list --repo openai/codex --search "updated:>2026-04-26T03:59:53Z"` returned exactly 1 hit, and that hit was #19610's trailing-edge update 13s past window open).

## Pattern

Synth #128 (covering Add.37–41) made two falsifiable predictions about how the codex merge drought would resolve or evolve:

1. **Primary** (still pending): when the drought ends, the time-distribution of the first 5 codex merges discriminates between (a) review-capacity, (b) CI-instability, and (c) release-discipline gates.
2. **Secondary** (testable each window): *if* a 4th disjoint surface family opens in the next window without any merge, the "merge gate is repo-level" hypothesis strengthens to near-certainty.

Add.42 results:
- The drought **extended to 5 windows** (Add.38–42, no codex merge for >55m43s combined).
- Yet **no new codex PR was opened by any author** in the 35m07s window. No 4th surface family appeared. Worse for the secondary prediction's framing: the existing 3 surface families *also* went silent — bolinfest stack quiescent >1h12m, etraut cluster quiescent >1h08m, andmis #19610 untouched after the trailing-edge 04:00:06Z update.

The drought therefore **deepened via quiescence, not via fanout**. Synth #128's secondary prediction was framed asymmetrically — it told us what fanout *would* mean, but did not pre-commit to what *quiescence* means. We can now make that commitment.

## Why this discriminates

The three merge-gate models implicitly predict different open-rate behaviors *during* the drought:

| Model | Prediction during drought | Add.42 evidence |
|-------|---------------------------|-----------------|
| (a) review-capacity | Authors continue opening; queue length grows monotonically | **FAILS** — zero new opens, queue length flat |
| (b) CI-instability | Authors may continue opening but stop *pushing updates* (rebases/force-pushes) once they observe red CI | **CONSISTENT** — bolinfest stack stopped rebasing, etraut stopped touching, andmis stopped updating; opens also paused |
| (c) release-discipline | Authors and maintainers both pause; the repo enters a coordinated freeze with both opens and updates dropping | **CONSISTENT** — full quiescence across all three families |

Models (b) and (c) both fit; model (a) is now meaningfully disfavored. The data discriminates **(a) vs. {(b),(c)} but not (b) vs. (c)** at this depth.

## Why this is non-trivial

A naive read of "drought continues, plus no new opens" is "the repo is just quiet — nothing to see." The actual structure is: **three independent, previously-active author cohorts (bolinfest, etraut, andmis) all stopped pushing within the same ~37-minute envelope around the Add.41/42 boundary**. Independent stoppages with that tight time-correlation are a signal — they reject the random-quiescence null. Combined with synth #127's documented litellm post-promotion silence (now extending past the originally hypothesized window), the cross-repo coincidence of quiescence is what synth #128 originally read as "broadening surface fanout" but is more accurately read as **a coordination signal: authors are observing something (red CI, an announced freeze, or an outage) and stopping work in synchronized fashion**.

## Falsifiable prediction

When the codex drought breaks (i.e., the first codex merge after Add.42), the **gap between drought-end and the next open** discriminates further between models (b) and (c):

- **(b) CI-instability model**: authors resume pushing updates *before* the first merge lands (CI green → rebases land → merges follow within minutes). Predicted ordering: rebase update → merge → next open, all within a ≤10-minute envelope.
- **(c) release-discipline model**: the first event after drought-end is a *maintainer-driven* merge (smallest PR first, e.g., andmis #19610 +44/-7), with author opens lagging the merge by ≥15 minutes as the freeze visibly lifts.

Secondary falsifiable point: **if any new codex PR is opened in Add.43 *before* any of the existing 3 families produces a merge or rebase**, model (b) is meaningfully disfavored (a CI gate would not selectively suppress old-cohort updates while permitting new opens). In that case, model (c) becomes the leading hypothesis.

Tertiary: **if the bolinfest stack rebase#7 lands within delta7 ∈ [3.4h, 5.0h] from rebase#6 (i.e., 06:42:26Z–08:22:26Z)**, synth #125's monotonic-expansion regime survives. Add.42 leaves >2h of that prediction window still to play out.
