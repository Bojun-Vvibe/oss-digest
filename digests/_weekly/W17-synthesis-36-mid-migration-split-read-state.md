# W17 cross-repo synthesis #36 — mid-migration-split-read-state: when a multi-PR migration train lands its head before its tail, the runtime briefly reads the same logical entity through two different storage / dispatch / contract paths, and downstream consumers see divergent values for the duration of the split (2026-04-24T21:31Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern in one sentence

**A coding-agent project decomposes a storage migration, a contract reshape, an artifact-channel sunset, or a package-boundary move into a multi-PR train where each PR is independently shippable, then lands the train *non-atomically* — head first, tail later — producing a finite but non-trivial window during which the same logical entity (a thread, a cost map, an artifact URL, a permissions policy, a project-management surface) is *read* by some code paths through the new representation and by other code paths through the old one, and the two reads return divergent values; in W17, ten anchor exhibits across openai/codex and BerriAI/litellm follow this script: codex #18900 (`Migrate fork and resume reads to thread store` MERGED 20:51Z) + codex #19280 (`Migrate thread turns list to thread store` OPEN) + codex #19266 (`add non-local thread store regression harness` OPEN) — fork/resume now reads from the new thread store while turns-list still reads from the old storage; codex #18584 (`[4/4] Honor Streamable HTTP MCP placement` OPEN) — train tail with three siblings presumably already landed, so MCP placement is honored on three of four entry points and ignored on the fourth; codex #19445 (`ci: stop publishing GNU Linux release artifacts` MERGED 21:29Z) — release channel sunset with no in-channel deprecation notice, downstream installers reading the old artifact URL silently 404 starting next release; codex #19414 (`permissions: make legacy profile conversion cwd-free` MERGED 20:42Z) + codex #19395, #19394, #19393, #19392, #19391 (OPEN, lockstep-rebased at 20:45Z) — the head of the permissions train landed while five sibling PRs remain open, so the permissions subsystem now reads cwd-free legacy profile conversion on the merged path and cwd-bound conversion on the five sibling paths; litellm #26449 (`[Feat] Day-0 support for GPT-5.5 and GPT-5.5 Pro` MERGED 21:10Z) + litellm #26361 (`feat: add azure/gpt-5.5 to model cost map` OPEN) — the OpenAI variant ships callable with full pricing; the Azure variant ships callable with no cost-map entry, so spend tracking silently reports `cost=0`; and litellm #25677 (`[Refactor] Proxy: move projects management to enterprise package` OPEN) — package-boundary move in flight, projects-management currently reachable through both the OSS surface (about to be removed) and the enterprise surface (about to be added).**

In each exhibit, the shape is identical: **a logical entity has two read paths during the migration window → the new path returns the new representation → the old path returns the old representation → there is no read-router that consolidates the two → callers reading through different code paths get different answers for the same question.** The bug is *not* the migration per se; the bug is that the migration's intermediate state is *visible* to runtime callers, and the maintainer's mental model of "this PR is independently shippable" assumes that no caller cares about the split window.

## Why this is *not* synthesis #19 (snapshot-vs-live-state)

#19 names cases where a *snapshot* (a cached value, a captured config, a frozen view) diverges from the *live* state because the snapshot was taken at a moment that no longer reflects current truth. **#36 names cases where there is no snapshot at all** — both sides of the divergence are live-reading their respective paths, and both sides are returning *current* truth from their respective storage. The values diverge because the two storage layers have not finished converging, not because one of them is stale.

The two patterns *can* compose: a snapshot taken during a #36 split window will become a #19 exhibit on the *other* side of the migration when the migration completes. But the originating bug is structural (#36) before it is temporal (#19).

## Why this is *not* synthesis #15 (sync-debt-as-merge-main-PR)

#15 names cases where a *single PR* accumulates rebase debt while waiting to land. **#36 names cases where the *train as a whole* is partially landed**, so the rebase-debt question for the still-open siblings is now compounded by the *runtime-divergence* question for callers reading through the partially-migrated subsystem.

In W17, the codex permissions train is *both* a synthesis-#15 exhibit (six PRs lockstep-rebasing) *and* a synthesis-#36 exhibit (one of the eight has merged, so the subsystem is partially migrated). The two patterns reinforce: the longer the train rebases (#15), the longer the split-read window stays open (#36).

## Why this is *not* synthesis #14 (published-spec-lies-registry-drift)

#14 names cases where a published *registry* (catalog, manifest, list of names) lies about what *exists*. **#36 names cases where two registries / storage layers / contract surfaces *exist simultaneously* and disagree about what an entity *is*.** #14 is about *presence*; #36 is about *representation*.

