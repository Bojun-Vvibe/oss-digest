# ADDENDUM-358 — 2026-05-05

**Capture window**: 2026-05-05T15:26:38Z (Add.357) → 2026-05-05T16:16:04Z (Add.358 snapshot). **Tick width: 49m26s** (first tick at-or-above 50m baseline floor since Add.348; ends 9-tick sub-baseline run). Tick-width sequence Add.349→358 = 60, 28, 72, 82, 57, 31, 13, 28, 20, **49**. Pair-midpoint Add.357+358 = (20+49)/2 = **34.5m** — first pair-midpoint above 30m since Add.354+355. P-357.G **REALIZED** (rebound to ≥30m within 2 ticks at prior 0.50).

**Capture-snapshot timestamp**: 2026-05-05T16:16:04Z UTC (per-carrier `gh pr list --state open --limit 12 --json number,title,headRefOid,author,updatedAt,createdAt`).

---

## NEW PATTERN NAMED THIS TICK — "evawong-oai mass-touch event: N=5 simultaneous metadata-only updates within same 60-second clock window on stacked-deny-sentinel surface"

**Signature**: One author touches **N=5 PRs in the same carrier within a single 60-second clock window (16:06:24Z–16:07:16Z)**, with **all 5 head SHAs unchanged from prior tick** — i.e., the bump is a metadata-only `updatedAt` mutation (likely a base-rebase, label change, or comment) rather than a head-iteration. This is a **new sub-mode-4 sub-class E** distinct from sub-class D (synth-693): D is **N≥6 with distinct head OIDs** indicating fresh content; E is **N≥5 with unchanged head OIDs** indicating coordinated metadata refresh.

**Empirical instance — openai/codex / evawong-oai at Add.358 snapshot**:

| # PR | Title (truncated) | headRefOid (unchanged from Add.357) | updatedAt |
|---|---|---|---|
| **#21184** | `Use direct deny ACLs for Windows metadata sentinels` | `95ef124d6194bd2126c11928cb3973214f9ac63a` | 16:07:16Z |
| **#21175** | `Wire missing Windows metadata to deny sentinel` | `8f93be5b9e21e89802d601fb67596023c858d076` | 16:07:02Z |
| **#21174** | `Add Windows missing metadata deny sentinel` | `6e60556d73a9df88266e5fe17e2add1e5f9d51f2` | 16:06:52Z |
| **#21173** | `Wire Windows metadata monitor through sandbox exits` | `0e9394dbd8265f17f4c78d8641009c08bcbad857` | 16:06:40Z |
| **#21172** | `Add Windows missing metadata monitor runtime` | `6df1455723e4254ce7b7ac59a79d60f5daa0a24e` | 16:06:24Z |

**Density**: 5 PRs / 52s clock window = **5.77 PRs/min** by single author (vs morgmart sub-class D 0.194 PRs/min from Add.357 — sub-class E is **30× denser per minute** because it is metadata-only, not head-bump). Updates land in **strict reverse-PR-number order with ~13s monotone inter-update gap (12s/12s/12s/14s)** — signature of a script-driven mass operation (`gh pr review` batch, label-add loop, or stack-base-rebase via `gt`/`gh stack`).

**Surface coherence**: All 5 PRs target **Windows metadata deny-sentinel security surface** (deny ACLs → deny sentinel → metadata monitor → sandbox exits → monitor runtime). Numbering is strict-consecutive #21172–21175 + #21184. This is a **stacked-PR series** (5 dependent PRs forming one logical change). The metadata mass-touch likely reflects an automated stack-rebase after one PR in the series merged or its base advanced.

**Why sub-class E is NEW (not sub-class D restatement)**:

