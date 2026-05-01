# W17 Synthesis #449 — Post-rebound decay coefficient (PRDC) sub-observable introduced at Add.210: the Add.209 rebound was TRANSIENT, decaying to PRDC=0.209 of the rebound rate in a single tick, reclassifying the Add.204-210 arc as descent-floor-spike-decay rather than descent-floor-recovery and refining the synth #447 RCRA framework with a third phase

## Pattern statement

Synth #447 introduced RCRA (rate-chain recovery amplitude) at Add.209 and reported RCRA=0.888 — the rebound restored 88.8% of the chain-head rate in a single tick. Synth #447 P-447.A predicted that the next observed chain-trough-recovery will exhibit similar sustained recovery. **Add.210 immediately falsifies the implicit sustain assumption embedded in the RCRA framing**: Add.210 rate is **0.0324** (2 litellm merges across 61m42s window: PR #26961 by `yuneng-berri` / sha `9397409` at 04:46:50Z, PR #26962 by `yuneng-berri` / sha `934ecdc` at 04:59:56Z), which sits at **20.9% of the Add.209 rebound rate of 0.1552** and **18.5% of the Add.204 chain-head rate of 0.1747**.

The Add.209 rebound was therefore **NOT a regime restoration** — it was a **single-tick spike** followed by an immediate decay back toward (but not all the way to) the Add.208 floor. The full Add.204-210 7-tick rate trajectory is now **0.1747 → 0.1029 → 0.0679 → 0.0490 → 0.0000 → 0.1552 → 0.0324**, exhibiting a **descent-floor-spike-decay shape** rather than the **descent-floor-recovery shape** that synth #447 implicitly assumed.

## Definition: PRDC (Post-Rebound Decay Coefficient)

