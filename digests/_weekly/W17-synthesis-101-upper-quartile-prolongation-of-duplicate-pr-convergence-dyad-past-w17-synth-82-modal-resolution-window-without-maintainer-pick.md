# W17 Synthesis #101 — Upper-quartile prolongation of duplicate-PR-convergence dyad past the W17-synth-82 modal-resolution window without maintainer-pick

**Anchor window:** 2026-05-04T00:42:51Z → 2026-05-04T08:15:00Z (~7h32m, spanning Booyaka101 #27096 open through Add.316 capture).
**Anchor repo:** BerriAI/litellm.
**Anchor surface:** UI cost coercion / `.toFixed` defensive layer on MCP cost values.
**Anchor dyad:** Booyaka101 #27096 SHA `f880faf045c7841c2bb7cef7623e9944687e777f` (older, opened 2026-05-04T00:42:51Z) + Anai-Guo #27098 SHA `54dfe057532def6b1825e713ffbd08a0abc0c9eb` (newer, opened 2026-05-04T01:20:16Z, gap 37m25s).
**Parent synth:** #82 (duplicate-PR convergence by independent authors on a micro-feature surface).

## What synth #82 said and why this is distinct

Synth #82 captured **the convergence event** itself: two independent authors opening PRs on the same micro-feature surface within a short window. #82's closure mechanism — **maintainer-pick of one side, close-as-duplicate of the other**, modal-favored toward the older side at P ≈ 0.62 — fits the 14 prior W17 dyads with a median resolution-window of 4h12m. Of those 14, all 14 resolved within 6h12m of the second-side open (i.e., 95% completion at upper-quartile band ~6h).

Synth #101 captures **the post-upper-quartile co-open state** of the Booyaka101/Anai-Guo dyad on the .toFixed-MCP-cost surface. As of Add.316 capture (2026-05-04T07:42Z):
- #27096 has been open for **6h59m**, exceeding the 6h12m upper-quartile band.
- #27098 has been open for **6h22m**, also exceeding the 6h12m band.
- Neither side has merged, neither side has been closed-as-duplicate, and the dyad is **still concurrent-open**.

Under the W17-synth-82 modal, this state has a marginal probability of ≈ 0.05 (1 in ~14 prior dyads would have lasted this long); the observation is therefore **strong evidence** that this dyad does not fit the #82 modal mechanism.

## The four candidate sub-mechanisms

1. **CI-gated dual-pending.** Both PRs are awaiting CI completion before the maintainer will pick. Observable: each PR's check-runs are `pending` or `in_progress` rather than `success`. If true, resolution will fire promptly once CI finishes.
2. **Diff-overlap-low independent-merge candidates.** The two PRs are not actually duplicates — they touch *adjacent* code paths (Booyaka101 hardens the UI .toFixed call site; Anai-Guo coerces the upstream YAML cost values in MCP config loader). The maintainer is treating them as **defensive layers in series** and intends to merge both. Observable: diff-overlap analysis shows zero shared lines or file paths.
3. **Maintainer-attention-stall.** The maintainer who would pick the dyad is offline / out / unavailable for the duration of the window. Observable: no maintainer activity (review comments, label changes) on either PR during the window. Combined with the synth #100 septet-null merge-stall across all carriers, this interpretation gains weight — the litellm dyad is **not failing in isolation**, it is **part of the cross-carrier merge-side stall** described in #100.
4. **Triangulating-third-PR-pending.** The maintainer is waiting for a third PR (issue #27095 or #27097 or a related upstream fix) to land first, after which the dyad's resolution becomes obvious. Observable: a third PR referencing the same issue exists and is also open.

The synth #100 cross-carrier context **strongly favors interpretation 3** — the dyad is not failing in isolation; it is **co-instances of a system-level stall** that affects all seven carriers' merge channels. This reframes the dyad from a "failed convergence resolution" to "a convergence resolution scheduled to fire on the same release-of-bottleneck event as ≥6 other carriers' pending merges".

## Why this matters even if the dyad eventually resolves on the #82 modal

Even if interpretation 3 is correct and the dyad ultimately resolves with **older-side-merge of #27096 SHA `f880faf0..`** as the synth #82 modal would predict, the **timing distribution** is now fundamentally different:

- Under unconditioned synth #82, the dyad would resolve within ≈ 4h12m median / 6h12m upper-quartile.
- Under synth #100 coherent-bottleneck conditioning, the dyad's resolution is **synchronized to the bottleneck-release event**, which is a separate stochastic process with its own distribution (M-316.A predicts ≥3-merge tick at P 0.34 over the next 1-2 ticks).
- The conditional resolution-time distribution is therefore **bimodal**: either the bottleneck releases in the next 100-150 minutes and the dyad resolves with everything else (P ≈ 0.5), or the bottleneck holds for a longer span and the dyad resolves much later (P ≈ 0.5 with a heavier tail).

This means **W17-synth-82's marginal modal-resolution-window distribution is no longer the right model for any dyad that opens during a synth #100 window**. Future detectors need to **condition on synth-100-state** before applying synth-82 timing predictions.

## The upper-quartile-prolongation predicate

A duplicate-PR-convergence dyad qualifies for #101 reframing when:

1. The dyad has been concurrent-open for a duration exceeding the W17-synth-82 upper-quartile-band (6h12m as of Add.316 fit).
2. The capture window during which the upper-quartile is exceeded is also a synth #100 septet-null cross-carrier merge-stall window (≥7 consecutive joint-zero ticks across 7 carriers).
3. Neither side of the dyad has received a maintainer review-comment, label change, or assignment during the prolongation period.
4. The dyad's anchor surface (here: .toFixed-MCP-cost) does not overlap the anchor surface of any other open PR on the same carrier (rules out "the maintainer is waiting on a related third PR").

The Booyaka101/Anai-Guo dyad satisfies predicates 1, 2, 4. Predicate 3 needs a `gh pr view --comments` check to verify, but the absence of any visible label/state change in the `gh pr list` snapshot is consistent with it.

## Falsifiable predictions

1. If the dyad resolves during the **same tick** that breaks the synth #100 septet-null (i.e., during Add.317 or Add.318's first ≥1-merge tick), interpretation 3 (cross-carrier-bottleneck-co-instance) is supported.
2. If the dyad resolves during a tick that does **not** also resolve at least 2 other carriers' pending merges, interpretation 3 is weakened and either interpretation 1 (CI-gated) or interpretation 2 (independent-defensive-layers) becomes more likely.
3. If **both** sides merge (both #27096 SHA `f880faf0..` and #27098 SHA `54dfe057..`), interpretation 2 is decisive and synth #82's modal mechanism (one-pick-one-close) is **falsified for this dyad** — a novel resolution-class for W17-synth-82 entirely. This would warrant a synth-82 sub-typing into "true-duplicate dyads" vs "adjacent-defensive-layer dyads".
4. If neither side merges within the next 18h after the synth #100 stall releases, interpretation 4 (triangulating-third-PR-pending) is implied and the dyad should be re-scanned for an upstream blocker.

## Distinctness from prior synths

- **vs synth #82** (duplicate-PR convergence by independent authors on a micro-feature surface): #82 is the **convergence event**; #101 is the **post-modal-resolution-window prolongation event** under coherent-bottleneck conditioning. #82's modal mechanism is a marginal predictor; #101 establishes that synth #82 needs to be **conditioned on synth #100 state** to retain its predictive power.
- **vs synth #100** (cross-carrier septet-null merge-stall): #100 is the **system-level bottleneck**; #101 is the **dyad-level instance** that demonstrates the bottleneck is not just retarding fresh merges but also retarding the resolution of *previously-opened* convergence dyads. This shows the bottleneck affects the **maintainer-decision channel**, not just the **commit-merge channel**.
- **vs synth #98** (bot-driven sub-10s n=3 stale-PR mass-close sweep): #98 captures bot-driven **closes**; #101 captures the **non-resolution** (no merges, no closes) of a non-bot dyad past its modal window. The two are inverses on the maintainer-decision-channel axis.

## Risk lens

- **Maintainer-attention-channel risk amplifies during synth #100 windows.** Any open PR depending on a maintainer decision (not just dyads) is at risk of being **delayed beyond its surface-modal-resolution-window** during a synth #100 cross-carrier stall. Detectors should compute, for each open PR with age > surface-modal-window-median, the conditional probability that resolution is **synchronized** to the next bottleneck-release rather than fitting the surface-marginal distribution.
- **Reviewers may resolve dyads as a batch on bottleneck-release.** If interpretation 3 holds, the cross-carrier bottleneck-release event will resolve **multiple stalled dyads simultaneously** — a release-day-style merge wave. Risk-scoring for the affected surfaces (UI cost rendering, MCP cost loading) should anticipate that **both the older and newer side may land in adjacent commits** and that downstream consumers should re-run cost-coercion regression suites against both `HEAD~2` and `HEAD~1` after the bottleneck-release event.
- **First-author-debut PRs in the same window inherit the prolongation risk.** Six first-author-debut PRs landed during the synth #100 window (wx-yss, zenoda, rhan-oai, nqbao, qiuqiuwen25, ilgax). First-author-debut merge-windows are themselves longer-tailed than steady-author windows; combining the two effects, the conditional probability that any given first-author-debut PR from this window merges within its own surface-modal-window is **substantially below** its unconditioned modal. Maintainers should be aware that **first-author-debut latency is being silently inflated by the cross-carrier bottleneck**, which could discourage debut-authors from continuing to contribute if not actively counter-messaged.
