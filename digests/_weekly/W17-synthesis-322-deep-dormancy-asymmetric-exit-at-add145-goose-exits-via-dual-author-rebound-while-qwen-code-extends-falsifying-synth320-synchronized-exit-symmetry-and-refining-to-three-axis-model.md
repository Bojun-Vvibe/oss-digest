# W17 Synthesis #322 — Synth #320 deep-dormancy synchronized-class-transition framing observes ASYMMETRIC EXIT at Add.145 (goose exits n=4 → n=0 via dual-author rebound, qwen-code extends n=4 → n=5); the synchronized-entry symmetry of Add.144 does NOT predict synchronized exit, falsifying P-320.B's strong form and refining the two-axis state model

**Scope:** Add.145 (2026-04-29T06:37:23Z) deep-dormancy class-exit asymmetry, with full Add.143-145 entry-and-exit trajectory and reference to synth #320 P-320.B (corpus-silence-mediated synchronized transition), synth #316 M-312-M non-absorbing rule, and the goose+qwen-code joint Add.144 entry pattern.

## Claim (falsifiable)

**P-322.A:** At Add.145, the synth #320 P-320.B prediction of corpus-silence-mediated synchronized deep-dormancy class transition observes **asymmetric exit at the multi-repo level**: goose (entered n=4 at Add.144) **exits** the deep-dormancy class via a dual-author ~8m rebound pair (#8895 lifeizhou-ap `e4ef5ea4` 05:54:58Z + #8873 matt2e `0bb87dae` 06:03:26Z), while qwen-code (also entered n=4 at Add.144) **extends to n=5** with zero in-window merges. Despite identical entry conditions (synth #320 P-320.A: same Add.144 tick, same n=4 hard-threshold crossing, same corpus-silence regime context), the Add.145 exit behavior is **maximally asymmetric**: 100% exit for goose, 0% exit for qwen-code.

**P-322.B:** The synth #320 P-320.B framing — "corpus-silence-exit and per-repo-deep-dormancy-exit are co-located on the same Add tick" — is **falsified at the multi-repo collective level** but **partially confirmed at the per-repo level**: the framing holds for goose (corpus exits silence at Add.145, goose exits deep-dormancy at Add.145) but not for qwen-code (corpus exits silence at Add.145, qwen-code does NOT exit deep-dormancy and instead deepens). The corpus-silence-regime is therefore a **necessary but not sufficient** condition for per-repo deep-dormancy exit; per-repo intrinsic factors (distinct from the corpus-silence axis) determine whether a given deep-dormancy repo participates in any specific silence-exit tick.

**P-322.C:** The two-axis state model from synth #320 P-320.C should be **refined to a three-axis model**: (i) per-repo activity history (existing, the n value), (ii) corpus-wide silence regime membership at the current tick (synth #320 addition), and (iii) **per-repo intrinsic exit-readiness** measured by author-pool diversity, recent PR-queue depth, or repo-specific cadence regime. Goose's dual-author rebound (lifeizhou-ap + matt2e) suggests goose has author-pool diversity and queued PRs at Add.145; qwen-code's continued silence suggests neither condition is met for qwen-code. The Add.144 P-144.B-style "multi-PR-burst exit" prediction is partially supported by goose (n=2 exit) and remains untested for qwen-code.

## Evidence (Add.143-145 deep-dormancy entry/exit trajectory, all PR/SHA citations from ADDENDUM-143 through ADDENDUM-145)

### Joint Add.144 entry conditions (per synth #320 P-320.A)

| Repo | Last merge anchor | Anchor SHA | Anchor time | n at Add.143 | n at Add.144 (entry) | Entry context |
|---|---|---|---|---|---|---|
| goose | #8890 lifeizhou-ap | `56b84590` | 02:45:26Z | n=3 (candidate-soft) | **n=4 (hard threshold crossed)** | Corpus-wide silence tick (Add.144 strict-zero) |
| qwen-code | #3577 pomelo-nwu | (per Add.140) | 03:19:00Z | n=3 (candidate-soft) | **n=4 (hard threshold crossed)** | Corpus-wide silence tick (Add.144 strict-zero) |

Identical entry tick (Add.144), identical n value (4), identical corpus-state context (strict-zero rate). Synth #320 P-320.A correctly identified the synchronized entry.

### Asymmetric Add.145 exit behavior

