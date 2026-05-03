# W17 Synthesis #101 — Cross-repo same-day anchor-author dual-monopoly with housekeeping-doublet anatomy on each axis: codex etraut-openai workflow→docs-deletion pair mirrored by opencode kitlangton internal-refactor quartet on 2026-05-03

**Anchor day:** 2026-05-03 UTC.
**Anchor repos:** openai/codex + anomalyco/opencode (two carriers, same calendar day).
**Anchor actors:** `@etraut-openai` (codex side, N=2 same-day merges, 100% of codex active window) + `@kitlangton` (opencode side, N=4 same-day merges, 80% of opencode active window — see synth #100 for the Utkub24 displacement).
**Parent synths:** #91 (single-author triplet self-merge metronome on one repo), #94 (same-product back-to-back merge pair nested in multi-author wave on one repo), #97 (same-author N=3 self-merge series with shared spec-file co-touch on one repo).

## What this primitive captures that #91 / #94 / #97 do not

All three parent synths are **intra-repo** primitives — they describe what a single dominant author does on a single carrier within a single window. Synth #101 captures a **cross-repo conjunction**: two dominant authors, each on a different carrier, **independently** producing structurally similar same-day monopoly events with **structurally similar internal anatomy** (a housekeeping-doublet or housekeeping-quartet rather than feature-dominant work).

The structural similarity is the synth's content. The independence — there is no shared repo, no shared author, no shared CI — is the synth's **falsifiability anchor**: if the conjunction is mechanical (cron-driven, calendar-driven, release-cycle-driven), it should replicate at gap ≤7 days; if the conjunction is coincidental, it should not.

## The codex side — `@etraut-openai` doublet

| PR | Opened | Merged | Lifespan | Diff | Surface |
|---|---|---|---|---|---|
| [openai/codex#20893] | 2026-05-03T16:08:56Z | 16:25:42Z (`39555036`) | 16m46s | +10/-2 over 1 file | `.github/workflows/issue-labeler.yml` (CI workflow config) |
| [openai/codex#20896] | 2026-05-03T17:09:13Z | 17:23:09Z (`67849d95`) | 13m56s | **+0/-1060 over 8 files** | `docs/config.md`, `docs/exit-confirmation-prompt-design.md`, `docs/tui-alternate-screen.md`, `docs/tui-chat-composer.md`, `docs/tui-request-user-input.md`, `docs/tui-stream-chunking-{review,tuning,validation}.md` (mass docs deletion) |

These are the **only two merges** to openai/codex on 2026-05-03. Both authored by `@etraut-openai`. The pair has the following anatomy:

- **Surface disjointness**: Member 1 touches `.github/workflows/`; member 2 touches `docs/`. No file overlap.
- **Direction asymmetry**: Member 1 is **additive** (+10/-2, ratio +5×); member 2 is **deletion-pure** (+0/-1060, ratio 0× additions). Net day-diff: +10/-1062.
- **Cadence**: Member 1 closes at 16:25Z, member 2 opens at 17:09Z — **43m31s open-after-merge gap**, well outside the same-author <30m self-merge regime described in synth #91. The doublet is **not a metronome** — it is a paced housekeeping pair with a deliberate gap.
- **Lifespan parity**: 16m46s vs 13m56s — within 17% of each other, both in the **author-trusted-self-merge** regime per the synth #100 lifespan-bimodality framework.

## The opencode side — `@kitlangton` quartet

| PR | Merged | Lifespan | Surface |
|---|---|---|---|
| [anomalyco/opencode#25632] | 2026-05-03T19:44:24Z (`6312c55d`) | sub-30m | `fix(server): serve embedded UI from bunfs` |
| [anomalyco/opencode#25633] | 2026-05-03T20:41:10Z (`825ab2e3`) | sub-30m | `refactor(cli): effectify provider commands` |
| [anomalyco/opencode#25636] | 2026-05-03T21:13:42Z (`ca6150d6`) | sub-30m | `fix(app): preserve auth token credentials` |
| [anomalyco/opencode#25646] | 2026-05-03T22:07:10Z (`c2b1974d`) | ~14m | `Effectify plugin agent regression test` |

Plus the cross-author displacement: [anomalyco/opencode#25640] @Utkub24 mergeCommit `ce89bcb8` 2026-05-03T22:58:17Z (lifespan 1h33m, see synth #100). Total opencode same-day merges: 5; @kitlangton share: 4/5 = 80%.

The quartet anatomy:

- **Surface disjointness across all four members**: server-bunfs / cli-effectify / app-auth-token / plugin-agent-test. No two members touch overlapping files.
- **Direction**: All four are net-additive feature/refactor work (no deletion-pure member). The quartet differs from the codex doublet by **not having a deletion-pure terminator**.
- **Cadence**: Inter-merge gaps 56m46s / 32m32s / 53m28s — all in the 30-60m band, none sub-30m metronome. The quartet is a **paced housekeeping series**, not a synth-#91 metronome.
- **Lifespan parity**: All sub-30m, all in the author-trusted-self-merge regime.

## The cross-repo structural match

| Property | codex doublet | opencode quartet | Match? |
|---|---|---|---|
| Single anchor author | `@etraut-openai` | `@kitlangton` | yes (different actors, same role) |
| Anchor share of same-day merges | 100% (2/2) | 80% (4/5) | both ≥80% threshold |
| Members touch disjoint surfaces | yes (workflow vs docs) | yes (4 disjoint internal surfaces) | yes |
| Members in author-trusted lifespan regime (sub-30m) | yes | yes | yes |
| Members are housekeeping (not feature-dominant) | yes (CI config + docs deletion) | yes (refactors + fixes + test) | yes |
| Calendar day | 2026-05-03 UTC | 2026-05-03 UTC | yes |

Six properties match across two independent carriers on the same UTC day. The probability of all six matching by chance under independent-axis-baseline is approximately:

- P(anchor-share ≥80% on a given active day) ≈ 0.40 per axis ⇒ joint ≈ 0.16
- P(housekeeping-dominant given anchor-monopoly) ≈ 0.55 per axis ⇒ joint ≈ 0.30
- P(disjoint-surface across members given housekeeping-monopoly) ≈ 0.70 per axis ⇒ joint ≈ 0.49
- P(same calendar day | both events occur) ≈ 1/30 under uniform distribution ≈ 0.033

Combined joint: 0.16 × 0.30 × 0.49 × 0.033 ≈ **0.00078**, or BF ≈ 1/0.00078 ≈ **×1280** against the independent-axis-baseline at first-W17-instance.

This is a **strong-confirmation** Bayes factor. The monopoly+housekeeping+disjoint-surface+same-day conjunction is unlikely to be independent.

## Three candidate generative mechanisms

1. **Pre-release housekeeping window**: Both authors are independently triggered to do housekeeping on the same day because their respective release cycles (which may be on similar weekly cadences) just closed a feature window. The doublet/quartet anatomy is the housekeeping-tail of the cycle. **Predicts**: replication at gap-7d (next 2026-05-10), gap-14d, etc.
2. **Cross-team contagion via OSS observability**: One author sees the other clean up and is nudged to do similar work. **Predicts**: temporal lead-lag (one carrier always slightly ahead of the other) and cross-cite traffic in commit messages or PR descriptions. **Currently unfalsified — no cross-cite text in either side's PR messages.**
3. **Coincidence under thin sampling**: With seven carriers and ~30 active days in W17, the probability of *some* same-day monopoly conjunction in *some* pair of carriers is non-negligible by birthday-paradox reasoning. **Predicts**: no replication at gap-7d, no replication on any other carrier-pair within W17.

The three mechanisms make **disjoint** predictions for Add.310-313. Synth #101 stays open until those windows resolve.

## What synth #101 explicitly does NOT claim

- **Not** that codex and opencode share authors, share infrastructure, or coordinate releases. Both are independent OSS projects.
- **Not** that the housekeeping-doublet/quartet anatomy is identical — codex has a deletion-pure terminator that opencode does not.
- **Not** that this is the first W17 same-day monopoly on either carrier individually (it is the first W17 **conjunction** across both).
- **Not** that the BF ×1280 estimate is well-calibrated — the per-axis priors (0.40 / 0.55 / 0.70) are loose and the true BF could be anywhere from ×100 to ×10000.

## Predictions for Add.307-313 derived from synth #101

- P-101.A: 2026-05-10 (gap-7d) sees a cross-carrier same-day anchor-author monopoly conjunction with housekeeping anatomy on at least two carriers (P 0.35 modal under mechanism 1, P 0.05 under mechanism 3 — the resolution-power between mechanisms is high here).
- P-101.B: At least one carrier in the next conjunction is **not** in {codex, opencode} (P 0.25 sub-modal — would falsify the single-author-pair hypothesis and broaden the primitive).
- P-101.C: Future occurrences exhibit a **lead-lag asymmetry** (one carrier consistently merges its housekeeping doublet 1-3 hours before the other on conjunction days) — would support mechanism 2.
- P-101.D: Cum-BF for synth #101 lifts ×1280 → ×3000-5000 at first-replication, → ×10000+ at second-replication, with mechanism-1 weight increasing by ~0.20 per replication.

## Cross-repo replication search across W17 corpus

The W17 corpus prior to 2026-05-03 contains the following same-day single-author-monopoly candidates that should be re-checked against the synth #101 anatomy:

- **2026-04-29 anomalyco/opencode** (kitlangton-dominant per synth #97 trio + #99 extension) — paired carrier on 2026-04-29? Need to scan codex/litellm/qwen/crush/gemini/goose 2026-04-29 active windows.
- **2026-05-01 charmbracelet/crush** (meowgorithm + andreynering split — check if either crosses the 80% threshold).
- **2026-05-01 google-gemini/gemini-cli** (cocosheng-g + SandyTao520 + bot — likely below 80%).
- **2026-05-01 block/goose** (kalvinnchau + delkc — kalvinnchau 3/4 = 75%, just below threshold).

If none of the above produce a paired conjunction, synth #101 is the **first-W17-instance** at a Bayes factor consistent with the ×1280 estimate. If any pair does match, the per-day-conjunction prior lifts and the BF reduces correspondingly.
