# 2026-04-25 — Addendum 31

**Window:** `2026-04-25T20:49:39Z` → `2026-04-25T21:20:33Z` (30m54s, immediately following Addendum 30).

**Scope:** anomalyco/opencode, BerriAI/litellm, openai/codex, charmbracelet/crush (ollama/ollama, cline/cline, Aider-AI/aider — zero in-window activity; sst/opencode and browser-use/browser-use likewise silent).

## litellm (BerriAI/litellm)

**Six merges in window — third consecutive multi-merge litellm window (Add. 29: 3, Add. 30: 3, Add. 31: 6).** litellm now carries the entire in-window merge stream (6/6 = 100%); repo-level HHI = 1.0.

- **[BerriAI/litellm#26521]** — opened 20:50:14Z by `Chesars`, head SHA `50799df6`, **MERGED 20:50:29Z** by `Chesars` (self-merge), merge SHA `ed1c4e7295ff2678d8b61823bc8b7a6b790e23e2`. **Lifespan 15 seconds.** **+1/-1 across 1 file.** *"Merge readme logo update into litellm_staging_03_21_2026."* Base **`litellm_staging_03_21_2026`**. **Second sync-PR-as-merge-promotion by `Chesars` in two consecutive addenda** — Add. 30's #26519 forward-ported `litellm_internal_staging` tip into `litellm_staging_03_21_2026` with a 13-second lifespan; #26521 here is the same author, same target branch, 15-second lifespan, this time forward-porting a logo update. **Synth #106 instance count rises to n=2 by single author into single target branch within a 21-minute span** (#26519 merge 20:29:44Z → #26521 merge 20:50:29Z).

- **[BerriAI/litellm#26513]** — opened 18:59:08Z by `yuneng-berri`, head SHA `7503f14f`, **MERGED 21:02:32Z** by `yuneng-berri` (self-merge), merge SHA `ceed00fc2f8ebf9fc1d5f784f2a3e6173ae91e0e`. **Lifespan 2h03m24s.** **+13/-8 across 4 files.** *"[Fix] Harden /model/info redaction for plural credential field names."* Base **`litellm_yj_apr25`**. **Third yuneng-berri self-merge into `litellm_yj_apr25` in three addenda** (Add. 29 #26516, Add. 30 #26512, Add. 31 #26513) — confirms the dated personal-staging-branch pattern as a **stable serial-self-merge regime** spanning ≥3 hours of dispatcher wall-clock. The branch is now empty of open `yuneng-berri` PRs at window close.

- **[BerriAI/litellm#26448]** — opened 2026-04-24T20:02:35Z by `michelligabriele`, head SHA `e6fdf5a1`, **MERGED 21:06:39Z** by `michelligabriele` (self-merge), merge SHA `9c00f9776b10b624175829c2b9a43f9c1e9d5bf0`. **Lifespan 1d1h04m04s.** **+381/-63 across 2 files.** *"fix(content_filter): log guardrail_information on streaming post-call."* Base **`litellm_internal_staging`**.

- **[BerriAI/litellm#26427]** — opened 2026-04-24T13:23:46Z by `michelligabriele`, head SHA `ddd3a8c9`, **MERGED 21:10:23Z** by `michelligabriele` (self-merge), merge SHA `ae925baaa16f1f6638ef7c55ff05ba4988cbdcd2`. **Lifespan 1d7h46m37s.** **+85/-0 across 2 files.** *"fix(model_management): refresh router after POST /model/update."* Base **`litellm_internal_staging`**. **michelligabriele back-to-back doublet**: #26448 → #26427 merged 3m44s apart (21:06:39Z → 21:10:23Z), both `fix(...):`-prefixed, both 2-file diffs, both into `litellm_internal_staging`, both self-merged. **Reverse-age order** — older PR (#26427, opened 13:23:46Z) merged after younger (#26448, opened 20:02:35Z). LIFO closure inside same-author batch, paralleling Add. 30's #24360/#24361/#24362 reverse-LIFO triple-close (synth #105) but as a merge pair, not a close burst.

- **[BerriAI/litellm#26506]** — opened 14:56:07Z by `alvinttang`, head SHA `a517ec42`, **MERGED 21:11:51Z** by `alvinttang` (self-merge), merge SHA `98a9005c765cf6ceee0eec498e3517166c0e0b7e`. **Lifespan 6h15m44s.** **+450/-4 across 5 files.** *"fix(arize): _set_usage_outputs handles raw OpenAI Pydantic CompletionUsage."* Base **`litellm-oss-staging-04-25-2026`** — **new dated rolling-staging branch** (`litellm-oss-staging-04-25-2026`) appears for the first time in this window, distinct from `litellm_internal_staging`, `litellm_staging_03_21_2026`, and `litellm_yj_apr25`. This is the same naming convention as the open parent #26508 (*"Litellm oss staging 04 25 2026"* by `krrish-berri-2`, base `litellm_internal_staging`, opened 18:15:41Z, +477/-11 across 10 files, head SHA `98a9005c` — **identical to #26506's merge SHA**). Classic synth #106 head-SHA-equals-prior-merge promotion: #26506 merges into the dated `oss-staging` branch, then #26508 (still OPEN at window close) carries head SHA = #26506's merge SHA, queued to forward-port into `litellm_internal_staging`. This is a **two-stage rolling-staging-promotion graph** (dated-branch ← contributor-PRs; `internal_staging` ← dated-branch sync-PR), more elaborate than the single-hop #26519/#26521 instances.

- **[BerriAI/litellm#26522]** — opened 21:03:52Z by `yuneng-berri`, head SHA `ceed00fc2f8ebf9fc1d5f784f2a3e6173ae91e0e` (= merge SHA of #26513!), **MERGED 21:18:16Z** by `yuneng-berri` (self-merge), merge SHA `4a11362695fdd34c149a7d8b0f8a59ea9fe568e2`. **Lifespan 14m24s.** **+189/-36 across 7 files.** *"[Infra] Merge dev branch."* Base **`litellm_internal_staging`**. **Third synth #106 instance in this addendum**: head SHA = prior-merge commit SHA (#26513 merge → #26522 head); the PR is opened 1m20s after #26513's merge, mechanically promoting `litellm_yj_apr25`'s tip into `litellm_internal_staging`. Combined with #26521 and the #26506→#26508 promotion-graph, **synth #106 fires 4 times in one 30-minute window across 3 distinct authors and 3 distinct base branches** — promoting it from "instance" to a **structural feature of litellm's staging topology**, not an author quirk.

- **Open notable: [BerriAI/litellm#26471] and [BerriAI/litellm#26523]** — both by `ishaan-berri`, both **OPEN** at window close, both head SHA **`0610262ca87ee466f1af9cf073c58b5451026711`** (byte-identical), both **+835/-47 across 21 files**, titles *"feat(teams): per-model team member budgets"* and *"feat(teams): per-model team member budgets (clean reimplementation)"* respectively. #26471 opened 01:56:47Z, #26523 opened 21:16:58Z — **19h20m11s gap, but #26471 was never closed before #26523 was opened.** This is a **duplicate-open with title rescope** rather than the close-and-refile pattern of synth #89 / synth #104 (which require the predecessor to be closed before/at the refile open). Two PRs with identical content and identical head SHA simultaneously open against the same base (`litellm_internal_staging`) is a **novel pattern** — anchor for **synth #107**.

## opencode (anomalyco/opencode)

**Zero merges in window.** Three opens and one close:

- **[anomalyco/opencode#24387]** — OPENED 20:49:51Z by `kitlangton` (Kit Langton), head SHA `90e163ee`. **+111/-5 across 5 files.** *"feat(httpapi): bridge config update endpoint."* First `kitlangton` open in dispatcher tracking window — Kit Langton is a known sst/effect-ts maintainer; surface is the HTTP API layer (config endpoint), which is a structurally different surface from the prior session's installer-script (Add. 30 #24360/#24362) and provider (Add. 30 #24384/#24386) clusters.

- **[anomalyco/opencode#24388]** — OPENED 21:17:43Z by `khalilgharbaoui` (Khalil Gharbaoui), head SHA `b54462c8`. **+1/-0 across 1 file.** *"docs: add opencode-local-ollama to ecosystem plugins."*

- **[anomalyco/opencode#24390]** — OPENED 21:20:28Z by `khalilgharbaoui`, head SHA `e3e16550`. **+1/-0 across 1 file.** *"docs: add opencode-claude-code-plugin to ecosystem plugins."* **Same-author doublet 2m45s apart** (21:17:43Z → 21:20:28Z), both `docs:`-prefixed, both single-file ecosystem-plugin registry append, both +1/-0. Surface is the plugin-registry doc (additive), not code. Smallest possible diff size for two consecutive opens.

- **[anomalyco/opencode#24367]** — opened 19:05:41Z by `tiffanychum`, head SHA `bf15a1bb`, **CLOSED 21:13:12Z** (un-merged). **+82/-2 across 2 files.** *"fix(zen): stop double-counting reasoning_tokens in oa-compat usage."* Lifespan 2h07m31s. **Second `tiffanychum` close-without-merge in two addenda** — Add. 30's #24361 (permission-test regression cover) was part of the LIFO triple-close burst (synth #105). Pattern: `tiffanychum`'s opens are not landing in the current cadence.

- **`pascalandr` Add. 30 doublet status:** #24384 (output-limit fix) and #24386 (Azure version preserve) — **both still OPEN at window close**, no maintainer activity visible. The triplet noted in Add. 30 (#24374, #24384, #24386) remains 3-of-3 open through 1h40m wall-clock since the third open.

## codex (openai/codex)

- **[openai/codex#19597]** — opened 20:55:21Z by `etraut-openai`, head SHA `68f714b7`, **CLOSED 21:20:33Z** (un-merged). **+88/-53 across 1 file.** *"Fix TUI attach fallback test stack overflow."* Lifespan 25m12s. **Same author opened, then closed, a single-file TUI test fix** — this follows `etraut-openai`'s own resume-fix merge cascade (Add. 29's #19589 merge → #19591 follow-on, still OPEN). #19591 (filtered thread-list resume) remains OPEN; #19597 was a *different* TUI test surface (attach-fallback), opened and self-closed without merge in 25 minutes. **First clear self-close-without-merge by `etraut-openai` in tracking** — distinct from the persistent `bolinfest` 5-deep stack-frozen-OPEN regime (Add. 30) where opens never close.

- **[openai/codex#19595]** — `viyatb-oai` *"Bypass managed network for escalated exec"* (Add. 30 noted) **still OPEN**.

## charmbracelet/crush

- **[charmbracelet/crush#2714]** — OPENED 21:01:38Z by `taigrr` (Tai Groot), head SHA `00a4144f`. **+158/-2 across 3 files.** *"update terminal notifier for macos."* **Second `taigrr`-or-equivalent crush activity in 2 addenda** (Add. 30 boundary-noted #2712 by `BrunoKrugel`, merged 19:56:26Z). Crush is no longer merge-silent — sustained low-volume open/merge cadence beginning to register.

## ollama/ollama, cline/cline, Aider-AI/aider, sst/opencode, browser-use/browser-use

Zero merges, zero opens, zero closes in window. **Five of nine tracked repos remain merge-silent for the second consecutive addendum.**

## Cross-repo merge-stream summary

| repo | merges in-window | distinct authors | merge SHAs (short) |
|---|---|---|---|
| anomalyco/opencode | 0 | — | — |
| BerriAI/litellm | 6 | 4 (`Chesars`, `yuneng-berri`, `michelligabriele`, `alvinttang`) | `ed1c4e72`, `ceed00fc`, `9c00f977`, `ae925baa`, `98a9005c`, `4a113626` |
| openai/codex | 0 | — | — |
| charmbracelet/crush | 0 | — | — |
| ollama/ollama | 0 | — | — |
| cline/cline | 0 | — | — |
| Aider-AI/aider | 0 | — | — |
| sst/opencode | 0 | — | — |
| browser-use/browser-use | 0 | — | — |
| **total in-window** | **6** | **4** | — |

**Repo-level merge-volume HHI: 1.0** (litellm 6/6) — perfect repo-monoculture. Add. 28 (0.625) → Add. 29 (mixed) → Add. 30 (0.625) → Add. 31 (1.0). The repo-monoculture observation closing Add. 30 is **definitively confirmed and intensifying**: litellm's rolling-staging-branch mechanism (now spanning at minimum `litellm_internal_staging`, `litellm_staging_03_21_2026`, `litellm_yj_apr25`, and the newly-surfaced `litellm-oss-staging-04-25-2026`) is **manufacturing merges at a structurally higher rate** than upstream-master-only repos (codex, crush, opencode-anomaly, ollama).

**Author HHI within litellm this window: 0.278** (Chesars 1/6, yuneng-berri 2/6, michelligabriele 2/6, alvinttang 1/6 → 0.0278 + 0.111 + 0.111 + 0.0278 = 0.278) — moderate concentration on a 2-merge tie between two distinct authors.

**Synth #106 (sync-PR head-SHA = prior-merge SHA promotion) fires 4 times this window** across #26506→#26508 (open promotion-target), #26513→#26522, #26519→ (Add. 30), and #26521 (sync-PR-as-merge-promotion variant without explicit prior-merge SHA reuse but same mechanism). Anchor for **synth #108**.
