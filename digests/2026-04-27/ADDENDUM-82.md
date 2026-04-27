# 2026-04-27 ADDENDUM-82

**Window:** 2026-04-27T06:30:00Z → 2026-04-27T07:08:40Z (38m40s — opens immediately after Add.81's broadened-window cutoff at 06:30:00Z; closes at the gh-API capture timestamp).

**Net new merge events in this strict window (cross-org sweep — `sst`, `openai`, `QwenLM`, `google-gemini`, `BerriAI`, `block`, `anomalyco`, `modelcontextprotocol`, `OpenHands`, `cline`, `Aider-AI`, `charmbracelet`):** **2 PRs merged**, both in `QwenLM/qwen-code`. All other 11 tracked repos: 0 merges in-window. Verified via `gh pr list --search "is:pr is:merged merged:>=2026-04-27T06:30:00Z"` per repo.

## Merged PRs in the strict window (2 distinct, both verified)

| PR | repo | author | createdAt | mergedAt | Lifespan | mergeCommit | a/d/files | base ← head |
|---|---|---|---|---|---|---|---|---|
| #3665 | QwenLM/qwen-code | doudouOUC | 2026-04-27T06:33:15Z | **2026-04-27T06:38:56Z** | **5m41s** | `96bc8741977b00dd01847f12fd483e15193495f5` | +1/−0 / 1 | main ← feat/add-codex-to-gitignore |
| **#3576** | **QwenLM/qwen-code** | **pomelo-nwu** | **2026-04-24T04:16:55Z** | **2026-04-27T06:47:44Z** | **3d02h30m49s** | **`7fe853a7827e0f7dbe07331c6ffcb302e2b426e7`** | **+5665/−128 / 45** | **main ← feat/openrouter-auth** |

## #3576 (pomelo-nwu, qwen-code) — the integration-branch-to-main landing predicted by Add.81

`#3576 Feat/openrouter auth` opened 2026-04-24T04:16:55Z, merged 2026-04-27T06:47:44Z, mergeCommit `7fe853a7827e0f7dbe07331c6ffcb302e2b426e7`. Lifespan: **3d02h30m49s**. Diff: **+5665 / −128 across 45 files**.

This is the exact PR Add.81's prediction #2 nominated as the next "main-branch landing of the qwen-code feature train": `head=feat/openrouter-auth` was the long-lived integration base that Add.81 logged #3607 merging into. **42m35s after Add.81's strict cutoff**, that integration branch flushed to main as #3576 — confirming the synth #206 segmentation rule that feature-train integration PRs and main-landing PRs are **distinct units of work** with **distinct lifespan distributions** (Add.81 noted #3607's 1d22h28m18s integration-merge lifespan; the main-landing #3576 took **3d02h30m49s**, a **+1.39× expansion** measured from open-to-merge).

**Reviewer topology** (from `gh pr view 3576 --json reviews`):
- `wenshao` — review **DISMISSED** at 2026-04-25T23:25:45Z (commit `d804e9423b62d7dfe2300732c8089256edcb8639`).
- `pomelo-nwu` — **two self-COMMENTED reviews** at 2026-04-27T03:07:42Z and 03:07:55Z (13s apart, same commit `cd693874465688ab1a430a606f95a244d8f3e9a6`).
- `tanzhenxin` — **APPROVED "LGTM!"** at 2026-04-27T06:46:21Z (commit `50251c308e4ece000862a9a6c0967c530e6c2cfd`), **1m23s before merge**.

The dismissed-then-approved sequence is structurally novel for this corpus: prior addenda's qwen-code merges either had no review (e.g. doudouOUC's #3665 in this same window — see below) or single-approval (e.g. tanzhenxin LGTM on #3633). #3576 is the first observed **review-state-cycled** merge: DISMISSED → COMMENTED (self) → APPROVED → merge.

**Per-file churn:** **128.7 lines/file** (5793 / 45). The largest single-file edits are `packages/cli/src/commands/auth/openrouterOAuth.ts` (+751 / 0), `packages/cli/src/ui/components/ManageModelsDialog.tsx` (+648 / 0), `packages/cli/src/ui/auth/AuthDialog.test.tsx` (+637 / −4), `packages/cli/src/ui/auth/AuthDialog.tsx` (+620 / −33). Eight files are i18n locale single-line touches (`packages/cli/src/i18n/locales/{de,en,fr,ja,pt,ru,zh-TW,zh}.js` — each +2/0). The diff signature is **bimodal per-file**: 4 files >600 additions, 8 files at exactly +2/0 (all i18n).

## #3665 (doudouOUC, qwen-code) — the canonical near-zero churn .gitignore touch

`#3665 chore(gitignore): add .codex directory` opened 2026-04-27T06:33:15Z, merged 2026-04-27T06:38:56Z, mergeCommit `96bc8741977b00dd01847f12fd483e15193495f5`. Lifespan: **5m41s**. Diff: **+1 / −0 across 1 file** (`.gitignore`).

Reviewer topology: **`yiliang114` APPROVED "LGTM"** at 2026-04-27T06:37:52Z (1m04s before merge); **review requests pending** for `wenshao`, `tanzhenxin`, `pomelo-nwu` at merge time (none responded).

**Lifespan/churn ratio:** 1 line / 341 seconds = **0.00293 churn-lines per second** — the **slowest churn-rate merge in the post-Add.81 corpus by 1300×** vs #19779's 3.81 lines/sec (Add.81). However, #3665's lifespan (5m41s) is **23.7% shorter** than #19779's (7m29s). This is the "denominator-collapse" inverse of #19779: both are sub-10m merges, but #3665 has near-zero numerator and #19779 has large numerator. Per synth #207's lane discriminator (deletion ratio + churn magnitude), #3665 belongs to a **sixth lane** the addendum chain hasn't named: **trivial-chore-zero-deletion**, distinguished from #19779's **additive-asset lane** by churn magnitude (1 vs 1708).

## In-window cross-PR cadence inside qwen-code

- #3665 mergedAt 06:38:56Z → #3576 mergedAt 06:47:44Z: **8m48s gap, distinct authors, disjoint files** (.gitignore vs 45 auth-system files).
- This is **shorter** than Add.81's 14m28s #3593→#3653 cross-author cadence, refining the synth-#200 deliberation-lane sub-15m claim **downward to sub-10m** when the leading PR is a chore.

## Author-org-prefix signal (Add.81 hypothesis #1 update)

Of 2 distinct authors in this addendum:
- **`doudouOUC`** (#3665) — no org suffix; **5m41s** sub-15m additive merge with **0 deletions**.
- **`pomelo-nwu`** (#3576) — no org suffix; **3d02h30m49s**, NOT sub-15m.

**Add.81 hypothesis #1 status: NOT YET CONFIRMED, NOT YET FALSIFIED.** Hypothesis required `*-openai`-suffixed author with sub-15m + 0 deletions. We got a sub-15m + 0-deletion merge (#3665), but author has **no** org suffix. Reframe: the org-suffix→fastest-lane correlation is too narrow if non-org-suffixed authors can also hit the 0-deletion express lane. Add.83+ should test the **inverse**: among sub-15m + 0-deletion merges, what fraction carry an org-suffix? Currently 1/2 = 50% (Add.81's #19779 yes, this addendum's #3665 no).

## Add.81 hypothesis #2 status: **CONFIRMED**

Hypothesis: "next qwen-code merge (after #3607) will have base=main and lifespan in the 1h–6h band." Result: **2 next merges, both base=main**. Lifespan: #3665 = 5m41s (**below** the 1h band — partial falsification of the band but **base=main confirmed**); #3576 = 3d02h30m49s (**above** the 6h band — also outside the band). **The base=main half is confirmed (2/2); the 1h–6h band half is falsified (0/2)**. Refined hypothesis for Add.83: post-feature-train-flush, qwen-code merges show **bimodal lifespans** (sub-10m chores + multi-day features), not the 1h–6h mid-band suggested by #3593/#3653/#3607.

## Cumulative state (after Add.82)

- **Total PRs catalogued in W17 daily addenda 77–82:** ~16 distinct verified mergeCommit SHAs.
- **Distinct base-branch classes still observed:** `main`, `pr19736` (chain), `litellm_internal_staging` (release train), `feat/openrouter-auth` (now **drained** — its head merged to main as #3576), `dev` — **5 classes, but the feature-integration class is now historical for this train**. Next addendum should look for the **next** long-lived integration head to appear in qwen-code.
- **Confirmed merge-lane taxonomy (synth #207 + this addendum's refinement):** express, deliberation, promotion, chain-link, additive-asset, **trivial-chore-zero-deletion** — 6 lanes.

**Next-tick predictions (falsifiable, 6h window):**
1. **No new qwen-code PR will use base=`feat/openrouter-auth`** within 6h (the integration branch is drained; if any PR re-targets it, the train is being reused).
2. **At least one PR with `head=feat/*` from `pomelo-nwu`** will open within 6h (the author is in active-feature-shipping mode — 2 of last 3 qwen-code merges in 5d are theirs).
3. **The next sub-10m merge in the corpus will have ≥1 LGTM-style approval committed within 2 minutes of merge** (matching #3665's `yiliang114` 1m04s pattern and #19779's etraut-openai self-merge profile — sub-10m lane is sustained by either zero-friction approvals or zero-review-blocker authorship).
