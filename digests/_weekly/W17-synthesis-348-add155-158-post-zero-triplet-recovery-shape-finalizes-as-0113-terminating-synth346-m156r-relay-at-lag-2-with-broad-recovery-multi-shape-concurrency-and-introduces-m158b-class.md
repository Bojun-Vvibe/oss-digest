# W17 Synthesis #348 — Post-zero-triplet recovery shape finalizes as {0, 1, 1, 3} across Add.155-158, terminating synth #346 M-156.R cross-repo silence-exit relay at lag-2 with broad-recovery multi-shape concurrency (3 distinct silence-break shapes simultaneously: M-158.C codex + canonical low-amplitude litellm/ishaan-berri + lag-2 repo-recurrence qwen-code/shenyankm), refines synth #344 canonical low-amplitude shape to first cross-repo instance, and introduces M-158.B broad-recovery-tick multi-shape concurrency class

**Class:** Cross-repo silence-exit topology + broad-recovery shape characterization (refines #344, #345, #346; terminates #346 M-156.R relay at lag-2; introduces M-158.B multi-shape concurrency class)

**Hypothesis:** The post-zero-triplet recovery sequence Add.155→158 finalizes as **{0, 1, 1, 3}** active-repo-count over 4 ticks: Add.155 (zero, no emitters) → Add.156 (qwen-code/wenshao only) → Add.157 (gemini-cli/{adamfweidman+sripasg} only) → Add.158 (codex/etraut-openai + qwen-code/shenyankm + litellm/ishaan-berri). The lag-2 broad-recovery tick at Add.158 **simultaneously executes three distinct silence-break shapes**: (i) M-158.C codex single-author same-surface dual-merge (synth #347), (ii) synth #344 canonical low-amplitude single-merge near-tick-close (litellm/ishaan-berri — first cross-repo instance), (iii) lag-2 repo-recurrence with intra-repo emitter rotation (qwen-code/shenyankm, distinct from Add.156 wenshao). Synth #346 M-156.R cross-repo silence-exit relay class is **structurally bounded at lag-2 maximum depth** for this W17 instance — the relay terminates at the broad-recovery tick rather than continuing the strict cross-repo singleton chain to lag-3+. Introduce **M-158.B class**: broad-recovery-tick multi-shape concurrency — the structural property where a single tick at lag-2 of a post-zero-triplet relay simultaneously executes ≥2 distinct silence-break shapes from different topology classes, marking the relay-termination boundary.

**Evidence:**
- ADDENDUM-158 (2026-04-29 15:50:37Z → 16:32:43Z) — active-repo-count = 3 (codex + qwen-code + litellm), 4 in-window merges, three distinct silence-break shapes simultaneously
- ADDENDUM-157 (15:12:03Z → 15:50:37Z) — active-repo-count = 1 (gemini-cli only), M-157.D dual-author cross-surface same-second silence-break (synth #345)
- ADDENDUM-156 (14:14:51Z → 15:12:03Z) — active-repo-count = 1 (qwen-code/wenshao only), synth #344 canonical low-amplitude silence-exit shape
- ADDENDUM-155 (post-Add.154) — active-repo-count = 0 (zero-triplet member, third of {Add.153, Add.154, Add.155})
- Active-repo-count sequence Add.155→158 = **{0, 1, 1, 3}** with cross-repo identity rotation at every tick boundary except Add.158 (which re-incorporates qwen-code at lag-2)
- Per-minute merge rate trajectory Add.156→158 = **{0.0175, 0.0518, 0.0950}** monotonic 3-tick uplift, ~2-3× per-tick acceleration (factors 2.96×, 1.83×)
- Three distinct silence-break shapes at Add.158:
  - **M-158.C**: codex etraut-openai #20082 `91ca551d` 15:56:02Z + #20172 `1c420a90` 16:10:22Z (single-author, same-surface TUI/goal, 14m20s gap)
  - **Synth #344 canonical low-amplitude (cross-repo)**: litellm ishaan-berri #26739 `ea275659` 16:28:57Z (single-merge, single-author, +38m20s into 42m06s window = 91% near-tick-close)
  - **Lag-2 repo-recurrence with intra-repo emitter rotation**: qwen-code shenyankm #3647 `9861114f` 16:03:16Z (qwen-code recurs at lag-2 from Add.156, but emitter rotates wenshao→shenyankm — no author overlap)
- Add.157 P-157.G FALSIFIED-DOUBLY: predicted Add.158 active-repo-count ≥1 with sole emitter ≠ qwen-code AND ≠ gemini-cli; actual = 3 active repos including qwen-code (qwen-code recurrence falsifies "≠ qwen-code"; multi-repo falsifies "sole emitter")
- Synth #346 M-156.R class structural bound: lag-2 maximum depth confirmed for W17 instance (relay = {qwen-code Add.156 → gemini-cli Add.157 → broad-recovery Add.158}; does not extend to lag-3 strict singleton)

**Refines/falsifies prior:**
- **Refines #344**: Canonical low-amplitude silence-exit shape generalized to cross-repo applicability — third instance and **first cross-repo instance** (litellm/ishaan-berri at Add.158, after qwen-code/wenshao Add.146 + Add.156). The shape is repo-agnostic structural pattern, not qwen-code-specific.
- **Refines #345**: M-157.D dual-author cross-surface same-second silence-break is **one shape among multiple post-deep-silence release shapes**; the W17 silence-break taxonomy now includes ≥3 distinct shapes (M-157.D, M-158.C, canonical low-amplitude). The post-flush re-quiescence prediction (P-157.B) for M-157.D is CONFIRMED at Add.158 (gemini-cli 0 merges, drops back to silence after Add.157 burst).
- **Refines #346 / Terminates M-156.R relay class**: Cross-repo silence-exit relay topology bounded at lag-2 maximum depth for W17 instance. The M-156.R class extends from {Add.156 → Add.157} (lag-1, qwen-code → gemini-cli, full disjointness) but terminates at Add.158 broad-recovery rather than continuing to lag-3. The synth #346 P-346.A conjectured ≥3-tick relay extension is **FALSIFIED at lag-2** for this instance.
- **Introduces M-158.B class**: broad-recovery-tick multi-shape concurrency — the structural property where the lag-2 broad-recovery tick of a post-zero-triplet relay simultaneously executes ≥2 distinct silence-break shapes from different topology classes. M-158.B is the **canonical termination signature** of the M-156.R relay class, marking the boundary at which the strict cross-repo singleton chain dissolves into multi-repo broad-recovery.

**Cited addenda:** ADDENDUM-158, ADDENDUM-157, ADDENDUM-156, ADDENDUM-155, ADDENDUM-154, ADDENDUM-153, ADDENDUM-146.

**Cited SHAs / PRs:**
- Add.158 broad-recovery merges (4 total):
  - codex #20082 `91ca551d` 15:56:02Z (etraut-openai, `Use /goal resume for paused goals`)
  - qwen-code #3647 `9861114f` 16:03:16Z (shenyankm, `fix(cli): keep sticky todo panel compact`)
  - codex #20172 `1c420a90` 16:10:22Z (etraut-openai, `TUI: Remove core protocol dependency [1/7]`)
  - litellm #26739 `ea275659` 16:28:57Z (ishaan-berri, `remove /ui/chat page`)
- Add.157 M-157.D silence-break (gemini-cli):
  - #26162 `7ab932c8` 15:35:38Z (adamfweidman, test environment leakage)
  - #26143 `c2e5b28e` 15:35:38Z (sripasg, ACP client refactor)
- Add.156 canonical low-amplitude (qwen-code):
  - #3721 `cae0927` 14:34:56Z (wenshao)
- Add.146 canonical low-amplitude baseline (qwen-code/wenshao — synth #344 anchor)
- Litellm pre-silence anchor: Sameerlite #26772 `a47a77ca` 11:27:52Z (Add.151 last-emit)
- Codex pre-silence anchor: jif-oai #20180 `70ac0f12` 10:23:01Z (Add.151 last-emit)
- Opencode sole-M-152.U-candidate continuation: post-Brendonovich #24908 `65ba1f6c` 06:50:06Z, depth 9h42m37s+ at Add.158 close

**Predictions:**
- **P-348.A** (M-158.B class recurrence in W18+): future post-zero-triplet recovery sequences (zero-active triplet preceding any single-active continuation) terminate at lag-2 broad-recovery with multi-shape concurrency (≥2 distinct silence-break shapes simultaneously) at >50% rate; falsifier = next 3 post-zero-triplet recovery sequences in W18+ all extend to lag-3 strict singleton OR all terminate via single-shape broad-recovery (no multi-shape concurrency).
- **P-348.B** (M-156.R lag-2 universal bound): cross-repo silence-exit relay topology is bounded at lag-2 across all observed instances; falsifier = any future cross-repo relay extending to lag-3 with strict cross-repo singleton {repo-A → repo-B → repo-C → repo-D} all distinct.
- **P-348.C** (canonical low-amplitude shape repo-agnostic generalization): synth #344 canonical low-amplitude silence-exit shape (single-merge + single-author + near-tick-close ≥85% into window) recurs across all 6 tracked repos at >30% of low-amplitude silence-exits in W18+; falsifier = next 5 low-amplitude silence-exits all on qwen-code OR all violate the near-tick-close ≥85% placement constraint.
- **P-348.D** (rate-uplift trajectory continuation): per-minute merge rate trajectory Add.156→158 {0.0175, 0.0518, 0.0950} continues monotonic deceleration to Add.159 ∈ [0.10, 0.20]; falsifier = Add.159 rate <0.05 (rapid re-collapse) OR Add.159 rate >0.25 (super-acceleration).
- **P-348.E** (broad-recovery tick width clustering): broad-recovery ticks at lag-2 of post-zero-triplet relays cluster in 40m mode of synth #335/#340 bimodal attractor (Add.158 width 42m06s = 40m mode); falsifier = next 3 broad-recovery ticks all land in 55m+ mode.

**Open questions:**
- Is the lag-2 maximum depth of M-156.R relay topology a **structural bound** (cross-repo silence-exit cannot sustain strict cross-repo singleton beyond 2 hops) or a **window-of-observation artifact** (W17 happens to have only one zero-triplet recovery instance with insufficient sample)? Test: monitor W18+ for additional post-zero-triplet recovery sequences and tally relay depths.
- Does broad-recovery multi-shape concurrency reflect **independent silence-break events** at the broad-recovery boundary, or **boundary-correlated triggering** (a shared external trigger releasing all suppressed merges simultaneously)? Test: examine timestamp clustering within broad-recovery ticks — Add.158 has 4 merges spread across 32m55s of the 42m06s window, suggesting independent rather than correlated events.
- Is the qwen-code intra-repo emitter rotation (wenshao→shenyankm across Add.156→158) a **deliberate maintainer rotation** or **incidental author availability**? Test: examine qwen-code emitter sequence across W17 to identify whether wenshao+shenyankm form a primary maintainer pair.
- Does the codex M-158.C dual-merge same-surface coherence (TUI/goal) reflect **maintainer ownership topology** of etraut-openai over the TUI/goal surface, or **opportunistic batch flush of unrelated PRs** that happen to share surface? Test: track future codex emissions by etraut-openai and check surface coherence of multi-merge ticks.
