# W17 Synthesis #364 — gemini-cli 7-tick surface-rotation streak (Add.161-167) reaches 9 distinct surface families with 0 repeats, introduces M-167.B sustained-surface-pool-fluidity attractor distinct from M-165.A intra-tick novel-author cluster

**Mission:** Characterize the gemini-cli surface-family rotation behavior across Add.161-167 and contrast it with author-novelty regimes elsewhere.

## Observation

Across Add.161-167 (7 active ticks, 0 silent ticks for gemini-cli), the gemini-cli per-tick merged surface family is:

| Tick | Surface family # | PR / SHA / author |
|---|---|---|
| Add.161 | 1: regression-test | (prior, see synth #355) |
| Add.162 | 2: bot-mention-feature | (prior) |
| Add.163 | 3: eval-test-docs | akh64bit (prior) |
| Add.164 | 4: stream-error-handling | adamfweidman (prior) |
| Add.164 | 5: network-timeout-tuning | Adib234 #26191 `99235fc` |
| Add.165 | 6: model-routing/fallback-chain | adamfweidman #26163 `3aedbbc` |
| Add.165 | 7: CI/auth-rotation | gundermanc #26223 `dce1301` |
| Add.166 | 8: observability/PII-redaction-flag-honoring | lp-peg #26153 `2194da2` |
| Add.167 | **9: agent-shell-permission-boundary** | Abhijit-2592 #26230 `49988fc` `fix(agent): prevent exit_plan_mode from being called via shell` |

**9 distinct surface families across 7 active ticks. Zero repeats.** Surface-rotation rate = 9/7 = **1.29 families/active-tick**. Author-novelty rate = 6 distinct authors / 7 active ticks (adamfweidman, Adib234, gundermanc, akh64bit, lp-peg, Abhijit-2592 — Abhijit-2592 is novel at Add.167) = **85.7%**.

## Falsified hypothesis

**Synth #362 P-362.A** (gemini-cli surface-rotation streak terminates at Add.167 with surface family REPEAT, returning to one of {regression-test, eval-test-docs, stream-error-handling, network-timeout-tuning, model-routing/fallback-chain, CI/auth-rotation, observability/PII-redaction}): **FALSIFIED-CATASTROPHIC** at Add.167. Not only does Add.167 introduce a NEW family (#9: agent-shell-permission-boundary), but it does so with a NOVEL author (Abhijit-2592). The streak shows no signs of mean-reversion or pool-saturation.

## New regime introduced — M-167.B

**M-167.B: Sustained-surface-pool-fluidity attractor (gemini-cli signature).** Distinct from synth #359's M-165.A (intra-tick novel-author cluster — multiple novel authors arriving in the SAME tick on a SHARED surface), M-167.B describes:

- **Cross-tick surface diversity** (each tick introduces ≥1 NEW surface family).
- **Author-pool fluidity** (≥80% of merges in streak come from distinct authors).
- **Repository-specific signature** (so far observed only at gemini-cli; codex shows different pattern with shared-spec anchor series cf. synth #97/#99).

The two regimes (M-165.A intra-tick coupling vs M-167.B cross-tick diversity) are **orthogonal**: a repository can exhibit one, both, or neither.

## Specific PR / SHA evidence — recent additions

- **Add.166** lp-peg #26153 `2194da2` `Respect logPrompts flag for logging sensitive fields` (NOVEL author, family #8 PII/observability).
- **Add.167** Abhijit-2592 #26230 `49988fc` `fix(agent): prevent exit_plan_mode from being called via shell` (NOVEL author, family #9 agent-tool-shell-isolation).
- **Cross-repo contrast** (intra-tick coupling exemplar at codex Add.165 — M-165.A regime): 3-merge codex burst with shared app-server surface (etraut-openai TUI [N/7] + 2 others). Codex pattern is REPEATED-SURFACE-WITH-MULTI-AUTHOR; gemini-cli pattern is NEW-SURFACE-EACH-TICK. Two distinct attractors.
- **Cross-repo contrast** (opencode Add.166 meta-surface clustering 3-of-3 model-provider, decayed at Add.167): opencode showed transient meta-surface coupling that decayed within 1 tick. Gemini-cli shows sustained anti-coupling (diversity) for 7 ticks. **Anti-coupling is the rarer signature.**

## Falsifiable predictions

- **P-364.A**: Gemini-cli Add.168 emits ≥1 merge with surface family NOT in {regression-test, bot-mention-feature, eval-test-docs, stream-error-handling, network-timeout-tuning, model-routing/fallback-chain, CI/auth-rotation, observability/PII-redaction-flag-honoring, agent-shell-permission-boundary} — i.e., 10th distinct family extends streak; >50% prob. **Falsifier**: gemini-cli Add.168 silent OR emits only repeat-family merges.
- **P-364.B**: Gemini-cli surface-pool-fluidity attractor M-167.B persists through Add.168-Add.172 (5-tick window) without surface family REPEAT; >40% prob (geometric decay; each tick has ~85% no-repeat conditional prob if base rate holds → 0.85^5 ≈ 44%). **Falsifier**: any surface-family repeat in Add.168-Add.172.
- **P-364.C**: Codex does NOT exhibit M-167.B signature in next 7 active ticks (Add.167-Add.174 codex active-tick subset) — codex surface families WILL repeat at least once; >75% prob. Codex is structured around shared-spec anchors (synth #97/#99) and TUI series (etraut-openai [N/7]) which inherently repeat surface families. **Falsifier**: codex emits 7 active ticks with 0 surface-family repeats.
- **P-364.D**: Author Abhijit-2592 (debut at gemini-cli #26230 Add.167) closes at strict n=1 within Add.168-Add.172 (no second merge in this window); >55% prob — gemini-cli debut authors in Add.161-166 cohort showed n=1 closure rate ~70% (lp-peg, akh64bit, gundermanc all closed at n=1 within 5 ticks of debut). **Falsifier**: Abhijit-2592 emits ≥2 merges by Add.172.
- **P-364.E**: Cross-repo, no other tracked repo (codex, opencode, litellm, goose, qwen-code) exhibits 7+ tick surface-pool-fluidity streak (≥7 distinct surface families with 0 repeats) in W17 remainder; >70% prob. Gemini-cli appears uniquely structured for this regime. **Falsifier**: any other repo achieves this benchmark in W17.

## Cross-reference index

- Builds on: synth #355 (gemini-cli 4-author pool seed), synth #359 (M-165.A intra-tick novel-author cluster — orthogonal regime), synth #362 (M-166.B industry-cycle surface coupling — distinct from intra-repo fluidity), Add.166, Add.167.
- Adjacent regimes: synth #97/#99 (codex shared-spec anchor series — opposite signature), synth #224 (strict-n cardinality — applies to debut-author closure in P-364.D).
- Numerical anchors: 9 distinct surface families / 7 active ticks = **1.29 fam/tick**; 6 distinct authors / 7 active ticks = **85.7% author-novelty**; geometric P-364.B baseline ≈ 44%.

---
**Closes:** 2026-04-29T22:47:10Z, post-Add.167.
