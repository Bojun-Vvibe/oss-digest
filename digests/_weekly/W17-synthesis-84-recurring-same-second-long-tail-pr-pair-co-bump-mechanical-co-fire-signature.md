# W17 Synthesis #84 — Recurring same-second long-tail PR-pair co-bump (mechanical co-fire signature)

**Window anchor:** Addendum 19 (2026-04-25 12:05Z–12:52Z), with backreference to Addendum 17.

## Lens

Synthesis #70 captured **cross-repo long-tail PR refresh waves** (multi-week-aged PRs synchronizing across unrelated repos in a single window) and synthesis #80 captured the **intra-repo deep long-tail refresh wave** (five aged opencode PRs bumped inside a 38-minute window). Both treat long-tail wakes as *crowd events* — many PRs participate, the wave is the unit of analysis.

This synthesis isolates the **opposite shape**: a **two-PR pair, two distinct authors, two distinct surfaces, refreshed at the *same second* on independent occasions**. Not a wave (only two participants). Not a single-author cascade (two distinct authors). Not a maintainer-driven cohort (no maintainer touch in either occurrence). The structural fact is **second-precision co-fire**, recurring **2h02m04s apart on the same calendar day**, with **no other PR ever co-firing at those seconds**.

This is a **mechanical signature**, not a behavioral one. The hypothesis: the two PRs share a CI-matrix entry, base-branch dependency, or rebase-trigger hook that fires both bumps together while leaving siblings untouched.

## Anchor evidence — opencode #13854 + #18767

| Occurrence | Timestamp (Z) | PR-A | author-A | PR-A age | PR-B | author-B | PR-B age |
|---:|---|---|---|---|---|---|---|
| 1 | 2026-04-25T10:40:13 | #13854 | mocksoul (Vadim Fint) | ~68d | #18767 | noahbentusi | ~33d |
| 2 | 2026-04-25T12:42:17 | #13854 | mocksoul | ~68d | #18767 | noahbentusi | ~33d |

