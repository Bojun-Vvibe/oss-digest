# 2026-04-25 — Addendum 30

**Window:** `2026-04-25T20:11:00Z` → `2026-04-25T20:49:39Z` (38 minutes, immediately following Addendum 29).

**Scope:** anomalyco/opencode, BerriAI/litellm, openai/codex, charmbracelet/crush (sst/opencode, ollama/ollama, cline/cline, Aider-AI/aider, browser-use/browser-use — zero in-window activity).

## opencode (anomalyco/opencode)

**Zero merges in window.** Notable closure burst and follow-on opens:

- **Triple-close micro-burst at 20:45:57–20:46:01Z (4-second span, 2 authors, 3 PRs, zero merges):**
  - **[anomalyco/opencode#24360]** — opened 18:15:27Z by `rudraksha-avatar`, head SHA `84233c87`, **CLOSED 20:46:01Z**. **+483/-385 across 1 file.** *"refactor(opencode): improve installer script clarity and functionality."* Lifespan 2h30m34s.
  - **[anomalyco/opencode#24361]** — opened 18:22:49Z by `tiffanychum`, head SHA `bcc5e9fb`, **CLOSED 20:45:59Z**. **+65/-0 across 1 file.** *"test(config): cover nested permission rule order regression (#24335)."* Lifespan 2h23m10s.
  - **[anomalyco/opencode#24362]** — opened 18:23:07Z by `rudraksha-avatar`, head SHA `acfc8811`, **CLOSED 20:45:57Z**. **+10/-6 across 1 file.** *"refactor(opencode): enhance install script and turborepo setup."* Lifespan 2h22m50s.

  Properties: (a) **Same author opened both #24360 and #24362** within 7m40s (18:15:27Z → 18:23:07Z), both installer-script refactors — an internal author-doublet pre-burst. (b) **Closes are reverse-LIFO**: #24362 (last-opened) closed first at 20:45:57Z, #24361 next at 20:45:59Z, #24360 (first-opened) last at 20:46:01Z. (c) **Two distinct surfaces** in the burst — installer (#24360, #24362) vs permission-test regression (#24361) — but **all three carry single-file diffs**. (d) Zero merges, zero maintainer comments visible on any of the three. Distinct from synth #98 (Dependabot-driven sub-10s n=3 mass-close on heterogeneous dependency surfaces) because (i) the two human authors are non-bot, (ii) the surfaces are not dependency-bumps, (iii) the closes span 4 seconds not <10ms. Anchor for **synth #105**.

- **[anomalyco/opencode#22509]** — opened 2026-04-15T00:36:50Z by `bzqzheng`, head SHA `533d93eb`, **CLOSED 20:23:55Z** (un-merged). **+37/-2 across 3 files.** *"feat: add kimi-k2.6-code-preview model support."* Lifespan **10d19h47m05s** — long-tail close of a model-support add. No merge SHA.

- **`pascalandr` same-author same-prefix doublet (both still OPEN):**
  - **[anomalyco/opencode#24384]** — OPENED 20:16:56Z, head SHA `5b8599ba`. **+39/-1 across 2 files.** *"fix(provider): respect configured output limit."*
  - **[anomalyco/opencode#24386]** — OPENED 20:46:39Z (29m43s after #24384), head SHA `ee16f5ac`. **+116/-1 across 2 files.** *"fix(provider): preserve Azure API version."*

  Both `fix(provider):`-prefixed, both base `dev`, same 2-file changedFiles count, same author. `pascalandr` was already noted in Add. 29 as having opened #24374 (SDK cross-spawn fix, 19:36:34Z). **Three pascalandr opens in 70 minutes** (#24374 19:36:34Z → #24384 20:16:56Z → #24386 20:46:39Z), all `fix(provider):` or `fix(...)` prefix, all small-diff (8/-2, 39/-1, 116/-1).

- **[anomalyco/opencode#24383]** — OPENED 20:11:38Z by `heimoshuiyu` (黑墨水鱼), head SHA `16fa43f1`. **+3/-4 across 2 files.** *"fix: move session roots filter from client-side to SQL layer."* Single-line net-deletion fix.

## litellm (BerriAI/litellm)

**Three merges in window — second consecutive 3-merge litellm window (Add. 29 also had 3).**

- **[BerriAI/litellm#26338]** — opened 2026-04-23T18:13:53Z by `ryan-crabbe-berri`, head SHA `09113078`, **MERGED 20:22:04Z** by `ryan-crabbe-berri` (self-merge), merge SHA `9f60b751e13c059f77f547d82d0ce1afdc826657`. **Lifespan 2d2h08m11s.** **+487/-110 across 5 files.** *"feat(mcp): resolve team/key MCP permissions by name or alias."* Base **`litellm_internal_staging`**.

- **[BerriAI/litellm#26519]** — opened 20:29:31Z by `Chesars`, head SHA **`9f60b751e13c059f77f547d82d0ce1afdc826657`** (= merge SHA of #26338!), **MERGED 20:29:44Z** by `Chesars` (self-merge), merge SHA `2255f7651fd113023def9ad51d537f7b65d838a7`. **Lifespan 13 seconds.** **+487/-110 across 5 files** (byte-identical line counts to #26338). *"Sync litellm_staging_03_21_2026 with litellm_internal_staging."* Base **`litellm_staging_03_21_2026`**. **Sync-PR-as-merge-promotion**: the PR's head SHA *is* the prior merge's commit; the PR is opened and merged 13 seconds apart purely to forward-port `internal_staging`'s tip into the dated `staging_03_21` branch. **7m27s gap** between #26338 merge and #26519 merge — anchor for **synth #106**.

- **[BerriAI/litellm#26512]** — opened 18:57:30Z by `yuneng-berri`, head SHA `0b9a7044`, **MERGED 20:43:13Z** by `yuneng-berri` (self-merge), merge SHA `7705cb39f20ca3a445e6a2e399211ffae2decf32`. **Lifespan 1h45m43s.** **+12/-4 across 1 file.** *"[Fix] bind RAG ingestion config to stored credential values."* Base **`litellm_yj_apr25`** — Add. 29's third dated-branch family (`litellm_<initials>_<MMM><DD>`) sees its second self-merge (after #26516 in Add. 29). **Add. 29 prediction confirmed**: `yuneng-berri` is using `litellm_yj_apr25` as a personal feature-branch staging area with serial self-merges; #26513 still open on that branch.

**Other in-window opens (no merges):** #26520 by `ryan-crabbe-berri` (20:43:12Z, +642/-4 8-file *"My User tab to team info page"* — opened **1 second before** own #26512 merge by `yuneng-berri`, but different author so no cascade), #26518 by `stuxf` (20:28:39Z, *"chore(auth): tighten clientside api_base handling"*).

## codex (openai/codex)

- **[openai/codex#19593]** — opened 20:26:56Z by `bolinfest`, head SHA `6fe18bbb`, **MERGED 20:45:31Z** by `bolinfest` (self-merge), merge SHA `f41306b4f3ac9a27bea9f8bc12d2eeb39d286fe0`. **Lifespan 18m35s.** **+5/-0 across 1 file.** *"test: isolate remote thread store regression from plugin warmups."* Base **`main`**. **First `bolinfest` merge in the digest's tracking window** — the `bolinfest` 5-deep permissions stack (#19391 → #19395, all OPEN against the `pr19391`–`pr19394` chain) has been cited as **frozen** since synth #44 / Add. 22 (~6h dwell). This merge is **not** on that stack — it lands directly on `main`, single-file, single-test, +5/-0 — but it confirms `bolinfest` is **active and merging today**, so the stack-frozen state is an active choice (or upstream review-blocker), not author-absence. The `etraut-openai` post-own-merge cascade noted in Add. 29 (#19591 follow-on to the resume-fix merge) is **still OPEN** at window close.

- **[openai/codex#19595]** — OPENED 20:32:37Z by `viyatb-oai`, head SHA `f5ece678`. **+203/-26 across 6 files.** *"[codex] Bypass managed network for escalated exec."* Same author as Add. 23-noted #19467 (Guardian-elicitation reimpl). Network/sandbox surface.

## crush (charmbracelet/crush)

**First in-window activity from charmbracelet/crush across W17 of the dispatcher** (this repo was merge-silent prior). One merge at boundary:

- **[charmbracelet/crush#2712]** — opened 19:17:02Z by `BrunoKrugel`, head SHA `12856f9a`, **MERGED 19:56:26Z** by `BrunoKrugel` (self-merge), merge SHA `a7546adcdc06f5be224ae42e473279178ada13d3`. **Lifespan 39m24s.** *"fix(ui): Skill display as loaded despite being disabled in config."* Note: merge timestamp **19:56:26Z is 14m34s before window-start 20:11:00Z** — strictly outside this addendum's window — recorded here as the first crush merge captured by the dispatcher to anchor future tracking. (Will not double-count in subsequent addenda.)

## sst/opencode, ollama/ollama, cline/cline, Aider-AI/aider, browser-use/browser-use

Zero merges, zero opens, zero closes in window. **Five of nine tracked repos merge-silent** — `cline/cline` and `browser-use/browser-use` returned literally empty PR lists for `updated:>=2026-04-25T20:11:00Z`.

## Cross-repo merge-stream summary

| repo | merges in-window | distinct authors | merge SHAs (short) |
|---|---|---|---|
| anomalyco/opencode | 0 | — | — |
| BerriAI/litellm | 3 | 3 (`ryan-crabbe-berri`, `Chesars`, `yuneng-berri`) | `9f60b751`, `2255f765`, `7705cb39` |
| openai/codex | 1 | 1 (`bolinfest`) | `f41306b4` |
| sst/opencode | 0 | — | — |
| ollama/ollama | 0 | — | — |
| cline/cline | 0 | — | — |
| Aider-AI/aider | 0 | — | — |
| browser-use/browser-use | 0 | — | — |
| charmbracelet/crush | 0 (1 boundary, see note) | — | — |
| **total in-window** | **4** | **4** | — |

**HHI of merge attribution by author this window: 0.25** (4 merges across 4 distinct authors, 0.25 share each, 0.0625 × 4 = 0.25). Sustains Add. 29's heterogeneous-merge-stream regime (HHI 0.20); definitively breaks Add. 28's 0.68 monoculture (synth #102 *"single-author merge-stream window"* now confirmed as a true *window*, not regime, across two consecutive addenda).

**Repo-level merge-volume HHI: 0.625** (litellm 3/4, codex 1/4 → 0.5625 + 0.0625 = 0.625) — sharply concentrated on litellm. The author-monoculture has dissolved but a **repo-monoculture** has formed in its place: litellm carries 75% of in-window merges. Worth tracking as a possible recurring pattern (litellm's rolling-staging-branch mechanism manufactures sync-PRs that inflate its merge count without representing equivalent code change — see #26519's 13-second sync-PR life and zero-novel-content head SHA reuse).
