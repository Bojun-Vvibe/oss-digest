# W17 cross-repo synthesis #35 — replacement-PR-after-close-as-scope-narrowing-tactic: when a multi-concern PR is closed without merge and the same bug class is immediately reopened under a tighter scope, the close→reopen pair is doing more useful work than either PR alone, but the bug remains live for the entire close→reopen interval (2026-04-24T21:31Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern in one sentence

**A coding-agent project takes a bug fix to the open-PR queue as a single PR that bundles two or more concerns — multiple bugs, multiple subsystems, multiple validation modes — and the maintainer closes it without merge; within the same dispatcher tick (or the next), a *replacement* PR opens that addresses a *strict subset* of the original concerns; the close→reopen pair is, in effect, the maintainer's scope-narrowing review tool, but the bug behavior is *unchanged* in the runtime for the entire interval between close and the eventual merge of the narrowed PR; in W17, seven anchor exhibits across litellm, anomalyco/opencode, and codex follow this script: litellm #26446 (`fix(caching): handle list-based responses and message key variations …` CLOSED 20:39Z) → litellm #26453 (`Fix qdrant semantic cache` OPEN 21:22Z, narrower scope), litellm #22011 (`[Feat]: Add GradientAI tool calling support` CLOSED 20:51Z without a published replacement), anomalyco/opencode #22612 (`handle chat tool call ids` CLOSED 21:21Z, no replacement yet), anomalyco/opencode #24200 (`fix: preserve empty reasoning_content for DeepSeek V4 in non-streaming and streaming paths` CLOSED 21:23Z, no replacement yet), anomalyco/opencode #24047 (`docs: add agent architecture audit guide` CLOSED 20:55Z), and codex #15701 (`tui: add ephemeral /btw side-question threads` CLOSED 21:11Z after long open period). Plus the inverse exhibit: codex #19414 (`permissions: make legacy profile conversion cwd-free` MERGED 20:42Z) — the only one of the eight permissions-train siblings to land, narrowing-by-merge rather than narrowing-by-close.**

In each close-without-merge exhibit, the shape is identical: **a PR is opened with N concerns → reviewer rejects on coupling, scope-creep, or single-purpose-PR policy → the PR is closed → the bug class is *still* a bug → a replacement opens with M < N concerns.** The bug behavior is *not* withdrawn during the close→reopen window. **Anyone running the affected code in production during the close→reopen interval is running on a known-bad code path with the maintainer's signal that "the fix is on the way" replaced by "the fix has been rejected" — without distinguishing rejected-on-content from rejected-on-coupling.**

## Why this is *not* synthesis #20 (patch-PR-graveyard)

#20 names cases where a PR sits in the open-PR queue indefinitely with no merge and no close — a *graveyard of opens*. **#35 names cases where a PR is *actively closed* and the bug it addresses is *immediately reopened* as a different PR.** #20 is "the fix never lands and nobody touches it"; #35 is "the fix is rejected on coupling, the bug is still a bug, and a narrower fix is reopened in the same hour."

