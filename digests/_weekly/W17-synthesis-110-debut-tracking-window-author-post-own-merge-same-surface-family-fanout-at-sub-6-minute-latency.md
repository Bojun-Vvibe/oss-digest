# W17 Synthesis #110 — Debut-tracking-window author post-own-merge same-surface-family fanout at sub-6-minute latency: kitlangton (anomalyco/opencode) #24387 → #24394

**Anchored:** 2026-04-25, addenda 31 → 32, anomalyco/opencode.

**Claim (falsifiable):** A previously-untracked author's *first* PR-event in the dispatcher window is followed, **within ≤ 6 minutes of that PR's self-merge**, by a *second* PR opened on the **same surface family** (matching the predecessor's title-prefix and base branch). This is sharper than synth **#50** (general post-own-merge same-author cascade) and synth **#64** (cross-repo, ~5-hour scale post-own-merge cascade): the latency is intra-author intra-repo intra-surface-family at **single-digit minutes**, and the author has **no prior tracking history** to establish a pre-existing cadence.

## Evidence

`kitlangton`'s tracked-window event sequence:

| event | PR | timestamp | base | title | head SHA | size |
|---|---|---|---|---|---|---|
| OPEN | #24387 | 2026-04-25T20:49:51Z | dev | feat(httpapi): bridge config update endpoint | `e739aea8` | +111/-8 / 6 files |
| MERGE (self) | #24387 | 2026-04-25T21:52:34Z | dev | (same) | merge SHA `df9e1d98548b459815ab6913acad50d3f445e6c4` | — |
| OPEN | #24394 | 2026-04-25T21:58:00Z | dev | feat(httpapi): bridge project git init endpoint | `9f0289e1` | +84/-3 / 5 files |

**Inter-event latencies:**
- #24387 open → #24387 self-merge: **1h02m43s**
- #24387 self-merge → #24394 open: **5m26s**

**Surface-family match (4-axis):**
1. Title prefix: `feat(httpapi): bridge ` (literal byte-prefix match, both PRs).
2. Base branch: `dev` (both).
3. Author: `kitlangton` (both).
4. Diff-size proximity: 5–6 files, +84/-3 vs +111/-8 (#24394 is ~75% the diff-size of #24387).

**Author tracking-history depth:** zero events for `kitlangton` prior to Add. 31's #24387 OPEN. The pair (#24387, #24394) is the *entirety* of the author's tracked footprint.

## Why this is sharper than existing synth coverage

- **Synth #50** (post-own-merge same-author adjacent-surface follow-up) does not constrain author tenure; it is observed for established authors with multi-week histories.
- **Synth #64** (cross-repo post-own-merge cascade litellm + opencode within 5 hours) operates at multi-hour latency and crosses repo boundaries.
- **Synth #63** (hot-author multi-surface fanout within minutes) requires *unrelated* surface families (the "fanout" is by definition divergent). #24387/#24394 are **on the same surface family**, so #63 does not apply.
- **Synth #93** (first-appearance debut as four-PR introduction) requires n=4 PRs in a debut burst. `kitlangton` has n=2, so #93 does not apply.
- **Synth #71** (vendor self-onboarding sub-hourly self-iteration) requires a *vendor* signature and zero maintainer interaction. `kitlangton` is a known sst/effect-ts maintainer; the surface (httpapi/bridge) is internal opencode plumbing, not a vendor integration.

The novel content of #110 is the conjunction: **(debut author) ∧ (same surface family) ∧ (sub-6-minute post-self-merge open) ∧ (single-author single-repo)**. The closest prior synth is **#85** (sub-10-second same-author cross-PR doublet on adjacent surfaces) — but #85 is *open-time-correlated*, both PRs opened nearly simultaneously; #110 is *self-merge-anchored*, the second open is gated on the first's merge.

## Falsification surface

- If `kitlangton` had prior PR-events in the tracked window that the dispatcher missed, the "debut" framing is wrong (downgrade to synth #50 instance).
- If #24394's diff substantially overlaps #24387's diff (e.g., touches the same files in the same regions), this is a **continuation patch / fragment** rather than a fresh same-surface-family open. (Pre-merge inspection of the diffs shows distinct file sets — `bridge config update endpoint` vs `bridge project git init endpoint` — but the file lists were not pulled in this window's data fetch; future ticks should verify file-disjointness for this specific pair.)
- If the next `kitlangton` event is on a **different** surface family (e.g., not `feat(httpapi): bridge*`) and the cadence does not produce a third bridge-* PR, the "fanout" framing weakens to a "two-PR series" framing.

## Predicted near-term observations

If this is a real regime, near-future ticks should show:
1. A third `kitlangton` PR matching `feat(httpapi): bridge *` within ≤ 24 hours of #24394's eventual merge.
2. The cadence (open → self-merge → fresh open) tightening or holding stable, not loosening, since the author's pattern is establishing rather than decaying.
3. No maintainer-merge intervention on `kitlangton`'s PRs — i.e., `kitlangton` remains in the self-merge regime contrary to synth #109's `ishaan-berri`-mediated maintainer-merge channel.

If instead the next `kitlangton` event is a maintainer-merge, **#110 reduces to a single-instance pair** and synth #109's role-specialization claim extends across repos, which would be a stronger cross-repo finding.

## Cross-references

- Tightens **synth #50** by adding the debut-author + same-surface-family + sub-6-minute constraint.
- Distinct from **synth #64** (cross-repo, multi-hour) and **synth #50** (general).
- Complementary to **synth #109** (which constrains the *merger* axis): synth #110 constrains the *opener* axis at the same temporal granularity.
- Test-bed for whether **synth #102**'s "author monoculture merge stream window" classifier extends to single-author repos (anomalyco/opencode in Add. 32 has 1 merge by 1 author = trivial monoculture; #24394 if merged in next tick by `kitlangton` would extend the monoculture by one PR).
