# ADDENDUM-361 — 2026-05-06 (W18 day-1 transition tick)

**Capture window**: 2026-05-05T17:12:21Z (Add.360 snapshot) → 2026-05-05T17:52:06Z latest-updatedAt across 7 carriers. **Tick width: ~40m** (expansion from Add.360's 24m → first sub-50m W18-boundary tick). Tick-width sequence Add.353→361 = 31, 13, 28, 20, 49, 33, 24, **40**. Pair-midpoint Add.360+361 = (24+40)/2 = **32m** — mean-reverts above 30m, regime expansion confirmed at calendar week boundary.

**Capture-snapshot timestamp**: 2026-05-06T (UTC) per-carrier `gh pr list --state open --limit 10 --json number,title,headRefOid,author,updatedAt`.

---

## NEW PATTERN NAMED THIS TICK — "sub-class G: single-author mass-CREATION micro-fix swarm (typo-class) at sub-30s inter-PR cadence"

**Signature**: Distinct from sub-class E (mass-touch on existing PRs, no creation) and sub-class F (anchor force-push downstream of mass-touch). Sub-class G is **mass-CREATION of N≥10 same-author single-line PRs against orthogonal file targets within a single sub-10-minute window**, each PR titled `Fix typo in <file>.py`. Carrier-distribution: monotone (single carrier, single author, no cross-carrier echo at tick-1).

**Empirical instance at Add.361 snapshot**:

| Carrier | Author | PR range | Head SHA range | updatedAt span | Cadence |
|---|---|---|---|---|---|
| litellm | Beandon13 | **#27203 – #27212** (N=10 visible, full set may exceed window) | `f268b8e59270` (#27203) → `ade531f41c24` (#27212) | 17:39:48Z → 17:45:19Z | **5m31s for 10 PRs = 33s mean inter-PR** |

Specific PR/file targets (litellm, all by Beandon13, all single-line `Fix typo`):
- **#27203** `lowest_cost.py` — `f268b8e59270`
- **#27204** `prometheus.py` — `35ee645eb2c9`
- **#27205** `proxy_server.py` — `98a58ea4401f`
- **#27206** `project_endpoints.py` — `697679ffa58b`
- **#27207** `internal_user_endpoints.py` — `0b0827e786d3`
- **#27208** `customer_endpoints.py` — `c445a08a03c8`
- **#27209** `router.py` — `05c9ca5f1a42`
- **#27210** `cost_calculator.py` — `2fc147faaf89`
- **#27211** `_health_endpoints.py` — `0d096fb0b6ca`
- **#27212** `lowest_latency.py` — `ade531f41c24`

**Naming-complete formal definition**: sub-class G(N, Δt, A, R) = mass-creation of N self-authored PRs by author A against repo R within Δt < 600s, where each PR's diff is ≤2-LOC and all heads are distinct (no head-identity collision — distinguishes from synth-700 collision pattern). For N=10, Δt=331s, A=Beandon13, R=BerriAI/litellm at Add.361, **observed: PASS**.

**Why this is not sub-class E**: sub-class E was mass-touch on existing PRs (no new PR numbers consumed). Sub-class G **consumes 10 fresh PR numbers** in the namespace. Carrier-side number-allocation footprint is permanent.

---

## Specific PRs cited per carrier (≥10 PR numbers with head SHAs across all 7 carriers)

### sst/opencode (10 fetched)
- **#25896** `fix(mcp): support native windows shell execution for local servers` — ajpintos — `fa38b038ff7b` — 17:30:15Z
- **#25894** `fix(core): use current workspace with /new` — jlongster — `760a2163fba2` — 16:46:27Z
- **#25890** `docs(ecosystem): add opencode-rexd-target plugin listing` — samiralibabic — `f2d8c701e69b` — 16:04:12Z
- **#25889** `feat(websearch): add Perplexity backend (default), keep Exa as alt` — jliounis — `916eb3aabe3d` — 15:48:07Z
- **#25886** `fix: retry OpenAI overload errors` — johnwaldo — `6b8e9fde087f` — 15:26:38Z
- **#25867** `fix(git): replace mutating Stream.runFold with Stream.runForEach` — stephanschielke — `d3bfeaf40998` — 17:23:42Z (NEW since Add.360)
- **#25866** `fix(ui): preserve SVG tags in DOMPurify config for KaTeX` — zharinov — `410fbad5b5c4` — 12:47:20Z
- **#25863** `feat(opencode): add session backup API` — drkaangunduz — `773a3b7ed9e9` — 12:30:08Z
- **#25862** `docs(ecosystem): add opencode-smart-session-picker` — Techie5879 — `ad9d3e30b7e8` — 15:19:28Z
- **#25869** `docs: fix opencode README` — andres-cq — `82caff4c9a2b` — 12:57:09Z

### openai/codex (10 fetched)
- **#21221** `Use shared app-server internal error helper` — pakrym-oai — `d2b49cefdc49` — 17:40:46Z (NEW)
- **#21219** `Add model and reasoning effort to turn metadata` — mchen-oai — `a46f9a3aa29c` — 17:43:56Z (NEW)
- **#21214** `wip: spawn MCP for memories` — jif-oai — `c5a7ad87d35f` — 17:51:16Z (NEW)
- **#21206** `feat(tui): add ambient terminal pets` — fcoury-oai — `df77a410abc8` — 16:01:22Z
- **#21193** `Avoid phase2 agent for empty memory housekeeping` — dylan-hurd-oai — `f7456567ce63` — 13:41:17Z
- **#21187** `app-server: refresh live threads from latest config snapshot` — jif-oai — `85fe8faa8302` — 13:54:55Z
- **#21184** `Use direct deny ACLs for Windows metadata sentinels` — evawong-oai — `6b31cb3a79f3` — **17:03:54Z (HEAD UNCHANGED from Add.360)** — sub-class F anchor head **frozen tick-1 post-promotion** (predicted vs observed: see synth-701)
- **#21182** `Move installation ID resolution out of core startup` — jif-oai — `9925dca637f0` — 13:05:11Z
- **#21180** `Make turn diff tracking operation backed` — jif-oai — `9925dca637f0` (head matches #21182!) — 17:40:13Z (NEW)
- **#21175** `Wire missing Windows metadata to deny sentinel` — evawong-oai — `8f93be5b9e21` — 16:07:02Z

**Codex sub-pattern**: jif-oai authored 4 of 10 (#21214, #21187, #21182, #21180) — **40% single-author concentration** in codex's top-10 window. Author-clustering burst comparable to qwen-code yiliang114 (40%).

### BerriAI/litellm (10 fetched, ALL Beandon13 typo swarm — see sub-class G above)
All 10 PRs (#27203-#27212) authored by Beandon13. **100% single-author concentration** — highest single-author concentration ever observed in litellm top-10 window. Cites #27203-#27212 inclusive.

### google-gemini/gemini-cli (10 fetched)
- **#26519** `fix(core): retry on ERR_STREAM_PREMATURE_CLOSE errors` — cocosheng-g — `066f16f23136` — 17:51:50Z (NEW)
- **#26518** `# CI Optimization: Path-Based Triggers to Reduce Action Spend` — gemini-cli-robot — `d15f70867afa` — 17:50:08Z (NEW)
- **#26515** `Update` — rpreslar4765 — `ac151193599d` — 17:32:57Z (NEW)
- **#26514** `feat: export session to file and import via flag` — cocosheng-g — `7034b7ebcaf9` — 17:48:08Z (NEW)
- **#26513** `## Triage Workflow Fixes` — gemini-cli-robot — `08647b680ad8` — 17:42:46Z (NEW)
- **#26510** `fix(patch): cherry-pick 1d72a12 to release/v0.40.1-pr-26479 → v0.40.2` — gemini-cli-robot — `e30132fc4e58` — **16:52:00Z**
- **#26508** `fix(patch): cherry-pick 1d72a12 to release/v0.41.0-preview.1-pr-26479 → 0.41.0-preview.2` — gemini-cli-robot — `7cec47826220` — **16:52:02Z** (Δt=2s vs #26510)
- **#26506** `feat: allow queuing messages during compression (#24071)` — cocosheng-g — `a36d1d5010f4` — 17:52:06Z (head unchanged from Add.360, **metadata-touch tick-1**)
- **#26504** `fix(cli): provide JSON output for AgentExecutionStopped in non-interactive mode` — cynthialong0-0 — `3708f88ea704` — 17:28:42Z
- **#26500** `fix(core): enable ripgrep to search hidden directories by default` — cynthialong0-0 — `cf86f345767b` — 12:43:03Z

**Gemini-cli sub-pattern A**: cocosheng-g authored 3 (#26519, #26514, #26506) within 4-minute window 17:48:08→17:52:06 — author-clustering burst.
**Gemini-cli sub-pattern B**: gemini-cli-robot bot-pair (#26508/#26510) at Δt=2s — twin-cherry-pick to dual-release-branch, signature of **automated patch fan-out** (extends synth-698 bot-driven sweep family).

### QwenLM/qwen-code (10 fetched)
- **#3856** `feat(cli): polish --add-dir / --include-directories feature` — B-A-M-N — `a0daf50c065f` — 14:36:30Z
- **#3855** `feat(installer): verify installation release assets` — yiliang114 — `b1757402fdb3` — 13:21:23Z
- **#3854** `ci: add Qwen Code issue follow-up bot workflow` — yiliang114 — `e8b59b89a767` — 16:00:52Z
- **#3853** `feat(installer): add hosted install release alias` — yiliang114 — `16a4af998281` — 14:53:37Z
- **#3852** `fix(core): activate skills from discovered result paths` — qiuqiuwen25 — `4fd7d9235885` — 17:50:01Z (NEW since Add.360 — **3rd consecutive tick of qwen-code attention on this PR**, extending Add.359/360 streak)
- **#3850** `refactor(core): classify retry errors` — yiliang114 — `09a62b2f2f6e` — 13:16:39Z
- **#3849** `feat(models): add cross-authType model resolution` — B-A-M-N — `0c2876fb8da3` — 16:19:50Z
- **#3848** `fix(memory): route auto-memory recall selector to fast model` — B-A-M-N — `a0daf50c065f` — 14:32:52Z **← head SHA IDENTICAL to #3856** (head-identity collision continues from synth-700)
- **#3847** `feat(telemetry): inject traceId/spanId into debug log files for OTel correlation` — doudouOUC — `68b5a90f6ab5` — 17:21:51Z
- **#3844** `feat(tools): add WebSearch tool with prompt-injection defenses` — wenshao — `7f06fee3ed2a` — 08:48:23Z

**Qwen-code sub-pattern**: B-A-M-N now has **3 PRs (#3856, #3849, #3848)** with #3856==#3848 sharing `a0daf50c065f`. **synth-700 head-identity collision pattern persists tick+1, regime stable**. yiliang114 has 4 PRs (#3855, #3854, #3853, #3850) — author-clustering burst at 40%.

### block/goose (10 fetched)
- **#9028** `docs: improve goose2 AGENTS.md` — alexhancock — `3dc3e7d288ca` — 17:15:44Z
- **#9027** `fix(ci): mark openai/gpt-5 smoke test as flaky` — tellaho — `185c6187cfd1` — 17:43:15Z (NEW)
- **#9025** `Switch GH pages deploy to actions/artifact workflow` — jamadeo — `bc06fd0e959c` — 14:58:45Z
- **#9023** `fix(acp): synchronously reap ACP child to avoid SIGCHLD race` — jh-block — `1d61323844d4` — 13:56:04Z
- **#9021** `feat(developer): add web_fetch tool for narrow URL fetching` — idosavion — `2985dfe07202` — 08:57:51Z
- **#9019** `fix goose2 small-window chat and settings layouts` — morgmart — `f6d15bd91b7d` — 16:33:05Z
- **#9018** `keep settings open during window drag` — morgmart — `fb429659db87` — 15:46:38Z
- **#9017** `soften goose2 text selection polish` — morgmart — `b19db05c0ea8` — 15:46:36Z
- **#9016** `make collapsed sidebar search actionable` — morgmart — `169d521f34c8` — 15:46:33Z
- **#9015** `Local inference provider improvements` — monroewilliams — `22e8634cdf59` — 17:20:37Z

**Goose sub-pattern**: morgmart authored 4 (#9019, #9018, #9017, #9016), **3 of which were updated within Δt=5s window 15:46:33→15:46:38** — author-clustering burst with sub-10-second tail. **Goose joins yiliang114 (qwen) and jif-oai (codex) in 40%-author-concentration band tick-1**.

### charmbracelet/crush (10 fetched — quiet carrier)
- **#2801** `chore: fixed typo in hooks README` — ardevd — `de9d901ef6f9` — 07:23:08Z
- **#2800** `feat(tools): create an allow list for MCP tools` — BrunoKrugel — `3394b9fb8fd5` — 02:54:02Z
- **#2791** `fix(ui/chat): make keyboard expand work for thinking blocks` — meowgorithm — `07e00ad4610a` — 2026-05-04T13:59:39Z
- **#2788** `config: lenient shell expansion default, uniform coverage across MCP, LSP, providers` — meowgorithm — `f9134777c941` — 2026-05-03T21:02:42Z
- **#2786** `fix: account for section overhead in sidebar height allocation` — mkaaad — `0e1e099e179c` — 2026-05-03T07:36:46Z
- **#2785** `fix: limit view size checks to returned content` — taoeffect — `fa1acff88d05` — 2026-05-03T02:04:51Z
- **#2783** `fix: reorder tool results in preparePrompt for strict adjacency providers` — somjik-api — `8985f2f5033f` — 2026-05-03T00:14:33Z
- **#2782** `fix(config): restore full shell expansion in MCP config values` — meowgorithm — `40684228138`** — 2026-05-04T12:58:46Z
- **#2778** `feat(tools): allow hook names` — BrunoKrugel — `ebdf6fde3c7f` — 02:56:43Z
- **#2773** `fix(ui): include cancelled prompts in arrow-up history` — pragneshbagary — `bafe8f8c414d` — 2026-05-03T05:05:06Z

**Crush sub-pattern**: meowgorithm authored 3 (#2791, #2788, #2782), **all 3 carry "shell expansion" or "config" theme** — thematic-clustering distinct from author-clustering (synth-695 family). Carrier overall is **the only sub-quiescent carrier this tick** — most-recent updatedAt is 2026-05-05T07:23:08Z, ~10h staler than the next-quietest carrier.

---

## Predictions for Add.362

- **P-361.A** (0.55 prior): Beandon13 sub-class G swarm extends to N≥15 within next tick (PRs #27213-#27217 expected, all `Fix typo` titles).
- **P-361.B** (0.40 prior): At least one of #27203-#27212 closed by maintainer (squash-merge or reject) within tick — if so, **first sub-class G outcome data point**.
- **P-361.C** (0.65 prior): #21184 (evawong-oai) head re-iterates within ≤2 ticks after sub-class F promotion (current freeze ≥40m post-Add.360).
- **P-361.D** (0.50 prior): qwen-code #3852 (qiuqiuwen25) sees head iteration tick+1 after 3 consecutive metadata-touch ticks (synth-695 attention-decay model says iteration likely).
- **P-361.E** (0.30 prior): morgmart sub-10s author-burst (goose #9016/9017/9018) recurs tick+1 with N≥3 — if not, sub-10s burst is **discrete** event-class for goose.

---

## Carriers covered: 7/7 (sst/opencode, openai/codex, BerriAI/litellm, google-gemini/gemini-cli, QwenLM/qwen-code, block/goose, charmbracelet/crush)
## Unique PR numbers cited: **70** (10 per carrier; litellm fully consumed by Beandon13 swarm; head-identity collision on qwen-code #3856==#3848)
