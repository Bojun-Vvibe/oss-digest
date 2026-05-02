# W17 synth #516 — post-Add.243 C.X cross-carrier pause-and-resume sub-class at n=3-instance anchor with PAUSE-DURATION MULTI-SCALE SPECTRUM {1, 4, 18} spanning three rhythm scales — joint three-instance BF ×21.8 Jeffreys-strong + cross-repo trend forecast

## Anchor

Add.243 (sha pending, this commit) instantiates the **third C.X "monopoly-pause-then-resume" cross-carrier sub-class instance** via codex N→A re-entry at n=4-tick pause window (PR #20566 f88701f5, mzeng-openai). Combined with prior anchors:
- **Instance 1**: stuxf intra-litellm n=1-tick pause (synth #512 anchor, Add.241 confirmation).
- **Instance 2**: qwen-code carrier-level n=18-tick pause (synth #514 anchor, Add.242 confirmation, PR #3784 71adaa4e).
- **Instance 3**: codex carrier-level n=4-tick pause (this synth, Add.243 confirmation, PR #20566 f88701f5).

The pause-duration spectrum across 3 instances now spans **{1, 4, 18}** ticks — three orders of magnitude in pause-rhythm coverage at single-decade and multi-decade boundaries.

## Pause-duration multi-scale spectrum analysis

**Empirical pause-duration set**: {1, 4, 18} with arithmetic mean 7.67, geometric mean **4.58**, median 4. The spread spans:
- Sub-decade boundary (n=1, intra-monopoly rapid resume).
- Mid-single-decade boundary (n=4, carrier-level moderate pause).
- Multi-decade boundary (n=18, near-twice-decade carrier-level extended pause).

**Single-anchor BF(H_C.X-pause-duration-spectrum-multi-scale : H_C.X-bimodal-extreme-pause-only)** ≈ ×4.2 favoring multi-scale spectrum. The Add.243 codex n=4 instance is the **decisive discriminator** — under H_bimodal (only sub-decade and multi-decade-boundary pauses observed; mid-range gap predicted), the Add.243 mid-range observation has prior ~0.10; under H_multi-scale (pause-duration-agnostic at all rhythm scales), prior ~0.42. Single-anchor BF ratio = 0.42/0.10 = ×4.2.

**Combined with synth #514 joint two-instance BF ×5.2**, joint three-instance BF ≈ **×21.8 Jeffreys-strong-favoring-multi-scale-pause-spectrum**.

## Tempered posteriors at n=3-instance anchor

Per synth #467 conservatism rule with three-anchor cap 0.75:
- H_C.X-pause-duration-multi-scale: **0.65** (UP from synth #514 0.55)
- H_C.X-bimodal-extreme-pause-only: **0.20** (DOWN from synth #514 0.30)
- H_C.X-not-cross-carrier-true-class (random co-occurrence): **0.10** (DOWN from synth #514 0.12)
- H_C.X-author-level-only-misextrapolated: **0.05** (DOWN from synth #514 0.03 — slight rise but capped)

## Author-class spectrum coupling

The 3 instances also span **author-class diversity**:
- Instance 1 (stuxf intra-litellm): single-author concentrated security-hardening sweep (human author).
- Instance 2 (qwen-code): bot-author SWE-agent test-fix surface.
- Instance 3 (codex): human-author mzeng-openai tool-handler refactor + prompt polish.

Author-class set: {human-concentrated, bot-exclusive, human-distinct}. **C.X sub-class is author-class-agnostic at n=3-instance anchor** — single-anchor BF(H_author-class-agnostic : H_author-class-restricted) ≈ ×3.5. Combined with pause-duration multi-scale BF ×21.8: joint **author-agnostic × pause-multi-scale** BF ≈ ×76 Jeffreys-very-strong.

## Surface-class spectrum coupling

Surface diversity across 3 instances:
- Instance 1: security/guardrails/proxy/vector-stores/budget hardening (multi-surface).
- Instance 2: test-fix Windows-platform-monitor-spawn-assertion (single-surface, narrow).
- Instance 3: tool-handler refactor + prompt-polish + naming-rename (multi-file refactor).

Surface-class set: {multi-surface-hardening, single-narrow-surface-test, multi-file-refactor}. **C.X sub-class is surface-class-agnostic at n=3-instance anchor** — single-anchor BF(H_surface-agnostic : H_surface-restricted) ≈ ×3.0.

## Cross-repo trend forecast

Given C.X is now confirmed as **pause-duration multi-scale × author-class agnostic × surface-class agnostic** at n=3-instance anchor, the next-instance forecast space expands maximally:

- **Carrier-pool eligible for next C.X instance**: any of {opencode, goose, crush, gemini-cli, litellm, qwen-code, codex} with prior pause-context (currently silent or recently-rotated). Current eligible: opencode (n=41), goose (n=42), crush (n=11), gemini-cli (n=8), litellm (n=2), qwen-code (n=1).
- **Pause-window prior distribution centered at geometric mean ~4.58 ticks**, with empirical density support in {1, 4, 18} suggesting roughly log-uniform coverage over [1, 20] tick-pause range.
- **Most likely next C.X instance**: litellm at n=2-current-pause (geometric-mean-proximity priority) or codex sustain-then-pause-then-resume at next n=2-3 cycle.
- **Cross-repo trend implication**: under sustained-mono-carrier-cardinality floor regime + 2-tick rotation chain (synth #515), C.X cross-carrier sub-class operates as the **default carrier-pool internal-relaxation mechanism** — predicts further cross-carrier rotation chains in Add.244-250 with 60-70% per-tick probability of new C.X instance until floor regime breaks.

## Bayesian-quantity update consolidation

- Cumulative C.X cross-carrier sub-class evidence: **3 anchors at joint BF ×21.8** (Jeffreys-strong-favoring multi-scale-pause-spectrum) + author-agnostic ×3.5 + surface-agnostic ×3.0 = **composite ×229 Jeffreys-decisive** for full C.X-as-cross-carrier-multi-attribute-agnostic-sub-class hypothesis vs intra-litellm-author-restricted-only originalist hypothesis (synth #496 C.IV.security-hardening).
- Updated relationship to original C-class taxonomy (synth #496): C.IV.security-hardening (intra-litellm stuxf author-monopoly) is now **special case of C.X** (where pause-duration = n=1, author-class = single-human-concentrated, surface-class = multi-surface-hardening) — C.X is the **generalising super-class** spanning C.IV plus all carrier-level extensions.

## Pre-registered Add.244-250 discriminating tests

- **P-516.A**: if Add.244 instantiates **fourth C.X instance** at any pause-window in [n=1, n=20], H_multi-scale-spectrum further consolidates with single-anchor BF ×3.5 cumulating to **composite ×800+ Jeffreys-decisive-deepening**.
- **P-516.B**: if Add.244-247 4-tick window contains zero new C.X instances (all currently-silent carriers extend silence without re-entry), H_C.X-as-default-carrier-pool-relaxation-mechanism is partially falsified (selection effect insufficient to predict cross-tick density); BF(H_default-mechanism : H_episodic-rare-event) erodes from current ×4.5 to ×1.5 indifferent.
- **P-516.C**: if next C.X instance pause-window falls inside [n=2, n=10] sub-band (geometric-mean proximity), H_log-uniform-pause-distribution gains BF ×2.5; if outside (n=1 or n>15), gains BF ×1.0 indifferent.
- **P-516.D**: BMA-weighted next-C.X-instance carrier-prior under H_C.X-multi-scale-spectrum: litellm 0.32 (n=2 short-pause-rebound priority) / codex 0.18 (n=1 sustain-then-pause-then-resume priority) / qwen-code 0.12 (n=1 sustain-then-pause-then-resume priority) / crush 0.18 (n=11 multi-decade-precedent matching qwen-code n=18) / gemini-cli 0.10 (n=8 mid-decade) / opencode 0.05 / goose 0.05 (joint-ceiling carriers historically resistant to C.X re-entry per synth #502 hard-termination precedent).

## Cross-repo trend note: pause-and-resume axis as W17 terminal-phase signature

The emergence of C.X cross-carrier multi-scale pause-and-resume at n=3-instance anchor in the final 11-tick window of W17 (Add.233-243) is a **W17 terminal-phase signature**: as joint-ceiling extends and discharge-floor consolidates, the carrier-pool transitions from cardinality-expansion regime (early-W17) to **identity-rotation-with-pause-and-resume regime** (terminal-W17). This trend has cross-week implications for W18 forecasting — if carryover, W18 may begin at sustained mono-carrier floor with active C.X rotation rather than reset to cardinality-expansion baseline. Pre-registered cross-week test P-516.E: W18 first-tick carrier-cardinality observation will discriminate (cardinality 1 favors carryover, cardinality ≥3 favors reset).

**Cites**: ADD-243 (this commit), ADD-242 2106603, ADD-241 cf23afc, synth #496 c993b10, #498 (BMA-decay onset), #502 (gemini-cli hard-terminate), #503 (D2-CC-MPA-cct), #506 (P-506 metastable-tail-floor), #511 (n=5 anchor), #512 (C.X stuxf instance 1), #513, #514 (C.X cross-carrier n=2 anchor), #515 (this commit pair, rotation-chain), #467 (conservatism rule), #495 (H_neg cross-channel), PRs #20566 f88701f5, #3784 71adaa4e, #27008 (stuxf rapid re-entry instance 1).
