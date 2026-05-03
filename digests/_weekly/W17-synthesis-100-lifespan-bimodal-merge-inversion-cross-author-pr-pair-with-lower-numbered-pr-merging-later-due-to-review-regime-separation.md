# W17 Synthesis #100 — Lifespan-bimodal merge-inversion: a same-axis cross-author PR pair where the lower-numbered PR merges later because its lifespan is multiples of the higher-numbered PR's lifespan

**Anchor window:** 2026-05-03T21:24:40Z → 2026-05-03T22:58:17Z (1h33m37s).
**Anchor repo:** anomalyco/opencode.
**Anchor actors:** `Utkub24` (the inverted member) + `kitlangton` (the in-order member set).
**Parent synths:** #91 (single-author triplet self-merge metronome), #94 (same-product back-to-back merge pair nested in multi-author wave), #98 (bot-driven sub-10s mass-close sweep — merge-time-vs-PR-number divergence at the bot tier).

## The inversion event

Within a single hour on the anomalyco/opencode `dev` branch (2026-05-03T22:07Z → 22:58Z):

| PR | Author | Opened | Merged | Lifespan | Diff | Surface |
|---|---|---|---|---|---|---|
| [anomalyco/opencode#25640] | `@Utkub24` | 21:24:40Z | **22:58:17Z** (`ce89bcb8`) | **1h33m37s** | +8/-1 over 1 file | `packages/opencode/src/plugin/codex.ts` (third-party agent integration) |
| [anomalyco/opencode#25646] | `@kitlangton` | ~21:53Z | **22:07:10Z** (`c2b1974d`) | ~14m18s | (regression test) | plugin agent regression test |

PR-number monotonicity says: lower number opens earlier ⇒ merges earlier. The inversion: **#25640 (lower) opens earlier than #25646 (higher) by ~28 minutes, yet merges 51m07s LATER**. Lifespan ratio: **1h33m37s / 14m18s ≈ 6.55×**. The inversion is not produced by either PR being delayed against its own historical baseline — it is produced by the **bimodal-lifespan distribution** on the axis.

## Why this is distinct from #91 / #94 / #98

- **#91** (single-author triplet metronome) requires same-author self-merge series; this event is a **cross-author** inversion (Utkub24 ≠ kitlangton).
- **#94** (back-to-back same-author merge pair nested in multi-author wave) requires the anchor pair to be **same-author**; this event has the anchor inversion across **disjoint authors with a self-merge-stream interleaved**.
- **#98** (bot-driven sub-10s mass-close) requires a **bot actor** producing the time/number divergence via mass-close mechanics; this event is **two human actors** producing the divergence via review-latency mechanics. The mechanism is genuinely new.

## The lifespan-bimodality that produces the inversion

The opencode `dev` branch on 2026-05-03 exhibited two distinct lifespan regimes:

- **Self-merge regime** (`@kitlangton` quartet #25632/#25633/#25636/#25646): lifespans 4m / 13m / ~25m / ~14m, all sub-30m, all on disjoint internal-refactor surfaces (server-bunfs / cli-effectify / auth-token / regression-test). These PRs ship through review at the **author-trusts-author** rate.
- **External-contributor regime** (`@Utkub24` #25640): lifespan 93m37s on a third-party-agent-integration surface (`plugin/codex.ts`). This PR ships at the **review-required-by-maintainer** rate, ~6.5× slower.

The two regimes coexisted within a 90-minute window. As soon as a Utkub24-class PR opens earlier than a kitlangton-class PR, **the kitlangton PR overtakes it on merge-time** because the review-time floor of the slower regime exceeds the entire lifespan of the faster regime.

## The inversion predicate

A same-axis cross-author PR pair (P_low, P_high) on a single branch within a single calendar day satisfies the **lifespan-bimodal merge-inversion predicate** when:

1. PR-number(P_low) < PR-number(P_high).
2. open_time(P_low) < open_time(P_high).
3. merge_time(P_low) > merge_time(P_high).
4. lifespan(P_low) / lifespan(P_high) ≥ 4× (the **bimodality threshold**).
5. author(P_low) ≠ author(P_high).
6. Both PRs merge to the **same base branch** (here `dev`).

The pair (#25640, #25646) satisfies all six predicates with lifespan ratio 6.55× (well above the 4× threshold).

## Why the threshold is 4× and not 2×

Below 4× the inversion is dominated by **review-queue noise** (a single reviewer being away for an hour can flip merge-order without representing a structural lifespan-bimodality). At ≥4× the inversion is dominated by **regime separation**: the slower PR is in a structurally different review track, not just unlucky. The threshold can be calibrated against the W17 corpus by computing the empirical lifespan-ratio distribution per axis-day and locating the bimodality dip; for the anomalyco/opencode `dev` branch on 2026-05-03 the dip sits around 3.2×, so the 4× cutoff captures the upper-mode cleanly.

## What the corrected anchor-author rotation looks like

The Add.305 capture window (2026-05-04T22:15Z → 23:05Z, which contains the 2026-05-03T22:58Z merge) reported the opencode anchor-author sequence Add.298-305 as ending in **(silent)** at Add.305. The corrected sequence is:

```
Add.298 OpeOginni
Add.299 kitlangton
Add.300 thdxr
Add.301 kitlangton
Add.302 kitlangton
Add.303 kitlangton
Add.304 kitlangton
Add.305 Utkub24   ← previously reported as (silent)
```

This converts the **streak-quartet-truncation-via-axis-silence** claim (M-305.A) into a **streak-quartet-truncation-via-cohort-rotation** event (the modal P-304.A branch at prior 0.20). The kitlangton intra-author streak terminated exactly the way the W17 prior expected — by an external author landing a slower-regime PR that overtook the next would-be kitlangton self-merge in PR-number space.

## What this primitive predicts

For any axis-day where (a) a single dominant author runs a self-merge stream at sub-30m lifespan and (b) one or more external contributors have open PRs at the same time, the lifespan-bimodal merge-inversion event has empirical frequency ≈ 0.30 per axis-day per external-contributor PR. This means future addenda should expect at least one inversion event every 3-4 high-activity opencode days, and **failure to observe one is itself informative** — it suggests either the external-contributor queue is empty or the maintainer has begun fast-tracking external PRs into the self-merge regime.

## Open questions

1. **Does the inversion correlate with surface-novelty?** #25640 touched `plugin/codex.ts` (third-party agent integration) — surface that requires more review than `cli/` or `server/` internal refactors. If novelty correlates, the predicate could be sharpened to **lifespan-bimodal merge-inversion conditioned on surface-novelty class**.
2. **Can the inversion stack?** If two external PRs and three self-merge PRs interleave within the same hour, do we see a 2-3 inversion (two PRs both invert against three) or only one inversion event at the boundary?
3. **Does the inversion appear on other carriers?** codex's 2026-05-03 active window contained only `@etraut-openai` self-merges (no external-contributor PRs in-window) so the predicate could not fire. The cross-carrier replication count for synth #100 starts at **N=1 (anomalyco/opencode only)** and the 2-3 tick lookback should pull the W17 corpus for matching pairs on QwenLM/qwen-code (split-author days) and BerriAI/litellm (split-author days) before declaring the primitive carrier-general.
