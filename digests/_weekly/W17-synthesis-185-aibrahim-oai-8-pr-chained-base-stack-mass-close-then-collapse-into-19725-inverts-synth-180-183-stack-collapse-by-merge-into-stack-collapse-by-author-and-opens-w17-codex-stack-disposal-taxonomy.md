# W17 Synthesis #185 — aibrahim-oai 8-PR chained-base stack mass-close-then-collapse-into-#19725 inverts synth #180/#183 stack-collapse-by-merge into stack-collapse-by-author and opens W17 codex stack-disposal taxonomy

**Anchor window:** 2026-04-26T22:31:19Z → 22:31:31Z (12 seconds).
**Anchor repo:** openai/codex.
**Anchor actor:** `aibrahim-oai`.
**Parent synths:** #180 (bolinfest stack mrm-triple completes rebase as merge precursor; arms child stack collapse trigger) and #183 (stack-collapse-and-stack-bootstrap cross-author pair within 73s — opens cross-author stack graph coupling taxonomy).

## What synths #180 and #183 established

Synth #180 captured the **stack-collapse-by-merge** pattern: a parent PR (#19606) merges into main, which **arms** a trigger that fires when the child stack rebases off the parent and itself merges. The child collapse here is **passive** — the children sit on the now-stale base ref until the author explicitly rebases them, and then they merge into main one-by-one. The implicit assumption is that **each stack PR is a unit of mergeable work** that survives the parent's collapse and reaches main in modified form.

Synth #183 generalized this to the cross-author case: bolinfest's stack collapses (parent merge fires the trigger) at 22:06:42Z, and 73 seconds later aibrahim-oai opens a fresh 3-PR stack (#19713/#19714/#19716) on a different surface (MCP modules). The synth framed this as a **stack-collapse-and-stack-bootstrap pair**: as one stack disappears (via merge), another is born (via opens). The implicit assumption was again that the bootstrapped stack would itself reach main via the merge route.

**Both synths assumed `stack lifecycle = open → rebase-as-needed → merge`.** Neither anticipated `stack lifecycle = open → grow → mass-close-without-merge → reopen-as-single-PR`.

## What Add.70 observed that #180 and #183 cannot accommodate

Inside a 12-second window starting at 22:31:19Z, aibrahim-oai executes the following sequence:

| t (UTC, +0:00:00 = 22:31:19Z) | Event | PR | Note |
|---|---|---|---|
| +0:00:00 | OPEN | **#19725** `Split MCP connection modules` (head `1e5b031346050fc389ee5d9cdc16f4b9912bea9c`, base `main`) | Replacement single-PR; mainline base; title is the **same surface** as #19713 |
| +0:00:06 | CLOSE | #19713, #19714, #19716, #19718, #19721, #19722, #19723, #19724 (8 PRs) | All closed-without-merge in 6 seconds (22:31:25Z–22:31:31Z) |

