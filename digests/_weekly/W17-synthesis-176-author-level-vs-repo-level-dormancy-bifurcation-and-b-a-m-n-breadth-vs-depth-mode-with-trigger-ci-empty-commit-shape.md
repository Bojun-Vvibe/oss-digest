# W17 Synthesis #176 — Author-level vs repo-level dormancy bifurcation, and same-author within-window mode bifurcates into breadth (n=5 fan-out) vs depth (single-PR multi-commit incl. `trigger CI` empty-commit)

**Date:** 2026-04-26
**Window:** Add.65 (2026-04-26T18:24:04Z → 19:14:16Z)
**Anchor PRs:** codex #19635 (shijie-oai) + #19606/#19683 (bolinfest, dormant); qwen-code #3645 (B-A-M-N, head rolled cfaf5a10 + 4f7a1aa4)
**Status:** Refines synth #167 (cardinality halving); refines synth #156/#160 (B-A-M-N n-fan-out framing); introduces dormancy-scope distinction missing from synth #131–171 chain

---

## Observation 1: codex repo-active ≠ bolinfest-active

In Add.65, codex/codex repo registers a state-change event (#19635 by shijie-oai, head churn at 18:52:39Z). Synth #167's cross-repo cardinality framing and synth #173's silence-break taxonomy would classify codex as "active" this window.

**But bolinfest, the author whose stack drove synth #131 / #138 / #161 / #166 / #170 / #171, is silent.** Stack last touched 16:04:50Z (#19683) and 16:04:33Z (#19606). At Add.65 close, dormancy = ≥189m43s (3h09m43s) — **+109.5% over synth #166's 90m33s envelope**, the **7th consecutive falsification** in the cadence chain.

The synth #166–#171 chain implicitly conflated:
- **Repo-level dormancy** ("codex is silent this window")
- **Author-level dormancy** ("bolinfest's stack is dormant")

These are now **provably distinct**:
- Add.62: codex = bolinfest-only-active (synth #162 two-active-repo regime). Repo-level = author-level.
- Add.63: codex = bolinfest-only-active. Repo-level = author-level.
- Add.64: codex silent at both levels. Repo-level = author-level.
- **Add.65: codex repo-active (shijie-oai #19635), bolinfest dormant. Repo-level ≠ author-level for the first time in W17.**

## Observation 2: B-A-M-N within-window mode bifurcates

B-A-M-N's W17 trajectory:
- **Add.55 → 60**: same-author n=3 → n=4 → n=5 fan-out across **disjoint surfaces** (synth #156, #160). Width-mode.
- **Add.61 → 63**: B-A-M-N n=5 active-set quiesces into long-tail #3648 (synth #160 falsification at n=5).
- **Add.64**: B-A-M-N silent.
- **Add.65 (NEW)**: B-A-M-N returns on **single PR #3645** with **two in-window commits** on the same head:
  - **18:26:19Z** `4f7a1aa4` `fix(types): remove unused type annotation from mock` (substantive)
  - **19:06:34Z** `cfaf5a10` `trigger CI` (empty CI re-roll)

This is **depth mode**, not breadth mode. PR is +354/-12, 2 files — concentrated, NOT distributed.

**The `trigger CI` empty-commit shape is novel for B-A-M-N in tracked sequence**:
- Distinct from synth #98 (bot-driven sub-10s n=3 stale-PR sweep — bot, not human).
- Distinct from synth #96 (same-second n=5 metadata-only touch on stacked PRs — multi-PR, not single).
- This is a **manual CI re-roll empty-commit on a single PR**, indicating B-A-M-N is debugging CI rather than expanding surface.

## Bifurcation summary

Two orthogonal axes refined this window:

| Axis | Old framing | New framing |
|---|---|---|
| Dormancy scope | "repo silent / repo active" (synth #167, #173) | **repo-level vs author-level dormancy** can diverge (Add.65: codex repo active, bolinfest dormant) |
| Same-author within-window mode | "n-PR fan-out" (synth #156, #160) | **breadth mode (n=5 disjoint surfaces) vs depth mode (single PR, multi-commit incl. CI re-roll)** |

## Falsifiable predictions

- **P-176.A (bolinfest stack rebase#24 scope-bound):** When rebase#24 fires, bolinfest will touch ≥4 of the 5 stacked PRs (#19606, #19683, #19392–#19395). If rebase#24 fires touching only #19606 OR only #19683 alone, the "stack as atomic unit" framing (synth #161 redefinition to 4-PR downstream block) is itself falsified, and we revert to per-PR rebase mode.
- **P-176.B (B-A-M-N depth-mode termination):** Within next 4 windows, #3645 reaches one of {merge, close-without-merge, third in-window commit}. If it stalls at exactly 2 commits (1 substantive + 1 `trigger CI`) for ≥4 windows, depth mode is **CI-stuck**, not deep-edit, and the bifurcation is mode-degenerate (depth mode collapses into "pending CI").
- **P-176.C (author-level dormancy gap closes):** bolinfest stack rebase#24 fires within next 8 windows. If not, the chain breaks 8 consecutive falsifications and we declare the stack **abandoned** (analogous to long-tail PRs reaching ≥10-window staleness).

## What this falsifies / refines

- **Refines synth #167** (cross-repo cardinality halving): cardinality framing is repo-level only. Author-level activity within an "active" repo is invisible to it. Add.65 codex is "active" by synth #167's metric but bolinfest is dormant within it.
- **Refines synth #173** (S1/S2 silence-break taxonomy): silence-break is also a repo-level concept. Author-level silence-break needs separate taxonomy.
- **Refines synth #156, #160** (same-author n-fan-out): the "same-author N-tuple within window" was the only same-author within-window mode tracked. Add.65 introduces the **same-author single-PR multi-commit-incl-CI-retry** mode as a distinct second mode.
- **Does NOT falsify synth #166/#170/#171** (bolinfest cadence chain): the chain remains falsified at +110%; this synth describes WHY the chain keeps falsifying (the chain conflates repo and author scope, and the author-level signal is the one that matters for stack atomicity).

## Cross-references

- Synth #131, #138, #161, #166, #170, #171 (bolinfest cadence chain — all conflated repo/author scope)
- Synth #156, #160 (B-A-M-N n-fan-out — width-mode only)
- Synth #167 (cardinality halving — repo-level)
- Synth #173 (silence-break taxonomy — repo-level)
- Synth #98 (bot-driven sweep — distinguished from #176 manual CI re-roll)
- ADDENDUM-65 (codex #19635 + bolinfest dormant; qwen-code #3645 two-commit-incl-trigger-CI)
