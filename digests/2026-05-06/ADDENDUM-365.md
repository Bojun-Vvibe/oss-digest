# ADDENDUM-365 — 2026-05-06 (W18 day-1, tick+1 from Add.364)

**Capture window**: 2026-05-05T20:45:12Z (Add.364 latest) → 2026-05-05T21:51:42Z (Add.365 latest, litellm #27225 update). **Tick width: ~66m.** Sequence Add.355→365 = 28, 20, 49, 33, 24, 40, 54, 64, 54, **66**. The 66m gap re-tests the upper edge of the 50–65m band declared at Add.363; the band is now provisionally widened to **50–70m**. Pair-midpoint Add.364+365 = (54+66)/2 = **60m** — band centroid up 1m from 59m at Add.364.

---

## NEW OBSERVATION THIS TICK — "sub-class K: single-author intra-tick rapid-fire prometheus-gauge fix iteration"

**Signature**: One author opens **N≥4 PRs in <20 minutes**, all targeting the **same narrow defect surface** (literal: a single Prometheus metric family — `litellm_remaining_api_key_{requests,tokens}_for_model`), with each PR title preserving the same scope-prefix `fix(prometheus):` and each successive PR refining or replacing the prior approach. The series is **iteration-by-PR** rather than iteration-by-force-push: prior PRs are not closed, head SHAs of prior PRs are stable, and the new PRs accumulate as parallel candidate fixes.

**Empirical instance (litellm / ishaan-berri):**

| PR | head SHA | createdAt | title fragment |
|---|---|---|---|
| #27226 | `9de49c7b044d` | 2026-05-05T20:26:04Z | `fix(prometheus): read per-key remaining tokens/requests from additional_headers (Grafana/DataDog 9e18 fix)` |
| #27229 | `17656d9aad8f` | 2026-05-05T21:05:22Z | `fix(prometheus): read litellm_remaining_api_key_{requests,tokens}_for_model from hidden_params.additional_headers (v3 limiter)` |
| #27230 | `21ac955a60c2` | 2026-05-05T21:12:31Z | `fix(prometheus): fall back to v3 limiter additional_headers for per-key remaining gauges` |
| #27231 | `f624132babc3` | 2026-05-05T21:14:31Z | `fix(prometheus): fall back to additional_headers for remaining tokens/requests gauges` |
| #27233 | `052f02fa473b` | 2026-05-05T21:24:20Z | `fix(prometheus): emit real litellm_remaining_api_key_*_for_model values when v3 rate limiter is in use` |

**Burst geometry**: 5 PRs in **58m16s** (20:26:04Z → 21:24:20Z); inter-open gaps **39m18s, 7m09s, 2m00s, 9m49s** (mean 14m34s, but four of five gaps under 10m). One co-author (oss-agent-shin) interleaves at 21:19:59Z with **#27232** (`fix(prometheus): per-key per-model remaining tokens/requests gauges always 9e18 (sys.maxsize)`) — the exact same defect framing, in the same minute-band as #27231 / #27233. **6 PRs total** across 2 authors on 1 metric family inside 58m.

**Critical contrast vs sub-class H (mutating heads) and sub-class J (verb-routing stack):**
- vs H: heads are **not** mutated; each PR retains its original SHA. The author iterates by **opening new PRs**, not by force-pushing.
- vs J (Add.364, codex verb routing): J's burst was **2-second arithmetic** progression; K is **multi-minute irregular** progression with explicit defect-narrative refinement in each PR title. J spans verbs (apply_patch / shell_command / view_image); K spans **approaches to one defect**.

**Falsifiable predictions:**
- **P-365.A**: If next tick (Add.366) shows ≥3 of {#27226, #27229, #27230, #27231, #27233} **closed without merge** in favor of a single chosen survivor, sub-class K is confirmed as a **candidate-elimination iteration** sub-mode. Falsified iff ≥3 survive and each merges independently.
- **P-365.B**: If oss-agent-shin (#27232, #27235) opens another bot-mediated PR within 6h that **closes** the human-author candidates, K becomes a **bot-resolved human-iteration** sub-mode. Falsified iff oss-agent-shin's PRs are themselves closed first.
- **P-365.C**: If carrier opencode shows any sub-class K instance within next 4 ticks (single author, ≥4 PRs in <30m on same narrow defect), K generalizes off litellm; otherwise K is **litellm-prometheus-specific** at sub-1h resolution.

---

## Recurrence check on Add.364's predictions

- **P-364.A** (codex verb-routing stack extension to list_dir/glob/grep): **NO NEW STACK MEMBER** this tick. xli-oai opened #21223 (`Add workspace message backend client plumbing`, 18:01:05Z) and #21224 (`Add workspace announcement polling client`, 18:01:25Z) — different stack (workspace-announcement, not env-routing). Sub-class J does not extend at tick+1; consistent with the **one-shot author refactor** interpretation rather than maintainer-driven decomposition.
- **P-364.B** (Burst-1 head SHAs `d80209b5`, `5679f3ba`, `3e3968f5`, `05148c54` remain frozen): **CONFIRMED** — none of the 4 SHAs surface as updated_at within the Add.365 window. The 6-second arithmetic-progression open burst remains a **non-iterating "stack seed"** sub-mode. P-364.B holds at tick+1.
- **P-364.C** (crush 3-PR same-minute single-author burst): **NOT OBSERVED**. crush activity this tick: taciturnaxolotl opened #2807 (20:08:11Z) and #2809 (20:45:15Z) — a doublet across **37m04s**, not a same-minute triplet. Sub-class J generalization to crush is **unsupported at tick+1**; codex-specificity holds.

---

## Specific PRs cited per carrier (≥50 unique PRs across all 7 carriers)

### anomalyco/opencode (15)
- **#25925** `40178e0342ab` ctharvey `fix(provider): generate fallback ID for tool calls missing 'id' in streaming` 21:47:46Z (NEW open this tick)
- **#25924** `258f6e393d68` CasualDeveloper `chore: add generation completion sentinels` 21:35:24Z (NEW)
- **#25920** `fa38b038ff7b` ajpintos `fix(mcp): support native windows shell execution for local servers` 21:17:37Z (re-open of #25896 closed 19:36:17Z — same head SHA `fa38b038ff7b` survives across the close→reopen cycle, candidate for a sub-class L "close-reopen with SHA preservation" sighting)
- **#25919** `0809cac77aec` adavila0703 `fix(opencode): default temperature for openai-compatible config models` 21:13:48Z (NEW)
- **#25917** `65299607d29a` nabilfreeman `fix(shell): advertise actual default timeout in tool description` 21:01:13Z (NEW)
- **#25915** `a221a11a2a99` jlongster `fix(tui): filter only connected workspaces in dialog` 20:33:13Z (open at Add.364, still open here, last update 20:50:00Z)
- **#25911** `c3e404b4cc09` jlongster — **MERGED 19:53:06Z** (already noted at Add.364)
- **#25909** `916eb3aabe3d` jliounis `feat(websearch): add Perplexity backend (default), keep Exa as alt` 18:42:23Z
- **#25907** `70712fd7cf11` srivenkateswaran6002 `refactor: remove unused DynamicDescription hack in tool.ts` 18:22:12Z
- **#25905** `62ab5177d5ef` JosephITA `feat: make modified files in sidebar clickable to open with OS default app` 18:08:11Z
- **#25902** `92047247c45d` 3351163616 `fix(tui): stop plugin selection mouse jumps` 17:59:41Z
- **#25901** `f9502791b16d` truenorth-lj — **CLOSED 20:25:55Z** (`fix(acp): return stopReason: cancelled (not end_turn) on user cancel`)
- **#25898** `1bbe5a78f00f` jackmazac — CLOSED 20:25:58Z `fix(tui): list root sessions in session picker` (synchronized close with #25901: 3-second gap; candidate cross-author bot-driven sweep)
- **#25896** ajpintos — CLOSED 19:36:17Z (precursor to #25920 re-open; SHA-preservation predicate)
- **#25894** `760a2163fba2` jlongster — **MERGED 20:39:37Z**

### openai/codex (15)
- **#21251** `28100c84aa66` owenlin0 `chore(app-server-protocol): split up v2.rs` 21:45:33Z (NEW)
- **#21250** `11750256e878` bolinfest `app-server: keep thread PermissionProfile immutable` 21:45:03Z (NEW; opens **30s after** #21251; second-author co-burst signature)
- **#21249** `ccffb25261bf` aibrahim-oai `Propagate compact cache request fields` 21:41:56Z (NEW)
- **#21243** `c6fdf88f19f4` fcoury-oai — **MERGED 21:24:29Z** `[codex] fix TUI turn items view fixtures`
- **#21238** `372ae11e5df3` rhan-oai `add deferred image content reads` 20:46:00Z (NEW)
- **#21237** `5310c647eef4` rhan-oai `add thread turn item paging` 20:45:58Z (NEW)
- **#21236** `0df79765538a` rhan-oai `add image generation content model` 20:45:56Z (NEW)
- **#21235** `679b121ef111` canvrno-oai `[codex] Fix TUI wrapping for external borrowed slices` 20:40:09Z (carried from Add.364)
- **#21234** `58fc02feee8a` viyatb-oai — **MERGED 20:43:38Z** `fix(linux-sandbox): isolate Linux sandbox synthetic mount registry per user`
- **#21231** `3952b10e2843` leoshimo-oai `Support Always Allow for MCP app messages` 19:26:23Z
- **#21225** `ae63488d861b` owenlin0 — MERGED 18:36:14Z `app-server: ignore persist_extended_history param`
- **#21224** `92d9a190135` xli-oai `Add workspace announcement polling client` 18:01:25Z
- **#21223** `49ecb67c6d66` xli-oai `Add workspace message backend client plumbing` 18:01:05Z (xli-oai doublet at 20s gap; W17-synth-101 sub-2-minute single-author doublet replay)
- **#21221** `baaea5229eb7` pakrym-oai — MERGED 19:14:00Z `[codex] Use shared app-server JSON-RPC error helpers`
- **#21220** `f0797a8b3a6d` viyatb-oai — MERGED 17:51:00Z `chore: add minimal proxy egress diagnostics`

**Codex new-PR rate this tick: 6 OPEN + 4 MERGED inside 4h47m wall-clock = ~2.1 events/h.** Three rhan-oai PRs opened in **4 wall-clock seconds** (20:45:56Z, 20:45:58Z, 20:46:00Z, Δ=2s/PR) — exact replay of the W17-synth-92 / Add.364 J-class same-second triplet signature, on **disjoint** sub-surfaces (deferred image reads / thread paging / image gen). **NEW: this is a J-class triplet (not quartet) with the same Δ=2s arithmetic.**

### BerriAI/litellm (15)
- **#27235** `c06657e2bd96` oss-agent-shin `fix(sso): /sso/debug/callback shows full JWT claims + parsed fields` 21:37:53Z (NEW)
- **#27234** `2993e45ad18e` Michael-RZ-Berri `[Fix] Allow non-admin compliance path reads` 21:35:30Z (NEW)
- **#27233** `052f02fa473b` ishaan-berri 21:24:20Z (sub-class K member 5/5)
- **#27232** `bec93c80c8c3` oss-agent-shin 21:19:59Z (cross-author K co-iteration)
- **#27231** `f624132babc3` ishaan-berri 21:14:31Z (K member 4/5)
- **#27230** `21ac955a60c2` ishaan-berri 21:12:31Z (K member 3/5)
- **#27229** `17656d9aad8f` ishaan-berri 21:05:22Z (K member 2/5)
- **#27228** `4d27804ae72f` bcyrill `[Feat] UnifiedLLMGuardrails: streaming action protocol (wait/modify/block)` 20:59:24Z
- **#27227** `63f6f1aeb93d` yuneng-berri — **MERGED 20:57:05Z** `[Fix] UI: Clear Admin Session Cookies Before Establishing Invited User's Session`
- **#27226** `9de49c7b044d` ishaan-berri 20:26:04Z (K member 1/5)
- **#27225** `6769c8b66fe5` stuxf `[Security] Clear AWS Inspector CVE findings on Docker image` 20:22:30Z (3rd stuxf security PR this week — W17-synth-101 stuxf triplet extends to quartet candidate)
- **#27224** `c840bc04447` ryan-crabbe-berri `[Fix] Team UI: handle legacy dict shape for metadata.guardrails` 20:19:45Z
- **#27223** `a1ce7d9dac31` VANDRANKI `fix(anthropic): cap budget->effort at "high" when model does not support "xhigh"` 20:17:05Z
- **#27222** `87d2b98a2285` Michael-RZ-Berri `[Feat] Decouple S3 audit-log config via s3_audit_callback_params` 19:52:29Z (Michael-RZ-Berri doublet with #27234, 1h43m gap, both `[Fix]`/`[Feat]` prefixed)
- **#27221** `209bd0b9061f` pnookala-godaddy `fix(proxy): sort spend updates to prevent DB deadlocks` 19:50:51Z

### google-gemini/gemini-cli (10)
- **#26545** `79ad78e613d6` gemini-cli-robot `fix(patch): cherry-pick 3627f47 to release/v0.41.0-pr-26542 → v0.41.1` 21:41:57Z (NEW; bot-driven cherry-pick)
- **#26544** `4ede53faa96e` gemini-cli-robot `fix(patch): cherry-pick 3627f47 to release/v0.42.0-preview.0-pr-26542 → v0.42.0-preview.1` 21:41:37Z (NEW; **20s gap from #26545** — bot-driven sub-30s release-doublet, exact W17-synth-101 bot-discriminator signature)
- **#26543** `67e67a869f80` golba98 `docs: update README preview image` 21:29:44Z (NEW)
- **#26542** `ce05d74004690` galz10 — **MERGED 21:37:15Z** `fix(core): allow redirection in YOLO and AUTO_EDIT modes without sandboxing` (this is the SHA cherry-picked into #26544/#26545 4m22s after merge — bot-cron tight loop)
- **#26540** `11eadac9affc` Abhijit-2592 `fix(core): resolve policy engine bugs affecting tool approvals` 21:04:56Z (NEW)
- **#26538** `4f1ae6a373be` gemini-cli-robot `chore(release): bump version to 0.43.0-nightly.20260505.gf5c0977e9` 20:50:52Z
- **#26537** `9eaf143f2e3d` gemini-cli-robot `Changelog for v0.42.0-preview.0` 20:42:42Z
- **#26536** `0c65680787a6` alexandrevarga `feat(core): add system-wide fallback for ripgrep detection` 20:32:24Z
- **#26535** `34ea5b5f7dac` SandyTao520 `Tighten private Auto Memory patch allowlist` 19:58:01Z
- **#26534** `e9ce4a4d2d57` joshualitt `fix(core): Fix chat corruption bug in context manager` 19:51:28Z
- **#26532** `54626166336b` Abhijit-2592 — **MERGED 20:05:34Z** `fix(core): reject numeric project IDs in GOOGLE_CLOUD_PROJECT (#24695)` (Abhijit-2592 pair: #26540 open + #26532 merged inside 1h6m → single-author merge-then-open cadence)

### QwenLM/qwen-code (10)
- **#3856** `ecbbba1595b1` B-A-M-N `feat(cli): polish --add-dir / --include-directories feature` 14:36:30Z (updated 21:47:21Z — long-tail metadata touch, ~7h after open)
- **#3855** `b1757402fdb3` yiliang114 `feat(installer): verify installation release assets` 13:14:47Z
- **#3854** `e8b59b89a767` yiliang114 `ci: add Qwen Code issue follow-up bot workflow` 12:53:45Z
- **#3853** `16a4af998281` yiliang114 `feat(installer): add hosted install release alias` 11:58:37Z
- **#3852** `4fd7d92358850` qiuqiuwen25 — **MERGED 17:57:31Z** `fix(core): activate skills from discovered result paths`
- **#3850** `09a62b2f2f6e` yiliang114 `refactor(core): classify retry errors` 10:51:48Z (yiliang114 quartet today: #3850, #3853, #3854, #3855 — 4 PRs in **2h22m**, all open, disjoint sub-surfaces)
- **#3849** `0c2876fb8da3` B-A-M-N `feat(models): add cross-authType model resolution to ModelRegistry and ModelsConfig` 10:34:50Z
- **#3848** `a0daf50c065f` B-A-M-N `fix(memory): route auto-memory recall selector to fast model` 10:25:54Z
- **#3847** `68b5a90f6ab5` doudouOUC `feat(telemetry): inject traceId/spanId into debug log files for OTel correlation` 09:42:37Z
- **#3844** `7f06fee3ed2a` wenshao `feat(tools): add WebSearch tool with prompt-injection defenses` 05:40:31Z

### charmbracelet/crush (8)
- **#2809** `61c109eaedfa` taciturnaxolotl `fix(ui): allow oauth modals to consume enter` 20:45:15Z (NEW)
- **#2808** `52aa09aad1bb` ilgax `fix(ui): prevent duplicate skills from rendering` 20:39:40Z (NEW; ilgax + taciturnaxolotl both touch `fix(ui):` scope inside 5m35s — two-author UI-fix mini-cluster)
- **#2807** `b796f550716a` taciturnaxolotl `fix(summarize): reauthenticate oauth tokens in summarize path` 20:08:11Z (taciturnaxolotl doublet with #2809, 37m04s gap)
- **#2805** `1ebe35abf37b` taciturnaxolotl `fix(agent): drain queued messages after manual session summarize` 17:56:04Z
- **#2803** `fd5f9301283778` taciturnaxolotl — **MERGED 17:18:25Z** `bug: yollo mode via flag doesn't activate prompt`
- **#2801** `de9d901ef6f9` ardevd `chore: fixed typo in hooks README` 07:05:39Z
- **#2800** `3394b9fb8fd5` BrunoKrugel `feat(tools): create an allow list for MCP tools` 02:53:51Z
- **#2790** `358d5271f598` ilgax — **CLOSED** (last update 15:14:55Z) `fix: hooks silently fail on Windows due to missing sh`

**Crush single-day taciturnaxolotl monopoly**: 4 PRs (#2803 merged, #2805 open, #2807 open, #2809 open) — 4 of crush's 8 active items today, single author 50% concentration; W17-synth-704 author-concentration leadership rotation note has a corroborating data point.

### block/goose (10)
- **#9039** `e60906e192201` tulsi-builder `add provider-first onboarding` 21:42:01Z (NEW)
- **#9038** `89262adab61f` jh-block `Add Linux Vulkan support for local inference` 21:32:16Z (NEW)
- **#9036** `1b16d5aa7868` DOsinga `Skip automatic fix which crashes` 20:41:21Z (carried from Add.364)
- **#9035** `5db106762411` SarthakB11 `fix(openai): accept null tool_call arguments in streaming chunks` 20:06:45Z
- **#9034** `289ae524573e` alexhancock `feat: ACP streamable http spec compliance` 20:02:28Z
- **#9033** `ef6897674ae2` treebird7 `fix: case-insensitive model name lookup for context_limit resolution` 19:49:30Z
- **#9030** `6c182759ab6c` kalvinnchau `feat: move goose2 provider catalog behind ACP layer` 18:55:02Z
- **#9029** `655e7f4296015` alexhancock — **MERGED 19:20:35Z** `agents: add CLAUDE.mds to mirror AGENTS.mds`
- **#9028** `3fa7bf94aae5` alexhancock — **MERGED 19:31:00Z** `docs: improve goose2 AGENTS.md` (alexhancock merge-pair: #9028 + #9029, both `goose2 / AGENTS` surface, merged 10m25s apart, opened in reverse order — non-LIFO selection)
- **#9023** `1d61323844d4` jh-block — **MERGED 21:11:20Z** `fix(acp): synchronously reap ACP child to avoid SIGCHLD race`

**Goose ACP-surface concentration**: #9023 (acp child reap, MERGED), #9030 (provider catalog → ACP), #9034 (ACP streamable http spec) — **3 ACP-domain PRs in goose this tick**, plus opencode #25901 (acp stopReason, CLOSED) — **cross-carrier ACP/SACP protocol surface emerges as recurring theme today**.

---

## Cross-carrier counts this tick (Add.365)

| carrier | OPEN-new this tick | MERGED this tick | CLOSED-no-merge | total cited |
|---|---|---|---|---|
| anomalyco/opencode | 5 | 2 | 3 | 15 |
| openai/codex | 6 | 4 | 0 | 15 |
| BerriAI/litellm | 8 | 1 | 0 | 15 |
| google-gemini/gemini-cli | 4 | 2 | 0 | 10 |
| QwenLM/qwen-code | 0 | 1 | 0 | 10 |
| charmbracelet/crush | 2 | 1 | 0 | 8 |
| block/goose | 2 | 3 | 0 | 10 |
| **TOTAL** | **27** | **14** | **3** | **83** |

**83 unique PRs cited across 7/7 carriers.** Open:Merge ratio = 27:14 = **1.93** (commit-phase regime per W17-synth-101 OMR classifier). Tick-mean **2.4 OPEN-new/h, 1.3 MERGED/h** corpus-wide. ACP domain is the cross-carrier semantic anchor of this tick; sub-class K (litellm prometheus iteration) and the sub-class J replay (codex rhan-oai 4-second triplet) are the two new structural sightings.
