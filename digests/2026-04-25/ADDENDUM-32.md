# 2026-04-25 — Addendum 32

**Window:** `2026-04-25T21:20:33Z` → `2026-04-25T21:58:14Z` (37m41s, immediately following Addendum 31).

**Scope:** anomalyco/opencode, BerriAI/litellm, openai/codex, charmbracelet/crush, ollama/ollama (sst/opencode mirrors anomalyco data on this fetch and is excluded to avoid double-counting).

## litellm (BerriAI/litellm)

**Two merges in window — sharp velocity drop from Add. 31's 6/6.** Both authored by `shivamrawat1`, **both merged by `ishaan-berri` (NOT self-merge).**

- **[BerriAI/litellm#26474]** — opened 02:57:55Z by `shivamrawat1`, head SHA `c5a57b66`, **MERGED 21:30:06Z** by `ishaan-berri` (maintainer-merge, not self-merge), merge SHA `5416a7c86e14ed0a78953a5828f6b46b75468307`. **Lifespan 18h32m11s.** **+98/-108 across 2 files.** *"fix(bedrock guardrail): dedupe post-call log entry when only post_call is configured."* Base **`litellm_internal_staging`**.

- **[BerriAI/litellm#26466]** — opened 00:50:43Z by `shivamrawat1`, head SHA `b7043a85`, **MERGED 21:45:06Z** by `ishaan-berri` (maintainer-merge), merge SHA `7e57b15de2d26691cea556fc8be19ea39b640efe`. **Lifespan 20h54m23s.** **+261/-2 across 4 files.** *"fix(guardrails): team-level guardrails and global policy guardrails can run together."* Base **`litellm_internal_staging`**.

**`shivamrawat1`-author / `ishaan-berri`-merger doublet:** 15-minute inter-merge gap (21:30:06Z → 21:45:06Z). Both opened ~20h earlier (within a 2h07m window of each other on 2026-04-25 early-UTC). Both `fix(...guardrail/guardrails):`-prefixed. Both into `litellm_internal_staging`. **Reverse-age order**: older PR (#26466, opened 00:50:43Z) merged AFTER younger (#26474, opened 02:57:55Z) — the same LIFO closure regime documented in Add. 31 (synth #105 close burst, michelligabriele Add. 31 merge pair), but here on a **non-self-merge channel**. **First clear LIFO regime appearance under maintainer-driven merging in this dispatcher window** — separates LIFO-closure as a property of the *queue* (not the *author*).

Crucially: **Add. 31's merge stream was 4-of-4 self-merges across 4 distinct authors**; Add. 32's merge stream is **0-of-2 self-merges, 2-of-2 maintainer-merged by `ishaan-berri`** acting on `shivamrawat1`'s PRs. **The author≠merger column flips from 0/6 to 2/2 across consecutive 30-minute windows.** This is a **categorical regime change in litellm's merge channel within ~37 minutes**, not a quantitative drift. Anchor for **synth #109**.

**Open notable:**
- **[BerriAI/litellm#26524]** — opened 21:30:20Z by `shivamrawat1` (head SHA `64daf174`, +27/-1 across 2 files), *"fix(vector_stores): restrict vector store and index deletion to proxy…"*. Opens **14 seconds after #26474 merges** — same author, fresh open, different surface (vector_stores ACL, not guardrails). Classic post-own-merge same-author cascade, but here the *triggering* merge was by a different actor (ishaan-berri merged #26474), so the cascade is on **author momentum** rather than self-merge feedback. New variant of synth #50 / #64 — anchor-extension candidate.
- **[BerriAI/litellm#26517]** — opened 19:56:20Z by `ishaan-berri` (head SHA `e8fd2af8`, +50/-7 across 11 files), *"feat(mcp): LIT-2503 non-admin MCP self-service (disconnect, approval filter, BYOK admin guard)."* OPEN at window close. **First `ishaan-berri`-authored OPEN PR observed in tracking** while the same actor is concurrently merging others' PRs. Author/merger role asymmetry confirmed bidirectional within the same actor.
- **[BerriAI/litellm#26526]** — opened 21:51:16Z by `mubashir1osmani` (head SHA `07e42bc8`, **+558/-45 across 2 files**), *"fix arize observability bugs."* OPEN. **Same surface family as Add. 31's merged #26506** (alvinttang's `fix(arize):` +450/-4 across 5 files, merged 21:11:51Z) — second arize-surface PR within ~40 minutes by a different author. Cohort-class signal: arize observability is a **multi-author convergence surface in this 1-hour window**.
- **[BerriAI/litellm#26525]** — opened 21:35:17Z by `yuneng-berri` (head SHA `c364c511`, +391/-5 across 5 files), *"[Fix] broaden RAG ingestion credential cleanup to AWS endpoint/identity fields."* OPEN. **Fourth `yuneng-berri` PR-event in four consecutive addenda** (Add. 29 #26516 merge, Add. 30 #26512 merge, Add. 31 #26513 merge + #26522 merge, Add. 32 #26525 open). The cadence has broken its three-addendum same-author-self-merge-into-`litellm_yj_apr25` chain — #26525 targets `litellm_internal_staging`, not the dated personal-staging branch. **Surface jump within sustained author cadence.**
- **[BerriAI/litellm#26471] / #26523** — `ishaan-berri`'s duplicate-open pair (synth #107) **both still OPEN** at window close. 41-minute survival of the duplicate-open without close-resolution.
- **[BerriAI/litellm#26122]** — `mverrilli` *"fix(ollama): forward tool_calls and tool_call_id in transform_request"* merged 18:28:17Z (pre-window) by `krrish-berri-2`; surfaces in this window via comment activity. Excluded from in-window merge count but noted: another non-self-merge instance, merger ≠ author.

## opencode (anomalyco/opencode)

**One merge, one fresh open, one open chore, two long-tail refresh signals.**

- **[anomalyco/opencode#24387]** — opened 20:49:51Z by `kitlangton`, head SHA `e739aea8`, **MERGED 21:52:34Z** by `kitlangton` (self-merge), merge SHA `df9e1d98548b459815ab6913acad50d3f445e6c4`. **Lifespan 1h02m43s.** **+111/-8 across 6 files.** *"feat(httpapi): bridge config update endpoint."* Base **`dev`**.

- **[anomalyco/opencode#24394]** — **OPENED 21:58:00Z** by `kitlangton`, head SHA `9f0289e1`, **+84/-3 across 5 files.** *"feat(httpapi): bridge project git init endpoint."* Base **`dev`**. **Opens 5m26s after #24387's own merge.** Same author, **same surface family** (`feat(httpapi): bridge ... endpoint`), same base, ~75% diff-size of predecessor. **`kitlangton`'s first tracked PR was Add. 31's #24387 (60m before merge); the second tracked PR is #24394 (5m after first merge).** This is a **debut-author post-own-merge same-surface-family fanout at sub-6-minute latency** — sharper than synth #64 (cross-repo, 5-hour) or synth #50 (general post-own-merge). Anchor for **synth #110**.

- **[anomalyco/opencode#24392]** — OPENED 21:33:03Z by `moscovium-mc`, head SHA `a20420e7`, **+482/-0 across 2 files.** *"chore: add changelog sync workflow and changelog."* Base **`dev`**. Pure-additive (zero deletions) on changelog tooling — repo-shape change shipped as a single PR (contrast synth #46 which is the *opposite* — train-of-small-PRs).

- **[anomalyco/opencode#18767]** (`noahbentusi`, *"feat(app): Mobile Touch Optimization"*, opened 2026-03-23) and **[anomalyco/opencode#13854]** (`mocksoul`, *"fix(tui): stop streaming markdown/code after message completes"*, opened 2026-02-16) — **both updated 21:39:57Z (same second).** Mechanical co-bump signature (synth #84): two long-tail PRs updated at byte-identical timestamp. PR ages are **33 days and 68 days respectively**, base `beta` for both.

## codex (openai/codex)

- **[openai/codex#19511]** — opened 06:17:51Z by `etraut-openai`, head SHA `47b317e4`, **MERGED 21:25:58Z** by `etraut-openai` (self-merge), merge SHA `0c785598b37dba00b4692a78f9fc725bd760db21`. **Lifespan 15h08m07s.** **+17/-4 across 1 file.** *"Keep slash command popup columns stable while scrolling."* Base **`main`**.

- **`etraut-openai` 4-event window-spanning session now confirmed:** Add. 29 #19589 merge (resume regression cover) → Add. 30 #19591 OPEN (filtered thread-list resume, **still OPEN** through Add. 32) → Add. 31 #19597 self-close in 25m12s (TUI attach fallback) → Add. 32 #19511 self-merge (slash-command popup). **4 distinct TUI-class surfaces, 3 self-merges + 1 self-close + 1 still-open, spanning ≥3.5 hours.** Each sub-PR is a different micro-surface within the TUI/resume family. Cadence regime: not metronome (synth #83), not triplet (synth #91) — **persistent same-author multi-surface session with mixed merge/close/still-open outcomes**.

- **[openai/codex#19591]** (`etraut-openai`, filtered thread-list resume) — OPEN, last updated 21:21:22Z (within window, comment activity).

- **[openai/codex#19184]** (`viyatb-oai`, *"fix: handle deferred network proxy denials"*) — OPEN, last updated 21:21:20Z. 2-day-aged PR.

- **[openai/codex#17393]** (`xli-oai`, *"Unwrap PowerShell commands for exec policy"*) — OPEN, last updated 21:56:53Z. **15-day-aged PR** receiving fresh activity in window.

## charmbracelet/crush, ollama/ollama

Zero merges, zero opens, zero closes in window.

## Cross-repo merge-stream summary

| repo | merges in-window | self-merges | maintainer-merges | merge SHAs (short) |
|---|---|---|---|---|
| anomalyco/opencode | 1 | 1 | 0 | `df9e1d98` |
| BerriAI/litellm | 2 | 0 | 2 | `5416a7c8`, `7e57b15d` |
| openai/codex | 1 | 1 | 0 | `0c785598` |
| charmbracelet/crush | 0 | — | — | — |
| ollama/ollama | 0 | — | — | — |
| **total in-window** | **4** | **2** | **2** | — |

**Repo-level merge-volume HHI: 0.375** (litellm 2/4, opencode 1/4, codex 1/4) — sharply down from Add. 31's 1.0 monoculture. Add. 28 (0.625) → Add. 29 → Add. 30 (0.625) → Add. 31 (1.0) → Add. 32 (0.375). **HHI swings from monoculture to lowest value in the 5-addendum trail in a single 37-minute step.**

**Self-merge rate: 2/4 = 50%.** Add. 31 was 4/4 = 100% self-merge; Add. 32 is 50%. **The maintainer-merge channel re-activates within 37 minutes**, exclusively in litellm, exclusively against `shivamrawat1`-authored PRs, exclusively merged by `ishaan-berri`.

**Concurrent open-stream highlights:** 7 in-window opens (`kitlangton`#24394, `moscovium-mc`#24392, `mubashir1osmani`#26526, `yuneng-berri`#26525, `shivamrawat1`#26524 — plus carry-over activity on #26517, #26471/#26523, #19591, #17393, #19184). Open-velocity exceeds merge-velocity 7:4 in window — repo backlogs widening in the short term.

**Anchor candidates this addendum:**
- **Synth #109**: Author/merger asymmetry as a categorical regime feature distinguishing consecutive 30-minute windows in litellm — Add. 31 (0/6 self-merges off, no — 4/4 ON) vs Add. 32 (2/2 OFF) flip.
- **Synth #110**: Debut-author post-own-merge sub-6-minute same-surface-family fanout (`kitlangton` #24387 merge → #24394 open at 5m26s).
