# W17 cross-repo synthesis #21 — advertised capability vs runtime delivery: when the spec is louder than the code (2026-04-24T17:10Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern in one sentence

**A capability is announced — by a model card, an API surface, a tool definition, or a UI dropdown — and the runtime delivers something narrower than the announcement, with the narrowing visible only at the moment a real workload tries to use it.**

This is not version skew (synthesis #18) and it is not snapshot-vs-live state (synthesis #19). Those patterns are about two parts of *the same system* disagreeing across time. The pattern here is about *two systems on either side of a network boundary* disagreeing about what was promised — usually the model/server side advertises a wide capability, and the client (codex / opencode / litellm proxy / crush wrapper) discovers the narrowing only when the user has already committed to using it.

The afternoon of 2026-04-24 produced a uniquely clean exhibit of this pattern: in 59 minutes, codex filed six issues against the new `gpt-5.5` rollout where every single issue is some flavor of "you said X, the runtime gave us less than X." Combined with the opencode-side DeepSeek reasoning-content cluster, the litellm `output_config` graveyard, and the codex chrome-devtools tool-surface gap, the day produces enough exhibits to name the pattern as its own thing.

## The exhibits

### Exhibit A — codex `gpt-5.5`: 400k advertised, ~220k delivered

[openai/codex#19386] is the canonical statement of the pattern: *"GPT-5.5 Codex session hits unrecoverable compaction failure around ~220k tokens despite advertised 400k context."* The issue title alone is a tell — the advertised number and the delivered number are both in the title, and they differ by 45%.

The follow-on issues sketch how the gap actually manifests in practice:

- [openai/codex#19400] — *"Remote compaction fails when using `gpt-5.5` because `/responses/compact` does not appear to support the model."* The capability gap is not just "fewer tokens" — it is also "the *recovery* path that would let us live with fewer tokens is not wired up for this model." The remote-compaction endpoint, which exists precisely so the client does not have to compact locally, refuses requests for `gpt-5.5` because the server-side route does not list it as a supported target.
- [openai/codex#19401] — *"Auto context compaction keeps running indefinitely."* The local fallback engages when remote compaction fails. The fallback's convergence check (presumably "is the new transcript shorter than the old one") depends on a token count that the failing path never updates, so the loop never terminates. The user sees a spinner; the runtime is happily not converging.
- [openai/codex#19397] — *"Long Codex threads fail to hydrate after reload when compacted replacement_history records are large."* When compaction *does* manage to write a `replacement_history` record, that record is large enough that the reload-side hydration logic fails with "missing handler." So the storage format that the compactor writes is not the format the loader expects — the writer assumes the existence of a handler that the reader does not have.
- [openai/codex#19390] — *"compact error."* (Sparse title; the body confirms it is the same family.) Multiple users in the same hour, same shape.
- [openai/codex#19405] — *"Track exec JSON compaction-events fix in commit 942131e8c00d5648deebadd353a38c54a9b85286."* The cluster is now generating *meta-issues*: a tracking issue opened against an already-landed commit, asking to confirm that downstream consumers of the exec-JSON event stream will pick up the new compaction-event format. This is the cluster reaching the size where the maintainers themselves cannot keep state on which patch fixed which symptom.
- [openai/codex#19404] — *"Desktop app model picker does not show gpt-5.5 even when backend reports it available."* The same model that is crashing where it is exposed is *hidden* where it would (presumably) work. The desktop picker enforces an allow-list that the backend's capability response is not on. Capability misrepresentation in the *opposite* direction: the advertisement (picker contents) is narrower than the delivered capability (backend availability).

That last bullet is what generalizes #19386 from "another model rollout was bumpy" into a structural pattern: the advertised capability and the delivered capability disagree in *both* directions inside the same product, in the same week. Sometimes the runtime promises 400k and gives 220k; sometimes the picker promises a model is unavailable and the backend says it is.

### Exhibit B — codex `chrome-devtools`: tool surface advertised, action surface narrower

[openai/codex#19402] — *"chrome-devtools in Codex only exposes press_key, so typing text sucks."* The chrome-devtools tool is *advertised* to the model as a "browser control" capability — implicitly: it can do what a user can do. The actual exposed actions are a strict subset: `press_key` exists, `type_text` does not. So the model, given a goal like "fill in this form", composes plans that call `type_text` (because that is what the natural-language description of the tool surface implies) and the runtime fails the call.

The fix space here is not interesting (add `type_text`). What is interesting is the *root cause*: the tool surface was advertised at a level of abstraction (`chrome-devtools`) that promised more than the action surface (`press_key`) delivers. The model is consuming the advertisement, not the action surface.

### Exhibit C — opencode + DeepSeek: `reasoning_content` is a contract, not a field

[anomalyco/opencode#24188] — *"[DeepSeek] The `reasoning_content` in the thinking mode must be passed back to the API."* DeepSeek's thinking-mode contract requires that on every continuation call, the previous turn's `reasoning_content` is echoed back so the server can reconstruct the chain-of-thought context. opencode currently treats `reasoning_content` as a *display* field — it surfaces it in the UI, then drops it when assembling the next request. The server-side capability ("multi-turn thinking mode") was advertised; the client did not deliver the half of the contract it owns.

Paired with [anomalyco/opencode#24189] — *"DeepSeek cache usage is not reported in opencode stats (v1.14.24)."* — filed seven minutes later. DeepSeek advertises prompt caching with discounted pricing; the cache-usage telemetry is part of how the user *verifies* the discount applied. opencode does not surface it, so the discount might be working or it might not — there is no way to tell from the client side. Same shape as #24188 at the *observability* layer instead of the *protocol* layer.

This is the W17 reasoning-content cluster (synthesis #1) generalizing from one vendor to multiple. The original cluster was about a single provider's contract; the new exhibit names it as a *cross-vendor* shape, which strengthens the underlying claim: any provider whose multi-turn behavior depends on echoing-back a server-emitted field will trip on a client that treats that field as display-only.

### Exhibit D — litellm + Vertex: `output_config` field passed through five times, still not delivered

[BerriAI/litellm#26439] — *"fix(adapters,vertex): pass output_config through to backends that accept it (closes #23380, supersedes #23475/#23396/#23706/#22727)."* The Vertex adapter advertises support for `output_config` (it appears in the documented request schema). The actual adapter has, for at least four prior PR attempts, failed to forward the field down to the backend that would interpret it. Five PRs, one bug, no delivery.

This is the cleanest litellm-side exhibit of the pattern: the *configuration surface* is advertised (the field is documented, the API accepts it without complaint), and the *runtime behavior* never actually consumes it. The user passes `output_config`, the call succeeds, the output is unaffected. There is no error to debug — the advertisement and the delivery only differ in their *effect*, which is the slowest possible failure to discover.

Compare with [BerriAI/litellm#26419] — *"fix(ui): add missing 'zai' (Z.AI / Zhipu AI) provider to Add-Model dropdown."* — same pattern at a different layer. The provider integration *exists* in the routing code; the dropdown that lets a user actually pick it does not list it. The capability is built and the advertisement is missing. (Inverse of the codex desktop-picker case in #19404 — there the picker is missing a model that exists in the backend; here the dropdown is missing a provider that exists in the router. Same shape, different repos.)

### Exhibit E — codex permissions refactor train: the structural fix

[openai/codex#19391]–[openai/codex#19395] are not bug reports — they are the in-flight *fix* for an entire week of capability-vs-delivery bugs against the permissions surface. The titles tell the story: "make runtime config profile-backed", "derive compatibility policies from profiles", "migrate approval and sandbox consumers to profiles", "remove core legacy policy round trips", "finish profile-backed app surfaces."

The current bug (#19256, #19384, etc., catalogued in earlier addenda) is that `/permissions` UI changes do not propagate to the active session. The advertisement is "your permissions just changed"; the delivery is "the active session is still using the old policy." The five-PR train is the structural answer: stop having two representations of policy (the runtime config and the profile), have one. When the surfaces all derive from the profile, the advertisement and the delivery cannot diverge — there is no room for them to.

This matters for the synthesis because it is the rare exhibit of *the maintainers naming the pattern in the structure of the fix*. They are not adding another check that "config matches reality"; they are removing the second representation that made the divergence possible. That is the only durable fix shape for capability-vs-delivery bugs.

## Why the pattern matters

The four projects in this digest all sit on the same architectural line: a thin local client (CLI / TUI / proxy) talks to a remote model provider. Every one of them has to *re-state* the provider's capabilities — in a model card, a tool definition, a UI dropdown, a config schema — and every one of those re-statements is an opportunity for the advertised capability and the delivered capability to drift.

The drift is not discovered until a real workload hits it, and the real workload that hits it is usually the largest, most expensive workload the user runs (because that is the workload that exercises the corners of the capability). #19386 is the perfect example: nobody discovers the 220k vs 400k gap on a hello-world prompt. They discover it on a 200k-context refactoring task, after they have already committed an hour to the conversation.

The user-visible cost of the pattern is *trust-eroding*, not *crash-causing*. A crash gets fixed. A model that quietly truncates at 220k while the picker still says "400k context" teaches the user not to believe the picker. A `reasoning_content` field that displays in the UI but does not affect the next turn teaches the user not to believe their own observability. A Vertex `output_config` that the API accepts and ignores teaches the user not to believe the schema.

## Diagnostic shape — how to recognize it in a triage queue

A bug fits the capability-vs-delivery pattern when it has all three of:

1. **A specific advertised number, name, or surface** that is reproducible by reading docs, the model card, the API schema, or a UI dropdown — *without running anything*.
2. **A failure or silent narrowing that only appears under a workload** that exercises the advertised capability fully — long context, multi-turn thinking, a specific config field, a specific provider.
3. **No error from the layer that did the advertising.** The model card does not retract the 400k claim when compaction fails. The API does not 400 when `output_config` is ignored. The UI dropdown does not annotate "Zhipu AI also exists, but we forgot to list it."

When all three are present, the fix space is not "patch the runtime to match the advertisement" (that is fragile — see synthesis #20, the patch-PR graveyard). The fix space is *single-source the advertisement*: have one place that defines the capability, and have every other surface (UI, schema, runtime, model card) derive from it. The codex permissions train (#19391–#19395) is the shape of that fix.

## Distinct from neighboring W17 patterns

- **Not version skew (#18)**: version skew is two parts of *the same product* shipping at different versions. Capability-vs-delivery is two parts of *the same conceptual surface* — the advertisement and the runtime — being out of sync without any version difference at all.
- **Not snapshot-vs-live (#19)**: snapshot-vs-live is about *time* — the moment of capture vs the moment of use. Capability-vs-delivery is about *layer* — the advertisement layer vs the execution layer. They can co-occur (codex #19256, where the captured permissions snapshot is the *advertised* policy and the runtime is still using the *previous* one), but the underlying fault lines are different.
- **Not patch-PR graveyard (#20)**: the graveyard is about *the fix* repeating; capability-vs-delivery is about *the misrepresentation* repeating. A patch-PR graveyard often has a capability-vs-delivery bug at its root (the litellm `output_config` saga is the canonical case), but plenty of capability-vs-delivery bugs get fixed on the first try and never enter a graveyard.
- **Not retry-as-afterthought (#12)**: retry-as-afterthought is about a missing layer in the *failure handling*. Capability-vs-delivery is about the *advertisement* itself being wrong; the failure handling can be perfect and the user is still misled.

## Watch list for next week (W18)

- Whether codex's permissions refactor train (#19391–#19395) lands in dependency order, and whether the post-merge state actually closes #19256 / #19384 / #19362 / #19363 without a follow-up patch. If any of those issues stay open after the train merges, the train was a partial fix and a sixth PR is coming.
- Whether `gpt-5.5` gets a model-card update that names the *practical* compaction limit (vs the advertised context limit). If it does, that is the maintainers tacitly conceding the pattern. If it does not, expect #19386's siblings to keep arriving.
- Whether the litellm Vertex `output_config` PR (#26439) is the fifth-and-final attempt or the fifth-of-N. The supersedes-list is a clean experiment: if a sixth PR ever appears, this is no longer "a hard surface" and is instead "a surface no single PR can own."
- Whether opencode (anomalyco) ships the DeepSeek `reasoning_content` echo-back as a *generic multi-vendor* fix or a DeepSeek-specific one. Generic fix is the right shape; DeepSeek-specific fix predicts the next vendor's identical bug.
- Whether the codex desktop picker (#19404) and the litellm Add-Model dropdown (#26419) — both UI-side advertisement bugs filed within hours — get consolidated into a "single source of model availability" PR, or whether each repo patches its own dropdown.

## Reference

Issues / PRs cited:
- openai/codex: #19386, #19390, #19391, #19392, #19393, #19394, #19395, #19397, #19400, #19401, #19402, #19404, #19405, #19256, #19384, #19362, #19363
- anomalyco/opencode: #24188, #24189
- BerriAI/litellm: #26439, #26419, #23380, #23475, #23396, #23706, #22727
- charmbracelet/crush: (no in-window exhibit; pattern not yet observed in this repo this week — worth flagging because the absence is informative; crush's tool-surface is much narrower than the others.)

Cross-repo coverage: 3 of 4 active repos (codex, opencode, litellm); 22 distinct issue/PR numbers cited.
