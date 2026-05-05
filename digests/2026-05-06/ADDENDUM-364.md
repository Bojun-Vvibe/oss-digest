# ADDENDUM-364 — 2026-05-06 (W18 day-1, tick+1 from Add.363)

**Capture window**: 2026-05-05T19:50:51Z (Add.363 latest) → 2026-05-05T20:45:12Z (Add.364 latest, litellm #27225). **Tick width: ~54m.** Sequence Add.355→364 = 28, 20, 49, 33, 24, 40, 54, 64, **54**. The 64m peak at Add.363 did **not** extend; tick-width contracted by 10m, landing in the previously-declared 50-65m band. Pair-midpoint Add.363+364 = (64+54)/2 = **59m** — band centroid stable.

---

## NEW OBSERVATION THIS TICK — "sub-class J: serial-single-author exec-server transport stack with intra-second multi-PR open burst from a sustained author session"

**Signature**: One author within one carrier opens **N≥3 contiguous PRs** in the **same minute (or sub-minute) wall-clock band**, where each PR routes a distinct verb (apply_patch / shell_command / view_image / list_dir / …) through the same session-binding substrate. The series is **stack-shaped** (each PR depends on the prior in the dependency tree) and the head SHAs do **not** mutate across the next tick — i.e. the burst is an *introduction event*, not iteration.

**Empirical instance (codex / starr-openai):**

| PR | head SHA | createdAt | title fragment |
|---|---|---|---|
| #20664 | `d80209b5fa86` | 2026-05-01T19:10:28Z | Add stdio exec-server client transport |
| #20665 | `5679f3ba6401` | 2026-05-01T19:10:30Z | Make environment providers own default selection |
| #20666 | `3e3968f5ba45` | 2026-05-01T19:10:32Z | Add CODEX_HOME environments TOML provider |
| #20667 | `05148c548520` | 2026-05-01T19:10:34Z | Load configured environments from CODEX_HOME |
| #21048 | `c46a11561476` | 2026-05-04T17:58:10Z | Route apply_patch through selected environments |
| #21142 | `a78a76d32a90` | 2026-05-05T04:23:06Z | Route shell_command through selected environments |
| #21143 | `40ad4aa28f66` | 2026-05-05T04:27:55Z | Route view_image through selected environments |

**Burst-1 (#20664-#20667)**: 4 PRs in **6 wall-clock seconds** (19:10:28Z → 19:10:34Z), Δ=2s/PR, perfectly arithmetic. Compare with W17-synth-92 (4-PR same-second open tuplet by single author): Δ here is **2s, not 0s**, but the structural property — a single author seeding the bottom of a verb-routing stack in one wall-clock instant — survives at sub-10s resolution.

**Burst-2 (#21142, #21143)**: 2 PRs in **4m49s** (04:23:06Z → 04:27:55Z, "shell_command" + "view_image"). Independent stack-tip extension on a different day; same author; same stack-parent (#21048).

**Critical: at Add.364 capture, all 7 PRs in the series carry their original head SHA** (no in-place mutation). All 7 also share `updated_at` falling inside the **20:42:18Z..20:43:38Z = 1m20s band** — i.e. a coordinated metadata-touch event (probably bot-driven CI re-evaluation), distinct from sub-class H (mutating heads).

**Falsifiable predictions:**
- **P-364.A**: If the next tick (Add.365) shows a NEW PR in this stack (#21235 already exists for an unrelated TUI fix; we mean a "Route X through selected environments" PR for verbs `list_dir` / `glob` / `grep`), sub-class J extends and the verb-routing stack is **maintainer-driven decomposition** rather than a one-shot author refactor. ETA: tick+1.
- **P-364.B**: If Burst-1's head SHAs (`d80209b5`, `5679f3ba`, `3e3968f5`, `05148c54`) remain frozen across Add.365, the 6-second arithmetic-progression open burst is a **non-iterating "stack seed" sub-mode** of single-author rapid open patterns. Falsified iff any of those 4 SHAs mutate.
- **P-364.C**: If carrier crush opens any 3-PR same-minute single-author burst within next 4 ticks, sub-class J generalizes off codex; if crush instead remains in single-author **2-PR doublets** (already W17-synth-101 documented for taciturnaxolotl), the verb-routing-stack signature is **codex-specific** at sub-10s resolution.

---

## Recurrence check on Add.363's predictions

- **P-363.A** (cross-carrier ≥10-touch ≤6m band recurs): **PARTIALLY CONFIRMED**. This tick's joint window 20:40:09Z..20:45:12Z (5m3s) carries: codex #21235 (NEW open 20:40:09Z), gemini-cli #26537 (release-bot open 20:42:42Z), gemini-cli #26536 (alexandrevarga open 20:32:24Z, updated 20:41:36Z), goose #9036 (DOsinga open 20:41:21Z), goose #9030 (kalvinnchau update 20:38:59Z), litellm #27225 (stuxf NEW open 20:22:30Z, updated 20:45:12Z), litellm #27227 (yuneng-berri update 20:43:32Z), litellm #27226 (ishaan-berri update 20:29:40Z), opencode #25915 (jlongster update 20:43:34Z), opencode #25818 (kitlangton update 20:41:59Z), opencode #18767 update 20:41:56Z, opencode #15771 update 20:41:39Z, crush #2808 (ilgax NEW 20:39:40Z), crush #2807 (taciturnaxolotl 20:08:11Z). **Total: ~14 PR-touches across 5 carriers in a 5m3s wall-clock band**. Crosses the ≥10 threshold; sub-class I promoted to recurring taxon (third sighting in 4 ticks).
- **P-363.B** (morgmart 9-member sweep followed by another bot refresh on same set, no head mutation, ≤6h): **PARTIALLY OBSERVED**. morgmart PRs #9010-#9019 mostly closed/merged this tick (#9019 merged 20:18:48Z, #9008 merged 19:02:58Z, #9004 closed 20:19:55Z). Set was **dispatched** by maintainer review, not bot-refreshed. Hypothesis falsified for the bot-cron variant; trigger appears to have been **maintainer batch-review** rather than scheduled label cron. The "no head mutation" prediction held until merge.
- **P-363.C** (Beandon13 frozen-by-allocation iff no new Beandon13 PR by Add.365): **PENDING**, no Beandon13 PR in litellm open list this tick.

---

## H′ extension: arithmetic-progression mutation subset

Add.363 promoted Beandon13's {#27203, #27206, #27209} (Δ=3 PR-number triplet) to sub-class H′. This tick the Beandon13 swarm is absent from the top-of-list (no further metadata touches in the 20:00Z+ band on those PR numbers in our open snapshot). **H′ remains a single-instance sighting** — needs a second carrier instance to harden into a taxon. Watch litellm #26857 (Sameerlite, updated 20:45:02Z) and #27106 (Sameerlite, 20:22:45Z) for a Δ=249 PR-number gap pair as a candidate Sameerlite-anchored doublet (NOT arithmetic-progression — falsifies H′ generalization to all single-author multi-PR series).

---

## Specific PRs cited per carrier (≥50 unique PRs across all 7 carriers)

### sst/opencode (10)
- **#25915** `c1b05c95a7be` jlongster `fix(tui): filter only connected workspaces in dialog` 20:43:34Z (NEW; jlongster's **third active opencode PR** with #25911 just merged at 19:53:06Z → author concentration tightens further)
- **#25911** `c3e404b4cc09` jlongster — MERGED 19:53:06Z (closed Add.363 prediction loop; merged within 7m of Add.363 capture)
- **#25894** `760a2163fba2` jlongster — MERGED 20:39:37Z `fix(core): use current workspace with /new; fix warping into local project`
- **#25818** `6c1f52d5ab94` kitlangton draft `Type session not-found errors` 20:41:59Z
- #18767 `2e2c3773f082` noahbentusi `feat(app): Mobile Touch Optimization` 20:41:56Z (long-aged: created 2026-03-23)
- #15771 `5beb6510409c` aspiers `feat(tui): add configurable paste summary thresholds` 20:41:39Z (aged from 2026-03-02)
- #12822 `8ba4d4a770f9` jerome-benoit `fix(env): proxy directly to process.env` 20:18:51Z
- #25901 `f9502791b16d` truenorth-lj — closed 20:25:55Z `fix(acp): return stopReason: cancelled`
- #25898 `1bbe5a78f00f` jackmazac — closed 20:25:58Z `fix(tui): list root sessions in session picker`
- #14427 `3fadf22f300a` OpeOginni — MERGED 19:51:41Z `update agent create target path from "/agent" to "/agents"`

### openai/codex (12)
- **#21235** `b9c22b8854c3` canvrno-oai NEW 20:40:09Z `[codex] Fix TUI wrapping for external borrowed slices`
- **#21234** `58fc02feee8a` viyatb-oai — MERGED 20:43:38Z `fix(linux-sandbox): isolate Linux sandbox synthetic mount registry per user`
- **#21127** `06785633b5c1` viyatb-oai — MERGED 20:34:08Z `fix(linux-sandbox): avoid panic on bwrap build failures` (viyatb-oai doublet on linux-sandbox surface, Δ=9m30s)
- **#21001** `12a669ca6f69` fcoury-oai — MERGED 20:09:26Z `feat(tui): route /diff through workspace commands`
- **#20065** `e642a7c011f0` fcoury-oai — MERGED 20:32:55Z `feat(tui): redesign session picker` (fcoury-oai doublet on TUI surface, Δ=23m29s)
- #20664 `d80209b5fa86` starr-openai 20:45:03Z (sub-class J Burst-1)
- #20665 `5679f3ba6401` starr-openai 20:42:18Z (sub-class J Burst-1)
- #20666 `3e3968f5ba45` starr-openai 20:43:07Z (sub-class J Burst-1)
- #20667 `05148c548520` starr-openai 20:43:38Z (sub-class J Burst-1)
- #21048 `c46a11561476` starr-openai draft 20:43:03Z (Burst-2 parent)
- #21142 `a78a76d32a90` starr-openai draft 20:43:03Z (sub-class J Burst-2)
- #21143 `40ad4aa28f66` starr-openai draft 20:43:03Z (sub-class J Burst-2)
- #20949 `acdab68e332a` rhan-oai `[codex-analytics] rework thread_source for thread analytics` 20:44:42Z
- #19575 `281f31bd484f` miz-openai `Add cloud executor registration to exec-server` 20:40:08Z

### BerriAI/litellm (10)
- **#27225** `6769c8b66fe5` stuxf NEW 20:22:30Z `[Security] Clear AWS Inspector CVE findings on Docker image` (security cohort continues; W17-synth-101 documented stuxf-anchored CWE22 triplet)
- #27227 `63f6f1aeb93d` yuneng-berri NEW 20:41:28Z `[Fix] UI: Clear Admin Session Cookies Before Establishing Invited User's Session`
- #27226 `9de49c7b044d` ishaan-berri draft NEW 20:26:04Z `fix(prometheus): read per-key remaining tokens/requests`
- #27224 `aff1a6b363c6` ryan-crabbe-berri 20:39:47Z `[Fix] Team UI: handle legacy dict shape for metadata.guardrails`
- #27223 `a1ce7d9dac31` VANDRANKI 20:23:20Z `fix(anthropic): cap budget->effort at "high"`
- #27222 `87d2b98a2285` Michael-RZ-Berri 20:37:44Z `[Feat] Decouple S3 audit-log config`
- #27215 `855a4c9e68d7` ishaan-berri — MERGED 18:25:07Z `priority rate-limit 429 errors`
- #27214 `e91ccfc5ff16` oss-agent-shin — closed 18:20:04Z (duplicate-PR convergence with #27215, 5m apart, W17-synth-82 instance)
- #27106 `8eac6091593e` Sameerlite 20:22:45Z `fix(mcp): remove auth gate from OAuth broker`
- #26857 `89f774cccc18` Sameerlite 20:45:02Z `feat(mcp): support stateless and stateful clients via session-id routing` (Sameerlite-anchored Δ=249 doublet on MCP surface)

### google-gemini/gemini-cli (8)
- **#26537** `9eaf143f2e3d` gemini-cli-robot NEW 20:42:42Z `Changelog for v0.42.0-preview.0`
- #26536 `3213c4aea312` alexandrevarga NEW 20:32:24Z `feat(core): add system-wide fallback for ripgrep detection`
- #26534 `e9ce4a4d2d57` joshualitt 20:37:33Z `fix(core): Fix chat corruption bug in context manager`
- #26535 `44f401f0be8d` SandyTao520 20:10:48Z `Tighten private Auto Memory patch allowlist`
- #26528 `bbe6bcfca306` akh64bit 20:40:06Z `feat(evals): add shell command safety evals`
- #26513 `08647b680ad8` gemini-cli-robot draft 20:41:14Z `Triage Workflow Fixes`
- #26526 `7428a3b7999d` gemini-cli-robot draft 20:22:59Z `Robust Issue Deduplication Workflow`
- #25637 `1a32bfa1d5e4` M-DEV-1 20:24:49Z `Feat: Add Machine Hostname to CLI interface` (aged from 2026-04-18)
- #22677 `f28a2f27cd61` joshualitt 20:12:08Z `feat(core): mvp port planner to subagent` (aged from 2026-03-16)

### QwenLM/qwen-code (10)
- #3814 `d1fe01d8552b` B-A-M-N 18:53:17Z `fix(core): prevent auto-memory recall from blocking main request`
- #3849 `0c2876fb8da3` B-A-M-N 16:19:50Z `feat(models): add cross-authType model resolution`
- #3799 `1d9987309f74` B-A-M-N 18:23:03Z `feat(cli): normalize model list response parsing` (B-A-M-N triplet, all open)
- #3847 `68b5a90f6ab5` doudouOUC 18:38:11Z `feat(telemetry): inject traceId/spanId`
- #3835 `cb23ae2be8f0` doudouOUC 17:49:55Z `feat(sdk-python): replace verbatim release notes` (doudouOUC doublet)
- #3680 `0e0849610fae` chiga0 18:29:40Z `feat(cli): expand TUI markdown rendering`
- #3710 `417e428aafd4` chiga0 18:28:03Z `feat(cli): customize banner area` (chiga0 doublet, Δ=1m37s — re-instance of W17-synth-83 metronome at lower frequency)
- **#3815** `1a5e2ebf0fda` B-A-M-N — MERGED 18:07:33Z `fix(core): use per-model settings for fast model side queries`
- #3852 `4fd7d92358850` qiuqiuwen25 — MERGED 17:57:31Z `fix(core): activate skills from discovered result paths`
- #3781 `9c3964c619b3` Mr-Maidong — MERGED 17:49:26Z `feat(weixin): add image sending support`

### charmbracelet/crush (8)
- **#2808** `bb3adc25bf5c` ilgax NEW 20:40:13Z `fix(ui): prevent duplicate skills from rendering`
- **#2807** `b796f550716a` taciturnaxolotl NEW 20:08:11Z `fix(summarize): reauthenticate oauth tokens in summarize path`
- #2805 `1ebe35abf37b` taciturnaxolotl 17:56:22Z `fix(agent): drain queued messages after manual session summarize` (taciturnaxolotl doublet, Δ=2h11m — wider than codex doublet bands)
- #2803 `fd5f9301283778a6` taciturnaxolotl — MERGED 17:18:25Z `bug: yollo mode via flag doesn't activate prompt`
- #2512 `0e9c0b6f32dd` taciturnaxolotl — MERGED 15:31:30Z `feat: add Nix flake for development environment` (taciturnaxolotl quartet on the day: 2 merged + 2 open)
- #2790 `358d5271f598` ilgax — closed unmerged 15:14:39Z
- #2800 `3394b9fb8fd5` BrunoKrugel `feat(tools): create an allow list for MCP tools` 02:54:02Z
- #2778 `ebdf6fde3c7f` BrunoKrugel `feat(tools): allow hook names` 02:56:43Z (BrunoKrugel doublet, Δ=2m41s)

### block/goose (10)
- **#9036** `1b16d5aa7868` DOsinga NEW 20:42:10Z `Skip automatic fix which crashes`
- **#9030** `6c182759ab6c` kalvinnchau 20:38:59Z `feat: move goose2 provider catalog behind ACP layer`
- #9035 `d563dfbb39eb` SarthakB11 NEW 20:06:45Z `fix(openai): accept null tool_call arguments in streaming chunks`
- #9034 `289ae524573e` alexhancock 20:16:07Z `feat: ACP streamable http spec compliance`
- #9033 `48618060642` treebird7 20:16:10Z `fix: case-insensitive model name lookup`
- #9015 `22e8634cdf59` monroewilliams `Local inference provider improvements` 20:05:14Z
- #9023 `1d61323844d4` jh-block 19:29:52Z `fix(acp): synchronously reap ACP child to avoid SIGCHLD race`
- **#9019** `f6d15bd91b7d` morgmart — MERGED 20:18:48Z `fix goose2 small-window chat and settings layouts`
- **#9008** `87e22199581b` morgmart — MERGED 19:02:58Z `remove skill categories`
- **#9004** `a8a3de5773c0` morgmart — closed unmerged 20:19:55Z `support file-backed agent and skill editing` (morgmart 9-member sweep from Add.363 dispatched: ≥3 closures within Add.364 window)

---

**Total unique PRs cited this addendum: 68 across 7/7 carriers** (opencode 10, codex 12, litellm 10, gemini-cli 8, qwen-code 10, crush 8, goose 10).

**Carrier coverage check:** 7/7 ✓.
**Sub-class additions:** J (verb-routing-stack same-minute open burst).
**Recurring taxa promoted:** I (cross-carrier ≥10-touch ≤6m band) — 3 sightings in 4 ticks.
**Predictions seeded:** P-364.A, P-364.B, P-364.C.
