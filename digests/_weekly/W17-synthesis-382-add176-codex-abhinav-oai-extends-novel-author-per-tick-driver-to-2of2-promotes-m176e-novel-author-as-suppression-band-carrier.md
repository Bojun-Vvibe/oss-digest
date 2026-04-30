# W17 synthesis #382 — Add.176 codex abhinav-oai #19840 extends novel-author-per-tick driver to 2-of-2, promotes M-176.E novel-author-as-suppression-band-carrier as the M-176.A bounded-low-emission band's authorship signature

## Observation

ADDENDUM-176 records codex emission **1** (abhinav-oai #19840 `8f3c06cc` 04:46:33Z `Add persisted hook enablement state`). abhinav-oai is **novel** to the Add.171-176 codex post-burst-tail author union. Combined with the Add.175 zero-floor exit by bolinfest #20095 `ac4332c0` (also novel to the same author union), the post-Add.174-zero codex emission set Add.175-176 = `{bolinfest, abhinav-oai}` — **2 distinct novel authors driving 2 consecutive non-zero ticks** in the M-176.A bounded-low-emission band [0, 1].

Synth #380 introduced the synth-internal observation "author-introduction-as-suppression-band-boundary-exit" as a **single-instance** flag at Add.175 (P-380.E flagged for diagnostic tracking). Add.176 promotes this to a **2-of-2 supporting-tick W17 micro-pattern** and reframes the underlying mechanism: novel authorship is not just driving boundary exit (Add.175) but is **carrying** the sub-floor band through consecutive ticks (Add.175 + Add.176).

## Empirical PR-anchored evidence

- **Add.175 codex emission**: bolinfest #20095 `ac4332c0` `permissions: expose active profile metadata`. Author novel to the post-burst-tail author union (Add.171-174 contributors did not include bolinfest).
- **Add.176 codex emission**: abhinav-oai #19840 `8f3c06cc` `Add persisted hook enablement state`. Author novel to the post-burst-tail author union (Add.171-175 contributors did not include abhinav-oai). Author distinct from bolinfest.
- **Author union extension**: post-Add.174-zero codex author union grows by 1 each tick (Add.175 +bolinfest, Add.176 +abhinav-oai). 2 ticks, 2 author additions, zero recurrence within the post-zero-floor regime.
- **Surface novelty**: Add.175 surface = `permissions / active-profile-metadata`; Add.176 surface = `hook-enablement-state-persistence`. Both surfaces are structurally distinct from each other AND from the Add.171-173 codex sub-floor surface set (configuration-loading / editor-integration). Per-tick novel-surface introduction matches the per-tick novel-author introduction at 2-of-2.
- **PR cardinality preservation**: both ticks emit exactly k=1 PR. The bounded-low-emission band [0, 1] (M-176.A) is at value 1 for both ticks (Add.174 = 0 sandwiched between Add.173 = 1 and Add.175 = 1; Add.176 = 1 extends the value-1 streak).

## New regime: M-176.E novel-author-as-suppression-band-carrier

When a repo enters a post-burst bounded-low-emission band (M-176.A-class regime) following a high-amplitude burst, each non-zero tick within the band is **carried by an author that is novel to the post-burst author union**, with the carrier's surface also novel within the same window.

- **Definition**: a tick T is M-176.E-resident if (a) the repo is in a M-176.A-class bounded-low-emission band [0, k] for k ≤ 2, (b) the tick emits ≥1 PR, (c) the contributing author(s) are NOT in the post-burst-tail author union prior to T, and (d) the contributing surface(s) are NOT in the post-burst-tail surface union prior to T.
- **Add.175 instance**: bolinfest novel ✓, permissions/active-profile-metadata surface novel ✓, M-176.A-resident ✓, k=1 ✓.
- **Add.176 instance**: abhinav-oai novel ✓, hook-enablement-state-persistence surface novel ✓, M-176.A-resident ✓, k=1 ✓.
- **Distinguishing feature vs synth #379 M-175.A vendor-family-narrow-surface-persistence**: M-175.A describes **fixed-author-rotation set with fixed-vendor-surface persistence** (vendor surface anchored, authors rotate within a closed set). M-176.E describes the **inverse**: **fully open author union AND fully open surface union** within the band, with novelty as the carrier signature. M-175.A operates on Tier-2 over-recovery surface persistence; M-176.E operates on sub-floor band carrier authorship.
- **Distinguishing feature vs M-176.A** (synth #380 bounded-low-emission band): M-176.A describes the **emission cardinality dynamics** of the band (band width, soft-floor non-absorbing, soft-ceiling non-absorbing). M-176.E describes the **authorship dynamics within the band** (novel-author-per-tick driver, surface novelty per tick). M-176.A and M-176.E are co-resident at Add.175-176; M-176.A is the cardinality regime, M-176.E is the authorship regime.

## Falsification of in-band author-recurrence hypothesis

Pre-Add.176 modeling implicitly assumed the codex post-burst sub-floor band would be **carried by a recurring author or a small recurring author set** (typical of low-emission post-burst tails in similar W17 over-recovery → suppression sequences for other repos). Add.175-176 falsifies this:

- **No author recurrence**: bolinfest (Add.175) does not recur at Add.176 — abhinav-oai is a distinct novel author.
- **No surface recurrence**: permissions/active-profile-metadata (Add.175) does not recur at Add.176 — hook-enablement-state-persistence is a distinct novel surface.
- **No author-pool reuse from Add.171-173 sub-floor**: the Add.171-173 codex sub-floor band (3-of-3 ticks at value 1) was carried by a different author set (per the historical record); Add.175-176 introduces 2 authors that were absent from that prior author set.

The in-band author-recurrence hypothesis is **falsified at 2-of-2 ticks**. M-176.E (open-author-union, open-surface-union, novelty-as-carrier-signature) is the replacement.

## Cross-regime synthesis

- **M-176.A** (synth #376 / #380 refined, codex bounded-low-emission band [0, 1]): co-resident at Add.175-176 with M-176.E. The band's emission cardinality regime (M-176.A) and the band's authorship regime (M-176.E) operate on disjoint dimensions of the same emission stream.
- **M-175.A** (synth #379, vendor-family-narrow-surface-persistence): **structurally inverse** to M-176.E. M-175.A is fixed-surface / rotating-author-within-closed-set; M-176.E is open-surface / open-author-novel-per-tick. The two regimes operate on different repos (M-175.A on litellm Tier-2; M-176.E on codex Tier-2-suppressed) and represent **opposite poles of the surface-author coupling spectrum**.
- **M-176.B / M-176.C** (synth #381, joint extreme + multi-stage collapse cascade): provide the **window-level context** for M-176.E. The Add.176 M-176.B sole-emitter status means abhinav-oai's emission is the **only emission** in the window; the M-176.C litellm terminal-collapse means the network's emission is funneled through the codex sub-floor band, where M-176.E carriership applies.
- **M-178.A** (synth #378, multi-tier-silence-stratification): the silence-tier set at Add.176 (4 silent repos: litellm, opencode, gemini-cli, goose, qwen-code minus codex) is the **carrier-pool exclusion set** — codex is the only non-silent repo, so M-176.E carrier authorship is necessarily codex-restricted.
- **M-168.A** (synth #368, cross-repo over-recovery template): the original burst that established the M-176.A band is the codex Add.168 sextuple. The post-burst tail's M-176.E carrier-authorship regime is therefore **causally downstream of M-168.A**: the burst's amplitude consumes the recurring-author surface pool, leaving novel authors as the carrier signature for the post-burst tail.

## Predictions

- **P-382.A**: codex Add.177 emission (if non-zero, per P-176.B / P-380.A) is carried by an author novel to the post-Add.174-zero author union {bolinfest, abhinav-oai}, advancing M-176.E to 3-of-3; >35% prob (mid-low — author pool may begin to recur, matches P-176.L downgraded estimate).
- **P-382.B**: codex Add.177 emission (if non-zero) is on a surface novel to the post-Add.174-zero surface union {permissions/active-profile-metadata, hook-enablement-state-persistence}, advancing the per-tick novel-surface introduction to 3-of-3; >40% prob (matches P-176.P).
- **P-382.C**: bolinfest does NOT recur in the codex emission set across Add.177-178 (novel-author non-recurrence within the M-176.A band); >50% prob (matches P-380.F at the 2-tick horizon).
- **P-382.D**: abhinav-oai does NOT recur in the codex emission set across Add.177-178 (novel-author non-recurrence within the M-176.A band); >50% prob.
- **P-382.E**: M-176.E breaks at the next codex tick where (a) the emission is carried by a recurring author (bolinfest, abhinav-oai, or a pre-Add.174 sub-floor contributor) OR (b) the emission surface recurs from the post-Add.174-zero surface union; >55% prob (cumulative break probability over Add.177-179).
- **P-382.F**: When M-176.A regime exit eventually occurs (codex tick with ≥2 emissions), the regime exit tick contains AT LEAST one author from the M-176.E carrier set {bolinfest, abhinav-oai} (carrier-author retention through regime exit); >35% prob (mid-low — single-instance exit hypothesis, no precedent).
- **P-382.G**: M-176.E is **specific to the codex post-Add.168-sextuple band** — no other repo in the Add.158-200 window exhibits a 2-tick novel-author-and-novel-surface co-novelty within a bounded-low-emission band; >55% prob.
- **P-382.H**: M-176.E and M-175.A are **mutually exclusive at the per-repo level** within W17 — no repo simultaneously exhibits a vendor-family-fixed-surface streak (M-175.A) AND a novel-author-novel-surface band carriership (M-176.E) within the same Add.NNN window; >55% prob.

## Diagnostic test schedule

- **Add.177**: P-382.A / P-382.B (per-tick novelty extension), P-176.L / P-176.P (matches).
- **Add.177-178**: P-382.C / P-382.D (novel-author non-recurrence).
- **Add.177-179**: P-382.E (cumulative break test).
- **Conditional on M-176.A regime exit**: P-382.F.
- **W17 closeout**: P-382.G / P-382.H.

## Cross-references

- ADDENDUM-176 (codex abhinav-oai #19840 `8f3c06cc`, sole emitter; window 04:01:11Z..05:01:36Z).
- ADDENDUM-175 `a76817f` (codex bolinfest #20095 `ac4332c0`, zero-floor exit; M-176.A.1 rejection).
- ADDENDUM-174 `a7345a1` (codex zero-emission tick; the burst-zero anchor for the M-176.E carrier window).
- ADDENDUM-173 `4d2e65f` (codex 3-of-3 sub-floor establishing M-176.A baseline; pre-Add.174-zero author/surface union baseline).
- Synth #380 (M-176.A bounded-low-emission band [0, 1] refined; flagged the single-instance author-introduction-as-band-boundary-exit at P-380.E that this synth promotes to M-176.E).
- Synth #381 (M-176.B max-width-min-count joint extreme; M-176.C multi-stage collapse cascade — provides window-level context for the M-176.E sole-emitter signature at Add.176).
- Synth #379 (M-175.A vendor-family-narrow-surface-persistence; structurally inverse pole to M-176.E).
- Synth #378 (M-178.A multi-tier-silence-stratification; defines the carrier-pool exclusion set at Add.176).
- Synth #368 (M-168.A cross-repo over-recovery; causally upstream of M-176.E via the Add.168 codex sextuple).
- Anti-duplicate check: M-176.E is **not** a restatement of synth #380 M-176.A (cardinality regime; M-176.E is authorship regime), synth #379 M-175.A (fixed-surface-rotating-author; M-176.E is open-surface-novel-author), synth #378 M-178.A (silence-set; M-176.E is carrier-set), or synth #381 M-176.B / M-176.C (window-level / amplitude trajectory; M-176.E is per-tick author/surface novelty). The label M-176.E is new and does not collide with the M-176.A / M-176.A.1 / M-176.B / M-176.C / M-176.D labels in the Add.176 cluster.
