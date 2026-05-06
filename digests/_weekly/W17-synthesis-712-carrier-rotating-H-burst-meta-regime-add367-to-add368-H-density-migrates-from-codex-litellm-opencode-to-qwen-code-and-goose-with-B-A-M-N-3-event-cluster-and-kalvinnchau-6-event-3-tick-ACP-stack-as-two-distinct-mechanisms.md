# W17 Synthesis #712 — Carrier-rotating H-burst meta-regime: force-push H-density migrates from W18-day-1 primary carriers (codex/litellm/opencode/gemini-cli) at Add.367 to formerly-silent secondary carriers (qwen-code, goose) at Add.368, with B-A-M-N's same-author 3-event H-cluster on qwen-code (#3856 + #3849 + #3848 in 22-minute window) and kalvinnchau's 6-event 3-tick ACP stack on goose (#9030 + #9040) representing two distinct mechanisms (single-author rebase-cleanup vs maintainer ACP-protocol iteration), establishing that H-burst is a meta-regime that rotates carriers tick-over-tick rather than a single-carrier saturation event

**Anchor windows**: 
- Add.367 H-distribution (2026-05-05T22:30Z–23:09Z): 12 H-events / 5 carriers / 39min — primary carriers codex (6), litellm (2), opencode (1), gemini-cli (1), goose (2)
- Add.368 H-distribution (2026-05-05T23:09Z–2026-05-06T00:02Z): 14 H-events / 5 carriers / 54min — primary carriers codex (6), gemini-cli (2), litellm (1), goose (2), **qwen-code (3 NEW)**, opencode (0)

**Anchor signal**: H-burst total count is **stable** (12 → 14, +17%) but the **carrier distribution shifts dramatically**:

| carrier | Add.367 H | Add.368 H | Δ | classification |
|---|---|---|---|---|
| codex | 6 | 6 | 0 | persistent-primary |
| litellm | 2 | 1 | -1 | declining |
| opencode | 1 | 0 | -1 | exited-H-state |
| gemini-cli | 1 | 2 | +1 | stable |
| goose | 2 | 2 | 0 | persistent-secondary |
| **qwen-code** | **0** | **3** | **+3** | **NEW H-state entrant** |
| crush | 0 | 0 | 0 | absent |

The opencode→0 + qwen-code→3 swap is the signature of a **carrier-rotating meta-regime**: total H-volume is conserved (or grows slightly) while the carrier-set with H-density rotates. This falsifies the Add.367 hypothesis that "W18-day-1 H-burst regime" was a single-event spike on the primary 4 carriers; it is instead a **meta-regime that persists by rotating carriers**.

## The two H-mechanisms in tension

Add.368 reveals two distinct H-generation mechanisms:

### Mechanism 1: Same-author rebase-cleanup burst (B-A-M-N on qwen-code)

