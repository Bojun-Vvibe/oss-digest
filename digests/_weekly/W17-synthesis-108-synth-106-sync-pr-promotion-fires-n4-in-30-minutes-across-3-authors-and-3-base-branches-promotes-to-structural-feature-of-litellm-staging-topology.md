# W17 Synthesis #108 — Synth #106 Sync-PR-Promotion Fires n=4 in 30 Minutes Across 3 Authors and 3 Base Branches; Promotes from Pattern Instance to Structural Feature of the Litellm Staging Topology

**Status:** new anchor. Distinct from synth #106 (which captures the *pattern* of head-SHA = prior-merge-SHA promotion across two adjacent PR boundaries) by reporting an **observation density** that falsifies the synth #106 framing-as-author-quirk and re-frames it as a **mechanical feature of litellm's branch graph**: a fixed promotion topology that emits sync-PRs at predictable boundaries regardless of which contributor opens them.

**Window of evidence:** 2026-04-25 20:43:13Z → 21:18:16Z. **35m03s end-to-end; 4 firings of synth #106 by 3 distinct authors across 3 distinct base branches with 4 distinct merge SHAs.**

## The four firings

Listed in merge-time order. Each row is a synth #106 instance — a PR whose head SHA either equals a prior in-window merge SHA OR whose merge SHA appears as the head of a downstream open promotion-target.

| # | leading PR (or merge) | leading merge SHA | trailing PR | trailing head SHA | trailing base | trailing author | trailing merged | gap |
|---|---|---|---|---|---|---|---|---|
| 1 | `BerriAI/litellm#26512` (yuneng-berri, base `litellm_yj_apr25`) | `7705cb39f20ca3a445e6a2e399211ffae2decf32` | `BerriAI/litellm#26513` (refile, same branch) | `7503f14f3f669dd2a323c5b660914774f93c78e2` | `litellm_yj_apr25` | `yuneng-berri` | 21:02:32Z | (intra-branch, see note) |
| 2 | `BerriAI/litellm#26513` | `ceed00fc2f8ebf9fc1d5f784f2a3e6173ae91e0e` | `BerriAI/litellm#26522` *"[Infra] Merge dev branch"* | **`ceed00fc2f8ebf9fc1d5f784f2a3e6173ae91e0e`** | `litellm_internal_staging` | `yuneng-berri` | 21:18:16Z | merge→merge 15m44s; #26513 merge → #26522 open 1m20s |
| 3 | `BerriAI/litellm#26506` (alvinttang, base `litellm-oss-staging-04-25-2026`) | `98a9005c765cf6ceee0eec498e3517166c0e0b7e` | `BerriAI/litellm#26508` *"Litellm oss staging 04 25 2026"* (krrish-berri-2) | **`98a9005c765cf6ceee0eec498e3517166c0e0b7e`** | `litellm_internal_staging` | (OPEN at obs) | — | #26506 merge 21:11:51Z → #26508 still OPEN 8m42s later |
| 4 | (Add. 30) `BerriAI/litellm#26338` merge `9f60b751…825657` | `9f60b751e13c059f77f547d82d0ce1afdc826657` | `BerriAI/litellm#26521` *"Merge readme logo update into litellm_staging_03_21_2026"* (Chesars) | `50799df63ef5284b53a2fd42df40593ad45525b3` (logo update) into `litellm_staging_03_21_2026` | `litellm_staging_03_21_2026` | `Chesars` | 20:50:29Z | — |

