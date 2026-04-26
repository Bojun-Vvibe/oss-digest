# 2026-04-26 — Addendum 37

**Window:** `2026-04-26T00:44:34Z` → `2026-04-26T01:06:01Z` (21m27s, immediately following Addendum 36).

**Scope:** BerriAI/litellm, openai/codex, anomalyco/opencode (sst/opencode alias), charmbracelet/crush, block/goose.

## codex (openai/codex)

**One merge in window** — third consecutive single-merge codex window (Add. 35, 36, 37 each = 1). **Self-merge, not maintainer-mediated.**

- **[openai/codex#18575]** — opened **2026-04-19T17:36:09Z** by `fcoury-oai`, **MERGED 2026-04-26T01:00:33Z by `fcoury-oai` (SELF-MERGE)**. **+3418/-381 across 40 files.** Base `main`. *"fix(tui): reflow scrollback on terminal resize."* **Lifespan 6d7h24m24s** — longest-lived merge in last 4 addenda (Add. 36 #19389=1d8h15m). Refreshed in Add. 36 at 00:38:57Z (T-21m36s pre-merge) as part of `fcoury-oai`'s same-author 3-PR triangle (#19616 + #18575 + #18576). **Of that triangle, #18575 merged, #18576 still open and was refreshed again 1s later at 01:00:34Z, #19616 closed unmerged at 00:45:45Z and immediately replaced by #19617 at 00:45:39Z (open) by same author with same title/diff scope.**

**Same-author close-and-refile pair on cosmetic TUI surface (sub-7-second close-to-replacement-open):**
- **[openai/codex#19616]** — `fcoury-oai`, **CLOSED unmerged 00:45:45Z** (opened 00:37:57Z in Add. 36, lifespan 7m48s). *"feat(tui): add codex logo to session header."* **+248/-32 across 6 files.** **Never merged.**
- **[openai/codex#19617]** — **OPENED 00:45:39Z by `fcoury-oai` (6 SECONDS BEFORE #19616 close)**. *"feat(tui): add codex logo to session header"* — **identical title** to #19616. **+210/-30 across 5 files** — **diff CONTRACTED by 38 additions / 2 deletions / 1 file vs #19616.** Head `119c16e3`. Updated 01:00:49Z. **Open replaces #19616 with smaller scope; same author rescopes own cosmetic feature mid-flight in <8 minutes after first open.**

**Stacked-PR mass-rebase #3 by `bolinfest` at 01:03:55–01:04:01Z (6-second cluster, all 5 head SHAs CHANGED — third full rebase of the same 5-deep stack on the day):**

- **[openai/codex#19606]** — `bolinfest`, base `main`, head `00666224` (was `00666224b881` snapshot in Add. 36 — head SHA prefix actually unchanged in 8-char prefix; full SHA `0066622440b881d2cca7154b86190f313ed3b024` unchanged from Add. 36). Updated 01:03:56Z. **Status: re-touched, +1430/-655/59 unchanged from Add. 36.** *"permissions: make runtime config profile-backed."* **Anchor (base=main) preserved; downstream stack rebased.**
- **[openai/codex#19392]** — `bolinfest`, base `pr19606`, head **`45d17d3b`** (was `9c81b21a` snapshot point in Add. 36 series). Updated 01:03:55Z. **+570/-439/40** (vs Add. 36 +522/-428/40 — **+48 additions, +11 deletions on a content-bearing rebase, NOT a metadata touch**). *"permissions: derive compatibility policies from profiles."*
- **[openai/codex#19393]** — `bolinfest`, base `pr19392`, head **`2c828684`**. Updated 01:03:55Z. **+372/-167/25.**
- **[openai/codex#19394]** — `bolinfest`, base `pr19393`, head **`88b12912`**. Updated 01:04:01Z. **+212/-303/13.**
- **[openai/codex#19395]** — `bolinfest`, base `pr19394`, head **`b1df35c3`**. Updated 01:04:01Z. **+269/-148/11.**

**Inter-rebase cadence (synth #117 extension): rebase #1 at 23:59:33Z → rebase #2 at 00:38:16Z = 38m43s; rebase #2 at 00:38:16Z → rebase #3 at 01:03:55Z = 25m39s.** Inter-rebase interval **CONTRACTED from 38m43s to 25m39s** (–34% gap). **Cadence is accelerating, not stable.** Anchor for synth #119.

**Diff growth on stack interior (#19392) on rebase #3:** +48 additions / +11 deletions on a single child PR while parent `#19606` and grandchild `#19393` unchanged in line counts → **rebase #3 is NOT a uniform `git rebase --onto`; #19392 absorbed real content** (likely conflict resolution against new `main`). Falsifies prior assumption that all 3 rebases were tooling-driven.

**Other refresh in window:**
- **[openai/codex#18576]** — `fcoury-oai`, updated 01:00:34Z (1 second after #18575 self-merge). +7119/-588/39, base `main`. *"feat(tui): render markdown tables responsively."* **Now T+1s post the merge of its sibling #18575.** Was part of Add. 36's #fcoury triangle; now the only TUI sibling still open after #18575 merge + #19616 close+refile.
- **[openai/codex#19618]** — **OPENED 00:49:52Z by `etraut-openai`**. **+39/-11 across 5 files.** Base `main`. *"Persist shell mode commands in prompt history."* Small TUI fix. Updated 00:50:52Z.
- **[openai/codex#19620]** — **OPENED 01:05:25Z by `etraut-openai` (15m33s after #19618 by same author, NOT same-second)**. **+109/-4 across 6 files.** Base `main`. *"Escape turn metadata headers as ASCII JSON."* **Same-author intra-window doublet on disjoint surfaces** (TUI history vs network metadata encoding). Anchor for synth #120.

## litellm (BerriAI/litellm)

**Zero merges in window — third consecutive zero-merge litellm window** (Add. 35, 36, 37 each = 0). **Dry-spell now ≥ 95m53s consecutive** (since Add. 35 start) — longest of the day, extending synth #111 oscillation pattern with a sustained zero floor.

**One new open in window:**
- **[BerriAI/litellm#26536]** — **OPENED 00:55:05Z by `krrish-berri-2`**. Head `9b3bce19`. **+119/-18 across 2 files.** Base `litellm_internal_staging`. *"fix(memory): jsonify metadata before Prisma writes on /v1/memory."* Updated 00:57:47Z. **`*-berri` author cohort continues to dominate litellm staging-branch surface** (Add. 35 #26530 by `mateo-berri`; Add. 35 #26534 by `Michael-RZ-Berri`; now #26536 by `krrish-berri-2` — **3 distinct `*-berri` authors in 3 consecutive addenda, all base=`litellm_internal_staging`**, all small-medium diff). No `main`-targeted opens by `*-berri` cohort in window.

**One closure in window (unmerged, dependabot):**
- **[BerriAI/litellm#26188]** — `dependabot[bot]`, **CLOSED unmerged 01:00:45Z** (NOTE: actual close timestamp from `closed_at` field reads 2026-04-25T18:02:35Z; the 01:00:45Z is `updated_at` from a post-close mention/comment-driven event, not the close action itself — distinguishing rebadged close vs late mention). +6/-6/2. *"build(deps): bump python-dotenv from 1.0.1 to 1.2.2."* **Treat as window-touched, not window-closed.**

## anomalyco/opencode

**Zero merges in window** (last merge #24405 at 2026-04-25T23:27:11Z — now 1h38m50s ago, extending the per-repo merge-gap floor noted in Add. 36 by another 21m27s).

**Zero new opens in window** (Add. 36 had 2 debut opens; rebound from Add. 35 zero-debut now reverts to zero-debut).

**One refresh in window:**
- **[anomalyco/opencode#24283]** — `baranwang`, updated 00:46:04Z. **+1/-0 across 1 file.** Head `c4599001`. Base `dev`. *"docs: add opencode-provider-alias to ecosystem."* Open since 2026-04-25T09:51:00Z (15h08m old at refresh). **Single-line docs-class refresh — third docs-class touch on this PR per recent run.** No surface change.

**Note:** sst/opencode and anomalyco/opencode show identical `#24283` PR (mirror/alias). Same record surfaces under both repo namespaces — **not double-count**.

## block/goose

**Zero merges in window. Bot-driven mass-stale-touch sweep at 00:52:18–00:52:31Z (13-second span, n=5 PRs, 3 distinct authors, age range 30–58 days):**

- **[block/goose#7559]** — `benthecarman`, updated **00:52:18Z**, state=open. *"Bitcoin integration through Orange SDK."* Open since 2026-02-27 (58 days old).
- **[block/goose#7628]** — `jh-block`, updated **00:52:21Z**, **CLOSED unmerged** by `github-actions[bot]` at 00:52:21Z. *"Add unified thinking effort control across all providers."* Open since 2026-03-03 (54 days).
- **[block/goose#7761]** — `jh-block`, updated **00:52:23Z**, state=open. *"feat: Add Skills as top-level sidebar feature."* Open since 2026-03-09 (48 days).
- **[block/goose#8010]** — `jh-block`, updated **00:52:29Z**, **CLOSED unmerged** by `github-actions[bot]` at 00:52:29Z. *"feat: add delete button to apps UI."* Open since 2026-03-19 (38 days).
- **[block/goose#8120]** — `DOsinga`, updated **00:52:31Z**, state=open. *"Palmate screen."* Open since 2026-03-25 (32 days).

**Closer identity confirmed via `/issues/{n}/events` for #8010 and #7628: `actor=github-actions[bot]`.** Same bot-sweep signature as synth #98 (anomalyco/opencode bot mass-close), now reproduced on **goose** repo with **larger n (5 vs 3) and partial-close mode (2 of 5 closed, 3 of 5 only metadata-touched)**. **First occurrence of the bot-sweep pattern with PARTIAL-CLOSE outcome — sweep is not all-or-nothing.** Anchor for synth #120 baseline / cross-repo extension of synth #98.

## charmbracelet/crush

**Zero merges, zero opens, zero updates in window** — third consecutive empty window for crush (Add. 35, 36, 37). Most-recent crush PR #2714 still at 21:01:38Z (now 4h04m23s old, no follow-up). **Crush is on a multi-window full freeze.**

## sst/opencode

**Zero merges, zero independent activity** (single mirror-record #24283 captured under anomalyco namespace).

## Cross-repo summary

- **1 merge total in window** (codex 1, others 0) — **third consecutive 1-merge window**, sustained low-tide now confirmed across Add. 35/36/37 = identical 1-merge floor on three consecutive sub-40-minute windows.
- **Codex merge regime flipped back: maintainer-merge in Add. 36 (#19389 by `shijie-oai`, merged by maintainer) → self-merge in Add. 37 (#18575 by `fcoury-oai`, self-merged).** Synth #109 categorical regime flip pattern reproduces at addendum granularity.
- **Stacked-PR mass-rebase #3 by `bolinfest`**: third full rebase of the 5-deep stack within a single day. Inter-rebase intervals: 38m43s → 25m39s = **34% contraction**. Cadence accelerating (synth #119 anchor).
- **Stack rebase #3 carried real diff growth on interior PR #19392 (+48/+11 lines)** — falsifies the assumption that all rebases in the series are uniform tooling rebases. Mixed regime: rebases #1 and #2 were uniform metadata; rebase #3 absorbed conflict-resolution content.
- **Same-author close-and-refile on cosmetic TUI feature within same author session:** `fcoury-oai` opened #19616 at 00:37:57Z (in Add. 36), closed it 7m48s later at 00:45:45Z, **opened replacement #19617 6 seconds BEFORE the close (00:45:39Z)**, with **identical title** and **contracted diff** (-38/-2/-1 file vs #19616). Synth #54 (close-and-refile with title rescope) variant: NO title rescope, scope contraction only.
- **Same-author intra-window doublet on disjoint surfaces by `etraut-openai`** (#19618 TUI history at 00:49:52Z, #19620 network/metadata-encoding at 01:05:25Z, 15m33s gap, same `main` base). Different from synth #47 (sub-10s same-second doublet on adjacent surfaces) — this is **mid-cadence, surface-disjoint** (synth #120 candidate).
- **`*-berri` author cohort dominates litellm staging surface for 3 consecutive addenda** (mateo-berri, Michael-RZ-Berri, krrish-berri-2 — all base=`litellm_internal_staging`, all in Add. 35/36/37). Zero `*-berri` opens against `main` in window.
- **Bot-sweep pattern (synth #98) reproduces on `block/goose` with partial-close mode**: 5 PRs touched in 13s by `github-actions[bot]`, 2 closed unmerged, 3 only metadata-touched. **Cross-repo recurrence + behavior variant** (synth #120 candidate).
- **`kitlangton` bridge chain still stalled** — last bridge PR #24407 from Add. 35 still has no successor (now T+1h32m57s post #24407 open). Synth #114 acceleration prediction continues to decay.
- **Crush full freeze** (3 consecutive empty windows) — anomaly worth tracking next addendum.

## Notable closures
- **[openai/codex#19616]** — `fcoury-oai`, closed unmerged 00:45:45Z (7m48s lifespan), replaced 6s earlier by #19617 (identical title, contracted diff).
- **[block/goose#7628]** — `jh-block` author, closed unmerged by `github-actions[bot]` 00:52:21Z (54 days old). Bot-sweep partial.
- **[block/goose#8010]** — `jh-block` author, closed unmerged by `github-actions[bot]` 00:52:29Z (38 days old). Bot-sweep partial.

## Window merge-rate

| Repo | Add. 35 | Add. 36 | Add. 37 |
|------|---------|---------|---------|
| codex | 1 | 1 | 1 |
| litellm | 0 | 0 | 0 |
| anomalyco/opencode | 0 | 0 | 0 |
| sst/opencode | 0 | 0 | 0 |
| crush | 0 | 0 | 0 |
| goose | 0 | 0 | 0 |
| **Total** | **1** | **1** | **1** |

**Three-window flatline at exactly 1 merge/window.** No prior 3-window stretch on the day exhibited this exact stability.
