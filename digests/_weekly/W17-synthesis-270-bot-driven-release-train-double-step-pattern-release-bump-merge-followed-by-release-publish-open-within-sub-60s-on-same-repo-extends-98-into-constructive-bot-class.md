# W17 Synthesis #270 — **Release-train double-step pattern: bot-driven release-bump merge immediately followed by release-publish PR open within sub-60s on same repo**: at Add.118 block/goose github-actions[bot] PR #8872 (`chore(release): bump version to 1.33.0 (minor)`, OPENED 2026-04-28T00:58:13Z, MERGED 2026-04-28T10:08:54Z, sha `52b3f21ef7fd8ba887448687810d9db13d594ad5`, lifespan 9h10m41s) was followed by **same-bot follow-up** PR #8875 (`chore(release): release version 1.33.0`, OPENED 2026-04-28T10:09:47Z by github-actions[bot], still OPEN at Add.118 close) — Δt(merge→open) = **53s**; this constitutes a **two-PR release-train choreography** where (a) PR #8872 advances the version-bump artifact (semver increment in package manifests) and (b) PR #8875 follows up to cut the actual release-publish workflow, with the second PR causally triggered by the first PR's merge (likely via a release-bump GitHub Action that auto-opens a follow-up release-publish PR on its own merge); the 53s gap is consistent with **GitHub Actions workflow dispatch latency** (typically 30-90s for repo-internal events) rather than human reaction time; this pattern EXTENDS synth #98 bot-driven-sub-10s-mass-close into a **bot-driven sub-60s sequenced single-author multi-stage release-coordination** dimension where the bot is a **release-train conductor** rather than a stale-PR-mass-closer; ORTHOGONAL to synth #250 close-and-refile catalog (this is open-after-merge, not close-then-reopen); INTRODUCES **release-train double-step** as a new bot-pattern class distinct from synth #98 mass-close.

**Status:** EXTENDS synth #98 bot-driven sub-10s mass-close framework with a NEW bot pattern class (release-train double-step). ORTHOGONAL to synth #269 Pattern E close-and-refile (different state transitions). RESETS goose deep-cohort candidacy and DISRUPTS Pred LLL trajectory.

## Cross-references

- EXTENDS synth #98 bot-driven sub-10s n3 stale-PR mass-close framework — bot-coordination class now includes (a) mass-close (synth #98) and (b) release-train double-step (synth #270). Bot patterns are now a 2-class catalog.
- ORTHOGONAL to synth #269 Pattern E sub-tick close-and-refile — different state transition (merge→open vs close→open) and different actor (bot vs human).
- DIRECTLY DISRUPTS Pred LLL (≥2 of {opencode, codex, goose} cross 6h-deep within 4 ticks) — goose RESETS via #8872 release-merge from 2h14m+ approaching mid-deep down to 42m+ shallow; goose can no longer contribute to Pred LLL falsification within the 4-tick window. Reduces Pred LLL candidate pool to 2 (opencode, codex).
- CROSS-REFERENCES synth #258/#264 deep-cohort framework — release-train merges count as MERGES for deep-cohort tracking (release-bump PRs merging successfully reset silence timer), so release-train cadence partially DETERMINES deep-cohort entry timing for repos with periodic release schedules.
- PARTIALLY CONTRADICTS synth #98 implicit assumption that bot activity is destructive (mass-close) — release-train pattern is constructive (advancing release artifacts), demonstrating bots have BOTH destructive and constructive roles in PR lifecycle.

## Empirical basis (goose 1.33.0 release-train at Add.118)

| Stage | PR | Title | Action | Timestamp | SHA | Δt from prior |
|-------|----|-------|--------|-----------|-----|----------------|
| 1 (bump) | #8872 | `chore(release): bump version to 1.33.0 (minor)` | OPENED by github-actions[bot] | 2026-04-28T00:58:13Z | (open: pre-merge tree) | — (anchor) |
| 1 (bump) | #8872 | (same) | MERGED by github-actions[bot] | 2026-04-28T10:08:54Z | `52b3f21ef7fd8ba887448687810d9db13d594ad5` | +9h10m41s lifespan |
| 2 (publish) | #8875 | `chore(release): release version 1.33.0` | OPENED by github-actions[bot] | 2026-04-28T10:09:47Z | (open) | **+53s from #8872 merge** |

**Causal-chain verification:**
- Both PRs authored by github-actions[bot] (same author identity, no human in loop).
- Title pattern: stage 1 says "bump version to X.Y.Z (minor)", stage 2 says "release version X.Y.Z" — distinct verbs (`bump` vs `release`) on identical version string.
- 53s gap is consistent with: (a) merge-event webhook → GitHub Actions queue (~10-20s), (b) workflow runner cold-start (~20-30s), (c) workflow body executing version-publish-PR-creation (~10-20s). Total ~40-70s expected; observed 53s falls in middle of expected range.
- Stage-2 PR title contains identical version string `1.33.0` as stage 1, confirming causal coupling (not coincidental concurrent release activity).

**Key signature features:**
- **Bot-only authorship:** zero human commits in either PR's metadata (both authored by github-actions[bot]).
- **Sub-60s causal chain:** Δt(stage-1-merge → stage-2-open) = 53s, well below 5-min human-reaction threshold.
- **Sequential not parallel:** stage 2 opens AFTER stage 1 merges (not concurrent), establishing strict temporal ordering.
- **Identical version anchor:** both PRs reference identical version `1.33.0`, no version drift between stages.
- **Repo-local:** both PRs in same repo (block/goose), no cross-repo coordination signal.
- **Multi-stage workflow:** the existence of TWO distinct release-related PRs (vs a single all-in-one release PR) suggests goose's release pipeline intentionally separates "version-manifest update" from "release-publish trigger" — possibly to isolate semver bump review from publish authorization.

