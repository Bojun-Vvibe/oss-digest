# 2026-04-25 — Addendum

**Window:** 00:11Z → 00:34Z (continuation of 2026-04-24 final addendum, which closed at 00:11Z 2026-04-25).

## codex (openai/codex)

- **[openai/codex#19472]** — OPENED 00:32:42Z by `viyatb-oai`. *"ci: pin codex-action v1.7."* CI pin PR; same author as the open #19467 Guardian-elicitation reimpl.
- **[openai/codex#19471]** — OPENED 00:26:03Z by `dylan-hurd-oai`. *"[codex] Use serial_test for Windows sandbox tests."* Test-isolation PR — pairs with #19454 *"Split approval matrix test groups"* (refreshed 00:12:00Z, also `dylan-hurd-oai`). Two test-shaping PRs by the same author within 14 minutes.
- **[openai/codex#19470]** — OPENED 00:31:53Z by `mchen-oai`. *"Add turn start timestamp to turn metadata."* Telemetry PR; sibling to #19432 (token-usage tracing spans, still open).
- **[openai/codex#19468]** — OPENED 00:23:33Z by `fjord-oai`. *"Fix Bazel cargo_bin runfiles paths."* Build-system PR.
- **[openai/codex#19467]** — refreshed 00:28:49Z. *"Route MCP elicitations through Guardian review."* The viyatb-oai Guardian-elicitation PR cited in synthesis #45 is now back-to-back with #19472 (CI pin) by the same author.
- **[openai/codex#19458]** — refreshed 00:25:13Z by `lt-oai`. *"Simplify Codex Library file hooks."* Open across the boundary.
- **[openai/codex#19454]** — refreshed 00:12:00Z by `dylan-hurd-oai`. *"Split approval matrix test groups."* Test-organization PR.
- **[openai/codex#19449]** — MERGED 00:17:06Z by `bolinfest`. *"permissions: remove legacy read-only access modes."* The legacy-mode removal landed; structural sibling to the permissions slice (#19391-#19395) tracked in synthesis #44.

## litellm (BerriAI/litellm)

- **[BerriAI/litellm#26464]** — OPENED 00:28:43Z by `yuneng-berri`. *"[Fix] Harden team metadata handling in /team/new and /team/update."* Same surface as the still-open team-budget PRs #26455 / #26462.
- **[BerriAI/litellm#26463]** — OPENED 00:25:01Z by `stuxf`. *"fix(mcp): tighten public-route detection and OAuth2 fallback gating."* MCP-side hardening.
- **[BerriAI/litellm#26462]** — refreshed 00:25:13Z. *"feat(teams): per-model team member budgets."* The same-author scope-split duplicate cited in synthesis #45 is still open and now sits alongside #26464 (also team-metadata) — three PRs touching `/team/*` from two authors in the same window.

## opencode (anomalyco/opencode)

- **[anomalyco/opencode#24234]** — OPENED 00:32:52Z by `kagura-agent`. *"fix(config): detect non-object frontmatter data from gray-matter."* Frontmatter parser hardening.
- **[anomalyco/opencode#24233]** — OPENED 00:29:31Z by `willsarg`. *"fix(provider): honor per-model reasoning token pricing."* Pricing-table PR; pairs with the reasoning-model surface tracked in #24218 (auto-enable interleaved, still open).
- **[anomalyco/opencode#24232]** — OPENED 00:29:23Z by `willsarg`. *"fix(session): honor noCacheTokens in usage accounting."* Same author opened #24232 and #24233 within 8 seconds — two fixes to adjacent surfaces (session usage accounting + provider pricing).
- **[anomalyco/opencode#24230]** — MERGED 00:32:44Z by `Hona`. *"fix: validate beta before pushing."* Release-plumbing fix; merged within the window.
- **[anomalyco/opencode#24229]** — refreshed 00:14:47Z by `Hona`. *"fix: lazy session error schema."* Still open at window close (was opened 00:10:06Z, just inside the prior tick).
- **[anomalyco/opencode#24228]** — MERGED 00:25:58Z by `Hona`. *"Add Roslyn support for Razor and C# scripts."* Roslyn PR opened 00:10:54Z merged ~15 min later — fast lane.
- **[anomalyco/opencode#24223]** — refreshed 00:33:28Z by `v1truv1us`. *"docs: sync env vars with source code."* Docs-drift PR; pairs cross-repo with litellm #26454 (docs split).
- **[anomalyco/opencode#24218]** — refreshed 00:15:28Z. *"fix(provider): auto-enable interleaved for reasoning models."* Reasoning-model PR still open; cross-repo pair with codex #19461 (MERGED prior tick) and litellm #26456 (still open).

## OpenHands (OpenHands/OpenHands)

- **[OpenHands/OpenHands#14124]** — OPENED 00:34:57Z by `neubig`. *"Prototype import OpenHands frontend from agent-server-gui package."* Frontend re-import PR; first OpenHands activity in many ticks.

## ollama / crush / cline / Aider-AI / mcp-servers

Silent in window. No PR creation, refresh, merge, or close events.

---

### What changed since 2026-04-24 final addendum (closed 00:11Z)

1. **codex opened 4 new PRs and merged 1** in 23 minutes (#19468, #19470, #19471, #19472 opened; #19449 merged). Two of those (#19454, #19471) are test-isolation/test-organization PRs from `dylan-hurd-oai` within 14 minutes — a within-author **test-shaping doublet**.
2. **opencode merged 2 (#24228, #24230) and opened 4** (#24232, #24233, #24234, plus refresh on #24223) in the same 23 minutes. Two by `willsarg` opened 8 seconds apart on adjacent surfaces (provider pricing + session usage).
3. **litellm `/team/*` surface now has 3 concurrent PRs from 2 authors** (#26455, #26462 ishaan-berri; #26464 yuneng-berri) — the scope-split anti-pattern of synthesis #45 has acquired a third PR on the same surface from a different author.
4. **OpenHands broke its silence** with the agent-server-gui frontend prototype (#14124).
5. **Cross-repo signal is concentrated in codex+litellm+opencode again.** ollama, crush, cline, Aider, mcp-servers all silent.

---

## Addendum 2 — Window 00:34Z → 01:33Z

### codex (openai/codex)

- **[openai/codex#19474]** — OPENED 00:53:42Z by `wiltzius-openai`. *"Make thread store process-scoped"*. State-scoping refactor; first appearance of this author in the window.
- **[openai/codex#19473]** — OPENED 00:46:06Z by `mchen-oai`. *"Add turn start timestamp to turn metadata"*. **Byte-identical title** to #19470 (CLOSED 00:35:06Z, also `mchen-oai`) — δ ≈ 11 minutes; classic synthesis-#43 close-and-refile by the same author with no acknowledgment of the close.
- **[openai/codex#19472]** — MERGED 00:44:05Z by `viyatb-oai`. *"ci: pin codex-action v1.7"*. Lifetime ~18 minutes (opened 00:26:18Z prior tick).
- **[openai/codex#19471]** — refreshed 00:50:55Z by `dylan-hurd-oai`. *"[codex] Use serial_test for Windows sandbox tests"*. Still open; pairs with #19454 in synthesis #47.
- **[openai/codex#19470]** — CLOSED 00:35:06Z by `mchen-oai`. *"Add turn start timestamp to turn metadata"*. Closed 11 minutes after open; immediately superseded by #19473 (above).
- **[openai/codex#19468]** — MERGED 00:47:31Z by `fjord-oai`. *"Fix Bazel cargo_bin runfiles paths"*. Lifetime ~37 minutes.
- **[openai/codex#19458]** — refreshed 01:23:53Z by `lt-oai`. *"[codex] ChatGPT Library file upload/download hooks"*. Still open across the window.
- **[openai/codex#19456]** — refreshed 01:25:53Z by `xli-oai`. *"Add remote plugin uninstall API"*. Still open; first refresh in this addendum.
- **[openai/codex#19454]** — refreshed 01:07:33Z by `dylan-hurd-oai`. *"Split approval matrix test groups"*. Still open; second refresh of synthesis-#47 anchor.

### litellm (BerriAI/litellm)

- **[BerriAI/litellm#26468]** — OPENED 01:30:09Z by `Michael-RZ-Berri`. *"[WIP] Add endpoint for bulk key updates for team"*. **Fourth `/team/*`-surface PR in <80 minutes**; explicitly `[WIP]`-prefixed (see synthesis #49 below).
- **[BerriAI/litellm#26467]** — OPENED 01:10:09Z by `yuneng-berri`. *"[Fix] Harden pass-through target URL construction"*. Same-author follow-up to #26464 (which `yuneng-berri` MERGED 00:57:15Z): two `Harden`-prefixed PRs from the same author within 13 minutes of the first one merging — the trigger pattern named in synthesis #50 below.
- **[BerriAI/litellm#26466]** — OPENED 00:50:43Z by `shivamrawat1`. *"fix(guardrails): team-level guardrails now auto-apply alongside global policy"*. **Fifth concurrent PR touching `/team/*` semantics** (see synthesis #49).
- **[BerriAI/litellm#26465]** — OPENED 00:48:19Z by `ishaan-berri`. *"feat(teams): per-model team member budgets"*. **Byte-identical title** to #26462 (CLOSED 00:48:07Z by same author) — δ ≈ 12 seconds; same-tick synthesis-#43 close-and-refile.
- **[BerriAI/litellm#26464]** — MERGED 00:57:15Z by `yuneng-berri`. *"[Fix] Harden team metadata handling in /team/new and /team/update"*. Lifetime ~30 minutes; trigger event for same-author cascade #26467.
- **[BerriAI/litellm#26463]** — refreshed 00:48:52Z by `stuxf`. *"fix(mcp): tighten public-route detection and OAuth2 fallback gating"*. Still open.
- **[BerriAI/litellm#26462]** — CLOSED 00:48:07Z by `ishaan-berri`. *"feat(teams): per-model team member budgets"*. Closed and replaced by #26465 within seconds.

### opencode (anomalyco/opencode)

- **[anomalyco/opencode#24238]** — OPENED 01:00:55Z by `v1truv1us`. *"docs: sync env vars with source code"*. **Byte-identical title** to #24223 (CLOSED 01:00:39Z, same author) — δ ≈ 16 seconds; third repo this tick to exhibit the synthesis-#43 close-and-refile pattern.
- **[anomalyco/opencode#24236]** — MERGED 00:42:33Z by `Hona`. *"chore: group beta PR logs"*. Lifetime <1 minute (opened 00:41:57Z). Same-author follow-up to #24230 (also `Hona`, MERGED 00:32:42Z, *"validate beta before pushing"*) — second `Hona` beta-plumbing PR within 10 minutes of own merge — co-anchor of synthesis #50.
- **[anomalyco/opencode#24234]** — refreshed 00:35:40Z by `kagura-agent`. Still open.
- **[anomalyco/opencode#24230]** — MERGED 00:32:42Z by `Hona`. *"fix: validate beta before pushing"*. Trigger event for #24236 cascade.
- **[anomalyco/opencode#24223]** — CLOSED 01:00:39Z by `v1truv1us`. Replaced 16 seconds later by #24238.

### ollama (ollama/ollama)

- **[ollama/ollama#15793]** — refreshed 01:27:40Z by `pd95`. *"mlx: update to 0.31.2"*. Still open; first ollama signal in many ticks.

### crush (charmbracelet/crush)

- **[charmbracelet/crush#2706]** — OPENED 01:13:46Z by `taigrr`. *"Update tooling notes to give agent some better git and github instructions"*. Docs/agent-prompt PR; first crush signal in many ticks.

---

### What changed in window 00:34Z → 01:33Z (Addendum 2)

1. **Three repos exhibit synthesis-#43 close-and-refile within 80 minutes**: codex (#19470 → #19473, mchen-oai, δ=11min), litellm (#26462 → #26465, ishaan-berri, δ=12s), opencode (#24223 → #24238, v1truv1us, δ=16s). The δ=12s and δ=16s cases are essentially atomic close+reopen — the close was a workflow gesture, not a deliberation.
2. **litellm `/team/*` surface escalates from 3 to 5 concurrent PRs** across ≥4 authors (#26464 yuneng-berri MERGED, #26465 ishaan-berri reopened, #26466 shivamrawat1 OPENED guardrails, #26467 yuneng-berri OPENED pass-through, #26468 Michael-RZ-Berri OPENED [WIP] bulk key updates). Anchor for synthesis #49 below.
3. **Same-author post-own-merge cascades**: yuneng-berri merges #26464 at 00:57Z then opens #26467 at 01:10Z (13min after own merge); Hona merges #24230 at 00:32Z then opens & merges #24236 by 00:42Z (10min after own merge). Distinct from synthesis #47 (rapid-fire doublet *without* merge in between). Anchor for synthesis #50 below.
4. **ollama and crush both broke silence** in this window (#15793 mlx update; #2706 agent-tooling docs) — but both are first-touch refreshes with no companion PRs; no cross-repo signal yet.
5. **codex +6 PRs touched** (one merged, one closed, one opened-after-close, three refreshed) — lt-oai changed the title of #19458 between ticks (was *"Simplify Codex Library file hooks"* in addendum 1, now *"[codex] ChatGPT Library file upload/download hooks"*) — silent title rewrite without close+reopen, a rarer variant of provenance loss.


## Addendum 3 — Window 01:33Z → 02:31Z

### codex (openai/codex)

- **[openai/codex#19487]** — OPENED 02:27:01Z by `pakrym-oai`. *"[codex] Move config loading into codex-config"*. Third `pakrym-oai` open in this window after #19481 and #19484 — three opens in 47 minutes by one author across config / app-server / Responses-API surfaces.
- **[openai/codex#19484]** — OPENED 02:03:35Z by `pakrym-oai`. *"Refactor app-server error handling to reduce boilerplate"*. App-server boilerplate-reduction refactor.
- **[openai/codex#19481]** — OPENED 01:40:58Z by `pakrym-oai`. *"Remove ghost snapshots from the Responses API"*. Responses-API hygiene.
- **[openai/codex#19424]** — CLOSED 01:46:06Z by `neil-oai`. **Title rewritten to literally** *"Superseded by #19449"*. The PR body is now a single forward pointer; the original title/scope is gone from the tracker. Anchor for synthesis #52 below (title-as-grave-marker).
- **[openai/codex#19395]** / **#19394** / **#19393** / **#19392** / **#19391** — refreshed in lockstep at **02:16:29Z–02:16:34Z** (5-PR window, 5-second spread) by `bolinfest`. **Second synchronized re-refresh of the same five-PR permissions-profile vertical slice** that synthesis #44 anchored at 23:33Z (2026-04-24); ~2h43m later, no PR in the slice has merged, and the stack has now refreshed atomically twice in two ticks with zero intermediate merge motion. The slice has moved from "review the design" (synthesis #44) to **"the design is waiting"**.
- **[openai/codex#19389]** — refreshed 01:56:41Z by `shijie-oai`. *"Guard npm update prompt on registry readiness"*. Defensive-readiness guard PR. Anchor for synthesis #51 below.
- **[openai/codex#19184]** — refreshed 02:08:26Z by `viyatb-oai`. *"fix: handle deferred network proxy denials"*. Network-proxy permission edge-case PR; pairs cross-repo with litellm #26425 (auth-deny log-level downgrade).

### litellm (BerriAI/litellm)

- **[BerriAI/litellm#26472]** — OPENED 02:01:11Z by `shivamrawat1`. *"fix(bedrock): avoid duplicate post-call guardrail logs on streaming"*. Streaming-guardrail dedup; pairs with #26387 (synthesis #8 anchor empty-batch bypass on Bedrock guardrail SSE).
- **[BerriAI/litellm#26471]** — OPENED 01:56:47Z by `ishaan-berri`. *"feat(teams): per-model team member budgets"*. **Third byte-identical refile of the same title** in 80 minutes (#26462 CLOSED 00:48:07Z → #26465 OPENED 00:48:19Z → #26465 CLOSED 02:02:19Z → #26471 OPENED **01:56:47Z, ~5 min before #26465 closed**). The new refile **overlaps the live state of the prior refile by ~5 minutes** — the close-and-refile (synthesis #43) has acquired a *double-jump* shape and the refiles now overlap rather than chain. Anchor for synthesis #52 below.
- **[BerriAI/litellm#26470]** — OPENED 01:43:38Z by `yuneng-berri`. *"[Fix] Prevent atexit flush hangs and guard proxy_server_request header lookup"*. Third `yuneng-berri` PR in <2 hours (#26464 MERGED, #26467 OPENED, now #26470). Two `[Fix] X / Prevent X / Guard X` titles in cascade.
- **[BerriAI/litellm#26469]** — OPENED 01:34:12Z by `Michael-RZ-Berri`. *"[WIP] Cache LiteLLM_Config param reads in DualCache and batch"*. Same author's second `[WIP]` PR in 4 minutes after #26468 (01:30Z) — both `[WIP]`-prefixed, both touching team/config caching.
- **[BerriAI/litellm#26465]** — CLOSED 02:02:19Z by `ishaan-berri`. The middle node of the triple-refile chain.
- **[BerriAI/litellm#26439]** — refreshed 02:31:32Z by `dkindlund`. *"fix(adapters,vertex): pass output_config through to backends that accept it (closes #23380, supersedes #23475/#23396/#23706/#22727)"*. **Five-PR supersession chain** declared in title — a single PR closing one issue and superseding four prior attempts. Synthesis #20 (patch-PR-graveyard) instance with explicit grave inventory in the title.
- **[BerriAI/litellm#26425]** — refreshed 02:08:31Z by `netblack`. *"fix(proxy): downgrade 401/403 auth denials from ERROR to WARNING in auth_exception_handler"*. Log-level adjustment for auth denials. Anchor for synthesis #51.
- **[BerriAI/litellm#26421]** — refreshed 01:55:05Z by `netblack`. *"fix(proxy): apply user.models restriction to GET /v1/models list"*. ACL-completeness fix on model-list endpoint. Anchor for synthesis #51.
- **[BerriAI/litellm#26416]** — refreshed 01:59:57Z by `netblack`. *"fix(auth): enforce model ACL on Bedrock passthrough routes"*. Bedrock-passthrough ACL enforcement. **Three `netblack` auth/ACL PRs all open and being refreshed in this tick** — one author running a personal hardening sweep in parallel with the synthesis-#49 `/team/*` cluster. Anchor for synthesis #51.
- **[BerriAI/litellm#26218]** — MERGED 01:38:09Z by `krrish-berri-2`. *"feat(proxy): add /v1/memory CRUD endpoints"*. New REST surface (`/v1/memory`) lands — first net-new surface in this tick. Likely future gravity-well candidate (synthesis #49).

### opencode (anomalyco/opencode)

- **[anomalyco/opencode#24241]** — OPENED 01:57:29Z by `Ethan0x0000`. *"fix(tui): clean zero-width agent display labels"*. TUI label-rendering hardening; minor.
- **[anomalyco/opencode#24146]** — MERGED 02:26:19Z by `heimoshuiyu`. *"fix: preserve empty reasoning_content for DeepSeek V4 thinking mode"*. **Anchor PR for the entire reasoning-shape-contract synthesis cluster (#5, #7, #23) lands after 14 days open.** Mirror of litellm #26395 (MERGED earlier in W17) on the *agent* side rather than the *gateway* side. The DeepSeek `reasoning_content` round-trip break is now patched in two of the three layers (gateway: litellm; agent: opencode); codex is the remaining layer.
- **[anomalyco/opencode#21801]** — refreshed 02:30:08Z by `jasonmj`. *"fix(acp): forward subagent session events to ACP client"*. 15-day-old ACP PR back to life; first refresh in many ticks.
- **[anomalyco/opencode#20039]** — refreshed 01:51:32Z by `Hona`. *"feat: bash->shell tool + pwsh/powershell/cmd/bash specific tool definitions"*. 26-day-old shell-tool refactor; refresh, no merge.
- **[anomalyco/opencode#18767]** — refreshed 02:18:07Z by `noahbentusi`. *"feat(app): Mobile Touch Optimization"*. 33-day-old mobile-UX PR; refresh.
- **[anomalyco/opencode#18306]** — refreshed 02:01:52Z by `SamirMoustafa`. *"feat(opencode): add Open WebUI provider"*. 36-day-old provider-add PR; refresh.
- **[anomalyco/opencode#13854]** — refreshed 02:18:07Z by `mocksoul`. *"fix(tui): stop streaming markdown/code after message completes"*. **68-day-old streaming-render fix back to refresh** — synthesis #20 (patch-PR-graveyard) instance with the longest open-age in this window.

### ollama (ollama/ollama)

- **[ollama/ollama#15805]** — OPENED 02:12:58Z by `B-A-M-N`. *"Add `ollama launch qwen` support for Qwen Code CLI"*. New CLI subcommand for Qwen Code routing.

### OpenHands (OpenHands/OpenHands)

- **[OpenHands/OpenHands#14127]** — OPENED 02:06:11Z by `Lumen-Founder`. *"Reduce GitHub resolver comment noise by editing acknowledgement comment"*. Resolver-noise reduction PR; second OpenHands open in two ticks (after #14124 by `neubig`).

### crush / cline / Aider-AI / mcp-servers

Silent in window. No PR creation, refresh, merge, or close events.

---

### What changed in window 01:33Z → 02:31Z (Addendum 3)

1. **The bolinfest permissions slice (#19391–#19395) refreshed atomically a second time at 02:16Z** with no intermediate merges — the synthesis #44 vertical-slice exhibit has now demonstrated the *waiting-indefinitely* failure mode the synthesis predicted.
2. **The ishaan-berri `feat(teams): per-model team member budgets` title has now been refiled three times** (#26462 → #26465 → #26471), with the third refile (#26471, 01:56Z) opened **5 minutes before the prior (#26465) was closed (02:02Z)**. The close-and-refile shape (synthesis #43) has acquired a double-jump variant where refiles overlap rather than chain — anchor for synthesis #52.
3. **A multi-author auth/ACL hardening surge formed across litellm**: `netblack` has 3 concurrent auth PRs (#26416 Bedrock ACL, #26421 user.models ACL, #26425 401/403 log-level), `yuneng-berri` has 3 concurrent hardening PRs (#26464 MERGED team metadata, #26467 pass-through URL, #26470 atexit/proxy_server_request), `shivamrawat1` has guardrail dedup (#26472), with codex `shijie-oai` running a parallel npm-registry guard (#19389). Anchor for synthesis #51.
4. **opencode #24146 MERGED** — the DeepSeek `reasoning_content` agent-side fix landed after 14 days. Two of three layers (gateway, agent) of the reasoning-shape-contract bug class are now patched.
5. **opencode old-PR refresh wave**: PRs aged 15, 26, 33, 36, and **68** days all refreshed without merging — five distinct synthesis #20 instances in one tick on one repo.
6. **ollama acquired a Qwen Code CLI launcher PR** (#15805) — pairs cross-repo with litellm/opencode adding model-specific routing/launcher surfaces.
7. **litellm #26218 MERGED `/v1/memory` CRUD** — net-new REST surface in the cohort; likely future synthesis #49 gravity-well candidate.

---

## Addendum 4 — Window 02:31Z → 03:28Z

### codex (openai/codex)

- **[openai/codex#19498]** — OPENED 03:09:21Z by `pakrym-oai`. *"Streamline review and feedback handlers."*
- **[openai/codex#19497]** — OPENED 03:11:10Z by `pakrym-oai`. *"Streamline turn and realtime handlers."*
- **[openai/codex#19496]** — OPENED 03:11:05Z by `pakrym-oai`. *"Streamline MCP handlers."*
- **[openai/codex#19495]** — OPENED 03:09:21Z by `pakrym-oai`. *"Streamline thread resume and fork handlers."*
- **[openai/codex#19494]** — OPENED 03:10:58Z by `pakrym-oai`. *"Streamline thread read handlers."*
- **[openai/codex#19493]** — OPENED 03:10:53Z by `pakrym-oai`. *"Streamline thread mutation handlers."*
- **[openai/codex#19492]** — OPENED 03:10:49Z by `pakrym-oai`. *"Streamline thread start handler."*
- **[openai/codex#19491]** — OPENED 03:10:45Z by `pakrym-oai`. *"Streamline account and command handlers."*
- **[openai/codex#19490]** — OPENED 03:10:41Z by `pakrym-oai`. *"Streamline plugin, apps, and skills handlers."*
- **[openai/codex#19487]** — OPENED 02:38:58Z by `pakrym-oai`. *"[codex] Move config loading into codex-config."*
- **[openai/codex#19484]** — OPENED 03:10:35Z by `pakrym-oai`. *"Lift app-server JSON-RPC error handling to request boundary."*
- **The pakrym-oai Streamline-* handler stack: 11 PRs by one author opened in a 32-minute window (02:38Z → 03:11Z), 9 of them within a 35-second cluster (03:09:21Z → 03:11:10Z).** All target the `app-server` handler surface. Title shape `Streamline X handlers` repeated across 9 of 11 PRs. By volume and per-author concentration this exceeds the bolinfest permissions slice (#19391-#19395, 5 PRs) and the prior #44 vertical-slice exhibit. Anchor candidate for a new synthesis on **simultaneous-author-stack-burst** rather than the slower vertical-slice cadence in #44.
- **[openai/codex#19391–#19395]** — refreshed 03:13:30–35Z by `bolinfest`. Permissions slice refreshed a *third* time atomically with no intermediate merges. The synthesis #44 vertical-slice waiting-indefinitely failure mode is now confirmed across three consecutive ticks.

### litellm (BerriAI/litellm)

- **[BerriAI/litellm#26474]** — OPENED 03:13:27Z by `shivamrawat1`. *"fix(bedrock guardrail): dedupe post-call log entry when only post_call is configured."* **Refile of #26472 by the same author.**
- **[BerriAI/litellm#26472]** — CLOSED 02:46:17Z by `shivamrawat1`. *"fix(bedrock): avoid duplicate post-call guardrail logs on streaming."* Original opened in Addendum 3 window; closed 15 minutes after that addendum's window boundary; refiled at #26474 with **27-minute gap** and **rescoped title** (`bedrock` → `bedrock guardrail`, `streaming` dropped, `dedupe post-call log entry when only post_call is configured` added). Clean single-jump #43 close-and-refile with title evolution — the shape #52 named as the *non*-occurrence (#52's anomaly was byte-identical title across the chain). Synthesis #43 now has its first cohort exhibit with explicit scope-narrowing in the title text.
- **[BerriAI/litellm#26471]** — refreshed 03:26:47Z by `ishaan-berri`. *"feat(teams): per-model team member budgets."* Still OPEN. The third node of the synthesis #52 chain has now survived ≥90 minutes past the synthesis publication.
- **[BerriAI/litellm#26455]** — refreshed 03:01:32Z by `ishaan-berri`. *"feat: per-model team member budgets."* Still OPEN. The synthesis #45 same-author scope-split duplicate (`feat:` vs `feat(teams):`) is now **demonstrably stable across 3 hours and 4 ticks** — the predicted self-resolution has not occurred. Synthesis #45's prediction (same-author flavor self-resolves) is being weakened by elapsed time alone.
- **[BerriAI/litellm#26442]** — refreshed 02:49:41Z by `ryan-crabbe-berri`. *"feat: UI setting to disable /key/generate for org admins."* `/key/*` ACL surface; pairs with the `netblack` ACL trio (#26416 / #26421 / #26425) anchored in synthesis #51.
- **[BerriAI/litellm#26439]** — refreshed 02:42:09Z by `dkindlund`. *"fix(adapters,vertex): pass output_config through to backends that accept it."* PR title declares `closes #23380, supersedes #23475/#23396/#23706/#22727` — **5-PR supersession chain on the same `output_config` plumbing problem**. Synthesis #20 (patch-PR-graveyard) and synthesis #43 (close-and-refile) overlay: 4 prior PRs were closed without merge over the chain's lifetime. Candidate exhibit for a *long-chain* generalization of #43.

### opencode (anomalyco/opencode)

- **[anomalyco/opencode#24246]** — OPENED 03:27:38Z by `xthreehao`. *"fix: preserve nix/direnv PATH in login shell for ! commands."* Shell-environment fix; PATH-propagation surface adjacent to `Hona`'s #20039 shell-tool refactor (still open, refreshed prior tick).
- **[anomalyco/opencode#24244]** — OPENED 02:59:57Z by `rekram1-node`. *"fix: config ordering issue."* Config-precedence fix; same author as the long-open #21947 *"wip: node shim signals"* (refreshed 02:38:06Z this tick — 24-day-old wip PR back to refresh).
- **[anomalyco/opencode#24241]** — refreshed 03:24:39Z by `Ethan0x0000`. *"fix(tui): clean zero-width agent display labels."* Carried over from Addendum 3, still OPEN.
- **[anomalyco/opencode#24238]** — **CLOSED 03:05:13Z by `v1truv1us`. *"docs: sync env vars with source code."*** This was the refile-of-#24223 named in synthesis #52 as a #43 single-jump exhibit. **#24238 has now itself been closed without merge or refile-yet — turning the #24223→#24238 chain into either (a) an abandoned #43 instance, or (b) the opening of a #52-shape if a #24238-refile lands in the next 6 hours.** Direct test of synthesis #52's "double-jump may be rare but reachable from any #43 instance" prediction.
- **[anomalyco/opencode#23255]** — MERGED 02:47:06Z by `b0o`. *"fix(build): add prettier to devDependencies."* Build-hygiene PR; merged.
- **[anomalyco/opencode#21947]** — refreshed 02:38:06Z by `rekram1-node`. *"wip: node shim signals."* 24-day-old wip back to refresh; same author as freshly-opened #24244 — synthesis #50 (post-own-merge-cascade-same-author-adjacent-surface-followup) candidate inverse: post-own-refresh-same-author-new-surface-fanout.

### ollama / crush / OpenHands / Aider-AI / mcp-servers

Silent in window. No PR creation, refresh, merge, or close events.

---

### What changed in window 02:31Z → 03:28Z (Addendum 4)

1. **codex saw an 11-PR same-author burst from `pakrym-oai`** (#19484 / #19487 / #19490–#19498) on the `app-server` handler surface, with 9 PRs opened within a 35-second cluster (03:09:21Z → 03:10:35Z). Title shape `Streamline X handlers` repeated 9 times. This is a **simultaneous-author-stack-burst**, distinct from the slower vertical-slice cadence (#44 / bolinfest permissions slice, where refreshes are spaced minutes apart). Strong candidate for synthesis #53.
2. **litellm #26472 → #26474 single-jump #43 with explicit title rescoping** (`bedrock` → `bedrock guardrail`; `streaming` dropped; `dedupe post-call log entry when only post_call is configured` added). The synthesis #52 contrast-case (byte-identical title) now has its byte-*divergent* counterpart in the same week — a corpus exhibit of #43 actually narrowing scope in the title text rather than just in the diff.
3. **litellm #26439 declares a 5-PR supersession chain in its title** (`supersedes #23475/#23396/#23706/#22727`) — long-chain generalization of #43, four prior closes without merge on the same `output_config` plumbing problem.
4. **The synthesis #44 vertical-slice (#19391–#19395) refreshed atomically a third consecutive tick** with no intermediate merges. Waiting-indefinitely failure mode now confirmed across 3 ticks ≈ 3+ hours.
5. **The synthesis #45 same-author scope-split duplicate (litellm #26455 vs #26471) is now stable across 4 ticks ≈ 3.5 hours** — the predicted same-author self-resolution has not occurred. #45's prediction is being weakened by elapsed time alone.
6. **opencode #24238 CLOSED without merge** — the #24223→#24238 chain (synthesis #52's #43 comparator) is now either abandoned or pending double-jump. Direct empirical test of #52's reachability prediction; resolution within 6 hours.
7. **bolinfest permissions slice refreshed at 03:13:30–35Z, pakrym-oai handler stack opened 03:09:21Z → 03:11:10Z, ishaan-berri #26471 refreshed 03:26:47Z** — three independent author-clusters all active in a 17-minute window on `app-server`-shaped surfaces (handler refactor, permission profiles, team budget API). Cross-repo author-cluster overlap candidate for synthesis #54.

---

## Addendum 5 — Window 03:28Z → 04:02Z

### codex (openai/codex)

- **[openai/codex#18073]** — **MERGED 03:51:49Z by `etraut-openai`. *"Add goal persistence foundation (1 / 5)."*** Foundation node of the long-running **etraut-openai goal vertical-slice** opened 2026-04-16 04:45–46Z.
- **[openai/codex#18074]** — **MERGED 03:53:51Z by `etraut-openai`. *"Add goal app-server API (2 / 5)."*** Second node, ~2 minutes after #18073.
- **[openai/codex#18075]** — **MERGED 03:54:51Z by `etraut-openai`. *"Add goal model tools (3 / 5)."*** Third node, ~1 minute after #18074.
- **[openai/codex#18076]** — refreshed 03:58:33Z by `etraut-openai`. *"Add goal core runtime (4 / 5)."* Still OPEN.
- **[openai/codex#18077]** — refreshed 04:00:27Z by `etraut-openai`. *"Add goal TUI UX (5 / 5)."* Still OPEN.
- **3-of-5 vertical-slice merged in a 3-minute cascade (03:51:49Z → 03:54:51Z), with 4/5 and 5/5 left open and refreshed within 6 minutes of the last merge.** This is the **opposite** of the #44 / bolinfest permissions-slice pathology (#44: all 5 refresh atomically with zero merges across 3+ ticks). Same vertical-slice shape, opposite progression: **partial-merge cascade with tail held back**. Compare #44 (all-or-nothing stalled) to this (1→2→3 merged, 4 and 5 held). Anchor for synthesis #55: vertical-slice-prefix-merge-with-tail-held.
- **[openai/codex#19391–#19395]** — refreshed 03:55:49–54Z by `bolinfest`. **Fourth consecutive tick** with atomic refresh and zero merges. The synthesis #44 stall is now a 4-tick (~4-hour) record on this slice, while etraut-openai's parallel goal slice on the same `app-server` surface partially merged in the same minute. Direct counter-pair: two vertical slices, same surface, opposite outcomes inside a 5-minute window.
- **[openai/codex#19484, #19487, #19490–#19498]** — all 11 pakrym-oai handler-stack PRs touched 04:00:13–14Z (single-second update fanout, likely CI re-run). The 9-PR sub-cluster's update timestamps converge to a single second across 9 PRs — **the simultaneous-author-stack-burst (synthesis #53) now has a CI-update-burst signature** distinct from the open-burst signature seen in Addendum 4.
- **[openai/codex#19473]** — refreshed 03:47:45Z by `mchen-oai`. *"Add turn start timestamp to turn metadata."* Turn-metadata adjacent to the pakrym-oai turn-handler PRs (#19497 turn/realtime, #19492 thread start) but by a different author — independent author touching the same `turn` surface during a stack-burst.

### litellm (BerriAI/litellm)

- **[BerriAI/litellm#26484]** — OPENED 03:45:14Z by `stuxf`. *"chore(auth): substitute alias for master key on UserAPIKeyAuth."* Auth-surface PR; further extends the synthesis #51 multi-author auth/ACL hardening surge (now: netblack ACL trio + yuneng-berri trio + shivamrawat1 guardrail + ryan-crabbe-berri /key/generate gate + **stuxf master-key alias**).
- **[BerriAI/litellm#26463]** — refreshed 03:53:09Z by `stuxf`. *"fix(mcp): tighten public-route detection and OAuth2 fallback gating."* MCP auth fix; same author as freshly-opened #26484. **stuxf has 2 concurrent auth/ACL PRs in this tick** — same-author-auth-pair pattern, mirroring netblack's trio shape.
- **[BerriAI/litellm#26471]** — refreshed 03:32:36Z by `ishaan-berri`. *"feat(teams): per-model team member budgets."* Synthesis #52 third-node still OPEN, now ≥4 ticks ≈ 4 hours past the synthesis publication.
- **[BerriAI/litellm#26442]** — refreshed 03:47:30Z by `ryan-crabbe-berri`. *"feat: UI setting to disable /key/generate for org admins."* `/key/*` ACL surface; remains in the synthesis #51 cluster.
- **[BerriAI/litellm#26331]** — refreshed 03:35:28Z by `Kcstring`. *"feat(openai): add gpt-image-2 to model prices."* Model-catalog PR; cross-repo with Aider-AI/aider's pricing-table cadence (TL;DR #5 day-zero model support invisible plumbing).
- **[BerriAI/litellm#26103]** — refreshed 03:39:29Z by `Vigilans`. *"fix(responses): emit per-summary thinking blocks and deduplicate message_start."* Reasoning-shape contract surface (synthesis #23 territory); 5-day-old PR refreshed without merge — patch-PR-graveyard (#20) candidate aging in.
- **[BerriAI/litellm#26001]** — refreshed 04:01:46Z by `ryan-crabbe-berri`. *"fix(ui): stop injecting $0 cost on model edit."* 7-day-old UI fix refreshed; same author as freshly-active #26442 — post-own-refresh-same-author-adjacent-surface inversion (synthesis #50 inverse).

### opencode (anomalyco/opencode)

- **[anomalyco/opencode#24246]** — refreshed 03:40:02Z by `xthreehao`. PATH-propagation fix carried over from Addendum 4, still OPEN.
- **[anomalyco/opencode#18767]** — refreshed 03:29:01Z by `noahbentusi`. *"feat(app): Mobile Touch Optimization."* **33-day-old PR** back to refresh; another synthesis #20 patch-graveyard instance.
- **[anomalyco/opencode#13854]** — refreshed 03:29:01Z by `mocksoul`. *"fix(tui): stop streaming markdown/code after message completes."* **68-day-old PR** refreshed at the *exact same second* as #18767 — two long-aged PRs refresh in lockstep, suggesting bot-driven or rebase-train activity rather than human refresh.
- **[anomalyco/opencode#13224]** — refreshed 03:47:07Z by `kdcokenny`. *"feat(docs): add copy page markdown action to docs title."* **74-day-old PR** refreshed. Three patch-graveyard PRs (33d, 68d, 74d) refreshed in one window — synthesis #20 cohort behavior continues from Addendum 4.

### OpenHands (OpenHands/OpenHands)

- **[OpenHands/OpenHands#14127]** — refreshed 03:43:39Z by `Lumen-Founder`. *"Reduce GitHub resolver comment noise by editing acknowledgement comment."* Bot-noise reduction PR; first OpenHands activity in tick after several silent windows.

### ollama / crush / Aider-AI / mcp-servers / cline

Silent in window. No PR creation, refresh, merge, or close events.

---

### What changed in window 03:28Z → 04:02Z (Addendum 5)

1. **codex etraut-openai 5-PR `goal` vertical-slice partially merged in a 3-minute cascade** (#18073 → #18074 → #18075 MERGED 03:51:49Z → 03:54:51Z), with #18076 (4/5) and #18077 (5/5) refreshed but held open. This is the **mirror image** of synthesis #44's pathology (bolinfest permissions slice: 5/5 refresh atomically, 0/5 merge). Same shape (numbered N/M vertical-slice stack), opposite outcome (prefix-merge with tail held). Strong candidate for **synthesis #55: vertical-slice-prefix-merge-with-tail-held**.
2. **The synthesis #44 stall record extended to 4 consecutive ticks** as bolinfest #19391–#19395 refreshed atomically again at 03:55:49–54Z. Direct counter-pair to event 1 above: two vertical slices on the same `app-server` surface, opposite progression, in the same 5-minute window.
3. **The pakrym-oai handler-stack (synthesis #53) now exhibits a CI-update-burst signature** — all 11 PRs updatedAt converged on a single second 04:00:13–14Z, distinct from the open-burst signature in Addendum 4. The simultaneous-author-stack-burst pattern has **two phases**: open-burst (creation cluster) and update-burst (CI-driven refresh cluster).
4. **litellm stuxf opened a same-author auth/ACL pair** (#26463 refreshed + #26484 freshly opened) within 9 minutes — extends synthesis #51's multi-author surge into a new author cohort. The #51 surge is now 5 distinct authors (netblack, yuneng-berri, shivamrawat1, ryan-crabbe-berri, stuxf) on the auth/ACL surface inside one week.
5. **opencode patch-graveyard wave** — 3 PRs aged 33, 68, 74 days all refreshed in this window; #18767 and #13854 refreshed at the **same second** (03:29:01Z), a bot/rebase-train signal rather than independent human refresh. Anchor for **synthesis #56: lockstep-refresh-of-aged-PRs-as-bot-rebase-train-signal**.
6. **The synthesis #45 same-author duplicate (litellm #26455 vs #26471) is now stable across 5 ticks ≈ 4.5 hours.** No self-resolution. The prediction's confidence is now demonstrably wrong on this exhibit.
7. **litellm #26103 reasoning-shape PR (5 days old, Vigilans) refreshed without merge** — synthesis #23 + #20 overlap territory; the reasoning-shape-contract bug class continues to accumulate aging unmerged PRs while opencode #24146 (the agent-side fix anchored in Addendum 3) merged 14 days after open.

---

## Addendum 6 — Window 04:02Z → 04:15Z

### codex (openai/codex)

- **[openai/codex#19490–#19498]** — all 9 PRs of the `pakrym-oai` `Streamline X handlers` sub-cluster touched again at **04:15:01–02Z** (`updatedAt` spans 2 distinct seconds across 9 PRs). This is the **second CI-update-burst** in 15 minutes against the synthesis #53 stack — first burst was 04:00:13–14Z (Addendum 5), second burst is 04:15:01–02Z. **15-minute periodicity** between the two bursts is consistent with a CI workflow on a 15-minute cron or with the default GitHub Actions retry/poll cadence on a long-running check matrix. The stack's CI-update signature is now empirically periodic, not single-shot — escalating the synthesis #53 update-phase observation into a quasi-deterministic external-actor cadence. Anchor for synthesis #57 below.
- **[openai/codex#19487]** — refreshed 04:03:39Z by `pakrym-oai`. *"[codex] Move config loading into codex-config."* Outside the 9-PR `Streamline` sub-cluster but within the broader 11-PR same-author burst; refreshed 12 minutes earlier than the sub-cluster, indicating it is on a different CI matrix path.
- No new opens, no merges, no closes in window. The window is dominated by metadata churn, not author work.

### litellm (BerriAI/litellm)

- **[BerriAI/litellm#26484]** — refreshed 04:14:11Z by `stuxf`. *"chore(auth): substitute alias for master key on UserAPIKeyAuth."* Auth-surface PR carried over from Addendum 5; still OPEN. The synthesis #51 multi-author auth/ACL hardening surge (now 5 distinct authors) still has no merges in this window — only the trigger PR #26464 (yuneng-berri team-metadata, MERGED 00:57Z) has landed; the subsequent 4-author cascade is entirely unmerged 3+ hours later. The surge is therefore now **predominantly stalled at the review boundary**, not at the author boundary — an inversion of the normal hardening-train shape where reviewers absorb same-week-same-surface PRs in batch.
- **[BerriAI/litellm#26471]** — third node of the synthesis #52 triple-refile chain (*"feat(teams): per-model team member budgets"*) still OPEN. Now ≥4.5 ticks past synthesis publication. The third-refile prediction (overlapping double-jump shape) continues to hold; no fourth refile observed yet.

### opencode (anomalyco/opencode)

- **[anomalyco/opencode#24251]** — OPENED 04:12:43Z by `atlantis-mk`. *"feat: add project run configs to the web app."* New web-app run-config surface; first appearance of `atlantis-mk` in this corpus.
- **[anomalyco/opencode#24250]** — OPENED 04:11:17Z by `knefenk`. *"fix(provider): complete DeepSeek reasoning_content round-trip for multi-turn conversations."* **Direct continuation of the synthesis #23 reasoning-shape-contract bug class**: opencode #24146 (single-turn DeepSeek reasoning_content fix) MERGED 02:26:19Z this morning (Addendum 3); 1h45m later a *different* author (`knefenk`, not `heimoshuiyu`) opens a follow-up extending the same fix to **multi-turn** conversations. The single-turn merge revealed (or did not patch) the multi-turn case, and a different author is now closing the gap. **Two-author serial fix on the same provider+field across the single-turn → multi-turn boundary, ~2 hours apart.** Anchor for synthesis #58 below.

### ollama / crush / OpenHands / Aider-AI / mcp-servers / cline

Silent in window. No PR creation, refresh, merge, or close events.

---

### What changed in window 04:02Z → 04:15Z (Addendum 6)

1. **codex `pakrym-oai` `Streamline X handlers` 9-PR sub-cluster experienced a second CI-update-burst at 04:15:01–02Z**, exactly 15 minutes after the first (04:00:13–14Z; Addendum 5). The synthesis #53 update-phase has acquired a periodic signature consistent with a 15-minute external CI cadence. Anchor for synthesis #57 (*periodic-CI-burst-as-stack-burst-update-signature*).
2. **opencode #24250 (`knefenk`, multi-turn DeepSeek reasoning_content) opened 1h45m after #24146 (`heimoshuiyu`, single-turn) merged.** Two-author serial-fix on the same provider+field across the single-turn → multi-turn boundary. Anchor for synthesis #58 (*single-turn-merge-exposes-multi-turn-gap-handed-to-different-author*). This is a **new shape distinct from synthesis #20** (patch-graveyard): the original PR did merge; the second author's PR is the *consequence* of that merge revealing scope incompleteness, not an aging stale follow-up.
3. **opencode #24251 (`atlantis-mk`, project run configs in web app)** opens a new web-app surface; first appearance of this author. Unconnected to the active reasoning-shape thread.
4. **litellm `/team/*` and auth/ACL surges still entirely stalled** at the review boundary (synthesis #49 + #51): 5 PRs on `/team/*`, 5 distinct authors on auth/ACL, 0 merges in the 13-minute window. The surges have crossed from "active wave of opens" to "queue-deep stall".
5. **No silence-breakers** from ollama, crush, OpenHands, Aider, mcp-servers, cline in window — the cohort is contracting, not expanding, in this micro-window. Cross-repo activity is concentrated entirely in codex + litellm + opencode again, matching the Addendum 1 pattern.

---

## Addendum 7 — Window 04:15Z → 04:42Z

### codex (openai/codex)

- **[openai/codex#19454]** — **MERGED 04:38:27Z by `dylan-hurd-oai`. *"Split approval matrix test groups."*** Opened 2026-04-24T22:05:05Z; **6h33m to merge**, 1 file (`+49/-3`) on the approval matrix test surface. This surface has a long history of flaky-test PRs in the corpus: aibrahim-oai #7028 (*"fix flaky test: approval_matrix_covers_all_modes"*), #14518 (*"Add diagnostics for read_only_unless_trusted timeout flake"*), #14968 (*"Stabilize approval matrix write-file command"*); bolinfest #18288 (*"tests: isolate approval fixtures from host rules"*); now dylan-hurd-oai #19454 splitting the matrix into smaller groups. **Five distinct authors, five PRs, one recurring CI flake surface across W09–W17.** The merge today is the latest entry in a 60-day flaky-test maintenance lineage on a single test fixture.
- **[openai/codex#19459]** — refreshed 04:33:00Z by `mzeng-openai`. *"Enable unavailable dummy tools by default."* Opened 2026-04-24T22:43:08Z; OPEN. Tools-shape adjacent to the synthesis #53 pakrym-oai handler-stack but by a different author.
- **[openai/codex#19473]** — refreshed 04:25:14Z by `mchen-oai`. *"Add turn start timestamp to turn metadata."* Same `turn` surface as pakrym-oai #19497 (*"Streamline turn and realtime handlers"*) — second tick where mchen-oai's turn-metadata PR refreshes alongside pakrym-oai's turn-handler stack. Cross-author co-occupation of the `turn` surface continues from Addendum 5.
- **[openai/codex#19490–#19498]** — pakrym-oai 9-PR `Streamline X handlers` sub-cluster `updatedAt` still pinned at **04:15:01–02Z** through 04:42Z. **No third CI-update-burst at 04:30Z.** Synthesis #57 predicted a 15-minute external-CI periodicity based on the two bursts at 04:00:13–14Z and 04:15:01–02Z. The expected 04:30Z burst did not materialize within +12 minutes of its predicted time. **Synthesis #57's periodicity hypothesis is now empirically weakened** — two-burst evidence was insufficient to establish the cadence, and the single-shot interpretation (CI re-run triggered manually by the author after the open-burst, then again 15 minutes later by a different trigger) is now more parsimonious than a fixed cron. #57's falsifiable claim 1 (a third burst at 04:30Z ±2min) is the prediction that just failed.
- **[openai/codex#19490]** — `updatedAt` 04:10:03Z (5 minutes earlier than the rest of the sub-cluster). Outlier in the otherwise lockstep 9-PR update timestamp; suggests the "single second across 9 PRs" claim from Addendum 4/5 was a near-miss (8 of 9 PRs synchronized, #19490 trailing by 5 minutes on the second burst).

### litellm (BerriAI/litellm)

- **[BerriAI/litellm#26467]** — **MERGED 04:21:09Z by `yuneng-berri`. *"[Fix] Harden pass-through target URL construction."*** Opened 01:10:09Z (13 minutes after `yuneng-berri`'s own #26464 merge at 00:57:15Z; cf. synthesis #50). **3h11m open-to-merge.** This **completes the synthesis #50 post-own-merge cascade chain**: #26464 MERGED 00:57Z → #26467 OPENED 01:10Z (13min, same author, adjacent surface) → #26467 MERGED 04:21Z (3h11m later). **yuneng-berri now owns two merges in one tick on adjacent gateway-surface plumbing** (`/team/*` team-metadata + pass-through URL traversal hardening). Synthesis #50's prediction (the cascade follow-up will merge faster than typical W17 PRs because the same-author context is hot) is empirically validated: 3h11m vs the corpus median PR latency of >24h.
- **The PR body** explicitly names a path-traversal hardening: `posixpath.normpath` resolution of `..` segments in `construct_target_url_with_subpath`, plus a new `join_base_and_endpoint_path` helper that clamps the result back to the configured base path. **227 tests pass.** This is a **security-relevant merge on the pass-through endpoint surface** — adjacent to but distinct from the synthesis #51 multi-author auth/ACL hardening surge (which targets `/key/*` and `/team/*` ACLs, not URL traversal). The cohort's litellm-hardening surface is now widening: ACL + URL-construction together.
- **[BerriAI/litellm#26485]** — OPENED 04:25:16Z by `FuturMix`. *"feat: add FuturMix as named OpenAI-compatible provider."* **First appearance of `FuturMix` in the corpus.** New OpenAI-compatible provider integration; pricing/catalog territory adjacent to TL;DR #5 (day-zero model support) and to recent Kcstring #26331 (`gpt-image-2` to model prices). **Provider-catalog opens are now a once-per-tick cadence** (Kcstring 03:35Z, FuturMix 04:25Z; ~50min apart).
- **[BerriAI/litellm#26484]** — refreshed 04:17:23Z by `stuxf`. *"chore(auth): substitute alias for master key on UserAPIKeyAuth."* Synthesis #51 carryover; still OPEN, no merge in window. The auth/ACL surge remains stalled at the review boundary (now 4+ hours past the trigger merge #26464). **Contrast with #26467's 3h11m merge:** the same author (yuneng-berri) merged a *non-ACL* hardening PR within the window the *ACL* hardening cohort failed to clear a single PR. **Reviewer absorption capacity is surface-dependent**, not author-dependent: pass-through URL construction got reviewed and merged, ACL changes did not.
- **[BerriAI/litellm#26471]** — `ishaan-berri` *"feat(teams): per-model team member budgets"* third node of synthesis #52 chain still OPEN. Now ≥5 ticks ≈ 4.5 hours past synthesis publication.

### opencode (anomalyco/opencode)

- **[anomalyco/opencode#24252]** — **OPENED 04:16:32Z by `rekram1-node`, CLOSED 04:29:09Z without merge by `rekram1-node`.** *"fix: flaky shell test."* **12m37s open-to-close lifecycle.** Body is null; no merge, no state_reason recorded. This is a **new shape** for the corpus: an extremely short-lived self-closed PR on a flaky-test surface, opened and abandoned within 13 minutes. Possible mechanisms: (a) author found the underlying issue was elsewhere mid-PR; (b) the test stabilized between open and close; (c) duplicate of an in-flight fix (no candidate found in the open queue at this moment). **First sub-15-minute self-close in the W17 corpus.** Anchor candidate for synthesis #59 below.
- **[anomalyco/opencode#24250]** — refreshed 04:29:39Z by `knefenk`. *"fix(provider): complete DeepSeek reasoning_content round-trip for multi-turn conversations."* Synthesis #58 second-node still OPEN, **first refresh observed** at 04:29Z (initial open was 04:11:17Z). 18-minute gap to first refresh; consistent with active iteration rather than abandonment. The synthesis #58 falsifiable claim 1 (merge within 7 days) remains testable; #24250 is currently on track.
- **[anomalyco/opencode#24246]** — refreshed 04:39:19Z by `xthreehao`. *"fix: preserve nix/direnv PATH in login shell for ! commands."* Third tick of refresh on the PATH-propagation fix; OPEN since 03:20Z. Pattern: `xthreehao` is iterating in ~20-minute intervals (03:40Z → 04:39Z, 1h apart on this tick after a closer interval previously).

### codex + opencode flaky-test convergence

Both repos saw flaky-test PR activity in this window: **opencode #24252** (`rekram1-node`, *"fix: flaky shell test"*, 12-min self-close) and **codex #19454** (`dylan-hurd-oai`, *"Split approval matrix test groups"*, MERGED with 6h33m latency) — same broad bug class (test-suite flakiness) treated very differently across the two repos. opencode's response was a fast self-close (no merge); codex's response was a merge after a multi-hour CI matrix split. **The cohort's flaky-test PR shape is bimodal in this micro-window: fast-abandon vs slow-stabilize.** Anchor for synthesis #60 below.

### OpenHands / aider / crush / cline / mcp-servers / ollama

Silent in window. No PR creation, refresh, merge, or close events.

---

### What changed in window 04:15Z → 04:42Z (Addendum 7)

1. **litellm #26467 MERGED at 04:21:09Z by `yuneng-berri`** — completes the synthesis #50 post-own-merge cascade chain (#26464 MERGED 00:57Z → #26467 OPENED 01:10Z → #26467 MERGED 04:21Z). 3h11m for the cascade-follow-up to merge, vs a corpus median PR latency >24h. **#50's "cascade-follow-up merges faster than typical" prediction is now validated** on a same-author exhibit. The merge is a **security-relevant pass-through URL traversal hardening** (`posixpath.normpath`, base-path clamping), widening the litellm-hardening surface from ACL-only (#51) to ACL + URL-construction.
2. **codex #19454 MERGED at 04:38:27Z by `dylan-hurd-oai`** — latest entry in a **5-author, 5-PR, 60-day flaky-test maintenance lineage** on the codex approval-matrix test surface (aibrahim-oai #7028/#14518/#14968, bolinfest #18288, dylan-hurd-oai #19454). Single test fixture, recurring flake, distinct authors over W09–W17.
3. **Synthesis #57's 15-minute periodicity hypothesis empirically WEAKENED** — the predicted 04:30Z third CI-update-burst on the pakrym-oai 9-PR sub-cluster did not occur within +12 minutes of its predicted time (current 04:42Z, sub-cluster `updatedAt` still 04:15:01–02Z). The two-burst evidence (04:00 + 04:15) was insufficient to establish a cadence; single-shot manual triggers are now the more parsimonious explanation. This is the corpus's **first explicit falsification of a same-tick synthesis** — synthesis #57 was authored Addendum 6 (~04:15Z) and falsified Addendum 7 (~04:30Z), a 15-minute synthesis lifetime.
4. **opencode #24252 (rekram1-node, *"fix: flaky shell test"*) self-closed in 12m37s** — first sub-15-minute self-close in the W17 corpus. New shape: open-and-abandon on a flaky-test surface within minutes. Anchor for synthesis #59 below (*sub-15-minute-self-close-on-flaky-test-surface*).
5. **Cross-repo flaky-test response bimodality** — opencode's #24252 (fast self-close, no merge) vs codex's #19454 (slow stabilize via test-matrix split, merged 6h33m) in the same micro-window. Same bug class, opposite handling. Anchor for synthesis #60 below (*flaky-test-PR-bimodality-fast-abandon-vs-slow-stabilize*).
6. **litellm #26485 (`FuturMix`, OpenAI-compatible provider integration) opened** — second new-author provider-catalog open of the day after Kcstring #26331 (gpt-image-2 prices). Once-per-50-minute cadence on provider-catalog opens this tick.
7. **codex `turn`-surface co-occupation continues** — mchen-oai #19473 (turn metadata) refreshed alongside pakrym-oai #19497 (turn handlers); two distinct authors on the same shape across two consecutive ticks.
8. **Reviewer absorption capacity is surface-dependent, not author-dependent** — yuneng-berri merged the URL-traversal hardening (#26467) within a window where the ACL-hardening cohort (synthesis #51, 5 authors) cleared zero PRs. The bottleneck is the surface (ACL changes need broader review), not the authors.

---

## Addendum 8 — Window 04:42Z → 05:21Z

### codex (openai/codex)

- **[openai/codex#19506]** — OPENED 05:07:32Z by `Aismit`. *"[codex] Refresh AGENTS.md on cwd changes."* New surface (AGENTS.md auto-refresh) and **first appearance of `Aismit` in the corpus**. The PR targets agent-runtime context invalidation on directory change — adjacent to but distinct from the synthesis #53 pakrym handler-stack and the lt-oai #19458 file-hooks PR. 2.5-minute open-to-update interval suggests CI kickoff already in flight.
- **[openai/codex#19498]** — refreshed 05:10:50Z by `pakrym-oai`. *"Streamline review and feedback handlers."* **First post-burst refresh** observed on the 9-PR `Streamline X handlers` sub-cluster after the 04:15:01–02Z second burst (Addendum 6). The refresh is on a **single PR (#19498), not the full sub-cluster** — confirming Addendum 7's parsimony judgement: there is no fixed periodic CI cron on the sub-cluster; updates are per-PR triggered (likely by individual review comments or per-PR CI re-runs). **Synthesis #57 falsified for the second time in two ticks** — the lockstep update pattern was a transient open-time artifact, not a recurring cadence.
- **[openai/codex#19459]** — refreshed 04:55:54Z by `mzeng-openai`. *"Enable unavailable dummy tools by default."* Continued iteration on the tools-shape PR; second refresh in two ticks (Addendum 7 noted the 04:33Z refresh). **mzeng-oai is iterating in ~22-minute intervals** on the dummy-tools PR — consistent with response-to-review cycle, not bot-cadence.
- **No new merges in window.** The codex side is dominated by single-author iteration (pakrym, mzeng) plus one new-author open (Aismit).

### litellm (BerriAI/litellm)

- **[BerriAI/litellm#26486]** — OPENED 04:43:33Z by `stuxf`. *"chore(auth): admin-only gate on key_type, allowed_passthrough_routes, and key/regenerate grant fields."* **Sixth PR in the synthesis #51 multi-author auth/ACL hardening surge** (yuneng-berri #26464 MERGED, ishaan-berri #26471/#26465/#26462, milan-berri #26460, stuxf #26463/#26484, now stuxf #26486). **stuxf is now a 3-PR author in the surge** (#26463 MCP-route gating + #26484 master-key alias substitution + #26486 admin-only gate on key/regenerate grant fields). Same surface family — auth-side privilege boundary tightening — across a 4h24m window from #26463 (00:19Z) to #26486 (04:43Z). **The surge is now visibly authored as a coordinated multi-PR sequence by a single contributor**, not a multi-author cohort response. **Synthesis #51's "5 distinct authors" framing now needs revision**: stuxf's three PRs are sequential micro-PRs on the same conceptual change (admin-gating sensitive fields), suggesting a deliberate scope-split rather than independent cohort response. Anchor for synthesis #61 below.
- **[BerriAI/litellm#26470]** — refreshed 05:10:03Z by `yuneng-berri`. *"[Fix] Prevent atexit flush hangs and guard proxy_server_request header lookup."* Still OPEN since 01:43Z. **Third yuneng-berri PR in the active queue this tick** (#26464 MERGED, #26467 MERGED, #26470 still open). After two same-author merges, the third PR has crossed 3h27m without merging — divergence from the synthesis #50 cascade-follow-up shape. The two prior merges were on `/team/*` (ACL metadata) and pass-through URL hardening (path-construction); #26470 is on **process-lifecycle plumbing** (atexit handler) plus **request header lookup guarding**. The cascade is now **surface-bounded**, not author-bounded: yuneng-berri's hot-author advantage does not transfer across surface families. Confirms Addendum 7's "reviewer absorption is surface-dependent" finding from a different angle.
- **[BerriAI/litellm#26471]** — `ishaan-berri` *"feat(teams): per-model team member budgets"* (synthesis #52 third refile node) still OPEN at 03:32Z last refresh; 5h25m past third-refile open. No fourth refile observed across the four ticks since synthesis #52 was authored. The triple-refile chain has stabilized at the third node — no further close-and-refile churn.

### opencode (anomalyco/opencode)

- **[anomalyco/opencode#24253]** — **OPENED 04:47:27Z by `rekram1-node`, MERGED 04:47:39Z by `rekram1-node`. 12-SECOND open-to-merge.** *"ci: adjust auto close issue script to use not planned instead of completed."* This is the **fastest open-to-merge in the W17 corpus by an order of magnitude** (next-fastest was opencode #24230 at ~13 minutes; codex #19472 at 18 minutes). Single-line CI script tweak; same author as the #24252 12-minute self-close from Addendum 7. **Same author within 18 minutes: a 12-minute open-and-self-close (no merge) followed by a 12-second open-and-merge.** Both are CI-adjacent, both on small surfaces; the failure mode and success mode share an author, a tick, and a class of change. Anchor for synthesis #62 below.
- **[anomalyco/opencode#24215]** — **MERGED 05:14:54Z by `kitlangton`.** *"Fix shell cwd after login startup."* Opened 2026-04-24T21:45:07Z; **7h29m to merge.** Sibling to #24214 (`simonklee` *"test: stabilize prompt shell cwd test"*, CLOSED 21:51Z 04-24, 7-minute self-close) — both on the **shell cwd surface**, opened within 9 minutes of each other on 04-24, with the test-stabilization PR self-closing in 7 minutes and the underlying-fix PR taking 7h29m to merge. **Second flaky-test bimodality exhibit in two ticks** (synthesis #60 anchored opencode #24252 vs codex #19454; this is opencode #24214 vs opencode #24215). The bimodality is now an **intra-repo phenomenon**, not just inter-repo as #60 framed it.
- **[anomalyco/opencode#24219]** — CLOSED 05:16:50Z by `kitlangton`. *"docs(effect): add generated http route inventory."* Opened 2026-04-24T22:15:13Z; ~7h close-without-merge by the same author. Sibling to #24213 (also kitlangton, *"refactor(ripgrep): migrate result schemas to effect"*, MERGED 21:42Z 04-24) — the effect-migration train has one merge (#24213) and one self-close (#24219) on adjacent surfaces by the same author, 7 hours apart.
- **[anomalyco/opencode#24250]** — refreshed 04:52:49Z by `knefenk`. *"fix(provider): complete DeepSeek reasoning_content round-trip for multi-turn conversations."* Synthesis #58 second-node iterating; second refresh observed in 41 minutes. Active iteration, no merge yet. #58's 7-day merge prediction remains live.

### ollama (ollama/ollama)

- **[ollama/ollama#15805]** — OPENED 02:12:58Z by `B-A-M-N`. *"Add `ollama launch qwen` support for Qwen Code CLI."* Earlier than this addendum's nominal window but **ollama has been silent in Addendums 5/6/7** — first ollama activity since the cohort silence began. Adjacent to hoyyeva's `launch:` series (#15795 *"launch: add codex model metadata catalog"*, OPEN; #15779 same title, CLOSED). **The `ollama launch <X>` surface now has 3 PRs in 2 days from 2 distinct authors** (hoyyeva: #15779 closed → #15795 open refile; B-A-M-N: #15805 open). Different model-CLI integrations (codex vs qwen), same launcher subsystem.

### crush (charmbracelet/crush)

- Silent in window. Last activity was #2706 at 01:13Z (`taigrr` *"Update tooling notes to give agent some better git and github instructions"*) — outside this addendum's window.

### continue (continuedev/continue)

- Silent in window. The interesting cross-repo signal is **[continuedev/continue#12220]** (`FuturMix` *"feat: add FuturMix as a model provider"*, OPENED 2026-04-24T15:32Z) and **[BerriAI/litellm#26485]** (`FuturMix` *"feat: add FuturMix as named OpenAI-compatible provider"*, OPENED 2026-04-25T04:24Z): **same author, same provider integration, two different agent/proxy projects, ~13 hours apart.** The continue PR opened first; the litellm PR followed. Cross-project provider-integration broadcast pattern.

### Aider-AI / OpenHands

- Silent in window. OpenHands has produced no PRs in the 24-hour search window — the longest cohort silence among the 8 watched repos.

---

### What changed in window 04:42Z → 05:21Z (Addendum 8)

1. **opencode #24253 merged in 12 seconds by `rekram1-node`** — fastest open-to-merge in the W17 corpus by an order of magnitude. Same author had a 12-minute self-close (#24252) 18 minutes earlier; both CI-adjacent, both on small surfaces. **Failure mode and success mode share an author and a tick.** Anchor for synthesis #62 below (*same-author CI-surface micro-PR doublet: self-close-fast then merge-faster*).
2. **litellm #26486 (`stuxf` admin-only gate on key/regenerate grant fields) — `stuxf`'s third PR in the synthesis #51 surge over a 4h24m window.** The "5 distinct authors" framing for #51 is empirically misleading — three of the surge PRs are sequential micro-PRs by a single contributor (stuxf: #26463 MCP gating → #26484 master-key alias → #26486 admin-only gate). Anchor for synthesis #61 below (*single-author multi-PR scope-split inside an apparently multi-author surge cohort*).
3. **opencode #24215 (kitlangton, shell cwd fix) MERGED 7h29m after open** — sibling PR #24214 (simonklee, *test stabilize prompt shell cwd*) had self-closed in 7 minutes on 04-24. **Second flaky-test bimodality exhibit in two ticks**, this time intra-repo (synthesis #60 was inter-repo). The bimodality generalizes across the repo boundary.
4. **Synthesis #57 falsified again** — pakrym-oai #19498's solo refresh at 05:10:50Z (without the rest of the 9-PR sub-cluster) confirms updates are per-PR review-driven, not bot-cron-driven.
5. **yuneng-berri's third PR (#26470, atexit/header-lookup) did not follow the synthesis #50 cascade-follow-up shape** — 3h27m open, no merge. Hot-author cascade speed is **surface-bounded**, not author-bounded: extends but reframes synthesis #50's prediction.
6. **Cross-project provider broadcast** — `FuturMix` opened the same provider integration in continuedev/continue (#12220) and BerriAI/litellm (#26485) ~13 hours apart. Provider-author broadcast across two distinct project surfaces in one calendar day.
7. **ollama launcher subsystem**: 3 PRs in 2 days from 2 authors on `ollama launch <X>` integration commands — new sub-surface emerging in the ollama corpus.
8. **codex #19506 (`Aismit`, AGENTS.md cwd refresh) opens new agent-context-invalidation surface** with a first-appearance author. Adjacent to but disjoint from the existing pakrym/lt-oai/mzeng iteration cluster.

## Addendum 9 — Window 05:21Z → 05:47Z

### codex (openai/codex)

- **[openai/codex#19481]** — refreshed 05:45:10Z by `pakrym-oai`. *"Remove ghost snapshots."* Opened 01:40:58Z; OPEN. Off-stack pakrym-oai PR (not part of the 9-PR `Streamline X handlers` sub-cluster). The refresh is **solo, not lockstep with the 9-PR cluster**, further reinforcing Addendum 7/8's falsification of synthesis #57's periodic-cron hypothesis. Updates on the pakrym surface remain per-PR review-driven, not bot-cadence.
- **[openai/codex#19473]** — refreshed 05:38:04Z by `mchen-oai`. *"Add turn start timestamp to turn metadata."* Third tick of `mchen-oai` iteration on the turn-metadata PR (Addendum 7: 04:25Z; Addendum 8 implicit; now 05:38Z). Iteration intervals continue at ~30–60-minute spacing — consistent with response-to-review cadence.
- **[openai/codex#19498]** — last refresh 05:10:50Z (Addendum 8). No further activity in this window. The 9-PR `Streamline X handlers` sub-cluster otherwise dormant since 04:15:01–02Z second burst.
- **No new opens, no merges, no closes** on codex this window.

### litellm (BerriAI/litellm)

- **[BerriAI/litellm#26490]** — **OPENED 05:46:44Z by `yuneng-berri`**. *"[Fix] Restrict /global/spend/* routes to admin roles."* **`yuneng-berri`'s fourth PR in this calendar day** (#26464 MERGED 00:57Z + #26467 MERGED 04:21Z + #26470 OPEN 01:43Z + #26490 OPEN 05:46Z) — and the **first `yuneng-berri` PR explicitly on the auth/ACL admin-gating surface**. The PR title verbatim parallels the synthesis #51 cohort shape (admin-gate restriction on a previously-broader route family) and the synthesis #61 stuxf-style "scope-split admin-gating" micro-PR sequence. **`yuneng-berri` has now crossed from the URL-construction / team-metadata surfaces into the auth/ACL surface** that previously was stuxf + ishaan-berri territory. Two-author convergence on admin-route gating in one tick. Anchor for synthesis #63 below.
- **[BerriAI/litellm#26489]** — OPENED 05:30:30Z by `stuxf`. *"chore(vector-stores): redact credentials in list/info/update responses; gate update by per-store access."* **`stuxf`'s fourth PR in the synthesis #51 surge** (after #26463 MCP gating, #26484 master-key alias, #26486 admin-only key/regenerate gate). Now crosses from auth/ACL into a **new surface family — vector-stores credential redaction + per-store ACL** — but with the same conceptual shape (sensitive-field redaction + privilege-by-exclusion gating). The synthesis #61 single-author scope-split pattern has now extended **past 4 hours and 4 PRs across 2 surface families** (auth/ACL + vector-stores). The hypothesis under #61 (this is a deliberate scope-split, not cohort response) is strengthening: a coordinated multi-PR refactor disguised as a surge.
- **[BerriAI/litellm#26488]** — OPENED 05:29:37Z by `yuneng-berri`. *"[Feature] UI - Spend Logs: sortable Model and TTFT columns."* **First `yuneng-berri` PR on the UI surface** in this corpus. Adjacent to but disjoint from the auth/ACL + URL-construction surfaces yuneng-berri has previously occupied. **In ~17 minutes (05:29Z → 05:46Z), `yuneng-berri` opens a UI-feature PR (#26488) and an admin-gating-ACL PR (#26490)** — two PRs on diametrically opposite surfaces, in rapid succession, by the same author. Surface-class doublet (feature/UI + auth/ACL).
- **[BerriAI/litellm#26486]** — refreshed 05:40:38Z by `stuxf`. *"chore(auth): admin-only gate on key_type, allowed_passthrough_routes, and key/regenerate grant fields."* Third tick of iteration on this PR. Still OPEN, no merge.
- **No litellm merges in window.** The litellm side this tick is dominated by **two simultaneous multi-PR sequences by yuneng-berri (4 PRs) and stuxf (4 PRs)** — both producing micro-PRs on overlapping surface families (auth/ACL + admin-gating + redaction).

### opencode (anomalyco/opencode)

- **[anomalyco/opencode#24259]** — OPENED 05:39:41Z by `Yusuzhan`. *"docs: add opencode-simple-notify to ecosystem."* Ecosystem-docs addition. **First appearance of `Yusuzhan`** in this corpus. Low-stakes docs PR — not part of any active sequence.
- **[anomalyco/opencode#24258]** — OPENED 05:28:38Z by `kitlangton`. *"feat(httpapi): bridge instance read endpoints."* **First `kitlangton` PR after the 05:14Z merge of #24215 (shell cwd fix) and the 05:16Z self-close of #24219 (effect http route inventory docs).** New surface (httpapi bridge endpoints). The same-author cascade follows: a merge + a self-close + a new feature open, all by `kitlangton` within a ~25-minute span (05:14Z → 05:39Z). **Cascade follow-up shape consistent with synthesis #50 prediction** (post-own-merge same-author surface-adjacent open) — `kitlangton` now exhibits the same pattern previously documented for `yuneng-berri` (#26464 MERGED → #26467 OPENED 13min later). #50's cascade-follow-up shape now has **two distinct exhibits across two repos** in the same calendar day.
- **[anomalyco/opencode#24250]** — refreshed 05:35:19Z by `knefenk`. *"fix(provider): complete DeepSeek reasoning_content round-trip for multi-turn conversations."* Third refresh of synthesis #58's second-node PR. Active iteration continuing; no merge yet.

### OpenHands (All-Hands-AI/OpenHands)

- **[All-Hands-AI/OpenHands#14128]** — OPENED 05:19:54Z by `fungi8`. *"Support pagination for branch search."* **First OpenHands PR open since 14127 at 02:06Z** — breaks the ~3-hour silence for OpenHands in this morning's tick sequence (Addendums 5–8 noted OpenHands silent). **First appearance of `fungi8`**. Surface: branch-search pagination — adjacent to but disjoint from the active OpenHands cluster (settings persistence, frontend imports, MCP migration).

### crush / aider / ollama

Silent in window. crush last activity 01:13Z (#2706 taigrr); aider last activity 04-24 09:50Z (#5066 anishesg, polyglot benchmark — note: title verbatim quotes the model product name from the AI vendor; redact when synthesizing); ollama last activity 02:12Z (#15805 B-A-M-N qwen launcher).

---

### What changed in window 05:21Z → 05:47Z (Addendum 9)

1. **`yuneng-berri` opened 2 new litellm PRs in 17 minutes on diametrically opposite surfaces** (#26488 UI sortable columns + #26490 admin-route ACL gating). Combined with the morning's 2 merges (#26464, #26467) and 1 still-open (#26470), `yuneng-berri` is now a **4-PR-open + 2-PR-merged author** in one calendar day across **four distinct surface families** (team-metadata ACL, pass-through URL hardening, atexit/header-lookup, UI feature, admin-route ACL). **The cascade-follow-up shape (synthesis #50) has extended into a multi-surface multi-PR spread, not a linear cascade.** Anchor for synthesis #63 below (*hot-author multi-surface fanout: same-author opens span unrelated surface families within minutes*).
2. **`stuxf` opened a 4th PR in the synthesis #51/#61 sequence (#26489 vector-stores credential redaction + per-store ACL)** — now crosses from auth/ACL into vector-stores while preserving the same conceptual shape (sensitive-field redaction + privilege-by-exclusion). The synthesis #61 single-author scope-split pattern is now confirmed across **two surface families and 4 PRs over 5h10m**. Synthesis #61's "this is a deliberate scope-split, not cohort response" is strengthening with each new PR.
3. **`kitlangton` exhibits the synthesis #50 cascade-follow-up shape on opencode** — #24215 MERGED 05:14Z → #24219 self-CLOSED 05:16Z → #24258 OPENED 05:28Z. Two-merge-equivalent same-author cascade now visible in **two distinct repos** in one calendar day (litellm yuneng-berri + opencode kitlangton). The cascade shape is **cross-repo recurrent**, not litellm-specific. Anchor for synthesis #64 below (*post-own-merge same-author cascade is cross-repo recurrent in W17, observed independently in 2 repos within 5 hours*).
4. **OpenHands silence broken at 05:19Z by `fungi8` #14128** — first OpenHands PR in ~3 hours. Branch-search pagination surface, disjoint from other active OpenHands clusters.
5. **No merges in window** across any of the 8 watched repos. Pure open-and-iterate tick. The previous tick (Addendum 8) closed with 2 merges in 31 minutes (#19454 codex, #26467 litellm); this tick has 0 merges in 26 minutes — **reviewer absorption capacity has dropped to zero in this window**, while open volume has not (5 new opens: #19481-no #26488 #26489 #26490 #24258 #24259 #14128 = 6 opens / 1 self-close-equivalent absent).
6. **Synthesis #57 (15-min CI cron periodicity) remains falsified** — pakrym 9-PR sub-cluster has now been dormant for 1h32m since the 04:15Z second burst, with only solo refreshes (#19498 at 05:10Z, #19481 at 05:45Z) in between. The single-shot manual-trigger interpretation is now strongly preferred.
7. **Two-author convergence on litellm admin-route ACL surface** — `yuneng-berri` (#26490) and `stuxf` (#26486 still iterating) now both occupy the admin-gating surface within the same window. Previously stuxf + ishaan-berri were on the surface; yuneng-berri's #26490 is the third distinct contributor in 5 hours.

## Addendum 10 — Window 05:47Z → 07:11Z

### codex (openai/codex)

- **[openai/codex#19524]** — OPENED 07:10:04Z by `aibrahim-oai`. *"[codex] Minimize codex-mcp public surface."* **First appearance of `aibrahim-oai`** in this corpus and **first PR explicitly on the codex-mcp surface-minimization theme** in the W17 window. Adjacent to but disjoint from the active `pakrym-oai` 9-PR `Streamline X handlers` cluster (#19494–#19498) — both are surface-shaping refactors on the codex MCP/handler boundary, but by different authors with non-overlapping file scopes. Two-author convergence on the codex MCP-surface refactor theme within 4 hours.
- **[openai/codex#19514]** — **MERGED 06:31:47Z by `etraut-openai`. 53-second open-to-merge.** *"Fix codex-rs README grammar."* Trivial docs PR but the **second sub-60-second open-to-merge in the W17 corpus** (after opencode #24253 at 12 seconds in Addendum 8). **Both sub-60-second merges are by their author themselves** (rekram1-node self-merged #24253; etraut-openai self-merged #19514). Self-merge fast-path is now empirically a **two-repo phenomenon**, not opencode-specific — extends Addendum 8's "fastest open-to-merge" observation from outlier to recurring pattern.
- **[openai/codex#19513]** — OPENED 06:21:29Z by `etraut-openai`. *"Delay approval prompts while typing."* TUI-affordance fix.
- **[openai/codex#19511]** — OPENED 06:17:51Z by `etraut-openai`. *"Keep slash command popup columns stable while scrolling."* TUI-rendering fix.
- **[openai/codex#19510]** — OPENED 06:11:58Z by `etraut-openai`. *"Hide rewind preview when no user message exists."* TUI-state-guard fix; refreshed 06:30:29Z (~19m after open). **`etraut-openai` opens 3 PRs (#19510 #19511 #19513) and merges 1 (#19514) in a 19-minute window 06:11Z → 06:31Z**, all on codex TUI surfaces (rewind preview, slash command popup, approval prompt, README docs). **Single-author 4-PR TUI-surface burst** with 1 merge inside the burst. Anchor for synthesis #65 below (*single-author micro-burst with self-merge inside the burst window: 4 PRs in 19 minutes, 1 self-merged in <60s*).
- **[openai/codex#19509]** — OPENED 05:52:34Z by `mchen-oai`. *"Record MCP tool result telemetry on spans."* `mchen-oai`'s second PR in two ticks (Addendum 9 had #19473 turn-metadata iteration; this is a new MCP-telemetry open). Same author crosses from the turn-metadata surface to the MCP-telemetry surface in ~14 minutes. Mini-cascade-followup pattern (synthesis #50 shape) on a different author than yuneng-berri / kitlangton.

### litellm (BerriAI/litellm)

- **[BerriAI/litellm#26497]** — OPENED 07:03:52Z by `HeMuling`. *"fix(chatgpt): preserve text and parallel_tool_calls in responses."* First appearance of `HeMuling`. Provider-fidelity fix on the chatgpt response surface; refreshed 07:07:36Z (3.7 minutes after open).
- **[BerriAI/litellm#26496]** — OPENED 06:41:22Z by `yuneng-berri`. *"[Infra] Merge dev branch."* **`yuneng-berri`'s 5th PR of the calendar day** — this one is a meta/infra branch-merge PR (not a feature PR). Crosses from feature/UI/auth surfaces into the **branch-management surface**. The synthesis #63 multi-surface-fanout shape now spans **5 surface families** (team-metadata ACL, pass-through URL, atexit/header, UI feature, admin-route ACL, infra branch-merge — six if the service-account permission #26493 is counted distinct from #26490).
- **[BerriAI/litellm#26495]** — OPENED 06:37:31Z by `he-yufeng`. *"fix(health_check): drop max_tokens from non-chat handler params (closes #26406)."* First appearance of `he-yufeng`. Bug-fix closing an issue.
- **[BerriAI/litellm#26493]** — **MERGED 06:40:59Z by `yuneng-berri`. Opened 06:11:35Z; 29m24s open-to-merge.** *"[Fix] Extend caller-permission checks to service-account + tighten raw-body acceptance."* **`yuneng-berri`'s 3rd merge of the calendar day** (after #26464 00:57Z, #26467 04:21Z, now #26493 06:40Z + #26492 06:05Z). The cascade-follow-up shape (synthesis #50) is now **iterating in compressed time** for `yuneng-berri`: 4 merges in 5h43m, with sub-30-minute open-to-merge on the latest two.
- **[BerriAI/litellm#26492]** — **MERGED 06:05:43Z by `yuneng-berri`. Opened 05:55:55Z; 9m48s open-to-merge.** *"[Fix] Tighten caller-permission checks on key route fields."* **`yuneng-berri`'s 4th merge in the calendar day** and the **first sub-10-minute merge of a `yuneng-berri` PR**. Fast-path on the auth-ACL surface — this is the surface where the synthesis #51 surge has been concentrated. Two-author admin-gating convergence (yuneng-berri + stuxf, noted in Addendum 9) is now producing a **fast-merge yuneng-berri vs slow-iterate stuxf bimodality** on the same surface family within the same window. Extends synthesis #60 bimodality framing from the flaky-test surface to the auth-ACL surface.
- **[BerriAI/litellm#26491]** — OPENED 05:54:45Z by `mateo-berri`. *"[WIP] feat(tests): Claude Code Compatibility Matrix v0 (PRD #26476)."* **First appearance of `mateo-berri`** in this corpus. WIP test-matrix PR explicitly tracking a PRD. The WIP marker + PRD-reference shape is **rare in the W17 corpus** — most litellm PRs are scope-bounded fixes/features without explicit PRD anchoring.

### opencode (anomalyco/opencode)

- **[anomalyco/opencode#24263]** — OPENED 07:01:47Z by `terisuke`. *"[codex] Fix team worker model routing."* First appearance of `terisuke`. Title prefix `[codex]` mirrors the openai/codex convention but on a different repo — **cross-repo title-prefix convention bleed** (synthesis #44 territory if anyone's tracking).
- **[anomalyco/opencode#24262]** — OPENED 06:46:26Z by `Zireael`. *"fix(provider): inject chat_template_kwargs for Nvidia NIM deepseek-v4 models."* First appearance of `Zireael`. Adjacent to `knefenk` #24250 (DeepSeek reasoning_content round-trip, still iterating since 04:11Z) — **two distinct PRs on the DeepSeek model surface in <3 hours by 2 distinct authors** (`knefenk` reasoning_content; `Zireael` template kwargs for deepseek-v4). DeepSeek surface is now a **multi-author cluster** in opencode, mirroring the `ollama launch <X>` multi-author launcher cluster (Addendum 8) — two cross-repo precedents in two ticks for the *vendor-or-feature-named multi-author cluster* shape.
- **[anomalyco/opencode#24251]** — CLOSED 06:55:41Z by `atlantis-mk`. *"feat: add project run configs to the web app."* Opened 04:12:43Z by `atlantis-mk`; **2h42m open-to-self-close, no merge**. Sibling-class to opencode #24252 (Addendum 7/8: 12-minute self-close on flaky shell test) and #24246 (`xthreehao` *"fix: preserve nix/direnv PATH in login shell"*, also CLOSED 07:03:53Z this window after 3h43m open). **3 self-close PRs in opencode in 7 hours** — synthesis #59 (sub-15-minute self-close on flaky-test surface) now has a longer-form sibling: **multi-hour self-close on feature surfaces** (web-app run configs, login-shell PATH). The self-close pattern in opencode is **not surface-bounded to flaky-test surfaces** — it generalizes to feature/fix surfaces with multi-hour open windows. Anchor for synthesis #66 below.
- **[anomalyco/opencode#24246]** — CLOSED 07:03:53Z by `xthreehao`. *"fix: preserve nix/direnv PATH in login shell for ! commands."* Opened 03:20:22Z; 3h43m open-to-self-close. Adjacent to `kitlangton` shell-cwd #24215 (MERGED 7h29m after open) and `simonklee` #24214 (self-closed in 7 minutes 04-24) — the **opencode shell/PATH surface now has 4 PRs in 24 hours: 1 merge (#24215), 3 self-closes (#24214, #24246, #24252)**. Self-close-rate on this surface is 75%.

### OpenHands (OpenHands/OpenHands)

- **[OpenHands/OpenHands#14130]** — OPENED 07:03:54Z by `app/dependabot`. *"chore(deps): bump pypdf from 6.9.2 to 6.10.2 in /enterprise."* Bot PR. First OpenHands PR since `fungi8` #14128 at 05:19Z (Addendum 9). Org-name note: this PR is under `OpenHands/OpenHands` (the API now returns the new org name; previously `All-Hands-AI/OpenHands`). No human-author OpenHands activity in window.

### ollama / crush / aider / continue

- **ollama**: silent in window. Last activity remains #15805 at 02:12Z (B-A-M-N qwen launcher).
- **crush**: silent in window. Last activity #2706 at 01:13Z (taigrr).
- **continue**: silent in window. The cross-project `FuturMix` provider broadcast (continue #12220 + litellm #26485) noted in Addendums 8/9 has **no third leg** — neither has been merged or refreshed in the last ~3 hours.
- **aider**: silent in window. No new opens/merges/closes.

---

### What changed in window 05:47Z → 07:11Z (Addendum 10)

1. **`etraut-openai` 4-PR TUI-surface burst on codex (06:11Z–06:31Z)** with 1 self-merge inside the burst (#19514, 53-second open-to-merge). Single author, 4 PRs in 19 minutes, all on TUI surfaces (rewind, popup columns, approval prompt, docs). Anchor for **synthesis #65** below (*single-author micro-burst with self-merge inside the burst window*).
2. **opencode multi-hour feature-surface self-close generalization**: #24251 (`atlantis-mk`, web-app run configs, 2h42m self-close) + #24246 (`xthreehao`, nix/direnv PATH, 3h43m self-close). Combined with the 7-minute simonklee #24214 and 12-minute rekram1-node #24252 self-closes, **opencode has produced 4 self-closes in <24h across 4 distinct surfaces**, not surface-bounded as synthesis #59 had framed it. Anchor for **synthesis #66** below (*opencode self-close pattern is surface-agnostic and time-bimodal: short flaky-test self-close + multi-hour feature-surface self-close*).
3. **`yuneng-berri` 4th + 5th merge of the calendar day** (#26492 9m48s open-to-merge + #26493 29m24s open-to-merge), plus a 5th open (#26496 infra branch-merge). The synthesis #63 multi-surface fanout has now extended to **6 surface families** for one author in a single calendar day, with **fast-merge-velocity** on the most recent merges (sub-30-minute) — the cascade is accelerating, not stabilizing.
4. **Sub-60-second self-merge pattern is now cross-repo recurrent** (codex #19514 etraut-openai 53s + opencode #24253 rekram1-node 12s, in Addendum 8). Both authors self-merged trivial-surface PRs (README grammar, CI script tweak); the affordance is **author-self-merge on small docs/CI surfaces**, not project-policy enforcement variance.
5. **DeepSeek surface multi-author cluster in opencode** (`knefenk` #24250 reasoning_content + `Zireael` #24262 template_kwargs for deepseek-v4) — second cross-repo precedent for the vendor-or-feature-named multi-author cluster shape after the `ollama launch <X>` cluster (Addendum 8).
6. **opencode shell/PATH surface self-close rate is 75%** (3 of 4 PRs self-closed in 24h: #24214, #24246, #24252; only #24215 merged). The shell-cwd surface in opencode is producing significantly more abandoned PRs than merges — surface-quality signal.
7. **Two new contributor first-appearances on litellm** (`HeMuling` #26497, `he-yufeng` #26495, `mateo-berri` #26491 — three first-appearances) in one window. litellm contributor-discovery rate remains high.
8. **Two new contributor first-appearances on opencode** (`terisuke` #24263, `Zireael` #24262). opencode contributor-discovery rate also high.
9. **No `pakrym-oai` cluster activity in window** — the 9-PR `Streamline X handlers` cluster has now been fully dormant for 2h56m since the 04:15Z second burst, with only solo refreshes earlier (Addendums 8/9). The synthesis #57 falsification stands.

## Addendum 11 — Window 07:11Z → 07:45Z

### codex (openai/codex)

- **[openai/codex#19526]** — OPENED 07:24:31Z by `aibrahim-oai`. *"[codex] Order codex-mcp items by visibility."* Draft. **Second `aibrahim-oai` PR on the codex-mcp surface in <90 minutes** (after #19524 at 07:10:04Z, *"Minimize codex-mcp public surface"*). #19526's body explicitly references "the visibility cleanup in the base PR" — so this is a **declared 2-PR cohort, not an inferred one**, and it's by the same author. Surface-shaping cascade now has a same-author 2-PR sub-cohort independent of the active `pakrym-oai` 9-PR `Streamline X handlers` cluster. Two distinct authors are now producing **explicit multi-PR sequences** on the codex MCP/handler boundary in the same calendar day.

### litellm (BerriAI/litellm)

- **[BerriAI/litellm#26489]** — refreshed 07:25:00Z by `stuxf` (4th tick of iteration; opened 05:30:30Z; vector-stores credential redaction + per-store ACL on update). Still OPEN, no merge. The synthesis #61 single-author scope-split sequence by `stuxf` (4 PRs over ~6h on auth/ACL → vector-stores redaction) **continues to iterate in place rather than merging** — `stuxf`'s slow-iterate vs `yuneng-berri`'s fast-merge bimodality (Addendum 10 framing) extends another window.
- **No new opens, no new merges in window.** litellm side this tick is dominated by the absence of `yuneng-berri` activity since #26496 at 06:41Z (over 1h04m gap) — the 5-merge calendar-day cascade has paused.

### opencode (anomalyco/opencode)

- **[anomalyco/opencode#24263]** — **CLOSED 07:12:14Z by `terisuke`. Opened 07:01:47Z; 10m27s open-to-close.** *"[codex] Fix team worker model routing."* The PR carried two labels: `needs:title` (no description) and `needs:compliance` ("This means the issue will auto-close after 2 hours."). Closed at 10m27s — well inside the documented 2-hour grace window — by automation acting on the `terisuke` account. **This is structurally distinct from the synthesis #59/#66 self-close pattern**: those are author-driven retraction; this is **label-driven bot-close** with a deterministic timer (and a faster-than-grace early trip in this case). PR body redacted from synthesis (referenced specific vendor/version model strings).
- **[anomalyco/opencode#24262]** — refreshed 07:17:45Z by `Zireael` (DeepSeek-v4 chat_template_kwargs injection). Still OPEN; comments climbed to 2. Active iteration on the DeepSeek surface continues.
- **[anomalyco/opencode#16525]** — refreshed 07:41:13Z by `3x3cut0r` (config.d fragment loader). PR opened 2026-03-07; **48-day-old PR** with 7 reactions and 3 comments, refreshed in window. Long-tail PR-iteration signal.
- **[anomalyco/opencode#14468]** — refreshed 07:15:39Z by `balcsida` (LiteLLM provider with auto model discovery). PR opened 2026-02-20; **64-day-old PR** with 15 comments and 8 reactions. Cross-project provider integration PR. Still OPEN. Two long-tail iteration refreshes in this window for opencode (#16525, #14468) — both are feature PRs that have been resisting merge for >6 weeks.

### cline (cline/cline)

- **[cline/cline#10403]** — OPENED 07:25:36Z by `abliteration-ai`. *"feat: add Abliteration.ai provider."* **First appearance of `abliteration-ai`** in this corpus. Provider-author opens a PR for their own provider — **vendor-self-onboarding shape** (the GitHub user account name matches the provider being added). First cline activity to surface in W17 corpus this week. PR body discloses 1426 unit tests passing, 558 integration tests passing — heavy pre-validation by author. Refreshed 07:30:54Z (5m18s after open) with 3 comments — fast review engagement.

### ollama (ollama/ollama)

- **[ollama/ollama#15530]** — refreshed 07:44:00Z by `dhiltgen` (collaborator). Long-running draft (opened 2026-04-13, 12 days old). *"MLX: add repeatable model porting workflow."* Draft remains, comments climbed to 1, 1 eyes-reaction. First `dhiltgen` (collaborator) refresh on this draft in 24h+. Long-running collaborator-authored draft signal.
- **[ollama/ollama#15793]** — refreshed 07:13:49Z by `pd95` (MLX 0.31.2 update + AddMM regression test). PR opened 2026-04-24 11:59Z (~19h old). PR body **explicitly discloses use of an external coding agent** to investigate and prepare the PR. This is the **first explicit AI-tooling-attribution footnote** observed in a tracked-repo PR body during W17 (other PRs may use AI tooling but don't attribute). Worth tracking as a **PR-body provenance disclosure pattern**. Vendor name redacted from synthesis.

### OpenHands, aider, crush, continue

- **OpenHands**: silent in window. Last activity #14130 (dependabot pypdf bump) at 07:03:54Z (Addendum 10).
- **aider**: silent in window.
- **crush**: silent in window.
- **continue**: silent in window. The cross-project `FuturMix` provider broadcast (continue #12220 + litellm #26485) noted in Addendums 8/9/10 still has **no third leg** — neither merged nor refreshed in ~6 hours. Slipping toward "abandoned dual-PR coordination" rather than active cross-project coordination.

---

### What changed in window 07:11Z → 07:45Z (Addendum 11)

1. **Label-driven bot-close mechanism observed for the first time in this corpus** (opencode #24263, `terisuke`, 10m27s open-to-close). The `needs:compliance` label carries a documented 2-hour grace + auto-close action; #24263 was bot-closed well inside the grace window (10m, not 2h), suggesting a second trigger or earlier-than-grace policy. **This is structurally distinct from synthesis #59/#66 self-closes** — those are author-driven; this is bot-driven. **Future opencode close events should be classified self-close vs bot-close vs maintainer-close before being counted in synthesis #59/#66 cohorts.** Spot check: prior synthesis #66 closes (`xthreehao` #24246, `atlantis-mk` #24251, `simonklee` #24214, `rekram1-node` #24252) did not carry `needs:compliance`. Synthesis #66 stands; Addendum 11 isolates a fourth distinct close-shape.
2. **`aibrahim-oai` declares a same-author 2-PR sequence on codex-mcp visibility** (#19524 → #19526, 1h14m apart, second PR text explicitly references first). This is **declared multi-PR cohort behavior** — distinct from the inferred multi-PR cohorts that synthesis #51/#61/#63 documented for `stuxf` and `yuneng-berri`. **Anchor for synthesis #67 below** (*declared vs inferred multi-PR sequences: when authors signpost their cohort vs when the cohort is reader-detected*).
3. **Two long-tail opencode feature PRs refreshed in the same 26-minute window** (#14468 64 days old by `balcsida`, LiteLLM provider; #16525 48 days old by `3x3cut0r`, config.d fragments). Both are **non-trivial-feature PRs that have resisted merge for >6 weeks**. opencode now exhibits a **tri-modal merge-velocity distribution**: sub-60s self-merge (synthesis #65 / Addendum 8/10), multi-hour-to-day single-PR merges (`kitlangton` #24215 7h29m), and **multi-week long-tail iteration** (#14468, #16525). **Anchor for synthesis #68 below** (*opencode merge-velocity is tri-modal, not bi-modal: the long-tail >6-week feature-PR cohort is a third distinct mode*).
4. **First explicit AI-tooling-attribution footnote in a tracked-repo PR body** (ollama #15793 by `pd95`). PR body voluntarily discloses external coding-agent use for investigation, test creation, and PR preparation. Worth flagging for cross-repo norm tracking — if more PRs voluntarily disclose AI-tooling use in coming weeks, this becomes a documentable W17→W18 norm shift.
5. **First cline activity to surface in W17 corpus** (#10403 `abliteration-ai`, vendor-self-onboarding provider PR). Cline was effectively silent in earlier W17 addendums; the appearance of a vendor-self-authored provider PR is the first cline data point this week. Vendor-self-onboarding (PR author = provider org) is a shape distinct from third-party-author provider PRs (e.g. opencode #14468 by `balcsida` for the LiteLLM proxy provider — `balcsida` is not the LiteLLM org).
6. **No merges in window across all 9 tracked repos.** Second consecutive zero-merge window (Addendum 9 also had zero merges; Addendum 10 had multiple merges). Reviewer-absorption capacity remains at zero in this 34-minute slice while open volume remains elevated (3 new opens: #19526, #10403, plus opencode #24263 open-and-close in window).
7. **`yuneng-berri` cascade has paused for 1h04m** (no activity since #26496 at 06:41Z). The synthesis #63/#64 hot-author multi-surface fanout has its first prolonged dormant interval in the calendar day; whether this is the **end of the cascade** (sustainable single-day burst) or a **mid-cascade pause** (with more PRs to come) is the watch question for Addendum 12.

## Addendum 12 — Window 07:45Z → 08:25Z

### codex (openai/codex)

- **[openai/codex#19392]** — refreshed 08:22:14Z by `bolinfest`. *"permissions: derive compatibility policies from profiles."* Still OPEN.
- **[openai/codex#19391]** — refreshed 07:59:03Z by `bolinfest`. *"permissions: make runtime config profile-backed."* Still OPEN. Both PRs were opened together at 16:02:5x on 2026-04-24 (~16 hours ago) and refreshed within ~23 minutes of each other in this window. **Same-author 2-PR sequence on adjacent permissions surfaces, refreshed in lockstep**, by the same author who landed the legacy-mode removal #19449 in Addendum 1 (00:17Z this calendar day). The permissions slice (#19391–#19395 originally cited in synthesis #44) is being co-iterated by `bolinfest` ~16h after first opened; #19392's title (*"derive compatibility policies from profiles"*) explicitly depends on #19391's deliverable (*"make runtime config profile-backed"*) — a **declared inter-PR ordering** in the maintainer-class (extends synthesis #67's declared-cohort framing from contributor `aibrahim-oai` to maintainer `bolinfest`).

### litellm (BerriAI/litellm)

- **[BerriAI/litellm#26497]** — refreshed 08:21:05Z by `HeMuling`. *"fix(chatgpt): preserve text and parallel_tool_calls in responses."* Still OPEN; first refresh since open (07:03:52Z, Addendum 10). 1h17m gap to first iteration — slow-iteration shape.
- **[BerriAI/litellm#26189]** — refreshed 08:13:36Z by `iamujjwalsinha`. *"fix(xai): register grok-imagine-image for image generation."* PR opened 2026-04-21T20:08Z; **~3.5-day-old PR** refreshed in window. xAI surface.
- **[BerriAI/litellm#26052]** — refreshed 08:10:43Z by `geraint0923` (`Mark`). *"fix(xai): correctly resolve the canonical names and alias for xai models."* PR opened 2026-04-19T05:20Z; **~6-day-old PR** refreshed in window. xAI surface.
- **[BerriAI/litellm#25896]** — refreshed 08:14:02Z by `Vallabh-1504`. *"feat(vertex_ai): Add xAI Grok models support as Vertex AI partner models."* PR opened 2026-04-16T19:48Z; **~8.6-day-old PR** refreshed in window. Vertex AI × xAI cross-surface integration.
- **Three xAI/Grok-surface litellm PRs from three distinct authors refreshed within an 11-minute span** (#26189 iamujjwalsinha 08:13:36Z, #25896 Vallabh-1504 08:14:02Z, #26052 geraint0923 08:10:43Z). Two are direct xAI provider fixes (alias resolution + grok-imagine model registration), one is a partner-model integration. **Multi-author multi-PR convergence on the xAI/Grok provider surface in litellm**, all on long-tail PRs (3.5–8.6 days old). Anchor for **synthesis #69** below.

### opencode (anomalyco/opencode)

- **[anomalyco/opencode#24250]** — refreshed 08:14:07Z by `knefenk`. *"fix(provider): complete DeepSeek reasoning_content round-trip for multi-turn conversations."* Opened 04:11:17Z (~4 hours ago, Addendum 9 era). Still OPEN. Same DeepSeek-reasoning surface as #24146 (MERGED prior tick) and the cross-repo signal traced in synthesis #58 (single-turn-merge-exposes-multi-turn-gap).
- **[anomalyco/opencode#18767]** — refreshed 07:54:14Z by `noahbentusi`. *"feat(app): Mobile Touch Optimization."* PR opened 2026-03-23T11:05Z; **~33-day-old PR** refreshed in window. Long-tail feature PR.
- **[anomalyco/opencode#13854]** — refreshed 07:54:15Z by `mocksoul` (`Vadim Fint`). *"fix(tui): stop streaming markdown/code after message completes."* PR opened 2026-02-16T14:43Z; **~68-day-old PR** refreshed in window — **the oldest opencode PR refresh observed in this calendar day**, exceeding the #14468 64-day datapoint that anchored synthesis #68. Long-tail feature PR.
- **Two long-tail opencode PRs refreshed within 1 second of each other** (#18767 07:54:14Z, #13854 07:54:15Z, both feature PRs >30 days old, two distinct authors). The timing is suspicious-tight: this is more consistent with a **bot-driven mass-refresh sweep** than two independent author actions.

### ollama (ollama/ollama)

- **[ollama/ollama#15808]** — OPENED 08:16:22Z by `famasoon` (`Ryota Sakai`). *"fix: improve error handling for model loading in Scheduler."* Scheduler-surface error-handling PR; first new ollama open since #15805 (B-A-M-N qwen launcher, 02:12Z, ~6 hours ago). Breaks the ~6h ollama-silence noted across Addendums 9/10/11.
- **[ollama/ollama#15726]** — refreshed 08:07:02Z by `UniquePratham`. *"fix: resolve OpenClaw gateway launch timeout on Windows by enforcing …"* PR opened 2026-04-21T05:32Z; **~4-day-old PR** refreshed in window. Windows-Scheduler interaction surface — adjacent to but disjoint from #15808's Scheduler error-handling. **Two ollama Scheduler-surface PRs active in the same window** (one new open, one long-tail refresh) by two distinct authors.

### cline (cline/cline)

- **[cline/cline#10403]** — refreshed 07:47:37Z by `abliteration-ai`. *"feat: add Abliteration.ai provider."* Vendor-self-onboarding provider PR opened 07:25:36Z (Addendum 11). 22m to first iteration. Still OPEN.

### crush / continue / OpenHands / aider

- **crush**: silent in window. Last activity #2706 at 01:13Z (taigrr) — now ~7h09m of silence.
- **continue**: silent in window. The cross-project `FuturMix` provider broadcast (continue #12220 + litellm #26485) noted in Addendums 8–11 still has **no third leg**; ~7h continuous dormancy on both legs. The "abandoned dual-PR coordination" framing from Addendum 11 hardens.
- **OpenHands** (`OpenHands/OpenHands` — note org name from Addendum 10): silent in window. Last activity #14130 (dependabot pypdf bump) at 07:03:54Z.
- **aider**: silent in window.

---

### What changed in window 07:45Z → 08:25Z (Addendum 12)

1. **Multi-author convergence on the xAI/Grok provider surface in litellm** (#26189 iamujjwalsinha, #26052 geraint0923, #25896 Vallabh-1504 — three distinct authors, three long-tail PRs 3.5–8.6 days old, all refreshed within an 11-minute span at 08:10–08:14Z). This is the **first observed multi-author single-day refresh convergence on a single provider-family surface in litellm** in this corpus. The pattern is **provider-surface-driven long-tail synchronization**, structurally distinct from the same-day surge cohorts (synthesis #51) and same-author scope-splits (synthesis #61). **Anchor for synthesis #69** below.
2. **Maintainer-class declared inter-PR ordering on codex permissions surface** (`bolinfest` #19391 → #19392, refreshed in lockstep at 07:59Z and 08:22Z, second PR title explicitly depends on first's deliverable). Extends synthesis #67's declared-vs-inferred framing from contributor `aibrahim-oai` (single repo, 1h14m intra-tick) to maintainer `bolinfest` (single repo, ~16h cross-tick). The declared-cohort pattern is **not author-class-bounded** — it appears in both contributor and maintainer cohorts.
3. **Cross-repo long-tail PR refresh wave in this window**: opencode #13854 (~68d), opencode #18767 (~33d), opencode #14468 (64d, refreshed prior tick), opencode #16525 (48d, refreshed prior tick), litellm #25896 (~8.6d), litellm #26052 (~6d), litellm #26189 (~3.5d), ollama #15726 (~4d). **Eight long-tail PRs refreshed across three repos in a ~75-minute span**. The synthesis #68 tri-modal framing for opencode now has cross-repo company: **multi-week long-tail PR refresh activity is not opencode-specific** — it is concurrent in litellm and ollama too. Anchor for **synthesis #70** below.
4. **Two opencode long-tail refreshes within 1 second of each other** (#18767 and #13854 at 07:54:14–07:54:15Z, two distinct authors). Suspicious-tight timing implies a single bot-driven mass-refresh action rather than two independent author keystrokes. If confirmed, this **would call into question the human-attribution of long-tail-PR refresh signals** that synthesis #68 / #70 rest on. Watch question for next tick: do refreshes cluster at second-precision across authors, or are they spread out?
5. **Zero merges in window across all 9 tracked repos.** Third consecutive zero-merge window (Addendums 10 had merges; 11 + 12 have none — actually Addendum 11 had zero, so this is **second consecutive zero-merge window**). Reviewer-absorption capacity remains at zero while long-tail-refresh volume is elevated.
6. **`yuneng-berri` cascade dormancy now ~1h44m** (last activity #26496 at 06:41Z; nothing in window). The synthesis #63/#64 hot-author cascade is exhibiting its longest pause yet in the calendar day. The Addendum 11 watch question (end-of-cascade vs mid-cascade pause) remains open; the longer the dormancy, the more "end-of-cascade" becomes the parsimonious read.
7. **ollama broke its ~6h silence** with #15808 (`famasoon`, Scheduler error-handling), and the older Scheduler-Windows PR #15726 (`UniquePratham`) refreshed within 9 minutes — **two-author ollama Scheduler-surface convergence** within the same 9-minute slice. ollama Scheduler is the active surface this window.

---

## Addendum 13 — Window 08:25Z → 08:42Z

### codex (openai/codex)

- **[openai/codex#19537]** — OPENED 08:25:26Z by `mzeng-openai` (`Matthew Zeng`), head SHA `fd8c33a5d66888324a0656ede3a440c3274c430d`. *"Add plugin MCP policy persistence."* New maintainer-class open on the codex MCP/plugin policy surface — adjacent to the `bolinfest` permissions-surface ordering pair (#19391/#19392) tracked in Addendum 12. **Two distinct OAI maintainers active on overlapping policy/permissions surfaces within a ~3-minute slice** (`bolinfest` last refresh 08:22Z, `mzeng-openai` open at 08:25Z).
- **[openai/codex#19524]** — refreshed 08:25:29Z by `aibrahim-oai` (`Ahmed Ibrahim`), head SHA `0bd757f52c477c6df1eaed853a3af0378d48c837`. *"[codex] Prune unused codex-mcp API and duplicate helpers."* MCP-surface cleanup PR. **Three codex MCP/policy-surface PRs active in the same 4-minute slice** (#19524 cleanup, #19537 policy persistence, #19392 permissions-followup): single-surface convergence by three distinct authors.

### litellm (BerriAI/litellm)

- Silent in window. The xAI/Grok cluster (#26189, #26052, #25896) anchored in synthesis #69 has no fourth refresh; `yuneng-berri` cascade dormancy now extends to ~2h01m (last activity #26496 at 06:41Z). The "end-of-cascade" reading from Addendum 12 strengthens.

### opencode (anomalyco/opencode)

- **[anomalyco/opencode#24250]** — refreshed 08:25:21Z by `knefenk` (`knef`), head SHA `eba2109877ec951716adaa859edc6baf3ca1bb7c`. *"fix(provider): complete DeepSeek reasoning_content round-trip for multi-turn conversations."* Same-day-opened PR (created 04:11:17Z, ~4h14m old at refresh) — **not** long-tail. DeepSeek provider reasoning-shape surface, structurally adjacent to synthesis #23 (reasoning-shape contract bidirectional). Author iteration cadence: open → push within ~4h.
- sst/opencode: silent in window.

### ollama (ollama/ollama)

- **[ollama/ollama#15809]** — OPENED 08:40:02Z by `stationeros` (`Rohit Kumar`), head SHA `e8de8d9e290ec24eeed17492f5640d5a68405ce2`. *"create: prune imported blobs and startup invalid leftovers."* Second new ollama open in ~24 minutes (#15808 at 08:16Z, #15809 at 08:40Z) — both touching create/Scheduler-adjacent surfaces, two distinct authors. **The 6h ollama-silence noted in Addendums 9–11 has fully broken**: ollama is now the most active surface in the past ~25 minutes.

### cline (cline/cline)

- **[cline/cline#10403]** — refreshed 08:30:15Z by `abliteration-ai`. *"feat: add Abliteration.ai provider."* Third refresh of the vendor-self-onboarding PR within ~65 minutes (07:25:36Z open → 07:47:37Z first iter → 08:30:15Z second iter). Sub-hourly self-iteration cadence on a vendor-onboarding PR — anchor for synthesis #71.

### crush / continue / OpenHands / aider / sst-opencode

- All silent in window. crush dormancy ~7h27m (last #2706 at 01:13Z). continue + litellm cross-project `FuturMix` coordination (#12220 / #26485) still has zero third leg, dormancy now ~7h+. OpenHands silent since #14130 at 07:03:54Z (~1h38m).

---

### What changed in window 08:25Z → 08:42Z (Addendum 13)

1. **Codex MCP/policy-surface three-author micro-convergence** (#19524 `aibrahim-oai` cleanup at 08:25:29Z, #19537 `mzeng-openai` policy-persistence at 08:25:26Z, #19392 `bolinfest` permissions-followup last refreshed 08:22Z in Addendum 12). Three distinct authors, three PRs, single MCP/policy/permissions surface family, all touched within a ~4-minute slice. **Two of the three are maintainer-class** (`mzeng-openai`, `bolinfest`) — distinguishing this from synthesis #49 (multi-author multi-shape PR cluster, contributor-mixed) and synthesis #67 (declared inter-PR ordering, single-author). This is **multi-author single-surface convergence at maintainer cadence** — anchor for synthesis #72.
2. **ollama new-open velocity inverted in 24 minutes**: from 6h-silent (Addendums 9–11) to two new opens by two distinct authors on adjacent surfaces (#15808 famasoon Scheduler error-handling, #15809 stationeros create-blob-prune). This is the fastest open-cadence acceleration observed on any tracked repo today. **ollama is now the velocity-leading repo** for the past ~25 minutes, displacing litellm (which has been silent ~2h).
3. **cline vendor-self-onboarding PR sub-hourly self-iteration**: #10403 (abliteration-ai) opened 07:25:36Z, refreshed 07:47:37Z (Addendum 11) and 08:30:15Z (this window). Three states in ~65 minutes by a single vendor-self account on its own onboarding PR. Cadence is **sub-30-minute median** between iterations on a self-promotional PR with zero maintainer interaction so far. Anchor for synthesis #71 (vendor-self-onboarding self-iteration cadence as distinct signal class).
4. **opencode same-day-opened PR refresh** (#24250 knefenk DeepSeek reasoning round-trip, ~4h14m from open to first push). This is the **only opencode activity in window that is NOT long-tail** — breaking the long-tail-dominance pattern of Addendums 11+12 (which anchored synthesis #70). Suggests the long-tail refresh wave may have ended; same-day-iteration cadence is reasserting on opencode.
5. **Zero merges in window across all 9 tracked repos.** **Third consecutive zero-merge window** (Addendums 11, 12, 13). Reviewer-absorption capacity has now been at zero for ~91 continuous minutes while open-velocity is rising (3 new opens in window 08:16Z–08:40Z across codex+ollama). The **open-vs-merge gap is widening** in real time.
6. **Cross-repo author overlap check (negative)**: of all authors active in window (`mzeng-openai`, `aibrahim-oai`, `knefenk`, `stationeros`, `abliteration-ai`), zero appear in more than one tracked repo this tick. Synthesis #63's hot-author multi-surface fanout pattern is **absent** in this window. The cross-repo coupling observed in synthesis #70 (long-tail refresh wave) was **timing-only, not author-overlap** — confirmed again here.
7. **`yuneng-berri` cascade now ~2h01m dormant**. Crossing the 2-hour threshold makes "end-of-cascade" the strongly-preferred read over "mid-cascade pause" — synthesis #63/#64 cascade has effectively terminated.

---

## Addendum 14 — Window 08:42Z → 09:06Z

### codex (openai/codex)

- Silent in window. The MCP/policy/permissions surface convergence anchored in **synthesis #72** (#19392 `bolinfest`, #19524 `aibrahim-oai`, #19537 `mzeng-openai`) has had **zero follow-up activity** in the ~40m since the 08:25:29Z cluster. Per synthesis #72's prediction ("the next codex MCP/policy/permissions PR opened by either `mzeng-openai` or `bolinfest` will see a contributor-class follow-up within 30 minutes") — the 30-minute prediction window has now elapsed without a follow-up. **Synthesis #72 prediction #2 is on track to falsify** if no codex MCP-surface activity appears by ~10:00Z.

### litellm (BerriAI/litellm)

- Silent in window. `yuneng-berri` cascade dormancy now ~2h25m (last activity #26496 at 06:41Z). The "end-of-cascade" reading from Addendum 13 is now structurally confirmed at the >2h threshold. The xAI/Grok refresh cluster (#26189, #26052, #25896) anchored in **synthesis #69** has had no fourth refresh — the 11-minute convergence at 08:10–08:14Z stands as a closed event.

### opencode (anomalyco/opencode)

- **[anomalyco/opencode#24271]** — OPENED 08:44:54Z, refreshed 09:01:59Z by `wangzexi` (`Zexi`), head SHA `831bf6b2ac88`. *"Set active server before navigation and use replace navigation to avoid extra history entries."* Server/navigation-surface fix. **First open in window**, ~17m from open to first push (rapid self-iteration cadence consistent with synthesis #71 vendor-self template, but here on a non-vendor PR by an individual contributor).
- **[anomalyco/opencode#24272]** — OPENED 08:54:17Z, refreshed 09:00:50Z by `kyuna0312`, head SHA `d4aa1133f1a5`. *"docs: add Mongolian README documentation."* i18n docs PR. ~6.5m from open to first push.
- **[anomalyco/opencode#24273]** — OPENED 08:57:08Z by `JasonZhaoWW` (`Jason`), head SHA `ee1c397e7be0`. *"docs: correct compaction prune default."* Docs-only correction PR. Still at HEAD-of-open (no refresh).
- **Three opencode opens by three distinct authors within a ~12-minute slice** (08:44:54Z → 08:57:08Z), all of which are non-feature surfaces (docs ×2, navigation fix ×1). **Two of three are docs-class PRs** (#24272 i18n, #24273 docs correction). This is the **first observed docs-cluster convergence in opencode in this corpus**: prior multi-author opencode convergences (synthesis #66 self-close, #68 merge-velocity tri-modal) were on feature/provider surfaces. Anchor for **synthesis #73**.
- **[anomalyco/opencode#24250]** — no activity in window. Last refreshed 08:25:21Z (Addendum 13). DeepSeek reasoning-shape PR by `knefenk` is now at ~41m dormancy after its previous ~4h14m self-iteration cadence.

### ollama (ollama/ollama)

- **[ollama/ollama#15809]** — refreshed 08:42:56Z by `stationeros` (`Rohit Kumar`), head SHA `e8de8d9e290e`. *"create: prune imported blobs and startup invalid leftovers."* First push since the 08:40:02Z open — **~2m54s from open to first iteration**. Sub-3-minute self-iteration on the create/prune surface. The ollama Scheduler-adjacent surface remains the velocity-leading repo in calendar terms (#15808 famasoon at 08:16Z, #15809 stationeros at 08:40Z + 08:42Z, three states across two PRs in 26 minutes).
- **[ollama/ollama#15808]** — no activity in window. Last refreshed 08:16:22Z (~50m dormant). The two-author Scheduler-surface convergence noted in Addendum 12 is **not extending** — #15808 has stalled while #15809 is iterating.

### cline / crush / continue / OpenHands / aider / sst-opencode

- **cline/cline#10403** (`abliteration-ai` vendor-self-onboarding) — no activity in window. Last refresh 08:30:15Z. The sub-30m self-iteration cadence anchored in **synthesis #71** (07:25Z open → 07:47Z → 08:30Z, ~22m and ~43m intervals) has now stretched to **~36m+ since the most recent push** — consistent with median, but the cadence is decelerating from the early 22m delta.
- **crush**: silent. Dormancy now ~7h53m (last #2706 at 01:13Z).
- **continue**: silent. The cross-project `FuturMix` provider broadcast (continue #12220 + litellm #26485) dormancy now ~7h30m on both legs. Synthesis-tracked "abandoned dual-PR coordination" reading hardens further.
- **OpenHands**: silent. Last activity #14130 (dependabot pypdf) at 07:03:54Z (~2h dormant).
- **aider / sst-opencode**: no events.

---

### What changed in window 08:42Z → 09:06Z (Addendum 14)

1. **opencode three-author docs-class convergence** (#24271 wangzexi navigation 08:44:54Z, #24272 kyuna0312 i18n-docs 08:54:17Z, #24273 JasonZhaoWW docs-correction 08:57:08Z). Three distinct authors, three new opens, ~12m window, **two of three on docs surface**. Structurally distinct from prior opencode multi-author signals (#66, #68 — both on feature/provider surfaces). Anchor for **synthesis #73**.
2. **Cross-repo open-cadence shift**: opencode is now the only repo with new opens in window (3 opens). codex, litellm, ollama, cline, crush, continue, OpenHands all silent on opens. The open-velocity baton has handed from ollama (Addendum 13: 2 new opens) to opencode (Addendum 14: 3 new opens). **The three-windows trace ollama → ollama → opencode is the first observed open-velocity-leadership rotation** across consecutive 20–25m ticks today — anchor for **synthesis #74**.
3. **First merge-window in 4 consecutive ticks**: still **zero merges** across all 9 tracked repos in window. **Fourth consecutive zero-merge window** (Addendums 11, 12, 13, 14 — total ~115 continuous minutes of zero merge-absorption while opens have continued accumulating). The open-vs-merge gap in the last ~2h is **5 new opens, 0 merges** across tracked repos.
4. **Synthesis #72 prediction #2 status**: the predicted "contributor-class follow-up within 30 minutes" of the codex MCP-surface convergence has not materialized. 30-minute deadline elapsed at ~08:55Z. Marking as **soft-falsified** pending a wider 24h check; the strong "internal coordination work-stream" reading is now weakened.
5. **Synthesis #71 cadence-deceleration check**: cline #10403 self-iteration deltas were 22m → 43m → now ~36m+ (no new push in window). Cadence is **decelerating** from the early sub-30m median noted in synthesis #71. If next push exceeds 60m delta, the "sub-hourly" framing of synthesis #71 will need revision.
6. **`yuneng-berri` cascade crosses 2h25m dormancy threshold**. Synthesis #63/#64 hot-author cascade is now structurally terminated by any reasonable definition (>2h continuous silence after a previously sub-hourly cadence).
7. **Cross-repo author-overlap check (negative again)**: of the four authors active in window (`wangzexi`, `kyuna0312`, `JasonZhaoWW`, `stationeros`), zero appear in more than one tracked repo this tick — also zero overlap with the prior window's active set (`mzeng-openai`, `aibrahim-oai`, `knefenk`, `abliteration-ai`). **Two consecutive ticks with full author-set turnover** — reinforces the synthesis #70 finding that cross-repo coupling is timing-only, not author-overlap.
8. **Docs-PR surge as a possible new signal class**: two docs-only opencode PRs in 3 minutes (#24272 i18n, #24273 prune-default correction) is itself unusual — opencode docs PRs typically appear at sub-daily cadence. Possible drivers: (a) downstream of the v1.14.24 release (2026-04-24T15:53Z), users surfacing doc gaps; (b) coincidence. Watch for further docs-class opens in next tick.
