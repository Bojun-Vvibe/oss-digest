# W17 Synthesis #609 — Post-Add.302 opencode anchor-author dominance-via-kitlangton-streak-extension at quintet-position falsifies M-301.A bounded-rotation cohort-cap and instantiates rotation-to-streak intra-window regime-transition primitive

**Anchor window:** 2026-05-03T17:21:34Z → 2026-05-03T20:41:10Z (3h19m36s, spanning Add.298 → Add.302).
**Anchor repo:** sst/opencode.
**Anchor authors (intra-quintet share):** kitlangton 3/5 = 60%, OpeOginni 1/5 = 20%, thdxr 1/5 = 20%.
**Parent synths:** #607 (bounded-rotation cohort-cap primitive — partially falsified at this synth), #602 (bimodal-recovery-distribution primitive — extended at this synth via singleton-quartet co-instantiation), and the M-301.A first-W17-instance now reframed as a quartet-window-bounded observation.

## The five PRs that instantiate the quintet

| Tick | PR | Merged | Author | Surface |
|---|---|---|---|---|
| Add.298 | [sst/opencode#25600](https://github.com/sst/opencode/pull/25600) | 2026-05-03T17:21:34Z `adb7cb1037d24aa18021133b5993fa81869d8ba0` | @OpeOginni | `fix(auth): add username option for basic auth in RunCommand` |
| Add.299 | [sst/opencode#25598](https://github.com/sst/opencode/pull/25598) | 2026-05-03T18:23:30Z `387220f368ca3a31d94b4be3937d9d825ebd888c` | @kitlangton | `fix(server): support desktop PTY websockets with HttpApi` |
| Add.300 | [sst/opencode#25628](https://github.com/sst/opencode/pull/25628) | 2026-05-03T18:45:48Z `7749d8e85f2bf4879ee98af90066c167153bb19b` | @thdxr | `Add v2 session failure events` |
| Add.301 | [sst/opencode#25632](https://github.com/sst/opencode/pull/25632) | 2026-05-03T19:44:24Z `6312c55d55e83a3d9a68ffd56f9cc4298b245901` | @kitlangton | `fix(server): serve embedded UI from bunfs` |
| Add.302 | [sst/opencode#25633](https://github.com/sst/opencode/pull/25633) | 2026-05-03T20:41:10Z `825ab2e38d1f41074bb536b6ba5771f30594b197` | @kitlangton | `refactor(cli): effectify provider commands` |

## Why this synth is distinct from synth #607

**(a) Synth #607 captured the bounded-rotation cohort-cap primitive at the quartet (Add.298-301)** projecting that the quintet-extension would either continue the rotation pattern (a second cyclic-return at gap-2 from a non-most-recent author, lifting cum BF to ×80-120) or terminate the active stretch via return-to-silent (modal P-301.A at 0.30). The Add.302 outcome **#25633 by @kitlangton** falsifies the rotation-continuation projection at first-attempt: the fifth tick is a **gap-1 streak-extension** of the same author who held the fourth tick (kitlangton at Add.301 → kitlangton at Add.302), not a cyclic-return.

**(b) The quintet exhibits a regime-transition rather than regime-extension.** Within a single 5-tick window, the cohort moved from:
  - rotation-eligible at Add.298 (singleton with one author),
  - rotation-active at Add.299 (second-distinct-author),
  - rotation-confirmed at Add.300 (third-distinct-author = three-distinct-author-triplet primitive),
  - cyclic-return at Add.301 (kitlangton return at gap-2 = bounded-rotation cohort-cap primitive),
  - **streak-extension at Add.302** (kitlangton again at gap-1 = anchor-author-dominance regime).

  This is the **rotation-to-streak intra-window regime-transition** primitive at first-W17-instance, distinct from any single-regime synth in the corpus.

**(c) The intra-quintet author-share asymmetry is structurally meaningful.** kitlangton occupies 60% of the active ticks (3 of 5) versus the prior triplet-equal-distribution. In a hypothetical rotation regime, the share would have been 2/5 / 2/5 / 1/5 (with one returner gaining a second tick) at most asymmetric. The 3/5 share is **strictly outside the rotation-regime envelope** at the quintet-position.

## The rotation-to-streak intra-window regime-transition predicate

A cohort-active sequence on a single repo qualifies as **rotation-to-streak intra-window regime-transition** under #609 when:
1. A bounded-rotation cohort-cap event occurred at ticks N..N+3 (qualifying under synth #607's five predicates).
2. Tick N+4 is also active.
3. The author at tick N+4 equals the author at tick N+3 (gap-1 streak-extension rather than gap-≥2 cyclic-return).
4. The intra-(N..N+4) author-share asymmetry exceeds 50% for any single author (i.e., one author dominates the quintet).
5. Inter-tick inter-merge gaps are non-monotonic across the quintet (i.e., not a velocity-saturation pattern).

All five predicates are satisfied for the Add.298-302 opencode quintet.

## Joint Bayes factor against alternative hypotheses

- vs **bounded-rotation extension via second cyclic-return** (synth #607's primary projection at quintet-extension): the data **falsifies the rotation-continuation** at first-attempt. Cum BF on M-301.A bounded-rotation cohort-cap deflates ×47.6 → ×30.0 (per ADDENDUM-302 M-302.A computation).
- vs **return-to-silent at quintet-position** (P-301.A modal at 0.30): falsified at first-attempt — Add.302 was active rather than silent.
- vs **fresh-fourth-distinct-author** (P-301.A sub-modal at 0.15): falsified at first-attempt.
- vs **rotation-back to thdxr or OpeOginni** (each P-301.A sub-modal at 0.15): falsified at first-attempt.
- For **anchor-author-dominance via kitlangton-streak-extension** (P-301.A sub-modal at 0.25): confirmed at first-attempt with cum BF ×29.4 (per ADDENDUM-302 M-302.A computation).

## Falsifiable predictions for the next 5 ticks

1. If Add.303 sustains opencode-active with a sixth member that is also kitlangton (gap-1 sextet-streak-extension), the dominance-via-streak primitive lifts ×29.4 → ×50-70 at sextet-realization confirming **anchor-streak as a stable post-rotation regime**.
2. If Add.303 sustains opencode-active with a sixth member that is OpeOginni or thdxr (cyclic-return at gap-3 or gap-4), the cohort transitions back to rotation regime and the primitive deflates ×29.4 → ×18.0 — the quintet-streak was a **transient asymmetry** rather than a regime.
3. If Add.303 introduces a fourth-distinct author (e.g., nexxeln who landed [#25596](https://github.com/sst/opencode/pull/25596)/[#25597](https://github.com/sst/opencode/pull/25597) on 2026-05-03 at 13:48Z/13:58Z, immediately pre-Add.298, with mergeCommits `8694c5b68fc57e7e1bb8129b72b08e128dce9f17` / `0a7d02c87cea5092f34aafba846d136870ac27bc`), the cohort was **larger than three** all along and both synth #607 and synth #609 must be reframed as window-bounded observations on a four-or-more-author cohort.
4. If Add.303 returns to silent (modal P-302.A at 0.35), the quintet was the **terminal-active span** and the rotation-to-streak transition was the closure-mechanism of the active stretch.
5. If the **same rotation-to-streak intra-window regime-transition pattern** appears on a second carrier within the next 20 ticks (e.g., codex transitioning from etraut-openai → aibrahim-oai → pakrym-oai → etraut-openai → etraut-openai per the recent author cluster on PRs [#20893](https://github.com/openai/codex/pull/20893) `39555036a32e568a4a9ff2814ff497b2076d965b` / [#20896](https://github.com/openai/codex/pull/20896) `67849d950d843c954102adb0db0e11f993aefdb7` / [#20823](https://github.com/openai/codex/pull/20823) `51368db8187bb6bf2807bd978e9a0ee793da2882` / [#20751](https://github.com/openai/codex/pull/20751) `35aaa5d9fcb606fb6f27dd5747ecab3f4ba0c07e`), the primitive is **carrier-agnostic** and elevates from a per-carrier observation to a corpus-level cohort-rotation regime-transition primitive.

## Distinctness from prior synths

- **vs synth #607** (bounded-rotation cohort-cap primitive): #607 captured the rotation regime at the quartet; #609 captures the **post-rotation streak-transition** at the quintet. The two are connected by a regime-boundary at Add.301 → Add.302 — they describe sequential phases of the same intra-window evolution but operate on different structural events (rotation vs streak).
- **vs synth #602** (bimodal-recovery-distribution primitive): #602 operates on the cardinality-axis (singleton vs doublet recovery modes); #609 operates on the **author-rotation-axis within the singleton mode at quintet-position**, which is a structurally orthogonal dimension. Both are confirmed at this tick (cardinality singleton-quartet co-instantiates with author-streak-extension).
- **vs synth #604** (latent-clock-asymmetric-collapse primitive): #604 operates on slow-tier-carrier silence axis (codex silent-quartet now at n=4 sustains synth #604 via P-301.B at first-attempt); #609 operates on the **fast-tier opencode active-axis dominance pattern**. Orthogonal carrier-class.
- **vs synth #605** (three-distinct-author-triplet primitive on opencode): #605 captured the cohort-expansion-via-triple-author-rotation framework at Add.298-300; #609 captures the **post-triplet evolution** at Add.301-302 showing that the cohort did not continue expanding. The two synths together form a complete trajectory: triplet-expansion (#605) → cyclic-return-bounded-rotation (#607) → streak-dominance-transition (#609).
- **vs prior single-author streak synths** (synth #91 single-author triplet, #97 single-author N=3 series, #99 single-author N=4 with growing inter-pr-gap): these captured streaks at the **outset** of an active sequence (single-author origin); #609 captures a streak that emerged **post-rotation** at the **terminal** end of a five-tick active sequence — structurally distinct origin (post-cohort-expansion vs ab-initio-single-author).
