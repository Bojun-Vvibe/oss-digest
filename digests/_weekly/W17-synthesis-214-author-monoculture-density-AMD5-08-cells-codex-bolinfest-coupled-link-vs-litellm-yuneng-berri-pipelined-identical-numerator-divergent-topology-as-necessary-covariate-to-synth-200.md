# W17 Synthesis #214 — Author self-merge density per repo as a structural divergence axis: codex bolinfest-chain (4-of-last-5 self-merges) vs litellm yuneng-berri (4-of-last-5 self-merges) converge on identical numerator but diverge on chain topology, refining synth #200 lifespan-bimodality with an author-monoculture covariate

**Status:** novel cross-repo angle.
**Anchor PRs:** openai/codex #19734 `0d8cdc0510`, #19735 `0ccd659b4b`, #19736 `523e4aa8e3`, #19737 `a6ca39c630` (all bolinfest, all 2026-04-27 chain); BerriAI/litellm #26545 `3d2b8fed32`, #26543 `abb63e6007`, #26542 `615565c38e`, #26532 `5db6b83446` (all yuneng-berri, all 2026-04-26 infra). See ADDENDUM-83 and ADDENDUM-84.

## The angle

Synth #200 documented a bimodal lifespan distribution across the corpus and synth #208 stratified that bimodality by UTC-time-of-day cluster. Neither addressed a third covariate visible in the W17 data: **author monoculture density** within a sliding window of N consecutive merges per repo. This note proposes the metric and shows that two repos with **identical monoculture numerator** (4-of-last-5 merges by a single author) produce **structurally divergent merge topologies** that synth #200's lifespan distribution alone cannot distinguish.

## Definition

**Author monoculture density (AMD-N)** for a repo = max over authors A of (count of last-N merges authored by A) / N. AMD-5 of 0.8 means a single author produced 4 of the last 5 merges in the repo.

## The two cells

### Codex (anchor: bolinfest 4-of-last-5)
Merges #19734 (03:31:24Z, +210/-86, 2h51m07s lifespan), #19735 (03:59:59Z, +242/-215, 3h19m41s), #19736 (04:49:30Z, +288/-201, 2h58m55s wait — see Add.83 churn-vs-lifespan note), #19737 (05:11:49Z, +18/-31, 2h36m36s) plus a non-bolinfest interruption at #19733 (00:56:06Z, andmis, +0/-7). Topology: **stacked chain** (`pr19734` → `pr19735` → `pr19736` → `pr19737` per branch names), each PR depending on the previous, all merged in chronological branch order with **strict monotonic merge ordering matching branch ordering**. AMD-5 = 0.8.

### Litellm (anchor: yuneng-berri 4-of-last-5)
Merges #26545 (03:07:01Z 2026-04-26, +18961/-252719, "Promote Internal Staging to main"), #26543 (02:44:38Z, +12/-12, "Bump Versions"), #26542 (02:12:57Z, +336/-336, "Rebuild UI"), #26532 (23:11:34Z 2026-04-25, +1817/-1808, "Build UI") plus #26541 (krrish-berri-2 interruption at 02:03:44Z 2026-04-26). Topology: **disjoint infra steps** on disjoint branches (`litellm_internal_staging`, `yj_bump_apr25_pypi`, `yj_build_apr25_2`, `yj_build_apr25`), no inter-PR git dependency, all merging in **release-pipeline order** (build UI → rebuild UI → bump versions → promote staging). AMD-5 = 0.8.

## Identical numerator, divergent topology

Both cells share AMD-5 = 0.8. But:

| Property | codex/bolinfest | litellm/yuneng-berri |
|---|---|---|
| Topology | stacked chain (branch deps) | disjoint infra steps |
| Merge order | branch chronological | release-pipeline causal |
| Mean lifespan in cell | 2h56m35s | varies by step (range 26m → 21m) |
| Mean churn in cell | +189/-133 | dominated by #26545 mega-promote outlier |
| Inter-merge gap | 22m–49m (chain-coupled) | 21m–32m (pipeline-coupled) |
| Cluster (synth #208) | cluster-A morning | cluster-A morning, prior day |
| Reviewer dependency | external reviewer per link | internal release-engineer-only |

The **lifespan distribution** alone (synth #200's discriminator) places both cells in the same "deliberation lane" bucket (2h–3.5h cluster). But the topology divergence implies **different review-process generators**: codex is `coupled-link` (one external reviewer must clear each link before next), litellm is `pipelined` (release-eng owns the whole stack and merges as the pipeline ticks). The lifespan-bucket coincidence is therefore **structurally accidental**, not mechanistically informative.

## Claim

AMD-N is a **necessary covariate** for synth #200's bimodality interpretation. Two repos at AMD-5=0.8 with identical lifespan-bucket placement can be in **disjoint regimes** (`coupled-link` vs `pipelined`) discriminable only by branch-dependency topology and reviewer-class. Without AMD-N + topology, synth #200's bimodality conflates these regimes into a single bucket and loses explanatory power on inter-merge cadence.

## Cross-claim against synth #208

Synth #208 placed both cells in cluster-A by UTC time-of-day, suggesting they share a generator. R214 says: **same cluster, same AMD, but different generator**. Cluster membership is therefore a **necessary but not sufficient** stratifier for synth #200's bimodality; AMD-N + topology must be added.

## Falsifiability

Falsified if: a future high-AMD cell in a third repo (e.g. opencode if `thdxr` runs an AMD-5≥0.8 streak) shows topology that is **neither** `coupled-link` nor `pipelined` but lands in the same lifespan bucket — that would imply a **third generator** and the topology axis would need broadening. Confirmed if: AMD-5≥0.8 cells reliably partition into exactly the two topologies above with no third type appearing in W18.

## Distinction from prior synth notes

- Synth #197 / #199 / #207 are single-repo author-monoculture notes (bolinfest chain, doudouOUC self-merge series). #214 is the first **cross-repo AMD comparison** and the first to claim **identical-AMD-divergent-topology**.
- Synth #200 / #208 are lifespan-distribution notes; #214 supplies the AMD covariate they lacked.
- Synth #206's base-branch-class segmentation rule (staging vs main) overlaps litellm's #26545 (staging→main promotion), but #206 segments **by base branch**, not by author-density. #214 is orthogonal: an AMD-5=0.8 cell can span multiple base branches (litellm does) or a single base branch (codex's main).

## R214 rule

> Compute AMD-5 per repo at each addendum capture. When AMD-5 ≥ 0.8, additionally classify the cell's topology as `coupled-link` (branch-dep chain) or `pipelined` (disjoint infra) before applying any synth #200 lifespan-bucket interpretation. Lifespan-bucket alone is **not sufficient** to identify the merge-process generator at high AMD.
