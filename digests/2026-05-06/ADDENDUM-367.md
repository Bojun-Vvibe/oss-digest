# ADDENDUM-367 — 2026-05-06 (W18 day-1, tick+1 from Add.366)

**Capture window**: 2026-05-05T22:28:42Z (Add.366 latest, codex #21251 update) → 2026-05-05T23:07:43Z (codex #21250 update). **Tick width: ~39m.** Sequence Add.357→367 = 20, 49, 33, 24, 40, 54, 64, 54, 66, 37, **39**. Two consecutive sub-40m ticks (37 → 39) after the ~50–66m band of Add.358–365 — the Add.365 "widened band" hypothesis is **falsified for two consecutive ticks**; band re-narrows to a ~38m centroid (37+39)/2 = **38m**, which itself is the **tightest two-tick mean** since Add.357 (28+20)/2 = 24m. Two regimes coexist; this tick anchors the lower of the bimodal pair.

---

## NEW OBSERVATION THIS TICK — "wiltzius-openai sub-second cross-PR doublet on app-server-protocol thread store stack: same-author J-doublet at Δ=40s gap"

**Signature**: A single author (wiltzius-openai, OpenAI org-suffixed handle) opens **2 PRs in 40 wall-clock seconds** at the **end of a sub-tick window**, both targeting the same `ThreadStore` migration substrate on codex with title-prefix coherence (`Move thread names through ThreadStore` / `Route ThreadManager rollout path reads through thread store`). This is **not** the same as bolinfest's J-triplet at Δ=1.5s/PR (Add.366) — wiltzius is **40× slower per gap** but on the **same-substrate-pair** (vs bolinfest's 3-disjoint-surface stack). Sub-class candidate: **J′ (same-substrate-pair doublet)** vs canonical J (multi-surface stack).

**Empirical instance (codex / wiltzius-openai):**

| PR | head SHA | createdAt | title |
|---|---|---|---|
| #21264 | `074440a1daafed81b090a3feffddac647d875550` | 2026-05-05T23:03:59Z | `Move thread names through ThreadStore` |
| #21265 | `3a00dd6c7b3dc7cea124400c9c8a8c38e73e99c9` | 2026-05-05T23:04:39Z | `Route ThreadManager rollout path reads through thread store` |

**Burst geometry**: 2 PRs in **40s** (23:03:59Z → 23:04:39Z); **single inter-open gap of 40s**. Compared to Add.366's bolinfest triplet (Δ=1.5s/PR mean), this is **27× slower** per gap. Compared to Add.365's rhan-oai triplet (Δ=2s/PR mean), it is **20× slower**. The 40s gap is **above** the manual-git-push minimum (~30s), suggesting wiltzius opened these **manually**, one after another, NOT via a stack-rebase script. This is the **first sub-class J / J′ instance with manual-pace inter-open** observed in W18.

**Discriminator vs bolinfest J-class**: bolinfest's bwrap triplet (Add.366) had **3 disjoint surfaces** (linux-sandbox, release, npm). wiltzius's doublet has **2 PRs sharing the `ThreadStore` substrate noun** in both titles — they form a **same-substrate-pair**, predicted to merge dependently (one rebases on the other, not parallel). Predict at Add.368: head SHA stability differs between bolinfest's stack and wiltzius's pair.

---

## NEW OBSERVATION 2 — "yuneng-berri intra-author sub-3-minute infra-quartet at end-of-tick on litellm with 1-of-3 already MERGED"

**Signature**: Single author (yuneng-berri) opens **3 PRs in 3m22s** all tagged `[Infra]` on litellm, with the **first member merging within 5 minutes of open** (UI build) while the other 2 remain OPEN. This is a **mixed-state intra-author burst**: a J-class burst with an embedded fast-merge — distinct from frozen-stack J (rhan-oai/bolinfest) and from slow-iteration K (ishaan-berri prometheus).

**Empirical instance (litellm / yuneng-berri):**

