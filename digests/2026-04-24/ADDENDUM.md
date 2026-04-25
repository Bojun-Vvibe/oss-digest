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

---

## Refresh 18:55Z → 19:10Z

> _LLM-generated addendum. Real PR/issue numbers; click through before quoting._

### codex: the permissions train rebases *again* and grows a cwd-free PR; a schema-defaults PR appears

The 6-PR permissions train (#19391–#19395, #19414) re-stamped its `updatedAt` to 19:09Z — that is **the third rebase today** (17:55Z, 18:55Z, 19:09Z). Still zero merges. In this same window a new sibling PR appeared:

- **[openai/codex#19414]** (19:09Z, OPEN PR, by bolinfest) — *"permissions: make legacy profile conversion cwd-free."* The legacy → profile policy converter currently reads `cwd` from the surrounding process to resolve relative paths in policy expressions; this PR makes the converter take cwd as an explicit argument instead. **The change is small but the implication is large**: it admits that the conversion has been *implicitly cwd-coupled* — the same legacy policy file produced different profiles depending on which directory the converter ran in. Anchor exhibit for synthesis #30 below (default-flag-flip-as-breaking-change: removing a coupling that callers may have come to depend on).
- **[openai/codex#19424]** (19:06Z, OPEN PR, by neil-oai, +88/-64) — *"Strip sandbox access defaults from app-server JSON schema."* Removes object-shaped defaults (`access`, `readOnlyAccess`) from the exported JSON Schema while *keeping* serde defaults at runtime and keeping scalar defaults like `networkAccess: false`. The PR body is explicit: *"codegen-hostile object defaults"* — i.e. downstream code generators were materializing the default object as if it were the *contract*, then when runtime changed, generated clients drifted. **Same pattern as the catalog-drift cluster from synthesis #24, but on the schema-export surface.** Second anchor for synthesis #30.
- **[openai/codex#19425]** (19:08Z, issue) — *"Custom stdio MCP server discovered by `/mcp` but tools not exposed to Desktop threads."* The server starts, `tools/list` returns the expected 7 tools (`project_map`, `read_files`, `code_search`, etc.), Desktop UI lists the server as enabled — and `tool_search` returns 0 callable tools. **Three independent success signals (server up, tools enumerated, UI shows enabled) all return green; the only failing signal is the one that matters (tools actually invokable from a thread).** This is exactly the synthesis #27 shape, *but on a different surface* — and the user's bug report is in essence "your error model gave me no way to discover what was actually wrong." Anchor for synthesis #29 below.
- **[openai/codex#19420]** (19:02Z, issue, refreshed) — same `codex-auto-review` model_not_found error from earlier, with new evidence: the error surfaces as a *model* error (`The requested model 'codex-auto-review' does not exist`), but the actual cause is that the **guardian-subagent reviewer is wired to a tool name, not a model name**, and the API rejects it as a model. The error message is technically correct and operationally useless. Synthesis #29 exhibit.
- **[openai/codex#19409]** (19:09Z, issue, refreshed) — the GPT-5.5 context catalog mismatch issue grew a long evidence dump: `codex debug models` reports `context_window: 400000`, the runtime `models_cache.json` reports `272000`, the live session events report `model_context_window: 258400` (= 272000 × 95%), and the user-visible failure is the generic `Codex ran out of room in the model's context window. Start a new thread or clear earlier history before retrying.` **Four catalog surfaces, three different numbers, one error message that names none of them.** Synthesis #29 exhibit; also a refresh of synthesis #24 (model-capability-catalog-drift) — the drift now reproduces inside a single host across local cache, debug command, and active session.
- **[openai/codex#19160]** (19:08Z, OPEN PR, +521 lines) — *"Make apply_patch streaming parser stateful."* Routes normal apply_patch parsing through the same parser in strict finalization mode and **removes the public `parse_patch_streaming` / `ParseMode::Streaming` API**. A behind-the-scenes consolidation, but it is also a removal of a public surface that (per the PR body) was leaking streaming progress ownership into callers. Default-removal exhibit for synthesis #30.
- **[openai/codex#19013]** (19:00Z, OPEN PR, +591 lines, refreshed) — *"Allow plugin-declared first-party connectors."* The current connector filter blocks every `connector_openai_*` id by blanket policy; this PR adds `plugin_declared_connector_ids` so plugin-bundled 1p connectors are allow-listed. Notable: the *blanket-block* was the implicit default, and the fix is to introduce an explicit allow-list — same shape as litellm #26442's "previously implicit, now explicit" UI scoping (synthesis #28). **Refresh synthesis #28** to add #19013 next pass.

### crush: no fresh PR activity in this 15-minute window

Crush stayed quiet 18:55Z → 19:10Z. The two-fix patch-graveyard formation around #2690/#2691 from the previous addendum window still has no maintainer triage on either PR.

### litellm: a global routing-flag PR merged + four guardrail/MCP fixes still open

- **[BerriAI/litellm#25359]** (19:06Z, **MERGED**, by Sameerlite) — *"feat(openai): add `route_all_chat_openai_to_responses` global flag."* Adds `litellm.route_all_chat_openai_to_responses` (env: `LITELLM_ROUTE_ALL_CHAT_OPENAI_TO_RESPONSES`); when set, *all* `/chat/completions` calls to OpenAI are silently routed through the Responses API bridge. **Default is `False`, so this looks like a feature flag — but the PR body explicitly frames it as making "the Responses API the recommended path for OpenAI models without requiring users to prefix models with `responses/`."** Once the recommended path migrates, the next breaking change is flipping that default to `True` — and *every* user who reads `/chat/completions` traces will see them as Responses-API traces. Anchor exhibit for synthesis #30 below. The same PR also slips in a fix to `responses/litellm_completion_transformation/transformation.py` to *preserve the full `reasoning` dict (including the `summary` key) instead of extracting only `effort`* — a quiet bug-fix on the reasoning-shape contract surface (synthesis #23) that landed as an unannounced rider in a feature PR. Worth flagging on the next #23 refresh.
- **[BerriAI/litellm#26390]** (18:39Z OPEN PR, refreshed) — *"[Fix] Guardrail param handling in list and submission endpoints."*
- **[BerriAI/litellm#26360]** (18:39Z, OPEN PR, refreshed) — *"feat(guardrails): LLM-as-a-Judge guardrail."* Worth tracking against the synthesis #28 cluster — guardrails are a privileged actor class.
- **[BerriAI/litellm#26274]** (18:52Z, OPEN PR, refreshed) — *"fix(mcp): harden OAuth authorize/token endpoints (BYOK + discoverable)."* Same shape as anomalyco/opencode #24179 (synthesis #28): an MCP-side OAuth surface that previously trusted `BYOK` callers implicitly.
- **[BerriAI/litellm#26262]** (18:28Z, OPEN PR, refreshed) — *"fix(proxy): invoke post-call guardrails on pass-through endpoint responses (#20270)."* Pass-through endpoints were skipping post-call guardrails — direct exhibit for synthesis #22 (privilege-by-exclusion); the fix has been pending since the issue was filed as #20270.

### opencode (anomalyco fork): a TUI workspace-routing fix

- **[anomalyco/opencode#23844]** (19:09Z, OPEN PR, +6 lines) — *"fix(tui): route question replies through current workspace."* Tiny fix: passes the current TUI workspace when answering or rejecting `QuestionPrompt` requests. Without this, `question.reply` POSTs were going to the *default* workspace instead of the active one — a question asked in workspace B could be silently answered against workspace A, with no error surfaced. **Synthesis #29 exhibit** (the failure was technically silent — no exception, just wrong-target routing) and **synthesis #30 exhibit** (the *default* workspace was load-bearing for a routing decision that should always have been explicit).

### ollama: no fresh PR activity in this 15-minute window

Ollama stayed quiet 18:55Z → 19:10Z. The #15795 / closed-#15779 catalog-PR pair from the previous window has no further movement.

### Net narrative change since 18:55Z

1. **The codex permissions train rebased a third time** (now at 19:09Z) without landing, and **grew a 7th sibling** (#19414, "cwd-free legacy conversion") — the train is now actively *removing implicit defaults* from its own conversion path, in addition to introducing profile-backed scoping. Train length and rebase frequency are now both release-risk signals.
2. **A new "schema-defaults are codegen-hostile" admission landed in #19424** — the team is explicitly removing object-shaped defaults from the exported JSON Schema because downstream code generators materialized them as the contract. Same family as catalog-drift, but on a *new surface*: schema export.
3. **#19425 (MCP discovered-but-not-exposed) is a fresh exhibit of synthesis #27** on a fourth surface (Desktop tool registration), bringing the surface count to: install (#19419), updater (#19421), desktop-server (#19423), tool registration (#19425), tool-name resolution (#19420), context catalog (#19409), opencode workspace routing (anomalyco/opencode #23844). **Seven surfaces, one shape.**
4. **litellm #25359 merged** introduces a global flag that quietly redefines the OpenAI default routing path while flipping the user-visible API surface. Anchor for new synthesis #30.
5. **#19013 (plugin-declared 1p connectors) belongs in synthesis #28** — connectors were under blanket-block by default, and the fix is the same "previously implicit, now explicit" admission. Refresh #28 to add it on the next pass.
6. **anomalyco/opencode #23844** confirms that the *current TUI workspace* is load-bearing default state for question routing — a 6-line fix with synthesis #30 implications well beyond its diff size.

Two new cross-repo syntheses below: **#29 (error-message-vs-actionable-error)** and **#30 (default-flag-flip-as-breaking-change)**. Next refresh after the next dispatcher tick.

---

## Refresh 19:10Z → 19:36Z

> _LLM-generated addendum. Real PR/issue numbers; click through before quoting._

### codex: a quiet thread-notification merge + four TUI/restoration PRs refreshing

- **[openai/codex#19093]** (19:31Z, **MERGED**) — *"Omit fork turns from thread started notifications."* On the surface this is a notification-noise fix; structurally it is a **session-resume semantics change**: the thread-started notification stream now hides fork turns from any consumer that was building a turn-by-turn timeline reconstruction. Subscribers that *count* thread-started events to drive UI state will silently undercount after this merge. Anchor exhibit for synthesis #31 below (session-resume / context-restoration semantics divergence).
- **[openai/codex#18575]** (19:24Z, OPEN PR, refreshed) — *"fix(tui): reflow backlog on terminal resize."* Reflows the persisted scrollback when the terminal is resized. The fix is correct, but it is also a **state-restoration boundary**: the backlog had previously *not* reflowed, so any caller that scraped TUI output by row offset was relying on the static layout. Synthesis #31 exhibit (TUI-side restoration drift).
- **[openai/codex#18576]** (19:18Z, OPEN PR, refreshed) — *"feat(tui): render markdown tables responsively."* Sibling of #18575: changes the persisted-render contract for tables. Same restoration-drift family.
- **[openai/codex#18372]** (19:12Z, OPEN PR, refreshed) — *"Show action required in terminal title."* Mutates terminal title state on action-required transitions. Looks innocuous; it is also load-bearing state that survives a TUI reattach and was previously not set. Synthesis #31 sibling.
- **[openai/codex#18431]** (19:17Z, OPEN PR, refreshed) — *"app-server: add macOS device key provider."* Adds a platform-specific key provider behind the existing trait. Worth tracking for synthesis #28 next pass; not a #31/#32 anchor.
- **[openai/codex#19414]** and **[openai/codex#19424]** rebased again (19:28Z / 19:33Z) — the permissions train + the schema-defaults strip are *still* both open after three rebases each today. The train length / rebase frequency signal from prior windows continues unchanged.

### litellm: a guardrail-pass-through merge + a reasoning-family param-drop PR

- **[BerriAI/litellm#26262]** (19:15Z, **MERGED**) — *"fix(proxy): invoke post-call guardrails on pass-through endpoint responses (#20270)."* The pre-existing privilege-by-exclusion bug from synthesis #22 lands a fix. **Synthesis #32 exhibit** because the *recovery path* for guardrail validation on pass-through responses was missing entirely — there was no failure-recovery surface; pass-through responses simply skipped validation.
- **[BerriAI/litellm#26445]** (19:21Z, OPEN PR) — *"fix(anthropic): drop temperature from reasoning-family supported params."* Removes `temperature` from the `supported_openai_params` list for Anthropic reasoning-family models because the upstream API rejects it. **The fix is the *removal* of a previously-claimed parameter** — i.e. the supported-params catalog was lying. Anchor exhibit for synthesis #32 (structured-output / tool-args validation failure recovery): when the *advertised* tool-arg surface is wider than the *accepted* one, callers' validation either passes locally and fails upstream, or callers strip args defensively and lose useful behavior.
- **[BerriAI/litellm#26419]** (19:13Z, OPEN PR) — *"fix(ui): add missing 'zai' (Z.AI / Zhipu AI) provider to Add-Model dropdown."* The provider was supported in the routing layer but not in the UI dropdown — UI-side validation surface was narrower than runtime. Synthesis #32 sibling (the UI's allow-list was the *de facto* validation gate for some users).
- **[BerriAI/litellm#26386]** (19:20Z, OPEN PR, refreshed) — *"litellm oss branch."* Long-running branch-sync PR; no narrative weight this window.
- **[BerriAI/litellm#24374]** (19:29Z, OPEN PR, refreshed) — *"Litellm staging 03 22 2026."* Same — long-running staging branch PR.

### anomalyco/opencode (the fork): two restoration / replay PRs refreshed; a fresh DeepSeek V4 reasoning-content fix appears

- **[anomalyco/opencode#24200]** (19:35Z, OPEN PR) — *"fix: preserve empty reasoning_content for DeepSeek V4 in non-streaming and streaming paths."* The DeepSeek V4 provider was *dropping* empty `reasoning_content` blocks on both paths; the fix preserves the block as an explicit empty string so downstream replay code does not see "no reasoning emitted" when the model in fact emitted an empty reasoning marker. **The bug was a stream-vs-non-stream parity violation that only manifested at session-resume / replay time**, when the absence of the empty block was reinterpreted as "this turn had no reasoning at all." Anchor exhibit for synthesis #31.
- **[anomalyco/opencode#21056]** (19:33Z, OPEN PR, refreshed) — *"fix: DB migrating on every run for non-latest channels."* The per-launch DB migration replays for any channel that is not the latest — i.e. *resume-time* schema state is being recomputed instead of cached, on a path the project clearly intended to be one-shot. Synthesis #31 exhibit (resume-time schema replay as silent N×cost regression on non-latest channels).
- **[anomalyco/opencode#23844]** (19:14Z, OPEN PR, refreshed) — workspace-routing fix from prior window, still open.
- **[anomalyco/opencode#21722]** (19:15Z, OPEN PR, refreshed) — *"feat: improve ux and design."* Long-open UX PR.
- **[anomalyco/opencode#18767]** (19:36Z, OPEN PR, refreshed) — *"feat(app): Mobile Touch Optimization."*
- **[anomalyco/opencode#13854]** (19:36Z, OPEN PR, refreshed) — *"fix(tui): stop streaming markdown/code after message completes."* Direct sibling of codex #18575/#18576 (TUI restoration boundary drift) — the streaming markdown renderer continues *after* the message-complete signal, leaving the UI in an inconsistent state on the next render pass. Synthesis #31 exhibit on a *third* repo's TUI surface.

### OpenHands: a runtime-removal PR refreshed

- **[OpenHands/OpenHands#14117]** (19:25Z, OPEN PR, refreshed) — *"Removed V0 runtime."* Removes the V0 runtime class entirely. Notable for synthesis #32: removing a runtime is removing the validation/recovery surface that *was* the V0 contract. Any caller pinned to V0 has no recovery path post-merge. (Does not anchor #32 alone but is a sibling exhibit.)

### crush, Aider, ollama, modelcontextprotocol/servers: quiet

No PR activity 19:10Z → 19:36Z in those repos.

### Net narrative change since 19:10Z

1. **A session-resume / context-restoration cluster crystallized** spanning codex (#19093 merged, #18575, #18576, #18372), anomalyco/opencode (#24200, #21056, #13854). Seven exhibits, three repos, all on the *same* shape: behavior that was correct at first-run is incorrect (or silently different) after a resume, reattach, or replay. New cross-repo synthesis #31 below.
2. **A structured-output / tool-args validation-recovery cluster also crystallized** spanning litellm (#26262 merged, #26445, #26419), codex (#19424, #19013), and OpenHands (#14117). Six exhibits, three repos, all on the same shape: the *advertised* validation surface diverges from the *accepted* one, and there is no recovery path that surfaces the divergence to the caller. New cross-repo synthesis #32 below.
3. **codex #19093 merging** is the first member of synthesis #31's exhibit set to *land*, which means session-resume timeline reconstruction in any consumer of codex thread-started notifications is changing on the next release with no migration window.
4. **litellm #26262 merging** closes the synthesis #22 (privilege-by-exclusion) gap on pass-through endpoints — but the merge itself becomes a **synthesis #32** exhibit because the missing-recovery-path framing is what actually shipped.
5. **The codex permissions train (#19414) and schema-strip PR (#19424) rebased a 4th time** in the day without landing. Train + auxiliary now total 8 PRs, all open, with a cumulative rebase count crossing 12 today. Shipping risk continues to compound.
6. **anomalyco/opencode is now the cross-cutting fork** for both #31 and #32 clusters — three of seven #31 exhibits and one #32 sibling come from the fork, suggesting the fork's higher merge cadence is exposing restoration/validation drift faster than upstream.

Two new cross-repo syntheses below: **#31 (session-resume / context-restoration semantics divergence)** and **#32 (structured-output / tool-args validation failure recovery)**. Next refresh after the next dispatcher tick.

---

## Refresh #N+1 — 2026-04-24T20:32Z (window 19:36Z → 20:32Z)

### openai/codex: 25 PRs touched in the window — a Windows-process cluster, an MCP-elicitation-through-Guardian PR, and the permissions train rebases yet again

- **[openai/codex#19244]** — MERGED 20:07Z (commit `687c5d9081f373166a06c2f18e7f634f9a0ff44b`). *"Update unix socket transport to use WebSocket upgrade."* Switches the Unix-socket app-server transport to the standard WebSocket HTTP Upgrade handshake. The framing change is invisible to the contract surface but **changes how out-of-band intermediaries (proxies, sniffers, recorders) see the stream** — anything that was parsing raw socket bytes now sees a real WebSocket frame. Synthesis #34 sibling: a transport that *was* "raw bytes through a Unix socket" silently becomes "WebSocket upgrade through a Unix socket" without a config-flag opt-out for callers expecting the old shape.
- **[openai/codex#19170]** — MERGED 20:21Z (commit `7262c0c450f2705f84e54356519f1077b27ca293`, head `85510fc792ac2305becdcec54e4c1b4c7b16d2ce`). *"Skip disabled rows in selection menu numbering and default focus."* TUI selection menus stop counting disabled rows in numeric labels and stop landing default focus on them. UX correctness fix; synthesis #29 (error-message-vs-actionable-error) shape — the disabled rows *were* getting numeric shortcuts that produced no-ops with no error message.
- **[openai/codex#19435]** (OPEN, 20:21Z, head `f4976eeac19b4ae46978b0bb5588d4c02d2fc724`) — *"[codex] Allow manual unified_exec opt-in on Windows."* Removes a Windows-specific environment-variable gate that prevented sandboxed Windows sessions from selecting `unified_exec`. The fix also normalizes a model-provided `shell_type = unified_exec` *down* to `shell_command` when the feature is disabled. **Two parity violations against macOS/Linux in one PR**: (1) the env-var gate was hard-coded only on Windows; (2) the model-provided `shell_type` declaration was being honored on Mac/Linux but silently downgraded on Windows. **Anchor exhibit for synthesis #33.**
- **[openai/codex#19211]** (OPEN, 20:18Z, head `1f079fe28fdf57e5981cb732aa46c4436fee3ba5`) — *"Improve Windows process management edge cases."* Six discrete Windows-only fixes: (1) bound the elevated runner pipe-connect handshake (it could block forever); (2) terminate the spawned runner if the handshake fails (timeout left orphan `codex-command-runner.exe` processes); (3) loop on partial `WriteFile` for stdin forwarding (single-write assumption silently truncated input); (4) fix HANDLE/SID cleanup leak paths; (5) keep draining driver-backed stdout/stderr after exit (200ms grace was dropping tails); (6) reuse `LocalSid` for SID ownership. **All six are silent-data-loss / silent-orphan / silent-truncation bugs that the macOS+Linux paths had already addressed.** Synthesis #33 anchor exhibit. Synthesis #34 sibling on the stdin truncation and stdout tail-drop subitems.
- **[openai/codex#19431]** (OPEN, 20:08Z, head `f047565e00ead4d4c910a07b4cd562637f6e205a`) — *"Route opted-in MCP elicitations through Guardian."* Adds a generic elicitation-reviewer hook in `codex-mcp` so MCP elicitations (e.g. Browser-Use origin-access prompts) can route through the Guardian approval path when the turn opts in via `_meta.codex_approval_reviewer = "guardian"`. **Synthesis #32 sibling**: pre-fix the *advertised* "Guardian gates approval" surface did not include MCP elicitations at all — they bypassed Guardian silently. The fix is opt-in only, so any caller depending on Guardian for full coverage still has the gap by default.
- **[openai/codex#19432]** (OPEN, 20:13Z) — *"Add token usage to turn tracing spans."* Telemetry enrichment.
- **[openai/codex#19424]** (OPEN, refreshed 20:19Z) — sandbox-defaults schema-strip PR rebased *yet again* (now ≥5th rebase today). Synthesis #20 (patch-PR-graveyard) and #32 still apply.
- **[openai/codex#19414, #19395, #19394, #19393, #19392, #19391]** (all OPEN, 20:19Z) — the **permissions migration train rebased again**, all six profile-backed PRs in lockstep. The train is now 8 PRs deep (counting #19395 and the schema-strip auxiliaries) with cumulative rebases >18 today and zero merges. Synthesis #15 (sync-debt-as-merge-main-PR) compounds; the train is increasingly difficult to land atomically.
- **[openai/codex#19436]** (OPEN, 20:23Z) — *"chore(ci) Build a release of codex-app-server."* CI plumbing.
- **[openai/codex#19068, #19098, #19047, #19234, #19160, #18919, #18704, #18595, #18576, #18575, #18595, #18704]** — assorted long-open PRs refreshed (TUI mentions, skill paths, external task refs, log DB sink, apply_patch parser, app-server typed responses, /plugins marketplace, vim composer, scrollback reflow). No narrative shifts.

### BerriAI/litellm: a caching-type-coercion bug, a streaming-guardrail-log-drop, a Vertex embedContent dispatcher gap, plus a vulnerable-deps bump

- **[BerriAI/litellm#26446]** (OPEN, 20:10Z, head `bcf084ad84300e450ef3fab92933d85d7ae8e9c2`) — *"fix(caching): handle list-based responses and message key variations."* Two distinct silent-failure modes: (1) `QdrantSemanticCache.add_cache` raised `TypeError: can only concatenate str (not "list") to str` whenever a response was list-shaped, *swallowed inside the cache layer* — the model call still succeeded, but the cache layer silently failed to store it, costing every future identical request a real round-trip; (2) some callers passed `message=` (singular) instead of `messages=` (plural) and the cache key derivation silently produced a different hash, missing the cache. **Synthesis #34 anchor exhibit** — the cache layer dropped data on two independent paths with no signal to the caller.
- **[BerriAI/litellm#26448]** (OPEN, 20:19Z, head `e6fdf5a17317443d05c2ea9b9207430446d659b1`) — *"fix(content_filter): log guardrail_information on streaming post-call."* `ContentFilterGuardrail.async_post_call_streaming_iterator_hook` correctly *processed* streaming chunks but never called `_log_guardrail_information(...)` at stream end, so the SpendLogs row's `metadata.guardrail_information` was empty for every streaming post-call run. The non-streaming path was unaffected because `apply_guardrail`'s `finally` block wrote the entry. **Out-of-scope note in the PR**: the same gap exists in `AimGuardrail` and `_OPTIONAL_PresidioPIIMasking` and was not fixed. Synthesis #34 anchor exhibit (stream path silently drops the log emission that the non-stream path always wrote). Also a synthesis #25 (non-interactive-surfaces-are-second-class) sibling — streaming is the second-class surface.
- **[BerriAI/litellm#26146]** (OPEN, 20:28Z, head `98349ff454d27064c4baa8e524083492a6923acb`) — *"fix(vertex passthrough): log :embedContent and :batchEmbedContents responses."* The dispatcher in `VertexPassthroughLoggingHandler.vertex_passthrough_handler` matched `generateContent`, `predict`, `rawPredict`, `search`, `batchPredictionJobs` — but **not `embedContent`**. Requests to `:embedContent` fell through to the `else` branch which returned `result=None`, so no success callbacks fired, no spend was tracked, and `LiteLLM_SpendLogs` got `model=unknown, spend=0, total_tokens=0` for every newer Gemini embedding model (gemini-embedding-001, gemini-embedding-2-preview). Synthesis #34 anchor exhibit. The PR shows before/after spend-log proof.
- **[BerriAI/litellm#26122]** (OPEN, 20:28Z, head `619c0cb3d946697d37216e87794686236d1afe0f`) — *"fix(ollama): forward tool_calls and tool_call_id in transform_request."* `transform_request` translated `tool_calls` on assistant messages into `OllamaToolCall` format **but never copied them into the outgoing `OllamaChatCompletionMessage`** — Ollama received `{role: assistant, content: ''}` with no `tool_calls`, the model had no record of having made the call, and re-issued the same call on every turn (infinite loop). `tool_call_id` on `role: tool` messages was also silently dropped; Ollama uses it to resolve the tool function name from history. **Synthesis #34 anchor exhibit** — two adjacent fields silently dropped during a transformation, both producing infinite-loop / wrong-resolution behavior with no error path. Cross-references upstream `ollama/ollama#15719`.
- **[BerriAI/litellm#26447]** (OPEN, 20:31Z) — *"Newrelic."* Stub PR title; ignore.
- **[BerriAI/litellm#26451]** (OPEN, 20:30Z) — *"azure_sentinel_truncate Azure Sentinel truncation changes to comply w…"* Azure Sentinel logging — synthesis #34 sibling depending on the truncation semantics (silent vs raised).
- **[BerriAI/litellm#26449]** (OPEN, 20:25Z) — *"[Feat] Day-0 support for GPT-5.5 and GPT-5.5 Pro."* Catalog addition; synthesis #14/#24 territory if the param shape diverges from advertised.
- **[BerriAI/litellm#26390, #26401, #26360]** — assorted refreshes (guardrail param handling, verbose logger level, LLM-as-Judge guardrail). No narrative shifts.
- **[BerriAI/litellm#26354]** — CLOSED at 20:06Z. *"fix: remove duplicate typing import and apply three bug fixes."* Triple-purpose PR closed without merge; synthesis #20 (patch-PR-graveyard) sibling.
- **[BerriAI/litellm#26365]** — MERGED 20:03Z. *"chore(deps): bump vulnerable dependencies."* Quiet security maintenance; no narrative shift.
- **[BerriAI/litellm#26369]** — MERGED 20:01Z. *"chore(packaging): declare MIT license in litellm-proxy-extras metadata."* Packaging hygiene.
- **[BerriAI/litellm#23525]** — MERGED 20:09Z. *"fix: forward extra_headers to HuggingFace embedding API."* **Direct synthesis #34 sibling**: `extra_headers` was silently dropped on the HuggingFace embedding code path. Extra-header drop is the canonical "field present in input, gone in transformation" shape.

### anomalyco/opencode (the fork): an in-process auth fix, a tool-description token-budget refactor, a chat-runtime tool-call-id normalizer

- **[anomalyco/opencode#24205]** (OPEN, 20:06Z, head `d7921577b637f69d830452229de6dd10a725c645`) — *"fix(cli): authenticate run in-process server requests."* `opencode run` failed with `Error: Session not found` when `OPENCODE_SERVER_PASSWORD` was set: the in-process server applied `AuthMiddleware`, but the in-process SDK client did not send Basic Auth headers, so session creation returned no usable session data. **Synthesis #34 sibling** — the auth headers were silently absent on the in-process path while the `--attach` path correctly passed them. Two clients, one transport difference, no signal to the caller. Also synthesis #25 (the in-process path is the second-class surface).
- **[anomalyco/opencode#22612]** (OPEN, 20:09Z, head `dc6cfbc1b0a3306e67811080f38616bb71476296`) — *"fix(copilot): handle chat tool call ids."* Kimi/NVIDIA tool calls were going through the OpenAI-compatible chat runtime owned by the fork (not the generic `@ai-sdk/openai-compatible` path). That runtime threw `Expected 'id' to be a string.` when `tool_calls[].id` arrived as a number, or when the first streamed tool-call chunk omitted `id`. Fix: normalize numeric ids to strings, generate a stable fallback id when the first chunk omits one. **Synthesis #34 sibling on type-coercion drops** + synthesis #23 (reasoning-shape contract) on the streaming-vs-non-streaming asymmetry of the first-chunk id absence.
- **[anomalyco/opencode#24202]** (OPEN, 19:52Z) — *"refactor(opencode): condense tool descriptions ~66% to cut system-prompt tokens."* System-prompt size optimization. Notable because it makes the *advertised* tool surface (description text) narrower without changing the *accepted* surface — synthesis #32 mirror, but in the reverse direction (caller-visible advertisement narrows; runtime accept stays the same).
- **[anomalyco/opencode#24200]** (OPEN, 20:05Z) — DeepSeek V4 reasoning-content fix from prior window, refreshed.
- **[anomalyco/opencode#23557, #18767, #13854, #12822]** — assorted refreshes, no narrative shifts.
- **[anomalyco/opencode#1]** — MERGED 20:30Z. PR #1 in the fork's local repo, *"feat: compact and other improvements."* Fork-internal admin merge.

### OpenHands: a TaskToolSet sub-agent delegation PR refreshed; PostHog server-side migration refreshed

- **[OpenHands/OpenHands#14122]** (OPEN, 20:21Z) — *"feat: enable sub-agent delegation via TaskToolSet in app server."* New surface for sub-agent dispatch.
- **[OpenHands/OpenHands#14006]** (OPEN, 19:39Z) — *"feat: move PostHog server side."* Telemetry move.

### sst/opencode (upstream), charmbracelet/crush, ollama/ollama, Aider, modelcontextprotocol/servers: quiet

No PR activity 19:36Z → 20:32Z in those repos.

### Net narrative change since 19:36Z

1. **A silent-transformer-field-drop cluster crystallized** spanning litellm (#26122 ollama tool_calls, #26446 cache list/message-key, #26448 streaming guardrail log, #26146 vertex embedContent, #23525 HF extra_headers), anomalyco/opencode (#22612 chat-runtime tool-call ids, #24205 in-process auth headers, #24200 reasoning_content from prior window), and codex (#19211 Windows stdin truncation + stdout tail-drop). **Eight to ten exhibits across three repos in one tick.** All on the *same* shape: a value present in the caller's input or the upstream's response is dropped *during a translation/serialization/dispatch step* with no error path. New cross-repo synthesis **#34** below.
2. **A platform-parity-as-load-bearing-default cluster also crystallized** spanning codex (#19435 Windows unified_exec opt-in, #19211 Windows process mgmt 6-fix bundle, #19244 Unix-socket WebSocket upgrade transport change), anomalyco/opencode (#24205 in-process vs --attach auth divergence), and litellm (#26122 ollama-vs-other-provider transform divergence). Six exhibits, three repos, all on the same shape: a feature works correctly on the *primary* platform/transport/surface but the secondary one diverges silently. New cross-repo synthesis **#33** below.
3. **codex #19244 (Unix-socket WebSocket upgrade) merging** is a transport-shape change — recorder/sniffer code consuming the raw socket bytes will see WebSocket frames on next release with no opt-out flag.
4. **The codex permissions train rebased a 5th time** today across 6 PRs in lockstep with zero merges. Cumulative rebase count today crosses 18. Train depth: 8 PRs (6 permissions + #19424 schema-strip + #19170 menu-rendering side PR). Shipping risk now severe.
5. **litellm #26354 closed without merge** (triple-purpose PR rejected) — synthesis #20 (patch-PR-graveyard) gets a fresh sibling exhibit; the maintainer-rejection is consistent with the "isolated PRs only" merge policy.
6. **codex #19431 (MCP-elicitations-through-Guardian) is opt-in only** — by-default coverage gap remains, so synthesis #32 (advertised-vs-accepted validation surface) gets a fresh exhibit class: *the fix exists but the default state preserves the gap*.

Two new cross-repo syntheses below: **#33 (platform/transport-parity divergence as silent load-bearing default)** and **#34 (silent-transformer-field-drop in translation/serialization/dispatch layers)**. Next refresh after the next dispatcher tick.

---

## Refresh #N+2 — 2026-04-24T21:31Z (window 20:32Z → 21:31Z)

### openai/codex: a permissions-train PR LANDED, a thread-store migration train forming, GNU-Linux artifact channel sunset, and a stub PR titled "changes"

- **[openai/codex#19414]** — **MERGED 20:42Z**. *"permissions: make legacy profile conversion cwd-free."* The first PR off the long-stuck permissions train finally landed — head of train cleared. Train depth drops from 8 to 7. Synthesis #15 (sync-debt-as-merge-main-PR) gets a small relief, but the five sibling PRs (#19395, #19394, #19393, #19392, #19391) still lockstep-rebased at 20:45Z and remain open. Net: train is *still* deep, just one PR shorter.
- **[openai/codex#19445]** — **MERGED 21:29Z**. *"ci: stop publishing GNU Linux release artifacts."* Channel sunset for the GNU Linux release tarballs. **Synthesis #30 (default-flag-flip-as-breaking-change) anchor exhibit**: any downstream installer / package script that pulled from the GNU Linux artifact URL will silently start 404'ing on next release with no in-channel deprecation notice landed in this PR. Also a synthesis #14 (published-spec-lies-registry-drift) sibling — release docs that still say "supported targets: …, gnu-linux, …" are now lying.
- **[openai/codex#19447]** (OPEN, 21:30Z) — *"ci: publish codex-app-server release artifacts."* Companion to #19436 from the prior window — the app-server is being promoted to a first-class release artifact. Quiet but a surface expansion (new artifact channel == new contract surface).
- **[openai/codex#19443]** (OPEN, 21:30Z) — *"Add gpt-image-2 to bundled OpenAI Docs skill."* Catalog addition for the bundled docs skill. Synthesis #14/#24 (registry-drift / model-capability-catalog-drift) sibling — the bundled docs are *another* registry that has to be kept in sync with the live model catalog.
- **[openai/codex#19442]** (OPEN, 21:30Z) — *"changes."* Stub PR title — body unrevealed. Synthesis #20 (patch-PR-graveyard) candidate if it stays open.
- **[openai/codex#19422]** (OPEN, 21:21Z) — *"Clarify bundled OpenAI Docs upgrade guide wording."* Doc clarification on the upgrade guide; pairs with #19443 above on the bundled-docs skill.
- **[openai/codex#19280, #19266]** (OPEN, 21:23Z and 21:06Z) — *"Migrate thread turns list to thread store"* and *"add non-local thread store regression harness."*
- **[openai/codex#18900]** — **MERGED 20:51Z**. *"Migrate fork and resume reads to thread store."* These three PRs together form a **new emergent train**: thread-store migration (fork/resume reads + turns list + non-local regression harness). With #18900 already landed, the migration is partially in production while #19280/#19266 still queue. **Synthesis #19 (snapshot-vs-live-state) anchor exhibit forming** — fork/resume now reads from the thread store while turns-list still reads from the prior storage; for the duration of the gap, the two views diverge for in-progress sessions.
- **[openai/codex#18584]** (OPEN, 21:13Z) — *"[4/4] Honor Streamable HTTP MCP placement."* The `[4/4]` prefix signals an upstream 4-PR train where this is the tail. The other three are presumably already landed; if so, the contract surface is now *partially* expanded with the tail still gated behind review. Synthesis #21 (advertised-capability-vs-runtime-delivery) sibling.
- **[openai/codex#19234, #19160, #18919, #18575]** — assorted refreshes (log DB sink, apply_patch parser, app-server typed responses, scrollback reflow). No narrative shifts.
- **[openai/codex#19435, #19431, #19211]** — three of the prior-window anchor PRs (Windows unified_exec, MCP-elicitations-through-Guardian, Windows process mgmt 6-fix bundle) refreshed but not merged.
- **[openai/codex#15701]** — CLOSED 21:11Z. *"tui: add ephemeral /btw side-question threads."* Closed without merge after a long open period. Synthesis #20 (patch-PR-graveyard) sibling exhibit.

### BerriAI/litellm: the qdrant cache fix CLOSED and a replacement PR opened, GPT-5.5 day-0 LANDED while pricing PR remains open, an enterprise refactor splitting management surfaces

- **[BerriAI/litellm#26446]** — **CLOSED 20:39Z** (without merge). *"fix(caching): handle list-based responses and message key variations …"* The synthesis-#34 anchor exhibit from the prior window was **closed without merge** within 7 minutes of the prior addendum. The bug is *not* withdrawn — it was reopened as #26453 below.
- **[BerriAI/litellm#26453]** (OPEN, 21:22Z) — *"Fix qdrant semantic cache."* Replacement PR for #26446. Same bug class (list-shaped responses raising `TypeError` swallowed inside the cache layer; `message=` vs `messages=` key derivation). **Direct synthesis #20 (patch-PR-graveyard) exhibit**: the original PR was closed and reopened under a tighter scope, presumably because the original bundled too many concerns. Synthesis #34 (silent-transformer-field-drop) anchor *survives* — the bug is still on the table, just under a new PR number.
- **[BerriAI/litellm#26449]** — **MERGED 21:10Z**. *"[Feat] Day-0 support for GPT-5.5 and GPT-5.5 Pro."* Catalog addition landed for the OpenAI variants. **But [BerriAI/litellm#26361]** (OPEN, 21:00Z) — *"feat: add azure/gpt-5.5 to model cost map (mirror openai gpt-5.5 pricing)"* — the **Azure-side pricing mirror is still open**. **Synthesis #18 (version-skew-cli-vs-server) sibling and synthesis #33 (platform-transport-parity) sibling**: the OpenAI variant ships with full pricing on day 0; the Azure variant ships callable but with no pricing entry, so spend tracking will silently report `cost=0` for any azure/gpt-5.5 call until #26361 merges. The catalog says "supported"; the cost map says "no entry" — a synthesis #14 (published-spec-lies-registry-drift) sibling on the cost-map registry.
- **[BerriAI/litellm#26377]** — **MERGED 21:24Z**. *"fix(team_endpoints): auto-add SSO team members to org on move (proxy admin only)."* Auth fix scoped to proxy-admin actor. Synthesis #28 (admin-as-overscoped-actor) sibling — the fix narrows the actor surface (proxy admin only) rather than the action surface (the move itself remains overscoped if other actors trigger it).
- **[BerriAI/litellm#26455]** (OPEN, 21:30Z) — *"feat: per-model team member budgets."* New surface for budget granularity; pairs with the per-team budget surface that landed earlier in the week. Synthesis #16 (accepted-but-unpropagated) candidate if the per-model budget is accepted at the team layer but not enforced at the request-routing layer — worth watching as the PR matures.
- **[BerriAI/litellm#26454]** (OPEN, 21:25Z) — *"[Infra] Remove docs/my-website, point contributors to litellm-docs repo."* Docs migration. Synthesis #14 (published-spec-lies-registry-drift) sibling — until contributor PRs stop landing in the deleted path, contribution-routing instructions are stale.
- **[BerriAI/litellm#26452]** (OPEN, 20:43Z) — *"fix(ci): support CircleCI rerun failed tests for local_testing jobs."* CI plumbing.
- **[BerriAI/litellm#26442]** (OPEN, 20:40Z) — *"feat: restrict org admins from creating keys, teams, models via UI settings."* **Direct synthesis #28 (admin-as-overscoped-actor) anchor exhibit**: org-admin role currently has unrestricted create permissions on keys/teams/models via the UI; this PR restricts that surface. Pre-fix the role was *overscoped by default*; the fix narrows it.
- **[BerriAI/litellm#26438]** (OPEN, 20:40Z) — *"fix(jwt-auth): apply team TPM/RPM + attribution for admins using x-litellm-team-id."* Adjacent to #26442. The `x-litellm-team-id` header was *accepted* by the JWT auth path for admin actors but TPM/RPM limits and spend attribution were *not propagated* — admin actors using team-id impersonation got effectively unlimited budget and no attribution. **Direct synthesis #16 (accepted-but-unpropagated) anchor exhibit** + **synthesis #28 (admin-as-overscoped-actor) sibling**.
- **[BerriAI/litellm#26418]** (OPEN, 21:22Z) — *"fix(proxy): single-team DB fallback when JWT has no team_id."* Closes a JWT-edge-case where a missing `team_id` claim caused a hard error instead of a sane fallback to the single-team setup that exists in the DB. Synthesis #29 (error-message-vs-actionable-error) sibling.
- **[BerriAI/litellm#25677]** (OPEN, 21:16Z) — *"[Refactor] Proxy: move projects management to enterprise package."* Package-boundary refactor moving projects-management out of the OSS surface into the enterprise package. **Synthesis #22 (privilege-by-exclusion) anchor exhibit class**: features migrate *out* of the OSS surface into the paid surface, which is the inverse-direction of synthesis #14 (catalog says X exists; runtime says X is paywalled).
- **[BerriAI/litellm#22011]** — CLOSED 20:51Z (without merge). *"[Feat]: Add GradientAI tool calling support."* Long-open feature PR closed without merge. Synthesis #20 (patch-PR-graveyard) sibling.
- **[BerriAI/litellm#26451, #26447, #26146]** — refreshes of prior-window PRs (Azure Sentinel truncate, Newrelic stub, Vertex embedContent dispatcher). No narrative shifts; the Vertex embedContent fix continues to wait.

### anomalyco/opencode (the fork): two synthesis-#34 anchor exhibits CLOSED, an auth-middleware refactor LANDED, a /context command surface added

- **[anomalyco/opencode#22612]** — **CLOSED 21:21Z** (without merge). *"handle chat tool call ids."* The synthesis-#34 sibling exhibit on numeric tool-call-id coercion + missing first-chunk id was closed without merge. Bug is *not* withdrawn — the fork's chat runtime still throws `Expected 'id' to be a string.` on the affected providers.
- **[anomalyco/opencode#24200]** — **CLOSED 21:23Z** (without merge). *"fix: preserve empty reasoning_content for DeepSeek V4 in non-streaming and streaming paths."* The DeepSeek V4 reasoning_content drop fix was also closed without merge. **Two synthesis-#34 sibling exhibits closed in the same hour** — fork is *not* landing the silent-drop fixes. This compounds the cross-repo synthesis-#34 picture: the *upstream* (litellm, codex) is shipping the silent-transformer-drop fixes; the *fork* is *closing* them. Synthesis #20 (patch-PR-graveyard) gets two fresh fork-side exhibits.
- **[anomalyco/opencode#24168]** — **MERGED 21:11Z**. *"Refactor HttpApi auth middleware wiring."* Auth middleware refactor landed. **Direct sibling to the still-open #24205** (`fix(cli): authenticate run in-process server requests`) from the prior window — the auth-middleware wiring is being restructured *while* the in-process auth fix is still open. Risk: #24205 will need a non-trivial rebase against #24168's new wiring before it can land. Synthesis #15 (sync-debt-as-merge-main-PR) sibling forming for #24205.
- **[anomalyco/opencode#24169]** — **MERGED 21:11Z**. *"refactor(schema): decode effect schemas directly."* Schema decoder refactor landed alongside the auth middleware refactor. Two refactors in the same minute is unusual; suggests a coordinated landing.
- **[anomalyco/opencode#24210]** (OPEN, 21:24Z) — *"feat(opencode): add /context command."* New TUI command surface. Synthesis #32 (advertised-vs-accepted-validation-surface) candidate depending on which contexts the command actually accepts vs. the autocompletion list.
- **[anomalyco/opencode#24047]** — CLOSED 20:55Z. *"docs: add agent architecture audit guide."* Docs PR closed without merge.
- **[anomalyco/opencode#22140, #21722, #18767, #13854]** — assorted long-open PRs refreshed; no narrative shifts.

### ollama/ollama: a desktop-app-startup-vs-CLI-session conflict

- **[ollama/ollama#15657]** (OPEN, 21:19Z) — *"app/server: fix desktop app startup killing active `ollama launch` sessions."* The desktop app's startup sequence was unconditionally calling `kill` on any existing `ollama` server process to claim the port — including processes started by `ollama launch` from the CLI. CLI sessions died with no warning at desktop-app startup. **Direct synthesis #33 (platform-transport-parity-as-load-bearing-default) anchor exhibit**: the desktop surface assumed it was the *only* writer to the server-process slot; the CLI `launch` surface assumed long-lived ownership. **Synthesis #26 (concurrent-write-contracts-assumed-single-writer) anchor exhibit** — two clients, one resource (the server PID slot), no coordination protocol. Fix: the desktop app now checks for an existing CLI-launched session and does not kill it.

### sst/opencode, charmbracelet/crush, OpenHands, Aider, modelcontextprotocol/servers: quiet

`sst/opencode` and `All-Hands-AI/OpenHands` returned `Invalid search query` from `gh search prs` (likely a transient gh-api issue with those repos this tick — logged, will recover next tick). `charmbracelet/crush` and `Aider-AI/aider` returned empty result sets. No narrative loss — none of those repos had high-velocity PR activity in the prior tick.

### Net narrative change since 20:32Z

1. **The codex permissions train shed its first PR**: #19414 MERGED. Train depth 8 → 7. The five sibling PRs lockstep-rebased at 20:45Z and remain open. Synthesis #15 still applies but the leak rate has eased fractionally.
2. **A new codex thread-store migration train is forming**: #18900 MERGED, #19280 + #19266 OPEN. With one PR landed and two still queued, the runtime is now in a *split* state — fork/resume reads from the new store while turns-list still reads from the old one. **Direct synthesis #19 (snapshot-vs-live-state) anchor exhibit**: divergent reads against the same logical entity, mid-migration.
3. **The litellm caching anchor exhibit closed and reopened**: #26446 CLOSED → #26453 OPEN within the same hour. Synthesis #34 anchor *survives* under a new PR number, synthesis #20 gets a fresh sibling.
4. **The fork closed two synthesis-#34 sibling exhibits without merge**: anomalyco/opencode #22612 (chat tool-call ids) and #24200 (DeepSeek V4 reasoning_content). The upstream is fixing silent-transformer-drop bugs; the fork is *closing* them. **Asymmetric remediation across the dependency graph** — a new pattern to watch.
5. **GPT-5.5 day-0 landed in litellm (#26449) but the Azure cost-map mirror (#26361) did not**. Catalog says supported; cost map says `cost=0`. Fresh synthesis #14 + synthesis #18 sibling. Spend tracking will silently under-report for any azure/gpt-5.5 call until #26361 merges.
6. **codex GNU Linux release artifact channel sunset (#19445 MERGED)** with no in-channel deprecation notice in the PR body. Any installer / packaging script pulling from the GNU Linux artifact URL will start 404'ing silently on next release. **Synthesis #30 (default-flag-flip-as-breaking-change) anchor exhibit on a release-artifact channel** — a fresh class for that synthesis.
7. **ollama #15657 (desktop kills CLI sessions on startup)** — direct synthesis #26 + synthesis #33 anchor exhibit. Two writers, one PID slot, no protocol. The fix narrows the desktop's assumption rather than introducing a coordination mechanism — risk of regression if a third writer joins.
8. **litellm admin-actor surface getting narrowed** (#26442, #26438): two PRs in the same minute restricting org-admin scope and propagating attribution under team-id impersonation. **Synthesis #28 (admin-as-overscoped-actor) gets two fresh anchor exhibits in one tick** — the admin-overscope pattern is now a recurring W17 theme.
9. **anomalyco/opencode landed two refactors in the same minute** (#24168 auth middleware, #24169 schema decode) — coordinated landing. Pending sibling #24205 (in-process auth fix) now needs a rebase against the new auth wiring.

Two new W17 syntheses immediately below: **#35 (replacement-PR-after-close-as-scope-narrowing-tactic)** anchored on the litellm caching close→reopen pair plus the codex/anomalyco PR-graveyard exhibits, and **#36 (mid-migration-split-read-state)** anchored on the codex thread-store partial migration plus the litellm GPT-5.5 catalog-vs-cost split plus the codex GNU Linux artifact sunset. Next refresh after the next dispatcher tick.

---

## Addendum window 21:31Z → 22:32Z (2026-04-24)

> _LLM-generated. Click through every PR before acting. Citations are PR numbers + merge SHAs from gh API._

### openai/codex: a 5-PR test-stabilization burst, a `[codex-backend]` git-overlay surface, a remote-plugin uninstall API, the app-server release artifacts LANDED, and the legacy read-only permission modes deletion proposed

- **[openai/codex#19447]** — **MERGED 22:29Z**. *"ci: publish codex-app-server release artifacts."* The companion PR to #19445 (GNU Linux artifact channel sunset) — the codex-app-server is now a first-class release artifact. Direct synthesis #33 (platform-transport-parity-as-load-bearing-default) sibling: a new artifact channel opens 60min after an old one closed. Symmetric channel rotation in the same dispatcher tick.
- **[openai/codex#19457]** (OPEN, 22:30Z) — *"[codex-backend] Centralize thread git metadata overlays."* New backend surface for git-metadata overlays on threads. The `[codex-backend]` prefix signals a server-side surface that downstream clients (codex CLI, codex-app-server) will consume — synthesis #18 (version-skew-cli-vs-server) candidate as it matures.
- **[openai/codex#19456]** (OPEN, 22:29Z) — *"Add remote plugin uninstall API."* Companion to the still-open install API surface. **Synthesis #21 (advertised-capability-vs-runtime-delivery) candidate**: install-uninstall asymmetry is a classic gap class — uninstall lands without install validation, install lands without uninstall semantics, etc.
- **[openai/codex#19455]** (OPEN, 22:26Z) — *"Add gRPC feedback log sink."* New telemetry surface. Feedback-log channel additions are synthesis #14 (registry drift) candidates if the catalog of "where logs go" is not updated in parallel.
- **[openai/codex#19454, #19453, #19452]** (all OPEN, 22:05Z–22:11Z) — *"Split approval matrix test groups"*, *"Serialize legacy Windows PowerShell sandbox tests"*, *"Stabilize plugin MCP fixture tests."* **Three test-stabilization PRs in 6 minutes.** Test-burst pattern: the codebase is shedding test flakiness as a coordinated effort, presumably blocking the permissions train (#19449/#19395/#19394/#19393/#19392/#19391) or the thread-store train (#19280/#19266) from landing. Synthesis #25 (non-interactive-surfaces-are-second-class) sibling: CI is a non-interactive surface that has accumulated debt while the interactive paths shipped.
- **[openai/codex#19449]** (OPEN, 22:03Z) — *"permissions: remove legacy read-only access modes."* **Direct synthesis #30 (default-flag-flip-as-breaking-change) anchor exhibit**: removes legacy read-only access modes from the permissions surface — any caller still constructing those modes will break at parse time. Pairs with the still-open permissions train (#19395 etc.) and with the just-merged #19414 (cwd-free legacy profile conversion) — the permissions subsystem is now mid-stride on *three* simultaneous changes.
- **[openai/codex#19432]** (OPEN, 22:29Z) — *"[codex] Add token usage to turn tracing spans."* Tracing-span enrichment. Quiet but adds a new field to the trace contract — synthesis #16 (accepted-but-unpropagated) candidate if downstream tracing consumers are not updated to honor the new field.
- **[openai/codex#19443]** — **MERGED 21:48Z**. *"Add gpt-image-2 to bundled OpenAI Docs skill."* Catalog addition landed — the bundled-docs skill now lists gpt-image-2. Pairs with the still-open #19422 (upgrade-guide wording clarification) — catalog landed before docs clarified, so the catalog says gpt-image-2 exists while the upgrade guide is silent on how to migrate to it. Synthesis #14 (published-spec-lies-registry-drift) sibling on the upgrade-guide registry.

### BerriAI/litellm: a triple Azure-side GPT-5.5 catch-up burst (#26458 + #26456 + #26459), an enterprise license declaration, four PRs touched in the last 8 minutes

- **[BerriAI/litellm#26458]** (OPEN, 22:14Z) — *"[Feat] Add azure/gpt-5.5 + azure/gpt-5.5-pro entries (+ dated variants)."* **The Azure-side catalog entries arrive.** Companion to #26361 (still open: cost-map mirror) and #26456 below. **Direct synthesis #18 (version-skew-cli-vs-server) anchor exhibit**: at 21:10Z the OpenAI variants shipped (#26449); at 22:14Z the Azure catalog opens; at 22:09Z the Azure reasoning_effort flags open (#26456); the Azure cost-map (#26361) remains pending. **Four-PR Azure catch-up train forming**, synthesis #36 (mid-migration-split-read-state) sibling.
- **[BerriAI/litellm#26456]** (OPEN, 22:09Z) — *"[Fix] gpt-5.5 reasoning_effort capability flags + add supports_low_reasoning_effort."* Capability-flag addition for gpt-5.5. **Direct synthesis #21 (advertised-capability-vs-runtime-delivery) anchor exhibit**: gpt-5.5 has been callable since #26449 landed at 21:10Z, but the `supports_low_reasoning_effort` capability flag was *missing* from the catalog — clients querying capability would see "no" for a model that in fact supports it. Synthesis #24 (model-capability-catalog-drift) anchor sibling.
- **[BerriAI/litellm#26459]** (OPEN, 22:24Z) — *"[Fix] Reseed enforcement read path from DB on counter miss."* TPM/RPM enforcement bug: when an in-memory counter misses (e.g., process restart, key eviction), the enforcement read path was returning a hard zero instead of reseeding from the DB. Direct synthesis #19 (snapshot-vs-live-state) sibling — the in-memory snapshot lied about the live DB state. **Synthesis #16 (accepted-but-unpropagated) sibling** — the enforcement decision was *accepted* (counter looked up) but *unpropagated* (DB-truth was not consulted on miss).
- **[BerriAI/litellm#26457]** (OPEN, 22:31Z) — *"[Infra] Declare proprietary license in litellm-enterprise metadata."* Package-metadata change declaring litellm-enterprise as proprietary. **Direct synthesis #22 (privilege-by-exclusion) anchor exhibit**: pairs with #25677 (still open: projects-management package-boundary move into enterprise). The enterprise package is being formally cordoned off — the OSS surface shrinks and the paid surface expands, with metadata now declaring the privilege boundary explicitly.
- **[BerriAI/litellm#26454]** — **MERGED 21:54Z**. *"[Infra] Remove docs/my-website, point contributors to litellm-docs repo."* Docs-migration LANDED. Synthesis #14 (published-spec-lies-registry-drift) sibling closed: contributor PRs landing in the deleted path will now hard-fail at the repo level rather than silently going to the wrong place. Resolution > deferral.
- **[BerriAI/litellm#26438]** (OPEN, refreshed 22:30Z) — same JWT-team-id-attribution PR from prior window, refreshed 1 minute ago. Lockstep-rebase signal — likely waiting on #26442 (org-admin restriction) to land first.

### anomalyco/opencode: a hono-bridge test landing, a session-event typecheck fix, an interleaved-reasoning auto-enable, an HttpApi route-inventory doc, gpt-5.5 OAuth context-size fix LANDED, ripgrep schemas migrated to Effect

- **[anomalyco/opencode#24216]** — **MERGED 22:03Z**. *"test(httpapi): cover hono bridge middleware."* Test coverage for the hono bridge middleware lands — directly downstream of #24168 (auth middleware refactor MERGED 21:11Z prior window). The auth middleware refactor that landed an hour ago now has hono-bridge regression coverage. Resolution velocity: 52 minutes from refactor to test.
- **[anomalyco/opencode#24220]** (OPEN, 22:25Z) — *"Fix session event typechecks and shell cwd."* Two fixes bundled: session-event typechecks + shell cwd handling. The shell-cwd half is a sibling exhibit to #24215 (still open: "Fix shell cwd after login startup") — **two open PRs touching the same shell-cwd surface in the same hour, no coordination signal in PR titles**. Synthesis #26 (concurrent-write-contracts-assumed-single-writer) sibling at the *PR* level — two reviewers, one surface, no protocol.
- **[anomalyco/opencode#24218]** (OPEN, 22:15Z) — *"fix(provider): auto-enable interleaved for reasoning models."* Provider config: reasoning-model class now auto-enables `interleaved` (interleaved tool-calls + reasoning chunks). **Direct synthesis #30 (default-flag-flip-as-breaking-change) candidate**: any consumer that explicitly disabled `interleaved` and relied on the prior non-interleaved default for a reasoning model will now see different chunk ordering. Pre-fix: opt-in to interleaved. Post-fix: opt-in to non-interleaved.
- **[anomalyco/opencode#24219]** (OPEN, 22:15Z) — *"docs(effect): add generated http route inventory."* Generated route-inventory docs added. Synthesis #14 (published-spec-lies-registry-drift) sibling closed proactively: the route inventory now ships generated, so the doc cannot drift from the live route table.
- **[anomalyco/opencode#24213]** — **MERGED 21:42Z**. *"refactor(ripgrep): migrate result schemas to effect."* Schema-decoder migration continues — pairs with #24169 from the prior window (decode effect schemas directly MERGED 21:11Z). Two Effect-schema migration PRs in 31 minutes — coordinated.
- **[anomalyco/opencode#24212]** — **MERGED 21:39Z**. *"fix: ensure gpt-5.5 compacts at correct context size when using openai oauth."* gpt-5.5 context-size fix specifically for the OpenAI OAuth path. **Direct synthesis #18 (version-skew-cli-vs-server) anchor exhibit**: the gpt-5.5 model launched with day-0 support across litellm (#26449) and the catalog spread to clients quickly, but each client had its *own* context-size compaction logic — and the OpenAI-OAuth path in the fork was using the wrong threshold. Catalog-wide model launches now require N-client-side context-size patches downstream.
- **[anomalyco/opencode#24211]** — **MERGED 21:36Z**. *"Clarify HttpApi migration plan."* Docs PR clarifying the HttpApi migration plan — meta-doc on the multi-PR train that includes #24168, #24169, #24213, #24216. The maintainer is *publishing* the migration plan now that 4 of its constituent PRs have landed. **Synthesis #36 (mid-migration-split-read-state) sibling**: docs-after-the-fact is a downstream symptom of mid-migration split state — the plan is published *after* the runtime is already split.
- **[anomalyco/opencode#24222]** (OPEN, 22:30Z) — *"fix permission config order."* Permission-config ordering fix. Synthesis #16 (accepted-but-unpropagated) candidate if config ordering affects which permission entries actually take effect when keys repeat.

### ollama/ollama: an MLX bump, a desktop-vs-CLI startup conflict, a launch model-metadata catalog reopen

- **[ollama/ollama#15795]** (OPEN, 14:19Z, refreshed in window) — *"launch: add codex model metadata catalog."* Reopen of #15779 (CLOSED 14:19Z) — direct synthesis #35 (replacement-PR-after-close-as-scope-narrowing-tactic) anchor exhibit forming on the ollama side. The original closed and a replacement opened *minutes* later.
- **[ollama/ollama#15793]** (OPEN, 13:15Z) — *"mlx: update to 0.31.2."* MLX version bump. Synthesis #18 (version-skew-cli-vs-server) sibling — runner-side MLX version vs. catalog-side MLX expectations.
- **[ollama/ollama#15789]** — **MERGED 09:49Z**. *"openai: map responses reasoning effort to think."* The OpenAI-responses `reasoning_effort` field is now mapped to the internal `think` field. **Direct synthesis #34 (silent-transformer-field-drop) anchor exhibit closed proactively** — without this PR, `reasoning_effort` would have silently dropped on the OpenAI-responses → think translation.
- **[ollama/ollama#15787]** — **MERGED 08:49Z**. *"api: accept 'max' as a think value."* New accepted value on the `think` field. Synthesis #32 (advertised-vs-accepted-validation-surface) sibling — the validation surface widens to accept "max"; clients that hard-coded the prior enumeration will need to update.

### charmbracelet/crush: a hyper re-auth fix LANDED, a "super yollo" feat, a SQLite-NOTADB cap-to-one-writer fix proposed, a workspace-edit boundary enforcement

- **[charmbracelet/crush#2703]** — **MERGED 14:27Z**. *"fix(hyper): fix re-authorization flow not triggering on certain conditions."* Hyper re-auth flow fix — synthesis #16 (accepted-but-unpropagated) sibling: re-auth was *accepted* by the auth check but the trigger condition was *unpropagated* in certain code paths.
- **[charmbracelet/crush#2702]** (OPEN, 17:20Z) — *"feat: super yollo."* Stub PR title — body unrevealed. Synthesis #20 (patch-PR-graveyard) candidate if it stays open.
- **[charmbracelet/crush#2700]** — **MERGED 12:40Z**. *"fix(agent): implement OnRetry logging with structured retry fields."* Adds structured retry-fields to the OnRetry logger. **Direct synthesis #29 (error-message-vs-actionable-error) anchor exhibit closed proactively** — retries previously logged unstructured.
- **[charmbracelet/crush#2699]** (OPEN, 10:26Z) — *"fix(lsp): enforce workspace boundary for workspace edits."* LSP workspace-boundary enforcement: workspace edits could previously land *outside* the configured workspace root. **Direct synthesis #22 (privilege-by-exclusion) anchor exhibit** — the edit surface was implicitly privileged to write anywhere; this PR narrows it to the workspace.
- **[charmbracelet/crush#2691]** + **[#2690]** (both OPEN, 18:39Z and 18:09Z) — *"fix(db): cap SQLite pool to one writer to prevent NOTADB corruption"* and *"fix(db): prevent SQLITE_NOTADB corruption under concurrent sub-agents."* **Two PRs targeting the same NOTADB-under-concurrent-sub-agents bug class.** Direct **synthesis #26 (concurrent-write-contracts-assumed-single-writer) anchor exhibit** — SQLite assumed single-writer, the sub-agent runtime pretended otherwise, and the DB file got corrupted. Two PRs in 30 minutes both proposing fixes — synthesis #20 candidate if one closes without merge.
- **[charmbracelet/crush#2694]** (OPEN, 10:36Z) — *"fix(skills): deduplicate skills discovered via symlinked directories."* Skills loader was double-counting symlinked skill directories. Synthesis #14 (published-spec-lies-registry-drift) sibling — the discovered-skills registry was double-listing the same logical skill.
- **[charmbracelet/crush#2693]** (OPEN, 01:46Z) — *"fix(mcp): expand environment variables in stdio MCP server args."* Env-var expansion in MCP stdio args — synthesis #32 (advertised-vs-accepted-validation-surface) sibling: `${VAR}` is *advertised* in config docs but was not *accepted* by the parser.

### Net narrative change since 21:31Z

1. **codex test-stabilization burst (#19452, #19453, #19454) in 6 minutes** — three flaky test groups being parallelized/stabilized at once. Suggests CI is currently the gating constraint on the permissions train and the thread-store train.
2. **codex permissions train shifts shape**: #19449 proposes *removing* legacy read-only access modes — a *deletion* PR added to the train that already has 6+ open mutation PRs. Train is no longer monotonic in scope; some PRs add capabilities, others remove them. Risk: rebase order matters.
3. **codex symmetric channel rotation in one tick**: #19445 closed GNU Linux artifact channel at 21:29Z, #19447 opened codex-app-server artifact channel at 22:29Z. Net release-channel surface count unchanged; surface composition rotated.
4. **litellm Azure-side GPT-5.5 catch-up train materialized** (#26458 catalog + #26456 capability flags + #26459 enforcement reseed + still-open #26361 cost map): four PRs in flight to close the OpenAI-vs-Azure parity gap that opened at 21:10Z when the OpenAI variants shipped.
5. **litellm enterprise package boundary explicitly declared** (#26457 license metadata) — pairs with #25677 (projects-management move). Privilege-by-exclusion (synthesis #22) is now metadata-declared, not just structurally implied.
6. **anomalyco/opencode HttpApi migration train completes a docs+test cycle**: #24216 (test) lands at 22:03Z; #24211 (migration plan docs) lands at 21:36Z; #24213 (ripgrep schemas migrated) lands at 21:42Z. Three PRs landing in 30 minutes; the maintainer is closing out the train.
7. **anomalyco/opencode shell-cwd surface getting two concurrent fixes** (#24215 + #24220 both OPEN). Synthesis #26 sibling at PR-coordination level.
8. **anomalyco/opencode interleaved-reasoning default flip** (#24218): default-flag flip class. Synthesis #30 sibling.
9. **crush SQLite single-writer assumption broken under sub-agents** (#2690 + #2691). Synthesis #26 anchor exhibit class — the sub-agent runtime is a new concurrent writer that wasn't in the original mental model.
10. **ollama #15795 reopens #15779** (launch model-metadata catalog) — synthesis #35 (replacement-PR-after-close-as-scope-narrowing) anchor exhibit on the ollama side, complementing the litellm #26446→#26453 pair.

Two new W17 syntheses in `_weekly/` for this tick: **#37 (deletion-PR-injected-into-additive-train)** anchored on codex #19449 + crush #2699 + litellm #26454 + anomalyco/opencode #24218 + the codex permissions train context, and **#38 (capability-flag-vs-callability-skew)** anchored on litellm #26456 + #26449 + codex #19443 + anomalyco/opencode #24212 + crush #2703 + ollama #15787.

## Addendum window 22:32Z → 22:50Z (2026-04-24)

Short 18-minute sweep. Two W17 catch-up windows that were named in the prior tick **closed mid-window** (codex gpt-image-2 docs at 22:35Z; thread-store regression harness at 22:45Z), one W17 anchor PR **closed unmerged as a duplicate** (litellm #26458 → folded into #26361 at 22:41Z), one **new dual-tool-surface PR** appears on the anomalyco/opencode side (#23794 — `terminal` tool alongside the existing `bash` tool), and the codex test-stabilization burst (#19452/#19453/#19454) plus the thread-store train (#19280/#19266) both received fresh commits inside this window. Also: codex #19459 lands a *default-flag flip* on the experimental `unavailable_dummy_tools` feature — promotion from opt-in to default, synthesis #30 sibling. ollama and charmbracelet/crush had **no PR activity** in this window (last cuts: ollama `v0.21.3-rc0` at 12:15Z; crush `v0.62.1` at 20:28Z).

### openai/codex: a catch-up window closes (#19422 MERGED), the thread-store harness lands (#19266 MERGED), Codex Apps tool-call ID propagation lands (#19207), skill-path aliasing lands (#19098), a default-flag flip arrives (#19459)

- **[openai/codex#19422]** — **MERGED 22:35Z**. *"Clarify bundled OpenAI Docs upgrade guide wording."* **Direct synthesis #38 (capability-flag-vs-callability-skew) catch-up window CLOSES**: at 21:48Z the catalog (#19443) shipped gpt-image-2; at 22:35Z the upgrade-guide wording lands. Catch-up window: **47 minutes**. The exhibit moves from "open #38" to "resolved #38" — fastest documented closure of the W17 #38 cohort. Pairs with litellm #26456 (still open at 22:36Z, so the litellm GPT-5.5 capability-flag window remains open at >86min — already 2× the codex window).
- **[openai/codex#19266]** — **MERGED 22:45Z**. *"[codex] add non-local thread store regression harness."* The regression harness for the thread-store migration (#19280 still open) landed before #19280 itself. **Synthesis #36 (mid-migration-split-read-state) sibling**: the *test* for the not-yet-landed migration is in main; the *migration* it tests is still open. Any developer running the harness against current main will see the harness exercise the *old* split-read state, not the migrated state — a regression *for* a state that doesn't exist yet on main.
- **[openai/codex#19207]** — **MERGED 22:49Z**. *"[codex] Forward Codex Apps tool call IDs to backend metadata."* Tool-call IDs from the Codex Apps surface now propagate into backend metadata. **Synthesis #16 (accepted-but-unpropagated) sibling closed**: tool-call IDs were *accepted* by the Codex Apps tool path but *unpropagated* to the backend metadata layer — making cross-surface tracing impossible. Pairs with #19432 (still open: token-usage in turn tracing spans, refreshed 22:46Z) — the tracing-contract surface is being widened on two PRs in parallel.
- **[openai/codex#19098]** — **MERGED 22:49Z**. *"feat: Compress skill paths with root aliases."* Skill-path metadata budget was being blown by absolute paths; this introduces root aliases so skill lists fit. **Synthesis #14 (published-spec-lies-registry-drift) sibling**: the published skill registry was effectively *truncated* by metadata-budget pressure, so model-visible skill lists drifted from the loader's actual catalog. Resolution: aliasing rather than budget bump.
- **[openai/codex#19459]** (OPEN, 22:43Z) — *"Enable unavailable dummy tools by default."* Promotes `unavailable_dummy_tools` from opt-in feature flag to default-on. **Direct synthesis #30 (default-flag-flip-as-breaking-change) anchor exhibit**: any caller that explicitly disabled `unavailable_dummy_tools` and depended on the prior absent-tool-shape will see the dummy tool in the registry post-merge. Pre-flip: opt-in to dummies. Post-flip: opt-in to no-dummies.
- **[openai/codex#19458]** (OPEN, 22:42Z) — *"Simplify Codex Library file hooks."* Walks back the local-dev routing and alternate base-url handling that had crept into `codex-api/src/files.rs`, narrowing the Library-specific path to the `store_in_library=true` branch. **Synthesis #22 (privilege-by-exclusion) sibling**: the Library file-upload surface was implicitly privileged with local-dev routing affordances; this PR removes those affordances from the non-Library path. Scope-narrowing follow-up to a prior over-broad surface.
- **[openai/codex#19454, #19453, #19452]** (all OPEN, refreshed 22:37Z) — same test-stabilization triple from the prior window, fresh commits in this tick. The triple is now ≥40min old without a merge — synthesis #20 (patch-PR-graveyard) candidate if any of the three sit past one more cycle.
- **[openai/codex#19432]** (OPEN, 22:46Z) — *"[codex] Add token usage to turn tracing spans."* Refreshed in window. Pairs with #19207 (tool-call IDs) as the second tracing-contract widening PR live this hour.
- **[openai/codex#19280]** (OPEN, 22:45Z) — *"[codex] Migrate thread turns list to thread store."* Refreshed in window. The thread-store migration mainline; #19266 (harness) just landed without the migration itself. Synthesis #36 active.
- **[openai/codex#18446]** (OPEN, 22:48Z) — *"Reserve missing preserved paths in Linux sandbox policy."* Refreshed in window. Sandbox-policy preservation gap. Synthesis #22 sibling.
- **[openai/codex#18077]** (OPEN, 22:40Z) — *"Add goal TUI UX (5 / 5)."* Final PR of the goal-TUI 5-PR train; refreshed in window.

### BerriAI/litellm: a duplicate Azure GPT-5.5 PR CLOSES (#26458 → folded into #26361), the capability-flag PR remains open (#26456), an ollama tool_call forwarding fix surfaces (#26122), invitation-email UI toggle PR refreshed (#25808)

- **[BerriAI/litellm#26458]** — **CLOSED unmerged 22:41Z**. *"[Feat] Add azure/gpt-5.5 + azure/gpt-5.5-pro entries (+ dated variants)."* **Closed as duplicate of #26361** (which was renamed to the same title in this window — see below). **Direct synthesis #35 (replacement-PR-after-close-as-scope-narrowing-tactic) anchor exhibit, inverted direction**: in the canonical #35 case, the older PR closes and a *newer narrower* PR opens. Here the *newer* PR (#26458, opened 22:14Z, closed 22:41Z — alive 27 minutes) closes in favor of an *older* PR (#26361, opened 21:00Z prior window) that was retitled and rescoped to absorb the work. Net: the duplicate-detection fired in 27min, but the symmetric-fork pattern (two authors filing the same PR an hour apart) is the *cause*. **The PR body of #26458 contained an explicit "Dependency note" stating that #26456 must merge first** — this is W17's clearest exhibit of cross-PR dependency declared in prose only, with no machine-readable link.
- **[BerriAI/litellm#26361]** (OPEN, refreshed 22:43Z) — *"[Feat] Add azure/gpt-5.5 + azure/gpt-5.5-pro entries (+ dated variants)"* **(retitled in this window from prior cost-map-only scope)**. Now absorbs the work that #26458 was filed to do. **Synthesis #36 (mid-migration-split-read-state) sibling**: between 22:14Z and 22:41Z, two open PRs claimed to be "the" Azure GPT-5.5 entries PR. Any reviewer landing on #26458 in that 27min window saw a different scope than a reviewer landing on #26361.
- **[BerriAI/litellm#26456]** (OPEN, refreshed 22:36Z) — *"[Fix] gpt-5.5 reasoning_effort capability flags + add supports_low_reasoning_effort."* The synthesis #38 anchor PR remains open. Catch-up window now: **86 minutes and counting** (dispatch #26449 MERGED 21:10Z). Pairs with #26361 — the Azure entries depend on #26456 landing first per prose dependency note.
- **[BerriAI/litellm#26122]** (OPEN, refreshed 22:47Z) — *"fix(ollama): forward tool_calls and tool_call_id in transform_request."* Filed 2026-04-20, refreshed 4 days later in this window. **Direct synthesis #34 (silent-transformer-field-drop) anchor exhibit**: the ollama transformer was silently dropping `tool_calls` and `tool_call_id` fields during request transformation — agent loops over ollama via litellm would lose tool-call continuity. Refresh after 4 days suggests the PR is finally getting reviewer attention. Synthesis #20 candidate if it sits another week.
- **[BerriAI/litellm#25808]** (OPEN, refreshed 22:50Z) — *"[Feature] UI - Users: Add Send Invitation Email Toggle."* Admin UI toggle. Refresh-only signal in this window.

### anomalyco/opencode: a new dual-tool-surface PR appears (#23794 — `terminal` tool alongside `bash`)

- **[anomalyco/opencode#23794]** (OPEN, refreshed 22:40Z; created 2026-04-22) — *"feat(tool): add interactive terminal tool with persistent PTY sessions."* Adds an explicit `terminal` tool with 5 actions (create, send, read, close, run) backed by the existing PTY service, **alongside the existing `bash` tool which the PR explicitly leaves untouched**. The PR body states: *"`bash` tool untouched — simple commands stay on `bash`."* This is the first W17 exhibit of an OSS coding-agent project shipping **two parallel tool surfaces for overlapping capability classes** (one-shot command execution vs persistent PTY sessions) inside the *same* tool registry. Synthesis #21 (advertised-capability-vs-runtime-delivery) sibling at the *registry* level: now the registry advertises two tools that overlap in capability, and the routing rule ("simple commands stay on `bash`") lives only in the PR body — not in the tool descriptions the model sees. Also a **synthesis #40 anchor exhibit** (see below).

### ollama/ollama, charmbracelet/crush: no PR activity in window

- ollama/ollama: 0 PRs updated since 22:32Z. Last release `v0.21.3-rc0` at 12:15Z; latest stable `v0.21.2` at 2026-04-23.
- charmbracelet/crush: 0 PRs updated since 22:32Z. `v0.62.1` cut at 20:28Z (this prior window — included the hyper re-auth fix #2703).

### Net narrative change since 22:32Z

1. **Catch-up windows close fast on the codex side, slow on the litellm side**: #19422 (codex gpt-image-2 docs catch-up) closed in 47min; #26456 (litellm GPT-5.5 capability-flag catch-up) is now at 86min. Same #38 pattern, 2× rate-of-closure asymmetry between projects.
2. **The litellm GPT-5.5 Azure parity train hit a duplicate-PR collision**: #26458 (newer) closed at 22:41Z in favor of #26361 (older, retitled). The 27-minute window where two PRs claimed the same scope is a #36 (mid-migration-split-read-state) exhibit at the *PR-tracker* level — the bug-tracker itself was the split-read state surface.
3. **A prose-only cross-PR dependency was declared**: #26458's body said "depends on #26456 landing first." There is no machine-readable link enforcing this. **New synthesis candidate: PR-body-declared dependency without machine-readable enforcement.** This is the W17 #39 theme below.
4. **opencode introduces a second tool surface for an overlapping capability class** (#23794: `terminal` tool alongside `bash` tool). The routing rule is in the PR body, not in the tool descriptions. **New synthesis candidate: dual-tool-surface-for-overlapping-capability with routing rule outside the tool registry.** This is the W17 #40 theme below.
5. **codex thread-store migration ships its harness before the migration** (#19266 MERGED 22:45Z; #19280 still OPEN). Synthesis #36 active on the thread-store surface in the same dispatcher tick that #36 is also active on the litellm PR-tracker surface above.
6. **codex tracing-contract widening on two parallel PRs** (#19207 tool-call IDs MERGED, #19432 token-usage spans OPEN). The tracing-span schema is being mutated by two PRs in the same hour with no sequencing signal in PR titles — synthesis #26 sibling at the schema-evolution level.
7. **A default-flag flip arrives on codex** (#19459: `unavailable_dummy_tools` opt-in → opt-out). Synthesis #30 reactivates on the codex side after #19449 (legacy read-only access modes) opened the same theme in the prior tick.

Two new W17 syntheses in `_weekly/` for this tick: **#39 (PR-body-declared cross-PR dependency without machine-readable enforcement)** anchored on litellm #26458 ↔ #26456 ↔ #26361 plus the codex permissions train and the codex thread-store harness/migration ordering, and **#40 (dual-tool-surface-for-overlapping-capability with routing rule outside the registry)** anchored on anomalyco/opencode #23794 (`terminal` ↔ `bash`), codex #19459 (`unavailable_dummy_tools` default-on), litellm #26122 (ollama tool_call forwarding gap), codex #19207 (Codex Apps tool-call ID propagation), and codex #19098 (skill-path aliasing under metadata-budget pressure).

---

# Daily addendum — 2026-04-24 (refresh @ 23:33Z)

**Window since last addendum:** 2026-04-24T22:50Z → 2026-04-24T23:33Z (≈43m)

A dense 43-minute window. **codex** moved 12 PRs (2 merged, 1 closed-unmerged, 9 refreshed/new), **litellm** moved 10 (3 merged, 7 refreshed/new), **anomalyco/opencode** moved 10 (1 merged-refresh, 1 closed, 8 refreshed/new). **ollama** and **charmbracelet/crush** were silent. Two structural events worth pulling forward into W17 syntheses #41 and #42 (filed alongside this addendum).

## codex: a stacked PR closes *after* its parent merges, plus a 9261-line deletion PR

The headline event is **[openai/codex#19234]** (MERGED 23:27Z, *"Refactor log DB into LogWriter interface"*, +271/-21) shipping the `LogWriter` boundary that **[openai/codex#19455]** (CLOSED unmerged 23:27Z, *"Add gRPC feedback log sink"*) was explicitly stacked on per its body: *"This is stacked on #19234. That PR makes app-server log capture expose a small `LogWriter` boundary..."*. Both events landed in the **same minute** (23:27Z). The parent merged; the stacked child closed unmerged. This is unusual: typically when a stack-base merges, the stacked PR rebases onto main and proceeds. Here the child closed instead — likely a scope-rejection of the gRPC remote-sink design rather than the abstraction itself. This is a clean exhibit of **stack-parent-merges-but-stack-child-rejected**: the abstraction the parent justified ("makes the boundary so the child can plug in") was accepted, but the child that motivated the abstraction was not. W17 synthesis #41 anchors here.

Also notable in window:

- **[openai/codex#19453]** — MERGED 23:18Z. *"Serialize legacy Windows PowerShell sandbox tests."* +13/-0. A 13-line test-only PR landed mid-feature-train (between #19234 and the open #19449/#19442 permission-system PRs). Pure infra/flake-fix. Synthesis #42 anchor (test-only-PR-mid-feature-train, see below).
- **[openai/codex#19410]** — refreshed 23:13Z. *"Remove js_repl feature."* +77/-9261. **Net deletion of 9184 lines**. This is the largest single-PR deletion W17 has seen. The js_repl experiment shipped earlier this cycle and is now being torn out. Pairs with #19449 (legacy read-only access modes removal) and #19410 itself: codex is in a deletion pulse this week.
- **[openai/codex#19461]** — OPENED 23:15Z. *"fix: Bedrock GPT-5.4 reasoning levels."* Day-of fix for Bedrock provider reasoning-level handling. Pairs with the open #19442 (*"feat: apply provider capability disables through config layers"*, refreshed 23:14Z) — provider-capability layer is being actively reshaped on the codex side, mirror of litellm #26456 (capability flags) that W17 synthesis #38 anchored on.
- **[openai/codex#19462]** — OPENED 23:19Z. *"sdk/python: use standalone codex-app-server runtime."* SDK now points at a standalone runtime instead of the bundled one. First-of-week split-runtime move on the SDK side.
- **[openai/codex#19184]** — refreshed 23:30Z. *"fix: handle deferred network proxy denials."* +576/-69. Sandbox/proxy denial path. Synthesis #22 (privilege-by-exclusion) sibling.
- **[openai/codex#19160]** — refreshed 23:25Z. *"Make apply_patch streaming parser stateful."* The streaming-parser correctness fix; refreshed in window without merge.

The two **previously-flagged active-train PRs** (#19449 permissions, #19280 thread-store migration, #19442 capability disables) all refreshed in window without merging — synthesis #36 and #38 are both still active going into the next tick.

## litellm: three merges (one a 4-day-old vertex passthrough fix), a budget-bypass fix appears

Three merges in window:

- **[BerriAI/litellm#26146]** — MERGED 23:07Z. *"fix(vertex passthrough): log :embedContent and :batchEmbedContents responses."* **Created 2026-04-21 03:06Z, merged 4 days later (≈92h).** Vertex passthrough was silently failing to log embedding responses — the spend/usage tracking surface was missing those calls entirely. Long catch-up PR for a known-blind-spot category.
- **[BerriAI/litellm#26438]** — MERGED 23:07Z. *"fix(jwt-auth): apply team TPM/RPM + attribution for admins using x-litellm-team-id."* JWT-auth team-attribution fix for admins acting on behalf of teams. Pairs with the still-open **[BerriAI/litellm#26399]** (Bedrock passthrough access-control bypass, flagged earlier today) — the auth-attribution surface is being actively repaired on multiple PRs in parallel.
- **[BerriAI/litellm#26457]** — MERGED 23:10Z. *"[Infra] Declare proprietary license in litellm-enterprise metadata."* Adds `license = "LicenseRef-Proprietary"` to `enterprise/pyproject.toml`. **Mirrors the earlier #26369** (which did the same for `litellm-proxy-extras` with MIT). Cross-package metadata-hygiene sweep — both halves now PEP-639 compliant. Synthesis #41 sibling exhibit (paired-PR-across-sibling-packages).

New/refreshed open PRs:

- **[BerriAI/litellm#26459]** — OPENED 22:17Z (refreshed 23:32Z). *"[Fix] Reseed enforcement read path from DB on counter miss."* **Budget-bypass bug**: cache for spend amounts goes stale between pods in multi-pod deployments, users intermittently exceed budgets. The body explicitly says "users exceeding budgets intermittently" — same severity class as #26399 (Bedrock passthrough access-control bypass) but a different mechanism (cache-coherence vs route-bypass). Two open budget/auth bypass bugs in 24h.
- **[BerriAI/litellm#26460]** — OPENED 23:28Z. *"feat(proxy): Add cleanup job for expired LiteLLM dashboard session keys."* Dashboard session-key TTL cleanup; new feature.
- **[BerriAI/litellm#26455]** — refreshed 23:26Z. *"feat: per-model team member budgets."* Granular per-(team-member, model) budget caps. Same surface as #26459 (budget enforcement) — the budget subsystem is under simultaneous feature-add (#26455) and bug-fix (#26459) pressure.
- **[BerriAI/litellm#26390]** — refreshed 23:28Z. *"[Fix] Guardrail param handling in list and submission endpoints."*
- **[BerriAI/litellm#26360]** — refreshed 23:09Z. *"feat(guardrails): LLM-as-a-Judge guardrail."* Major guardrails feature still open.
- **[BerriAI/litellm#26310]** — refreshed 23:23Z. *"fix(cost_calculator.py): fix AttributeError in _get_usage_object for streaming responses."* Cost-calculator streaming-response NPE.
- **[BerriAI/litellm#25808]** — refreshed 23:26Z. Invitation-email UI toggle (now refreshing across multiple consecutive ticks without merge).

Notable: **the GPT-5.5 capability-flag PR #26456 did NOT refresh in this window** (last touch 22:36Z). Catch-up window for #26456 is now **≈122 minutes** (dispatch #26449 MERGED 21:10Z) — synthesis #38 catch-up timer continues.

## anomalyco/opencode: a same-day reasoning-model fix, a Chinese "merge upstream" PR closed, and a refresh-storm on long-tail PRs

- **[anomalyco/opencode#24218]** — OPENED 22:12Z (refreshed 23:31Z). *"fix(provider): auto-enable interleaved for reasoning models."* One-line fix in `provider.ts`: when a model has `reasoning: true` and `interleaved` isn't set, default to `{ field: "reasoning_content" }` instead of `false`. The body says: *"This caused reasoning_content in providerOptions to be silently dropped during message replay."* **This is the same `reasoning_content` round-trip bug class** that hit litellm (#26395), opencode (#24135), and crush (#2696) yesterday. Now there's a same-day fix on the opencode side. Synthesis on the cross-repo `reasoning_content` round-trip continues to be live.
- **[anomalyco/opencode#24225]** — CLOSED unmerged 23:22Z. Title: *"合并上游"* (Chinese: "merge upstream"). PR body is the unfilled template. Closed without merge — drive-by sync attempt rejected. Notable for the **non-English-title-on-an-English-default-branch** signal; the PR template's *"If you do not follow this template your PR will be automatically rejected"* line was enforced.
- **[anomalyco/opencode#24210]** — refreshed 22:51Z (created 21:21Z). *"feat(opencode): add /context command."* New `/context` slash command for the TUI.
- **[anomalyco/opencode#24223]** — refreshed 23:07Z. *"docs: sync env vars with source code."* Docs-vs-code drift fix.
- **[anomalyco/opencode#23955]** — MERGED earlier 04-23, refreshed 23:25Z (post-merge activity, likely backport/cherry-pick discussion). Project `icon_url_override` field.
- **Refresh storm on long-tail open PRs:** **[anomalyco/opencode#20602]** (shell-as-config, refreshed 23:32Z), **[anomalyco/opencode#18767]** (mobile touch optimization, refreshed 23:32Z), **[anomalyco/opencode#15412]** (parent-agent-context in hook inputs, refreshed 23:19Z), **[anomalyco/opencode#13854]** (TUI streaming markdown stop-on-complete, refreshed 23:32Z), **[anomalyco/opencode#6130]** (TUI configurable XML/HTML syntax tokens, refreshed 23:23Z). **Five PRs with ages from #6130 (oldest, ~18000 PR-numbers ago) to #20602 all refreshed in the same 13-minute window** — bot-driven stale-PR-touch sweep, not human review activity. Useful signal: **opencode's stale-PR refresh cadence is now producing visible PR-tracker noise that obscures the human-edited surface**.

## ollama, charmbracelet/crush

Both silent in window. ollama: no PR activity since 22:50Z. crush: no PR activity since 22:50Z (last cut `v0.62.1` at 20:28Z 2026-04-24).

## What changed in the narrative since 22:50Z

1. **Stacked-PR-rejected-after-parent-merged** is now a named codex pattern (#19234 parent merged 23:27Z; #19455 stacked child closed unmerged 23:27Z, same minute). Promoted to W17 synthesis **#41**.
2. **A 13-line test-only PR (#19453) merged into the codex feature train mid-stride** while three feature PRs (#19449, #19442, #19280) refreshed without merge in the same window. Promoted to W17 synthesis **#42** (test-only-PR-mid-feature-train).
3. **codex deletion pulse**: #19410 (-9261 lines, js_repl removal) is the W17 record-deletion PR; pairs with #19449 (legacy read-only modes removal). Two large deletion PRs in flight.
4. **litellm shipped its 4-day-old vertex passthrough embedding-log fix** (#26146): a known-blind-spot category for spend tracking is now closed. Long catch-up window matches the synthesis-#38 catch-up-window pattern (PR sat 92h before merge).
5. **Two open litellm budget-/auth-bypass bugs in 24h**: #26399 (Bedrock passthrough access-control bypass, opened earlier) and #26459 (multi-pod cache stale → budget bypass, opened 22:17Z). Both still open at 23:33Z. Severity-cluster on the access-control surface.
6. **opencode reasoning-content round-trip class now has a same-day fix on the opencode side** (#24218), confirming yesterday's cross-repo synthesis is converging.
7. **opencode's bot-driven stale-PR refresh cadence is now visibly noisy** (5 PRs refreshed in a 13-minute window with no human-review markers). PR-tracker signal-to-noise on opencode degrading.

Two new W17 syntheses filed in `_weekly/` for this tick: **#41 (stacked-PR-rejected-after-parent-merged: when the abstraction lands but the stacked consumer doesn't)** anchored on codex #19234 ↔ #19455, with sibling exhibits in litellm #26457 ↔ #26369 (paired sibling-package metadata fixes), and **#42 (test-only PR merged mid-feature-train as a flake-firewall)** anchored on codex #19453 (Windows PowerShell test serialization) merging while #19449/#19442/#19280 refresh without merge, with sibling exhibits across litellm #26310 (cost-calculator streaming NPE fix queued behind #26455 budget feature) and opencode #24218 (one-line reasoning-content fix queued alongside #24210 /context feature).

---

## 23:58Z addendum — 25-minute sweep (23:33Z to 23:58Z)

A short window with one extraordinarily structural event: **the gRPC feedback log sink that closed unmerged at 23:27Z (codex #19455, the W17 synthesis #41 anchor) was *resubmitted* 11 minutes later as openai/codex #19465 — same title, same author, same body verbatim**. The W17 #41 prediction (stacked-child closes, abstraction sits orphaned in main) is now mutating into a different shape *within the same tick*: not orphaned, but resubmitted-unchanged. The maintainer rejection at 23:27Z was treated by the author as a no-op. This is the seed for synthesis #43 below.

A second structural event: the codex permissions-profile vertical slice (**[openai/codex#19391, #19392, #19393, #19394, #19395]**) all refreshed within a 5-second window at 23:33:12Z–23:33:17Z, alongside the already-flagged **[openai/codex#19449]** that depends on the slice. Six PRs forming a single vertical design refreshed in lockstep, with no merges. This is the seed for synthesis #44 below.

### codex: gRPC sink resurrected, six-PR permissions stack refreshes in lockstep, two more test-infra PRs queue

- **[openai/codex#19465]** — OPENED 23:38:15Z. *"Add gRPC feedback log sink."* +1121/-0. **Identical title to the just-closed [openai/codex#19455]** (CLOSED unmerged 23:27:41Z). Body opens *"That PR makes app-server log capture expose a small `LogWriter` boundary…"* — i.e., the body still refers to *"That PR"* (#19234, the now-merged parent) without acknowledging that #19455 was rejected 11 minutes earlier or what changed. This is **resubmit-after-close-with-no-modification**, the inverse of synthesis #35 (replacement-PR narrows scope). Maintainer rejection at 23:27Z was absorbed as a transient signal, not a substantive one. Synthesis #43 anchor.
- **[openai/codex#19391, #19392, #19393, #19394, #19395]** — all refreshed in a 5-second window at 23:33:12Z–23:33:17Z. The five-PR permissions vertical slice: `make runtime config profile-backed` (+1004/-568) → `derive compatibility policies from profiles` (+489/-403) → `migrate approval and sandbox consumers to profiles` (+386/-216) → `remove core legacy policy round trips` (+118/-303) → `finish profile-backed app surfaces` (+216/-128). **Total slice diff: +2213/-1618 across 5 PRs**, designed to be reviewed as a graph not as leaves. **[openai/codex#19449]** (`permissions: remove legacy read-only access modes`, refreshed 23:49:20Z) is a sixth PR that depends on the slice landing. None merged in window. Synthesis #44 anchor.
- **[openai/codex#19452]** — refreshed 23:47:32Z. *"Stabilize plugin MCP fixture tests."* +41/-35. Test-infra PR.
- **[openai/codex#19454]** — refreshed 23:46:34Z. *"Split approval matrix test groups."* +63/-3. Test-infra PR.
- **[openai/codex#19453]** (the synthesis #42 anchor, MERGED 23:18Z) was followed within 30 minutes by **two more queued test-infra PRs** (#19452 and #19454). Synthesis #42 ("flake-firewall PRs come singly") needs a corollary: **flake-firewall PRs come in *clusters* when the underlying surface (here: Windows sandbox + plugin MCP + approval matrix) is jointly unstable**. Three test-infra PRs touching three different test surfaces in a 30-minute window is a stronger firewall signal than one.
- **[openai/codex#19467]** — OPENED 23:43:20Z. *"feat: route MCP elicitations through guardian review."* New guardian-review path for MCP elicitations. Touches the same approval/guardian surface as the permissions-profile slice (#19391-#19395). Likely a near-term consumer of the new profile abstraction.
- **[openai/codex#19461]** — OPENED 23:41:51Z. *"fix: Bedrock GPT-5.4 reasoning levels."* Bedrock-side reasoning-level fix; pairs structurally with the litellm Bedrock-passthrough auth fixes flagged in earlier addenda (#26416, #26399).
- **[openai/codex#19458]** — OPENED 23:41:53Z. *"Simplify Codex Library file hooks."* File-hooks simplification.
- **[openai/codex#19456]** — refreshed 23:49:28Z. *"Add remote plugin uninstall API."* Plugin lifecycle PR; sibling to #19452 (plugin MCP fixture tests) — the plugin surface has both a feature PR and a test-infra PR moving in parallel, which is a healthy structural pattern (the inverse of synthesis #42's risk where features outrun tests).
- **[openai/codex#19432]** — refreshed 23:42:06Z. *"[codex] Add token usage to turn tracing spans."* Telemetry PR.
- **[openai/codex#19462]** — refreshed 23:26:51Z. *"sdk/python: use standalone codex-app-server runtime."* Python SDK migration to a standalone server runtime; structural change to the SDK-server boundary.

### litellm: a CI rerun-fix PR closes-and-resubmits within 7 minutes (sibling to codex #19465)

- **[BerriAI/litellm#26452]** — CLOSED unmerged 23:36:55Z. *"fix(ci): support CircleCI rerun failed tests for local_testing jobs."*
- **[BerriAI/litellm#26461]** — OPENED 23:44:12Z. **Identical title to #26452.** *"fix(ci): support CircleCI rerun failed tests for local_testing jobs."* Body opens with the *same problem statement* (CircleCI rerun broken for `local_testing_part1`, `local_testing_part2`, `litellm_router_testing` — reruns collect 0 items, exit code 123). **7-minute resubmit-after-close**, almost identical to codex #19465's 11-minute resurrection of #19455. Two of these patterns in the same tick, in different repos, is a strong signal that **the social cost of resubmitting an unchanged PR is approaching zero across coding-agent OSS** — a maintainer rejection no longer requires the author to demonstrate substantive change before reposting. Synthesis #43 sibling exhibit.
- **[BerriAI/litellm#26460]** — refreshed 23:53:20Z (opened 23:28Z prior tick). *"feat(proxy): Add cleanup job for expired LiteLLM dashboard session keys."* Dashboard session-key TTL cleanup; refresh activity continues.
- **[BerriAI/litellm#26459]** — refreshed 23:56:50Z (opened 22:17Z prior tick). *"[Fix] Reseed enforcement read path from DB on counter miss."* Multi-pod budget-bypass fix; still unmerged ~5h after open. Catch-up window growing.
- **[BerriAI/litellm#26418]** — refreshed 23:53:09Z. *"fix(proxy): single-team DB fallback when JWT has no team_id."* JWT-auth edge case PR refreshed; still open from prior tick.
- **[BerriAI/litellm#26455]** — refreshed 23:26:45Z. *"feat: per-model team member budgets."* Still open; pairs with #26459 (the budget-bypass fix). Feature + bug-fix on the same surface refreshed in the same window without merge — consistent with synthesis #42's "queued behind firewall" shape, except no firewall PR has landed yet.

### opencode: only one PR refreshes; activity has shifted entirely to codex/litellm

- **[anomalyco/opencode#24218]** — refreshed 23:37:20Z. *"fix(provider): auto-enable interleaved for reasoning models."* The same-day reasoning-models fix flagged in the prior tick. Still open. The opencode tracker is otherwise silent in this window — a notable shift from the 14:46Z addendum's "five PRs refreshed in 13 minutes" stale-bot storm. Either the bot cadence dropped, or the bot's batch already fired and the next batch is >25 minutes away.

### ollama, charmbracelet/crush

Both silent in window. ollama: no PR activity since the prior addendum. crush: no PR activity since the prior addendum.

### What changed in the narrative since 23:33Z

1. **Synthesis #41 has mutated within one tick**: codex #19455 (CLOSED 23:27Z, the synthesis #41 anchor) was *resubmitted as #19465* at 23:38Z — same title, same body, no acknowledgment of the rejection. The "abstraction-orphaned-in-main" risk is now joined by a "rejected-PR-resurrected-unchanged" risk. Promoted to W17 synthesis **#43**.
2. **A six-PR vertical permissions slice** (#19391, #19392, #19393, #19394, #19395, #19449) refreshed in lockstep at 23:33:12Z–23:49:20Z with no merges. Five of the six refreshed within 5 seconds of each other — bot-driven coordinated refresh designed to surface the slice as a graph for review. Promoted to W17 synthesis **#44**.
3. **The codex test-infra firewall is a *cluster*, not a single PR** — #19453 merged at 23:18Z, then #19452 and #19454 queued within 30 minutes, all touching different test surfaces (Windows sandbox, plugin MCP, approval matrix). Synthesis #42 corollary: when the test surface is jointly unstable across multiple subsystems, the firewall is plural.
4. **The "resubmit-after-close-unchanged" pattern recurs in two repos in the same tick** (codex #19465 in 11 minutes, litellm #26461 in 7 minutes). Both are fast-cadence projects; both rejections were absorbed as transient. Cross-repo confirmation that the synthesis #43 pattern is not project-specific.
5. **opencode tracker is unusually quiet** — only #24218 refreshed in 25 minutes, against ~5/min in the 14:46Z window. Either the stale-bot batch is between cycles, or the human-edited surface genuinely has nothing new to push.
6. **codex #19461 (Bedrock GPT-5.4 reasoning levels)** lands on the same Bedrock-passthrough surface that litellm has been actively repairing all week (#26399, #26416). Cross-repo: when one upstream changes provider-shape semantics, the next-day bug filings appear in *both* the proxy and the agent.

Two new W17 syntheses filed in `_weekly/` for this tick: **#43 (rejected-PR-resurrected-same-day-unchanged: when a closed PR is resubmitted within minutes with identical title and body, the maintainer rejection has been absorbed as a no-op signal rather than a substantive one)** anchored on codex #19465 ↔ #19455 and litellm #26461 ↔ #26452, and **#44 (vertical-slice-PR-stack-refreshed-in-lockstep: when a coordinated multi-PR slice refreshes within seconds of itself with no merges, the maintainers are inviting graph-level review rather than leaf-level merge)** anchored on codex permissions stack #19391-#19395 + #19449, with sibling shape in litellm's #26459/#26455 budget-feature/budget-fix pair.


# Daily addendum — 2026-04-24 (refresh @ 00:11Z next day)

**Window:** 2026-04-24T23:33Z → 2026-04-25T00:11Z (≈38 min, crosses UTC midnight)

This refresh closes out the 2026-04-24 daily window. Activity continued past midnight UTC on the codex/litellm/opencode trackers; charmbracelet/crush and ollama/ollama remained quiet (no new PR activity since the prior tick).

## codex: Guardian-elicitation surface gets two independent PRs from different authors in the same hour

- **[openai/codex#19467]** — OPENED 23:43:20Z by `viyatb-oai`. *"feat: route MCP elicitations through guardian review."* Adds Guardian/auto-review path for approval-shaped MCP elicitations; touches codex-mcp, codex-core, codex-app-server-protocol, codex-protocol, codex-analytics. Tested with `cargo test -p codex-mcp elicitation` and `just write-app-server-schema`.
- **[openai/codex#19431]** — opened earlier in the day at 20:40:44Z by `cd-oai` (Clark DuVall). *"Route opted-in MCP elicitations through Guardian."* Adds a generic elicitation reviewer hook in codex-mcp wired through a Guardian reviewer callback; introduces `_meta` opt-in key `"codex_approval_reviewer": "guardian"`. Tested with `cargo nextest run` + `cargo clippy --tests`.
- **Same target surface (Guardian-routed MCP elicitations), different authors, different opt-in mechanics, different test discipline, opened ~3h apart with no cross-reference in either body.** Neither PR mentions the other in its description as of 00:11Z. This is the **concurrent-author duplicate-feature** shape — distinct from synthesis #43 (resurrection of an unchanged PR by the same author after rejection). Promoted to W17 synthesis **#45** anchor.

- **[openai/codex#19461]** — MERGED 00:05:22Z (opened 23:41Z, ~24 min lifetime). *"fix: Bedrock GPT-5.4 reasoning levels."* Crosses UTC midnight in-flight. The fastest-merging Bedrock-side fix of the day; pairs with the litellm Bedrock-passthrough surface (#26399, #26416 from prior ticks). The Bedrock GPT-5.4 reasoning-level mismatch is now repaired on the codex side; litellm's parallel fix (#26456 — `gpt-5.5 reasoning_effort capability flags`) is still open.

- **[openai/codex#19436]** — CLOSED unmerged 00:00:02Z. *"chore(ci) Build a release of codex-app-server."* Originally the catch-all CI PR that built the codex-app-server release. **Superseded by [openai/codex#19447]** (MERGED 22:29:38Z, *"ci: publish codex-app-server release artifacts"*) and **[openai/codex#19445]** (MERGED 21:29:45Z, *"ci: stop publishing GNU Linux release artifacts"*). The release-artifact CI definition was reshaped via a 3-PR train in <3h: stop-old (21:29Z) → publish-new (22:29Z) → close-superseded (00:00Z). Promoted to W17 synthesis **#46** anchor (codex side).

- **[openai/codex#19468]** — OPENED 00:10:30Z. *"Fix Bazel cargo_bin runfiles paths."* Bazel-side runfiles repair; lands at the very edge of the window. Pairs structurally with the bazel-clippy verification step that #19431 explicitly runs (`python3 .github/scripts/verify_bazel_clippy_lints.py`) — Bazel coverage in the codex repo is being actively shored up.

- **[openai/codex#19449]** — refreshed 23:49:20Z (continues from prior tick). *"permissions: remove legacy read-only access modes."* The sixth PR riding on the synthesis #44 permissions-profile slice (#19391-#19395) is still open across the midnight boundary.

- **[openai/codex#19458]** — refreshed 00:10:46Z. *"Simplify Codex Library file hooks."* Continues to refresh; no merge.
- **[openai/codex#19459]** — last touched 22:43:08Z. *"Enable unavailable dummy tools by default."* Open across the boundary; the synthesis #38 (capability-flag-vs-callability-skew) anchor still has not landed.
- **[openai/codex#19454]** — refreshed 00:02:33Z. *"Split approval matrix test groups."* Test-infra cluster sibling (synthesis #42 corollary) still open.
- **[openai/codex#19452]** — refreshed 23:47:32Z. *"Stabilize plugin MCP fixture tests."* Same cluster.
- **[openai/codex#19442]** — refreshed 23:59:57Z. *"feat: apply provider capability disables through config layers."* Direct sibling of #19459 (also a capability-flag PR) — refreshed 1h17m later, still no merge.
- **[openai/codex#19432]** — refreshed 23:42:06Z. *"Add token usage to turn tracing spans."* Telemetry PR still open.

## litellm: same author opens scope-split duplicate of own open feature PR

- **[BerriAI/litellm#26462]** — OPENED 00:10:45Z by `ishaan-berri`. *"feat(teams): per-model team member budgets."*
- **[BerriAI/litellm#26455]** — refreshed 23:26:45Z (opened earlier this tick) by `ishaan-berri`. *"feat: per-model team member budgets."*
- **Same author, same surface, same feature description, opened/refreshed within 44 minutes of each other.** Title delta: `feat(teams):` scope tag added in #26462; otherwise identical wording. This is **same-author scope-split-after-open** — the author opened a second PR for the same feature with a tighter conventional-commit scope rather than rebasing/retitling #26455. Both remain open at window close. The codex case in synthesis #45 is cross-author; this is the same-author flavor of the same anti-pattern.

- **[BerriAI/litellm#26461]** — refreshed 23:44:12Z. *"fix(ci): support CircleCI rerun failed tests for local_testing jobs."* Still open ~27 min after the resubmit-after-close noted in synthesis #43.
- **[BerriAI/litellm#26460]** — refreshed 00:04:59Z. *"feat(proxy): Add cleanup job for expired LiteLLM dashboard session keys."* Still open.
- **[BerriAI/litellm#26459]** — refreshed 00:03:18Z. *"[Fix] Reseed enforcement read path from DB on counter miss."* The multi-pod budget-bypass fix has now been open ~6h with no merge despite #26455/#26462 (the budget-feature PRs) actively churning on the same surface.
- **[BerriAI/litellm#26456]** — last touched 22:36:05Z. *"[Fix] gpt-5.5 reasoning_effort capability flags."* Still open across midnight; pairs with codex #19461 (MERGED) — the agent-side Bedrock reasoning-levels fix landed first; the proxy-side capability-flag fix has not.
- **[BerriAI/litellm#26457]** — MERGED 23:10:32Z (within prior tick narrative). *"[Infra] Declare proprietary license in litellm-enterprise metadata."* Repo-shape PR.
- **[BerriAI/litellm#26454]** — MERGED 21:54:35Z. *"[Infra] Remove docs/my-website, point contributors to litellm-docs repo."* Repo-shape PR — splits docs out of the monorepo. Synthesis #46 sibling (litellm side): repo-shape changes are also shipping as small Infra-tagged train PRs, not as one migration.

## opencode: two PRs open at the very edge of the window

- **[anomalyco/opencode#24229]** — OPENED 00:10:06Z. *"fix: lazy session error schema."* Session error schema repair.
- **[anomalyco/opencode#24228]** — OPENED 00:10:54Z. *"Add Roslyn support for Razor and C# scripts."* New language support via Roslyn; expands the LSP integration surface.
- **[anomalyco/opencode#24218]** — refreshed 00:08:13Z. *"fix(provider): auto-enable interleaved for reasoning models."* Continues to refresh; not merged. Pairs cross-repo with codex #19461 (Bedrock reasoning-levels MERGED) and litellm #26456 (gpt-5.5 reasoning_effort flags OPEN) — **all three repos are touching reasoning-model behavior in the same 6h window.**
- **[anomalyco/opencode#24225]** — CLOSED 23:22:13Z. *"合并上游"* (CN: "merge upstream"). Closed without merge; non-substantive contribution.
- **[anomalyco/opencode#24222]** — refreshed 22:30:00Z. *"fix permission config order."* Open across the boundary; structural sibling to codex permissions slice (#19391-#19395).

## ollama, charmbracelet/crush

Both silent in window. ollama: no PR activity since 22:12Z (#15505 TurboQuant kvcache, last refresh of the day). crush: no PR activity since 18:09Z (#2690 SQLITE_NOTADB concurrent sub-agents, last refresh of the day).

### What changed in the narrative since the prior tick (23:33Z)

1. **Two new W17 syntheses promoted in this tick: #45 and #46.**
   - **#45 (concurrent-author / scope-split duplicate-feature PR)** — codex #19467 vs #19431 (cross-author Guardian-elicitation reimpl); litellm #26462 vs #26455 (same-author scope-split). The pattern recurs in two repos in the same window with two distinct flavors. Distinct from #43 (same-author resurrection of unchanged closed PR).
   - **#46 (CI / repo-shape change shipped as a small-PR train)** — codex release-artifact CI reshaped via #19445 → #19447 → #19436 (close superseded) in <3h; litellm splits out docs (#26454) and declares enterprise license (#26457) as separate Infra PRs in the same window.
2. **Bedrock GPT-5.4 reasoning-levels fix landed first on the agent side** (codex #19461 MERGED 00:05Z, ~24min lifetime). The proxy-side parallel (litellm #26456) is still open. When provider semantics change, the agent side is currently outpacing the proxy side on repair.
3. **The Guardian/MCP-elicitation surface has two independent PRs by different authors and neither acknowledges the other** — a structural risk: whichever lands first will force the other to rebase against an incompatible opt-in mechanism (`_meta.codex_approval_reviewer="guardian"` vs the new viyatb-oai approval-shape detection).
4. **opencode is back to merging at midnight** — #24216 MERGED 22:03Z (hono-bridge tests), #24213 MERGED 21:42Z (ripgrep effect schemas), #24212 MERGED 21:39Z (gpt-5.5 oauth compaction), #24211 MERGED 21:36Z (HttpApi migration plan). Four merges in 28 minutes earlier in the window; the silence flagged at 23:33Z was a between-batch gap, not a stop.
5. **No ollama / crush activity in window.** Two consecutive sub-agent ticks have closed with both repos fully silent. The W17 cross-repo signal is now concentrated in codex+litellm+opencode; ollama and crush have gone quiet for the day.

Two new W17 syntheses filed in `_weekly/` for this tick: **#45 (concurrent-author or same-author scope-split duplicate-feature PR: when two PRs targeting the same surface coexist without cross-reference, the maintainer is forced to mediate which mechanism wins rather than which implementation is better)** anchored on codex #19467 ↔ #19431 and litellm #26462 ↔ #26455, and **#46 (infrastructure or repo-shape change shipped as a train of small one-line PRs rather than a single migration: when build-artifact, license, or docs structure changes ship as a sequence of close+merge events across hours, the cumulative diff is hidden from any single review)** anchored on codex CI reshape #19445 → #19447 → #19436 and litellm Infra #26454 + #26457.

