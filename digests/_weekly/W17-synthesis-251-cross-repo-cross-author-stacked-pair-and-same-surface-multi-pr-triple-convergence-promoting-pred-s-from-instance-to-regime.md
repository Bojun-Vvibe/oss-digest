# W17 Synthesis #251 — cross-repo cross-author stacked-author-pair convergence: Add.107 kitlangton opens #24706/#24707 on opencode within 19s mirroring Add.106 bolinfest #19899/#19900 on codex within 1s, plus same-author multi-PR-on-shared-surface (kitlangton httpapi-oauth series + ishaan-berri projects-visibility triple #26657/#26659/#26664) confirming **stacked-author workflow signatures are cross-repo regularities among internal high-cadence authors**, not single-author idiosyncrasies — promoting Pred S (Add.106) from a single-instance prediction to a **regime-level claim**

**Status:** PROMOTED from ADDENDUM-107 cross-repo convergence observations. Pred S (bolinfest stacked pair from Add.106) acquired its first cross-repo cross-author replication in 80 minutes via kitlangton on opencode; same tick added a same-author triple-on-surface instance via ishaan-berri on litellm. **Three independent same-author multi-PR signatures fired in one Add tick across three repos** — sufficient to promote from per-instance prediction to regime-level synthesis.

## Falsification angle

Synth #244 (sub-pattern (a) cross-author rapid-fire opens) treated each instance as a per-author idiosyncrasy and **did not predict cross-repo recurrence within sub-day windows**. Add.106's bolinfest #19899/#19900 (1-second separation, distinct titles, distinct head SHAs) was promoted as Pred S with **a 4-tick window for resolution** — the assumption being that the *next* same-author near-simultaneous-stacked-pair would not appear before Add.110. **Add.107 falsifies the implicit timing assumption** by producing **kitlangton #24706/#24707 (19-second separation, distinct titles, distinct head SHAs, distinct surfaces) within 80 minutes and 1 Add tick of the bolinfest instance**. This is **6 ticks earlier than Pred S's window allowed**, indicating stacked-author-pair is **not rare** and the per-tick base rate has been undercounted in prior synths.

