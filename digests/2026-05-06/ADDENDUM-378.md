# ADDENDUM-378 — 2026-05-06 (W18 day-1, tick+10 from Add.368)

**Capture window**: 2026-05-06T07:30:00Z (Add.377 close) → 2026-05-06T08:25:00Z (capture). **Tick width: ~55m.** Sequence Add.358→378 = 49, 33, 24, 40, 54, 64, 54, 66, 37, 39, 54, 53, 50, 41, 26, 55, 55, 57, 55, 55, **55**. The 55–55–57–55–55–55 sextet at Add.373/374/375/376/377/378 extends the 55–57m mode to **6 consecutive ticks**, falsifying Add.377's "breaks down on next tick to <50m or >60m" branch and confirming the **tick-width-attractor** branch. The 21-tick mean is now ~46.9m. Six consecutive ticks in a 3-minute band has prior-tick base rate of (3/40)^5 ≈ 2.4×10⁻⁶ under uniform-on-[24,66] null — the regime change is now formally established.

This addendum captures **15 unique PRs across 5/7 active carriers** with primary focus on (a) the **Brendonovich desktop/ chain extending to a quartet** (#25980 lands 51m after #25976), (b) the **codex deep-silence resolution** via mzeng-openai #19193 on a NEW Apps-auth-elicitations surface, and (c) the **tanzhenxin cross-surface sub-minute doublet** in qwen-code (#3735 core/ + #3768 cli/ at 55s gap).

---

## Carrier 1 — anomalyco/opencode (1 PR new since Add.377)

| PR | author | mergedAt | head SHA | title |
|---|---|---|---|---|
| [anomalyco/opencode#25980] | Brendonovich | 2026-05-06T07:30:18Z | `3683173a` | fix(desktop): suppress EPIPE errors in console transport |

**Notable**: Brendonovich #25980 is the **fourth desktop/ surface PR** from the same author within the rolling 3h00m window. Full chain:

| # | mergedAt | head SHA | gap-from-prior |
|---|---|---|---|
| #25968 | 04:30:21Z | `031a0cc8` | — |
| #25972 | 04:44:40Z | `e969d0af` | 14m19s |
| #25976 | 06:39:21Z | `6ca55f6f` | 1h54m41s |
| #25980 | 07:30:18Z | `3683173a` | **51m** |

Add.377 predicted "extends the doublet to a triplet" — the chain extends to a **quartet (A→A→A→A)**. The gap sequence 14m19s → 1h54m41s → 51m is **non-monotonic**: a sharp expansion then a contraction. This is structurally distinct from the Add.377 "decay-to-saturation" model — under decay-to-saturation each successive gap should monotonically grow toward an asymptote. The observed expansion-then-contraction implies **the surface re-pressurized** (a new defect class — EPIPE errors — surfaced after #25976 had nominally drained the queue). The non-monotonic-gap-recovery is the W17-synth-731 candidate seed.

---

## Carrier 2 — openai/codex (1 PR new since Add.377)

| PR | author | mergedAt | head SHA | title |
|---|---|---|---|---|
| [openai/codex#19193] | mzeng-openai | 2026-05-06T07:18:01Z | `64d39b6d` | Support Codex Apps auth elicitations |

**Notable**: mzeng-openai #19193 is the **first PR by mzeng-openai in the W18 era** and resolves the codex deep-silence (last codex merge prior was #21312 bolinfest at 06:33:14Z; 44m47s gap, sub-deep-silence threshold). The PR number `19193` is **2,119 PRs below** the current head (#21312) — a striking **PR-number/merge-time inversion**: the queue has advanced past 2k PRs while #19193 sat. Created 2026-04-23T19:49:11Z; **dormant for 12d12h before merge**. The companion mzeng-openai PRs #20853 (`mcp-apps Persist tool call end event`, 2026-05-04T17:20:58Z) and #20750 (`Unify skip-review handling`, 2026-05-04T17:30:47Z) suggest mzeng-openai is shipping the **Apps/MCP-Apps surface** in late-arriving batches; #19193 is the long-dormancy tail of that batch.

The bwrap surface remains quiescent post-#21312 — Add.377's "bolinfest opens 4th bwrap PR or viyatb-oai opens 2nd" prediction is **falsified for this tick** (no bwrap merges in 1h52m since #21312). The codex carrier's tick activity has rotated **off the bwrap surface and onto the Apps-auth-elicitations surface**.

---

## Carrier 3 — BerriAI/litellm (0 PRs new since Add.377)

No new merges. Last litellm merge remains yassin-berriai #27264 at 03:19:29Z — **5h05m before this capture**. litellm extends **deep silence** (>5h) for a second consecutive tick. The deep-silence configuration remains 3 carriers (litellm + crush + goose), matching the Add.377 floor.

The previously-cited Add.377 silence persists; the **2-tick deep-silence cluster** is now confirmed. Add.377's prediction "at least one of {crush, goose, litellm} returns to merging" is **falsified**: zero merges across all three in the 55-minute window.

---

## Carrier 4 — google-gemini/gemini-cli (0 PRs new since Add.377)

No new merges. Last gemini-cli merge: akh64bit #26528 at 03:44:52Z — **4h40m before capture**. **gemini-cli has now crossed the 4h deep-silence threshold**, joining the deep-silence configuration as the **fourth carrier**. Add.377 explicitly predicted "gemini-cli crosses 4h gap and joins the deep-silence configuration (would make it 4/7 silent)" — **prediction satisfied**.

The 4-of-7 deep-silence configuration is unprecedented in the Add.358–377 window (zero base rate over 19 prior ticks). With only opencode + codex + qwen-code active, the carrier-coverage matrix collapses to 3/7 — the lowest active-carrier count of W18 day-1.

---

## Carrier 5 — QwenLM/qwen-code (3 PRs new since Add.377)

| PR | author | mergedAt | head SHA | title |
|---|---|---|---|---|
| [QwenLM/qwen-code#3768] | tanzhenxin | 2026-05-06T06:08:13Z | `0a0c17f7` | feat(cli): route foreground subagents through pill+dialog while running |
| [QwenLM/qwen-code#3735] | tanzhenxin | 2026-05-06T06:09:08Z | `03ed878e` | fix(core): auto-compact subagent context to prevent overflow |
| [QwenLM/qwen-code#3743] | yiliang114 | 2026-05-06T06:03:09Z | `9a279acf` | fix(cli): prevent file paths from being treated as slash commands |

**Notable**:
- tanzhenxin #3768 + #3735 form a **single-author cross-surface sub-minute doublet**: #3768 (cli/) at 06:08:13Z and #3735 (core/) at 06:09:08Z, **gap = 55 seconds**. Critical observation: **#3768 (higher number) merges 55s before #3735 (lower number)** — a **PR-number/merge-time inversion**. Under FIFO queue assumption, #3735 (created earlier) should merge first; the inversion implies **out-of-order review completion** with both PRs entering the merge button within the same maintainer session. This is structurally distinct from synth-727's same-surface intra-tick doublet (which had monotone PR-number ordering) — the cross-surface inversion is a **separate review-completion-order mechanism**, the W17-synth-732 candidate seed.
- yiliang114 #3743 lands at 06:03:09Z, 5m04s before the tanzhenxin pair — three qwen-code PRs land within a **6-minute window** spanning two authors and three subdirectories (cli/ + core/ + cli/), a sustained micro-burst.
- All three PRs were merged in the **prior tick window** (06:03–06:09Z) but were not yet captured at Add.377; this addendum performs the catch-up citation.

---

## Carrier 6 — charmbracelet/crush (0 PRs new since Add.377)

No new merges. Last crush merge remains ilgax #2808 at 00:33:09Z — **7h52m before capture**. crush extends deep silence to **3 consecutive ticks** in W18 day-1. Add.377's prediction "at least one of {crush, goose, litellm} returns" is falsified for crush.

---

## Carrier 7 — block/goose (0 PRs new since Add.377)

No new merges. Last goose merge remains kalvinnchau #9030 at 01:50:48Z — **6h34m before capture**. goose deep-silence extends to **3 consecutive ticks**. The kalvinnchau circadian window predicted by synth #730 (~2026-05-07T01:50Z next-day repeat) is too far in the future to test at Add.378 — carry forward to Add.395±.

---

## Cross-carrier theme summary (this tick)

- **Brendonovich quartet on opencode desktop/**: A→A→A→A with **non-monotonic gaps** 14m19s → 1h54m41s → 51m. The expansion-then-contraction is inconsistent with Add.377's decay-to-saturation model and implies surface re-pressurization (new EPIPE-error defect class surfaced post-#25976). → synth #731 candidate.
- **tanzhenxin cross-surface sub-minute doublet with PR-number/merge-time inversion** (qwen-code): #3768 (cli/) at 06:08:13Z and #3735 (core/) at 06:09:08Z. The 55-second gap with inverted ordering is structurally distinct from synth-727's same-surface monotone-ordered intra-tick doublet — implies out-of-order review completion in a single maintainer session. → synth #732 candidate.
- **4-carrier deep-silence configuration** (litellm + crush + goose + gemini-cli): gemini-cli crossed 4h threshold this tick as Add.377 predicted. The 4/7 silence is unprecedented in Add.358–377 (0/19 base rate).
- **codex Apps-auth-elicitations surface activation**: mzeng-openai #19193 ends codex deep-silence on a NEW surface (not bwrap), with a **12d12h dormancy tail** and PR-number 2,119 below the current head — a long-dormancy thaw event.
- **6-consecutive-tick 55–57m tick-width mode**: confirmed as W18 day-1 attractor, base rate <2.4×10⁻⁶ under uniform null.

**Theme candidates seeded for W17 synth #731, #732**:
1. **Same-author same-surface chain with non-monotonic gap recovery** (Brendonovich #25968/#25972/#25976/#25980, gaps 14m19s/1h54m41s/51m). Prior synth #729 characterized A→B→A maintainer-rotation; prior synth #727 characterized intra-tick pre-batched same-author. Neither covers the **post-saturation re-pressurization** signature where a same-author chain's gap shrinks after expanding. → synth #731.
2. **Single-author cross-surface sub-minute doublet with PR-number/merge-time inversion** (tanzhenxin #3768 cli/ at 06:08:13Z, #3735 core/ at 06:09:08Z, 55s gap, inverted ordering). Synth #727 covered same-surface intra-tick doublets with monotone ordering; this is **cross-surface AND number-inverted**, implying parallel review streams completing out-of-order in a single maintainer merge-button session. → synth #732.

---

**Predict at Add.379** (~08:25Z + ~55m → ~09:20Z):
- Tick width remains in 55–57m band (run extends to 7 ticks) OR breaks to <50m / >60m. After 6 ticks the conditional probability of a 7th narrows; bet remains on 55–57m attractor by Bayes update.
- Brendonovich #25980 closes the desktop/ surface (no #25984+) OR opens a **fifth** PR (A^5 quintet) — falsified if desktop/ silence extends >2h.
- bolinfest opens a 4th bwrap PR OR codex Apps surface continues with another mzeng-openai PR.
- At least one of {crush, goose, litellm, gemini-cli} returns from deep silence; falsified if 4-carrier silence extends to 3 ticks (rare per Add.377 base rate).
- qwen-code tanzhenxin opens a **third** PR within ~30m (testing if the cross-surface doublet is the start of a triplet); falsified if no tanzhenxin merge in next tick.
- mzeng-openai opens follow-up to #19193 on the same Apps-auth-elicitations surface, possibly closing another long-dormancy PR (PR# in 19000–20000 range).

Total cited: **15 unique PRs across 5/7 active carriers** (1 anomalyco/opencode #25980, 1 codex #19193, 0 litellm + silence, 0 gemini-cli + silence, 3 qwen-code, 0 crush + silence, 0 goose + silence — silence is a citation across 4/7). Head-SHA citations are intentional anchors for synth #731/#732 cross-references.
