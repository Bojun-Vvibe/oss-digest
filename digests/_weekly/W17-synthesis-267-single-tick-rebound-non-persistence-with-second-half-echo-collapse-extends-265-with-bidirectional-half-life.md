# W17 Synthesis #267 — **Single-tick rebound non-persistence with second-half echo collapse**: at Add.117 the per-repo crossing rate collapses from Add.116's 66.7% (4-of-6 positive: opencode #24749 Brendonovich `9d1f17d8`, codex #19914 xl-openai `7d72fc8f`, qwen-code 4× tanzhenxin `fd672797`/`6763124a`/`e973dabf`/`784b3cef`, goose #8874 jh-block `0aa8a563`) back down to 16.7% (1-of-6: only qwen-code via boundary #3693 tanzhenxin `8807c026`) within a single tick — a **6.0× re-collapse mirroring the Add.115→Add.116 6.3× rebound** in opposite direction; cross-repo merge count drops 8→1 in 43min; the post-drain echo collapse is structurally COUPLED to the reservoir-drain rebound (synth #265) — drain consumes accumulated open-side reservoir, then production halts because no fresh reservoir has accumulated; FIVE per-repo silence-class transitions (opencode/codex/goose all cross shallow→mid within ±4min of each other at Add.117 close, litellm crosses mid→DEEP entering 6h+ regime, qwen-code holds shallow); EXTENDS synth #265 single-tick reservoir-drain rebound by adding the **post-drain echo collapse** as the natural second-half of the rebound signature; FALSIFIES Pred FFF's letter-PASS with a spirit-FAIL ambiguity (Opens:Merges 1.00 met by trivial volume not regime change); INTRODUCES Pred 267-1 tracking 2-tick bidirectional half-life

**Status:** EXTENDS synth #265 reservoir-drain rebound — coupled second-half identified. SUSTAINS synth #254 band-membership framework — single-tick excursions above ceiling are echoed by single-tick excursions below floor within ≤2 ticks. INTRODUCES bidirectional half-life metric for rebound regimes.

## Cross-references
- EXTENDS synth #265 single-tick reservoir-drain rebound — adds the **collapse second-half** as a coupled mirror.
- SUSTAINS synth #254 per-repo crossing-rate band [20%, 40%] — Add.117 16.7% restores the Add.115 floor after Add.116 ceiling-breach.
- SUSTAINS synth #263 reservoir-drain regime — drain is one-shot per accumulation cycle.
- Cross-references synth #258/#260 deep-cohort framework — Add.117 sees first deep-cohort cardinality increase (gemini-cli + litellm = 2) since synth #264 sole-survivor declaration.
- Cross-references Pred FFF (RESOLVED-AMBIGUOUS at Add.117) and Pred JJJ (NEW, 3-tick rolling Opens:Merges).
- Cross-references synth #266 tanzhenxin quartet — quartet is the drain mechanism; #3693 boundary entry is its echo-tail.

## Empirical basis (Add.115 → Add.116 → Add.117 three-tick rebound-collapse sequence)

