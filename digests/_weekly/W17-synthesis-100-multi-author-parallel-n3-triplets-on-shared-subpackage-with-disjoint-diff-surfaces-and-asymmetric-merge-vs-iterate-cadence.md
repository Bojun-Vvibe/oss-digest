# W17 Synthesis #100 — Multi-author parallel N=3 triplets on a shared sub-package within a single calendar day, with non-overlapping diff surfaces and asymmetric merge-vs-iterate cadence

**Anchor window:** 2026-05-05T04:59:51Z → 10:22:39Z (5h22m48s).
**Anchor repo:** sst/opencode.
**Anchor sub-package:** the desktop family (`packages/opencode/desktop/*`, `packages/opencode/desktop-electron/*` consolidation, related main-process and IPC handler files).
**Anchor actors:** `Brendonovich` (Brendan Allan) and `Hona` (Luke Parker).
**Parent synths:** #91 (single-author triplet on disjoint surfaces), #94 (same-author same-product-surface diff-disjoint pair), #97 (same-author N=3 self-merge series with shared spec co-touch).

## Why this synthesis is distinct

Synths #91, #94, #97 all describe **single-author** structures. Whether the lens is disjoint-surface metronome (#91), nested same-surface diff-disjoint pair (#94), or shared-spec-anchor self-merge series (#97), in every case **one author** owns the multi-PR sequence and the cross-PR coupling lives inside that author's session.

Synth #100 captures a structurally novel object: **two distinct authors each independently produce an N=3 PR triplet on the same sub-package within the same calendar day, with non-overlapping diff surfaces, and with asymmetric author-level cadence regimes**. Neither triplet "extends" the other; they are **parallel** in the sense that each is a self-contained N=3 series owned by its author, while sharing the sub-package as a write target.

## The two parallel triplets

### Brendonovich's desktop-package triplet

