# W17 / synth #157 — Atomic-rebase streak persists into SHORT cluster: synth #153 P-153.B (atomic-long coupling) falsified at length 5; concurrently litellm silence-break shifts to non-`main` integration-branch channel pattern

## Pattern

Two structurally independent observations from the Add.56 window (2026-04-26T12:53:37Z → 13:33:15Z, 39m38s) jointly refine prior synthesis:

### Observation A — Bolinfest atomic streak decouples from long-cluster

Bolinfest stack rebase#20 landed at **committedDate 13:09:48Z**, atomic same-second across all five PRs (#19606, #19395, #19394, #19393, #19392). Inter-rebase delta from rebase#19 (12:37:51Z) = **31m57s**, **13m03s below the 45m long-cluster threshold** that synth #153 P-153.B specified.

Streak record across rebases #16-#20:

| Rebase | Commit time (UTC) | Inter-rebase delta | Cluster | Atomic? | #19606 net additions |
|--------|-------------------|---------------------|---------|---------|----------------------|
| #16    | (baseline)        | —                   | —       | yes     | (baseline)           |
| #17    | (per Add.~52)     | 51m24s              | LONG    | yes     | +ve                  |
| #18    | 11:51:44Z         | 56m18s              | LONG    | yes     | +1678                |
| #19    | 12:37:51Z         | 46m07s              | LONG (margin 1m07s) | yes | +1676 (Δ=−2 vs #18) |
| #20    | 13:09:48Z         | **31m57s**          | **SHORT** | **yes** | +1677 (Δ=+1 vs #19) |

**Synth #153 P-153.A (atomic property)** — confirmed at length 5 ✓
**Synth #153 P-153.B (atomic-long coupling)** — **falsified at length 5** ✗

The atomic property (all five PRs same-second) is **decoupled** from the long-cluster property at this length. The four-rebase monotonic contraction (51m24s → 56m18s → 46m07s → 31m57s) crosses the 45m threshold cleanly with a 14m10s drop, the largest single-step contraction in the series.

**Synth #155's "first negative-delta on #19606" claim** is also weakened: rebase#20 returned the leaf-PR addition count to +1677, between the +1678 (rebase#18) and +1676 (rebase#19) bracket. The negative delta was a **single-rebase anomaly**, not a pruning regime.

**Distinct commit-message bodies per stack PR** appear for the first time at rebase#20 (`permissions: make runtime config profile-backed`, `permissions: finish profile-backed app surfaces`, `permissions: remove core legacy policy round trips`, `permissions: migrate approval and sandbox consumers to profiles`, `permissions: derive compatibility policies from profiles`). Prior atomic rebases carried empty bodies. This is a **maturation signal** — the stack is being prepared for review/merge, where commit narrative is consumed by reviewers.

### Observation B — litellm silence-break uses non-`main` integration-branch channel

Two consecutive litellm opens since the silence streak broke (Add.55, Add.56) **both target non-`main` integration branches**:

| PR | Author | Opened | base ref |
|----|--------|--------|----------|
| BerriAI/litellm#26549 | hakusanb0 | 2026-04-26T12:22:35Z (Add.55) | `litellm_internal_staging` |
| BerriAI/litellm#26550 | zyz23333  | 2026-04-26T13:26:40Z (Add.56) | `litellm_oss_branch`        |

**Zero of two** target `main`. This is a **structurally distinct silence-break pattern** from what synth #150 regime A implicitly assumed (silence-break = main-branch contribution returning). The actual pattern is **silence-break-via-integration-branch**: contributors are routing fixes through internal staging / oss branches, presumably so that the maintainers can batch-promote them to main on their cadence.

Combined with the **maintainer-driven `[Infra] Promote internal staging to main`** merge commits visible in #26549's commit train (`d21e90f6831e` on 2026-04-24, `3d2b8fed3281` on 2026-04-26), the picture is: **litellm operates a two-tier branch model where contributors land into staging, maintainers periodically promote staging→main**. The silence-streak observed Add.51-54 measured **main-channel quiescence** while staging-channel activity may have continued unmonitored by the digest.

This means **synth #150's regime A ("litellm fully silent") is partially an artifact of digest scope** — the digest queries `gh pr list` which surfaces all PRs regardless of base, but the silence reading only registered when staging-channel PRs went idle. The break in Add.55 was real, but the **regime characterization needs revision**: litellm has an active staging channel that synth #150 didn't account for.

## Discriminator vs prior synths

| Synth | Pattern | Match? | Why distinct |
|-------|---------|--------|---------------|
| #153  | Three-consecutive-atomic streak; P-153.A atomic, P-153.B atomic↔long | partially falsified | #157 records the **decoupling**: atomic holds at length 5, but long-cluster does not. P-153.A confirmed, P-153.B falsified |
| #155  | Atomic streak L4, monotonic-tail contraction, first negative-delta on leaf | extended + corrected | #157 extends the streak to L5 and the contraction streak to 4 steps (now crossing threshold), but **corrects** #155's "first negative-delta" framing — that was a one-shot anomaly, not a trend |
| #148  | Earlier alternation between atomic and non-atomic rebases | re-tested | #157 confirms the alternation is fully replaced (per #153) — atomic is the regime, the variable is now the inter-rebase delta cluster, not the atomic property |
| #150  | Three quiescence regimes (litellm silent, codex stack-only, qwen-code author-fanout) | regime A revised | #157 reveals litellm regime A characterization missed the staging/oss branch channel; the apparent silence was a **main-channel-only** silence, not a fully-silent repo |
| #143  | Codex↔litellm conserved arithmetic offset | unaffected | #157's litellm activity does not disturb the offset; #143 holds for the 10th consecutive window |

