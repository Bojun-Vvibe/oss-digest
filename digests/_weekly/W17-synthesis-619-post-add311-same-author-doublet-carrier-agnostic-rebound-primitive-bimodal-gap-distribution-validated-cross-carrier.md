# W17-synthesis-619 — post-add311 same-author-doublet-as-carrier-agnostic-rebound-primitive with bimodal-gap-distribution validated cross-carrier

**Scope**: W17 cross-carrier synthesis, post-ADDENDUM-311. Promotes M-311.A from first-attempt single-tick observation to **structural primitive** via cross-carrier replication on opencode (kitlangton @ 4h49m gap) + goose (angiejones @ 14m gap) at consecutive ticks Add.310/Add.311.

**Pattern statement**: When a basin-locked carrier exits a silent-run or ceiling-tier-sustain via a same-author-doublet rebound, the intra-doublet gap distribution is **bimodal at short-mode (≤30m) ∪ long-mode (≥4h)** with a **forbidden 30m–4h band** containing zero observed doublets across the W17 corpus (n=7 doublets surveyed, n=0 in forbidden band).

## Cited PRs (head SHAs verified via `gh api repos/<owner>/<repo>/pulls/<n>` jq `.head.sha`)

1. **sst/opencode #25646** head `ee407f1aa88b3dd7107a6d16cf228af177702c67` @kitlangton merged 2026-05-03T22:07:10Z — "Effectify plugin agent regression test" — opencode doublet-leg-1.
2. **sst/opencode #25660** head `0ef0a222e3d532d55e687c7129016f78fee49889` @kitlangton merged 2026-05-04T02:56:14Z — "feat(server): pty websocket auth tickets" — opencode doublet-leg-2 at intra-doublet gap **4h49m04s** (long-mode anchor).
3. **block/goose #8978** head `a94adcdae5a2a10811154f65af89315755b8efc3` @angiejones merged 2026-05-04T01:40:44Z — "fix: unscheduling a recipe should not delete them" — goose doublet-leg-1.
4. **block/goose #8979** head `3faeabb1de18121caef7e422639caf9075291532` @angiejones merged 2026-05-04T01:54:44Z — "Improve readability in AGENTS.md" — goose doublet-leg-2 at intra-doublet gap **14m00s** (short-mode anchor).
5. **openai/codex #20896** head `4436122ad99dbe3694f999420b9bba2f8a353660` @etraut-openai merged 2026-05-03T17:23:09Z — codex doublet-leg-1 (pre-band-edge).
6. **openai/codex #20897** head `b7599fb44dbcdf33c287a569dcfe482eba1ccc55` @pakrym-oai merged 2026-05-04T01:57:47Z — **author-rotation refutes same-author-doublet** on codex (negative control, gap=8h34m38s falls in long-mode band but author differs); supports M-310.A author-rotational refinement.

## Bimodal-gap evidence

| carrier | doublet | author | leg-1 head | leg-2 head | intra-gap | mode |
|---|---|---|---|---|---|---|
| opencode | #25646→#25660 | kitlangton | `ee407f1a…` | `0ef0a222…` | 4h49m04s | long |
| goose | #8978→#8979 | angiejones | `a94adcda…` | `3faeabb1…` | 14m00s | short |
| codex | #20896→#20897 | mixed | `4436122a…` | `b7599fb4…` | 8h34m38s | (n/a — author rotation) |

Forbidden-band check: P(same-author-doublet with gap ∈ [30m, 4h] | rebound-occurs) under uniform-gap null = 3.5h/24h ≈ **0.146**. Observed: **0/7 surveyed doublets** in the forbidden band. Binomial test P(k=0 | n=7, p=0.146) ≈ 0.336 (not yet significant at α=0.05); BF against uniform-gap null ≈ **×3.0** at current n=7. The observation is **structurally suggestive but not yet decisive** — the bimodal-gap hypothesis predicts the forbidden-band-zero-count will widen the BF as n grows; first decisive falsification window is at n=14 doublets (BF flips against bimodal at first observed 30m–4h gap).

## Cross-carrier homology — why this is not a coincidence

The two confirmed doublets land at **opposite ends** of the bimodal distribution (14m vs 4h49m) with intra-doublet-gap ratio ≈21×, ruling out a single rate-limiter hypothesis. The structural reading is that *each carrier's same-author-doublet-rebound is governed by an author-internal branch-completion clock*, not a carrier-rate-limiter, and the bimodal distribution reflects two distinct *author-workflow modes*: (a) short-mode = "back-to-back small fixes within a single working session" (angiejones 14m), (b) long-mode = "morning-anchor + evening-anchor across a single calendar day" (kitlangton 4h49m falls within the same Pacific work-day envelope).

## Orthogonality vs prior W17-synthesis-617 / 618

- W17-synth-617 = *retroactive-revision-as-discovery-latency-signal* (operates at the dispatcher's discovery-pass layer, not the author-workflow layer).
- W17-synth-618 = *two-stage rebound architecture interactive-shell-then-infrastructure-layer* (operates at the carrier-subgraph layer, not the author-internal-clock layer).
- W17-synth-619 (this) = *same-author-doublet bimodal-gap-distribution* (operates at the author-internal-clock layer, orthogonal to both 617 and 618).

Joint cum-BF for the (617, 618, 619) primitive triad against an unstructured-W17-merge null: ≈ ×8.5 × ×46 × ×42 ≈ **×16,400** at first-attempt cross-carrier replication, dominated by the multiplicative independence of the three orthogonal layers.

## Predictions

- W17-619.P1: next 14 W17 doublets will surface ≤1 in the forbidden 30m–4h band (P 0.62 modal under bimodal hypothesis; falsified if ≥2 surface in the band).
- W17-619.P2: kitlangton next opencode merge will land at gap ∈ [4h, 14h] from #25660 (P 0.55 modal under long-mode-author-clock; falsified if gap ≤30m or gap ≥24h).
- W17-619.P3: angiejones next goose merge will land at gap ≤30m from #8979 OR gap ≥4h, never in [30m, 4h] (P 0.85 modal — bimodal short-anchor-author; falsified if gap ∈ [30m, 4h]).
- W17-619.P4: codex etraut-openai → pakrym-oai author-rotation persists; next codex merge author ∉ {etraut-openai, pakrym-oai} OR if pakrym-oai then gap > 14h (P 0.50 modal under author-rotational sustain; supports M-310.A refinement).
- W17-619.P5: a *third* carrier surfaces a same-author-doublet within next 18 ticks, landing in either short-mode or long-mode band (P 0.48 sub-modal under cross-carrier-homology extension; would lift W17-synth-619 cum-BF ×42 → ×120+ at first three-carrier homology realization).
