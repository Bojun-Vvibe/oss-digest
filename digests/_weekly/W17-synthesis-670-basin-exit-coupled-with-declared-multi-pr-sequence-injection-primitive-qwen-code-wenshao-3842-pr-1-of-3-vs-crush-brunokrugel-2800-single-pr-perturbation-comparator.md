# W17-synthesis-670 — basin-exit-coupled-with-declared-multi-PR-sequence-injection primitive: qwen-code 7-tick zero-leg quiescence basin terminates via wenshao #3842 whose title literally declares "PR-1 of 3" referencing pre-issued anchor #3831, instantiating coordinated multi-PR campaign launch deferred until basin-floor, distinct from prior single-PR basin-exit injection (crush BrunoKrugel #2800 Add.341)

## Cross-repo synthesis

**Source**: ADDENDUM-343 (qwen-code basin-exit at tick-7 via wenshao #3842 with declared `(#3831 PR-1 of 3)` sequence) + ADDENDUM-341 (crush basin-exit at tick-4 via BrunoKrugel #2800 single-PR injection without declared sequence).

## Pattern observed

### Carrier 1 — qwen-code basin-exit Add.343

QwenLM/qwen-code carrier-quiescence basin from Add.337 → Add.342 = 6 ticks × 50m = **5h00m of zero fresh-opens** (W17 record per Add.342). Basin terminated in Add.343 by:

- QwenLM/qwen-code #3842 head `6cbab376d7ab8f1ffc554f545c9ca955ae8d6610` (wenshao — `feat(core): add signal.reason convention for ShellExecutionService (#3831 PR-1 of 3)`; opened 2026-05-05T04:48:02Z).

The title contains the literal substring **`(#3831 PR-1 of 3)`** — wenshao explicitly declares this PR is the first of three planned PRs against parent issue/PR #3831. The basin-exit PR is therefore not a single perturbation but the **head of a pre-planned campaign**.

### Carrier 2 — crush basin-exit Add.341 (comparator, no declared sequence)

charmbracelet/crush 4-tick basin from Add.337 → Add.340 terminated in Add.341 by:

- charmbracelet/crush #2800 head `3394b9fb8fd5317058b8abcea967cd7aa28f0ddc` (BrunoKrugel — `feat(tools): create an allow list for MCP tools`; opened 2026-05-05T02:53:51Z).

Title is a single feature description with **no declared sequence**, **no parent-issue reference**, and the PR remained head-stable across Add.341 → Add.343 = 3 ticks without follow-up legs from BrunoKrugel on the same substrate (the related #2778 `allow hook names` was opened 2026-05-02, **prior to the basin start**, so it cannot be a successor leg). Single-PR injection without coordinated sequence.

## Bifurcation of basin-exit primitive

Comparing the two basin-exits:

| Property | qwen-code #3842 (Add.343) | crush #2800 (Add.341) |
|---|---|---|
| Basin depth | 7 ticks (5h00m+) | 4 ticks (3h20m) |
| Title declares sequence | YES (`PR-1 of 3`) | NO |
| Parent anchor referenced | YES (#3831) | NO |
| Author follow-up legs after basin-exit | EXPECTED (PR-2, PR-3 declared) | NOT-OBSERVED (no Brunokrugel follow-up legs through Add.343) |
| Substrate | core ShellExecutionService signal handling | tools MCP allow-list |
| Carrier | qwen-code | crush |

Two distinct sub-primitives:

1. **Basin-exit-via-single-PR-perturbation** (BrunoKrugel #2800): basin ends with a one-off PR; carrier returns toward 1-leg-stable.
2. **Basin-exit-via-coordinated-campaign-launch** (wenshao #3842): basin ends with the head of a declared multi-PR series, suggesting the author was **holding the campaign launch until the carrier was quiet enough to admit it**, OR equivalently that the basin existed because no contributor was ready to land a campaign and the first-ready contributor opens immediately upon readiness.

## Quantitative signature distinguishing the two sub-primitives

- **Time-to-second-leg**: Sub-primitive 2 should produce a second leg (PR-2) on the same substrate within a short window (hours to days); Sub-primitive 1 should not (or only via unrelated PR).
- **Title pattern**: Sub-primitive 2 PRs contain explicit sequence markers (`PR-N of M`, `Part N`, `[N/M]`, parent-anchor reference); Sub-primitive 1 PRs do not.
- **Substrate scope**: Sub-primitive 2 typically modifies a coordinated refactor across multiple files/components; Sub-primitive 1 modifies a single localized surface.

For wenshao #3842: substrate is `ShellExecutionService` and the title says "add signal.reason convention" — this is a convention/protocol introduction that naturally requires multi-PR rollout (declaration → first consumer → first producer, or similar). Coordinated-refactor signature confirmed.

## Differentiation from prior W17 primitives

- **synth-665 (codex 2tick quiescence-floor and 4leg cohort recovery)**: focused on cohort-recovery shape after quiescence — multiple authors converge on similar substrate post-basin. synth-670 differs by **single-author coordinated-campaign launch at basin-exit**, not multi-author recovery.
- **synth-67 (declared vs inferred multi-PR sequences)**: established that declared sequences (`PR-N of M` titles) exist as a class. synth-670 instantiates the class **at the basin-exit boundary**, fixing a specific temporal coupling between basin-floor and declared-sequence start.
- **synth-83 (single-author multi-pr metronome cadence)**: single-author multi-PR clusters with ~30m cadence inside one repo, no basin involvement. synth-670 is **basin-exit + declared sequence** — the temporal coupling is to the basin-floor instant, not to a periodic metronome.
- **synth-668 (recursive bot meta-lifecycle)**: bot-PR-self-reaping. synth-670 is human-PR campaign-launch — orthogonal.
- **synth-99 (same-author shared-spec self-merge series extension)**: substrate-anchored series extension. synth-670 is **substrate-family campaign launch with declared multi-PR plan**, where the substrate-family is committed up-front via the title.

## Cited PRs/SHAs (verified per Add.341 + Add.343 captures)

**Basin-exit-coupled-with-declared-sequence (Add.343 qwen-code)**:
- QwenLM/qwen-code #3842 head `6cbab376d7ab8f1ffc554f545c9ca955ae8d6610` (wenshao, declared `PR-1 of 3` of #3831)

**Basin-exit-via-single-PR-perturbation (Add.341 crush)**:
- charmbracelet/crush #2800 head `3394b9fb8fd5317058b8abcea967cd7aa28f0ddc` (BrunoKrugel, no sequence declaration)

**Adjacent qwen-code carry-context** (PRs by wenshao on the same author-anchor, NOT part of the declared sequence per title):
- QwenLM/qwen-code #3836 head `a8664a99b45fc95b0a0b51073d0d519644e6f5e0` (wenshao, `feat(core,cli): surface and cancel auto-memory dream tasks`; OPEN, opened 2026-05-04T17:14:08Z, distinct substrate from #3842 — would be Sub-primitive 2 evidence only if also tagged with `(#3831 PR-N of 3)`, which it is not).
- QwenLM/qwen-code #3774 head `40b7a116e402ec001812d909a039d9154c624399` (wenshao, `feat(core): enforce prior read before Edit / WriteFile mutates a file`; OPEN, opened 2026-04-30, distinct substrate).
- QwenLM/qwen-code #3598 head `41bb7b3478b7d8b8267e173455bcff3a9166de9d` (wenshao, `feat(cli): add --json-schema for structured output in headless mode`; OPEN, opened 2026-04-24, distinct substrate).

**Adjacent crush carry-context** (BrunoKrugel author-anchor, basin-exit follow-up surface):
- charmbracelet/crush #2778 head `ebdf6fde3c7f8a1efab956cb2dbbec6f4b7c285d` (BrunoKrugel, `feat(tools): allow hook names`; opened 2026-05-02T04:07:54Z, **PRIOR to crush 4-tick basin** — establishes BrunoKrugel was active on tools/allow-list family before the basin, so #2800's basin-exit is not a campaign launch but a continuation; reinforces sub-primitive 1 classification).

**Three-carrier cardinality co-instantiation comparator (Add.343 — see synth-669)**:
- BerriAI/litellm #27170 head `4ee586a321098353cc968f0b3336d0cef0f4ede0` (yuneng-berri QUINTET final leg)
- openai/codex #21143 head `a09589641ea9b8c3b957f89462cb57a359d7a61d` (starr-openai SEXTET final leg)
- block/goose #9012 head `936f5d9e07e5aaeb617afa2c1bf89df41ef278db` (morgmart SEXTET final leg)
- Cross-link: synth-669 documents three concurrent ≥QUINTET clusters in same tick as qwen-code's solitary basin-exit, supporting **carrier-quiescence and cross-carrier-velocity are independently distributed** (Add.342 framing) — basin-exit on one carrier coincides with peak-cardinality on three others.

## Predictions enabled

- **P-670.A**: wenshao opens **PR-2 of 3** (referencing #3831) within next 5 ticks (= within ~4h10m), prior 0.65. Title MUST contain a sequence marker (`PR-2 of 3`, `Part 2`, `[2/3]`, etc.) AND reference parent #3831. Falsifier: no such PR by Add.348.
- **P-670.B**: wenshao opens **PR-3 of 3** within next 12 ticks (= within ~10h), prior 0.45. Falsifier: PR-2 lands but no PR-3 by Add.355, OR PR-2 itself doesn't open.
- **P-670.C**: at least one of wenshao's **PR-2 / PR-3 of #3831 sequence** lands MERGED within W17 remainder, prior 0.50.
- **P-670.D**: a third basin-exit-coupled-with-declared-sequence-injection instantiates on a third carrier within W17 remainder, prior 0.20. Would establish primitive as recurring, not idiosyncratic to qwen-code.
- **P-670.E**: BrunoKrugel #2800 acquires a follow-up sequence-leg on the same MCP allow-list substrate within 5 ticks, retroactively reclassifying Add.341 basin-exit as Sub-primitive 2 (deferred-declaration), prior 0.20. Falsifier: no BrunoKrugel follow-up on MCP allow-list substrate.
- **P-670.F**: among next 3 basin-exits across the 7 carriers, **declared-sequence basin-exits will lifespan-compress more than single-PR basin-exits** (open-to-merge faster), prior 0.55. Tests whether maintainer treatment differs by basin-exit sub-primitive.
- **P-670.G**: a fourth qwen-code wenshao PR appears at non-declared substrate within next 2 ticks, indicating wenshao continues activity on the carrier orthogonal to the declared #3831 sequence, prior 0.40. Tests whether basin-exit declared-sequence campaign saturates author bandwidth or coexists with parallel surfaces.
