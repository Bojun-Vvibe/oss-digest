# ADDENDUM-106 — 2026-04-28 (capture 2026-04-28T00:50Z)

**Capture window:** 23:57:00Z (Apr 27) → 00:50:00Z (Apr 28) UTC. Window width: **53m00s**.
**Predecessor:** ADDENDUM-105 (closed 23:57:00Z; carry preds A''-R as listed there; key actives: Pred A'' kitlangton scope-narrowing series, Pred E lifecycle-hooks 3rd, Pred H evawong-oai stack, Pred I gemini-cli pause extension, Pred J sub-pattern (d), Pred L litellm decoupled regime by Add.106, Pred M `-berri` 2nd self-close <10m, Pred N sub-pattern (e) recurrence, Pred O ayushh0110 multi-surface, Pred P stratified-resumption, Pred Q kitlangton scope-narrowing concludes, Pred R LCubero sub-pattern (e) non-flake).

## Headline event — **Pred L FALSIFIES at the deadline tick**: litellm merged **2 PRs in-window** (#26651 lmcdonald-godaddy 00:39:26Z, #26655 mateo-berri 00:36:47Z) breaking the 4-tick zero-merge streak with **a doublet inside 3 minutes**, and the merge resumption is **author-class-stratified** (one external GoDaddy contributor on a pricing-data PR + one `-berri` internal on a docs/template PR), which is **diagnostically opposite** to synth #246 R3 (backlog-composition selection predicting first merge from a maintainer-clean fresh PR) and **opposite** to synth #248 Pred 248-2 (predicted first-merge-not-from-current-backlog) — though strictly Pred 248-2 was scoped to gemini-cli. **Cross-repo: gemini-cli still extends to 4-tick zero-merge** (#26079 21:17:32Z → still anchor at Add.106; merge-silence now **3h32m28s+**). The **stratified-resumption thesis (synth #247) holds at this tick**: litellm (mid-pause) resumed; gemini-cli (deeper pause) extended.

In the 53m window 23:57Z→00:50Z:

