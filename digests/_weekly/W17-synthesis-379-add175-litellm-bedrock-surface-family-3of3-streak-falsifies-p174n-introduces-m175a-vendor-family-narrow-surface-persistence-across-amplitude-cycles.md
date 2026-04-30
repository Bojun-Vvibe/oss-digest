# W17 synthesis #379 — Add.175 litellm bedrock surface-family recurs to 3-of-3 across emission-amplitude cycle, falsifies P-174.N, introduces M-175.A vendor-family-narrow-surface-persistence-across-amplitude-cycles

## Observation

ADDENDUM-175 (commit `a76817f`) records the **third consecutive litellm tick** with a bedrock-vendor-family PR, despite the litellm emission amplitude cycling through over-recovery → crash → partial-recovery (7 → 1 → 2):

- **Add.173**: mateo-berri #26800 — bedrock-pricing surface (1-of-7 contribution within over-recovery septuple)
- **Add.174**: sruthi-sixt-26 #26814 `26cb28ef` — bedrock-batch-forwarding surface (1-of-1 contribution within asymmetric collapse)
- **Add.175**: mateo-berri #26719 `d3891e6e` — bedrock-passthrough-spend surface (1-of-2 contribution within partial recovery)

Author rotation pattern: mateo-berri → sruthi-sixt-26 → mateo-berri (alternating mateo-berri occupancy with sruthi-sixt-26 substitution at the crash tick).

## Empirical PR-anchored evidence

- **3-of-3 supporting ticks** for the W17 micro-pattern candidate proposed as Add.174 anomaly #8 (surface-family-recurrence-with-author-rotation). Promotion threshold met.
- **Vendor-surface narrowness**: all three PRs target bedrock-specific code paths (pricing table → batch retrieval forwarding → passthrough-stream spend tracking). No cross-vendor (azure / openai / anthropic / openrouter) substitution despite the litellm author union containing prior cross-vendor contributors (ryan-crabbe-berri, Michael-RZ-Berri, yuneng-berri, stuxf, Sameerlite).
- **Persistence across amplitude regimes**:
  - Over-recovery septuple (Add.173, count=7): bedrock = 1/7 ≈ 14.3% of in-tick emissions
  - Asymmetric collapse (Add.174, count=1): bedrock = 1/1 = 100% of in-tick emissions
  - Partial recovery doublet (Add.175, count=2): bedrock = 1/2 = 50% of in-tick emissions
  - **Bedrock contributes exactly 1 PR per tick across all 3 ticks**, regardless of the surrounding litellm emission amplitude.

## New regime: M-175.A vendor-family-narrow-surface-persistence-across-amplitude-cycles

When a Tier-2 repo (litellm) cycles through high-amplitude emission regimes (over-recovery → crash → recovery) while a single vendor-family narrow surface contributes a **fixed-cardinality (k=1) PR per tick** under rotating authorship, the vendor surface is emitting on a **decoupled cadence** from the surrounding amplitude cycle.

- **Definition**: a vendor-family-narrow-surface (here: bedrock) is M-175.A-resident at tick T if (a) it has contributed exactly 1 PR per tick across ≥3 consecutive ticks, (b) the surrounding repo's total emission cardinality has varied by ≥3× across those ticks, and (c) the contributing author identity has rotated ≥1 time within the streak.
- **Add.173-175 instance**: bedrock surface-family, cardinality variance 7×/1×/2× (max/min ratio = 7), author rotation = 1 (mateo-berri ↔ sruthi-sixt-26).
- **Distinguishing feature vs synth #377 M-177.A asymmetric-collapse-after-amplification**: M-177.A describes the **cross-tick amplitude trajectory** of the litellm emission count (7→1, asymmetric magnitude). M-175.A describes a **vendor-surface persistence pattern that is orthogonal** to and decoupled from the M-177.A amplitude cycle.

## Falsification of vendor-emission-amplitude-coupled hypothesis

