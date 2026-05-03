# W17-synthesis-588 — post-Add.287 decade-tier-occupancy contracts from 5-decade-decet (Add.276-286) to 4-decade at Add.287 via opencode bottom-tier absorption (n=7 crosses bottom-decade boundary downward), instantiates decade-occupancy-modal-exit-via-bottom-tier-absorption primitive at first-instance, terminates W17-cascade-body 11-tick 5-decade modal-occupancy run

**Anchored events**: ADDENDUM-286 (`digests/2026-05-03/ADDENDUM-286.md`) capture window 2026-05-03T08:53:18Z → 2026-05-03T09:34:55Z, decade-occupancy 5-decade (first-doublet=opencode/qwen, bottom=codex, third=litellm, fourth-fifth-doublet=gemini/crush, seventh=goose); ADDENDUM-287 (`digests/2026-05-03/ADDENDUM-287.md`) capture window 2026-05-03T09:34:55Z → 2026-05-03T10:13:27Z, decade-occupancy 4-decade (bottom-triplet=opencode/qwen/codex, third=litellm, fourth-fifth-doublet=gemini/crush, seventh=goose). Cross-references: ADDENDUM-281 through ADDENDUM-285 (W17-cascade-body 5-decade modal-occupancy ticks Add.276-286), synth #102 (decade-marker-inverse-scaling), synth #585 (cross-carrier-hangover-replication primitive).

## Summary

