# W17-synthesis-657 — Add.336 same-author intra-tick multi-leg primitive emerges as cross-carrier MOTIF on three disjoint carriers (litellm mateo-berri #27137+#27135 + goose morgmart #9004+#9003 + codex canvrno-oai #21092/#21091/#21090/#21089/#21085 PENTET) within single 50m capture as fourth W17 cross-carrier clustering primitive distinct from substrate-class, conceptual-class, and vendor-suffix-cohort recipes

**Tick anchor**: Add.336 (capture 2026-05-05T00:05:00Z → 2026-05-05T00:55:00Z, 50m tertricesimum).

**Founding observation**: Three carriers — BerriAI/litellm, block/goose, openai/codex — simultaneously exhibit a previously-uncatalogued W17 clustering primitive within the same Add.336 50m capture window: **a single author opens N≥2 fresh PRs on the same carrier within the same tick**, where the legs are typically structurally paired (build-system migration DOUBLET, UI-refactor DOUBLET, or feature-cohort PENTET).

Concrete simultaneous instantiations:

1. **BerriAI/litellm — mateo-berri DOUBLET**: #27137 (`52562f018eded31eb3f29361b7ec84d7f07e8b1f`, `Build Admin UI from source in every Docker image and on PyPI publish`) + #27135 (`d160461dc6485d2c93aa0b13da412115dcbf35d9`, `Stop tracking the pre-built Admin UI bundle in litellm/proxy/_experimental/out/`). Structurally a paired build-system migration: source-build leg + tracked-bundle-removal leg from the same author within the same tick.

2. **block/goose — morgmart DOUBLET**: #9004 (`fed3f4486e02a5d1afb157656d90d02ea8cece6f`, `support file-backed agent and skill editing`) + #9003 (`222bcab30a7857756e0dc2b231eeea82b1060c2a`, `align extensions page styling`). Structurally an extensions-UI DOUBLET: backend file-editing leg + frontend styling-alignment leg from the same author within the same tick.

3. **openai/codex — canvrno-oai PENTET**: #21092 (`a0124597d7353b5ec5e886b0c1cfc2a7ea85fbc2`), #21091 (`473cff8776d500f9baf178478e816f49cd1f8bf2`), #21090 (`6a4e364db319db2ec0843980405778d453f0ec59`), #21089 (`8885c3ac02c8c574ab08c69bbd5f12b57ba6782f`), #21085 (`912e90d98bd082e6f9167ebdd0fd2fc8149a16f1`). 5 distinct legs across TUI backend / paste-numbering / fallback-warnings / fork-cwd / app-list subsystems from the same author within the same tick. Generalizes the DOUBLET primitive to QUINTET cardinality.

**Why this is a new structural primitive, not a recurrence of synth-652 or synth-656**:

