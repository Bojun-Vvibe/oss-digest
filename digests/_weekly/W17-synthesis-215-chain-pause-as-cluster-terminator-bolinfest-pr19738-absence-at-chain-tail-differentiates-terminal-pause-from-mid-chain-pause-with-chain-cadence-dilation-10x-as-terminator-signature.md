# W17 Synthesis #215 — Chain-pause-as-cluster-terminator: bolinfest pr19738 absence at chain tail differentiates terminal pause from mid-chain pause, with chain-cadence dilation ≥10× as the terminator signature

**Date noted:** 2026-04-27 (UTC)
**Status:** Provisional — n=1 in-vivo case, 1 corroborating prior chain.
**Predecessors:** synth #205 (chain-coupling-review-penalty-front-loaded), synth #213 (branch-prefix dominates title-prefix), synth #148 (bolinfest stack rebase split vs atomic mode).
**Falsifies / refines:** ADDENDUM-84 prediction #1 ("`pr19738` will merge within ~40min given 8.2× cadence dilation is unsustainable").

## Claim

Within bolinfest's stacked-PR chains in `openai/codex`, a **chain-cadence dilation of ≥10×** (measured as time-since-last-chain-merge / median-inter-chain-merge-gap) is a **necessary signature of chain-cluster termination** — i.e. the chain pause is **not** a mid-chain review delay but the **end** of the chain's productive window for that day-cluster. Below that threshold, dilations of 2–8× resolve into a successor merge within one addendum window. At ≥10×, the chain has historically been **dormant for the remainder of the cluster** and the next bolinfest activity originates on a **different chain root** (new `prNNNNN` branch, not the next link).

## Evidence

In-vivo case (this tick):
- Chain `pr19734 → pr19735 → pr19736 → pr19737` merged 03:31:24Z → 05:11:49Z, inter-merge gaps **28m35s, 49m31s, 22m19s** (median 28m35s, trailing 22m19s).
- `pr19738` (the chain successor by branch-naming convention) is unmerged at 09:08:50Z capture (per ADDENDUM-85), yielding a **3h57m+** unmerged window = **10.6× the trailing 22m19s cadence**. ADDENDUM-83 reported **2.4×** dilation. ADDENDUM-84 reported **8.2×**. ADDENDUM-85 reported **10.6×**. The dilation has **monotonically grown** across 3 successive addenda without a merge.

Corroborating prior chain (corpus, not new):
- Synth #148 / #155 / #157 documented bolinfest's `add56` chain ending with a similar tail-pause: the final non-merge link sat at ≥10× cadence and the next bolinfest activity opened on a **new** chain root rather than completing the previous one (see synth #157's "atomic streak length 6" observation — streak terminates by **chain switch**, not by chain completion).

Together: 2 chains, both terminating their productive window at ≥10× cadence dilation on the trailing link, with no successor merge on the same chain root.

## Discriminator vs synth #205

Synth #205 framed the chain-coupling review penalty as **front-loaded on the chain base**, with `pr19736→pr19737` (22m19s) being faster than `pr19735→pr19736` (49m31s) — penalty dissipates toward the chain tail. The terminator framing here is **complementary, not contradictory**: synth #205 governs **inter-link** review latency for **completed chains**; synth #215 governs the **post-final-merged-link silence** that determines whether the chain ever completes. The two operate on different temporal segments.

## Discriminator vs synth #213 (branch-prefix dominates title-prefix)

Synth #213's branch-prefix dominance applies to lifespan prediction for **single-PR** merges. Chain dynamics (synth #215) are not addressed by branch-prefix lanes since all bolinfest chain links share the `prNNNNN` branch-prefix family — the discriminator must come from temporal cadence, not naming.

## Falsifier

Synth #215 is **falsified** if `pr19738` merges in `openai/codex` within the next 6h from this note's timestamp (i.e. before 2026-04-27T15:09:00Z) under the same chain root (not as a new branch). A merge before that threshold means a 12–14× dilation can still resolve, demoting the ≥10× claim to "≥15× or higher" or to a non-monotonic indicator. A separate falsifier: if bolinfest opens any new `prNNNNN` chain root **before** `pr19738` merges, that **confirms** synth #215's "chain switch terminates productive window" mechanism for this specific case.

## Predictions

1. The next bolinfest activity in `openai/codex` (whichever direction) will **not** be a `pr19738` merge — it will either be a new chain root, a non-chain single PR, or no activity at all in the next 6h.
2. If `pr19738` does eventually merge, it will do so **after a re-open / force-push** event (non-trivial diff revision), not as a quiet review-approval trigger — because the ≥10× dilation correlates in the corpus with a substantive blocker, not a reviewer-availability gap.

## Open question

Is the ≥10× threshold a property of **bolinfest's review pool specifically** (small reviewer set, single-author chains) or a property of **codex chains in general** (where any author hitting ≥10× would terminate)? n=2 from the same author cannot disambiguate. A non-bolinfest stacked chain would be required to test.

## Cross-references

- ADDENDUM-83 (8.2× snapshot, prediction #3 partially correct on goose, miss on chain mechanism)
- ADDENDUM-84 (prediction #1 falsified by ADDENDUM-85)
- ADDENDUM-85 (3-snapshot monotonic dilation 2.4× → 8.2× → 10.6×)
- synth #148, #155, #157 (prior chain with tail-pause termination)
- synth #205 (inter-link penalty within completed chains)
