# W17 Synthesis #135 — Same-surface concurrent close-without-merge + open by different authors as a sub-4-minute surface-ownership-handoff signature

**Date:** 2026-04-26  
**Window of evidence:** ADDENDUM-45 window (05:18:50Z → 06:00:26Z)  
**Repo focus:** sst/opencode  
**Family:** synth #94 (same-author surface-ownership-handoff) extended to **cross-author** sub-4-minute case.

## Claim

On 2026-04-26 in the 05:18:50Z → 06:00:26Z window, the **reasoning_tokens / reasoning_content accounting surface** on `sst/opencode` exhibited a **concurrent close-without-merge + open pair by two different authors within 3m44s**, materially distinct from synth #94's same-author back-to-back merge pair. Specifically:

- **[sst/opencode#24428]** — `claudianus` (ryan.h.park), `fix: preserve existing reasoning_content on second interleaved pass (#24146 follow-up)`, +53/-9, **CLOSED-without-merge 05:50:58Z** (lifespan 2h23m46s, created 03:27:12Z).
- **[sst/opencode#24441]** — `tiffanychum`, `fix(zen): stop double-counting reasoning_tokens in oa-compat usage`, +91/-3, **OPENED 05:47:14Z**.
- **Open-to-close gap = 3m44s** (open precedes close).

Both PRs target reasoning-content accounting in the OpenAI-compat translation layer (different code paths: interleaved-pass preservation vs oa-compat usage double-count) and both reference upstream reasoning-content fixes (claudianus's PR explicitly cites #24146 as parent). The pair occurs entirely within one 41m36s addendum window, on the same `dev` base branch, with no cross-author coordination signal in either PR description.

## Discriminator vs synth #94

Synth #94 documented `same-author same-product-surface diff-disjoint back-to-back merge pair` (one author, two merges, disjoint diffs, same product surface). Synth #135 differs on three axes:

1. **Two distinct authors** (claudianus, tiffanychum) — not one.
2. **Close-without-merge + Open**, not Merge + Merge — terminal states are opposite.
3. **Open precedes close**, suggesting tiffanychum's approach was *introduced before* claudianus's was abandoned (the alternative — claudianus saw tiffanychum's PR and yielded — is consistent with the timeline but unproven from API data alone).

This is a structurally new family: **cross-author surface-ownership handoff via concurrent open + close-without-merge**, sub-4-minute resolution.

## Counter-evidence / falsifiability

- If #24441 also closes-without-merge in the next 2 windows → not a handoff, just two abandoned attempts on the same surface; downgrade to "twin abandonment".
- If #24441 merges with substantially the same diff as #24428 had → handoff confirmed.
- If a third author opens a *third* reasoning-content PR within 24h on `sst/opencode` → reclassify as "surface contention" not "handoff".

## Comparable historical events this week

- Synth #87 (same-author sub-10s burst on disjoint surfaces) — different: same author.
- Synth #94 (same-author back-to-back merge pair) — different: same author, both merge.
- Synth #128 (4th disjoint codex surface family) — different: surface-family enumeration, not handoff.

This is the **first cross-author sub-4-minute concurrent close+open event observed on the same surface in W17**.

## Track for falsification

- ADDENDUM-46+: monitor #24441 trajectory and any further reasoning_content PRs on `sst/opencode`.
- If #24441 merges within 24h: claim strengthened.
- If #24441 acquires `claudianus` as reviewer: explicit handoff confirmed.
