# W17 Synthesis #264 — **Deep-cohort sole-survivor dynamics**: at Add.115 the deep-cohort {gemini-cli, qwen-code, goose} contracts to **{gemini-cli} alone** after qwen-code's Add.114 exit (5h35m+ silence broken by tanzhenxin #3690 + qwen-code-ci-bot #3688) and goose's Add.115 exit (8h48m+ silence broken by morgmart #8868 `b35eaf4b` aged 10h59m32s); gemini-cli now at **13-tick zero-merge record** in isolation; INTRODUCES Pred EEE sole-survivor sustain hypothesis (gemini-cli holds deep ≥3 more ticks); RETRACTS the implicit synth #258 framing that deep-cohort is multi-member by structural necessity; cross-validates synth #263 reservoir regime by showing **sole-survivor contributes ZERO to reservoir** (deep isolation = activity isolation)

**Status:** RETRACTS synth #258's implicit multi-member framing. EXTENDS synth #258's cardinality-conservation principle into the **N=1 boundary case** where conservation is trivially violated (cohort of one cannot conserve via internal substitution). SUSTAINS synth #263's reservoir-vs-cohort decoupling claim. INTRODUCES sole-survivor as a distinct phase from multi-member-deep.

## Cross-references
- RETRACTS synth #258 multi-member framing — the deep cohort is now N=1.
- EXTENDS synth #258 cardinality conservation — applies the principle to N=1 boundary.
- SUSTAINS synth #263 reservoir regime — sole-survivor (gemini-cli) absent from reservoir.
- Cross-references Pred EEE (NEW at Add.115) — sole-survivor sustain ≥3 ticks.
- Cross-references Pred 258-1 (cardinality conservation, RESOLVED-FALSIFIED at Add.114, FURTHER-FALSIFIED at Add.115).

## Empirical basis (Add.110-Add.115 deep-cohort trajectory)

