# 2026-04-26 — Addendum 35

**Window:** `2026-04-25T23:29:48Z` → `2026-04-26T00:06:39Z` (36m51s, immediately following Addendum 34).

**Scope:** BerriAI/litellm, openai/codex, anomalyco/opencode (sst/opencode is a redirect alias of anomalyco/opencode — confirmed via `gh api repos/sst/opencode` returning `full_name=anomalyco/opencode`), charmbracelet/crush, block/goose.

## codex (openai/codex)

**One merge in window — first single-merge codex window since the Add. 34 burst (3 merges).** **Self-merge** (bolinfest closes own PR), pure-test diff.

- **[openai/codex#19609]** — opened **23:17:39Z** by `bolinfest`, head SHA `f00db2c8d26ae166c155685db72a68afc67b8c8f`, **MERGED 23:34:07Z by `bolinfest` (self-merge)**, merge SHA `9881dc7306dbfe22b34157e6e47de2b1ae45d527`. **+13/-4 across 2 files.** Base `main`. *"fix: restore 30-minute timeout for Bazel builds."* **Lifespan 16m28s** (opened pre-window in Add. 34, merged in this window). **Direct reversion of #19578** (Add. 34 `bolinfest` merge 17:03:01Z *"fix: increase Bazel timeout to 45 minutes"*) — **45-min hike → 30-min restore in 6h31m05s**, same author both ends. **Falsifiable signal: same-author self-correction of own infra-tuning PR within same calendar day**, no intervening review.

**Stacked-PR mass-refresh at 23:59:33–23:59:38Z (5-second clustered refresh of bolinfest permission-profile stack):**

- **[openai/codex#19395]** — `bolinfest`, base **`pr19394`**, head `02458defe878ff0004499daef4285108e0d0cc7b`, *"permissions: finish profile-backed app surfaces."* Updated 23:59:38Z.
- **[openai/codex#19394]** — `bolinfest`, base **`pr19393`**, head `346d2ace3067ff223fe8a031ef11bda018956b31`, *"permissions: remove core legacy policy round trips."* Updated 23:59:33Z.
- **[openai/codex#19393]** — `bolinfest`, base **`pr19392`**, head `5a078c1d6bcaedbb121b186290e22cf9e78b7ad6`, *"permissions: migrate approval and sandbox consumers to profiles."* Updated 23:59:33Z.
- **[openai/codex#19392]** — `bolinfest`, base **`pr19606`** (chains into the open #19606 refile), head `be7a4f35fdac690afdae32b84b53ea281aa02ada`, *"permissions: derive compatibility policies from profiles."* Updated 23:59:33Z.
- **[openai/codex#19606]** — `bolinfest`, base `main`, head `5f1fed5e89543d80419a5edc6e3f95a64f66fa58`, **+1383/-655 across 59 files**, *"permissions: make runtime config profile-backed."* Updated 23:59:33Z.

**Stack topology now visible: `main ← pr19606 (#19606) ← pr19392 (#19392) ← pr19393 (#19393) ← pr19394 (#19394) ← pr19395 (#19395)`** — a **5-deep PR-as-base-branch ladder**, all by `bolinfest`, all on `permissions:` surface, all refreshed within 5 seconds of each other (23:59:33Z → 23:59:38Z). **Same-second cascading-refresh signature** = mechanical rebase-train on the entire stack. The original #19391 chain (Add. 34) merged into `pr19604` was the **bottom layer**; this is the rebuilt 5-layer stack on top of the new parent #19606 (refile of #19391).

**Other refresh in window:**
- **[openai/codex#19184]** — `viyatb-oai`, updated 23:32:09Z, base `main`, *"fix: handle deferred network proxy denials."* Open since 2026-04-23 — 2-day-old PR refresh.
- **[openai/codex#19389]** — `shijie-oai`, updated 23:41:52Z, base `main`, *"Guard npm update readiness."* Open.

## litellm (BerriAI/litellm)

**Zero merges in window — first zero-merge litellm window in last 5 addenda** (Add.31=6, Add.32=2, Add.33=3, Add.34=4, Add.35=0). Self-merge oscillation series (synth #111) extends: 100% → 0% → 67% → 25% → **N/A (no denominator)**.

**Refresh activity in window:**

- **[BerriAI/litellm#26530]** — `mateo-berri` (debut from Add. 34), updated 00:00:20Z (20m32s after window start). Still OPEN. **+1003/-93 across 17 files.** Head SHA `0644a1b02b43444d7e2567f965e63637557692fc`. *"fix(adapters,vertex): pass Anthropic `output_config` through to backends that accept it."* **Cross-author re-implementation of #26439 (Add. 34 anchor for synth #113) still un-merged at T+1h22m post-#26439-merge** — diff size unchanged from Add. 34 snapshot, suggesting no maintainer feedback yet.
- **[BerriAI/litellm#26531]** — `ishaan-berri`, updated 23:42:10Z. **+191/-10 across 7 files** (vs Add. 34's +179/-10 — micro-growth +12 lines in 12m39s). Head `491bef28ffbb140d25624e87ca958200ddace8e8`. *"feat(mcp): OAuth2 self-service for internal users (LIT-2503)."* **Same LIT-2503 ticket as closed #26517 — refresh confirms scope-split, not abandoned.**
- **[BerriAI/litellm#26451]** — `alihacks`, updated 23:42:24Z. **+909/-81 across 8 files.** Head `7c74005b7ad4f5b9a59244233b7bc3bfd77f479b`. Base `litellm-oss-staging-04-25-2026` (same staging branch as Add. 34's #26439 merger). *"azure_sentinel_truncate Azure Sentinel truncation changes…"* Open since 2026-04-24T20:25Z (28h17m old at refresh).
- **[BerriAI/litellm#26076]** — `Sameerlite`, updated 23:42:24Z (**same second as #26451 refresh — co-bump signature**). Open since 2026-04-20 (5d18h old). *"feat(vertex_ai): Model Garden OpenAPI for publisher model ids."* **Same-second co-bump of two unrelated long-tail PRs (8-day age dispersion: 28h vs 5d18h)** — mechanical refresh signal (synth #84 fingerprint).

**Stale long-tail also refreshed:**
- **[BerriAI/litellm#26284]** `Michael-RZ-Berri` updated 21:13:05Z (out of window — noted only because it was in Add. 34 watch).

## anomalyco/opencode

**Zero merges in window** (last merge was #24405 at 23:27:11Z — 2m37s before window start). **One open in window** that **falsifies synth #114 watch-list bullet #1**.

- **[anomalyco/opencode#24407]** — **OPENED 23:33:04Z by `kitlangton`** (3m16s after Add. 34 closed). Head SHA `2a600797fb0027b3071bab98a5b2419affe639d9`. **+106/-6 across 4 files.** Base `dev`. *"feat(httpapi): bridge experimental tool routes."* **5th consecutive `feat(httpapi): bridge*` PR by `kitlangton`.** Synth #114 explicitly asked "Does `kitlangton` open a 5th `feat(httpapi): bridge*` PR? Or does the chain terminate at #24405's `oauth` rung…" → **answered: chain extends, predicted termination falsified.** Inter-PR open gap from #24405 merge (23:27:11Z) → #24407 open (23:33:04Z) = **5m53s** (tighter than the 10m52s previous inter-merge interval; cadence is *accelerating*, not decaying). Cumulative bridge-surface footprint now: **+691/-64 across 5 PRs** (#24387 +?, #24394 +94, #24398 +76, #24403 +294, #24405 +121, #24407 +106 open).
- **[anomalyco/opencode#24392]** — **CLOSED UNMERGED 23:45:20Z** by `moscovium-mc` (self-close). Opened 21:33:03Z, **+482/-0 across 2 files** (pure-additive changelog scaffold), base `dev`. *"chore: add changelog sync workflow and changelog."* **Lifespan 2h12m17s, abandoned without merge.** Pure-additive infra PR (changelog workflow) → self-closed signature suggests **scope rejected post-CI or post-feedback** (not merge-conflict — diff was clean +482/-0).

**Long-tail refreshes in window:**
- **[anomalyco/opencode#20039]** — `Hona`, updated 00:04:51Z (most-recent activity in window). Open since 2026-03-30 (27 days old). *"feat: bash->shell tool + pwsh/powershell/cmd/bash specific tool definitions so agents work better."* Base `dev`.
- **[anomalyco/opencode#18767]** — `noahbentusi`, updated 23:39:38Z. Open since 2026-03-23 (33 days). Base `beta`. *"feat(app): Mobile Touch Optimization."*
- **[anomalyco/opencode#13854]** — `mocksoul`, updated 23:39:38Z (**same second as #18767**). Open since 2026-02-16 (**68 days old — oldest active PR in tracking**). Base `beta`. *"fix(tui): stop streaming markdown/code after message completes."* **Same-second co-bump of two `base=beta` long-tail PRs (33-day vs 68-day age, both stalled)** — second cross-repo instance of synth #84 fingerprint **in same window** as the litellm #26451/#26076 co-bump.
- **[anomalyco/opencode#24406]** — `herjarsa`, updated 23:31:40Z, head `8b242da3aa03c5d52e0de7f4c8c69cb30efff16d`. Open since 23:21:29Z (Add. 34 anchor). *"feat(tui): add unified task state color convention with icons."*
- **[anomalyco/opencode#19266]** — `codeg-dev`, updated 23:31:56Z. Open since 2026-03-26 (30 days). *"fix(web): harden session diffs handling and support local asset override."*

## charmbracelet/crush, block/goose
**No merges, no opens in window.** Most-recent crush activity #2714 (`taigrr`) opened 21:01:38Z (out of window). Most-recent goose activity #8849 (`fresh3nough`) opened 22:31:24Z (out of window).

## Cross-repo summary

- **1 merge total in window** (codex 1, litellm 0, anomalyco/opencode 0) — sharpest drop from Add. 34's 8-merge peak (-87.5%).
- **1 unmerged self-close** (anomalyco/opencode #24392 by moscovium-mc, +482/-0 lifespan 2h12m).
- **2 distinct same-second co-bump pairs in same 36m51s window**: (a) **litellm #26451 ↔ #26076 at 23:42:24Z** (8-day age spread); (b) **anomalyco/opencode #18767 ↔ #13854 at 23:39:38Z** (35-day age spread, both base `beta`). **Cross-repo simultaneous mechanical-refresh signature** — anchor for synth #115.
- **1 same-second cascading-refresh of a 5-deep PR-as-base-branch stack** (codex #19392/#19393/#19394/#19395/#19606 + #19395 within 5 seconds at 23:59:33–23:59:38Z, all `bolinfest`, all `permissions:`). **Stack topology fully visible in PR metadata: 5 layers chained via `base = pr<N>` convention.** Anchor for synth #116.
- **1 same-author self-reversal of own merged infra-tuning PR within 6h31m05s** (codex #19578 *"increase Bazel timeout to 45 minutes"* 17:03Z → #19609 *"restore 30-minute timeout for Bazel builds"* 23:34Z, both `bolinfest` self-merges).
- **0 debut authors in window** (vs 4 in Add. 34) — cohort exhaustion.
- **Synth #114 watch-list bullet #1 explicitly falsified**: `kitlangton` opened 5th `bridge*` PR (#24407) within 5m53s of #24405 merge. Bridge surface-decomposition is **not** exhausted at oauth rung.

## Notable closures
- **[anomalyco/opencode#24392]** closed unmerged by `moscovium-mc` (self-close on +482/-0 changelog workflow PR after 2h12m).
