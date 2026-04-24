# W17 cross-repo synthesis #34 — silent-transformer-field-drop: when a translation, serialization, or dispatch step quietly omits a field that was present on the way in, the caller has no error path to recover from (2026-04-24T20:32Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern in one sentence

**A coding-agent project takes a request (or a response, or a log event) through an intermediate transformation step — a provider-specific `transform_request`, a cache-key derivation, a streaming-iterator hook, an SDK client constructor, a passthrough endpoint dispatcher, a `WriteFile` wrapper — and that step silently *drops* one or more fields that were present on the input, producing a downstream request / response / log entry that is *structurally well-formed* (no exception raised, no error returned) but *semantically truncated* in a way the caller cannot detect; in W17, six anchor exhibits across litellm, anomalyco/opencode, and codex follow this script: litellm #26122 (`fix(ollama): forward tool_calls and tool_call_id in transform_request` — `tool_calls` and `tool_call_id` dropped during Ollama transform, model re-issued same call every turn in an infinite loop), litellm #26446 (`fix(caching): handle list-based responses and message key variations` — `QdrantSemanticCache.add_cache` swallowed a `TypeError` on list responses, the cache silently failed to store), litellm #26448 (`fix(content_filter): log guardrail_information on streaming post-call` — streaming iterator never wrote the log row that the non-streaming path always wrote), litellm #26146 (`fix(vertex passthrough): log :embedContent and :batchEmbedContents responses` — dispatcher fell through to `result=None` for embedContent, no spend tracked), litellm #23525 (MERGED `fix: forward extra_headers to HuggingFace embedding API` — `extra_headers` silently dropped on the HF embedding code path), and anomalyco/opencode #24205 (`fix(cli): authenticate run in-process server requests` — Basic Auth headers silently absent on in-process SDK client). Plus three sibling exhibits: codex #19211 (Windows stdin truncation via partial `WriteFile` + stdout tail dropped after a 200 ms grace), anomalyco/opencode #24200 (DeepSeek V4 reasoning_content dropped on both stream paths), and anomalyco/opencode #22612 (numeric `tool_calls[].id` and missing first-chunk `id` thrown vs. silently nulled).**

In each exhibit, the shape is identical: **a field exists on input → an intermediate step "transforms" the payload → the field does not exist on output → no error is raised → downstream behavior is wrong.** The bug is *not* the missing field per se; the bug is that the transformer's contract was implicitly "preserve all fields except those I explicitly translate" but its implementation was "translate the fields I know about, drop everything else."

## Why this is *not* synthesis #14 (published-spec-lies-registry-drift)

#14 names cases where the *registry* (the published list of names, the catalog, the spec) lies about what *exists*. **#34 names cases where the *transformer* lies about what it *preserves*.** In #14 the published name does not resolve at runtime; in #34 the named entity *does* resolve, the request *does* succeed at the transport layer, but a *field inside the payload* was silently dropped. #14 is "the name doesn't exist"; #34 is "the name exists, the call succeeds, the field is gone."

## Why this is *not* synthesis #16 (accepted-but-unpropagated)

#16 names cases where a value is *accepted* by an outer surface (e.g., a CLI flag, a config key) but never *propagated* to the inner code that should act on it. **#34 names cases where the value *is* propagated through one or more transformation hops, then is dropped *inside* one of those hops** — typically a transformer that maps from one schema to another and forgets to copy the field across schemas. #16 is "the outer surface accepted it but the inner code never saw it"; #34 is "the inner code saw it, called a transformer, and the transformer dropped it on the floor."

## Why this is *not* synthesis #32 (advertised-vs-accepted-validation-surface)

#32 names cases where the *catalog* of accepted args is wider than what the upstream actually accepts, so the caller's locally-correct request is rejected at the wire. **#34 names cases where the request is *not* rejected — it succeeds, but with a silently-truncated payload that produces wrong downstream behavior.** #32 is "the call fails with no recovery path"; #34 is "the call succeeds with no signal that a field was lost."

The two patterns are duals. #32 fails loudly at the wrong layer (the upstream rejects); #34 fails quietly at the right layer (the transformer drops, no rejection ever happens).

