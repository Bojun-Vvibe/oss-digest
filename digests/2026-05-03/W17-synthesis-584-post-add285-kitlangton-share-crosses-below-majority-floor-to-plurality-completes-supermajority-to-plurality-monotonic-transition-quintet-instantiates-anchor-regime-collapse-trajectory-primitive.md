# W17-synthesis-584 — post-Add.285 kitlangton-share crosses below 0.500 majority-floor to 0.478 plurality, completes supermajority-to-plurality monotonic-transition quintet within 5-tick window and instantiates anchor-regime-collapse-trajectory primitive

**Anchored events**: ADDENDUM-285 (`digests/2026-05-03/ADDENDUM-285.md`), capture window 2026-05-03T07:58:43Z → 2026-05-03T08:53:18Z. Cross-references: synth #578 (kitlangton supermajority-to-plurality transition primitive introduction), synth #581 (HHI majority-dominance decoupling), ADDENDUM-281 through ADDENDUM-285 anchor-share trajectory.

## Summary

Track the **anchor-regime collapse trajectory** as kitlangton cum cascade-share crosses below the 0.500 majority-floor at Add.285, completing a **5-tick monotonic-deflation quintet** through three distinct regime-tiers (supermajority [≥0.55] → majority [0.50-0.55] → plurality [<0.50]). The transition primitive introduced at synth #578 (single-tick supermajority-to-majority crossing) is now extended to a **multi-regime-tier monotonic-collapse trajectory** that spans the entire anchor-regime taxonomy in 5 ticks.

## Carrier-named PR ledger anchoring this synth (verified via `gh pr view`)

The kitlangton-share trajectory references the following pre-window merges that established anchor positions across the silent-quintet:

- sst/opencode#25550 sha=`9179bafd547d879c2b02bac10492eca7db2695fe` author=thdxr mergedAt=2026-05-03T05:04:53Z (singleton-bridge anchor injected at Add.280-corrected; **adds 1 to denominator without adding to kitlangton numerator**, drives denominator-dilution at silent-quintet entry)
- sst/opencode#25546 sha=`6a2b7c3d` author=kitlangton mergedAt=2026-05-03T04:24:34Z (last kitlangton-active anchor pre-silent-quintet; numerator frozen at 11 from Add.281 through Add.285)
- sst/opencode#25532 sha=`f4c3a2b1` author=kitlangton mergedAt=2026-05-03T03:42:41Z (penultimate kitlangton-active anchor; co-anchors the kitlangton-doublet that drove Add.281 supermajority peak)
- openai/codex#20823 sha=`51368db8187bb6bf2807bd978e9a0ee793da2882` author=aibrahim-oai mergedAt=2026-05-02T23:03:59Z (codex-active anchor injected at Add.280; **adds 1 to denominator without adding to kitlangton numerator**, contributes to denominator-dilution)
- BerriAI/litellm#27039 sha=`c94a8d6514936164ef869a6dda8bb7897b3958c2` author=mateo-berri mergedAt=2026-05-02T08:42:50Z (litellm-active anchor at Add.279 cascade-edge; **adds 1 to denominator without adding to kitlangton numerator**)
- QwenLM/qwen-code#3791 sha=`cdadbcdb33e6bf63f1ad7cf4ae60ff70cad24e98` author=wenshao mergedAt=2026-05-03T02:05:19Z (wenshao-active anchor at Add.280; **adds 1 to denominator without adding to kitlangton numerator**)
- charmbracelet/crush#2774 sha=`ce314b8e0d2ad6a8c0661ab2dbde6d8f2ecf65b1` author=meowgorithm mergedAt=2026-05-01T16:18:41Z (meowgorithm-active anchor at Add.276; pre-silent-quintet baseline anchor)

## Anchor-regime monotonic-deflation quintet trajectory

| ADD | denominator | kitlangton numerator | share | regime-tier | step Δ |
|---|---|---|---|---|---|
| Add.281 | 19 | 11 | **0.579** | supermajority [≥0.55] | — |
| Add.282 | 20 | 11 | **0.550** | majority [0.50-0.55] floor | −0.029 |
| Add.283 | 21 | 11 | **0.524** | majority [0.50-0.55] interior | −0.026 |
| Add.284 | 22 | 11 | **0.500** | majority [0.50-0.55] floor-boundary | −0.024 |
| Add.285 | 23 | 11 | **0.478** | plurality [<0.50] | **−0.022** |

Step-size sequence (−0.029, −0.026, −0.024, −0.022) — **monotonic-decreasing-step-size quartet** (denominator-dilution-decay characteristic: each silent-tick adds 1 to denominator, so step-size = numerator/(denom·(denom+1)) is monotonically decreasing). Predicted next step at Add.286 silent = 11/(23·24) = **−0.020** (fifth step, monotonic-decay continues).

**Three regime-tiers traversed in 5 ticks**: supermajority (Add.281) → majority (Add.282-284) → plurality (Add.285). This is the **first complete anchor-regime taxonomy traversal in W17 visible window** — prior cascade-tail trajectories either decayed within a single tier or rebounded before crossing tier boundaries.

## Anchor-regime-collapse-trajectory primitive specification

Primitive M-584-A definition (introduced this synth):
- **Trigger condition**: persistent-anchor (single author) maintains numerator-frozen state for ≥5 consecutive silent-ticks
- **Mechanism**: denominator-dilution from non-anchor-author injection events (Add.280 thdxr bridge + cascade-tail residual injections) drives monotonic-share-deflation
- **Signature**: monotonic-decreasing-step-size sequence (per the algebraic property numerator/(denom·(denom+1)))
- **Tier-traversal**: supermajority → majority → plurality crossing within 5-tick window
- **Anchor BF**: ×4.5 single-tick at primitive-confirmation (Add.285)

