# ADDENDUM-38 — 2026-04-26

**Window:** 01:06:01Z → 01:43:30Z (37m29s)

**Repos scanned:** BerriAI/litellm, openai/codex, sst/opencode, anomalyco/opencode, block/goose, charmbracelet/crush

## Merges in window

- **[BerriAI/litellm#26536]** — `krrish-berri-2`, self-merge to `litellm_internal_staging` at 01:26:35Z. `fix(memory): jsonify metadata before Prisma writes on /v1/memory`. +265/-21. **Breaks litellm's 4-consecutive-window 0-merge dry spell** (Add. 34/35/36/37 all 0).

## Opens in window

- **[BerriAI/litellm#26538]** — `frdeng`, 01:30:01Z, base `litellm_internal_staging`, +902/-182. `fix(fireworks_ai): modernize chat transforms, add Messages + Response…`. Single-author large-diff open.
- **[BerriAI/litellm#26539]** — `dependabot[bot]`, 01:30:13Z, base `litellm_internal_staging`. `chore(deps): bump gitpython 3.1.46 → 3.1.47`. +4/-4.
- **[BerriAI/litellm#26540]** — `dependabot[bot]`, 01:32:27Z, base `litellm_internal_staging`. `chore(deps-dev): bump postcss 8.5.6 → 8.5.10`. +5/-5.
- **[openai/codex#19624]** — `fcoury-oai`, 01:41:30Z, base `main`. `fix(skills): make budget warning actionable`. +99/-54.

## Notable updates / rebases

- **Stacked-PR mass-rebase #4 by `bolinfest`** on the 5-deep codex stack (#19606 ← #19392 ← #19393 ← #19394 ← #19395), all five PR head SHAs refreshed within a 6-second window centered on **01:20:34Z**. Confirmed distinct head SHAs: #19392 `45d17d3b…`, #19393 `2c828684…`, #19606 `00666224…`. **Inter-rebase intervals now: 38m43s → 25m39s → ~14m33s** = monotonic contraction across 4 successive rebase events (synth #119 anchor + extension).
- **`fcoury-oai` keymap-stack pair** (#18594 base `fcoury/keymap-core`, #18595 base `fcoury/keymap-command`) both updated at **01:32:56Z** — same-second pair refresh on a 2-PR personal-base stack while same author also has #19617 (TUI logo) and just opened #19624 (skills budget). **3 simultaneously-live PR threads + 1 fresh open from one author on disjoint surfaces in 37 minutes.**
- **codex #19617** (`fcoury-oai` `feat(tui): add codex logo to session header`) updated 01:35:36Z — replacement PR for closed #19616, still iterating 50m post-refile (lifespan now > original #19616's 7m48s).
- **codex #19620** (`etraut-openai` `Escape turn metadata headers as ASCII JSON`) updated 01:19:35Z — paired with prior-window same-author #19618.
- **litellm #26526** (`mubashir1osmani` arize observability) updated 01:42:00Z, still OPEN.

## Patterns

- **Litellm 0-merge dry spell snapped at exactly 4 windows (Add.34→37) by another `*-berri` self-merge.** All 5 of last 5 litellm staging events trace to one author cohort (krrish-berri-2 / mateo-berri / Michael-RZ-Berri / ryan-crabbe-berri). Author-monoculture (synth #102) holds across the dry-spell gap.
- **Dependabot bot-pair (#26539 + #26540) opened 2m14s apart** on identical base `litellm_internal_staging` — bot batch concentration into a single sub-3-minute window (synth #122 anchor).
- **Codex stack 4th rebase confirms intervals: 38m43s, 25m39s, 14m33s**. Geometric-decay-like contraction (each interval ~63% of prior). Falsifies "stable cadence" hypothesis from synth #117; reinforces synth #119 acceleration.
- **`fcoury-oai` n-stream concurrency**: simultaneously stewarding 4 distinct PRs (#18594, #18595, #19617, #19624) on 4 disjoint surfaces in <40 min, with 1 freshly opened. Goes beyond synth #92 (same-second n=4 open tuplet) — this is **same-author n=4 *active-stewardship* tuplet on heterogeneous PR ages** (synth #121 anchor).
- **Anomalyco/opencode + crush + sst/opencode + goose: 4 consecutive empty windows.** Crush is now at 4 consecutive empty windows — sustained freeze.

## Notable closures

- None this window.

## Window merge-rate

| Repo | Add. 35 | Add. 36 | Add. 37 | Add. 38 |
|------|---------|---------|---------|---------|
| codex | 1 | 1 | 1 | 0 |
| litellm | 0 | 0 | 0 | 1 |
| anomalyco/opencode | 0 | 0 | 0 | 0 |
| sst/opencode | 0 | 0 | 0 | 0 |
| crush | 0 | 0 | 0 | 0 |
| goose | 0 | 0 | 0 | 0 |
| **Total** | **1** | **1** | **1** | **1** |

**Four-window flatline at exactly 1 merge/window**, but with a **repo-handoff** at the Add.37→38 boundary: codex shed its 3-window self-merge sole-source role; litellm picked it up via `krrish-berri-2`. **Day-tail merger-of-record rotates without changing total throughput.**
