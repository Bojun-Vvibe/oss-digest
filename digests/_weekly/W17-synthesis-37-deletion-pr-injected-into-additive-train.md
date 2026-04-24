# W17 cross-repo synthesis #37 — deletion-PR-injected-into-additive-train: when a multi-PR migration train that has been monotonically *adding* capability suddenly receives a sibling PR that *removes* legacy capability from the same subsystem, the train loses its ordering invariant and the rebase-order question becomes load-bearing on runtime contract — callers reading through the train mid-flight see capability appear and disappear in a non-obvious sequence depending on which PR lands first (2026-04-24T22:32Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through every PR before acting._

## The pattern in one sentence

**A coding-agent project assembles a multi-PR train where each PR independently adds, refactors, or expands a single subsystem (a permissions surface, a docs surface, a provider-default surface, an LSP edit surface), the train accumulates 4–8 open siblings under lockstep rebase, and then a *deletion* PR — one that removes a legacy mode, deletes a docs path, flips a default to its inverse, or narrows a privilege boundary — gets added to the same train without an ordering contract; in W17, five anchor exhibits across openai/codex, BerriAI/litellm, anomalyco/opencode, and charmbracelet/crush follow this script: codex #19449 (`permissions: remove legacy read-only access modes` OPEN 22:03Z) injected into the codex permissions train alongside additive siblings #19395, #19394, #19393, #19392, #19391 (all OPEN, lockstep-rebased) and the head-of-train #19414 (`make legacy profile conversion cwd-free` MERGED 20:42Z) — the train now mixes additive PRs, refactor PRs, and a deletion PR with no declared rebase order; litellm #26454 (`Remove docs/my-website, point contributors to litellm-docs repo` MERGED 21:54Z) injected into the litellm docs/contributor surface alongside additive #26457 (`Declare proprietary license in litellm-enterprise metadata` OPEN 22:31Z) — docs-deletion landed first while metadata-addition is still open, so for ~37 minutes the contributor surface had neither the old docs nor the new metadata as ground truth; anomalyco/opencode #24218 (`fix(provider): auto-enable interleaved for reasoning models` OPEN 22:15Z) injected into the provider-default surface alongside the still-open #24202 (`condense tool descriptions ~66%`) and the just-merged #24168 (`Refactor HttpApi auth middleware wiring` MERGED 21:11Z) — the provider-config defaults are mid-flight on three concurrent PRs, one of which (#24218) flips a default from off to on while the others reshape the surface around it; crush #2699 (`fix(lsp): enforce workspace boundary for workspace edits` OPEN 10:26Z) injected into the LSP edit surface alongside crush #2694 (`deduplicate skills discovered via symlinked directories` OPEN 10:36Z) and the merged #2700 (`implement OnRetry logging with structured retry fields` MERGED 12:40Z) — the LSP edit privilege boundary is being narrowed (deletion of write-anywhere) while the skills loader is being deduplicated (deletion of double-counted entries) and the retry logger is being structured (addition); and the cross-train sibling: codex #19410 (`Remove js_repl feature` OPEN 18:34Z) sitting alongside codex #19443 (`Add gpt-image-2 to bundled OpenAI Docs skill` MERGED 21:48Z) — same codebase, same release window, one PR removing a tool, another adding a model.**

In each exhibit, the shape is identical: **a subsystem accumulates an additive train → a deletion PR is filed against the same subsystem → no rebase-order contract is declared in either PR body → the rebase-order then determines runtime behavior in a way that is not visible from any single PR diff.** The bug is *not* the deletion (the deletion is usually correct cleanup); the bug is that the deletion's *position in the merge order* relative to the additive siblings is not part of the train's published shape, and the maintainer's mental model of "this PR is independently shippable" assumes the deletion is order-independent — which it is not, because the additive siblings reference the legacy capability the deletion removes.

## Why this is *not* synthesis #15 (sync-debt-as-merge-main-PR)