| PR | Title | Opened | Resolution | Lifespan / state |
|---|---|---|---|---|
| [sst/opencode#25822] | refactor(desktop): consolidate desktop-electron into desktop package | 04:59:51Z | MERGED 05:43:36Z (`85db4961`) | 43m45s |
| [sst/opencode#25825] | fix(desktop): update main process | 05:44:39Z | MERGED 05:44:53Z (`6377531b`) | **14s** |
| [sst/opencode#25838] | fix(server): allow all connect-src origins in CSP for embedded UI | 08:28:01Z | MERGED 09:06:30Z (`068c093d`) | 38m29s |
| [sst/opencode#25850] | fix(desktop): add error handling to store-get IPC handler | 10:22:39Z | OPEN at window close (`d23a1edd`) | extension candidate |

Inter-PR-open gaps: 53m45s (→#25825), 2h43m07s (→#25838), 1h54m38s (→#25850). All three resolved members merge in <1h with declining lifespans (43m45s → 14s → 38m29s) — within the synth-#97 lifespan-contraction family but with one mid-series rebound.

### Hona's desktop-package triplet

| PR | Title | Opened | Resolution | Lifespan / state |
|---|---|---|---|---|
| [sst/opencode#25833] | fix(app): respect safe area in web shell | 06:43:54Z | OPEN at window close (`94aa4538`) | open |
| [sst/opencode#25837] | fix(desktop): trust system certificates | 08:19:02Z | MERGED 08:47:39Z (`3be8861a`) | 28m37s |
| [sst/opencode#25846] | fix(desktop): respect proxy environment | 09:55:03Z | OPEN, **silent force-push** at 10:16:47Z (`38745bba` → `8b918de5`) | iterating |

Inter-PR-open gaps: 1h35m08s (→#25837), 1h36m01s (→#25846) — **isochronous**, gap ≈ gap to within 53s (0.9% relative deviation). One merged member (28m37s lifespan, faster than any Brendonovich member except #25825), two open members, **only one of three resolved** — opposite asymmetry from Brendonovich's triplet.

## What "parallel" means here precisely

Both triplets share **all four** of these properties:
1. **Same sub-package** — every PR touches files under `packages/opencode/desktop/*` or directly affects the desktop runtime (CSP for embedded UI, system trust certs, IPC handlers, proxy env, safe-area, main-process update).
2. **N=3 within a 5h22m window** — both authors hit cardinality-3 inside the window's bounds, neither at N=2 or N=4.
3. **Disjoint diff surfaces** — Brendonovich works the consolidation/main-process/CSP/IPC-handler axis; Hona works the system-runtime-environment axis (safe-area, system trust, proxy env). No file overlap.
4. **No co-author signals** — each PR is single-authored, no Co-authored-by trailer cross-link, no comment cross-reference between Brendonovich's and Hona's PRs in the visible window.

But they **diverge** on **two structurally significant axes**:

(a) **Resolution asymmetry**: Brendonovich has 3-of-3 merged + 1 fresh extension candidate; Hona has 1-of-3 merged + 2 open (one iterating). Brendonovich's triplet is a **merge-train**; Hona's is a **branch-and-iterate**. Same surface, opposite throughput regime.

(b) **Inter-PR-open cadence regime**: Brendonovich's gaps span 53m45s → 2h43m07s → 1h54m38s — **non-monotonic**, large variance (σ/μ ≈ 0.55). Hona's gaps span 1h35m08s ≈ 1h36m01s — **isochronous**, near-zero variance. Two distinct authoring rhythms on the same surface.

## The structural object this defines

A **parallel triplet pair** on a shared sub-package is defined by:
1. Two authors A, B.
2. Each producing an N=3 PR triplet within a window W.
3. All 6 PRs target the same sub-package S.
4. No file-level diff overlap between A's PRs and B's PRs.
5. Resolution-asymmetry index `|merged(A)/3 - merged(B)/3| ≥ 1/3` (here: |3/3 - 1/3| = 2/3, well above threshold).
6. Cadence-regime divergence: σ/μ of A's inter-PR-gaps differs from B's by ≥3× (here: 0.55 vs ≈0.005, factor ~110×).

## Risk lens

- **Surface contention is latent**: zero file-level diff overlap right now, but the same sub-package (desktop runtime) is being heavily edited by two authors in parallel. If a third author opens a desktop PR or if either author's open members (#25833, #25846, #25850) start touching files Brendonovich already merged (or vice versa), rebase conflicts become likely. Detector should track sub-package write-rate per author and flag when the joint write-rate exceeds a single-author historical maximum.
- **Reviewer fatigue asymmetry**: 7 desktop PRs in 5h22m by 2 authors is well above the W17 desktop baseline. Reviewers who expect a quiet sub-package will be over-loaded; reviewers who set up subscriptions on `desktop/*` paths get hit by both streams simultaneously. PR-routing automation may misroute Hona's open members if it assumes the recent merge cadence (Brendonovich's) is the per-sub-package norm.
- **Release-coupling**: if a release cut happens mid-window (between #25825 and #25838, say), only Brendonovich's first two members make the cut and Hona's surface contributions land in the next train. The desktop-package release notes will be **author-imbalanced** for that cut, which can mis-attribute change momentum. Worth flagging if the release-tagger uses author-set as a proxy for change-set scope.

## Falsifiable predictions

1. If a third author opens a desktop-package PR within the next 6 hours, the parallel-triplet generalizes to a **parallel-N-author rollout** rather than a 2-author coincidence. Prior 0.20 (mirror of P-350.N).
2. If Hona's #25846 receives a second silent force-push within 12m of its first (analogue to ben-wangz litellm #27176 W17-min 11m52s sub-mode-4 compound iteration), Hona's branch-and-iterate regime contracts toward Brendonovich's merge-train regime. Prior 0.30.
3. If Brendonovich's #25850 merges in <1h, the merge-train regime extends to 4-of-4 and the resolution-asymmetry index widens to 1.0 (3/3 → 4/4 vs Hona's 1/3 → 1/3). Prior 0.65.
4. If the next desktop-package PR (post-window) by **either** author touches a file that one of the **other** author's prior 3 PRs touched, the disjoint-diff property fails and the parallel-triplet pair becomes a **collision-prone cluster** that should be retroactively reframed under a future synth. Prior 0.35.

## Distinctness from prior synths

- **vs synth #91** (single-author triplet self-merge metronome on disjoint surfaces): #91 is **single-author**; #100 is **two-author**. Each individual triplet here partially fits #91 (Brendonovich's matches the merge-metronome better; Hona's matches the disjoint-surfaces idea but fails the merge-cadence idea), but the **pair** as an object is structurally novel.
- **vs synth #94** (same-author same-product-surface diff-disjoint back-to-back-merge pair nested in multi-author merge wave): #94 is N=2 same-author nested-in-wave; #100 is N=3+N=3 two-author parallel, no nesting relationship between the triplets.
- **vs synth #97** (same-author N=3 self-merge series with shared spec-file co-touch and monotonically contracting lifespans): Brendonovich's triplet alone is *almost* a #97 instance but lacks a single shared anchor file across all three (the consolidation in #25822 affects different paths than the CSP in #25838 and the main-process update in #25825). Hona's triplet only has 1 merged member, failing #97's self-merge series predicate.
- **vs synth #99** (same-author shared-spec-anchor self-merge series extension past the original triple): #99 is single-author extending past N=3; #100 is multi-author at N=3+N=3 without extension. The Brendonovich #25850 fresh-open is a candidate for a #99-style extension event, but only on Brendonovich's own triplet — Hona's third member #25846 is iterating not extending.

## Detector heuristic

To detect parallel triplets in real time:
1. Group fresh-opens within a 6-hour rolling window by `(author, top-level-sub-package)`.
2. Flag when **two distinct authors** both reach `count ≥ 3` for the **same sub-package** within the window.
3. Compute file-set intersection across the 6 PRs; if intersection is empty, the parallel-triplet pair predicate holds.
4. Compute resolution-asymmetry index and cadence-regime divergence as defined above; report both as the structural fingerprint.
5. If any two PRs (one from each author) acquire overlapping file-sets after open (via force-push), demote to "collision-prone cluster" and emit a higher-severity alert.
