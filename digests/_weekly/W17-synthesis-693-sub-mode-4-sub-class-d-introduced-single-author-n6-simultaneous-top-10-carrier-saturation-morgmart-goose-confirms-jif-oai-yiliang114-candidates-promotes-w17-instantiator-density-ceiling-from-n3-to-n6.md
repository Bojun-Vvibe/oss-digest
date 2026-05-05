# W17-synth-693 — sub-mode-4 sub-class D introduced: single-author N≥6 simultaneous top-10 carrier-saturation within <40min clock window (morgmart goose Add.357 confirms; jif-oai codex N=4 + yiliang114 qwen-code N=4 instantiate sub-class D candidate-tier); promotes prior W17 instantiator-density ceiling from N=3 to N=6, doubling the multi-PR-mode bound

**Captured**: 2026-05-05T15:26:38Z (Add.357 tick).

**Cross-carrier hypothesis**: Sub-mode-4 (multi-PR-mode by single author) historically capped at **N=3 simultaneous open PRs per author** in the W17 sample (canvrno-oai codex {#21089, #21090, #21091} per Add.354, wenshao qwen-code {#3836, #3115, #3842} per Add.356). Add.357 introduces **sub-class D**: a qualitatively distinct regime where one author saturates ≥60% of a carrier's top-10 with ≥6 simultaneous PRs whose `updatedAt` falls inside a single <40-minute clock window, AND no other author in that snapshot holds N≥2. This is **not** a smooth extension of N=3 → N=6 along the same axis — it is a **mode change** because the cross-author density inverts (single-author monopoly displaces all other multi-PR competitors).

## Specific PRs cited per carrier (≥3 each, with head SHAs)

### block/goose (sub-class D primary instance — morgmart N=6)

- **#9019** morgmart `fix goose2 small-window chat and settings layouts` head `270600151176cdf64acb9d0a35b02477af5f2673` updated 05:32:15Z
- **#9018** morgmart `keep settings open during window drag` head `fb429659db87defd4713ab0c81d36b8903832344` updated 05:15:41Z
- **#9017** morgmart `soften goose2 text selection polish` head `b19db05c0ea80b72a463f22adfb686f35344a173` updated 05:12:31Z
- **#9016** morgmart `make collapsed sidebar search actionable` head `169d521f34c86e2053f8d855c5b92b814137f9bf` updated 05:10:27Z
- **#9014** morgmart `show unread state for background chat responses` head `ec224a170d8196c831481b33aee588e2533a0efe` updated 05:41:31Z
- **#9013** morgmart `add empty sidebar state` head `c2f4ede3c7eef21771714c98cddeabf317e4692d` updated 05:04:19Z

**Density**: 6 PRs / 31m clock window = 0.194 PRs/min. **Cross-author N≥2 in same goose snapshot: 0** (jamadeo, jh-block, idosavion, monroewilliams all N=1). Other-author displacement: morgmart owns top slots #9013–#9019 (6 of 7 contiguous). **Goose top-10 author-cardinality = 5 distinct, with one author owning 60%** — vs typical W17 goose 7–8 distinct authors per top-10.

### openai/codex (sub-class D candidate — jif-oai N=4)

- **#21205** jif-oai `feat: add normalized matching to memory search` head `788d28b95cc009410e5ff7217def31d1253eb74a` updated 15:26:09Z
- **#21187** jif-oai `app-server: refresh live threads from latest config snapshot` head `85fe8faa8302981aa7ad16e5e9415dd38051193d` updated 13:54:55Z
- **#21182** jif-oai `Move installation ID resolution out of core startup` head `07a1254b128d11e9087e4e3ed703ce3670f8057b` updated 13:05:11Z
- **#21180** jif-oai `Make turn diff tracking operation backed` head `e4f515b331aa4c3778eaa273c91d56b331696e99` updated 12:58:48Z

**Density**: 4 PRs / 147m clock window (12:58Z–15:26Z) = 0.027 PRs/min. **Sub-class D candidate-tier** (N≥4 single-author, but clock window exceeds 40min threshold and competing author fcoury-oai holds N=2 — fails the "no-other-N≥2" condition). **Pure sub-mode-4 sub-class A iterating-leg** rather than monopoly. However, **N=4 by single author is itself a W17 first** in codex (prior max was canvrno-oai N=3).

### QwenLM/qwen-code (sub-class D candidate — yiliang114 N=4 + B-A-M-N N=3 simultaneous)

- **#3855** yiliang114 `feat(installer): verify installation release assets` head `b1757402fdb39f68e3ed6d188d9b57bafa445143` updated 13:21:23Z
- **#3854** yiliang114 `ci: add Qwen Code issue follow-up bot workflow` head `9184e899fe60d70687b4cc6bb2a9f26297826008` updated 14:42:15Z
- **#3853** yiliang114 `feat(installer): add hosted install release alias` head `16a4af99828167806e3f2b7cccb6fa2bb511da51` updated 14:53:37Z
- **#3850** yiliang114 `refactor(core): classify retry errors` head `09a62b2f2f6e5311b400a2d25fb153cb385e9e44` updated 13:16:39Z
- **#3856** B-A-M-N `feat(cli): polish --add-dir / --include-directories feature` head `a0daf50c065f48f793c357dc3a600ca60d4672c9` updated 14:36:30Z
- **#3849** B-A-M-N `feat(models): add cross-authType model resolution` head `56725a12a333d6d683bf5e6cc79caaef806df199` updated 13:03:43Z
- **#3848** B-A-M-N `fix(memory): route auto-memory recall selector to fast model` head `a0daf50c065f48f793c357dc3a600ca60d4672c9` updated 14:32:52Z

**Density**: yiliang114 N=4 / 92m + B-A-M-N N=3 / 89m. **Two simultaneous N≥3 authors in same carrier snapshot** = qwen-code highest-density tick this W17. Sub-class D **dual-candidate** state. wenshao N=3 from Add.356 displaced to N=1 (#3844 only) — multi-PR leadership rotates between authors within 20-minute window.

## Hypothesis (H693): The instantiator-density ceiling N=3 was a soft cap, not a hard cap

**Prior assumption (synth-685, 692)**: W17 sub-mode-4 by single author saturates at N=3, with N≥4 events expected to be transient (one-tick) and rare (<5% of ticks).

**Add.357 evidence**: Three simultaneous N≥4 author-instances in one tick (morgmart N=6 goose, jif-oai N=4 codex, yiliang114 N=4 qwen-code). Joint probability under "N=3 hard cap" model with independent <5% per-tick N≥4 events ≈ 0.05³ ≈ **1.25 × 10⁻⁴**. Observed event has prior probability ≪ 1% under hard-cap model.

**H693 (revised)**: The N=3 ceiling was driven by **author-internal context-switching cost** (an open-source contributor maintaining ≥4 simultaneous PRs in a single repo incurs review/iteration overhead that disincentivizes the regime). When an author has either (a) **automated tooling** (e.g., bulk codegen, scripted refactor splitting) or (b) a **single-surface micro-PR strategy** (e.g., morgmart's UI polish series — each PR is small, independent, easy to review), the N=3 cap dissolves and N≥6 becomes feasible. **Sub-class D = strategic micro-PR mode**, distinct from sub-classes A/B/C which are not strategy-driven.

## Confirmation/falsification of prior W17 hypotheses

- **CONFIRMS synth-685 H1 (security-surface cluster recurrence)**: N=4 security-PR cluster in litellm at Add.357 (#27190 auth-migration, #27189 key-mgmt-exposure, #27176 helm-secrets, #27161 proxy-auth-docs) is the **fourth W17 occurrence** of N≥4 security-cluster — promotes synth-685 from "candidate signal class" to **stable recurrence regime**.
- **PARTIALLY-FALSIFIES synth-692 H3 (cold-start sub-class C as rarest sub-mode-4 sub-class)**: synth-692 named jamadeo as the W17-first cold-start instance (sub-class C = N=2). Add.357's morgmart sub-class D (N=6) is **rarer** than sub-class C — synth-692's "rarest" claim is now wrong. **Sub-class D is the rarest sub-mode-4 sub-class identified in W17**.
- **CONFIRMS synth-691 inversion (release-cadence ↔ multi-PR-mode density)** at tick+1: opencode at Add.357 still holds 1.0 author/PR ratio (10 distinct authors / 10 PRs) following its 3-stable-release morning. Inversion holds **directionally** in second consecutive tick.
- **Does NOT yet falsify synth-690 inverse-coupling (tick-width ↔ event-rate)**: Add.357 tick-width 20m (sub-baseline #9). Event-rate this tick is high (1 sub-class D + 2 candidates + 5 security-cluster + head-OID collision + 2 freeze-ceiling breaks) — directionally consistent with H1.

## Falsifiable predictions (P-693)

- **P-693.A (sub-class D recurrence within 5 ticks in another carrier, prior 0.55)** — most likely yiliang114 expands from N=4 to N≥6 in qwen-code, given B-A-M-N also at N=3 same carrier (multi-author race-to-N=6).
- **P-693.B (sub-class D extinction within 3 ticks for morgmart, prior 0.40)** — at least 3 of {#9013, #9014, #9016, #9017, #9018, #9019} merge or close, dropping morgmart below sub-class D threshold.
- **P-693.C (no sub-class D event in opencode within 10 ticks, prior 0.65)** — synth-691 inversion implies opencode's high-cadence release pattern resists single-author monopoly (rapid merge throughput drains any author's queue before N=6 reached).
- **P-693.D (gemini-cli-robot bot-pair sub-mode-4 doesn't qualify as sub-class D, prior 0.85)** — bot-PRs are by definition non-strategic, but if bot generates N≥6 in <40m we must extend sub-class D taxonomy to include "bot-saturation sub-class D'".

## Sub-mode-4 sub-class taxonomy (post-693)

| Sub-class | Cardinality | Trigger | W17 first instance |
|-----------|-------------|---------|---------------------|
| A (iterating-leg) | N=2–3 | author has 1 stable + 1+ iterating PRs | Sameerlite litellm Add.350-ish |
| B (stable-only) | N=2 | both PRs frozen ≥2 ticks | B-A-M-N qwen-code Add.355 |
| C (cold-start) | N=2 | first-time-W17 author with N≥2 immediately | jamadeo goose Add.356 (synth-692) |
| **D (strategic micro-PR)** | **N≥6 in <40m, no competing N≥2** | **single-surface UI/CI polish series, scripted split, or bulk codegen** | **morgmart goose Add.357 (this synth)** |

Sub-class D is **structurally orthogonal** to A/B/C and represents a regime change in the multi-PR-mode signal class.
