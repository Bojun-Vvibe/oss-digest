# W17 cross-repo synthesis #11 — ACL/presentation drift: auth enforced at the chat path, leaked everywhere else (2026-04-24T12:55Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern

Authentication and access-control checks in this generation of agent stacks were added when the only meaningful path through the system was "client → chat-completion endpoint → upstream provider." Since then, every project has grown a swarm of *adjacent* paths — list endpoints, passthrough routes, health checks, model pickers, capability negotiations, presentation/UI dashboards — and each of them was written either before the ACL layer existed or by a contributor who did not know it did. The result is a uniformly broken contract: **the enforcement layer is correct (it rejects what it should reject), but the presentation, listing, and side-channel layers report a different state, leak access where they should not, or fail closed in a way the supervisor loop interprets as "retry forever."** Users cannot reconcile what the UI says with what the runtime does without reading source.

This is the same failure shape that hit Kubernetes RBAC users in 2018-2019 (`kubectl get` showing resources the requesting user could not actually read) and that hit AWS IAM users continuously since 2014 (the IAM simulator agreeing the call should succeed while the actual call denies, or vice versa). The difference is that K8s and AWS eventually grew documented "decision logs"; the agent stacks have nothing of the sort yet.

## Concrete instances from W17

1. **LiteLLM `GET /v1/models` ignores `user.models` ([BerriAI/litellm#26420], fix in #26421).** A key whose `user.models` is restricted to three model IDs receives the full proxy catalog when it lists models. The chat-completion path correctly rejects requests for models not in the user's allowlist; the list path was written before `user.models` existed and was never updated. The fix in #26421 is a one-line filter at the list-handler boundary — i.e., the path-by-path patch shape, not an architectural change.

2. **LiteLLM Bedrock passthrough bypasses `key.models` and `user.models` ([BerriAI/litellm#26399], fix in #26416).** Same shape, different path: the passthrough route accepts any model the caller specifies, regardless of ACL. The fix-in-progress is being asked by the maintainers to also cover the Anthropic and Vertex passthroughs, which have the same gap. The reporter's first cut was inline; the maintainers want it factored into a shared `RouterAuth` helper. That helper does not exist yet.

3. **codex `/approvals` "Full Access" UI/runtime divergence ([openai/codex#19349], [openai/codex#19356]).** The model permission UI shows "Full Access" to the user, but the runtime remains restricted with no escalation path. Both reports filed within one minute of each other, by different users, against `0.125.0-alpha.2`. The UI reads from a permission cache that is updated when the user clicks "grant"; the runtime reads from a separate session-state field that is updated only after a server-side capability handshake. The handshake failed silently in alpha.2 (likely related to the same MCP stdio double-launch in #19338), so the UI advanced and the runtime did not.

4. **codex revoked-account → high-CPU spinner ([openai/codex#19359], [openai/codex#19271]).** When the upstream auth/identity layer denies — because the org revoked the account, or because bundled `node.exe` cannot be executed on Windows — the supervisor loop interprets the failure as "transient, retry" rather than "terminal, surface to user." The result is a CPU-burning loop with no UI signal. This is the *symmetric* shape of the leakage bugs above: there, the presentation layer over-reports access; here, the supervisor under-recognizes denial. Both are downstream of the same root: there is no shared "authoritative auth state" object that all layers consult.

5. **LiteLLM auth-denial logs at ERROR with full traceback ([BerriAI/litellm#26424], fix in #26425).** A normal 401/403 from a misconfigured client floods Sentry/Datadog with stack traces because the error-classification convention treats authentication as exceptional rather than expected control flow. This is not a leak per se but is the *operational* dual of the leak bugs: the auth surface was retrofitted into a codebase whose log/error conventions predate it, so even when it works correctly it is mis-classified.

A weaker but real sixth instance: **opencode prompt-injection ordering ([anomalyco/opencode#24156]).** The environment/skills prompt is injected *after* the custom agent prompt, breaking agents whose instructions assume "I am the first thing the model sees." This is presentation drift inside the prompt-construction layer — the agent's view of its own context does not match what the runtime actually sends.

## Why the pattern is recurring now

Three forces:

- **Auth/ACL was retrofitted, not designed-in.** Every project here started as "anyone with the URL can call any model." `key.models`, `user.models`, team scopes, JWT claims, and per-route gates were all added incrementally. Each addition patched the chat path because that was where the active complaints were; adjacent paths were touched only when the next bug-report named them.

- **There is no single "authoritative auth state" object.** UI permission state, runtime session state, list-endpoint visibility state, and passthrough capability state are all separate caches that get updated by different code paths on different events. Drift is the default; consistency requires explicit cross-cache invalidation that nobody wrote.

- **The supervisor/agent loop assumes "transient by default."** Agent loops are tuned for the network-flake case: when something fails, retry, because most failures are transient. Auth denials are *not* transient — they get worse, not better, with retry — but the loop has no way to distinguish, so it spins. This is why the high-CPU-on-revoke pattern keeps recurring in different shapes.

## Diagnostic test

For any project with an ACL: pick three different paths into the system (chat completion, model list, health check, passthrough, UI) and ask the *same* question through each: "what models can this key reach?" If the four answers do not match, you have ACL/presentation drift. The faster test: search the source for the ACL-check function and count its call sites. If the count is less than the count of distinct user-facing paths, the gap is your bug surface. For LiteLLM as of 12:55Z W17, the ACL-check function (`check_user_model_access` and friends) has 11 call sites and the proxy exposes ~30 distinct user-facing paths.

## Prediction

By **end of W19 (2026-05-10)**, at least one of {LiteLLM, codex} will ship a centralized auth-decision helper (`RouterAuth.check`-style) consumed by all paths, **but it will land alongside, not replace, the existing inline checks**. Removing the inline checks requires confidence that the helper is exhaustive, and exhaustive coverage requires the kind of integration test suite that none of these projects yet maintains. Estimated probability the helper ships: 0.55. Estimated probability the inline checks are removed in the same release: 0.10. Estimated probability that a *new* ACL-leak bug is filed in W18 against a path not yet in the helper: 0.85.

Secondary prediction: **the codex `/approvals` UI/runtime divergence (#19349, #19356) will be fixed by adding a "refresh" button to the UI rather than by removing the cache that drifted** — i.e., the maintainers will choose the user-facing workaround over the architectural fix, because the architectural fix requires reasoning about the MCP capability-handshake retry semantics that #19338 already failed to fully address. Estimated probability the "refresh" path is taken: 0.60.

## Cross-references

- Synthesis #4 (key-regen privesc) — same root cause class: auth-state caches that update on different events.
- Synthesis #6 (IDE/VS Code regression hotspot) — the codex `/approvals` instance lives in this surface.
- Synthesis #7 (provider-shape leakage) — adjacent: the leakage there is at the model-output boundary, here at the auth-input boundary; both stem from "we patched the obvious path and missed the symmetric one."
- 2026-04-24 daily addendum @ 12:53Z — primary evidence base.