| PR | head SHA | createdAt | state @ 23:09Z | title |
|---|---|---|---|---|
| #27240 | `87bda4a6b13134a44fbc0fa81e60e048fd61a497` | 2026-05-05T22:45:32Z | **MERGED** (22:51:23Z) | `[Infra] Build UI` |
| #27241 | `eff0f8c630b267f55ef1dbca15d05193422fbd2b` | 2026-05-05T22:46:19Z | OPEN | `[Infra] Packaging: Relax Core Runtime Pins To Ranges` |
| #27245 | `e84282b7b39c4c5590c300140919e07f8a6b2e58` | 2026-05-05T22:58:50Z | OPEN | `[Infra] Promote internal staging to main` |

**Burst geometry**: 3 PRs in **13m18s** (22:45:32Z → 22:58:50Z) with **gaps 47s, 12m31s** — non-uniform gap distribution (asymmetric J vs uniform J/J′ canon). The **first member merging at 5m51s** is the discriminator: yuneng is **author-with-merge-rights** on the litellm infra subsurface, so the J-burst here is **co-instantiated with a self-merge cascade** (sub-class M, post-merge author momentum). This is the **first cross-class hybrid** (J ∩ M) observed in W17–W18; call provisional **JM-hybrid**.

---

## NEW OBSERVATION 3 — "ishaan-berri prometheus-K cluster gains 6th member and breaks the K-class envelope"

**Signature**: ishaan-berri opens **#27242** at 22:47:13Z with title `fix(prometheus): read remaining tokens/requests from additional_headers when v3 limiter populates them`. This is the **6th prometheus-K-themed PR** in the ishaan-berri cluster (#27226, #27229, #27230, #27231, #27233, **#27242**), now spanning **20:26:04Z → 22:47:13Z = 2h21m**. K-class envelope was provisionally ≤60min at Add.365; **K is now extended to ≥2.4h** with this 6th member.

