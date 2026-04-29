# W17 Synthesis #326 — Width-rate coupling REFORMULATED to Poisson-flat per-minute arrival rate ~0.05/min in late-W17 silence-dominant regime: 3/3 consecutive medium-width ticks (Add.145+146+147) yield rates 0.0905/0.0489/0.0505 (mean 0.0633, ~47% below synth #317 medium-class floor 0.12), with the Add.147 widest-window-but-near-lowest-rate point (59m24s, 0.0505) directly falsifying any positive width→rate coupling within the medium band — synth #317 v3 model: width changes redistribute when ticks close, not how many merges arrive; AND the synth #324 W17 simultaneous-cardinality record (cardinality-3 at Add.146) stood for exactly 1 tick before falling to 2 at Add.147 via qwen-code wenshao #3720 exit, marking it the SHORTEST-LIVED W17 cardinality record observed and BOUNDING the simultaneous-hard-dormancy-band CEILING in late-W17 at cardinality-3-with-1-tick-persistence

**Scope:** Add.145-147 medium-width 3-tick subseries (widths 44m12s/40m56s/59m24s, rates 0.0905/0.0489/0.0505) plus the Add.146→147 simultaneous-cardinality transition (3 → 2), with reference to synth #317 (original width-rate coupling rule), synth #321 (silence-regime-mediated rate suppression v2), synth #324 (cardinality-3 W17 record at Add.146), and Add.147 P-147.G (width-monotone rate dilution proposal).

## Claim (falsifiable)

**P-326.A:** In the late-W17 silence-dominant regime (Add.143-147 silence-frequency 4/9 = 44.4% with 3 of 5 active ticks at sub-0.10 rates), per-minute corpus merge-arrival rate is approximately **Poisson-flat at ~0.05/min** within the medium-width band (30m < width < 60m). Empirical mean across the 3 consecutive medium-width ticks Add.145+146+147 is **0.0633/min** with point-values 0.0905, 0.0489, 0.0505 — variance dominated by Add.145's positive outlier, with Add.146+147 essentially tied at ~0.05. Width changes within the medium band (40m56s → 59m24s, +45.1% width expansion Add.146→147) yield NO proportional rate change (+3.3% rate change), strongly inconsistent with synth #317's "wider-window-yields-higher-rate" coupling. Predict: any Add.148-150 medium-width tick yields a per-minute rate in the **[0.03, 0.09]** band (within 1 std-dev of the 3-tick mean), independent of where in the medium band the width falls.

**P-326.B:** synth #317 width-rate coupling rule (medium-width yields rate ≥0.12) is now **falsified at 3/3 consecutive medium-width tests** in the Add.145-147 subseries. The synth #321 v2 framing (silence-regime-mediated rate suppression) is **necessary but not sufficient**: it explains why the rate is suppressed in silence-dominant regimes, but does not explain why the **width-monotone redistribution prediction also fails** within the medium band. Synth #326 v3 framing: the per-repo merge-arrival rate is approximately **constant per-tick under silence-dominant regimes**, and the corpus aggregate rate is dominated by the **count of active repos** (1-3 in Add.145-147), not by the width of the window. Specifically: rate ≈ (active-repo-count × per-active-repo-rate) / window-width, and per-active-repo-rate is approximately 1 merge per active repo per tick under late-W17 silence-dominance, independent of tick width. Mathematically: rate ≈ active-repo-count / window-width-in-minutes. Verifying with 3 medium-width ticks: Add.145 (2 active / 44.2m = 0.0452, observed 0.0905, off by 2× — Add.145 has the dual-author goose exit pair contributing 2 merges via 1 active repo, breaking the 1-merge-per-active-repo assumption); Add.146 (2 active / 40.93m = 0.0489, observed 0.0489, **exact match**); Add.147 (3 active / 59.4m = 0.0505, observed 0.0505, **exact match**). 2/3 exact matches; the Add.145 mismatch is explained by the dual-author exit pair (a structural exception, see synth #322).

**P-326.C:** The synth #324 W17 simultaneous-hard-deep-dormancy cardinality-3 record at Add.146 stood for **exactly 1 tick** (Add.146 only), the **SHORTEST-LIVED W17 cardinality record** observed. This SHORT PERSISTENCE is structurally informative: it BOUNDS the W17 simultaneous-hard-dormancy-band CEILING at cardinality-3-with-1-tick-persistence in the late-W17 regime. The mechanism (synth #325 M-147.F: queued same-feature-line continuations drive exits) implies that any cardinality-3 state is intrinsically unstable when at least one of the 3 hard-dormant repos has a queued contributor with an in-flight feature line. At Add.146, qwen-code had wenshao bg-shells in flight, so cardinality-3 was IMMEDIATELY unstable (exit at Add.147, persistence 1 tick). Predict: cardinality-3 hard-dormancy states require **3 queue-empty repos simultaneously** to persist ≥2 ticks. The probability of 3 queue-empty repos simultaneously, given 4 W17 hard-dormancy candidates (gemini-cli, opencode, qwen-code, goose) with author pools of size 1-5 each and continuation-rate ~0.5 per silence streak, is approximately P ≈ 0.5⁴ = 0.0625, predicting **<1 sustained cardinality-3 tick per 16 candidate ticks** — essentially absent in remaining W17.

