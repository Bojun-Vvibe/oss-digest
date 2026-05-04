# W17-synthesis-620 — post-add311 carrier-membership-set partition {opencode,codex,goose,qwen}-active vs {litellm,gemini,crush}-silent as octet-invariant basin-lock structural feature

**Scope**: W17 cross-carrier synthesis, post-ADDENDUM-311. Promotes M-311.B from single-octet observation to **partition-as-structural-feature** primitive. Operates orthogonally to W17-synth-617 (discovery-latency layer), W17-synth-618 (subgraph-timing layer), and W17-synth-619 (author-internal-clock layer). This synth occupies the **carrier-membership-set layer**.

**Pattern statement**: Across the exact-50m octet (Add.304–311, 8 consecutive 50m basin-locked ticks), the seven-carrier universe partitions into a hard 4-active subset {opencode, codex, goose, qwen-code} and a hard 3-silent subset {litellm, gemini, crush}, with **zero cross-set membership transitions** for the entire 400m octet duration. The partition is robust under sub-window symmetric exchangeability: both the first 4-tick sub-window (Add.304–307) and the second 4-tick sub-window (Add.308–311) realize the *identical* 4-element active set.

## Cited PRs (head SHAs verified via `gh api repos/<owner>/<repo>/pulls/<n>` jq `.head.sha`)

Active-subset anchors (the four carriers that actually surfaced merges in the octet):

1. **sst/opencode #25660** head `0ef0a222e3d532d55e687c7129016f78fee49889` @kitlangton merged 2026-05-04T02:56:14Z — opencode active-set anchor (3 merges across octet).
2. **sst/opencode #25646** head `ee407f1aa88b3dd7107a6d16cf228af177702c67` @kitlangton merged 2026-05-03T22:07:10Z — opencode prior-tick same-author leg.
3. **openai/codex #20897** head `b7599fb44dbcdf33c287a569dcfe482eba1ccc55` @pakrym-oai merged 2026-05-04T01:57:47Z — codex active-set anchor (post-rebound burst).
4. **openai/codex #20896** head `4436122ad99dbe3694f999420b9bba2f8a353660` @etraut-openai merged 2026-05-03T17:23:09Z — codex prior-leg author-rotation seed.
5. **block/goose #8978** head `a94adcdae5a2a10811154f65af89315755b8efc3` @angiejones merged 2026-05-04T01:40:44Z — goose active-set anchor (post-centenarian-ceiling exit).
6. **block/goose #8979** head `3faeabb1de18121caef7e422639caf9075291532` @angiejones merged 2026-05-04T01:54:44Z — goose intra-tick doublet leg.
7. **QwenLM/qwen-code #3807** head `4fb481b9762ae26ece2e2cd77f3916ebb68a4a8f` @doudouOUC merged 2026-05-03T11:36:03Z — qwen active-set anchor (telemetry-lane).
8. **QwenLM/qwen-code #3801** head `ec62eac6497e764631024e241ea1baed659b3e00` @wenshao merged 2026-05-03T10:45:51Z — qwen wenshao-anchor (cli-lane / monitor entries).
9. **QwenLM/qwen-code #3791** head `34d253a8aae5b1e329717fcdcf514be3e74d1ecc` @wenshao merged 2026-05-03T02:05:19Z — qwen wenshao-anchor leg-1 (cli-lane / Background tasks dialog).

Silent-subset reference anchors (the most recent merges *before* the octet, establishing the silent-band boundary):

10. **BerriAI/litellm #27041** head `cf9c2f0200ea9b1c76e5a11e31cb298031976697` @mateo-berri merged 2026-05-03T11:08:42Z — litellm last-merge before silent-band (n_ticks_silent ≥ 8).
11. **BerriAI/litellm #27039** head `7f3d7616b7a7d2deda6d6ff8e8f9675d7b50d129` @mateo-berri merged 2026-05-02T08:42:50Z — litellm anchor-author mateo-berri prior leg (1-day gap pre-silent).
12. **charmbracelet/crush #2774** head `ce673448e4f3ca03b842f0b5fb16e9f29368402a` @meowgorithm merged 2026-05-01T16:18:41Z — crush last-merge before silent-band (n_ticks_silent ≥ 80, octogintet-threshold).

## Joint-likelihood evaluation

Under independent-carrier Poisson activity baseline with per-carrier per-tick activity probability θ_c estimated from W17 prior-band rates:

| carrier | θ_octet (8 ticks) | observed merges | active? |
|---|---|---|---|
| opencode | 0.55 | 3 | ✅ |
| codex | 0.50 | 2 | ✅ |
| goose | 0.32 | 2 | ✅ |
| qwen-code | 0.35 | 3 | ✅ |
| litellm | 0.42 | 0 | ❌ |
| gemini | 0.18 | 0 | ❌ |
| crush | 0.12 | 0 | ❌ |

