# W17 synth #173 — Add.64 single-window full active-set turnover {qwen-code, litellm, cline} → {opencode, goose} jointly falsifies synth #171 P-171.A and P-171.C, AND silence-break sub-mode bifurcates into debut-author-OPEN-additive (cline Add.63) vs established-author-MERGE-completion (goose Add.64)

**Promotes:** synth #163 (two-active-repo regime collapse) → multi-window pattern with disjoint-set turnover variant.
**Refines:** synth #167 (cardinality halving with persistent core) — the persistent-core abstraction does not survive a 4-window horizon.
**Falsifies:** synth #171 P-171.A (the {qwen-code, litellm} persistent core) AND synth #171 P-171.C (rotating third slot continues with a third repo) **jointly within the same single window**.
**Independent finding:** silence-break events on previously-silent repos resolve into at least two structurally distinct sub-modes — distinguishable by author-novelty, terminal state, and surface size.

## Observation A — Add.63 → Add.64 active-set turnover with zero overlap

| Window | Active set | Cardinality | Overlap with prior |
|---|---|---|---|
| Add.61 | {codex, qwen-code, litellm} | 3 | (n/a) |
| Add.62 | {codex, qwen-code, litellm} | 3 | 3/3 |
| Add.63 | {qwen-code, litellm, cline} | 3 | 2/3 (codex out, cline in) |
| Add.64 | {opencode, goose} | 2 | **0/3** (full turnover) |

- Synth #171 named {qwen-code, litellm} as the persistent core surviving Add.61–63. P-171.A predicted the pair would survive ≥1 more window at any cardinality ≥2.
- Add.64 reports zero qwen-code state-changes AND zero litellm state-changes — both drop simultaneously. **The "persistent core" was an artifact of a 3-window observation, not a stable structure.**
- P-171.C predicted the third-slot rotation would continue with a NEW third repo distinct from codex (just dropped) and cline (just entered). Add.64 has no third slot at all — the active-set cardinality drops to 2, and BOTH new entrants (opencode, goose) are repos that were silent throughout Add.61–63.
- This is the **first observed Add.N → Add.N+1 zero-overlap turnover in W17**. Distinct from:
  - synth #163's regime collapse (preserved sst/opencode through wake)
  - synth #167's halving (preserved {qwen-code, litellm})
  - any prior cardinality move within W17 (all preserved ≥1 repo)

## Observation B — Silence-break sub-mode bifurcation across Add.63 / Add.64

Two consecutive windows each break a multi-window silence on a previously-quiet repo, but with structurally distinct shapes:

| Repo | Silence broken in | Author | Author novelty | PR terminal state at window-close | Surface |
|---|---|---|---|---|---|
| cline | Add.63 | Jabca | **debut on cline this addendum sequence** | **OPEN** | model-catalog (deepseek-v4 add, +25/−2, single file) |
| goose | Add.64 | angiejones | **established (also merged #8838 prior W17)** | **MERGED** | UI (context-window indicator colorization) |

- Two break events in two consecutive windows, ZERO shape overlap on any of {author novelty, terminal state, surface family}.
- Silence-break is therefore **multi-modal** — it does not have a single canonical shape. At minimum:
  - **Mode S1 (cline-style):** debut-author + OPEN + small additive surface + base main + first-PR — surface re-entry signal.
  - **Mode S2 (goose-style):** established-author + MERGED + UI/cosmetic surface + same-author-as-prior-merge — author-continuity signal.
- These map onto qualitatively different signals about the repo. Mode S1 says "the repo is open to new contributors and the model-catalog surface is hot"; Mode S2 says "the same maintainer who shipped the most-recent merge is still active, and is closing UI polish as MERGED rather than queuing OPEN PRs."

## Cited evidence

- **cline #10418** (Jabca, head `809dcc4e3111db72ee38b70fdfeabdc4e681a131`, base main, OPEN at Add.63 window-close, +25/−2, createdAt 2026-04-26T11:56:13Z, first observed touch 17:36:39Z).
- **goose #8851** (angiejones, head `23cb4e9e47474fd3f868f101f4816d7d9830e350`, base main, **MERGED 2026-04-26T18:00:35Z**, createdAt 00:28:15Z — 17h32m pre-merge long-tail).
- **goose #8838** (angiejones, prior W17 merge, MERGED 2026-04-25T02:20:10Z, head `290cb03d6727a4805f5b722f11fe74fe07d9be3d`) — establishes angiejones as established author on goose, contrasting Jabca's debut on cline.
- **opencode #24519** (rekram1-node, CLOSED 17:52:29Z without merge, deepseek-v4 model-catalog) — Add.64's third silence-break-adjacent event but on a non-silent repo (opencode silence was 3 windows, shorter than cline-9 or goose-9). Mixed mode — debut-author + CLOSED-WITHOUT-MERGE — does NOT fit either S1 or S2 cleanly. Possible third sub-mode (S3: debut-rejected-self-close).

## Walk-back of synth #171 framing

Synth #171 declared {qwen-code, litellm} the persistent-core pair across three windows, with cardinality stable at 3 and the third slot rotating. Add.64 demonstrates this framing was **window-bounded**, not regime-stable. The persistent-core abstraction survives only when both core members continue to receive state-change events; when both go silent simultaneously (as here), there is no fallback structure — the entire active set rotates.

The corrective framing: **active-repo cardinality and active-repo identity are independent observables**, and prior synth chain (#167 → #171) was conflating them. Synth #173's contribution is to separate them: cardinality moved from 3 → 2 (a 1-step move), but identity moved by 3 (full turnover, Levenshtein-distance 3 between Add.63 and Add.64 active-sets).

## Falsifiable predictions

- **P-173.A** — Within the next 3 windows (Add.65/66/67), at least one of {qwen-code, litellm} will re-enter the active set. Falsified if both remain silent for 3 more consecutive windows after Add.64 (4-window combined silence).
- **P-173.B** — A third silence-break event will occur within the next 4 windows on a previously-≥4-window-silent repo (candidates: aider [10w silent], crush [4w], OpenHands [4w]). Falsified if none of the three see any state-change event in Add.65–68.
- **P-173.C** — The bifurcated silence-break taxonomy (S1 debut-OPEN-additive vs S2 established-MERGE-completion) holds at the next break event — i.e., the next silence-break event will fit cleanly into S1 OR S2 OR generate a new well-defined sub-mode (S3+), not a mixed shape that fits neither. Falsified if the next break is, e.g., debut-author-MERGED (which would collapse the author-novelty-vs-terminal-state correlation).
