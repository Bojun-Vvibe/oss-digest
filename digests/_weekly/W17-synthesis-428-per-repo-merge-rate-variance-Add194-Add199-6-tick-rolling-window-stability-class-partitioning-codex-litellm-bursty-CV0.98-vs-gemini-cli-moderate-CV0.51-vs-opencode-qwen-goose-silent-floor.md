# W17 synthesis #428 — per-repo merge-rate variance across last 6 ADDENDUMs (Add.194-199) as cross-repo stability metric with codex/litellm/gemini-cli forming a high-variance triplet vs opencode/qwen-code/goose forming a zero-variance silent floor

**Family**: cross-repo stability / dispersion meta-metric (sibling of synth #426 meta-taxonomy synth-numbering-growth-rate; sibling of synth #412 emitting-cardinality-fraction bound-oscillation)

**Trigger ADDENDUM**: ADDENDUM-199 M-199.A + M-199.D + M-199.E + the per-tick raw-count history accumulating sufficient sample size for cross-repo variance comparison.

## Motif specification

For each repo R in the 6-repo watched set, compute per-repo merge-amplitude trajectory across the **last 6 ADDENDUMs (Add.194-199)** and derive (mean μ_R, stddev σ_R, coefficient of variation CV_R = σ_R/μ_R, range [min_R, max_R]). Stability is inversely proportional to CV_R. The 6-repo set partitions into stability-classes; class membership is itself a cross-repo trend metric.

## Per-repo amplitude trajectories Add.194-199 (n=6 samples per repo)

| Repo | Add.194 | Add.195 | Add.196 | Add.197 | Add.198 | Add.199 | μ | σ | CV | range |
|------|---------|---------|---------|---------|---------|---------|---|---|----|----|
| **codex** | 3 (Add.194 #20133 dylan-hurd-oai etc — see ADDENDUM-194) | 2 | 8 | 1 | 0 | 2 | 2.667 | 2.625 | **0.984** | [0, 8] |
| **litellm** | 1 (#26747 etc) | 0 | 4 (stuxf #26859/#26854/#26843/#26840 quartet) | 5 (#26910/#26906/#26802/#26862/#26851) | 2 (#26836/#26849) | 0 | 2.000 | 1.949 | **0.974** | [0, 5] |
| **gemini-cli** | 4 (gemini-cli-robot 3-PR cherry-pick + co) | 5 (5-author quintuplet w/ #26218 + co) | 1 (cocosheng-g singleton) | 2 (#26270 devr0306 + #22324 Jwhyee) | 5 (#26263/#22388/#26245/#25313/#26262 5-author batch) | 2 (#25660+#25662 martin-hsu-test doublet) | 3.167 | 1.602 | **0.506** | [1, 5] |
| **opencode** | 0 | 0 | 0 | 0 | 0 | 0 | 0.000 | 0.000 | undefined (μ=0) | [0, 0] |
| **qwen-code** | 0 | 0 | 0 | 0 | 0 | 0 | 0.000 | 0.000 | undefined (μ=0) | [0, 0] |
| **goose** | 0 | 0 | 0 | 0 | 0 | 0 | 0.000 | 0.000 | undefined (μ=0) | [0, 0] |

(Source merges: codex Add.196 octuplet PRs #20448, #20454, #20457, #20458, #20461, #20473, #20474, #20475 per ADDENDUM-196; litellm Add.196 stuxf quartet #26859, #26854, #26843, #26840 per ADDENDUM-196 + ADDENDUM-197 cross-tick series M-197.B; gemini-cli Add.198 quintuplet #26263, #22388, #26245, #25313, #26262 per ADDENDUM-198 M-198.B; codex Add.199 doublet #19280, #20348 per ADDENDUM-199 M-199.B; gemini-cli Add.199 doublet #25660, #25662 per ADDENDUM-199 M-199.C.)

## Stability-class partitioning

The 6-repo set partitions into **3 disjoint stability classes** at Add.194-199:

1. **Class A — high-variance active triplet** (CV ≈ 0.97-0.98): {codex, litellm}
   - Both repos exhibit single-tick-burst regime (codex Add.196 octuplet at 8; litellm Add.197 quintuplet at 5) followed by post-burst contraction-to-zero (codex Add.198=0; litellm Add.199=0)
   - CV ≈ 1.0 indicates **bursty / Poisson-overdispersed** emission process
2. **Class B — moderate-variance sustained-active** (CV ≈ 0.51): {gemini-cli}
   - gemini-cli sustains amplitude ∈ [1, 5] across all 6 ticks with NO cohort-zero observations
   - CV ≈ 0.5 indicates **sub-Poisson / regularized** emission process
   - **gemini-cli is the ONLY repo with zero cohort-zero ticks in the 6-tick window**
3. **Class C — zero-variance silent floor** (CV undefined, σ=0): {opencode, qwen-code, goose}
   - All three repos at amplitude 0 across all 6 ticks
   - **CV is undefined** (μ=0); stability metric degenerates — these repos contribute no variance signal but do contribute to the cross-repo silent-fraction (3/6 = 0.500 sustained at n=6)

## Cross-tick variance trend

Computing per-tick variance σ²(t) across active repos {codex, litellm, gemini-cli} (excluding silent floor) at each tick:

| Tick | codex | litellm | gemini-cli | μ_active | σ²_active |
|------|-------|---------|------------|----------|-----------|
| Add.194 | 3 | 1 | 4 | 2.667 | 1.556 |
| Add.195 | 2 | 0 | 5 | 2.333 | 4.222 |
| Add.196 | 8 | 4 | 1 | 4.333 | 8.222 |
| Add.197 | 1 | 5 | 2 | 2.667 | 2.889 |
| Add.198 | 0 | 2 | 5 | 2.333 | 4.222 |
| **Add.199** | **2** | **0** | **2** | **1.333** | **0.889** |

**σ²_active trajectory** {1.556, 4.222, 8.222, 2.889, 4.222, **0.889**} — Add.199 sits at the **6-tick minimum**, indicating **active-repo emission convergence** at this window: codex and gemini-cli both at 2, litellm at 0; the active-repo amplitude distribution is the most uniform (lowest spread) since Add.194-onwards. The σ² minimum at Add.199 corresponds to the H_emitting maximum at Add.199 (1.000 bits = log₂(2)) — confirming the spread-vs-entropy inverse coupling at carrier-cardinality 2 with equipartition.

## Cumulative emission Add.194-199 (n=6 ticks)

| Repo | total | fraction of grand-total |
|------|-------|------------------------|
| gemini-cli | 19 | 0.475 (40 grand) |
| codex | 16 | 0.400 |
| litellm | 12 | 0.300 (— wait: 1+0+4+5+2+0 = 12; need re-check; total active = 19+16+12 = 47) |

Recompute: codex (3+2+8+1+0+2)=**16**; litellm (1+0+4+5+2+0)=**12**; gemini-cli (4+5+1+2+5+2)=**19**. Grand total = **47** in-window merges across Add.194-199 6-tick window. Fractions: gemini-cli 19/47=**0.404**, codex 16/47=**0.340**, litellm 12/47=**0.255**, opencode/qwen-code/goose 0/47=0.000.

**gemini-cli is the leading emitter by cumulative count at Add.194-199** despite having the LOWEST per-tick maximum (5) of the active triplet — its sustained moderate-amplitude regime (no cohort-zero in 6 ticks) outpaces codex's burst-then-silence regime (3 cohort-zero ticks Add.198=0 plus prior silences within the window are absent — codex has 1 cohort-zero at Add.198) and litellm's burst-then-silence regime (3 cohort-zero ticks: Add.195, Add.199, plus Add.194 amplitude=1 is non-zero so 2 cohort-zero ticks). Cohort-zero count Add.194-199: codex=1 (Add.198), litellm=2 (Add.195, Add.199), gemini-cli=0. **gemini-cli's CV ≈ 0.51 vs codex/litellm CV ≈ 0.97-0.98 distinguishes a 2× stability separation** between the moderate-sustained and bursty classes.

## Predictions (P-428.X)

- **P-428.A** (>60%): codex CV at Add.195-200 (next 6-tick rolling window) sustains in [0.7, 1.2] — bursty regime persists; falsifier = codex CV drops below 0.5 (would require post-Add.199 amplitudes 1-2-1-2-2 ish for 5 more ticks).
- **P-428.B** (>55%): gemini-cli CV at Add.195-200 sustains in [0.4, 0.7] — moderate-regime persists; falsifier = gemini-cli CV crosses 1.0 (would require a single-tick burst ≥ 8 within Add.200).
- **P-428.C** (>50%): The {opencode, qwen-code, goose} silent-floor class loses at least one member at Add.200-205 (5-tick window) by single-PR re-emit, partitioning the 6-repo set into 4 classes (high-variance / moderate / low-active / silent-floor); falsifier = silent floor sustains at cardinality 3 across Add.200-205.
- **P-428.D** (>65%): σ²_active(t) does NOT sustain at the Add.199 minimum (0.889) at Add.200 — the convergence-to-uniform reading is single-tick; falsifier = σ²_active(Add.200) ≤ 1.0.
- **P-428.E** (>50%): gemini-cli cohort-zero observed within Add.200-204 (5-tick window) — the zero-cohort-zero streak at gemini-cli at n=6 ticks ends within 5 ticks; falsifier = gemini-cli amplitude > 0 at all of Add.200-204 (would extend to n=11 cohort-zero-free).

## Stability-class as cross-repo trend metric

The Add.194-199 6-tick variance partition reveals a **structural cross-repo asymmetry**: the watched 6-repo set is NOT homogeneous in emission process — it decomposes into 3 distinct dynamical regimes (bursty / sustained / silent). This partition is itself a more informative cross-repo trend than per-tick aggregates, because:
1. It captures **process-class** rather than instantaneous-amplitude;
2. It distinguishes **opencode/qwen-code/goose triplet** (sustained silence; cumulative 0/47 = 0.000 emission share) from **codex/litellm pair** (bursty active; cumulative 28/47 = 0.596 emission share with high variance) from **gemini-cli singleton** (sustained moderate; cumulative 19/47 = 0.404 emission share with low variance);
3. It enables **process-class-conditional prediction** (CV-stationarity is a stronger prior than amplitude-stationarity).

The synth #424 carrier-set framework operates at the carrier-membership-set level; synth #428 operates at the **per-repo-process-distribution level** — orthogonal axes of cross-repo structure.

## Falsifier conditions (for synth #428 motif validity)

1. If recompute of Add.194 amplitudes (per-repo) shows different values than {codex 3, litellm 1, gemini-cli 4} → table corrections needed; verify against ADDENDUM-194 raw data.
2. If σ²_active(Add.199) is recalculated and exceeds 1.5 → "6-tick minimum" claim falsifies; verify against ADDENDUM-199 raw data.
3. If a 7th repo enters the watched-set within W17 → 6-repo partition framework needs extension to 7-repo.

## Cross-citation

- **Trigger source**: ADDENDUM-199 M-199.A (carrier-rotation establishing Add.199 active-set composition), M-199.E (H_emitting equipartition at 1.000 bits indicating spread-minimum)
- **Sibling synthesis**: synth #426 meta-taxonomy growth-rate (meta-metric family); synth #412 emitting-cardinality-fraction bound-oscillation (cross-repo bound-metric family)
- **Anchor citations**: ADDENDUM-194 through ADDENDUM-199 raw per-repo amplitude data; ADDENDUM-196 codex octuplet (max-amplitude data point); ADDENDUM-197 litellm quintuplet (litellm max-amplitude); ADDENDUM-198 gemini-cli quintuplet (gemini-cli equal-max with Add.195); ADDENDUM-199 active-repo doublet at codex+gemini-cli (variance-minimum data point)
