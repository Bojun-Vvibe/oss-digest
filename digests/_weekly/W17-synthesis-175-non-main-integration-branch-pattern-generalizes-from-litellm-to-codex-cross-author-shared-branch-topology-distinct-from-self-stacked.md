# W17 Synthesis #175 — Non-main integration branch pattern generalizes from BerriAI/litellm to openai/codex within a single calendar week, with cross-author shared-branch topology distinct from self-stacked topology

**Date:** 2026-04-26
**Window:** Add.65 (2026-04-26T18:24:04Z → 19:14:16Z)
**Anchor PRs:** codex #19635 (shijie-oai, base `dev/efrazer/agent-identity-env-jwt`), litellm #26551 (someswar177, base `litellm_oss_branch`)
**Status:** Generalizes synth #157 / #168 / #172; reframes "non-main integration channel" from per-repo signal to cross-repo W17 motif

---

## Observation

Within W17, two independent tracked repos have now landed live PR work on a **non-main, non-staging integration branch**:

1. **BerriAI/litellm — `litellm_oss_branch`** (synth #157 / #168 / #172):
   - **#26551** (someswar177, head as of last touch in Add.63 17:28:36Z) — content-cadence channel for OSS-track integration distinct from staging.
   - Synth #172 P-172.A: predicted ≥1 additional PR on a `litellm_*_branch` non-staging channel within 4 windows. Add.64/65 = window 1 of 4, no new such PR yet.

2. **openai/codex — `dev/efrazer/agent-identity-env-jwt`** (Add.65, NEW):
   - **#19635** (shijie-oai) — `Fix agent identity runtime auth flow`, +55/-30, 4 files, OPEN at 19:14:16Z, last touch 18:52:39Z.
   - Base branch belongs to a different author (`efrazer`) — i.e., shijie-oai is editing on top of efrazer's WIP integration branch, NOT main.

This is the **second tracked repo within W17 with a non-main, non-staging integration branch as a live development channel**. The pattern is no longer single-repo idiosyncrasy; it is a **cross-repo motif** at week-scale.

## Topology distinction

The two instances differ in author topology:

| Instance | Base branch owner | Editing author | Topology |
|---|---|---|---|
| litellm #26551 | (litellm_oss_branch is a long-lived org/team branch) | someswar177 | **External-contributor onto org-owned integration branch** |
| codex #19635 | efrazer (codex-team author) | shijie-oai (codex-team author) | **Cross-author shared-branch within org** |

Both are distinct from bolinfest's codex permissions stack (#19606 → `pr19683` → main), which is **self-stacked single-author topology**. The synth #131 / #138 / #161 / #166 "stack" framing has been about self-stacked topology only. Synth #175 establishes a **third codex-side topology**: cross-author shared integration branch, where head SHA churn comes from a different author than the branch owner.

## Falsifiable predictions

- **P-175.A (cross-repo motif persistence):** Within W17 + first 4 windows of W18, ≥1 additional non-main, non-staging integration-branch PR on a third tracked repo (qwen-code, opencode, cline, crush, OpenHands, goose, aider). Falsified if zero new instances by W18 Add.4.
- **P-175.B (codex shared-branch follow-through):** codex #19635 either merges into `dev/efrazer/agent-identity-env-jwt` OR receives a follow-up commit by efrazer (the branch owner) within 6 windows. If both fail, the cross-author shared-branch is "drive-by" rather than "collaborative" and the topology distinction collapses back to "stale-WIP-branch reuse".
- **P-175.C (litellm_oss_branch silence persists):** No new PR opens against `litellm_oss_branch` for the remaining synth #172 window-budget (3 more windows after Add.65). If a third PR opens, the channel is **active**; if not, it's a **vestigial single-PR experiment** and synth #172 P-172.A falsifies.

## What this falsifies / refines

- **Refines synth #157**: the "non-main integration branch as content-cadence channel" finding was scoped to litellm. Synth #175 lifts the scope to **W17-wide cross-repo motif** at n=2 repos.
- **Refines synth #168**: the "litellm silence-break via dormant-pair bypass + non-main integration channel cross-repo cadence" framing implied litellm-specific dynamics. The codex #19635 instance shows the **non-main-channel cadence is repo-agnostic**, not litellm-specific.
- **Does NOT falsify synth #172**: P-172.A is litellm-specific and its 4-window clock is still alive. But synth #175 reduces synth #172's significance — even if P-172.A falsifies (no third litellm_*_branch PR), the cross-repo motif may still hold.
- **Does NOT extend synth #131/#138/#161/#166** (bolinfest stack): those track self-stacked single-author topology. shijie-oai #19635 onto efrazer's branch is a different topology, NOT a 6th leaf in bolinfest's stack.

## Cross-references

- Synth #157, #168, #172 (litellm_oss_branch lineage)
- Synth #131, #138, #161, #166, #170, #171 (bolinfest self-stacked topology — distinct, not extended)
- ADDENDUM-62 / 63 / 64 (litellm content-cadence on #26551)
- ADDENDUM-65 (codex #19635 first appearance)
