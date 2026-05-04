# W17-synthesis-649 — Cross-carrier MCP-elicitations same-tick DOUBLET on disjoint surfaces (codex etraut-openai #21062 + goose alexhancock #8999) — first observed elicitations-class cross-carrier co-occurrence

**Anchor**: ADDENDUM-332 capture window 2026-05-04T20:45:00Z → 21:35:00Z (capture-snapshot 19:35:00Z).

**Pattern statement**: Within a 30-minute-07-second window beginning 2026-05-04T19:01:05Z (codex #21062 fresh-open) and ending 19:31:02Z (goose #8999 fresh-open), **two independent fresh-open PRs whose primary surface is the MCP `elicitations` mechanism** appeared on **two carriers simultaneously**, with no shared author, no shared organization, and disjoint internal surfaces (legacy-preservation-tied-to-Xcode-26.4 vs. defect-class-fixes-on-issue-8531) — instantiating a cross-carrier MCP-elicitations DOUBLET that is **a strict sub-class of the synth-647 MCP-subsystem QUINTET** but on a **narrower internal cell** never previously co-occurring across carriers in same-tick same-cell mode.

**Carriers and legs**:
- **openai/codex #21062** head `50afb524f03406d4caf937a1b7e337cc3ea647f0` (etraut-openai — `Preserve legacy MCP elicitations for Xcode 26.4`, FRESH-OPEN 19:01:05Z) — legacy-elicitations preservation pinned to Xcode 26.4 client-version compatibility window.
- **block/goose #8999** head `fe16fc120255fcec47c15311fc28780d4891b2fa` (alexhancock — `fix: 8531 - elicitation fixes`, FRESH-OPEN 19:31:02Z) — elicitations defect fixes referencing tracked issue 8531; surface includes runtime-elicitation-flow corrections.

**Distinguishing axes vs synth-647 (MCP-subsystem QUINTET)**:
- **Internal-cell narrowness**: synth-647 spanned 5 disjoint MCP cells (namespace-descriptions / tool-call-rollout-storage / session-config-refresh / list-UX-untrusted-folder / core-file-structural-split); synth-649 isolates **one cell — `elicitations`** — across both carriers. Cell-coincidence coefficient = 1.0 vs synth-647's 0.0 cell overlap.
- **Carrier-pair novelty**: synth-647 carriers were codex+gemini-cli+litellm; synth-649 introduces **goose as a new MCP-class participant** in same-tick co-occurrence, lifting cumulative cross-carrier MCP-class involvement to 4 carriers (codex+gemini-cli+litellm+goose) within rolling ~80m window across Add.331 → Add.332 transition.
- **Inter-carrier gap**: 30m07s for the elicitations DOUBLET vs synth-647's 21m fresh-open density window for 4-fresh legs. Slightly slower but on narrower cell.
- **External-trigger correlation visibility**: codex #21062 explicitly cites "Xcode 26.4" client version (downstream-client release event); goose #8999 cites "8531" issue-tracker entry. Neither carrier cites the other's anchor — **independent triggers, disjoint provenance**, increasing weight on hypothesis 3 below (downstream-defect maturation).

**Distinguishing axes vs prior single-carrier MCP-elicitations work**:
- No prior recorded **same-tick** MCP-elicitations co-occurrence across any pair of the 7 carriers. Closest comparator: codex MCP-elicitations work cataloged in earlier W16 entries was always single-carrier internal iteration without cross-carrier same-tick partner.

**Mechanism hypotheses (ranked)**:
1. **MCP-spec elicitations clause underwent recent semantic-refinement or breaking change** in upstream `modelcontextprotocol/specification`, prompting parallel client-side adaptation (codex preserves legacy semantics for older Xcode 26.4 clients; goose patches its current implementation). This hypothesis predicts other carriers will follow within 24h — strong directional forecast.
2. **Independent downstream-client defect-class maturation** — Xcode 26.4 release independently exposed elicitation edge cases in codex; goose user reports independently surfaced issue 8531. Coincidence-rate hypothesis; weaker because elicitations is a narrow surface and same-tick concurrence on narrow surfaces is statistically rare.
3. **Cross-implementation user-base overlap** — same end-users using both codex (via Xcode) and goose (independently) reported similar elicitation defects to both projects, triggering parallel work. Indirect attribution; would require survey data.

**Forward signal / forecasts**:
- Within next 4h, look for **3rd MCP-elicitations leg on a 3rd carrier** (P-332.C prior 0.25). Strongest candidates: gemini-cli (Adib234 cluster has shown MCP-class engagement via #26457; an elicitations-class leg from Adib234 or another gemini-cli contributor would count) and litellm (yugborana has demonstrated MCP-core engagement on #27109 and could extend to elicitations-cell).
- Within next 24h, monitor `modelcontextprotocol/specification` upstream for a published elicitations-clause revision that would corroborate hypothesis 1.
- If quartet realizes (4 carriers same-cell within 8h), this would establish a new compound primitive: **same-cell cross-carrier rapid-adoption-cascade**, more constrained than synth-647's general MCP-subsystem QUINTET.

**Why this is not synth-647-restated**:
synth-647 catalogued a 5-leg MCP-subsystem QUINTET on 5 **disjoint** internal cells, treating "MCP" as the unifying axis. synth-649 catalogues a 2-leg DOUBLET on a **single shared** internal cell (elicitations), making this a strict sub-pattern with stronger directional implications — same-cell co-occurrence implies upstream-spec or defect-class causation more directly than disjoint-cell co-occurrence does.

**Why this is not Add.331 P-331.C-restated**:
P-331.C predicted "5th carrier MCP-class fresh-open" at prior 0.35 — synth-649 satisfies this in form (goose is 4th carrier, codex re-engages with 5th leg) but the more salient finding is the **internal-cell coincidence**, which P-331.C did not anticipate. The forecast realized but the realized phenomenon is more specific than predicted.

**Cross-references**: Add.332 §carrier-2/§carrier-7; W17-synth-647 (parent MCP-subsystem QUINTET, same-tick 21m window, 5 disjoint cells); W17-synth-509 (opencode-internal MCP-config cluster, single-carrier comparator); W17-synth-422 (litellm-internal MCP refactor cohort, single-carrier comparator); Add.331 P-331.C resolution.