P(specific 4-active vs 3-silent partition realized | independent θ) = ∏(θ_active) × ∏(1−θ_silent)^8 (with the silent-side compounded over 8 ticks for hard-zero realization). Approximate: ≈ 0.55 × 0.50 × 0.32 × 0.35 × (1−0.42)^8 × (1−0.18)^8 × (1−0.12)^8 ≈ 0.031 × 0.0156 × 0.20 × 0.36 ≈ **3.5 × 10⁻⁵**. Against the maximum-entropy null over all 2⁷ = 128 possible 7-carrier partitions weighted by activity-probability-product, the empirical partition's BF ≈ **×40** (matching M-311.B's first-attempt single-octet realization).

## Sub-window symmetry as additional structural evidence

The octet decomposes into Add.304–307 ∪ Add.308–311. Both 4-tick sub-windows realize the *identical* active-set {opencode, codex, goose, qwen}. Under independent sub-window sampling, P(set-overlap = 4 | independent activity) = C(7,4)⁻¹ × P(per-sub-window-activity-match) ≈ 0.029 × 0.40 ≈ **0.012**. The sub-window invariance is what lifts M-311.B from "single-instance partition observation" to "**partition-as-stable-attractor**" — the basin-lock has *fixed membership*, not *rotating membership*.

## Single-carrier deep cluster: qwen-code wenshao-anchor lane separation

Qwen-code's three octet merges decompose into two distinct architectural lanes:

- **cli-lane** (wenshao-anchored): #3791 head `34d253a8aae5…` (Background tasks dialog) → #3801 head `ec62eac6497e…` (Monitor entries in /tasks). Both wenshao, both `feat(cli):`, gap = 8h40m32s (long-mode same-author-doublet — re-confirms W17-synth-619's bimodal-gap-distribution at a *third* carrier instance).
- **telemetry-lane** (doudouOUC, distinct anchor): #3807 head `4fb481b9762a…` (`fix(telemetry): suppress async resource attribute warning`). Surfaces 51m after #3801, immediately following the wenshao cli-doublet — a structural **lane-rotation** (cli-anchor releases → telemetry-anchor lands).

The wenshao cli-doublet at gap 8h40m is the **third W17-instance** of long-mode same-author-doublet (after kitlangton/opencode 4h49m and conditionally codex author-rotational at 8h34m). This *strengthens* W17-synth-619's bimodal-gap hypothesis: with three long-mode anchors observed and zero forbidden-band observations, BF against uniform-gap null updates from ×3.0 → **×4.5** at three-carrier replication.

## Orthogonality vs prior W17 synths

- **W17-synth-617** (discovery-latency layer): independent of carrier-membership.
- **W17-synth-618** (subgraph-timing layer, interactive-shell→infrastructure two-stage): operates *within* the active-subset, does not address why {litellm, gemini, crush} are absent.
- **W17-synth-619** (author-internal-clock layer): operates *within* same-author-doublet realizations, this synth confirms it at a third carrier (qwen wenshao).
- **W17-synth-620** (this, carrier-membership-set layer): defines the *boundary* of the active-subset that 618 and 619 operate inside.

Joint structural reading: the basin-lock regime is a **hierarchical attractor** with (a) outer shell = carrier-membership-partition (this synth), (b) middle shell = subgraph-timing two-stage (synth-618), (c) inner shell = author-internal-clock bimodal-gap (synth-619), (d) cross-cutting layer = discovery-latency tail-loading (synth-617). All four operate orthogonally and compose multiplicatively.

## Predictions

- W17-620.P1: next 6 ticks (Add.312–317) maintain hard partition: zero merges from {litellm, gemini, crush} (P 0.40 modal under partition-as-stable-attractor; falsified at first silent-side merge, which would *partially* refute partition-stability but *consistent* with finite-attractor-lifetime).
- W17-620.P2: if any silent-subset carrier surfaces a merge, it will be litellm-mateo-berri at head SHA prefix not yet observed in the octet (P 0.45 conditional on silent-side break, modal because litellm has the highest prior θ in the silent set).
- W17-620.P3: qwen-code wenshao extends the cli-lane to triplet within next 8 ticks (P 0.36 sub-modal under W17-synth-619 long-mode anchor extension; would lift wenshao-anchor cum-BF ×8 → ×25 at first triplet realization).
- W17-620.P4: gemini extends silent run to n=80 octogintet, joining crush at the ceiling-tier (P 0.42 modal — would establish a *paired* silent-side ceiling-tier anchor and strengthen partition-stability evidence).
- W17-620.P5: the 4-active subset {opencode, codex, goose, qwen} extends to nonet (Add.304–312) with no membership transitions (P 0.55 modal — direct extension of P-311.C; would lift M-311.B cum-BF ×40 → ×90+ at first nonet-extension).
