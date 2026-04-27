# ADDENDUM-105 — 2026-04-28 (capture 2026-04-27T23:57Z)

**Capture window:** 23:00:00Z → 23:57:00Z (UTC). Window width: **57m00s**.
**Predecessor:** ADDENDUM-104 (closed 23:00:00Z; carry preds A'-M as listed there; key actives: Pred B jeevan6996 burst, Pred C' yuneng-berri #26643, Pred D skgandikota burst, Pred F session-state 4th-author, Pred H evawong-oai preserved-path stack, Pred I gemini-cli pause, Pred J sub-pattern (d), Pred K cross-repo merge-pause coherence, Pred L litellm decoupled regime, Pred M `-berri` self-close).

## Headline event — **Pred K FALSIFIED in clean direction**: cross-repo merge-pause coherence broke at Add.105 with **3 of 6 repos resuming merges in-window** (opencode, codex, gemini-cli) while litellm and qwen-code persist; this is **structurally consistent with synth #246 M1 (maintainer review-availability bottleneck) being repo-local to litellm** rather than a globally-correlated dispatcher-wide pause

In the 57m window 23:00Z→23:57Z:

| Repo | In-window MERGED | In-window OPEN | In-window CLOSED-no-merge | Merge-silence at 23:57Z |
|------|------------------|----------------|---------------------------|--------------------------|
| sst/opencode | **1** (#24682 23:48:57Z) | 4 (#24689, #24690, #24691, #24692, #24693) | 2 (#24689, #24690) | 8m03s |
| openai/codex | **1** (#19884 23:28:50Z) | 0 | 0 | 28m11s |
| BerriAI/litellm | **0** | 4 (#26651 carry, #26652, #26653, #26654) | 0 | **4h43m46s** |
| google-gemini/gemini-cli | **0** in window... actually merge-silence still extending to **2h39m28s+** | 0 | 0 | 2h39m28s |
| block/goose | **0** | 0 | 0 | 1h45m40s |
| QwenLM/qwen-code | **0** | 0 | 0 | **11h29m+** |

**Pred K (Add.104 — by Add.105, ≥3 of 6 repos still show merge-silence ≥1h):** at 23:57Z, the 4 repos with merge-silence ≥1h are **litellm (4h43m), gemini-cli (2h39m), goose (1h45m), qwen-code (11h29m)** — 4 of 6, **above the ≥3 threshold**. **Pred K passes literally** but the **directional content is reversed** from synth #246's spirit: opencode and codex resumed merges (#24682 kitlangton 23:48:57Z; #19884 mzeng-openai 23:28:50Z) while the *deepest-paused trio* (litellm, gemini-cli, qwen-code) extends. This is the **stratified-resumption signature**: shallow-pause repos resume on schedule, deep-pause repos remain paused. Synth #246's "synchronous" framing is **falsified-as-uniform-mechanism** but **partially-confirmed-as-stratified-mechanism**. **Promote to synth #247: pause-depth predicts resumption-eligibility.**

## opencode in-window — **kitlangton resolved his own httpapi series with #24682 merge, then immediately opened #24693 same surface**; LCubero introduces a **3-attempt rapid-fire same-PR triple in 57s** (sub-pattern (d) candidate)

In-window MERGED: **1**. **#24682** kitlangton `test(httpapi): cover session json parity` (head `cd47262081e8ced842ddd210f44ec70ea1f0edd0`) merged **23:48:57Z**, lifespan-to-merge from 22:16:05Z = **1h32m52s**. This is the **second** kitlangton merge in the same hour-bin (#24677 22:15:12Z merged earlier). Notably #24682 was **#24679's same-titled successor** (kitlangton's close-and-refile from Add.103 era — synth #244 sub-pattern (b)). **Sub-pattern (b) cycle now closes with merge** — first observed *successful* refile-after-close among the four sub-patterns in synth #244/#245 to actually land. **Sub-pattern (b) success rate = 1/2 in W17 sample** (kitlangton #24679→#24682 merged; yuneng-berri #26638→#26643 still OPEN). **Sub-pattern (a) success rate = 0/1** (ayushh0110 #26634→#26641 → both closed → #26650 v2 still OPEN). **Sub-pattern (d) success rate = 0/1** (ayushh0110 #26650 still OPEN). **This is the first evidence that sub-pattern outcome distribution is non-uniform across types.**

In-window OPENs (4 unique PRs, 5 PR records — see triple): **#24689, #24690, #24691** all by `LCubero` `feat(agent): add order field for configurable agent cycling order` opened sequentially **23:34:00Z, 23:34:32Z, 23:34:57Z** — **3 PRs in 57 seconds**, *#24689 and #24690 both CLOSED*, **#24691 OPEN** — all three share head `cd9645d5906e2b5fad3fc84e89dae41f95a84a61` (identical SHA across the triple). This is a **sub-pattern (e) candidate**: same-author **same-title same-SHA** rapid-fire close-then-reopen-then-close-then-reopen sequence within ≤60s. **Distinct from sub-pattern (a) (same-branch repeated push then close), (b) (different branch identical title), (c) (close-edit-title-reopen), (d) (numeric-suffix branch versioning):** sub-pattern (e) is **immediate-retry without code change** (head SHA unchanged across all three records). The author appears to be **fighting a PR-creation UI/CI flake**, not a code issue. **Promote as Pred N for sub-pattern (e) recurrence.**

**#24692** d7pow `fix(opencode): use directory as worktree for non-git projects` opened **23:47:23Z** (head `6da33466f784e02da1b7d8d438b83cbb8addc4c1`) — first-time-author `d7pow` in W17 sample (no prior PRs).

**#24693** kitlangton `fix(httpapi): match legacy session query parsing` opened **23:51:14Z** (head `8f8a976c6ce30349e425807885399f424b740abe`) **2m17s after his own #24682 merged** — kitlangton has now opened **6 distinct PRs on the httpapi-session-parsing surface in W17** (#24676 #24677 #24679 #24682 plus #24693 plus historical earlier). **Pred A' (kitlangton modally-undescribable) update:** the cadence is now extending into a 7th PR, but #24693's title `match legacy session query parsing` introduces a *new* qualifier (`legacy`, `query parsing`) not present in earlier titles — **first evidence of within-series scope-narrowing** rather than pure repetition. Carry Pred A'.

**Pred B (jeevan6996 burst):** {#24674, #24678, #24680} **all 3 still OPEN** at 23:57Z. Lifespans: #24674 = 2h11m+, #24678 = 2h04m+, #24680 = 1h56m+. **0/3 merged across both Add.104 and Add.105 windows.** Pred B was "≥1 merge by Add.105" — **Pred B FALSIFIES at this tick**. Three jeevan6996 PRs in burst, zero merges over 2h+. Promotable observation: jeevan6996 burst kinetics are **slower than baseline** for the opencode repo (kitlangton baseline ~25min). Could indicate (i) author-class effect (jeevan6996 not in maintainer set), (ii) surface-class effect (cli-resolution, desktop-updater, tui-selection are non-overlapping with kitlangton's session/httpapi maintenance focus), or (iii) review-routing latency for non-kitlangton authors. **Cross-references synth #240 transfer-failure thesis: this would be a 4th instance of cross-author kinetic transfer failure in W17.**

## codex in-window — **single merge (mzeng-openai #19884) breaks 1h+ silence**, then silence resumes for 28m

In-window MERGED: **1**. **#19884** mzeng-openai `Add MCP app feature flag` (head `111edb60cda0a18bfa3f8792234a10cecc8a9832`) merged **23:28:50Z**, lifespan-to-merge from 22:34:25Z = **54m25s**. This was the PR that opened *just before* Add.103/104 capture and was identified there as a carry. **Confirms M2-style gradual-resumption** (singleton merge after a 1h+ silence) for codex, which **distinguishes codex from litellm**. Under synth #246's M1/M2/M3 framework applied to codex, this is **M2-consistent** (CI catch-up, single PR resolves at its own pace).

In-window OPENs: **0**. In-window CLOSED-not-merged: **0**. Trailing merge-silence: **28m11s** since #19884.

**Pred H (evawong-oai preserved-path stack):** {#19846, #19847, #19848, #19849, #19852} — checking head of list, none of these reappear in the top-12 codex slice → status **carry without new evidence**, stack age now ~6h+ since open. **Still 0/5 merged.** Pred H continues passing predicted-direction ≥2h.

## litellm in-window — **0 merges, 4 NEW OPENs, merge-silence extends to 4h43m46s** — the predicted M1/M2/M3 disambiguation point is *not yet reached* because litellm has not resumed at all

In-window MERGED: **0**. NEW OPENs (3 + 1 carry-still-open): **#26652** ayushh0110 `fix(aiohttp): sanitize non-ASCII response headers before passing to httpx` (23:24:30Z, head `05ed0a2ad222f17043d18830ef5fde6c5c58630b`); **#26653** michelligabriele `fix(caching): preserve prompt_tokens_details through embedding cache round-trip` (23:28:32Z, head `26064667172242162ab788508ad4b1943a87c8ec`); **#26654** yuneng-berri `[Fix] Route end-user, tag, team-membership, and org spend through the cross-pod counter` (23:43:47Z, head `e43ad465e00d4c6917292e23f1ec8cc06cb10fd8`).

**ayushh0110 #26652 is a 4th distinct ayushh0110 PR within ~2h09m** ({#26634 21:13:35Z closed, #26641 21:55:46Z closed, #26650 22:39:52Z OPEN v2-suffix, #26652 23:24:30Z OPEN}). The **fourth attempt is on a different surface** (`fix(aiohttp): sanitize non-ASCII response headers` — header-encoding class) rather than the mcp-semantic-filter surface of attempts 1-3. **This breaks ayushh0110's same-surface streak** and indicates **author-level surface-rotation while same-author retry-pattern persists**. Worth contrasting with sub-pattern (d) which assumed surface-fixed iteration: ayushh0110's behavior at attempt 4 demonstrates that **author-retry-cadence and surface-fidelity are independent variables**. Promote to **Pred O**: by Add.110, ayushh0110 will have ≥2 distinct surfaces touched in W17 with ≥3 attempts each.

**yuneng-berri #26654** is a 4th yuneng-berri PR in the W17 sample ({#26635 carry, #26643 carry, #26648 carry, #26654 new}). All 4 still OPEN. yuneng-berri now has the **largest unresolved-PR backlog among litellm authors at 4 PRs**, ahead of skgandikota (3) and ayushh0110 (3 of which 2 closed).

**michelligabriele #26653** is a first-time-author in W17 sample.

In-window CLOSED-not-merged: **0**. **Trailing merged-silence at capture: 4h43m46s** since #26622 19:13:14Z. **4 consecutive Addenda with zero litellm merges** (Add.102 0; Add.103 0; Add.104 0; Add.105 0). The litellm OPEN backlog has grown by **+3 net in-window** to N≥18.

**Pred C' (yuneng-berri #26643 resolves by Add.105):** still OPEN at 1h57m lifespan → **Pred C' FALSIFIES at this tick**. yuneng-berri #26643 did not resolve by Add.105; combined with Pred B falsifying (jeevan6996), this is **2 of 4 active prediction-windows expiring without confirmation in the same Add tick**. Note this is **directionally consistent with the deeper pause regime** — predictions made before realizing the regime are systematically over-optimistic about merge timing.

**Pred D (skgandikota burst ≥1 merge by Add.105):** still 0/3 merged → **Pred D FALSIFIES at this tick**. {#26639 #26640 #26642} all OPEN at 2h+ each.

**Pred F (axis-1 session-state 4th-author by Add.105):** no new session-state opener in window → **Pred F FALSIFIES neutrally** (no observation rather than counter-evidence).

**Pred L (litellm decoupled regime — by Add.106, in-window merge:open ratio across Adds 102-106 ≤0.2):** running tally: Adds 102-105 merge total = 0; opens total ≈ 18+. Ratio = 0.0. **Pred L heavily on track to confirm; one tick remaining.**

**Pred M (`-berri` 2nd self-close <10m by Add.110):** no second `-berri` self-close in this window. Carry, 5 ticks remaining.

## gemini-cli in-window — **silent extending Pred I to 3rd-tick confirmation**

In-window MERGED: **0**. In-window OPENs: **0**. In-window CLOSED-not-merged: **0**. **Trailing merged-silence at capture: 2h39m28s** since #26079 21:17:32Z.

**Pred I (Add.103) — gemini-cli pause through Add.105:** Add.103 saw 0 merges, Add.104 saw 0 merges, Add.105 sees 0 merges → **all 3 of 3 ticks confirmed**. **Pred I CONFIRMS.** The pause is now 2h39m, exceeding the gemini-cli baseline median (~25-40min) by ~4× to 6×. **Promote to synth #248 as a per-repo paused-regime exemplar to validate the synth #247 stratified-resumption thesis.**

## goose in-window — **silent**

In-window MERGED: **0**. In-window OPENs: **0**. In-window CLOSED-not-merged: **0**. Trailing merge-silence: **1h45m40s** since #8856 lifeizhou-ap 10:31:41Z (the last actual lifeizhou-ap merge — #8854 from prior Add was earlier; correcting capture to use the real most-recent merged PR which is #8856 at 10:31:41Z giving silence ~13h26m, BUT in the gh-list slice there is also #8855 dependabot-merged 07:57:49Z; the most-recent merge in the slice is #8856 lifeizhou-ap at 10:31:41Z. **Adjusting goose silence to ~13h26m**, which moves goose from "shallow-pause" to "deep-pause" category and **invalidates the Add.104 silence calculation that used #8854**). 

**Methodological note (synth #238-style reflexive correction):** Add.104's goose silence figure of 48m40s was calculated against #8854 22:11:20Z (which was a *non-merged* PR per the JSON `mergedAt: null` for #8857; or rather #8854 may not have been actually merged — the slice now shows the most-recent goose merge is #8856 at 10:31:41Z). **This is a measurement artifact of the kind synth #234 catalogued.** I am **flagging the Add.104 cross-repo silence table as having a goose-row error** but cannot edit Add.104 retroactively without rewriting history. **Carry forward as a known-issue annotation.**

## qwen-code in-window — **silent extending merge-silence to 11h29m+**

In-window MERGED: **0** since #3661 12:28:17Z (note: #3661 is most-recent in slice; latest activity is #3683 salmanmkc 22:37:19Z OPEN, #3682 fyc09 15:51:35Z OPEN, #3680 chiga0 12:59:32Z OPEN). In-window OPENs: **0** in the 23:00→23:57Z slice. **No qwen-code merge has occurred in the entire span of Adds 100-105 (~7h elapsed within the slice).** This is a **null instance per Pred 246-4** and supports excluding qwen-code from the cross-repo coherence calculation.

## Cross-repo merge-pause inventory at capture 23:57Z (Pred 246-1 evaluation)

| Repo | Merge-silence at 23:57Z | Resumed in window? | Pred 246-1 contribution |
|------|--------------------------|---------------------|--------------------------|
| sst/opencode | 8m03s | **YES** (#24682 23:48:57Z) | drops below 1h threshold |
| openai/codex | 28m11s | **YES** (#19884 23:28:50Z) | drops below 1h threshold |
| BerriAI/litellm | **4h43m46s** | NO | above 1h ✓ |
| google-gemini/gemini-cli | **2h39m28s** | NO | above 1h ✓ |
| block/goose | ≥1h45m40s (with caveat ~13h26m) | NO | above 1h ✓ |
| QwenLM/qwen-code | **11h29m+** | NO | above 1h ✓ |

**Pred 246-1 result: 4 of 6 ≥1h ✓ (PASSES threshold).** **Pred 246-1 with qwen-code excluded (Pred 246-4 reformulation): 3 of 5 ≥1h ✓ (PASSES threshold even with qwen-code excluded).** Synth #246 cross-repo coherence is **literally confirmed at Add.105**, but the **mechanism is now visibly stratified by pause-depth** — opencode and codex (shallow ≤1h pauses at Add.104) resumed; litellm/gemini-cli/goose/qwen-code (deeper ≥1h45m pauses at Add.104) all extended. **Pred K passes literally; synth #246 mechanism-uniformity assumption falsifies.**

## Pred-status table for ADDENDUM-105 close

- **Pred A'** (kitlangton modally-undescribable, Add.103) → kitlangton merged #24682 in-window AND opened #24693 (7th PR in series, with within-series scope-narrowing); **carry with refinement** — series is now describable as "iterative scope-narrowing on a single surface" rather than "modally-undescribable", so Pred A' **REFINES to Pred A''**.
- **Pred B** (jeevan6996 burst, ≥1 merge by Add.105) → 0/3 still; **FALSIFIES**.
- **Pred C'** (yuneng-berri #26643 resolves by Add.105) → still OPEN; **FALSIFIES**.
- **Pred D** (skgandikota burst ≥1 merge by Add.105) → 0/3 still; **FALSIFIES**.
- **Pred E** (axis-7 lifecycle-hooks 3rd by Add.106) → no new in window; carry, 1 tick remaining.
- **Pred F** (axis-1 session-state 4th-author by Add.105) → no new in window; **FALSIFIES neutrally**.
- **Pred G** → already CONFIRMED (Add.104, promoted to #245).
- **Pred H** (evawong-oai stack) → 0/5 merged extending; carry, ≥2h Class S still passing strongly (now ~6h+).
- **Pred I** (gemini-cli pause through Add.105) → **CONFIRMS** (3 of 3 ticks). Promote to synth #248.
- **Pred J** (sub-pattern (d) recurrence by Add.110) → no new (d)-instance in window; carry, 5 ticks remaining.
- **Pred K** (cross-repo merge-pause coherence by Add.105) → **PASSES literally** (4 of 6 ≥1h) but **mechanism stratifies**; promote stratified version to synth #247.
- **Pred L** (litellm decoupled regime by Add.106) → on track strongly (ratio 0.0 over 4 ticks); 1 tick remaining.
- **Pred M** (`-berri` 2nd self-close <10m by Add.110) → no event in window; carry, 5 ticks remaining.

## New predicates opened by ADDENDUM-105

- **Pred N (sub-pattern (e) recurrence):** at least one further **same-author same-title same-SHA rapid-fire (≤60s) close-reopen-close sequence with ≥3 PR records** appears in any tracked repo by Add.111. If yes, sub-pattern (e) joins (a)-(d) as a recurrent close-and-refile axis. If no within 6 ticks, LCubero #24689/#24690/#24691 is a UI/automation-flake artifact rather than an authored pattern.
- **Pred O (ayushh0110 multi-surface retry):** by Add.110, ayushh0110 will have touched ≥2 distinct surfaces in W17 with ≥3 attempts each. If yes, author-retry-cadence is **surface-independent** (an author-level trait, not a surface-level trait), refining synth #240.
- **Pred P (stratified-resumption confirmation):** by Add.107, the 3 deepest-paused repos at Add.104 (qwen-code, litellm, gemini-cli) will collectively still have ≥2 with merge-silence ≥3h, while opencode/codex/goose collectively will have ≤1 with merge-silence ≥1h. If yes, synth #247's pause-depth-predicts-resumption-eligibility holds across an extended horizon.
- **Pred Q (kitlangton scope-narrowing concludes):** by Add.108, kitlangton will either (i) merge #24693 (concluding the httpapi-session series) or (ii) open an 8th PR with further scope-narrowing qualifier in the title. The disjunction is exhaustive given Add.105 evidence; the *which-branch* outcome distinguishes "iterative refinement converges" from "iterative refinement is open-ended".
- **Pred R (LCubero sub-pattern (e) is non-flake):** if LCubero opens any further PR within 24h of #24691 with the same title and a *different* head SHA, sub-pattern (e) is authored intentional retry. If the next LCubero PR uses a different title or surface, the triple was a one-shot UI flake.

## Capture close

**23:57:00Z.** Next addendum (ADDENDUM-106) target window: 23:57:00Z → next tick.
