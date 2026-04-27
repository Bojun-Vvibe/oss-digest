# ADDENDUM-99 — 2026-04-27

**Capture window:** 19:16:00Z → 20:00:22Z (UTC). Window width: **44m22s**.
**Predecessor:** ADDENDUM-98 (closed 19:16:00Z; seeded synth-candidates #235 maintainer-led closure of outsider-opened convergent sub-cluster, #236 third intra-author cadence band at 1h–3h shared-title-stem N=2, #237 conversation-memory / context-architecture as 4th convergent-activity axis). #235 promoted to W17 synth #235; #237 (memory-architecture) promoted to W17 synth #236 (this addendum's two companion notes).

## Headline event — gemini-cli ehedlund #26065 sandbox-handler-leak fix MERGED at 19:48:32Z, retroactively closing synth #233 axis-3 cluster on its own surface

ehedlund #26065 `b1a50a58` `fix(cli): ensure sandbox proxy cleanup and remove handler leaks` merged **2026-04-27 19:48:32Z** (lifespan 1h52m56s — opened 17:55:36Z, the original cross-repo cluster anchor). This is the **first axis-3 (runtime-sandbox/permission, synth #233) merge after the cluster was named**. The cluster seed is now **half-resolved** (gemini-cli side merged; codex evawong-oai N=5 stack #19846-#19852 still ALL OPEN at this capture, #19841 bolinfest cwd-permissions still open). **Add.97 pred #4 (3rd-repo entrant within 4 windows): STILL PENDING — 2/4 windows elapsed, 0 new repos.**

Notably the **merger is the same author (ehedlund)** — gemini-cli does not require maintainer-merge for this contributor on this surface, OR ehedlund is themselves the surface owner. Compare to litellm Add.98 pattern (synth #235): there the maintainer **merged a separate PR on the same surface** rather than the outsider PRs. Here the original PR itself merges. **Two distinct convergence-resolution patterns on different repos within 35min of each other.**

## codex queue — fjord-oai #19865 image-token-cap merges sub-35m, rhan-oai #19863 analytics-flag merges sub-37m, evawong-oai stack STILL ALL OPEN at lifespan 1h47m+

codex in-window merges (2):
- **fjord-oai #19865** `277186ec` `Cap original-detail image token estimates` opened **19:04:51Z** (Add.98 OPEN), merged **19:39:25Z** — lifespan **34m34s**. Image-token-budget surface; touches model-protocol layer (synth #227 axis 1, **LLM-API**) by way of token-accounting.
- **rhan-oai #19863** `215d5a8f` `[codex-analytics] remove ga flag` opened **18:52:56Z** (Add.98 OPEN), merged **19:29:20Z** — lifespan **36m24s**. Analytics-flag cleanup; orthogonal to all 4 named convergent axes (synth #227, #229, #233, #236-memory).

Both author=≠merger pattern (sub-author lands within ≤40m of open) — **NOT a synth #230 self-merge** but the **sub-40m kinetic** matches the maintainer-self-merge cadence band, suggesting maintainer-fast-merge on outsider PRs is approaching the same speed as self-merge for codex this week. This is **synth-candidate #238**: cross-repo OSS-coding-agent maintainer review-to-merge p50 dropping below 40m for outsider PRs whose author is a recognized sub-author (`-oai`-suffixed), distinct from maintainer self-merge cadence (synth #230).

NEW codex OPENs in window:
- **fcoury-oai #19870** `Source-back assistant streaming in TUI` 19:53:59Z
- **evawong-oai #19867** `Ignore legacy Windows cmd sandbox test in CI` 19:47:09Z — **NEW evawong-oai PR** on sandbox surface (CI-side, not stack-member). Note this is **adjacent to** the existing N=5 preserved-path stack but **NOT IN** the stack — it's a CI test-suppression. **evawong-oai N=6 OPEN now on sandbox/permission family** (5 preserved-path + 1 windows cmd sandbox CI). Sub-author OPEN concentration grows.

codex trailing silence at Add.99 capture: **20m57s** since #19865 19:39:25Z.

evawong-oai N=5 preserved-path stack lifespan at capture: **1h47m18s** (since #19852 18:13:13Z–18:17:24Z burst). Add.97 pred #1 (≥2 of #19846-19852 by Add.101) — 2/3 windows elapsed, **0 of 5 stack-member merges**. Slipping toward falsification.

## opencode — kitlangton #24656 sub-4m self-merge metronome refresh, jlongster + rektide + Hubedge open-side build-up

opencode in-window merges (2):
- **rekram1-node #24642** `c361c295` `fix: ensure toolStreaming is set to off by default when using non anthropic models with anthropic sdk` opened **17:19:40Z**, merged **19:16:00Z** — lifespan **1h56m20s**. **Anthropic-SDK toolStreaming default**: this is **synth #227 axis-1 (LLM-API)** — provider-protocol-shape default-flag fix. Same author (rekram1-node) also merged #24630 `tweak: make interleaved reasoning_content default to true for openai compat deepseek setups` 15:17:39Z this morning (Add.94/95). **rekram1-node N=2 in-day same-axis-1 merge series** on opencode (deepseek interleaved-reasoning + anthropic toolStreaming default). **Sub-author N=2 on synth #227 axis-1 within single repo within 6h** — first such opencode-side intra-author convergent-axis-1 doublet in W17 corpus.
- **kitlangton #24656** `5290e9ca` `fix(tui): stabilize Zed editor context polling` opened **19:33:17Z**, merged **19:37:18Z** — lifespan **4m01s**. **kitlangton self-merge sub-5m** — kitlangton is opencode maintainer; this is a synth #230 instance (maintainer self-merge, here N=1 isolated). kitlangton self-merge metronome: prior #24640 `fix(httpapi): accept empty session create body` opened 17:01:43Z merged 17:17:11Z (lifespan 15m28s) and #24626 `fix(httpapi): mount workspace bridge routes` opened 14:50:50Z merged 16:52:48Z (lifespan 2h02m). **kitlangton N=3 same-day self-merges with monotonically contracting lifespan: 2h02m → 15m28s → 4m01s**. This matches synth #97's "monotonically contracting lifespans" extension pattern, now confirmed for kitlangton-on-opencode. Synth #97 cross-repo confirmation.

NEW opencode OPENs in window:
- **jlongster #24661** `Add TUI file context toggle` 19:58:23Z — **jlongster (James Long) is a notable JS/Tauri dev**, first appearance in W17 opencode corpus. First-time-author OPEN.
- **kitlangton #24660** `fix(httpapi): enforce instance route parity` 19:51:40Z — **another kitlangton httpapi PR**: prior in-day series #24626 `mount workspace bridge routes`, #24640 `accept empty session create body`, now #24660 `enforce instance route parity`. **kitlangton N=3 OPEN-or-MERGED httpapi-surface sub-author run within single day.**
- **rektide #24659** `fix(tui): handle SIGINT and SIGTERM for graceful shutdown` 19:48:08Z — TUI signal handling.
- **Hubedge #24653** `feat(agent): allow agents to ignore instructions` STILL OPEN (Add.98 carry-over). Add.98 pred #7 PENDING.

opencode trailing silence at Add.99 capture: **23m04s** since #24656 19:37:18Z.

## gemini-cli — ehedlund #26065 axis-3 closure (above) + cocosheng-g + Adib234 + DavidAPierce open-side surge

gemini-cli in-window merges (1):
- **ehedlund #26065** (covered in headline) — synth #233 axis-3 surface.

NEW gemini-cli OPENs in window (continued queue intake — high open-side activity):
- **Adib234 #26069** `fix(core): handle non-string model flags in resolution` 19:42:35Z — model-flag-resolution fix.
- **cocosheng-g #26068** `fix(cli): make MCP ping optional in list command and use configured timeout` 19:29:43Z — **synth #229 axis-2 (MCP/agent-tool-integration)** — MCP ping + timeout config. cocosheng-g N=2 OPEN on gemini-cli today (also #26060 `provide manual session UUID via command line arg` 17:06:07Z) plus N=2 MERGED earlier (#26052 `provide manual update command when automatic update fails` 16:28:08Z, #26053 `add unit tests for restore ACP command` 17:21:54Z). **cocosheng-g sub-author N=4 in-day on gemini-cli (2 OPEN + 2 MERGED).**
- **Adib234 #26067** `fix(cli): correct alternate buffer warning logic for JetBrains` 19:23:19Z — **Adib234 N=2 OPEN within 19m** (#26067 + #26069). Same-author sub-30m N=2 OPEN burst.
- **DavidAPierce #26066** `Update policy so transient errors are not marked terminal` 18:15:11Z — error-classification policy.
- **pmenic #26063** `fix(security): restrict permissions on project temp dir tree` 17:41:39Z — **synth #233 axis-3 (runtime-sandbox/permission)** — temp-dir permission restriction. **NEW pmenic axis-3 PR** on gemini-cli, opened in Add.98 window. With pmenic also having #26054 `rename adminControlsListner` open, pmenic N=2 OPEN gemini-cli today. **Axis-3 cluster gains a 2nd gemini-cli member (pmenic #26063 alongside ehedlund #26065)** — confirming **intra-repo axis-3 N≥2 within gemini-cli**, not just cross-repo coupling.

gemini-cli trailing silence at Add.99 capture: **11m50s** since #26065 19:48:32Z.

## litellm — silence resumes at 47m+ since #26622, alighazi288 + ryan-crabbe-berri open-side build-up

litellm in-window merges: **0**. Trailing silence at capture: **47m08s** since #26622 19:13:14Z (ryan-crabbe-berri health-check timeout flag).

NEW litellm OPENs in window:
- **alighazi288 #26632** `fix(streaming): emit assistant role on empty completions (immediate EOS)` 19:25:54Z — **synth #227 axis-1 (LLM-API / streaming response shape)**. Adds litellm member to axis-1 cluster.
- **ryan-crabbe-berri #26631** `fix(ui): move 'Store Prompts in Spend Logs' toggle to Admin Settings` 19:07:43Z — UI/admin-settings; orthogonal to current axes. Notable that ryan-crabbe-berri JUST merged #26622 (19:13:14Z) and immediately opens a new PR — **maintainer continues active session**.

Add.98 pred #3 (litellm health-check sub-cluster: at least one of #26621/#26610/#26604 merges within 3 windows): 1/3 windows elapsed, **all still OPEN**. Predict still trending toward eventual merge or close-as-redundant-with-#26622.

## goose — silence resumes, only 1 in-window OPEN

goose in-window merges: **0**. Trailing silence at capture: **1h24m45s** since #8793 18:35:37Z.

NEW goose OPENs:
- **Edu963 #8867** `feat: add Ocultar PII Refinery extension` 19:27:05Z — first-time author; PII redaction extension. Spanish/Portuguese-language verb in title (`Ocultar` = "hide"). Orthogonal to all named axes.

jh-block #8857 (synth #227 4th-repo member, axis-1 reasoning/thinking-content) STILL OPEN at lifespan **10h53m+**. Add.95 pred #6 (merges within 4 windows): 3/4 windows elapsed, very likely to falsify.

## qwen-code — 4th consecutive dormant window, silence at 4h59m+

qwen-code in-window merges: **0**. Trailing silence at capture: **4h59m19s** since #3617 mohitsoni48 15:01:03Z. **qwen-code now in 4–24h cell for 2 consecutive windows.** Add.98 pred #8 (qwen-code remains 4–24h at next capture): **CONFIRMED.** Persistent 4–24h occupancy — counter-example to negative-feedback hypothesis at 4h boundary continues to accumulate.

No new qwen-code OPENs in window. fyc09 #3682, shenyankm #3677, chiga0 N=3, LaZzyMan #3673 ALL OPEN unchanged from Add.98.

## Per-repo trailing-silence at capture (20:00:22Z)

| Repo | Last merge SHA | Merged (UTC) | Silence at capture | Δ vs Add.98 |
|---|---|---|---|---|
| openai/codex | #19865 `277186ec` (fjord-oai) | 19:39:25Z | **20m57s** | +14m00s |
| google-gemini/gemini-cli | #26065 `b1a50a58` (ehedlund) | 19:48:32Z | **11m50s** | −42s |
| BerriAI/litellm | #26622 `44dece10` (ryan-crabbe-berri) | 19:13:14Z | **47m08s** | +44m22s |
| sst/opencode | #24656 `5290e9ca` (kitlangton) | 19:37:18Z | **23m04s** | −19m22s |
| block/goose | #8793 `002440b4` (matt2e) | 18:35:37Z | **1h24m45s** | +44m22s |
| QwenLM/qwen-code | #3617 `414b3304` (mohitsoni48) | 15:01:03Z | **4h59m19s** | +44m22s |

**Cell occupancy at capture:**
- 0–4h cell: {codex (20m57s), gemini-cli (11m50s), litellm (47m08s), opencode (23m04s), goose (1h24m45s)} — **5 repos**
- 4–24h cell: {qwen-code (4h59m19s)} — **1 repo**
- ≥24h cell: **EMPTY** (5 consecutive windows)

**Cell shape: right-skewed-truncated holds for 5 consecutive windows.** Synth #228 metastability extends. qwen-code 4–24h occupancy now 2-window persistent — partial falsification of negative-feedback at 4h boundary becomes 2-observation streak.

## Falsification check on ADDENDUM-98 predictions

1. **Pred #1 (codex evawong-oai N=5 preserved-path: at least 1 of #19846-19852 by Add.100, predict #19846 first)**: **PENDING — slipping.** 1/2 windows elapsed, 0 merges, evawong-oai instead opened **#19867** (sandbox CI test ignore) — adjacent surface, growing N=6 OPEN.
2. **Pred #2 (codex starr-openai #19862 Bazel test merges within 3 windows; bolinfest as merger)**: **PENDING.** #19862 STILL OPEN (1/3 windows). bolinfest opened #19841 cwd-permissions but is occupied on permissions surface, not Bazel. No movement on #19862.
3. **Pred #3 (litellm health-check sub-cluster: at least one of #26621/#26610/#26604 within 3 windows; predict udit-rawat #26621 first)**: **PENDING.** All 3 still OPEN. 1/3 elapsed.
4. **Pred #4 (codex pakrym-oai opens 3rd `Streamline X handlers` PR within 4 windows extending shared-title-stem N=2 to N=3)**: **PENDING.** No new pakrym-oai PR this window. 1/4 elapsed.
5. **Pred #5 (codex jif-oai #19860 `split memories part 2` merges within 2 windows AND `part 3` opened within 4 windows)**: **PENDING.** #19860 STILL OPEN (1/2 windows). No part 3 yet.
6. **Pred #6 (synth #237 conversation-memory axis: 3rd repo entrant within 4 windows; predict opencode kitlangton/thdxr OR litellm context-window PR)**: **PENDING — partial signal.** No clean memory-architecture PR from a 3rd repo this window. Possible weak candidates: opencode jlongster #24661 `Add TUI file context toggle` (file-context surface — adjacent to memory but more UI than architecture). 1/4 elapsed.
7. **Pred #7 (Hubedge opencode #24653 maintainer request-changes within 2 windows; predict NO merge in next 4 windows; renamed or closed)**: **PENDING — Hubedge #24653 STILL OPEN unchanged.** 1/2 windows for review-event sub-prediction; 1/4 for merge-non-event sub-prediction.
8. **Pred #8 (qwen-code remains in 4–24h cell at next capture)**: **CONFIRMED.** qwen-code at 4h59m19s, cleanly inside 4–24h cell. **First confirmed Add.98 prediction.**

**Pred outcome tally: 1 confirmed (pred #8), 0 falsified, 7 pending.** Same recovery rate as Add.98 (1 confirmed at first available test).

## Open queue notable changes at capture

- **gemini-cli ehedlund #26065 axis-3 merge half-resolves synth #233 cross-repo cluster on the gemini-cli side; codex preserved-path stack still all open** (asymmetric resolution kinetics — gemini-cli faster than codex on axis-3 surface).
- **gemini-cli pmenic #26063 axis-3 temp-dir permission PR**: gemini-cli now has **intra-repo N=2 axis-3 OPEN** (pmenic #26063 + ehedlund #26065 just before merge), confirming axis-3 is not purely cross-repo but also intra-repo.
- **opencode kitlangton same-day N=3 self-merge series with monotonically contracting lifespan (2h02m → 15m28s → 4m01s)**: synth #97-pattern cross-repo confirmation on opencode/kitlangton.
- **opencode rekram1-node sub-author intra-day axis-1 doublet** (#24630 deepseek interleaved-reasoning, #24642 anthropic toolStreaming default): first opencode-intra-author axis-1 N=2 in W17.
- **codex evawong-oai N=6 OPEN** on sandbox/permission family (N=5 preserved-path stack + #19867 windows cmd sandbox CI). Highest sub-author intra-repo OPEN concentration this week.
- **codex sub-author maintainer-merge p50 dropping toward 35-40m for outsider sub-author PRs** (rhan-oai 36m24s, fjord-oai 34m34s in-window) — synth-candidate #238.
- **gemini-cli cocosheng-g sub-author N=4 in-day** (2 OPEN + 2 MERGED), with one OPEN being axis-2 MCP-ping surface.
- **gemini-cli Adib234 sub-30m N=2 OPEN burst** (#26067 + #26069 in 19m).
- **litellm alighazi288 #26632 axis-1 streaming-EOS adds litellm member to active axis-1 cluster.**
- **goose silence resumes** with only 1 in-window OPEN (Edu963 #8867 PII extension); no maintainer activity this window.
- **qwen-code 2-window persistent 4–24h cell occupancy** — Add.98 pred #8 confirmed; counter-evidence to negative-feedback at small boundaries continues.

## Predictions for ADDENDUM-100

1. **Highest-confidence**: codex evawong-oai N=5 preserved-path stack — at least 1 of #19846-19852 merges by Add.101 (1 more window). If still 0 by Add.100, the bottom-stack (#19846 policy primitive) becomes increasingly likely first-mover.
2. **High-confidence**: opencode kitlangton self-merge metronome continues — predict **#24660 `enforce instance route parity` merges within 2 windows at lifespan ≤30m**, extending monotonic-contracting series (next datapoint must be < 4m01s OR break the monotonic pattern).
3. **High-confidence**: gemini-cli pmenic #26063 axis-3 temp-dir PR merges within 4 windows; predict it merges before any of the codex evawong-oai stack PRs (gemini-cli axis-3 resolution kinetics > codex axis-3 kinetics — already evidenced by ehedlund #26065 merging while codex stack stagnates).
4. **High-confidence**: synth-candidate #238 (sub-author p50 → 35-40m for outsider `-oai` PRs) — predict **next 3 codex outsider-sub-author merges all have lifespan < 60m**. Falsifies if any one exceeds 90m.
5. **Medium-confidence**: gemini-cli cocosheng-g #26068 axis-2 MCP-ping PR merges within 3 windows. Adds to synth #229 axis-2.
6. **Medium-confidence**: opencode rekram1-node opens a 3rd axis-1 PR within 6 windows extending intra-author intra-day axis-1 doublet to triplet.
7. **Speculative**: qwen-code remains in 4–24h cell for 3rd consecutive window (silence ≥6h at next capture); negative-feedback hypothesis at 4h boundary moves toward formal falsification at 3 observations.
8. **Speculative**: opencode Hubedge #24653 `allow agents to ignore instructions` gets a maintainer comment within 2 windows challenging title semantics (kitlangton or thdxr); does NOT merge in next 6 windows.

## Cross-references

- **Synth #97** (monotonically contracting lifespans within self-merge series): EXTENDED to opencode/kitlangton this window (N=3 series 2h02m → 15m28s → 4m01s).
- **Synth #224** (sub-author N=2-exactly cardinality cap): NO new test events this window.
- **Synth #225, #227** (LLM-API axis-1): GAINS opencode rekram1-node N=2 intra-day intra-author doublet; GAINS litellm alighazi288 #26632 streaming-EOS open. Cluster persists with opencode/litellm/codex/qwen-code/goose all touched.
- **Synth #226** (outsider re-file silence-break): harryzsh #26627 (re-file with 11s gap) STILL OPEN at lifespan 1h55m+. Add.97 pred #2 (re-file merges by Add.99): **1/2 windows elapsed; if not merged by Add.99 close, slipping.** Currently un-merged.
- **Synth #228** (corpus dormancy distribution metastability): 5-window right-skewed-truncated holds. qwen-code 2-window 4–24h cell persistent.
- **Synth #229** (MCP/agent-tool-integration axis-2): GAINS gemini-cli cocosheng-g #26068 MCP-ping PR. Cluster extends.
- **Synth #230** (maintainer self-merge sub-30m N=2 on adjacent surface): NO new N=2 doublets this window; kitlangton has N=1 isolated #24656 + larger N=3 series via synth #97 kinetic.
- **Synth #233** (runtime-sandbox/permission axis-3): **HALF-RESOLVED on gemini-cli side via ehedlund #26065 merge; gains gemini-cli pmenic #26063 as intra-repo N=2 OPEN; codex evawong-oai N=5 stack still OPEN with N=6 sub-author OPEN concentration after #19867 added**. Axis-3 strengthens.
- **Synth #234** (corpus measurement-artifact regime / `gh pr list` default-sort backfill bias): No new measurement events this window.
- **NEW Add.99 synth-candidate**:
  - **#238**: Cross-repo OSS-coding-agent **maintainer-fast-merge cadence on outsider sub-author PRs** dropping toward p50 ≈ 35-40m for `-oai`-suffixed authors on codex (rhan-oai 36m24s, fjord-oai 34m34s in-window), distinct from synth #230 (maintainer-self-merge sub-30m). Two distinct fast-merge cadence bands now visible: self (sub-30m) and outsider-sub-author (35-40m).

(Two Add.99-companion `_weekly/` notes: synth #235 maintainer-led-closure-of-outsider-cluster pattern (promoted from Add.98 candidate #235, with Add.99 cross-repo evidence from gemini-cli ehedlund self-merge contrast) and synth #236 conversation-memory / context-architecture as 4th convergent-activity axis (promoted from Add.98 candidate #237; also updated with gemini-cli #25409 ContextManager merge confirmation and codex jif-oai split-memories part 2 still OPEN).)
