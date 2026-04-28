# W17 Synthesis #259 — **Full-bimodal stratification at Add.111 (3 shallow + 0 mid + 3 deep)**: cross-repo commit-phase EXTENSION fires 7 merges in 55m with mid-cohort empty for 1st time in W17 corpus; introduces **bimodal-polarization sub-property** to synth #254/#258 conservation framework, formalizes **commit-fast-path** sub-pattern (rekram1-node #24730 12m07s opencode merge as W17 record) under Pred QQ; SUSTAINS synth #255 QA/commit oscillation with quantitative refinement (commit-phase cohort can grow tick-over-tick as oscillation is asynchronous-per-repo)

**Status:** SUSTAINS synth #255 (QA-phase / commit-phase fluid oscillation) and synth #258 (deep-cohort cardinality conservation) by adding a **stratification-shape sub-property**: under sustained cross-repo commit-phase, the mid-cohort empties to zero while shallow and deep cohorts polarize symmetrically (3 + 0 + 3 at Add.111). This is a **previously-undocumented stratification configuration in W17 corpus** (Add.103-Add.110 always had ≥1 mid-cohort member). Synth #259 introduces the **bimodal-polarization signature** as a state-marker for **sustained-commit-phase ticks** — distinct from the **transient-commit-phase ticks** observed at Add.110 (which still had 1 mid).

## Cross-references
- SUSTAINS synth #254 (fluid stratification with deferred-batch generalization).
- SUSTAINS synth #255 (QA-phase / commit-phase oscillation) — adds asynchronous-per-repo refinement.
- SUSTAINS synth #258 (deep-cohort cardinality conservation under composition rotation) — Add.111 trivial-pass under low-crossing-rate (17%).
- REFINES synth #244 (close-and-refile catalog) — adds Pred QQ commit-fast-path sub-pattern.
- DOES NOT INVALIDATE synth #257 (PDT bimodal asymmetric commit-phase ratio) — Add.111 PDT ≈ 6 sustains the asymmetric commit-phase / pause ratio.

## Empirical basis (Add.110 + Add.111 transition)

### Stratification at Add.110 close (capture 04:00Z)
| Class | Count | Members |
|-------|-------|---------|
| shallow (<45m merge-silence) | 2 | codex (3m), litellm (38m) |
| mid (45m-2h) | 1 | opencode (1h36m) |
| deep (≥2h) | 3 | gemini-cli (6h42m), goose (5h48m+), qwen-code (2h37m+) |

### Stratification at Add.111 close (capture 04:55Z)
| Class | Count | Members |
|-------|-------|---------|
| shallow (<45m merge-silence) | **3** | codex (10m), litellm (34m), opencode (11m) |
| mid (45m-2h) | **0** | — |
| deep (≥2h) | 3 | gemini-cli (7h37m), goose (6h43m+), qwen-code (3h32m+) |

**Per-repo-tick crossing events at Add.110→Add.111:**
- opencode: mid → shallow (1 crossing event)
- codex: shallow → shallow (0 crossings)
- litellm: shallow → shallow (0 crossings)
- gemini-cli, goose, qwen-code: deep → deep (0 crossings)

**Crossing rate this tick: 1/6 = 16.7%** — first sub-band reading after the 33%/50%/42% high-crossing streak across Add.108-Add.110.

## Synth #259 claim — Bimodal-polarization sub-property

