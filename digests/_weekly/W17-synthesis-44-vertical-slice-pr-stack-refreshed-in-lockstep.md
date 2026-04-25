# W17 cross-repo synthesis #44 — vertical-slice-PR-stack-refreshed-in-lockstep: when a coordinated multi-PR vertical slice (4+ PRs forming a single design surface, each one stacked on the previous) refreshes within seconds of itself in the same dispatcher tick — typically via a force-push to the bottom PR cascading rebases up the stack — and none of the PRs in the slice merge in the same window, the maintainers are inviting *graph-level* review (evaluate the design as a whole) rather than *leaf-level* merge (land PRs one at a time as they ripen); the synchronized refresh is the design's request for attention, not its readiness signal — which means asynchronous reviewers who only look at the top of each PR see five "active" notifications and no movement, while the design lives in the *graph between* the PRs, not in any single PR's diff (2026-04-24T23:58Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through every PR before acting._

## The pattern in one sentence

**A coding-agent OSS project ships a *vertical-slice PR stack* — four or more PRs all touching the same subsystem, each one stacked on the previous (so the bottom PR introduces the foundational rename, the next applies the new shape to the consumer layer, the next removes the legacy code paths, the top finalizes the public surfaces) — and the entire stack refreshes within a few seconds of itself in the same dispatcher tick (a force-push to the bottom PR auto-rebases the stack and pushes each child, registering as a near-simultaneous `updated_at` bump on every PR in the slice); critically, *none* of the PRs in the slice merge in the same window — the refresh is a *graph-level* signal asking reviewers to look at the slice as a single design proposal rather than as five independently mergeable units; the structural distinction matters because asynchronous reviewers (the maintainer subscriptions, the issue-tracker dashboards, the PR-review bots) treat each PR as an independent unit and surface five active notifications with no merge motion, missing the actual signal which is "the slice is ready for design review, not for individual merges"; W17's anchor exhibit is the openai/codex permissions-profile slice — [openai/codex#19391] (`permissions: make runtime config profile-backed`, +1004/-568, refreshed 23:33:17Z), [openai/codex#19392] (`permissions: derive compatibility policies from profiles`, +489/-403, refreshed 23:33:12Z), [openai/codex#19393] (`permissions: migrate approval and sandbox consumers to profiles`, +386/-216, refreshed 23:33:17Z), [openai/codex#19394] (`permissions: remove core legacy policy round trips`, +118/-303, refreshed 23:33:17Z), [openai/codex#19395] (`permissions: finish profile-backed app surfaces`, +216/-128, refreshed 23:33:17Z) — five PRs, total +2213/-1618 spanning the entire permissions migration, all five refreshed within a 5-second window (23:33:12Z to 23:33:17Z) with no merges; the sixth PR [openai/codex#19449] (`permissions: remove legacy read-only access modes`, refreshed 23:49:20Z) is the dependent consumer that lands *after* the slice; sibling shapes appear in BerriAI/litellm where #26459 (`Reseed enforcement read path from DB on counter miss`, refreshed 23:56:50Z) and #26455 (`feat: per-model team member budgets`, refreshed 23:26:45Z) form a feature-and-fix pair on the same budget-enforcement surface refreshed in the same broader window, and across openai/codex telemetry where #19432 (`Add token usage to turn tracing spans`) and #19452 (`Stabilize plugin MCP fixture tests`) and #19454 (`Split approval matrix test groups`) form a cluster of three test/telemetry-infra PRs queued behind the slice; the failure mode of treating a vertical slice as five independent PRs is that no single PR's review surfaces the *structural* claim the slice makes (in #19391-#19395's case: "permission profiles are the new abstraction; the legacy round-trip-based policies are removed; all consumers migrate; all app surfaces are reshaped") — that claim is only visible if you read the five PRs as a single document.*

The signal is *not* that PR stacks exist (they always do). The signal is **the synchronized-refresh-without-merge**: when the entire stack updates within seconds of itself and none of the PRs land, the maintainers are signaling "review the design," not "merge the leaves." A reviewer who lands on PR #19394 cold and approves it on its merits has reviewed a *fragment*, not the design.

## Why this is *not* synthesis #36 (mid-migration-split-read-state)

#36 names cases where a migration is partway done and the read state is split across the old and new shapes. **#44 names cases where the migration is *queued in a single coordinated stack that hasn't started landing yet*: the read state is not split because nothing has merged.**

The two compose: a #44 vertical slice that lands *partially* (top PRs merge, bottom PRs don't, or vice versa) immediately becomes a #36 split-read-state risk. The W17 #44 anchor (codex permissions slice) is a #36-in-waiting: if #19391 and #19392 merge but #19393, #19394, #19395 don't, the read path for permissions is now bilingual — some consumers use profiles, some still use the legacy round-trip — and the synthesis #36 risk is realized.

## Why this is *not* synthesis #39 (PR-body-declared-cross-PR-dependency-without-machine-readable-enforcement)

#39 names cases where PR A's body says "depends on B landing first" but the tracker doesn't enforce it. **#44 names cases where the dependency is *machine-enforceable* (PR B is literally stacked on A's branch) but the *review attention* isn't graph-aware — reviewers see five PRs, not one design.**

#39 is a sequencing failure: the prose-declared order is ignored. #44 is a *review-attention failure*: the order is correct, the dependency is enforced by git, and yet reviewers still treat each PR as independent. The two failures compose: a #44 slice with #39-shaped prose dependencies on PRs *outside* the stack (e.g., the slice depends on a litellm-side change that hasn't landed) is the worst case — the stack is internally well-ordered but externally vulnerable.

## Why this is *not* synthesis #42 (test-only PR merged mid-feature-train as a flake-firewall)

#42 names cases where a tiny test-only PR lands between batches of feature PRs to act as a CI-stability firewall. **#44 names cases where a *coordinated multi-PR feature slice* is queued behind the firewall (or in front of it) and refreshes as a graph.**

The two compose: codex #19453 (the synthesis #42 anchor, MERGED 23:18Z, Windows PowerShell test serialization) is the firewall PR; codex #19391-#19395 (the synthesis #44 anchor) is the feature slice queued behind the firewall. The W17 prediction (from #42): "same-surface feature PRs queued behind a firewall are highest-probability next merges." The W17 prediction (from #44, refining #42): "the feature PRs queued behind the firewall *as a synchronized stack* are highest-probability next merges *as a batch*, not as leaves." If #19391 lands tomorrow without #19392 immediately following, the slice has lost coherence and the maintainers will likely roll back rather than ship a half-migrated permissions surface.

## Why this is *not* synthesis #37 (deletion-PR-injected-into-additive-train)

#37 names cases where a large deletion PR lands inside an otherwise-additive feature train. **#44 names cases where a coordinated slice contains *both* additions and deletions internally** (#19391 is +1004/-568, #19394 is +118/-303 — net deletion; the slice's net is +2213/-1618 — net addition).

#37 is about a deletion landing without coordination. #44 is about a slice that contains its own deletions in the right order — the additions land *before* the deletions in the stack, so consumers exist before the legacy code is removed. This is the *correct* shape; #37 is the failure mode of the same surface when it's *not* sliced. The W17 #44 anchor is what #37 looks like when you do it right.

## Anchor exhibits (W17, this tick)

- **codex permissions slice — #19391, #19392, #19393, #19394, #19395, #19449** — five-PR vertical slice (+2213/-1618 total) refreshed within 5 seconds at 23:33:12Z–23:33:17Z, plus a sixth dependent consumer (#19449) refreshed at 23:49:20Z. The canonical W17 #44 exhibit. The slice's structural claim: permission profiles are the new abstraction; the legacy round-trip policies are removed; all consumers migrate; all app surfaces are reshaped. None of the six merged in window.
- **codex test/telemetry cluster — #19432, #19452, #19454** — three test-infra/telemetry PRs queued in the same broader window as the permissions slice. Different from the slice (these are independent, not stacked) but structurally similar in that they form a *category* (test-infra) refreshed concurrently — the maintainers are advancing two parallel categories (permissions design + test-infra firewall) at once.
- **codex permission-profile downstream consumer — #19467** (`feat: route MCP elicitations through guardian review`, OPENED 23:43:20Z) — *not* part of the stack but a likely *consumer* of the new profile abstraction. The pattern: a vertical slice lands the abstraction, then independent feature PRs plug into it. Adding #19467 *before* the slice has merged is a #44 risk variant — a consumer arrives before the abstraction is in main.
- **litellm budget-enforcement pair — #26459, #26455** — feature (`per-model team member budgets`) + bug-fix (`Reseed enforcement read path from DB on counter miss`) on the same surface, both refreshed in the broader 23:26-23:56Z window without merging. Not a stack (both PRs are on `main`), but a *paired* design — and the same review-attention failure applies (reviewers will likely look at one without the other; the budget feature should not merge before the cache-coherence fix lands or budgets become non-deterministic on multi-pod deployments).
- **codex #19410** (`Remove js_repl feature`, +77/-9261, refreshed 23:13Z) — the *anti-pattern* contrast: a single-PR mega-deletion of an entire feature surface, with no coordinated stack. This is what the permissions slice would look like if it were *not* sliced — a single 2000+ line PR removing the legacy permissions surface in one shot, which would be much harder to review and much harder to roll back. The slice (#19391-#19395) is the well-engineered shape; #19410 is the all-at-once shape. Both are valid; the slice is safer.
- **opencode #24218** — *not* a slice exhibit (single-PR fix), but useful contrast: a one-line provider.ts fix moving in parallel with the codex slice and the litellm pair. The opencode tracker is shipping leaves while the codex tracker is shipping designs. Different cadence, different review surface.

## The lockstep-refresh signature

A vertical slice in `gh pr list` looks like:

```
OPEN  #19391  2026-04-24T23:33:17Z  permissions: make runtime config profile-backed
OPEN  #19392  2026-04-24T23:33:12Z  permissions: derive compatibility policies from profiles
OPEN  #19393  2026-04-24T23:33:17Z  permissions: migrate approval and sandbox consumers to profiles
OPEN  #19394  2026-04-24T23:33:17Z  permissions: remove core legacy policy round trips
OPEN  #19395  2026-04-24T23:33:17Z  permissions: finish profile-backed app surfaces
```

Three signals identify a #44 slice:

1. **Title prefix repetition** — same lowercase prefix (`permissions:`, `feat(proxy):`, `refactor(core):`). The prefix declares the design surface.
2. **`updated_at` clustering within seconds** — five PRs updated within a 5-second window means a single force-push cascaded the rebase. Independent human-driven updates would spread over minutes.
3. **None of the PRs in the cluster have a `merged_at`** — refresh without merge is the discriminator. A slice that is *landing* will show one merge per refresh cycle, not zero.

When all three are present, treat the cluster as a single design proposal.

## Operational signal

For reviewers:

1. **When you see a multi-PR cluster from a single author with a shared title prefix and synchronized `updated_at`, read the *bottom* PR's body as the design document for the entire slice, not just for that PR's diff.** The bottom PR usually carries the rationale; the upper PRs carry the mechanical follow-through.
2. **Approve the slice as a unit or reject it as a unit.** Approving #19391 alone leaves the codebase in a state where the new abstraction exists but no consumers use it; merging #19394 alone removes legacy code paths that consumers still call. Either failure mode is worse than not merging at all.
3. **If you can only approve part of the slice, comment on the bottom PR with which subset is acceptable** so the author can re-stack accordingly. Approving leaves out of order is the W17 failure shape.

For maintainers:

1. **A "merge entire stack" tracker affordance** (some forges have this; GitHub does not natively) would solve the lockstep-refresh problem at source. Without it, the social discipline is "all-or-nothing" review.
2. **The synchronized refresh is also the slice's *progress signal* for the author** — if the slice refreshes without comment, the author should consider posting a single design-doc comment on the bottom PR explaining the slice's structural claim, so reviewers arriving cold have the graph-level context.

## What W17 #44 looks like a week from now

The synthesis is **confirmed** if the codex permissions slice (#19391-#19395) lands as a coordinated batch within the next 7 days — all five PRs merging in the same dispatcher tick or two consecutive ticks, in stack order, with #19449 immediately following. That would demonstrate the slice was a graph-level proposal that was reviewed and accepted as a graph.

The synthesis is **partially falsified** if the slice lands *out of order* (e.g., #19395 merges before #19394, or #19391 merges and the rest don't follow within 24h). Out-of-order merges or partial merges would mean the maintainers are reviewing the slice as leaves after all, and the slice is at risk of becoming a synthesis #36 split-read-state event.

The synthesis is **fully falsified** if the slice sits open for >7 days without any merges — that would mean the slice's *design* is being rejected (not its sequencing), and the lockstep refresh was just bot noise from a long-running rebase, not a graph-level review request.

The quantitative signal to track over the next week: **for every multi-PR cluster identified by the lockstep signature, measure (a) the time-to-first-merge, (b) the time-to-last-merge, (c) the order of merges relative to stack order**. A healthy #44 slice has small first-to-last delta and merges in stack order; an unhealthy one has large delta or out-of-order merges. The codex permissions slice will be the W18 reference dataset for what these distributions look like in practice.
