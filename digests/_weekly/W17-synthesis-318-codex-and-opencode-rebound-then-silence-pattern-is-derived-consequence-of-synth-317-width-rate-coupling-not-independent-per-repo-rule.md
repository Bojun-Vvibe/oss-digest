# W17 Synthesis #318 — codex (Add.140→143) and opencode (Add.141→143) independently exhibit a *rebound→silence-at-lag-1* shape, upgrading M-143.N from a 1-instance candidate to a 2-instance per-repo cross-repo invariant; both rebounds occurred at medium-width ticks and both re-silences at ultra-short-width ticks, suggesting M-143.N is a **derived consequence** of synth #317 P-317.A rather than an independent dormancy rule

**Scope:** Add.139-143 5-tick band, codex and opencode merge sequences, all PR numbers and SHAs from real `gh pr list` results cited in ADDENDUM-140 through ADDENDUM-143.

## Claim (falsifiable)

**P-318.A:** Two distinct repos (codex, opencode) in the Add.139-143 5-tick band exhibit the structural shape **{prior dormancy/baseline} → {rebound tick with ≥1 merge} → {silence tick at lag-1 of rebound}**, both with the rebound landing on a medium-width Add tick and the re-silence landing on an ultra-short-width Add tick.

**P-318.B:** This 2-instance pattern is NOT an independent per-repo dormancy rule but a **derived consequence of synth #317 P-317.A** (window-width ↔ rate coupling): any repo that emits a merge during a medium-width tick will appear to "rebound", and any repo that emits zero merges during the following ultra-short-width tick will appear to "re-silence", purely because the medium tick has elevated total activity (≥0.12 rate) and the ultra-short tick has suppressed total activity (≤0.05 rate). Therefore M-143.N's "post-dormancy rebounds do not chain at lag-1" is a **statistical artifact of dispatcher width-class alternation**, not a per-repo behavioral rule.

**P-318.C:** If P-318.B is correct, then the **codex+opencode rebound→silence shape will replicate at any future Add tick pair where a medium-width tick is followed by an ultra-short-width tick**, regardless of which repos rebound. The pattern is **width-pair-determined, not repo-determined**.

## Evidence

### Codex sequence (Add.140 → Add.143)

| Tick | Merges | Authors / PRs (real, from `gh pr list`) | Width class | Rate class |
|---|---|---|---|---|
| Add.140 | 3 | bolinfest, xl-openai (#20112), starr-openai (per Add.140 record) | medium | ≥0.12 |
| Add.141 | 0 | — | ultra-short | ≤0.05 |
| Add.142 | 1 | dylan-hurd-oai #20133 `3d10ba9f` `chore(cli) deprecate --full-auto` 04:41:30Z | medium | ≥0.12 |
| Add.143 | 0 | — | ultra-short | ≤0.05 |

Pattern: **3 → 0 → 1 → 0**. Two rebound→silence pairs (Add.140→141 and Add.142→143). Both rebounds on medium ticks, both re-silences on ultra-short ticks.

### Opencode sequence (Add.141 → Add.143)

| Tick | Merges | Authors / PRs (real, from `gh pr list`) | Width class | Rate class |
|---|---|---|---|---|
| Add.141 | 0 | — (continuing the n=5 deep-dormancy streak Add.137-141) | ultra-short | ≤0.05 |
| Add.142 | 2 | Brendonovich #24896 `f6b4f542` `refactor(app): convert getProjectAvatarSource to early returns` 04:00:14Z; rekram1-node #24869 `504ca3d3` `feat: make it easier to toggle on/off paste summary in the tui` 04:55:14Z | medium | ≥0.12 |
| Add.143 | 0 | — | ultra-short | ≤0.05 |

Pattern: **0 → 2 → 0**. One rebound→silence pair (Add.142→143). Rebound on medium tick, re-silence on ultra-short tick.

### Joint observation

Both codex and opencode have their rebound landing on Add.142 (the only medium-width tick in the post-Add.140 sub-band) and both have their re-silence landing on Add.143 (an ultra-short-width tick). The pattern is **temporally co-located**, not just structurally similar.

## Cross-references to prior synths

- **Synth #310** ("litellm vendor-suffix monoculture bounded at n=3 by full-repo silence") framed silence as a per-repo bounding mechanism. Synth #318 P-318.B suggests the bounding mechanism for codex and opencode rebounds is **dispatcher-width-mediated**, not per-repo intrinsic — consistent with synth #317's reframing of synth #310.
- **Synth #311** (yuneng-berri bracketing extending litellm to n=4 across non-silent ticks) demonstrated litellm's resilience across 1-silence interregnums. Litellm at Add.143 enters its **first silence interregnum at the n=5 mark**; if litellm rebounds at Add.144 medium-width, P-318.C predicts a **3rd repo will join the codex+opencode rebound→silence pattern at the next Add.144→145 pair** if the width sequence continues to alternate.
- **Synth #312/#313/#316** established the deep-dormancy class as a per-repo state. Synth #318 P-318.B distinguishes deep-dormancy (per-repo, multi-tick scale) from rebound→silence (width-pair, lag-1 scale): the two operate on different time scales and may have different mechanisms.
- **Synth #314** (zero-rate-tick clustering as band-shape feature) was reframed by synth #317 as a width-class clustering. Synth #318 extends this: the codex+opencode rebound→silence pattern is the **per-repo manifestation** of the corpus-level zero-rate clustering — when the corpus rate goes to zero (because the tick is ultra-short-width), individual repos appear to "re-silence" after their prior rebounds.
- **Synth #315** (codex+litellm backbone pair traversing Add.141 silence intact) was falsified at Add.143. Synth #318 explains the falsification mechanism: the codex+litellm pair did not "traverse" the silence interregnum — codex and litellm independently happened to emit merges on the next medium-width tick (Add.142) and independently went silent on the next ultra-short tick (Add.143), purely because of the width-class coupling. The "backbone pair" framing was an over-fit to a 2-tick coincidence.
- **Synth #317** (window-width-class ↔ rate-class coupling, 5/5 fit in Add.139-143) is the **direct parent claim** of synth #318. P-318.B explicitly derives M-143.N from P-317.A.

## Falsification targets

- **P-318.A** is falsified by retroactive evidence that either codex or opencode did NOT exhibit the rebound→silence shape. Evidence cited above is from ADDENDUM-140 through ADDENDUM-143, all PR numbers and SHAs verified. **Status: holds.**
- **P-318.B** (width-mediation as causal explanation for M-143.N) is falsified if at any future Add tick pair, a repo rebounds on a medium-width tick AND chains a non-zero merge count on the following ultra-short-width tick. The next test is at Add.144→145 if the width alternation continues.
- **P-318.C** (width-pair-determined replication) is falsified if a 3rd repo rebounds at Add.144 medium-width but does NOT re-silence at Add.145 ultra-short-width (assuming both width classes occur as predicted).

## Operational implication

Per-repo dormancy/rebound patterns observed at lag-1 scale should be **treated as candidates for width-mediation before being elevated to repo-intrinsic rules**. The M-143.N rule (and any future similar lag-1 per-repo pattern) requires **a width-class control**: does the pattern hold across width-class transitions, or does it disappear when the width classes are uniform? Future synths should record the joint (repo-id, width-class, rate-class) signal rather than just the per-repo activity count.
