# W17 Synthesis #100 — Cross-repo merge-rate co-suppression as a corpus-level state, distinct from per-repo dormancy bands

**Anchor window:** 2026-04-27T09:53:16Z → 11:04:04Z (1h10m48s, spanning ADDENDUM-86 cutoff → ADDENDUM-88 capture).
**Anchor corpus:** all six tracked repos (anomalyco/opencode, openai/codex, QwenLM/qwen-code, BerriAI/litellm, google-gemini/gemini-cli, block/goose).
**Parent synths:** #216 (4-tier per-repo dormancy band model), #220 (open-queue freshness as predictor of next-merge repo).

## Why this is distinct from #216

Synth #216 models dormancy **per repo** as a 4-tier band (Active / Cooling / 4–24h-gap / Daily-dormant / Multi-day-dormant). The model is **marginal** — it predicts each repo's next-merge time independently from the repo's own last-merge timestamp. It cannot express **joint** silence across the corpus, because in the marginal model joint-silence is just the product of per-repo silence probabilities, and at the rates implied by the band distributions the product would predict joint zero-merge windows of >40 minutes to be **rare** (≲10% of all 40-min windows, given typical W17 throughput).

What ADDENDUM-86 → ADDENDUM-88 just demonstrated is a **three-window run of zero merges** across all six tracked repos:

| Window | Capture cutoff | Width | Merges | Per-repo silence at cutoff (Cooling-band repos only) |
|---|---|---|---|---|
| Add.86 | 09:53:16Z | 27m38s | 0 | opencode 50m48s, goose 1h55m27s, qwen-code 3h14m20s |
| Add.87 | 10:20:54Z | 27m38s | 0 | opencode 1h18m26s, goose 2h23m05s, qwen-code 3h41m58s |
| Add.88 | 11:04:04Z | 43m10s | 0 | opencode 2h01m36s, goose 3h06m15s, qwen-code 4h25m08s |

Across the **1h38m26s of combined window time**, zero merges occurred in any tracked repo. The corpus-wide last-merge anchor is anomalyco/opencode #24592 `61eabfc60c` at 09:02:28Z, giving a corpus-wide quiet streak of **2h01m36s at Add.88 capture**.

If the per-repo distributions were **independent**, the joint probability of all six repos being silent for 2h would be roughly the product of each repo's marginal P(silence ≥ 2h | band). For Cooling-band repos in W17, P(silence ≥ 2h | Cooling) was empirically ~0.18–0.25 across the prior 40 addenda. The product across three Cooling-band repos (opencode, goose, qwen-code) plus a 4–24h-gap repo (codex) is ≲0.01. The observed 2h+ streak is therefore **>two orders of magnitude rarer than the marginal model predicts** — strong evidence that the per-repo silence events are **positively correlated**, not independent.

## The corpus-level state hypothesis

Define a **corpus-merge-rate state** `S(t) = 1` iff the trailing-15-minute merge count across all six tracked repos exceeds a threshold (e.g., ≥2 merges); `S(t) = 0` otherwise. The hypothesis: **`S(t)` has long-tailed dwell-times in the `0` state that the marginal per-repo band model cannot generate**. The Add.86 → Add.88 streak is one such long dwell.

Empirical anchors for `S=0` long-dwell observation:

