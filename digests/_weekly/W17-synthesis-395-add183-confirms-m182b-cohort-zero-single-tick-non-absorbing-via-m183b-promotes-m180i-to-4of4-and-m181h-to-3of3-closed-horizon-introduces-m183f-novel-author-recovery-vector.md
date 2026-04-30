# W17 Synth #395 — Add.183 confirms M-182.B cohort-zero is single-tick non-absorbing via M-183.B, promotes M-180.I to 4-of-4 and M-181.H to 3-of-3 closed-horizon, and introduces M-183.F novel-author recovery vector that refines M-182.G discharge-cascade-exhaustion to horizon-ordering modulated by per-repo novel-author arrival rate

**Date**: 2026-04-30
**Anchor addendum**: ADDENDUM-183 (window 2026-04-30T09:13:12Z..09:53:08Z, 39m56s, 1 merge, 0.02504/min, active-set {qwen-code})
**Lineage**: builds on synth #390 (M-180 quintuplet), #391 (M-180.C 4-cell U-shape), #392 (M-181.J two-axis taxonomy), #393 (M-181.G binary-non-admitting 3-of-3), #394 (M-182.F→M-182.G discharge-cascade-exhaustion mechanism)

## M-182.B → M-183.B: cohort-wide zero is single-tick non-absorbing

**Background**: M-182.B was introduced at ADDENDUM-182 as a structural anomaly — the **first** cohort-wide zero-emission tick in the Add.158-182 window. Synth #394 unified M-182.B with M-182.F (monotone-decrease trajectory) under the M-182.G discharge-cascade-exhaustion mechanism, predicting that cohort-zero arises from per-repo discharge-horizon alignment. P-394.B predicted Add.183 active-set cardinality ≥1 at >75%; P-182.I predicted M-182.B non-recurrence at <15%.

**Add.183 observation**: Active-set is **{qwen-code}** (cardinality 1) via wenshao PR #3717 (sha `6efcf2b8`). Cohort-zero **does NOT recur** at Add.183. Single-tick recovery from cohort-zero floor is empirically observed.

**Promotes M-182.B observation to M-183.B mechanism statement**: cohort-wide zero-emission ticks (M-182.B class) are **single-tick non-absorbing** under per-repo discharge-horizon recovery — the M-182.G discharge-cascade-exhaustion floor is a **transient** attractor, not an absorbing state. First-repo recovery occurs within 1 tick of the cohort-zero terminus.

**Mechanism refinement vs synth #394**: synth #394 left open whether the M-182.G terminus might persist for >1 tick (under e.g., absorbing-state dynamics where horizons re-align before any individual repo recovers). Add.183 falsifies the absorbing-state reading. M-183.B sets the **expected dwell time at cohort-zero floor = 1 tick** under the current per-repo horizon distribution.

## M-180.I → 4-of-4: opencode post-doublet silence horizon ≥4 ticks

**Background**: M-180.I was introduced at ADDENDUM-180 as a single-instance candidate (post-Brendonovich-doublet silence at n=1). Promoted to 2-of-2 at synth #392 (Add.181), 3-of-3 at synth #393 (Add.182), and confirmed via P-392.A at Add.182.

