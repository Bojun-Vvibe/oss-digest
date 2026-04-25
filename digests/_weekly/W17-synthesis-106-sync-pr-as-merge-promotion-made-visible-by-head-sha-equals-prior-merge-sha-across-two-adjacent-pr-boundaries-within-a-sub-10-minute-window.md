# W17 Synthesis #106 — Sync-PR-as-Merge-Promotion Made Visible by Head-SHA-Equals-Prior-Merge-SHA Across Two Adjacent PR Boundaries Within a Sub-10-Minute Window

**Status:** new anchor. Distinguishes from prior litellm-rolling-staging-branch synths (Add. 27 / Add. 28 / Add. 29 captured the *existence* of three concurrent dated-branch families) by promoting an observable structural invariant — **the trailing PR's head SHA is byte-identical to the leading PR's merge SHA** — to a falsifiable signature for the merge-promotion mechanism itself.

**Window of evidence:** 2026-04-25 20:22:04Z (leading merge) → 20:29:44Z (trailing merge). 7m40s end-to-end; trailing PR's lifespan is 13 seconds.

## The pattern instance

Two PRs in `BerriAI/litellm`, both self-merged by their respective authors, sharing a single 40-character SHA across a PR boundary:

| role | PR | author | opened | merged | lifespan | head SHA (full) | merge SHA (full) | base | files | adds/dels |
|---|---|---|---|---|---|---|---|---|---|---|
| leader | #26338 | `ryan-crabbe-berri` | 2026-04-23T18:13:53Z | 20:22:04Z | 2d2h08m11s | `09113078c02c111e61e91efe9ae006ceab70f09a` | **`9f60b751e13c059f77f547d82d0ce1afdc826657`** | `litellm_internal_staging` | 5 | +487/-110 |
| trailer | #26519 | `Chesars` | 20:29:31Z | 20:29:44Z | **13 seconds** | **`9f60b751e13c059f77f547d82d0ce1afdc826657`** | `2255f7651fd113023def9ad51d537f7b65d838a7` | `litellm_staging_03_21_2026` | 5 | +487/-110 |

The bolded SHA `9f60b751e13c059f77f547d82d0ce1afdc826657` appears **as the merge commit of #26338** and **as the head ref of #26519**. The two PRs are opened by **different authors** but the SHA equality unifies them into a single merge-promotion pipeline.

## The structural object

A **two-PR merge-promotion handoff** with six properties:

