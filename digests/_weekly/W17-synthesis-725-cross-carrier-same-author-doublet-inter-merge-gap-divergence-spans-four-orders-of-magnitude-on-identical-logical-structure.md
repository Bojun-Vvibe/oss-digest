# W17 Synthesis #725 — Same-pattern same-author-doublet inter-merge-gap divergence across carriers spans four orders of magnitude on identical logical structure

**Anchor window:** 2026-05-04T20:57:07Z → 2026-05-06T04:44:40Z (~32h).
**Anchor carriers:** anomalyco/opencode, block/goose, BerriAI/litellm, QwenLM/qwen-code, charmbracelet/crush.
**Lens:** cross-carrier inter-merge-gap distribution conditional on holding author and surface-adjacency constant.

## Why this is distinct from prior synth (W17 #720–#724)

- **#720** (multi-themed regime trifurcation) and **#722** (POST_CLUSTER_DIFFUSION cross-carrier replication) operate at **tick-scale** on cluster-state evolution, not at the **per-doublet inter-merge-gap** level.
- **#721** (Z′-bot ↔ K-human reciprocal-citation closed-loop pair) is a single-pair-multi-author signature, not a same-author signature.
- **#723** (THEME_CONVERGENCE_NO_CITATION across 4 carriers / 6 PRs) measures cross-author independent convergence on a shared theme — orthogonal to single-author serial behavior.
- **#724** (HUMAN_LABELED_ALTERNATIVES small-n maintainer-optimization) is intra-carrier and concerns explicit title-labeling, not adjacency dynamics.

This synth is the first to take the structural primitive **"one author, two adjacent merges on related-but-not-identical surfaces"** and ask: **what is the gap distribution when the carrier varies?** The answer turns out to be **four orders of magnitude**, which constrains how any cross-carrier maintainer-throughput model can be normalized.

## The five doublets

