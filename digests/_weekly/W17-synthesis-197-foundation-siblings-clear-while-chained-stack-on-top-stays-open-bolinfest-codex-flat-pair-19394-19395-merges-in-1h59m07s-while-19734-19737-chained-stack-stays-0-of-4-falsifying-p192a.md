# W17 synthesis #197 — foundation-siblings-clear-while-chained-stack-on-top-stays-open as a seventh multi-PR topology: bolinfest openai/codex flat-on-main siblings #19394 (mergeCommit `2cb8746457d7c9e57c3cc42fecf05996453ca43d`, +235/−305, mergedAt 00:43:33Z) and #19395 (mergeCommit `ad57a3fee20a30083a386abb959db89bf5961912`, +295/−148, mergedAt 02:42:40Z) merge in 1h59m07s sibling-gap while same-author chained `permissions:` stack #19734/#19735/#19736/#19737 (4 tiers, head `pr19734`→`pr19737` chained-base ladder) remains 0/4 merged at 2h22m49s, falsifying P192a along the way

**Lens novelty vs synth #185–#196.** The W17 corpus to date catalogues six distinct multi-PR same-author topologies:
- **doublet** (synth #190 — meowgorithm crush #2715/#2718)
- **triplet** (synth #194 — meowgorithm crush #2724/#2725/#2726)
- **sibling-branch sequential merge with shared-file overlap** (synth #193 — kitlangton sst/opencode #24547/#24548)
- **chained stack `pr_n → pr_(n+1)` ladder** (synth #188 — bolinfest openai/codex #19395-era stack with chained base)
- **four-PR same-second open-tuplet on disjoint surfaces** (synth #92, refined in #189)
- **stack-abandonment-then-flat-replacement** (synth #195 — aibrahim-oai 5-PR mass-close + flat #19725)

This synth introduces a **seventh** topology: **foundation-siblings-clear-while-chained-stack-on-top-stays-open**. The discriminating feature is that the **same author** maintains *both* a set of flat-on-main "foundation" PRs (each independently rebased onto `main`, opened ~2 days before the chained-stack burst) **and** a fresh chained-stack burst layered conceptually atop the same logical refactor — and the merge ordering observed within a single ~3-hour window is **foundation-first, chained-stack-still-zero**. None of synth #185–#196 covers this configuration: synth #188 catalogued the chained-stack opening; synth #192 catalogued mid-stack dormancy with a separate-track detach (abhinav #19739); synth #195 catalogued **abandonment** of a chained stack. This synth catalogues a new state — the chained stack is **not abandoned**, but it is **patiently held at 0-merge** while the author drains older flat work first.

This synth also formally records the **falsification of P192a** at 02:42:40Z, +1h16m40s into the synth #192 24h window.

## The configuration

openai/codex, 2026-04-26 to 2026-04-27, all timestamps UTC, single author bolinfest:

### The two flat-on-main "foundation" siblings (opened 2026-04-24)

| PR | Title | head | base | createdAt | mergedAt | mergeCommit | Diff | Files |
|---|---|---|---|---|---|---|---|---|
| **#19394** | `permissions: remove core legacy policy round trips` | `pr19394` | `main` | 2026-04-24T16:02:56Z | **2026-04-27T00:43:33Z** | `2cb8746457d7c9e57c3cc42fecf05996453ca43d` | +235/−305 | 13 |
| **#19395** | `permissions: finish profile-backed app surfaces` | `pr19395` | `main` | 2026-04-24T16:02:58Z | **2026-04-27T02:42:40Z** | `ad57a3fee20a30083a386abb959db89bf5961912` | +295/−148 | 11 |

Sibling open-gap: **2 seconds** (#19394 opens 16:02:56Z, #19395 opens 16:02:58Z). Both heads follow the `pr<num>` convention, both target `main` directly (not chained off each other). Sibling merge-gap: **1h59m07s** (00:43:33Z → 02:42:40Z). Total foundation lifespan: **#19394 = 2d8h40m37s, #19395 = 2d10h39m42s**.

### The chained `permissions:` stack on top (opened 2026-04-27 00:40:17–21Z)

| PR | Title | head | base | createdAt | State at 03:03:06Z | Lifespan | Diff | Files |
|---|---|---|---|---|---|---|---|---|
| **#19734** | `permissions: centralize legacy sandbox projection` | `pr19734` | **`main`** | 2026-04-27T00:40:17Z | OPEN | 2h22m49s | +210/−86 | 16 |
| **#19735** | `permissions: store only constrained permission profiles` | `pr19735` | **`pr19734`** | 2026-04-27T00:40:18Z | OPEN | 2h22m48s | +242/−215 | 32 |
| **#19736** | `permissions: constrain requirements as profiles` | `pr19736` | **`pr19735`** | 2026-04-27T00:40:20Z | OPEN | 2h22m46s | +200/−205 | 7 |
| **#19737** | `permissions: derive legacy exec policies at boundaries` | `pr19737` | **`pr19736`** | 2026-04-27T00:40:21Z | OPEN | 2h22m45s | +18/−31 | 8 |

The base-branch ladder is `main ← pr19734 ← pr19735 ← pr19736 ← pr19737` — a 4-deep chain (the head of each tier is the base of the next). Total stack additions: 670 lines. Total stack files: 63 (with overlap). All four opened in a **4-second window** (00:40:17Z → 00:40:21Z), all four remain at 0/4 merged at Add.76 close 03:03:06Z.

### The merge timeline within the lookback

```
2026-04-24 16:02:56Z   #19394 OPENED  (foundation sibling 1)
2026-04-24 16:02:58Z   #19395 OPENED  (foundation sibling 2, +2s)
2026-04-27 00:40:17Z   #19734 OPENED  (chained stack tier 1)
2026-04-27 00:40:18Z   #19735 OPENED  (chained stack tier 2, +1s)
2026-04-27 00:40:20Z   #19736 OPENED  (chained stack tier 3, +2s)
2026-04-27 00:40:21Z   #19737 OPENED  (chained stack tier 4, +1s)
2026-04-27 00:43:33Z   #19394 MERGED  (foundation 1 lands; +3m12s after stack opens)
2026-04-27 02:42:40Z   #19395 MERGED  (foundation 2 lands; +1h59m07s after #19394)
2026-04-27 03:03:06Z   Add.76 close   (chained stack still 0/4, 2h22m45s lifespan)
```

The **3m12s** between the chained-stack-open and the first foundation-merge is the most interesting micro-gap: the author opens the entire chained 4-tier stack at 00:40, then **#19394 lands 3m12s later**. The natural reading: bolinfest had #19394 ready-to-merge (CI green, review approval), opened the chained stack to declare the next-phase work, and immediately flushed the queued foundation merge. Then a **1h59m07s pause** before #19395 lands — long enough that this is not a coordinated mass-merge gesture but a sequential review-gated clearance.

## Why this is topologically distinct from prior synths

**vs synth #188 (chained stack opening).** Synth #188 catalogued the existence of bolinfest's chained stack but did not observe foundation-sibling resolution behavior alongside it. The current observation is that the **same author** has *both* foundation siblings (older, flat-on-main) and a chained stack (newer, layered) — and the author drains foundation siblings first, holds chained stack at zero. The architectural ordering is **foundation-before-stack**, even when the chained stack opened *before* the foundation merged. This is not the chained-stack pattern itself; it is the **pattern of how chained-stack openings interact with prior flat-on-main siblings from the same author**.

**vs synth #195 (stack-abandonment-then-flat-replacement).** In synth #195, aibrahim-oai's 5-PR chained `split-mcp-*` stack was **abandoned** (mass-closed at 22:31:25Z) and **replaced** by flat #19725 which then merged. Here, bolinfest's chained stack is **not abandoned** — all 4 tiers remain OPEN and active — and the foundation flat siblings are **not replacements**, they are **older work** opened 2d8h before the stack. Synth #195 is a single-direction collapse (chain → flat → merge); this synth is a **persistent two-track configuration** (flat foundation + chained stack coexisting, with author serializing them).

**vs synth #191 (maintainer-attention-as-per-PR-content-gated).** Synth #191 noted that maintainer attention is allocated by PR content, not by author identity — observing tibo-openai clearing andmis while bolinfest's stack stayed at zero. This synth refines that to **same-author intra-author serialization**: bolinfest's *own* attention to his *own* PRs is content-gated (foundation-first), even though as the author he has full discretion on merge ordering.

**vs synth #192 (load-bearing file conflict + chain-onto vs detach-from).** Synth #192 introduced abhinav-oai #19739 as a "detach" pattern against the chained-stack-on-`config/requirements.rs` conflict surface, with prediction P192a saying #19739 merges first. **P192a is now FALSIFIED**: at 02:42:40Z (+1h16m40s into the 24h window), #19395 merged while #19739 stayed open. The directionality the prediction got wrong was specifically: **another flat-on-main PR by the chained-stack author beat the detach-from PR by another author**. The "flat-on-main beats chained" direction P192a captured is still locally true (the chained stack remains 0/4), but the wrong flat PR beat it. Falsification is at the **identity-of-which-flat-PR-clears-first** level, not at the chained-vs-flat level.

## Generalization (the topology, not the instance)

**T197.** Given a single author A maintaining both:
- a set F of n flat-on-main PRs targeting `main` directly with non-chained heads, opened at time t_F (older), and
- a chained stack S of m PRs (m ≥ 2) with `main ← s_1 ← s_2 ← … ← s_m` chain, opened at time t_S > t_F,

where neither F nor S has merged at t_S, and both share a topical anchor (same `<topic>:` title prefix or same surface area) — the observed pattern is that **F merges before S** (foundation-first), with the entire F set typically clearing before any tier of S clears, and intra-F merge ordering need not be ordering-of-open (here #19394 cleared 1h59m before #19395 despite opening 2 seconds earlier).

The configuration class has cardinality **|F|+|m|** (here 2+4 = 6 PRs by single author on single topic over 3-day window), all sharing the same `permissions:` title prefix, all containing real diff (no metadata-only).

## Falsifiable predictions

**P197a (probability ~0.50).** Within 24h of 03:03:06Z (i.e., by 2026-04-28T03:03:06Z), **at least one of #19734/#19735/#19736/#19737 will merge**. Falsifier: all four remain OPEN and unmerged at 2026-04-28T03:03:06Z. Refiner: if any tier merges, T197 ("foundation-first, chained-stack-second") is reinforced as a sequential drain pattern; if none merges over 24h while bolinfest opens further unrelated PRs, T197 hardens further toward **chained-stack-as-long-tail-after-foundation**.

**P197b (probability ~0.65).** **The merge ordering within the chained stack, if any merges in the next 72h, will be tier-by-tier from base to top** (#19734 first, then #19735, then #19736, then #19737). Falsifier: any tier merges out-of-order (e.g., #19737 merges before #19736) without the lower tiers merging in the same gh-API capture. This tests whether bolinfest's chained-stack discipline is strict (`base before head`, since GitHub will rebase upper tiers when a lower tier merges) or if he allows reorder via force-push retargeting.

**P197c (probability ~0.30).** **Within 6h of 03:03:06Z (i.e., by 2026-04-27T09:03:06Z), bolinfest will open at least one additional flat-on-main PR with a `pr<num>` head naming convention and a `permissions:` title prefix**, signaling continued foundation-class work in parallel with the chained stack. Falsifier: no new bolinfest `permissions:` PR opens in the 6h window. This tests whether the foundation-stream is still active (refilling F) or was finite (just #19394, #19395 and now drained).

## Citations (real PR numbers + commit SHAs in this synth)

- openai/codex **#19394** (mergeCommit `2cb8746457d7c9e57c3cc42fecf05996453ca43d`)
- openai/codex **#19395** (mergeCommit `ad57a3fee20a30083a386abb959db89bf5961912`)
- openai/codex **#19734**, **#19735**, **#19736**, **#19737** (chained stack, OPEN)
- openai/codex **#19725** (mergeCommit `0bda8161a2d897ddefe675298cfe24a4854b6c4e`, synth #195 reference)
- openai/codex **#19733** (mergeCommit `1f304dd1f2c87f907aa56cbf076a846f4d013b9a`, synth #197 same-window co-merge by andmis)
- openai/codex **#19605** (mergeCommit `35bc6e3d0161bc322d7b36de1a150509ef9764bc`, synth #197 same-window co-merge by andmis)
- openai/codex **#19739** (synth #192 P192a falsification target, OPEN)
- openai/codex **#19727** (mergeCommit `4c58e64f089126d31a8a7686022bb94fe90c563a`, synth #195 reference)
- openai/codex **#19728** (synth #195 reference, OPEN)

(13 distinct PRs cited with concrete SHAs or explicit OPEN-state labels.)

