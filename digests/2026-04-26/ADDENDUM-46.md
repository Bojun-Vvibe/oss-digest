# ADDENDUM-46 — 2026-04-26

**Window:** 06:00:26Z → 06:38:40Z (38m14s)

**Repos scanned:** openai/codex, BerriAI/litellm, sst/opencode, anomalyco/opencode, block/goose, QwenLM/qwen-code, cline/cline, All-Hands-AI/OpenHands, Aider-AI/aider

## Merges in window

- **[openai/codex#19640]** — `tibo-openai` (Thibault Sottiaux), base `main`, **+7/-289**. Title `[codex] remove responses command`. Created **05:44:29Z** (in Add.45 window, where it was the only open), **MERGED 06:10:38Z**, mergeCommit `87bc72408c5ef08f8d21f2cdd00c55451c3be33f`. Lifespan **26m09s** (sub-30m). The deletion-dominant `responses`-command removal called out in Add.45 landed first thing this window — codex merge drought (1h02m44s at Add.45 close) **terminated at the 13m04s mark** of this window.
- **[BerriAI/litellm#26441]** — `harish-berri`, base `main`, +133/-16. Title `fix(redis): cache GCP IAM token to prevent async event loop blocking`. Created 2026-04-24T17:02:03Z, **MERGED 06:13:40Z**, mergeCommit `2b8b61412071818ffb85f17b61e7121130e21539`. Lifespan **37h11m37s**. **First litellm main-branch merge since #26545 at 03:07:01Z** — gap-since-prior-litellm-merge = **3h06m39s** (Add.45 reported 2h53m25s at close; gap continued growing 13m14s into this window before resolving). Authored by `harish-berri` (not the staging-bot `yuneng-berri` that drove the Add.44/45 staging churn) — **first non-bot litellm main-merge in the day's tracked window**.
- **[QwenLM/qwen-code#3633]** — `tanzhenxin`, base `main`, **+2/-254**. Title `revert(cli): undo OPENAI_MODEL precedence change in modelProviders lookup (#3567)`. Created **06:11:57Z**, **MERGED 06:29:18Z**, mergeCommit `a6b0b7e579049364ec79eeadcb5bd8db217ed8de`. Lifespan **17m21s**. **This is a same-day rollback** of `B-A-M-N`'s #3567 (merged 2026-04-24T23:19:27Z, +254 lines on the same surface). Net effect: 1d07h09m51s after the original change landed it has been undone by a **different author** (tanzhenxin, not B-A-M-N). Surface: `OPENAI_MODEL` precedence in `modelProviders` CLI lookup. See synth #137.

**Total merges: 3** (codex 1, litellm 1, qwen-code 1; sst/opencode 0, anomalyco 0, goose 0, cline 0, OpenHands 0, aider 0). Up from Add.45's 1 merge. Merge rate 3/38m14s = **~4.71 merges/hr**.

## Closes-without-merge in window

- **anomalyco/opencode mass-close sweep at 06:35:02Z–06:35:54Z** — **17 PRs closed in 52s** (median inter-close interval ~3.0s). All targets aged **60–65 days** (created 2026-02-19 → 2026-02-25). Authors heterogeneous (`markokraemer`, `rapcal`, `chindris-mihai-alexandru` (×2), `albahrani`, `voyleg`, `ANSHSINGH050404`, `romain-trotard`, `dbpolito`, `gab-core`, `zerone0x`, `ppodds`, `praxstack`, `brunoprietog`, `pgermishuys`, `rschaeuble`, `andrea-tomassi`). Surfaces span tui, docs, cli, agents, formatter, ACP, compaction. PRs cited (chronological close order, oldest-created first):
  - #14245 `fix: compaction bugs` (created 2026-02-19T07:00:46Z, closed 06:35:02Z, age **65d23h34m16s**)
  - #14498 (2026-02-20, ACP port), #14754 (2026-02-23, docs/Weave), #14762 (2026-02-23, ui aria-hidden), #14826 (2026-02-23, ContextOverflowError auto-compaction), #14873 (2026-02-24, docs), #14883 (2026-02-24, formatter override), #14928 (2026-02-24, jump-to-message), #14938 (2026-02-24, Focus Mode), #14943 (2026-02-24, fr docs), #14947 (2026-02-24, ESC/provider list), #14954 (2026-02-24, JSON pipe truncation), #14961 (2026-02-24, Task tool model param), #14984 (2026-02-25, MCP Exa docs), #14987 (2026-02-25, JSONC env escape), #15014 (2026-02-25, "inherit" model), #15024 (2026-02-25T06:30:29Z, opencode-channels, closed **06:35:54Z**, age **60d00h05m25s**).
  - Inter-close timestamps form a near-monotone 3.0s grid: 06:35:02→05→08→11→15→18→21→24→28→31→35→38→41→44→48→51→54. **17 deltas of ≈3.0s ± <0.5s** ⇒ classic bot-driven sweep signature.
  - Discriminator vs. synth #98 (which captured n=3 sub-10s sweep at Add.18): **n=17 here, span 52s, age window 60–66 days, multi-surface, pure stale-cleanup (no surface concentration)**. See synth #138.

- **[anomalyco/opencode#24428]** — Already accounted in Add.45 (closed 05:50:58Z) — no new closes-without-merge from this PR. **But see Opens (#24443).**

**Total closes-without-merge: 17** (all anomalyco). **Largest single-window closure batch in the recent ADDENDUM series.**

## Opens in window

- **[anomalyco/opencode#24443]** — `claudianus` (ryan.h.park), base `dev`, **+53/-9**, headRefOid `fa478297f13d87ae544034a07398d5a0bda7f336`. Title `fix(provider): preserve reasoning_content on second interleaved pass (#24146 follow-up)`. Created **06:19:03Z**, updated 06:19:12Z. **Identical headRefOid AND identical +53/-9 line counts** to Add.45's closed-without-merge **#24428** (closed 05:50:58Z, same author). Title differs only by adding `(provider)` scope and dropping `existing` — **content is byte-identical (same SHA)**. Time gap close→re-open: **28m05s**. This is a **bare-refile** (same author, same SHA, same surface, no rework) — distinct from synth #135's surface-handoff hypothesis (which posited tiffanychum #24441 as the takeover). claudianus did NOT cede the surface; the close was tactical. tiffanychum #24441 (Add.45) and claudianus #24443 now co-exist on the reasoning-tokens/reasoning_content surface. See synth #137.

**Total opens: 1.** Open rate 1/38m14s = **~1.57 opens/hr** (down from Add.45's 2.88/hr).

## Notable updates

- **[openai/codex bolinfest stack rebase#10]** — All five stack PRs **#19606 / #19395 / #19394 / #19393 / #19392** show **identical updatedAt = 06:37:19Z**. New head SHAs:
  - #19606: `400d4a82e58eb9cc01033dd4648e9b9ca1ec48e5` (was `071931f5f6463ca194162df9de62b56aed5f05d2`)
  - #19395: `118e7c67478765cd43dee72f9a2c516466069d08`
  - #19394: `49c5c54af50f5aa259efeae2b1fc1cc2607e279e`
  - #19393: `bda0dbc5c249f06835b65aefbad482c370eda9a9`
  - #19392: `5d12fcb4d554aa233e49e4307788d61c06398cb4`
  - All five SHAs differ from prior — true rebase, not metadata touch.
  - Inter-rebase cadence: rebase#8 04:57:02Z → rebase#9 05:58:28Z (delta9=1h01m26s) → **rebase#10 06:37:19Z, delta10 = 38m51s**.
  - **Stack-lockstep n=5 property RESTORED**: Add.45 flagged it as "at risk" because only #19606 surfaced an update; rebase#10 fired all five with sub-second alignment. The Add.45 asymmetric-rebase hypothesis is **falsified at rebase#10**. The lockstep is intact; rebase#9 was likely an artifact of polling resolution rather than a true single-PR rebase. See synth #138.
  - Cadence sequence updated: 1h08m → 1h08m → 25m54s → 1h01m26s → **38m51s**. The series is **NOT** monotone-decreasing nor band-bounded — it now exhibits a **bimodal "near-1h vs sub-40m"** pattern (modes ~1h05m and ~32m). Synth #131's bounded-oscillation model needs regime-switch refinement — see synth #138.
- **[openai/codex#19606 / #19395 / #19394 / #19393 / #19392]** — same lockstep event as above; all five now part of the rebase#10 cohort.
- **[openai/codex#19635]** — `shijie-oai` (Shijie Rao), base `main`. Title `Fix agent identity runtime auth flow`. Created 04:48:26Z (pre-window), updated **06:10:10Z**. First in-window touch. New author surfacing — `shijie-oai` not seen in recent ADDENDUM series. Single non-cohort PR.
- **[openai/codex#19537]** — `mzeng-openai`. Title `[mcp] Save Plugin MCP policies to config.toml`. Updated **06:10:40Z**. Single touch.
- **[openai/codex#19591]** — `etraut-openai`. Last touched **05:54:33Z** (Add.45 window) — **no in-window touch this Add**. etraut author/cohort decoupling continues; cohort #19618/#19620/#19625/#19630/#19631 still quiescent (gap-at-window-close ≥ **3h12m37s** since 03:26:03Z).
- **[BerriAI/litellm#26504]** — `Gzhao-redpoint`, OPEN. Title `feat: add FuturMix as named OpenAI-compatible provider`. Updated **06:26:15Z**. Same author has companion **[Aider-AI/aider#5070]** `docs: add FuturMix LLM provider documentation` updated **06:27:13Z** — **cross-repo same-author provider-onboarding pair** (feat in litellm, docs in aider, **58s apart**). Echo of synth #81 (vendor self-onboarding feat-then-docs ordering) but cross-repo.
- **[BerriAI/litellm#26460]** — `milan-berri`, OPEN. Updated **05:55:40Z** — boundary touch (within Add.45 window). No in-Add.46 touch.
- **[BerriAI/litellm#25765]** — `aayushbaluni`, OPEN since 2026-04-15. Updated **06:13:47Z** — first in-window touch, lifespan-at-update **10d20h19m25s**. Long-tail Anthropic tool-use sanitization PR continues to refresh.
- **[QwenLM/qwen-code#3617]** — `mohitsoni48`. Updated **06:23:19Z**. Continues long-tail refresh.
- **[QwenLM/qwen-code#3631]** — `B-A-M-N`. Updated **06:10:26Z** — first post-Add.45 touch. The asymmetric-half doublet (vs merged #3630) refreshes; lifespan-at-update **2h05m38s**.
- **[QwenLM/qwen-code#3488]** — `tanzhenxin`. Updated **06:32:07Z**. Long-tail background-agent UI feat.
- **[QwenLM/qwen-code#3471]** — `tanzhenxin`. Updated **06:31:54Z** (13s before #3488 — same-author near-simultaneous touch on stack). Long-tail model-facing agent control feat.
- **[anomalyco/opencode#23360]** — `yangelaboy`. Updated **06:32:12Z**. Long-tail `/cd` TUI command, lifespan-at-update **7d05h54m43s**.
- **[anomalyco/opencode#15603]** — `aklajnert`. Updated **06:27:21Z**. Long-tail (created 2026-03-01), lifespan-at-update **56d13h15m45s**. Notably, this PR is in the **age-band of the mass-close sweep** but was NOT swept — discriminator: it is open *and* recently active, while sweep targets had no recent author touch.

## Cross-repo observations in window

- **Cross-repo same-author provider-onboarding pair**: `Gzhao-redpoint` updates litellm #26504 (feat, 06:26:15Z) and aider #5070 (docs, 06:27:13Z) within **58s**. Both are FuturMix provider onboarding — first cross-repo pair of this signature in the daily series (synth #81 was within-vendor; this is across two third-party CLI repos by an outside contributor).
- **Same-day revert event**: qwen-code #3633 reverts #3567 by a different author 1d07h09m51s after merge. Cross-author surface-rejection signature. See synth #137.
- **Bot-driven mass-close on anomalyco**: 17 stale PRs in 52s — first such large sweep observed in the daily series. See synth #138.
- **claudianus bare-refile**: #24428 → #24443, byte-identical, 28m05s gap. Distinct from any prior pattern in the synth corpus. See synth #137.

## Background activity

- **block/goose**: zero in-window activity (last #8851 at 02:28:17Z, gap **4h10m22s**).
- **cline/cline**: zero in-window activity (last #10414 at 02:57:14Z, gap **3h41m26s**).
- **All-Hands-AI/OpenHands**: zero in-window activity in tracked filter.
- **sst/opencode**: zero in-window activity (the closes are on **anomalyco/opencode** fork; sst upstream is silent this window — reversal of Add.45 where sst had the only merge).

## Drought / cohort tracker (window-close, 06:38:40Z)

- codex merge gap (since #19640 06:10:38Z): **28m02s**.
- litellm merge gap (since #26441 06:13:40Z): **25m00s**.
- qwen merge gap (since #3633 06:29:18Z): **9m22s**.
- sst/opencode merge gap (since #24420 05:26:48Z): **1h11m52s**.
- anomalyco merge gap (since #24435 05:05:16Z): **1h33m24s**.
- goose merge gap (since pre-window): **>4h**.
- etraut cohort quiescence: **≥3h12m37s** (cohort #19618/#19620/#19625/#19630/#19631).
- bolinfest stack: rebase#10 fresh, next-rebase ETA under bimodal model = either ~07:10Z (~32m) or ~07:42Z (~1h05m).
