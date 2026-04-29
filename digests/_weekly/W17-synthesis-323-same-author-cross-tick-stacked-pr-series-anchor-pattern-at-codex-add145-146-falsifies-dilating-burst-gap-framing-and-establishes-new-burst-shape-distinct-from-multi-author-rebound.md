# W17 Synthesis #323 — Same-author cross-tick STACKED-PR-SERIES anchor pattern at codex Add.145+Add.146 (viyatb-oai sandbox-profiles series #20117 → #20118) FALSIFIES Add.145 P-145.D dilating-burst-gap framing at first tick AND establishes a new repo-level burst-shape: SURFACE-COHERENT SAME-AUTHOR CONTINUATION across consecutive ticks, distinct from the multi-author rebound shape of synth #318

**Scope:** Add.145+Add.146 codex burst pair (2026-04-29T05:53:11Z → 07:18:19Z), with full Add.140-146 codex burst-position and inter-burst-gap trajectory, and reference to Add.145 P-145.D (codex dilating-burst-gap prediction), synth #316 M-312-M non-absorbing rule, synth #318 width-mediated rebound shape, and the M-145.M anchor-author-bracketed exit pattern.

## Claim (falsifiable)

**P-323.A:** Across Add.145+Add.146, codex emits a **3-merge burst pair** with the **same author (viyatb-oai)** as the cross-tick anchor: viyatb-oai #20117 (`6ed04406`, "feat(cli): add explicit sandbox permission profiles") at Add.145 06:18:17Z, viyatb-oai #20118 (`55979251`, "feat(cli): add sandbox profile config controls") at Add.146 06:55:51Z. Both PRs touch the **same product surface** (sandbox profiles in cli) — the second PR's title literally extends the first ("add explicit sandbox permission profiles" → "add sandbox profile config controls"). This is a **stacked-PR-series shape** where two related PRs by the same author land in immediately-consecutive Add ticks on the same surface, structurally distinct from both the multi-author rebound shape (synth #318: codex Add.140 had 3 distinct authors on disjoint surfaces) and the dual-author exit shape (synth #322: goose Add.145 had lifeizhou-ap + matt2e on disjoint surfaces).

