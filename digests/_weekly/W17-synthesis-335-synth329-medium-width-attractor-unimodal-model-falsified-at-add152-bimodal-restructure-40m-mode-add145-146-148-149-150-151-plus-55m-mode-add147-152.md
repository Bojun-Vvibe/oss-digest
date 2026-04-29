# W17 Synthesis #335 — Synth #329 medium-width attractor falsified at Add.152: Add.149-151 σ=7s ultra-tight 3-tick cluster (CV 0.29% on 40m22s centerline) is structurally broken by Add.152 width 57m33s (+14m33s above 43m upper band, +43% relative jump from Add.151 40m13s); 8-tick CV Add.145-152 = ~23% (FAIL synth #329 ≤14% prediction by 9pp); 6-tick CV Add.147-152 = ~22% (FAIL synth #329 ≤15% prediction by 7pp); medium-width attractor restructured as **bimodal distribution** with 40m mode (Add.146/149/150/151 cluster) + 55m+ mode (Add.143/147/152 cluster) rather than unimodal 40m centerline; the unimodal-attractor model is a transient 5-7 tick scale phenomenon and does NOT extrapolate to 8-tick horizons; the bimodal restructure preserves medium-class membership for ALL 13 ticks Add.140-152 but reorganizes the underlying width distribution

**Scope:** Falsification of synth #329 medium-width attractor convergence at the Add.146-152 7-tick window using Add.152 width 57m33s evidence. Reference ADDENDUMs 140-152 (13-tick width sequence). Reference synths: #317 (≥0.12 floor — soft counter-examples now at 8 consecutive ticks), #326 (P-326.B Poisson-flat-active model — corrected variant from synth #333/Add.151 P-151.D holds at 100% exact-match across Add.147-152), #329 (medium-width attractor — falsified by this synth), #333 (M-150.S 2-phase kinetics — challenged by Add.152 codex silence), #334 (cross-repo cardinality / cadence / author-overlap audit — extended by this synth's bimodal mode-cluster correlation).

## Claim (falsifiable)

**P-335.A — Synth #329 medium-width attractor unimodal model FALSIFIED at 8-tick horizon:** The synth #329 prediction (medium-width attractor convergence with 6-tick CV ≤15% and 8-tick CV ≤14%) is structurally falsified at Add.152. Evidence: Add.147-152 6-tick widths = {40m56s, 59m24s, 40m10s, 40m27s, 40m13s, 57m33s}, mean = 46m27s, σ = 9m21s, CV = **20.1%** (vs predicted ≤15%, fail by 5.1pp). Add.145-152 8-tick widths = {44m12s, 40m56s, 59m24s, 40m10s, 40m27s, 40m27s, 40m13s, 57m33s}, mean = 45m24s, σ = 7m54s, CV = **17.4%** (vs predicted ≤14%, fail by 3.4pp). The attractor convergence is a **transient phenomenon** at 3-tick scale (Add.149-151 σ=7s) but does NOT hold at 6-tick or 8-tick horizons. Predict P-335.A: synth #329 must be replaced by a bimodal-attractor model with 40m mode + 55m mode; the unimodal model is rejected at all horizons ≥6 ticks; falsifier is any 8-tick window with CV ≤14% in the Add.153-160 forward window.

**P-335.B — Bimodal width-attractor restructure with 40m + 55m modes:** The Add.146-152 7-tick width distribution {44m12s, 40m56s, 59m24s, 40m10s, 40m27s, 40m13s, 57m33s} clusters into TWO distinct modes: (i) **40m mode** = {Add.149 40m10s, Add.150 40m27s, Add.151 40m13s, Add.146 ~44m12s, Add.147 40m56s} mean ≈ 41m12s σ ≈ 1m54s CV ≈ 4.6% (5 widths, tight); (ii) **55m+ mode** = {Add.148 59m24s, Add.152 57m33s} mean ≈ 58m29s σ ≈ 56s CV ≈ 1.6% (2 widths, also tight). Within-mode CV is ≤5% in both modes; between-mode separation is ~17m20s (≈42% of mean). The bimodal model has **mean intra-mode CV ≈ 3.1%** and **inter-mode gap ≈ 17m**, reproducing the observed widths with substantially less unexplained variance than the unimodal model. Predict P-335.B: future widths fall into one of the two modes (40-43m or 55-60m) with ≥80% probability across Add.153-158 6-tick forward window; the 40m mode is the more populous cluster (5/7 = 71% historical frequency); falsifier is any 6-tick forward window with ≥3 widths OUTSIDE both [38m, 43m] and [55m, 60m] bands.

