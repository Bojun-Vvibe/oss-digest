# W17 Synthesis #169 — Post-merge long-tail bulk-rebase fan-out band: refining synth #84's same-second co-fire to a sub-3-minute band

**Window anchor:** Addendum 62 (2026-04-26 16:50Z → 17:18Z) on QwenLM/qwen-code, with backreference to synth #84 (recurring same-second long-tail PR-pair co-bump) and synth #80 (intra-repo deep long-tail refresh wave).

## Lens

Synth #84 framed long-tail PR-pair co-bumps as a **same-second mechanical co-fire signature** — two aged PRs touched at byte-identical timestamps, reading as a single bulk-rebase batch firing. Synth #80 framed deeper long-tail wakes as a **diffuse 38-minute window wave** spanning five PRs. Add.62 sits between these regimes and forces a refinement: long-tail bumps can also fire as a **post-merge cascade band** at sub-3-minute spread, anchored by a fresh merge event rather than a coordinator-driven sync.

## Observation

Add.62 window (16:50:00Z → 17:18:00Z) on qwen-code:

- **#3640** yiliang114 `fix(cli): guard gradient rendering without colors` — **MERGED at 16:52:56Z**.
- **#3318** doudouOUC `feat(cli): add API preconnect to reduce first-call latency` — created 2026-04-16T03:31:23Z (10d4h aged), **bumped at 16:52:01Z** (55s pre-#3640-merge).
- **#3190** lnxsun `feat(cli): add /chat file commands for session management` — created 2026-04-13T05:55:07Z (13d11h aged), **bumped at 16:55:05Z** (2m09s post-#3640-merge).

The #3318 / #3190 pair spread is **3m04s** with the merge sitting inside the spread. Both are PRs aged >10 days, neither shares an author or a surface family with #3640, neither head SHA changed (metadata-only updatedAt advance). This is **not** synth #84's same-second co-fire — the spread is two orders of magnitude wider — and not synth #80's diffuse 38-minute wave — the spread is an order of magnitude tighter and tightly clustered around a merge event.

## Synthesis

**The phenomenon to track is `post-merge bulk-rebase fan-out band`** with these properties:

1. A merge event fires on the repo's default branch.
2. Within a sub-3-minute symmetric band around the merge timestamp, ≥2 long-tail PRs (>7 days aged) on the same default branch experience metadata-only updatedAt advances **without head SHA changes**.
3. The bumped PRs share **no author and no surface family** with the merging PR or each other — falsifying any reading as authored follow-up rebases.
4. The bumps are mechanical (no head SHA = no actual rebase commits surfaced) — consistent with GitHub's mergeable-state recomputation cascade against the new base SHA, not with explicit author/maintainer rebase pushes.

This separates from synth #84 (same-second pair, no merge anchor required) and synth #80 (5+ PRs, multi-tens-of-minutes spread, no merge anchor). Synth #169 requires a **merge anchor** and predicts a **sub-3-minute symmetric band**.

## Confirms / falsifies prior synths

- **Refines synth #84:** synth #84 P-84.A predicted recurring same-second pair co-bumps as a stable signature. Add.62 contains zero same-second pairs in this band (3m04s spread, 55s pre-merge / 2m09s post-merge). Synth #84's strict same-second framing **does not generalize** — the underlying mechanism (mergeable-state recomputation) fires on a band, not at a single instant, when triggered by a merge event. Synth #84 remains valid for its non-merge-anchored same-second cases but is **not the only mechanical co-fire signature**.
- **Confirms synth #80's underlying mechanism:** synth #80 noted intra-repo deep long-tail refresh waves without identifying a trigger. Synth #169 hypothesizes the trigger for a subclass of these waves: **the merge event itself** (not bot/sync/coordinator action). Synth #80 P-80.A is sharpened — at least some long-tail waves are merge-anchored, not coordinator-anchored.

## Falsifiable predictions

- **P-169.A (band-width bound):** future post-merge long-tail bump clusters on default-branch merges should fall within a **sub-5-minute symmetric band** around the merge timestamp. A cluster with spread ≥10 minutes anchored by a merge falsifies. Tracked across qwen-code / sst/opencode / litellm next 5 windows.
- **P-169.B (head-SHA-stability constraint):** in the post-merge band, **≥80% of bumped long-tail PRs will have unchanged head SHAs** (metadata-only). A merge-anchored band with majority head-SHA-changing bumps falsifies — that would indicate authored rebase storm, not mergeable-state recomputation.
- **P-169.C (no-author-overlap):** the bumped long-tail PRs in the band will share **zero authors** with the merging PR. An overlap (e.g., merger themselves bumps another aged PR within the band) falsifies and points to author-orchestrated cascade instead.
- **P-169.D (cross-repo recurrence):** synth #169 should fire on at least one non-qwen-code repo within W17 — most likely litellm given its high merge-rate and known long-tail pool (e.g., #25177 fede-kamel OCI, currently 13+ days aged).

## Counterevidence to look for

- A merge event on qwen-code main with **zero** long-tail bumps in the surrounding ±5-minute band → falsifies the mechanism's reliability.
- Same band but on a **non-default base branch** merge — synth #157 / #168 establish litellm uses non-main integration branches; if synth #169 fires there, the mechanism is base-branch-agnostic; if it doesn't, the mechanism is default-branch-coupled.
- A long-tail bump cluster with no nearby merge anchor — would not falsify #169 but would re-strengthen synth #80's coordinator-anchored reading for that subclass.