| Repo | In-window MERGED | In-window OPEN | In-window CLOSED-no-merge | Merge-silence at 00:50Z |
|------|------------------|----------------|---------------------------|--------------------------|
| sst/opencode | **0** | 0 | 0 | **1h01m03s** (since #24682 23:48:57Z) |
| openai/codex | **1** (#19892 00:43:16Z) | 4 (#19895, #19896, #19899, #19900) | 0 | 6m44s |
| BerriAI/litellm | **2** (#26651 00:39:26Z, #26655 00:36:47Z) | 1 (#26657) | 0 in-window (carry: #26646, #26649 closed earlier in 22:xx slice) | 13m13s |
| google-gemini/gemini-cli | **0** | 1 (#26084 00:17:27Z bot) | 0 | **3h32m28s** |
| block/goose | **0** | 0 | 0 | 2h38m+ since #8856 10:31:41Z (caveat: see Add.105 methodological note re #8854 22:11:20Z merge — adjusted silence ≈ **2h38m**) |
| QwenLM/qwen-code | **0** | 0 | 0 | **12h22m+** |

**Pred L (Add.105 — by Add.106, litellm merge:open ratio across Adds 102-106 ≤0.2):** running tally now Adds 102-106: merges = 2 (both at Add.106), opens ≈ 19+. Ratio = 2/19 ≈ **0.105 ≤ 0.2**. **Pred L PASSES literally at the threshold** (just under), but the **directional content is reversed**: the predicate was framed under the assumption the deadline tick would **continue** the zero-merge regime; instead, **the deadline tick itself broke it**. Synth #246's "litellm decoupled regime" reading **technically survives the literal predicate** but is **mechanistically falsified** at the deadline because the 5th-tick resumption shows litellm is *not* in a stable decoupled-down regime — it is in a **deferred-batch resumption regime** where merges accumulate and then release in clusters. **Promote to synth #249: deferred-batch resumption with author-class stratification.**

## opencode in-window — **kitlangton series goes silent for 1h+**, no new activity since #24693 at 23:51:14Z

In-window MERGED: **0**. In-window OPENs: **0**. In-window CLOSED-not-merged: **0**.

Top of opencode PR list at capture remains **#24693** kitlangton `fix(httpapi): align session boolean query parsing` (head `eef9481a1594f868aeeb783fa53ed3bb311605eb`) opened 23:51:14Z — note: title at Add.105 was recorded as `match legacy session query parsing`; current API list shows `align session boolean query parsing`, indicating **kitlangton edited the PR title in-window** without opening a new PR. This is a **first observation of in-place title-edit on an OPEN kitlangton PR** in the W17 sample (prior Pattern A'' iterations had been close-and-refile). **Pred Q (Add.105: kitlangton will either merge #24693 or open an 8th PR with further scope-narrowing qualifier by Add.108):** at Add.106, neither has occurred, but the **in-place title edit refines the qualifier** (`legacy query parsing` → `boolean query parsing`) — a *third* mode of scope iteration distinct from (i) merge and (ii) new-PR-with-narrowed-title. **Pred Q REFINES to Pred Q'**: kitlangton has now demonstrated 3 distinct scope-iteration modes (close-and-refile, in-place-title-edit, and pending merge); by Add.108, ≥1 of {merge of #24693, 8th PR opened, second in-place title edit} occurs. Carry, 2 ticks remaining.

**Pred A'' (kitlangton scope-narrowing on httpapi-session surface):** in-place title edit on #24693 is **further evidence of within-series scope iteration**, and the new title (`boolean query parsing`) narrows further from the Add.105 title (`legacy session query parsing`) — from `legacy session` (broad) to `boolean query` (specific data-type qualifier). **Pred A'' refines: kitlangton's scope-narrowing trajectory is monotonic in token-specificity**. Promote to **Pred A'''** for monotonic-narrowing test.

**Pred B (jeevan6996 burst, falsified at Add.105):** {#24674, #24678, #24680} all 3 still OPEN at 00:50Z; lifespans now **3h05m+, 2h57m+, 2h49m+**. **No merge of any jeevan6996 W17 PR** across 5 Add ticks (Add.102-106). **Reinforces the Add.105 falsification direction: cross-author kinetic transfer failure (synth #240) generalizes beyond the litellm bursts to opencode contributor jeevan6996.**

**LCubero sub-pattern (e) sequel test (Pred R from Add.105):** no further LCubero PR in window. #24691 (the OPEN survivor of the 23:34:00Z triple) remains OPEN at lifespan 1h15m+. **No same-title same-SHA recurrence** within 24h-window-so-far. Pred R still pending; if no LCubero retry by 23:34Z 2026-04-28 (24h post-#24691), Pred R falsifies and the triple was a UI/CI flake artifact.

**Sub-pattern (e) cross-author recurrence (Pred N from Add.105):** see litellm section — `oss-agent-shin` produced a single 6-second self-close (#26646) which is **sub-second-class self-close but NOT a same-title same-SHA triple**, so **does not satisfy Pred N**. Pred N still pending, 5 ticks remaining.

**Merge-silence at capture: 1h01m03s** since #24682 23:48:57Z. opencode has now **crossed the 1h merge-silence threshold** in-window — **moves opencode from "shallow-pause" (Add.105 category) to "mid-pause"** under synth #247's stratification. **First evidence in W17 of a repo crossing the shallow→mid threshold**. Add to **Pred P (stratified-resumption)** evaluation: at Add.106, opencode is no longer in the resumption-eligible group; only codex remains in shallow-pause among the 6.

## codex in-window — **#19892 merges at 00:43:16Z (lifespan 36m51s)** AND a **same-second author burst** by bolinfest at 00:46:22Z/00:46:23Z (#19899 + #19900) — synth #244 sub-pattern (a)/(b) candidate

In-window MERGED: **1**. **#19892** miz-openai `Refactor exec-server filesystem API into codex-file-system` (head `fd38df9c4df2a41fcc6d58c983e8c0c4f792040f`) merged **00:43:16Z**, lifespan-to-merge from 00:06:25Z = **36m51s**. This is the **third codex merge across Adds 104-106** ({#19874 21:02:41Z, #19884 23:28:50Z, #19892 00:43:16Z}), confirming codex has settled into a **~1.5h-period singleton-merge cadence** post-Add.103 silence — **distinct from litellm's deferred-batch regime**. Codex is the **only repo in W17 sample with consistent steady-state merge cadence at Add.106**.

In-window OPENs (4):
- **#19895** stefanstokic-oai `External agent session support` (00:19:24Z, head `c4548ddbd430fa6bd121748303d6cc2a5e478fd1`) — first-time-author `stefanstokic-oai` in W17 sample.
- **#19896** `app/github-actions` (bot) `Update models.json` (00:28:45Z, head `ec20d8acdabf879763f049e4df9ade3aa69ab823`) — bot-authored automation PR.
- **#19899** bolinfest `app-server-protocol: mark permission profiles experimental` (00:46:22Z, head `5fca8f2fa165ffdfa8be64923b2911b1a5e4e697`).
- **#19900** bolinfest `permissions: add built-in default profiles` (00:46:23Z, head `393a21dcd678eaa557fab94d7ec1f040f3fba169`).

**#19899 + #19900 same-second author pair (1-second separation, 00:46:22Z and 00:46:23Z):** distinct titles, distinct head SHAs, **two related-but-disjoint surface PRs by bolinfest**. This is **NOT sub-pattern (e)** (which requires same title + same SHA). It is a **stacked-PR pair** in the synth #244 sub-pattern (a) family — same author opens 2 disjoint-but-related PRs essentially simultaneously. Titles share `permission profiles` semantic, suggesting **#19900 introduces the feature, #19899 marks the protocol surface experimental** — i.e., a 2-PR feature-gated rollout pattern. **Promote as Pred S**: by Add.110, bolinfest will either (i) merge both #19899 and #19900 within ≤30m of each other (confirming the planned-stack pattern), (ii) merge one and close the other (revealing one was an alternative), or (iii) leave both OPEN ≥4h (revealing the stack was speculative).

**Pred H (evawong-oai preserved-path stack, Add.103):** **partial event** — #19867 evawong-oai `Ignore legacy Windows cmd sandbox test in CI` was **CLOSED at 22:24:20Z** (out-of-window, but new since Add.105 record): **first close-not-merge among the {#19846, #19847, #19848, #19849, #19852} stack adjacent**, though #19867 itself is *not in the original 5-PR stack* (different number, different surface — Windows cmd sandbox vs preserved-path). Verifying: original stack {#19846, #19847, #19848, #19849, #19852} all still OPEN per slice. Pred H continues passing predicted-direction; stack age now ≥7h.

**Trailing merge-silence at capture: 6m44s** (since #19892). codex is **the only repo with sub-10min merge-silence at Add.106**.

## litellm in-window — **2 MERGES (doublet inside 3 minutes), 1 NEW OPEN, Pred L falsifies-as-mechanism**

In-window MERGED: **2**:
- **#26651** lmcdonald-godaddy `fix(pricing): GPT-5.5 Pro Pricing` merged **00:39:26Z** (head `ea0ce944cd37552c6a37cb148c8a9b5c2a5937a5`), lifespan-to-merge from 22:52:23Z = **1h47m03s**. **External GoDaddy contributor on data/pricing PR** — typically reviewed via pricing-table maintainers, not the core platform reviewers. This is **author-class A** (external contributor on bounded-scope data-only change).
- **#26655** mateo-berri `docs: update pull_request_template to add Linear ticket mentioning` merged **00:36:47Z** (head `7d69621b592321e04b6559b5853dd4b6e6d3ff36`), lifespan-to-merge from 00:31:47Z = **5m00s**. **Internal `-berri` author on docs/template change**, sub-10min merge — **author-class B** (internal-bounded-scope-trivial). The 5m lifespan is **the shortest litellm merge in the entire W17 sample to date**.

**Inter-merge gap: 2m39s** (00:36:47Z → 00:39:26Z). Doublet release inside 3 minutes after **4h43m+ pause**. **This is the deferred-batch signature**: long pause → cluster resumption.

In-window NEW OPEN: **1**:
- **#26657** ishaan-berri `fix(projects): allow internal users to view projects` opened **00:50:01Z** (head `57d6500d5fc286b7f435c7c98a518e242d84d18e`).

In-window CLOSED-not-merged (carry from earlier 22:xx slice that surfaced fully in this capture):
- **#26646** oss-agent-shin `test: validate oss-agent-shin PAT can file PRs` opened 22:21:18Z, **closed 22:21:24Z = 6 seconds**. **Self-close in 6s**, title explicitly identifies it as a **PAT-validation test PR**. This is a **bot-class test artifact**, not a content PR. **Sub-second-class self-close**, joins synth #245 sub-pattern catalog as **sub-pattern (f) candidate: PAT/permission-validation drive-by self-close**. Distinct from sub-pattern (e) — no triple, single-shot intentional throw-away.
- **#26649** ishaan-berri `fix(projects): internal users can see projects in Create Key dialog` opened 22:37:58Z, closed 22:41:55Z = **3m57s self-close**. Same author as #26657 (which was opened 2h08m later as a presumed **rewrite/relabel** of the same surface concept). **#26649 → #26657 is a sub-pattern (b) instance**: close-and-refile with different title (`internal users can see projects in Create Key dialog` → `allow internal users to view projects`), generalizing the surface. **Sub-pattern (b) success rate at Add.106: still pending for ishaan-berri instance; kitlangton instance succeeded at Add.105**.

**Pred M (`-berri` 2nd self-close <10m by Add.110):** ishaan-berri #26649 self-close at 3m57s **satisfies the `-berri` <10m criterion**. **Pred M PASSES at Add.106** (4 ticks early). Combined with the ishaan-berri → ishaan-berri close-refile, the **`-berri` author class shows BOTH rapid self-close AND close-and-refile patterns**, mirroring the yuneng-berri pattern from Add.103. **Promote: `-berri` author class as a structural pattern carrier in litellm.**

**Pred C' (yuneng-berri #26643 resolves by Add.105, falsified at Add.105):** still OPEN at 2h49m+. Continues falsified.

**Pred D (skgandikota burst falsified at Add.105):** {#26639 #26640 #26642} all OPEN at 2h53m+, 2h54m+, 2h52m+. Continues falsified.

**Pred O (ayushh0110 multi-surface retry, opened Add.105):** ayushh0110 has not opened a new PR in this 53m window. Carry, 4 ticks remaining. Current state: 4 PRs across 2 surfaces (mcp-semantic-filter ×3 closed/open + aiohttp-headers ×1 OPEN) — **on track** but does not yet meet "≥3 attempts on ≥2 distinct surfaces".

## gemini-cli in-window — **silent extending Pred I to 4-tick confirmation; bot-author #26084 OPEN**

In-window MERGED: **0**. In-window OPENs: **1** — **#26084** gemini-cli-robot `# Fix 400 error when more than 128 tools are enabled` (00:17:27Z, head `35589570bef9565b918f9c2d0894ba3e33ccdf80`) — note **leading `# ` in title**, second gemini-cli-robot PR with title-leading-`#` artifact in W17 (#26071 also had this), suggesting a **systematic markdown-leak in the gemini-cli-robot title-formatter**. This is a **methodological observation, not a regime claim**.

**Trailing merge-silence at capture: 3h32m28s** since #26079 21:17:32Z.

**Pred I (gemini-cli pause through Add.105) — extension to Add.106:** 4 ticks (Add.103, 104, 105, 106) of zero merges. Pred I formally CONFIRMED at Add.105; **Add.106 extends to 4-tick zero-merge** — this **upgrades synth #248's R2 reading to "consistent through 4 ticks"** and brings the silence into the window where Pred 248-1's "next merge gap >60min from Add.105 capture" is automatically satisfied (53min already elapsed without merge). **Pred 248-1 evaluation: gemini-cli has now exceeded 53min post-Add.105 with no merge → Pred 248-1's ≥30min threshold definitively passes; ≥60min threshold passes if no merge in next 7m**. Update at Add.107 capture for the ≥60min and ≥3h thresholds.

**Pred 248-2 (R3 first-merge-not-from-current-backlog test):** still pending — no gemini-cli merge has occurred yet. The Add.105 backlog {#26078, #26074, #26073, #26071, #26069, #26066} is now joined by **#26084** as a new OPEN; when the next merge occurs, Pred 248-2 evaluates which of these (or none) lands first.

**Pred 248-3 (Adib234 burst kinetic transfer):** Adib234 PRs #26069 and #26078 still OPEN, no movement. Lifespan extending. Pred 248-3 continues on track.

## goose in-window — **silent**

In-window MERGED: **0**. In-window OPENs: **0**. In-window CLOSED-not-merged: **0**. Trailing merge-silence: **2h38m+** since #8854 22:11:20Z (correcting Add.105's adjusted figure: at Add.105 the most-recent slice merge was reported as #8856 lifeizhou-ap 10:31:41Z, but on re-pull the slice now shows **#8854 lifeizhou-ap 22:11:20Z merged** also visible — meaning #8854 was a *later* merge that hadn't been included in the Add.104 calculation. **Add.105's "13h26m" goose silence figure was itself an under-correction**; the actual most-recent goose merge is #8854 at 22:11:20Z, giving silence of ~2h38m at Add.106 capture, and Add.105's silence should have been ~1h45m, **matching the Add.104 figure rather than Add.105's revised "13h26m"**). **This is the second methodological revision on goose silence within 2 Adds** (synth #234 reflexivity territory). **Promote as a methodological cautionary note: goose's gh-list slice ordering does not always surface the most-recent merged PR at the top**, requiring explicit `--state merged` filtering to baseline correctly. **Add to operational checklist for future Adds.**

## qwen-code in-window — **silent extending merge-silence to 12h22m+**

In-window MERGED: **0** since #3661 12:28:17Z (Apr 27). In-window OPENs: **0**. In-window CLOSED-not-merged: **0**. **Merge-silence now 12h22m+** at Add.106 capture. Top of slice: #3683 salmanmkc 22:37:19Z OPEN, #3682 fyc09 15:51:35Z OPEN, #3680 chiga0 12:59:32Z OPEN, all unchanged from Add.105. **qwen-code remains the deepest-paused repo in W17 by ~3.5× the next-deepest (gemini-cli at 3h32m).**

**Pred 246-4 (qwen-code excluded from coherence calc):** continues to apply — qwen-code is best modeled as **structurally inactive in the W17 capture window** rather than paused-from-active.

## Cross-repo merge-pause inventory at capture 00:50Z (Pred P evaluation)

| Repo | Merge-silence at 00:50Z | In-window merges | Stratification class (synth #247) |
|------|--------------------------|--------------------|--------------------------------------|
| sst/opencode | **1h01m03s** | 0 | **mid-pause** (newly crossed shallow→mid in-window) |
| openai/codex | 6m44s | 1 | **shallow** (only repo at <30min) |
| BerriAI/litellm | 13m13s | 2 | **shallow** (resumed via deferred-batch doublet) |
| google-gemini/gemini-cli | **3h32m28s** | 0 | **deep** |
| block/goose | ~2h38m | 0 | **deep** |
| QwenLM/qwen-code | **12h22m+** | 0 | **structurally inactive** |

**Pred P (Add.105: by Add.107, the 3 deepest-paused at Add.104 — qwen-code, litellm, gemini-cli — collectively still have ≥2 with merge-silence ≥3h, while opencode/codex/goose collectively have ≤1 with silence ≥1h):** at Add.106 (1 tick early), the **3 deepest-paused-at-Add.104 cohort** are: qwen-code (12h22m ≥3h ✓), litellm (13m, **<3h ✗** — resumed!), gemini-cli (3h32m ≥3h ✓). **2 of 3 ≥3h holds**. The **shallow-cohort at Add.106** (opencode 1h01m, codex 6m, goose 2h38m): ≥1h count = **2 (opencode, goose)**. Pred P required ≤1; **at Add.106 the shallow-cohort side of Pred P is in tension (2 vs ≤1)**. The **deep-cohort side passes**. **Pred P partially confirmed, partially in tension at Add.106**; final evaluation at Add.107. **Promote: stratified-resumption is not perfectly clean — opencode crossed shallow→mid in-window despite being in the shallow cohort at Add.104, complicating the synth #247 reading.**

## Pred-status table for ADDENDUM-106 close

- **Pred A''** → REFINES to **Pred A'''** (monotonic token-specificity narrowing test) based on in-place title edit on #24693.
- **Pred B** → still falsified, no jeevan6996 merge across 5 ticks; **structurally confirmed falsification**.
- **Pred C'** → still falsified, no yuneng-berri #26643 merge.
- **Pred D** → still falsified, no skgandikota merge.
- **Pred E** (axis-7 lifecycle-hooks 3rd by Add.106) → no new lifecycle-hooks PR in window; **FALSIFIES** at deadline.
- **Pred F** → already falsified neutrally at Add.105.
- **Pred G** → CONFIRMED at Add.104.
- **Pred H** → carry; partial close-not-merge of evawong-oai #19867 (Windows cmd sandbox, adjacent to but not in the 5-PR stack); original stack still 0/5 merged.
- **Pred I** → CONFIRMED at Add.105; **extends to 4-tick at Add.106**.
- **Pred J** → no new (d)-instance; carry, 4 ticks remaining.
- **Pred K** → already evaluated at Add.105 (passes literal, mechanism stratifies).
- **Pred L** → **PASSES literally (ratio 0.105 ≤ 0.2) but mechanism falsifies-as-decoupled-down at deadline tick** (litellm resumed via deferred-batch doublet); **promote to synth #249**.
- **Pred M** → **PASSES at Add.106** (ishaan-berri #26649 3m57s self-close); 4 ticks early.
- **Pred N** → no sub-pattern (e) recurrence; carry, 5 ticks remaining.
- **Pred O** → no ayushh0110 new PR; carry, 4 ticks remaining.
- **Pred P** → **partially confirmed (deep-cohort side), partially in tension (shallow-cohort side; opencode crossed)**; final at Add.107.
- **Pred Q** → REFINES to **Pred Q'** (3 modes of scope iteration including in-place title edit).
- **Pred R** → still pending; no LCubero retry.
- **Pred 248-1** → ≥30min threshold definitively passed (gemini-cli at 3h32m); ≥60min and ≥3h evaluations active.
- **Pred 248-2** → pending until next gemini-cli merge.
- **Pred 248-3** → on track (Adib234 PRs still OPEN).

## New predicates opened by ADDENDUM-106

- **Pred S (bolinfest stacked-PR pair resolution):** by Add.110, codex #19899 + #19900 will resolve as either (i) both merged within ≤30m (planned-stack), (ii) one merged + one closed (alternative-revealed), or (iii) both still OPEN ≥4h (speculative-stack). The which-branch outcome distinguishes synth #244 sub-pattern (a) variants on a same-second author pair with disjoint surfaces.
- **Pred T (litellm deferred-batch signature recurs):** if litellm produces another doublet (≥2 merges within ≤5min after a ≥2h merge-silence) by Add.112, the deferred-batch resumption regime is a **stable mode** rather than a one-shot. If no doublet appears and merges return to singletons-spread-out, the Add.106 doublet was a transient cluster.
- **Pred U (sub-pattern (f) — PAT/permission-validation drive-by self-close — recurs):** by Add.112, ≥1 additional sub-second self-close by an `oss-agent-*` or `*-bot` author class on a PAT/permission-validation-titled PR in any tracked repo. If yes, sub-pattern (f) joins (a)-(e) as a recurrent close axis. If no, #26646 was a one-shot bot-config artifact.
- **Pred V (gemini-cli-robot title-leak persistence):** by Add.110, ≥1 further gemini-cli-robot PR title with leading `# ` markdown artifact. If yes, the gemini-cli-robot title-formatter has a systematic markdown-leak bug (operationally relevant for downstream parsers); if no, the 2 prior instances (#26071, #26084) were transient.
- **Pred W (opencode shallow→mid crossing predicts merge-silence ≥2h by Add.108):** opencode crossed 1h merge-silence at Add.106. If by Add.108 opencode merge-silence reaches ≥2h, opencode's pause-deepening trajectory matches the gemini-cli pattern (synth #248 R2 generalizes to opencode). If opencode resumes ≤1h30m total silence, the synth #247 stratification is **non-monotonic in time** — a repo can cross shallow→mid and then revert without entering deep.
- **Pred X (kitlangton in-place title edits as third scope-iteration mode):** by Add.110, kitlangton produces ≥1 further in-place title edit on an OPEN PR in the httpapi-session series. If yes, in-place editing is a **deliberate iteration mode**; if no, the #24693 edit was a one-shot.

## Capture close

**00:50:00Z (2026-04-28).** Next addendum (ADDENDUM-107) target window: 00:50:00Z → next tick.
