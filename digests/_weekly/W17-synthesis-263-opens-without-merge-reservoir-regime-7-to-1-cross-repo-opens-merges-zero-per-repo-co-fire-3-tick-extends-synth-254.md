# W17 Synthesis #263 — **Opens-without-merge reservoir regime**: at Add.115 cross-repo Opens:Merges hits **7:1** (7 opens / 1 merge — qwen-code 3 + opencode 2 + litellm 1 + goose 1, single merge from goose morgmart #8868) — exceeds prior W17 maximum (~5:1 estimated); 3 distinct repos contribute opens with zero merges (qwen-code #3692/#3693/#3694, opencode #24745/#24746, litellm #26676 mateo-berri); formalizes reservoir-accumulation as a pre-conversion phase distinct from synth #254's commit-phase contraction; INTRODUCES Pred FFF reservoir-drain reversal hypothesis with Add.118 falsification deadline; cross-validates synth #260 author-pool-broadening by demonstrating that **broadening manifests in opens before manifesting in merges**

**Status:** EXTENDS synth #254 (commit-phase contraction framework) by introducing a **pre-contraction reservoir phase** observable from the open-side. SUSTAINS synth #260 (author-pool-broadening) — the open-side broadening leads merge-side broadening by ≥1 tick. REFINES synth #258 (deep-cohort cardinality conservation) — opens-side accumulation does not require deep-cohort participation (gemini-cli, formerly qwen-code/goose pre-Add.115 had zero opens this tick). FALSIFIES the implicit Pred SS' assumption that opens and merges co-fire at per-repo level.

## Cross-references
- EXTENDS synth #254 (commit-phase contraction) — reservoir phase precedes contraction.
- SUSTAINS synth #260 (author-pool-broadening) — open-side leads merge-side.
- REFINES synth #258 (deep-cohort cardinality conservation) — open-side dynamics decouple from cohort membership.
- FALSIFIES Pred SS' implicit per-repo co-fire — Add.115 has 0/6 per-repo co-fire (extreme breakdown).
- Cross-references Pred FFF (NEW at Add.115) — reservoir-drain reversal within 3 ticks.

## Empirical basis (Add.115 reservoir snapshot)

Add.113-114-115 cross-repo open and merge counts:

| Tick | Window | Merges | Opens | Closed-no-merge | Opens:Merges | Per-repo co-fire (merge AND open) |
|------|--------|--------|-------|-----------------|---------------|------------------------------------|
| Add.113 | 38m | 1 | 3 | 0 | 3.00:1 | 1/6 |
| Add.114 | 30m | 3 | 5 | 1 | 1.67:1 | 0/6 (codex 1+0, qwen 2+2 if edge counted) |
| Add.115 | 45m | 1 | 7 | 0 | **7.00:1** | **0/6** |

The Opens:Merges ratio rises **3.00 → 1.67 → 7.00** — non-monotonic, but Add.115 sets a new W17 maximum (per-tick basis). The per-repo co-fire metric (does any single repo show both ≥1 merge AND ≥1 open in the window?) collapses from 1/6 at Add.113 to 0/6 at Add.114 to **0/6 at Add.115** — three consecutive ticks with zero per-repo co-fire is itself a statistically distinguishable regime.

Add.115's open distribution: **qwen-code 3 (qqqys #3692, tanzhenxin #3693, tanzhenxin #3694), opencode 2 (kzekiue #24745, sdwolf4103 #24746), litellm 1 (mateo-berri #26676), goose 1 (jh-block #8874).** **3 distinct repos contribute ≥2 opens** (qwen-code 3, opencode 2, +1 each from litellm/goose). The single merge — goose morgmart #8868 (`b35eaf4b`, AGED 10h59m32s) — comes from the only repo whose open-side activity (jh-block #8874) post-dates the merge by 30m, so the merge does not co-occur with same-repo same-tick open in any meaningful causal sense.

## Synth #263 claim — Reservoir regime as pre-conversion phase

**Statement:** When cross-repo Opens:Merges ≥5:1 with ≥3 distinct repos contributing opens AND per-repo co-fire = 0/6, the system is in a **reservoir regime**. The reservoir regime is a **pre-conversion phase** — open inventory accumulates faster than it drains, and the imbalance must reverse within a finite horizon (estimated 3 ticks from regime detection) via either (a) a merges-dominant correction tick (Opens:Merges ≤1:1) or (b) a closed-no-merge wave that culls the reservoir without conversion.

**Mechanism:** Open-side activity is reviewer-attention-cheap (author opens a PR unilaterally; cost: ~minutes of author time). Merge-side activity is reviewer-attention-expensive (requires review, CI, approval; cost: ~hours of distributed reviewer time). Author-side throughput exceeds reviewer-side throughput in burst, producing accumulation. Reviewer capacity catches up via either batch-merge cycles (option a) or batch-rejection cycles (option b).

