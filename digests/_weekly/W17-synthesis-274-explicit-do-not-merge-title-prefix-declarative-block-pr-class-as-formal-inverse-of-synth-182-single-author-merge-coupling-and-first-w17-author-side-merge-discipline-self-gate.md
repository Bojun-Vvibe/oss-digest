# W17 Synth #274 — Explicit `[do not merge]` Title-Prefix Declarative-Block PR Class As Formal Inverse Of Synth #182 Single-Author Merge-Coupling And First W17 Author-Side Merge-Discipline Self-Gate

**Capture:** 2026-04-28T12:13Z (companion to ADDENDUM-120, item 3).

**Parents:** synth #182 (meowgorithm 24s precursor open M+O coupling on crush — third distinct merge-coupling shape, completes W17 single-author coupling taxonomy), synth #71 (vendor self-onboarding sub-hourly self-iteration cadence with zero maintainer interaction), synth #43 (rejected PR resurrected same-day unchanged), synth #199 (title-prefix discipline as merge velocity correlate — `test:` 29m median vs `feat:` 13h median), synth #210 (headRefName prefix class feat vs fix as stronger merge-lane discriminator than title prefix), synth #213 (branch prefix dominates title prefix when disagreeing).

## Observation

At 2026-04-28T11:47:48Z (Add.120 strict-window), jif-oai opens codex PR #19970 with title:

> `[do not merge]feat: trigger memories at first turn`

State at Add.120 close 12:13Z: **OPEN, lifespan 25m12s, no merge attempt, no draft-toggle, no reviewer assignment visible via `gh pr view 19970 --repo openai/codex --json reviewRequests`**. Branch: `jif/memories-turn-start`. Author has prior W17 metronome merge-history (synth #91 / #271.M / synth #97 family — see synth #97, #91, #99, #199, ADDENDUM-119 jif-oai triplet).

This is the **first observed W17 PR with explicit `[do not merge]` title-prefix declarative-block** across all 9 tracked repos through Add.120. The author is using the title-prefix surface to broadcast a merge-block intent that is OUT-OF-BAND with respect to GitHub's native draft mechanism, native review-required mechanism, and native branch-protection mechanism.

## Why this is a formal inverse of synth #182

Synth #182 established the W17 single-author coupling taxonomy with three closing shapes:

- **bolinfest M+R+M triple** (rebase-as-merge precursor, sub-30s cluster) — coupling: prior merge → rebase → next merge
- **kommander solo self-merge** (single-author single-PR full lifecycle) — coupling: open → review → merge by same author
- **meowgorithm O+M sub-30s precursor pair on crush** (open immediately followed by parent merge) — coupling: open precedes merge by ≤30s

All three are **author-action couplings that ACCELERATE toward merge**. The taxonomy is closed at three shapes for the case where **author-intent points toward merge**.

Synth #274's `[do not merge]` declarative-block PR is the **formal inverse**: author opens a PR but emits an out-of-band merge-block signal in the title-prefix surface itself. Coupling shape:

- **jif-oai O+TitlePrefixBlock** (open coupled with explicit title-encoded merge-block) — coupling: open → permanent-or-temporary-block-by-title-encoding

This completes the W17 single-author coupling taxonomy at FOUR shapes by adding the **block-direction** member to the prior three **merge-direction** members. The taxonomy is now closed under merge-intent direction (3 accelerating + 1 blocking).

## Distinction from prior W17 patterns

- **NOT Pattern E** (synth #54 close-and-refile with explicit title rescope): Pattern E requires a CLOSE event and a REFILE with rescoped title; synth #274 is single OPEN with no close and no refile.
- **NOT synth #71 vendor-self-onboarding sub-hourly cadence**: vendor onboarding involves iteration, no explicit merge-block; jif-oai is internal cadre author with metronome merge-history, not onboarding.
- **NOT synth #43 rejected-pr-resurrected**: no prior rejection; this is the first state of #19970.
- **NOT GitHub draft-PR**: drafts use the native `isDraft=true` flag; jif-oai #19970 has `isDraft=false` (verifiable via `gh pr view 19970 --repo openai/codex --json isDraft`). The `[do not merge]` title-prefix is a **second-channel signal that DUPLICATES the native draft mechanism in the title surface** — a deliberate redundancy or a deliberate choice to use title-prefix instead of draft.
- **NOT synth #199 / #210 / #213 title-prefix-as-velocity-correlate**: prior synths treat title-prefix as `feat:`/`fix:`/`test:` velocity-class membership; synth #274 treats title-prefix as **policy-flag overload** (the prefix encodes a merge-policy declaration, not a velocity-class).

## Predictions

- **Pred 274-A (rescope-to-merge-eligible):** #19970 transitions to merge-eligible by either (a) edit removing `[do not merge]` prefix or (b) author-driven close-and-refile with new title within 6 ticks (deadline Add.126). Falsifier: #19970 retains `[do not merge]` prefix AND remains OPEN through Add.126 (declarative-block as terminal stable state, not transitional).
- **Pred 274-B (no-merge-with-prefix invariant):** #19970 will NEVER merge with the `[do not merge]` prefix intact. Falsifier: maintainer merges #19970 with `[do not merge]` still in title (would indicate maintainer-author trust signal where title-prefix is informational only and not enforcement, AND would falsify the "merge-discipline self-gate" framing — if maintainers ignore the gate, the prefix becomes pure noise, contradicting the entire synth).
- **Pred 274-C (recurrence in jif-oai stream):** jif-oai opens ≥1 additional codex PR with `[do not merge]` or equivalent title-prefix declarative-block (e.g., `[wip]`, `[draft]`, `DO NOT REVIEW`, `[blocked]`) within 8 ticks (deadline Add.128). Falsifier: jif-oai opens ≥3 codex PRs in next 8 ticks NONE with such prefix (synth #274 is then jif-oai-#19970-singleton, not jif-oai-class-pattern).
- **Pred 274-D (cross-author cross-repo replication):** ≥1 distinct author on a distinct tracked repo opens a PR with explicit `[do not merge]` (or close synonym `[wip]` / `[blocked]` / `[draft]` in title-prefix when isDraft=false) within 12 ticks (deadline Add.132). Falsifier: synth #274 stays jif-oai-codex-singleton through Add.132 (single-author single-repo single-instance — not promotable to W17 cross-repo regime).

## Diagnostic value beyond jif-oai

The `[do not merge]` declarative-block class is a **maintainer-vs-author trust-signal probe**:

- If maintainers respect the title-prefix block (never merge it), the title-prefix is functioning as an **informal soft-gate** that supplements native protections — useful operational signal even if redundant with `isDraft`.
- If maintainers merge despite the prefix (Pred 274-B falsifier), the prefix is **pure decoration** and the synth collapses (informational noise, no operational meaning).
- If the author edits-prefix-then-merges (Pred 274-A satisfier), the prefix functioned as a **temporal self-gate** — the author used title-prefix as a personal merge-readiness latch and released it on intent-change. This would be a novel author-side merge-discipline mechanism orthogonal to GitHub's native draft/review/protection stack.

## Methodological note

n=1 instance is the minimum-viable observation. Synth #274 is registered now to **prevent post-hoc narrative-fitting** if jif-oai's #19970 follows a typical lifecycle (e.g., merges in 30m with rescope and synth gets rationalized backward to fit). Falsifier conditions are stated in advance. If Pred 274-B falsifies (maintainer merges with prefix), the synth is RETRACTED, not rescoped.

## Numbering note

Adjacent to synth #182 in coupling-taxonomy lineage. Sequential to synth #273 (single-repo-monopoly rotation) — both registered at Add.120 close on same capture.
