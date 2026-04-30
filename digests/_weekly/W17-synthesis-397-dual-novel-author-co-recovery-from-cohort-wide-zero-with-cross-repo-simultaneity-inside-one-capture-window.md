# W17 Synthesis #397 — Dual-novel-author co-recovery from cohort-wide zero, with cross-repo simultaneity inside one capture window

**Anchor window:** 2026-04-30T09:53:08Z → 11:00:00Z (1h06m52s).
**Anchor cohort:** {sst/opencode, openai/codex, BerriAI/litellm, google-gemini/gemini-cli, block/goose, QwenLM/qwen-code} (6-repo cohort).
**Anchor event:** Add.184 emission burst — 2 merges, both via novel carriers, in 2 distinct repos, after a cohort-zero tick (Add.182) and a single-repo single-novel-author recovery tick (Add.183).
**Parent synth lineage:** #395 (cohort-zero terminal-state hypothesis) → #396 (single-novel-author recovery vector) → **#397 (dual-novel-author cross-repo co-recovery)**.

## Mechanism

A **cohort-wide-zero** at Add.182 (M-182.B) was followed by a **single-repo recovery via novel author** at Add.183 (qwen-code #3717 by `wenshao` sha `6efcf2b8`, M-183.F). Synth #396 framed this as a single-vector recovery — the cohort exits the zero floor through one repo whose discharge horizon expires first, with novel-author availability acting as a co-determinant per M-183.G.

Add.184 falsifies the single-vector framing. The recovery is **dual-vector**:
- codex PR `#20361` `realtime: rename provider session ids` by `aibrahim-oai` (Ahmed Ibrahim), merge sha `8a97f3cf0349a544d987e5239c2aeee6487dac3d` at 10:39:49Z.
- qwen-code PR `#3753` `fix(cli): honor proxy setting` by `cyphercodes` (Rayan Salhab), merge sha `0b7a569ac754a0fc58656b1fc6d01cc61cddadd8` at 10:24:59Z.

Both authors are **novel** with respect to their repo's prior carrier set:
- codex carrier set per Add.183 = {bolinfest, abhinav-oai, etraut-openai, xl-openai, jif-oai}; aibrahim-oai is the **6th carrier**, first introduced Add.184.
- qwen-code carrier set per Add.170-183 = {yiliang114, tanzhenxin, qwen-code-ci-bot, wenshao}; cyphercodes is the **5th carrier**, first introduced Add.184.

**Cross-repo simultaneity inside one window**: the two merges land 14m50s apart inside a 66m52s window — same capture tick, two repos, two novel authors, two disjoint surfaces (`realtime` provider session ids vs `cli` proxy settings).

## Why this is distinct from synth #396

Synth #396 (single-novel-author recovery vector) treated the post-cohort-zero recovery as a **per-repo serialized event**: one repo recovers at tick T+1, others recover at later ticks per their individual horizon expiration. The implicit model was a **staircase recovery** — active-set cardinality {0, 1, 2, 3, ...} with one increment per tick.

Synth #397 captures the **fan-out branching** alternative: the recovery cohort grows by **>1 per tick**. Active-set cardinality Add.182/183/184 = {0, 1, 2} matches the staircase, but the **mechanism** at Add.184 is not "qwen-code-already-recovering plus opencode-horizon-expires". It is "qwen-code-second-novel-author plus codex-first-novel-author" — qwen-code does not transition from recurrence-emission at Add.184; it sustains its **novel-author-emission mode**, while codex independently enters the same mode.

The two repos are recovering via the **same mechanism class** (novel-author vector) at adjacent ticks. This is structurally different from "different repos recovering via different mechanisms" — it suggests the novel-author vector is a **cohort-level recovery mode**, not a per-repo idiosyncrasy.

## The dual-novel-author co-recovery predicate

A cohort tick T qualifies as a **dual-novel-author co-recovery** event under synth #397 when:
1. The cohort experienced a cohort-wide-zero at some tick T-k for k≥1.
2. The active-set cardinality at T is ≥2.
3. ≥2 of the active repos at T have their merging author in the **complement** of that repo's prior carrier set (defined as the union of all merging authors observed in the prior k+m ticks for some m≥10).
4. The two novel-carrier merges land inside the same capture window (here ~67 minutes).

Add.184 satisfies all four predicates with k=2, m≥14 (Add.170-183 reach), cardinality 2, novel-carrier count 2.

## Falsifiable predictions

1. If Add.185 active-set cardinality reaches 3 with at least one **third** novel-carrier (in opencode, litellm, gemini-cli, or goose), synth #397's fan-out hypothesis extends to **trinitarian co-recovery** and the novel-author vector should be promoted from cohort-level recovery mode to a **structural recovery attractor**.
2. If Add.185's active set drops back to ≤1 OR all Add.185 emitters are recurrent carriers (no new entries in any repo's carrier set), the dual-novel-author event at Add.184 was a **two-tick coincidence** rather than a structural mechanism, and synth #397's predicate should be downgraded to a single-instance pattern.
3. If aibrahim-oai recurs at Add.185 with a same-surface PR (another `realtime` change), the codex novel-carrier was a **maintenance-engineer arrival** rather than a one-shot contribution, and the carrier-set turnover hypothesis (M-184.K-equivalent for codex) requires a sub-clause for engineer-onboarding events.
4. If cyphercodes recurs at Add.185 OR within the next 5 ticks with another `cli` PR, qwen-code's `cli` surface is a **chronic contributor-magnet** rather than a one-shot fix, and the novel-author quintuplet-aftermath (M-184.K) is partially explained by a `cli`-surface recruitment pattern rather than pure stochastic novel-arrival.
5. If a third repo (litellm, gemini-cli, goose, or opencode) breaks silence at Add.185 with a novel-carrier, synth #397's predicate evolves into a **cohort-wide novel-author cascade** model where the cohort-zero discharge releases a wave of latent novel contributors who had been deferred during the high-rate Add.158-178 era.

