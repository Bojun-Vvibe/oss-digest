# W17 Synthesis #148 — Bolinfest stack rebase split-vs-atomic mode is perfectly alternating across rebases #13–#16, putting synth #146's stochastic-split reading at risk at rebase#17

**Status (Add.51):** Refines synth #146 with a fourth datapoint (rebase#16). The split/atomic sequence across the most-recent four rebases is perfectly alternating — split (#13) / atomic (#14) / split (#15) / atomic (#16) — which is incompatible with a memoryless Bernoulli draw (synth #146's "stochastic split" reading) and instead suggests a deterministic 2-state cycle. Synth #146 is **not yet falsified** at n=4 (4-in-a-row alternation has p≈0.125 under fair Bernoulli, marginal), but rebase#17's outcome is now a **decisive test**.

## Anchor evidence

| rebase# | addendum | timestamp | within-rebase span | mode | inter-rebase delta from prior |
|---|---|---|---|---|---|
| #11 | Add.45 | (per Add.45) | 0s | atomic | (—) |
| #12 | Add.46 | (per Add.46) | 0s | atomic | 36m42s (short cluster) |
| #13 | Add.48 | 07:48:16Z–17Z | 1s (3-2 contiguous-prefix) | **split** | 39m38s* (short cluster) |
| #14 | Add.49 | 08:27:54Z | 0s | **atomic** | 39m38s (short cluster) |
| #15 | Add.50 | 08:59:48Z–52Z | 4s (endpoints-vs-interior) | **split** | 31m54s (short cluster) |
| #16 | Add.51 | 10:04:19Z | 0s | **atomic** | **1h04m31s (long cluster)** |

\* Add.50's delta sequence shows 39m38s as the rebase#13→#14 delta.

The mode-sequence for the last 4 rebases is: **split / atomic / split / atomic**. Perfect alternation, n=4.

## Why this challenges synth #146's stochastic-split reading

Synth #146 read rebase#15's reproduction of a split (after rebase#14's atomic restore) as falsifying Add.49's "one-shot anomaly" claim. The proposed model was: **stack rebases are atomic at n=5 invariant, but within-rebase timestamp distribution is a stochastic property of network/API latency at write time** (synth #146 §"What this synth does *not* claim" + §"Falsifiable predictions" P-146.A treating split presence as a Bernoulli draw with p≥0.5).

Under a memoryless Bernoulli with p=0.5, the probability of any specific 4-rebase sequence is 1/16 = 0.0625, and the probability of *some* alternating sequence (either S/A/S/A or A/S/A/S) is 2/16 = 0.125. This is unusual but not yet diagnostic against Bernoulli at n=4. However, perfect alternation has a structurally distinct generative mechanism: a **2-state deterministic cycle** (e.g., the rebase tool maintains a hidden "warm vs cold" state that flips every invocation, and only the warm state batches writes atomically). Under deterministic alternation, the prediction for rebase#17 is **split**; under Bernoulli, the prediction for rebase#17 is **either** with p=0.5 each.

## Why this also challenges synth #146's "non-stack-ordered geometry" reading more weakly

Synth #146 invoked the *combination* of rebase#13's contiguous-prefix split (top-3 / bottom-2) and rebase#15's endpoints-vs-interior split (#19606 + #19392 / interior-3) as ruling out write-batching that respects stack order. Under deterministic alternation, the **within-split geometry** could still be stochastic (the deterministic cycle governs *whether* a split happens, not *which* PRs land in which timestamp class). So the "non-stack-ordered geometry" claim survives even if the alternation reading is correct.

But there is a second-order possibility: the alternating mode might co-vary with **inter-rebase cadence cluster**. Looking at the deltas:
- rebase#13 (split): 39m38s — short cluster
- rebase#14 (atomic): 39m38s — short cluster
- rebase#15 (split): 31m54s — short cluster
- rebase#16 (atomic): **1h04m31s — long cluster**

Three short-cluster deltas, then one long-cluster delta. If the alternation continues at rebase#17 (predicted split), and the delta also contracts back to short cluster, the **co-variation between cadence and split** suggested by synth #146 P-146.C is preserved. If rebase#17 is split with a long-cluster delta, P-146.C is falsified and the alternation is independent of cadence.

## Mechanistic candidates

Under the alternating-mode reading, three mechanisms are plausible:

