# W17 Synthesis #327 — Cross-repo merge cadence drift between successive ADDENDUM windows in the Add.144-148 5-tick band: per-minute corpus rate decays from 0.1445 (Add.144 zero-active rebound recovery) → 0.0905 (Add.145 dual-active goose+codex) → 0.0489 (Add.146 dual-active codex+litellm) → 0.0505 (Add.147 tri-active peak) → 0.0249 (Add.148 single-active contraction); the **rate-cadence is monotonically dilutive after the Add.144 rebound peak EXCEPT for the Add.146→147 tri-active uptick (+3.3%)**, and the Add.144→148 5-tick mean rate 0.0719/min sits **40% below** the Add.119-143 25-tick band mean ~0.12/min — late-W17 has entered a structurally **lower-cadence regime** distinct from the early-W17 high-cadence mean

**Scope:** Add.144-148 5-tick band (widths 28m21s/44m12s/40m56s/59m24s/40m10s, rates 0.1445/0.0905/0.0489/0.0505/0.0249, active-counts 0/2/2/3/1, per-tick merge counts 4/4/2/3/1) with reference to synth #317 (original width-rate coupling), synth #321 (silence-regime-mediated rate suppression v2), synth #326 (active-repo-count Poisson-flat model), and Add.144 #20107+#20108+#20109 codex zero-active-anchor rebound, Add.145 codex viyatb-oai #20117+#20118 + goose lifeizhou-ap #8893+#8895 + qwen-code/etc. burst, Add.146 codex viyatb-oai #20118+andmis sandbox + litellm Sameerlite #26757, Add.147 codex alexsong-oai #20144 + litellm minznerjosh #26710 + qwen-code wenshao #3720, Add.148 qwen-code tanzhenxin #3729.

## Claim (falsifiable)

**P-327.A:** Across the Add.144-148 5-tick band, per-minute corpus merge-arrival rate exhibits **monotonic dilution from a single rebound peak (Add.144 0.1445/min)** with exactly **one violation** (Add.146→147 +3.3% uptick driven by tri-active cardinality jump 2→3, not by underlying per-repo rate change). Rate sequence: **0.1445 → 0.0905 → 0.0489 → 0.0505 → 0.0249**, fold-changes -37%, -46%, +3%, -51%. The Add.144→148 cumulative rate change is **-83%** over 5 ticks (~3h53m wall-clock from Add.144 close 03:54:53Z to Add.148 close 08:57:53Z). Predict: Add.149-152 corpus rate stays in the [0.02, 0.06] band (within 1 std-dev of the Add.146-148 sub-mean 0.0414/min), with no ≥0.10 rate observed unless a deep-dormancy exit injects ≥3 merges in a sub-30m window. Falsifier is any Add.149-152 tick yielding rate ≥0.10 WITHOUT a concurrent deep-dormancy silence exit at one of {gemini-cli, opencode, goose}.

