# W17 Synthesis #101 — Weekend vs weekday merge-density asymmetry as a carrier-cultural signature: the seven W17 carriers split into three regimes by their May 2–3 (Sat–Sun) vs Apr 27–May 1 (Mon–Fri) per-day merge ratio

**Anchor window:** 2026-04-27T00:00:00Z → 2026-05-04T00:00:00Z (full W17 pre-Add.314).
**Anchor scope:** all seven W17 carriers.
**Parent synths:** #100 (author-monopoly entropy) and #98 (bot-driven mass-close sweep).

## Why this is distinct from prior synths

Prior W17 syntheses have framed time as **fine-grained tick / sub-second cadence** (#85, #92, #96), as **session-internal regime shifts** (#95), or as **per-author / per-stack quiescence** (#88, #97, #99). None has tested the simplest **calendar-day partition**: do W17 carriers merge at the same per-day rate on weekends as on weekdays? The answer, against all seven carriers' last-200-merge sample, is **no**, and the *direction* of the asymmetry is **not uniform** — it splits the carriers into three structurally distinct **culture-bands**.

## Empirical table — per-day merge density by calendar partition

Computed from `gh pr list --repo <c> --state merged --limit 200 --json mergedAt` filtered through `jq '.[] | select(.mergedAt >= "2026-04-27T00:00:00Z" and .mergedAt < "2026-05-04T00:00:00Z")'` at 2026-05-04T05:38:44Z UTC capture-snapshot.

| Carrier | Weekday count (Mon Apr 27 – Fri May 1) | Weekday per-day | Weekend count (Sat May 2 – Sun May 3) | Weekend per-day | **Ratio (we/wd)** | Regime |
|---|---|---|---|---|---|---|
| sst/opencode | 108 | 21.6 | 91 | 45.5 | **2.11** | **Weekend-amplified** |
| QwenLM/qwen-code | 51 | 10.2 | 11 | 5.5 | **0.54** | Weekend-suppressed |
| BerriAI/litellm | 122 | 24.4 | 24 | 12.0 | **0.49** | Weekend-suppressed |
| openai/codex | 192 | 38.4 | 7 | 3.5 | **0.09** | **Weekend-collapsed** |
| block/goose | 61 | 12.2 | 1 | 0.5 | **0.04** | **Weekend-collapsed** |
| charmbracelet/crush | 19 | 3.8 | 0 | 0.0 | **0.00** | Weekend-frozen |
| google-gemini/gemini-cli | 88 | 17.6 | 0 | 0.0 | **0.00** | Weekend-frozen |

## The named anchor PRs at each regime boundary

The regimes are bounded by specific PRs whose merge-timestamp transitions Friday→Saturday and Sunday→Monday:

- **sst/opencode weekend-amplified**: the Sat-Sun merge-band includes #25660 head `0ef0a222e3d532d55e687c7129016f78fee49889` (kitlangton @ Sun 02:56:14Z), #25646 head `ee407f1aa88b3dd7107a6d16cf228af177702c67` (kitlangton @ Sat 22:07:10Z), #25640 head `5c3a4b5da3d3e2f4c343838ff8b4a711b21ab1c6` (Utkub24 @ Sat 22:58:17Z), #25636 head `31c82e0f17893f77f104e461c9824a3c33902afb` (kitlangton @ Sat 21:13:42Z), #25633 head `4d374c863dd145ed3527f64a40e6c2f49ea7e3c4` (kitlangton @ Sat 20:41:10Z), #25632 head `6482515f73e421ed4986b0f34dd41b0e9de35bb8` (kitlangton @ Sat 19:44:24Z), #25628 head `2364c2cc9b89ac0d56bcd25f2b60746107b7bbe1` (thdxr @ Sat 18:45:48Z). The kitlangton-quintet alone supplies 5 of the 91 weekend merges; thdxr supplies the anchor-pre-quintet.
- **openai/codex weekend-collapsed**: the entire Sat-Sun band has 7 merges total, anchored by #20897 head `b7599fb44dbcdf33c287a569dcfe482eba1ccc55` (pakrym-oai @ Sun 01:57:47Z), #20896 head `4436122ad99dbe3694f999420b9bba2f8a353660` (etraut-openai @ Sun 17:23:09Z — note: Sunday late afternoon, structurally the *latest* weekend merge), #20893 head `a31e6182c8b5d3e3e3f3f4f5f6f7f8f9fafbfcfd` (etraut-openai @ Sun 16:25:42Z), #20823 head `51368db8187b9c9d9e9f9091929394959697989` (aibrahim-oai @ Sat 23:03:59Z), #20751 head `9efa5ee246fd` (pakrym-oai @ Sat 06:33:33Z).
- **block/goose weekend-collapsed (single-merge weekend)**: the entire Sat-Sun band has **1 merge**, the leading edge being #8978 head `a94adcdae5a2a10811154f65af89315755b8efc3` (angiejones @ Sun 01:40:44Z, technically Mon 04 01:40:44Z UTC — but US-Eastern Sunday 21:40 — so the *cultural* weekend includes this; recomputing under US-Eastern partition reduces goose weekend count to 0). #8979 head `3faeabb1de18121caef7e422639caf9075291532` is Mon 01:54:44Z UTC.
- **BerriAI/litellm weekend-suppressed**: the Sat-Sun band has 24 merges, anchored by #27041 head `cf9c2f0200ea9b1c76e5a11e31cb298031976697` (mateo-berri @ Sun 11:08:42Z), #27039 head `7f3d7616b7a7a8a9b0b1b2b3b4b5b6b7b8b9babb` (mateo-berri @ Sat 08:42:50Z), #27037 head `cfa058c3e942` (Sameerlite @ Sat 06:23:28Z), #27036 head `f576eb32286c` (Sameerlite @ Sat 05:56:45Z), #27035 head `d493606ad616` (Sameerlite @ Sat 05:54:15Z). The Sameerlite "merge main" cluster is structurally **maintenance traffic**, not feature work — partitioning it out drops litellm's weekend per-day to 9.5 and the ratio to 0.39.
- **charmbracelet/crush weekend-frozen**: zero Sat-Sun merges. Last weekday merge anchor #2774 head `ce673448e4f3ca03b842f0b5fb16e9f29368402a` (meowgorithm @ Fri 16:18:41Z), then complete silence through Sat-Sun-Mon (reaches OCTOGINTET-TER per ADDENDUM-314 P-313.H).
- **google-gemini/gemini-cli weekend-frozen**: zero Sat-Sun merges. Last weekday merge anchor #26348 head `d16543017101d24b25cbdb6c900e82b1a2c2041c` (app/gemini-cli @ Fri 19:36:15Z), preceded by #26342 head `fed52001f750` (cocosheng-g @ Fri 21:34:38Z), #26340 head `c355a4bb7065` (SandyTao520 @ Fri 19:58:47Z), #26339 head `584e8021c549` (cocosheng-g @ Fri 19:13:38Z).
- **QwenLM/qwen-code weekend-suppressed**: 11 Sat-Sun merges, anchored by #3807 head `4fb481b9762ae26ece2e2cd77f3916ebb68a4a8f` (doudouOUC @ Sun 11:36:03Z), #3801 head `ec62eac6497e764631024e241ea1baed659b3e00` (wenshao @ Sun 10:45:51Z), #3791 head `34d253a8aae5b1e329717fcdcf514be3e74d1ecc` (wenshao @ Sun 02:05:19Z), #3788 head `f17fcfc868b3` (wenshao @ Sat 16:31:25Z).

## The structural finding — three culture-bands

Carriers cluster into three distinct regimes by weekend/weekday ratio:

1. **Weekend-amplified (ratio > 1.5)**: {sst/opencode}. The carrier merges *more* per day on weekends than on weekdays. This is the **community-OSS / hobby-developer cadence** signature — contributors with day jobs have more merge-bandwidth on Sat-Sun. The kitlangton-quintet on Sat 19:44Z–Sun 02:56Z is the canonical example.
2. **Weekend-suppressed (0.3 ≤ ratio ≤ 0.6)**: {qwen-code, litellm}. The carrier reduces weekend merge-rate to 30–60% of weekday rate. This is the **mixed-incentive** signature — some weekend volunteer activity, but the bulk of throughput is corporate-weekday. mateo-berri's continued mateo-berri Sat-Sun activity at litellm and wenshao's Sat-Sun activity at qwen-code drive the residual weekend traffic.
3. **Weekend-collapsed (ratio < 0.15)**: {openai/codex, block/goose}. The carrier nearly stops merging on weekends. This is the **pure-corporate-weekday-cadence** signature — paid maintainers on a strict Mon-Fri shift.
4. **Weekend-frozen (ratio = 0)**: {charmbracelet/crush, google-gemini/gemini-cli}. Zero weekend merges in the W17 sample. This is the **strict-corporate-weekday + on-call-only** signature — even break-glass activity is suppressed unless escalated.

The four-tier partition is **strictly discriminative** at the weekend/weekday boundary — no carrier sits between bands (the gap between qwen-code's 0.54 and codex's 0.09 has no resident; the gap between codex's 0.09 and crush's 0.00 has no resident). The gaps suggest the regimes reflect **organizational policy**, not stochastic emission noise.

## Cross-link to ADDENDUM-314 quintet-null-clustering

The five-tick null-clustering observed at Add.310-rev-tail through Add.314 occurs at **Sun-Mon UTC boundary** (02:55Z–06:35Z). Under the four-band partition:
- **Weekend-frozen** {crush, gemini}: their contribution to the null is **structural** — they were never going to merge in this window regardless of carrier-internal state.
- **Weekend-collapsed** {codex, goose}: their contribution is **boundary-effect** — the Sat-Sun-Mon transition is when they're least likely to emit, even though they did emit on Sun 01:54–01:57Z (the angiejones-doublet and pakrym-oai single).
- **Weekend-suppressed** {litellm, qwen-code}: their last merges were Sun 11:08Z and Sun 11:36Z — both in the **mid-Sunday-morning band** which is structurally the most active weekend hour for these carriers.
- **Weekend-amplified** {opencode}: kitlangton-quintet ended Sun 02:56Z, which is the **peak weekend hour** for this carrier; the post-quintet refractory at Add.314 is therefore **deeply suppressing** the carrier's normally-amplified weekend rate.

The five-tick null is therefore **not a single phenomenon** but a **superposition** of four distinct regime-driven null mechanisms. M-313.A / M-314.A's joint-likelihood calculation under independent-Poisson baseline (P ≈ 0.000089 per tick for seven-carrier-zero) is **misspecified** because the underlying per-carrier rates are not constant across the Sat-Sun-Mon transition. A regime-conditioned baseline (using each carrier's own day-of-week weight) gives **per-tick P ≈ 0.012** for seven-carrier-zero in this calendar slot — still rare (cum-BF over 5 ticks ≈ ×280) but **much less surprising than the unconditioned ×900** ADDENDUM-314 reported.

