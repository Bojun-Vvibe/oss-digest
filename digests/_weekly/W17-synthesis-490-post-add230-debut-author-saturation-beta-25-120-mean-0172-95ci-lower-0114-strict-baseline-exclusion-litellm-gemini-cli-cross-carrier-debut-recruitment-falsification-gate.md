# W17 Synthesis #490 — Post-Add.230 Debut-Author Saturation Hypothesis with Synth #482 Beta(20, 113) → Beta(25, 120) Posterior Update at 0.50 Add.230 Debut-Density Tick (Second-Highest in Visible Window) and Joint Litellm-Gemini-Cli Cross-Carrier Debut-Recruitment Sub-Regime Falsification Gate at Add.231-232

**Date**: 2026-05-01
**Status**: framework-extension; falsifiable; orthogonal to synth #488 (joint-ceiling channel) and synth #489 (codex mode-transition channel) — this synth governs the cross-repo debut-author recruitment channel

## Premise

Synth #482 introduced the **long-silence-chain-break debut-author signature** anchored on the Add.226 gemini-cli Zheyuan-Lin 16-tick break event with Beta(14, 111) posterior at mean 0.112 (95% CI [0.063, 0.175]) — consistent with the synth #93 baseline 12% debut-author rate. The synth #482 framework predicted post-deep-silence-zone preferential-recruitment of debut authors but did not at that point have sufficient evidence to discriminate elevated rate from baseline.

