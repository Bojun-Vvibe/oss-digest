# 2026-04-27 ADDENDUM-79

**Window:** 2026-04-27T04:21:28Z → 2026-04-27T05:05:13Z (43m45s — opens on Add.78 close; closes on the gh-API capture timestamp).

## block/goose — dependabot 7-PR burst gets a TRAILING 8th merge: #8823 lands 14m26s after #8820, **falsifying** synth #201's "complete burst" framing

Synth #201 (and Add.78) characterized the goose dependabot mass-merge as a **7-PR burst** ending at #8820 (`04:20:55Z`). The merge-window was framed as **closed**. In this Add.79 window, an **8th** dependabot PR — `#8823 chore(deps): bump tiktoken-rs from 0.6.0 to 0.11.0` — merged at **04:35:21Z**, mergeCommit `93eb12268792c5e90f963becd301f453fb64e27d`, +11/−38 across 2 files, base=`main`, head=`dependabot/cargo/tiktoken-rs-0.11.0`.

| PR | createdAt | mergedAt | Inter-merge gap (vs prior dependabot) | Lifespan |
|---|---|---|---|---|
| #8820 (last of original 7) | 2026-04-24T17:46:20Z | 04:20:55Z | (closing the original burst) | 2d10h34m35s |
| **#8823 (NEW trailing merge)** | 2026-04-24T17:50:46Z (in same Friday open-window) | **04:35:21Z** | **+14m26s** | 2d10h44m35s |

**Why this falsifies synth #201's "complete burst" framing.**

1. Synth #201 measured 6 inter-merge gaps with median 7m10s and noted a single 41m09s outlier before the final #8820 — and treated #8820 as the **closing event**. The Add.79 trailing #8823 merge introduces a **7th inter-merge gap of 14m26s**, more than **2.0× the 7m10s median** but only **35.0% of the 41m09s outlier** — a **third regime** between "tight 7-min cadence" and "41-min hesitation gap".
2. **#8823 was open the whole time.** Its createdAt (2026-04-24T17:50:46Z) puts it inside the same Friday 26m31s open-window as the other 7 PRs (17:27:51Z–17:54:22Z). It's not a late-arriving PR; it was **deliberately deferred past the burst** despite being equally bot-authored, equally cargo-deps, equally weekend-deferred. The 14m26s gap is the maintainer's signature for "this one needed a second look" — likely the larger churn-magnitude (`+11/−38` net delta of −27 lines is the **most code-deleting** of the 8, contrasted with #8829's `+5/−5`-net-zero or #8819's `+1/−1`).
3. **The "burst" topology is actually a 7+1 split, not a flat 7.** A more honest reading of the original event is: 7 trivially-mergeable bumps with median 7m10s spacing, then a 14-minute pause, then a 1-PR "second chance" merge for the deferred churn-heavy bump. Total cohort: **8 dependabot PRs in 1h33m22s** (03:01:59Z→04:35:21Z), not 7 in 1h18m56s.

**New W17 corpus rule.** When a bot-burst contains a single trailing late-merge with 2-4× median gap, classify the cohort as **"N+1 deferred-tail"** rather than flat-burst. Synth #203 will codify.

## block/goose — non-bot human work co-merges in dependabot window: #8797 lifeizhou-ap **+150/−178** lands at 04:42:21Z, 6m+ after the dependabot tail

| PR | Author | Title | createdAt | mergedAt | Lifespan | mergeCommit | Diff |
|---|---|---|---|---|---|---|---|
| #8797 | lifeizhou-ap | `feature: handle removed extensions` | 2026-04-24T (prior — same Friday open-window) | **04:42:21Z** | ~2d11h+ | `8790b17c388d6f4d52f2596b0d9227fc5d23e736` | +150/−178, multi-file |

Same Friday-open / Monday-merge weekend-deferral pattern as the dependabot cohort, but with a **human author** and a **`feature:`-prefix multi-file refactor**, not a dep-bump. Inter-merge gap from #8823 (04:35:21Z) → #8797 (04:42:21Z) is **7m00s** — within 2 seconds of the dependabot 7m10s median cadence. The maintainer (or auto-merge bot) is operating on a **mixed-author queue** at uniform cadence, with no observable bias against human-authored work versus bot-authored work in the same Monday-morning processing window. This generalizes synth #201's "bot-author / human-merger" frame to **"mixed-author queue / single-merger uniform cadence"**.

## openai/codex — bolinfest #19736 MERGES at 04:49:30Z, closing 3-of-4 of the original "stack" cohort; **#19737 still OPEN** as the genuine chain link (synth #202 baseRefName-audit framing CONFIRMED)

| PR | baseRefName | mergedAt | Lifespan from open (00:40:20Z) | mergeCommit | Diff |
|---|---|---|---|---|---|
| #19734 (Add.78) | main | 03:31:24Z | 2h51m07s | `0d8cdc05…` | +210/−86 |
| #19735 (Add.78) | main | 03:59:59Z | 3h19m41s | `0ccd659b…` | +242/−215 |
| **#19736 (NEW)** | **main** | **04:49:30Z** | **4h09m10s** | `523e4aa8e31c8a29e3fe30edf411d6ab0207b2a8` | +288/−201, 7 files |
| #19737 | **pr19736** (chain link) | OPEN | 4h25m+ | — | +18/−31, 8 files |

**Inter-merge gap #19735 → #19736: 49m31s.** This is the **largest** inter-merge gap inside the bolinfest cohort by a wide margin (28m35s for #19734→#19735). #19736 was the third-largest by changed-files (7 vs 16/32) and carried the chain-coupling concern (since #19737 is based on `pr19736`, merging #19736 would effectively rebase #19737 onto main without further reviewer action). The 49m31s gap is consistent with reviewer wanting to verify #19736 + #19737 as a coupled unit before merging the base.