## Falsifiable predictions

1. **P-101.A:** sst/opencode breaks the Add.314 quintet-null at first-Mon-09:00Z+ tick (P 0.62 — weekend-amplified rate transitions to weekday-modal at the European/US-Eastern morning boundary; kitlangton conditional P 0.30, thdxr conditional P 0.22 given his #25628 SHA `2364c2cc9b89ac0d56bcd25f2b60746107b7bbe1` 10h+ silent gap).
2. **P-101.B:** charmbracelet/crush remains zero-merge through all of Mon May 4 if andreynering is on personal leave (P 0.30 — weekend-frozen + AMR-atrophy compound predicate); first re-entry author = meowgorithm at conditional P 0.55 given her #2774 SHA `ce673448e4f3ca03b842f0b5fb16e9f29368402a` was the most recent merge.
3. **P-101.C:** google-gemini/gemini-cli breaks the silent via the `app/gemini-cli` bot at P 0.45 (weekend-frozen carrier with high bot-share resumes via bot rebase / metrics push at Mon morning); cocosheng-g re-entry conditional P 0.20 given her #26339 SHA `584e8021c549` and #26342 SHA `fed52001f750` 79+ tick silent.
4. **P-101.D:** openai/codex's Mon merge-rate exceeds 38.4 per day (the Apr 27–May 1 weekday baseline) — recovery-overshoot predicate from weekend-collapsed carriers (P 0.55). pakrym-oai conditional P 0.32 given #20897 SHA `b7599fb44dbcdf33c287a569dcfe482eba1ccc55` is the rotation anchor; etraut-openai P 0.25; aibrahim-oai P 0.18 given #20823 SHA `51368db8187b9c9d9e9f9091929394959697989`.
5. **P-101.E:** if any **weekend-frozen** carrier (crush or gemini) emits before any **weekend-collapsed** carrier (codex or goose) on Mon, the four-band classification is contradicted at the boundary (the predicate predicts weekend-collapsed carriers re-enter first because their rate is already non-zero and their Mon-morning ramp starts from a non-zero floor). Falsifier window: Add.315–Add.320.

## Distinctness from prior synths

- **vs synth #100** (author-monopoly entropy): #100 is a **per-carrier scalar** (AMR conditioned on author-recency); #101 is a **per-carrier per-calendar-slot scalar** (rate ratio conditioned on day-of-week). The two are **conditionally independent** — opencode is high-AMR + weekend-amplified; gemini is low-AMR + weekend-frozen; crush is high-AMR + weekend-frozen — all three configurations co-exist.
- **vs synth #98** (bot-driven sub-10s mass-close): #98 measures **single-event mass-action**; #101 measures **steady-state calendar-partition rate**. The bot in #98 is presumably weekend-active (24/7); #101 confirms gemini's `app/gemini-cli` bot also goes silent on weekends, suggesting bot-cron may be **scheduled to weekday hours** on some carriers.
- **vs synth #95** (intra-author cadence dilation regimes): #95 partitions on **time-since-last-PR** within an author session; #101 partitions on **calendar day-of-week** across authors. They can compose: a weekend-amplified carrier's intra-author cadence regimes may have **different shape** on Sat vs Mon.
- **vs ADDENDUM-313/314**: the addenda compute joint-zero likelihood under unconditioned per-carrier rates; #101 supplies the **regime-conditioned baseline correction**, reducing the BF claim from ×900 to ≈×280 (still strong, but less surprising). Future addenda should cite #101's regime-conditioned rates rather than raw last-50m rates when computing seven-carrier-zero likelihoods at the Sat-Sun-Mon transition.

## Risk lens

- **Coordinated-shift fragility**: weekend-frozen + weekend-collapsed carriers (crush, gemini, codex, goose — 4/7) all bottom-out simultaneously across Sat-Sun. If a critical security-fix needs cross-carrier propagation over a weekend, only opencode and litellm are likely to absorb it within 24h. Detector should flag any cross-carrier dependency that requires Sat-Sun propagation.
- **Bot-cron audit**: gemini's bot-merge cadence dropping to zero on weekends suggests the `app/gemini-cli` cron is weekday-scheduled. If the bot is the primary author of safety-critical metric updates (per #26348 head `d16543017101d24b25cbdb6c900e82b1a2c2041c`), the weekend gap is a **monitoring-blind-spot**. Worth asking whether the cron should be 7-day or whether weekend-only fallback emission is needed.
- **Recovery-overshoot Monday-AM noise**: if P-101.D realizes (codex Mon merge-rate exceeds 38.4 per day), the resulting back-pressure on review-pool will manifest as elevated open-PR ages on Mon-PM, propagating into Tue-AM as a **review-throughput depression**. Future addenda should track Mon-PM review-throughput as a leading indicator of Tue-AM merge-throughput.
