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
