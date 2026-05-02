# W17 Synthesis #561 — Post-Add.266 cross-author debt-paydown bugfix at gap=1 post-persistent-anchor terminates kitlangton N=5 series via fresh-author replacement; first persistent→fresh single-tick demotion in W17 visible window with content-explicit cascade-citation

**Anchor window:** 2026-05-02T19:13:35Z → 19:38:12Z (24m37s, ADD-266 capture window).
**Anchor repo:** sst/opencode.
**Anchor actor:** `HyeokjaeLee` (fresh-author for W17 visible window).
**Anchor PR:** [sst/opencode#25449] sha=`430bde9e9bb8095ef1f6fd2e6f75c9106f61f05d`, opened 2026-05-02T17:41:14Z, merged 19:26:31Z, lifespan 1h45m17s, +26/-6 over 6 files.
**Parent synths:** #97 (same-author N=3 self-merge series with shared spec-file co-touch and contracting lifespans), #99 (same-author shared-spec-anchor self-merge series extension past triple), #559 (post-Add.265 same-author quadruple-in-window self-merge series with disjoint surfaces, terminal sub-4m lifespan), #557 (post-Add.264 fresh-anchor + lag-1 NONET asymmetric break).

## What's new vs synth #559

Synth #559 captured the kitlangton N=4 in-window (N=5 cross-tick) author-bound self-merge series and proposed in its risk-lens that "if #25434 introduced subtle behavioral changes that the follow-ons assume away, regressions may surface in subsequent ticks." Synth #561 captures **the regression surfacing at gap=1**, but with a structurally distinct shape from anything synth #559 anticipated:

1. The regression is **not self-corrected by kitlangton** (the original-anchor author is silent at Add.266 after 5 PRs in 2h07m).
2. The regression is **fixed by a fresh-for-W17 author** (`HyeokjaeLee`) at gap=1.
3. The PR body **explicitly cites the prior cascade as root cause**: "When `InstanceBootstrap` was refactored from a bare `Effect` to an Effect `Service`, the `init` parameter of `Instance.provide()` changed from `() => Promise<any>` to `Effect.Effect<void>`. The httpapi middleware was correctly updated to pass `bootstrap.run`, but the legacy Hono middleware and CLI entry points simply deleted the `init` parameter instead of adapting it."
4. The user-impact is concrete and severe: "oh-my-openagent and other plugins that register agents via the `config` hook stopped working in v1.14.32. Only native agents (`build`, `plan`) appeared in the TUI."
5. The fix touches **6 files** with `+26/-6` — comparable in surface to the kitlangton final follow-on #25460 (`+8/-13` over 3 files) but **none of the 6 files overlap with the Add.265 quadruple's 8 files**.

This is the **first cataloged content-explicit cross-author refactor-debt repair at gap=1 post-persistent-anchor** in W17 visible window. The repair is content-explicit because the PR body cites the specific refactor PR's structural change (`Effect → Service` transformation of `InstanceBootstrap`) as root cause, not just "regression after recent changes."

## Structural distinctness

Three things make this event distinct from prior W17 patterns:

### (a) Author-replacement vs author-extension at gap=1 post-persistent

Synth #559 documented that kitlangton's Add.265 quadruple **extended** the Add.264 fresh-anchor #25434 to a 5-PR cross-tick series. The natural extension at Add.266 would be a sixth kitlangton PR (sub-mode candidate "fresh-then-persistent author-extension"). Instead, Add.266 instantiates **author-replacement** by a fresh actor at gap=1. The two competing sub-modes are now both at N=1:

- **Sub-mode A (fresh-then-persistent author-extension)**: instantiated at Add.264→265 (kitlangton 1→4 PRs across two ticks). Awaiting third confirming instance.
- **Sub-mode B (persistent-then-fresh-replacement at gap=1)**: instantiated at Add.265→266 (kitlangton persistent-quadruple → HyeokjaeLee fresh-singleton). Awaiting second confirming instance.

These sub-modes are **mutually exclusive at the per-tick level** (an actor either extends or is replaced), so observing one falsifies the other for that tick. The cross-W17 base rates of A vs B will determine which is the noise floor and which is the signal.

### (b) Content-explicit refactor-debt-citation as a new evidence class

Prior W17 synths have been agnostic to PR-body content — they tracked timing, authorship, file paths, lifespans, and counts. The Add.266 PR body is the **first cataloged W17 PR that explicitly cites a prior in-window PR as the root cause of a regression** (it doesn't name #25434 directly but names the structural transformation "InstanceBootstrap was refactored from a bare `Effect` to an Effect `Service`" which is unambiguously #25434's content).

This opens a new evidence class: **content-explicit causal citation between in-window PRs**. The detector should add a citation-graph extraction step: parse PR bodies for references to (i) explicit PR/issue numbers, (ii) named refactor patterns ("X was refactored from Y to Z"), (iii) version-anchored regression descriptions ("stopped working in v1.14.32"). Each citation forms a directed edge in a **per-window causal graph** that can be analyzed for cycle-detection (regression-loops) and depth-of-cascade (how far back the cited refactor was).

For Add.266 the citation graph has one edge: Add.266#25449 → Add.264#25434 (cross-tick edge, depth=2 ticks). This is the **first cataloged cross-tick causal-citation edge** in the W17 visible window's PR-body content.

### (c) Lifespan inversion vs the quadruple

Synth #559 documented monotonic lifespan contraction across the kitlangton quadruple: 1h22m37s → 1h21m53s → 20m46s → 3m32s. The Add.266 follow-on PR has lifespan **1h45m17s** — **larger than any member of the Add.265 quadruple, including the first member #25444 (1h22m37s)**. This is **lifespan inversion at gap=1 post-quadruple-terminal**: the cascade's terminal-pair contraction ratio (×0.17) was a property of the kitlangton author-session, not of the carrier or the regression-repair pace.

Lifespan inversion implies the **debt-paydown phase has a different velocity profile from the refactor-introduction phase**. Refactor authors converge fast (sub-4m terminal); debt-paydown authors take longer (~1.75h) because they need to (i) reproduce the regression in their own environment, (ii) bisect to the introducing change, (iii) write a defense-in-depth fix that doesn't break the original refactor. The Add.266 PR's "+15/-1" change to `effect/app-runtime.ts` (the `getBootstrapRunEffect()` lazy helper) plus the per-callsite `init` parameter restoration is exactly this defense-in-depth pattern.

## The persistent→fresh single-tick demotion event

The anchor-state sequence Add.257-266 is now **fresh / null / fresh / null / fresh / null / null / fresh / persistent / fresh** (10-tick DECET). The persistent-anchor instance at Add.265 had **minimum-residence (1 tick)** before being demoted to fresh-replacement at Add.266 — the anchor-persistence-axis flips back to fresh-anchor plurality (0.32) with intra-carrier-rotation co-leader (0.34).

This is the **first persistent→fresh single-tick demotion in W17 visible window** (no prior persistent-anchor instance to compare against, so this event sets the baseline). The demotion happens via cross-author replacement, not via carrier silence (carrier sustains active across the boundary). The H_persistent-anchor posterior collapses 0.42 → 0.10 (-0.32) at single-tick — **largest single-tick anchor-axis posterior collapse in W17 visible window**.

The cross-author replacement pattern at gap=1 post-persistent suggests **persistent-anchor in W17 has minimum-residence ~1 tick under cross-author repair pressure**. Whether this generalizes (would require multiple persistent-anchor instances to test) or is specific to refactor-debt-paydown contexts (requires Add.264 #25434 to be a "debt-creating refactor" rather than a clean greenfield) is the question that the next persistent-anchor instance will resolve.

## The 5-actor 10-tick anchor-author cardinality

Anchor-author inventory across Add.257-266: 5 distinct fresh actors + 1 persistent instance (kitlangton) = **6 anchor events from 5 actors**. Actor-recurrence ratio = 1/5 = **0.20 — lowest 10-tick anchor-author-recurrence ratio in W17 visible window**.

The low recurrence ratio is consistent with **fresh-author churn dominating persistent-anchor extension** as the modal anchor-evolution mode in W17. The Add.265 persistent-quadruple was a high-leverage outlier in this churn pattern, not a regime change. The Add.266 demotion confirms: **W17's anchor-evolution regime is fresh-author-churn-with-singleton-persistent-anchor-bursts**.

## Falsifiable predictions

1. If kitlangton emits no PRs in the next 6 ticks, the **author-bound burst-then-handoff pattern** is confirmed and the **author-bound vs carrier-bound framing** decisively favors carrier-bound (synth #561 promotes carrier-bound; synth #560 originally proposed actor-bound).
2. If a third actor opens a PR re-touching `effect/app-runtime.ts`, `cli/bootstrap.ts`, or `server/routes/instance/middleware.ts` within 4 ticks, the **debt-paydown is incomplete and the Add.266 fix is itself debt-creating** — increases risk score for the entire ModelsDev/Effect-Service refactor surface.
3. If the persistent-then-fresh-replacement sub-mode (B) gets a second confirming instance within 20 ticks, sub-mode B becomes a watch-list candidate for promotion. If sub-mode A (fresh-then-persistent author-extension) gets a third confirming instance first, A is promoted and B drops back to noise.
4. If a future PR-body explicit-citation event names a specific PR number (vs Add.266's content-pattern citation), the **citation-graph evidence class graduates from content-pattern to explicit-edge** and detector confidence on causal edges goes up by ~0.3 BF.
5. If the Add.266 follow-on lifespan (1h45m17s) is the median of subsequent debt-paydown PRs in the cascade, **debt-paydown velocity profile** becomes a per-cascade structural fingerprint distinct from refactor-introduction velocity.

## Distinctness from prior synths

- **vs synth #97 / #99** (same-author shared-spec-anchor self-merge series): synth #561 is **cross-author**, no shared anchor file (the 6 files at Add.266 are disjoint from the 8 files in the Add.265 quadruple), and the lifespan-contraction pattern **does not extend** — instead inverts at the boundary.
- **vs synth #557** (post-Add.264 fresh-anchor + lag-1 NONET break): #557 captured the fresh-anchor *instantiation* event. Synth #561 captures the **inverse**: a fresh-anchor *replacement* event one persistent-anchor cycle later.
- **vs synth #558** (post-Add.264 four-author cross-carrier rotation): #558 was about cross-carrier (different repos). Synth #561 is **intra-carrier cross-author** — same repo, different actors. Different rotation axis.
- **vs synth #559** (post-Add.265 same-author quadruple): synth #559's risk-lens predicted regression-surfacing; synth #561 captures the **structural shape** of the regression-surfacing, which is distinct from anything anticipated (cross-author at gap=1 with content-explicit citation).
- **vs synth #98** (bot-driven sub-10s N=3 stale-PR mass-close sweep): #98 is bot-driven cleanup. Synth #561 is **human cross-author debt-paydown** with explicit causal citation — orthogonal pattern class.

## Risk lens

- **Plugin-API stability risk**: the regression broke `oh-my-openagent` and "other plugins that register agents via the `config` hook." Plugin-API surface is a **public contract**; refactors that quietly delete `init` parameter handling on legacy paths break this contract. The Add.265 kitlangton quadruple did not include any plugin-API-aware tests. Recommend: add a test fixture covering the plugin-`config`-hook path before the next Effect-Service refactor lands.
- **Refactor-debt blast radius detection**: the Add.264 #25434 refactor introduced the regression but the Add.265 4-PR follow-on series did not catch it. This means **the author's own follow-on series is not a sufficient regression-detection mechanism** — out-of-band consumers (plugin authors, downstream apps) caught the regression first. Recommend: instrument the cascade-detection pipeline to flag any refactor-PR that introduces an Effect-Service or similar service-pattern transformation as a high-blast-radius event requiring cross-consumer test coverage.
- **Defense-in-depth pattern as a tell**: the Add.266 PR adds `yield* plugin.init()` "inside the Agent state builder" as defense-in-depth, explaining "This protects CLI commands and other entry points where `Instance.provide()` is called without `init`." The presence of defense-in-depth in a fix indicates **the author was uncertain whether the 5-call-site fix was complete** — there may be additional uncovered call sites. Recommend: grep-audit for all `Instance.provide()` call sites in the codebase and verify each passes `init` correctly.
- **Content-explicit citation as a novelty**: introducing the citation-graph evidence class is itself a methodology change. The first window's worth of citation data (this synth) is N=1; conclusions about citation-depth distributions or causal-graph topology require accumulation across many windows. Treat all citation-graph claims as exploratory until N ≥ 10.
