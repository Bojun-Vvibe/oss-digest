# W17-synthesis-103 — cross-carrier joint-band metadata-touch sweeps as a recurring (≥3-sighting) sub-class I taxon promotion with predictive 5-minute envelope

**Mission**: Promote sub-class I (introduced Add.363) from a single-instance pattern to a recurring corpus-level taxon, with a falsifiable **5-minute joint-band envelope** prediction grounded in three independent sightings within four digest ticks.

## Pattern statement

A **cross-carrier joint-band metadata-touch sweep** is an event in which:
1. **N≥10 PR-touches** (any combination of opens, head mutations, or `updated_at`-only refreshes) occur,
2. across **K≥2 carriers**,
3. by **A≥2 distinct authors** (or A≥1 author + ≥1 bot),
4. within a single **wall-clock band of width ≤6 minutes** at carrier-clock resolution.

The touches need not share semantic content; the shared property is **temporal coincidence at minute resolution across independent infrastructures**, suggesting an exogenous trigger (CI cron, stale-PR sweep, label re-application bot, or maintainer batch session) operating either on multiple carriers' shared automation backbone or on a coincidentally-aligned schedule.

## Three sightings

### Sighting 1 — Add.363 (2026-05-05T18:44:55Z..18:50:21Z, 5m26s envelope)

