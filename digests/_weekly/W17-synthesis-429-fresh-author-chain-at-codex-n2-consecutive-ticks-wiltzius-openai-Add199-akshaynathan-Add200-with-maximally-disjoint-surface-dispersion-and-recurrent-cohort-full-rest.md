# W17 synthesis #429 — fresh-author chain at codex over n=2 consecutive ticks (wiltzius-openai Add.199 → akshaynathan Add.200) with thematic-surface heterogeneity (thread-store / parser-state) and recurrent-author full-rest at the same n=2 horizon

**Family**: same-repo / cross-tick author-rotation motif (sibling of synth #427 same-author cross-window thematic-anchor re-emergence; sibling of synth #340-class fresh-debut-author motif; complementary to synth #418 multi-author intra-tick batch by operating across-tick rather than within-tick)

**Trigger ADDENDUM**: ADDENDUM-200 M-200.B + M-200.G — akshaynathan fresh-debut-as-singleton at codex Add.200 chains immediately after wiltzius-openai fresh-debut at codex Add.199 (intra-Add.199 doublet partner of recurrent xl-openai).

## Motif specification

Define a **fresh-author chain** at repo R as a sequence of consecutive ADDENDUM ticks (length L ≥ 2) such that at each tick t in the chain, **at least one fresh-to-the-prior-author-union author** appears in R's active-author set, AND the recurrent-author component of R's active-author set at tick t is empty OR strictly disjoint from R's prior-tick author set (no recurrent chaining). The motif captures **author-rotation-by-fresh-introduction** as a sub-class of the broader author-rotation regime (synth #199 M-199.G, synth #200 M-200.G).

Formally: chain at R of length L starting at tick t₀ requires for each i ∈ [0, L−1]:
1. R's active-author set at t₀+i contains at least one author A_i not present in R's author union over [t₀+i−K, t₀+i−1] for some lookback K (this synth uses K=3 ticks).
2. R's active-author set at t₀+i ∩ R's active-author set at t₀+i−1 = ∅ (no immediate-prior-tick author chains; equivalently, full author-rotation at every step).

## Instantiation at codex Add.199-200 (n=2 chain)

**Tick Add.199** (codex amplitude=2):
- xl-openai (#20348 `7b3de630`, "Move plugin out of core.") — recurrent at K=10 lookback (last appeared Add.189 per synth #427); fresh-to-K=3 lookback (Add.196-198 codex author union {pakrym-oai, khoi-oai, abhinav-oai, celia-oai, iceweasel-oai, owenlin0, mzeng-openai, alexsong-oai} excludes xl-openai); satisfies fresh-to-K=3 condition.
- wiltzius-openai (#19280 `127be061`, "[the product] Migrate thread turns list to thread store") — fresh-to-Add.158-198 codex band per ADDENDUM-199 M-199.B; fresh-to-K=3 trivially satisfied; **fresh-debut sub-class**.

Codex Add.198 active-author set = ∅ (Add.198 codex amplitude=0); Codex Add.197 active-author set = {alexsong-oai}. Add.199 ∩ Add.198 = ∅ (trivially); Add.199 ∩ Add.197 = ∅ (xl-openai/wiltzius-openai both ≠ alexsong-oai). Author-rotation at step Add.198→199 = 2/2 = 1.000. **Step satisfies fresh-author-chain conditions at L=1**.

**Tick Add.200** (codex amplitude=1):
- akshaynathan (#19160 `8426edf7`, "Make apply_patch streaming parser stateful") — fresh-to-Add.158-199 codex band per ADDENDUM-200 M-200.B; fresh-to-K=3 trivially satisfied; **fresh-debut sub-class**.

Codex Add.199 active-author set = {xl-openai, wiltzius-openai}. Add.200 ∩ Add.199 = ∅ (akshaynathan ≠ xl-openai, akshaynathan ≠ wiltzius-openai). Author-rotation at step Add.199→200 = 1/1 = 1.000. **Step satisfies fresh-author-chain conditions at L=2**.

**Chain at codex over Add.199-200 confirmed at L=2** with 3 fresh-debut authors (xl-openai counts as fresh-to-K=3 even though K=10-tick recurrent; wiltzius-openai + akshaynathan are fresh-to-W17-ADDENDUM-scan).

## Thematic-surface heterogeneity within the chain

The 3 PRs span 3 disjoint surfaces — **no shared spec / file / subsystem anchor**:
1. xl-openai #20348: plugin-architecture-refactor (`Move plugin out of core` — codex/plugin subsystem; thematically continuous with xl-openai's Add.162 #20096 plugin-cache-feature per synth #427)
2. wiltzius-openai #19280: thread-store data-layer migration (`Migrate thread turns list to thread store` — data-persistence layer)
3. akshaynathan #19160: parser-state-machine (`Make apply_patch streaming parser stateful` — apply_patch internal parser, distinct from both plugin and thread-store surfaces)

Surface dispersion at the chain = 3 disjoint surfaces / 3 PRs = **1.000 (maximal)**. Compare to synth #420 cross-tick stacked-PR series motif at codex etraut (Add.194→Add.195 same-windows-sandbox-stack surface dispersion = 0/2 = 0.000 maximally-clustered). The Add.199-200 chain sits at the **opposite extremum of the surface-dispersion axis** from synth #420 — synth #429 instantiates the **maximally-disjoint-surface cross-tick author-rotation** sub-class, distinct from synth #420's maximally-clustered-surface cross-tick same-author-stacked sub-class.

## Recurrent-author full-rest at the same n=2 horizon

Within the same Add.199-200 window at codex, the recurrent-author component exhibits **full rest**:
- Add.196 octuplet authors {pakrym-oai, khoi-oai, abhinav-oai, celia-oai, iceweasel-oai, owenlin0, mzeng-openai} REMAIN ABSENT at Add.197, Add.198, Add.199, Add.200 (N_rest ≥ 4 for octuplet; per ADDENDUM-200 M-200.G).
- Add.197 alexsong-oai REMAINS ABSENT at Add.198, Add.199, Add.200 (N_rest = 3).
- Add.199 xl-openai + wiltzius-openai REST at Add.200 (N_rest = 1).

So during the n=2 fresh-author chain Add.199-200, the entire prior-W17-codex-author union {pakrym-oai, khoi-oai, abhinav-oai, celia-oai, iceweasel-oai, owenlin0, mzeng-openai, alexsong-oai} is in rest — the chain is **structurally enabled by rest of prior cohort**. This is consistent with a **recurrent-author-rest-period-driven fresh-author-emission regime**: when recurrent cohort is in rest, fresh authors fill the emission slot at lower amplitudes (Add.199 amplitude=2, Add.200 amplitude=1), preserving overall codex emission continuity at the cost of author-set discontinuity.

## Cross-repo comparison: chain at codex is unique within Add.199-200

Apply the chain criterion to all 6 watched repos at Add.199-200:

| Repo | Add.199 amp | Add.200 amp | Add.199 authors | Add.200 authors | Chain L? |
|------|-------------|-------------|-----------------|-----------------|----------|
| codex | 2 | 1 | {xl-openai, wiltzius-openai} | {akshaynathan} | **L=2** ✓ |
| gemini-cli | 2 | 0 | {martin-hsu-test} | ∅ | L=1 only (Add.200 silent — chain breaks at amplitude condition) |
| litellm | 0 | 0 | ∅ | ∅ | N/A (silent) |
| opencode | 0 | 0 | ∅ | ∅ | N/A (silent) |
| qwen-code | 0 | 0 | ∅ | ∅ | N/A (silent) |
| goose | 0 | 0 | ∅ | ∅ | N/A (silent) |

**codex is the sole repo exhibiting the fresh-author-chain motif at Add.199-200**. The motif is not cross-repo at this instantiation; it is repo-specific to codex. This is consistent with codex's elevated author-set cardinality at W17 (codex Add.158-200 author union > 12 distinct OAI-authors per ADDENDUM scan, vs gemini-cli W17 author union ≈ 8, litellm W17 author union ≈ 5, opencode/qwen-code/goose ≤ 2 each) — only codex has sufficient author-base depth to sustain consecutive fresh-debut-by-rotation.

## Predictions (P-429.X)

- **P-429.A** (>55%): Chain does NOT extend to L=3 at Add.201 — synth #429 motif terminates at L=2 by either (a) recurrent-author re-entry at codex Add.201 OR (b) codex cohort-zero at Add.201 OR (c) chained-recurrent-author at Add.201 (e.g., akshaynathan chains, breaking the no-recurrent-chain condition). Falsifier = a 4th consecutive fresh-debut-author at codex Add.201.
- **P-429.B** (>50%): If chain extends, the extension PR-author appears at codex from the Add.158-198 W17 author union with N_rest ≥ 3 (recurrent author returning from rest) rather than fresh-debut — the W17 codex fresh-author-pool is depletion-bounded; sustained fresh-debut at L=3+ requires draws from outside the prior author union which is sub-Poisson.
- **P-429.C** (>60%): Surface-dispersion at any chain extension does NOT remain maximal — the L=2 maximally-disjoint-surface reading is a coincidence at small-sample n=3 PRs; at L=3+ surface-dispersion contracts toward the W17 mean (~0.6-0.7 disjoint-surface fraction).
- **P-429.D** (>50%): The fresh-author-chain motif recurs at codex within W17 within 5 ticks (Add.201-205); falsifier = no codex fresh-debut author at Add.201-205 (would imply codex author-pool exhausted at W17 close).
- **P-429.E** (>55%): The fresh-author-chain motif does NOT instantiate at any non-codex repo within W17 — codex is unique in author-base depth; falsifier = gemini-cli or litellm exhibits L≥2 fresh-author chain within W17 close.

## Cross-repo trend implication

Synth #429 establishes that **author-rotation regime at codex operates by fresh-introduction-driven sub-mode**, distinct from the recurrent-author-cyclic sub-mode (where the same author union cycles through rest periods). The two sub-modes can be tested cross-repo:
- codex: fresh-introduction-driven (per synth #429) — elevated fresh-author rate
- litellm Add.196-198: recurrent-cyclic with single dominant author (stuxf single-author cross-tick stacked series per synth #423) — minimal fresh-author rate
- gemini-cli Add.198: multi-author quintuplet (per ADDENDUM-198) draws from W17 author union — recurrent-batch sub-mode
- gemini-cli Add.199: single-author intra-tick doublet (martin-hsu-test) — single-fresh-or-recurrent (martin-hsu-test status TBD) sub-mode

The 6-repo author-rotation regime partition is **distinct from the synth #428 stability-class partition** (which uses amplitude variance) — the two partitions are orthogonal axes of cross-repo structure. Synth #429 establishes the author-rotation axis at codex; future synths may complete the cross-repo author-rotation classification.

## Falsifier conditions (for synth #429 motif validity at L=2)

1. If wiltzius-openai is found in any prior-W17 codex ADDENDUM (Add.158-198 scan) → wiltzius-openai is recurrent not fresh-debut; chain at Add.199 reduces to L=1 (xl-openai-only fresh-to-K=3) — synth motif still valid but at lower fresh-debut count.
2. If akshaynathan is found in any prior-W17 codex ADDENDUM (Add.158-199 scan) → akshaynathan is recurrent not fresh-debut; chain at Add.200 reduces; synth motif requires re-classification.
3. If xl-openai's K=3 lookback (Add.196-198) is recomputed and found to contain xl-openai → xl-openai is K=3-recurrent; chain at Add.199 step reduces.

(Verified against ADDENDUM-196/197/198/199/200 author lists — wiltzius-openai and akshaynathan absent from all four; xl-openai absent from Add.196-198 codex author lists; chain valid at L=2 as stated.)

## Cross-citation

- **Trigger source**: ADDENDUM-200 M-200.B (akshaynathan fresh-debut), M-200.G (author-rotation-rate at Add.199→200 = 0.500); ADDENDUM-199 M-199.B (wiltzius-openai fresh-debut), M-199.G (xl-openai 10-tick re-emergence)
- **Sibling synthesis**: synth #427 same-author cross-window thematic-anchor re-emergence (covers xl-openai 10-tick recurrence — recurrent-cross-window axis); synth #420 cross-tick same-author stacked-PR-series (covers maximally-clustered-surface axis — opposite extremum from synth #429); synth #418 multi-author intra-tick batch (covers within-tick author multiplicity — orthogonal to synth #429's across-tick axis)
- **Anchor citations**: ADDENDUM-199 PR list (#20348, #19280); ADDENDUM-200 PR list (#19160); ADDENDUM-196 codex octuplet author identification (octuplet rest baseline); ADDENDUM-197 alexsong-oai (singleton rest baseline)
