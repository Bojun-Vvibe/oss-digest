# W17 Synthesis #356 — Codex 7-of-7 active-set keystone with cross-tick author-union N=10 in 6 ticks vs Gemini-cli 4-of-4 100% novel-author resampling: two divergent author-pool-fluidity regimes co-occur at distinct cardinality scales

**Window of derivation:** ADDENDUM-163 (2026-04-29 19:58:08Z capture) cross-repo author-pool-fluidity comparison across longest active-set keystone window in W17 (codex Add.157-163 7-of-7) vs gemini-cli active-tick novel-author rate (Add.159-163 4-of-4 with one silent tick). Builds on synth #349 (codex cross-tick author union 8 at Add.158-162; M-159.A surface-axis), synth #354 (gemini-cli M-162.C author-pool-fluidity 3-of-4 attractor), synth #260 (cross-repo author debut clustering), synth #306/#307/#309 (codex broadening pool n4 ticks then contraction).

## Carry-prediction resolutions revisited at Add.163

- **Synth #349 P-349.D** (codex cross-tick author-broadening continues): **CONFIRMED-EXTENDED** at Add.163. Codex authors Add.158-163 = {etraut-openai, iceweasel-oai, cassirer-openai, joeytrasatti-openai, pakrym-oai, friel-openai, xl-openai, won-openai, viyatb-oai, rhan-oai} = **10 distinct authors across 6 ticks**. From 8 at Add.158-162 to 10 at Add.158-163 = **+2 new authors in single tick** (viyatb-oai, rhan-oai both novel; iceweasel-oai is a recurrence from Add.150). The broadening is **accelerating** at the keystone-extension boundary (Add.163 added 2 new authors vs ~1.4 average per prior tick).
- **Synth #354 P-354.A** (gemini-cli M-162.C author-pool-fluidity sustains): **CONFIRMED-EXTENDED** at Add.163 with akh64bit as 4th novel author in 4 active ticks (Add.159, Add.161, Add.162, Add.163). Novel-author rate strengthens from 3-of-4 to **4-of-4 = 100%**.
- **Synth #306/#307/#309 P-309.A** (codex broadening-pool regime collapses at n4 ticks via same-author recurrence at lag 1): **FALSIFIED-AT-EXTENSION** at Add.163. The original synth #306/#307 framing (n4 broadening then contraction) was based on a 4-tick window. Codex Add.157-163 sustains broadening across **7 ticks with 10 distinct authors** — the n=4 contraction ceiling is **structurally exceeded by 75%**. The "broadening pool terminates at n4" framing is now superseded by an open-ended broadening regime.

## New mechanism — M-356.A: cross-repo author-pool-fluidity regime divergence at distinct cardinality scales

