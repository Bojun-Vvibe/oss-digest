# ADDENDUM-43 — 2026-04-26

**Window:** 04:35:00Z → 04:51:00Z (16m00s)

**Repos scanned:** BerriAI/litellm, openai/codex, sst/opencode, anomalyco/opencode, block/goose, QwenLM/qwen-code, cline/cline

## Merges in window

- **None.** Zero merges across all seven repos for the **third consecutive addendum window**. The 4 → 2 → 0 → 0 → 0 throughput trajectory (Add.39 → 40 → 41 → 42 → 43) extends the strict monotonic decline into a flat-zero floor at n=3 windows. Cumulative merge-dry duration across all tracked repos: **~1h11m43s** (Add.41 + Add.42 + Add.43).

## Opens in window

- **[openai/codex#19635]** — `shijie-oai` (Shijie Rao), base **`dev/efrazer/agent-identity-env-jwt`** (a PR-as-base-branch on top of an `efrazer` branch — stacked-PR signature), +75/-22. Title `Fix agent identity runtime auth flow`. Created **04:48:26Z**, head SHA `3f008f47b3…`. **First-appearance author for the digest day** AND **a brand-new disjoint surface family** (agent identity / runtime auth — disjoint from bolinfest permissions, etraut TUI/shell, andmis SSE protocol). This is the **4th disjoint codex surface family** opened during the merge drought (synth #128's secondary falsifiable point fires retroactively in this window after being falsified-as-stated in Add.42).

## Notable updates

- **[openai/codex#19606]** — `bolinfest`, head SHA changed from `8eff69b41c…` (pre-Add.42 baseline per ADDENDUM-42 line 27) to **`848e51c4c6…`**. Updated **04:31:08Z** (within Add.42's nominal window but **not captured** by Add.42's reporting — see correction note below). Companion stack PRs #19395 (`ccdc08d0ac…`), #19394 (`ca9d4094ff…`), #19393 (`5d4ee413bb…`), #19392 (`50366952fe…`) all updated 04:31:05–04:31:09Z. **All five SHAs changed → this is bolinfest stack rebase#7.** Inter-rebase cadence: rebase#6 at 03:22:26Z → rebase#7 at 04:31:08Z = **delta7 = 1h08m42s**. Synth #125's "monotonic expansion regime" prediction (delta7 ∈ [3.4h, 5.0h]) is **FALSIFIED** — delta7 (1h08m42s) is *shorter* than delta6 (synth #125 reported delta6 as expansion-regime entry). The cadence has **contracted again**, not continued expanding.
- **[openai/codex#19432]** — `charley-openai`, base `main`, +180/-9. Title `[codex] Add token usage to turn tracing spans`. Updated **04:40:42Z**. Created 2026-04-24T20:12:53Z. Lifespan-at-update **1d8h27m49s** (long-tail refresh). Author has no prior digest-day citation. Surface: token-usage instrumentation — **same broad token-accounting theme** as the Add.42 anomalyco/opencode handoff (#24367 close → #24434 open), now appearing on a *different* repo.
- **[BerriAI/litellm#26546]** — `tim-peyeeye`, base `main`, +760/-0. Title `feat(guardrails): add peyeeye PII redaction & rehydration guardrail`. Updated **04:49:05Z** (created 02:55:59Z; lifespan-at-update 1h53m06s). New large additive surface (760 lines, zero deletions — pure feature add) on litellm `main`. **First non-trailing-edge litellm activity since the post-promotion silence began at 03:39Z** (see synth #127). Litellm silence: **1h10m06s** (03:39Z → 04:49:05Z). Synth #127's predicted quiescence regime ends here.
- **[BerriAI/litellm#26460]** — `milan-berri`, base `litellm_internal_staging`, +595/-2. Updated **04:35:36Z** (36s past window open). Created 2026-04-24T23:28:58Z, lifespan-at-update 1d5h06m38s. Long-tail refresh on staging surface.
- **[QwenLM/qwen-code#3630]** — `wenshao` (Shaojin Wen), base `main`, +52/-1. Title `fix(telemetry): use safeJsonStringify in FileExporter to avoid circular reference crash`. Updated **04:48:14Z**, created 04:04:46Z (lifespan-at-update 43m28s). Surgical telemetry fix.
- **[QwenLM/qwen-code#3620]** — `wenshao`, base `main`, +36/-2. Title `fix(core): match DeepSeek provider by model name for sglang/vllm (#3613)`. Updated **04:47:27Z**. Created 2026-04-25T14:41:53Z, lifespan-at-update 14h05m34s. Same author as #3630, **back-to-back updates 47s apart** on disjoint surfaces (telemetry FileExporter vs. provider-matching).
- **[QwenLM/qwen-code#3631]** — `B-A-M-N` (John London), base `main`, +903/-3. Title `Feat/stats model cost estimation`. Updated **04:37:01Z**, created 04:04:48Z (33m13s lifespan). Large additive feature.

## Notable closures

- **None** in window.

## Bolinfest stack & etraut cluster status

- **bolinfest n=5 stack:** **rebase#7 occurred at 04:31:08Z** (see "Notable updates" above). All five PRs got new head SHAs. **Correction to ADDENDUM-42**: Add.42 reported the stack as quiescent with head SHA unchanged through window close 04:35:00Z. The rebase actually landed at 04:31:08Z, **3m52s before Add.42's window close** — Add.42's "quiescent >1h12m" claim was incorrect. The correct quiescent interval after rebase#6 was **1h08m42s**, ending inside Add.42 rather than continuing into Add.43. This correction is what falsifies synth #125's monotonic expansion regime (see synth #131).
- **etraut-openai n=5 stewardship** (#19618 / #19620 / #19625 / #19630 / #19631): **no updates this window**. Cluster quiescent for **>1h25m** at window close (last touch 03:26:03Z). None merged. Per Add.41/42's ~3h stalled-cohort threshold, the cluster has now been quiescent for ~1h25m of that 3h budget; threshold crossing at ~06:26:03Z if no merge or push lands.
- **andmis singleton #19610:** no updates in window. Last touch 04:00:06Z. Quiescent **>50m**. Lifespan now 5h31m+, OPEN, no merge.

## Background activity

- `gh pr list --search "updated:>2026-04-26T04:35:00Z"` across all 7 repos returned **9 hits**: codex (2: #19635 open + #19432 update), litellm (2: #26546 + #26460 updates), qwen-code (3: #3630 + #3620 + #3631 updates), and zero hits for sst/opencode, anomalyco/opencode, block/goose, cline/cline.
- **Activity has REDISTRIBUTED across repos.** Add.42 had 5/6 events on anomalyco/opencode (back-pressure regime per synth #130). Add.43 has **0 hits on anomalyco/opencode** (back-pressure discharge mode partially fires) but the activity did NOT shift to merges — it shifted to *opens and updates on three other repos* (codex, litellm, qwen-code). The "discharge" is purely on the open/update axis, not the merge axis.

## Patterns

- **Codex drought ends in OPEN-not-MERGE mode.** A new disjoint surface family appears (#19635, agent-identity), bolinfest stack rebases (#19606+stack rebase#7), and a long-tail PR refreshes (#19432). Three distinct event types in a 16m window after 5 windows of quiescence. **No merge.** This pattern fits synth #129's model (b) CI-instability *partially* (rebases resume) and *also* fits a new "queue-builds-faster-than-it-clears" reading. The next ~2h of merge events will discriminate.
- **Synth #125 monotonic expansion is FALSIFIED.** Bolinfest stack inter-rebase cadence: delta1=…, delta6=58m05s (per synth #119), entered "monotonic expansion" with delta_n increasing thereafter. delta7 = **1h08m42s**, longer than delta6 in the absolute sense but synth #125 explicitly committed to delta7 ∈ [3.4h, 5.0h]. Actual 1h08m42s is **2.0h below the lower bound**. The expansion regime is broken; cadence is now better described as **bounded oscillation** between roughly 1h and 1h08m. See synth #131.
- **Token-accounting surface theme spreads cross-repo.** Add.42 had anomalyco/opencode #24367 close → #24434 open (token-counting display surface). Add.43 has codex #19432 update (token-usage tracing spans) and qwen-code #3630 update (telemetry FileExporter). Three different repos, three different angles, all touching observability/usage-counting surfaces within a ~2h envelope. This is a **cross-repo theme convergence on instrumentation/observability** — distinct from the surface-family fanouts of synth #128 (intra-repo) and synth #79 (defensive payload shape). See synth #132.
- **Single-author back-to-back updates (wenshao, qwen-code):** #3630 update at 04:48:14Z and #3620 update at 04:47:27Z = **47s apart** on disjoint surfaces. This is a sub-minute same-author cross-PR doublet on disjoint surfaces (synth #85 family) — confirms the pattern recurs in qwen-code, a repo not previously known to exhibit it.
- **Anomalyco/opencode back-pressure DISCHARGES asymmetrically.** Synth #130 predicted bimodal outcome: discharge (≥1 merge in anomalyco + activity resumes elsewhere) or deepening (≥2 more anomalyco events while others stay silent). **Neither fired cleanly.** Anomalyco produced ZERO events (not deepening) AND zero merges (not discharging via merge). The activity *did* resume elsewhere (codex+litellm+qwen-code = 7 events). This is a **third mode**: pent-up activity discharges to *other* repos, not as merges on the originating repo. Synth #130's bimodal framing was incomplete.

## Window merge-rate

| Repo | Add. 39 | Add. 40 | Add. 41 | Add. 42 | Add. 43 |
|------|---------|---------|---------|---------|---------|
| codex | 0 | 0 | 0 | 0 | 0 |
| litellm | 2 | 2 | 0 | 0 | 0 |
| anomalyco/opencode | 2 | 0 | 0 | 0 | 0 |
| sst/opencode | 0 | 0 | 0 | 0 | 0 |
| goose | 0 | 0 | 0 | 0 | 0 |
| qwen-code | — | — | — | — | 0 |
| cline | — | — | — | — | 0 |
| **Total** | **4** | **2** | **0** | **0** | **0** |

**Three consecutive zero-merge windows** spanning **>1h11m**. Activity has redistributed (anomalyco silent → codex/litellm/qwen-code active) without converting to merges. Codex 6-window merge drought (Add.38–43). The next addendum will determine whether (i) the bolinfest rebase#7 + #19432 long-tail refresh + #26546 large-feature open were preparatory work for an imminent merge burst, or (ii) the cross-repo merge gate generalizes further.