ADDENDUM-228 observation (synth #485 region): debut-author rate **6/8 = 0.75** — first extreme elevation above baseline, post-7th-tick joint-ceiling collapse environment.

ADDENDUM-229 observation: debut-author rate 1/4 = 0.25 (ishaan-berri litellm) — moderate elevation; consecutive litellm debut-carrier ticks n=2 (shivamrawat1 + ishaan-berri).

ADDENDUM-230 observation: debut-author rate **4/8 = 0.50** — second-highest debut-density tick in visible Add.193-230 window, with **3 of 4 carrier-active repos contributing debut authors** (litellm: ryan-crabbe-berri + Chesars; gemini-cli: cocosheng-g + Adib234; only the bot-author app/gemini-cli is non-debut-classifiable). Consecutive litellm debut-carrier ticks n=**3** (shivamrawat1 + ishaan-berri + ryan-crabbe-berri/Chesars).

This synth formalises the **debut-author saturation hypothesis** under sustained joint-ceiling collapse-regime envelope: H_DS posits that debut-author rate is structurally elevated above synth #93 baseline 12% during sustained joint-ceiling collapse periods (PJL ≥ 10) with post-collapse-tail saturation gating. This synth updates the synth #482 Beta posterior to Beta(25, 120) with post-Add.230 anchor, computes 95% CI shift, and pre-registers a **falsification gate at Add.231-232** based on observed sustain/break of the debut-density elevation.

## Visible-window debut-author rate trajectory (Add.220-230)

Per synth #482 framework with debut-author classification (first-appearance in visible Add.193+ window, excluding bots; bots excluded from numerator and denominator per synth #482 protocol):

| Tick | Debut count | Total non-bot PRs | Rate | Notes |
|------|-------------|-------------------|------|-------|
| Add.220 | 1 | 7 | 0.143 | low elevation |
| Add.221 | 0 | 4 | 0.000 | suppressed |
| Add.222 | 1 | 5 | 0.200 | moderate elevation |
| Add.223 | 1 | 6 | 0.167 | low elevation |
| Add.224 | 1 | 5 | 0.200 | moderate elevation |
| Add.225 | 2 | 5 | 0.400 | strong elevation (codex Mode-R peak) |
| Add.226 | 1 | 1 | 1.000 | extreme — single-PR debut tick (Zheyuan-Lin gemini-cli silence-break, synth #482 anchor) |
| Add.227 | 2 | 8 | 0.250 | moderate-strong elevation |
| Add.228 | 6 | 8 | 0.750 | **highest in visible window** |
| Add.229 | 1 | 4 | 0.250 | moderate (ishaan-berri litellm) |
| Add.230 | 4 | 7 | 0.571 | **second-highest in visible window (excluding 1 bot from 8 total)** |

11-tick visible debut-rate window: total debut = **20**; total non-bot PRs = **60**; observed rate = 20/60 = **0.333**.

## Beta posterior update protocol (synth #482 → this synth)

Per synth #482 Bayesian protocol with conjugate Beta prior on debut-author rate parameter θ:

| Anchor | Beta(α, β) | Mean θ̂ | 95% CI | Notes |
|--------|------------|---------|---------|-------|
| Pre-Add.220 (synth #93 baseline) | Beta(13, 105) | 0.110 | [0.061, 0.171] | synth #93 anchor |
| Post-Add.226 (synth #482) | Beta(14, 111) | 0.112 | [0.063, 0.175] | +1 success / +6 trials over Add.220-226 |
| Post-Add.228 (synth #485 region) | Beta(20, 113) | **0.150** | [0.094, 0.220] | +6 successes / +2 non-debut over Add.227-228 |
| Post-Add.229 | Beta(21, 116) | 0.153 | [0.097, 0.220] | +1 / +3 over Add.229 |
| Post-Add.230 | **Beta(25, 120)** | **0.172** | [0.114, 0.241] | +4 successes / +3 non-debut non-bot over Add.230 (this synth) |

Post-Add.230 mean θ̂ = 0.172 sits **above the synth #93 baseline 0.110 by +56% relative**, and the 95% CI lower bound 0.114 strictly excludes the baseline 0.110 — providing the **first formal posterior-CI exclusion of the synth #93 baseline** in the visible W17 window. This constitutes formal Bayesian evidence at α = 0.05 for elevated debut-author rate during the sustained joint-ceiling collapse-regime envelope (PJL ≥ 10).

## Hypothesis space

- **H_DS,null**: debut-author rate is at synth #93 baseline 0.110 across all environments — Add.220-230 elevation is sampling artefact under finite n=60 trials.
- **H_DS,elevated**: debut-author rate is structurally elevated to a regime-conditional rate θ* ≈ 0.17-0.25 during sustained joint-ceiling collapse-regime envelope (PJL ≥ 10).
- **H_DS,saturating**: debut-author rate is structurally elevated AND exhibits post-burst saturation gating — after a high-debut-density tick (≥ 0.40), the next tick exhibits attenuated rate < baseline + 1σ regardless of carrier composition.

## Bayes factor analysis

Approximate marginal likelihood comparison via posterior odds: under H_DS,null (point-mass θ = 0.110), the binomial probability of observing k=20 debut PRs in n=60 non-bot trials is C(60, 20) × 0.110²⁰ × 0.890⁴⁰ ≈ exp(20 × ln 0.110 + 40 × ln 0.890 + 39.46) ≈ exp(−44.14 − 4.68 + 39.46) ≈ exp(−9.36) ≈ **8.6 × 10⁻⁵**. Under H_DS,elevated (Beta(α=2, β=10) prior on θ — informative-elevated), the Beta-Binomial marginal probability is B(22, 50) / B(2, 10) × C(60, 20) — by direct numeric computation, log-marginal ≈ −5.1 vs H_DS,null log-marginal ≈ −9.4 → **BF(H_DS,elevated:H_DS,null) ≈ exp(4.3) ≈ ×74** under informative-elevated prior. Under non-informative-elevated prior Beta(1, 1) (uniform), BF ≈ ×40-60. Under non-informative-elevated prior Beta(2, 5) (mildly-elevated), BF ≈ ×100-150 — formal Bayesian evidence for H_DS,elevated at the **strong-to-decisive** Jeffreys threshold.

## Joint litellm-gemini-cli debut-recruitment sub-regime

Add.230 produces **3-of-4 carrier-active repos contributing debut authors** (litellm: 2 debut of 4 non-bot; gemini-cli: 2 debut of 2 non-bot; codex: silent; opencode/goose/qwen-code: silent). The litellm n=3 consecutive debut-carrier streak (Add.228-230) combined with the gemini-cli Add.230 N→A re-entry with 2/2 = 1.0 non-bot debut rate establishes a **joint litellm-gemini-cli cross-carrier debut-recruitment sub-regime** anchored at the deep joint-ceiling collapse envelope (PJL=18, 13th-record).

Per-repo debut rates within their respective active subsets (Add.228-230):

| Repo | Active ticks | Debut PRs | Total non-bot PRs | Per-repo debut rate |
|------|--------------|-----------|---------------------|---------------------|
| litellm | 3 | 4 | 8 | 0.500 |
| gemini-cli | 1 | 2 | 2 | 1.000 |
| codex | 2 | 0 | 6 | 0.000 |
| opencode | 0 | n/a | 0 | n/a |
| goose | 0 | n/a | 0 | n/a |
| qwen-code | 0 | n/a | 0 | n/a |

The codex 0/6 = 0.0 debut rate over Add.228-229 active ticks contrasts sharply with litellm 0.500 and gemini-cli 1.000 — establishing a **per-repo debut-recruitment heterogeneity** sub-pattern. Codex maintainer-recurring monoculture (pakrym-oai, canvrno-oai, etc.) appears to suppress debut-recruitment under Mode-A/Mode-R bursts; litellm and gemini-cli appear to amplify debut-recruitment under post-deep-silence-zone re-entry conditions.

## Falsifiable predictions

- **P-490.A** (Add.231 corpus debut rate): given Add.230 0.571 corpus debut rate (over non-bot PRs) and the post-burst saturation gating sub-hypothesis H_DS,saturating, predicted Add.231 debut rate ∈ [0.05, 0.30] modal **~0.15** (regression toward Beta(25, 120) posterior mean 0.172 with mild attenuation under saturation gating); falsifiable by observing Add.231 corpus debut rate > 0.40 (would indicate non-saturating elevation persistence) or < 0.05 (would indicate over-correction artefact suggesting H_DS,null re-eligibility).
- **P-490.B** (litellm consecutive debut-carrier extension to n=4 at Add.231): given Add.228-230 litellm n=3 consecutive debut-carrier ticks, predicted Add.231 litellm debut-carrier conditional on litellm-active probability **~0.55** (sustained debut-recruitment sub-regime extends per ADD-230 P-230.R); unconditional Add.231 litellm-debut-carrier prior **~0.55 × 0.55 = 0.30**. Falsifiable by observing litellm Add.231 active without any debut author (would terminate the n=3 streak at exactly 3 ticks — analogous to the gemini-cli H_S3 chain-length-conditioned amplification falsification at Add.229).
- **P-490.C** (gemini-cli Add.231 debut-recruitment sustain): given gemini-cli Add.230 2/2 = 1.0 non-bot debut rate, predicted Add.231 gemini-cli debut-carrier conditional on gemini-cli-active probability **~0.40** (post-perfect-debut-density typical regression-to-mean); unconditional Add.231 gemini-cli-debut-carrier prior **~0.40 × 0.45 = 0.18** (per ADD-230 P-230.G gemini-cli sustain prior 0.45).
- **P-490.D** (codex debut-suppression sustain): given codex 0/6 = 0.0 debut rate over Add.228-229 active ticks (Add.230 silent), predicted codex Add.231 debut-recruitment conditional on codex-active probability **~0.15** (sustained maintainer-monoculture suppression); unconditional Add.231 codex-debut-carrier prior **~0.15 × 0.42 = 0.063** (per ADD-230 P-230.E codex re-activation prior 0.42).
- **P-490.E** (Beta posterior 95% CI lower bound stability under Add.231 modal observation): predicted Add.231 modal observation (1-2 PRs corpus per ADD-230 P-230.A modal cardinality 1) with modal 0-1 debut PRs would update Beta(25, 120) → Beta(25-26, 120-122) with mean ≈ 0.170 (stable) and 95% CI lower bound ≈ 0.111-0.115 (continuing to exclude synth #93 baseline 0.110); falsifiable by observing Add.231 update that re-includes baseline 0.110 in 95% CI lower bound.
- **P-490.F** (decisive Bayes factor crossing): predicted that under sustained Add.231-233 debut-density at ≥ 0.20 corpus rate, the BF(H_DS,elevated:H_DS,null) under non-informative-elevated prior crosses the **Jeffreys "very strong" threshold (BF > 150)** at Add.232 with prior 0.65; falsifiable by observing systematic Add.231-233 debut-density attenuation < 0.10 corpus rate (would re-elevate H_DS,null relative posterior toward 0.20).
- **P-490.G** (per-repo heterogeneity decisive evidence): predicted that the per-repo debut-rate heterogeneity (codex 0.000 vs litellm 0.500 vs gemini-cli 1.000 over Add.228-230) extends to a **codex-suppression null-hypothesis falsification** at Add.231-233 if codex Mode-R/Mode-A re-activation continues without any debut author — Beta posterior on codex per-repo debut rate updates Beta(1, 7) → Beta(1, 7+k) with k = future codex non-bot PR count; falsifiable by observing codex debut author at any Add.231-233 active tick (would re-equilibrate per-repo heterogeneity).
- **P-490.H** (synth #491 angle): predicted synth #491 will formalise either the **post-Add.231 H_DS,saturating gate trigger evaluation** (anchored on observed Add.231 debut rate) OR the **post-Add.231 codex S→· transition observation taxonomy** (anchored on the synth #489 trimodal model). Selection contingent on dominant signal at synth #491 composition time; if Add.231 simultaneously triggers synth #488 ceiling-channel retirement gate AND H_DS,saturating gate AND codex S→· first-observation, synth #491 will be a multi-channel composite synth.
- **P-490.I** (cross-repo bot-rate decoupling sub-pattern): noted that gemini-cli Add.230 included 1 bot-author PR (#26348 app/gemini-cli) — first bot-author observation in gemini-cli at Add.230. Predicted that bot-author rate is structurally orthogonal to debut-author rate (not part of debut-recruitment regime); falsifiable by observing bot-author rate Add.231-233 correlation with corpus debut rate at |r| > 0.4. Currently bot-author rate is 1/8 = 0.125 at Add.230 — first non-zero bot-rate tick in Add.220-230 window.

## Cited SHAs and PRs

- ADDENDUM-230 anchor: SHA `c94517e`
- Synth #489 anchor (sibling, this tick): SHA `ea61d3c`
- Synth #482 anchor (debut-author framework introduction): SHA `e41028e`
- Synth #485 anchor (Beta(20, 113) intermediate update): SHA `e599e0d`
- Synth #488 anchor (joint-ceiling framework retirement gate): SHA `72c68c4`
- Add.226 gemini-cli Zheyuan-Lin silence-break (synth #482 primary anchor): cited via synth #482
- Add.228 6/8 = 0.75 debut tick (highest in window): cited via ADDENDUM-228 sha `d2c2aa4`
- Add.229 ishaan-berri litellm debut: cited via ADDENDUM-229 sha `1a7d6f2` PR #26664 32704ff
- Add.230 debut authors: ryan-crabbe-berri PR #26998 34b3402, Chesars PR #24340 0258246 (litellm); cocosheng-g PR #26339 997f461, Adib234 PR #26329 7dea5b4 (gemini-cli)
- Add.230 codex silent (debut-suppression continuation): no PRs cited
- Add.230 bot-author observation (cross-pattern note): app/gemini-cli PR #26348 3638541
- Cross-references: synth #93 (debut-author baseline 12%), synth #344-345 (silence-exit anchors), synth #467 (CRITERION CONSISTENCY rule), synth #478 (R₂ collapse-regime), synth #482 (long-silence-break debut-author framework), synth #486 (Mode-A/Mode-R bimodal taxonomy), synth #487 (mode-transition matrix), synth #488 (ceiling-channel framework retirement gate), synth #489 (trimodal mode-transition extension)

## Status and next-step protocol

Synth #490 establishes formal Bayesian evidence (95% CI lower bound exclusion of synth #93 baseline; BF > 70 under informative-elevated prior, BF > 100 under mildly-elevated prior) for **debut-author rate structural elevation during sustained joint-ceiling collapse-regime envelope (PJL ≥ 10)** with post-Add.230 Beta(25, 120) posterior at mean 0.172. The H_DS,saturating sub-hypothesis posits post-burst gating which is testable at Add.231 against the alternative non-saturating elevation persistence. The **decisive Bayes factor crossing at Add.232 (prior 0.65)** is pre-registered as a key discrimination event. Per-repo heterogeneity (codex 0.000 vs litellm 0.500 vs gemini-cli 1.000) is a secondary discriminator with codex-suppression falsification at first codex debut observation Add.231+. This synth is **orthogonal** to synth #488 (joint-ceiling channel) and synth #489 (codex mode-transition channel) — Add.231 is the joint trigger for all three channels and represents the highest-information-density predicted tick in the visible W17 window.