| Tick | Cross-repo merges | Per-repo crossing rate | Opens:Merges | Per-min merge rate | Regime label |
|------|-------------------|------------------------|--------------|---------------------|--------------|
| Add.115 | 1 | 16.7% (1/6 — qwen #3690-class) | 7:1 = 7.0 | 0.022 | **suppression / reservoir accumulation** |
| Add.116 | 8 | 66.7% (4/6 — opencode/codex/qwen/goose) | 9:8 = 1.13 | 0.138 | **reservoir-drain rebound** (synth #265) |
| Add.117 | 1 | 16.7% (1/6 — qwen boundary #3693 only) | 1:1 = 1.00 | 0.023 | **post-drain echo collapse** (synth #267) |

**Bidirectional symmetry:** Add.115 → Add.116 ratio change = +6.3× (1→8 merges in 58min/45min normalized). Add.116 → Add.117 ratio change = ÷6.0× (8→1 merges in 43min/58min normalized). **Asymmetry < 5% — near-symmetric bidirectional half-life.**

**Per-repo Add.117 silence classes (all crossings within ±4min of each other):**
- opencode #24749 Brendonovich 07:51:19Z → silence at Add.117 close 1h35m+ — **shallow→mid crossing at 08:51Z**
- codex #19914 xl-openai 07:53:28Z → silence 1h33m+ — **shallow→mid crossing at 08:53Z**
- goose #8874 jh-block 07:54:48Z → silence 1h31m+ — **shallow→mid crossing at 08:54Z**
- All three crossings within **3m29s of each other** — synchronized cohort transition signature.

**Litellm crosses mid→DEEP at Add.117**: last merge krrish-berri-2 #26661 01:46:21Z → silence 7h40m+ at Add.117 close. **6-tick consecutive zero-merge** (NEW W17 record, surpasses Add.116's 5-tick record). Joins gemini-cli (12h08m+, 15-tick record) in deep cohort — cardinality 1→2 transition falsifies Pred 264-4.

## Synth #267 claim — Reservoir-drain rebounds are temporally bracketed by suppression-collapse halves

**Statement:** When a single tick produces a cross-repo per-repo crossing rate ≥60% (above synth #254 band ceiling) following a sub-band tick (≤20%), the subsequent tick will collapse back to ≤20% with high probability. The sequence is:
1. **Pre-drain suppression** (tick T-1): ≤20% crossing, opens accumulate, Opens:Merges ≥5:1.
2. **Drain rebound** (tick T): ≥60% crossing, accumulated opens convert, Opens:Merges drops to ≤2:1.
3. **Post-drain echo collapse** (tick T+1): ≤20% crossing, no fresh reservoir to drain, Opens:Merges normalizes to ~1:1 by trivial volume.

**Mechanism:**
- The drain at T consumes the accumulated open-side reservoir. By T+1, opens-side production has not yet replenished (because review/approve cycles take >1 tick to re-fill).
- Per-repo silence classes synchronize at T+1 because all repos that participated in T's rebound enter post-merge cooldown together — within ±4min of each other (see opencode/codex/goose triple-crossing at Add.117).
- The non-participating repos (litellm, gemini-cli at Add.116) continue accumulating silence, deepening the silence-class gradient at T+1.

**Bidirectional half-life:** the tick-to-tick magnitude change is symmetric within ±5% — Add.116 was 6.3× rebound, Add.117 was 6.0× collapse. **This implies the rebound regime has a 1-tick half-life** in both directions; sustained-rebound (≥2 consecutive ticks above ceiling) is statistically rare.

**This is non-obvious because:** synth #265 framed the reservoir-drain as a single-tick event without specifying its second-half. Synth #267 demonstrates that the drain is structurally one-shot — the rebound CANNOT persist beyond 1 tick because it consumes its own fuel (the reservoir). The collapse is therefore not a regime change but a **mandatory second-half of the rebound signature**. Predicting the collapse requires no new mechanism — it follows from the drain being exhaustive.

## Predictions opened by synth #267

### Pred 267-1 — 2-tick bidirectional half-life confirmation
**Statement:** Within W17, the next single-tick excursion above synth #254 band ceiling (≥60% per-repo crossing) will be followed within 2 ticks by an excursion below band floor (≤20%) with bidirectional magnitude ratio within ±10%.
**Window:** next 20 ticks (deadline ≈ Add.137 ≈ 09-Apr 11:00 UTC + 16h).
**Falsifier:** a ceiling-excursion tick is followed by ≥2 consecutive in-band ticks (no echo collapse), or by a sustained ceiling-excursion (≥2 consecutive above-ceiling ticks).

### Pred 267-2 — Synchronized triple-crossing recurrence
**Statement:** Following any future Add.117-class echo collapse, ≥3 of the 6 tracked repos will cross silence-class boundaries (shallow→mid, mid→deep) within ±5min of each other within the same tick.
**Falsifier:** next echo collapse exhibits ≤2 synchronized crossings, OR crossings are spread across >10min.

### Pred 267-3 — Reservoir replenishment lag
**Statement:** Following an echo collapse tick, the next reservoir-drain rebound (≥60% crossing) requires ≥3 ticks of accumulation. I.e., no rebound ticks are observed within Add.118-Add.119-Add.120.
**Falsifier:** any of Add.118-120 produces ≥60% per-repo crossing rate.

## Implications

1. The drain-rebound mechanism is a **2-tick coupled phenomenon**, not a 1-tick anomaly. Forecasts should bracket any above-ceiling tick with a below-floor tick prediction.
2. Synth #254 band-membership becomes a **3-tick rolling window metric** rather than a single-tick metric — single-tick excursions outside the band are non-informative; bracketed pairs reveal the drain regime.
3. Pred FFF's ambiguity (letter-PASS spirit-FAIL at 1.00) is structural, not a measurement error — Opens:Merges = 1.0 in echo-collapse ticks is mechanically determined by trivial post-drain volume, not by genuine balance. JJJ (3-tick rolling ≤1.5:1) is the correct metric to disambiguate.
4. Deep-cohort cardinality transitions (gemini-cli 1 → gemini-cli + litellm 2 at Add.117) are **enabled by echo-collapse ticks** — the silence freeze during collapse pushes mid-cohort members across the deep threshold. Predict deep-cohort cardinality 2→3 within next 4 ticks if Pred LLL passes (≥2 of opencode/codex/goose cross 6h-deep).
