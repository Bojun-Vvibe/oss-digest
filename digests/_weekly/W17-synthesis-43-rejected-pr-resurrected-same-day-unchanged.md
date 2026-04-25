# W17 cross-repo synthesis #43 — rejected-PR-resurrected-same-day-unchanged: when a coding-agent OSS project closes a PR unmerged and the same author resubmits a structurally-identical PR (same title verbatim, same body opening, same diff shape) within minutes — not hours, not the next dispatcher tick — the maintainer rejection has been absorbed by the author as a *transient* signal (CI flake, reviewer-bandwidth, scope-misread) rather than a *substantive* one (design rejected, scope rejected, abstraction-shape rejected), and the second submission carries no diff or commit-message acknowledgment of what changed since the close — which means the second PR is asking the maintainers to re-evaluate the *same artifact* under the assumption that the first rejection was wrong, not under the assumption that the artifact was wrong (2026-04-24T23:58Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through every PR before acting._

## The pattern in one sentence

**A coding-agent OSS project (codex, litellm, opencode, crush — any fast-cadence repo) closes a PR unmerged at time T, and at time T+δ where δ < 15 minutes the same author opens a *new* PR whose title is identical verbatim, whose opening body paragraph restates the same problem statement, and whose diff is either byte-identical or differs only in mechanical rebase noise; the second PR's body contains no "what changed since the close" section, no link to the closed PR, and no acknowledgment of the maintainer's rejection comment — meaning the resubmission encodes the implicit claim that the *rejection itself was the bug*, not the original PR; the structural signal is the gap (δ): a resubmission after hours or days is a *response* to the rejection (likely with edits); a resubmission after minutes is a *contradiction* of the rejection (with no edits); W17's anchor exhibit is openai/codex #19465 (`Add gRPC feedback log sink` OPENED 23:38:15Z, +1121/-0) which carries the *byte-identical title* of openai/codex #19455 (CLOSED unmerged 23:27:41Z, also `Add gRPC feedback log sink`) — δ = 11 minutes — and whose body opens *"That PR makes app-server log capture expose a small `LogWriter` boundary..."* using the *same opening sentence* as #19455 with no acknowledgment that #19455 was rejected 11 minutes earlier; sibling exhibit is BerriAI/litellm #26461 (`fix(ci): support CircleCI rerun failed tests for local_testing jobs` OPENED 23:44:12Z) which carries the byte-identical title of BerriAI/litellm #26452 (CLOSED unmerged 23:36:55Z) — δ = 7 minutes — same problem statement (CircleCI rerun broken for `local_testing_part1`, `local_testing_part2`, `litellm_router_testing`, reruns collect 0 items, exit code 123), no edit, no acknowledgment of the close; the cost is not the duplicate PR (trackers handle duplicates fine) — the cost is that the *maintainer's rejection* now reads as silently overridden in the tracker history, the next reviewer arriving at #19465 has no signal that #19455 already exists and was rejected, and any thread that lived on #19455 (review comments, CI failures, design discussion) is orphaned from the live PR; the second PR is effectively a *git rebase of the first PR* expressed as a PR-level operation, and the first PR's review thread becomes lost provenance.*

The bug is *not* that resubmitting a closed PR is wrong (sometimes a reviewer is wrong, or the author has new context). The bug is **the resubmission's claim — encoded in the lack of edits and lack of acknowledgment — that the rejection itself was the noise to filter out**. In the same tick that this pattern lands twice in two different repos (codex and litellm), we should treat it as a recurring social shape, not a one-off.

## Why this is *not* synthesis #35 (replacement-PR-after-close-as-scope-narrowing-tactic)

#35 names cases where a closed PR is replaced by a *narrower* PR — the replacement carries an explicit scope reduction (fewer files touched, fewer features, smaller diff). The replacement *acknowledges* the rejection by editing in response to it. **#43 names cases where the replacement is *not narrower*: it is the same PR, resubmitted unchanged, treating the rejection as a transient.**

The two are inverses: #35 is the rejection-respected pattern; #43 is the rejection-overridden pattern. In W17, both are visible, often in the same repo within hours of each other. The discriminator is the diff between the closed PR and the new PR — if the diff is empty (or only mechanical), this is #43, not #35.

## Why this is *not* synthesis #41 (stacked-PR-rejected-after-parent-merged)

#41 names the case where the *parent* (an abstraction PR) merges and the *stacked child* (the consumer that justified it) closes unmerged — the abstraction is now orphaned in main. **#43 names what happens when *the same author resubmits the orphaned child PR* within minutes: the abstraction is no longer orphaned (a candidate consumer reappears), but the maintainer rejection that orphaned it is now in tension with the live re-submission.**

The two compose: codex #19455 was the synthesis #41 anchor (parent #19234 merged, child #19455 closed); 11 minutes later, codex #19465 is the synthesis #43 anchor (the same child resubmitted unchanged). The W17 #41 prediction ("the abstraction sits orphaned in main; future consumers re-justify the shape") is now mutating in real time — the abstraction is no longer waiting for a future consumer, the same consumer is back, and the rejection that closed it is unaddressed.

## Why this is *not* synthesis #38 (capability-flag-vs-callability-skew)

