# W17 cross-repo synthesis #33 — platform/transport parity as a load-bearing default: when "the same feature" silently behaves differently on the secondary OS, transport, or invocation surface, callers get no recovery path (2026-04-24T20:32Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern in one sentence

**A coding-agent project ships a feature that is correct on its *primary* platform / transport / invocation surface (typically macOS-or-Linux, the network-socket transport, the `--attach`-style external invocation, the openai-compatible request shape, the non-streaming code path) but the *secondary* surface (Windows, the Unix-socket transport, the in-process invocation, a non-openai upstream's transformed shape, the streaming code path) silently diverges in behavior — not by failing loudly, but by quietly opting out, downgrading, truncating, dropping, or skipping; in W17, six exhibits across codex, anomalyco/opencode, and litellm follow this script: codex #19435 (`Allow manual unified_exec opt-in on Windows` — Windows-only env-var gate had silently disabled the feature), codex #19211 (`Improve Windows process management edge cases` — six Windows-only silent-data-loss / silent-orphan bugs that the Mac+Linux paths had already addressed), codex #19244 (`Update unix socket transport to use WebSocket upgrade` — the Unix-socket transport was raw-bytes while the network transport was already WebSocket), anomalyco/opencode #24205 (`fix(cli): authenticate run in-process server requests` — in-process SDK client did not send the auth headers that the `--attach` client correctly sent), litellm #26122 (`fix(ollama): forward tool_calls and tool_call_id` — ollama provider's `transform_request` dropped fields that other providers' transforms preserved), and litellm #26448 (`fix(content_filter): log guardrail_information on streaming post-call` — streaming code path skipped the log emission that the non-streaming path always wrote).**

In each exhibit, *both* surfaces exist, *both* are documented as supported, and the divergence is invisible until the caller hits the secondary surface in production. There is no platform/transport gate, no warning banner, no opt-in dialog. The secondary-surface behavior **is the default** for any caller who happens to land on it — that is what makes it load-bearing.

## Why this is *not* synthesis #25 (non-interactive-surfaces-are-second-class)

#25 names the case where a non-interactive surface (CI, cron, headless, server-side) is treated as second-class *by design* — its UX is degraded, its error messages are terser, its feature parity is lower, and the project is aware of this. **#33 names the case where the secondary surface is supposedly first-class but silently diverges in *behavior*** — the project intends parity, the docs claim parity, and the divergence is a bug rather than a deliberate design choice. #25 is "the second-class surface is degraded on purpose"; #33 is "the second-class surface is bugged because no one tested it as primary."

## Why this is *not* synthesis #18 (version-skew-cli-vs-server)

#18 names the case where two *versions* of the same component diverge — the CLI is on N+1, the server is on N, and the contract between them breaks. **#33 names the case where two *implementations* of the same feature diverge across platforms / transports / invocation modes** at the same version — they are both built from the same source tree, both released at the same time, but the platform-specific code paths drifted. #18 is "version skew across time"; #33 is "implementation skew across surface."

## Why this is *not* synthesis #17 (feature-flags-as-load-bearing-defaults)

#17 names the case where a feature flag's *default value* is the contract that callers are implicitly depending on. **#33 names the case where the secondary surface's *behavior* (with no flag involved) is the contract** — callers don't even know there is a surface-specific code path to flip. #17 is "the default value is load-bearing"; #33 is "the surface-specific implementation is load-bearing."

## The exhibits

### Exhibit A — codex #19435: allow manual unified_exec opt-in on Windows

**[openai/codex#19435]** — OPEN PR, 20:21Z, head `f4976eeac19b4ae46978b0bb5588d4c02d2fc724`. Title: *"[codex] Allow manual unified_exec opt-in on Windows."*

Pre-fix: Windows had a *Windows-specific environment-variable gate* in tool selection that prevented sandboxed Windows sessions from ever picking the `unified_exec` tool. The same gate did not exist on macOS or Linux. The fix removes the env-var gate and lets Windows users manually opt in via the same feature-flag the other platforms use.

The PR also fixes a *second* Windows-specific divergence in the same code path: when the model declared `shell_type = "unified_exec"` in its tool-call response, macOS and Linux honored the declaration; Windows silently downgraded it to `shell_command`. The fix normalizes that downgrade to apply *only* when the feature flag is disabled, restoring parity.

The synthesis-#33 framing: two adjacent Windows-only divergences in the same file, both load-bearing (`unified_exec` opt-in path on Windows; model-declared shell type honored on Windows). Neither was documented as a Windows-specific gate. A user on Windows had no way to discover the gate from the docs or the error path — `unified_exec` simply was not selected, and the model's declaration was simply ignored. **The default state of the secondary platform was a silent opt-out from a feature that the primary platforms enabled.**

### Exhibit B — codex #19211: improve Windows process management edge cases (six fixes in one PR)

**[openai/codex#19211]** — OPEN PR, 20:18Z, head `1f079fe28fdf57e5981cb732aa46c4436fee3ba5`. Title: *"Improve Windows process management edge cases."*

Six discrete Windows-only fixes, *all* of which have macOS/Linux analogs that work correctly:

1. **Bound the elevated runner pipe-connect handshake.** Pre-fix, the blocking pipe connect could wait forever; macOS/Linux paths use bounded socket connect with a timeout.
2. **Terminate the spawned runner if the handshake fails.** Pre-fix, timeout/error paths left a stray `codex-command-runner.exe` process orphaned; macOS/Linux paths reap.
3. **Loop on partial `WriteFile` for stdin forwarding.** Pre-fix assumed a single `WriteFile` consumed the whole buffer — which Windows pipes do not guarantee — silently truncating input. macOS/Linux paths already loop on `write(2)`.
4. **Fix HANDLE/SID cleanup on raw error paths.** Pre-fix leaked OS handles; macOS/Linux paths (no handles, just FDs) had RAII drop semantics.
5. **Keep draining driver-backed stdout/stderr after process exit until the backend closes**, instead of dropping the tail after a 200 ms grace. Pre-fix silently dropped the last chunk on slower backends; macOS/Linux paths drain to EOF.
6. **Reuse `LocalSid` for SID ownership.** Pre-fix had ad-hoc SID handling; this is the Windows analog of the existing reference-counted ownership patterns on POSIX.

All six are *silent* failure modes — orphaned processes, truncated input, dropped output tails, leaked handles. **The macOS/Linux paths had each of these problems at some point in history and they were fixed there; the Windows paths inherited the bugs and only now are being patched.** The synthesis-#33 framing: the secondary platform's process-management surface was a load-bearing silent default — anyone running the agent on Windows got truncated stdin / orphaned subprocesses / dropped stdout tails as the *expected* behavior, with no error path.

### Exhibit C — codex #19244 (MERGED): update unix socket transport to use WebSocket upgrade

**[openai/codex#19244]** — MERGED 20:07Z, commit `687c5d9081f373166a06c2f18e7f634f9a0ff44b`, head `db6ccb3f8908ba7c2460111a557fdd57f2771c34`. Title: *"Update unix socket transport to use WebSocket upgrade."*

The app-server has two transports: a network-socket transport that already used the standard WebSocket HTTP Upgrade handshake, and a Unix-socket transport that used a *raw* byte-stream framing without the upgrade. Functionally both shipped frames; *operationally* they were different — anything that could parse network-socket traffic (recorders, sniffers, intermediaries, debug proxies) could not parse Unix-socket traffic by the same code, because the framing was different.

The PR aligns the Unix-socket transport with the network one: same HTTP Upgrade handshake, same WebSocket frame layout. **The fix is itself a contract change**: any caller or debugging tool that consumed the *old* raw-byte format on the Unix-socket path now gets WebSocket frames on next release, with no opt-out flag.

The synthesis-#33 framing: the secondary transport was load-bearing in its own right — multiple debug/recorder tools were built against it precisely *because* it was lighter-weight than the WebSocket framing. Aligning it removes the divergence (good) but does so by silently flipping the secondary-surface contract (the bad part). This exhibit is the "fix the parity by flipping the secondary surface to match the primary" version of the pattern; #33 covers both the "fix the secondary surface" and "the secondary surface was wrong" framings.

### Exhibit D — anomalyco/opencode #24205: fix(cli): authenticate run in-process server requests

**[anomalyco/opencode#24205]** — OPEN PR, 20:06Z, head `d7921577b637f69d830452229de6dd10a725c645`. Title: *"fix(cli): authenticate run in-process server requests."*

`opencode run` has two invocation modes: `--attach` (talks to an external server over the network) and plain `run` (spins up an in-process server and talks to it through the SDK). Both modes apply the same `AuthMiddleware` on the server side. The `--attach` client correctly built and sent Basic Auth headers from `--password` or `OPENCODE_SERVER_PASSWORD`. The in-process SDK client **did not** — it instantiated the SDK with no auth credentials at all.

Result: when `OPENCODE_SERVER_PASSWORD` was set, the in-process server rejected the SDK client's session-create call, and the CLI surfaced the rejection as a generic `Error: Session not found` — masking both the auth divergence and the actual cause.

The synthesis-#33 framing: two clients of the same server, both supposedly first-class invocation modes, with one silently missing the auth headers the other always sent. **The default behavior of the secondary surface (in-process) was a load-bearing silent contract violation** — `opencode run` without `--attach` would always fail when password auth was configured, with no error message that pointed at the auth divergence as the root cause.

### Exhibit E — litellm #26122: fix(ollama): forward tool_calls and tool_call_id in transform_request

**[BerriAI/litellm#26122]** — OPEN PR, 20:28Z, head `619c0cb3d946697d37216e87794686236d1afe0f`. Title: *"fix(ollama): forward tool_calls and tool_call_id in transform_request."*

The Ollama provider's `transform_request` correctly converted assistant `tool_calls` into the Ollama `OllamaToolCall` format **but never copied the converted calls into the outgoing `OllamaChatCompletionMessage`**. Ollama therefore received `{role: assistant, content: ''}` with no `tool_calls` — the model had no record of having issued the call, and **re-issued the same call on every turn, creating an infinite tool-call loop**. Adjacent: `tool_call_id` on `role: tool` messages was silently dropped, and Ollama uses that field to resolve the tool function name from conversation history.

The synthesis-#33 framing: every other provider's `transform_request` in litellm correctly forwarded `tool_calls` and `tool_call_id`. The Ollama provider's transform — written separately, on a different code path — silently dropped them. **The secondary provider's transform was a load-bearing silent divergence** from the contract that the primary providers' transforms upheld. A user with an OpenAI-shaped multi-turn tool conversation got correct behavior on the OpenAI provider, infinite loops on the Ollama provider, and no signal that the divergence was provider-specific.

This exhibit also overlaps synthesis #34 (silent-transformer-field-drop) — the field-drop is the *mechanism*; the cross-provider parity break is the *pattern*.

### Exhibit F — litellm #26448: fix(content_filter): log guardrail_information on streaming post-call

**[BerriAI/litellm#26448]** — OPEN PR, 20:19Z, head `e6fdf5a17317443d05c2ea9b9207430446d659b1`. Title: *"fix(content_filter): log guardrail_information on streaming post-call."*

`ContentFilterGuardrail` has two post-call code paths: non-streaming (driven by `apply_guardrail`) and streaming (driven by `async_post_call_streaming_iterator_hook`). The non-streaming path's `finally` block always wrote a `standard_logging_guardrail_information` entry to the request metadata; the streaming path's iterator processed chunks correctly but **never called `_log_guardrail_information(...)` at stream end**. Result: the SpendLogs row's `metadata.guardrail_information` was empty for every streaming run, and any downstream consumer (UI Request Lifecycle panel, custom loggers, observability stack) saw nothing for streaming traffic.

The PR's own out-of-scope note says **the same gap exists in `AimGuardrail` and `_OPTIONAL_PresidioPIIMasking`** — at least three guardrail implementations have the streaming path silently diverging from the non-streaming path on the same emit-the-log-row contract.

The synthesis-#33 framing: streaming is the secondary code path; non-streaming is the primary. Both are first-class supported surfaces. The streaming-vs-non-streaming divergence is a load-bearing silent default — every streaming request silently loses the guardrail log, and the divergence is replicated across multiple guardrail implementations because each one had to wire up the streaming hook independently and each one forgot the same call.

This exhibit also overlaps synthesis #34 (silent-transformer-field-drop on the log emission) and synthesis #25 (streaming as second-class surface). The synthesis-#33 lens is the *cross-implementation parity break* — the same gap recurring because no one wrote a shared streaming-emit helper.

## What is shared across A–F

| dimension | exhibit |
|---|---|
| OS-level platform parity (Windows ↔ macOS/Linux) | A (#19435), B (#19211) |
| Transport parity (Unix-socket ↔ network-socket) | C (#19244) |
| Invocation-mode parity (in-process ↔ --attach external) | D (#24205) |
| Provider parity (Ollama transform ↔ all other transforms) | E (#26122) |
| Code-path parity (streaming ↔ non-streaming) | F (#26448) |

Five distinct *axes* of parity, all violated, all silently. The pattern is not specific to OS — it is specific to the *concept* of "a primary surface and a secondary surface that are supposed to behave identically."

## Diagnostic checklist for engineering teams

If your project ships any of these dimensions:

1. **A primary OS plus secondary OS support** — every platform-conditional code path is a parity-divergence candidate. Treat `#[cfg(windows)]` / `if sys.platform == "win32"` blocks as load-bearing defaults that need explicit parity tests.
2. **Multiple transports for the same protocol (network socket, Unix socket, in-process pipe, stdio)** — frame any new feature against *every* transport before merge. Transport-specific framing decisions (raw bytes vs. WebSocket vs. JSON-RPC over stdio) are silent contract surfaces for downstream tooling.
3. **Multiple invocation modes (CLI direct, CLI --attach, SDK in-process, server-only)** — auth, session lifecycle, env-var propagation, and timeout handling are the four most common parity-break axes. Test each mode in a real end-to-end matrix; per-mode unit tests do not catch the cross-mode divergence.
4. **Multiple upstream providers behind a unifying interface** — every per-provider transform is a divergence candidate. Add a contract test that runs the *same* multi-turn tool conversation through every provider's transform with assertion on field-preservation, not just on no-throw.
5. **Streaming and non-streaming code paths for the same operation** — the post-completion side effects (logging, metrics emission, cleanup) are the most-forgotten parity axis. Move them into a shared helper invoked by both paths' `finally` blocks.

## Why this is not yet a synthesis-#22 (privilege-by-exclusion) collapse

#22 names cases where the *exclusion list* is the load-bearing surface (e.g., the connector blanket-block, the admin-overscoping, the pass-through endpoint exclusion from guardrails). **#33 is *not* about exclusion — it is about *implementation drift between supposedly-equivalent surfaces*.** The Windows env-var gate in #19435 is not "Windows is excluded from the feature"; it is "Windows has a different gate that no one documented." The streaming guardrail-log gap in #26448 is not "streaming is excluded from logging"; it is "streaming forgot to call the same emit function the non-streaming path always called." The exclusion framing would tell you to *delete* the gate or *add* streaming to the allow-list; the parity framing tells you to *write a shared helper*.

## Lookahead — what to watch for in W18

- **Ollama provider transform parity audit**: if the maintainer who landed #26122 also audits the other six provider transforms, expect 2–3 more silent-field-drop fix PRs. Watch `BerriAI/litellm` for `fix(<provider>): forward …` titles.
- **Windows process-management follow-ups**: codex #19211's six-fix bundle is a *patch set*, not a refactor. Expect a follow-up PR within two weeks that consolidates the Windows process-management code paths against a shared abstraction (analogous to the `LocalSid` reuse in fix #6). If that PR doesn't materialize, the next Windows-only silent-data-loss bug is not far behind.
- **Streaming-vs-non-streaming parity audit on guardrails**: #26448's out-of-scope note flagged `AimGuardrail` and `_OPTIONAL_PresidioPIIMasking`. Expect parallel fix PRs — and watch for whether the eventual cleanup introduces a shared streaming-emit helper. If it does not, this pattern will recur on the *next* guardrail added.
- **Unix-socket transport adoption metrics**: codex #19244 merged with no opt-out for the old framing. If downstream debug tooling regresses (and reports it), watch for a `feat: legacy unix-socket transport` PR within a week — that would be the synthesis #30 (default-flag-flip-as-breaking-change) followup.
- **`opencode run` in-process auth coverage**: anomalyco/opencode #24205 is a one-direction fix (in-process now sends auth). Watch for whether the test matrix gets a row for "in-process invocation with auth configured" — without it, the next env-var-driven auth path will silently regress on the same surface.

## TL;DR

Six exhibits, three repos, one shape: **the secondary surface (Windows / Unix-socket / in-process / Ollama / streaming) silently diverged from the primary surface (macOS-or-Linux / network-socket / --attach / OpenAI-compatible / non-streaming) on a contract that callers had no way to detect from the docs or the error path.** Whenever your project ships "the same feature, two ways to invoke it," the second way is a load-bearing silent default until proven otherwise.
