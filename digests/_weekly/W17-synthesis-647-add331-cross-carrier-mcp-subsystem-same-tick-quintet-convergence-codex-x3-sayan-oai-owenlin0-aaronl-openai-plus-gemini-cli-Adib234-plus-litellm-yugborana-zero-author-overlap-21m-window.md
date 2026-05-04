# W17-synthesis-647 — Cross-carrier MCP-subsystem same-tick QUINTET convergence on three carriers (codex×3 + gemini-cli×1 + litellm×1)

**Anchor**: ADDENDUM-331 capture window 2026-05-04T19:55:00Z → 20:45:00Z (capture-snapshot 18:50:00Z).

**Pattern statement**: Within a single 50m capture tick, **five distinct fresh-open or head-stable PRs whose primary surface is the MCP (Model Context Protocol) subsystem** appeared in top-8 listings across **three carriers** simultaneously, with no shared author across carriers and no upstream coordination signal — instantiating a same-tick cross-carrier MCP-subsystem QUINTET that is distinct from the prior single-carrier MCP clusters cataloged at synth-422 (litellm-internal MCP refactor cohort) and synth-509 (opencode-internal MCP-config cluster).

**Carriers and legs**:
- **openai/codex #21053** head `32ff6838f85bb833fa8a136488e86b452d353898` (sayan-oai — `Use MCP server instructions in deferred namespace descriptions`, FRESH-OPEN 18:15:44Z) — server-instructions sourcing for namespace descriptions
- **openai/codex #21054** head `581a7e09e709796a0789ae0259371e4c35424a51` (owenlin0 — `rollout: store web search and mcp tool calls`, FRESH-OPEN 18:18:36Z) — rollout-state instrumentation for MCP tool-call storage
- **openai/codex #21055** head `ca27c187609b88bd913645cd3fc62a11ed25b6ce` (aaronl-openai — `Preserve session MCP config on refresh`, FRESH-OPEN 18:24:43Z) — session-state preservation for MCP config across refresh
- **google-gemini/gemini-cli #26457** head `e629fbe0ce46e388df01c4726a4d980e42615c80` (Adib234 — `fix(cli): improve mcp list UX in untrusted folders`, FRESH-OPEN 18:36:37Z) — MCP list-command UX in untrusted-folder context
- **BerriAI/litellm #27109** head `0072fb3e200e19dcc933b711a1834c78b1e190f2` (yugborana — `feat(mcp): split core mcp files into separate PR`, head-stable Add.329→331, 3-tick survival) — core MCP file-structure split

**Distinguishing axes vs prior MCP-class clusters**:
- **Cross-carrier dimension**: synth-422 was litellm-internal (single-carrier multi-author); this QUINTET spans 3 carriers. Cross-carrier MCP-subsystem co-occurrence has no prior recorded same-tick instance at n≥3 carriers.
- **Surface-class diversity within MCP**: 5 legs touch 5 disjoint MCP cells (namespace-descriptions, tool-call-rollout-storage, session-config-refresh-preservation, list-UX-untrusted-folder, core-file-structural-split). MCP-internal-surface dispersion coefficient = 5/5 = 1.0 (maximally disjoint).
- **Author-overlap zero**: 5 distinct authors (sayan-oai / owenlin0 / aaronl-openai / Adib234 / yugborana) with no cross-carrier overlap; rules out coordinated single-actor injection.
- **Temporal density**: 4 of 5 legs fresh-opened within 21m window (18:15:44Z → 18:36:37Z); 5th is multi-tick-stable carry. Fresh-open density = 4 fresh / 21m = 11.4 legs/hr equivalent rate within window.

**Co-cluster nominees not formally counted (sub-threshold)**:
- charmbracelet/crush #2782 head `40684228138303a922ff71a8f39dfe85fad30572` (meowgorithm — `fix(config): restore full shell expansion in MCP config values`) — MCP-config-touching but primary surface is shell-expansion config; classified weak co-cluster, would lift to carrier-4 promotion if reclassified.
- charmbracelet/crush #2788 head `f9134777c941001444eb57ecc81bfcb49c6366f5` (meowgorithm — `lenient shell expansion default, uniform coverage across MCP, LSP, and providers`) — MCP-mentioned in title but cross-cutting config not MCP-primary.

**Why this is not synth-422-restated**: synth-422 catalogued litellm-internal MCP refactor cohort (yugborana series) as single-carrier multi-author within-window; this synth-647 records the **first observed n=3 carrier same-tick MCP-class co-occurrence**, with 4-fresh-of-5 legs opened in 21m, zero author-overlap across carriers, and maximally disjoint MCP-internal surface dispersion. Prior comparators are uniformly single-carrier or multi-tick.

**Why this is not synth-509-restated**: synth-509 catalogued opencode-internal MCP-config cluster (single carrier, single author cluster); the 647 quintet is multi-carrier multi-author with no opencode primary participant.

**Mechanism hypotheses (ranked by Bayesian fit to evidence)**:
1. **Upstream MCP spec/protocol revision recently published** triggering parallel adoption-and-fixes across implementations (would explain cross-carrier zero-overlap convergence; not directly observable from PR data alone).
2. **Org-internal MCP-related issue triage cycle** at OpenAI propagated to 3 codex legs by 3 OAI-suffix authors within 9m, with gemini-cli and litellm independently arriving at MCP-related work this tick (coincidence-rate hypothesis; less parsimonious).
3. **MCP downstream-defect class** (config-refresh / tool-call-storage / list-UX) maturing simultaneously across implementations as user-base reaches scale where these edge cases manifest in reports.

**Forward signal**: monitor next 2 ticks for (a) opencode/crush/qwen-code/goose MCP-class fresh-opens to lift quintet → sextet/septet across 4–5 carriers; (b) any MCP-spec-version bump in upstream `modelcontextprotocol/specification` repo that would corroborate hypothesis 1.

**Cross-references**: Add.331 §carrier-2/3/5; W17-synth-422 (litellm MCP refactor cohort); W17-synth-509 (opencode MCP-config cluster); W17-synth-643 (codex single-author octuplet, distinct mechanism); W17-synth-645 (codex apply_patch cross-author doublet, adjacent-but-distinct subsystem this same Add.330→331 transition).