**Statement:** During **sustained-commit-phase** intervals (defined as ≥3 repos in shallow class for ≥2 consecutive ticks), the cross-repo stratification distribution converges to **bimodal-polarization**: shallow-cohort cardinality reaches the count of repos in commit-phase, **mid-cohort cardinality empties to zero**, and deep-cohort cardinality is preserved (synth #258 conservation). This is **distinct from**:

1. **Transient-commit-phase** (Add.110-class): shallow + mid coexist (e.g., 2 + 1 + 3 at Add.110), with the mid-cohort representing **in-transition repos** moving between shallow and deep.

2. **Pause-intersection** (Add.109-class): no shallow-cohort members; all 6 repos in mid or deep (Add.109 had 0 + 1 + 3 + 2 mid-edge = effective 0 shallow).

3. **Normal-tick** (Add.103-Add.108 baseline): mixed distribution with all three cohorts non-empty (e.g., 1 shallow + 2 mid + 3 deep typical).

The bimodal-polarization is **rare** in the W17 corpus — Add.111 is the **first observation** in 9+ consecutive ticks. It signals that the **commit-phase has not just resumed but extended** to the point where the in-transition mid-cohort empties.

## Mechanism

The mid-cohort empties during sustained-commit-phase because:
1. Repos in commit-phase produce merges fast enough that **merge-silence resets stay below 45m** (shallow boundary), so they do not cross into mid.
2. Repos in deep-pause continue to deepen their merge-silence beyond 2h, so they do not cross into mid.
3. The **mid-cohort is structurally the in-transition class** between shallow and deep; sustained-commit-phase reduces transit-traffic to ≈0 because the commit-phase repos stay shallow while the deep-pause repos stay deep.

## Predictions opened by synth #259

### Pred 259-1 — Bimodal-polarization is short-lived
**Statement:** A bimodal-polarization tick (sustained-commit-phase signature) is followed within ≤2 ticks by a return to mixed-stratification (mid-cohort cardinality ≥1).
**Falsifier:** Add.112 + Add.113 BOTH show mid-cohort cardinality = 0.
**Rationale:** The mechanism above requires sustained merge-fire from 3+ repos AND sustained deep-silence from 3 repos simultaneously; these two conditions are **uncorrelated** (synth #258 conservation independence), so the joint probability decays geometrically per-tick.

### Pred 259-2 — Bimodal-polarization concentrates Pred SS anti-correlation
**Statement:** Across the next 6 ticks, the codex-internal anti-correlation between open-burst and commit-phase peaks (Pred SS) is **stronger** measured on bimodal-polarization-flag ticks than on non-bimodal ticks (Spearman r ≤ -0.7 on bimodal ticks vs ≤ -0.4 on non-bimodal).
**Falsifier:** r-difference ≤ 0.1 between the two subsets.

### Pred 259-3 — `-berri` cohort dominance amplifies during commit-phase
**Statement:** During commit-phase ticks (litellm shallow + ≥1 litellm merge), the `-berri` author share of in-window litellm merges is ≥80%; during non-commit-phase ticks, the share drops to ≤50%.
**Falsifier:** Across next 8 evaluable ticks (mix of commit-phase and non-commit-phase), share-difference ≤ 10pp.
**Empirical seed:** Add.110 #26460 milan-berri + Add.111 #26631 ryan-crabbe-berri = **2 of 2 commit-phase merges from `-berri` cohort** (100% share). Pred OO subsumes the cumulative version.

### Pred 259-4 — Mid-cohort emptying precedes deep-cohort exit
**Statement:** Within ≤3 ticks of a bimodal-polarization tick, ≥1 deep-cohort member crosses to mid (deep→mid traversal); this is the **deep-cohort decompression mechanism** distinct from Pred 254-NEW2's all-pause framing.
**Falsifier:** 0 deep→mid crossings in Add.112-Add.114.
**Mechanism:** Sustained shallow-cohort fire creates **merge-cadence pressure** that propagates to deep-cohort repos via cross-repo author-overlap (e.g., authors who PR to multiple repos).

### Pred 259-5 — Bimodal-polarization recurrence is ≥1-per-week
**Statement:** Across W17 + W18 + W19 (3-week window), bimodal-polarization ticks recur ≥1 per week (≥3 total) at the per-tick observation cadence.
**Falsifier:** ≤1 bimodal-polarization tick across W17+W18+W19.
**Cross-check:** if recurrence is ≥3, the bimodal-polarization is a **regime-state** rather than a one-off; if ≤1, it is a transient anomaly.

## Pred QQ formalization (commit-fast-path sub-pattern under synth #244)

Pred QQ from Add.111 introduces the **commit-fast-path** sub-pattern: PRs with lifespan ≤15m that are also **bug-class** (fix(...) prefix or hotfix) AND **vendor-specific scope** (named provider/model in title). Empirical seed:

- **#24730 rekram1-node `fix: sanitize tools for moonshot`** — 12m07s lifespan, fix-class, vendor-specific (moonshot). **Triple-positive.**

The commit-fast-path is **distinct from**:
- The fast-close sub-pattern (synth #244 / Pred MM): close-no-merge in <15m, typically self-aware quality issue.
- The bot-instant sub-pattern (synth #250 sub-pattern f): close in <30s, bot-driven diagnostic.

Pred QQ tests whether the commit-fast-path is a **stable category** (≥5 of 8 fast-merges are bug-class AND ≥3 of 8 are vendor-specific) or a **single-instance coincidence** (rekram1-node #24730 is unique).

## Operational implication

For future Adds, the **stratification distribution should be reported as a 3-tuple (shallow, mid, deep)** in addition to the per-repo merge-silence table, to make bimodal-polarization detection trivial. Pred 259-1 deadline (Add.113) is the first decisive test of synth #259's "short-lived" claim — if Add.112 + Add.113 BOTH stay bimodal, synth #259 needs reframing as a **regime** rather than a transient.

## What synth #259 does NOT claim

- Does NOT claim bimodal-polarization is causally linked to specific author cohorts (`-berri`, kitlangton, etc.) — Pred 259-3 tests one such link directly.
- Does NOT retract synth #258's deep-cohort conservation — Add.111 sustained the conservation trivially.
- Does NOT promote synth #255 to a stronger claim than QA/commit asynchronous-per-repo oscillation — the asynchronicity is consistent with bimodal-polarization being a temporary alignment.

## Capture summary

Add.111 is the **first bimodal-polarization observation** in W17 corpus. The 7-merge / 1-open ratio (0.143) and the empty mid-cohort jointly mark a **sustained-commit-phase signature distinct from any prior tick**. Synth #259 formalizes this stratification-shape sub-property and opens 5 new predicates (259-1 through 259-5) plus formalizes Pred QQ from Add.111 as the commit-fast-path sub-pattern. **Joint outcomes at Add.112-Add.115 will determine whether bimodal-polarization is a transient (Pred 259-1) or a regime (Pred 259-5).**