The closed set is **not** an arbitrary subset of aibrahim's open work — it is the **entire chained-base series** from Add.69's 3-PR observation (main ← #19713 ← #19714 ← #19716) **plus** 5 additional PRs (#19718, #19721, #19722, #19723, #19724) opened after the Add.69 window between 22:11:58Z and 22:22:57Z, all stacked on the same chain. By the time aibrahim hit the close button, the stack was **8-deep** and growing at one new PR every ~2 minutes.

The close is not a supersession-by-sibling (synth #184) — there is no winning sibling among the 8. The close is **not** a bot sweep (synth #98) — the actor is human. The close is **not** a stack-merge cascade (synth #180/#183) — the chain never reached main. **The close is a deliberate author-driven discard of an entire stack, with the stack's intent reabsorbed into a single mainline-based replacement PR (#19725).**

## The novel pattern: stack-collapse-by-author

Define the W17 codex **stack-disposal taxonomy** (this synth opens it):

| Disposal mode | Trigger | Outcome | Synth |
|---|---|---|---|
| **D1: Stack-collapse-by-merge (cascading)** | Parent PR merges to main; children rebase off parent's merge commit; children merge one-by-one | All stack PRs reach main; chain converges | #180, #183, Add.70 §1 (#19392→#19393 cascade) |
| **D2: Stack-collapse-by-author (mass-close)** | Author opens replacement single-PR on `main`; closes entire chain in <10s | 0 stack PRs reach main; chain reabsorbed into 1 PR | **NEW (this synth)** |
| **D3: Stack-collapse-by-supersession (per-PR)** | A sibling PR on the same surface wins; one stack member closes | Specific stack PR is discarded; chain shrinks by 1 | Variant of synth #184 |

D2 has structurally distinct properties from D1:
- **Time-to-disposal is bounded by the author's reaction latency, not by CI/review latency.** Add.70's 12-second total disposal window is **>500× faster** than the cascading D1 collapse seen on bolinfest's stack (3h21m parent latency + 23m58s child cascade).
- **The replacement PR exists before the chain dies.** #19725 was opened 6 seconds before the first close, mirroring the cline/cline aikido-autofix new-before-close-by-1-second pattern (Add.70 §5) but at a different abstraction level (chained-base stack vs single-PR replacement).
- **The disposal carries no rebase work.** No commits move; the chain is simply abandoned. By contrast D1 requires every child to be rebased before merging.

## Why this inverts synth #183

Synth #183 framed the bolinfest stack-collapse + aibrahim stack-bootstrap pair as **constructive inversion**: bolinfest's stack disappears via merge (constructive — produces main commits), aibrahim's stack appears via opens (constructive — produces PRs).

The aibrahim 8-PR mass-close inverts this in **two simultaneous directions**:

1. **Destructive at the same surface as #183's bootstrap**: the very stack that #183 announced as a fresh bootstrap is **the** stack that gets mass-closed 24m38s later. The bootstrap-to-disposal latency is **24m38s**, which is **the shortest stack lifespan in W17 codex** (vs bolinfest's #19606 chain that took ~24h+ to fully resolve).
2. **Bootstrap-of-replacement at the disposal moment**: as the 8-PR chain dies, #19725 is born. So the pair is **stack-disposal-and-single-PR-bootstrap**, which is the **D2-internal** version of #183's cross-author **D1-merge-and-fresh-stack-bootstrap** pair.

Synth #183's "cross-author stack graph coupling taxonomy" must be expanded to include **intra-author disposal-bootstrap coupling** — the same author destroys and creates within the same 12-second window.

## Why this is also distinct from synth #178 (cross-author shared-branch lifecycle)

Synth #178's lifecycle had multiple authors converging on a single shared branch over multiple days. Synth #185's disposal is **single-author**, **multi-PR (8)**, **single-window (12s)**, with **zero shared branches**. The shared structure is the chained-base topology (every PR's `baseRefName` points to the previous PR's `headRefName`), not a shared head ref.

## Falsifiable predictions emitted

- **P185a:** within 24h, **#19725 will either merge or itself spawn a successor stack** (i.e. the author's intent — splitting the MCP connection modules — is not abandoned, only its packaging is). If #19725 closes-without-merge with no successor, the disposal mode generalizes to "stack-and-replacement-both-discarded" and a D4 mode is needed.
- **P185b:** within W18, at least one **other** author on openai/codex (likely bolinfest, given his stack history) will execute a D2 disposal, ratifying D2 as a recurring mode rather than an aibrahim-specific quirk. If only aibrahim does D2 across W17–W18, D2 may be an author-trait rather than a repo-trait.
- **P185c:** the next D1 cascade observed in W17 codex (e.g. bolinfest's #19394/#19395 children merging after Add.70's 9s head-roll pair) will have **inter-merge gap < 60s**, completing the monotonically-accelerating cascade pattern noted in Add.70 §1 (3h21m → 23m58s → <60s). If the gap is >5m, the cascade-acceleration claim is falsified and the D1 collapse instead has a **floor latency** distinct from the parent latency.
- **P185d:** if D2 disposals recur, the **author-replacement-PR-precedes-mass-close** ordering (replacement opens first, originals close after) will hold in ≥80% of cases — i.e. authors prefer to **never have a gap** where neither the chain nor the replacement is open. This mirrors the aikido bot's 1s new-before-close ordering on cline/cline (Add.70 §5) and suggests a **broad operator preference for non-empty-window replacement** that is not specific to bots.

## Cross-references

- Synth #180 — direct parent on D1; the D2 mode is structurally inverse.
- Synth #183 — direct parent on cross-author stack coupling; D2 introduces intra-author disposal-bootstrap coupling that #183 did not contemplate.
- Synth #98 — bot mass-close contrast; D2 is human-driven and has a single-PR replacement, which #98 lacked.
- Synth #184 — supersession close contrast; D2 affects an entire chain, #184 affects a single PR.
- Synth #178 — shared-branch lifecycle contrast; D2 has chained-base topology, not shared-head.
- Add.70 §1 — direct observation source; the 8-PR enumeration and 12-second window timestamps are recorded there.
- Add.70 §5 — the cline aikido-autofix new-before-close 1s pattern is the cross-actor (bot) analog of D2's replacement-PR-precedes-disposal ordering.
