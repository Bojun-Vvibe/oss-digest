# W17 synthesis #234 — corpus measurement-artifact regime: silence-calculation methodology drives prediction validity, with `gh pr list --state all` default-sort introducing systematic backfill bias and a synth #228 metastability revision toward negative-feedback-stabilized cell shape

**Promoted from:** ADDENDUM-97 synth-candidate #232 (2026-04-27 18:23:59Z capture).
**First operational evidence:** ADDENDUM-96 → ADDENDUM-97 codex etraut-openai backfill case study (3 merges totaling N=3 silently absent from Add.96, surfaced via `--search "merged:>=..."` in Add.97).
**ADDENDUM-98 follow-up:** Methodology change adopted in Add.98 (REST `pulls?state=closed&sort=updated&direction=desc` for backfill rather than `gh pr list --state all` default). 5 silence-breaks in Add.98 window all measured cleanly with no further backfill anomalies. Synth #228 negative-feedback hypothesis under stress with qwen-code 4h-boundary crossing.

## Claim

The W17 corpus contains a **measurement-artifact regime** where the choice of `gh` query and sort order **directly shapes the synth landscape** because almost all corpus claims (silence-cells, synth #224 cardinality caps, synth #228 metastability, synth #230 sub-30m self-merge gaps) ultimately depend on **accurate per-PR `mergedAt` ordering**. Specifically:

1. **`gh pr list --state all --limit N` returns by `updatedAt`, not `mergedAt`**, when no explicit `--search` is given. This means a recently-`updated` (e.g., comment-edited, label-changed, milestone-touched) but **older-merged** PR appears in the top N before a recently-merged PR with no post-merge updates. **For silence calculations, this is wrong** — silence is about merge times, not update times.

2. **Recovery requires `gh pr list --search "merged:>=<timestamp>" --json mergedAt`** sorted by `mergedAt`, OR — more robustly when `gh pr list` returns `[]` due to query parser edge cases — direct REST `gh api repos/<owner>/<repo>/pulls?state=closed&sort=updated&direction=desc&per_page=N --jq '.[] | select(.merged_at != null)'` followed by a client-side resort on `merged_at`.

3. **The Add.96 codex backfill case** (etraut-openai N=3 merges at 16:51:13Z, 16:54:25Z, 17:07:16Z **inside** Add.96's capture window but **invisible** to Add.96's `gh pr list --state all` default-sort query) is the canonical evidence. This caused **Add.96's "codex trailing silence at 3h42m59s" claim to be inflated by 37+ minutes** and **Add.96 pred #1 ("codex crosses 4h silence") to be structurally invalid** — it predicted a boundary crossing for a repo that was already comfortably inside the 0–4h cell.

## Reflexivity dimension

This synth has a **reflexivity property** rare in technical corpora: the corpus's own measurement methodology shapes the synths it generates. Synth #228 (corpus dormancy distribution metastability), synth #224 (sub-author N=2-exactly cardinality), and any synth depending on **time-ordering of PR events** are partially **artifacts of the query strategy**, not just observations of the underlying GitHub event stream.

Operationally:
- **Synth #224 N=2-exactly cap** appeared robust until Add.97 revealed codex etraut-openai N=3 merge burst was hidden by query bias. Even after correction, synth #224 was further falsified by evawong-oai N=5 OPEN burst (same Add.97). The cap may have **survived in the corpus only because measurement could not see N≥3 merges**.
- **Synth #228 metastability** assumed silence calculations were accurate; the predicted regime-flip at codex 4h boundary (Add.96 pred #1) **never had a chance to fire** because codex was never actually >4h silent. The metastability claim required a structural revision toward a **negative-feedback-stabilized cell shape** (Add.97 pred #7): silence approaching boundary triggers merge **before** crossing.

## ADDENDUM-98 follow-up evidence

In the Add.98 window (52m01s, 19:16:00Z capture), the methodology change was applied:

- **All 6 repos queried via `gh api repos/<owner>/<repo>/pulls?state=closed&sort=updated&direction=desc&per_page=N --jq '.[] | select(.merged_at != null)'`** with client-side resort on `merged_at` desc.
- **No backfill anomalies detected** across codex (5 in-window merges identified: #19854 18:32:49Z, #19851 18:37:31Z, #18446 18:14:35Z, #19771 19:09:03Z, #19491 19:03:50Z), litellm (#26622 19:13:14Z), gemini-cli (#25409 19:03:28Z), opencode (#24554 18:33:34Z), goose (#8793 18:35:37Z), qwen-code (none).
- **Negative-feedback hypothesis (Add.97 pred #7) under stress**: qwen-code crossed the **4h silence boundary** without merging (4h14m57s at Add.98 capture). 5 of 6 repos silence-broke below 8h05m, but **qwen-code is the first 4h-crossing in 4 windows**. Hypothesis may only hold at the 24h boundary OR may be entirely falsified — needs more test cases at the 4h+ band.

## Methodological recommendations promoted to corpus protocol

For all subsequent ADDENDUMs (Add.99 onward) and weekly synths:

1. **Always use REST `pulls?state=closed&sort=updated&direction=desc&per_page=N --jq '.[] | select(.merged_at != null)'`** as the primary backfill query. Fallback to `gh pr list --search "merged:>=<ts>" --json mergedAt` only when REST is rate-limited.
2. **Never trust `gh pr list --state all --limit N` for silence calculations** without explicit `--search "merged:>=..."`.
3. **Cite the SHA + mergedAt UTC timestamp** for every silence-bound PR (this addendum's predecessor format already does this).
4. **Run the REST backfill query for the FULL window-width back from capture time**, not the prior addendum's last-known-merge time, to detect any backdated `updatedAt`-driven invisibilities.
5. **Flag any synth claim that depends on time-ordering with a "measurement-sensitivity" tag** so future corpus revisions can selectively re-test only those claims when methodology changes.

## Falsification conditions

This synth (the methodological one) is falsified if:
1. Three consecutive subsequent windows (Add.99/100/101) using the new methodology produce ≥2 backfill anomalies that the methodology should have prevented. Would indicate a deeper bug in `gh api` or the GitHub events propagation.
2. The negative-feedback-stabilized cell shape (synth #228 revision) is itself falsified by a repo crossing the 24h boundary with no merge intervention. Specifically: if **goose, qwen-code, or any other repo silence-breaks at >24h** within the next 6 windows, the negative-feedback claim is falsified and synth #228 reverts to either bistable metastable OR random-walk-with-merge-Poisson.
3. A measurement-method-independent corpus event (e.g., a release tag, a workflow_dispatch announce, an explicit GitHub Insights chart) **contradicts** a synth-claim that was derived using the corrected methodology — would indicate the corrected methodology still has biases.

## Cross-references

- **Synth #228** (corpus dormancy distribution metastability): **structurally weakened**. Bimodal-flip mechanism was untested because every predicted boundary-crossing was pre-empted by a same-window merge in the silent repo (which the prior measurement wrongly thought was silent). Add.97 pred #7 negative-feedback revision is the new working model. Add.98 partial counter-example via qwen-code 4h crossing — under stress.
- **Synth #224** (sub-author N=2-exactly cardinality): the cap may have been a **measurement artifact** in part. After correction, evawong-oai N=5 OPEN and etraut-openai N=3 MERGE both falsify it on different sides. Demoted to litellm-and-gemini-cli-specific.
- **Synth #226** (outsider re-file silence-break): unaffected by measurement methodology — re-file events have explicit close+open timestamps that are robust to sort-order ambiguity.
- **Synth #227, #229, #230, #233** (cross-repo convergent-fix axes + maintainer self-merge): partially measurement-sensitive (they rely on intra-window event sequencing). Re-test under new methodology shows no contradictions for these synths in Add.97/Add.98.
- **Synth #235** (Add.98-seeded maintainer-led closure of outsider sub-cluster): newly seeded under corrected methodology. Less measurement-vulnerable because it relies on **author-identity** (maintainer vs. outsider) which is not sort-order-dependent.

## Predictions specific to this synth

1. **No backfill anomalies in next 4 windows** (Add.99–Add.102) using the corrected REST methodology. If any occur, escalate to a full corpus re-audit.
2. **Synth #228 negative-feedback hypothesis falsified within 6 windows** — predict at least one repo (most likely qwen-code given its current 4h+ trajectory, OR goose if it has another long quiet day) crosses the 24h boundary without merging within 6 windows from Add.97. **If this happens, synth #228 reverts to a random-walk-with-merge-Poisson model**, NOT the metastable-bistable original AND NOT the negative-feedback revision.
3. **Synth #224 cardinality cap fully retracted** within 4 windows — predict at least one more N≥3 sub-author OPEN burst on litellm or gemini-cli (the two surviving repos for the cap) to fully demolish the original synth claim corpus-wide.
4. **At least one Add.99+ ADDENDUM identifies a NEW measurement-artifact** in a different `gh` query path (e.g., `gh release list`, `gh api repos/.../events`, label/milestone filters) — the reflexivity property suggests measurement biases are **systemic** to `gh` defaults, not isolated to `pr list --state all`.
