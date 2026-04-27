# W17 Synthesis #229 — Cross-repo MCP/agent-tool-integration surface as a second axis of convergent-fix coupling, distinct from the LLM-API surface, with mixed open/closed resolution kinetics

**Seeded by:** ADDENDUM-96 (capture window 16:38:34Z → 17:44:06Z, 2026-04-27).
**Class:** Cross-repo convergent-fix surface taxonomy.

## Claim

The cross-repo convergent-fix coupling phenomenon documented in synths #225 and #227 (LLM-API behavior surface, specifically reasoning/thinking-content preservation) is **not a single-surface phenomenon**. A **second, structurally distinct convergent-fix surface** is observable in W17 corpus data: the **MCP / agent-tool-integration surface**. Within a sub-24h envelope this surface produced a **3-PR cross-repo cluster** with a **distinct resolution-state distribution** from synth #227 — specifically, **one CLOSED member**, which never appeared in synth #227's lifecycle (synth #227 cluster members are all OPEN or MERGED, no CLOSED).

## Evidence

Three PRs across 2 repos within a sub-24h envelope, all on agent-tool-integration semantics:

| PR | Repo | Author | Surface | State at Add.96 capture | createdAt (UTC) |
|---|---|---|---|---|---|
| #19836 `3bdb43a` | openai/codex | colby-oai | MCP custom-tool metadata (disallow fileparams metadata for custom mcps) | OPEN | 2026-04-27T17:22:44Z |
| #24618 | anomalyco/opencode | leandrosnx | MCP tool output undefined-guarding (output.split crash guard) | OPEN | 2026-04-27T13:25:35Z |
| #24605 | anomalyco/opencode | rachadaccoumeh | MCP tool argument display in permission dialog | **CLOSED** (close-not-merge resolution within Add.95 window) | 2026-04-26 (older) |

All three touch the **same semantic surface**: agent ↔ MCP-tool runtime contract (metadata constraints, output shape guarding, argument display). The surface is **not** a model-API behavior surface (synth #227's domain) — it is the **client-side integration boundary** between an agent host and the MCP protocol/tool runtime.

## Distinguishing this from synth #227

| Property | Synth #227 (reasoning-content) | Synth #229 (MCP-integration) |
|---|---|---|
| Surface class | LLM-API behavior (provider-side) | Agent-tool integration (client-side) |
| Repos involved (W17) | 4 (opencode, qwen-code, litellm, goose) | 2 (codex, opencode) |
| Resolution states observed | MERGED + OPEN (no CLOSED) | OPEN + OPEN + CLOSED |
| Propagation kinetics | merge→open chain-amplification (sub-12h envelope) | mixed; close-not-merge resolution observed within cluster |
| Provider-coupling | Strong (Anthropic adapter cluster nests inside) | Weak (MCP is provider-agnostic by design) |
| Author class | Mostly external/sub-authors | Mix of external (leandrosnx, rachadaccoumeh) and OAI insider (colby-oai) |

The **CLOSED member** is the critical structural distinguishing fact. Synth #227's chain-amplification mechanism requires OPEN members to carry the propagation signal forward; synth #229's cluster includes a **dropout pathway** (close-not-merge), which means the cluster's propagation graph has a **terminal node** rather than the open-only chain seen in synth #227.

## Why this matters

The OSS-digest corpus has been treating cross-repo convergent-fix coupling as a single phenomenon (synth #225 → #227 evolution). Add.96 evidence shows the phenomenon **bifurcates by surface class**. This means:

1. **Predictions cannot be cross-applied** between surface classes. A synth #227-style 4th-repo entrant prediction does not carry over to MCP-surface clusters. Synth #229's much-smaller envelope (2 repos vs 4) at the same temporal lag suggests **MCP-surface convergent-fix coupling propagates more slowly OR more locally** than LLM-API-surface coupling.
2. **Resolution-state distributions are surface-dependent.** MCP-surface clusters tolerate close-not-merge resolution; LLM-API-surface clusters do not (so far observed). This may reflect that MCP-surface fixes are **more often duplicated**, while LLM-API behavior fixes are **rarely duplicated** (the upstream provider behavior change is singular, so fixes are coordinated rather than redundant).
3. **The convergent-fix taxonomy expands.** Future addenda should classify each cluster by surface class and resolution-state distribution, not just by membership count.

## Falsifiable predictions

1. **Within Add.97–Add.100**, codex #19836 and opencode #24618 do **not** both merge in the same window. The mixed-resolution-state property predicts **temporal de-coupling** of MCP-surface cluster members, unlike synth #227 cluster members which tend to cluster temporally even when not merging together.
2. **Within Add.97–Add.105**, a 3rd repo (most likely **block/goose** given its MCP integration surface) opens an MCP-integration PR. If it instead arrives in **gemini-cli** or **qwen-code**, synth #229's "MCP coupling propagates more locally" claim is **falsified** (those repos are in synth #227's footprint, not MCP-typical).
3. **At least one Add.97–Add.100 MCP-cluster PR resolves via close-not-merge**, replicating the rachadaccoumeh #24605 mechanism. If all members merge, the surface-class-dependent resolution distribution claim is **partially falsified**.
4. **Within Add.97–Add.110**, codex (the OAI-insider entrant via colby-oai) **does not** trigger a litellm or opencode insider response on the MCP surface. MCP-surface coupling does not propagate via insider-to-insider channels (unlike reasoning-content surface where Anthropic-adapter sub-cluster shows insider-to-external propagation).

## Cross-references

- Synth #227 (4-repo reasoning-content convergent-fix cluster as upstream API behavior change propagation seed) — sister synth, distinguished by surface class.
- Synth #225 (cross-repo merge→open convergent-fix awareness coupling) — historical precursor to both #227 and #229.
- Synth #223 (convergent-fix-duo mutual-block resolution via close-not-merge) — provides the **resolution-mechanism vocabulary** that synth #229 inherits and applies to a 3-PR cluster (vs the 2-PR duo synth #223 originally documented). The close-not-merge mechanism is **not duo-specific**; it generalizes to N≥3 cluster surfaces.
