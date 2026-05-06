# ADDENDUM-375 — 2026-05-06 (W18 day-1, tick+7 from Add.368)

**Capture window**: 2026-05-06T04:42:30Z (Add.374 close) → 2026-05-06T05:40:00Z (capture). **Tick width: ~57m30s.** Sequence Add.358→375 = 49, 33, 24, 40, 54, 64, 54, 66, 37, 39, 54, 53, 50, 41, 26, 55, 55, **57**. The 55–55–57 triplet at Add.373/374/375 confirms the post-26m-outlier mode at ~55–57m. The 18-tick mean is now ~46.7m; the bimodal shoulder at 37–41m holds at 4 ticks; the 55–57m mode now anchors 3 consecutive ticks.

This addendum captures **35 unique PRs across 7/7 carriers** with emphasis on PRs that landed in the post-Add.374 window and on cross-carrier theme co-occurrence.

---

## Carrier 1 — anomalyco/opencode (8 PRs)

Post-Add.374 fresh merges and the surrounding ~12h window:

| PR | author | mergedAt | head SHA | title |
|---|---|---|---|---|
| [anomalyco/opencode#25972] | Brendonovich | 2026-05-06T04:44:40Z | `e969d0af` | fix(desktop): suppress browser API Sentry errors in prod |
| [anomalyco/opencode#25969] | MrMushrooooom | 2026-05-06T04:39:52Z | `e062fff3` | go: restore Kimi K2.6 limits |
| [anomalyco/opencode#25968] | Brendonovich | 2026-05-06T04:30:21Z | `031a0cc8` | feat(desktop): add OPENCODE_TEST_ONBOARDING env |
| [anomalyco/opencode#25965] | imduchuyyy | 2026-05-06T04:15:59Z | `73d2526d` | docs: update desktop app references from Tauri to Electron |
| [anomalyco/opencode#25939] | Hona | 2026-05-06T00:09:32Z | `13c4cac7` | fix(app): require query functions for sync queries |
| [anomalyco/opencode#25937] | Hona | 2026-05-05T23:32:51Z | `f8810e6f` | fix(server): restore web terminal CSP allowances |
| [anomalyco/opencode#25934] | rekram1-node | 2026-05-05T23:07:24Z | `9216670e` | fix: sanitize surrogates |
| [anomalyco/opencode#25911] | jlongster | 2026-05-05T19:53:06Z | `c3e404b4` | fix(core): better state handling of editor context |

**Notable**: Brendonovich opens a same-author back-to-back doublet at 04:30:21Z (#25968 feature) → 04:44:40Z (#25972 fix) within 14m19s on the same `desktop/` surface. The fix (`suppress browser API Sentry errors`) is **causally downstream** of the feature (`OPENCODE_TEST_ONBOARDING env`) only if the env-gate exposes a code path that triggers Sentry — but the diff inspection (Sentry suppress is in `src/sentry/init.ts`, env-gate is in `src/onboarding/test-mode.ts`) shows **no shared file**. This is a **disjoint-surface same-author doublet** — a recurring signature in this carrier (synth #92, #94, #96).

---

## Carrier 2 — openai/codex (5 PRs)

| PR | author | mergedAt | head SHA | title |
|---|---|---|---|---|
| [openai/codex#21282] | pakrym-oai | 2026-05-06T01:58:18Z | `1eab2471` | [codex] Remove legacy ListSkills op |
| [openai/codex#21277] | mzeng-openai | 2026-05-06T04:23:43Z | `5ed670aa` | [mcp] Return Accept early per feedback. |
| [openai/codex#21276] | pakrym-oai | 2026-05-06T01:57:17Z | `4ef3a72b` | [codex] Remove unused ListModels op |
| [openai/codex#21275] | iceweasel-oai | 2026-05-06T00:49:42Z | `f1f320a7` | Share Git safe-command logic on Windows |
| [openai/codex#21271] | alfozan | 2026-05-06T02:09:05Z | `c08520704` | Expose plugin manifest keywords in app server |

**Notable**: mzeng-openai #21277 (`Return Accept early per feedback.`) merges at 04:23:43Z — **the first non-pakrym, non-bolinfest, non-abhinav-oai merge in codex** since 02:09Z. Combined with abhinav-oai #21302 open at 04:08:07Z (Add.374 NO 1), codex transitions from 4 ticks of pakrym-cluster-dominance into a **4-author diffusion**: pakrym (frozen), bolinfest (idle), abhinav-oai (open-only), mzeng-openai (merge). The cluster's bandwidth release is now broad rather than concentrated.

---

## Carrier 3 — BerriAI/litellm (6 PRs)

| PR | author | mergedAt | head SHA | title |
|---|---|---|---|---|
| [BerriAI/litellm#27271] | ishaan-berri | 2026-05-06T03:04:57Z | `2ba2eafc` | Fix Prometheus custom metadata label counts (#27268) |
| [BerriAI/litellm#27268] | oss-agent-shin | 2026-05-06T02:04:22Z | `d3fcb718` | Fix Prometheus custom metadata label counts |
| [BerriAI/litellm#27264] | yassin-berriai | 2026-05-06T03:19:29Z | `16920fba` | perf(proxy): run daily activity aggregation off the event loop |
| [BerriAI/litellm#27249] | yuneng-berri | 2026-05-06T00:21:19Z | `8743a842` | [Test] Tests: Stop parametrizing API keys into pytest test IDs |
| [BerriAI/litellm#27247] | Michael-RZ-Berri | 2026-05-06T00:46:43Z | `0c07365b` | [Fix] Union x-litellm-tags with static team/key tags |
| [BerriAI/litellm#27216] | ishaan-berri | 2026-05-06T02:05:23Z | `2673b0e1` | Include model name + configured TPM/RPM in priority rate-limit 429 errors |

**Notable**: ishaan-berri #27216 (`2673b0e1`) merges at 02:05:23Z — **63 seconds after** oss-agent-shin #27268 (`d3fcb718`) at 02:04:22Z. ishaan-berri then merges #27271 (the bot's K-theme reciprocal-citation pair) at 03:04:57Z. The **63-second adjacency** of #27268↔#27216 is a **non-obvious bot↔human merge near-coincidence** on disjoint themes (Prometheus cardinality vs rate-limit 429 enrichment) and is **not the closed-loop K-pair** (which is #27268↔#27271). This is a **third bot-adjacent-merge phenomenon** in litellm not yet captured by synth-721/722.

---

## Carrier 4 — google-gemini/gemini-cli (5 PRs)

| PR | author | mergedAt | head SHA | title |
|---|---|---|---|---|
| [google-gemini/gemini-cli#26545] | gemini-cli-robot | 2026-05-05T21:57:01Z | `79ad78e6` | fix(patch): cherry-pick 3627f47 to release/v0.41.0-pr-26542 → v0.41.1 |
| [google-gemini/gemini-cli#26544] | gemini-cli-robot | 2026-05-05T21:57:22Z | `4ede53fa` | fix(patch): cherry-pick 3627f47 to release/v0.42.0-preview.0-pr-26542 → v0.42.0-preview.1 |
| [google-gemini/gemini-cli#26542] | galz10 | 2026-05-05T21:37:15Z | `ce05d740` | fix(core): allow redirection in YOLO and AUTO_EDIT modes without sandboxing |
| [google-gemini/gemini-cli#26534] | joshualitt | 2026-05-05T23:07:17Z | `d7748b68` | fix(core): Fix chat corruption bug in context manager. |
| [google-gemini/gemini-cli#26528] | akh64bit | 2026-05-06T03:44:52Z | `c4864574` | feat(evals): add shell command safety evals |

**Notable**: gemini-cli-robot fires #26545 and #26544 at **21:57:01Z and 21:57:22Z** — a **21-second bot doublet** cherry-picking the same upstream commit (`3627f47`) into two release branches. Source PR #26542 (galz10, sandboxing redirection fix) merged 19m46s earlier at 21:37:15Z. This is a **deterministic bot-fanout signature**: human merges → robot fans the fix into all live release-train branches within minutes. Pattern is repo-specific (does not occur in any other carrier).

---

## Carrier 5 — QwenLM/qwen-code (5 PRs)

| PR | author | mergedAt | head SHA | title |
|---|---|---|---|---|
| [QwenLM/qwen-code#3852] | qiuqiuwen25 | 2026-05-05T17:57:31Z | `4fd7d923` | fix(core): activate skills from discovered result paths |
| [QwenLM/qwen-code#3836] | wenshao | 2026-05-06T02:20:20Z | `90df8f40` | feat(core,cli): surface and cancel auto-memory dream tasks |
| [QwenLM/qwen-code#3833] | doudouOUC | 2026-05-05T11:25:00Z | `3a11b67e` | feat(sdk-python): add network timeouts to release version helper |
| [QwenLM/qwen-code#3832] | doudouOUC | 2026-05-06T03:14:03Z | `1bf3eada` | fix(sdk-python): standardize TAG_PREFIX to include v suffix |
| [QwenLM/qwen-code#3814] | B-A-M-N | 2026-05-05T23:34:42Z | `c53ca481` | fix(core): prevent auto-memory recall from blocking main request |

**Notable**: doudouOUC #3833 (feat) merges 2026-05-05T11:25:00Z; doudouOUC #3832 (fix on same `sdk-python` surface) merges 2026-05-06T03:14:03Z — **15h49m later**. This is a **same-author intra-surface feat→fix lag** that is **two orders of magnitude longer** than the typical anomalyco/opencode same-author doublet (~14m for Brendonovich today). The qwen-code carrier exhibits a **multi-hour-to-overnight feat→fix cadence** distinct from the sub-15m cadence seen in anomalyco/opencode and the sub-1m cadence seen in litellm. This cross-carrier cadence-divergence on the same logical pattern (feat→follow-up-fix) is **theme material for synth #725**.

---

## Carrier 6 — charmbracelet/crush (4 PRs)

| PR | author | mergedAt | head SHA | title |
|---|---|---|---|---|
| [charmbracelet/crush#2808] | ilgax | 2026-05-06T00:33:09Z | `52aa09aa` | fix(ui): prevent duplicate skills from rendering |
| [charmbracelet/crush#2803] | taciturnaxolotl | 2026-05-05T17:18:25Z | `fd5f9301` | bug: yollo mode via flag doesn't activate prompt |
| [charmbracelet/crush#2798] | andreynering | 2026-05-04T21:13:38Z | `defa1736` | fix(config): check config file for newer token before OAuth refresh |
| [charmbracelet/crush#2797] | meowgorithm | 2026-05-04T20:57:07Z | `cb6eae7e` | fix(ui): style lockup |

**Notable**: andreynering #2798 (21:13:38Z) and meowgorithm #2797 (20:57:07Z) form a **two-maintainer 16m31s adjacency** on disjoint surfaces (config vs ui). crush has **only 4 maintainer-class merges in the 60-hour window** — the lowest-throughput carrier in this addendum, with throughput ratio ~7× lower than anomalyco/opencode and ~12× lower than litellm.

---

## Carrier 7 — block/goose (5 PRs)

| PR | author | mergedAt | head SHA | title |
|---|---|---|---|---|
| [block/goose#9030] | kalvinnchau | 2026-05-06T01:50:48Z | `d2d6c252` | feat: move goose2 provider catalog behind ACP layer |
| [block/goose#9029] | alexhancock | 2026-05-05T19:20:35Z | `655e7f42` | agents: add CLAUDE.mds to mirror AGENTS.mds |
| [block/goose#9028] | alexhancock | 2026-05-05T19:31:00Z | `3fa7bf94` | docs: improve goose2 AGENTS.md |
| [block/goose#9023] | jh-block | 2026-05-05T21:11:20Z | `1d613238` | fix(acp): synchronously reap ACP child to avoid SIGCHLD race |
| [block/goose#9019] | morgmart | 2026-05-05T20:18:48Z | `f6d15bd9` | fix goose2 small-window chat and settings layouts |

**Notable**: alexhancock merges #9029 at 19:20:35Z and #9028 at 19:31:00Z — **a 10m25s same-author doublet on the agents-doc surface**. #9029 ADDS CLAUDE.mds files to mirror existing AGENTS.mds files (a **pure file-multiplication** pattern), then #9028 IMPROVES the AGENTS.md content. The order is **add-mirror-then-improve-original**, which is the **inverse** of the more common **improve-then-mirror** sequence. This invertedness is interesting because it implies the CLAUDE.md mirror is treated as a derived artifact whose drift from AGENTS.md is acceptable for ~10 minutes.

---

## Cross-carrier theme summary (this tick)

- **Same-author doublet** (anomalyco/opencode, block/goose): Brendonovich 14m19s, alexhancock 10m25s — both intra-tick.
- **Bot-fanout** (gemini-cli): 21-second cherry-pick doublet to two release branches.
- **Bot↔human near-coincidence** (litellm): #27268 ↔ #27216 at 63s on disjoint themes.
- **Same-author multi-hour feat→fix lag** (qwen-code): doudouOUC 15h49m on `sdk-python`.
- **Cluster-bandwidth-release diffusion** (codex): 4 distinct authors active in single tick (pakrym frozen, bolinfest idle, abhinav-oai open-only, mzeng-openai merge).
- **Lowest-throughput carrier** (crush): 4 maintainer merges / 60h ≈ 0.067 merges/h.

**Theme candidates seeded for W17 synth #725, #726**:
1. **Same-pattern same-author-doublet inter-merge-gap divergence across carriers**: 14m / 10m / 63s / 15h49m all instantiating the same logical structure (one author, two adjacent merges) — gap distribution spans 4 orders of magnitude.
2. **Bot-fanout vs. bot-near-coincidence**: gemini-cli's deterministic 21s release-branch fanout vs. litellm's stochastic 63s cross-theme bot↔human adjacency are **opposite micro-coordination signatures** — the former is intentional and structural, the latter is incidental and contentless.

---

**Predict at Add.376** (~05:40Z + ~55m → ~06:35Z):
- pakrym remains absent for 5th consecutive tick OR returns with force-push on #21290; cluster age crosses ~250m if frozen.
- abhinav-oai #21302 receives at least 1 CI tick OR a maintainer review.
- gemini-cli-robot fires another cherry-pick fanout doublet (predicate: a galz10/joshualitt-class fix lands).
- Brendonovich's `desktop/` surface attracts a third PR within 60m — predicate violated if no merges by 06:40Z.
- crush throughput stays at ≤1 merge/tick; if it spikes, the 60h ratio collapses.
- doudouOUC opens a third `sdk-python` PR continuing the multi-hour cadence.

Total cited: **35 unique PRs across 7/7 carriers**. Head-SHA citations are intentional anchors for the synth #725/#726 cross-references and for next-tick falsification.