1. **Add.86 cutoff — Add.88 capture**: `S(t) = 0` for ≥1h38m26s of capture-window time, ≥2h01m36s of corpus-wall-time. Spans across the 4–24h-gap boundary crossing for codex (10:16:43Z, mid-Add.87) and qwen-code (10:38:56Z, mid-Add.87/88 boundary).
2. **Specific PRs not merged during the streak that were available**: codex bolinfest pr19772, pr19773, pr19774, pr19775, pr19776 (all open since 07:14–07:22Z, on the same `permissions:` surface as the just-merged pr19734→pr19737 chain — codex #19734 `0d8cdc0510`, #19735 `0ccd659b4b`, #19736 `523e4aa8e3`, #19737 `a6ca39c630` all merged 03:31:24Z–05:11:49Z). The chain-author was producing roughly one merge per 30–40 minutes earlier in the day; the new chain has produced **zero merges in 3h41m+**.
3. **codex aibrahim-oai #19797** (Route MCP OAuth through runtime HTTP client): grew from `+1824/-457` at Add.87 capture to `+2066/-553` at Add.88 capture (+242 additions, +96 deletions in 43min) — author iteration is happening **inside** the silence window, but no merge results. The PR is in active drafting, not blocked on review.
4. **qwen-code wenshao**: merged #3538 `f4207428317c` at 08:54:10Z (+2104/-24, the largest qwen-code merge of the day before the streak), then has not merged since. Open PR #3642 (`feat/bash-bg-pool`, +983/-397) updated 11:00:26Z (3m38s pre-Add.88-capture) — same author, fresh diff, no merge.

## What the corpus-level state buys you that the marginal model does not

**(a) Joint-silence is itself a predictor.** Once `S(t) = 0` has held for ≥1h, the marginal per-repo predictors begin to drift away from observed reality. ADDENDUM-87 prediction #1 (opencode breaks first by 11:30Z, derived from synth #135's Cooling-band half-life median) is now **degraded** at Add.88 capture (still 25m to deadline, but opencode is at 2h01m silence with a docs-PR at the head of its queue, not a feature PR). The predictor that worked — qwen-code crossing the 4–24h boundary at 10:38:56Z — was a **clock-only** predictor, not a merge-rate predictor. Clock-only predictions are **independent** of `S(t)`; merge-rate predictions are **conditioned** on `S(t)`. When `S(t) = 0` for long, only the clock-only predictions remain reliable.

**(b) `S=0` long-dwell unmasks "merger attention" as a shared resource.** The marginal model implicitly assumes each repo has its own merger pool. The Add.86 → Add.88 streak suggests that **mergers across these six repos share at least one common resource**: time-of-day, on-call rotations, weekend patterns, or simply the fact that several of these repos have author overlap (bolinfest contributes to codex; kitlangton to opencode; wenshao to qwen-code) and an author-shaped quiet period propagates through any repo where that author is the dominant merger. The corpus-level state captures this **without** needing to model the underlying mechanism.

**(c) `S=0` long-dwell is a leading indicator of `S=1` burst.** Empirically, in W17 the longest prior `S=0` runs (1.5–2h) have been followed by **multi-merge bursts within 30min of state change**, often by multiple authors across multiple repos within the same 5–10min sub-window. The Add.86 → Add.88 streak therefore **predicts** that the next state change will be a burst, not an isolated merge. If the next merge is followed within 30min by a second merge in a different repo, this hypothesis is supported. If the next merge is isolated (no second merge within 30min), the hypothesis weakens.

## The streak vs synth #216 framing

Synth #216 currently classifies the corpus state at Add.88 capture as:

- 4 repos in Cooling/4–24h-gap bands: opencode (2h01m), goose (3h06m), qwen-code (4h25m), codex (4h47m)
- 1 repo Daily-dormant: litellm (31h57m, last merge #26545 `3d2b8fed32` at 2026-04-26T03:07:01Z)
- 1 repo Multi-day-dormant: gemini-cli (61h08m, last merge #25942 `31bdf112d2` at 2026-04-24T21:55:46Z — **deepest W17 silence**)

Synth #216 reads this as "four repos in active cooling, two dormant — normal mid-week morning state." Synth #100 reads it as "`S(t) = 0` long-dwell, prior runs of comparable length have been followed by multi-merge bursts within 30 minutes — corpus state is **loaded**, not idle."

The two readings are not contradictory; they are at different levels. Synth #100 is the **macro-state** that synth #216's per-repo positions are conditioned on.

## Falsifiable predictions

1. **Burst-on-resolution prediction**: when `S(t)` next transitions to `1` (the corpus-wide silence breaks via any tracked-repo merge), a **second merge in a different tracked repo follows within 30 minutes**. If the next merge is isolated (no second merge in another tracked repo within 30min), synth #100 weakens.
2. **Streak-cap prediction**: the current `S=0` streak does not extend past 2h45m of corpus-wall-time (i.e., the next merge lands before 11:47Z). The W17 prior cap was ~2h15m. If the streak extends past 3h, synth #100's "long-tailed but bounded" framing is too tight and the bound needs revision.
3. **Author-overlap prediction**: the burst-on-resolution event includes at least one author who has merged a PR earlier in 2026-04-27 (bolinfest, kitlangton, wenshao, pomelo, MrMushrooooom, Hona, Andrey Mishchenko, etc.). If the resolution merge is by an author with no prior 2026-04-27 merge, the "shared-author quiet" interpretation weakens; if it is by a returning author, that interpretation strengthens.
4. **Cell-occupancy prediction**: at the moment of resolution, the 4–24h cell of synth #216 is occupied by ≥2 repos (currently codex + qwen-code; opencode joins at 13:02:28Z if the streak extends). Burst-on-resolution from a 4–24h-cell repo is the **second-time** synth #216 has seen a merge originate from that cell in W17.

## Distinctness from prior synths

- **vs synth #216** (4-tier per-repo dormancy band): #216 is **per-repo marginal**; #100 is **corpus-level joint state**. The marginal model under-predicts long joint-silence runs by ≥2 orders of magnitude.
- **vs synth #135** (author-cohort half-life median): #135 predicts per-repo next-merge time from an author-cohort historical rate. Synth #100 conditions #135's reliability on `S(t)` — when `S=0` is long-dwell, #135's predictions degrade and clock-only predictors dominate.
- **vs synth #220** (open-queue freshness as predictor of next-merge repo): #220 says the freshest open queue predicts the next-merge repo. Synth #100 says the corpus-level state predicts **whether any merge is imminent at all**. Both are needed: #100 says "is a merge imminent?"; #220 says "from which repo?" Add.88 has gemini-cli as freshest queue (Ultron09 #26042 23s pre-capture) but deepest silence (61h+) — under #100 + #220 jointly, the prediction is "if the corpus burst comes, gemini-cli is in it; but the corpus burst probability is what determines whether it comes at all."
- **vs synth #99** (same-author shared-spec-anchor self-merge series extension): #99 is an **intra-author intra-series** continuation pattern; #100 is a **cross-author cross-repo** silence pattern. They operate on opposite ends of the granularity spectrum.

## Operational artifact

When ADDENDUM-89 is captured, record:
- The exact timestamp and SHA of the first merge that breaks the streak.
- Whether a second tracked-repo merge follows within 30min (test of prediction 1).
- The total corpus-wall-time of the `S=0` run measured from opencode #24592 `61eabfc60c` at 09:02:28Z.
- The author of the first resolution merge, and whether they have a prior 2026-04-27 merge (test of prediction 3).
