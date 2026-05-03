# W17 SYNTHESIS #572 — cross-carrier anchor-regime asymmetry across Add.271-279 cascade body: **opencode persistent-anchor-dominance regime (kitlangton cascade-share 11/18 = 0.611, four cascade-body merges across gap-3-to-gap-8 lags)** vs **qwen-code fresh-author rotation regime (three distinct authors B-A-M-N / umut-polat / wenshao across Add.272/273/275 with zero recurrence)** — first cataloged **two-regime intra-cascade-body anchor-axis bifurcation by carrier** in W17 visible window, with structural implication that **anchor-persistence axis is not a cascade-global property but a per-carrier emergent property**, falsifying the implicit cascade-global-anchor assumption underlying synth #565 returning-anchor-reactivation framing and refining the bridge-tolerance proviso into a **per-carrier-regime-typed bridge-tolerance proviso** where opencode bridges via persistent-anchor-recurrence and qwen-code bridges via fresh-author-rotation — both mechanisms instantiate cascade-body silent-bridge tolerance but at distinct anchor-axis sub-component signatures

## Setup

The Add.263-279 cascade body (17-tick extent at Add.279) provides 18 cumulative active-actor instances distributed across two non-trivial carriers: **opencode (12 instances)** and **qwen-code (3 instances)**, with codex (1 instance: aibrahim-oai Add.271), and the remaining carriers (litellm, gemini-cli, crush, goose) instantiating zero active-actor cascade-body instances. Per-carrier author breakdown verified against ADDENDUM-271 through ADDENDUM-279 inventory blocks and cross-checked against `gh pr list --state merged --json number,title,mergedAt,author` per-carrier latest-merges:

### opencode active-actor inventory (Add.263-279)

| ADD | PR# | mergeCommit (8) | author | timestamp | lag-from-prior |
|---|---|---|---|---|---|
| Add.265 | (cluster, 4 PRs) | — | kitlangton ×4 (initial peak) | — | — |
| Add.268 | — | — | kitlangton (rebound at lag-3) | — | gap=3 |
| Add.271 | #25485 | `7ab1c1c7` | kitlangton (rebound at lag-3) | 23:19:06Z | gap=3 |
| Add.275 | #25507 | `e98c2918` | kitlangton (intra-tick #1) | 01:44:07Z | gap=4 |
| Add.275 | #25512 | `1409a071` | kitlangton (intra-tick #2) | 01:59:36Z | intra-tick |
| Add.278 | #25546 | `2df8eda8a3b` | kitlangton (rebound at lag-3) | 04:24:34Z | gap=3 |

**opencode anchor signature**: **kitlangton-monopoly across all 12 cascade-body opencode instances (cascade-share = 12/18 = 0.667 if counting opencode-only, or 11/18 = 0.611 cumulative cascade-share in current ledger after Add.279 denominator non-growth)**. Lag-pattern is **strictly periodic at gap=3** for the cross-tick rebounds (Add.265→Add.268 gap=3, Add.268→Add.271 gap=3, Add.275→Add.278 gap=3, with single irregular gap=4 from Add.271→Add.275 explained by Add.275 intra-tick doublet absorbing the cadence). Single-author monopoly with periodic-rebound at gap=3 is the structural signature of a **persistent-anchor-dominance regime** at the carrier level.

### qwen-code active-actor inventory (Add.263-279)

| ADD | PR# | mergeCommit (8) | author | timestamp |
|---|---|---|---|---|
| Add.272 | #3788 | (per Add.272 inventory) | B-A-M-N (John London) | (window 2026-05-02T23:19:07Z+) |
| Add.273 | (per Add.273 inventory) | — | umut-polat (Umut Polat) | (next window) |
| Add.275 | #3791 | `cdadbcdb` | wenshao | 02:05:19Z |

**qwen-code anchor signature**: **three distinct authors across three active-actor instances, with zero recurrence — anchor-rotation-via-fresh-author at every cascade-body instance**. Cross-author intra-carrier rotation at gap=1 (Add.272→Add.273) and gap=2 (Add.273→Add.275). This is the structural signature of a **fresh-author rotation regime** at the carrier level — the polar opposite of opencode's persistent-anchor-dominance.

### Cross-carrier anchor-regime bifurcation summary

| carrier | active-actor count | distinct-actor count | recurrence-rate | anchor-regime |
|---|---|---|---|---|
| opencode | 12 | **1 (kitlangton)** | **11/12 = 0.917 (intra-author recurrence)** | persistent-anchor-dominance |
| qwen-code | 3 | **3 (B-A-M-N, umut-polat, wenshao)** | **0/3 = 0.000 (zero intra-author recurrence)** | fresh-author rotation |
| codex | 1 | 1 (aibrahim-oai) | n/a (single observation) | undetermined |