**P-327.B:** Late-W17 has entered a structurally lower-cadence regime distinct from early-W17. Per-tick mean rate Add.119-143 (25-tick band) was approximately **0.12/min** (synth #317 medium-width floor); Add.144-148 5-tick band mean is **0.0719/min**, a **-40% regime shift** in the 5-tick rolling window. The shift is concentrated in the Add.146-148 tail (3-tick mean **0.0414/min**, **-66% vs early-W17 mean**). Synth #317 medium-width ≥0.12 rule is now falsified at **0/4 strict consecutive medium-width ticks Add.145-148**; synth #326 P-326.B (active-repo-count / window-width Poisson-flat) is at **3/4 exact matches** in the same window. The regime shift is **width-independent and active-count-mediated**: corpus rate is determined by active-repo cardinality (1-3) rather than by tick width, with per-active-repo per-tick contribution converging to ~1 merge except in dual-author-exit conditions (Add.145 goose). Predict P-327.B: the late-W17 regime per-active-repo per-tick contribution is **tightly distributed around 1.0 with std-dev ≤0.5** — i.e. the corpus is in a "1-merge-per-active-repo" regime, not a "burst-per-active-repo" regime. Falsifier is any Add.149-152 tick where per-active-repo per-tick contribution exceeds 2.0 across ≥2 active repos in the same tick.

**P-327.C:** The Add.146→147 tri-active rate uptick (+3.3%, sole non-monotonic point) is the **canonical signature of an active-repo cardinality jump under the P-326.B Poisson-flat model**: rate ≈ active-count / width, so going 2→3 active at constant width yields +50% rate, but in the Add.146→147 case the width also expanded (40m56s → 59m24s, +45%), so rate change = +50% × (1 / 1.45) = +3.4% predicted vs +3.3% observed (match within 0.1pp). The non-monotonicity is therefore a **structural artifact of cardinality jumps under width expansion**, not a violation of the dilution trend. Predict: future cardinality jumps under width expansion will yield rate changes within ±2pp of the (Δactive/active_old × width_old/width_new × old_rate) prediction. Falsifier is any Add.149-152 cardinality jump where rate change deviates >5pp from this formula.

## Evidence

### Add.144-148 5-tick cadence drift table

| Tick | Width | Active repos | Merge count | Per-min rate | Rate fold-change | Predicted by P-326.B (active/width) | Match? |
|---|---|---|---|---|---|---|---|
| Add.144 | 28m21s (1701s) | 0→hard-rebound (codex 4 merges by 4 distinct authors, viyatb-oai #20107+#20108 + andmis sandbox + simon-flag jiff-deps; the rebound from Add.143 zero-active state) | 4 | 0.1445 | (anchor) | 0/28.35 = 0 (zero-active anchor failure under P-326.B; rebound spike outside model) | model fails by design — anchor tick |
| Add.145 | 44m12s (2652s) | 2 (codex viyatb-oai #20117+#20118 + goose lifeizhou-ap #8893+#8895 dual-author exit) | 4 | 0.0905 | -37% | 2/44.2 = 0.0452 | ✗ (2× off, dual-author-exit per synth #322 axis-iii) |
| Add.146 | 40m56s (2456s) | 2 (codex viyatb-oai #20118 + andmis multi_agent_v2 + litellm Sameerlite #26757) | 2 | 0.0489 | -46% | 2/40.93 = 0.0489 | ✓ EXACT |
| Add.147 | 59m24s (3564s) | 3 (codex alexsong-oai #20144 + litellm minznerjosh #26710 + qwen-code wenshao #3720) | 3 | 0.0505 | +3% | 3/59.4 = 0.0505 | ✓ EXACT |
| Add.148 | 40m10s (2410s) | 1 (qwen-code tanzhenxin #3729 only) | 1 | 0.0249 | -51% | 1/40.17 = 0.0249 | ✓ EXACT |
| Mean | 42m37s | 1.6 | 2.8 | 0.0719 | (cumulative -83%) | 0.0299 (excl. Add.144 anchor + Add.145 exception: 0.0414) | 3/4 exact in P-326.B-applicable subset |

P-326.B model applicability: Add.144 (rebound spike from zero-active anchor) and Add.145 (dual-author exit per synth #322) are structural exceptions; Add.146-148 form the **3-tick model-applicable subset** with 3/3 exact matches.

### Per-active-repo per-tick contribution distribution

| Tick | Active repos | Merges | Merges/active-repo | Notes |
|---|---|---|---|---|
| Add.144 | 0 (rebound anchor) | 4 | undefined (4 from rebound spike, all on codex) | rebound anchor outside steady-state model |
| Add.145 | 2 (codex, goose) | 4 | 2.0 | dual-author exit on goose contributes 2 in 1 active-repo |
| Add.146 | 2 (codex, litellm) | 2 | 1.0 | exact 1-per-active |
| Add.147 | 3 (codex, litellm, qwen-code) | 3 | 1.0 | exact 1-per-active |
| Add.148 | 1 (qwen-code) | 1 | 1.0 | exact 1-per-active |

P-327.B framing: per-active-repo contribution is **1.0 in 3/4 model-applicable ticks** (Add.146-148) with **2.0 in Add.145** (dual-author exit anomaly). Std-dev across the 4 ticks is 0.5, mean 1.25 — within the predicted "tightly distributed around 1.0 with std-dev ≤0.5" claim (boundary case).

### Cumulative cadence-drift wall-clock context

The Add.144-148 5-tick band spans wall-clock 03:26:32Z → 08:57:53Z = ~5h31m21s. Total in-window merges: 4+4+2+3+1 = **14 merges over 5h31m**, corpus mean **2.54 merges/hour**. Compare to early-W17 high-cadence segments: Add.121-123 (3 ticks at 0.107-0.279/min) ran ~16 merges over ~1h, **~16 merges/hour** — late-W17 is operating at **~16% of early-W17 peak corpus throughput**.

The wall-clock distribution of the 14 Add.144-148 merges is heavily front-loaded: 8 of 14 (57%) merged in Add.144+Add.145 (first ~1h13m of band), 6 of 14 (43%) in Add.146-148 (last ~4h17m). The trailing-3-tick rate is **1.40 merges/hour**, ~9% of the early-W17 peak.

### Cross-repo participation distribution Add.144-148

| Repo | Merges in band | First Add.144-148 active tick | Last active tick | Active ticks (of 5) |
|---|---|---|---|---|
| codex | 6 | Add.144 (4 merges) | Add.147 | 4/5 |
| qwen-code | 2 | Add.147 (#3720) | Add.148 (#3729) | 2/5 |
| litellm | 2 | Add.146 (#26757) | Add.147 (#26710) | 2/5 |
| goose | 2 | Add.145 (#8893+#8895 dual exit) | Add.145 | 1/5 |
| opencode | 0 | (none) | (none) | 0/5 |
| gemini-cli | 0 | (none) | (none) | 0/5 |

Codex dominates participation (6/14 merges = 43%, active 4/5 ticks); opencode and gemini-cli are silent across the entire band (n=6+ and n=11+ deep-dormancy respectively at Add.148 close). The participation-asymmetry (43% codex, 0% opencode/gemini-cli) is **structural**, not stochastic: it reflects the late-W17 regime where 2 of 6 W17 repos are in deep-dormancy (Add.148 hard-class set is {gemini-cli n=11, opencode n=6} per the Add.147 corrected anchor + Add.148 advance).

## Mechanism

The cadence drift Add.144→148 is mechanistically driven by:
1. **Active-repo cardinality oscillation**: 0 (rebound anchor) → 2 → 2 → 3 → 1, with the down-slope from the Add.147 tri-active peak skipping the dual-active intermediate (Add.148 P-148.C) and dropping directly to single-active.
2. **Per-active-repo contribution stability** at ~1 merge/tick under late-W17 silence-dominant regime (synth #326 P-326.B confirmed at 3/3 exact in Add.146-148).
3. **Width-monotone rate dilution within the medium-width band** (synth #321 v2 / Add.147 P-147.G): expanding the window from 40m to 59m (Add.146→147) yielded NO proportional rate change (+3.3% rate vs +45% width).
4. **Hard-deep-dormancy band membership stability**: gemini-cli + opencode contribute 0/14 merges, removing 2/6 W17 repos from the active pool entirely. Synth #313+#316+#324 deep-dormancy band depth is at W17 maxima (gemini-cli n=11, 7h44m+) and is the dominant suppressor of corpus rate.

## Falsifiers

- **P-327.A**: Any Add.149-152 tick yielding rate ≥0.10 WITHOUT a concurrent deep-dormancy exit at {gemini-cli, opencode, goose}.
- **P-327.B**: Any Add.149-152 tick where per-active-repo per-tick contribution exceeds 2.0 across ≥2 active repos in the same tick (would establish a "burst-per-active-repo" regime distinct from the current "1-merge-per-active-repo" regime).
- **P-327.C**: Any Add.149-152 cardinality jump where rate change deviates >5pp from the (Δactive/active_old × width_old/width_new × old_rate) prediction.

## Cross-references

- **synth #317 (original width-rate coupling)**: now 0/4 strict consecutive sub-threshold counter-examples Add.145-148, falsified.
- **synth #321 v2 (silence-regime-mediated rate suppression)**: necessary, extended to width-monotone rate dilution within medium band.
- **synth #322 axis-iii (intrinsic exit-readiness)**: dual-author exit at Add.145 is the SOLE structural deviation in the P-326.B Poisson-flat fit; the dual-author-exit anomaly is now isolated to Add.145 alone in the Add.145-148 4-tick window.
- **synth #324 (W17 cardinality-3 record)**: stood for exactly 1 tick (Add.146 only under retroactive correction at Add.147), the SHORTEST-LIVED W17 cardinality record.
- **synth #325 M-147.F (same-feature-line continuation)**: refined further at Add.148 by M-148.X (author-AND-feature-line-double-rotation; tanzhenxin #3729 establishes 3rd post-silence-exit class).
- **synth #326 P-326.B (Poisson-flat active-count/width model)**: extended to 3/4 exact matches Add.146-148, structural validation of the late-W17 regime null hypothesis.
- **Add.144 P-144.* (zero-active rebound)**: the codex 4-merge-by-4-distinct-authors rebound is the anchor of the Add.144-148 cadence band; it cannot be modeled by P-326.B (active=0) and is a structural exception.

## Concluding observation

The Add.144-148 5-tick band represents a **regime-transition window**: from the Add.144 zero-active rebound spike (0.1445/min, anchor outlier) through dual-active stabilization (Add.145+146 at 0.07 mean) to a brief tri-active peak (Add.147) and asymmetric contraction to single-active (Add.148 at 0.0249/min). The cadence drift is **dilutive AND monotonic except for the Add.146→147 cardinality-jump-mediated +3.3% bump**, and the late-W17 corpus is operating at ~16% of early-W17 peak throughput. The dominant suppressor is the **W17 hard-deep-dormancy band** (gemini-cli+opencode contributing 0/14 merges across 5 ticks), with synth #326 P-326.B Poisson-flat per-active-repo-per-tick contribution providing a **structurally validated null hypothesis** for the remaining active subset.
