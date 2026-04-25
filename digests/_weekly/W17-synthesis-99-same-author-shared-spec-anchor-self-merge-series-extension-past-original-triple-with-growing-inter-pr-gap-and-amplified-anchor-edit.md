# W17 Synthesis #99 — Same-author shared-spec-anchor self-merge series extension past the original triple, with growing inter-PR-open gap and re-applied anchor-file edit on the extension member

**Anchor window:** 2026-04-25T17:46:01Z → 18:34:18Z (48m17s).
**Anchor repo:** anomalyco/opencode.
**Anchor actor:** `kitlangton`.
**Parent synth:** #97 (same-author N=3 self-merge series with shared spec-file co-touch and monotonically contracting lifespans).

## Why this is distinct from #97

Synth #97 captured a **closed three-member object**: PRs #24352, #24353, #24356 were all merged inside a 27-minute span (17:46:01Z → 18:12:55Z), the membership was N=3 by construction, and the lens was lifespan-contraction (24m57s → 13m47s → 4m09s). The synth treated the trio as a **completed unit**.

Synth #99 captures the **continuation event**: PR #24365 opens at 18:34:18Z, **26m23s after #24356's merge SHA `05661c60` lands**. #24365 touches the **same two anchor files** that bound the original trio (`packages/opencode/specs/effect/http-api.md` +24/-1 and `packages/opencode/src/server/routes/instance/index.ts` +5/-0), brings new surface (`httpapi/experimental.ts` +159, `test/server/httpapi-experimental.test.ts` +66), and is **still open at window close**. The structural unit is no longer "a triple" — it is **an extending vertical-slice rollout** where each PR adds an HTTP-API surface route while incrementally extending the same OpenAPI spec contract.

## The four members so far

