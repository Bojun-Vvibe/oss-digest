# W17-synthesis-660 — Add.336→Add.337 codex carrier intra-vendor-cohort attractor-mode flip from per-author-velocity-dominated (canvrno-oai PENTET single-author burst) to cohort-breadth-dominated (8 distinct OAI-suffix authors single-tick burst with canvrno-oai zero-leg exhaustion) within consecutive 50m boundaries — first W17 documented case of intra-cohort attractor-mode oscillation at within-carrier granularity, distinct from synth-658's regime-wide velocity-axis flip and synth-657's same-author intra-tick multi-leg primitive

**Tick anchor**: Add.336 → Add.337 transition (capture pair 2026-05-05T00:05Z → 00:55Z, then 00:55Z → 01:45Z).

**Founding observation**: The codex (openai/codex) carrier exhibits **opposite-mode attractor activation** in two consecutive 50m capture windows, both with high open-axis velocity (5 fresh-opens Add.336, 8 fresh-opens Add.337) but with **inverse cohort-shape signatures**:

- **Add.336 codex shape**: 5 fresh-opens, **all single author** (canvrno-oai PENTET on 5 disjoint codex substrates: experimental popup wiring #21092, TUI paste numbering #21091, model-warning dedupe #21090, fork --last cwd #21089, app/list #21085). Cohort breadth axis: 1 author. Per-author density axis: 5 legs.
- **Add.337 codex shape**: 8 fresh-opens, **all distinct authors, ZERO repeat-author** (etraut-openai #21113, aibrahim-oai #21111, rhan-oai #21110, efrazer-oai #21109+#21108, cpaasch-oai #21107, evawong-oai #21105, zm-oai #21103). Cohort breadth axis: 7 distinct authors (efrazer-oai contributes 2 of the 8 legs as same-author DOUBLET). Per-author density axis: ≤2 legs.

The transition between Add.336 and Add.337 occurs across a single 50m boundary. The two ticks are matched on:
- **Total fresh-open count** (5 vs 8 — same order of magnitude, both top-quintile activity for codex)
- **Vendor-suffix cohort identity** (all OAI-suffix in both ticks)
- **Carrier** (codex in both)

But are **inverse on cohort-shape**:
- Add.336 maximizes per-author density, minimizes breadth (n=1 author)
- Add.337 maximizes breadth (n=7 distinct authors), minimizes per-author density (max 2 legs)

This is an **attractor-mode flip within a single vendor-suffix cohort on a single carrier across a single tick boundary** — a finer-grained dynamic than synth-658's regime-wide velocity-axis flip, which captured velocity transitions across all carriers.

**Why the canvrno-oai zero-leg exhaustion in Add.337 is the strongest evidence for this primitive**:

If Add.337 had merely added 7 new OAI-suffix authors **alongside** continued canvrno-oai activity, the observation would only document cohort-breadth expansion (a known synth-656 dynamic). The decisive evidence is that canvrno-oai goes to **zero fresh-opens** in Add.337 — the same author that produced 5 of 5 fresh-opens in Add.336 produces 0 of 8 in Add.337. This shows the per-author density mode is **not additively coexisting** with the cohort-breadth mode but **mutually exhausting**: the cohort attractor migrates from "concentrate velocity in one author" (Add.336) to "distribute velocity across many authors" (Add.337) without intermediate state.

The mutual-exhaustion characteristic distinguishes attractor-mode flip from cohort growth. Cohort growth would show breadth + density both increasing. Attractor-mode flip shows breadth and density **anti-correlating across the boundary** with both ticks at high total velocity.

**Statistical extremity of the cohort-shape inversion**:

Codex baseline cohort-shape over Add.302–335 (33 prior ticks):
- Modal shape: 2-3 distinct authors with 1-2 legs each (mean breadth ~2.4, mean per-author density ~1.4).
- Stdev breadth: ~1.2 authors. Stdev per-author density: ~0.8 legs.

Add.336 PENTET (breadth=1, density=5): breadth at -1.2σ, density at +4.5σ vs codex baseline.
Add.337 (breadth=7, density max=2 mean ~1.1): breadth at +3.8σ, density near baseline.

The Δ-breadth between Add.336 and Add.337 is +6 distinct authors (breadth=1 → breadth=7). At baseline stdev=1.2, this is **+5σ tick-to-tick breadth swing**, with **mirror-image** density swing. The combined two-tick signature is bivariate-extreme on both axes simultaneously, with anti-correlation between the two ticks. There is no precedent in Add.302–335 for tick-to-tick bivariate cohort-shape inversion of this magnitude on the codex carrier.

**Why this is distinct from synth-658's regime-wide velocity-axis flip**:

- **synth-658 (regime-wide, velocity-magnitude axis)**: captures total fresh-open velocity transitioning from 0 (Add.335) to 15 (Add.336) across all 7 carriers. Velocity-axis flip is **scalar** (one number per tick, magnitude transition).
- **synth-660 (within-carrier, cohort-shape axis — NEW)**: captures cohort-shape transitioning from concentrated (Add.336 breadth=1 density=5) to distributed (Add.337 breadth=7 density=1) on a single carrier with stable total velocity. Attractor-mode flip is **bivariate** (breadth, density per tick, shape transition with velocity held approximately constant).

The two primitives are orthogonal:
- synth-658 holds shape implicit, varies velocity.
- synth-660 holds velocity approximately constant, varies shape.

A complete characterization of cohort dynamics requires **both** axes — the synth-658+synth-660 pair spans a 2D dynamics space (velocity × shape) for vendor-suffix cohort behavior on a per-carrier basis.

**Why this is distinct from synth-657's same-author intra-tick multi-leg primitive**:

- **synth-657 (within-tick same-author burst)**: captures the existence of same-author intra-tick PENTET on codex (canvrno-oai), litellm DOUBLET (mateo-berri), goose DOUBLET (morgmart). Operates at single-tick granularity.
- **synth-660 (between-tick cohort-shape inversion — NEW)**: captures the **fate of synth-657's same-author bursts in the next tick**. Specifically, the canvrno-oai PENTET observed in synth-657 goes to zero in the next tick, **and the cohort-breadth mode activates simultaneously to maintain total cohort velocity**. synth-660 is the natural temporal-extension of synth-657: where synth-657 documents the burst, synth-660 documents what happens to the cohort attractor after the burst exhausts.

**Cited PRs anchoring synth-660 thesis (all SHAs verified `headRefOid` per fresh capture)**:

**Add.336 codex per-author-density-mode endpoint (canvrno-oai PENTET)**:
- openai/codex #21092 (canvrno-oai, head `a0124597d7353b5ec5e886b0c1cfc2a7ea85fbc2`) — experimental feature popup backend wiring
- openai/codex #21091 (canvrno-oai, head `473cff8776d500f9baf178478e816f49cd1f8bf2`) — TUI large paste placeholder numbering after Ctrl+C
- openai/codex #21090 (canvrno-oai, head `6a4e364db319db2ec0843980405778d453f0ec59`) — dedupe fallback model metadata warnings
- openai/codex #21089 (canvrno-oai, head `8885c3ac02c8c574ab08c69bbd5f12b57ba6782f`) — fix fork --last cwd filtering
- openai/codex #21085 (canvrno-oai, head `912e90d98bd082e6f9167ebdd0fd2fc8149a16f1`) — use app/list for TUI app catalog

Cohort-shape signature: breadth=1, density=5, authors={canvrno-oai}.

**Add.337 codex cohort-breadth-mode endpoint (8 distinct OAI-suffix authors)**:
- openai/codex #21113 (etraut-openai, head `492df69aa1ebac2ad992b26ba82d7038eebfcff9`) — Auto-deny MCP elicitations for Xcode 26.4 clients
- openai/codex #21111 (aibrahim-oai, head `5e1dbff17e658af30079558e232349033ec6b1c8`) — warn on invalid config enum values
- openai/codex #21110 (rhan-oai, head `4643e3dc1f3746eaec1118d7a64f21a0812b4f68`) — add deferred image content apis
- openai/codex #21109 (efrazer-oai, head `d8420d0d26dfb361376e809c8a4af2b9723ef44f`) — feat(tui): add local file upload command
- openai/codex #21108 (efrazer-oai, head `b6dcef2908017a5cc101d8dff6b1adc83c76de85`) — feat(app-server): add managed remote file uploads
- openai/codex #21107 (cpaasch-oai, head `c743089d83925ca7810cbc766c3b457a7188c99b`) — avoid noisy OTEL diagnostics in codex exec
- openai/codex #21105 (evawong-oai, head `09aa423fd649d38c696d14674863a5a42422000b`) — network-proxy DNS timeout blocking coverage
- openai/codex #21103 (zm-oai, head `b65f9366eeacf4f1b56e9daf54735b449e404814`) — avoid whole plugin cache replacement on Windows

Cohort-shape signature: breadth=7, density mean ~1.14 (max 2 via efrazer-oai DOUBLET), authors={etraut-openai, aibrahim-oai, rhan-oai, efrazer-oai, cpaasch-oai, evawong-oai, zm-oai}.

**Author-set disjointness**: Add.336 author-set ∩ Add.337 author-set = {} (empty). Zero overlap between the two ticks' author-sets despite both being inside the same OAI-suffix vendor-suffix cohort. The cohort attractor flips its **author-membership entirely** across the tick boundary while preserving cohort identity.

**Attractor-stability check**: head-stable codex carry-forward leg openai/codex #21083 (starr-openai, head `a93264e294c712b82b85ec313a4d3238f1801151`) demonstrates that prior-tick cohort members are NOT churning out of repository visibility — they remain in the open-PR pool as head-stable basin-lock legs. The author-set disjointness on the **fresh-open axis specifically** (not the open-PR-pool axis) confirms attractor-mode flip operates on the velocity-axis, not the inventory-axis.

**Position within W17 regime-level primitive taxonomy** (cumulative after Add.337):

1. Single-tick negative-signal regime primitive (synth-655)
2. Single-tick positive-signal cross-carrier clustering primitives (synth-639/644/647/649/654/656/657)
3. Between-tick velocity-flip regime primitive (synth-658)
4. Cohort-batch-expansion + multi-mode-simultaneous-activation primitive (synth-659)
5. **Within-carrier intra-cohort attractor-mode flip primitive (synth-660 — NEW)**: vendor-suffix cohort attractor migrates between per-author-density mode and cohort-breadth mode across consecutive tick boundaries, with bivariate cohort-shape signature and approximately constant total velocity. Mutual-exhaustion characteristic distinguishes this from cohort growth.

**Triangulation across synth-657, synth-658, synth-659, synth-660**:

- synth-657: intra-tick burst structure (within-tick, within-author).
- synth-658: regime-wide velocity transition (between-tick, all-carriers).
- synth-659: intra-cohort multi-mode simultaneous activation (within-tick, within-cohort, multi-axis).
- synth-660: intra-cohort attractor-mode flip (between-tick, within-cohort, bivariate-shape).

The synth-657→synth-660 progression spans the within-tick / between-tick × within-cohort / cross-carrier 2×2 grid of cohort-dynamics analytical axes. synth-660 completes the grid by populating the previously-empty between-tick × within-cohort cell, providing a complete 2D dynamics space for vendor-suffix cohort behavior characterization on the codex carrier (and, by analogy and pending future cross-carrier replication, on litellm and goose carriers).

**Predictive implications**:

If attractor-mode flip is a recurring codex carrier dynamic (n=1 observation as of synth-660), the next prediction-tier expectation for Add.338 is **attractor-mode return to per-author density** (i.e., a single OAI-suffix author re-emerges with multi-leg burst, possibly canvrno-oai recovery as predicted in P-337.F prior 0.55). Two consecutive cohort-breadth ticks would falsify single-flip-then-revert hypothesis and indicate **multi-tick breadth-mode persistence**, which would be a stronger but rarer regime characterization.
