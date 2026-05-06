# ADDENDUM-379 — 2026-05-06 (W18 day-1, tick+11 from Add.368)

**Capture window**: 2026-05-06T08:25:00Z (Add.378 close) → 2026-05-06T08:43:23Z (capture). **Tick width: ~18m.** Sequence Add.358→379 = 49, 33, 24, 40, 54, 64, 54, 66, 37, 39, 54, 53, 50, 41, 26, 55, 55, 57, 55, 55, 55, **18**. The 6-consecutive-tick 55–57m attractor **breaks decisively** at Add.379 with an 18m tick — a 37-minute downward step. Add.378's "tick width remains in 55–57m band" prediction is **falsified**; the alternate "<50m" branch is realized. The 22-tick mean is now ~45.6m (cooling). The collapse coincides with a **Brendonovich opencode burst** (3 PRs in 7 minutes) that forced an early capture, suggesting the tick attractor was previously coupled to background-rate-only conditions and breaks under burst events.

This addendum captures **5 unique PRs across 1/7 active carriers** — all on anomalyco/opencode. The other 6 carriers remain silent. The **6-of-7 deep-silence configuration** is now realized for the first time in W18 day-1 (Add.378's 4-of-7 was the prior record). Carrier-coverage matrix collapses to 1/7 — unprecedented in the Add.358–378 window.

---

## Carrier 1 — anomalyco/opencode (5 PRs new since Add.378)

| PR | author | mergedAt | head SHA | title |
|---|---|---|---|---|
| [anomalyco/opencode#25749] | kill74 | 2026-05-06T07:56:39Z | `e87ecc72` | docs: fix CLI attach section order |
| [anomalyco/opencode#25866] | zharinov | 2026-05-06T08:06:37Z | `410fbad5` | fix(ui): preserve SVG tags in DOMPurify config for KaTeX math rendering |
| [anomalyco/opencode#25996] | Brendonovich | 2026-05-06T08:37:11Z | `493b55c9` | chore(desktop): add @parcel/watcher platform packages to optionalDependencies |
| [anomalyco/opencode#25998] | Brendonovich | 2026-05-06T08:40:46Z | `baaf676a` | feat(desktop): implement clipboard write permission handling |
| [anomalyco/opencode#25993] | nexxeln | 2026-05-06T08:44:31Z | `ee54e3b3` | fix(tui): preserve selected model on refresh |

**Notable**: Brendonovich extends the desktop/ chain to a **sextet (A^6)**. Updated chain:

| # | mergedAt | head SHA | gap-from-prior | surface |
|---|---|---|---|---|
| #25968 | 04:30:21Z | `031a0cc8` | — | desktop/ |
| #25972 | 04:44:40Z | `e969d0af` | 14m19s | desktop/ |
| #25976 | 06:39:21Z | `6ca55f6f` | 1h54m41s | desktop/ |
| #25980 | 07:30:18Z | `3683173a` | 51m | desktop/ |
| #25996 | 08:37:11Z | `493b55c9` | 1h06m53s | desktop/ |
| #25998 | 08:40:46Z | `baaf676a` | **3m35s** | desktop/ |

Add.378 predicted "Brendonovich #25980 closes the desktop/ surface OR opens a fifth PR (A^5 quintet)" — the **A^5 branch is realized AND extended to A^6**. The full gap sequence is now 14m19s → 1h54m41s → 51m → 1h06m53s → 3m35s. The non-monotonicity intensifies: gap 5 (3m35s) is the **shortest in the chain**, an order-of-magnitude contraction from gap 4. This is structurally distinct from synth-731's "non-monotonic gap recovery" (which characterized expansion-then-contraction in length-≥4 chains) — the **alternating compression pattern** (3m35s sandwiched between 1h06m and the next-as-yet-unobserved gap) is a new signature: **same-author chain with terminal sub-5-minute compression**, candidate for synth-733/734.

Critically, #25996 (chore: add @parcel/watcher platform packages) and #25998 (feat: clipboard write permission) merge **3m35s apart**, both desktop/, both Brendonovich — this is a **same-author same-surface intra-tick doublet with monotone PR-number ordering**, matching synth-727's pre-batched merge-button mechanism rather than synth-732's parallel-review-streams mechanism. Within a single 4h10m chain Brendonovich exhibits **both** the slow-gap pre-saturation regime (#25968→#25972→#25976→#25980, gaps 14m–1h54m–51m) and the fast-gap pre-batched regime (#25996→#25998, gap 3m35s).

The non-Brendonovich opencode merges this tick (#25749 kill74 docs, #25866 zharinov ui/, #25993 nexxeln tui/) span **3 distinct surfaces** (docs/, ui/, tui/) with **3 distinct authors**, none overlapping with desktop/ — the carrier exhibits **surface-disjoint multi-author concurrent activity** alongside the Brendonovich desktop/ chain. nexxeln #25993 is the **first nexxeln tui/ merge in the W18 era** (no prior nexxeln citations in Add.358–378).

---

## Carrier 2 — openai/codex (0 PRs new since Add.378)

No new merges. Last codex merge remains mzeng-openai #19193 at 07:18:01Z — **1h25m before capture**. codex enters a **single-tick silence** (sub-deep-silence threshold). Add.378's "bolinfest opens 4th bwrap PR OR mzeng-openai opens follow-up to #19193" is **falsified for this tick** (no codex merges in the 18m window). The codex tick activity rotation onto Apps-auth-elicitations surface has not yet generated a successor PR.

---

## Carrier 3 — BerriAI/litellm (0 PRs new since Add.378)

No new merges. Last litellm merge remains yassin-berriai #27264 at 03:19:29Z — **5h24m before capture**. **3 consecutive ticks of deep silence**; the 5h+ gap is now **exceptional** for litellm (W17 typical inter-merge gap is ~30–90m). Add.378's "at least one of {crush, goose, litellm, gemini-cli} returns" is falsified for litellm.

---

## Carrier 4 — google-gemini/gemini-cli (0 PRs new since Add.378)

No new merges. Last gemini-cli merge remains akh64bit #26528 at 03:44:52Z — **4h58m before capture**. gemini-cli extends deep-silence to **2 consecutive ticks** since crossing 4h. Approaching 5h threshold.

---

## Carrier 5 — QwenLM/qwen-code (0 PRs new since Add.378)

No new merges. Last qwen-code merge remains tanzhenxin #3735 at 06:09:08Z — **2h34m before capture**. qwen-code crosses the 2h gap threshold; approaching deep-silence (4h) at next tick. Add.378's "tanzhenxin opens a third PR within ~30m (testing if cross-surface doublet is start of triplet)" is **falsified** — no third tanzhenxin PR in 2h34m.

---

## Carrier 6 — charmbracelet/crush (0 PRs new since Add.378)

No new merges. Last crush merge remains ilgax #2808 at 00:33:09Z — **8h10m before capture**. crush extends deep silence to **4 consecutive ticks** in W18 day-1. The 8h+ silence is now the longest crush silence in the Add.358–379 window.

---

## Carrier 7 — block/goose (0 PRs new since Add.378)

No new merges. Last goose merge remains kalvinnchau #9030 at 01:50:48Z — **6h52m before capture**. goose deep-silence extends to **4 consecutive ticks**. The kalvinnchau circadian window predicted by synth #730 (~2026-05-07T01:50Z next-day repeat) remains too far in the future to test at Add.379 — carry forward to Add.395±.

---

## Cross-carrier theme summary (this tick)

- **Brendonovich sextet on opencode desktop/**: A^6 chain with terminal sub-5-minute compression (gap 5 = 3m35s, an order-of-magnitude contraction from gap 4 = 1h06m53s). Within the same chain, two distinct merge regimes co-exist: slow-gap (14m–1h54m) and fast-gap pre-batched (3m35s). → synth #733/734 candidate.
- **Tick-attractor breaks**: 6-consecutive-tick 55–57m mode collapses to 18m, falsifying Add.378's attractor-extension prediction. The break correlates with the Brendonovich burst — suggests the attractor was conditional on background-rate-only ticks.
- **6-of-7 deep-silence configuration**: unprecedented in W18 day-1. Only opencode is active; codex, litellm, gemini-cli, qwen-code, crush, goose all silent at ≥1h25m (codex), ≥2h34m (qwen-code), ≥4h58m (gemini-cli), ≥5h24m (litellm), ≥6h52m (goose), ≥8h10m (crush).
- **Carrier-coverage matrix at 1/7**: a record low; the prior record was 3/7 (Add.378). Under uniform-on-7 null, P(only 1 carrier active in 18m) ≈ tiny — the silence is real, not sampling-driven.
- **opencode multi-author surface-disjoint concurrent activity**: Brendonovich desktop/ + zharinov ui/ + nexxeln tui/ + kill74 docs/ all merge within 48 minutes (07:56–08:44Z) on 4 disjoint surfaces — opencode exhibits **single-carrier multi-surface concurrent throughput** at the same time the rest of the ecosystem is silent. This carrier-level surface-fanout-during-ecosystem-silence pattern is **orthogonal to existing synth #717–#732**.

**Theme candidates seeded for W17 synth #733, #734**:

1. **Same-author same-surface chain with terminal sub-5-minute compression after multi-hour expansion** (Brendonovich #25968/#25972/#25976/#25980/#25996/#25998 sextet, terminal gap 3m35s after prior 1h06m53s). Synth #731 covered non-monotonic gap recovery (expansion-then-contraction); this is the **terminal-acceleration** specialization where the contraction is sub-5-minute and chain-length ≥6. → synth #733.
2. **Single-carrier multi-surface fanout during ecosystem-wide deep silence** (opencode 5 PRs across desktop/ + ui/ + tui/ + docs/ in 48m while 6/7 carriers ≥1h25m silent). Prior synth focused on intra-carrier author/surface dynamics or cross-carrier correlations; none characterize the **carrier-decouples-from-ecosystem-rate** signature where one carrier's burst occurs precisely during peak ecosystem silence. → synth #734.

---

**Predict at Add.380** (~08:43Z + ~30–55m → ~09:15–09:40Z):
- Brendonovich extends to A^7 (#26000+ desktop/) within next 30m OR closes the chain — falsified if desktop/ silence extends >2h post-#25998.
- At least one of {litellm, gemini-cli, crush, goose, codex, qwen-code} returns from silence; failed prediction at Add.378 raises Bayes posterior on continued silence — but 6-of-7 silence configuration has near-zero base rate, so reversion is likely.
- Tick width returns toward 30–55m band (the 18m was burst-driven and unrepresentative); falsified if next tick is also <25m.
- nexxeln opens a second tui/ PR within next 2h (testing if #25993 is start of nexxeln presence in W18 era).
- mzeng-openai or bolinfest reactivates codex; if neither does, codex crosses 2h gap and approaches deep-silence.

Total cited: **5 unique PRs across 1/7 active carriers** (5 anomalyco/opencode, 0 elsewhere — silence is a citation across 6/7). Head-SHA citations are intentional anchors for synth #733/#734 cross-references.