1. **Cross-PR head-SHA-equals-prior-merge-SHA.** The trailing PR's `headRefOid` is byte-identical to the leading PR's `mergeCommit.oid`. This is **only possible** if the trailing PR's branch was reset to (or branched from) the leading PR's merge commit. In practice, this signature is produced by `git push origin litellm_internal_staging:litellm_staging_03_21_2026` or equivalent — the trailing PR is a forward-port of the leading merge into a downstream branch.
2. **Byte-identical line-count diff.** Both PRs report `+487/-110 across 5 files`. The trailing PR is structurally a **no-op rebase** from the leading PR's perspective — the diff against the trailing PR's base (`litellm_staging_03_21_2026`) coincidentally equals the diff against the leading PR's base (`litellm_internal_staging`) only if the two base branches were already in sync up to the leading merge.
3. **Different authors, same merge-mechanism.** Leader is `ryan-crabbe-berri`; trailer is `Chesars`. Authorship rotates across the boundary, but both authors self-merge their respective PRs. This rules out a single-author serial-self-merge interpretation (synth #101 / #103).
4. **13-second trailer lifespan.** The trailing PR opens 7m27s after the leader merges, then merges 13 seconds after opening. Sub-15-second PR lifespan with a non-bot author and a non-trivial diff (487 lines) is structurally implausible without **the diff being already pre-validated** — which the SHA equality confirms (the diff is the prior merge).
5. **Asymmetric base-branch parents.** Leader merges into `litellm_internal_staging` (the upstream sync target); trailer merges into `litellm_staging_03_21_2026` (a dated downstream sync branch). The directionality is **upstream → dated downstream**.
6. **Trailer's title is a sync directive, not a feature description.** Title: *"Sync litellm_staging_03_21_2026 with litellm_internal_staging."* The PR's name openly declares its mechanism, but the SHA-equality signature is what makes the mechanism **machine-verifiable from PR metadata alone**, without parsing titles.

## Falsifiable claim for synth #106

**A merge-promotion handoff can be detected from PR metadata alone (no diff inspection, no title parsing) by the conjunction of three signals: (i) the trailing PR's `headRefOid` equals the leading PR's `mergeCommit.oid` byte-for-byte, (ii) the trailing PR's lifespan is shorter than the wall-clock latency of any human review (≤2 minutes), and (iii) the trailing PR's base branch differs from the leading PR's base branch.** Where all three hold simultaneously, the trailing PR is functionally a forward-port of the leading merge into a downstream branch, regardless of authorship overlap.

**Possible drivers (not asserted, listed for falsification):**
- (a) **Manual sync-PR hypothesis** — a maintainer (`Chesars`) is the designated branch-warden for the dated `litellm_staging_03_21_2026` branch and runs sync-PRs by hand whenever `litellm_internal_staging` advances.
- (b) **Bot-impersonating-human hypothesis** — `Chesars` may be a service-account whose UI presents as human; the 13-second lifespan + sync-only title is consistent with automation.
- (c) **CI-gated auto-sync hypothesis** — a workflow detects `litellm_internal_staging` advances and opens-and-merges sync PRs against each registered downstream dated branch.

**Test:** synth #106 is falsified at N=2 if any future cross-PR head-SHA-equals-prior-merge-SHA pair in the digest's tracking window (a) requires more than 2 minutes of trailer-lifespan, (b) targets the same base branch as the leader, or (c) carries a different `additions/deletions/changedFiles` triple than the leader (indicating real diff divergence and not pure sync).

## Distinguishing from existing synths

- **Add. 27 / Add. 28 / Add. 29** (litellm rolling-staging-branch family) — those addenda established the *existence* of three dated-branch families (`litellm_staging_<date>`, `litellm_oss_staging_<date>`, `litellm_<initials>_<date>`). Synth #106 promotes a single observable invariant from those addenda — the SHA-equality signature — to a generalizable detector that does not require knowing the dated-branch naming convention.
- **#101 / #103** (single-author N≥6 spec-anchored self-merge series with stable anchor pair) — those synths require single-author + repeated anchor-file co-touch. #106 explicitly crosses an authorship boundary and the file-count is a single-instance equality, not a repeated co-touch.
- **#41** (stacked PR rejected after parent merged) — opposite directionality: #41 is parent-merged-then-child-rejected; #106 is parent-merged-then-child-mirror-merged.
- **#85** (sub-10-second same-author cross-PR doublet) — #85 is same-author with no SHA equality between the doublet members. #106 is different-author with explicit SHA equality.

## Why this matters as a structural pattern

The SHA-equality signature provides a **structural** way to count "real" merges vs "ledger-keeping" merges in a repository's merge volume. Litellm's in-window merge count for Addendum 30 is 3, but if synth #106's signature is applied, **#26519 is a sync-promotion of #26338 — the underlying code-change count is 2, not 3.** This matters for any cross-repo merge-volume comparison: synth #102's *"single-author merge-stream window"* and synth #103's anchor-pair-stable cadence-incoherent series both count merges, and double-counting sync-promotions inflates their numerator. A future correction to those synths could subtract sync-promotion pairs to recover the true code-change merge count.

The signature is also a **discriminator** for distinguishing repositories that use trunk-based development (where this signature should be rare or absent) from repositories that use rolling-staging-branch mechanisms (where the signature should be common). Across the dispatcher's 9 tracked repos, only `BerriAI/litellm` has so far produced cross-PR head-SHA-equals-prior-merge-SHA pairs, consistent with #106's claim that the signature is a fingerprint of the rolling-staging-branch development model.
