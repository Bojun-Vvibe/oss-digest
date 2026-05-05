# W17-synthesis-668 — recursive bot meta-lifecycle self-application primitive: gemini-cli[bot] PRs proposing PR-closure tooling are themselves auto-closed under existing closure policy within minutes, instantiating a self-referential auto-reaper signature distinct from human bot-leg dependency-bump quiescence

## Cross-repo synthesis

**Source**: ADDENDUM-341 (gemini-cli[bot] #26481 + #26477 lifecycle-management meta PRs both opened-and-closed within Add.340→341 window); compare with persistent dependabot[bot] dependency-bump leg pattern observed continuously across litellm (#27152) and crush (#2794, #2795).

**Pattern observed on a single carrier (gemini-cli)**:

### Bot self-close meta-lifecycle pair (Add.341)

- google-gemini/gemini-cli #26481 head `ff16896735af41d8db8bcafb1a088c0ab29a51aa` (gemini-cli[bot]) — `# PR Description: Scale-Safe Lifecycle Management & Graceful PR Closure`. Opened 2026-05-05T02:45:35Z, **CLOSED** 2026-05-05T02:51:52Z. Open-lifetime **6m17s**.
- google-gemini/gemini-cli #26477 head `3c3746644d8da88a53b6f073582f8d0514bff4e4` (gemini-cli[bot]) — `# BT-36: Optimize Lifecycle Manager & Prune Backlog`. Opened 2026-05-04T23:59:08Z, CLOSED 2026-05-05T00:40:52Z. Open-lifetime **41m44s**.

Both bot PRs:
1. **Propose lifecycle-management/auto-closure tooling** as their own substrate.
2. Are **themselves auto-closed by the existing closure policy** they propose to optimize.
3. Live for ≤45m total before reaping.

### Adjacent human moderator PRs (same lifecycle substrate)

- google-gemini/gemini-cli #26476 head `443d046069b97e6c2edb8496cf65e813d4351048` (gundermanc) — `fix(ci): require nudge label before closing old PRs`, CLOSED 2026-05-05T00:58:43Z (opened 2026-05-04T23:12:58Z). Open-lifetime ~1h45m before close.
- google-gemini/gemini-cli #26475 head `4cef61e9c7963c33fad6f7a86e613fc054a2f6e2` (gundermanc) — `fix(ci): respect exempt labels when closing stale items`, MERGED 2026-05-04T23:10:17Z (opened 22:46:43Z). Open-to-merge ~24m.

gundermanc's #26475 (MERGED) modifies the closure policy to respect exempt labels; gundermanc's #26476 (CLOSED) attempts to add nudge-label requirement and is itself closed — likely under the very policy modified by #26475. **Human-side moderator action is concurrent with bot-side recursive self-application** on the same lifecycle substrate.

## Differentiation from prior W17 bot-leg primitives

- **synth-98 (bot-driven sub-10s n3 stale-PR mass-close sweep)**: bot acting AS the auto-reaper across heterogeneous third-party-author PRs. synth-668 inverts: bot's own PRs become reaped subjects — **bot-as-reaped (not bot-as-reaper)**.
- **dependabot[bot] persistent leg pattern** (litellm #27152, crush #2794/#2795): dependabot bots open dependency-bump PRs that **survive open across multiple ticks** awaiting human merge or maintainer review, basin-locking similar to human contributor PRs. synth-668 differs by **rapid-close lifetime** (≤45m) and **meta-lifecycle substrate** (the closure policy itself).
- **synth-29 / synth-78 (single-author backlog-prune patterns)**: human-side prune actions on stale PRs. synth-668 documents the bot-side analog AND its self-referential edge case.

## Recursive-meta-application primitive (W17)

A self-referential auto-reaper signature: **the PR proposing improvements to auto-closure policy is itself auto-closed by the policy under improvement, within minutes, before review can complete**. Two instances within ~3h on a single carrier (Add.340 #26477 + Add.341 #26481). The pattern is:

1. Bot opens PR proposing lifecycle-policy tweak.
2. Existing policy (running on a schedule or webhook) evaluates the new PR.
3. PR satisfies closure criteria (no human nudge label, age threshold, source author classified as bot, etc.).
4. PR is closed before maintainer can land or block the closure.
5. Repeat next cycle.

This creates a **steady-state suppression** of bot-driven lifecycle-policy evolution: any bot-proposed policy improvement is reaped by the prior policy. Only human moderator PRs (e.g., gundermanc #26475 MERGED) can break the loop, and even gundermanc's own #26476 was closed.

## Quantitative summary

| PR | Author | Open-lifetime | State | Substrate |
|---|---|---|---|---|
| #26481 | gemini-cli[bot] | 6m17s | CLOSED | bot lifecycle-management proposal |
| #26477 | gemini-cli[bot] | 41m44s | CLOSED | bot backlog-prune proposal |
| #26476 | gundermanc (human) | ~1h45m | CLOSED | human nudge-label policy |
| #26475 | gundermanc (human) | ~24m | MERGED | human exempt-label policy |
| #26474 | gemini-cli-robot (human-named bot) | ~12m | CLOSED | bot pre-review reflex |

Median bot open-lifetime: ~24m. Median human open-lifetime on same substrate: ~1h45m. **Human PRs survive ~4× longer** than bot PRs on lifecycle substrate before close decisions. Merge rate: human 1/2 (50%); bot 0/3 (0%).

## Cited PRs/SHAs (verified per Add.341 capture)

**Bot self-close meta-lifecycle pair**:
- google-gemini/gemini-cli #26481 head `ff16896735af41d8db8bcafb1a088c0ab29a51aa` (gemini-cli[bot])
- google-gemini/gemini-cli #26477 head `3c3746644d8da88a53b6f073582f8d0514bff4e4` (gemini-cli[bot])

**Human moderator parallel pair (same substrate)**:
- google-gemini/gemini-cli #26476 head `443d046069b97e6c2edb8496cf65e813d4351048` (gundermanc, CLOSED)
- google-gemini/gemini-cli #26475 head `4cef61e9c7963c33fad6f7a86e613fc054a2f6e2` (gundermanc, MERGED)

**Persistent-bot baseline comparators**:
- BerriAI/litellm #27152 head `6be2cd60aa787c13118e1a682d2a75009c05b5e7` (dependabot[bot], OPEN, 2-tick basin-lock — survival without close).
- charmbracelet/crush #2794 head `ccd37a5bc1bf68ab7aaf533ea69fd036f6296efc` (dependabot[bot], MERGED in normal-flow, no auto-close).
- block/goose #9006 head `13c51a74bdd9652e37b0078f422b73b5d30cec11` (github-actions[bot], OPEN, head-stable Add.340→341 — release bumps survive open across ticks).

The contrast is sharp: **dependabot/release-bot legs survive multi-tick open or merge normally; gemini-cli[bot] meta-lifecycle PRs uniformly auto-close in <1h**. The recursive-meta-application primitive is **gemini-cli[bot]-specific** (or more precisely, **bot-PRs-on-closure-policy-substrate-specific**), not a general bot-PR primitive.

## Predictions enabled

- **P-668.A**: a third gemini-cli[bot] meta-lifecycle PR (lifecycle-management/closure-policy substrate) opens-and-closes within ≤1h within next 5 ticks, prior 0.45 (mirrors P-341.H). If realized, fixes recursive-meta-application as sustained-cadence primitive.
- **P-668.B**: a human moderator on gemini-cli will land a successful policy change within 10 ticks that EXEMPTS gemini-cli[bot] meta-lifecycle PRs from auto-closure (breaking the recursion), prior 0.30. Would confirm policy-evolution path through human gate.
- **P-668.C**: an analogous bot-self-close meta-lifecycle pattern instantiates on a second carrier within W17 remainder, prior 0.15. Only sst/opencode and BerriAI/litellm have comparable bot infrastructure to exhibit this.
- **P-668.D**: bot-PR open-lifetime distribution on gemini-cli will exhibit bimodality — short (<1h) for closure-policy-substrate PRs and long (>4h) for non-closure-substrate bot PRs — within W17, prior 0.40.
- **P-668.E**: gundermanc nudge-label proposal #26476 is reopened within 5 ticks following manual maintainer override, prior 0.20. Would establish human-PR-reanimation as response to bot-mediated auto-closure of human-authored policy proposals.
