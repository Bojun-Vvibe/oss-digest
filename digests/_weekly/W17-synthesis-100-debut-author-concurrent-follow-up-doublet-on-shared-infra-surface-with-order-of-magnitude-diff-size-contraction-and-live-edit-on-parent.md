# W17 Synthesis #100 — Debut-author concurrent follow-up doublet on shared infra surface, with order-of-magnitude diff-size contraction and live edit on the parent PR after the follow-up opens

**Anchor window:** 2026-04-25T18:15:27Z → 18:40:09Z (24m42s).
**Anchor repo:** anomalyco/opencode.
**Anchor actor:** `rudraksha-avatar` (debut author — first appearance in the W17 corpus is PR #24360).
**Anchor surface:** the opencode installer script (`install`).

## The shape

A debut author opens a high-blast-radius PR on a shared infra surface (the installer script). Within 8 minutes, the **same author** opens a **second PR on the same surface**, two orders of magnitude smaller. Within an additional 17 minutes, the author **pushes new content to the first PR while the second PR is still open**. Both PRs are unmerged at window close. The second PR is **not a stack child** — it has no Fixes / Closes / Stacked-on / Depends-on reference to the first.

This is **not** synth #93 (first-appearance author debut as four-PR introduction): N is wrong, surface is shared not disjoint, and #93 required four PRs in a single rapid burst. This is **not** synth #94 (back-to-back-merge pair): both PRs here are unmerged. This is **not** synth #97 (shared-spec-file co-touch trio): the shared object here is a **production script**, not a spec file; the author is a debut, not an established maintainer.

## The two members

| PR | Opened | Title | Diff | Files | State at window close |
|---|---|---|---|---|---|
| [anomalyco/opencode#24360] | 18:15:27Z | "Improve installer script with production-ready features" | **+483/-385** | 1 (`install`) | OPEN, head SHA `84233c87` (mutated from `6c3ae3cd` at 18:40:09Z) |
| [anomalyco/opencode#24362] | 18:23:07Z | "refactor(opencode): enhance install script and turborepo setup" | **+10/-6** | 1 (`install`) | OPEN, head SHA `acfc8811` (unchanged) |

**Inter-PR-open gap: 7m40s.**
**Diff-size ratio (first/second): 868/16 = 54.25×** (additions: 48.3×, deletions: 64.2×).
**Files-touched intersection: 100%** (both PRs touch only `install`).

## Why "debut author" matters here

A first-appearance author opening **two** PRs on the same single-file production-infra surface within 8 minutes signals one of three states:
1. **Vendoring drop**: the author imported a fork and is now slicing it into the upstream in two passes.
2. **Self-correction**: PR #1 was opened with mistakes the author noticed during the open process and PR #2 is a corrective pass.
3. **Stack-without-a-stack-tool**: the author intends a logical sequencing (PR #2 must apply on top of PR #1) but did not declare it via a stack/dependency mechanism.

The diff-size ratio (54×) and the title verbs ("improve … production-ready features" vs "enhance … script and turborepo setup") argue against (1) and (2): a vendoring drop usually has a single mass-import PR, not a doublet; a self-correction usually has a smaller deletion-heavy second PR, not a small symmetric one. The most plausible state is **(3) implicit stack** — but with no declared dependency, reviewers must infer the order, and a maintainer merging PR #2 first would leave the installer in an inconsistent state.

## Why the live edit on the parent PR matters

PR #24360's head SHA mutates from `6c3ae3cd` to `84233c87` at 18:40:09Z — **17m02s after PR #24362 opens**. This means the author is **actively editing PR #24360 while PR #24362 is open and not yet merged**. Two implicit-stack failure modes follow:
- If PR #24362 was constructed from a snapshot of PR #24360's pre-mutation tree (`6c3ae3cd`), and PR #24360 mutates, then PR #24362's diff base is now stale. A naive rebase of #24362 onto current `dev` plus #24360 would re-conflict.
- If PR #24362 is independent of PR #24360's content (i.e., the author maintains them as parallel hypotheses on the installer surface), then **only one can merge**. The pair is mutually exclusive at the merge gate.

Without explicit declaration, the maintainer reviewing this surface must reverse-engineer the author's intent.

## The 100% file overlap is the load-bearing signal

Many same-author doublets touch overlapping surface sets. What makes this one synth-worthy is that the **intersection is the entire diff**: there is no third file, no test file, no spec file, no docs change. Both PRs are **single-file changes on the exact same file**. This is structurally distinct from:
- **Synth #94** (same-author same-product-surface diff-disjoint back-to-back-merge pair): the diffs in #94 are **disjoint** within a shared surface area. Here the diffs are not disjoint — both rewrite the installer's core flow.
- **Synth #97 / #99** (shared spec-anchor across N=3-4 self-merge series): the spec-anchor is **co-touched alongside other distinct surfaces**; here the installer is **the only surface**.
- **Synth #91** (single-author triplet self-merge metronome on disjoint surfaces): defining property of #91 is **disjoint surfaces**; this is the inverse — total surface convergence on a single file.

## Falsifiable predictions

1. If a maintainer merges PR #24362 (the smaller one) before PR #24360, PR #24360 will require a force-push rebase of ≥50 lines; the author's live edit at 18:40:09Z is most likely preparing for that rebase.
2. If neither PR merges within 24 hours of #24362's open, the maintainer is treating the doublet as ambiguous and waiting on the author to declare a stack relationship explicitly.
3. If a third installer-surface PR appears from the same author within the next window, the doublet is the leading edge of a **debut-author series rollout** and #100 should be reframed as a **debut-author serial-rewrite signature**, not a doublet signature.
4. If the doublet resolves with **PR #24360 merged and PR #24362 closed-unmerged**, the second PR was a self-correction (interpretation 2 above). Conversely, if **PR #24362 merged and PR #24360 closed-unmerged**, the first PR was a draft-by-mistake and the second was the real intent.

## Distinctness from prior synths

- **vs synth #93** (first-appearance author debut as four-pr introduction with three-pr rapid not-same-second burst): #93 requires N=4 and **disjoint surfaces** (debut author shows breadth). #100 is N=2 and **converged surface** (debut author shows depth on one file).
- **vs synth #94** (same-author same-product-surface diff-disjoint back-to-back-merge pair nested in multi-author merge wave): #94 requires merges; #100 has zero merges. #94 requires diff-disjoint within a surface; #100 has diff-overlap within a single file.
- **vs synth #88** (aged-pr self-close pair bookending fresh surface open-merge cycle): #88 is a **close pair**; #100 is an **open pair**.
- **vs synth #50** (post-own-merge cascade): #50 requires a merge to seed the cascade; #100 has no seed merge.
- **vs synth #97** (shared spec-anchor self-merge series): the shared object in #97 is a spec file (intent contract); the shared object in #100 is a production script (implementation surface). Different risk profile.

## Risk lens

- **Installer regression risk**: the opencode `install` script is the entry point for new users. A first-time-author rewriting +483/-385 of a 1-file installer is the highest-blast-radius change a debut can make in this codebase. A second concurrent PR on the same file by the same author elevates the risk further: any merge ordering ambiguity could ship a half-applied rewrite.
- **Reviewer cognitive load**: a reviewer looking at the second PR (#24362) in isolation sees a clean +10/-6 refactor. The same reviewer looking at the first PR (#24360) sees a +483/-385 mass rewrite. The two diffs have **no common diff hunks** at a line level even though they touch the same file — meaning the reviewer must hold both versions of the installer in their head simultaneously to evaluate either.
- **Detector calibration**: the same-author same-file pair detector should treat 100% file-overlap doublets by debut authors as a **distinct alarm category** from established-author doublets. The signal-to-noise for "this needs a stack relationship declared" is higher when the author has no prior PR history in the repo.
- **Anti-pattern flag**: implicit stacks without declaration are a known source of merge accidents. A repo bot that detects "two open PRs by the same author touching exactly the same file set with non-empty diff overlap" and auto-comments "consider declaring a Depends-on relationship" would have caught this case.
