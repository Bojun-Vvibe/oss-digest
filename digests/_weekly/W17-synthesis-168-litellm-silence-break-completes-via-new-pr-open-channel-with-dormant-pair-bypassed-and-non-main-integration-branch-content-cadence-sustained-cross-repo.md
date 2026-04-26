# W17 synth #168: litellm silence-break completes via NEW-PR-open channel with dormant pair structurally bypassed; non-main integration branch channel sustained at 2-window content cadence

**Window of observation:** 2026-04-26T16:13:00Z → 16:50:00Z (Add.61); back-references Add.56–60.

## Observation

In Add.61, BerriAI/litellm receives:

- **#26551** `fix(guardrails): re-emit chunks in tool_permission streaming hook when no tool_calls found` by **someswar177** — head `9da7cab3`, OPEN at **16:49:53Z**, +181 / -16, base `main`. **First new litellm PR open in 5 windows** (Add.57–61 had zero new opens until this one; the most recent prior new opens were #26549 / #26550 in Add.56).
- **#26415** `feat(mavvrik): add Mavvrik integration` by **pghuge-cloudwiz** — head `d2ecce75` (CHANGED from `cff49b8a` in Add.60 within ~32 minutes), touch at **16:44:01Z**, base `litellm_oss_branch` (NOT main). This is the **second consecutive window with a content commit** (head SHA mutation, not metadata-only) on this PR by the same author.
- **#25177** `feat(oci)` (fede-kamel) — head `3e864ce4` unchanged from Add.60, metadata-only touch at 16:20:32Z.

Critically, the previously-dormant pair flagged in Add.58/59/60 — **#26549 (hakusanb0)** and **#26550 (zyz23333)** — receive **zero touches** in Add.61, extending their dormancy to **5 windows for #26549 and 4 windows for #26550**.

## Confirmation/falsification of prior synthesis predictions

### Synth #162 P-162.B (silence-break in litellm/goose/aider within 3 windows): FULLY CONFIRMED with structural amplification

- Add.60 confirmed silence-break at the **touch-level** (three distinct authors touched three distinct PRs in window, no new opens, no merges).
- Add.61 confirms silence-break at the **NEW-PR-open level** via #26551, opened in the final 7 seconds of the window.
- Total prediction horizon was 3 windows (Add.59 → Add.61); confirmation lands at the boundary of the predicted horizon, not a margin-of-error overshoot.

But the structurally novel finding is **the wake signal is carried strictly by NEW PRs and pre-Add.58 PRs** (#26415 from 04-24, #25177 from 04-05, #26551 fresh-opened). The Add.58/59 dormant pair (#26549 / #26550) is **completely bypassed** as the wake-channel. This **falsifies the implicit reading** of synth #162 that any silence-break would propagate through the most-recently-active PRs.

### Synth #157 (non-main integration branch channel): SUSTAINED AT 2-WINDOW CONTENT CADENCE

Synth #157 introduced the "non-main integration branch channel" finding: litellm activity routes through `litellm_oss_branch` and similar non-main bases when main-branch PRs are dormant. Add.60 showed pghuge-cloudwiz #26415 with a metadata-only touch on `litellm_oss_branch`. Add.61 shows the **same author, same PR, same base, but with an ACTUAL content commit** (`cff49b8a` → `d2ecce75`). This is the **first observed two-consecutive-window content-commit cadence on the non-main integration channel**, confirming the channel is not just metadata-decorative but carries real content writes.

The cross-repo extension of this pattern is also confirmed: Add.61 records **codex #19635** (shijie-oai) on base `dev/efrazer/agent-identity-env-jwt` (also non-main, also explicit per-feature integration branch). **Two repos, two non-main integration channels active in the same 37-minute window**, both with active content development.

## Novel pattern: dormant-pair bypass under wake-signal — silence-break does not equal dormant-pair revival

Synth #162's wake-signal model implicitly assumed that whatever PRs went dormant during a silence regime would carry the silence-break when activity resumed. Add.61 falsifies this:

- #26549 (hakusanb0, Add.56-opened): **5 windows dormant.**
- #26550 (zyz23333, Add.56-opened): **4 windows dormant.**
- Wake signal at Add.60: carried by #26415 / #25177 / #26504, none of which are the dormant pair.
- Wake signal at Add.61: carried by #26551 (NEW), #26415 (sustained content commit), #25177 (metadata), again none are the dormant pair.

The implication is that **dormancy and wake are PR-specific, not repo-specific**. A repo can re-enter visible activity through entirely different PRs while the original dormant-flagged PRs continue to age. This refines the silence-break framing from "repo wakes up" to "repo's active-PR-set rotates while dormant subset persists."

## Predictions

- **P-168.A:** If #26549 or #26550 receives any touch in Add.62 or Add.63, the dormant-pair-bypass framing is window-limited. If both remain dormant for the full Add.62 horizon, the framing escalates to **multi-week PR-specific dormancy with parallel active-set rotation** — which would put any "silence break = repo wake" reading definitively under.
- **P-168.B:** If pghuge-cloudwiz #26415 receives a third consecutive content commit in Add.62, the non-main integration channel content cadence promotes from 2-window to 3-window sustained, structurally validating synth #157 as a stable channel-level pattern rather than a transient routing.
- **P-168.C:** If shijie-oai #19635 (codex non-main integration branch) receives a content commit (head SHA mutation) within the next 2 windows, the cross-repo non-main-integration-channel parity is confirmed at content-cadence level, not just at the existence level.

## Candidate falsifiers

- #26549 or #26550 receives a touch in Add.62 → dormant-pair-bypass was window-limited.
- pghuge-cloudwiz #26415 either merges or closes-without-merge in Add.62 → 2-window content cadence terminates rather than extending.
- shijie-oai #19635 closes-without-merge in Add.62 → cross-repo non-main integration channel is asymmetric (litellm has it, codex was a one-off observation).

## PRs cited

litellm: #26551 / #26415 / #25177 / #26549 / #26550 / #26504. codex: #19635. Cross-references prior addenda Add.56–60.
