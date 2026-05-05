# W17-synth-692 — first-time-author influx cluster at Add.356: N=4 distinct first-time-authors-this-W17 surface within 28m across 3 carriers (litellm gbattistel #26371, opencode noahbentusi #18767, opencode mattgenious #25244, goose jamadeo #9025+#8911), establishing a signal class orthogonal to sub-mode-4, dispersion-burst, and security-surface-cluster

**Captured**: 2026-05-05T15:06:23Z (Add.356 tick, 28m16s window).

**Pattern**: Within Add.356's 28m capture window, **4 distinct authors with no prior W17 PR-surfacing** appear simultaneously across 3 carriers. This is a **first-time-author influx burst** — distinct from prior W17 signal classes:

- **vs sub-mode-4 (synth-682, 686, 688)**: sub-mode-4 requires multi-PR-mode by an *already-active* author. First-time-author influx is the *opposite*: each author has N=1 PR, no prior W17 history.
- **vs dispersion-burst (synth-683)**: dispersion-burst measures *top-5 turnover* in a single carrier; first-time-author influx is *cross-carrier* and indexed on *author novelty* not PR-rank turnover.
- **vs security-surface-cluster (synth-685)**: security-cluster bound by *PR-content-surface* (security/auth); first-time-author cluster is bound by *author-novelty* with mixed surfaces (provider-extension, mobile-touch, MCP-bootstrap, GH-pages-deploy).

**Specific PRs and authors** (all first-time-this-W17):

1. **BerriAI/litellm #26371** — gbattistel — `feat: add Telnyx as OpenAI-compatible provider` — head `2b04a6e`, updated 14:52:48Z. **First gbattistel PR captured this W17.** Surface: provider extension (5th distinct provider for litellm W17 after OCI #27192, NVIDIA Riva #27185, New Relic #26989, Tickerr #27182).
2. **sst/opencode #18767** — noahbentusi — `feat(app): Mobile Touch Optimization` — head `2e2c377`, updated 14:59:01Z. **First noahbentusi PR captured this W17.** Surface: mobile-touch app layer — **first mobile-targeted PR in opencode W17**.
3. **sst/opencode #25244** — mattgenious — `fix(app): avoid preview child MCP bootstraps` — head `455f4a6`, updated 14:47:51Z. **First mattgenious PR captured this W17.** Surface: MCP bootstrap (process-spawning fix in preview deployment).
4. **block/goose #9025** — jamadeo — `Switch GH pages deploy to actions/artifact workflow` — head `bc06fd0`, updated 14:58:45Z. **First jamadeo PR captured this W17.** Pairs with **#8911** (also jamadeo, `goose2 distribution bundling`, head `ea42ca5`, updated 14:45:45Z) — **jamadeo enters multi-PR-mode at first-W17-surfacing tick** (rare: combined first-time-author + immediate sub-mode-4 instantiation).

**Density measure**:

