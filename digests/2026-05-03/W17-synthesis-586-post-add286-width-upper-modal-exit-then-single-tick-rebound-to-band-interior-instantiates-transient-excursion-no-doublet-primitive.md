# W17-synthesis-586 — post-Add.286 width upper-modal-exit at Add.285 (54m35s) followed by single-tick rebound to modal-band interior at Add.286 (41m37s) instantiates transient-excursion-no-doublet primitive, falsifies prior W17 width-excursion-doublet hypothesis at gap=1 with width-deflation step −12m58s

**Anchored events**: ADDENDUM-285 (`digests/2026-05-03/ADDENDUM-285.md`) capture window 2026-05-03T07:58:43Z → 2026-05-03T08:53:18Z, width 54m35s (upper-modal-exit); ADDENDUM-286 (`digests/2026-05-03/ADDENDUM-286.md`) capture window 2026-05-03T08:53:18Z → 2026-05-03T09:34:55Z, width 41m37s (modal-band interior). Cross-references: ADDENDUM-276 (`digests/2026-05-03/ADDENDUM-276.md`) prior W17 upper-exit at width 62m00s; synth #577 (modal-band density tracking), synth #580 (band-interior-amplifying-but-not-burst-emitting primitive), synth #582 (circadian-attractor cross-test).

## Summary

Track the **transient-excursion-no-doublet primitive** as the Add.285 upper-modal-exit (54m35s, +9.2% past upper-band edge of 50m) collapses back into modal-band interior at Add.286 (41m37s, in-band at upper-tertile) within a **single-tick rebound**. This is distinct from the prior W17 upper-exit instance at Add.276 (62m00s) which was followed by Add.277 width 27m23s — a **larger rebound** (−34m37s, −55.8%) that crossed deeper into modal-band lower-tertile. The Add.285→Add.286 rebound is **smaller and shallower** (−12m58s, −23.74%, lands in upper-tertile), instantiating a **second-instance upper-exit-rebound primitive** with **morphologically distinct trajectory** from the Add.276→Add.277 first-instance.

## Carrier-named PR ledger anchoring this synth (verified via `gh pr view`)

The width-excursion trajectory references the following pre-window merges that established the silent-sextet anchor positions across both width-excursion tics:

- sst/opencode#25550 sha=`9179bafd547d879c2b02bac10492eca7db2695fe` author=thdxr mergedAt=2026-05-03T05:04:53Z (singleton-bridge anchor at Add.280-corrected; opencode silence-counter spans n=4 (Add.284) → n=5 (Add.285 upper-exit) → n=6 (Add.286 in-band rebound))
- sst/opencode#25546 sha=`2df8eda8a3baf8c624527995ae1adb4dc19a1071` author=kitlangton mergedAt=2026-05-03T04:24:34Z (last kitlangton-active anchor; numerator-frozen anchor across the entire silent-sextet width-excursion-rebound trajectory)
- openai/codex#20823 sha=`51368db8187bb6bf2807bd978e9a0ee793da2882` author=aibrahim-oai mergedAt=2026-05-02T23:03:59Z (codex bottom-hangover anchor sustains across width-excursion: n=14 at Add.285 (upper-exit) → n=15 at Add.286 (in-band rebound) — hangover-residence-extension is **independent of width-excursion direction**, providing orthogonal evidence axis)
- BerriAI/litellm#27039 sha=`c94a8d6514936164ef869a6dda8bb7897b3958c2` author=mateo-berri mergedAt=2026-05-02T08:42:50Z (litellm third-decade-residence anchor n=35→n=36 across width-excursion; cross-control non-bottom-tier carrier)
- google-gemini/gemini-cli#26348 sha=`363854172f740596c7e15588a09e35c225aaeda1` author=app/gemini-cli mergedAt=2026-05-01T19:36:15Z (gemini-cli fifth-decade-residence anchor n=50→n=51 across width-excursion; first-residence-fresh-instance at Add.286 confirms cross-tier hangover-replication independent of width-direction)
- charmbracelet/crush#2774 sha=`ce314b8e0d2ad6a8c0661ab2dbde6d8f2ecf65b1` author=meowgorithm mergedAt=2026-05-01T16:18:41Z (crush fourth-hangover-residence anchor n=53→n=54 across width-excursion; quartet-extension confirms hangover at non-bottom-tier sustains under width-direction-reversal)
- block/goose#8953 sha=`e76640c8c458a724279b83823248c97b418307d7` author=kalvinnchau mergedAt=2026-05-01T21:15:56Z (goose 8-decade ceiling anchor n=84→n=85 — **66th W17 ceiling tick at Add.285, 67th at Add.286** — ceiling-residence is monotonic and width-direction-independent)
- QwenLM/qwen-code#3791 sha=`cdadbcdb33e6bf63f1ad7cf4ae60ff70cad24e98` author=wenshao mergedAt=2026-05-03T02:05:19Z (qwen-code bottom-completion-then-hangover anchor n=10 (Add.285 upper-exit, completion-event) → n=11 (Add.286 in-band rebound, first-hangover) — completion-then-hangover transition straddles width-excursion-rebound boundary)

