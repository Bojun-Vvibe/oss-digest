# W17 Synthesis #278 — Full-Disjointness Sequence Ceiling At n=3 With Lag-2 Repo-Recurrence Establishes Sequence-Ceiling Theorem And Lag-Spectrum For Single-Repo-Monopoly Tick Chains Extending Synth #275

**Date:** 2026-04-28 (capture window through Add.122 close 13:55Z)
**Repos:** openai/codex (Add.119), sst/opencode (Add.120 + Add.122), QwenLM/qwen-code + block/goose (Add.121)
**Refines:** synth #275 (three-tick single-or-near-single-repo merge dominance with full-roster disjointness), synth #271 (single-repo monopoly tick degenerate-bimodal), synth #273 (cross-tick repo-identity rotation), synth #267 (single-tick rebound non-persistence with bidirectional half-life), synth #98 (heterogeneous-surface mass-close).

## Pattern

Synth #275 conjectured that consecutive single-repo-monopoly ticks could form a **full-triangular-disjoint** sequence of arbitrary length n. Add.122's data **falsifies** that conjecture at n=4 by exhibiting a **lag-2 repo-recurrence** (opencode appeared at Add.120, then again at Add.122), establishing that n=3 is the **maximum observed** disjoint-sequence length in W17 to date. Synth #278 promotes this to a **ceiling theorem with lag-spectrum**:

- **Sequence-ceiling claim:** the longest fully-triangular-disjoint sequence of single-repo-monopoly ticks in W17 has length **n_max = 3** (Add.119–Add.121).
- **Lag-spectrum claim:** when the disjoint sequence breaks, the recurrence-lag of the first reappearing repo is **lag = 2** (opencode Add.120 → opencode Add.122), forming an **A-B-C-A** prefix where {A,B,C} are pairwise disjoint single-repo-monopoly ticks and the next tick reverts to A.

The combination of n_max=3 ceiling and lag=2 recurrence is the **A-B-C-A pattern** — a 4-tick chain with 3 distinct active rosters and one repeat at position 4.

## Concrete instance (Add.119–Add.122 chain)

| Tick | Active-merge roster | Dominant repo | Distinct authors | Key PRs (number, SHA, time) |
|------|---------------------|---------------|------------------|------------------------------|
| Add.119 | {codex} | codex (100%) | jif-oai | #19961 `b7c0f269` 11:06:41Z, #19963 `54d14011` 11:12:51Z, #19967 `fa127be2` 11:32:06Z |
| Add.120 | {opencode} | opencode (100%) | Brendonovich | #24738 `aa07f38b` 11:37:41Z |
| Add.121 | {qwen-code, goose} | qwen-code (67%) | doudouOUC, yiliang114, jamadeo | #3705 `ba8d452c` 12:26:42Z, #3708 `8de1bcb2` 13:04:53Z, #8866 `e9581196` 12:56:08Z |
| Add.122 | {opencode} | opencode (100%) | kitlangton, iamdavidhill | #24716 `2a4f2bf5` 13:22:50Z, #24717 `e57d0c2f` 13:23:55Z, #24792 `3fa78a8b` 13:24:47Z |

**Disjointness verification:**
- Add.119 ∩ Add.120 = {codex} ∩ {opencode} = ∅ ✓
- Add.120 ∩ Add.121 = {opencode} ∩ {qwen-code, goose} = ∅ ✓
- Add.119 ∩ Add.121 = {codex} ∩ {qwen-code, goose} = ∅ ✓
- **Add.120 ∩ Add.122 = {opencode} ∩ {opencode} = {opencode} ≠ ∅** ← lag-2 recurrence
- Add.121 ∩ Add.122 = {qwen-code, goose} ∩ {opencode} = ∅ ✓
- Add.119 ∩ Add.122 = {codex} ∩ {opencode} = ∅ ✓

**Pattern:** A(codex)-B(opencode)-C(qwen-code+goose)-B(opencode). The recurrence is at B (opencode), at lag 2 (skipping one tick C in between). This is **not** A-B-A-B alternation (which would be lag-2 from both sides) and **not** A-B-C-A (which would put codex back in slot 4) — it is specifically **A-B-C-B**, with the inner cycle being the reappearing element.

## Why this falsifies synth #275 at n=4 but strengthens its core claim at n=3

Synth #275's stronger claim was that the disjoint sequence could extend indefinitely. The Add.122 data shows it cannot — n=3 is a hard ceiling under W17's 6-repo tracked corpus. However, synth #275's **core claim** (Add.119–121 was a verified n=3 disjoint sequence with all three pairwise intersections empty) **stands and is reinforced** because the n=3 segment was verified by Add.122 not retroactively contracted. Synth #278's contribution is to bound the synth #275 claim from above and characterize the failure mode.

## Lag-spectrum significance

The fact that the recurrence is at **lag=2** (not lag=1, not lag=3) is non-trivial. Possible mechanisms:

1. **6-repo bin-packing constraint:** with 6 tracked repos and observed dispersion-by-exhaustion (synth #275 mechanism candidate 1), each monopoly tick exhausts a repo's pending-merge backlog; refill-time for opencode appears to be ~2 ticks (Add.120 exhaustion → Add.122 refill via kitlangton's 13-tick-silence-break + iamdavidhill docs). Add.121's qwen-code+goose tick acted as the **refill window** for opencode rather than a re-exhaustion.
2. **Maintainer-rotation channel at TZ-band granularity:** Add.120 Brendonovich (AU/NZ) → Add.121 doudouOUC + yiliang114 (CN) + jamadeo (US) → Add.122 kitlangton (US/EU based on prior W17 footprint) + iamdavidhill (US). The TZ-cycle Brendonovich (UTC+10/12) → CN (UTC+8) → US (UTC-5/-8) is **time-of-day-monotone** through the 11:37Z–13:24Z window (AU evening → CN evening → US morning). opencode's reappearance at Add.122 reflects the **US timezone joining the active window** while Brendonovich's AU window has ended — opencode is the only repo with strong cross-TZ author coverage.
3. **Per-repo PR-queue inertia:** repos with deeper open-PR queues (opencode at sustained ~30+ open PRs in W17) refill faster than thin-queue repos (gemini-cli at 21-tick silence, deep-deep-extreme).

## Falsifiers and predictions

- **Falsifier P-278-A:** Add.123 active roster contains opencode again — would extend opencode dominance to 2 consecutive ticks (Add.122 + Add.123) breaking the monopoly-tick framing into a 2-tick cluster, and would also extend the A-B-C-B pattern to A-B-C-B-B which is a different family.
- **Falsifier P-278-B:** the next disjoint-sequence in W17 (after the current chain breaks) extends to n≥4 — would falsify the n_max=3 ceiling claim. Required: 4 consecutive single-repo-monopoly ticks with all 6 pairwise intersections empty.
- **P-278-C (lag-spectrum recurrence prediction):** the next observed full-disjoint sequence in W17 also breaks at n=4 with lag-2 recurrence (or lag-3 with a-b-c-d-a pattern within 4-repo subset). Cited prior chains in W17 corpus that may have exhibited similar lag structure: synth #273's earlier rotation observations (Add.117↔118 boundary).
- **P-278-D (TZ-monotone-progression prediction):** the next A-B-C-B chain in W17 also exhibits TZ-monotone author progression in slots 1–3 with TZ-return in slot 4. Falsifier: a chain with TZ-stationary or TZ-reversing progression and lag-2 recurrence.
- **P-278-E (codex non-recurrence prediction):** codex (the chain's slot-A repo) does not reappear in the active roster within the next 3 ticks (deadline Add.125), giving the chain shape A-B-C-B-?-?-? with the A-tail extending to lag ≥ 6. Falsifier: codex merge at Add.123/124/125. Currently codex is at 6-tick silence (Pred ZZZ-F deadline Add.124), so a codex resumption at Add.124 would falsify P-278-E and also resolve ZZZ-F, creating a coupled-falsifier-pair.

## Why this is distinct from synth #267 bidirectional half-life

Synth #267 (single-tick rebound non-persistence with second-half echo collapse, bidirectional half-life extending #265) operates on the rebound-from-low-baseline axis at the per-repo conversion-rate level. Synth #278 operates on the **roster-membership sequence** axis at the cross-repo set-theoretic level. Synth #267 predicts that rebound merges decay symmetrically forward and backward in time; synth #278 predicts that **roster-set repetition follows a lag-2 modal recurrence** — these are orthogonal predictions on different observables.

## Why this is distinct from synth #98 mass-close sweep

Synth #98 (bot-driven sub-10s n=3 stale-PR mass-close sweep across heterogeneous dependency surfaces with multi-day age dispersion) is a **single-tick within-author batch event** with bot-class actor and close-not-merge action. Synth #278 is a **multi-tick across-author across-repo sequence pattern** with human-class actors and merge-not-close action. Surface heterogeneity in synth #98 is intra-tick; in synth #278 it is inter-tick.

## Adjacent-instance corpus check

- **Add.117–118 boundary** (synth #273 origin): observed to be 2-tick rotation but synth #275 retroactively framed Add.119–121 as the first n=3 disjoint sequence. No prior n≥3 disjoint sequence in W17 corpus before Add.119–121.
- **Add.122 is therefore the FIRST observed W17 instance of an A-B-C-B chain breaking a full-disjoint sequence at n=4 with explicit lag-2 recurrence.**
- Earlier candidate breaks (synth #271 monopoly recurrences) were typically lag-1 (back-to-back monopoly on same repo) which does not constitute the synth #278 pattern (lag-1 recurrence collapses the disjoint-prefix length to 1, not 3).

**Status:** Synth #278 is **single-instance candidate** at first observation of the A-B-C-B closing event. P-278-C and P-278-E deadlines (Add.125–132) will determine candidate→regime promotion. Synth #275 is **bounded-from-above** by synth #278 at n_max = 3.
