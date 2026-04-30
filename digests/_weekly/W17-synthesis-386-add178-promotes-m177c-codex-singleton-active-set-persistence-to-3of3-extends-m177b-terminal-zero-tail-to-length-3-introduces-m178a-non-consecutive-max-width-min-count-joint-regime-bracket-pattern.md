# W17 synthesis #386 — Add.178 promotes M-177.C codex-singleton active-set persistence to 3-of-3 confirmed regime, extends M-177.B terminal-zero-tail to length 3 (refining M-176.C trajectory shape), and introduces M-178.A non-consecutive max-width-min-count joint regime candidate via Add.176/Add.178 bracket pattern around Add.177 contraction-amplification pulse

## Observation

ADDENDUM-178 contains three structural events orthogonal to the synth #385 M-176.E arm-decoupling:

1. **M-177.C codex-singleton active-set persistence** (Add.177 anomaly #2 candidate): Add.176 / Add.177 / Add.178 all have active-set = {codex} with symmetric-difference 0 across all three transitions. **Promoted from 2-of-2 candidate to 3-of-3 confirmed regime** at Add.178. FALSIFIES P-177.Q (predicted M-177.C does NOT extend to 3-of-3; observed extension).
2. **M-177.B extended-terminal-zero-tail extends to length 3**: litellm trajectory `7 → 1 → 2 → 0 → 0 → 0` (Add.173-178). The synth #384 M-177.B refinement (zero-tail length ≥2) is itself extended to length ≥3. **FALSIFIES P-177.P AND P-384.D** (both predicted M-177.B does NOT extend to length-3 zero-tail at Add.178). NEW M-178.C candidate: M-177.B-extended length-3+ zero-tail as a M-176.C-resident sub-regime.
3. **M-178.A non-consecutive max-width-min-count joint regime candidate**: Add.176 = (60m25s, 1) and Add.178 = (61m23s, 1) bracket Add.177 = (38m47s, 5). The synth #381 M-176.B single-instance is upgraded to a 2-instance pattern with one-tick contraction-amplification gap. The intervening Add.177 is a high-amplitude contracted-width tick (a stack-squash event breaching the M-176.A raw-PR layer). NEW M-178.A candidate: non-consecutive max-width-min-count joint regime with intervening contraction-amplification pulse.

The three events operate at structurally distinct levels (cross-repo active-set / per-repo trajectory-shape / cross-repo width-count joint distribution), and unlike synth #384's same-tick co-promotion cluster, two of them (M-177.C and M-178.A) are **bracket patterns** that span Add.176-178 (3 ticks) rather than synchronized single-tick events. This synth is therefore a **bracket-pattern promotion synth** rather than a co-promotion synth.

## Empirical PR-anchored evidence

### M-177.C codex-singleton active-set persistence (3-of-3 promotion)

- **Add.176 active-set**: {codex} (carrier = abhinav-oai #19840 `8f3c06cc`, hook-state-persistence). Cardinality 1.
- **Add.177 active-set**: {codex} (carrier = etraut-openai #20329-20333 `b957d938`, core-protocol-decoupling stack-squash). Cardinality 1, raw-PR count 5.
- **Add.178 active-set**: {codex} (carrier = bolinfest #20343 `ae863e72`, CI-infrastructure-tuning). Cardinality 1.
- **Symmetric-difference Add.176→177**: ∅ (set-equal). Add.177→178: ∅ (set-equal). 3-tick consecutive set-equality.
- **Internal volume variation**: raw-PR counts 1 / 5 / 1 — the active-set is at maximum stagnation while internal emission volume oscillates (Add.177 stack-squash amplification surrounded by Add.176 / Add.178 unit emissions).
- **Contrast**: prior longest codex-singleton run in Add.158-178 was 1 tick (each individual codex-only tick). The 3-tick consecutive run is the **first M-177.C-class instance** in the Add.158-178 window.
- **Promotion**: 3-of-3 supporting ticks ✓; structurally distinct levels NA (single regime); causal independence NA. M-177.C is **promoted from 2-of-2 candidate (Add.177 anomaly #2 introduction) to 3-of-3 confirmed regime** at Add.178.

### M-177.B extended-terminal-zero-tail (length 3)

- **litellm Add.173-178 trajectory**: 7 → 1 → 2 → 0 → 0 → 0. Zero-tail length 3.
- **Refinement progression**: synth #381 introduced M-176.C at 4-tick `H → L → R → 0`. Synth #384 M-177.B refined to `H → L → R → 0+` (length ≥1 implicit, length ≥2 observed). This synth refines further to `H → L → R → 0^k` with k ≥ 3 observed.
- **NEW M-178.C definition**: a M-176.C-resident trajectory is M-178.C-resident at tick T if the zero-tail length at T is ≥3. Add.173-178 instance has zero-tail length 3 ✓ ⇒ M-178.C-resident at Add.178.
- **Per-tick break-pressure decay**: P-177.A predicted litellm rebound at Add.177 with >55% prob — falsified (observed 0). P-384.D and P-177.P predicted no length-3 extension with >55% prob — falsified (observed length-3). The cumulative break-pressure model has been **3 consecutive false predictions** on the litellm rebound; the model's reliability is materially degraded at the per-tick leaf.
- **Trajectory shape generalization**: M-176.C is now `H → L → R → 0^k` with `k ≥ 3` observed instance. The trajectory is a **5-stage shape with variable terminal-zero-tail length**.

### M-178.A non-consecutive max-width-min-count joint regime candidate

- **Add.176 (width, count)**: (60m25s, 1) — synth #381 M-176.B single-instance.
- **Add.177 (width, count)**: (38m47s, 5) — intervening contraction-amplification pulse. Width is mid-band (≤40m), count is high-amplitude (5 PRs via stack-squash).
- **Add.178 (width, count)**: (61m23s, 1) — second max-width-min-count instance. Width exceeds Add.176 by 58s, establishing a new Add.151-178 width maximum.
- **Pattern**: max-width-min-count instances at Add.176 and Add.178 with one-tick gap. The gap-tick (Add.177) is structurally **opposite** in both dimensions: contracted-width and amplified-count.
- **NEW M-178.A definition**: a tick T is M-178.A-resident if (a) (width(T), count(T)) is a max-width-min-count joint extreme (width ≥58m AND count ≤1), AND (b) the prior M-178.A-resident tick T-k (k ≥ 1) had a same-direction joint extreme separated by an intervening tick T' (T-k < T' < T) with both dimensions opposite (width ≤40m AND count ≥5).
- **Add.176-178 instance**: T = Add.178 (61m23s, 1), T-k = Add.176 (60m25s, 1), k = 2; intervening T' = Add.177 (38m47s, 5) ✓ both dimensions opposite. M-178.A-resident at Add.178.
- **Single-pattern instance**: 1-of-1 at Add.178. Promote to candidate; requires recurrence to elevate.

## Anti-co-movement at extreme width as 2-of-2 conditional instance

The Add.176 anomaly #9 micro-observation (anti-co-movement at extreme width: width up large, rate down to sub-floor) is now at **2-of-2 instances when conditioned on max-width-tier ticks**. Add.176 (60m25s, 0.01655/min) and Add.178 (61m23s, 0.01629/min) are the only two ≥58m-width ticks in the Add.158-178 window, and both exhibit sub-floor rates. The intervening Add.177 (38m47s, 0.1289/min) is mid-band width and does not test the conditional.

The anti-co-movement at extreme width is therefore **structurally tight** — the conditional instance count is 2-of-2 with no counter-example, and the rate-band gap between max-width-tier and mid-band-width-tier is ~8× (sub-floor 0.0163 vs mid-band 0.13). NEW micro-observation: at the ≥58m width tier, the count is structurally bounded at 1 (or possibly 0 — single-zero instance not yet observed). Promote to micro-observation (2-of-2 conditional instances), candidate-ready upon recurrence.

## Cross-regime synthesis

- **M-177.C and M-176.E author-arm break interact**: M-177.C (codex-singleton active-set 3-of-3 ticks) is the **structural enabler** for the M-176.E author-arm 3-of-3 streak — the codex-singleton active-set forced all carrier-events to come from codex, and the author-pool diversity within codex post-burst-tail produced 3 novel authors. The M-176.E author-arm break at Add.178 occurs **within the M-177.C-resident window** — codex remains the singleton emitter, but the carrier-author recurs (bolinfest). M-177.C residency does NOT force author-novelty; it only forces the carrier-repo to be codex.
- **M-177.B-extended (M-178.C) and M-177.C co-residency**: at Add.178, litellm is M-178.C-resident (zero-tail length 3) and codex is M-177.C-resident (singleton-active-set 3-of-3). The two regimes are **complementary** — the litellm extended-zero-tail is the **structural cause** of the codex-singleton active-set. If litellm exits M-178.C (rebounds at Add.179), the active-set will likely expand to {codex, litellm} and M-177.C will break.
- **M-178.A and M-178.C co-residency**: M-178.A requires count ≤1 at the bracket ticks (Add.176, Add.178), which in turn requires litellm silence at those ticks (litellm is the highest-amplitude repo when active). M-178.C residency at Add.178 (litellm zero-tail length 3) is the **cause** of M-178.A's count = 1 condition at Add.178. Similarly, Add.176 had litellm = 0 (M-176.C terminal-zero entry, M-177.B precursor), enabling M-178.A's count = 1 condition at Add.176. **M-178.A is a downstream consequence of M-176.C / M-177.B / M-178.C litellm-silence cascade**.
- **M-176.D synchronized-silence-advance** (synth #384): advances to **4-of-4 supporting ticks** at Add.178 (opencode n=6→7, gemini-cli n=7→8). M-176.D is co-resident with M-177.C at Add.178 — both are 3-of-3-or-better confirmed regimes. M-176.D operates on the silent-tier (opencode + gemini-cli); M-177.C operates on the active-tier (codex). The two regimes are **structurally orthogonal** but co-resident.
- **M-176.A unique-SHA layer** (synth #383): advances to **8-of-8 supporting ticks** at Add.178. M-176.A is the longest-running confirmed codex regime in the Add.171-178 window. Co-resident with M-177.C at all 3 M-177.C ticks (Add.176, Add.177, Add.178); M-176.A and M-177.C operate at distinct cardinality layers (M-176.A = unique-SHA cardinality, M-177.C = active-set cardinality) but both are **codex-internal regimes**.
- **5-regime coherent configuration update** (synth #384): with the M-176.E split (synth #385) and the M-177.C / M-178.A / M-178.C additions (this synth), the configuration grows to a **9-regime coherent configuration at Add.178**: M-176.A (unique-SHA layer) + M-176.C (litellm collapse cascade base) + M-176.D (synchronized silence) + M-176.E-author (broken at Add.178) + M-176.E-surface (active at Add.178) + M-177.B (zero-tail length ≥2 base) + M-177.C (codex-singleton active-set) + M-178.A (non-consecutive max-width-min-count joint, candidate) + M-178.C (M-177.B-extended length-3+, candidate). The configuration is no longer purely 3-of-3-confirmed — it includes broken arms (M-176.E-author), candidate-stage regimes (M-178.A, M-178.C), and a sustained surface-arm (M-176.E-surface).

## New regime: bracket-pattern with intervening pulse as a multi-tick joint signature

When two ticks T-k and T (k ≥ 2) exhibit a joint extreme in two dimensions (e.g. (width, count)), separated by k-1 intervening ticks where the **last** intervening tick exhibits opposite-direction values in both dimensions, the (T-k, T) pair forms a **bracket-pattern with intervening pulse**. This is structurally distinct from:

- **Consecutive joint extremes** (no intervening pulse; e.g. two adjacent max-width-min-count ticks)
- **Recurrent joint extremes with arbitrary intervening ticks** (no opposite-direction pulse requirement)
- **Single-instance joint extremes** (no recurrence)

The bracket-pattern signature is **structurally signed**: the intervening pulse is a **mirror-reflection** of the bracket ticks in both dimensions. For M-178.A:

- **Bracket ticks**: Add.176, Add.178 — both (≥58m width, count = 1).
- **Intervening pulse**: Add.177 — (≤40m width, count = 5). Width is opposite (low), count is opposite (high).
- **Mirror-reflection**: width-axis flip × count-axis flip = both-axis flip ✓.

NEW M-178.A definition (refined): the bracket-pattern signature requires the intervening pulse to be a **two-axis mirror-reflection** of the bracket ticks. Add.176-178 instance is 1-of-1; promote to candidate, requires recurrence to elevate.

## Predictions

- **P-386.A**: M-177.C codex-singleton active-set persistence does NOT extend to 4-of-4 ticks at Add.179 (active-set rebound predicted under P-178.K; cumulative break-pressure on a 3-of-3 streak is high); >55% prob (matches P-178.Q).
- **P-386.B**: M-178.C M-177.B-extended length-3+ zero-tail does NOT extend to length 4 at Add.179 (litellm rebound predicted under P-178.A); >50% prob (matches P-178.P).
- **P-386.C**: M-178.A non-consecutive max-width-min-count joint regime does NOT recur at Add.179 (third instance would require sustained extreme — would also break the bracket-pattern definition's intervening-pulse requirement, requiring a different multi-tick pattern); >70% prob.
- **P-386.D**: If litellm Add.179 emits (P-178.A confirmed), M-177.C breaks (active-set expands to ≥{codex, litellm}); joint conditional. >50% prob.
- **P-386.E**: M-176.D synchronized-silence-advance breaks at Add.179 at the 5-of-5 attempt (cumulative break-pressure rises with each extension; matches P-178.N); >55% prob.
- **P-386.F**: The 9-regime coherent configuration loses ≥1 regime at Add.179 (cumulative break-pressure across 4 confirmed-or-candidate-regime extensions: M-177.C, M-178.C, M-176.D, M-178.A all face break tests at Add.179); >70% prob.
- **P-386.G**: At the ≥58m-width tier, count remains structurally bounded at ≤1 across the next conditional-instance (whenever Add.179+ exhibits ≥58m width, count is ≤1); >65% prob (2-of-2 conditional instances; structurally tight).
- **P-386.H**: M-178.A bracket-pattern signature does NOT recur in the form of a 3-tick (T-2, T-1, T) bracket at Add.179 (single-instance pattern; requires k = 2 spacing AND two-axis mirror-reflection at intervening pulse); >75% prob.
- **P-386.I**: M-176.A unique-SHA layer 8-of-8 streak extends to 9-of-9 at Add.179 (conditional on codex Add.179 unique-SHA count ∈ [0, 1] per P-178.B); >55% prob (matches P-178.T).
- **P-386.J**: When M-177.C breaks, the breaking event is a litellm rebound (active-set becomes {codex, litellm}) rather than an opencode/gemini-cli rebound (would require those repos to also exit silence — less likely given their 5+ depth); >60% prob conditional on M-177.C break.

## Diagnostic test schedule

- **Add.179**: P-386.A / P-386.B / P-386.D / P-386.E / P-386.F / P-386.I / P-386.J (per-tick reversion / extension tests).
- **Add.179+**: P-386.C / P-386.G / P-386.H (recurrence / conditional-instance tests).

## Cross-references

- ADDENDUM-178 `4b444a9` (codex bolinfest #20343 `ae863e72`, codex-singleton active-set 3-of-3; litellm M-177.B-extended zero-tail length 3; width 61m23s new max; rate 0.01629 sub-floor).
- ADDENDUM-177 `3ea9380` (intervening contraction-amplification pulse: width 38m47s, count 5 via stack-squash; M-177.C 2-of-2 candidate introduction at Add.177 anomaly #2).
- ADDENDUM-176 `9744292` (M-176.B max-width-min-count single-instance: width 60m25s, count 1; M-177.B precursor with litellm Add.176 = 0).
- ADDENDUM-175 `a76817f` (M-176.C R stage with litellm = 2; M-176.B precursor with active-set {codex, litellm}).
- ADDENDUM-174 (M-176.C L stage with litellm = 1).
- ADDENDUM-173 (M-176.C H amplitude pole with litellm = 7).
- Synth #385 `27f39a4` (M-176.E author-arm break and arm-decoupling; co-resident with M-177.C 3-of-3 promotion at Add.178; M-177.C is structural enabler of M-176.E author-pool diversity).
- Synth #384 `69f21d4` (M-177.B introduction at length ≥2; M-176.D 3-of-3 promotion). M-177.B is extended to length ≥3 by this synth.
- Synth #383 `5c35af0` (M-177.A stack-squash dual-layer; M-177.A is the structural cause of the Add.177 intervening contraction-amplification pulse — without stack-squash, Add.177 would not have count 5 and M-178.A would not have a two-axis mirror-reflection intervening pulse).
- Synth #381 `1d3a34d` (M-176.B max-width-min-count single-instance — promoted to M-178.A 2-instance bracket-pattern by this synth).
- Synth #380 `91ec42a` (M-176.A bounded-low-emission band [0, 1] — co-resident with M-177.C at all 3 M-177.C ticks).
- Anti-duplicate check: this synth introduces M-178.A (non-consecutive max-width-min-count joint regime with two-axis mirror-reflection intervening pulse) and M-178.C (M-177.B-extended length-3+ zero-tail sub-regime) as NEW candidates. M-178.A does not collide with M-177.A (synth #383, dual-layer cardinality framework) — operates on different dimensions (joint width-count distribution vs unique-SHA-vs-raw-PR cardinality). M-178.C does not collide with M-177.B (synth #384, length ≥2) — extends rather than competes (M-178.C ⊂ M-177.B). M-178.A does not collide with M-178.B (synth #385, founder-as-terminator pattern) — operates on different levels (cross-repo width-count vs per-author carrier-event). M-177.C is promoted (not introduced) under its existing name from synth #383-context.
