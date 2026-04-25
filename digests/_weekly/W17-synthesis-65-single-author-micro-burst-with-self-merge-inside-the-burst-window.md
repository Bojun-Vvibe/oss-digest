# W17 Synthesis #65 — Single-author micro-burst with self-merge inside the burst window

**Window**: 2026-04-25T06:11Z → 06:31Z (codex)
**Anchor exhibits**: openai/codex#19510, #19511, #19513, #19514 (all `etraut-openai`)
**Cross-references**: extends #50 (post-own-merge cascade), refines #62 (same-author CI doublet), strengthens #64 (cross-repo recurrence of cascade), supersedes #57 (cron-periodicity hypothesis)

## Pattern

A single author opens a tightly-clustered burst of micro-PRs on a coherent surface family (codex TUI affordances) within a 19-minute window, and **self-merges one of the PRs inside the same burst window**. The self-merged PR is the smallest-surface one in the burst (a docs/grammar fix), with sub-60-second open-to-merge latency. The other three PRs in the burst remain OPEN at burst-end and proceed through normal review.

Specifically: `etraut-openai` opens #19510 ("Hide rewind preview when no user message exists", TUI-state guard) at 06:11:58Z; #19511 ("Keep slash command popup columns stable while scrolling", TUI-rendering) at 06:17:51Z; #19513 ("Delay approval prompts while typing", TUI-affordance) at 06:21:29Z; #19514 ("Fix codex-rs README grammar", docs) at 06:30:54Z; and self-merges #19514 at 06:31:47Z — **53 seconds open-to-merge**, **inside** the same 19-minute author-burst window that produced 3 still-OPEN sibling PRs.

## Why this is non-obvious

Prior synthesis (#50, #64) framed the same-author cascade as a **post-merge** phenomenon: the merge of PR-A causally precedes the open of PR-B by the same author on an adjacent surface. #65 inverts the temporal relationship — the opens precede the merge, and the merge happens *inside* the open-burst rather than *triggering* a follow-up open. This is structurally different: the author is **batch-loading a surface family** (TUI affordances) into the review queue, then opportunistically self-merging the lowest-friction member of the batch (docs grammar, no behavior change) inside the same wall-clock window.

Synthesis #62 documented a same-author CI-surface micro-PR doublet across the failure-then-success boundary (rekram1-node opencode #24252 self-close → #24253 self-merge in 18 minutes). #65 generalizes this to a **4-PR same-author burst**, where 1 of 4 is self-merged in <60s and the other 3 are normal-review-track. The doublet pattern was a 2-PR exhibit; the burst pattern is N-PR with N≥4 and a fast-merge subset.

The fast-merge subset selection is **not random**. The self-merged PR was a 1-line README grammar fix — the lowest possible review-friction member of the batch. The other 3 PRs touch TUI behavior (rewind preview state, popup column stability, approval-prompt timing) and require human review. The author's selection criterion appears to be: *self-merge what is verifiably zero-risk; queue what requires review*.

## Contrast with synthesis #57 (falsified)

Synthesis #57 hypothesized that the codex repo exhibits a 15-minute CI-burst periodicity that drives PR-update cadence. That hypothesis was falsified across Addendums 7/8/9 by the absence of lockstep refreshes in the pakrym-oai 9-PR cluster after the 04:15Z second burst. #65 strengthens the falsification: the etraut-openai 19-minute burst is **author-driven**, not bot-driven; the author opens 4 PRs in 19 minutes because the author has 4 changes ready, not because a 15-minute cron tick fired. The temporal clustering is human-batch-flush, not infrastructure-cadence.

## Falsification criteria

#65 will be falsified if any of the following hold across the next 5 ticks:
1. The 4-PR burst pattern recurs but **none** of the burst PRs are self-merged inside the burst window (would indicate the self-merge is incidental, not part of the pattern).
2. The self-merged PR is **not** the smallest-surface member of the burst (would falsify the "lowest-friction self-merge" sub-claim).
3. The pattern is **codex-only** and never appears in litellm/opencode/ollama/crush despite >10 same-author bursts being observed there (would localize it to one repo's policy, not a general agent-coding-OSS behavior).

## Prediction

The pattern will recur in opencode within 48 hours, with `kitlangton` or `rekram1-node` as the most likely authors based on their existing same-author cascade exhibits (Addendum 9 kitlangton; Addendum 8 rekram1-node). The self-merged PR in any such recurrence will be on a CI/docs/lint surface and will have <120-second open-to-merge latency. If this recurs in litellm, the most likely author is `yuneng-berri` (5 PRs / 4 merges in the calendar day already) but the self-merge will likely be blocked by branch-protection requiring reviewer approval — falsifying the cross-repo recurrence on policy grounds rather than behavior grounds. Watch for the policy-vs-behavior distinction.
