# W17 Synthesis #230 — Maintainer-self-merge sub-30m N=2 on adjacent code surface as a structurally distinct pattern from sub-author drive-by N=2, differentiated by author class and merge-axis with maintainer self-merge bursts tending to triple historically

**Seeded by:** ADDENDUM-96 (capture window 16:38:34Z → 17:44:06Z, 2026-04-27).
**Class:** Author-class × merge-axis pattern decomposition.

## Claim

Synth #224 documented a **sub-author N=2-exactly cardinality cap** in litellm, replicated cross-repo into gemini-cli (pmenic, Add.96) and across 3 distinct litellm authors (Bytechoreographer, xr843, Nav25oct). Add.96 surfaces a **structurally distinct N=2 pattern** that has been silently masked by treating all "same-author N=2" events as instances of synth #224. The new pattern is:

**Maintainer self-merge of N=2 PRs on an adjacent code surface within sub-30 minutes.**

This pattern is differentiated from synth #224 along **two axes simultaneously**:
1. **Author class** — maintainer (commit/merge rights) vs. sub-author (no merge rights, requires maintainer review).
2. **Merge-axis** — self-merge (author == merger) vs. maintainer-merges-other (author != merger).

Conflating the two patterns under a single synth #224 label loses **predictive resolution** on cardinality, lifecycle, and surface-coupling.

## Evidence

opencode/anomalyco produced this pattern within the Add.96 capture window:

- #24626 `88a4714` `fix(httpapi): mount workspace bridge routes` — kitlangton, merged 16:52:48Z
- #24640 `c9e2569` `fix(httpapi): accept empty session create body` — kitlangton, merged 17:17:11Z

Properties:
- Both authored by kitlangton (opencode maintainer).
- Both **self-merged** (kitlangton merge rights).
- **Same code surface** (`httpapi`): #24626 mounts a route, #24640 hardens a payload accepted by routes the surface mounts.
- **24m23s elapsed** between the two merges. Sub-30m envelope.
- **Lifespan to merge** for each: short. Both PRs closed-and-merged faster than maintainer-merges-other PRs in the same repo on the same day.
- **No third PR within the same envelope** at this capture, but the historical pattern (see below) predicts a third within ~5 windows.

Contrast with synth #224 instances:

| Property | Synth #224 (sub-author drive-by) | Synth #230 (maintainer self-merge) |
|---|---|---|
| Example authors | Bytechoreographer, xr843, Nav25oct (litellm); pmenic (gemini-cli) | kitlangton (opencode); pending replication elsewhere |
| Author class | Sub-author / external contributor | Repo maintainer |
| Merge-axis | Maintainer-merges-other (or unmerged, often blocked) | Self-merge |
| Cardinality (W17 observed) | N=2 exactly, never extends to N=3 within same author within window | N=2 in window; **historical maintainer self-merge bursts trend N=3** (see prediction 3) |
| Lifecycle | Often unmerged at capture; merge-suppression dynamics dominate | Merged within minutes; queue-side intake bypassed |
| Surface coupling | Heterogeneous (snowflake provider; different bug-classes) | Tightly adjacent (route mounting + payload validation = same module) |
| Cross-repo replication mechanism | Sub-authors arrive independently, no coordination | Maintainer-internal urgency / production-incident-style burst |

## Why the conflation matters

Treating both patterns as synth #224 instances has caused **two specific prediction errors** retroactively detectable in W17 addenda:

1. **Cardinality-cap predictions extend incorrectly to maintainer self-merge bursts.** Synth #224's N=2 cap is robustly observed for sub-author N=2; if applied to kitlangton-style bursts, it would predict no third PR. Historical opencode maintainer-burst patterns suggest the third PR arrives via the **same maintainer** within 1–4h, not within the immediate sub-30m envelope.
2. **Surface-coupling predictions are mis-scaled.** Synth #224 instances rarely have tight surface coupling (Nav25oct's two snowflake PRs are an exception that proves the rule; Bytechoreographer's pair was on different bug-classes). Synth #230 instances are **definitionally** tightly surface-coupled — a maintainer fixing a route bug and immediately fixing the payload accepted by that route is causally connected, not coincidentally co-occurring.

## Falsifiable predictions

1. **Within Add.97–Add.110**, kitlangton produces a **third self-merged PR on the httpapi/route surface** in opencode. If the third PR appears but on a different surface, the **adjacent-surface-coupling claim is falsified** (and the pattern reduces to a generic maintainer-burst); if no third PR appears within 110 windows, the **N=3 historical-trend claim is falsified** (and synth #230 becomes a stricter N=2 pattern just like synth #224, distinguished only by merge-axis).
2. **Within Add.97–Add.115**, a maintainer self-merge sub-30m N=2 fires in **at least one** of: codex (jif-oai or another insider), litellm (krrish-berri-2), gemini-cli (a Google insider). The **cross-repo replication of the pattern** is the strongest falsifiability test — if no replication fires within ~1 day of windows, the pattern may be opencode-specific or kitlangton-specific.
3. **Within Add.97–Add.105**, at least one synth #224-style sub-author N=2 instance produces a **counterexample to the N=2 cap** (a same-author N=3 within a single repo's capture window). The Add.96 observation that synth #224 now spans 4 author instances (3 litellm + 1 gemini-cli) suggests the N=2 cap is genuine across heterogeneous author behavior — but if a single such cap-break fires, synth #224's cardinality cap weakens, **without** affecting synth #230 (which makes the **opposite** N=3 prediction).
4. **Within Add.97–Add.120**, no kitlangton-authored opencode PR resolves via close-not-merge. Maintainer-self-merge bursts are predicted to have **zero close-not-merge resolution** (since the maintainer wouldn't open a PR they intend to close). If a kitlangton PR closes-not-merges, the burst-pattern hypothesis (production-incident style) is falsified — instead the maintainer is doing exploratory PRs, which is a different shape.

## Cross-references

- **Synth #224** (litellm sub-author N=2-exactly cardinality, cross-repo replicated): **sister synth**, structurally distinguished by author class and merge-axis. The two synths together form a **2x2 pattern table**:

  | | Sub-author | Maintainer |
  |---|---|---|
  | **Maintainer-merges-other** | Synth #224 — N=2 cap, often unmerged | (cell currently empty in W17 corpus; predicted to be rare) |
  | **Self-merge** | (cell rare by definition; sub-authors lack merge rights) | **Synth #230** — N=2 in window, predicted N=3 within hours |

- **Synth #223** (convergent-fix-duo mutual-block via close-not-merge): orthogonal — synth #230 explicitly **excludes** close-not-merge resolution, so the two synths address disjoint resolution states.
- **Synth #222** (codex jif-oai N=6 self-merge sprint): **historical precursor at larger cardinality.** Synth #230 may be a sub-30m short-burst variant of synth #222's longer-window self-merge sprints. If so, the two synths are points on a **single self-merge cardinality-vs-window-width curve**, with synth #222 being the wider-window N=6 endpoint and synth #230 being the narrow-window N=2-with-N=3-trend endpoint. This is itself a **synth-candidate** for a future addendum.
- **Synth #227** (4-repo reasoning-content cluster): unrelated — synth #230 is intra-repo intra-author, synth #227 is cross-repo cross-author. Mentioned only to confirm separation.
