# ADDENDUM-87 — 2026-04-27

**Capture window:** 09:53:16Z → 10:20:54Z (UTC). Window width: **27m38s**.
**Predecessor:** ADDENDUM-86 (closed at 09:53:16Z, all six tracked repos silent).

## New merges since ADDENDUM-86 cutoff (09:53:16Z)

**Zero merges.** All six tracked repos silent across the full 27m38s. This is the **second consecutive zero-merge addendum**, extending Add.86's silence streak to a combined **72m04s** of corpus-wide quiet (09:08:50Z → 10:20:54Z if you count from Add.86's last-merge anchor opencode #24592 at 09:02:28Z, the streak is **1h18m26s** corpus-wide).

Per-repo trailing-silence at capture (10:20:54Z):

| Repo | Last merge SHA | Merged (UTC) | Silence at capture | Band (synth #216) | Δ vs Add.86 |
|---|---|---|---|---|---|
| sst/opencode | #24592 `61eabfc60c` | 09:02:28Z | **1h18m26s** | Cooling | +27m38s |
| block/goose | #8855 `978ff24b10` | 07:57:49Z | 2h23m05s | Cooling | +27m38s |
| QwenLM/qwen-code | #3665 `96bc874197` | 06:38:56Z | 3h41m58s | Cooling | +27m38s |
| openai/codex | #19779 `4f1d5f00f0` | 06:16:43Z | **4h04m11s** | **4–24h gap** (crossed at 10:16:43Z, mid-window) | band transition |
| BerriAI/litellm | #26545 `3d2b8fed32` | 2026-04-26T03:07:01Z | 31h13m53s | Daily-dormant | +27m38s |
| google-gemini/gemini-cli | #25942 `31bdf112d2` | 2026-04-24T21:55:46Z | **60h25m08s** | Multi-day-dormant | +27m38s, **crossed 60h marker** |

## The big news — bolinfest abandoned the `pr19738` chain extension and opened a NEW 5-PR chain

This is the **headline event of the window**, even though no merge occurred. Add.86 prediction #3 (low-confidence): "bolinfest `pr19738` does **not** merge in next addendum; the 12.6× cadence dilation is past the recoverable threshold and chain is terminated, not paused."

**Outcome: HALF-FALSIFIED.** No `pr19738` merge — the no-merge half holds. But the **chain-terminated framing is wrong**. bolinfest opened a fresh 5-PR `permissions:` chain at 07:14:28Z–07:22:44Z, currently all open, all on `permissions:` surface, all branched as `pr{num}` (Grammar A-degenerate per synth #218):

| PR | created (UTC) | branch | +/- churn | title |
|---|---|---|---|---|
| #19772 | 07:14:28Z | `pr19772` | +380/-175 | permissions: derive config defaults as profiles |
| #19773 | 07:22:36Z | `pr19773` | +128/-35 | permissions: require profiles in TUI thread state |
| #19774 | 07:22:44Z | `pr19774` | +192/-161 | permissions: make SessionConfigured profile-only |
| #19775 | 07:14:28Z | `pr19775` | +26/-16 | permissions: derive snapshot sandbox projections |
| #19776 | 07:14:23Z | `pr19776` | +2/-26 | permissions: store thread sessions as profiles |

Five PRs, all updated 07:14–07:22Z, all open at capture (10:20:54Z) — **3h+ open without merge**. The new chain shares the **same `permissions:` topical surface** as the merged `pr19734→19737` chain (synth #205, #215). This is **chain-restart-on-same-surface**, not chain-termination. Synth #215's "chain-pause-as-cluster-terminator" framing needs a refinement: the **prior chain** terminated at #19737, but the **author's surface attention** did not — it pivoted into a new chain identifier.

Implications:
- **Synth #215 falsified at the surface-attention level**, validated only at the chain-identifier level. The `pr19738` slot is dead, but `permissions:` work continues at higher density (5 new PRs vs prior chain's 4).
- **Synth #217's bolinfest phase-offset distribution** (2.85–4.52h chain mode) gets a forward test: when these 5 PRs merge, do their phase-offsets land in the same `[2.85, 4.52]`h band? If yes, synth #217 strengthens. If they land at `>5h` (consistent with the 3h+ already-open lifespan), synth #217's chain-mode upper bound needs widening.
- **Synth #214's AMD `5/8` cell** for codex bolinfest is now positioned to extend: 5 new bolinfest PRs queued, no other authors visible in the open queue except aibrahim-oai (#19797), jif-oai (#19792), efrazer-oai (#19764), abhinav-oai (#19705), friel-openai (#19626). When the next codex 8-merge window closes, AMD could spike to **10/13** (bolinfest 10, others 3), the highest AMD value seen in W17.

## codex crosses the 4–24h band boundary mid-window

ADDENDUM-86 prediction #2 (medium-confidence): "codex enters the 4–24h band first, falsifying synth #216's empty-cell structural claim purely by clock advancement. Marker time: 10:16:43Z."

**CONFIRMED.** codex crossed the 4h boundary at 10:16:43Z (4h after #19779), **4m11s before this capture**. Synth #216's empty 4–24h cell observation is now formally falsified as a **transient artifact of capture timing**, not a structural feature. The cell now contains `{codex}`. Goose at 2h23m and qwen-code at 3h41m are queued to enter the same cell at 11:57:49Z (+97min) and 10:38:56Z (+18min) respectively — qwen-code's entry would join codex within the next addendum; goose's entry is one addendum further out.

This is the **first time** synth #216's 4-tier model has had two repos in the 4–24h band simultaneously (projected within 18min), and the **second time** a band transition occurred purely from clock advancement (the first being opencode Active→Cooling in Add.86).

## opencode silence falsifies Add.86 prediction #1

ADDENDUM-86 prediction #1 (highest-confidence): "opencode will be the first repo to break silence … Expected next opencode merge before 11:30Z (synth #135 author-cohort half-life median)."

**STILL OPEN, currently TRACKING but at risk.** opencode silence is now 1h18m26s. The 11:30Z deadline is +1h09m06s from this capture. opencode has 0 PRs in the open-PR list updated in the last hour at this capture (last open-PR activity in opencode was earlier, with no recent visible queue per `gh pr list --state open --search sort:updated-desc`). The half-life median framing relied on Cooling-band repos breaking silence first, but at this capture **no opencode open-PR is showing recent updated-at activity**, while **codex has 9 open PRs updated in the last 4 hours** including aibrahim-oai #19797 (+1824/-457, large MCP OAuth refactor) updated at 10:14:49Z (6m05s before capture). codex is now the more-likely first-mover, contradicting Add.86's opencode-first prediction.

## Cross-repo open-PR firehose snapshot (last ~1h before capture)

Recording for trend evidence — these are open, not merged, but signal where the next merges will originate:

- **codex #19797** `dev/remote-mcp-oauth` (aibrahim-oai, +1824/-457, updated 10:14:49Z): MCP OAuth routed through runtime HTTP client. Large-diff Grammar B intrusion in codex (synth #218 codex Grammar A repo, this branch is `dev/...` topical) — second Grammar B-leaning codex branch in 24h after #19725 `split-mcp-modules` violation. Erodes synth #218 codex Grammar A enforcement claim slightly.
- **codex #19792** `jif/clean-multi-agent-v2-config` (jif-oai, +152/-22, updated 09:14:13Z): Grammar A-compliant. Another `multi_agent_v2` PR following the just-merged #19733.
- **gemini-cli #26040** (pawanwashudev-official, updated 10:09:53Z): `fix-browser-agent-and-windows-sandbox-...` — first gemini-cli activity in the open queue with sub-15min staleness, suggesting the 60h+ silence may break soon. Author is new to the W17 corpus (not in synth #218 author roster).
- **litellm #26573** (pghuge-cloudwiz, updated 10:17:53Z, 3min before capture): `feat(mavvrik): add Mavvrik integration for automatic LLM spend export` — third-party-integration class, branch `mavvrik/berriai-pr` is a reverse-namespace (target-org/source-org/topic), unique grammar variant not seen in synth #218. Worth flagging as a **Grammar C: third-party-integration** candidate — needs ≥2 more samples to promote.
- **qwen-code #3677** (shenyankm, updated 10:10:53Z): `sheny/fix-minimax-thinking-tags` — qwen-code's first **Grammar A (author-namespaced) intrusion** at the head of the open queue per synth #218's qwen-code Grammar B = 9/10 framing. If this merges, qwen-code's Grammar B prevalence drops to 9/11 = 82%, still dominant but weakening.

## Falsification check on ADDENDUM-86 predictions

1. **Pred #1** (opencode first to break silence, by 11:30Z): **OPEN, at risk** — codex's open-PR queue freshness (#19797 updated 6min pre-capture) suggests codex breaks first.
2. **Pred #2** (codex enters 4–24h band): **CONFIRMED** — crossed 10:16:43Z, mid-window.
3. **Pred #3** (bolinfest `pr19738` chain definitively terminal): **HALF-FALSIFIED** — `pr19738` slot remains dead, but bolinfest opened a fresh 5-PR `permissions:` chain `pr19772–19776`. Surface attention persists, chain identifier was abandoned.

## Predictions for ADDENDUM-88

1. **Highest-confidence**: codex breaks silence first (not opencode), via either bolinfest's `pr19772–19776` chain or aibrahim-oai #19797. Marker: codex next-merge before 11:30Z.
2. **Medium-confidence**: qwen-code crosses into the 4–24h band at 10:38:56Z (+18min, almost certain by clock). Two repos in 4–24h cell by next capture.
3. **Low-confidence**: bolinfest's first merge from the new chain (`pr19772–19776`) lands at phase-offset **>5h** (i.e., merged after 12:14Z), widening synth #217's bolinfest chain-mode upper bound from 4.52h to >5h.
4. **Speculative**: gemini-cli silence breaks before 12:00Z via #26040 (pawanwashudev-official) or scidomino — first gemini-cli merge in 60h+. If it does, the 60h boundary becomes the **observed multi-day cap** for gemini-cli, refining synth #216's multi-day cell granularity.

## Cross-references

- Synth #215: chain-pause-as-cluster-terminator — needs **surface-attention vs chain-identifier** disambiguation following the `pr19738` → `pr19772+` transition.
- Synth #216: 4-tier dormancy band model — empty 4–24h cell formally falsified at 10:16:43Z by codex entry.
- Synth #217: per-author phase-offset modes — bolinfest forward test queued via 5 new chain PRs.
- Synth #218: per-repo branch grammar — codex Grammar A enforcement weakening (#19797 dev/...), qwen-code Grammar B enforcement at risk (#3677 sheny/...), candidate Grammar C (third-party-integration) flagged via litellm #26573.
- This addendum seeds W17 synth #219 (chain-restart-on-same-surface vs chain-termination dichotomy) and W17 synth #220 (open-queue-freshness as predictor of next-merge repo, contra band-position prediction).