| Repo | Add.144 state | Add.145 in-window merges | Add.145 state | Exit shape |
|---|---|---|---|---|
| goose | n=4 (hard threshold) | **2** (#8895 lifeizhou-ap `e4ef5ea4` 05:54:58Z + #8873 matt2e `0bb87dae` 06:03:26Z) | **n=0 (exited)** | Dual-author 8m28s pair; self-author-bracketed (lifeizhou-ap also anchored entry #8890) |
| qwen-code | n=4 (hard threshold) | 0 | **n=5 (extended)** | No exit; deepens to n=5; depth post-#3577 = 3h18m23s+ at Add.145 close |

**Synchronized-entry → asymmetric-exit:** 1 of 2 deep-dormancy-class repos exit at the first post-entry medium-width tick.

### gemini-cli context (also a deep-dormancy repo at Add.144, n=7)

| Repo | Add.144 state | Add.145 in-window merges | Add.145 state | Exit attempted? |
|---|---|---|---|---|
| gemini-cli | n=7 (W17 record) | 0 | **n=8 (W17 record extended)** | NO — fourth consecutive post-record tick of sustained dormancy |

gemini-cli is a confounding case for synth #320 P-320.B: it was already in deep-dormancy class well before Add.144 (entered at n=4 at Add.141 per synth #313 reference), and its Add.145 sustained dormancy is consistent with a per-repo intrinsic state (synth #313 framework) rather than corpus-silence-mediated. The three-axis model in P-322.C accommodates gemini-cli as **axis-(i)-dominant** (per-repo deep-history overrides corpus-silence axis), goose as **axis-(ii)-dominant at exit** (corpus-silence-exit triggers exit), and qwen-code as **axis-(iii)-dominant** (per-repo intrinsic exit-readiness absent, corpus-silence-exit alone is insufficient).

### Decomposition of the Add.145 exit asymmetry

| Possible exit-readiness factor | goose | qwen-code |
|---|---|---|
| Author-pool diversity in last 24h | YES (multiple distinct authors per addenda record) | UNKNOWN-LOW (synth #145 framing: lone-merger pattern) |
| Queued PRs at Add.145 | YES (≥2 PRs merged within 8m of each other) | UNKNOWN-NONE-OBSERVED |
| Repo-specific cadence regime | Active (release patch shipped: #8895 v1.33.1) | Slow (per pomelo-nwu lone-merger anchoring) |
| Corpus-silence-exit timing | YES (Add.145 is corpus-exit tick) | YES (same tick) |

The shared corpus-silence-exit timing is the same; the discriminating factors are repo-intrinsic (P-322.C axis (iii)).

## Cross-references to prior synths

- **Synth #320** (deep-dormancy class membership doubles at Add.144, two-axis state model) is **the direct subject of this re-evaluation**. P-320.A (synchronized entry) is sustained as a one-time observation. P-320.B (corpus-silence-mediated synchronized transition for both entry AND exit) is **falsified at the exit-symmetry level** by Add.145 asymmetric exit. P-320.C (two-axis model) is **refined to three-axis** by P-322.C.
- **Synth #316** (opencode exits deep-dormancy at n=5 via dual-author rebound, M-312-M non-absorbing rule) provides a **precedent shape** for goose's Add.145 exit: dual-author rebound is now observed at TWO distinct deep-dormancy exit events (opencode at Add.140-band, goose at Add.145). The dual-author rebound shape is a candidate **canonical exit pattern** for the deep-dormancy class (M-322.M proposal: deep-dormancy exits favor dual-author rebound shapes over lone-merger shapes; falsifier is any future deep-dormancy exit via lone-merger).
- **Synth #313** (gemini-cli deep-dormancy entry) frames gemini-cli's per-repo intrinsic deep-dormancy mechanism. Synth #322 P-322.C explicitly invokes axis-(i) (per-repo activity history) for gemini-cli's sustained n=8 at Add.145, distinguishing it from the corpus-silence-mediated mechanism applicable to goose+qwen-code.
- **Synth #312** (opencode n=4 hard threshold) established n=4 as the hard deep-dormancy threshold. Add.145 confirms the threshold is **exit-permeable for some repos** (goose exits cleanly at n=4 → n=0 via dual-author rebound) but **deepening for others** (qwen-code n=4 → n=5).
- **Synth #145** (qwen-code lone-merger shape, anchor #3577 pomelo-nwu) provides the historical context for qwen-code's Add.145 non-exit: qwen-code's late-W17 shape is dominated by lone-merger anchors with extended silence intervals, consistent with axis-(iii) low intrinsic exit-readiness.

## Falsification targets

- **P-322.A** (asymmetric exit at Add.145 with goose exit / qwen-code non-exit) is **already realized**; falsification would require retroactive Add.145 evidence of qwen-code merges (none in the cited record).
- **P-322.B** (corpus-silence-exit is necessary but not sufficient for per-repo deep-dormancy exit) is falsified if any future deep-dormancy class repo exits during a corpus-silence tick (corpus rate = 0 for the exit tick), demonstrating that corpus-silence-exit is not even necessary. Conversely, P-322.B is **strengthened** if all observed future deep-dormancy exits occur exclusively at corpus-non-silent ticks.
- **P-322.C** (three-axis model: per-repo n + corpus-silence + per-repo intrinsic exit-readiness) is falsified if a future deep-dormancy exit can be predicted from axes (i) and (ii) alone without invoking axis (iii). The discriminating test: at the next corpus-silence-exit tick where ≥2 deep-dormancy repos are eligible, P-322.C predicts asymmetric exit; P-320.B v1 predicts symmetric exit.
- **M-322.M candidate** (deep-dormancy exits favor dual-author rebound shapes) is falsified if the next deep-dormancy exit (qwen-code, gemini-cli, opencode whenever they exit) occurs via lone-merger.

## Operational implication

The deep-dormancy class state should now be tracked with three metadata fields per repo:
1. **Per-repo n** (existing): zero-merge tick count post-anchor.
2. **Entry tick corpus-state** (added in synth #320): rate at the n=4-crossing tick.
3. **Exit-readiness signal** (added in synth #322): a combination of (a) author-pool diversity in last 24h, (b) observed PR-queue depth via gh API, (c) repo-specific cadence regime classification.

Predictive heuristics:
- A deep-dormancy repo with HIGH exit-readiness AT a corpus-silence-exit tick is most likely to exit (Add.145 goose).
- A deep-dormancy repo with LOW exit-readiness AT a corpus-silence-exit tick will deepen despite the corpus-state shift (Add.145 qwen-code).
- A deep-dormancy repo with deep per-repo n (≥6, axis-(i)-dominant) is independent of the corpus-state axis (Add.145 gemini-cli).

The Add.146 tick provides the next test for this framework. The deep-dormancy class membership at Add.145 close is: gemini-cli n=8 (axis-(i)-dominant), qwen-code n=5 (extending), opencode n=3 candidate-soft (one tick from hard threshold), litellm n=3 candidate-soft (one tick from hard threshold), goose n=0 (just exited). If Add.146 is also non-silent, the three-axis model predicts at most 1 of {qwen-code, opencode, litellm} exits (axis-(iii) discriminating), while the synth #320 P-320.B v1 framing would predict broader exit. If Add.146 is silent, synth #320 P-320.B v1 predicts no exit (corpus-silence prevents exit), while the three-axis model predicts no exit purely from axis (ii) regardless of axis (iii) — equivalent prediction at silence ticks, divergent prediction at non-silent ticks.

## Concrete PR-grounded illustrations (Add.145 deep-dormancy exit)

Goose's Add.145 deep-dormancy exit was effected by exactly 2 merges:
- block/goose **#8895** (lifeizhou-ap, `e4ef5ea4aad03e05c2804208abc2b1aa429ffdeb`, 05:54:58Z) — Lifei/release 1.33.1 patch, **self-author-bracketed**: lifeizhou-ap also authored #8890 `56b84590` (the silence-anchor that initiated the n=4 streak). The same author who put goose into the streak takes it out.
- block/goose **#8873** (matt2e, `0bb87daefd3e8a789d9e82edab6f7bfde47dc058`, 06:03:26Z) — perf: deduplicate _goose/providers/list RPC call at startup, **distinct author** from the anchor, completing the dual-author exit pair within 8m28s of #8895.

The exit shape is structurally a **release-patch + perf-fix dual-author pair** — not a coordinated burst, but two distinct workstreams (release management + perf engineering) merging within minutes of each other. This shape is consistent with axis (iii) HIGH intrinsic exit-readiness: goose has parallel workstreams ready to merge as soon as the release-patch lands.

By contrast, qwen-code's continued silence at Add.145 reflects axis (iii) LOW intrinsic exit-readiness: no merges have occurred since pomelo-nwu #3577 (lone-merger), no parallel workstreams have surfaced, and the 3h18m23s+ depth at Add.145 close shows no convergence toward an exit-readiness threshold.