| PR | Opened | Merged | Lifespan | Diff | Anchor-file additions to `specs/effect/http-api.md` |
|---|---|---|---|---|---|
| [anomalyco/opencode#24352] | 17:46:01Z | 18:10:58Z (`625aca49`) | 24m57s | +221/-6 over 3 files | +1/-1 |
| [anomalyco/opencode#24353] | 17:46:44Z | 18:00:31Z (`eb021998`) | 13m47s | +208/-81 over 9 files | +3/-4 |
| [anomalyco/opencode#24356] | 18:08:46Z | 18:12:55Z (`05661c60`) | 4m09s | +111/-3 over 4 files | +1/-1 |
| [anomalyco/opencode#24365] | 18:34:18Z | (open at window close) | ≥0s | +270/-13 over 8 files | **+24/-1** |

## What the extension event tells us that #97 could not

**(a) Inter-PR-open gap dilation.** Inside the original triple, opens were at 17:46:01Z, 17:46:44Z, and 18:08:46Z — gaps of **43s** and **22m02s**. The #24356 → #24365 inter-open gap is **48m17s** measured from #24356's open, or **21m23s** measured from #24356's merge. Both metrics make the gap **the largest intra-series gap to date**. This contradicts a naive extrapolation of the lifespan-contraction trend in #97 (one might have predicted the inter-PR-open gap to also contract); instead, **lifespan contracts intra-PR but the inter-PR-open gap dilates between the third and fourth member**. The author's tempo-per-PR is accelerating but tempo-between-PRs is decelerating.

**(b) Anchor-file edit magnitude jump.** Members #1, #2, #3 added 1, 3, 1 lines to `specs/effect/http-api.md` respectively. Member #4 adds **24 lines** — an order of magnitude larger anchor-file edit. This is the first member where the anchor file is the **dominant** surface change rather than a minor co-touch. Possible interpretations: (i) #24365 introduces a new spec section that the prior three PRs only modified at the edge; (ii) the author is consolidating spec drift accumulated from the prior three; (iii) the spec-anchor file is reaching a structural breakpoint and #24365 is the refactor.

**(c) Spec-file is a write contention candidate.** Cumulative additions to `specs/effect/http-api.md` across the four members is now **+29/-7**. Concurrent edits to a single spec file by a single author across four PRs in 48 minutes risk **textual collisions on rebase**; if any of the four members had been delayed and force-pushed after a sibling merge, the rebase would have rewritten the anchor file each time. The fact that all three merged members fast-forwarded suggests the author serialized them carefully, not that the file is lock-free.

## The extension predicate

A series qualifies as an **extension event** under #99 when, given a closed N=3 #97-conformant triple ending at merge time `T_m`:
1. A new PR by the **same author** opens at time `T_o > T_m`.
2. The new PR touches the **same anchor file** (here `specs/effect/http-api.md`) and the **same anchor index file** (here `src/server/routes/instance/index.ts`).
3. The new PR's open is preceded by an **intra-series quiescent window** ≥ 15 minutes (here 21m23s post-merge).
4. The author has not opened a same-anchor PR in any other series in between.

#24365 satisfies all four predicates.

## Falsifiable predictions

1. If #24365 merges within 30 minutes of open with a sub-4m lifespan, the lifespan-contraction trend (synth #97) re-asserts after the inter-PR-gap dilation — the author's per-PR acceleration was paused for spec consolidation, not abandoned.
2. If #24365's lifespan exceeds the longest member of the triple (24m57s), the spec-consolidation hypothesis (interpretation b-ii above) is supported — the larger anchor-file edit needs review attention that the smaller co-touches did not.
3. If a fifth PR opens within 60m of #24365's resolution and re-touches the same anchor files, the series is a **rolling rollout** rather than a one-shot vertical slice, and synth #99's extension-event lens should be reframed as a recurring-extension lens rather than a single transition.
4. If `specs/effect/http-api.md` accumulates ≥50 net additions across the series, the file itself is a **rollout journal** for the HTTP API and should be treated as a release-coupling surface for risk scoring.

## Distinctness from prior synths

- **vs synth #97** (same-author N=3 self-merge series with shared spec co-touch and monotonically contracting lifespans): #97 is a **terminal triple**; #99 is an **open continuation past a terminal triple**, with new structural objects (inter-PR-gap dilation, anchor-edit magnitude jump) that #97's framing cannot express.
- **vs synth #91** (single-author triplet self-merge metronome on disjoint surfaces): #91's defining property is **disjoint surfaces**; #99's defining property is the inverse — **the anchor file recurs on every member** and the surface set **converges** on a single spec contract.
- **vs synth #95** (intra-author three-regime cadence dilation within single sub-2h author session): #95 is about **per-author cadence regimes** across all of an author's PRs in a window; #99 is about **per-series cadence inside one connected sequence of PRs sharing an anchor**. A single author can exhibit #95 across their full activity while exhibiting #99 inside a sub-sequence of that activity.
- **vs synth #94** (same-author same-product-surface diff-disjoint back-to-back-merge pair nested in multi-author merge wave): #94 is N=2 and the two PRs touch **disjoint diffs on the same surface**; #99 is N≥4 and the diffs **share two specific anchor files line-by-line**.

## Risk lens

- **Series-rebase fragility**: if any of #24352 / #24353 / #24356 / #24365 had been delayed past a sibling merge, the anchor-file edits would conflict at line-granularity. The author's serialization discipline (open #1 first, merge #1 first, then #2, then #3, then pause, then #4) is doing the work that a stack-merge tool would otherwise need to do. A future synth should track whether this pattern fails — i.e., whether two sibling members ever co-exist as open PRs both touching `specs/effect/http-api.md`.
- **Spec-as-release-anchor coupling**: `packages/opencode/specs/effect/http-api.md` is now a **leading indicator** of HTTP API surface changes. A reviewer who only reads the diff of `packages/opencode/src/server/routes/instance/httpapi/*.ts` will miss the spec contract. Detector should recommend that any PR touching `httpapi/*.ts` also be checked for a corresponding `specs/effect/http-api.md` edit.
- **Single-author bottleneck**: all four members are by `kitlangton`. A series of this shape resists distributed contribution — any external contributor wanting to add a fifth route would either need to wait for the author to pause or risk an anchor-file collision. Worth flagging if the anchor file becomes a contribution barrier.
