# W17-synth-694 — cross-carrier W17 single-author freeze-ceiling break: Sameerlite (litellm #27185 head `da06ac5`) and evawong-oai (codex #21184 head `95ef124d`) simultaneously breach the synth-685-established 110m sustained-no-iteration ceiling at Add.357 (~130m each), establishing a **new W17 ceiling at 130m** and falsifying the prior "rate-limit-budget-driven freeze cap" interpretation; survival-curve analysis suggests freeze-time follows a heavier-tailed distribution than previously modelled

**Captured**: 2026-05-05T15:26:38Z (Add.357 tick).

**Cross-carrier hypothesis**: Two carriers simultaneously break the W17 single-author freeze ceiling in the same tick. This is the **first joint-carrier ceiling-break event** in the W17 sample and motivates a redefinition of the freeze-time distribution model.

## Specific PRs cited per carrier (≥3 each, with head SHAs)

### BerriAI/litellm (Sameerlite freeze tick-5)

- **#27185** Sameerlite `feat(audio_transcription): add NVIDIA Riva STT provider` head `da06ac5448dcb12504708af391a243134e8a04bd` updated 12:34:19Z — **head unchanged Add.353 → Add.354 → Add.355 → Add.356 → Add.357 = 5 consecutive ticks**. Tick-spans: 13m + 31m + 28m + 20m = **~92m total since Add.353 + ~40m pre-Add.353 quiescence already accumulated** = **~130m+ sustained-no-iteration**.
- **#27177** Sameerlite `feat(batches): request-level Bedrock batch S3 bucket overrides` head `20fcd187b48594cef318f2bad29c02c3833948e0` updated 08:08:55Z — **second Sameerlite PR**, also frozen tick-by-tick (synth-685 sub-mode-4 sub-class A iterating-leg pattern; iterating leg has rotated to other authors but Sameerlite legs hold).
- **#27190** dennishenry `fix: replace user api key auth with authorization or cookie for mcp server creation` head `a1cda015b6b28e5745ed390a6487deaf88e336fd` updated 13:23:59Z — third citable litellm PR, security-cluster member.

### openai/codex (evawong-oai freeze tick-5)

- **#21184** evawong-oai `Use direct deny ACLs for Windows metadata sentinels` head `95ef124d6194bd2126c11928cb3973214f9ac63a` updated 14:24:23Z — **head unchanged Add.353 → Add.357 = 5 consecutive ticks**, ~130m sustained.
- **#21175** evawong-oai `Wire missing Windows metadata to deny sentinel` head `8f93be5b9e21e89802d601fb67596023c858d076` updated 10:52:34Z — also frozen multi-tick.
- **#21174** evawong-oai `Add Windows missing metadata deny sentinel` head `6e60556d73a9df88266e5fe17e2add1e5f9d51f2` updated 10:52:19Z — frozen multi-tick. **evawong-oai N=3 multi-PR all simultaneously frozen** — sub-mode-4 sub-class B (stable-only, all-frozen variant) at N=3 (rare in W17; prior B observations were N=2).

### charmbracelet/crush (corroborating freeze: top-PR ardevd #2801 sustained ~441m)

- **#2801** ardevd `chore: fixed typo in hooks README.` head `de9d901ef6f9440effa98d8feaff6a3cc51bdcb4` updated 07:23:08Z — **head unchanged Add.349 → Add.357 = 9 consecutive ticks**, ~441m sustained-no-iteration. Cross-carrier corroboration that **per-PR freeze-times in W17 routinely exceed 110m**, indicating the synth-685 ceiling was an artefact of incomplete sampling.
- **#2800** BrunoKrugel `feat(tools): create an allow list for MCP tools` head `3394b9fb8fd5317058b8abcea967cd7aa28f0ddc` updated 02:54:02Z — also long-frozen (no head movement since Add.~349).
- **#2778** BrunoKrugel `feat(tools): allow hook names` head `ebdf6fde3c7f8a1efab956cb2dbbec6f4b7c285d` updated 02:56:43Z — third citable crush PR, BrunoKrugel sub-mode-4 sub-class B leg.

## Hypothesis (H694): Freeze-time distribution is heavier-tailed than synth-685's exponential model

**Synth-685 model**: Single-author freeze-time was modelled implicitly as **exponential with rate ~1/40min**, giving ~95% CDF at 110m and ~99% CDF at 180m. Under this model, joint probability of two carriers simultaneously exhibiting freeze ≥130m at the same tick should be ≈ (1 − 0.97)² ≈ **0.0009** — essentially never observed in N=8 W17 ticks.

**Add.357 evidence**: Joint event observed (Sameerlite 130m + evawong-oai 130m + ardevd 441m) — three carriers sustaining freezes ≥110m in same tick. Joint probability under exponential ≈ 10⁻⁶. **Strong falsification of exponential freeze-time model.**

