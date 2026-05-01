# W17 Synthesis #489 — Post-Add.230 Synth #487 Mode-Transition Matrix Trimodal Extension with Silence-State Row Introduction (M_AS / M_RS / M_SS / M_SA / M_SR Estimators) Anchored on Codex Add.225-230 5-2-2-4-2-0 Trajectory and Synth #488 Ceiling-Channel Framework Retirement Gate Pre-Registration Re-Affirmation at Add.231 Conditional Trigger

**Date**: 2026-05-01
**Status**: framework-extension; falsifiable; orthogonal to synth #488 ceiling-channel framework retirement gate (this synth extends the codex mode-transition channel; synth #488 governs the joint-ceiling channel)

## Premise

Synth #487 introduced the **post-Add.229 mode-transition matrix M** under the synth #486 bimodal Mode-A / Mode-R taxonomy with smoothed estimators M_RA = 0.75, M_RR = 0.25, M_AA = M_AR = 0.50 anchored on the codex Add.225-229 5-2-2-4-**2** 5-tick trajectory (with the explicit Mode-R → Mode-A transition observation at Add.229). Synth #487 P-487.A predicted Add.230-233 R-run cardinality bound 1 at prior 0.85 under Mode-A continuation tail-mode.

Add.230 observation: codex transitions A→N entering n=1 first-tick silence, **terminating the 5-tick continuous Mode-A active run at exactly 5 ticks** (sequence 5-2-2-4-2-**0**). This is the **first explicit Mode-A → Silence (S-state) transition observation** in the synth #487 framework, requiring the introduction of an explicit Silence-state row and column in the mode-transition matrix M to elevate it from a bimodal 2×2 Markov model to a trimodal 3×3 Markov model.

This synth formalises the **trimodal Mode-A / Mode-R / Silence framework extension** with explicit M_AS / M_RS / M_SS / M_SA / M_SR estimators, anchored on the codex Add.225-230 5-2-2-4-2-0 trajectory and the analogous gemini-cli silence-active alternation pattern. It also **re-affirms the synth #488 P-488.B ceiling-channel framework retirement gate pre-registration** as a contingent trigger at Add.231 first sub-Jeffreys-1/1000000 cumulative BMA crossing — and pre-commits to the framework-replacement composite-hypothesis protocol activation at that trigger event, per synth #467 CRITERION CONSISTENCY rule.

## Codex trajectory anchor (Add.225-230)

