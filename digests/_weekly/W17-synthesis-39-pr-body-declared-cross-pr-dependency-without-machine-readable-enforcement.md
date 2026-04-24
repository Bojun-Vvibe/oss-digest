# W17 cross-repo synthesis #39 — PR-body-declared cross-PR dependency without machine-readable enforcement: when the only place that says "merge PR A before PR B" is a prose paragraph in PR B's body — not a GitHub `Depends on` link, not a draft-marker, not a CI check, not a milestone, not a label, not a base-branch redirect — the dependency is invisible to the merge UI, invisible to the auto-rebase machinery, invisible to a reviewer who jumps straight to the diff, and the only barrier between "merging in the wrong order" and "ship a half-coherent change" is whether the human merging clicked through every paragraph of the description (2026-04-24T22:50Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through every PR before acting._

## The pattern in one sentence

**A coding-agent OSS project files PR B that semantically depends on PR A landing first — the dependency is real (B's diff references symbols A introduces, B's tests assume A's behavior, B's runtime path executes A's code path) — but the dependency is documented *only* as English prose inside B's PR body (a "Dependency note" paragraph, an inline aside, a checklist item), with no machine-readable artifact (no `Depends on #A` line that the GitHub UI / mergify / auto-rebase / CI would parse, no draft-marker on B until A merges, no CI job that fails B until A is merged into base, no shared milestone or label or base-branch redirect that surfaces the coupling), so the merge UI presents B as ready-to-merge whenever its own checks pass — and a reviewer who focuses on the diff, ignores the description, and clicks "Squash and merge" gets a *technically green* merge that ships a half-coherent change: B's code references symbols A defines (build break or runtime null), or B's tests pass on B's branch but fail on main once A's behavior diverges, or B silently mis-routes because A's flag is absent; in W17, four anchor exhibits across BerriAI/litellm and openai/codex follow this script: litellm #26458 (`[Feat] Add azure/gpt-5.5 + azure/gpt-5.5-pro entries (+ dated variants)` filed 22:14Z, CLOSED 22:41Z) carried an explicit "Dependency note" stating *"`supports_low_reasoning_effort` is set on `azure/gpt-5.5-pro*` here, but the flag itself is introduced in #26456 … Until #26456 lands, the flag on the Azure entries is inert"* — the prose declares the dependency, GitHub does not; the PR was closed for an *unrelated* reason (duplicate of #26361) before the ordering bug could fire, but the *next* author re-filing the same Azure-entries change will inherit the same prose-only dependency on #26456; codex #19449 (`permissions: remove legacy read-only access modes` OPEN) lives in a permissions train alongside #19395, #19394, #19393, #19392, #19391, #19414, #19410 — the train's *internal merge order matters* (deletion PRs must land after the additions that obviate them, additions must land after the schema-defaults PRs), and the order is documented only in scattered paragraphs across each PR's body — there is no machine-readable train manifest; codex #19266 (`add non-local thread store regression harness` MERGED 22:45Z) declares in its body that it *tests* the migration that #19280 (`Migrate thread turns list to thread store` OPEN at 22:45Z) will perform — the harness merged *before* the migration, with the dependency declared only in prose; codex #19422 (`Clarify bundled OpenAI Docs upgrade guide wording` MERGED 22:35Z) was the prose-declared follow-up to #19443 (`Add gpt-image-2 to bundled OpenAI Docs skill` MERGED 21:48Z) — the catalog landed first, the docs catch-up was tracked only in synthesis #38's narrative and in commit-message context, never in a machine-readable link; in every exhibit, the *dependency* is real and the *enforcement* is a paragraph of English text.**

The bug is *not* prose-declared dependencies (they are sometimes the right tool for nuance the issue tracker cannot model). The bug is **the absence of a machine-readable mirror** — the same English statement should appear *somewhere* the GitHub UI, the auto-rebase bot, the CI system, or the merge queue can read. When the only declaration is prose, the dependency is invisible to every automated guard the project relies on.

## Why this is *not* synthesis #36 (mid-migration-split-read-state)

#36 names cases where a *single migration* is mid-flight and the system has two read paths (old and new) live simultaneously. **#39 names cases where two distinct PRs have a *prose-only* ordering relationship** that the merge tooling cannot enforce.

The two compose. A #36 mid-migration almost always involves multiple coordinated PRs (the schema PR, the writer PR, the reader PR, the migration PR, the cleanup PR), and if the ordering between those PRs lives only in prose, every step transition is a #39 hazard. In W17, the codex thread-store migration is a #36 exhibit (#19280 still open: split read between old `thread_turns_list` and new `thread_store`); the fact that the regression harness #19266 merged *before* the migration #19280 with the ordering declared only in #19266's body is the #39 hazard layered on top.

## Why this is *not* synthesis #37 (deletion-PR-injected-into-additive-train)

#37 names cases where a train of PRs that *appear* additive secretly contains a deletion PR that breaks the train's monotonicity. **#39 names the *machinery gap* — the absence of any machine-readable signal of cross-PR coupling**, regardless of whether the coupling is additive-additive, additive-deletion, or deletion-deletion.

#37 is a *content* hazard (the train is not what it looks like). #39 is a *coordination* hazard (the train is what it looks like, but the merge order is encoded only in human-readable prose). A reviewer can see a #37 hazard by reading every diff in the train carefully; a #39 hazard requires reading every *PR body* in the train carefully, *and* trusting that no author forgot to write the dependency note.

## Why this is *not* synthesis #20 (patch-PR-graveyard)

#20 names cases where PRs sit unmerged indefinitely. **#39 names cases where PRs *do* merge — but in the wrong order**, because the order constraint was prose-only and the merge UI did not surface it.

The two are opposite hazards. #20 is "PRs don't ship." #39 is "PRs ship — out of order, with prose-only ordering constraints violated." A graveyard-prone project can avoid #39 simply by having no PRs to coordinate; a high-velocity project (which all five repos in this digest are) is exposed to #39 specifically because the volume of in-flight PRs makes prose-only coordination unworkable.

## Why this is *not* synthesis #14 (published-spec-lies-registry-drift)

#14 names cases where a *published registry* lies about what exists. **#39 names cases where the *PR-tracker itself* — not the produced artifact, but the meta-tooling — fails to surface coupling between in-flight changes.**

#14 is about the catalog drifting from the runtime. #39 is about the *change set* (the set of in-flight PRs) drifting from the *intended merge plan*. The intended merge plan exists in someone's head and partially in scattered PR-body paragraphs; the GitHub change-set view sees only an unsorted bag of independent PRs.

## What sets the alarm

For each W17 exhibit, the *signal* is the same English-prose tell in the PR body:

- **Phrases**: "Until #X lands…", "Depends on #X", "This PR is a follow-up to #X", "Should land after #X", "Sibling PR: #X", "Dependency note: #X", "Pre-req: #X", "Requires #X first."
- **Contexts**: a "Dependency note" paragraph at the bottom of the PR body; an inline aside in the PR description; a checklist item that mentions another PR; a comment by the author saying "merge after #X."

In W17:
- **litellm #26458's body** carries a "Dependency note" paragraph: *"`supports_low_reasoning_effort` is set on `azure/gpt-5.5-pro*` here, but the flag itself is introduced in #26456 (along with the `gpt-5.5-pro` `low`-rejection logic in `OpenAIGPT5Config.map_openai_params`). Until #26456 lands, the flag on the Azure entries is inert (no effect — `low` continues to pass through). After #26456 merges, both OpenAI and Azure pro variants will reject `low` consistently."* This paragraph is the *only* declaration. There is no `Depends on #26456` line on the PR. The merge button on #26458 was green at any moment its own CI passed, regardless of #26456's state. (The PR was closed for an unrelated reason — duplicate of #26361 — but the prose-only dependency would have transferred to whoever re-filed the work.)
- **codex permissions train** (#19449 + #19395 + #19394 + #19393 + #19392 + #19391 + #19414 + #19410): the train's intra-train ordering is documented in scattered prose across the PR bodies. There is no train-level manifest, no shared label that encodes order, no merge-queue group.
- **codex thread-store harness/migration**: #19266 (harness) merged 22:45Z; #19280 (migration) still OPEN at 22:45Z. The harness's PR body declares it tests the migration — the *only* machine-readable signal of coupling is the words "thread store" in both titles.
- **codex gpt-image-2 catalog/docs**: #19443 (catalog) MERGED 21:48Z; #19422 (docs clarification) MERGED 22:35Z. The 47-minute window between them was held together by the docs PR's body referencing the catalog — no machine-readable link.

## Mechanism

1. An author files PR A (the "prerequisite" — defines a flag, introduces a symbol, performs a migration, lands a catalog entry).
2. The same author or a different author files PR B (the "consumer" — uses the flag, references the symbol, exercises the migrated state, references the catalog entry).
3. PR B's body documents the dependency as prose: "Until #A lands, this PR is inert" / "Depends on #A" / "Sibling: #A."
4. **No machine-readable mirror is created**: not GitHub's `Depends on` linker, not a draft marker, not a CI gate, not a merge-queue group, not a shared label.
5. PR B's CI is green (its own tests pass — possibly because they mock the dependency, possibly because the dependency is genuinely inert without A).
6. A reviewer or maintainer with merge rights opens PR B, looks at the diff, the CI status, the approval count — and merges. The reviewer may or may not have read the PR body.
7. PR A is *not yet merged*. PR B's code is now in main, referencing symbols that don't exist (build break) or carrying inert flags that quietly do nothing (silent-drop, synthesis #34) or testing migrations that haven't happened (#36).
8. The build break, if any, is caught by *post-merge* CI on main — too late to undo without a revert.
9. The silent-inert case is worse: nothing breaks, the catch-up window from synthesis #38 simply opens, and the prose dependency that documented the coupling is now buried in a closed-PR description that nobody reads.

## Action

- **For maintainers**: when a PR body declares a dependency in prose, *also* add a machine-readable signal: GitHub's `Depends on` or `Closes` linker, a draft-marker (mark the PR as draft until the dependency lands), a shared label like `train:permissions` or `blocked-by:#26456`, a base-branch redirect (target the dependency's branch instead of main, so a merge into the dependency's branch propagates), a merge-queue group. Pick at least one machine-readable mirror.
- **For reviewers**: before clicking merge, search the PR body for the strings `"#"`, `"Depends"`, `"Until"`, `"After"`, `"Sibling"`, `"Pre-req"`. If any match, verify the referenced PR's state matches what the body assumes.
- **For PR-author tooling (linters, templates)**: add a PR-template field for "Depends on" that, if filled in, generates the machine-readable artifact. Treat a non-empty field with no machine-readable mirror as a CI failure.
- **For projects with merge queues**: route prose-declared dependencies into queue groups; refuse to dequeue a consumer PR before its prerequisite is merged.
- **For digest writers**: the *cross-PR dependency network* is a first-class artifact. A daily digest should map declared-vs-undeclared dependencies; a weekly synthesis should flag projects where the prose-only ratio is rising.

## Anchor exhibits this synthesis was extracted from

- BerriAI/litellm#26458 (`[Feat] Add azure/gpt-5.5 + azure/gpt-5.5-pro entries (+ dated variants)` CLOSED 22:41Z — body's "Dependency note" paragraph declared dependency on #26456) + #26456 (`gpt-5.5 reasoning_effort capability flags` OPEN, the prerequisite) + #26361 (the older PR that absorbed #26458's work — same prose-only dependency on #26456 transfers)
- openai/codex#19449 (`permissions: remove legacy read-only access modes` OPEN) + the surrounding permissions train #19395 + #19394 + #19393 + #19392 + #19391 + #19414 + #19410 — train ordering only in scattered prose
- openai/codex#19266 (`add non-local thread store regression harness` MERGED 22:45Z) + #19280 (`Migrate thread turns list to thread store` OPEN at 22:45Z) — harness merged before migration, coupling only in title-keyword overlap
- openai/codex#19422 (`Clarify bundled OpenAI Docs upgrade guide wording` MERGED 22:35Z) + #19443 (`Add gpt-image-2 to bundled OpenAI Docs skill` MERGED 21:48Z) — 47-minute prose-only catch-up window
- openai/codex#19207 (`Forward Codex Apps tool call IDs to backend metadata` MERGED 22:49Z) + #19432 (`Add token usage to turn tracing spans` OPEN 22:46Z) — two parallel tracing-contract widening PRs with no shared coupling signal

## Reverse direction (when the pattern does *not* fire)

The pattern requires (a) a real cross-PR semantic dependency and (b) the absence of any machine-readable signal. Projects that use base-branch chaining (PR B targets PR A's branch as base, so merging A's branch into main also includes the rebase relationship) eliminate the gap mechanically — the merge queue cannot dequeue B before A by construction. Projects that use feature-branch trains (a long-lived feature branch that accumulates PRs A, B, C, then merges to main as one) also avoid the gap by deferring the ordering question to a single merge event. Projects that adopt mergify or `bors` with explicit `Depends on` parsing avoid the gap at the queue level.

The W17 anchor projects mostly merge directly to main with squash-merges, no merge queue, and no automated `Depends on` parser. That choice trades coordination for velocity. #39 is the price.

## Composition with other syntheses

- **#39 + #38** (capability-flag-vs-callability-skew): a #38 catch-up window is a #39 hazard whenever the catch-up PR's only signal is its prose-declared follow-up relationship to the dispatch PR. Every #38 exhibit in W17 was also a #39 exhibit because no project linked the two PRs machine-readably.
- **#39 + #36** (mid-migration-split-read-state): mid-migration trains are #39-prone because the ordering between schema PR / writer PR / reader PR / cleanup PR is rarely encoded outside prose.
- **#39 + #37** (deletion-PR-injected-into-additive-train): deletion-into-additive trains are #39-prone because the *fact* that the train is non-monotonic is itself prose-declared.
- **#39 + #26** (concurrent-write-contracts-assumed-single-writer): when two PRs touch the same surface in the same window with no coupling signal (e.g., codex #19207 + #19432 both widening the tracing-span schema), the #26 single-writer assumption is violated *at the PR-coordination layer*, and the only declaration is each PR's own description.
