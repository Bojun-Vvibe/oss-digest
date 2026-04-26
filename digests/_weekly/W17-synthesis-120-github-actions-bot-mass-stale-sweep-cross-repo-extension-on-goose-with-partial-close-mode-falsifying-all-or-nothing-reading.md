# W17 Synthesis #120 — github-actions[bot] Mass-Stale-Touch Sweep Reproduces On block/goose As 5-PR 13-Second Cluster With Partial-Close Mode (Sweep Is Not All-Or-Nothing)

**Status:** observed pattern, cross-repo recurrence + behavior variant — promote to W17 with strong evidence.
**Anchor:** Addendum 37 (this tick), `block/goose` 5-PR cluster updated 00:52:18Z–00:52:31Z.
**Extends / refines:** synth #98 (bot-driven sub-10s n3 stale-PR mass-close sweep across heterogeneous dependency surfaces with multi-day age dispersion).

## Observation

Synth #98 first established the bot-mass-close pattern on `anomalyco/opencode` as: sub-10-second cluster, n=3, all closed unmerged by `github-actions[bot]`, multi-day age dispersion across heterogeneous surfaces. The implicit shape was that the sweep was **all-or-nothing** within the cluster — every PR touched in the burst was closed.

In Addendum 37, the same actor (`github-actions[bot]`) executes a structurally similar burst on a **different repo** (`block/goose`) with **two new properties**:

1. **n grows to 5** (vs n=3 baseline). Cluster span 13 seconds (vs sub-10s baseline) — sub-3-second per-PR throughput is preserved (13s / 5 = 2.6s per PR), so the bot's per-record processing rate is the same; only the batch size changed.
2. **Partial-close mode**: of the 5 PRs touched, **only 2 are closed unmerged**; the other 3 are only metadata-touched (state remains `open`). The sweep is **not all-or-nothing** — it has a per-PR decision step.

## Concrete artifacts

Cluster on `block/goose`, all touched by `github-actions[bot]`:

| Time (UTC) | PR | Author | State after | Age at touch | Title (truncated) |
|------------|----|--------|-------------|---------------|-------------------|
| 00:52:18Z | [block/goose#7559] | `benthecarman` | open | 58 days | "Bitcoin integration through Orange SDK" |
| 00:52:21Z | [block/goose#7628] | `jh-block` | **closed unmerged** | 54 days | "Add unified thinking effort control across all providers" |
| 00:52:23Z | [block/goose#7761] | `jh-block` | open | 48 days | "feat: Add Skills as top-level sidebar feature" |
| 00:52:29Z | [block/goose#8010] | `jh-block` | **closed unmerged** | 38 days | "feat: add delete button to apps UI" |
| 00:52:31Z | [block/goose#8120] | `DOsinga` | open | 32 days | "Palmate screen" |

**Closer identity for the two closed PRs verified via `gh api repos/block/goose/issues/{n}/events`:** `actor=github-actions[bot]`, timestamps match the `updated_at` instants exactly. Authors of closed PRs (`jh-block`) are not the actor; this is **not** a self-close pattern.

**Authors in the cluster:** `benthecarman`, `jh-block` (×3), `DOsinga` — 3 distinct human authors, dominated by `jh-block`.

**Age dispersion:** 32, 38, 48, 54, 58 days — span 26 days, monotonic ordering by touch time. **Touch order = age order (oldest first).** This is a meaningful refinement: the cluster scans by PR creation time, not by PR number (numeric order would be #7559 < #7628 < #7761 < #8010 < #8120, which happens to coincide here, but in mixed-repo sweeps these can diverge).

## Outcome distribution

| Outcome | n | Authors |
|---------|---|---------|
| Closed unmerged | 2 | `jh-block`, `jh-block` |
| Open after metadata touch | 3 | `benthecarman`, `jh-block`, `DOsinga` |

Both closed PRs are by **the same author (`jh-block`)** and are both **`feat:`-prefixed** (`feat: add delete button to apps UI` and `Add unified thinking effort control…`). The 3 open-after-touch PRs are by 3 different authors with mixed prefixes (`Bitcoin integration…`, `feat: Add Skills…`, `Palmate screen`).

**One open-after-touch PR (`#7761` by `jh-block`) is also `feat:`-prefixed and authored by the closed-PR author.** So the predicate is not "same author + `feat:` → close" — there is a per-PR component the simple author/prefix axes do not capture. Plausible candidates:

- Stale-label presence on the closed PRs (not on the open-after-touch PRs).
- Reviewer-explicit-deferral marker on the open-after-touch PRs.
- Per-PR last-comment-from-maintainer signal that the bot reads as "still alive."

We do not have the sweep config in scope, but the **partial-close outcome** falsifies the strongest reading of synth #98 ("the bot closes whatever it touches in a sub-10s burst").

## Cross-repo applicability

This is the **second repo** where we have observed the actor `github-actions[bot]` executing this exact sub-15-second multi-PR burst pattern (`anomalyco/opencode` per synth #98; `block/goose` per this synth). Different organization (`anomalyco` vs `block`), different primary language, different stale-PR substrate. The pattern is **not** repo-specific.

It is plausible that **the same upstream GitHub Actions workflow template (e.g., `actions/stale@v9`)** is deployed independently on both repos with different threshold configs. That would explain:

- identical actor identity (`github-actions[bot]`);
- identical sub-3s per-PR throughput;
- divergent batch sizes (n=3 on opencode, n=5 on goose) — different scan windows;
- divergent close-rate (100% on opencode, 40% on goose) — different staleness thresholds.

If true, the pattern is **not a discovery about either repo** — it is a discovery about the **deployment surface of `actions/stale`**: on any repo running it, we should expect a sub-15-second multi-PR burst at scheduled cron times, with close-rate determined by the local stale-config but sub-3s per-PR throughput as a fingerprint.

## Falsifiable predictions

- If we observe a third repo in scope (`charmbracelet/crush`, `BerriAI/litellm`, `sst/opencode`, `openai/codex`) executing a `github-actions[bot]` sub-15-second multi-PR burst with sub-3s per-PR throughput, the **deployment-surface hypothesis** is confirmed.
- If `block/goose` runs another sweep within the next 7 days and the close-rate is again non-100% but with **different open-vs-close composition than just `jh-block` `feat:`**, the per-PR predicate is something other than author+prefix (consistent with stale-label hypothesis).
- If `anomalyco/opencode` runs another sweep and exhibits partial-close (rather than the n=3 100%-close baseline of synth #98), the all-or-nothing reading of #98 is finally retired.
- If a sweep ever fires with **non-`github-actions[bot]` actor** but the same sub-3s per-PR throughput fingerprint, we have a copycat custom-action and the deployment-surface hypothesis becomes weaker.

## Distinguishing from prior synths

- **vs #98 (the parent synth):** #120 is the strict cross-repo extension with two new properties (n=5, partial-close). #98 should be re-read as the n=3 100%-close instance of the broader pattern #120 captures.
- **vs #66 (opencode self-close pattern is surface-agnostic and time-bimodal):** #66 is **author-driven self-close**; #120 is **bot-driven third-party close**. Different actor, different mechanism, different rate-limit.
- **vs #56 (lockstep refresh of aged PRs as bot rebase-train signal):** #56 is **rebase**, not close; the bot in #56 is a different role (rebase automation, not stale automation). Both share the "sub-10s multi-PR cluster on aged PRs" surface signature, but the outcomes are non-overlapping (rebase vs close).

## Anchor PRs (cited explicitly)

- `block/goose#7559`, `#7628`, `#7761`, `#8010`, `#8120` — single sweep, 13 seconds, partial-close.
- Synth #98 anchors (`anomalyco/opencode#24392` etc.) — prior n=3 100%-close instance.
