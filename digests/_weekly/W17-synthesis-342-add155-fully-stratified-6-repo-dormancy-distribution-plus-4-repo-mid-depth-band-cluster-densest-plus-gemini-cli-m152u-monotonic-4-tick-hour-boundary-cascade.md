# W17 synthesis #342 — Add.155 establishes fully-stratified 6-repo dormancy distribution (every tracked repo in distinct dormancy band) + 4-repo mid-depth-band cluster (codex + qwen-code + goose + litellm in 2h-6h) DENSEST in Add.119-155 + gemini-cli M-152.U ULTRA-DEEP class monotonic 4-tick hour-boundary cascade (10h Add.152, 11h Add.153, 12h Add.154, 13h Add.155) — refines synth #324 hard-deep-dormancy taxonomy and synth #336 M-152.U class

## Claim

At Add.155 close (sha pending, 14:14:51Z), the 6 tracked repos sit in **6 distinct dormancy bands** — the **first fully-stratified 6-repo dormancy configuration** observed in the Add.119-155 37-tick band. Concurrently, the **mid-depth-dormancy band (2h-6h) clusters 4 repos** (codex + qwen-code + goose + litellm), the **densest mid-depth-band cluster** observed in the entire 37-tick observation window. And **gemini-cli completes a monotonic 4-tick hour-boundary cascade** through the M-152.U ULTRA-DEEP class (10h crossing at Add.152, 11h at Add.153, 12h at Add.154, 13h at Add.155), the longest unbroken hour-boundary cascade in W17. These three structural facts — full stratification + mid-depth densening + ULTRA-DEEP cascade — collectively establish a **steady-state silence-regime kinetics** that refines synth #324 hard-deep-dormancy taxonomy with explicit band-density measurements and refines synth #336 M-152.U class with cascade-monotonicity property.

## Evidence (cited specific repos + depths + SHAs at Add.155 close)

