# oss-digest cumulative INSIGHTS — 60-day window

**Window:** 2026-02-23 → 2026-04-23 (60 days, ISO weeks W09–W17)
**Repos tracked (8):** anomalyco/opencode, BerriAI/litellm, modelcontextprotocol/servers, openai/codex, OpenHands/OpenHands, cline/cline, Aider-AI/aider, charmbracelet/crush

This file is a hand-edited synthesis of the nine weekly digests in [`digests/_weekly/`](./digests/_weekly/). It is **not** auto-generated — see `scripts/weekly.mjs` for per-week LLM summaries; this layer is opinionated narrative on top of those.

---

## TL;DR — five trends that ran the whole 60 days

1. **MCP went from "interesting protocol" to load-bearing infrastructure — and the official server registry became its bottleneck.** Across all 9 weeks, `modelcontextprotocol/servers` was the slowest-moving repo in the cohort. Merge throughput stayed near zero while the open queue grew from ~10 PRs (W09) to **151 open PRs by W17**. New community-server submissions arrived in floods (34 in W15 alone; the Brazilian payments bundle proposing 37 servers at once), and almost none merged. The maintainer response was structural: the third-party server list was retired in favor of the [MCP Registry](https://modelcontextprotocol.io) in W16 ([modelcontextprotocol/servers#3950]). Meanwhile every downstream agent paid down MCP rough edges in parallel — Crush did Docker MCP integration (W12 #2026), then a 98% tool-description token diet (W17 #2679); Codex shipped MCP Apps part 3 (W15 #17364), HTTP client executor (W17 #18582–#18583), and stdio cwd fallback (W17 #19031); LiteLLM added MCP namespacing (W14 #25085), PKCE-on-401 (W16 #26032), MCP toolsets + GCP caching (W14 #25146). The signal: the protocol won, the registry is the constraint.

2. **"Skills" became the first-class extension primitive across at least four codebases.** This was the single most consistent cross-repo convergence of the window. W09 already had Codex's `skill disable` respecting config layers ([openai/codex#13027]) and Cline shipping skills + per-subagent `modelId`. By W13, Crush 0.52.0 lands `.crush/skills` for repo-checked-in skills ([charmbracelet/crush#2478]). W14 sees Crush 0.55.0 ship built-in skills with a `crush-config` skill bundled and per-skill disabling ([charmbracelet/crush#2466]); Codex adds subagent analytics ([openai/codex#15915]); OpenHands fixes a paginated-skills cursor bug ([#13743]) and works on surfacing skill-loader failures upstream ([#13782, #13783]). W16 adds remote `globalSkills` in Cline ([cline/cline#10236, #10283]) and skills in Crush's sidebar ([charmbracelet/crush#2384]). W17 closes with enterprise-managed `globalSkills` in Cline 3.80.0 ([cline/cline#10355]). "Skills" is now the answer four independent teams settled on for *how does the agent know what tools/policies it has*.

3. **Sandboxing and approval policy got rewritten from the inside out, primarily inside Codex.** This is a multi-week arc, not a single release. W10 brings @bolinfest's eight-PR sandbox split-policy series ([openai/codex#13439–#13453]) reworking how filesystem policies are plumbed through Linux/seatbelt/`apply_patch`, plus a "guardian approval" MVP ([#13692]) and the curated plugin marketplace ([#13712]). W11 lands Smart Approvals proper ([#13860]) and propagates sandbox policies into spawned subagents ([#14650]) with persisted network-host approvals ([#14619]). W14 fixes a macOS sandbox panic ([#16670]) and adds `CODEX_SKIP_VENDORED_BWRAP` ([#16763]). W16 ships Windows sandbox ACL fixes ([#18443, #18493]). W17 finally lands the **permission-profile overhaul end-to-end** ([openai/codex#18282 → #18283 → #18893]) and promotes both `codex_hooks` and "auto-review" to stable in 0.123.0. The trajectory is clear: from raw capability → governed capability → declarative permission profiles, all in 60 days.

4. **The agent runtimes grew SaaS bones — multi-tenant, addressable, and increasingly server/client split.** Three independent codebases moved on this. (a) **Codex** moved its TUI onto an embedded app-server (W11 #14512), switched multi-agent identifiers from UUIDs to a path-like address space (W12 #15313), split ExecServer into local and remote (W12 #15232), and added queued slash/shell prompts and prewarmed-per-thread tasks (W16 #18542, #17978). (b) **Crush** merged a long-running server-client architecture refactor in W14 ([charmbracelet/crush#2455]) closing original [#1110], giving it a real API surface, then added CLI session management and `Orchestra` discussion (W11 #2373). (c) **OpenHands** ran the **APP-1197 V0→V1 endpoint migration** for ~12 weeks running — settings, git providers, secrets, conversation feedback/config/trajectory, `/api/options/*`, `/api/user/*`, microagents, conversation creation, suggestions pagination, `getUser`, conversation list — culminating in W17 with @tofarr's V0 sweep deleting `sessions`, `critic`, `linter`, `security`, and `conversation_manager` packages outright ([OpenHands/OpenHands#14061, #14056, #14055, #14054]). On the platform side, **LiteLLM** added per-team / per-model rate limits (W14 #25144), per-team-member spend tracking (W17 #26195), org-admin scoped management (W10 #23080-area), Azure Entra ID auth (W14 #25137), and adaptive routing committed straight to main (W16 @924fa6a, W17 #26049). All of these together are the unmistakable shape of "agent runtime as multi-tenant product."

5. **Day-zero model support is now table stakes — and it's mostly invisible.** Three model launches landed in the window (GPT-5.3 Codex in W09, GPT-5.4 family in W10, Claude Opus 4.7 in W16) and in all three cases multiple agents had support shipped within hours. W09: Crush v0.45.0 + Cline #9533 + 100-commit Codex hardening surge, all within a day of the OpenAI release. W10: Cline v3.71.0 with 5.4 + Crush v0.47.2 with 5.4 and 5.4 Pro on the same day. W12: Crush v0.50.1 same-day for 5.4 Mini/Nano. W16: Cline v3.79.0 first-class Opus 4.7 + opencode v1.4.9/v1.4.17 capping reasoning effort and defaulting to `display: summarized` for Bedrock Opus 4.7. The mechanism is now invisible plumbing in LiteLLM, Aider's pricing data, and per-model adapter shims. The competitive surface has moved entirely off "do you support model X" and onto sandboxing, skills, and orchestration.

---

## Activity heatmap (per-week aggregate, all 8 repos)

| Week | Window | Highlight |
|------|--------|-----------|
| W09 | 02-23 → 03-01 | GPT-5.3 Codex day-zero across the cohort; opencode remote workspaces start |
| W10 | 03-02 → 03-08 | GPT-5.4 cross-repo; Codex sandbox split-policy + guardian MVP; agent-ops at LiteLLM |
| W11 | 03-09 → 03-15 | Codex Smart Approvals + multi-agent stable; OpenHands 1.5.0 task list panel |
| W12 | 03-16 → 03-22 | Crush v0.51.0 native Docker MCP; Codex plugin marketplace + multi-agent path addressing |
| W13 | 03-23 → 03-29 | Cline 3.76.0 Kanban-by-default; Codex `codex-tools` crate extraction |
| W14 | 03-30 → 04-05 | Skills as primitive solidifies (Crush 0.55.0 #2466); OpenHands V1 epic in flight |
| W15 | 04-06 → 04-12 | MCP submission flood (34 PRs / 1 merge); OpenHands V1 rip-out wave |
| W16 | 04-13 → 04-19 | Codex marketplace + `/side` + macOS Intel/Windows; Opus 4.7 cohort rollout |
| W17 | 04-20 → 04-23 | Codex permission-profile overhaul + hooks/auto-review stable; Crush 98% tool-prompt diet |

Per-week tables and counts live in `digests/_weekly/2026-W*.md`.

---

## Per-repo 60-day character

- **anomalyco/opencode** — Highest per-day TUI/UX velocity in the cohort. Spent the window mid-refactor onto Effect (Pty, ToolRegistry, Plugin, Command, SessionStatus services all "effectified" in W12). Quietly shipped remote workspaces (W09 #15120, #15409, #15410), restored native ripgrep (W16 #22773), added GitLab Agent Platform provider (W12 #18014), and capped Bedrock and managed-provider Opus 4.7 reasoning effort. v1.x cadence: 30+ minor bumps in 60 days.
- **BerriAI/litellm** — The most product-shaped of the cohort. Per-agent budgets and health checks (W10 #22849, #23044), per-team per-model rate limits (W14 #25144), Azure Entra ID auth (W14 #25137), `sk-` key hashing in spend logs (W15 #25592), and the new **adaptive routing** layer landing direct-to-main (W16 #924fa6a, W17 #26049). Test/CI hygiene was the silent majority of merges.
- **modelcontextprotocol/servers** — The bottleneck. Open queue grew from ~10 → 151 PRs. Real fixes that did land: SQLite SQL-injection fix (W14 #3663), git argument-injection guards (W11 #3545), Windows path normalization (W12 #3434, partial). The third-party server list retired W16 (#3950) in favor of the MCP Registry — the most consequential governance change of the cohort.
- **openai/codex** — Highest *architectural* throughput. Sandbox rewrite (W10), Smart Approvals + multi-agent stable (W11), plugin marketplace + path addressing + ExecServer split (W12), `codex-tools` crate extraction (W13), MCP Apps part 3 (W15), `/side` conversations + Windows ACLs + macOS Intel build (W16), permission profiles + hooks-in-config + `amazon-bedrock` + `/mcp verbose` stable in 0.123.0 (W17). Removed voice transcription (W13 #16114) — counter-trend from W09's 4o-ASR alignment.
- **OpenHands/OpenHands** — The migration-heavy repo. APP-1197 V0→V1 epic ran W14 → W17, ending with @tofarr deleting V0 `sessions`/`critic`/`linter`/`security`/`conversation_manager` packages and a parallel @malhotra5 SQLAlchemy 2.0 `mapped_column` migration. Security hygiene was relentless: cryptography, werkzeug, python-socketio, pillow, fastmcp (CVE-2025-64340), poetry (CVE-2026-34591), pypdf (GHSA-jj6c-8h6c-hppx), axios pin (W15 supply-chain), redactions for `session_api_key` and MCP secrets in logs. Shipped `/btw` mid-task interjection (W16 #13918) the same week as Codex `/side`.
- **cline/cline** — Most aggressive UX repositioning. v3.76.0 made Kanban the default (W13), v3.77.0 added Lazy Teammate Mode (W14), v3.79.0 first-class Opus 4.7 + Azure Blob backing store + remote `globalSkills` (W16), v3.80.0 enterprise-managed `globalSkills` (W17). Hooks became the extension primitive: `--auto-condense`, `--auto-approve-all`, `--hooks-dir`, Notification hook (W10). Aikido autofix bots are now visible in the PR queue.
- **Aider-AI/aider** — The quiet outlier. Multiple weeks with zero merges. Paul Gauthier's commit pattern is small, surgical, mostly model-pricing and prompt tuning. The Qodo AntiSlop scan in W14 (#4989) flagged 20 issues across 10 recent PRs. An architect-mode prompt-injection report ([Aider-AI/aider#5058]) sits unmerged at end of window with a candidate fix at #5065. Backlog is real.
- **charmbracelet/crush** — Most disciplined release cadence (v0.45.0 → v0.62.0 across the window, ~17 minor cuts). Built-in skills (W14 #2466), `.crush/skills` for repo-shared skills (W13 #2478), Docker MCP integration (W12 #2026), server-client split (W14 #2455), and an aggressive **98% tool-description token diet** in v0.62.0 (W17 #2679) — that one is the most copyable artifact in the cohort.

---

## Convergence map — same idea showing up in ≥3 repos

| Idea | Codex | Crush | Cline | OpenHands | opencode | LiteLLM |
|------|:-----:|:-----:|:-----:|:---------:|:--------:|:-------:|
| Skills as primitive | ✓ (W09, W14) | ✓ (W13, W14, W16) | ✓ (W09, W16, W17) | ✓ (W14) | – | – |
| Server/client split | ✓ (W11) | ✓ (W14) | – | ✓ (V0→V1 epic) | – | – |
| Multi-agent / orchestration | ✓ (W11 stable) | ✓ (Orchestra, W11) | – | – | – | – |
| Mid-task interrupt channel | ✓ (`/side`, W16) | – | – | ✓ (`/btw`, W16) | – | – |
| Sandbox / permission profiles | ✓ (W10–W17) | ✓ (read caps, env exports) | – | – | – | – |
| Adaptive / governed routing | – | – | – | – | – | ✓ (W16, W17) |
| Day-zero model support | ✓ | ✓ | ✓ | – | ✓ | ✓ |
| MCP server-list churn / retirement | – | ✓ Docker | – | – | – | ✓ namespacing |

---

## What's notably *missing*

- **No agent in the cohort shipped a credible eval/regression-testing surface** for skills or hooks in 60 days. The closest is Codex's subagent analytics (W14 #15915) and LiteLLM's agent health checks (W10 #23044). The "ops" half of agent-ops is still ahead of the "QA" half.
- **No standardized skill-distribution format** emerged. Crush has `.crush/skills`, Cline has remote `globalSkills`, Codex has its own marketplace, OpenHands has microagents. Same primitive, four incompatible shapes — likely the next convergence target.
- **Aider's open-source backlog** (uncaught exceptions on Windows codepages, AntiSlop scan findings, prompt-injection report) suggests the project is becoming maintenance-mode within this cohort.

---

## How to read this corpus

1. Start with the per-week summary at `digests/_weekly/2026-W##.md` — each ends with a "What to actually read" section pointing at the 2–3 PRs/issues that matter.
2. For per-repo per-day depth, see `digests/YYYY-MM-DD/<owner>-<repo>.md`.
3. For aggregated-by-day cross-repo view, see `digests/YYYY-MM-DD/INDEX.md`.
4. Raw GitHub API responses for replay/audit are cached under `cache/YYYY-MM-DD/`.

---

_Hand-written synthesis on top of `scripts/weekly.mjs` LLM output; revise as the corpus grows._
