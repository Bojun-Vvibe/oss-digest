# W17 cross-repo synthesis #40 — dual-tool-surface-for-overlapping-capability with routing rule outside the registry: when a coding-agent project ships a *second* tool (or model, or transport, or auth path) that overlaps in capability with an existing one, leaves the existing one in place, and documents the *routing rule* ("simple commands stay on tool A, complex/persistent ones go to tool B") only in the PR body or design doc — never in the tool descriptions the model actually sees — the model gets a registry that advertises two tools that overlap, no routing prior, and has to either pick arbitrarily on each call or learn the routing rule from out-of-band signals (system prompt, in-context examples, trial-and-error), which is the worst place for routing logic to live (2026-04-24T22:50Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through every PR before acting._

## The pattern in one sentence

**A coding-agent OSS project ships a *new* tool surface (a second shell, a second filesystem API, a second auth flow, a second model-routing path, a second context-compaction strategy, a second tool-call-ID propagation channel) that *overlaps* in capability class with an *existing* tool surface — the project's authors have a clear mental model of when each surface should be used ("`bash` for one-shot commands; `terminal` for persistent PTY sessions"; "`unavailable_dummy_tools` enabled by default but only used when no real tool matches"; "Codex Apps tool calls go through the Apps surface; legacy tool calls go through the legacy surface") — but the routing rule lives *only* in the PR body, the design doc, the maintainer's head, the system-prompt template — never in the *tool descriptions the model itself sees at inference time* — so the model is presented with a registry of N tools that advertise overlapping capabilities and must infer the routing rule from out-of-band context (system prompt, few-shot examples, trial and error), and the resulting routing is at best probabilistic and at worst arbitrary; in W17, five anchor exhibits across anomalyco/opencode, openai/codex, and BerriAI/litellm follow this script: anomalyco/opencode #23794 (`feat(tool): add interactive terminal tool with persistent PTY sessions` OPEN, refreshed 22:40Z) introduces an explicit `terminal` tool with five actions (create, send, read, close, run) backed by the existing PTY service, alongside the existing `bash` tool which the PR explicitly leaves untouched — the PR body states *"`bash` tool untouched — simple commands stay on `bash`"* — but this routing rule does not appear in either tool's description; the model sees `bash` and `terminal` both advertising "execute shell commands" and must pick; codex #19459 (`Enable unavailable dummy tools by default` OPEN 22:43Z) promotes the `unavailable_dummy_tools` feature from opt-in to default-on — these are placeholder tool entries that appear in the registry alongside real tools, with the routing rule "use these only when no real tool matches" living in the feature description, not in the dummy tool's own JSON schema; codex #19207 (`Forward Codex Apps tool call IDs to backend metadata` MERGED 22:49Z) wires up tool-call-ID propagation specifically for the *Codex Apps* tool surface, while the legacy tool-call-ID propagation channel for non-Apps tool calls remains live — two parallel ID-propagation channels with the routing rule (Apps tool calls → Apps backend metadata; legacy tool calls → legacy backend metadata) implicit in the call-site code path, never declared in a registry the model can read; codex #19098 (`feat: Compress skill paths with root aliases` MERGED 22:49Z) introduces *aliased* skill paths alongside *absolute* skill paths — both are valid in the registry, but the routing rule "use aliases when the metadata budget is tight" lives in the loader code, not in the published skill list; litellm #26122 (`fix(ollama): forward tool_calls and tool_call_id in transform_request` OPEN, refreshed 22:47Z after 4 days dormant) is the inverse exhibit — the ollama transformer was *silently dropping* `tool_calls` and `tool_call_id` because there was *no* registered routing for those fields on the ollama path, even though the OpenAI transformer in the same litellm process was correctly forwarding them; the `tool_calls`/`tool_call_id` capability is *advertised* uniformly to the model but *delivered* by only one of two parallel transformer surfaces — the "negative" form of dual-surface where the second surface silently no-ops.**

The bug is *not* having two tool surfaces (two surfaces are often the right design — they have different invariants, different lifecycle, different cost). The bug is **the routing rule between them not being a first-class artifact in the registry the model reads at inference time**. When the routing rule is in the PR body, it informs reviewers; when in the design doc, it informs contributors; when in the system prompt, it informs the model some of the time; when in the tool description JSON schema itself, it informs the model on every call. Only the last placement is reliable.

## Why this is *not* synthesis #21 (advertised-capability-vs-runtime-delivery)

#21 names cases where the catalog advertises one capability and the runtime delivers a different one. **#40 names cases where two capabilities are both advertised, both delivered, and the model has to pick — with the picking-rule undocumented in the catalog.**