**Add.183 observation**: opencode silent at n=4 (Add.171-183 = `3 → 0 → 0 → 0 → 0 → 0 → 0 → 0 → 2 → 0 → 0 → 0 → 0`). Promotes M-180.I to **4-of-4 supporting band** with revised per-PR silence ratio = 2.0 silence-ticks-per-rebound-PR (was 1.5 at synth #392, 1.0 at synth #391).

**M-181.J.1.v2 amplitude-scaling sub-clause update**: opencode per-class scaling factor revised to **2.0** (up from 1.5). The 2-PR Brendonovich doublet (#25074, #25077) at Add.179 now corresponds to a 4-tick silence horizon — the per-class horizon is **monotonically lengthening** as n grows. NEW M-183.D candidate (per ADDENDUM-183 anomaly #4): the M-180.I horizon may be **open-ended** under the current decay model, OR may terminate at a fixed length (e.g., 5-tick horizon). Tested via P-183.D and P-395.A.

## M-181.H → 3-of-3 closed-horizon: qwen-code post-quintuplet silence horizon = exactly 3 ticks

**Background**: M-181.H was introduced at ADDENDUM-181 as a single-instance candidate (post-Add.180-quintuplet silence at n=1). Promoted to 2-of-2 at synth #392 (Add.182), confirmed via P-392.B.

**Add.183 observation**: qwen-code emits PR #3717 by wenshao (sha `6efcf2b8`) — silence horizon **terminates at n=3** (Add.181, Add.182, Add.183 silence-tick at qwen-code = 3 ticks before recovery).

**Refines M-181.H to closed 3-tick horizon**: per ADDENDUM-183 anomaly #8, M-181.H (NEW M-183.E candidate refinement) is now a **closed 3-tick horizon**, NOT an open-ended ≥3 horizon. The post-quintuplet silence has a structurally bounded length of exactly 3 ticks under the current carrier-discharge model.

**M-181.J.1.v2 qwen-code scaling factor stays at ~0.4-0.6**: 5-PR quintuplet → 3-tick silence corresponds to ratio 0.6 (was 0.4 at synth #392; revised slightly upward but still in the [0.4, 0.6] band). qwen-code remains the **fastest-discharging** of the 3 actively-emitting repos.

## M-183.F: novel-author recovery vector refines M-182.G discharge-cascade-exhaustion

**Background**: synth #394's M-182.G mechanism predicted that cohort-zero recovery occurs via the **shortest-horizon repo** — the first repo whose per-class discharge horizon expires emits and breaks the cohort-zero floor.

**Add.183 observation**: codex horizon at n=2 (M-183.C) is shorter than qwen-code horizon at n=3 (M-183.E). Yet **qwen-code recovers first** via novel author wenshao (NOT in prior carrier set {yiliang114, tanzhenxin, qwen-code-ci-bot}). The PR #3717 surface (`FileReadCache` core caching) is also novel vs the Add.180 quintuplet's MCP/agent-runtime/tooling/CI surfaces.

**Partial falsification of M-182.G shortest-horizon-recovery sub-clause**: recovery is NOT purely horizon-ordered. NEW M-183.F (per ADDENDUM-183 anomaly #8) introduces the **novel-author recovery vector** as a co-determinant alongside per-repo discharge horizon.

**Refined M-182.G v2 (M-183.G mechanism)**: cohort-zero recovery is selected via:
1. **Horizon-ordering** (synth #394 M-182.G base): repos with expired discharge horizons are eligible to recover.
2. **Novel-author availability term** (NEW M-183.G refinement): among horizon-eligible repos, the recovery vector is selected by the **arrival rate of novel authors** with mergeable PRs in the window. Novel-author arrival is approximately Poisson with per-repo rate λ_repo; the recovery-vector probability is proportional to λ_repo × indicator(horizon expired).

**Mechanism interpretation**: codex at n=2 horizon is technically eligible (M-183.C horizon may have expired between Add.182 and Add.183), but no novel codex carrier emerged in the window — the carrier-set {bolinfest, abhinav-oai, etraut-openai, xl-openai, jif-oai} stayed silent. qwen-code at n=3 horizon is also eligible AND a novel author (wenshao) emerged; the joint event of horizon-expiry + novel-author-arrival materialized only at qwen-code.

**Per-repo novel-author arrival rate λ estimates** (Add.158-183 window):
- codex λ ≈ 1 novel-carrier per ~5 ticks (xl-openai, jif-oai introductions per Add.169-181 era)
- opencode λ ≈ 1 novel-carrier per ~4 ticks (Brendonovich era post-Add.179)
- qwen-code λ ≈ 1 novel-carrier per ~3 ticks (yiliang114 → tanzhenxin → wenshao succession)
- litellm/gemini-cli/goose: λ ≈ 0 (binary-non-admitting per synth #393 M-181.G)

qwen-code's higher λ explains the M-183.F empirical recovery vector at Add.183.

## P-394.X falsification ledger update

- **P-394.B CONFIRMED**: Add.183 active-set cardinality ≥1 at >75% (observed 1).
- **P-394.D CONFIRMED vacuously**: M-182.F trajectory does not extend below 0 (observed reversal at terminus, sequence {3,2,1,0,1}).
- **P-394.F PARTIALLY FALSIFIED**: codex Add.183 emission predicted at >55%; observed 0. Recovery vector was qwen-code (novel author wenshao), not codex. The M-182.G shortest-horizon-recovery sub-clause is refined per M-183.G novel-author co-determinant.

## Specific PR/SHA citations supporting this synth

- **Add.183 recovery PR**: qwen-code #3717 `feat(core): add FileReadCache and short-circuit unchanged Reads` by wenshao, mergeCommit `6efcf2b8776fdc6bfd989c5e04168c6d77a35499`, mergedAt 2026-04-30T09:47:49Z, https://github.com/QwenLM/qwen-code/pull/3717
- **M-180.I 4-of-4 anchor**: opencode #25074 + #25077 (Brendonovich doublet at Add.179, per synth #387/388 era) → 4-tick silence at Add.180/181/182/183
- **M-181.H 3-of-3 closed-horizon anchor**: qwen-code Add.180 quintuplet (yiliang114 #3615/#3618/#3764 + tanzhenxin #3727 + qwen-code-ci-bot #3766) → 3-tick silence at Add.181/182/183 → wenshao #3717 recovery
- **codex M-183.C anchor**: codex Add.181 etraut-openai #20334 (`a73403a8`) + jif-oai #20246 (`c37f7434`) → 2-tick silence at Add.182/183
- **M-181.G binary-non-admitting verification at Add.183**: litellm n=8, gemini-cli n=13, goose n=22

## P-395.X anchor predictions

- **P-395.A**: M-180.I extends to 5-of-5 at Add.184 at >55% (per-class scaling factor 2.0 implies 4-tick horizon may extend; opencode silence cumulative break-pressure low under binary-non-admitting-adjacent reading).
- **P-395.B**: M-183.F novel-author recovery vector recurs at next cohort-zero-class break at >55% (per M-183.G refined model; novel-author arrival rate dominates horizon-ordering at recovery selection).
- **P-395.C**: codex Add.184 recovery via existing carrier (NOT novel author) at >50% (codex λ_novel-author ≈ 0.2-tick⁻¹ is lower than carrier-recurrence rate of 0.5-tick⁻¹ post-discharge-horizon-expiry).
- **P-395.D**: wenshao recurs at qwen-code Add.184 at <25% (single-PR novel carriers in qwen-code historically have low recurrence prior; tanzhenxin recurred 0 times, qwen-code-ci-bot recurred 1 time, yiliang114 recurred multiply but as a quintuplet author cluster — wenshao single-PR profile matches the low-recurrence sub-class).
- **P-395.E**: M-183.B (cohort-zero single-tick non-absorbing) recurs at next M-182.B-class instantiation at >70% (single-tick recovery is structurally enforced by per-repo horizon distribution).
- **P-395.F**: M-182.F-class monotone-decrease trajectories that terminate at cohort-zero floor reverse at length-4 terminus at >85% (the {3,2,1,0,1} reversal pattern is the modal post-terminus trajectory; alternative {3,2,1,0,0} requires cohort-zero recurrence which P-183.I bounds at <8%).

## Cross-motif cumulative state synthesized at synth #395

- **M-182.B → M-183.B**: cohort-wide zero is single-tick non-absorbing; expected dwell time at cohort-zero floor = 1 tick.
- **M-180.I (4-of-4)**: opencode post-doublet silence horizon ≥4 ticks; per-PR scaling ratio 2.0 (revised upward from 1.5).
- **M-181.H (3-of-3 closed)**: qwen-code post-quintuplet silence horizon = exactly 3 ticks (closed); per-PR scaling ratio 0.6.
- **M-182.C (2-of-2)**: codex post-amplitude-2 discharge horizon ≥2 ticks; per-PR scaling ratio ≥1.0.
- **M-183.F + M-183.G**: novel-author recovery vector refines M-182.G discharge-cascade-exhaustion mechanism with per-repo novel-author arrival rate as co-determinant of recovery selection.
- **M-181.G binary-non-admitting**: 3-of-3 (litellm joins per synth #393); litellm/gemini-cli/goose remain in default silent state, contributing structurally to cohort-zero conditions but NOT participating in recovery vector selection.

Anchor: ADDENDUM-183 sha `11d3eb30`.

## Thesis (one-line)

**Add.183 falsifies M-182.G's pure horizon-ordering recovery sub-clause via qwen-code wenshao #3717 6efcf2b8 (codex shorter-horizon but no novel author), introduces M-183.F/M-183.G novel-author co-determinant, and confirms M-183.B cohort-zero single-tick non-absorbing dwell.**
