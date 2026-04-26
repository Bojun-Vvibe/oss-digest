# ADDENDUM-39 — 2026-04-26

**Window:** 01:43:30Z → 02:22:35Z (39m05s)

**Repos scanned:** BerriAI/litellm, openai/codex, sst/opencode, anomalyco/opencode, block/goose, charmbracelet/crush

## Merges in window

- **[BerriAI/litellm#26541]** — `krrish-berri-2`, self-merge to `litellm_internal_staging` at 02:03:44Z. `Litellm memory improvements v2`. +73/-43. SHA `4ed3e712…`. Created 01:49:14Z → merged 02:03:44Z = **14m30s lifespan**. Same author as Add.38's #26536 (lifespan there 0s same-second self-merge). **Two krrish-berri-2 self-merges in two consecutive windows on the same memory subsystem** = `krrish-berri-2` n=2 cross-window self-merge series on a single thematic anchor (memory).
- **[BerriAI/litellm#26542]** — `yuneng-berri`, self-merge to `litellm_internal_staging` at 02:12:57Z. `[Infra] Rebuild UI`. +336/-336 (perfect-symmetric churn). SHA `615565c3…`. Created 02:07:04Z → merged 02:12:57Z = **5m53s lifespan**.
- **[anomalyco/opencode#24407]** — `kitlangton`, self-merge to `dev` at 01:54:59Z. `feat(httpapi): bridge experimental tool routes`. +108/-7. SHA `7cab6824…`. Created 2026-04-25T23:33:04Z → merged 01:54:59Z = **2h21m55s lifespan** (overnight carry).
- **[anomalyco/opencode#24416]** — `kitlangton`, self-merge to `dev` at 02:11:26Z. `test(provider): avoid plugin dependency install timeout`. +12/-1. SHA `f2d4d816…`. Created 02:03:29Z → merged 02:11:26Z = **7m57s lifespan**. **`kitlangton` n=2 self-merge in-window on disjoint surfaces (httpapi vs provider/test infra).**

## Opens in window

- **[openai/codex#19625]** — `etraut-openai`, 01:47:22Z, base `main`, +328/-195. `Reset TUI keyboard reporting on exit`. **Same author as still-OPEN #19620** (Add.38) `Escape turn metadata headers as ASCII JSON`; both single-author TUI-adjacent fixes — `etraut-openai` now n=2 active-stewardship in <40m on TUI/term-output surface.
- **[openai/codex#19626]** — `friel-openai`, 02:01:39Z, base `main`, +44/-7. `Preserve commentary phase for inter-agent messages`. First-appearance author this digest day.
- **[anomalyco/opencode#24420]** — `ariane-emory`, 02:10:41Z, base `dev`, +1/-1. `fix: correct typo in comment`. Trivial single-line touch.
- **[anomalyco/opencode#24422]** — `rustyaos`, 02:22:18Z, base `dev`, +20/-0. `feat(session): persist invoking slash command on user messages`.

## Notable updates / rebases

- **Stacked-PR mass-rebase #5 by `bolinfest`** on the 5-deep codex stack (#19606 ← #19392 ← #19393 ← #19394 ← #19395). 4 of 5 PRs (#19392/#19394/#19395/#19606) all `updated_at` within a 1-second band centered on **01:50:20Z**; #19393 had a separate later update at 02:12:50Z. New head SHAs: #19392 `cb9184a4…`, #19393 `2b022703…`, #19394 `440eee2c…`, #19395 `7caafabe…`, #19606 `b0de9cbd…` (all distinct from Add.38's `45d17d3b…`/`2c828684…`/`00666224…`).
  - **Inter-rebase interval rebase#4 → rebase#5: ~29m46s** (01:20:34Z → 01:50:20Z).
  - **This falsifies synth #122's geometric-decay prediction** (which required Δ ∈ [8m00s, 10m11s]). Observed Δ is ~3× the upper-bound prediction. Ratio ρ = 29m46s / 14m33s = **2.05** (vs predicted 0.55–0.70). Geometric decay is dead; cadence inverted. See synth #123.
- **codex #19620** (`etraut-openai` ASCII metadata) updated 01:51:39Z — still OPEN.
- **litellm #26538** (`frdeng` fireworks_ai, opened Add.38) updated 02:22:35Z — still OPEN, lifespan now > 52m.
- **litellm #26530** (`mateo-berri`) updated 02:03:23Z — still OPEN.
- **litellm #26504** (`Gzhao-redpoint`) updated 02:04:36Z — still OPEN, multi-day carry.

## Patterns

- **Total window throughput jumps 4× vs Add.38**: 4 merges (litellm ×2, anomalyco/opencode ×2) vs Add.38's 1. Day-tail throughput regime change at the Add.38→39 boundary; the four-window 1-merge flatline (Add.35→38) snapped.
- **Repo-handoff continues but doubles**: Add.37 was codex-sole-source; Add.38 was litellm-sole-source; Add.39 is **litellm + anomalyco/opencode dual-source** (codex contributes 0 merges this window despite being the rebase-volume leader). codex now has a **2-window merge drought** while opening 2 new PRs and absorbing a 5th stack rebase.
- **`krrish-berri-2` cross-window self-merge series on memory subsystem**: Add.38's #26536 (`fix(memory): jsonify metadata before Prisma writes`) → Add.39's #26541 (`Litellm memory improvements v2`). Two self-merges on the same thematic anchor in 37m18s gap. Same-author thematic-anchor cross-window n=2 self-merge — direct extension of synth #99 (shared spec-anchor self-merge series), but on **subsystem theme** rather than literal shared file. See synth #124.
- **`kitlangton` n=2 self-merge in-window on disjoint surfaces**: #24407 (httpapi feature, +108/-7, 2h21m lifespan) at 01:54:59Z → #24416 (test infra, +12/-1, 7m57s lifespan) at 02:11:26Z. Same author, same `dev` base, **disjoint surfaces** (feat vs test), **lifespan dropped 17.8×** between the two merges (overnight carry → quick-fix). Single-author n=2 self-merge with ≥10× lifespan compression is a known kitlangton signature (synth #91 metronome variant).
- **`yuneng-berri` perfect-symmetric churn (+336/-336) on UI rebuild** = mechanical regenerate / asset re-emit signature, not handcrafted code. Bot-shaped diff from a human author — distinct regime from dependabot symmetric churns.
- **codex stack rebase #5 cadence inverted**: predicted 8–10m, observed 29m46s. Geometric-decay model collapsed at n=4 events / 3 intervals (synth #122 falsified).

## Notable closures

- None beyond merges this window.

## Window merge-rate

| Repo | Add. 36 | Add. 37 | Add. 38 | Add. 39 |
|------|---------|---------|---------|---------|
| codex | 1 | 1 | 0 | 0 |
| litellm | 0 | 0 | 1 | 2 |
| anomalyco/opencode | 0 | 0 | 0 | 2 |
| sst/opencode | 0 | 0 | 0 | 0 |
| crush | 0 | 0 | 0 | 0 |
| goose | 0 | 0 | 0 | 0 |
| **Total** | **1** | **1** | **1** | **4** |

**Throughput regime shift at Add.38→39 boundary**: 1 → 4 merges (4×). Source diversity also doubles (1 repo → 2 repos). codex remains merge-dry across Add.38 and Add.39 despite its rebase-volume dominance — confirms synth #122's "rebase frequency and merge progress are inversely correlated" cross-pattern note, **even after the geometric-decay model itself broke**.
