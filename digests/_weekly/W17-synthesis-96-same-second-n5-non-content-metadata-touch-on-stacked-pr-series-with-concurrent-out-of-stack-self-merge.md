# W17 Synthesis #96 — Same-Second N=5 Non-Content Metadata Touch on a Stacked-PR Series, with Concurrent Out-of-Stack Self-Merge by the Same Author

**Lens:** All N PRs of a contiguous stacked-PR series report the **same `pushed_at` timestamp to the second** and the **same `updated_at` timestamp** — but their `head.sha` values are **unchanged** vs the prior catalogued state. The touch is metadata-only (base-tracking refresh, mergeability re-evaluation, or auto-rebase probe), not a force-push. Concurrently, the same author opens a **single-file out-of-stack PR** and **self-merges** it within minutes. The signature is a **dual-mode author posture**: stack frozen at content layer + side-channel quick-fix self-merge + bulk metadata heartbeat on stack.

**Distinct from prior W17 syntheses:**
- **#84** (recurring same-second long-tail PR pair co-bump, mechanical co-fire signature): N=2, **content-bearing** (head SHA mutates). #96 is N=5, **non-content** (head SHA frozen), and tied to a *single author's stack*, not unrelated long-tail PRs.
- **#85** (sub-10s same-author cross-PR doublet on adjacent surfaces): N=2 with sub-10s spacing; PRs are *new opens or new commits* (content-bearing). #96 is N=5 metadata-only on existing PRs.
- **#92** (same-second N=4 open tuplet by single author): N=4 **opens** (maximally content-bearing — the PRs themselves are created in that second). #96 is the *opposite mode*: PRs that already exist receive a same-second metadata refresh while their content is frozen.
- **#94** (same-author same-product-surface back-to-back merge pair nested in multi-author wave): N=2, content-bearing merges. #96's same-author component is a single self-merge **outside the stack**, not nested in a multi-author wave.
- **#75/#80** (long-tail refresh waves): cross-PR refresh patterns but content-bearing (commit pushes), not metadata-only.

#96 is the first lens to capture **bulk metadata heartbeats on a frozen stack** as a distinct timing signature, separable from content pushes.

## Anchoring evidence — `bolinfest`, openai/codex, 2026-04-25

**The frozen 5-PR permissions stack (head SHAs as of 2026-04-25T17:25:15Z, identical to Addendum 22 catalogued values):**

| PR | Title | head.sha | pushed_at | updated_at |
|----|-------|----------|-----------|------------|
| [openai/codex#19391] | permissions: make runtime config profile-backed | `48d74e7b6e05331c2c884eb9ef71a447174553dc` | 2026-04-25T17:25:10Z | 2026-04-25T17:25:15Z |
| [openai/codex#19392] | permissions: derive compatibility policies from profiles | `f64334a799be7f20a3c752cd6a2499119997a076` | 2026-04-25T17:25:10Z | 2026-04-25T17:25:15Z |
| [openai/codex#19393] | permissions: migrate approval and sandbox consumers to profiles | `d55d33b12925a0bf047236ce049c14c595c56a0c` | 2026-04-25T17:25:10Z | 2026-04-25T17:25:15Z |
| [openai/codex#19394] | permissions: remove core legacy policy round trips | `7937eb324de01ede6dcfb750810c08245985bfba` | 2026-04-25T17:25:10Z | 2026-04-25T17:25:15Z |
| [openai/codex#19395] | permissions: finish profile-backed app surfaces | `d958f521518139b37d5c9631cbaed5cbaaaef8c7` | 2026-04-25T17:25:10Z | 2026-04-25T17:25:15Z |

**All five `pushed_at` collapse to `17:25:10Z` (same second).** All five `updated_at` collapse to `17:25:15Z` (same second). **No `head.sha` mutates.** This is the canonical N=5 same-second non-content metadata touch.

**The concurrent out-of-stack self-merge:**
- [openai/codex#19578] OPENED 16:56:42Z by `bolinfest`, MERGED 17:03:01Z by `bolinfest`, **lifespan 6m19s**, +5/-1 across 1 file, *"fix: increase Bazel timeout to 45 minutes."* Single-file CI-knob fix, head `f2d627f1`, merge SHA `88f300d7`.

**The two events are 22 minutes apart** (#19578 self-merge at 17:03:01Z; stack metadata touch at 17:25:10Z), both within the same author's continuous active session. The stack has been frozen at content layer for the **entire ~3-hour Addendum 22→25 span**.

## Why "metadata-only" matters as a separable signature

GitHub's `pushed_at` field on a pull-request head ref updates whenever the underlying ref receives any push event — including base-branch tracking updates from GitHub's auto-merge / mergeability machinery, which can refresh `pushed_at` on a stacked branch when the base branch advances, **without** mutating the branch's tip SHA if no rebase is performed. The fact that **all five PRs share the exact same `pushed_at` second** while head SHAs are frozen is consistent with a single base-branch advance triggering a fan-out refresh across all five descendants of that base. (Force-pushes by an author would normally produce non-zero head.sha deltas and frequently slightly skewed `pushed_at` timestamps across PRs.)

This means **#96's same-second N=5 event is causally distinct from #92's same-second N=4 open tuplet**: #92 is plausibly a single author-side batch tool firing N create events; #96 is plausibly a single GitHub-side base-tracking event firing N refresh events. Both produce same-second N-tuplets in the API surface, but **the underlying causal locus is opposite** (author-side vs platform-side).

## Why the concurrent self-merge matters

`bolinfest` opening #19578 and self-merging it in 6m19s **while the 5-deep stack has zero head-SHA churn for ~3h** demonstrates a **dual review posture** by a single author:
- **Stack mode:** large, dependency-ordered, expected to wait for cross-stack review and base-branch progression — author is *not* mutating heads.
- **Quick-fix mode:** orthogonal CI infra fix, opened-and-self-merged in minutes — author exercises self-merge authority freely outside the stack.

This argues that the stack's freeze is **not** an availability issue with the author (the author is online and self-merging) — it is a **deliberate review-protocol choice** to leave the stack unmodified pending external input.

## Predictive corollaries

- (a) The next mutation event on stack #19391–95 should be a **content-bearing push** with **non-uniform pushed_at deltas** across the five PRs (rebase-then-push fans out unevenly), distinguishing it from the metadata heartbeat documented here.
- (b) If another N=5 same-second pushed_at refresh occurs without head.sha change, the inter-event gap to this event is the **base-branch advancement period** for the stack's base — likely on the order of hours.
- (c) The author's next out-of-stack self-merge (if any) will have lifespan **< 30 minutes** and **single-file diff**, by analogy with #19578 (5/-1, 1 file, 6m19s). A larger or longer out-of-stack PR by the same author would falsify the dual-mode-posture interpretation and suggest the stack freeze is incidental.

## Falsifiable predictions

- The 5-PR stack #19391–19395 **does not receive a force-push** within the next 4h (head.sha values remain those tabulated above).
- No other author opens a **same-second N≥4 metadata-only refresh** in tracked repos within the next 4h (this is a stack-shape phenomenon, not an ambient platform pattern).
- `bolinfest`'s next codex PR within the session is **either** another single-file infra-knob self-merge (mode confirms) **or** a content push to one of #19391–19395 (mode breaks).