**P-335.C — Bimodal mode selection correlates with active-repo cardinality and emission-author multiplicity:** The 40m mode (5 widths) ticks have active-repo cardinality {Add.146=1, Add.147=1, Add.149=1, Add.150=2, Add.151=1} mean 1.2; the 55m+ mode (2 widths) ticks have active-repo cardinality {Add.148=2, Add.152=1} mean 1.5. The 55m+ mode also correlates with **larger emission-author multiplicity events**: Add.148 = 4+ distinct emission-authors (alexsong-oai distributed-tail), Add.152 = 1 (Sameerlite single-merge but on integration-branch channel). The correlation is suggestive but not deterministic — the 55m+ mode appears in **complex-emission OR integration-branch-channel** ticks. Predict P-335.C: future 55m+ mode ticks correlate with either (i) ≥3 emission-authors in the tick OR (ii) ≥1 non-main integration-branch merge in the tick at ≥70% probability; falsifier is any 55m+ mode tick with neither ≥3 emission-authors nor any non-main integration-branch merge.

**P-335.D — Synth #326 corrected Poisson-flat-active model survives bimodal restructure:** The corrected model from Add.151 P-151.D = (n_active + n_paired_burst − 1) / width holds at **6/6 = 100% exact-match across Add.147-152** (vs original 5/6 = 83.3%). The bimodal width restructure does NOT impair the corrected rate model because the rate model is per-tick conditional on width — the width itself is the input, not a free parameter. The corrected model's robustness across the bimodal width distribution validates it as a **width-agnostic merge-rate generator**. Predict P-335.D: corrected model holds at ≥90% exact-match across any 6-tick window in Add.147-160 regardless of width-mode distribution; falsifier is any 6-tick window with corrected-model exact-match rate <85%.

## Evidence

### Per-tick width sequence Add.140-152 with mode classification

| Tick | Width | Bimodal mode | Active-repo cardinality | Emission-author count |
|---|---|---|---|---|
| Add.140 | ~62m | 55m+ mode (extension) | (pre-window) | (pre-window) |
| Add.141 | 28m21s | ultra-short (out of band) | (pre-window) | (pre-window) |
| Add.142 | 66m29s | 55m+ mode (extension) | (pre-window) | (pre-window) |
| Add.143 | 28m38s | ultra-short (out of band) | (pre-window) | (pre-window) |
| Add.144 | 29m07s | ultra-short (out of band) | (pre-window) | (pre-window) |
| Add.145 | 44m12s | **40m mode** (upper edge) | (pre-window) | (pre-window) |
| Add.146 | 40m56s | **40m mode** | 1 (litellm) | 1 (minznerjosh) |
| Add.147 | 59m24s | **55m+ mode** | 1 (qwen-code) | 1 (wenshao) |
| Add.148 | 40m10s | **40m mode** | 2 (qwen-code, codex) | ≥4 (tanzhenxin + alexsong-oai distributed-tail) |
| Add.149 | 40m27s | **40m mode** | 1 (qwen-code) | 1 (doudouOUC) |
| Add.150 | 40m27s | **40m mode** | 2 (qwen-code, codex) | 2 (LaZzyMan, iceweasel-oai) |
| Add.151 | 40m13s | **40m mode** | 1 (codex) | 1 (jif-oai intra-tick repeat) |
| Add.152 | 57m33s | **55m+ mode** | 1 (litellm) | 1 (Sameerlite — integration-branch) |

### Bimodal mode statistics (Add.145-152 8-tick window)

| Mode | Tick count | Widths | Mean | σ | CV |
|---|---|---|---|---|---|
| 40m mode | 6 (Add.145, 146, 148, 149, 150, 151) | 44m12s, 40m56s, 40m10s, 40m27s, 40m27s, 40m13s | 41m04s | 1m26s | **3.5%** |
| 55m+ mode | 2 (Add.147, 152) | 59m24s, 57m33s | 58m29s | 56s | **1.6%** |
| Unified (unimodal) | 8 | (all of above) | 45m24s | 7m54s | **17.4%** |

