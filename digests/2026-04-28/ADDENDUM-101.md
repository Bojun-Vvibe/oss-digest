# ADDENDUM-101 — 2026-04-28 (capture 2026-04-27T21:25Z)

**Capture window:** 20:42:00Z → 21:25:00Z (UTC). Window width: **43m00s**.
**Predecessor:** ADDENDUM-100 (closed 20:42:00Z; carry-over preds: Add.97 #1 evawong-oai N=5 stack ≥2 merged FINAL WINDOW; Add.100 axis-4 ≥1 qwen-code OR goose merge; Add.100 kitlangton series predicate (continue sub-5m OR end); Add.100 axis-1 ≥1 goose/qwen-code merge by Add.103).

## Headline event — kitlangton self-merge series extends to N=7 with #24667 sub-4m merge, **bimodal-oscillating hypothesis (synth-candidate #239) confirmed**; series then **interrupts** with #24671 OPEN (no merge) crossing 33m+ silence

kitlangton in this capture window: **#24667** `test(httpapi): cover full OpenAPI route inventory` opened 20:47:33Z merged **20:51:24Z** SHA `acd15dcc8ab5a01cf8c0f2ef3e21c71e2450a9f2` (lifespan **3m51s** — Mode A sub-5m); then **#24671** `fix(httpapi): preserve optional session fields` opened **21:18:45Z** still OPEN at capture close (lifespan **6m15s+**, branch `kit/fix-httpapi-session-list-main`, SHA `c3d10af784e68277b15fee5ac756b1331b13b485`). Updated lifespan sequence for the same-day series: **2h01m58s → 15m28s → 4m01s → 15m51s → 14m14s → 3m40s → 3m51s → [#24671 OPEN]**.

Add.100 Pred F (bimodal: kitlangton next merge will be sub-5m OR 12–16m, NOT in 6m–11m gap, NOT >25m): **#24667 lifespan 3m51s → TRUE** (lands cleanly in Mode A). The **httpapi sub-series** is now N=5 (#24626, #24640, #24660, #24663, #24667) with sub-series lifespans **2h02m → 15m28s → 15m51s → 3m40s → 3m51s** — same bimodal split persists at the sub-series level. The full N=7 session also breaks Add.100's other implicit prediction by introducing a **first non-immediately-merging entry** (#24671 OPEN at 6m15s+ and ticking) — this is the **first entry in the series whose lifespan can land in the forbidden 6m–11m gap**. Predicate update: if #24671 merges before 21:30Z, the bimodal hypothesis takes its first real strain. If #24671 either merges sub-5m (improbable, would require ≤sub-90s remaining) or pushes past 12m, bimodal holds. **synth-candidate #239 PROMOTED to synth #239 this tick** (independent of #24671 outcome — N=7 with 6 of 7 fitting the bimodal split is sufficient evidence for promotion; #24671 outcome becomes a Pred F-extension test).

## opencode — sanchitmonga22 #24664 CLOSED at 20:42:21Z, immediately re-opened as #24666 at 20:47:12Z — **same-author re-file pattern** within 5min

**sanchitmonga22 #24664** `feat(plugin): add model.before hook for routing-style plugins` opened 20:28:30Z **CLOSED 20:42:21Z** (lifespan-to-close **13m51s**, NOT merged — closed by author). Then **#24666** `feat(plugin): add model.before hook` opened 20:47:12Z (same author, same branch `feat/plugin-model-before-hook`, title shortened by removing ` for routing-style plugins` suffix). This is a **same-author same-branch re-file** with a **title narrowing** (drops the editorial "routing-style plugins" framing) — structurally distinct from synth #82 (duplicate same-time PRs by independent authors) and synth #89 (cross-repo author handoff). **First W17 occurrence of intra-author intra-branch close-and-reopen with title narrowing.** Adjacent to **synth #227 axis-1 (LLM-API)** at the **plugin-hook** layer, not the SDK layer.

opencode in-window merges: **#24667** (kitlangton, 3m51s, see above). NEW OPENs: **#24666** (sanchitmonga22 re-file), **#24671** (kitlangton, see above). CLOSED: **#24664** (sanchitmonga22 re-file source). opencode trailing silence at capture: **34m02s** since #24667 20:51:24Z merged.

## codex — joeytrasatti-openai #19874 MERGED at 21:02:41Z (lifespan 27m55s) confirms Add.99 candidate #238 sub-author maintainer-fast-merge; charley-openai #19878 NEW telemetry OPEN

**joeytrasatti-openai #19874** `798de226379c01538b11ff9bdcfe2b8c9a511b20` `[codex-backend] Prefer state git metadata in filtered thread lists` opened 19:58:23Z merged **21:02:41Z** lifespan **27m55s** (calculated from the original opening 20:34:46Z per gh: 19:58:23Z is the alternate display; actual mergedAt 21:02:41Z, openedAt 20:34:46Z → **27m55s**). This is a **`-openai` suffix author** (not `-oai`) so does NOT directly validate Add.99 candidate #238's `-oai` predicate, but pairs with the **broader sub-author maintainer-fast-merge family** (lifespan p50 < 40m). Combined with rhan-oai #19863 36m24s and bolinfest #19854 9m58s (Add.100 prev-window), codex **merged-PR lifespan p50 in last 6h ≈ 28min** — supports Add.99 #238 distributional claim while leaving the **`-oai` suffix specificity** unconfirmed.

**charley-openai #19878** `Ingest node_repl stderr telemetry spans` 20:56:49Z OPEN — telemetry-stream ingestion. First W17 charley-openai appearance. Orthogonal to the 5 named axes (telemetry-ingestion is **axis-1-adjacent at the observability layer** — same as goose #8870 from Add.100, which I flagged as a 6th-position-or-sibling resilience family; **two cross-repo observability/telemetry instances within 24min** — codex #19878 + goose #8870 — is a **weak axis-6 (observability) candidate** with N=2).

evawong-oai N=5 preserved-path stack lifespan at capture: **3h11m+** since #19852 18:13:13Z–18:17:24Z burst. Add.97 pred #1 (≥2 of 5 merged by Add.101 close): **0/5 merged → predicate FAILED**. **synth-candidate #240 promoted this tick** with confirmed evidence: cross-author cadence transfer fails (kitlangton-class N=6 same-day self-merge cadence does NOT inherit to evawong-oai's N=5 stacked PR family despite both being maintainer-internal-with-suffix authors). codex trailing merged-silence at capture: **22m+** since #19874 21:02:41Z.

NEW codex carry-over OPEN axis-relevant: **colby-oai #19875** `Strip connector provenance metadata from custom MCP tools` (20:36:49Z, axis-2/MCP) still OPEN at 48m+ — provenance-strip family of 1; **fcoury-oai #19870** `feat(tui): source-back assistant streaming in TUI` (19:53:59Z, axis-1 streaming + TUI) still OPEN at 1h31m+.

## gemini-cli — devr0306 #26079 MERGED 21:17:32Z resilience+axis-3 cross-cut; cocosheng-g #26068 MCP-list-timeout MERGED 20:49:06Z confirms axis-2 within 7min of capture open

gemini-cli in-window merges (3):
- **devr0306 #26079** `820a4e3c92984195559c1de373c3f22a4c4bb6a1` `fix(core): better error message for failed cloudshell-gca auth` opened 20:51:30Z merged **21:17:32Z** — lifespan **26m02s**. Auth error-messaging improvement = **axis-5 (resilience, mask-and-surface position per synth #237 framing)** + **axis-3-adjacent (auth/sandbox surface)**. devr0306 is **N=2 in W17** with cross-axis spread (#26059 ECONNRESET/ETIMEDOUT messaging in Add.99 — same author, same "better error message" verb shape).
- **cocosheng-g #26068** `7d08f843053b87742379755f23844870dc667c97` `fix(cli): make MCP ping optional in list command and use configured timeout` opened 19:29:43Z merged **20:49:06Z** — lifespan **1h19m23s**. **synth #229 axis-2 (MCP)** + **synth #237 axis-5 (timeout-policy/resilience)**. **First W17 PR title that explicitly cross-cuts axis-2 (MCP) and axis-5 (resilience)** at the MCP-ping-timeout sub-surface. cocosheng-g is **N=4 in W17 gemini-cli** (#26052 manual-update, #26053 ACP test, #26060 manual session UUID, #26068 MCP ping) — **single-author N=4 same-day same-repo** matching synth #97 cross-repo-extension shape but in gemini-cli (not opencode).
- **cocosheng-g #26060** `6cc0b1b136450f529647144380a8107d59fdafdf` `feat(cli): provide manual session UUID via command line arg` opened 17:06:07Z merged **21:18:43Z** — lifespan **4h12m36s**. cocosheng-g session-UUID = **synth #236 axis-4 (conversation-memory) adjacent** at the session-identifier layer.

NEW gemini-cli OPENs: **Adib234 #26078** `fix(cli): preserve Request headers in DevTools activity logger` 20:44:07Z (Adib234 N=2 in window — also #26067 JetBrains MERGED earlier). Adib234 N=2 within 76min, both `fix(cli): ... preserve/correct ... [terminal/devtools] ...` verb shape = **TUI-environment-probe family** (synth-candidate #241 from Add.100 strengthens to N=3 cross-repo: gemini-cli #26067 + #26078 + codex #19867).

gemini-cli trailing silence at capture: **6m28s** since #26079 21:17:32Z. Joshua litt #26073 (axis-4 generalist profile) still OPEN at 56m+.

## litellm — three-PR axis-1 cluster opens within 5min: #26634 + #26635 + #26636

litellm in-window merges: **0**. Trailing merged-silence: **2h11m+** since #26622 19:13:14Z. NEW OPENs in capture window:
- **freddyhaddad #26636** `4460c8b54106b878fced76e0874c299131891559` `fix(anthropic): preserve all tool_calls when an OpenAI delta contains multiple` 21:20:37Z — **synth #227 axis-1 (LLM-API: anthropic-adapter tool-call preservation across openai-delta translation)**. Verb shape `preserve all tool_calls` = **request-translation fidelity** position (the 4th lifecycle position synth #238 identified as omitted from synth #237).
- **yuneng-berri #26635** `[Fix] Route end-user, tag, team-membership, and org spend through the cross-pod counter` 21:17:13Z — multi-tenant accounting cross-pod routing. Orthogonal to 5 named axes.
- **ayushh0110 #26634** `1b0ef5f9d7756c658c8ae4632be72b1ea6a12a3f` `fix(mcp): preserve native tools in semantic filter hook` 21:13:35Z — **synth #229 axis-2 (MCP)** + **preserve native tools** verb echoing #26636's `preserve all tool_calls` 7min later by a different author. **First W17 same-window cross-author "preserve X in Y filter/translation" pair** (#26634 ayushh0110 MCP semantic-filter, #26636 freddyhaddad anthropic-openai-delta). Both pin on the **adapter/filter-layer fidelity** sub-surface — this is a **2nd cross-axis convergent micro-cluster** within litellm in 7min: axis-2 + axis-1 sharing a "preserve X across translation" verb.

Carry-over: **alighazi288 #26632** still OPEN at 1h59m+; **musse #26628** still OPEN at 2h49m+; **harryzsh #26627** still OPEN at 3h08m+; **malafronte #26614** `fix(anthropic): preserve reasoning content and add think-tag regression coverage` (16:20:07Z) `4aa6f02beba78299245b4ccade08f1166e102e14` still OPEN at 5h00m+ — **third "preserve" verb** in litellm axis-1 OPEN backlog. **N=3 "preserve <axis-1 content>" OPEN in litellm** (#26614 reasoning, #26634 native-tools, #26636 tool_calls) without a single merged closer.

## qwen-code — quiet trailing 5h42m+; #3682 + #3677 + #3673 axis-1+axis-4 backlog unchanged

qwen-code in-window merges: **0**. Trailing silence: **5h42m+** since #3665 06:38:56Z (the .codex gitignore chore). NEW OPENs in capture window: **0**. Backlog unchanged from Add.100: **fyc09 #3682** (axis-1+axis-4 cross), **shenyankm #3677** (axis-1 MiniMax thinking tags), **LaZzyMan #3673** (axis-4 memory autoSkill). Add.100 axis-4 prediction (≥1 qwen-code OR goose merge): **STILL PENDING** at 0/2 windows elapsed (4 windows total).

## goose — quiet; namanvats-dev #8870 + jh-block #8857 axis-1 OPEN backlog unchanged

goose in-window merges: **0**. Trailing merged-silence: **10h54m+** since #8856 10:31:41Z. NEW OPENs in capture window: **0**. Backlog unchanged from Add.100: **namanvats-dev #8870** (axis-1+observability), **morgmart #8868** (axis-4 skills redesign), **jh-block #8857** (axis-1 reasoning preserve), **Edu963 #8867** (PII).

## Cross-repo synth-candidate inventory at Add.101 close

| # | Candidate | Status |
|---|---|---|
| #238 | sub-author maintainer-fast-merge p50 <40m for codex `-oai` suffix | WEAK (joeytrasatti-openai #19874 27m55s supports p50<40m for `-openai` suffix; **`-oai` specificity unconfirmed**) |
| #239 | kitlangton self-merge series bimodal-oscillating, not monotone-contracting | **PROMOTED THIS TICK** as synth #239 (N=7, Pred F TRUE on #24667) |
| #240 | evawong-oai N=5 stacked PRs do NOT inherit kitlangton-class self-merge cadence; cross-author cadence transfer fails | **PROMOTED THIS TICK** as synth #240 (Add.97 pred #1 FAILED at 0/5 final-window) |
| #241 | terminal-emulator-detection / TUI-environment-probe as candidate axis-5-or-orthogonal | STRENGTHENED (N=3: gemini-cli #26067 + #26078 + codex #19867); still conflated with axis-3 |
| NEW #242 | observability/telemetry as axis-6 candidate (codex #19878 + goose #8870 cross-repo within 24h) | **WEAK seed** (N=2, will revisit at Add.103) |
| NEW #243 | litellm intra-window cross-author "preserve X across translation/filter" verb cluster (#26614 + #26634 + #26636) as adapter-fidelity micro-axis | **WEAK** (N=3 same-repo, no cross-repo confirmation) |

## Predicates entering Add.102

1. **#24671 outcome (kitlangton bimodal stress test):** if merges, lifespan must be sub-5m OR 12–16m to keep bimodal; if 6m–11m or >25m, synth #239's bimodal-shape claim takes its first contrary evidence. Expected resolution: Add.102.
2. **axis-2 MCP (synth #229) cross-repo:** litellm #26634 (ayushh0110MCP semantic-filter) opens a litellm axis-2 entrant alongside codex #19875 (colby-oai provenance-strip) and gemini-cli #26068 (cocosheng-g MCP ping merged). Predict ≥1 of #19875 or #26634 merges by Add.103 → confirms 3-repo merged axis-2 membership in single 24h window.
3. **axis-4 (synth #236) qwen-code/goose merge gap:** qwen-code N=2 axis-4 OPEN backlog (#3673, #3682) age now 11h+/5h+; goose #8868 (skills redesign) age 1h+. Predict ≥1 axis-4 merge in qwen-code OR goose by Add.105 to confirm 5-repo merged axis-4 membership.
4. **synth #240 robustness (cross-author cadence-transfer-fail):** check whether evawong-oai stack's *non-merging* persistence reflects review queue saturation OR PR scope (sandbox-policy primitives needing more review) — if even 1 of #19846-#19852 merges by Add.105, the absolute "transfer fails" framing weakens to "transfer is delayed by review-queue mediation," which is a different claim.

## Verified PR census (this capture, by repo)

opencode: #24671 (O, kitlangton, SHA `c3d10af`), #24667 (M, kitlangton, SHA `acd15dc`), #24666 (O, sanchitmonga22 re-file), #24664 (C, sanchitmonga22 re-file source).
codex: #19878 (O, charley-openai, SHA `963fcb8`), #19874 (M, joeytrasatti-openai, SHA `798de22`), evawong-oai stack #19846-#19852 (5 OPEN, 0 merged at final-window close).
gemini-cli: #26079 (M, devr0306, SHA `820a4e3`), #26078 (O, Adib234), #26068 (M, cocosheng-g, SHA `7d08f84`), #26060 (M, cocosheng-g, SHA `6cc0b1b`).
litellm: #26636 (O, freddyhaddad, SHA `4460c8b`), #26635 (O, yuneng-berri), #26634 (O, ayushh0110, SHA `1b0ef5f`), #26614 (O carry, malafronte, SHA `4aa6f02`).
qwen-code: 0 in-window activity; backlog #3682, #3677, #3673 unchanged.
goose: 0 in-window activity; backlog #8870, #8868, #8867, #8857 unchanged.
