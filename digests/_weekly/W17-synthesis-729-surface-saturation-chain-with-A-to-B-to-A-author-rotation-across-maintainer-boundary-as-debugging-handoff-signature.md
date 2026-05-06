# W17 Synthesis #729 — Surface-saturation chain with A→B→A author rotation across maintainer boundary as a debugging-handoff signature distinct from same-author surface chains and disjoint-author cross-ticking

**Anchor window:** 2026-05-06T01:21:52Z → 2026-05-06T06:33:14Z (5h11m22s, codex bwrap surface), against the 2026-05-06T04:30:21Z → 2026-05-06T06:39:21Z (2h09m, opencode desktop/ surface) same-author baseline.
**Anchor carriers:** openai/codex (rotation chain), anomalyco/opencode (same-author baseline), block/goose (single-author surface ownership comparison).
**Lens:** prior synths analyze same-surface multi-PR chains either as (a) **same-author repeat events** (synths #92, #94, #96, #727) or (b) **independent same-author cross-ticking** (synths #582, #725). This synth introduces a third category: **A→B→A author rotation on a shared surface across a maintainer boundary**, where author B's PR is **causally downstream** of A's first PR and **causally upstream** of A's second PR. This pattern is the carrier-side signature of a **debugging handoff**, not a coordination cluster.

## Why this is distinct from prior synth (W17 #720–#728)

- **#92, #94, #96, #727**: same-author surface chains. Author identity invariant across the chain.
- **#582**: time-of-day clustering — author identity not tracked.
- **#725**: cross-carrier same-author doublet — explicitly intra-author.
- **#726**: bot-fanout vs. bot↔human-near-coincidence — bot-endpoint coupling, not author rotation.
- **#728**: silence configuration — explicitly anti-event.
- This synth (#729) is the **first to characterize** A→B→A rotations where the round-trip carries diagnostic structure: A ships a release, B fixes A's regression, A ships the corrected release. The rotation is not an "independent two-author cluster on the same surface" but a **single causal chain** where B is a transient participant.

## The bwrap rotation chain (codex)

| PR | author | mergedAt | head SHA | role in chain |
|---|---|---|---|---|
| [openai/codex#21256] | bolinfest (A) | 2026-05-06T00:15:46Z | `3ec18a2c` | A₀: publish standalone bwrap artifacts (precursor) |
| [openai/codex#21257] | bolinfest (A) | 2026-05-06T01:21:52Z | `a736cb55` | A₁: bundle standalone bwrap on Linux (release) |
| [openai/codex#21285] | viyatb-oai (B) | 2026-05-06T05:22:02Z | `9766d3d5` | B: fix(bwrap) emit libcap after standalone archive (handoff) |
| [openai/codex#21312] | bolinfest (A) | 2026-05-06T06:33:14Z | `22326e26` | A₂: bundle bwrap with Linux DotSlash artifact (post-fix release) |

**Properties:**
- **Surface invariant**: all four PRs touch the bwrap packaging path.
- **Author rotation pattern**: A→A→B→A, with B (viyatb-oai) appearing exactly once and bolinfest returning to ship the post-fix variant.
- **Causal chain**: A₁'s `a736cb55` exposed a libcap ordering bug; B's `9766d3d5` patched it; A₂'s `22326e26` consumed the patched output to ship the DotSlash variant.
- **Inter-merge gaps**: A₀→A₁ = 1h06m06s, A₁→B = 4h00m10s, B→A₂ = 1h11m12s.
- **Gap signature**: the **B-handoff gap (4h00m10s) is the longest** in the chain — consistent with B needing to identify, fix, and merge A's regression before A can resume.

## Three structural comparisons

### Comparison 1 — vs. Brendonovich same-author chain (anomalyco/opencode desktop/)

| PR | author | mergedAt | head SHA |
|---|---|---|---|
| [anomalyco/opencode#25968] | Brendonovich | 2026-05-06T04:30:21Z | `031a0cc8` |
| [anomalyco/opencode#25972] | Brendonovich | 2026-05-06T04:44:40Z | `7c8cf6ca` |
| [anomalyco/opencode#25976] | Brendonovich | 2026-05-06T06:39:21Z | `acca2e92` |

The Brendonovich chain is **3 PRs, 1 author, 2h09m total span**. Inter-merge gaps 14m19s → 1h54m41s show **monotonic gap shrinkage** (after the initial fast doublet). The bwrap chain shows **non-monotonic gaps** (1h06m → 4h00m → 1h11m): the long middle gap is the diagnostic signature of the handoff. **Same-author chains do not exhibit this U-shape.** The U-shape is the synth #729 fingerprint.

### Comparison 2 — vs. goose ACP-surface 2-author chain

| PR | author | mergedAt | head SHA |
|---|---|---|---|
| [block/goose#9000] | kalvinnchau (A) | 2026-05-05T01:39:08Z | `2fe4c3d0` |
| [block/goose#9023] | jh-block (B) | 2026-05-05T21:11:20Z | `8be5304d` |
| [block/goose#9030] | kalvinnchau (A) | 2026-05-06T01:50:48Z | `b17fd4f2` |

**This is a second instance of the A→B→A pattern** in a different carrier and surface. kalvinnchau A₁ #9000 (`feat(acp): replace raw config and secret methods`) → jh-block B #9023 (`fix(acp): synchronously reap ACP child to avoid SIGCHLD race`) → kalvinnchau A₂ #9030 (`feat: move goose2 provider catalog behind ACP layer`). Inter-merge gaps: 19h32m → 4h39m. The B-handoff gap is **shorter than A→B**, opposite to the bwrap chain — but the **author rotation A→B→A is preserved**. This shows the pattern is **carrier-agnostic** and **timescale-agnostic** (codex's chain is 5h, goose's is 24h+).

### Comparison 3 — vs. qwen-code single-author multi-day chain (NOT a rotation)

| PR | author | mergedAt | head SHA |
|---|---|---|---|
| [QwenLM/qwen-code#3834] | doudouOUC | 2026-05-05T02:15:17Z | `2c93fd67` |
| [QwenLM/qwen-code#3833] | doudouOUC | 2026-05-05T11:25:00Z | `07441cc1` |
| [QwenLM/qwen-code#3832] | doudouOUC | 2026-05-06T03:14:03Z | `2bd4aa1b` |

The doudouOUC sdk-python chain is **3 PRs, 1 author, 25h span**, all on the release-helper surface. Author rotation is absent. This is the **null case** — surface ownership without handoff — and confirms that the bwrap and ACP rotations are **not just "two authors happen to touch the same surface"** but carry the additional structural feature of A returning to close the loop.

## The 11-PR catalog of rotation candidates this week (W17)

Cross-referencing addenda for any A→B→A or A→B→C→A multi-author surface chain:

1. [openai/codex#21256] bolinfest A₀
2. [openai/codex#21257] bolinfest A₁
3. [openai/codex#21285] viyatb-oai B
4. [openai/codex#21312] bolinfest A₂  ← bwrap chain closure
5. [block/goose#9000] kalvinnchau A₁
6. [block/goose#9023] jh-block B
7. [block/goose#9030] kalvinnchau A₂  ← ACP chain closure
8. [BerriAI/litellm#27268] oss-agent-shin (B-bot, `cb567e5a`) — fixes Prometheus label counts
9. [BerriAI/litellm#27271] ishaan-berri (A, `c32ad908`) — re-fixes the same Prometheus label counts (same title prefix, same surface)
10. [google-gemini/gemini-cli#26542] galz10 (A, `3627f477`) — original YOLO/AUTO_EDIT fix
11. [google-gemini/gemini-cli#26534] joshualitt (B, `80d26905`) — adjacent core fix on the same release branch

Items 8–9 are a **bot-A→human-A pair** (degenerate rotation: B is a bot replaying the human's fix), the case synth #726 captured at the seconds-scale; here it appears at **60m+ scale**, providing the bridge between #726's bot-fanout and #729's human-only A→B→A.

Items 10–11 are an **A→B without return** (A₂ has not landed yet), the **incomplete-rotation precursor** state. If galz10 returns with another YOLO/AUTO_EDIT fix in the next 24h, this becomes a third confirmed rotation chain.

## Mechanism: why the U-shape gap signature

The B-handoff inter-merge gap is dominated by **diagnostic latency** (B must identify the regression in A's PR), not by maintainer-bandwidth scheduling. A's return gap is dominated by **rebase-and-ship latency** (A must consume B's fix and prepare the post-fix variant). Same-author chains lack the diagnostic-latency component, so their gaps are dominated by the much-shorter rebase-and-ship latency. This predicts:

- **B-handoff gaps cluster around the carrier's typical regression-discovery time** (codex bwrap: 4h; goose ACP: 19h, reflecting the higher complexity of the goose2 provider migration).
- **A-return gaps cluster around the carrier's typical ship-loop time** (codex: 1h11m; goose: 4h39m).
- **Same-author gaps cluster only around ship-loop time** (Brendonovich: 14m, 1h54m).

## Predictions falsifiable at Add.378 / next 48h

- bolinfest opens PR #21313+ on the bwrap surface within 6h, OR the chain terminates at A₂. **Falsified** if a 5th bwrap PR lands AND the author is not bolinfest (would require A→B→A→C extension, a new pattern).
- galz10 opens a second YOLO/AUTO_EDIT-class fix within 48h of #26542, completing items 10–11 into a third A→B→A. **Falsified** if galz10 stays absent and joshualitt's #26534 is followed by a different author.
- The B-handoff gap distribution across all confirmed rotations remains in the 4h–24h band (no rotation has B-gap below 1h or above 48h). Test by accumulating instances over W18.
- A second carrier exhibits the bot-A→human-A degenerate rotation (litellm #27268↔#27271) at the same surface within W18. **Falsified** if no other carrier fires this pattern in 7 days.
- The doudouOUC sdk-python chain remains an A-only chain (no B handoff). **Falsified** if a second author lands a sdk-python release-helper PR before doudouOUC's next.

## Cross-references

- Add.376 (bwrap 2-PR chain initial observation, falsification of single-tick triplet).
- Add.377 (bwrap 3-PR chain closure with #21312, goose #9030 ACP chain closure observation).
- Synth #582 (circadian clustering — provides the 24h-scale frame the goose chain operates within).
- Synth #725 (cross-carrier same-author doublets — the explicit-intra-author baseline that #729 contrasts against).
- Synth #726 (bot-fanout vs bot↔human-near-coincidence — provides the bot-A→human-A degenerate-rotation precedent).
- Synth #727 (sub-minute pre-batched same-author doublets — the opposite extreme of the gap distribution).
- Synth #728 (silence-as-information — the rotation chain operates **inside** the silence regime: most carriers were silent during the 5h11m bwrap chain).
