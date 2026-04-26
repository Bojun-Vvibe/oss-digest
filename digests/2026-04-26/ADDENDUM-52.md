# ADDENDUM-52 — 2026-04-26

**Window:** 10:05:38Z → 10:37:24Z (31m46s)

**Repos scanned:** sst/opencode, openai/codex, BerriAI/litellm, QwenLM/qwen-code, block/goose, cline/cline, All-Hands-AI/OpenHands, Aider-AI/aider, charmbracelet/crush

## Merges in window

**Total merges: 0.** Merge rate 0/31m46s = **0.00 merges/hr**.

**Sixth consecutive zero-merge window** across all nine tracked surfaces (Add.47 close 07:13:31Z → Add.48 07:48:56Z → Add.49 08:45:37Z → Add.50 09:25:13Z → Add.51 10:05:38Z → Add.52 10:37:24Z; cumulative dry span **3h23m53s**). New max for the Add.42–52 range, exceeding Add.51's 2h52m07s by exactly the Add.52 window length (31m46s).

### Drought ledger (extended from Add.51)

- **openai/codex**: last merge `#19640` (`tibo-openai`, head `633fe00a9c54`) at 06:10:38Z. Drought = **4h26m46s** (Add.51 close: 3h55m00s; +31m46s = full window length).
- **BerriAI/litellm**: last merge `#26545` (`yuneng-berri`, head `abb63e6007e7`) at 03:07:01Z. Drought = **7h30m23s** (Add.51 close: 6h58m37s; +31m46s).
- **sst/opencode**: last merge `#24435` (`rekram1-node`, head `d2dc95437e9e`) at 05:05:16Z. Drought = **5h32m08s** (Add.51 close: 5h00m22s; +31m46s).

**Codex↔litellm offset**: 7h30m23s − 4h26m46s = **3h03m37s**, **identical to the prior five windows** (Add.48-corrected, Add.49, Add.50, Add.51 all at 3h03m37s). Synth #143 holds for the **sixth consecutive window / 3h23m53s span** — codex↔litellm drought delta is arithmetically conserved at exactly 3h03m37s for the entire Add.47–52 stretch. The arrival-offset null hypothesis from synth #143 has now resisted falsification across 6 advancement opportunities; confidence in the conserved-delta property is the highest of any tracked invariant.

## Opens in window

