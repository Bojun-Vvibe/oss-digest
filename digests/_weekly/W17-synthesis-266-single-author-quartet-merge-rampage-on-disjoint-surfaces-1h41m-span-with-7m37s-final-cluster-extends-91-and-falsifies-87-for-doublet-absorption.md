# W17 Synthesis #266 — **Single-author quartet merge-rampage on disjoint surfaces**: at Add.116 tanzhenxin lands 4 qwen-code merges in 1h41m36s window (#3690 06:58:50Z `fix(ci): use squash merge for SDK release auto-merge` `fd672797` → #3699 08:40:26Z `fix(core): treat ask_user_question multiSelect as optional` `784b3cef`) plus boundary #3693 (`fix(core): set DeepSeek V4 context to 1M and output to 384K` `8807c026` 08:44:20Z) extending the count to 5; surfaces span `ci`, `cli`, `core`, `core` (DeepSeek), `core` (multiSelect) — **3 distinct surface families with 2 core-internal sub-surfaces**; final 3 merges (#3691 08:32:59Z, #3694 08:32:49Z, #3699 08:40:26Z) cluster within **7m37s** (Δt #3694→#3691=10s, #3691→#3699=7m27s) — sub-15-minute final-cluster signature; EXTENDS synth #91 (single-author triplet self-merge metronome on disjoint surfaces with sub-15-minute inter-merge cadence) into **quartet variant** with explicit final-cluster compression; FALSIFIES synth #87's asymmetric-half-merge prediction for sub-10s same-author doublets (Pred GGG fell at tick 1) by demonstrating doublet→full-quartet escalation rather than half-conversion; INTRODUCES Pred HHH tracking quartet-rampage recurrence cadence

**Status:** EXTENDS synth #91 quantitatively (3→4 merges, identical sub-15-min compression). FALSIFIES synth #87's asymmetric-half-merge claim for cases where the doublet authors are also active in subsequent rampage modes (synth #87 holds for isolated doublets only). SUSTAINS synth #265 single-author rampage as drain mechanism.

## Cross-references
- EXTENDS synth #91 single-author triplet metronome — quartet variant observed.
- FALSIFIES synth #87 asymmetric-half-merge — qwen-code Add.115 doublet (#3693+#3694) co-merged at Add.116 within Δt=10s rather than splitting.
- SUSTAINS synth #265 reservoir-drain bimodality — tanzhenxin's quartet IS the qwen-code drain mechanism.
- Cross-references Pred GGG (FALSIFIED at Add.116 tick 1 of 4).
- Cross-references Pred HHH (NEW at Add.116) — quartet recurrence within 5 ticks.
- Cross-references synth #92 (same-second four-PR open tuplet) — synth #266 is the **merge-side analog** of synth #92's open-side quartet, with non-same-second cadence (1h41m vs ≤1s).

## Empirical basis (tanzhenxin Add.116 quartet)

| Sequence | PR | Surface | Merge timestamp | SHA | Δt from prior |
|----------|----|---------| ----------------|-----|----------------|
| 1 | #3690 | `ci` (SDK release auto-merge squash) | 06:58:50Z | `fd672797` | — (anchor) |
| 2 | #3694 | `cli` (TUI input test pruning, N=8 flaky tests) | 08:32:49Z | `e973dabf` | +1h33m59s |
| 3 | #3691 | `cli` (subject-bearing thought chunks description preservation) | 08:32:59Z | `6763124a` | +10s |
| 4 | #3699 | `core` (ask_user_question multiSelect optional) | 08:40:26Z | `784b3cef` | +7m27s |
| 5 (boundary) | #3693 | `core` (DeepSeek V4 context 1M output 384K) | 08:44:20Z | `8807c026` | +3m54s |

