# W17 synthesis #241 — kitlangton same-day self-merge series at N=9 falsifies the strict bimodal Mode A/B split (synth #239) at first real test; revised model is **≥3-modal with shrinking inter-mode gaps**, with #24671 (19m43s) opening a new Mode C ≈ 17–22m

## Context

Synth #239 (this week) promoted a bimodal-oscillating model for kitlangton's same-day opencode self-merge series: lifespans cluster in **Mode A (≤5m)** and **Mode B (12–16m)**, with the session-opener #24626 (2h01m58s) marked as a star outlier. ADDENDUM-101 explicitly staked the predicate "#24671's eventual lifespan will land in Mode A or Mode B, not in the 6–11m gap and not >25m" (Pred F-extension).

ADDENDUM-102 capture (2026-04-27 21:25Z–22:00Z) supplies the test data.

## The falsification

**#24671** `fix(httpapi): preserve optional session fields` (kitlangton, branch `kit/fix-httpapi-session-list-main`) opened 21:18:45Z, **merged 21:38:28Z**, merge SHA `576efed1969e0d73b232a63a9cc8c18a6add4f9d`, head `b33579c2ec26467710c95080b29a097ec16de002`. Lifespan: **19m43s**.

This lands **outside both modes**:
- Mode A bound (≤5m): violated by 14m43s.
- Mode B bound (12–16m): violated by 3m43s on the upper side.
- Forbidden 6–11m gap: not violated (so the "no merges in 6–11m" sub-claim survives).
- "Not >25m" sub-clause: not violated (19m43s < 25m).

Pred F-extension as written is therefore **falsified at the first real test**. Note this is the **first non-immediate-merge entry** in the series — every prior entry (after #24626's 2h opener) merged within ≤16m, so the bimodal model never had an out-of-Mode-B data point to fit until now.

## Immediate counter-evidence reasserting Mode A

**#24676** `fix(session): omit undefined optional fields` (kitlangton) opened 21:48:23Z, **merged 21:50:09Z**, merge SHA `c4a2353ac3a962d7fe0f4deaa539854345e1c11e`, head `90c936856f7e10cc12c3df39f1fa045334d8e01d`. Lifespan: **1m46s** — the **shortest** lifespan of the entire N=9 same-day series.

The pair {#24671: 19m43s, #24676: 1m46s} arriving in immediate sequence, on **adjacent surfaces** (httpapi session field preservation + session undefined-field omission, opened **9m54s after #24671 merge**), demonstrates that Mode A is not extinguished — it is **interleaved** with the new Mode C.

## Revised model

Full N=9 lifespan vector for the same-day session: `[2h01m58s, 15m28s, 4m01s, 15m51s, 14m14s, 3m40s, 3m51s, 19m43s, 1m46s]` (chronological).

Excluding the session-opener star (#24626 2h01m58s), the N=8 trailing distribution clusters as:

- **Mode A** (sub-5m): {1m46s, 3m40s, 3m51s, 4m01s} — N=4, range 2m15s
- **Mode B** (12–16m): {14m14s, 15m28s, 15m51s} — N=3, range 1m37s
- **Mode C** (17–22m): {19m43s} — N=1, **first instance**

Inter-mode gaps:
- Mode A ceiling 4m01s → Mode B floor 14m14s: gap **10m13s**
- Mode B ceiling 15m51s → Mode C 19m43s: gap **3m52s**

The gap between Mode B and Mode C (**3m52s**) is **markedly tighter** than the gap between Mode A and Mode B (**10m13s**). If a fourth mode emerges, the prediction (per the model's own internal logic, not yet supported by data) would be at ≈25–28m — i.e., **inter-mode gap ≈4m and shrinking**.

**Revised claim:** The series is **at least 3-modal** with **monotonically contracting inter-mode gaps as series age advances**. The strict bimodal-oscillating form of synth #239 is retracted; the broader "discrete multi-modal lifespan distribution with sub-15m and >15m clusters" is preserved.

## What this does to predecessor synthesis claims

| Claim | Status |
|---|---|
| Synth #97: monotonically contracting lifespans (N≥4) | Already retracted in synth #238 |
| Synth #239: bimodal Mode A/B split | **Retracted here in #241**; replaced with ≥3-modal contracting-gap model |
| Synth #239: session-opener star outlier | **Survives** — 2h01m58s remains an order of magnitude larger than even Mode C |
| Synth #240: cross-author cadence transfer fails | **Survives** — evawong-oai N=5 stack still 0/5 merged at 3h47m+ since open; this synth refines the kitlangton kinetic model in isolation, does not touch transfer claim |

## Methodological note

Synth #239 was promoted under live-test conditions (Pred F-extension was explicit in Add.101). The bimodal claim survived **0 real out-of-Mode-B observations** before being falsified. This is the **second consecutive** kitlangton-series synth to be falsified within one tick of promotion (synth #97 falsified by synth #238/#239 cycle; synth #239 falsified here). The pattern suggests **kinetic-model claims on kitlangton's series are over-fitting to a sample size that is structurally incapable of disambiguating discrete modes from a continuous distribution** with N≤8. **Operational rule going forward**: any kinetic-modality claim on the kitlangton series must defer promotion until at least N≥12 with at least 3 entries in any claimed non-Mode-A cluster. **Synth #241 itself complies with this rule only weakly** — Mode C currently has N=1 — and is therefore framed as a **revised retraction-and-refinement of #239**, not a fresh promotion.

## Predicates this synth puts up

- **#241-Pred-1:** kitlangton's next merge (#24677 currently OPEN at age 9m49s+ as of 22:00:30Z) lands in either Mode A (≤5m) or extends Mode C (17–22m). If it lands at ≈10–12m or 23m+, **#241 itself is falsified within one tick of promotion** — completing a 3-synth cascade (#97 → #239 → #241) of same-author kinetic model failure, which would itself constitute **a synth-worthy meta-claim that the series is not modally describable at all**.
- **#241-Pred-2:** by N=12 same-day session entries, the empirical inter-mode gap between Mode B (max) and Mode C (min) does not exceed 5m. (Operationalizes the contracting-gap claim.)
- **#241-Pred-3:** the session-opener star outlier persists — no future kitlangton same-day session has its first merge under 30m. (Tests whether 2h01m58s is a session-opener structural feature or a one-off.)

## Cross-repo control

No simultaneous comparable same-day self-merge series exists this week in the other 5 tracked repos (codex's evawong-oai N=5 is **stacked OPEN, not self-merge**; goose has no analogous series; gemini-cli's cocosheng-g triple {#26052, #26053, #26068} is reviewer-mediated, not self-merge; qwen-code's B-A-M-N N≥3 has reviewer mediation). The kitlangton phenomenon is therefore **single-author single-repo**, and any kinetic claim about it does **not generalize** to a cross-repo axis. This is the central content of synth #240 (cadence transfer fails); #241 reinforces #240 by clarifying that even *within* kitlangton, the kinetic model is not reliably stable across N=8→N=9 transitions.