- **[QwenLM/qwen-code#3643]** — `jordimas`, base `main`, head `d0b68d2290b3`. Title `feat: Adds Catalan language support`. Created/updated **10:32:14Z**, 26m36s after window open. Surface: i18n / language-pack addition. **First non-sst/opencode open** in the Add.49–52 stretch — breaks the all-sst/opencode open burst from Add.51.

- **[QwenLM/qwen-code#3642]** — `wenshao`, base `main`, head `c8d7d151a1b6`. Title `feat(core): managed background shell pool with /bashes command`. updated **10:18:32Z**, 12m54s after window open. Surface: shell-pool runtime feature. **`wenshao` is the synth #145 anchor author** (qwen-code#3637 reasoning-content PR). This is the first new-PR open by `wenshao` in the Add.42–52 tracked range — author is fanning out from #3637 (active iteration) to #3642 (fresh opens) within a 30m window. Cross-PR same-author concurrent open during synth #145's 24h merge horizon.

- **[sst/opencode#24465]** — `ian-pascoe`, base `dev`, head `38f1124f2a56`. Title `docs: add opencode-byterover to ecosystem`. updated **10:10:16Z**, 4m38s after window open. Surface: ecosystem-list docs addition. **Second `docs: add ... to ecosystem` PR by `ian-pascoe` within 20m12s** (prior was #24458 at 09:50:04Z, `docs: add opencode-adaptive-thinking to ecosystem`). Same-author + same-surface + same-prefix doublet — see synth #149.

**Total opens: 3** (1 sst/opencode, 2 qwen-code). Composition: 2 `feat`, 1 `docs`. Open-velocity leadership rotates from sst/opencode (Add.51, n=5) to qwen-code (Add.52, n=2) — a one-window inversion that ends the all-sst/opencode concentration noted in synth #147. Open-burst dispersion: 2 repos vs Add.51's 1 repo.

## Closes-without-merge in window

**Total closes-without-merge: 0.** Third consecutive zero-close window (Add.50, Add.51, Add.52). Synth #144's prediction #1 (no `pascalandr` provider PR on `dev` for ≥48h) holds at +1h52m post-Add.49 close.

## Notable updates

### bolinfest stack rebase tracker — no rebase event in window

All five stack PRs **#19606 / #19395 / #19394 / #19393 / #19392** show **no updatedAt change since rebase#16 at 10:04:19Z**. Stack quiescent for full 31m46s window — first single-window quiescence since rebase#10 (per Add.49 lineage). Inter-rebase delta clock now running at **33m05s and counting** from rebase#16. Synth #148's alternation-prediction (rebase#17 → split if alternation continues) remains untested — no rebase#17 in window.

If rebase#17 lands in the next window:
- Short cluster (≤40m) prediction would require <40m elapsed by event time.
- Long cluster (≥1h) requires ≥26m55s more wall-clock from window-close.
- The window passing without rebase#17 already pushes the inter-rebase delta past the short-cluster mean (34m32s) by 2m33s — **rebase#17 is now more likely to land in the long cluster than the short cluster**. If it does land long, synth #142's 4:3 short-bias from rebase#13 walks back further toward the 6:4 short:long stable in Add.51.

### Cross-repo `preserve reasoning_content` surface — qwen-code#3637 / sst/opencode#24443

**[QwenLM/qwen-code#3637]** (`wenshao`) head SHA `a3c6c9a8b7895734` unchanged from Add.51; updatedAt 09:47:50Z unchanged in window. After the +49 additions content update in Add.51, the PR is now in a **stability gap** for 49m34s post-update. Author engagement shifted to fresh open `#3642` instead of further iteration on `#3637` — pattern resembles synth #110 (debut-author post-own-merge same-surface-family fanout) but here the parent is OPEN, not merged.

**[sst/opencode#24443]** (`claudianus`) head SHA `fa478297f13d` unchanged from Add.50/Add.51; updatedAt 09:10:00Z unchanged. Dormant for **second consecutive window**. Asymmetry from Add.51 (wenshao iterating, claudianus dormant) now extended: `wenshao` has fanned out to a second PR while `claudianus` has not even refreshed. P-145.B (both PRs merge within 24h of Add.50 close = 2026-04-27T09:25:13Z) at +1h12m elapsed of 24h window with only one of two anchor authors active.

### Same-author ecosystem-docs doublet on sst/opencode (ian-pascoe)

`ian-pascoe` opened **#24458** (`docs: add opencode-adaptive-thinking to ecosystem`, 09:50:04Z) and **#24465** (`docs: add opencode-byterover to ecosystem`, 10:10:16Z) — **20m12s inter-open gap**, identical title prefix and surface (ecosystem list), distinct content payloads. This is a **single-author rapid-fire docs doublet on a literal-shared surface** (ecosystem registry file, +1/−0 per PR shape from Add.51). Resembles synth #47 (same-author rapid-fire PR doublet on adjacent surfaces) but **on the SAME surface, not adjacent** — see synth #149 for the surface-identical refinement.

### sst/opencode metadata bumps — fresh-PR iteration churn

- **#24450** (`kuro-toji`, base `2.0`): updatedAt advanced 09:43:27Z → 10:21:37Z (+38m10s). Head SHA unchanged. Pure metadata churn on the lone `2.0`-base PR.
- **#24452** (`MrRobotoGit`): updatedAt 09:41:00Z → 10:19:40Z. **Head SHA changed** `780c717b12bd` (was the open SHA `5c5a85fb2f13`) — a content rev within 48m of open. First content-rev on a fresh Add.51 open.
- **#24459** (`qz1543706741`): updatedAt 09:53:35Z → 10:19:22Z. Head SHA unchanged at `4dcbef32a1ce`.
- **#24461** (`CloudedQuartz`): updatedAt 10:01:52Z → 10:02:03Z. Head SHA unchanged at `80b2cc454141`.

**4 of 5 Add.51 sst/opencode opens received updatedAt-bumps within 32m of window open**, but only 1 (`#24452`) received a head SHA rev. Pattern matches PR-template/CI-poke metadata noise rather than active iteration; the single content-rev (`#24452`, the TUI session-tabs feat) is the only one of the all-sst/opencode burst that authors are actually pushing on within the first hour.

### litellm — silent for second consecutive window

Zero opens, closes, merges, OR notable head-SHA bumps on BerriAI/litellm in window. **Two consecutive fully silent litellm windows** (Add.51 + Add.52) — extending the Add.51 first-fully-silent observation. Litellm drought is now **>7h30m** with the surface itself showing no PR-author activity for ~32m, not even long-tail bumps. This is structurally distinct from codex (where `bolinfest` rebase activity persists during the merge drought) and qwen-code (where `wenshao` is fanning out new opens). See synth #150.

## Window summary

- **0 merges / 3 opens (1 sst/opencode + 2 qwen-code) / 0 closes-without-merge / 0 stack-rebase events / 1 fresh-PR content rev (#24452)**
- **Sixth consecutive zero-merge window** (Add.47 → Add.52). Cumulative dry span **3h23m53s** — new max for the Add.42–52 range.
- **Synth #143 confirmed for sixth consecutive window**: codex↔litellm drought delta conserved at exactly 3h03m37s. Now the most-resilient invariant in the entire tracked range.
- **All-sst/opencode open concentration broken** by qwen-code#3642 + #3643. Synth #147 prediction (single-repo concentration persists ≥1 more window) **falsified at +1 window** — see synth #150.
- **wenshao opens fresh PR #3642 while #3637 (synth #145 anchor) is in stability gap** — same-author cross-PR fanout during a synth-tracked merge horizon.
- **ian-pascoe opens 2nd ecosystem-docs PR (#24465) within 20m12s of #24458** — same-author, same-surface, same-prefix doublet. See synth #149.
- **Bolinfest stack quiescent for full 31m46s window** — no rebase#17. Inter-rebase delta past short-cluster mean; rebase#17 now more likely to land long if it occurs in next window.
- **claudianus / sst/opencode#24443 dormant for second consecutive window** while wenshao actively fans out — synth #145 author asymmetry hardening.
- **Two consecutive fully-silent litellm windows** (no opens, no closes, no metadata bumps) extending Add.51's first-of-range observation. Cross-repo author-activity divergence at peak. See synth #150.