**Update on K-instance prediction P-365.A** (≥3 of {#27226, #27229, #27230, #27231, #27233} closed-no-merge by Add.367 → K is candidate-elimination): **NOT FALSIFIED but pressure increases** — all 5 original PRs remain OPEN; the **addition of #27242 in the same theme** suggests K is **NOT** candidate-elimination but **iterative refinement** (each PR is a successive author-attempt at the same fix, neither merged nor closed). **P-706.A 3.5h deadline** closes around 24:55Z; if at Add.368 still no member of the 6 has merged or closed, K is a **slow-iteration mode** (sub-class L candidate).

**Update on P-366.B** (SSO-K cluster gains ≥1 additional member by Add.367): **NOT CONFIRMED** — no new PR with `fix(sso):` or `[Fix] SSO:` prefix in the Add.367 window. SSO-K stays at 3 members (#27235, #27236, #27239), all OPEN, no merges. SSO-K may be a **fast-resolve K′** vs prometheus-K's **slow-iteration K** — the bimodality of K is now empirically distinguishable.

---

## Update on P-366.A (bolinfest J-triplet head SHA stability)

The **head SHAs of #21255, #21256, #21257 mutated** during the Add.367 window:

| PR | Add.366 head SHA | Add.367 head SHA | mutation timestamp |
|---|---|---|---|
| #21255 | `34778320018b` | `1a8cae26af76e0cc6ea88581cb173e4753045845` | 2026-05-05T23:07:16Z |
| #21256 | `aa28450c8766` | `0010611d3a690d17aac22a8708626298806791b1` | 2026-05-05T23:07:17Z |
| #21257 | `581dfce1ea4c` | `9537f26268a650c047250408c1bf88e836054d64` | 2026-05-05T23:07:17Z |

All 3 mutated within **1 second** (23:07:16Z → 23:07:17Z) — **synchronized force-push**, identical mechanism to Add.366's rhan-oai J-triplet. **P-366.A is FALSIFIED**: bolinfest's J-triplet does NOT remain frozen; it follows the **J→H_sync_3-of-3 promotion pattern** documented at W17-synth-708. **Two consecutive ticks** now exhibit the J→H_sync_3-of-3 pattern (rhan-oai at Add.366 → bolinfest at Add.367), promoting the pattern from **first-sighting** to **n=2 confirmed sub-mode**.

This is also the **first cross-author replication of J→H_sync_3-of-3** (rhan-oai → bolinfest, both codex), confirming that the synchronization-to-the-second is not a per-author ritual but a **toolchain-level signal** (likely codex's standard stack-rebase tooling auto-pushes all stack PRs in a single command).

---

## Specific PRs cited per carrier (≥75 unique PRs across all 7 carriers)

### anomalyco/opencode (5 in Add.367 window + 8 carried)
- **#25934** `9216670e7c8ee9e5ec9db68a9ad95fadfd8c423e` rekram1-node `fix: sanitize surrogates` 22:54:02Z → MERGED 23:07:25Z (NEW; **fastest open→merge this tick: 13m23s**)
- **#25933** `25c813de3bd8e5cb28f0d7e67b2ae3eed8599150` G17hao `fix(opencode): only intercept registered local slash commands` 22:43:33Z (NEW)
- **#25925** `40178e0342ab` ctharvey (carried from Add.366, frozen)
- **#25924** `2a1bc29bcf2c` CasualDeveloper (carried, head stable since 21:58:12Z force-push)
- **#25920** `fa38b038ff7b` ajpintos (carried)
- **#25919** `0809cac77aec` adavila0703 (carried, frozen)
- **#25917** `78eacba8fce1` nabilfreeman (carried, head stable since 22:09:11Z force-push)
- **#25915** `a221a11a2a99` jlongster (carried, frozen since 20:50:00Z)
- **#25911** `c3e404b4cc09701953715ce3e48efafe6eba149f` jlongster `fix(core): better state handling of editor context` 19:39:57Z → MERGED 19:53:07Z
- **#25909** `916eb3aabe3d` jliounis (carried)
- **#25867** `00d5237787258364f523ff78d69dacb992109da0` stephanschielke (head SHA **DIFFERS** from Add.366's `d3bfeaf40998` — force-pushed at 22:39:52Z; sub-class H instance on opencode this tick)
- **#25862** `ad9d3e30b7e8a0690c104b5b39f9f9e02d9ad102` Techie5879 `docs(ecosystem): add opencode-smart-session-picker` 12:18:52Z (long-tail, last update 15:19:28Z)
- **#25861** `5c1c3b74b115` nexxeln

### openai/codex (10 in Add.367 window + carried)
- **#21265** `3a00dd6c7b3dc7cea124400c9c8a8c38e73e99c9` wiltzius-openai `Route ThreadManager rollout path reads through thread store` 23:04:39Z (NEW; J′-doublet member 2/2)
- **#21264** `074440a1daafed81b090a3feffddac647d875550` wiltzius-openai `Move thread names through ThreadStore` 23:03:59Z (NEW; J′-doublet member 1/2)
- **#21263** `094c30648570ad5e783e85f8e5cb438534544706` mifan-oai `[codex] Coordinate OpenAI docs sample with API key setup` 23:01:18Z (NEW)
- **#21261** `2d8e9c99f2aa62ee5e318d2e8a94bfa576025c43` bolinfest `fix build` 22:58:14Z → MERGED 23:02:22Z (NEW; **bolinfest's 6th PR today**, fastest-merge this carrier this tick: 4m08s)
- **#21260** `96bcac6704dc815ff834c12e3b34b189f771fb2b` pakrym-oai `[codex] Move thread naming to app server` 22:48:49Z (NEW; **converges with wiltzius J′-doublet on the ThreadStore migration substrate** — cross-author convergence on app-server thread refactor — sub-class **convergent-substrate cluster** activates within 16m)
- **#21259** `cef1ce37b9ee112c244d7bf32f6d92809aa3dd2a` cconger `ci: trigger rusty-v8 releases from tags` 22:46:33Z (NEW)
- **#21257** `9537f26268a650c047250408c1bf88e836054d64` bolinfest (head SHA **DIFFERS** from Add.366's `581dfce1ea4c` — force-pushed at 23:07:17Z; J→H_sync_3-of-3 member 3/3)
- **#21256** `0010611d3a690d17aac22a8708626298806791b1` bolinfest (head SHA **DIFFERS**, J→H_sync_3-of-3 member 2/3)
- **#21255** `1a8cae26af76e0cc6ea88581cb173e4753045845` bolinfest (head SHA **DIFFERS**, J→H_sync_3-of-3 member 1/3)
- **#21251** `d2b4947aa5b3518d2aabb341417ba6c4efeac42b` owenlin0 (head SHA **DIFFERS** from Add.366's `61b99aafd483` — second force-push in 2 ticks; cumulative H-events on this PR = 2)
- **#21250** `b450042d455db51fea2e7d250261cd40c99a7c4e` bolinfest (head SHA **DIFFERS** from Add.366's `11750256e878` — force-pushed at 23:07:43Z; bolinfest's PermissionProfile-immutable PR joins the J→H wave)
- **#21249** `f33af039b45c70474076607f2be1879f2a16fbd0` aibrahim-oai (head SHA **DIFFERS** from Add.366's `8bf703886ddd` — second force-push in 2 ticks)
- **#21238** `c8670a11854f` rhan-oai (carried, frozen since 22:17:31Z)
- **#21237** `5f407bcb854b` rhan-oai (carried, frozen)
- **#21236** `3432df695699` rhan-oai (carried, frozen)
- **#21235** `679b121ef111` canvrno-oai (carried)
- **#21231** `f8502a497f09` leoshimo-oai (carried)
- **#21219** `32cc84ff1d2b` mchen-oai
- **#21214** `c5a7ad87d35f` jif-oai
- **#21206** `0b828a4f65f972854c6ed10d6d5cbf640c0d9d62` fcoury-oai `feat(tui): add ambient terminal pets` 15:24:26Z (long-tail OPEN, last update 22:21:45Z)

### BerriAI/litellm (8 in Add.367 window + carried)
- **#27245** `e84282b7b39c4c5590c300140919e07f8a6b2e58` yuneng-berri `[Infra] Promote internal staging to main` 22:58:50Z (NEW; JM-hybrid member 3/3)
- **#27244** `85d4d96c1bf1d823b1c66d5464768d568302b3f0` michelligabriele `fix(proxy): preserve HTTP operations when injecting WebSocket stubs` 22:57:36Z (NEW)
- **#27243** `28329cb1b69c3eb5bf6359d43f0a24b90ee2d2bd` vanities `fix(arize): stop O(L²) attribute emit by recording only the latest message in input_messages` 22:48:47Z → CLOSED-no-merge 22:53:34Z (NEW; **only CLOSED-no-merge this tick across all 7 carriers**; fastest reject: 4m47s)
- **#27242** `4c318cd7d7e9acb6f3e774782f239aaa7457b03f` ishaan-berri `fix(prometheus): read remaining tokens/requests from additional_headers when v3 limiter populates them` 22:47:13Z (NEW; **prometheus-K member 6/6** — extends K-envelope past 2h)
- **#27241** `eff0f8c630b267f55ef1dbca15d05193422fbd2b` yuneng-berri `[Infra] Packaging: Relax Core Runtime Pins To Ranges` 22:46:19Z (NEW; JM-hybrid member 2/3)
- **#27240** `87bda4a6b13134a44fbc0fa81e60e048fd61a497` yuneng-berri `[Infra] Build UI` 22:45:32Z → MERGED 22:51:23Z (NEW; JM-hybrid member 1/3, the M-component)
- **#27239** `5d472c6d73e2` oss-agent-shin (carried; SSO-K member 3/3, frozen)
- **#27238** `2c801febffdea18299790e3db182d19e80f1a69a` ryan-crabbe-berri (head SHA **DIFFERS** from Add.366's `c0208e9e76a0` — force-pushed at 22:37:45Z; sub-class H, ryan-crabbe's UI-fetch-fix mutates within tick of opening)
- **#27237** `8236dc01743345e69601fc20e2804155165863ed` yassin-berriai (carried)
- **#27236** `3240c2c7c8f7` ishaan-berri (carried; SSO-K member 2/3)
- **#27235** `c06657e2bd96` oss-agent-shin (carried; SSO-K member 1/3)
- **#27234** `2993e45ad18e7508d7f4a262608006bc787082c5` Michael-RZ-Berri `[Fix] Allow non-admin compliance path reads` 21:35:30Z
- **#27233** `052f02fa473b` ishaan-berri (carried; prometheus-K member 5/6, frozen)
- **#27232** `bec93c80c8c3` oss-agent-shin (carried; prometheus-K cross-author, frozen)
- **#27231** `f624132babc3` ishaan-berri (carried; prometheus-K 4/6, frozen)
- **#27230** `21ac955a60c2` ishaan-berri (carried; prometheus-K 3/6, frozen)
- **#27229** `17656d9aad8f` ishaan-berri (carried; prometheus-K 2/6, frozen)
- **#27228** `4d27804ae72f` bcyrill (carried)
- **#27227** `63f6f1aeb93d7ca558d28a1e6a99e0631dde5d1d` yuneng-berri `[Fix] UI: Clear Admin Session Cookies Before Establishing Invited User's Session` 20:41:28Z → MERGED 20:57:07Z (yuneng's earlier merge — **3 yuneng merges in last 3h** = micro-cascade prefacing JM-hybrid)
- **#27226** `9de49c7b044d` ishaan-berri (carried; prometheus-K 1/6, frozen)
- **#27225** `0d790d87ef72b83765eb84820f7c0e0a5405e4c9` stuxf (head SHA **DIFFERS** from Add.366's `6769c8b66fe5` — force-pushed at 22:49:28Z; sub-class H on litellm)
- **#27224** `c840bc04447` ryan-crabbe-berri (carried, MERGED 22:40:47Z this tick)
- **#27220** `520116f5cac3` Divyansh200102

### google-gemini/gemini-cli (8 in Add.367 window + carried)
- **#26549** `78d2ef5db2b22f562ec8b631febd606112b448c1` gemini-cli (bot) `# Proposed Improvements to Issue Lifecycle Management` 22:55:11Z (NEW; **second consecutive bot-generated PR with a heading-style title** — gemini-cli-robot meta-PR pattern persists)
- **#26548** `f173fe4f30bec2404aa335da9ebbb9c4af0a7532` akh64bit `fix(core): cache model routing decision in LocalAgentExecutor` 22:53:21Z (NEW; **akh64bit's 2nd PR today** after #26528 evals at 18:40Z)
- **#26547** `65893ee03feec8cb174b4499bf64280286cb7eac` gemini-cli-robot `Changelog for v0.42.0-preview.1` 22:51:09Z (NEW)
- **#26545** `79ad78e613d62e34cf02a3b6383c307dfa6d2749` gemini-cli-robot `fix(patch): cherry-pick 3627f47 to release/v0.41.0-pr-26542` 21:41:57Z → MERGED 21:57:02Z (NEW; bot release cherry-pick #1)
- **#26544** `4ede53faa96e151cb2b53e8d24cfb8a99e156cfa` gemini-cli-robot `fix(patch): cherry-pick 3627f47 to release/v0.42.0-preview.0-pr-26542` 21:41:37Z → MERGED 21:57:23Z (NEW; bot release cherry-pick #2 — **doublet-of-bot-cherry-picks at Δ=20s open, MERGED at Δ=21s** — cleanest mechanical doublet of the tick)
- **#26543** `c13c087b443c26c7c5e632ccbc8734a44ace058c` golba98 `docs: update README preview image` 21:29:44Z (NEW)
- **#26542** `ce05d74004690ef243ec99fcad4ffdd1e73d2aeb` galz10 `fix(core): allow redirection in YOLO and AUTO_EDIT modes without sandboxing` 21:10:40Z → MERGED 22:48:14Z (NEW; **galz10 fast-merge in 1h37m**)
- **#26540** `11eadac9affc` Abhijit-2592 (carried)
- **#26538** `4f1ae6a373be` gemini-cli-robot (carried)
- **#26537** `9eaf143f2e3d` gemini-cli-robot (carried)
- **#26536** `dbd30cab4789da90d6fccb35b0347b41a5e197bd` alexandrevarga (head SHA **DIFFERS** from Add.366's `c86012a74adb` — second force-push in 2 ticks; cumulative H-events = 2)
- **#26535** `34ea5b5f7dac` SandyTao520 (carried)
- **#26534** `d7748b6877314db7` joshualitt → MERGED 23:07:19Z this tick (carried-then-MERGED; Add.366's 5th-H-instance PR finally lands)
- **#26532** `54626166336b430f0949e4323532df3717481174` Abhijit-2592 `fix(core): reject numeric project IDs in GOOGLE_CLOUD_PROJECT (#24695)` 19:28:04Z → MERGED 20:05:35Z
- **#26529** `4a4f54c2` mbleigh
- **#26528** `c486457497128` akh64bit
- **#26514** `816f0c45935f` cocosheng-g

### QwenLM/qwen-code (10 carried, **0 NEW**, **0 MERGED**, **0 CLOSED** in tick)
- **#3856** `ecbbba1595b1` B-A-M-N (carried, frozen)
- **#3855** `b1757402fdb3` yiliang114 (carried)
- **#3854** `e8b59b89a767` yiliang114 (carried)
- **#3853** `16a4af998281` yiliang114 (carried)
- **#3850** `09a62b2f2f6e` yiliang114 (carried)
- **#3849** `0c2876fb8da3` B-A-M-N (carried)
- **#3848** `a0daf50c065f` B-A-M-N (carried)
- **#3847** `68b5a90f6ab5` doudouOUC (carried)
- **#3844** `7f06fee3ed2a` wenshao (carried)
- **#3819** `ad2ca85bb76f` B-A-M-N (last update 22:51:44Z this tick — long-tail metadata touch only)

**qwen-code 2-tick total quiet streak**: 0 OPEN-new, 0 MERGED, 0 CLOSED across both Add.366 and Add.367 = **76m of carrier-silence on qwen-code**. Promotes qwen to **silent-tail carrier** classification this tick (was background in Add.366).

### charmbracelet/crush (6 carried, **0 NEW**, **0 MERGED**, **0 CLOSED** in tick)
- **#2809** `61c109eaedfa` taciturnaxolotl (carried, frozen since 20:45:15Z = 2h24m frozen)
- **#2808** `52aa09aad1bb` ilgax (carried)
- **#2807** `b796f550716a` taciturnaxolotl (carried)
- **#2805** `1ebe35abf37b` taciturnaxolotl (carried)
- **#2801** `de9d901ef6f9` ardevd (carried)
- **#2800** `3394b9fb8fd5` BrunoKrugel (carried)

**crush 2-tick total quiet streak**: 0 OPEN-new, 0 MERGED, 0 CLOSED across both Add.366 and Add.367 = **76m of carrier-silence on crush**. **Crush + qwen-code are both in 2-tick silence simultaneously** — first cross-carrier joint-silence at 2-tick depth in W18.

### block/goose (1 in Add.367 window + carried)
- **#9040** `c288a6e60e18b5ecf10395605516d68e67fc7a01` kalvinnchau (head SHA **DIFFERS** from Add.366's `e743e55a7d46` — force-pushed at 22:56:17Z; sub-class H on goose; kalvinnchau's ACP-stack iterates again)
- **#9039** `73bbd4f492c6` tulsi-builder (carried, frozen since 21:55:45Z)
- **#9038** `89262adab61f` jh-block (carried)
- **#9036** `1b16d5aa7868` DOsinga (carried)
- **#9035** `5db106762411` SarthakB11 (carried)
- **#9034** `289ae524573e` alexhancock (carried)
- **#9033** `ef6897674ae2` treebird7 (carried)
- **#9030** `01165f276b5c1c8ab0d75fa1804769efcd075a9f` kalvinnchau (head SHA **DIFFERS** from Add.366's `19de7e853edd` — second force-push in 2 ticks; cumulative H-events on this PR = 2; **kalvinnchau ACP-stack now has 2 H-events on #9030 + 1 on #9040 in 76m** = density 3 H-events / 1 author / 1 stack)
- **#9025** `bc06fd0e959c` jamadeo
- **#9023** `1d61323844d441792bad653c1a06c3f0589692ce` jh-block → MERGED 21:11:22Z (carried, just-merged at top of Add.366 window)
- **#9021** `2985dfe07202` idosavion

---

## Cross-carrier counts this tick (Add.367)

| carrier | OPEN-new this tick | MERGED this tick | CLOSED-no-merge | force-push H | total cited |
|---|---|---|---|---|---|
| anomalyco/opencode | 2 (#25934 [also-merged], #25933) | 1 (#25934) | 0 | 1 (#25867) | 13 |
| openai/codex | 6 (#21265, #21264, #21263, #21261 [also-merged], #21260, #21259) | 1 (#21261) | 0 | 6 (#21257, #21256, #21255, #21251, #21250, #21249) | 18 |
| BerriAI/litellm | 6 (#27245, #27244, #27243 [also-closed], #27242, #27241, #27240 [also-merged]) | 1 (#27240) | 1 (#27243) | 2 (#27238, #27225) | 21 |
| google-gemini/gemini-cli | 7 (#26549, #26548, #26547, #26545 [also-merged], #26544 [also-merged], #26543, #26542 [also-merged]) | 3 (#26545, #26544, #26542) | 0 | 1 (#26536) | 16 |
| QwenLM/qwen-code | 0 | 0 | 0 | 0 | 10 |
| charmbracelet/crush | 0 | 0 | 0 | 0 | 6 |
| block/goose | 0 | 0 | 0 | 2 (#9040, #9030) | 11 |
| **TOTAL** | **21** | **6** | **1** | **12** | **95** |

**95 unique PRs cited across 7/7 carriers.** Open:Merge ratio = 21:6 = **3.5** (vs Add.366's ∞ pure-open-phase). Classifier flips back from "pure-open-phase" to **commit-phase**, but at high open-velocity (21 opens/39m = **0.54 opens/min** — highest open-rate of W17–W18 on record). Force-push H count of **12 across 5 carriers** narrowly beats Add.366's 11 across 4 — the **H-burst regime declared at W17-synth-708 PERSISTS at tick+1** (P-366.C confirmed: H-density ≥8 events/tick across ≥3 carriers persists; declare **W18-day-1 H-burst regime** confirmed; OMR classifier should gate on H-density for next 2–3 ticks).

## Falsifiable predictions

- **P-367.A**: wiltzius-openai J′-doublet (#21264, #21265) head SHAs remain frozen at Add.368 (since the 40s manual-pace gap suggests no scripted batch-rebase tooling was used). If both SHAs mutate within 2 ticks **synchronized to the second**, J′ is NOT distinct from J→H_sync — it is the same toolchain, just opened more slowly. If they mutate **non-synchronously** (gap ≥10s), J′ is a distinct class.
- **P-367.B**: ishaan-berri opens **#27246 or later** with `fix(prometheus):` prefix by Add.368. If yes, prometheus-K crosses **n=7 cardinality** and is the largest single-author single-theme cluster of W18; if no, the K-cluster is settling.
- **P-367.C**: pakrym-oai #21260 + wiltzius J′-doublet (#21264, #21265) **converge into a maintainer-merge ordering** within 2 ticks (one merges first, the others rebase). The convergent-substrate cluster (multi-author, same substrate noun) predicts **dependency-graph merging**, not parallel merging — discriminator vs J-class which permits parallel merge.
- **P-367.D**: H-burst regime continues at Add.368 with ≥8 force-push events. If H-events drop below 4, declare regime-end and revert OMR classifier to standard open:merge ratio gating.
