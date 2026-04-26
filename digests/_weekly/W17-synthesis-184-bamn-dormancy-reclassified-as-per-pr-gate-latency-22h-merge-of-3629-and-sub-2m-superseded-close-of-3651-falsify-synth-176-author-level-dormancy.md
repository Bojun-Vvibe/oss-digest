# W17 Synthesis #184 — B-A-M-N "dormancy" reclassified as queue-clearing latency: 21h01m sub-merge of #3629 and sub-2m superseded-by-sibling close of #3651 falsify synth #176 author-level dormancy bifurcation

**Anchor window:** 2026-04-26T21:36:20Z → 21:59:06Z (22m46s).
**Anchor repo:** QwenLM/qwen-code.
**Anchor actor:** `B-A-M-N`.
**Parent synth:** #176 (author-level vs repo-level dormancy bifurcation; B-A-M-N classified as "breadth vs depth mode with trigger-CI empty-commit shape" and characterized as **dormant by author**).

## What synth #176 claimed

Synth #176 examined B-A-M-N's behavior across 4 simultaneously-open PRs (#3645, #3648, #3631, #3629) all >5h old at the time of writing, and concluded:

> "Author-level dormancy bifurcates from repo-level dormancy: B-A-M-N's repo (qwen-code) is highly active, but the author specifically is in silent-meta-touch mode with trigger-CI empty-commit shape — touching PRs without rolling heads, suggesting awaiting-review rather than awaiting-author."

The synth's structural commitment was that B-A-M-N's behavior was an **author-level state** (the author was in a quiescent mode), not a **per-PR state** (each PR was independently waiting on different gates).

## What Add.69 observed that #176 cannot accommodate

Three events inside a 22m46s window:

| PR | Title | Action | Time | Lifespan-to-action |
|---|---|---|---|---|
| #3651 | `refactor(config): dedupe QWEN_CODE_API_TIMEOUT_MS env override logic` | OPENED then CLOSED-without-merge | 21:36:20Z (open) → ~21:38Z (close) | **~2 minutes** |
| #3629 | `fix(config): support QWEN_CODE_API_TIMEOUT_MS across OAuth and non-OAuth paths` | MERGED | 21:59:06Z (head `5eb2406c03a851ecac794823b49794721a433b2e`) | **21h01m49s** from createdAt 2026-04-26T00:57:17Z |

These two PRs are **about the same env var (`QWEN_CODE_API_TIMEOUT_MS`) on the same config surface**. #3651 was opened as a refactor of code that #3629 was about to introduce; the close-without-merge inside ~2 minutes followed by the original (#3629) merging 21 minutes later is a **superseded-by-sibling close pattern** — the author chose the original implementation over the refactor and immediately retracted the redundant PR.

This sequence cannot be a "silent author in dormancy mode." It is **active triage with sub-2m decision latency on supersession**, plus **active 21h-old-PR-merge-execution**, both inside the same 22m46s window. The author was **not** dormant; the author was **clearing a queue** — slowly on #3629 (21h waiting for review/CI), instantly on #3651 (self-resolved supersession).

## The reclassification

Replace synth #176's "author-level dormancy" framing with **per-PR-gate latency taxonomy**:

- **#3629 (21h01m sub-merge):** gate was **external review/CI**; author idle on this PR but actively monitoring.
- **#3651 (sub-2m self-close):** gate was **self-recognized redundancy**; author detected sibling-supersession on the author's own surface and resolved without external input.
- **#3645, #3648, #3631 (still open at Add.69 close):** gates unknown; could be any of {external review, external CI, deliberate hold, awaiting upstream}. **Each PR is in its own state**, and the author is shepherding all of them simultaneously.

Per-PR-gate framing is **strictly more expressive** than author-level dormancy: it predicts that any of the four still-open B-A-M-N PRs can transition independently (merge, close, or head-roll) without requiring a global "author wakes up" event. Synth #176 implicitly required a global wake-up to explain merge bursts, which is now falsified — #3629 merged with **no observable wake-up signal** (no head-roll, no comment burst, no sudden activity on the other three PRs), it simply hit its review gate.

## Why this is also distinct from synth #98 (bot-driven sweep)

Synth #98 captured a **bot-driven sub-10s N=3 stale-PR mass-close sweep** — the close decisions were made by the bot in a deterministic batch on age criteria. Synth #184's #3651 close is **author-driven**, **single-PR**, and **content-driven** (supersession reasoning, not age). The two are at opposite ends of the close-without-merge spectrum: synth #98 is **bulk and age-keyed**, synth #184 is **single and content-keyed**.

## Why this is also distinct from synth #178 (cross-author shared-branch lifecycle)

Synth #178's lifecycle was multi-author on a single shared branch over multiple days. Synth #184 is **single-author on disjoint PRs over a single hour**. The lifecycle is intra-author and intra-window.

## Falsifiable predictions emitted

- **P184a:** within the next 24h, **at least one of the remaining 3 B-A-M-N PRs (#3645, #3648, #3631)** will either merge or close-without-merge **without** prior head-roll activity, demonstrating that each PR's gate is independent. If all 3 stay in their current state with no head-rolls and no resolutions, the queue-clearing-latency model needs further refinement (perhaps a partial dormancy still exists for sub-classes of PRs).
- **P184b:** **no global B-A-M-N "wake-up burst"** will be observed in the next 6h — i.e. there will not be a window with simultaneous activity on ≥3 of the 4 B-A-M-N PRs. If such a burst occurs, synth #176's author-level framing partially survives as a **post-quiescence wake-up sub-mode**.
- **P184c:** the next B-A-M-N close-without-merge (if any) will have median lifespan **<10 minutes** (matching #3651's sub-2m supersession profile); the next B-A-M-N merge will have median lifespan **>5h** (matching #3629's 21h profile). The two outcome modes are **bimodal in lifespan**, with closes-without-merge clustering at the short-lifespan tail and merges clustering at the long-lifespan tail.

## Cross-references

- Synth #176 — direct parent; partially superseded by this synth on the dormancy claim, retained on the trigger-CI empty-commit observation.
- Synth #98 — bot-driven sweep contrast.
- Synth #178 — cross-author multi-day lifecycle contrast.
- Add.68 §4 (B-A-M-N silent-meta-touch on #3645) — the observation that seeded synth #176; reread under #184's per-PR-gate framing, the silent-meta-touch is now interpreted as **awaiting-external-gate on #3645 specifically**, not as a global author state.