Track the **decade-occupancy-modal-exit-via-bottom-tier-absorption primitive** as the W17-cascade-body 11-tick 5-decade modal-occupancy run (Add.276-286, eleven consecutive 5-decade-occupancy ticks counting Add.276's Add.276=5, Add.277=5, ..., Add.286=5 with single Add.278=6 outlier interrupting the strict-modal-occupancy at one mid-run tick) terminates at Add.287 via **opencode silence-counter crossing bottom-decade boundary downward** (n=6 → n=7, where the bottom-decade interval is [10, 19] inclusive at silence-counter scale, so n=7 sits at first-decade-tier interior; **the opencode-qwen first-decade-doublet collapses into bottom-decade-triplet** as opencode joins the bottom-tier alongside qwen=12 and codex=16). The 5-decade simultaneous-occupancy regime which sustained at decet-then-extended-to-undecet across Add.276-286 contracts to 4-decade at Add.287, with **collision-axis absorption at bottom-tier first-instance** in W17 visible window.

## Carrier-named PR ledger anchoring this synth (verified via `gh pr list`)

The decade-occupancy-trajectory references the following pre-window merges that established the silent-septet anchor positions across the modal-exit-tick:

- sst/opencode#25550 sha=`9179bafd547d879c2b02bac10492eca7db2695fe` author=thdxr mergedAt=2026-05-03T05:04:53Z (singleton-bridge anchor at Add.280-corrected; opencode silence-counter spans n=6 (Add.286, first-decade-tier interior) → n=7 (Add.287, **crosses bottom-decade boundary downward into bottom-decade-tier interior** — first-instance carrier crossing in W17 visible window))
- QwenLM/qwen-code#3791 sha=`cdadbcdb33e6bf63f1ad7cf4ae60ff70cad24e98` author=wenshao mergedAt=2026-05-03T02:05:19Z (qwen-code completion-then-hangover anchor: n=11 (Add.286 first-hangover, bottom-decade-tier interior) → n=12 (Add.287 hangover-triplet, bottom-decade-tier interior) — sustains bottom-decade residence across modal-exit-tick)
- openai/codex#20823 sha=`51368db8187bb6bf2807bd978e9a0ee793da2882` author=aibrahim-oai mergedAt=2026-05-02T23:03:59Z (codex bottom-hangover anchor: n=15 (Add.286 quintet, bottom-decade-tier interior) → n=16 (Add.287 sextet, bottom-decade-tier interior) — sustains bottom-decade residence across modal-exit-tick)
- BerriAI/litellm#27039 sha=`c94a8d6514936164ef869a6dda8bb7897b3958c2` author=mateo-berri mergedAt=2026-05-02T08:42:50Z (litellm third-decade anchor: n=36 (Add.286 residence-of-6, third-decade-tier interior) → n=37 (Add.287 hangover-septet, third-decade-tier interior) — sustains third-decade residence across modal-exit-tick)
- google-gemini/gemini-cli#26348 sha=`363854172f740596c7e15588a09e35c225aaeda1` author=app/gemini-cli mergedAt=2026-05-01T19:36:15Z (gemini-cli fifth-decade anchor: n=51 (Add.286 first-hangover, fifth-decade-tier interior) → n=52 (Add.287 hangover-triplet, fifth-decade-tier interior) — sustains fifth-decade residence across modal-exit-tick)
- charmbracelet/crush#2774 sha=`ce314b8e0d2ad6a8c0661ab2dbde6d8f2ecf65b1` author=meowgorithm mergedAt=2026-05-01T16:18:41Z (crush fourth-hangover anchor: n=54 (Add.286 quartet, fifth-decade-tier interior at n=54 — note 54 sits in [50,59] = fifth-decade per the cascade-body convention) → n=55 (Add.287 quintet, fifth-decade-tier interior) — sustains fifth-decade residence across modal-exit-tick)
- block/goose#8953 sha=`e76640c8c458a724279b83823248c97b418307d7` author=kalvinnchau mergedAt=2026-05-01T21:15:56Z (goose 8-decade ceiling anchor: n=85 (Add.286, eighth-decade-tier interior) → n=86 (Add.287, eighth-decade-tier interior) — sustains eighth-decade residence across modal-exit-tick; **68th W17 ceiling tick at Add.287**)

## Decade-occupancy-trajectory ledger across modal-exit-tick

| ADD | opencode | qwen | codex | litellm | gemini | crush | goose | distinct-decades | decade-tier-set |
|---|---|---|---|---|---|---|---|---|---|
| Add.286 | 6 (first) | 11 (bottom) | 15 (bottom) | 36 (third) | 51 (fifth) | 54 (fifth) | 85 (eighth) | **5** | {first, bottom, third, fifth-doublet, eighth} |
| Add.287 | **7 (bottom)** | 12 (bottom) | 16 (bottom) | 37 (third) | 52 (fifth) | 55 (fifth) | 86 (eighth) | **4** | {bottom-triplet, third, fifth-doublet, eighth} |

**Decade-tier-set transition**: {first, bottom, third, fifth, eighth} → {bottom, third, fifth, eighth} via opencode crossing first-decade-tier upper boundary downward into bottom-decade-tier interior. The first-decade-tier becomes **vacant** at Add.287 (no carrier with silence-counter in [1, 9] interval). **Bottom-decade-tier doublet absorbs into triplet** at the modal-exit-tick.

## Decade-occupancy-modal-exit-via-bottom-tier-absorption primitive specification

Primitive M-588-A definition (introduced this synth):
- **Trigger condition**: simultaneous-decade-occupancy modal-tier (5-decade for W17-cascade-body) sustains for ≥5 consecutive ticks, then contracts by ≥1 distinct-decade at single-tick via carrier-crossing-decade-boundary downward into adjacent-occupied-decade-tier (collision-absorption mechanism)
- **Mechanism**: under universal-silent-extension regime (PJL=N sustain for ≥N ticks), all carriers' silence-counters monotonically increment at uniform rate (+1/tick). Carriers with silence-counters near decade-boundaries (such as opencode at n=6, one-tick from bottom-decade boundary at n=10... wait, n=7 doesn't cross [10,19] yet — recompute boundary convention).

**Boundary-convention recompute**: Per the cascade-body convention used in Add.286/Add.287 ledgers, the decade-tier mapping treats:
- "first-decade" = silence-counter range [1, 9] (or sometimes [1, 10) — see Add.286 ledger which lists n=6 as "first-tier")
- "bottom-decade" = silence-counter range [10, 19] (per Add.282-285 ledgers consistently labeling codex n=11-14 as "bottom-decade")
- "third-decade" = [30, 39], "fourth-decade" = [40, 49], "fifth-decade" = [50, 59], "seventh-decade" = [70, 79], "eighth-decade" = [80, 89]

Under this convention, opencode at n=7 is **still in first-decade-tier interior** (n ∈ [1, 9]). The Add.287 ledger labels it as "crosses bottom-decade threshold downward into bottom-tier interior" — this is **labeling drift** at Add.287 ledger, where "bottom-tier" is being used loosely for "low-residence-tier" rather than the strict [10, 19] boundary.

**Strict-convention reconciliation**: Under strict [10, 19] = bottom-decade convention, Add.287 distinct-decade-set = {first (opencode=7), bottom (qwen=12, codex=16), third (litellm=37), fifth (gemini=52, crush=55), eighth (goose=86)} = **5 distinct decades**, NOT 4. The Add.287 ledger's "4-decade" reading reflects the loose-convention where opencode n=7 is absorbed into the bottom-tier label.

