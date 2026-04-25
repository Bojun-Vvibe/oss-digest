# W17 synthesis #48 — Cross-repo reasoning-model fix asymmetry: agent side merges, proxy side stalls

**Window observed:** 2026-04-25 00:11Z → 00:34Z (with 6h lookback into 2026-04-24 final addendum for the agent-side merge).

**Anchoring PRs (≥4 across ≥3 repos):**

- **[openai/codex#19461]** — *"Bedrock: support reasoning_levels for GPT-5.4 / GPT-5.5"* — MERGED ~00:05Z (within prior tick), ~24-minute lifetime end-to-end. The agent-side fix for the new provider reasoning-shape contract.
- **[BerriAI/litellm#26456]** — *"[Fix] gpt-5.5 reasoning_effort capability flags"* — last touched 22:36:05Z **2026-04-24**, still **OPEN** at 00:34Z 2026-04-25. The proxy-side capability-flag PR for the same surface; has now been open across the boundary with no merge.
- **[anomalyco/opencode#24218]** — *"fix(provider): auto-enable interleaved for reasoning models"* — refreshed 00:15:28Z, still **OPEN**. The agent-side runtime-behavior PR for reasoning-model orchestration.
- **[anomalyco/opencode#24233]** — *"fix(provider): honor per-model reasoning token pricing"* — OPENED 00:29:31Z, still **OPEN**. The newly-opened agent-side **pricing-table** PR for reasoning models — extends the surface from runtime behavior into accounting.

**Pattern.** A provider semantics change (here: GPT-5.4/5.5 reasoning levels) generates **fix PRs in three distinct repos at three distinct layers**:

1. **Agent ↔ provider runtime** (codex Bedrock; opencode interleaved auto-enable)
2. **Proxy ↔ provider capability declaration** (litellm capability flags)
3. **Agent ↔ user accounting surface** (opencode per-model reasoning token pricing)

Across this 6h+ window, the **agent runtime layer (1) merged within ~24 minutes** (codex #19461). The **proxy capability layer (2) and the agent accounting layer (3) are both still open**, with the proxy PR now >2h past its last touch.

**Why this matters.**

1. **The proxy is the single shared dependency** — when codex, opencode, and any other agent route through litellm, they all depend on litellm advertising the new reasoning-effort capability. The agent-side fixes can land and ship, but until #26456 merges, the capability flag remains stale and downstream callers see capability-vs-callability skew (synthesis #38 territory). This is a **structural inversion**: the layer that gates the most callers is the slowest to merge.
2. **Pricing lags runtime.** opencode #24218 (auto-enable interleaved, runtime-behavior) refreshed before opencode #24233 (per-model pricing) was opened. Users will be able to **invoke** the new reasoning model before the agent **prices** it correctly — a 14-minute mid-window gap in which token accounting reports zero (or the wrong rate) for live calls. This is a fresh manifestation of synthesis #21 (advertised capability vs runtime delivery), but inverted: here delivery outpaces accounting.
3. **No cross-repo coordination signal.** None of the four PRs links any of the others. A maintainer reviewing litellm #26456 has no machine-readable hint that codex #19461 has already shipped the agent-side complement and that opencode #24218 is blocked-shaped on the same provider semantics.

**Why this is distinct from synthesis #23 (reasoning-shape contract bidirectional).** #23 covered the *bidirectional shape* of the request/response contract — what fields go which way. #48 covers the **release-velocity asymmetry across the layers that implement that contract**: when the contract changes, which layer ships first determines what kind of skew users see in the gap. The agent-first / proxy-second / accounting-third pattern observed here is the reverse of what one would design (proxy should advertise capability before agents claim it).

**Why this is distinct from synthesis #24 (model capability catalog drift).** #24 covered the *catalog* drifting from reality. #48 is about the **PR-merge tempo** that produces drift in the first place: agent-side merges in 24 minutes; proxy-side capability-flag PR sits >2h. The drift is being *created in real time* by the velocity gap.

**Counter-pattern.** A coordinated landing: proxy capability-flag PR merges first (declares the contract), then agent-side runtime PRs merge (consume the contract), then agent-side accounting PRs merge (price the contract). Observed pattern is the exact reverse.

**Lookback hooks.** Builds on #23 (reasoning-shape bidirectional), #24 (catalog drift), #38 (capability-flag vs callability skew), and #21 (advertised capability vs runtime delivery). #48 adds the temporal/velocity dimension: which layer's PR-merge tempo creates the gap.