#21 is a *vertical* skew (advertised vs delivered, same capability class). #40 is a *horizontal* skew (two delivered capabilities in the same class, no priority order). They compose: a #40 dual surface where one of the two surfaces is also a #21 exhibit (advertised but not delivered) is the worst case — the model sometimes routes to the broken surface because it has no signal that it should prefer the working one.

## Why this is *not* synthesis #14 (published-spec-lies-registry-drift)

#14 names cases where the published registry lies about what exists. **#40 names cases where the registry *correctly* lists both tools, both work, and the *routing logic between them* is missing from the registry.**

#14 is "the catalog is wrong about presence." #40 is "the catalog is right about presence and silent about precedence." A model presented with a #14 catalog learns "this entry doesn't actually work, ignore it"; a model presented with a #40 catalog learns "both entries work, pick one" — the latter is harder because the model has no negative feedback signal to prune the registry.

## Why this is *not* synthesis #22 (privilege-by-exclusion)

#22 names cases where some surfaces have privileges others lack — the privilege boundary is implicit. **#40 names cases where two surfaces have *equal* privilege but different *intended* use cases — the use-case boundary is implicit.**

The two compose: a dual surface where one of the two surfaces is also privileged differently (e.g., `terminal` has access to PTY, `bash` doesn't; or `terminal` is implicitly trusted to run long-lived processes while `bash` is not) is both a #40 (use-case boundary undocumented) and a #22 (privilege boundary undocumented) exhibit.

## Why this is *not* synthesis #18 (version-skew-cli-vs-server)

#18 names cases where two parties disagree on the version of a contract. **#40 names cases where two surfaces *within the same party* (same project, same registry) advertise overlapping capabilities and the *routing rule between them* is the missing artifact.**

The skew in #18 is across parties; the skew in #40 is within a single registry. They are independent failure modes that can co-occur (a server with a #40 dual surface will export both surfaces to a CLI that may or may not understand the routing rule, producing #18 on top of #40).

## What sets the alarm

For each W17 exhibit, the *signal* is the same shape: a PR title introduces a new tool/transport/auth/transform path with a name that overlaps semantically with an existing one — `terminal` ↔ `bash`, `Codex Apps tool calls` ↔ `legacy tool calls`, `aliased skill paths` ↔ `absolute skill paths`, `dummy tools` ↔ `real tools`, `ollama transformer tool_call forwarding` ↔ `OpenAI transformer tool_call forwarding`. The *routing rule* is in the PR body or implicit in the code path. The model's tool-description JSON does not contain the rule.

In W17:
- **anomalyco/opencode `terminal` ↔ `bash`** (#23794): PR body says *"simple commands stay on `bash`"*. Tool descriptions for both `bash` and `terminal` (when shown to the model at inference) do *not* include the rule.
- **codex `unavailable_dummy_tools` default-on** (#19459): the *feature* is described in the PR; the *individual dummy tool entries* in the registry don't carry "this is a dummy, prefer a real tool if any matches."
- **codex Codex Apps tool call IDs ↔ legacy tool call IDs** (#19207): the routing is in `mcp_tool_call` wiring code; the model sees both Apps tools and legacy tools in its tool list with no marker.
- **codex aliased skill paths ↔ absolute skill paths** (#19098): routing rule is "use aliases when metadata budget tight"; model sees only the rendered skill list and cannot distinguish.
- **litellm ollama transformer ↔ OpenAI transformer for `tool_calls`/`tool_call_id`** (#26122): the OpenAI path forwards these fields; the ollama path drops them silently. The model's view of "tool_calls is supported" is uniform across providers — the model has no way to learn that `tool_calls` won't survive the round-trip when the provider is ollama.

## Mechanism

1. A project ships tool/surface A. A's tool description is added to the registry.
2. Time passes. A new use case arises that A could be stretched to handle but is not optimal for (persistent sessions, structured retries, alternate transport, alternate auth, alternate transformer).
3. A maintainer files a PR introducing tool/surface B that handles the new use case better. The PR explicitly leaves A in place to avoid breaking existing callers.
4. The PR body states the *routing rule*: "B for X, A for Y." The PR body is read by reviewers; it is *not* read by the model at inference time.
5. Tool descriptions for A and B are both added to the registry. Each description lists the tool's capabilities. Neither description references the other tool or the routing rule.
6. The model receives the registry on every call. It sees A and B both advertising overlapping capabilities. It picks one — guided by the system prompt (if the prompt mentions the rule), by few-shot examples (if any), or arbitrarily (most cases).
7. Routing is now non-deterministic from the user's perspective. Calls that should route to B (better fit) sometimes route to A (the model picked A); calls that should route to A sometimes route to B.
8. The non-determinism is invisible from any single call's logs. It only surfaces in aggregate — "model is sometimes using `bash` for what should be a `terminal` use case." By the time the aggregate signal arrives, weeks of routing data are misclassified.

## Action

- **For maintainers**: when filing a PR that adds a second surface overlapping with an existing one, add the routing rule to the *tool description JSON / model-facing schema* of *both* tools. Each description should reference the other and state "prefer this tool when X; prefer the other tool when Y." Do *not* leave the rule in the PR body alone.
- **For maintainers (alternative)**: if the routing rule is too complex for tool descriptions, deprecate the older surface and migrate callers to the newer one. Two surfaces with explicit routing in descriptions is good; two surfaces with one deprecated is also good; two surfaces with implicit routing is the failure mode.
- **For reviewers**: when reviewing a PR that adds a tool overlapping with an existing one, request that the routing rule be added to *both* tool descriptions before approving. Block merge until the rule is in the schema.
- **For projects**: maintain an inventory of overlapping-tool pairs. The pair count is a leading indicator of routing-confusion incidents.
- **For prompt designers**: when the routing rule is missing from tool descriptions, the system prompt is the second-best place. Place the routing rule in the system prompt explicitly, and treat its absence as a regression.
- **For evals**: include eval cases that exercise the routing decision (a query that should clearly route to B but is plausibly served by A). A regression in routing accuracy on these cases catches #40 drift.

## Anchor exhibits this synthesis was extracted from

- anomalyco/opencode#23794 (`feat(tool): add interactive terminal tool with persistent PTY sessions` OPEN — `terminal` ↔ `bash` with routing rule in PR body only)
- openai/codex#19459 (`Enable unavailable dummy tools by default` OPEN — dummy tool entries ↔ real tool entries with prefer-real rule implicit)
- openai/codex#19207 (`Forward Codex Apps tool call IDs to backend metadata` MERGED — Codex Apps tool-call ID channel ↔ legacy tool-call ID channel with routing in call-site code)
- openai/codex#19098 (`feat: Compress skill paths with root aliases` MERGED — aliased skill paths ↔ absolute skill paths with routing rule in loader)
- BerriAI/litellm#26122 (`fix(ollama): forward tool_calls and tool_call_id in transform_request` OPEN — ollama transformer ↔ OpenAI transformer for `tool_calls` field, the negative form: one surface silently no-ops)
- openai/codex#19458 (`Simplify Codex Library file hooks` OPEN — Library upload path ↔ regular upload path with `store_in_library=true` as the routing flag, an example of routing rule that *is* explicit in code but implicit in the model's view)

## Reverse direction (when the pattern does *not* fire)

The pattern requires (a) two surfaces with overlapping capability and (b) the routing rule absent from the model-facing registry. Projects that always *replace* (not augment) when introducing a better surface — deprecating the old one and forcing migration — sidestep the gap by reducing the registry back to N tools. The cost is breaking existing callers; the benefit is no routing ambiguity.

Projects that *namespace* overlapping tools by use case (e.g., `bash.oneshot` and `bash.terminal`, with the routing rule encoded in the namespace itself) also sidestep the gap because the namespace is itself a routing signal the model reads.

Projects that *generate* the tool registry from a single source-of-truth schema (rather than hand-maintaining each tool description) can mechanically inject routing-rule cross-references between overlapping tools — analogous to how anomalyco/opencode#24219 (generated http route inventory, OPEN 22:15Z prior window) prevents docs drift mechanically.

## Composition with other syntheses

- **#40 + #38** (capability-flag-vs-callability-skew): when a capability flag is added to one of two overlapping tools and not the other, the model can use the flag to route — but only if the flag is in the model-facing description. Otherwise #40 silently subsumes #38.
- **#40 + #34** (silent-transformer-field-drop): a dual-transformer surface where one transformer drops fields (litellm #26122) is a #40 + #34 composite — the second surface no-ops on a field while the first does not, with no routing signal to the model.
- **#40 + #21** (advertised-capability-vs-runtime-delivery): when one of the two overlapping surfaces is partially broken, the model that arbitrarily routes to it will hit the #21 gap. Without routing signal, #40 amplifies #21.
- **#40 + #14** (published-spec-lies-registry-drift): when the registry's listing of tool A drifts from the loader's actual A (#14), and a tool B exists that overlaps with A (#40), the model's effective routing distribution shifts in ways neither A's maintainer nor B's maintainer can predict.
- **#40 + #39** (PR-body-declared cross-PR dependency): the routing rule for a #40 dual surface is exactly the kind of cross-PR coordination signal that lives in PR bodies (#39) — when the second-surface PR's body declares the routing rule and the first-surface PR is never updated to reference the second, the routing rule is doubly invisible (not in either tool's description, not machine-readably linked across the two PRs).
