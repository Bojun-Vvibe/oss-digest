# W17 Synthesis #559 — Post-Add.265 same-author quadruple in-window self-merge series with terminal sub-4-minute lifespan extends Add.264 fresh-anchor to first persistent-anchor in 9-tick chain (synth #97/#99 framework re-instantiation at larger span, steeper terminal contraction)

**Anchor window:** 2026-05-02T18:34:10Z → 19:13:35Z (39m25s, ADD-265 capture window).
**Anchor repo:** sst/opencode.
**Anchor actor:** `kitlangton`.
**Parent synths:** #97 (same-author N=3 self-merge series with shared spec-file co-touch and monotonically contracting lifespans), #99 (same-author shared-spec-anchor self-merge series extension past original triple), #557 (post-Add.264 zero-class doublet termination + opencode kitlangton fresh-anchor sha=f8738c9 + lag-1 NONET asymmetric break).

## What's new vs synth #97 / #99

Synth #97 captured a **closed N=3** terminal triple (PRs #24352/#24353/#24356, 27-minute span, lifespans 24m57s → 13m47s → 4m09s). Synth #99 captured the **N=4 extension event** (PR #24365 opens 21m23s after #24356's merge, re-touches the same anchor file, was open at window close). Both synths #97 and #99 lived on the **same anchor file** `packages/opencode/specs/effect/http-api.md` and the same anchor index `packages/opencode/src/server/routes/instance/index.ts` — a vertical-slice rollout on a single spec contract.

Synth #559 captures a **structurally distinct re-instantiation** of the synth #97 framework on the SAME author (`kitlangton`) but with **completely disjoint surfaces**: the four members touch test infrastructure (#25444 `test/tool/grep.test.ts`, #25445 `test/tool/glob.test.ts`), session/registry plumbing (#25452 `session/prompt.ts` + `tool/registry.ts`), and CLI/provider wiring (#25460 `cli/cmd/github.ts` + `cli/cmd/providers.ts` + `provider/models.ts`). **No shared anchor file across the four.** The series is **author-anchored**, not **spec-anchored** — the binding object is the actor identity, not a shared file path.

This is the first cataloged instance in W17 of a `kitlangton` author-bound self-merge series with NO shared anchor file. It demotes the synth #97 / #99 lens from "same-author + same-anchor-file is the structural unit" to **"same-author within a contiguous tick-window is the structural unit, anchor-file may or may not recur"**.

## The four members