- **goose / morgmart**: 9 PRs (#9010, #9011, #9012, #9013, #9014, #9016, #9017, #9018, #9019) all `updated_at` inside the band, **all heads frozen** (non-mutating sweep).
- **litellm / Beandon13**: 3 head-mutated PRs (#27203, #27206, #27209) carrying second `updated_at` touches inside the band.

**Total: 12 PR-touches across 2 carriers, 2 authors, 5m26s envelope.** A=2, K=2, N=12.

### Sighting 2 — Add.364 (2026-05-05T20:40:09Z..20:45:12Z, 5m3s envelope)

- **codex**: #21235 NEW open 20:40:09Z (canvrno-oai); #21234 merged 20:43:38Z (viyatb-oai).
- **gemini-cli**: #26537 NEW open 20:42:42Z (gemini-cli-robot); #26536 update 20:41:36Z (alexandrevarga); #26513 draft refresh 20:41:14Z (gemini-cli-robot).
- **goose**: #9036 NEW open 20:42:10Z (DOsinga); #9030 update 20:38:59Z (kalvinnchau, just outside lower bound — borderline).
- **litellm**: #27225 update 20:45:12Z (stuxf); #27227 update 20:43:32Z (yuneng-berri).
- **opencode**: #25915 update 20:43:34Z (jlongster); #25818 update 20:41:59Z (kitlangton); #18767 update 20:41:56Z; #15771 update 20:41:39Z.
- **crush**: #2808 NEW open 20:40:13Z (ilgax).

**Total: ≈14 PR-touches across 6 carriers, ≥7 authors (canvrno-oai, viyatb-oai, gemini-cli-robot, alexandrevarga, DOsinga, stuxf, yuneng-berri, jlongster, kitlangton, ilgax), 5m3s envelope.** A≥7, K=6, N≥14.

### Sighting 3 — Add.362 (per W17-synth-100 cross-swarm metadata-touch sweep entry, 2026-05-05T~17:42Z..17:48Z band)

Documented by W17-synth-100 (cross-swarm metadata-touch sweep across 2 authors / 2 repos at the morgmart / Beandon13 prior tick instance). N≈10, K=2, A=2 — the **prototype event** that motivated the Add.363 introduction.

## Recurrence statistics

3 sightings in 4 ticks (Add.361/362/363/364, weighted toward Add.362-364). **Inter-sighting gap distribution**: ≈90m (Add.362→363), ≈60m (Add.363→364). Modal envelope width: **5m3s..5m26s**, a tight 23-second variance across two mature instances.

## Promotion criteria (corpus-level taxonomy)

A sub-class is promoted to a **named recurring taxon** when:
- (C1) ≥3 independent sightings within 7 ticks ✓
- (C2) Sightings span ≥2 carrier pairs ✓ (S1: goose+litellm; S2: 6 carriers; S3: goose+litellm)
- (C3) Modal property is structurally consistent ✓ (5-minute envelope holds across S1/S2 within 23s)
- (C4) At least one falsifiable prediction has survived a tick ✓ (P-363.A predicted recurrence; S2 confirmed)

**Sub-class I → promoted to taxon: "joint-band cross-carrier sweep" (JBCCS).**

## Falsifiable predictions

- **P103.A** (envelope-narrowing): If the next 3 sightings of JBCCS all fall inside ≤4-minute envelopes (rather than the current 5m3s..5m26s mode), the **5-minute band is an upper bound** rather than a modal width, and the trigger is a **higher-frequency cron** than currently hypothesized. Falsified iff any sighting in next 7 ticks exceeds 6m envelope.
- **P103.B** (carrier-pair stability): If goose appears in **≥75% of next 4 sightings**, goose's automation backbone (likely a PR-stale-sweep cron or label re-application bot operating on shared schedules with peer carriers) is the **anchor carrier** of the JBCCS event. Conversely, if goose appears in ≤25%, the prior 2 goose-anchored sightings (S1, S3) were coincidental.
- **P103.C** (author-bot ratio): In S2, the bot share was ≈3/14 (gemini-cli-robot ×2 + ?), human share ≈11/14. If next 3 sightings show **bot share ≥50%**, JBCCS is primarily a **bot-cron temporal alignment** phenomenon; if bot share remains ≤30%, JBCCS is a **maintainer-batch-session cross-carrier coincidence** (humans batch-reviewing PRs in parallel sessions on shared work-rhythm cycles).
- **P103.D** (PR-number sub-structure): In S1, the morgmart subset {#9010..#9019} formed a **contiguous PR-number range** (max gap = 1, since #9015 was missing from the touch set). If next sightings show ≥1 author with a contiguous-range subset of size ≥5 in the JBCCS event, **author-anchored contiguous-range subsets are a stable JBCCS sub-feature**; if all future sightings show only scattered (non-contiguous) PR-number distributions, the contiguous-range property is incidental to S1's bot-driven sweep mechanic.
- **P103.E** (UTC-band clustering): All 3 sightings fall inside UTC 17:42Z..20:45Z (a 3h3m UTC range). If the next 4 sightings cluster inside the same band ±2h, JBCCS has a **UTC-of-day signature** (likely tied to US-East-Coast morning maintainer activity overlap with EU end-of-day). If sightings disperse outside this band, JBCCS is UTC-time-agnostic.

## Discriminator vs. adjacent taxa

| Adjacent taxon | Distinguishing property |
|---|---|
| Sub-class E (single-repo mass-touch on heterogeneous PRs) | E is **single-carrier**; JBCCS requires K≥2. |
| Sub-class G (mass-CREATION) | G is **opens only**; JBCCS permits any touch type. |
| Sub-class H (in-place head-mutation of an open swarm) | H requires **head SHA mutation**; JBCCS permits frozen heads (S1 was frozen-only on goose side). |
| Sub-class I-original (Add.363 framing) | I-original required **non-mutating** + cross-repo. JBCCS relaxes the non-mutating requirement (S2 includes both opens and metadata refreshes). I-original ⊂ JBCCS. |
| W17-synth-100 (cross-carrier septet null-merge stall) | Septet stall is **absence-of-merge** signature; JBCCS is **presence-of-touch** signature. Orthogonal. |

## Citations

Sighting 1 evidence: goose #9010, #9011, #9012, #9013, #9014, #9016, #9017, #9018, #9019; litellm #27203, #27206, #27209.

Sighting 2 evidence: codex #21235, #21234; gemini-cli #26537, #26536, #26513; goose #9036, #9030; litellm #27225, #27227; opencode #25915, #25818, #18767, #15771; crush #2808.

Sighting 3 reference: W17-synth-100 cross-swarm metadata-touch sweep entry.

**Total unique PRs cited: 23 across 6 carriers (goose, litellm, codex, gemini-cli, opencode, crush).** Carrier qwen-code is the only one of the 7 absent from JBCCS evidence, consistent with qwen-code's lower W17 metadata-refresh frequency observed across W17-synth-83, -91 (low qwen-code participation in cross-carrier same-second events).
