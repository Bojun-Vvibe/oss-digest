# ADDENDUM-107 — 2026-04-28 (capture 2026-04-28T02:11Z)

**Capture window:** 00:50:00Z → 02:11:00Z UTC. Window width: **1h21m00s** (widest Add window in W17 to date — caused by dispatcher tick gap, not author silence).
**Predecessor:** ADDENDUM-106 (closed 00:50:00Z; carry preds A'''-X plus 248-1/248-2/248-3 plus 250-1..6 from synth #250). Key actives at Add.106 close: Pred A''' (kitlangton monotonic narrowing), H (evawong-oai stack), I (gemini-cli pause), J/N (sub-pattern d/e), L (litellm decoupled — already mechanism-falsified), O (ayushh0110 multi-surface), P (stratified resumption — partial tension), Q' (kitlangton 3-mode iteration), R (LCubero retry), S (bolinfest stacked pair), T (litellm deferred-batch recurrence), U (sub-pattern f recurrence), V (gemini-cli-robot title leak), W (opencode shallow→mid trajectory), X (kitlangton in-place title edits).

## Headline events — **THREE major regime shifts in one tick**

1. **opencode shallow→mid pause REVERSES**: kitlangton merged **3 PRs in-window** (#24693 00:53:27Z, #24703 01:48:51Z, #24705 01:58:12Z) — **Pred W falsifies in the "non-monotonic" direction** (opencode crossed shallow→mid at Add.106, then resumed without entering deep — exactly the Pred W alternative branch). Synth #247 stratified-resumption framework is now **explicitly non-monotonic in time**: a repo can cross a stratification boundary and revert.
2. **qwen-code deep-pause BROKEN after 12h22m**: #3623 doudouOUC merged 01:06:09Z **and** #3682 fyc09 merged 01:22:18Z — **Pred 246-4 (qwen-code structurally inactive) FALSIFIES**. The 12h+ silence at Add.106 was a **deferred-batch signature analogous to litellm's**, not structural inactivity. Synth #246's qwen-code exclusion now retracts.
3. **kitlangton opens stacked pair #24706/#24707 at 02:06:24Z/02:06:43Z (19-second separation)** — **mirrors the bolinfest #19899/#19900 codex pattern from Add.106**. Pred S now has **a cross-author cross-repo recurrence within 80 minutes of opening**. Stacked-author-pair is **not a one-shot codex/bolinfest idiosyncrasy**; it is a cross-repo workflow signature among high-cadence maintainers.

In the 1h21m window 00:50Z→02:11Z:

| Repo | In-window MERGED | In-window OPEN | In-window CLOSED-no-merge | Merge-silence at 02:11Z |
|------|------------------|----------------|---------------------------|--------------------------|
| sst/opencode | **3** (#24693 00:53:27Z, #24703 01:48:51Z, #24705 01:58:12Z) | 5 (#24701, #24702, #24704, #24706, #24707) | 0 | **12m49s** (since #24705) |
| openai/codex | **0** | 7 (#19895, #19896, #19899, #19900, #19901, #19904, #19905, #19907) | 0 | **1h28m44s** (since #19892 00:43:16Z; out-of-window-anchor #19836 colby-oai 00:42:11Z merged just inside Add.106 boundary) |
| BerriAI/litellm | **1** (#26661 01:46:21Z) | 6 (#26657, #26658, #26659, #26660, #26662, #26663, #26664) | 0 | **24m39s** |
| google-gemini/gemini-cli | **0** | 0 in-window (note #26084 carry from Add.106 still OPEN) | **2** (bot housekeeping: #25779 00:54:32Z, #25772 00:55:01Z) | **4h53m28s** (since #26079 21:17:32Z, extending to **5-tick**) |
| block/goose | **0** | 1 (#8872 app/github-actions release-bump 00:58:13Z) | 0 | **3h59m+** since #8854 22:11:20Z |
| QwenLM/qwen-code | **2** (#3623 doudouOUC 01:06:09Z, #3682 fyc09 01:22:18Z) | 1 (#3684 doudouOUC 02:06:28Z) | 0 | **49m+** (since #3682) |

**Cross-repo merge count this window: 6 merges across 4 of 6 repos** (codex, gemini-cli, goose silent on merges). This is the **highest cross-repo merge throughput per-tick in the W17 sample after Add.103**.

## opencode in-window — **kitlangton triple-merge unblocks the shallow-pause; opens stacked pair #24706/#24707 mirroring bolinfest pattern**

In-window MERGED: **3** — all kitlangton:
- **#24693** kitlangton `fix(httpapi): align session boolean query parsing` merged **00:53:27Z** (head `eef9481a1594f868aeeb783fa53ed3bb311605eb`), lifespan from 23:51:14Z (Apr 27) = **1h02m13s**. **This is the same PR that received the in-place title edit at Add.106** (was `match legacy session query parsing` at Add.105 → `align session boolean query parsing` at Add.106 → merged at Add.107). **Pred X (kitlangton in-place title edits as deliberate iteration mode) PASSES at Add.107**: the in-place edit was a successful iteration step, immediately followed by merge, demonstrating the edit was **goal-directed scope refinement** not noise. **Pred Q' (3 modes of scope iteration: close-and-refile, in-place-title-edit, merge) CONFIRMS at Add.107** with in-place-edit→merge sequence as the third mode's success exemplar.
- **#24703** kitlangton `fix(httpapi): preserve provider oauth authorize parity` merged **01:48:51Z** (head `d790df31af19304ec864bc62625d937c44bd1e7c`), lifespan from 01:37:42Z = **11m09s**.
- **#24705** kitlangton `chore: bump effect beta` merged **01:58:12Z** (head `337946335a8210df24fde0f5ef4cd5fef8710b64`), lifespan from 01:52:12Z = **6m00s**. **Tied for shortest opencode merge in W17 sample.**

**Pred A''' (kitlangton scope-narrowing trajectory monotonic in token-specificity):** the #24693 merge **completes the trajectory**, but #24706 `fix(httpapi): preserve mcp oauth error parity` (opened 02:06:24Z, head `865561d02618d5a6297533403d02f11e443075d0`) **continues the httpapi-oauth-parity surface theme** with a new specific qualifier (`mcp oauth error parity` — distinct from #24703's `provider oauth authorize parity`). The series now spans 3 distinct httpapi-oauth surfaces by kitlangton: **session-query** (#24693, merged), **provider-authorize** (#24703, merged), **mcp-error** (#24706, OPEN). **Pred A''' refines to Pred A''''**: the kitlangton series is **multi-surface oauth/session-parity**, not single-surface; the within-surface monotonic-narrowing claim was too narrow. Pred A'''' carries: by Add.110, kitlangton produces ≥1 further httpapi-parity PR on a distinct (non-{session, oauth-authorize, oauth-mcp-error}) sub-surface.

In-window NEW OPENs (5):
- **#24701** workdocyeye `fix: use continuous scroll layout for share page on desktop` (01:33:44Z).
- **#24702** dixoxib `fix(core): remap tail_start_id for compaction parts when forking sessions` (01:34:03Z, head `be8dae4e63d5e20a4ce1201bc1d934b208c89512`) — **specific PR called out for citation density** (compaction-fork-tail interaction, internal session-state bug class).
- **#24704** jlongster `feat(core): store relative path for sessions` (01:52:06Z, head `3ca3849f7b0d69c752c3e06a670bca745ecb3f95`) — **first jlongster PR in W17 sample** (notable: known author from prior weeks).
- **#24706** kitlangton `fix(httpapi): preserve mcp oauth error parity` (02:06:24Z).
- **#24707** kitlangton `Add Effect Drizzle SQLite adapter` (02:06:43Z, head `b6a83e196c25f44be99bb16e81bf70c93eacddcf`) — **new surface entirely (effect-drizzle-sqlite); first kitlangton PR in W17 sample on a non-httpapi surface**.

**#24706 + #24707 stacked author pair (19-second separation):** **distinct titles, distinct head SHAs, distinct surfaces** (`httpapi/mcp-oauth-parity` vs `effect/drizzle-sqlite`). **NOT sub-pattern (e)** (no same-title same-SHA), **NOT sub-pattern (a)** (no shared branch). Matches **synth #244 sub-pattern (a) variant** (same-author near-simultaneous open on disjoint surfaces). **Pred S (bolinfest stacked pair from Add.106) acquires a cross-author cross-repo replication** at Add.107: pattern recurs within 80 minutes between codex and opencode, with kitlangton on opencode mirroring bolinfest on codex. **Promote to synth #251 (cross-repo stacked-author-pair convergence)**.

**Pred B (jeevan6996, falsified at Add.105):** {#24674, #24678, #24680} all 3 still OPEN at 02:11Z; lifespans now **4h26m+, 4h18m+, 4h10m+**. **No merge across 6 Add ticks (Add.102-107).** Continues falsified.

**LCubero sub-pattern (e) sequel test (Pred R):** no further LCubero PR in 1h21m window. #24691 OPEN at lifespan **2h36m+**. Pred R deadline 23:34Z 2026-04-28 (21h22m remaining). Carry.

**Merge-silence at capture: 12m49s** since #24705. opencode is back in **shallow-pause** (synth #247 stratification) — confirming Pred W falsifies in the "non-monotonic" direction explicitly.

## codex in-window — **0 merges, 7 OPENs including a 2nd lifecycle-hooks PR at Add.107 (Pred E re-evaluates)**

In-window MERGED: **0**. Trailing merge anchor: #19892 miz-openai 00:43:16Z (just inside Add.106 close). Note: #19836 colby-oai `disallow fileparams metadata for custom mcps` (head `67c4fad8965e7ef44ce514b8f2b2085af13610ae`) merged at **00:42:11Z** — this was **65 seconds before #19892** and was **omitted from Add.106's accounting**. Add.106 reported 1 codex merge (#19892); actual was **2 codex merges** (#19836 + #19892, doublet inside 65s). **Methodological revision to Add.106**: codex merge count was 2, not 1; the **doublet inside 65s** is a **codex deferred-batch signature analogous to litellm's** (synth #249), broadening the deferred-batch regime to a second repo. **Promote: deferred-batch regime is cross-repo, not litellm-specific.** This **strengthens Pred T** (litellm deferred-batch recurrence) by giving it a same-tick cross-repo co-instance (codex). Synth #249 needs a co-fire annotation.

In-window NEW OPENs (7):
- **#19895** stefanstokic-oai `External agent session support` (00:19:24Z) — first-time-author flagged at Add.106.
- **#19896** `app/github-actions` (bot) `Update models.json` (00:28:45Z).
- **#19899** bolinfest `app-server-protocol: mark permission profiles experimental` (00:46:22Z).
- **#19900** bolinfest `permissions: add built-in default profiles` (00:46:23Z).
- **#19901** fcoury-oai `feat(tui): suggest plan mode from composer drafts` (00:52:58Z, head `38e6abc46b6e983ac87418a244061bd31cd996c6`) — first fcoury-oai PR in W17 sample.
- **#19904** efrazer-oai `fix: configure AgentIdentity AuthAPI base URL` (01:21:41Z, head `8e394fafaf732c35f1772239c81ec8533faae2b8`) — extends efrazer-oai stack {#19763, #19764} on agent-identity surface.
- **#19905** eternal-openai `Add compact lifecycle hooks` (01:24:16Z, head `edaec3e9bb2a91b80f918df5c69c6cc0b086fa1f`) — **CRITICAL: this is a lifecycle-hooks-titled PR, 1 tick after Pred E (axis-7 lifecycle-hooks 3rd by Add.106) was deadline-FALSIFIED at Add.106**. Author is `eternal-openai` (different from prior #19778 abhinav-oai `Add hooks/list app-server RPC`). **Pred E falsifies-then-resurrects-at-Add.107**: the 3rd lifecycle-hooks PR appeared **1 tick late**. **Promote: deadline-falsification with 1-tick-late confirmation is a distinct outcome class from "stable falsification" (Pred B/D regime)**. Synth #234 reflexivity territory: predicate timing windows are **boundary-fragile** when the underlying activity is bursty.
- **#19907** maja-openai `Clarify network approval auto-review prompts` (01:53:53Z, head `03fc0b7e0177aae5828c181283d89272db740cc9`) — first maja-openai PR in W17 sample.

**Pred S (bolinfest #19899/#19900 resolution):** at Add.107, both still OPEN; ages 1h25m and 1h25m respectively. **Branch (iii) "both still OPEN ≥4h" requires more time**; not yet decided. Carry, 3 ticks remaining. **However, pred S already has a cross-repo replication (kitlangton #24706/#24707) at Add.107**, so the *pattern-recurrence* aspect of S has confirmed even if the bolinfest-instance resolution branch is undetermined.

**Pred H (evawong-oai 5-PR stack):** {#19846, #19847, #19848, #19849, #19852} all still OPEN at lifespans 7h58m-7h59m (range tightens since the 5 PRs were opened within ~5min). #19867 (close-not-merge from Add.106) was the only stack-adjacent close. **Pred H continues passing predicted-direction; stack age now ≈8h with 0/5 merge**. Carry.

**Trailing merge-silence at capture: 1h28m44s** since #19892. **codex crossed shallow→mid in-window** (started Add.107 at 6m44s; ended at 1h28m). **Second repo to cross shallow→mid in 2 consecutive Add ticks** (opencode at Add.106, codex at Add.107). **Synth #247 stratification has now seen the shallow→mid crossing twice in a row** — and opencode reverted while codex is currently mid-pausing. **Promote: shallow→mid crossings are a recurrent diagnostic event, not an Add.106-specific anomaly**.

## litellm in-window — **1 MERGE (#26661 krrish-berri-2 16m), 6 NEW OPENs, ishaan-berri now has 3 OPEN PRs on projects surface**

In-window MERGED: **1**:
- **#26661** krrish-berri-2 `Add gateway-managed conversation IDs for the Responses API` merged **01:46:21Z** (head `0e38dfc2575e7a3cf6896feae437a248abfc593c`), lifespan from 01:30:30Z = **15m51s**. **First krrish-berri-2 W17 merge.** Author class: internal `-berri-2` suffix variant; this is **the first numerically-suffixed `-berri` author** in W17 — an author-handle versioning pattern distinct from PR-branch versioning.

**Inter-merge gap from Add.106 doublet (#26655 mateo-berri 00:36:47Z) to #26661: 1h09m34s.** **Litellm pattern at Add.107: doublet (00:36:47Z + 00:39:26Z) → 1h09m gap → singleton (#26661 01:46:21Z) → 24m+ silence (continuing).** This is **a 3-event sequence within 1h09m** that **does not match a clean deferred-batch signature**: the doublet itself was the deferred batch, but the singleton 1h09m later is **post-batch maintenance cadence**. **Pred T (litellm deferred-batch recurrence by Add.112):** the post-doublet singleton does NOT count as a doublet recurrence; Pred T still pending, 5 ticks remaining. **However**, Pred T's mechanism is **partially confirmed by codex's #19836+#19892 doublet inside 65s** at Add.106 close (cross-repo deferred-batch instance).

In-window NEW OPENs (7 — ishaan-berri ×3 dominates):
- **#26658** kenany `fix(guardrails): improve CrowdStrike AIDR input handling` (00:55:20Z, head `69dcf5497858f480286f2307e7c8735472c43096`) — **kenany #26658 is a refile of CLOSED #25244 (same title, opened Apr 6, closed Apr 27 04:56:01Z = 21-day age)**. Cross-Add observation: same-title refile across 21-day gap is a **sub-pattern (b) instance with extreme inter-attempt latency** (vs intra-day for ishaan-berri/yuneng-berri). **Refines synth #250 sub-pattern (b)**: latency dimension spans **minutes to weeks**, not just minutes-hours.
- **#26659** ishaan-berri `fix(projects): non-admin users can now see their projects` (00:55:32Z, head `7be66dda1a4b629a85815863dbfa742f4a8d800d`) — **2nd ishaan-berri PR on projects-visibility surface** (#26657 was the 1st refile from #26649).
- **#26660** ishaan-berri `fix(deepseek): DeepSeek V4 support - model registry, multi-turn thinking fix, no-prefix routing` (01:29:52Z, head `c54ff38646bf8e6ec1156d86145ecf8337a6d3f3`) — **distinct surface (deepseek-v4 model integration) — NEW upstream model release surface**.
- **#26662** Michael-RZ-Berri `[Fix] Redact spend logs error message` (01:42:28Z, head `468cfe0c3d08bdc257a457f6d708148762ce69d0`).
- **#26663** octo-patch (bot) `fix(auth): enforce access_group_ids model restriction when key/team models is empty` (01:45:53Z, head `73bd597850aed9f7751131655103b5aa80d83378`) — **bot-author PR**, distinct from `oss-agent-shin` and `app/*` bot classes; **first octo-patch PR in W17 sample**. **Adds a 4th bot-class to the W17 catalog** (gemini-cli-robot, app/github-actions, oss-agent-shin, octo-patch).
- **#26664** ishaan-berri `fix(projects): project dropdown empty for internal_user (3 bugs)` (01:48:11Z, head `7c1ffaf0994bf2121c5ea845616e476cf5bafa27`) — **3rd ishaan-berri PR on projects-visibility surface** within 53 minutes (00:55:32Z → 01:48:11Z). **#26657 + #26659 + #26664 form an ishaan-berri triple on the same surface**, all 3 still OPEN. **Cross-author parallel to kitlangton's httpapi-session series at Add.105**: same-author multi-PR-on-same-surface is now observed across both opencode (kitlangton/httpapi) and litellm (ishaan-berri/projects-visibility). **Promote to synth #251 alongside the stacked-pair convergence**: same-author multi-PR-on-shared-surface is a **cross-repo workflow signature among internal author classes** (`-berri` and core opencode maintainers).

**Pred 250-5 (`-berri` sub-pattern (b) clustering):** ishaan-berri now has **2 sub-pattern (b) instances** (#26649→#26657, plus #26659/#26664 are stacked-on-surface not refile-of-prior). yuneng-berri has 1. mateo-berri has 0 (direct-merge). krrish-berri-2 has 1 direct-merge (no precedent close-and-refile). **`-berri`-class is bimodal**: ishaan + yuneng are sub-pattern (b) users; mateo + krrish-2 are direct-merge users. **Pred 250-5 partially passes (clustered to ishaan/yuneng subset, not whole `-berri` class)**.

**Pred O (ayushh0110 multi-surface retry):** #26652 ayushh0110 `fix(aiohttp): sanitize non-ASCII response headers` (opened 23:24:30Z Apr 27, OPEN at lifespan 2h47m+) is the 4th ayushh0110 PR across 2 surfaces (mcp-semantic-filter + aiohttp-headers). **Still no 3rd-attempt on either surface**; Pred O carry, 3 ticks remaining.

**Pred U (sub-pattern (f) recurrence):** **octo-patch #26663 is a bot-author PR but NOT a self-close drive-by** — it's a substantive auth-restriction fix, OPEN at 25m. Does not satisfy Pred U. Carry, 5 ticks remaining.

**Trailing merge-silence at capture: 24m39s.**

## gemini-cli in-window — **2 stale changelog PRs CLOSED by bot (housekeeping); 0 merges; Pred I extends to 5-tick**

In-window MERGED: **0**. In-window OPENs: **0** new (note: #26084 from Add.106 carry still OPEN, no new gemini-cli-robot PR).

In-window CLOSED-not-merged (**2** — both bot housekeeping):
- **#25779** gemini-cli-robot `Changelog for v0.39.0-preview.2` opened 2026-04-22 00:46:56Z, **CLOSED 2026-04-28 00:54:32Z** (lifespan 6 days 0h07m). Aged-bot-PR cleanup.
- **#25772** gemini-cli-robot `Changelog for v0.39.0-preview.1` opened 2026-04-21 22:57:53Z, **CLOSED 2026-04-28 00:55:01Z** (lifespan 6 days 1h57m). Aged-bot-PR cleanup.

**Both closes are within 29 seconds of each other (00:54:32Z and 00:55:01Z)** — **automated batch-close sweep on aged changelog bots**. This is a **synth #244 sub-pattern (a)/(c) hybrid for bot-class-author**: same-author near-simultaneous close-events on aged stale PRs. **Distinct from sub-pattern (f) (drive-by validation self-close, ≤10s lifespan)** — these closes are at **6-day lifespans**, the opposite end of the lifespan distribution. **Promote: bot-housekeeping batch-close is a 7th close-event sub-pattern candidate (g)**: same-bot-author aged-stale PR batch-close, lifespan ≥days, batch-window ≤60s. **Confirms Pred 250-3 direction** (catalog open-ended) — synth #250 explicitly disclaimed completeness, and sub-pattern (g) appearing 1 tick later is consistent with the >0.5/tick discovery rate.

**Pred I (gemini-cli pause extension):** merge-silence now **4h53m28s+** at Add.107 capture, **5-tick zero-merge**. **Pred I extends successfully**.

**Pred 248-1 (gemini-cli silence ≥3h confirmed):** passed at Add.106; ≥4h passed at Add.107.

**Pred V (gemini-cli-robot title-leak persistence by Add.110):** no new gemini-cli-robot PR in window with leading `# ` artifact (the only new bot activity was the 2 housekeeping closes, no new opens). Pred V carry, 3 ticks remaining.

## goose in-window — **1 NEW OPEN (release-bump bot), 0 merges, silence extends**

In-window MERGED: **0**. In-window NEW OPEN: **1** — **#8872** `app/github-actions` (bot) `chore(release): bump version to 1.33.0 (minor)` (00:58:13Z, head `087d65a6ef67000976e2bcd0c7cb7d75138ce39c`). Standard automated release-bump PR.

In-window CLOSED-not-merged: **0**.

**Trailing merge-silence: ~3h59m** since #8854 22:11:20Z (Apr 27). goose stays in **deep-pause** under synth #247 stratification at Add.107.

## qwen-code in-window — **2 MERGES break the 12h22m silence; Pred 246-4 falsifies; deferred-batch signature confirmed cross-repo**

In-window MERGED: **2**:
- **#3623** doudouOUC `fix(cli): recognize OpenAI-compatible providers in \`qwen auth status\`` merged **01:06:09Z** (head `1921d805bf9fb8b7cf718de7f0402897ab00db7c`), lifespan from Apr 25 17:16:56Z = **2 days 7h49m**. **Aged-PR merge** (longest-lifespan qwen-code merge in W17 sample).
- **#3682** fyc09 `fix(core,cli): stop stripping reasoning on model switch/history load` merged **01:22:18Z** (head `7635f8c1b9d8e5275681023ad2c48d7a2dd9c5cd`), lifespan from Apr 27 15:51:35Z = **9h30m43s**.

**Inter-merge gap: 16m09s** (01:06:09Z → 01:22:18Z). Doublet inside 17m after **12h22m+ pause**. **This is the deferred-batch signature in qwen-code form** — distinct from litellm's (which used a 3-min inter-merge doublet) and codex's (which used a 65s inter-merge doublet). **Lifespan stratification of the doublet:** qwen-code 2d7h+9h (long-aged), codex 8h+37m (intra-day), litellm 1h47m+5m (mixed-aged). **Promote: deferred-batch regime is cross-repo with lifespan stratification varying per repo's PR-aging baseline.** **Synth #249 generalizes**.

In-window NEW OPEN: **1** — **#3684** doudouOUC `feat(core): event monitor tool with throttled stdout streaming (Phase C)` (02:06:28Z, head `80dc6d5995be8d29882bcf2156a2f8a94b59ad0e`) — **same author as #3623** (the deferred-batch doublet's first merge). doudouOUC is **back online with a feature PR** 1h00m after merging the auth fix. **Author re-engagement signature** — this is **distinct from sub-pattern (b) close-and-refile** because #3684 is a NEW SURFACE entirely (event-monitor-tool vs auth-status), not a refile.

**Pred 246-4 (qwen-code structurally inactive):** **HARD FALSIFIES at Add.107**. The 12h22m silence at Add.106 was **deferred-batch silence**, not structural inactivity. Synth #246's qwen-code exclusion **must retract**.

**Trailing merge-silence at capture: 49m+** since #3682 01:22:18Z. qwen-code is **back in shallow-pause** (synth #247 stratification). **3rd repo to cross deep→shallow in W17 sample** (after litellm Add.106, opencode Add.106-107 traversal mid→shallow).

## Cross-repo merge-pause inventory at capture 02:11Z (Pred P/W evaluation)

| Repo | Merge-silence at 02:11Z | In-window merges | Stratification class (synth #247) | Direction since Add.106 |
|------|--------------------------|--------------------|--------------------------------------|---------------------------|
| sst/opencode | **12m49s** | 3 | **shallow** | mid→shallow (REVERTED, Pred W non-monotonic branch) |
| openai/codex | **1h28m44s** | 0 (in-window); 2 at Add.106 close (#19836+#19892 doublet) | **mid** | shallow→mid |
| BerriAI/litellm | 24m39s | 1 | **shallow** | shallow→shallow (post-doublet maintenance) |
| google-gemini/gemini-cli | **4h53m28s** | 0 | **deep** (5-tick zero-merge) | extending |
| block/goose | **3h59m+** | 0 | **deep** | extending |
| QwenLM/qwen-code | **49m+** | 2 | **shallow** | structurally-inactive→shallow (HARD-RETRACTS Pred 246-4) |

**Stratification distribution at Add.107: 3 shallow (opencode/litellm/qwen-code) + 1 mid (codex) + 2 deep (gemini-cli/goose).** **Compared to Add.106: 1 shallow (codex) + 1 mid (opencode) + 2 deep (gemini-cli/goose) + 1 structurally-inactive (qwen-code) + 1 mixed/resumed (litellm).** **Net direction: dispersion has compressed** — the W17 sample is converging toward a 3-shallow / 1-mid / 2-deep canonical-shape, with the structurally-inactive class having emptied.

**Pred P (Add.105: by Add.107, 3-deepest-at-Add.104 cohort {qwen-code, litellm, gemini-cli} ≥2 with silence ≥3h, while shallow cohort {opencode, codex, goose} ≤1 with silence ≥1h):** at Add.107: deep-cohort silence ≥3h count = **1** (gemini-cli only; qwen-code resumed, litellm resumed). Pred P required **≥2**. **Pred P FALSIFIES at the literal threshold (1 vs ≥2).** Shallow-cohort ≥1h count = **2** (codex 1h28m + goose 3h59m). Pred P required ≤1. **Pred P FALSIFIES on the shallow side too (2 vs ≤1).** **Pred P FAILS BIDIRECTIONALLY at Add.107.** **Synth #247's stratified-resumption framework needs major revision**: the actual data shows **stratification is fluid and crossings are common**, not a stable per-tick property.

## Pred-status table for ADDENDUM-107 close

- **Pred A''''** (NEW; was A''') → kitlangton multi-surface oauth/session-parity series; carry 3 ticks.
- **Pred B** → still falsified across 6 ticks; **structural falsification holds**.
- **Pred C'** → still falsified.
- **Pred D** → still falsified (skgandikota #26642 still OPEN at 4h13m).
- **Pred E** → **falsified-then-resurrected**: deadline-falsified at Add.106; #19905 eternal-openai `Add compact lifecycle hooks` OPENED at Add.107, **1 tick late**. Reclassify as **boundary-fragile predicate**.
- **Pred F** → still neutrally falsified.
- **Pred G** → CONFIRMED at Add.104.
- **Pred H** → carry; evawong-oai 5-stack still 0/5 merge at age ≈8h.
- **Pred I** → CONFIRMED, extends to 5-tick at Add.107.
- **Pred J** → no new sub-pattern (d); carry, 3 ticks.
- **Pred K** → already evaluated.
- **Pred L** → mechanism-falsified at Add.106; **literal threshold also breaks at Add.107** (#26661 merge raises ratio).
- **Pred M** → PASSED at Add.106.
- **Pred N** → no sub-pattern (e) recurrence; carry, 4 ticks.
- **Pred O** → ayushh0110 still 4 PRs across 2 surfaces; carry, 3 ticks.
- **Pred P** → **FALSIFIES BIDIRECTIONALLY at Add.107** (deep ≥3h count fell to 1; shallow ≥1h count rose to 2).
- **Pred Q'** → CONFIRMS at Add.107 (in-place edit on #24693 → merge sequence completes 3-mode iteration thesis).
- **Pred R** → still pending; 21h22m remaining.
- **Pred S** → **cross-repo cross-author replication CONFIRMS at Add.107** (kitlangton #24706/#24707 mirrors bolinfest #19899/#19900 within 80m). Bolinfest-instance resolution still pending.
- **Pred T** → not literally confirmed (no 2nd litellm doublet); but **mechanism cross-repo-confirmed** by codex #19836+#19892 doublet at Add.106 close and qwen-code #3623+#3682 doublet at Add.107.
- **Pred U** → no sub-pattern (f) recurrence (octo-patch is bot but not drive-by self-close); carry.
- **Pred V** → no new gemini-cli-robot PR in window; carry.
- **Pred W** → **CONFIRMED in non-monotonic branch** at Add.107 (opencode crossed mid→shallow without entering deep).
- **Pred X** → CONFIRMS (in-place edit on #24693 was deliberate, immediately preceded merge).
- **Pred 246-4** → **HARD FALSIFIES** (qwen-code resumed via doublet).
- **Pred 248-1** → ≥4h confirmed at Add.107 (gemini-cli at 4h53m).
- **Pred 248-2** → still pending until next gemini-cli merge.
- **Pred 250-3** → **direction confirms** at Add.107 (sub-pattern (g) bot-housekeeping-batch-close emerges; catalog now 7 patterns in 5 ticks since synth #245).
- **Pred 250-5** → partially passes (clustered to ishaan/yuneng subset); refine.
- **Pred 250-6** → passes (krrish-berri-2 #26661 direct-merge confirms `-berri` bimodality).

## New predicates opened by ADDENDUM-107

- **Pred Y (cross-repo deferred-batch normalization):** by Add.112, ≥1 further repo-tick produces a doublet-or-greater merge cluster within ≤30min after a ≥2h merge-silence in any of the 6 tracked repos. If yes, deferred-batch is the **dominant resumption mode** across W17. Falsifier: 5 consecutive ticks with no such cluster.
- **Pred Z (kitlangton effect-drizzle-sqlite #24707 merges by Add.110):** if #24707 merges within 4 ticks, kitlangton's surface-expansion (away from httpapi) is **maintained-cadence-effective**; if #24707 self-closes, the surface-expansion was **speculative**.
- **Pred AA (ishaan-berri triple-on-projects-surface resolution):** by Add.110, of {#26657, #26659, #26664} ≥1 merges and ≥1 closes, indicating **maintainer-driven dedup of 3 PRs into 1 canonical fix**. Falsifier: all 3 still OPEN at Add.110 (indicating reviewer overload or genuine 3-distinct-bugs).
- **Pred BB (sub-pattern (g) bot-housekeeping-batch-close recurs):** by Add.115, ≥1 further bot-class author batch-closes ≥2 aged-stale PRs within ≤90s. If yes, sub-pattern (g) joins the catalog as a **bot-aging-cleanup signature**. Falsifier: no such event by Add.115.
- **Pred CC (deep-pause repos {gemini-cli, goose} both resume by Add.110):** at Add.107, both gemini-cli and goose are deep (4h53m, 3h59m). If both produce ≥1 merge by Add.110, deep-pause synchronicity is **author/maintainer-tide-driven** (cross-repo coupling). If only one resumes, pauses are independent. If neither resumes, both extend toward 8h+ silence.
- **Pred DD (codex shallow→mid crossing predicts ≥2h silence by Add.109):** codex at Add.107 is at 1h28m. If by Add.109 codex silence reaches ≥2h, codex matches gemini-cli's pause-deepening trajectory (synth #248 R2 generalizes again). If codex resumes ≤1h45m total silence, the synth #247 stratification's mid-pause class is **not a strong attractor** for codex.
- **Pred EE (eternal-openai #19905 lifecycle-hooks merges or self-closes by Add.110):** if #19905 merges, the lifecycle-hooks axis-7 is a **persistent feature surface** across 3+ author-PRs (#8842 michaelneale goose, #19778 abhinav-oai codex, #19905 eternal-openai codex). If #19905 self-closes within 6h, the late-arrival was **opportunistic catch-up** rather than coordinated feature work.

## Capture close

**02:11:00Z (2026-04-28).** Next addendum (ADDENDUM-108) target window: 02:11:00Z → next dispatcher tick. **Operational note**: the unusually wide 1h21m window for Add.107 caused **cross-repo activity to compress into a single tick**, generating 3 simultaneous regime shifts (opencode revert, qwen-code resume, codex stacked-pair recurrence). Future Add windows should target ≤45m to preserve per-tick resolution; if dispatcher gap exceeds 60m, **two intermediate Adds should be synthesized retroactively** to recover resolution. **Add to operational checklist for synth #251.**
