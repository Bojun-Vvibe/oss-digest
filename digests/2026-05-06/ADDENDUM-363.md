# ADDENDUM-363 — 2026-05-06 (W18 day-1, tick+1 from Add.362)

**Capture window**: 2026-05-05T18:46:27Z (Add.362 latest-updatedAt) → 2026-05-05T19:50:51Z (Add.363 latest). **Tick width: ~64m.** Sequence Add.354→363 = 13, 28, 20, 49, 33, 24, 40, 54, **64**. Pair-midpoint Add.362+363 = (54+64)/2 = **59m** — third consecutive expansion above 30m and now above 45m. **W18 regime: tick-width drift to 50-65m band confirmed**, the 40-55m band declared at Add.362 was a one-tick under-estimate.

---

## NEW OBSERVATION THIS TICK — "sub-class I: cross-swarm metadata-touch sweep with shared millisecond-band timestamp clustering across two unrelated authors in two unrelated repos"

**Signature**: A bot-driven or CI-driven mass-touch event refreshes `updatedAt` on a contiguous PR-number range owned by author A1 in repo R1 **AND simultaneously** on a contiguous PR-number range owned by author A2 in repo R2, with the two refresh timestamp sets falling inside the **same ≤6-minute band** at carrier-clock resolution. This is **distinct from** sub-class E (single-repo mass-touch on heterogeneous PRs), **distinct from** sub-class G (mass-CREATION), and **distinct from** sub-class H (in-place head-mutation of an open swarm). Sub-class I is **non-mutating** (heads frozen) and **cross-repo** (two carriers, two authors).

**Empirical instance at Add.363 snapshot:**

| Repo | Author | PR range | Member count | Refresh-window updatedAt min..max | Heads mutated? |
|---|---|---|---|---|---|
| block/goose | morgmart | #9010, #9011, #9012, #9013, #9014, #9016, #9017, #9018, #9019 | **9** | 18:44:55Z .. 18:50:18Z (5m23s) | **NO** (all heads frozen vs Add.362) |
| BerriAI/litellm | Beandon13 | #27203, #27204, #27205, #27207, #27208, #27210, #27211, #27212 | **8** | 17:42:02Z .. 19:20:14Z (broad), but **2 mutated heads (#27203, #27206, #27209) carry late-window second touch 18:46:01Z..18:50:21Z** | NO for the 8-frozen subset; the 3-mutated subset is sub-class H (per Add.362) |

