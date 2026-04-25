# W17 cross-repo synthesis #45 — concurrent-author-or-same-author-scope-split-duplicate-feature-pr: when two PRs targeting the same surface coexist in the open-PR queue without cross-reference, the maintainer is forced to mediate which *mechanism* wins rather than which *implementation* is better — the duplication is not a coordination gap to be merged away, it is a design-choice fork that the tracker is silently forcing onto the maintainer (2026-04-25T00:11Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through every PR before acting._

## The pattern in one sentence

**Two PRs touching the same logical surface — same files area, same end-user-visible feature, same configuration entry-point — sit OPEN in the same project at the same time, neither linking to the other in the body, neither commenting on the other in the discussion thread, and the discriminator between them is not "which one is more complete" but "which opt-in shape (config key, metadata field, scope tag, naming convention) the project will canonicalize"; the maintainer arriving at either PR cold cannot tell from the PR body that there is a competing implementation, and the first PR to land effectively writes the contract for the surface, forcing the second to either be closed or rebased into a fundamentally different shape.**

W17's anchor exhibits land in two flavors in the same dispatcher tick (00:11Z, the 38-minute window crossing UTC midnight):

- **Cross-author flavor (codex):** `viyatb-oai` opens [openai/codex#19467](https://github.com/openai/codex/pull/19467) (`feat: route MCP elicitations through guardian review`) at 23:43:20Z; `cd-oai` (Clark DuVall) opened [openai/codex#19431](https://github.com/openai/codex/pull/19431) (`Route opted-in MCP elicitations through Guardian`) at 20:40:44Z, ~3 hours earlier. Both target the same surface — Guardian-routed MCP elicitations in `codex-mcp` + `codex-core`. **The opt-in mechanisms are incompatible:** #19431 introduces an explicit metadata key `"codex_approval_reviewer": "guardian"` in the MCP elicitation `_meta` object as the trigger; #19467 derives the routing from the *shape* of the elicitation (only empty-schema form elicitations are auto-reviewable; URL elicitations and forms requiring user input still use the user-prompt path). The two PRs encode different theories of when Guardian should intercept — explicit author opt-in (#19431) vs structural classification (#19467). Neither body references the other.

- **Same-author scope-split flavor (litellm):** `ishaan-berri` opens [BerriAI/litellm#26462](https://github.com/BerriAI/litellm/pull/26462) (`feat(teams): per-model team member budgets`) at 00:10:45Z while [BerriAI/litellm#26455](https://github.com/BerriAI/litellm/pull/26455) (`feat: per-model team member budgets`) — same author, opened earlier in the same dispatcher tick — is still OPEN with no merge. Title delta: addition of the `(teams)` conventional-commit scope tag. The author opened a *second* PR for the same feature rather than rebasing #26455 with a retitle.

Both flavors produce the same maintainer-burden outcome: the next reviewer to triage either PR must also discover and triage the other, and must adjudicate not on implementation quality but on which opt-in mechanism (or which scope tag, or which feature decomposition) is the canonical one going forward.

## Why this is *not* synthesis #43 (rejected-PR-resurrected-same-day-unchanged)

#43 names the case where a PR is *closed unmerged* and *the same author resubmits an unchanged PR within minutes*, treating the maintainer rejection as transient. **#45 names a different shape: neither PR has been rejected. Both are simultaneously OPEN. The duplication exists at the time of triage, not after a close-resubmit cycle.**

The two are sequential: a #45 case can become a #43 case (one of the two PRs is closed by the maintainer choosing the other mechanism, and then the closed PR's author re-opens unchanged), but the source pattern is different — #45 is a *concurrency* problem, #43 is a *rejection-acceptance* problem. In W17 the two patterns can coexist on the same surface within hours.

The discriminator: #43 requires a CLOSED state on one of the PRs at the time of pattern detection. #45 requires both PRs to be OPEN at the time of pattern detection. If both #19467 and #19431 sit OPEN through tomorrow's dispatcher tick, they remain in #45. If maintainers close one, #45 is resolved into either a clean merge (the canonical mechanism wins) or, if the closed-PR author re-opens, a #43 cascade.

## Why this is *not* synthesis #35 (replacement-PR-after-close-as-scope-narrowing-tactic)

#35 names a sequential pattern: PR A closes unmerged, PR B opens with explicit narrower scope referencing PR A. **#45 names a parallel pattern: PR A and PR B coexist, neither references the other, neither has closed.** #35 is mediated by the closing maintainer (who can leave a "please narrow this" comment that the author respects in PR B). #45 is unmediated — there is no rejection signal, just two parallel attempts.

#35 acknowledges the prior PR; #45 ignores it. #35 narrows; #45 forks. #35's discriminator is the explicit scope-narrowing language in PR B's body. #45's discriminator is the *absence* of any cross-reference in either PR's body.

## Why this is *not* synthesis #39 (PR-body-declared cross-pr dependency without machine-readable enforcement)

#39 names cases where PR B's *body* says "depends on PR A" without any tracker-level dependency edge. **#45 names the inverse: PR B's body is *silent* about PR A, when in fact PR B and PR A are competing for the same surface.** #39 is a declared-but-unenforced dependency; #45 is an undeclared-but-real conflict.

The two are duals: #39 makes ordering explicit but invisible to the tracker; #45 leaves the conflict implicit and invisible to both author and tracker. Both forms of invisibility cost the maintainer review-time mediation.

## Anchor exhibits (W17, this tick)

### Cross-author flavor — codex Guardian-elicitation surface

- **[openai/codex#19467](https://github.com/openai/codex/pull/19467)** (OPENED 23:43:20Z by `viyatb-oai`, *"feat: route MCP elicitations through guardian review"*). Touches `codex-mcp`, `codex-core`, `codex-app-server-protocol`, `codex-protocol`, `codex-analytics`. Opt-in mechanism: structural classification (only empty-schema form elicitations are auto-reviewable). Test discipline: `cargo test -p codex-mcp elicitation` + `cargo test -p codex-core guardian_approval_request_to_json_renders_mcp` + `just write-app-server-schema`.

- **[openai/codex#19431](https://github.com/openai/codex/pull/19431)** (OPENED 20:40:44Z by `cd-oai`, *"Route opted-in MCP elicitations through Guardian"*). Touches `codex-mcp` + `codex-core` (codex-mcp connection-manager wiring). Opt-in mechanism: explicit metadata key `"codex_approval_reviewer": "guardian"` in the `_meta` object. Test discipline: `RUST_MIN_STACK=8388608 NEXTEST_STATUS_LEVEL=leak cargo nextest run` + `cargo clippy --tests` + `cargo shear` + `python3 .github/scripts/verify_bazel_clippy_lints.py`. Motivation: Browser Use origin-access prompts are MCP elicitations bypassing the Guardian approval path.

- **The conflict surface is the `_meta` object semantics for MCP elicitations.** #19431's `codex_approval_reviewer` key is *additive* — existing elicitations without the key are unaffected. #19467's structural classification is *subtractive* — every elicitation matching the empty-schema form pattern is auto-routed regardless of any opt-in. If both land, the precedence ordering is undefined: does the explicit `_meta` key override the structural classification, or vice versa? Neither PR specifies. The maintainer who lands the second one will have to write the precedence rule themselves.

- **The W17 sub-prediction:** if #19431 lands first, #19467 will need to add a `_meta` opt-out (because structural classification will then collide with explicit non-Guardian elicitations). If #19467 lands first, #19431 will need to either delete the explicit `_meta` key (because structural classification subsumes it) or scope it to *override* the structural default. Either way, the second PR becomes a much larger diff than it currently is.

### Same-author scope-split flavor — litellm per-model team budgets

- **[BerriAI/litellm#26462](https://github.com/BerriAI/litellm/pull/26462)** (OPENED 00:10:45Z by `ishaan-berri`, *"feat(teams): per-model team member budgets"*).

- **[BerriAI/litellm#26455](https://github.com/BerriAI/litellm/pull/26455)** (OPENED earlier in tick by `ishaan-berri`, *"feat: per-model team member budgets"*). Last refresh 23:26:45Z, still OPEN at window close.

- **Title delta:** addition of `(teams)` scope tag. **Author identity:** identical. **Surface:** identical (per-model team-member budgets). **Time delta:** ≈44 minutes between the second open and the prior refresh of the first. Neither PR's body acknowledges the other.

- **The maintainer-burden outcome is the same as the cross-author case** — except the resolution path is cleaner: the author can self-resolve by closing one. The risk is that they don't, and a third party (CI, stale-bot, another reviewer) closes the wrong one or merges both into conflicting branches. The fact that this happens *to the same author within one dispatcher tick* suggests that even self-coordination is breaking down at high cadence.

### Cross-repo signal

The pattern lands in two repos in the *same 38-minute dispatcher tick* with two distinct flavors:

| Repo | Flavor | Authors | Time delta | Discriminator |
|---|---|---|---|---|
| openai/codex | cross-author | viyatb-oai, cd-oai | ~3h | opt-in mechanism (explicit key vs structural classification) |
| BerriAI/litellm | same-author scope-split | ishaan-berri (×2) | ~44min | conventional-commit scope tag |

The cross-author case is the more dangerous variant — it cannot be self-resolved, and both authors are presumably unaware of each other's PR (otherwise one would link to the other). The same-author case is recoverable by the author noticing.

### Sibling structures from earlier in W17 to explicitly distinguish

- **codex permissions stack #19391-#19395 (synthesis #44 anchor)** — *not* a #45 exhibit: this is a coordinated stack by the same author with explicit graph structure (each PR references the next via base-branch). The five PRs are *cooperating*, not *forking*. Discriminator: #44 PRs all share the same base-branch chain; #45 PRs both target main.
- **codex #19465 ↔ #19455 (synthesis #43 anchor)** — *not* a #45 exhibit at the moment of detection: #19455 is CLOSED, not OPEN, by the time #19465 opens. If #19455 had been OPEN at 23:38Z when #19465 opened, this would have been a #45 case (briefly) before the maintainer closed one.
- **litellm #26461 ↔ #26452 (synthesis #43 sibling)** — same as above: #26452 was CLOSED before #26461 opened.
- **codex #19459 + #19442 (capability-flag PRs)** — *candidate* #45 case: both OPEN, both touching the provider-capability-disable surface, neither references the other. #19442 (`feat: apply provider capability disables through config layers`, refreshed 23:59:57Z) and #19459 (`Enable unavailable dummy tools by default`, last touched 22:43:08Z) target overlapping surfaces. If they remain OPEN through the next tick without cross-reference, this is a third #45 exhibit on a different codex surface.

## The structural cost

The cost of #45 is not the duplicate diff — diffs are cheap. The cost is **the precedence rule that the second-merged PR is forced to write but did not anticipate**. In the codex Guardian-elicitation case, whoever lands second must define what `_meta.codex_approval_reviewer="user"` means when the elicitation also matches the empty-schema form pattern. Neither author has thought about this, because neither knows the other PR exists. The maintainer reviewing the second PR will either:

1. **Notice the first PR and request the second to handle precedence** (best case — adds review time but produces a coherent design);
2. **Not notice the first PR and merge the second as-is** (worst case — produces ambient incoherence in the `_meta` semantics that surfaces later as bug reports);
3. **Notice the first PR and close the second** (forces the second author to either rebase against the first or abandon — the second author's work is lost or reshaped).

All three outcomes are *worse* than the case where the two authors had coordinated up-front. The tracker has no way to surface this kind of conflict — there is no GitHub primitive for "these two PRs are competing for the same surface" the way there is for "these two PRs touch the same file" (which the file-changed view surfaces). The conflict is at the *surface* level, not the *file* level, and the tracker does not know what a surface is.

## Operational signal

When triaging a fast-cadence repo, treat any new OPEN PR matching all of:

1. **Title contains a feature noun** (e.g., "guardian", "elicitation", "team budget", "capability flag") that appears in the title of another PR currently OPEN in the same repo;
2. **Body opens with a feature/motivation paragraph** that describes the same end-user-visible behavior as the other OPEN PR;
3. **Body contains no link to the other OPEN PR**;
4. **Files-changed include at least one file in common** with the other OPEN PR

…as a **#45 candidate**. Comment on both PRs to surface the conflict before either is reviewed for implementation quality. The alternative is the maintainer absorbing the precedence-rule design as an unannounced part of the merge of whichever lands first.

If the same author is on both PRs, leave a single comment on the *older* PR asking which one is canonical. If different authors, leave a comment on both PRs CCing the other author and asking for an alignment discussion before either lands.

## Counter-cases

- A new PR that **explicitly references** an open competitor PR in its body ("supersedes #X" or "alternative to #X") is *not* a #45 case — it is a coordinated alternative, and the maintainer can mediate cleanly. This is the documented form #45 should be converted into.
- A new PR that touches the same files as another OPEN PR but implements an orthogonal feature (e.g., both touch `litellm/proxy/auth.py` but one adds a JWT path and the other adds a Bedrock-passthrough path) is *not* a #45 case — they are not competing for the same surface, just for the same files. Discriminator: read the user-visible behavior, not the file list.
- A series of stacked PRs by the same author (synthesis #44 shape) is *not* a #45 case — the stack is cooperative, not competitive.

## Predictions for next tick

1. **codex #19467 vs #19431 will not both land in the next 24h.** One will close (probably #19431, the older one with the more invasive `_meta` key), and the closer's author may resubmit unchanged within minutes (a #43 cascade out of the #45). Watch for δ < 15min between #19431 close and a new "Route opted-in MCP elicitations through Guardian"-titled PR.
2. **litellm #26462 vs #26455 will be self-resolved by `ishaan-berri`** within one tick — one will close as superseded. The conventional-commit scope-tag flavor is the lower-stakes #45 because self-resolution is available.
3. **A third codex #45 candidate will surface** on the capability-flag surface (#19459 + #19442) if both remain OPEN through the next tick.

EOF
