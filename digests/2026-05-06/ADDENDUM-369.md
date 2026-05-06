# ADDENDUM-369 — 2026-05-06 (W18 day-1, tick+1 from Add.368)

**Capture window**: 2026-05-06T00:02:16Z (Add.368 latest, codex #21271 update) → 2026-05-06T00:55:25Z (litellm #27258 open). **Tick width: ~53m9s.** Sequence Add.358→369 = 49, 33, 24, 40, 54, 64, 54, 66, 37, 39, 54, **53**. The "bimodal-pair alternation" at Add.368 (~38m / ~54m) is **partially falsified at tick+1**: width holds at 53m, NOT contracting to ~38m as the alternation predicted. The 12-tick distribution flattens to a **unimodal ~50–60m centroid with one outlier (37m) and one outlier (66m)** — Add.367's bimodal-pair hypothesis collapses to a single-mode model with noise.

---

## NEW OBSERVATION 1 — "P-368.A CONFIRMED with margin: pakrym #21260 MERGES at 00:16:06Z, foundation lands ahead of wiltzius J′-triplet"

**Signature**: pakrym-oai's convergent-substrate PR #21260 `[codex] Move thread naming to app server` MERGED at **2026-05-06T00:16:06Z**, exactly **14m of tick window in**. wiltzius-openai J′-triplet members (#21264, #21265, #21266) all remain OPEN with **head SHAs UNCHANGED** since Add.368: #21264 `074440a1...`, #21265 `3a00dd6c...`, #21266 `a439ec5dc4b657c7510d9f38f991a6298401a515` (full SHA now resolved). **No rebase yet onto pakrym foundation in this tick.**

**Empirical instance:**

| PR | author | createdAt | merged-at | head SHA @ Add.369 | state |
|---|---|---|---|---|---|
| #21260 | pakrym-oai | 22:48:49Z | **00:16:06Z** (1h27m17s) | `ffcce8485e35d` | MERGED |
| #21264 | wiltzius-openai | 23:03:59Z | — | `074440a1daafed81b090a3feffddac647d875550` (frozen 1h51m) | OPEN |
| #21265 | wiltzius-openai | 23:04:39Z | — | `3a00dd6c7b3dc7cea124400c9c8a8c38e73e99c9` (frozen 1h50m) | OPEN |
| #21266 | wiltzius-openai | 23:10:21Z | — | `a439ec5dc4b657c7510d9f38f991a6298401a515` (frozen 1h45m) | OPEN |

**P-368.A part 1 (pakrym merges by Add.369): CONFIRMED.** Part 2 (wiltzius cluster rebases synchronized within 2 ticks) — observation begins. Tick+1 has 0 head mutations on wiltzius cluster despite foundation being merged 39 minutes ago. Predict at Add.370: at least 1 of 3 wiltzius PRs force-pushes (rebase event).

---

## NEW OBSERVATION 2 — "pakrym M-class trigger pattern post-#21260: opens #21276 + #21278 within 16m of own merge, codex pakrym becomes 2nd M-trigger sighting of W18"

**Signature**: pakrym's own merge of #21260 at 00:16:06Z is followed by **two fresh OPENs from same author**:
- **#21276** `[codex] Remove unused ListModels op` opened **00:21:51Z** (5m45s post-merge)
- **#21278** `Move message history out of core` opened **00:31:04Z** (14m58s post-merge)

This is a **clean M-class post-merge author-momentum cascade** matching Add.368's Hona M-trigger pattern on opencode. M-class now confirmed on **2 carriers in W18** (opencode/Hona Add.368, codex/pakrym Add.369). M-trigger gap distribution: Hona = 15m04s; pakrym (1st) = 5m45s, pakrym (2nd) = 14m58s. Mean gap ~12m; **codex pakrym opens 2 PRs vs opencode Hona's 1** — signals **multi-PR M-class variant** distinct from single-PR M.

**Cross-substrate**: #21276 touches `ListModels` (model-config substrate), #21278 touches `message history / core` (thread-store-adjacent substrate, **same family** as the wiltzius J′-triplet). Predict at Add.370: pakrym's #21278 lands as the next foundation in the thread-store stack, with wiltzius J′ rebasing onto **either** #21260 (already merged) or #21278 (still OPEN).

---

## NEW OBSERVATION 3 — "P-368.D CONFIRMED with massive margin: Z′ accidental-malformed-title CLOSED-no-merge spreads to 4 events on litellm alone in this tick (oss-agent-shin author-cluster signature)"

**Signature**: At Add.368 we observed **2 Z′ events across 2 carriers** (opencode #25936 ddbd, codex #21267 canvrno). At Add.369, the litellm carrier produces **4 Z′-pattern CLOSED-no-merge events from a single bot-author (`oss-agent-shin`)**:

| PR | author | title | createdAt | closedAt | lifespan |
|---|---|---|---|---|---|
| #27251 | oss-agent-shin | `Fix: make setup wizard config deterministic` | (~recent) | 00:20:03Z | < 1h |
| #27252 | oss-agent-shin | `Investigation: placeholder issue` | 00:21:36Z | OPEN (still) | — |
| #27253 | oss-agent-shin | `Add: main.py module description comment` | (~recent) | 00:51:27Z | < 1h |
| #27255 | oss-agent-shin | `Add utils module docstring` | (~recent) | 00:48:53Z | < 1h |
| #27258 | oss-agent-shin | `Add proxy server module docstring` | 00:55:25Z | OPEN | — |

The **#27252 title `Investigation: placeholder issue`** is itself a Z′ accidental/placeholder-title pattern (same family as Add.368's #25936 `Merge: ` and #21267 `N/A`) but currently **OPEN** rather than closed — first **Z′-OPEN intermediate state** observed. The 3 closed members (#27251, #27253, #27255) are **author-side mass-close sweep within ~30 minutes** by `oss-agent-shin` (a bot/automation account).

**Critical re-classification**: P-368.D predicted ≥1 Z′ event by Add.369. Observed **5 candidates** (4 closed + 1 OPEN placeholder) on a **single carrier from a single bot-author**. Z′ is no longer a coincidental cross-author signal — the **dominant generator is bot-driven trial-and-error PR creation** (`oss-agent-shin` opens speculative docstring/wizard PRs, then mass-closes when superseded). Sub-class promotion: **Z′_bot (bot-author placeholder/docstring trial cluster)** vs **Z′_human (human accidental-title)**.

**Distinct from Add.368 W17-synth-711 framing**: synth-711 framed Z′ as a 2-carrier human-accident replication. Add.369 reveals the larger driver is **bot iteration on a single carrier**, with the 2-event cross-carrier coincidence likely a sampling artifact. Synth-711 hypothesis stands but is **subordinate** to the new Z′_bot mode.

---

## NEW OBSERVATION 4 — "P-368.B FALSIFIED with margin: ishaan-berri prometheus-K cluster settles at n=8, NO new prometheus members through #27258"

**Signature**: At Add.368 we predicted **#27249+ with prometheus-themed title** by Add.369. Through #27258 (latest in tick), litellm sees the following NEW PRs:

- #27249 yuneng-berri `[Test] Tests: Stop parametrizing API keys into pytest test IDs` — **MERGED 00:21:19Z** (no prometheus theme)
- #27252 oss-agent-shin `Investigation: placeholder issue` (Z′_bot)
- #27256 app/oss-pr-review-agent-shin `[litellm-agent] Staging → litellm_internal_staging (5/6/2026)` (bot housekeeping)
- #27257 harish-berri `Refactor Bedrock response stream shape handling` (bedrock substrate, NOT prometheus)
- #27258 oss-agent-shin `Add proxy server module docstring` (Z′_bot)

**Zero new ishaan-berri opens** in this tick. Prometheus-K cluster definitively closes at **n=8** (#27226, #27229, #27230, #27231, #27233, #27242, #27246, #27248). The 3.5h envelope (20:26:04Z → 23:57:22Z) is now **bookended on both sides by author-quiet**: cluster opened in burst, ran for 3.5h, **stopped abruptly with the prefix-shift members** (#27246/#27248 with `Fix Prometheus` capitalized framing). Author-fatigue hypothesis from Add.368 **CONFIRMED**: prefix-style bifurcation marked the actual termination of the cluster, not a transition to a new sub-cluster.

K-class final cardinality record: **n=8, 3h31m envelope, prefix-style bifurcation at member 7/8**. Largest single-author single-theme cluster of W17–W18 to date.

---

## NEW OBSERVATION 5 — "yuneng-berri JM₂ promotes to JMMM with #27249 self-merge; entire JM-hybrid resolves except #27241 still OPEN with single H-event"

**Signature**: At Add.368 yuneng's JM-hybrid was 3 PRs / 2 in-envelope merges (#27240, #27245 MERGED; #27241 OPEN, force-pushed once). In this tick:

- **#27249** `[Test] Tests: Stop parametrizing API keys into pytest test IDs` (yuneng-berri) MERGES at **00:21:19Z** — was opened separate from the original 3-PR burst but **same author, same `[Test]/[Infra]` prefix family**. Treating as **JM-hybrid extension member 4**.
- **#27241** still OPEN, **head SHA `201fa5d42bf1...` (UNCHANGED from Add.368)** — yuneng-berri's force-push at 23:54:44Z was a one-shot, no further iteration in this tick.

JM-hybrid final state at Add.369: **4 PRs total, 3 merged (#27240, #27245, #27249), 1 OPEN-frozen (#27241)**. Sub-class **JMMM (J-burst with 3-of-4 merge cascade and 1 stalled OPEN tail)**. The frozen OPEN tail (#27241 `Relax Core Runtime Pins To Ranges`) is a **packaging/dependency-pins PR** — substantively higher review-complexity than the test/infra siblings. The JM cascade is **complexity-stratified**: low-complexity members merge fast, high-complexity tail stalls.

---

## NEW OBSERVATION 6 — "opencode P-368.E CONFIRMED: Hona M-trigger #25939 MERGES at 00:09:32Z (21m37s lifespan, mid-band M-class fast-resolve), then Hona opens #25941 within 4m"

**Signature**: At Add.368 we predicted Hona's #25939 either merges within 30m (M-class fast-resolve) or sits OPEN past 1h (M-class stall). Observed: **MERGED at 00:09:32Z, 21m37s after open** — clean fast-resolve, mid-band of the 30m envelope.

Then at **00:13:23Z (3m51s post-merge)** Hona opens **#25941 `refactor(app): centralize sync query options`** — a **3rd-degree M-trigger cascade**. Hona's M-trigger sequence on opencode now reads:

| PR | open | merge | lifespan | M-trigger gap to next open |
|---|---|---|---|---|
| #25937 | 23:22:22Z | 23:32:51Z | 10m29s | 15m04s → #25939 |
| #25939 | 23:47:55Z | 00:09:32Z | 21m37s | 3m51s → #25941 |
| #25941 | 00:13:23Z | OPEN | (84m+) | — |

**M-trigger gap contracts**: 15m04s → 3m51s. Hona is **accelerating**, not just sustaining. This is the **first observed M-trigger gap-contraction pattern** of W18 — distinct from Add.366's kalvinnchau ACP M-trigger which had stable 25–55m gaps.

Predict at Add.370: #25941 either merges within 1h (continuing M-class with further gap-contraction → same-author #25943+ open within 5m of #25941 merge) or stalls (refactor PRs are heavier-review than fix/feat).

---

## NEW OBSERVATION 7 — "kalvinnchau ACP-stack #9030/#9040 H-density BREAKS: P-368.E partly falsified — both PRs frozen this tick (no force-push)"

**Signature**: At Add.368 we predicted kalvinnchau ACP-stack would cross **7 H-events / 2-PR / 4-tick** by Add.369 (continuing 1-H-per-PR-per-tick density). Observed: **0 force-push events** on #9030 (head still `b35dafc40e0f...` unchanged from Add.368) and **0 force-push events** on #9040 (head still `47e5ca06a41d...` unchanged). H-density on this stack drops from 6 events / 3 ticks to **6 events / 4 ticks** — a 25% density decay.

**P-368.E FALSIFIED.** kalvinnchau ACP-stack is **not** a sustained H-iteration cluster; the 3-tick burst was **maintenance-finalization phase**, not steady-state. Both PRs are now in **review-wait** rather than active-iteration. Closing record: 6 H-events on 2 PRs across 3 ticks (Add.366→Add.368), then frozen at Add.369. The **highest H-density single-PR cluster of W18** record falls back to gemini-cli #26536 alexandrevarga (3 H-events / 3 ticks) as the new sustained leader.

---

## NEW OBSERVATION 8 — "goose #9043 first-ever provider-API PR with vendor-specific endpoint reference, opens 1m41s before P-368.E falsification window — provider-onboarding outpaces stack-iteration regime change"

**Signature**: dan4thewin opens **#9043** at **00:37:04Z** with title `<redacted>_<vsc-redacted> /responses API` (titled with a vendor-specific provider name we scrub per guardrail). This is the **first new goose OPEN in 2 ticks** ending the goose-quiet window from Add.368. Substrate is **provider responses-API integration** — same family as opencode #25861 nexxeln anthropic-tool-pair fix and gemini-cli #26536 alexandrevarga ripgrep-fallback (cross-carrier "provider-adapter substrate" theme).

The 1m41s lead-time of #9043 over kalvinnchau-stack freeze observation creates a **substrate handoff signature** on goose: ACP-iteration (kalvinnchau) ends → provider-onboarding (dan4thewin) starts. **First observed regime-rotation within a single carrier** in W17–W18 (intra-carrier rotation distinct from Add.368's cross-carrier H-burst rotation).

---

## NEW OBSERVATION 9 — "qwen-code returns to silence: B-A-M-N H-cluster (P-368.C candidate) does NOT recur this tick — first-instance noise rather than sustained pattern"

**Signature**: At Add.368 B-A-M-N produced 3 H-events in single tick on qwen-code (#3856, #3849, #3848 force-pushed). P-368.C predicted either **#3857+** opens within 2 ticks OR all 3 PRs merge in same wave. Observed at Add.369: **0 new opens, 0 merges, 0 closes, 0 force-pushes** on qwen-code. PR list head remains identical to Add.368 (#3856, #3855, #3854, #3853, #3850, #3849, #3848, #3847, #3844 — order preserved, no SHA changes).

**P-368.C FALSIFIED.** B-A-M-N's 3-event H-cluster was a **one-off rebase-cleanup batch**, not a systematic H-cluster-by-single-author signal. qwen-code returns to its W17-W18 baseline of 1-tick-on / multi-tick-off cadence. The "carrier-rotating H-burst meta-regime" of W17-synth-712 retains support, but qwen-code is **not** a stable rotation participant — it spikes once and reverts.

---

## NEW OBSERVATION 10 — "gemini-cli sripasg #26554 opens with `fix(acp): move tool explanation from thought stream to tool call content` — first ACP substrate sighting on gemini-cli (cross-carrier ACP propagation: goose → gemini-cli)"

**Signature**: At **00:10:17Z** sripasg opens gemini-cli #26554 — a **fix on the ACP (Agent Communication Protocol) substrate**, scoping `tool explanation` semantics from `thought stream` to `tool call content`. ACP substrate to date has been **goose-exclusive** (block/goose alexhancock #9034 `feat: ACP streamable http spec compliance`, kalvinnchau #9030/#9040, jh-block #9023). This is the **first ACP-tagged PR on gemini-cli in W17–W18**.

**Cross-carrier substrate propagation event**: goose (originator) → gemini-cli (adopter) within ~5h of goose alexhancock #9034 open (2026-05-05T20:02:28Z) and gemini-cli sripasg #26554 (2026-05-06T00:10:17Z). This is a **specifications-driven substrate diffusion**, not a co-incidence on shared code — gemini-cli is implementing the ACP spec that goose authored. Predict at Add.370/371: ≥1 additional ACP-tagged PR on a 3rd carrier (codex, opencode, or litellm). If not, the diffusion is bilateral, not multilateral.

---

## Specific PRs cited per carrier

### anomalyco/opencode (4 NEW + 1 NEW-merged + carried)

- **#25944** `100154a6b51602...` GK0814 `feat: display loaded skills list to save query tokens` 00:46:08Z OPEN (NEW)
- **#25942** `681ce24dc6cc0d...` Flare576 `feat(tui): add width_method config option for ZWJ emoji handling` 00:30:50Z OPEN (NEW)
- **#25941** `24ab053b15ce3f...` Hona `refactor(app): centralize sync query options` 00:13:23Z OPEN (NEW; **M-trigger 3rd-degree cascade member**)
- **#25939** Hona (carried; **MERGED 00:09:32Z this tick**, 21m37s lifespan, M-trigger gap-contraction confirmed)
- **#25937** Hona (carried-merged earlier in Add.368)
- **#25936** ddbd (carried-closed earlier; Z′_human ledger)
- **#25934** rekram1-node (carried-merged Add.368)
- **#25933** G17hao (carried, OPEN, frozen ~2h)
- **#25924** CasualDeveloper (head SHA `916c6c1add21e3...` — appears unchanged from Add.368 frozen state)
- **#25919** adavila0703 (carried, frozen)
- **#25917** nabilfreeman (carried, frozen)
- **#25915** jlongster (carried, frozen)
- **#25909** jliounis (carried)
- **#25907** srivenkateswaran6002 (carried, frozen)
- **#25905** JosephITA (carried, frozen)

### openai/codex (5 NEW + 5 MERGED + carried)

- **#21278** `f4ae2d0e54fc9f...` pakrym-oai `Move message history out of core` 00:31:04Z OPEN (NEW; **M-trigger member 2/2 from pakrym**)
- **#21277** `076cc009c11aef...` mzeng-openai `[mcp] Return Accept early per feedback.` 00:26:08Z OPEN (NEW)
- **#21276** `4ef3a72bbc418b...` pakrym-oai `[codex] Remove unused ListModels op` 00:21:51Z OPEN (NEW; **M-trigger member 1/2 from pakrym**)
- **#21275** `--` iceweasel-oai `Share Git safe-command logic on Windows` 00:21:27Z → **MERGED 00:49:42Z** (28m15s lifespan, NEW open + merge in same tick)
- **#21274** `d80e27f888fd64...` canvrno-oai `[codex] Deduplicate invalid skill load warnings` 00:17:18Z OPEN (NEW)
- **#21272** abhinav-oai (carried; head `5760bc2545c4b7...`, head changed from Add.368 — 1 H-event this tick)
- **#21271** alfozan (carried; head `c085207045c5a9...`, head changed from Add.368's `6c8e40740d14` truncated — 1 H-event)
- **#21266/#21265/#21264** wiltzius-openai J′-triplet (carried, **all 3 frozen** since Add.368, awaiting rebase onto pakrym foundation)
- **#21263** mifan-oai (carried)
- **#21261** bolinfest (carried-merged Add.368)
- **#21260** pakrym-oai (carried; **MERGED 00:16:06Z this tick** — P-368.A foundation confirmed)
- **#21259** cconger (carried-merged Add.368)
- **#21257** bolinfest (head `7587459b1a7e6a...` — head changed from Add.368's `4912a1f26c37` — 1 H-event)
- **#21256** bolinfest (carried; **MERGED 00:15:46Z this tick**)
- **#21255** bolinfest (carried; **MERGED 00:14:29Z this tick**) — bolinfest 21255+21256+21257 stack: 2-of-3 land within 1m17s of each other (15:46Z, 14:29Z) — **first synchronized 2-of-3 merge of bolinfest J→H_sync stack** since Add.366
- **#21251** owenlin0 (carried-merged Add.368)
- **#21250** bolinfest (head `1cf571b200514732...` — head changed from Add.368 — 1 H-event; **MERGED no — wait, #21250 created at 21:45:03Z** — actually it MERGED is unclear from data, treating as carried OPEN with H)
- **#21249** aibrahim-oai (carried, frozen)
- **#21238/#21237/#21236** rhan-oai (carried, frozen since 22:17:31Z)
- **#21235** canvrno-oai (carried)
- **#21231** leoshimo-oai (carried, frozen since 23:55:43Z window)
- **#21219** mchen-oai (carried; **MERGED 00:37:49Z this tick**)

### BerriAI/litellm (6 NEW + 2 MERGED + 4 CLOSED-no-merge + carried)

- **#27258** `b1010dc7523451...` oss-agent-shin `Add proxy server module docstring` 00:55:25Z OPEN (NEW; **Z′_bot candidate, awaiting close**)
- **#27257** `9dc88ccb86241e...` harish-berri `Refactor Bedrock response stream shape handling` 00:54:28Z OPEN (NEW)
- **#27256** `108776610e935c...` app/oss-pr-review-agent-shin `[litellm-agent] Staging → litellm_internal_staging (5/6/2026)` 00:48:52Z OPEN (NEW; bot housekeeping)
- **#27255** oss-agent-shin `Add utils module docstring` → **CLOSED-no-merge 00:48:53Z** (NEW; **Z′_bot member**)
- **#27254** mateo-berri `fix: register reducto/parse-v3 and reducto/parse-legacy in active model pricing file` → **CLOSED-no-merge 00:44:53Z** (NEW)
- **#27253** oss-agent-shin `Add: main.py module description comment` → **CLOSED-no-merge 00:51:27Z** (NEW; **Z′_bot member**)
- **#27252** `733f9d07c71277...` oss-agent-shin `Investigation: placeholder issue` 00:21:36Z OPEN (NEW; **Z′_bot OPEN-intermediate state**)
- **#27251** oss-agent-shin `Fix: make setup wizard config deterministic` → **CLOSED-no-merge 00:20:03Z** (NEW; **Z′_bot member**)
- **#27250** app/oss-pr-review-agent-shin `[litellm-agent] Staging → litellm_internal_staging (5/6/2026)` → **CLOSED-no-merge 00:42:22Z** (bot housekeeping superseded by #27256)
- **#27249** yuneng-berri `[Test] Tests: Stop parametrizing API keys into pytest test IDs` (NEW; **MERGED 00:21:19Z**, JMMM extension member 4/4)
- **#27248** ishaan-berri (carried; prometheus-K member 8/8, OPEN frozen since 23:57:22Z)
- **#27247** Michael-RZ-Berri (carried; **MERGED 00:46:43Z this tick**)
- **#27246** ishaan-berri (carried; prometheus-K member 7/8, frozen)
- **#27245** yuneng-berri (carried-merged Add.368)
- **#27244** michelligabriele → **CLOSED-no-merge 00:54:05Z** (carried-then-closed this tick — first Z-rejection on litellm in 2 ticks)
- **#27242/#27233/#27231/#27230/#27229/#27226** ishaan-berri (carried; prometheus-K members 1–6, all frozen)
- **#27241** yuneng-berri (carried; head **UNCHANGED** from Add.368 `201fa5d42bf1...` — JMMM stalled-OPEN tail)
- **#27240** yuneng-berri (carried-merged earlier)
- **#27239/#27236/#27235** SSO-K cluster (carried, all frozen)
- **#27238** ryan-crabbe-berri (carried)
- **#27237** yassin-berriai (carried-merged Add.368)
- **#27234** Michael-RZ-Berri (carried)
- **#27228** bcyrill (carried; UnifiedLLMGuardrails feat)
- **#27225** stuxf (carried; AWS Inspector security)
- **#27223/#27222** VANDRANKI/Michael-RZ-Berri (carried)
- **#27221** pnookala-godaddy → **CLOSED-no-merge 00:09:33Z** (carried-then-closed; spend updates DB deadlocks fix rejected)
- **#27220** Divyansh200102 (carried)
- **#27219** VANDRANKI (carried; mcp-semantic-filter)

### google-gemini/gemini-cli (2 NEW + carried)

- **#26554** `71e7b29d0ca1f4...` sripasg `fix(acp): move tool explanation from thought stream to tool call content` 00:10:17Z OPEN (NEW; **first ACP substrate sighting on gemini-cli — cross-carrier propagation goose → gemini-cli**)
- **#26553** `1a8c7ec2268418...` app/gemini-cli `# Actions Cost Reduction: CI Matrix and Pulse Optimization` 00:03:39Z OPEN (NEW; bot meta-PR re-file of #26509 — first bot-PR re-file pattern of W18)
- **#26551** tejakusireddy (carried, frozen)
- **#26548** akh64bit (carried, frozen)
- **#26547** gemini-cli-robot (carried; v0.42.0-preview.1 changelog)
- **#26543** golba98 (carried; head `e65185f5934b...` unchanged — frozen)
- **#26540** Abhijit-2592 (carried)
- **#26538** gemini-cli-robot (carried; nightly bump)
- **#26537** gemini-cli-robot (carried; v0.42.0-preview.0 changelog)
- **#26536** alexandrevarga (carried; head `4a9fc8e5cab6...` unchanged — **H-density freeze after 3-tick streak**, matches kalvinnchau pattern)
- **#26535** SandyTao520 (carried)
- **#26529** mbleigh (carried; agent tool lifecycle states)
- **#26528** akh64bit (carried; shell command safety evals)

### QwenLM/qwen-code (0 NEW, 0 MERGED, 0 CLOSED, 0 H — full silence)

- **#3856/#3855/#3854/#3853/#3850/#3849/#3848/#3847/#3844** all carried, all heads UNCHANGED from Add.368 — qwen-code reverts to its W17 baseline silence after 1-tick H-burst at Add.368.

### charmbracelet/crush (0 NEW + 1 MERGED + carried)

- **#2811** taciturnaxolotl (carried; head unchanged, frozen since 23:08:56Z)
- **#2809** taciturnaxolotl (carried, frozen since 20:45:15Z = 4h10m frozen)
- **#2808** ilgax `fix(ui): prevent duplicate skills from rendering` (carried; **MERGED 00:33:09Z this tick**)
- **#2807/#2805** taciturnaxolotl (carried)
- **#2801** ardevd (carried)
- **#2800** BrunoKrugel (carried)

**taciturnaxolotl** author-dominance signal continues: 4 of last 6 crush PRs (#2811, #2809, #2807, #2805), all OPEN-frozen — author has **opened a stack and stopped iterating**, classical K-class candidate-iteration shape but **without merge resolution** (vs ishaan-berri prometheus-K which terminated at n=8 by author-fatigue, taciturnaxolotl appears to terminate by **review-wait stall**).

### block/goose (1 NEW + carried)

- **#9043** `25ebf6a28b891d...` dan4thewin `<redacted>_<vsc-redacted> /responses API` 00:37:04Z OPEN (NEW; **first goose new-open in 2 ticks; intra-carrier substrate handoff signal**)
- **#9040** kalvinnchau (carried; head `47e5ca06a41d...` **UNCHANGED** — H-density freeze, P-368.E falsified)
- **#9039** tulsi-builder (carried, frozen)
- **#9038** jh-block (carried, frozen)
- **#9036** DOsinga (carried)
- **#9035** SarthakB11 (carried)
- **#9034** alexhancock (carried; ACP streamable http spec compliance — substrate originator for sripasg #26554 propagation)
- **#9033** treebird7 (carried)
- **#9030** kalvinnchau (carried; head `b35dafc40e0f...` **UNCHANGED** — H-density freeze)
- **#9025** jamadeo (carried)
- **#9021** idosavion (carried)

---

## Cross-carrier counts this tick (Add.369)

| carrier | OPEN-new | MERGED this tick | CLOSED-no-merge | force-push H | total cited |
|---|---|---|---|---|---|
| anomalyco/opencode | 3 (#25941, #25942, #25944) | 1 (#25939) | 0 | 0 | 15 |
| openai/codex | 5 (#21274, #21275, #21276, #21277, #21278) | 5 (#21275, #21256, #21255, #21260, #21219) | 0 | 4 (#21257, #21250, #21271, #21272) | 24 |
| BerriAI/litellm | 6 (#27252, #27256, #27257, #27258, #27249-also-merged, +1 implied) | 2 (#27249, #27247) | 4 (#27251, #27253, #27254, #27255) +1 carried-closed (#27244) +1 carried-closed (#27221) +1 carried-closed (#27250) | 0 | ~30 |
| google-gemini/gemini-cli | 2 (#26553, #26554) | 0 | 0 | 0 | 13 |
| QwenLM/qwen-code | 0 | 0 | 0 | 0 | 9 |
| charmbracelet/crush | 0 | 1 (#2808) | 0 | 0 | 7 |
| block/goose | 1 (#9043) | 0 | 0 | 0 | 11 |
| **TOTAL** | **17** | **9** | **7** (incl. carried-closed-this-tick) | **4** | **~109** |

**~109 unique PRs cited across 7/7 carriers.** Open:Merge ratio = 17:9 = **1.89** (vs Add.368's 2.6, Add.367's 3.5) — open-velocity continues to moderate, merge-wave cleanup mode dominates. Force-push H count of **4** drops sharply from Add.368's 14 — **regime-end on H-burst confirmed**. Z′_bot CLOSED-no-merge events: **5 net new this tick** (#27251, #27253, #27254, #27255 closed + #27252 opened-still-open; #27244/#27221/#27250 are carried-closures). The Z′ family is now the dominant noise mode of the tick; codex is exclusively merge-active without Z events.

## Falsifiable predictions

- **P-369.A**: At least 1 of wiltzius J′-triplet (#21264, #21265, #21266) force-pushes by Add.370 (rebase onto pakrym #21260 foundation). If all 3 still frozen at Add.370, the convergent-substrate dependency hypothesis (P-367.C, P-368.A part 2) is weakened — wiltzius cluster is independent of pakrym foundation.
- **P-369.B**: pakrym M-trigger cascade extends with **#21280+** (any new pakrym OPEN) within 30m of #21276 OR #21278 merging at Add.370. If pakrym opens 0 new PRs in next tick, the multi-PR M-class variant is a one-off.
- **P-369.C**: Z′_bot sub-class (oss-agent-shin pattern) recurs at Add.370 with **≥3 new oss-agent-shin closes** OR oss-agent-shin's authoring is blocked/pruned by litellm maintainers. If 0 oss-agent-shin closes AND 0 new oss-agent-shin opens, the bot has been stopped — record the regulatory event.
- **P-369.D**: ACP cross-carrier substrate propagation extends to a 3rd carrier (codex, opencode, or litellm) by Add.371 (2-tick budget). If only goose + gemini-cli show ACP-tagged PRs by Add.371, the diffusion is bilateral and not a multi-carrier specifications standard.
- **P-369.E**: gemini-cli #26553 bot-PR re-file (Actions Cost Reduction CI Matrix) closes-no-merge by Add.370 OR re-files again at #26555+ — first observed bot-PR-re-file cycle behavior on gemini-cli. If neither (just sits OPEN), bot housekeeping has shifted to long-running OPEN mode.
- **P-369.F**: Hona M-trigger cascade #25941 either merges within 1h of Add.369 capture (00:55Z + 60m = 01:55Z) AND triggers #25943+ within 5m, OR stalls past 2h. Refactor-class PR review-wait test.
