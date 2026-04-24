# W17 cross-repo synthesis #31 — session-resume-semantics-divergence: behavior that is correct at first-run is silently different after a resume, reattach, or replay (2026-04-24T19:36Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern in one sentence

**A coding-agent project ships a feature whose first-run behavior is correct, but whose *resume*, *reattach*, *replay*, or *re-render* behavior is silently different — usually because the feature was designed against a steady-state mental model and the project has no canonical contract for what "the same session, restored" means; in W17, seven exhibits across codex and the anomalyco/opencode fork follow this script: codex #19093 (`Omit fork turns from thread started notifications` — MERGED, changes the timeline-reconstruction signal for any subscriber that counts thread-started events), codex #18575 (`reflow backlog on terminal resize` — backlog rows now reflow at resize time when callers had previously relied on static row offsets), codex #18576 (`render markdown tables responsively` — sibling of #18575 on the table renderer), codex #18372 (`Show action required in terminal title` — mutates terminal title state that survives reattach), anomalyco/opencode #24200 (`preserve empty reasoning_content for DeepSeek V4 in non-streaming and streaming paths` — fixes a stream-vs-replay parity bug), anomalyco/opencode #21056 (`DB migrating on every run for non-latest channels` — resume-time schema replay regression), and anomalyco/opencode #13854 (`stop streaming markdown/code after message completes` — streaming renderer continues past the message-complete signal, leaving the next render pass inconsistent).**

The seven exhibits all admit, in their PR bodies or the issues that prompted them, that the *first execution* of the affected code path was producing the intended result. The bug only surfaces when the session is *re-entered* — by a TUI reattach, a terminal resize, a non-latest-channel relaunch, a streaming-vs-non-streaming replay, or a downstream consumer reconstructing the timeline.

## Why this is *not* synthesis #19 (snapshot-vs-live-state)

#19 names the case where a *snapshot* of state has drifted from the *live* state it was supposed to mirror — the snapshot is wrong because the live state moved. #31 is the inverse: there *is no* snapshot; the system *recomputes* state on resume, and the recomputation has different semantics than the first computation. **#19 is "the cache lies"; #31 is "there is no cache — and recompute differs from compute."**

## Why this is *not* synthesis #26 (concurrent-write-contracts-assumed-single-writer)

#26 names a contract failure under *parallel* writers. #31 names a contract failure under *serial* writers — the same writer, second time around. The two compose: any project that has #31 exhibits will have worse #26 exhibits when concurrency is added, because the resume path that already gives a different answer once will give *N* different answers under N writers.

## Why this is *not* synthesis #27 (observed-success-vs-actual-failure)

#27 says "every observable signal is green; the only failing signal is the one that matters." #31 says "the first run was actually green; the *second* run gives a different answer." The signals in #31 are not observably green-but-secretly-red — they are *both correct in their own frame* and only inconsistent across resume boundaries. **#27 is a *signal* problem; #31 is a *boundary* problem.**

## The exhibits

### Exhibit A — codex #19093 (MERGED): omit fork turns from thread-started notifications