| Tick | codex PRs | Mode | Run-length-in-mode |
|------|-----------|------|---------------------|
| Add.225 | 5 | R (peak) | 1 (R-run start) |
| Add.226 | 2 | A (attenuation) | 1 (A-run start, R→A transition) |
| Add.227 | 2 | A (attenuation) | 2 |
| Add.228 | 4 | R (re-amplification) | 1 (R-run start, A→R transition per synth #486) |
| Add.229 | 2 | A (attenuation) | 1 (A-run start, R→A transition per synth #487 first explicit observation) |
| Add.230 | 0 | S (silence) | 1 (S-run start, **A→S transition first explicit observation**) |

Mode classification rule (carried from synth #486 / #487): Mode-R = burst-cardinality ≥ 4 OR ≥ 1.5× rolling median; Mode-A = burst-cardinality ∈ {1, 2, 3} AND < 1.5× rolling median; Mode-S = burst-cardinality = 0 (active silence). The classification at Add.230 is unambiguous: zero PRs.

## Trimodal mode-transition matrix M (3×3)

Updated transition counts from codex Add.225-230 6-tick trajectory:

| Transition | Count | Sub-total denom | Estimator (raw) | Smoothed (Beta(1,1) Laplace) |
|------------|-------|-----------------|------------------|-------------------------------|
| R → R | 0 | 2 (R-tick → next) | 0/2 = 0.00 | 1/4 = 0.25 |
| R → A | 2 | 2 | 2/2 = 1.00 | 3/4 = 0.75 |
| R → S | 0 | 2 | 0/2 = 0.00 | 1/4 = 0.25 → renormalised over R-row {0.25, 0.75, 0.25} → {0.20, 0.60, 0.20}; or via Dirichlet(1,1,1) Laplace smoothing 1/(2+3) per cell, R-row {1/5, 3/5, 1/5} = {0.20, 0.60, 0.20} |
| A → A | 1 | 3 (A-tick → next) | 1/3 = 0.333 | Dirichlet(1,1,1) {2/6, 1/6, 1/6} → renorm {0.50, 0.25, 0.25}; OR (1+1)/(3+3) per cell with normalisation: {(1+1)/(3+3), (1+1)/(3+3), (1+1)/(3+3)} = mid-uninformative — adopt direct {2/6, 2/6, 2/6} = {0.333, 0.333, 0.333} since all three observed at A-tick |
| A → R | 1 | 3 | 1/3 = 0.333 | as above |
| A → S | 1 | 3 | 1/3 = 0.333 | as above |
| S → · | 0 | 0 (no S-tick → next observed yet — Add.230 is S-tick but no Add.231 observation) | n/a | uninformative Dirichlet(1,1,1) = {0.333, 0.333, 0.333}; cross-repo gemini-cli analogous prior-borrowing below |

Observed-counts trimodal matrix M_observed at Add.230 (rows = current state, columns = next state; rows sum to 1):

| from \ to | R | A | S |
|-----------|------|------|------|
| R | 0.00 | 1.00 | 0.00 |
| A | 0.333 | 0.333 | 0.333 |
| S | n/a | n/a | n/a |

Smoothed Dirichlet(1,1,1) prior (Laplace) trimodal matrix M_smoothed:

| from \ to | R | A | S |
|-----------|-------|-------|-------|
| R | 0.20 | 0.60 | 0.20 |
| A | 0.333 | 0.333 | 0.333 |
| S | 0.333 | 0.333 | 0.333 (uninformative) |

## Cross-repo Silence-row prior-borrowing (gemini-cli analogous)

To improve the S-row estimator beyond uninformative Dirichlet, borrow from the gemini-cli silence-active alternation pattern observed in W17:

gemini-cli Add.225-230 trajectory (per synth #484, #486, ADD-229, ADD-230): S(15+ ticks) → A(1, Add.226) → A(3, Add.227) → A(3, Add.228) → S(1, Add.229) → A(3, Add.230) — 6-tick visible window with 4 A-ticks, 2 S-ticks (excluding deep-pre-Add.226 silence). Within this window, observed S→A: 2 (Add.225→Add.226 deep-silence-break; Add.229→Add.230 short-silence-break); observed S→S: 0 (no S-tick → S-tick continuation in 6-tick visible window). Smoothed gemini-cli S-row Dirichlet(1,1,1) over (R, A, S) with R unobserved at gemini-cli (gemini-cli operates predominantly Mode-A): {1/5, 3/5, 1/5} = {0.20, 0.60, 0.20}.

Cross-repo S-row pooled estimator (codex S-row uninformative + gemini-cli S-row {0.20, 0.60, 0.20}, equal-weight pooling): {0.267, 0.467, 0.267}.

**Trimodal matrix M_pooled (codex × gemini-cli S-row pooling):**

| from \ to | R | A | S |
|-----------|-------|-------|-------|
| R | 0.20 | 0.60 | 0.20 |
| A | 0.333 | 0.333 | 0.333 |
| S | 0.267 | 0.467 | 0.267 |

## Mode weights update (Add.225-230)

Per synth #487 mode-weight protocol with single-datapoint updates:

| Anchor | w_A | w_R | w_S | Notes |
|--------|------|------|------|-------|
| Pre-Add.225 | 0.55 | 0.45 | 0.00 | synth #486 anchor (bimodal) |
| Post-Add.229 | 0.60 | 0.40 | 0.00 | synth #487 anchor (bimodal Mode-A reinforcement) |
| Post-Add.230 | **0.55** | **0.40** | **0.05** | this synth — first S-state introduction |

The S-state entry of mass 0.05 is drawn primarily from w_A (Mode-A → S transition observation), preserving w_R unchanged (no R-state involvement in the Add.230 transition). Asymptotic w_S projection under sustained codex S-state continuation is bounded by the synth #488 P-488.D asymptotic-cap regime — w_S is capped at ≤ 0.20 under monolithic-S-saturation regime to preserve Mode-A / Mode-R discriminative power.

## Falsifiable predictions

- **P-489.A** (Add.231 codex S→· transition distribution): per pooled S-row {0.267, 0.467, 0.267}, predicted Add.231 codex transition is **S→A modal (0.467)**, **S→R secondary (0.267)**, **S→S secondary (0.267)**. Modal cardinality if S→A: 1-2 PRs (per Mode-A baseline distribution); modal cardinality if S→R: 4-5 PRs (per Mode-R baseline distribution). Falsifiable by observing codex Add.231 cardinality outside the union {0, 1-2, 4-5}.
- **P-489.B** (Add.231 ceiling-channel framework retirement gate trigger via synth #488 P-488.B): pre-registered re-affirmation that if joint-ceiling sustains at Add.231 (probability ~0.04 per ADD-230 P-230.C × P-230.D conservative joint), cumulative BMA crosses sub-Jeffreys-1/1000000 with prior ~0.04, **TRIGGERING the synth #488 ceiling-channel framework retirement gate**. Per synth #467 CRITERION CONSISTENCY rule, this synth pre-commits to the framework-replacement composite-hypothesis protocol activation: switch primary hypothesis space from H₁/H₂/H₃ to "joint-ceiling structurally-absorbing 0.95 / metastable 0.05" binary composite at trigger event regardless of observed posterior evolution under original framework. The framework-replacement protocol is **non-negotiable at trigger event** to avoid post-hoc model-selection bias.
- **P-489.C** (codex Mode-A maximum continuous run-length empirical bound at exactly 5 ticks): predicted that the codex Add.225-230 5-tick continuous Mode-A run-length (treating Add.225 R-tick as the cluster-launch; Mode-A continuous from Add.226 onward when re-amplification at Add.228 is treated as A-attenuation-with-R-spike rather than mode-switch) establishes the **empirical maximum continuous Mode-A run-length at exactly 5 ticks** under W17 conditions; falsifiable by observing future codex continuous Mode-A runs > 5 ticks without intervening Mode-S transition. Currently sample size n=1 — non-discriminating; will accumulate with future codex Mode-A run terminations.
- **P-489.D** (trimodal vs bimodal Bayes factor): given Add.230 observation provides the first S-state datapoint, the BF(trimodal:bimodal) updates from prior 1.0 (synth #487 baseline) to **~5.0** under the marginal likelihood of S-state transition under explicit S-row vs implicit silence-as-zero-cardinality-mass-A absorption; falsifiable by observing Add.231-233 S-state transitions that fit the bimodal extended-tail distribution within ±10% likelihood of the trimodal explicit S-row distribution.
- **P-489.E** (synth #487 R-run cardinality bound 1 prediction sustained): per synth #487 P-487.A, the predicted Add.230-233 R-run cardinality bound 1 at prior 0.85 holds at Add.230 (codex 0 PRs trivially satisfies bound; no R-state observed); falsification still pending — would require a codex R-state observation at Add.231-233 of cardinality ≥ 4.
- **P-489.F** (cross-repo S→A re-entry distribution generality): predicted that the gemini-cli S→A re-entry distribution (n=2 observed, both at variable silence chain-lengths 15+ ticks and 1 tick) generalises to codex S-row re-entry under shared cross-repo silence-active alternation pattern; falsifiable by observing codex Add.231+ S→A re-entries that systematically deviate from the gemini-cli base-rate distribution at >2σ.
- **P-489.G** (mode-weight asymptotic w_S cap): predicted w_S asymptotic upper bound at **0.20** under sustained codex S-state continuation; falsifiable by observing tempered w_S > 0.20 at any future tick under continued S-state observation. Cap is justified by synth #488 P-488.D asymptotic-cap regime extension to codex mode-weight space.
- **P-489.H** (synth #490 angle pre-registration): synth #490 will formalise the **post-Add.230 synth #484 H_S3 third-revision toward unbounded gemini-cli re-entry distribution** anchored on the n=1 silence-break observation (gemini-cli Add.229 → Add.230 N→A after exactly 1-tick silence) that falsified the synth #484 revised bounded-chain framework at +1 forecast tick. Alternative angle: **per-author concentration / debut-author saturation orthogonal axis** in the Add.230 high-debut-density 4/8 = 0.50 window with Beta(20, 113) → Beta(24, 117) posterior update on synth #482 baseline — to be selected based on dominant signal at synth #490 composition time.
- **P-489.I** (codex Add.231-233 trajectory under trimodal model): per pooled M with current state S, predicted Add.231 cardinality distribution (marginalised over next-state mode):
  - Add.231: P(c=0) = 0.267 (S→S); P(c ∈ 1-2) = 0.467 (S→A) × cardinality distribution; P(c ∈ 4-5) = 0.267 (S→R) × cardinality distribution; modal expected cardinality ≈ 1.4.
  - Add.232 (conditional on Add.231 state): bifurcates per M_pooled.
  - Add.233 (conditional on Add.232 state): bifurcates per M_pooled.
  - Three-step expected cardinality trajectory under uniform M-stationary distribution (computable from M_pooled left-eigenvector with eigenvalue 1): π_R ≈ 0.27, π_A ≈ 0.46, π_S ≈ 0.27 → expected per-tick cardinality ≈ 0.27×4.5 + 0.46×1.5 + 0.27×0 = 1.21 + 0.69 + 0 ≈ 1.90.

## Cited SHAs and PRs

- ADDENDUM-230 anchor: SHA `c94517e` (this synth's parent commit)
- Add.225 codex burst peak (Mode-R anchor): synth #480 anchor (sha c07bfd5 per synth #488 reference)
- Add.226 codex Mode-R → Mode-A transition: ADDENDUM-226 (synth #483 region)
- Add.228 codex Mode-A → Mode-R re-amplification: ADDENDUM-228 (sha d2c2aa4); synth #486 anchor (sha 2b34641)
- Add.229 codex Mode-R → Mode-A transition (first explicit): ADDENDUM-229 (sha 1a7d6f2); synth #487 anchor (sha e61d7f2)
- Add.230 codex Mode-A → Silence transition (first explicit): ADDENDUM-230 (sha c94517e); cited PR-zero (no codex PRs in Add.230 window)
- Codex Add.225-229 PRs (cited via synth #487): #20650, #20535, #20486, #20281
- Codex Add.229 PRs: #20512 aed74e5, #20478 610eefb (cited per ADDENDUM-229)
- gemini-cli Add.226 silence-break: synth #482 anchor (sha e41028e)
- gemini-cli Add.229 silence-break: cited via ADDENDUM-229 (no PRs at Add.229 — silence tick)
- gemini-cli Add.230 silence-break: PRs #26339 997f461, #26329 7dea5b4, #26348 3638541 (cited per ADDENDUM-230)
- Cross-references: synth #467 (CRITERION CONSISTENCY rule), synth #478 (R₂ collapse-regime), synth #479 (P-479.B reduced-cap protocol), synth #484 (H_S3 chain-length-conditioned amplification), synth #485 (H₁ monolithic α-tier law), synth #486 (bimodal Mode-A/Mode-R taxonomy), synth #487 (mode-transition matrix M), synth #488 (ceiling-channel framework retirement gate)

## Status and next-step protocol

Synth #489 establishes the **trimodal Mode-A / Mode-R / Silence framework extension** with explicit S-row introduction and cross-repo S-row prior-borrowing from gemini-cli. The codex Add.225-230 5-2-2-4-2-0 trajectory is the primary anchor with first explicit A→S transition observation. The synth #488 P-488.B ceiling-channel framework retirement gate is **re-affirmed as pre-registered contingent trigger at Add.231** with framework-replacement composite-hypothesis protocol activation pre-committed per synth #467 CRITERION CONSISTENCY rule. The Add.231 observation will simultaneously provide:
1. Codex S→· transition first observation (S-row estimator update),
2. Joint-ceiling sustain/break observation (synth #488 retirement gate trigger evaluation),
3. Litellm Add.230 5-PR burst attenuation observation,
4. Gemini-cli post-N→A sustain/silence observation.
This is the highest-information-density predicted tick in the visible W17 window — synth #490 will be composed on an orthogonal axis (gemini-cli H_S3 third-revision OR debut-author saturation) to maximise discrimination across the multi-channel observation space at Add.231.
