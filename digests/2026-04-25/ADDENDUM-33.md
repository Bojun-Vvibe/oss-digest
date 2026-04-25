# 2026-04-25 — Addendum 33

**Window:** `2026-04-25T21:58:14Z` → `2026-04-25T22:34:00Z` (35m46s, immediately following Addendum 32).

**Scope:** BerriAI/litellm, openai/codex, sst/opencode, anomalyco/opencode, charmbracelet/crush, Aider-AI/aider.

## litellm (BerriAI/litellm)

**Three merges in window — velocity restored vs Add. 32's 2/2.** Distribution: 2 self-merges (yuneng-berri, ryan-crabbe-berri) + 1 maintainer-merge (krrish-berri-2 / external on Michael-RZ-Berri's PR). Three distinct authors, three distinct mergers.

- **[BerriAI/litellm#26525]** — opened 21:35:17Z by `yuneng-berri`, head SHA `c364c511`, **MERGED 22:13:42Z** by `yuneng-berri` (self-merge), merge SHA `b021d5c109aa69644cc4db06c3ab81c71aaee9fa`. **Lifespan 38m25s.** **+391/-5 across 5 files.** *"[Fix] broaden RAG ingestion credential cleanup to AWS endpoint/identity fields."* Base **`litellm_internal_staging`**. **First tracked `yuneng-berri` PR with `litellm_internal_staging` base** (prior three PRs in Add. 29–31 all targeted personal-staging branch `litellm_yj_apr25`). Cited as anchor for synth #112 below.

- **[BerriAI/litellm#26520]** — opened 20:43:12Z by `ryan-crabbe-berri`, head SHA `79762e4f`, **MERGED 22:05:05Z** by `ryan-crabbe-berri` (self-merge), merge SHA `1dee006423b36d56422d008fbf076d3bb199a01c`. **Lifespan 1h21m53s.** **+704/-4 across 9 files.** *"[Feat] Add 'My User' tab to team info page."* Base **`litellm_internal_staging`**. **First `ryan-crabbe-berri` event in tracking window** — debut author with single-PR self-merge; pure-additive UI surface (704 adds, 4 deletes ratio = 176:1, even more lopsided than Add. 32's `moscovium-mc` #24392 at infinite ratio).

- **[BerriAI/litellm#26459]** — opened 2026-04-24T22:17:58Z by `Michael-RZ-Berri`, head SHA `5afd9bcc`, **MERGED 22:14:02Z** by maintainer (non-self), merge SHA `3ef16098f2e8c2e209dc7bf197579e5bb9f79233`. **Lifespan 23h56m04s.** **+578/-97 across 4 files.** *"[Fix] Reseed enforcement read path from DB on counter miss."* Base **`litellm_internal_staging`**. PR carried 23+ hours — longest-tail lifespan in last 6 addenda — and merged within a 9-second window of #26525 (22:13:42Z) and 20-second cluster with #26520 (22:05:05Z). **Three-merge cluster compressed into 8m57s** (22:05:05 → 22:14:02).

**Merger-mix in window:** {yuneng-berri:1 self, ryan-crabbe-berri:1 self, maintainer:1} = 2 self / 1 non-self = 67% self-merge. Compare Add. 31 (100% self-merge, 6/6) → Add. 32 (0% self-merge, 0/2) → Add. 33 (67%, 2/3). **The author-merger asymmetry signal (synth #109) is unstable across consecutive 30-minute windows: 100% → 0% → 67%.** This volatility itself is the new finding — synth #109's "categorical regime flip" applies pairwise but the sequence is **not a regime persistence**, it's high-frequency oscillation. Anchor for **synth #111**.

**Open notable:**
- **[BerriAI/litellm#26528]** — opened 22:19:25Z by `shivamrawat1` (head SHA `f6e4e106`, +39/-20 across 2 files), *"fix(proxy): suppress deferred success log when post-call guardrail blocks."* OPEN. **Third `shivamrawat1` PR in three consecutive addenda** (Add. 32 #26474 + #26466 merged, #26524 opened; Add. 33 #26528 opened). Continues the `*guardrail*`-prefixed surface family. Inter-open gap: #26524 (Add. 32, 21:30:20Z) → #26528 (22:19:25Z) = **49m05s**. Author is in sustained ~30-minute open-cadence on guardrail surface.
- **[BerriAI/litellm#26527]** — opened 22:16:44Z by `codejedi-ai` (head SHA `c8c6374e`, **+534/-2 across 7 files**), *"test(ci): add dockerized E2E coverage."* OPEN. **First `codejedi-ai` event in tracking window** — second debut author of the window (after `ryan-crabbe-berri`'s #26520). Pure-test/CI surface, near-zero deletions (534:2 ratio). Base `litellm_internal_staging`.
- **[BerriAI/litellm#26523]** + **#26471** — `ishaan-berri`'s duplicate-open `feat(teams): per-model team member budgets` pair (synth #107) **still both OPEN** at window close. **Survival now 1h17m+ for #26523 (opened 21:16:58Z) and 20h37m+ for #26471 (opened 01:56:47Z)**. Updated 22:34:20Z and 22:06:48Z respectively — both actively comment-touched but neither closed nor merged. Duplicate-open pattern is **persisting across three addenda** (32, 33, and earlier mention in 31).
- **[BerriAI/litellm#26517]** — `ishaan-berri`'s `feat(mcp): LIT-2503` (Add. 32 noted), still OPEN, updated 22:32:37Z (active comment activity). 2h36m+ open lifespan and counting.
- **[BerriAI/litellm#26439]** — `dkindlund` external-author PR `fix(adapters,vertex): pass output_config through to backends...` (closes #23380, supersedes 4 prior PRs), updated 22:35:05Z. 30h+ open. External-contributor long-tail; will be tracked as a baseline for non-`*-berri` author behavior.

## opencode (anomalyco/opencode)

**Zero merges, one large fresh open, two long-tail comment refreshes.**

- **[anomalyco/opencode#24395]** — **OPENED 22:02:26Z** by `herjarsa`, head SHA `ec84337e`, **+3108/-49 across 18 files.** *"feat(memory): add agent_memory table and memory-tools plugin."* Base **`dev`**. **First `herjarsa` event in tracking window** — third debut author of this window across all repos (after `ryan-crabbe-berri`, `codejedi-ai`). Diff size +3108 is **the largest single-PR open observed in any tracked addendum to date** (compare Add. 32's largest open = `mubashir1osmani` #26526 at +558/-45). Surface is new (`memory/`); not adjacent to recent kitlangton bridge-* work. **Opens 4m12s after Addendum 32's `kitlangton` #24394 open** — back-to-back fresh opens on `dev` from unrelated authors, no merge between them.

- **[anomalyco/opencode#24378]** — `v1truv1us` *"docs: sync env vars with source code"* (+1197/-831 across 36 files), opened 19:47:05Z, **CLOSED-not-merged 22:11:10Z** by author or maintainer. **Lifespan 2h24m05s; closed without merge.** Large docs PR abandoned/superseded — first non-merge close on anomalyco/opencode in last 5 addenda. Pattern worth flagging: this is the first observed close-without-merge on opencode side (litellm has had several via duplicate-supersession).

- **[anomalyco/opencode#23557]** (`simonklee`, *"feat(opencode): add interactive split-footer mode to run"*, +18055/-330 / 51 files, opened 2026-04-20) and **[anomalyco/opencode#24324]** (`blakkd`, *"fix(TUI): update LSP activation message"*, +1/-1, opened 2026-04-25 15:46Z) **both refreshed 22:17:59Z and 22:29:11Z respectively.** Mechanical co-bump variant (synth #84) but with non-byte-identical timestamps — the bumps are 11m12s apart, not co-temporal. Distinct from Add. 32's `noahbentusi`/`mocksoul` byte-identical co-bump.

## codex (openai/codex)

**Zero merges in window.** One notable close-not-merge captured by tail-update:

- **[openai/codex#19597]** — `etraut-openai`'s *"Fix TUI attach fallback test stack overflow"* (+88/-53, 1 file, opened 20:55:21Z) **CLOSED-not-merged 21:20:33Z** (pre-window). Surfaces in this window via update at 22:32:31Z (likely comment activity). Author `etraut-openai` is a known core team member (co-creator of pyright). Closed within 25m12s of opening — among the shortest-lived non-merge codex closes tracked. Likely either superseded internally or the fix landed via a different path.

Active long-tail PRs comment-bumped but unchanged: `bolinfest`'s 5-PR `permissions:` stack (#19391–#19395, all updated 22:28:16–22:28:17Z, byte-identical-second co-bump on 5 PRs from same author into chained base branches — **5-PR mechanical co-bump on a single stacked-PR train**, sharper than synth #84's pair-wise mechanical co-bump). `lt-oai` #19458 (ChatGPT Library hooks), `viyatb-oai` #19184 (deferred network proxy denials) — both OPEN, both comment-bumped without state change.

## sst/opencode, charmbracelet/crush, Aider-AI/aider

**Zero PR-events in window across all three repos.** charmbracelet/crush has been silent for 4 consecutive addenda; Aider-AI/aider for 3. sst/opencode mirrors anomalyco activity inconsistently and showed no own-events this window.

## Window summary

| repo | merged | opened | closed-no-merge |
|---|---|---|---|
| BerriAI/litellm | 3 | 2 | 0 |
| anomalyco/opencode | 0 | 1 | 1 |
| openai/codex | 0 | 0 | 0 (tail surfaces 1 pre-window close) |
| sst/opencode | 0 | 0 | 0 |
| charmbracelet/crush | 0 | 0 | 0 |
| Aider-AI/aider | 0 | 0 | 0 |
| **TOTAL** | **3** | **3** | **1** |

**Three debut authors** in 36 minutes (`ryan-crabbe-berri`, `codejedi-ai`, `herjarsa`) — debut-rate is unusually high. Anchor referenced from synth #111.

**Self-merge ratio:** 2/3 = 67% (litellm only; opencode had 0 merges).

**Cross-repo merge cluster:** litellm's 3-merge cluster compressed into 8m57s (22:05:05Z → 22:14:02Z) with no opencode/codex/crush/aider merges in the same minute-resolution span — **litellm-monoculture window for merge-throughput** (compare synth #102).
