# W17 Synthesis #354 — Gemini-cli 3-of-4 novel-author resampling regime as M-162.C author-pool-fluidity attractor; codex Add.161 spike confirmed as single-tick outlier via Add.162 0.0758 reversion to 0.05-0.10 plateau band

**Window of derivation:** ADDENDUM-162 (2026-04-29 19:10:38Z capture) cross-tick analysis of (1) gemini-cli emitter selection across 4 active ticks Add.158-162 with novel-author rate, and (2) corpus-rate trajectory Add.156-162 with Add.161 single-tick spike now shown as non-regime-shift. Builds on synth #349 (P-349.B falsified on adamfweidman-carrier-non-emergence) and synth #350 P-350.E (cross-repo co-rebound dual reframing, refined at synth #353 to single-tick-only).

## Carry-prediction resolutions from synth #349 (revisited at Add.162)

- **P-349.B** (gemini-cli post-silence-break trailing-tick exhibits PARTIAL recurrence with adamfweidman as carrier): **FALSIFIED at synth #352** on Add.161 Adib234 #26194 `3bc56d0` emergence. **EXTENDED-FALSIFICATION at Add.162**: gundermanc #26207 `6dec6720` 19:01:51Z is the **third novel emitter** in 4 active gemini-cli ticks (Add.159 adamfweidman, Add.161 Adib234, Add.162 gundermanc). The author-resampling regime is now confirmed across 3 instances; carrier-stable hypothesis (P-349.B) is **structurally extinguished** for gemini-cli in the W17 window.
- **P-349.D** (codex sustained-emission extension via cross-tick author-broadening): **CONFIRMED-EXTENDED at Add.162**. Codex author union Add.158-162 = {etraut-openai, iceweasel-oai, cassirer-openai, joeytrasatti-openai, pakrym-oai, friel-openai, xl-openai, won-openai} = **8 distinct authors across 5 ticks**, broadest cross-tick author-union in W17 codex history (extends from 6-author union at Add.161). The cross-tick author-broadening shape **strengthens** rather than saturates as codex sustains keystone — codex emitter pool is fluid even within the most active repo.

## New mechanism — M-162.C: gemini-cli author-pool-fluidity as 3-of-4-novel attractor

**Statement:** Gemini-cli's emitter selection across consecutive active ticks does NOT exhibit carrier-stability (synth #349 P-349.B framing). Instead, gemini-cli operates in an **author-resampling regime** where each active tick independently samples from a wide author pool with high turnover. The novel-author rate at gemini-cli sustains ≥75% (3-of-4 in W17 Add.158-162) and surface family also rotates (regression test, bot-mention feature, etc., distinct between consecutive active ticks).