**P-323.B:** The Add.145 P-145.D dilating-burst-gap framing — codex burst gaps Add.140→Add.142 (2 ticks) → Add.142→Add.145 (3 ticks) → predicted Add.145→Add.149+ (≥4 ticks) — is **falsified at the very next tick (Add.146, gap=1, the tightest possible gap)**. The dilating-gap pattern is replaced by a **surface-coherent continuation pattern**: when a codex burst at tick N is anchored by an author whose PR queue contains additional surface-related PRs, the next tick (N+1) extends the burst rather than entering silence. The Add.145 codex burst (viyatb-oai #20117 + andmis #20139) had **viyatb-oai as the PR-queue-extending author**, and Add.146 confirms the queue-extension via #20118.

**P-323.C:** Combined with the M-145.M anchor-author-bracketed exit pattern (synth #322 / Add.145 lifeizhou-ap goose exit + Add.146 Sameerlite litellm exit), the codex Add.145+Add.146 stacked-PR-series shape extends a unifying late-W17 meta-pattern: **the same author who initiates an event (anchor of a silence streak OR initiator of a burst) is also the author who executes the immediately-related continuation event** (silence-exit OR burst-extension). Both shapes share the structural property of **single-author cross-event coherence**. The late-W17 corpus is exhibiting **author-anchored event chains** at a rate of ≥3 instances within the Add.145-146 2-tick band: (i) codex viyatb-oai burst-extension (#20117 → #20118), (ii) goose lifeizhou-ap silence-bracket (#8890 anchor → #8895 exit), (iii) litellm Sameerlite silence-bracket (#26747 anchor → #26757 exit).

## Evidence (Add.140-146 codex burst-position trajectory + Add.145-146 anchor-author observations)

### Codex burst-position and inter-burst-gap trajectory (per addenda 140-146)

| Add | Codex in-window | Burst authors | Inter-burst gap (ticks since last codex burst) |
|---|---|---|---|
| Add.140 | **3** (per Add.140 ADDENDUM) | 3 distinct authors, disjoint surfaces (per synth #318) | — (band start) |
| Add.141 | 0 | — | (silence, n=1) |
| Add.142 | 1 | (per Add.142) | 2 ticks |
| Add.143 | 0 | — | (silence, n=1) |
| Add.144 | 0 | — | (silence, n=2) |
| Add.145 | **2** | viyatb-oai (#20117) + andmis (#20139), both cli-area but disjoint sub-surfaces | 3 ticks |
| Add.146 | **1** | viyatb-oai (#20118), same surface as Add.145 #20117 | **0 ticks (zero-tick gap, tightest possible)** |

The Add.145→Add.146 inter-burst gap of **1 tick (zero ticks of intervening silence)** is the tightest in the entire Add.140-146 7-tick band. The dilating-gap framing of Add.145 P-145.D predicted ≥4 ticks; observed gap is **1 tick**, a deviation of 3+ ticks from the prediction.

### Author-coherence at Add.145+Add.146 codex burst pair

| Tick | PR | Author | SHA | Surface | Title |
|---|---|---|---|---|---|
| Add.145 | openai/codex #20117 | viyatb-oai | `6ed04406` | cli sandbox profiles | feat(cli): add explicit sandbox permission profiles |
| Add.145 | openai/codex #20139 | andmis | `857146b3` | cli multi-agent | Delete multi_agent_v2 followup_task interrupt parameter |
| Add.146 | openai/codex #20118 | viyatb-oai | `55979251` | cli sandbox profiles | feat(cli): add sandbox profile config controls |

The viyatb-oai #20117 and #20118 PRs share: (a) same author (viyatb-oai), (b) same `feat(cli):` prefix, (c) same `sandbox profile` substring in title — a strong textual signal of **same-surface stacked-PR-series**. The PR numbers #20117 and #20118 are **adjacent** (sequential PR numbers), further supporting the stacked-series interpretation (likely opened as a series rather than independently).

### Cross-shape comparison (codex Add.145+146 vs synth #318 codex Add.140 vs synth #322 goose Add.145 exit)

| Shape | Author count | Surface coherence | Cross-tick? | Identifying observation |
|---|---|---|---|---|
| codex Add.140 (synth #318) | 3 distinct | disjoint surfaces | Single-tick burst (n=3 in-window) | Multi-author width-mediated rebound (per synth #318) |
| goose Add.145 exit (synth #322) | 2 distinct (lifeizhou-ap, matt2e) | disjoint (release patch + perf RPC) | Single-tick exit | Dual-author n=2 silence-exit pair, anchor-author-bracketed |
| codex Add.145+146 (THIS) | 2 distinct at Add.145, viyatb-oai cross-tick into Add.146 | viyatb-oai PRs: same-surface; andmis PR: disjoint | **Cross-tick (Add.145+Add.146)** | **Same-author stacked-PR-series cross-tick continuation (NEW)** |

The codex Add.145+146 shape is **structurally distinct** from both prior shapes: it is the only cross-tick pattern where the same author re-appears in the immediately-following tick on the same surface.

### M-145.M anchor-author-exit replication tally (extending synth #322 exit-shape framing)

| Repo | Anchor merge | Anchor author | Exit merge | Exit author | Same author? | Tick |
|---|---|---|---|---|---|---|
| goose | #8890 | lifeizhou-ap | #8895 | lifeizhou-ap | **YES** | Add.145 |
| litellm | #26747 | Sameerlite | #26757 | Sameerlite | **YES** | Add.146 |
| codex (n/a, not silence-exit but burst-extension) | — | — | — | — | (different shape: burst-extension by burst-anchor-author viyatb-oai) | Add.145→146 |

The M-145.M anchor-author-exit pattern is now confirmed at **2/2 silence-exits** in Add.145-146 (goose, litellm). The codex Add.145+146 burst-extension is structurally a **dual** of M-145.M but at the burst class rather than the silence class: where M-145.M says "anchor author of silence streak also exits the streak", the codex shape says "anchor author of burst tick also extends the burst into next tick". Both shapes share the **same-author cross-event coherence** property of P-323.C.

## Differentiation from prior synths

- **vs synth #316 (M-312-M non-absorbing rule):** synth #316 established that deep-dormancy is a non-absorbing class (repos can exit). Synth #323 does not address absorbing-class status; it addresses **author-coherence within active state-transition events** (burst-to-burst, silence-to-exit), which #316 did not consider.
- **vs synth #318 (width-mediated rebound shape):** synth #318 framed codex Add.140 as a multi-author rebound where the rebound is explained by window-width-class. Synth #323 documents that the codex Add.145+146 burst-extension is **NOT width-mediated** in the same way — Add.146 is medium-width with sub-threshold rate (per synth #321 v2 reformulation), so the burst-extension occurs **despite** unfavorable window conditions; it is **author-anchored** rather than width-anchored.
- **vs synth #322 (asymmetric exit at multi-repo level):** synth #322 introduced the per-repo intrinsic exit-readiness axis. Synth #323 extends this by identifying a **specific intrinsic-exit-readiness driver: anchor-author PR-queue depth** — when an anchor author has additional related PRs queued, the silence-exit (M-145.M) or burst-extension (Add.145→146) event re-uses the same author. This sharpens the synth #322 three-axis model from "per-repo intrinsic exit-readiness" (general) to "per-repo author-PR-queue-depth-at-anchor-time" (specific, measurable).

## Falsifiers (P-323.A / P-323.B / P-323.C)

- **P-323.A falsifier:** any Add.147 codex merge by an author other than viyatb-oai with no surface relation to the sandbox-profiles series (would suggest the Add.145+146 same-author cross-tick anchor was coincidental, not a stacked-series shape).
- **P-323.B falsifier:** any Add.147 codex silence (zero in-window merges) followed by Add.148 codex merge with a NEW author (not viyatb-oai) on a NEW surface — would indicate the Add.145→146 zero-tick gap was a one-off and the dilating-gap framing should be restored as the prevailing pattern.
- **P-323.C falsifier:** any Add.147 silence-exit at qwen-code OR opencode (the next two repos approaching/crossing exit conditions) where the exit author is **NOT** the same as the silence-streak anchor author. This would falsify the M-145.M extension and reduce the late-W17 author-anchored event chain rate to <100% (currently 2/2 silence-exits + 1/1 burst-extension = 3/3).

## Top-level commits to track Add.147+

If P-323.A and P-323.B hold at Add.147, the codex viyatb-oai sandbox-profiles stacked-PR-series should produce **at least one more PR by viyatb-oai** at Add.147 on the sandbox-profiles surface, completing a 3-PR same-author cross-tick anchor (Add.145 + Add.146 + Add.147). If P-323.C holds, the next opencode (n=4) or qwen-code (n=6) exit should be by rekram1-node (opencode anchor #24869) or pomelo-nwu (qwen-code anchor #3577) respectively. Both are direct, falsifiable predictions for Add.147-148 ticks.

## Citations

- ADDENDUM-146.md (sha=cd98f83): codex Add.146 burst tally, viyatb-oai #20118 SHA, dilating-gap framing falsification result, dual-active 2-tick streak observation
- ADDENDUM-145.md (sha=0e19f9d): codex Add.145 burst (viyatb-oai #20117 + andmis #20139), goose lifeizhou-ap exit, P-145.D origin
- ADDENDUM-144.md (sha=3a7d986): goose+qwen-code joint n=4 entry conditions, lifeizhou-ap #8890 anchor
- W17-synthesis-318: width-mediated rebound shape framing
- W17-synthesis-322 (sha=2ea2616): per-repo intrinsic exit-readiness three-axis model
- W17-synthesis-321 (sha=6e4bfd8): silence-regime-mediated rate suppression v2 reformulation
