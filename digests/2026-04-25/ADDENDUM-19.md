# 2026-04-25 — Addendum 19

**Window:** 12:05Z → 12:52Z (continuation from Addendum 18, which closed at 12:05Z).

A 47-minute window dominated by **opencode** (5 distinct PR events spanning 4 surfaces and 5 distinct authors) and near-zero elsewhere. Opencode's "most active repo of the day" streak now extends to a **fourth consecutive tick** (Addendums 16, 17, 18, 19). Continue and cline both reverted to single-PR baseline (only the gerryqi `deepseek-v4-pro` PR refreshed); codex, ollama, OpenHands, browser-use produced **zero** PR activity again.

The window also produced the first **opencode merge in three ticks** (#24139 by `simonklee`) and a **fresh open by `herjarsa`** (#24293) — the third opencode PR by `herjarsa` in a single calendar day, escalating the same-author cadence first noted in Addendum 17 and reinforced in Addendum 18.

## opencode (anomalyco/opencode)

- **[anomalyco/opencode#24293]** — OPENED 12:36:06Z, refreshed 12:39:48Z by `herjarsa` (`Hernan Javier Ardila Sanchez`), head SHA `1c166d0b4441`. *"fix(task): propagate parent session permissions to sub-agents."* Open → first iteration **3m42s**. Surface family: task / sub-agent permission propagation. **`herjarsa`'s third opencode PR of the day** — earlier today he refreshed mid-tail #23794 (Addendum 17, 11:05:04Z) and opened #24290 (Addendum 17, 11:33:47Z, refreshed in Addendum 18 at 12:04:44Z). Cadence across the three: 11:05Z (refresh #23794) → 11:33Z (open #24290, +28m) → 12:04Z (refresh #24290, +31m) → 12:36Z (open #24293, +32m). **Four touches at ~30-minute intervals — a remarkably regular single-author cadence stretching ~91 minutes across two distinct PRs and one mid-tail bump. Anchor for synthesis #83.**
- **[anomalyco/opencode#24139]** — MERGED 12:21:36Z by author `simonklee` (`Simon Klee`), head SHA `7510888aba50`. *"tool/lsp: include request details in permission metadata."* Created 2026-04-24 10:12:19Z, **lifespan ~26h09m**. Surface family: LSP tool / permission metadata. **First opencode merge in three consecutive ticks** (Addendums 16/17/18 had only self-closes, no real merges). Note the **surface adjacency** to `herjarsa` #24293 (both are *permission propagation* PRs, opened/merged within ~14 minutes of each other) — two distinct authors converging on the permission-metadata surface family at the same maintainer cadence.
- **[anomalyco/opencode#24259]** — refreshed 12:26:23Z by `Yusuzhan` (`Yusuzhan`). *"docs: add opencode-simple-notify to ecosystem."* Created 2026-04-25 05:39:41Z, **second-iteration refresh** within the day (created → refresh ≈ 6h47m). Surface family: ecosystem-docs vendor self-onboarding (mirrors the `FuturMix` continue/OpenHands cross-repo pattern from Addendum 18 — but here the vendor self-onboarding is *intra-repo, single-PR, slow-iteration* rather than cross-repo). Single docs PR for an external notification tool authored by the tool's owner.
- **[anomalyco/opencode#18761]** — refreshed 12:50:20Z by `OpeOginni`, head SHA `40d2902862157910e6b8b826bd660547054574fb`. *"fix(opencode): Use standard resolve function to get proper filePaths for tools."* Created 2026-03-23 10:32:51Z, **~33 days old**. Long-tail refresh, distinct author from any prior bump in today's data.
- **[anomalyco/opencode#18767]** — refreshed 12:42:17Z by `noahbentusi`, head SHA `2e2c3773f082` (head SHA unchanged from Addendum 17 bump). *"feat(app): Mobile Touch Optimization."* Created 2026-03-23. **Second long-tail refresh of this PR today** (first was Addendum 17 at 10:40:13Z). Cadence: long-tail refresh → second long-tail refresh **~2h02m later**. Same author both times. **Falsifies the Addendum 18 observation that the deep long-tail wave from Addendum 17 had "exhausted itself in a single 38-minute burst, did not produce any rebound"** — #18767 produced exactly one rebound, at 2h02m after the wave. Wave is *partially-sustaining*, not fully-exhausting.
- **[anomalyco/opencode#13854]** — refreshed 12:42:17Z by `mocksoul` (`Vadim Fint`), head SHA `399dd8afb170` (unchanged). *"fix(tui): stop streaming markdown/code after message completes."* Created 2026-02-16, **~68 days old**. **Same-second refresh as #18767 (12:42:17Z)** — exactly mirroring the same-second pairing observed at 10:40:13Z in Addendum 17. **Two PRs, two authors, two distinct surfaces, refreshed at the identical second twice in one day** — the Addendum 17 pairing (#13854 + #18767 at 10:40:13Z) repeats now at 12:42:17Z, **2h02m04s later**. This is structurally a *recurring* same-second long-tail co-bump, not a one-off coincidence. **Anchor for synthesis #84.**

## litellm (BerriAI/litellm)

- One long-aged PR (PR #24785 by `hwittenborn`, created 2026-03-30, refreshed 12:09:01Z) was bumped in window. Surface family: provider-auth / OAuth device-code UI flow. **Silent-cited only by number** (title contains a banned product string). Single touch, no second iteration.
- **`jayy-77` #26500 (Addendum 18 anchor) has gone fully quiet** — third touch at 11:54:59Z was the last in window 18, no fourth touch this tick. The "fast-then-slow" inverted decay shape has resolved into a flat-after-third-touch shape.
- **`kiyeonjeon21` budget triplet remains quiet for a fourth consecutive tick** (zero follow-up since Addendum 16). Synthesis #77's prediction that the triplet would not produce same-day follow-up is still holding.

## cline (cline/cline)

- **[cline/cline#10404]** — refreshed 12:11:01Z by `gerryqi` (`Gerry Qi`), head SHA `0e78bf83fdbe`. *"feat(deepseek): deepseek-v4-pro supports reasoning effort control."* **Note:** the same author opened a structurally-identical PR in `continuedev/continue` as #10404 (Addendum 18, refreshed 12:11:01Z — same minute). **Two distinct repos, same author, same PR number, same micro-second-precision refresh time, same deepseek-v4-pro surface, same title.** This is a **cross-repo same-author parallel-port pattern**: `gerryqi` is maintaining functionally-identical PRs in two unrelated agent stacks and refreshing them in lock-step. Distinct from the Addendum 18 `FuturMix` cross-repo signal (which was *vendor self-onboarding*, feat→docs ordering, 21h apart). This is *contributor parallel-port*, simultaneous, same-surface. Same-author same-second cross-repo refresh has not been previously cataloged in synth #65–#82.

## continue / codex / ollama / OpenHands / browser-use

- **No fresh PR activity in window** for any of these five repos. Codex now **five consecutive ticks below baseline** (Addendums 15→16→17→18→19); the `mzeng-openai` / `aibrahim-oai` mcp-policy cohort has not been touched since Addendum 16. Codex velocity baton continues to sit elsewhere — extending the streak called out in synthesis #74.

## Cross-repo cohort — opencode quadruple-tick dominance

| Tick | Window | opencode events | non-opencode events | opencode share |
|---|---|---|---|---|
| Addendum 16 | (~10:00Z–10:39Z) | 3 | 4 | 43% |
| Addendum 17 | 10:39Z–11:35Z | 9 | 1 | 90% |
| Addendum 18 | 11:35Z–12:05Z | 2 | 3 | 40% |
| Addendum 19 | 12:05Z–12:52Z | 6 | 2 | 75% |

Opencode has now produced the plurality of PR events in 3 of 4 most recent ticks. The repo's velocity has not just *led* but *structurally dominated* — the only tick where opencode lost plurality (Addendum 18) was the same tick that called out the loss in real time, and the rebound to 75% share within one tick suggests that "opencode plurality" is the normal state and Addendum 18 was the deviation.

## Cross-repo cohort — same-second long-tail co-bump (recurrence)

The pairing **#13854 + #18767, both refreshed at the identical second**, has now recurred:

| Occurrence | Timestamp | Authors | PR ages |
|---|---|---|---|
| 1 | 2026-04-25T10:40:13Z (Addendum 17) | mocksoul + noahbentusi | 68d + 33d |
| 2 | 2026-04-25T12:42:17Z (Addendum 19) | mocksoul + noahbentusi | 68d + 33d |

**Same two PRs, same two authors, same second-precision pairing, 2h02m04s apart.** No third PR participates either time. Two-occurrence dataset is small but the pairing is *exact*. Most likely mechanism: a shared upstream rebase/CI revalidation hook that touches both PRs because both target the same base SHA and both were bumped earlier today. The fact that no other long-tail PRs co-fire suggests the two PRs share a specific dependency or CI matrix entry that the others do not. **Anchor for synthesis #84.**

---

**Tick metrics:** 6 opencode events (1 fresh open #24293, 1 merge #24139, 4 refreshes #24259/#18761/#18767/#13854), 1 litellm long-tail bump (silent-cited), 1 cline refresh (#10404), 0 codex/ollama/OpenHands/browser-use/continue. Total **8 PR events** across **3 repos** in 47 minutes. Cited PRs by number: #24293, #24139, #24259, #18761, #18767, #13854 (opencode); #10404 (cline). 7 distinct PRs cited with numbers + short SHAs + authors.
