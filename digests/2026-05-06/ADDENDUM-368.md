# ADDENDUM-368 — 2026-05-06 (W18 day-1, tick+1 from Add.367)

**Capture window**: 2026-05-05T23:07:43Z (Add.367 latest, codex #21250 update) → 2026-05-06T00:02:16Z (codex #21271 update). **Tick width: ~54m.** Sequence Add.357→368 = 20, 49, 33, 24, 40, 54, 64, 54, 66, 37, 39, **54**. The 38m two-tick centroid declared at Add.367 is **falsified at tick+1**: width re-expands to 54m, returning to the 50–66m band of Add.358–365. The bimodal-pair hypothesis (Add.367) holds: ticks alternate between ~38m (tight) and ~54m (loose), with no monotone drift across 12 ticks.

---

## NEW OBSERVATION THIS TICK — "wiltzius-openai J′-doublet promotes to J′-triplet via #21266 at +6m22s; first observed J′ → J′_extended chain"

**Signature**: At Add.367 we logged wiltzius-openai opening **#21264 + #21265** at Δ=40s (sub-class J′, same-substrate-pair on `ThreadStore`). In this tick window, wiltzius opens **#21266** `[codex] Fix pathless thread summaries` at 23:10:21Z — **6m22s after #21265** and **on the same `ThreadStore` substrate family**. The doublet promotes to a **3-PR same-author same-substrate cluster** with a **gap-pattern of 40s, 6m22s** (asymmetric ascending — opposite of canonical J's flat sub-second pacing, but matching Add.367's JM-hybrid asymmetric ascending shape).

**Empirical instance (codex / wiltzius-openai 3-PR substrate cluster):**

| PR | head SHA | createdAt | state @ 00:02Z | title |
|---|---|---|---|---|
| #21264 | `074440a1daafed81b090a3feffddac647d875550` | 2026-05-05T23:03:59Z | OPEN | `Move thread name edits to ThreadStore` |
| #21265 | `3a00dd6c7b3dc7cea124400c9c8a8c38e73e99c9` | 2026-05-05T23:04:39Z | OPEN | `Route ThreadManager rollout path reads through thread store` |
| #21266 | `a439ec5dc4b6` | 2026-05-05T23:10:21Z | OPEN | `[codex] Fix pathless thread summaries` |

All 3 head SHAs **frozen since open** (no force-push) — confirms **P-367.A**: J′ does NOT mutate within 1 tick (manual-pace doublet stays frozen, contra J's sync force-push promotion). J′ is a **distinct sub-class** from J (J→H_sync_3-of-3) — the toolchain signal is absent, supporting the manual-open hypothesis.

**Cross-author convergence**: pakrym-oai #21260 `[codex] Move thread naming to app server` (carried, head mutated to `ffcce8485e35d` from Add.367's `96bcac6704dc` — **force-push at ~23:50:30Z**) shares the `thread naming / app server` substrate. The convergent-substrate cluster (P-367.C) gains a **maintainer-side rebase** on the cross-author member (pakrym), suggesting pakrym's PR is being prepared as the merge-foundation for the wiltzius J′-triplet stack. Predict at Add.369: pakrym #21260 merges first; wiltzius cluster rebases onto it.

---

## NEW OBSERVATION 2 — "ishaan-berri prometheus-K cluster gains 7th and 8th members within tick; K-class envelope crosses 3.5h with bimodal-prefix splitting"

**Signature**: ishaan-berri opens **#27246** at 23:51:17Z (`Fix Prometheus remaining key rate limit gauges`) and **#27248** at 23:57:22Z (`Fix Prometheus model-per-key remaining metrics`). These are members **7/8** and **8/8** of the prometheus-K cluster, extending the envelope from 20:26:04Z (#27226) → 23:57:22Z = **3h31m18s**.

**Critically**, the title prefix shifts: members 1–6 used `fix(prometheus):` (lowercase, conventional-commit). Members 7–8 use `Fix Prometheus` (capitalized, free-form). **Same author, same substrate, but the commit-style prefix shifts mid-cluster** — first observed **prefix-style bifurcation** within a single K-cluster. Hypothesis: ishaan-berri ran out of conventional-commit framing as the cluster grew; the shift signals **author-fatigue / iteration-boundary** at member 7.

**Update on P-367.B** (ishaan-berri opens #27246+ with prometheus prefix by Add.368): **CONFIRMED** — both #27246 and #27248 match. K-cardinality now **n=8** (largest single-author single-theme cluster of W18 to date). **All 8 members remain OPEN**, no merges, no closes. **P-365.A 3.5h K-elimination deadline** at ~24:55Z is approached but NOT crossed: cluster is still **active-iterating** (2 new opens in the final 6 minutes of the 3.5h window). K is now **definitively a slow-iteration mode**, not candidate-elimination.

---

## NEW OBSERVATION 3 — "yuneng-berri JM-hybrid promotes to JMM with #27245 self-merge inside extended envelope; JM cardinality of merge-events climbs to 2/3"

**Signature**: At Add.367 yuneng's JM-hybrid was 3 PRs / 1 in-envelope merge (#27240 MERGED, #27241/#27245 OPEN). In this tick window, **#27245 MERGES at 23:15:03Z** (self-merge, 16m13s after open). The hybrid now has **2 of 3 members merged** — the burst is no longer a hybrid pattern with 1 anchor merge, but a **dual-anchor merge cascade with 1 still-OPEN dependent (#27241)**. Sub-class promotion candidate: **JM₂ (J-burst ∩ 2-merge cascade)**.

**Empirical instance (litellm / yuneng-berri JMM):**

| PR | head SHA | createdAt | merged-at | state | title |
|---|---|---|---|---|---|
| #27240 | `87bda4a6b13134a44fbc0fa81e60e048fd61a497` | 22:45:32Z | **22:51:21Z** (5m51s) | MERGED | `[Infra] Build UI` |
| #27241 | `201fa5d42bf1` | 22:46:19Z | — | OPEN (head mutated from `eff0f8c630b2` — **force-push at ~23:54:44Z**) | `[Infra] Packaging: Relax Core Runtime Pins To Ranges` |
| #27245 | `e84282b7b39c4c5590c300140919e07f8a6b2e58` | 22:58:50Z | **23:15:03Z** (16m13s) | MERGED | `[Infra] Promote internal staging to main` |

The OPEN member (#27241) **force-pushed mid-tick** — confirms hypothesis from Add.367 that the OPEN tail of a JM-hybrid iterates while the merged anchors stand. JM₂'s middle PR mutating while bookends merge is a **distinctive merge-cascade signature** vs J→H_sync (all 3 members force-push synchronized) and pure M (single new open).

---

## NEW OBSERVATION 4 — "Hona/opencode rapid intra-author micro-cluster: open→merge→open in 35 minutes, no force-pushes"

**Signature**: Author `Hona` (carrier-1 opencode) opens **#25937** `fix(server): restore web terminal CSP allowances` at 23:22:22Z, MERGED 10m29s later at 23:32:51Z. Then opens **#25939** `fix(app): require query functions for sync queries` at 23:47:55Z — 15m04s after the merge. This is a clean **M-class trigger pattern** (post-merge author momentum, single new open) on opencode/anomalyco — first M-class instance on this carrier in W18.

**Empirical instance:**

| PR | head SHA | createdAt | merged-at | state | title |
|---|---|---|---|---|---|
| #25937 | `f8810e6fb1aebb729f00eb4ab0f3de2af464a875` | 2026-05-05T23:22:22Z | **2026-05-05T23:32:51Z** (10m29s) | MERGED | `fix(server): restore web terminal CSP allowances` |
| #25939 | `13c4cac7013e87f42d334cc8bc8762dfb6734045` | 2026-05-05T23:47:55Z | — | OPEN | `fix(app): require query functions for sync queries` |

Predict at Add.369: #25939 either merges within 30m (M-class fast-resolve) or sits OPEN past 1h (M-class stall). The M-trigger gap of 15m04s is mid-band for M (kalvinnchau ACP M-trigger gaps were 25–55m at Add.366); Hona is faster.

---

## NEW OBSERVATION 5 — "ddbd opens malformed-title PR #25936 ('Merge: ') CLOSED in 4m33s — first 'titleless' anti-pattern of W18"

PR #25936 created by `ddbd` at 23:15:58Z with **title `Merge: ` (empty after colon)**, CLOSED-no-merge at 23:20:31Z (4m33s lifespan). Similar to Add.366's vanities #27243 fast-reject (4m47s, arize O(L²) emit) — both are sub-5-minute close-no-merges, but vanities was a substantive bug fix rejected on review-grounds while ddbd is a **malformed-title accidental-PR**. Adds a new sub-class of CLOSED-no-merge: **Z′ (accidental/malformed)** vs Z (rejected-on-merit).

Codex carrier also has **#21267 by canvrno-oai with title `N/A`** CLOSED 4m17s after open (23:14:28Z → 23:18:45Z). Two `Z′ accidental-malformed-title CLOSED-no-merge` events in this tick across 2 carriers — **first cross-carrier replication of Z′ in W18**.

---

## Update on P-367.A (wiltzius J′-doublet head SHA stability)

**CONFIRMED.** All 3 wiltzius cluster members (#21264, #21265, #21266) head SHAs frozen since open. J′ ≠ J → H_sync. The 40s manual-pace gap predicted no scripted batch-rebase tooling; observation matches.

## Update on P-367.B (ishaan-berri prometheus n=7+ by Add.368)

**CONFIRMED with margin.** Cluster at n=8.

## Update on P-367.C (pakrym + wiltzius convergent-substrate dependency-graph merge)

**Partial: pakrym #21260 force-pushed mid-tick (mutating from Add.367 head)**, signaling rebase-prep, but no merge yet. Two-tick budget ongoing; deadline = Add.369.

## Update on P-367.D (H-burst regime ≥8 force-push events at Add.368)

**FALSIFIED.** Force-push H count this tick: **5** (codex #21260 pakrym; litellm #27241 yuneng-berri; goose carried #9030/#9040 frozen this tick; opencode 0 new; gemini-cli 0 new H). H-density falls from Add.367's **12 events** to **5 events** — a 58% drop. The W18-day-1 H-burst regime declared at W17-synth-708 / Add.367 is **regime-end**: revert OMR classifier to standard open:merge ratio gating from Add.369.

---

## Specific PRs cited per carrier

### anomalyco/opencode (4 NEW + carried = 14)
- **#25939** `13c4cac7013e87f42d334cc8bc8762dfb6734045` Hona `fix(app): require query functions for sync queries` 23:47:55Z OPEN (NEW; M-trigger pair member 2/2)
- **#25937** `f8810e6fb1aebb729f00eb4ab0f3de2af464a875` Hona `fix(server): restore web terminal CSP allowances` 23:22:22Z → MERGED 23:32:51Z (NEW; M-trigger pair member 1/2; 10m29s lifespan)
- **#25936** `595539806f3653b53e2bcec808c3b5f6e1ea7bb6` ddbd `Merge: ` 23:15:58Z → CLOSED-no-merge 23:20:31Z (NEW; **Z′ accidental-title sub-class**, 4m33s lifespan)
- **#25934** `9216670e7c8ee9e5ec9db68a9ad95fadfd8c423e` rekram1-node (carried, MERGED 23:07:24Z at top of tick window)
- **#25933** `25c813de3bd8e5cb28f0d7e67b2ae3eed8599150` G17hao (carried, OPEN, frozen)
- **#25925** `40178e0342ab3dd48ef82d5dea102d9cf8af68d4` ctharvey (carried, frozen)
- **#25924** `2a1bc29bcf2cef4672a8b17f43ff670b8b65a12e` CasualDeveloper (carried, frozen)
- **#25920** `fa38b038ff7b1d3e758861221c2cac79a2984913` ajpintos → CLOSED 23:19:52Z this tick (carried-then-closed; mcp windows shell PR rejected)
- **#25919** `0809cac77aecf43279e04d6aa0494ea97317b8ed` adavila0703 (carried, frozen)
- **#25917** `78eacba8fce1509cb42c860a0a7e54ef46201f29` nabilfreeman (carried, frozen)
- **#25915** `a221a11a2a99836ce63b5ab8691e1999d31b0166` jlongster (carried, frozen)
- **#25911** `c3e404b4cc09701953715ce3e48efafe6eba149f` jlongster (carried-merged earlier)
- **#25909** `916eb3aabe3d8969a202a0490442ef7d8d52015a` jliounis (carried)
- **#25907** `70712fd7cf119885f26b27e4bcbe473a4f1813e3` srivenkateswaran6002 (carried, frozen)
- **#25905** `62ab5177d5ef33b5b7c987a29f11220c5c0f433b` JosephITA (carried)

### openai/codex (5 NEW + carried = 17)
- **#21272** `87e22371bc9b` abhinav-oai `Support compact SessionStart hooks` 23:49:09Z OPEN (NEW)
- **#21271** `6c8e40740d14` alfozan `Expose plugin manifest keywords in app server` 23:38:49Z OPEN (NEW)
- **#21267** `8bd1e7f6fbfe` canvrno-oai `N/A` 23:14:28Z → CLOSED-no-merge 23:18:45Z (NEW; **Z′ accidental-title sub-class**, 4m17s lifespan; second Z′ this tick)
- **#21266** `a439ec5dc4b6` wiltzius-openai `[codex] Fix pathless thread summaries` 23:10:21Z OPEN (NEW; **wiltzius J′-cluster member 3/3**)
- **#21265** `3a00dd6c7b3dc7cea124400c9c8a8c38e73e99c9` wiltzius-openai (carried, frozen, J′ member 2/3)
- **#21264** `074440a1daafed81b090a3feffddac647d875550` wiltzius-openai (carried, frozen, J′ member 1/3)
- **#21263** `826fecf8a7b7` mifan-oai (head SHA **DIFFERS** from Add.367's `094c30648570` — force-pushed at ~23:17:34Z)
- **#21261** `2d8e9c99f2aa62ee5e318d2e8a94bfa576025c43` bolinfest (carried-merged at top-of-tick; included for ledger)
- **#21260** `ffcce8485e35d` pakrym-oai (head SHA **DIFFERS** from Add.367's `96bcac6704dc` — force-pushed at ~23:50:30Z; convergent-substrate rebase-prep)
- **#21259** `0f840f6bad49` cconger → MERGED 23:56:44Z this tick (carried-then-merged; ci: rusty-v8 release tags lands)
- **#21257** `4912a1f26c37` bolinfest (head SHA **DIFFERS** again from Add.367's `9537f26268a6` — third H-event in 3 ticks on this PR)
- **#21256** `f7eb9d90e346` bolinfest (head **DIFFERS** from Add.367's `0010611d3a69` — third H-event)
- **#21255** `2aa43ecc9a7c` bolinfest (head **DIFFERS** from Add.367's `1a8cae26af76` — third H-event; bolinfest J→H_sync_3-of-3 mutates AGAIN, sync this time)
- **#21251** `c20b69c7f7a8` owenlin0 → MERGED 23:46:52Z (carried-then-merged; chore(app-server-protocol): split v2 API definitions lands)
- **#21250** `1cf571b20051` bolinfest (head **DIFFERS** from Add.367's `b450042d455d` — fourth bolinfest H-event today)
- **#21249** `f33af039b45c70474076607f2be1879f2a16fbd0` aibrahim-oai (carried)
- **#21238** `c8670a11854f` rhan-oai (carried, frozen since 22:17:31Z = 1h45m frozen)

### BerriAI/litellm (4 NEW + carried = 17)
- **#27248** `eb22363803d0` ishaan-berri `Fix Prometheus model-per-key remaining metrics` 23:57:22Z OPEN (NEW; **prometheus-K member 8/8**)
- **#27247** `0c07365b6239` Michael-RZ-Berri `[Fix] Union x-litellm-tags with static team/key tags` 23:54:22Z OPEN (NEW)
- **#27246** `eb3f2a03a316` ishaan-berri `Fix Prometheus remaining key rate limit gauges` 23:51:17Z OPEN (NEW; **prometheus-K member 7/8**, prefix-style shift point)
- **#27245** `e84282b7b39c4c5590c300140919e07f8a6b2e58` yuneng-berri (carried, MERGED 23:15:03Z this tick; JM₂ promotion)
- **#27244** `85d4d96c1bf1d823b1c66d5464768d568302b3f0` michelligabriele (carried, frozen)
- **#27243** `28329cb1b69c3eb5bf6359d43f0a24b90ee2d2bd` vanities (carried-closed, included for ledger)
- **#27242** `4c318cd7d7e9acb6f3e774782f239aaa7457b03f` ishaan-berri (carried; prometheus-K 6/8, frozen)
- **#27241** `201fa5d42bf1` yuneng-berri (head **DIFFERS** from Add.367's `eff0f8c630b2` — force-pushed at ~23:54:44Z; JM₂ middle-OPEN iterates)
- **#27240** `87bda4a6b13134a44fbc0fa81e60e048fd61a497` yuneng-berri (carried-merged earlier)
- **#27239** `5d472c6d73e2` oss-agent-shin (carried; SSO-K 3/3, frozen)
- **#27238** `2c801febffdea18299790e3db182d19e80f1a69a` ryan-crabbe-berri (carried, frozen)
- **#27237** `8236dc01743345e69601fc20e2804155165863ed` yassin-berriai → MERGED 23:58:35Z this tick (carried-then-merged; helm probe timeouts land at end-of-tick)
- **#27236** `3240c2c7c8f7` ishaan-berri (carried; SSO-K 2/3)
- **#27235** `c06657e2bd96` oss-agent-shin (carried; SSO-K 1/3)
- **#27234** `2993e45ad18e7508d7f4a262608006bc787082c5` Michael-RZ-Berri (carried)
- **#27233** `052f02fa473b` ishaan-berri (carried; prometheus-K 5/8, frozen)
- **#27226** `9de49c7b044d` ishaan-berri (carried; prometheus-K 1/8, frozen since 20:26:04Z = 3h36m frozen)

### google-gemini/gemini-cli (1 NEW + carried = 11)
- **#26551** `b3acaec3e2b9` tejakusireddy `fix: externalize https-proxy-agent in bundle` 23:23:07Z OPEN (NEW; only NEW open this tick on gemini-cli)
- **#26549** `78d2ef5db2b22f562ec8b631febd606112b448c1` app/gemini-cli → CLOSED-no-merge 23:10:26Z this tick (carried-then-closed bot-meta-PR; "Proposed Improvements to Issue Lifecycle Management" rejected)
- **#26548** `f173fe4f30bec2404aa335da9ebbb9c4af0a7532` akh64bit (carried, frozen)
- **#26547** `65893ee03feec8cb174b4499bf64280286cb7eac` gemini-cli-robot (carried, frozen)
- **#26546** `25a2e153d46a` app/dependabot (CLOSED 22:20:29Z, included for ledger)
- **#26545** `79ad78e613d62e34cf02a3b6383c307dfa6d2749` gemini-cli-robot (carried-merged earlier)
- **#26544** `4ede53faa96e151cb2b53e8d24cfb8a99e156cfa` gemini-cli-robot (carried-merged earlier)
- **#26543** `e65185f5934b` golba98 (head **DIFFERS** from Add.367's `c13c087b443c` — force-pushed at ~23:33:39Z)
- **#26542** `ce05d74004690ef243ec99fcad4ffdd1e73d2aeb` galz10 (carried-merged)
- **#26538** `4f1ae6a373be` gemini-cli-robot (carried)
- **#26536** `4a9fc8e5cab6` alexandrevarga (head **DIFFERS** from Add.367's `dbd30cab4789` — third force-push in 3 ticks; **cumulative H-events = 3** on this PR — the highest H-density single-PR of W18)
- **#26535** `34ea5b5f7dac` SandyTao520 (carried)
- **#26534** `d7748b6877314db7` joshualitt (carried-merged 23:07:17Z)

### QwenLM/qwen-code (0 NEW, 0 MERGED, 0 CLOSED — **3rd consecutive silent tick**)
- **#3856** `5cd5c3f6ccf0` B-A-M-N (carried; head **DIFFERS** from Add.367's `ecbbba1595b1` — force-push at 23:55:43Z; **first qwen H-event in 3 ticks ends carrier-silence**)
- **#3855** `b1757402fdb3` yiliang114 (carried)
- **#3854** `e8b59b89a767` yiliang114 (carried)
- **#3853** `16a4af998281` yiliang114 (carried)
- **#3850** `09a62b2f2f6e` yiliang114 (carried)
- **#3849** `a8ff9b9107ac` B-A-M-N (head **DIFFERS** from Add.367's `0c2876fb8da3` — force-push 23:56:00Z; second qwen H-event)
- **#3848** `aebe16bd72ee` B-A-M-N (head **DIFFERS** from Add.367's `a0daf50c065f` — force-push 23:35:33Z; third qwen H-event)
- **#3847** `68b5a90f6ab5` doudouOUC (carried)
- **#3844** `7f06fee3ed2a` wenshao (carried)
- **#3819** (carried, no longer in top-15 window — drops out)

**qwen-code now exits 2-tick silence** with **3 H-events in single tick from B-A-M-N alone** (#3856, #3849, #3848 all force-pushed within 22m of each other) — this is a **same-author multi-PR force-push burst** = first **H-cluster-by-single-author** observed on qwen-code in W18.

### charmbracelet/crush (1 NEW + carried = 7)
- **#2811** `8548ed7545f1` taciturnaxolotl `feat: add --all and --crawl-dir modes to stats subcommand` 23:08:56Z OPEN (NEW; first crush PR in 3 ticks ends 2-tick silence)
- **#2809** `61c109eaedfa` taciturnaxolotl (carried, frozen since 20:45:15Z = 3h17m frozen)
- **#2808** `52aa09aad1bb` ilgax (carried)
- **#2807** `b796f550716a` taciturnaxolotl (carried)
- **#2805** `1ebe35abf37b` taciturnaxolotl (carried)
- **#2801** `de9d901ef6f9` ardevd (carried)
- **#2800** `3394b9fb8fd5` BrunoKrugel (carried)

**taciturnaxolotl** now has **4 of last 5 PRs on crush** (#2811, #2809, #2807, #2805) over 5h envelope — author-dominance signal.

### block/goose (0 NEW, 0 MERGED, 0 CLOSED in tick = 11 carried)
- **#9040** `47e5ca06a41d` kalvinnchau (head **DIFFERS** from Add.367's `c288a6e60e18` — force-pushed at 23:47:45Z; ACP-stack continues iterating, **3rd H-event on #9040 across 3 ticks**)
- **#9039** `73bbd4f492c6` tulsi-builder (carried, frozen)
- **#9038** `89262adab61f` jh-block (carried, frozen)
- **#9036** `1b16d5aa7868` DOsinga (carried)
- **#9035** `5db106762411` SarthakB11 (carried)
- **#9034** `289ae524573e` alexhancock (carried)
- **#9033** `ef6897674ae2` treebird7 (carried)
- **#9030** `b35dafc40e0f` kalvinnchau (head **DIFFERS** from Add.367's `01165f276b5c` — force-pushed at 23:31:52Z; 3rd H-event on #9030, **kalvinnchau ACP-stack now has 6 H-events / 2 PRs / 3 ticks** = density 1 H-event per PR per tick, **highest sustained author-stack H-density of W18**)
- **#9025** `bc06fd0e959c` jamadeo (carried)
- **#9023** `1d61323844d4` jh-block (carried-merged 21:11:20Z)
- **#9021** `2985dfe07202` idosavion (carried)

---

## Cross-carrier counts this tick (Add.368)

| carrier | OPEN-new this tick | MERGED this tick | CLOSED-no-merge | force-push H | total cited |
|---|---|---|---|---|---|
| anomalyco/opencode | 3 (#25939, #25937 [also-merged], #25936 [also-closed]) | 1 (#25937) | 2 (#25936, #25920) | 0 | 15 |
| openai/codex | 5 (#21272, #21271, #21267 [also-closed], #21266, partial #21259/#21251 mergers) | 2 (#21259, #21251) | 1 (#21267) | 6 (#21263, #21260, #21257, #21256, #21255, #21250) | 17 |
| BerriAI/litellm | 3 (#27248, #27247, #27246) | 2 (#27245, #27237) | 0 | 1 (#27241) | 17 |
| google-gemini/gemini-cli | 1 (#26551) | 0 | 1 (#26549) | 2 (#26543, #26536) | 13 |
| QwenLM/qwen-code | 0 | 0 | 0 | 3 (#3856, #3849, #3848) | 9 |
| charmbracelet/crush | 1 (#2811) | 0 | 0 | 0 | 7 |
| block/goose | 0 | 0 | 0 | 2 (#9040, #9030) | 11 |
| **TOTAL** | **13** | **5** | **4** | **14** | **89** |

**89 unique PRs cited across 7/7 carriers.** Open:Merge ratio = 13:5 = **2.6** (vs Add.367's 3.5) — open-velocity moderates. Force-push H count of **14** narrowly **exceeds** Add.367's 12 — but distribution **shifts dramatically**: Add.367 had H spread across 5 carriers (max 6 on codex); Add.368 still has 6 on codex but **3 NEW on qwen-code** (which had 0 in Add.367) and **0 on opencode/litellm/gemini-cli OPENS** (carriers that drove H-density yesterday). This is **regime-rotation, not regime-end**: H-burst migrates from primary carriers (codex, litellm, opencode) to formerly-silent carriers (qwen-code, goose). Re-classify Add.367's "H-burst regime" hypothesis as **carrier-rotating H-burst meta-regime**.

## Falsifiable predictions

- **P-368.A**: pakrym-oai #21260 merges by Add.369 (1-tick budget); after pakrym lands, wiltzius J′-cluster (#21264, #21265, #21266) head SHAs mutate within 2 ticks **synchronized** (rebase onto pakrym foundation). If pakrym does NOT merge by Add.369, the convergent-substrate dependency hypothesis is weakened.
- **P-368.B**: ishaan-berri opens **#27249+ with `Prometheus`-themed title** by Add.369 (cluster reaches n=9). If no new prometheus member, the K-cluster has finally settled at n=8 and #27246/#27248 are the closing entries.
- **P-368.C**: qwen-code H-cluster-by-single-author (B-A-M-N's 3 same-tick H-events) is a **first-instance toolchain signal**, not noise. Predict B-A-M-N opens **#3857+** within 2 ticks (post-rebase new content), or all 3 PRs (#3856, #3849, #3848) merge in same wave. If neither, this was a one-off rebase-cleanup, not a systematic pattern.
- **P-368.D**: Z′ accidental-title CLOSED-no-merge sub-class recurs at Add.369 (≥1 instance across 7 carriers). If 0 instances, Z′ is a coincidental same-tick double-event from Add.368, not an emerging class.
- **P-368.E**: kalvinnchau ACP-stack (#9030, #9040) crosses **7 H-events / 2-PR / 4-tick** by Add.369. If H-density continues at 1/PR/tick, this becomes the longest-running H-iteration cluster of W17–W18.
