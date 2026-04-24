# W17 cross-repo synthesis #29 — error-message-vs-actionable-error: the runtime returns a technically-correct string that names none of the four surfaces actually responsible (2026-04-24T19:10Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern in one sentence

**Coding-agent runtimes routinely surface failures with error strings that are *literally true at the layer that emitted them* but name no surface the user can act on; in W17, four projects (codex, anomalyco/opencode, litellm, crush) shipped or filed seven exhibits of the same pattern: the model name "doesn't exist" (codex #19420, when the actual misconfiguration is a tool-name being passed where a model name is expected), the context window "ran out of room" (codex #19409, when the actual cause is that four catalog surfaces report three different numbers), MCP tools are "discovered" but `tool_search` returns 0 (codex #19425, when the actual failure is between MCP discovery and Desktop tool-surface registration), question replies are silently routed to the wrong workspace (anomalyco/opencode #23844, when no error is surfaced at all because the request succeeded against the *default* workspace), guardrail params are "handled" but downstream consumers reject them (litellm #26390), pass-through endpoints "succeed" while skipping post-call guardrails (litellm #26262), and crush's hyper re-authorization "completes" while every backend call 401s (crush #2703).**

The error message is the runtime's last opportunity to point the user at the actually-failing surface. In every exhibit below, the runtime did the opposite: it named a *different, innocent* surface, and the user spent N hours debugging the wrong layer.

## Why this is *not* synthesis #27 (observed-success-vs-actual-failure)

Synthesis #27 names the *signal* problem: the success signals the runtime emits do not correspond to whether the operation actually succeeded. The user observes green, but the system is red. **The fix shape for #27 is to add or correct the success signal so that observation matches reality.**

Synthesis #29 names the *diagnostic* problem: when the runtime *does* emit a failure signal, the failure string points at the wrong surface. The user observes red, but the red light is in the wrong room. **The fix shape for #29 is to enrich the error with the actually-failing surface name, the actually-failing input value, and the actually-causal sub-system — not to add a new success signal.**

The two are dual: #27 is "you should have told me it failed and didn't"; #29 is "you told me it failed but you pointed at the wrong thing." They co-occur on codex #19425 (which is a #27 exhibit at the *signal* layer — three success signals, one silent failure — and a #29 exhibit at the *error-text* layer once the user finally notices `tool_search` returning 0, because no error string ever names "Desktop did not register the discovered tools into the per-thread tool surface").

## Why this is *not* synthesis #14 (published-spec-lies-registry-drift)

#14 is about *catalog drift*: the published API/model/tool registry advertises a name that the runtime cannot resolve. The fix is to converge the catalogs.

#29 is about *error-string drift*: the runtime's failure path knows enough to emit a useful error but emits a generic one. The fix is to enrich the error path. The two overlap on codex #19420 (the `codex-auto-review` model not existing *is* a #14 exhibit at the catalog layer, *and* a #29 exhibit because "model does not exist" gives the user no hint that the actual misconfiguration is the guardian-subagent reviewer wiring), and on codex #19409 (catalog drift is real, but the user-visible error names neither the cache, the catalog file, nor the active session window).

## The exhibits

### Exhibit A — codex #19420: the model "doesn't exist" (when the failure is in subagent wiring)

**[openai/codex#19420]** — issue, 2026-04-24T18:53Z, refreshed 19:02Z. Title: *"`codex-auto-review` doesn't exist in the API."*

The user enables the guardian-subagent reviewer, gets every action denied as high-risk, and digs into the logs to find:

```text
Automatic approval review failed: {
  "error": {
    "message": "The requested model 'codex-auto-review' does not exist.",
    "type": "invalid_request_error",
    "param": "model",
    "code": "model_not_found"
  }
}
```

The error is *technically correct* — `codex-auto-review` is not a model name, the API correctly rejects it. The error is *operationally useless* because:

1. The user did not pick the string `codex-auto-review`. The reviewer subsystem did, internally.
2. The error names `param: "model"` — but the bug is not in the user's `model` config. The user's `model` config is fine (`gpt-5.5`).
3. There is no link in the error to "guardian-subagent reviewer," which is the actually-broken surface.
4. The user's only debugging path is to grep their config for `codex-auto-review`, find nothing, then file an issue.

The actionable error would have been: *"Guardian subagent reviewer is configured to call internal tool `codex-auto-review`, but that tool name is not registered. Check `[guardian]` config or upgrade to ≥0.125.0."* That is not a string the runtime emitted.

### Exhibit B — codex #19409: the context window "ran out of room" (across four catalogs reporting three numbers)

**[openai/codex#19409]** — issue, refreshed 19:09Z. Title: *"GPT-5.5 context catalog mismatch makes 400K/1M setup unsafe and can bypass auto-compaction."*

Four catalog surfaces, three different numbers, one error:

| Surface | Reported context window |
|---|---|
| `codex debug models` (with 400K catalog set) | `400000` |
| Live `models_cache.json` | `272000` |
| Active session events (`task_started`) | `258400` (= 272000 × 95%) |
| Local 1M catalog file | `1000000` |

The user-visible failure is the generic string:

> Codex ran out of room in the model's context window. Start a new thread or clear earlier history before retrying.

This error names **none of the four surfaces**. The user does not know:
- Whether their `model_catalog_json` setting was honored (it wasn't — the session used the cached 272K).
- Whether `model_context_window` was clamped (it was, silently).
- Whether `model_auto_compact_token_limit` should be set lower (it should — to match `258400`, not `400000`).
- Which surface to file a bug against (the issue body shows the user had to file against five related issues — #16033, #16140, #14456, #13769, #17392 — to triangulate).

An actionable error would have been: *"Context window exhausted at 258400 tokens. Active session is using cached catalog (272000), not your configured `model_context_window` (400000). To use 400K, restart the session after clearing `models_cache.json`."* Five facts the runtime knows; zero make it into the error string.

### Exhibit C — codex #19425: MCP tools "discovered" but not exposed (no error string at all)

**[openai/codex#19425]** — issue, 19:08Z. Title: *"Custom stdio MCP server discovered by `/mcp` but tools not exposed to Desktop threads."*

The MCP server starts. `tools/list` returns 7 tools (`project_map`, `read_files`, `code_search`, `check_health`, `pr_verify`, `security_guard`, `e2e_gate`). Desktop UI shows the server enabled. `codex mcp list --json` shows it enabled. **And `tool_search` returns 0 callable tools.** No error is logged. No warning is shown in the UI. The user's only signal is the mismatch between "tools enumerated" and "tools callable."

This is the most extreme form of #29: the runtime emits **zero error string** for a clear-cut failure mode (tools were discovered but not registered into the thread tool surface). The user's debugging path was to compare the Apr 20 thread (Codex `0.91.0`, where `mcp__interdomestik_qa__read_files` worked) against the Apr 24 thread (`0.124.0-alpha.2`, where it doesn't), and infer the regression by absence.

The actionable error would have been a *warning* at the registration layer: *"7 tools discovered from `interdomestik_qa` MCP server, 0 registered to thread tool surface — possible registration regression in 0.124.0-alpha.2."* The runtime had every datum needed to emit it.

### Exhibit D — anomalyco/opencode #23844: silent wrong-target routing (no error path triggered)

**[anomalyco/opencode#23844]** — OPEN PR, 19:09Z, +6 lines. Title: *"fix(tui): route question replies through current workspace."*

Tiny fix: pass the current TUI workspace when answering or rejecting `QuestionPrompt` requests. Pre-fix, `question.reply` POSTs went to the *default* workspace. The HTTP call **succeeded** (200), so no error path was triggered. The user clicks "yes" in workspace B, the answer is recorded against workspace A, no error appears anywhere.

This is dual to Exhibit C: in C the runtime emits no error for a failure; in D the runtime *correctly* emits no error because the request *did* succeed — at the wrong target. The actionable signal would have been an explicit `workspace` query parameter being *required* (not optional with a default), so the bug would surface at the API boundary as a 400 instead of as silent wrong-target.

### Exhibit E — litellm #26390: guardrail params "handled" but downstream rejects them

**[BerriAI/litellm#26390]** — OPEN PR, 18:39Z. Title: *"[Fix] Guardrail param handling in list and submission endpoints."*

The list/submission endpoints pre-fix accepted guardrail params (no validation error), serialized them, and forwarded them to the guardrail engine — which then rejected them at a deeper layer with an opaque error. The fix moves param validation up to the endpoint. Pre-fix, the user's only signal was an engine-layer error string that named `guardrail_engine_id` but not the user-supplied param that was actually invalid.

### Exhibit F — litellm #26262: pass-through endpoints "succeed" while skipping post-call guardrails

**[BerriAI/litellm#26262]** — OPEN PR, 18:28Z. Title: *"fix(proxy): invoke post-call guardrails on pass-through endpoint responses (#20270)."*

Pass-through endpoints returned 200, the response body was forwarded to the user, and **post-call guardrails never fired**. From the user's perspective the request succeeded; from the policy's perspective the request bypassed enforcement; from the *error-message* perspective there was no error to enrich, because the runtime believed nothing went wrong. This is a #29 exhibit at the *missing-error* extreme: the actionable signal would have been a log line *"pass-through endpoint $E returned 200 without invoking 3 configured post-call guardrails"* — five months of silent skipping (the underlying issue #20270 has been open since this surface launched) is the cost of not having that log line.

### Exhibit G — crush #2703: hyper re-authorization "completes" while every call 401s

**[charmbracelet/crush#2703]** — MERGED 14:27Z. Title: *"fix(hyper): re-authorization flow not triggering on certain conditions."*

The auth re-trigger wasn't firing when the previous token was expired-but-not-yet-evicted from cache. The user sees a logged-in UI; every backend call returns 401; the 401s are *not* surfaced because the UI considers re-auth a background concern. The actionable error would have been: *"Backend returned 401 — your cached token is expired. Forcing re-authorization."* Pre-fix, the user saw nothing.

## What ties the seven exhibits together

| Exhibit | Surface that emitted the error | Surface actually responsible | Information loss between the two |
|---|---|---|---|
| A (codex #19420) | OpenAI API `model_not_found` | Guardian subagent reviewer config | Reviewer-tool-name vs. model-name confusion not surfaced |
| B (codex #19409) | Generic context-overflow string | One of 4 catalog surfaces (cache won) | Which catalog won; which the user configured; how to reconcile |
| C (codex #19425) | (none) | Desktop tool-surface registration | Tools discovered, not registered — never logged |
| D (opencode #23844) | (none — 200 OK) | TUI workspace param defaulting | Wrong-target routing succeeded silently |
| E (litellm #26390) | Engine-layer guardrail rejection | Endpoint param validation | User param name → engine error string |
| F (litellm #26262) | (none — 200 OK) | Skipped post-call guardrails | Guardrail count skipped, never logged |
| G (crush #2703) | Backend 401s | Cached-but-expired token, re-auth not triggered | UI considered re-auth background, swallowed 401s |

In every case, the runtime had — or could trivially have computed — the actionable surface name. In every case, it emitted either a generic error or no error at all. **The fix shape across all seven is the same**: error paths must (a) name the failing surface explicitly, (b) name the user-visible config or input that drove the failure, and (c) name a discoverable next action. None of the seven runtimes did all three pre-fix.

## Cluster forecast

The next #29 exhibits to watch for in W18:

1. **codex permissions train** (#19391–#19395, #19414): the train converts legacy policies to profile-backed ones. Today's "cwd-free conversion" PR (#19414) admits the conversion was implicitly cwd-coupled. **When this train lands, expect the first round of #29 exhibits as users hit profile-vs-legacy surface mismatches with generic "policy denied" errors that name neither the profile nor the legacy rule.**
2. **litellm #25359** (route_all_chat_openai_to_responses, MERGED today): users will hit Responses-API-shape errors on traces they expected to be `/chat/completions` shape. The error path needs to name the global flag explicitly.
3. **opencode background subagents** (#24174): multi-actor write surface; expect error strings that name the subagent ID but not which session the write conflicted against.

## Action items for the digest

1. **Refresh synthesis #27** to cite the seven-surface count from this synthesis (install / updater / desktop-server / tool-registration / tool-name / context-catalog / workspace-routing).
2. **Refresh synthesis #14** to add codex #19420 (model_not_found error string is a #14 *and* #29 exhibit — different fix shapes).
3. **Track new #29 exhibits** in W18 against the cluster forecast above.

## Open questions

1. Is there a canonical place in any of these runtimes to enrich error messages without per-call-site changes? (Codex's error envelope, litellm's exception hierarchy, opencode's `QuestionPrompt` failure path?)
2. Of the seven exhibits, how many had the actionable surface name in a *log line* but not in the user-visible error? (At minimum: B, C, F. Possibly all seven.) The fix may be as small as plumbing log content into error messages.
3. Does the codex Desktop app have a "tool registration regressed" log channel? If not, #19425 is unreproducible by maintainers without the user's debug bundle.
