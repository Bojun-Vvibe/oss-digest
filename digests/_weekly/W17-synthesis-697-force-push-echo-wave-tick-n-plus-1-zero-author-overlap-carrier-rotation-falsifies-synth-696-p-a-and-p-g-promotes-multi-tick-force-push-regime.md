# W17-synth-697 — force-push wave persists tick-N+1 with zero-author-overlap and carrier-rotation: Add.358 wave (codex+qwen×2+gemini-cli, authors fcoury-oai+yiliang114+qiuqiuwen25+euxaristia) → Add.359 echo wave (qwen×2+goose×2+gemini-cli×1, authors B-A-M-N+doudouOUC+morgmart+monroewilliams+cocosheng-g) — falsifies synth-696 P-696.A (force-push count regress to ≤2) and P-696.G (author overlap ≥1) at prior 0.55+0.30 jointly; promotes "force-push wave" from single-tick anomaly to multi-tick regime with carrier-rotation as new sub-mechanism

**Captured**: 2026-05-05T16:48:47Z (Add.359 tick).

**Cross-carrier hypothesis**: Force-push waves are **not single-shift events** but **multi-tick regimes** with **carrier-rotation as the persistence mechanism**. Synth-696 H696 attributed Add.358 wave to morning-Pacific reviewer-shift trigger. Add.359 echo wave **falsifies the strong morning-shift-only mechanism**: Add.358 happened at 15:01Z–16:11Z UTC (08:01–09:11 PT); Add.359 wave force-pushes happened at 16:19Z–16:48Z UTC (09:19–09:48 PT) — still within Pacific morning, BUT consume an **entirely different reviewer–author dyad set**. The waves are **stacked, not the same wave continuing**.

## Specific PRs cited per carrier (≥10 PR numbers across ≥3 carriers)

### Add.358 wave (recap from synth-696 — for diff-with-Add.359)

| Carrier | Author | PR | Old head | New head |
|---------|--------|-----|----------|----------|
| codex | fcoury-oai | **#21206** | `4744d143d3cde5909dece613f1754d62f388eaba` | `df77a410abc8a26ae46c957fd8feedbcde5dabe0` |
| qwen-code | yiliang114 | **#3854** | `9184e899fe60d70687b4cc6bb2a9f26297826008` | `e8b59b89a7673d4eaec15e07607973051ef300cc` |
| qwen-code | qiuqiuwen25 | **#3852** | `8a5fa3b1920ea25f5703e981641ee562c6c29d49` | `0bdb7e91a027b5401a2c1bfe5d90c87d94ef68b8` |
| gemini-cli | euxaristia | **#26498** | `698fcc8853b0c0dc82baacb4e7c38897157466f1` | `1470105b2d253624f40f0d5f76653ef902ffeb8a` |

### Add.359 ECHO wave (this synth's primary instances)

| Carrier | Author | PR | Old head (Add.358) | New head (Add.359) | Update timestamp |
|---------|--------|-----|--------------------|--------------------|-----------------|
| qwen-code | B-A-M-N | **#3849** | `56725a12a333d6d683bf5e6cc79caaef806df199` | `0c2876fb8da31d0ebf8524810d065cf8771ee4bd` | 16:19:50Z |
| qwen-code | doudouOUC | **#3847** | `efade6bb4c93976eeaf9a322b973c211ca127b22` | `109d9098ef3a40b0bdf1ff7d9b202959aebfed8b` | 16:48:02Z |
| goose | morgmart | **#9019** | `270600151176cdf64acb9d0a35b02477af5f2673` | `f6d15bd91b7d1eb33baa99582ae1d8ab95d58456` | 16:33:05Z |
| goose | monroewilliams | **#9015** | `da10317a27e1077794bda898710366a2ccdad529` | `70e82d7c7690dfed4698b866a3b49663e622a6dc` | 16:40:12Z |
| gemini-cli | cocosheng-g | **#26506** | `5d8924b47ff40f590539f5b0cc0c13ded379ae33` | `aebbca488dff75f632df427d667fcaa54dfa3dd8` | 16:27:22Z |

### Control PRs (in same carriers but did NOT force-push, distinguishing tick-scoped from author-scoped)

