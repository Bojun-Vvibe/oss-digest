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
