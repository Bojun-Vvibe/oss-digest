# W17-synthesis-699 — Sub-class F formal definition: anchor force-push + leg metadata-touch as 1-tick downstream consequence of sub-class E

**Date**: 2026-05-05
**Window**: Add.358 → Add.360 (98m wall-clock; 3 ticks)
**Conjecture rank**: novel sub-class definition extending synth-695 (sub-class E) and synth-694 (power-law freeze tail)

## Definition (formal)

For a stack S = {anchor A, legs L₁..Lₙ} on carrier C by single author α:

- A **sub-class E event at tick T** is: all of {A, L₁..Lₙ} head-frozen across the tick AND all updatedAt fields bumped within ≤60s wall-clock window (synth-695 formal definition, n≥5).

- A **sub-class F event at tick T+k (k∈{1,2})** is: anchor A receives **head-iteration (force-push)** while legs L₁..Lₙ receive **metadata-touch only** (head unchanged, updatedAt bumped).

**Sub-class F is the asymmetric downstream of sub-class E** where author-attention concentrated on the leader.

## Empirical instance (Add.358 → Add.360)

- **Add.358 (sub-class E)**: evawong-oai stack {`#21184` anchor; `#21175`, `#21174`, `#21173`, `#21172` legs} — N=5 head-frozen + metadata-touched within 60s window. Anchor head: `95ef124d6194bd2126c11928cb3973214f9ac63a`.
- **Add.359 (intervening freeze tick)**: full stack head-frozen, no metadata-touch (tick-1 quiescence).
- **Add.360 (sub-class F)**: `#21184` force-pushed to head `6b31cb3a79f3` at 17:03:54Z; `#21175` head `8f93be5b9e21` metadata-bumped at 17:07:02Z; `#21174` head `6e60556d73a9` metadata-bumped at 17:06:52Z. **Anchor force-push + leg metadata-touch**, k=2.

## Hypothesis (H699)

**H699-PRIMARY**: Sub-class F is the **modal 2-tick-downstream** of sub-class E (P ≥ 0.45 conditional on prior sub-class E by same author). Specifically:

> Given a sub-class E event at tick T by author α on carrier C with stack S of size n+1, then within ticks T+1 or T+2:
> - **Mode (a) sub-class F**: anchor force-push + leg metadata-touch (P ≈ 0.45)
> - **Mode (b) full re-freeze** (synth-694 power-law tail; P ≈ 0.30)
> - **Mode (c) symmetric stack-wide force-push** (all members head-iterate; P ≈ 0.15)
> - **Mode (d) merge of anchor**: anchor merges with legs surviving (P ≈ 0.10)

## Falsifiable predictions citing specific PRs across carriers

**P699.1 (within 3 ticks of Add.360)**: `#21184` evawong-oai will receive a 2nd force-push OR merge OR close, AND legs `#21175`, `#21174`, `#21173`, `#21172` will follow within 1 tick of the anchor event. Prior 0.55. **Falsified if**: anchor receives no head-event by Add.363 OR legs head-iterate before anchor.

**P699.2 (cross-carrier generalization)**: Within 8 ticks of Add.360, sub-class F will recur on a DIFFERENT (author, carrier) pair drawn from the W17 stack-holder set: {yiliang114 on qwen-code with anchor candidate `#3854` + legs `#3855`, `#3853`, `#3850`}, {jif-oai on codex with anchor candidate `#21214` + legs `#21187`, `#21182`, `#21180`}, {morgmart on goose with anchor candidate `#9019` + legs `#9018`, `#9017`, `#9016`, `#9014`, `#9013`}. Prior 0.45. **Falsified if**: 8 ticks elapse with zero sub-class F instances by any of these three candidates.

