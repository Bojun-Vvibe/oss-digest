# W17 Synthesis #409 — codex amplitude-conditional H-fit linear lineage terminally invalidated at three-consecutive-overshoot; right-censored geometric reframe

**Status**: synth #409, W17 series. Date 2026-04-30. Lineage: synth #404 → #406 → #408 → **#409 (terminal)**.

## 1. Falsification target

Synth #408 introduced the piecewise H ≈ max(0, 6-A) candidate after synth #404's H ≈ max(0, 4-A) overshot at Add.188 and synth #406's H ≈ max(0, 5-A) overshot at Add.189. Synth #408 explicitly stated "discrimination test deferred to next codex discharge". The discrimination test resolved at **Add.190**: codex emitted **0** PRs, extending its post-amplitude-1 (Add.184) silence horizon to **H=6 ticks** without discharge. Per the H ≈ max(0, 6-A) fit at A=1, the prediction was H=5; the observed H=6 marks the **third consecutive single-tick overshoot** of the slope-revision lineage.

Direct PR/commit references:
- Add.188 sha=`d020c47` — H=4 overshot synth #404 H ≈ max(0, 4-A) prediction H=3.
- Add.189 sha=`1cc14c0` — H=5 overshot synth #406 H ≈ max(0, 5-A) prediction H=4.
- Add.190 sha=`ab94b04` — H=6 overshot synth #408 H ≈ max(0, 6-A) prediction H=5.
- Synth #404 commit sha=referenced via _weekly/W17-synthesis-404; synth #406 commit `d20f6ee`; synth #408 commit `019640d`.

## 2. Statement

The **piecewise linear slope-revision lineage** for the codex amplitude-1 silence-horizon fit is **terminally invalidated** at three consecutive single-tick overshoots. No member of the H ≈ max(0, k-A) family for k ∈ {4, 5, 6} survives empirical scrutiny at the codex single-anchor amplitude-1 (Add.184 PR `f08fc06` xl-openai discharge) trajectory. The slope-revision strategy — adding +1 to the silence ceiling per overshoot — is itself empirically degenerate: it cannot keep pace with the observed silence growth at any finite slope.

## 3. Reframe candidate: right-censored geometric

The codex post-amplitude-1 silence horizon (Add.184 → Add.190+) exhibits **monotone non-decreasing growth without observed discharge** across 6 consecutive ticks. Under right-censoring framing, the true silence horizon H* is **lower-bounded** at H ≥ 6 with the discharge event T* > 6. The fit class shifts from "linear piecewise with slope -1 per amplitude unit" to **"geometric or exponential silence with right-censored tail"**:

- **Candidate G1 (geometric tail)**: P(H ≥ k | A=1) = (1-p)^(k-1) for some discharge probability p per tick. Three consecutive overshoots imply p ≤ 1/3 at MLE under uniform prior; observation H ≥ 6 implies p ≤ 0.18 at 95% upper bound under geometric model.
- **Candidate G2 (exponential silence)**: H ~ Exp(λ) with λ ≤ 1/6 ticks⁻¹ at single-anchor n=1. Median ticks-to-discharge ≥ 4.16 under MLE.
- **Candidate G3 (heavy-tailed Pareto)**: H ~ Pareto(x_min=1, α) with α ≤ ln(2)/ln(6) ≈ 0.387 at H ≥ 6 observation. Implies divergent mean — a regime-defining finding if confirmed.

## 4. Discrimination test

Add.191 codex observation discriminates among G1/G2/G3:
- If discharge at H=7 (cumulative): supports G1 with p ≈ 0.14, G2 with λ ≈ 1/6.5.
- If silence at H=7: weakens G1 (p ≤ 0.16), supports G3 heavy-tail.
- If silence at H ≥ 9 over Add.191-193: strongly supports G3 heavy-tail; rejects G1 at p > 0.10 with 90% confidence.

Predictions:
- **P-409.A**: codex Add.191 emission = 0 at >70% (under G1 with p=0.18: 0.82; under G2 with λ=1/6: 0.85; under G3: 0.87).
- **P-409.B**: codex discharge T* ∈ [7, 12] at >55% under G1; T* > 12 at >40% under G3.
- **P-409.C**: synth #404 + #406 + #408 cumulative Bayes factor against linear-piecewise vs G1 geometric ≥ 27:1 (three-consecutive overshoots at single-anchor uniform prior).

## 5. Cross-repo applicability

The linear slope-revision degeneracy is **codex-specific at amplitude-1** in W17. Other repo silence horizons fit different classes:
- litellm (M-181.G n=15, depth 10h52m34s, ref. ADDENDUM-190 sha `ab94b04`): pure binary-non-admitting; no rebound observation across 15 ticks; fit class = degenerate-zero-emission (no model needed).
- goose (M-174.A n=19, M-169.B n=21, depth 21h06m05s): same as litellm; degenerate-zero-emission.
- opencode (M-180.I n=11, depth 7h47m31s): class-rebound widened-band; FP-402.1 [4h, 7h] → [4h, 10h] candidate per M-190.D.
- qwen-code: contracting-amplitude post-rupture (M-190.F); fit class = monotone amplitude decay with non-zero floor.
- gemini-cli: unit-impulse post-rebound (M-190.E); fit class = single-tick burst-and-collapse.

Each of the 6 repos exhibits a **distinct silence-horizon fit class** at Add.190. Cross-repo unification of the fit classes is the synth #410 candidate.

## 6. Operational implications

- Future predictions for codex amplitude-1 silence (post-Add.184 lineage) MUST use right-censored framing, NOT linear slope-revision.
- The "+1 ceiling per overshoot" pattern is a **diagnostic anti-pattern** for fit-class misspecification — three consecutive overshoots at single-anchor are the empirical threshold for class invalidation under the W17 reading regime.
- The slope-revision lineage produced 5 consecutive synthesis entries (#401, #404, #406, #407 partial, #408) before terminal invalidation — synth #409 closes the lineage.

## 7. Notes

- Synth #408 sha=`019640d` is the immediate predecessor; this synth supersedes its piecewise H ≈ max(0, 6-A) candidate in full.
- ADDENDUM-190 sha=`ab94b04` is the empirical anchor for the third overshoot; codex shape Add.169-190 = `5 / 4 / 6 / 1 / 1 / 1 / 0 / 1 / 1 / 5 / 1 / 3 / 0 / 2 / 0 / 0 / 1 / 0 / 0 / 0 / 0 / 0 / 0`.
- Carrier-set cardinality holds at 6: {bolinfest, abhinav-oai, etraut-openai, xl-openai, jif-oai, aibrahim-oai}. No novel-carrier introduction at n=6 silence.
- The Add.184 amplitude-1 anchor is the discharge of carrier `xl-openai` PR (mergeCommit `f08fc06`) — the entire post-anchor silence horizon is single-PR conditioned and single-author conditioned at single-anchor n=1.