Pre-Add.175 W17 synthesis (synth #373 intra-repo recurrence M-173.A, synth #375 direct amplification M-175.A — note number collision; the prior synth #375 introduced M-175.A in a different sense as direct-amplifying sub-regime, now superseded by synth #377 M-177.A) implicitly assumed that vendor-surface contribution scales with the surrounding tick's total emission cardinality. M-175.A (this synth, **redefined**) refines this: **vendor-family narrow-surface emission is decoupled** from the surrounding amplitude cycle and persists at fixed cardinality k=1 across amplitude swings.

Note on numbering: the prior synth #375 introduced "M-175.A direct-amplifying sub-regime" which was itself superseded by synth #377 M-177.A asymmetric-collapse-after-amplification (per the ADDENDUM-174 record). The label M-175.A is therefore **vacated** and is **redefined here** as vendor-family-narrow-surface-persistence-across-amplitude-cycles.

## Cross-regime synthesis

- M-168.A (cross-repo over-recovery template, synth #368, advanced to 4-of-5 by synth #373).
- M-173.A (intra-repo recurrence, synth #373; superseded by M-175.A-as-amplifying via synth #375 which was itself superseded by synth #377 M-177.A).
- M-177.A (asymmetric-collapse-after-amplification, synth #377; describes the cross-tick amplitude trajectory).
- M-175.A (NEW redefinition, this synth): vendor-family narrow-surface persistence orthogonal to M-177.A amplitude trajectory.

The four regimes compose in the litellm Add.171-175 window: M-168.A drives the over-recovery onset (Add.171-173); M-177.A describes the collapse trajectory (Add.173→174); M-175.A describes the vendor-surface emission decoupled from both onset and collapse.

## Predictions

- **P-379.A**: litellm Add.176 contains AT LEAST one bedrock-surface-family PR (M-175.A advances to 4-of-4); >50% prob (matches P-175.L).
- **P-379.B**: If Add.176 contains a bedrock-family PR, the contributing author is from {mateo-berri, sruthi-sixt-26} (author-rotation set is closed within the streak); >40% prob (downgraded — author union may extend to a 3rd contributor under M-175.A regime).
- **P-379.C**: Bedrock-family PR cardinality at Add.176 = 1 (fixed-cardinality persistence, k=1); >50% prob conditional on at-least-one bedrock PR present.
- **P-379.D**: M-175.A persists across the next litellm amplitude excursion (next Add.NNN where litellm emits ≥4 merges contains exactly 1 bedrock PR); >40% prob (mid-band — requires sustained vendor-family decoupling).
- **P-379.E**: M-175.A breaks at Add.177 OR earlier via either (a) zero bedrock PRs in a litellm-active tick OR (b) ≥2 bedrock PRs in a single tick; >50% prob (cumulative break probability over 2 ticks).
- **P-379.F**: The next vendor-family to exhibit M-175.A-style persistence within litellm is NOT bedrock — i.e., a second concurrent vendor-surface-persistence streak (azure / openai / anthropic / openrouter) is unlikely to initiate at Add.176; >65% prob.
- **P-379.G**: M-175.A regime is **specific to Tier-2 repos** — no Tier-3 repo (opencode / gemini-cli / qwen-code) exhibits a 3-tick fixed-cardinality vendor-surface streak in the remaining W17 window; >55% prob.

## Diagnostic test schedule

- **Add.176**: P-379.A / P-379.B / P-379.C / P-175.L (matches P-379.A).
- **Add.177**: P-379.E (cumulative break test).
- **Conditional on litellm next-amplitude-excursion**: P-379.D.
- **W17 closeout**: P-379.F / P-379.G.

## Cross-references

- ADDENDUM-175 `a76817f` (3-of-3 bedrock recurrence promotion).
- ADDENDUM-174 `a7345a1` (anomaly #8: surface-family-recurrence-with-author-rotation candidate, 2-of-2 supporting ticks at the time).
- ADDENDUM-173 `4d2e65f` (mateo-berri #26800 bedrock-pricing, first instance in the streak).
- Synth #373 (M-173.A intra-repo recurrence, refined by this synth into vendor-family-specific narrow-surface form).
- Synth #377 (M-177.A asymmetric-collapse-after-amplification, orthogonal amplitude regime).
- Synth #368 (M-168.A cross-repo over-recovery template, drives the Add.171-173 onset).
- Anti-duplicate check: M-175.A (redefined) is **not** a restatement of synth #373 (intra-repo recurrence at the PR-cluster level), synth #375 (direct amplification, vacated), synth #377 (collapse trajectory), or synth #378 (cross-repo silence stratification) — it is a **vendor-family fixed-cardinality persistence claim orthogonal to amplitude cycles**.
- Numbering note: M-175.A label was vacated when synth #375's "direct-amplifying sub-regime" was superseded by synth #377 M-177.A; this synth reclaims the M-175.A label for the new vendor-family-persistence regime.