**P699.3 (asymmetry constraint)**: When sub-class F triggers, the anchor PR will have **strictly older createdAt** than ≥80% of its legs. For evawong-oai stack: `#21184` cr=2026-05-05T12:23:50Z is older than `#21175` cr=10:52:34Z and `#21174` cr=10:52:19Z — **violated** (#21184 is YOUNGER than legs). H699 PARTIAL-FALSIFIED on this dimension; refine to "anchor = highest-numbered PR" OR "anchor = PR with most prior force-pushes". The evawong-oai #21184 anchor is the **highest-numbered** of the stack — refined predicate **anchor = max(PR#)** holds. Prior 0.60. **Falsified if**: in next 5 sub-class F instances observed across W17, anchor ≠ max(PR#) of stack ≥3 times.

**P699.4 (carrier-rotation null)**: Sub-class F instances will NOT cluster within a single carrier — at most 1 per carrier per 5-tick window. Prior 0.50. **Falsified if**: codex sees a 2nd sub-class F instance (by different author from evawong-oai, e.g., jif-oai stack) within Add.361–Add.365.

**P699.5 (interaction with force-push echo wave)**: Sub-class F events do NOT count toward force-push echo-wave (synth-697) cardinality — i.e., the anchor force-push of a sub-class F event will **not** be cited in the next addendum's "wave" tally. Prior 0.40 (low because Add.360 already counted #21184 in its N=2 force-push tally). **Falsified by**: Add.360's existing tally — ALREADY FALSIFIED at definition time. Refined: P699.5b — sub-class F anchor force-pushes will form ≤30% of any wave's cardinality. Add.360 wave N=2, sub-class F contribution=1, ratio=50% — **also FALSIFIED initially**. Reformulate: **P699.5c — across any rolling 10-tick window, sub-class F anchor force-pushes form ≤30% of total force-push events**. Tested at Add.370. Prior 0.55.

## Specific PRs cited (≥5 across multiple carriers)

1. **codex #21184** evawong-oai head `6b31cb3a79f3` (was `95ef124d6194bd2126c11928cb3973214f9ac63a`) — sub-class F anchor.
2. **codex #21175** evawong-oai head `8f93be5b9e21` (frozen) — sub-class F leg.
3. **codex #21174** evawong-oai head `6e60556d73a9` (frozen) — sub-class F leg.
4. **codex #21173** evawong-oai head `0e9394dbd8265f17f4c78d8641009c08bcbad857` (frozen) — sub-class F leg.
5. **codex #21172** evawong-oai head `6df1455723e4254ce7b7ac59a79d60f5daa0a24e` (frozen) — sub-class F leg.
6. **qwen-code #3854** yiliang114 head `e8b59b89a767` — candidate sub-class F anchor (P699.2 generalization).
7. **qwen-code #3855** yiliang114 head `b1757402fdb3` — candidate sub-class F leg.
8. **codex #21214** jif-oai head `cbd2243458b8` — candidate sub-class F anchor (highest-numbered jif-oai PR).
9. **codex #21187** jif-oai head `85fe8faa8302` — candidate sub-class F leg.
10. **goose #9019** morgmart head `f6d15bd91b7d` — candidate sub-class F anchor.
11. **goose #9018** morgmart head `fb429659db87` — candidate sub-class F leg.

## Carrier coverage

3 carriers (codex, qwen-code, goose) for predictions; 1 carrier (codex) for primary instance.

## Falsification status of related synthesis

- **synth-694** (power-law freeze tail): H699-mode-(b) consistent with H694 — sub-class F mode-(a) is **complementary** to H694 mode-(b) within the post-sub-class-E phase space. Sub-class F does NOT falsify H694; it partitions H694's post-sub-class-E sample space.
- **synth-695** (sub-class E formal definition): Sub-class F **extends** synth-695 by giving sub-class E a downstream consequence taxonomy. Does not falsify.
- **synth-696/697** (force-push echo wave): Sub-class F anchor force-pushes are **partially counted** in echo-wave tallies (P699.5c). Sub-class F is **mechanistically distinct** from echo-wave (echo-wave is cross-author cross-carrier; sub-class F is single-author single-carrier).

## Confidence summary

- H699-PRIMARY (sub-class F as modal post-E downstream): **prior 0.45** based on N=1 instance.
- Definition will graduate to **stationary sub-class** if observed N≥3 across ≥2 distinct (author, carrier) pairs by Add.380.
- If 8 ticks elapse with zero recurrence: **retire as singleton anomaly**.

## Linked predictions in Add.360

- P-360.B (#21184 2nd force-push within 2 ticks, 0.40) ↔ H699 mode-(d)/mode-(a) iteration.
- P-360.K (sub-class F recurs in different carrier within 5 ticks, 0.45) ↔ P699.2.
