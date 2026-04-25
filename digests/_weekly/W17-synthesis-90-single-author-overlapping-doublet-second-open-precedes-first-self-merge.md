# W17 Synthesis #90 — Single-author overlapping doublet: second-PR open precedes first-PR self-merge

**Window:** 2026-04-25 14:38:34Z → 14:46:17Z (7m43s).
**Cited PRs:** `anomalyco/opencode#24305`, `anomalyco/opencode#24309`.

## The shape, in one sentence

`@thdxr` opens `#24305` (+1/-10, 1 file, surface: spawn-runtime cleanup) at 14:38:34Z; **6m46s later, with #24305 still open, he opens `#24309`** (+218/-218, 166 files, surface: package-rename refactor) at 14:45:20Z; **57 seconds after that, while #24309 is still very much in-flight, he self-merges #24305** at 14:46:17Z. At peak overlap, the same author has **two of his own open PRs visible simultaneously on the same repo on disjoint surfaces**, and the larger/younger PR's *open* event **precedes** the smaller/older PR's *merge* event by under a minute.

## Why it doesn't fit any prior synth

| Prior synth | What it catalogues | Why this is different |
|---|---|---|
| #41 | Stacked-PR rejection on parent merge | These two PRs are not stacked; #24309 doesn't depend on #24305. |
| #50 | Same-author **post-own-merge** cascade | #50 is **merge-then-open** (sequential, no overlap window). This is **open-then-merge** with a 57s overlap — the *opposite* temporal order. The two PRs are simultaneously open for ~57s. |
| #52 | Overlapping double-jump close-and-refile | #52 is close+refile on the *same* surface. Here both PRs land (one merged, one still iterating); surfaces are disjoint (spawn-runtime vs package-rename). |
| #65 | Single-author micro-burst with self-merge inside | #65's merge is *inside* a same-surface burst. Here the merge is on a **different** PR than the most-recent open, and on a **different surface**. |
| #70 / #71 | Vendor self-onboarding | No vendor; same-author internal refactor. |
| #74 / #75 / #76 | Tag/cohort waves | Single author, not a wave. |
| #78 / #88 | Single-author backlog prune with fresh open | No aged closes; both PRs are minutes old at decisive event-time. |
| #80 / #81 / #82 / #83 | Intra-author cadence shapes | Cadence framing reduces this to "two events 6m46s apart" — but the load-bearing fact is the *overlap* (open-before-merge), not the spacing. |
| #84 | Same-second long-tail co-bump | 6m46s gap on opens, 57s gap between second-open and first-merge — neither is sub-second mechanical. |
| #85 / #87 | Sub-10s same-author doublet, possibly half-merged | #85's gap is 9s; here the gap between opens is 6m46s (~45× wider). #87 catalogues asymmetric half-merge of a sub-10s doublet — here the doublet is **wide-spaced** and the merge fires on the *first* PR (smaller, older), not the second. |
| #86 | Cadence dilation with surface jump | This is a *jump* with a *fresh open* during the gap, not a quiet dilation. |
| #89 | Cross-repo author-handoff refile | Single author, single repo, no handoff. |

Synth #90's nearest neighbor is **#50** (post-own-merge cascade). The decisive difference is **temporal order**: #50 is `merge(A) → open(B)`; synth #90 is `open(A) → open(B) → merge(A)`. The presence of an **overlap window** where both PRs are open is the new fact.

## Load-bearing observations

- **#24305 is small and surgical** (+1/-10, 1 file, spawn-runtime cleanup — net-deletion of 9 lines). Self-merge in 7m43s is consistent with a "quick cleanup, no review needed" workflow.
- **#24309 is large and mechanical** (+218/-218, 166 files — pure rename of `shared` package to `core`). The diff is byte-balanced (additions = deletions = 218) which is the unambiguous signature of a rename refactor with no logic change. Mechanical-rename PRs are typically prepared offline and submitted as a single big-bang to minimize merge-conflict exposure.
- **The temporal sequence implies the author was holding the rename PR ready while the cleanup PR was still open.** Specifically: the cleanup PR was opened first (14:38:34Z), reviewed (or not) for 6m46s, then the rename was fired (14:45:20Z), and then 57s later the cleanup self-merged (14:46:17Z). The author chose to **stage the rename open before retiring the cleanup** rather than merge-then-open.
- **Both PRs target `dev` branch.** No base-branch divergence; the surfaces are genuinely disjoint within the same target.
- **The 57s gap between #24309 open and #24305 merge is not random.** It's long enough that a merge button click was deliberate (not a fat-finger), short enough that the author was clearly orchestrating both PRs in one mental session. The author did not wait to see #24309's CI before merging #24305.

## Mechanism hypothesis

