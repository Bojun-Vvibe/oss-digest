# W17 Synthesis #75 — Cross-temporal same-author doublet: a fresh open paired with a multi-day long-tail on adjacent read/write surfaces, refreshed within 60 seconds

**Window**: 2026-04-25T09:16Z → 2026-04-25T09:24Z (Addendum 15; 8-minute slice inside the post-`yuneng-berri`-cascade litellm window)

**Anchor exhibits** (2 PRs, single author, single repo, single surface family across read/write boundary):

- BerriAI/litellm#26498 (`kiyeonjeon21`, *"fix(auth): apply temp_budget_increase on cache-hit path"*, head SHA `46509bf2e9d0`, OPENED **09:16:39Z**, refreshed **09:23:20Z**) — auth/budget surface, **read-path** (cache-hit branch of the budget-check), age at refresh: ~7 minutes
- BerriAI/litellm#25609 (`kiyeonjeon21`, *"fix(proxy): update existing budget row in /team/member_update instead of creating new"*, head SHA `4689447416c2`, refreshed **09:24:20Z**) — proxy/budget surface, **write-path** (`/team/member_update` row update), age at refresh: ~13 days

**Inter-PR delta**: #25609 refreshed 60 seconds after #26498's last refresh, by the same author, both on the budget-management surface — one fresh, one 13 days old.

## Cross-references

- **Distinct from synthesis #47** (same-author rapid-fire PR doublet on adjacent surfaces): #47's exhibits were both same-day-opened. #75 is a *cross-temporal* variant where one leg is a fresh open and the other is a multi-day-old long-tail being touched together as a coordinated maintenance pass.
- **Distinct from synthesis #50** (post-own-merge cascade same-author adjacent-surface followup): #50 is post-merge cascade activity. #75 has zero merges in the doublet — both PRs remain open after the doublet refresh.
- **Distinct from synthesis #61** (single-author multi-PR scope-split inside a multi-author surge cohort): #61 is *scope splitting* of a single intent across multiple PRs simultaneously. #75 is *temporal pairing* of two pre-existing intents that share a surface.
- **Distinct from synthesis #62** (same-author CI-surface micro-PR doublet across failure-then-success boundary): #62's pair has a state-transition signal (CI red→green). #75 has no such state transition — both PRs stay OPEN.
- **Distinct from synthesis #63** (hot-author multi-surface fanout, same author opens span unrelated surface families within minutes): #63 *fans out* across surface families. #75 *converges* on a single surface family (budget management).
- **Builds on synthesis #69** (xAI/Grok refresh cluster as a same-author multi-PR sweep): #69 was 3-PR sweep across the same provider-integration surface, all by `yuneng-berri`. #75 is a 2-PR sweep across the same auth/budget surface by `kiyeonjeon21` — and immediately follows the **end** of the `yuneng-berri` cascade, suggesting the litellm repo's "active sweeping author" slot rotates between contributors with non-overlapping windows.

## Pattern

**Cross-temporal same-author doublet** has three diagnostic features that distinguish it from prior same-author multi-PR shapes:

1. **Age asymmetry**: one leg is freshly opened (≤30 minutes old), the other is multi-day or multi-week (≥7 days old). The age ratio in #75 exemplar is **~2,700:1** (#26498 ~7m vs #25609 ~13d ≈ ~18,720m).
2. **Surface-family unity, sub-surface complementarity**: both legs touch the same broad surface (here: budget management) but on complementary sub-surfaces — one read-path (`auth` cache-hit), one write-path (`proxy` row update). Together they cover both sides of a CRUD boundary.
3. **Sub-2-minute inter-refresh delta**: the two refreshes land within 60 seconds of each other (here: 09:23:20Z → 09:24:20Z). This is **deliberate coordination by the author**, not coincidence — the author is explicitly working both PRs in the same session, switching between them to push consistent fixes.

## Why this shape is structurally interesting

The cross-temporal doublet is the **inverse of the long-tail-refresh wave** anchored in synthesis #70. #70 observed long-tail PRs being refreshed by *unrelated authors* on the same timing baseline (cross-author timing coupling). #75 observes a **single author** refreshing a long-tail PR *of their own* alongside a fresh PR of their own — coupling is intra-author and intra-surface.

This matters because:

- **Maintainer-attention reactivation**: the 13-day gap on #25609 means it had been dormant from the author's side for ≥13 days. Opening #26498 today and immediately re-touching #25609 suggests the author returned to the budget-management surface as a coordinated work session, not a one-off.
- **Read/write boundary as a natural pairing axis**: when an author works both sides of a CRUD boundary in one session, it is often because they discovered the read-path bug (#26498 cache-hit not applying `temp_budget_increase`) while testing or debugging the write-path bug (#25609 budget-row update vs create). The cross-temporal doublet is an **observable trace of a debug-then-fix-symmetric-bug workflow**.
- **Author rotation at the repo level**: litellm just exited a ~36-hour `yuneng-berri`-dominated cascade (synthesis #63/#64/#69) at ~06:41Z, dormant ~2h57m, and now `kiyeonjeon21` is the new active sweeping author. The repo's "active author" slot has rotated cleanly. This is the litellm-internal analog of synthesis #74's cross-repo open-velocity-leadership rotation — but at the **author** level inside one repo, not the repo level across the corpus.

## Falsification checks

1. If `kiyeonjeon21` opens or refreshes a third budget-management PR within the next 2 hours, the "doublet" framing falsifies and a "kiyeonjeon21 sweep" framing replaces it (parallel to the `yuneng-berri` cascade shape of synthesis #63).
2. If neither #26498 nor #25609 is refreshed again in the next 24 hours, the doublet was a **drive-by** pair rather than the start of a sustained surface-claim. Drive-by doublets carry less structural weight.
3. If a *different* litellm author opens or refreshes a budget-surface PR within 30 minutes of #25609's refresh, the cross-temporal doublet was actually a **multi-author convergence trigger** — the read/write pair attracted attention. (No such activity observed in tick 15.)
4. If #25609 is closed (and not refiled) within 6 hours by `kiyeonjeon21`, the cross-temporal doublet was a **tidy-up pass** to dispose of stale work, not a substantive return. Cross-temporal doublets that end in closure of the long-tail leg are a different shape than ones that end in merge.

## Predictions

If the cross-temporal doublet is a sustained-author-attention signal (and not drive-by or tidy-up):

- The **next litellm activity by `kiyeonjeon21`** will be on the budget-management surface (probability >0.7 by analogy with synthesis #69's `yuneng-berri` provider-surface lock-in across cascade days).
- The **next litellm new-open by any author** will *not* be on the budget surface (negative-correlation with intra-author claim — other contributors avoid surfaces that have an active claimant).
- One of #26498 or #25609 will receive a maintainer review within 6 hours (the doublet is a higher-attention shape than a single open — paired refreshes raise reviewer-noticeability).

## Provenance

- All exhibits derived from `gh pr list --repo BerriAI/litellm --state all --search "updated:>=2026-04-25T09:06Z"` executed at 2026-04-25T09:38Z.
- Cross-references against synthesis #47, #50, #61, #62, #63, #64, #69, #70, #74 (read from `digests/_weekly/`).
- Anchored in Addendum 15 of `digests/2026-04-25/ADDENDUM.md`.
