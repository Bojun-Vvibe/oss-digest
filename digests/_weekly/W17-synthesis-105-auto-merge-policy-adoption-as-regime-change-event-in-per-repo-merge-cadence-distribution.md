# W17 Synthesis #105 — Auto-Merge Policy Adoption as a Regime-Change Event in Per-Repo Merge-Cadence Distribution

**Status:** new anchor. Distinct from synth #98 (bot-driven mass-close sweep) and synth #100 (cross-repo merge-rate co-suppression). Captures the discrete, irreversible *regime change* a repo undergoes when it adopts auto-merge for a bot-author class — and the implication for synth #216's per-repo band model.

**Window of evidence:** 2026-04-27 10:31:41Z (block/goose#8856 merge enabling dependabot auto-merge). The change is policy-as-code (a workflow file edit), not a one-off operational action; its effect is forward-applying to all subsequent dependabot PRs.

## The triggering event

| field | value |
|---|---|
| repo | block/goose |
| PR | #8856 |
| merge SHA (short) | `d8e4b55d16` |
| author | lifeizhou-ap |
| merged at | 2026-04-27T10:31:41Z |
| diff | +37/-0 |
| title | "chore: enabled auto merge for dependabot prs if they passes the ci checks" |

Pre-policy reference points (last manual dependabot merges in the goose corpus before the policy):
- #8855 `978ff24b10` (`app/dependabot`, "bump the cargo-minor-and-patch group across 1 directory with 23 updates", +198/-151, merged 07:57:49Z) — **2h33m52s before policy enable**, manual merge.
- #8829 `ba88d336f1` (`app/dependabot`, "bump winreg from 0.55.0 to 0.56.0", +5/-5, merged 03:01:59Z) — **7h29m42s before policy enable**, manual merge.

These two PRs bracket the **last-manual-dependabot-merge interval** in goose's W17 history. Inter-arrival between them: **4h55m50s**. The policy change reduces the per-merge human-decision time for this PR class to **0**.

## Why this is a regime change, not a parameter shift

A parameter shift would be: "dependabot PRs in goose merge faster on average." A regime change is **a structural break in the per-author-class merge-time distribution**:

1. **Pre-policy regime (≤2026-04-27T10:31:41Z):** dependabot PRs in goose follow the **same** merge-time distribution as human-author PRs, modulo author availability. Time-from-CI-green-to-merge has a positive minimum (some human must trigger the merge button) and a long right tail (humans sleep / are away).
2. **Post-policy regime (>2026-04-27T10:31:41Z):** dependabot PRs in goose follow a **different distribution** — time-from-CI-green-to-merge approaches **the GitHub auto-merge poll interval** (typically <1 minute). The distribution becomes **bounded above** by the CI duration + auto-merge poll, and **bounded below** by the same.

The two regimes are **not on the same support**. There is no continuous parameter that interpolates "human merger" to "auto-merger." The change is therefore a regime change (in the time-series-econometrics sense), and synth #216's per-repo band model — which fits a single distribution per repo — must be **stratified** to remain valid for goose.

## What synth #216 must do to absorb this

Synth #216 currently assigns each repo a single position in the 4-tier band (Active / Cooling / 4–24h-gap / Multi-day-dormant). Post-policy, goose has **two co-existing populations**:
- **A (auto-merged dependabot):** distribution support roughly `[CI duration, CI duration + 5min]`, with arrival rate driven by dependabot scan cadence (typically multiple per day during open-window periods).
- **B (human-author):** distribution unchanged from pre-policy, support `[minutes, days]` depending on reviewer availability.

The aggregate goose merge-rate distribution becomes **bimodal**. A single band assignment for goose will:
- Over-represent goose's "Active" status during dependabot bursts (population A floods the rate, masking population B silence).
- Under-represent goose's "Cooling/Dormant" status during human-author silence between dependabot scans.

**Required synth #216 update:** introduce a **per-author-class band assignment** for repos that have adopted auto-merge for a bot class. For goose specifically: report `goose[bot]` and `goose[human]` as two separate band positions in future addenda's per-repo-trailing-silence table.

## Falsifiable claim for synth #105

**A repo's adoption of auto-merge for a bot-author class is a one-shot, forward-applying regime change in that repo's merge-cadence distribution. Pre-vs-post-policy merge-time distributions for the affected author class are non-overlapping in support. A single per-repo band assignment loses fidelity post-policy and must be stratified by author class.**

**Concretely testable in the next 48h:**

1. **Cadence test:** within 24h of #8856 merge (i.e., before 2026-04-28T10:31:41Z), block/goose will produce ≥1 dependabot PR merged with **lifespan-from-CI-green ≤5min**. (Pre-policy, #8855 sat with CI green for an indeterminate but >>5min interval before lifeizhou-ap or another human triggered the merge.)
2. **Merger-identity test:** the next dependabot PR merge in goose will show `mergedBy != app/dependabot` initially (auto-merge is not yet enabled on the bot's persona; the merge actor is the GitHub auto-merge bot, often surfaced as the PR author in the merge actor field, or as `app/github-actions`). Track which actor surfaces.
3. **Volume test:** the count of merged dependabot PRs in goose in the 7 days after #8856 will be **≥2× higher** than in any prior 7-day window in W17 (subject to dependabot scan cadence being stable).
4. **Failure mode test:** if any post-policy dependabot PR in goose **fails to auto-merge** (CI green, but the merge does not fire), synth #105's "auto-merge fires reliably on CI green" assumption is challenged. This could happen if the workflow predicate (e.g., labels, branch protection) is misspecified in #8856's diff.

## Cross-corpus probe

Two of the six tracked repos already have observable bot-mediated patterns; the others do not (yet) have visible auto-merge policy:

- **block/goose** — adopted at #8856 (this anchor). Forward-tracking starts now.
- **BerriAI/litellm** — has the `litellm_internal_staging` → `main` pump (synth target from Add.89): `yuneng-jiang #26545` (3d2b8fed32) merged at 2026-04-26T03:07:01Z is the latest pump-fire. This is a **scheduled human-driven** policy, not auto-merge — it occupies a similar structural role (regular-cadence non-feature merges) but does not have the CI-green-triggered immediacy of auto-merge. Worth tracking as a related-but-distinct phenomenon: **scheduled-pump regime** vs **auto-merge regime**.
- **openai/codex, QwenLM/qwen-code, google-gemini/gemini-cli, anomalyco/opencode** — no observable auto-merge or scheduled-pump policy in current data. Per-repo band assignment in synth #216 remains valid (single distribution support).

This means synth #105 currently affects exactly **one** of six tracked repos. The synth's *generality* is contingent on whether other tracked repos adopt auto-merge in W17–W18. **Forecast:** at least one more of the six adopts auto-merge for some bot class within 4 weeks (industry trend toward CI-gated bot auto-merge is strong). Tracking adoption events as they occur becomes the primary work for this synth.

## Distinguishing from existing synths

- **#98** (bot-driven sub-10s N≥3 stale-PR mass-close sweep) — #98 is a *one-shot bot-action sweep* on existing PRs; #105 is a *policy-as-code change* affecting the FUTURE merge-time distribution. #98 affects close-events; #105 affects merge-events.
- **#100** (cross-repo merge-rate co-suppression as corpus-level state) — #100 is corpus-scale, time-varying, transient; #105 is per-repo, structural, persistent. Both must be tracked separately.
- **#216** (per-repo 4-tier dormancy band) — #105 is a **necessary update** to #216, not a competitor. Synth #216 in its current form is correct for repos without auto-merge policy and incorrect (loses fidelity) for repos with.

## Operational consequences for ADDENDUM-NN forecasting

Going forward, ADDENDUM authors should:

1. In the per-repo trailing-silence table, **footnote** block/goose with "post-#8856; bot/human stratification recommended."
2. When forecasting block/goose's next merge: condition on dependabot scan cadence (typically nightly UTC + push-triggered) rather than on author cohort calendar. The next-merge predictor for goose is now a **calendar event**, not an author-availability event, for the bot population.
3. Treat any future repo's "enable auto-merge for X" PR as a regime-change marker. Cite this synth (#105) when annotating the marker in the addendum.

## Cross-references

- **ADDENDUM-89** (this date) is the seed observation.
- **Synth #98** — sibling phenomenon (bot mass-close), separate from this (bot auto-merge policy).
- **Synth #100** — corpus-level merge-rate state, orthogonal to per-repo regime change.
- **Synth #216** — per-repo dormancy band model; this synth requires #216 to be stratified per author class for repos that adopt auto-merge.
- **Synth #218** — Grammar inventory; dependabot's branch form (`dependabot/cargo/...`) is its own grammar (Grammar D candidate, machine-generated).
