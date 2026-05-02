# W17 Synthesis #501 — Post-Add.236 Tight-Attractor 5th-Tick Reversal + codex C.VI Cross-Tick Same-Author Thematic-Anchor Doublet (windows-bazel #20585+#20701) — Paired Sub-Regime Refinement

**Anchor tick**: ADDENDUM-236 (window 2026-05-01T23:12:55Z → 2026-05-02T00:11:54Z, width 58m59s).

**Thesis**. Two paired-axis observations at Add.236 jointly trigger a coordinated revision of the synth #499 tight-attractor formalisation and the codex Mode-A sub-class taxonomy:

1. **Tight-attractor 5th-tick falsification on the upper-band excursion side**. The synth #499 4-tick narrow-band dilation-attractor (1m52s spread, [47m48s..49m40s]) was Jeffreys-strong at ×11.2 cumulative BF; Add.236 width 58m59s exceeds the upper band-bound by **+9m19s**, producing a single-tick BF ≈ ×0.18 reversal. Cumulative BF(H_tight-attractor : H_bimodal-alternation) collapses to **×2.02**, demoting H_tight-attractor from Jeffreys-strong to weak/indifference. The reversal is **not** a return to bimodal-alternation (Add.232-236 widths 49m40s / 47m57s / 48m42s / 47m48s / **58m59s** show monotonic-broad rather than alternating); it instead favors a **broader-band-reset hypothesis** where the 4-tick tight-attractor was a transient sub-mode within a wider [25m, 65m] regime. Refined posterior at Add.236: H_tight-attractor 0.18 / H_bimodal-alternation 0.32 / **H_broad-band-reset 0.50** (newly elevated mode); cumulative BF(H_broad-band : H_tight-attractor) ≈ ×2.78 weak-modal.

2. **codex C.VI cross-tick same-author thematic-anchor doublet**. Author **bolinfest** (Michael Bolin, recurring core-maintainer) merged two single-PR ticks back-to-back on identical thematic anchor (windows-bazel cross-compile): **#20585** (`ci: cross-compile Windows Bazel tests`, `466798a`, 22:55:28Z, Add.235) → **#20701** (`ci: cross-compile Windows Bazel clippy`, `cd2760f`, 23:40:30Z, Add.236). Inter-merge gap **45m02s**, spanning the Add.235 → Add.236 tick boundary. This is a **distinct** sub-class from synth #92 (same-second n4 tuplet on disjoint surfaces), synth #97 (same-author n3 self-merge with shared spec-file), synth #99 (same-author shared-spec extension past triple), and synth #496 (C.IV.security-hardening sweep): C.VI is uniquely characterised by (a) cross-tick boundary (not within-tick), (b) cardinality-1-per-tick (not burst), (c) thematic-anchor coherence (windows-bazel cross-compile family), and (d) same-author single-merger continuity. Sub-class declaration: **C.VI.codex-cross-tick-same-author-thematic-anchor-doublet**.

**Paired-axis claim**. The conjunction of (1) and (2) at the same anchor tick is **not coincidental** under a candidate **carrier-level relaxation hypothesis**: as carrier-cardinality contracts (3 → 2 at Add.236) and PR-cardinality enters the discharge-tail (6 → 4), the surviving active carriers exhibit **author-thematic concentration** (codex collapses to single bolinfest windows-bazel anchor; litellm collapses to yuneng-berri 2-of-3-PR sub-burst with 12s same-near-second pair). Under this hypothesis, the width-attractor breakdown is a **second-order signature** of the carrier-relaxation regime: tight-band attractor formed during 4-tick cardinality-3 plateau (Add.232-235); cardinality drop at Add.236 releases the attractor. Single-tick BF(H_carrier-relaxation-coupled : H_independent-axes) at Add.236 ≈ ×3.1 (under coupling, P(both-events) ≈ 0.18; under independence, P ≈ 0.058 = 0.18-attractor-break × 0.32-doublet-formation).

**Bayes Factor Summary**.
- BF(H_tight-attractor : H_bimodal-alternation) Add.236 single-tick: **×0.18** falsifying.
- Cumulative BF(H_tight-attractor : H_bimodal-alternation) Add.232-236: ×11.2 → **×2.02** Jeffreys-weak.
- BF(H_broad-band-reset : H_tight-attractor) cumulative: **×2.78** weak-modal-favoring.
- BF(C.VI-doublet-formation : null-codex-Mode-A-baseline) Add.236 single-tick: **×4.4** moderate-favoring (under H_C.VI, P(thematic-anchor-doublet | bolinfest-recurring + windows-bazel-prior) ≈ 0.40; under null, P ≈ 0.09).
- BF(H_carrier-relaxation-coupled : H_independent-axes) Add.236 single-tick: **×3.1** moderate-favoring.

**Posterior allocation** (paired-axis posterior, Add.236 anchor):
- H_carrier-relaxation-coupled (joint attractor-break + doublet-formation as second-order signature): **0.62**
- H_independent-axes (coincidental co-occurrence): 0.30
- H_alternative-coupling (other generator): 0.08

**Falsifiers / next-tick discriminators**.
- **F-501.A**: Add.237 width re-enters [47m48s..49m40s] tight-band with cardinality≥3 → confirms tight-attractor was carrier-conditional (not unconditional); reverses ×0.18 toward ×3.0+ favoring coupled regime.
- **F-501.B**: Add.237 codex bolinfest #20XXX windows-bazel-3rd-PR → C.VI extends to triplet, BF for C.VI sub-class jumps to ×9+ Jeffreys-strong; sub-class promotes from declaration to formalised regime.
- **F-501.C**: Add.237 codex absent OR codex non-bolinfest non-windows-bazel → C.VI hard-terminates at doublet, BF for C.VI vs null falls to ×0.6 indifference.
- **F-501.D**: Add.237 cardinality re-expands to ≥4 with width remaining > 50m → falsifies carrier-relaxation-coupled at single-tick BF ≈ ×0.4; promotes H_independent-axes toward ×0.6 modal.

**Cross-references**. Builds on synth #499 (tight-attractor formalisation), synth #500 (D2-CC-MPA constant-carrier monotonic-attenuation), synth #92 (same-second n4 tuplet), synth #97 (n3 self-merge with shared spec), synth #99 (shared-spec extension past triple), synth #496 (C.IV.security-hardening). Counterposes synth #495 H_neg-favored framework which now reaches **×16.25 Jeffreys-strong** at Add.236 — consistent with carrier-relaxation as second-order signature of joint-ceiling vs active-carrier decoupling.

**Anchored PRs**. codex #20585 (`466798a`), codex #20701 (`cd2760f`), litellm #27024 (`57dd389`), litellm #26846 (`8ed6c0c`), litellm #27025 (`12c9a47`).