## Why this is *not* synthesis #13 (state-survives-presentation-hides)

#13 names cases where some *state* persists internally but the *presentation layer* hides it from the user (so the user's mental model diverges from the runtime's). **#34 names cases where the state *itself* is destroyed during a transformation step** — the field was present on input, is not present on output, and there is no internal state that retains it. #13 is "the state is there but you can't see it"; #34 is "the state is *gone*."

## The exhibits

### Exhibit A — litellm #26122: fix(ollama): forward tool_calls and tool_call_id in transform_request

**[BerriAI/litellm#26122]** — OPEN PR, 20:28Z, head `619c0cb3d946697d37216e87794686236d1afe0f`. Title: *"fix(ollama): forward tool_calls and tool_call_id in transform_request."*

Pre-fix shape: an OpenAI-format multi-turn conversation arrives with `assistant` messages carrying `tool_calls`, and `tool` messages carrying `tool_call_id`. The Ollama provider's `transform_request` correctly *built* an `OllamaToolCall` from each `tool_calls` entry — and then **never copied the built object into the outgoing `OllamaChatCompletionMessage`**. Ollama therefore received `{role: assistant, content: ''}` with no `tool_calls` field at all. The model, having no record of having issued the call, **re-issued the same call on every turn**. This produced an infinite tool-call loop visible to the user only as runaway latency / runaway cost.

Adjacent: `tool_call_id` on `role: tool` messages was also dropped. Ollama uses that field to resolve the tool *function name* from conversation history; without it, the next response from the model could route to the wrong tool entirely.

Two fields, both silently dropped, both with downstream behavior that was *not* "request fails" but "request succeeds with wrong semantics." **The bug is the canonical synthesis-#34 shape**: the transformer translated the field into an internal representation and forgot to attach it to the outgoing payload. The PR adds two test cases — `test_transform_request_preserves_tool_calls` and `test_transform_request_forwards_tool_call_id` — that assert the fields survive the transform.

### Exhibit B — litellm #26446: fix(caching): handle list-based responses and message key variations

**[BerriAI/litellm#26446]** — OPEN PR, 20:10Z, head `bcf084ad84300e450ef3fab92933d85d7ae8e9c2`. Title: *"fix(caching): handle list-based responses and message key variations …"*

Two distinct silent-drop modes in one fix:

1. **List-shaped responses raised `TypeError: can only concatenate str (not "list") to str` inside `QdrantSemanticCache.add_cache`** — and the exception was *swallowed inside the cache layer*. The model call succeeded; the cache layer silently failed to store the response; every future identical request paid a full real-API round-trip cost while the user believed caching was active.
2. **Some callers passed `message=` (singular) instead of `messages=` (plural)**, and the cache key derivation silently produced a different hash for the singular form, missing the cache on every retrieval.

Both are silent semantic drops, not silent syntactic drops — the *data* survived but the *cache contract* (store-and-retrieve idempotence) did not. The synthesis-#34 shape: the cache layer's `add_cache` was supposed to be transparent to the caller; its actual behavior was "if the response is list-shaped or the input key is singular, silently no-op." **There was no error path the caller could catch.**

### Exhibit C — litellm #26448: fix(content_filter): log guardrail_information on streaming post-call

**[BerriAI/litellm#26448]** — OPEN PR, 20:19Z, head `e6fdf5a17317443d05c2ea9b9207430446d659b1`. Title: *"fix(content_filter): log guardrail_information on streaming post-call."*

`ContentFilterGuardrail.async_post_call_streaming_iterator_hook` correctly *processed* streaming chunks but **never called `_log_guardrail_information(...)` at stream end**. The non-streaming path was unaffected because `apply_guardrail`'s `finally` block always wrote the entry. So for every streaming post-call run: the SpendLogs row's `metadata.guardrail_information` was empty, the `standard_logging_object.guardrail_information` was empty, the UI Request Lifecycle panel rendered no post-call step, every custom logger consuming the field saw nothing.

The dropped "field" is the *log emission itself*. The synthesis-#34 frame still applies: an intermediate hook ran, did its job (chunk filtering), and silently omitted the side-effect emit that was part of its contract. The PR's out-of-scope note flags **the same gap in `AimGuardrail` and `_OPTIONAL_PresidioPIIMasking`**, neither fixed in this PR — the silent emit-drop pattern is replicated across at least three guardrail implementations because each one had to wire the streaming hook independently.

### Exhibit D — litellm #26146: fix(vertex passthrough): log :embedContent and :batchEmbedContents responses

**[BerriAI/litellm#26146]** — OPEN PR, 20:28Z, head `98349ff454d27064c4baa8e524083492a6923acb`. Title: *"fix(vertex passthrough): log :embedContent and :batchEmbedContents responses."*

`VertexPassthroughLoggingHandler.vertex_passthrough_handler` is a URL-route dispatcher with explicit branches for `generateContent`, `predict`, `rawPredict`, `search`, `batchPredictionJobs` — and an `else` branch that returned `result=None`. **`embedContent` was not in any branch, so it fell through to the `else` branch, returned `None`, no success callbacks fired.** Result: every `:embedContent` request through the proxy was logged as `model=unknown, spend=0, total_tokens=0` in `LiteLLM_SpendLogs`. The newer Gemini embedding models (gemini-embedding-001, gemini-embedding-2-preview) all use `:embedContent`.

The PR's reproduction includes a real Vertex-AI `:embedContent` curl with before/after spend-log proof: pre-fix `spend=0`, post-fix `spend=1e-06, total_tokens=5`.

Synthesis-#34 framing: the dispatcher's `else: return result=None` *is* the silent drop. The dispatcher had a contract — "every URL route gets logged" — and an implementation that violated it for any route the author hadn't enumerated. **The dropped field is the *entire log row*.** The fix adds a sixth explicit branch, but the dispatcher's structure (enumerated branches plus a silent `else`) is itself a synthesis-#34 generator — the next new Vertex endpoint that ships will re-trigger the same bug class.

### Exhibit E — litellm #23525 (MERGED): forward extra_headers to HuggingFace embedding API

**[BerriAI/litellm#23525]** — MERGED 20:09Z. Title: *"fix: forward extra_headers to HuggingFace embedding API."*

The `extra_headers` parameter was the canonical "field present in input, gone in transformation" case: the OpenAI-shape request carried `extra_headers`, the HuggingFace embedding code path's transform did not propagate it to the outgoing HTTP request, the call succeeded against HuggingFace using only the default headers, and any downstream that depended on `extra_headers` (auth tokens for HF private endpoints, routing headers, observability tags) got the wrong behavior with no error.

Synthesis-#34 framing: `extra_headers` is the textbook example of an *escape-hatch* parameter — its entire purpose is "I will pass headers your transformer doesn't know about, please forward them anyway." A transformer that drops it has *defeated the escape hatch by definition*. The fix forwards it; the bug class is "any new provider transform written without the escape-hatch contract in mind."

### Exhibit F — anomalyco/opencode #24205: fix(cli): authenticate run in-process server requests

**[anomalyco/opencode#24205]** — OPEN PR, 20:06Z, head `d7921577b637f69d830452229de6dd10a725c645`. Title: *"fix(cli): authenticate run in-process server requests."*

`opencode run` in plain (non-`--attach`) mode spins up an in-process server and instantiates an SDK client to talk to it. The in-process server applied `AuthMiddleware` (which checks Basic Auth from `OPENCODE_SERVER_PASSWORD`); the SDK client was instantiated with **no auth credentials at all**. Session-create returned no usable session. CLI surfaced a generic `Error: Session not found`.

The dropped "field" is the auth-headers map on the SDK client constructor. Synthesis-#34 framing: the in-process invocation path's "transformer" — the code that constructs the SDK client given the in-process server's config — silently omitted the auth fields the parallel `--attach` path always set. The PR fixes the in-process path to read the same env-var the server reads. The recovery path the user got pre-fix was "search for the actual cause yourself" — the error message did not point at auth.

This exhibit also overlaps synthesis #33 (platform/transport-parity divergence). The synthesis-#34 lens is on the *constructor that quietly omitted required fields*; the synthesis-#33 lens is on the *cross-mode behavioral parity break*.

## Sibling exhibits

### Sibling — codex #19211 (the Windows process-management bundle)

**[openai/codex#19211]** — OPEN PR. The PR's six fixes include two pure-#34 cases: (3) **partial `WriteFile` results silently truncated stdin** during forwarding to the elevated runner — single-write assumption against a multi-write pipe API; and (5) **driver-backed stdout/stderr tail dropped after a 200 ms grace period** — the tail bytes were discarded with no error. Both are silent field-drops at the byte level rather than the schema level, but the contract violation is identical: input present, output truncated, no error.

### Sibling — anomalyco/opencode #24200 (DeepSeek V4 empty reasoning_content)

**[anomalyco/opencode#24200]** — OPEN PR. The DeepSeek V4 provider was *dropping* empty `reasoning_content` blocks on both streaming and non-streaming paths, so downstream replay code reinterpreted "no reasoning emitted" when the model in fact emitted an empty reasoning marker. Synthesis-#34 instance (the empty marker is a load-bearing field; dropping it changes downstream semantics with no error) and a synthesis-#31 anchor (session-resume semantics divergence).

### Sibling — anomalyco/opencode #22612 (numeric tool_call ids)

**[anomalyco/opencode#22612]** — OPEN PR. Kimi/NVIDIA tool calls arrive with numeric `tool_calls[].id` values; the OpenAI-compatible chat runtime threw `Expected 'id' to be a string.` This is *technically* the inverse of #34 (the runtime did *not* silently drop — it threw a useless error), but the *first-streamed-chunk-omits-id* sub-case is pure #34: the streaming path accepted the chunk without an id, the assembled call carried no id, downstream resolution silently misrouted. The fix normalizes numeric ids and synthesizes a stable fallback id when the first chunk omits one.

## What is shared across A–F

| transformation step | exhibit | dropped field |
|---|---|---|
| Provider `transform_request` (Ollama) | A (#26122) | `tool_calls`, `tool_call_id` |
| Cache `add_cache` | B (#26446) | the cached entry itself + cache key match |
| Streaming guardrail iterator hook | C (#26448) | the post-call log row emission |
| Passthrough URL-route dispatcher | D (#26146) | the entire log row for unenumerated routes |
| HuggingFace embedding transform | E (#23525) | `extra_headers` (escape hatch) |
| In-process SDK client constructor | F (#24205) | Basic Auth headers |
| Windows `WriteFile` wrapper | sibling (#19211 fix 3) | tail bytes on partial write |
| Windows stdout/stderr drain | sibling (#19211 fix 5) | trailing chunks after 200 ms grace |
| DeepSeek V4 stream parser | sibling (#24200) | empty `reasoning_content` block |
| Streaming first-chunk assembler | sibling (#22612) | first-chunk `id` |

Six anchor exhibits across three repos, four sibling exhibits across two repos, ten dropped fields total. Every dropped field had a downstream consumer; not one of the drops emitted an error.

## Diagnostic checklist for engineering teams

1. **Every transformer is a contract surface.** If your transformer signature is `transform(InputSchema) -> OutputSchema`, the contract is *not* "translate the fields I know" — it is "translate the fields I know *and preserve all fields the consumer might depend on, including escape hatches like `extra_headers`*." Every transformer needs a "fields preserved through this transform" test against a representative payload.
2. **Dispatcher `else` branches are silent-drop generators.** A URL-route dispatcher with `if … elif … elif … else: return None` will silently drop every new route added upstream. Replace `else: return None` with `else: log.warning("unhandled route") + raise UnhandledRouteError(...)` or, at minimum, a metric increment that triggers an alert.
3. **Streaming hooks need contract parity with non-streaming hooks.** If the non-streaming code path's `finally` block writes a log row, the streaming code path's iterator's stream-end handler needs to write the *same* log row. Move the side effect into a shared helper that both paths must call.
4. **Constructors that take auth/session/headers from env vars need parity tests across every invocation mode.** If both `--attach` mode and in-process mode talk to the same server, both client constructors need to read the same env vars or share a credentials-loader function.
5. **Partial-IO loops are the byte-level analog of field drops.** Anywhere your code calls `WriteFile`, `write(2)`, `send(2)` without checking the returned byte count and looping, you have a silent-truncation bug waiting on the right buffer size.
6. **Empty values are *fields*.** A model that emits an empty `reasoning_content` block is *not* the same as a model that emits no `reasoning_content` block. A transformer that conflates the two has dropped a load-bearing distinction. Distinguish *absent* from *present-but-empty* explicitly in every schema and every transformer.
7. **Add a "field-preservation contract test" suite.** For every (input schema, transformer, output schema) triple, generate a test that asserts: every field on the input either appears verbatim on the output, appears in a documented transformed form on the output, or is documented as intentionally dropped. The test fails if a field is silently absent without documentation.

## Why this pattern compounds

Each exhibit is *shipped as a bug fix* — meaning the transformer was reviewed, merged, and ran in production for some time before the silent drop was noticed. **The detection mechanism is always external**: a user notices infinite tool-call loops, spend=0 in logs, missing UI panels, auth failures with confusing error messages, or a benchmark regression. **The transformer itself never raises.** This means the silent-drop class is not detectable by the project's normal CI / test suite unless the test specifically asserts field preservation. Without that explicit assertion, every new transformer added to the codebase is a candidate for the same bug class.

The rate of accumulation in W17 alone — six anchor exhibits in one cross-repo tick — suggests the pattern is *the* dominant bug class for the multi-provider / multi-transport / multi-mode coding-agent stacks, second only to synthesis #32 (advertised-vs-accepted validation) in volume.

## Lookahead — what to watch for in W18

- **A litellm-wide field-preservation audit.** If the maintainer who landed #26122 also files a follow-up tracking issue ("audit all 30+ provider transforms for `tool_calls` / `tool_call_id` / `extra_headers` preservation"), expect 5–8 fix PRs in the next 14 days. Watch `BerriAI/litellm` for `fix(<provider>): forward …` titles.
- **A passthrough-dispatcher refactor.** Vertex #26146 will likely trigger a follow-up that replaces the enumerated `if/elif/else` with a registry-driven dispatcher that *errors* on unenumerated routes. If that doesn't ship, the next new Vertex endpoint (Gemini 2.5 Flash embedding variants, future `:countTokens` updates) will repeat the bug.
- **A guardrail streaming-emit shared helper.** PR #26448's out-of-scope note flagged `AimGuardrail` and `_OPTIONAL_PresidioPIIMasking`. Watch for a follow-up that introduces a shared `_log_guardrail_information_streaming` decorator or context manager. Without it, every new guardrail will repeat the same drop.
- **Codex Windows IO loops.** Two of the six fixes in #19211 are partial-IO bugs. Expect a follow-up that consolidates Windows IO into a `write_all` / `read_to_end` helper analogous to `tokio::io::AsyncWriteExt::write_all`. If not, the next Windows IO call site will repeat the truncation.
- **DeepSeek V4 reasoning empty-vs-absent distinction across other providers.** Anomalyco #24200 fixed DeepSeek V4 specifically. Other reasoning-capable providers (DeepSeek R1, Anthropic thinking, OpenAI o1/o3, Qwen QwQ) likely have analogous code paths that conflate empty with absent. Watch for sibling fix PRs.

## TL;DR

Six exhibits, three repos, one shape: **a transformation step (provider transform, cache layer, streaming hook, passthrough dispatcher, escape-hatch forwarder, in-process auth wiring) silently dropped a field that was present on input.** The transformed payload was structurally well-formed, the upstream accepted it, no error was raised, and the downstream behavior was wrong in a way the caller could only detect by external symptoms. Whenever your project ships any kind of `transform(in) -> out` step — and modern coding-agent stacks ship dozens — assume by default that it drops fields silently until you write the field-preservation test that proves otherwise.