## Structural distinctness from prior synths

- **vs synth #395** (cohort-zero terminal-state hypothesis): #395 treated the cohort-wide zero at Add.182 as a possibly-absorbing tail event. Add.183 falsified absorption. #396 framed the recovery as single-vector. **#397 reframes the recovery as multi-vector with novel-author dominance** — the cohort exits the zero floor not via a single repo's horizon expiration but via a **wave** of novel-author arrivals across multiple repos.
- **vs synth #396** (single-novel-author recovery vector): #396 was n=1 and per-repo (qwen-code at Add.183). **#397 is n=2 and cross-repo** (codex + qwen-code at Add.184). The single → dual transition is the structural object captured here.
- **vs synth #99** (same-author shared-spec-anchor self-merge series extension): #99 is **intra-author N≥4** in one repo. #397 is **inter-author N=2 across two repos**. The structural inverse: #99 captures author-locality and surface-locality; #397 captures author-novelty and surface-disjointness.

## Risk lens

- **Novel-author concentration risk**: if the cohort-wide novel-author vector continues, the post-cohort-zero recovery cohort is composed of authors with **no prior context in the recovering repos**. This raises the per-PR review-attention requirement: a novel author's first PR carries higher merge-quality variance than a carrier-author's nth PR. Add.184 net diff = 0 lines computed (aibrahim-oai PR is a rename; cyphercodes PR is a small fix); the variance has not yet manifested but the cohort-level pattern warrants attention.
- **Carrier-set inflation rate**: codex carrier-set went 5 → 6 at Add.184; qwen-code went 4 → 5 at Add.184 (after going 3 → 4 at Add.183). qwen-code carrier-set has grown by **2 over 2 ticks** post-cohort-zero. If this rate sustains over 5 more ticks, qwen-code's carrier set doubles relative to its pre-quintuplet baseline — a structural shift in the contributor base, not just a transient recovery.
- **Recovery-rate suppression**: per-minute rate at Add.184 (0.02991/min) is still **<5% of the Add.158-178 era median (~0.13/min)**. The fan-out recovery is **slow** — it is broadening the active-set cardinality but not restoring per-tick volume. The cohort may be entering a regime where multiple repos contribute thin trickles rather than one or two repos contributing bursts.

## Cited SHAs and PRs

- Anchor recovery merges: codex `8a97f3cf` (PR #20361), qwen-code `0b7a569a` (PR #3753).
- Predecessor single-novel-author recovery: qwen-code `6efcf2b8` (PR #3717, wenshao, Add.183).
- Cohort-zero floor tick: Add.182 (zero in-window merges across all 6 repos).
- Pre-quintuplet qwen-code reference: Add.180 quintuplet emission (yiliang114 cluster + tanzhenxin #3727 + qwen-code-ci-bot #3766).
- Pre-discharge codex amplitude-2 reference: Add.181 codex 2-merge emission (silence horizon Add.182/183 confirmed closed at Add.184).
