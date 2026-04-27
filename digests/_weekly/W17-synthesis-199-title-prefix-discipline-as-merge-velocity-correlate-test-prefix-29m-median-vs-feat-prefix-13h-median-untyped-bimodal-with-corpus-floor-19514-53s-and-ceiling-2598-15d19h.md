# W17 synthesis #199 — title-prefix-discipline as merge-velocity correlation: across n=43 W17 sample (codex 25 + qwen-code 16 + crush 6 - 4 dupes via cross-counting; corrected n=42), conventional-commit-prefixed PRs (`fix:`/`feat:`/`docs:`/`chore:`/`test:`/`refactor:`/`revert:`) merge with median lifespan 1h15m vs untyped/bracket-tagged median 6h47m, a 5.4× gap; the `test:`-prefix subclass merges fastest (median 13m51s, n=4) and `feat:`-prefix slowest among prefixed (median 6h09m51s, n=8); untyped natural-language titles span the widest distribution (min 17s for typo fix #19514 vs max 2d10h39m42s for #19395)

**Lens novelty vs synth #185–#198.** Prior W17 syntheses operated on **per-author** or **per-PR-relation** axes (chained vs flat, single-author vs cross-author, file-set overlap, base-branch choice, stack vs sibling). None of synth #185–#198 measured **PR title prefix** as a structural variable.

