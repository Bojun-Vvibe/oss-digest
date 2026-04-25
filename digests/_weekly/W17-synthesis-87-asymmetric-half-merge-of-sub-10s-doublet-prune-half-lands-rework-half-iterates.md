# W17 Synthesis #87 — Same-author self-merge of the deletion-heavy half of a sub-10-second doublet, with the additive half left open and iterating

**Window anchor:** Addendum 21 (2026-04-25 13:30Z–14:20Z), with backreference to Addendum 20 and synthesis #85.

## Lens

Synthesis #85 catalogued the **sub-10-second same-author cross-PR doublet on adjacent surfaces** (codex #19524 + #19526, opened 9 seconds apart at 13:21:30Z and 13:21:39Z by `aibrahim-oai`) and predicted the two PRs would "merge or close as a coupled pair within hours, not days." Addendum 21 falsifies the *coupled* part of that prediction while confirming the *fast* part: **only the deletion-heavy half (#19524, +3/-493) merged, and it merged 14m29s after open via author self-merge; the additive ordering/visibility half (#19526) remains open and is now iterating with a fresh head-SHA push** (`fa4b5dcdd4e5` → `34f1839017d7`) **5m14s after its sibling landed.**

This synthesis isolates the **asymmetric-half-merge shape** of the sub-10s doublet: when an author files two adjacent PRs at sub-typing latency, **the deletion half tends to land first via self-merge, and the additive half tends to remain in iteration**. The lens predicts that doublets composed of "prune" + "rework" will preferentially shed the prune half early (it has lower review-surface area, fewer behavior-change paths, and is naturally bracketing) while the rework half lingers under iteration. The deletion half acts as a **landing-strip-clearing maneuver** for the additive half.

This is **structurally distinct** from synth #85 (which was about the *open* shape of the doublet) and from synth #41 (stacked PR rejected after parent merged — that is review-driven rejection, not author-driven self-merge). It is also distinct from synth #65 (single-author micro-burst with self-merge inside the burst window) because:

1. Synth #65's self-merge was on **the same surface as the rest of the burst** (one PR among siblings, all on one surface);
2. The synth #85 doublet here had its **two halves on adjacent sub-surfaces of one parent surface** (codex-mcp visibility vs codex-mcp pruning);
3. The self-merge here is **explicitly the half with net-negative diff** (+3/-493: 99.4% deletion ratio).

The lens therefore is: *"asymmetric self-merge of doublet, prune-half lands fast, rework-half iterates."*

## Anchor evidence — `aibrahim-oai` codex doublet (Addendums 20 → 21)

| Event # | Time (Z) | PR | Action | Δ from prior | Net diff | Surface |
|---:|---|---|---|---|---|---|
| 1 | 13:21:30 | #19526 | OPEN | — | (additive, ordering) | codex-mcp item-ordering / visibility |
| 2 | 13:21:39 | #19524 | OPEN | +9s | (heavy deletion: -493 net) | codex-mcp API pruning + duplicate helpers |
| 3 | 13:36:08 | #19524 | **MERGED by author (self)** | +14m29s | +3/-493 | (same) |
| 4 | 13:41:22 | #19526 | refresh, **head SHA bumped** | +5m14s | (real push, not no-op) | codex-mcp item-ordering / visibility |

Load-bearing observations:

- **#19524 self-merged by `aibrahim-oai`** (`mergedBy.login = aibrahim-oai`), no maintainer co-merger, no review-required gate cleared visibly. This is **the same author who opened it 14m29s earlier** taking direct merge action.
- **The merged half is +3/-493** — i.e., 493 lines deleted, 3 lines added. By pure line-diff this is a **99.4% deletion PR**. Pruning this kind of code (unused mcp-API and duplicate helpers, per the title) reduces the surface area of #19526 — its sibling — *before* #19526 itself iterates.
- **#19526's first post-merge action** is a real head-SHA push at 13:41:22Z (5m14s after the sibling merged). The author is iterating the surviving half **immediately against the smaller post-merge surface**.
- **#19526 is the half that survives** because additive ordering/visibility changes have higher review surface (semantic behavior change visible in mcp-client output ordering) than deletion of unreachable helper code.