**Synth #202 audit confirmed.** Synth #202 claimed (via `baseRefName` audit) that the cohort was **3 flat-on-main siblings + 1 chain link (#19737 on #19736)**. Add.79 confirms: 3-of-4 (the flat-on-main siblings #19734/#19735/#19736) merged in monotonically increasing lifespan order (2h51m07s < 3h19m41s < 4h09m10s); the **only OPEN PR** is #19737, which is exactly the one with `baseRefName=pr19736` (the genuine chain link). The auto-rebase of #19737 onto main (now that #19736 is merged) should occur via GitHub's UI within minutes and may auto-merge if CI is green.

**Lifespan-monotonicity discovery.** The three merged-out flat siblings show **strictly monotonically increasing lifespan** ordered by `additions+deletions` magnitude: 16-files / 296-line-churn cleared at 2h51m, 32-files / 457-line-churn cleared at 3h19m, 7-files / 489-line-churn cleared at 4h09m. **Files-touched is NOT the dominant predictor** — total churn (additions+deletions) is. This refines synth #200's "deliberation-lane" frame: within a same-author/same-subsystem express-lane cohort, ordering of clearance correlates with total-churn rather than file-count.

## sst/opencode — rekram1-node same-author self-doublet #24573 + #24574, opened sequentially, merged 15m09s apart in `fix:` → `ignore:` prefix discipline

Two merges from rekram1-node (Aiden Cline) in this window, both base=`dev`:

| PR | Title | mergedAt | mergeCommit | Diff | Lifespan |
|---|---|---|---|---|---|
| #24573 | `fix: default tool call streaming to false for google vertex` | **04:42:24Z** | `025a6392cebdbd412289c64a5477adca140bb495` | +4/−0, 1 file | (short) |
| #24574 | `ignore: split up reasoning transforms` | **04:57:33Z** | `f19d863689f4404bd6f712c9814299d25d045582` | +22/−1, 1 file | (short) |

**Inter-merge gap: 15m09s.** Both single-file diffs, both untyped/non-stacked, both same-author. The **prefix sequencing** is notable: `fix:` (high priority, observable user impact — vertex tool-call streaming default) merged FIRST; `ignore:` (lowest-priority hygiene class — split a refactor) merged SECOND. This matches the synth #199 prefix-velocity model: `fix:` → fast-lane, `ignore:` → slower than `fix:` even with smaller-author-context advantage.

The cross-repo author rekram1-node also merged #24435 yesterday (`fix: bump openrouter sdk version` at 2026-04-26T05:05:16Z), suggesting an emerging **24-hour repeat-author cadence** for fix-prefix work in `sst/opencode/dev`. (Three rekram1-node merges in a 24-hour window: #24435, #24573, #24574 — 23h37m08s + 15m09s spacing pattern, the second pair tightly clustered.)

## QwenLM/qwen-code — B-A-M-N #3653 MERGED (`refactor:` prefix) — diff-shrunk-resubmit lineage extension

| PR | Author | Title | mergedAt | mergeCommit | Diff |
|---|---|---|---|---|---|
| #3653 | B-A-M-N | `refactor(config): dedupe QWEN_CODE_API_TIMEOUT_MS env override logic` | 2026-04-27T00:44:19Z | `ccb9857a5c51cf8ac39101dbe909c2a3648166dd` | +197/−32 |

Same author B-A-M-N also merged #3629 (`fix(config): support QWEN_CODE_API_TIMEOUT_MS across OAuth and non-OAuth paths`, 2026-04-26T21:59:06Z, +377/−5) — B-A-M-N's #3653 is a **`refactor:`-prefix follow-up** to #3629's `fix:`-prefix landing, on the **same env-var surface** (`QWEN_CODE_API_TIMEOUT_MS`), 2h44m57s after the parent. Diff-shrink: #3629's +377/−5 → #3653's +197/−32 (about **52.3% smaller** in additions, +540% larger in deletions — net churn shrinks from +372 to +165, **−55.6%**). This is a **fix-then-refactor sequencing pattern** on a single config surface by a single author within 3 hours, complementary to synth #196's diff-shrunk-resubmit framing but **distinct**: this is a deliberate two-PR sequence (fix, then dedupe), not a resubmit of the same content.

---

**Add.79 ledger.**
- 1 codex MERGE (bolinfest #19736 — closing the cohort to 3-of-4)
- 2 goose MERGE (dependabot #8823 trailing the 7-burst, lifeizhou-ap #8797 in mixed-author queue)
- 2 sst/opencode MERGE (rekram1-node #24573, #24574 — same-author 15m09s self-pair)
- 1 qwen-code MERGE noted from prior tick edge (B-A-M-N #3653 fix-then-refactor)
- 0 closes
- 0 new OPENs noted (codex #19737 carries over as sole genuine chain link; remains OPEN)

**Total merge volume: 6 PRs in 43m45s** — about 8.2 PRs/hour rate, slightly **lower** than Add.78's 11/51m (12.9 PRs/hour) but in the same regime. The window is the **post-rush settle** after the dependabot mass-merge ended; activity is shifting from bot-burst topology back to mixed human-author cadence.

**Cumulative 2026-04-27 merge volume (Add.77 + Add.78 + Add.79 = 03:29Z→05:05Z, 1h36m17s):** **17 merges across 4 repos**. The largest single-day single-day-equivalent merge density observed in W17 to date.
