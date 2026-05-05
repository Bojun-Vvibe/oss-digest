# ADDENDUM-360 — 2026-05-05

**Capture window**: 2026-05-05T16:48:47Z (Add.359 snapshot) → 2026-05-05T17:12:21Z (Add.360 snapshot). **Tick width: 23m34s** (contraction from 33m → **first sub-30m tick of W17 since Add.355**, P-358.G/P-359.G **REALIZED** in opposite direction). Tick-width sequence Add.351→360 = 72, 82, 57, 31, 13, 28, 20, 49, 33, **24**. Pair-midpoint Add.359+360 = (33+24)/2 = **28.5m** — drops back below 30m, regime contraction confirmed.

**Capture-snapshot timestamp**: 2026-05-05T17:12:21Z UTC (per-carrier `gh pr list --state open --limit 12 --json number,title,headRefOid,author,updatedAt,createdAt`).

---

## NEW PATTERN NAMED THIS TICK — "sub-class E → force-push escalation: metadata-only mass-touch leg promotes to head-iteration on the anchor PR within 1 tick"

**Signature**: At Add.358 evawong-oai performed sub-class E (N=5 metadata-only mass-touch on `#21184` + 4 legs). At Add.359 the legs stayed frozen, prediction P-358.A retracted sub-class E to "discrete event class". **At Add.360, evawong-oai force-pushes the ANCHOR `#21184` while leaving the 4 legs frozen** — this is a previously-unobserved transition: the metadata-touch event was not a terminal state, it was a **staging signal preceding head-iteration on the leader of the stack**.

**Empirical instances at Add.360 snapshot**:

| Carrier | Author | PR | Old head (Add.359) | New head (Add.360) | Notes |
|---|---|---|---|---|---|
| codex | evawong-oai | **#21184** | `95ef124d6194bd2126c11928cb3973214f9ac63a` | `6b31cb3a79f3` (updated 17:03:54Z) | **First head-iteration after 7 ticks (210m+) of head-freeze + sub-class E metadata-touch at tick-2.** Head-iteration arrived 24m after metadata-touch event. P-359.K **REALIZED-TICK-1 at 0.50 prior**. |
| codex | evawong-oai | **#21175** | `8f93be5b9e21e89802d601fb67596023c858d076` | `8f93be5b9e21` (head unchanged, updatedAt 17:03:54→17:07:02Z) | Leg metadata-bump only — the **anchor force-pushed, legs only metadata-touched**. Asymmetric promotion pattern. |
| codex | evawong-oai | **#21174** | `6e60556d73a9` | `6e60556d73a9` (updatedAt 17:06:52Z) | Leg metadata-bump only. |
| qwen-code | qiuqiuwen25 | **#3852** | `4fd7d92358850bd49a8ef07d7f97c01ca81ceb39` (Add.359) | `4fd7d9235885` (updatedAt 17:10:29Z) | **Metadata-touch only** (head unchanged) — second consecutive tick of qwen-code attention on this PR. |
| gemini-cli | cocosheng-g | **#26506** | `a36d1d5010f4` (Add.359) | `a36d1d5010f4` (updatedAt 17:10:45Z) | **Metadata-touch only** — same pattern, Add.359 force-push not followed by 2nd force-push tick+1. P-359.D **NOT-REALIZED-TICK-1** for #26506. |

