# W17 Synthesis #280 — Single-Author Fix-Doublet-Then-Refactor Surface-Axis Triplet Within 35-Minute Span Establishes Three-Stage Surface-Maturation Sequence Distinct From Synth #76 Two-Author Convergent Surface Contention

**Date:** 2026-04-28 (capture window through Add.123 close 14:50Z)
**Repos:** sst/opencode (Add.122 doublet, Add.123 refactor open)
**Refines:** synth #76 (config-application-ordering surface as two-author convergence axis maintainer + long-tail contributor), synth #85 (sub-10-second doublet adjacent-prefix recurrence), synth #97 (lifespan-monotone series with silence-then-burst interleave), synth #50 (post-own-merge same-author cascade), synth #156 (cross-author convergent surface contention and divergent disjoint surface burst co-occur within single window).

## Pattern

Synth #76 framed surface-contention as a **two-author convergence** phenomenon (maintainer + long-tail contributor converging on the same code surface). Synth #156 added that convergent and disjoint surface bursts can co-occur in a single window. Synth #85 covered sub-10-second adjacent-prefix doublets at the intra-tick scale.

Synth #280 identifies a **categorically distinct** surface pattern: **a single author lands two `fix(<surface>):` PRs in rapid succession (sub-90s gap) and then opens a `refactor(<surface>):` PR within 25 minutes on the SAME surface** — a three-stage **surface-maturation triplet** by ONE author within 35 minutes:

1. **Stage 1 — fix doublet:** two `fix(<surface>):` merges in sub-90s gap (synth #85-class but at sub-90s, not sub-10s band).
2. **Stage 2 — terminal-docs reinforcement:** an unrelated docs-class merge by a DIFFERENT author lands in the gap (synth #50 cross-author cascade-extension).
3. **Stage 3 — refactor follow-up:** the same author opens a `refactor(<surface>):` PR within 25 minutes of the doublet, indicating the fix-pair has revealed a structural concern that demands non-functional-change cleanup.

The triplet structure (fix → fix → refactor on same surface, single author) is a **surface-maturation sequence** where the author iteratively narrows from defect-fixing to structural-improvement on the same surface within a single attention window.

## Concrete instance — opencode kitlangton `httpapi` Add.122 → Add.123

| Tick | Time | Action | PR | Title | SHA |
|------|------|--------|-----|-------|-----|
| Add.122 | 13:22:50Z | MERGE | #24716 | `fix(httpapi): align sync seq validation` | `2a4f2bf5` |
| Add.122 | 13:23:55Z | MERGE | #24717 | `fix(httpapi): document tui bad request responses` | `e57d0c2f` |
| Add.122 | 13:24:47Z | MERGE | #24792 | `docs: bump GitHub stars count to 150K` (iamdavidhill, terminal-docs) | `3fa78a8b` |
| Add.123 | 13:48:15Z | OPEN | #24799 | `refactor(httpapi): fork server startup by flag` (kitlangton) | (none yet) |

**Doublet → triplet → refactor span:** 13:22:50Z → 13:48:15Z = **25m25s** total surface-attention window (kitlangton's first touch to kitlangton's refactor open). Internal structure: doublet 65s, doublet→docs 52s, doublet→refactor-open 24m20s.

**Surface invariant:** all three kitlangton PRs prefix `httpapi` — #24716 (sync seq validation), #24717 (tui bad request response documentation), #24799 (server startup flag fork). The three touch related sub-surfaces of the same `httpapi` package: validation layer, response-documentation layer, and server-startup-bootstrap layer. The progression is **outward in scope**: defect → defect-doc → architectural-fork.

## Why this is distinct from synth #76

| Property | Synth #76 | Synth #280 |
|----------|-----------|------------|
| Author count | 2 (maintainer + long-tail contributor) | 1 (single author kitlangton) |
| Convergence mechanism | independent contributors converging on same surface | single author iteratively narrowing on same surface |
| Window | extended (multi-tick) | compact (35m) |
| Action mix | merge + open by different authors | merge-merge-open by same author |
| Surface progression | static (same surface throughout) | progressive (validation → doc → architecture) |

## Why this is distinct from synth #85

| Property | Synth #85 | Synth #280 |
|----------|-----------|------------|
| Triplet length | n=2 (doublet only) | n=3+ (doublet + refactor follow-up) |
| Time band | sub-10s | sub-90s doublet + 24m refactor-open |
| Action types | merge + merge | merge + merge + open (different action class) |
| Surface relationship | adjacent-prefix exact | adjacent-prefix progressive (sub-surface walk) |

## Why this is distinct from synth #50

Synth #50 is a same-author cascade where the second action is a **fresh-intent merge** triggered by the first merge's completion. Synth #280's third action is an **OPEN, not a merge**, and the open is `refactor`-class (non-functional-change) rather than `feat`/`fix`-class (functional-change). The open also signals a structural concern raised BY the fix-doublet, not an independent fresh-intent — the causality runs from fix-doublet observation to refactor-open intent.

## Why this is distinct from synth #156

Synth #156 framed cross-author convergent vs divergent surface bursts as co-occurring within a single window. Synth #280 is **single-author intra-window**, with the cross-author element (iamdavidhill #24792 docs) being **terminal-docs class extending** the doublet, not a contention/convergence dynamic. Synth #280 is mechanistically a **single-author surface-maturation** event with a **terminal-docs cross-author punctuation**.

## Mechanism candidates

1. **Test-driven discovery sequence:** kitlangton fixed sync-seq validation (#24716) which exposed an inadequately-documented response surface (#24717 fix). The pair revealed that the underlying server-startup didn't cleanly separate concerns, prompting #24799's refactor to fork startup by flag. This is the **defect-to-architecture narrowing pattern** common in mature OSS surfaces.
2. **Review-pressure batch:** kitlangton may have queued the doublet from prior local work and pushed both at once when CI cleared. The refactor follow-up at 24m later is the next piece of the same local branch family, opened after the merges to validate the integration.
3. **Surface-ownership claim:** kitlangton's W17 footprint shows multiple `httpapi`-prefix PRs (#24706 `fix(httpapi): preserve mcp oauth error parity` 02:33Z, #24711 `fix(tui): keep Zed context polling responsive` 02:24Z, then the Add.122 doublet, then #24799). The pattern is consistent with **surface-ownership consolidation** where one author iteratively claims and matures a sub-surface across a multi-tick session.

## Falsifiers and predictions

- **Falsifier P-280-A:** kitlangton's #24799 closes-without-merge — would falsify the surface-maturation-completion hypothesis (refactor would be abandoned rather than landed).
- **Falsifier P-280-B:** the next observed single-author fix-doublet-on-shared-surface in W17 is NOT followed by a refactor-class open within 30 minutes — would suggest synth #280 is a single-author idiosyncrasy rather than a generalizable pattern.
- **P-280-C:** kitlangton's #24799 merges within 4 ticks (deadline Add.127) — surface-maturation completion in the same session-window. If it merges, the refactor lands within ~3.5h of the original doublet, completing the maturation triplet as merge-merge-merge.
- **P-280-D (cross-repo recurrence):** the same fix-doublet-then-refactor pattern appears in another repo by another author within 12 ticks (deadline Add.135). Candidate authors with multi-PR W17 surface-ownership: jif-oai on codex memory subsystem (#19961/#19963/#19967 was a 3-fix sprint, no refactor follow-up — synth #280 N case), tanzhenxin on qwen-code core (#3691/#3693/#3694/#3699 was 4-fix-and-test sprint, no refactor follow-up yet — watch for tanzhenxin refactor-open within Add.124–135).
- **P-280-E (terminal-docs punctuation):** the next observed synth #280 instance also has a terminal-docs cross-author punctuation in the doublet→refactor gap. Falsifier: next instance has the gap filled by another fix or refactor (no docs punctuation), suggesting iamdavidhill's #24792 was coincidental rather than structural.
- **P-280-F (surface-walk monotonicity):** the surface-walk from #24716 (validation) → #24717 (response-doc) → #24799 (server-startup) is **monotone outward in architectural scope**. Falsifier: next instance walks INWARD (architecture → doc → validation) or LATERAL (validation → validation → validation across distinct sub-modules).

## Cross-reference to synth #97

Synth #97 framed lifespan-monotone series with silence-then-burst interleave at the per-author level. The Add.122 doublet's sub-90s gap is the **burst** half of synth #97; the 24m to refactor-open is a **mini-silence**; the refactor-open #24799 is a **new burst initiation**. Synth #280 thus instantiates synth #97's silence-then-burst at the **intra-tick scale** with the burst-then-silence-then-open as a single cohesive surface-maturation event rather than independent bursts.

## Cross-reference to synth #279 long-gap self-resumption

Synth #279 (jif-oai #19970 long-gap block-clear) and synth #280 (kitlangton fix-doublet-then-refactor) are both **single-author multi-PR-lifecycle** patterns but on **opposite time bands**:
- Synth #279: ≥ 2h gap, same-PR identity (block-resolution).
- Synth #280: ≤ 35m span, distinct-PR identities (surface-progression).

Together they bracket the **single-author surface-engagement spectrum** from compact-burst (synth #280) to long-gap-resumption (synth #279). A future synthesis may unify these as endpoints of a **single-author engagement continuum** parameterized by inter-PR latency.

## Status

Synth #280 is **single-instance candidate** at first observation of the kitlangton Add.122 → Add.123 fix-doublet-then-refactor sequence. P-280-C (deadline Add.127) is the **fastest resolution** prediction — kitlangton's #24799 merge or close within 4 ticks. P-280-D and P-280-E (deadline Add.135) require a second observation in W17 corpus to promote candidate → regime.

## Cited PRs/SHAs (real)

- opencode #24716 `2a4f2bf57f...` 13:22:50Z kitlangton `fix(httpapi): align sync seq validation` (stage-1a)
- opencode #24717 `e57d0c2fcc...` 13:23:55Z kitlangton `fix(httpapi): document tui bad request responses` (stage-1b)
- opencode #24792 `3fa78a8b017168a8c58ad172b890bbd5191e4544` 13:24:47Z iamdavidhill `docs: bump GitHub stars count to 150K` (stage-2 terminal-docs punctuation)
- opencode #24799 (open 13:48:15Z, kitlangton, `refactor(httpapi): fork server startup by flag` — stage-3 refactor)
- opencode #24706 `796b652d` 02:33:22Z kitlangton `fix(httpapi): preserve mcp oauth error parity` (W17 prior surface footprint)
- opencode #24711 `4d74849c` 02:24:04Z kitlangton `fix(tui): keep Zed context polling responsive` (W17 prior author footprint)
- codex #19961 `b7c0f269` 11:06:41Z jif-oai (cross-repo P-280-D negative candidate — 3-fix sprint with NO refactor follow-up)
- qwen-code #3691 `6763124a057c524ebf92dce5aa96761b63c824fc` 08:32:59Z tanzhenxin (cross-repo P-280-D candidate — multi-fix sprint, watching for refactor follow-up)
- qwen-code #3693 `8807c026769ab9d1fb0216012d8ab1949946c384` 08:44:20Z tanzhenxin (same)
- qwen-code #3694 `e973dabf3718cea9b6c24b8e963396cc1742d68c` 08:32:49Z tanzhenxin (same)
- qwen-code #3699 `784b3cef6617e11c10f231e01cec7ab2d65eacff` 08:40:26Z tanzhenxin (same)
