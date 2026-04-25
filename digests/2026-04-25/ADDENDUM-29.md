# 2026-04-25 — Addendum 29

**Window:** `2026-04-25T19:30:00Z` → `2026-04-25T20:11:00Z` (41 minutes, immediately following Addendum 28).

**Scope:** anomalyco/opencode, BerriAI/litellm, openai/codex (sst/opencode, ollama/ollama, cline/cline — zero in-window activity).

## opencode (anomalyco/opencode)

- **[anomalyco/opencode#24371]** — OPENED 19:32:25Z by `kitlangton`, head SHA `885c59ff`, **MERGED 19:35:15Z** by `kitlangton` (self-merge), merge SHA `885c59ff56940820058503a8f4a1d0a05524f526`. **Lifespan 2m50s — new series-low.** **+167/-48 across 6 files.** *"feat(httpapi): bridge worktree mutations."* Seventh member of the `kitlangton` spec-anchored self-merge series (synth #101). Touches the persistent anchor pair `packages/opencode/specs/effect/http-api.md` + `packages/opencode/src/server/routes/instance/index.ts`. Inter-merge gap from #24368 (Addendum 28, merged 19:24:08Z): **11m07s** — **first contraction in the inter-merge-gap sequence** that synth #101 had identified as "monotonically rising" (prior gaps 26m23s → 15m57s → 15m51s → now 11m07s).

  **Updated series table (N=7):**

  | # | PR | merged | lifespan | files | adds/dels |
  |---|---|---|---|---|---|
  | 1 | #24352 | (Add. 25) | 24m57s | 5 | +93/-2 |
  | 2 | #24353 | (Add. 25) | 13m47s | 4 | +56/-1 |
  | 3 | #24356 | (Add. 26) | 4m09s  | 3 | +44/-3 |
  | 4 | #24365 | (Add. 28) | 11m48s | 8 | +270/-13 |
  | 5 | #24366 | (Add. 28) | 5m15s  | 4 | +29/-2 |
  | 6 | #24368 | (Add. 28) | 18m02s | 6 | +68/-1 |
  | 7 | #24371 | 19:35:15Z | **2m50s** | 6 | +167/-48 |

  **Both synth #97 (lifespan contraction) and synth #101 (inter-PR-gap monotonic rise) are now formally falsified at N=7.** Lifespan oscillates without trend (2m50s is the new minimum, lower than #24356's 4m09s). Inter-merge gap reverses (26m23 → 15m57 → 15m51 → 11m07). The only invariant that survives across N=7 is the **anchor-pair file co-touch** (`specs/effect/http-api.md` + `instance/index.ts` modified on every member). The series is **anchor-pair-stable but cadence-incoherent** — pattern recorded for **synth #103**.

- **`v1truv1us` close-and-refile triple on a single docs PR** — `John Ferguson` opened the same +1197/-831, 36-file diff *"docs: sync env vars with source code"* **four times in 12m33s** with three CLOSED and one still OPEN:
  - **#24372** — opened 19:34:21Z, head SHA `3c69da17`, **CLOSED 19:46:12Z** (lifespan 11m51s).
  - **#24375** — opened 19:39:50Z (5m29s after #24372 opened, 6m22s before #24372 closed — overlapping), title rescoped to *"docs: sync env vars with source code (v2)"*, **same head SHA `3c69da17`**, **CLOSED 19:46:13Z** (lifespan 6m23s, closed 1 second after #24372).
  - **#24377** — opened 19:46:23Z (10s after #24375 closed), head SHA `b2fa9170` (NEW SHA — first content mutation), **CLOSED 19:50:14Z** (lifespan 3m51s).
  - **#24378** — opened 19:47:05Z (42s after #24377 opened, 3m09s before #24377 closed — overlapping), **same head SHA `b2fa9170` as #24377**, currently **OPEN**.

  Pattern: **two overlapping close-and-refile pairs in series** — #24372/#24375 share head SHA and close in the same second (synchronized close); #24377/#24378 share head SHA and overlap with the surviving fork being the one opened *second*. Across all four PRs the diff is byte-identical in line counts (1197/-831/36 files) but underwent exactly one head-SHA mutation (`3c69da17` → `b2fa9170`) between the two close-pairs. **Twelve minutes of churn, four PR numbers consumed, one open survivor, zero merges, zero maintainer interaction.** Distinct from synth #54 (close-and-refile with explicit title rescope — only #24375 carries a "(v2)" title; #24377 and #24378 revert to the original title) and from synth #87 (asymmetric half-merge — here zero halves merge). Anchor for **synth #104**.

- **Other opencode opens in window** (no merges): #24369 by `herjarsa` (387/-47 5-file processor fallback chain, 19:26:05Z), #24374 by `pascalandr` (8/-2 SDK cross-spawn fix, 19:36:34Z — `pascalandr`'s 15th day-PR), #24379 by `tiffanychum` (82/-6 session transcript-position fix, 19:55:53Z), #24382 by `MrRobotoGit` (121/-5 vision fallback debut, 20:09:49Z).

## litellm (BerriAI/litellm)

Three merges in window — **highest litellm intra-window merge count of W17 so far**:

- **[BerriAI/litellm#26511]** — opened 18:47:11Z by `krrish-berri-2`, head SHA `0bd9213d`, **MERGED 19:54:16Z** by `krrish-berri-2` (self-merge), merge SHA `0bd9213d8d7538e4e200ada73dd143b7e3e8974e`. **Lifespan 1h07m05s.** **+140/-0 across 1 file.** *"ci: add supply-chain guard to block fork PRs that modify dependencies."* Base **`litellm_internal_staging`**. CI-defensive add by maintainer; pure-additive (zero deletions).

- **[BerriAI/litellm#24428]** — opened **2026-03-23T16:31:51Z** by `Chesars`, **MERGED 19:43:44Z** by `Chesars` (self-merge), merge SHA `40eeffe089816915c6e7f4e760c7fcbb154a1325`. **Lifespan 33 days 3h11m53s.** **+321/-90 across 7 files.** *"Litellm staging 03 23 2026."* Base **`litellm_internal_staging`**. This is the **parent of the rolling staging-branch mechanism** documented in Addendum 27 (#26510 → `litellm_staging_03_23_2026`) and Addendum 28 (#26401 → `litellm_oss_staging_04_25_2026`). The parent-branch PR (creating `litellm_staging_03_23_2026` itself) sat open for 33 days while child sync PRs landed against it; merged today as a delayed close-out. **Long-tail rolling-staging-branch parent-merge** — the staging-branch mechanism's own bookkeeping landing well after its child PRs.

- **[BerriAI/litellm#26516]** — opened 19:40:10Z by `yuneng-berri`, head SHA `91f6661b`, **MERGED 20:05:27Z** by `yuneng-berri` (self-merge), merge SHA `91f6661b37e88e60ff19d848e0c0edbba8d8423c`. **Lifespan 25m17s.** **+164/-24 across 2 files.** *"[Fix] Align MCP OAuth proxy endpoints with per-server access policy."* Base **`litellm_yj_apr25`** — **a NEW author-namespaced date-stamped branch** (`yj` = yuneng-jiang's initials, `apr25` = today's date). Distinct from the `litellm_staging_<date>_2026` and `litellm_oss_staging_<date>_2026` branch families documented in Addenda 27/28. **Third concurrent dated-branch family in litellm**: (a) `litellm_staging_MM_DD_YYYY` (Chesars-driven, monthly cadence per Addendum 27), (b) `litellm_oss_staging_MM_DD_YYYY` (Addendum 28 #26401), (c) **`litellm_<initials>_<MMM><DD>`** (Addendum 29 — author-private dated branches).

  Same author also has **#26513** ("Harden /model/info redaction for plural credential field names") and **#26512** ("bind RAG ingestion config to stored credential values") still OPEN against `litellm_yj_apr25`, both opened ~18:58Z — author appears to be using `litellm_yj_apr25` as a **personal feature-branch staging area** with serial self-merges.

## codex (openai/codex)

- **[openai/codex#19287]** — opened 2026-04-24T05:30:56Z by `etraut-openai`, head SHA `62efd9c8`, **MERGED 19:40:01Z** by `etraut-openai` (self-merge), merge SHA `62efd9c859a42b4902deebeb3174a16e8d4350d5`. **Lifespan 1d14h09m05s.** *"Restore persisted model provider on thread resume."* **First codex merge across Addenda 22-29 (~5h dwell window)**. Breaks the codex `bolinfest`-stack-frozen state noted in synth #102 fact 3 — but it is **not** a `bolinfest` PR (different author, different surface: thread-resume vs MCP permissions). The 5-deep `bolinfest` permissions stack remains frozen.

  **Follow-on opened immediately**: #19591 by `etraut-openai` 19:42:46Z (2m45s after own merge) — *"Fix TUI resume performance regression"* — same author, same `resume`-related surface family, post-own-merge cascade (synth #50 / #64 pattern, now extended to codex repo).

## sst/opencode, ollama/ollama, cline/cline

Zero merges, zero opens, zero closes in window. **Three of six tracked repos merge-silent for the second consecutive window** (synth #102 fact 3 holds for sst/opencode and ollama/ollama; cline/cline added to perimeter and also silent).

## Cross-repo merge-stream summary

| repo | merges | distinct authors | merge SHAs (short) |
|---|---|---|---|
| anomalyco/opencode | 1 | 1 (`kitlangton`) | `885c59ff` |
| BerriAI/litellm | 3 | 3 (`krrish-berri-2`, `Chesars`, `yuneng-berri`) | `0bd9213d`, `40eeffe0`, `91f6661b` |
| openai/codex | 1 | 1 (`etraut-openai`) | `62efd9c8` |
| sst/opencode | 0 | — | — |
| ollama/ollama | 0 | — | — |
| cline/cline | 0 | — | — |
| **total** | **5** | **5** | — |

**HHI of merge attribution by author this window: 0.20** (5 merges across 5 distinct authors, each 0.2 share, contribution 0.04 × 5 = 0.20). **Sharply lower than Addendum 28's 0.68.** The author-monoculture window of Addendum 28 has dissolved into a **fully heterogeneous merge stream** within 41 minutes — synth #102's "single-author merge-stream window" was a true *window*, not a sustained regime.
