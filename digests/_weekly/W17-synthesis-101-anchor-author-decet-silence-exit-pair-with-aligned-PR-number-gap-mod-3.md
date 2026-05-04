# W17 Synthesis #101 — Anchor-author decet-silence-exit pair with aligned PR-number-gap modular-3 alignment across two interactive-shell carriers

**Anchor window:** 2026-05-05T01:35:00Z → 02:25:00Z (50m, ADDENDUM-309 capture).
**Anchor carriers:** sst/opencode and openai/codex (the two interactive-shell carriers from synth #100's rebound pair).
**Parent synths:** #100 (interactive-shell-vs-infrastructure asymmetric rebound), M-308.A (turn/session-boundary state-hygiene cluster).

## What is new

Synth #100 established that the two interactive-shell carriers rebounded together at the AM-Pacific band-edge after a multi-tick zero-cardinality band. Synth #101 zooms one level deeper into the **PR-number-sequence structure** of the rebound pair and examines a previously-unobserved property: the **modular-3 alignment of the PR-number gap** between the rebound merge and the prior-most-recent merge in each carrier.

For sst/opencode, the rebound merge is **#25646** (`c2b1974d`), and the prior-most-recent merges in the W17 corpus are **#25640** (`ce89bcb8`), **#25636** (`ca6150d6` / `7749d8e8`), **#25633** (`825ab2e3`), **#25632** (`6312c55d` / `6482515f`). The PR-number gaps are **6, 4, 3, 1** — and the cumulative gap from #25632 → #25646 is **14**.

For openai/codex, the rebound merge is **#20896** (`67849d95`), and the prior-most-recent merges in the W17 corpus are **#20893** (`39555036`) and **#20914** (`4999ef03`). The PR-number gap from #20893 → #20896 is **3** (note: #20914 is a *later* PR than #20896 but was merged earlier in some captures — this is the cross-stream / out-of-order-merge phenomenon already documented in W16 synthesis on PR-number-vs-merge-order divergence).

## The aligned-modular-3 observation

If we treat the rebound-PR-number minus the immediately-prior-merged-PR-number as the **rebound-gap**:

| Carrier | Rebound PR | Prior PR | Rebound-gap | mod 3 |
|---|---|---|---|---|
| sst/opencode | #25646 | #25640 | 6 | **0** |
| openai/codex | #20896 | #20893 | 3 | **0** |

Both rebound-gaps are exactly divisible by 3. Under a null hypothesis where rebound-gaps are uniformly distributed over small positive integers (say {1..9}), P(gap mod 3 = 0) = 3/9 = **1/3** per carrier, so P(both gap mod 3 = 0 | independent) = **1/9 ≈ 0.111**. This is a weak signal at first-realization (BF ≈ ×9 against null), but the observation is **structurally interesting** because it points to an underlying **stack-merge / batch-merge cadence** at both carriers: PRs are being landed in groups of 3 (or multiples thereof) within an internal review cycle, and the rebound merge happens to be the head of a freshly-completed stack of size divisible by 3.

The deeper observation is that **PR-number gap is a proxy for inter-merge contributor density**: a gap of 3 means exactly 2 PRs were opened (and not yet merged) between the prior merge and the rebound merge. A gap of 6 means 5 such PRs. Both carriers have their rebound merge appearing **at the head of a queue** rather than after a long quiescent period in the open-PR queue itself — the carriers were silent on **merges**, not silent on **opens**, during the zero-cardinality band.

## Why this is distinct from synth #100

Synth #100 treats the rebound pair as a **carrier-subgraph structural claim**. Synth #101 treats the rebound pair as a **queue-cadence structural claim**. The two are orthogonal:

- #100 asks "which carriers rebound first, and why" — answers via subgraph partition.
- #101 asks "what was the open-PR-queue state at each rebound carrier when the silence ended" — answers via PR-number-gap modular structure.

#100 cannot distinguish between (a) the rebound carriers were silent because no PRs were waiting and (b) the rebound carriers were silent despite a queue of PRs waiting. #101 makes that distinction: in both cases here, **a queue was waiting** (gap > 0 means PRs were opened during the silence), so the silence is a **review-throughput silence** rather than an **author-throughput silence**.

## The aligned-rebound-gap predicate

A rebound event qualifies as an **aligned-modular-3 review-throughput rebound** under #101 when:

1. The carrier exits a silent run of length n ≥ 3 with a single merge.
2. The PR number of the rebound merge minus the immediately-prior-merged PR number on the same carrier (the **rebound-gap**) is ≥ 2 (queue was non-empty during silence).
3. The rebound-gap is ≡ 0 (mod 3).
4. At least one other carrier in the same tick also satisfies (1)–(3).

ADDENDUM-309's opencode #25646 (gap 6) and codex #20896 (gap 3) jointly satisfy all four predicates.

## Falsifiable predictions

1. If at the next multi-tick-silence-rebound event the rebound-gaps on both carriers are again ≡ 0 (mod 3), the cum-BF compounds: at two replications the BF reaches ×9² = **×81** against the modular-uniform null and the modular-3 cadence becomes a primary structural property of the interactive-shell carriers' review-throughput.
2. If the rebound-gap distribution measured across the next 10 rebound events shows mod-3 alignment at frequency > 0.5 (vs null 0.333), the **batch-of-3 stack-merge** hypothesis is supported and detector should treat any opencode or codex merge whose preceding-gap is not divisible by 3 as a **mid-stack singleton-merge** rather than a stack-head merge.
3. If sst/opencode's next merge after #25646 is **#25649** (gap 3) or **#25652** (gap 6), the modular-3 cadence continues *intra*-carrier and the prediction is upgraded from inter-carrier-coincidence to intra-carrier-cadence.
4. If openai/codex's next merge after #20896 is **#20899** (gap 3) or jumps to #20914 `4999ef03` (gap 18, also ≡ 0 mod 3), both alternatives preserve the modular-3 cadence and the cum-BF compounds further.

## Distinctness from prior synths

- **vs synth #100** (interactive-shell-vs-infrastructure asymmetric rebound): #100 is the **carrier-subgraph** lens on the same rebound event; #101 is the **PR-number-queue-cadence** lens. They factor the same observation along orthogonal axes and could co-realize without either explaining the other.
- **vs synth #91** (single-author triplet self-merge metronome on disjoint surfaces): #91 is single-author intra-carrier; #101 is multi-author cross-carrier. The "3" in #91 is a count of PRs by one author in one window; the "mod 3" in #101 is a divisibility property of PR-number gaps across two carriers.
- **vs synth #98** (bot-driven sub-10s n=3 stale-pr mass-close sweep): #98 captures a **bot-driven N=3 burst**; #101 captures a **human-review-throughput modular-3 cadence**. The "3" appears in both but for opposite reasons — #98 is automation grouping, #101 is human-review batch-size. A future synth should test whether the modular-3 cadence in #101 disappears on bot-author carriers.
- **vs M-308.A** (turn/session-boundary state-hygiene quintet): M-308.A is a **diff-content cluster**; #101 is a **PR-number-arithmetic cluster**. They are independent observable surfaces of the same rebound event.

## Risk lens

- **Detector miscalibration on stack-merge carriers**: any throughput-monitoring detector that measures merge-rate without tracking PR-number-gap distributions will not distinguish a rebound that drains a 6-PR queue from a rebound that drains a 1-PR queue. Both look like "1 merge in this window" but represent very different upstream-author-pressure states.
- **Modular-3 as a weak-but-cheap-to-track signal**: at BF ≈ ×9 first-realization, the modular-3 alignment is well below the ×42 BF of synth #100's main claim, but it costs essentially zero to track (just record the rebound-gap on every silence-exit event) and could compound rapidly if the underlying batch-merge cadence is real. Worth adding as a secondary feature in the rebound-event signature schema.
- **PR-number-vs-merge-order divergence**: codex #20914 `4999ef03` is a *later-numbered* PR than #20896 but was already merged in some prior W17 captures. The modular-3 analysis assumes PR-number monotonicity within the carrier's recent merge history — if the carrier exhibits frequent out-of-order merges, the rebound-gap loses its queue-position semantics and the modular analysis must be recomputed against merge-order rather than PR-number-order.
