# W17-synth-681 — cross-carrier compound-quiescence-exit rebound-coupling within 71m45s window: codex N=5 + opencode N=4 + qwen-code N=4 simultaneous burst after Add.350 cardinality-3 quiescent peak

**Date**: 2026-05-05 (W17 tick post-Add.351)

**Carriers tied**: openai/codex, sst/opencode, QwenLM/qwen-code (3 of 7).

**Anchor observation**: Following Add.350 capture at 10:23:27Z which recorded **compound-quiescence cardinality = 3** ({openai/codex, block/goose, charmbracelet/crush}, the V-shape recovery to original peak per P-349.L), the very next tick (Add.351 capture window 10:23:27Z → 11:35:12Z, span 71m45s) produced a **simultaneous fresh-open burst across three carriers**:

- **openai/codex N=5 fresh-opens**: jif-oai #21178 (`Move installation ID resolution out of core startup`, 11:17:50Z, head `540a678365fad8387383e717f9d906c7f68d7aa8`); jif-oai #21180 (`Make turn diff tracking operation backed`, 11:30:47Z, head `815dc24996dc22fbedfd300d2f72563ef686b1a2`); evawong-oai TRIPLET #21173 (head `0e9394dbd8265f17f4c78d8641009c08bcbad857`, 10:52:05Z), #21174 (head `6e60556d73a9df88266e5fe17e2add1e5f9d51f2`, 10:52:19Z), #21175 (head `8f93be5b9e21e89802d601fb67596023c858d076`, 10:52:34Z).
- **sst/opencode N=4 fresh-opens**: vimtor #25857 (`chore: configure alerting and monitoring`, head `10555182b2cd33ac86dbaebd35602c30d3166bb2`, 11:03:41Z); LifetimeVip #25856 (`feat(todo): auto-cleanup stale todos + /clear-tasks and /清除任务 commands`, head `d6913d6c18f42085112ce63531b5bb36958693a4`, 11:02:37Z); zclllyybb #25855 (`fix(tui): preserve summarized paste order with wide text`, head `523a3422b0a7ef986893162b25612dd05e5969ac`, 10:58:32Z); Hona #25853 (`chore(desktop): make proxy setup order explicit`, head `a8db60bac35d4f88208ae26511e704a576edd74b`, 10:46:08Z).
- **QwenLM/qwen-code N=4 fresh-opens**: qiuqiuwen25 #3852 (`fix(core): activate skills from discovered result paths`, head `8a5fa3b1920ea25f5703e981641ee562c6c29d49`, 11:35:12Z); yiliang114 #3850 (`refactor(core): classify retry errors`, head `f0229bf562d926f905302cfbfb33818867471e24`, 11:30:36Z); B-A-M-N #3849 (`feat(models): add cross-authType model resolution to ModelRegistry and ModelsConfig`, head `b2719e6a2a33c8ba616604cc8fd863f2c6cfc696`, 10:34:50Z); B-A-M-N #3848 (`fix(memory): route auto-memory recall selector to fast model`, head `55df20b27d1123ca9f38eb6a731d400e9535e970`, 10:25:54Z).

**Total cross-carrier fresh-open count this tick**: **N=13** spread across 3 carriers in a 71m45s window. Of these, **codex itself contributes N=5** — codex was a member of the prior cardinality-3 quiescent set, and is now the highest-emitting carrier of the rebound. That is, **the carrier most-suppressed in the prior quiescent peak became the highest-emitting carrier of the rebound** — an inversion-rebound rather than a uniform recovery.

**Pattern**: this synth promotes a hypothesis hinted at by W17-synth-101 (multi-tick zero-event carrier-quiescence as own regime) into a compound primitive: when compound-quiescence cardinality reaches its V-shape recovery to peak (3 in our W17), **the immediately-following tick exhibits a coupled rebound burst across multiple carriers** — not just the formerly-quiescent carriers, but adjacent active carriers as well (qwen-code was not in the quiescent set but participated in the burst).

