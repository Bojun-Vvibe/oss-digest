# W17 Synthesis #454 — SCBC (Silent-Chain Bimodality Coefficient) and Partition-Decoherence (PD) introduced at Add.212; structural metrics for the silent-set composition and post-population 2×2 dynamics

**Anchor**: ADDENDUM-212 M-212.B introduces SCBC = high-mode-mean / low-mode-mean = 10.5 / 2.0 = **5.25** as the silent-chain bimodality coefficient at Add.212; M-212.D introduces PD (partition-decoherence) = 3 as the count of synth #452 2×2-partition cells whose Add.211-defining-carrier is silent at Add.212. This synth formalises both metrics, integrates them with synth #429 silence-chain ceiling and synth #450/#452 partition framework, and proposes joint-trajectory observables.

## Observable A — SCBC

The Add.212 silent-set is **universal** (all 6 repos silent) with chain lengths {opencode=10, codex=1, litellm=1, gemini-cli=3, qwen-code=3, goose=11}. Sorting and partitioning by gap-detection:

- **High-mode**: {opencode=10, goose=11} — mean 10.5, range 1, count 2.
- **Low-mode**: {codex=1, litellm=1, gemini-cli=3, qwen-code=3} — mean 2.0, range 2, count 4.
- **Bimodality gap**: low-mode max (3) → high-mode min (10) = **7-tick gap**, the largest internal gap in the sorted chain-length sequence {1,1,3,3,10,11}.

SCBC = high-mode-mean / low-mode-mean = 10.5 / 2.0 = **5.25**.