- **codex #21193** dylan-hurd-oai head `f7456567ce63b195a714e38316cc1ad0ecf32d5f` — **codex absent from Add.359 wave despite presence in Add.358**.
- **codex #21184** evawong-oai head `95ef124d6194bd2126c11928cb3973214f9ac63a` — head-frozen tick-7 (~210m), did NOT join either wave despite N=5 stack.
- **qwen-code #3854** yiliang114 head `e8b59b89a7673d4eaec15e07607973051ef300cc` — **WAVE-1 PR did NOT 2nd-force-push this tick** (P-696.C realized).
- **qwen-code #3852** qiuqiuwen25 head `0bdb7e91a027b5401a2c1bfe5d90c87d94ef68b8` — **WAVE-1 PR head-frozen but metadata-bumped** (updatedAt 15:45→16:46Z, +60m).
- **gemini-cli #26498** euxaristia head `1470105b2d253624f40f0d5f76653ef902ffeb8a` — **WAVE-1 PR head-frozen tick-1**.
- **goose #9018/#9017/#9016/#9014/#9013/#9012** morgmart heads all unchanged — **morgmart has split-mode this tick**: #9019 force-push (wave-2), 6 other PRs frozen (sub-class E continuation).

### Total PR count cited
- 4 PRs from Add.358 wave + 5 PRs from Add.359 wave + 6 control PRs = **15 PR numbers cited across 4 carriers** (codex, qwen-code, gemini-cli, goose).

## Hypothesis (H697): Force-push waves recur via carrier-author rotation, not author-doublet, within ≤2 ticks

**Falsification of synth-696 priors**:
- **P-696.A "force-push count next tick falls to ≤2" prior 0.55** → **FALSIFIED** (count=5).
- **P-696.G "next wave shares ≥1 author" prior 0.30** → **FALSIFIED** (0 author overlap; the strong-form 0.30 prior fails harder than the weak-form would).

**Promoted regime model H697**:

The W17 force-push process operates as follows:
1. **Wave-trigger event** (Add.358): N ≥ 4 force-pushes by N distinct authors across ≥ 3 carriers within ≤ 90min wall-clock window.
2. **Echo-wave** (Add.359, tick+1): N ≥ 4 force-pushes by **disjoint** N distinct authors across ≥ 2 carriers (one carrier may overlap), within the **next** ≤ 90min wall-clock window. Strict author-disjoint criterion: 100% of echo-wave authors are NEW vs the trigger wave.
3. **Carrier-rotation**: trigger wave excludes goose; echo wave includes goose. Trigger wave includes codex; echo wave excludes codex (no codex force-push despite jif-oai N=4 candidate). qwen-code is the **bridge carrier** present in both waves but with different authors (yiliang114+qiuqiuwen25 → B-A-M-N+doudouOUC).
4. **Regime ends** when echo-wave-2 (Add.360) either fails to materialize (regress to ≤2) OR brings author-overlap with either wave-1 or wave-2 (closing the author-pool).

**Why H697 is distinct from H696**:
- H696 attributed clustering to a **shared upstream cause** (reviewer-pool morning Pacific shift).
- H697 attributes persistence to **carrier-author pool rotation**: each tick the wave consumes ~4 fresh author-slots across ~3 carriers; the regime persists until the carrier-author pool is exhausted (~16–20 authors) or until the wave-trigger weakens.
- The two hypotheses are **complementary not exclusive**: H696 explains WHY waves happen at this time of day; H697 explains WHY they persist multi-tick despite consuming distinct authors.

## Sub-mechanism quantification

**Carrier-rotation entropy**: Define wave-carrier-vector for each tick as binary-membership vector over 7 carriers. Add.358 = `[codex=1, qwen=1, gemini-cli=1, goose=0, opencode=0, litellm=0, crush=0]`. Add.359 = `[codex=0, qwen=1, gemini-cli=1, goose=1, opencode=0, litellm=0, crush=0]`. Hamming distance = 2 (codex flipped off, goose flipped on); Jaccard similarity = 2/4 = 0.50. Under independence, expected Jaccard ≈ 0.20 (3-of-7 each, random); observed 0.50 indicates **non-random rotation toward adjacent-carrier echo** (codex→qwen-code→goose pipeline of "wake-up order").

**Author-pool exhaustion model**: Cumulative force-push authors across waves so far = 4 (Add.358) + 5 (Add.359) = 9. Estimated W17 active-author pool = ~20 (sub-mode-4 instantiator pool N=19 at Add.359). Exhaustion predicts wave-3 (Add.360) candidate-author count ≤ 11 (= 20 − 9). If wave-3 has N≥4 fresh authors, exhaustion is far; if wave-3 collapses to N≤2, exhaustion proximate.

