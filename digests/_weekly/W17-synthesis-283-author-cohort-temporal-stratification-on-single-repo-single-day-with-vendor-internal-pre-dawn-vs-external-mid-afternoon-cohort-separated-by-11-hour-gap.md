# W17 Synthesis #283 — Author-Cohort Temporal Stratification On Single Repo Single Day Reveals Vendor-Internal Pre-Dawn Cohort vs External-Contributor Mid-Afternoon Cohort Separated By 9-Hour Gap Distinct From Synth #281 Dispersed-Deferred-Batch And Synth #249 Same-Author Doublet

**Date:** 2026-04-28 (capture window through Add.125 close 16:07Z)
**Repos:** BerriAI/litellm (cited cohort: krrish-berri-2, mateo-berri, milan-berri, ryan-crabbe-berri = vendor-internal; michelligabriele, emerzon, lmcdonald-godaddy = external/partner)
**Refines:** synth #281 (dispersed multi-author deferred batch silence-break), synth #249 (same-author doublet promotes deferred batch), synth #246 (cross-repo synchronous merge pause regime), synth #271 (single-repo monopoly transient regime), synth #246 (cross-repo synchronous merge pause).
**Distinct from:** synth #281 (which is about *event* dispersion across n≥3 authors at one time point), synth #249 (about same-author doublet).

## Pattern

Synth #281 captured the case where a deferred-batch silence-break disperses across n≥3 distinct authors with disjoint surfaces in a tight time window. Synth #249 captured same-author doublet promoting a deferred batch to a 2-mode family. Both treat author identity as the **axis of dispersion at a single time point**.

Synth #283 identifies an orthogonal phenomenon: on a single repo on a single calendar day, the author population stratifies into **two temporally non-overlapping cohorts** with distinct merge-time distributions:

| Cohort | Author class | Cited W17 day-2026-04-28 example merges | Merge-time band | Author-class signature |
|--------|--------------|------------------------------------------|-----------------|------------------------|
| Cohort-A (vendor-internal pre-dawn) | Authors with `-berri-N` or vendor-affiliation suffix in handle | krrish-berri-2 #26661, mateo-berri #26655, ryan-crabbe-berri #26631 | 00:36–04:21Z | username contains vendor employer marker |
| Cohort-B (external mid-afternoon) | Authors without vendor-affiliation suffix | michelligabriele #26653, emerzon #26644, milan-berri #26645 (note: milan-berri straddles), lmcdonald-godaddy #26651 (partner cohort) | 00:39Z (lmcdonald-godaddy partner cohort straddles) and 15:25–15:38Z (independents) | username contains no vendor marker OR contains partner-vendor marker |

The defining stratification metric is the **gap between cohort-A's last merge and cohort-B's primary cluster start**. For 2026-04-28 litellm:
- Cohort-A last merge (vendor-internal): ryan-crabbe-berri #26631 04:21:28Z `62920a0cb29f11912edb5bacee470f1b1c044def` `fix(ui): move 'Store Prompts in Spend Logs' toggle to Admin Settings`
- Cohort-B primary cluster start: michelligabriele #26653 15:25:12Z `0dd64baa669aef52738f1d628982537707d29e95` `fix(caching): preserve prompt_tokens_details through embedding cache round-trip`
- **Inter-cohort gap = 11h03m44s, with zero merges in the intervening 11-hour window**

This 11-hour vendor-internal-then-external sequence is **NOT a random scatter** — it matches the Pacific-time work-cycle of vendor-internal employees (PST/PDT business-hours start) followed by the Europe/Asia-evening cycle of external contributors. It is also distinct from synth #246's cross-repo synchronous merge pause: synth #246's pause is **cross-repo** and **bidirectional** (no author class crosses it), while synth #283's gap is **single-repo** and **directionally vendor-internal-to-external** (vendor employees fire first, externals fire later).

## Why this is distinct from synth #281

