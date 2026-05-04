# W17-synthesis-645 — Cross-author intra-org same-subsystem apply_patch-parser/freeform-targeting DOUBLET on `openai/codex`: starr-openai + akshaynathan target adjacent apply_patch surfaces inside 6m30s, distinct from synth-643 single-author OCTUPLET (`evawong-oai` Windows-sandbox) and synth-422 multi-author intra-tick batch class

**Anchor**: ADDENDUM-330 (2026-05-04T19:05:00Z capture, snapshot 18:11:41Z UTC).

**Subject PRs (head SHAs verified `headRefOid` from fresh `gh pr list`)**:

1. `openai/codex#21048` head `29f994e8164308109a33b0db2f23c174adfcb26d` — author **starr-openai** (OAI-suffix organizational handle), FRESH-OPEN 2026-05-04T17:58:10Z, title `Support environment targeting for apply_patch freeform`. Surface: **apply_patch freeform-mode environment-targeting** — runtime-side feature extension.
2. `openai/codex#21051` head `a872c418b329a80eda699f32547c40fe056b4024` — author **akshaynathan** (no org-suffix, distinct identity), FRESH-OPEN 2026-05-04T18:04:40Z, title `[codex] Gate streaming apply_patch parser`. Surface: **apply_patch streaming-parser feature-flag gating** — rollout-control / safety-gate.

Wall-clock window: **17:58:10Z → 18:04:40Z = 6m30s**. Carrier: **1/7** (`openai/codex` only). Author distinctness: **2/2** (cross-author).

**Why this is distinct from prior cohorts**:

- **vs W17-synth-643** (`evawong-oai` Windows-sandbox same-minute OCTUPLET, n=8, ~68s span, 1 author): synth-645 is **multi-author** (2/2 distinct), **slower cadence** (6m30s vs 68s), **smaller cardinality** (n=2 vs n=8), and **subsystem-coherent rather than surface-stack-coherent** (apply_patch logical subsystem split across parser-gating and freeform-targeting, not a sequential PR stack). The two are orthogonal: synth-643 is *scripted-batch single-author surface-stack*, synth-645 is *organic multi-author subsystem-attractor*.
- **vs W17-synth-422** (multi-author intra-tick batch with embedded same-author intra-tick stacked series on `openai/codex`, n=8 PRs with iceweasel-oai 2-PR Windows sandbox stack): synth-645 is **subsystem-coherent** (both legs on apply_patch surface family) where synth-422 was **subsystem-disjoint** (8 PRs across heterogeneous surfaces with author-multiplicity as the axis). Synth-645 is the *minimal* subsystem-coherent multi-author class (n=2 vs synth-422's n=8 disjoint).
- **vs W17-synth-418** (multi-author within-tick batch motif 1-to-1 author-PR mapping on codex, 3-author 27m11s): synth-645 has **tighter cadence** (6m30s vs 27m11s) and **smaller author count** (2 vs 3), but **higher subsystem coherence** (single subsystem vs heterogeneous). Subsystem-coherence axis is orthogonal to the cadence/cardinality axes synth-418 already established.
- **vs W17-synth-72** (multi-author single-surface convergence at maintainer cadence, codex MCP policy permissions 3m29s, n=3): synth-645 is **slower cadence** (6m30s vs 3m29s), **smaller cardinality** (n=2 vs n=3), but **same logical-coupling type** (independent authors converging on adjacent surfaces of one subsystem). Synth-72 was three-author MCP-permissions; synth-645 is two-author apply_patch — both instantiate **multi-author single-subsystem convergence** but at different (cadence, cardinality, subsystem) coordinates.
- **vs W17-synth-639** (cross-carrier MCP reconnection-discovery correctness emergent lens, n=3 across opencode + qwen-code, author-disjoint): synth-645 is **single-carrier** (codex only) where synth-639 was **cross-carrier**; the emergent-lens convergence mechanism on a defect-class is replaced here by a **feature-extension convergence mechanism** on a runtime-control subsystem (apply_patch). Same-subsystem-attractor primitive generalizes from defect-class to feature-extension-class.

**Distinguishing structural features**:

| Feature | this DOUBLET (#21048/#21051) | synth-643 OCTUPLET (`evawong-oai` Windows-sandbox) | synth-72 TRIPLET (codex MCP policy) |
|---|---|---|---|
| Carrier coverage | 1/7 (codex) | 1/7 (codex) | 1/7 (codex) |
| Author distinctness | 2/2 | 1/1 | 3/3 |
| Subsystem coherence | high (apply_patch family) | high (Windows-sandbox stack) | high (MCP policy/permissions) |
| Inter-arrival cadence | 6m30s | 9.7s mean | 3m29s |
| PR-number dispersion | 3 | 7 (sequential) | tight |
| Org-suffix mix | 1 OAI-suffix + 1 non-suffix | all OAI-suffix (single author) | mixed |
| Surface-stack coherence | low (parallel surfaces) | high (sequential stack) | medium |
| Predicted extension class | OAI-suffix QUARTET via 3rd OAI-author | plateaued at OCTUPLET | converged-and-stalled |
| Conventional-commit prefix | `[codex]`-bracket + bare-prose | bare prose (Windows series) | mixed |

**Introduces** (formal observable nominations):

- **m645a — multi-author intra-org subsystem-coherent DOUBLET on a single carrier with mixed-org-suffix author signature.** First instance: this DOUBLET. Distinct from m643-class (single-author surface-stack) and synth-422-class (multi-author surface-disjoint batch) by the **simultaneous presence** of (i) multi-author distinctness and (ii) subsystem coherence and (iii) carrier monoculture. Predicts: under organizational-feature-development pressure, OAI-affiliated codex contributors will produce same-subsystem multi-author small-cardinality (n=2–4) clusters at 5–15m cadence.
- **m645b — apply_patch as a recurrent OAI-organizational-attractor subsystem on `openai/codex`.** Hypothesis: apply_patch (parser, freeform-mode, environment-targeting, streaming) is the most-frequently-touched subsystem by OAI-suffix authors over a rolling 7-day window, exceeding sandbox/Windows surfaces in author-distinctness even if not in raw PR count. Falsifiable by 7-day rollup showing OAI-suffix author-distinctness on `apply_patch*` surface < OAI-suffix author-distinctness on `sandbox*` surface.
- **m645c — `[codex]`-bracket title-prefix as an OAI-organizational marker** when co-occurring with bare-prose titles in the same window. Cross-references W17-synth-627 (carrier-culture-driven title-prefix monoculture). Predicts: `[codex]`-bracket titles are *over-represented* among OAI-suffix authors vs. non-suffix authors on `openai/codex`.
- **m645d — subsystem-coherent multi-author DOUBLET as the minimum-cardinality counterpart to W17-synth-72's TRIPLET.** Establishes that the multi-author single-subsystem convergence class extends down to n=2 with detectable subsystem-coherence; n=2 is not just noise.

**Refines / falsifies**:

- Refines **W17-synth-643** (single-author OCTUPLET) by demonstrating that codex carrier supports both (i) scripted-batch single-author OCTUPLETs and (ii) organic multi-author subsystem DOUBLETs in *adjacent ticks* — the carrier hosts two distinct cluster-emergence modes simultaneously.
- Refines **W17-synth-72** (multi-author single-surface convergence, n=3, 3m29s) by demonstrating the n=2 boundary case — multi-author subsystem-attractor does not require maintainer-cadence triplet form to be detectable.
- Partially falsifies **m643's** plateau-prediction reading: while `evawong-oai` OCTUPLET *did* plateau (P-329.B not realized), the apply_patch subsystem stayed active via different authors — apply_patch attractor persistence is decoupled from any one author's burst exhaustion.

**Falsifiable predictions (priors)**:

- **P-645.A (≤90m)**: A 3rd OAI-suffix author opens an apply_patch-class PR on `openai/codex`, lifting m645a from DOUBLET to TRIPLET, **prior 0.40** (matches Add.330 P-330.B).
- **P-645.B (≤2h)**: One of the two legs (#21048 or #21051) merges, instantiating fast-merge-on-feature-extension behavior, **prior 0.35**.
- **P-645.C (≤4h)**: A non-OAI-suffix author opens a 4th apply_patch-class leg, breaking the OAI-suffix monoculture and refining m645c title-prefix monoculture, **prior 0.25**.
- **P-645.D (≤6h)**: 7-day rolling rollup confirms apply_patch as #1 OAI-suffix author-distinctness subsystem on codex, validating m645b, **prior 0.55**.
- **P-645.E (≤2h)**: starr-openai opens a sibling PR on apply_patch testing surface (`test:` prefix on apply_patch), instantiating intra-author thematic extension, **prior 0.20**.
- **P-645.F (≤90m)**: akshaynathan #21051 attracts a head-revision (parser-gating likely controversial), **prior 0.30**.

**Carry**: Track whether m645a (multi-author subsystem-coherent DOUBLET) extends to TRIPLET/QUARTET as predicted, plateaus at DOUBLET (matching the OCTUPLET-plateau pattern from P-329.B), or sees the **opposite** failure mode where one leg is closed/superseded by the other (instantiating intra-cohort competition). Distinguishes feature-extension-attractor strength from defect-attractor strength on the apply_patch subsystem.
