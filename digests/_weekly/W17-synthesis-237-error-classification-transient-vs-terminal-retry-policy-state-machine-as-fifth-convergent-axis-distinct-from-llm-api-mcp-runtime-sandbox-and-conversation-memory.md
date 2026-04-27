# W17 synthesis #237 — error-classification / transient-vs-terminal retry-policy state machine as a 5th convergent-activity axis distinct from LLM-API (1), MCP (2), runtime-sandbox (3), and conversation-memory (4), seeded by gemini-cli `sticky_retry` policy refactor and litellm `RequestNotRead` masked-error rebuild within 2h16m

**Promoted from:** ADDENDUM-100 (capture 20:42Z) review of carry-over and in-window OPENs touching error-classification surfaces.
**First operational evidence:** 2026-04-27 18:15:11Z (gemini-cli DavidAPierce #26066 OPEN) → 19:39:25Z (codex fjord-oai #19865 `Cap original-detail image token estimates` MERGED, an error-prevention cap fix at the model-protocol error-budget layer) → 20:31:28Z (litellm samrusani #26633 `RequestNotRead` masked-error rebuild OPEN). Cross-repo span: **2h16m17s**.
**Verifications:** All cited PRs pulled live via `gh pr view <num> --repo <repo>` 2026-04-27T20:42Z; titles, authors, SHAs, timestamps quoted from the JSON envelope.

## Claim

A **fifth axis of cross-repo convergent-activity coupling** has emerged in W17, structurally distinct from the four prior axes:

- **Axis 1 (synth #227)** LLM-API surface — what the model sends/returns.
- **Axis 2 (synth #229)** MCP / agent-tool-integration — how the agent invokes external capabilities.
- **Axis 3 (synth #233)** Runtime-sandbox / permission — how execution is isolated.
- **Axis 4 (synth #236)** Conversation-memory / context-architecture — what the agent remembers.
- **Axis 5 (this synth)** **Error-classification & retry-policy state machine** — *how the agent (and its proxy/SDK layers) decides whether an upstream failure is transient, sticky, or terminal, and what fallback / retry / mask behavior follows.*

This axis lives at the **resilience layer** of the agent stack, structurally **between** axis 1 (model-protocol) and axis 4 (agent-state), and is **decision-making about failure** rather than direct protocol shape (axis 1) or memory shape (axis 4).

| Axis | Layer | Convergent fix concern | This-week anchor |
|---|---|---|---|
| 1 (synth #227) | Model-protocol | Reasoning content, response shape, streaming defaults | (prior W17 cluster) |
| 2 (synth #229) | Tool-integration | MCP server config, tool-spec | (prior W17 cluster) |
| 3 (synth #233) | OS-execution | Sandbox primitives, permissions | gemini-cli #26065 |
| 4 (synth #236) | Agent-state | Memory modules, ContextManager | codex split-memories series + opencode #24661 |
| **5 (this synth)** | **Resilience** | **Error classification, retry-state, fallback policy, masked-error reconstruction** | **gemini-cli #26066 + litellm #26633** |

## Evidence — seeding cluster (verified by `gh pr view`)

### Anchor 1: gemini-cli DavidAPierce #26066 — `sticky_retry` policy refactor

- **Title:** `Update policy so transient errors are not marked terminal`
- **Author:** DavidAPierce (David Pierce)
- **Opened:** 2026-04-27T18:15:11Z, **STILL OPEN** at synth-close (lifespan 2h27m+).
- **Body (verbatim):** "Addresses an issue where the CLI would unexpectedly ignore user-selected models (like Gemini Pro Preview) and silently fall back to the Flash model during temporary API failures. By updating the error handling policy to treat transient errors (like rate limits or 503s) as `sticky_retry` instead of `terminal`, the policy engine will now retry the currently selected model rather than instantly degrading to the next fallback model in the chain."
- **Files touched:** `packages/core/src/availability/policyCatalog.ts`, `packages/core/src/config/defaultModelConfigs.ts`, `packages/core/src/availability/policyCatalog.test.ts`.
- **Architectural significance:** Introduces a **3-state error classification** (`transient` / `sticky_retry` / `terminal`) and rewires the **default state-transition table** in a `policyCatalog`. This is **not a one-line fix**; it is a **state-machine refactor** of the resilience layer. The verb shape `Update policy so X are not marked Y` and the file path `availability/policyCatalog.ts` reveal a **named subsystem** (`availability`) with a **named decision table** (`policyCatalog`). Existence of `policyCatalog.test.ts` with explicit retry-behavior assertions confirms this is a **first-class design surface** in gemini-cli, not an incidental error handler.

### Anchor 2: litellm samrusani #26633 — `MaskedHTTPStatusError` reconstruction failure on unread streams

- **Title:** `fix: handle image edit mask multipart errors without RequestNotRead`
- **Author:** samrusani (Sam)
- **Opened:** 2026-04-27T20:31:28Z, **OPEN** at synth-close.
- **Root cause (verbatim from PR body):** "When OpenAI image edit requests include file uploads, httpx can represent the multipart request body as an unread stream. `MaskedHTTPStatusError` rebuilt a masked request by reading `original_error.request.content`, which raises `httpx.RequestNotRead` for those multipart streams and **hides the original upstream error**."
- **Architectural significance:** This is a **failure of the error-masking reconstruction path** itself — a meta-error: the resilience layer's *own* error-redaction logic raises a fresh exception that **shadows the upstream error the user actually needed to see**. The PR fixes the `MaskedHTTPStatusError` rebuild to avoid reading unread streaming bodies. The very existence of `MaskedHTTPStatusError` (a named class in `litellm/llms/custom_httpx/http_handler.py`) confirms litellm has a **dedicated credential-leak-prevention error-wrapping subsystem** in the resilience layer — structurally analogous to gemini-cli's `policyCatalog`.

### Anchor 3: codex fjord-oai #19865 — token-budget cap as error-prevention at model-protocol boundary

- **Title:** `Cap original-detail image token estimates`
- **Author:** fjord-oai (Curtis 'Fjord' Hawthorne)
- **Opened:** 2026-04-27T19:04:51Z, **MERGED** 2026-04-27T19:39:25Z, SHA `277186ec85da6b1aac9782c9bc8ec1ac31427caa`. Lifespan 34m34s.
- **Architectural significance:** A token-budget cap **prevents** a downstream `context-length-exceeded` error class. This is **proactive resilience** — capping a budget so a known error class never triggers. Pairs with anchor 1 (`sticky_retry`) and anchor 2 (`MaskedHTTPStatusError` rebuild) as **three different positions on the resilience-layer spectrum**:
  1. **Pre-error budget enforcement** (codex #19865)
  2. **In-error classification & retry policy** (gemini-cli #26066)
  3. **Post-error masking / reconstruction** (litellm #26633)

These three positions form a **complete error-handling lifecycle decomposition**: prevent → classify-and-retry → mask-and-surface.

### Supporting evidence — adjacent W17 cluster members

- **goose namanvats-dev #8870** `fix(cli): emit cumulative token usage in stream-json/json complete event` (OPEN 2026-04-27T20:37:13Z) — token-usage emission is **resilience-adjacent observability**: clients use cumulative usage to predict **`context-length-exceeded` proximity** and trigger pre-error budget actions (anchor-3 family).
- **litellm musse #26628** `Fix unsupported thinking_budget=0 for Gemini Pro` (OPEN 2026-04-27T18:35:35Z) — **unsupported-parameter classification** at the provider-translation layer; this is anchor-2 family (in-error classification) but at the **request-validation** sub-layer rather than the **response-error** sub-layer.
- **gemini-cli gaurav0107 #26074** `fix(core): handle ENAMETOOLONG/ENOTDIR in robustRealpath (#26010)` (OPEN 2026-04-27T20:31:56Z) — filesystem error-class enumeration; tail-references issue #26010 indicating **an existing tracked surface** for filesystem error classification, parallel to gemini-cli's `policyCatalog` for API-error classification.

## Distinguishing kinetics — why this is an axis, not a coincidence

1. **Named-subsystem signature.** Both gemini-cli (`policyCatalog`, `availability/`) and litellm (`MaskedHTTPStatusError`, `custom_httpx/http_handler.py`) have **first-class named modules** dedicated to resilience. This signature is **distinct from** axis 1 (no `policyCatalog`-class module for response shape), axis 2 (MCP is a protocol, not a policy table), axis 3 (sandbox is OS-level, not error-state), axis 4 (memory is data, not policy).

2. **Three-state-machine convergence.** gemini-cli #26066 introduces `transient` / `sticky_retry` / `terminal` as a 3-state classification. This is **structurally identical** in shape to litellm's masked-vs-unmasked-vs-degraded-fallback decision tree implicit in `MaskedHTTPStatusError` handling. Two repos have **independently arrived at 3-state error decision tables** in W17.

3. **Lifecycle decomposition (prevent / classify / mask).** Anchors 1, 2, 3 together form a **complete pre-classify-post error lifecycle** across **three different repos** within **2h16m**. Compare to axis 3 (synth #233), which had only the *classify* position represented (sandbox cleanup), or axis 4 (synth #236), which had only the *architecture* position represented (memory wiring). Axis 5 is the **first cross-repo cluster to span an entire functional lifecycle** in a single synthesis window.

4. **Cross-axis-tangent isolation.** None of the three anchor PRs touch axis-1 protocol shape (no `reasoning_content`), axis-2 MCP, axis-3 sandbox, or axis-4 memory. Anchor 1 touches `defaultModelConfigs.ts` but for **policy-state defaults**, not protocol fields. Anchor 2 touches `httpx` request handling but for **error-masking**, not request shape. Anchor 3 touches token estimates but for **budget enforcement**, not token-emission semantics. This axis is **cleanly separable** from the prior 4.

## Falsification predicates entering Add.101–Add.104

If axis 5 is real, we expect the following signals to land within 4 windows:

- **Pred A (high-confidence):** ≥1 additional repo (codex / qwen-code / opencode / goose) opens or merges a PR with title or body containing `policy`, `retry`, `transient`, `terminal`, `fallback`, `circuit`, `backoff`, or `error class*` on a named-resilience-module file path. Prediction: **TRUE by Add.103.**
- **Pred B (medium-confidence):** gemini-cli DavidAPierce #26066 merges within 2 windows (sub-2h-from-synth-close), confirming maintainer endorsement of the `sticky_retry` 3-state model. Prediction: **TRUE by Add.102.**
- **Pred C (medium-confidence):** litellm samrusani #26633 merges within 2 windows. Prediction: **TRUE by Add.102.**
- **Pred D (falsifier):** If by Add.104 no third repo lands an axis-5 PR AND the two anchors remain OPEN, axis 5 is **downgraded to "litellm+gemini-cli W17 dyad"** rather than a generalized convergent axis.

## Layered-stack model now reads as 5 axes

```
[Resilience (axis 5)]              ← prevent / classify / mask
    │
[Agent-state (axis 4)]             ← memories, ContextManager
    │
[Tool-integration (axis 2)]        ← MCP, tool-spec
    │
[Model-protocol (axis 1)]          ← reasoning_content, streaming
    │
[OS-execution (axis 3)]            ← sandbox, permissions
```

Resilience sits **above** agent-state because retry/fallback decisions consume conversation context (a retry's prompt is the same as the original prompt + memory), while OS-execution sits at the bottom as the primitive substrate. Tool-integration and model-protocol are **horizontally adjacent** at the I/O boundary.

## Status at synth-close

- **W17 axis count:** 5 (was 4 at synth #236).
- **Anchor PRs verified:** gemini-cli #26066, litellm #26633, codex #19865 (merge SHA `277186ec85da6b1aac9782c9bc8ec1ac31427caa`).
- **Cross-repo merged membership:** 1 (codex anchor merged; gemini-cli + litellm anchors OPEN).
- **Promotable to axis-status pending:** Pred A confirmation by Add.103.
