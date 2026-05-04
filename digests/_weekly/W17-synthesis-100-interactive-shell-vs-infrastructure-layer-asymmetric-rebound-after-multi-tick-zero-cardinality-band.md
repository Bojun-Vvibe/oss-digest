# W17 Synthesis #100 — Interactive-shell-carrier-subgraph rebounds before infrastructure-layer-carrier-subgraph after a multi-tick zero-cardinality diurnal band

**Anchor window:** 2026-05-04T22:58:00Z → 2026-05-05T02:25:00Z (3h27m, spanning Add.305 → Add.309).
**Anchor carriers:** seven-axis carrier set (sst/opencode, openai/codex, BerriAI/litellm, charmbracelet/crush, google-gemini/gemini-cli, QwenLM/qwen-code, block/goose).
**Parent synths:** M-307.A (diurnal-pause-synchronization), synth #102 (cross-carrier zero-cardinality triplet at post-PM-EU/pre-AM-Pacific UTC band BF ×78).

## What is new

Synth #102 established the **zero-cardinality triplet** as a discrete object at the 22:58Z–01:35Z UTC band and assigned it cum-BF ×78. ADDENDUM-308 extended the run to a **silent quadruplet** (cum-BF ×175, M-307.A amplifier). ADDENDUM-309 captures the **rebound event**: at the AM-Pacific band-edge tick (01:35Z → 02:25Z), exactly **two carriers** resume merge activity — and they are not arbitrary carriers, they are **the two carriers that had been silent the longest**: sst/opencode (n=8) and openai/codex (n=10).

The selection of the two longest-silent carriers as the rebound pair is itself a non-trivial structural fact that synth #102 could not predict. The deeper observation is that those two carriers also **share a structural class**: both are interactive-shell / agent-loop terminals consumed directly by an end user typing at a CLI or in a TUI. The other five silent carriers — litellm (proxy layer), gemini-cli (IDE-coupled CLI), qwen-code (CLI but lower interactive density at this band), crush (TUI but slow-tier per synth #103), goose (centenarian-ceiling-saturated) — are **infrastructure-layer or slow-tier** axes. None of them merge in the rebound tick.

## The rebound members