| PR | head SHA (Add.368) | head SHA (Add.367) | force-push timestamp | title |
|---|---|---|---|---|
| [#3856](https://github.com/QwenLM/qwen-code/pull/3856) | `5cd5c3f6ccf0` | `ecbbba1595b1` | 2026-05-05T23:55:43Z | `feat(cli): polish --add-dir / --include-directories feature` |
| [#3849](https://github.com/QwenLM/qwen-code/pull/3849) | `a8ff9b9107ac` | `0c2876fb8da3` | 2026-05-05T23:56:00Z | `feat(models): add cross-authType model resolution to ModelRegistry and ModelsConfig` |
| [#3848](https://github.com/QwenLM/qwen-code/pull/3848) | `aebe16bd72ee` | `a0daf50c065f` | 2026-05-05T23:35:33Z | `fix(memory): route auto-memory recall selector to fast model` |

**Burst geometry**: 3 H-events on **disjoint surfaces** (`cli`, `models`, `memory`), all by **B-A-M-N**, within a **22-minute envelope** (23:35:33Z → 23:56:00Z). Surface disjointness rules out a single rebase-onto-trunk explanation — this is a **per-PR rebase**, where the author worked through their own open-PR-stack one PR at a time. The 17-second gap between #3856 and #3849 (23:55:43Z → 23:56:00Z) is **scripted-pace** (sub-30s, below manual-git threshold), suggesting the last 2 PRs were force-pushed via a single batch tool. The earlier #3848 at 23:35:33Z is **20 minutes prior**, consistent with a manual rebase followed by a script run.

**Mechanism**: B-A-M-N opened these PRs over multiple days (#3848 oldest at 2026-05-05T10:25:54Z = 13 hours pre-burst). After 13 hours of accumulated upstream changes, the author rebased their entire open-PR-set in one session. **B-A-M-N is a contributor without merge-rights** (qwen-code maintainer cohort is different), so this is a **contributor-side cleanup burst**, not a maintainer release coordination.

### Mechanism 2: Maintainer ACP-protocol iteration (kalvinnchau on goose)

| PR | tick-by-tick head SHA progression | total H-events |
|---|---|---|
| [#9030](https://github.com/block/goose/pull/9030) | Add.366 `19de7e853edd` → Add.367 `01165f276b5c` → Add.368 `b35dafc40e0f` | 3 H-events / 3 ticks |
| [#9040](https://github.com/block/goose/pull/9040) | Add.366 `e743e55a7d46` → Add.367 `c288a6e60e18` → Add.368 `47e5ca06a41d` | 3 H-events / 3 ticks |

**Density**: 6 H-events / 2 PRs / 3 ticks = **1 H-event per PR per tick**, sustained across **3 consecutive ticks** (Add.366, Add.367, Add.368). This is the **highest sustained author-stack H-density of W17–W18 on record** (previous record: rhan-oai J→H_sync_3-of-3 was 1 tick, not sustained).

**Mechanism**: kalvinnchau is iterating on the **ACP (Agent Client Protocol) provider catalog migration** stack — a non-trivial multi-PR refactor where each push presumably addresses CI feedback or maintainer review. kalvinnchau **is a goose maintainer** (carries merge-rights inferred from prior W17 cadence), so this is a **maintainer-side iteration burst**, opposite mechanism from B-A-M-N's contributor-side cleanup.

## Why the rotation?

Hypothesis: H-burst is a **work-cycle phenomenon**, not a calendar phenomenon. Each carrier has its own work-cycle period; when a carrier's primary contributors enter their "force-push iteration" phase (typically end-of-workday wrap-up or post-CI-feedback batch), H-events spike. Different carriers have different time-zone-shifted work cycles:

- **codex / opencode / litellm**: US-Pacific evening cycle (peaks 22:00–24:00Z)
- **gemini-cli**: also US-Pacific, but with bot-driven release cherry-picks creating noise
- **qwen-code**: Asia-Pacific (Beijing/Shanghai) cycle — B-A-M-N's 23:30–23:56Z events are **morning-PRC time** (07:30–07:56 UTC+8), consistent with start-of-workday rebase
- **goose**: mixed (Block has US + EU contributors)

The Add.367→368 rotation therefore reflects the **handoff from US-evening cycle (opencode 0 H, litellm declining) to PRC-morning cycle (qwen-code 0→3 H)**. Predict at Add.369 (one tick later, closer to PRC business-day midpoint): qwen-code H-events sustain or grow; codex H-events decline as US-Pacific contributors hit the late-night cliff.

## Falsifying the alternative: was Add.367's H-burst a one-off?

Add.367 declared an "H-burst regime" based on single-tick density (12 events / 5 carriers). If H-burst were a one-off spike, Add.368 would show **<8 events / ≤3 carriers**. Observation: Add.368 has **14 events / 5 carriers** — sustained, not spike. The regime is real and persistent; Add.367's framing was correct in declaring a regime, but the carrier-rotation behavior was unanticipated.

## Cross-mechanism predictions

- **P-712.A**: At Add.369, qwen-code H-events ≥2 (sustained). If 0, B-A-M-N's burst was a single-session cleanup, not the start of a PRC-cycle H-wave.
- **P-712.B**: At Add.369, kalvinnchau ACP-stack (#9030, #9040) has ≥1 more H-event each, OR ≥1 PR merges. The 1/PR/tick density either continues (sustained iteration) or terminates (merge or stall). It cannot stay frozen — frozen-for-1-tick after 3 sustained H-ticks would be the strongest signal.
- **P-712.C**: At Add.369, the **opencode H count remains 0** (carrier exited the H-state and won't re-enter within 1 tick). If opencode H ≥1 at Add.369, the rotation hypothesis is weakened — H-state is not exclusive across carriers but rather carrier-independent and occasionally co-firing.
- **P-712.D**: Total H-volume across 7 carriers stays in [10, 18] band at Add.369 (regime-persistence). If <8 or >22, regime has ended or escalated to a different state.

## Tooling implication

The H-burst meta-regime suggests the OMR classifier should be **carrier-stratified** rather than carrier-aggregated. Per-carrier H-density is a noisy signal due to rotation; the **set of carriers with H-density > 0 in last 2 ticks** is more stable. Recommend dispatcher gate on: "5 of 7 carriers had ≥1 H-event in the last 2 ticks" → meta-regime active. Add.367 alone: 5/7 (codex, litellm, opencode, gemini-cli, goose). Add.368 alone: 5/7 (codex, litellm, gemini-cli, goose, qwen-code). **Last-2-tick union: 6/7 (everything except crush)**. The meta-regime classifier fires.
