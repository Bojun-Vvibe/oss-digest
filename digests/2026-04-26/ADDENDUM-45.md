# ADDENDUM-45 — 2026-04-26

**Window:** 05:18:50Z → 06:00:26Z (41m36s)

**Repos scanned:** BerriAI/litellm, openai/codex, sst/opencode, anomalyco/opencode, block/goose, QwenLM/qwen-code, cline/cline

## Merges in window

- **[sst/opencode#24420]** — `ariane-emory` (Ariane Emory), base `dev`, +1/-1. Title `fix: correct typo in comment`. Created 02:10:41Z, **MERGED 05:26:48Z** (mergeCommit `7bbe157f1a…` head). Lifespan 3h16m07s. Trivial single-line typo fix; the *only* merge in window across all 7 repos.

**Total merges: 1** (sst/opencode 1; codex 0, anomalyco 0, qwen-code 0, litellm 0, goose 0, cline 0). **Sharp regression vs Add.44 which had 4 merges.** Codex merge drought now restarts at 1-window (last merge was Add.44's andmis #19610 at 04:57:42Z, gap-since-last-codex-merge at window close = **1h02m44s**). qwen-code drought also restarts (last merge wenshao #3620 at 05:17:34Z, gap = **42m52s**). anomalyco drought restarts (last merge #24435 at 05:05:16Z, gap = **55m10s**).

## Opens in window

- **[openai/codex#19640]** — `tibo-openai` (Thibault Sottiaux), base `main`, **+7/-289**. Title `[codex] remove responses command`. Created **05:44:29Z**, updated 05:54:29Z. **Net -282 lines** (deletion-dominant). First codex open in this window; first deletion-dominant codex PR by tibo-openai today. Surface: removing the `responses` command — appears to be cleanup of a deprecated SSE/protocol surface. Lifespan-at-window-close 15m57s (open).
- **[sst/opencode#24441]** — `tiffanychum`, base `dev`, +91/-3. Title `fix(zen): stop double-counting reasoning_tokens in oa-compat usage`. Created **05:47:14Z**, updated 05:49:29Z. Surface: **reasoning_tokens accounting in OpenAI-compat layer** — *same broad theme* (reasoning content / usage accounting) as the closed-without-merge #24428 in this same window (see closures). Two separate authors hitting the reasoning-content surface in 27m56s.

**Total opens: 2** (codex 1, sst/opencode 1). Down from Add.43's 1 open and *up* from Add.44's 0 opens. Open rate 2/41m36s = **~2.88 opens/hr**.

## Notable closures (close-without-merge)

- **[sst/opencode#24428]** — `claudianus` (ryan.h.park), base `dev`, +53/-9. Title `fix: preserve existing reasoning_content on second interleaved pass (#24146 follow-up)`. Created 03:27:12Z, **CLOSED-without-merge 05:50:58Z**. Lifespan 2h23m46s. Explicit follow-up to merged PR #24146. **Co-occurs in window with tiffanychum's open #24441** which targets the same reasoning_tokens/reasoning_content surface — a closure and an open on the same surface within 3m44s. Possible handoff (claudianus's approach abandoned, tiffanychum's approach opened). See synth #135.

**Total closes-without-merge: 1.** Synth #132's "observability/instrumentation theme survives discrimination" no longer applies — different surface (reasoning_content). But the pattern *close-without-merge co-located with open on same surface* echoes synth #94's surface-ownership-handoff family.

## Notable updates

- **[openai/codex#19606]** — `bolinfest`, head SHA `071931f5f6463ca194162df9de62b56aed5f05d2` (**unchanged** vs Add.44's `10dfdd9fe6…`). Wait — Add.44 reported `10dfdd9fe6fa81717f36d6149874a3126310951c` post-rebase#8. Current head is `071931f5f6…`, **different**. **Bolinfest stack rebase #9 fired in window**, updated **05:58:28Z**. Inter-rebase cadence: rebase#8 04:57:02Z → rebase#9 05:58:28Z = **delta9 = 1h01m26s**. After delta8=25m54s collapsed below the synth #131 floor, delta9=1h01m26s **bounces back** into the original 1h-band. Pattern is now: 1h08m → 1h08m → 25m54s → 1h01m26s. Bounded oscillation hypothesis (synth #131) is *partially rehabilitated* by delta9 returning to band, but the 25m54s outlier remains unexplained. See synth #136. NOTE: companion stack PRs #19395/#19394/#19393/#19392 — need to verify they all moved in lockstep; from data they were last seen at 04:57:02Z so the n=5 stack-lockstep property may have **broken** at rebase#9 (rebase #9 may have only touched #19606). This is a discriminator — see synth #136.
- **[openai/codex#19591]** — `etraut-openai`, base `main`, +18/-2. Title `Fix filtered thread-list resume regression in TUI`. Updated **05:54:33Z**, created 2026-04-25T19:42:46Z. Lifespan-at-update **10h11m47s**. **First etraut-openai cluster activity in window** after the Add.44-projected ~06:26:03Z threshold — etraut woke ~32m *early* relative to the Add.44 projection. Single-PR touch (not the n=5 stewardship cohort #19618/#19620/#19625/#19630/#19631).
- **[QwenLM/qwen-code#3617]** — `mohitsoni48`, updated **05:19:44Z** (within first minute of window). Pure-additive 134/0 OpenAI-compat tool-result media split. No SHA verification possible from list view. Long-tail refresh continues from Add.44.
- **[QwenLM/qwen-code#3631]** — `B-A-M-N`, updated **05:21:09Z**, head still `f27d4dce547949e0…` (no SHA change). Asymmetric half of the Add.43/44 sub-second co-create doublet remains OPEN — co-merge #3630 already merged at Add.44.

## Bolinfest stack & etraut cluster status

- **bolinfest #19606:** rebase #9 at 05:58:28Z (**delta9 = 1h01m26s**). Lockstep status of n=5 sister PRs (#19395/#19394/#19393/#19392) **unconfirmed in this window** — only #19606 surfaced an update event. If sisters did NOT move, this is the **first asymmetric rebase** of the n=5 stack, which would be a new regime. See synth #136.
- **etraut-openai n=5 stewardship cohort:** still **quiescent** (#19618/#19620/#19625/#19630/#19631 all last touched ≤03:26:03Z, gap-at-window-close = **2h34m23s**). However, etraut DID touch a non-cohort PR (#19591 at 05:54:33Z) — author is active, cohort is not. This is the **first author/cohort decoupling** observed.
- **andmis cluster:** still cleared (resolved Add.44).
- **New observation:** **codex deletion-dominant PR #19640** opened by tibo-openai removes 289 lines (the `responses` command). This is structurally distinct from all permissions/TUI surface activity tracked since Add.36 — first **delete-a-feature** PR on codex today.

## Cross-repo observations in window

- **Reasoning-content surface convergence on sst/opencode**: #24428 closes-without-merge AND #24441 opens within 3m44s, both targeting reasoning_tokens / reasoning_content accounting (different code paths: interleaved-pass preservation vs oa-compat usage double-count). This is a **same-surface concurrent close+open by different authors** — see synth #135.
- **Drought reset across 3 repos**: codex/anomalyco/qwen-code all had merges in Add.44 and zero in Add.45. The 4-merge burst at Add.44 was a **transient spike**, not regime change. Single-merge windows resume.

## Background activity

- BerriAI/litellm: heavy staging churn continues (last main-branch merge was #26545 yuneng-berri "[Infra] Promote Internal Staging to main" at 03:07:01Z, **gap-at-window-close = 2h53m25s**). Window contained zero litellm activity.
- block/goose: zero in-window activity (last update #8851 at 02:28:17Z, gap **3h32m**).
- cline/cline: zero in-window activity (last in-window update none; #10414 at 02:57:14Z, gap **3h03m**).
