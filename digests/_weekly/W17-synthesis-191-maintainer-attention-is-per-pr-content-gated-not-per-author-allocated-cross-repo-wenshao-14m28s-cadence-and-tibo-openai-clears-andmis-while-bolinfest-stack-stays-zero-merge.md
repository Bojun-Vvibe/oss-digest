# W17 synthesis #191 — maintainer-attention is per-PR-content gated, not per-author allocated: cross-repo evidence from `wenshao` clearing B-A-M-N #3653 in 1h22m while 4 sibling B-A-M-N PRs stay dormant, and `tibo-openai` merging andmis #19733 in 25m19s while bolinfest's 5-PR `permissions:` stack receives zero merges in the same 42m

**Lens novelty vs synth #180–#190.** Synths #180–#190 are exclusively framed in **author-internal** topology: stack-bootstrap (#180, #189), stack-collapse (#185), single-author cadence (#181, #186, #190), single-author coupling (#182, #187), and cross-author content-coupling on shared files (#183, #188). None of them treat **the maintainer / merger identity** as a first-class analytical dimension. Synth #184 (BAMN dormancy → per-PR-gate-latency reframe) brushed against gate-latency but kept the gate as an *unattributed property of the PR*, not a *property of a named maintainer's review queue*. This synth introduces **maintainer-attention-allocation** as the missing axis.

## The four merge events of 2026-04-27 W17 morning, attributed by `merged_by`

| Repo | PR | Author | merged_by | merged_by ≠ author? | Lifespan | Source |
|---|---|---|---|---|---|---|
| qwen-code | #3593 | DragonnZhang | **wenshao** | yes | 2d15h00m48s | Add.72 §3 |
| qwen-code | #3653 | B-A-M-N | **wenshao** | yes | 1h22m26s | Add.73 §1 |
| openai/codex | #19605 | andmis | tibo-openai (verify queued) | likely yes | 1d1h28m15s | Add.72 §2 |
| openai/codex | #19733 | andmis | **tibo-openai** | yes | 25m19s | Add.73 §2 |

