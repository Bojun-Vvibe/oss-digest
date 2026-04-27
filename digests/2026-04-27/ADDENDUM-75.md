# 2026-04-27 ADDENDUM-75

**Window:** 2026-04-27T02:05:44Z → 2026-04-27T02:34:00Z (28m16s — opens on Add.74's nominal close at the crush #2726 open event; closes on the latest open event observed at gh-API capture, BerriAI/litellm #26568 at 02:33:43Z).

## charmbracelet/crush — meowgorithm #2726 MERGED at 02:15:01Z, lifespan 9m17s, validates synth #194 triplet third-member as fast-merge — first triplet completion under 10m on the post-pivot docs surface

#2726 `docs(hooks): improve hook documentation` (mergeCommit `e5611c3f82161fbf694a401129f711cd99656256`) merged at **02:15:01Z** after lifespan **9m17s** (createdAt 02:05:44Z). Diff +115/−43 on 2 files (`docs/hooks/README.md`, `docs/hooks/FUTURE.md`). Self-merge by meowgorithm.

This **falsifies a "triplet stalls" reading of synth #194** at the third-PR level: the categorically-disjoint third PR (`docs/hooks/`) merges in 9m17s, while the first two (#2724 `fix(ui)` `internal/ui/model/ui.go` and #2725 `fix(ui)` `internal/ui/model/status.go`) **remain OPEN at 1h54m23s and 1h54m20s lifespan respectively** (computed at Add.75 window close 02:34:00Z, against open times 00:16:55Z and 00:20:38Z). The merge ordering inverts the open ordering: third-opened, first-merged. Asymmetric merge behavior on same-author triplet across categorical surfaces — the docs-class PR clears the queue while the two notification-fix-class PRs from the same author and same session remain dormant. Sharpens synth #190's "subsystem-coupling axis orthogonal to cardinality" by adding a **subsystem-coupling-orthogonal-to-merge-eligibility** dimension.

## openai/codex — aibrahim-oai 5-PR chained `split-mcp-*` stack MASS-CLOSED at single timestamp 22:31:25Z (Add.74 pre-window), replaced by flat single-PR #19725 MERGED at 23:23:34Z with mergeCommit `0bda8161a2d897ddefe675298cfe24a4854b6c4e`

This is a stack-collapse event that completed before the Add.74 window opened (window opened 01:26:00Z) but **was not surfaced in Add.73 or Add.74 because it merged before the bolinfest stack-open at 00:40:17Z drew tracking attention**. Surfacing now because it is the **W17 first-of-kind "stack-abandonment-then-flat-replacement" topology** and informs synth #195 (below).

The stack:

| PR | Title | head→base | createdAt | closedAt | State |
|---|---|---|---|---|---|
| #19718 | `Extract MCP Codex Apps support` | `split-mcp-elicitation` → `split-mcp-apps` | 22:11:58Z | 22:31:25Z | CLOSED |
| #19721 | `Extract MCP tool helpers` | `split-mcp-apps` → `split-mcp-tools` | 22:15:43Z | 22:31:25Z | CLOSED |
| #19722 | `Move single-use MCP helpers` | `split-mcp-tools` → `split-mcp-single-use-helpers` | 22:17:53Z | 22:31:25Z | CLOSED |
| #19723 | `Move MCP client constants` | `split-mcp-single-use-helpers` → `split-mcp-client-constants` | 22:20:34Z | 22:31:25Z | CLOSED |
| #19724 | `Rename MCP runtime module` | `split-mcp-runtime` → `split-mcp-client-constants` | 22:22:57Z | 22:31:25Z | CLOSED |

All five close at **22:31:25Z** — same UTC second, single mass-close gesture, classic GitHub branch-deletion or `gh pr close` script signature. Total stack lifespan: open across **#19718@22:11:58Z to #19724@22:22:57Z = 11m59s open span**, then **8m28s from last-open to mass-close**. No merges on any of the five.

Then flat replacement: **#19725 `Split MCP connection modules`** opens 22:31:19Z (six seconds **before** the mass-close, i.e. the replacement PR is staged and the stack is wiped only after the replacement is up), base `main`, +2020/−1878 on 11 files. Merged 23:23:34Z, lifespan **52m15s**, mergeCommit `0bda8161a2d897ddefe675298cfe24a4854b6c4e`. This is the same code substance the 5-deep stack was carrying, collapsed into one PR.

This is the **inverse** of bolinfest's behavior on his own permissions stack (#19395/#19734/#19735/#19736/#19737, opened 00:40:17Z–00:40:21Z and still 0/5 merged at Add.75 close 02:34:00Z, 1h53m43s lifespan on the four upper tiers). Two same-org authors, same week, same chained-PR topology — opposite resolutions. See synth #195.

## openai/codex — bolinfest dual-track activity: stack DORMANT (0/5 merges), separate-track small-PR ACTIVE (#19727 MERGED, #19728 OPEN)

While the 5-deep `permissions:` stack remains untouched at 0/5 merged through Add.75 window close, bolinfest **independently** moved separate small PRs:

- **#19727** `test: increase core-all-test shard count to 16` — opened 22:41:51Z, mergeCommit `4c58e64f089126d31a8a7686022bb94fe90c563a`, mergedAt **23:10:27Z**, lifespan **28m36s**, +1/−1 on 1 file. Self-merge.
- **#19728** `fix: update core config tests after loader move` — opened 22:48:39Z, OPEN at Add.75 window close. Lifespan **3h45m21s**. +4/−4 on 1 file.

Both opened in the gap between the aibrahim-oai stack-collapse merge (#19725 mergedAt 23:23:34Z) and bolinfest's own stack-open (00:40:17Z). bolinfest's pattern at this granularity: **chained-stack work goes into hibernation while flat single-file infra/test PRs ship at sub-30-minute lifespan**. This is consistent with synth #191's "maintainer-attention-as-per-PR-content-gated" but extends it to the **same author's own time allocation** — bolinfest is gating his own merge attention by PR content type, not by author identity.

## openai/codex — abhinav-oai #19739 still OPEN at Add.75 close — P192a now 1h28m54s into the 24h prediction window, unfalsified

Per synth #192's prediction P192a (probability ~0.55: #19739 merges before #19395 within 24h of 01:26:00Z), at Add.75 close 02:34:00Z the prediction is **active and unfalsified at +1h28m54s** into the 24h window. abhinav-oai #19739 remains OPEN at lifespan **1h28m51s** (createdAt 01:05:09Z), no rebase, no close. bolinfest #19395 also OPEN at lifespan **2d10h31m**. Continues to monitor.

## QwenLM/qwen-code — B-A-M-N same-title shrunk-rewrite resubmit: #3651 CLOSED → #3653 MERGED with 63% diff shrinkage and identical title text

Same author re-opens an identical-titled refactor PR with substantially smaller diff after closing the original. The signature:

| PR | Title | createdAt | closedAt/mergedAt | State | Diff | Files |
|---|---|---|---|---|---|---|
| #3651 | `refactor(config): dedupe QWEN_CODE_API_TIMEOUT_MS env override logic` | 2026-04-26T21:36:20Z | closedAt 2026-04-26T~ | CLOSED | +542/−5 | 2 |
| #3653 | `refactor(config): dedupe QWEN_CODE_API_TIMEOUT_MS env override logic` | 2026-04-26T23:21:53Z | mergedAt 2026-04-27T00:44:19Z (mergeCommit `ccb9857a5c51cf8ac39101dbe909c2a3648166dd`) | MERGED | +197/−32 | 2 |

**Diff shrinkage:** (+542/−5 = 547 churn) → (+197/−32 = 229 churn) = **58.1% reduction in total churn**. The additions axis specifically shrinks 542→197 = **63.7% reduction**. File count constant at 2.

**Lifespan from first-open to second-merge:** #3651 opened 21:36:20Z, #3653 merged 00:44:19Z = **3h7m59s end-to-end**. Open-gap from #3651 close to #3653 open is short (#3653 created 23:21:25Z onward; the closedAt for #3651 is implicit from re-author resubmit window).

Then **#3654** opens at 00:09:56Z (still OPEN at Add.75 window close, lifespan 2h24m4s), title `refactor: unify tool execution logic across Interactive, Non-Interactive, and ACP modes`, +1/−0 on 1 file. Same author, immediately after the shrunk-resubmit merged. **Trailing PR after a successful shrink-rewrite resubmit** — pattern not previously observed in W17 qwen-code tracking. See synth #196.

## BerriAI/litellm — restato #26568 opens to Arize-Phoenix tracing surface (base `litellm_internal_staging`, not `main`), distinct from russellbrenner #26566/#26567 main-base twin-open

**#26568** `feat(arize): emit prompt-caching tokens as OpenInference span attributes` opens **02:33:43Z**, base `litellm_internal_staging`, +209/−0 on 2 files. OPEN. New-feature-class additive PR (zero deletions) on the OTel/Arize tracing path.

Compares against russellbrenner twin-open (Add.74 §) at 01:44:54Z/01:45:05Z which targeted `main`. The **base-branch divergence between the two opens windows** (russellbrenner→`main`, restato→`litellm_internal_staging`) is the discriminator — litellm has at least three active base branches (`main`, `litellm_internal_staging`, `litellm_oss_branch`), and which base an external contributor picks is itself a footprint datum. russellbrenner targeting `main` with explicit "contribute upstreamed fixes" wording reads as a downstream→upstream contribution; restato targeting `litellm_internal_staging` reads as already-internal-track work. Two simultaneous external-author opens on different base branches in a 49m window.

## sst/opencode — alfredocristofano CLOSED-then-REOPENED triplet at near-identical 4h delta: #24522/#24523/#24524 CLOSED → #24543/#24544/#24541 OPEN with title and diff preservation

The Add.74 close-side state (#24541, #24543, #24544 OPEN) implicitly carries this resubmit signal — surfacing now to lock the triplet:

| Closed PR | Closed Title | Reopened PR | Reopened Title | Diff (closed → reopened) |
|---|---|---|---|---|
| #24522 (createdAt 18:50:24Z) | `fix: guard workspace mutation against stale session effect` | #24543 (createdAt 22:56:19Z, OPEN) | identical | +22/−8 → +22/−8 (identical) |
| #24523 (createdAt 18:51:34Z) | `fix(session): compare message positions instead of IDs in SessionPrompt.run` | #24544 (createdAt 22:56:27Z, OPEN) | identical | +19/−6 → +19/−6 (identical) |
| #24524 (createdAt 18:53:12Z) | `fix(tui): handle background sync rejection in sync.tsx` | #24541 (createdAt 22:53:31Z, OPEN) | identical | +13/−5 → +13/−5 (identical) |

Open-gap between original-close and resubmit: ~4h2m–4h5m on each pair. **Diff is byte-identical** across all three resubmit pairs (+22/−8, +19/−6, +13/−5). Reopen ordering: #24541 (originally #24524, the third-opened) lands first in resubmit ordering, then #24543 (was #24522), then #24544 (was #24523) — the original ordering is **scrambled** on resubmit (3rd→1st→2nd in original→resubmit ordering). Compare with B-A-M-N qwen-code shrunk-resubmit (above): qwen-code shrinks the diff, opencode preserves it byte-for-byte. **Two distinct resubmit-after-close strategies in the same window**: shrink-rewrite (qwen-code) vs. reopen-identical (opencode).

## Window closure summary

- **Merges in window:** 1 (charmbracelet/crush #2726).
- **Opens in window:** 1 (BerriAI/litellm #26568).
- **Active prediction:** P192a (synth #192) at +1h28m54s into 24h window, unfalsified.
- **Author cardinality in window:** 2 (meowgorithm merged, restato opened).
- **W17 first-of-kind events surfaced (with pre-window discovery):**
  - (a) **stack-abandonment-then-flat-replacement** topology (aibrahim-oai 5-PR `split-mcp-*` stack mass-close at single second, replaced by flat #19725 merged in 52m15s). 6th observed multi-PR topology in W17 (after: doublet, triplet, sibling-branch sequential, chained stack, four-PR same-second open-tuplet).
  - (b) **same-title shrunk-rewrite resubmit** with 63.7% additions-axis shrinkage and 58.1% total churn shrinkage (B-A-M-N qwen-code #3651→#3653, mergeCommit `ccb9857a...`).
  - (c) **byte-identical close-and-reopen triplet** with 4h delta and scrambled resubmit ordering (alfredocristofano sst/opencode).
  - (d) **single-author dual-track tempo-divergence**: bolinfest's chained stack at 0/5 in ~1h53m while same author's separate-track flat PRs ship in 28m36s and remain author-active.
- **Cross-repo resubmit-strategy bifurcation in single sub-3h window:** qwen-code (shrink) vs opencode (preserve identical), both same-author, both close-then-reopen patterns, both observed within Add.75's lookback.