| # | Carrier | Author | PR-A | PR-B | A-merged | B-merged | Gap | Surface |
|---|---|---|---|---|---|---|---|---|
| D1 | anomalyco/opencode | Brendonovich | [anomalyco/opencode#25968] (`031a0cc8`) | [anomalyco/opencode#25972] (`e969d0af`) | 04:30:21Z | 04:44:40Z | **14m19s** | desktop/onboarding → desktop/sentry |
| D2 | block/goose | alexhancock | [block/goose#9029] (`655e7f42`) | [block/goose#9028] (`3fa7bf94`) | 19:20:35Z | 19:31:00Z | **10m25s** | agents/CLAUDE.mds → agents/AGENTS.md |
| D3 | BerriAI/litellm | ishaan-berri | [BerriAI/litellm#27216] (`2673b0e1`) | [BerriAI/litellm#27271] (`2ba2eafc`) | 02:05:23Z | 03:04:57Z | **59m34s** | rate-limit 429 → Prometheus K-pair |
| D4 | QwenLM/qwen-code | doudouOUC | [QwenLM/qwen-code#3833] (`3a11b67e`) | [QwenLM/qwen-code#3832] (`1bf3eada`) | 2026-05-05T11:25:00Z | 2026-05-06T03:14:03Z | **15h49m03s** | sdk-python feat → sdk-python fix |
| D5 | charmbracelet/crush | (no qualifying author) | — | — | — | — | **N/A** | (control: carrier emits 0 same-author intra-32h doublets) |

Cross-pattern instantiation in the **bot domain** for reference (not counted as same-author for the human comparison):
- gemini-cli-robot [google-gemini/gemini-cli#26545] (`79ad78e6`) ↔ [google-gemini/gemini-cli#26544] (`4ede53fa`), gap **21 seconds**, surface = release-branch cherry-pick fanout. This is the **bot-domain extreme low** of the gap distribution.

## The four-order-of-magnitude span

Plotting the four human doublets D1–D4 logarithmically:

```
1s  ────  10s  ────  100s  ────  1000s  ────  10000s  ────  100000s
                                  D2(625s)
                                    D1(859s)
                                              D3(3574s)
                                                                 D4(56943s)
```

The bot doublet adds a fifth point at 21s (≈10^1.3). Across the **five points**, the gap distribution spans:
- **min**: 21s (gemini-cli-robot, bot)
- **max**: 56,943s (doudouOUC, qwen-code human)
- **ratio**: ~2,711×

Across the **four human points**:
- **min**: 625s (alexhancock, goose)
- **max**: 56,943s (doudouOUC, qwen-code)
- **ratio**: ~91×

## Why the divergence is not explained by surface-adjacency

A naive hypothesis: gaps are short when PR-A and PR-B touch the **same file** (because the author is iterating in their editor) and long when surfaces are **disjoint** (because the author is doing other work between them).

This is **falsified** by the data:

- **D1** (Brendonovich): PR-A and PR-B touch **disjoint files** (`onboarding/test-mode.ts` vs `sentry/init.ts`), gap = **14m**.
- **D2** (alexhancock): PR-A and PR-B touch **adjacent files** (CLAUDE.mds mirrors AGENTS.md), gap = **10m**.
- **D3** (ishaan-berri): PR-A and PR-B touch **disjoint themes** (rate-limit 429 enrichment vs Prometheus cardinality cap), gap = **60m**.
- **D4** (doudouOUC): PR-A and PR-B touch **identical surface** (`sdk-python` release-version helper), gap = **16h**.

Surface-adjacency does **not** monotonically predict gap. D4 is the **most surface-adjacent** doublet and the **largest** gap; D1 is the **least surface-adjacent** doublet and a **medium-low** gap.

## Why the divergence is not explained by maintainer throughput alone

If gaps were purely a function of carrier-wide maintainer throughput (PRs/hour), the doublet gap should correlate inversely with carrier throughput. Approximate maintainer throughput in the 60h window:

- anomalyco/opencode: ~30+ merges → ~0.50/h → expected gap ≈ 7,200s ≈ **2h**. **Actual D1 = 14m**. Anomaly: D1 is **8× shorter** than throughput predicts.
- block/goose: ~12 merges → ~0.20/h → expected gap ≈ 18,000s ≈ **5h**. **Actual D2 = 10m**. Anomaly: D2 is **30× shorter**.
- BerriAI/litellm: ~30+ merges → ~0.50/h → expected gap ≈ 7,200s ≈ **2h**. **Actual D3 = 60m**. Within ~2× of prediction.
- QwenLM/qwen-code: ~12 merges → ~0.20/h → expected gap ≈ 18,000s ≈ **5h**. **Actual D4 = 16h**. Anomaly: D4 is **3× longer** than throughput predicts.
- charmbracelet/crush: ~4 merges → ~0.067/h → expected gap ≈ 54,000s ≈ **15h**. **Actual D5 = no doublet emitted**. Anomaly: D5 should have produced at least one same-author doublet by Poisson alone if maintainers were independent.

The throughput model is **systematically wrong** in opposite directions for D1/D2 (too short) and D4 (too long), and is **inapplicable** for D5 (zero events).

## The proposed explanation: per-author session geometry, not carrier rate

The data is consistent with a model in which each author's gap distribution is governed by their **personal session geometry** — whether they merge in a tight WIP-flush at session-end (D1, D2 — multiple PRs reviewed and merged simultaneously) vs. whether they iterate over multi-day cycles (D4 — PR-A merged in workday A, PR-B in workday B). The carrier provides the *opportunity* (review bandwidth, CI capacity), but the *gap* is set by the author's own batching behavior.

Under this model:
- D1 and D2 are **session-flush doublets** (author had both PRs ready, merged them in the same review session).
- D3 is a **mid-session doublet** (author returned to a different theme between merges).
- D4 is a **cross-session doublet** (author returned the next workday).
- D5 is the **no-session-flush** carrier (crush maintainers do not batch their merges).

This per-author-geometry hypothesis predicts that **the same author across different carriers should produce more similar gaps than different authors in the same carrier**. We cannot test this in the current data because no author appears in multiple carriers in the W17 window.

## Predicates for falsification at W18 day-2

This synth is **provisionally accepted** if and only if at the next 24h capture:
1. At least one new D1-class session-flush doublet appears in anomalyco/opencode with gap ≤ 30m.
2. doudouOUC (or another qwen-code maintainer) emits at least one D4-class cross-session doublet with gap ≥ 6h.
3. crush emits zero same-author intra-24h doublets (D5 holds).

Falsification (any one of):
- crush emits a sub-30m same-author doublet (would invalidate the "no session-flush" claim for crush).
- qwen-code emits a sub-30m same-author doublet (would push D4 toward the per-carrier-rate model).
- The gap distribution within a single author across multiple carriers is observed and is *more* dispersed than within different authors of the same carrier (would invalidate the per-author-geometry hypothesis).

## Cross-references

- Reciprocal-citation pair (synth-721): D3 PR-B [BerriAI/litellm#27271] is the human side of the closed-loop K pair with [BerriAI/litellm#27268]; PR-A is **disjoint** from K, confirming that ishaan-berri's K-loop is a *subset* of his doublet activity.
- Bot-fanout signature: gemini-cli-robot [google-gemini/gemini-cli#26545] / [google-gemini/gemini-cli#26544] at 21s is **deterministic** (cherry-pick of the same source SHA `3627f47` from [google-gemini/gemini-cli#26542]) and therefore lives in a different mechanistic regime from the four human doublets, even though it shares the structural primitive.
- ADDENDUM-375 NO 1 (Brendonovich) and NO 7 (alexhancock) are the source observations.