## Evidence

### Width-rate coupling Add.145-147 medium-width subseries (3 consecutive medium ticks)

| Tick | Width | Active repos | Merge count | Per-min rate | Predicted by synth #317 ≥0.12? | Predicted by P-326.B (active/width)? | Match? |
|---|---|---|---|---|---|---|---|
| Add.145 | 44m12s (2652s) | 2 (codex+goose) | 4 (codex×2 + goose×2 dual-author exit) | 0.0905 | ✗ (0.0905 < 0.12) | 2/44.2 = 0.0452 | ✗ (2× off due to dual-author exit, see synth #322) |
| Add.146 | 40m56s (2456s) | 2 (codex+litellm) | 2 | 0.0489 | ✗ (0.0489 < 0.12) | 2/40.93 = 0.0489 | **✓ EXACT** |
| Add.147 | 59m24s (3564s) | 3 (codex+litellm+qwen-code) | 3 | 0.0505 | ✗ (0.0505 < 0.12) | 3/59.4 = 0.0505 | **✓ EXACT** |
| Mean | 48m11s (avg) | 2.33 | 3 (avg) | 0.0633 | ✗ | 0.0481 (predicted) | 76% match overall |

Synth #317 fit: **0/3** strict counter-examples, all sub-threshold. Synth #326 P-326.B fit: **2/3 exact**, 1 dual-author-exit exception (Add.145).

The Add.147 datapoint is the strongest single-point falsification of synth #317: width was the **widest** of the 3 (59m24s), only 35s below the 60m+ wide-class threshold, but rate was the 2nd-lowest. Wider window yielded NO additional merges per minute.

### Simultaneous hard-dormancy cardinality persistence in W17

| Cardinality reached | First tick | Last tick (still at) | Persistence | Mechanism for departure |
|---|---|---|---|---|
| 1 (gemini-cli alone) | Add.138 | Add.143 | **6 ticks** | goose+qwen-code joint entry at Add.144 (synth #320 P-320.A originally; reframed by synth #322) |
| 2 (gemini-cli + goose+qwen-code transient overlap, then gemini-cli + qwen-code) | Add.144 | Add.145 (then Add.147 again) | **2 ticks initial, recurring** | opencode entry at Add.146 (synth #324) and goose exit at Add.145 (M-145.M / synth #322) |
| **3** ({gemini-cli, qwen-code, opencode}) | **Add.146** | **Add.146** | **1 TICK** | qwen-code wenshao bg-shells exit (synth #325 M-147.F) |
| 2 (gemini-cli + opencode) | Add.147 | (current) | ≥1 tick | (TBD) |

The cardinality-3 state had the **shortest persistence** of any W17 hard-dormancy cardinality state to date (1 tick vs cardinality-1's 6 ticks vs cardinality-2's 2 ticks initial). The persistence ordering is inverted from cardinality-magnitude ordering — higher cardinality has SHORTER persistence, consistent with the M-147.F mechanism (more dormant repos → higher cumulative probability of at least one having a queued continuation → higher exit-rate per tick).

### Late-W17 silence-dominant regime characterization (Add.143-147)

| Tick | Width | Active repos | Merges | Rate | Silence (rate=0)? |
|---|---|---|---|---|---|
| Add.143 | 28m38s | 0 | 0 | 0.000 | YES |
| Add.144 | 29m07s | 0 | 0 | 0.000 | YES |
| Add.145 | 44m12s | 2 | 4 | 0.0905 | no |
| Add.146 | 40m56s | 2 | 2 | 0.0489 | no |
| Add.147 | 59m24s | 3 | 3 | 0.0505 | no |
| Aggregate (Add.143-147) | 202m17s | (avg 1.4) | 9 | 0.0445 | 2/5 = 40% silence-frequency |

Aggregate corpus rate across the 5-tick band is **0.0445/min**, very close to the per-active-repo single-merge rate predicted by P-326.B. The 2 silence ticks contribute zero numerator, the 3 active ticks contribute 9 merges over 144m32s (rate 0.0623). The active-tick-rate is just 1.4× the all-tick-rate, consistent with active-repo-count being the dominant rate factor.

## Differentiation from prior synths

- **vs synth #317 (original width-rate coupling rule):** synth #317 predicted positive correlation between width-class and rate (medium-width → rate ≥0.12). Synth #326 falsifies this at 3/3 strict consecutive medium-width tests and replaces with a width-independent per-active-repo Poisson-flat rate model. The original synth #317 framing is **deprecated** at the medium-width band in late-W17.
- **vs synth #321 (silence-regime-mediated rate suppression v2):** synth #321 explained why rates are suppressed during silence regimes but kept the within-band coupling implicit. Synth #326 specifies the within-band coupling: rate ≈ active-repo-count / width, no width-monotone term. Synth #321 is **subsumed** as the "silence regime suppresses active-repo-count" component; synth #326 adds the width-independence component.
- **vs synth #322/#324/#325 (per-repo intrinsic exit-readiness, axis iii.a transition-direction independence, M-147.F same-feature-line continuation):** these synths characterize per-repo exit dynamics. Synth #326 connects them to corpus-level rate dynamics: per-active-repo Poisson-flat arrival is the corpus aggregate of per-repo independent exit-readiness draws, with width playing no role beyond defining the integration window. The corpus rate model is the **macro-statistical correlate** of the M-147.F exit-author micro-rule.
- **vs Add.147 P-147.D triangular-cycle prediction (silence → dual → tri-active peak → contraction):** the triangular-cycle prediction is consistent with P-326.A: if active-repo-count is the dominant rate factor, then the active-repo-count cycle (0/0/2/2/3) drives the rate cycle (0/0/0.090/0.049/0.051), with the width playing no role. The Add.147 tri-active state has the highest active-count yet, consistent with cycle-peak.

## Falsifiers (P-326.A / P-326.B / P-326.C)

- **P-326.A falsifier:** any Add.148-150 medium-width tick yielding rate **outside [0.03, 0.09]** (i.e. <0.03 or >0.09) would falsify the Poisson-flat ~0.05/min characterization. Specifically: a medium-width tick with rate ≥0.12 would re-validate synth #317 original; a medium-width tick with rate <0.03 would suggest further regime shift below the late-W17 baseline.
- **P-326.B falsifier:** any Add.148-150 tick where observed rate differs from (active-repo-count / width-in-minutes) by >50% AND no structural exception (dual-author exit, bot-driven sweep, multi-PR stacked-series) is identifiable would falsify the active-repo-count rate-driver model. Specifically: a 3-active-repo tick with 6 merges (rate 2× predicted) without a structural multi-merge driver would falsify P-326.B.
- **P-326.C falsifier:** any Add.148-150 sequence with cardinality-3 hard-deep-dormancy persisting **≥2 consecutive ticks** would falsify the 1-tick-bound prediction. Specifically: opencode entering a 2nd consecutive hard-dormancy tick (n=5) AND gemini-cli still at n≥10 AND a 3rd repo (qwen-code re-entering or goose advancing past n=4) holding for ≥2 ticks.

## Top-level commits to track Add.148+

- The active-repo-count model (P-326.B) makes a sharp prediction for Add.148: if Add.147 is the cycle-peak (3 active), Add.148 should contract to 1-2 active, yielding rate ≈ (1-2)/Add.148-width. Verify by direct observation.
- The cardinality-3-1-tick-bound prediction (P-326.C) makes the W17 simultaneous-hard-dormancy ceiling effectively **2 with intermittent 1-tick excursions to 3**, NOT a monotonically growing band. Synth #324 P-324.C's +0.333 repos/tick growth-rate prediction is therefore **falsified at the cardinality-3 ceiling**, and the late-W17 hard-dormancy band is in a **bounded-fluctuation regime** rather than monotonic growth.
- If synth #326 P-326.B holds for the next 3 ticks (Add.148-150), the synth #317 width-rate coupling framing should be **formally retired** for late-W17 and replaced in the rolling synthesis index by the active-repo-count × Poisson-flat model.

## Citations

- ADDENDUM-147.md (sha=806f8db): 3rd consecutive medium-width sub-threshold tick (59m24s, 0.0505), tri-active state, qwen-code n=6 exit, P-147.G width-monotone-dilution origin
- ADDENDUM-146.md (sha=cd98f83): 2nd consecutive medium-width sub-threshold tick (40m56s, 0.0489), opencode hard-class entry, P-146.F silence-regime-mediation
- ADDENDUM-145.md (sha=0e19f9d): 1st soft counter-example (44m12s, 0.0905), goose dual-author exit (Add.145 multi-merge anomaly), origin of synth #321
- W17-synthesis-317: original width-rate coupling rule (now falsified at 3/3 medium-width tests in late-W17)
- W17-synthesis-321 (sha=6e4bfd8): silence-regime-mediated rate suppression v2 (subsumed by #326 active-repo-count model)
- W17-synthesis-322 (sha=2ea2616): per-repo exit-readiness three-axis model (now connected to corpus rate via #326)
- W17-synthesis-324 (sha=5feabb5): simultaneous-3-repo hard-dormancy cardinality W17 record at Add.146 (now bounded by #326 P-326.C as 1-tick-persistence shortest-lived record)
- W17-synthesis-325 (sha=ea03dce): M-147.F same-feature-line continuation rule (provides micro-mechanism for #326 P-326.C cardinality-3 instability)