The ishaan-berri triple (#26657, #26659, #26664) on litellm projects-visibility surface adds a **third axis** to the cross-repo convergence: **same-author multi-PR-on-shared-surface within ≤53 minutes**, all 3 still OPEN at Add.107. This is structurally distinct from the bolinfest/kitlangton stacked-pair (which spans **disjoint surfaces**) — the ishaan-berri instance is **same-surface decomposition into 3 candidate fixes**, suggesting **author-driven exploratory parallelism on a single bug class**. Synth #251 therefore unifies **two distinct sub-signatures** under one regime claim:

- **Sub-signature S1 (cross-surface stacked pair):** same-author opens ≥2 PRs on disjoint-but-related surfaces within ≤30s (bolinfest) or ≤60s (kitlangton); typical purpose is **planned feature-rollout staging** (introduce + mark-experimental, or fix + new-adapter).
- **Sub-signature S2 (same-surface multi-PR triple):** same-author opens ≥3 PRs on a single shared surface within ≤60min, with overlapping but distinct titles indicating **decomposition or alternative-formulation exploration**; ishaan-berri projects-visibility is the W17 exemplar.

## Core empirical claim — the regime is cross-repo and bimodal in surface-overlap

| Repo | Author | Sub-signature | PRs | Time-span | Surface-overlap | Add introduced |
|------|--------|----------------|-----|-----------|------------------|------------------|
| openai/codex | bolinfest | S1 | #19899, #19900 | 1s | disjoint-related (`permission-profiles` adjacent) | Add.106 |
| sst/opencode | kitlangton | S1 | #24706, #24707 | 19s | disjoint (`httpapi-oauth-mcp-error` vs `effect-drizzle-sqlite`) | Add.107 |
| BerriAI/litellm | ishaan-berri | S2 | #26657, #26659, #26664 | 53m | same-surface (projects-visibility, all 3 titled `fix(projects)`) | Add.107 |
| sst/opencode | kitlangton | S2-like (multi-tick variant) | #24682, #24693, #24703, #24705, #24706 | ~3h cumulative across Adds | overlapping-surfaces (httpapi/session/oauth) | Adds 105-107 |

**Cross-repo same-tick cross-pattern co-firing**: **all 3 instances above land within Adds 106-107**, a 2-tick window. Base-rate calibration: prior synths' assumption was ≤1 stacked-author-pair per 4 ticks; observed rate at Add.107 is **3 instances in 2 ticks ≈ 1.5/tick**, **6× the assumed base rate**. **This is the kind of rate-mismatch that synth #234 reflexivity territory predicts when a synth's predicates are too conservative.**

## Distinguishing predicates from synth #244

Synth #244 cataloged sub-pattern (a) as a single class without distinguishing intra-author cross-surface from intra-author same-surface. **Synth #251 splits sub-pattern (a) along a surface-overlap axis**:
- **(a1):** intra-author cross-surface stacked-pair (S1; bolinfest, kitlangton-#24706/#24707).
- **(a2):** intra-author same-surface multi-PR (S2; ishaan-berri triple; kitlangton multi-tick httpapi series counts as a slow variant).

**Falsifier for (a1) vs (a2) split:** if a future instance combines **same-surface AND ≤30s open-burst** in a way that does not fit either subclass cleanly, the surface-overlap axis is **not a clean discriminator** and synth #251's split retracts. If no such hybrid by Add.115, the split holds.

## Predicates

- **Pred 251-1 (S1 cross-repo recurrence within 5 ticks):** by Add.112, ≥1 further intra-author cross-surface stacked-pair (≤60s open-separation, distinct surfaces, distinct head SHAs) appears in any tracked repo by an author with ≥2 prior W17 PRs. **Falsifier:** no such event by Add.112; S1 was an Adds-106-107 anomaly cluster.
- **Pred 251-2 (S2 same-surface multi-PR triple resolution):** by Add.110, ishaan-berri projects-visibility triple {#26657, #26659, #26664} resolves with **≥1 merge AND ≥1 close** (canonical-fix dedup). If all 3 still OPEN at Add.110, S2 is **author-driven-not-maintainer-resolved** (reviewer bandwidth bottleneck). If ≥2 merge, the 3 PRs were **genuinely independent bugs** (no dedup needed). If ≥2 close + 1 merge, **canonical-fix dedup** is the resolution mode.
- **Pred 251-3 (S1 vs S2 cross-pattern transition):** by Add.115, ≥1 author who has produced an S1 instance produces an S2 instance (or vice-versa) within ≤10 ticks. If yes, S1 and S2 are **stages in a single workflow continuum** (planned-stack → decomposition-trial). If no, S1 and S2 are **author-class-segregated** (bolinfest/kitlangton are S1-class authors; ishaan-berri/yuneng-berri are S2-class authors).
- **Pred 251-4 (kitlangton effect-drizzle #24707 surface-expansion holds):** if #24707 merges within 4 ticks (Pred Z from Add.107), kitlangton's S1 cross-surface stacked-pair was **goal-directed surface-expansion** (httpapi → effect-drizzle-sqlite is a deliberate adapter introduction). If #24707 self-closes, the cross-surface stacked-pair was **opportunistic** (kitlangton was working on httpapi and bundled an unrelated draft).
- **Pred 251-5 (cross-repo S1 base rate ≥1/tick going forward):** if Adds 108-112 each contain ≥1 S1 instance somewhere across the 6 repos, the **regime is steady-state** and S1 is the dominant high-cadence-maintainer workflow. If only 0-1 of Adds 108-112 contain S1, the Add.106-107 cluster was **a synchronized burst** rather than baseline.
- **Pred 251-6 (`-berri` author class S2 enrichment):** at Add.107, S2 instances are concentrated in `-berri` authors (ishaan-berri specifically). By Add.115, ≥1 further `-berri` S2 triple appears. If yes, S2 is **`-berri`-clustered** (consistent with synth #250's sub-pattern (b) `-berri` clustering in Pred 250-5). If no, the ishaan-berri triple was idiosyncratic.

## Carry-relations to prior synths

- **Promotes Pred S** (Add.106 bolinfest stacked-pair) from per-instance prediction to **regime-level claim** with cross-repo confirmation.
- **Refines synth #244** (rapid-fire same-author opens) by introducing the (a1)/(a2) surface-overlap split.
- **Co-fires with synth #250** (close-and-refile catalog): kitlangton's multi-tick httpapi series is **simultaneously an S2-slow-variant AND a sub-pattern (b)/(c) close-and-refile producer**, indicating **same-author multi-PR signatures and close-and-refile signatures are not orthogonal** — they overlap in the same author session.
- **Co-fires with synth #249** (litellm deferred-batch resumption): ishaan-berri's S2 triple (#26657/#26659/#26664) is **stack-prep behavior during the litellm post-doublet maintenance phase**, suggesting **deferred-batch resumption windows are correlated with same-author multi-PR opens** (authors prep multiple PRs during silent phase, then a subset merges in cluster, then the remainder accumulate as S2-style multi-PR-on-surface).
- **Methodologically anchored in synth #234**: the 6× rate-mismatch between assumed and observed S1 base rate is a textbook reflexivity-territory finding: **prior predicates were too conservative and the data falsified them faster than expected**. Future Pred S-style predicates should use **≤2-tick windows by default** rather than 4-tick windows.

## Falsifier conditions (what would retract #251)

- **F1:** if Pred 251-1 falsifies (no further S1 by Add.112), the Add.106-107 S1 cluster was a 2-tick coincidence and synth #251's regime claim retracts to **isolated-instance** territory.
- **F2:** if Pred 251-2 produces all-3-OPEN at Add.110, S2 is **bottleneck-driven not author-strategy-driven**, and the synth's framing of S2 as "author-driven exploratory parallelism" partially retracts toward "reviewer bottleneck artifact".
- **F3:** if Pred 251-3 confirms (S1 author transitions to S2), the (a1)/(a2) split is **stages-not-classes** and synth #251 reframes as a single continuum.
- **F4:** if Pred 251-5 falsifies (rate <1/tick across Adds 108-112), the regime claim retracts to **sporadic-cluster** rather than steady-state.

## Capture metadata

Promoted at ADDENDUM-107 close (02:11:00Z, 2026-04-28). Source citations: Add.106 (bolinfest #19899 head `5fca8f2fa165ffdfa8be64923b2911b1a5e4e697` + #19900 head `393a21dcd678eaa557fab94d7ec1f040f3fba169`, codex 1-second stacked pair; Pred S opening). Add.107 (kitlangton #24706 head `865561d02618d5a6297533403d02f11e443075d0` + #24707 head `b6a83e196c25f44be99bb16e81bf70c93eacddcf`, opencode 19-second stacked pair on disjoint surfaces; ishaan-berri #26657 head `57d6500d5fc286b7f435c7c98a518e242d84d18e` + #26659 head `7be66dda1a4b629a85815863dbfa742f4a8d800d` + #26664 head `7c1ffaf0994bf2121c5ea845616e476cf5bafa27`, litellm 53-minute same-surface triple on projects-visibility). Multi-tick S2 kitlangton series: opencode #24682 (head `cd47262081e8ced842ddd210f44ec70ea1f0edd0`, merged Add.105), #24693 (head `eef9481a1594f868aeeb783fa53ed3bb311605eb`, merged Add.107), #24703 (head `d790df31af19304ec864bc62625d937c44bd1e7c`, merged Add.107), #24705 (head `337946335a8210df24fde0f5ef4cd5fef8710b64`, merged Add.107), #24706 (OPEN at Add.107 close). Cross-pattern co-fire from synth #249 / Pred T cross-repo deferred-batch: codex #19836 (head `67c4fad8965e7ef44ce514b8f2b2085af13610ae`, merged 00:42:11Z Add.106 close) + #19892 (head `fd38df9c4df2a41fcc6d58c983e8c0c4f792040f`, merged 00:43:16Z Add.106 close) — codex 65s inter-merge doublet which Add.106 under-counted; qwen-code #3623 (head `1921d805bf9fb8b7cf718de7f0402897ab00db7c`, merged 01:06:09Z Add.107) + #3682 (head `7635f8c1b9d8e5275681023ad2c48d7a2dd9c5cd`, merged 01:22:18Z Add.107), 16-minute inter-merge doublet after 12h22m+ pause.
