# ADDENDUM-40 — 2026-04-26

**Window:** 02:22:35Z → 03:39:17Z (1h16m42s)

**Repos scanned:** BerriAI/litellm, openai/codex, sst/opencode, anomalyco/opencode, block/goose, charmbracelet/crush

## Merges in window

- **[BerriAI/litellm#26543]** — `yuneng-berri`, self-merge to `litellm_internal_staging` at 02:44:38Z. `[Infra] Bump Versions`. +12/-12 (perfect-symmetric churn). SHA `abb63e6007…`. Created 02:33:43Z → merged 02:44:38Z = **10m55s lifespan**.
- **[BerriAI/litellm#26545]** — `yuneng-berri`, self-merge to **`main`** at 03:07:01Z. `[Infra] Promote Internal Staging to main`. **+18961/-252719** (massive net deletion: −233758 lines; ratio 0.075:1 add/del). SHA `3d2b8fed32…`. Created 02:46:02Z → merged 03:07:01Z = **20m59s lifespan**. **Promotion event** — this is the staging→main flush that closes out the n=4 internal-staging merge train of Add.38/39 (#26536/#26541/#26542/#26543).

## Opens in window

- **[BerriAI/litellm#26544]** — `tim-peyeeye`, 02:42:16Z, base `main`, +19622/-252708. `feat(guardrails): add peyeeye PII redaction & rehydration guardrail`. **First-appearance author this digest day.** Closed 02:55:48Z (13m32s lifespan, no merge) — diff shape (~252k deletions) indicates accidental rebase-on-stale-main / wrong-base PR. Re-opened immediately as #26546.
- **[BerriAI/litellm#26546]** — `tim-peyeeye`, 02:55:59Z, base `main`, +735/-0. Same title as #26544 but **diff shape collapsed** from +19622/-252708 to +735/-0 (cleaned-up rebase). Still OPEN at window close, last update 03:30:12Z.
- **[openai/codex#19624]** — `fcoury-oai`, 01:41:30Z (slightly pre-window but first noted here), +99/-54. `fix(skills): make budget warning actionable`.
- **[openai/codex#19626]** — `friel-openai`, 02:01:39Z, +65/-5, base `main`. `Preserve assistant phase for replayed messages`. (Title shifted from earlier "commentary phase" to "assistant phase" at 02:32:47Z update — semantic narrowing of the fix scope mid-PR.)
- **[openai/codex#19630]** — `etraut-openai`, 03:10:21Z, base `main`, +39/-1. `Avoid persisting ShutdownComplete after thread shutdown`.
- **[openai/codex#19631]** — `etraut-openai`, 03:23:39Z, base `main`, +327/-84. `Color TUI statusline from active theme`. **`etraut-openai` n=4 active stewardship across the day** (#19618 + #19620 + #19625 + #19630 + #19631 = actually n=5 OPEN PRs by single author since 00:49:52Z, all on TUI / shell / theme surface family). Synth #121 territory but n is climbing.
- **[anomalyco/opencode#24428]** — `claudianus`, 03:27:12Z, base `dev`, +53/-9. `fix: preserve existing reasoning_content on second interleaved pass (#24146 follow-up)` — explicit follow-up reference to a multi-day-old merged PR.

## Notable updates / rebases

- **Stacked-PR mass-rebase #6 by `bolinfest`** on the codex stack (#19606 ← #19392 ← #19393 ← #19394 ← #19395). All 5 PRs `updated_at` = **03:22:26Z** (same-second band — tighter than rebase#5's 1-second band). New head SHAs: #19606 `8eff69b4…`, #19392 `093c23bd…`, #19395 `3b3367a1…` (all distinct from Add.39's `b0de9cbd…`/`cb9184a4…`/`7caafabe…`). #19606 also got a title rewrite somewhere in the window: now reads `permissions: make runtime config profile-backed` (was `[wip]` shape per Add.38).
  - **Inter-rebase interval rebase#5 → rebase#6: ~1h32m06s** (01:50:20Z → 03:22:26Z).
  - Series so far: Δ₁≈26m37s, Δ₂≈14m33s, Δ₃≈8m11s, Δ₄≈11m19s (?), Δ₅≈29m46s, **Δ₆≈92m06s**. Ratio Δ₆/Δ₅ = **3.09×**, compounding the 2.05× inversion of Add.39. Synth #123 ("geometric decay falsified at n=5 by cadence inversion") strengthens; this is now n=6 and the dilation is **monotonic across the last two intervals**. See synth #125.
- **codex #19620** (`etraut-openai` ASCII metadata) — no further updates in window; still OPEN, lifespan now > 2h33m.
- **litellm #26538** (`frdeng` fireworks_ai) updated 02:43:29Z — still OPEN, lifespan > 2h13m.
- **litellm #26530** (`mateo-berri`) — no further updates this window; last touch 02:03:23Z. Stagnating.
- **litellm #26539** (dependabot gitpython) updated 02:46:14Z — still OPEN, no maintainer touch.

## Patterns

- **Staging→main promotion as a window event** — `yuneng-berri`'s #26545 is the first non-staging merge in the litellm thread of the day. The internal-staging train (Add.38 #26536, Add.39 #26541, Add.39 #26542, Add.40 #26543 = n=4 staging-base self-merges by `yuneng-berri`+`krrish-berri-2`) is **collapsed into main in a single 20m59s-lifespan promotion PR** with a +18961/−252719 net-delete shape characteristic of "checkpoint the staging branch, drop the diverged history." This is the **terminator** of the cross-window staging series tracked since synth #124.
- **`tim-peyeeye` rework cycle within window** — #26544 (+19622/−252708, 13m32s, closed-no-merge) → #26546 (+735/−0, OPEN) is a clean **wrong-base → correct-base** rework signature. Same author, same title, **net diff shrank by ~265× on lines deleted** and ~27× on lines added. First-appearance author botching the base branch on PR#1 is a recognizable onboarding signature; what's notable is the **13m32s self-correction loop**, faster than the next maintainer review window.
- **`etraut-openai` single-author multi-PR stewardship escalates from n=2 (Add.39) to n=5 in <3h on TUI/shell surface family** (#19618 shell-history, #19620 ASCII-JSON metadata, #19625 TUI keyboard reset, #19630 thread shutdown, #19631 TUI statusline color). All OPEN, none merged. Compare to synth #121 (n=4 stewardship tuplet) — this exceeds and remains all-open. See synth #126.
- **`yuneng-berri` triplet pattern**: #26542 (Add.39, UI rebuild, +336/-336 symmetric), #26543 (Add.40, version bump, +12/-12 symmetric), #26545 (Add.40, staging→main promotion, +18961/-252719 highly-asymmetric net-delete). Two perfectly-symmetric mechanical-regenerate PRs **bracketing** a single highly-asymmetric promotion PR. The symmetric bookends look like "regen → checkpoint → flush" infrastructure-ops choreography.
- **codex stack rebase cadence: monotonic dilation continues**. Δ₅=29m46s, Δ₆=92m06s, ratio 3.09×. Two consecutive intervals now both expanding (vs the original Δ₁ → Δ₃ contraction). The synth #122 geometric-decay model is dead in both directions now — the *opposite* (geometric expansion) is forming.
- **codex still merge-dry in window** despite n=6 stack rebase. 0 merges across 1h16m, while opening 4 new PRs by 3 authors. Synth #122 cross-pattern (rebase frequency anti-correlated with merge progress) extends to a 3-window codex merge drought.

## Notable closures

- **[BerriAI/litellm#26544]** — `tim-peyeeye`, closed 02:55:48Z (no merge). 13m32s lifespan. Same author opened #26546 11s later — see Patterns above.

## Window merge-rate

| Repo | Add. 37 | Add. 38 | Add. 39 | Add. 40 |
|------|---------|---------|---------|---------|
| codex | 1 | 0 | 0 | 0 |
| litellm | 0 | 1 | 2 | 2 |
| anomalyco/opencode | 0 | 0 | 2 | 0 |
| sst/opencode | 0 | 0 | 0 | 0 |
| crush | 0 | 0 | 0 | 0 |
| goose | 0 | 0 | 0 | 0 |
| **Total** | **1** | **1** | **4** | **2** |

**Throughput halved vs Add.39** (4 → 2) but source diversity collapses from 2 repos to 1. anomalyco/opencode goes merge-dry after its 2-merge Add.39 spike; litellm holds at 2 merges but **shifts base from `litellm_internal_staging` (Add.39) to a mix including `main` (Add.40)** — the staging→main promotion is the qualitative regime change of this window even though the throughput count regressed.
