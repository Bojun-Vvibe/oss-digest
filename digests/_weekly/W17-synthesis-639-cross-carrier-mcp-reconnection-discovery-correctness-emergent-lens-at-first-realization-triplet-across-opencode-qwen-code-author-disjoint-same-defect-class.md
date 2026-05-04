# W17-synthesis-639 — Cross-carrier MCP-reconnection / discovery-correctness emergent lens at first-realization triplet across opencode + qwen-code (author-disjoint same-defect-class)

**Post**: ADDENDUM-325
**Class**: cross-carrier convergent-defect-class cohort (MCP transport reconnection / process discovery)
**Cardinality**: TRIPLET realized via 1 leg in opencode + 2 legs in qwen-code (author-disjoint, same-defect-class)

## Pattern

In the Add.325 capture window (2026-05-04T14:55:00Z → 15:45:00Z), three concurrently-open PRs across two carriers exhibited convergent fixes on the **MCP transport / discovery / reconnection correctness defect-class**:

1. sst/opencode #25670 head `631d74e5add651d7f3be43783c8094432b68ddce` (water-in-stone `fix(mcp): auto-reconnect on transport errors (#25287)` — opencode anchor leg, MCP transport-error recovery).
2. QwenLM/qwen-code #3819 head `6ab6703a890b339abdabd4960dfe79ad6943ae2b` (B-A-M-N `fix(core): prevent duplicate MCP processes from concurrent discovery` — qwen-code leg #1, MCP-process-discovery concurrency-correctness).
3. QwenLM/qwen-code #3818 head `f2e19a373c99b98aa4b3c64d7c9a75849d4565e0` (cyphercodes `fix(core): coalesce MCP server rediscovery` — qwen-code leg #2, MCP-server rediscovery coalescing).

All three are `fix:` PRs touching the **MCP-client lifecycle layer** at three adjacent defect-points along the connection lifecycle:
- Transport-error → reconnect (opencode #25670)
- Discovery → de-duplicate concurrent process spawns (qwen-code #3819)
- Discovery → coalesce repeated rediscovery requests (qwen-code #3818)

This is a **cross-carrier same-defect-class triplet** — three different authors (water-in-stone, B-A-M-N, cyphercodes), two different carriers, three different code paths, all converging on the same architectural surface (MCP-client lifecycle robustness) within the same 50-minute capture window. The qwen-code internal pair (#3818/#3819) already constitutes an author-disjoint same-defect-class doublet within a single carrier — and the opencode leg #25670 elevates this to a **cross-carrier triplet**.

## Why this is a distinct class from W17-synth-637 MCP-extension cohort

W17-synth-637 documented a cross-carrier **MCP-extension** cohort (`feat:` PRs adding MCP capabilities — memory context, tool sanitization, OAuth-broker auth, core-MCP refactor split). W17-synth-639 documents a structurally-orthogonal cohort: all three legs are `fix:` PRs on the **MCP-client lifecycle** (connect / discover / reconnect), not extensions of MCP capability surface.

| Cohort | Mode | Surface | Authors | Carriers |
|--------|------|---------|---------|----------|
| MCP-extension (W17-synth-637) | `feat:` | memory / tools / OAuth / refactor | jif-oai (depth-stack) + others | codex + litellm |
| MCP-reconnection (this synth) | `fix:` | transport-error / discovery / rediscovery | water-in-stone + B-A-M-N + cyphercodes | opencode + qwen-code |

Both cohorts are concurrent (same Add.325 window, and W17-synth-637 also overlapped Add.324). The MCP-reconnection lens is **complementary not redundant**: extensions add capability, lifecycle-fixes harden the substrate that capability rides on. When two cohorts on the same architectural surface (MCP) co-fire across multiple carriers in the same week, this signals **collective MCP-substrate maturation** — the ecosystem is simultaneously broadening MCP capability AND hardening MCP plumbing.

## Why "first-realization" not "carry"

The qwen-code internal pair #3818 (cyphercodes, opened 04:17:09Z) and #3819 (B-A-M-N, opened 04:35:09Z) emerged 18 minutes apart on 2026-05-04. The opencode #25670 (water-in-stone, opened 04:07:38Z) preceded both by 10–28 minutes — making opencode #25670 the **temporal anchor** of the cross-carrier triplet, with two qwen-code legs landing within ~30m of the anchor. All three carry head-stable into Add.325 (no SHA revisions), making this triplet **structurally crystallized** rather than fluid.

This is the **first ADDENDUM-cycle** in which all three legs are jointly cited with explicit cross-carrier same-defect-class framing — prior addendums cited individual legs but did not couple them as one cohort. W17-synth-639 inaugurates this lens.

## Predictive consequences

If the lens extends across Add.326+, expected next-tick signatures are:
- **Quartet-extension via fourth carrier** (litellm or codex MCP-client-lifecycle fix) — prior 0.09 per P-325.D.
- **Within-carrier triplet on qwen-code** if a third qwen-code MCP-discovery/reconnection PR opens within 4h of #3818/#3819 — currently no signal.
- **Author-cross-fertilization** if water-in-stone, B-A-M-N, or cyphercodes open a same-defect-class PR on a different carrier — low-prior-base, but would strongly confirm the lens as a real ecosystem-level signal rather than coincidence.

Failure-mode tracking: if all three legs head-stabilize for 3+ ticks without quartet-extension, the lens **truncates at triplet** and gets archived as a frozen cohort signature. Modal upper-tail of W17-synth-639 lifespan = TRIPLET truncation at 3–5 ticks (prior 0.55 mass).

## Anchor SHAs (for future verification)
- opencode #25670 — `631d74e5add651d7f3be43783c8094432b68ddce`
- qwen-code #3818 — `f2e19a373c99b98aa4b3c64d7c9a75849d4565e0`
- qwen-code #3819 — `6ab6703a890b339abdabd4960dfe79ad6943ae2b`
