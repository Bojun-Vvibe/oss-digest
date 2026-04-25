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