The two patterns chain. A close-and-reopen exhibit (#35) that does not get re-closed within a tick may stabilize and merge — a successful narrowing. A close-and-reopen exhibit where the *replacement* also gets closed (without a further replacement) decays into a #20 graveyard exhibit.

## Why this is *not* synthesis #15 (sync-debt-as-merge-main-PR)

#15 names cases where a PR is *open* and continuously rebased against `main`, accumulating merge-conflict-resolution debt with each rebase. **#35 names cases where the original PR is *closed entirely* and the work restarts from a fresh branch** — the rebase debt is sidestepped by abandoning the branch, but the bug-class debt is preserved.

In W17, the codex permissions train (synthesis #15) and the litellm caching pair (synthesis #35) are doing the *same* underlying work — getting a fix to merge — through different remediation paths. #15's path is "rebase forever, hope for an opening." #35's path is "close, reopen narrower, restart the review clock." Both produce the same end-state (a merged fix); both leak runtime exposure during the wait.

## Why this is *not* synthesis #16 (accepted-but-unpropagated)

#16 names cases where a value is accepted by an outer surface but never propagated inward. **#35 names cases at the *PR-process layer* rather than the runtime layer** — the bug fix is *accepted* (in the sense that the maintainer agrees the bug is real and a fix is desired) at the comment level, but the *PR* is *not propagated* into `main` because of structural issues with the PR itself (scope, coupling, single-purpose policy). The runtime-level analog of #16 is what each individual exhibit *contains*; the meta-pattern is what #35 names.

## Why this is *not* synthesis #29 (error-message-vs-actionable-error)

#29 names cases where a runtime error message exists but is not actionable. **#35 names cases where a *PR-close message* exists but is not actionable for downstream consumers** — the `Closed` event on the original PR does not say "the bug is being fixed in #X"; downstream users tracking the bug have to discover the replacement PR through search or by following the maintainer's other activity. The close-without-marker leaves the consumer with no breadcrumb.

The litellm #26446 → #26453 pair *does* carry a forward marker (the new PR's title says `Fix qdrant semantic cache` and the body cross-references the original); the anomalyco/opencode #22612 and #24200 closes do *not* — there is no replacement yet. **The presence or absence of a forward-link in the close determines whether downstream consumers can follow the fix.**

## The exhibits

### Exhibit A — litellm #26446 (CLOSED) → litellm #26453 (OPEN replacement)

**[BerriAI/litellm#26446]** — CLOSED 20:39Z (without merge). Title: *"fix(caching): handle list-based responses and message key variations …"* The original PR bundled two concerns: (1) `QdrantSemanticCache.add_cache` raised `TypeError: can only concatenate str (not "list") to str` on list-shaped responses and the exception was *swallowed inside the cache layer*, silently failing to store the response while the model call succeeded; (2) callers passing `message=` (singular) instead of `messages=` (plural) silently produced a different cache-key hash, missing the cache on retrieval.

**[BerriAI/litellm#26453]** — OPEN 21:22Z. Title: *"Fix qdrant semantic cache."* Replacement PR. The title is narrower (cache-only, qdrant-only); the body addresses the same underlying bug class. The window between close and reopen was 2 hours 43 minutes — for that interval, anyone running litellm against Qdrant semantic cache with list-shaped responses was running on a known-bad code path with the previous fix-in-flight signal *withdrawn*.

The narrowing tactic worked: the second PR is reviewable as a single-purpose PR. **But the bug exposure window is the *sum* of the original PR's review time + the close→reopen interval + the replacement PR's review time** — strictly *worse* than if the original had merged.

### Exhibit B — litellm #22011 (CLOSED, no replacement)

**[BerriAI/litellm#22011]** — CLOSED 20:51Z (without merge), after a long open period. Title: *"[Feat]: Add GradientAI tool calling support."* Feature PR — adds tool-calling capability for the GradientAI provider. Closed without a published replacement.

This is the **decay-to-#20 exhibit**: a close without a forward marker, no replacement PR opened in the same tick, the feature is *not* shipped and the absence is *not* announced. Downstream users wanting GradientAI tool-calling support have no signal whether to wait, build their own, or switch providers. Synthesis #20 (patch-PR-graveyard) inherits this exhibit on the *next* tick if no replacement appears.

### Exhibit C — anomalyco/opencode #22612 (CLOSED, no replacement yet)

**[anomalyco/opencode#22612]** — CLOSED 21:21Z (without merge). Title (post-prefix): *"handle chat tool call ids."* The fix addressed two adjacent silent-drops in the fork's chat runtime: numeric `tool_calls[].id` values caused `Expected 'id' to be a string.` to throw, and missing `id` on the first streamed tool-call chunk also threw. The fix normalized numeric ids to strings and generated a stable fallback id for missing-first-chunk cases.

Closed without merge in the same hour as #24200 below. **Bug behavior persists in the fork's runtime** — affected providers (Kimi, NVIDIA, anything routing through the fork's chat runtime rather than the generic `@ai-sdk/openai-compatible` path) still throw on the affected message shapes. No replacement PR opened in the same tick.

### Exhibit D — anomalyco/opencode #24200 (CLOSED, no replacement yet)

**[anomalyco/opencode#24200]** — CLOSED 21:23Z (without merge). Title: *"fix: preserve empty reasoning_content for DeepSeek V4 in non-streaming and streaming paths."* Fix preserved an empty-but-present `reasoning_content` field across both stream paths for DeepSeek V4 — pre-fix, the field was being silently coerced to absent on both paths.

Closed without merge in the same hour as #22612. **The fork is *closing* synthesis-#34 sibling exhibits at a rate of two per hour** while the upstream (litellm, codex) is *fixing* the same bug class. This is an asymmetric remediation pattern across the dependency graph — fork users running affected providers carry the bug; upstream users get the fix as it lands.

### Exhibit E — anomalyco/opencode #24047 (CLOSED)

**[anomalyco/opencode#24047]** — CLOSED 20:55Z. Title: *"docs: add agent architecture audit guide."* Docs PR closed without merge. Lower-stakes than the bug-fix exhibits (no runtime bug exposure) but carries the same shape: a PR is rejected on structural grounds and the *content* (the audit guide itself) is not preserved in the repo. **The docs equivalent of synthesis #34's silent-data-loss** — the guide existed, was rejected, and is now off-tree with no breadcrumb in the repo for the next contributor wanting to write the same guide.

### Exhibit F — codex #15701 (CLOSED after long open period)

**[openai/codex#15701]** — CLOSED 21:11Z. Title: *"tui: add ephemeral /btw side-question threads."* Long-open feature PR (open since W14) finally closed without merge. The ephemeral side-question feature is *not* shipped; no replacement PR is in the queue. **Direct synthesis #20 (patch-PR-graveyard) ↔ synthesis #35 boundary exhibit**: the PR sat in graveyard state for ~3 weeks, then transitioned to the close-without-replacement state. The *transition* itself is the synthesis-#35 event; the prior period was synthesis #20.

### Exhibit G (inverse) — codex #19414 (MERGED, narrowing-by-merge)

**[openai/codex#19414]** — MERGED 20:42Z. Title: *"permissions: make legacy profile conversion cwd-free."* The first PR off the eight-deep codex permissions train to land. **The inverse of synthesis #35's pattern**: the train is being narrowed *by merging* the head, not by closing. Same effect on train depth (8 → 7), opposite remediation strategy.

The contrast is informative: the codex permissions train is being narrowed by *merge*, the litellm caching PR was narrowed by *close→reopen*, the anomalyco/opencode silent-drop fixes are being narrowed by *close-without-replacement*. Three strategies, three remediation rates. **Merge is the only strategy that does not leak runtime exposure during the narrowing.**

## What this synthesis predicts

If a fix PR is closed without merge in W17 in any of the tracked coding-agent projects, the next tick should expect one of three outcomes:

1. **A narrower replacement PR opens within the same dispatcher window** (litellm #26446 → #26453 shape). Bug-class survives, exposure window grows by the close→reopen interval, but the replacement is more likely to merge.
2. **No replacement, but the maintainer comments on a related PR or issue acknowledging the bug** (close-with-marker, no-PR shape). Synthesis #20 sibling forming; the bug is on the maintainer's mind but no work is queued.
3. **Silent close, no follow-up** (anomalyco/opencode #22612 / #24200 shape). Synthesis #20 sibling guaranteed; the bug exposure is permanent until a future contributor reopens.

Watch for: a close-without-replacement PR getting *re-opened by a different contributor* in a future tick — that would be a fresh sibling pattern (community-driven re-narrowing) not yet seen in W17.

## Cross-repo audit checklist for fork/upstream maintainers

- When closing a PR without merge, link to the replacement PR in the close comment **before** the close event fires — downstream consumers tracking the bug rely on the close-event payload for the forward link.
- When closing without intent to replace, mark the bug as `wontfix` or `known-issue` in the issue tracker so the bug carries forward as state, not as a closed-PR audit-log entry.
- For multi-concern PRs, prefer asking the contributor to split *before* closing — the close→reopen-as-different-contributor handoff loses ownership context.

The W17 evidence: litellm and codex are using the close-with-replacement strategy (#26446→#26453, #15701→/dev/null with intent); anomalyco/opencode is using the close-without-replacement strategy (#22612, #24200, #24047). The latter is leaking bug-class debt at a measurable rate per tick.