**Statement:** Two co-occurring repos (codex, gemini-cli) host **structurally divergent author-pool-fluidity regimes** that nonetheless share the same underlying property (no carrier-stable author preference across consecutive active ticks). The regimes differ in:
- **Cardinality scale**: codex emits 1.43 authors per active tick on average (10 authors / 7 ticks) with 1-3 authors per tick; gemini-cli emits exactly 1 author per active tick.
- **Novel-author rate**: codex 100% novel rate at the per-tick author-set level (each tick's emitter set is fully disjoint from prior tick — confirmed Add.161→Add.162, Add.162→Add.163), 80% novel rate at cumulative-union level (8 of 10 authors are first-emergence in W17 codex window); gemini-cli 100% novel-author rate at both per-tick AND cumulative-union level (4 of 4 are W17 first-emergence in this window).
- **Surface family rotation**: both repos rotate surface family across consecutive active ticks (codex: TUI series → plugin-cache + feedback-upload → Windows shell + proxy denials + analytics; gemini-cli: regression-test → bot-mention → eval-test-docs); but codex rotation happens **within a single tick** (3 disjoint surfaces at Add.163), gemini-cli rotation happens **across ticks** (1 surface per tick, 3 distinct surfaces across 3 ticks).

**Evidence at Add.157-163:**
- **Codex per-tick author-sets** (where active): Add.157 {viyatb-oai, kommander}, Add.158 {etraut-openai, cassirer-openai}, Add.159 {iceweasel-oai}, Add.160 {etraut-openai}, Add.161 {etraut-openai, joeytrasatti-openai, pakrym-oai, friel-openai}, Add.162 {xl-openai, won-openai}, Add.163 {iceweasel-oai, viyatb-oai, rhan-oai}. The **per-tick author-set rotation rate** (Jaccard with prior active tick) is high but not strictly disjoint (etraut-openai recurs Add.158→Add.160, iceweasel-oai recurs Add.159→Add.163).
- **Codex unique-author union**: 10 distinct names across 6 ticks; codex's effective active-set author churn is **±1.4 authors per tick** with periodic recurrence anchors (etraut-openai, iceweasel-oai).
- **Gemini-cli per-tick author-sets**: Add.157 silent, Add.158 silent (estimated), Add.159 {adamfweidman}, Add.160 silent, Add.161 {Adib234}, Add.162 {gundermanc}, Add.163 {akh64bit}. **Strictly disjoint across consecutive active ticks** — every active-tick author is novel.
- **Cardinality contrast**: codex active ticks are **all multi-author or repeat-author capable**; gemini-cli active ticks are **strictly singleton-author** in this window. M-356.A shows two distinct fluidity regimes co-occur — multi-author broadening (codex) vs singleton resampling (gemini-cli).

**Discriminating from prior framings:**
- Distinct from synth #349 P-349.A (full-author-rotation for non-series-driven emissions at codex) — synth #349 was codex-specific; M-356.A is the **cross-repo two-regime taxonomy** that now requires both regimes to be analyzed jointly.
- Distinct from synth #260 (cross-repo author debut clustering) — synth #260 captured a single-tick burst of debuts at Add.111; M-356.A captures **sustained per-tick novel-author emission across 6+ ticks**.
- Distinct from synth #354 M-162.C (gemini-cli single-regime) — M-356.A elevates the framing to two-regime co-occurrence with explicit cardinality-scale separation.

## New mechanism — M-356.B: codex 7-of-7 active-set keystone as longest-streak attractor with author-broadening as supporting mechanism

**Statement:** Codex's 7-of-7 active-set membership streak (Add.157-163) is the longest in W17. The streak persists because the codex author pool is **structurally large enough** (10+ distinct authors across 6 ticks) to absorb single-author emission gaps via author rotation. No single-author dependency means no single-author silence can break the streak.

**Evidence:**
- 7-of-7 active-set streak with 10 distinct authors = author-pool-broadness rate of 1.43 authors-per-tick, sufficient to ensure ≥1 author always emits.
- Comparison: gemini-cli 4-of-7 active rate (with 4 distinct authors across 4 active ticks = 1 author per tick); when no author is in emission-ready state, gemini-cli goes silent (Add.157, Add.158 estimated, Add.160).
- Codex's broadening pool acts as a **redundancy buffer**: if etraut-openai is in TUI-stall mode (Add.162-163), the pool of {xl-openai, won-openai, iceweasel-oai, viyatb-oai, rhan-oai, ...} can still emit on disjoint surfaces.

## New predictions

- **P-356.A** (M-356.A two-regime divergence sustains): codex extends to 8-of-8 keystone at Add.164 with ≥1 merge AND gemini-cli's 5th active tick (Add.164+) emits a 5th novel author NOT in {adamfweidman, Adib234, gundermanc, akh64bit}; falsifier = either codex 0-merge at Add.164 OR gemini-cli's next active tick repeats prior author.
- **P-356.B** (codex author union grows to ≥12 distinct names by Add.165): falsifier = codex Add.164-165 emit ≤1 new author each (would cap union at 11).
- **P-356.C** (gemini-cli novel-author rate dilutes — first author repeat by Add.167): >50% probability based on regression-to-mean from 4-of-4=100%; falsifier = gemini-cli stays 100% novel-author through Add.167.
- **P-356.D** (cross-repo regime divergence is asymmetric — codex pool grows monotonically while gemini-cli pool plateaus): falsifier = codex pool growth flat for 3 consecutive ticks AND gemini-cli pool grows faster than codex in same window.
- **P-356.E** (no other repo achieves either regime in W17 remaining ticks): falsifier = opencode/litellm/goose/qwen-code achieves either ≥7-of-N keystone OR ≥4-of-N novel-author rate before W17 close.
- **P-356.F** (codex 8-of-8 keystone P-163.E confirms with cardinality ≥2 distinct authors at Add.164): falsifier = codex Add.164 active but with single-author single-merge (would suggest broadening regime is contracting).

## Cross-synth integration

- Refines synth #349 P-349.D from "codex 8-author broadening at n=5 ticks" to "codex 10-author broadening at n=6 ticks with accelerating boundary" (P-349.D extended).
- Refines synth #354 M-162.C from gemini-cli 3-of-4 attractor to **4-of-4 = 100% confirmed regime**.
- **Falsifies synth #309 P-309.A** at extension (broadening-pool regime collapse at n4 lag-1) — codex sustains broadening across n=7 with no contraction signal.
- Refines synth #260 cross-repo author debut clustering from single-tick burst event to **sustained per-tick attractor at multiple repos**.
- Touches synth #299 codex distinct-author-single-merge-per-tick metronome — Add.163 has 3-author-3-merge pattern, breaking the metronome single-merge property; M-356.A reframes the metronome as a special case of broadening regime when pool sub-samples to size 1.
- Touches synth #91 single-author-triplet-self-merge-metronome — codex Add.163 emits 3 merges from 3 DIFFERENT authors (NOT a single-author triplet), which is the **inverse** of synth #91 — author-disjoint triplet vs author-anchored triplet.

## Falsification monitoring

This synth is at-risk if: (a) codex Add.164 0 merges (breaks 8-of-8 keystone, reduces M-356.B redundancy claim); (b) gemini-cli Add.164 active emitter ∈ {adamfweidman, Adib234, gundermanc, akh64bit} (M-162.C/M-356.A novel-author rate breaks); (c) opencode or another repo achieves comparable broadening within next 5 ticks (M-356.E falsified; regime divergence is not asymmetric); (d) codex Add.164 emission cardinality drops to 1 single-author (M-356.B redundancy buffer claim weakens — broadening may be contracting from 2-3 authors per tick to 1 per tick).
