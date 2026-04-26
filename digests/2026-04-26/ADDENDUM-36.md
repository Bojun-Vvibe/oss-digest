# 2026-04-26 — Addendum 36

**Window:** `2026-04-26T00:06:39Z` → `2026-04-26T00:44:34Z` (37m55s, immediately following Addendum 35).

**Scope:** BerriAI/litellm, openai/codex, anomalyco/opencode (sst/opencode alias), charmbracelet/crush, block/goose.

## codex (openai/codex)

**One merge in window** — second consecutive single-merge codex window (Add. 35 also = 1). **Cross-author merge** (not bolinfest), pure runtime-guard diff.

- **[openai/codex#19389]** — opened **2026-04-24T15:53:36Z** by `shijie-oai`, **MERGED 2026-04-26T00:09:29Z by maintainer** (not self). **+286/-91 across 5 files.** Base `main`. *"Guard npm update readiness."* **Lifespan 1d8h15m53s** — longest-lived merge in last 4 addenda (Add. 35 #19609=16m28s self-merge; Add. 34 self-merges all <2h). Refreshed in Add. 35 at 23:41:52Z (T-27m37s pre-merge), then merged. **Cross-author merge breaks `bolinfest` self-merge dominance** that has held for last 5 codex merges.

**Stacked-PR mass-rebase #2 at 00:38:16–00:38:22Z (6-second clustered, all 5 head SHAs CHANGED):**

- **[openai/codex#19606]** — `bolinfest`, base `main`, head **`0066622440b881d2cca7154b86190f313ed3b024`** (was `5f1fed5e` in Add. 35 — **NEW head**). Updated 00:38:16Z. **+1430/-655 across 59 files** (+47 lines vs Add. 35 +1383).
- **[openai/codex#19392]** — `bolinfest`, base `pr19606`, head **`7b27340c…`** (was `be7a4f35` — NEW). Updated 00:38:16Z. +571/-439 across 40 files.
- **[openai/codex#19393]** — `bolinfest`, base `pr19392`, head **`e77f974b…`** (was `5a078c1d` — NEW). Updated 00:38:21Z. +372/-167 across 25 files.
- **[openai/codex#19394]** — `bolinfest`, base `pr19393`, head **`0df2309c…`** (was `346d2ace` — NEW). Updated 00:38:22Z. +209/-303 across 13 files.
- **[openai/codex#19395]** — `bolinfest`, base `pr19394`, head **`30ae99be…`** (was `02458def` — NEW). Updated 00:38:21Z. +269/-148 across 11 files.

**Second full-stack rebase of the same 5-deep ladder in 38m43s** (previous: Add. 35 23:59:33–38Z, this: 00:38:16–22Z). Add. 35 already documented this stack as "5-deep PR-as-base-branch ladder" with cascading refresh — the **NEW** signal here is **all five head SHAs changed**, confirming a real rebase (not metadata touch). **Inter-rebase cadence: 38m43s.** **Anchor for synth #117.**

**Other refresh in window:**
- **[openai/codex#19616]** — **OPENED 00:37:57Z by `fcoury-oai`**. **+248/-32 across 6 files.** Base `main`. *"feat(tui): add codex logo to session header."* Cosmetic TUI feature. Open 1m43s before window close. Updated 00:39:40Z.
- **[openai/codex#18575]** + **#18576** — `fcoury-oai`, both updated 00:38:57Z and 00:38:56Z (**1-second co-bump of own 6-day-old open pair**). #18575 base `main` (+3418/-381 across 40 files), #18576 base `fcoury/resize-backlog-reflow-interrupt` (+7119/-588 across 39 files — chains off #18575 surface). **Same-author 3-PR triangle in same window**: #19616 (new) + #18575 (refresh) + #18576 (refresh) all `fcoury-oai`, all TUI surface, all updated within 60 seconds (00:37:57 → 00:38:57Z).
- **[openai/codex#19591]** — `etraut-openai`, updated 00:41:25Z. *"Fix filtered thread-list resume regression in TUI."* Open since 2026-04-25T19:42:46Z (4h59m old at refresh). Base `main`.
- **[openai/codex#19458]** — `lt-oai`, updated 00:31:27Z. *"[codex] ChatGPT Library file upload/download hooks."* +1323/-29 across 10 files.

## litellm (BerriAI/litellm)

**Zero merges in window — second consecutive zero-merge litellm window** (Add. 35 also = 0). Self-merge oscillation series (synth #111) extends: 100% → 0% → 67% → 25% → N/A → **N/A** (denominator empty for **74m26s consecutive** — longest dry-spell of the day).

**Same-window same-author 3-PR co-bump cluster at 00:10:02–00:10:07Z (5-second window, all `priyam-that`, all base=`main`, all 91-92 days old):**

- **[BerriAI/litellm#19726]** — `priyam-that`, updated **00:10:02Z**, head `c73fdd00d66cc068f9974529776c7ab2fe97cfa8`. **+297/-21 across 6 files.** *"Fix/websearch poe provider."* Open since **2026-01-25T09:58:26Z (91 days old)**.
- **[BerriAI/litellm#19706]** — `priyam-that`, updated **00:10:05Z** (3s after #19726), head `05ea29ae4829e990a6f837f85b820309462e6f8d`. +155/-15 across 4 files. *"Fix/content filter visibility."* Open since 2026-01-24T18:38:43Z (91 days).
- **[BerriAI/litellm#19702]** — `priyam-that`, updated **00:10:07Z** (5s after #19726), head `f88c1fe88afc6fa1a109ce2ff63e9a68b3318d01`. +220/-27 across 7 files. *"Feat/team level guardrails access #19630."* Open since 2026-01-24T17:13:44Z (91 days).

**Three same-author 91-day-old PRs all touched within 5 seconds, all base=main, all "Fix/Feat/" prefixed (Bitbucket-style branch-name convention).** Mechanical bulk-rebase signature against `main` from a single author with stalled long-tail. **Anchor for synth #118.**

**Adjacent same-second co-bump (different authors, same instant 00:10:13Z):**
- **[BerriAI/litellm#19648]** — `fenilfaldu`, updated **00:10:13Z**. +155/-2 across 4 files. *"fix: enhance model cost checks for custom models in utility functions."* Open since 2026-01-23T13:04:30Z (93 days).
- **[BerriAI/litellm#18660]** — `PeterDaveHello`, updated 00:10:32Z, **CLOSED unmerged** at refresh. *"Add dedicated xai_key and fallback logic for xAI API key."* Open since 2026-01-05 (111 days). **Long-tail close: third unmerged-close in last 3 addenda** (Add. 35 anomalyco #24392; Add. 34 …).

**New opens in window:**
- **[BerriAI/litellm#26534]** — **OPENED 00:18:02Z by `Michael-RZ-Berri`** (NOT a debut — appeared in Add. 35 watch as #26284 author updating). Head `d55ee565b7805f5f7944835c0b8d1276901fb1b6`. **+604/-105 across 4 files.** Base `litellm_internal_staging` (same internal-staging branch as Add. 35's #26530 by `mateo-berri`). *"[WIP] Lazy-load optional feature routers on first request."* WIP marker present. Updated 00:42:43Z.

**Same-window refresh of Add. 35 anchor:**
- **[BerriAI/litellm#26530]** — `mateo-berri`, updated **00:15:38Z**. **Diff unchanged** at +1003/-93 (Add. 35 same numbers) — pure metadata touch, no rebase. **Cross-author re-implementation of merged #26439 (Add. 34) now stale T+2h05m post-merge** with no diff growth (was T+1h22m in Add. 35). **Stalled.**

**Pre-window-edge refresh (just before T0):**
- **[BerriAI/litellm#26002]** — `ryan-crabbe-berri`, updated 00:20:59Z. +16/-32 across 2 files. Base `litellm_internal_staging`. *"fix(ui): use stored-credentials endpoint for tools fetch on MCP edit page."* Open since 2026-04-18 (8 days).

## anomalyco/opencode

**Zero merges in window** (last merge was #24405 at 2026-04-25T23:27:11Z — **1h17m23s ago**, longest merge gap of the day on this repo). **TWO debut-author opens in window, both first-ever PRs by their authors.**

- **[anomalyco/opencode#24411]** — **OPENED 00:18:44Z by `joshbochu` (DEBUT — first-ever PR by this author on this repo)**. Head `(unverified)`. **+129/-2 across 2 files.** Base `dev`. *"fix(opencode): avoid invalid Kilo reasoning details."* Targeted Kilo provider fix.
- **[anomalyco/opencode#24412]** — **OPENED 00:40:08Z by `DSteve595` (DEBUT — first-ever PR)**. **+224/-13 across 7 files.** Base `dev`. *"fix: Buffer stdin before prompt UI appears."* Updated 00:40:56Z.

**2 debut authors in 21m24s window** (vs 0 in Add. 35, 4 in Add. 34) — debut-author cohort **rebound**. Both target `dev`, both `fix:` prefix, both small/medium diff (no `feat(` debut openers — debut cohort is in fix-mode).

**`kitlangton` bridge chain DOES NOT extend in window** (last bridge PR #24407 opened in Add. 35 at 23:33:04Z — now T+1h11m30s with no successor). **Synth #114 acceleration prediction now has counter-evidence**: chain extended to 5 PRs in Add. 35 then **stalled**. The 5m53s inter-PR gap was the floor, not a new cadence.

## charmbracelet/crush, block/goose

**Zero merges, zero opens in either repo in window** — second consecutive empty window for both (Add. 35 also empty). Most-recent crush PR #2714 at 21:01:38Z (now 3h43m old, no follow-up). Most-recent goose #8849 at 22:31:24Z (now 2h13m old).

## Cross-repo summary

- **1 merge total in window** (codex 1, litellm 0, anomalyco/opencode 0, crush 0, goose 0) — **identical merge rate to Add. 35** (also 1). Two consecutive ~38min windows at 1 merge each = sustained low-tide.
- **Codex merge was cross-author for first time in 5 codex merges** (#19389 by `shijie-oai`, merged by maintainer not self) — breaks `bolinfest` self-merge streak documented in Add. 34/35.
- **Second full 5-PR stack rebase by `bolinfest` in 38m43s** (00:38:16–22Z), all 5 head SHAs changed (verified). Cadence emerges: 23:59:33Z → 00:38:16Z = **38m43s inter-rebase interval**. **Anchor for synth #117.**
- **3-PR same-author same-base co-bump cluster** (`priyam-that` litellm #19726/#19706/#19702, 5-second span at 00:10:02–07Z, all 91 days old, all base=main). **Anchor for synth #118.**
- **2 debut authors in anomalyco/opencode window** (`joshbochu`, `DSteve595`) — both `fix:` to `dev`, no debut `feat(` openers.
- **Same-author 3-PR triangle in codex** (`fcoury-oai` #19616 new + #18575/#18576 refreshed within 60 seconds at 00:37:57–38:57Z, all TUI surface) — author-clustered burst.
- **`kitlangton` bridge-chain stalled** — Synth #114 acceleration prediction has now decayed (T+1h11m no successor to #24407).
- **Third unmerged-close in 3 addenda**: litellm #18660 (`PeterDaveHello`, 111 days old) joins anomalyco #24392 (Add. 35) and Add. 34's unmerged-close → forming a per-window long-tail-pruning baseline of ~1/window.

## Notable closures
- **[BerriAI/litellm#18660]** closed unmerged by `PeterDaveHello` at 00:10:32Z after 111 days open. Pure-add fallback-logic PR.
