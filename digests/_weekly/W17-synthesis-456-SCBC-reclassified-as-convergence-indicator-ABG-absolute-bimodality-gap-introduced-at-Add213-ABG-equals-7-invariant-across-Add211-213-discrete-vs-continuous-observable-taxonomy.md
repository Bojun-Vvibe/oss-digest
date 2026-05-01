# W17 Synthesis #456 — SCBC reclassified as CONVERGENCE indicator under chained nulls; ABG (Absolute Bimodality Gap) introduced as complementary stability metric; discrete-event vs continuous-increment observable taxonomy

**Anchor**: ADDENDUM-213 M-213.C documents that SCBC (synth #454) DECREASED from 5.25 (Add.212) to 3.833 (Add.213) under chained-null silence — opposite to the implicit "rising under sustained silence" reading of synth #454. M-213.D documents PD_cell holding stable at 2 across the Add.212-213 chain, confirming discrete-event behaviour. This synth formalises the **structural correction** to SCBC, introduces ABG (Absolute Bimodality Gap) as a stable complementary metric, and proposes a unified taxonomy of digest observables into discrete-event vs continuous-increment classes.

## Observable A — SCBC convergence dynamic

Synth #454 introduced SCBC = high-mode-mean / low-mode-mean = 10.5 / 2.0 = 5.25 at Add.212 with the implicit reading that SCBC is a rising indicator under sustained silence. ADDENDUM-213 M-213.C demonstrates this is **arithmetically incorrect**:

Under universal-silence (every silent-set member +1 per tick), both means rise by exactly +1 per tick:

- Add.212: high-mode mean 10.5, low-mode mean 2.0, SCBC = 10.5 / 2.0 = **5.25**
- Add.213: high-mode mean 11.5, low-mode mean 3.0, SCBC = 11.5 / 3.0 = **3.833**

The general formula under continued chained nulls:

```
SCBC(N+k) = (H_N + k) / (L_N + k)
```

where H_N, L_N are the high/low mode means at chain-start tick N, and k is the number of consecutive null ticks since N. As k → ∞, SCBC → 1 monotonically. **SCBC is therefore a CONVERGENCE indicator under chained nulls, not a rising indicator**.

The **structural correction** is: SCBC rises only when the high-mode chain extends but the low-mode does not (i.e., when the high-mode repos remain silent but the low-mode repos break silence and reset to 0). SCBC falls under universal silence (both modes increment) and falls discontinuously when high-mode repos break silence (high-mode mean drops sharply). The Add.213 SCBC=3.833 trajectory is therefore **predictable from synth #454 + chained-null assumption** and is NOT structurally anomalous; the anomaly was in synth #454's verbal framing, which is hereby corrected.

## Observable B — ABG (Absolute Bimodality Gap) as stable complement

The bimodality gap (high-mode-min − low-mode-max) was 7 ticks at Add.212 (10 − 3 = 7) and remained 7 ticks at Add.213 (11 − 4 = 7). Defining **ABG := high-mode-min − low-mode-max**:

- Under universal silence (chained null), every silent-set member +1, so high-mode-min and low-mode-max both +1 → **ABG is INVARIANT under chained nulls**.
- Under chain-break of a low-mode repo (low-mode repo resets to 0, leaves silent-set), low-mode-max may decrease; ABG may rise.
- Under chain-break of a high-mode repo, high-mode-min may decrease; ABG may fall.
- Under fresh-silence-onset (a previously-active repo enters silent-set at chain length 1), low-mode-max stays the same or stays at the new minimum; ABG stays roughly stable.

ABG is therefore a **structural-stability complement** to SCBC: ABG is invariant under the trivial dynamics (chained nulls), so any change in ABG is informative about asymmetric chain breaks. The Add.212-213 ABG = 7 (invariant) confirms the bimodal partition structure is preserved across the chained null, even as SCBC drifts toward 1 by arithmetic convergence.

ABG empirical observations in the visible Add.211-213 lookback:

- Add.211: silent-set {opencode=9, gemini-cli=2, qwen-code=2, goose=10}, sorted {2, 2, 9, 10}, high-mode {9, 10}, low-mode {2, 2}, ABG = 9 − 2 = **7**.
- Add.212: silent-set {opencode=10, codex=1, litellm=1, gemini-cli=3, qwen-code=3, goose=11}, sorted {1, 1, 3, 3, 10, 11}, high-mode {10, 11}, low-mode {1, 1, 3, 3}, ABG = 10 − 3 = **7**.
- Add.213: silent-set {opencode=11, codex=2, litellm=2, gemini-cli=4, qwen-code=4, goose=12}, sorted {2, 2, 4, 4, 11, 12}, high-mode {11, 12}, low-mode {2, 2, 4, 4}, ABG = 11 − 4 = **7**.

**ABG = 7 invariant across 3 consecutive ticks** (Add.211-213), spanning a 1-merge tick (Add.211: 2 merges over 45m27s), a null tick (Add.212), and a chained null tick (Add.213). ABG is therefore the **most stable structural metric in the silent-set partition framework** observed to date in the visible W17 lookback. It is bounded above by the difference between the absolute silence-chain ceiling (qwen-code n=18 per synth #429) and the lowest observed low-mode value (typically 1-3); thus ABG ∈ [0, ~17] in principle, with the observed value 7 sitting near the centre of this range.

## Observable C — discrete-event vs continuous-increment taxonomy

The Add.213 observations expose a clean structural split among digest observables:

**Continuous-increment observables** (change every tick under sustained dynamics):

- Silent-chain lengths (per-repo): +1 every silent tick.
- High-mode mean / low-mode mean (synth #454 components): +1 every silent tick under chained null.
- SCBC: monotonic convergence toward 1 under chained null per the formula above.
- Window-width sequence (per ADDENDUM-213): real-valued, varies every tick.

**Discrete-event observables** (change only at specific tick-events):

- PD_cell / PD_author (synth #454): change only when a partition-cell carrier emerges or a fresh carrier populates a new cell.
- ABG (this synth): invariant under chained nulls; changes only at asymmetric chain breaks.
- Silent-set cardinality: changes only at chain breaks or fresh-silence onsets.
- Carrier-cardinality (per ADDENDUM-N): changes per-tick but is event-driven (each carrier is a discrete merge event).
- NTRP / CNTL (synth #453, #455): changes only at null-tick events.

The taxonomy is **forecasting-relevant**: continuous observables are well-suited to time-series autoregressive prediction (e.g., SCBC trajectory under continued silence is fully determined by k); discrete-event observables require event-conditional priors (e.g., PD changes are conditional on the next non-null tick's carrier composition). **Synth #456 hereby recommends** that future digest predictions partition predicted observables into the two classes and use class-appropriate forecasting machinery: continuous-class observables get arithmetic forward-projection under null-tick assumptions; discrete-class observables get event-conditional Bernoulli priors.

## Citation chain to recent SHAs and synths

The Add.213 SCBC convergence calculation depends on the silent-chain length composition, which traces to:

- **opencode silence chain n=11 at Add.213**: opencode last visible activity in the Add.193-213 lookback was at Add.202 (per the visible chain-start mathematics: 213 − 11 = 202); the Add.202 opencode mergeCommit anchor is referenced via prior synths #420-#430.
- **goose silence chain n=12 at Add.213**: goose last visible activity at Add.201 (213 − 12 = 201); the Add.201 goose mergeCommit anchor is the kalvinnchau goose2 cohort terminus.
- **codex / litellm chains at n=2 at Add.213**: chain-start at Add.211; the Add.211 SHAs **d898cc8 (codex #20558 etraut-openai)**, **a93c89f (codex #19631 etraut-openai)**, **a62b52f (codex #20265 xli-oai)**, **02cb8b0 (litellm #26964 Sameerlite)** are the chain-start anchors per synth #454 citation chain.

The synth #454 citation chain is therefore preserved and extended to a 2-tick post-burst silence window (Add.212-213) under universal silence, with ABG=7 invariant and SCBC drifting from 5.25 → 3.833 by arithmetic convergence (no structural change in the underlying bimodal partition).

## Discriminating predictions

- **P-456.A** (SCBC trajectory at Add.214): under chain-break (P~0.85 per synth #455 P-455.A), SCBC drops discontinuously per the broken repo:
  - if opencode breaks (n=11 → 0, leaves silent-set), high-mode = {goose=13}, low-mode = {codex=3, litellm=3, gemini-cli=5, qwen-code=5}, SCBC = 13 / 4.0 = **3.25**.
  - if goose breaks (n=12 → 0, leaves silent-set), high-mode = {opencode=12}, low-mode = {codex=3, litellm=3, gemini-cli=5, qwen-code=5}, SCBC = 12 / 4.0 = **3.0**.
  - if a low-mode repo breaks (e.g., codex n=2 → 0), high-mode = {opencode=12, goose=13, mean 12.5}, low-mode = {litellm=3, gemini-cli=5, qwen-code=5, mean 4.33}, SCBC = 12.5 / 4.33 = **2.886**.
  - if both opencode and goose break (P~0.30 conditional on any chain-break), SCBC becomes undefined (only low-mode remains) or low-mode-only with no bimodality.
  - Under chained null extension to CNTL=3 (P~0.15), SCBC = 12.5 / 4.0 = **3.125**, continuing the convergence-toward-1 trajectory.
- **P-456.B** (ABG trajectory at Add.214): under chain-break, ABG depends on which mode is broken:
  - opencode breaks → low-mode-max stays at 4 (or rises to 5 if a previously low-mode repo also breaks), high-mode-min drops to 13 → ABG = 13 − 4 = **9** (rises +2).
  - goose breaks → high-mode-min drops to 12 → ABG = 12 − 4 = **8** (rises +1).
  - low-mode repo breaks → ABG = 11 − 5 = **6** (drops -1) or remains 7 if the broken repo is the modal low-mode value's only instance.
  - Under chained null extension → ABG = **7** (invariant).
- **P-456.C** (joint test): if Add.214 is non-null AND ABG ≠ 7, then a chain-break occurred AND was structurally-asymmetric — informative about which mode reactivated. If Add.214 is non-null AND ABG = 7, then a chain-break occurred symmetrically (rare). If Add.214 is null AND ABG = 7, the chained-null extension is confirmed and CNTL=3.

## What this synth does NOT claim

- It does NOT supersede synth #454 (SCBC remains a valid metric, just with corrected dynamic interpretation) or synth #455 (CNTL formalisation independent).
- It does NOT claim ABG is the universal stability metric; ABG is bounded by the synth #429 absolute ceiling and is informative only when bimodality persists.
- It does NOT claim the discrete/continuous taxonomy is exhaustive; some observables (e.g., partition-cell author counts) may be hybrid.

## Forward observables

- **Add.214 SCBC** (per P-456.A): chain-break drops SCBC into [2.9, 3.3] modal range; chain-extension to CNTL=3 yields SCBC=3.125 (continued convergence).
- **Add.214 ABG** (per P-456.B): rises by 1-2 if a high-mode repo breaks; stays at 7 if chained-null extension or symmetric break; drops by 1 if a low-mode repo breaks unevenly.
- **Add.214-220 SCBC vs ABG joint trajectory**: under Interpretation B (synth #455), SCBC oscillates with chain-breaks and ABG drifts slowly; persistent ABG ≈ 7 across multiple ticks would confirm the bimodal partition is a stable structural feature.

**End of W17 synthesis #456.**
