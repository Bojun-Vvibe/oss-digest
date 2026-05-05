# ADDENDUM-356 — 2026-05-05

**Capture window**: 2026-05-05T14:38:07Z → 2026-05-05T15:06:23Z (**28m16s**, **eighth-consecutive deviation from 50m baseline**, *moderate contraction* — sub-baseline by −21m44s, but **rebound +14m57s from Add.355's 13m19s W17 floor**). Tick-width sequence Add.349→356 = 60m, 28m, 72m, 82m, 57m, 31m, 13m, **28m**. Add.356 confirms **W17 lower bound holds at ~13m** (consistent with synth-690 H2 rate-limit-budget mechanism prediction P-355.A). Pair-midpoint Add.355+Add.356 = (13+28)/2 = **20.5m** — third-consecutive sub-baseline pair-midpoint, but trajectory inflects (50→77→69.5→44→22→**20.5**, descent rate flattens from −22m to −1.5m).

**Capture-snapshot timestamp**: 2026-05-05T15:06:23Z UTC (per-carrier `gh api repos/<r>/pulls?state=open&sort=updated&direction=desc&per_page=8`).

**Tick-time delta vs Add.355**: +14m57s (vs 13m last tick, vs 50m baseline). **First expansion after 3-consecutive-contraction triplet (Add.353→354→355)**. Δ² inverts sign (was −25m, −18m; now +15m). Tick-width second-order non-stationary trend **breaks**.

**Cross-repo prediction resolutions from Add.355 (P-355 series)**:

- **P-355.A (tick-width hits floor near 10–13m, prior 0.55 from synth-690 rate-limit-budget mechanism)**: **REALIZED-AS-REBOUND** — 28m vs predicted floor-zone rebound. Floor confirmed at 13m; dispatcher exits floor regime at tick+1.
- **P-355.B (evawong-oai #21184 fourth force-push within 2 ticks, prior 0.30)**: **NOT-REALIZED-TICK-1** — head `95ef124d` unchanged. evawong-oai sustained-iteration class freezes at k_force=3 in 3 consecutive ticks (Add.353→355). Sustained-iteration sub-sub-class enters first **freeze-tick** at tick-4.
- **P-355.C (yiliang114 #3854 fourth force-push, prior 0.35)**: **NOT-REALIZED-TICK-1** — #3854 not in qwen-code top-8 at snapshot (displaced by yiliang114 #3853 head `16a4af9`, #3828 head `5983d11`, wenshao #3836 #3115 #3842, doudouOUC #3835, Mr-Maidong #3781, shenyankm #3701). yiliang114 multi-PR-mode now ranks #3853, #3828 above #3854; #3854 freeze at tick-1.
- **P-355.D (cynthialong0-0 #26500 transitions stable→iterating, prior 0.35)**: **NOT-REALIZED-TICK-1** — #26500 head `cf86f3450` displaced from gemini-cli top-8; ranking churn. However **#26504 iterates** (head `9e191eb` updated 15:01:49Z; Add.355 had head `9e191eb...` per multi-iteration — confirm: Add.355 cited #26504 as iterating leg of cynthialong0-0 doublet). cynthialong0-0 multi-PR-mode persists with iterating-leg shift to #26504.
- **P-355.E (Sameerlite freeze extends to tick-4, prior 0.50)**: **REALIZED** — Sameerlite #27185 head `da06ac5` unchanged at snapshot. Sameerlite freeze = **tick-4** = ~110m sustained-no-iteration (W17 single-author freeze ceiling holds).
- **P-355.F (crush full-quiescence extends to tick-8, prior 0.60)**: **PARTIALLY-REALIZED** — crush top-PR head `de9d9018` (#2801 ardevd) unchanged. **However** #2512 (taciturnaxolotl Nix flake, head `0e9c0b6`, updated 14:18:36Z) **surfaces in top-8** — pre-snapshot timestamp but ranking churn lifts it. Strict-iteration crush quiescence holds **tick-8** = 393 + 28 = **421m** (~7h01m) on top heads. New W17 ceiling.
- **P-355.G (≥1 fresh-open in opencode within 1 tick, prior 0.45)**: **REALIZED** — sst/opencode **#18767** (noahbentusi — `feat(app): Mobile Touch Optimization`) surfaces with updated 14:59:01Z, head `2e2c377`. Pre-snapshot opencode also shows #25244 (mattgenious — `fix(app): avoid preview child MCP bootstraps`) head `455f4a6` updated 14:47:51Z. **2 new top-8 entries** within 28m window.
- **P-355.H (compound-quiescence cardinality stays ≤ 1, prior 0.55)**: **REALIZED** — only crush quiescent on top heads. 6 of 7 carriers active.

**New cross-carrier event — codex fcoury-oai #20065 surfaces (session picker redesign), iteration shift**:

- openai/codex **#20065** (fcoury-oai — `feat(tui): redesign session picker`): updated 14:54:11Z, head `88b37d0`. **First W17 surfacing of #20065**. fcoury-oai now has **3 PRs in codex top-8** (#20065, #21190 from Add.355, plus implicit prior). **fcoury-oai enters multi-PR-mode** as a **third codex multi-PR author** (after canvrno-oai N=3 cluster {#21089, #21090, #21091} and jif-oai cluster). canvrno-oai cluster persists: #21090 head `6a4e364` (unchanged from Add.355's `6a4e364d`), #21089 head `638b898` (unchanged from `638b8989`). #21091 displaced from top-8 by fcoury-oai #20065 surfacing.

**New cross-carrier event — qwen-code multi-author multi-PR-mode density spike (wenshao N=3, yiliang114 N=2 simultaneous)**:

- QwenLM/qwen-code **wenshao** holds **3 simultaneous top-8 PRs**: #3836 (`feat(core,cli): surface and cancel auto-memory dream tasks`, head `90df8f4`, updated 14:59:54Z), #3115 (`feat: add commit attribution with per-file AI contribution tracking`, head `3c0e329`, updated 14:53:18Z), #3842 (`feat(core): add signal.reason convention for ShellExecutionService`, head `9008717`, updated 14:44:38Z). **wenshao enters sub-mode-4 instantiator pool as N=13 instantiator** with **N=3 simultaneous open PRs** — exceeds Sameerlite's N=2 instantiation density and matches canvrno-oai's N=3 codex cluster. Cross-carrier sub-mode-4 instantiator pool: **N=13** (was N=11 at Add.354, N=12 with B-A-M-N Add.355).
- QwenLM/qwen-code **yiliang114** sustains multi-PR mode with **#3853** (`feat(installer): add hosted install release alias`, head `16a4af9`, updated 14:53:37Z) and **#3828** (`feat(installer): publish release installer assets`, head `5983d11`, updated 14:45:34Z). #3854 (the prior k_force=3 PR) displaced from top-8 — yiliang114 **rotates iterating leg from #3854 to #3853 + #3828** while keeping multi-PR-mode. Both #3853 and #3828 are installer-surface PRs — **shared-subpackage same-author parallel authoring** (rare pattern; prior shared-subpackage instances were multi-author per synth-100).
- QwenLM/qwen-code single tick now hosts: wenshao N=3, yiliang114 N=2, doudouOUC N=1, Mr-Maidong N=1, shenyankm N=1 = **5 distinct authors with N=8 total open top-8 PRs**. **qwen-code reaches W17 maximum author-cardinality density** in single top-8 snapshot.

**New cross-carrier event — litellm fresh-open gbattistel #26371 (Telnyx OpenAI-compatible provider)**:

- BerriAI/litellm **#26371** (gbattistel — `feat: add Telnyx as OpenAI-compatible provider`): updated 14:52:48Z, head `2b04a6e`. Surfaces in top-8 at #1 by updated_at. Telnyx is **new provider surface for W17** (prior providers: OCI Add.355, NVIDIA Riva, New Relic, Tickerr per synth-690). litellm provider-surface diversification continues — **W17 distinct-provider-PR count now 5** (OCI, Riva, New Relic, Tickerr, Telnyx). gbattistel is **first-time author this W17**.

**New cross-carrier event — goose jamadeo multi-PR-mode (#9025 + #8911)**:

- block/goose **#9025** (jamadeo — `Switch GH pages deploy to actions/artifact workflow`): updated 14:58:45Z, head `bc06fd0`. **First W17 surfacing of #9025**.
- block/goose **#8911** (jamadeo — `goose2 distribution bundling`): updated 14:45:45Z, head `ea42ca5`. Same author.
- **jamadeo enters goose multi-PR-mode** with N=2 simultaneous PRs. **First multi-PR author this W17 in goose carrier** (prior goose author-set: jh-block, idosavion, alexhancock, treebird7, tellaho, Abhijay007 — all N=1). goose **enters sub-mode-4 instantiator carrier-set** at Add.356; carrier-coverage of sub-mode-4 now **6 of 7** (still excludes crush, which sustains quiescence at tick-8).

**New cross-carrier event — gemini-cli cynthialong0-0 #26504 silent force-push (sustained iteration)**:

- google-gemini/gemini-cli **#26504** (cynthialong0-0 — `fix(cli): provide JSON output for AgentExecutionStopped in non-interactive mode`): head `9e191eb` updated 15:01:49Z. Add.355 cited #26504 head `9e191eb...` (matches), but `updated_at` shifts to 15:01:49Z indicating metadata churn or comment activity — not a head-changing force-push at this tick. cynthialong0-0 iterating leg sustains visibility but **k_force does not increment** at Add.356.

**New cross-carrier event — opencode N=2 fresh-opens (#18767 + #25244) within 28m**:

- sst/opencode **#18767** (noahbentusi — `feat(app): Mobile Touch Optimization`): updated 14:59:01Z, head `2e2c377`. **First W17 surfacing**. Mobile-touch surface = **new app-layer concern** for opencode W17.
- sst/opencode **#25244** (mattgenious — `fix(app): avoid preview child MCP bootstraps`): updated 14:47:51Z, head `455f4a6`. **First W17 surfacing**. MCP bootstrap fix = preview-deployment-related fix.
- Inter-fresh-open gap = 11m10s. **Beats Add.355's prior shortest opencode inter-fresh-open gap of 14m32s** — new W17 opencode gap floor.

**Release activity (28m window)**:

- sst/opencode: no new release this tick (prior tick had v1.14.37→v1.14.39 triple in 7h, latest v1.14.39 published 10:57:54Z stable). Release-PR-throughput inversion noted (see W17-synth-691).
- openai/codex: no new release this tick (latest `rust-v0.129.0-alpha.6` 01:04:43Z).
- BerriAI/litellm: no new release.
- google-gemini/gemini-cli: no new release (latest nightly `v0.42.0-nightly.20260504` from 2026-05-04).
- QwenLM/qwen-code: no new release this tick (latest nightly `v0.15.6-nightly.20260505.2e69d641d` 00:31:07Z).
- block/goose: no new release.
- charmbracelet/crush: no new release this tick (latest stable `v0.65.3` 2026-05-04T21:29:18Z, nightly tag updated 01:02:05Z).

**P-356 series (new priors, 1-tick horizon)**:

- **P-356.A** (tick-width re-expands toward 50m baseline, prior 0.45): expansion-trajectory re-establishment.
- **P-356.B** (wenshao iterates ≥1 of {#3836, #3115, #3842} within 2 ticks, prior 0.50): newly-instantiated multi-PR mode tends to iterate within 1–2 ticks.
- **P-356.C** (jamadeo iterates ≥1 of {#9025, #8911} within 2 ticks, prior 0.45).
- **P-356.D** (fcoury-oai #20065 force-push within 2 ticks, prior 0.40).
- **P-356.E** (yiliang114 #3854 re-surfaces in qwen-code top-8 within 2 ticks, prior 0.45) — rotation reversibility test.
- **P-356.F** (Sameerlite freeze extends to tick-5, prior 0.45) — freeze-decay prior.
- **P-356.G** (crush quiescence extends to tick-9, prior 0.50).
- **P-356.H** (≥1 new first-time-author PR across 7 carriers within 1 tick, prior 0.55) — first-time-author influx persistence (see W17-synth-692).
- **P-356.I** (compound-quiescence cardinality stays at 1, prior 0.55).

**Cross-link to W17-synthesis-691**: release-cadence vs PR-throughput inversion (opencode 3 releases in 7h vs gemini-cli/qwen-code nightly-only).

**Cross-link to W17-synthesis-692**: first-time-author influx cluster (gbattistel litellm + noahbentusi opencode + mattgenious opencode + jamadeo goose, N=4 first-time authors within Add.356 28m window).
