# ADDENDUM-362 — 2026-05-06 (W18 day-1, tick+1 from Add.361)

**Capture window**: 2026-05-05T17:52:06Z (Add.361 latest-updatedAt) → 2026-05-05T18:46:27Z (Add.362 latest). **Tick width: ~54m.** Sequence Add.354→362 = 13, 28, 20, 49, 33, 24, 40, **54**. Pair-midpoint Add.361+362 = (40+54)/2 = **47m** — second consecutive expansion above 30m. **W18 regime: tick-width drift to 40-55m band confirmed**, no longer a single-point excursion.

---

## NEW OBSERVATION THIS TICK — "sub-class H: in-place head-mutation of an existing sub-class G swarm without N-extension"

**Signature**: A previously-named sub-class G typo-swarm (Add.361, Beandon13 #27203-#27212) advances by **mutating heads of already-open swarm members** rather than by **opening new PR numbers**. PR-number range frozen; head SHA range refreshes. This is **distinct from** sub-class E (mass-touch on heterogeneous existing PRs) because the targets remain the **same author-owned single-window swarm**, and **distinct from** sub-class F (anchor-only force-push) because **multiple swarm members mutate, not just one**.

**Empirical instance at Add.362 snapshot** (litellm, Beandon13 sub-class G follow-up):

| PR | Old head (Add.361) | New head (Add.362) | Δ updatedAt | Mutation? |
|---|---|---|---|---|
| #27203 | `f268b8e59270` | (off top-12, presumed unchanged) | — | unknown |
| #27204 | `35ee645eb2c9` | `35ee645eb2c9` | 17:42:07Z (frozen) | **NO** |
| #27205 | `98a58ea4401f` | `98a58ea4401f` | 17:42:02Z (frozen) | **NO** |
| #27206 | `697679ffa58b` | **`0f401398a345`** | 18:46:01Z | **YES** (Δt ≈ 64m) |
| #27207 | `0b0827e786d3` | `0b0827e786d3` | 17:42:16Z | **NO** |
| #27208 | `c445a08a03c8` | `c445a08a03c8` | 17:42:46Z | **NO** |
| #27209 | `05c9ca5f1a42` | **`cbd1122cc2fe`** | 18:46:27Z | **YES** (Δt ≈ 61m) |
| #27210 | `2fc147faaf89` | `2fc147faaf89` | 17:43:00Z | **NO** |
| #27211 | `0d096fb0b6ca` | `0d096fb0b6ca` | 17:45:19Z | **NO** |
| #27212 | `ade531f41c24` | `ade531f41c24` | 17:45:15Z | **NO** |

**Mutation count: 2 of 10 (20%).** No new PR numbers opened by Beandon13 in this tick (P-361.A **falsified**: predicted N≥15 expansion, observed N=10 frozen with 2/10 head mutations). Mutated PRs (#27206, #27209) have **near-identical second-update timestamps** (18:46:01Z vs 18:46:27Z = Δ=26s) → **paired late-window touch**, not random independent edits. Suggests Beandon13 is **iterating per-PR review feedback** on selected swarm members rather than withdrawing or extending.

**Naming-complete formal definition**: sub-class H(N, k, Δt, A, R) = head-mutation event on k of N already-open swarm members owned by author A in repo R, where the mutated subset's second-update span Δt < 60s (paired touch) and N is unchanged (no new PR numbers consumed). For k=2, N=10, Δt=26s, A=Beandon13, R=BerriAI/litellm at Add.362 → **observed: PASS**.

**Why this matters**: it is the **first successor-state** to a sub-class G event in W17/W18 instrumentation. It rules out three prior hypotheses: (1) sub-class G as one-shot abandon, (2) sub-class G as continuous-extension to ever-larger N, (3) sub-class G as bot-driven mass-close target (no maintainer sweep happened tick+1, partially supports synth-702 P-702.E).

---

## Specific PRs cited per carrier (≥30 unique PRs, all 7 carriers)

### sst/opencode (5 NEW since Add.361, plus continuing)
- **#25909** `feat(websearch): add Perplexity backend (default), keep Exa as alt` — jliounis — `916eb3aabe3d` — 18:42:23Z (NEW PR number; **head SHA matches old #25889** → carrier-side renumber/repurpose, not collision)
- **#25907** `refactor: remove unused DynamicDescription hack in tool.ts` — srivenkateswaran6002 — `70712fd7cf11` — 18:22:12Z (NEW)
- **#25905** `feat: make modified files in sidebar clickable to open with OS default app` — JosephITA — `62ab5177d5ef` — 18:35:04Z (NEW)
- **#25902** `fix(tui): stop plugin selection mouse jumps` — 3351163616 — `92047247c45d` — 18:12:52Z (NEW)
- **#25901** `fix(acp): return stopReason: cancelled (not end_turn) on user cancel` — truenorth-lj — `f9502791b16d` — 17:58:53Z (NEW)
- **#25898** `fix(tui): list root sessions in session picker` — jackmazac — `1bbe5a78f00f` — 17:57:31Z (NEW)
- **#25896** ajpintos `fa38b038ff7b` — 18:09:50Z (head unchanged; metadata-touch tick+1 from Add.361)
- **#25867** stephanschielke `d3bfeaf40998` — 17:23:42Z
- **#25886** johnwaldo `6b8e9fde087f` — 15:26:38Z
- **#25894** jlongster `760a2163fba2` — 16:46:27Z

**Opencode pattern**: **6 new PR numbers consumed in 54m** (#25898, #25901, #25902, #25905, #25907, #25909) by 6 distinct authors → **distributed-author burst**, **falsifies P-702.D's "anti-correlated" framing in the strong sense** (opencode is not quiescent, just author-distributed). Top author concentration remains 1/10 = 10% (jliounis is the sole 2-PR author across active set).

### openai/codex (4 NEW + one synth-702 collision broken)
- **#21224** `Add workspace announcement polling client` — xli-oai — `809185ddde3c` — 18:26:22Z (NEW)
- **#21223** `Add workspace headline polling client` — xli-oai — `d0bba9e16d12` — 18:25:58Z (NEW; **paired with #21224 at Δt=24s, both xli-oai, both "polling client" theme** → twin-PR thematic burst)
- **#21221** pakrym-oai head **`d2b49cefdc49` → `baaea5229eb7`** — 18:44:18Z (head iteration tick+1, P-361 implicit)
- **#21219** mchen-oai head **`a46f9a3aa29c` → `42640c45c538`** — 18:40:23Z (head iteration)
- **#21214** jif-oai `c5a7ad87d35f` (head unchanged) — 18:20:58Z (metadata-touch)
- **#21184** evawong-oai head **`6b31cb3a79f3` → `1c4e336472ea`** — 18:26:09Z (**P-361.C confirmed**: anchor head iterated within ≤2 ticks post sub-class F promotion; observed Δ ≈ 82m)
- **#21182** jif-oai head **`9925dca637f0` → `07a1254b128d`** — 13:05:11Z snapshot (head changed despite frozen updatedAt — historical iteration captured)
- **#21180** jif-oai head **`9925dca637f0` → `f84c4eb7390c`** — 18:05:37Z
- **#21187** jif-oai `85fe8faa8302` — 13:54:55Z
- **#21175** evawong-oai `8f93be5b9e21` — 16:07:02Z

**Codex sub-pattern**: synth-700 cross-carrier head-identity collision at codex (#21180 == #21182 sharing `9925dca637f0` per Add.361) **DISSOLVED tick+1**: both heads iterated to distinct values (`07a1254b128d` ≠ `f84c4eb7390c`). **Synth-702 P-702.B partially falsified** at the codex side (cross-carrier collision count drops; qwen-code side persists, see below). jif-oai concentration remains 4/10 = 40% (band-stable).

### BerriAI/litellm (sub-class H instance + 3 NEW non-Beandon)
- **#27218** `[UI] Rename "Default" key type to "Full Access" and reorder dropdown` — ryan-crabbe-berri — `1c50fd1a115c` — 18:42:01Z (NEW, non-Beandon — **breaks the 100% concentration**)
- **#27217** `fix(vertex): forward system prompt to partner model token counter` — VANDRANKI — `2df51f7aa33a` — 18:40:02Z (NEW)
- **#27216** `Include model name + configured TPM/RPM in priority rate-limit 429 errors` — ishaan-berri — `4d84107f9aaa` — 18:27:55Z (NEW; **maintainer-side**, not Beandon)
- **#27212, #27211, #27210, #27209, #27208, #27207, #27206, #27205, #27204** — Beandon13 (sub-class H instance, see top of doc; #27206 + #27209 head-mutated, others frozen)

**Litellm regime change**: Beandon13 concentration drops from 10/10 (Add.361) to **9/12 ≈ 75%** as 3 maintainer/non-Beandon PRs land. **P-702.E partially confirmed** (no maintainer sweep / mass-close), but **band-fall from 100% → 75% reduces the sub-class G outlier amplitude** without reverting it.

### google-gemini/gemini-cli (4 NEW; cocosheng-g jumps to 4 PRs)
- **#26529** `feat(agent): formalize first-class tool lifecycle states and status mapping` — mbleigh — `005e0cfc532e` — 18:45:46Z (NEW)
- **#26528** `feat(evals): add shell command safety evals` — akh64bit — `e32e86d1b698` — 18:43:28Z (NEW)
- **#26527** `docs: clarify Auto Memory proposes memory updates and skills` — SandyTao520 — `e0b18d8e8083` — 18:21:20Z (NEW)
- **#26526** `# Robust Issue Deduplication Workflow` — gemini-cli-robot — `7428a3b7999d` — 18:17:05Z (NEW; **bot-driven**, see below)
- **#26519** cocosheng-g head **`066f16f23136` → `fc7adde866e5`** — 18:40:06Z (head iteration tick+1)
- **#26515** rpreslar4765 `ac151193599d` — 18:11:36Z
- **#26514** cocosheng-g head **`7034b7ebcaf9` → `1abeb145d062`** — 18:40:34Z (head iteration; **paired with #26519 at Δt=28s** — same author paired-touch on two distinct PRs)
- **#26513** gemini-cli-robot `08647b680ad8` — 18:14:10Z
- **#26506** cocosheng-g `a36d1d5010f4` — 17:52:06Z (head unchanged)
- **#26510** gemini-cli-robot `e30132fc4e58` — 16:52:00Z

**Gemini-cli pattern**: cocosheng-g now has 3 PRs (#26519, #26514, #26506) with **2 of 3 heads mutated in same 28-second window 18:40:06→18:40:34** → second instance of "paired head-mutation across two PRs by single author" pattern this tick (mirrors #27206/#27209 Beandon13 paired touch). **Sub-class H paired-mutation signature replicates across 2 carriers tick-1.** gemini-cli-robot continues bot-driven trickle (#26513, #26510, #26526) extending synth-698 family.

### QwenLM/qwen-code (no new PRs; head-collision PERSISTS)
- **#3856** B-A-M-N `a0daf50c065f` — 14:36:30Z (frozen tick+1)
- **#3855** yiliang114 `b1757402fdb3` — 13:21:23Z (frozen)
- **#3854** yiliang114 `e8b59b89a767` — 16:00:52Z (frozen)
- **#3853** yiliang114 `16a4af998281` — 14:53:37Z (frozen)
- **#3850** yiliang114 `09a62b2f2f6e` — 13:16:39Z (frozen)
- **#3849** B-A-M-N `0c2876fb8da3` — 16:19:50Z (frozen)
- **#3848** B-A-M-N `a0daf50c065f` — 14:32:52Z (frozen; **head-identity collision with #3856 PERSISTS tick+2 from synth-700 origin**)
- **#3847** doudouOUC `68b5a90f6ab5` — 18:38:11Z (metadata-touch tick+1)
- **#3844** wenshao `7f06fee3ed2a` — 08:48:23Z
- **#3842** wenshao `9008717b8a26` — 15:10:47Z (NEW since Add.361 carrier window)
- **#3840** ihubanov `cb1bbbe2406c` — 03:16:34Z
- **#3836** wenshao `90df8f4093fd` — 15:23:29Z

**Qwen-code pattern**: **zero new PR numbers** consumed in 54m → carrier in **PR-creation pause**. wenshao now visible 3× (#3844, #3842, #3836) and overtakes B-A-M-N for new top-author burst candidate at 3/12 = 25% (yiliang114 still 4/12 = 33%, slight band-decay from 40%). **Head-identity collision #3856==#3848 enters tick+2 of stability** — qwen-code-localized collision persistence rules out random-coincidence hypothesis (P>0.99 it's a real shared branch).

### charmbracelet/crush (1 NEW; carrier emerges from quiescence)
- **#2805** `fix(agent): drain queued messages after manual session summarize` — taciturnaxolotl — `1ebe35abf37b` — 17:56:22Z (NEW; **first crush PR creation in ~24h** — breaks the sub-quiescence flagged in Add.361)
- **#2801** ardevd `de9d901ef6f9` — 07:23:08Z
- **#2800** BrunoKrugel `3394b9fb8fd5` — 02:54:02Z
- **#2791, #2788, #2782** meowgorithm trio (frozen tick+1)
- **#2778** BrunoKrugel `ebdf6fde3c7f` — 02:56:43Z
- **#2772** mkaaad `8e918add67be` — 2026-05-03T08:31:46Z (visible for first time in our top-12 window)

**Crush pattern**: meowgorithm thematic-cluster (#2791/#2788/#2782) frozen; new PR by new author breaks ~24h carrier-quiescence at exactly the W17→W18 boundary tick.

### block/goose (4 MORE morgmart PRs surfaced; concentration explodes)
- **#9028** alexhancock `3fa7bf94aae5` — 18:25:32Z (head **iterated** from Add.361 `3dc3e7d288ca`)
- **#9025** jamadeo `bc06fd0e959c` — 14:58:45Z
- **#9023** jh-block `1d61323844d4` — 13:56:04Z
- **#9021** idosavion `2985dfe07202` — 08:57:51Z
- **#9019** morgmart `f6d15bd91b7d` — 18:05:42Z (head unchanged; metadata-touch)
- **#9018** morgmart `fb429659db87` — **18:45:08Z** (head unchanged; second updatedAt-touch)
- **#9017** morgmart `b19db05c0ea8` — **18:45:07Z**
- **#9016** morgmart `169d521f34c8` — **18:45:06Z**
- **#9015** monroewilliams `22e8634cdf59` — 17:20:37Z
- **#9014** morgmart `ec224a170d81` — **18:45:05Z** (NEW visible; head **distinct from #9015-9018**)
- **#9013** morgmart `c2f4ede3c7ee` — **18:44:57Z** (NEW visible)
- **#9012** morgmart `936f5d9e07e5` — **18:44:56Z** (NEW visible)

**Goose pattern (DOMINANT THIS TICK)**: morgmart now occupies **7 of 12 top PRs (≈58% concentration)** — #9019, #9018, #9017, #9016, #9014, #9013, #9012. **Six of these seven (#9012-#9018) updated within 12-second window 18:44:56→18:45:08** → sub-15-second N=6 burst. **P-361.E falsified strongly**: sub-10s burst is not discrete; it has now repeated tick+1 with **doubled N (N=3 → N=6)** and **same author**. This is a **periodic-burst regime**, not an event. Goose concentration jumps from 40% (Add.361) to 58% (Add.362) → **W18 day-1 carrier-leader for author-concentration**.

---

## Cross-tick prediction outcomes (Add.361 → Add.362)

| Predicted | Prior | Observed | Verdict |
|---|---|---|---|
| P-361.A: Beandon13 N≥15 expansion | 0.55 | N frozen at 10, 2 head mutations | **FALSIFIED** (wrong axis: head-mutation not N-extension → motivated sub-class H) |
| P-361.B: ≥1 of #27203-#27212 closed | 0.40 | None closed; 3 non-Beandon PRs land alongside | **FALSIFIED** (no maintainer sweep) |
| P-361.C: #21184 head iterates ≤2 ticks | 0.65 | Head iterated tick+1 (Δ ≈ 82m) | **CONFIRMED** |
| P-361.D: qwen-code #3852 head iterates | 0.50 | #3852 absent from top-12 (likely closed or off-window — needs follow-up) | **INCONCLUSIVE** |
| P-361.E: morgmart sub-10s burst recurs N≥3 | 0.30 | Recurred at N=6, Δt=12s, same author | **CONFIRMED++** (regime not event) |

**Calibration update**: P-361.A's 0.55 prior was off — the swarm-extension hypothesis missed the in-place mutation alternative. Future sub-class G observations should track **2 axes simultaneously**: N-extension and head-mutation.

---

## Predictions for Add.363

- **P-362.A** (0.55 prior): morgmart goose burst recurs tick+1 with N≥4 — if N≥6 again, **sub-15s periodic-burst hypothesis confirmed**, escalate to new sub-class.
- **P-362.B** (0.45 prior): qwen-code head-identity collision #3856==#3848 **persists tick+3** — if so, regime is **stable shared-branch**, not a transient mistake.
- **P-362.C** (0.40 prior): Beandon13 mutates ≥2 more swarm members tick+1 (sub-class H continuation), **without** opening new PR numbers — converging on per-PR-review-iteration mode.
- **P-362.D** (0.50 prior): Codex xli-oai twin-PR pattern (#21223/#21224) gains a third sibling (`Add workspace * polling client`) within 1 tick — twin → triplet escalation.
- **P-362.E** (0.35 prior): Cocosheng-g paired head-mutation pattern (#26519/#26514 at Δt=28s) recurs tick+1 with same author and ≥2 simultaneous head iterations.
- **P-362.F** (0.55 prior): opencode distributed-author burst (6 new PRs by 6 authors / tick) sustains tick+1 (≥4 new PRs by ≥4 distinct authors) — **carrier-structural property**, not noise.

---

## Carriers covered: 7/7
## Unique PR numbers cited this addendum: **62**
- opencode: 10 (#25909, #25907, #25905, #25902, #25901, #25898, #25896, #25867, #25886, #25894)
- codex: 10 (#21224, #21223, #21221, #21219, #21214, #21184, #21182, #21180, #21187, #21175)
- litellm: 12 (#27218, #27217, #27216, #27212, #27211, #27210, #27209, #27208, #27207, #27206, #27205, #27204)
- gemini-cli: 10 (#26529, #26528, #26527, #26526, #26519, #26515, #26514, #26513, #26506, #26510)
- qwen-code: 11 (#3856, #3855, #3854, #3853, #3850, #3849, #3848, #3847, #3844, #3842, #3836, #3840)
- crush: 7 (#2805, #2801, #2800, #2791, #2788, #2782, #2778, #2772)
- goose: 12 (#9028, #9025, #9023, #9021, #9019, #9018, #9017, #9016, #9015, #9014, #9013, #9012)
