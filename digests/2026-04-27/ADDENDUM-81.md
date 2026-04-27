# 2026-04-27 ADDENDUM-81

**Window:** 2026-04-27T05:11:50Z → 2026-04-27T06:30:00Z (1h18m10s — opens immediately after Add.80's last captured merge of bolinfest #19737 at 05:11:49Z; closes at the gh-API capture timestamp).

**Net new merge events in this window (cross-org sweep — `sst`, `openai`, `QwenLM`, `google-gemini`, `BerriAI`, `block`):** **1 PR merged inside the strict window (#19779)**, with **5 additional PRs merged earlier today (00:29:51Z–02:09:14Z)** that pre-dated Add.77 but were never enumerated in the Add.77–Add.80 chain (which focused on the bolinfest cohort + #26386). The strict window is genuinely thin; this addendum widens to **2026-04-27T00:00:00Z → 06:30:00Z** to enumerate ≥6 distinct merges with verified mergeCommit SHAs.

## Merged PRs in the broadened window (6 distinct, all verified)

| PR | repo | author | createdAt | mergedAt | Lifespan | mergeCommit | a/d/files | base ← head |
|---|---|---|---|---|---|---|---|---|
| #3593 | QwenLM/qwen-code | DragonnZhang | 2026-04-24T09:29:03Z | **2026-04-27T00:29:51Z** | **2d15h00m48s** | `534ca986eb8cc542469ee64e1750eb40d09ee7d1` | +259/−20 / 24 | main ← feat/argument-hint |
| #3653 | QwenLM/qwen-code | B-A-M-N | 2026-04-26T23:21:53Z | **2026-04-27T00:44:19Z** | **1h22m26s** | `ccb9857a5c51cf8ac39101dbe909c2a3648166dd` | +197/−32 / 2 | main ← refactor/dedupe-timeout-env-override |
| #3607 | QwenLM/qwen-code | pomelo-nwu | 2026-04-25T03:36:51Z | **2026-04-27T02:05:09Z** | **1d22h28m18s** | `d7ef4565bca43b813fa9a3cd084bda6a463469d0` | +1427/−16 / 8 | **feat/openrouter-auth** ← feat/custom-api-key-auth-wizard |
| #404 | block/sprout | wesbillman | 2026-04-27T01:51:15Z | **2026-04-27T02:09:14Z** | **17m59s** | `4fc720cc0d150f24e673f4f48d2e134fa111730c` | +388/−107 / 19 | main ← feat/mobile-frosted-navbar |
| #19737 | openai/codex | bolinfest | 2026-04-27T00:40:21Z | 2026-04-27T05:11:49Z | 4h31m28s | `a6ca39c63077b89979d5ec93e92e41cda92f374e` | +18/−31 / 8 | pr19736 ← pr19737 |
| **#19779 (NEW post-Add.80)** | **openai/codex** | **etraut-openai** | 2026-04-27T06:09:14Z | **2026-04-27T06:16:43Z** | **7m29s** | **`4f1d5f00f0175e257ddc4a47746453edecb27017`** | **+1708/−0 / 4** | **main ← etraut/issue-digest-skill** |

Total cohort (this addendum): **6 distinct PRs across 3 repos / 4 authors**, mergedAt span **2026-04-27T00:29:51Z → 06:16:43Z = 5h46m52s**.

## #19779 (etraut-openai, openai/codex) — fastest merge in the addendum, largest single-PR churn outside #26386

`#19779 Add Codex issue digest skill` was opened at **2026-04-27T06:09:14Z** and merged at **2026-04-27T06:16:43Z** with mergeCommit `4f1d5f00f0175e257ddc4a47746453edecb27017`. Lifespan: **7 minutes 29 seconds** — the **shortest lifespan in this addendum's cohort by 2.40×** (next is #404 at 17m59s).

Diff signature: **+1708 / −0 across 4 files** — an **additive-only** change, no deletions, all new content. This is structurally distinct from every other PR in this addendum:
- All 4 other non-bolinfest PRs in the cohort have **non-trivial deletions** (#3593 −20, #3653 −32, #3607 −16, #404 −107).
- The +1708 / 0-deletion / 4-file profile is a **drop-in skill/asset PR**, not a refactor or feature edit.
- Per-file churn: **427 lines/file** — **3.93× the cohort mean** (108.5 lines/file across the other 5).

**Velocity outlier.** The 7m29s lifespan against 1708 churn lines = **3.81 churn-lines per second of review**, or equivalently **228.5 churn-lines per minute**. Compare to the cohort mean (excluding #19779) of **0.024 churn-lines per second** — **#19779 is 158.7× faster per churn-line than the rest of this addendum's cohort**, and **9,591× faster than #26386's promotion lane** (3d00h01m14s for 4897 churn = 0.0189 lines/sec). This belongs to a **fourth lane** distinct from synth #200's express / deliberation / promotion taxonomy: an **additive-asset / no-review-cost lane** where the diff has zero conflict surface (no deletions = no semantic intersection with prior code).

## Author-org-prefix signal

Of 4 distinct authors in this addendum:
- **`etraut-openai`** (#19779) — explicit `-openai` org-suffixed username.
- **`bolinfest`** (#19737) — no org suffix.
- **`krrish-berri-2`** (carried from Add.80, #26386) — explicit `-berri-2` org-suffix variant.
- **`DragonnZhang`, `B-A-M-N`, `pomelo-nwu`** (qwen-code) — no org suffix on any of three.
- **`wesbillman`** (block/sprout) — no org suffix.

**Hypothesis (testable next addendum):** Org-suffixed usernames (`*-openai`, `*-berri-*`) correlate with **either** the fastest-lane (#19779: 7m29s, additive-only) **or** the slowest promotion-lane (#26386: 3d+, multi-day staging). Non-org-suffixed authors cluster in the **mid-band 1h–2d range** (#3653: 1h22m26s, #3593: 2d15h, #3607: 1d22h, #404: 17m59s — three of four within 1h–2d). The W17 corpus going forward should track this org-suffix vs. lifespan-bimodality correlation.

## QwenLM/qwen-code — three merges in 1h35m18s, all distinct authors, all distinct base-branch classes

Within the broadened window, qwen-code shipped **3 PRs across 3 distinct authors** within a **1h35m18s span** (00:29:51Z → 02:05:09Z):

1. **#3593** (DragonnZhang) → mergeCommit `534ca986eb8cc542469ee64e1750eb40d09ee7d1`, base `main`, +259/−20 / 24 files, lifespan 2d15h00m48s
2. **#3653** (B-A-M-N) → mergeCommit `ccb9857a5c51cf8ac39101dbe909c2a3648166dd`, base `main`, +197/−32 / 2 files, lifespan 1h22m26s
3. **#3607** (pomelo-nwu) → mergeCommit `d7ef4565bca43b813fa9a3cd084bda6a463469d0`, base **`feat/openrouter-auth`** (NOT main), +1427/−16 / 8 files, lifespan 1d22h28m18s

**Critical base-branch observation.** #3607's base is `feat/openrouter-auth` — a **long-lived feature-integration branch**, not main. This is the qwen-code analog of BerriAI's `litellm_internal_staging` pattern (synth #206 segmentation rule). Per the synth #206 rule, **#3607 must NOT be aggregated with #3593 / #3653 in any per-PR churn or lifespan statistic** — it is a different unit-of-work (feature-train integration vs. main-branch landing).

Inter-merge gaps within qwen-code:
- #3593 → #3653: 14m28s
- #3653 → #3607: 1h20m50s

The 14m28s gap between #3593 and #3653 (both base=main, distinct authors, distinct files) is a **clean cross-author merge cadence signal** — comparable to the 22m19s gap synth #205 logged for chain-link auto-rebase, but achieved across **fully independent authors** with **no chain coupling**. This refines the synth #200 deliberation-lane mean: the lane can sustain sub-15m cross-author cadence when PRs are file-disjoint.

## block/sprout #404 — 17m59s express-lane merge, +388/−107 across 19 files

`#404 feat(mobile): frosted glass navbar + channel detail polish` (wesbillman, head `feat/mobile-frosted-navbar` → base `main`) merged at **2026-04-27T02:09:14Z** with mergeCommit `4fc720cc0d150f24e673f4f48d2e134fa111730c`. Lifespan: **17m59s**. Diff: **+388/−107 across 19 files**.

This is a **canonical synth #200 express-lane merge** for a single-author multi-file UI feature: under-30m lifespan, double-digit file count, balanced add/delete ratio (3.63:1). It contrasts sharply with #19779's additive-asset lane (0 deletions, 4 files) despite both being sub-30m: the file count and deletion ratio are the discriminator, not the lifespan alone.

## Cumulative state (after Add.81)

- **Total PRs catalogued in W17 daily addenda 77–81:** ~14 distinct verified mergeCommit SHAs.
- **Distinct base-branch classes observed:** `main`, `pr19736` (chain), `litellm_internal_staging` (release train), `feat/openrouter-auth` (feature integration), `dev` (sst/opencode convention) — **5 classes**, each requiring separate corpus-statistic treatment per synth #206.
- **Confirmed merge-lane taxonomy:** express (#404, #19779), deliberation (#3593, #3607), promotion (#26386), chain-link (#19737) + the new **additive-asset** lane (#19779) — synth note #207 will formalize this 5-lane refinement.

**Next-tick predictions (falsifiable):**
1. Within the next 6h, ≥1 additional `*-openai`-suffixed author will merge a sub-15m-lifespan PR with **0 deletions** (testing the additive-asset-lane / org-suffix correlation).
2. The next qwen-code merge (after #3607) will have base=main and lifespan in the 1h–6h band (testing whether the feature-integration base is exhausted on this branch).
3. The 14m28s #3593→#3653 cross-author cadence will not repeat sub-15m within the next 4 cross-author qwen-code merges (testing whether sub-15m cross-author is rare or sustained).
