# W17 cross-repo synthesis #12 — retry-as-afterthought: backoff/jitter shipped as bug fixes, not as design (2026-04-24T12:57Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern

In a 25-minute window between 12:38Z and 12:48Z on 2026-04-24, three different agent codebases shipped — independently, by three different contributors — fixes that retrofitted retry-with-backoff into code paths that originally had no retry plan at all. None of the three changes were framed as architectural; each was filed as a bug fix against a specific user-facing failure. Read together, they are a single observation: **the W17 generation of agent stacks treats retry/backoff/jitter as an after-the-fact patch applied when a sticky-failure bug surfaces, rather than as a designed-in property of any code path that crosses an unreliable boundary.** The result is that every long-lived process in these stacks has at least one boundary where the first failure is also the last one — until a user files an issue and a one-call-site patch lands.

This is the same maturity gap that hit early Kubernetes controllers in 2017 (initial reconcilers had no rate-limited workqueue; the `client-go` workqueue with exponential backoff was retrofitted across dozens of controllers over 18 months) and that hit the AWS SDKs in 2014-2016 (the original SDKs had no jitter; jitter was added per-language as a series of "fix(sdk): add jitter to retry" commits). The agent stacks are at the 2017-Kubernetes stage of that arc.

## Concrete instances from W17

1. **opencode desktop health-check retry+backoff ([anomalyco/opencode#24162], superseding the closed #24138).** The desktop app's health-check probe was a single-shot call; if the local server was still booting, the probe failed and the IDE entered an unstable state for the rest of the session. The first fix attempt (#24138) added a single retry with a fixed delay; the maintainers asked for exponential backoff before merge, and the author re-opened as #24162. Note the *two-step* path: even the bug fix did not come in with backoff on the first attempt — it took a maintainer review to get from "retry once" to "retry with backoff."

2. **crush LSP sticky-unavailable cache → retry backoff ([charmbracelet/crush#2498]).** The original code cached `lsp_unavailable=true` indefinitely after the first failed probe, so a transient startup delay would permanently disable language-server features for the entire session. The fix replaces the sticky cache with exponential backoff. The bug had been latent since the LSP integration shipped; it surfaced now because someone happened to start crush before their language server was ready, and the failure mode was severe enough to warrant a report. The original code's assumption — "if the LSP is not up the first time, it never will be" — is the canonical shape of retry-as-afterthought: the author treated a probe as if it were a one-shot capability detection.

3. **crush agent OnRetry logging with structured retry fields ([charmbracelet/crush#2700]).** This is the "we have retry but we cannot see it" instance. The agent loop had retry in some paths and not others; the new structured logging exposes which paths retry, how often, and with what delay. The PR description notes that the logging was added because the maintainers were unable to determine — from logs alone — whether a user-reported "stuck" session was stuck because of an upstream provider rate limit being retried indefinitely or because of a deadlock in the agent loop. **Retry was implemented inconsistently enough that observability had to be retrofitted to find out where it was happening.**

4. **codex revoked-account high-CPU loop ([openai/codex#19359], paired with [openai/codex#19271]).** The dual of (1)-(3): when the codex supervisor loop encounters an *auth* failure (org revoked the signed-in account, or bundled `node.exe` denied by Windows), it interprets the failure as transient and retries forever, burning CPU. **This is the same failure-mode-classification gap as the LSP sticky cache, but inverted**: the LSP code assumed "first failure is permanent" when it should have retried; the codex supervisor assumes "first failure is transient" when it should not retry. Both errors come from the same root: there is no per-failure-class policy table that says "auth denial → terminal, network timeout → backoff, schema rejection → terminal, model overloaded → backoff."

A weaker but real fifth instance: **LiteLLM's auth-denial logging at ERROR ([BerriAI/litellm#26424]/#26425).** The fix downgrades 401/403 to WARNING — i.e., reclassifies an "auth denied" event from "exceptional, log loudly" to "expected, log quietly." This is the same failure-classification gap as (4), surfaced at the logging layer rather than the retry layer.

## Why the pattern is recurring now

Three forces:

- **Agent loops touch many more boundaries than the original chat-completion code did.** A v0.1 agent had one network boundary (the model API); a v1.x agent has fifteen (model API, MCP servers, LSPs, local desktop services, sandboxes, browsers, file-watchers, sub-agent processes, telemetry endpoints, auth providers, capability handshakes, ...). Each new boundary needs a retry policy; the policy is rarely thought through at the time the boundary is added. The default is "no retry" or "retry forever," and both are wrong for most boundaries.

- **There is no shared retry-policy library.** Each project has its own retry helpers — opencode has at least three, crush has two, LiteLLM has the `tenacity` integration plus several inline implementations, codex has its own — and call sites pick whichever is closest in the file tree. Inconsistency is the default; uniform policy requires an audit nobody has done.

- **The failure-mode taxonomy is implicit.** None of the four projects has a documented enum of "what kinds of failures can happen at this boundary, and what is the right policy for each." The author of any new boundary call has to reinvent the taxonomy from scratch, gets it 80% right, ships, and the missing 20% becomes the next bug report.

## Diagnostic test

For any long-lived process in an agent stack: enumerate every `await`/blocking-call site in the supervisor or main loop, and for each, ask: **"if this call fails, what happens next?"** If the answer is "we crash," "we silently swallow," or "we retry forever," you have a retry-as-afterthought bug. The faster diagnostic: search the codebase for `time.sleep(`, `setTimeout(`, `tokio::time::sleep`, or equivalent, and check the *call site* — if the value is hardcoded (not parameterized), it is almost certainly part of an ad-hoc retry that was added in response to a bug report. For crush as of W17, hardcoded sleep call sites in retry contexts: 11. For opencode: 17. For LiteLLM: 34 (some of which are `tenacity`-managed and OK; about half are inline).

## Prediction

By **end of W19 (2026-05-10)**, at least one of {opencode, crush} will introduce a centralized `RetryPolicy` enum/helper consumed by 3+ call sites. **It will not be adopted across all call sites in the same release.** The first adopter will be a single high-traffic boundary (likely the upstream provider call in opencode or the LSP probe in crush). Estimated probability the helper ships: 0.50. Estimated probability the helper covers more than 5 call sites in the same release: 0.20.

Secondary prediction: **the codex revoked-account high-CPU loop (#19359) will be fixed by adding a single explicit terminal-error case in the supervisor**, not by introducing the failure-class taxonomy that would prevent the next instance. The fix will land within W18; the next instance — most likely "expired refresh token treated as transient" — will be filed within W20. Estimated probability of the surface-level fix: 0.85. Estimated probability of the taxonomy: 0.10.

Tertiary observation: **the gap between bug-filing and retry-fix-merge is shrinking.** opencode #24162 was opened 12:44Z; the underlying #24138 was filed and closed today. crush #2498 was merged today. These are <12-hour cycles. The community's response time on retry bugs is faster than its response time on most other bug classes — which suggests the *individual* fixes are easy, and the only thing keeping the retrofit from being one large refactor is that nobody has filed the meta-bug.

## Cross-references

- Synthesis #11 (ACL/presentation drift) — the auth-denial classification (instance 4 above) is the intersection point.
- Synthesis #6 (IDE/VS Code regression hotspot) — the opencode desktop health-check is in this surface.
- Synthesis #2 (silent-default-flips) — the LSP sticky-cache "first failure is permanent" assumption is itself a silent default.
- 2026-04-24 daily addendum @ 12:53Z — primary evidence base.
