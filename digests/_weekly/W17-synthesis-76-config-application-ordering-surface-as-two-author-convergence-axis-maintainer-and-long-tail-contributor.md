# W17 Synthesis #76 — Config-application-ordering surface as a two-author convergence axis: maintainer + long-tail-contributor refresh adjacent PRs within 102 seconds on "which config wins in what order"

**Window**: 2026-04-25T09:30Z → 2026-04-25T09:32Z (Addendum 15; 102-second slice inside opencode's tick-15 sustained-leadership window)

**Anchor exhibits** (2 PRs, two distinct authors — one maintainer, one long-tail contributor — single repo, single surface family: *config-application precedence*):

- anomalyco/opencode#24222 (`thdxr` / Dax — **maintainer-class**, *"fix permission config order"*, head SHA `6e4f4544014e`, OPENED 2026-04-24T22:29:49Z, refreshed **09:30:11Z** 2026-04-25, age at refresh: ~11h00m) — permission-subsystem config ordering
- anomalyco/opencode#22296 (`Daviey` / Dave Walker — **long-tail contributor**, *"fix: authoritative managed-settings.json applied after all user config"*, head SHA `ee8e519c835f`, OPENED 2026-04-13T13:28:36Z, refreshed **09:31:53Z** 2026-04-25, age at refresh: ~11d20h) — managed-settings authority over user config

**Inter-PR delta**: 102 seconds (1m42s) between the two refreshes. Two distinct authors, one maintainer-class and one long-tail-contributor-class, both touching the *config-application precedence* surface family of opencode within sub-2-minutes of each other.

## Cross-references

- **Distinct from synthesis #28** (admin-as-overscoped-actor): #28 is a *security-shape* reading where admin scope leaks across boundaries. #76 is an *ordering-shape* reading where multiple configs compete to define the same setting — orthogonal axis on the config surface.
- **Distinct from synthesis #22** (privilege-by-exclusion): #22 is *what's missing from a deny list*. #76 is *what wins in a precedence chain* — both touch authorization-adjacent surfaces but #76 is precedence-scoped, not exclusion-scoped.
- **Distinct from synthesis #51** (multi-author auth/ACL hardening surge as cohort response): #51 is a *response* to a known issue, multiple PRs racing to harden. #76 is two pre-existing PRs being independently re-pushed in the same 102-second slice — no observable triggering issue, no cohort coordination.
- **Distinct from synthesis #49** (API-surface gravity well — multi-author multi-shape PR cluster): #49 is *cluster of opens* on a high-traffic API surface. #76 is a *paired refresh* of two pre-existing opens — surface attention without new opens, attention without new mass.
- **Builds on synthesis #19** (snapshot-vs-live-state): #19 is a *value-source* contract about whether config is read once at startup or live. #76 is the natural follow-up axis — *if multiple sources exist, in what order do they apply*.
- **Builds on synthesis #21** (advertised capability vs runtime delivery): #21 is *what the docs claim vs what runs*. #76 is the precondition — *what config is loaded when delivery happens*. Together #19/#21/#76 form a config-correctness triad.

## Pattern

**Config-application-ordering as a convergence axis** has three diagnostic features:

1. **Maintainer + long-tail-contributor pairing** is the typical author shape (not maintainer-only and not contributor-only). Maintainers care about config-ordering because it touches the runtime contract; long-tail contributors care because they hit ordering bugs in their own deployments and stay invested across week-scale time horizons. The 11h/11d age asymmetry in #76's exhibits is structural, not coincidental.
2. **Sub-2-minute paired refreshes without coordination signal**: the 102-second delta between #24222 and #22296 is too tight to be coincidence-Poisson at the per-tick rate (opencode tick-15 saw 5 PRs touched in 32 minutes ≈ 1 per 6.4m; two within 102s is ~3.8x the rate baseline). But there is **no shared issue, no cross-PR comment, no shared author** to coordinate them. The coupling appears to be **surface-pull**: working one PR makes the author notice the related one, and pushing one signals into the other author's notification stream, prompting their push.
3. **No new open spawned in the same window**: the surface attention does not generate a third PR. Compare with synthesis #51 where surge response generated multiple new opens. #76's shape is *closing the surface*, not *opening it*.

## Why this shape is structurally interesting

The opencode config-application surface has been quietly accumulating PRs:

- #22296 (`Daviey`) opened 2026-04-13 — managed-settings authority
- #24222 (`thdxr`) opened 2026-04-24 — permission config order
- (likely more in the dormant set — needs corpus check)

This is a **slow-burn surface** without the bursty-cohort property of #51 surfaces. The 102-second pairing in tick 15 is the **first observable convergence** on this surface in today's digest. That a maintainer (`thdxr`) is one of the two paired authors is the most important diagnostic: maintainer-touch on a long-tail surface usually precedes either (a) a merge wave, (b) a refactoring PR that subsumes both legs, or (c) a maintainer-authored rewrite that closes both as duplicates. None of these have occurred in tick 15 — but the pairing is the **leading signal** for one of them.

The shape also **complements synthesis #74's release-recency-driven leadership reading**: opencode shipped v1.14.24 ~17h before tick 14 and is now seeing post-release downstream surfacing across multiple surface families (docs in tick 14 per synthesis #73; config-precedence in tick 15 per #76). The release artifact is not just *generating new opens* — it is **reactivating dormant long-tail PRs** as users hit pre-existing bugs in the new release. The config-precedence surface in particular is one users only notice when their settings unexpectedly stop applying — a release that touches the config-loading path would naturally trigger this surface to light up.

## Falsification checks

1. If `thdxr` (maintainer) merges or closes either #24222 or #22296 within 6 hours, the convergence-as-leading-signal-for-merge-wave reading confirms; if neither happens within 24 hours, the convergence was a **drive-by surface scan**, not a leading signal.
2. If a *third* config-application-ordering PR is opened within 4 hours by any author, the "surface attracting open mass" reading replaces the "surface closing" reading — and #76 needs revision toward a synthesis #49-style gravity-well shape.
3. If `thdxr` opens a refactoring PR that supersedes both #24222 and #22296 within 24 hours, the convergence was the **scoping signal** for an upcoming maintainer-led consolidation — a stronger reading than (1).
4. If the v1.14.24 release notes do *not* touch the config-loading path (verifiable from opencode CHANGELOG or release notes), the release-recency-driven framing weakens and a coincidence-Poisson reading of the 102-second pairing must be considered.

## Predictions

If the surface-pull-driven pairing reading is correct:

- The **next opencode activity by `thdxr`** in the next 4 hours has elevated probability (>0.5) of being a comment, review, or merge action on either #24222 or #22296 — not a fresh open on a different surface.
- A **third config-application-ordering PR** (whether new open, refresh of dormant PR, or refactoring PR) will surface within the next 6 hours. Watch for keywords: `config order`, `precedence`, `managed-settings`, `permission scope`, `loadConfig`, `mergeConfig`, `defaults`.
- If the surface attracts a third PR by a *new* author (neither `thdxr` nor `Daviey`), it will be on the **runtime side** of the boundary (validation, error reporting on conflict) rather than the loading side — runtime-side bugs are downstream of loading-side bugs and surface later in the bug-report timeline.

## Why this is distinct from synthesis #74's leadership-rotation framing

Synthesis #74 reads opencode's tick-14+15 sustained leadership as **release-recency-driven**. #76 sharpens this: not *all* opencode activity in the post-release window is uniform. Tick 14 was **docs-class** (synthesis #73). Tick 15 is **config-precedence-class** (#76). These are *different surface families* unified only by *both being downstream of a release*. The leadership is sustained but the surface focus is rotating *within* the leading repo on a per-tick basis. This is a finer-grained signal than #74 captured.

## Provenance

- All exhibits derived from `gh pr list --repo anomalyco/opencode --state all --search "updated:>=2026-04-25T09:06Z"` executed at 2026-04-25T09:38Z.
- Cross-references against synthesis #19, #21, #22, #28, #49, #51, #73, #74 (read from `digests/_weekly/`).
- Anchored in Addendum 15 of `digests/2026-04-25/ADDENDUM.md`.
