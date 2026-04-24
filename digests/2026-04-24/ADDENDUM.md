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
