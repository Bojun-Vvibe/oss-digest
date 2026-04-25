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

