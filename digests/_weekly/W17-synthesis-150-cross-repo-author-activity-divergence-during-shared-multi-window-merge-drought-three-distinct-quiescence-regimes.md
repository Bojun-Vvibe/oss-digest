# W17 / synth #150 — Cross-repo author-activity divergence during shared multi-window merge drought: three distinct quiescence regimes (litellm fully silent, codex stack-only, qwen-code author-fanout)

## Pattern

By Add.52 close (2026-04-26T10:37:24Z), the tracked surfaces are in their **sixth consecutive zero-merge window** (cumulative dry span 3h23m53s, Add.47–52). But the **shape of the quiescence differs across repos** in a way that has hardened over the last two windows (Add.51 + Add.52):

### Regime A — BerriAI/litellm: fully silent

- Last merge `#26545` (`yuneng-berri`, head `abb63e6007e7`) at 03:07:01Z. Drought = **7h30m23s** by Add.52 close.
- **Two consecutive fully-silent windows** (Add.51 + Add.52, total 1h12m11s): zero opens, zero closes, zero merges, zero notable head-SHA bumps, zero metadata-only updatedAt churn.
- Most recent author-side activity in tracked range: `tim-peyeeye` open of #26546 at 04:49:05Z (3h48m before Add.52 close).

### Regime B — openai/codex: stack-only (bolinfest-driven)

- Last merge `#19640` (`tibo-openai`, head `633fe00a9c54`) at 06:10:38Z. Drought = **4h26m46s**.
- **Bolinfest stack rebases #11–#16 across the drought** (Add.42–51) — 6 rebase events on the 5-PR stack `#19606 / #19395 / #19394 / #19393 / #19392`, latest atomic same-second at 10:04:19Z (rebase#16, head `0d7e33845b59` for #19606).
- Author-side activity is **concentrated on a single stack-author iteration loop**, not new-PR opens. No new codex PR opens since `#19650` (`efrazer-oai`) at 07:43:15Z.

### Regime C — QwenLM/qwen-code: author-fanout

- Last merge `#3633` (`tanzhenxin`, head `52437550817`) at 06:29:18Z, then `#3630` (wenshao) at 04:55:39Z, `#3620` (wenshao) at 05:17:34Z. Per-repo drought ≈ **4h08m by Add.52 close**.
- **`wenshao` actively fans out**: held #3637 open with content rev (Add.51, +49 additions), then opened fresh PR `#3642` at 10:18:32Z (`feat(core): managed background shell pool with /bashes command`). Same author, two concurrently-open PRs with sub-30m write activity on each.
- Additional jordimas open `#3643` at 10:32:14Z extends opens to two distinct authors in the Add.52 window.

## Discriminator: this is NOT a "uniform cross-repo drought"

Synth #143 established the **conserved arithmetic offset** (codex↔litellm = 3h03m37s) that says drought arrival is shared by a deterministic offset. Synth #150 says: **arrival times are correlated, but author-side response is repo-specific and structurally distinct**.

| Repo       | Drought | Authors active in Add.51+52 | Activity shape          |
|------------|---------|------------------------------|--------------------------|
| litellm    | 7h30m   | 0 (fully silent)             | Quiescent                |
| codex      | 4h27m   | 1 (`bolinfest` only)          | Stack rebase loop        |
| qwen-code  | 4h08m   | 2+ (`wenshao`, `jordimas`)    | Fanout (new opens + iter) |
| sst/opencode | 5h32m | 5+ (Add.51 burst + ian-pascoe) | All-repo open burst then docs doublet |

## Falsifies / refines earlier synths

