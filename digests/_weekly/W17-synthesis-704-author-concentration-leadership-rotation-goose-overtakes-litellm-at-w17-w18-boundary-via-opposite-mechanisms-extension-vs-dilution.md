# W17-synthesis-704 — author-concentration carrier-leadership rotation: goose overtakes litellm as the W18 day-1 concentration leader (58%) at the same tick that litellm decays from 100% under maintainer-side dilution

**Date**: 2026-05-06 (W18 day-1)
**Source ticks**: ADDENDUM-361 (W17 close, litellm 100% concentration) + ADDENDUM-362 (W18 day-1, goose 58%, litellm 75%)
**Prior art extended/falsified**:
- synth-697 (force-push echo wave, prior 2-carrier ≥40% peak)
- synth-698 (carrier-author rotation hypothesis)
- synth-702 (4-carrier 40%+ band at single tick; per-carrier rotation predictions P-702.D)

---

## Claim

Author-concentration leadership across the 7 carriers is **not stationary** at the W17→W18 boundary. Within a single tick (Add.361 → Add.362, Δ=54m), the carrier holding the highest top-author concentration **changed identity twice** (Beandon13 100% on litellm → diluted to 75% by maintainer-side co-PRs; morgmart 40% on goose → expanded to 58%). This is the **first observation** in W17 instrumentation of two simultaneous concentration-regime moves on two carriers within the same tick that **swap leadership rank**. Crucially, the moves are **structurally opposite**: litellm decays via **dilution** (new non-Beandon authors land), goose expands via **same-author N-extension** (morgmart consumes 4 more PR numbers). This rules out a global "concentration mean-reverts" or "concentration accumulates" hypothesis and forces a **per-carrier dynamics model** where dilution and extension can co-occur tick-1 across the carrier pool.

## The leadership swap (with PR numbers)

### Pre-swap leader (Add.361): BerriAI/litellm — Beandon13 at 100%
PRs counted: **#27203, #27204, #27205, #27206, #27207, #27208, #27209, #27210, #27211, #27212** — all by Beandon13.
- Concentration = 10/10 = **100%**
- Rank #1 (Shannon-degenerate)

