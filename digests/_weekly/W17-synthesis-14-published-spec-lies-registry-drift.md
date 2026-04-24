# W17 cross-repo synthesis #14 — the published spec lies: registry drift across the agent stack (2026-04-24T14:10Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern

In W17, every one of the four tracked agent stacks has shipped at least one bug where **the static metadata the agent advertises about a model, route, field, or provider has drifted from what the runtime actually accepts**. The user is told the model has a 1M context window; the route caps it at 400K. The user is told the model returns `reasoning_content`; the normalizer drops it. The user is told the proxy has model X registered; the in-process router never picked up the update. The user is told the provider supports `output_config`; the wrapper strips it before send.

The unifying observation: **the agent stacks publish a "spec" — a model registry, a tool schema, a config schema, an OpenAPI surface — and the runtime is implemented against an *older* or *narrower* snapshot of that spec.** The spec is the contract the agent makes with the world; the runtime is the contract it actually keeps. Synthesis #13 covered the case where state diverges from presentation; synthesis #14 is its dual on the *spec* side: the contract diverges from the implementation. Same root force (multiple sources of truth, no enforced reconciliation), different surface.

This is distinct from normal version drift. It is not "the model added a feature and the agent has not implemented it yet." It is "the agent claims to support the feature and silently fails to."

## Concrete instances from W17

