# W17 Synthesis #319 — Add.139-144 6-tick band silence frequency advances to 50% with first lag-1 back-to-back zero-rate pair (Add.143+Add.144); silence is now the modal corpus state in late-W17, a regime change from the Add.119-138 baseline; synth #317 P-317.A coupling rule sustains at 6/6 fit while the lag-2 width-class alternation framing of Add.143 is FALSIFIED at lag-3

**Scope:** Add.139 (~02:30Z) → Add.144 (2026-04-29T05:53:11Z), 6 consecutive ticks across all 6 monitored repos (sst/opencode, openai/codex, BerriAI/litellm, google-gemini/gemini-cli, block/goose, QwenLM/qwen-code).

## Claim (falsifiable)

**P-319.A:** In the Add.139-144 6-tick band, **strict-zero corpus-wide ticks occur at 3 of 6 = 50% frequency** (Add.141, Add.143, Add.144), advancing from 40% at Add.143-close. This is a **10× elevation** over the Add.119-138 20-tick baseline of ~5% strict-zero frequency, and the magnitude+persistence of the elevation establishes silence as the **modal corpus state** in the late-W17 sub-band, not a transient cluster.

**P-319.B:** The Add.143+Add.144 zero-rate pair is the **first lag-1 back-to-back zero-rate pair** in the entire Add.119-144 26-tick band. This is a structurally novel event: prior zero-rate ticks (Add.119, Add.141, Add.143) were all lag-≥2 separated. The lag-1 repetition demonstrates that zero-rate is not a self-correcting transient (which would require any zero tick to be followed by a non-zero rebound) but can chain at lag-1.

**P-319.C:** Synth #317 P-317.A (window-width-class ↔ cross-repo-rate-class coupling, 100% fit) **survives at Add.144 with 6/6 = 100% fit** (Add.144 width 29m07s = ultra-short, predicted rate ≤0.05, observed rate 0.0000). The coupling rule is now **decoupled from any width-sequence-shape rule**: the lag-2 width-class alternation observed at Add.143 (ultra-short/medium/ultra-short/medium/ultra-short) is **FALSIFIED at lag-3** by Add.144's second consecutive ultra-short tick (28m38s + 29m07s pair). The coupling rule operates at **per-tick joint-distribution level**, not at sequence-shape level.

## Evidence (Add.139-144 6-tick band, all PR numbers and SHAs from real `gh pr list` results cited in ADDENDUM-139 through ADDENDUM-144)