#38 names cases where a flag advertises a capability that the runtime doesn't actually deliver. **#43 names cases where the *PR tracker* records a rejection that the *next PR* doesn't deliver — the tracker says "this design was rejected" and the live tree says "this design is being re-proposed unchanged."**

#38 is a flag/runtime skew. #43 is a tracker-state/live-PR-state skew — the *history* says no, the *present* says try again. Reviewers arriving at #19465 cold (without the 11-minute context) cannot tell that #19455 was rejected on the same content; they will re-review from scratch.

## Anchor exhibits (W17, this tick)

- **codex #19465 ↔ #19455** (resubmission δ = **11 minutes**, identical title, body restates same `LogWriter` rationale verbatim) — the canonical W17 #43 exhibit. The closed #19455 carries a maintainer rejection (presumably scope-shaped: "we don't want a remote gRPC sink right now") that #19465 does not address in its body. If a reviewer arrives at #19465 without history, they will likely re-issue the same rejection. The author's implicit bet is that a *different* reviewer arrives this time.
- **litellm #26461 ↔ #26452** (resubmission δ = **7 minutes**, identical title, identical problem statement) — the cross-repo confirmation. The CI rerun fix is presumably correct on its merits (CircleCI rerun is genuinely broken); the rejection was likely a process-shaped one (wrong base branch, missing test, CI config change requires release-eng review) that the resubmission does not address. Same shape, different domain (codex: feature scope; litellm: CI process).
- **codex #19234** (the synthesis #41 parent that merged at 23:27Z) — the structural enabler: the abstraction landed first; the rejection of the consumer at 23:27Z and the resubmission at 23:38Z both happen *after* the abstraction is in main, so the resubmission is operating against a tree that already accepted the parent. The author's implicit argument is "the abstraction is in main, so the consumer must be acceptable too."
- **codex #19449** (`permissions: remove legacy read-only access modes` OPEN, refreshed 23:49Z) — *not* a #43 exhibit yet, but a candidate: it has been refreshed across consecutive ticks without merging. If it closes unmerged and reappears within 15 minutes, that's the next #43 exhibit on this surface.
- **litellm #26458** (closed unmerged earlier in W17, prose-dependency on #26456) — the *negative* case: closed and *not* resubmitted same-day. The rejection was absorbed substantively (the author either accepted the rejection or is working on a substantive revision). The discriminator between #26458 and #26452 is δ — #26458's δ is now hours+, #26452's δ was 7 minutes.

## The δ thresholds

W17's two exhibits land at δ = 7 minutes and δ = 11 minutes. The conjecture from these two data points: **resubmissions with δ < 15 minutes are the #43 pattern; resubmissions with δ between 15 minutes and 2 hours are ambiguous (could be substantive edit, could be no-op); resubmissions with δ > 2 hours are #35-shaped (substantive edit likely).** This is a hypothesis that next week's data should test.

The signal is sharper if you also measure the *diff between the closed PR's tip and the new PR's tip*. A truly identical resubmission (same SHA range, same files-changed count, same lines-changed count) is a clean #43 exhibit; a "rebased onto current main but otherwise identical" resubmission is also #43; a resubmission with even one new commit addressing the rejection is #35-shaped, regardless of δ.

## Operational signal

When watching a fast-cadence repo, treat any new PR matching all of:

1. **Identical or near-identical title** to a PR closed within the last 15 minutes;
2. **Same author**;
3. **Body opens with the same problem statement** as the closed PR;
4. **No paragraph in the body acknowledging the close or naming what changed**;

…as a **resubmit-after-close-unchanged** event, and:

- **Pre-emptively cross-link the closed PR in the new PR's discussion** so the next reviewer arriving cold has the rejection context. This is the cheapest defense against the lost-provenance failure mode.
- **For maintainers**: a one-line policy "if a PR is reopened within 15 minutes of close with no diff change, the close was binding" reduces the social cost of the original rejection. Without it, the original rejection becomes implicitly negotiable.
- **For the author**: the resubmission's body should explicitly address the closing comment. The 7-minute and 11-minute δ values in W17's exhibits both occur *before* the closing comment thread has cooled; resubmitting before the rejection has been read by other contributors makes the rejection look like a single-reviewer veto rather than a maintainer-team decision.

## What W17 #43 looks like a week from now

The synthesis is **confirmed** if either #19465 or #26461 is closed unmerged for the same reason as its predecessor (#19455 or #26452 respectively), producing a *third* PR in the same minute window. A three-PR resubmit chain on the same content within an hour is a strong falsifier of the "the rejection was wrong" implicit claim — at that point the maintainers are clearly rejecting the artifact, not the timing.

The synthesis is **falsified** if either #19465 or #26461 *merges* — that means the resubmission was correct to override the prior rejection, and the original close was indeed transient (probably a reviewer-bandwidth or label-routing issue, not a design rejection).

The most informative outcome would be **one merges and the other gets closed-and-resubmitted again** — that would let us cleanly attribute the #43 pattern to the *kind* of rejection (process-shaped vs design-shaped) rather than to the resubmission cadence.

The quantitative signal to track over the next week: **median δ between close and resubmit across all coding-agent OSS repos**. If it's converging on minutes (not hours or days), the social cost of resubmitting is approaching zero across the ecosystem and #43 will become a routine pattern; if it stays bimodal (some at minutes, some at days), then #43 is a personality of specific authors or specific subsystems, not an ecosystem-wide drift.