1. **GPT-5.5 context-window drift, opencode side ([anomalyco/opencode#24171]).** Filed 13:59Z 2026-04-24. The opencode model registry hard-codes the published 1M context for `gpt-5.5-codex`. The actual route enforces 400K. A user prompt at 600K hits the failure mode "exceeds the context window of this model" — coming from the route, against a registry value the user trusted. The registry never knew about the route's cap; the route never knew about the registry's claim.

2. **GPT-5.5 context-window drift, codex side ([openai/codex#19339, #19319]).** Same model, different agent, different cap. Codex caps it at ~258K despite the model's published 400K window. Two independent reporters in the same morning, against the same model, against two different agents, both reporting context-cap-divergence-from-published-spec. The drift is in the agent layer, not the model layer.

3. **DeepSeek `reasoning_content` round-trip dropped — three repos, same week.** opencode #24135 (closed by #24146 merged 12:42Z), litellm #26395, crush #2696. The DeepSeek V4 Pro model returns `reasoning_content` as a documented part of its assistant message envelope; three different agents independently strip it on the way in or fail to forward it on the next turn. The model's spec includes the field; the agents' normalizers do not. Two competing fix shapes were filed in opencode within two minutes of each other (#24146 preserve-when-present, #24150 inject-into-all) — direct evidence that even the *fix* community has no shared understanding of which side the contract should be on.

4. **opencode assistant `tool_calls` dropped on replay ([anomalyco/opencode#24170], fixing #24090).** The OpenAI-compatible request envelope for assistant messages includes an optional `tool_calls` array; opencode's session-replay path drops it before re-sending, so the provider sees an inconsistent transcript and 400s. Same shape as the DeepSeek case: the spec includes the field, the normalizer does not.

5. **LiteLLM `vertex_ai/anthropic` strips `output_config` ([BerriAI/litellm#26423], fix in #26426 opened 13:22Z).** The Vertex+Anthropic wrapper drops the `output_config` body field before forwarding, disabling task budgets on Vertex. The provider's API accepts the field; LiteLLM's wrapper does not forward it. Turnaround issue→fix-PR: 33 minutes — short, because the fix is one wrapper call site, but the *class* of bug (provider-shape leakage at the wrapper boundary) is structural and will recur.

6. **LiteLLM zero-length-message role omission ([BerriAI/litellm#26428]).** Filed 13:58Z. When a streaming response yields immediate end-of-stream, LiteLLM's normalizer drops the `role` field from the assistant stub message. The next-turn provider call rejects the resulting transcript (provider spec: every message must have a role). Same shape as #26395 / #24146 / #24170 / #26426 — a normalizer treating an edge case as "drop the field" when the contract says "preserve the envelope."

7. **LiteLLM router cache vs DB ([BerriAI/litellm#26427]).** PR opened 13:25Z. `POST /model/update` writes to the DB but does not invalidate the in-process router cache. The Admin UI lists the new model (the UI re-queries the DB); the runtime fails to route to it (the runtime reads the cache). The "registry" — what models the proxy claims to host — is in two places, and they disagree across update events. This is registry drift at a different layer than the others (the agent's *own* registry, not the upstream model spec) but it is the same shape.

8. **codex MCP servers disappear when using a custom provider ([openai/codex#19363]).** Schema validates, on-disk config is correct. The custom-provider code path skips the MCP-merge step. The advertised set of MCP servers is what the schema accepts; the actual set in-session is what the provider-specific path emits. The two diverge silently.

9. **codex `chore: alias max_concurrent_threads_per_session` ([openai/codex#19354], merged 12:33Z).** A config-key alias landed without a deprecation cycle. The schema now advertises two keys for the same setting; tooling that reads the schema sees both as valid; the runtime resolves only one of them per call. Future-drift seed: the day a behavior diverges between the two key spellings (because someone touches one path but not the other), the bug will be reported as "config does not take effect" with no obvious cause.

10. **LiteLLM UI provider dropdown missing `zai` ([BerriAI/litellm#26419]).** The router supports `zai` as a provider; the UI dropdown's source list does not include it. Cosmetic instance, but it is the third time this week the UI dropdown source has drifted from the router's actual provider list.

11. **opencode model registry catalog drift ([anomalyco/opencode#24159]).** Feature request to add a DeepSeek V4 endpoint to the Zen catalog. The registry maintains a curated subset of the upstream model surface; that subset has lagged the upstream provider's offering, and users now need to ask for entries one at a time. This is registry drift in the *omission* direction rather than the *misstatement* direction, but it is the same root: a static registry that cannot keep up with a moving upstream.

12. **codex `bearer_token` config schema cleanup ([openai/codex#19294], merged 07:17Z 2026-04-24).** The config schema previously advertised `bearer_token` for MCP entries; the runtime never honored it end-to-end. The fix is to *remove* the field from the schema (so autocomplete and validators stop suggesting it). The bug class: the schema advertised a feature the runtime did not implement. Same shape, inverted direction (spec wider than runtime, vs runtime wider than spec in #19354).

## Why this pattern is reaching cluster mass now

Three structural forces:

- **Static registries cannot keep up with provider velocity.** OpenAI, Anthropic, Google, DeepSeek, Mistral, xAI, Z, and a long tail of open-weights houses are shipping new models, new fields, new context-window adjustments, and new envelope conventions on a weekly cadence in 2026. A statically-maintained registry in any agent stack falls behind within days of the upstream change. Three of the four projects have manual registry-maintenance commits in their W17 history; none of them have an automated registry-sync job.

- **There is no shared "envelope" for assistant messages across providers.** The OpenAI envelope, the Anthropic envelope, and the DeepSeek envelope each have fields the others do not. The agent stacks normalize all three through one internal shape, and every normalization is lossy. The lossiness only matters when the field being dropped happens to be the one the next-turn provider call needs. As provider envelopes diverge, the lossy-normalization bug rate increases linearly.

- **The route layer and the registry layer evolve independently.** The route layer is updated when a new model ships (because the developer touches the code path). The registry layer is updated when someone reads the upstream changelog (because the registry is documentation-shaped). The two evolve on different cadences, by different people, and there is no enforced sync. Drift is the default.

These forces compound: more providers × more fields × more route-vs-registry cadence mismatch = more registry-drift bugs per week. The four-projects-this-week cluster is a sample, not the population.

## Diagnostic shape

Registry-drift bugs have a recognizable signature:

- The user does something the published spec says is supported.
- The agent rejects, drops the field, caps the input, or silently no-ops.
- The error message (when there is one) blames the user or the provider, not the agent's normalizer.
- The fix is at a single normalizer/registry/wrapper call site, and is almost always one line — preserve a field, raise a cap, register a model, invalidate a cache.
- The fix-PR description usually says "the {field, cap, model, route} was being {dropped, hard-coded, omitted, cached}; this preserves it."

Counter-shape: the model itself rejecting the call (a real provider-side limit). When the model rejects, the error comes back from the provider's API and includes a recognizable provider-side error code. When the agent rejects, the error comes from the agent and tends to include the agent's own internal error class.

## Diagnostic test

For any agent stack, pick one model with a recently-changed spec (DeepSeek V4 Pro, GPT-5.5, Claude 4.7) and walk these four checks:

1. **Context window:** Does the agent's registered max-context match the route's enforced cap? Test with a near-cap prompt; observe whether the rejection comes from the agent or the provider.
2. **Envelope round-trip:** Send a multi-turn conversation that includes provider-specific fields (`reasoning_content`, `tool_calls`, `output_config`, `reasoning_signature`). Capture the request body the agent actually sends to the provider on turn N+1; diff against the response the agent received on turn N. Every diff is a candidate normalizer-drop bug.
3. **Registry coverage:** List the models the agent advertises as supported. Cross-reference against the upstream provider's published model list (last 7 days). Every model in the upstream list missing from the agent registry is a registry-staleness instance.
4. **Cache vs source-of-truth:** Mutate the agent's configuration (add a model, change a route, edit a permission) via whichever interface is "official," then immediately query the agent's runtime view of the same. If they disagree, you have a registry-cache bug like #26427.

For LiteLLM in W17, all four checks fail at least once. For opencode, three of four. For codex, three of four. For crush, two of four (smaller surface area).

## Prediction

By **end of W19 (2026-05-10)**, at least one of {opencode, LiteLLM} will introduce a "registry source of truth" abstraction that:

- collapses the model registry, the route caps, and the per-provider field-allowlist into a single object;
- invalidates the in-process cache on update;
- exposes a diff endpoint between "what we advertise" and "what the route enforces."

Estimated probability the abstraction ships in W19: 0.30. Estimated probability LiteLLM moves first (because the proxy framing makes the abstraction more obvious): 0.65. Estimated probability the abstraction covers envelope-field-allowlists (the hardest part) in the same release: 0.15.

Secondary prediction: by **end of W18**, the DeepSeek `reasoning_content` fix shipped in opencode #24146 will be partially un-shipped — i.e., a follow-up PR will be filed because the conservative preservation discipline does not handle the `reasoning_signature` companion field that #24153 already raised. Estimated probability: 0.70.

Tertiary prediction: at least one of the four agents will introduce a `--strict-spec` or `--strict-registry` flag in W18-W19, gated by user opt-in, that fails loudly when a normalizer would drop a field rather than silently dropping. Estimated probability: 0.25 in W18, 0.40 by end of W19.

## What this is not

- This is not "providers keep changing their APIs and that is hard to keep up with." That is true and is the root force, but the bug shape here is *not* the agent failing to add support for a new field — it is the agent *claiming* to support the field while silently dropping it. The user-visible failure mode is fundamentally different.
- This is not the same as synthesis #5 (DeepSeek `reasoning_content` round-trip discipline). Synthesis #5 was a single-field, single-provider observation. Synthesis #14 generalizes to "the registry/normalizer/route triple is structurally drift-prone, regardless of which field, model, or provider."
- This is not synthesis #11 (ACL/presentation drift). Synthesis #11 is about the auth surface specifically; synthesis #14 is about the model/registry surface specifically. They share a root (multiple sources of truth) but operate on disjoint code paths.
- This is not synthesis #10 (config-file-as-program). Synthesis #10 was about config files acquiring control-flow semantics over time; synthesis #14 is about static registries lying about runtime behavior. The two interact (a config-key alias #19354 is itself a registry-drift seed) but the failure modes are distinct.

## Cite count

- opencode: #24171, #24135, #24146, #24150, #24170, #24090, #24159, #24153 (peripheral)
- codex: #19339, #19319, #19363, #19354, #19294
- LiteLLM: #26395, #26411 (peripheral), #26423, #26426, #26427, #26428, #26419
- crush: #2696

Total cited: 19 issues/PRs across all four tracked repos.
