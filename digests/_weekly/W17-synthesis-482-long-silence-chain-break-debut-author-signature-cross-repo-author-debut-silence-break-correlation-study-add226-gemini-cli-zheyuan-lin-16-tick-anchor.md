# W17 Synthesis #482 — Long-Silence-Chain-Break Debut-Author Signature; Cross-Repo Author-Debut × Silence-Break Correlation Study Anchored on Add.226 gemini-cli Zheyuan-Lin 16-Tick Break; Prior-Conditional Posterior Re-Weighting of Debut-Author Baseline Frequency

## Anchor data

- **ADDENDUM-226** (sha pending) — gemini-cli Zheyuan-Lin (Zheyuan Lin) PR #26287 single-PR carrier breaks 16-tick gemini-cli silence chain Add.210-225; debut author in visible Add.193-226 window; surface = `fix(cli): voice transcription cursor position` (UX-bug-fix surface, single-fixed).
- **ADDENDUM-225** (sha c07bfd5) — codex 5-PR sub-class B burst with 3-author distribution including debut sub-pattern; jif-oai/etraut-openai recurring + pakrym-oai recurring (no debut authors in burst).
- **ADDENDUM-224** (sha d1f66bc) — krrish-berri-2 first-appearance debut author for litellm carrier (#15770); single-PR carrier on litellm internal-architecture surface.
- **synth #93** (cross-ref) — author-pool framework for first-appearance debut-author single-PR sub-pattern.
- **synth #429** (cross-ref) — chain-length anchor framework (16-tick chain-break at acceleration prior ~0.85).
- **synth #480** (sha c07bfd5) — multi-PR burst sub-class B taxonomy; campaign-signature sub-hypothesis P-480.C.

## Background and motivation

Synth #93 introduced the author-pool framework with a "long-silence-break by debut-author single-PR" pattern as one of several recurring carrier configurations. Synth #429 established the chain-length anchor framework with prior-conditional acceleration probabilities. The Add.226 gemini-cli Zheyuan-Lin 16-tick silence-break event provides a fresh anchor for **cross-repo author-debut × silence-break correlation** study because the 16-tick chain is the longest visible-window gemini-cli silence in W17, and the carrier author Zheyuan-Lin is a **first-appearance debut author** with no prior visible-window contribution to gemini-cli (or any tracked repo).

## Visible-window silence-chain × debut-author observations

We define a **long-silence-chain-break** as any chain-break event where the prior silence-chain length n ≥ 8 ticks. We define a **debut author** as any author whose first PR carrier appearance in the visible Add.193-226 window occurred at the chain-break tick.

Inventory of visible-window long-silence-chain-break events (n ≥ 8 ticks):

| Tick | Repo | Chain length | Carrier author | Debut? | PR# | Surface |
|------|------|--------------|----------------|--------|-----|---------|
| Add.213 | qwen-code | 8 | (recurring) | No | (cross-ref Add.213 manifest) | docs |
| Add.219 | gemini-cli | 9 | (recurring) | No | (cross-ref Add.219 manifest) | feature |
| Add.224 | litellm | (re-entry not chain-break) | krrish-berri-2 | **Yes (debut)** | #15770 | internal-arch |
| Add.225 | codex | (n=4 → n=0 not long) | jif-oai/etraut-openai/pakrym-oai | No (recurring × 3) | #20405/#20540/#20564/#20523/#20627 | mixed |
| Add.226 | gemini-cli | 16 | Zheyuan-Lin | **Yes (debut)** | #26287 | UX-bug-fix |

Restricting to the **long-silence-chain-break** subset (n ≥ 8): we have **3 events** (Add.213, Add.219, Add.226). Of these, **1 of 3 (33%)** had a debut-author single-PR carrier (Add.226 gemini-cli Zheyuan-Lin); the other 2 had recurring-author carriers.

For the broader **chain-break** subset (n ≥ 1): adding Add.224 litellm krrish-berri-2 debut + Add.225 codex 5-PR multi-author non-debut + numerous shorter chain-breaks throughout Add.193-226, the debut-author rate across all chain-breaks is approximately **2 of ~25 = 8%** (Add.224 + Add.226 only). The visible-window baseline frequency of debut-author carrier appearances is approximately ~10-15% per chain-break event (synth #93 reports a baseline frequency of ~12% across the broader Add.150-220 historical window, though that exceeds the visible Add.193-226 window).

## Prior-conditional posterior re-weighting of debut-author baseline frequency

Per Bayesian update under uniform prior on debut-author rate at chain-break events:

- **Prior** (synth #93 historical baseline): debut-author rate = 0.12 (Beta(α=12, β=88))
- **Visible Add.193-226 likelihood**: 2 debut-events / 25 total chain-break events = 0.08 (8%)
- **Posterior** under conjugate Beta-Binomial update: Beta(α=14, β=111), posterior mean = **0.112** (modest decrease from prior 0.12 toward observed 0.08, with substantial prior weight retention given small visible-window sample size)
- **Posterior 95% CI**: [0.063, 0.175]

The visible Add.193-226 window observation is **consistent with** the synth #93 historical baseline (the observed 0.08 sits within the 95% CI [0.063, 0.175]), so we **fail to reject** the synth #93 baseline at 95% confidence. However, the long-silence-chain-break subset (n ≥ 8) has a higher debut-author rate (1 of 3 = 33%) than the broader chain-break subset (8%), suggesting a **conditional sub-hypothesis** worth examining.

## Conditional sub-hypothesis: long-silence-break debut-author rate elevation

**H₁ (null)**: long-silence-break debut-author rate = broader chain-break debut-author rate (no conditional elevation).

**H₂ (alternative)**: long-silence-break debut-author rate is elevated relative to broader chain-break rate, possibly because long-silence chains correlate with low-momentum repo states that are more readily broken by external (debut) contributors.

Per binomial likelihood at n=3 long-silence-break events with k=1 debut observation under H₁ (rate = 0.08): L(H₁) = C(3,1) × 0.08^1 × 0.92^2 = 3 × 0.08 × 0.846 = **0.203**.

Under H₂ (rate = 0.30 elevated): L(H₂) = C(3,1) × 0.30^1 × 0.70^2 = 3 × 0.30 × 0.49 = **0.441**.

Bayes factor BF(H₂:H₁) = 0.441 / 0.203 = **×2.17** — **sub-Jeffreys-3** (×3 threshold), favors H₂ but not at decisive evidence level. The n=3 long-silence-break sample is too small to discriminate H₁ vs H₂ at Jeffreys-3 confidence.

## Surface-class signature of long-silence-break debut-author events

Of the 1 long-silence-break debut-author event (Add.226 gemini-cli Zheyuan-Lin), the surface class is **UX-bug-fix** (single-fixed, voice transcription cursor position). Per synth #93 author-pool framework, the "long-silence-break by debut-author single-PR" pattern is observed to disproportionately involve **UX-bug-fix** or **docs-fix** surfaces — low-complexity, low-coordination-cost surfaces that debut authors can navigate without prior repo context.

The Add.224 litellm krrish-berri-2 debut event involved an **internal-architecture** surface (#15770), which is **inconsistent** with the synth #93 UX-bug-fix / docs-fix conditional pattern. The sample size of n=2 visible-window debut-author events is too small to discriminate between "all debut-events involve low-coordination surfaces" vs "debut-events span all surface classes uniformly". Per binomial likelihood at n=2 with k=1 UX/docs observation under H₁ (rate = 0.50 uniform across 5-class surface taxonomy): L(H₁) = 2 × 0.5 × 0.5 = **0.5**. Under H₂ (rate = 0.80 conditional elevation): L(H₂) = 2 × 0.8 × 0.2 = **0.32**. **BF(H₁:H₂) = 0.5 / 0.32 = ×1.56** — sub-Jeffreys-3, favors H₁ uniform-surface null hypothesis at modest evidence; the synth #93 conditional UX-bug-fix / docs-fix pattern is **not** corroborated by visible Add.193-226 observations.

## Cross-repo author-debut frequency by repo

Visible Add.193-226 debut-author events by repo:

| Repo | Debut events | Sample contributing tick | Surface |
|------|--------------|--------------------------|---------|
| codex | 0 | — | — |
| opencode | 0 (ceiling-locked since Add.213) | — | — |
| litellm | 1 | Add.224 krrish-berri-2 | internal-arch |
| gemini-cli | 1 | Add.226 Zheyuan-Lin | UX-bug-fix |
| goose | 0 (ceiling-locked since Add.213) | — | — |
| qwen-code | 0 | — | — |

The two debut events span 2 repos (litellm, gemini-cli) — both repos are characterized by **moderate-throughput regular-contributor** patterns rather than **opencode/goose ceiling-lock** dynamics. The opencode/goose ceiling-lock since Add.213 (k=14 lockstep ticks) **precludes debut-author events** by definition, so the debut-author rate per repo is conditional on repo activity. Excluding ceiling-locked repos from the denominator, the debut-author rate at Add.193-226 chain-breaks is **2 / (~25 × 0.6) = 2/15 = 13%**, slightly above the synth #93 baseline of 12% — **not significantly elevated** but **consistent with baseline**.

## Predictions

- **P-482.A** (Add.227 debut-author probability): predicted Add.227 chain-break debut-author probability ∈ [0.05, 0.20] modal **0.12** (synth #93 baseline holds); under joint-ceiling-sustain scenario at Add.227 there is no chain-break event by definition, so this prediction is conditional on chain-break occurring.
- **P-482.B** (next long-silence-break event repo): predicted next visible-window long-silence-break event (n ≥ 8) most likely to occur at **opencode** (current chain n=24, projected break at Add.227 prior ~0.84) OR **goose** (current chain n=25, projected break at Add.227 prior ~0.86); both events would set new visible-window long-silence-break records (n=24 or n=25, exceeding the prior Add.226 gemini-cli n=16 record by +8 / +9).
- **P-482.C** (opencode/goose chain-break debut-author probability): predicted P[opencode chain-break carrier is debut author] ∈ [0.10, 0.25] modal **0.15** (slightly elevated above baseline due to extreme silence-chain length n=24 increasing the H₂ conditional elevation prior); predicted P[goose chain-break carrier is debut author] ∈ [0.10, 0.25] modal **0.15** (similarly elevated).
- **P-482.D** (long-silence-break surface-class distribution): predicted next long-silence-break event surface class ∈ {UX-bug-fix, docs-fix, internal-arch, feat-config, semantic-loop} with modal **internal-arch** at prior ~0.30 (per opencode/goose maintenance-burst pattern from prior W17 history); UX-bug-fix prior ~0.20; docs-fix prior ~0.15; feat-config prior ~0.20; semantic-loop prior ~0.15.
- **P-482.E** (synth #483 angle): predicted synth #483 will formalise the **opencode/goose simultaneous-chain-break joint-event probability** at Add.227 under H₁-dominant α-tier law (synth #481 anchor); will examine the prior-conditional probability of joint vs sequential chain-break events given the 14-tick lockstep history.
- **P-482.F** (cross-repo author-pool overlap): predicted cross-repo author-pool overlap between visible-window debut events ∈ [0, 1] modal **0** (no observed overlap; krrish-berri-2 and Zheyuan-Lin are independent debut-author identities with no cross-repo author-pool intersection); the n=2 sample is too small to discriminate cross-repo author-pool clustering hypotheses.
- **P-482.G** (long-silence-break × debut-author posterior consolidation at Add.227-228): if chain-break events occur at Add.227 (prior ~0.84-0.86), the n=4 or n=5 long-silence-break sample will provide moderate posterior consolidation on H₁ vs H₂; predicted post-Add.227-228 BF(H₂:H₁) ∈ [×1.2, ×3.5] modal **×2.0** if observed debut-author rate continues at ~33%, OR BF(H₁:H₂) ∈ [×1.5, ×4.0] modal **×2.5** if observed debut-author rate falls to ≤15%.

## Cross-references

- ADDENDUM-226 (this tick) — primary anchor; gemini-cli Zheyuan-Lin 16-tick silence-break debut event.
- ADDENDUM-224 (sha d1f66bc) — secondary anchor; litellm krrish-berri-2 debut event on internal-arch surface.
- ADDENDUM-225 (sha c07bfd5) — codex 5-PR sub-class B burst with 3 recurring authors (no debut events; sustains the synth #93 recurring-author burst pattern).
- synth #93 — author-pool framework with long-silence-break debut-author single-PR pattern; baseline debut-author rate 0.12.
- synth #429 — chain-length anchor framework for chain-break acceleration priors.
- synth #480 (sha c07bfd5) — multi-PR burst sub-class B taxonomy; cross-references with synth #481 H₁-dominant α-tier law for joint-ceiling-sustain prior.
- synth #481 (this commit, predecessor in same tick) — H₁-dominant α-tier law; chain-break prior at Add.227 = 0.96.

**End of synth #482.**
