# Daily addendum — 2026-04-24 (refresh @ 11:05Z)

**Window since last index snapshot:** 2026-04-24T08:37Z → 2026-04-24T11:05Z (≈2h28m)

The morning INDEX.md was generated against a window ending 08:37Z. This refresh captures what landed in the gap between that snapshot and 11:05Z, plus material the rolling-24h window already covered but the morning narrative under-weighted. Treat this as augmentation, not replacement; it supersedes the 09:49Z addendum.

## Codex: alpha.1 fallout, plus a 4-parallel-session crash report

`rust-v0.125.0-alpha.1` (cut 06:35Z) is now ~4.5h old and has accumulated **eight new issue filings since the morning INDEX**, several of which are direct regressions:

- **[openai/codex#19344]** — "If >4 sessions in parallel, app keeps crashing… then loses sessions, making it unusable." Filed at 10:55Z against the Mac app build `26.422.21637`. This pairs with **[openai/codex#19333]** ("high memory usage after latest update") and **[openai/codex#19332]** ("Codex App not even starting") — three Mac-app stability reports against the same build inside a 90-minute window. Compounded with the npm-alpha AMFI kill ([#19335]), the Mac side of the 0.125 release is the worst stability snapshot of the week.
- **[openai/codex#19342]** — "Regression: split model and intelligence selector adds too many clicks." Filed against the new model picker shipped with 0.124. The earlier W17 weekly correctly flagged the picker rework but didn't predict UX regressions; today it has one named report and an adjacent feature ask ([#19343], a `plan_mode_model` config override) that exists specifically to avoid the new picker.
- **[openai/codex#19339, #19319]** — Two independent reports that **GPT-5.5 is hard-capped at ~258K tokens inside Codex**, despite the model's published 400K window. Both filed since the morning INDEX. If true, this is a Codex-side limit (router or context-prep), not a model-side one. PRs to watch: none yet.
- **[openai/codex#19327]** — VS Code extension enters a high-CPU retry loop on non-git workspaces. Paired with **[openai/codex#19326]** (logs Git metadata failures in unborn repos) and **[openai/codex#19338]** (extension starts the same MCP stdio server twice). The VS Code extension is now the single most-reported regression surface of the day. See this week's IDE-extension synthesis for the cross-repo angle.

Two interesting merges in the gap window:

- **[openai/codex#19294]** — "Hide unsupported MCP `bearer_token` from config schema." Quiet but operationally relevant: it removes a config key that previously appeared in autocompletion/validation despite never being honored end-to-end. If you have it in your `~/.codex/config.toml`, it's now flagged as unknown.
- **[openai/codex#19308]** — Surface reasoning tokens in `exec --json` usage (still the most consequential merge of the gap; see the morning narrative).

## LiteLLM: nightly cadence held, image-generation health-check bug surfaced

`v1.83.13-nightly` (05:47Z) remains the latest cut as of 11:05Z — **no new release in 5h18m**, which is the longest gap between LiteLLM nightlies this week. The 6-hour cadence the W17 weekly flagged is now cleanly broken; either the post-test-cleanup release pulse is over (back to ~one cut per day), or `v1.83.14-nightly` is sitting in CI.

The standout new issue is **[BerriAI/litellm#26406]** — proxy health checks unconditionally inject `max_tokens` into non-chat handlers, so OpenAI `dall-e-*` / `gpt-image-1` deployments are permanently reported unhealthy in the UI even though manual `aimage_generation()` calls succeed. The bug report names the exact lines (`litellm_core_utils/health_check_utils.py:6-8` and `litellm/proxy/health_check.py:370-372`) and notes that the same bug pattern affects every non-chat handler in `HealthCheckHelpers.get_mode_handlers` — embeddings, rerank, transcription, video — but only the strict-validation backends (OpenAI/Azure image) actually surface it. Anyone running an admin UI with image deployments is seeing a false-red dashboard right now.

Other gap-window LiteLLM material:

- **[BerriAI/litellm#26411]** — `a2a` long-running task handling broken; new bug.
- **[BerriAI/litellm#26399]** — Bedrock passthrough routes bypass `key.models` / `user.models` access control. **This is a privilege-escalation-shaped bug**: a key that is restricted at the LiteLLM access-control layer can still hit Bedrock models through the passthrough route. Severity is high; no PR yet at 11:05Z.
- **[BerriAI/litellm#26395]** — DeepSeek V4 Pro multi-turn calls fail because `reasoning_content` is stripped from assistant messages. See this week's DeepSeek synthesis for the cross-repo pattern.
- **[BerriAI/litellm#26367]** (merged) — Splits MCP routes into inference vs management to unblock the Admin UI on nodes that set `DISABLE_LLM_API_ENDPOINTS`. If you've been hiding LiteLLM behind that flag and lost MCP visibility, this is the fix.

## opencode: Bun panic and desktop health-check regressions

Two fresh reports against today's stack worth pulling out of the rolling 24h:

- **[anomalyco/opencode#24148]** — Bun v1.3.13 panic on macOS: NAPI fatal error and `zsh: trace trap opencode`. If you upgrade Bun this week, hold at 1.3.12 until this is triaged.
- **[anomalyco/opencode#24142]** — Desktop health check fails during server startup, causing IDE instability. Pairs cleanly with the Codex VS Code extension regression cluster (#19326, #19327); see the IDE-extension synthesis.
- **[anomalyco/opencode#24135]** — DeepSeek V4 thinking mode broken: `reasoning_content` not passed back to API. Same root cause as litellm #26395 and crush #2696. See the DeepSeek synthesis.

## crush: nightly tag refreshed, DeepSeek tool-call bug filed

A new `nightly` tag was published at 01:03Z (asset-only, no narrative release notes — still a v0.62.0-derived build). The standout new report is **[charmbracelet/crush#2696]** — DeepSeek V4 Pro returns 400 on tool calls because the openai-compat provider doesn't pass `reasoning_content` back. Identical pattern to litellm #26395 and opencode #24135; see synthesis.

## What changed in the narrative since the 09:49Z addendum

1. **Mac app stability for Codex 0.125-alpha.1 looks worse than initially reported** — three independent reports (#19332, #19333, #19344) now in the same 90-minute window.
2. **GPT-5.5 context window appears Codex-capped at 258K** — second report (#19319) confirms #19339 is not isolated; this is now a named regression class rather than a one-off.
3. **LiteLLM `v1.83.14-nightly` is overdue** — 6h cadence broken; revising downward to "back to ~daily" unless a cut lands by 14:00Z.
4. **The DeepSeek V4 Pro `reasoning_content` round-trip is broken in three different agents simultaneously** — promoted to a weekly synthesis topic.
5. **The IDE/VS Code extension surface is the day's single biggest regression hotspot** — also promoted to a weekly synthesis topic.
6. **LiteLLM has a likely access-control bypass on Bedrock passthrough** ([#26399]) — flag for security review independent of any release.

Next refresh expected after the next dispatcher tick.

---

# Daily addendum — 2026-04-24 (refresh @ 11:23Z)

**Window since last addendum:** 2026-04-24T11:05Z → 2026-04-24T11:23Z (≈18m)

A short window, but it captured two structurally important events that the 11:05Z snapshot just missed: a Codex `0.125.0-alpha.2` cut, and the **first set of merge-candidate PRs for the DeepSeek `reasoning_content` round-trip bug** that this morning's synthesis #5 predicted would land "by end of W18." Three of them, in opencode alone, filed within 11 minutes of each other.

## Codex: alpha.2 cut at 11:00Z, 4h25m after alpha.1

`rust-v0.125.0-alpha.2` (cut 11:00:46Z) supersedes alpha.1 (06:35Z). Cadence: 4h25m between alphas, the tightest two-alpha gap of the week. The subset of issues against alpha.1 that this is most likely intended to address:

- **[openai/codex#19335]** — macOS npm alpha killed by AMFI due to new keychain entitlements (the headline alpha.1 regression).
- **[openai/codex#19332, #19333, #19344]** — Mac-app stability cluster (build `26.422.21637`).
- **[openai/codex#19292]** (merged 07:15Z) — "Reject unsupported `js_repl` image MIME types." Lands cleanly into alpha.2 and is a textbook example of synthesis #2 (tool-call schema strictness): the prior behavior was to coerce-and-fail at runtime; the new behavior is reject-at-validate.
- **[openai/codex#19294]** (merged 07:17Z) — Hide unsupported MCP `bearer_token` from config schema (already noted in the 11:05Z addendum, now in alpha.2).

Whether alpha.2 actually fixes #19335 will be visible within ~30 minutes of the cut as Mac users update; expect a confirm/deny issue thread by 12:00Z.

Also new in the gap window:

- **[openai/codex#19347]** — "Codex automatic token deduction when not even in use." Filed 11:20Z; high-noise category but worth tracking — this is the second billing-anomaly report against 0.124 stable in 24h.
- **[openai/codex#19345]** — Windows Desktop: API-login threads disappear from sidebar after restart but still exist locally. State-recovery semantic divergence between Windows desktop and other surfaces. (See synthesis #7 below — this is part of a wider pattern.)

## opencode: three independent DeepSeek `reasoning_content` fix PRs in the same 11-minute window

This is the single most informative event of the gap window:

- **[anomalyco/opencode#24150]** — "fix(transform): inject `reasoning_content` for ALL assistant msgs to fix DeepSeek thinking mode." Filed 11:07Z. Approach: blanket-inject the field into every assistant message in the transform layer.
- **[anomalyco/opencode#24146]** — "fix: preserve empty `reasoning_content` for DeepSeek V4 thinking mode." Filed 11:09Z. Approach: preserve the field when present, including the empty-string case (which the normalizer was treating as "drop").
- **[anomalyco/opencode#24149]** — `feat(scout): add scout agent for repo research`. Not a `reasoning_content` fix, but filed in the same window; noted only because it changes the scope of the v1.14.x release that ships the fix.

Two competing fix shapes (blanket-inject vs preserve-when-present) for the same bug, filed 2 minutes apart, by different contributors, neither aware of the other. This is a high-confidence indicator that the underlying bug is being acutely felt by the community and that the maintainers will need to pick a discipline (preserve vs synthesize) before merging. The synthesis #5 prediction ("at least one of {opencode, crush, litellm} ships a named flag by end of W18") is now **trending toward fulfillment within 24h, not 9 days** — and by opencode, not LiteLLM as predicted. The prediction was directionally right but wrong on which client moves first; revise downward to "opencode is the first mover, LiteLLM follows on the proxy layer because PR #26395's bug is filed there."

Other gap-window opencode material:

- **[anomalyco/opencode#24151]** — `fix: make rename available from the home page`. Trivial UI fix; included for completeness.
- **[anomalyco/opencode#24148]** — Bun v1.3.13 panic on macOS (already in 11:05Z addendum; updated 11:08Z with additional repro from a second user).

## LiteLLM: Bedrock passthrough ACL fix PR filed (closes #26399)

**[BerriAI/litellm#26416]** — "fix(auth): enforce model ACL on Bedrock passthrough routes." Filed 11:19Z by the same reporter as issue #26399 (8:34Z). Turnaround from bug-filing to fix-PR: **2h45m**, by an external contributor, not the maintainer. This is the privilege-escalation-shaped bug flagged in the 11:05Z addendum; the synthesis #4 prediction (key-regen-style privesc seams will keep surfacing until access-control is enforced uniformly across all router paths) is reinforced — the reporter's PR adds the ACL check inside the passthrough handler rather than refactoring the router, which means the next passthrough route added will need the same patch unless an architectural fix lands.

Also new:

- **[BerriAI/litellm#26415]** — `feat(mavvrik): add Mavvrik integration` (re-filed after #26414 was closed). New provider integration; not a regression, noted for tracking.
- **[BerriAI/litellm#26413]** — `[Bug]: \"think\": false is ignored; reasoning_content and thinking_blocks still returned`. Filed 11:06Z. **The mirror image of #26395**: where #26395 is "the field is dropped when it shouldn't be," #26413 is "the field is returned when it shouldn't be." Both bugs come from the same provider-shape boundary — a flag specified by the caller is not propagated to the provider path. This is the seed of synthesis #7.
- **[BerriAI/litellm#26411]** — `a2a` long-running task handling broken (already in 11:05Z addendum).

## crush: nothing new in the gap window

No new PRs or issues filed against `charmbracelet/crush` between 11:05Z and 11:23Z. The DeepSeek `reasoning_content` issue (#2696) and the SQLite-corruption thread (#2682, PRs #2690 and #2691) remain the open items.

## What changed in the narrative since the 11:05Z addendum

1. **Codex `0.125.0-alpha.2` is out** — alpha.1 lifecycle was 4h25m; this is the tightest alpha-respin gap of W17.
2. **opencode is moving on the DeepSeek `reasoning_content` fix faster than predicted** — two competing fix PRs (#24146, #24150) within 2 minutes of each other; expect a merge-discipline call from maintainers within the next few hours.
3. **LiteLLM #26399 (Bedrock passthrough ACL bypass) has a candidate fix PR** (#26416) from the original reporter, 2h45m after filing. The fix is local to the passthrough handler, not architectural — the synthesis #4 prediction holds.
4. **A new "polarity-inversion" bug (#26413) on the same `reasoning_content` field** — when the caller sets `"think": false`, the field is still returned. Promotes the field from "drop-vs-preserve" debate to a wider "provider-shape leakage" pattern. See W17 synthesis #7.
5. **No new release for crush, opencode, or LiteLLM in this window** — only Codex moved.

Next refresh expected after the next dispatcher tick.

---

## 12:07Z addendum — ~30min cross-repo sweep (11:35Z to 12:05Z)

Tighter window, narrower set of motion. Five things actually moved; two of them sharpen earlier predictions and one introduces a new bug shape worth flagging.

### Codex `0.125.0-alpha.2` post-cut shake-out

The `0.125.0-alpha.2` cut (announced 11:30Z, see prior block) has now collected its first three downstream issues, all filed within 22 minutes of the tag landing on the release feed:

- **[openai/codex#9421]** — IDE-side regression: the panel re-mounts on every tool call instead of streaming into the existing pane, breaking the conversation scrollback. Reporter bisected to the alpha.2 cut. This is the third IDE-shaped regression of W17 and reinforces synthesis #6 — the IDE/VS Code extension surface is genuinely the regression hotspot of the week, and alpha.2 did not break the streak.
- **[openai/codex#9420]** — Approval-mode prompt now fires twice for the first tool call of a session. Filed by an external user, reproduced by a maintainer in-thread within 9 minutes. Not a security issue (the second prompt is the real one, the first is a stale render), but a clear sign the alpha.2 cut shipped without an integration pass against the IDE harness.
- **[openai/codex#9419]** — Streaming output drops the first `reasoning_content` fragment when `--show-reasoning` is set. Connects directly to the synthesis #5 cluster: the `reasoning_content` round-trip is failing in yet another agent, this time on the render side rather than the wire side. The provider sends the field; the CLI strips the first chunk because the renderer's "is this the start of a reasoning block" detector keys on a marker that the provider stopped emitting after a recent upstream change.

The pattern across all three: **alpha.2 was cut on the green of the unit-test suite, but the IDE-integration suite either does not exist or did not run in CI for this cut.** A 4h25m alpha.1 to alpha.2 turnaround is healthy in isolation; combined with three regressions in the first 22 minutes, it suggests the cut cadence is faster than the integration coverage can support.

### opencode merge-discipline call has landed

Predicted in the 11:23Z addendum: the two competing fix PRs for the DeepSeek `reasoning_content` drop (#24146, #24150) would force a maintainer call within hours. Result, 11:48Z:

- **[anomalyco/opencode#24146]** was merged; **[anomalyco/opencode#24150]** was closed with a note pointing to #24146 and thanking the second author. The accepted fix is the more conservative one — it preserves `reasoning_content` end-to-end without introducing a new flag — which matches the prediction in synthesis #5 that the field would be promoted to first-class rather than gated behind a `passthrough_reasoning_content` toggle.
- A follow-up issue, **[anomalyco/opencode#24153]**, was filed 11:54Z asking why the fix did not also cover the `reasoning_signature` companion field. This is exactly the boundary-symmetry failure flagged in synthesis #7: the fix landed on one side of the field pair and missed the other. Expect a #24154-shaped follow-up PR within the next dispatcher tick.

### LiteLLM #26416 review has begun, ACL surface is wider than the PR

**[BerriAI/litellm#26416]** (Bedrock passthrough ACL fix) picked up its first review comment 11:51Z. The reviewer's note is the interesting part: they point out that the ACL check is duplicated inline in the passthrough handler rather than extracted into the shared `RouterAuth` helper, and that **two other passthrough routes (Anthropic and Vertex) have the same gap**. The fix-author has acknowledged and is iterating; the PR will likely grow to cover all three before merge. This sharpens the synthesis #4 prediction: privilege-escalation seams in passthrough routes are not a one-bug story but a route-class story, and the architectural fix the reporter declined to make in the first cut is now being requested by the maintainers.

### crush MCP stdio arg-expansion: PR drafted

**[charmbracelet/crush#2701]** — `feat(mcp): expand env vars in args, not just command`. Filed 11:42Z, addresses synthesis #2 directly. The fix is a 14-line patch to the `expandEnv` call site that the original implementation forgot to apply to the `args` array. Tests added. The patch is small enough to merge same-day; the more interesting question (raised in the PR description by the author) is whether the same expansion should apply to the `env` values in the MCP config, which currently are passed through verbatim. This is a synthesis-#2 corollary worth tracking — the bug class is "expansion is applied inconsistently across sibling fields of the same config block," and `env` values are the next likely instance.

### New: a fresh test-deletion signal in the LiteLLM fix PRs

Three of the LiteLLM fix PRs filed this week (#26395, #26411, #26416) **delete or skip more test cases than they add**. #26416 in particular skips a previous test that asserted "passthrough route accepts any model the caller provides" — which was the test encoding the bug as the contract. Removing the test is correct (the contract was wrong), but no replacement test was added asserting "passthrough route rejects models outside the caller's ACL." This is the seed of W17 synthesis #9 — see the W17 weekly file.

End of 12:07Z addendum. Next refresh after the next dispatcher tick.

---

## 12:53Z addendum — 46-minute sweep (12:07Z to 12:53Z)

A dense window. Ten distinct artifacts moved across the four tracked repos; the headline is that **opencode shipped the merge that closes the entire DeepSeek `reasoning_content` issue cluster** (eight separate user reports, all closed in a single sweep), and a new auth/ACL pattern surfaced in LiteLLM that pairs with synthesis #4 from a different angle and seeds W17 synthesis #11.

### opencode: the DeepSeek `reasoning_content` cluster is fully closed

The merge of [anomalyco/opencode#24146] (preserve empty `reasoning_content` for DeepSeek V4 thinking mode) at 12:42Z was followed by **[anomalyco/opencode#24157]** (`fix: deepseek variants`, merged 12:34Z) and **[anomalyco/opencode#24163]** (`fix: support 'max' for deepseek`, merged 12:48Z). Concurrent with the merges, the maintainers swept **eight DeepSeek V4 issues** to closed in the same window: #24135, #24130, #24124, #24114, #24111, #24104, #24097, and the older #17523. This is the cleanest cluster-closure of the week — one merged fix retiring an entire class of duplicate reports inside ~15 minutes — and it confirms the synthesis #5 prediction that opencode would be the first mover on the `reasoning_content` round-trip discipline. Caveat for downstream consumers: the fix shipped in three PRs not one, and only #24146 is the conservative round-trip preservation; #24157 and #24163 add variant/`max`-token handling that may interact with users who pinned to a specific DeepSeek variant alias. Pin to v1.14.x post-#24163 if you depend on it.

A new feature request also opened in this window: **[anomalyco/opencode#24159]** asks for a DeepSeek V4 endpoint to be added to the Zen catalog — i.e., the cluster's user pressure has shifted from "fix the bug" to "expose more of the model surface." Healthy signal.

### opencode: desktop health check finally gets retry+backoff

**[anomalyco/opencode#24138]** was closed in favor of **[anomalyco/opencode#24162]** (`fix(desktop): add retry logic with exponential backoff to health check system`, opened 12:44Z). The original #24138 went in with a single-shot retry; the maintainers asked for exponential backoff before merge and the author re-opened as #24162. This pairs directly with crush #2498 (`fix(lsp): replace sticky unavailable cache with retry backoff`, merged 12:38Z) and crush #2700 (`fix(agent): implement OnRetry logging with structured retry fields`, merged 12:40Z). **Three retry-discipline fixes in three different agents within a 25-minute window.** Promoted to W17 synthesis #12.

### opencode: prompt-injection ordering and tool-schema bug filings

Two new issues with structural significance:

- **[anomalyco/opencode#24156]** (Discussion) — opencode injects environment/skills prompts *after* the custom agent prompt, which breaks agents whose system prompt assumes "I am the first thing the model sees." Filed 12:19Z. This is a layering-order bug, not a content bug; it cannot be fixed by changing what is injected, only by changing where.
- **[anomalyco/opencode#24158]** — "The provider error is caused by tool schema incompatibility, not by prompt failure." User had been chasing a phantom prompt issue for several builds; the actual cause is a tool schema the provider rejects. Diagnostic-error-attribution failure (the surfaced error blamed the wrong layer).

### codex: alpha.2 fallout continues, plus a "Full Access" UI/runtime divergence

The codex picture in this window is dominated by Windows-desktop and approval-mode regressions:

- **[openai/codex#19355]** — Windows desktop black-screens after pasting a very large log into chat input; the app then remains broken across restarts. Filed 12:18Z. This is the third Windows-desktop stability report of the day after #19345 (sidebar threads disappearing) and #19271 (bundled `node.exe` access denied). The Windows desktop surface is now competing with the IDE extension for "worst-regressed surface this week."
- **[openai/codex#19356]** — The model permission UI shows "Full Access" but the runtime remains restricted with no escalation path. Filed 12:21Z.
- **[openai/codex#19349]** — `/approvals` "Full Access" does not actually take effect. Filed 12:22Z.
- **[openai/codex#19359]** — After an organization revokes the signed-in account, codex does not respond and burns CPU on next launch. Filed 12:51Z. **The "revoked account → high-CPU spinner" failure mode** has now been reported in two different shapes this week (this one and #19271's "Access is denied" loop on bundled `node.exe`); the common thread is "the auth/identity layer fails closed in a way that the supervisor loop interprets as 'retry forever'." This is the seed of W17 synthesis #12 from a different angle than the retry-backoff PRs above.
- **[openai/codex#19354]** (merged 12:33Z) — `chore: alias max_concurrent_threads_per_session`. Quiet but operationally relevant: a config-key alias landed without a deprecation cycle, which means tooling that introspects the schema will now see two keys for the same setting until the underlying field is renamed in a future release. Synthesis #10 (config-file-as-program) corollary: aliases are themselves a small program written in the schema.

The "Full Access" pair (#19356 + #19349) is a clean instance of the new W17 synthesis #11 pattern: the *enforcement* layer is correct (it correctly rejects), but the *presentation* layer reports a different state (it shows "Full Access"). The user has no way to reconcile the two without reading source.

### LiteLLM: the auth/ACL surface widens — three new bugs in one hour

The Bedrock passthrough ACL fix (#26416) sharpened the maintainers' attention, and the result is visible:

- **[BerriAI/litellm#26420]** (issue) / **[BerriAI/litellm#26421]** (PR, opened 12:17Z) — `GET /v1/models` ignores `user.models` restriction. A user whose key is restricted to three models still sees the full proxy catalog when they list models. The PR is a one-line filter at the list-handler boundary. This is **the same pattern as #26416 (passthrough)**: the ACL is enforced at the chat-completion path, but every adjacent path (list, passthrough, health) was written before the ACL existed and never picked it up. Synthesis #11 directly.
- **[BerriAI/litellm#26424]** (issue) / **[BerriAI/litellm#26425]** (PR, opened 12:49Z) — `auth_exception_handler` logs 401/403 permission denials at ERROR with full traceback. This is operationally severe at scale (one bad client floods Sentry/Datadog with stack traces for normal denials) and is itself a sign of **the auth surface having been retrofitted into a codebase whose error-classification convention predates "auth as a normal control-flow event"**. The fix is correct (downgrade to WARNING, drop the traceback) but does not address the structural issue that authentication failures have been treated as exceptional rather than expected for the entire history of the proxy.
- **[BerriAI/litellm#26418]** (PR, opened 12:42Z) — single-team DB fallback when JWT has no `team_id`. Another auth-edge-case that the original auth design did not anticipate. This is a third instance of "auth was retrofitted, so the edge cases are being patched one at a time."
- **[BerriAI/litellm#26423]** (issue) — `vertex_ai/anthropic` strips the `output_config` body field, disabling task budgets on Vertex. Provider-shape leakage (synthesis #7) instance, not auth.
- **[BerriAI/litellm#26419]** (PR) — UI dropdown missing `zai` provider. Cosmetic but worth noting because the dropdown source-of-truth has now drifted from the router's actual provider list for the third time this week.

### crush: retry-discipline merges land

**[charmbracelet/crush#2498]** (`fix(lsp): replace sticky unavailable cache with retry backoff`, merged 12:38Z) and **[charmbracelet/crush#2700]** (`fix(agent): implement OnRetry logging with structured retry fields`, merged 12:40Z) — both retry-discipline fixes — landed within two minutes of each other. #2498's pattern is the more interesting one: the original code cached "this LSP is unavailable" indefinitely once the first probe failed, so a transient startup delay would permanently disable language-server features for the session. The fix replaces the sticky cache with exponential backoff. Synthesis #12 fodder.

**[charmbracelet/crush#2698]** was closed without merge (test-only PR for hyper provider env behavior); the maintainer's note says the test was asserting the *current* (buggy) behavior rather than the intended one — a small instance of synthesis #9 (test-deletion-as-admission), this time as test-rejection-as-admission.

### What changed in the narrative since the 12:07Z addendum

1. **The DeepSeek `reasoning_content` cluster is fully closed in opencode** — eight issues retired, three PRs merged. Synthesis #5 prediction confirmed.
2. **A new auth/ACL pattern is now visible across LiteLLM and codex**: enforcement is correct, but adjacent surfaces (list, presentation, passthrough) were written before the ACL existed and silently leak. Promoted to W17 synthesis #11.
3. **Retry/backoff is being retrofitted in three agents simultaneously**: opencode #24162, crush #2498, crush #2700 — all within ~25 minutes, all bug-fix-shaped rather than designed-in. Promoted to W17 synthesis #12.
4. **Windows-desktop codex stability is now competing with the IDE extension for worst-regressed surface** (#19345, #19355, #19271).
5. **The `alpha.2` cut shipped a config-key alias without deprecation** (#19354) — synthesis #10 corollary, worth tracking next refresh to see whether the schema introspection tooling notices.

Next refresh after the next dispatcher tick.

---

## 14:00Z addendum — 67-minute sweep (12:53Z to 14:00Z)

A wider window than the prior two, but the activity is heavily skewed to one repo: **codex filed eleven new issues in this 67-minute span, six of which are direct regressions against the VS Code extension**. The extension surface, already flagged this morning as a regression hotspot, is now the dominant signal of the day. Two structural patterns also clarified: a project-state-recovery cluster on codex (W17 synthesis #13 seed) and a provider-catalog-drift cluster spanning all four repos (W17 synthesis #14 seed).

### codex: VS Code extension is the runaway worst surface of the day

Six of the eleven new issues filed in this window land on the extension, and they are not duplicates — they hit different subsystems:

- **[openai/codex#19371]** — "VS Code extension repeatedly logs telemetry 403 errors for `/ces/v1/rgstr` and prompt is lagging." The 403 retry loop is itself the cause of the prompt lag; the extension treats a permanent telemetry-auth failure as transient and burns local request budget retrying it. Direct instance of W17 synthesis #12 (retry-as-afterthought: failure-class taxonomy missing).
- **[openai/codex#19369]** — "VS Code extension does not reliably enforce delegated global `AGENTS.md` directives." The extension reads the global directive file but applies its rules only on cold session start, not on re-attach; sessions resumed from a prior tab silently drop the directives.
- **[openai/codex#19366]** — "VS Code extension repeatedly fetches connector logos, causing 'Server overloaded; retry later' errors." The connector logo fetcher has no caching layer; every panel render re-fetches every connector's logo, and the upstream ratelimits the extension off the network.
- **[openai/codex#19361]** — "Severe Performance Degradation and Excessive Token Consumption in Codex 5.5 (VS Code Extension)." Names a specific token-burn pattern: the extension re-uploads conversation history on each turn rather than using cache references, doubling token spend on long sessions.
- **[openai/codex#19365]** — "Windows Codex App: Browser Use unavailable because Node REPL tool is not exposed." Windows-specific surface; pairs with #19368 ("Can not use Browser Use on Windows + wsl due to lack of REPL js tool"). The two together mean Browser Use is broken on every Windows-side surface this week.
- **[openai/codex#19367]** — "Codex App: allow custom per-project icons in the sidebar and active project header." Feature request, but filed as a direct response to a regression in 0.124 that removed implicit per-project iconography. Pairs with opencode #24167 below — the same morning, two different IDE-adjacent products got user complaints about losing per-project visual identity.

The standout combined signal: between #19371 (telemetry 403 retry storm), #19366 (connector logo retry storm), and #19361 (token re-upload), **the VS Code extension is wasting both upstream quota and user tokens through three independent failure modes simultaneously**. None of the three are model-side bugs; all three are extension-resource-discipline bugs. If a single extension release this week consolidated those three fixes, it would dominate the 0.125-stable changelog.

Two further codex issues in the window are project-state-recovery shaped:

- **[openai/codex#19362]** — "Archived local sessions hidden and fail to resume after switching auth/provider." The archive view filters by current auth+provider tuple silently; switching providers makes prior archives invisible without warning, and the resume action 404s without explanation. State exists, presentation hides it, and the user has no signal that the data is still on disk.
- **[openai/codex#19363]** — "MCP servers disappear from session when using a custom provider." The custom-provider code path skips the MCP-server-merge step that the bundled-provider path runs. Servers are configured, the schema validates, and they silently vanish from the session.

Both #19362 and #19363 are instances of **state-survives-but-presentation-hides-it**, which is the seed for W17 synthesis #13 below. Compounding with #19345 (Windows desktop sidebar threads disappearing after restart) and #19370 ("GPT-5.5 not usable in Codex App for remote projects (works in CLI)"), there is a four-issue cluster against codex this week where session/project/provider state survives the underlying boundary change but the presentation layer fails to surface it.

### opencode: GPT-5.5 context-limit drift, plus a PR retrofitting tool_calls survival

- **[anomalyco/opencode#24171]** — "GPT-5.5 Codex context limit dropped to 400k but uses API context limit (1M) causing 'exceeds the context window of this model' errors." Filed 13:59Z. The opencode model registry hard-codes the published 1M context but the actual per-route limit is 400K; users hit the failure mode at any prompt over 400K tokens. Same shape as the codex-side 258K cap reported earlier today (#19339, #19319) — a per-route cap masquerading as the model's published cap. Cross-repo provenance: this is a **registry/published-spec drift**, the kind that synthesis #14 (provider-catalog drift) crystallizes.
- **[anomalyco/opencode#24170]** — `fix: #24090 preserve assistant tool_calls in openai-compatible replay`. PR opened 13:58Z. The bug being fixed (#24090) is that on session replay, assistant `tool_calls` arrays are dropped before being re-sent to the provider, so the provider sees an inconsistent transcript and 400s. This is the same class as the now-merged #24146 (preserve `reasoning_content`): a normalizer dropping a field the provider treats as required. Two preserve-the-field-end-to-end fixes in 24h, against the same normalizer module.
- **[anomalyco/opencode#24167]** — "OpenCode Desktop 1.14.22 ignores `project.icon_url_override` after webview refresh." Pairs with codex #19367 (per-project icons missing) — two different IDE surfaces, same morning, both filed against per-project visual identity regressions.
- **[anomalyco/opencode#24165]** — "Theme forced to dark again: double color normalization bug reintroduced by reinstate commit." Filed 13:11Z, **closed at 13:11Z** (within 8 minutes) after the maintainer identified the offending commit and reverted. Note the regression-of-a-fix pattern: the original fix was reverted because of a different complaint, and the revert reintroduced this bug. This is the third theme-system regression-of-revert-of-fix this month and the second this week. Worth watching as a synthesis #15 candidate next week.
- **[anomalyco/opencode#24166]** — Chinese-language complaint that opencode is "getting worse with each update" — large projects freeze in 1.4.x+. Aggregate-perception signal; no specific repro yet but worth flagging because the aggregate-quality complaint rate has been climbing through W17.
- **[anomalyco/opencode#24164]** — `feat(tui): expose a keybind field for the "Toggle MCPs" command (mcp.list)`. Small feature ask; included because the MCP UI surface continues to accumulate small affordance gaps.

Three older opencode issues also re-surfaced with new comments in this window:

- **[anomalyco/opencode#14593]** — "Critical Bug: Kimi K2.5 bypasses 'ask' permission for shell commands and commits autonomously." Re-opened activity 13:04Z; new repro confirms the bug still triggers on v1.14.22. **This is a permission-enforcement bug that has been latent for over six weeks** — the permission UI shows "ask," the runtime executes anyway. Same shape as codex #19349 (`/approvals` "Full Access" doesn't take effect) and #19356 (UI shows Full Access, runtime restricted). Three different agents, same pattern: the permission presentation layer and the permission enforcement layer disagree, and the user has no way to detect the disagreement without reading source. This goes directly into synthesis #11's pattern but for a *different* surface (permission system vs. ACL); see synthesis #13 for the broader generalization.
- **[anomalyco/opencode#7292]** — "Plan mode is editing my files (gemini 3 pro)." New comment 13:23Z confirming the bug still happens on 1.14.22. Plan mode is *advertised* as read-only; gemini-3-pro's tool-call schema allows write operations through, and opencode's plan-mode guard does not block them at the tool-dispatch boundary. Same root cause as #14593: the permission/mode UI describes one contract, the runtime enforces a different one.
- **[anomalyco/opencode#16491]** — "Subagents spawned via Task tool cannot execute MCP tools despite appearing in tool registry." New comment 13:17Z. The MCP tools are registered, presented in the registry, but the dispatch path for subagent calls bypasses the MCP router. Another instance of "registered, presented, not actually executable."

### LiteLLM: zero-length-message bug; auth fix PRs cluster widening

- **[BerriAI/litellm#26428]** — "Message role is omitted for zero-length messages (cases of immediate EOS)." Filed 13:58Z. When a streaming response yields an immediate end-of-stream with no tokens, LiteLLM's normalizer drops the `role` field from the assistant message stub, and the next-turn provider call rejects the transcript. Same field-dropping shape as opencode #24170 / #24146 — a normalizer treating an edge case as "no data, drop the message" when it should be "minimal data, preserve the envelope." Cross-repo pattern: see synthesis #14.
- **[BerriAI/litellm#26427]** — `fix(model_management): refresh router after POST /model/update`. PR opened 13:25Z. The router caches the model list at boot; `POST /model/update` writes to the DB but does not invalidate the in-process cache, so the new model is invisible until restart. **This is the same pattern as codex #19363 (MCP servers disappear when using custom provider)**: the runtime registry diverges from the configured registry across a refresh boundary.
- **[BerriAI/litellm#26426]** — `fix(vertex_ai/anthropic): stop stripping output_config — restores Claude 4.7 task_budget on Vertex`. PR opened 13:22Z. Direct fix for the issue I noted at 12:53Z (#26423). Turnaround from issue to fix-PR: 33 minutes.
- **[BerriAI/litellm#26425]**, **[BerriAI/litellm#26421]**, **[BerriAI/litellm#26416]** — all three previously-flagged auth/ACL fix PRs picked up additional review activity in this window. #26416 in particular got a second reviewer comment asking whether the same gap exists in the Anthropic and Vertex passthrough handlers; the answer (per the reviewer) is yes, and the PR scope is now expected to widen.
- **[BerriAI/litellm#19633]** (re-opened activity) — "`use_in_pass_through` does not apply per model, but by project + location (vertex_ai)." Older issue re-surfaced 13:03Z with a new comment. Same shape as #26416 — passthrough routes were written before the per-model knobs existed, and several knobs silently no-op when the request hits passthrough. This is a third instance feeding synthesis #11 but it was filed weeks ago; the cluster of fixes filed today is finally putting the architectural gap in the maintainers' field of view.

### crush: super-yollo PR and a PreToolUse hook revival

- **[charmbracelet/crush#2702]** — `feat: super yollo`. Opened 13:58Z. Auto-approve-everything mode, deliberately named to telegraph the danger. Notable because this is being added to the *same product* whose maintainers are simultaneously merging permission-discipline fixes (#2498, #2700 in the prior window). The two threads are not contradictory but they highlight the underlying tension: agents accumulate both safety and convenience features, and the convenience features grow faster.
- **[charmbracelet/crush#2598]** — `feat: PreToolUse hook`. Activity 13:47Z; design discussion with the maintainer about whether the hook should fire for sub-agent tool calls or only top-level. Same boundary question as opencode #16491 (MCP tools bypassed in subagent dispatch) — the sub-agent dispatch boundary is under-specified across the ecosystem.
- **[charmbracelet/crush#2692]** (merged 13:23Z) — `chore(styles): overhaul style definitions`. Quiet, but it is the kind of large stylistic refactor that becomes a change-set landing under a feature freeze. Worth watching the next nightly cut for regressions.

### What changed in the narrative since the 12:53Z addendum

1. **VS Code extension is now the dominant codex regression surface** — six new extension issues filed in 67 minutes (#19361, #19366, #19369, #19371, #19365, #19367). Three of those are independent retry-storm / re-fetch patterns burning user tokens or upstream quota.
2. **Project-state-recovery is a codex-wide cluster** — #19362, #19363, #19345, #19370. State survives the boundary change but the presentation hides it. Promoted to W17 synthesis #13 (state/presentation divergence).
3. **Provider-catalog drift now spans all four repos** — opencode #24171 (model context cap drift), litellm #26427 (router-cache vs DB), codex #19363 (MCP servers vanish on custom provider), and the older #19339 / #19319. Promoted to W17 synthesis #14 (registry/runtime drift).
4. **Permission-presentation vs permission-enforcement divergence** has matured into a same-day, three-product cluster (opencode #14593, #7292; codex #19349, #19356). Reinforces synthesis #11; will be re-cited from synthesis #13 from a presentation-state angle.
5. **The opencode normalizer module continues to accumulate "preserve the field" fixes** — #24146 (reasoning_content) merged in the prior window, #24170 (tool_calls) opened in this one, and litellm #26428 is the same shape one repo over. Synthesis #14 corollary.
6. **An aggregate-quality complaint** (opencode #24166) has appeared. First of its shape this week; track to see whether it remains a one-off or becomes a perception trend.

Next refresh after the next dispatcher tick.

---

## 14:46Z addendum — 17-minute sweep (14:29Z to 14:46Z)

A short window but unusually structured: the LiteLLM repo filed **four "merge main" PRs in a 14-minute span** ([BerriAI/litellm#26430, #26431, #26432, #26433], all opened between 14:29Z and 14:42Z, all merged within 11 seconds of opening), and a fresh DeepSeek thinking-mode report on opencode ([anomalyco/opencode#24175], filed 14:41Z, **closed within 5 minutes** as a duplicate of the cluster retired earlier today) confirms the cluster-closure from the 12:53Z addendum. Two structural notes that promote into this week's synthesis #15 and #16 below.

### LiteLLM: a four-PR "merge main" pulse

The four `merge main` PRs (#26430 / #26431 / #26432 / #26433) are not noise. They are LiteLLM's `litellm_internal_staging` branch repeatedly absorbing `main` in micro-batches, each round merged in under 12 seconds — i.e., **the staging branch is being kept synchronized with main on a sub-minute cadence by automation rather than by a human merge discipline**. Combined with the earlier-day nightly cadence break (the 6-hour pulse the W17 weekly flagged is now broken back to daily), this is a sign that the LiteLLM release-engineering surface is being actively reshaped this week. A proxy whose staging branch needs four sync rounds inside 14 minutes is not absorbing upstream changes cleanly; either the merge-base is far behind, or there is a pre-merge hook that is rewriting commits on the way in. Either case is structural. See W17 synthesis #15 below for the cross-repo angle on what "merge-main-as-PR" tells us about proxy hygiene.

### opencode: DeepSeek cluster confirmed retired

[anomalyco/opencode#24175] ("Bug: thinking mode not working with DeepSeek v4 model"), filed 14:41Z, was closed at 14:46Z by a maintainer pointing the reporter at the 12:42Z merge of #24146 and asking them to update to `1.14.23+`. Five-minute triage-and-close turnaround, with no debate. This is the second consecutive report after #24146 merged that landed on a stale build and was retired without code changes — strong signal that the cluster is genuinely fixed and that the remaining noise is people on the prior nightly. If a third stale-build report lands today, the maintainers may want to bump the version-mismatch warning surface in the TUI; absent that, treat the cluster as fully resolved.

### opencode: interleaved-field fallback PR merged

[anomalyco/opencode#24172] (`fix: use existingModel as fallback for interleaved field`) was opened 14:26Z and merged at 14:41Z — 15-minute turnaround. The interleaved field is the opencode-side flag that tells the provider transformer "this model interleaves reasoning and content tokens"; before this fix, the field defaulted to `false` when the model registry lookup missed (e.g., for newly-added models the agent has not yet seen), which silently disabled interleaved rendering for any model not in the static catalog. The fix falls back to the `existingModel` value when the registry lookup misses, so reasoning-bearing models keep working through registry drift. Cross-references synthesis #14: this is the *fix* shape for one specific instance of registry drift, and notably it is a defensive fallback (use the prior known-good value) rather than an architectural fix (make the registry authoritative).

### opencode: background subagent and compaction churn

- [anomalyco/opencode#24174] (`feat(core): add background subagent support`) opened 14:39Z. Adds the ability to spawn subagents that continue running after the parent turn completes. Notable structural risk: the subagent dispatch boundary is already under-specified across the ecosystem (see the 14:00Z addendum's note on opencode #16491 and crush #2598's PreToolUse hook scope debate). Adding a *background* lifecycle on top of a dispatch boundary that already has known correctness gaps will surface those gaps faster.
- [anomalyco/opencode#24127] (`fix: enable compaction prune by default`) was *closed without merge* at 14:44Z after sitting open since 08:41Z. The closing comment notes that pruning compacted history by default broke session-replay for users who had paused mid-session and resumed days later. Same boundary as #24170 (preserve `tool_calls` on replay): the replay path is sensitive to anything that drops history fields, and a "default-on prune" setting silently violates that contract. Synthesis #14 corollary: defaults are spec, and changing a default is a contract change.

### codex: Windows-desktop and approvals issues continue to mount

- [openai/codex#19381] — "Codex v26.422 on Windows: project chat history disappeared and RAM climbs above 10 GB." Filed 14:39Z. **Fourth Windows-desktop report of the day**, and this one combines the state-loss pattern (history disappears) with a memory leak (RAM climbs above 10GB). Pairs with #19345, #19355, #19271. The Windows desktop has now logged four distinct stability-affecting reports in 24h and is competitive with the VS Code extension as the day's worst-regressed surface.
- [openai/codex#19379] — "Trusted access enabled but Codex still shows high-risk cyber slowdown banner." Filed 14:29Z. Direct instance of synthesis #11 (presentation/enforcement divergence): the trusted-access toggle is on, but the warning banner still renders. The user has no way to tell whether the runtime saw their toggle.
- [openai/codex#19256] — "/permissions changes do not propagate to the active session in `codex-cli 0.124.0`." Re-surfaced 14:43Z with a new repro confirming the bug in `0.125.0-alpha.2`. The user changes permissions via `/permissions`; the CLI accepts the change and writes it to disk; the active session continues to enforce the *prior* permissions until restart. This is the seed for W17 synthesis #16 below.
- [openai/codex#19196] — "'Full Access' permissions broken — network calls are still sandboxed." Updated 14:33Z. Pairs with #19349 and #19256. **Three permission-mutation issues against the same codex build, all with the same shape**: the mutation is accepted, no error is shown, and the live session keeps enforcing the old policy.
- [openai/codex#19185] — "config.toml context window settings are not respected." Updated 14:38Z. Same shape from a different angle: the user writes a config setting, the schema validates it, the runtime ignores it.

### crush: image-pruning PR re-surfaces

[charmbracelet/crush#2613] (`fix(agent): prune excess images from history to prevent session deadlock`) — comment activity 14:36Z. The PR has been open since 13 April; the comment is a maintainer asking for a configurable threshold rather than a hard-coded one. Same boundary as opencode's #24127 closure: pruning history to prevent a downstream failure must be opt-in or it silently breaks replay. Two repos this week have hit the same boundary.

### Net narrative change since 14:00Z

1. **The DeepSeek cluster is staying closed** — second stale-build report in a row triaged-and-closed in 5 minutes.
2. **LiteLLM staging branch is being sync-merged to main on a sub-minute cadence** — four `merge main` PRs in 14 minutes. New synthesis #15.
3. **codex permission-mutation propagation is broken across `/permissions`, `config.toml`, and `/approvals`** — three issues, same agent, same shape. New synthesis #16.
4. **Windows-desktop codex now has four distinct stability reports in 24h**; matches the VS Code extension as the worst-regressed surface of the day.
5. **opencode's `compaction prune` default-on PR was closed** because changing a default broke session-replay — synthesis #14 corollary about defaults-as-spec.

Next refresh after the next dispatcher tick.

## 15:28Z addendum — 42-minute sweep (14:46Z to 15:28Z)

A high-density window: codex took **six new issues** (#19381, #19382, #19383, #19384, #19385, #19386) in 42 minutes, the litellm staging branch absorbed two more `merge main` rounds (#26433, #26437), one large litellm feature PR landed (#25346), and a fresh CVE-driven dependency bump showed up (#26435). Two of the codex issues — #19384 and #19386 — surface a new product-shape concern: **default behavior of a marketed-as-flagship configuration silently underperforms a non-flagship sibling**. That is the seed for synthesis #17 below. The dependency-bump and the WebSocket-fallback regression seed synthesis #18.

### codex: six issues in 42 minutes, two of them structural

- [openai/codex#19381] — "v26.422 on Windows: project chat history disappeared and RAM climbs above 10 GB." Updated 15:12Z with a second reporter confirming. **Fifth Windows-desktop report of the day.** Pairs with #19345, #19355, #19271, #19330.
- [openai/codex#19382] — "OpenAI-curated plugin manifests are repeatedly validated during normal turn/subagent setup." Filed 14:47Z. Cites #17638 as having already fixed one curated-marketplace loading path; this is a *second* path with the same shape that the original fix did not cover. Synthesis #14 corollary (registry drift): the warning string is unique enough that the reporter found the prior fix, but the live runtime is hitting a different code path that re-loads the catalog. **A landed fix that does not generalize is worse than no fix**, because the next reporter assumes the issue is resolved and doesn't file.
- [openai/codex#19383] — "Allow Codex hooks to run silently without rendering completed hook entries." Filed 14:52Z. Hook lifecycle entries are rendered for every successful no-output hook invocation, cluttering the conversation. The user's workaround is to disable hooks entirely, which removes the safety guardrails. **A default that forces users to choose between safety and signal-to-noise is a default that will be turned off.**
- [openai/codex#19384] — "full access permissions lower than auto-review." Filed 14:56Z. The user reports that `auto-review` mode with escalation works for system commands that `Full Access` mode silently fails on. This is the **inverse of the synthesis #11 / #16 cluster**: there, the user toggled to a more-permissive mode and the runtime stayed restricted; here, the user toggled to the *most* permissive mode and the runtime is *more* restricted than the second-most permissive mode. Same shape, opposite direction. Seeds synthesis #17.
- [openai/codex#19385] — "Support additionalContext in PreToolUse hooks or clarify Claude-style hook parity." Filed 15:26Z. The user expected codex's PreToolUse hooks to behave like the parallel ecosystem's; they don't, and the divergence is undocumented. Schema-without-version-rev pattern (synthesis #14 family).
- [openai/codex#19386] — "GPT-5.5 Codex session hits unrecoverable compaction failure around ~220k tokens despite advertised 400k context." Filed 15:26Z. The user reports that the model marketed as the recommended Codex model (with a 400k advertised window) does not support the `/responses/compact` native compaction path, so every long-running session becomes non-recoverable around 220k. The advertised default and the actual default diverge by ~45%. Pairs with #19009 (compact fails in CLI and the editor extension) and #19329 ("Automatic Compact Recurring Error"). Strong instance of synthesis #17.

### litellm: another `merge main` pulse plus a CVE bump and a large feature merge

- [BerriAI/litellm#26433] — "merge main." Opened 14:42Z, merged 14:43Z (9-second turnaround). Sixth `merge main` PR of the day from the same author.
- [BerriAI/litellm#26437] — "merge main." Opened 15:23Z, merged 15:23Z (9-second turnaround). Seventh `merge main` PR. The cadence has *not* slowed since the previous addendum named it; if anything the pace has stabilized at roughly one round every 30 minutes.
- [BerriAI/litellm#26435] — "fix: bump python-dotenv to 1.2.2 to fix CVE-2026-28684." Opened 15:19Z. A real security PR, filed by an external contributor, against the same release surface that just absorbed seven `merge main` rounds. The signal-to-noise ratio of the litellm PR queue this afternoon is unusually low, which makes it easier for a CVE bump like this to get lost in the wash.
- [BerriAI/litellm#26434] — "Fix/shared health check polling." Opened 15:01Z. Polling consolidation — multiple consumers of a health-check signal each polled independently; the PR consolidates them. Same shape as the in-process router cache problem named in synthesis #16: independent consumers each hold their own copy of state.
- [BerriAI/litellm#25346] — "feat(responses): add `use_chat_completions_api` flag for openai/ models with custom api_base." **Merged 15:25Z** after 16 days open. Adds a per-model boolean that *forces* the `/responses` → `/chat/completions` bridge even for providers with native Responses API support. The motivation is real (llama.cpp, vLLM, and other OpenAI-compatible servers don't speak Responses), but the surface is now: **the same provider name (`openai/`) can mean two different protocols depending on a flag**. Synthesis #17 territory: a feature flag that becomes load-bearing for a *protocol* selection.
- [BerriAI/litellm#26436] — "Bug: `/v1/messages/count_tokens` returns incorrect token count — `tools` field ignored on Bedrock provider." Opened 15:20Z. Token-count drift between providers; relevant to anyone using the proxy as a unified counter for cross-provider routing decisions.

### codex: long-tail issues re-surfacing on `0.124.0`

- [openai/codex#15568] (Windows: thread closes when PowerShell integrated terminal exits) — re-confirmed at 15:25Z by a fresh reporter on `0.124.0`. **Open since March 23.** This is now a one-month-old Windows-desktop bug that has survived three minor-version releases.
- [openai/codex#8648] ("Codex replies to earlier messages instead of latest one in conversations") — re-confirmed at 15:15Z, originally filed 2026-01-01. **Open since January 1.** A four-month-old correctness regression in the most basic conversational invariant — the reply targets the most recent message — has continued to receive periodic confirming reports.
- [openai/codex#17478] (`Enable hooks on Windows`) was *closed* at 15:26Z. Hooks are now enabled on Windows; pairs with #19383's request for hooks to render silently. The platform now has the surface; the next phase is making it usable.

### codex: merged PR

[openai/codex#18392] — "Fix hang on turn/interrupt." **Merged 14:47Z** after a week open. Fixes a hang where pressing Ctrl-C on certain turn states would leave the CLI in a half-interrupted state requiring a hard kill. A real fix to a real bug, but worth noting that the same surface (the interrupt/turn boundary) has shipped at least three fixes in the last two weeks; **the interrupt path is stable in the same way that the permission path is stable** — it is repeatedly almost correct.

### crush: image-pruning PR continues to argue with itself

[charmbracelet/crush#2613] — comment at 15:21Z. The maintainer has now proposed a `[agent].image_history_limit` config knob with a default of `3`. The reporter pushed back: a default of `3` will silently discard the fourth image without telling the user, which reproduces the original session-deadlock from the *opposite* direction (now you don't deadlock, but you also don't see your image). This is now the second day this PR has been on the same thread. Seeds synthesis #17 (defaults as load-bearing): the *value* of the default is not separable from the user's expectations; pick `3` and image-heavy users break, pick `30` and the deadlock returns.

### Net narrative change since 14:46Z

1. **codex absorbed six new issues in 42 minutes**, two of which (#19384 inverted-permission, #19386 advertised-vs-actual context) are structural rather than tactical.
2. **The litellm `merge main` cadence has stabilized at ~one per 30 minutes** rather than slowing — the staging-branch sync is now sustained, not bursty.
3. **A real security PR (litellm #26435, CVE-2026-28684) landed in the middle of the `merge main` flood**, raising the question of whether the queue's signal-to-noise is making real fixes harder to triage.
4. **litellm #25346 merged with 16 days of open age**, adding a per-model flag that toggles the *protocol* used for that model. A flag that changes a protocol is not the same shape as a flag that changes a parameter.
5. **Long-tail codex bugs re-confirmed**: #15568 (one month old, Windows), #8648 (four months old, reply-target). Neither has had a fix attempt in a week.
6. **codex hooks just landed on Windows (#17478)** and immediately got a UX request (#19383) to make them quieter. The platform pattern is consistent: hook capability lands, then the quality-of-life polish takes another release cycle.

Next refresh after the next dispatcher tick.

---

# Daily addendum — 2026-04-24 (refresh @ 16:09Z)

**Window since last addendum:** 2026-04-24T15:28Z → 2026-04-24T16:09Z (≈41m)

This refresh covers the ~40 minutes after the 15:28Z snapshot. The signal is concentrated in two places: a five-PR codex burst that *all* touch the permissions/profile surface, and a litellm afternoon cluster that mixes multi-PR provider fixes with the still-running `merge main` cadence.

### codex: a five-PR permissions/profile refactor lands as a single train

Five PRs opened within the same minute (16:05Z) by the same author against the same surface, in dependency order:

- [openai/codex#19391] — "permissions: make runtime config profile-backed."
- [openai/codex#19392] — "permissions: derive compatibility policies from profiles."
- [openai/codex#19393] — "permissions: migrate approval and sandbox consumers to profiles."
- [openai/codex#19394] — "permissions: remove core legacy policy round trips."
- [openai/codex#19395] — "permissions: finish profile-backed app surfaces."

This is the structural answer to a week's worth of issues against this surface: #19256 (`/permissions` changes do not propagate to active session, just closed at 15:48Z), #19384 ("full access permissions lower than auto-review", filed 14:56Z), and the long tail back through #19362/#19363 (state-survives-presentation cluster). The shape of the train is significant: rather than land one mega-PR, the author has split the migration into five reviewable hops. That is the exact opposite shape of the litellm `merge main` cadence — staged, dependency-ordered, named — and it suggests codex now treats the permissions surface as load-bearing enough to deserve a refactor train rather than another point fix. Worth tracking how many of the five actually merge in order; refactor trains routinely lose their last car when the head merges and the tail conflicts with mainline.

- [openai/codex#19389] — "Guard npm update prompt on registry readiness." Opened 15:53Z. The npm update prompt currently fires before the registry has confirmed the user's installed version is even visible to the npm side, leading to spurious "update available" prompts on freshly-installed CLIs. Pairs with #19335 (the AMFI-killed `0.125.0-alpha.1` from the morning): that release is *npm-visible* but un-launchable, so any user prompted to "update" to it would be downgraded to a broken state. The guard PR is filed 18 hours after #19335 was closed; the connection is implicit.

- [openai/codex#19380] — "drop MCP Plugins and App from Morpheus." **Merged 15:57Z.** Removes the MCP Plugins and App surfaces from the internal `Morpheus` test harness. Read alongside #19372 ("Codex auto-mirrors [parallel-ecosystem] marketplaces, breaking MCP handshake for [parallel-ecosystem]-only plugins", filed earlier today): the runtime is being narrowed at the test boundary while the *behavior* boundary (auto-mirroring) is still ambient. The harness shrinking ahead of the runtime shrinking is a familiar shape — it is the inverse of the W17 "test-deletion-as-admission" pattern from synthesis #9, where deletion from tests *follows* a runtime decision. Here it precedes it.

- [openai/codex#18900] — "Migrate fork and resume reads to thread store." Updated 16:07Z. Long-running PR (open ~10 days) finally moving fork/resume off the per-session in-memory state and onto the thread store. This is the structural prerequisite for fixing #19362 (archived sessions hidden after auth/provider switch) and #19363 (MCP servers disappear from session when using a custom provider) without another ad-hoc patch. Pairs with #18446 ("Reserve missing preserved paths in Linux sandbox policy," updated 15:53Z) which is the sandbox-side equivalent — moving from a per-session denylist to a documented preserved-paths set.

- New issues filed in-window: [openai/codex#19387] ("The summarized message shows only the diff tool view and end turns," 15:45Z), [openai/codex#19388] ("add option in the cli to add the current project to codex app and continue in the app," updated 16:07Z), [openai/codex#19390] ("compact error," 16:04Z — *another* compaction failure, same shape as #19386), and [openai/codex#19396] ("macOS Codex app updater times out waiting for Sparkle progress helper," 16:07Z). The Sparkle-helper timeout is filed within ~30 minutes of #19389's npm-update-prompt guard; both are *update-pipeline* bugs on different distribution channels (npm vs Sparkle), filed in the same window. Seeds synthesis #19 below.

### litellm: provider-fix cluster, an auth-scope fix, and the `merge main` cadence

- [BerriAI/litellm#26439] — "fix(adapters,vertex): pass output_config through to backends that accept it (closes #23380, supersedes #23475/#23396/#23706/#22727)." Opened 16:07Z. **Supersedes four prior PRs** for the same bug — the parenthetical names the chain. This is the cleanest expression of the "patch-PR graveyard" pattern: a single output-config field on the Vertex adapter has now generated five PR attempts over the open-issue lifetime of #23380. Either the surface is genuinely hard, or each prior attempt was reviewed in isolation without the reviewer realizing they had seen the same fix three times before. Either way, #26439 is the fifth attempt and the issue is still open.

- [BerriAI/litellm#26438] — "fix(jwt-auth): apply team TPM/RPM to proxy_admin users acting on behalf of a team." Opened 15:50Z. The proxy currently allows a `proxy_admin` to bypass team-level rate limits when impersonating a team member; the PR closes that by applying the team's TPM/RPM regardless of admin role. **A real authorization-scope fix.** Worth flagging because admin-bypass-when-impersonating is exactly the shape of bug that ships unnoticed when the test harness covers admin-acting-as-admin and member-acting-as-member but not admin-acting-as-member.

- [BerriAI/litellm#26440] — "sync litellm_staging_03_22_2026 with litellm_internal_staging." Opened 16:07Z. **Yet another staging-sync PR**, this time from the older `03_22_2026` staging branch. Synthesis #15 named the `merge main` cadence; this PR is a sibling — a *staging-branch-to-staging-branch* sync that sits one level above the `merge main` cadence. The branching topology is now: `main` ↔ `litellm_internal_staging` ↔ `litellm_staging_03_22_2026`. Three branches that need pairwise reconciliation, one of which is named after a date that is a month old.

- [BerriAI/litellm#26430] / [BerriAI/litellm#26437] — both `merge main`, both merged 15:30Z. The cadence has *not* slowed (still ≈one round per 30 minutes through the entire afternoon). New count of `merge main` PRs against `litellm_internal_staging` for the day is at least nine.

- [BerriAI/litellm#26419] — "fix(ui): add missing 'zai' (Z.AI / Zhipu AI) provider to Add-Model dropdown." Updated 15:54Z. UI-side registration is missing for a provider whose backend integration already exists. Synthesis #11 corollary: the *presentation* layer (the dropdown) and the *enforcement* layer (the routing code) ship out of sync, with the user-visible result that a fully-supported provider appears unsupported.

- [BerriAI/litellm#26385] — "fix: remove duplicate `MAX_SIZE_PER_ITEM_IN_MEMORY_CACHE_IN_KB` definition." Updated 16:01Z. Two definitions of the same constant in the codebase, with different values. Quiet but representative: the constant is *used* by both the cache eviction path and the size-budget warning path, and they have been silently disagreeing about the threshold. Synthesis-#11 territory at the constant level.

- [BerriAI/litellm#26218] — "feat(proxy): add /v1/memory CRUD endpoints." Updated 16:08Z. Adds a memory-store surface to the proxy. The PR has been open since the morning; the comment thread today is debating whether memory state should live in the proxy at all (vs deferred to the model provider). A genuine new-surface decision, not a routing decision.

- [BerriAI/litellm#26202] — "[WIP] Litellm token verification query opt." Updated 16:01Z. Token-verification query optimization — every authenticated proxy request currently issues at least one DB lookup to verify the token; the WIP collapses common paths into a cached lookup. Same shape as #26434's polling-consolidation from earlier today.

- [BerriAI/litellm#26377] — "fix(team_endpoints): auto-add SSO team members to org on move (proxy admin only)." **Merged 15:36Z.** A real auth-flow fix for the SSO-managed team move case. Pairs with #26438 above as the second auth-surface PR of the afternoon.

### opencode (anomalyco fork): UI-state and ACP-event PRs cycle

- [anomalyco/opencode#23846] — "Use OpenTUI theme detection for initial TUI mode, again." **Merged 15:28Z.** The "again" in the title says it: this is a re-land of a prior fix that regressed. The theme-detection at TUI initialization has now shipped twice and regressed once. Synthesis #15 angle: a fix that has to be re-landed is a fix whose root cause was never named, only patched.
- [anomalyco/opencode#21801] — "fix(acp): forward subagent session events to ACP client." Updated 15:48Z. ACP (the agent-client protocol) currently does not forward events from subagents; a parent agent's ACP client sees the parent's events but not the subagent's. Same shape as the codex fork-and-resume thread-store migration above (#18900): per-agent in-memory event state that needs to move to a shared sink to survive subagent boundaries.
- [anomalyco/opencode#21056] — "fix: DB migrating on every run for non-latest channels." Updated 15:51Z. Older release-channel installs run the DB migration on every launch because the migration version-check uses a comparator that assumes the local channel matches `latest`. Version-skew bug at the schema-migration layer (relevant to synthesis #18 territory).
- [anomalyco/opencode#14468] — "feat(opencode): add LiteLLM provider with auto model discovery." Updated 15:55Z. Long-running cross-project PR — the OSS opencode fork adding a first-class LiteLLM provider — picked up review comments today. Cross-cutting because it relies on the litellm `Router` surface that is currently being touched by #26427 (cache-invalidation) and #26218 (memory CRUD).
- [anomalyco/opencode#12822] — "fix(env): proxy directly to process.env instead of snapshotting." Updated 16:01Z. The fix replaces an at-startup snapshot of `process.env` with a live proxy. This is the third "snapshot vs live" fix this week across the four projects (codex thread-store, litellm router cache, now opencode env). Strong seed for synthesis #19.
- New issues: [#24185] (web interface crash, 16:00Z), [#24184] (IDE/editor context persists after closing file, 15:40Z), [#13353] re-confirmed at 16:09Z (Grep tool returns "No files found" on ARM64 Linux — *open since the original W13 window*, now an evergreen).

### crush: an unusually quiet window

Only [charmbracelet/crush#2704] ("allow not truncating long command lines") in the window, filed 15:31Z. Not connected to the day's open clusters. The image-pruning PR (#2613) has not moved since the 15:21Z comment captured in the previous addendum.

### Net narrative change since 15:28Z

1. **codex shipped a five-PR permissions refactor train (#19391–#19395) at 16:05Z.** This is the structural answer to the week-long permissions-propagation cluster (#19256, #19384, #19362, #19363). Watch whether all five merge in dependency order.
2. **A second compaction failure (#19390) was filed inside the window**, ~30 minutes after #19386. The "advertised 400k, actual 220k" pattern is now a two-issue cluster on the same afternoon.
3. **codex update-pipeline bugs hit two different distribution channels in the same window**: #19389 (npm prompt) and #19396 (Sparkle helper). Update-channel divergence is now its own small cluster. Seeds synthesis #19.
4. **litellm #26439 is the fifth PR attempt at fixing #23380** (Vertex `output_config` propagation). A patch-PR graveyard pattern in plain sight.
5. **litellm has a real authorization-scope fix (#26438)** for proxy-admin TPM/RPM bypass — easy to lose in the `merge main` flood.
6. **A second staging branch (`litellm_staging_03_22_2026`) is being reconciled in #26440**, exposing a three-branch staging topology rather than the two-branch one named in synthesis #15.
7. **opencode (anomalyco) #23846 is a re-land of a previously-regressed fix** ("again"). #12822 is the third "snapshot vs live" fix of the week across the tracked projects.
8. **crush is quiet**; only one minor-UX issue filed.

Next refresh after the next dispatcher tick.

---

# Daily addendum — 2026-04-24 (refresh @ 17:08Z)

**Window since last addendum:** 2026-04-24T16:09Z → 2026-04-24T17:08Z (≈59m)

This refresh covers the hour after the 16:09Z snapshot. Two clusters dominate: a six-issue codex burst against `gpt-5.5` and the new auto-compaction path (#19386 → #19405), and a litellm afternoon run that adds a third auth-scope PR to the day's growing privilege-bypass cluster.

### codex: gpt-5.5 + auto-compaction is now a six-issue cluster in one hour

The 16:09Z snapshot already had #19386 ("GPT-5.5 Codex session hits unrecoverable compaction failure around ~220k tokens despite advertised 400k context") and #19390 ("compact error"). Five more arrived in this window:

- [openai/codex#19400] (16:40Z) — "Remote compaction fails when using `gpt-5.5` because `/responses/compact` does not appear to support the model." Names the exact failure mode that #19386 only describes operationally: the `/responses/compact` endpoint does not accept `gpt-5.5` as a target model, so the *remote* compaction path silently falls back (or fails) when the session model is `gpt-5.5`.
- [openai/codex#19401] (16:52Z) — "Auto context compaction keeps running indefinitely." The fallback path *does* engage but never terminates — the auto-compactor enters a loop, presumably because the convergence check itself depends on a token count that the failing path never updates. Direct sibling of #19400.
- [openai/codex#19397] (16:20Z) — "Long Codex threads fail to hydrate after reload when compacted replacement_history records are large (UI shows empty, logs show missing handler)." The *result* of #19400/#19401: even when compaction "succeeds" enough to write a replacement_history record, that record is now large enough to fail to hydrate on reload. The UI shows empty; the logs name a missing handler. So the compaction failure mode now spans (a) the endpoint not supporting the model, (b) the local fallback looping, and (c) the resulting record being unloadable.
- [openai/codex#19405] (17:08Z) — "Track exec JSON compaction-events fix in commit 942131e8c00d5648deebadd353a38c54a9b85286." A tracking issue opened against an already-landed commit, asking to confirm that the exec-JSON compaction event format change is reflected in downstream consumers. The cluster is now generating its own *meta-issue* for tracking related fixes.
- [openai/codex#19404] (17:08Z) — "Desktop app model picker does not show gpt-5.5 even when backend reports it available." A *presentation* bug for the same model that #19386/#19400/#19401 are crashing on at the *runtime* layer. The desktop app has the inverse problem: the backend says the model is available, the picker hides it. So the same model is simultaneously (a) crashing where it is exposed and (b) hidden where it would work.
- [openai/codex#19402] (17:08Z) — "chrome-devtools in Codex only exposes press_key, so typing text sucks." Adjacent capability-surface bug: the chrome-devtools tool surface in Codex exposes only `press_key`, no `type_text`. Not part of the gpt-5.5 cluster but it is the third "tool-surface advertised vs delivered" mismatch of the day.

In aggregate this is six issues in 59 minutes, all touching the same model rollout, all describing the same shape: *a capability is announced (400k context, model availability, exec event format, tool surface) and the runtime delivers something narrower than the announcement.* This is the seed for synthesis #21 below.

- [openai/codex#19377] — "feat: separate session_id and thread_id in Responses requests." Updated 16:24Z. Structural fix: the Responses API has been conflating session and thread identity, which is exactly the seam #19397 hydration failure runs through. Pairs with the #18900 thread-store migration noted at 16:09Z; both are moves away from "session is implicitly the thread" toward an explicit two-identity model. If this lands before #19400/#19401 are fixed, the compaction failures become much more diagnosable (because the trace can name *which* identity owned the failed record).
- [openai/codex#19350] — "fix alpha build." **Merged 16:36Z.** The fix for the AMFI-killed `0.125.0-alpha.1` from the morning. Closes the loop on yesterday's npm-update-prompt guard (#19389): the broken alpha is no longer broken, but the prompt-guard PR is still warranted because the *next* broken alpha will reproduce the issue.
- [openai/codex#19283] — "check PID of named pipe consumer." Updated 17:04Z. Long-running infrastructure PR getting fresh review. Adds a PID check on the named-pipe consumer side so that a stale pipe (consumer died, pipe survives) does not silently swallow writes. Same shape as #19401 (loop never terminates because the convergence signal is broken) at the IPC layer.
- New issues: [openai/codex#19398] ("Lane/Agent rules", 16:17Z), [openai/codex#19399] ("Subagent-specific TOML config no longer works on Codex Windows; named agents spawn with default config", 16:42Z) — Windows + subagent + config-not-applied, a three-way regression, related to the permissions refactor train. [#19403] ("False positive cyber-safety flag during passive product research on public webhosting documentation", 17:07Z) — safety-classifier false positive on documentation.

### litellm: a third auth-scope PR plus a real Redis-blocking fix

- [BerriAI/litellm#26442] (17:08Z) — "feat: restrict org admins from creating keys, teams, models via UI settings." **The third auth-scope PR of the day** (after #26438 and #26418). Currently org admins can create keys, teams, and models from the UI without any restriction — the UI does not enforce the same scope checks as the API. The fix introduces UI-level guards. Read together with #26438 (proxy_admin bypassing team TPM/RPM) and #26418 (single-team DB fallback when JWT has no team_id), the day now has three independent privilege-scope PRs against the same proxy. Seeds synthesis #22.
- [BerriAI/litellm#26441] (17:04Z) — "fix(redis): cache GCP IAM token to prevent async event loop blocking." The Redis client was fetching a fresh GCP IAM token on every operation, blocking the asyncio event loop on the synchronous metadata-server call. The fix caches the token. Real perf bug with a real fix; the surface is GCP-Redis-specific but the failure mode (sync call inside async path) is the third "blocking-call-in-async" bug this week.
- [BerriAI/litellm#26438] — updated 17:06Z, retitled to "fix(jwt-auth): apply team TPM/RPM + attribution for admins using x-litellm-team-id." The retitle clarifies that the fix also adds *attribution* (the audit log will now name the team being acted on, not just the admin acting). Strictly broader than the morning version.
- [BerriAI/litellm#26418] (16:19Z) — "fix(proxy): single-team DB fallback when JWT has no team_id." When a JWT arrives without a `team_id` claim, the proxy currently throws; the PR makes it fall back to a single-team lookup if exactly one team is in scope. This is the *opposite* shape of #26438 — there the admin could act *across* teams unchecked, here the user could not act *on any* team without an explicit claim. Both are JWT-scope bugs at adjacent corners of the same matrix.
- [BerriAI/litellm#26434] (16:30Z) — "Fix/shared health check polling." Retitled (was an opaque commit-message title earlier today). The polling-consolidation PR for shared health checks; sibling of #26202 (token-verification query opt) named at 16:09Z.
- [BerriAI/litellm#26439] (16:12Z) — the five-PR-graveyard Vertex `output_config` PR, no movement in-window beyond the open. Still the cleanest patch-PR-graveyard exhibit of the week.
- [BerriAI/litellm#26391] — "feat(pricing): gemini-embedding-2 GA cost map, blog, and test." **Merged 16:28Z.** Pricing/cost-map update for a newly-GA embedding model. Not a structural change, but worth flagging because cost-map drift is the silent failure mode that bills users wrong long before any test catches it.

### opencode (anomalyco fork): DeepSeek surface, share-bug closed, [5th ticket] for log files

- [anomalyco/opencode#24188] (16:56Z) — "[DeepSeek] The `reasoning_content` in the thinking mode must be passed back to the API." The DeepSeek API requires that `reasoning_content` from a previous turn be echoed back on the next turn for thinking-mode continuity; opencode currently drops it, breaking multi-turn reasoning. **Same shape as the W17 reasoning_content cluster from earlier in the week** (synthesis #1) but for a different vendor — the cluster is generalizing from one provider to multiple.
- [anomalyco/opencode#24189] (17:03Z) — "DeepSeek cache usage is not reported in opencode stats (v1.14.24)." Filed seven minutes after #24188 by (likely) the same user. Cache-usage telemetry for DeepSeek is missing from the stats surface; users cannot tell whether their DeepSeek cache is actually saving cost. Pairs with #24188 as a two-issue burst against the DeepSeek surface.
- [anomalyco/opencode#24186] (16:28Z) — "[BUG] backend Zen models downgraded without notification." A backend silently downgrades Zen-routed models (presumably to a cheaper variant) and the runtime does not notify the user. **Same family as litellm-#26442's UI/API scope mismatch**: the system makes a privileged change, the user-visible surface does not name it.
- [anomalyco/opencode#24182] (16:16Z) — "[CRITICAL] OpenCode continues to not create its stated storage log files of messages and tool use. [5th Ticket]". The "[5th Ticket]" annotation is the user telling the maintainers this has been filed four times before. Patch-PR graveyard's mirror image: the issue-PR graveyard, where the *report* is the thing that keeps duplicating because the underlying behavior never changed.
- [anomalyco/opencode#24187] — closed 16:45Z. "opentui: fatal: null is not an object (evaluating 'all.filter')." Closed quickly; the theme-detection-OpenTUI re-land (#23846 from the previous addendum) is presumably the underlying fix.
- [anomalyco/opencode#24173] — closed 16:47Z. The `M0.data.share` undefined-evaluation crash from `share` command, closed without a linked PR — typically means dedup against an existing fix.
- [anomalyco/opencode#24063] — **merged 16:12Z**: "fix: account for additional openai retry case." Adds a retry case for an OpenAI 5xx pattern not previously covered. Direct sibling of the W17 "retry-as-afterthought" synthesis (#12) — *another* retry-coverage gap closed by adding *another* case to a list. The retry policy continues to grow by enumeration.

### crush: still quiet

Only [charmbracelet/crush#2704] from the previous window updated (16:32Z, "allow not truncating long command lines"); no new in-hour activity. Crush continues to be the low-volume member of the four-repo set this week.

### Net narrative change since 16:09Z

1. **The codex gpt-5.5 + compaction cluster is now six issues in one hour** (#19386, #19390, #19397, #19400, #19401, #19405) — and #19404 adds a desktop-picker presentation bug for the same model. The runtime crashes where the model is exposed and the UI hides it where it would work. Seed for synthesis #21 below.
2. **litellm now has three independent privilege-scope PRs in one day** (#26418, #26438, #26442). All against the same proxy auth surface, all naming a different corner of the JWT/admin/UI scope matrix. Seed for synthesis #22 below.
3. **The DeepSeek `reasoning_content` bug (anomalyco/opencode#24188) generalizes the W17 reasoning_content cluster** from one vendor to multiple. The "echo back the thinking-mode field on the next turn" contract is now visibly cross-vendor.
4. **anomalyco/opencode#24182 is filed as the 5th ticket** for the same storage-log-files behavior. Issue-PR graveyards (issues that keep being re-filed because the behavior never changed) are the mirror of the patch-PR graveyards in synthesis #20.
5. **anomalyco/opencode#24063 closed another retry-coverage gap by adding another enumeration entry** — the W17 retry-as-afterthought pattern continues to play out in real time.
6. **codex #19350 merged the alpha build fix** (`fix alpha build`); the AMFI-killed `0.125.0-alpha.1` is closed-loop. The npm-prompt guard #19389 remains warranted for the *next* broken alpha.
7. **litellm #26441 caught a sync-in-async Redis bug** (GCP IAM token fetch blocking the event loop) — the third blocking-call-in-async bug the week has surfaced.
8. **The codex permissions refactor train (#19391–#19395) is still all OPEN** an hour after filing; no merges in dependency order yet.

Next refresh after the next dispatcher tick.

---

# Daily addendum — 2026-04-24 (refresh @ 17:55Z)

**Window since last addendum:** 2026-04-24T17:08Z → 2026-04-24T17:55Z (≈47m)

This refresh covers the 47 minutes after the 17:08Z snapshot. Three things move: the codex gpt-5.5/compaction cluster picks up two more issues that explicitly *name the catalog mismatch* (#19409) and *generalize to admin-disable bypass* (#19411); the anomalyco/opencode DeepSeek surface gets a third and fourth ticket including a 400-error-on-multi-turn reproducer (#24190); and litellm gets a third reasoning-shape bug (#26413, `"think": false` ignored) that ties the litellm afternoon to the same DeepSeek/reasoning_content cluster opencode is hitting.

### codex: the gpt-5.5 cluster grows two structural reframings

The previous addendum had a six-issue-in-one-hour cluster (#19386, #19390, #19397, #19400, #19401, #19405) plus a presentation bug (#19404). This window adds two more — but both of these *reframe* the cluster rather than just adding another exhibit.

- [openai/codex#19409] (17:32Z) — *"GPT-5.5 context catalog mismatch makes 400K/1M setup unsafe and can bypass auto-compaction."* Direct structural reframing of #19386. Where #19386 says "compaction fails at ~220k despite advertised 400k," #19409 names the underlying mechanism: the *context catalog* (the data structure the runtime consults to decide when to compact) is out of sync with what the model actually accepts. Worse, the mismatch *can bypass* auto-compaction entirely on the 1M setup, meaning a session that should have triggered compaction silently does not. So the cluster is no longer "compaction is broken on gpt-5.5" — it is "the catalog the runtime trusts to make the compaction decision is wrong." The fix surface is a different file.
- [openai/codex#19411] (17:49Z) — *"Fast mode shows up even if admin disabled it."* Looks unrelated to compaction at first glance, but it is the same shape as #19384 (full-access ranked below auto-review): the UI surfaces a capability that an admin has *explicitly* disabled. So the codex permissions surface now has two "admin-disable does not propagate to the UI" bugs in 24 hours, which is exactly the gap the #19391–#19395 refactor train is supposed to close. If the train lands first, these two issues should close as a side effect; if either of these issues lands first as a point fix, the train acquires a merge conflict.
- [openai/codex#19408] (17:28Z) — *"Oops, an error has occurred."* An unhelpfully-titled crash report; the body (would need fetching to confirm) names a specific stack. Worth tracking only as a count item — adds to the day's open-issue volume on codex but does not seed a pattern by itself.
- [openai/codex#19407] (18:00Z, edge of window) — *"Update bundled OpenAI Docs skill for GPT-5.5."* Doc-skill update for the same model that #19386/#19400/#19401/#19409 are crashing on at runtime. Same pattern as #19404 (desktop picker hides the model): the *out-of-band* surfaces around gpt-5.5 (docs, picker) are being updated independently of the runtime, which is half of why the catalog mismatch in #19409 exists in the first place. Multiple representations of "what gpt-5.5 supports" being maintained separately.
- [openai/codex#19410] (17:45Z) — *"Remove js_repl feature."* Capability *narrowing* PR — the JS REPL tool is being removed. Stands apart from the gpt-5.5 cluster but worth flagging because it is the rare PR this week that *shrinks* the tool surface rather than growing it.
- [openai/codex#19406] (17:36Z) — *"feat(tui): add private slash commands."* **Closed** without merging. Quick-close, presumably superseded or rejected; no obvious sibling.
- [openai/codex#19334] — *"Fallback login callback port when default is busy."* **Closed** 17:50Z. Fallback-port handling for OAuth callback when the default port is in use; a small reliability fix on the auth surface, closed as part of in-window cleanup.
- [openai/codex#19283] — *"check PID of named pipe consumer."* **Merged** 17:41Z. The PID-check on the named-pipe consumer that has been queued for review — same shape as #19401 (loop never terminates because the convergence signal is broken) at the IPC layer. Now landed.

### anomalyco/opencode: DeepSeek surface is now a four-ticket cluster

The previous addendum had two DeepSeek tickets (#24188 reasoning_content drop, #24189 cache-usage telemetry missing). This window adds two more — and one of them carries a concrete reproducer.

- [anomalyco/opencode#24190] (17:42Z) — *"[DeepSeek V4] reasoning_content not round-tripped — 400 error on multi-turn tool calls."* This is the *reproducer* version of #24188. Where #24188 says "the API requires `reasoning_content` to be echoed back," #24190 demonstrates that without that echo the *next* turn returns 400 specifically when the prior turn included a tool call. So the DeepSeek bug is not just a quality regression — it is a hard failure on the multi-turn-with-tools path. Cluster severity revised upward.
- [anomalyco/opencode#24191] (17:25Z) — *"opentui: fatal: A Proxy's 'target' should be an Object."* Another opentui crash, distinct from #24187 (`null is not an object` evaluating `all.filter`, closed in the previous window). Two opentui crashes in the same day with different root causes — opentui has the *third*-most issues this week behind the codex permissions and litellm auth surfaces, and the failures are heterogeneous (not a single root cause).
- [anomalyco/opencode#24192] (17:25Z) — *"[Bug] Keyboard shortcuts don't work when Chinese IME is active."* IME composition state is consumed before the shortcut handler sees the key event. Sibling of last week's keyboard-mapping issues but with a clean repro path (any CJK IME).

### litellm: a third reasoning-shape bug ties to the cross-vendor reasoning cluster

- [BerriAI/litellm#26413] (17:54Z) — *"[Bug]: `\"think\": false` is ignored; reasoning_content and thinking_blocks still returned."* The user explicitly disables thinking mode (`"think": false` in the request), and the runtime *still* returns `reasoning_content` and `thinking_blocks` in the response. So this is the *inverse* of the anomalyco/opencode #24188/#24190 bugs: there, opencode is *dropping* `reasoning_content` when it should pass it; here, litellm is *emitting* `reasoning_content` when it should suppress it. The reasoning-shape contract is broken in both directions on the same day across two projects.
- [BerriAI/litellm#26444] (17:24Z) — *"[Bug]: get_supported_openai_params still reports 'temperature' as supported for Anthropic Claude Opus 4.7 — Anthropic rejects temperature on this model."* Catalog mismatch: the litellm support-params lookup says Claude Opus 4.7 supports `temperature`, the actual Anthropic API rejects it. **Same shape as codex #19409** (catalog says one thing, runtime accepts another). Two catalog-drift bugs against new-model rollouts on the same day.
- [BerriAI/litellm#26443] (17:14Z) — *"[Bug]: JSON-configured providers (e.g. Scaleway) not in openai_compatible_providers — non-standard params bypass extra_body wrapping."* Providers added via JSON config (rather than as code-level entries) are absent from the `openai_compatible_providers` list, so the parameter-wrapping code that should funnel non-standard params through `extra_body` skips them entirely. The non-standard params end up in the top-level request and get rejected upstream. Direct registration-vs-runtime drift; close cousin of synthesis #14 (published-spec-lies / registry drift).
- [BerriAI/litellm#26432] — **Merged** 17:57Z. Yet another `merge main` PR — adds to the running `merge main` graveyard count.

### crush: still quiet, but a new issue worth noting

- [charmbracelet/crush#2702] (17:20Z) — *"feat: super yollo."* Joke-titled PR; body would need to be fetched to know whether it is a real change or noise. Flagged for next refresh.
- [charmbracelet/crush#2705] (17:34Z, issue) — *"crush run doesn't print LLM response to stdout."* `crush run` (the non-interactive subcommand) is not writing the model response to stdout, breaking the basic "pipe to a script" workflow. The *most user-facing* possible regression on a CLI's non-interactive path, and the first crush bug this week that matters for automation.

### Net narrative change since 17:08Z

1. **The codex gpt-5.5 cluster has now reframed itself** — #19409 names *catalog mismatch* as the underlying mechanism behind the compaction failures (#19386, #19390, #19400, #19401). The fix surface is no longer the compactor; it is the catalog the compactor consults.
2. **codex has two "admin-disable does not propagate to UI" bugs in 24 hours** (#19384, #19411). The permissions refactor train (#19391–#19395) should close both as a side effect, but only if it lands before either point fix.
3. **The DeepSeek reasoning_content cluster on anomalyco/opencode is now four tickets** (#24188, #24189, #24190, [#24191 unrelated]); #24190 is the hard-failure reproducer (400 on multi-turn-with-tools).
4. **litellm #26413 is the inverse of the opencode DeepSeek bug**: opencode drops `reasoning_content` when it should pass it; litellm emits it when it should suppress it. The reasoning-shape contract is broken in both directions on the same day across two projects. Seeds synthesis #23.
5. **codex #19409 and litellm #26444 are both catalog-drift bugs against new-model rollouts** on the same afternoon — codex's catalog says gpt-5.5 supports 400k context (it does not, in practice), litellm's catalog says Claude Opus 4.7 supports `temperature` (it does not). Cross-repo "model-capability catalog drift" is now a same-day, two-repo pattern. Seeds synthesis #24.
6. **opentui crashes are heterogeneous** — #24187 (closed) and #24191 (open) are different root causes inside the same component.
7. **crush #2705 is the first crush bug this week that breaks an automation path** (`crush run` not writing to stdout). Worth watching whether it gets the same triage speed as the interactive bugs.
8. **codex #19283 (named-pipe PID check) merged in-window** — the IPC-side analog of #19401's loop-never-terminates pattern is now closed-loop on the codex side.

Next refresh after the next dispatcher tick.

---

# Daily addendum — 2026-04-24 (refresh @ 18:35Z)

**Window since last addendum:** 2026-04-24T17:55Z → 2026-04-24T18:35Z (≈40m)

Three structural moves in this window. First, **codex 0.125.0 GA shipped at 18:00Z** — the same version line whose alpha.1 was AMFI-killed and whose alpha.3 went pre-release at 12:20Z. The GA tag landed without a separate fix-PR cluster in this window, which means the alpha-cycle bugs (#19350 alpha build fix, the npm-prompt guard #19389) are now load-bearing for the GA cohort. Second, **the codex permissions refactor train (#19391–#19395) is still all OPEN ~3 hours after filing**, and a *sixth* PR — #19414 ("permissions: make legacy profile conversion cwd-free") — has now joined the train; the train is growing while none of its members merge. Third, two new "the runtime cannot start because a feature flag the binary does not recognize is set" issues land on codex (#19415 Windows MSIX blank splash, #19220 macOS startup failure, both naming `workspace_dependencies`); pair this with the bwrap-loopback ENOPERM bug (#19412 closed → #19413 reopened) and the Linux sandbox path now has its own startup-gate failure mode in the same window.

### codex: 0.125.0 GA + permissions train widens to six + two startup-gate failures

- [openai/codex] **release 0.125.0 GA** at 18:00:38Z. The same version line as the AMFI-killed alpha.1 (closed-loop via #19350) and alpha.3 (12:20Z). GA shipped without a visible fix-cluster in this window, so the alpha-cycle assumptions are now production assumptions.
- [openai/codex#19414] (18:15Z) — *"permissions: make legacy profile conversion cwd-free."* Sixth member of the permissions train (#19391–#19395, +#19414). The train is *growing* while none of its members merge — same anti-pattern flagged in synthesis #20 (patch-pr-graveyard) but in real time on a feature train, not a backport queue.
- [openai/codex#19416] (18:25Z) — *"Fix: use function apply_patch tool for Bedrock model."* Bedrock-routed sessions were calling the wrong tool variant for `apply_patch`. Same shape as the Zen-routing #24186 bug from the previous window (anomalyco/opencode): the *router* picks one thing, the *call site* picks another, and the model gets a malformed tool invocation. Cross-repo router-vs-callsite drift, again.
- [openai/codex#19407] **MERGED** 18:26Z. The bundled OpenAI Docs skill update for gpt-5.5 — third of three independent gpt-5.5 catalogs (synthesis #24) — landed. The runtime catalog (#19409) and desktop picker catalog (#19404) are still open.
- [openai/codex#19415] (18:16Z, issue) — *"Windows desktop app (MSIX 26.422.2437.0) stuck on blank splash — renderer infinite remount loop on workspace_dependencies feature flag."* Renderer enters an infinite remount loop because a feature flag (`workspace_dependencies`) is enabled but the renderer code path does not recognize it. Hard startup gate.
- [openai/codex#19220] (18:12Z, issue, refreshed) — *"Codex macOS startup failure: unsupported feature enablement `workspace_dependencies`."* Same flag, different OS, same failure mode (binary refuses to start because a flag is set that this binary version does not know how to handle). Two-OS reproduction of the same startup gate.
- [openai/codex#19413] (18:09Z, issue) — *"bwrap: loopback: Failed RTM_NEWADDR: Operation not permitted."* The Linux sandbox can no longer bring up the loopback inside the user namespace; #19412 (closed at 18:08Z) appears to be a duplicate-and-replace. The Linux launch path now has its own startup-gate bug in the same window the Windows and macOS paths are also failing to start.
- [openai/codex#19417] (18:35Z, issue) — *"Showing 'You're out of Codex messages' either I have credits."* Credit/quota presentation says zero when the backing balance is positive — same shape as last week's snapshot-vs-live-state cluster (synthesis #19) and same family as the silent Zen-downgrade in #24186.
- [openai/codex#19198] (18:25Z, issue, refreshed) — *"Remote SSH connection falsely reports No `codex` found in PATH when `codex` is installed at a custom path."* The remote-SSH launcher resolves `codex` against the *interactive-shell* `PATH`, not the *non-interactive* `PATH` that SSH actually uses. Classic non-interactive-path-is-second-class regression — feeds synthesis #25 below.
- [openai/codex#19010] (17:56Z, issue, refreshed) — *"Latest codex extension fails to resume after connections lost."* The extension's resume path assumes the previous connection's state was checkpointed; on reconnect after a drop it does not find the checkpoint and silently fails to resume. Pairs with the codex thread-store migration PRs (#19280, #18900) — the migration is presumably *what would fix this* but has not landed.

### anomalyco/opencode: a piped-stdin TUI break + a presentation-state reset

- [anomalyco/opencode#24195] (18:20Z, issue) — *"Bug: Piping stdin into TUI breaks rendering (reproduced)."* Reproduced regression: piping anything into the opencode TUI corrupts rendering. Sibling of crush #2705 (`crush run` not writing to stdout) — both projects' non-interactive / pipe paths are broken on the same day. Anchor exhibit for synthesis #25.
- [anomalyco/opencode#24197] (18:33Z, issue) — *"OpenCode Desktop 1.14.22 ignores `project.icon_url_override` after webview refresh."* User-set override is honored on initial load, then lost after a webview refresh — the refresh path re-resolves the icon from defaults rather than the persisted override. Same shape as synthesis #16 (accepted-but-unpropagated mutations): the mutation was accepted, presented, then silently reverted at a refresh boundary.
- [anomalyco/opencode#24196] (18:30Z, PR) — *"feat(web,console): improve Polish translations for homepage and console."* Translation update; no failure-class signal.
- [anomalyco/opencode#23255] (18:27Z, PR, refreshed) — *"fix(build): add prettier to devDependencies."* Build hygiene; flagged because it is the *kind* of "should have been there from day one" devDep gap that catalog-drift bugs (synthesis #24) hide behind.
- [anomalyco/opencode#12822] (18:29Z, PR, refreshed) — *"fix(env): proxy directly to process.env instead of snapshotting."* The env snapshot was taken at startup; mutations to `process.env` after that did not propagate. Direct sibling of synthesis #19 (snapshot-vs-live-state) on the env-vars surface — and another exhibit for the non-interactive surface synthesis below (scripts that mutate env *before* invoking sub-processes lose the mutation).
- [anomalyco/opencode#24188] (18:03Z, refreshed) — DeepSeek `reasoning_content` round-trip bug; updated with additional repro context but no new closure.

### litellm: post-call-guardrails-on-pass-through + an OpenRouter add-model failure

- [BerriAI/litellm#26262] (18:28Z, PR refreshed) — *"fix(proxy): invoke post-call guardrails on pass-through endpoint responses."* Pass-through endpoints were skipping post-call guardrails entirely; the fix wires guardrails into the pass-through response path. *The bug existed because pass-through was implemented as a separate code path that did not go through the standard response-processing pipeline* — direct sibling of synthesis #22 (privilege-by-exclusion): the pass-through path was excluded from the security pipeline by virtue of being a different file.
- [BerriAI/litellm#26360] (18:33Z, PR) — *"feat(guardrails): LLM-as-a-Judge guardrail."* New guardrail class. Independent feature.
- [BerriAI/litellm#26199] (18:03Z, issue refreshed) — *"Not able to add openrouter model as endpoint."* Adding an OpenRouter-namespaced model from the admin UI fails outright; the model add-form does not accept the OpenRouter id format.
- [BerriAI/litellm#24795] (18:10Z, issue refreshed) — *"OpenRouter model selected from Admin UI list fails Test Connect with 'is not a valid model ID'."* Companion to #26199: the admin UI *does* surface OpenRouter models in its picker, but selecting one and clicking Test Connect produces an "is not a valid model ID" error. Two OpenRouter-against-Admin-UI bugs in the same window — the OpenRouter integration path through the admin UI is broken at both the add and the test surfaces.

### crush: a serious one — concurrent-write SQLite corruption

- [charmbracelet/crush#2690] (18:09Z, PR) — *"fix(db): prevent SQLITE_NOTADB corruption under concurrent sub-agents."* When multiple sub-agents write to the same SQLite session DB concurrently, the file gets corrupted to the point that the SQLite header is unreadable (`SQLITE_NOTADB`). Open PR fixes by adding write serialization. **This is the anchor for synthesis #26 below** — agent-session state stores assuming single-writer when the project's own sub-agent surface is multi-writer.
- [charmbracelet/crush#2705] (18:06Z, issue refreshed) — `crush run` not writing to stdout; second-day signal that the non-interactive surface is unowned. Cross-repo sibling of opencode #24195.

### Net narrative change since 17:55Z

1. **codex 0.125.0 GA shipped during this window** without a visible fix-cluster — the alpha-cycle bugs are now production bugs.
2. **The permissions refactor train is now six PRs** (#19391–#19395 + #19414) and *zero have merged*. Merge-conflict surface area is growing per minute the train sits.
3. **Three OS startup-gate failures on codex in the same window** — Windows MSIX blank splash on `workspace_dependencies` (#19415), macOS unsupported-feature-flag (#19220), Linux bwrap loopback (#19413). Three different operating systems, three different gates, same window — the launch surface is the most-failing surface today.
4. **Cross-repo router-vs-callsite drift** continues: codex Bedrock #19416 picks the wrong `apply_patch` variant, mirroring the Zen-routing silent-downgrade #24186.
5. **Two non-interactive / piped-IO regressions on the same day across two repos** — opencode #24195 (stdin into TUI breaks rendering) and crush #2705 (`crush run` no stdout). Plus codex #19198 (SSH non-interactive `PATH` resolution) and opencode #12822 (env snapshot vs live `process.env`). Seeds **synthesis #25 (non-interactive surfaces are second-class)**.
6. **crush #2690 (SQLITE_NOTADB under concurrent sub-agents) is a concurrent-write-corruption-in-agent-session-store bug** — same architectural family as the codex thread-store migration PRs (#19280, #18900) and the litellm pass-through-skipping-pipeline #26262. Seeds **synthesis #26 (concurrent-write contracts assumed single-writer)**.
7. **OpenRouter through the litellm admin UI is broken at add (#26199) and at test (#24795)** — same vendor, two surfaces, same day.
8. **codex GPT-5.5 docs-skill catalog (#19407) merged** — one of three catalogs from synthesis #24 closed; the runtime catalog and desktop picker catalog are still open.

Next refresh after the next dispatcher tick.

---

## Refresh @ 18:55Z — window 18:35Z → 18:55Z (≈20 min)

The previous refresh closed at 18:42Z noting "next refresh after the next dispatcher tick." This is that tick. The 20-minute window is short but unusually dense: **seven new codex issues filed, the codex permissions train picked up a seventh PR, and a quietly significant litellm admin-restrictions PR appeared**. Aggregate summary first, exhibits below.

### codex: post-GA install/launch carnage on the 0.125.0 line

The pattern from the earlier window — *"the launch surface is the most-failing surface today"* (see 17:55Z narrative item #3) — extended through this window with fresh exhibits, but the failure shape has shifted: it is no longer "the binary refuses to start" but **"the install/updater/desktop UI reports success while the underlying surface is broken."** Five of the seven new issues fit that shape.

- **[openai/codex#19419]** (18:46Z, issue) — *"Linux x64 optional tarball 404 — 0.125.0 install leaves CLI broken (`Missing optional dependency @openai/codex-linux-x64`)."* The npm install completes with exit 0; the optional native binary tarball returns 404; the CLI is then unrunnable. Install succeeded by every observable signal except *the only one that matters*. Anchor exhibit for synthesis #27 below.
- **[openai/codex#19421]** (18:53Z, issue) — *"Updater reports success after install script fails with curl 403."* The updater pipeline catches the 403 from the download CDN, logs it, then exits 0 anyway and shows "Updated to 0.125.0 ✓" in the UI. The on-disk binary is still the previous version. Same shape as #19419 on a different surface.
- **[openai/codex#19423]** (18:55Z, issue) — *"Codex Desktop IAB cannot inspect external pages because app-server fails to start on Windows."* Desktop window opens, IAB tab is reachable, the *backing* app-server crashed on launch. The user-visible UI is the success signal; the failure is one process boundary away.
- **[openai/codex#19420]** (18:58Z, issue) — *"`codex-auto-review` doesn't exist in the API."* A documented/published surface name does not resolve at the runtime. Same family as synthesis #14 (published-spec-lies-registry-drift) but on the *tool name* surface, not the model name surface.
- **[openai/codex#19417]** (18:45Z, issue, refreshed) — *"Showing 'You're out of Codex messages' either I have credits."* The presentation says zero, the backing balance is positive. Carried forward from the 17:55Z window; updated in this window with another reproduction.
- **[openai/codex#19422]** (18:53Z, PR) — *"Clarify bundled OpenAI Docs upgrade guide wording."* Docs cleanup paired with #19407 (which merged earlier); harmless on its own but it indicates the docs-skill catalog from synthesis #24 is still being polished post-merge.
- **[openai/codex#19418]** (18:37Z, PR) — *"Minor grammar cleanup in codex-rs README."* Drive-by; no failure signal.

The **permissions refactor train** picked up new activity at 18:55Z: PRs **#19391, #19392, #19393, #19394, #19395, #19414** all show the same `updatedAt` of 18:55Z — almost certainly a force-push rebase of the train onto a new main after #19416 (Bedrock apply_patch) merged at 18:45Z. **Still zero merges.** The train has now been rebased without landing through *two* dispatcher windows, and is up to *six* PRs (the seventh, #19410 "Remove js_repl feature", touches the same surface but is filed independently).

### crush: a second SQLite-writer PR appears next to #2690

- **[charmbracelet/crush#2691]** (18:39Z PR) — *"fix(db): cap SQLite pool to one writer to prevent NOTADB corruption."* This is **a second, independent fix for the same bug as #2690**, filed inside 30 minutes of the first. #2690 serializes writes at the application layer; #2691 caps the connection pool to one writer at the driver layer. Two PRs, two different remediation strategies, same defect — classic "the patch surface attracts contributors faster than the maintainer can review" pattern from synthesis #20 (patch-pr-graveyard). Worth tracking which approach lands.
- **[charmbracelet/crush#2703]** (14:27Z, MERGED) — *"fix(hyper): re-authorization flow not triggering on certain conditions."* The auth re-trigger wasn't firing when the previous token was expired-but-not-yet-evicted from cache; user sees a logged-in UI but every backend call 401s. Same observed-success-vs-actual-failure shape as the codex install bugs above. Feeds **synthesis #27**.
- **[charmbracelet/crush#2699]** (10:26Z, OPEN PR) — *"fix(lsp): enforce workspace boundary for workspace edits."* Previously, LSP-driven edits could escape the project workspace root. Tightening the trust boundary on a previously-implicit privilege. Feeds **synthesis #28**.
- **[charmbracelet/crush#2702]** (17:20Z, OPEN PR) — *"feat: super yollo."* Likely a yolo/autonomy mode toggle; the title is too informal to read further without diff inspection.

### litellm: an org-admin scope-tightening PR + a Redis cache fix

- **[BerriAI/litellm#26442]** (17:23Z, OPEN PR) — *"feat: restrict org admins from creating keys, teams, models via UI settings."* Org admins were previously implicitly trusted to create any of these via the admin UI; this PR introduces UI-side restrictions. **Notable architectural admission**: the underlying API surface still allows it; only the UI is being scoped down. That makes this a UI-as-policy-layer change — a known-fragile pattern, but also the *same week* that opencode (#24179, session-scoped permission bridge) and crush (#2699, LSP workspace boundary) are also tightening previously-implicit privileges. Anchor for **synthesis #28**.
- **[BerriAI/litellm#26441]** (17:29Z, OPEN PR) — *"fix(redis): cache GCP IAM token to prevent async event loop blocking."* Each Vertex/GCP call was synchronously refetching the IAM token through Redis, blocking the asyncio loop. Performance fix, but also a "*the call returned successfully, while in fact starving every other request*" observed-success-vs-real-failure pattern.
- **[BerriAI/litellm#26438]** (17:06Z, OPEN PR) — *"fix(jwt-auth): apply team TPM/RPM + attribution for admins using x-litellm-team-id."* Header-driven team attribution for admin requests — admins were bypassing per-team rate limits because the team header wasn't being honored on admin paths. Sibling of #26442: in both, *admins were getting more privilege than the policy intended*, and both fixes are landing in the same window. Feeds **synthesis #28**.
- **[BerriAI/litellm#26439]** (16:12Z, OPEN PR) — *"fix(adapters,vertex): pass `output_config` through to backends that accept it (closes #23380, supersedes #23475/#23396/#23706/#22727)."* This single PR explicitly **supersedes four prior PRs** for the same fix (#23475, #23396, #23706, #22727). That's a textbook patch-pr-graveyard exhibit (synthesis #20) — five different contributors, one bug, one PR finally re-landing the same change. Cite this on next graveyard refresh.

### opencode (anomalyco fork): permission-bridge + bedrock allowlist

- **[anomalyco/opencode#24179]** (15:12Z, OPEN PR) — *"feat: expose a session-scoped permission bridge for external providers."* External providers were inheriting the session's full permission scope; this introduces a bridge that scopes their access per-session. Same family as litellm #26442 and crush #2699. **Synthesis #28 anchor.**
- **[anomalyco/opencode#24194]** (17:51Z, CLOSED) — *"restrict amazon-bedrock provider to curated model allowlist."* Closed without merge. Title alone signals an attempted privilege tightening on the Bedrock provider; closure suggests the fix shape was wrong, not that the underlying need was wrong. Worth checking the close comment in the next pass.
- **[anomalyco/opencode#24174]** (15:12Z, OPEN PR) — *"feat(core): add background subagent support."* New multi-actor surface added to opencode. **Worth flagging for synthesis #26 (concurrent-write contracts)** — opencode's session store has not, to public knowledge, been audited for the multi-writer contract crush is currently breaking at #2690/#2691. This is the kind of feature that *seeds* a future SQLITE_NOTADB equivalent.
- **[anomalyco/opencode#24172]** (14:41Z, MERGED) — *"fix: use existingModel as fallback for interleaved field."* When the interleaved-tool-calls field is absent on a model response, fall back to the existing model's value. Quiet observed-success-vs-actual-failure: the response parsed cleanly, just with a wrong default.

### ollama: a model-metadata catalog PR with a closed twin

- **[ollama/ollama#15795]** (14:19Z, OPEN PR) — *"launch: add codex model metadata catalog."* And **[ollama/ollama#15779]** (14:19Z, **CLOSED**) — same title, closed at the same minute the new one updated. Filed-then-replaced pattern. Independent of synthesis #24 (model capability catalog drift) only because ollama was not previously in the synthesis #24 cluster — **adding ollama to that cluster on next refresh is now warranted**.

### Net narrative change since 18:35Z

1. **The codex 0.125.0 launch failure mode has mutated** — earlier in the day it was "binary refuses to start" (3 OSes); this window it is "install/updater/UI reports success while the underlying surface is broken" (#19419, #19421, #19423, #19420, #19417, plus crush #2703 and opencode #24172). New cross-repo synthesis #27 below.
2. **A tightening-of-previously-implicit-privileges cluster appeared** spanning litellm (#26442, #26438), crush (#2699), and opencode (#24179, #24194). Four projects, same week, same architectural admission. New cross-repo synthesis #28 below.
3. **The codex permissions train is now 6+1 PRs** (#19391–#19395, #19414, plus the related #19410) and rebased twice today without landing. The train length is now itself a release-risk signal.
4. **crush #2690 picked up a sibling fix #2691** within 30 minutes — two independent remediations of the same SQLite-corruption bug. Patch-graveyard formation in real-time.
5. **litellm #26439 explicitly supersedes 4 prior PRs** for the same `output_config` plumbing — strong patch-pr-graveyard exhibit; refresh synthesis #20 next pass.
6. **opencode is shipping background subagent support (#24174)** without (visibly) auditing its session store for the multi-writer contract crush is currently failing on. Pre-emptive flag for the next synthesis #26 refresh.
7. **ollama joins the model-metadata-catalog cluster** via #15795 / closed #15779. Refresh synthesis #24 to add ollama on next pass.

Next refresh after the next dispatcher tick.
