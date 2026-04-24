# W17 cross-repo synthesis #16 — accepted-but-unpropagated: the live-session mutation gap (2026-04-24T15:00Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern

Synthesis #11 named the case where the *presentation* layer of an agent says one thing and the *enforcement* layer does another — the UI shows "Full Access," the runtime stays restricted. Synthesis #13 named the case where *state survives* a presentation boundary that hides it — the archived sessions are still on disk, the panel just doesn't render them. Synthesis #16 names a third, distinct, and equally common shape: **the mutation is accepted, persisted, and acknowledged with no error — but the running session continues to enforce the prior value because the live process never re-reads the source of truth.**

This is not a UI bug, and it is not a state-loss bug. The data is correct on disk. The next session, after restart, behaves as the user expects. The bug is purely temporal: between the moment the mutation is accepted and the moment the live process honors it, there is an unbounded window during which the session enforces the old value, with no signal that anything is wrong.

In W17 this pattern shows up across permission systems, configuration files, model selection, MCP server registration, and ACL changes — every one of the four tracked repos has at least one instance, and the cluster has tightened sharply over the last 48 hours. It is now a structural shape worth naming separately, because the *fix* for it is genuinely different from the fixes for #11 and #13. #11 wants to align two layers' views of the same state; #13 wants to surface state that already exists; #16 wants to **propagate a write to every live consumer of that state**, which is a much harder problem in any system that has long-lived in-process caches.

## Concrete instances from W17

