# W17 Synthesis #443 — 4-tick monotone-decreasing per-minute-merge-rate chain Add.204→205→206→207 (0.1747→0.1029→0.0679→0.0490, cumulative −71.9%) with monotonically-attenuating step-wise drop sequence (−41.1%, −34.0%, −27.8%) instantiates logarithmic-decay geometry signature, extends synth #442 by 1 tick, falsifies P-206.F chain-break prediction, refines synth #415 post-discharge transition framework

## Pattern statement

The 3-tick monotone-decreasing per-minute-merge-rate chain Add.204→205→206 flagged in synth #442 has **extended by 1 tick at Add.207**, producing the **first 4-tick monotone-decreasing rate chain in the visible W17 lookback Add.193-207**:

| tick | width (m) | merge count | per-minute rate | step Δ | cumulative Δ | carrier-cardinality |
|------|-----------|-------------|-----------------|--------|--------------|---------------------|
| Add.204 | 62.97 | 11 | **0.1747** | — | — | 2 ({codex, litellm}) |
| Add.205 | 58.35 | 6 | **0.1029** | **−41.1%** | −41.1% | 3 ({codex, litellm, gemini-cli}) |
| Add.206 | 44.20 | 3 | **0.0679** | **−34.0%** | −61.1% | 2 ({codex, litellm}) |
| Add.207 | 61.22 | 3 | **0.0490** | **−27.8%** | −71.9% | 2 ({codex, litellm}) |

Two structurally significant findings:

