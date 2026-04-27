# W17 Synthesis #100 — Same-author intra-repo same-SHA N=3 closed-refile prelude before a content-amplified single-merge resolution

**Anchor window:** 2026-04-27T03:56:29Z → 12:28:17Z (8h31m48s).
**Anchor repo:** QwenLM/qwen-code.
**Anchor actor:** `dreamWB`.
**Trigger event:** QwenLM/qwen-code#3661 merged at 12:28:17Z (`8349b8569e`, +778/-46 over 5 files).
**Parent / sibling synths:** #89 (cross-repo author handoff identical content refile with preceding open lead), #98 (bot-driven sub-10s N=3 stale PR mass close).

## Why this is distinct

Synth #89 captured **cross-repo** identical-content refile by a **handoff between authors**, with the lead PR remaining **open** at handoff time. Synth #98 captured **bot-driven** sub-10s mass-close of **unrelated** PRs across heterogeneous surfaces. Neither covers the qwen-code dreamWB pattern, in which a **single author**, **inside a single repo**, **files the literal same commit three times under three PR numbers**, has all three closed (mostly self-closed within minutes), and only on the **fourth attempt** — with a **new SHA carrying a substantially amplified diff** — produces a merge.

The structural unit is **N=3 closed-refile prelude → N=4 amplified-resolve**.

## The four members

| PR | Created | Closed/Merged | Lifespan | headRefOid | Status | Diff |
|---|---|---|---|---|---|---|
| QwenLM/qwen-code#3657 | 2026-04-27T03:56:29Z | closed 04:44:28Z | 47m59s | `09549c0d50` | CLOSED | (same content, N≪778 lines) |
| QwenLM/qwen-code#3659 | 2026-04-27T~04:44Z | closed 04:47:16Z | ~3m | `09549c0d50` | CLOSED | identical SHA |
| QwenLM/qwen-code#3660 | 2026-04-27T04:52:12Z | closed 04:53:05Z | **53s** | `09549c0d50` | CLOSED | identical SHA |
| QwenLM/qwen-code#3661 | 2026-04-27T04:53:28Z | merged 12:28:17Z | **7h34m49s** | `8349b8569e` | **MERGED** | **+778/-46** over 5 files |

All three closed siblings carry the **literally identical headRefOid** `09549c0d50f12042d8be278338cfaa20e6dc17a7`. The fourth attempt swaps to a new SHA `8349b8569eabd734f46b76b29cf1435e82f83d6d`. The title is **identical across all four** (`feat(vscode): add tab dot indicator and notification system (#3106)`). The author is the same across all four (`dreamWB`).

## Defining structural properties

1. **N=3 same-SHA closed siblings**, intra-repo, intra-author. The repeated headRefOid is the cryptographic confirmation that the content is byte-identical across the three closed PRs — not "similar," not "rebased onto same base," but literally the same commit object.
2. **Sibling-open cadence is min-scale**: 3657 → 3659 spans ~48m, 3659 → 3660 spans ~5m, 3660 → 3661 spans **76 seconds**. The cadence **accelerates** as siblings close.
3. **Sibling lifespans collapse**: 47m59s → ~3m → **53s**. The author closes each subsequent same-SHA refile faster than the prior.
4. **Pivot on N=4**: the merging member breaks the SHA-identity. It is not a fifth same-SHA refile — it is a new commit with a substantially different (amplified) diff.
5. **Lifespan disparity at the pivot**: closed-sibling mean lifespan ~17m; merging-member lifespan **7h34m49s** — a **27× increase**. The author's iteration-then-close cycle is fast; the merging-member iteration cycle is slow because it actually has to pass review.
6. **Content amplification on the pivot member**: the new SHA carries +778/-46 over 5 files, which (given the closed siblings' apparent lack of substantive content) implies the author's first three filings were either incomplete or failing some structural gate, and the fourth is the "real" submission.

## Falsifiable predictions

1. If a fifth PR is opened by `dreamWB` in QwenLM/qwen-code within 24h carrying yet another same-content variant (whether SHA `8349b8569e` re-applied or a follow-up touching the same `tab dot indicator` surface), the pattern extends to a **rolling refile** rather than a one-shot resolve. Default expectation: no fifth opens; the pattern terminates at #3661.
2. If a different author files an identical-title PR referencing `#3106` (the linked upstream issue) within 7d in qwen-code, the pattern shifts toward **multi-author convergence on a single feature backlog item**, qualifying it for cross-pollination with synth #89's cross-repo handoff form.
3. If the closed siblings' base-branch was the same across all three (`main` or `dev`), the pattern is purely **author iteration**; if any closed sibling targeted a different base, the pattern includes a **base-branch mistargeting** subcomponent — a different failure mode worth distinguishing.
4. The **5-file scope** of the merging diff (`+778/-46 over 5 files`) is small enough that a future synth can test whether N=3-closed-refile preludes correlate with **bounded-scope** features (≤5 files) versus large-scope features (≥20 files). Hypothesis: bounded-scope features are more prone to multiple-refile preludes because the author can re-attempt cheaply.

## Distinctness from prior synths

- **vs #89** (cross-repo author handoff identical content refile with preceding open lead): #89 is **cross-repo** with **author handoff** and a **lead PR that stays open** during handoff. #100 is **intra-repo**, **single-author**, with **leads that close** before the resolution PR. Both share "identical content refile" but differ on every other dimension.
- **vs #98** (bot-driven sub-10s N=3 stale PR mass close across heterogeneous surfaces): #98 is **bot-mediated** and operates on **unrelated** PRs that share only the property of being stale. #100 is **author-mediated** and operates on **same-content** PRs that share the byte-identical commit object.
- **vs #92** (same-second four-PR open tuplet by single author on four disjoint surfaces): #92 is N=4 **simultaneous** opens on **disjoint** surfaces, and all four typically remain open at observation. #100 is N=4 **sequential** opens on a **single** surface, with three closed before the fourth merges.
- **vs #93** (first-appearance author debut as four-PR introduction): #93 captures author debut as four-PR introduction with three-PR rapid burst; #100 captures a **non-debut** author iterating on a **single** feature submission across four PR numbers. The N=4 count is coincidental; the underlying structure is opposite (broad debut vs narrow re-attempt).

## Risk lens

- **PR-number inflation**: dreamWB consumed PR numbers #3657, #3659, #3660, #3661 for what is structurally a single feature submission. Repos that meter contributor reputation by PR count would over-credit this author by 4×; repos that track merged-PR count are unaffected. Detector recommendation: when scoring authors, count distinct merged commit SHAs, not PR numbers.
- **Reviewer load**: the closed siblings each likely triggered CI runs (probable, given the close-after-CI-failure shape of the 53s lifespan on #3660). Three CI runs on identical content is **wasted compute** — a same-SHA detector at the PR-open stage could short-circuit duplicates.
- **Audit-trail opacity**: `gh pr list --state all` returns the four siblings as four entries with three different statuses (3 CLOSED, 1 MERGED). A reviewer searching the merge log will see only #3661. The **iteration history is invisible** unless the closed siblings are also queried. For high-stakes review, the prelude is **non-trivially relevant context** — the merging diff was not the author's first attempt, and the *first attempts failed*. Reviewers who don't know that may give #3661 less scrutiny than warranted.
- **Squash artifact**: the merging SHA `8349b8569e` is unrelated to the closed-sibling SHA `09549c0d50`. There is no cryptographic linkage between the two — the closed siblings' commit is **orphaned** in the repository's commit graph. This is normal for closed PRs but worth noting: searching `git log` for `09549c0d50` in qwen-code's main/dev branch will return nothing.