**Three-carrier coupling structure observed**:

| carrier | fresh-opens | participating authors | dominant cluster |
|---|---|---|---|
| openai/codex | 5 | jif-oai (DOUBLET), evawong-oai (sub-30s TRIPLET) | dependency-chain TRIPLET |
| sst/opencode | 4 | Hona (QUARTET extension), vimtor, LifetimeVip, zclllyybb | author-multiplex |
| QwenLM/qwen-code | 4 | B-A-M-N (DOUBLET), qiuqiuwen25, yiliang114 | DOUBLET + singletons |

The three-carrier coupling exhibits **distinct cluster shapes per carrier**: codex resolves into a single-author dependency-chain TRIPLET (evawong-oai #21173/#21174/#21175 all on Windows-sandbox-metadata surface, monotonic title chain "Wire monitor → Add deny sentinel → Wire missing metadata to deny sentinel"); opencode resolves into author-multiplexed singletons + one author-extension (Hona's 4th desktop-package PR #25853 extends his existing triplet to QUARTET); qwen-code resolves into one DOUBLET (B-A-M-N #3848+#3849 at 8m56s gap on adjacent core/memory/models surfaces) + two singletons.

**Two falsifying observations excluded by this synth**:

1. The other two formerly-quiescent carriers (block/goose, charmbracelet/crush) **did NOT participate in the rebound** — goose held at fresh-open quiescence (idosavion #9021 stale 2h37m, morgmart cluster all heads-stable through tick-6) and crush held at full carrier-quiescence (top-5 unchanged for 4th consecutive tick). This means the rebound is **selective by carrier-temperament**, not uniform: high-velocity carriers in the quiescent set rebound; low-velocity/long-tail carriers stay quiescent. Compound-quiescence cardinality drops 3 → 2 because only codex exited.
2. The rebound is **not driven by a shared topical trigger** — codex's burst is on Windows-sandbox-metadata, opencode's burst is on desktop-app + tui + monitoring + todo (4 disjoint surfaces), qwen-code's burst is on core memory routing + ModelRegistry resolution + retry-classification + skills-discovery. No shared substrate, no shared author overlap, no shared dependency. The coupling is **temporal, not substrate-mediated**.

**Mechanism hypotheses** (ranked by prior plausibility):

- **H1 (most likely, prior 0.45)**: contributor-population background-noise reasserts after a cycle of CI/maintainer-attention focus that temporarily depressed fresh-open rates across high-velocity carriers (the quiescent set). Independent author timezones synchronize on the recovery edge because of overlapping work-windows (US-AM + EU-PM + Asia-night). The 71m45s window covers EU-mid-day + US-east-AM-arrival, the densest contributor-cohort overlap of the day. **Prediction**: P-351.C (codex sustains burst) prior raised to 0.55; predict opencode + qwen-code also sustain ≥2 fresh-opens next tick (prior 0.55 each).
- **H2 (prior 0.25)**: rebound is an **artifact of capture-window asymmetry** — Add.350 captured at 10:23:27Z (28m window) under-sampled the natural fresh-open rate, and Add.351 captured at 11:35:12Z (72m window) over-sampled accordingly. Per-PR-per-minute rate is flat; quiescent appearance was sampling. **Falsifier**: if next tick (50m baseline) shows comparable rate (≈9 fresh-opens normalized), H2 is confirmed; if shows ≪13, H1 dominates.
- **H3 (prior 0.20)**: cross-carrier coupling is mediated by **shared OSS-CLI release-train cadence** — week-end cadence (2026-05-05 is a Tuesday but mid-W17) reaches a fresh-open trigger threshold simultaneously for high-velocity carriers' contributor populations. **Falsifier**: track whether the same coupling reproduces at next W18-Tuesday cadence; if yes, H3 promotes.
- **H4 (prior 0.10)**: the rebound is **driven by a single upstream tooling event** (e.g., a shared CI / model-registry / dependency update that landed at ~10:30Z and triggered cascading PRs across carriers). **Falsifier**: scan diff-content of the 13 PRs for shared dependency bumps or shared upstream-PR references; if absent (as preliminary check suggests — surfaces are entirely disjoint), H4 demoted further.

**Cross-link**:

- **Extends W17-synth-101** (multi-tick zero-event carrier-quiescence as own regime — codex 160m + crush 110m): synth-101 established that quiescence is a regime; this synth establishes that the **regime exit** is a coupled-burst event with predictable cross-carrier amplification on high-velocity carriers but not on long-tail carriers.
- **Generalizes W17-synth-92** (same-second N=4 open tuplet by single author on disjoint surfaces): synth-92 was per-author per-second; this synth is **per-tick per-window cross-author cross-carrier**. The rebound TRIPLET evawong-oai #21173/#21174/#21175 is itself a sub-30s same-author triplet that fits within synth-92's structural family — but synth-92 was disjoint surfaces, evawong-oai's triplet is a **dependency-chain** on shared Windows-sandbox-metadata family. New variant: **adjacent-second N=3 dependency-chain on shared surface family** (sub-mode of synth-92).
- **Refines W17-synth-100** (cross-carrier multi-tick zero-event carrier-quiescence regime): the quiescent set rotates {goose, crush, codex} → {goose, crush} → {goose, crush, codex} → {goose, crush}; this synth establishes that **codex is the rotating member** while goose and crush are stable members of W17 quiescent set. Codex carrier exhibits **highest-amplitude oscillation** (4-tick zero-event regime followed by N=5 fresh-open burst) while goose/crush exhibit **persistent low-amplitude quiescence**.

**Predictive payload for Add.352**:

- **P-681.A**: Of the three rebound carriers (codex, opencode, qwen-code), at least 2 sustain ≥2 fresh-opens next tick. Prior 0.60.
- **P-681.B**: Both quiescent holdouts (goose, crush) extend quiescence to next tick (no fresh-opens, no merges). Prior 0.55. (joint event)
- **P-681.C**: Compound-quiescence cardinality stays at 2 ({goose, crush}) next tick — codex does not re-enter quiescence in single-tick. Prior 0.65.
- **P-681.D**: evawong-oai dependency-chain TRIPLET #21173 merges first (PR-1 of dependency order) within next 2 ticks. Prior 0.50.
- **P-681.E**: B-A-M-N qwen-code DOUBLET extends to TRIPLET on adjacent core surface within next 2 ticks. Prior 0.40.
- **P-681.F**: Sustained rebound triple (codex+opencode+qwen-code coupling) reproduces within W17 (a second 13-PR cross-3-carrier burst event before W17 close). Prior 0.30.

**Falsifier set**:

- If goose or crush opens any fresh PR in next tick → P-681.B falsified, suggests rebound generalizes beyond high-velocity carriers and H1 contributor-population hypothesis under-specified.
- If codex emits 0 fresh-opens next tick → P-681.A falsified, suggests burst is single-tick spike not a regime-exit; H2 (sampling artifact) promoted.
- If next tick produces another N≥10 cross-3-carrier burst → P-681.F realized at single-tick, H4 (upstream trigger) promoted dramatically.

**Confidence note**: 3-of-7 carrier coupling at single-tick scope is the strongest cross-carrier rebound-coupling event observed in W17 to date. Prior synth records (synth-100 cross-carrier ACP/SACP quartet, synth-100 cross-carrier convergent dual-author defensive-coercion pair, synth-92 same-second N=4 single-author tuplet) were all at PR-pair or PR-quartet scope; this is at carrier-burst scope. Worth distinct W17 primitive: **rebound-coupling-after-cardinality-3-quiescence** with the **selective-carrier-rebound** sub-property.