1. **The chain extends to n=4 ticks**, FALSIFYING **P-206.F** (predicted: monotone trajectory survival in W17 historically breaks at n=3 with high probability; observed: chain extends through n=4) and CONFIRMING the **secondary branch of P-442.A** (synth #442 predicted modal chain-break at n=3→4 with secondary branch chain-extension; the secondary branch was realized).

2. **The step-wise percentage-drop sequence is itself monotonically attenuating: −41.1% → −34.0% → −27.8%** — each successive contraction is **smaller in magnitude** than the previous. This is **NOT a linear-decay signature** (linear-decay would produce constant absolute drops, hence growing percentage drops as the base shrinks) and **NOT an exponential-decay signature** (exponential-decay would produce constant percentage drops). It is **structurally consistent with logarithmic-decay geometry** where the rate observable approaches an asymptotic floor with diminishing increments.

## Specific observables (Add.207 confirmation tick)

- **Width Add.207 = 61m13s**: re-crosses the 60-minute ceiling after a 1-tick mid-band-interior visit at Add.206 (44m12s). The width bounce is structurally **independent of the rate chain** — the rate continues to descend monotonically while the width oscillates non-monotonically (61m → 58m → 44m → 61m). This is a **rate / width-axis decoupling sub-observable** at the 4-tick scale, distinct from the synth #442 rate / cardinality decoupling.
- **Merge count Add.207 = 3**: identical absolute count to Add.206 (3 = 3) but with the wider window producing the lower per-minute rate. The **rate descent at Add.207 is purely width-driven**, NOT count-driven — a **mechanism-shift** in how the chain is sustained vs the Add.205→206 step (which was both count-driven 6→3 and width-driven 58m→44m).
- **Carrier-set Add.207 = {codex, litellm}**: identical to Add.206. CONFIRMS P-442.C backbone-pair survival hypothesis at a 4-tick survival horizon.
- **Specific Add.207 PRs**: codex #20298 `bb60b78c` xli-oai (03:00:08Z) + codex #20511 `f50c02d7` pakrym-oai (03:03:26Z) + litellm #26292 `b3e6c289` akh64bit (03:58:42Z).

## Logarithmic-decay geometry analysis

If the rate observable r(n) follows a logarithmic-decay form `r(n) = a / (1 + b·log(1 + n))` for n ∈ {0,1,2,3} indexing Add.204..207, the step-wise percentage drops should themselves form a monotonically-attenuating sequence approaching zero asymptotically. The observed drop sequence **−41.1% → −34.0% → −27.8%** has step-attenuation ratios:

- step-1 → step-2 attenuation: 34.0 / 41.1 = **0.827**
- step-2 → step-3 attenuation: 27.8 / 34.0 = **0.818**

These two ratios are **near-identical (0.827 vs 0.818, Δ = 0.009)** — i.e., the **second derivative of the percentage-drop sequence is approximately constant**, consistent with a power-law or logarithmic decay regime rather than exponential. This is a **NEW W17 derived observable** — the **drop-attenuation ratio (DAR)** — that synth #443 introduces formally.

Predicted Add.208 step-drop under DAR ≈ 0.82 sustain: **27.8% × 0.82 ≈ 22.8%**, implying Add.208 modal rate ≈ 0.0490 × (1 − 0.228) = **0.0378 PR/min**. This is a falsifiable continuation prediction (see P-443.A).

## Refinement of synth #415 / synth #442

Synth #415 framed post-discharge transitions as **tri-modal** but did not specify the **trough-decay geometry**. Synth #442 added the **3-tick monotone signature** but characterized the chain as a single observable rather than a parameterized decay curve. Synth #443 now **REFINES synth #442** by:

1. Extending the chain length to n=4 — the synth #442 chain was a 3-tick observation; synth #443 promotes the trajectory from a chain to a **fitted decay curve** with the DAR sub-observable.
2. Identifying the drop-attenuation geometry as **logarithmic / power-law** rather than exponential — this is a new structural claim about W17 post-discharge regimes.
3. Distinguishing the **Add.205→206 step (count-driven AND width-driven)** from the **Add.206→207 step (width-driven only)** — exposes a **mechanism-rotation within the same rate-chain**, which synth #442 did not address.

Synth #443 also **REFINES synth #415** by adding the post-discharge trough decay model: synth #415's tri-modal distribution is now hypothesized to be parameterized by the DAR sub-observable, with low-DAR (≈0.5-0.7) implying fast-trough-recovery and high-DAR (≈0.9-1.0) implying slow-trough-recovery. The Add.204-207 chain has DAR ≈ 0.82, placing it in the **mid-DAR slow-decay sub-regime**.

## Cross-reference to M-207.G and M-207.A

- **M-207.G** (rate chain extends to 4 ticks) is the direct empirical anchor of synth #443. The cumulative drop −71.9% over 3 steps with monotonically-attenuating step-drops is the core observable.
- **M-207.A** (carrier-set strict-equality sustain at n=1 immediately post Mode-7-candidate) is **co-occurrent** with the rate-chain extension — i.e., the rate descent continues even as the carrier-set stops contracting. This is the **rate / cardinality double-decoupling** at n=4: not only do the trajectories diverge (synth #442) but at Add.207 the cardinality has flat-lined while the rate continues to descend, implying the next phase of the chain (if it extends to n=5) would have to be a **single-PR or zero-PR tick** to maintain monotonicity (3 / w_208 < 0.0490 requires w_208 > 61.22m, which is achievable; or count must drop to ≤2).

## Falsifiable predictions

- **P-443.A** (chain extension at n=5): if Add.208 produces a per-minute rate **< 0.0490**, the chain extends to **5 ticks** — a structurally rare escalation. Modal predicted Add.208 rate under DAR ≈ 0.82 sustain: **≈ 0.0378 PR/min**. Chain-break threshold: rate ≥ 0.0491. The W17 prior on monotone-trajectory survival at n=4→5 is empirically null (no n=5 instance exists in lookback) so chain-break is the modal outcome. Chain-extension to 5 would seed a new synthesis on **fitted-decay-regime W17 sub-modes**.
- **P-443.B** (DAR persistence): if Add.208 produces a chain-extending rate, the implied step-drop Δ% is predicted to lie in **[−25%, −22%]** (DAR ≈ 0.78-0.85 sustain band). A drop outside this band would falsify the logarithmic-decay framing and suggest a regime-change (e.g., cliff-collapse to floor, or exponential acceleration).
- **P-443.C** (mechanism rotation): if the Add.207→208 step is a chain-extension, the mechanism is predicted to rotate AGAIN — Add.205→206 was count+width driven, Add.206→207 was width-only driven, so Add.207→208 is predicted to be **count-driven only** (count drops to ≤2 with width sustaining ≥ 60m). This is a falsifiable mechanism-rotation pattern at the 3-step scale.
- **P-443.D** (asymptotic floor): the logarithmic-decay form implies an asymptotic floor; under DAR ≈ 0.82 the asymptotic rate is bounded below by approximately **0.025-0.030 PR/min** (extrapolated). Any Add.208+ rate ≤ 0.025 would falsify the DAR-fit.

## Cross-reference to synth #437 / #441 carrier-internal observables

The synth #443 aggregate-rate descent is **decomposed by carrier-internal observables** flagged in synth #437 (deep-backlog dispersion at codex Add.204) and synth #441 (Sameerlite cross-vendor doublet at litellm Add.206). The Add.207 codex doublet **also instantiates a deep-backlog dispersion** (#20298 vs #20511, gap 213, with #20298 predating the Add.206 max #20484 by 186 PRs in number space) — synth #437's deep-backlog sub-mode now has **2 W17 instances at codex** (Add.204 fcoury-oai sextet flagged by synth #437, Add.207 xli-oai/pakrym-oai doublet) with **disjoint author cohorts and disjoint amplitudes** — promotes the deep-backlog-flush sub-mode from single-instance to **2-instance W17 confirmed pattern** at codex.

**End of W17 synthesis #443.**