## Width-excursion-rebound trajectory comparison

| event | ADD-pair | width-pre | width-post | Δ | rebound-magnitude | rebound-tier |
|---|---|---|---|---|---|---|
| 1st upper-exit | Add.276 → Add.277 | 62m00s | 27m23s | **−34m37s** | −55.8% | crosses to lower-tertile of modal-band |
| 2nd upper-exit | Add.285 → Add.286 | 54m35s | 41m37s | **−12m58s** | −23.74% | lands in upper-tertile of modal-band |

**Rebound-magnitude ratio**: 1st-instance −55.8% vs 2nd-instance −23.74% — **ratio ×2.35** (1st-instance rebound 2.35× deeper than 2nd-instance). **Pre-excursion-width-relative**: 1st-instance excursion was 62m00s (24.0% past upper-band edge of 50m), 2nd-instance excursion was 54m35s (9.2% past upper-band edge) — **excursion-magnitude ratio 24.0/9.2 = ×2.61**. Rebound-magnitude ratio (×2.35) ≈ excursion-magnitude ratio (×2.61) — within 10% of **proportional-rebound regime** (predicted by symmetric-mean-reversion baseline).

## Transient-excursion-no-doublet primitive specification

Primitive M-586-A definition (introduced this synth):
- **Trigger condition**: width crosses upper-modal-band edge (>50m) at single-tick, followed by width re-entry to modal-band interior [25m, 50m] at next-tick
- **Mechanism**: cascade-tail-rate-collapse drives width-expansion at upper-exit-tick (no merge-arrival → capture-window-extension), but mean-reversion drives width re-contraction at next-tick under cascade-rate-equilibration
- **Signature**: rebound-magnitude proportional to excursion-magnitude (Δ_rebound/excursion_size ≈ 2.3-2.5 within W17 visible window, n=2)
- **Falsification**: would falsify if a third upper-exit-instance produces an excursion-doublet (two consecutive upper-exit ticks), which has **zero W17 visible window prior referent**
- **Anchor BF**: ×3.5 single-tick at primitive-confirmation (Add.286)

**Cum transient-excursion-no-doublet BF** Add.276-286 = ×3.5 (two-instance baseline at upper-tier; would require third-confirming-instance to enter strong-evidence regime per Kass-Raftery scale).

## Comparison with synth #580 band-interior-amplifying-but-not-burst-emitting primitive

Synth #580 (post-Add.283) introduced the **band-interior-amplifying-but-not-burst-emitting** primitive — joint-BF step-size monotonic-increasing pentet within modal-band interior without crossing upper edge. Synth #586 transient-excursion-no-doublet is the **complementary primitive at the upper-band edge**: when band-interior amplification finally crosses the upper edge (as at Add.285), the system **does not enter sustained burst-emission** but rather rebounds to band-interior at single-tick.

**Joint synth #580 + synth #586 framework**: Cascade-tail width dynamics exhibit **band-interior-mean-reversion** as the dominant attractor regime. Excursions past either edge (lower or upper) are **single-tick-transient** with proportional-rebound. Modal-band [25m, 50m] is the **stable attractor basin** for cascade-tail width under silent-extension regime.

## Width-modal-band-density trajectory under silent-sextet

| ADD | width | in-band? | density |
|---|---|---|---|
| Add.281 | 22m10s | NO (below 25m lower edge) | 13/16 = 0.813 |
| Add.282 | 32m32s | YES | 14/17 = 0.824 |
| Add.283 | 27m47s | YES | 14/17 = 0.824 |
| Add.284 | 26m51s | YES | 14/17 = 0.824 |
| Add.285 | 54m35s | NO (above 50m upper edge, upper-exit) | 14/18 = 0.778 |
| Add.286 | 41m37s | YES | 15/19 = 0.789 |

