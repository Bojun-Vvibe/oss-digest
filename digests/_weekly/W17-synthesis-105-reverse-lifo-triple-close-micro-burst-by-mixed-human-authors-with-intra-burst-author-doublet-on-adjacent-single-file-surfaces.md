# W17 Synthesis #105 — Reverse-LIFO Triple-Close Micro-Burst by Mixed Human Authors With Intra-Burst Author-Doublet on Adjacent Single-File Surfaces

**Status:** new anchor. Distinguishes from synth #98 (Dependabot-driven sub-10s n=3 stale-PR mass-close on heterogeneous dependency surfaces with multi-day age dispersion) by switching every distinguishing axis: actor (human, not bot), surface (working-code refactor + test, not dependency bumps), age dispersion (tight ~7-minute pre-burst open cluster, not multi-day), and ordering (reverse-LIFO close, not arbitrary).

**Window of evidence:** 2026-04-25 18:15:27Z (first PR opened) → 20:46:01Z (last PR closed). The close-burst itself spans 4 seconds: 20:45:57Z → 20:46:01Z.

## The pattern instance

Three PRs in `anomalyco/opencode` against base `dev`, opened within a 7m40s pre-burst window (18:15:27Z → 18:23:07Z), all closed within a 4-second post-burst window (20:45:57Z → 20:46:01Z) without being merged:

| PR | author | opened | closed | lifespan | head SHA | files | adds/dels | title surface |
|---|---|---|---|---|---|---|---|---|
| anomalyco/opencode#24360 | `rudraksha-avatar` | 18:15:27Z | 20:46:01Z | 2h30m34s | `84233c87` | 1 | +483/-385 | installer script |
| anomalyco/opencode#24361 | `tiffanychum` | 18:22:49Z | 20:45:59Z | 2h23m10s | `bcc5e9fb` | 1 | +65/-0 | permission-rule order test |
| anomalyco/opencode#24362 | `rudraksha-avatar` | 18:23:07Z | 20:45:57Z | 2h22m50s | `acfc8811` | 1 | +10/-6 | installer script + turborepo setup |

**No merge SHAs.** All three terminate in CLOSED, not MERGED.

## The structural object

A **triple-close micro-burst** with five properties:

1. **Reverse-LIFO close ordering.** Open order is #24360 → #24361 → #24362; close order is #24362 → #24361 → #24360. The PR opened *last* closes *first*; the PR opened *first* closes *last*. Close-time gaps are 2s and 2s — uniform.
2. **Intra-burst author-doublet.** `rudraksha-avatar` is the author of both #24360 and #24362. The two same-author PRs are opened 7m40s apart and **both touch the installer-script surface**, with #24362's title (*"enhance install script and turborepo setup"*) reading as a refinement-of-scope on #24360's (*"improve installer script clarity and functionality"*). The author-doublet sits **on adjacent surfaces, not the same diff** — distinct from synth #104's same-diff close-and-refile, where the duplicate PRs share head SHAs. Here head SHAs `84233c87` and `acfc8811` are independent.
3. **Single-file diff invariant across all three.** Every PR in the burst is `changedFiles=1`. Diff sizes vary by ~50× (483/-385 vs 10/-6 vs 65/-0) but the file-count axis is constant.
4. **Two surface families, not three.** Two PRs (#24360, #24362) are installer-script refactors; one PR (#24361) is a permission-rule-order regression test referencing issue/PR #24335. Surface heterogeneity is real but lower than synth #98's (which spanned dependency ecosystems).
5. **Pre-burst tight age cluster, not multi-day dispersion.** All three opened within 7m40s. Age at close-time: 2h30m34s, 2h23m10s, 2h22m50s — clustered to within 7m44s of each other. Synth #98's mass-close had multi-day age dispersion, identifying it as a stale-PR sweep; #105's tight age cluster identifies it as a **recent-cohort sweep**.

## Falsifiable claim for synth #105

**A triple-close micro-burst can be produced by ≥2 human authors (not a bot) on a single repo, against a single base branch, within a ≤4-second close window, where (a) the close ordering is the strict reverse of the open ordering, (b) at least one author contributes two of the three PRs, (c) every PR carries a single-file diff of arbitrary size, and (d) every PR terminates in CLOSED rather than MERGED.** The combined signal — reverse-LIFO + intra-burst author-doublet + single-file invariant — defines a class of close-burst distinct from bot mass-close (#98) and from author self-close-and-refile (#54, #104).

**Possible drivers (not asserted, listed for falsification):**
- (a) **Maintainer-script-sweep hypothesis** — a single maintainer running `gh pr close` against a list of PR numbers reverse-sorted by opened-at would produce reverse-LIFO ordering as a sort artifact; uniform 2-second close gaps are consistent with sequential CLI invocations.
- (b) **CI-cohort-rejection hypothesis** — three PRs sharing the same broken CI gate fail in the same CI run; the cohort gets closed in the order CI surfaces them (which is often opposite of opened-at).
- (c) **Cross-author coordination hypothesis** — `rudraksha-avatar` and `tiffanychum` coordinated to withdraw three PRs after a discussion converged on a different approach; reverse-LIFO is the natural ordering when the most-recent-opened PR is the easiest to abandon.

**Test:** synth #105 is falsified at N=2 if any other in-week instance of human-author triple-close micro-burst on a single repo (a) shows non-reverse close ordering, (b) lacks an intra-burst author-doublet, or (c) includes any merge in the burst.

## Distinguishing from existing synths

- **#98** (bot-driven sub-10s n=3 stale-PR mass-close across heterogeneous dependency surfaces with multi-day age dispersion) — #98's actor is a bot, surfaces are dependency bumps, ages span days. #105 is human-driven, working-code surfaces, ages cluster within 8 minutes. The two patterns share the n=3 close-burst structure but contradict on every other axis.
- **#54 / #104** (author self-close-and-refile pairs and pair-of-pairs) — those patterns require head-SHA reuse within author-paired PRs. #105's three PRs have three independent head SHAs and span two authors.
- **#82** (author-PR-cohort-deletion-in-LIFO) — *(if exists; checked against current synth list — no #82 with this title in `_weekly/`)* — distinct insofar as #105 is mixed-author, not single-author.
- **#90** (single-author overlapping doublet — second open precedes first self-merge) — terminal state diverges: #90 ends in self-merge, #105 ends in zero merges across three closes.

## Why this matters as a structural pattern

Reverse-LIFO close ordering is a **signature** that distinguishes maintainer-driven CLI sweeps from author-driven self-close. When the close ordering matches the strict reverse of the open ordering and the inter-close gaps are uniform (2s/2s here), the most parsimonious generator is a script iterating a list. When the close ordering is arbitrary or matches open ordering, the more likely generator is independent author decisions. Synth #105 thus provides a **bot-vs-script-vs-independent-decision discriminator** for n=3 close bursts that cannot be derived from synth #98 alone (which assumed bot identity from the actor's bot status, not from the structure of the burst).

The intra-burst author-doublet on adjacent surfaces also raises a **secondary hypothesis**: that mixed-author triple-close bursts may often contain an embedded same-author doublet, and that the doublet's surface (here installer scripts) is the most likely *true target* of the maintainer sweep, with the third PR (here #24361's permission test) being collateral cleanup. Falsifiable on next instance.
