# W17 Synthesis #67 — Declared vs inferred multi-PR sequences: when authors signpost their cohort

**Window**: 2026-04-25T05:30Z → 2026-04-25T07:45Z (codex + litellm, ~2h15m cross-author span)
**Anchor exhibits**: openai/codex#19524 (aibrahim-oai, 07:10Z) → openai/codex#19526 (aibrahim-oai, 07:24Z, draft); BerriAI/litellm#26486/#26489/#26490/#26496 (yuneng-berri/stuxf scope-split sequences)
**Cross-references**: extends #51 (auth/ACL surge cohort), #61 (single-author scope-split inside surge), #63 (hot-author multi-surface fanout), #64 (cross-repo same-author cascade)

## Pattern

W17 has produced two structurally different ways for an author to ship a multi-PR sequence on adjacent surfaces in the same calendar day:

1. **Inferred multi-PR cohorts** — the cohort exists in the data, but no PR body or commit message acknowledges the other PRs in the cohort. The reader has to detect the sequence by clustering on author + time + surface family. Examples in W17:
   - `yuneng-berri` 5-merge calendar-day cascade across 6 surface families on litellm (#26464, #26467, #26492, #26493, #26496 — synthesis #63/#64 documented this cohort entirely from external clustering; no PR body says "this is part of a sequence with the other four").
   - `stuxf` 4-PR scope-split on auth/ACL → vector-stores redaction (#26486, #26487, #26488, #26489 — synthesis #61 inferred the scope-split shape; no PR body cross-references the others).
   - `etraut-openai` 4-PR TUI-surface burst on codex (#19510, #19511, #19513, #19514 — synthesis #65 inferred the burst).

2. **Declared multi-PR cohorts** — at least one PR body explicitly names the prior PR(s) in the sequence, framing the new PR as a follow-up to specific earlier work by the same author. Anchor exhibit:
   - `aibrahim-oai` codex-mcp visibility cleanup: #19524 (07:10:04Z, *"Minimize codex-mcp public surface"*) → #19526 (07:24:31Z, *"Order codex-mcp items by visibility"*). #19526's body opens with **"The visibility cleanup in the base PR reduced what `codex-mcp` exposes, but..."** — explicit textual reference to #19524 as "the base PR." The reader does not have to infer the cohort; the author has signposted it.

## Why the distinction matters

The two shapes carry **different signal about author intent and review affordance**:

- **Declared cohorts** create a stack-PR reading order. Reviewers know which PR to read first and which to read second; reviewers can defer the second until the first lands. The cohort is **review-tooling-friendly** (think: Phabricator stack, Graphite stack, or just a `## Why` section that says "follow-up to #N"). When `aibrahim-oai` drafts #19526 explicitly as a follow-up to #19524, it tells reviewers "land #19524 first; #19526 is mechanical reordering on top of that landed surface."
- **Inferred cohorts** create no such signal. Each PR stands on its own; reviewers may merge them in any order, may merge some and leave others, and may not realize that `yuneng-berri`'s #26492 sits on the same auth-ACL surface as `stuxf`'s #26489 and represents the same conceptual hardening. The cohort is **review-tooling-hostile** — the affordance for "this is a sequence" lives only in the reader's head.

## Empirical split in W17

Of the 4 documented multi-PR sequences in the W17 corpus to date:

| Sequence | Author | PR count | Surface(s) | Declared? | Outcome |
|---|---|---|---|---|---|
| #63/#64 yuneng-berri cascade | `yuneng-berri` | 5 merged + 2 open | 6 surface families on litellm | **Inferred** (no cross-references in bodies) | 5 merged in 5h43m, fast |
| #61 stuxf scope-split | `stuxf` | 4 open, 0 merged | auth/ACL → vector-stores | **Inferred** | 0 merged in 6h, slow-iterate |
| #65 etraut-openai burst | `etraut-openai` | 3 open + 1 self-merged | codex TUI surfaces | **Inferred** | 1 sub-60s self-merge, 3 open |
| Addendum 11 aibrahim-oai | `aibrahim-oai` | 2 open (1 draft) | codex-mcp visibility | **Declared** (#19526 → #19524) | both still open at observation |

The declared sequence is **the only one that signposts itself**. The other three rely on the reader to cluster.

## Cross-reference structure

- **#51** documented the auth/ACL surge cohort as a multi-author phenomenon. #67 refines: surge-cohort participation can be a single-author scope-split (#61) AND that scope-split is **inferred** from clustering, not declared.
- **#61** documented `stuxf`'s scope-split as deliberate scope-management by the author. #67 sharpens: deliberate-by-author and declared-in-PR-bodies are not the same. `stuxf` deliberately scoped 4 PRs but did not signpost them; `aibrahim-oai` deliberately scoped 2 PRs and explicitly signposted them. Both are deliberate; only one is declared.
- **#63** documented `yuneng-berri`'s 6-surface fanout. #67 notes: the fanout's **lack of declaration** in PR bodies is itself a signal — `yuneng-berri` is treating each surface as an independent PR, not as a sequence.
- **#64** documented cross-repo recurrence of post-own-merge same-author cascade. #67 adds: cross-repo recurrence does not include cross-repo declaration — neither `kitlangton` (opencode #24215 → #24258) nor `yuneng-berri` (litellm #26464 → #26467) cross-referenced their own prior merge in the follow-up PR body. The cascade is consistently **inferred**, never **declared** so far.

## Hypothesis

**Authors declare cohorts when the second PR cannot stand alone without explanation against the first.** `aibrahim-oai`'s #19526 ("Order codex-mcp items by visibility") needs the context of #19524 ("Minimize codex-mcp public surface") to make sense — the ordering is over the reduced surface that #19524 just produced. Without #19524, the diff in #19526 is a pure mechanical reorder with no obvious motivation. The PR body **must** signpost #19524 to be reviewable.

By contrast: `yuneng-berri`'s #26467 (atexit/header-lookup) is not motivated by `yuneng-berri`'s #26464 (team-metadata ACL) — they're on different surfaces and one does not depend on the other. There is no author-side incentive to declare the cohort because each PR stands on its own.

If this hypothesis holds, **declared cohorts predict structural code dependencies** (PR B depends on PR A landing first), while **inferred cohorts predict thematic dependencies only** (PR B is in the same surface family as PR A, but does not require A to land first).

## Falsification criteria

#67 will be falsified if any of the following hold across the next 5 ticks:
1. A `yuneng-berri` PR body cross-references a prior `yuneng-berri` litellm PR by number — would show that even non-dependent same-author cohorts can be declared, breaking the structural-dependency hypothesis.
2. A `stuxf` PR body cross-references a prior `stuxf` PR in the auth/ACL → vector-stores scope-split — same falsification.
3. `aibrahim-oai` opens a 3rd codex-mcp PR that does NOT cross-reference #19524 or #19526 — would show that even authors who declare sometimes don't, weakening the signal.
4. A new multi-PR cohort appears where the second PR is mechanically dependent on the first but the body does NOT cross-reference it — would directly falsify the hypothesis.

## Prediction

The next codex PR by `aibrahim-oai` (if any in the next 24 hours) will either (a) be on a different surface family (no cross-reference needed) or (b) be on codex-mcp and explicitly cross-reference #19526 or #19524. The next litellm PR by `yuneng-berri` (when the cascade resumes) will not cross-reference any prior `yuneng-berri` PR — the cascade pattern remains inferred-only. If `aibrahim-oai`'s #19524 lands but #19526 does not within 12 hours of #19524's merge, that's evidence that the declared dependency is review-blocking — reviewers actually use the declaration to defer the follow-up. Watch the merge-order alignment: declared cohorts should land in declared order; inferred cohorts can land in any order.