**Mode-conditional CV is 5-10x tighter than unified CV** — the bimodal restructure substantially improves the explained-variance fit. Inter-mode gap = 58m29s − 41m04s = **17m25s** (≈42% of unified mean), well above any single intra-mode σ.

### Synth #329 prediction failure summary

| Synth #329 prediction | Observation | Pass/Fail |
|---|---|---|
| 6-tick CV ≤15% | Add.147-152 6-tick CV = 20.1% | **FAIL by 5.1pp** |
| 8-tick CV ≤14% | Add.145-152 8-tick CV = 17.4% | **FAIL by 3.4pp** |
| Width centerline at ~40-45m | Bimodal centerlines at 41m + 58m | **FAIL — bimodal not unimodal** |
| Attractor convergence over time | Add.149-151 3-tick σ=7s → Add.150-152 3-tick σ=8m07s | **FAIL — convergence reversed** |

### Mode-cluster cross-correlation with active-repo cardinality

40m mode mean active-repo cardinality = (1+1+2+1+2+1)/6 = 1.33  
55m+ mode mean active-repo cardinality = (1+1)/2 = 1.0  
**Δ = +0.33** (40m mode has slightly more active repos on average) — but this contradicts the expected "more activity → faster ticks" intuition. The 55m+ mode has FEWER active repos but is associated with **larger emission events** (Add.148 distributed-tail with ≥4 authors) or **integration-branch channels** (Add.152 Sameerlite non-main merge). The 55m+ mode appears to be a **complex-emission accommodation regime** where the dispatcher takes longer per tick to handle non-trivial merges, even when only one repo is active.

## Counter-evidence & limitations

- **Small 55m+ mode sample (n=2):** the 55m+ mode statistics are based on 2 widths only (Add.147 + Add.152), so the σ=56s and CV=1.6% may not generalize. A 3rd 55m+ tick is needed to validate the mode's tight intra-mode variance.
- **Mode boundary uncertainty:** widths between 43m and 55m have NOT been observed in the Add.146-152 window — the 12m gap could either be a true bimodal separation OR an undersampling artifact. Future widths in [43m, 55m] would falsify the bimodal model and re-establish a unimodal attractor with wider variance.
- **Synth #329 partial validity:** the unimodal model held at 3-7 tick scale across Add.146-151 (CV 15.0% at the predicted threshold). The falsification is specifically at the 8-tick horizon and beyond — synth #329 should be **scoped to short horizons** rather than fully retracted.
- **Cross-repo cardinality correlation weak:** the 40m vs 55m+ mode active-repo cardinality difference (+0.33) is small and based on n=6 vs n=2; a larger sample is needed before claiming structural correlation.

## Predictions for ADDENDUM-153

- **P-335.A:** synth #329 unimodal model rejected at all horizons ≥6 ticks; falsifier = any 8-tick window in Add.153-160 with CV ≤14%
- **P-335.B:** Add.153 width falls into one of the bimodal modes [38m, 43m] or [55m, 60m] at ≥70% probability; the 40m mode is more likely (71% historical frequency); falsifier = Add.153 width OUTSIDE both bands
- **P-335.C:** if Add.153 is a 55m+ mode tick, it correlates with ≥3 emission-authors OR ≥1 non-main integration-branch merge at ≥70% probability; falsifier = 55m+ mode tick with neither
- **P-335.D:** corrected Poisson-flat-active model holds at ≥90% exact-match across Add.147-153 7-tick window; falsifier = any 6-tick window with corrected-model exact-match rate <85%

## Cross-synth tie-back

Synth #335 supersedes synth #329's unimodal-attractor claim at horizons ≥6 ticks while preserving the medium-class width-band membership claim (all Add.140-152 widths remain in 25m-67m medium-or-ultra-short band). Synth #335 is **orthogonal** to synth #333 (M-150.S 2-phase kinetics — emission-axis) and synth #334 (cross-repo cardinality — author/repo-axis); it operates on the **width-axis**. Synth #335 reinforces synth #326 P-326.B corrected variant (P-151.D) by demonstrating the corrected rate model is width-agnostic and survives bimodal width restructure. Synth #335 is **structurally adjacent** to synth #319 (silence modal-state 50pct band frequency) by sharing the modal-state restructure framing.