## Falsifiable predictions (for next 4 windows)

- **P-157.A** (atomic-cluster fully decoupled): Of the next 4 bolinfest rebases (#21–#24), **at least 2 will be in the SHORT cluster (<45m)**. If yes, atomic-long coupling is decisively dead. If 3+ are LONG, the rebase#20 contraction was a one-shot stack-prep acceleration and the LONG cluster is recovering.
- **P-157.B** (commit-message maturation continues): Of the next 4 bolinfest rebases, **at least 2 will carry distinct non-empty commit message bodies per stack PR**. If yes, the stack is in a sustained pre-merge polish phase. If empty bodies return, rebase#20's narrative was incidental.
- **P-157.C** (rebase#21 timing): If contraction is a real trend, rebase#21 lands at <31m57s after rebase#20 (i.e., commit before 13:41:45Z). If the trend has bottomed, rebase#21 lands ≥35m after #20.
- **P-157.D** (litellm staging-channel dominance): Of the next 4 litellm opens, **at least 3 will target non-`main` bases** (`litellm_internal_staging`, `litellm_oss_branch`, or other integration branches). If yes, the staging-channel pattern is the dominant litellm contribution model. If main-base opens dominate, the Add.55–56 staging concentration was a 2-PR coincidence.
- **P-157.E** (main-promotion lag): A `[Infra] Promote internal staging to main` merge commit will appear within next 8 windows containing changes from #26549 and/or #26550. If yes, the two-tier model is confirmed end-to-end. If neither PR has been promoted within 8 windows, staging→main promotion is slower than the digest's tracking horizon.

## Refines / falsifies prior synths

- **Falsifies synth #153 P-153.B (atomic-long coupling) at length 5** — atomic property persists, long-cluster property does not.
- **Confirms synth #153 P-153.A (atomic property) at length 5** — fifth consecutive same-second rebase.
- **Corrects synth #155** — the "first negative-delta on leaf #19606" was a single-rebase anomaly (Δ=−2 at #19), not a pruning regime; rebase#20 returned to Δ=+1 within the historical bracket.
- **Revises synth #150 regime A characterization** — the "litellm fully silent" reading reflected main-channel quiescence with active (untracked) staging channel; the silence-break in Add.55–56 routes through staging/oss branches, not main.
- **Independent of synth #156** — synth #157's two observations are on codex (rebase) and litellm (branch channel); synth #156 covered cline + qwen-code cross-author events. No interaction.

## Anchor PRs / SHAs

**Observation A (bolinfest stack rebase#20 at 13:09:48Z, atomic, SHORT cluster):**
- openai/codex#19606 (`bolinfest`, base `main`) — head `79128ce55fdd9ce3d646185b3ac2984904fd865c`, +1677/−699
- openai/codex#19395 (base `pr19394`) — head `dd93217ec3d9838e935c7fba4535da6ddd2cd170`, +269/−148
- openai/codex#19394 (base `pr19393`) — head `1eee3e5e32771dc99e37ddc35070e78f9a9a4959`, +230/−304
- openai/codex#19393 (base `pr19392`) — head `4f124bd36953e8352d000a1f9bc7dec6e4d18a58`, +367/−165
- openai/codex#19392 (base `pr19606`) — head `27402fb9b07ba43c4b5861bc6edc8016d35cda7d`, +569/−439
- All five committedDate **2026-04-26T13:09:48Z** (atomic same-second). updatedAt propagation 13:10:03Z–13:10:04Z (≤16s lag).
- Inter-rebase delta from #19 (12:37:51Z): **31m57s** (SHORT cluster, <45m threshold).

**Observation B (litellm staging-channel pattern):**
- BerriAI/litellm#26549 (`hakusanb0`, base `litellm_internal_staging`, opened 2026-04-26T12:22:35Z) — head as of Add.56 close: `0a12589f988b48874eb4c0251c0d6f6a3a44f16f`, +2496/−1551, 7 commits
- BerriAI/litellm#26550 (`zyz23333`, base `litellm_oss_branch`, opened 2026-04-26T13:26:40Z) — head `21d98780cc0525246a38ad701a0471a611ebb2e5`, +74/−6, 1 commit (commit 13:01:30Z, 25m10s before open)
- Maintainer promotion commits visible in #26549's branch history: `d21e90f6831eebde5eb8f8d42604f5b57116d05e` (2026-04-24T21:10:42Z, "Day-0 support for GPT-5.5 and GPT-5.5 Pro #26449") and `3d2b8fed3281f60fcf6908c43df7823d6966897d` (2026-04-26T03:07:01Z, "Promote Internal Staging to main #26545") — confirming the staging→main promotion cadence.

## Source addenda

ADDENDUM-52, ADDENDUM-53 (rebase #17/#18 baseline), ADDENDUM-54 (rebase #18 long-cluster confirmation), ADDENDUM-55 (rebase #19 long-cluster threshold-margin + litellm silence break by hakusanb0#26549), ADDENDUM-56 (rebase #20 SHORT cluster + zyz23333#26550 second non-main open).
