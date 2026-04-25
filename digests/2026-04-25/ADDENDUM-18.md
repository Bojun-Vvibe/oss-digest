# 2026-04-25 — Addendum 18

**Window:** 11:35Z → 12:05Z (continuation from Addendum 17, which closed at 11:35Z).

A short 30-minute window, but structurally rich: two **fresh opens** in repos that produced zero in Addendum 17 (continue, cline), three **same-PR second-iteration refreshes** of PRs that were themselves freshly opened in Addendum 17 (opencode #24290 / #24289, litellm #26500), and one **cross-repo same-author vendor self-onboarding** signal (`FuturMix` opens continue #10406 21h after opening OpenHands #12220 on the same surface).

## opencode (anomalyco/opencode)

- **[anomalyco/opencode#24290]** — refreshed 12:04:44Z by `herjarsa` (`Hernan Javier Ardila Sanchez`), head SHA `25cdb8f9e06f` (head unchanged from initial open per metadata). *"fix(session): skip tool calls during summary instead of throwing."* This is the **second touch** on a PR opened just 31 minutes earlier (11:33:47Z, see Addendum 17). First-iteration cadence: open → refresh ≈ **31 minutes**. Same author, same surface, no maintainer interaction in window. Pure intra-author iteration.
- **[anomalyco/opencode#24289]** — refreshed 11:46:44Z by `menardorama` (`Thomas Menard`), head SHA `af4461804e89`. *"fix: Repair truncated JSON tool inputs in LLM session."* Second touch on a PR opened 11:17:01Z. First-iteration cadence: **29m43s**. **Two opencode PRs by two distinct authors, both opened in Addendum 17, both refreshed within ~30 minutes by the same authors, both still on the "tool-call defensive handling" surface family.** The "open then refresh ~30min later" cadence shape is *consistent across authors* — anchor for synthesis #81's iteration-cadence side-observation.
- No new opens in the window for opencode; no closes; the deep long-tail wave from Addendum 17 (#13854 / #18767 / #12822 / #15603 / #14573) has gone fully quiet — none of those five aged PRs was touched again in this window. The wave exhausted itself in a single 38-minute burst, did not produce any rebound.

## litellm (BerriAI/litellm)

- **[BerriAI/litellm#26500]** — refreshed 11:54:59Z by `jayy-77` (`Jay Prajapati`), head SHA `bad1be432fc3` (changed from `f9f94d43ef7b` in Addendum 17 — actual SHA-changing push, not just an updatedAt bump). *"[Fix] Wrap extra_body for JSON-configured OpenAI-compatible providers."* This is the **third touch** on a PR opened 10:55:26Z. Cadence: open → first refresh **9m40s** (Addendum 17) → second refresh **49m53s later**. The triplet shape (open, fast first iteration ~10min, slower second iteration ~50min) inverts the typical "fast-first-then-slowing" decay — first iteration was *faster* than the second by ~5×. Likely interpretation: first push was a typo/CI-fix; second push is a substantive content revision after maintainer or self review.
- No other litellm activity in window. The `kiyeonjeon21` budget triplet remains quiet (third consecutive tick of zero follow-up). The `yuneng-berri` permission-checks pair (#26492 / #26493 — both merged earlier today 06:05Z / 06:40Z) has not produced follow-up either.

## continuedev/continue

- **[continuedev/continue#10406]** — OPENED 11:54:45Z, refreshed 11:56:35Z by `FuturMix`. *"docs: Add FuturMix AI Gateway setup guide."* Open → first iteration **1m50s**. Surface family: docs / vendor-self-onboarding. **Critical cross-repo signal:** the same author opened **OpenHands#12220** (*"feat: add FuturMix as a model provider"*) on 2026-04-24 15:32:04Z. Two repos, same vendor self-onboarding intent, **21h22m apart**, vendor-shaped account name. Fresh open in continue is the *docs* counterpart to the OpenHands *feat* — same vendor running the same playbook across two different agent stacks. **Anchor for synthesis #81.**
- **[continuedev/continue#10404]** — refreshed 12:11:01Z by `gerryqi` (`Gerry Qi`). *"feat(deepseek): deepseek-v4-pro supports reasoning effort control."* Created 2026-04-25T10:06:32Z. **Second refresh of the day** (first was Addendum 17 at 10:42:57Z). Cadence: open → first refresh **36m25s** → second refresh **1h28m04s later**. Same author also has open PR **#10401** (*"feat(deepseek): Add deepseek-v4-flash、deepseek-v4-pro support"*, opened 05:13:49Z) — a single-author **declared multi-PR sequence** on deepseek-v4 surface (#10401 = base support, #10404 = reasoning-effort extension). Mirrors synthesis #67 (declared vs inferred multi-pr sequences).

## cline (cline/cline)

- **[cline/cline#14132]** — OPENED 11:35:40Z, refreshed 11:41:38Z by `Jerry2003826` (`JerryLee`). *"fix: support pagination for branch search."* Open → first iteration **5m58s**. Surface: GitHub integration / branch-listing pagination. **Duplicate-PR signal:** the same surface and same micro-feature was opened earlier today as **cline#14128** (*"Support pagination for branch search"*) by `fungi8` (`Jon Wang`) at 05:19:54Z — **two distinct authors filing functionally identical PRs ~6h16m apart, no cross-reference between the two PRs** (neither title nor description acknowledges the other in the data we have). This is a **collision-by-independent-discovery** pattern: two contributors hit the same "branch search needs pagination" gap and filed independently. Anchor for **synthesis #82**.
- No closes / merges in cline in window. Two dependabot PRs (#14130 / #14131) untouched.

## ollama / OpenHands / browser-use / codex

- **No PR activity in window** for any of: ollama (post-#15811 by `LukeLamb`), OpenHands (last activity yesterday — `neubig` #14124 / #14126), browser-use (post-#4741 by `GopalGB`), or codex. **Codex now four consecutive ticks below baseline** — `mzeng-openai` #19537 (mcp policy persistence) and `aibrahim-oai` #19524 / #19526 (mcp ordering / pruning) have not been touched since Addendum 16. Codex velocity baton remains externally held.

## Cross-repo cohort — fresh-open momentum split

In a 30-minute window with three **fresh opens** (continue #10406, cline #14132; opencode produced none), the fresh-open momentum has rotated *away* from opencode (which dominated Addendums 15–17) and into mid-velocity repos that were quiet through the prior window. Opencode's two PRs in this window are both *iteration on existing opens*, not new opens — first window today opencode produced zero new PRs.

| Repo | Fresh opens | Same-PR refreshes | Pattern |
|---|---|---|---|
| opencode | 0 | 2 (#24289, #24290) | self-iteration only |
| litellm | 0 | 1 (#26500) | self-iteration only |
| continue | 1 (#10406) | 1 (#10404) | mixed |
| cline | 1 (#14132) | 0 | fresh-only |

The **velocity-leadership rotation** observed in synthesis #74 (ollama → opencode across consecutive ticks) repeats here, this time as **opencode → continue+cline** at the fresh-open layer. Opencode retains *iteration* dominance but loses *fresh-open* dominance for the first time in three ticks.

## Cross-repo cohort — same-author vendor self-onboarding (FuturMix)

`FuturMix` (vendor-shaped account, no display name set) is filing provider PRs across:

| Repo | PR | Opened | Surface | Type |
|---|---|---|---|---|
| OpenHands | #12220 | 2026-04-24T15:32:04Z | "add FuturMix as a model provider" | feat |
| continue | #10406 | 2026-04-25T11:54:45Z | "Add FuturMix AI Gateway setup guide" | docs |

Single vendor-account author, two unrelated repos, **21h22m apart**, ordered as feat→docs (the canonical vendor self-onboarding sequence: ship the integration code first, then the docs). Distinct from synthesis #71 (vendor self-onboarding *intra-repo* sub-hourly self-iteration) — this is the **cross-repo, multi-repo-day-spanning version** of vendor self-onboarding. Anchor for **synthesis #81**.

---

**Tick metrics:** 0 fresh opencode (2 same-PR refreshes #24289/#24290), 0 fresh litellm (1 SHA-changing refresh #26500), 1 fresh continue (#10406) + 1 refresh continue (#10404), 1 fresh cline (#14132), 0 ollama / OpenHands / browser-use / codex. Total 5 PR events in 30 minutes across 4 repos.
