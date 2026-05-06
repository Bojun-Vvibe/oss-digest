# W17 Synthesis #731 — Same-author same-surface PR chain with non-monotonic inter-merge-gap recovery (post-saturation re-pressurization) as a defect-class-discovery signature distinct from monotonic-decay-to-saturation chains

**Anchor window:** 2026-05-06T04:30:21Z → 2026-05-06T07:30:18Z (3h00m, anomalyco/opencode desktop/ surface, Brendonovich).
**Anchor carriers:** anomalyco/opencode (the non-monotonic anchor), with comparison datapoints from openai/codex (bolinfest bwrap chain, monotonic-shrinkage), QwenLM/qwen-code (doudouOUC sdk-python chain, multi-day continuous), block/goose (kalvinnchau ACP chain, day-spaced).
**Lens:** prior synths characterize same-author same-surface chains as (a) **monotonically-decaying** (synth #729's bolinfest bwrap with gaps 1h06m → 4h00m → 1h11m, where the 4h is a B-handoff outlier and the underlying A-only sub-chain shrinks), (b) **multi-day continuous** (synth #725 doudouOUC, gaps clustered around 24h±a few hours), or (c) **intra-tick pre-batched** (synth #727, sub-minute). None covers the **post-saturation re-pressurization** signature: a chain whose gap **shrinks after expanding**, implying the surface was momentarily drained and then a **new defect class** surfaced to refill the queue.

## Why this is distinct from prior synth (W17 #720–#730)

- **#725** (cross-carrier same-author doublet inter-merge-gap divergence): treats gaps as a static distribution across carriers; not a temporal-shape statistic on a single chain.
- **#727** (sub-minute pre-batched merge-button): intra-tick mechanism, gap is bounded above by ~60s; doesn't model gap-shape evolution across ticks.
- **#728** (multi-carrier silence as coordination-vacuum): anti-event; not chain-internal.
- **#729** (A→B→A author rotation): explicit author switch as the discriminator; the gap shape is monotone-shrinking once the B-handoff is excluded.
- **#730** (24h-aligned scheduled-commit-window): assumes the chain is scheduled and gaps are ~24h-quantized; non-monotone shorter-scale gaps are ignored.
- This synth (#731) is the **first** to argue that a same-author chain's **gap-shape non-monotonicity** is mechanism-distinct from monotonic decay: a non-monotone "shrink → expand → shrink" pattern requires a **mid-chain queue-replenishment event**, which under same-author/same-surface assumptions can only be **defect-class discovery** (a new bug type surfaces after the original batch has nominally drained).

## The Brendonovich quartet anchor (anomalyco/opencode desktop/)

| PR | author | mergedAt | head SHA | surface | Δt from prior |
|---|---|---|---|---|---|
| [anomalyco/opencode#25968] | Brendonovich | 2026-05-06T04:30:21Z | `031a0cc8` | desktop/onboarding-env | — |
| [anomalyco/opencode#25972] | Brendonovich | 2026-05-06T04:44:40Z | `e969d0af` | desktop/sentry-suppress | **14m19s** |
| [anomalyco/opencode#25976] | Brendonovich | 2026-05-06T06:39:21Z | `6ca55f6f` | desktop/auto-install-quit | **1h54m41s** |
| [anomalyco/opencode#25980] | Brendonovich | 2026-05-06T07:30:18Z | `3683173a` | desktop/EPIPE-suppress | **51m** |

**Properties:**
- Same author, same logical surface (`desktop/`), 4 PRs over 3h00m (3.0 PRs/hour sustained).
- **Gap sequence**: 14m19s → 1h54m41s → 51m. Ratio between successive gaps: ×8.06 then ×0.444. The product-of-ratios = 3.58 ≠ 1 (non-cancelling), so the chain is not a noise-around-mean random walk on log-gap.
- **Gap-shape descriptor**: the middle gap is the **maximum** of the chain (1h54m41s vs 14m19s and 51m). For a 4-PR chain with gap-vector (g₁,g₂,g₃), max-at-g₂ requires g₂>g₁ AND g₂>g₃ — a **2-condition shape** that occurs in 1/3 of permutations of a fixed unordered triple, but is **structurally rare** under decay-to-saturation models which require g₁<g₂<g₃.
- **Surface-class evolution**: the four PR titles touch four distinct desktop/ defect classes — onboarding env, Sentry suppression, auto-install on quit, EPIPE in console transport. The fourth class (EPIPE) was **not in the original Brendonovich batch** (the first three are all "noise/lifecycle suppression" while the fourth is a transport-layer error class). This is consistent with **#25976 having drained the original queue** and **#25980 representing a fresh defect discovered during the post-#25976 quiet period**.

## Why the gap-shape implies re-pressurization (formal argument)

Under a pure "drain a fixed-size batch" model with constant per-PR review effort, the inter-merge gap should be approximately constant or weakly increasing (review fatigue). Under a "decay-to-saturation" model (synth #729's mechanism), the gap monotonically increases as the easy PRs ship first and harder PRs trail. **Both models forbid a contraction in the third gap** (g₃<g₂).

The observed g₃=51m < g₂=1h54m41s requires either:
- (i) a discrete event between g₂ and g₃ that adds new PRs to the queue (defect-class discovery), or
- (ii) a discrete event that increases reviewer throughput (e.g., a co-reviewer joining), or
- (iii) noise — but the ratio g₂/g₃=2.27 is well outside one-sigma of the lognormal-gap fit for this carrier (Add.358–377 carrier rolls show same-author gap CV~0.6 in log-space; 2.27× corresponds to ~1.5σ if log-mean is the median of the chain).

The (i) explanation is supported by the title-class shift; (ii) requires evidence of a co-reviewer (none observed); (iii) is marginally consistent but requires committing to noise over signal.

## Comparison to monotonic-decay chains

| chain | gap pattern | shape |
|---|---|---|
| codex bwrap (synth #729) bolinfest A→A: #21256 → #21257 | 1h06m | trivially monotone (n=1 gap) |
| codex bwrap full A→B→A: #21257 → #21285 → #21312 | 4h00m → 1h11m | monotone decreasing |
| qwen-code doudouOUC sdk-python (synth #725 cite): #3834 → #3833 → #3832 | 9h09m → 15h49m | monotone increasing (decay-to-saturation) |
| goose ACP chain Add.377 cite: #9000 → #9023 → #9030 | 19h32m → 4h39m | monotone decreasing across 2 authors |
| **opencode Brendonovich (this synth)**: #25968 → #25972 → #25976 → #25980 | 14m19s → 1h54m41s → **51m** | **non-monotone (peak at g₂)** |

The Brendonovich quartet is the **only chain in the W17–W18 anchor window with a peak-at-interior gap-shape**. Under uniform random labeling of a 3-gap shape (peak at g₁, g₂, or g₃), the prior is 1/3 for "peak at g₂"; observing this once in five anchor chains is consistent with the prior. But the **specific defect-class shift** at the contracted-gap PR (#25980's EPIPE class vs #25968/25972/25976's lifecycle/suppression classes) is a **falsifying additional structural feature** that elevates the observation from prior-consistent to mechanism-attributable.

## Predictions / falsifiability

- If Brendonovich opens **#25984** within the next tick on a fifth distinct desktop/ defect class, the re-pressurization mechanism is reinforced and the chain becomes a 5-PR sequence with gap-shape (14m, 1h54m, 51m, g₄). Predicted g₄ regime: <60m if re-pressurization continues, ≥2h if the surface re-saturates.
- If the next desktop/ PR is by a different author, the chain converts to A^4 → A^4-B and synth #729's A→B→A logic applies to the extended chain.
- Falsified if no desktop/ PR by any author lands within 4h of #25980.
- Cross-carrier validation: search W18 day-2 same-author chains of length ≥4 for analogous gap-shape non-monotonicity. Predicted base rate: ~1/3 of chains under uniform-shape null, but with title-class-shift correlation only at the contracted-gap PR.

## Anchor citations (head SHAs)

- anomalyco/opencode #25968 `031a0cc8`, #25972 `e969d0af`, #25976 `6ca55f6f`, #25980 `3683173a`.
- Comparison anchors: openai/codex #21257 `a736cb55`, #21285 `9766d3d5`, #21312 `22326e26` (synth #729 monotone chain); QwenLM/qwen-code #3832 `2bd4aa1b`, #3833 `07441cc1`, #3834 `2c93fd67` (synth #725 cite, monotone-increasing); block/goose #9000 `2fe4c3d0`, #9023 `8be5304d`, #9030 `b17fd4f2` (Add.377 cite, monotone-decreasing).

**11 PRs cited across 4/7 carriers** (anomalyco/opencode 4, openai/codex 3, QwenLM/qwen-code 3, block/goose 3; gemini-cli/litellm/crush not cited as they have no length-≥3 same-author same-surface chain in the anchor window).