**The escalation signature** (formal): for stack S with anchor A and legs L₁..Lₙ, if a sub-class E event at tick T leaves all of {A, L₁..Lₙ} head-frozen + metadata-touched, then within ≤2 ticks **either** (a) anchor-only force-push with leg metadata-touch (observed: #21184 + #21175/#21174), or (b) full re-freeze (synth-694 power-law tail). The Add.358→Add.360 trajectory of evawong-oai's stack is the **first instance of (a)**, and is naming-complete as "sub-class E→F transition" (call it sub-class F formally).

---

## Specific PRs cited (≥10 PR numbers with head SHAs across all 7 carriers)

### sst/opencode (12 fetched, 0 NEW since Add.359) — quiet tick

- **#25894** jlongster head `760a2163fba26919977a8a6498560b234590f236` updated 16:46:27Z — **head unchanged from Add.359** (freeze tick-1 after fresh-open). P-359.I (jlongster sub-class C iteration) **NOT-REALIZED-TICK-1**.
- **#25890** samiralibabic head `f2d8c701e69bfc4bf01f4cd6f338dfb00cee2576` — frozen tick-2 (~67m).
- **#25889** jliounis head `916eb3aabe3d8969a202a0490442ef7d8d52015a` — frozen tick-2.
- **#25886** johnwaldo head `6b8e9fde087f6c2f36bc1dfb66dac9dd259baab3` — **head unchanged Add.357 → Add.360 = 4 consecutive ticks** (~106m). H694 power-law tail extending.
- **#25869** andres-cq head `82caff4c9a2bbd241d1f43451b4b0496370ab3ca` — frozen tick-4.
- **#25867** stephanschielke head `1e1dca64f2cc` — frozen tick-4.
- **#25866** zharinov head `410fbad5b5c4` — frozen tick-4.
- **#25863** drkaangunduz head `773a3b7ed9e9` — frozen tick-4.
- **#25862** Techie5879 head `ad9d3e30b7e8` — frozen tick-4.
- **#25861** nexxeln head `5c1c3b74b115` — frozen tick-4.
- **#25860** osamu2001 head `4780710c54c7` — frozen tick-4.
- **#25856** LifetimeVip head `c1769f40e1d3` — frozen tick-4.

**opencode now zero force-push for 3 consecutive ticks** — P-696.E persistence extends. **Author-cardinality 12/12 = 1.0** sustained 5 consecutive ticks (synth-691 confirmation tick-5).

### openai/codex (12 fetched, 2 NEW)

- **#21220** viyatb-oai `chore: add minimal proxy egress diagnostics` head `0fd7b93fbc1c` updated 17:10:44Z (cr 17:10:25Z) — **NEW fresh-open this tick** (~2m old). Cold-start author for W17.
- **#21219** mchen-oai `Add model to turn metadata` head `0a9a2ab1c7a1` updated 17:09:24Z (cr 17:08:54Z) — **NEW fresh-open this tick** (~3.5m old). Cold-start author. **2 fresh-opens in 30s of each other** — cold-start doublet (synth-93-style).
- **#21214** jif-oai head `cbd2243458b8` — **head unchanged from Add.359** (freeze tick-1). P-359.H (wip-PR force-push within 2 ticks) **NOT-REALIZED-TICK-1**.
- **#21206** fcoury-oai head `df77a410abc8` — frozen tick-2.
- **#21193** dylan-hurd-oai head `f7456567ce63` — frozen tick-4.
- **#21190** fcoury-oai head `f868febdbe32` — frozen tick-4.
- **#21187** jif-oai head `85fe8faa8302` — frozen tick-4.
- **#21184** evawong-oai head `6b31cb3a79f3` updated 17:03:54Z — **FORCE-PUSHED** (was `95ef124d6194bd2126c11928cb3973214f9ac63a` for 7 ticks). Sub-class F transition — see new pattern above.
- **#21182** jif-oai head `07a1254b128d` — frozen tick-4.
- **#21180** jif-oai head `e4f515b331aa` — frozen tick-4.
- **#21175** evawong-oai head `8f93be5b9e21` updated 17:07:02Z — head unchanged, **metadata-bump only** (sub-class F leg).
- **#21174** evawong-oai head `6e60556d73a9` updated 17:06:52Z — head unchanged, metadata-bump only.

**codex tick activity**: 1 force-push (#21184), 2 fresh-opens (#21220, #21219), 2 metadata-touches (#21175, #21174). **jif-oai N=4 sub-class D persists tick-2**.

### BerriAI/litellm (12 fetched, **3 NEW** — exits full-quiescence)

- **#27200** yassin-berriai `helm: skip proxy startup prisma db push when migrations Job is enabled` head `724d5c1bf1cd` updated 17:11:18Z (cr 17:11:11Z) — **NEW fresh-open** (~1m old at snapshot). Cold-start author for W17.
- **#27199** guangzhou `Staging` head `fecf510827c5` updated 17:11:31Z (cr 17:10:33Z) — **NEW fresh-open** (~2m old). Branch-promotion PR (Staging→).
- **#27198** guangzhou `Dev` head `1b1776d946a7` updated 17:12:21Z (cr 17:08:41Z) — **NEW fresh-open** (~4m old). Branch-promotion PR (Dev→). **Same-author doublet within 2m: guangzhou opens both Staging + Dev branch-promotion PRs back-to-back** — synth-93/synth-694 cross-pollination signature: cold-start author opens TWO promotion PRs simultaneously, not three.
- **#27196** michelligabriele head `c8f6a6c4fe67` — frozen tick-1.
- **#27195** aryamaddel head `f9645e51864e` — frozen tick-1.
- **#27190** dennishenry head `a1cda015b6b2` — frozen tick-2.
- **#27189** orbisai0security head `9a9323022f50` — frozen tick-2.
- **#27185** Sameerlite head `da06ac5448dc` — **head unchanged Add.353 → Add.360 = 8 consecutive ticks** (~237m sustained). **P-358.B / P-359.B REALIZED at 237m ≥ 230m / ≥240m respectively** (B realized, B' ~3m short).
- **#27182** imviky-ctrl head `8047392b2161` updated 16:52:04Z — **metadata-touch only** (head unchanged from Add.359 but updatedAt bumped). Frozen-head + active-attention.
- **#27177** Sameerlite head `20fcd187b48594cef318f2bad29c02c3833948e0` — frozen long.
- **#27176** ben-wangz head `2e102973e65c` — frozen.
- **#27167** krrish-berri-2 head `6195d29cd539` — frozen long.

**Litellm exits full-quiescence with 3 fresh-opens in 2m wall-clock** — **P-359.F REALIZED-TICK-1 at 0.65 prior** with high amplitude (3 not 1). The "guangzhou Staging+Dev doublet" is a **branch-promotion-PR pair signature** previously unobserved in W17 (mateo-berri opens single promotion PRs, never paired).

### google-gemini/gemini-cli (12 fetched, 0 NEW)

- **#26513** gemini-cli-robot head `08647b680ad8` updated 16:51:56Z — frozen tick-1 (after fresh-open Add.359).
- **#26510** gemini-cli-robot head `e30132fc4e58` updated 16:52:00Z — **metadata-touch** (frozen-head, updatedAt bumped). P-358.E / P-359.E partial-realized continues (no merge yet, but bot-attention live).
- **#26508** gemini-cli-robot head `7cec47826220` updated 16:52:02Z — metadata-touch.
- **#26506** cocosheng-g head `a36d1d5010f4` updated 17:10:45Z — **metadata-touch only** (Add.359 force-push not followed by 2nd; sub-class F leg-style metadata-bump). P-359.D **NOT-REALIZED-TICK-1** for this PR.
- **#26504** cynthialong0-0 head `3708f88ea704` updated 16:52:07Z — metadata-touch.
- **#26500** cynthialong0-0 head `cf86f345767b` — frozen tick-2.
- **#26499** vital987 head `0252fe37a566` — frozen tick-2.
- **#26498** euxaristia head `1470105b2d25` — frozen tick-1 after Add.358 force-push. P-358.D **NOT-REALIZED-TICK-2** for this PR.
- **#26490** rushikeshsakharleofficial head `2d8284164964` — frozen long.
- **#26489** rushikeshsakharleofficial head `acfe282e48e9` — frozen long.
- **#26487** dimssu head `26f3d1e4d417` — frozen long.
- **#26484** SAY-5 head `d161659c9d50` — frozen long.

**gemini-cli tick activity**: 0 force-push, 0 fresh-open, **5 metadata-touches** (#26513, #26510, #26508, #26504, #26506). **5 metadata-touches within ~24m all updatedAt within 16:51:56–17:10:45Z window** — **carrier-wide sub-class E candidate** (different authors though: gemini-cli-robot×3, cocosheng-g, cynthialong0-0). This is a **cross-author sub-class E variant** (call sub-class E') — synth-695's formal definition was single-author single-carrier; this is multi-author single-carrier.

### QwenLM/qwen-code (12 fetched, 0 NEW; **B-A-M-N collision evolves to head-identity**)

- **#3856** B-A-M-N head `a0daf50c065f` — frozen tick-1.
- **#3855** yiliang114 head `b1757402fdb3` — frozen tick-3.
- **#3854** yiliang114 head `e8b59b89a767` — **head unchanged from Add.358** (freeze tick-2 after Add.358 force-push). P-358.D NOT-REALIZED for this PR at tick-2.
- **#3853** yiliang114 head `16a4af998281` — frozen.
- **#3852** qiuqiuwen25 head `4fd7d9235885` updated 17:10:29Z — **metadata-touch** (head unchanged from Add.358 force-push). Tick-2 metadata-attention without 2nd force-push.
- **#3850** yiliang114 head `09a62b2f2f6e` — frozen.
- **#3849** B-A-M-N head `0c2876fb8da3` — frozen tick-1 (after Add.359 force-push). P-359.D NOT-REALIZED for this PR at tick-1.
- **#3848** B-A-M-N head `a0daf50c065f` — **HEAD-IDENTITY WITH #3856** (`a0daf50c065f` shared across two distinct PRs by same author). **B-A-M-N collision EVOLVES from "two PRs touching same surface" to "two PRs with literally identical head SHA"** — this is a **branch-collision** signature where the author's local branch points to the same commit-graph node for both PRs. P-358.C / P-359.C **resolution mode shifts**: not "merge or close", but **branch-fork unification** — likely a `git push -f` to one PR's branch from the other's branch-tip. This is **synth-107 historic-anomaly regime** at tick-3 collision-window, but the **head-SHA collision is novel within W17**.
- **#3847** doudouOUC head `68b5a90f6ab5` — **FORCE-PUSHED** (was `109d9098ef3a40b0bdf1ff7d9b202959aebfed8b` at Add.359). doudouOUC iterates 2nd consecutive tick (Add.359 force-push + Add.360 force-push). **P-359.D REALIZED for this PR at tick-1** (2nd force-push).
- **#3844** wenshao head `7f06fee3ed2a` — frozen.
- **#3842** wenshao head `9008717b8a26` — frozen.
- **#3840** ihubanov head `cb1bbbe2406c` — frozen.

**qwen-code tick activity**: 1 force-push (#3847), **1 head-identity collision** (#3848↔#3856 share `a0daf50c065f`), 1 metadata-touch (#3852). doudouOUC **enters iterating sub-class** (N=2 force-pushes consecutive ticks). **B-A-M-N N=3 retained**.

### block/goose (12 fetched, 1 NEW)

- **#9028** alexhancock `docs: improve goose2 AGENTS.md` head `3dc3e7d288ca` updated 16:58:25Z (cr 16:58:25Z) — **NEW fresh-open** (~14m old at snapshot). Cold-start author for W17 (alexhancock). Goose2 docs surface — adjacent to morgmart's goose2 layout PRs (#9019, #9018, #9016, #9013).
- **#9027** tellaho head `185c6187cfd1` — frozen tick-1.
- **#9025** jamadeo head `bc06fd0e959c` — frozen.
- **#9023** jh-block head `1d61323844d4` — frozen.
- **#9021** idosavion head `2985dfe07202` — frozen long.
- **#9019** morgmart head `f6d15bd91b7d` — frozen tick-1 (after Add.359 force-push). P-359.D NOT-REALIZED for this PR at tick-1.
- **#9018** morgmart head `fb429659db87` — frozen.
- **#9017** morgmart head `b19db05c0ea8` — frozen.
- **#9016** morgmart head `169d521f34c8` — frozen.
- **#9015** monroewilliams head `70e82d7c7690` — frozen tick-1 (after Add.359 force-push). P-359.D NOT-REALIZED for this PR at tick-1.
- **#9014** morgmart head `ec224a170d81` — frozen.
- **#9013** morgmart head `c2f4ede3c7ee` — frozen.

**goose tick activity**: 1 fresh-open, 0 force-push (Add.359 wave fully frozen). **morgmart N=7 retained**. **The 4 Add.359-wave force-push PRs (#3849, #3847 qwen-code, #9019, #9015 goose) — only #3847 received 2nd force-push (1/4 = 25%)** — P-359.D 1-of-4 partial at tick-1.

### charmbracelet/crush (12 fetched, 0 NEW) — quiescence tick-9

- **#2803** taciturnaxolotl head `fd5f93012837` — frozen.
- **#2801** ardevd head `de9d901ef6f9` — frozen.
- **#2800** BrunoKrugel head `3394b9fb8fd5` — frozen.
- **#2791** meowgorithm head `07e00ad4610a` — frozen.
- **#2788** meowgorithm head `f9134777c941` — frozen.
- **#2786** mkaaad head `0e1e099e179c` — frozen.
- **#2785** taoeffect head `fa1acff88d05` — frozen.
- **#2783** somjik-api head `8985f2f5033f` — frozen.
- **#2782** meowgorithm head `406842281383` — frozen.
- **#2778** BrunoKrugel head `ebdf6fde3c7f` — frozen.
- **#2773** pragneshbagary head `bafe8f8c414d` — frozen.
- **#2772** mkaaad head `8e918add67be` — frozen.

**Crush quiescence tick-9** — sole full-quiescence carrier this tick (litellm exited).

---

## Cross-carrier prediction resolutions from Add.359 (P-359 series tracked)

- **P-359.A (force-push wave persists at N≥3 next tick, prior 0.50)**: **NOT-REALIZED** — Add.360 N=2 force-pushes (#21184, #3847). Wave **regresses to N=2** after 2-tick high-N regime (Add.358 N=4, Add.359 N=4). Echo-wave is **2-tick-bounded**, not multi-tick sustained.
- **P-359.B (Sameerlite #27185 + evawong-oai #21184 ≥240m by tick-8, prior 0.45)**: **PARTIAL** — Sameerlite at 237m (3m short), evawong-oai #21184 force-pushed (broke freeze chain).
- **P-359.C (B-A-M-N collision resolves within 2 ticks, prior 0.40)**: **NOT-REALIZED but mode-shifts** to head-identity collision. Resolution semantics changing.
- **P-359.D (one of Add.359 force-push PRs receives 2nd force-push or merge within 2 ticks, prior 0.55)**: **PARTIAL — 1-of-4 at tick-1** (#3847 doudouOUC 2nd force-push). 1 tick remaining for the other 3.
- **P-359.E (gemini-cli-robot #26510 or #26508 merges within 2 ticks, prior 0.55)**: **NOT-REALIZED-TICK-1** — both still open + metadata-touched but no merge.
- **P-359.F (litellm exits full-quiescence within 1 tick, prior 0.65)**: **REALIZED-TICK-1** with high amplitude (3 fresh-opens, not 1).
- **P-359.G (tick-width returns ≥40m within 2 ticks, prior 0.45)**: **FALSIFIED-TICK-1** — tick contracted to 24m, opposite direction.
- **P-359.H (jif-oai #21214 wip-PR receives force-push within 2 ticks, prior 0.65)**: **NOT-REALIZED-TICK-1** — frozen.
- **P-359.I (jlongster #25894 enters W17 sub-class C within 2 ticks, prior 0.45)**: **NOT-REALIZED-TICK-1** — frozen tick-1.
- **P-359.J (next wave shares ≥1 author with Add.358 OR Add.359 wave, prior 0.45)**: **PARTIAL** — Add.360's force-push set is {evawong-oai, doudouOUC}; doudouOUC was in Add.359 wave (overlap=1). REALIZED-TICK-1.
- **P-359.K (#21184 evawong-oai stack force-pushes leg-set within 2 ticks, prior 0.50)**: **REALIZED-TICK-1** — anchor #21184 force-pushed, legs metadata-touched. Sub-class F observed.

---

## Cross-tick author-density tally (Add.360)

- **Sub-mode-4 instantiator pool size**: now **N=22** (Add.359 was N=19) — adds viyatb-oai (codex cold-start), mchen-oai (codex cold-start), yassin-berriai (litellm cold-start), guangzhou (litellm cold-start, N=2 immediate), alexhancock (goose cold-start). **+5 cold-starts in single tick** — instantiator-pool growth-rate **largest of W17**.
- **Sub-class D tally this tick**: yiliang114 N=4 retained, jif-oai N=4 retained, morgmart N=7 retained.
- **Sub-class E (single-author single-carrier metadata-only mass-touch within 60s)**: 0 new instances.
- **Sub-class E' (cross-author single-carrier metadata mass-touch within 24m)**: **gemini-cli #26513/#26510/#26508/#26504/#26506 = N=5 across 3 authors within 24m**. Novel sub-class.
- **Sub-class F (anchor force-push + leg metadata-touch following sub-class E)**: **1 instance** (evawong-oai #21184 + #21175/#21174). Novel sub-class.
- **Force-push events this tick**: **2** across **2 carriers** (codex #21184, qwen-code #3847). Echo-wave damping.
- **Head-identity collisions**: **1** (B-A-M-N #3848 ≡ #3856 share `a0daf50c065f`). Novel.
- **NEW fresh-opens this tick**: **6 across 3 carriers** (codex #21220 #21219; litellm #27200 #27199 #27198; goose #9028). **Largest fresh-open count of W17 single-tick**.
- **Full-quiescence carriers this tick**: **1** (crush only — litellm exits, N=1 not 2).

---

## Predictions for Add.361–363 (P-360 series)

- **P-360.A (force-push wave N≤2 next tick, prior 0.55)** — Add.360 damped to N=2; expect continued regression toward W17 baseline N=1.5/tick.
- **P-360.B (#21184 evawong-oai 2nd force-push within 2 ticks, prior 0.40)** — sub-class F transition completed; next iteration likely 2nd force-push or merge.
- **P-360.C (B-A-M-N #3848↔#3856 head-identity resolved by close-of-one within 2 ticks, prior 0.55)** — head-identity is unstable state; one PR likely closed/merged.
- **P-360.D (jif-oai #21214 force-pushed within 2 ticks, prior 0.65)** — wip + age 24m+; iteration-deficit growing.
- **P-360.E (gemini-cli sub-class E' recurs on different author-set within 3 ticks, prior 0.40)** — novel pattern; unknown stationary frequency.
- **P-360.F (guangzhou Staging+Dev doublet pattern recurs within 5 ticks, prior 0.30)** — branch-promotion-PR pair from same author; mateo-berri previously did singletons; expect cross-author imitation low.
- **P-360.G (Sameerlite #27185 reaches ≥250m by tick-9, prior 0.50)** — currently 237m; H694 power-law tail still active.
- **P-360.H (alexhancock #9028 + morgmart goose2 stack interaction within 2 ticks, prior 0.40)** — alexhancock AGENTS.md PR adjacent to morgmart's goose2 surface; review-ping likely.
- **P-360.I (litellm fresh-open count ≥2 next tick, prior 0.40)** — momentum from 3-fresh-open tick suggests sustained activity vs immediate full-quiescence-return.
- **P-360.J (codex cold-start doublet (viyatb-oai+mchen-oai) — at least one force-push within 2 ticks, prior 0.65)** — fresh PRs from oai-affiliates iterate fast historically.
- **P-360.K (sub-class F recurs in different carrier within 5 ticks, prior 0.45)** — pattern just named; testing generalization across stack-holders (yiliang114, jif-oai, morgmart candidates).
- **P-360.L (instantiator-pool growth slows: ≤2 cold-starts next tick, prior 0.65)** — Add.360 +5 cold-starts is anomalously high; mean-reversion likely.

---

**Snapshot summary**: 12th tick of W17. **Tick-width 24m** (sub-30m for first time since Add.355, **regime-contraction confirmed**). **Sub-class F named** (anchor force-push + leg metadata-touch following sub-class E; 1 instance: evawong-oai #21184). **Sub-class E' named** (cross-author single-carrier metadata mass-touch; 1 instance: gemini-cli N=5/24m). **B-A-M-N collision evolves to head-identity** (#3848 ≡ #3856 share `a0daf50c065f`) — novel within W17. **Echo-wave damps to N=2 force-pushes** (P-359.A NOT-REALIZED; 2-tick-bounded confirmed). **Litellm exits full-quiescence with 3 fresh-opens incl. guangzhou Staging+Dev doublet**. **Instantiator pool +5 cold-starts** (largest single-tick growth in W17). **Sameerlite #27185 freeze at 237m** — P-358.B REALIZED at boundary.
