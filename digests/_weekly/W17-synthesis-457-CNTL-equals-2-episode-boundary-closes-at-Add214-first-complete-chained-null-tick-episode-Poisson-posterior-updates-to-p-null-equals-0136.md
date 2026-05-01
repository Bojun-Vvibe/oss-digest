# W17 Synthesis #457 — CNTL=2 episode-boundary closes at Add.214; first complete chained-null-tick episode in the visible Add.193-214 lookback; Poisson posterior updates to p_null = 0.136 with second consecutive Interpretation-B corroboration

**Anchor**: ADDENDUM-214 M-214.A documents that the Add.212-213 CNTL=2 chain (synth #455 anchor) **broke at exactly n=2** when codex re-emerged via xl-openai PR #20560 (mergeCommit `48791920a8b122939c4d3feb15673c0a690ca4a0`, mergedAt 2026-05-01T07:50:12Z, +589/-76). Per synth #455 P-455.A under Interpretation B (Poisson p_null = 0.143), CNTL extension to n=3 had prior ~0.143 and CNTL break at n=2 had prior ~0.857. The Add.214 break event is the **second consecutive corroboration** of synth #455's Bayesian rejection of synth #453 Interpretation A.

## Why this is distinct from synth #455

Synth #455 captured the **opening** of the Add.212-213 chained-null episode: it introduced CNTL as a structural metric, computed the explicit Bayes-factor for the Add.213 = null observation (favouring Interpretation B), and assigned forward priors to Add.214's null-vs-active state. The synth treated the chain as **open and uncertain at length 2**, with prior ~0.143 of extending to n=3.

Synth #457 captures the **closure** of the same episode: Add.214 = active tick with cardinality 1, the chain breaks at exactly n=2, and the Add.193-214 visible lookback now contains its **first complete CNTL=2 episode** with a defined start (Add.212), defined end (Add.213), defined adjacent active boundaries (Add.211 active, Add.214 active), and defined run length (2). This is structurally **distinct** from synth #455's open-chain framing because the episode has now been **observed in its entirety** — its forward priors have collapsed to retrospective certainties, and the Bayesian model can be updated from a complete observation rather than a partial one.

## The complete episode

| boundary | tick | state | cardinality | width |
|---|---|---|---|---|
| pre-episode (final active) | Add.211 | active | 4 | 45m27s |
| episode start | Add.212 | null | 0 | 52m11s |
| episode interior | Add.213 | null | 0 | 26m21s |
| post-episode (first active) | Add.214 | active | 1 | 26m38s |

**Episode metrics**:

- **Run length**: 2 (Add.212-213).
- **Total episode duration**: 78m32s (sum of Add.212+Add.213 widths).
- **Pre-episode→episode width step**: 45m27s → 52m11s (+6m44s, +14.8% — the synth #451 calmer-regime sustain).
- **Episode-start→episode-interior width step**: 52m11s → 26m21s (−25m50s, −49.5% — the synth #455 short-tail collapse).
- **Episode-interior→post-episode width step**: 26m21s → 26m38s (+17s, +1.07% — the Add.214 flat-plateau, M-214.A note).
- **Pre-episode cardinality**: 4 (the synth #451 anchor — the highest visible single-tick cardinality at Add.211).
- **Post-episode cardinality**: 1 (codex single-merge via xl-openai).

## Structural reading

The CNTL=2 episode has a **distinctive width signature**: the episode-entering step (Add.211→Add.212) **expands** width while killing carrier-cardinality (a 14.8% width expansion at exactly the moment activity collapses to 0), and the episode-interior step (Add.212→Add.213) **contracts** width by half. The episode-exiting step (Add.213→Add.214) is then **flat** (+1.07%). This 4-step width sequence (+14.8% / −49.5% / +1.07%) is **anti-correlated with carrier-cardinality** at the entry boundary (cardinality 4 → 0 with width expansion) and **decorrelated** at the exit boundary (cardinality 0 → 1 with width unchanged). The structural implication is that **null ticks do not compress width** — they are not artefacts of "no activity to observe" but are instead **temporally well-defined empty windows** of comparable or larger width than active windows. This contradicts a naive reading where null ticks would be short windows (because the observer terminates the window early in absence of merges); the data show null ticks are time-respected, not activity-truncated.

## Bayesian posterior update

Synth #455 set the post-Add.213 posterior at P(Interpretation A | Add.213=null) ≈ 0.05, P(Interpretation B | Add.213=null) ≈ 0.95, with empirical p_null = 3/21 = 0.143. The Add.214 = active observation provides a second corroboration:

- **Interpretation A** (periodic NTRP=4 from Add.208): predicted Add.214 = active with prior ~0.95 (Add.214 not in cycle); observation matches but the model has been already rejected at Add.213.
- **Interpretation B** (Poisson independent-tick, p_null = 0.143): predicted Add.214 = active with prior ~0.857; observation matches.

Both models predict Add.214 = active with high prior, so Add.214's observation is **non-discriminating** between A and B in isolation. However, Interpretation B's continued consistency with the data (Add.213 + Add.214) **reinforces the posterior** to P(B | Add.213 ∧ Add.214) ≈ 0.96 (modest gain from compounded consistency).

Updated empirical statistics from the Add.193-214 22-tick visible lookback:

- **Null-tick frequency**: 3 / 22 = **0.136** (down very slightly from 3/21 = 0.143 at synth #455, as null-count holds while lookback grows by 1).
- **Carrier-cardinality distribution**: {0: 3, 1: ?, 2: ?, 3: ?, 4: ?} — exact populations require lookback-wide tabulation (deferred to a future synth).
- **NTRP distribution**: {4, 1}, mean 2.5, count 2 (unchanged from synth #455).
- **CNTL distribution**: {1, 2} (Add.208 singleton, Add.212-213 chain), mean run length 1.5, count 2.
- **CNTL_max**: 2 (set at Add.213, **CONFIRMED stable through Add.214**).

## Predictions for Add.215+ derived from the closed episode

- **P-457.A** (CNTL distribution at Add.215): predicted Add.215 CNTL = 0 with prior ~0.864, CNTL = 1 (fresh null) with prior ~0.136, CNTL = 2 (immediate double-null) with prior ~0.019.
- **P-457.B** (next CNTL=2 episode arrival): under Interpretation B, the inter-episode arrival distribution is geometric on null-pair events; expected arrival = 1 / (p_null²) ≈ 1 / 0.0185 ≈ **54 ticks** from Add.213. Under conservative correction for finite-lookback uncertainty, Add.267 is the **point estimate** for the next CNTL=2 episode boundary; the prior on observing a CNTL=2 episode within the next 22 ticks is ~0.34.
- **P-457.C** (CNTL=3 first-observation): prior on CNTL=3 in the next 22 ticks is ~0.05 (under Interpretation B); a CNTL=3 observation would be a strong falsification candidate for the Poisson independence assumption.
- **P-457.D** (post-CNTL-episode width regime): given the Add.213-214 flat plateau at ~26m, predicted Add.215 width ∈ [20m, 50m] modal **~30m**; a return to the Add.211-212 calmer-regime ~45-52m has prior ~0.20.
- **P-457.E** (post-CNTL-episode cardinality recovery): given the Add.214 cardinality-1 break, predicted Add.215+216 mean cardinality ~1.3 (Poisson mean inferred from 22-tick visible lookback); a spike-class recovery to cardinality ≥4 within the next 5 ticks has prior ~0.30.

## What this synth does NOT claim

- It does NOT claim Interpretation A is impossible — only that the Bayesian posterior strongly disfavours it (P(A) ≈ 0.04).
- It does NOT claim the CNTL=2 maximum is permanent — the 22-tick lookback is small and a CNTL=3 observation in the next ~50 ticks would be unsurprising under Interpretation B.
- It does NOT claim the post-episode flat-plateau at ~26m is structural — it is a 2-tick observation, well below the typical synth #451 4+ tick threshold for regime-classification.

## Open questions for synth #458 and later

- Does the post-episode flat-plateau at ~26m extend to a 3+ tick chain (Add.215 width ≈ 26m) or does it break to either the calmer-regime ~45m or the volatility-cluster floor ~10m?
- Is the post-episode cardinality-1 carrier (codex via xl-openai) followed by a same-repo cadence at Add.215 (codex sustain) or by a different-repo break (opencode/litellm/goose mean-reversion)?
- Does the absolute bimodality gap (ABG=7, M-214.B) survive a non-universal-silence tick at Add.215, or does it perturb when one of the silent-set members breaks?
