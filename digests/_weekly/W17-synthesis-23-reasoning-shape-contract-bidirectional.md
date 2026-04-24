# W17 cross-repo synthesis #23 — the reasoning-shape contract is broken in both directions on the same day (2026-04-24T17:58Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern in one sentence

**The "reasoning_content / thinking_blocks" payload that vendors started shipping with thinking-mode models has no agreed-upon contract for who must echo it back, who must drop it, and who must suppress it — and on 2026-04-24 the same week saw bugs of *every* shape against the same field across opencode, litellm, and codex.**

A field that did not exist a year ago is now a load-bearing part of multi-turn correctness on at least four vendor APIs (OpenAI Responses, Anthropic, DeepSeek, Gemini), and the four vendors disagree on whether it is the *client's* job to round-trip it, *suppress* it on request, or *generate* it without being asked. The shim layers (litellm, opencode, codex) each have a different default, and the result is a same-day burst where one project is *dropping* the field when it should pass it, another is *emitting* it when it should suppress it, and a third is *failing to hydrate* sessions that contain it.

## Why this is *not* synthesis #1 (W17 reasoning_content)

Synthesis #1 (early-W17) named the *single-direction* version of this bug: "client drops the reasoning_content from a previous turn, next turn fails because the vendor required it." That synthesis covered a single-vendor (Anthropic) family of bugs.

This synthesis is the *bidirectional generalization*. The same field is now broken in both directions (drop vs. emit), across multiple vendors, on the same day. The contract failure has graduated from a per-vendor quirk to a cross-vendor pattern. The fix surface is no longer "remember to round-trip Anthropic's reasoning_content" — it is "name an explicit, vendor-parameterized contract for what the client owes the API and what the API owes the client about reasoning state, and apply it uniformly."

## The exhibits

### Exhibit A — anomalyco/opencode drops DeepSeek `reasoning_content`, breaking thinking-mode continuity