| Repo | Anchor SHA | Anchor merge time | Depth at Add.155 close | Dormancy band | n (silence ticks) |
|---|---|---|---|---|---|
| litellm | `a47a77ca` (Sameerlite #26772) | 11:27:52Z | **2h46m59s+** | 2h-3h band | n=3 |
| codex | `70ac0f12` (jif-oai #20180) | 10:23:01Z | **3h51m50s+** | 3h-4h band | n=4 |
| qwen-code | `65a1503e` (LaZzyMan #3722) | 09:56:54Z | **4h17m57s+** | 4h-5h band | n=5 |
| goose | `37db6dec` (jh-block #8901) | 09:04:15Z | **5h10m36s+** | 5h-6h band | n=4 |
| opencode | `65ba1f6c` (Brendonovich #24908) | 06:50:06Z | **7h24m45s+** | 7h-8h band (hard-deep) | n=13 |
| gemini-cli | `c7d5fcff` (g-samroberts #26150) | 01:13:15Z | **13h01m36s+** | 13h+ ULTRA-DEEP (M-152.U) | n=18 |

**6 distinct dormancy bands occupied:** {2-3h, 3-4h, 4-5h, 5-6h, 7-8h, 13h+}. Band-occupancy is uniform-singleton (1 repo per band), with band-gaps at {6-7h} (between goose and opencode) and {8-13h} (between opencode and gemini-cli).

**Mid-depth-band (2h-6h) cluster:** 4 repos (litellm, codex, qwen-code, goose) span the **2h46m59s → 5h10m36s range** = 2h23m37s spread. The 4-repo cluster density = 4 repos / 2h23m37s = **1.67 repos per hour**, the highest mid-depth-band density observed in Add.119-155.

**Gemini-cli M-152.U ULTRA-DEEP cascade:**
| Tick | Hour boundary crossed | Crossing time | Within-tick offset | Depth at tick close |
|---|---|---|---|---|
| Add.152 | 10h | 11:13:15Z | +14m15s into Add.152 | 10h43m18s+ |
| Add.153 | 11h | 12:13:15Z | +16m42s into Add.153 | 11h41m41s+ |
| Add.154 | 12h | 13:13:15Z | +18m19s into Add.154 | 12h23m19s+ |
| Add.155 | 13h | 14:13:15Z | +36m41s into Add.155 | 13h01m36s+ |

The cascade is **strictly monotonic** (each tick crosses exactly one hour boundary, in sequence). The within-tick offset increases over the cascade (14m15s → 16m42s → 18m19s → 36m41s), reflecting the **gradual narrowing** of the within-window crossing-margin as window-widths fluctuate around the 40-58m range.

## Comparison to prior dormancy distributions

Historical configurations across Add.119-155 (representative ticks):

| Tick | Distinct bands occupied | Mid-depth (2-6h) cluster size | ULTRA-DEEP repos |
|---|---|---|---|
| Add.135 (zero-active singleton) | 4 (low entropy) | 2 | 0 |
| Add.137-138 (zero-active pair) | 4-5 | 2-3 | 0 |
| Add.150 (codex restart phase-1) | 5 | 3 (codex + qwen-code + goose corrected) | 0 |
| Add.152 (litellm Sameerlite emission) | 5 | 3 (codex + qwen-code + goose corrected) | 1 (gemini-cli at 10h) |
| Add.153 (silence + 11h crossing) | 5 | 3 | 1 (gemini-cli at 11h) |
| Add.154 (silence + 12h crossing) | 5 | 3 (codex + qwen-code + goose) | 1 (gemini-cli at 12h) |
| **Add.155** | **6 (FULL STRATIFICATION)** | **4 (codex + qwen-code + goose + litellm)** | **1 (gemini-cli at 13h, opencode approaching)** |

Add.155 is the **first 6-band-occupied tick** in Add.119-155, the **first 4-repo mid-depth-cluster tick**, and the **first tick with explicit 8-13h band-gap** between opencode (7h24m+) and gemini-cli (13h01m+). The 8-13h band-gap is structurally significant: it represents a **dormancy-class boundary** between hard-deep (≤8h) and ULTRA-DEEP (≥10h) per synth #336 P-336.A class definitions.

## Refined model

This synth refines two prior synths:

**Synth #324 hard-deep-dormancy taxonomy refinement:** The original synth #324 taxonomy established candidate-hard (≥3h) and hard-deep (≥6h) bands. This synth proposes a **fine-grained sub-band taxonomy** for candidate-hard:
- **shallow-mid (2-3h):** litellm at Add.155
- **mid-mid (3-4h):** codex at Add.155
- **deep-mid (4-5h):** qwen-code at Add.155
- **upper-mid (5-6h):** goose at Add.155
- **lower-hard-deep (6-7h):** [vacant at Add.155 — band-gap]
- **mid-hard-deep (7-8h):** opencode at Add.155
- **upper-hard-deep (8-10h):** [vacant at Add.155 — band-gap]
- **ULTRA-DEEP (≥10h):** gemini-cli at Add.155 (currently in 13-14h sub-band)

The Add.155 fine-grained occupancy {1, 1, 1, 1, 0, 1, 0, 1} = 6 occupied of 8 sub-bands = 75% sub-band occupancy, the highest sub-band-occupancy density observed in W17.

**Synth #336 M-152.U class refinement:** Synth #336 originally established the M-152.U ULTRA-DEEP class with gemini-cli as sole founding member at the 10h crossing (Add.152). This synth adds the **cascade-monotonicity property** to M-152.U class definition: **M-152.U-class members exhibit strictly-monotonic hour-boundary crossings over consecutive ticks** as long as the silence-regime persists. The 4-tick cascade (Add.152-155, 10h→11h→12h→13h) is **the first explicit empirical test** of cascade-monotonicity. With opencode at 7h24m45s+ (3 hours from M-152.U entry threshold at 10h), the opencode 10h crossing is projected at 16:50:06Z = ~Add.158-159 if cadence holds at ~40m/tick. The M-152.U class would expand from 1 repo to 2 repos at that point, providing **first cross-repo M-152.U evidence**.

## Predictions / falsifiers

- **P-342.A:** Add.156 sustains ≥5-band-occupancy (silence-regime persistence). Falsifier = Add.156 with ≤4 distinct dormancy bands occupied (which would require ≥2 repos collapsing to the same band, e.g., simultaneous emissions or band-merging via emissions in adjacent bands).
- **P-342.B:** Gemini-cli cascade-monotonicity extends to Add.156 (14h crossing at 15:13:15Z falls inside Add.156 window if width ≥58m). Falsifier = Add.156 width <58m (cascade-monotonicity break via insufficient window-width) OR gemini-cli emission before 15:13:15Z (cascade-monotonicity break via emission). Note: width ≥58m would itself be a 55m+ mode tick per synth #340 bimodal attractor, so cascade-continuation correlates with mode-flip back to 55m+.
- **P-342.C:** Mid-depth-band 4-repo cluster (2h-6h) sustains at ≥3 repos through Add.158. Falsifier = any Add.156-158 tick with ≤2 repos in 2h-6h band (would require ≥2 emissions or ≥2 repos crossing into hard-deep band).
- **P-342.D:** Opencode crosses 10h at ~Add.158-159 establishing first cross-repo M-152.U class membership. Falsifier = opencode emission before 16:50:06Z (would reset opencode to silence-regime exit) OR Add.156-159 cumulative width <10h-7h24m45s = 2h35m15s (insufficient cumulative width to reach 10h boundary).
- **P-342.E:** The fully-stratified 6-band configuration is **a transient regime** that reverts to ≤5-band within 2-3 ticks (driven by emissions or band-collapse). Falsifier = any Add.156-158 tick sustaining 6-band occupancy (would establish full stratification as steady-state, not transient).

## Cross-references

- Predecessor ADDENDUMs: Add.152-155 monotonic hour-boundary cascade ticks (gemini-cli 10h-13h); Add.155 sha-pending (4-repo mid-depth-band cluster, 6-band full-stratification).
- Predecessor synth notes: synth #324 (hard-deep-dormancy taxonomy with candidate-hard / hard-deep bands), synth #336 (M-152.U ULTRA-DEEP class with gemini-cli founding member), synth #338 (silence-regime entry/continuation taxonomy at Add.153 absorption), synth #340 (bimodal medium-width attractor — anchors P-342.B cascade-continuation correlation with 55m+ mode flip), synth #341 (M-155.T zero-active extended-run class — independent silence-regime dimension at the cross-repo level).
- This synth refines synth #324 with **fine-grained 8-sub-band taxonomy** and refines synth #336 with **cascade-monotonicity property**. The two refinements are **structurally complementary**: synth #324's sub-band taxonomy quantifies the dormancy-distribution shape; synth #336's cascade-monotonicity quantifies the dormancy-evolution kinetics. Together they establish a **two-axis silence-regime characterization** at the per-repo level (distribution-shape + evolution-kinetics).