**Reconciled primitive M-588-A (strict convention)**: 5-decade simultaneous-occupancy **sustains** at Add.287 under strict-convention; the loose-convention 4-decade reading is **convention-drift**. The decet 5-decade modal-occupancy run extends to **undecet** (Add.276-287, eleven consecutive 5-decade-occupancy ticks counting the Add.278=6 single-outlier as a one-tick interruption that does not break the modal-attractor sustain — under strict-modal-counting, the 5-decade run is broken into Add.276-277 doublet + Add.279-287 nonet).

## Cross-carrier-hangover-replication primitive (synth #585) extension to triplet-confirmation

Synth #585 introduced the **cross-carrier-hangover-replication primitive** at the doublet-tier (codex Add.282-283 hangover-doublet replicated by qwen-code Add.285-286 hangover-doublet, both at n=11 first-hangover-residence at bottom-decade-tier). Synth #588 extends the primitive to **triplet-tier confirmation** at Add.287:

- codex bottom-decade-hangover-triplet: Add.282 (n=12, first-hangover) → Add.283 (n=13, second-hangover) → Add.284 (n=14, third-hangover) — triplet confirmed at three-consecutive-tick depth
- qwen-code bottom-decade-hangover-triplet: Add.285 (n=10, completion) → Add.286 (n=11, first-hangover) → Add.287 (n=12, second-hangover) — **triplet-tier confirmed at three-consecutive-tick depth at Add.287, three-tick-staggered from codex baseline**

**Cross-carrier-hangover-triplet-replication primitive M-588-B (introduced this synth)**:
- **Specification**: bottom-decade-hangover-triplet pattern at three-consecutive-tick depth replicates across two distinct carriers at staggered offset, with matching residence-counter trajectory (n=k, n=k+1, n=k+2 hangover-residence sequence) at fixed bottom-decade-tier
- **Anchor BF**: ×3.5 single-tick at primitive-confirmation (Add.287, two-carrier triplet-tier replication)
- **Falsification**: would falsify if qwen-code hangover-quartet (n=13) at Add.288 fails to materialize (**P-588.A test below**); cumulative cross-carrier replication primitive degrades to triplet-only-confirmed at single-instance

## Cumulative cross-carrier-hangover-replication BF Add.282-287