- **synth-652** (Adib234 same-author triplet on gemini-cli #26457/#26460/#26461) was an **intra-carrier intra-cohort** clustering — single carrier, single author. synth-657 generalizes the same-author intra-tick recipe to a **cross-carrier homology**: the same recipe instantiates on **three carriers simultaneously** with three different authors, three different organizational affiliations (mateo-berri is berri-suffix vendor cohort; morgmart is non-suffix external contributor on goose; canvrno-oai is OAI-suffix vendor cohort).
- **synth-656** (vendor-suffix author-cohort homology between codex OAI-suffix UNDECET and litellm berri-suffix DOUBLET) operates at the **organizational-cohort recipe** level — what generalizes is "how a vendor's author cohort organizes its contributions on a carrier". synth-657 operates at the **per-author velocity recipe** level — what generalizes is "how a single author bursts N legs into a single tick". The unit of analysis differs: synth-656 examines the cohort, synth-657 examines the individual.
- **synth-654** (cross-carrier 3-substrate freshness/staleness conceptual MOTIF on qwen #3840 + crush #2798 + gemini-cli #26464) was a **conceptual-class** cross-carrier cluster. synth-657 is **primitive-class** — what generalizes is not substrate, not concept, not author, not cohort, but the **shape of single-tick author behavior**. This is a strictly distinct primitive class.
- **synth-655** (seven-carrier open-axis-quiescent regime-level breath-out primitive) was a **negative-signal regime primitive**. synth-657 is a **positive-signal regime primitive** that arises in the very next tick after synth-655's quiescence — same-author burst is the **active-mode counterpart** of the quiescent-mode signal. Sequence: quiescent-tick (Add.335) → same-author-burst-tick (Add.336) suggests a **regime-coupled rhythm** where ecosystem-wide breath-out releases author-internal velocity backpressure.

**Cardinality scaling within the primitive class**:

The primitive instantiates at three different cardinalities within the same tick:
- DOUBLET (n=2): mateo-berri litellm, morgmart goose
- PENTET (n=5): canvrno-oai codex

The primitive is **scale-variant within tick** but **kind-invariant**. Cardinality variation correlates with prior-tick author velocity: canvrno-oai entered Add.336 already at OCTET cardinality across 2 axes (post-Add.335 dual-axis QUARTET), so the within-tick burst is a continuation of multi-tick momentum. mateo-berri and morgmart are first-tick same-author multi-leg events for those authors in W17, so DOUBLET represents the **founding cardinality** of the primitive on those carriers.

**Substrate-pairing structure within DOUBLETs**:

Both DOUBLETs exhibit **paired-leg structure**, distinct from random co-tick filing:
- mateo-berri pair: leg-A adds new build path (#27137), leg-B removes old build path (#27135). Migration-DOUBLET.
- morgmart pair: leg-A adds backend capability (#9004 file-backed agent editing), leg-B aligns frontend (#9003 extensions page styling). Stack-DOUBLET (backend + frontend of same feature).

The PENTET (canvrno-oai) does not exhibit obvious pair-structure across all 5 legs but does carry a **substrate-DOUBLET** internally: #21089 (fork --last cwd filtering) is same-substrate as Add.334 #21071 (Align exec resume cwd filtering with backend) — cwd-filter substrate doublet across two ticks within same author cluster.

**Cited PRs and SHAs (all from Add.336 fresh-batch, all SHAs verified per `gh pr list --json headRefOid` capture)**:

- **BerriAI/litellm #27137** (mateo-berri, head `52562f018eded31eb3f29361b7ec84d7f07e8b1f`)
- **BerriAI/litellm #27135** (mateo-berri, head `d160461dc6485d2c93aa0b13da412115dcbf35d9`)
- **block/goose #9004** (morgmart, head `fed3f4486e02a5d1afb157656d90d02ea8cece6f`)
- **block/goose #9003** (morgmart, head `222bcab30a7857756e0dc2b231eeea82b1060c2a`)
- **openai/codex #21092** (canvrno-oai, head `a0124597d7353b5ec5e886b0c1cfc2a7ea85fbc2`)
- **openai/codex #21091** (canvrno-oai, head `473cff8776d500f9baf178478e816f49cd1f8bf2`)
- **openai/codex #21090** (canvrno-oai, head `6a4e364db319db2ec0843980405778d453f0ec59`)
- **openai/codex #21089** (canvrno-oai, head `8885c3ac02c8c574ab08c69bbd5f12b57ba6782f`)
- **openai/codex #21085** (canvrno-oai, head `912e90d98bd082e6f9167ebdd0fd2fc8149a16f1`)

**Contrast with prior W17 synthesis entries**:

- **vs synth-643/648/650/652/653 (intra-carrier intra-cohort clusters)**: synth-657 is the cross-carrier generalization of these intra-carrier same-author primitives — same recipe, three carriers, same tick.
- **vs synth-655 (seven-carrier open-axis-quiescent breath-out)**: synth-657 is the immediate active-mode successor; the quiescent-tick → burst-tick sequence is structurally a single regime-coupled rhythm where synth-655 captures the trough and synth-657 captures the peak.
- **vs synth-656 (vendor-suffix cohort recipe homology)**: synth-657 operates one level below — at per-author velocity rather than at vendor-cohort organization. synth-656 and synth-657 form a **two-level homology stack**: cohort-level (synth-656) and individual-level (synth-657) recipes can both be cross-carrier transferable primitives.

**Position within W17 cross-carrier primitive taxonomy** (cumulative):

1. **Substrate-class** (synth-639/644/647/649): same subsystem on different carriers, disjoint authors.
2. **Conceptual-class** (synth-654): same invariant/concept on different carriers, disjoint subsystems.
3. **Cohort-recipe-class** (synth-656): same organizational-cohort organization shape on different carriers.
4. **Same-author-burst-class** (synth-657 — NEW): same single-author within-tick multi-leg burst recipe on different carriers, different authors.

synth-657 introduces the **fourth** distinct cross-carrier clustering primitive class observed in W17, complementing the prior three at a strictly lower (per-author) level of analysis.
