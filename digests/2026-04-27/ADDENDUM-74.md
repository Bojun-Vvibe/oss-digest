# 2026-04-27 ADDENDUM-74

**Window:** 2026-04-27T01:26:00Z → 2026-04-27T02:05:44Z (39m44s — closes on the very latest open event observed in the gh API at capture time, charmbracelet/crush #2726 by meowgorithm at 02:05:44Z; lower edge inherits cleanly from Add.73's nominal close).

## sst/opencode — 4 merges in 34m24s by 3 distinct authors (kitlangton ×2, thdxr ×1, kommander ×1) — first multi-merge cascade in W17 anomalyco-opencode tracked window without a single self-merge inversion

The window opens with the kitlangton sibling-branch sequential merge already in flight (#24547 was opened 00:21:25Z with base `dev`, ~64m before window open; #24548 opened 00:26:07Z with base `dev`, ~60m before window open) and contains the entire merge cascade:

| PR | Author | Lifespan | mergedAt | mergeCommit | Files | base |
|---|---|---|---|---|---|---|
| #24547 | kitlangton | 43m51s | 01:05:16Z | `216dd363e8ff271699ee499d33eca8122c577a21` | 5 | `dev` |
| #24548 | kitlangton | 51m42s | 01:17:49Z | `418a1cf5f31f4f7dfa170873c8a462302473969d` | 6 | `dev` |
| #24551 | thdxr (Dax) | 8m11s | 01:18:27Z | `5f8a72bfc4f83307835d13e3497039dd9f3d3aab` | 5 | `dev` |
| #24555 | kommander | 7m34s | 01:39:40Z | `a3128e32c5f2b2d7d4e590ce85d49ef1cdfe9b43` | 3 | `dev` |

Three sub-events worth marking individually:

### (a) kitlangton sibling-branch sequential merge with shared-file overlap — distinct from a stacked PR ladder

#24547 `feat(httpapi): bridge pty routes` and #24548 `feat(httpapi): bridge tui routes` are **NOT** stacked (both base on `dev`, not on each other) — they are **disjoint sibling branches** that share **two files**:

- `packages/opencode/src/server/routes/instance/index.ts` (#24547 +7/−0; #24548 +14/−0 on the same file)
- `packages/opencode/specs/effect/http-api.md` (#24547 +6/−6; #24548 +15/−15 — full spec rewrite on each)

The merge order #24547 → #24548 lands the smaller surface first (5 files, +296/−6), then the larger (6 files, +415/−20), with **inter-merge gap 12m33s**. The shared `index.ts` route-registration file means whichever lands second has to absorb the first's hunks via merge — and the GitHub merge of #24548 succeeded without a separate force-push push from kitlangton's branch in this window, suggesting GitHub's auto-rebase or a quiet rebase by author cleared the conflict before the merge.

Compared to bolinfest's still-dormant 5-PR `permissions:` stack on codex (Add.73), this is a **categorically different topology**: kitlangton chose `dev`-base sibling branches with shared files (accepting merge-time conflict), bolinfest chose chained `pr19395 → pr19737` (accepting bottom-up sequential dependency). kitlangton's topology produced **2 merges in 12m33s**; bolinfest's produced **0 merges in 1h25m+** at this window's close. See synth #193.

### (b) thdxr #24551 8m11s sub-10m maintainer merge nested inside the kitlangton burst (mergedAt 01:18:27Z, just 38s after #24548)

#24551 `fix(tui): hide provider checks before onboarding` opened 01:10:16Z, merged 01:18:27Z. Lifespan 8m11s, +16/−10 on 5 files. The merge lands **38 seconds after** #24548 — i.e., the maintainer pipeline cleared a separate-author PR while the kitlangton stack-merge was still settling. This is sub-10-minute maintainer turnaround on a small fix-class PR while the same maintainer (or merge-queue) processed a +415/−20 feature PR moments earlier. Discriminates against any "merge-queue saturation by big PR" hypothesis.

### (c) kommander #24555 7m34s self-merge on `chore(deps)`-class opentui upgrade — three-author post-cascade prune

#24555 `upgrade opentui to 0.1.105` opened 01:32:06Z, merged 01:39:40Z by `kommander` (verify self-merge with separate gh API call queued for Add.75). Lifespan **7m34s**, +16/−16 on 3 files (pure dependency bump). This lands **22m13s after** #24551 and is the **third distinct author in the cascade**. The shape is consistent with synth #182's "meowgorithm 24s precursor open M+O coupling on crush" — single-author small-deps-bump on the same repo immediately after a same-repo merge — but stretched out to a 7m34s lifespan rather than meowgorithm's 24s precursor.

## openai/codex — bolinfest 5-PR stack still ZERO MERGES at window close (lifespan 1h25m+ on 4 of 5 tiers, 2d10h+ on the foundation)

Per Add.73, the 5-deep `permissions:` stack opened in lockstep at 00:40:17Z–00:40:21Z. At Add.74 window close (02:05:44Z), all five PRs remain OPEN:

- #19395 (foundation, opened 2d9h ago) — still at `2d10h2m` lifespan
- #19734, #19735, #19736, #19737 — still at ~1h25m lifespan each

No new author-side updates on these 5 PRs in the Add.74 window (last bolinfest update on the stack was #19735 at 01:26:36Z, 36s before nominal Add.73 close). **Bolinfest entered author-side dormancy on the stack at exactly the moment the kitlangton sibling-merge cascade started landing on opencode.** No causal link asserted, but the temporal anti-correlation is the cleanest "two repos two regimes" datum in W17 since synth #150's three-quiescence-regime split.

## openai/codex — abhinav-oai #19739 still OPEN at window close (lifespan 1h0m35s) — P192a not yet validated

Synth #192's prediction P192a (probability ~0.55: #19739 merges before #19395 within 24h of 01:26:00Z) is **active and unfalsified at +39m44s** into the prediction window. No rebase, no close, no merge. Continues to monitor across upcoming addenda.

## charmbracelet/crush — meowgorithm same-author triplet across 1h48m49s window (#2724 → #2725 → #2726) with subsystem-doublet-then-docs-pivot ordering

| PR | Title | createdAt | Subsystem | Files |
|---|---|---|---|---|
| #2724 | `fix(ui): restore 'update available' notification` | 00:16:55Z | `internal/ui/model/` | `internal/ui/model/ui.go` (+12/−0) |
| #2725 | `fix(ui): notification width and text truncation` | 00:20:38Z | `internal/ui/model/` | `internal/ui/model/status.go` (+6/−4) |
| #2726 | `docs(hooks): improve hook documentation` | 02:05:44Z | `docs/hooks/` | `docs/hooks/{README,FUTURE}.md` (+115/−43) |

#2724 and #2725 form a **same-author same-subsystem flat doublet** (synth #190 axis: `internal/ui/model/`), opened 3m43s apart, both fix-class, both notification-related. #2726 then arrives **1h45m6s later** on a categorically different surface (docs/hooks, not UI/model). The shape is **subsystem-doublet → unrelated-docs follow-up**, distinct from synth #181's "etraut openai author revisit within 21m21s" intra-burst recurrence and distinct from synth #149's "rapid-fire docs doublet on literal shared ecosystem list surface" (which was docs-on-docs, not subsystem-then-docs). All three PRs remain OPEN at window close — no merge action by meowgorithm or any maintainer in the 1h48m+ window for any of the three. See synth #194.

## BerriAI/litellm — russellbrenner #26566/#26567 twin-open at 11s gap on `litellm` upstreaming surface

- **#26566** `fix(map_system_message_pt): contribute upstreamed fixes` opened **2026-04-27T01:44:54Z**, base `main`, OPEN.
- **#26567** `fix(semantic-filter): contribute upstreamed fixes` opened **2026-04-27T01:45:05Z**, base `main`, OPEN.

11-second open-gap, identical title prefix `fix(...): contribute upstreamed fixes`, identical base `main`, single author. This is a **same-author sub-15-second twin-open on disjoint subsystem surfaces** — refines synth #85 (sub-10s same-author cross-PR doublet on adjacent surfaces) at the 11s boundary on **explicitly upstream-contribution-flagged** PRs. The "contribute upstreamed fixes" wording is unusual: it suggests the author is mirroring a downstream fork's local fixes back into upstream litellm — a contribution-direction marker not previously observed in W17 litellm tracking.

## Window closure summary

- **Merges in window:** 4 (all sst/opencode: #24547, #24548, #24551, #24555). Zero merges on codex, qwen-code, litellm, crush.
- **Opens in window:** 4 (sst/opencode #24551 [merged-in-window], #24553 [kitlangton fix(session) — OPEN]; sst/opencode #24554 [thdxr refactor barrels — OPEN]; crush #2726; litellm #26566, #26567). Plus sst/opencode #24555 opened+merged in-window.
- **Author cardinality:** 5 distinct authors active (kitlangton, thdxr, kommander, meowgorithm, russellbrenner). bolinfest (codex stack) and B-A-M-N (qwen-code stack) both silent.
- **Cross-repo merge concentration:** 4 of 4 in-window merges in sst/opencode → first observed W17 single-repo merge-monopoly window since synth #147's open-velocity concentration during the codex 5-window drought (which was opens, not merges).
- **W17 first-of-kind events in window:** (a) first sibling-branch sequential merge with shared-file overlap (#24547 → #24548); (b) first 4-merge 3-author single-repo cascade in opencode in W17; (c) first explicitly upstream-contribution-flagged twin-PR open in litellm in W17.
