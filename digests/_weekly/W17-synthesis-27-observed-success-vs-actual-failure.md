# W17 cross-repo synthesis #27 — observed-success-vs-actual-failure: install/updater/UI exit codes lie because every layer trusts the layer below it (2026-04-24T19:00Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern in one sentence

**On 2026-04-24, four separate coding-agent projects shipped (or filed) bugs where the *outermost user-visible signal* — npm install exit code, updater "✓ Updated", desktop window opening, response parsed cleanly, login UI green — reported success while the *backing operation actually failed*: the optional native binary 404'd, the curl 403'd, the app-server crashed, the model field defaulted wrong, the auth token was stale; six PRs/issues across codex, crush, opencode, and litellm in the same window all share the shape "the layer above trusted the layer below's success report without verifying the post-condition."**

The CDN said 404. The npm postinstall ignored it because the dependency was *optional*. npm exited 0. The user saw "installed." The CLI cannot run. Every layer above the 404 reported success.

## Why this is *not* synthesis #14 (published-spec-lies-registry-drift)

Synthesis #14 names a *spec-vs-runtime* mismatch — the registry/docs claim a capability the runtime does not deliver. This synthesis names a *post-condition-vs-exit-code* mismatch — the runtime *operation* claims success the *post-condition* contradicts. They overlap on cases like codex #19420 (`codex-auto-review` doesn't exist in the API) where the published surface name fails to resolve, but the defining gap here is "the install/update/launch step returned 0 and the artifact it was supposed to produce is not on disk / not running / not callable," not "the docs promised something."

## Why this is *not* synthesis #19 (snapshot-vs-live-state) or #16 (accepted-but-unpropagated)

Snapshot bugs are *temporal* — the writer wrote at T0, the reader read at T1, the world moved. Accepted-but-unpropagated bugs are *write-then-revert* — the mutation was acknowledged then silently rolled back. This synthesis names a *single-step* failure: at one instant, the operation reports success and its post-condition is false. There is no T0/T1 gap, no later refresh that drops the change. The lie is told at the moment of completion.

## Why this is *not* synthesis #21 (advertised-capability-vs-runtime-delivery)

Synthesis #21 is about *capability advertisement* — the model card, the picker, the feature-flag list claims X is available; runtime gives you Y or nothing. This synthesis is about *operation completion* — the install/update/auth/parse step says it succeeded; the resulting state contradicts that claim. #21 is "what does this surface offer?" #27 is "did this action actually happen?"

## The exhibits

### Exhibit A — codex 0.125.0 npm install reports success on a missing native binary