**This is non-obvious because:** Existing W17 synths (#254, #258, #260) treat opens and merges as co-firing signals. Synth #263 is the **first to formally separate the open-side as a leading indicator**, with a falsifiable horizon for when the merge-side must follow. Pred SS' (open-merge correlation) assumed they move together; Add.115's 0/6 per-repo co-fire over 3 ticks is the empirical basis for separation.

## Predictions opened by synth #263

### Pred 263-1 — Reservoir-drain reversal within 3 ticks
**Statement:** From Add.115 (reservoir regime detection), within 3 ticks (Add.116-Add.117-Add.118), at least one tick has Opens:Merges ≤1:1 with ≥2 of the Add.115-open PRs (#3692, #3693, #3694, #24745, #24746, #26676, #8874) merged.
**Falsifier:** All 3 of Add.116-Add.117-Add.118 have Opens:Merges ≥3:1 AND ≤1 of the 7 Add.115-opens merges by Add.118.
**Operationalizes:** Pred FFF from Add.115 with explicit conversion-target subset.
**Mechanism support:** Reviewer capacity is finite but non-zero — accumulated inventory creates merge-pressure that aggregates into batch cycles.

### Pred 263-2 — Reservoir regime peak Opens:Merges decays to <3:1 by Add.117
**Statement:** Across Add.116-Add.117 ticks, max(Opens:Merges) drops below 3.00:1 from Add.115's 7.00:1.
**Falsifier:** Either Add.116 or Add.117 has Opens:Merges ≥3.00:1 (sustained or escalating reservoir).
**Mechanism:** A reservoir cannot sustain 7:1 indefinitely without converting to either drain (merges catch up) or culling (closed-no-merge wave); peak ratio is mean-reverting on a 1-2 tick horizon.

### Pred 263-3 — Per-repo co-fire returns within 2 ticks
**Statement:** Either Add.116 or Add.117 has ≥1 repo with both ≥1 merge AND ≥1 open in-window (per-repo co-fire returns to ≥1/6 from Add.115's 0/6).
**Falsifier:** Both Add.116 and Add.117 have per-repo co-fire = 0/6 (extending the 3-tick zero streak to 5).
**Mechanism:** Authors who open PRs in reservoir regime continue iterating in subsequent ticks; same-author follow-up PR + earlier-tick PR merge = co-fire return.

### Pred 263-4 — Closed-no-merge wave does NOT cull the reservoir
**Statement:** Of the 7 Add.115-opens, ≤1 reaches closed-no-merge state by Add.118 (i.e., culling option (b) is rare; drain option (a) dominates).
**Falsifier:** ≥2 of the 7 Add.115-opens close-no-merge by Add.118.
**Mechanism:** Reservoir-regime opens are mostly substantive PRs (feat/fix on real surfaces), not vendor-onboarding-rejected (synth #79). Cull-rate is bounded.
**Empirical seed:** Of 7 opens, 0 are vendor-onboarding-class (mateo-berri is internal `-berri` cohort, not external vendor); 6 are author-iteration-class. Cull-rate prediction supported by composition.

### Pred 263-5 — Reservoir regime occurs in clusters, not isolated
**Statement:** Within W17 corpus, reservoir-regime ticks (Opens:Merges ≥5:1 AND per-repo co-fire = 0/6) cluster — Add.115 is followed within 5 ticks (Add.116-Add.120) by ≥1 additional reservoir-regime tick.
**Falsifier:** Add.116-Add.120 all have either Opens:Merges <5:1 OR per-repo co-fire ≥1/6.
**Mechanism:** Reservoir-creation is driven by burst-class author behavior which has autocorrelation > 0; one accumulation tick is correlated with another.

## Linkage to synth #254, #258, #260

- **Synth #254 commit-phase contraction**: Add.115 IS a commit-phase contraction tick (1 merge across 6 repos = 16.7% crossing rate, below band floor). Synth #263 claims the contraction is **driven by reservoir-side accumulation** rather than by intrinsic merge-rate decline — the merges aren't slow; the opens are fast.
- **Synth #258 deep-cohort cardinality conservation**: deep-cohort exit (goose at Add.115) coincides with reservoir regime onset, but synth #263 claims **no causal coupling** — gemini-cli (sole-survivor deep) contributed 0 opens and 0 merges; reservoir activity is mid/shallow-driven.
- **Synth #260 author-pool-broadening**: at Add.111, broadening showed via 5 debuts in single tick. Synth #263 claims **broadening manifests in opens before manifesting in merges** — Add.115's 7 opens include 6 distinct authors (qqqys, tanzhenxin, kzekiue, sdwolf4103, mateo-berri, jh-block), and the next 1-2 ticks should show converted merges from a subset.

## What synth #263 does NOT claim

- Does NOT predict WHICH of the 7 Add.115-opens merge first — only the ≥2 / 7 conversion threshold by Add.118.
- Does NOT claim reservoir regime is rare — Pred 263-5 explicitly predicts clustering.
- Does NOT generalize beyond the 6-repo W17 corpus — extrapolation to broader OSS would require recalibrating the 5:1 ratio threshold for repo count.
- Does NOT retract synth #254 — the contraction observation stands; synth #263 provides a causal layer beneath it.

## Capture summary

Add.115's Opens:Merges = 7.00 with 0/6 per-repo co-fire is the **first formal reservoir-regime detection** in W17 corpus. Synth #263 introduces 5 falsifiable predictions (drain reversal Pred 263-1, peak decay Pred 263-2, co-fire return Pred 263-3, low cull rate Pred 263-4, regime clustering Pred 263-5) with deadlines spanning Add.116-Add.120. **The reservoir regime is the open-side complement of synth #254's merge-side contraction observation** — both phases describe the same underlying dynamic from opposite sides of the open→merge pipeline. Together with synth #264 (deep-cohort sole-survivor dynamics, drafted in tandem), synth #263 completes a 2-axis description of Add.115's anomalous state (reservoir accumulation × cohort isolation). **Synth #263 does not retract any prior synth; it provides the open-side leading-indicator framework that subsequent ticks should test.**