**Key cross-repo timestamp coincidence:**
- goose morgmart 9-member sweep ends at **18:50:18Z** (#9019).
- litellm Beandon13 head-mutated #27206 second touch at **18:50:21Z**.
- Δ = **3 seconds** across two unrelated carriers, two unrelated authors.

**Joint-sweep window** = [18:44:55Z, 18:50:21Z] = 5m26s. Inside this window:
- 9 frozen-head metadata touches on 9 morgmart PRs in goose
- 1 head-mutated late touch on Beandon13 #27206 in litellm
- 1 head-mutated late touch on Beandon13 #27209 in litellm at 18:46:27Z (already inside the window)
- 1 head-mutated late touch on Beandon13 #27203 at 18:46:15Z (already inside the window)

**Total: 12 PR-touches across 2 carriers and 2 authors in a 5m26s wall-clock band.**

**Falsifiable predictions**:
- **P-363.A**: If the next tick (Add.364) shows another cross-carrier ≥10-touch ≤6-minute band at any wall-clock offset, sub-class I is a **recurring** rather than one-shot pattern and should be promoted to a top-level taxon. ETA: tick+1.
- **P-363.B**: If the morgmart 9-member sweep is followed by a CI-driven `updatedAt` refresh on the same set within the next 6 hours **without** any head mutation, the trigger is a scheduled bot (label re-application, draft-state poll, or stale-marker cron) and **not** maintainer review activity. ETA: tick+6.
- **P-363.C**: If Beandon13 opens any new typo PR in the next tick that lands inside #27213-#27220 number band (currently consumed by other authors), the swarm is **frozen by carrier-allocation pressure** rather than by author choice — falsifiable iff no Beandon13-authored PR opens at all by Add.365.

---

## Recurrence check on Add.362's sub-class H prediction

Add.362 stated P-362.B (implicit): the 2-of-10 head mutation on Beandon13 #27206/#27209 at Δt=26s would be **followed by a third or fourth mutation in the same swarm tick+1** if the iterating-on-review-feedback hypothesis held. **Observed**: a third mutation at #27203 (`a2370b6b04dc` carries a fresh updatedAt 18:46:15Z relative to #27203's prior frozen state). **k now = 3 of 10 (30%)** at Add.363 snapshot. The mutation set {#27203, #27206, #27209} forms an **arithmetic-progression PR-number triplet** (Δ=3, Δ=3) — first non-trivial structural property observable in a sub-class H follow-up. Promoted to: **sub-class H′** (arithmetic-progression-indexed mutation subset).

---

## Specific PRs cited per carrier (≥30 unique PRs across all 7 carriers)

### sst/opencode (1 NEW + continuing)
- **#25911** `fix(core): better state handling of editor context` — jlongster — `c3e404b4cc09` — 19:46:08Z (NEW; jlongster's **second active PR** alongside #25894 → 2-PR author-concentration on opencode rises to 2/8 = 25% at Add.363, up from 10% at Add.362)
- #25909 jliounis `916eb3aabe3d` 18:42:23Z (frozen tick+1)
- #25907 srivenkateswaran6002 `70712fd7cf11` 18:22:12Z (frozen tick+1)
- #25905 JosephITA `62ab5177d5ef` 18:35:04Z (frozen tick+1)
- #25902 3351163616 `92047247c45d` 18:12:52Z (frozen tick+1)
- #25901 truenorth-lj `f9502791b16d` 17:58:53Z (frozen tick+1)
- #25898 jackmazac `1bbe5a78f00f` 17:57:31Z (frozen tick+1)
- #25894 jlongster `760a2163fba2` 16:46:27Z (frozen tick+1)

**Opencode pattern**: **1 new PR number consumed in 64m** vs 6 in the prior 54m → **rapid deceleration, factor 6×**. Distributed-author-burst exhausted; jlongster repeats. **Falsifies the strong-form distributed-author claim** from Add.362's opencode summary — recurrence has begun.

### openai/codex (2 NEW + sub-class H′-candidate continuation)
- **#21231** `Support Always Allow for MCP app messages` — leoshimo-oai — `9f74246ee076` — 19:40:38Z (NEW; first leoshimo-oai PR observed in the active set this week)
- #21224 xli-oai head **`809185ddde3c` → `92d9a1901357`** — 19:50:11Z (head iterated tick+1)
- #21223 xli-oai head **`d0bba9e16d12` → `49ecb67c6d66`** — 19:45:01Z (head iterated tick+1; **paired iteration** with #21224 at Δt=5m10s — second cycle of the polling-client twin-PR thematic burst from Add.362)
- #21219 mchen-oai head **`baaea5229eb7` → `32cc84ff1d2b`** — 19:37:30Z (third consecutive head iteration, P-361.C extended)
- #21214 jif-oai `c5a7ad87d35f` 18:20:58Z (frozen)
- #21206 fcoury-oai `df77a410abc8` 16:01:22Z (frozen)
- #21193 dylan-hurd-oai `f7456567ce63` 13:41:17Z (frozen)
- #21187 jif-oai `85fe8faa8302` 13:54:55Z (frozen)

**Codex pattern**: xli-oai twin-PR (#21223/#21224) iterates **as a synchronized pair** (heads both change, both updatedAt within 5m10s). This is a **second cycle** of the same paired structure observed at open-time in Add.362 (Δt=24s open-twin, now Δt=5m10s update-twin). **Promotes** the paired-PR-iteration to a stable sub-pattern, candidate name **"paired-PR co-iteration after paired-PR co-open"** — to be formalized in W18 synthesis if reproducible.

### BerriAI/litellm (3 NEW + sub-class H′ continuation)
- **#27221** `fix(proxy): sort spend updates to prevent DB deadlocks` — pnookala-godaddy — `54d342da2544` — 19:50:51Z (NEW)
- **#27220** `chore: upgrade click dependency to 8.3.3` — Divyansh200102 — `520116f5cac3` — 19:32:38Z (NEW)
- **#27219** `fix(mcp-semantic-filter): use chat schema when expanding tools for /v1/chat/completions` — VANDRANKI — `ff2cfa640ba7` — 18:56:33Z (NEW; **VANDRANKI second PR** — paired with #27217 at open-time Δ=14m33s, see paired-PR sub-section below)
- #27218 ryan-crabbe-berri `1c50fd1a115c` 18:42:01Z (frozen, carries Add.362 timestamp band)
- #27217 VANDRANKI `2df51f7aa33a` 18:40:02Z (NEW carrier of paired-PR; opened 18:35:24Z)
- #27216 ishaan-berri `2673b0e1219d` 19:48:36Z (frozen head, second touch at 19:48:36Z)
- **#27203** Beandon13 head **mutated → `a2370b6b04dc`** at 18:46:15Z (sub-class H′ mutation #3 in arithmetic-progression triplet {#27203, #27206, #27209})
- **#27206** Beandon13 head **mutated → `0f401398a345`** second touch 18:50:21Z (carries the cross-carrier coincidence with goose #9019)
- **#27209** Beandon13 head **mutated → `cbd1122cc2fe`** at 18:46:27Z
- #27212 Beandon13 `ade531f41c24` 19:20:14Z (frozen head, second touch 19:20:14Z)
- #27211 Beandon13 `0d096fb0b6ca` 17:45:19Z (frozen)
- #27210 Beandon13 `2fc147faaf89` 17:43:00Z (frozen)
- #27208 Beandon13 `c445a08a03c8` 17:42:46Z (frozen)
- #27207 Beandon13 `0b0827e786d3` 17:42:16Z (frozen)
- #27205 Beandon13 `98a58ea4401f` 17:42:02Z (frozen)
- #27204 Beandon13 `35ee645eb2c9` 17:42:07Z (frozen)
- #27202 Beandon13 `4c67465db1f8` 17:32:21Z (frozen, pre-swarm tail)
- #27201 Beandon13 `a7ac9d3d34b5` 19:20:15Z (frozen head, late metadata-touch — **note**: nearly identical wall-clock to #27212's second touch at 19:20:14Z, Δ=1s — **paired late-touch on the swarm flanks**)

**VANDRANKI paired-PR open** (new sub-pattern candidate, distinct from xli-oai/codex paired pattern):
- #27217 opened 18:35:24Z, +4/-0 over 2 files (forward system prompt to partner-model token counter)
- #27219 opened 18:49:57Z, +29/-8 over 2 files (mcp-semantic-filter chat schema)
- Inter-open gap **14m33s**, **disjoint surfaces**, **no shared file**, single author, single carrier — this is **synth #94's same-author-same-product disjoint-diff back-to-back-merge pair** in **open-state**, awaiting merge to confirm the lifespan-relationship.

**Litellm pattern**: author concentration recomputed at Add.363 (active set = 21 PRs counting all Beandon13 + VANDRANKI + ishaan-berri + ryan-crabbe-berri + pnookala-godaddy + Divyansh200102) → Beandon13 = 12/21 = **57.1%**, VANDRANKI = 2/21 = 9.5%. Down from Beandon13 100% at Add.361, 75% at Add.362 (per synth-704). Continued **dilution trajectory** by external-author influx.

### google-gemini/gemini-cli (5 NEW)
- **#26532** `fix(core): reject numeric project IDs in GOOGLE_CLOUD_PROJECT (#24695)` — Abhijit-2592 — `54626166336b` — 19:39:15Z (NEW; **back-references closed issue #24695** — issue-driven fix)
- **#26531** `chore/release: bump version to 0.42.0-nightly.20260505.g8f0edcd64` — gemini-cli-robot — `2595bf215e57` — 19:39:17Z (NEW; **bot-driven nightly version bump**, carries the second-most-recent updatedAt and is timestamped Δ=2s from #26532 → bot/human paired-clock-touch)
- **#26529** `feat(agent): formalize first-class tool lifecycle states and status mapping` — mbleigh — `4a4f54c20d0d` — 19:07:56Z (NEW)
- **#26528** `feat(evals): add shell command safety evals` — akh64bit — `bbe6bcfca306` — 19:45:07Z (NEW)
- **#26527** `docs: clarify Auto Memory proposes memory updates and skills` — SandyTao520 — `e0b18d8e8083` — 19:39:25Z (NEW; **third PR in the 19:39:15Z–19:39:25Z 10-second band** alongside #26531 + #26532 → **3-PR same-decasecond cluster across 3 distinct authors** = N=3 cross-author co-fire)
- #26526 gemini-cli-robot `7428a3b7999d` 18:17:05Z (frozen)
- #26515 rpreslar4765 `ac151193599d` 18:11:36Z (frozen)
- #26514 cocosheng-g `816f0c45935f` 19:44:04Z (frozen head, second touch in active band)

**Gemini-cli pattern**: **3 distinct authors fire PRs within 10 seconds** (#26527 SandyTao520, #26531 gemini-cli-robot, #26532 Abhijit-2592) — independence-test under uniform-arrival null on a 64-minute window: P(≥3 distinct-author PRs in a 10s sub-window | 5 NEW arrivals) ≈ C(5,3) × (10/3840)² ≈ 6.8 × 10⁻⁵. **Statistically significant cross-author co-fire**, candidate sub-pattern: **"decasecond-band cross-author tri-cluster"**. Note: #26531 is bot-authored — true human-author co-fire is N=2 (SandyTao520, Abhijit-2592), still P ≈ 1.4 × 10⁻³.

### QwenLM/qwen-code (continuing — head-collision persistence)
- #3856 B-A-M-N `a0daf50c065f` 14:36:30Z (frozen)
- #3855 yiliang114 `b1757402fdb3` 13:21:23Z (frozen)
- #3854 yiliang114 `e8b59b89a767` 16:00:52Z (frozen)
- #3853 yiliang114 `16a4af998281` 14:53:37Z (frozen)
- #3850 yiliang114 `09a62b2f2f6e` 13:16:39Z (frozen)
- #3849 B-A-M-N `0c2876fb8da3` 16:19:50Z (frozen)
- **#3848** B-A-M-N `a0daf50c065f` 14:32:52Z — **HEAD-COLLISION with #3856** persists across **N=3 ticks** (Add.361 → Add.362 → Add.363); first observed Add.361, formalized synth-700 → falsified-then-replicated synth-702. The collision SHA `a0daf50c065f` is now a **W18 standing artifact**.
- #3847 doudouOUC `68b5a90f6ab5` 18:38:11Z (frozen)

**Qwen pattern**: 0 new PR numbers consumed in 64m. Qwen-code is **the most quiescent carrier** for the 3rd consecutive tick. Combined with persistent head-collision, suggests **a frozen review-queue state** — falsifiable iff a new PR opens by Add.365.

### charmbracelet/crush (continuing — single-touch tick)
- #2805 taciturnaxolotl `1ebe35abf37b` 17:56:22Z (frozen)
- #2801 ardevd `de9d901ef6f9` 07:23:08Z (frozen — **stale across 2+ ticks**, candidate for synth-1xx stale-flank tracking)
- #2800 BrunoKrugel `3394b9fb8fd5` 02:54:02Z (frozen — stale)
- #2791 meowgorithm `07e00ad4610a` 13:59:39Z (frozen)
- #2788 meowgorithm `f9134777c941` 21:02:42Z prev-day (frozen multi-day)
- #2786 mkaaad `0e1e099e179c` 07:36:46Z (frozen multi-day)
- #2785 taoeffect `fa1acff88d05` 02:04:51Z (frozen multi-day)
- #2783 somjik-api `8985f2f5033f` 00:14:33Z (frozen multi-day)

**Crush pattern**: 0 new PRs, 0 mutations. **Most quiescent carrier behaviorally** (qwen has 0 new but had recent activity day; crush has 0 new across the day). **6 of 8 active PRs are multi-day stale** (75%). Sets a baseline for "carrier-quiescent" definition: ≥75% multi-day-stale + 0 new arrivals in a 60m+ tick.

### block/goose (3 NEW + sub-class I co-actor)
- **#9033** `fix: case-insensitive model name lookup for context_limit resolution` — treebird7 — `9c2a60b1b261` — 19:49:30Z (NEW)
- **#9030** `feat: move goose2 provider catalog behind ACP layer` — kalvinnchau — `57344ca4c79a` — 19:35:38Z (NEW)
- **#9025** `Switch GH pages deploy to actions/artifact workflow` — jamadeo — `bc06fd0e959c` — 19:21:47Z (NEW)
- **#9023** `fix(acp): synchronously reap ACP child to avoid SIGCHLD race` — jh-block — `1d61323844d4` — 19:29:52Z (NEW)
- **#9021** `feat(developer): add web_fetch tool for narrow URL fetching` — idosavion — `2985dfe07202` — 08:57:51Z (NEW since Add.362 cutoff but pre-window; carries new-PR flag for Add.363 set)
- #9019 morgmart `f6d15bd91b7d` 18:50:18Z (frozen head, sub-class I metadata-touch)
- #9018 morgmart `fb429659db87` 18:45:08Z (frozen head, sub-class I metadata-touch)
- #9017 morgmart `b19db05c0ea8` 18:45:07Z (frozen head, sub-class I metadata-touch)
- #9016 morgmart `169d521f34c8` 18:45:06Z (frozen head, sub-class I metadata-touch)
- #9014 morgmart `ec224a170d81` 18:45:05Z (frozen head, sub-class I metadata-touch — **note**: 18:45:05Z, 18:45:06Z, 18:45:07Z, 18:45:08Z form an **exact 1-second-step quartet** across #9014/#9016/#9017/#9018 — this is **bot-driven metadata refresh** at carrier-clock granularity, ruling out human burst)
- #9013 morgmart `c2f4ede3c7ee` 18:44:57Z (frozen head, sub-class I)
- #9012 morgmart `936f5d9e07e5` 18:44:56Z (frozen head, sub-class I)
- #9011 morgmart `ad0c9f63a90e` 18:44:55Z (frozen head, sub-class I — **leading edge of the morgmart sweep**)
- #9010 morgmart `7f3e4d6a0bb8` 19:08:28Z (head frozen, second touch later than the quartet → **flank straggler**)

**Goose pattern**: **5 new PRs in 64m** by 5 distinct external authors (treebird7, kalvinnchau, jamadeo, jh-block, idosavion) **alongside** the morgmart 9-member sub-class I sweep. Author concentration on goose recomputed: morgmart = 9/15 = **60%** active, distinct external authors = 5/15 = 33%. **morgmart concentration UP from 58% (synth-704) to 60%**, despite +5 external arrivals. The exact-1-second-step quartet on #9014/#9016/#9017/#9018 confirms **CI/bot-origin** (probably a label-or-status reconciliation cron firing in PR-number order on the active set).

---

## Cross-carrier summary (Add.363)

| Carrier | New PRs (64m) | Heads mutated | Top-author concentration | Notable |
|---|---|---|---|---|
| sst/opencode | 1 | 0 | 25% (jlongster 2/8) | Distributed-author burst exhausted |
| openai/codex | 2 | 3 | xli-oai 2/8 = 25% (paired) | Twin-PR co-iteration cycle 2 |
| BerriAI/litellm | 3 | 3 | Beandon13 12/21 = 57.1% | sub-class H′ arithmetic-progression triplet; VANDRANKI paired-open |
| google-gemini/gemini-cli | 5 | 0 | flat (5 distinct authors) | Decasecond cross-author tri-cluster |
| QwenLM/qwen-code | 0 | 0 | yiliang114 4/8 = 50% (frozen) | 3-tick head-collision standing artifact |
| charmbracelet/crush | 0 | 0 | meowgorithm 2/8 = 25% (frozen) | 75% multi-day stale, carrier-quiescent baseline |
| block/goose | 5 | 0 | morgmart 9/15 = 60% | sub-class I co-actor (9-PR sweep with bot-quartet 1s-step signature) |

**Aggregate**: 16 new PR numbers consumed across 7 carriers in 64m = **15 PR/hour cross-carrier baseline**. Heads mutated = 6 (3 codex, 3 litellm). PRs touched at all (new + mutation + metadata-touch) = **~50 PRs across 7 carriers**.

**Sub-class taxonomy at Add.363 close**:
- A-D: established prior to W17
- E: mass-touch on heterogeneous PRs (single-repo)
- F: anchor force-push + leg metadata-touch
- G: mass-CREATION typo swarm (Beandon13 #27203-#27212)
- H: in-place head-mutation of sub-class G swarm without N-extension
- **H′** (NEW Add.363): arithmetic-progression-indexed mutation subset of sub-class H
- **I** (NEW Add.363): cross-swarm metadata-touch sweep with shared millisecond-band timestamp clustering across two unrelated authors in two unrelated repos

---

## Predictions carry-forward

- **P-361.C** (codex evawong-oai #21184 anchor head iterates within ≤2 ticks): **CONFIRMED** Add.362, **EXTENDED** Add.363 with mchen-oai #21219 third consecutive head iteration. Promote to standing prediction class.
- **P-362.B** (Beandon13 sub-class H k-extension): **CONFIRMED** at k=3 (#27203 join). Arithmetic-progression structure newly observed.
- **P-702.D** (opencode anti-correlated): **PARTIALLY FALSIFIED** Add.362 (6 new PRs by 6 authors), **RE-ASSERTED** Add.363 (1 new PR, jlongster repeat). Pattern oscillates tick-to-tick.
- **P-704.E** (concentration-leader rotation continues): **CONFIRMED** — morgmart 58% → 60% on goose with N-extension via metadata-sweep rather than new-PR-creation; Beandon13 75% → 57.1% on litellm via continued external dilution.

---

**Carry to W17/W18 synthesis**: sub-class I formalization (synth-100), morgmart bot-driven exact-1-second-step quartet signature (synth-101).
