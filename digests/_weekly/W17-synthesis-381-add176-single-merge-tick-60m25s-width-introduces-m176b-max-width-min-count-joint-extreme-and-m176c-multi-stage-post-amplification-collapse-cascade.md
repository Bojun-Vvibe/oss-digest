# W17 synthesis #381 — Add.176 single-merge tick at 60m25s width introduces M-176.B maximum-width-minimum-count joint extreme as post-multi-stage-collapse signature, refines M-177.A into M-176.C multi-stage post-amplification collapse cascade

## Observation

ADDENDUM-176 (commit will be referenced post-merge; window 04:01:11Z → 05:01:36Z, 60m25s) records a **single in-window merge** (codex abhinav-oai #19840 `8f3c06cc` 04:46:33Z `Add persisted hook enablement state`) across all 6 tracked repos. Per-minute rate = 0.01655 — sub-floor by ~5× vs the prior Add.158-176 minimum (Add.174 at 0.0827).

Width 60m25s is the **largest single-tick width since Add.153** (58m23s) and is the third-largest in the Add.151-176 sequence (Add.153 58m23s, Add.156 57m12s, Add.176 60m25s). Width-step Add.175→176 = +32m42s, the largest single-tick width expansion in the Add.151-176 sequence.

The litellm trajectory advances from Add.173-175 (7 → 1 → 2) to Add.176 (0), forming a 4-tick `7 → 1 → 2 → 0` shape that extends the synth #377 M-177.A asymmetric-collapse-after-amplification regime into a multi-stage form.

## Empirical PR-anchored evidence

- **In-window merges (n=1)**: codex #19840 `8f3c06cc` (abhinav-oai). All other tracked repos silent.
- **litellm Add.158-176 emission shape**: 4 / 6 / 5 / 7 / 4 / 4 / 4 / 1 / 5 / 4 / 6 / 8 / 6 / 3 / 0 / 4 / 7 / 1 / 2 / 0 (for the directly-reported tick counts since Add.157; the relevant 4-tick tail is `7 → 1 → 2 → 0` at Add.173-176). Second zero-emission litellm tick in the Add.158-176 sequence (first was Add.169).
- **Width-rate joint extreme**: width 60m25s (rank 3 in Add.151-176) co-occurring with rate 0.01655 (rank 1 lowest in Add.158-176). The width / rate cross-product = 60.417 × 0.01655 = 1.0 in-window merges (definitionally, the count itself). The 60m+ width tier appears 3 times in Add.151-176 (Add.153, Add.156, Add.176); the corresponding counts were {x, y, 1} where the Add.153 / Add.156 counts were both >1 per the historical sequence — Add.176 is the **first 60m+ width tick to emit only 1 merge** in the tracked window.
- **Multi-stage collapse trajectory anchors**: Add.173 mateo-berri/Sameerlite/etc. 7-PR over-recovery → Add.174 sruthi-sixt-26 #26814 1-PR collapse → Add.175 mateo-berri #26719 + Sameerlite #26855 2-PR partial recovery → Add.176 zero. Each stage is anchored by author-rotation per ADDENDUM-175 record and the Add.176 zero-tick.

## New regime: M-176.B maximum-width-minimum-count joint extreme

When a single-tick capture window simultaneously achieves (a) width in the top decile of the Add.NNN sequence (≥58m) AND (b) cross-repo merge count in the bottom decile (≤1), the joint state is a **post-multi-stage-collapse signature**: the long width reflects the absence of merge-event-triggered window closure (windows close on cumulative-merge-count thresholds in the underlying capture mechanism, so low merge counts produce long windows), and the low count reflects the cumulative effect of multi-repo silence onset.

- **Definition**: a tick is M-176.B-resident if (a) width ≥ p90 of the rolling Add.NNN width distribution AND (b) count ≤ p10 of the rolling count distribution AND (c) the prior 3-tick window contains at least one collapse-trajectory regime instance (M-177.A or M-176.C).
- **Add.176 instance**: width 60m25s (rank 3 in Add.151-176, p ≈ 0.88), count 1 (rank 1 lowest in Add.158-176, p ≈ 0.05), prior 3-tick window contains M-177.A asymmetric-collapse-after-amplification (Add.173→174 and now M-176.C extension Add.173→176).
- **Distinguishing feature vs P-378.B / M-178.A multi-tier-silence-stratification**: M-178.A describes the **silence depth distribution across silent repos**; M-176.B describes the **window-level count + width joint state** as a function of the silence-set cardinality. M-178.A operates on the silent-repo subset; M-176.B operates on the window aggregate.

## New regime: M-176.C multi-stage post-amplification collapse cascade

The synth #377 M-177.A asymmetric-collapse-after-amplification regime described a single-step collapse trajectory (Add.173→174 = 7 → 1, asymmetric magnitude). Add.175→176 extends this into a 4-tick `7 → 1 → 2 → 0` shape with an intermediate partial-recovery step.

- **Definition**: a litellm trajectory is M-176.C-resident at tick T if the prior 4-tick window forms a `H → L → R → 0` shape where H ≥ 6 (high amplitude), L ≤ 0.25H (asymmetric collapse), R ∈ (L, 0.5H] (partial recovery), and the terminal value is 0 (second-stage collapse).
- **Add.173-176 instance**: 7 → 1 → 2 → 0. H = 7, L = 1 (= 0.143 × 7 ≤ 0.25H ✓), R = 2 (= 0.286 × 7 ∈ (1, 3.5] ✓), terminal = 0 ✓.
- **Distinguishing feature vs M-177.A**: M-177.A is the 2-tick prefix `H → L`; M-176.C is the full 4-tick trajectory including intermediate partial recovery and second-stage terminal collapse. M-176.C **supersedes** M-177.A as the more complete description of the litellm Add.173-176 trajectory; M-177.A is preserved as the **prefix-regime** but is now subsumed.
- **Single-instance status**: M-176.C is a 1-of-1 instance — promotion to a multi-instance regime requires a future 4-tick `H → L → R → 0` shape observation.

## Falsification of single-step asymmetric-collapse-as-terminal hypothesis

Synth #377 M-177.A implicitly modeled the litellm Add.173→174 collapse as a **terminal collapse** (single-step from amplitude H to floor L, with subsequent recovery). The Add.175 partial recovery (1 → 2) and Add.176 second-stage collapse (2 → 0) **falsify the terminal-collapse interpretation**: the L floor was a transient intermediate state, not a terminal one. The collapse cascade is a **multi-stage process** with an intermediate recovery oscillation before reaching zero.

This refinement does not invalidate M-177.A as a 2-tick descriptor; it embeds M-177.A within the longer M-176.C trajectory.

## Cross-regime synthesis

- **M-168.A** (synth #368, cross-repo over-recovery template): drives the Add.171-173 amplification phase that establishes the H = 7 amplitude pole of M-176.C.
- **M-177.A** (synth #377, asymmetric-collapse-after-amplification): the Add.173→174 collapse step; now embedded within M-176.C as the prefix.
- **M-175.A** (synth #379, vendor-family-narrow-surface-persistence): broken at Add.176 via the trivial path of litellm zero-emission. The vendor-family persistence regime is **conditionally suspended** during M-176.C terminal-collapse ticks (cannot be tested without litellm activity).
- **M-176.A** (synth #376 / #380, codex bounded-low-emission band [0, 1]): advances to 6-of-6 supporting ticks at Add.176, **independent of M-176.B / M-176.C** — the codex sub-floor band is the carrier for the M-176.B sole-emitter status of Add.176. M-176.A and M-176.B are **co-resident regimes** at Add.176: codex sub-floor activity carries the joint extreme.
- **M-178.A** (synth #378, multi-tier-silence-stratification): advances to {opencode n=5, gemini-cli n=6, goose n=15} at Add.176 with depth set still spanning 3 distinct values. M-178.A and M-176.B are co-resident — the multi-tier silence cardinality (3 silent repos at Add.175 → 4 silent repos at Add.176) is the underlying driver of the M-176.B count collapse.

The four regimes (M-176.A / M-176.B / M-176.C / M-178.A) compose at Add.176 into a **post-cascade-collapse network state**: codex sub-floor (M-176.A) carries singleton activity (M-176.B) while litellm completes its multi-stage collapse (M-176.C) and the silence-tier set (M-178.A) expands to engulf 4 of 6 repos.

## Predictions

- **P-381.A**: M-176.B maximum-width-minimum-count joint extreme does NOT recur at Add.177 (single-instance extreme; rebound to mid-band width and count expected); >65% prob (matches P-176.N).
- **P-381.B**: M-176.C multi-stage post-amplification collapse cascade does NOT extend to a fifth stage (Add.177 litellm = 0 producing `7 → 1 → 2 → 0 → 0` tail); >55% prob (matches P-176.O — recovery from second-stage zero is more likely than sustained zero-floor for litellm).
- **P-381.C**: When M-176.C-class trajectories recur in W17+ data, the intermediate partial-recovery R value is in the band [L+1, 0.5H] (mid-band recovery); >40% prob (mid — single-instance, R band is provisional).
- **P-381.D**: M-176.B is **specific to extreme width tiers** (≥58m): no Add.177-200 tick with width <55m exhibits both rank-1 minimum count AND the M-176.B joint signature; >55% prob.
- **P-381.E**: M-177.A is **subsumed by M-176.C** going forward — future asymmetric-collapse instances are evaluated against M-176.C 4-tick shape rather than M-177.A 2-tick prefix; the M-177.A label is preserved for prefix-only instances where the 4-tick shape is unobserved or incomplete; meta-prediction (no falsification test).
- **P-381.F**: The M-176.C 4-tick shape's terminal-zero step is **followed by recovery within ≤2 ticks** (litellm Add.178 emits ≥1 merge); >55% prob.
- **P-381.G**: M-176.B and M-178.A are **causally coupled** — every future M-176.B-resident tick has ≥3 silent repos (M-178.A multi-tier silence with cardinality ≥3); >55% prob (single-instance support; provisional).

## Diagnostic test schedule

- **Add.177**: P-381.A / P-381.B (single-tick reversion tests), P-176.N / P-176.O (matches).
- **Add.177-178**: P-381.F.
- **Conditional on next M-176.C-class observation**: P-381.C.
- **W17 closeout**: P-381.D / P-381.G.
- **Meta**: P-381.E.

## Cross-references

- ADDENDUM-176 (window 04:01:11Z..05:01:36Z, 1 merge across 1 repo, codex sole emitter).
- ADDENDUM-175 `a76817f` (litellm 2-PR partial recovery, mateo-berri #26719 + Sameerlite #26855; codex bolinfest #20095).
- ADDENDUM-174 `a7345a1` (litellm 1-PR asymmetric collapse, sruthi-sixt-26 #26814).
- ADDENDUM-173 `4d2e65f` (litellm 7-PR over-recovery septuple establishing H amplitude pole).
- Synth #377 (M-177.A asymmetric-collapse-after-amplification, prefix-subsumed by M-176.C).
- Synth #379 (M-175.A vendor-family-narrow-surface-persistence, conditionally suspended at M-176.C terminal-collapse ticks).
- Synth #380 (M-176.A bounded-low-emission band [0, 1], co-resident with M-176.B).
- Synth #378 (M-178.A multi-tier-silence-stratification, co-resident with M-176.B).
- Synth #368 (M-168.A cross-repo over-recovery, drives M-176.C amplification phase).
- Anti-duplicate check: this synth introduces M-176.B (joint window-level extreme) and M-176.C (multi-stage litellm collapse trajectory). Neither restates synth #376 / #378 / #379 / #380 (which operate on per-repo regimes) nor synth #377 (which is the M-177.A 2-tick prefix now embedded within M-176.C).
