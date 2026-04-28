# W17 Synthesis #279 — Same-Author Multi-Tick-Silence Resumption Via Block-Clear-Then-Merge On Original Author's Own Pre-Block PR Establishes Long-Gap Self-Cascade Class Distinct From Synth #50 Sub-Hour Self-Cascade

**Date:** 2026-04-28 (capture window through Add.123 close 14:50Z)
**Repos:** openai/codex (Add.119 sprint, Add.123 resumption)
**Refines:** synth #50 (post-own-merge same-author cascade — sub-hour band), synth #64 (post-own-merge same-author cascade cross-repo recurrent — opencode + litellm within 5 hours), synth #97 (lifespan-monotone series with silence-then-burst interleave), synth #275 (single-repo monopoly tick disjoint sequence), synth #278 (A-B-C-B chain ceiling).

## Pattern

Synth #50 established that the same author who merges a PR is disproportionately likely to land another merge within a short trailing window (sub-hour band). Synth #64 extended that to cross-repo (same author landing in different repos within 5h). Synth #279 identifies a **categorically distinct** same-author cascade variant: **the cascade is the SAME author resuming on a SAME-AUTHOR PRE-BLOCK PR after a multi-tick silence gap**, where:

1. The author landed an n=k merge sprint at tick T₀.
2. The same author opened a PR at tick T₀ that was immediately marked with a declarative-block (`[do not merge]` or equivalent).
3. The author then went silent for **m ≥ 5 ticks** (well beyond synth #50's sub-hour or synth #64's sub-5h band).
4. The block was cleared and the original PR was merged at tick T₀ + m, **WITHOUT the author opening any new PR in between**.

This is **NOT** a fresh same-author cascade (synth #50/#64): the merging PR is the **same identity as the pre-block-marked PR from T₀**, just with the block cleared. The mechanism is **block-resolution**, not **fresh-intent**. Synth #279 names this the **long-gap self-resumption** class.

## Concrete instance — codex jif-oai Add.119 → Add.123

| Tick | Time | Event | PR | SHA |
|------|------|-------|-----|-----|
| Add.119 | 11:06:41Z | jif-oai MERGE | #19961 | `b7c0f269` |
| Add.119 | 11:12:51Z | jif-oai MERGE | #19963 | `54d14011` |
| Add.119 | 11:32:06Z | jif-oai MERGE | #19967 | `fa127be2` |
| Add.119 | 11:47:48Z | jif-oai OPEN with `[do not merge]` | #19970 | (declarative-block, not merged) |
| Add.120–122 | 11:55Z–13:55Z | jif-oai SILENT (no opens, no merges) | — | — |
| Add.123 | 14:23:14Z | jif-oai MERGE (block cleared on #19970) | #19970 | `a9e5c340` |
| Add.123 | 14:36:47Z | jif-oai OPEN (post-merge fresh) | #19990 | (none yet) |

The Add.119 sprint is the synth #50/#64 trigger: 3 same-author merges in 25m on `feat:` and `Stabilize memory Phase 2` surface family. PR #19970 was opened 15m after #19967 with the merge-blocking marker — synth #50 would have predicted this PR to merge within ~hour (sub-hour cascade band). It did NOT — it sat through Add.120, Add.121, Add.122 (3 tick widths totaling 2h36m of silence on #19970 specifically, on a 2h35m26s open lifespan total before merge).

The merge at Add.123 14:23:14Z is the **same PR identity** as the Add.119 11:47:48Z open. The 2h35m gap is **synth #50 band-incompatible** (synth #50 sub-hour) and **synth #64 band-compatible** (synth #64 sub-5h) but synth #64 requires **cross-repo**, which this is not (codex → codex).

## Why this is distinct from synth #50

| Property | Synth #50 | Synth #279 |
|----------|-----------|------------|
| Same author? | Yes | Yes |
| Same repo? | Yes | Yes |
| Time gap | sub-hour | multi-tick (≥ 2h, observed 2h35m) |
| Trigger PR identity | new PR opened post-merge | same PR opened pre-merge with block |
| Mechanism | fresh-intent post-merge cascade | block-resolution on pre-existing intent |

## Why this is distinct from synth #64

| Property | Synth #64 | Synth #279 |
|----------|-----------|------------|
| Cross-repo? | Yes (opencode → litellm) | No (codex → codex) |
| Time gap | sub-5h | sub-3h (observed 2h35m) |
| Cascade type | author crossing repo boundary | author returning to own pre-block PR |
| Predictive use | cross-repo author-tracking | within-repo block-clear monitoring |

## Mechanism candidates

1. **Block-clear gating:** `[do not merge]` markers in codex are typically removed by author or maintainer when an upstream condition resolves (release-train alignment, dependency landing, review approval). The 2h35m gap matches the wall-clock latency of a release-train alignment cycle for codex's memory subsystem (#19961 → #19963 → #19967 sequence touched the memory phase-2 input ordering, #19970's `feat: trigger memories from user turns with cooldown` is the consumer of that ordering — block was likely waiting for #19967's merge to soak in CI or for downstream consumers to validate).
2. **Author-attention re-engagement:** jif-oai opened #19990 (`feat: skip memory startup when Codex rate limits are low`) at 14:36:47Z, **13 minutes after the #19970 merge** — this IS a synth #50 fresh-intent cascade (sub-hour, post-own-merge). The synth #279 long-gap resumption and the synth #50 fresh-intent cascade are **co-occurring** in the same author within the same Add.123 window — the long-gap resumption acts as the **trigger** for the fresh-intent cascade.
3. **Block-as-intent-preservation:** the `[do not merge]` marker preserves authorial intent across multi-tick silence gaps that would otherwise (per synth #97 lifespan-monotone-rising) extend the PR's open-lifespan into the long-tail. By holding the merge button until block-clear, the author avoids synth #97's lifespan inflation and lands at sub-3h instead of multi-day.

## Falsifiers and predictions

- **Falsifier P-279-A:** the next observed long-gap self-resumption in W17 has gap > 12h — would put the pattern in a different time band (overnight-resumption, synth-candidate territory).
- **Falsifier P-279-B:** the next observed long-gap self-resumption in W17 has the resumption PR DIFFERENT from the pre-block PR (i.e., new fresh PR by same author replacing the blocked one) — would falsify the same-PR-identity invariant.
- **P-279-C:** jif-oai's #19990 (opened 14:36Z, 13m post-#19970-merge) merges within 4 ticks (deadline Add.127) — the fresh-intent cascade trigger would be confirmed if #19990 lands in synth #50's sub-hour-extended band.
- **P-279-D:** the next codex `[do not merge]`-marked PR by jif-oai or another OAI-suffix author follows the same pattern: silent multi-tick → block-clear-then-merge as same identity. Falsifier: next blocked PR is closed-without-merge or reopened as a different PR.
- **P-279-E (cross-repo recurrence):** the long-gap self-resumption pattern appears in opencode within 8 ticks (deadline Add.131). Candidate observation: opencode's `[draft]` or `[wip]` markers act as the cross-repo equivalent of codex's `[do not merge]`. Falsifier: no opencode draft-clear-then-merge by the same author within 8 ticks.

## Cross-reference to synth #157 atomic-streak

Synth #157's atomic-streak ceiling at 5–6 was on the **merge-axis** (consecutive merges by same author). Synth #279's pattern operates on the **open-then-block-then-merge axis** (a single PR's lifecycle traversal across silence gaps). The two are orthogonal: synth #157 measures rate, synth #279 measures latency-with-intent-preservation.

## Cross-reference to synth #275 / #278 chain ceiling

Synth #275/#278 framed Add.119–Add.122 as an A-B-C-B chain breaking at n=4 with lag-2 recurrence. Add.123 extends the chain to **A-B-C-B-A** (codex re-entering at slot 5, lag-4 recurrence). Synth #279 explains **why** codex re-entered at lag-4: because jif-oai's #19970 was held in the synth #279 long-gap-self-resumption mode and released at Add.123, not because of a fresh codex author entering the active roster. **The lag-4 recurrence is mechanically attributable to the synth #279 pattern**, not to a new-author roster expansion. This couples synth #278's lag-spectrum to authorial lifecycle rather than to repo-level dispatch.

## Status

Synth #279 is **single-instance candidate** at first observation of the Add.119 → Add.123 long-gap self-resumption (jif-oai #19970). P-279-C (deadline Add.127) and P-279-D (open-ended next-instance) will determine candidate→regime promotion. The synth #279 → synth #278 coupling (lag-4 recurrence explained by long-gap self-resumption) is itself a higher-order conjecture that requires a SECOND observed long-gap self-resumption in the same chain-position structure to confirm.

## Cited PRs/SHAs (real)

- codex #19961 `b7c0f269109f15331ccd8d4efd23377e5fe69aed` 11:06:41Z jif-oai
- codex #19963 `54d14011708bf551a04c6996e4ce10c001185042` 11:12:51Z jif-oai
- codex #19967 `fa127be25ff547c950240c4bfe6c100c394880b2` 11:32:06Z jif-oai
- codex #19970 `a9e5c34083d4593b51d520f4d45f751ef9eee297` opened 11:47:48Z, merged 14:23:14Z jif-oai (long-gap self-resumption)
- codex #19990 (open 14:36:47Z, jif-oai, fresh-intent post-#19970-merge cascade — synth #50 trigger)
- opencode #24716 `2a4f2bf5` kitlangton (cross-reference for synth #157 atomic-streak comparison)
- opencode #24717 `e57d0c2f` kitlangton (same)
- qwen-code #3708 `8de1bcb2799e3c951968633c68aa56ec077fd128` yiliang114 (cross-repo synth #64 negative case — yiliang114 did NOT cascade post-#3708)
