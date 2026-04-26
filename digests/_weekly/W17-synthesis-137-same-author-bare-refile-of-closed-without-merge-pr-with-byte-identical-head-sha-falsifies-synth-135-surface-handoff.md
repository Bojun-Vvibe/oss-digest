# W17 Synthesis #137 — Same-author bare-refile of closed-without-merge PR with byte-identical head SHA after sub-30-minute close-to-reopen gap (falsifies surface-handoff hypothesis from synth #135)

**Date:** 2026-04-26
**Window of evidence:** 05:50:58Z → 06:19:03Z (28m05s gap)
**Repo:** anomalyco/opencode

## Pattern statement

A single author closes-without-merge their own PR, then within 30 minutes opens a **new** PR carrying the **identical head SHA** and **identical line counts** as the closed PR. The body of work is unchanged; the PR record is recycled. This is structurally distinct from:
- **Surface handoff** (synth #135): different author opens replacement on same surface.
- **Rework refile** (general): same author opens new PR with *modified* SHA after rework.
- **Mistaken-close recovery**: same author re-opens the **same** PR (preserves number).

The signature here is: **same author + new PR number + identical headRefOid + identical (additions, deletions) tuple + sub-30m gap**.

## Citations (real data)

- **PR #24428** (anomalyco/opencode):
  - author: `claudianus` (ryan.h.park)
  - title: `fix: preserve existing reasoning_content on second interleaved pass (#24146 follow-up)`
  - createdAt: 2026-04-26T03:27:12Z
  - closedAt (without merge): **2026-04-26T05:50:58Z**
  - headRefOid: `fa478297f13d87ae544034a07398d5a0bda7f336`
  - additions/deletions: **+53 / -9**
  - lifespan: 2h23m46s

- **PR #24443** (anomalyco/opencode):
  - author: `claudianus` (ryan.h.park) — **same**
  - title: `fix(provider): preserve reasoning_content on second interleaved pass (#24146 follow-up)` — title differs only by `(provider)` scope add and dropping the word `existing`
  - createdAt: **2026-04-26T06:19:03Z**
  - state: OPEN at window close (06:38:40Z)
  - headRefOid: `fa478297f13d87ae544034a07398d5a0bda7f336` — **byte-identical to #24428**
  - additions/deletions: **+53 / -9** — **identical tuple to #24428**
  - lifespan-at-window-close: 19m37s

- Close→reopen gap: 06:19:03 − 05:50:58 = **28m05s**.

## Falsification of synth #135

Synth #135 (recorded at Add.45) hypothesized that #24428's close + tiffanychum's #24441 open within 3m44s constituted a **cross-author surface handoff** on the reasoning_tokens/reasoning_content surface. The hypothesis predicted that claudianus had **ceded** the surface and tiffanychum's approach would be the surviving fork.

The 06:19:03Z reopen of byte-identical content as **#24443** falsifies the cession claim:
1. claudianus did not abandon the work — the SHA is unchanged.
2. The close was tactical (rebase pending? CI flake? base-branch concern?), not a code-review concession.
3. The surface now has **two concurrent open PRs by two different authors** (claudianus #24443 and tiffanychum #24441) — true forked stewardship, not handoff.

Synth #135 should be **revised** from "surface-handoff signature" to "tactical-close-then-refile co-located with second-author open on adjacent code-path." The 3m44s co-location remains anomalous (and notable) but is now reinterpreted as a **race-to-replace-the-record**, not a transfer of ownership.

## Discriminators vs. existing synthesis corpus

- **vs synth #88** (aged self-close pair bookending fresh open-merge cycle): #88 required the closes to be **aged** (multi-day) and bookend a **third** PR's lifecycle. Here both PRs are sub-3h-old and the second IS the refile of the first.
- **vs synth #89** (cross-repo author handoff identical content refile with preceding open lead): #89 is **cross-repo** and **cross-author**. This is **same-repo same-author**.
- **vs synth #94** (back-to-back merge pair on same product surface): #94 requires both PRs to merge. Neither #24428 nor #24443 has merged.
- **vs synth #99** (shared-spec anchor self-merge series with growing gap): #99 has a SHA that *grows* (anchor edits expand). Here the SHA is **frozen**.

## Adjacent in-window evidence supporting "tactical close" interpretation

The qwen-code revert event in the same window — **#3633 by `tanzhenxin` reverting `B-A-M-N`'s #3567 in 17m21s, +2/-254** (mergeCommit `a6b0b7e579049364ec79eeadcb5bd8db217ed8de`) — establishes that **same-day surface contestation by a different author is a real and visible mechanism** in the daily series. claudianus's tactical close at 05:50:58Z occurred 3m44s **before** tiffanychum opened a competing PR on the same surface; the 28m05s reopen at #24443 reads as defensive — re-establishing the record after the competing open landed.

## Falsifiers (what would kill this synth)

1. If #24443 receives a **force-push** in the next 24h that changes headRefOid, then the bare-refile claim degrades to "delayed-rework refile" and the byte-identical signature becomes a transient.
2. If the close-then-reopen pattern recurs **without** byte-identical SHA (i.e., author always changes the SHA on refile), then this becomes an n=1 anomaly, not a pattern.
3. If both #24441 and #24443 merge with **non-overlapping diffs**, the "contestation" framing also weakens — they may simply be addressing disjoint pieces of the same surface.

## Forward-looking checks

- Track #24443 headRefOid in next ADDENDUM. Frozen ⇒ pattern strengthens.
- Track whether #24441 (tiffanychum) and #24443 (claudianus) end with one merged and one closed; that resolves the contestation.
- Watch for re-emergence of the same author/SHA pair on **other** repos — would generalize the pattern.

## Cross-references

- Source ADDENDUMs: ADDENDUM-45 (close event + initial synth #135 framing), ADDENDUM-46 (reopen event, falsification).
- Related synth: #135 (revised by this synth), #89 (cross-repo cousin), #88, #94, #99.
- Companion synth this round: #138 (bot-driven mass-close sweep + bolinfest rebase#10 lockstep restoration).
