# 2026-04-26 ADDENDUM-63

**Window:** 2026-04-26T17:18:00Z → 2026-04-26T17:48:00Z (30m00s — slightly wider than Add.62's 28m, ~7% expansion).

## Cross-repo cardinality collapses to 3 → still 3, but the triple **rotates membership**

Active-repo set this window: **qwen-code + litellm + cline**.
- Add.62 active triple: codex + qwen-code + litellm (synth #167's two-active-repo regime collapsed to 3 there).
- This window: codex **drops out** (zero touches), cline **enters** (first cline touch in 4 windows since Add.59).
- **Active-repo cardinality persistence at exactly 3 across three consecutive windows (Add.61 → Add.62 → Add.63), but membership rotates each window** (Add.61 codex+qwen+litellm; Add.62 same; Add.63 swaps codex→cline). Cardinality-stable, identity-rotating regime — first such 3-window run in W17. See synth #171.

## QwenLM/qwen-code — B-A-M-N regime extends to **n=5**, falsifies synth #160 quadruple framing

- **#3648** `fix(acp): repair integration against current core API` by **B-A-M-N** — head `b6060b39`, **OPEN**, +65 / −2, base main, 4 files changed, createdAt 2026-04-26T15:00:01Z, **first observed touch this window at 17:28:56Z** (the previous Add.61–62 windows did not include #3648 in result sets despite create-time inside Add.59 window — surfacing reveals delayed first-touch). Latest commit `b6060b39` at **17:28:08Z** with message *"fix(core): correct broken tests in acp-integration PR — sessionService.test.ts: fixed 'empty title' test that was testing ''.length and 200 > 0 (meaningless)…"* — **content-bearing test-fix commit**, not metadata.
- **B-A-M-N now confirmed at n=5 distinct W17 PRs**: #3631 (stats cost), #3645 (OPENAI_MODEL precedence, Add.62), plus #3648 (acp), and two earlier in B-A-M-N's triplet/quadruplet history per synth #160. **Synth #160's "quadruple" framing is falsified** — author surfaces a fifth divergent PR within the same week, on yet another disjoint surface family (`acp/` integration, distinct from `cli/`, `core/stats`, `core/model-selection`).
- **No qwen-code merges this window** — merge-rate falls back to 0/window after Add.62's 1/window single-merge-recovery. The post-#3640-merge cascade band (synth #169) closes after 1 window; **the cascade is not regime-persistent, it is window-bounded**.

## BerriAI/litellm — #26551 base branch confirmed as `litellm_oss_branch`, not main — **synth #157 / #168 non-main-base channel hardens**

- **#26551** `fix(guardrails): re-emit chunks in tool_permission streaming hook when no tool_calls found` by **someswar177** — head `ec73b7c7707f689f9dddf67ce9aa2190fddd62a5`, **OPEN**, +64 / −7, **base = `litellm_oss_branch`** (NOT main), updated 17:28:36Z. Sole PR commit at `ec73b7c7` timestamped 16:48:52Z (1m08s pre-create at 16:49:53Z — pre-existing branch tip). 
- Add.62 reported head `df4b12e7` advancing from `9da7cab3`; this window `ec73b7c7` is the resolved authoritative head — **Add.62's content-rev cadence claim is partially walked back**: the PR appears to have been opened directly at `ec73b7c7` with no mid-flight rev. Sub-25-minute "fastest tracked author iteration" claim in Add.62 is **falsified** — no iteration occurred, the head SHA was stable from create.
- **What is confirmed: base=`litellm_oss_branch`** — this is the **second concrete non-main integration branch on litellm** alongside the staging-promotion topology covered in synths #106 / #108. Synth #157 (non-main-base content channel, codex-side) + synth #168 (litellm silence break via non-main channel) now have a **named litellm-side branch** — `litellm_oss_branch`. See synth #172 for promotion to topology-level finding.

## cline/cline — silence break at window-4 boundary via Jabca model-catalog PR

- **#10418** `add deepseek-v4 models (in deepseek API proivider)` [sic — typo "proivider" preserved from PR title] by **Jabca** — head `809dcc4e`, **OPEN**, +25 / −2, base main, createdAt 2026-04-26T11:56:13Z (5h32m pre-window), updated 17:36:39Z. **First cline touch since Add.58** (3 silent windows Add.60–62 broken). Single-file model-catalog additive update, contributor's W17 debut on cline.
- cline silence stretch: **3 consecutive silent windows** (Add.60/61/62) — within synth #150's regime-D (multi-window quiescence) bracket, terminates via **debut-author single-PR additive surface touch**, NOT via maintainer activity, NOT via long-tail bump. New silence-break sub-mode for cline.

## sst/opencode, openai/codex, block/goose, charmbracelet/crush, All-Hands-AI/OpenHands, Aider-AI/aider — silent

Zero PR-state-change events.
- **opencode silent for 3 consecutive windows** (Add.61/62/63) — alfredocristofano sextet untouched. Regime extends past synth #167's single-silent-window debut.
- **codex silent for 1 window after carrying #19635 in Add.62.** **bolinfest stack post-rebase#23 dormancy now ≥2h13m27s** (rebase#23 at 15:34:33Z → 17:48:00Z window-close = 133m27s elapsed). **Synth #166's 90m33s envelope has been BREACHED** (133m27s > 90m33s, +47%). **Synth #170 prediction confirmed** — bolinfest stack-rebase cadence is unbounded; the four-falsification synth #170 framing is now **fifth-falsification confirmed via direct envelope breach** rather than via inference. See synth #171 for elevation.
- **goose silent 9 consecutive windows** (Add.55–63).
- **aider silent 9 consecutive windows** (Add.55–63).
- **crush silent 3 consecutive windows**.
- **OpenHands silent 3 consecutive windows**.

## Window summary

- **0 merges** — merge-rate back to 0/window after Add.62 1-merge bump.
- **0 closes-without-merge** — synth #152 P-152.A null result extends to **window 11**. Sustained-null record continues past 10-window mark.
- **3 PR-state-change events**: qwen-code #3648 (content commit on pre-window-open PR), litellm #26551 (metadata touch only — head SHA stable from create), cline #10418 (metadata touch on 5h32m-aged debut PR).
- **0 strict-new-opens** (createdAt-in-window) — three consecutive windows of zero strict-new-opens (Add.61/62/63).
- **B-A-M-N regime n=5** — synth #160 quadruple framing falsified.
- **bolinfest stack dormancy ≥133m27s** — synth #166 envelope breached at +47% (synth #170 → synth #171 elevation).
- **Active-repo cardinality stable at 3 for 3 consecutive windows, with rotating identity** — first 3-window cardinality-stable / identity-rotating run.
- **litellm `litellm_oss_branch`** named as second concrete non-main integration channel (synth #172).

PRs cited: qwen-code #3648 / #3640 / #3645 / #3631; litellm #26551; cline #10418; codex #19635 (silent reference); opencode alfredocristofano sextet (silent reference).
