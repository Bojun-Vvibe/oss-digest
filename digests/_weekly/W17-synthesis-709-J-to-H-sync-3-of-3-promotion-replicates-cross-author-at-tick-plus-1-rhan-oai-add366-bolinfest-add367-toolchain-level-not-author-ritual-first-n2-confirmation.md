# W17 Synthesis #709 — J→H_sync_3-of-3 promotion replicates cross-author at tick+1: rhan-oai (Add.366, codex) → bolinfest (Add.367, codex) — pattern is toolchain-level, not author-ritual; first n=2 confirmation of synchronized wholesale stack-mutation as a structural class

**Anchor window**: 2026-05-05T22:17:31Z (rhan-oai sync force-push, Add.366) → 2026-05-05T23:07:17Z (bolinfest sync force-push, Add.367). **Inter-event spacing: 49m46s.**
**Anchor signal**: For the **second consecutive tick**, an entire frozen J-stack on codex undergoes **wholesale head-SHA mutation synchronized to the second** — this time on a **different author** (bolinfest, not rhan-oai), targeting a **different surface** (linux-sandbox/release/npm bundling vs image gen / thread paging / deferred image reads). The J→H_sync_3-of-3 pattern has now been observed **n=2 times** in W18 day-1, both on codex.

## The two J→H_sync_3-of-3 events side-by-side

