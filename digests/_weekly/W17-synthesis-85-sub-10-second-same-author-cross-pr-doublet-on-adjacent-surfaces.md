# W17 Synthesis #85 — Sub-10-second same-author cross-PR doublet on adjacent surfaces (rapid-fire fresh-open burst)

**Window anchor:** Addendum 20 (2026-04-25 12:52Z–13:30Z).

## Lens

Synthesis #47 isolated **same-author rapid-fire PR doublets on adjacent surfaces** at minute-scale spacing (two fresh opens, ~minute apart). Synthesis #62 isolated **same-author CI-surface micro-doublets across the failure→success boundary** (two PRs, one fixing what the prior broke, ~minute spacing). Synthesis #65 isolated **single-author micro-bursts with self-merge inside the burst window** (~tens of minutes). Synthesis #83 isolated **~30-minute metronome cadence** within one repo across multiple PRs.

This synthesis isolates a **structurally distinct, much-tighter** shape: a single author producing **two fresh opens on adjacent sub-surfaces of the same parent surface, ≤10 seconds apart**. Inter-PR spacing this tight is **below human typing latency for two independent `gh pr create` invocations** — it almost certainly reflects either (a) a **scripted batch open** of a pre-staged PR pair, or (b) two browser tabs submitted in rapid succession from a pre-prepared queue. Either way, the author is treating the two PRs as a **logically-coupled unit** even though they are filed as independent PRs (no stack relationship declared in either body, no `Stacked on:` or `Depends-on:` annotation).

This is **not** the synth #47 doublet (which had ~minute spacing — within human-typing range). It is **not** the synth #62 fail→success pairing (here, both PRs are fresh opens, neither references the other or a prior failure). It is **not** synth #45 concurrent-author scope-split (single author, not multi-author). It is the **micro-doublet at sub-typing latency on adjacent sub-surfaces** — a previously-uncatalogued bin in the rapid-fire taxonomy.

## Anchor evidence — `aibrahim-oai` in codex (Addendum 20)

| Event # | Time (Z) | PR | Action | Surface | Δ from prior |
|---:|---|---|---|---|---|
| 1 | 13:18:18 | #18787 | self-close (unmerged, 4d11h old) | realtime/codex-core teardown | — |
| 2 | 13:21:30 | #19526 | OPEN | codex-mcp item ordering / visibility | +3m12s |
| 3 | 13:21:39 | #19524 | OPEN | codex-mcp API pruning + duplicate helpers | **+9 seconds** |

The 9-second gap between the two fresh opens is the load-bearing observation. Both PRs target the **codex-mcp** surface family but at distinct sub-surfaces (visibility/ordering vs API pruning). Neither PR body declares the other as stacked or related — yet the 9-second filing gap and the surface adjacency strongly imply a coordinated batch.

Worth noting: the **3m12s gap before the doublet is a self-close on a disjoint surface** (realtime teardown). The author's micro-sequence is therefore *teardown then double-open*, with the teardown abandoning a stalled 4-day-old PR and the doublet activating a fresh surface. This shape — **abandon-then-double-open** in a sub-4-minute window — is itself novel and is captured here as a sub-pattern of the doublet.

## Falsification cases — what would invalidate this lens

1. **If the doublet were CI-driven**, head SHAs would show machine-bot authorship; here both PRs are authored and pushed by `aibrahim-oai` (`U_kgDODRuAYA`).
2. **If the doublet were a stacked-PR pair**, one PR body would reference the other (`Stacked on:` / `Depends-on:` / `Part of:`); neither does.
3. **If the spacing were a coincidence of two unrelated workstreams**, the surface families would diverge; both target codex-mcp.
4. **If the prior self-close (#18787) were on the same surface**, this would be a surface-continuation refile; instead the close is on realtime/codex-core (disjoint), so it is **abandon-then-pivot**, not refile.

The only plausible alternative is **scripted PR queue draining** (a script that opens N pre-staged branches in a loop). The `createdAt` timestamps for #19526 (07:24:31Z) and #19524 (07:10:04Z) — **~6 hours before the open** — are consistent with this: branches were pushed early in the day, draft PRs may have existed, and the 13:21Z events are the **transition from draft to open** rather than de-novo creation. This refines the lens: the sub-10-second doublet is **likely a draft-to-open batch flip**, not a from-scratch dual creation.

## Cross-repo extension — does this happen elsewhere?

Searching prior addendums (16–19) for any same-author two-PR open events spaced ≤10 seconds in any tracked repo: **none found**. opencode `herjarsa`'s opens this week are all spaced ≥27 minutes (synth #83). litellm `kiyeonjeon21`'s budget triplet (synth #77) was spaced over hours. continue/cline/ollama have not produced multi-open same-author bursts in the W17 dataset at all. The 9-second `aibrahim-oai` doublet is **the tightest same-author multi-open spacing observed in W17**.

## Predictive value

If this lens holds, expect:

1. **#19526 and #19524 to merge or close as a coupled pair** (within hours of each other, not days), even though they are not declared stacked. If they merge >24h apart, the lens weakens.
2. **A third codex-mcp PR by `aibrahim-oai` within ~24h** completing the surface-pivot triplet (the abandon-then-double-open shape predicts a third move on the new surface).
3. **No corresponding doublet from co-author `mzeng-openai`** (the original mcp-policy cohort partner) — the abandon-then-pivot is a *single-author* maneuver, not a cohort coordination.

Failure of any of these would trim the lens; falsification of all three would retire it.

## Distinctness from prior synth

| Synth | Pattern | Spacing | This synth differs by |
|---|---|---|---|
| #47 | Same-author rapid-fire doublet on adjacent surfaces | ~minute | Sub-10s spacing (below typing latency) |
| #62 | Same-author CI micro-doublet across fail→success | ~minute, fix-relationship | No fix-relationship; both fresh opens |
| #65 | Single-author micro-burst with self-merge inside | tens of minutes, includes merge | No merge inside; pure open burst |
| #67 | Declared vs inferred multi-PR sequences | varies | Inferred (no declaration), and *sub-typing-latency* timing is the inference signal |
| #77 | Single-author budget surface triplet | hours | Sub-10s, not hours |
| #83 | Single-author ~30m metronome | ~30m | Sub-10s, two-event burst not sustained metronome |

Synth #85 is the **tightest-spacing bin** in the same-author multi-open taxonomy.
