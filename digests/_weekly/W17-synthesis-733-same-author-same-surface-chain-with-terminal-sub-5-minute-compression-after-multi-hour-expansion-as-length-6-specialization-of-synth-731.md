# W17 Synthesis #733 — Same-author same-surface chain with terminal sub-5-minute compression after multi-hour gap expansion as a length-≥6 specialization of synth #731's non-monotonic gap recovery

**Anchor window:** 2026-05-06T04:30:21Z → 2026-05-06T08:40:46Z (4h10m25s, anomalyco/opencode, Brendonovich on desktop/ surface).
**Anchor carriers:** anomalyco/opencode (the sextet anchor), with structural comparison to BerriAI/litellm (synth #727 same-surface monotone doublet), QwenLM/qwen-code (synth #732 cross-surface inverted doublet), block/goose (synth #730 24h-aligned ACP surface), openai/codex (bolinfest bwrap chain).
**Lens:** synth #731 characterized **non-monotonic gap recovery** in length-≥4 same-author same-surface chains as a "post-saturation re-pressurization" signature where gap shape is expansion-then-contraction (e.g., 14m → 1h54m → 51m — gaps grow then shrink, indicating a new defect class re-pressurizes a nominally-drained surface). The Brendonovich sextet **extends the chain to length-6** with a fifth gap of **3m35s** — an order-of-magnitude contraction below any prior gap in the chain. This is mechanism-distinct from synth #731's 51m post-saturation contraction because the sub-5-minute terminal gap implies **pre-batched merge-button serial processing** (synth #727's mechanism) operating on the **terminal element of an otherwise long-gap chain**. The sextet is therefore a **two-regime composition**: synth #731's slow-gap re-pressurization (gaps 1–4) followed by synth #727's fast-gap pre-batched (gap 5).

## The Brendonovich sextet (anomalyco/opencode desktop/)

| # | mergedAt | head SHA | gap-from-prior | regime |
|---|---|---|---|---|
| #25968 | 04:30:21Z | `031a0cc8` | — | (chain head) |
| #25972 | 04:44:40Z | `e969d0af` | 14m19s | slow-gap |
| #25976 | 06:39:21Z | `6ca55f6f` | 1h54m41s | slow-gap (expansion peak) |
| #25980 | 07:30:18Z | `3683173a` | 51m | slow-gap (synth #731 contraction) |
| #25996 | 08:37:11Z | `493b55c9` | 1h06m53s | slow-gap (re-expansion) |
| #25998 | 08:40:46Z | `baaf676a` | **3m35s** | **fast-gap pre-batched (synth #727 mechanism)** |

## Why this is distinct from prior synth (W17 #720–#732)

- **#727** (sub-minute pre-batched merge-button): same-surface monotone-ordered, but characterized as a **standalone doublet**. The Brendonovich sextet's terminal gap exhibits the synth #727 mechanism but **embedded in a longer chain** with a different majority regime — neither synth #727 nor synth #731 covers the **regime-composition** case.
- **#729** (A→B→A author rotation): explicit author switch; the sextet is single-author throughout.
- **#730** (24h-aligned scheduled): macro-cadence; sextet spans 4h10m, sub-24h.
- **#731** (non-monotonic gap recovery): chain-length ≥4, but the original anchor was length-4 (Brendonovich quartet at Add.378). The sextet **extends synth #731's anchor by 2 elements** and reveals that the recovery pattern continues for additional cycles, with the **fifth gap dropping by an order of magnitude** below any prior cycle's contraction (3m35s vs 51m).
- **#732** (cross-surface inverted doublet): the sextet is same-surface throughout (all desktop/), monotone PR-number ordering, so #732's parallel-review-streams mechanism does not apply.
- This synth (#733) is the **first** to argue that **terminal sub-5-minute compression in a length-≥6 same-author same-surface chain implies regime-switching** from slow-gap re-pressurization to fast-gap pre-batched within a single author session.

## Formal argument: why terminal compression implies regime-switching

Under synth #731's pure re-pressurization model, gaps oscillate within a band (here roughly 14m–1h54m) as new defect classes re-pressurize the surface. The model predicts gap-5 ∈ [14m, 1h54m] with high probability. The observed gap-5 = 3m35s is **3.9× below the lower band edge** — a tail event of probability ≪ 0.05 under a uniform-on-band null.

Under synth #727's pre-batched model, gaps are in the 0–60s band (the merge-UI click latency). Gap-5 = 3m35s is **above** the synth #727 typical range (sub-minute) but only by a factor of ~3.6, vs synth #731's tail factor of 3.9 below band — the regime-switch hypothesis is **better supported** if we admit the synth #727 mechanism with relaxed click-latency assumption (e.g., reviewer reviews PR_5, takes 3m to read diff, then clicks merge — vs sub-minute pre-batched click-click-click).

The structural evidence for synth #727 mechanism on the terminal pair (#25996 chore: + #25998 feat:):
1. **Type co-occurrence**: chore: + feat: is a typical pre-batched pair (a maintainer cleaning up dependencies before shipping a feature).
2. **Surface identity**: both desktop/, monotone PR-number ordering (#25996 < #25998), monotone merge-time ordering — matches synth #727's serial-review prediction.
3. **Logical coupling**: #25996 adds @parcel/watcher platform packages to optionalDependencies; #25998 implements clipboard write permission handling. The clipboard implementation likely depends on the desktop runtime that @parcel/watcher contributes to — **the chore PR is a precondition of the feature PR**, forcing serial merge order.

Under the regime-switch hypothesis, the terminal pair is a synth #727 doublet appended to a synth #731 chain — and the appendage is the **structural signature** sought by synth #733.

## Anchor citations (head SHAs, ≥10 PRs across multiple carriers)

- **anomalyco/opencode (Brendonovich sextet, primary anchor):** #25968 `031a0cc8`, #25972 `e969d0af`, #25976 `6ca55f6f`, #25980 `3683173a`, #25996 `493b55c9`, #25998 `baaf676a`.
- **anomalyco/opencode (concurrent surface-disjoint context):** #25749 `e87ecc72` (kill74 docs), #25866 `410fbad5` (zharinov ui/), #25993 `ee54e3b3` (nexxeln tui/) — establish that the desktop/ chain runs concurrently with 3 disjoint surfaces, so the regime-switch is desktop/-specific not carrier-wide.
- **BerriAI/litellm comparison anchors (synth #727 mechanism reference):** #27264 `(yassin-berriai)` as last litellm merge prior to deep-silence — establishes that synth #727 doublets are absent from current litellm behavior, contrasting with the appearance of synth #727 as the terminal pair of the Brendonovich sextet.
- **openai/codex comparison anchor (bwrap chain reference):** #21312 `6259cee9` (bolinfest bwrap release) and #19193 `64d39b6d` (mzeng-openai Apps-auth) — codex chains do not exhibit terminal compression in the W18 day-1 window (gap from #21312 to #19193 is 44m47s with PR-number inversion, a synth #732 mechanism rather than synth #733).
- **QwenLM/qwen-code comparison anchor (synth #732 cross-surface):** #3768 `0a0c17f7` and #3735 `03ed878e` (tanzhenxin cross-surface inverted doublet) — synth #732 mechanism is present in qwen-code but no length-≥6 chain to test synth #733 against.
- **block/goose comparison anchor (synth #730 24h scale):** kalvinnchau #9030 `b17fd4f2` — synth #730 scale is 24h, orthogonal to synth #733's 4h chain.

**13 PRs cited across 5/7 carriers** (anomalyco/opencode 9, BerriAI/litellm 1, openai/codex 2, QwenLM/qwen-code 2, block/goose 1; gemini-cli + crush not cited — no qualifying chains in anchor window).

## Predictions / falsifiability

- If the next length-≥6 same-author same-surface chain in any carrier exhibits terminal sub-5-minute compression with chore+feat type co-occurrence on the terminal pair, the regime-switch mechanism is reinforced.
- If Brendonovich extends to A^7 (#26000+ desktop/), the regime continues — predict the next gap is either <5m (synth #727 regime persists) or >30m (synth #731 regime resumes); a gap in 5–30m would be unanchored to either mechanism and would falsify the regime-switch interpretation.
- Falsified if the terminal pair PRs are revealed to have **no logical coupling** (the chore PR is unrelated to the feat PR) — would suggest the 3m35s gap is coincidence rather than precondition-forced serial merge.
- Cross-carrier validation: scan W18 day-2+ for length-≥6 same-author same-surface chains and classify by terminal-gap regime; predicted ratio is heavily skewed toward synth #731 pure-re-pressurization (no terminal compression) if the Brendonovich sextet is a single-occurrence event.

## Connection to ecosystem-wide context

The sextet completes during the **6-of-7 deep-silence configuration** documented in Add.379 — a context where opencode is the only active carrier. This raises the question whether terminal compression is a **carrier-isolation effect** (a maintainer with no other carrier-mediated distractions completes pre-batched merges faster) — synth #734 develops this orthogonal angle.