**Total span (anchor → quartet-close):** 1h41m36s. **Final-cluster span (#3694 → #3699):** 7m37s. **Sub-15-minute compression:** all final 3 merges within 7m37s confirms synth #91 cadence claim.

**Surface decomposition:**
- `ci` × 1 (#3690 SDK release infra)
- `cli` × 2 (#3691 thought chunks, #3694 test pruning) — both CLI-surface but disjoint sub-features
- `core` × 2 (#3699 ask_user_question, #3693 boundary DeepSeek model context) — both core-surface but disjoint sub-features

**Disjointness:** `ci` ≠ `cli` ≠ `core` at top level. Within `cli` and `core`, the sub-features (test infra vs prompt parsing; tool argument schema vs model registry) are independently maintained. **Disjointness criterion (synth #91) satisfied.**

## Synth #266 claim — Quartet rampage is the natural extension of triplet metronome under reservoir-drain conditions

**Statement:** When a single author drives a reservoir-drain event (synth #265), the merge cadence extends from synth #91 triplet to **quartet** with the following structural features:
- **Anchor merge** (1st of quartet) is temporally separated from the subsequent cluster by ≥30min — anchor is the "warm-up" or pre-cluster commit.
- **Final cluster** (3rd, 4th, optionally 5th merge) compresses to ≤15min total span — author enters batch-merge mode.
- **Surface diversity** spans ≥3 top-level surfaces (e.g., `ci`, `cli`, `core`); within-surface duplication is permitted but sub-features must be disjoint.
- **No bot involvement** — quartet is human-authored end-to-end (qwen-code-ci-bot operates on separate timing per CCC).

**Mechanism:**
- Synth #91's triplet metronome describes intra-session cadence (~30min between merges).
- Quartet emerges when the author's session extends or re-engages within the same tick — typically driven by reservoir backlog (prior-tick opens by same author awaiting merge approval).
- Final-cluster compression reflects **batch-merge UI behavior** — once review approvals queue up, the author merges them in rapid succession via PR-list page.

**This is non-obvious because:** synth #91 explicitly capped at triplet (3 merges). Synth #266 demonstrates quartet (4) and pentet-via-boundary (5 with #3693), suggesting the rampage upper bound is higher than synth #91 implied. Synth #92 (same-second four-PR open tuplet) is the **open-side** analog with stricter timing (≤1s); synth #266 is the **merge-side** analog with looser timing (≤15min final cluster, ≤2h total span).

## Predictions opened by synth #266

### Pred 266-1 — Quartet recurrence cadence (operationalizes Pred HHH)
**Statement:** A same-author quartet merge-rampage (≥4 self-merges within 2h on ≥3 distinct surfaces) recurs in qwen-code within 5 ticks (deadline Add.121).
**Falsifier:** 5 ticks elapse without ≥4 same-author merges within any 2h window in qwen-code.
**Mechanism:** tanzhenxin's quartet pattern matches synth #91 metronome cohort behavior; release-cycle pressure (qwen-code-ci-bot v0.1.7 just shipped at #3688 06:59:13Z) tends to drive author merge-rampages every release window.

### Pred 266-2 — Final-cluster compression scales with quartet count
**Statement:** Quartet rampages (N=4) have final-cluster span (last 3 merges) ≤15min; pentet rampages (N=5, including boundary cases) have final-4 span ≤25min.
**Falsifier:** A quartet observed with final-cluster span >15min, OR a pentet with final-4 span >25min.
**Mechanism:** Batch-merge UI cadence is roughly 5-10min per merge during active session; cluster scales linearly with merge count.

### Pred 266-3 — Anchor-to-cluster gap is bimodal (≥30min OR <2min)
**Statement:** Quartet rampages have anchor-to-2nd-merge gap either ≥30min (separated session) or <2min (same-rapid-session). Intermediate gaps (5-25min) are structurally rare.
**Falsifier:** ≥3 observed quartets with anchor-to-2nd-merge gap in [5min, 25min].
**Mechanism:** Author either pauses for reviews (≥30min) or merges all queued PRs in single session (<2min). Intermediate timing requires partial-pause behavior which is empirically uncommon.

### Pred 266-4 — Quartet authors are repeat-quartet-authors within W17
**Statement:** Authors who execute one quartet rampage execute ≥1 additional quartet (or triplet) within the same W17 window (within 7-tick horizon).
**Falsifier:** tanzhenxin executes no additional triplet/quartet within Add.117-Add.123.
**Mechanism:** Quartet behavior reflects author-style (rapid-iterate, batch-merge) more than mission-specific drive — same author tends to repeat the pattern across release cycles.

### Pred 266-5 — Quartet surface set has fixed `core` membership
**Statement:** Quartet rampages in qwen-code (W17) include ≥1 `core` surface merge in 100% of observations (anchor or cluster member).
**Falsifier:** A qwen-code quartet observed with 0 `core` surface merges.
**Mechanism:** `core` is qwen-code's primary engineering surface; rapid-iterate authors target `core` for high-impact changes; release pressure concentrates `core` work.

## Linkage to synth #91, #87, #92, #265

- **Synth #91 triplet metronome**: synth #266 extends to quartet with explicit final-cluster compression bound (≤15min). The metronome cadence (≤30min inter-merge) is preserved within the cluster but anchor-cluster gap can be larger (1h33m observed Add.116).
- **Synth #87 asymmetric-half-merge**: FALSIFIED for the qwen-code Add.115 doublet case. Synth #266 explains why: when the doublet author is also a quartet-rampage author, the doublet is absorbed into the rampage rather than splitting asymmetrically. Synth #87 is reframed as applying to **isolated doublets** where the author does not subsequently rampage.
- **Synth #92 same-second four-PR open tuplet**: synth #266 is the merge-side time-loose analog. Open-side tuplet timing is sub-second (mechanical batch-open via UI/script); merge-side quartet timing is sub-15-min (human batch-merge cadence with intermittent review-wait).
- **Synth #265 reservoir-drain bimodality**: synth #266 IS the qwen-code drain mechanism. The 133% per-repo conversion ratio at Add.116 is precisely the quartet-rampage signature.

## What synth #266 does NOT claim

- Does NOT claim quartet rampages are universal across all qwen-code authors — Pred 266-4 specifically tests author-repeat behavior, not author-population.
- Does NOT predict the next quartet's specific PR numbers, surface set, or mergeCommit SHAs.
- Does NOT generalize quartet to other repos in W17 corpus — opencode (kitlangton burst), codex (etraut-openai resurrection) have not produced quartets in W17 to date.
- Does NOT claim quartet implies low PR quality — sample shows mix of `fix`, `test`, `feat`-adjacent (no clear regression in title/scope rigor vs single-merge cases).

## Capture summary

Add.116 produces W17 corpus's first observed **single-author quartet merge-rampage** (tanzhenxin / qwen-code, 4 merges in 1h41m36s, plus boundary 5th). Synth #266 introduces 5 falsifiable predictions (recurrence cadence Pred 266-1 / HHH, final-cluster scaling Pred 266-2, bimodal anchor gap Pred 266-3, repeat-author Pred 266-4, core-surface membership Pred 266-5) with deadlines spanning Add.117-Add.123. **Together with synth #265 (reservoir-drain bimodality), Add.116 demonstrates that drain ticks are mechanistically generated by single-author rampages — synth #266 is the intra-repo cause; synth #265 is the cross-repo aggregate effect.** **Cited PRs:** qwen-code #3690 `fd672797`, #3691 `6763124a`, #3693 `8807c026` (boundary), #3694 `e973dabf`, #3699 `784b3cef`; supporting context #3688 qwen-code-ci-bot `96116dc7` 06:59:13Z (sdk-typescript v0.1.7 release anchor).