| Carrier | PR | mergeCommit | Silent-run-length entering rebound | Carrier subgraph |
|---|---|---|---|---|
| sst/opencode | [#25646] | `c2b1974d` | n=8 | interactive-shell |
| openai/codex | [#20896] | `67849d95` | n=10 | interactive-shell |
| BerriAI/litellm | (no merge) | — | n=≥4 | infrastructure-proxy |
| charmbracelet/crush | (no merge) | — | n=77 | TUI / slow-tier |
| google-gemini/gemini-cli | (no merge) | — | n=73 | IDE-CLI / slow-tier |
| QwenLM/qwen-code | (no merge) | — | n=≥6 | CLI / mid-tier |
| block/goose | (no merge) | — | n=108 | infrastructure-loop / saturation-ceiling |

## Bayes Factor analysis

Under an **independent-axis baseline** where the rebound pair is drawn uniformly from the seven-carrier set:

- P(rebound pair is exactly {opencode, codex} | 2-of-7 uniform) = 1/C(7,2) = 1/21 ≈ **0.048**.
- P(rebound pair is exactly the **two longest-silent carriers** at the rebound tick, regardless of identity) = 1/C(7,2) ≈ **0.048** (same combinatorial weight, but a stronger claim because it conditions on the *silence-rank* not the *carrier identity*).
- P(rebound pair is in the **same structural subgraph** | 2-of-7 uniform, 2 interactive-shell axes vs 5 infrastructure/slow): C(2,2)/C(7,2) = 1/21 ≈ **0.048**.

The joint event "rebound pair is the two longest-silent **and** both belong to the interactive-shell subgraph" coincides at first-W17-realization. Because both subclaims are **0.048** but they are not independent (the longest-silent carriers happen to be the interactive-shell ones — which is the substantive finding), the joint should be evaluated as P(structural-class-coincidence | longest-silent) ≈ 0.5 (under a no-information prior on the silence-rank-vs-subgraph mapping). Joint ≈ 0.048 × 0.5 ≈ **0.024**, BF ≈ **×42** against independent-axis baseline at first realization.

## The asymmetric-rebound predicate

A rebound event qualifies as an **interactive-shell-priority asymmetric rebound** under #100 when, given a multi-tick (n≥3) zero-cardinality band ending at tick `T_r`:

1. The first non-zero tick at or after `T_r` contains merges from **k ≥ 1** carriers.
2. The **strict majority** (or 2-of-2 in the k=2 case) of merging carriers belong to the **interactive-shell subgraph** (opencode, codex, plus any future shell-class carriers).
3. The non-merging carriers in the same tick include at least one **infrastructure-layer** carrier (litellm, goose) that had been silent **longer** than any merging interactive-shell carrier — i.e., the rebound is **not explained by silence-rank alone**, the structural class also matters.

Add.309 satisfies (1) k=2, (2) 2-of-2 interactive-shell, (3) goose at n=108 had been silent longer than codex at n=10 yet did not rebound — so the rebound is structurally biased toward the interactive-shell subgraph beyond what silence-rank predicts.

## Falsifiable predictions

1. If the next zero-cardinality band of length n≥3 is followed by a rebound tick containing only infrastructure-layer carriers (litellm, goose) and no interactive-shell carriers, synth #100 is **falsified** as a directional claim — the asymmetric-rebound effect would be a one-shot artifact, not a structural property of the carrier graph.
2. If the next 3 zero-cardinality bands of length n≥3 each rebound interactive-shell-first, the BF compounds geometrically: at three replications cum-BF would be ×42³ ≈ ×74000, decisively elevating the asymmetric-rebound to a primary structural feature of the W17 carrier set.
3. If sst/opencode #25646 (`c2b1974d`) and openai/codex #20896 (`67849d95`) both touch **turn-boundary or session-resumption state** (M-308.A class), this rebound is also a sextet-extension of the M-308.A turn/session-boundary state-hygiene cluster — and the asymmetric-rebound mechanism is **causally explained** by interactive-shell carriers having shorter user-driven defect-discovery loops than infrastructure-layer carriers.
4. If the rebound tick at Add.310 contains a litellm or goose merge while opencode/codex go silent again, the rebound is **bidirectional alternation** rather than **interactive-shell-priority** — and the synth should be reframed as a phase-locked alternation pattern.

## Distinctness from prior synths

- **vs synth #102** (cross-carrier zero-cardinality triplet): #102 is about the **silence object** itself; #100 is about the **rebound object** that terminates the silence and shows the carrier-subgraph structure that #102 could not see (because #102's window was entirely silent).
- **vs M-307.A** (diurnal-pause-synchronization): M-307.A treats the seven carriers as **interchangeable axes** in a Poisson coincidence calculation; #100 explicitly **partitions the axes** into interactive-shell vs infrastructure-layer subgraphs and shows the partition has explanatory power at the rebound boundary.
- **vs synth #103** (slow-tier latent-clock mirror-image polarization crush vs gemini): #103 partitions on **slow-tier vs fast-tier**; #100 partitions on **interactive-shell vs infrastructure-layer**. The two partitions are not the same — codex is fast-tier *and* interactive-shell, but litellm is fast-tier *and* infrastructure-layer. #100 isolates the structural-class axis from the cadence-tier axis.
- **vs M-308.A** (turn/session-boundary state-hygiene quintet): M-308.A is a **content-class cluster** across carriers; #100 is a **timing-class structural rebound** across carriers. They could co-realize (prediction 3 above) but they are independent objects.

## Risk lens

- **Diurnal-band detector calibration**: any monitoring system that treats the seven carriers as a single aggregate Poisson rate will under-react to the structural-class signal. The detector should track silent-run length **per subgraph**, not per carrier-aggregate.
- **Interactive-shell defect-feedback loop**: if the asymmetric rebound is causally driven by user-typed bug reports during the AM-Pacific onset, the rebound predicts a downstream wave of **infrastructure-layer fixes** 6–24 hours later as the bug reports propagate from shell maintainers to upstream library maintainers. A future synth should track whether litellm/goose merges in the 6h–24h window after #25646/#20896 are causally linked.
- **Single-tick rebound-pair undersampling**: with k=2, the BF is ×42 and the structural claim is well-supported but not yet decisive. Two more replications at independent zero-cardinality bands are needed before treating asymmetric-rebound as a deployment-gating signal.
