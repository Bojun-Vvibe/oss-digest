# W17 Synthesis #82 — Duplicate-PR Convergence by Independent Authors on a Micro-Feature Surface, Same Day, Same Repo, No Cross-Reference

**Status:** new pattern observation. Distinct from synthesis #72 (multi-author single-surface convergence at maintainer cadence) — that pattern observed authors converging *near* each other temporally (sub-4-minute window); this synthesis observes authors converging on the *exact same micro-feature* hours apart, with neither author aware of the other.

## Pattern

Within a single repository, on a single day, **two distinct authors** independently file PRs that:

1. Have **near-identical titles** (one is a near-paraphrase of the other; same noun-phrase head, sometimes a `fix:` vs unprefixed framing difference).
2. Target **the same exact micro-feature** — a bounded, shippable unit of behavior (a single API option, a single pagination parameter, a single guard clause).
3. Are filed **>1h, <12h apart** — long enough that they're not coordinated; short enough that the second author would have seen the first PR if they had searched the open-PRs list before filing.
4. Have **no cross-reference** between them — neither title nor body acknowledges the other PR; neither author is in the other's PR's reviewers, comments, or co-author list at observation time.
5. Both remain **open** at observation — the maintainer has not yet picked one and closed the other.

The structural distinguishing feature: **independent discovery of the same gap**, in the same repo, the same day. This is *not* coordination, *not* a fork, *not* a duplicate-with-credit. Both authors believe they are filing a novel PR.

## Concrete instance — cline/cline, 2026-04-25

| PR | Author | Opened | Title | Surface |
|---|---|---|---|---|
| #14128 | `fungi8` (Jon Wang) | 2026-04-25T05:19:54Z | "Support pagination for branch search" | GitHub-integration / branch-listing pagination |
| #14132 | `Jerry2003826` (JerryLee) | 2026-04-25T11:35:40Z | "fix: support pagination for branch search" | GitHub-integration / branch-listing pagination |

- **Inter-PR gap:** 6h15m46s.
- **Title diff:** `Jerry2003826` adds a `fix:` prefix and lowercases the verb. Otherwise identical.
- **Authors:** zero overlap (different display names, different account IDs, different prior PR histories in cline as of observation).
- **Cross-reference status:** none. Neither PR references the other in title; per the metadata available, neither body links to the other.
- **Both open:** as of observation 12:05Z, neither has been closed by the maintainer.
- **First-iteration cadence on #14132:** open (11:35:40Z) → refresh (11:41:38Z) = 5m58s. Author iterated immediately, suggesting they did not pause to search for prior duplicates.

## Why this is structurally distinct from prior syntheses

- **vs #72 (multi-author single-surface convergence at maintainer cadence, sub-4-minute window)**: #72 observed two authors converging at *maintainer-triggered* cadence — i.e., a maintainer's comment or merge prompted both. The cline duplicate-PR pair has **no maintainer trigger** in the inter-PR window (no shared issue close, no comment ping). It is independent discovery, not maintainer-triggered convergence.
- **vs #69 (multi-author single-day refresh convergence on provider-family surface)**: #69 is multi-author refresh of *existing* PRs on a *family* of surfaces (multiple provider configs). #82 is multi-author *fresh open* on a *single* exact micro-feature.
- **vs #76 (config-application-ordering surface as two-author convergence axis)**: #76 has the two authors converging because the surface (config ordering) is recurringly contentious. #82 has authors converging on a surface that is *not* recurringly contentious — branch-search pagination is a small-utility surface, not a frequently-discussed area.
- **vs #67 (declared vs inferred multi-pr sequences)**: #67 is one author splitting a feature across multiple PRs deliberately. #82 is two authors *unintentionally* splitting attention across two PRs that should have been one.

## Hypothesis: why now, why this surface

The cline `Support pagination for branch search` micro-feature is a textbook **paper-cut-discovery** surface: a user with many branches in their repo notices that branch search returns only the first page, and immediately understands the fix shape (add a pagination loop in the integration adapter). The fix is small (probably <50 LOC), the surface is well-bounded, and the user-facing pain is acute and reproducible.

Surfaces with all four properties — **acute paper-cut, well-bounded, small fix, reproducible** — are predicted to attract duplicate-PR convergence at higher rates than surfaces missing any of those properties. (Configuration-ordering surfaces, by contrast, attract two-author convergence via the *#76* mechanism — recurring contention, not paper-cut discovery.)

## Falsifiable hypothesis

If duplicate-PR convergence on paper-cut surfaces is a real pattern at cline / similar repos:

1. We should observe ≥1 similar duplicate pair per **2 weeks** in cline, on a different paper-cut surface (e.g., a missing pagination, a missing guard clause, a missing config option).
2. The **gap distribution** should center around 4–10 hours when both authors are in adjacent timezones (consistent with #14128 at 05:19Z, #14132 at 11:35Z — both plausibly Asia/Pacific morning vs midday).
3. The maintainer should close one of the two PRs (the later one, by convention) within 48h of noticing — if both remain open >1 week, the maintainer either hasn't noticed or is silently choosing between them by quality. If we observe maintainers leaving both open >1 week consistently, the convergence pattern produces measurable *review-capacity waste*, which would be a separate operational concern.
4. We should **not** observe duplicate-PR convergence on infrastructure surfaces (CI, build system, deps) — those require deeper context and are unlikely to be discovered independently in the same day. If we do observe duplicates on infrastructure surfaces, the hypothesis is too narrow.

## Operational implication

For maintainers of integration-heavy repos (cline, OpenHands, continue, opencode — all of which have many third-party-service adapters): **expect ~one duplicate-PR pair per fortnight on paper-cut surfaces**. The cheapest mitigation is a **pre-open search prompt** in the PR template (e.g., "have you searched the open PRs for this exact surface?"), but the second-cheapest mitigation is for maintainers to **link the duplicates immediately** when they notice, so reviewers don't waste cycles reviewing both independently.

For contributors filing PRs on small paper-cut surfaces: **search the open-PRs list with the surface noun before filing**. The 60 seconds spent searching for "branch search pagination" in cline's open PRs would have prevented the entire duplication. The cost asymmetry is real — both `fungi8` and `Jerry2003826` will share credit at best, and one will see their PR closed at worst.

For ecosystem observers: **count of duplicate-PR pairs per repo per month** is a candidate proxy metric for "how acute is the paper-cut backlog in this repo" — high counts suggest the maintainer is failing to triage paper-cut PRs fast enough that contributors stop refiling them.