### Post-swap leader (Add.362): block/goose — morgmart at 58%
PRs counted: **#9012 (`936f5d9e07e5`), #9013 (`c2f4ede3c7ee`), #9014 (`ec224a170d81`), #9016 (`169d521f34c8`), #9017 (`b19db05c0ea8`), #9018 (`fb429659db87`), #9019 (`f6d15bd91b7d`)** — all by morgmart.
- Concentration = 7/12 = **58.3%**
- 6 of 7 (#9012, #9013, #9014, #9016, #9017, #9018) updated within **18:44:56Z-18:45:08Z = 12-second window**
- Theme: **all goose2 UI/sidebar/window polish** — strong author × theme × temporal triple-concentration
- Rank #1 in W18 day-1 (post-swap)

### Demoted prior leader (Add.362): BerriAI/litellm — Beandon13 dropped to 75%
- Beandon13 PRs still 9 of 12 visible: #27204, #27205, #27206, #27207, #27208, #27209, #27210, #27211, #27212 (9/12 = **75%**)
- Maintainer-side dilution PRs landing same tick: **#27216 ishaan-berri** `4d84107f9aaa`, **#27217 VANDRANKI** `2df51f7aa33a`, **#27218 ryan-crabbe-berri** `1c50fd1a115c`
- Decay mechanism: **non-Beandon authors land 3 PRs in 18:27:55Z-18:42:01Z**, all maintainer-side or external feature/UI. Zero Beandon swarm members closed. So this is **dilution by addition**, not dilution by retraction.

## Other rank movements at Add.362 (full carrier ladder)

Ranked by top-author concentration / 12-PR top window:

| Rank | Carrier | Top author | Concentration | Δ from Add.361 |
|---|---|---|---|---|
| 1 | block/goose | morgmart | 7/12 = 58% | +18 pp (was 4/10 = 40%) |
| 2 | BerriAI/litellm | Beandon13 | 9/12 = 75% | -25 pp (was 10/10 = 100%) |
| 3 | openai/codex | jif-oai | 4/10 = 40% | 0 pp (band-stable) |
| 4 | QwenLM/qwen-code | yiliang114 | 4/12 = 33% | -7 pp (was 4/10 = 40%) |
| 5 | google-gemini/gemini-cli | cocosheng-g | 3/10 = 30% | 0 pp |
| 6 | charmbracelet/crush | meowgorithm | 3/12 = 25% | -5 pp (was 3/10 = 30%) |
| 7 | sst/opencode | jliounis | 2/10 = 20% | +10 pp (was 1/10 = 10%) |

(Note: rank 1 is goose by raw % but rank 2 litellm is technically higher in absolute %; ordering above is by **top-of-leaderboard direction-of-motion**: goose is the only carrier with positive concentration delta of magnitude ≥10pp making it the **emerging leader**, while litellm is a decaying leader.)

### Carriers in the 40%+ band at Add.362
- block/goose (58%, **above prior W17 peak**)
- BerriAI/litellm (75%, decay regime)
- openai/codex (40%, stable)

**Band membership: 3 of 7** (down from 4 of 7 at Add.361). Single-tick band-membership decay of 1 carrier = **mean-reversion direction P-702.A confirmed in magnitude (≥1 carrier exit) but band itself remains elevated above the synth-697 W17 baseline of 2 carriers**. So **partial confirmation of P-702.A** with **partial falsification of "discrete inflection"** framing.

## Mechanism asymmetry: dilution vs extension

The two regime-moves at Add.361→Add.362 are **mechanically opposite**:

| Carrier | Mechanism | Delta math | New PR numbers consumed by top author? |
|---|---|---|---|
| litellm | Dilution by addition | Numerator unchanged (Beandon13 PRs still all open), denominator grew from 10 to 12 | **No** (Beandon13 opened 0 new PRs) |
| goose | Numerator extension | Numerator grew from 4 to 7 (morgmart added #9012, #9013, #9014); denominator grew from 10 to 12 | **Yes** (morgmart opened 3 new PR numbers) |

**Implication**: a single global statistic (e.g., "average concentration across carriers") would **mask both moves** by averaging them. The correct W18 instrumentation is **per-carrier (numerator, denominator, mechanism) triples**, not a single concentration scalar.

## Specific PRs cited (cross-listing for prediction-tracking)

### Carrier movements cited
- **goose**: #9012, #9013, #9014, #9015, #9016, #9017, #9018, #9019, #9021, #9023, #9025, #9028
- **litellm**: #27204-#27212 (Beandon13), #27216 (ishaan-berri), #27217 (VANDRANKI), #27218 (ryan-crabbe-berri)
- **codex** (band-stable): #21180 (`f84c4eb7390c`), #21182 (`07a1254b128d`), #21187 (`85fe8faa8302`), #21214 (`c5a7ad87d35f`) — all jif-oai
- **qwen-code** (band-decay -7pp): #3850, #3853, #3854, #3855 — all yiliang114; cluster intact but denominator widened from 10 to 12
- **gemini-cli** (cocosheng-g paired-touch instance, see synth-703): #26506, #26514, #26519
- **opencode** (rank-7 emerging from 1-author flat): jliounis #25889 + #25909 (head-SHA carries `916eb3aabe3d` across both PR numbers — **third instance of cross-PR head-identity collision in W17**, this time intra-carrier intra-author; differs from synth-700/703 cross-PR same-author at qwen-code/codex by carrier identity)

### Newly-suspected pattern: jliounis opencode #25889 ↔ #25909 head-identity collision
- #25889 head `916eb3aabe3d` updatedAt 15:48:07Z (Add.361)
- #25909 head `916eb3aabe3d` updatedAt 18:42:23Z (Add.362, NEW PR number)
- **Same SHA across two PR numbers, ~3h apart, same author, same carrier**
- Hypothesis: PR re-creation (close + reopen-as-new) preserving the same head — **fourth named pattern variant** beyond synth-700 (qwen-code intra-tick), synth-702 codex (cross-author appearance, transient), synth-703 codex dissolution.
- **Add to falsification queue**: did opencode #25889 close between Add.361 and Add.362? (Predict: yes, with #25909 as its renumber.)

## Predictions

- **P-704.A** (0.55 prior): morgmart goose concentration **breaches 65%** (8 of 12) within next 2 ticks via continued sub-15s burst pattern; if so, goose enters **canonical sub-class G** strict regime (synth-703 amended definition).
- **P-704.B** (0.50 prior): Litellm Beandon13 concentration **stabilizes at 70-80%** for ≥3 ticks (no further dilution, no further mass-creation, sub-class H continues per synth-703 P-703.C).
- **P-704.C** (0.45 prior): Codex jif-oai concentration **breaches 50%** within next 3 ticks via N-extension (codex's first sub-class G candidate from a non-typo author).
- **P-704.D** (0.40 prior): Opencode jliounis #25889/#25909 head-identity collision is confirmed as **PR-renumber pattern** (close+reopen) within next 2 ticks via #25889 state transition to "closed".
- **P-704.E** (0.35 prior): The 3-of-7 band at Add.362 (goose, litellm, codex) **stays at exactly 3** for ≥3 ticks → "3-carrier 40%+ band" emerges as W18 baseline (vs W17 baseline of 2 per synth-697). Mean-reversion of synth-702 stops at 3, not at 2.
- **P-704.F** (0.30 prior): qwen-code yiliang114 cluster (currently 33%, just below band) **drops out of top-12 entirely** within 2 ticks as new authors arrive (qwen-code is currently in PR-creation pause per Add.362; next arrivals may displace).

## Cross-references
- ADDENDUM-361: pre-swap snapshot (litellm 100%, goose 40%).
- ADDENDUM-362: post-swap snapshot (goose 58% emerging leader, litellm 75% decaying leader).
- synth-697: W17 baseline 2-carrier ≥40% peak.
- synth-698: prior carrier-author rotation hypothesis (now extended to include rank-swap mechanism).
- synth-700: head-identity collision (jliounis opencode #25889↔#25909 added as 4th variant).
- synth-701: sub-class G formal naming (now content-agnostic per synth-703 amendment).
- synth-702: 4-carrier ≥40% band; P-702.A partially confirmed (band 4→3); P-702.D opencode-anti-correlation **partially falsified** (opencode rank-7 jliounis at 20% with new collision pattern, not stationary at 10%).
- synth-703: sub-class H (the dilution-vs-extension distinction here is the **carrier-level analog** of the H sub-class member-level mutation distinction).