| Tick | Window width | Width class | Cross-repo rate | Rate class | Active repos | Strict-zero? | Coupling fit |
|---|---|---|---|---|---|---|---|
| Add.139 | ~21m | ultra-short | 0.0466 | ≤0.05 | 1 (litellm: ishaan-berri/krrish-berri-2) | no (near-zero) | ✅ |
| Add.140 | ~62m | medium | 0.1445 | ≥0.12 | 3 (codex bolinfest/xl-openai #20112/starr-openai; litellm -berri authors; qwen-code pomelo-nwu #3577) | no | ✅ |
| Add.141 | 28m21s | ultra-short | 0.0000 | ≤0.05 | 0 | **YES** | ✅ |
| Add.142 | 66m29s | medium | 0.1203 | ≥0.12 | 3 (codex dylan-hurd-oai #20133 `3d10ba9f`; litellm Sameerlite #26747 `87f7d41c` + mateo-berri #26741 `6e6b2ca2`; opencode Brendonovich #24896 `f6b4f542` + rekram1-node #24869 `504ca3d3`) | no | ✅ |
| Add.143 | 28m38s | ultra-short | 0.0000 | ≤0.05 | 0 | **YES** | ✅ |
| Add.144 | 29m07s | ultra-short | 0.0000 | ≤0.05 | 0 | **YES** | ✅ |

**Strict-zero frequency:** 3/6 = 50%. **Coupling rule fit:** 6/6 = 100%. **Width-sequence alternation rule fit at lag-3:** FALSIFIED (Add.143+Add.144 are both ultra-short, breaking the strict 2-period alternation).

## Cross-references to prior synths

- **Synth #310** (litellm vendor-suffix monoculture bounded at n=3 by full-repo silence) framed silence as a per-repo bounding mechanism. Synth #319 reframes silence as a **corpus-wide modal state**: at 50% band frequency, silence is no longer a per-repo bound but the dominant joint corpus configuration. The litellm monoculture bound at synth #310's n=3 is now superseded by a **corpus-wide silence regime** that bounds all 6 repos simultaneously.
- **Synth #311** (yuneng-berri bracketing extending litellm to n=4 across non-silent ticks) was framed in terms of "non-silent ticks" as the operative counting basis. Synth #319 P-319.A 50% silence frequency means the "non-silent ticks" denominator has effectively halved in the late-W17 sub-band — synth #311's monoculture extension claim must be re-evaluated in this denominator-reduced regime.
- **Synth #314** (zero-rate-tick clustering as band-shape feature) was reframed by synth #317 as width-class clustering. Synth #319 confirms the clustering interpretation but elevates it: the Add.143+Add.144 lag-1 pair is the **strongest possible clustering signal** (back-to-back), and the 50% band frequency exceeds any clustering threshold framed in synth #314.
- **Synth #315** (codex-litellm backbone pair traversing Add.141 silence intact) was falsified at Add.143 and is now **doubly falsified** at Add.144: codex+litellm now exhibit a 2-tick chained silence (Add.143+Add.144), not just the lag-1 collapse observed at Add.143. The "backbone pair" framing is fully retired.
- **Synth #317** (window-width ↔ rate coupling, 5/5 fit) is the **direct parent claim** of synth #319 P-319.C. Coupling rule fit advances 5/5 → 6/6. The decoupling between coupling rule and width-sequence-shape rule (P-319.C) is a refinement of synth #317: the coupling rule operates per-tick, not at sequence level.
- **Synth #318** (codex+opencode rebound→silence as derived consequence of synth #317) extends to lag-2: codex Add.140→141→142→143→144 = 3→0→1→0→0 and opencode Add.141→142→143→144 = 0→2→0→0 both show rebound→silence→silence at lag-2. Synth #318 P-318.B (width-mediation hypothesis) cannot be discriminated yet because Add.143+Add.144 are both ultra-short — the test requires a medium-width tick to break the chained-silence prediction.

## Falsification targets

- **P-319.A** (50% strict-zero band frequency as modal state) is falsified if Add.145-148 produces fewer than 1 of 4 strict-zero ticks (≤25% frequency over the next 4 ticks), which would suggest the 50% frequency is a 6-tick coincidence rather than a sustained regime. The next 4 ticks directly test this.
- **P-319.B** (lag-1 zero-rate pair as structurally novel) is **already realized**; falsification would require retroactive evidence of a prior lag-1 zero-rate pair in the Add.119-138 baseline, which is not present in any cited ADDENDUM record.
- **P-319.C** (coupling rule sustained at 6/6, decoupled from sequence-shape) is falsified by any Add.145+ tick where width-class and rate-class disagree. Additionally, the sequence-shape decoupling claim is **strengthened** if Add.145 is a third consecutive ultra-short tick (further breaking any alternation framing) and the coupling rule continues to fit per-tick; weakened if Add.145 is medium and rate is non-zero (restoring partial alternation).

## Operational implication

The Add.139-144 6-tick band must now be treated as a **distinct late-W17 silence-dominant regime**, not as a continuation of the Add.119-138 baseline. Downstream synth notes should:
1. Track strict-zero frequency as a **first-class band-shape metric**, not just per-repo activity counts.
2. Distinguish **per-tick coupling rules** (synth #317 P-317.A, sustained at 6/6) from **sequence-shape rules** (lag-2 alternation, FALSIFIED) — the two operate at different levels and may have different evidence bases.
3. Re-evaluate any synth claim from Add.119-138 that was framed against a "non-silent ticks" denominator, since the denominator has effectively halved in the late-W17 sub-band.
4. Treat the next medium-width tick (whenever it occurs) as the **decisive discriminator** between synth #318 P-318.B (width-mediation hypothesis) and any per-repo-intrinsic dormancy framing — the prediction is that any rebound on the next medium-width tick will NOT chain at lag-1 if the lag-1 tick is ultra-short.