- **Falsifies synth #147 prediction** (single-repo open-velocity concentration on sst/opencode persists ≥1 more window): Add.52 has 2 of 3 opens on qwen-code, breaking the all-sst/opencode pattern at +1 window. Synth #147 explicitly predicted persistence; **falsified at the minimum horizon**.
- **Refines synth #129** (codex 5-window drought deepens via quiescence rather than fanout): synth #129 established codex-internal quiescence; synth #150 establishes that the **shape of quiescence varies cross-repo** even when the drought is shared. Codex's stack-only regime in Add.52 is consistent with synth #129's quiescence reading; qwen-code's fanout regime is the **opposite** mechanism on a parallel-droughted surface.
- **Refines synth #132** (cross-repo theme convergence during merge drought): synth #132 said themes converge during droughts; synth #150 says **author-engagement shapes diverge** during the same droughts. Both can be true simultaneously — themes can converge while engagement modes diverge.

## Predictions (falsifiable)

- **P-150.A** (regime persistence): At Add.53 close, litellm will **still** show zero merges AND zero new opens AND zero metadata bumps (regime A persists for a third consecutive window). Falsified if any litellm PR (any author) shows any updatedAt change, OR if any litellm merge lands in Add.53.
- **P-150.B** (regime-driven first-merge-out prediction): When the cross-repo drought breaks, the **first repo to merge will be sst/opencode**, not litellm. Rationale: sst/opencode has the largest active-author pool (5+) and the most fresh content-revs (#24452 in Add.52). Falsified if litellm or codex merges first within the next 6 windows (~3h projected at recent cadence).
- **P-150.C** (wenshao fanout vs claudianus dormancy asymmetry): Within 24h of Add.52 close, **wenshao will accumulate ≥1 additional new-PR open OR ≥1 additional content rev on #3637 or #3642**, while claudianus's #24443 will receive **zero** head-SHA changes. If both authors converge to either dormancy or activity, P-150.C is falsified. Horizon: 2026-04-27T10:37:24Z.
- **P-150.D** (regime-A → regime-B transition signature): If litellm exits regime A within next 3 windows, the first activity will be a **maintainer self-merge sweep on `litellm_internal_staging`** (per synth #108's sync-PR-as-promotion pattern), not a fresh main-base PR. Falsified if the first non-silent litellm event is anything else (open on `main`, close-without-merge, dependabot bump, long-tail rebase).

## Cited PRs and SHAs

- BerriAI/litellm #26545 — `yuneng-berri`, head `abb63e6007e702343f24c9db3486b2feb5e09514`, merged 2026-04-26T03:07:01Z
- openai/codex #19640 — `tibo-openai`, head `633fe00a9c5491a60b9b7d3042944aa086fbeeb3`, merged 2026-04-26T06:10:38Z
- openai/codex #19606 (bolinfest stack head) — head `0d7e33845b59fec22158317e6e260b173136df87` after rebase#16 at 10:04:19Z
- QwenLM/qwen-code #3637 — `wenshao`, head `a3c6c9a8b7895734e02140033a3378126672ea81` (post +49 rev)
- QwenLM/qwen-code #3642 — `wenshao`, head `c8d7d151a1b6a6e8bbb58e08e20fffe7b7ea29ca`, opened 2026-04-26T10:18:32Z
- QwenLM/qwen-code #3643 — `jordimas`, head `d0b68d2290b3c4d7272a73d37de5cddf2adea14b`, opened 2026-04-26T10:32:14Z
- sst/opencode #24452 — `MrRobotoGit`, head `780c717b12bdc3bc6304fea7a0b1fa5d2646c012` (post-open content rev in Add.52)
- sst/opencode #24443 — `claudianus`, head `fa478297f13d87ae544034a07398d5a0bda7f336` (dormant 2 windows)

## Refines / extends / falsifies

- **Falsifies P-147 persistence prediction** at minimum horizon (single-repo concentration broke at +1 window).
- **Refines synth #143** by establishing that arithmetic-offset arrival conservation does NOT imply uniform engagement response.
- **Refines synth #129 + synth #132** by establishing three distinct quiescence regimes that can coexist on parallel-droughted surfaces.
- **Distinguishes from synth #139** (codex+litellm parallel re-formation): #139 was about drought *formation* synchrony; #150 is about author *response* divergence during the resulting droughts.
