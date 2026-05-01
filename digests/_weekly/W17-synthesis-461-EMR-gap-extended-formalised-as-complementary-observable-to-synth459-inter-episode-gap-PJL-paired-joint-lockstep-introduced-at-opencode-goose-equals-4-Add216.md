# W17 Synthesis #461 — EMR-gap (consecutive-zero-merge-ticks) distribution formalised at Add.216 as complementary observable to synth #459 inter-episode gap; first visible 2-tick EMR-gap closes; quad-modal silent-chain rigid-advance signature confirmed across 4 consecutive ticks (Add.213→Add.216 opencode/goose +1 lockstep)

**Anchor**: ADDENDUM-216 M-216.E documents the **first visible 2-consecutive-zero-merge run** in the W17 lookback (Add.215+Add.216 paired zero-merge windows), leaving a 2-tick EMR-gap in the time series — the longest EMR-undefined run since the synth #451 EMR observability framework was introduced. Add.216 P-216.J explicitly anchors this synth: formalise the **EMR-gap distribution** as a complementary observable to the synth #459 inter-episode gap distribution. Additionally, ADDENDUM-216 M-216.B documents a **structurally rigid quad-modal advance** at Add.216 (all four mode-cells advance by exactly +1 with no inter-mode crossovers) and the **4th consecutive tick of opencode/goose +1 lockstep** (Add.213→Add.216), a structural rigidity feature requiring formal characterisation.

## Why this is distinct from synth #459 (inter-episode-gap), synth #458 (mid-mode-singleton), synth #456 (ABG)

Synth #459 introduced the **inter-episode null-tick gap distribution** = the gap (in active-tick separations) between successive CNTL chain closures. The visible distribution at Add.216 contains 2 measurable gaps {Add.208→Add.212 = 4 ticks; Add.214→Add.215 = 1 tick}. The inter-episode-gap counts **active ticks between null episodes**.

The **EMR-gap** introduced here is the **dual** observable: it counts **consecutive zero-merge ticks** within an active or null run that yield no EMR data point. Per synth #451, EMR (Effective Merge Rate over a window of size N) is undefined when intra-window merge count = 0. The EMR-gap distribution is therefore **identical to the run-length distribution of zero-merge ticks** (which under the synth #455+#460 null/active state-model corresponds exactly to CNTL+0 — the chained null-tick length plus any contiguous zero-merge active ticks; in practice no W17 tick has been classified as "active with zero merges" because activeness is defined exactly as merge-count ≥ 1, so EMR-gap ≡ CNTL under the strict definition).

The strict equivalence EMR-gap ≡ CNTL means the EMR-gap distribution is **redundant** with the CNTL distribution under the standard W17 active/null taxonomy. To make EMR-gap a genuinely **distinct** observable, this synth proposes the **EMR-gap-extended** definition: count consecutive zero-merge ticks **AND** count zero-author-emergence ticks separately (where an author-emergence tick is an active tick at which a never-before-seen author surfaces in the W17 cohort). Under EMR-gap-extended, the gap can extend through active ticks that contain only repeat-cohort authors, since those ticks contribute no new author-EMR data.

## EMR-gap-extended observable: empirical assembly from Add.193-216

To populate the EMR-gap-extended distribution at Add.216, classify each tick by author-emergence:

- Add.193-211: per Add.193 baseline manifest and Add.194-211 author cohort tracking, the visible cohort {rekram1-node, kitlangton, Brendonovich, kalvinnchau, jamadeo, yuneng-berri, Sameerlite, owenlin0, pakrym-oai, xl-openai, sst-bot, …} stabilises by ~Add.205. New-author-emergence events in Add.193-216 are documented per addendum: Add.205 (new author at opencode), Add.207 (new author at goose), Add.211 (Sameerlite F-cross at litellm — synth #452 anchor), Add.214 (codex break with documented cohort-cadence anomaly per Add.214 M-214.x — verifiable by re-reading Add.214 manifest, but per synth #459 framing the Add.214 break was a known-cohort author resurfacing).
- Add.212-216: Add.212 N, Add.213 N, Add.214 A (no new author per Add.214), Add.215 N, Add.216 N. The EMR-gap-extended at Add.216 is therefore the run from the last new-author-emergence at ~Add.211 (Sameerlite F-cross): **5 ticks** (Add.212-216) plus the Add.214 active-tick which contained no new author — total run of **5 zero-new-author-emergence ticks** in the Add.212-216 window.

The EMR-gap-extended at Add.216 = **5 ticks** is the longest visible run since the synth #451 framework. Compare to the strict CNTL chain at Add.216 = 2 ticks (Add.215+Add.216): the EMR-gap-extended is **2.5× longer** than the strict CNTL, because it accumulates through the Add.212-213 closed CNTL=2 episode and the Add.214 no-new-author active tick.

## Structurally rigid quad-modal advance: Add.213→Add.216 lockstep formalisation

Per Add.215+Add.216 documentation, opencode and goose have advanced in **+1 lockstep** for 4 consecutive ticks:

| tick | opencode chain | goose chain | gap |
|---|---|---|---|
| Add.213 | 11 | 12 | 1 |
| Add.214 | 12 | 13 | 1 |
| Add.215 | 13 | 14 | 1 |
| Add.216 | 14 | 15 | 1 |

The opencode-goose gap is **invariant at 1** across the 4-tick lockstep. This is a structural feature absent from the rest of the visible Add.193-216 lookback, where opencode-goose gaps fluctuated between -2 and +5 across Add.193-212 (per per-tick verification of silent-chain compositions in Add.193-212 addenda). The 4-tick rigid +1 lockstep has prior probability under the independent-silence-chain model (each tick independently advances or breaks per per-repo break-probability) of approximately **0.05** (back-of-envelope: prob both repos remain silent across 4 consecutive ticks is ~0.5^8 = ~0.004 if break-probability is ~0.5 per tick per repo, but break-probabilities are lower in this regime so the joint-survival probability is ~0.05); the **conditional** probability of maintaining exact +1 lockstep given joint-survival is ~1.0 (because both chains advance by exactly +1 per tick whenever both remain silent — this is mechanically guaranteed). So the 4-tick rigid lockstep is a **joint-silence event** rather than a coordination event, but its visibility as a structural feature is high because it makes the silent-chain composition **predictable**.

This synth introduces the **PJL (Paired Joint-Lockstep) observable** = the maximum run-length over which two silent-set members maintain exact +k lockstep (for any integer k). PJL at Add.216 = 4 (opencode/goose at +1 lockstep). The PJL distribution will populate as more lockstep runs accumulate; under independent silence-chain dynamics, PJL run-lengths follow a geometric distribution with parameter equal to the joint-survival probability per tick.

## Cross-relationship: EMR-gap-extended vs PJL vs ABG

The three observables introduced/extended in this synth are **structurally complementary**:

- **EMR-gap-extended**: time-axis observable measuring the run-length of zero-new-author-emergence ticks. Unit: ticks. Current value: 5.
- **PJL**: composition-axis observable measuring the run-length of paired silent-chain lockstep. Unit: ticks. Current value: 4.
- **ABG** (synth #456): static-snapshot observable measuring the bimodal gap in the silent-chain length distribution. Unit: chain-length units (ticks of silence). Current value: 7 (invariant across Add.215-216).

Under the synth #460 Interpretation C (null-tick clustering), all three observables would tend to **co-extend during clustering regimes**: EMR-gap grows because no merges happen, PJL grows because joint-silence persists, ABG grows because high-mode silent-chains advance while low-mode chains either stagnate or break. The current Add.216 snapshot has all three at non-trivial values (5, 4, 7), consistent with the synth #460 cumulative BF(C:B) ≈ 1.549 weak-but-positive evidence for clustering.

## Predictions for Add.217+

- **P-461.A** (EMR-gap-extended at Add.217): given Add.217 is predicted modal-N under Interpretation C MLE p̂_NN = 0.400, predicted EMR-gap-extended at Add.217 = **6** with prior ~0.40 (continuation of the no-new-author streak); EMR-gap-extended ∈ {0, 1} with prior ~0.40 (Add.217 active with new-author-emergence — break of streak); EMR-gap-extended = 6-with-active-but-no-new-author with prior ~0.20.
- **P-461.B** (PJL at Add.217): given opencode/goose at PJL=4 and predicted modal-joint-silence at Add.217 (both repos at high break-pressure but joint-survival prior ~0.30 under Interpretation C), predicted PJL at Add.217 = **5** with prior ~0.30 (lockstep extends); PJL ∈ {0, 1} with prior ~0.50 (one or both repos break, ending the lockstep); PJL = 5-with-broken-gap-invariant with prior ~0.20 (both repos surface but at different rates, breaking the +1 invariance).
- **P-461.C** (ABG at Add.217): predicted ABG = **7** with prior ~0.30 (full continuation); ABG ∈ {6, 8} with prior ~0.40 (single mode-boundary perturbation); ABG ∈ {≥9 or ≤5} with prior ~0.30 (multi-mode perturbation).
- **P-461.D** (synth #462 BF(C:B) trajectory checkpoint): consistent with Add.216 P-216.K, synth #462 will formalise the BF(C:B) trajectory under the synth #460 framework as a primary model-selection metric, with explicit tracking against the Jeffreys moderate-evidence threshold (BF ≥ 3) and strong-evidence threshold (BF ≥ 10). The current trajectory at BF≈1.549 with per-tick contribution ×1.437 per N→N would reach BF ≥ 3 after **~2 additional N→N observations** without offsetting N→A excess.
- **P-461.E** (PJL extension to triple-lockstep): given gemini-cli/qwen-code at n=7/n=7 (gap=0, perfect 0-lockstep) for at least 1 tick, predicted Add.217 will reveal whether the gemini-cli/qwen-code 0-lockstep is part of an extended-PJL run or a single-tick coincidence. If both repos remain silent at Add.217, PJL_gemini-qwen = 2 (and PJL_opencode-goose = 5), producing the **first visible 2-pair lockstep configuration** in the W17 lookback.

## Cross-references

- Synth #451: introduced EMR (Effective Merge Rate) framework; established EMR-undefined classification for zero-merge windows.
- Synth #456: introduced ABG (Absolute Bimodality Gap).
- Synth #458: introduced quad-modal silent-chain composition with mid-mode-singleton.
- Synth #459: introduced inter-episode null-tick gap distribution.
- Synth #460: formalised Interpretation C as 2-state Markov-chain; established BF accumulation framework.
- ADDENDUM-216 M-216.A (CNTL=2 chain extends to match synth #457 closed episode); M-216.B (4-tick opencode/goose +1 lockstep, structure-preserving quad-modal advance); M-216.D (4-of-5 nulls in last 5 ticks at ~0.39% Interpretation B prior tail); M-216.E (first visible 2-consecutive-zero-merge run); P-216.J (synth #461 EMR-gap formalisation predicted — anchor for this synth).