**Same two PRs. Same two authors. Same exact second of refresh, in both occurrences. 2h02m04s gap between occurrences.** No third PR participates at either second. Head SHAs unchanged across both occurrences for both PRs (`399dd8afb170` for #13854, `2e2c3773f082` for #18767) — i.e., neither bump is a content-changing push. They are pure `updatedAt` advances.

## Why this is a distinct lens

- **vs #70 (cross-repo long-tail wave):** #70 is *cross-repo*, *crowd-shaped* (many PRs), and *single-occurrence per window*. This is *intra-repo*, *pair-shaped* (exactly two PRs), and *recurring on the same day*.
- **vs #80 (intra-repo deep long-tail refresh wave):** #80 had **five** opencode PRs in a 38-minute window with a spread of 38 minutes between first and last bump (10:40:13Z → 11:18:15Z). This synthesis isolates the **head of that wave** — the pair that fired at the *exact same second* — and shows that the head pair is **stable enough to recur 2h later** while the rest of the wave (#12822, #15603, #14573) does *not* recur. The pair has a property the rest of the wave doesn't.
- **vs #79 (cross-repo defensive payload-shape convergence):** #79 is about *content-shaped* convergence (similar fixes converging across PRs). This is *timestamp-shaped* convergence with **no content correlation** — the two surfaces (TUI streaming markdown completion vs Mobile Touch Optimization) are *unrelated*; only the timestamp links them.
- **vs #82 (duplicate-PR convergence by independent authors):** #82 is two PRs *of the same intent* by two authors. Here the two PRs have *different intents* and only the *update timing* matches.

## Mechanism candidates (ranked by plausibility)

1. **Shared base-SHA rebase trigger.** Both PRs target the same base branch (likely `dev`); a maintainer-side action (`git push --force` to dev, or a tag/branch operation) at 10:40:13Z and again at 12:42:17Z could trigger GitHub to recompute mergeability for all open PRs against that base, and the recomputation order may visit #13854 and #18767 adjacently for repository-internal reasons. **But:** this would also touch #12822 / #15603 / #14573 / #18761 (which is in fact bumped at 12:50:20Z in Addendum 19 — *not* at 12:42:17Z). So if it is a rebase trigger, it is a *partial* one.
2. **Shared CI-matrix entry.** The two PRs may both depend on a specific CI workflow that re-runs on a 2-hour cadence and updates `updatedAt` on the PR check-suite. The 2h02m04s gap is *very close to a 2-hour cron* (off by 2m04s, which is consistent with a cron + jitter).
3. **Shared draft-status / mergeability label.** A bot that re-evaluates labels on a fixed cadence could touch the same pair if both PRs share a unique label not held by others.
4. **Pure coincidence.** Two-occurrence dataset is small. P(same second by chance) ≈ 1/86400 per pair-day ≈ 1.16e-5. Two co-occurrences on the same day for *the same pair* (not just any pair): vanishingly small under independence. So coincidence is the **least** likely mechanism.

The data does not let us distinguish (1) from (2) from (3) — but it does let us **rule out** (4) and rule out a #50-style author-driven cascade (no author of either PR is active at either second).

## Falsifier — what would break the pattern

The pattern fails (and #84 should be downgraded) if any of:
- A third occurrence at ~14:44:21Z (i.e., 2h02m04s after 12:42:17Z) does **not** materialize. If it does materialize, the cron hypothesis (mechanism #2) jumps from "candidate" to "very likely."
- A third PR joins the pair at the next co-fire second — that would convert the pair signature into a small wave and merge the lens with #80.
- One or both PRs is closed / merged before the next predicted second — co-fire mechanism becomes unobservable.

## Cross-reference to recent addendums

- **Addendum 17 (10:39Z–11:35Z):** identified the same-second pairing as part of a **five-PR wave** (synthesis #80 anchor), did *not* isolate the pair as structurally privileged.
- **Addendum 18 (11:35Z–12:05Z):** asserted the wave had "exhausted itself in a single 38-minute burst, did not produce any rebound." **This synthesis falsifies that assertion** for the *pair subset* — the pair did rebound, exactly once, at 2h02m04s. The other three PRs in the wave (#12822, #15603, #14573) did *not* rebound, so Addendum 18's claim survives for the *non-pair* subset.
- **Addendum 19 (12:05Z–12:52Z):** captured occurrence #2 of the pair co-fire at 12:42:17Z, making the recurrence visible.

## PRs cited (≥3 by number)

- **anomalyco/opencode#13854** — co-fire participant A, both occurrences. *fix(tui): stop streaming markdown/code after message completes.*
- **anomalyco/opencode#18767** — co-fire participant B, both occurrences. *feat(app): Mobile Touch Optimization.*
- **anomalyco/opencode#12822** — wave participant in occurrence #1 only (refreshed 10:58:03Z); did **not** participate in occurrence #2. The co-fire selectivity is the load-bearing observation here — #12822 is the negative control.
- **anomalyco/opencode#18761** — bumped at 12:50:20Z, **8m03s after** occurrence #2 of the pair, by a different author (`OpeOginni`). Not part of the co-fire pair, but its proximity to occurrence #2 is a useful anti-correlation: if the mechanism were a *broad* cron, #18761 would also have fired at 12:42:17Z. It did not. This sharpens the "pair-specific" hypothesis.

## Operational implication

If mechanism #2 (shared CI cron) is the true cause, then the next opencode tick (the one that runs after ~14:44:21Z) is a **natural experiment**: a third occurrence confirms the cron hypothesis and gives us a periodicity to plan future ticks around (we can predict when #13854 / #18767 will next bump). If the third occurrence does not materialize, the lens is downgraded to "two-occurrence coincidence under improbable timing" and the pair is no longer treated as mechanically linked.

This is the first **falsifiable timing-based prediction** issued by the W17 synthesis stream.