#15 names cases where a *single PR* accumulates rebase debt while waiting to land. **#37 names cases where a *deletion PR is added to a train that was previously additive*** — the rebase-debt question is now compounded by the *what-does-the-subsystem-look-like-mid-train* question. If the deletion lands first, the open additive siblings reference a legacy capability that no longer exists and need to be re-authored. If an additive sibling lands first, the deletion needs to widen its scope to also remove what the sibling just added (or the sibling is left as dead code). Neither outcome is obvious from any single PR diff.

In W17, the codex permissions train is now *both* a synthesis-#15 exhibit (the 6-PR rebase-debt train) *and* a synthesis-#37 exhibit (the train just received a deletion sibling that changes the rebase calculus for all 6).

## Why this is *not* synthesis #20 (patch-PR-graveyard)

#20 names cases where a PR is filed and then abandoned — closed without merge or left open indefinitely. **#37 names cases where the deletion PR is *active and intended to land*** — it is part of the maintainer's plan, not an abandoned attempt. The deletion's relationship to the additive siblings is the bug class, not the deletion's intent.

The two patterns *can* compose: if the deletion PR closes without merge after the additive siblings have already rebased to remove the legacy capability anyway, the closed-deletion becomes a #20 exhibit. But the originating bug is structural (#37) before it becomes archival (#20).

## Why this is *not* synthesis #36 (mid-migration-split-read-state)

#36 names cases where a multi-PR train lands its head before its tail, producing a split-read window during which the same logical entity is read through two different storage / dispatch / contract paths. **#37 names cases where the *direction* of the train is mixed — some PRs add capability, some remove it — and the read-path question becomes "which capabilities exist at all" rather than "which representation of an existing capability is current."** #36 is about *representation drift* during migration; #37 is about *capability drift* during cleanup-mixed-with-feature-work.

