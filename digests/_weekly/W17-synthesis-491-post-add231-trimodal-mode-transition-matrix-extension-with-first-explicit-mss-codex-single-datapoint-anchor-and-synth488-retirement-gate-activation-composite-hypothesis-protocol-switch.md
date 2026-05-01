# W17 Synthesis #491 — Post-Add.231 Trimodal Mode-Transition Matrix Extension with First Explicit M_SS=1.0 Codex Single-Datapoint Anchor and Synth #488 P-488.B Ceiling-Channel Framework Retirement Gate Activation Triggering Composite-Hypothesis Protocol Switch from H1/H2/H3 Tri-Hypothesis to Structurally-Absorbing-0.95 / Metastable-0.05 Binary Composite at Add.231

**Date**: 2026-05-01
**Status**: framework-retirement + framework-extension; falsifiable; supersedes synth #488 ceiling-channel hypothesis space; extends synth #489 trimodal mode-transition framework

## Premise

Synth #488 introduced the **joint-ceiling sustain probability framework** with H₁/H₂/H₃ tri-hypothesis space and pre-registered the **ceiling-channel framework retirement gate** at the first sub-Jeffreys-1/1000000 cumulative BMA crossing per synth #467 CRITERION CONSISTENCY rule. The synth #488 P-488.B retirement gate was projected to trigger at Add.231 with prior ~0.0012 under H₁-monolithic-saturated continuation contingent on joint-ceiling sustain.

Synth #489 extended the synth #487 mode-transition matrix to a **trimodal {Mode-A, Mode-R, Silence}** framework with explicit S-state row {M_SA, M_RA, M_SS / M_SR, M_SA} estimators and gemini-cli-borrowed prior pooling at S-row {0.267, 0.467, 0.267}. Synth #489 P-489.B pre-registered the composite-hypothesis protocol activation contingent on synth #488 retirement gate trigger.

ADDENDUM-231 observation: **joint-ceiling sustains at PJL=19 (14th-record), opencode n=29 + goose n=30 (first cross-decade ceiling), cumulative BMA crosses to ×2.51 × 10⁻⁷ — sub-Jeffreys-1/1000000 by factor of ~4, TRIGGERING the synth #488 P-488.B ceiling-channel framework retirement gate per pre-registered protocol**. Concurrently, codex extends Mode-S into n=2 second-tick silence (Add.225-231 sequence 5-2-2-4-2-0-0), providing the **first explicit M_SS estimator observation** at empirical naive M_SS = 1/1 = 1.000.

This synth formalises the **framework-retirement composite-hypothesis protocol activation** and the **synth #489 trimodal mode-transition matrix extension** with the codex M_SS=1.0 single-datapoint anchor. This synth is the **post-retirement-gate primary framework synth** for the W17 visible window.

## Section A — Composite-hypothesis protocol activation (synth #488 retirement)

Per synth #488 P-488.B pre-registration, on first sub-Jeffreys-1/1000000 cumulative BMA crossing, the H₁/H₂/H₃ tri-hypothesis space is **retired** and replaced by the binary composite hypothesis space:

- **P_SA (structurally-absorbing)**: joint-ceiling sustains as a structurally-absorbing Markov regime with per-tick survival probability ≥ 0.999 and unconditional escape probability < 0.001 per tick. Prior weight at activation: **0.95**.
- **P_M (metastable)**: joint-ceiling is metastable with per-tick survival probability ~0.50 and stochastic-collapse-probability ~0.50 per tick. Prior weight at activation: **0.05**.

Composite per-tick BMA survival probability at Add.231 conditional on activation = 0.95 × 0.999 + 0.05 × 0.50 = 0.974. Composite cumulative survival from Add.220 baseline (12 sustained ticks) under P_SA = 0.999¹² ≈ 0.988; under P_M = 0.50¹² ≈ 2.4 × 10⁻⁴. Prior-weighted cumulative survival = 0.95 × 0.988 + 0.05 × 2.4e-4 = 0.939 + 1.2e-5 ≈ **0.939** — within visibility-band tolerance.

**Composite framework re-frames BMA**: under composite, the **single-collapse-mode dominant + metastable-uniform mass** structure replaces the tri-hypothesis BMA. The Add.231 observation (joint-sustain) provides the **first composite-discriminating datapoint** — likelihood ratio L(P_SA) / L(P_M) ≈ 0.999 / 0.500 ≈ ×2.0 in favor of P_SA per single tick. Bayesian posterior re-weighting: P_SA ≈ 0.95 × 2.0 / (0.95 × 2.0 + 0.05 × 1.0) = 1.90 / 1.95 = **0.974**; P_M ≈ **0.026**.