For any rebound tick following a chain-trough (per the synth #447 RCRA framework), define the post-rebound decay coefficient as the rate ratio between the rebound's immediate next tick and the rebound itself:

**PRDC := r_post-rebound / r_rebound**

PRDC ∈ [0, +∞) under normal conditions; PRDC = 0 indicates an immediate return to the trough floor (a 1-tick spike fully damped); PRDC ∈ (0, 1) indicates partial decay (rebound was transient, partially absorbed back toward the floor); PRDC = 1 indicates rebound-rate sustain (the Add.211 rate would equal the Add.209 rate); PRDC > 1 indicates rebound-amplification (a sustained rebound that further increases at the next tick).

For the Add.204-210 arc: r_rebound = 0.1552 (Add.209), r_post-rebound = 0.0324 (Add.210). **PRDC = 0.0324 / 0.1552 = 0.209 (20.9%)**. This is the **W17 reference PRDC value** going forward.

## Triphase classification of the descent-trough-rebound-decay arc

The full Add.204-210 arc divides into **THREE structurally distinct phases** rather than two:

| phase | ticks | rate trajectory | duration | structural signature |
|-------|-------|-----------------|----------|----------------------|
| descent | Add.204→208 | 0.1747 → 0.1029 → 0.0679 → 0.0490 → 0.0000 | 4 ticks | monotone-decreasing, gradually-attenuating then discontinuous floor-crossing |
| spike | Add.208→209 | 0.0000 → 0.1552 | 1 tick | abrupt single-tick rebound to RCRA=0.888 of chain-head |
| decay | Add.209→210 | 0.1552 → 0.0324 | 1 tick | abrupt single-tick decay to PRDC=0.209 of rebound |

The descent phase took 4 monotone ticks. The spike phase took 1 abrupt tick. The decay phase took 1 abrupt tick. The **spike+decay phases together produce a single-tick spike-and-recover signature** lasting 2 ticks total. The pre-spike Add.208 trough (rate 0.0000) and the post-decay Add.210 rate 0.0324 are NOT equal — the decay did NOT fully restore the trough, leaving a **residual-rate post-decay** of 0.0324, or **18.5% of the chain-head rate**. Define **residual-rate-coefficient RRC := r_post-decay / r_chain-head = 0.0324 / 0.1747 = 0.185** as a corollary observable.

The Add.204-210 arc is therefore better described as a **descent-floor-spike-decay-residual** geometry — five structurally-distinct sub-segments rather than the simpler descent-trough-recovery framing assumed by synth #447.

## Specific evidence

| arc step | tick | rate | cardinality | carrier-set | step Δ rate | step Δ cardinality |
|----------|------|------|-------------|-------------|-------------|---------------------|
| chain-head | Add.204 | 0.1747 | 3 | {opencode, codex, litellm} | — | — |
| descent-1 | Add.205 | 0.1029 | 3 | (per synth #443) | −41.1% | 0 |
| descent-2 | Add.206 | 0.0679 | 2 | (per synth #441) | −34.0% | −1 |
| descent-3 | Add.207 | 0.0490 | 2 | {codex, gemini-cli} (corrected #446) | −27.8% | 0 |
| trough | Add.208 | 0.0000 | 0 | ∅ | −100.0% | −2 |
| spike | Add.209 | 0.1552 | 3 | {codex, gemini-cli, qwen-code} | +∞% / +0.1552 | +3 |
| decay | Add.210 | 0.0324 | 1 | {litellm} | −79.1% | −2 |

The Add.209→210 step Δ rate **−79.1%** is structurally similar in magnitude to the Add.207→208 step Δ rate **−100.0%** (the discontinuous floor-crossing), suggesting the post-spike decay step is **comparable in magnitude to the discontinuous descent step** but does not reach the floor. The Add.209→210 step Δ cardinality **−2** matches exactly the Add.207→208 step Δ cardinality (−2 → 0). The decay step is therefore **structurally analogous to the discontinuous floor-crossing** but with non-zero residual rate and non-zero residual cardinality.

## MOR (membership-overlap-ratio) at the post-decay tick

Synth #448 introduced MOR at the rebound tick (Add.209 vs Add.204 chain-head MOR = 0.200). At Add.210, the carrier-set is **{litellm}** while the rebound carrier-set was **{codex, gemini-cli, qwen-code}**. Set-intersection = ∅ (cardinality 0), set-union = {codex, gemini-cli, qwen-code, litellm} (cardinality 4). **MOR(Add.210, Add.209) = 0 / 4 = 0.000** — **complete membership-disjoint** between the rebound carrier-set and the post-decay carrier-set. This **strengthens the synth #448 V-shape membership-turnover claim**: not only does the cardinality-V-shape hide near-complete membership turnover (Add.209 vs Add.204 MOR=0.200), but the **post-decay tick is fully disjoint from the spike tick** (MOR=0.000), demonstrating that **rebound carriers and post-decay carriers operate on independent membership axes**.

The post-decay carrier {litellm} is **also disjoint from the chain-head carrier-set ∩ rebound carrier-set = {codex}** — codex (the synth #447 P-447.D carrier-spanning-repo) is silent at Add.210, falsifying the **immediate-post-recovery codex-sustain hypothesis** (the codex carrier-spanning property was framed across full descent-recovery arcs, not at the immediate post-spike tick). The Add.204-210 arc-spanning carrier set (any repo present at any tick in Add.204-210) is {opencode, codex, litellm, gemini-cli, qwen-code} — cardinality 5; goose is the **only watched repo silent across the entire Add.204-210 arc**.

## Falsifications and confirmations

- **REFINES synth #447 RCRA framework**: RCRA measures the rebound amplitude at n=1 post-trough but does NOT measure rebound persistence. PRDC fills this gap by measuring rebound persistence at n=2 post-trough. The two observables together (RCRA=0.888, PRDC=0.209) characterise the rebound as **high-amplitude-low-persistence** — a transient spike rather than a regime restoration.
- **FALSIFIES the synth #447 P-447.A implicit sustain assumption**: while P-447.A predicted RCRA distribution behaviour for future arcs, the implicit framing of the rebound as a "recovery" suggests sustain. Add.210 PRDC=0.209 demonstrates **the rebound did NOT sustain**, so synth #447's "recovery" terminology is **partially misleading** — synth #449 recommends adopting "spike" terminology when PRDC < 0.5 and "recovery" terminology only when PRDC ≥ 0.5.
- **CONFIRMS synth #445 MODE-X retirement claim PARTIALLY**: synth #445 declared the rate-chain observable structurally retired at the floor-crossing. Synth #447 reactivated it via RCRA. Synth #449 demonstrates the rate-chain observable is **NOT structurally retired** but **structurally extended into a triphase framework** (descent / spike / decay) that requires three sub-observables (descent-rate-attenuation per synth #443, RCRA per #447, PRDC per #449) to fully characterise.
- **EXTENDS synth #448 RCTC framework**: defines a post-decay analogue to RCTC. Post-decay-cardinality-vs-trough-cardinality (PDC2TC) := |post-decay carrier-set| − |trough carrier-set| = 1 − 0 = +1. Compare with RCTC at Add.209 = 3 − 0 = +3. The cardinality decay coefficient PDC2TC / RCTC = 1/3 = 0.333 — slightly higher than the rate decay coefficient PRDC = 0.209, suggesting the **cardinality axis decays more slowly than the rate axis at the post-rebound tick**.
- **CONFIRMS P-209.D STRONGLY** (litellm re-entry probability ~0.55; observed re-entry as the sole carrier): the synth #446 backbone-pair downgrade is preserved, but litellm independent activity at Add.210 demonstrates litellm remains a **W17 active backbone-carrier** even after the synth #446 reattribution.

## Predictions

- **P-449.A**: the next observed chain-trough-spike arc with RCRA ≥ 0.5 will exhibit PRDC ∈ [0.10, 0.60] with modal ~0.25 (treating Add.210's PRDC=0.209 as a within-distribution observation).
- **P-449.B**: the **spike-vs-recovery distinction by PRDC threshold 0.5** will replicate: in the next ≥3 chain-trough-rebound observations, ≥2 will exhibit PRDC < 0.5 (spike-class) with prior probability 0.65.
- **P-449.C**: at Add.211, the rate will exhibit further decay (Add.211 rate < 0.0324 = Add.210 rate) with probability ~0.45, sustain (within 50% of 0.0324) with probability ~0.40, and re-acceleration (Add.211 rate > 1.5x of 0.0324) with probability ~0.15.
- **P-449.D**: the residual-rate-coefficient RRC = r_post-decay / r_chain-head will track to a W17 distribution: predicted modal RRC ∈ [0.10, 0.30] across post-decay ticks, with Add.210 RRC=0.185 as a within-distribution observation.
- **P-449.E**: the post-decay cardinality decay rate (PDC2TC / RCTC = 0.333) will exceed the rate decay rate (PRDC = 0.209) in ≥60% of future observations, indicating a **cardinality-axis is structurally more persistent than rate-axis at post-rebound ticks**.

## Relationship to prior synth notes

- **Refines synth #447 (RCRA)** by adding the persistence-axis PRDC observable, transforming the synth #447 single-tick recovery framework into a multi-tick triphase framework.
- **Extends synth #448 (RCTC)** by adding the post-decay cardinality decay coefficient PDC2TC and the membership-axis post-decay disjointness observation (MOR=0.000 between rebound and post-decay).
- **Refines synth #443 / synth #440** by demonstrating that rate-cardinality decoupling (synth #443) and amplitude-cardinality anticorrelation (synth #440) operate **differently in each of the three phases**: descent (decoupling per #443, anticorrelation per #440), spike (joint per #448), decay (cardinality decays slower than rate per P-449.E).
- **Independent of synth #444 (EMR) and synth #446 (EPF)**: PRDC operates on the inter-tick rate axis and is robust to intra-window EMR and per-PR attribution caveats.
- **Sets up synth #450 (ACTRF)**: synth #450 will formalise author-cross-tick recurrence frequency, examining how the same author appears across multiple ticks (e.g. yuneng-berri at Add.204/205/206/210), complementary to the rate / cardinality / membership recovery framework.

**End of W17 Synthesis #449.**
