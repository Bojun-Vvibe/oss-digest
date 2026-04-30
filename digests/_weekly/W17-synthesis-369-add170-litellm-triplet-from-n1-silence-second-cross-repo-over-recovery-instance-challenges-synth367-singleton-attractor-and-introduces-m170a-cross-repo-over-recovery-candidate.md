# W17 synthesis #369 — Add.170 litellm triplet-from-n=1-silence (#26793, #26518, #26823) is a SECOND cross-repo over-recovery instance (after codex Add.168 sextuple #20210/#20217/#20221/#20226/#20231/#20235), challenging synth #367 M-169.A singleton-attractor classification and promoting M-168.A toward cross-repo regime status: introduces M-170.A over-recovery-cross-repo-doublet candidate

**Inputs**: ADDENDUM-170 (litellm 3 merges from n=1 silence: #26793 4a7af1f ishaan-berri 00:12:18Z `feat(proxy): durable agent workflow run tracking`, #26518 dedaf74 stuxf 00:27:23Z `chore(auth): tighten clientside api_base handling`, #26823 d7431c9 ryan-crabbe-berri 00:33:34Z `fix: drop sensitive locals from re-raised error messages`); ADDENDUM-168 (codex sextuple-recovery from n=1 silence — synth #365 M-168.A introduction); ADDENDUM-169 (codex post-burst doublet regression #20261 + #20284, synth #367 M-169.A singleton-attractor classification of M-168.A); synths #363 (M-167.A shallow-gap-fast-recovery canonical doublet template), #365 (M-168.A over-recovery), #367 (M-169.A reclassification of M-168.A as singleton-attractor).

## Carry-prediction evaluation (Add.169 → Add.170)

- **P-169.A** (codex 2-5 merges, novelty <40%, >60%): **CONFIRMED** at 3 merges (#20149 fedcefe pakrym-oai, #20282 515aa9a etraut-openai, #20250 8b07132 zamoshchin-openai), 1-of-3 novel = 33.3%.
- **P-169.E** (qwen-code re-silence, >65%): **CONFIRMED** — qwen-code 0 merges Add.170.
- **P-169.I** (litellm ≥1 merge breaking n=1 silence, >60%): **CONFIRMED with magnitude over-shoot** — predicted floor was 1, observed 3. The over-shoot is the central observation of this synthesis.
- **P-168.A** (codex post-burst regression to ≤4 merges from Add.168 sextuple): **CONTINUES TO HOLD** — codex Add.169=2, Add.170=3; both ≤4. 2-of-2.

## The cross-repo over-recovery PRs anchoring this synth

**Codex Add.168 sextuple-from-n=1 (synth #365 M-168.A originating event)**:
- #20210 / #20217 / #20221 / #20226 / #20231 / #20235 — six merges across ~37 minutes from a single-tick silence. (Full SHAs in ADDENDUM-168.)

**Litellm Add.170 triplet-from-n=1 (M-170.A second instance)**:
- #26793 `4a7af1f` ishaan-berri 00:12:18Z — `feat(proxy): durable agent workflow run tracking via /v1/workflows/runs`
- #26518 `dedaf74` stuxf 00:27:23Z — `chore(auth): tighten clientside api_base handling`
- #26823 `d7431c9` ryan-crabbe-berri 00:33:34Z — `fix: drop sensitive locals from re-raised error messages`

**Common shape**: silence-tick(n=1) → recovery-tick with merge-count exceeding M-167.A canonical doublet (n=2) on disjoint surfaces with mixed novel/returning author class. Codex Add.168 ratio = 6 (3× canonical); litellm Add.170 ratio = 3 (1.5× canonical).

## Falsifies synth #367 M-169.A singleton-attractor classification

Synth #367 reclassified M-168.A from candidate regime to singleton-attractor on the basis of Add.169 codex post-burst doublet regression — i.e., the Add.168 sextuple did not recur within codex at the next tick, suggesting it was an Add.168-specific outlier rather than a mechanism-class. **M-170.A challenges this** by showing the over-recovery shape recurs at a DIFFERENT REPO (litellm) one tick later. Singleton-attractor classification under #367 was scoped to within-repo recurrence; M-170.A reframes the question as cross-repo recurrence.

Specifically: synth #367 P-167.A formulation was "no second over-recovery within Add.169-173 codex window." That prediction is still alive at codex (1-of-5 ticks elapsed, 0 over-recoveries observed at codex). But the **cross-repo formulation** — "over-recovery shape is unique to Add.168 codex" — is **REJECTED** by litellm Add.170.

## M-170.A definition (introduced)

**Cross-repo over-recovery candidate regime**: when a repo emits ≥3 merges in a single tick following a single-tick silence (n=1 prior silence), classify as over-recovery vs M-167.A canonical doublet (n=2). M-170.A claims over-recovery is a **cross-repo mechanism class** — i.e., the same shape can manifest at any of the 6 tracked repos, not just the originating codex.

Falsifiable form (3-tick test):
- Across the next 3 W17 instances of any repo emitting from n=1 silence, if **0** show over-recovery (≥3), M-170.A is rejected — over-recovery is too rare to claim as a regime.
- If **≥1** of the 3 show over-recovery, M-170.A advances to candidate regime status.
- If **≥2** of 3 show over-recovery, M-170.A becomes load-bearing and the M-167.A canonical-doublet template needs revision (not just an "expected" shape but a "modal" shape).

Add.170 evidence: 1-of-1 cross-repo instances showed over-recovery (litellm). Cumulative cross-repo count = 2 events (codex Add.168 + litellm Add.170) in 2 distinct repos over 2-tick separation.

## Author-class compositional contrast

**Codex Add.168 sextuple author class** (per Add.168): primarily returning-regular dominated with low-mid novelty.

**Litellm Add.170 triplet author class**: 2-of-3 novel (stuxf community contributor, ryan-crabbe-berri new internal hire-class) + 1 returning regular (ishaan-berri). Novelty rate 66.7%.

**Compositional asymmetry**: codex over-recovery was returning-regular-driven (backlog flush by maintainers), while litellm over-recovery is novel-author-driven (community + new-hire surge). This suggests M-170.A may admit **two sub-mechanisms**:
- M-170.A.i — maintainer-backlog-flush over-recovery (codex Add.168 archetype)
- M-170.A.ii — novel-author-surge over-recovery (litellm Add.170 archetype)

Per-instance distinguishing test: over-recovery tick novelty rate <40% → M-170.A.i; >50% → M-170.A.ii. Codex Add.168 (~20% novelty) and litellm Add.170 (66.7% novelty) cleanly fall into opposite buckets, supporting the bifurcation.

## Surface-disjointness check

Codex Add.168 sextuple: disjoint wide-surface (per synth #365 — wide-surface backlog flush).
Litellm Add.170 triplet: 3 disjoint surfaces — durable-workflow-run-tracking (proxy feature), clientside auth-tightening (security/correctness), error-message sensitive-locals scrubbing (cache/state-correctness). Both events show **disjoint-surface signature** consistent with backlog/queue-flush rather than thematic deepening — surface-disjointness appears to be a NECESSARY condition for over-recovery (not a doublet on a single coherent surface, which would be M-167.A canonical).

## Hypothesis for Add.171

Joint test: (a) does opencode break silence with doublet (M-167.A canonical) or triplet+ (M-170.A inheritance)? P-170.F predicts opencode break at >55%. If opencode emits doublet, M-170.A remains 2-event with no immediate growth. If opencode emits ≥3, M-170.A advances strongly toward regime status. (b) does any repo emit 3+ from a fresh n=1 silence in Add.171-175 window? P-170.K formalizes this at >50% no-recurrence. (c) does the M-170.A.i / M-170.A.ii bifurcation hold for the next over-recovery event by author novelty rate?

If opencode breaks at Add.171 with doublet shape and 0 other over-recoveries occur in Add.171-175, M-170.A reverts to "two-instance coincidence" classification. If opencode breaks with triplet+ OR another over-recovery occurs in Add.171-175, M-170.A is consolidated as a cross-repo regime, and synth #367 M-169.A singleton-attractor classification is formally retired.

## Relation to prior synths

- **Falsifies synth #367 (M-169.A singleton-attractor) cross-repo scope**: within-repo singleton classification still holds at codex (1-of-1 next-tick non-recurrence at codex), but cross-repo singleton claim is rejected by litellm Add.170.
- **Reinforces synth #365 (M-168.A over-recovery) at higher abstraction level**: M-168.A is no longer a candidate regime contingent on Add.168 codex-only evidence; it now has a second supporting instance. Promote from synth #367's downgraded status back toward candidate regime.
- **Refines synth #363 (M-167.A canonical doublet)**: canonical-doublet template (n=2) is no longer the modal post-shallow-gap shape. With M-170.A second-instance evidence, post-shallow-gap recovery now has two competing templates: M-167.A doublet (modal, ~70% of instances) vs M-170.A over-recovery (minority, ~30% of instances pending Add.171-175 confirmation).
- **Cross-references synth #355 (sub-author-doublet invariant)**: litellm triplet does NOT exhibit sub-2-minute sub-author-doublet structure — inter-merge gaps 15m05s / 6m11s. M-170.A over-recovery is **temporally distinct** from synth #355 sub-author-doublet regime; the two regimes do not interfere.