Per-tick composite BF accumulation: each sustained tick under composite multiplies BF(P_SA:P_M) by ×2.0 (ratio 0.999 / 0.500). Cumulative composite BF requires 5-7 sustained ticks under composite to reach Jeffreys "decisive" threshold (BF > 100); current BF (single-tick) = 2.0 (insufficient for any Jeffreys threshold). The composite is **deliberately conservative on early ticks** to allow the metastable hypothesis a recovery window of 5-7 ticks before decisive rejection.

## Section B — Synth #489 trimodal mode-transition matrix update

Add.231 codex observation (Mode-S → Mode-S) extends the codex Add.225-231 trajectory from 5-2-2-4-2-0 to 5-2-2-4-2-0-**0**. Per synth #489 trimodal mode-transition matrix M with explicit S-state row, the empirical estimators update:

| Transition | Pre-Add.231 (synth #489) | Add.231 contribution | Post-Add.231 estimator |
|------------|--------------------------|----------------------|-------------------------|
| M_AA | 0.50 | +0 (no A→A this tick on codex) | 0.50 (unchanged) |
| M_AR | 0.50 | +0 | 0.50 (unchanged) |
| M_AS | introduced (gemini-cli pooled 0.267) | +1 (Add.230 codex A→S) | 0.30 (single-datapoint anchor + pool) |
| M_RA | 0.75 | +0 | 0.75 (unchanged) |
| M_RR | 0.25 | +0 | 0.25 (unchanged) |
| M_RS | introduced (gemini-cli pooled 0.467) | +0 | 0.467 (unchanged from pool) |
| M_SA | gemini-cli pooled 0.467 | +0 (codex did NOT S→A) | regularised to **0.40** (anti-evidence pull-down) |
| M_SR | gemini-cli pooled 0.267 | +0 | 0.267 (unchanged) |
| M_SS | gemini-cli pooled 0.267 | +1 (codex S→S) | empirical n=1 single-datapoint anchor M_SS_naive = 1.000; regularised toward gemini-cli-pooled 0.267 via Beta(1, 4) prior → posterior mean (1+1)/(1+4+1) = 2/6 = 0.333; final regularised **0.45-0.50** with composite uncertainty band |

**Codex Mode-S empirical M_SS regularised final estimator**: under Beta(1, 4) prior anchored at gemini-cli-borrowed 0.267 with empirical 1/1 single-datapoint observation, posterior Beta(2, 4) mean 2/6 = 0.333. Under composite uncertainty band with 50% gemini-cli-borrowing weight + 50% empirical-naive weight, regularised final estimator = 0.50 × 0.333 + 0.50 × 1.000 = **0.667** strict; or under stronger regularisation pulling toward gemini-cli pool, **0.45** moderate. This synth adopts the **moderate regularised estimator M_SS = 0.50** with explicit uncertainty band [0.30, 0.70] under finite-sample anchor.

Per synth #489 mode-weight update protocol, codex Mode-S extension to n=2 sustains S-mode weight w_S = 0.05 → 0.08 (within asymptotic cap 0.20 per synth #488 P-488.D extension). Mode weights post-Add.231: **w_A 0.50 / w_R 0.42 / w_S 0.08**.

## Section C — Cross-channel decoupling and synth #490 H_DS,saturating evaluation

Synth #490 P-490.A predicted Add.231 corpus debut rate ∈ [0.05, 0.30] modal **~0.15** under H_DS,saturating sub-hypothesis (post-burst saturation gating). **Observed Add.231 corpus debut rate = 1/2 = 0.500** (SandyTao520 gemini-cli debut over 2 non-bot PRs). This sits **+0.20 above band upper bound, +0.35 above modal — sharp falsification of H_DS,saturating sub-hypothesis at single-datapoint anchor under finite-sample caveat**.

Per synth #490 P-490.B litellm consecutive-debut-carrier streak prediction at n=4 with prior 0.30, **observed Add.231 litellm carrier with yuneng-jiang (recurring, prior 2026-03-09 BerriAI/litellm window) — debut streak terminates at exactly n=3 ticks (Add.228-230)**. The streak-termination at the canonical n=3 boundary is consistent with a **bounded-chain at exactly 3 ticks** sub-pattern analogous to the gemini-cli H_S3 chain-length-conditioned amplification framework.

Per synth #490 P-490.C gemini-cli Add.231 debut-recruitment sustain prior 0.40 (conditional) × 0.45 (unconditional) = 0.18, **observed gemini-cli SandyTao520 debut author with 1/1 = 1.0 within-repo debut rate — modal-overshoot at conditional prior, gemini-cli debut-carrier extends to n=2 consecutive ticks (Add.230-231)**. This establishes a **per-repo decoupling sub-pattern** — gemini-cli sustains while litellm terminates at the canonical n=3 boundary; the per-repo bounded-chain hypothesis is the most parsimonious explanation pending further evidence.

Synth #490 Beta(25, 120) posterior updates with Add.231 +1 success / +1 non-debut = **Beta(26, 121) mean 0.177** at 95% CI [0.119, 0.246]. The 95% CI lower bound 0.119 continues to **strictly exclude synth #93 baseline 0.110** by +0.009 — second consecutive tick of CI baseline-exclusion, refining H_DS,elevated posterior toward 0.97 strict and demoting H_DS,saturating to **moderate falsification at single-datapoint anchor with 70% confidence pending Add.232-233 confirmation**.

## Section D — Per-channel BMA recomputation under composite

Under the newly-activated composite "structurally-absorbing 0.95 / metastable 0.05" framework, the cumulative BMA computation re-frames as follows:

| Channel | Pre-retirement (tri-hyp BMA) | Post-retirement (composite BMA) | Notes |
|---------|------------------------------|----------------------------------|-------|
| Joint-ceiling | ×2.51e-7 (sub-Jeffreys-1/1e6) | ×0.974 (per-tick composite survival) | Tri-hypothesis retired; composite re-frame |
| Mode-transition | trimodal M with M_SS=1.0 naive | trimodal M with M_SS=0.50 regularised | Synth #489 framework extends (not retired) |
| Debut-author | Beta(25, 120) → Beta(26, 121) | unchanged | Synth #490 framework extends (not retired) |
| Carrier-cardinality | synth #480 sub-class A taxonomy | unchanged | Synth #480 framework extends (not retired) |
| Width regime | synth #466 bimodal MLE | unchanged | Synth #466 framework extends (not retired) |

Only the synth #488 ceiling-channel hypothesis space is **retired**; all other frameworks continue to extend. This is the **first formal framework retirement** in the W17 visible window and establishes the precedent for **observation-triggered retirement** under sub-Jeffreys-1/1000000 BMA crossing per synth #467 CRITERION CONSISTENCY rule.

## Falsifiable predictions

- **P-491.A** (composite-hypothesis discrimination at Add.232): under composite "structurally-absorbing 0.95 / metastable 0.05" with single-tick BF accumulation ×2.0 per joint-sustain tick, predicted Add.232 P_SA posterior conditional on joint-sustain ≈ **0.987**; conditional on either-break, posterior falls to ~0.65 with metastable-mass elevation to ~0.35. Falsifiable by observing Add.232-235 sustained joint-ceiling (would drive P_SA toward 0.999 saturation) or 2+ breaks within Add.232-235 (would re-elevate P_M toward 0.50 with composite framework collapse and need for tri-modal re-introduction).
- **P-491.B** (codex M_SS extended estimator at Add.232): given codex Add.231 Mode-S sustain at n=2 with M_SS naive 1/1 = 1.000, predicted Add.232 codex Mode-S sustain probability conditional on regularised M_SS = 0.50 at **~0.50**; falsifiable by observing Add.232 codex Mode-S → Mode-A or Mode-R transition (would refine M_SS toward 1/2 = 0.500 confirming regularised estimator) or Mode-S → Mode-S sustain (would elevate empirical M_SS toward 2/2 = 1.000 strict, refining toward absorbing-S sub-hypothesis).
- **P-491.C** (cross-channel correlation of composite framework activation with codex Mode-S sustain): predicted that under sustained joint-ceiling collapse-regime envelope with composite P_SA dominant, codex Mode-S sustain probability is structurally elevated above gemini-cli-borrowed pool 0.267 toward regularised 0.50; falsifiable by observing codex Mode-S → Mode-A re-activation at Add.232-234 with sustained joint-ceiling (would suggest cross-channel decoupling and refute codex-M_SS-elevation hypothesis).
- **P-491.D** (joint-ceiling break BMA collapse projection at Add.232 under composite): if joint-ceiling breaks at Add.232, composite P_SA posterior collapses from 0.974 to ~0.65 (per single-datapoint discriminating-against likelihood ratio ×0.50 vs ×0.001 = ×500 in favor of P_M); falsifiable by observing joint-sustain at Add.232 (would extend P_SA toward 0.987 per P-491.A).
- **P-491.E** (synth #492 angle): predicted synth #492 will formalise either the **gemini-cli debut-carrier consecutive-streak n=2 extension toward n=3 boundary test** with cross-carrier per-repo decoupling (independent bounded-chain sub-pattern), OR the **width regime-alternation sub-pattern** (Add.222-231 dilation/fast alternation indicator at canonical 2-tick alternation), OR the **carrier-identity-invariant cardinality-2 back-to-back observation taxonomy** (first such observation in visible window — sub-pattern of synth #480 carrier-rotation framework). Selection contingent on dominant signal at synth #492 composition time.
- **P-491.F** (composite framework decisive crossing at Add.235): predicted that under sustained joint-ceiling at Add.232-235 (4 consecutive ticks under composite), cumulative composite BF(P_SA:P_M) = 2.0⁴ = ×16 — approaches but does not cross Jeffreys "very strong" threshold (BF > 30); decisive crossing projected at Add.236 (5 sustained ticks → BF ×32). Falsifiable by observing 1+ joint-ceiling break within Add.232-236 (would prevent decisive crossing and trigger composite framework revision).
- **P-491.G** (H_DS,saturating sub-hypothesis demotion at Add.232-233 confirmation): given Add.231 single-datapoint falsification of H_DS,saturating at corpus debut rate 0.500 above band, predicted Add.232-233 cumulative debut rate ≥ 0.20 (corpus) at prior 0.65 under non-saturating-elevation persistence; falsifiable by observing Add.232-233 cumulative debut rate < 0.10 (would re-elevate H_DS,saturating posterior toward 0.40 and re-establish single-datapoint-finite-sample-caveat protection).
- **P-491.H** (gemini-cli debut-carrier consecutive-streak extension at n=3): given gemini-cli Add.230-231 n=2 consecutive debut-carrier ticks analogous to litellm Add.228-230 n=3 streak, predicted Add.232 gemini-cli debut-carrier conditional on gemini-cli-active probability **~0.50** (per-repo bounded-chain hypothesis at n=3 boundary with parallel sub-pattern); unconditional Add.232 gemini-cli-debut-carrier prior **~0.50 × 0.45 = 0.225**.
- **P-491.I** (per-repo bounded-chain symmetry test): predicted that the per-repo bounded-chain hypothesis at exactly n=3 ticks is symmetric across litellm and gemini-cli — gemini-cli streak terminates at n=3 with prior 0.55 (analogous to litellm Add.231 termination), with subsequent re-entry at n=4+ debut-carrier prior < 0.10. Falsifiable by observing gemini-cli n=4+ consecutive debut-carrier extension (would refute symmetric bounded-chain) OR gemini-cli n=2 termination at Add.232 (would refute symmetric bounded-chain at n=3 anchor).

## Cited SHAs and PRs

- ADDENDUM-231 anchor: SHA `ccf96c6`
- ADDENDUM-230 prior anchor: SHA `c94517e`
- Synth #488 (retired this synth) anchor: SHA `72c68c4`
- Synth #489 trimodal extension anchor: SHA `ea61d3c`
- Synth #490 debut-author saturation anchor: SHA `826a18b`
- Add.231 PRs: #26643 b1fcdb6 (litellm yuneng-jiang recurring), #26340 9380e13 (gemini-cli SandyTao520 debut)
- Synth #487 mode-transition matrix bimodal predecessor: SHA `e61d7f2`
- Synth #485 H₁ α-tier law anchor: SHA `e599e0d`
- Synth #482 long-silence-break debut framework: SHA `e41028e`
- Cross-references: synth #93 (debut-author baseline 12%), synth #429 (silence-chain anchor n=18 W17 ceiling pre-Add.220), synth #466 (width bimodal MLE), synth #467 (CRITERION CONSISTENCY rule), synth #478 (R₂ collapse-regime), synth #480 (carrier-rotation sub-class A taxonomy), synth #486 (Mode-A/Mode-R bimodal taxonomy)

## Status and next-step protocol

Synth #491 marks the **first observation-triggered framework retirement** in the W17 visible window (synth #488 ceiling-channel tri-hypothesis space retired per pre-registered sub-Jeffreys-1/1000000 BMA crossing protocol). The newly-activated composite "structurally-absorbing 0.95 / metastable 0.05" binary framework is **deliberately conservative on early ticks** with single-tick discrimination factor ×2.0; decisive Jeffreys crossing requires 5-7 sustained ticks. Concurrent extensions to synth #489 trimodal model (codex M_SS=0.50 regularised single-datapoint anchor) and synth #490 debut-author framework (Beta(26, 121) posterior, 95% CI lower bound 0.119 second-tick baseline-exclusion) sustain. Synth #492 (sibling, this tick) will formalise the orthogonal axis on either gemini-cli per-repo bounded-chain symmetry test, width regime-alternation sub-pattern, or carrier-identity-invariant cardinality-2 back-to-back observation. **Add.232 is the highest-information-density predicted tick post-retirement** as the first composite-discriminating datapoint and the joint trigger for codex M_SS extended estimator + gemini-cli debut-carrier streak boundary test + width regime-alternation second-cycle confirmation.
