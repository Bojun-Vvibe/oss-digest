# 2026-04-25 — Addendum 25

**Window:** `2026-04-25T16:36:00Z` → `2026-04-25T17:26:00Z` (50 minutes, immediately following Addendum 24).

**Scope:** anomalyco/opencode, BerriAI/litellm, openai/codex (other targets — browser-use, OpenHands, cline, continue, ollama, aider — recorded zero PR activity in window).

## opencode (anomalyco/opencode)

- **[anomalyco/opencode#24341]** — OPENED 16:37:06Z by `pascalandr`, head SHA `28d0790c`. **+72/-3 across 2 files**. *"fix(app): normalize watcher paths."* Surface: filesystem watcher path normalization.
- **[anomalyco/opencode#24343]** — OPENED 17:08:25Z by `pascalandr`, head SHA `1d5ccbff`. **+52/-4 across 3 files**. *"fix(session): drop stale plan reminders."* Surface: session-state reminder pruning.
- **[anomalyco/opencode#24345]** — OPENED 17:16:37Z by `pascalandr`, head SHA `9e83add6`. **+8/-0 across 1 file**. *"fix(ripgrep): time out binary download."* Surface: external-binary download timeout.
  - **`@pascalandr` extends his W17 PR streak to 10 PRs in <2h** across **three distinct cadence regimes**:
    - **Burst regime** (Addendum 23): same-second 4-tuplet at 15:32:18Z (#24319/24320/24321/24322), gap 0s.
    - **Spaced regime** (Addendum 24): three PRs at 16:17:13Z / 16:18:29Z / 16:29:30Z (gaps **76s** and **661s**).
    - **Slow-drip regime** (this window): three PRs at 16:37:06Z / 17:08:25Z / 17:16:37Z (gaps **1879s** = 31.3min, and **492s** = 8.2min).
  - All ten PRs sit on **disjoint surfaces** (no shared modified file across any pair). The cadence has **monotonically dilated** across the three regimes (0s → ~minutes → ~half-hour). Anchor for synth #95 (intra-author cadence-dilation across three regimes within a single sub-2h author session).

## codex (openai/codex)

- **[openai/codex#19578]** — OPENED 16:56:42Z by `bolinfest`, head SHA `f2d627f1`, **MERGED 17:03:01Z by `bolinfest`** (self-merge), merge SHA `88f300d7`. **Lifespan 6m19s**. **+5/-1 across 1 file**. *"fix: increase Bazel timeout to 45 minutes."* Surface: CI timeout knob.
  - This is a **side-fix** by `bolinfest` while his **5-deep permissions stack (#19391–19395) remains untouched in head SHA** for the entire Addendum 22→25 span (~3h continuous). The Bazel timeout fix targets a CI scaling concern — plausibly the same CI infra that serves the stack's checks. Pattern: **deep-stack author opens-and-self-merges a 1-file infra-knob fix outside the stack, with stack head SHAs frozen**.
- **5-PR same-second non-content touch on `bolinfest` permissions stack (#19391–19395)**: all five PRs report identical `pushed_at: 17:25:10Z` and `updated_at: 17:25:15Z`. **Head SHAs unchanged** vs Addendum 23/24 records (#19391 still `48d74e7b...`, #19395 still `d958f521...`). This is **N=5 same-second metadata-only touch** — likely a base-branch-tracking refresh or auto-rebase probe, **not** a force-push (force-push would mutate head.sha). Anchor for synth #96.
- **[openai/codex#19389]** — UPDATED 17:19:03Z by `shijie-oai` (created 2026-04-24T15:53:36Z), head SHA `c4a3343f`. **+382/-20 across 2 files**. *"Guard npm update readiness."* Activity in window without head-SHA mutation visible at API surface.
- **[openai/codex#19458]** — UPDATED 17:14:09Z by `lt-oai` (created 2026-04-24T22:35:02Z), head SHA `f2ec17ef`. The `lt-oai` replacement PR (the survivor of the Addendum 24 triple-close) sees in-window activity but **no merge / close**.
- **`lt-oai` codex triple-close cluster (#18433/#18434/#19114)** from Addendum 24 remains **closed-unmerged**; #19458 still open ~5h after the close burst.

## litellm (BerriAI/litellm)

- **No merges in window.** The Addendum 22→24 sustained merge wave (8 merges in ~80 minutes by 4 authors) **broke** at 16:30:37Z with `yuneng-berri`'s #26490 merge. ~56 minutes of zero-merge dwell follows.
- **[BerriAI/litellm#26496]** — UPDATED 17:25:49Z by `yuneng-berri` (created 06:41:22Z today), head SHA `151d7ab1`. *"[Infra] Merge dev branch."* Open, no merge in window.
- **[BerriAI/litellm#26471]** — UPDATED 17:18:50Z by `ishaan-berri` (created 01:56:47Z today), head SHA `ad6e8854`. *"feat(teams): per-model team member budgets."*
- **[BerriAI/litellm#26338]** — UPDATED 17:17:49Z by `ryan-crabbe-berri` (created 2026-04-23T18:13:53Z), head SHA `09113078`. *"feat(mcp): resolve team/key MCP permissions by name or alias."* `ryan-crabbe-berri` returns to a 2-day-old PR after his Addendum-24 third-merge of the day (#26004) — touch without merge.
- **[BerriAI/litellm#26415]** — UPDATED 17:06:22Z by `pghuge-cloudwiz` (created 2026-04-24T11:15:04Z). *"feat(mavvrik): add Mavvrik integration."* Open.
- **[BerriAI/litellm#26247]** — UPDATED 16:42:16Z by `ayushh0110` (created 2026-04-22T12:56:59Z). *"fix(mcp): preserve native tools in semantic filter hook."* Open.

## Cross-repo summary

- **`@pascalandr` cadence-dilation signature** is now the dominant lens of the W17 day: a single author moving from N=4 same-second batch (15:32:18Z) → 3 PRs at minute spacing (16:17–16:29Z) → 3 PRs at half-hour spacing (16:37–17:16Z). Total **10 PRs in 1h44m**, all surface-disjoint. **Synth #92's "batch-tool default workflow" hypothesis is now thoroughly falsified** — the same-second batch was a one-shot mode, with the author switching to spaced submission for the next 6 PRs. Anchor for synth #95.
- **`bolinfest` 5-PR same-second non-content stack-touch at 17:25:10Z** is structurally novel: same-second N=5 events catalogued so far (synth #84 mechanical co-fire, synth #92 same-second 4-tuplet open) all involve **content-bearing events** (head SHA mutation, new PR creation). This is the first **same-second N=5 metadata-only touch** — anchored to synth #96.
- **bolinfest dual-mode behavior**: permissions stack (#19391–95) **frozen in head SHA** for ~3h while same author opens-and-self-merges a 1-file CI knob fix (#19578) in 6m19s. Author maintains two parallel review postures: deep-stack-pending and quick-fix-self-merge. Cited in synth #96 as supporting evidence.
- **litellm wave broke**: 56 minutes of zero-merge dwell after the Addendum 24 sub-wave. Open PR activity (touches by `ryan-crabbe-berri`, `ishaan-berri`, `yuneng-berri`) continues but without close/merge events — wave fully decayed.
- **Synth #87 follow-on**: opencode #19526 still no activity through 17:26Z (gap now ~4h).
- **Synth #89 follow-on**: `Gzhao-redpoint`'s litellm refile #26504 still OPEN, unchanged.
- **Synth #93 follow-on**: `alfredocristofano` (the Addendum-24 four-PR debut author) **no further PRs in window** — debut-then-burst signature stays N=4 with no extension.