[openai/codex#19419] (18:46Z, issue) — *"Linux x64 optional tarball 404 — 0.125.0 install leaves CLI broken (`Missing optional dependency @openai/codex-linux-x64`)."*

The 0.125.0 release publishes platform-specific native binaries as **optional** npm dependencies — `@openai/codex-linux-x64`, `@openai/codex-darwin-arm64`, etc. If the optional dep's tarball 404s on the registry, npm correctly logs a warning and exits 0 (because, by the contract, optional deps are allowed to fail). The launcher then tries to load the binary and fails with `Missing optional dependency @openai/codex-linux-x64`.

The *install* succeeded by every signal npm exposes. The *post-condition* (a runnable CLI) is false. **The npm optional-dep contract is being used as a feature it was never designed to be:** a hard runtime requirement that pretends to be optional so its absence doesn't fail the install. The exit code lies because the contract itself was misapplied.

### Exhibit B — codex updater pretty-prints "✓ Updated" after the install script's curl 403'd

[openai/codex#19421] (18:53Z, issue) — *"Updater reports success after install script fails with curl 403."*

The codex updater pipeline:
1. Calls a download URL via `curl`. CDN returns 403.
2. The updater catches the 403 (probably via `set -e` not being set, or via an explicit `|| true`).
3. The updater proceeds to the "post-update" step, which is largely cosmetic.
4. The updater prints `Updated to 0.125.0 ✓` and exits 0.
5. The on-disk binary is still the previous version.

Same shape as Exhibit A: a *real* failure (HTTP 403) was caught and downgraded to a non-failure, the *outer* success path ran to completion, the user-visible result is "updated" while the actual on-disk state is "unchanged." Different surface, identical pathology.

### Exhibit C — codex Desktop IAB opens cleanly but the backing app-server is dead

[openai/codex#19423] (18:55Z, issue) — *"Codex Desktop IAB cannot inspect external pages because app-server fails to start on Windows."*

The desktop window opens. The In-App Browser tab is reachable. The user navigates. Inspection fails because the *app-server* — a separate process the desktop UI talks to over IPC — crashed at launch. The desktop UI noticed only that its IPC handle didn't connect; it did *not* surface this as a startup failure, it surfaced it as a per-feature failure ("inspection unavailable").

The success signal here is the *window itself* — the user-facing artifact is up. The actual operation (launch app-server, establish IPC) failed silently and got presented as a feature being unavailable rather than the application being broken.

### Exhibit D — codex `codex-auto-review` API name doesn't resolve

[openai/codex#19420] (18:58Z, issue) — *"`codex-auto-review` doesn't exist in the API."*

A documented tool/sub-command name resolves cleanly in the local CLI's tab-completion and help text but returns a 404-equivalent at the API layer. The local layer (CLI surface) reports the operation as well-formed; the remote layer (API) doesn't recognize it. This straddles synthesis #14 (published-spec-lies) and #27 (observed-success-vs-actual): the *publishing* surface lied, *and* the local operation reported success against that lie. Cited here because the failure shape — "the call left the local layer cleanly, observably successful, then died at the next hop" — is the #27 fingerprint, not the #14 fingerprint.

### Exhibit E — codex "You're out of Codex messages" with positive credits

[openai/codex#19417] (18:45Z, issue) — *"Showing 'You're out of Codex messages' either I have credits."*

The presentation says zero. The backing balance, fetched fresh, is positive. The presentation layer either cached an empty response, or read a different (stale, sandbox, wrong-account) balance, and is now confidently displaying a wrong number that is wrong-by-the-same-system's-own-other-call. The *display call* succeeded (the badge rendered, no error), the *answer it displayed* contradicts the truth.

This one straddles #19 (snapshot-vs-live), but it is filed here because the user-visible signal is *not* "the data looks stale" but *"the system is confidently reporting an operational state (out of credits) that is false."* The success of the rendering masks the failure of the underlying balance fetch.

### Exhibit F — crush re-auth flow doesn't fire; user sees logged-in UI, every backend call 401s

[charmbracelet/crush#2703] (14:27Z, MERGED) — *"fix(hyper): fix re-authorization flow not triggering on certain conditions."*

The auth subsystem has two states: "token present in cache" and "token valid." The UI gated on the first; the backend required the second. When a token expired but had not yet been evicted from cache, the UI presented a logged-in state and every API call returned 401. The user-visible login surface lied; the merged fix wires the re-auth trigger to the *validity* check rather than the *presence* check. The success signal (logged-in UI) was reading the wrong predicate.

### Exhibit G — opencode `existingModel` fallback masks a missing field

[anomalyco/opencode#24172] (14:41Z, MERGED) — *"fix: use existingModel as fallback for interleaved field."*

When the upstream provider returned a response without the `interleaved` field, the parser previously crashed; now it falls back to the existing model's value. **But notice the failure mode the fallback creates**: parses now succeed cleanly while silently using a stale/wrong default. The fix removes the explicit error and replaces it with an *implicit* observed-success-actual-misconfiguration. This is the *seed* of the next #27-shaped bug — a fallback added today is a wrong-default tomorrow when the upstream changes meaning.

### Exhibit H — litellm Redis IAM cache: every call returned successfully *while* starving the asyncio loop

[BerriAI/litellm#26441] (17:29Z, OPEN PR) — *"fix(redis): cache GCP IAM token to prevent async event loop blocking."*

Each Vertex/GCP request synchronously refetched the IAM token through Redis. Each individual request *returned successfully*. The aggregate behavior — asyncio loop starvation, request latency spiking under any concurrency — is a system-level failure that no single request's success/failure signal could surface. Per-request observability said "fine"; system observability said "broken." The cumulative observed-success masked an actual-failure visible only at the aggregate.

## What ties them together

All eight exhibits share a structural feature: **the success signal is generated by a layer that does not have the information needed to verify the post-condition**. npm cannot verify the optional binary loads. The updater cannot verify the new bytes are on disk if the curl was caught and ignored. The desktop UI cannot verify the app-server is alive without an IPC round-trip it never made. The credit badge cannot verify the balance call returned the *right user's* balance. The login UI cannot verify the cached token is *valid*, only that it is *present*. The interleaved-field fallback cannot verify the default is *semantically correct*, only that it is *parsable*. Per-request Redis can return success while the loop it lives in is starving.

In every case, the fix shape is the same in spirit: **make the success signal depend on the post-condition rather than on the operation's exit code.** Verify the binary loads after install. Verify bytes-on-disk after update. Probe the app-server before showing the window. Re-fetch balance before rendering "out of credits." Validate the cached token. Surface a real warning when the field defaults. Cache the IAM token instead of synchronously round-tripping per call.

## Operational implication

Every coding-agent project ships an install path, an update path, an auth path, a launch path, and a response-parse path. **Today's evidence is that all five are currently lying about success in at least one project each.** The user-visible reliability of these tools is now bottlenecked by the weakest exit-code-vs-post-condition gap in their stack, not by the model's quality.

The W17 fix-cluster to watch:
- codex #19419 / #19421 / #19423 / #19420 / #19417 — five independent fixes needed.
- crush #2703 — landed; this one fix is the cleanest exemplar of the pattern.
- opencode #24172 — landed but *creates* a future-#27 site.
- litellm #26441 — open; fixes the aggregate-observability case.

If your tooling consumes any of these projects, **stop trusting the install/update/auth/launch exit codes through 2026-04-25**. Verify post-conditions out-of-band (run `--version`, run a smoke prompt, check the binary hash, re-validate the token).

## Predictions for next 48h

1. **At least one more codex 0.125.x install/updater fix** will land — the optional-dep + updater-403 + desktop IAB shape is too systemic for a single PR.
2. **The opencode #24172 fallback will produce a downstream issue** within the week — a user will report behavior that traces back to the silent default.
3. **A litellm-side observability PR** will appear addressing per-request-success-aggregate-failure for IAM/auth round-trips beyond the GCP path (likely Bedrock or Azure AD next).
4. **Either crush #2690 or #2691 will land** with a release note that under-states the severity, because the corruption has not yet been escalated to a release blocker.

## See also

- Synthesis #14 (published-spec-lies-registry-drift) — adjacent, names *spec*-vs-runtime mismatches; #27 names *operation*-vs-post-condition.
- Synthesis #19 (snapshot-vs-live-state) — adjacent, names *temporal* gaps; #27 names *single-instant* exit-code lies.
- Synthesis #21 (advertised-capability-vs-runtime-delivery) — adjacent, names *capability advertisement* lies; #27 names *operation completion* lies.