The 7-tick bimodality gap is **structurally diagnostic**: a single-mode silent-set distribution (e.g. all chains ≤ 4 or all chains ≥ 8) would yield SCBC near 1; the observed SCBC=5.25 indicates the silent-set has bifurcated into a "long-silenced cohort" (opencode + goose, structurally analogous in their persistent absence) and a "freshly-silenced cohort" (codex + litellm just-collapsed at Add.212; gemini-cli + qwen-code at intermediate n=3). The **absolute silence-chain ceiling** remains qwen-code n=18 (synth #429); SCBC is bounded above by ~9 (= 18/2 if the high-mode singleton is qwen-code at ceiling and the low-mode is exactly 2-tick chains).

## Observable B — Partition-Decoherence (PD)

Per synth #452, the Add.211 2×2 partition (recurrence × vendor-locality) reached full 4/4 cell population:

- F-internal (codex): xli-oai (Add.211 fresh) + etraut-openai (Add.211 fresh, provisional)
- F-cross: empty (Sameerlite was promoted out)
- R-internal (litellm): yuneng-berri (last seen Add.210)
- R-cross (litellm): Sameerlite (Add.211 instantiation)

At Add.212, all named carriers are silent (universal silence). Defining **PD := number of populated cells whose Add.211-defining-carrier is silent at Add.212**, exclusive of cells already silent at Add.211:

- F-internal-codex: xli-oai silent (newly silent at Add.212), etraut-openai silent (newly silent at Add.212) → cell-counts as 1 newly-silent cell (the cell collapses regardless of how many of its authors collapsed).
- R-internal-litellm: yuneng-berri was already silent at Add.211 → does NOT count toward PD.
- R-cross-litellm: Sameerlite silent (newly silent at Add.212) → +1 cell.
- (F-internal-codex etraut-openai sub-population is captured by the F-internal cell tally; etraut-openai's separate provisional placement does not double-count the cell.)

Net PD(Add.212) = **F-internal + R-cross = 2 newly-silent populated cells**, plus the F-internal-codex cell separately tracking xli-oai-only silence = total **PD=3 if counted by carrier-collapse events** (3 distinct authors went silent: xli-oai, etraut-openai, Sameerlite) or **PD=2 if counted by cell-collapse events** (2 distinct cells went silent: F-internal-codex, R-cross-litellm). ADDENDUM-212 M-212.D used the carrier-event count (PD=3); this synth distinguishes the two and recommends **PD_cell=2 as the primary metric** with **PD_author=3 as the secondary**, since cell-collapse is the structural unit of the synth #452 partition while author-collapse is a finer-grained signal.

## Joint-trajectory observable: SCBC × PD coupling

Both metrics rose discontinuously at Add.212:

- SCBC went from undefined-at-Add.211 (silent-set cardinality 4 with chain lengths {opencode=9, gemini-cli=2, qwen-code=2, goose=10}; sorted {2,2,9,10} has bimodality gap 7 between 2 and 9, low-mode mean 2, high-mode mean 9.5, **SCBC(Add.211) = 4.75**, so SCBC is in fact **defined at Add.211** and rose Add.211→212 from 4.75 → 5.25, a +10.5% step) → defined and rising at Add.212.
- PD jumped from 0 at Add.211 (the 2×2 was freshly populated, no decoherence yet) to PD_cell=2, PD_author=3 at Add.212.

The SCBC rise is **modest (+10.5%)** while the PD step is **discontinuous (0 → 2)**, indicating that Add.212's universal silence affected the **2×2 partition more disruptively than the silent-chain length distribution**. This is structurally consistent: silent-chain lengths increment +1 per silent tick (a smooth process), while partition cells decohere all-or-nothing per tick (a discrete process). **CITES synth #429** (silence-chain ceiling at qwen-code n=18) for the SCBC numerator bound and **synth #452** (full-population observation) for the PD baseline.

## Citation chain to Add.211 SHAs

The Add.211 carriers whose silence at Add.212 contributes to PD:

- **xli-oai** (codex #20265, mergeCommit **a62b52f**, F-internal placement) — silent at Add.212.
- **etraut-openai** (codex #20558 mergeCommit **d898cc8**, codex #19631 mergeCommit **a93c89f**, provisional F-internal placement) — silent at Add.212.
- **Sameerlite** (litellm #26964, mergeCommit **02cb8b0**, R-cross instantiation per synth #452) — silent at Add.212.

The 4 Add.211 mergeCommits {d898cc8, a93c89f, a62b52f, 02cb8b0} per ADDENDUM-211 manifest are therefore the **last visible activity** in the Add.193-212 lookback before the Add.212 universal-silence collapse, marking these SHAs as the **terminal activity-burst** of the Add.209-212 cyclic arc per synth #453's Interpretation-A reading.

## Discriminating predictions

- **P-454.A** (SCBC trajectory at Add.213): under synth #453's Interpretation A (cyclic arc), Add.213 is a recovery tick with at least one carrier breaking silence; the broken-silent repo's chain length resets to 0 and is removed from the silent-set, **dropping SCBC** discontinuously (e.g. if opencode breaks at n=11, the silent-set becomes {codex=2, litellm=2, gemini-cli=4, qwen-code=4, goose=12}, sorted {2,2,4,4,12}, bimodality gap 8 between 4 and 12, SCBC = 12 / 3.0 = 4.0). Under Interpretation B (independent ticks), SCBC may rise further if Add.213 is also null (10% prior). Predicted Add.213 SCBC ∈ [3.5, 6.5] modal **~4.0** under A; modal ~5.7 under B-conditional-on-second-null.
- **P-454.B** (PD trajectory at Add.213): under Interpretation A, Add.213 recovery introduces fresh carriers (likely fresh authors, not synth #452 partition members) → **PD remains at 2 (cell-count) or rises slightly** as the Add.211 partition continues to decohere; the Add.213 fresh carriers populate new partition cells but do not restore Add.211 cells. Under Interpretation B with chained null tick, PD remains 2 (no new decoherence possible since partition is already 2-cell-decoherent and the third cell R-internal was pre-decoherent at Add.211).
- **P-454.C** (joint signal): if Add.213 SCBC drops AND PD does not increase, the silent-set bimodality is a **transient effect** of universal silence, not a structural regime; if SCBC stays ≥ 5 over Add.213-216, the bimodality is a **persistent feature** consistent with a long-silenced/short-silenced bifurcated population.

## What this synth does NOT claim

- It does NOT claim SCBC and PD are independent of the synth #453 NTRP question; in fact both metrics are **coupled to null-tick events** by construction (PD specifically increments on tick-after-population-peak, SCBC trends upward during silence accumulation).
- It does NOT supersede synth #429 (silence-chain ceiling) or synth #452 (2×2 full-population); it composes with both.

## Forward observables

- **Add.213 SCBC** (per P-454.A): modal ~4.0 under Interpretation A; sustained ≥ 5 favours Interpretation B or persistent-bimodality.
- **Add.213 PD** (per P-454.B): cell-count expected stable at 2; author-count expected stable at 3 unless yuneng-berri or another R-internal author re-emerges (which would *reduce* PD).
- **Add.213-216 joint trajectory** as the discriminating window for both NTRP (synth #453) and SCBC/PD persistence (this synth).

**End of W17 synthesis #454.**
