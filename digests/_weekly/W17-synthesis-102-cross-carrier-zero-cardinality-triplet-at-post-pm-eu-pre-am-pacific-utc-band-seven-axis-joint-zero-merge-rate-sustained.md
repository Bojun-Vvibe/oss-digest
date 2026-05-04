# W17 Synthesis #102 — Cross-carrier zero-cardinality triplet at the post-PM-EU / pre-AM-Pacific UTC band: seven-axis joint-zero merge-rate sustained for three consecutive 50m capture windows (Add.305/306/307, 2026-05-04T22:15Z → 2026-05-05T00:45Z)

**Anchor windows:** Add.305 (22:15Z–23:05Z), Add.306 (23:05Z–23:55Z), Add.307 (23:55Z–00:45Z) UTC.
**Anchor carriers:** all seven monitored axes — sst/opencode, openai/codex, BerriAI/litellm, charmbracelet/crush, google-gemini/gemini-cli, QwenLM/qwen-code, block/goose.
**Anchor merges (last-pre-window-merge per axis, all verified via `gh pr view <num> -R <repo>`):**

- sst/opencode: #25640 mergeCommit `ce89bcb8e238401ea8fee000dc54539057d47dc4` @Utkub24 2026-05-03T22:58:17Z (last merge before Add.305 window)
- openai/codex: #20896 mergeCommit `67849d955...` @etraut-openai 2026-05-03T17:23:09Z
- QwenLM/qwen-code: #3807 mergeCommit `e617f20d1598ab7d7d99694e13549a3429c971d0` @doudouOUC 2026-05-03T11:36:03Z
- BerriAI/litellm: #27041 mergeCommit `c011a7e3ba4218015c808f9891cba9dae48056a1` @mateo-berri 2026-05-03T11:08:42Z
- google-gemini/gemini-cli: #26348 mergeCommit `36385417...` @app/gemini-cli 2026-05-01T19:36:15Z
- charmbracelet/crush: #2774 mergeCommit `ce314b8e...` @meowgorithm 2026-05-01T16:18:41Z
- block/goose: #8953 mergeCommit `e76640c8...` @kalvinnchau 2026-05-01T21:15:56Z

**Parent synths:** #602 (bimodal-recovery framework after long quiescence), #609 (intra-window regime transition primitive), #610 (diurnal-spanning silence saturation across six carriers on fast-tier singleton anchor).

## What synth #102 captures that #602 / #609 / #610 do not

Synth #602 introduced the bimodal-recovery framework but did not enumerate the **closing edge** of an active phase (the framework focused on the rebound-after-long-quiescence side). Synth #610 enumerated a six-carrier diurnal-spanning silence with a fast-tier singleton anchor still active — i.e., near-zero but not exact-zero. Synth #609 described an intra-window regime transition but for one carrier, not seven.

Synth #102 captures the **first-W17-instance of a seven-axis joint exact-zero realization sustained for three consecutive capture-ticks**. The structural difference vs #610 is decisive: #610 had at least one axis active in every tick; #102 has zero axes active for three ticks running. The difference vs #602 is direction: #602 anticipates rebound; #102 documents closure.

## The triplet anatomy

| Tick | Window (UTC) | Cross-carrier merges | Per-carrier silence-tier advance |
|---|---|---|---|
| Add.305 | 22:15Z–23:05Z | 0 (after retroactive Utkub24 reclassification — see Add.306) | opencode n=0→1, codex n=7→8, qwen n=15→16, litellm n=16→17, gemini n=70→71, crush n=73→74, goose n=104→105 |
| Add.306 | 23:05Z–23:55Z | 0 | opencode n=1→2, codex n=8→9, qwen n=16→17, litellm n=17→18, gemini n=71→72, crush n=74→75, goose n=105→106 |
| Add.307 | 23:55Z–00:45Z | 0 | opencode n=2→3, codex n=9→10, qwen n=17→18, litellm n=18→19, gemini n=72→73, crush n=75→76, goose n=106→107 |

**All seven axes advance their silence-counter by exactly +1 per tick across the triplet** — i.e., zero merges land on any monitored axis for the entire 2h30m capture-aggregate window.

## The Bayes-factor calculation

Empirical W17 per-axis active-rate (averaged over the prior 30 ticks) ≈ 0.18 merges per 50m window per axis. Joint-zero probability per tick under independent-axis Poisson baseline:

