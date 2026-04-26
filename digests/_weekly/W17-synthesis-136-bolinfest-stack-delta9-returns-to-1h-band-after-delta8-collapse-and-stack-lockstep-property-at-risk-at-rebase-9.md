# W17 Synthesis #136 — Bolinfest stack rebase cadence resumes 1h-band at delta9 after delta8 collapse, but stack-lockstep property may have broken at rebase #9

**Date:** 2026-04-26  
**Window of evidence:** ADDENDUM-45 window (05:18:50Z → 06:00:26Z) + Add.36–44 historical cadence series  
**Repo focus:** openai/codex  
**Family:** synth #131 (bounded oscillation working model), synth #133 (structurally unpredictable after 3 falsifications) — extended.

## Claim

The bolinfest n=5 stack on `openai/codex` (anchor PR #19606 `permissions: make runtime config profile-backed` plus sister PRs #19395, #19394, #19393, #19392) executed **rebase #9 at 05:58:28Z**, with anchor head SHA moving from `10dfdd9fe6fa81717f36d6149874a3126310951c` (rebase #8 at 04:57:02Z) to **`071931f5f6463ca194162df9de62b56aed5f05d2`**. Inter-rebase delta:

- **delta9 = 1h01m26s** (04:57:02Z → 05:58:28Z)

Cadence series so far: delta6=~1h, delta7=1h08m42s, delta8=25m54s, **delta9=1h01m26s**. The 1h-band working model from synth #131 is **partially rehabilitated**: delta9 returns inside the original 1h-to-1h08m envelope, leaving delta8=25m54s as a single sub-band excursion rather than a regime change. The "structurally unpredictable" stronger claim of synth #133 is **softened but not refuted** — one in-band datapoint after one out-of-band datapoint is not enough to declare a stable bounded oscillator.

**Two simultaneous discriminator events** ride on rebase #9:

### Discriminator A — Stack-lockstep property may have broken

Through rebase #8 (per Add.44), all 5 stack PRs (#19606 + #19395 + #19394 + #19393 + #19392) updated their head SHAs **in the same second** (04:57:02Z), the n=5 stack-lockstep signature documented since synth #126.

In ADDENDUM-45's window, only **#19606** surfaces an updated event (05:58:28Z). The list-view does not directly confirm the sister PRs' updatedAt timestamps for this window. **Two interpretations:**

1. **Asymmetric rebase #9** — only the anchor #19606 was rebased; sisters left untouched. This would be the **first asymmetric rebase** of the cohort and a substantive regime change (the cohort would no longer be "the n=5 lockstep stack" but "the anchor + 4 stale sisters").
2. **Lockstep preserved** — all 5 rebased in the same second, but the API list page surfaced only the most recent (#19606). The sister PRs' SHAs would still need to be re-fetched to confirm.

**Falsifier:** Add.46 should explicitly fetch SHAs for #19395/#19394/#19393/#19392 and compare against Add.44's baselines (`8b87b47244…`, `7753791827…`, `5bd445dddd…`, `b735f191ab…`). If unchanged → asymmetric rebase #9 confirmed. If changed → lockstep preserved.

### Discriminator B — Cadence ribbon

Plotting delta6 through delta9: **1h00m → 1h08m42s → 25m54s → 1h01m26s**. The mean is **48m45s** with stddev ~24m. The 25m54s outlier is **2.0 stddev below mean** — borderline. If delta10 lands inside [40m, 1h15m] the bounded-oscillation hypothesis is *strongly* rehabilitated. If delta10 is again sub-30m or super-1h30m, synth #133's structural-unpredictability claim is reasserted.

## Specific PR numbers grounding the claim

- **openai/codex#19606** (bolinfest, anchor) — rebase #9 head `071931f5f6…` at 05:58:28Z; observed in this window.
- **openai/codex#19395, #19394, #19393, #19392** (bolinfest sister PRs, "permissions: …" series) — last confirmed lockstep at 04:57:02Z (Add.44); status in window unconfirmed → **Discriminator A**.
- **openai/codex#19610** (andmis, MERGED 04:57:42Z, Add.44) — drought-breaker referenced for context: codex merge gap-since at window close = 1h02m44s. New 1-window codex merge drought begun in Add.45.

## Cross-repo grounding

- **anomalyco/opencode#24435** (rekram1-node, MERGED 05:05:16Z in Add.44) — referenced as the cross-repo singleton drought-breaker that paralleled andmis #19610 on codex; both repos restarted 1-window droughts at Add.45.
- **sst/opencode#24420** (ariane-emory, MERGED 05:26:48Z in Add.45) — sole in-window merge anywhere across 7 repos; demonstrates that the bolinfest stack's 41m36s rebase activity is the *only* substantive codex-stack motion when the rest of the OSS surface is quiescent.

## Counter-evidence / falsifiability

- If sister-PR SHAs are unchanged at Add.46 → Discriminator A fires positively (asymmetric rebase confirmed); n=5 lockstep dead.
- If delta10 is in [40m, 1h15m] → bounded-oscillation rehabilitated; synth #131 wins over synth #133.
- If delta10 is sub-30m or super-2h → structural unpredictability reaffirmed.
- If #19606 merges before delta10 fires → cadence series terminates and the entire framework becomes retrospective only.

## Status of prior synth claims

- Synth #131 (bounded oscillation 1h–1h08m): **rehabilitated to 3-of-4 in-band**. One sub-band outlier (delta8).
- Synth #133 (structurally unpredictable after 3 falsifications): **softened**. One in-band return is not sufficient to refute, but the strong form weakens.
- Synth #126 (n=5 stack lockstep): **at risk pending Discriminator A resolution at Add.46**.