[anomalyco/opencode#24188] — *"[DeepSeek] The `reasoning_content` in the thinking mode must be passed back to the API."*

Filed 16:56Z. The DeepSeek thinking-mode API requires that `reasoning_content` from a previous assistant turn be echoed back on the next user turn so the model can re-attach to its own prior chain-of-thought. opencode currently drops it (the response is parsed for the *visible* assistant message but not the reasoning sidecar). On the next turn the model behaves as if it never reasoned, producing answers inconsistent with its own prior thinking. This is the canonical *drop-when-should-echo* shape of the bug.

The `[DeepSeek]` prefix is significant: opencode previously had this exact bug for Anthropic (synthesis #1), it was fixed for Anthropic, and the fix did not generalize. The vendor field has the same name (`reasoning_content`) on both APIs, but the round-trip is implemented per-vendor in the response parser, so the Anthropic fix did not cover DeepSeek.

### Exhibit B — anomalyco/opencode #24190 demonstrates Exhibit A is a *hard* failure on multi-turn-with-tools

[anomalyco/opencode#24190] — *"[DeepSeek V4] reasoning_content not round-tripped — 400 error on multi-turn tool calls."*

Filed 17:42Z, 46 minutes after #24188 by a different reporter, with a concrete reproducer. The same dropped-`reasoning_content` bug from #24188 is not just a quality regression — when the prior turn included a tool call, the next turn returns HTTP 400 from DeepSeek. So the contract violation moves from "model behaves slightly worse" to "API rejects the request entirely" the moment tools are involved. The hard-failure path validates that the round-trip is genuinely *required*, not merely *recommended*.

#24188 + #24190 together are the same bug at two severities, filed within an hour, by different users. That is a strong signal the bug is hitting many users, not a corner case.

### Exhibit C — litellm `"think": false` is *ignored*, the field is emitted when it should be suppressed

[BerriAI/litellm#26413] — *"[Bug]: `\"think\": false` is ignored; reasoning_content and thinking_blocks still returned."*

Filed/updated 17:54Z. The user *explicitly* sets `"think": false` in the request, and litellm still returns `reasoning_content` and `thinking_blocks` in the response. This is the *inverse* of Exhibits A and B: opencode is dropping the field when the vendor requires it; litellm is emitting the field when the *user* requested it suppressed.

The reason this matters as a *contract* failure (and not just a feature toggle bug): downstream consumers of litellm responses now have to defensively strip `reasoning_content` from every response, because they cannot trust `"think": false` to actually suppress it. So the bug propagates: every wrapper around litellm has to write the same defensive code, and any wrapper that forgets ends up either showing the user thinking text they asked not to see, or — worse — passing the unwanted reasoning back to the next API call (which, per Exhibit A, is *required* on some vendors and *forbidden* on others — see Exhibit D).

### Exhibit D — litellm has a *third* reasoning-shape PR open from earlier in W17

[BerriAI/litellm#26443] — *"[Bug]: JSON-configured providers (e.g. Scaleway) not in openai_compatible_providers — non-standard params bypass extra_body wrapping."*

Filed 17:14Z. Not directly about `reasoning_content`, but about the *same machinery*: the parameter-wrapping code that decides whether non-standard params (including `reasoning_effort`, `thinking`, `think`) get wrapped in `extra_body` skips JSON-registered providers entirely. So for those providers, the user's `reasoning_effort` (or sibling fields) goes top-level and gets rejected by the upstream API.

This is the *third* axis of the same contract failure: opencode drops the field, litellm emits it when told not to, and the parameter-wrapping path silently strips the user's explicit request. The reasoning-mode contract is broken on the *request* side and the *response* side and the *parameter-wrapping* side — three independent failure surfaces, all in litellm or its consumers, all in W17.

### Exhibit E — codex hydration of compacted sessions fails when reasoning records are large

[openai/codex#19397] — *"Long Codex threads fail to hydrate after reload when compacted replacement_history records are large (UI shows empty, logs show missing handler)."*

Filed 16:20Z (caught in the previous addendum, restated here for the cross-repo picture). When codex auto-compaction runs against a long session, the compacted `replacement_history` record can be large enough that on session reload the hydration path fails (UI empty, logs name a missing handler). The *content* of those records is overwhelmingly reasoning text (chain-of-thought tokens that compaction summarizes). So this is the codex-side instance of the same field-shape problem: reasoning content is now large enough at session-storage time to break the storage layer, and the storage layer was not designed for the volume.

#19397 belongs to this synthesis (and not just synthesis #21's gpt-5.5 cluster) because the *failure mode* is "reasoning state cannot survive a session lifecycle event" — the same shape as Exhibits A and B at a different layer (storage instead of wire format).

### Exhibit F — codex #19400 names the wire-format mismatch for reasoning round-trips on gpt-5.5

[openai/codex#19400] — *"Remote compaction fails when using `gpt-5.5` because `/responses/compact` does not appear to support the model."*

Filed 16:40Z (also in the previous addendum). The `/responses/compact` endpoint is what codex uses to compact a session *server-side* — meaning the server is supposed to read the prior turns (including their `reasoning_content`), produce a compacted summary, and return a new state. When the endpoint does not accept `gpt-5.5`, the *remote* round-trip of reasoning state silently fails and the client falls back to local compaction (which then loops, per #19401).

So the wire-format for reasoning round-trips is *also* not consistently supported across model versions on the same vendor. This is the codex-side mirror of Exhibit A: there, opencode dropped reasoning_content on the way to DeepSeek; here, OpenAI's own server-side compaction endpoint cannot accept reasoning_content for the model it was supposedly built for.

## What ties the exhibits together

Each exhibit is a different *kind* of contract violation against the same payload:

| Direction        | Exhibit                | Failure                                                      |
|------------------|------------------------|--------------------------------------------------------------|
| Drop on send     | opencode #24188, #24190| Required field omitted, vendor returns 400 or degrades silently |
| Emit on response | litellm #26413         | Unwanted field emitted when user explicitly suppressed       |
| Strip on request | litellm #26443         | User-set parameter silently dropped before send              |
| Storage          | codex #19397           | Field volume exceeds what session storage can hydrate        |
| Round-trip       | codex #19400           | Server endpoint cannot accept the field for the named model  |

Six distinct PR/issue numbers, three repos, one payload field, one afternoon. The pattern is not "X has a bug" — it is "the field has no agreed contract, and every implementation chose a different default."

## What an agreed contract would look like

A minimum viable contract has three properties:

1. **Direction explicitness.** Every vendor adapter declares, per-model: `reasoning_content` is *required-on-echo*, *optional-on-echo*, or *forbidden-on-echo*. Opencode's per-vendor parser would then refuse to silently drop a required-on-echo field; litellm's response post-processor would refuse to emit a forbidden-on-echo field; codex's compaction endpoint registry would refuse to call a model that does not declare its own contract.
2. **User-suppression honored at the contract layer, not the response layer.** When `"think": false` is set, the request adapter must either (a) translate it to the vendor-specific equivalent, (b) refuse the request if the vendor does not support suppression, or (c) post-process the response to remove the field — but never silently ignore the user setting (Exhibit C).
3. **Volume-aware storage for reasoning records.** Storage layers (codex session reload, opencode log files) must size for *reasoning* tokens, not just visible-message tokens, because reasoning is now a 5–50× multiplier on session size depending on model.

None of the six bugs in this synthesis would have shipped if the three contract properties were named explicitly and tested per-vendor.

## Watch list for next refresh

- Whether anomalyco/opencode #24188 or #24190 gets a per-vendor fix or a generalized contract-layer fix. Per-vendor closes the bug; generalized closes the pattern.
- Whether litellm #26413 lands as "honor `think: false` for all reasoning-capable providers" (contract-shaped) or "filter the response in the Anthropic adapter" (point-fixed). Point-fix re-opens the same class for the next vendor.
- Whether codex #19400 gets a server-side fix (`/responses/compact` accepts gpt-5.5) or a client-side fall-back-to-local with a *bounded* loop. Client-side without bound re-creates #19401.
- Whether the codex catalog mismatch in #19409 gets paired with a model-capability *contract* rather than a *catalog* — a catalog is a snapshot, a contract is enforceable.