1. **codex `/permissions` does not propagate to active session ([openai/codex#19256], 2026-04-24T01:55Z, re-confirmed 14:43Z).** The user runs `/permissions` inside an active session, the CLI accepts the change with no error, the new permissions are written to `~/.codex/state.toml`, and the session continues to enforce the *prior* permission set until the user restarts the CLI. The fix is conceptually simple — re-read the policy on the next turn — and structurally hard, because the permission decision is currently made at session-bootstrap time and cached on the session object for the rest of its lifetime. The reporter has confirmed the bug repros on `0.124.0`, `0.125.0-alpha.1`, and `0.125.0-alpha.2`; three releases in a row have shipped the same gap.

2. **codex `/approvals` "Full Access" does not take effect ([openai/codex#19349], 2026-04-24T11:31Z).** Same shape, different surface: the user toggles approval mode mid-session, the toggle is acknowledged, and the next tool call is still gated by the prior approval policy. This is *not* synthesis #11 (the toggle UI doesn't lie about state — it correctly reflects the mutation); it is synthesis #16 (the live session's approval guard was constructed from the prior policy and not invalidated when the new policy arrived).

3. **codex "Full Access" permissions broken — network calls still sandboxed ([openai/codex#19196], 2026-04-23T19:51Z, updated 14:33Z).** Third instance of the pattern in codex: a permission mutation is accepted and the live session keeps enforcing the prior sandbox policy. Three issues against the same agent in 24 hours, all with the same structural shape: write succeeds, live session ignores it.

4. **codex `config.toml` context-window settings not respected ([openai/codex#19185], 2026-04-23T19:11Z, updated 14:38Z).** Same pattern outside the permission surface: the user edits `config.toml` to set a custom context window for a specific model, the schema validates, the runtime continues to use the default. Conceptually identical to the permission cases, just in the configuration layer. The fix is the same shape: re-read the relevant config section at the model-call boundary instead of caching at session start.

5. **opencode Kimi K2.5 bypasses 'ask' permission ([anomalyco/opencode#14593], re-opened 2026-04-24T13:04Z).** A six-week-old bug, latent across multiple opencode releases. The user has set the permission policy to `ask`, the policy is correctly persisted, and the runtime executes without prompting. This particular bug has a model-specific component — Kimi K2.5's tool-call response shape was added to the dispatch path without picking up the permission-check call — but it is structurally the same: a mutation (the `ask` policy) is accepted but not honored by all live consumers.

6. **opencode plan-mode editing files ([anomalyco/opencode#7292], updated 2026-04-24T13:23Z).** Plan mode is *advertised* as read-only and the user's mode toggle is correctly persisted, but gemini-3-pro's tool dispatch path bypasses the plan-mode guard. Same shape: the mutation (entering plan mode) is accepted, but a live consumer (the gemini-3-pro tool-call handler) does not check the new state.

7. **opencode subagent MCP tool dispatch ([anomalyco/opencode#16491], updated 2026-04-24T13:17Z).** The user registers MCP servers, the registration succeeds, the subagent dispatch path does not honor the registration. Same shape: the registry mutation is accepted, the live subagent path does not consume from the registry.

8. **LiteLLM `POST /model/update` does not invalidate the in-process router cache ([BerriAI/litellm#26427], opened 2026-04-24T13:25Z).** This is the cleanest expression of the pattern in the proxy world: an admin POSTs a model update via the management API, the DB row is correctly updated, and the in-process `Router` continues to serve from the cached model list until the proxy restarts. The PR is a small targeted fix — invalidate the cache on update — but the *class* is wider, because every other piece of mutable state cached on the `Router` object has the same gap unless explicitly handled. Embeddings registry, fallback chains, custom-pricing overrides, retry-policy tables — all are loaded once at boot and never re-read on update.

9. **LiteLLM `auth_exception_handler` ACL surface ([BerriAI/litellm#26421], opened 2026-04-24T12:17Z).** The fix here is subtler: `GET /v1/models` ignores `user.models` restriction, but the *root cause* is that the model-list path was originally written to filter by the *globally-loaded* model list rather than the per-request ACL. When ACLs were added later, the chat-completion path got the new check; the list path did not. From the user's perspective: they wrote an ACL (mutation), the ACL is enforced on chat completions (one consumer), but `GET /v1/models` still returns the full catalog (another consumer of the same ACL state, never updated). Same pattern, between two endpoints in the same process.

10. **codex MCP servers vanish on custom provider ([openai/codex#19363], 2026-04-24T12:21Z).** When the user switches to a custom provider mid-session, the MCP-server-merge step is skipped on the custom-provider path. The MCP servers were correctly registered (mutation accepted), but the live session's MCP registry was never updated to include them after the provider switch. Same shape: mutation accepted, live consumer never re-reads.

## Why this is its own thing

It is tempting to lump synthesis #16 under #11 (presentation lies) or under #13 (state survives presentation hides it). Both of those are real, both have instances this week, and both have intersections with #16. But the failure mode is genuinely different, and so is the fix.

- **#11 is a consistency problem between two layers of the same system at the same point in time.** Two layers, one moment. The fix is to make sure both layers consult the same source of truth.
- **#13 is a discoverability problem about state that exists but is hidden.** One layer, one moment. The fix is to expose what is already there.
- **#16 is a propagation problem across time.** One layer, two moments — before and after the mutation. The fix is to *invalidate* or *re-read* state at the right boundary.

This is why the codex `/permissions` bug (#19256) survives across three releases: the maintainers can fix the *symptom* (the prompt is broken on this build) without addressing the *class* (the session caches the policy at bootstrap), and the next time someone adds a new permission category, the same gap reappears for the new category. Synthesis #11 fixes are usually local and durable; synthesis #16 fixes need to be architectural to durably retire the bug class.

## The architectural shapes that produce this

Looking across the ten instances above, three repeating architectural shapes emerge:

1. **Cache-at-bootstrap, no invalidation.** The dominant shape. The session, the router, or the dispatch path constructs a policy/registry/config object at startup and holds it for the rest of its lifetime. There is no eviction event because the original design did not anticipate mid-life mutation. LiteLLM #26427 is the canonical example; codex #19256 is the same shape applied to permissions.

2. **Per-handler caching with no shared invalidation channel.** The model-list endpoint, the chat-completion endpoint, and the passthrough endpoint each consult the policy state independently. When the policy is updated through one endpoint, the other endpoints' caches are not informed. LiteLLM #26421 sits here, and so does the codex MCP-on-custom-provider gap (#19363).

3. **Tool dispatch built before the policy existed.** The Kimi K2.5 dispatch path (opencode #14593) and the gemini-3-pro plan-mode path (opencode #7292) are both cases where a tool-call handler was added without picking up the permission/mode check call. The original handler predates the policy, the new handler was modeled on the original, and the policy never propagated. This is the worst variant because every new model added to the registry is at risk of repeating it.

## Cross-repo predictions

If synthesis #16 is real, then several specific things should land in W18:

1. **codex will ship a fix for #19256, #19349, and #19196 in a single PR or release** — and that fix will need to either re-read the policy on every turn, or push policy invalidation through a session-scoped event. The smaller fix (re-read on turn) will land first because it is shippable as a hotfix; the larger fix (invalidation events) will be deferred.

2. **LiteLLM will get a `POST /model/update` cache-invalidation fix this week (#26427's PR), but the broader cache-invalidation surface will not be addressed.** Expect another bug filing within W18 against `POST /model/delete` or `POST /key/update` with the exact same shape, because the architectural pattern is "fix the cache that this PR happens to touch" rather than "introduce a cache-invalidation channel."

3. **opencode's #14593 will be fixed by adding the permission check to the Kimi K2.5 handler specifically, not by hoisting the permission check above the dispatch boundary.** This means the next model added to opencode's registry will be at risk of repeating the bug. The class fix would be to make tool dispatch a single chokepoint that all model handlers funnel through; the symptomatic fix is to add the check to the offending handler. Bet on the symptomatic fix.

4. **The class is going to keep filing reports for at least four more weeks**, because every architectural fix in this category requires touching session-bootstrap code, which is the most fragile and least-tested part of every agent. Until at least one of the four agents ships a session-scoped invalidation event bus (and none of them currently has one), the bug class is structural to the ecosystem.

## Connection to other syntheses

- **#11 (ACL/presentation drift).** Three of this week's #11 instances (codex #19349, #19196, #19379) double as #16 instances, because the presentation drift is *itself* caused by the live session not re-reading state. The presentation layer is reading from a different cache than the enforcement layer, and the *propagation* gap is what creates the visible *consistency* gap. Synthesis #11 is a symptom of synthesis #16 in those cases.
- **#12 (retry-as-afterthought).** A retry that fires against the prior cached policy (and gets denied because the new policy would have allowed it, or vice versa) is the worst case of #16 — the user re-tries because the system has not yet caught up to the user's mutation. Several retry-storm reports this week (codex #19371, #19366) sit at this intersection.
- **#13 (state survives presentation hides it).** #13 is about a snapshot in time; #16 is about how state evolves. They overlap when a mutation creates state that the live session never displays (because it never re-read), but they are distinct origins.
- **#14 (registry/published-spec drift).** #16 is the *runtime* version of #14: the registry says one thing, the live process believes another. The fix shape is similar — make the runtime authoritative — but the surface is different (registry-vs-runtime is a startup concern; live-mutation is a per-turn concern).

## Summary

Across the four tracked agent stacks in W17, ten distinct issues this week share a single failure shape: **a mutation is accepted, persisted, and acknowledged, but the live session never re-reads the source of truth, so the running process keeps enforcing the prior value with no error and no signal**. The fix is propagation, not consistency or visibility — it requires either re-reading on every relevant turn (cheap, retrofittable) or introducing a session-scoped invalidation event bus (architecturally correct, none of the agents currently has one). Expect the symptomatic fixes to land this week, the class to keep generating reports for the next month, and a single agent to be the first to ship a real invalidation channel sometime in May or later.

## Citations

- [openai/codex#19256] — `/permissions` changes do not propagate to active session, 2026-04-24T01:55Z.
- [openai/codex#19349] — `/approvals` "Full Access" does not take effect, 2026-04-24T11:31Z.
- [openai/codex#19196] — "Full Access" permissions broken, network still sandboxed, 2026-04-23T19:51Z.
- [openai/codex#19185] — `config.toml` context window settings not respected, 2026-04-23T19:11Z.
- [openai/codex#19379] — Trusted access enabled but cyber slowdown banner still shows, 2026-04-24T14:29Z.
- [openai/codex#19363] — MCP servers disappear from session when using custom provider, 2026-04-24T12:21Z.
- [openai/codex#19371] — VS Code extension telemetry 403 retry storm causing prompt lag, 2026-04-24T13:30Z.
- [openai/codex#19366] — Connector logo retry-on-overload storm, 2026-04-24T13:18Z.
- [anomalyco/opencode#14593] — Kimi K2.5 bypasses `ask` permission, re-opened 2026-04-24T13:04Z.
- [anomalyco/opencode#7292] — Plan mode is editing files (gemini 3 pro), updated 2026-04-24T13:23Z.
- [anomalyco/opencode#16491] — Subagents cannot execute MCP tools despite registration, updated 2026-04-24T13:17Z.
- [BerriAI/litellm#26427] — `fix(model_management): refresh router after POST /model/update`, opened 2026-04-24T13:25Z.
- [BerriAI/litellm#26421] — `GET /v1/models` ignores `user.models` ACL, opened 2026-04-24T12:17Z.
- [BerriAI/litellm#26416] — Bedrock passthrough ACL bypass fix, opened 2026-04-24T11:19Z (architectural cousin).