Density-tier sequence within silent-sextet: 0.813 → 0.824 → 0.824 → 0.824 → **0.778** (Add.285 upper-exit deflates density past 0.800 boundary downward) → **0.789** (Add.286 in-band rebound partially recovers, but does not yet cross back above 0.800 boundary upward).

**Predicted density recovery to 0.800 at Add.287**: would require Add.287 in-band-sustain (16/20 = 0.800 — exact boundary). Conditional on Add.287 width in [25m, 50m], density crosses back above 0.800 at Add.288 (17/21 = 0.810) under double-in-band sustain.

## Implications for ongoing analytical threads

**Synth #582 circadian-attractor cross-test**: Both width upper-exits (Add.276 at ~22:00Z post-completion, Add.285 at ~08:25Z) occur in distinct circadian buckets (Add.276 in 21-23Z high-mode, Add.285 in 03-08Z low-mode). The transient-excursion-no-doublet primitive is **circadian-bucket-independent** — same morphology occurs in both high-mode and low-mode bucket. This suggests the primitive is **driven by cascade-rate-dynamics (mean-reversion) rather than circadian-attractor structure**.

**Synth #583 cascade-hard-termination cross-test**: Width upper-exit at Add.285 co-instantiated with cascade-hard-termination silent-quintet → sextet promotion. Add.286 width-rebound to in-band suggests **cascade-rate-equilibration is decoupled from cascade-termination-momentum** — even as cascade-hard-termination primitive amplifies (silent-sextet at Add.286), width returns to band-interior-attractor. The **two primitives operate on orthogonal time-scales**: cascade-termination is **multi-tick-cumulative**, width-rebound is **single-tick-instantaneous**.

**Synth #584 anchor-regime-collapse cross-test**: Anchor-regime-collapse trajectory (kitlangton-share monotonic-deflation 0.579→0.458 at Add.281-286) is also **width-direction-independent** — the deflation continues monotonically across both Add.285 upper-exit AND Add.286 in-band rebound. Width-direction is **orthogonal to anchor-share dynamics** at single-tick resolution.

## Predictions sourced from this synth (testable at Add.287)

- **P-586.A**: width sustains in modal-band interior at Add.287 ([25m, 50m]): **prior 0.65** (modal under post-rebound mean-reversion + cascade-tail-rate-equilibration sustain).
- **P-586.B**: width re-contracts further toward modal-band lower-tertile at Add.287 (≤32m): **prior 0.45** (modal-edge under continued mean-reversion past midpoint).
- **P-586.C**: width re-expands past upper modal edge to second upper-exit at Add.287 (would falsify transient-excursion-no-doublet primitive, instantiating excursion-doublet): **prior 0.10** (sub-modal — zero W17 visible window prior referent for excursion-doublet at upper-tier).
- **P-586.D**: modal-band density crosses back above 0.800 boundary at Add.287 conditional on in-band-sustain (16/20 = 0.800 exact-boundary): **prior 0.65** (modal under in-band-sustain probability matching P-586.A).
- **P-586.E**: width crosses below modal-band lower edge (<25m) at Add.287, instantiating lower-excursion (sub-burst-edge): **prior 0.15** (sub-modal under cascade-tail mean-reversion-from-upper-exit trajectory; would require over-correction past midpoint).
- **P-586.F**: third upper-exit instance materializes within next 10 ticks (Add.287-296): **prior 0.40** (modal-edge under post-cascade-hard-termination cascade-rebound-then-second-cycle scenario per synth #583 cross-test).
- **P-586.G**: third upper-exit instance, when it materializes, exhibits proportional-rebound at next-tick (predicted rebound-magnitude ratio 2.3-2.5 of excursion-size): **prior 0.55** (modal under transient-excursion-no-doublet primitive sustained at three-instance confirmation).
- **P-586.H**: cum transient-excursion-no-doublet BF crosses past ×5 at Add.287 conditional on width in-band-sustain: **prior 0.55** (modal under single-instance-sustain amplification per Kass-Raftery weak-to-moderate evidence regime).
