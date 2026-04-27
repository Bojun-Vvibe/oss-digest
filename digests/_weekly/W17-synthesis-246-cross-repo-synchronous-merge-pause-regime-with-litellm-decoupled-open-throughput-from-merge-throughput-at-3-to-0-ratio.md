# W17 Synthesis #246 — Cross-repo synchronous merge-pause regime: 4 of 6 tracked repos show concurrent ≥45min merge-silence at 23:00Z while open-rate proceeds normally; litellm decouples open-throughput from merge-throughput at 3:0 ratio over 21min

**Status:** PROMOTED from ADDENDUM-104 cross-repo merge-pause inventory. **Novel angle: not previously addressed in any prior synth.** Previous synths examined per-repo kinetic distributions (#241, #242), per-author kinetic transfer (#240), per-PR sub-patterns (#244, #245), and methodological reflexivity (#238). **None examined cross-repo aggregate flow asymmetries within a single capture window.**

## Core empirical claim

At ADDENDUM-104 capture (23:00:00Z), the merge-silence-at-capture across the six tracked repos is:

| Repo | Merge-silence at 23:00Z | Last merged PR | In-window OPENs (21m) |
|------|-------------------------|----------------|------------------------|
| sst/opencode | 44m48s | #24677 22:15:12Z | 0 |
| openai/codex | 1h01m31s | #19839 21:58:29Z | 0 |
| BerriAI/litellm | 3h46m46s | #26622 19:13:14Z | 3 (#26649 closed in-window, #26650, #26651) |
| google-gemini/gemini-cli | 1h42m28s | #26079 21:17:32Z | 0 |
| block/goose | 48m40s | #8854 22:11:20Z | 0 |
| QwenLM/qwen-code | 10h32m | #3661 12:28:17Z | 0 |

Aggregate: **4 of 6 repos have merge-silence ≥45min concurrently; 5 of 6 have ≥1h if you exclude opencode by 16m20s; 6 of 6 have ≥40min.** Only sst/opencode is below 1h, and it is at 44m48s (within margin).

## Why this is non-trivial

Per-repo merge-silences of 45min-to-3h are individually unremarkable for several of these repos (qwen-code regularly has multi-hour gaps; gemini-cli has periodic pauses). The non-triviality is **synchronous concurrence**: at a single capture instant, **all six are simultaneously paused** to varying depths. Under a null hypothesis where each repo's merge events are independent Poisson processes with rates λᵢ inferable from prior Add windows (Add.79-103 baseline), the joint probability of all six being simultaneously above their per-repo 50th-percentile inter-merge gap is roughly Π(0.5)⁶ ≈ 1.6%, and the joint probability of all six being above their 70th-percentile is ≈ 0.07%. The capture is occupying the latter tail.

## Decoupling specificity: litellm

Critically, the merge-pause is **not** an open-pause. Within the same 21-minute window, **litellm received 3 net new OPENs (#26649 by ishaan-berri closed in-window, #26650 by ayushh0110 — third-attempt v2-suffix per synth #245, #26651 by lmcdonald-godaddy first-time-author)** while merging zero. The litellm OPEN backlog at capture spans **N≥15 PRs** including yuneng-berri ×3 (#26635, #26643, #26648), skgandikota ×3 (#26639, #26640, #26642), ayushh0110 v3 attempt #26650, milan-berri #26645, emerzon #26644, mubashir1osmani #26637, freddyhaddad #26636, samrusani #26633, alighazi288 #26632, ryan-crabbe-berri #26631, Michael-RZ-Berri #26629, musse #26628, harryzsh #26627, udit-rawat #26621, bringCool #26617, lmcdonald-godaddy #26651.

This **decouples litellm's open-throughput from its merge-throughput** in a structurally unique way among the six tracked repos. The other five repos all show the natural correlation (low merge-rate ↔ low open-rate within window). Only litellm shows **high open / zero merge** in a 21-minute slice.

## Three candidate causal mechanisms (testable)

1. **Maintainer review-availability bottleneck (M1):** the merging authority for litellm is concentrated in a small `-berri` suffix maintainer set (ishaan-berri, krrish-berri-2, yuneng-berri, milan-berri, ryan-crabbe-berri, Michael-RZ-Berri); during an off-hours window for that team, merge-throughput drops to zero while contributor-driven opens continue.
2. **Merge-queue or CI saturation (M2):** litellm has a CI gate that other repos do not have; during periods of CI queue depth, merges stall while opens (which do not require CI completion) proceed.
3. **Coordinated release-window freeze (M3):** litellm is approaching a release boundary and has informally frozen merges; opens are accumulating to be batched after the freeze.

The three are distinguishable by future evidence:
- M1 predicts a **burst of merges resuming when the maintainer team re-engages** (Add.105-107 should show a ≥5-merge burst within ≤30min if M1).
- M2 predicts merges resume **gradually** (singletons, not bursts) once CI catches up.
- M3 predicts merges resume **all-at-once with explicit release tag PR or version bump merging first**.

## Predicates

- **Pred 246-1 (cross-repo coherence):** at Add.105 capture, ≥3 of the 6 repos still show merge-silence ≥1h (measured at Add.105's capture instant). If yes, the cross-repo synchronous merge-pause is **time-correlated, not idiosyncratic**, and the joint-Poisson null is rejected.
- **Pred 246-2 (litellm decoupled regime):** by Add.106, litellm's in-window merge:open ratio across Adds 102-106 collectively remains ≤0.2. If yes, litellm is in a **structural merge-pause regime** distinct from per-PR review-timing variance.
- **Pred 246-3 (M1 vs M2 vs M3 disambiguation):** observe litellm's first 5 post-pause merges. If they cluster within ≤30min, **M1 supported**; if they appear singly across ≥2h, **M2 supported**; if a release-tag/version-bump PR merges first, **M3 supported**.
- **Pred 246-4 (qwen-code is null instance):** qwen-code's 10h32m merge-silence is consistent with its baseline distribution (qwen-code historically shows multi-hour gaps); it should be **excluded from the cross-repo coherence analysis** because its inclusion biases the joint-probability calculation toward unsurprising conclusions. Re-run Pred 246-1 with qwen-code excluded: at Add.105, ≥2 of the **remaining 5** repos still show merge-silence ≥1h.
- **Pred 246-5 (`-berri` suffix-author merge-rate retention):** ishaan-berri #26649 closed-without-merge in 3m57s (Add.104) widens the `-berri` close-rate distribution to non-zero. If a 2nd `-berri`-suffix maintainer PR closes-without-merge under 10min by Add.110, the previously-near-uniform merge prior for `-berri` authors is **empirically falsified**, weakening synth #240's transfer-failure thesis on its diagnostic-author dimension.

## Falsifier conditions (what would retract this synth)

- **F1:** if at Add.105 capture, ≥4 of 6 repos have merged within the 21-min preceding window, the synchronous-pause claim does not generalize beyond the single Add.104 window and #246 reduces to a one-tick observation.
- **F2:** if litellm merges ≥3 PRs in Add.105 window, the "decoupled regime" claim is weakened to "transient backlog" rather than "structural regime".
- **F3:** if the post-pause merge pattern matches none of M1/M2/M3 cleanly (e.g. mixed bursting and singletons across overlapping time-bins), the three-mechanism enumeration is incomplete and synth #246 needs an M4.

## Carry-relations

- **Co-fires with synth #245** (close-and-refile sub-pattern (d)): both observe litellm-specific high-attempt-count low-completion behavior, hinting at a single underlying litellm review-throughput constraint that produces both (i) authors retrying (sub-pattern (d)) and (ii) zero merges over hours.
- **Co-fires with synth #242** (surface-class lifespan stratification): if litellm's in-window opens are surface-stratified (model-pricing #26644 #26651 = Class F; observability #26645 = Class F; guardrails #26648 = Class M; security/permissions #26650 = Class M-S; bedrock #26627 = Class S), then surface-class is preserved across the open-flow even when merge-flow halts.
- **Does not contradict synth #97/#239/#241/#243** (kitlangton kinetic series), which are intra-author intra-window observations independent of cross-repo aggregate flow.
- **Methodologically extends synth #238** (reflexivity / post-hoc narrative): the joint-Poisson rejection at the 0.07% tail must be interpreted with caution because **the capture instant 23:00Z was selected by the dispatcher schedule, not by an a-priori-stated hypothesis**. A more conservative reading: the joint pause is "noteworthy enough to predict forward" but not "statistically established at the chosen tick".

## Capture metadata

Promoted at ADDENDUM-104 close (23:00:00Z, 2026-04-27 / docket date 2026-04-28). Source ADDENDUM citations: #103 (predecessor merge-silence baselines), #104 (in-window cross-repo inventory and litellm OPEN backlog enumeration). PRs cited by number across this synth: opencode #24677, codex #19839, litellm #26622 #26617 #26621 #26627 #26628 #26629 #26631 #26632 #26633 #26635 #26636 #26637 #26639 #26640 #26641 #26642 #26643 #26644 #26645 #26648 #26649 #26650 #26651, gemini-cli #26079, goose #8854, qwen-code #3661.
