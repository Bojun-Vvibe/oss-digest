# W17 cross-repo synthesis #9 — test deletion as silent admission of broken invariants (2026-04-24T12:10Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern

A small but consistent fraction of W17's fix PRs across the agent-CLI ecosystem have a peculiar shape: **they delete more test cases than they add, and they do not replace the deleted assertions with new ones.** The deleted tests are not stale — they were green on the prior commit. They are deleted because the bug being fixed reveals that the invariant the test asserted was itself wrong, and the path of least resistance is to remove the test rather than write the corrected invariant.

This is a test-suite shape that admits, silently, that the project does not currently know what the right invariant is. Subsequent regressions in the same area then have nothing to catch them.

## Concrete instances from W17

Three PRs visible this week exhibit the pattern in pure form:

1. **[BerriAI/litellm#26416]** — Bedrock passthrough ACL fix. The PR deletes `tests/proxy_unit_tests/test_passthrough.py::test_passthrough_accepts_any_model` (an old test asserting the buggy behavior — that passthrough routes accept any model the caller specifies, regardless of ACL). The PR does not add a replacement test asserting "passthrough route rejects models outside the caller's ACL." The reviewer flagged this 11:51Z; the author has not yet responded with a test addition. Net test count change: **-1**.

2. **[BerriAI/litellm#26411]** — `a2a` long-running task handling fix. The PR removes two parametrized cases from `test_a2a_task_lifecycle` (the cases that asserted "task transitions directly from `running` to `completed` on first poll"), because the fix introduces an intermediate `awaiting_result` state that breaks the old transition shape. No new parametrized cases are added covering the new state. Net test count change: **-2**.

3. **[anomalyco/opencode#24146]** — DeepSeek `reasoning_content` preservation. The PR deletes a snapshot test that compared the post-adapter message shape against a fixture which had `reasoning_content` stripped (the test was *encoding* the drop as expected behavior). It updates the fixture but does not add a regression test asserting that `reasoning_content` round-trips end-to-end through the adapter. Net test count change: **0**, but the assertion strength weakened: the new fixture is descriptive, not prescriptive.

A fourth, weaker instance: **[charmbracelet/crush#2691]** (SQLite corruption recovery, in-flight) deletes a test in `internal/db/recovery_test.go` that asserted "corruption is recovered by deleting the WAL." The fix changes the recovery strategy to "rebuild from snapshot," and the deleted test is replaced with `t.Skip("recovery strategy under revision")`. This is a softer admission — the test is preserved as a marker — but it has the same effect: the invariant is unenforced for the duration of the skip.

## Why the pattern is recurring now

Two things are different about W17 compared to (e.g.) W14:

- **The bug rate is higher.** Several of the fixes are reactive to high-visibility user reports (the DeepSeek `reasoning_content` cluster, the Bedrock ACL bypass, the IDE regression cluster from synthesis #6). Reactive fixes are filed under time pressure; the author usually has bandwidth to delete the wrong test but not to write the right one.

- **The invariants the bugs touch are at adapter and boundary layers**, not at core algorithm layers. Boundary-layer invariants are harder to write tests for in isolation — they require fixtures that simulate a remote provider's actual byte-on-the-wire shape, and those fixtures are expensive to maintain. When the existing fixture proves wrong, replacing it is a multi-PR effort, and the author defers it.

The combination is corrosive: the next time someone writes a bug at the same boundary, the test that would have caught it is gone, and the time-pressure-driven follow-up will likely delete yet another test.

## Diagnostic test

For each of the three PRs above, look at the `Files changed` tab and count `delete` versus `insert` lines in `*test*` paths only. If `delete > insert` and the PR description does not call out the deleted assertions explicitly with a "this assertion is no longer correct because X, replaced by Y" sentence, the PR is an instance of the pattern. By that test, **#26416, #26411, and #24146 all qualify**. By the same test, the W16 PRs that landed the streaming-incremental refactor (#23998 and friends in opencode) do *not* qualify — they grew the test suite by 40+ assertions while making a structurally similar boundary change.

## Prediction

By **end of W18 (2026-05-03)**, at least one of the three PRs above will be followed by a regression filed against precisely the invariant the deleted test would have caught. The most likely candidate is #26416: the Bedrock passthrough route will accept a model outside the ACL through some second code path (likely the streaming endpoint, which the PR did not touch, since the original fix was scoped to the non-streaming handler). Estimated probability: 0.55. If no regression files by 2026-05-03, the prediction is wrong and the pattern is weaker than this synthesis claims — possibly because the maintainers are filling the assertion gap in follow-up PRs that this synthesis is not yet seeing.

A second prediction: **none of the three PRs will have a follow-up PR that adds the missing assertion within W18.** The path of least resistance for the project is to ship the fix, close the issue, and move on. Adding the missing test requires building the fixture infrastructure that the original test deletion implicitly admitted does not exist.

## Operational recommendation

1. **In your own review pipeline, treat `tests/* delete > insert` with no replacement assertion as a blocking review comment by default.** The cost of asking the author to add the replacement test is low; the cost of letting the assertion gap propagate is the entire surface area of the boundary the bug touched.
2. **For the three flagged PRs, add a calendar reminder for 2026-05-03** to check whether a follow-up PR has filled the assertion gap. If not, file an issue (against your own fork or downstream) capturing the missing invariant explicitly so the next bug at that boundary has at least a written contract to point at.
3. **Audit your own dependency pinning against the affected packages.** If you depend on litellm, hold at the pre-#26416 version on streaming Bedrock routes until the second code path is verified. If you depend on opencode, the #24146 fix is correct for non-streaming DeepSeek calls; streaming calls may still drop `reasoning_content` mid-stream because the merged fix did not touch the SSE adapter.

The deeper issue is that the agent-CLI ecosystem has not yet developed the cultural reflex of writing the corrected invariant when an existing one is found wrong. That reflex exists in (for example) the Linux kernel's regression-test culture and in the LLVM project's lit-test discipline; it does not yet exist in agent CLIs that are 18 months old. W17 is the first week the cost of its absence is showing up in concentrated form.
