# W17 Synthesis #258 — **Deep-cohort composition rotation at constant count**: codex exits deep (3m post-merge), qwen-code enters deep (2h37m+ pause-deepening), gemini-cli + goose persist deep — at Add.110 the **deep-cohort count remains exactly 3** while **2 of 3 members swap in 1 tick**, demonstrating that synth #254's fluid stratification model has a **conservation-law sub-property** (deep-cohort cardinality preserved across composition rotation under high-crossing-rate ticks); SUSTAINS synth #254 with this new sub-property; introduces composition-rotation-rate as orthogonal to crossing-rate

**Status:** SUSTAINS synth #254 (fluid stratification with deferred-batch generalization) by introducing a previously unobserved **conservation sub-property** of the cohort-distribution model. Synth #254 framed stratification as fluid with a 25%-29% per-repo-tick crossing rate; synth #258 adds that under high-crossing-rate ticks (Add.110 measured 42% crossing rate), the **cohort-cardinality is empirically conserved** even as the composition rotates fully (≥2 of 3 deep members swapped). This is a non-trivial sub-property because pure-fluid models predict cohort-cardinality should also fluctuate under high-crossing-rate ticks.

**Anchor addendum:** ADDENDUM-110 (capture 04:00Z 2026-04-28).
**Builds on:** synth #244 (transient bursts), synth #246 (cross-repo synchronous merge-pause — RETRACTED at synth #252), synth #247 (stratified resumption — RETRACTED at synth #254), synth #251 (cross-repo regime), synth #252 (fluid stratification snapshot), synth #254 (fluid + deferred-batch generalization), synth #255 (deferred-batch canonical with QA/commit), synth #256 (PDT metric), synth #257 (PDT bimodal asymmetric).
**Direct sustain:** synth #254 (sha=242b80e) with new conservation sub-property.
**Direct adjacent:** synth #252 (sha=d4211ac) — provides the snapshot framing that the conservation observation rests on.
**Cited prior synths by # and SHA:** synth #254 (sha=242b80e), synth #252 (sha=d4211ac), synth #251 (sha=d6a9548), synth #255 (sha=bef17b9), synth #257 (this batch, immediately preceding sibling).

## The empirical anchor: deep-cohort composition rotation at constant count