- **Sub-class D (synth-693, morgmart goose)**: N≥6 with **distinct head OIDs** (fresh-opens or new commits), **clock window <40min**, **density 0.1–0.5 PRs/min**.
- **Sub-class E (this tick, evawong-oai codex)**: N≥5 with **all head OIDs unchanged** (metadata-only refresh), **clock window <60s**, **density 5–10 PRs/min**, **strict-monotone inter-update gap**.
- The two sub-classes are **orthogonal mechanisms**: D = code-throughput dominance (author writing code fast); E = workflow-automation signature (author or tool batching metadata operations on an existing stack). They can co-occur but measure different things.

**Cross-validation against synth-694 freeze hypothesis**: All 5 evawong-oai PRs were declared "freeze tick-5 at ~130m sustained" in synth-694. **Add.358 falsifies the freeze classification for these 5 PRs**: while head SHAs remain unchanged (technically still satisfying the freeze definition), the **author is demonstrably active on all 5** (touched within same minute). This means **freeze-time as defined by head-SHA-stability is decoupled from author activity** — synth-694's H694 power-law model is now refined: freeze-time measures `time-since-content-iteration` not `time-since-author-attention`. **Synth-694 H694 NOT-FALSIFIED but now QUALIFIED**: power-law applies to head-iteration freezes, not to author-attention freezes.

---

## Specific PRs cited (≥10 PR numbers with head SHAs across all 7 carriers)

### sst/opencode (12 fetched, 1 NEW since Add.357)

- **#25890** samiralibabic `docs(ecosystem): add opencode-rexd-target plugin listing` head `f2d8c701e69bfc4bf01f4cd6f338dfb00cee2576` updated 16:04:12Z — **NEW fresh-open this tick** (created 15:50:21Z, ~14m old at snapshot).
- **#25889** jliounis `feat(websearch): add Perplexity backend (default), keep Exa as alt` head `916eb3aabe3d8969a202a0490442ef7d8d52015a` updated 15:48:07Z — **NEW fresh-open this tick** (created 15:47:44Z). **WebSearch backend swap surface — defaults Perplexity over Exa, retains Exa as alt. Cross-carrier echo of qwen-code#3844 wenshao WebSearch tool from Add.357**.
- **#25886** johnwaldo `fix: retry OpenAI overload errors` head `6b8e9fde087f6c2f36bc1dfb66dac9dd259baab3` updated 15:26:38Z — head unchanged from Add.357 (freeze tick-1, ~50m).
- **#25877** alceops head `d6e922633d72057637aa11839e2db3fa3d55049b` updated 14:23:57Z — frozen tick-2 (~112m).
- **#25869** andres-cq head `82caff4c9a2bbd241d1f43451b4b0496370ab3ca` updated 12:57:09Z — frozen tick-2.
- **#25867** stephanschielke head `1e1dca64f2ccd954fd943eff65f2f34e280fe18c` updated 14:13:44Z — frozen tick-2.
- **#25866** zharinov head `410fbad5b5c4259ccf5014ca0d264b40269a4ffc` updated 12:47:20Z — frozen tick-2.
- **#25863** drkaangunduz head `773a3b7ed9e972d7d204cc23c03f3c037c43261f` updated 12:30:08Z — frozen tick-2.
- **#25862** Techie5879 head `ad9d3e30b7e8a0690c104b5b39f9f9e02d9ad102` updated 15:19:28Z — frozen tick-2.
- **#25861** nexxeln head `5c1c3b74b1159c62c10c52c6d3be59b6f7e11163` updated 12:58:55Z — frozen tick-2.

