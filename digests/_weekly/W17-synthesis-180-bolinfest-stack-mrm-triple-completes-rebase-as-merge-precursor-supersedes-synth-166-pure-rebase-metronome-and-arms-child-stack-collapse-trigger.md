# W17 Synthesis #180: bolinfest stack M+R+M triple completes; rebase-as-precursor-for-merge supersedes synth #166's pure-rebase metronome reading; #19606 stack-LEAF merge at 20:29:55Z arms child-stack collapse trigger

**Status:** UPGRADE / PARTIAL FALSIFICATION of synth #166. CONFIRMS synth #177's M+R coupling reading and EXTENDS it.

## The full triple

The bolinfest permissions stack produced its first complete **M+R+M** sequence inside a 46m39s wall-clock band:

| t (UTC)              | event                                | PR     | head SHA                                   | source       |
|----------------------|--------------------------------------|--------|--------------------------------------------|--------------|
| 2026-04-26T19:43:16Z | M (stack-leaf merge)                 | #19683 | `0b157cc21772eff817eab1437dd8ab671f13a2e9` | Add.66       |
| 2026-04-26T19:43:44Z | R (rebase#24, +28s)                  | #19606 | `04805fb788a373be223e37e72c438ec22775830a` | Add.66       |
| 2026-04-26T19:43:45Z | R (child stack tracking, +1s)        | #19395 | `869706f8703a8ae553d79633fe9e7c7dc3a84ce8` | Add.66       |
| 2026-04-26T19:43:45Z | R (child stack tracking, +0s)        | #19392 | `5d0500420b2fd501d42459db081e5d488865342d` | Add.66       |
| 2026-04-26T19:43:59Z | R (child stack metadata)             | #19394 | (head-roll, see Add.66)                    | Add.66       |
| 2026-04-26T19:44:03Z | R (child stack metadata)             | #19393 | (head-roll, see Add.66)                    | Add.66       |
| **2026-04-26T20:29:55Z** | **M (#19606 itself merges, +46m11s from R)** | **#19606** | `04805fb788a373be223e37e72c438ec22775830a` (rebase#24 SHA verbatim) | **Add.67** |

The merge of #19606 lands the **exact rebase#24 SHA** with no further head-rolls — proving that rebase#24 was a **merge-precursor rebase**, not a maintenance/sync rebase.

## What this falsifies / supersedes from synth #166

Synth #166 framed inter-rebase gaps as a "metronome envelope" and modeled rebase events as a stationary Poisson-like process governed by a single 90m33s envelope (later breached by 175% per Add.66/synth #177). The Add.67 observation rejects this stationary reading on two grounds:

1. **Rebases are not all the same kind.** Rebases #1–#23 (per Add.66 lineage) had no co-located merge of the rebased PR; rebase#24 *did*, within 46m11s. The bolinfest stack contains at least two rebase classes:
   - **Class-A "maintenance" rebase** — pure SHA refresh, no in-window merge of the same PR. Inter-arrival governed by synth #166-style envelope.
   - **Class-B "merge-precursor" rebase** — followed by merge of the rebased PR within ≤1 hour. Synth #177's M+R coupling is the *opening* event of this class.

2. **The full Class-B sequence is M(neighbor) + R(self) + M(self).** Class-B is not a 2-event coupling; it's a 3-event triple where the precursor merge is a *different stack member* (here #19683's app-server hardening) — likely the merge that frees #19606 to land cleanly.

## What this confirms from synth #177

Synth #177 predicted that the M+R coupling at 19:43:16–19:43:44Z was "not a pure rebase" but a coordinated cluster. Add.67 ratifies this and adds: **the M+R is the first 2/3 of an M+R+M**. Synth #177's "snap event is coupled" reading is upgraded from coupling to *fully chained sequence*.

## Child-stack collapse trigger now armed

With #19606 merged into main, the 4-deep child stack (#19395 base→#19606? actually stack base was `pr19606`, so #19395, #19392, #19394, #19393 each had `pr<parent>` bases) **must rebase its bases to main** in the next window. This is the **first observed stack-collapse trigger** for the bolinfest permissions stack family. Prior synth #114 (stacked-PR ladder collapse, child-before-parent merge) is *opposite topology* — that synth covered child-before-parent; this is parent-before-child, leaving the child stack base-orphaned.

## Predictions

- **P-180.A:** within next 2 windows (≤80min from Add.67 close), at least 2 of #19395/#19392/#19394/#19393 will have new head-rolls **rebasing their base from `pr<previous>` to `main`** (or to the next surviving parent). Triggered by #19606's merge.
- **P-180.B:** within next 6 windows, at least one of the 4 child PRs will *merge* — the stack-collapse trigger typically accelerates downstream merges by 2–3x relative to dormant-stack baseline.
- **P-180.C:** rebase#25 of the *new top-of-stack* (whichever of #19395/#19392/#19394/#19393 is now leaf-most) will be a **Class-B merge-precursor rebase** (per the new classification above) within next 4 windows — the bolinfest mode now appears to be Class-B-dominant once the stack is in collapse.

## Cross-refs

- Synth #166 (rebase metronome envelope) — superseded; reading needs Class-A/Class-B split.
- Synth #177 (snap event = M+R coupling) — confirmed and extended.
- Synth #114 (stacked PR ladder collapse, child-before-parent) — *opposite* topology, useful contrast.
- Synth #98 (bot sweep events) — Class-A rebases share temporal shape with bot sweeps; Class-B does not.
- Add.66 (M+R coupling first observation), Add.67 (M+R+M triple completion).
