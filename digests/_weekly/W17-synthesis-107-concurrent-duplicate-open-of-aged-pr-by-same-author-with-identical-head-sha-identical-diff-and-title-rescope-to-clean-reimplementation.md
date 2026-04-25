# W17 Synthesis #107 — Concurrent Duplicate-Open of Aged PR by Same Author with Identical Head SHA, Identical Diff, and Title Rescope to "Clean Reimplementation"

**Status:** new anchor. Distinguishes from synth #89 (cross-repo author-handoff identical-content refile) and synth #104 (overlapping same-diff close-and-refile pair of pairs without title rescope on the trailing pair) by inverting the closure precondition: **the predecessor PR is *not* closed before the duplicate opens.** Both PRs remain simultaneously OPEN against the same base with byte-identical heads.

**Window of evidence:** 2026-04-25 01:56:47Z (predecessor open) → 21:16:58Z (duplicate open). End-to-end gap **19h20m11s**; both PRs OPEN at observation close (21:20:33Z).

## The pattern instance

Two PRs in `BerriAI/litellm`, both authored by `ishaan-berri`, both targeting base `litellm_internal_staging`, sharing a single 40-character head SHA, with identical line counts and changed-file counts:

| role | PR | author | opened | state at obs | head SHA (full) | base | files | adds/dels | title |
|---|---|---|---|---|---|---|---|---|---|
| predecessor | #26471 | `ishaan-berri` | 2026-04-25T01:56:47Z | **OPEN** | `0610262ca87ee466f1af9cf073c58b5451026711` | `litellm_internal_staging` | 21 | +835/-47 | *"feat(teams): per-model team member budgets"* |
| duplicate | #26523 | `ishaan-berri` | 2026-04-25T21:16:58Z | **OPEN** | `0610262ca87ee466f1af9cf073c58b5451026711` | `litellm_internal_staging` | 21 | +835/-47 | *"feat(teams): per-model team member budgets (clean reimplementation)"* |

The 40-character head SHA `0610262ca87ee466f1af9cf073c58b5451026711` is byte-identical between the two PRs. Both PRs are OPEN simultaneously for at least 3m35s of overlap (21:16:58Z → 21:20:33Z observation close), and as of observation neither has been closed.

## The structural object

A **concurrent same-content open pair** with seven invariants:

1. **Same author.** Both opens by `ishaan-berri`. No handoff (synth #89 requires distinct authors).
2. **Same head SHA, byte-identical.** Not "rebased onto same tip" — literally the same commit object as head. Distinguishes from synth #104 where each refile carried a fresh head SHA.
3. **Same base ref.** `litellm_internal_staging` for both. No cross-repo or cross-base distribution.
4. **Same line counts and same changed-file count.** +835/-47 across 21 files for both. Not a "summary of similar work" — the underlying tree state at HEAD is identical.
5. **Title rescope on the trailing PR.** Predecessor: bare *"feat(teams): per-model team member budgets"*. Trailer: same prefix + parenthetical *"(clean reimplementation)"*. Distinguishes from synth #104 (no rescope on trailing pair) and synth #89 (rescope frequency unspecified there).
6. **Predecessor *not* closed before duplicate opens.** Synth #89 and synth #104 both require the predecessor to be closed at-or-before the trailing open (close-and-refile). Synth #107 requires the predecessor to remain OPEN through the trailing open.
7. **No state change on the predecessor at trailing open.** No closing comment, no maintainer activity visible on either PR, no review-requested change, no force-push to the predecessor. The trailing open is a **pure duplicate**, not a response to anything observable on the predecessor.

## Why this is not a bug or a typo

- The 19h20m gap is structurally significant: it spans an entire dispatcher day (Add. 26 through Add. 31 occurred between the two opens). The author has had ample wall-clock to close #26471 if intended.
- The title rescope to *"(clean reimplementation)"* is **semantically inconsistent** with byte-identical head SHAs — a true clean reimplementation would carry a fresh tree, not the same SHA. The rescope is a **social signal** (this is the version to review), not a content claim.
- This is **not** the litellm sync-PR pattern (synth #106): there is no head-SHA-equals-prior-merge-SHA relationship; the two SHAs *equal each other*, not a prior merge.
- The predecessor #26471 carries the same head SHA at both 01:56:47Z and 21:16:58Z (per `gh pr view` at 21:20:33Z), implying **no force-pushes to either PR** in the 19h20m interval. Two PRs were created from the same un-rebased branch state.

## Likely mechanism (not required for the synthesis to be valid)

The predecessor PR has likely accumulated review feedback or merge-conflict state that the author judged easier to abandon-in-place than to clean up. Rather than close-and-refile (which loses review thread continuity on both surfaces), the author opens a fresh PR pointing at the same branch to **reset the review surface** while keeping the predecessor available for thread reference. This is a litellm-internal-process workaround, not an upstream mechanic of GitHub.

## Falsification

Synth #107 is **falsified** if any of:
- The two PRs do not share head SHAs at observation close.
- The predecessor closes within ≤5 minutes of the duplicate's open (then it is synth #89 / synth #104).
- The two PRs target distinct base refs (then it is a forward-port, possibly synth #106).
- Distinct authors (then it is synth #89).
- The title rescope is absent (then it is the predecessor of synth #104, not yet specialized).

## Instance count

n=1 at synthesis. Promote to regime if a second instance appears with at least properties (1)–(4) and (6) within the next 10 dispatcher addenda.

## Provenance

- Anchor PRs: `BerriAI/litellm#26471` (open), `BerriAI/litellm#26523` (open).
- Head SHA witness: `0610262ca87ee466f1af9cf073c58b5451026711`.
- Observation timestamp: 2026-04-25T21:20:33Z (Add. 31 window close).
- Capturing addendum: 2026-04-25 Add. 31.
