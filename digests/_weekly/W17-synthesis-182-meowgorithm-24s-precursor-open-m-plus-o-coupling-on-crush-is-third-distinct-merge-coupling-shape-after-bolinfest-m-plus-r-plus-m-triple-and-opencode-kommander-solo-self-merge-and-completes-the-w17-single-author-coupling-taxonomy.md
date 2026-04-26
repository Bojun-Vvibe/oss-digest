# W17 synthesis #182 — meowgorithm 24s-precursor-open M+O coupling on crush is third distinct merge-coupling shape after bolinfest M+R+M triple and opencode kommander solo-self-merge and completes the W17 single-author coupling taxonomy

**Pattern.** Add.68 documents charmbracelet/crush meowgorithm filing **#2722** (`hook-skill` branch, head `ba8e5eb98828ddae8c9d7eb4b6ae93b55c3cb02d`) at **21:04:48Z**, then merging **#2721** (`rename-shift` branch, head `024c9d2243f79939eed3830d946484c5cef516a7`) at **21:05:12Z** — a **24s precursor-open before sibling-merge**. Both PRs are by the same author, on disjoint surfaces (UI dialog box rendering vs hooks/skills config update).

**Three distinct W17 single-author coupling shapes are now observable in the same 35m02s Add.68 window:**

1. **M+R+M (bolinfest, openai/codex)** — Add.66/67 documented `M(#19683)@19:43:16Z + R(#19606 rebase#24)@19:43:44Z + M(#19606)@20:29:55Z`. Lifespan from first M to terminal M: **46m39s**. Inter-event gaps: 28s, 46m11s. Coupling driver: rebase precursor for merge of rebased PR.
2. **Solo-self-merge dependency-bump (kommander, sst/opencode)** — Add.68 documents `O(#24531)@20:26:19Z + M(#24531)@20:31:33Z`. Single-PR, sub-6m lifespan, no sibling event. Coupling driver: trivial dependency upgrade with auto-CI green path.
3. **M+O with 24s precursor-open (meowgorithm, charmbracelet/crush)** — Add.68 documents `O(#2721)@20:44:31Z + O(#2722)@21:04:48Z + M(#2721)@21:05:12Z`. Lifespan from #2721 open to its merge: **20m41s**. Critical timing: **#2722 opens 24s BEFORE #2721 merges**. Coupling driver: author queues the next PR in the dialog buffer immediately before clicking merge on the current PR.

**Why shape #3 is genuinely new.** Synths #97, #99, #166, #180 all framed bolinfest's stack-coupling as **rebase-followed-by-merge** (R precedes M; M is the terminal event). Synth #98 framed bot-driven mass-close sweeps as **same-second N-tuple closes** (no merges). Synth #178 documented cross-author shared-branch 4-stage lifecycle. **None** describe a topology where the **next PR opens before the current PR's merge** — all prior couplings have either (a) the new event after the merge, or (b) the new event being a non-merge transition (rebase, close).

**Sequence-shape comparison:**

| Shape | Primary author | Sequence | Inter-gap | Coupling driver |
|---|---|---|---|---|
| M+R+M | bolinfest | M…R…M | 28s, 46m11s | rebase-as-merge-precursor |
| Solo-self-merge | kommander | O…M | 5m14s | trivial-deps-CI-green |
| M+O-precursor | meowgorithm | O…O…M (with O→M = 24s) | 20m17s, 24s | author-queues-next-during-merge-click |

**Falsification target.** If meowgorithm's #2722 (`hook-skill`) merges within the next 60m without opening another PR before its own merge, M+O-precursor is one-shot orchestration noise rather than a stable shape. If meowgorithm fires another `O…O…M` triplet within W17, the shape promotes to a recurring meowgorithm signature distinct from bolinfest's M+R+M. **Watch:** crush PR feed for next single-author back-to-back-with-pre-merge-open.

**Cross-repo prediction.** All three shapes co-occurred within **35m02s** in distinct repos. If this density of distinct coupling shapes per ~35m window persists across 3 more Add.X cycles, the "single-author coupling taxonomy" is **W17-saturated at N=3 shapes** and synth #166's "rebase metronome" framing should be retired in favor of a 3-cell shape grid.

**Cited PRs:** crush #2721 (meowgorithm, MERGED 2026-04-26T21:05:12Z), crush #2722 (meowgorithm, OPEN 2026-04-26T21:04:48Z), opencode #24531 (kommander, MERGED 2026-04-26T20:31:33Z), codex #19683 (bolinfest, MERGED 2026-04-26T19:43:16Z), codex #19606 (bolinfest, MERGED 2026-04-26T20:29:55Z). Cross-reference: synth #97, #99, #166, #178, #180, Add.66, Add.67, Add.68 §3.