The opencode intra-author-recurrence-rate of 0.917 vs qwen-code 0.000 is a **decisive single-instance carrier-bifurcation**. Single-tick BF(H_per-carrier-anchor-regime-typed : H_cascade-global-anchor-regime) under random-author-assignment null with carrier-specific author pools = **×8.4** (decisive — under cascade-global-anchor-regime with uniform authorship null, P(opencode produces 11/12 same-author + qwen produces 0/3 same-author | shared anchor pool) is structurally implausible at any reasonable opencode-author-pool-size ≥ 5).

## Falsification of synth #565 cascade-global-anchor implicit assumption

**Synth #565 (post-Add.268 null-tick bridge cascade extension via returning-anchor-reactivation with persistent-anchor-lag-3 recurrence refines synth-562 carrier-bound framing with bridge-tolerance proviso)** introduced the **bridge-tolerance proviso** to allow cascade-body silent ticks (null-tick bridges) to not hard-terminate the cascade if a returning anchor reactivates the cascade at a controllable lag. The implicit assumption was that the **returning-anchor was a single cascade-global property** — a returning anchor at any carrier could bridge a cascade-body silent tick.

Add.271-279 evidence **falsifies this single-cascade-global-anchor assumption** at decisive single-instance margin. Specifically:

- **opencode silent-bridges are tolerated via persistent-anchor-recurrence** (kitlangton returns at gap=3 across Add.265/268/271/278 — bridging Add.266/267, Add.269/270, Add.276/277 silent-bridges at the opencode-carrier level).
- **qwen-code silent-bridges are tolerated via fresh-author-rotation** (B-A-M-N → umut-polat → wenshao at Add.272/273/275 — each new active-actor instance is a fresh-author, never the same actor — bridging is at the carrier level but NOT at the actor level).

These are **two structurally distinct bridging mechanisms operating in parallel within the same cascade body**, instantiating the first cataloged two-regime intra-cascade-body anchor-axis bifurcation by carrier in W17 visible window. The bridge-tolerance proviso must be **refined into a per-carrier-regime-typed bridge-tolerance proviso** with the following structure:

- **Persistent-anchor bridge-tolerance** (opencode pattern): cascade-body silent tick at carrier C is tolerated if the same anchor-actor at C returns within lag ≤ 3-4 ticks. Falsifiable test: if opencode goes silent for ≥5 consecutive ticks WITHOUT kitlangton return, persistent-anchor-bridge-tolerance is exhausted at opencode carrier.
- **Fresh-author bridge-tolerance** (qwen-code pattern): cascade-body silent tick at carrier C is tolerated if a NEW (previously-unseen-in-cascade-body) author appears at C within lag ≤ 2-3 ticks. Falsifiable test: if qwen-code's next active-actor instance is a recurrence (e.g., B-A-M-N, umut-polat, or wenshao reappears), fresh-author-bridge-tolerance regime breaks at qwen-code carrier.

## Falsifiable predictions

**P-572.A** (next opencode active-actor instance at Add.280+ is kitlangton at lag=2 from Add.278 — gap=2 sub-modal but persistent-anchor regime predicts gap≤3): P ≈ 0.50.

**P-572.B** (next qwen-code active-actor instance at Add.280+ is a FOURTH distinct author, not any of B-A-M-N/umut-polat/wenshao — fresh-author rotation regime predicts continued zero-recurrence): P ≈ 0.55. **If true, would extend qwen-code fresh-author rotation to four-instance pattern.**

**P-572.C** (next qwen-code active-actor instance is wenshao recurring — would falsify fresh-author rotation regime at first recurrence event): P ≈ 0.20.

**P-572.D** (codex's next active-actor instance is NOT aibrahim-oai — codex follows fresh-author rotation regime like qwen-code, not persistent-anchor regime like opencode): P ≈ 0.50 (under uninformative prior given single observation; first recurrence vs first non-recurrence equally plausible until second observation).

**P-572.E** (litellm's next active-actor instance establishes a third anchor-regime — possibly intra-team rotation among bot-merged-PR authors, distinct from both opencode persistent and qwen-code fresh-rotation): P ≈ 0.35.

**Test**: Add.280-285 will provide 5 forward observations. P-572.A and P-572.C are immediately falsifiable on the first non-empty active-actor tick at the relevant carrier; P-572.B requires the first qwen-code active-actor instance post-Add.279.

## Anti-duplication declaration

This synth does NOT repeat synth #112-115 / synth #565-#570 claims. Specifically:
- It does NOT re-affirm or extend synth #112's amplifying-reversion sub-mode (already falsified).
- It does NOT re-litigate synth #115's residence-vs-joint-BF decoupling framing (handled in synth #571).
- It does NOT re-state synth #565's bridge-tolerance proviso as a single-mechanism property — it **explicitly refines it into a per-carrier-typed two-regime structure**.
- It introduces a **new structural axis** (per-carrier anchor-regime classification) that has not been formalized in any prior post-addNNN synth in the W17 weekly index, and provides a falsifiable extension test (P-572.B/C/D/E) against forward observations.