**Selective single-PR-per-author signature CONFIRMED across both waves**: 
- Add.358: 4 authors, 4 PRs, 1.0 PR-per-author (despite each having N≥2 PRs available).
- Add.359: 5 authors, 5 PRs, 1.0 PR-per-author (B-A-M-N has N=3 PRs visible — only #3849 force-pushed; morgmart has N=7 PRs visible — only #9019 force-pushed).
- **Joint 9-author / 9-PR / 1.0 ratio across 2 waves** strongly confirms synth-696 selective-pattern hypothesis. The wave consumes **one PR per author**, not "all of an author's PRs". This is consistent with **reviewer-comment-on-active-PR-only** interpretation (each author has one PR currently under review-comment-response, the rest are dormant).

## Confirmation/falsification of prior W17 hypotheses (≥3 hypotheses tested)

- **FALSIFIES synth-696 H696 strong form (single-shift trigger)**: Add.359 wave occurs in same Pacific morning band BUT consumes entirely different author-set. Either the morning-Pacific window is **broader than 90min** (08:00–10:00 PT) and contains multiple distinct sub-shifts, OR the trigger is something other than morning-shift.
- **REINFORCES synth-696 selective-single-PR-per-author signature**: 9/9 = 1.0 ratio across joint-wave PRs.
- **EXTENDS synth-690 inverse-coupling H1 falsification**: synth-696 already noted Add.358 had high force-push count + 49m tick-width (against H1 prediction). Add.359 has high force-push count (5) + 33m tick-width (with H1 prediction). **H1 directionality varies** between the two waves — H1 may apply to fresh-opens but not consistently to force-pushes. Force-push events appear to be **tick-width-orthogonal** in H697's model.
- **REINFORCES synth-694 H694 power-law freeze model**: evawong-oai #21184 (210m freeze tick-7) + Sameerlite #27185 (213m freeze tick-7) **did NOT participate in either wave** despite high author-PR-count. H694 power-law tail predicts continued freeze-survival — confirmed.
- **FALSIFIES P-358.D (one of Add.358 wave PRs gets follow-up force-push within 2 ticks)**: 0/4 of wave-1 PRs received follow-up force-push at tick+1. Strong evidence for "force-push-once-then-wait" author behavior.

## Falsifiable predictions (P-697)

- **P-697.A (Add.360 wave-3 has N≥3 force-pushes, prior 0.45)** — under H697 multi-tick regime, regime continues as long as author-pool not exhausted; pool currently at 11 remaining.
- **P-697.B (Add.360 wave (if it occurs) shares 0 authors with EITHER Add.358 or Add.359, prior 0.40)** — strict-disjoint signature predicts continued fresh-author consumption.
- **P-697.C (Add.360 wave (if N≥3) includes a carrier NOT in Add.358 ∪ Add.359 = {opencode, litellm, crush}, prior 0.35)** — carrier-rotation toward fresh territory.
- **P-697.D (joint 3-tick wave count Add.358+359+360 ≥ 12 force-pushes, prior 0.40)** — implies 3 ≥ avg 3 per tick.
- **P-697.E (cumulative author-pool consumed reaches ≥13 by Add.360, prior 0.50)** — current 9 + ≥3 from Add.360 = 12+, with at least 1 fresh.
- **P-697.F (one of Add.359 wave PRs receives MERGE — not force-push — within 2 ticks, prior 0.45)** — selective-pattern + force-push-then-wait suggests merge is the next event.
- **P-697.G (B-A-M-N force-pushes #3848 OR #3856 within 2 ticks, prior 0.30)** — author has split-mode this tick (one PR iterated, two PRs frozen-collided); collision resolution may come via 2nd force-push by same author.
- **P-697.H (jif-oai #21214 wip-PR receives force-push within 2 ticks, prior 0.65)** — wip-tag is strongly predictive of fast iteration; provides a force-push candidate to test wave-3 onset.
- **P-697.I (wave-3 if it occurs has tick-width ≤ 35m, prior 0.55)** — synth-690 H1 inverse-coupling for fresh-opens may still apply weakly to overall tick-width.

## Operational consequence for dispatcher

- Force-push events should be **tracked with author-rotation memory** (carrier × author × PR × tick), not just per-carrier counts.
- The "force-push wave" is now W17's **third multi-tick regime** (alongside synth-688 sub-mode-4 saturation and synth-694 power-law freeze tail) — it deserves its own dispatcher signal class.
- Echo-wave detection at tick+1 is high-signal: when wave-1 is detected, predict wave-2 with prior 0.50+ on a disjoint author-set.

**Cross-references**: synth-696 (parent), synth-694 (freeze tail context), synth-690 (tick-width coupling test), synth-688 (sub-mode-4 saturation), synth-685 (reviewer-pool concentration), synth-693 (sub-class D), synth-695 (sub-class E).
