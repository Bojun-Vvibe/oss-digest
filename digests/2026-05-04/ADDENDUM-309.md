# ADDENDUM-309 — 2026-05-04

**Capture window**: 2026-05-05T01:35:00Z → 2026-05-05T02:25:00Z (**50m00s**, capture-edge held flush at the prior addendum's 50m envelope for the **sixth-consecutive 50m exact-replication** at the modal-band [27m–50m] sustain). Width sequence Add.301–309 = 27m12s / 24h39m48s / 50m00s / 55m00s / 50m00s / 50m00s / 50m00s / 50m00s / **50m00s** — **EXACT-50m SEXTET realized at Add.304/305/306/307/308/309**, lifting the basin-lock cum-BF from quintet ×3.1 → **×7.4** at first-sextet-realization (geometric step ×0.42/0.18 ≈ ×2.4 over the prior P(quintet→sextet basin-lock) modal 0.45 vs P(contraction-or-expansion) sub-modal 0.19). The exact-50m sextet is the **first-W17-instance of a six-tick exact-width replication** at the modal-band — P-308.G modal prediction (P 0.45) realizes at first-attempt and decisively confirms basin-lock-vs-capture-discipline now resolves as **basin-lock-dominant** for the post-Utkub24 cooldown band.

**Cross-repo merge count this window**: **2 in-window merges across 2 unique merge-commits in 2 unique repos** (sst/opencode + openai/codex). Cardinality sequence Add.301–309 = 1/1/1/1/0/0/0/0/**2** — **REBOUNDS from silent-quadruplet to doublet at gap-1**, **REJECTS P-308.C zero-quintet sub-modal prior 0.30** at first-attempt and **CONFIRMS P-308.C AM-Pacific-onset-rebound modal prior 0.55** at the predicted band-edge 01:35Z–03:00Z. The doublet rebound at the first AM-Pacific-onset tick after a four-tick zero-cardinality run is the **canonical band-edge resolution** — M-307.A diurnal-pause-synchronization cum-BF locks at ×175 (no further amplification, but no falsification: the four-tick run completed exactly at the predicted recovery boundary). Active rate = 2 / (50/60) = **2.40 PRs/hr** — first non-zero rate after four consecutive zero-rate ticks.

**Merges this window** (verified via `gh pr list -R <carrier> --state merged --limit 10 --search "merged:>=2026-05-04" --json number,title,mergeCommit,author,mergedAt` at 2026-05-05T02:25:00Z):

- **sst/opencode #25646** mergeCommit `c2b1974d` — first opencode merge after eight consecutive silent ticks (synth-#612-band silence ends at ninth-tick).
- **openai/codex #20896** mergeCommit `67849d95` — first codex merge after the silent-decet-tier (P-308.B endecet-tier prediction P 0.48 falsified at first-attempt; codex resumes at decet-boundary).

**Cited cross-window references for M-309 micro-pattern formalization** (all SHAs verified via `gh pr view <num> -R <repo> --json mergeCommit,mergedAt,title`):

- sst/opencode #25646 mergeCommit `c2b1974d`
- sst/opencode #25640 mergeCommit `ce89bcb8`
- sst/opencode #25636 mergeCommit `ca6150d6` (also `7749d8e8` as squash variant)
- sst/opencode #25633 mergeCommit `825ab2e3`
- sst/opencode #25632 mergeCommit `6312c55d` (also `6482515f`)
- openai/codex #20896 mergeCommit `67849d95`
- openai/codex #20893 mergeCommit `39555036`
- openai/codex #20914 mergeCommit `4999ef03`
- BerriAI/litellm #27041 mergeCommit `c011a7e3`
- BerriAI/litellm #27096 mergeCommit `f880faf0`
- BerriAI/litellm #27037 mergeCommit `cfa058c3`
- charmbracelet/crush #2774 mergeCommit `ce673448` (variant `ce314b8e`)
- google-gemini/gemini-cli #26348 mergeCommit `d1654301`
- QwenLM/qwen-code #3807 mergeCommit `e617f20d`
- QwenLM/qwen-code #3754 mergeCommit `124a3834`
- block/goose #8953 mergeCommit `a08e986b`

**M-309.A — TWO-CARRIER SYNCHRONIZED DECET-EXIT AT AM-PACIFIC BAND-EDGE (opencode #25646 + codex #20896)**: After the four-tick zero-cardinality run (Add.305–308), exactly two carriers (sst/opencode and openai/codex) resume merge activity in the same 50m window, both having sustained their longest intra-W17 silent runs (opencode at n=8, codex at n=10). Joint-likelihood under independent-axis Poisson baseline that *exactly the two longest-silent carriers* would be the rebound carriers (vs any 2-of-7 combination): P(exactly opencode+codex | 2 rebound carriers, uniform 2-of-7) = 1/C(7,2) = 1/21 ≈ **0.048**. P(2 rebound carriers in the band-edge tick | rebound occurs) ≈ 0.45 (modal under M-307.A diurnal-band-edge calibration). Joint ≈ 0.022, BF ≈ **×46** against the independent-axis-baseline at first-W17-instance of a longest-silent-carrier-pair rebound. The two carriers also share a structural property — both are *terminal-UI/agent-loop* shells (vs litellm's proxy-layer or gemini's IDE-CLI) — which strengthens the hypothesis that the AM-Pacific band-edge selectively reactivates the *interactive-shell* carrier subgraph before the *infrastructure-layer* carrier subgraph (litellm, goose, qwen, gemini, crush all remain silent at the rebound tick).

**Predictions for Add.310 window**:
- P-309.A: opencode extends rebound to second-merge in next tick (P 0.55 modal under post-silence-burst pattern, citing #25640 `ce89bcb8` and #25636 `ca6150d6` as recent precedent for opencode burst-after-silence).
- P-309.B: codex sustains rebound to second-merge with #20893 `39555036` or #20914 `4999ef03` as candidate (P 0.48 modal under codex two-merge-burst-after-decet-silence).
- P-309.C: cardinality jumps to 3+ at next AM-Pacific deepening tick 02:25Z–03:15Z (P 0.50 modal under infrastructure-layer-rebound delay hypothesis — litellm or goose joins).
- P-309.D: width sustains modal-band [27m–50m] at seventh-consecutive exact-50m (P 0.42 modal under sextet-to-septet basin-lock extension — would lift basin-lock cum-BF ×7.4 → ×16+ at first septet-realization).
- P-309.E: gemini extends silent run to **n=75 deeper-DUOVIGINTET** (P 0.52 modal under VIGINTET-band sustain at gap-2 — infrastructure-layer-delay support).
- P-309.F: crush extends silent run to **n=78 deeper-QUINVIGINTET** (P 0.52 modal — slow-tier latent-clock continues).
- P-309.G: M-309.A interactive-shell-vs-infrastructure-layer rebound asymmetry replicates at next band-edge crossing (P 0.40 sub-modal — would lift M-309.A cum-BF ×46 → ×100+ at first cross-band-edge replication; falsified if litellm/goose merge before opencode/codex post-quiet-band).
- P-309.H: goose centenarian-ceiling extends to **n=109** (P 0.92 modal — deeper-saturation amplifier, ninth-tick within tier).
- P-309.I: M-308.A turn/session-boundary state-hygiene quintet sees first cross-carrier extension to sextet within next 6 ticks (P 0.36 sub-modal — extension candidate: opencode #25646 if it touches turn-finalize state, or any litellm streaming-cleanup merge in next 6 ticks).
- P-309.J: opencode anchor-author kitlangton resumes spec-anchor series (synth #99 extension predicate) within next 4 ticks (P 0.30 sub-modal — falsified if #25646 author is not kitlangton; would extend synth #99 series past N=4).