Across the four merges, **zero are self-merges**. The merger is the maintainer in every case. `wenshao` performed two qwen-code merges with **inter-merge gap 14m28s** (00:29:51Z → 00:44:19Z); `tibo-openai` performed one verified codex merge during the same morning (with #19605's merger queued for verification but very likely also tibo-openai based on the andmis review history).

This contrasts sharply with the synth #182 / #187 / #190 / #191-precursor "single-author self-merge" framing that dominated W17 up to Add.71. **The W17 self-merge regime appears to be a prefix-of-week phenomenon**, and the late-window regime is **maintainer-mediated**.

## The asymmetry: B-A-M-N has 5 open PRs, 1 cleared in 1h22m, 4 stay open

At Add.73 window close:

- B-A-M-N PRs in qwen-code: **#3631** (1d21h, OPEN), **#3645** (OPEN), **#3648** (OPEN), **#3654** (1h16m, OPEN). Cleared: **#3653** (1h22m26s, MERGED).
- bolinfest PRs in openai/codex: **#19395** (8d2h, OPEN), **#19734/#19735/#19736/#19737** (~46m at window close, all OPEN). Cleared: **#19394** (2d8h40m, MERGED at 00:43:33Z, 16 seconds before window open).

The **per-author merge-rate within the 42m Add.73 window**:
- **B-A-M-N: 1/5 cleared** (20%) in 42m.
- **bolinfest: 0/5 cleared** (0%) in 42m, despite 5 author-side updates in the same window.
- **andmis: 1/1 cleared** (100%) in 25m19s.

If the gate were **per-author-allocated** (synth #176 author-dormancy framing), B-A-M-N's 5 PRs should clear at roughly equal rates and bolinfest's 5 PRs should clear at roughly equal rates within an author-allocated time-share. Instead, **content selectivity dominates**:

- The B-A-M-N PR that cleared (#3653) is a **6-file `refactor(config):` dedupe with `[Regression]` and `[Additional]` tests** (+197/−32). The 4 that stayed open include #3631 `feat(stats): add model cost estimation` (a feature, not a refactor; broader scope; no test guard call-out in title) and #3654 `refactor: unify tool execution logic across Interactive, Non-Interactive, and ACP modes` (a 3-mode unification — wider blast radius than #3653's single-helper extraction).
- The bolinfest PRs that stayed open are all **architectural `permissions:` tier changes** on `codex-rs/core/permissions/*`, where the depth-5 chained-base topology (synth #189) forces the maintainer to either merge bottom-up serially or wait for the author to flatten — a **content-driven structural reason** for non-merge, not an attention deficit.
- The andmis PR that cleared (#19733) is a **single-feature scoped change** to `agents.max_threads` working with `multi_agent_v2` — narrow, testable, no chained-base.

## Falsification of synth #184 strong form, weak-form re-statement

**Synth #184 strong form** (as written): "BAMN dormancy reclassified as per-PR-gate latency 22h merge of #3629 and sub-2m superseded close of #3651 falsify synth #176 author-level dormancy." This treated gate-latency as a *PR-attached constant* in the 22h class.

**Falsification.** #3653 cleared in **1h22m26s = 4945s ≈ 0.061 days**. The synth #184 reference (#3629 at 22h) is **~16× the #3653 latency**. A single-constant per-PR-gate-latency model cannot accommodate a 16× spread within the same author's PRs over a 3-day W17 window.

**Weak-form re-statement (synth #191 contribution).** Per-PR latency exists and is **non-author-determined**, but it is **content-driven and maintainer-attention-mediated**, with content shape (refactor-with-tests vs feature-with-broad-scope vs architectural-tier-change) selecting the maintainer's clearance order independent of author identity, PR age, or author's other-PR backlog count.

## Maintainer-cadence as a new W17 measurable

`wenshao` 14m28s inter-merge gap on disjoint surfaces is the **first qwen-code maintainer-cadence datum** in the W17 corpus. By comparison, the W17 author-cadence corpus has 30-minute metronome (synth #83), sub-15-min self-merge metronome (synth #91), and sub-2h author-session cadence dilation (synth #95). **Maintainer cadence at 14m28s is faster than every author cadence in the W17 corpus** except synth #92's same-second 4-PR open tuplet (which was an open burst, not a merge sequence).

This suggests maintainer-cadence is a tighter constraint than author-cadence and may explain the sub-30m clearance times of #3653 and #19733: the maintainer is on a short cycle and clears whatever fits the cycle.

## Predictions for Add.74

- **P191a:** If `wenshao` returns within **~30 minutes** of 00:44:19Z (i.e. by 01:14:19Z) and clears one of B-A-M-N's remaining 4 PRs, prefer **#3654** (the most recently opened refactor with explicit narrow scope) over #3631 (broader feature). **Status at Add.73 close (01:26:00Z):** P191a window expired with no further wenshao merge — **provisionally falsified for the 30m horizon**, hold open for 2h horizon.
- **P191b:** `tibo-openai` will not clear any bolinfest `permissions:` stack PR within the next 1h (until 02:26:00Z) because the chained-base topology forces a serial bottom-up sequence and the foundation #19395 is itself still OPEN at 8d2h.
- **P191c:** If a **5th maintainer merge** occurs in W17 morning, prefer the maintainer to be `wenshao` again (qwen-code) over `tibo-openai` (codex), because qwen-code has 1 dormant cross-author PR (#3647 by shenyankm, updated within window) ready and codex has the heavy-stack-occupied state.

## Cross-references

- Refines / falsifies-strong-form: synth #176 (author-dormancy), synth #184 (per-PR-gate-latency).
- Orthogonal axis to: synth #180/#183/#185/#188/#189 (all author-internal stack topology), synth #182/#187/#190 (all author-coupling), synth #98 (bot-driven sweeps; here all four merges are human-maintainer-driven).
- Sets up: synth #192 (cross-author content-coupling under maintainer-mediated merge regime — the abhinav-oai #19739 vs bolinfest 5-PR stack on `codex-rs/config/src/config_requirements.rs`).