1. **Tool-internal state machine that flips on invocation**. The rebase tool (`bolinfest`'s local tooling, presumably) might cache something — e.g., a connection pool, a credentials cache, a write-batch buffer — across invocations, and the cache state determines whether the next push fits in one TCP write window or two. Even-indexed pushes hit warm cache; odd-indexed hit cold. This is testable by measuring inter-rebase delta — cold-cache (split) rebases should have slightly longer prep latency in some observable signal.

2. **GitHub API write-side rate-limiting bucket**. GitHub's force-push handling for branches at high write-rate may shift behavior between adjacent rebases — e.g., 30-second token bucket per branch that resets between every-other rebase. Under this model, the "warm cache" is on the *server* side. This is testable by checking if the alternation pattern correlates with absolute time-of-minute or any GitHub-published rate-limit reset cadence.

3. **Coincidence under small-n**. n=4 is very small. The alternation could be a 1-in-8 fluke and rebase#17 returns to mixed pattern. This is the null hypothesis.

## Why the long-cluster cadence at rebase#16 matters separately

Independent of the split/atomic mode, the inter-rebase cadence sequence has been short-dominated for 6 consecutive rebases (#10→#16 deltas: 25m54s, 1h01m26s, 38m51s, 34m15s, 36m42s, 39m38s, 31m54s, 1h04m31s — 6 of 8 in short cluster). Rebase#16's return to long cluster is the **first long-cluster datum in 5 consecutive rebases** (#11→#15 were all short except #11 which is the synth #142 boundary). The short:long ratio across the full delta sequence (deltas 7→16) is now **6:4** = 3:2, walking back the 6:3 = 2:1 short-bias from Add.50.

Under synth #142's "perfectly balanced 3-3 bimodal split" framing (already broken by rebase#13), the new ratio 6:4 is the **closest the sequence has been to 3:2 (= 6:4)** since the bimodal-balance hypothesis was first proposed. If rebase#17 lands in long cluster, the ratio becomes 6:5, approaching equal weight — which would *partially restore* synth #142's bimodal-balance claim under a relaxed reading.

## Falsifiable predictions

- **P-148.A** (decisive test of stochastic vs alternating): **rebase#17 will be a split rebase** (within-rebase timestamp span ≥1 second). Under deterministic alternation, this is required; under Bernoulli p=0.5, it has probability 0.5. If rebase#17 is atomic, the alternating-mode reading is **falsified at n=5** (5-in-a-row alternation has p=1/32 ≈ 0.031 under fair Bernoulli and would be marginally significant; failure to alternate at rebase#17 means the 4-in-a-row was coincidence).

- **P-148.B**: If rebase#17 is split (P-148.A confirmed), then rebase#18 will be atomic (continuing the cycle). At n=6 alternation, the Bernoulli null has p=1/64 ≈ 0.016, which is below conventional significance. n=6 in-a-row alternation forces adoption of the deterministic-cycle reading.

- **P-148.C**: Inter-rebase cadence cluster will **anti-correlate** with split presence across rebases #17–#20. Specifically: split rebases will land in short cluster (≤40m delta) at higher rate than atomic rebases. n=4 prior baseline (rebases #13–#16): 2 of 2 split rebases were short-cluster; 1 of 2 atomic rebases was long-cluster. If across rebases #17–#20 the split rebases continue to land short and atomic rebases continue to land long, P-146.C and the cadence-mode coupling reading both harden. If the correlation breaks (e.g., a long-cluster split or a short-cluster atomic), the two-process reading (cadence and split independent) returns.

- **P-148.D**: The n=5 cardinality invariant continues to hold for rebase#17 (and beyond). Synth #146 P-146.D set a 5-rebase horizon for this prediction; rebase#16 is the 1st of 5. Rebase#17 → 2/5. Falsifier: any rebase pushes only 3 or 4 of {#19606, #19395, #19394, #19393, #19392}, breaking lockstep.

## What this synth does *not* claim

- It does **not** claim the alternating mode is established. n=4 is below the threshold for rejecting Bernoulli with conventional confidence; the deterministic-cycle reading is *suggested*, not *adopted*.
- It does **not** claim the within-split geometry (contiguous-prefix vs endpoints-vs-interior) is governed by the same mechanism as the split/atomic mode. Synth #146's geometry-stochastic claim is preserved.
- It does **not** retract synth #146. Synth #148 *refines* #146's prediction P-146.A with a sharper test: P-148.A is the decisive datum that distinguishes Bernoulli-with-clustering from deterministic-2-state-cycle.
- It does **not** speculate about which mechanism (tool-internal state, server-side rate limit, coincidence) is correct. The three candidates are noted for completeness; the data don't yet discriminate.

## Provenance

- Add.48 rebase#13 evidence: `digests/2026-04-26/ADDENDUM-48.md` (sub-2-second split, 3-2 contiguous-prefix at 07:48:16Z–17Z).
- Add.49 rebase#14 evidence: `digests/2026-04-26/ADDENDUM-49.md` ("bolinfest stack rebase #14" section, atomic 5-0 at 08:27:54Z).
- Add.50 rebase#15 evidence: `digests/2026-04-26/ADDENDUM-50.md` ("bolinfest stack rebase #15" section, 4-second split at 08:59:48Z–52Z).
- Add.51 rebase#16 evidence: `digests/2026-04-26/ADDENDUM-51.md` ("bolinfest stack rebase #16" section, atomic 5-0 at 10:04:19Z, long-cluster cadence 1h04m31s).
- Cross-checked via `gh pr view {19606,19395,19394,19393,19392} -R openai/codex --json number,headRefOid,updatedAt,author,title` at 2026-04-26T10:05:38Z; new head SHAs `0d7e33845b59 / 5dc530e663fb / add77ad4c8ae / 1f18e9ce78f9 / 46e884dd7fa4`.
- Synth lineage: refines #146 (sharpens P-146.A into the decisive P-148.A), preserves #146's "non-stack-ordered geometry" claim, partially walks back Add.50's "decisive short-bias" reading via the 6:4 ratio update.
