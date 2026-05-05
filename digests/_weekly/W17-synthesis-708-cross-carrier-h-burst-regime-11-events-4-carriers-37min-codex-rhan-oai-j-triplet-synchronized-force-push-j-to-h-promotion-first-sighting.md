# W17 Synthesis #708 — Cross-carrier H-burst regime: 11 force-push (sub-class H) events across 4 of 7 carriers (opencode, codex, gemini-cli, goose) inside a 37-minute tick window — densest H-event count observed since W17-day-1 — with codex-rhan-oai J-triplet undergoing wholesale synchronized force-push (J→H promotion, first sighting)

**Anchor window**: 2026-05-05T21:51:42Z (Add.365 close) → 2026-05-05T22:28:42Z (Add.366 close). **Tick width: 37m.**
**Anchor signal**: corpus-wide force-push density flips from background level (~1–3 events/tick across 7 carriers) to **11 events/tick across 4 carriers** — a **3.7×–11× density spike**.
**Anchor carriers**: anomalyco/opencode (2 events), openai/codex (5 events), google-gemini/gemini-cli (2 events), block/goose (2 events). **Silent carriers**: BerriAI/litellm (0), QwenLM/qwen-code (0), charmbracelet/crush (0).

## The 11-event H-roster

| Carrier | PR | prior head SHA (Add.365) | new head SHA (Add.366) | force-push timestamp |
|---|---|---|---|---|
| opencode | [#25924](https://github.com/anomalyco/opencode/pull/25924) | `258f6e393d68` | `2a1bc29bcf2c` | 2026-05-05T21:58:12Z |
| opencode | [#25917](https://github.com/anomalyco/opencode/pull/25917) | `65299607d29a` | `78eacba8fce1` | 2026-05-05T22:09:11Z |
| codex | [#21251](https://github.com/openai/codex/pull/21251) | `28100c84aa66` | `61b99aafd483` | 2026-05-05T22:28:42Z |
| codex | [#21249](https://github.com/openai/codex/pull/21249) | `ccffb25261bf` | `8bf703886ddd` | 2026-05-05T22:05:28Z |
| codex | [#21238](https://github.com/openai/codex/pull/21238) | `0df79765538a` | `c8670a11854f` | 2026-05-05T22:17:31Z |
| codex | [#21237](https://github.com/openai/codex/pull/21237) | `5310c647eef4` | `5f407bcb854b` | 2026-05-05T22:17:31Z |
| codex | [#21236](https://github.com/openai/codex/pull/21236) | `0df79765538a`* | `3432df695699` | 2026-05-05T22:17:31Z |
| gemini-cli | [#26536](https://github.com/google-gemini/gemini-cli/pull/26536) | `0c65680787a6` | `c86012a74adb` | 2026-05-05T22:14:14Z |
| gemini-cli | [#26534](https://github.com/google-gemini/gemini-cli/pull/26534) | `e9ce4a4d2d57` | `d7748b6877314db7` | 2026-05-05T22:07:03Z |
| goose | [#9039](https://github.com/block/goose/pull/9039) | `e60906e192201` | `73bbd4f492c6` | 2026-05-05T21:55:45Z |
| goose | [#9030](https://github.com/block/goose/pull/9030) | `6c182759ab6c` | `19de7e853edd` | 2026-05-05T22:26:39Z |

*#21236's prior head was actually `0df79765538a` — note Add.365 captured #21236 as `0df79765538a` and #21238 as `0df79765538a` (same SHA, different PRs); this prior-state collision is itself a curiosity but distinct from H.

## The headline finding: J→H promotion

The 3 codex PRs **#21236 / #21237 / #21238** were the **rhan-oai J-triplet** memorialized in Add.365: opened in 4 wall-clock seconds (20:45:56Z, 20:45:58Z, 20:46:00Z) on disjoint codex sub-surfaces (image gen / thread paging / deferred image reads), with frozen heads at Add.365 close. At **2026-05-05T22:17:31Z** — a **single second** — **all three** PRs received force-pushes simultaneously (the GitHub `updatedAt` timestamp is identical to the second across #21236, #21237, #21238).

This is a **new structural transition** not previously catalogued: a frozen J-triplet undergoing **synchronized wholesale head mutation** in a single coordinated event. Call it **J→H promotion** (specifically, J→H_sync_3-of-3).

**Operational interpretation**: rhan-oai (or a CI bot acting on rhan-oai's behalf) ran a single command (likely a stack-rebase script that targets all 3 PRs in the verbal stack) that recomputed all 3 head SHAs from a new shared base. The **synchronization to the second** is the discriminator: an organic per-PR force-push sequence would be spaced by ≥30s at minimum (manual git push cadence), and almost never within 1s. Sub-second synchronization implies **scripted batch operation** — `git push origin pr1 pr2 pr3` semantics or equivalent stack-tooling.

## Carrier participation pattern

| Carrier | H-events | repo-relative density (events / open PR count this tick) |
|---|---|---|
| openai/codex | 5 | 5 / 15 ≈ 0.33 |
| anomalyco/opencode | 2 | 2 / 12 ≈ 0.17 |
| google-gemini/gemini-cli | 2 | 2 / 12 ≈ 0.17 |
| block/goose | 2 | 2 / 10 ≈ 0.20 |
| BerriAI/litellm | 0 | 0 / 15 = 0.00 |
| QwenLM/qwen-code | 0 | 0 / 10 = 0.00 |
| charmbracelet/crush | 0 | 0 / 6 = 0.00 |

**Codex is 1.65×–1.94× the next-densest carrier** in H-events-per-open-PR. The codex-specific J→H_sync_3-of-3 event accounts for 3/5 of codex's H-roster (60%), so excluding J→H_sync_3-of-3, codex H-density drops to 2/15 ≈ 0.13 — **third densest**, behind goose (0.20) and tied with opencode/gemini-cli (0.17). The cross-carrier H-burst is therefore **not codex-led** at the per-PR-organic level; it is **rhan-oai-stack-rebase-led** at the synchronized-event level.

## Why now? (mechanism hypotheses)

**Hypothesis H1 — Pacific evening/early-night batch CI cron**: tick window 21:51Z–22:28Z = 14:51–15:28 PT. This is the **Pacific mid-afternoon** band, which cross-carrier prior synths (W17-synth-696, "pacific morning reviewer trigger hypothesis") flagged as a force-push wave trigger. Re-confirmation: H-burst clusters in PT business hours.

**Hypothesis H2 — Maintainer-merge-window adjacency**: silent carriers (litellm, qwen-code, crush) are also the **3 carriers with no merges this tick** (ref Add.366 cross-carrier counts). Active carriers (codex, opencode, gemini-cli, goose) are the 4 carriers where maintainers had merged at least one PR earlier in the day, **inducing rebase pressure** on still-open contributor branches. Predict: H-burst follows merge-burst with ≤4h lag.

**Hypothesis H3 — Coincidence / observer artifact**: 11 events in 37min across 7 carriers is plausible under Poisson assumption with a corpus-wide background rate of **~17.8 events/h** (= 11/0.617h). Background rate from W17 weekly average is ~3.5 events/h corpus-wide, so this tick is ~5σ above mean — **rejecting H3**. The signal is real.

H1 and H2 together (PT-business-hours trigger + maintainer-merge-induced rebase pressure) provide a **composite mechanism** that predicts H-burst regime persistence into the next 1–2 ticks.

## Sub-class H_sync formal predicate (new)

A force-push cluster qualifies as **H_sync_N-of-N** when:
1. **N ≥ 2 PRs** by the same anchor author, all open prior to the event,
2. all N PRs receive force-push events with `updatedAt` differing by **≤ 2 wall-clock seconds**,
3. the N PRs were originally opened as a **stack** (each depends on the prior at the original-base level, OR they were opened as a J-class burst at sub-10s arithmetic cadence).

The codex rhan-oai #21236+#21237+#21238 event is the **first instance** satisfying H_sync_3-of-3.

## Falsifiable predictions

- **P-708.A** — H-burst persistence: at Add.367 (next tick), corpus-wide H-event count ≥ 6 (i.e., persists at ≥50% of this tick's level). Falsified iff H-events drop to ≤3 corpus-wide AND no individual carrier exhibits ≥3 H-events.
- **P-708.B** — H_sync replay: within next 4 ticks, ≥1 additional H_sync_N-of-N event (N ≥ 2) is observed on any carrier. The codex bolinfest J-triplet #21255/#21256/#21257 (opened 22:21:01–22:21:04Z) is the **prime candidate** — predict P-708.B confirmed via bolinfest synchronized force-push within 8h. Falsified iff bolinfest's triplet remains frozen for 4+ ticks AND no other carrier exhibits H_sync.
- **P-708.C** — PT-business-hours coupling: in the next 24h, H-event hourly density follows a **PT-9am-to-6pm peak** (≥2× background) and a **PT-overnight trough** (≤0.3× background). If H-event density during PT-overnight is ≥0.7× the PT-business-hours density, H1 is falsified and a **timezone-uniform** mechanism (CI cron not aligned to PT business) becomes the leading hypothesis.

## Relationship to existing W17 taxa

- **Parents**: W17-synth-696 (force-push wave, pacific morning trigger); W17-synth-697 (force-push echo wave); W17-synth-703 (sub-class H in-place head mutation).
- **Siblings**: W17-synth-698 (surface scattering of force-push wave); W17-synth-699 (sub-class F anchor force-push + leg metadata).
- **Children**: H_sync as a tightly-defined sub-mode of H is established here at sighting #1. Promotion to recurring taxon requires sighting #2 on a different carrier (P-708.B's bolinfest-triplet outcome).

The 11-event H-burst is the **single largest H-density signal** in W17 to date, and the J→H_sync_3-of-3 event is the **first synchronized stack-wholesale head mutation** observed across 7 carriers. Both signals justify upgrading the OMR (open:merge ratio) classifier from a 1-axis (open vs merge) to a 2-axis (open vs merge × H-density) regime model in W18.
