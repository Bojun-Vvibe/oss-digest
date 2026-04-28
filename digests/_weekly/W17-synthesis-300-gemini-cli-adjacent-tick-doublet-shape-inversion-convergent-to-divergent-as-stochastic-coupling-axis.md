# W17 synthesis #300 — gemini-cli adjacent-tick doublet shape inversion (convergent → divergent) as a sub-tick stochastic-coupling axis distinct from synth #297's vendor-pair signature

## Hypothesis

When gemini-cli emits author-pair doublets in two consecutive ticks, the **shape of those doublets inverts at lag-1** along multiple coupling axes simultaneously: title-prefix coupling, subsystem coupling, inter-merge spacing, and PR-cohort age. Specifically, a **convergent-tick doublet** (shared title-prefix + shared subsystem + sub-minute spacing + contemporary PR-cohort) is followed by a **divergent-tick doublet** (split title-prefixes + split subsystems + multi-minute spacing + multi-week PR-age dispersion). The author-distinctness axis is the only invariant across the inversion. This indicates gemini-cli's doublet shape is **stochastic per-tick rather than regime-persistent**, and synth #297's vendor-pair signature is a single-tick observation, not a multi-tick mode.

## Evidence (specific PRs/SHAs)

**Add.133 convergent-tick doublet:**
- **cocosheng-g #26130 `12a77da45cad` 21:30:08Z `fix(cli): pass node arguments via NODE_OPTIONS during relaunch to support SEA`**
- **Gitanaskhan26 #26092 `4edd7c745c96` 21:30:56Z `fix(cli): handle DECKPAM keypad Enter sequences in terminal`**
- Inter-merge span: 48 seconds. Title-prefix: shared `fix(cli):`. Subsystem: shared (cli/terminal-input). PR-cohort: contemporary (#26130, #26092 — 38 PR-numbers apart).

**Add.134 divergent-tick doublet:**
- **ifitisit #25978 `9e7c924f7bfa` 21:42:59Z `docs(cli): point plan-mode session retention to actual /settings labels`**
- **abhipatel12 #26141 `fbd8aaad5730` 22:11:33Z `fix(core): add missing oauth fields support in subagent parsing`**
- Inter-merge span: 28 minutes 34 seconds. Title-prefix: split (`docs(cli):` vs `fix(core):`). Subsystem: split (cli-docs vs core-auth). PR-cohort: dispersed (#25978 multi-week-old + #26141 contemporary, 163 PR-numbers apart).

**Inversion table:**

| Axis | Add.133 (convergent) | Add.134 (divergent) | Inverted? |
|---|---|---|---|
| Author distinctness | 2 distinct | 2 distinct | NO (invariant) |
| Title-prefix | shared `fix(cli):` | split | YES |
| Subsystem | shared cli/terminal | split cli-docs/core-auth | YES |
| Inter-merge span | 48s | 28m34s | YES (35× expansion) |
| PR-number dispersion | 38 | 163 | YES (4.3× expansion) |
| PR-cohort age | both contemporary | mixed (multi-week + contemporary) | YES |

## Distinguishing features vs prior synth

- vs synth #297 (cross-author sub-minute shared-title-prefix doublet on shared CLI input subsystem as debut-vendor pair signature): #297 was anchored on the Add.133 convergent doublet alone; #300 reframes #297 as a **single-tick observation invalidated as a multi-tick regime by the very next tick's divergent doublet**.
- vs synth #295 (sub-minute 3-author 3-subsystem disjoint triplet as merge-queue batch-flush signature): #295 is a triplet at one tick; #300 is a doublet across two ticks with shape inversion — orthogonal in cardinality and time-axis.
- vs synth #298 (intra-day multi-hour same-author redesign-then-integration causal-ordered doublet): #298 is same-author causal-ordered; #300 is cross-author with no causal coupling either tick.
- vs synth #50 (post-own-merge same-author cascade): irrelevant — #300 is cross-author both ticks.

## Falsifiability

The synth #300 inversion-axis hypothesis falsifies if either (a) gemini-cli emits a third doublet in Add.135 that is **convergent again** (matching Add.133's coupling profile), implying the inversion was a 2-tick artifact rather than a stochastic per-tick draw; or (b) gemini-cli emits no doublet at all in Add.135-136, leaving the convergent→divergent pair ambiguous between "stochastic" and "transition to no-doublet regime". A third independent doublet at Add.135 with yet another shape (e.g., 3-author or shared-prefix-but-split-subsystem) confirms the per-tick stochastic coupling claim.

## Why this matters

If gemini-cli doublet shape is genuinely per-tick stochastic, then synth #297's "debut-vendor pair signature" cannot be used as a forward predictor for the next tick — the shape carries no autocorrelation. This contrasts sharply with synth #299's codex distinct-author metronome (which IS predictive for the next tick) and with synth #285's jif-oai multi-sprint mode (which predicts non-adjacent recurrence). The three classes — codex per-tick predictable, jif-oai non-adjacent predictable, gemini-cli per-tick non-predictable — define a **predictability taxonomy across the 6-repo population**. The Add.132 → 133 → 134 sequence (bot-dominant call → human-rebound refutation → divergent-doublet refutation of the convergent-pair signature) shows this gemini-cli unpredictability is robust across at least 2 lag-1 hypothesis-falsification attempts.
