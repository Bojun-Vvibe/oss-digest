# ADDENDUM-44 — 2026-04-26

**Window:** 04:51:00Z → 05:18:50Z (27m50s)

**Repos scanned:** BerriAI/litellm, openai/codex, sst/opencode, anomalyco/opencode, block/goose, QwenLM/qwen-code, cline/cline

## Merges in window

- **[openai/codex#19610]** — `andmis` (Andrey Mishchenko), base `main`, +44/-7. Title `Support end_turn in response.completed`. Created 2026-04-25T23:19:11Z, **MERGED 04:57:42Z** (mergeCommit `355c40ad7e…`). Lifespan 5h38m31s. **This is the Add.43 "andmis singleton quiescent >50m" PR — it merged in this window.** Synth #128's "4th disjoint codex surface family" lineage tag (andmis SSE protocol) now has its first merge after the 6-window codex merge drought.
- **[anomalyco/opencode#24435]** — `rekram1-node` (Aiden Cline), base `dev`, +83/-4. Title `fix: bump openrouter sdk version to resolve deepseek reasoning issue (bug was in sdk pkg)`. Created 04:21:31Z (this morning, lifespan 43m45s), **MERGED 05:05:16Z** (mergeCommit `e7053c41f4…`). **First anomalyco/opencode merge since Add.39.** Synth #130's back-pressure regime discharges *via merge* in this window — Add.43's "third mode" (discharge to other repos) was a transient, not a stable mode.
- **[QwenLM/qwen-code#3630]** — `wenshao`, base `main`, +52/-1. **MERGED 04:55:39Z** (mergeCommit `569cfe10fa…`). The Add.43 sub-minute doublet (with #3631) — wenshao half merged.
- **[QwenLM/qwen-code#3620]** — `wenshao`, base `main`, +36/-2. Title `fix(core): match DeepSeek provider by model name for sglang/vllm (#3613)`. **MERGED 05:17:34Z** (mergeCommit `29887ddfef…`). wenshao **back-to-back self-merge pair** with #3630 (synth #91/#94 family): merge gap **21m55s**, both base `main`, disjoint surfaces (telemetry FileExporter vs. provider-matching).

**Total merges: 4** (codex 1, anomalyco 1, qwen-code 2, litellm 0, sst/opencode 0, goose 0, cline 0). The **6-window codex drought (Add.38–43) breaks** at Add.44 with andmis #19610. The **5-window anomalyco drought (Add.40–43) breaks** at Add.44 with #24435.

## Opens in window

- **None.** No new opens across all 7 repos in this window. Contrast with Add.43 which had 1 open (codex #19635) — open rate halved while merge rate jumped 0 → 4.

## Notable updates

- **[openai/codex#19606]** — `bolinfest`, head SHA changed from `848e51c4c6…` (Add.43 baseline) to **`10dfdd9fe6fa81717f36d6149874a3126310951c`**. Updated **04:57:02Z**. Companion stack PRs #19395 (`8b87b47244…`), #19394 (`7753791827…`), #19393 (`5bd445dddd…`), #19392 (`b735f191ab…`) all updated 04:57:02Z (same second across n=5). **Bolinfest stack rebase #8.** Inter-rebase cadence: rebase#7 04:31:08Z → rebase#8 04:57:02Z = **delta8 = 25m54s**. Contraction continues from delta7=1h08m42s. Synth #131's "bounded oscillation between roughly 1h and 1h08m" working model is **FALSIFIED at delta8**: 25m54s is well below the proposed 1h floor. See synth #133.
- **[openai/codex#19058]** — `won-openai` (Won Park), base `main`, +376/-8. Title `Add /auto-review-denials retry approval flow`. Updated **05:15:38Z**, created 2026-04-23T00:20:57Z (lifespan-at-update 3d4h54m41s). Surface: agent approval / denial retry flow — **same broad permissions/approval surface family** as the bolinfest n=5 stack (#19606+#19395+#19394+#19393+#19392 all titled "permissions: …"). Different author, different angle, **same permissions surface convergence inside one repo**. This pushes the codex permissions surface family count to **n≥6** (synth #126 named n=5 as the threshold-escalation event).
- **[anomalyco/opencode#23395]** — `OpeOginni`, base `dev`, +14/-7. Title `fix(tui): update toast duration handling to use default value`. Updated **05:12:54Z**, created 2026-04-19T07:45:07Z (lifespan-at-update **6d21h27m47s**). Long-tail refresh on aged TUI surface; first OpeOginni event today.
- **[QwenLM/qwen-code#3631]** — `B-A-M-N`, base `main`, +903/-3. Updated **05:15:30Z** (no SHA change vs. Add.43's `f27d4dce…`; still `f27d4dce547949e0…`). The other half of the Add.43 sub-minute doublet — **did NOT merge** while its co-create #3630 did. Asymmetric half-merge of sub-minute doublet (synth #87 family signature, but at sub-second co-create rather than sub-10s).
- **[QwenLM/qwen-code#3629]** — `B-A-M-N`, base `main`, +247/-0. Title `feat(config): support API timeout env override`. Updated **05:06:58Z**, created 04:26:28Z. Lifespan-at-update 2h42m. B-A-M-N **second open today still OPEN** (after #3631 also open).
- **[QwenLM/qwen-code#3617]** — `mohitsoni48`, base `main`, +134/-0. Updated **05:18:50Z**. Pure-additive (zero deletions), 134 lines, **strict OpenAI compat tool-result media split**. Long-tail refresh.
- **[QwenLM/qwen-code#3567]** — `B-A-M-N`, base `main`, +254/-2, MERGED 2026-04-24T23:19:27Z. Updated **04:59:36Z** post-merge (probably comment / branch-deletion side-effect). Cited only as evidence the B-A-M-N author is currently active across ≥3 PRs.

## Notable closures

- **None** in window (no close-without-merge). Synth #132's P2 ("≥1 of the 5 cited PRs merges before any closes-without-merge") **fires positively in window**: #3630 merged at 04:55:39Z; no instrumentation-theme PR has closed-without-merge. The "observability debt batch" model survives this discrimination test.

## Bolinfest stack & etraut cluster status

- **bolinfest n=5 stack:** **rebase #8 at 04:57:02Z** (delta8 = 25m54s, cadence contracting). All 5 SHAs changed in same second. **Still 0 merges** across the n=5 stack. With andmis #19610 having merged, the bolinfest cohort is now the largest unmerged stalled cohort on codex. Time-since-creation for #19392/#19393/#19394/#19395: 1d12h54m+ (created 2026-04-24T16:02:5Xz). #19606 created 2026-04-25T22:58:30Z (1d6h+).
- **etraut-openai n=5 stewardship cohort** (#19618 / #19620 / #19625 / #19630 / #19631): **no updates this window**. Last touch 03:26:03Z. Quiescent **>1h53m** at window close. Add.43 projected threshold crossing at ~06:26:03Z — **on track**, ~1h08m to go.
- **andmis singleton:** RESOLVED via merge of #19610 at 04:57:42Z. Cluster cleared.

## Background activity

- `gh pr list --search "updated:>2026-04-26T04:51:00Z"` across 7 repos: **15 hits** (codex 7, anomalyco 2, qwen-code 6, litellm 0, sst/opencode 0, goose 0, cline 0). Compare Add.43 (9 hits / 16m) → Add.44 (15 hits / 27m50s). Per-minute rates: 0.56/min → 0.54/min (essentially flat) — but the **merge fraction jumped from 0/9 = 0% to 4/15 = 27%**. The "queue-builds-faster-than-it-clears" reading from Add.43 is now resolved: the queue cleared to merges within ~1h, supporting the synth #129 / Add.43 hypothesis (b) "merges were preparatory, batch landed shortly after."
- `litellm` remains quiescent post-#26546 (Add.43 04:49:05Z) — silence now extends **>30m** through Add.44 close. Combined post-promotion silence (synth #127): 03:39Z → 04:49:05Z = 1h10m broken by single PR; resumed silence 04:49:05Z → 05:18:50Z = **29m45s**. Two-phase quiescence regime.

## Patterns

- **Codex drought breaks via singleton, not via stack.** The 6-window codex merge drought (Add.38–43) ended with andmis #19610 (small, 44/-7, isolated PR), not with bolinfest stack drainage. The bolinfest n=5 stack continues to rebase without merging (now at rebase#8). This **discriminates between two readings of the drought**: (i) "global codex merge gate" predicts both andmis and bolinfest drain together; (ii) "stack-specific stall" predicts singletons drain while stack stalls. Add.44 supports (ii). See synth #133.
- **Anomalyco back-pressure discharges via merge after one-window detour.** Synth #130's bimodal prediction (discharge OR deepening) was extended in Add.43 to a "third mode" (discharge to *other* repos). Add.44 shows the third mode was a **27m transient** before the originating repo also discharged via merge (#24435). The corrected reading: discharge happens — but it can route through other repos *first* before the originating repo finally clears. Time-to-originating-repo-merge from Add.42 anomalyco silence onset: ~1h05m.
- **Synth #131 falsified at delta8.** Inter-rebase: …delta6=58m05s (synth #119), delta7=1h08m42s (synth #131), **delta8=25m54s**. Synth #131 proposed "bounded oscillation between roughly 1h and 1h08m" as working model after monotonic-expansion (#125) was falsified. delta8=25m54s is **34m below the proposed 1h floor**. Three falsified cadence models in a row (geometric decay #123 → monotonic expansion #125 → bounded oscillation #131). The bolinfest stack rebase cadence is **structurally unpredictable** at this resolution. See synth #133.
- **Wenshao self-merge pair (synth #91/#94 family) on qwen-code with 21m55s gap.** #3630 merged 04:55:39Z, #3620 merged 05:17:34Z; both base `main`, disjoint surfaces, same author. Inter-merge gap 21m55s. Synth #91 named "sub-15-minute inter-merge cadence" as the original pattern; this is **slightly above the 15-minute cadence** at 21m55s, suggesting the cadence-specific framing in #91 was over-tight. The signature here is "back-to-back self-merge pair on disjoint surfaces by single author within ~30min" — a **looser pattern envelope** than synth #91's name. See synth #134.
- **Synth #126 codex-permissions surface family extends to n≥6.** Add.44's #19058 update (won-openai, auto-review-denials retry approval flow) shares the broad approval/permissions theme with the bolinfest n=5 stack. Different author, different angle (denial retry vs. profile-backed config), **same surface family**. Cited evidence: #19606/#19395/#19394/#19393/#19392 all titled "permissions: …"; #19058 titled "Add /auto-review-denials retry approval flow." n=6 distinct authors-or-angles on permissions/approval inside codex within ~2 days. Synth #126 named n=5 as threshold; n=6 confirms escalation rather than reverting. See synth #134.

## Window merge-rate

| Repo | Add. 40 | Add. 41 | Add. 42 | Add. 43 | Add. 44 |
|------|---------|---------|---------|---------|---------|
| codex | 0 | 0 | 0 | 0 | **1** |
| litellm | 2 | 0 | 0 | 0 | 0 |
| anomalyco/opencode | 0 | 0 | 0 | 0 | **1** |
| sst/opencode | 0 | 0 | 0 | 0 | 0 |
| goose | 0 | 0 | 0 | 0 | 0 |
| qwen-code | — | — | — | 0 | **2** |
| cline | — | — | — | 0 | 0 |
| **Total** | **2** | **0** | **0** | **0** | **4** |

**Three-window zero-merge floor breaks at Add.44 with 4 merges.** Both codex (drought 6 windows) and anomalyco/opencode (drought 5 windows) drained simultaneously. The bolinfest stack remains the **structurally stalled cohort** through this discharge, supporting a stack-specific (not repo-wide) stall reading.