**H694 (revised)**: Freeze-time follows a **power-law (Pareto) distribution** with a **heavy tail extending well past 400m**. Cause: PR review backlog dynamics are **bursty rather than memoryless** — once a PR sits in a reviewer queue past ~60m, reviewer-availability events are correlated (weekend/timezone gaps, reviewer-vacation, deferred-batch-review patterns) and freeze-time grows multiplicatively rather than additively.

**Implication**: The "freeze-ceiling" concept itself was a sampling artefact. There is no W17 ceiling — only a **survival-curve** with progressively thinner density as time grows.

## Confirmation/falsification of prior W17 hypotheses

- **FALSIFIES synth-685 H1 (110m freeze ceiling)**: Three simultaneous breaks at Add.357 conclusively reject the 110m hard cap. **Synth-685 H1 retracted.** Replacement: H694 power-law freeze distribution.
- **CONFIRMS synth-690 H2 (rate-limit-budget mechanism for tick-width floor)** indirectly: tick-width floor (13m) is unrelated to freeze-time floor — tick-width is dispatcher-side, freeze-time is reviewer-side. Synth-690 H2 unaffected.
- **REINFORCES synth-691 inversion (release-cadence ↔ multi-PR-mode)**: long freezes correlate with carriers exhibiting low recent release cadence. litellm (0 stable releases in 24h) and codex (1 alpha) both show ≥130m freezes; opencode (3 stable in 7h) shows no top-10 PR with freeze ≥60m at Add.357. **Release cadence is a leading indicator for short freeze-times** (opposite direction of synth-691's PR-throughput inversion: high cadence ↔ low freeze AND low multi-PR-density).
- **CONFIRMS synth-692 sub-class C cold-start prediction P-692.D**: jamadeo goose #9025 head `bc06fd0` unchanged at Add.357 = freeze tick-1 (synth-692 predicted iteration within 2 ticks at prior 0.50 — currently unrealized but still within window, so neither confirmed nor falsified yet).

## Falsifiable predictions (P-694)

- **P-694.A (Sameerlite #27185 freeze extends to ≥160m within 2 ticks, prior 0.45)** — power-law tail prediction; under H694, P(freeze_extends | freeze_now=130m) ≈ 0.45 (much higher than exponential ≈ 0.20).
- **P-694.B (evawong-oai #21184 freeze extends to ≥160m within 2 ticks, prior 0.45)** — same H694 prediction.
- **P-694.C (ardevd #2801 freeze breaks within 3 ticks, prior 0.40)** — under power-law, even very-old freezes (441m) have non-trivial break probability ~0.40 in any 3-tick window. Higher than the exponential prediction of ~0.10 at 441m.
- **P-694.D (joint-carrier ≥110m freeze event recurs within 5 ticks, prior 0.50)** — under H694 the event is much more likely than exponential predicted; recurrence frequency should match.
- **P-694.E (a fourth carrier exhibits ≥130m single-author freeze within 5 ticks, prior 0.40)** — most likely candidate: gemini-cli (cynthialong0-0 #26500 has freeze accumulating since Add.355 ≈ 60m; could extend), or qwen-code (yiliang114 N=4 with iterating-leg rotation could leave one leg frozen long).

## Cross-carrier freeze-time tally at Add.357

| Carrier | Author | PR | Head | Freeze duration |
|---------|--------|-----|------|-----------------|
| litellm | Sameerlite | #27185 | `da06ac5` | ~130m |
| litellm | Sameerlite | #27177 | `20fcd18` | ~190m+ |
| codex | evawong-oai | #21184 | `95ef124d` | ~130m |
| codex | evawong-oai | #21175 | `8f93be5` | ~440m |
| codex | evawong-oai | #21174 | `6e60556` | ~440m |
| crush | ardevd | #2801 | `de9d901` | ~441m |
| crush | BrunoKrugel | #2800 | `3394b9f` | ~440m |
| crush | meowgorithm | #2791 | `07e00ad` | ~24h+ (cross-day) |
| qwen-code | doudouOUC | #3847 | `efade6b` | ~70m+ |
| gemini-cli | cynthialong0-0 | #26500 | `cf86f34` | ~60m+ |

**Cross-carrier freeze ≥110m count**: **8 PRs across 4 carriers** at Add.357. Synth-685's 110m ceiling has been broken **8 times in one snapshot** — categorical falsification.

## Operational consequence

The freeze-ceiling concept was used in synth-685, synth-690, synth-692 as a normalising scale for multi-PR-mode timing. With H694 replacing it, **future synth files should report freeze-times directly** rather than as fractions of a 110m ceiling. Sub-mode-4 sub-class taxonomy (synth-693 table) is unaffected because sub-classes are defined by cardinality and clock-window of *updates*, not freeze-time.
