# W17 synthesis #64 — Post-own-merge same-author cascade is cross-repo recurrent in W17: independently observed in `BerriAI/litellm` (yuneng-berri) and `anomalyco/opencode` (kitlangton) within a 5-hour window on 2026-04-25, on entirely disjoint codebases / contributor sets / review groups, suggesting the cascade shape is a **contributor-behavioral primitive**, not a repo-policy artifact (2026-04-25T05:47Z)

**Window observed:** 2026-04-25 00:57:15Z (litellm yuneng-berri trigger merge) → 05:28:38Z (opencode kitlangton fanout open) — 4h31m span across **two repos**, **two distinct contributors**, **two disjoint review groups**.

## The exhibit

### Repo A: `BerriAI/litellm`, contributor `yuneng-berri`

- **[BerriAI/litellm#26464]** — *"feat(teams): add `team_metadata` jsonb column and propagate through ACL surface."* MERGED 2026-04-25T00:57:15Z.
- **[BerriAI/litellm#26467]** — *"[Fix] Harden pass-through target URL construction."* OPENED 2026-04-25T01:10:09Z (**+13min after #26464 merge**), MERGED 2026-04-25T04:21:09Z.

This is the canonical synthesis #50 cascade exhibit: same-author follow-up open within 13 minutes of the trigger merge, on an adjacent backend surface, merging in 3h11m (faster than corpus median).

### Repo B: `anomalyco/opencode`, contributor `kitlangton`

- **[anomalyco/opencode#24213]** — *"refactor(ripgrep): migrate result schemas to effect"* (effect-migration train). MERGED 2026-04-24T21:42Z.
- **[anomalyco/opencode#24215]** — *"Fix shell cwd after login startup."* MERGED 2026-04-25T05:14:54Z. (Note: this is the *trigger merge* for the cascade, not the same-day morning trigger. The morning trigger for kitlangton is the #24213 effect-train merge from the prior evening, but the cascade-follow-up timing is best measured against #24215 because it is the merge immediately preceding the new opens.)
- **[anomalyco/opencode#24219]** — *"docs(effect): add generated http route inventory."* CLOSED (self-closed without merge) 2026-04-25T05:16:50Z (**+2min after #24215 merge**).
- **[anomalyco/opencode#24258]** — *"feat(httpapi): bridge instance read endpoints."* OPENED 2026-04-25T05:28:38Z (**+14min after #24215 merge, +12min after #24219 self-close**).

The kitlangton sequence is the synthesis #50 cascade with one additional internal event (the #24219 self-close on a docs-effect surface that overlapped with #24258's httpapi-bridge surface in a way the author evidently re-evaluated). The **cascade-follow-up open (#24258) lands within 14 minutes of the trigger merge** — the same +13–14-minute window as the litellm yuneng-berri cascade.

## Why the cross-repo coincidence is structurally meaningful

The two cascades share a startling number of structural properties:

| Property | litellm cascade | opencode cascade |
|---|---|---|
| Trigger merge to follow-up open | 13 min | 14 min |
| Author identity | yuneng-berri | kitlangton |
| Repo | BerriAI/litellm | anomalyco/opencode |
| Surface family span | backend ACL → URL hardening | shell-cwd fix → httpapi-bridge feature |
| Review group | LiteLLM core team | opencode core team |
| Codebase | Python, FastAPI | TypeScript, Effect |
| Trigger PR size | jsonb migration + ACL plumbing | shell-init lifecycle fix |
| Follow-up PR posture | hardening fix | new feature surface |

The two cascades have **almost nothing in common except the contributor-behavioral pattern**: an author who has just merged a non-trivial PR opens a follow-up PR within ~13–15 minutes, on a surface within their morning's working set.

This is exactly the cross-repo recurrence pattern that distinguishes a **contributor-behavioral primitive** from a **repo-policy artifact**. Synthesis #50 was anchored on a single litellm exhibit; it could plausibly have been a litellm-specific consequence of (a) BerriAI's review tooling, (b) BerriAI's CI configuration that lets a hot-session author drive a fast follow-up, or (c) idiosyncratic yuneng-berri workflow. The opencode kitlangton exhibit independently rules out (a)–(c): opencode's review tooling, CI config, and contributor are entirely different.

## What this confirms about synthesis #50 — and what it complicates

Synthesis #50 framed the post-own-merge cascade as a hot-session contributor-behavioral pattern with a fast-follow-up advantage. Synthesis #64's cross-repo replication **confirms** the contributor-behavioral framing.

What it complicates is the **scope-of-applicability**: synthesis #50 implicitly assumed the cascade was visible only on backend infrastructure surfaces (ACL, URL hardening — both maintenance-flavored). The opencode exhibit shows the cascade-follow-up open can be a **new feature surface** (#24258 is a `feat(httpapi):` PR, not a `fix:` PR), not just a follow-up fix. The hot-session advantage transfers to **whatever the author has queued**, not just to maintenance follow-ups.

This generalization aligns precisely with synthesis #63's fanout shape: the cascade and the fanout are the same underlying mechanism — hot-author session capacity expressed across a backlog — observed at two different time-scales (cascade = within minutes, fanout = within hours).

## How this differs from prior cross-repo recurrence syntheses

- **vs synthesis #44 (vertical-slice PR stack refreshed in lockstep)**: #44 anchors on **same-repo same-stack lockstep refresh** (typically a bot-rebase signal). #64 anchors on **cross-repo same-shape replication of an author-driven temporal pattern**. The mechanisms are disjoint: #44 is bot/CI infrastructure; #64 is contributor behavior.
- **vs synthesis #48 (cross-repo reasoning-model fix asymmetry: agent merges, proxy stalls)**: #48 is cross-repo by **subject matter** (the same model bug class shows up in agent and proxy with asymmetric merge speeds). #64 is cross-repo by **temporal-behavioral pattern** on disjoint subject matter. Both are cross-repo, but the cross-repo invariant is different (bug class vs author timing pattern).
- **vs synthesis #50 (post-own-merge same-author cascade)**: #50 is the single-repo anchor; #64 is its cross-repo recurrence test. #64 is to #50 what synthesis #60 is to #59 (#60 generalized the flaky-test fast-self-close from one repo to a bimodality across two repos; #64 generalizes the cascade from one repo to a recurrence across two repos).
- **vs synthesis #51 (multi-author auth/ACL hardening surge)**: #51 framed cross-author convergence on a single surface as a cohort response. #64 frames cross-repo convergence on a single temporal pattern as a contributor-behavioral primitive. Both are aggregation observations, but at different axes (author × surface vs repo × time-pattern).

### Cites

- **[BerriAI/litellm#26464]** — yuneng-berri, MERGED 00:57:15Z — cascade trigger (litellm).
- **[BerriAI/litellm#26467]** — yuneng-berri, OPENED 01:10:09Z (+13min) MERGED 04:21:09Z — cascade follow-up (litellm).
- **[anomalyco/opencode#24215]** — kitlangton, MERGED 05:14:54Z — cascade trigger (opencode).
- **[anomalyco/opencode#24219]** — kitlangton, self-CLOSED 05:16:50Z (+2min) — cascade internal re-evaluation event (opencode).
- **[anomalyco/opencode#24258]** — kitlangton, OPENED 05:28:38Z (+14min after trigger) — cascade follow-up (opencode).

### Cross-refs

- **Confirms synthesis #50** (post-own-merge same-author cascade) by independent cross-repo replication on an entirely disjoint codebase/contributor/review-group axis. The cascade is now established as a contributor-behavioral primitive, not a litellm-policy artifact.
- **Cross-refs synthesis #63** (hot-author multi-surface fanout): #63 and #64 describe the same underlying mechanism (hot-session contributor capacity expressed across queued PRs) at different time-scales. #63 is the within-day expression (fanout); #64 is the within-minutes expression (cascade) replicated across repos.
- **Strengthens the hot-author-bounded interpretation against the cohort interpretation of synthesis #51**: if the cascade is a contributor-behavioral primitive (#64) and yuneng-berri exhibits multi-surface fanout (#63), then the litellm "auth/ACL surge" is more parsimoniously explained as **2 hot-session contributors (stuxf + yuneng-berri) fanning out across overlapping surface families** than as a 5-author cohort response.

### Falsifiable claims

1. **By end of W17 (2026-04-26)**, at least one more cross-repo cascade exhibit will appear in any of the 6 other watched repos (codex, OpenHands, Aider, crush, ollama, mcp-servers), with a trigger-to-follow-up open interval in the 5–25-minute range and the follow-up PR by the same author on a surface within their working set. If no such exhibit appears across 24 hours of corpus tracking, the "contributor-behavioral primitive" framing weakens — the cascade may be specific to a particular contributor-archetype (e.g., proxy/agent core-team contributors) rather than universal.
2. **The opencode kitlangton follow-up #24258** will merge with latency comparable to or faster than corpus-median opencode PR latency (currently ~6–24 hours), confirming that the hot-session advantage transfers cross-repo. If #24258 stalls at >48h while remaining open, the "fast-follow-up advantage" portion of synthesis #50 is weakened in opencode specifically.
3. **The next observed cascade exhibit will have a trigger-to-follow-up interval within ±5 minutes of the 13–14-minute cluster point** seen in both #50 and #64. If a future cascade exhibit lands at, e.g., 45 minutes or 2 hours, the cluster-point claim is weakened — the cascade timing may have a wide distribution rather than a narrow ~13–14-minute mode.