`@thdxr` is doing **maintainer-style serial refactor staging**: the small cleanup PR (`#24305`) is a precursor that he wants in `dev` *before* the big rename PR (`#24309`) merges, but he wants the rename to be **publicly visible and accumulating CI signal in parallel** rather than after the cleanup lands. The order `open(A) → open(B) → merge(A)` minimizes the "rename PR sits in queue with no CI yet" window: by the time the cleanup merges, the rename has already been open for 57s and is partway through its first CI cycle.

The reverse order (merge cleanup first, *then* open rename) would have served the same dependency, but with an extra 57s of CI-idle on the rename. The chosen order **trades a 57s "two-of-my-own-PRs-open" window for 57s less CI-idle on the bigger PR.** This is consistent with a maintainer-class author optimizing for end-to-end refactor wall-clock, not for queue-cleanliness.

The 166-file rename is too risky to merge same-session as opening, which is why **only #24305 self-merged**; #24309 is still open and likely will be reviewed asynchronously (or self-merged after CI greens).

## Falsification cases — what would invalidate this lens

1. **If `#24309` is closed unmerged within ~24h**, the rename was abandoned and the orchestration cost (deliberate two-open window) bought nothing — the lens then collapses to "author opened a rename PR that didn't survive review," and the overlap was incidental.
2. **If `#24309` self-merges within ~5 minutes of `#24305`'s merge** (i.e., within ~14:51Z), the overlap was vestigial — the author always intended to merge both quickly and the temporal order was random. The lens needs the rename to *linger* for the orchestration interpretation to be load-bearing.
3. **If a future `@thdxr` PR pair shows the opposite order (merge-then-open with no overlap)**, the open-before-merge ordering is not his habit; this instance is an artifact, not a workflow. Lens reduces to a single-instance curiosity.
4. **If the cleanup `#24305` is reverted within ~7 days**, the precursor was wrong and the orchestration logic (cleanup-must-precede-rename) was misjudged — the overlap was theater.
5. **If other opencode maintainers (`kitlangton`, `noahbentusi`, etc.) show the same open-before-merge ordering on disjoint-surface pairs in W17–W18**, this is a *project-wide* maintainer convention, not a `@thdxr` personal habit — strengthens the lens but reframes its scope.

## Predictive value

If the lens holds:

1. **`#24309` will accumulate at least one CI cycle of green/red signal between 14:46:17Z and any merge attempt** — i.e., the author will *not* self-merge #24309 in the first 5 minutes after #24305's merge. If he does, the orchestration was unrelated to CI signal accumulation and the lens collapses.
2. **A future `@thdxr` precursor+refactor pair in W17–W18 will reproduce the open-precursor → open-refactor → merge-precursor ordering**, with the second-open preceding the first-merge by ~30–120 seconds. If the next pair is sequential (merge-then-open), the lens fails on cohort-instance-count = 1.
3. **The opencode `dev` branch will show `#24309` merged within ~24h** (renames are time-sensitive because every day open multiplies the merge-conflict surface across 166 files). If it sits open for >3 days, the orchestration claim about "minimizing CI-idle on the bigger PR" is suspect — there was no urgency.
4. **If `@kitlangton`'s 14:42Z micro-burst (open #24308 → self-merge #24258 35s later, on disjoint surfaces, Addendum 22) is structurally similar but tighter**, the open-before-merge-on-disjoint-surface pattern is **opencode-maintainer-wide**, not personal. The two events are 4 minutes apart in the same repo by different maintainers — strong circumstantial evidence for a shared workflow norm.

## Cited PRs

- `anomalyco/opencode#24305` — sha `761249eed235` — opened 14:38:34Z by `@thdxr`, self-merged 14:46:17Z (lifespan 7m43s), +1/-10, 1 file, *"refactor: remove lazy cross-spawn runtime"*
- `anomalyco/opencode#24309` — sha `3dec86b2e036` — opened 14:45:20Z by `@thdxr`, **still open at end of window**, +218/-218, 166 files (mechanical package rename `shared` → `core`), *"refactor: rename shared package to core"*

## Coupling to synth #88 (`@aibrahim-oai` cascade) and synth #50

- **vs. synth #50 (post-own-merge cascade):** the cascade direction is inverted. #50: merge first, then open the next thing. #90: open the next thing first, then merge.
- **vs. synth #88 (Q-shape with aged book-ends):** synth #88 includes aged self-closes around a fresh open-merge cycle. Synth #90 has no aged events at all — both PRs are minutes old. The orchestration is about **near-term staging**, not backlog triage.
- **Combined with `@kitlangton` Addendum 22 micro-burst** (open #24308 → 35s → self-merge #24258, disjoint surfaces, no overlap because #24258 was 9h old): the opencode maintainer cohort is **producing two distinct shapes of "open-something-while-merging-something-else"** within 4 minutes of each other on the same day. Whether they share a workflow norm or are independently arriving at the same orchestration is the open question for synth #91+.