The litellm GPT-5.5 split (catalog says `azure/gpt-5.5` is supported, cost map has no entry) reads as a #14 exhibit at first — but the underlying cause is a synthesis-#36 split: the catalog migration landed (#26449) without the cost-map migration (#26361). The *symptom* surface is registry-drift; the *generating* surface is mid-migration split read.

## Why this is *not* synthesis #21 (advertised-capability-vs-runtime-delivery)

#21 names cases where a capability is advertised as available but the runtime cannot deliver it. **#36 names cases where the runtime *can* deliver the capability** — but through one of two paths, with different semantics, and the caller picks a path nondeterministically (or by code-path-of-origin) without knowing which one they got.

The codex thread-store split: fork/resume callers get the new-store representation; turns-list callers get the old-store representation. *Both* deliver. They just disagree on the answer.

## The exhibits

### Exhibit A — codex thread-store partial migration (#18900 merged, #19280 + #19266 open)

**[openai/codex#18900]** — MERGED 20:51Z. Title: *"Migrate fork and resume reads to thread store."* The fork/resume read path was migrated from the prior storage to the new thread store. **Adjacent: [openai/codex#19280]** (OPEN, 21:23Z) — *"[codex] Migrate thread turns list to thread store"* — and **[openai/codex#19266]** (OPEN, 21:06Z) — *"[codex] add non-local thread store regression harness."*

Pre-tick, the thread-store migration was three PRs in queue. Post-tick, one has landed and two remain open. **Mid-migration split read window: from 20:51Z to whenever #19280 merges.** During that window, a session viewed through fork/resume returns thread state from the new store; the same session viewed through turns-list returns thread state from the old storage. **A caller using both surfaces in one operation will see two different turn lists for the same logical thread.**

The non-local regression harness (#19266) is the migration's safety net — but it is *also* still open, so the safety net itself is not yet active during the split window.

### Exhibit B — codex MCP-placement train tail (#18584 [4/4])

**[openai/codex#18584]** — OPEN 21:13Z. Title: *"[4/4] Honor Streamable HTTP MCP placement."* The `[4/4]` prefix signals an upstream four-PR train where this PR is the tail. PRs `[1/4]`, `[2/4]`, `[3/4]` are presumably already landed in `main`. **Mid-migration split read window: MCP placement is honored on three of four entry points and ignored on the fourth.** A caller routing MCP requests through the fourth entry point gets *not-honored* placement; the same request through any of the first three gets honored placement. **The runtime answer to "is MCP placement honored?" depends on which entry point the caller uses.**

The synthesis-#36 shape is canonical here: the train was decomposed into four PRs presumably to make each independently shippable, but the *contract semantics* are uniform across entry points. Landing 3 of 4 produces a contract that is true 75% of the time and false 25% of the time, and the caller cannot tell which 25%.

### Exhibit C — codex GNU Linux release artifact channel sunset (#19445 merged)

**[openai/codex#19445]** — MERGED 21:29Z. Title: *"ci: stop publishing GNU Linux release artifacts."* Release artifact channel sunset. **Mid-migration split read window: from the next release onward, downstream installers / packaging scripts that read from the GNU Linux artifact URL silently 404; installers reading from any other still-published target succeed.** No in-channel deprecation notice landed in the PR — the only signal is the absence of the artifact at next release.

The two read paths here are not in the codebase; they are in *downstream consumers' build scripts*. The migration split is *across the project boundary*. **Synthesis #36 generalizes to release-channel sunsets**: the channel exists for some consumers and does not for others, and the maintainer cannot enumerate the consumers to coordinate the cutover. Direct synthesis #30 (default-flag-flip-as-breaking-change) co-anchor.

### Exhibit D — codex permissions train head landed (#19414 merged, five siblings open)

**[openai/codex#19414]** — MERGED 20:42Z. Title: *"permissions: make legacy profile conversion cwd-free."* The first PR off the eight-deep permissions train landed.

**Adjacent open siblings (lockstep-rebased at 20:45Z): [openai/codex#19395]** (*"finish profile-backed app surfaces"*), **#19394** (*"remove core legacy policy round trips"*), **#19393** (*"migrate approval and sandbox consumers to profiles"*), **#19392** (*"derive compatibility policies from profiles"*), **#19391** (*"make runtime config profile-backed"*).

**Mid-migration split read window: legacy profile conversion is now cwd-free on the merged path; the five sibling paths still read profiles through the cwd-bound conversion logic that is now slated for removal.** A caller routing through the merged path gets cwd-free behavior; the same logical operation through any of the five sibling paths gets cwd-bound behavior. **The permissions subsystem now answers "what is the conversion semantics?" with two different answers depending on the call site.**

The train depth dropped from 8 to 7 PRs, but the *split surface area* widened — pre-merge, all eight paths read the same (old) semantics; post-merge, six paths read the new and two read the old. (Counting: #19414 merged, #19395/#19394/#19393/#19392/#19391 open = 1 merged + 5 open = 6 in the active subset; the remaining 2 from the original 8 are auxiliaries.)

### Exhibit E — litellm GPT-5.5 catalog vs. Azure cost-map split

**[BerriAI/litellm#26449]** — MERGED 21:10Z. Title: *"[Feat] Day-0 support for GPT-5.5 and GPT-5.5 Pro."* Catalog addition for the OpenAI variants landed with full pricing.

**[BerriAI/litellm#26361]** — OPEN 21:00Z. Title: *"feat: add azure/gpt-5.5 to model cost map (mirror openai gpt-5.5 pricing)."* The Azure-side pricing mirror remains open.

**Mid-migration split read window: any call to `azure/gpt-5.5` succeeds at the routing layer (the catalog says supported) but lands `cost=0` in the spend log (the cost map has no entry).** Spend tracking silently under-reports for the duration of the split. The `LiteLLM_SpendLogs` row will have `model=azure/gpt-5.5` and `spend=0.0` for every call — visible only by reconciliation against upstream Azure billing.

**Synthesis #36 generalizes to feature-bundle-with-pricing splits**: the *capability* is shipped without the *accounting*, so the system functions but the books don't balance. The catalog and the cost map are two registries reading the same logical entity (a model name) and disagreeing about whether it has a price.

### Exhibit F — litellm projects-management package-boundary move (#25677 open)

**[BerriAI/litellm#25677]** — OPEN 21:16Z. Title: *"[Refactor] Proxy: move projects management to enterprise package."* Package-boundary refactor in flight, moving projects-management from the OSS surface to the enterprise package.

**Mid-migration split read window: while the PR is open, the OSS surface still reachably exposes projects-management; once it merges, the OSS surface stops exposing it and the enterprise surface starts.** The split here is *temporal* (callers reading the OSS surface today get one answer; tomorrow they get an `endpoint not found`). Direct synthesis #22 (privilege-by-exclusion) co-anchor — the migration *is* a privilege-narrowing event, and the split window is the period during which the narrowing has not yet bound.

The interesting question for #36: when does the OSS-surface deprecation notice land? If it lands *before* the move PR merges, downstream consumers can prepare. If it lands *with* or *after* the merge, the cutover is silent. The PR title gives no signal.

## Causal model

The synthesis-#36 pattern emerges from a *good* practice (decomposing migrations into independently shippable PRs) compounded with a *missing* practice (a read-router that fans both old and new paths to the new representation during the split window).

The fix is structural: **for any migration that decomposes into more than one PR, the first PR in the train should land a read-router that defaults to the *old* representation and switches to the *new* representation as later PRs land**. The router makes the split window invisible to callers — both code paths read through the router, the router answers from whichever store has the up-to-date representation, and the migration becomes atomic from the caller's perspective even though the PRs land non-atomically.

The W17 evidence: none of the six exhibits above introduced a read-router as part of the train. All six split the storage / contract / channel directly across code paths. The split-read window is therefore visible to callers in all six cases, and the duration of the visibility equals the time-to-merge of the train tail.

## Cross-repo audit checklist for migration-train authors

- Before opening PR `[1/N]` of any migration train, decide whether the migration target is *content-divergent* (callers will see different values during the split) or *content-equivalent* (the same value reached through different code).
- For content-divergent migrations, **land a read-router as `[1/N]` *before* any storage/contract changes**. The router should be a no-op on the first merge (read old, write old) and become consequential as later PRs land.
- For content-equivalent migrations (e.g., the schema-decoder refactor pattern), the split-read window does not produce divergent values, so a router is unnecessary. The W17 evidence is mostly content-divergent (thread store, cost map, permissions semantics, MCP placement) — the router would have helped in five of the six exhibits.
- For release-channel sunsets (synthesis #36 across the project boundary), land the deprecation notice *one release before* the sunset, not in the same PR as the sunset.

## What this synthesis predicts

If a migration train in W17 lands its head without a read-router, the next two ticks should expect:

1. **A bug report from a downstream consumer who hit the split-window divergence**, framed as "the same operation returns different answers depending on which API I call." (The litellm GPT-5.5 cost-map exhibit is the most likely candidate — anyone reconciling spend against Azure billing this week will notice.)
2. **An emergency router PR** opened as a cleanup of the now-visible split — landing later than `[1/N]` would have, doing more work than `[1/N]` would have done, and reading as a synthesis-#20 graveyard candidate if the train tail merges before the router lands (because the router is then redundant).
3. **A retroactive blog post / changelog entry** from the maintainer explaining the split window, framed as a known-issue rather than as a structural pattern. (The codex GNU Linux artifact sunset is the most likely candidate.)

The W17 evidence does not yet contain the bug report or the router PR. Watch the next dispatcher ticks.
