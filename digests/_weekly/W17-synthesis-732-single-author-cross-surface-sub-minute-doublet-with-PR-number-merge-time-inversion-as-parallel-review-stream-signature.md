# W17 Synthesis #732 — Single-author cross-surface sub-minute doublet with PR-number/merge-time inversion as a parallel-review-stream out-of-order completion signature distinct from same-surface monotone-ordered intra-tick doublets

**Anchor window:** 2026-05-06T06:08:13Z → 2026-05-06T06:09:08Z (55 seconds, QwenLM/qwen-code, tanzhenxin spanning cli/ + core/).
**Anchor carriers:** QwenLM/qwen-code (the cross-surface inversion anchor), with comparison datapoints from BerriAI/litellm (synth #727's same-surface monotone-ordered intra-tick doublet), anomalyco/opencode (Brendonovich same-surface monotone), openai/codex (bolinfest same-surface monotone), block/goose (kalvinnchau same-surface monotone).
**Lens:** synth #727 characterized **same-surface, monotone-PR-number-ordered, intra-tick (sub-minute) doublets** as a "pre-batched merge-button" mechanism (a single maintainer queueing two PRs back-to-back through the merge UI). That mechanism predicts (i) shared surface, (ii) ascending PR-number-vs-merge-time correlation (later-numbered = later-merged), and (iii) author either same or pair-of-co-maintainers. The tanzhenxin doublet **violates (i) and (ii)** while preserving same-author identity — it is **cross-surface (cli/ vs core/)** and **PR-number-inverted** (higher number merges first). This combination is mechanism-distinct from synth #727 and requires a different generative model: **parallel review streams completing out-of-order in a single maintainer merge-button session**.

## Why this is distinct from prior synth (W17 #720–#731)

- **#725** (cross-carrier same-author doublet inter-merge-gap divergence): cross-carrier focus; here we are cross-**surface** within one carrier.
- **#727** (sub-minute pre-batched merge-button): same-surface monotone-ordered. The tanzhenxin doublet is the **complement case**: cross-surface inverted-ordered.
- **#729** (A→B→A author rotation): explicit author switch; tanzhenxin is single-author.
- **#730** (24h-aligned scheduled): seconds gap is 4 orders of magnitude below the 24h scale.
- **#731** (non-monotonic gap recovery in length-≥4 chains): chain-length ≥4; this is a doublet (length 2).
- This synth (#732) is the **first** to argue that **PR-number-vs-merge-time inversion at sub-minute gap implies parallel review streams** — distinct from synth #727's serial-review pre-batched mechanism — because under serial review the earlier-created PR (lower number) would normally enter the merge button first.

## The tanzhenxin anchor (qwen-code cli/ + core/)

| PR | author | mergedAt | head SHA | surface | created |
|---|---|---|---|---|---|
| [QwenLM/qwen-code#3768] | tanzhenxin | 2026-05-06T06:08:13Z | `0a0c17f7` | cli/ (foreground subagents pill+dialog) | (later created) |
| [QwenLM/qwen-code#3735] | tanzhenxin | 2026-05-06T06:09:08Z | `03ed878e` | core/ (auto-compact subagent context) | (earlier created) |

**Properties:**
- Same author (tanzhenxin), **different surfaces** (cli/ vs core/), gap = **55 seconds**.
- **PR-number inversion**: #3768 (the higher number, hence the later-created PR) merges 55s **before** #3735 (the lower number, earlier-created). Under FIFO queue assumption this is anomalous; under independent-review-streams assumption it is expected with probability 1/2.
- Both PRs reference "subagents" in the title — they are **logically related but surface-disjoint** (cli/ presentation layer vs core/ context-management layer of the same feature).
- The 55-second gap is below the typical merge-UI page-reload latency for GitHub (ranges 2–10s), implying a **tight maintainer interaction** — the two PRs entered the merge button within a single attention session.

## Why the inversion implies parallel review streams (formal argument)

Under synth #727's serial-review pre-batched mechanism:
1. A single reviewer reviews PR_lower first (because it was opened first and surfaced first in the queue).
2. Reviewer approves PR_lower → click merge button at time t₀.
3. Reviewer immediately reviews PR_higher (next in queue) → click merge button at time t₀ + ε.
4. Result: **PR_lower merges before PR_higher** (monotone).

Under a parallel-review-streams mechanism (this synth):
1. Reviewer A reviews PR_lower (cli/ surface specialist) on its own thread.
2. Reviewer B reviews PR_higher (core/ surface specialist) on its own thread.
3. Reviews complete asynchronously; reviewer B finishes first.
4. Reviewer B approves PR_higher → merge.
5. Shortly after, reviewer A's approval lands on PR_lower → merge.
6. Result: **PR_higher merges before PR_lower** (inverted).

The cross-surface property (cli/ vs core/) is the **key enabling condition** for the parallel mechanism: surface-disjoint PRs can be reviewed by surface-specialist subteams **without serialization**, whereas same-surface PRs share reviewers and force serial review.

The 55-second gap is the **review-completion-time difference between the two streams** (reviewer A's approval landed 55s after reviewer B's), modulo merge-button click latency.

## Comparison to monotone-ordered intra-tick doublets (synth #727 cohort)

| doublet | author(s) | gap | surface(s) | PR-num order |
|---|---|---|---|---|
| BerriAI/litellm #27268 → #27271 (synth #727 cite) | ishaan-berri (both) | sub-minute | proxy/Prometheus (same) | monotone (lower→higher) |
| openai/codex #21257 → #21256 (Add.377 cite, A→A) | bolinfest | 1h06m | bwrap (same) | monotone (lower→higher; #21256 actually merged before #21257 in chronological order) |
| anomalyco/opencode Brendonovich #25968 → #25972 | Brendonovich | 14m19s | desktop/ (same) | monotone |
| block/goose kalvinnchau #9000 → #9030 (synth #730) | kalvinnchau | 24h00m11s | ACP (same) | monotone (lower→higher) |
| **qwen-code tanzhenxin #3768 → #3735 (this synth)** | tanzhenxin | **55s** | **cli/ + core/ (different)** | **inverted (higher→lower)** |

Across 4 monotone-ordered comparison doublets (all same-surface), zero exhibit number/time inversion. The tanzhenxin doublet is the **only inverted case** in the W17–W18 anchor window with a sub-2-minute gap.

## Predictions / falsifiability

- If the next sub-minute same-author doublet on qwen-code preserves the cross-surface + inversion pattern, the parallel-review-stream mechanism is reinforced as a recurring carrier feature.
- If a third tanzhenxin PR lands within the same tick on a third distinct surface (e.g., sdk-python/), the chain becomes a length-3 cross-surface burst and synth #731's gap-shape analysis applies.
- Falsified if no further sub-minute doublets are observed across W18 day-2 with cross-surface+inversion combination — would suggest the tanzhenxin event was a single-occurrence reviewer-coincidence rather than a structural carrier mechanism.
- Cross-carrier validation: scan W18 day-1+2 for sub-minute same-author doublets and classify as same-surface+monotone (synth #727 mechanism) vs cross-surface+inverted (this synth's mechanism). Predicted ratio: heavily skewed toward same-surface+monotone (>5:1) if surface specialization in review subteams is the key generative variable.

## Anchor citations (head SHAs)

- QwenLM/qwen-code #3768 `0a0c17f7` (cli/ tanzhenxin), #3735 `03ed878e` (core/ tanzhenxin).
- Same-author anchor expansion: QwenLM/qwen-code #3743 `9a279acf` (yiliang114, same micro-burst window 06:03Z, different author — establishes the qwen-code carrier as exhibiting **micro-burst review activity** at the 06:03–06:09Z window).
- Cross-carrier monotone-ordered same-surface comparison anchors: BerriAI/litellm #27268 `8a3f54b1` and #27271 `2ba2eafc` (synth #727 anchors), anomalyco/opencode #25968 `031a0cc8` + #25972 `e969d0af` (synth #731 chain head), openai/codex #21256 `3ec18a2c` + #21257 `a736cb55` (synth #729 anchors), block/goose #9000 `2fe4c3d0` + #9030 `b17fd4f2` (synth #730 anchors).

**12 PRs cited across 4/7 carriers** (QwenLM/qwen-code 3, BerriAI/litellm 2, anomalyco/opencode 2, openai/codex 2, block/goose 2, plus 1 yiliang114 micro-burst anchor; gemini-cli + crush not cited — no qualifying sub-minute doublets in the anchor window).
