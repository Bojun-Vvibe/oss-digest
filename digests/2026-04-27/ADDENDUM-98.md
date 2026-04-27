# ADDENDUM-98 — 2026-04-27

**Capture window:** 18:23:59Z → 19:16:00Z (UTC). Window width: **52m01s**.
**Predecessor:** ADDENDUM-97 (closed 18:23:59Z; seeded synth-candidates #231 cross-repo runtime-sandbox/permission convergent burst, #232 corpus measurement-artifact regime / `gh pr list` default-sort backfill bias). Both are now promoted to `_weekly/` as synth #233 and #234 (this addendum's companion notes).

## Headline event — Add.97 pred #2 CONFIRMED at first chance: litellm next merge IS a health-check sub-cluster member (#26622 ryan-crabbe-berri 19:13:14Z `--timeout_worker_healthcheck`)

After 3h21m47s of litellm trailing silence (since omriShukrun08 #26605 15:51:27Z), the next merge to land is **#26622 ryan-crabbe-berri** `44dece10` `feat(proxy): add --timeout_worker_healthcheck flag for uvicorn worker triage` merged **19:13:14Z**. This is the **fourth** PR on the **uvicorn-worker / health-check operational surface** in W17 — joining the open sub-cluster #26621 udit-rawat (`fix(health-check): skip max_tokens for non-chat modes`), #26610 hannahmadison, and #26604 xr843. **Add.97 pred #2 (litellm next merge is health-check sub-cluster member, NOT synth #227 reasoning-content) is CONFIRMED on the first available merge event.** First confirmed Add.97 prediction.

Notably the **merging author (ryan-crabbe-berri) is a litellm maintainer**, not the open-side authors of the sub-cluster (udit-rawat, hannahmadison, xr843 are all non-maintainers). This is **maintainer-led closure of an outsider-opened convergent sub-cluster** — the inverse of synth #230 (maintainer self-merge sub-30m N=2 on adjacent code surface). The maintainer **does not merge an outsider PR**; instead, a separate maintainer-authored PR on the same surface is the merge vehicle. This is a **distinct convergence-resolution pattern** worth tracking — synth-candidate #235.

litellm trailing silence at Add.98 capture: **2m46s** since #26622 19:13:14Z.

## codex queue partial-resolution — bolinfest CI N=2 (#19854 + #19851) merges sub-30m, evawong-oai stack STILL OPEN, pakrym-oai N=2 streamline-handlers across 1h45m25s

codex in-window merges (5 total, sub-author breakdown):
- **bolinfest N=2 sub-30m**: #19854 `c2084552` `ci: pin npm staging smoke test to a recent rust-release run` merged **18:32:49Z**, #19851 `cafe717d` `ci: migrate Bazel setup away from archived setup-bazelisk` merged **18:37:31Z** — **inter-merge gap 4m42s**, both authored by bolinfest in the prior window (Add.97). **Author=merger=bolinfest** (codex maintainer self-merge). Both are CI infrastructure (Bazel + npm-staging) — adjacent operational surfaces. **This is a synth #230 instance** (maintainer self-merge sub-30m N=2 on adjacent surface) for codex/bolinfest, after the kitlangton/opencode original. **Synth #230 cardinality count: 2 maintainer instances now confirmed across 2 repos** (kitlangton/opencode, bolinfest/codex). Repo-cap pressure off; pattern is **at minimum cross-repo on the OSS-coding-agent surface**.
- **pakrym-oai N=2**: #19490 `4ed22fc7` `Streamline plugin, apps, and skills handlers` merged **17:18:25Z** (Add.97 window), #19491 `e5709db6` `Streamline account and command handlers` merged **19:03:50Z** (this window). **Inter-merge gap 1h45m25s** — span crosses Add.97/Add.98 boundary. Both `Streamline X handlers` titles, **shared title-stem** = same refactor sweep across distinct handler families (plugin/apps/skills vs. account/command). **Sub-author N=2 with 1h45m+ gap on shared title-stem** is a **slower kinetic** than synth #230 sub-30m and a **slower kinetic** than synth #224 same-author sub-cluster — a **third intra-author cadence band**. Synth-candidate #236.
- **evawong-oai #18446** `05f4eb22` `Superseded by split Linux PR` merged **18:14:35Z** (just inside this window): **this is a supersede-close-via-merge** — the PR title declares supersedence, and the merge resolves the OLD PR by merging it (not closing). Unusual pattern: typical supersede results in CLOSED state, not MERGED state. **Indicates main was already at the supersede commit so merging is a no-op fast-forward.** Same author evawong-oai also has **N=5 OPEN preserved-path stack (#19846-19852) STILL OPEN**, all created in Add.97 window. **Add.97 pred #1 (≥2 of evawong-oai N=5 stack merge by Add.101) PENDING — 1/3 windows elapsed, 0 of 5 merged in the in-stack PRs.**
- **sayan-oai #19771** `85c15005` `fix: filter dynamic deferred tools from model_visible_specs` merged **19:09:03Z** — model-tool-visibility-filter surface, conceptually adjacent to earlier sayan-oai `model_visible_specs` work (sayan-oai sub-author tool-spec specialization persists).
- **efrazer-oai #19762** `2009f6e8` `refactor: make auth loading async` merged **18:00:27Z** — already noted in Add.97; carry-over.

codex trailing silence at Add.98 capture: **6m57s** since #19771 19:09:03Z. **Stays well below 4h.**

NEW codex OPENs in window (continued queue intake):
- **fjord-oai #19865** `Cap original-detail image token estimates` 19:04:51Z
- **rhan-oai #19863** `[codex-analytics] remove ga flag` 18:52:56Z
- **starr-openai #19862** `[codex] Shard exec Bazel integration test` 18:52:10Z (cross-references bolinfest #19851 Bazel migration — **same surface as bolinfest just-merged CI PR**, by a different sub-author, **17 minutes after** bolinfest's merge). **Within-30m intra-repo cross-author surface follow-up** — a queue-intake variant of synth #229.
- **jif-oai #19860** `feat: split memories part 2` 18:47:14Z — **continuation PR** of jif-oai #19818 `chore: split memories part 1` (already merged Add.97 13:40:42Z). **Numbered-part series on shared surface** — first explicit `part 1 / part 2` numbered-series within W17 codex corpus.
- **abhinav-oai #19859** `Show plugin hooks in plugin details` 18:38:27Z + **#19857** `Add strict known marketplace requirements` (also abhinav-oai). **abhinav-oai N=2 OPEN this window** plus the **prior #19840 + #19778** = abhinav-oai cumulative N=4 OPEN on plugin/hooks/marketplace surface. **Sub-author N=4 OPEN on shared sub-surface** — a new high-water for sub-author intra-repo OPEN concentration on a **single sub-surface** (plugin/hooks/marketplace), distinct from evawong-oai N=5 which is on a **different sub-surface** (preserved-path/sandbox).
- **surajs-oai #19855** `Continue sampling after assistant chunks` 18:26:07Z

## opencode big merge — thdxr #24554 `refactor: remove module barrels` 727+/677− at 18:33:34Z (largest single in-window merge on opencode this week)

opencode in-window merges (1):
- **thdxr #24554** `f25f1485` `refactor: remove module barrels` merged **18:33:34Z** (727+/677−). **thdxr is opencode maintainer (Dax)**. Net diff +50 lines, **near-balanced add/delete refactor** = re-export-restructuring sweep. Largest single merge on opencode in 3 windows. Predecessor: kitlangton self-merge burst N=2 in Add.96. **Now thdxr appears as a 2nd opencode maintainer doing a big-diff merge**. This is **not** a self-merge series (only N=1) but contributes to **multi-maintainer opencode merge regime** — kitlangton + thdxr both active as merge-side maintainers in same 3-window span.

NEW opencode OPENs in window:
- **Hubedge #24653** `feat(agent): allow agents to ignore instructions` 19:03:19Z — first-time author or rare contributor. Title has **prompt-injection-adjacent semantics** (allow agents to **ignore** instructions): worth flagging — likely a config flag for agent behavior, but the title itself is unusual.
- **HaleTom #24652** `fix(config): make resource loading deterministic` 18:52:30Z + HaleTom #24641 `fix(app): refresh workspace dirs before canOpen check in navigateToProject` 17:06:52Z (still open). **HaleTom N=2 OPEN within 1h45m+ on opencode** — sub-author N=2 OPEN on opencode (first instance this week per W17 corpus).

opencode trailing silence at Add.98 capture: **42m26s** since #24554 18:33:34Z.

## gemini-cli silence-break — joshualitt #25409 `wire up the new ContextManager and AgentChatHistory` at 19:03:28Z (large architectural merge)

gemini-cli in-window merges (1):
- **joshualitt #25409** `71f313b5` `feat(core): wire up the new ContextManager and AgentChatHistory` merged **19:03:28Z**. **joshualitt is a gemini-cli core engineer** (high-frequency author in W17 corpus). Title is **architectural feature** (ContextManager + AgentChatHistory wiring) — a **memory-architecture** PR. **Cross-references**: codex jif-oai `split memories part 1` merged Add.97 + `part 2` opened this window. **Cross-repo memory/context-architecture activity within 6 hours**: codex `split memories part 1` (Add.97 13:40:42Z), gemini-cli `wire up the new ContextManager and AgentChatHistory` (this window 19:03:28Z), codex `split memories part 2` opened (this window 18:47:14Z). **3 PRs across 2 repos on conversation-memory architecture in 5h22m46s span** — a **fourth axis of convergent activity** distinct from synth #227 (LLM-API), synth #229 (MCP), synth #233 (sandbox). Synth-candidate #237: **conversation-memory / context-architecture as a 4th convergent-activity axis**.

gemini-cli trailing silence at Add.98 capture: **12m32s** since #25409 19:03:28Z.

## goose silence FINALLY breaks at 8h+ — matt2e #8793 `exclude preprompt from session title generation` 18:35:37Z

goose in-window merges (1):
- **matt2e #8793** `002440b4` `fix(goose): exclude preprompt from session title generation` merged **18:35:37Z**. Silence-break after **8h03m56s** of trailing silence (since lifeizhou-ap #8856 10:31:41Z). **Matt2e is a goose maintainer.** Title surface: **session-title-generation / preprompt isolation** — small focused fix.

This is the **boundary-case test for synth #228 / Add.97 pred #7 (negative-feedback hypothesis: silence approaching boundary triggers merge before crossing)**. goose silence at Add.97 capture was 7h52m18s; at Add.98 capture (without the merge) it would have been 8h44m19s — still well under 24h. The merge at 18:35:37Z came at silence=8h03m56s. **The negative-feedback hypothesis is CONSISTENT with this event** (merge before approaching the 24h boundary), but goose was nowhere near the 24h boundary, so this is a **weak confirmation at best**. The hypothesis remains untested at the actual 24h boundary because **no repo has come within 8h of crossing 24h in the last 4 windows**.

goose trailing silence at Add.98 capture: **40m23s** since #8793 18:35:37Z. 

jh-block #8857 (synth #227 4th-repo member) STILL OPEN at lifespan **9h53m+**. Add.95 pred #6 (merges within 4 windows): 2/4 windows elapsed, slipping further.

## qwen-code dormant 3rd consecutive window — silence at 4h15m+ since fyc09 #3617

qwen-code no merges in-window. Trailing silence at capture: **4h14m57s** since #3617 mohitsoni48 15:01:03Z. **First W17 repo to cross the 4h boundary in 3 consecutive windows.** Synth #228 right-skewed-truncated cell shape: qwen-code now in **4–24h cell** for the first time this week.

fyc09 #3682, shenyankm #3677, chiga0 N=3, LaZzyMan #3673 ALL OPEN unchanged. Synth #227 qwen-code 2-PR sub-cluster persists.

## Per-repo trailing-silence at capture (19:16:00Z)

| Repo | Last merge SHA | Merged (UTC) | Silence at capture | Δ vs Add.97 |
|---|---|---|---|---|
| openai/codex | #19771 `85c15005` (sayan-oai) | 19:09:03Z | **6m57s** | −16m35s (silence-break, 4 new merges) |
| google-gemini/gemini-cli | #25409 `71f313b5` (joshualitt) | 19:03:28Z | **12m32s** | −31m46s (silence-break) |
| BerriAI/litellm | #26622 `44dece10` (ryan-crabbe-berri) | 19:13:14Z | **2m46s** | −2h29m46s (BIG silence-break) |
| anomalyco/opencode | #24554 `f25f1485` (thdxr) | 18:33:34Z | **42m26s** | −24m22s (silence-break) |
| block/goose | #8793 `002440b4` (matt2e) | 18:35:37Z | **40m23s** | −7h11m55s (BIG silence-break) |
| QwenLM/qwen-code | #3617 `414b3304` (mohitsoni48) | 15:01:03Z | **4h14m57s** | +52m01s |

**Cell occupancy at capture:**
- 0–4h cell: {codex (6m57s), gemini-cli (12m32s), litellm (2m46s), opencode (42m26s), goose (40m23s)} — **5 repos**
- 4–24h cell: {qwen-code (4h14m57s)} — **1 repo**
- ≥24h cell: **EMPTY** (4 consecutive windows)

**Cell shape: right-skewed-truncated holds for 4 consecutive windows.** All silence-break events fired below 8h05m. **Negative-feedback hypothesis from Add.97 pred #7**: 5 silence-breaks this window, all at trailing silences in the 30m–8h03m range. **No repo crossed any major boundary this window** (4 silence-breaks were in the 0–4h cell already; only qwen-code grew 52m01s and crossed into 4–24h cell — but qwen-code did NOT merge to prevent the crossing). **qwen-code crossing 4h without merging is a counter-example to the negative-feedback hypothesis at the 4h boundary.** The hypothesis may only hold at the 24h boundary, OR it may be falsified — one observation either way.

## Falsification check on ADDENDUM-97 predictions

1. **Pred #1 (codex evawong-oai N=5 preserved-path stack: ≥2 merges by Add.101)**: **PENDING.** 1/3 windows elapsed, 0 of 5 merged in the actual stack PRs (#19846-19852). evawong-oai's other PR #18446 merged but it's a supersede-close, not a stack member.
2. **Pred #2 (litellm next merge is health-check sub-cluster member, NOT synth #227 reasoning-content)**: **CONFIRMED.** #26622 `--timeout_worker_healthcheck` (ryan-crabbe-berri) — exactly health-check operational surface. **First confirmed Add.97 prediction.**
3. **Pred #3 (litellm health-check 3-PR sub-cluster: at least one merge within 4 windows; udit-rawat #26621 OR xr843 #26604 first)**: **PENDING — partial signal.** The merge #26622 was a SEPARATE health-check PR by a maintainer, not one of the 3 outsider sub-cluster PRs. udit-rawat/xr843/hannahmadison still open. 1/4 windows elapsed.
4. **Pred #4 (cross-repo runtime-sandbox/permission cluster: 3rd repo entrant within 4 windows)**: **PENDING.** No new sandbox/permission PR from a 3rd repo this window. 1/4 windows elapsed.
5. **Pred #5 (codex N=2 cap broken on MERGE side within 3 windows)**: **PARTIALLY CONFIRMED.** bolinfest N=2 merge sub-30m (this window) is exactly N=2; not N≥3 yet. However, etraut-openai N=3 merge in the Add.96-backfilled window (per Add.97) already broke the cap on merge-side. Still no N=3 merge **in a single tracked window** post-correction. 1/3 elapsed.
6. **Pred #6 (opencode ajspig #24646 docs/plugin-ecosystem merges within 2 windows AND triggers 2nd plugin-marketplace docs PR)**: **PENDING — partial signal.** ajspig #24646 STILL OPEN (1/2 windows elapsed). No 2nd plugin-marketplace docs PR by a different author yet.
7. **Pred #7 (synth #228 negative-feedback revision: no repo crosses 24h in next 4 windows)**: **PENDING — partial counter-example.** qwen-code crossed 4h boundary without merging (so the negative-feedback at small boundaries may not hold), but no repo near 24h. 1/4 elapsed.

**Pred outcome tally: 1 confirmed (pred #2), 0 falsified, 6 pending.** Recovery from Add.97's worst confirmation rate — first confirmed prediction at the FIRST available test event.

## Open queue notable changes at capture

- **codex bolinfest N=2 maintainer self-merge sub-30m (4m42s gap) on adjacent CI surfaces (Bazel + npm-staging)**: 2nd cross-repo instance of synth #230 (after kitlangton/opencode). Synth #230 promoted from single-repo to multi-repo confirmed.
- **codex pakrym-oai N=2 `Streamline X handlers` shared-title-stem with 1h45m25s inter-merge gap** spanning Add.97/Add.98 boundary: **3rd intra-author cadence band** distinct from synth #224 (same-second-N) and synth #230 (sub-30m N=2). Synth-candidate #236.
- **codex evawong-oai #18446 `Superseded by split Linux PR` MERGED (not closed)**: unusual supersede-via-merge fast-forward pattern.
- **codex N=4 sub-author OPEN concentration on plugin/hooks/marketplace by abhinav-oai (#19778, #19840, #19857, #19859)**: distinct sub-surface from evawong-oai N=5 preserved-path. **2 sub-authors now sustain ≥N=4 OPEN concentration on different sub-surfaces simultaneously within codex.**
- **opencode thdxr #24554 727+/677− module-barrels refactor merge**: 2nd opencode maintainer (after kitlangton) doing big-diff merge in 3-window span.
- **gemini-cli joshualitt #25409 ContextManager + AgentChatHistory architectural wiring**: cross-repo memory-architecture activity links to codex jif-oai `split memories part 1+2` series.
- **litellm pred #2 confirmed at first chance**: maintainer-led closure of an outsider-opened convergent sub-cluster (ryan-crabbe-berri merges separate health-check PR rather than the udit-rawat/hannahmadison/xr843 outsider PRs). **Distinct convergence-resolution pattern; synth-candidate #235.**
- **goose 8h+ silence-break** at sub-9h, well below 24h boundary. Negative-feedback hypothesis remains weakly supported at small boundaries.
- **qwen-code crosses 4h without merging** — first counter-example to negative-feedback hypothesis at the 4h boundary. (Hypothesis may only apply at 24h.)

## Predictions for ADDENDUM-99

1. **Highest-confidence**: codex evawong-oai N=5 preserved-path stack — at least 1 of #19846-19852 merges by Add.100 (2 windows). Predict **#19846 `Add preserved path policy primitive`** merges first (stack-bottom, smallest review surface).
2. **High-confidence**: codex starr-openai #19862 `Shard exec Bazel integration test` merges within 3 windows; bolinfest will be the merger (CI surface, bolinfest is the active CI maintainer this window).
3. **High-confidence**: litellm health-check sub-cluster — given #26622 just merged on the same surface, **at least one of #26621 udit-rawat / #26610 hannahmadison / #26604 xr843 merges within 3 windows**, OR all 3 close-without-merge as redundant with #26622. Predict udit-rawat #26621 merges first (largest distinct semantic value beyond timeout flag).
4. **High-confidence**: codex pakrym-oai opens **#3 `Streamline X handlers` PR** within 4 windows extending the shared-title-stem N=2 to N=3 (i.e., `Streamline auth handlers`, `Streamline session handlers`, or similar), per the synth-candidate #236 cadence-band hypothesis.
5. **Medium-confidence**: codex jif-oai #19860 `split memories part 2` merges within 2 windows AND a `part 3` is opened within 4 windows. Numbered-part series on shared surface continues.
6. **Medium-confidence**: cross-repo memory/context-architecture cluster (synth-candidate #237) gains a **3rd repo entrant** within 4 windows — predict opencode (memory/session-context PR by kitlangton or thdxr) OR litellm (context-window management PR).
7. **Speculative**: Hubedge opencode #24653 `feat(agent): allow agents to ignore instructions` triggers a **maintainer (kitlangton or thdxr) request-changes review within 2 windows** due to the prompt-injection-adjacent title semantics. Predict it does NOT merge in the next 4 windows; either gets renamed or closed.
8. **Speculative**: qwen-code remains in 4–24h cell at next capture (no merge in next window) — first 2-window persistent 4–24h cell occupancy in W17 corpus, partial counter-example to negative-feedback hypothesis at the 4h boundary.

## Cross-references

- **Synth #224** (litellm sub-author N=2-exactly cardinality): NO new test events on litellm side this window. Demotion to litellm-and-gemini-cli-specific holds.
- **Synth #225, #227**: synth #227 reasoning-content cluster — qwen-code, litellm malafronte, goose jh-block all still OPEN. No movement.
- **Synth #226** (outsider re-file silence-break): harryzsh #26627 (re-file of #26626 with 11s gap from Add.97) **STILL OPEN** at 1h11m+. Add.97 pred #2 (re-file merges by Add.99) PENDING — 1/2 windows elapsed.
- **Synth #228** (corpus dormancy distribution metastability): partial counter-example via qwen-code crossing 4h without merging. Negative-feedback revision (Add.97 pred #7) under stress at small boundaries; untested at 24h.
- **Synth #229** (MCP/agent-tool-integration as 2nd convergent-fix axis): NO new MCP-surface PRs this window. Cluster persists unchanged. Add.96 pred #7 (codex MCP seeds opencode MCP within 4 windows) — 2/4 windows elapsed, slipping.
- **Synth #230** (maintainer self-merge sub-30m N=2 on adjacent code surface): **EXTENDED to 2nd repo via codex/bolinfest** (Bazel + npm-staging CI, 4m42s gap). Cross-repo confirmed; demote single-repo caveat. Synth #230 now **multi-repo OSS-coding-agent maintainer pattern**.
- **NEW Add.98 synth-candidates**:
  - **#235**: maintainer-led closure of outsider-opened convergent sub-cluster via separate maintainer-authored PR on the same surface (rather than merging the outsider PRs) — distinct convergence-resolution pattern. Seeded by litellm #26622 ryan-crabbe-berri merge resolving (or partly resolving) the udit-rawat/hannahmadison/xr843 health-check sub-cluster.
  - **#236**: third intra-author cadence band — sub-author N=2 with shared-title-stem at 1h–3h inter-merge kinetics, distinct from synth #224 (same-second/sub-minute) and synth #230 (sub-30m). Seeded by codex pakrym-oai `Streamline X handlers` N=2 at 1h45m25s gap.
  - **#237**: conversation-memory / context-architecture as a 4th convergent-activity axis distinct from synth #227 (LLM-API/reasoning-content), synth #229 (MCP/agent-tool-integration), and synth #233 (runtime-sandbox/permission). Seeded by codex jif-oai `split memories part 1+2` + gemini-cli joshualitt #25409 ContextManager wiring within 5h23m.

(Three Add.98-seeded synth-candidates; this addendum's two companion `_weekly/` notes are #233 (runtime-sandbox cross-repo convergent burst, promoted from Add.97's #231 candidate with first-merger evidence from this window) and #234 (corpus measurement-artifact regime / `gh pr list` default-sort backfill bias, promoted from Add.97's #232 candidate with the codex etraut-openai backfill case study).)