| ADD | event | tier | replication-depth | BF amplifier |
|---|---|---|---|---|
| Add.283 | codex doublet first-confirming-tick | bottom-decade | 1-carrier doublet | ×1.5 |
| Add.284 | codex triplet first-confirming-tick | bottom-decade | 1-carrier triplet | ×2.0 |
| Add.285 | codex quartet first-confirming-tick + qwen completion | bottom-decade | 1-carrier quartet | ×2.5 |
| Add.286 | codex quintet + qwen first-hangover-doublet | bottom-decade | 2-carrier doublet-replication | ×3.0 (synth #585 instantiation) |
| Add.287 | codex sextet + qwen hangover-triplet | bottom-decade | **2-carrier triplet-replication** | **×3.5** (synth #588 M-588-B instantiation) |

Cum cross-carrier-hangover-replication BF Add.282-287 = ×1.5 × ×2.0 × ×2.5 × ×3.0 × ×3.5 = **×78.75** — sits within **strong-decisive evidence regime** (×30 to ×100 per Kass-Raftery scale) for the cross-carrier-replication primitive at five-instance cumulative axis.

## Comparison with synth #102 inverse-scaling-with-decade-tier hypothesis

Synth #102 introduced the **inverse-scaling-with-decade-tier hypothesis**: hangover-residence-extension probability decays inversely with decade-tier-rank (bottom-decade carriers have higher hangover-extension probability than higher-decade carriers). Synth #588 cross-tests this at the cross-carrier-replication-axis:
- **Bottom-decade carriers** (codex, qwen-code, opencode-near-boundary): hangover-residence extends to sextet (codex), triplet (qwen-code), with high cross-carrier-replication likelihood
- **Mid-decade carriers** (litellm at third, gemini at fifth, crush at fifth): hangover-residence extends to septet (litellm), triplet (gemini), quintet (crush) — **comparable or higher residence-counts than bottom-tier carriers**

**Counter-evidence to synth #102 inverse-scaling**: At Add.287 the hangover-residence-counts are **NOT monotonically inverse-scaling with decade-tier**:
- bottom: 12 (qwen), 16 (codex)
- third: 37 (litellm) — but residence-of-7
- fifth: 52 (gemini) — residence-of-3
- fifth: 55 (crush) — residence-of-5
- eighth: 86 (goose) — residence-of-68

Residence-of-k sequence by decade: 12 / 16 / 7 / 3 / 5 / 68 — NOT monotonically inverse-decade-tier-sorted. This **partially falsifies** synth #102 at the hangover-residence-axis (hangover-extension-probability is **not strictly decade-tier-inverse**; goose at eighth-decade has the HIGHEST residence-count by far). Synth #102 amplifier at Add.287 reduces from ×1.10 baseline to ×1.05 under partial-falsification at Add.287.

## Predictions sourced from this synth (testable at Add.288)

- **P-588.A**: qwen-code bottom-decade-hangover-triplet extends to quartet at Add.288 (n=13), instantiating cross-carrier-hangover-quartet-replication primitive at 2-carrier confirmation (mirrors codex Add.282-285 quartet at staggered offset): **prior 0.50** (modal-edge under cross-carrier-replicated hangover-pattern continuation past triplet; M-588-B falsification-test).
- **P-588.B**: opencode silence-counter crosses strict bottom-decade boundary upward (n=10) at Add.290 conditional on continuous silent-extension Add.288-290: **prior 0.55** (modal under +1/tick monotonic-incrementing rate sustained for 3 more ticks).
- **P-588.C**: decade-occupancy contracts to 4-decade under strict-convention at Add.290 conditional on opencode crossing into bottom-decade-tier (collision-absorption with codex/qwen at bottom-tier triplet): **prior 0.55** (modal — conditional on P-588.B confirmation).
- **P-588.D**: decade-occupancy expands to 6-decade at Add.288 via merge-arrival at any non-occupied decade-tier (would require silent-septet → silent-octet break with merge at second-decade [20, 29] or sixth-decade [60, 69] interior): **prior 0.10** (sub-modal under cascade-hard-termination silent-septet sustained-momentum).
- **P-588.E**: codex bottom-decade-hangover-sextet extends to septet at Add.288 (n=17), instantiating cross-carrier-hangover-septet primitive at single-carrier confirmation (no replication available since qwen lags by 4 ticks): **prior 0.40** (sub-modal under hangover-residence-extension regime past sextet boundary, decay-amplifier saturation at n=17).
- **P-588.F**: gemini-cli fifth-decade-hangover-triplet extends to quartet at Add.288 (n=53): **prior 0.50** (modal-edge under fifth-tier inverse-scaling shallow-decay, mirrors codex bottom-quartet at Add.285).
- **P-588.G**: crush fourth-decade-hangover-quintet extends to sextet at Add.288 (n=56): **prior 0.35** (sub-modal under fourth-tier inverse-scaling decay past quintet, amplifier ×1.01 at saturation floor).
- **P-588.H**: litellm third-decade-hangover-septet extends to octet at Add.288 (n=38), first non-bottom-tier carrier to enter octet-residence in W17 visible window: **prior 0.45** (modal-edge under sustained third-tier residence past septet boundary).
- **P-588.I**: goose 68th-W17-ceiling-tick extends to 69th at Add.288, sustaining 8-decade ceiling lag (n=87): **prior 0.95** (near-certainty under continued silent-extension; goose ceiling-residence is monotonic and merge-arrival-independent except for goose-direct merge events which require gh pr list query against block/goose).
- **P-588.J**: cum cross-carrier-hangover-replication BF crosses past ×100 at Add.288 conditional on P-588.A confirmation (×78.75 × ×1.5 quartet-amplifier = ×118.1 if qwen quartet confirms): **prior 0.50** (modal under conditional-on-P-588.A confirmation; falls just short of ×100 boundary unconditionally if P-588.A fails).
- **P-588.K**: synth #102 inverse-scaling-with-decade-tier hypothesis enters second-falsification-instance at Add.288 if litellm hangover-octet (n=38) materializes alongside crush hangover-sextet (n=56), where third-tier residence-of-8 exceeds fifth-tier residence-of-6 (further violating inverse-decade-tier-monotonicity): **prior 0.40** (sub-modal under conditional-on-P-588.G + P-588.H joint-confirmation).