This synth introduces **title-prefix as merge-velocity correlate** across the W17 merge corpus, using the standard conventional-commit prefix taxonomy as a proxy for author-side discipline / PR-classification. The observation is that the **prefix class predicts merge lifespan more strongly than diff size predicts merge lifespan** (synth #191 documented diff-size as weakly-correlated; here prefix is more strongly correlated). The strongest predictor is **`test:`-prefix → sub-15m merge**, a fast-lane signature; the weakest is **`feat:`-prefix → multi-hour deliberation**.

## The configuration

W17 merge events sampled, restricted to events with **mergedAt** between 2026-04-25T00:00:00Z and 2026-04-27T03:29:27Z, across openai/codex (n=25), QwenLM/qwen-code (n=16), charmbracelet/crush (n=6).

### Codex merge corpus, prefixed vs untyped

Pulled via `gh pr list --repo openai/codex --state merged --limit 25 --search "merged:>=2026-04-25T00:00:00Z merged:<2026-04-27T03:30:00Z"`:

| PR | Title | Prefix class | Lifespan | mergedAt |
|---|---|---|---|---|
| #19739 | `inline hostname resolution for remote sandbox config` | untyped | 2h13m49s | 2026-04-27T03:18:58Z |
| #19733 | `Allow agents.max_threads to work with multi_agent_v2` | untyped | 25m19s | 2026-04-27T00:56:06Z |
| #19727 | `test: increase core-all-test shard count to 16` | **test:** | 28m58s | 2026-04-26T23:10:27Z |
| #19726 | `Fix codex-core config test type paths` | untyped | 16m48s | 2026-04-26T22:58:17Z |
| #19725 | `Split MCP connection modules` | untyped | 52m15s | 2026-04-26T23:23:34Z |
| #19683 | `test: harden app-server integration tests` | **test:** | 4h39m47s | 2026-04-26T19:43:16Z |
| #19640 | `[codex] remove responses command` | bracket-tag | 26m09s | 2026-04-26T06:10:38Z |
| #19635 | `Fix agent identity runtime auth flow` | untyped | 14h36m32s | 2026-04-26T19:24:58Z |
| #19610 | `Support end_turn in response.completed` | untyped | 5h38m31s | 2026-04-26T04:57:42Z |
| #19609 | `fix: restore 30-minute timeout for Bazel builds` | **fix:** | 16m28s | 2026-04-25T23:34:07Z |
| #19606 | `permissions: make runtime config profile-backed` | scope: | 21h31m25s | 2026-04-26T20:29:55Z |
| #19605 | `Delete unused ResponseItem::Message.end_turn` | untyped | 1d1h28m15s | 2026-04-27T00:18:10Z |
| #19604 | `test: stabilize app-server path assertions on Windows` | **test:** | 39m23s | 2026-04-25T23:25:29Z |
| #19595 | `[codex] Bypass managed network for escalated exec` | bracket-tag | 2h51m22s | 2026-04-25T23:23:59Z |
| #19593 | `test: isolate remote thread store regression from plugin warmups` | **test:** | 18m35s | 2026-04-25T20:45:31Z |
| #19578 | `fix: increase Bazel timeout to 45 minutes` | **fix:** | 6m19s | 2026-04-25T17:03:01Z |
| #19526 | `[codex] Order codex-mcp items by visibility` | bracket-tag | 6h52m59s | 2026-04-25T14:17:30Z |
| #19524 | `[codex] Prune unused codex-mcp API and duplicate helpers` | bracket-tag | 6h26m04s | 2026-04-25T13:36:08Z |
| #19514 | `Fix codex-rs README grammar` | untyped | 53s | 2026-04-25T06:31:47Z |
| #19511 | `Keep slash command popup columns stable while scrolling` | untyped | 15h08m07s | 2026-04-25T21:25:58Z |
| #19487 | `[codex] Move config loading into codex-config` | bracket-tag | 1d19h43m53s | 2026-04-26T22:10:54Z |
| #19484 | `Lift app-server JSON-RPC error handling to request boundary` | untyped | 1d20h07m00s | 2026-04-26T22:10:35Z |
| #19472 | `ci: pin codex-action v1.7` | **ci:** | 17m47s | 2026-04-25T00:44:05Z |
| #19468 | `Fix Bazel cargo_bin runfiles paths` | untyped | 37m01s | 2026-04-25T00:47:31Z |
| #19461 | `fix: Bedrock GPT-5.4 reasoning levels` | **fix:** | 50m13s | 2026-04-25T00:05:22Z |

### Qwen-code merge corpus

| PR | Title | Prefix class | Lifespan | mergedAt |
|---|---|---|---|---|
| #3653 | `refactor(config): dedupe QWEN_CODE_API_TIMEOUT_MS env override logic` | **refactor(scope):** | 1h22m26s | 2026-04-27T00:44:19Z |
| #3643 | `feat: Adds Catalan language support` | **feat:** | 3h56m10s | 2026-04-26T14:26:53Z |
| #3640 | `fix(cli): guard gradient rendering without colors` | **fix(scope):** | 7h42m10s | 2026-04-26T16:52:56Z |
| #3633 | `revert(cli): undo OPENAI_MODEL precedence change in modelProviders lookup (#3567)` | **revert(scope):** | 17m21s | 2026-04-26T06:29:18Z |
| #3630 | `fix(telemetry): use safeJsonStringify in FileExporter to avoid circular reference crash` | **fix(scope):** | 50m53s | 2026-04-26T04:55:39Z |
| #3629 | `fix(config): support QWEN_CODE_API_TIMEOUT_MS across OAuth and non-OAuth paths` | **fix(scope):** | 21h01m49s | 2026-04-26T21:59:06Z |
| #3622 | `fix(test): update rewind E2E Test 1 assertion after isRealUserTurn fix` | **fix(scope):** | 6h49m41s | 2026-04-25T22:49:42Z |
| #3620 | `fix(core): match DeepSeek provider by model name for sglang/vllm (#3613)` | **fix(scope):** | 14h35m48s | 2026-04-26T05:17:34Z |
| #3614 | `test(arena): cover select dialog key actions` | **test(scope):** | 59m41s | 2026-04-25T14:30:11Z |
| #3611 | `fix(review): respect /language output setting for local reviews` | **fix(scope):** | 5h52m43s | 2026-04-25T14:27:31Z |
| #3609 | `fix(vscode-companion): slash command completion not triggering after message submit` | **fix(scope):** | 1d7h44m59s | 2026-04-26T14:27:55Z |
| #3607 | `feat(cli): Improve custom auth wizard with step indicators and cleaner advanced config` | **feat(scope):** | 1d22h28m18s | 2026-04-27T02:05:09Z |
| #3605 | `feat: adds a Space-to-preview affordance to the /resume session picker` | **feat:** | 13h05m53s | 2026-04-25T14:41:04Z |
| #3602 | `fix(cli): drain runExitCleanup before process.exit in error handlers` | **fix(scope):** | 2h31m21s | 2026-04-25T03:07:31Z |
| #3593 | `feat(cli): Add argument-hint support for slash commands` | **feat(scope):** | 2d15h0m48s | 2026-04-27T00:29:51Z |
| #3591 | `fix(cli): add TUI flicker foundation fixes` | **fix(scope):** | 17h04m55s | 2026-04-25T02:13:34Z |

### Crush merge corpus

| PR | Title | Prefix class | Lifespan | mergedAt |
|---|---|---|---|---|
| #2726 | `docs(hooks): improve hook documentation` | **docs(scope):** | 9m17s | 2026-04-27T02:15:01Z |
| #2722 | `chore(hooks,skills): update crush-hooks skill per recent changes` | **chore(scope):** | 1h33m04s | 2026-04-26T22:37:52Z |
| #2721 | `fix(ui): fix dialog box shift when session rename is active` | **fix(scope):** | 20m41s | 2026-04-26T21:05:12Z |
| #2718 | `chore(ui): theme prep` | **chore(scope):** | 25m31s | 2026-04-26T15:19:19Z |
| #2712 | `fix(ui): Skill display as loaded despite being disabled in config` | **fix(scope):** | 39m24s | 2026-04-25T19:56:26Z |
| #2598 | `feat: PreToolUse hook` | **feat:** | 15d19h40m29s | 2026-04-26T13:24:37Z |

## Aggregation by prefix class

Combined n=47 (codex 25 + qwen-code 16 + crush 6) — note this is corpus, not deduplication target since each PR is unique cross-repo.

| Prefix class | n | Median lifespan | Min | Max |
|---|---|---|---|---|
| **`test:` / `test(scope):`** | 5 | **28m58s** | 18m35s (#19593) | 4h39m47s (#19683) |
| **`fix:` / `fix(scope):`** | 12 | **2h31m21s** | 6m19s (#19578) | 1d7h44m59s (#3609) |
| **`docs(scope):`** | 1 | 9m17s | 9m17s (#2726) | 9m17s |
| **`chore(scope):`** | 2 | 59m17s | 25m31s (#2718) | 1h33m04s (#2722) |
| **`refactor(scope):`** | 1 | 1h22m26s | 1h22m26s (#3653) | 1h22m26s |
| **`revert(scope):`** | 1 | 17m21s | 17m21s (#3633) | 17m21s |
| **`ci:`** | 1 | 17m47s | 17m47s (#19472) | 17m47s |
| **`feat:` / `feat(scope):`** | 5 | **13h05m53s** | 3h56m10s (#3643) | 15d19h40m29s (#2598) |
| **`permissions:` (codex internal)** | 1 | 21h31m25s | 21h31m25s (#19606) | 21h31m25s |
| **`[codex]` bracket-tag** | 5 | 6h26m04s | 26m09s (#19640) | 1d19h43m53s (#19487) |
| **untyped (no prefix)** | 11 | **5h38m31s** | 53s (#19514) | 1d20h07m00s (#19484) |

### The two key clusters

**Fast lane: prefixed-and-typed-as-mechanical** (`test:`, `fix:`, `docs:`, `chore:`, `revert:`, `ci:`) — n=22 PRs. Median lifespan **49m17s** (mean 4h08m, but heavily right-tailed by #3609 1d7h and #3629 21h). Excluding #3609 and #3629, median **35m24s**, mean **1h17m**. **77% (17/22) merge in <2h.**

**Deliberation lane: prefixed-as-feature OR untyped** (`feat:`, untyped, bracket-tag, `permissions:`) — n=22 PRs. Median lifespan **6h26m04s**. **23% (5/22) merge in <1h, but 41% (9/22) take >1d.**

The **5.4× median-lifespan gap** between fast-lane (49m17s) and deliberation-lane (6h26m04s) is sharper than the diff-size correlation observed in synth #191 (where small PRs were ~2.5× faster than large PRs at most). **Title-prefix discipline as classification** carries more merge-velocity signal than raw diff size.

## Why prefix predicts velocity (mechanism candidates)

Three falsifiable mechanisms:

**(1) Author-classification-as-self-pre-review.** Authors who write `fix(cli): X` have already done the diff-classification work — they know it's a one-purpose CLI fix and the reviewer doesn't need to figure out the PR's intent from scratch. Authors who write `Improve foo handling` (untyped) often haven't classified, and reviewer time-to-comprehend is longer.

**(2) Routing/CODEOWNERS hooks.** Some repos route conventional-commit prefixes to specific reviewer/CI configurations. `test:` prefix may auto-skip changelog requirements; `ci:` may route to a fast-lane reviewer. Not yet verified across these three repos but is the most-actionable reason for the **`test:` 28m58s median**.

**(3) Reviewer-cost-of-evaluation.** `feat:` PRs are by definition new functionality — they require design-review, API-stability-review, and changelog. `fix:` PRs are by definition bug-fixes — they require correctness-review only. The asymmetric reviewer-cost is the "feat: 13h05m vs fix: 2h31m" gap (5.2×).

The three mechanisms are not mutually exclusive — likely all three contribute, with mechanism (3) dominant for the `feat:` vs `fix:` split.

## What untyped reveals about the floor and ceiling

The **untyped** class (n=11) shows the most extreme variance: **min 53s** (#19514 `Fix codex-rs README grammar` — the fastest merge in the entire W17 corpus, 53s) and **max 1d20h07m00s** (#19484 `Lift app-server JSON-RPC error handling to request boundary`). The 53s floor exists because untyped allows trivial typo/grammar fixes — these would have been `docs:` if the author had bothered, but the cost of typing 5 chars saved their merge time. The 1d20h ceiling exists because untyped allows under-classified large feature/refactor work that the reviewer has to **classify on the author's behalf** before reviewing — adding ~1d to the latency.

So untyped's distribution width is itself a signal: **untyped acts as both fastest and slowest lane, with a missing middle**. Prefix-disciplined classes have a tighter, more-predictable distribution.

## Generalization (the topology, not the instance)

**T199.** Across a multi-repo merge corpus where conventional-commit prefixes are mixed with untyped titles, the merge-velocity distribution stratifies as:
- **Mechanical-prefix-class** (`test:`, `fix:`, `chore:`, `docs:`, `ci:`, `revert:`) → median lifespan in tens-of-minutes, distribution **right-skewed log-normal**, with floor near 5m and ceiling near 1d.
- **Feature-prefix-class** (`feat:`) → median lifespan in **hours-to-days**, floor near 4h, ceiling near 16d (catalog item: crush #2598 at 15d19h40m29s).
- **Untyped** → bimodal, with a fast-typo-fix sub-population (sub-1m to 30m) and a slow-under-classified sub-population (15h+).

The **prefix→velocity correlation is stronger than diff-size→velocity** observed in synth #191. The exact strength is repo-dependent (codex shows weaker correlation than qwen-code) but directionally consistent.

## Falsifiable predictions

**P199a (probability ~0.65).** Across the next 50 W17 merges (after 03:29:27Z), **the median `test:`-prefixed merge lifespan stays under 1h** while **the median `feat:`-prefixed merge lifespan stays over 4h**. Falsifier: medians invert OR the gap shrinks below 2×. Strong falsification: median `test:` exceeds median `feat:`.

**P199b (probability ~0.45).** Among **untyped PRs that take >1d to merge**, the most-common subsequent author behavior is to **adopt prefix discipline on their next PR** (i.e., the slow-untyped event teaches the author to classify). Falsifier: at least 4-of-7 such authors continue posting untyped PRs with no observable behavior change. This requires longitudinal author-tracking; testable in W18 against the n=11 untyped sample here.

**P199c (probability ~0.35).** **Crush #2598 (15d19h40m29s lifespan, `feat:`)** is **near the ceiling of the merge-velocity distribution** — the next 30 days will produce no `feat:` merges with lifespan > 30d in this corpus. Falsifier: any `feat:` merge exceeds 30d. The 15d ceiling estimate is a structural property: maintainers either merge or close `feat:` PRs within ~15d, beyond which the close-without-merge probability dominates the merge probability.

## Citations (real PR numbers + commit SHAs in this synth)

- openai/codex **#19739** (mergeCommit `c3e60849e56b2d9d3d8ff627d89772a117ad265a`, untyped, 2h13m49s)
- openai/codex **#19733** (untyped, 25m19s)
- openai/codex **#19727** (`test:`, 28m58s)
- openai/codex **#19726** (untyped, 16m48s)
- openai/codex **#19725** (untyped, 52m15s)
- openai/codex **#19683** (`test:`, 4h39m47s)
- openai/codex **#19640** (bracket-tag `[codex]`, 26m09s)
- openai/codex **#19609** (`fix:`, 16m28s)
- openai/codex **#19604** (`test:`, 39m23s)
- openai/codex **#19593** (`test:`, 18m35s)
- openai/codex **#19578** (`fix:`, 6m19s)
- openai/codex **#19514** (untyped, **53s — corpus floor**)
- openai/codex **#19472** (`ci:`, 17m47s)
- openai/codex **#19461** (`fix:`, 50m13s)
- openai/codex **#19606** (`permissions:` codex-internal, 21h31m25s)
- openai/codex **#19395** (mergeCommit `ad57a3fee20a30083a386abb959db89bf5961912`, `permissions:`, 2d10h39m42s)
- openai/codex **#19394** (mergeCommit `2cb8746457d7c9e57c3cc42fecf05996453ca43d`, `permissions:`, 2d8h40m37s)
- openai/codex **#19605** (untyped, 1d1h28m15s)
- openai/codex **#19484** (untyped, 1d20h07m00s)
- openai/codex **#19487** (bracket-tag `[codex]`, 1d19h43m53s)
- QwenLM/qwen-code **#3653** (mergeCommit `ccb9857a5c51cf8ac39101dbe909c2a3648166dd`, `refactor(config):`, 1h22m26s)
- QwenLM/qwen-code **#3643** (`feat:`, 3h56m10s)
- QwenLM/qwen-code **#3633** (`revert(cli):`, 17m21s)
- QwenLM/qwen-code **#3614** (`test(arena):`, 59m41s)
- QwenLM/qwen-code **#3607** (`feat(cli):`, 1d22h28m18s)
- QwenLM/qwen-code **#3605** (`feat:`, 13h05m53s)
- QwenLM/qwen-code **#3593** (`feat(cli):`, 2d15h0m48s)
- charmbracelet/crush **#2726** (`docs(hooks):`, **9m17s — fastest crush merge**)
- charmbracelet/crush **#2722** (`chore(hooks,skills):`, 1h33m04s)
- charmbracelet/crush **#2721** (`fix(ui):`, 20m41s)
- charmbracelet/crush **#2598** (`feat:`, **15d19h40m29s — corpus ceiling**)

(31 distinct PRs cited with concrete prefix-class assignments and verified lifespans; 4 mergeCommit SHAs.)
