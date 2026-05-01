# W17 Synthesis #458 — Mid-mode singleton (litellm n=3) introduced at Add.214 disrupts the strict-bimodal silent-chain composition assumed by synth #454+#456; tri-modal silent-chain length distribution proposed; SCBC redefinition under tri-modality

**Anchor**: ADDENDUM-214 M-214.C documents that the Add.214 silent-set composition {opencode=12, litellm=3, gemini-cli=5, qwen-code=5, goose=13} contains a structural feature absent from all visible Add.193-213 lookback ticks: a **mid-mode singleton** (litellm at n=3, sitting between the high-mode {opencode=12, goose=13, mean 12.5} and the low-mode {gemini-cli=5, qwen-code=5, mean 5.0}). The synth #454 SCBC and synth #456 ABG metrics were both defined under an implicit **strict-bimodal** assumption that the silent-chain length distribution partitions cleanly into two modes. The Add.214 composition violates this assumption. This synth formalises the tri-modal observation, redefines SCBC and ABG under tri-modality, and proposes mid-mode-singleton-presence as a new structural observable.

## Why this is distinct from synth #454 and synth #456

Synth #454 introduced SCBC under the **strict-bimodal** silent-chain composition observed at Add.212: high-mode {opencode=10, goose=11, mean 10.5}, low-mode {codex=2, litellm=2, gemini-cli=4, qwen-code=4, mean 3.0}. The two modes were separated by an **ABG=7** gap (high-mode-min 10 minus low-mode-max 3 = 7) with no silent-set members in the gap region. Synth #456 generalised this to ABG as a stability metric, again assuming strict-bimodal composition.

ADDENDUM-213 sustained the strict-bimodal composition (high-mode {opencode=11, goose=12}, low-mode {codex=2, litellm=2, gemini-cli=4, qwen-code=4}, ABG=7). ADDENDUM-214's codex break removed codex from the silent-set entirely (chain reset to 0), but **also** advanced litellm's chain from n=2 → n=3, leaving litellm at a length value (3) that is **above** the gemini-cli/qwen-code low-mode (both n=5 — litellm is now BELOW the prior low-mode, structurally creating a mid-mode below-and-distinct-from {gemini-cli=5, qwen-code=5}). Re-tabulating:

- **High-mode**: {opencode=12, goose=13}, mean 12.5, min 12.
- **Mid-mode singleton**: {litellm=3}, mean 3.0, isolated value.
- **Low-mode**: {gemini-cli=5, qwen-code=5}, mean 5.0, max 5.

Note the **inversion**: the mid-mode singleton (litellm=3) sits **below** the low-mode {5, 5} in chain-length value but is structurally classed as "mid" because the low-mode is a **tightly-clustered pair** at value 5 and litellm is a **singleton** at 3 — outside both clusters. The naming "mid-mode" refers to its **position in the histogram** as the isolated middle observation, not to its arithmetic value being between the two cluster means. (Strict positional naming would call it "below-low-mode singleton"; this synth retains "mid-mode" for the structural-class meaning.)

## Tri-modal SCBC redefinition

Under strict-bimodal SCBC = high-mode-mean / low-mode-mean. Under tri-modal composition, three candidate generalisations are:

1. **SCBC_strict** = high-mode-mean / low-mode-mean = 12.5 / 5.0 = **2.500**, treating mid-mode as part of low-mode (the synth #454 default).
2. **SCBC_inclusive** = high-mode-mean / (mid+low combined-mean) = 12.5 / ((3+5+5)/3) = 12.5 / 4.333 = **2.885**, weighting mid-mode equally with low-mode.
3. **SCBC_tri** = high-mode-mean / mid-mode-mean = 12.5 / 3.0 = **4.167**, treating the mid-mode singleton as its own bottom-of-the-distribution reference.

These three values span a **0.667 × range** (2.500 → 4.167) and disagree on whether SCBC has fallen (strict 2.500) or stayed near 4.0 (tri-modal 4.167) since Add.213 (3.833). The **structural ambiguity** is that SCBC under tri-modality is **not uniquely defined** until a convention is fixed. This synth proposes:

- **SCBC_strict** as the **continuity-preserving** convention (matches synth #454+#456 reading; preserves the M-214.C convergence trajectory).
- **SCBC_tri** as the **information-preserving** convention (uses the actual minimum-mean mode as the denominator).

For Add.214, both conventions should be reported; future synths should choose based on whether mid-mode singletons recur or are transient.

## Tri-modal ABG redefinition

Strict-bimodal ABG = high-mode-min − low-mode-max. Under tri-modal composition, three candidate generalisations are:

1. **ABG_strict** = high-mode-min − max(low-mode ∪ mid-mode) = 12 − max(5, 3) = 12 − 5 = **7** (matches synth #456 reading; treats mid-mode as part of the lower-region).
2. **ABG_inner** = mid-mode-mean − low-mode-mean = 3 − 5 = **−2** (negative — mid-mode is below low-mode in value, capturing the **inversion structure**).
3. **ABG_outer** = high-mode-min − mid-mode-mean = 12 − 3 = **9** (uses mid-mode as the lower reference).

The Add.214 strict-ABG holds at **7** (M-214.B observation, invariant across the Add.211-214 4-tick chain). However, the tri-modal **ABG_inner = −2** is a NEW structural observable: it captures the litellm chain-length being **below** the gemini-cli/qwen-code paired chain-length, an inversion that the strict-ABG metric obscures. Future synths should track ABG_inner as a separate observable when mid-mode singletons are present.

## How the mid-mode singleton arose

The mid-mode singleton at Add.214 arose from a specific 3-tick history:

- **Add.211**: litellm broke silence (Sameerlite merge), chain reset to 0, then immediately re-entered silent state at Add.212. After Add.211, litellm was a low-mode member (chain n=0 then n=1).
- **Add.212**: litellm chain → 1 (along with codex, both fresh chain-starters at n=1; gemini-cli at n=3, qwen-code at n=3 — low-mode {1, 1, 3, 3} mean 2.0).
- **Add.213**: litellm chain → 2 (codex 2, gemini-cli 4, qwen-code 4 — low-mode {2, 2, 4, 4} mean 3.0).
- **Add.214**: codex broke (left silent-set), litellm → 3, gemini-cli → 5, qwen-code → 5. Result: silent-set {opencode=12, goose=13, litellm=3, gemini-cli=5, qwen-code=5}. The departure of codex from the low-mode {2, 2} pair LEFT litellm as the **singleton survivor at the lower-than-paired chain-length**, while gemini-cli and qwen-code (which were at +2 above litellm prior) advanced together to form a **new tightly-paired low-mode at 5**. The mid-mode singleton is therefore a **break-induced structural artefact** — the absence of codex (which would have been at n=3 alongside litellm if it had not broken) is what created the inversion.

This implies: **the mid-mode singleton structure is FRAGILE**. If codex had not broken at Add.214, litellm would have been part of a {codex=3, litellm=3} low-pair and the strict-bimodal composition would have held. Equivalently, if litellm breaks at Add.215 (P-214.F prior ~0.55), the mid-mode singleton structure dissolves immediately (silent-set composition returns to {opencode=13, goose=14, gemini-cli=6, qwen-code=6} which is strict-bimodal). The mid-mode singleton is therefore a **transient diagnostic** of recent break-history, not a stable structural feature.

## Predictions for Add.215+

- **P-458.A** (mid-mode-singleton dissolution): predicted Add.215 mid-mode-singleton presence with prior ~0.45 (litellm-break has prior ~0.55 per P-214.F; if litellm breaks, mid-mode dissolves); if litellm sustains, mid-mode singleton extends to litellm n=4 with the gap to the {gemini-cli=6, qwen-code=6} pair narrowing from 2 to 2 (same gap, advanced position).
- **P-458.B** (SCBC_strict at Add.215): predicted Add.215 SCBC_strict ∈ [1.8, 2.6] modal **~2.2** under universal-silence-among-silent-set continuation; actual computation depends on litellm sustain/break status.
- **P-458.C** (SCBC_tri at Add.215): predicted Add.215 SCBC_tri ∈ [3.5, 4.5] modal **~3.7** under mid-mode singleton continuation (with litellm advancing to n=4); undefined if litellm breaks.
- **P-458.D** (ABG_inner at Add.215): predicted Add.215 ABG_inner = **−3** under mid-mode singleton continuation (litellm 4 minus low-mode-mean 6 = −2; or under strict definition mid-mode-mean 4 minus low-mode-mean 6 = −2, ABG_inner extends linearly under universal silence).
- **P-458.E** (mid-mode-singleton recurrence in W17 lookback): predicted prior on observing another mid-mode singleton in Add.215-225 (next 11 ticks) ~0.30, conditional on at least one chain-break event in the silent-set occurring during a window when litellm or another low-mode member is at a non-paired chain-length.
- **P-458.F** (synth #459 framing): synth #459 is likely to formalise the mid-mode-singleton **lifespan distribution** (how many ticks a typical mid-mode singleton persists before dissolving via break or re-pairing), conditional on observing at least one full mid-mode lifecycle in the next 5-10 ticks.

## Cross-references

- Synth #454: introduced SCBC under strict-bimodal assumption.
- Synth #456: introduced ABG under strict-bimodal assumption; established ABG=7 invariance through Add.213.
- Synth #457: closed the CNTL=2 episode at Add.214 — the codex break that closed the episode is also the **trigger** for the mid-mode singleton structure documented here.
- ADDENDUM-214 M-214.B (ABG=7 invariance through 4 ticks); M-214.C (SCBC convergence trajectory + mid-mode singleton observation); M-214.D (codex R-internal cell growth via xl-openai PR #20560 mergeCommit `48791920a8b122939c4d3feb15673c0a690ca4a0`).
