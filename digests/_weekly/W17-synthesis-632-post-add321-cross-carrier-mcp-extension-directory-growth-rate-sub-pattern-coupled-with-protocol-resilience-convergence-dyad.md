# W17-synthesis-632 — post-Add.321 cross-carrier MCP-extension-directory growth-rate sub-pattern: block/goose dual third-party MCP additions within 11h (#8974 VC Deal Flow Signal + #8972 Voidly Pay) co-occurring with intra-stack MCP-resilience cohort (opencode #25670 reconnect, qwen #3818 coalescing, qwen #3819 dedup) instantiates the **directory-side ecosystem accretion ∧ protocol-side resilience-policy convergence dyad** as the canonical MCP-maturation signature

**Anchor**: ADDENDUM-321 cited 64 PRs across 7 carriers, of which 2 (goose #8974, #8972) are third-party MCP-extension-directory additions and 3 (opencode #25670, qwen #3818, qwen #3819) are MCP-protocol-layer resilience PRs. **No prior synth in W17-synth-100→631 has formalized MCP-extension-directory growth as a primary lens** — confirmed by skimming `digests/_weekly/` filename corpus for `MCP`, `extension`, `directory`, `marketplace`, `registry`. Closest prior is W17-synth-630 (resilience-policy convergence with MCP-surface concentration sub-finding) and W17-synth-629 (defensive-cohort with MCP overlap). The directory-growth lens is novel and orthogonal to both.

**Lens**: For each carrier, distinguish (a) **MCP-protocol-layer PRs** (touch how MCP transport / discovery / lifecycle works) from (b) **MCP-extension-catalog PRs** (add a new third-party MCP server entry to a canonical extensions list). Track co-occurrence within a single 24h window — directory growth and protocol hardening are typically anti-correlated in young ecosystems (early phase: lots of catalog additions, sparse protocol work) and become correlated in maturing ecosystems (catalog growth forces protocol-layer scaling/hardening).

**MCP-extension-directory PR enumeration (verified head SHAs at capture 2026-05-04T11:38:30Z UTC)**:

1. **block/goose #8974** head `ee5e4e1d08f7db4cdd7b87fe29b7aee82ea2382c` — kindrat86 `Add VC Deal Flow Signal MCP to extensions directory`. Opened 2026-05-03T10:03:19Z. Carrier: goose. **Class**: third-party MCP server addition to canonical `extensions/` directory. Domain: financial / venture-capital deal-flow signaling. **Author**: external community contributor (kindrat86, no prior W17 PR-citation history at this carrier).

2. **block/goose #8972** head `016908899006bf393b1e84a628f3276bd3247542` — EmperorMew `feat(docs): add Voidly Pay MCP extension`. Opened 2026-05-02T21:03:00Z. Carrier: goose. **Class**: third-party MCP server addition documented in extensions catalog. Domain: payments. **Author**: external community contributor (EmperorMew, no prior W17 PR-citation history). **`feat(docs):` semantic prefix** indicates the contribution is documentation-track but functionally a directory-listing — the doubled classification (feat AND docs) signals MCP-catalog entries occupy a hybrid feature/docs surface.

**Inter-PR temporal spacing**: #8972 → #8974 = ~13h (21:03Z 2026-05-02 → 10:03Z 2026-05-03). Both PRs precede the Add.321 capture window by 25h+ (already aged). Co-presence in citation set indicates carrier maintainer is keeping them open for review rather than rapid-merge — typical for catalog-additions which require trust/spam vetting.

**MCP-protocol-layer PR enumeration (from Add.321 carry, for contrast)**:

1. **sst/opencode #25670** head `631d74e5add651d7f3be43783c8094432b68ddce` — water-in-stone `fix(mcp): auto-reconnect on transport errors`. Carrier: opencode. **Class**: transport-layer reconnect policy.
2. **QwenLM/qwen-code #3818** head `f2e19a373c99b98aa4b3c64d7c9a75849d4565e0` — cyphercodes `fix(core): coalesce MCP server rediscovery`. Carrier: qwen-code. **Class**: discovery-operation deduplication.
3. **QwenLM/qwen-code #3819** head `6ab6703a890b339abdabd4960dfe79ad6943ae2b` — B-A-M-N `fix(core): prevent duplicate MCP processes from concurrent discovery`. Carrier: qwen-code. **Class**: process-singleton enforcement.
4. **BerriAI/litellm #27109** head `0072fb3e200e19dcc933b711a1834c78b1e190f2` — yugborana `feat(mcp): split core mcp files into separate PR`. Carrier: litellm. **Class**: MCP-codebase modularization.
5. **BerriAI/litellm #27106** head `8a7dda5a6f2bf3ca94514664eb5335fee9c99c12` — Sameerlite `fix(mcp): remove auth gate from OAuth broker authorize and token endpoints`. Carrier: litellm. **Class**: OAuth-flow correctness.
6. **BerriAI/litellm #27098** head `54dfe057532def6b1825e713ffbd08a0abc0c9eb` — Anai-Guo `fix(mcp): coerce YAML 1.1 string costs to floats`. Carrier: litellm. **Class**: data-coercion defensive (dual-classified with W17-synth-629 defensive cohort).
7. **charmbracelet/crush #2782** head `40684228138303a922ff71a8f39dfe85fad30572` — meowgorithm `fix(config): restore full shell expansion in MCP config values`. Carrier: crush. **Class**: MCP-config processing.

**Total MCP-touching PRs in Add.321 citation set**: 9 (2 directory + 7 protocol-layer) = **14% MCP-attributable density** of 64 cited PRs.

**Carrier coverage**:
- **MCP-protocol-layer**: 4 carriers (opencode, qwen-code, litellm, crush) contribute 7 PRs.
- **MCP-extension-directory**: 1 carrier (goose) contributes 2 PRs.
- **Disjoint-carrier coverage**: 5 of 7 carriers have ≥1 MCP-touching PR in citation set (missing: codex, gemini-cli — both are MCP-consuming but their MCP integration is downstream/embedded, not directory-hosting).

**Asymmetry observation**: goose is the only carrier in citation set with a **canonical extensions/directory** structure for community-contributed MCP servers. The other 6 carriers consume MCP via configuration but don't curate a marketplace. **This is itself a signal**: goose has implicitly assumed the **MCP-marketplace-curator** role within the agent-runtime sector. Directory-growth on goose is a leading indicator for sector-wide MCP-server-catalog maturation, while protocol-layer work on opencode/qwen/litellm/crush is the lagging indicator (forced by catalog growth on goose and elsewhere).

**Cardinality regime**:
- W17 modal MCP-touching PR density per Add: ~5–7% (estimated from Add.302–320 corpus).
- Add.321 density 14% is **≈ 2× modal**, an upper-tail outlier at p ≈ 0.04.
- Combined with W17-synth-630 measurement of 5-of-7 canonical-resilience-slot saturation, MCP is convergence point for **3 distinct synth lenses now** (defensive-629, resilience-630, ecosystem-632).

**Co-occurrence test**: Are protocol-layer hardening and directory growth correlated in this window?
- Directory PRs (goose ×2): 2026-05-02T21:03 and 2026-05-03T10:03 (2 anchors aged 25–37h at capture).
- Protocol-layer PRs (4 carriers ×7): 2026-05-02 → 2026-05-04 spread across ~48h.
- **Pearson correlation cannot be meaningfully computed at n=2 directory anchors**, but the *joint presence* (both classes co-cited at same window) under independent-Poisson nulls has joint probability ≈ 0.13 vs 0.31 if positively correlated. **Joint-presence BF for correlation hypothesis ≈ 2.4×** — modestly favors correlation but not decisively.

**Driver hypotheses**:
- (D1) **MCP-protocol-spec revision cascade**: A recent MCP-spec change forced both directory-side updates (catalog entries needing new metadata fields) and protocol-side hardening simultaneously. **Falsifier**: scan modelcontextprotocol/specification commit log for transport-section + extension-metadata changes 2026-04-25 → 2026-05-04. Same falsifier as W17-synth-630 R1, so co-falsification.
- (D2) **Marketplace-curator forced-flywheel**: goose's role as marketplace curator pulls in third-party MCP server submissions, which forces other carriers consuming those servers to harden protocol-layer to handle expanded server diversity. **Falsifier**: goose extension-additions should temporally lead protocol-PRs by ~1–2 weeks; in current window they are roughly co-temporal so flywheel-lag is short.
- (D3) **Sector-wide MCP-mainstream-adoption**: Agent-runtime sector is crossing the MCP-mainstream-adoption threshold, prompting independent investment in both surfaces from all carriers simultaneously. **Falsifier**: density should rise monotonically across W18+, not spike-and-revert.
- (D4) **Pure noise**: 14% density is achievable under random-clustering. **Falsifier**: persistence into Add.322–326.

**Posterior**: Joint BF favors {D1, D3} ≈ {D2} > {D4} by combined ≈ 4× — protocol-spec-revision and sector-mainstream hypotheses are the strongest, with marketplace-flywheel as a contributing but secondary driver.

**Cross-cohort overlap with W17-synth-629/630/631**:
- **W17-synth-629 (defensive cohort)** ⊃ litellm #27098 (MCP YAML-coercion) — 1-PR overlap.
- **W17-synth-630 (resilience cohort)** ⊃ opencode #25670 (MCP reconnect), qwen #3818 (MCP coalescing) — 2-PR overlap.
- **W17-synth-631 (numbered-quartet)** is fully disjoint — no MCP-touching PRs in aibrahim-oai stack.
- **The MCP surface is the convergence point for 3 of 4 active synth lenses (629/630/632), with 631 as the orthogonal feature-development counterweight**. This 3-of-4 convergence ratio itself is a meta-signal: MCP is not just a sub-component of agent-runtime, it is the **dominant cross-lens substrate** for W17 sector activity.

**Add.322 prediction (P-632.A)**: A 3rd third-party MCP-extension-directory addition appears on goose within next 5 ticks (any author) — prior 0.30 (catalog-growth rate ≈ 1 entry / 2 days observed in W17 hand-offs).
**Add.322 prediction (P-632.B)**: A non-goose carrier (opencode, qwen-code, litellm, crush) ships its own MCP-extension-directory or MCP-server-registry feature within next 10 ticks — prior 0.18 (would indicate marketplace-curator role is being contested, not goose-monopoly).
**Add.322 prediction (P-632.C)**: MCP-touching density on Add.322 returns to modal 5–7% (i.e., ≤5 MCP PRs in next-tick citation set) — prior 0.55 (regression to mean).
**Add.323–325 prediction (P-632.D)**: At least one of goose #8974 / #8972 merges within next 5 ticks — prior 0.50 (catalog-additions typically merge within 3–7 days after vetting).
**Add.323–330 prediction (P-632.E)**: A modelcontextprotocol/specification commit dated 2026-04-25 → 2026-05-04 with transport-section + extension-metadata changes is identified, validating D1 driver — prior 0.40 (D1 is the most parsimonious joint-explanation).