Synth #281 is the **event-level** observation: when a deferred-batch silence breaks, the break event itself disperses across ≥3 authors with disjoint surfaces in a single tight window (e.g. litellm 13h47m silence broke at 15:25–15:38Z with 3 distinct authors). Synth #283 is the **day-level** observation: across the full day's merge stream, those 3 authors AND the unrelated pre-dawn vendor-internal authors form two distinct cohort populations separated by the 11-hour silence gap. Synth #281 is contained inside synth #283 as the right-hand cluster of the bimodal distribution; synth #283 adds the left-hand cluster (cohort-A) and the gap.

Concretely, the 2026-04-28 litellm timeline is:
- 00:36:47Z mateo-berri #26655 `0a2539d62437a812b1f0402b97e516367de2f0b0` (cohort-A)
- 00:39:26Z lmcdonald-godaddy #26651 `b3377b2d174ba5943a41290f0ada9a138b5bddf4` (partner cohort, straddles A/B)
- 01:46:21Z krrish-berri-2 #26661 `a953c2b64c41d46da986da3e2a75b9214ad413bf` (cohort-A)
- 04:21:28Z ryan-crabbe-berri #26631 `62920a0cb29f11912edb5bacee470f1b1c044def` (cohort-A)
- (11h03m44s ZERO MERGES — the inter-cohort gap)
- 15:25:12Z michelligabriele #26653 `0dd64baa669aef52738f1d628982537707d29e95` (cohort-B, synth #281 dispersed-batch trigger)
- 15:36:49Z emerzon #26644 `958c35a8016c38f87a0057ba8f68068b667766c0` (cohort-B)
- 15:38:18Z milan-berri #26645 `10aed9e9816c61600765766428c1c167327e2c64` (cohort-B; note milan-berri's username contains `-berri` suffix but the merge time is in cohort-B band — see anomaly below)

The synth #281 dispersed-batch event lives entirely inside cohort-B's 13m06s burst window (15:25–15:38Z). The synth #283 stratification claim is that this burst is the LATER half of a bimodal day-distribution where the EARLIER half (cohort-A, 00:36–04:21Z) has the same authorship-class structure but with vendor-internal employees instead of externals.

## Why this is distinct from synth #249

Synth #249 captures same-author doublet (an author who fires twice in a deferred-batch resumption). Synth #283 is **across distinct authors**; even within cohort-A, the 4 cohort-A merges are by 4 distinct authors (mateo-berri, krrish-berri-2, ryan-crabbe-berri = berri-internal; lmcdonald-godaddy = partner). No author repeats within cohort-A on 2026-04-28. The stratification is at the **cohort population** level, not the **author repetition** level.

## The milan-berri anomaly

milan-berri #26645 at 15:38:18Z is the most informative data point. The username `milan-berri` contains the `-berri` vendor suffix that defines cohort-A, but the merge time (15:38Z) is in cohort-B's 15:25–15:38 band. Two interpretations:

1. **Berri timezone diversity:** vendor-internal employees in different timezones (e.g. milan-berri in EU vs krrish/mateo/ryan in US) create a vendor-internal cohort that itself has a sub-bimodal distribution. milan-berri merging at 15:38Z is a vendor-internal employee in the Europe-evening band, not an external-contributor — synth #283 needs to be REFINED to recognize that vendor-internal cohort-A is **timezone-stratified within itself**, with US-PT cohort-A1 merging at 00:36–04:21Z and EU cohort-A2 merging at 15:38Z.
2. **Cohort-B contamination:** milan-berri is a vendor-employee but participates in the external-contributor merge wave by happenstance — the cohort label is fuzzy at the boundary. This interpretation weakens the synth #283 claim.

Falsifier P-283-A discriminates between interpretations: **if milan-berri's W17 prior merge #26460 `cleanup job for expired LiteLLM dashboard session keys` (cited in Add.124) also lies in the 15:00–18:00Z band, interpretation 1 is supported**; if it lies in the 00:00–06:00Z band, interpretation 2 is supported. (The Add.124 #26460 reference does not include a precise merge timestamp in the local digest cache; this is a follow-up data-collection task.)

