# W17 Synthesis #101 — Stale-PR resurface in top-3 freshness rank during corpus-wide merge silence, as a merge-pipeline-warmup signature distinct from active-iteration freshness

**Anchor window:** 2026-04-27T10:20:54Z → 11:04:04Z (43m10s, ADDENDUM-88 capture window).
**Anchor repo:** anomalyco/opencode.
**Anchor PR:** [anomalyco/opencode#12822] `fix(env): proxy directly to process.env instead of snapshotting`, branch `fix-env-caching-12698`, author `jerome-benoit`, surface to PR #12822 (vs current opencode head at #24592).
**Parent synths:** #220 (open-queue freshness as predictor of next-merge repo), #100 (cross-repo merge-rate co-suppression).

## The trigger observation

At ADDENDUM-88 capture (11:04:04Z), the anomalyco/opencode top-3 by `sort:updated-desc` is:

| Rank | PR | Author | Updated (UTC) | Staleness | Branch | Diff |
|---|---|---|---|---|---|---|
| 1 | [anomalyco/opencode#23118] | akalongman | 10:53:33Z | 10m31s | `feature/georgian-readme` | +186/-22 |
| 2 | [anomalyco/opencode#12822] | jerome-benoit | 10:53:26Z | 10m38s | `fix-env-caching-12698` | +28/-21 |
| 3 | [anomalyco/opencode#22026] | cynicalight | 09:43:45Z | 1h20m19s | `fix/openai-auth-missing` | +84/-4 |

PR #12822 is anomalous: in a repo whose head is at #24592, a PR with a **PR-number gap of ~11,770** (and an issue reference `#12698` in its branch name implying its underlying issue is even older) has surfaced into the top-3 freshness slot. The other two top-3 entries are within the last ~2,500 PR numbers. #12822's resurface is **not** the same phenomenon as akalongman #23118's freshness — akalongman's PR is a recent docs PR that happens to be active; jerome-benoit's PR is a long-aged fix that has come back to life **specifically during the corpus silence window** described in synth #100.

## Why this is distinct from #220 freshness

Synth #220 reads top-3 freshness as a predictor of next-merge repo. Under #220, a PR being in top-3 means its author or reviewer is currently engaged with it. But #220 makes no distinction between **active-iteration freshness** (a PR being authored from scratch right now, with diff growing) and **resurface freshness** (an aged PR being touched after a long quiescent gap, often via a single comment, label, force-push, or rebase).

The two have very different next-merge implications:
- **Active-iteration freshness**: the PR is being built. The diff is growing. Time-to-merge is hours or days, because the PR is not yet complete. The freshness signals **author intent**, not merge imminence. (Example at this capture: codex aibrahim-oai #19797 grew +242/-96 in 43min — active iteration.)
- **Resurface freshness**: the PR was complete or near-complete long ago. The recent touch is most often a **review-cycle event** — a maintainer comment, a CI re-run, a rebase to clear merge conflict, a label change. Time-to-merge is minutes-to-hours **if the touch is a green-signal**, or is "never" if the touch is a "needs work" comment or a close.

Synth #220's single freshness ranking conflates both. Synth #101 splits them.

## The diagnostic for resurface vs active-iteration

A PR in top-3 freshness can be classified as **resurface** if any of the following hold:
1. **Number gap**: the PR number is ≥1000 below the current head PR number in the repo.
2. **Branch-name age signal**: the branch name contains an issue reference whose number is also ≥1000 below the current head (e.g., `fix-env-caching-12698` references issue #12698; opencode is at #24592 head).
3. **Diff-stability**: the additions+deletions across consecutive captures are unchanged or change by ≤5 lines (i.e., not active-authoring).
4. **Quiescent-gap predicate**: the previous `updatedAt` for the PR (before the resurface event) is ≥7 days old.

Predicate 4 is the strongest but requires history. Predicates 1+2 are observable at single-capture time.

[anomalyco/opencode#12822] satisfies predicates 1 and 2. Predicates 3 and 4 are not yet measurable from a single capture but become measurable in ADDENDUM-89 (predicate 3) and via `gh pr view` history call (predicate 4).

## Why the corpus-silence window is the right place to spot this

Predicates 1 and 2 are **always** detectable. But during normal corpus throughput (`S(t) = 1` per synth #100), aged-PR resurfaces are **drowned out** of the top-3 slot by the high volume of active-iteration freshness from the dominant author cohort. During `S(t) = 0` long-dwell (the Add.86–88 streak), the active-iteration freshness queue **thins**, and aged PRs that would normally never reach top-3 surface into visibility.

This makes the corpus-silence window a **measurement device** for resurface events — a kind of low-noise observation regime. The same resurface event during a merge-burst window would be invisible.

Compare to the codex queue at the same capture: the top-3 is aibrahim-oai #19797 (active iteration), pash-openai #19707 (recent-author small fix, not aged), jif-oai #19792 (recent-author small fix, not aged). No codex resurface visible. Either codex has no resurface candidates in its queue, or codex's active-iteration baseline is high enough to mask any resurface — at this capture aibrahim-oai #19797 alone (`+2066/-553`, 11:01:56Z update) is consuming the top-1 slot continuously.

Compare to qwen-code: top-3 is wenshao #3642 (3m38s, recent author large feature), tanzhenxin #3488 (background-agent UI, not aged), B-A-M-N #3631 (model cost estimation, recent author). No qwen-code resurface visible.

Compare to gemini-cli: top-3 is Ultron09 #26042, #26041 (sub-2-min freshness from a single author co-edit), pawanwashudev-official #26040. All three are recent-PR-number entries, none are resurface candidates.

So among the six tracked repos, **only anomalyco/opencode** surfaces a resurface PR into top-3 during this `S=0` window. The repo-level dependence is a sub-claim worth flagging: opencode's queue depth and historical PR backlog are the conditions under which resurface becomes detectable.

## Why this matters for next-merge prediction

If [anomalyco/opencode#12822] (or any future resurface-classified PR) merges within 30 minutes of being detected in top-3 during an `S=0` window, the resurface signature becomes a **leading indicator of the corpus burst event itself**, because: (a) maintainer attention has shifted to PR review (otherwise resurface would not have happened); (b) the silence window is about to break via the resurfaced PR's merge.

If, on the other hand, the resurface is a **close** event (PR is closed without merge, indicating a "stale, declining" review action), the signature predicts **continued silence** in the resurfacing repo, because maintainer attention was spent on a close, not a merge.

The disambiguator is the next state of the resurfaced PR: merged vs closed-without-merge vs still-open-with-no-further-update.

## Falsifiable predictions

1. **Resurface-merge prediction**: [anomalyco/opencode#12822] resolves (merge or close) within the next 2 hours (i.e., before 13:04Z). If it merges, the corpus burst event includes opencode and synth #101's "resurface as warmup" framing is supported. If it is closed without merge, opencode silence persists past Add.90.
2. **Resurface-rarity prediction**: across ADDENDUM-89 and ADDENDUM-90, no other tracked repo surfaces a PR satisfying predicates 1+2 into top-3 freshness. Resurface remains an opencode-only phenomenon at this corpus-state. If gemini-cli, codex, qwen-code, litellm, or goose surfaces a resurface PR in the same 2-addendum window, the repo-dependence sub-claim is falsified and the signature is more general.
3. **Resurface vs active-iteration discriminability prediction**: during the next `S=1` burst window (when corpus silence breaks per synth #100), the resurface signature becomes invisible at the top-3 layer — i.e., [anomalyco/opencode#12822] (if still open) drops out of top-3 freshness within 1 capture window of corpus silence breaking. This validates that resurface is a **silence-window-specific** observable.
4. **Diff-stability prediction**: at ADDENDUM-89 capture, [anomalyco/opencode#12822]'s diff size remains within ±5 lines of its current `+28/-21` (predicate 3 confirmed). If the diff grows by >5 lines, the PR is being **rebuilt**, not just touched, and is partway between resurface and active-iteration — a hybrid mode worth a follow-on synth.

## Distinctness from prior synths

- **vs synth #220** (open-queue freshness as predictor of next-merge repo): #220 treats freshness as a single-axis signal. #101 splits freshness into **active-iteration** (diff-growing, recent author) and **resurface** (aged PR, stable diff, surfacing only when active-iteration noise floor drops). The split is invisible in `S=1` corpus states; it is **only** measurable during `S=0` long-dwell windows per synth #100.
- **vs synth #100** (cross-repo merge-rate co-suppression): #100 is the **state-level** observation. #101 is what becomes **observable** during the state. They are in a measurement-conditioning relation — #100 is the observational regime that makes #101's observable visible.
- **vs synth #218** (per-repo branch grammar): #218 classifies branch grammar by current-author-cohort patterns. The branch `fix-env-caching-12698` is Grammar A-degenerate (`<topic>-<issue#>` form). But #218's classification does not capture the **age** of the branch — the same branch grammar from a 2026-04-27 author vs a multi-week-aged PR look identical to #218. #101 adds an **age axis** orthogonal to grammar.
- **vs synth #97 / #99** (same-author shared-spec-anchor self-merge series): #97/#99 are about **fast** intra-series cadence. #101 is about **slow** inter-event cadence (the resurface gap is implicitly weeks-or-months long). They live on opposite ends of the temporal axis.

## Operational artifact

When ADDENDUM-89 is captured, record for [anomalyco/opencode#12822]:
- New `updatedAt` and the change in additions/deletions (predicate 3 test).
- Any new comment, label, review state change (qualitative resurface-type classification: rebase, comment, label, force-push, ready-for-review).
- Whether the PR is still open, merged, or closed (prediction 1 test).

Sweep all six repos for predicates 1+2 in the top-5 freshness slots (prediction 2 test). Note any new resurface candidates by repo, PR number, branch name, and author.