The two patterns reinforce: a mid-migration split (#36) that also includes a deletion PR (#37) produces a window during which some callers see the new representation, some see the old representation, and some see *no* representation because the deletion PR removed it before the migration tail landed. Triple-divergence.

## Why this is *not* synthesis #30 (default-flag-flip-as-breaking-change)

#30 names cases where a single PR flips a default from one value to another, breaking callers that relied on the old default. **#37 names cases where the deletion PR *removes the entire flag* (not just flips it)** — and the deletion is filed alongside additive siblings that may or may not still reference the removed flag. #30 is about *defaults*; #37 is about *capabilities*.

The crush #2699 (LSP workspace boundary enforcement) exhibit is *both* a #30 exhibit (the workspace-boundary check default flips from "no enforcement" to "enforcement") *and* a #37 exhibit (the prior write-anywhere capability is being *removed*, not just gated behind a stricter default). The two patterns nest.

## What sets the alarm

For each W17 exhibit, the *injection signal* is the same: the train's PR titles change tone partway through. Additive siblings have titles like "Add X", "Implement Y", "Migrate Z to new path". A deletion sibling lands with a title like "Remove legacy X", "Drop unused Y", "Stop publishing Z". The tone-shift is the maintainer telling reviewers "this train is no longer monotonic" — but the rebase-order contract is not updated.

In W17:
- **codex permissions train**: 6 additive/refactor PRs (#19414, #19395, #19394, #19393, #19392, #19391), then #19449 (`remove legacy read-only access modes`) injected.
- **litellm contributor surface**: deletion #26454 (`Remove docs/my-website`) landed, then additive #26457 (`Declare proprietary license`) opened 37 minutes later — deletion-then-additive ordering, the inverse of the codex case.
- **anomalyco/opencode provider defaults**: refactor #24168 (auth middleware wiring) merged, additive #24202 (condense tool descriptions) open, default-flip #24218 (auto-enable interleaved) open — three different change types in one subsystem within one hour.
- **crush LSP/skills/retry surface**: deletion-class #2699 (workspace-boundary enforcement, removes write-anywhere capability) open, deletion-class #2694 (deduplicate symlinked skills, removes double-counting capability) open, additive #2700 (structured retry fields) merged — two deletions and one addition in one subsystem within one day.
- **codex js_repl removal alongside gpt-image-2 addition**: codex #19410 (`Remove js_repl feature` OPEN 18:34Z) and codex #19443 (`Add gpt-image-2 to bundled OpenAI Docs skill` MERGED 21:48Z) — same codebase, same week, one feature removed, another added. Trains overlap at the release-notes level even when they don't overlap at the file level.

## Mechanism

1. A subsystem accumulates technical debt (legacy modes, deprecated docs paths, write-anywhere defaults, double-counted catalog entries).
2. A maintainer files a small additive train against the subsystem — refactors, new capabilities, contract reshapes.
3. The train accumulates 4–8 PRs under lockstep rebase. Each PR is "independently shippable" within the additive frame.
4. The maintainer (or a different maintainer) files a *deletion* PR against the same subsystem — usually as cleanup, sometimes as scope-narrowing, sometimes as security-hardening.
5. The deletion PR is filed *without* an ordering contract. Its body says "removes legacy X" but does not say "must land before / after PRs A, B, C."
6. The train now has mixed direction. Reviewers reading any single PR see only its local diff and cannot tell what the subsystem will look like after the train completes.
7. Whichever PR lands first sets the rebase calculus for the others. If the deletion lands first, the additive siblings need to be re-authored to not reference the removed capability. If an additive sibling lands first, the deletion needs to widen its scope.
8. The runtime mid-train sees a subsystem that is *neither* the pre-train shape *nor* the post-train shape — a third shape that exists only during the merge window.

## Action

- **For maintainers**: when filing a deletion PR against a subsystem with an open additive train, explicitly state the rebase-order contract in the PR body. "Lands before #X, #Y, #Z" or "Lands after #X, #Y, #Z." Otherwise the deletion's effect on the train is invisible from the diff.
- **For reviewers**: when reviewing any PR in a train that has both additive and deletion siblings, read all sibling PR titles and ask "what does this subsystem look like after all of these land?" If the answer is not obvious, the train is not independently shippable in the usual sense.
- **For downstream consumers**: subscribe to the *subsystem* (label, codeowner, file path), not just to release notes. Release notes summarize *what* changed; PR-train activity reveals *how* the subsystem is currently shaped during the in-between window.

## Anchor exhibits this synthesis was extracted from

- openai/codex#19449 + #19395 + #19394 + #19393 + #19392 + #19391 + #19414 (permissions train: 6 additive/refactor + 1 merged head + 1 deletion sibling injected at 22:03Z)
- BerriAI/litellm#26454 (docs deletion MERGED 21:54Z) + #26457 (license metadata addition OPEN 22:31Z)
- anomalyco/opencode#24218 (default flip OPEN 22:15Z) + #24202 (condense tool descriptions OPEN) + #24168 (auth middleware refactor MERGED 21:11Z)
- charmbracelet/crush#2699 (LSP workspace boundary OPEN 10:26Z) + #2694 (skills dedupe OPEN 10:36Z) + #2700 (structured retry fields MERGED 12:40Z)
- openai/codex#19410 (`Remove js_repl feature` OPEN 18:34Z) + codex#19443 (`Add gpt-image-2 to bundled OpenAI Docs skill` MERGED 21:48Z)

## Reverse direction (when the pattern does *not* fire)

The pattern requires the train and the deletion PR to *target the same subsystem*. A deletion PR filed against an unrelated subsystem in the same release window is not a #37 exhibit — it is just normal release-cycle activity. The injection signal is *file-path overlap* or *codeowner overlap*, not just *temporal overlap*. The codex js_repl + gpt-image-2 pair is borderline: same codebase, same week, but the file-path overlap is small. Listed as an anchor exhibit because the *release-notes overlap* is large.

The pattern also does not fire when the deletion PR is the *first* PR of the train (a deletion-led train is monotonic in the opposite direction). It only fires when an additive train was already in flight and the deletion is *injected* mid-flight. This is why the litellm exhibit (deletion-then-additive ordering) is the inverse case: the deletion landed first and the additive sibling was injected after — same pattern, opposite chronology, same load-bearing-rebase-order bug.
