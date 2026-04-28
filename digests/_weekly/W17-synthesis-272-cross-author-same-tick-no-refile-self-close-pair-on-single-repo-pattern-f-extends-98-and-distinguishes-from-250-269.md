# W17 Synthesis #272 — **Cross-author same-tick self-close pair on single repo: at Add.119 sst/opencode exhibits two distinct-author no-refile self-closes within 4m43s of each other (Nils-Fischer #24775 closed 2026-04-28T11:26:11Z after 13m17s lifespan, then mrsimpson #24778 closed 11:30:54Z after sub-1min 46s lifespan), with NEITHER author exhibiting Pattern E refile, ESTABLISHING a new sub-pattern of synth #98 (bot-driven sub-10s n3 stale-PR mass-close) generalized to human-driven sub-5min n2 cross-author same-repo self-close cluster — distinct from synth #250 Pattern E (close-and-refile, single author) by the no-refile termination AND distinct from synth #98 mass-close by the human-author identity AND sub-tick (not sub-10s) clustering**

## Empirical basis (Add.119 cross-author self-close pair)

At ADDENDUM-119 (capture 2026-04-28T10:51:00Z → 11:33:00Z), sst/opencode exhibited TWO distinct-author no-refile self-close events within a sub-5min cross-author cluster:

| PR | Author | Author-id | Opened | Closed | Lifespan | Title | Refile? |
|----|--------|-----------|--------|--------|----------|-------|---------|
| #24775 | Nils-Fischer | `MDQ6VXNlcjgwNzYzNTg2` (Nils Fischer) | 2026-04-28T11:12:54Z | 2026-04-28T11:26:11Z | **13m17s** | `feat(desktop): support remote electron server` | NONE in window |
| #24778 | mrsimpson | `MDQ6VXNlcjE3MTc2Njc4` (Oliver Jägle) | 2026-04-28T11:30:08Z | 2026-04-28T11:30:54Z | **46s** | `fix: clean stale .gitconfig.lock and correct Pulumi storageSize namespace` | NONE in window |

**Inter-close cross-author gap:** 11:30:54Z − 11:26:11Z = **4m43s**.
**Cardinality:** n=2 distinct authors, both single-PR no-refile, both sst/opencode, both same-tick (Add.119 42m capture window).
**Surface heterogeneity:** desktop-electron remote-server vs gitconfig.lock+Pulumi storageSize — fully disjoint surfaces, NO shared file/spec anchor. Distinct also from synth #97 stacked-spec-anchor (those were same-author shared-spec).

**Refile verification (via `gh pr list -R sst/opencode --search "author:Nils-Fischer"` and similar for mrsimpson):**
- Neither author has any subsequent PR in opencode within Add.119 window with identical-or-near-identical title.
- Neither author appears in opencode opens/merges in Add.119 outside these two PRs.
- **No-refile termination confirmed for both PRs at Add.119 close.**

## Synth #272 claim — Cross-author same-tick no-refile self-close cluster on single repo is a distinct sub-pattern in the close-and-refile catalog, with structural properties (a) cross-author n≥2, (b) sub-10min cross-PR temporal clustering, (c) no refile within tick, (d) heterogeneous surfaces

The synth #272 claim establishes a NEW pattern class adjacent to synth #98 (bot mass-close) and synth #250 (Pattern E close-and-refile):

1. **Distinct from synth #250 Pattern E**: Pattern E is single-author close-and-refile with identical title. Synth #272 is multi-author close-no-refile with disjoint titles. State-transition signature: Pattern E = open→close→open(identical-title); synth #272 = open→close (terminal).

2. **Distinct from synth #98 bot mass-close**: synth #98 is single-bot-author n≥3 sub-10s mass-close on stale PRs. Synth #272 is n=2 distinct-human-author sub-5min cross-PR cluster on FRESH (sub-15min lifespan) PRs. Author-cardinality: synth #98 cardinality-1 (single bot); synth #272 cardinality-2+ (multiple humans). Lifespan-signature: synth #98 closes long-tail-stale PRs; synth #272 closes fresh PRs.

3. **Distinct from synth #266 tanzhenxin quartet**: tanzhenxin quartet is single-author MERGE quartet (constructive). Synth #272 is multi-author CLOSE pair (destructive/abandonment).

4. **Distinct from synth #269 Pattern E sub-tick co-occurrence**: synth #269 is cross-REPO Pattern E co-occurrence (different repos). Synth #272 is cross-AUTHOR same-REPO no-refile co-occurrence (same repo, different authors).

The structural meaning of synth #272: **opencode in Add.119 exhibited a brief abandonment cluster** where two unrelated authors both opened-and-rapidly-self-aborted PRs within a 4m43s window. This is a NEW signature that may indicate:

- **Shared CI / merge-policy stress** in opencode that causes multiple authors to hit blocking status concurrently and self-abort.
- **Independent low-quality-PR coincidence** (each author independently realized their PR was wrong-target / wrong-branch).
- **Status-broadcast coupling** (one author's self-close visible in PR feed triggers another's reconsideration — social-coupling).

These three hypotheses are not mutually exclusive but are independently testable.

## Cross-references and prior-prediction relationships