## Synth #270 claim — Bot-driven release-train double-step (release-bump merge + release-publish open within sub-60s on same repo) is a recurring repo-specific structural pattern

The synth #270 claim posits that:

1. **Release-train double-step is a deterministic structural pattern** for repos using release-bump-bot workflows — once a repo's release-bot is configured, every minor/major release will exhibit this two-PR pattern.
2. **The 53s gap is a stable signature of GitHub Actions workflow latency** for the specific release-bot configuration goose uses, and will be reproducible (within ±30s) for goose's next minor release.
3. **Different repos use different release-train cadences** — some single-step (release-as-merge), some double-step (this pattern), some triple-step (bump + tag + publish-notes) — providing a per-repo fingerprint.
4. **Release-train merges artificially extend deep-cohort exit timing** — repos with infrequent releases naturally accumulate longer zero-merge gaps between release events, making release-train cadence a **lower bound** on observed silence durations.

## Predictions (falsifiable, tied to next-tick observable)

**Pred 270-1** (release-train recurrence): **goose's next minor or major release exhibits identical double-step pattern (release-bump-PR merge → release-publish-PR open by github-actions[bot] within Δt ∈ [20s, 180s])** within 30 days (deadline 2026-05-28T10:51Z). Falsifier: next goose minor/major release uses single-step pattern (no follow-up release-publish PR within 5min) OR uses ≥3-step pattern OR uses non-bot human-driven publish.

**Pred 270-2** (gap-time stability): **Δt(stage-1-merge → stage-2-open) for goose's next 3 minor/major release events falls within [23s, 83s] (53s ± 30s)**. Falsifier: ≥1 of next 3 events has Δt outside [23s, 83s].

**Pred 270-3** (cross-repo pattern absence on non-bot release repos): **At least 4 of the 6 tracked repos (opencode, codex, litellm, qwen-code, gemini-cli, goose) do NOT exhibit goose-style release-train double-step within 30 days** — testing repo-specific signature claim. Falsifier: ≥3 of the other 5 repos exhibit identical-pattern release-train double-step within 30 days.

**Pred 270-4** (release-train false-deep prevention): **No goose tick within next 14 days exhibits ≥6h zero-merge silence ENDED by a non-release-train merge AND followed within 24h by a release-train double-step** — testing whether release-train merges are the dominant goose deep-cohort exit mechanism. Falsifier: any goose tick exhibits a 6h+ silence ending via non-release-train human-merge followed by release-train within 24h (would show release-train is decoupled from silence dynamics).

**Pred 270-5** (Pred LLL disruption confirmation): **Pred LLL (≥2 of {opencode, codex, goose} cross 6h-deep within 4 ticks of Add.117) FALSIFIES at deadline Add.121** because goose has been removed from candidate pool by #8872 reset, and remaining 2 candidates (opencode, codex) cannot both individually cross 6h before Add.121 deadline given current silences (3h00m+ and 2h57m+ at Add.118 close — would require 3h+ additional silence by Add.121 ≈ 13:00Z, which is within physical possibility but requires both repos to remain merge-silent for full 3 ticks). Tick 1 of 4 already passing-direction-for-falsifier. Falsifier: ≥2 of {opencode, codex} cross 6h-deep by Add.121.

## Carry-over consistency check vs prior synths

- **vs synth #98**: bot-pattern catalog now contains 2 classes (mass-close, release-train double-step). Both share sub-60s timing signature, distinct state-transition signatures.
- **vs synth #258 deep-cohort framework**: release-train merges DO count as merges for deep-cohort exit (goose RESET from 2h14m to 42m), so release-train cadence is a confound for natural deep-cohort dynamics — synth #258 framework should be refined to track "release-train-driven exits" vs "human-merge-driven exits" as separate sub-classes.
- **vs synth #264 sole-survivor framework**: release-train activity is sufficient to terminate sole-survivorship (any merge counts) — synth #264 should note that release-train-only repos can falsely appear active when only release-bot is operating, masking human-merge silence.
- **vs synth #269 (Pattern E sub-tick co-occurrence)**: orthogonal pattern classes; both occurred at Add.118 with no causal coupling — establishes that bot-coordination patterns and human-rebase patterns are independent failure modes.

## Next-tick (Add.119) observables

- **Pred 270-1 longest-horizon test** (30-day deadline) cannot be tested at Add.119; instead Add.119 will track whether goose remains shallow (no new merges between #8872 and Add.119 close ~12:00-12:30Z) — confirming release-train is a single discrete event not a repeating burst.
- **Pred 270-5 immediate test**: do opencode or codex cross 6h-deep at Add.119? Current silences 3h00m+ and 2h57m+ would reach 4h25m+ and 4h22m+ by Add.119 close — still ~1h35m below 6h threshold. Pred 270-5 still PASSING-DIRECTION-FOR-FALSIFIER at Add.119.
- **Pred LLL falsification trajectory**: tick 2 of 4 PASSING-DIRECTION confirmation expected.

## Methodological note on Add.118 capture

This synth is grounded in real GitHub PR API data captured at 2026-04-28T10:51:00Z UTC for block/goose. PR numbers, timestamps, SHAs, and authorship verified via `gh pr view` against block/goose at capture time. Stage-1 merge SHA `52b3f21ef7fd8ba887448687810d9db13d594ad5` corresponds to PR #8872's merge commit. Stage-2 PR #8875 was unmerged at capture time (open for ~42min at Add.118 close).

**Synth #270 status: LIVE-TRACKING with 5 predictions outstanding (deadlines Add.119, Add.121, 14 days, 30 days).**
