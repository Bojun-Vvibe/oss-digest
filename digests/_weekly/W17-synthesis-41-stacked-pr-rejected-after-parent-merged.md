# W17 cross-repo synthesis #41 — stacked-PR-rejected-after-parent-merged: when a stack-base PR justifies its abstraction by pointing at the consumer that will plug into it, lands the abstraction, and then the consumer that motivated the abstraction closes unmerged in the same minute — the abstraction now exists in main with no first-party consumer, the design rationale recorded in the parent PR body silently becomes stale, and any future consumer must re-justify the abstraction's shape against a parent commit message that names a stacked-child PR which was never merged (2026-04-24T23:33Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through every PR before acting._

## The pattern in one sentence

**A coding-agent OSS project ships a *stack-base* PR whose body explicitly names the *stacked child* PR as the justification for the new abstraction's shape — "this PR adds a small `LogWriter` boundary so PR #N can plug in", "this PR adds a `RoutingExtensionPoint` so PR #M can register a new route", "this PR exposes `ToolMetadataHook` so PR #K can attach tool descriptors at request time" — the stack-base merges (the abstraction lands in main), and within the same minute, the stacked child *closes unmerged* (rejected on scope, design, or maintainer-priorities grounds), leaving the abstraction in main with the rationale recorded in the parent commit message pointing at a PR that no longer exists as a merged artifact, so any future consumer has to either re-justify the abstraction's shape from scratch (the original consumer's design constraints are no longer in main) or carry forward a phantom-rationale dependency on a closed PR; W17's anchor exhibit is openai/codex #19234 (`Refactor log DB into LogWriter interface` MERGED 23:27Z, +271/-21) which exposed a `LogWriter` trait whose body documented it as the boundary that #19455 (`Add gRPC feedback log sink` CLOSED unmerged 23:27Z, same minute) needed — the body of #19455 said *"This is stacked on #19234. That PR makes app-server log capture expose a small `LogWriter` boundary: a tracing `Layer` that can also flush accepted log entries. This PR adds the remote gRPC implementation for that boundary..."* — the parent merged, the child closed, the abstraction now lives in `codex_state::log_db::LogWriter` with the SQLite-only `LogDb` as its sole implementation in main; the gRPC sink that justified the abstraction's shape (bounded queue, best-effort unary RPC, no shared buffered-sink, drop-on-failure) is no longer present to validate the design choices; sibling exhibits include BerriAI/litellm #26457 (`[Infra] Declare proprietary license in litellm-enterprise metadata` MERGED 23:10Z) which mirrors the previously-merged #26369 (`litellm-proxy-extras` license fix) — here the pairing succeeded across sibling packages (PEP 639 metadata sweep on both halves) but the inverse case (one sibling lands, the other closes) is the structurally identical risk; and the still-open codex #19449 (`permissions: remove legacy read-only access modes` OPEN, refreshed 22:53Z) which positions itself as the consumer of the permissions abstraction landed in earlier ticks — if #19449 closes unmerged while the abstraction stays, the same phantom-rationale problem appears.

The bug is *not* the stacked PR being rejected (rejection is normal; not every stacked consumer should land). The bug is **the parent PR's commit message recording a justification that the merged tree can no longer validate**. Future readers of the parent see "this abstraction exists for use case X (see #N)"; they click through to find #N closed; they cannot tell whether the abstraction's shape (queue size, error handling, batching semantics, lifecycle) was correct *for X* or correct *in general* — the only consumer that would have demonstrated correctness for X is gone.

## Why this is *not* synthesis #35 (replacement-PR-after-close-as-scope-narrowing-tactic)

#35 names the case where a PR *closes* and a *narrower* replacement PR *opens* — the replacement is the same author/team committing to a smaller scope. **#41 names the case where the *parent* (the abstraction) succeeds and the *child* (the consumer that justified the abstraction) fails — there is no replacement PR for the child, just a now-orphaned abstraction in main.**

The two compose pessimistically: a #41 case (parent merged, child closed) where the *replacement* for the child later opens narrower would also be a #35 exhibit — but in W17's anchor, no replacement appears for #19455. The abstraction is on its own.

## Why this is *not* synthesis #39 (PR-body-declared-cross-PR-dependency-without-machine-readable-enforcement)

#39 names the case where one PR's body declares "depends on #M landing first" with no machine-readable link — the dependency exists in prose, the tracker doesn't enforce it. **#41 names the case where the dependency *was* honored (parent merged before child) and the *child still closed* — the prose-declared dependency wasn't the failure point; the child's own scope/design was.**

The two are dual: #39 is a sequencing-failure mode (the prose dependency could be ignored); #41 is a sequencing-success mode that produces a worse outcome (the prose dependency was honored, the parent landed expecting the child to follow, the child didn't). #39 says "the tracker doesn't know the order matters"; #41 says "the order was right and the abstraction is now an orphan anyway."

## Why this is *not* synthesis #21 (advertised-capability-vs-runtime-delivery)

#21 names cases where the catalog advertises capability X and the runtime delivers Y. **#41 names cases where the parent commit message advertises rationale X (the abstraction exists to support consumer #N) and the runtime tree contains rationale-but-no-consumer.**

#21 is a runtime-vs-catalog skew. #41 is a *commit-history-vs-tree* skew — the rationale is preserved in the merge commit forever; the tree has only one of the two artifacts the rationale referenced.

## Anchor exhibits (W17)

- **codex #19234 ↔ #19455** (parent MERGED 23:27Z, child CLOSED unmerged 23:27Z, **same minute**) — `LogWriter` trait now in main; gRPC sink that justified the trait's shape rejected. The parent commit message references the child PR by number; the child is now a closed PR.
- **codex #19410** (`Remove js_repl feature` OPEN, +77/-9261, refreshed 23:13Z) — the *inverse* shape: a 9184-line deletion PR removing an experiment that previously justified its own abstractions. If #19410 lands, every previously-merged PR that referenced `js_repl` becomes a #41-shaped phantom-rationale carrier. (The deletion itself is healthy; the *trail of phantom-rationale parent commits* it leaves behind is the W17 risk.)
- **codex #19449** (`permissions: remove legacy read-only access modes` OPEN, refreshed 22:53Z) — open consumer of an earlier-landed permissions abstraction; if it closes unmerged, the abstraction becomes orphaned the same way.
- **litellm #26457 ↔ #26369** (BOTH MERGED, sibling-package metadata sweep) — the structurally-symmetric *success* case: paired PRs across sibling packages both landed. The W17 risk is the asymmetric case (one sibling lands, the other closes) which would leave one package's metadata referencing a sibling-package PR that never merged.
- **litellm #26458 ↔ #26456 ↔ #26361** (W17 #39 anchor, prior tick) — #26458 closed unmerged with prose dependency on #26456; #26456 still open. If #26361 (the absorbing PR) merges before #26456, that's a #41 exhibit at the litellm tracker level — the absorber landed expecting the dependency PR to land first, dependency PR didn't, absorber is now in main with stale rationale.
- **opencode #23794** (W17 #40 anchor) — the dual-tool-surface PR; if the `terminal` tool lands but the follow-up consumers (agents that prefer `terminal` over `bash`) don't, same shape.

## Operational signal

When reviewing a PR whose body says "this is the abstraction for #N" (or the inverse, "this is stacked on #M"):

1. Check whether **both PRs in the pair are likely to merge**. A high-likelihood parent + low-likelihood child is the W17 #41 risk shape.
2. If only the parent will merge, **either narrow the parent's commit message to remove the phantom-rationale reference, or land the parent with a TODO/comment in code that future consumers must re-justify the abstraction's shape**.
3. Treat "stack-base PR with prose justification pointing at a stacked child" as a **load-bearing two-PR commit**, not as two independent PRs. If the child won't land, the parent's design rationale is incomplete.

## What W17 #41 looks like a week from now

If by next Friday the codex `LogWriter` trait either (a) gains a second consumer that re-validates the shape, or (b) gets refactored to remove the gRPC-shaped affordances (bounded queue, batching, drop-on-failure semantics) that #19455 justified, the synthesis closes as "self-healing." If it sits in main with the SQLite-only consumer for >7 days while a new feedback-sink design is debated, the synthesis is confirmed and we'll have a quantitative signal: **the half-life of phantom-rationale in a coding-agent codebase before it produces a real refactor cost.**