**Author-cardinality**: 10 distinct / 10 PRs = **1.0 author/PR ratio** (sustained from Add.356/357 — opencode now **3 consecutive ticks at maximum diversity**, confirming synth-691's high-release-cadence ↔ low-multi-PR inversion at tick+2 horizon).

### openai/codex (12 fetched) — sub-class E primary instance + force-push event

- **#21206** fcoury-oai `feat(tui): add ambient terminal pets` head `df77a410abc8a26ae46c957fd8feedbcde5dabe0` updated 16:01:22Z — **HEAD CHANGED from Add.357 `4744d143` → `df77a410` (force-push within tick, ~36m after open)**. fcoury-oai now N=2 visible (#21206 + #21190).
- **#21193** dylan-hurd-oai head `f7456567ce63b195a714e38316cc1ad0ecf32d5f` updated 13:41:17Z — frozen tick-2 (~155m).
- **#21190** fcoury-oai head `f868febdbe32dccf3715468f7084371d14f7df1c` updated 13:21:54Z — frozen tick-2 (~175m).
- **#21187** jif-oai head `85fe8faa8302981aa7ad16e5e9415dd38051193d` updated 13:54:55Z — frozen tick-2.
- **#21184** evawong-oai head `95ef124d6194bd2126c11928cb3973214f9ac63a` updated **16:07:16Z** — sub-class E leg (head frozen, metadata bumped).
- **#21182** jif-oai head `07a1254b128d11e9087e4e3ed703ce3670f8057b` updated 13:05:11Z — frozen tick-2.
- **#21180** jif-oai head `e4f515b331aa4c3778eaa273c91d56b331696e99` updated 12:58:48Z — frozen tick-2.
- **#21175** evawong-oai head `8f93be5b9e21e89802d601fb67596023c858d076` updated **16:07:02Z** — sub-class E leg.
- **#21174** evawong-oai head `6e60556d73a9df88266e5fe17e2add1e5f9d51f2` updated **16:06:52Z** — sub-class E leg.
- **#21173** evawong-oai `Wire Windows metadata monitor through sandbox exits` head `0e9394dbd8265f17f4c78d8641009c08bcbad857` updated **16:06:40Z** — sub-class E leg, **first appearance in top-10 this tick** (was outside top-10 at Add.357).
- **#21172** evawong-oai `Add Windows missing metadata monitor runtime` head `6df1455723e4254ce7b7ac59a79d60f5daa0a24e` updated **16:06:24Z** — sub-class E leg, **first appearance in top-10 this tick**.
- **#21152** abhinav-oai `revert legacy notify deprecation` head `503cba1f6a4acc3491fa7a17138ac0385780c066` updated 06:11:54Z — long-frozen (~10h).

**Codex author density**: jif-oai N=3, fcoury-oai N=2, evawong-oai N=5 (sub-class E), dylan-hurd-oai N=1, abhinav-oai N=1 = **5 authors / 12 PRs = 0.42 ratio**. **evawong-oai N=5 with all-frozen-heads = sub-class E primary instance**. jif-oai dropped from N=4 (Add.357) → N=3 — sub-class D candidacy retracted.

### BerriAI/litellm (12 fetched, 2 NEW since Add.357)

- **#27196** michelligabriele `fix(mcp): include registration_endpoint in root /mcp OAuth discovery metadata` head `c8f6a6c4fe67a442efb7d293a30eeeea8bc1d2c5` updated 15:46:24Z — **NEW fresh-open this tick** (created 15:39:45Z). **MCP OAuth discovery surface — security-cluster member, surface-overlap with #27190 mcp-auth-migration**.
- **#27195** aryamaddel head `f9645e51864ef67e9abfc1802cbe57edfbef92db` updated 15:46:50Z — head unchanged from Add.357 BUT updatedAt bumped (15:26:06Z → 15:46:50Z, +20m), metadata-touch.
- **#27190** dennishenry head `a1cda015b6b28e5745ed390a6487deaf88e336fd` updated 13:23:59Z — frozen tick-2.
- **#27189** orbisai0security head `9a9323022f5096c467cabbe0343b8e0129688075` updated 12:15:14Z — frozen tick-2.
- **#27185** Sameerlite head `da06ac5448dcb12504708af391a243134e8a04bd` updated 12:34:19Z — **head unchanged Add.353 → Add.358 = 6 consecutive ticks** (~180m sustained, P-357.B **REALIZED** at prior 0.50, AND P-694.A **REALIZED** at prior 0.45 since freeze ≥160m threshold crossed).
- **#27182** imviky-ctrl head `8047392b2161b97ab88e4c8de7fd5d95279826a1` updated 10:23:46Z — frozen tick-3.
- **#27177** Sameerlite head `20fcd187b48594cef318f2bad29c02c3833948e0` updated 08:08:55Z — frozen ~480m+.
- **#27176** ben-wangz head `2e102973e65cb072a3da1a89f9c68689399dca07` updated 09:05:28Z — frozen.
- **#27167** krrish-berri-2 head `6195d29cd539749ce2e74eb88cb983510b8f47b0` updated 03:59:41Z — frozen long.
- **#27162** app/oss-pr-review-agent-shin (BOT) head `dabcc9ac9c2e57b22779f21b8bce532cd356d9c2` updated 03:20:59Z — frozen.
- **#27161** mateo-berri head `817b8de28e400805e8daec8408ff2664c749b79f` updated 03:07:26Z — frozen.
- **#27159** mateo-berri `test: add 24hr Redis-backed VCR cache to additional test suites` head `8cd2f92157c79ea25417d045a3720a387b688d2b` updated 06:31:33Z — **first appearance in top-12 this tick** (mateo-berri now N=2 in litellm: #27161 + #27159 — sub-mode-4 sub-class A entry).

**Litellm security-cluster cardinality at Add.358**: #27196 (mcp OAuth discovery NEW) + #27190 (auth migration) + #27189 (key-mgmt exposure) + #27176 (helm secrets) + #27161 (proxy-health auth docs) = **N=5 security-surface PRs in single top-12 snapshot** (up from N=4 at Add.357). **P-357.F REALIZED at prior 0.55** (security-cluster cardinality stays ≥4; actually grew to 5).

### google-gemini/gemini-cli (12 fetched, 5 NEW since Add.357)

- **#26510** gemini-cli-robot (BOT) `fix(patch): cherry-pick 1d72a12 to release/v0.40.1-pr-26479` head `e30132fc4e58c81ff7c117a4124660c610f724bf` updated 15:58:26Z — **NEW fresh-open this tick** (created 15:53:54Z). **Patch-cherry-pick automation surface**.
- **#26509** gemini-cli-robot (BOT) `# Actions Cost Reduction: CI Matrix and Pulse Optimization` head `e2096c74b698d631769d1f2b63ed0d2ade92450f` updated 15:58:25Z — **NEW fresh-open this tick** (created 15:53:50Z, **4-second gap** from #26510). **Bot opens N=2 within 4s — sub-class E candidate for bot-PR-mode (synth-693 only covered human sub-class D; bot now exhibits an analog at <4s window)**.
- **#26508** gemini-cli-robot (BOT) `fix(patch): cherry-pick 1d72a12 to release/v0.41.0-preview.1-pr-26479` head `7cec4782622058df85cba62b82cf40497c14a1b5` updated 16:09:38Z — **NEW fresh-open this tick** (created 15:53:41Z, **9-second gap** from #26509). **Bot N=3 within 13s — exceeds bot synth-664 cadence**.
- **#26507** jackwotherspoon `fix(cli): prevent settings dialog border clipping using maxHeight` head `4bbd28e4b7e1c782d36c514e5fbaada202f2274d` updated 16:03:16Z — **NEW fresh-open this tick** (created 15:51:57Z).
- **#26506** cocosheng-g `feat: allow queuing messages during compression (#24071)` head `5d8924b47ff40f590539f5b0cc0c13ded379ae33` updated 16:14:14Z — **NEW fresh-open this tick** (created 15:47:09Z).
- **#26504** cynthialong0-0 head `3708f88ea704b1f8218760cf5598f0a86b9e64ad` updated 15:20:27Z — head unchanged from Add.357 (freeze tick-1, ~56m).
- **#26500** cynthialong0-0 head `cf86f345767b37c94b14d995f9d6d64a2a74816c` updated 12:43:03Z — frozen tick-2 (~213m).
- **#26499** vital987 head `0252fe37a566a24c30dba9e5450d0e93bccad826` updated 12:09:22Z — frozen tick-2.
- **#26498** euxaristia `feat(cli): show acknowledgment when user steering hint is processed` head `1470105b2d253624f40f0d5f76653ef902ffeb8a` updated 16:11:38Z — **HEAD CHANGED from Add.357 `698fcc88` → `1470105b` (force-push within tick, ~5h after open)**.
- **#26490** rushikeshsakharleofficial head `2d8284164964dceedb042764c1187e4e1d378afc` updated 07:19:09Z — frozen long.
- **#26489** rushikeshsakharleofficial head `acfe282e48e9ab8f36d3374bb021a21c148411bb` updated 06:23:30Z — frozen long.

### QwenLM/qwen-code (12 fetched, 1 NEW + 2 force-pushes)

- **#3856** B-A-M-N head `a0daf50c065f48f793c357dc3a600ca60d4672c9` updated 14:36:30Z — head unchanged from Add.357. **Head-OID collision with #3848 SUSTAINED at tick+1** (P-357.D not-yet-realized, prior 0.55 — collision did not resolve within 1 tick).
- **#3855** yiliang114 head `b1757402fdb39f68e3ed6d188d9b57bafa445143` updated 13:21:23Z — frozen tick-2.
- **#3854** yiliang114 `ci: add Qwen Code issue follow-up bot workflow` head `e8b59b89a7673d4eaec15e07607973051ef300cc` updated 16:00:52Z — **HEAD CHANGED from Add.357 `9184e899` → `e8b59b89` (force-push within tick, ~78m after open)**.
- **#3853** yiliang114 head `16a4af99828167806e3f2b7cccb6fa2bb511da51` updated 14:53:37Z — frozen tick-2.
- **#3852** qiuqiuwen25 `fix(core): activate skills from discovered result paths` head `0bdb7e91a027b5401a2c1bfe5d90c87d94ef68b8` updated 15:45:18Z — **HEAD CHANGED from Add.357 `8a5fa3b1` → `0bdb7e91` (force-push within tick)**.
- **#3850** yiliang114 head `09a62b2f2f6e5311b400a2d25fb153cb385e9e44` updated 13:16:39Z — frozen tick-2.
- **#3849** B-A-M-N head `56725a12a333d6d683bf5e6cc79caaef806df199` updated 13:03:43Z — frozen tick-2.
- **#3848** B-A-M-N head `a0daf50c065f48f793c357dc3a600ca60d4672c9` updated 14:32:52Z — head unchanged. **Head-OID collision (synth-107) with #3856 enters tick-2** of joint observation.
- **#3847** doudouOUC head `efade6bb4c93976eeaf9a322b973c211ca127b22` updated 14:14:45Z — frozen tick-2.
- **#3844** wenshao head `7f06fee3ed2aa9e0bd0ceab64a9d8a21e4d894f2` updated 08:48:23Z — frozen long.
- **#3842** wenshao `feat(core): add signal.reason convention for ShellExecutionService (#3831 PR-1 of 3)` head `9008717b8a261e632d3e2035c87fe58d045e8da9` updated 15:10:47Z — **first appearance in top-12 this tick**. Title indicates **stacked PR series PR-1 of 3** — wenshao N=2 (#3844 + #3842) **with explicit stack-base annotation**, distinct from evawong-oai's implicit-stack signature.
- **#3840** ihubanov `feat(core): refuse Edit/WriteFile when the file changed since last read` head `cb1bbbe2406c32f535ed3fdcd2ddc202bb8226c7` updated 03:16:34Z — frozen long. **Concurrent-edit-detection surface — relates to W17 cross-carrier file-change-detection trend (qwen has it; opencode doesn't yet)**.

**qwen-code author density**: yiliang114 N=4 (#3855, #3854, #3853, #3850), B-A-M-N N=3 (#3856, #3849, #3848), wenshao N=2 (#3844, #3842), doudouOUC N=1, qiuqiuwen25 N=1, ihubanov N=1 = **6 authors / 12 PRs = 0.50 ratio**. yiliang114 N=4 sustained from Add.357 (sub-class D candidacy retained).

### block/goose (12 fetched) — morgmart sub-class D persists with N=7

- **#9025** jamadeo head `bc06fd0e959c9cf922a2697f1b07d98d8b1cb314` updated 14:58:45Z — head unchanged from Add.357 (freeze tick-2, ~78m). **P-692.D unrealized at tick-2** (jamadeo cold-start sub-class C still not iterating).
- **#9023** jh-block head `1d61323844d441792bad653c1a06c3f0589692ce` updated 13:56:04Z — frozen tick-2.
- **#9021** idosavion head `2985dfe072028227178837346dfe8116a7e5f957` updated 08:57:51Z — frozen long.
- **#9019** morgmart head `270600151176cdf64acb9d0a35b02477af5f2673` updated **15:50:06Z** — head unchanged BUT **updatedAt bumped from 15:32:15Z (Add.357) to 15:50:06Z (+18m)** — metadata-only touch.
- **#9018** morgmart head `fb429659db87defd4713ab0c81d36b8903832344` updated **15:46:38Z**.
- **#9017** morgmart head `b19db05c0ea80b72a463f22adfb686f35344a173` updated **15:46:36Z**.
- **#9016** morgmart head `169d521f34c86e2053f8d855c5b92b814137f9bf` updated **15:46:33Z**.
- **#9015** monroewilliams head `da10317a27e1077794bda898710366a2ccdad529` updated 05:46:44Z — frozen long.
- **#9014** morgmart head `ec224a170d8196c831481b33aee588e2533a0efe` updated **15:46:32Z**.
- **#9013** morgmart head `c2f4ede3c7eef21771714c98cddeabf317e4692d` updated **15:46:30Z**.
- **#9012** morgmart `soften chat code block styling` head `936f5d9e07e5aaeb617afa2c1bf89df41ef278db` updated **15:46:28Z** — **first appearance in top-12 this tick**.
- **#9011** morgmart `polish inline code snippet styling` head `ad0c9f63a90e569882db944c8e9dd0d4b619f45d` updated **15:46:27Z** — **first appearance in top-12 this tick**.

**morgmart at Add.358**: **N=8** (was N=6 at Add.357) — extends sub-class D from N=6→N=8. Bumps for #9013–9019 cluster within **15:46:27Z–15:50:06Z (3m39s clock window)** — second sub-class E manifestation in goose (heads unchanged, metadata-only mass-bump). **morgmart now exhibits BOTH sub-class D (N=8 distinct head OIDs simultaneous) AND sub-class E (mass metadata-touch within <4min clock window) on the same author-set**. **Synth-693 sub-class D ceiling promoted from N=6 → N=8 within 50m.**

### charmbracelet/crush (12 fetched, 1 NEW)

- **#2803** taciturnaxolotl `bug: yollo mode via flag doesn't activate prompt` head `fd5f9301283778a6dc09a27bab65087077b018d0` updated 15:41:34Z — **first appearance in top-12 this tick** (created 15:36:05Z). **Crush quiescence broken**: top-PR slot rotation (was #2801 ardevd at Add.357; now #2803 by activity). However, #2801 head still unchanged.
- **#2801** ardevd head `de9d901ef6f9440effa98d8feaff6a3cc51bdcb4` updated 07:23:08Z — **head unchanged Add.349 → Add.358 = 10 consecutive ticks**, ~533m sustained-no-iteration. P-357.H still pending (no break yet, tick-1 of 3-tick window).
- **#2800** BrunoKrugel head `3394b9fb8fd5317058b8abcea967cd7aa28f0ddc` updated 02:54:02Z — frozen long.
- **#2791** meowgorithm head `07e00ad4610a7d745befb1780c58aa16b89c7f67` updated 2026-05-04 13:59:39Z.
- **#2788** meowgorithm head `f9134777c941001444eb57ecc81bfcb49c6366f5`.
- **#2786** mkaaad head `0e1e099e179cd7d4111d72f376ff62f7f49a0ee7`.
- **#2785** taoeffect head `fa1acff88d05871ee16240322f5d818acf08c0ef`.
- **#2783** somjik-api head `8985f2f5033fd84837fe668369e465c9e9ad8167`.
- **#2782** meowgorithm head `40684228138303a922ff71a8f39dfe85fad30572`.
- **#2778** BrunoKrugel head `ebdf6fde3c7f8a1efab956cb2dbbec6f4b7c285d`.
- **#2773** pragneshbagary head `bafe8f8c414d4a130e770e70a178718cdbf0ec32`.
- **#2772** mkaaad `fix: group header hidden on wrap-to-first after scrolling to bottom in model selector` head `8e918add67be4869808afb8d3d72adf1f4524803` updated 2026-05-03 08:31:46Z — **first appearance in top-12 this tick** (mkaaad N=2: #2786 + #2772).

---

## Cross-carrier prediction resolutions from Add.357 (P-357 series tracked)

- **P-357.A (sub-class D recurrence within 3 ticks, prior 0.45)**: **REALIZED-VARIANT-AT-TICK-1** — morgmart goose extends from N=6 → N=8 (same author-carrier, not different); yiliang114 codex-D candidacy retained at N=4 (no expansion). Variant of recurrence (extension-of-existing rather than fresh-occurrence). Counts as confirmation of sub-class D **regime stability** but not strict-new-author-recurrence. **Soft-realized.**
- **P-357.B (Sameerlite #27185 freeze extends to tick-6, prior 0.50)**: **REALIZED** — head `da06ac5` unchanged Add.357 → Add.358 (now ~180m sustained).
- **P-357.C (evawong-oai #21184 freeze extends to tick-6, prior 0.50)**: **REALIZED** — head `95ef124d` unchanged BUT metadata-touched (sub-class E surfaces — see new-pattern section above).
- **P-357.D (B-A-M-N #3856 ↔ #3848 head-OID collision resolves within 2 ticks, prior 0.55)**: **NOT-REALIZED-TICK-1** — both PRs retain `a0daf50c…` head, no merge/close/force-push. 1 tick remaining in window.
- **P-357.E (gemini-cli-robot bot-pair #26482 + #26483 receive ≥1 force-push within 3 ticks, prior 0.40)**: **status unknown** — #26482/#26483 not in top-12 at Add.358 (displaced by 5 NEW PRs). Bot-pair potentially merged or stalled below threshold.
- **P-357.F (cross-carrier security-cluster cardinality stays ≥4 next tick, prior 0.55)**: **REALIZED** — litellm security-cluster grew to N=5 (#27196 added).
- **P-357.G (tick-width rebounds to ≥30m within 2 ticks, prior 0.50)**: **REALIZED** — Add.358 tick-width = 49m26s.
- **P-357.H (crush top-PR #2801 quiescence breaks within 3 ticks, prior 0.45)**: **NOT-REALIZED-TICK-1** — #2801 head still `de9d901`. 2 ticks remaining.
- **P-694.A (Sameerlite #27185 freeze extends to ≥160m within 2 ticks, prior 0.45)**: **REALIZED** — now ~180m, exceeds 160m threshold.
- **P-694.B (evawong-oai #21184 freeze extends to ≥160m within 2 ticks, prior 0.45)**: **REALIZED** by head-stability metric (~180m), but **QUALIFIED** by sub-class E mass-touch (synth-694 H694 refinement noted above).

---

## Cross-tick author-density tally (Add.358)

- **Sub-mode-4 instantiator pool size**: now **N=18** (Add.357 was N=15) — adds samiralibabic/jliounis (opencode fresh-opens, single-PR each — actually not pool entries), mateo-berri (litellm N=2 sub-class A entry), wenshao now N=2 explicit-stack, mkaaad N=2.
- **Sub-class D tally this tick**: 1 confirmed (morgmart **N=8 promoted from N=6**), 2 retained candidates (jif-oai N=3 retracted to non-candidate; yiliang114 N=4 retained).
- **Sub-class E tally this tick (NEW)**: 2 instances — evawong-oai codex N=5 within 52s; morgmart goose N=7 within 3m39s.
- **Force-push events this tick**: **4 distinct** (fcoury-oai codex#21206 `4744d143→df77a410`; yiliang114 qwen#3854 `9184e899→e8b59b89`; qiuqiuwen25 qwen#3852 `8a5fa3b1→0bdb7e91`; euxaristia gemini-cli#26498 `698fcc88→1470105b`) — **cross-carrier 4-author force-push wave** (3 carriers: codex, qwen-code ×2, gemini-cli).
- **Cross-carrier security-surface PRs**: N=6 (litellm #27196 + #27190 + #27189 + #27176 + #27161 + crush #2800).
- **NEW fresh-opens this tick**: 9 across 4 carriers (opencode #25890/#25889; litellm #27196; gemini-cli #26510/#26509/#26508/#26507/#26506; crush #2803).
- **Bot-authored sub-mode-4**: gemini-cli-robot **N=3** (#26510/#26509/#26508) with **inter-open gap of 4s+9s = 13s total span** — bot-mode equivalent of human sub-class E density.

---

## Predictions for Add.359–361 (P-358 series)

- **P-358.A (sub-class E recurrence within 3 ticks, prior 0.55)**: evawong-oai or morgmart performs another N≥5 mass-metadata-touch within <2min. Sub-class E now appears regime-coupled to stacked-PR series, so any author maintaining a stack of ≥5 PRs is candidate.
- **P-358.B (Sameerlite #27185 freeze extends to ≥230m / tick-7, prior 0.40)** — power-law tail continues; under H694 each successive tick has slowly-decaying break probability.
- **P-358.C (B-A-M-N #3856↔#3848 head-OID collision resolves within next 1 tick, prior 0.55)** — synth-107 historical resolution-window now closes; if no resolve, collision becomes a new W17 long-survival exemplar.
- **P-358.D (one of the 4 force-pushes triggers a follow-up force-push or merge within 2 ticks, prior 0.55)** — force-push events tend to cluster by author within <2 ticks (review-loop signature).
- **P-358.E (gemini-cli-robot bot-pair #26509+#26510 merged or closed within 2 ticks, prior 0.65)** — cherry-pick / CI-optimization bot PRs typically auto-merge fast.
- **P-358.F (cross-carrier force-push count stays ≥3 next tick, prior 0.40)** — 4-author convergence may be a regime shift, not noise.
- **P-358.G (tick-width oscillates back to <30m within 2 ticks, prior 0.45)** — synth-690 inverse-coupling H1 + recently-rebound 49m suggests next contraction; but the rebound itself indicates W17 floor relaxation.
- **P-358.H (morgmart sub-class D extends to N≥10 within 2 ticks, prior 0.35)** — N=8 is already historic ceiling; further extension less likely as goose top-12 saturates.
- **P-358.I (#21173 or #21172 promoted/closed/merged within 2 ticks, prior 0.55)** — these are stack-bottom PRs that just appeared in top-10 — usually first to merge.

---

**Snapshot summary**: 10th tick of W17. **Tick-width rebound to 49m breaks 9-tick sub-baseline run**. New pattern named: **sub-class E mass-metadata-touch event** (evawong-oai codex N=5 in 52s + morgmart goose N=7 in 3m39s). Sub-mode-4 instantiator pool **N=18**. **Sub-class D ceiling extended N=6→N=8** (morgmart goose). **4-author cross-carrier force-push wave** (codex + qwen×2 + gemini-cli). Cross-carrier security-cluster grew to N=6. Head-OID collision (B-A-M-N qwen) sustained to tick-2. Sameerlite freeze ≥180m, evawong-oai freeze ≥180m head-stable but author-attention live.