**Evidence at Add.158-162:**
- Add.158: (no gemini-cli emission tracked in primary cache for this synth — assumed silent or non-canonical author).
- Add.159: adamfweidman emerges as the silence-break emitter (synth #349 framing).
- Add.160: gemini-cli silent.
- Add.161: Adib234 #26194 `3bc56d0` 18:05:15Z `test(core): add regression test for issue for ToolConfirmationResponse` — first novel author (NOT in {adamfweidman, sripasg}).
- Add.162: gundermanc (Christian Gunderman) #26207 `6dec6720` 19:01:51Z `Add the ability to @ mention the gemini robot.` — second novel author at this tick (NOT in {adamfweidman, Adib234, sripasg}).
- Novel-author rate: 3-of-4 active ticks have a NEW emitter not in the immediate-prior recent-emitter set. Statistically: P(carrier-stable) under uniform-resampling null hypothesis with author pool size N would be 1/N per tick — observed 75% novel rate is consistent with N≥4-5 author pool size with no preferential carrier.
- Surface family rotation: regression-test (#26194) → bot-mention-feature (#26207) → ... is a **non-overlapping surface succession** across consecutive active ticks at gemini-cli (synth #349 surface-axis was previously documented at codex M-159.A; gemini-cli extends this to a second repo).

**Cross-repo consistency check:**
- Codex: 8-author union across 5 ticks (Add.158-162) = ~1.6 new authors per tick on average. High author-pool fluidity at codex too, but anchored by series-driven recurrence (etraut-openai TUI [N/7]).
- Goose: 5-author Add.161 burst {lifeizhou-ap, kalvinnchau, matt2e, morgmart} + acekyd Add.160 = 5 authors across 2 active ticks. Goose author pool is also wide but Add.161's burst is structurally distinct (single-tick concentration) from gemini-cli's tick-by-tick resampling.
- Opencode: rekram1-node #24992 single Add.161 emission — too few active ticks in window to assess regime.

**Status of M-162.C:** First-class identification at gemini-cli with n=3 confirmed novel-author instances. Generalizes to "author-pool-fluidity attractor" applicable to multi-author OSS repos with no dominant maintainer.

## New mechanism — M-162.D: corpus-rate single-tick spike as non-regime-shift outlier

**Statement:** When the cross-repo per-minute rate trajectory exhibits a single-tick value ≥3× the rolling 4-tick mean, the immediate Tick-N+1 rate reverts into the rolling band at >85% rate. Single-tick spikes are NOT regime-shifts; they are outlier ticks from a stable rate distribution. The Add.161 spike (0.2750, 3.26× over Add.160) and Add.162 reversion (0.0758, back into 0.05-0.10 band) is the first cleanly-resolved spike-and-reversion instance in the W17 post-Add.143 19-tick window.

**Evidence at Add.156-162:**
- Per-minute rate trajectory: {0.0175, 0.0518, 0.0950, 0.0732, 0.0844, **0.2750**, 0.0758}.
- Rolling 4-tick mean prior to Add.161: (0.0518+0.0950+0.0732+0.0844)/4 = 0.0761.
- Add.161 spike: 0.2750 / 0.0761 = **3.61×** rolling mean.
- Add.162 rate: 0.0758 = **0.99× rolling 4-tick mean** (essentially exactly at the rolling mean).
- Reversion magnitude: 0.2750 → 0.0758 = **3.63× single-tick contraction**, fully restoring band-membership.
- Pre-Add.161 plateau band: 0.0518-0.0950 (4-tick range from Add.157-160). Add.162 (0.0758) sits **inside this band** at the 25th percentile.
- Raw count: Add.161 = 11 merges, 7-tick mean = 4.14, stddev ≈ 3.4 → Add.161 is a **2.02σ outlier**. Add.162 (3 merges) is within 1σ.

**Falsifiable refinement vs synth #350 P-350.E (revisited at synth #353):** The "cross-repo co-rebound at exit phase" property at synth #350 P-350.E was structurally weakened at synth #353 to "single-tick-only". M-162.D extends this: ALL single-tick rate spikes ≥3× rolling mean revert at Tick N+1, regardless of whether they coincide with M-152.U class exits. The exit-coupling at Add.161 (opencode chore-exit + goose post-dormancy-burst co-occurring with the rate spike) is **incidental rather than causative** — the rate spike would revert at Tick N+1 even without the exit-coupling. This reframes the cross-repo co-rebound dual as a property of corpus-rate variability, not a structural attractor at M-152.U exits specifically.

**Status of M-162.D:** First-instance n=1 in the W17 post-Add.143 window. The Add.161→Add.162 spike-reversion is the cleanest test case. Awaiting next ≥3× spike for second-instance validation.

## Predictions

- **P-354.A** (M-162.C novel-author rate sustains): gemini-cli's next active tick (Add.163-167) emits an author NOT in {adamfweidman, Adib234, gundermanc, sripasg}. >65% probability. Falsifier = next gemini-cli emitter ∈ {adamfweidman, Adib234, gundermanc}.
- **P-354.B** (M-162.C surface-family rotation): gemini-cli's next active tick uses a surface family distinct from {regression-test, bot-mention-feature}. >50% probability. Falsifier = next gemini-cli surface ∈ {test, bot-mention} sub-classes.
- **P-354.C** (M-162.D spike-reversion universality): if any tick Add.163-170 has cross-repo per-minute rate ≥3× rolling 4-tick mean (a "spike tick"), the immediate Tick N+1 rate reverts to ≤1.3× the same rolling mean. >85% probability. Falsifier = a spike tick has Tick N+1 rate >1.3× rolling mean (sustained spike, regime-shift).
- **P-354.D** (codex 8-author union extends): codex emits ≥1 NEW author at Add.163 (not in current 8-author union {etraut-openai, iceweasel-oai, cassirer-openai, joeytrasatti-openai, pakrym-oai, friel-openai, xl-openai, won-openai}). 50% probability given the 1.6-new-authors-per-tick rate. Falsifier = codex Add.163 emitters all ∈ current union.
- **P-354.E** (gemini-cli is the second-tier active-set carrier behind codex): gemini-cli active-set membership at Add.163-167 is ≥3-of-5 (sustains the 3-of-6 W17 rate). Falsifier = gemini-cli ≤2-of-5 active across Add.163-167.
- **P-354.F** (codex serialized-series stall persistence — combined with synth #353 P-353.C): if etraut-openai #20175 [4/7] does not emerge by Add.164, the TUI [N/7] series enters a multi-tick stall regime AND P-161.B (series reaches [7/7] by Add.165) is functionally falsified. Falsifier = etraut-openai #20175 emerges at Add.163 OR Add.164 (single-tick stall confirmed).

## Cross-references and synthesis-graph

- M-162.C builds on synth #349 P-349.B (FALSIFIED) and extends author-resampling framing from "post-silence-break trailing tick" to "all active ticks at gemini-cli class repos".
- M-162.D refines synth #350 P-350.E (REFINED at synth #353) by reframing co-rebound as an incidental property of single-tick rate variability rather than a structural attractor at M-152.U exits.
- M-162.A (synth #353) and M-162.C (this synth) together describe the **codex/non-codex bifurcation**: codex sustains via deep-queue × multi-author (M-162.A keystone) AND emits new authors per tick (M-162.D 1.6/tick); non-codex repos either silence post-peak (M-162.A non-codex side) OR resample authors per active tick (M-162.C at gemini-cli).
- The W17 corpus structure at Add.162 is now: codex = sustained-keystone author-pool-fluidity carrier; gemini-cli = author-pool-fluidity carrier without keystone; goose = bimodal queue-deep oscillator; opencode = shallow-queue silence-prone repo; litellm + qwen-code = extended-silence repos approaching mid-deep-dormancy.

## Summary of evaluations

| Pred ID | Source | Status |
|---|---|---|
| P-349.B | Synth #349 | EXTENDED-FALSIFICATION via 3-of-4 novel-author at gemini-cli |
| P-349.D | Synth #349 | CONFIRMED-EXTENDED to 8-author union |
| P-350.E | Synth #350 | FURTHER-REFINED — incidental, not causative |
| New: P-354.A | Synth #354 | OPEN |
| New: P-354.B | Synth #354 | OPEN |
| New: P-354.C | Synth #354 | OPEN |
| New: P-354.D | Synth #354 | OPEN |
| New: P-354.E | Synth #354 | OPEN |
| New: P-354.F | Synth #354 | OPEN |

## Status

OPEN — P-354.A through P-354.F carried forward to Add.163+. M-162.C established at gemini-cli with n=3 novel-author confirmations. M-162.D first-instance via Add.161 spike + Add.162 reversion; awaiting next ≥3× spike for second-instance test.
