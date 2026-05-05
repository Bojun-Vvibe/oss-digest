# ADDENDUM-366 — 2026-05-06 (W18 day-1, tick+1 from Add.365)

**Capture window**: 2026-05-05T21:51:42Z (Add.365 latest, litellm #27225 update) → 2026-05-05T22:28:42Z (codex #21251 update). **Tick width: ~37m.** Sequence Add.355→366 = 28, 20, 49, 33, 24, 40, 54, 64, 54, 66, **37**. The 37m gap **breaks below** the provisionally widened 50–70m band declared at Add.365; the band re-narrows or splits bimodally. Pair-midpoint Add.365+366 = (66+37)/2 = **51.5m** — band centroid drops 8.5m from 60m at Add.365.

---

## NEW OBSERVATION THIS TICK — "sub-class J replay on codex bwrap-bundle stack: 3 PRs in 3 wall-clock seconds, single author, identical timestamp prefix"

**Signature**: One author opens **N≥3 PRs within ≤5 wall-clock seconds**, all targeting a **shared release-engineering surface** (here: bundling standalone `bwrap` for Linux sandbox), with each PR title preserving the same scope-prefix (`linux-sandbox` / `release` / `npm`) and forming an obvious **stack** (each PR depends on the prior).

**Empirical instance (codex / bolinfest):**

| PR | head SHA | createdAt | title |
|---|---|---|---|
| #21255 | `34778320018b` | 2026-05-05T22:21:01Z | `linux-sandbox: use standalone bundled bwrap` |
| #21256 | `aa28450c8766` | 2026-05-05T22:21:03Z | `release: publish standalone bwrap artifacts` |
| #21257 | `581dfce1ea4c` | 2026-05-05T22:21:04Z | `npm: bundle standalone bwrap on Linux` |

**Burst geometry**: 3 PRs in **3 seconds** (22:21:01Z → 22:21:04Z); inter-open gaps **+2s, +1s** (mean 1.5s/PR). This is **tighter** than Add.365's rhan-oai triplet (Δ=2s/PR, 4s envelope) — and it is the **same author** as #21250 (`app-server: keep thread PermissionProfile immutable`, 22:21:03Z), meaning bolinfest opened **4 PRs in 3 seconds** when #21250 is included (cross-stack co-burst, since #21250 is on app-server not linux-sandbox).

**Critical contrast vs sub-class J seed (Add.364, codex verb-routing):**
- Verb-routing was a **stack-shaped quartet** at Δ=6s/PR. Bwrap-bundle is a **stack-shaped triplet** at Δ=1.5s/PR — **4× faster** open cadence at the same author/codex pairing.
- Verb-routing seeded heads were **frozen at PR creation** (P-364.B confirmed at Add.365). Predict same for bwrap: P-366.A.

---

## NEW OBSERVATION 2 — "sub-class K replay on litellm SSO debug-callback surface, cross-author convergent"

**Signature**: Sub-class K (5+1 prometheus-gauge instance at Add.365) re-instantiates on a **different defect surface** within the next tick — `/sso/debug/callback` JWT-claims display — across **3 authors** (oss-agent-shin, ishaan-berri, oss-agent-shin again), each with their own PR but converging on identical title-defect framing.

**Empirical instance (litellm SSO cluster):**

| PR | head SHA | createdAt | Author | Title fragment |
|---|---|---|---|---|
| #27235 | `c06657e2bd96` | 2026-05-05T21:37:53Z | oss-agent-shin | `fix(sso): /sso/debug/callback shows full JWT claims + parsed fields` |
| #27236 | `3240c2c7c8f7` | 2026-05-05T21:59:14Z | ishaan-berri | `[Fix] SSO: /sso/debug/callback now shows full JWT claims + parsed proxy view (team_alias, team_id, ...)` |
| #27239 | `5d472c6d73e2` | 2026-05-05T22:24:28Z | oss-agent-shin | `feat(sso): show full JWT claims + parsed mappings in /sso/debug/callback` |

**Burst geometry**: 3 PRs in **46m35s** (21:37:53Z → 22:24:28Z); inter-open gaps **+21m21s, +25m14s** (mean 23m17s). Slower than the prometheus K-instance (mean 14m34s), but still inside the K-predicate envelope (≤60min). Authors **alternate** (oss-agent-shin → ishaan-berri → oss-agent-shin) — the cross-author K′ sub-mode predicted at W17-synth-706 ("Children candidates") is **first sighting**.

**Update on K-instance prediction P-706.A**: At Add.366 window-close (~1.04h after K-instance window close), **none** of {#27226, #27229, #27230, #27231, #27233} are CLOSED-no-merge. P-706.A's 3.5h deadline is not yet reached, but trajectory is leaning toward **falsification** (no candidate elimination yet observed; all 5 ishaan-berri PRs remain OPEN with stable head SHAs).

---

## Recurrence check on Add.365's predictions

- **P-365.A** (≥3 of {#27226, #27229, #27230, #27231, #27233} closed-no-merge by next tick → sub-class K is candidate-elimination): **NOT YET FALSIFIED, NOT YET CONFIRMED**. All 5 PRs remain OPEN. Window deadline at Add.366+3 ticks (P-706.A) still pending.
- **P-365.B** (oss-agent-shin opens another bot-mediated PR within 6h that closes the human-author candidates): **PARTIAL CONFIRMATION on different surface**. oss-agent-shin opened #27235 (sso) and #27239 (sso) — both bot-mediated, but on the **SSO surface, not prometheus**. The bot did NOT close the human-author prometheus K-candidates; instead it opened a **parallel K-instance** on a disjoint surface. P-365.B is **falsified** for the prometheus surface, but oss-agent-shin's behavior pattern (parallel-PR generation on whatever surface ishaan-berri is iterating on) holds.
- **P-365.C** (carrier opencode shows sub-class K instance within 4 ticks): **NOT OBSERVED** at tick+1. Opencode this tick added #25917 (nabilfreeman shell timeout), #25919 (adavila0703 default temperature), #25920 (ajpintos windows shell, re-open), #25924 (CasualDeveloper sentinels), #25925 (ctharvey fallback ID) — 5 OPEN-new in the tick, but **no single author** has ≥4 PRs in <30m. K remains litellm-specific at tick+1; 3 ticks remain before P-365.C's deadline.

---

## Specific PRs cited per carrier (≥70 unique PRs across all 7 carriers)

### anomalyco/opencode (12)
- **#25925** `40178e0342ab` ctharvey `fix(provider): generate fallback ID for tool calls missing 'id' in streaming` 21:47:46Z (carried from Add.365, last update 21:48:45Z — frozen since open)
- **#25924** `2a1bc29bcf2c` CasualDeveloper `chore: add generation completion sentinels` 21:35:24Z (head SHA **DIFFERS** from Add.365's `258f6e393d68` — force-pushed at 21:58:12Z; sub-class H mutating-head signal)
- **#25920** `fa38b038ff7b` ajpintos `fix(mcp): support native windows shell execution for local servers` 21:17:37Z (re-open of #25896, SHA-preservation across close→reopen; last update 21:22:12Z, no further mutation this tick)
- **#25919** `0809cac77aec` adavila0703 (carried, frozen since 21:14:55Z)
- **#25917** `78eacba8fce1` nabilfreeman (head SHA **DIFFERS** from Add.365's `65299607d29a` — force-pushed at 22:09:11Z; second sub-class H instance this tick on opencode)
- **#25915** `a221a11a2a99` jlongster (carried, frozen since 20:50:00Z)
- **#25886** `6b8e9fde087f` johnwaldo `fix: retry OpenAI overload errors` 15:14:51Z (long-tail, last update 15:26:38Z)
- **#25867** `d3bfeaf40998` stephanschielke `fix(git): replace mutating Stream.runFold with Stream.runForEach` 12:37:00Z
- **#25866** `410fbad5b5c4` zharinov `fix(ui): preserve SVG tags in DOMPurify config for KaTeX math rendering` 12:35:36Z
- **#25863** `773a3b7ed9e9` drkaangunduz `feat(opencode): add session backup API` 12:23:43Z
- **#25861** `5c1c3b74b115` nexxeln `fix(provider): preserve anthropic provider-executed tool pairs` 11:41:12Z
- **#25856** `db6460a1baf9` LifetimeVip `feat(todo): auto-cleanup stale todos + /clear-tasks command` 11:00:49Z (last update 21:00:52Z — 10h delayed metadata touch, sub-class E candidate)

### openai/codex (15)
- **#21257** `581dfce1ea4c` bolinfest `npm: bundle standalone bwrap on Linux` 22:21:04Z (NEW; J-replay member 3/3)
- **#21256** `aa28450c8766` bolinfest `release: publish standalone bwrap artifacts` 22:21:03Z (NEW; J-replay member 2/3)
- **#21255** `34778320018b` bolinfest `linux-sandbox: use standalone bundled bwrap` 22:21:01Z (NEW; J-replay member 1/3)
- **#21251** `61b99aafd483` owenlin0 (head SHA **DIFFERS** from Add.365's `28100c84aa66` — force-pushed at 22:28:42Z; sub-class H instance on codex this tick)
- **#21250** `11750256e878` bolinfest `app-server: keep thread PermissionProfile immutable` 21:45:03Z (carried; bolinfest's earlier PR — 4 PRs in 36m wall-clock if J-triplet is included)
- **#21249** `8bf703886ddd` aibrahim-oai (head SHA **DIFFERS** from Add.365's `ccffb25261bf` — force-pushed at 22:05:28Z; **third sub-class H instance this tick** across opencode+codex; cross-carrier H-density spike)
- **#21238** `c8670a11854f` rhan-oai (head SHA **DIFFERS** from Add.365's `0df79765538a` — force-pushed at 22:17:31Z; J-class seed mutates at tick+1, **falsifying P-364.B-extension** — the rhan-oai triplet seeds DO mutate within 2 ticks)
- **#21237** `5f407bcb854b` rhan-oai (head SHA **DIFFERS**; force-pushed at 22:17:31Z, same minute as #21238)
- **#21236** `3432df695699` rhan-oai (head SHA **DIFFERS**; force-pushed at 22:17:31Z, same minute as #21237/#21238 — **rhan-oai J-triplet undergoes synchronized force-push at tick+1**, all 3 heads mutate within 1s of each other; this is a **new sub-class** — call it **J→H promotion** where a frozen J-triplet wholesale mutates to a triplet-of-mutated-heads in a single sync event)
- **#21235** `679b121ef111` canvrno-oai (carried, frozen since 22:28:37Z metadata touch — head SHA stable, only updated_at mutates)
- **#21231** `f8502a497f09` leoshimo-oai (carried, last update 22:21:33Z metadata touch)
- **#21224** `92d9a1901357` xli-oai (carried, frozen)
- **#21223** `49ecb67c6d66` xli-oai (carried, frozen)
- **#21219** `32cc84ff1d2b` mchen-oai `Add model and reasoning effort to MCP turn metadata` 17:08:54Z
- **#21214** `c5a7ad87d35f` jif-oai `wip: spawn MCP for memories` 16:28:05Z

### BerriAI/litellm (15)
- **#27239** `5d472c6d73e2` oss-agent-shin `feat(sso): show full JWT claims + parsed mappings in /sso/debug/callback` 22:24:28Z (NEW; SSO-K member 3/3)
- **#27238** `c0208e9e76a0` ryan-crabbe-berri `fix(ui): drop duplicate /v2/team/list fetch racing OldTeams' paginated fetch` 22:18:43Z (NEW; ryan-crabbe-berri doublet with #27224 — second UI-fetch fix this tick)
- **#27237** `b2f2a808b4bd` yassin-berriai `helm: increase default probe timeouts, disable debug logging by default` 22:00:36Z (NEW)
- **#27236** `3240c2c7c8f7` ishaan-berri `[Fix] SSO: /sso/debug/callback now shows full JWT claims + parsed proxy view` 21:59:14Z (NEW; SSO-K member 2/3 — ishaan-berri **inter-K interleave**: 5 prometheus K-PRs at 20:26–21:24Z, then SSO K-PR at 21:59Z — author maintains parallel K-iteration on disjoint surfaces)
- **#27235** `c06657e2bd96` oss-agent-shin (carried; SSO-K member 1/3, last update 22:12:50Z metadata touch)
- **#27233** `052f02fa473b` ishaan-berri (carried; prometheus K-5/5, frozen)
- **#27232** `bec93c80c8c3` oss-agent-shin (carried; prometheus K-cross-author, frozen)
- **#27231** `f624132babc3` ishaan-berri (carried; prometheus K-4/5, frozen)
- **#27230** `21ac955a60c2` ishaan-berri (carried; prometheus K-3/5, frozen)
- **#27229** `17656d9aad8f` ishaan-berri (carried; prometheus K-2/5, frozen)
- **#27228** `4d27804ae72f` bcyrill (carried, last update 22:24:18Z metadata touch)
- **#27226** `9de49c7b044d` ishaan-berri (carried; prometheus K-1/5, frozen)
- **#27225** `6769c8b66fe5` stuxf (carried)
- **#27224** `c840bc04447` ryan-crabbe-berri (carried)
- **#27220** `520116f5cac3` Divyansh200102 `chore: upgrade click dependency to 8.3.3` 18:58:11Z

### google-gemini/gemini-cli (12)
- **#26540** `11eadac9affc` Abhijit-2592 (head SHA stable, last update 21:50:18Z)
- **#26538** `4f1ae6a373be` gemini-cli-robot (carried, frozen since 21:14:19Z)
- **#26537** `9eaf143f2e3d` gemini-cli-robot (carried, frozen since 21:14:22Z)
- **#26536** `c86012a74adb` alexandrevarga (head SHA **DIFFERS** from Add.365's `0c65680787a6` — force-pushed at 22:14:14Z; **fourth sub-class H instance this tick**, gemini-cli)
- **#26535** `34ea5b5f7dac` SandyTao520 (carried, last update 20:52:18Z metadata)
- **#26534** `d7748b6877314db7` joshualitt (head SHA **DIFFERS** from Add.365's `e9ce4a4d2d57` — force-pushed at 22:07:03Z; **fifth sub-class H this tick** — across opencode/codex/gemini-cli, 5 force-push events in <1h, candidate cross-carrier H-burst)
- **#26531** `2595bf215e57` gemini-cli-robot `chore/release: bump version to 0.42.0-nightly.20260505.g8f0edcd64` 18:56:04Z
- **#26529** `4a4f54c20d0d` mbleigh `feat(agent): formalize first-class tool lifecycle states and status mapping` 18:45:37Z
- **#26528** `c486457497128` akh64bit `feat(evals): add shell command safety evals` 18:40:15Z
- **#26526** `7428a3b7999d` gemini-cli-robot `# Robust Issue Deduplication Workflow` 18:13:58Z
- **#26514** `816f0c45935f` cocosheng-g `feat: export session to file and import via flag` 17:19:49Z
- **#26510** `e30132fc4e58` gemini-cli-robot `fix(patch): cherry-pick 1d72a12 to release/v0.40.1-pr-26479 → v0.40.2` 15:53:54Z (long-tail bot cherry-pick, last update 16:52:00Z)

### QwenLM/qwen-code (10)
- **#3856** `ecbbba1595b1` B-A-M-N (carried, last update 21:47:21Z metadata)
- **#3855** `b1757402fdb3` yiliang114 (carried)
- **#3854** `e8b59b89a767` yiliang114 (carried, last update 16:00:52Z)
- **#3853** `16a4af998281` yiliang114 (carried)
- **#3850** `09a62b2f2f6e` yiliang114 (carried)
- **#3849** `0c2876fb8da3` B-A-M-N (carried, last update 16:19:50Z)
- **#3848** `a0daf50c065f` B-A-M-N (carried)
- **#3847** `68b5a90f6ab5` doudouOUC (carried, last update 18:38:11Z)
- **#3844** `7f06fee3ed2a` wenshao (carried)
- **#3819** `ad2ca85bb76f` B-A-M-N `fix(core): prevent duplicate MCP processes from concurrent discovery` 2026-05-04 (last update 22:21:52Z this tick — long-tail metadata touch, ~42h post-open)

### charmbracelet/crush (6)
- **#2809** `61c109eaedfa` taciturnaxolotl (carried, frozen since 20:45:15Z)
- **#2808** `52aa09aad1bb` ilgax (carried, last update 20:54:03Z)
- **#2807** `b796f550716a` taciturnaxolotl (carried)
- **#2805** `1ebe35abf37b` taciturnaxolotl (carried)
- **#2801** `de9d901ef6f9` ardevd (carried)
- **#2800** `3394b9fb8fd5` BrunoKrugel (carried)

**Crush quiet tick**: 0 NEW open, 0 MERGED, 0 CLOSED inside the 37m Add.366 window. Tied with the W17-synth-101 "carrier-rotation freeze" sub-mode where one carrier goes silent while ≥3 others remain in commit-phase.

### block/goose (10)
- **#9040** `e743e55a7d46` kalvinnchau `feat(acp): add agent support to sources crud` 22:17:02Z (NEW; **third ACP-domain PR by kalvinnchau in <4h** — #9023 (acp child reap, MERGED), #9030 (provider catalog → ACP, OPEN), #9040 (ACP sources crud, OPEN); single-author ACP-stack at sub-1d cadence)
- **#9039** `73bbd4f492c6` tulsi-builder (head SHA **DIFFERS** from Add.365's `e60906e192201` — force-pushed at 21:55:45Z; **sixth sub-class H this tick** across all carriers — H-burst spans opencode/codex/gemini-cli/goose, 4/7 carriers in 1h)
- **#9038** `89262adab61f` jh-block `Add Linux Vulkan support for local inference` 21:32:16Z (last update 22:01:33Z metadata; **second jh-block PR today**: #9023 merged 21:11:20Z, #9038 opened 21:32:16Z — author opens 21m after own merge, classic post-merge author-momentum)
- **#9036** `1b16d5aa7868` DOsinga (carried, last update 21:27:23Z metadata)
- **#9035** `5db106762411` SarthakB11 (carried, last update 21:07:06Z metadata)
- **#9034** `289ae524573e` alexhancock (carried)
- **#9033** `ef6897674ae2` treebird7 (carried, last update 21:01:58Z metadata)
- **#9030** `19de7e853edd` kalvinnchau (head SHA **DIFFERS** from Add.365's `6c182759ab6c` — force-pushed at 22:26:39Z; kalvinnchau iterates own ACP-stack mid-tick — **single-author ACP-domain force-push concurrent with new ACP PR opening (#9040 at 22:17:02Z)**)
- **#9025** `bc06fd0e959c` jamadeo `Switch GH pages deploy to actions/artifact workflow` 14:58:45Z
- **#9021** `2985dfe07202` idosavion `feat(developer): add web_fetch tool for narrow URL fetching` 08:19:28Z

---

## Cross-carrier counts this tick (Add.366)

| carrier | OPEN-new this tick | MERGED this tick | CLOSED-no-merge | force-push H | total cited |
|---|---|---|---|---|---|
| anomalyco/opencode | 0 | 0 | 0 | 2 (#25924, #25917) | 12 |
| openai/codex | 4 (J-replay #21255–#21257 + cross-stack) | 0 | 0 | 5 (#21251, #21249, #21238, #21237, #21236) | 15 |
| BerriAI/litellm | 4 | 0 | 0 | 0 | 15 |
| google-gemini/gemini-cli | 0 | 0 | 0 | 2 (#26536, #26534) | 12 |
| QwenLM/qwen-code | 0 | 0 | 0 | 0 | 10 |
| charmbracelet/crush | 0 | 0 | 0 | 0 | 6 |
| block/goose | 1 (#9040) | 0 | 0 | 2 (#9039, #9030) | 10 |
| **TOTAL** | **9** | **0** | **0** | **11** | **80** |

**80 unique PRs cited across 7/7 carriers.** Open:Merge ratio = 9:0 = **∞** (this tick is a **pure-open phase** — first 0-MERGED tick since Add.357; classifier flips from "commit-phase" to "open-burst-phase"). Force-push H count of **11 across 4 carriers in 37m** is the densest H-burst observed in W17–W18; provisional **H-burst regime** declared.

## Falsifiable predictions

- **P-366.A**: bolinfest J-triplet head SHAs `34778320018b`, `aa28450c8766`, `581dfce1ea4c` remain frozen at Add.367. If any mutates within 2 ticks, J-class is **not** intrinsically frozen-head — it depends on author identity (rhan-oai mutates at tick+1; bolinfest predicted to mutate-or-not as a discriminator).
- **P-366.B**: SSO-K cluster (#27235, #27236, #27239) gains ≥1 additional member by Add.367 (60min envelope from #27235 closes at 22:37:53Z, well within Add.367 window). If member 4 appears with `fix(sso):` or `[Fix] SSO:` prefix, K-on-SSO is confirmed; if instead one of {#27235, #27236, #27239} merges, SSO-K is a **fast-resolve** sub-mode contrast to prometheus-K's slow-iteration.
- **P-366.C**: Cross-carrier H-burst regime (≥8 force-push events per tick across ≥3 carriers) persists at Add.367. If H-events drop below 4 corpus-wide, this tick was a one-off; if persists, declare **W18-day-1 H-burst regime** and update OMR classifier to gate on H-density not just open:merge ratio.
