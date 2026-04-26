# W17 / synth #160 — B-A-M-N triple → quadruple at one-window distance confirms P-158.B; yiliang114 emerges as second concurrent same-author-divergent author on qwen-code; two simultaneous same-author-divergent regimes within one window

## Pattern

Add.57 window (2026-04-26T13:33:15Z → 14:04:24Z, 31m09s) produced two structurally-related events on QwenLM/qwen-code that together confirm and **extend** synth #158's same-author-divergent quadrant analysis:

### Event A — B-A-M-N opens FOURTH disjoint qwen-code surface (#3645) at 13:59:36Z

`B-A-M-N` (John London) is now active across four qwen-code PRs in W17 with explicit AI-coauthor attribution (`Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`):

| PR | Surface | Latest commit (UTC) | Diff | Cited prior PRs in commit body |
|----|---------|---------------------|------|---------------------------------|
| QwenLM/qwen-code#3631 | telemetry / cost-estimation (`/stats model`) | 12:48:30Z (Add.55) | +656/−3, 3 commits | — |
| QwenLM/qwen-code#3629 | config / API timeout env override | 13:02:45Z (Add.56) | +377/−5, 3 commits | closes #1045 (OAuth-path bug) |
| (referenced) qwen-code#1045 | OAuth-path timeout bug (closed by #3629) | — | — | — |
| **QwenLM/qwen-code#3645** | **CLI / model-resolution precedence** (`argv > settings > OPENAI_MODEL > QWEN_MODEL`) | **13:57:56Z (Add.57)** | **+293/−7, 1 commit** | **regression-fix for #3567 (reverted in #3633)** |

**P-158.B (B-A-M-N triple → quadruple within next 4 windows) CONFIRMED at one-window distance** — #3645 opened 13:59:36Z, less than 27 minutes after the synth #158 window-end (13:33:15Z). The fourth surface is **disjoint** from the prior three (telemetry, config, OAuth) — model-resolution is a fourth distinct subsystem.

**Qualitative shift in the quadruple**: #3631, #3629, and the OAuth surface were all **net-new feature/bug surfaces opened by B-A-M-N**. #3645 is structurally different — it is a **regression-fix for other authors' merged work** (#3567 source, #3633 revert). B-A-M-N's author-fanout regime is **expanding from net-new contribution into cross-author regression-stitching coordination**. This is a **scope shift** within the same-author-divergent regime, not just a count extension.

### Event B — yiliang114 emerges as second multi-PR same-author-divergent author on qwen-code in same window

`yiliang114` (易良) is observed active on two qwen-code PRs in Add.57:

| PR | Surface | Latest commit (UTC) | Diff |
|----|---------|---------------------|------|
| QwenLM/qwen-code#3615 | LSP tool-resolution + isPathSafe + docs (7-commit aggregated PR, in-window commit at **13:32:16Z** authored / 13:41:20Z committed — 9m04s author→commit propagation) | 13:32:16Z / 13:41:20Z | +645/−64, 7 commits |
| QwenLM/qwen-code#3640 | CLI / gradient rendering guard | 09:00:51Z (pre-window) | +98/−9, 1 commit |

**yiliang114 is in same-author-divergent regime on qwen-code at length 2** (LSP subsystem + CLI rendering subsystem — disjoint surfaces). The author-fanout is shorter than B-A-M-N's quadruple but **structurally the same regime**: one author distributing across disjoint subsystems within the same repo within W17. **No AI-coauthor trailers on yiliang114's commits** — yiliang114 attributes solely to the human author.

### The structural co-occurrence

**Two distinct authors are in same-author-divergent regime on qwen-code simultaneously within a single 31m09s window.** This is **structurally novel** in the tracked W17 range:

