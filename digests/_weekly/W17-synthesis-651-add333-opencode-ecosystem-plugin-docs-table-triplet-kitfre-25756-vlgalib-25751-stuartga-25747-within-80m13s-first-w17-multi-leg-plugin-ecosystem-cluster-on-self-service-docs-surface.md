# W17-synthesis-651 — opencode ecosystem-plugin docs-table TRIPLET (kitfre #25756 + vlgalib #25751 + StuartGa #25747) within 80m13s — first W17 multi-leg plugin-ecosystem cluster on a self-service docs surface

**Anchor**: ADDENDUM-333 capture window 2026-05-04T21:35:00Z → 22:25:00Z (capture-snapshot 20:30:00Z).

**Pattern statement**: The opencode `docs/ecosystem` plugin-table surface, which through Add.330 → Add.332 carried a singleton entry (StuartGa #25747 `Add opencode-permission-guard to ecosystem plugins`, FRESH-OPEN 2026-05-04T18:47:44Z), acquired **two additional fresh plugin-table entries within an 80m13s window**, forming the **first multi-leg plugin-ecosystem cluster recorded in W17 on the opencode carrier**. The TRIPLET legs (chronological):

1. **sst/opencode #25747** head `f159b5142850f64e3ce1d12f32ba47b0a425a038` (StuartGa, FRESH-OPEN 2026-05-04T18:47:44Z) — `Add opencode-permission-guard to ecosystem plugins` — permission-guard plugin docs-table entry.
2. **sst/opencode #25751** head `625c202149c22ebece41fe06cd0787dd46cd9501` (vlgalib, FRESH-OPEN 2026-05-04T19:33:45Z) — `docs: add hiai-opencode to ecosystem plugins table` — hiai-opencode plugin docs-table entry.
3. **sst/opencode #25756** head `0a7f8c2826d1b95b9780e5bacf55b7923f42040b` (kitfre, FRESH-OPEN 2026-05-04T20:07:45Z) — `docs(ecosystem): add @datadog/opencode-plugin` — Datadog observability plugin docs-table entry.

**Inter-leg intervals**:
- #25747 → #25751: **46m01s**.
- #25751 → #25756: **34m00s**.
- Total cluster lifespan to TRIPLET: **80m13s** from #25747 anchor.

**Structural distinguishing axes vs prior W17 ecosystem-class clusters**:

- **Surface granularity**: All three legs touch the **same docs-table file** (the opencode README/docs ecosystem-plugins index). Cluster surface is the *index file itself*, not the underlying plugin code, which is hosted in three distinct external repositories (StuartGa's permission-guard, vlgalib's hiai-opencode, kitfre's @datadog/opencode-plugin). This is structurally distinct from the prior agent-runtime QUARTET (synth-644) where each leg modified runtime code in the carrier repo; here the carrier is acting as a **plugin index registry** and the legs are *self-service registrations* by external plugin authors.
- **Author-org dispersion**: 3 distinct external authors (StuartGa, vlgalib, kitfre) with no organizational overlap; one of them (kitfre at Datadog) is from a recognized observability vendor, the other two are individual maintainers. **Higher author-org dispersion than synth-650's apply_patch boundary-crossing primitive** (which crossed only intra-org → bolinfest-individual boundary) — synth-651 is fully cross-org by construction.
- **Trigger class**: The trigger appears to be **announcement-driven self-service**, not an internal-team push or a defect-class clustering. Plausibly downstream of a community-call or upstream-maintainer encouragement to register plugins; also plausibly coincidence weighted by week-end timing, but the 80m window is tight enough to suggest causal correlation.
- **Diff-class**: All three legs are **single-row docs-table inserts** (or near-equivalent), trivially-mergeable, no code-path or test-suite involvement. This is the **lowest-friction merge-class observed in W17 cluster catalog**, contrasting with synth-650's apply_patch test-fixture corrections and synth-644's runtime-recovery hardening.

**Distinguishing axes vs F-331.F failure-then-realization**:

F-331.F at Add.331 forecast "opencode StuartGa #25747 plugin-ecosystem permission-guard attracts 2nd ecosystem-plugin entry within 6h, prior 0.15" — Add.332 recorded NOT-REALIZED at the DOUBLET cardinality. Add.333 records **direct jump from cardinality-1 to cardinality-3**, skipping the DOUBLET intermediate state entirely (both #25751 and #25756 surfaced before the F-331.F 6h window expired, but the structural shape was TRIPLET-direct rather than DOUBLET-then-TRIPLET). This is a **forecast-shape mismatch**: the underlying realization rate exceeded the prior, but the realization arrived in a single ~80m burst rather than the implied gradual single-leg accretion. Calibration note: future plugin-ecosystem priors should account for **burst-mode self-service registration shape**, not just single-leg arrival.

**Mechanism hypotheses (ranked)**:
1. **Tracker effect / community signaling**: The first registration (StuartGa) appearing in the docs-table on a recently-updated index file made the registration mechanism more visible to other plugin authors monitoring the repo, lowering the activation cost for vlgalib and kitfre. This predicts further plugin docs-leg arrivals at decaying cadence over next 24–48h.
2. **External calendar coincidence**: A blog post, conference talk, or maintainer announcement on 2026-05-04 may have prompted simultaneous registrations. If so, expect cohort to flatten after current 3-leg burst with no further legs in next 6h.
3. **Bot-or-template activity**: Unlikely — three distinct authors with three distinct external plugin repos rules out a single bot or template fork; manual self-service is most consistent with the data.

**Forward signal / forecasts**:
- **P-333.C (TRIPLET extends to QUARTET within 4h, prior 0.30)** — under hypothesis 1, expect 4th leg from another external plugin author at decaying cadence (next leg expected window roughly 22:00Z–02:00Z UTC if pattern holds geometric-ish decay).
- Monitor whether any of the three plugin docs-table entries gets blocked by maintainer review (e.g., for plugin-quality criteria); rejection or modification of any leg would partially invalidate the self-service-burst mechanism.
- Cross-carrier check: do other carriers (codex, gemini-cli, goose) maintain analogous plugin-docs index files? If yes, watch for parallel docs-table TRIPLET formation as a cross-carrier diffusion pattern.

**Why this is not synth-647-restated**:
synth-647 catalogued cross-carrier MCP-subsystem QUINTET on shared internal cells. synth-651 is a **single-carrier, single-file, surface-internal cluster** with no MCP involvement. Different carrier-axis (single-vs-cross), different subsystem (docs-index vs MCP), different leg-class (docs-row-insert vs feature-fix).

**Why this is not synth-644-restated**:
synth-644 catalogued cross-carrier agent-runtime self-recovery QUARTET on runtime-code surfaces. synth-651 has zero runtime-code involvement; all legs are docs-table rows on a single carrier. Distinct surface class entirely.

**Why this is not the F-331.F-restated forecast realization**:
F-331.F predicted DOUBLET arrival; the realized shape is TRIPLET-direct burst. The synth-651 finding is the **shape mismatch and the self-service-burst mechanism**, not the scalar realization fact.

**Cross-references**: Add.333 §carrier-1 #25747/#25751/#25756 entries; Add.331 F-331.F (which initially failed at DOUBLET then realized at TRIPLET in Add.333); W17-synth-644 (cross-carrier agent-runtime quartet, contrasting code-vs-docs surface); W17-synth-650 (cross-org boundary-crossing on apply_patch, contrasting partial-vs-full author-org dispersion).