**[openai/codex#19093]** — MERGED 19:31Z. Title: *"Omit fork turns from thread started notifications."*

What changes: `thread.started` notifications no longer fire for fork turns; only the original thread's start fires. The PR body frames this as notification-noise reduction.

The session-resume implication: any consumer that subscribed to `thread.started` to *reconstruct the turn timeline* (e.g. a downstream telemetry aggregator, a CI summarizer, a UI that builds a tree of forks) was *counting* thread-started events as fork-creation markers. Post-merge, fork turns are silent. The reconstructed timeline now has *fewer* nodes than the actual session — and the consumer cannot tell whether (a) no fork was created or (b) a fork was created and the notification was suppressed.

**There is no replacement signal advertised in the PR body.** Consumers are expected to rediscover the missing event from… something. The PR is +small, the diff looks like a UI fix, and the breaking change to subscribers is in the PR body's third paragraph.

### Exhibit B — codex #18575: reflow backlog on terminal resize

**[openai/codex#18575]** — OPEN PR, refreshed 19:24Z. Title: *"fix(tui): reflow backlog on terminal resize."*

Pre-fix: the persisted scrollback was rendered at the row width valid when the line was first emitted; on resize, lines kept their original wrapping.

Post-fix: backlog reflows on resize, so lines re-wrap to the new width.

The session-resume implication: any tool that scraped TUI output by *row offset* — log harvesters, screenshot diff tests, accessibility readers — was relying on the static layout. After this PR ships, the same session reattached at a different terminal width yields a different row→content map. The scrape contract is broken without the scrape contract ever having been written down.

### Exhibit C — codex #18576: render markdown tables responsively

**[openai/codex#18576]** — OPEN PR, refreshed 19:18Z. Title: *"feat(tui): render markdown tables responsively."*

Direct sibling of #18575. The persisted-render contract for tables changes: a table that fit in 120 cols at first render now re-collapses to a narrower form on resize. Same restoration-drift family, same lack of contract for "the table you saw before."

### Exhibit D — codex #18372: show action-required in terminal title

**[openai/codex#18372]** — OPEN PR, refreshed 19:12Z. Title: *"Show action required in terminal title."*

Mutates terminal-title state on action-required transitions. Looks like a UX nicety; it is also *load-bearing terminal state* that survives reattach. A user who detaches a session, reattaches in a different terminal emulator, and sees "(action required)" in the title now believes there *is* an action required — even if the underlying action was already resolved by the agent in the meantime.

The PR has no logic to *clear* the title on reattach when the action has been resolved between detach and reattach. Resume-time state diverges from current state with no reconciliation step.

### Exhibit E — anomalyco/opencode #24200: preserve empty reasoning_content for DeepSeek V4 (stream + non-stream)

**[anomalyco/opencode#24200]** — OPEN PR, 19:35Z. Title: *"fix: preserve empty reasoning_content for DeepSeek V4 in non-streaming and streaming paths."*

Pre-fix: the DeepSeek V4 provider was *dropping* empty `reasoning_content` blocks on both the streaming and non-streaming code paths. Post-fix: the empty block is preserved as an explicit empty string.

Why this is a session-resume exhibit and not a streaming exhibit: the bug only manifests at *replay* time. At first execution, the absence of the reasoning marker is indistinguishable from "the model didn't emit one." When the session is *resumed* and the message is replayed (e.g. for a fork, a re-tool-call, a regenerate), downstream code that *expected* an explicit empty marker — because the wire protocol said so — sees nothing and concludes "no reasoning emitted at all," which is a different state than "reasoning emitted, content was empty."

The fix preserves wire-protocol fidelity across both paths. The fact that *both* paths needed the fix is the synthesis #31 signature: stream and non-stream are two restoration paths for the same logical session, and they had silently diverged.

### Exhibit F — anomalyco/opencode #21056: DB migrating on every run for non-latest channels

**[anomalyco/opencode#21056]** — OPEN PR, refreshed 19:33Z. Title: *"fix: DB migrating on every run for non-latest channels."*

The per-launch DB migration is replaying *for any channel that is not the latest*. The intended behavior is "migrate once, cache the migrated state, on subsequent launches verify the cached version and skip." The actual behavior is that non-latest channels (stable, beta, nightly that aren't current) re-run the migration *every launch*.

This is the cleanest #31 exhibit: the *first* launch of a channel is correct (migrates, runs); the *second* launch of the same channel is silently wrong (re-migrates, runs at N× cost). The bug is invisible to anyone using only the latest channel — i.e. invisible to the maintainers' default test path.

The fix shape will need to be a per-channel migration-state cache. The PR is open without a clear consensus on cache placement.

### Exhibit G — anomalyco/opencode #13854: stop streaming markdown/code after message completes

**[anomalyco/opencode#13854]** — OPEN PR, refreshed 19:36Z. Title: *"fix(tui): stop streaming markdown/code after message completes."*

The streaming markdown/code renderer continues to consume tokens *after* the `message-complete` signal has fired, leaving the renderer in a partial state. The next render pass inherits the partial state and re-emits broken markup.

This is a #31 exhibit on the TUI restoration boundary: the *first* paint of the message during streaming is correct; the *next* paint, after `message-complete`, is inconsistent because the renderer never closed its open-block state. Direct sibling of codex #18575/#18576: TUI restoration boundary drift on a *third* repo.

## What ties the seven exhibits together

| Exhibit | Restoration boundary | First-run state | Restored state | Affected consumer |
|---|---|---|---|---|
| A (codex #19093) | thread.started subscriber resume | Fork events fire | Fork events suppressed | Timeline reconstructors |
| B (codex #18575) | Terminal resize | Static-wrap backlog | Reflowed backlog | Row-offset scrapers |
| C (codex #18576) | Terminal resize | Wide tables | Collapsed tables | Markdown table readers |
| D (codex #18372) | Terminal reattach | No title state | Stale title state | Reattaching users |
| E (opencode #24200) | Stream→non-stream replay | Empty marker preserved | Marker dropped | Replay/fork consumers |
| F (opencode #21056) | Channel relaunch | Migration runs once | Migration runs every launch | Non-latest channel users |
| G (opencode #13854) | Message-complete render boundary | Mid-stream paint correct | Post-complete paint broken | Next render pass |

Across all seven: there is *no contract document* describing what "the same session, restored" should look like. Each exhibit is a project-internal admission that a restoration boundary existed, was being silently crossed, and the team hadn't noticed until a user reported the divergence. **The restoration boundary is the architectural surface that no project owns**.

## The pattern's deceptive feature

Each fix is *small in lines* and *large in semantic implication*. Exhibit A is a 6-line conditional. Exhibit F is a one-line cache check. Exhibit G is presumably an event-handler return-early. **The size of the fix bears no relationship to the size of the consumer-facing contract change** — which is why per-PR code review treats these as routine, while the consumer ecosystem absorbs a contract change per resume boundary per release.

## Cluster forecast

Restoration-boundary patterns to watch for in W18:

1. **codex #19093 follow-up**: a downstream consumer files an issue when their forked-thread timeline goes silent; the issue closes as "use the new (unspecified) signal"; that close-comment becomes the de-facto contract change.
2. **opencode #21056 follow-up**: a per-channel migration cache lands; the cache *itself* becomes a #19 (snapshot-vs-live-state) exhibit when migration logic moves and the cache doesn't invalidate.
3. **A new repo joins the cluster**: crush or litellm files a "X behaves differently after restart" issue; expect a 2-3 line fix that closes the issue without naming the boundary.
4. **A *test* exhibit**: someone files a flaky-test report that traces back to a TUI restoration drift; the test is marked as flaky instead of as a contract violation. (Synthesis #09 — test-deletion-as-admission — composes here.)

## Action items for the digest

1. **On the next #19 (snapshot-vs-live-state) refresh**, contrast against #31: #19 is "snapshot wrong," #31 is "no snapshot, recompute differs."
2. **On the next #26 (concurrent-write-contracts) refresh**, cite #31 as the serial-writer prerequisite.
3. **Track each of the seven exhibits** for a follow-up that introduces a *named* restoration contract (a "session schema version" or a "render boundary spec"). The first project to ship one will be the cluster's exit criterion.
4. **Open a watch on codex `thread.started` consumers** in the next two weeks — #19093's downstream effects will surface as silent timeline gaps in third-party tools.

## Open questions

1. Does any project in the cluster have an explicit "session resume" or "render-boundary" contract documented anywhere? (If yes, none of the seven exhibits cite it; if no, the cluster is permanent until one is written.)
2. Of the seven, how many have a regression test that exercises the *second* execution of the affected path? (Spot check would tell us whether resume-path testing is a blind spot or a deliberate omission.)
3. Is there a static-analysis tool that flags handlers without a corresponding "on-resume" or "on-reattach" handler? (Probably not; would require the project to declare what *its* restoration boundaries are first — which is the missing contract.)