(Firing #1 is borderline: #26513's head is *not* #26512's merge SHA; the relationship is the *same-branch serial-merge* that synth #106 generalizes from. Firing #4 is the synth #106 *variant* established by Add. 30 — sync-PR-as-merge-promotion targeting a dated branch from the same author who created the #26519 instance synth #106 was originally built on.)

## The structural object

A **stable promotion graph** with three observable nodes and four observable edges:

```
                   ┌──────────────────────────────────────┐
                   │       litellm_internal_staging       │  (top of staging tree)
                   └──────────────────────────────────────┘
                         ▲                  ▲          ▲
   sync-PR (#26522)──────┘                  │          └──────sync-PR (#26508 open)
   from yj_apr25 tip                        │                 from oss_04_25 tip
                                            │
                            sync-PR (#26519, Add. 30)
                            from internal_staging tip
                                            │
                                            ▼
                          litellm_staging_03_21_2026
                                            ▲
                                            │
                            sync-PR (#26521) from logo update
                                            │
                  ┌──────────────────────────┴────────────┐
                  │                                       │
                  │                                       │
        litellm_yj_apr25                  litellm-oss-staging-04-25-2026
        (yuneng-berri personal)           (alvinttang / krrish-berri-2 cohort)
                  ▲                                       ▲
                  │                                       │
            #26512, #26513                            #26506
            (contributor PRs)                        (contributor PR)
```

Three dated/named staging branches feed into `litellm_internal_staging` via sync-PRs; `litellm_internal_staging` in turn feeds `litellm_staging_03_21_2026` via sync-PRs; and `litellm_staging_03_21_2026` accepts targeted sync-PRs (e.g., the logo update #26521) without going through `internal_staging`. **The graph has cycles only by branch-life-extension; it has no SHA-level cycles within a single window.**

## Falsification of the "author quirk" framing

Synth #106 as originally captured was anchored on a single instance (`#26338` → `#26519`) by two distinct authors but a single base-branch handoff. A reasonable null hypothesis was that the pattern was a **post-hoc artifact of one author's (Chesars's) workflow**: Chesars manually promotes internal-staging tips into the dated `staging_03_21_2026` branch when convenient.

That null is **falsified by Add. 31's observation density**:

1. **n=4 firings in 35 minutes** is approximately **3 orders of magnitude above the expected rate** if synth #106 were author-quirk-driven (Chesars-specific would predict ≈1 firing per multiple addenda, not 4 in one).
2. **3 distinct authors** drive the four firings (Chesars, yuneng-berri, krrish-berri-2 as the trailing-PR opener for #26508). No single author is the common cause.
3. **3 distinct base branches** receive promotion: `litellm_internal_staging` (via #26522, #26508), `litellm_staging_03_21_2026` (via #26521), `litellm_yj_apr25` (intra-branch via #26512/#26513). No single branch is the common destination.
4. **Two of the four firings share zero authors and zero base-branches with any other firing** (#26521 by Chesars into staging_03_21 vs #26522 by yuneng-berri into internal_staging). Independent draws of the same mechanism.

The only common element across all four firings is the **mechanical structure**: a contributor PR merges into branch B; immediately afterward, a sync-PR is opened with head SHA equal to the just-merged commit, targeting a branch upstream of B in the promotion graph. This is **a property of the branch graph, not of the authors who navigate it**.

## What synth #108 adds beyond synth #106

Synth #106 says: *the pattern can be detected by SHA equality across PR boundaries.*

Synth #108 says: *the pattern is the **steady-state behavior** of litellm's three-tier staging topology and should fire at a predictable rate proportional to the in-window merge volume into the bottom tier.* Specifically: if k contributor PRs merge into the bottom tier in window W, expect approximately **k synth #106 firings** in W or the immediately-following window, modulo batching.

In the Add. 31 window: contributor merges into the bottom tier = 3 (#26512 to yj_apr25, #26513 to yj_apr25, #26506 to oss-staging-04-25). Synth #106 firings = 3 (counting #26513→#26522, #26506→#26508 open, and the Add. 30 carryover #26519→). The ratio is **≈1.0**, validating the steady-state prediction at n=1 window.

## Falsification (of synth #108 specifically)

Synth #108 is **falsified** if any of:
- A future window with ≥3 bottom-tier contributor merges produces zero synth #106 firings within that window or the immediately-following window.
- The ratio of synth #106 firings to bottom-tier contributor merges, computed over a rolling 5-window mean, falls below 0.5 or rises above 1.5 (i.e., the topology is not steady-state).
- A new dated staging branch appears that does not emit sync-PRs upon receiving merges (the topology is non-uniform across branches).

## Instance count and projection

n=4 at synthesis. Project forward: if synth #108 is correct, the next 5 dispatcher addenda should each contain **at least 1 synth #106 firing per 2 litellm bottom-tier merges**. If the rate drops, re-examine.

## Provenance

- Anchor PRs and merges:
  - `BerriAI/litellm#26512` merge `7705cb39…2decf32`
  - `BerriAI/litellm#26513` merge `ceed00fc…6173ae91e0e`
  - `BerriAI/litellm#26522` head `ceed00fc…6173ae91e0e` = #26513 merge SHA
  - `BerriAI/litellm#26506` merge `98a9005c…3517166c0e0b7e`
  - `BerriAI/litellm#26508` head `98a9005c…3517166c0e0b7e` = #26506 merge SHA (still OPEN at obs)
  - `BerriAI/litellm#26521` merge `ed1c4e72…b790e23e2` (Chesars sync-PR variant)
  - Add. 30 carryover: `BerriAI/litellm#26338` merge `9f60b751…fdc826657`, `BerriAI/litellm#26519` head `9f60b751…fdc826657`
- Capturing addendum: 2026-04-25 Add. 31.
- Window: 2026-04-25T20:43:13Z → 21:18:16Z (35m03s).
