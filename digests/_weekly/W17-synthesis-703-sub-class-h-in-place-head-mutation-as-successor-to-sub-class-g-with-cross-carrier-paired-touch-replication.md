# W17-synthesis-703 — sub-class H formalization: in-place head-mutation as the FIRST OBSERVED successor-state to a sub-class G mass-creation swarm, with paired-touch (Δt<60s) cross-carrier replication

**Date**: 2026-05-06 (W18 day-1, retroactive W17/W18 boundary synthesis)
**Source ticks**: ADDENDUM-361 (sub-class G origin) + ADDENDUM-362 (sub-class H emergence)
**Prior art extended/falsified**:
- synth-700 (head-identity collision): **partially falsified at codex side** (#21180==#21182 dissolved tick+1 to distinct heads `07a1254b128d` and `f84c4eb7390c`); **persists at qwen-code side** (#3856==#3848 still share `a0daf50c065f` tick+2)
- synth-701 (sub-class G formalization): **extended** with successor-state taxonomy
- synth-702 (4-carrier 40%+ band): **partially confirmed** P-702.E (no maintainer sweep on litellm); **partially falsified** P-702.B (cross-carrier collision count drops 2→1)

---

## Claim

The W17/W18 boundary tick-pair (Add.361 → Add.362) provides the **first observation in the entire W17 instrumentation window** of a sub-class G mass-creation swarm progressing into a successor state. The successor state is **NOT** any of the three pre-registered hypotheses (continuous-extension, mass-close, abandon). It is a **fourth, previously-unnamed mode**: in-place head-mutation of a strict subset of swarm members, with **paired-touch temporal signature** (Δt<60s between mutated members' updatedAt timestamps), and **without consumption of new PR numbers in the namespace**. We name this **sub-class H** and demonstrate it has already replicated cross-carrier within the same tick (litellm Beandon13 + gemini-cli cocosheng-g), suggesting H is a **general successor-mode**, not a Beandon13-specific tic.

## Formal definition (re-stated from Add.362 for synthesis-level reference)

**sub-class H(N, k, Δt, A, R)** = head-mutation event on k of N already-open same-author swarm members owned by author A in repo R, where:
1. The mutated subset's pairwise updatedAt span Δt < 60s (paired-touch signature, distinguishes H from background per-PR review iteration which has no such temporal pairing)
2. N is **unchanged** vs prior tick (no new PR numbers consumed, distinguishes H from continuous sub-class G extension)
3. k < N (strict subset, distinguishes H from a uniform refresh/rebase of the entire swarm)
4. The original swarm satisfied sub-class G (origin precondition)

## Empirical instances at Add.362 (PRs/SHAs, not generic prose)

### Instance H.1 — BerriAI/litellm, Beandon13 (canonical instance)
- Pre-state (Add.361): N=10 swarm #27203-#27212, all heads distinct, all updatedAt within 17:39:48Z-17:45:19Z (Δ=5m31s), satisfies sub-class G(N=10, Δt=331s)
- Post-state (Add.362): N=10 (unchanged), heads of **#27206 (`697679ffa58b` → `0f401398a345`) and #27209 (`05c9ca5f1a42` → `cbd1122cc2fe`)** mutated
- Mutated-pair updatedAt: 18:46:01Z and 18:46:27Z → **Δt = 26s** (well under 60s threshold)
- k=2, N=10, k/N=20%
- **3 non-Beandon PRs (#27216 ishaan-berri, #27217 VANDRANKI, #27218 ryan-crabbe-berri) land alongside, dropping concentration 100%→75%** but not retracting any swarm member

### Instance H.2 — google-gemini/gemini-cli, cocosheng-g (cross-carrier replication)
- Pre-state (Add.361): cocosheng-g held 3 PRs (#26519 `066f16f23136`, #26514 `7034b7ebcaf9`, #26506 `a36d1d5010f4`), 4-minute author-clustering window (synth-702 below-band 30% measurement)
- Post-state (Add.362): #26519 head **`066f16f23136` → `fc7adde866e5`** at 18:40:06Z; #26514 head **`7034b7ebcaf9` → `1abeb145d062`** at 18:40:34Z
- Mutated-pair updatedAt: 18:40:06Z and 18:40:34Z → **Δt = 28s** (matches H.1 Δt=26s within 2s; **two-instance Δt mean ≈ 27s, std ≈ 1s**)
- k=2, N=3, k/N=67%
- **No new cocosheng-g PRs**; 1 untouched member (#26506 frozen)
- **NB**: cocosheng-g pre-state was sub-15s author-clustering, NOT sub-class G strict (no mass-creation typo signature) → H.2 is **sub-class H operating on a near-G author-cluster precondition** rather than strict G. This **broadens H's domain** to include "any same-author N≥3 cluster with paired-touch successor", not only typo-swarms

### Instance H.adjacent — block/goose, morgmart (the "almost-H" disqualified case)
- Pre-state (Add.361): morgmart 4 PRs (#9016/9017/9018/9019), 3 of which sub-10s clustered (15:46:33-15:46:38)
- Post-state (Add.362): N **expands** to 7 (#9012, #9013, #9014, #9016, #9017, #9018, #9019); 6 of 7 updated within 12s (18:44:56-18:45:08)
- **Disqualified from H** because **N changed (4→7), new PR numbers consumed**. This is instead a **sub-class G EXTENSION**, retroactively making goose's morgmart cluster a confirmed sub-class G instance (formerly proto-G in synth-701)
- Falsifies the "G must be typo-titled" implicit assumption of synth-701: morgmart PRs are **goose2 UI polish**, not typos. **synth-701 amended**: sub-class G is content-agnostic; only signature is mass-creation single-author N≥4 within sub-15-minute window

## Cross-carrier replication statistics

- **Carriers exhibiting H or H-adjacent behavior in Add.362**: 2 confirmed (litellm, gemini-cli) + 1 G-extension (goose) = 3 of 7 carriers in successor-state activity within single tick
- **Δt invariance**: H.1 Δt=26s, H.2 Δt=28s → **27±1s mean paired-touch interval**, suggests human-driven semi-batched UI workflow (e.g., maintainer-side review tool timing or PR-author batched response)
- **Persistence test for synth-700 head-identity collision**:
  - qwen-code #3856==#3848 carrying `a0daf50c065f`: persists tick+2 (Add.359→362, ~120m)
  - codex #21180==#21182 carrying `9925dca637f0`: dissolved tick+1 (Add.361→362, ~54m)
  - **Asymmetry implies qwen-code collision is intentional shared-branch (rebased identical), codex collision was transient (likely concurrent write to same backing branch resolved within 1 tick)**

## Falsification ledger

| Hypothesis | Origin | Status at Add.362 |
|---|---|---|
| sub-class G terminates by mass-close | synth-701 implicit | **Falsified** (litellm: 0 closes, 3 maintainer co-PRs) |
| sub-class G terminates by N-extension to runaway | P-361.A | **Falsified** (litellm N frozen at 10) |
| sub-class G is typo-content-specific | synth-701 implicit | **Falsified** (goose morgmart goose2-UI swarm) |
| Head-identity collision is qwen-code-specific | synth-700 implicit | **Confirmed-then-falsified-then-re-confirmed**: synth-702 falsified via codex; synth-703 re-confirms via codex dissolution → qwen-code is **structurally distinct** in collision persistence |
| sub-10s burst is discrete event | P-361.E | **Falsified** (morgmart goose: doubled in N tick+1) |

## Predictions

- **P-703.A** (0.60 prior): A third sub-class H instance appears within next 2 ticks on a third carrier (codex jif-oai cluster is the most likely candidate given his 4-PR concentration; expected paired-touch Δt = 27±5s if H invariance holds).
- **P-703.B** (0.55 prior): The 27±1s paired-touch Δt invariance breaks at 3rd instance (Δt outside 22-32s), revealing it as 2-sample coincidence not a real invariant.
- **P-703.C** (0.40 prior): Litellm Beandon13 sub-class G enters **k=4 sub-class H mode** tick+1 (continued pairwise mutation, k advancing 2→4) without N expansion.
- **P-703.D** (0.35 prior): Goose morgmart sub-class G N expands to ≥9 tick+1 (extending the 4→7 progression, and formally confirming morgmart as second strict-G author after Beandon13).
- **P-703.E** (0.50 prior): qwen-code head-identity collision #3856==#3848 enters tick+3 of stability without dissolution — pushing the asymmetry vs codex to >2 standard durations and forcing synth-700 retitling to "qwen-code persistent shared-branch idiom".

## Cross-references
- ADDENDUM-361: sub-class G origin instance (litellm Beandon13).
- ADDENDUM-362: sub-class H origin instances (litellm + gemini-cli) + goose G-extension.
- synth-700: head-identity collision (now asymmetric across carriers).
- synth-701: sub-class G formalization (typo-content assumption now removed).
- synth-702: 4-carrier 40%+ band (3-of-5 P-702.* predictions resolved this synthesis).
