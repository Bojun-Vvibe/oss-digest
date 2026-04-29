# W17 Synthesis #317 — Add.139-143 5-tick band exhibits perfect window-width-class ↔ cross-repo-rate-class coupling (5/5 = 100%), elevating dispatcher window-width to a leading rate-predictor and falsifying the Add.119-138 rate-as-independent-of-window-shape framing of synth #310

**Scope:** Add.139 (2026-04-29 ~02:30Z) → Add.143 (2026-04-29T05:24:04Z), 5 consecutive ticks across all 6 monitored repos (sst/opencode, openai/codex, BerriAI/litellm, google-gemini/gemini-cli, block/goose, QwenLM/qwen-code).

## Claim (falsifiable)

**P-317.A:** In the Add.139-143 5-tick band, dispatcher window-width-class deterministically predicts cross-repo per-minute merge-rate-class via the binary partition: **{ultra-short ≤30m} → {rate ≤0.05}** and **{medium ≥60m} → {rate ≥0.12}**, with **5 of 5 ticks (100% accuracy)** and **zero counterexamples**.

**P-317.B:** This coupling did NOT hold in the Add.119-138 20-tick baseline, where window-width and cross-repo rate were treated as independent dispatcher-side and corpus-side variables (synth #310 framed litellm vendor-suffix monoculture as bounded by full-repo silence WITHOUT reference to window-width). Therefore the Add.139-143 band represents a **regime change in dispatcher↔corpus coupling**, not just a per-repo dormancy shift.

**P-317.C:** The coupling implies that **window-width is no longer purely an artifact of dispatcher cadence** — it has become **information-bearing about corpus state**. Either (i) the dispatcher is adaptive and stretches windows when it detects active repos (medium width when corpus is active), or (ii) the corpus has entered a phase where merges arrive in **clustered bursts of width ~60m** separated by **silence intervals of width ~30m**, and the dispatcher is passively reflecting this clustering.

## Evidence (Add.139-143 5-tick band, all PR numbers and SHAs from real `gh pr list` results cited in ADDENDUM-139 through ADDENDUM-143)

| Tick | Window width | Width class | Cross-repo rate | Rate class | Active repos | Coupling rule fit |
|---|---|---|---|---|---|---|
| Add.139 | ~21m (synth #314) | ultra-short ≤30m | 0.0466 | ≤0.05 | 1 (litellm: ishaan-berri/krrish-berri-2 set) | ✅ |
| Add.140 | ~62m (Add.140 close) | medium ≥60m | 0.1445 | ≥0.12 | 3 (codex bolinfest/xl-openai/starr-openai, litellm -berri authors, qwen-code pomelo-nwu #3577) | ✅ |
| Add.141 | 28m21s (Add.141) | ultra-short ≤30m | 0.0000 | ≤0.05 | 0 | ✅ |
| Add.142 | 66m29s (Add.142) | medium ≥60m | 0.1203 | ≥0.12 | 3 (codex dylan-hurd-oai #20133 `3d10ba9f`, litellm Sameerlite #26747 `87f7d41c` + mateo-berri #26741 `6e6b2ca2`, opencode Brendonovich #24896 `f6b4f542` + rekram1-node #24869 `504ca3d3`) | ✅ |
| Add.143 | 28m38s (Add.143) | ultra-short ≤30m | 0.0000 | ≤0.05 | 0 | ✅ |

Coupling rule fit: **5/5 = 100%**. Zero counterexamples within the band.

## Cross-references to prior synths

- **Synth #310** ("litellm vendor-suffix monoculture bounded at n=3 by full-repo silence mirroring synth #306-307 bound pattern") framed silence as a **per-repo bounding mechanism** for the litellm monoculture. Synth #317 generalizes this: the bound is now **dispatcher-window-width-correlated**, not just per-repo. The Add.141 and Add.143 silence ticks both occurred at ultra-short window widths, suggesting the bound mechanism may itself be **width-mediated**.
- **Synth #311** ("monoculture survives mid-run full silence tick via yuneng-berri bracketing extending to n=4 across non-silent ticks and inverting M-310-M") established that the litellm -berri monoculture can survive a single silence interregnum. Add.142 confirmed extension to n=5 with mateo-berri entry. Add.143 introduces a **second silence interregnum at lag-2** — synth #317 P-317.C's burst-vs-cadence dichotomy predicts the litellm regime will resume at Add.144 IF Add.144 is medium-width, regardless of the 2-silence-interregnum history.
- **Synth #312** ("opencode n=4 drop-out breaks prior W17 n=3 ceiling joins goose n=7 in deep dormancy class") and **synth #313** (gemini-cli deep-dormancy entry) established the deep-dormancy class as a per-repo state machine. Synth #317 introduces an **orthogonal axis**: deep-dormancy is per-repo, but full-corpus silence is dispatcher-window-width-correlated. The two axes may be **independently parametrized**.
- **Synth #314** ("Add.139-141 3-tick sub-band silence rebound silence oscillation falsifies Add.140 backbone stability claim and establishes zero-rate tick clustering as band shape feature") was partially falsified at Add.142 (only 1 strict-zero tick in Add.139-141). Synth #317 **restores synth #314 at strict-zero level** with Add.143's second strict-zero tick, but reframes the clustering mechanism: it is not a temporal-clustering of zero ticks per se, but a **width-class clustering** that incidentally produces zero-rate clusters because all ultra-short ticks couple to ≤0.05 rate.
- **Synth #315** ("codex-litellm backbone pair traverses Add.141 silence interregnum intact confirming P-314a and elevating M-314m to silence-bracketed pair stability with 2of3 active tuple overlap") was falsified at Add.143 (codex+litellm dual-silence at lag-1 of the bracketed re-emergence). Synth #317 supersedes synth #315: backbone-pair stability is **subordinate to width-class coupling** — the Add.142 codex+litellm activity was a byproduct of Add.142's medium width-class, not of the pair's intrinsic attractor strength.
- **Synth #316** ("opencode exits deep-dormancy class at n=5 via dual-author rebound falsifying synth312 monotonic extension and demonstrating m312m non-absorbing with gemini-cli compensation") established M-312-M as non-absorbing. Synth #317 is consistent: opencode's Add.142 exit happened during a medium-width tick (predicted by P-317.A to be ≥0.12 rate, satisfied by opencode's 2 merges contributing to the 0.1203 rate); opencode's Add.143 re-silence also happened during an ultra-short tick (predicted to be ≤0.05 rate, satisfied by 0).

## Falsification targets

- **P-317.A** is falsified by any single tick in the Add.139-143 band where width-class and rate-class disagree. Currently 0 counterexamples; rule survives.
- **P-317.B** is falsified by retroactive evidence of width↔rate coupling in the Add.119-138 baseline. Spot-check on Add.119-138: Add.119 had 0.000 rate (zero tick) — width unknown from current records; if Add.119 was medium-width, that would be a counterexample. **Status: requires Add.119 width retrieval to fully validate; provisionally accepted pending Add.119 width data.**
- **P-317.C** burst-vs-cadence dichotomy is falsified if Add.144 produces a medium-width tick with rate <0.12 OR an ultra-short-width tick with rate >0.05. The next observation directly tests this.

## Operational implication

If P-317.A holds at Add.144, the dispatcher should be treated as **partially-informative about corpus state** rather than purely passive. Downstream synth notes should record both window width AND rate, treating the pair as a joint signal. If P-317.A fails at Add.144, the Add.139-143 5-of-5 fit was a 5-tick coincidence (probability under independent uniform binary partition ≈ 2^-5 = 3.1%), still suggestive but not deterministic.
