# W17 Synthesis #293 — Descending-PR-Number Uniform-Cadence Intra-Author Scoped-Fix Sub-Cluster As A Structurally Distinct Sprint Shape From Ascending-Feat Sprints (viyatb-oai network-proxy n=3 vs. jif-oai house-keeping memories n=4)

## Pattern statement

When a single internal-author (e.g., -oai/-berri/-block suffix authors with vendor-internal CI access) merges n≥3 PRs on a shared title-prefix scope within a single working window, the resulting intra-author sub-cluster falls into one of two structurally distinct shape classes that can be discriminated by **three orthogonal axes simultaneously**: (1) **PR-number direction** (ascending vs. descending), (2) **inter-member temporal cadence** (irregular sub-50m vs. uniform ~60m), and (3) **semantic title-prefix class** (`feat:` vs. `fix(scope):`). The two classes are not mere stylistic variants — they correspond to different upstream sprint-construction modes (forward-planned feature ladder vs. backward-walking patch chain), and the discriminating axes are mutually reinforcing within each class (high inter-axis correlation), so any one axis is sufficient to predict the other two.

## Anchoring evidence — Class A: Ascending-feat sprint (jif-oai house-keeping memories)

**Cluster.** openai/codex jif-oai n=4 PR cluster on `feat:` title-prefix:
- openai/codex#19990 / `1b743603651d` / 15:07:16Z / `feat: skip memory startup when Codex rate limits are low`
- openai/codex#19998 / `5a79dfab7c67` / 15:11:50Z / `feat: house-keeping memories 1`
- openai/codex#20000 / `21e19912e0cd` / 15:26:45Z / `feat: house-keeping memories 2`
- openai/codex#20005 / `5b7d6f5c4f55` / 16:13:35Z / `feat: house-keeping memories 3`

**Axis 1 — PR-number direction.** Strictly ASCENDING: 19990 → 19998 → 20000 → 20005 (Δ = +8, +2, +5). Author opens PRs in forward time order, PR-numbers reflect creation order, sprint advances forward through a numerically-suffixed feature ladder.

**Axis 2 — Inter-member temporal cadence.** IRREGULAR: 4m34s + 14m55s + 46m50s. Cadence accelerates then decelerates with no fixed inter-member spacing. Total cluster span = 1h06m19s.

**Axis 3 — Semantic title-prefix class.** ALL `feat:`. Forward-planned feature additions on a sequentially-numbered subsystem (memories 1 / memories 2 / memories 3 plus an enabling rate-limit guard). Numerical title-suffixes (1, 2, 3) make the forward-ladder structure explicit in the title itself.

**Sprint-construction mode interpretation.** Author pre-planned a 3-part feature decomposition (memories 1/2/3) plus a guard PR, opened them in forward temporal order against a forward-numbered PR sequence, and merged them as fast as CI/review allowed. The irregular cadence reflects CI completion times for variable-cost feat() PRs. The ascending PR-number direction is a downstream artifact of forward-time PR creation.

## Anchoring evidence — Class B: Descending-fix(scope) sub-cluster (viyatb-oai network-proxy)

**Cluster.** openai/codex viyatb-oai n=3 PR cluster on `fix(network-proxy):` title-prefix:
- openai/codex#20002 / `3afb185a4f02` / 17:51:44Z / `fix(network-proxy): tighten network proxy bypass defaults`
- openai/codex#20001 / `3377afd84a42` / 18:52:50Z / `fix(network-proxy): harden linux proxy bridge helpers`
- openai/codex#19999 / `e1ba87ccb28e` / 19:51:44Z / `fix(network-proxy): recheck network proxy connect targets`

**Axis 1 — PR-number direction.** Strictly DESCENDING: 20002 → 20001 → 19999 (Δ = −1, −2). Author merges PRs in reverse-PR-number order, suggesting author worked backward through a pre-existing patch chain — the higher-numbered PRs were opened first but merged in reverse-creation order, OR the author held a stash of pre-existing PRs and merged them lowest-impact-first / highest-PR-number-first to maintain branch ordering.

**Axis 2 — Inter-member temporal cadence.** UNIFORM: 1h01m06s + 58m54s. Cadence is **fixed at ~60 minutes per merge** with sub-3-minute deviation (3.4% of mean spacing). Total cluster span = 2h00m00s. The exact uniformity is structurally informative — uniform inter-merge spacing at 60m is consistent with a release-engineering-imposed throttle (e.g., a 1-hour minimum between scoped fixes on the same critical subsystem, perhaps to bound rollback exposure window) rather than CI-driven natural cadence.

**Axis 3 — Semantic title-prefix class.** ALL `fix(network-proxy):`. Scoped fix() patches on a sensitive infrastructure subsystem (network proxy bypass / proxy bridge helpers / connect target validation). Verbs (`tighten`, `harden`, `recheck`) suggest defensive patches against an emerging threat model — backward-walking through a code surface to close known gaps rather than forward-building new functionality.