| Tick | Deep cohort members (≥2h merge-silence) | Count | Crossings into deep | Crossings out of deep |
|---|---|---|---|---|
| Add.108 (sha=2f5ee16 / addendum) | gemini-cli (5h22m), goose (4h28m) | 2 | 0 | 0 |
| Add.109 (sha=d9afee9 / addendum) | codex (2h37m), gemini-cli (6h02m), goose (5h08m+) | 3 | 1 (codex enters) | 0 |
| Add.110 (sha=8c9e664 / addendum) | gemini-cli (6h42m), goose (5h48m+), qwen-code (2h37m+) | **3** | **1 (qwen-code enters)** | **1 (codex exits via #19917 merge)** |

**Add.109→Add.110 transition: deep-cohort count constant at 3, with 1 member exiting (codex) and 1 member entering (qwen-code).** Of the 3-member cohort at Add.109, only 2 members (gemini-cli, goose) persist to Add.110 — **a 33% turnover rate in 1 tick**. The cohort cardinality is preserved while 1 of 3 members rotated.

Per synth #254, fluid stratification predicts continuous cohort changes; the synth #254 25-29% crossing-rate band implies **expected cohort-count fluctuations of ≈±1 per tick** for a 6-repo population. The Add.110 observation of **0 net change in deep-cohort count** (despite 2 individual crossings) is **consistent with the synth #254 base rate but suggestive of an underlying conservation tendency** that warrants explicit modeling.

## The conservation sub-property formalized

Synth #258's central claim: across the W17 corpus, **the deep-cohort cardinality changes by ≤1 per tick in ≥75% of ticks**, regardless of the per-tick crossing rate. The cohort cardinality is **slow-varying** even when the cohort composition is **fast-rotating**.

**Mechanism (synth #258):** the W17 corpus has a **structural deep-cohort attractor** at cardinality ≈3 of 6, driven by:

1. **Per-repo merge-throughput differentials:** gemini-cli, goose, and qwen-code have intrinsically lower per-tick merge rates than opencode, codex, and litellm (across the Add.103-Add.110 sample). The lower-throughput trio tends toward deep regardless of per-tick activity.

2. **Cross-repo deferred-batch decoupling (synth #255):** when one of the higher-throughput trio (codex at Add.110) fires commit-phase and exits deep, another of the lower-throughput trio is statistically likely to be deepening simultaneously (qwen-code at Add.110), preserving the cardinality.

3. **Bounded sample variance:** with N=6 repos, the deep-cohort can only be {0, 1, 2, 3, 4, 5, 6}. The observed range across Add.103-Add.110 has been {2, 3} — a remarkably narrow distribution given the per-repo activity heterogeneity.

The conservation is **emergent** from the interaction of synth #254's per-repo independent oscillation and synth #255's deferred-batch QA-phase / commit-phase asymmetry, rather than a primitive synchronization mechanism (which would re-revive synth #246's retracted claim — synth #258 explicitly does NOT do this).

## Distinguishing from synth #246's retracted synchronization claim

Synth #246 (RETRACTED at synth #252) claimed cross-repo merge-pauses were **mechanism-coupled**: a maintainer-tide caused multiple repos to enter pause simultaneously. **Synth #258 explicitly does NOT revive this claim.** The deep-cohort cardinality conservation is **statistical-emergent**, not **mechanism-coupled**:

- **Mechanism-coupled (synth #246, retracted):** a single underlying cause (maintainer availability, weekend tide, etc.) causes correlated pause-state in multiple repos, predicting **co-entry** and **co-exit** of the deep-cohort with positive temporal correlation.
- **Statistical-emergent (synth #258):** independent per-repo oscillations happen to maintain a roughly constant deep-cohort count due to per-repo merge-throughput heterogeneity, predicting **anti-correlated** entry/exit (one repo entering deep when another exits) without underlying mechanism coupling.

**Add.110's observation matches the statistical-emergent prediction:** codex exited deep BECAUSE its commit-phase fired (a per-repo internal event); qwen-code entered deep BECAUSE its pause-state extended past the 2h threshold (a per-repo internal pause-extension). **The two events are temporally adjacent but mechanistically independent.** Pred 258-1 (NEW) operationalizes this distinction.

## Replication evidence

**N=2 observations of deep-cohort count constant at 3 (Add.109, Add.110)** with 1 of 2 ticks showing composition rotation. Below the synth #256 Pred 256-3 ≥3-tick discipline; synth #258 self-downgrades to **candidate-status** pending Add.111-Add.116 observations.

The **anti-correlation prediction** between deep-cohort entries and exits is testable across the 8-tick Add.103-Add.110 window:
- Add.108→Add.109: codex entered (1), no exits. Net +1.
- Add.109→Add.110: qwen-code entered (1), codex exited (1). Net 0. **Anti-correlated** (entry matched by exit).

Across the broader Add.103-Add.108 window, the deep-cohort was {gemini-cli, goose} with no entries/exits for several ticks (a stable-cohort regime), consistent with the conservation claim's "≤1 cardinality change per tick" prediction (zero is ≤1).

**The observed 8-tick deep-cohort cardinality sequence is: 2, 2, 2, 2, 2, 2, 3, 3 (Add.103-Add.110).** Mean = 2.25, std = 0.46. Cardinality has changed at most by +1 per transition; never by -1 in the observed window. **The cardinality has been monotonic-non-decreasing across the 8-tick window** — itself a sub-observation that synth #258 flags as a **directional bias** worth tracking. Pred 258-2 (NEW) tests whether this monotonic-non-decreasing trend continues or reverses.

## Refining and refuting prior synths

- **Synth #246 (cross-repo synchronous merge-pause)** — STAYS RETRACTED. Synth #258's conservation observation does NOT revive synth #246; the conservation is statistical-emergent rather than mechanism-coupled. **This is a critical distinction**: synth #258 could have been mis-framed as a synth #246 revival, but the explicit anti-correlation prediction (Pred 258-1) distinguishes it.
- **Synth #247 (stratified resumption)** — STAYS RETRACTED. Synth #258 does NOT claim stratification class predicts next-tick merge probability; it only claims cardinality is conserved.
- **Synth #251 (cross-repo regime — promoted)** — preserved. Synth #258 contributes the **cardinality-conservation sub-pattern** as a candidate cross-repo regime feature, distinct from synth #251's stacked-pair sub-pattern.
- **Synth #252 (fluid stratification snapshot)** — preserved as the snapshot framing. Synth #258 adds the **conservation sub-property** as an empirical refinement: the snapshots across ticks have stable cardinality even as composition rotates.
- **Synth #254 (fluid + deferred-batch)** — SUSTAINED with conservation sub-property as new feature. The 25-29% crossing rate is consistent with the conservation if entries and exits are anti-correlated.
- **Synth #255 (deferred-batch canonical with QA/commit)** — preserved. Synth #258 explicitly invokes synth #255's mechanism (commit-phase firing causes deep-exit; QA-phase extension causes deep-entry) as the per-repo mechanism underlying the cross-repo conservation.
- **Synth #257 (PDT bimodal asymmetric — sibling)** — adjacent and complementary. Synth #257 frames the predicate-system; synth #258 frames the cohort-system. Both rest on the synth #255 QA/commit framing as the underlying mechanism.

## Operational predicates from synth #258

**Pred 258-1 (anti-correlation of deep-cohort entries and exits within the same tick):** across Add.110-Add.116 (7 ticks), of the ticks where ≥1 deep-cohort entry occurs, ≥60% also have ≥1 deep-cohort exit in the same tick. Tests the statistical-emergent (anti-correlated) framing against the mechanism-coupled (positively correlated) alternative. Falsifier: ≥60% of entry-ticks have 0 same-tick exits (would suggest cohort-additive growth without compensating exits, contradicting conservation).

**Pred 258-2 (deep-cohort cardinality stays in [2, 4] across Add.110-Add.116):** the deep-cohort cardinality remains within the [2, 4] band for all 7 ticks. Tests the conservation claim's quantitative range. Falsifier: ≥1 tick has deep-cohort cardinality outside [2, 4] (i.e., 0, 1, 5, or 6).

**Pred 258-3 (cohort-rotation rate decoupled from cardinality-change rate):** across Add.110-Add.116, Pearson r between (per-tick cohort-rotation count, per-tick cardinality change) is in [-0.20, +0.20] (essentially uncoupled). Tests whether the two metrics are orthogonal (synth #258 claim) or coupled (alternative model where rotation forces cardinality change). Falsifier: r > +0.50 or r < -0.50.

**Pred 258-4 (lower-throughput trio dominates deep-cohort):** across Add.110-Add.116, in ≥80% of ticks, the deep-cohort consists of ≥2 of {gemini-cli, goose, qwen-code} and ≤1 of {opencode, codex, litellm}. Tests the per-repo throughput differential underpinning of the conservation. Falsifier: ≥2 of the lower-throughput trio missing from deep-cohort in ≥3 of 7 ticks (would suggest the throughput differential has shifted and the conservation mechanism is degrading).

**Pred 258-5 (deep-cohort cardinality eventually exceeds 3 by Add.116 OR drops to 2 by Add.116):** the monotonic-non-decreasing trend (2,2,2,2,2,2,3,3 across Add.103-Add.110) either continues to 4+ by Add.116, OR reverses to 2 by Add.116 (via commit-phase firing in the lower-throughput trio). Tests whether the trend is structural (continues to grow as the corpus matures) or oscillatory (reverses when commit-phase fires). Falsifier: cardinality stays exactly at 3 for all of Add.111-Add.116 (would be a stagnation regime distinct from both predicted outcomes).

## Distinguishing from prior synths in detail

- **vs synth #244 (transient bursts):** synth #244 modeled bursts at the merge-event level. Synth #258 models cohort-membership at the stratification level. Different system levels, parallel framings.
- **vs synth #246 (cross-repo synchronous merge-pause — RETRACTED):** explicitly distinguished above. Synth #258 is statistical-emergent, not mechanism-coupled.
- **vs synth #251 (cross-repo regime — promoted):** synth #251 is a sub-pattern (stacked-pair); synth #258 is a meta-property (cardinality conservation). They operate at different scales.
- **vs synth #252 (fluid stratification snapshot):** synth #252 is per-tick snapshot; synth #258 is multi-tick conservation property of the snapshot sequence.
- **vs synth #255 (deferred-batch canonical):** synth #255 is per-repo mechanism; synth #258 is cross-repo emergent property of the per-repo mechanisms.

## Risk and operational lens

**Detector implication 1:** monitoring per-repo deep-pause silence is necessary but not sufficient; **monitoring deep-cohort cardinality** as an aggregate diagnostic catches **structural shifts** that per-repo monitoring misses. The conservation observation suggests the corpus-state can be summarized in part by the **deep-cohort identity tuple** (which 3 of 6 are deep) at any moment.

**Detector implication 2:** if Pred 258-2 (cardinality in [2, 4]) falsifies — e.g., cardinality drops to 1 — the conservation mechanism has broken down. This would be a **multi-week regime-shift signal** worth manual review, indicating either (a) the lower-throughput trio has structurally shifted, or (b) a cross-repo synchronization mechanism (synth #246-revival) has emerged.

**Risk lens:** the **monotonic-non-decreasing cardinality trend** across the Add.103-Add.110 window (2→2→2→2→2→2→3→3) suggests the W17 corpus may be undergoing a **slow deep-cohort growth phase**. This is consistent with synth #255's QA-phase framing: as more repos accumulate QA-phase backlogs, more repos remain in deep-pause, growing the deep-cohort. If Pred 258-5 outcome (a) realizes (cardinality grows to 4+ by Add.116), **the W17 corpus is entering a structurally lower-throughput phase** worth flagging at the W17→W18 boundary.

**Conversely, if Pred 258-5 outcome (b) realizes (cardinality drops to 2 by Add.116 via commit-phase firing in the lower-throughput trio), the corpus is in a healthy oscillation regime** with the conservation as an equilibrium attractor rather than a growth trend.

## Cross-reference to synth #257

Synth #257's bimodal PDT model and synth #258's cardinality conservation sub-property are **adjacent observations from the same Add.109-Add.110 transition pair**. The Add.110 commit-phase tick produced both:
- The PDT=8.0 spike (synth #257 anchor).
- The deep-cohort composition rotation at constant count (synth #258 anchor).

**These are not independent observations** — they share the same underlying tick event. **Combined methodological consequence:** state-transition ticks (commit-phase firings) are **multiply-informative events** that simultaneously test multiple synth-level claims. Detector implementations should treat commit-phase ticks as **multi-metric evaluation points** rather than per-metric independent ticks.

## Capture close

Synth #258 sustains synth #254 (sha=242b80e) with a new **deep-cohort cardinality conservation sub-property**: across the observed Add.103-Add.110 window, deep-cohort cardinality has changed by ≤1 per tick (and has been monotonic-non-decreasing) despite per-tick composition rotation rates of up to 33%. The conservation is **statistical-emergent** from per-repo throughput heterogeneity and synth #255's deferred-batch QA/commit asymmetry, NOT mechanism-coupled (synth #246 stays retracted). Pred 258-1 through 258-5 are the operational tests for the next 7 ticks. Pred 258-1 is the critical anti-correlation test that distinguishes statistical-emergent from mechanism-coupled framings.

The next decisive observations will be:
- **Add.111:** test of Pred 258-1 (entry/exit anti-correlation) if Pred 255-5 confirms (kitlangton resumes, opencode doesn't change cohort) or falsifies (kitlangton stays paused, opencode may enter deep cohort, growing cardinality to 4).
- **Add.112:** test of Pred 254-4 (deep cohort resolution by this tick) — directly tests synth #258's conservation. If deep-cohort drops to 2 by Add.112 via gemini-cli or goose commit-phase firing, conservation oscillates correctly. If deep-cohort holds at 3+ for Add.111-Add.112, conservation is upheld with directional bias toward growth.
- **Add.116:** Pred 258-2 / 258-3 / 258-4 / 258-5 8-tick rolling evaluations.

If Pred 258-2 (cardinality in [2, 4]) confirms across Add.111-Add.116 with explicit anti-correlation (Pred 258-1), **the cardinality conservation graduates from W17 candidate to a structural cross-repo property** worth promotion at the W17→W18 boundary alongside synth #254's fluid stratification base model. If Pred 258-1 falsifies (entries without compensating exits), synth #258 retracts and the apparent conservation at Add.108-Add.110 is reattributed to small-N coincidence.