- **EXTENDS synth #98** (bot-driven sub-10s n3 stale-PR mass-close) into human-driven n2 fresh-PR cluster sub-class. Bot-vs-human and stale-vs-fresh are independent axes; synth #272 occupies the human-fresh quadrant alongside synth #98's bot-stale quadrant.
- **DISTINGUISHES from synth #250** Pattern E catalog by no-refile termination. Pattern E catalog now contains: Pattern E (single-author multi-min close-and-refile, synth #250), Pattern E-prime (single-author sub-60s close-and-refile, synth #269), and **Pattern F (cross-author n≥2 sub-tick no-refile self-close cluster, synth #272 NEW)**.
- **CROSS-REFERENCES synth #271 codex-monopoly** — Add.119 simultaneously exhibits codex monopoly (constructive merges) AND opencode synth #272 (destructive self-closes); the two patterns are spatially-separated (different repos) but temporally co-incident, suggesting **cross-repo regime divergence within single tick** is a structural feature of W17 deep-cohort suppression conditions.
- **CONTRADICTS implicit assumption in synth #94** (same-author same-product surface-disjoint back-to-back merge pair) that surface-disjoint cross-PR coupling requires same author. Synth #272 demonstrates surface-disjoint cross-PR coupling can be CROSS-AUTHOR (Nils-Fischer desktop-electron + mrsimpson gitconfig+Pulumi).

## Predictions (falsifiable, tied to next-tick observable)

**Pred 272-1** (Pattern F recurrence rate): **Pattern F (cross-author n≥2 sub-tick no-refile self-close cluster on single repo) recurs at least once in next 10 ticks (deadline Add.129).** Falsifier: 10 consecutive ticks elapse without any tick exhibiting Pattern F on any of the 6 tracked repos.

**Pred 272-2** (Pattern F repo-concentration): **Of the next 5 Pattern F observations (across any time horizon), ≥3 occur on opencode** — tests whether opencode's CI/merge-policy stress is the dominant Pattern F driver. Falsifier: ≤2 of next 5 Pattern F observations on opencode.

**Pred 272-3** (Pattern F sub-1min sub-class): **At least 50% of Pattern F constituent PRs (across next 10 observations) have sub-1min lifespans (like mrsimpson #24778 46s).** Tests whether ultra-short-lifespan self-close is a structural sub-feature. Falsifier: <50% sub-1min lifespans across 10 observations.

**Pred 272-4** (Pattern F vs Pattern E ratio): **In next 12 ticks, ratio of Pattern F observations : Pattern E observations is in [1:3, 3:1]** — tests whether the two sub-patterns are roughly comparable in frequency. Falsifier: ratio outside [1:3, 3:1].

**Pred 272-5** (Pattern F-after-monopoly anti-correlation refinement of 271-1): **No Pattern F observation immediately follows a same-repo monopoly tick (within ±1 tick) for the SAME repo.** Tests whether monopoly-energy and abandonment-energy spatially-exclude each other. (Pattern F at opencode in Add.119 ≠ same-repo as codex monopoly — consistent with claim.) Falsifier: ≥1 instance in next 20 ticks where Pattern F occurs on a repo within ±1 tick of that same repo's monopoly tick.

## Next-tick (Add.120) immediate observables

- **Pred 272-1 immediate test**: does Add.120 exhibit Pattern F on any repo? (Tick 1 of 10.)
- **Pred 272-2 immediate test**: if Pattern F occurs in Add.120, on which repo? (Initial cohort-of-1 already on opencode at Add.119.)
- **Pred 272-3 immediate test**: track Add.120 self-close lifespans, augment cohort.
- **Bingkxu #24762 / Sameerlite #26685 refile status** (cross-test with Pred 269-3): if either merges in Add.120, deepens contrast between Pattern F (no-refile-no-merge terminal) and Pattern E (refile-then-merge resolution).

## Mechanistic hypotheses for further testing

1. **Shared CI stress hypothesis**: if opencode CI is intermittently failing in Add.119, multiple authors who push concurrently would receive failed-status signals and self-abort. Testable via: cross-correlate Pattern F clusters with opencode CI failure rate (would require CI log access; out-of-scope for this digest).

2. **Independent coincidence hypothesis**: Pattern F is a Poisson-overlap of independent self-close events. Testable via: compute baseline self-close rate per author per tick on opencode, predict overlap probability, compare to observed Pattern F frequency.

3. **Social-coupling hypothesis**: visible self-close in PR feed influences other authors' decisions. Testable via: measure Pattern F lifespans for SECOND author conditional on FIRST author's close visibility window. (Add.119 data: mrsimpson #24778 closed 4m43s after Nils-Fischer #24775 close — within plausible "saw the feed" window.)

## Carry-over consistency check vs prior synths

- **vs synth #98**: bot-pattern catalog now extended to also have human-pattern catalog with Pattern F. Bot patterns: mass-close (#98), release-train (#270). Human close patterns: Pattern E (#250), Pattern E-prime (#269), Pattern F (#272 NEW).
- **vs synth #267** (single-tick rebound non-persistence): synth #272 is consistent with non-persistence — cross-author abandonment cluster is itself a single-tick event.
- **vs synth #269**: Pattern E cross-repo co-occurrence (synth #269) and Pattern F cross-author same-repo cluster (#272) are orthogonal pattern dimensions — both can occur in same tick, neither implies the other.
- **vs synth #271 codex-monopoly**: synth #272 occupies the destructive-cluster regime in opencode while #271 occupies the constructive-monopoly regime in codex; together they characterize the **bipolar regime structure of Add.119** where one repo concentrates constructive activity and another concentrates destructive activity.

**Synth #272 status: LIVE-TRACKING with 5 predictions outstanding (deadlines Add.120, Add.129, Add.131; cohort-of-5 long-horizon).**