**Sprint-construction mode interpretation.** Author had a stash of n=3 pre-existing fix() PRs against a sensitive subsystem, merged them at exact 60-minute intervals (consistent with release-engineering throttle), in reverse-PR-number order (consistent with merging the most-recently-opened first or with merging in reverse priority/dependency order). The descending PR-number direction + uniform cadence + scoped-fix() class together indicate a **defensive patch-chain operating mode**, distinct from the offensive feature-ladder mode of Class A.

## Why the three axes correlate within each class

The class-defining mode (forward-planned feature ladder vs. backward-walking patch chain) generates all three axes as natural artifacts:

- **Forward feature ladder** → PRs created in forward time → ascending PR numbers; CI-bound timing → irregular cadence; new functionality → `feat:` prefix.
- **Backward patch chain** → pre-existing PRs merged in reverse → descending PR numbers; release-eng throttle → uniform cadence; defensive patches → `fix(scope):` prefix.

Mode is the latent variable; the three axes are observable proxies. Observing any one axis is therefore sufficient to predict the other two with high confidence within an internal-author sub-cluster.

## Cross-tick prior occurrence check (W17 ADDENDUM series)

- **Class A precedents.** kitlangton httpapi sprint (anomalyco/opencode#24716 → #24717 → #24799 → #24809 → #24811 → #24825 → #24827, ascending PR-numbers, mixed `fix(httpapi):`/`refactor(httpapi):` prefixes): partial Class A match — ascending direction + scoped-fix prefix matches Class B prefix axis but ascending direction matches Class A direction axis. **Hybrid case**, falsifies the strict version of the synthesis (which would require all three axes to agree). Refines the synthesis: the discriminating power is at the **internal-author-with-vendor-CI** level (jif-oai, viyatb-oai both have -oai suffix indicating openai-internal CI access); kitlangton lacks vendor-internal CI throttling, so the uniform-cadence axis is unavailable to him and the descending-direction axis is replaced by ascending direction.
- **Class B precedents.** No prior W17 cluster with strict descending-PR-number + uniform 60m cadence + `fix(scope):` prefix observed before viyatb-oai network-proxy. Pred III-NEW (Add.131) is the founding instance.
- **Mixed-class anti-precedents.** dylan-hurd-oai #19959 `Fix log db batch flush flake` (Add.130 sole merge, n=1 cluster — too short to test class membership); fcoury-oai #19986+#19901 doublet (Add.128, n=2, non-uniform cadence at 1m14s sub-doublet, neither Class A nor Class B — possibly a third class TBD).

## Predictive implications

If the viyatb-oai network-proxy cluster extends with a 4th member at the next 60m mark (~20:51Z by Add.132 capture), the uniform-cadence axis is confirmed at n=4 and the synthesis elevates to a **predictive 60m-throttle estimator** for vendor-internal scoped-fix sub-clusters. If the cluster terminates at n=3, the synthesis remains valid as a descriptive 2-class taxonomy but loses the predictive 60m-cadence forward-pred (downgraded to retrospective characterization).

If a 3rd Class B exemplar appears in W17 from a different vendor-internal author (e.g., a -berri or -block suffix author with similar descending-direction + uniform-cadence + scoped-fix shape), the class generalizes from author-specific to internal-author-population-wide and the release-engineering-throttle hypothesis (axis 2) gains independent corroboration.

n=2 evidence clusters so far (jif-oai n=4 Class A confirmed; viyatb-oai n=3 Class B confirmed). Synthesis stands at n=2 confirmed clusters across n=2 distinct vendor-internal authors on n=2 distinct subsystems within the same repo (openai/codex), within a 4h44m total observation window (15:07:16Z → 19:51:44Z).

## Linkage to prior synthesis lineage

- **Synth #285 (jif-oai numerical-suffix series anchor)**: #293 generalizes #285's single-class characterization into a 2-class taxonomy (Class A = #285, Class B = new), preserving #285's structural insight while expanding the taxonomy.
- **Synth #287 (sprint-discipline-taxonomy classes N/S/U)**: #293 is orthogonal to #287's discipline-level classification (which classified sprint-coordination-with-other-authors); #293 classifies single-author intra-cluster shape, complementing #287's inter-author dimension.
- **Synth #289 (single-author fix doublet then refactor surface axis triplet within 35-minute span)**: #293's Class B uniform-60m cadence is at the opposite end of the cadence spectrum from #289's compressed-35m cadence, suggesting that **single-author cadence is multi-modal, not uniform** — at least three distinct cadence modes observed in W17 (sub-5m doublet, 35m triplet, 60m sub-cluster).
- **Synth #292 (per-repo silence-break-follow-through divergence)**: #293 operates within active-repo windows; #292 operates across silent-vs-active windows. They address different phases of the repo-level temporal cycle but use compatible per-axis taxonomies.
