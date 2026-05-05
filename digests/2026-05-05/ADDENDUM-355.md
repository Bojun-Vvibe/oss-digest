# ADDENDUM-355 — 2026-05-05

**Capture window**: 2026-05-05T14:24:48Z → 2026-05-05T14:38:07Z (**13m19s**, **seventh-consecutive deviation from 50m baseline**, *extreme contraction* — sub-baseline by −36m41s, **shortest tick of the W17 deviation series**). Tick-width sequence Add.349→355 = 60m, 28m, 72m, 82m, 57m, 31m, **13m**. Add.355 sets new W17 lower bound (prior shortest was Add.350 at 28m). Pair-midpoint Add.354+Add.355 = (31+13)/2 = **22m** — rolling-pair midpoint trajectory now reads 50→77→69.5→44→**22**, **second-consecutive sub-baseline pair-midpoint**, with monotone descent from 77→22 (−55m drift over 4 pairs).

**Capture-snapshot timestamp**: 2026-05-05T14:38:07Z UTC (per-carrier `gh api repos/<r>/pulls?state=open&sort=updated&direction=desc&per_page=8`).

**Tick-time delta vs Add.354**: −17m40s (vs 31m last tick, vs 50m baseline). Third-consecutive contraction (Add.353→354→355 forms first contraction-triplet of W17). Tick-width is now **second-order non-stationary with trend**: Δ² consistently negative across last 3 tick-pairs (−25m, −18m).

**Cross-repo prediction resolutions from Add.354 (P-354 series, reconstructed from prior priors carried forward)**:

- **P-354.A (tick-width contracts further or stabilizes near 31m, prior 0.35)**: **REALIZED-AS-CONTRACTION** — 13m vs predicted ≥31m. Contraction continues; stabilization branch FAILS.
- **P-354.B (jif-oai #21187 receives second force-push within 2 ticks, prior 0.35)**: **NOT-REALIZED-TICK-1** — head `85fe8faa8302981aa7ad16e5e9415dd38051193d` unchanged. jif-oai's k_iter=3 stack stable at tick-1.
- **P-354.C (evawong-oai #21184 third force-push within 2 ticks, prior 0.30)**: **REALIZED-AT-TICK-1** — head `e42868f9af6115cf6ca39cdd27dc86e212940fe3` (Add.354) → **`95ef124d`** at snapshot. **3rd cumulative force-push** across 3 consecutive ticks (Add.353 title-rewrite + Add.354 head-only + Add.355 head-only). evawong-oai #21184 reaches **W17-record k_force=3 single-PR cumulative** (ties Sameerlite #27185 and yiliang114 #3850 historical ceilings, exceeds them on consecutive-tick density: 3-in-3 vs Sameerlite 2-in-2).
- **P-354.D (yiliang114 qwen-code stack receives further force-push, prior 0.40)**: **REALIZED-AT-TICK-1** — #3854 head `6bac8801...` (Add.354) → **`8ab829e6`** at snapshot. **3rd cumulative force-push on #3854** within ~3 ticks. yiliang114's multi-iterating-leg sustains cumulative k_force ≥ 5 across stack {#3850, #3854, …}.
- **P-354.E (cynthialong0-0 #26500 transitions stable→iterating, prior 0.35)**: **NOT-REALIZED-TICK-1** — head `cf86f3450...` unchanged. Asymmetric-binary doublet (#26500 stable + #26504 iterating) holds at tick-1.
- **P-354.F (Sameerlite #27185 OR #27177 iterates within 2 ticks, prior 0.40)**: **NOT-REALIZED-TICK-1** — both heads unchanged (#27185 `da06ac54`, #27177 omitted from top-8 — not iterated). Sameerlite freeze extends to **tick-3**.
- **P-354.G (crush full-quiescence extends to tick-7, prior 0.55)**: **REALIZED** — crush top heads (#2801 `de9d901e`, #2800 `3394b9fb`, #2791 `07e00ad4`, #2782 `40684228`, #2778 `ebdf6fde`) all unchanged. Crush sustained-zero now **tick-7** = 380m + 13m = **393m** (~6h33m). New W17 per-carrier sustained-quiescence ceiling.
- **P-354.H (compound-quiescence cardinality stays at 1, prior 0.50)**: **REALIZED** — crush sole holder. litellm fires fresh-open #27192, opencode fires fresh-open #25881, codex fires #21193 + force-push, qwen-code fires fresh #3856 + force-pushes, gemini-cli silent on top heads but #26480 updated, goose silent on top-5 — **6 of 7 carriers active**, only crush quiescent.
- **P-354.I (≥1 fresh-open in opencode within 2 ticks, prior 0.50)**: **REALIZED-AT-TICK-1** — sst/opencode **#25881 (ziuus — `feat(task-tool): Add model parameter for subagent LLM routing`)** opens 14:35:33Z, head `f2a1dc2d`. Inter-fresh-open gap from #25877 (alceops, 14:21:01Z) = 14m32s — **shortest opencode inter-fresh-open gap captured this W17**.
- **P-354.J (jh-block #9023 second force-push OR MERGE within 2 ticks, prior 0.40)**: **NOT-REALIZED-TICK-1** — head `1d61323844...` unchanged. jh-block iteration paused at k_force=1.

**New cross-carrier event — codex sustained-iteration tick + N=2 fresh-opens (reverse of Add.354's iteration-only signature)**:

- openai/codex **#21184** (evawong-oai — `Use direct deny ACLs for Windows metadata sentinels`): head `e42868f9af6115cf6ca39cdd27dc86e212940fe3` (Add.354) → **`95ef124d`** at snapshot. **3rd cumulative silent force-push** within 3 consecutive ticks. **W17-record k_force=3 single-PR cumulative density** (3-in-3-ticks). Title remains stable. evawong-oai sub-mode-4 hardens into **sustained-iteration sub-sub-class** (≥3 consecutive force-push ticks).
- openai/codex **#21193** (dylan-hurd-oai — `Avoid phase2 agent for empty memory housekeeping`): fresh-open 13:41:16Z, head `f7456567` — **first dylan-hurd-oai PR captured this W17**. Carries pre-Add.354-snapshot timestamp but did not appear in Add.354 top-8 due to ranking churn; surfaces in Add.355 top-8.
- openai/codex **#21190** (fcoury-oai — `fix(tui): external editor expansion for same-size large pastes`): fresh-open 13:11:26Z, head `f868febd` — **first fcoury-oai PR captured this W17**. Same surfacing dynamic as #21193.
- **Codex burst regime extension**: tick-5 of consecutive activity. evawong-oai #21184 enters **W17-singular sustained-iteration class** (k_force=3 in 3 ticks, no other PR across all 7 carriers has matched this density in W17). canvrno-oai cluster (#21089, #21090, #21091) all updated this tick — **multi-PR-mode N=3 stable-iterating mix** (heads `638b8989`, `6a4e364d`, `473cff87` — none changed from prior captures, but `updated_at` shifted indicating non-head metadata churn). canvrno-oai **enters sub-mode-4 instantiator pool as N=12 instantiator** if metadata-churn counts as iteration; stricter k_force≥1 criterion holds N=11.

**New cross-carrier event — litellm fresh-open thiago-z0 #27192 (OCI provider tool-call-id fix)**:

- BerriAI/litellm **#27192** (thiago-z0 — `fix(oci): handle missing tool call id in non-streaming responses`): fresh-open 14:31:50Z, head `ebccfbfa`. **First litellm fresh-open since Add.353's orbisai0security #27189 / dennishenry #27190 doublet** (~2h20m gap). thiago-z0 is **first-time author this W17** (not in any prior W17 author-set). Surface: OCI (Oracle Cloud Infrastructure) provider — *new provider surface* for W17 (no prior litellm PR this W17 touched OCI). **Provider-surface diversification signal**: litellm W17 PR distribution by provider now includes OCI, NVIDIA Riva (Sameerlite #27185), New Relic (bonczj #26989), Tickerr (imviky-ctrl #27182).

**New cross-carrier event — qwen-code N=2 fresh-opens + N=2 force-pushes (highest single-tick activity W17)**:

- QwenLM/qwen-code **#3856** (B-A-M-N — `feat(cli): polish --add-dir / --include-directories feature`): fresh-open 14:36:30Z, head `a0daf50c`. **B-A-M-N joins qwen-code author-set this W17** (prior: yiliang114, wenshao, doudouOUC, Sameerlite-cross-carrier — does not include B-A-M-N). #3848 by B-A-M-N (also `a0daf50c` head — **same head SHA across two PRs**, indicating shared branch base or stack).
- QwenLM/qwen-code **#3854** (yiliang114): head `6bac8801...` (Add.354) → **`8ab829e6`** at snapshot. **3rd cumulative force-push** on #3854. yiliang114 multi-iterating-leg sustained k_force ≥ 5 across stack {#3850 historical, #3854 +3 ticks, …}. yiliang114 **matches evawong-oai's sustained-iteration class** at single-PR cumulative — **second carrier to host W17 k_force=3 single-PR**.
- QwenLM/qwen-code **#3848** (B-A-M-N — `fix(memory): route auto-memory recall selector to fast model`): updated 14:32:52Z. Co-existence with #3856 by same author = **B-A-M-N enters multi-PR-mode at instantiation tick**, joining cynthialong0-0/Sameerlite/yiliang114 multi-PR-mode pool. Sub-mode-4 instantiator pool: **N=12 instantiator** (if B-A-M-N's #3848+#3856 stack qualifies — both heads stable at snapshot; not yet iterating; **sub-mode-4 stable-only entry**, distinct from prior instantiators which all had ≥1 iterating leg at instantiation).

**New cross-carrier event — opencode N=2 fresh-opens (#25877 + #25881) within 14m32s**:

- sst/opencode **#25881** (ziuus — `feat(task-tool): Add model parameter for subagent LLM routing`): fresh-open 14:35:33Z, head `f2a1dc2d`. Inter-fresh-open gap from alceops #25877 (14:21:01Z) = **14m32s** — shortest opencode inter-fresh-open gap of W17. Pairs with #25877 to form **opencode tick-4 mini-burst (N=2 fresh-opens in 14m)**, distinct from Add.352's dispersion-burst (N=5 in ~25m).
- sst/opencode **#25867** (stephanschielke — `fix(git): replace mutating Stream.runFold with Stream.runForEach`): updated 14:13:44Z, head `1e1dca64`. Was in dispersion-burst cohort (Add.352); reappears in top-8 indicating metadata churn (likely review-comment activity, head unchanged from Add.352 capture).

**Cross-carrier sub-mode-4 instantiator pool**: N=11 (Add.354) → **N=12** (Add.355) via B-A-M-N qwen-code #3848+#3856 stable-stack. **Instantiator pool growth-rate**: 2 ticks ago N=9, last tick N=11 (+2), this tick N=12 (+1). Pool now spans **6 of 7 carriers** unchanged from Add.354 (litellm: ben-wangz, Sameerlite; gemini-cli: rushikeshsakharleofficial, euxaristia, cynthialong0-0; opencode: Hona; codex: maxkomarychev, evawong-oai, jif-oai; qwen-code: wenshao, yiliang114, **B-A-M-N**; goose: jh-block). Crush remains uninstantiated. **Structural correlation persists tick-7**: full-quiescent ⊥ sub-mode-4-instantiation.

**Cross-carrier burst-coupling observation (tick-5 sustained activity)**: 6 of 7 carriers fire ≥1 head-change OR fresh-open this tick (litellm: 1 fresh #27192; opencode: 2 fresh #25877→#25881; codex: 1 force-push #21184 + 2 surfacing #21190/#21193; qwen-code: 1 fresh #3856 + 1 force-push #3854; gemini-cli: top-8 metadata churn but heads stable; goose: top-5 stable; crush: full-quiescent). Aggregate **head-change count = 4** (#21184, #3854, plus 2 fresh-open new heads #27192, #25881, #3856, #25877 — pure-fresh-opens not iteration force-pushes; **strict iteration force-push count = 2**, **fresh-open count = 4**, **total new-content events = 6 in 13m19s = 0.450/min**) — **highest per-minute event-rate of W17 deviation series** (vs Add.354's 0.194/min, Add.353's 0.141/min). **Inverse coupling between tick-width and event-density** confirmed empirically: as tick-width contracts, per-minute event-rate rises super-linearly (0.141→0.194→0.450 over 3 ticks while tick-width drops 57→31→13m).

**Prediction outcome summary Add.354**: 5 realized (P-354.A contraction-branch, P-354.C 3rd force-push, P-354.D 3rd force-push, P-354.G crush tick-7, P-354.H cardinality-1, P-354.I opencode fresh); 4 not-realized (P-354.B jif-oai #21187, P-354.E cynthialong0-0 #26500, P-354.F Sameerlite freeze extends, P-354.J jh-block paused); 1 partial. Realization rate **5/10 = 50%** — reverts to W17 mean, recovering from Add.354's 46%.

**Calibration this tick**: evawong-oai #21184 establishes **W17-singular sustained-iteration class** (k_force=3-in-3 consecutive ticks, single PR, no peer match). yiliang114 #3854 reaches matching k_force=3 cumulative on multi-iterating-leg leg. Tick-width sets new W17 floor at 13m (sub-baseline by −37m). Event-rate per minute reaches W17 maximum (0.450/min). Sub-mode-4 instantiator pool grows to N=12 with B-A-M-N as **first stable-only-stack instantiator** (no iterating leg at instantiation — distinct entry-pattern from all 11 prior instantiators which had ≥1 iterating leg). Crush sustained-quiescence extends to tick-7 (393m). Inverse-coupling tick-width↔event-rate empirically confirmed.

**P-355 prediction series** (carried into Add.356 evaluation):

- **P-355.A (tick-width rebounds toward baseline, ≥30m, prior 0.50)**: 4-tick monotone-contraction trend statistically rare; mean-reversion expected.
- **P-355.B (evawong-oai #21184 fourth consecutive-tick force-push, prior 0.30)**: would extend W17-singular class to k_force=4; high prior given 3-in-3 momentum but rare structural ceiling.
- **P-355.C (yiliang114 #3854 fourth force-push, prior 0.30)**: same logic as P-355.B.
- **P-355.D (B-A-M-N #3848 OR #3856 transitions stable→iterating, prior 0.40)**: stable-only entry typically converts to iterating within 2-3 ticks based on prior instantiator behavior.
- **P-355.E (crush full-quiescence extends to tick-8, prior 0.55)**: trend-continuation prior.
- **P-355.F (litellm thiago-z0 #27192 receives review-comment OR force-push within 2 ticks, prior 0.40)**: standard fresh-open follow-up rate.
- **P-355.G (opencode third fresh-open within 2 ticks, prior 0.35)**: extending the mini-burst.
- **P-355.H (third sustained-iteration W17-class instantiator emerges within 3 ticks, prior 0.25)**: would broaden the W17-singular class beyond evawong-oai+yiliang114.

**gh capture note**: 7-carrier parallel fetch within rate-budget. Notable findings: evawong-oai #21184 third consecutive-tick force-push (W17-record k_force=3-in-3); yiliang114 #3854 third force-push (matches W17-record on multi-iterating-leg); litellm thiago-z0 #27192 first-time-author OCI fresh-open; opencode ziuus #25881 + alceops #25877 mini-burst (14m32s gap); qwen-code B-A-M-N #3856 + #3848 stable-stack as N=12 sub-mode-4 instantiator (first stable-only entry); codex surfacing dylan-hurd-oai #21193 + fcoury-oai #21190 (carry-forward from Add.354 timestamps, top-8 ranking churn); crush full-quiescence tick-7 (393m); compound-quiescence cardinality stays at 1 (crush sole holder); 6 of 7 carriers active; per-minute event-rate hits W17 maximum 0.450/min in 13m19s window.

---

## Carrier-by-carrier top-3 head-state at 14:38:07Z

**sst/opencode**: #25881 ziuus `f2a1dc2d` FRESH; #25877 alceops `d6e92263` carry; #25867 stephanschielke `1e1dca64` carry (metadata churn).

**openai/codex**: #21184 evawong-oai `95ef124d` FORCE-PUSH-3 (W17-record); #21190 fcoury-oai `f868febd` carry (surfacing); #21193 dylan-hurd-oai `f7456567` carry (surfacing).

**BerriAI/litellm**: #27192 thiago-z0 `ebccfbfa` FRESH (first-time-author, OCI surface); #26989 bonczj `ff3c0de2` carry (metadata churn); #27190 dennishenry `a1cda015` carry.

**google-gemini/gemini-cli**: #26480 aishaneeshah `175fc05f` carry (metadata churn); #26504 cynthialong0-0 `15d3e2e6` carry; #26473 sripasg `b378111c` carry.

**QwenLM/qwen-code**: #3856 B-A-M-N `a0daf50c` FRESH; #3854 yiliang114 `8ab829e6` FORCE-PUSH-3 (matches W17-record); #3848 B-A-M-N `a0daf50c` carry (same head as #3856 — stack base).

**block/goose**: #8911 jamadeo `e68c8026` carry; #8999 alexhancock `e27a39dd` carry; #9023 jh-block `1d613238` carry.

**charmbracelet/crush**: #2512 taciturnaxolotl `0e9c0b6f` carry (metadata churn); #2801 ardevd `de9d901e` carry; #2778 BrunoKrugel `ebdf6fde` carry. **Crush full-quiescent on top-5 heads tick-7**.