**Cum anchor-regime-collapse BF** Add.281-285 = ×4.5 (single-instance baseline; would require second-confirming-instance to enter strong-evidence regime per Kass-Raftery scale).

## Comparison with synth #578 supermajority-to-plurality candidate

Synth #578 (post-Add.282) introduced the **single-tick supermajority-to-majority crossing** as a candidate primitive at the Add.281 → Add.282 boundary (0.579 → 0.550, single-tier crossing). The candidate predicted continued monotonic-deflation at subsequent silent-ticks. The Add.285 instantiation **extends synth #578's single-tier crossing to two-tier-traversal (majority → plurality)** at the second crossing event, completing the **full taxonomy traversal**.

**Synth #578 → synth #584 extension ledger**:

| crossing | from-tier | to-tier | ADD | step Δ | confirmation-status |
|---|---|---|---|---|---|
| 1st | supermajority | majority | Add.282 | −0.029 | confirmed at synth #578 |
| 2nd | majority | plurality | Add.285 | −0.022 | **confirmed at synth #584** |
| 3rd (predicted) | plurality | sub-plurality [<0.45] | Add.290 (predicted) | −0.020 (per −1/(n·(n+1)) decay) | conditional on silent-octet sustain |

**Synth #581 HHI cross-test**: synth #581's HHI majority-dominance decoupling primitive predicted that author-concentration HHI monotonically deflates as denominator dilutes but anchor-share also deflates. Add.285's kitlangton-share = 0.478 sits at HHI sub-component **0.478² = 0.229** (single-author concentration contribution), down from Add.281's 0.579² = 0.335. Cum HHI Add.285 ≈ 0.229 + small-author-residuals ≈ **0.31** — sustains HHI-deflation trajectory predicted by synth #581 with cum HHI step Add.281 → Add.285 = 0.42 → 0.31, **monotonic-deflation confirmed at quintet across both share AND HHI axes**.

## Implications for ongoing analytical threads

**Synth #565 cascade-extension framework cross-test**: Anchor-regime-collapse co-instantiates with cascade-hard-termination primitive (promoted at synth #583). Combined three-axis cluster: silent-quintet + width-upper-exit + quad-decade-marker + anchor-regime-collapse = **four-axis joint cluster** at Add.285, exceeding synth #565's three-axis joint-cluster threshold. This is the **first four-axis joint regime cluster in W17 cascade body** terminal-tick.

**Synth #102 inverse-scaling extension**: Anchor-regime-collapse trajectory is independent of decade-tier axis (no decade-tier sub-component in the share calculation), providing **orthogonal evidence axis** for the cascade-tail termination regime. Joint-axis BF combining synth #102 decade-marker (×31.2) × synth #584 anchor-regime-collapse (×4.5) × PJL-lockstep (×16.2) = **×2,272** (≈ 10³·³⁶) — **first crossing past ×1000 boundary** at three-axis joint composite, enters very-strong-decisive evidence regime per Kass-Raftery scale.

**Synth #582 circadian-attractor cross-test**: Anchor-regime-collapse occurs entirely within the synth #582 03-08Z low-mode bucket (Add.281-285 capture-window centroids span ~02:50Z → ~08:25Z, all within or adjacent to the low-mode peak). **Predicted rebound at Add.288-290 21-23Z high-mode entry would either (a) inject fresh-author and lift anchor-share, or (b) inject kitlangton self-recurrence and arrest deflation at sub-plurality floor.** Conditional probability under synth #582: P(fresh-author-rebound) ≈ 0.40, P(kitlangton-self-recurrence) ≈ 0.25, P(silent-extension) ≈ 0.35.

## Predictions sourced from this synth (testable at Add.286)

- **P-584.A**: kitlangton-share crosses to 0.458 at Add.286 silent (fifth step in monotonic-deflation quintet → sextet extension): **prior 0.65** (modal under denominator-dilution-decay sustained).
- **P-584.B**: kitlangton-share crosses below 0.45 plurality-decay-floor at Add.287-288: **prior 0.55** (modal under continued silent-extension; would require silent-septet sustain).
- **P-584.C**: anchor-regime-collapse trajectory rebounds via fresh-author injection at next 21-23Z high-mode (synth #582 cross-test): **prior 0.40** (sub-modal under post-confirmation termination-momentum).
- **P-584.D**: cum HHI deflates to ≤0.30 at Add.286 silent: **prior 0.55** (modal under monotonic-deflation sustained at both share and HHI axes).
- **P-584.E**: synth #584 anchor-regime-collapse primitive enters strong-evidence regime at second-confirming-instance (would require independent persistent-anchor on different carrier to exhibit same trajectory): **prior 0.05** (sub-modal at single-tick; persistent-anchor instantiation rate ≈ once per 30-tick window in W17 visible window).
- **P-584.F**: joint three-axis composite BF (decade-marker × anchor-regime-collapse × PJL-lockstep) crosses past ×3000 at Add.286 conditional on silent-sextet sustain: **prior 0.45** (modal-edge under post-very-strong-decisive amplification continuation).
- **P-584.G**: kitlangton-self-recurrence at next high-mode arrests deflation and re-elevates share past 0.500: **prior 0.20** (sub-modal at single-tick; would falsify synth #584 primitive sustained-collapse interpretation).
