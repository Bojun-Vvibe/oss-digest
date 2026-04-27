# ADDENDUM-92 — 2026-04-27

**Capture window:** 13:24:30Z → 14:13:16Z (UTC). Window width: **48m46s**.
**Predecessor:** ADDENDUM-91 (closed 13:24:30Z; seeded synth #120 — codex jif-oai N=4 self-merge sprint with selection-regime cascade — and synth #121 — three-duo same-day cross-repo convergent fix multiplicity with embedded thinking-content trio).

## Headline event — jif-oai self-merge sprint EXTENDS to N=6 within 149m09s

The Add.91 prediction (#1 highest-confidence: jif-oai #19813 merges, sprint reaches N=5) **is confirmed AND exceeded — N=6 by capture**:

| # | PR | merge SHA | Branch / surface | Merged (UTC) | Δ from #19792 |
|---|---|---|---|---|---|
| 1 | codex #19792 | `f8c527e529` | `multi_agent_v2: thread cap into feature config` | 11:31:57Z | 0 |
| 2 | codex #18982 | `da83ab554a` | `jif/memories-on-file-system` (substitution) | 12:32:45Z | +60m48s |
| 3 | codex #19809 | `5d314f324c` | Phase 2 retry exhaustion | 12:58:12Z | +86m15s |
| 4 | codex #19812 | `79b4f691a6` | Phase 2 clean workspace guard | 13:14:16Z | +102m19s |
| 5 | codex #19813 | `f431ec12c9` | "nit: one more fix" | 13:32:32Z | +120m35s |
| 6 | codex #19818 | `bb83eec825` | "chore: split memories part 1" | 14:01:06Z | +149m09s |

The selection-regime cascade hypothesis (synth #120) **strengthens at N=5/6**: #19813 was the in-flight "nit" cleanup PR Add.91 flagged as the "natural sprint terminator" — its merge alone would have closed the sprint. But N=6's #19818 is a **brand-new branch opened-and-merged inside this 48m46s window** ("chore: split memories part 1" — note the `part 1` framing implies multi-part follow-up), so the sprint **did not terminate at the natural cleanup PR; it bifurcated into a new sub-thread**. The cascade now extends to a sixth selection regime: **post-cleanup pivot to net-new multi-part work-stream**, with a "part 1" naming convention preannouncing parts 2+.

**Open-tail at capture:** jif-oai #19805 (`Add MultiAgentV2 root and subagent context hints`, `dfa03848`) is **still OPEN, headRefOid unchanged from Add.90 capture — now stale through Add.90/91/92** despite jif-oai having merged 5 PRs around it (Add.91 merges #19809+#19812 + Add.92 merges #19813+#19818). #19805 is the **persistent skip** of the cascade — selection regime never returns to it at any N. This is **author-deliberate dropping**, not lifecycle attrition.

## New merges since ADDENDUM-91 cutoff (13:24:30Z)

| Repo | PR | SHA (short) | Author | Merged (UTC) | Time-into-window |
|---|---|---|---|---|---|
| openai/codex | #19813 | `f431ec12c9` | jif-oai | 13:32:32Z | +8m02s |
| openai/codex | #19818 | `bb83eec825` | jif-oai | 14:01:06Z | +36m36s |

Two merges, **both jif-oai, both codex**. Three windows running (Add.90, Add.91, Add.92) with **codex as the only repo breaking silence and jif-oai as the only author**. Cumulative single-author monopoly count for jif-oai across the 11:31:57Z → 14:01:06Z continuous capture: **6/7 merges in codex, 6/8 across all repos counting qwen-code dreamWB #3661**. Authorship concentration: **75% over 2h29m09s**. Within codex: **6/6 = 100% perfect intra-repo single-author wall over 2h29m09s**.

## Per-repo trailing-silence at capture (14:13:16Z)

| Repo | Last merge SHA | Merged (UTC) | Silence at capture | Δ vs Add.91 |
|---|---|---|---|---|
| openai/codex | #19818 `bb83eec825` | 14:01:06Z | **12m10s** | RESET (was 10m14s) |
| QwenLM/qwen-code | #3661 `8349b8569e` (note: actual #3661 mergeCommit is `596b5a3fd7`) | 12:28:17Z | **1h44m59s** | +48m46s |
| anomalyco/opencode | #24592 `61eabfc60c` | 09:02:28Z | **5h10m48s** | +48m46s, **CROSSED 5h boundary at 14:02:28Z as Add.91 pred #5 forecast** |
| block/goose | #8856 `d8e4b55d16` | 10:31:41Z | **3h41m35s** | +48m46s |
| BerriAI/litellm | #26545 `3d2b8fed32` | 2026-04-26T03:07:01Z | **35h06m15s** | +48m46s |
| google-gemini/gemini-cli | #25942 `31bdf112d2` | 2026-04-24T21:55:46Z | **64h17m30s** | +48m46s, **CROSSED 64h marker at 13:55:46Z as Add.91 pred #2 forecast** |

**Cell occupancy at capture:**
- 0–4h cell: {codex (12m10s), qwen-code (1h44m59s), block/goose (3h41m35s)}
- 4–24h cell: {anomalyco/opencode (5h10m48s)}
- ≥24h cell: {litellm (35h06m), gemini-cli (64h17m)}

Cell shape **identical to Add.91 capture** in occupancy; only intra-cell ordering shifted (anomalyco/opencode advanced inside 4–24h cell; gemini-cli crossed an internal hour boundary inside ≥24h cell).

## Falsification check on ADDENDUM-91 predictions

1. **Pred #1** (jif-oai sprint reaches N=5 via #19813): **CONFIRMED AND EXCEEDED — N=6 reached.** The "natural-end via cleanup PR" sub-prediction **falsified**: the cleanup PR merged but did not terminate the sprint. Net-new "part 1" branch followed. Synth #120 cascade extended.
2. **Pred #2** (gemini-cli crosses 64h silence marker at 13:55:46Z): **CONFIRMED.** 65h marker (14:55:46Z) is the next test — 42m30s from capture.
3. **Pred #3** (≥1 of three convergent-fix duos resolves in-window): **FALSIFIED — ZERO of six PRs changed status in-window.** litellm #26598 (zyz23333), litellm #26593 (weiguangli-io), opencode #24618 (leandrosnx), opencode #24605 (rachadaccoumeh), qwen-code #3677 (shenyankm), qwen-code #3675 (YlLVTECH) — all six remain OPEN with unchanged head SHAs. **Convergent-fix-duo persistence is a stronger pattern than predicted.** Re-arm for Add.93. Discriminator unresolved — no duo prefers merge-vs-close ordering yet.
4. **Pred #4** (bolinfest pr19772–19776 chain status change): **FALSIFIED — NO CHANGE.** All five PRs still open, no force-push, no close. Chain now **7h+ stalled** past 14:14:28Z. The chain is approaching the 8h dormancy band typical of indefinite-stall codex chains.
5. **Pred #5** (anomalyco/opencode crosses 5h silence at 14:02:28Z): **CONFIRMED.** opencode is now the **sole 4–24h cell occupant** at 5h10m48s. block/goose did NOT advance into 4–24h (still 3h41m35s).
6. **Pred #6** (fourth convergent fix-duo OR thinking-content trio→quartet): **FALSIFIED — NO new convergent duo emerged; trio did not extend.** No codex or opencode PR appeared on the thinking-content surface. The trio (qwen-code #3677, qwen-code #3675, goose #8857) remains exactly 3 PRs across 2 repos, all unchanged.
7. **Pred #7** (Bytechoreographer #26601/#26600 merge or close as a pair): **FALSIFIED — both still open, both still updatedAt before 13:00Z.** Sub-author session has stalled, not resolved. Both PRs are effectively dormant inside the litellm staging queue.

**Pred outcome tally: 3 confirmed (1, 2, 5), 4 falsified (3, 4, 6, 7).** The window favored continuation-of-monopoly predictions over duo-resolution predictions. **Convergent-fix duos as a class do not resolve quickly** — six PRs stable across two consecutive windows.

## codex monopoly extends — three-window jif-oai dominance

Three consecutive ADDENDUM windows (Add.90, Add.91, Add.92) have codex broken silence by jif-oai exclusively. Across 2h29m09s of continuous capture, **0 non-jif-oai authors merged into codex**. The vb-openai #19807 PR (Codex-on-Windows tooltip promo) has been **stale 2h05m48s at capture** despite being the queue head non-jif PR. **Cross-author starvation is the dominant codex behavior of the day.**

## Cross-repo open-PR firehose snapshot (top per repo at capture)

- **codex #19807** (vb-openai, `a37adea0`): unchanged from Add.90/91. **Stale through 3 ADDENDUM windows.** Cross-author starvation marker.
- **codex #19805** (jif-oai, `dfa03848`): **persistently skipped** by selection cascade — 3-window stale, author-deliberate drop.
- **codex #19797** (aibrahim-oai, `f8e2beea`): unchanged.
- **codex #19778** (abhinav-oai, `d5539f43`): unchanged.
- **codex #19776** (bolinfest, queue tail of pr19772–19776): chain unchanged, **7h+ stalled**.
- **anomalyco/opencode #24618** (leandrosnx, `c11a6d4745`): unchanged from Add.91.
- **anomalyco/opencode #24614** (SeashoreShi, `7d35c9abbd`): unchanged.
- **anomalyco/opencode #24612** (ricardofiorani, `36157b68d4`): unchanged.
- **anomalyco/opencode #24595** (andocodes, `a82448915f`): unchanged.
- **anomalyco/opencode #24589** (cgarrot, multi-root workspaces, `feat`): NEW emergent in queue head zone, not previously logged.
- **qwen-code #3680** (chiga0, `5b220a520a`, "expand TUI markdown rendering"): unchanged from Add.91.
- **qwen-code #3677** (shenyankm, `77c53e05a2`): unchanged.
- **qwen-code #3673** (LaZzyMan, `feat(memory): autoSkill background project skill extraction`): NEW visibility in queue head — previously below.
- **qwen-code #3671** (chiga0): unchanged.
- **qwen-code #3668** (shenyankm, `feat(stats): current session billing estimates`): NEW visibility — second shenyankm open PR alongside #3677. **shenyankm now has 2 open PRs in qwen-code queue head**, parallel to chiga0's 2 open PRs (#3680, #3671). Two same-author PR-pairs both intra-repo, both in queue head — **dual sub-author concentration**.
- **litellm #26604** (xr843, `health-check strip max_tokens before non-chat handlers`, `fix`): NEW, opened 14:12:48Z (28s before capture).
- **litellm #26603** (xr843, `proxy: set verbose_logger level on LITELLM_LOG=INFO/DEBUG`, `fix`): NEW, opened 14:11:15Z. **xr843 (Tim Ren) opened TWO PRs in 1m33s on different surfaces** — direct mirror of Add.91's Bytechoreographer back-to-back pattern. **Second sub-author back-to-back session in litellm in two consecutive ADDENDUM windows** — sub-author session is the dominant litellm staging behavior.
- **litellm #26602** (ishan-modi, `docker: exclude docker/build_from_pip from build context`, `fix`): NEW.
- **litellm #26601, #26600** (Bytechoreographer): **unchanged headRefOid since Add.91, no merge, no close** — sub-author session **stalled at staging-queue position**.
- **litellm #26598** (zyz23333), **#26593** (weiguangli-io): convergent-fix-duo persistence (see pred #3 above).
- **block/goose #8857** (jh-block, thinking content): unchanged.
- **block/goose #8854** (lifeizhou-ap, `fix: remove defaults yaml`): NEW visibility in queue head.
- **gemini-cli #26043, #26042, #26041** (Ultron09 trio): unchanged from Add.88/89/90/91. Now **5+ ADDENDUM windows stale** — Ultron09's open queue is the longest-running same-author multi-PR stall in the corpus.
- **gemini-cli #26040** (pawanwashudev-official): unchanged.

## Predictions for ADDENDUM-93

1. **Highest-confidence**: jif-oai sprint reaches N=7 via "chore: split memories part 2" merge (predicted by `part 1` naming convention in #19818). If this materializes, the cascade demonstrates **explicit author-preannouncement of follow-up regime** — a new sub-pattern within synth #120.
2. **Highest-confidence**: gemini-cli crosses 65h silence marker at 14:55:46Z (42m30s post-capture).
3. **Medium-confidence**: ≥1 of the six convergent-duo PRs (litellm #26598/#26593, opencode #24618/#24605, qwen-code #3677/#3675) finally changes status by Add.93. Pred re-armed from Add.91 pred #3 — second-window re-arm.
4. **Medium-confidence**: xr843 sub-author session in litellm reaches N=3 via a third PR opened by 15:00Z (xr843 follows the Bytechoreographer N=2 stall pattern → expected N=3 if author session is more active than Bytechoreographer's).
5. **Medium-confidence**: bolinfest pr19772–19776 chain crosses 8h-stalled marker at 15:14:28Z without status change.
6. **Speculative**: a non-jif-oai author finally merges into codex by Add.93, breaking the 3-window monopoly. Candidates: aibrahim-oai #19797 (MCP OAuth), abhinav-oai #19778 (hook listing).
7. **Speculative**: shenyankm or chiga0 second-PR merges in qwen-code, ratifying the dual sub-author concentration pattern as a merge-driven rather than open-driven phenomenon.

## Cross-references

- **Synth #120** (Add.91 seed; codex jif-oai N=4 self-merge sprint with selection-regime cascade): **upgraded by Add.92 to N=6 with author-preannounced multi-part follow-up regime.** The cascade now exhibits 6 distinct selection regimes (N=2 non-LIFO, N=3 LIFO, N=4 zero-lifespan, N=5 cleanup-PR, N=6 net-new-part-1-preannouncement). This is **synth-novel territory** for ADDENDUM-93 — candidate synth #222.
- **Synth #121** (Add.91 seed; three-duo cross-repo convergent fix multiplicity): **strengthens via persistence — all six PRs stable across two windows**, no resolution. The pattern is a **persistence-class phenomenon**, not a transient observation.
- **ADDENDUM-91 pred #5** (anomalyco/opencode 5h crossing): confirmed; opencode now has multi-window 4–24h cell tenure.
- **xr843 sub-author session emergence** parallels Add.91 Bytechoreographer #26601/#26600 — **second consecutive litellm sub-author back-to-back** in two windows. Synth-candidate: litellm-staging-queue sub-author back-to-back as recurring N=2-open pattern. To be promoted in synth #221.

(Two Add.92-seeded synths promoted in `_weekly/`: #221 — litellm staging-queue sub-author N=2 back-to-back open-pair recurring across consecutive windows (Bytechoreographer Add.91 + xr843 Add.92); #222 — codex jif-oai N=6 self-merge sprint extension with author-preannounced multi-part follow-up regime as 6th selection-regime mutation.)
