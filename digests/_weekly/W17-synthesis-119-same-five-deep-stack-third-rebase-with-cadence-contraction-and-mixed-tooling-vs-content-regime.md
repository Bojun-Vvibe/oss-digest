# W17 Synthesis #119 — Same 5-Deep Stack Undergoes Third Rebase With Inter-Rebase Interval Contracting From 38m43s To 25m39s, Mixed Tooling-vs-Content Regime

**Status:** observed pattern, single-day, single-author, single-stack — promote to W17 candidate.
**Anchor:** Addendum 37 (this tick), `openai/codex` 5-deep stack `pr19606 → pr19392 → pr19393 → pr19394 → pr19395` by `bolinfest`.
**Extends / falsifies:** synth #117 (two full rebases within 38m43s, established inter-rebase cadence, falsified metadata-touch hypothesis).

## Observation

The same 5-deep PR-as-base-branch stack documented in synth #116 / #117 has now undergone a **third full rebase** on 2026-04-26. All three rebase events involve simultaneous head-SHA changes on all 5 stack members within a sub-7-second cluster:

| Rebase # | Cluster start | Cluster end | Span | Source addendum |
|----------|---------------|-------------|------|-----------------|
| 1        | 2026-04-25T23:59:33Z | ~23:59:39Z | ~6s | Add. 34 |
| 2        | 2026-04-26T00:38:16Z | 00:38:22Z  | 6s  | Add. 36 |
| 3        | 2026-04-26T01:03:55Z | 01:04:01Z  | 6s  | Add. 37 |

**Inter-rebase intervals:** 38m43s, then 25m39s. **Contraction = –34%.** The cadence is not stable; it is accelerating.

## Concrete artifacts

Stack composition (Add. 37 head SHAs):

- **[openai/codex#19606]** base=`main`, head `00666224…`, +1430/-655/59 — anchor.
- **[openai/codex#19392]** base=`pr19606`, head `45d17d3b…`, **+570/-439/40** — was +522/-428/40 in Add. 36 → **+48 additions / +11 deletions on rebase #3**.
- **[openai/codex#19393]** base=`pr19392`, head `2c828684…`, +372/-167/25 — line counts unchanged from Add. 36.
- **[openai/codex#19394]** base=`pr19393`, head `88b12912…`, +212/-303/13 — line counts unchanged.
- **[openai/codex#19395]** base=`pr19394`, head `b1df35c3…`, +269/-148/11 — line counts unchanged.

All 5 author=`bolinfest`. All `permissions:`-prefixed. Anchor base=`main`.

## What is new vs synth #117

Synth #117 reported that rebases #1 and #2 were uniform metadata events: every member's head SHA changed but **no diff line-counts moved**. This was used to falsify a "metadata touch" hypothesis (because uniform head-SHA-change on all 5 is structurally a rebase, not a single-PR metadata edit), but it was consistent with a **clean `git rebase --onto`** that ports identical commits onto a new base SHA.

Rebase #3 breaks that pattern. **#19392 absorbed +48 additions / +11 deletions while #19606 (parent) and #19393 (child) line counts stayed flat.** This is incompatible with a clean per-PR rebase: a uniform `git rebase --onto` would not create new content on one stack member. The most parsimonious interpretation:

- `main` advanced between rebase #2 and rebase #3 in a way that conflicted only with #19392's commit set;
- `bolinfest` resolved the conflict locally and force-pushed, which (because all 5 branches share commit ancestry through `pr19606 → pr19392`) propagated new SHAs to all 5 stack members;
- but only #19392 received content-bearing edits in the resolution.

So the rebase regime is **mixed**, not uniform-tooling. Rebases #1 and #2 were uniform; rebase #3 was conflict-resolution. This falsifies synth #117's strong implicit prediction that the cadence was being driven entirely by automation (e.g., `git rebase main` in a loop).

## Mechanism (proposed)

The 5-deep stack has a structural property that makes rebase cadence rate-limited by upstream `main` motion: any commit that lands on `main` and touches files in the `permissions:` family forces the author to either (a) rebase the entire stack, (b) abandon stack interior, or (c) merge the anchor and demote children to `main`. Author appears to be choosing (a) every time, and is doing so at progressively shorter intervals as `main` motion accelerates around the merge boundary of #19606.

Cadence contraction (38m43s → 25m39s) is consistent with `bolinfest` racing to keep the stack mergeable as the merge window approaches. Predicted next rebase: **before 01:30Z if cadence continues to contract at the same rate**, before 01:40Z if interval stabilizes at 25m, before merge of #19606 if the author decides to land the anchor first.

## Falsifiable predictions

- If a fourth rebase fires within the next 30 minutes (i.e., before 01:34Z) **with non-zero line-count delta on at least one interior PR**, the conflict-resolution mechanism is confirmed as the rate-limiter.
- If a fourth rebase fires with zero line-count delta on all 5 PRs, the author has switched back to uniform tooling, and rebase #3's content delta was a one-off conflict.
- If `#19606` merges before a fourth rebase, the anchor-first hypothesis (option c) is confirmed and we expect 4 child PRs to retarget `main` within minutes.
- If 60+ minutes elapse with no rebase and no merge, the stack is stalled and the author is off-keyboard.

## Cross-repo applicability

The mechanism (5-deep stack + accelerating rebase cadence + mixed tooling/content regime) is currently single-author single-repo. To promote past W17-candidate to a recurring synthesis, we need:

- a second author on the same repo running a same-shape stack with measurable rebase cadence, or
- the same author on a different repo (no current evidence; `bolinfest` is codex-only in our scope), or
- a non-`bolinfest` author on `openai/codex` running ≥3-deep PR-as-base-branch and exhibiting any inter-rebase contraction signal.

## Distinguishing from prior synths

- **vs #44 (vertical-slice stack refresh in lockstep):** #44 is single-event lockstep refresh with no cadence concept. #119 is **multi-event with measurable inter-event cadence and contraction direction**.
- **vs #57 (periodic CI burst as stack-burst signature):** #57 attributes cadence to CI-driven retries. #119 attributes to author-driven rebase against advancing `main`. Distinct mechanism; would predict different timing relationship to CI events.
- **vs #117 (two full rebases within 38m43s):** #119 is the strict extension: third event, contracted interval, mixed regime. #117 should be considered the n=2 prefix of #119's n=3 series.

## Anchor PRs (cited explicitly)

- `openai/codex#19606`, `#19392`, `#19393`, `#19394`, `#19395` — same 5-deep stack, three rebase events on 2026-04-25/26.