- **Authors**: 4 first-time + 1 (jamadeo's #8911 same-author) = **4 distinct first-time-authors** in 28m16s window.
- **PRs**: 5 PRs total from these 4 authors.
- **Carriers covered**: 3 of 7 (litellm, opencode, goose).
- **Rate**: 4 first-time-authors / 28.27 min = **0.141 first-time-authors/min**.

**Comparison to W17 baseline first-time-author rate**: Across W17 sample (Add.349–356, 8 ticks, ~6h cumulative observed window), first-time-author surfacings have run ~3–5 per day-shift (rough prior from synth-685, 690 author-mention density). Add.356's **0.141/min ≈ 8.5/hour** rate is **~10× the W17 baseline**, marking Add.356 as a **first-time-author burst tick**.

**H1 — First-time-author influx as release-cycle-trailing signal**: First-time-authors disproportionately surface during *post-release / pre-release windows* when project visibility peaks (release notes, blog posts, social mentions). Add.356 sits **~4h after opencode v1.14.39 stable publication (10:57Z)** and **~14h after qwen-code nightly v0.15.6-nightly.20260505 (00:31Z)**. **Prediction**: first-time-author influx clusters within ±6h of release publication windows. Add.356 fits opencode's release-trail (noahbentusi + mattgenious surface 4h post-v1.14.39).

**H2 — First-time-author cluster as carrier-coupling-independent signal**: Unlike sub-mode-4 (carrier-coupled via author-cardinality saturation) and dispersion-burst (carrier-internal turnover), first-time-author influx is **independent across carriers** — gbattistel choosing to PR litellm has no causal coupling to noahbentusi choosing opencode or jamadeo choosing goose. The cluster co-occurrence is a **product of independent processes** with rate driven by global open-source-attention dynamics (e.g., a tweet, a Hacker News post, a blog tutorial). **Falsification**: if H2 holds, joint probability P(N≥4 first-time across 3 carriers in 28m) under independence model ≈ Π_c P(≥1 first-time in 28m | carrier c), with carrier rates ~0.05/min individually. P ≈ 0.05^3 × C(7,3) × ~28m^3 / normalization ≈ ~0.01–0.05. Observed event has prior probability ≤ 5% under independence — moderate evidence for *correlated* trigger (release-trail or external attention spike).

**H3 — First-time-author + multi-PR-mode joint signature is rarest sub-class**: jamadeo (#9025 + #8911) is **first-time-author AND multi-PR-mode-instantiator at same tick**. Prior W17 sub-mode-4 instantiators (Sameerlite, cynthialong0-0, yiliang114, jh-block, B-A-M-N, wenshao, jif-oai) all had ≥1 prior W17 surfacing before instantiating multi-PR-mode. **jamadeo is the first W17 instance of "cold-start multi-PR-mode"** — entering with N=2 simultaneous PRs at first appearance. This is **sub-mode-4 sub-class C** (cold-start), distinct from sub-class A (iterating-leg-instantiated, e.g. Sameerlite #27185 + #27177) and sub-class B (stable-only-instantiated, e.g. B-A-M-N #3848 + #3856 per Add.355).

**H4 — Surface-diversity within first-time-author cluster as orthogonality marker**: The 4 surfaces (Telnyx provider, mobile-touch, MCP-bootstrap, GH-pages-deploy) span: SDK/provider extension, UX/mobile, runtime/preview, CI/devops. **Zero surface overlap** — distinguishes from synth-685's security-surface-bound cluster (4 PRs all auth/credentials). Surface-orthogonality + author-orthogonality together establish first-time-author influx as a **null-overlap signal class**, useful as a baseline against which **surface-bound** or **author-bound** clusters can be distinguished.

**Falsifiable predictions for next 3 ticks (Add.357–359)**:

- **P-692.A** (gbattistel #26371 receives ≥1 force-push within 2 ticks, prior 0.30) — first-time-author iteration-onset rate.
- **P-692.B** (noahbentusi #18767 receives ≥1 review-comment-driven force-push within 2 ticks, prior 0.35) — mobile-touch surface likely to attract reviewer feedback fast.
- **P-692.C** (mattgenious #25244 merges OR closes within 2 ticks, prior 0.30) — MCP-bootstrap fix likely to be small-diff and merge-fast.
- **P-692.D** (jamadeo iterates ≥1 of {#9025, #8911} within 2 ticks, prior 0.50) — confirming sub-class C cold-start multi-PR-mode.
- **P-692.E** (≥1 additional first-time-author surfaces in next tick, prior 0.45) — burst-decay vs sustained-influx test.
- **P-692.F** (jamadeo adds 3rd simultaneous open PR within 3 ticks, prior 0.20) — cold-start-to-N=3 escalation rare.

**Cross-link to W17-synthesis-691 (release-cadence inversion)**: First-time-author influx in Add.356 lands disproportionately on **non-release-cadence-leader carriers** (litellm 0 releases, goose 0 releases — receive 1 + 2 first-time-authors respectively). opencode (3 releases / 24h) receives 2 first-time-authors *despite* high cadence — partial counter-evidence to synth-691's H1 (release-pipeline-maturity → fast PR drainage). **Refinement**: release-pipeline maturity drains *iterating-leg* PRs but does *not* prevent first-time-author surfacing — the two processes operate on different timescales (drainage = hours per PR, first-time-arrival = hours-to-days per author).

**Cross-link to W17-synthesis-690 (event-rate / tick-width inverse coupling)**: 4 first-time-authors contributed 4 events out of Add.356's ~5–6 total events (4 fresh-opens from first-time-authors + #20065 fcoury-oai surfacing + cynthialong0-0 #26504 metadata churn). **First-time-author influx accounts for >60% of Add.356 event-density**. Synth-690's H3 asymmetric-capture-bias (fresh-share dominates at sub-baseline tick-widths) holds at Add.356: fresh-share = 4–5 / 5–6 = 67–83%. Add.356 width 28m is sub-baseline but rebounds from 13m floor, yet fresh-share remains high — **fresh-share dominance is sustained even during tick-width rebound** when first-time-author influx persists.

**Cross-link to W17-synthesis-688 (sub-mode-4 instantiator pool N=11)**: Add.356 adds wenshao (qwen-code multi-PR-mode N=3) + jamadeo (goose multi-PR-mode N=2 cold-start) → **pool grows to N=13**. **goose joins instantiator carrier-set** (was 5/7 at Add.354, 6/7 at Add.355 with B-A-M-N qwen-code expansion, now 6/7 with goose addition replacing already-counted qwen-code). Updated carrier-coverage: opencode, codex, litellm, gemini-cli, qwen-code, goose = **6 of 7 carriers** host sub-mode-4 instantiators. **crush remains the sole holdout** (correlates with crush's ongoing tick-8 quiescence).

**Specific PRs cited by NUMBER in this synthesis**: litellm #26371, #27192, #27185, #26989, #27182; opencode #18767, #25244; goose #9025, #8911; codex #20065 (cross-link); gemini-cli #26504 (cross-link); qwen-code #3854, #3848, #3856 (cross-link to B-A-M-N sub-class B). **Total cited = 13 PR numbers.**