## Mechanism candidates

1. **Timezone of employer:** vendor-internal employees overwhelmingly live in the employer's primary timezone (US-PT for berri-AI), creating a sharp PT-business-hours-start spike (00:00–06:00 UTC = ~17:00–23:00 PT prior day = late-evening-merge culture). External contributors live in their own timezones (EU, Asia, sometimes US-ET) with merge times spread across the rest of the day.

2. **Review-permission asymmetry:** vendor-internal employees can self-merge or merge each other's PRs without external-reviewer wait, while external contributors require vendor-internal review before merge — this introduces a structural delay that pushes external-contributor merge times into the post-vendor-business-hours window (15:00Z onward = ~08:00 PT = vendor reviewer arrives at desk and merges accumulated external PRs).

3. **Release-coordination preference:** vendor-internal employees coordinate around an end-of-PT-day "ship for tomorrow" cadence (UTC 00:00–06:00 = end of PT day), while external contributors don't coordinate around vendor's release cycle and merge whenever their PR is ready.

The 3 mechanisms make divergent predictions about cross-repo behavior:
- Mechanism 1 predicts the same temporal stratification appears on **other vendor-led repos** with different timezones (e.g. block/goose if Block is US-PT, opencode if SST is multi-TZ — opencode in W17 shows kitlangton merging at 13:22–15:10Z which is consistent with US-ET or EU work cycle, but kitlangton's vendor relationship is ambiguous).
- Mechanism 2 predicts external-contributor merges on litellm always cluster AFTER vendor-internal review-merge bursts (e.g. cohort-B always lags cohort-A by ~11h on a typical workday).
- Mechanism 3 predicts the inter-cohort gap collapses on holidays / release-blackout days (vendor-internal "ship for tomorrow" disappears, leveling cohort-A activity).

## Falsifiers and predictions

- **P-283-A:** milan-berri's prior W17 merge (#26460) timestamp falls in 15:00–18:00Z band (deadline: data-collection follow-up by Add.130). If TRUE → mechanism-1 EU-vendor-cohort-A2 confirmed. If FALSE → milan-berri is cohort-B-aligned and synth #283 needs cohort-membership refinement.
- **P-283-B:** next litellm vendor-internal-cohort merge fires in <06:00Z window of next observation day (2026-04-29), AND next external-contributor merge fires in >14:00Z window of same day (deadline 2026-04-29 close). If both TRUE → synth #283 promoted from candidate → regime with day-2 corroboration.
- **P-283-C:** apply synth #283 lens to opencode 2026-04-28 cohort. opencode authors cited W17 day-2026-04-28: kitlangton (4 merges 13:22–15:10Z, ambiguous vendor relationship), iamdavidhill (1 merge 13:24Z), Brendonovich (2 merges 07:51 and 11:37Z), rekram1-node (1 merge 04:44Z). If opencode shows any vendor-internal cohort firing pre-06Z and any external cohort firing post-14Z, synth #283 generalizes beyond litellm. Brendonovich at 07:51/11:37Z and rekram1-node at 04:44Z don't fit the litellm 11-hour-gap shape; opencode appears to have a more uniform daily distribution. **Likely falsifies generalization to opencode**, suggesting synth #283 is litellm-vendor-specific or PT-vendor-cohort-specific.
- **P-283-D:** litellm vendor-internal cohort SHRINKS to ≤2 merges in cohort-A band on weekend days, while external cohort-B remains intact. (Tests mechanism-3 release-coordination preference vs mechanism-1 work-hours.)
- **P-283-E:** the 11h03m44s inter-cohort gap is itself a recurring W17 statistic — next 5 single-repo single-day observations on litellm yield inter-cohort gaps in the 9–13h band (mechanism-1 and mechanism-2 both predict this). If gap variance is wide (>4h SD) → mechanism-3 (release-coordination) likely.

## Cross-reference to synth #271 single-repo monopoly transient regime

Synth #271 framed single-repo monopoly as transient (3-tick streaks then cohort rotation). Synth #283 explains WHY single-repo monopolies are transient on litellm specifically: cohort-A vendor-internal monopolizes pre-dawn, cohort-B externals monopolize mid-afternoon, and the inter-cohort gap GUARANTEES at least one monopoly handoff per day. This positions synth #283 as the **mechanistic substrate** for synth #271's monopoly-transience observation, at least on vendor-led repos.

## Status

Synth #283 is **single-repo single-day promoted** (litellm 2026-04-28 with 11h03m44s inter-cohort gap, 4 cohort-A authors and 3 cohort-B authors). P-283-B (deadline 2026-04-29 close) is the fastest decisive corroboration test — second-day reproduction of the bimodal distribution would harden the regime. P-283-A (milan-berri timestamp lookup) is a methodological clean-up to discriminate between cohort-membership interpretations. P-283-C (opencode generalization) is likely to FAIL based on visible W17 distribution, suggesting synth #283 is **litellm-specific or vendor-PT-cohort-specific**, not a universal pattern across the tracked-repo set.

## Cited PRs/SHAs (real)

- litellm #26661 `a953c2b64c41d46da986da3e2a75b9214ad413bf` 01:46:21Z krrish-berri-2 `Add gateway-managed conversation IDs for the Responses API` (cohort-A vendor-internal)
- litellm #26655 `0a2539d62437a812b1f0402b97e516367de2f0b0` 00:36:47Z mateo-berri `docs: update pull_request_template to add Linear ticket mentioning` (cohort-A vendor-internal earliest)
- litellm #26653 `0dd64baa669aef52738f1d628982537707d29e95` 15:25:12Z michelligabriele `fix(caching): preserve prompt_tokens_details through embedding cache round-trip` (cohort-B external, synth #281 trigger)
- litellm #26651 `b3377b2d174ba5943a41290f0ada9a138b5bddf4` 00:39:26Z lmcdonald-godaddy `fix(pricing): GPT-5.5 Pro Pricing` (partner cohort, straddles A/B)
- litellm #26645 `10aed9e9816c61600765766428c1c167327e2c64` 15:38:18Z milan-berri `feat(logging): add retry settings for generic API logger` (anomaly: vendor-suffix in cohort-B band)
- litellm #26644 `958c35a8016c38f87a0057ba8f68068b667766c0` 15:36:49Z emerzon `Add gpt-image-2 support` (cohort-B external)
- litellm #26631 `62920a0cb29f11912edb5bacee470f1b1c044def` 04:21:28Z ryan-crabbe-berri `fix(ui): move 'Store Prompts in Spend Logs' toggle to Admin Settings` (cohort-A vendor-internal latest)
- litellm #26622 `44dece10c8c266e74f74d37c713017d614afe470` 2026-04-27T19:13:14Z ryan-crabbe-berri `feat(proxy): add --timeout_worker_healthcheck flag for uvicorn worker triage` (prior-day cohort-A reference)
- opencode #24749 `9d1f17d83671fe2674ebbe31005e16bfaec12acc` 07:51:19Z Brendonovich `fix(ui): remove redundant flex overrides in tool components` (P-283-C cross-repo distribution data)
- opencode #24738 `aa07f38b0708f306a25d55db8d2123498958f578` 11:37:41Z Brendonovich `fix(app): preserve per-workspace icon override from localStorage` (P-283-C cross-repo distribution data)
- opencode #24730 `528fb1d4041518fb2174d182d0c833cbe915f045` 04:44:21Z rekram1-node `fix: sanitize tools for moonshot` (P-283-C cross-repo distribution — only opencode 2026-04-28 merge in cohort-A 00–06Z band)
- opencode #24716 `2a4f2bf527050a2ff89ccf53b65ab605caf883c4` 13:22:50Z kitlangton `fix(httpapi): align sync seq validation` (P-283-C cross-repo distribution — kitlangton ambiguous-vendor cohort)
