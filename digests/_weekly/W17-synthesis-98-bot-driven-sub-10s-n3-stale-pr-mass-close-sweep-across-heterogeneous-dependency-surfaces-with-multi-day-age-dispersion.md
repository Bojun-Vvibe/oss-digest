# W17 Synthesis #98 — Bot-driven sub-10-second N=3 stale-PR mass-close sweep across heterogeneous dependency surfaces with multi-day age dispersion

**Anchor window:** 2026-04-25T18:02:28Z → 18:02:37Z (9 seconds).
**Anchor repo:** BerriAI/litellm.
**Anchor actor:** `app/dependabot` (the PRs were dependabot-authored; the closer identity is not surfaced by the API but the 9-second cadence + heterogeneous targets imply a single sweep action by a maintainer or a config-driven dependabot recheck).

## The shape

Three dependency-bump PRs, all opened by `app/dependabot`, all closed-unmerged inside a **9-second** window, on **three disjoint dependency surfaces**, with **multi-day age dispersion**. This is the first cataloged **bot-authored cross-surface mass-close** in W17, and the first synth where the structural unit is **bot-PR-stale-sweep** rather than a human-driven event.

## The three members

| PR | Surface | Opened | Closed | Age at close |
|---|---|---|---|---|
| [BerriAI/litellm#25534] (`chore(deps): bump pypdf 6.9.2→6.10.0`) | pypdf | 2026-04-10T22:08:01Z | 2026-04-25T18:02:28Z | **14d 19h 54m** |
| [BerriAI/litellm#26188] (`build(deps): bump python-dotenv 1.0.1→1.2.2`) | python-dotenv | 2026-04-21T19:59:53Z | 2026-04-25T18:02:35Z | **3d 22h 02m** |
| [BerriAI/litellm#25662] (`build(deps): bump aiohttp 3.13.3→3.13.4`) | aiohttp | 2026-04-14T00:34:18Z | 2026-04-25T18:02:37Z | **11d 17h 28m** |

Head SHAs at close: `cc7aa21c`, `92819a6b`, `48ab7e15`. All three CLOSED-UNMERGED (no merge SHAs).

## Why "heterogeneous dependency surfaces"

pypdf (PDF parsing), python-dotenv (env loading), aiohttp (HTTP client/server). Three orthogonal subsystems — no shared transitive deps that would explain a coordinated update. The close action is **not** triggered by a co-resolution; it is a **sweep**.

## Why "multi-day age dispersion"

Ages at close span **3.9d → 11.7d → 14.8d**. If the trigger were a fixed staleness threshold (e.g., "close all dependabot PRs older than 7 days"), the 3.9d entry would not be in the cohort. So the sweep criterion is **not** age-based — it is more likely a **manual triage decision** ("clear the stale dependabot queue") or a **config refresh** (dependabot recompiled the desired version set and superseded these). The presence of #26188 (only 3.9d old) at the leading edge of the close window argues for a **manual broom** rather than a scheduled bot rule.

## Cadence shape

Sub-10s N=3 close cadence (9s span, gaps 7s + 2s). This is structurally similar to synth #84's "same-second long-tail PR pair co-bump" and synth #59/#62's "sub-15-min self-close on flaky-test surface" — but distinct from both:
- **vs synth #84**: that synth is mechanical co-fire on **content surface** (pushed_at bumps), this is **lifecycle close events**.
- **vs synth #59 / #62**: those are **human-author** self-closes on **a single shared surface** (flaky tests, CI). This is bot-authored across **disjoint surfaces** and the closer is not the author.

## Distinctness from prior synths

- **Synth #84** (recurring same-second long-tail PR pair co-bump mechanical co-fire signature): N=2 same-second `updatedAt` bumps on stale long-tail PRs, no state change. Synth #98 is N=3 close events with state transitions OPEN→CLOSED.
- **Synth #59** (sub-15-minute self-close on flaky-test surface): single-surface, human, lifespan-of-PR-itself. Synth #98 is multi-surface, bot-authored, lifespan-at-close.
- **Synth #62** (same-author CI-surface micro-PR doublet across the failure-then-success boundary): N=2, content-bearing, human. Synth #98 is N=3, no content events, automated PRs.
- **Synth #88** (aged-PR self-close pair bookending fresh surface open-merge cycle): N=2 self-closes by **author** of the closed PRs. Synth #98's closer ≠ author.
- **Synth #50** (post-own-merge cascade): correlates close-after-own-merge by same human author. Synth #98 has no merge-then-close coupling — pure stale sweep.

## Falsifiable predictions

1. If `BerriAI/litellm` shows another sub-10s N≥3 close cluster of `app/dependabot`-authored PRs in the next 7 days, the trigger is **scheduled** (cron-like maintainer or bot rule).
2. If dependabot **re-opens** any of the three within 24h on a new version (e.g., pypdf 6.10.0→6.11.0 reopens #25534's surface), the sweep was a **supersession close** (cleared to make room for fresher bumps).
3. If no re-opens occur within 7d on any of the three packages, the sweep was a **rejection close** (maintainer doesn't want these bumps, period).

## Risk lens

- **CI-cost saving**: each closed dependabot PR retires its outstanding test matrix. Three closes = three retired CI runs.
- **Security exposure**: if any of the three bumps included a security advisory (CVE), closing without merging leaves the repo on the older version. Worth a one-off check on the diff bodies.
- **Detector noise**: the same-second cluster detector (synth #84 / #92) will fire on this 9s window. To avoid mis-classifying as content-bearing co-fire, the detector should consult **author identity** (`app/dependabot`) and **state transition type** (CLOSED-UNMERGED with no merge SHA) before classifying.

## Cross-actor coincidence (recorded for completeness, not as part of the synth)

`pascalandr`'s opencode self-close (#24348, anomalyco/opencode) lands at 18:02:39Z — **2 seconds after** the dependabot sweep finishes. Different repo, different actor, different language ecosystem. Pure noise, but anchored here so the cross-repo same-second cluster detector can be tuned to require **same-repo** correlation.