- Synth #158 framed B-A-M-N's triple as the canonical same-author-divergent example, characterizing it as a **single-author 3-element fanout** filling one quadrant of the cross-author × convergent/divergent matrix.
- Add.57 reveals the regime is **multi-occupant on a single repo within a single window**: two authors in the same regime concurrently. This is not a 2x2-matrix observation (B-A-M-N and yiliang114 are not coordinating on a shared surface, nor on disjoint surfaces of each other's work) — it is a **regime-density observation**: the same-author-divergent regime now has ≥2 simultaneous instances on qwen-code in W17.

This **density** is itself a coordination signature: qwen-code in Add.55–57 windows has produced **B-A-M-N quadruple + yiliang114 doublet + jordimas#3643 i18n + wenshao#3637 (review-touch reactivation) + wenshao#3642 (dormant)** — **5+ active authors across 8+ active PRs in 3 windows**. This author-density on a single repo exceeds anything observed elsewhere in W17 tracked range and is **the structural inverse of synth #150 regime A** (litellm fully silent — single-repo low author density).

## Updated cross-author/same-author quadrant matrix (post-Add.57)

|              | **Convergent (single surface)** | **Divergent (disjoint surfaces)** |
|--------------|----------------------------------|-----------------------------------|
| **Cross-author** | synth #156 Event A: cline deepseek-v4 (gerryqi #10401/#10404 + Jabca #10418), 3 PRs / 2 authors / 1 surface | synth #156 Event B: qwen-code (B-A-M-N #3631 + jordimas #3643), 2 PRs / 2 authors / 2 surfaces, 1m33s gap |
| **Same-author** | NOT YET OBSERVED in W17 (P-158.E test still open, window 1 of 4) | **synth #158 Event B + synth #160 Event A: B-A-M-N quadruple on qwen-code (#3631 + #3629 + #1045-closure + #3645), 4 PRs / 1 author / 4 surfaces; AND synth #160 Event B: yiliang114 doublet on qwen-code (#3615 + #3640), 2 PRs / 1 author / 2 surfaces — REGIME IS MULTI-OCCUPANT** |

**Three of four quadrants are now populated; one remains untested (same-author convergent). The same-author-divergent quadrant is the FIRST to show multi-occupant density** — two distinct authors in the same regime in the same window on the same repo. This is unprecedented in the tracked W17 range and creates a structural prediction: if same-author-divergent has multi-occupant density, the other quadrants may also support multi-occupant density once observed. Synth #156's cross-author observations are both single-instance per quadrant; whether they too support multi-occupant density is now a **next-window observation question**.

## Discriminator vs prior synths

| Synth | Pattern | Match? | Why distinct |
|-------|---------|--------|---------------|
| #158  | B-A-M-N triple on qwen-code disjoint surfaces, post-merge duplicate-prune on crush | extends triple to quadruple; introduces regime-density | Synth #160 confirms P-158.B (quadruple), introduces second concurrent same-author-divergent author (yiliang114), and reframes the quadrant as multi-occupant rather than single-instance |
| #156  | Cross-author convergent + divergent co-occurrence within one window | independent | Synth #160 covers same-author dimension only; #156 covered cross-author. Together synth #156 + #158 + #160 populate 3 of 4 quadrants of the matrix |
| #154  | Same-author back-to-back content-rev pair on adjacent provider surface | extends to quadruple | Synth #160 extends synth #154's pair → synth #158's triple → synth #160's quadruple, all on disjoint surfaces |
| #150  | Regime A litellm-silent / Regime B codex-stack-only / Regime C qwen-code-multi-author | extends Regime C to multi-author multi-PR-per-author density | Synth #150 framed qwen-code as multi-author; synth #160 reframes it as **multi-author with multiple authors in same-author-divergent regime simultaneously** — a denser regime than #150 anticipated |
| #84   | Intra-repo same-author cross-PR co-fire signature (n=2) | extends to n=4 with second concurrent occupant | Synth #84 was 2-PR same-author single-instance; synth #160 is 4-PR same-author + 2-PR same-author concurrent |

## Falsifiable predictions (for next 4 windows)

- **P-160.A** (B-A-M-N quintuple): Within next 4 windows, B-A-M-N opens or commits to a **fifth** disjoint qwen-code surface (NOT cost-estimation/#3631, NOT timeout/#3629, NOT OAuth/#1045, NOT model-resolution/#3645). If yes, B-A-M-N is in unbounded author-fanout. If no, the quadruple is the cap and matches the original Add.56→#158 quadruple-cap framing.
- **P-160.B** (yiliang114 triple): Within next 4 windows, yiliang114 opens or commits to a **third** disjoint qwen-code surface (NOT LSP/#3615, NOT CLI-gradient/#3640). If yes, yiliang114 is in author-fanout regime parallel to B-A-M-N. If no, yiliang114 is at-most a doublet author.
- **P-160.C** (regime-density extends to second repo): Within next 4 windows, **a second tracked repo will show ≥2 concurrent same-author-divergent regime authors within one window** (e.g. cline, codex, litellm). If observed, multi-occupant density is a cross-repo W17 phenomenon. If not, qwen-code is uniquely high-density and the regime-density observation is repo-specific.
- **P-160.D** (B-A-M-N regression-stitching extends): Within next 4 windows, B-A-M-N opens **another regression-fix PR** (citing prior PR numbers in commit body, fixing other-author merged work). If observed, B-A-M-N is in **author-coordination role**, not just fanout. If only #3645 stitches, the regression-fix is incidental.
- **P-160.E** (same-author convergent quadrant fills): Within next 4 windows, the **fourth quadrant (same-author convergent — same author refining same surface across multiple PRs in one window)** will be observed at least once. P-158.E's prediction extended; window 1 of 4 has not yet observed it. If still unobserved at window 4, the same-author convergent quadrant may be structurally absent from W17 (authors who fanout disjoint surfaces don't simultaneously fanout convergent surfaces).
- **P-160.F** (AI-coauthor attribution remains B-A-M-N-specific): yiliang114's in-window commit (`dfedcbcc04b7`) carries **no AI-coauthor trailer**; if next 4 windows show no other tracked-repo author adopting `Co-Authored-By: Claude` or similar, P-158.C is conclusively negative — AI-coauthor attribution is B-A-M-N-author-specific habit, not a 2026-W17 contribution-norm shift.

## Refines / falsifies prior synths

- **Confirms P-158.B at one-window distance** — B-A-M-N triple → quadruple via #3645 (model-resolution surface) opened 2026-04-26T13:59:36Z.
- **Extends synth #158's same-author-divergent quadrant** from single-instance (B-A-M-N triple) to **multi-occupant** (B-A-M-N quadruple + yiliang114 doublet, two authors in same regime simultaneously).
- **Refines synth #150 Regime C** (qwen-code multi-author) by showing the regime supports multi-occupant same-author-divergent density, not just single-author-per-PR multi-author breadth.
- **Introduces a scope shift in B-A-M-N's regime** — #3645 is regression-stitching, not net-new feature; B-A-M-N is now in cross-author coordination role within the same-author-divergent fanout.
- **Independent of synth #157/#159** — synth #160 covers qwen-code coordination density; #157/#159 cover codex bolinfest stack and litellm branch-channel patterns. No interaction.

## Anchor PRs / SHAs

**Event A (B-A-M-N quadruple confirmation):**
- QwenLM/qwen-code#3645 (`B-A-M-N`, base `main`) — opened 2026-04-26T13:59:36Z, head `fd04a01a2452a52f2767dbe3ac9a8c50ac45d45c`, +293/−7, 1 commit (`fd04a01a` authoredDate 2026-04-26T13:57:56Z, 1m40s before open), title `fix(cli): correct OPENAI_MODEL precedence without breaking /model selection`, surface: **CLI model-resolution precedence**, commit body cites **#3567 (regression source) and #3633 (revert)**, AI-coauthor `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`
- B-A-M-N's prior 3 surfaces (recap from synth #158): #3631 telemetry/cost-estimation (`7c9ed21aeee3`), #3629 config/timeout (`399570c592d2`), #1045 OAuth-path (closed by #3629)

**Event B (yiliang114 same-author-divergent doublet):**
- QwenLM/qwen-code#3615 (`yiliang114`, base `main`) — head `dfedcbcc04b788ff2dacacbdcb01b07e04a3d172`, +645/−64, 7 commits, in-window commit `dfedcbcc04b7` authoredDate 2026-04-26T13:32:16Z / committedDate 13:41:20Z (9m04s author→commit propagation), title `fix(lsp): 修复 LSP 文档、isPathSafe 限制，并提升 LSP 工具调用率`, surface: **LSP tool-resolution + isPathSafe + docs**
- QwenLM/qwen-code#3640 (`yiliang114`, base `main`) — opened 2026-04-26T09:10:46Z, head `cc9e65365d61130ee70ae731bd29059cd9d6453e`, +98/−9, 1 commit, title `fix(cli): guard gradient rendering without colors`, surface: **CLI gradient rendering**

## Source addenda

ADDENDUM-54, ADDENDUM-55, ADDENDUM-56 (B-A-M-N triple baseline + synth #158 issuance), ADDENDUM-57 (B-A-M-N #3645 quadruple-confirming open at 13:59:36Z, yiliang114 #3615 in-window commit at 13:32:16Z, yiliang114 #3640 surfaced as second yiliang114-active PR)
