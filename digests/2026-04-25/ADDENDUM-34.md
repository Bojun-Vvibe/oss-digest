# 2026-04-25 — Addendum 34

**Window:** `2026-04-25T22:34:00Z` → `2026-04-25T23:29:48Z` (55m48s, immediately following Addendum 33).

**Scope:** BerriAI/litellm, openai/codex, sst/opencode, anomalyco/opencode, charmbracelet/crush, Aider-AI/aider.

## litellm (BerriAI/litellm)

**Four merges in window — highest single-window merge count in last 4 addenda (Add.31=6, Add.32=2, Add.33=3, Add.34=4).** Distribution: 1 self-merge (`yuneng-berri`), 3 maintainer/non-self merges. Self-merge ratio collapses to 25% (1/4) — fourth consecutive flip in the synth-#111 oscillation series (Add.31=100% → 32=0% → 33=67% → 34=25%).

- **[BerriAI/litellm#26439]** — opened 2026-04-24T22:17:58Z by `dkindlund` (external), head SHA carried from Add.33, **MERGED 22:36:50Z** by maintainer (non-self), merge SHA `b55a0f0681127a46f0834ee9d7732823ec8569b3`. **Lifespan 24h18m52s — new long-tail record across last 8 addenda.** **+526/-82 across files, base `litellm_oss_staging_04_25_2026`.** *"fix(adapters,vertex): pass output_config through to backends that accept it (closes #23380, supersedes #23475/#23396/#23706/#22727)."* External-contributor PR finally lands — was tracked in Add.33 as 30h+ open baseline. **Closes 4 superseded prior PRs in one merge.** Anchor for synth #114.
- **[BerriAI/litellm#26527]** — opened 22:16:44Z by `codejedi-ai` (Add.33 noted as OPEN, +534/-2), **MERGED 22:51:10Z** by maintainer, merge SHA `8de50de45ee14d00a0559ced3823e4ea7d6e2588`. Final diff **+2972/-213 across files** — PR grew **5.5×** between Add.33 open snapshot and merge (a 35-min growth burst). **Lifespan 34m26s.** Base `litellm_yj_staging` (yuneng's personal branch — not internal_staging). *"test(ci): add Claude Code ↔ LiteLLM dockerized E2E coverage."*
- **[BerriAI/litellm#26528]** — opened 22:19:25Z by `shivamrawat1` (Add.33 noted as OPEN), **MERGED 23:01:36Z** by maintainer, merge SHA `9e59a0b1c56c1a4e8a3f723e81bfe0479e777567`. Final **+152/-49 across files** (vs Add.33's +39/-20 — diff grew 3.5× pre-merge). **Lifespan 42m11s.** Base `litellm_internal_staging`. **Fourth consecutive `shivamrawat1` PR landed/opened on `*guardrail*` surface across 4 addenda.**
- **[BerriAI/litellm#26532]** — opened in-window (no Add.33 trace) by `yuneng-berri`, head SHA `5db6b834`, **MERGED 23:11:34Z** by `yuneng-berri` (self-merge), merge SHA `5db6b83446bf2b9c54911cb8f4a2d5422540dae2`. **+1817/-1808 across files (near-zero net delta, ratio 1.005).** Base `litellm_internal_staging`. *"[Infra] Build UI."* **Symmetric add/delete diff = build-output checkin signature** — distinguishable from feature/fix PRs by the +N/-N ≈ 1.0 fingerprint. First such observed in tracking.

**Open in window:**
- **[BerriAI/litellm#26530]** — opened 22:39:25Z by `mateo-berri` (debut author in tracking), head SHA `0644a1b0`, **+1003/-93 across files**. Base `litellm_internal_staging`. *"fix(adapters,vertex): pass Anthropic `output_config` through to backends that accept it."* **Title is a verbatim near-clone of #26439's title** (which merged 22:36:50Z, just **2m35s before** #26530 opened). Same surface (`adapters,vertex`), same goal (`output_config` pass-through). **Cross-author re-implementation of just-merged external PR onto internal staging — anchor for synth #113.**
- **[BerriAI/litellm#26531]** — opened 22:47:31Z by `ishaan-berri`, head SHA `2a1a8072`, +179/-10. *"feat(mcp): OAuth2 self-service for internal users (LIT-2503)."* **LIT-2503 is the same ticket as #26517 (Add.32, still OPEN at 22:32Z).** This is a **fresh PR for the same ticket ID** — possible scope split or restart. Base `litellm_internal_staging`.
- **[BerriAI/litellm#26533]** — opened 23:20:18Z by `Prithvi1994` (debut author), head SHA `f13d6b4e`, +211/-18. Base `main` (not staging). *"fix(proxy): handle client-side unique-ID suffixes in MCP semantic tool filter."*

## codex (openai/codex)

**Three merges in window — first multi-merge codex window in tracking.** Stacked-PR cascade observed.

- **[openai/codex#19391]** — opened pre-window by `bolinfest`, **MERGED 22:46:23Z**, merge SHA `8be36acf9d5415c5229b5b596962176f91f9dfc8`. **+1351/-644.** Base **`pr19604`** (i.e. base = another PR's branch). *"permissions: make runtime config profile-backed."* **PR-stacking: this PR's base is the head branch of PR #19604.**
- **[openai/codex#19595]** — by `viyatb-oai`, **MERGED 23:23:59Z**, merge SHA `9aaa5d9358b32b75cb9ff8c92bb6e5cba32d3fa8`. +204/-26. Base `main`. *"[codex] Bypass managed network for escalated exec."*
- **[openai/codex#19604]** — by `bolinfest`, **MERGED 23:25:29Z** (1m30s after #19595), merge SHA `d54493ba1caee573118b3871390768c34689ca51`. +37/-13. Base `main`. *"test: stabilize app-server path assertions on Windows."* **This is the parent of the #19391 stack: #19391 was based on `pr19604`, then `pr19604`/`#19604` merges to main 39m06s later. Stacked-PR ladder: #19391 → pr19604 (39m) → main.**

**Open in window:**
- **[openai/codex#19610]** — `andmis`, 23:19:11Z, +26/-5, *"Support end_turn in response.completed."* head `a21212b0`.
- **[openai/codex#19609]** — `bolinfest`, 23:17:39Z, +13/-4, *"fix: restore 30-minute timeout for Bazel builds."* head `f00db2c8`. **Fourth `bolinfest` event in window** (#19391 merge, #19604 merge, #19606 open, #19609 open).
- **[openai/codex#19606]** — `bolinfest`, 22:58:30Z, **+1388/-657**, *"permissions: make runtime config profile-backed."* head `91a07d0d`. **Title is verbatim identical to just-merged #19391** (same author). **Same-author refile/follow-up of own just-merged PR within 12 minutes — distinct from cross-author re-implementation pattern (litellm #26439→#26530).**
- **[openai/codex#19605]** — `andmis`, 22:49:55Z, **+6/-222** (near-pure deletion), *"Delete unused ResponseItem::Message.end_turn."* head `66d62863`. **Companion to #19610 (same author, opposite-direction `end_turn` work) — pair opened 29m apart.**

## opencode (anomalyco/opencode)

**Four merges in 45m13s, all `kitlangton`, all maintainer-merged, all `feat(httpapi):` prefix, all base `dev`, monotonic PR numbers.**

- **[anomalyco/opencode#24394]** — `kitlangton`, **MERGED 22:42:02Z**, merge SHA `5904f599a9110207f61654ae3a57b9a041228dce`. +94/-11. *"feat(httpapi): bridge project git init endpoint."*
- **[anomalyco/opencode#24398]** — `kitlangton`, **MERGED 22:55:50Z** (13m48s after #24394), merge SHA `58c65874ba6aff2f16f5310dacddc3a89eb7b2cd`. +76/-6. *"feat(httpapi): bridge project update endpoint."*
- **[anomalyco/opencode#24403]** — `kitlangton`, **MERGED 23:16:19Z** (20m29s after #24398), merge SHA `a14c22d4e9196eda3fc217213dcd7b01344087de`. +294/-32. *"feat(httpapi): bridge mcp control endpoints."*
- **[anomalyco/opencode#24405]** — `kitlangton`, **MERGED 23:27:11Z** (10m52s after #24403), merge SHA `450128f9be8f2028cbfbc361043c91c0e0943bba`. +121/-9. *"feat(httpapi): bridge mcp oauth endpoints."* Final cumulative merge: **+585/-58 across 4 PRs, all on `bridge*` surface family** — anchor for synth #113.

**Inter-merge intervals:** 13m48s, 20m29s, 10m52s. **Mean 15m03s, sigma 4m02s — tight cadence.** All pure-additive (additions ≫ deletions on every PR; ratio 8.5:1, 12.7:1, 9.2:1, 13.4:1).

**Open in window:**
- **[anomalyco/opencode#24406]** — `herjarsa`, 23:21:29Z, **+4668/-5004 across files** (largest mixed-direction diff in tracking), *"feat(tui): add unified task state color convention with icons."* head `8b242da3`. **Second `herjarsa` open in 80 minutes** (Add.33 #24395 was +3108/-49, still OPEN). Combined `herjarsa` open footprint: **+7776/-5053**.
- **[anomalyco/opencode#24401]** — `leandrosnx` (debut), 23:08:38Z, +3/-1, *"fix: guard against undefined MCP tool output causing output.split crash."*
- **[anomalyco/opencode#24397]** — `mmynsted` (debut), 22:35:17Z, +1/-0, *"docs: add toon-config-plugin to ecosystem plugins."*

## sst/opencode, charmbracelet/crush, Aider-AI/aider
**No merges, no opens in window.**

## Notable closures
- **[BerriAI/litellm#26439]** closes #23380 and supersedes #23475, #23396, #23706, #22727 in single merge.

## Cross-repo summary
- **8 merges total** (litellm 4, codex 3, anomalyco/opencode 4) — 11 if counting per-repo. **Highest aggregate window since Add.31.**
- **3 debut authors** in window: `mateo-berri`, `Prithvi1994`, `leandrosnx`, `mmynsted` (4 across all repos).
- **Two distinct re-implementation patterns observed**: (a) cross-author near-clone (litellm #26439 merged → #26530 opened by different author 2m35s later, near-identical title), (b) same-author refile (codex #19391 merged → #19606 opened by same author 12m later, verbatim title).
- **One stacked-PR ladder closed** (codex #19391 base=`pr19604` → #19604 to main, 39m06s).
- **One same-author serial-merge sprint** (anomalyco/opencode 4× kitlangton on `httpapi/bridge*` in 45m13s).