- P(axis-zero | one tick) = (1 − 0.18) ≈ 0.82 per axis (Bernoulli approximation; Poisson with λ=0.18 gives P(0) = e^{-0.18} ≈ 0.835, well-aligned)
- P(seven-axis joint-zero | one tick) = 0.82^7 ≈ **0.234** under independence
- P(joint-zero triplet | three independent ticks) = 0.234^3 ≈ **0.0128**
- BF against independent-axis-baseline = 1/0.0128 ≈ **×78**

This is a **moderate-confirmation** Bayes factor. The triplet is unlikely under independence, but not decisive on its own — the BF of ×78 is one to two orders of magnitude below the synth #101 BF of ×1280, reflecting that joint-zero is a one-bit-per-axis event whereas the synth #101 conjunction was a multi-property structural match.

## The diurnal-pause-synchronization mechanism

The triplet falls in the **22:15Z–00:45Z UTC band**, which corresponds to:

- 18:15–20:45 ET (US East post-EOD)
- 15:15–17:45 PT (US Pacific late-afternoon)
- 23:15–01:45 CET (Central Europe nighttime)
- 06:15–08:45 CST China next-morning (pre-workday)

This is the global-trough band where **no major contributor timezone is in active work hours**. The seven monitored carriers have contributor-base concentrations across these timezones (kitlangton/Utkub24 EU/US; etraut-openai/aibrahim-oai US; mateo-berri/Sameerlite US/India; meowgorithm/andreynering US/BR; cocosheng-g/SandyTao520 US/CN; doudouOUC/wenshao CN; kalvinnchau/delkc US). The empirical joint-zero rate (×78 above independence) is consistent with **none of the contributor pools being in active work hours simultaneously** during this 2h30m capture-aggregate band.

Three candidate generative mechanisms:

1. **Diurnal-pause-synchronization (preferred)**: All seven carriers' contributor pools are simultaneously off-shift during the 22:15Z–00:45Z UTC band. Predicts: the joint-zero triplet should **reproduce on subsequent days at the same UTC time**, and should **dissolve at 01:00Z–03:00Z** as AM-Pacific contributors come online.
2. **Active-phase closure (synth #602 framework extension)**: The W17 active phase that began at Add.298 has terminated globally; the triplet is the first three ticks of a new quiescence phase rather than a diurnal artifact. Predicts: zero-cardinality should **persist or extend to a quartet/quintet at 01:00Z+** instead of dissolving.
3. **Coincidence under thin sampling**: With seven carriers and ~50 capture ticks per W17 day, the probability of *some* triplet of joint-zero windows is non-negligible. Predicts: no replication on any subsequent day at this UTC band beyond the per-tick joint-zero rate of 0.234.

The three mechanisms make **disjoint** predictions for Add.308–Add.318. Synth #102 stays open until the next 01:00Z–03:00Z window resolves mechanism 1 vs mechanism 2.

## Predictions derived from synth #102

- P-102.A: Add.308 (00:45Z–01:35Z) sees cardinality-rebound to ≥1 (P 0.55 modal under mechanism 1 — AM-Pacific onset around 01:00Z; P 0.20 sub-modal under mechanism 2; P 0.45 under mechanism 3). The mechanism-resolution power at Add.308 is **highest** of any single subsequent tick.
- P-102.B: 2026-05-05 22:15Z–00:45Z (gap-24h) reproduces a joint-zero triplet (P 0.50 under mechanism 1 — would lift cum-BF ×78 → ×500–1000; P 0.10 under mechanism 3).
- P-102.C: If P-102.A resolves to rebound and P-102.B resolves to replication, mechanism 1 cum-BF lifts by combined ×3–6 to ×234–468 and synth #102 becomes the **canonical W17 diurnal-pause anchor**.
- P-102.D: At least one carrier in the next pause-triplet is **in {opencode, codex, litellm, qwen}** (P 0.85 modal — fast-tier carriers contribute most variance per tick; would refine the per-axis weighting in the joint-zero formula).

## What synth #102 explicitly does NOT claim

- **Not** that the seven carriers coordinate releases or share infrastructure.
- **Not** that the silence-counter lockstep advance (+1 per tick across all seven) is mechanically novel — it is the trivial consequence of zero merges, listed for ledger-completeness only.
- **Not** that the BF ×78 is well-calibrated — the per-axis active-rate of 0.18 is a 30-tick rolling estimate and could be biased upward (over-counting active windows) which would deflate the BF, or biased downward which would inflate it.
- **Not** that the diurnal-pause hypothesis is the only viable mechanism — active-phase-closure remains live until Add.310+.