## Falsification cases — what would invalidate this lens

1. **If #19526 closes unmerged within the next 2–4 hours**, the asymmetry is not "prune-lands-rework-iterates"; it is "abandon both halves with one accidental landing." That collapses the lens into a less interesting "prune-half got merged, rework-half got pruned-too" shape.
2. **If #19526 self-merges by the same author within the next ~1 hour**, the asymmetry was just a 5-minute scheduling artifact; the doublet halves are still effectively coupled. The lens then weakens to "doublet halves merge serially within ~20 minutes" rather than "the prune half lands early and the rework half iterates."
3. **If a future doublet observed in W17 inverts the pattern** (the additive half self-merges first while the deletion half iterates), the asymmetry has no preferred direction and the lens fails.
4. **If the #19524 merge is reverted within ~hours by maintainer pushback**, the self-merge was not a stable landing and the "landing-strip-clearing" framing is wrong; it was instead a retracted maneuver.

## Distinctness from prior synth

| Synth | Pattern | This synth differs by |
|---|---|---|
| #41 | Stacked PR rejected after parent merged | Author self-merges; not review-driven rejection; halves are not stacked |
| #65 | Single-author micro-burst with self-merge inside burst | Same surface in #65; here halves are on adjacent sub-surfaces; here merge is asymmetric (only one half) |
| #78 | Single-author backlog prune with fresh open injection | Prune is *aged backlog*; here prune is a **fresh same-day open** (#19524 opened 14m29s before its own merge) |
| #82 | Duplicate PR convergence by independent authors | Single author here, not multi-author |
| #85 | Sub-10s same-author doublet (open shape) | This is the **landing shape** of the same doublet, asymmetric and prune-first |

Synth #87 is best read as a **co-published landing-shape companion to synth #85**: synth #85 catalogued the open burst, synth #87 catalogues what landing of one half looks like in the same author's hands.

## Why "prune-half first" is plausible mechanism

Three independent reasons converge on the same prediction:

1. **Smaller review surface area.** Net-deletion PRs (especially of duplicate helpers and unreachable API) have low review-surface: reviewers verify the code is actually unused, then merge. The decision is binary and fast.
2. **Self-merge ergonomics.** A self-merging author is more comfortable taking direct merge action on a deletion than on an additive behavior change. Self-merge of net-additive code under no review is a stronger trust violation than self-merge of net-deletion. Authors auto-throttle accordingly.
3. **Surface preparation.** Landing the prune *before* iterating the rework means the rework PR's diff is computed against the smaller post-prune tree — fewer conflicts, smaller PR size, easier review on whatever co-reviewer eventually shows up. This is a **rebase-cost-minimization** strategy disguised as a doublet.

If any of these three break (e.g., the author starts self-merging the additive half too), the lens loses one of its mechanistic legs.

## Predictive value

If the lens holds, expect:

1. **#19526 to merge in the next 2–8 hours** (longer than the 14m29s it took #19524, but not days), via *either* author self-merge *or* a `*-oai` cohort co-author merge. Specifically: **not by `aibrahim-oai` alone** if the additive-half-self-throttling reason (2) above is real.
2. **Future sub-10s doublets in codex by mcp-cohort accounts** to show the same asymmetric-half-merge shape (deletion-half lands first, additive-half iterates), if they appear at all in W17–W19.
3. **No corresponding asymmetric-half-merge in repos without strong self-merge norms** (opencode and litellm both have higher merge-by-maintainer ratios in W17 data than codex's mcp cohort) — meaning this lens is conditional on **author-author or cohort-cohort merge culture**, not a universal shape.

## Cited PRs

- `openai/codex#19524` — sha `8a3719048a40` — self-merged 13:36:08Z by `aibrahim-oai`, +3/-493
- `openai/codex#19526` — sha `34f1839017d7` (was `fa4b5dcdd4e5`) — open, refreshed 13:41:22Z
- `openai/codex#18787` — sha `5c85133b552b` — closed unmerged 13:18:18Z (background; the prior aged self-close that established the abandon-then-pivot pattern)
