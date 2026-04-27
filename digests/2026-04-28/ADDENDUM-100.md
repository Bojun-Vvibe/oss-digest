# ADDENDUM-100 — 2026-04-28 (capture 2026-04-27T20:42Z)

**Capture window:** 20:00:22Z → 20:42:00Z (UTC). Window width: **41m38s**.
**Predecessor:** ADDENDUM-99 (closed 20:00:22Z; carry-over preds: Add.97 #4 3rd-repo axis-3 entrant within 4 windows STILL PENDING; Add.98 #6 axis-4 3rd-repo entrant PENDING; Add.97 #1 evawong-oai N=5 stack ≥2 merged STILL 0/5; Add.99 candidate #238 sub-author maintainer-fast-merge p50<40m for codex `-oai`-suffixed authors).

## Headline event — opencode kitlangton self-merge metronome accelerates to 4-PR same-day series with sub-4m terminal lifespan, falsifying "monotone-contracting" Add.99 framing

kitlangton in this capture window: **#24660** `fix(httpapi): enforce instance route parity` opened 19:51:40Z merged **20:07:31Z** (lifespan **15m51s**), **#24662** `fix(tui): preserve Zed context on terminal focus` opened 20:11:24Z merged **20:25:38Z** (lifespan **14m14s**), **#24663** `test(httpapi): verify reflected route mounts` opened 20:26:18Z merged **20:29:58Z** (lifespan **3m40s**). Combined with prior Add.99 series #24626/#24640/#24656 (lifespans 2h02m → 15m28s → 4m01s), kitlangton's **same-day self-merge series is now N=6 with lifespan sequence: 2h02m → 15m28s → 4m01s → 15m51s → 14m14s → 3m40s**. The Add.99 claim of *monotone-contracting* lifespan is **falsified at position 4** (#24660 lifespan 15m51s > #24656 lifespan 4m01s). The actual signature is **bimodal**: a "small fix → sub-5m" mode and a "non-trivial fix → 14–16m" mode, oscillating rather than monotone-contracting. **synth #97's "monotonically contracting lifespans" pattern does NOT generalize to N≥4 within a single author-day session.** This is **synth-candidate #239** (falsification refinement of synth #97 cross-repo extension).

## opencode — jlongster #24661 sub-12m merge confirms axis-4 (memory/context) 3rd-repo entrant; Add.98 pred #6 RESOLVED

**jlongster #24661** `fab17688` `feat(core): file context improvements and option to disable` opened 19:58:23Z merged **20:10:14Z** — lifespan **11m51s**. Title verb shape `feat(core): ... improvements and option to disable` on **file-context surface** = agent-state-layer architectural feature. Add.99 had marked this as "weak axis-4 candidate (more UI than architecture)"; the final merged title `feat(core)` (NOT `feat(tui)` or `feat(ui)`) and the **`option to disable`** clause confirm this is a **core-layer agent-state surface change**, not a TUI cosmetic. Combined with codex jif-oai #19860 `split memories part 2` (still OPEN, lifespan now **1h54m+**) and gemini-cli joshualitt #25409 `wire up the new ContextManager and AgentChatHistory` (Add.98), **axis-4 (synth #236) now has confirmed 3-repo membership: codex + gemini-cli + opencode within ~6h cross-repo span.** Add.98 pred #6 (axis-4 3rd-repo entrant within 4 windows): **RESOLVED at window 2/4** — ahead of schedule.

opencode in-window merges (4): kitlangton #24660, jlongster #24661, kitlangton #24662, kitlangton #24663 (all sub-16m). NEW OPEN: **sanchitmonga22 #24664** `feat(plugin): add model.before hook for routing-style plugins` 20:28:30Z — plugin-routing surface, adjacent to synth #227 axis-1 (LLM-API surface) but at the *plugin-hook* layer, not the SDK layer. **First-time-author** in W17 opencode corpus. opencode trailing silence at capture: **12m02s** since #24663 20:29:58Z.

## codex — colby-oai #19875 NEW MCP-metadata-strip OPEN extends synth #229 axis-2 cluster; rektide-style sub-author surge continues

codex in-window merges: **0**. NEW OPENs in window:
- **colby-oai #19875** `Strip connector provenance metadata from custom MCP tools` 20:36:49Z — **synth #229 axis-2 (MCP/agent-tool-integration)** + **provenance-stripping** sub-surface. Title verb `Strip ... provenance metadata` indicates a **redaction/cleanup** concern within the MCP tool spec layer. This is the **first MCP-provenance-redaction PR** in W17 codex corpus. Pairs structurally with gemini-cli pmenic #26063 `restrict permissions on project temp dir tree` (Add.99 axis-3): both are **defense-in-depth cleanup** PRs that are not bug-fixes for a current break but **proactive narrowing** of an existing surface.
- **joeytrasatti-openai #19874** `[codex-backend] Prefer state git metadata in filtered thread lists` 20:34:46Z — backend git-metadata preference. Orthogonal to all 4 named axes.

evawong-oai N=5 preserved-path stack lifespan at capture: **2h28m+** since #19852 18:13:13Z–18:17:24Z burst. Add.97 pred #1: 3/3 windows elapsed, **0 of 5 stack-member merges** — **predicate FAILED** (>2 of #19846-#19852 merged by Add.101 was the prediction; we are now AT Add.100 with 0 merges and only 1 window remaining; barring a 5-stack burst-merge in the next ~40min capture, this **falsifies** the stacked-PR-self-merge cadence assumption applied to evawong-oai's preserved-path family). **synth-candidate #240** (evawong-oai stacked sub-author PRs do NOT inherit kitlangton-class self-merge cadence; cross-author cadence transfer fails).

codex trailing silence at Add.100 capture: **1h13m+** since #19865 19:39:25Z. Add.99 candidate #238 (sub-author maintainer-fast-merge p50 <40m): **stalled** — no in-window merge to validate.

## gemini-cli — joshualitt #26073 NEW open continues axis-4 saga, carycooper777 N=2 same-second docs duplicate

gemini-cli in-window merges (1):
- **Adib234 #26067** `31337b92` `fix(cli): correct alternate buffer warning logic for JetBrains` opened 19:23:19Z merged **20:14:02Z** — lifespan **50m43s**. JetBrains alternate-buffer terminal-emulator detection. Orthogonal to 4 named axes (terminal-emulator-detection layer is a **5th potential axis** if it accumulates further evidence). **synth-candidate #241** (terminal-emulator-detection / TUI-environment-probe as candidate axis-5; current evidence N=1 in gemini-cli + evawong-oai #19867 windows-cmd-sandbox CI suppression = N=2 cross-repo TUI-environment family, but conflated with axis-3 on codex side).

NEW gemini-cli OPENs:
- **joshualitt #26073** `Fix remaining issues with generalist profile` 20:28:24Z — joshualitt is the **same author as #25409 ContextManager wire-up** (axis-4 anchor). `generalist profile` likely refers to agent-profile/persona/instruction-template layer = axis-4 adjacent. **joshualitt N=2 axis-4-or-adjacent** within 90min on gemini-cli.
- **gaurav0107 #26074** `fix(core): handle ENAMETOOLONG/ENOTDIR in robustRealpath (#26010)` 20:31:56Z — filesystem path-resolution error handling. Tail-references issue **#26010**. Orthogonal to named axes.
- **gemini-cli-robot #26071** `# Fix: 1000-issue metric cap for accurate repository health tracking` 20:05:44Z — bot-authored, repo-health metric.
- **carycooper777 #26075 + #26076** both `Docs: Conflicting privacy information for Google AI Pro subscribe...` opened **20:35:51Z and 20:35:57Z** (delta **6 seconds**) — **same-author N=2 same-second-class docs duplicate OPEN**. Matches synth #82 (duplicate-PR-convergence) intra-author variant. **First W17 carycooper777 appearance** = first-time-author duplicate-self-OPEN.

gemini-cli trailing silence at Add.100 capture: **6m+** since #26076 20:35:57Z (open, not merge).

## litellm — silence widens to 1h15m+; alighazi288 axis-1 streaming OPEN extends cluster

litellm in-window merges: **0**. NEW OPEN: **samrusani #26633** `fix: handle image edit mask multipart errors without RequestNotRead` 20:31:28Z — multipart request-handling fix. **alighazi288 #26632** `fix(streaming): emit assistant role on empty completions (immediate EOS)` 19:25:54Z (Add.99 carry-over OPEN) — **synth #227 axis-1 (LLM-API)** — streaming-response-shape on empty-completion edge case. alighazi288 is N=1 here but pairs with prior W17 axis-1 litellm contributors. litellm trailing silence at capture: **1h28m+** since #26622 19:13:14Z.

## qwen-code — quiet trailing 4h+; #19867-style sub-author backlog

qwen-code in-window merges: **0**. Trailing silence: **4h59m+** since #3665 06:38:56Z. NEW OPENs in capture window: 0. Carry-over OPEN axis-relevant: **fyc09 #3682** `fix(core,cli): stop stripping reasoning on model switch/history load` (15:51:35Z) = **synth #227 axis-1 (LLM-API: reasoning_content preservation)** + **synth #236 axis-4 (history-load = conversation-memory adjacent)** — **first cross-axis-1-and-4 PR title** in W17 qwen-code corpus. Adjacent: **LaZzyMan #3673** `feat(memory): add autoSkill background project skill extraction` 09:36:44Z = **axis-4 (memory layer)** explicit.

qwen-code's **N=2 axis-4 OPEN backlog (#3673 + #3682)** + **N=1 axis-1 OPEN (#3677 MiniMax thinking tags)** make qwen-code the **4th repo with axis-4 PR presence** (codex + gemini-cli + opencode + qwen-code), though qwen-code's axis-4 PRs are **all OPEN, none merged** — axis-4 has NOT yet had a qwen-code merge to confirm 4-repo merged membership.

## goose — namanvats-dev #8870 NEW token-usage stream-event OPEN at 20:37:13Z

goose in-window merges: **0**. NEW OPENs:
- **namanvats-dev #8870** `fix(cli): emit cumulative token usage in stream-json/json complete event` 20:37:13Z — **synth #227 axis-1 (LLM-API: streaming-response shape, token-usage emission)**. First W17 namanvats-dev appearance.
- **JheisonMB #8869** `fix: correct WSL2 OS detection by removing PWD-based Windows override` 20:22:59Z — OS-detection fix.
- **morgmart #8868** `redesign skills library` 20:12:29Z — **agent-skill-library redesign** = **axis-4 adjacent** (skills are a form of long-lived agent-state config). PR title is verb `redesign` = architectural refactor signature matching synth #236's axis-4 architectural-refactor criterion.
- **Edu963 #8867** `feat: add Ocultar PII Refinery extension` 19:27:05Z — PII redaction extension (extension-layer feature).

Carry-over: **jh-block #8857** `Preserve thinking content for providers that require it` (09:06:51Z OPEN) = **synth #227 axis-1 (LLM-API: reasoning/thinking preservation)** — same family as litellm/qwen-code/codex axis-1 cluster. goose has **N=2 axis-1 OPEN (#8857 + #8870)** without merge in W17 to date.

goose trailing merged-silence at capture: **10h11m+** since #8856 10:31:41Z.

## Cross-repo synth-candidate inventory at Add.100 close

| # | Candidate | Status |
|---|---|---|
| #238 | sub-author maintainer-fast-merge p50 <40m for codex `-oai` suffix | STALLED (no in-window merge) |
| #239 | kitlangton self-merge series is bimodal-oscillating, NOT monotone-contracting (falsifies synth #97 generalization) | **PROMOTABLE** — N=6 evidence within single day |
| #240 | evawong-oai N=5 stacked PRs do NOT inherit kitlangton-class self-merge cadence; cross-author cadence transfer fails | PROMOTABLE pending Add.101 confirmation (1 window left, 0/5 merged at 2h28m+) |
| #241 | terminal-emulator-detection / TUI-environment-probe as candidate axis-5 | WEAK (N=2 cross-repo, conflated with axis-3) |

## Predicates entering Add.101

1. evawong-oai stack #19846-#19852: predict ≥1 merged by Add.101 close (final window of Add.97 #1 prediction).
2. axis-4 (synth #236): predict ≥1 qwen-code OR goose merge to confirm 5-repo merged membership; current 3-repo merged (codex via Add.97 split-memories-part-1, gemini-cli #25409, opencode #24661).
3. kitlangton self-merge series: predict EITHER (a) series ends (no kitlangton self-merge in next 2 windows, indicating session close) OR (b) series continues with another sub-5m merge, further confirming bimodal hypothesis.
4. axis-1 (synth #227) cross-repo merged-PR membership: currently litellm + opencode + codex (via earlier W17 merges); predict ≥1 goose OR qwen-code axis-1 merge by Add.103 to extend to 5 repos.

## Verified PR census (this capture, by repo)

opencode: #24664 (O), #24663 (M), #24662 (M), #24661 (M), #24660 (M), #24659 (O), #24656 (M, prev win), #24653 (O carry), #24652 (O carry), #24646 (O carry).
codex: #19875 (O), #19874 (O), #19870 (O carry), #19867 (O carry), #19865 (M prev), #19863 (M prev), #19862 (O carry), #19860 (O carry), #19859 (O carry), #19857 (C prev).
litellm: #26633 (O), #26632 (O carry), #26631 (O carry), #26630 (C carry), #26629 (O carry), #26628 (O carry), #26627 (O carry), #26626 (C carry), #26624 (O carry), #26623 (C carry).
gemini-cli: #26076 (O), #26075 (O), #26074 (O), #26073 (O), #26071 (O), #26069 (O carry), #26068 (O carry), #26067 (M), #26066 (O carry), #26065 (M prev).
qwen-code: #3682 (O carry), #3680 (O carry), #3677 (O carry), #3675 (C carry), #3673 (O carry), #3671 (O carry), #3668 (O carry), #3667 (O carry), #3665 (M prev), #3663 (O carry).
goose: #8870 (O), #8869 (O), #8868 (O), #8867 (O), #8866 (O carry), #8857 (O carry), #8856 (M prev), #8855 (M prev), #8854 (O carry), #8851 (M prev day).

**Total in-window merges:** 5 (opencode 4 + gemini-cli 1).
**Total in-window NEW opens:** 11.
**Total PRs cited by number:** 60.
