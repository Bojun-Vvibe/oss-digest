# W17 synthesis #120 — codex single-author N=4 self-merge sprint with selection-regime cascade exhausting visible open queue within ~100 minutes

**Seeded:** 2026-04-27 ADDENDUM-91
**Capture window:** 11:31:57Z → 13:14:16Z (codex monopoly continuum spanning Add.89→Add.90→Add.91)
**Author:** jif-oai (codex contributor)

## Phenomenon

A single author lands **four self-merges in a single repo within 102 minutes** while the other five tracked repos contribute zero merges. Each successive self-merge is selected from a **progressively shrinking pool of available open PRs**, and the **selection regime mutates** at each N transition rather than holding constant. By N=4, the author is opening-and-merging brand-new branches inside the same observation window — i.e., the sprint **outruns the open-queue-snapshot lag**.

## The four merges, with selection-regime annotation

| # | PR | merge SHA | Branch | Merged (UTC) | Δ from N=1 | Selection regime |
|---|---|---|---|---|---|---|
| 1 | codex #19792 | `f8c527e5298f2cd047a12624133b24de1bf3829d` | `jif/clean-multi-agent-v2-config` | 11:31:57Z | 0 | first-merge anchor |
| 2 | codex #18982 | `da83ab554a` (head SHA from prior caches) | `jif/memories-on-file-system` | 12:32:45Z | +60m48s | **non-LIFO** (resumed older PR over newly-opened #19805) |
| 3 | codex #19809 | `5d314f324c7ffc54ac24ecf464c45f9c4bcfa861` | `jif/multi-agent-v2-allow-claims-after-retry` | 12:58:12Z | +86m15s | **LIFO** (newest open PR at the moment, head `01b82885`) |
| 4 | codex #19812 | `79b4f691a673eda0906f70debe0a0bd42d25096d` | `jif/avoid-rewriting-phase2-on-clean-workspace` | 13:14:16Z | +102m19s | **zero-lifespan** (branch not visible in Add.90 capture; opened-and-merged inside Add.91 window) |

Six additional codex PRs cited as context for the open-queue evolution:
- codex #19805 (`dfa038481dcc1351d8ab1806a88cd446438e27d5`, jif-oai) — opened post-N=1 merge, **never merged**, dropped from queue at N=3 transition.
- codex #19813 (`2225f4fdd5a165220d53ae52d52ee96adfa47269`, jif-oai) — N=5 candidate, OPEN at capture.
- codex #19807 (`a37adea0db55681b873443b340fb68c4f88b3b77`, vb-openai) — cross-author, starved by sprint.
- codex #19797 (`f8e2beeafae92c91e5630efd4a79dec03fcc0606`, aibrahim-oai) — cross-author, starved.
- codex #19772–19776 (bolinfest 5-PR chain) — cross-author, 6h+ stalled and SUPERSEDED in queue priority by jif sprint.
- codex #19779 (`53d7d91e20edb3798d2390bb219b07af946dfae9`, etraut-openai) — last cross-author merge before the sprint (06:16:43Z, 5h15m14s before #19792). The sprint **followed** a long cross-author quiet period.

## Why this is novel vs prior synths

Synth #91 (single-author triplet self-merge metronome on disjoint surfaces with sub-15-minute inter-merge cadence) is the closest prior. Differences:

| Property | Synth #91 (triplet metronome) | Synth #120 (this) |
|---|---|---|
| N | 3 | 4 |
| Inter-merge cadence | sub-15-min, **regular** | 60m48s / 25m27s / 16m04s — **monotonically contracting** |
| Selection regime | implicit FIFO/LIFO not flagged | **mutates across N transitions** (non-LIFO → LIFO → zero-lifespan) |
| Surface relation | "disjoint" | adjacent semantic cluster (multi_agent_v2 + memories) for N=1,2; same Phase-2 retry/workspace cluster for N=3,4 |
| Open-queue interaction | not modeled | **sprint outruns open-queue snapshot** at N=4 |

Synth #99 (same-author shared-spec-anchor self-merge series extension past original triple with growing inter-PR gap and amplified anchor edit) is the inverse cadence — **growing** inter-merge gap. #120 has **contracting** inter-merge gap **and** outruns open-queue visibility. They are dual phenomena.

Synth #101 (Add.90 seed: same-author N=2 self-merge inside 70min on adjacent semantic surface with non-LIFO selection and substitution-shape second-member diff) captures only the N=2 step of #120's full cascade. **#120 supersedes #101** as the canonical pattern; #101 is now treated as the N=2 prefix.

## Defining properties (for future detection)

A future event qualifies as synth #120 iff ALL of:

1. **Single author** lands **N≥4 self-merges** in **one repo** within **≤120 minutes** of the first.
2. Inter-merge gap is **monotonically contracting** across N=2,3,4 (not necessarily strictly, but ≥2 of 3 gaps contract).
3. **Selection regime mutates at least once across the N transitions** — i.e., the source-PR for the N-th merge is selected via at least two different rules across {N=2,3,4}: e.g., non-LIFO at one transition AND LIFO at another, OR LIFO at one AND zero-lifespan-open-and-merge at another.
4. By the final merge, **at least one source-PR is a branch not visible in the open-queue snapshot taken at the previous capture cycle** — i.e., the sprint outruns the snapshot.
5. **Cross-author starvation**: during the sprint window, **other authors with stale open PRs in the same repo register zero merges**. (Confirmed in #120: vb-openai #19807, aibrahim-oai #19797, abhinav-oai #19778, bolinfest 5-chain all stalled.)

## Cross-repo predictive value

This pattern is **codex-canonical at W17** (jif-oai is the only author observed exhibiting it). Predictive question for W18+: does any other repo/author show the cascade signature, or is it a codex/jif-oai personal style? The synth promotes a discriminator: at N=2 with non-LIFO selection on substitution-shape diff, **predict cascade-to-N≥4 with selection mutation rather than stall-at-N=2**. Add.90 made the wrong prediction (assumed selection regime would hold; predicted #19805 over #19809). Add.91 confirmed the cascade by direct observation. Future Add.N predictions should default to **cascade hypothesis** when the N=2 non-LIFO signature appears.

## Cited PRs/SHAs (concentration index)

Eleven codex PRs cited:
- **Sprint members** (4): #19792 `f8c527e529`, #18982 `da83ab554a`, #19809 `5d314f324c`, #19812 `79b4f691a6`.
- **Sprint open-tail** (2): #19805 `dfa038481d` (dropped), #19813 `2225f4fdd5` (N=5 candidate).
- **Cross-author starved** (5): #19807 `a37adea0`, #19797 `f8e2beea`, #19778 `d5539f43`, #19779 `53d7d91e20` (last pre-sprint), #19772–19776 (bolinfest chain, 5 PRs).

Concentration: 6 of 11 cited PRs (54.5%) belong to the sprinting author; 5 of 11 (45.5%) are starved cross-author entries. This **author-concentration ratio** is a candidate sub-metric for future synth #120 detection.