| Tick | Deep cohort (≥6h merge-silence) | Cardinality | Exits this tick | Entries this tick |
|------|----------------------------------|-------------|-----------------|-------------------|
| Add.110 | {gemini-cli, goose} | 2 | — | — |
| Add.111 | {gemini-cli, goose, qwen-code} | 3 | — | qwen-code |
| Add.112 | {gemini-cli, goose, qwen-code} | 3 | — | — |
| Add.113 | {gemini-cli, goose, qwen-code} | 3 | — | — |
| Add.114 | {gemini-cli, goose} | 2 | qwen-code (#3690+#3688 burst) | — |
| Add.115 | **{gemini-cli}** | **1** | goose (#8868 aged 10h59m32s) | — |

Two consecutive uncompensated exits (Add.114 qwen-code, Add.115 goose) reduce the deep cohort to a **sole survivor**. gemini-cli's merge-silence at Add.115 is **10h27m+** (since #26079 21:17:32Z 04-27), spanning **13 ticks** of zero-merge.

The remaining repos at Add.115:
- opencode merge-silence: 3h00m+ (mid)
- codex merge-silence: 1h11m+ (shallow→mid)
- litellm merge-silence: 3h24m+ (mid)
- qwen-code merge-silence: 45m+ (shallow)
- goose merge-silence: 33m+ (shallow)

**No repo is within 2.5h of crossing the 6h deep threshold.** gemini-cli's lead over the next-deepest repo (litellm 3h24m+) is **~7 hours**.

## Synth #264 claim — Sole-survivor dynamics differ from multi-member-deep

**Statement:** When the deep cohort contracts to N=1 via sequential uncompensated exit, the sole survivor enters a **isolation phase** distinct from prior multi-member-deep state. Specifically:
- Sole survivor's behavior **decouples from any cohort-coupling mechanism** (no peer to mirror, contrast, or co-evolve with).
- Sole survivor's exit becomes **structurally singular** — the next deep-cohort exit is by definition a transition to N=0, which is qualitatively different from N→N-1.
- Reservoir regime (synth #263) does NOT depend on sole survivor — Add.115 reservoir is mid/shallow-driven; deep is absent from open-side activity.

**Mechanism:** Multi-member deep cohorts can sustain via mutual-stillness (each member's silence is normalized by peer silence). Sole-survivor deep has no mutual-stillness anchor — the next event (whether merge, open, or close-no-merge) terminates the deep state entirely. This makes sole-survivor sustain probabilistically harder than N≥2 deep-state sustain.

**This is non-obvious because:** synth #258's cardinality-conservation framing implicitly assumed N≥2 (otherwise there's nothing to conserve under substitution). Synth #264 makes the N=1 case explicit and identifies that the cohort no longer has a mechanism to conserve cardinality on exit.

## Predictions opened by synth #264

### Pred 264-1 — Sole-survivor sustain ≥3 ticks (operationalizes Pred EEE)
**Statement:** gemini-cli sustains zero-merge state for ≥3 additional ticks (Add.116, Add.117, Add.118 all merge-silent for gemini-cli).
**Falsifier:** gemini-cli merges any PR before Add.118 close.
**Mechanism:** gemini-cli's 13-tick zero-merge run is the longest in W17 corpus; autocorrelation of merge-silence at this depth implies high persistence probability.
**Cross-check:** No other repo enters deep state by Add.118 — verified by Add.115's silence distribution (max 3h24m+ litellm vs 6h threshold = 2h36m gap, would require ≥3 zero-activity ticks for any single repo to cross).

### Pred 264-2 — Sole-survivor exit triggers cross-repo merge cascade
**Statement:** When gemini-cli eventually merges (terminates sole-survivor deep state), the same-tick OR next-tick window shows ≥2 cross-repo merges (cascade signature).
**Falsifier:** gemini-cli's exit-merge tick + next tick combined have ≤1 total cross-repo merges.
**Mechanism:** Sole-survivor exit is a structural-state change (N=1→N=0 deep cohort). Such phase transitions tend to coincide with broader merge-pressure release, not isolated single-repo events.
**Empirical seed:** Add.114 qwen-code exit (N=3→N=2) had 3 cross-repo merges; Add.115 goose exit (N=2→N=1) had 1 cross-repo merge — sample of 2 with cascade-positive 1/2. Pred is for stronger cascade at N=1→N=0 boundary.

### Pred 264-3 — Sole-survivor zero-open also (no cohort participation in reservoir)
**Statement:** Across the next 3 ticks (Add.116-Add.118), gemini-cli contributes ≤1 in-window open total.
**Falsifier:** gemini-cli has ≥2 in-window opens in Add.116-Add.118 combined.
**Mechanism:** Deep-state silence extends to open-side too — gemini-cli's last open activity has been ≥10h+ inactive. Authors of deep-state repos are not in iteration mode.
**Cross-validates:** Synth #263 reservoir regime — gemini-cli absence from reservoir is not coincidental but structural.

### Pred 264-4 — Multi-member-deep does NOT reform within 5 ticks
**Statement:** Across Add.116-Add.120, the deep cohort does NOT return to N≥2 (no second repo enters ≥6h merge-silence).
**Falsifier:** Any non-gemini-cli repo crosses ≥6h merge-silence threshold within Add.116-Add.120, restoring N=2 deep cohort.
**Mechanism:** Recent commit-phase activity rate (synth #254 16.6% rolling) does not support sustained 6h gaps in multiple repos simultaneously. Reservoir regime (synth #263) implies opens accumulate, which prevents merge-silence extension via concurrent merge-pressure.
**Test horizon:** 5 ticks is sufficient — a repo entering deep requires 6h continuous inactivity which spans ≥4-5 ticks.

### Pred 264-5 — Sole-survivor is asymmetric: gemini-cli specifically (not interchangeable)
**Statement:** If gemini-cli exits deep state and another repo subsequently enters deep, the new sole-survivor is **NOT goose or qwen-code** (the two recent exiters).
**Falsifier:** Within Add.116-Add.120, gemini-cli exits deep AND (goose or qwen-code) enters deep, becoming sole survivor.
**Mechanism:** Recent-exit repos have just-restarted activity cycles; their next merge-silence is bounded by author-iteration cadence (~hours), not deep-class extension.
**Operationalizes:** A directional claim about which repos are "sticky" in deep state — gemini-cli appears to have structurally lower commit cadence in W17 than goose or qwen-code.

## Linkage to synth #258, #263, prior cohort literature

- **Synth #258 cardinality conservation**: synth #264 explicitly extends to N=1 boundary where conservation is undefined. The framework now has 3 regimes: N≥2 conservation-applicable, N=1 sole-survivor, N=0 cohort-empty.
- **Synth #263 reservoir regime**: synth #264 confirms reservoir-vs-deep decoupling — the 7 Add.115 reservoir-opens have ZERO contribution from gemini-cli. Open-side activity is generated by mid/shallow repos only.
- **Earlier W17 cohort patterns**: synths #84, #85, #87 (same-second / sub-10s / asymmetric merge patterns) all required N≥2 active repos. None of those patterns can manifest with sole-survivor present — sole-survivor is a quiescent participant.

## What synth #264 does NOT claim

- Does NOT predict the duration of gemini-cli's sole-survivor phase beyond 3 ticks (Pred 264-1) — longer-horizon prediction would require more historical N=1 cases.
- Does NOT claim gemini-cli's silence is intentional or coordinated — it could be release-cycle artifact, contributor vacation, or upstream dependency stall. Mechanism is agnostic.
- Does NOT generalize sole-survivor dynamics to other cohort types (e.g., `-berri`, `-openai`) — synth #262 covers cohort-membership cohorts; synth #264 is specific to merge-silence-defined cohorts.
- Does NOT predict gemini-cli's specific next-merge SHA, author, or surface — only the timing constraint.

## Capture summary

Add.115 marks the first **N=1 sole-survivor deep state** in W17 corpus, with gemini-cli alone at 13-tick zero-merge (10h27m+). Synth #264 introduces 5 falsifiable predictions (sustain Pred 264-1, exit cascade Pred 264-2, zero-open Pred 264-3, no reform Pred 264-4, asymmetric replacement Pred 264-5) spanning Add.116-Add.120 deadlines. **Together with synth #263 (reservoir regime), Add.115 is described by a 2-axis state: open-side reservoir accumulation (synth #263) × deep-side cohort isolation (synth #264).** The two axes are independent — Add.115 simultaneously displays both because they describe disjoint subsets of the 6-repo corpus (reservoir = mid/shallow repos; sole-survivor = deepest repo). **Synth #264 retracts the implicit multi-member framing of synth #258, but extends rather than contradicts the cardinality-conservation principle by clarifying its N=1 boundary behavior.**