| field | rhan-oai (Add.366) | bolinfest (Add.367) |
|---|---|---|
| author | rhan-oai (anonymous OpenAI handle) | bolinfest (Michael Bolin, named OpenAI handle) |
| carrier | openai/codex | openai/codex |
| triplet PR numbers | [#21236](https://github.com/openai/codex/pull/21236), [#21237](https://github.com/openai/codex/pull/21237), [#21238](https://github.com/openai/codex/pull/21238) | [#21255](https://github.com/openai/codex/pull/21255), [#21256](https://github.com/openai/codex/pull/21256), [#21257](https://github.com/openai/codex/pull/21257) |
| original open timestamps | 20:45:56Z, 20:45:58Z, 20:46:00Z (Δ=2s/PR) | 22:21:01Z, 22:21:03Z, 22:21:04Z (Δ=1.5s/PR) |
| sync force-push timestamp | 22:17:31Z (all 3 within 1s) | 23:07:16Z–23:07:17Z (all 3 within 1s) |
| time-from-open to sync-push | ~1h31m | ~46m13s |
| original head SHA #1 | `0df79765538a` (#21238 — note synth-708 anomaly) | `34778320018b` (#21255) |
| post-sync head SHA #1 | `c8670a11854f` | `1a8cae26af76e0cc6ea88581cb173e4753045845` |
| substrate noun pattern | image-gen / thread-paging / deferred-reads (3 disjoint) | linux-sandbox / release / npm (3 disjoint, build-stack) |

**Critical structural identity**: both events feature **3 PRs on disjoint codex sub-surfaces** opened within ≤4 wall-clock seconds, then **all 3 head SHAs mutate within 1 wall-clock second** of each other after a ~46m–91m delay. The synchronization-to-the-second is the discriminator for **scripted batch operation** (likely `git push origin pr1 pr2 pr3` semantics from a stack-tooling like `git-spice`, `graphite`, or codex's internal stack helper).

## Why the n=2 confirmation matters

At W17-synth-708 (1 instance, rhan-oai only), the J→H_sync_3-of-3 hypothesis had two competing interpretations:

- **H1 (toolchain-level)**: any codex contributor using the same stack-tooling will produce this pattern. The sync-to-the-second is a **toolchain artifact**, not a **personal habit**.
- **H2 (author-ritual)**: rhan-oai personally batches stack-rebases. Other codex authors with stack-PRs would force-push **non-synchronously**, even if they stack their PRs identically.

The bolinfest replication at Add.367 **falsifies H2**: bolinfest is a **distinct author** (real name on the GitHub profile vs anonymized `*-oai` handle for rhan), with different prior-tick rhythm (bolinfest had 6 PRs across the day with mixed cadences, vs rhan-oai's single concentrated triplet), yet produces **the same sub-second sync signature** on the same carrier. **H1 (toolchain-level) is now confirmed at n=2**.

## Predicted toolchain mechanism

Concrete candidates for the underlying tool, in decreasing prior probability:

1. **`graphite` (gt) `gt submit --stack`**: Graphite's standard stack-submit pushes all branches in a stack in a single subprocess invocation. Sub-second sync timestamps would be the natural consequence of a single push command targeting multiple refs.
2. **`git-spice` (`gs stack submit`)**: Less likely for codex (Graphite is better-attested in OpenAI workflows), but produces identical sync signatures.
3. **OpenAI-internal stack tool `codex-rebase-stack`** (hypothetical, name speculative): would produce identical sync signature.

A simple test: at Add.368 or later, observe a third codex stack-PR triplet from a third author. If the pattern replicates with sub-second sync, H1 is **confirmed at n=3** and the toolchain is **operationally observable**. If a third author force-pushes their stack with **gaps ≥10s between PRs**, H1 is **partially refuted** and there is author-level variability in tooling adoption.

## Carrier asymmetry and implication for the H-burst regime

In Add.366's H-burst (11 events, 4 carriers), the J→H_sync_3-of-3 event was the dominant codex contributor (3 of 5 codex H-events). In Add.367's H-burst (12 events, 5 carriers), bolinfest's J→H_sync_3-of-3 contributes 3 of 6 codex H-events (50%). Excluding the J→H_sync events from both ticks:

| carrier | Add.366 H-events (excl. sync) | Add.367 H-events (excl. sync) | per-tick H-velocity (excl. sync) |
|---|---|---|---|
| codex | 2 | 3 | 1.0 → 1.5 |
| opencode | 2 | 1 | 1.0 → 0.5 |
| gemini-cli | 2 | 1 | 1.0 → 0.5 |
| goose | 2 | 2 | 1.0 → 1.0 |
| litellm | 0 | 2 | 0 → 1.0 |

**Excluding J→H_sync**, codex remains the H-density leader and **litellm enters the H-active set at tick+1** (was silent in Add.366; #27238 ryan-crabbe-berri + #27225 stuxf both force-pushed in Add.367). The H-burst regime is **broadening** across carriers (4 → 5) and **codex-internal density is increasing** (5 → 6 on codex alone).

## Sub-class taxonomy update — formal predicate

A force-push event qualifies as **J→H_sync_N-of-N** when:
1. **N ≥ 2 PRs** by the same anchor author exist in OPEN state, opened within ≤30s of each other (J or J′ class predecessor),
2. **All N PRs receive a head-SHA mutation** within a single GitHub `updatedAt` second (resolution ≥ 1 PR/s observed in raw API, sub-second resolution suspected but not visible in API),
3. The mutation occurs ≥30s after the original open (excluding amend-on-open, which would be sub-class A).

Under this predicate, both rhan-oai (Add.366, N=3) and bolinfest (Add.367, N=3) qualify. **W17-synth-709 promotes J→H_sync_N-of-N from a candidate sub-mode to a confirmed sub-class** of W17–W18 H-event taxonomy, distinct from per-PR organic force-push (which is the dominant H mode at single-PR granularity).

## Predictions

- **P-709.A**: A **third codex stack-author** produces a J→H_sync_N-of-N event within 5 ticks (~3h) on N≥2 PRs, sub-second sync. If yes, H1 is **n=3 confirmed**; if no, the pattern is **codex-bolinfest-and-rhan-oai-restricted** (still H1-compatible but narrower).
- **P-709.B**: A J→H_sync_N-of-N event appears on **a non-codex carrier** within 10 ticks (~6h). Most likely candidates: opencode (jlongster has stack-PRs) or goose (kalvinnchau ACP-stack). If yes, the toolchain is cross-carrier portable (e.g., Graphite is used across orgs); if no, the pattern is **codex-toolchain-bound**.
- **P-709.C**: bolinfest's (and rhan-oai's) J→H_sync triplets all land **within 4 ticks** of the sync event (i.e., merge or close), since synchronized stack-rebases typically precede maintainer review. If they remain OPEN past tick+5, the sync force-push was **not** a pre-merge polish — it was a **rebase-on-base-update** with no maintainer interaction.
- **P-709.D**: At Add.368, the **3rd-author J→H_sync candidate is wiltzius-openai's J′-doublet (#21264, #21265)**. If wiltzius's doublet receives a sub-second sync force-push within 2 ticks, P-709.A is confirmed at the earliest opportunity and J′-class sub-second-sync confirms toolchain-portability across same-substrate-pair vs disjoint-surface-stack geometries. If wiltzius's doublet head SHAs mutate non-synchronously (≥10s apart) or remain frozen, J′ is a structurally distinct class from J (different toolchain or no toolchain).
