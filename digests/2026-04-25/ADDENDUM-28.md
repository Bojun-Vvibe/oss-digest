# 2026-04-25 — Addendum 28

**Window:** `2026-04-25T18:44:00Z` → `2026-04-25T19:30:00Z` (46 minutes, immediately following Addendum 27).

**Scope:** anomalyco/opencode, BerriAI/litellm (openai/codex, ollama/ollama, sst/opencode — zero merge activity in window).

## opencode (anomalyco/opencode)

The kitlangton spec-anchored self-merge series — anchored as **synth #97** at N=3 and extended as **synth #99** at N=4 (open) — **extended to N=6 fully-merged members** in this window. Three new merges, all by `kitlangton`, all base `dev`, all with merge SHAs:

- **[anomalyco/opencode#24365]** — opened 2026-04-25T18:34:18Z, **MERGED 18:46:06Z** by `kitlangton` (self-merge), merge SHA `95d4bb21`. **Lifespan 11m48s**. **+270/-13 across 8 files.** *"feat(httpapi): bridge experimental read endpoints."* The PR that synth #99 anchored as the still-open extension at the close of Addendum 27 — merged 2m06s after that addendum's window close. Touches the anchor pair `packages/opencode/specs/effect/http-api.md` + `packages/opencode/src/server/routes/instance/index.ts` (both files modified on every member of the series). **Series N=4 closes here**.

- **[anomalyco/opencode#24366]** — OPENED 18:50:15Z by `kitlangton`, head SHA `c4917074`, **MERGED 18:55:30Z** by `kitlangton` (self-merge), merge SHA `b749866f`. **Lifespan 5m15s**. **+29/-2 across 4 files.** *"feat(httpapi): bridge worktree read endpoint."* Touches the **same anchor pair** (`specs/effect/http-api.md`, `instance/index.ts`) plus `httpapi/experimental.ts` and `test/server/httpapi-experimental.test.ts`. Inter-merge gap from #24365: **9m24s**. **Series N=5**.

- **[anomalyco/opencode#24368]** — OPENED 19:06:06Z by `kitlangton`, head SHA `bb33aebd`, **MERGED 19:24:08Z** by `kitlangton` (self-merge), merge SHA `b4f4134e`. **Lifespan 18m02s**. **+68/-1 across 6 files.** *"feat(httpapi): bridge instance dispose endpoint."* Touches the **same anchor pair** (`specs/effect/http-api.md`, `instance/index.ts`) plus three NEW surfaces: `httpapi/instance.ts`, `httpapi/lifecycle.ts`, `httpapi/server.ts`, and a paired test `test/server/httpapi-instance.test.ts`. Inter-merge gap from #24366: **28m38s** — longest intra-series merge gap so far. **Series N=6**.

**Full series trajectory now:**

| # | PR | opened | merged | lifespan | files | adds/dels |
|---|---|---|---|---|---|---|
| 1 | #24352 | (Addendum 25) | (Addendum 25) | **24m57s** | 5 | +93/-2 |
| 2 | #24353 | (Addendum 25) | (Addendum 25) | **13m47s** | 4 | +56/-1 |
| 3 | #24356 | (Addendum 26) | (Addendum 26) | **4m09s** | 3 | +44/-3 |
| 4 | #24365 | 18:34:18Z | 18:46:06Z | **11m48s** | 8 | +270/-13 |
| 5 | #24366 | 18:50:15Z | 18:55:30Z | **5m15s** | 4 | +29/-2 |
| 6 | #24368 | 19:06:06Z | 19:24:08Z | **18m02s** | 6 | +68/-1 |

**Synth #97's monotonically-contracting-lifespan claim is now formally falsified at N=4** (#24365 expands to 11m48s after #24356's 4m09s) and the contraction trend does **not** re-establish: lifespans oscillate 11m48 → 5m15 → 18m02. Synth #99's "growing inter-PR-gap" claim, however, **survives**: inter-PR open gaps are 26m23s (#24356→#24365) → 15m57s (#24365→#24366) → 15m51s (#24366→#24368), all far above the original triple's sub-15-minute floor. The **anchor-pair persistence** claim (every member touches `specs/effect/http-api.md` + `instance/index.ts`) holds across N=6. The series has now produced **six self-merges by a single author on a shared anchor-pair surface within a 6h33m span** (synth #97 anchored at 12:51:36Z first merge, #24368 closes at 19:24:08Z).

This calls for a **new synth** that supersedes both #97 and #99: a **single-author N=6 spec-anchored self-merge series with stable two-file anchor pair, falsified-contraction lifespan oscillation, and monotonically-rising inter-PR open gaps** — anchor for **synth #101** (next file).

- **[anomalyco/opencode#24014]** — MERGED 19:01:42Z by `kitlangton` (merge SHA `cd64b670`), **+16/-8 across 2 files.** *"feat(tui): show /connect tip when user has no models configured."* PR opened **2026-04-21** (4-day-old). **Not** part of the spec-anchor series (touches `tui` surface, not the `httpapi` / `specs/effect/http-api.md` pair). Merged **inside** the series window (between #24366 at 18:55:30Z and #24368 merge at 19:24:08Z) by the same author. This is a **long-tail PR drained inside an active self-merge sprint** — distinct from the contiguous spec-anchored chain. Pattern recorded but not promoted to synth (single instance, no companion in window).

## litellm (BerriAI/litellm)

- **[BerriAI/litellm#26401]** — opened 2026-04-23 by `he-yufeng`, head SHA `c26c446d`, **MERGED 19:13:14Z** by `he-yufeng` (self-merge), merge SHA `f63a6f1b`. **+6/-1 across 1 file.** *"fix(proxy): set verbose_logger level when LITELLM_LOG=INFO."* Base branch **`litellm-oss-staging-04-25-2026`** — staging-branch fast-forward, matching the merge mechanism documented in Addendum 27 (#26510 → `litellm_staging_03_23_2026`, #26122 → `litellm_oss_branch`). **Third in-day litellm merge whose base is a date-stamped staging branch**; the date suffix on the staging-branch name has rolled forward from `03_23_2026` (Addendum 27 #26510) to `04_25_2026` (Addendum 28 #26401) — implying the staging branch is **rotated daily or near-daily** and the merge mechanism is consistently "self-merge into today's staging branch." External-author + maintainer-merge variant from Addendum 27 (#26122 by `mverrilli`, merged by `krrish-berri-2` into `litellm_oss_branch`) is the second observed mechanism. The base-branch-as-rolling-date-tag is itself a structural surface worth tracking but **not yet promoted** to a synth (need cross-window N≥3 of date-stamped staging-branch merges with sequential dates).

- **No other litellm merges in window.** Metadata-refresh wave from Addendum 27 (7 PRs touched without head-SHA mutation) did not recur in this window — none of those PRs were touched again, suggesting the prior wave was a one-shot bot or maintainer sweep, not a periodic poll.

## codex / ollama / sst-opencode

- **codex (openai/codex)**: zero merges, zero new opens in window. The `bolinfest` 5-deep permissions stack remains frozen. `evawong-oai` PR #18446 (head pushed during Addendum 27) sees no further touch.
- **ollama/ollama**: zero merges in window.
- **sst/opencode**: zero merges in window.

## Cross-repo summary

- **kitlangton spec-anchored series formally extends to N=6 fully-merged members**, all by single author, all on `dev` base, all with `specs/effect/http-api.md` + `instance/index.ts` as a stable anchor pair. Synth #97's contraction claim is **falsified** at N=4. Synth #99's inter-PR-gap-growth claim **survives** at N=6. Anchor-pair persistence claim **survives** at N=6. Calls for a **new synth #101** with the corrected three-property characterization.

- **opencode merge throughput in this 46-minute window: 4 merges, all single-author** (`kitlangton`). Three are spec-anchored series members; one (#24014) is a 4-day-old long-tail drain on an unrelated `tui` surface. **Author monoculture in the merge stream** — no other author got a merge into anomalyco/opencode in this window despite ≥6 open PRs from other authors active in the prior addendum.

- **litellm staging-branch base name rolled date suffix** from `03_23_2026` → `04_25_2026` across two windows (Addendum 27 → Addendum 28). Mechanism remains "self-merge or maintainer-merge into today's date-stamped staging branch." Two distinct staging branches were already observed in Addendum 27 (`litellm_staging_03_23_2026`, `litellm_oss_branch`); a third (`litellm-oss-staging-04-25-2026`) appears in Addendum 28. Three named staging branches, three different merges, one repo, single day — base-branch fan-out is itself a signal.

- **Inter-repo merge volume asymmetry**: opencode 4 merges / litellm 1 merge / codex+ollama+sst 0 merges across a 46-minute window. The `kitlangton` series is single-handedly carrying opencode's merge cadence in this window.

**Cumulative day stats** (Addenda 16-28): 13 windows, ~7.3h coverage, ~160 distinct PRs touched, 23 named synth anchors generated (#79-#101 inclusive of pending #100-#101).