| PR | Opened | Merged | Lifespan | Diff | Surface |
|---|---|---|---|---|---|
| [sst/opencode#25444] | 2026-05-02T17:23:17Z | 18:45:54Z (`eebb26aa`) | **1h22m37s** | +50/-53 over 1 file | `test/tool/grep.test.ts` |
| [sst/opencode#25445] | 2026-05-02T17:24:06Z | 18:45:59Z (`ed00ae26`) | **1h21m53s** | +38/-40 over 1 file | `test/tool/glob.test.ts` |
| [sst/opencode#25452] | 2026-05-02T18:29:11Z | 18:49:57Z (`6cd02c05`) | **20m46s** | +22/-4 over 2 files | `session/prompt.ts` + `tool/registry.ts` |
| [sst/opencode#25460] | 2026-05-02T19:07:29Z | 19:11:01Z (`05b82a6a`) | **3m32s** | +8/-13 over 3 files | `cli/cmd/github.ts` + `cli/cmd/providers.ts` + `provider/models.ts` |

**Plus the cross-tick predecessor** from ADD-264: [sst/opencode#25434] (`f8738c9`, kitlangton, merged 17:59:09Z, +381/-84 over 8 files, "feat(models): effectify ModelsDev as Service"). This makes the kitlangton cross-tick series N=5 (Add.264's fresh-anchor + Add.265's quadruple).

## Lifespan-contraction signature

The four in-window members exhibit **monotonic lifespan contraction**: 1h22m37s → 1h21m53s → 20m46s → 3m32s. The first-pair contraction (1h22m37s → 1h21m53s, ratio ≈ ×0.99) is **near-flat** — these were likely opened back-to-back (43-second open gap) and merged back-to-back (5-second merge gap), behaving as a **synth #84 same-second co-fire pair with delayed merge convergence**. The second-pair contraction (1h21m53s → 20m46s, ratio ≈ ×0.25) marks the **acceleration onset**. The terminal-pair contraction (20m46s → 3m32s, ratio ≈ ×0.17) is **the steepest terminal contraction in any cataloged W17 same-author self-merge series** — exceeds synth #97's terminal ratio (4m09s / 13m47s ≈ ×0.30) by 0.13.

This signature predicts that a **fifth member**, if emitted, would have lifespan ≤ 1m at the same contraction rate, which is at the resolution floor of the API — the series is **at the structural floor of the lifespan-contraction signature** at member 4.

## Cross-tick coupling with ADD-264 fresh-anchor

The Add.264 fresh-anchor #25434 was a **381-line Effect Service refactor** (effectify ModelsDev). The Add.265 quadruple includes #25460 ("refactor(cli): drop ModelsDev Promise compat shim", -8 lines from `provider/models.ts`) — this is a **direct follow-on to #25434's refactor**, removing the Promise compat shim that #25434 introduced as a transition layer. The cross-tick coupling is **content-bearing**, not just author-bearing.

Members #25444 and #25445 ("Use instance test helper in grep/glob tests") are also follow-ons to a prior `kitlangton` refactor — they migrate test fixtures to a previously-introduced helper pattern. Members #25452 (telemetry span emission) and #25460 (Promise shim drop) are smaller standalone fixes.

The series shape is therefore: **one large refactor + one telemetry fix + two test-migration follow-ons + one shim-drop follow-on** — three of the four follow-ons resolve technical debt introduced by the Add.264 #25434 refactor or its predecessors.

## The author-bound series predicate

A series qualifies as **author-bound contiguous self-merge series** when, given an author A and a tick-window W:
1. A emits ≥3 PRs that merge inside W.
2. All N PRs are merged by A (self-merge or co-author-with-merge).
3. Lifespans exhibit monotonic non-strict-increasing contraction (allows near-flat first-pair like 1h22m37s → 1h21m53s).
4. **No requirement** that the PRs share an anchor file (this distinguishes from synth #97/#99).

Add.265's kitlangton quadruple satisfies all four. This is the **first author-bound contiguous self-merge series with disjoint surfaces** in W17.

## Falsifiable predictions

1. If the kitlangton series extends to N=5 within the next 60 minutes with sub-2-minute lifespan, the **lifespan-contraction signature has hit the resolution floor** and the series will terminate with the next merge — predicts **terminal-tick imminent**.
2. If kitlangton emits no PRs in the next 4 ticks, the **author-bound burst-then-quiescence pattern** is confirmed and synth #99's "extension event predicate" should be extended to include a **post-burst quiescent window** of ≥2 ticks before the next member counts as an extension rather than a new series.
3. If kitlangton's next PR re-touches `provider/models.ts` (the surface dropped by #25460), the **Promise-shim removal was premature** and a revert/follow-on cycle is starting — increases risk score for the Add.264 refactor.
4. If a different author opens a PR re-touching any of the 8 files in the Add.265 quadruple within 48h, the **author-bound serialization** that protected this series from rebase collisions is no longer in force, and the next series risks **anchor-file conflict** — recommend stack-merge tooling check.

## Distinctness from prior synths

- **vs synth #97**: #97 is N=3, single carrier, **shared anchor file** across all members, 27-minute total span. Synth #559 is N=4 (or N=5 cross-tick), single carrier, **disjoint surfaces**, 25-minute in-window span (1h47m if including open of first member from prior tick).
- **vs synth #99**: #99 is the N=4 extension of #97's triple via shared anchor file. Synth #559 has no shared anchor file and the N=4 is contained within a single tick window.
- **vs synth #91** (single-author triplet self-merge metronome on disjoint surfaces): #91 is N=3, **disjoint surfaces** (matches synth #559), but **lacks lifespan-contraction signature** — synth #91 cadence is metronome-flat. Synth #559 exhibits monotonic contraction with terminal ×0.17 ratio.
- **vs synth #95** (intra-author three-regime cadence dilation within single sub-2h author session): #95 captures **three cadence regimes** (slow → fast → slow). Synth #559 captures **monotonic contraction** with no regime change.
- **vs synth #557** (post-Add.264 fresh-anchor + lag-1 NONET break): #557 is the single-member fresh-anchor instantiation event. Synth #559 is the N=4 extension into persistent-anchor.

## Risk lens

- **Refactor follow-on velocity**: 3 of 4 Add.265 members are follow-ons to refactors. The author is operating in **debt-paydown mode** — the fresh-anchor #25434 created surface area that requires immediate cleanup. Risk: if #25434 introduced subtle behavioral changes that the follow-ons assume away, regressions may surface in subsequent ticks.
- **Test-migration coupling**: #25444 and #25445 migrate the same helper across two adjacent test files. If the helper has a bug, both test files now share the same failure mode and lose coverage independence. Worth a check on the helper's correctness.
- **Promise-shim drop timing**: #25460 drops the Promise compat shim only ~1 hour after #25434 introduced the Effect-based replacement. This is **aggressive deprecation** — if any external consumer depended on the Promise interface, they will break on the next release. Worth a check on whether `provider/models.ts` was a public API surface.
- **Cross-tick author-burst**: 5 PRs by one author in ~2 hours represents a **focused author session**. If this session correlates with an upcoming release, the Add.264/265 cluster is the **release-prep signature** for an opencode minor version. Detector should cross-reference release tags emitted in next 24h.
