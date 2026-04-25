# W17 Synthesis #70 — Cross-repo long-tail PR refresh wave: multi-week-aged PRs synchronize across unrelated repos in a 75-minute slice

**Window**: 2026-04-25T07:11Z → 2026-04-25T08:25Z (Addendums 11+12 combined; ~75 minutes elapsed)
**Anchor exhibits** (8 long-tail PRs, 3 repos, 8 distinct authors):
- anomalyco/opencode#13854 (`mocksoul`/`Vadim Fint`, opened 2026-02-16, **~68 days old**, *"fix(tui): stop streaming markdown/code after message completes"*, refreshed 07:54:15Z)
- anomalyco/opencode#14468 (`balcsida`, opened 2026-02-20, **~64 days old**, *"feat: add LiteLLM provider with auto model discovery"*, refreshed 07:15:39Z)
- anomalyco/opencode#16525 (`3x3cut0r`, opened 2026-03-07, **~48 days old**, *"feat: support config.d fragment loader"*, refreshed 07:41:13Z)
- anomalyco/opencode#18767 (`noahbentusi`, opened 2026-03-23, **~33 days old**, *"feat(app): Mobile Touch Optimization"*, refreshed 07:54:14Z)
- BerriAI/litellm#25896 (`Vallabh-1504`, opened 2026-04-16, **~8.6 days old**, *"feat(vertex_ai): Add xAI Grok models support as Vertex AI partner models"*, refreshed 08:14:02Z)
- BerriAI/litellm#26052 (`geraint0923`/`Mark`, opened 2026-04-19, **~6 days old**, *"fix(xai): correctly resolve the canonical names and alias for xai models"*, refreshed 08:10:43Z)
- BerriAI/litellm#26189 (`iamujjwalsinha`, opened 2026-04-21, **~3.5 days old**, *"fix(xai): register grok-imagine-image for image generation"*, refreshed 08:13:36Z)
- ollama/ollama#15726 (`UniquePratham`, opened 2026-04-21, **~4 days old**, *"fix: resolve OpenClaw gateway launch timeout on Windows by enforcing …"*, refreshed 08:07:02Z)

**Cross-references**: extends #68 (opencode merge-velocity tri-modal — long-tail mode is the third cluster); subsumes #69 (litellm xAI cluster is one slice of the cross-repo wave); challenges #56 (lockstep refresh as bot-rebase-train signal — see falsification check).

## Pattern

Across a 75-minute slice on 2026-04-25 between 07:11Z and 08:25Z, **eight PRs aged 3.5 to 68 days were refreshed across three of the eight tracked repos** (opencode, litellm, ollama). Eight distinct authors. Refresh timestamps span ~70 minutes and are not uniformly distributed:

```
07:15:39Z  opencode#14468  balcsida          64 days old
07:41:13Z  opencode#16525  3x3cut0r          48 days old
07:54:14Z  opencode#18767  noahbentusi       33 days old
07:54:15Z  opencode#13854  mocksoul          68 days old   ← 1-second delta with #18767
08:07:02Z  ollama#15726    UniquePratham      4 days old
08:10:43Z  litellm#26052   geraint0923        6 days old
08:13:36Z  litellm#26189   iamujjwalsinha   3.5 days old
08:14:02Z  litellm#25896   Vallabh-1504     8.6 days old
```

The PRs touch wholly unrelated surfaces:
- opencode TUI rendering (#13854), opencode provider integration (#14468), opencode config loader (#16525), opencode mobile UX (#18767)
- litellm xAI provider (#26052, #26189), litellm Vertex AI partner models (#25896)
- ollama Windows-Scheduler interaction (#15726)

There is no plausible *content* coupling. The coupling is purely on the **age + refresh-time** axes: long-tail PRs in three different repos all received pushes within the same 75-minute slice.

## Why this is structurally distinct from synthesis #56

Synthesis #56 (*lockstep-refresh-of-aged-PRs-as-bot-rebase-train-signal*) named a single-repo bot-driven rebase pattern: one bot account, one repo, multiple aged PRs refreshed in sequence as part of a scheduled rebase-against-main job. Synthesis #70 is structurally different on three axes:

| Dimension | Synthesis #56 | Synthesis #70 (this) |
|---|---|---|
| Authors | single bot account | 8 distinct human-named accounts |
| Repos | single repo | 3 repos |
| Mechanism | scheduled rebase-train | unknown — see mechanisms below |
| Falsifier | per-PR commit is rebase-only | per-PR commits may be content-bearing |

If synthesis #56's bot-train mechanism applied here, the refresh actor would be the same account on each PR. It is not — each PR's refresh is by the PR author. So synthesis #56 does not absorb synthesis #70.

## Plausible mechanisms

1. **Cross-repo CI-platform announcement / rebase notification cascade**. If GitHub or a shared CI platform shipped a notification or `main`-bumped state change that affected aged PRs across multiple repos in the same time slice, authors would each independently receive a "your PR has conflicts" or "your PR is N commits behind" notification and respond with rebases. Falsifiable by checking whether the per-PR pushes are pure-rebase commits (no content delta) — if they are, this mechanism is supported.
2. **Diurnal author-timezone clustering**. 07:11Z – 08:25Z UTC corresponds to mid-morning across Europe (08:11–10:25 CET) and to overlap of Asia evening + Europe morning. If long-tail-PR authors disproportionately live in Europe, they would naturally check their PRs at this hour. Falsifiable by checking author-timezone distribution against the rest-of-day refresh distribution for these same PRs.
3. **Maintainer triage wave across the repos that share contributors**. opencode and litellm share contributors (e.g. `balcsida`'s opencode#14468 is a *LiteLLM provider* PR — explicit cross-project surface; the synthesis #67 declared-cohort framing applies). If maintainer-side review pings landed on a batch of aged PRs, authors would respond. The litellm xAI cluster (synthesis #69's anchor) is consistent with this. Falsifiable by checking for a maintainer-side comment/review burst in the prior 30–60 minutes on each PR.
4. **Coincidence**. Independent Poisson-rate refreshes happen to cluster. Prior probability: low — the per-PR refresh rate on these long-tail PRs is sparse (refreshes typically separated by days), so an 8-PR cluster within 75 minutes is multiple-sigma against an independent-Poisson model. But the absolute refresh rate is also sparse enough that small-sample inference is shaky.

The mechanism distinction is consequential because it determines what the wave **predicts** for the next 24h:

- **Mechanism 1** (CI cascade) → expect another refresh wave at the next scheduled tick (typically 24h or 7d later); pure-rebase commits and no merges.
- **Mechanism 2** (diurnal) → expect the same shape tomorrow at 07–08Z UTC; uniform across surface families.
- **Mechanism 3** (maintainer triage) → expect a merge wave or an explicit close wave in the next 24–48h; targeted at specific surface families.
- **Mechanism 4** (coincidence) → no signal; no shape repeat; downgrade to noise.

## Suspicious 1-second delta in opencode pair

`noahbentusi` #18767 refreshed at 07:54:14Z and `mocksoul` #13854 refreshed at 07:54:15Z — **two distinct human authors, two distinct PRs, one second apart**. Independent human keystrokes do not produce sub-second cross-author timing on long-tail PRs. The plausible reads:

- a single bot or automation refreshed both as part of a sweep (would push synthesis #56 back into play, but only for these two PRs);
- a GitHub-side batched event-emission sequence (notifications, indexer write-back) makes the timestamps appear adjacent when the underlying actions were not;
- both PRs share an upstream branch dependency that just landed in `main`, and an automated rebase ran for both — but neither PR is structured as part of a stack.

If it is a bot, the **bot account would be the same on both pushes**. Resolvable by inspecting `git log --format="%an %ae %s" -1` on the latest commit of each PR's HEAD. Until resolved, the 1-second pair should be treated as **unconfirmed-human**, and the 8-PR cluster should be reported as **6–8 long-tail PRs from 6–8 distinct human authors** (range to reflect uncertainty on the suspicious pair).

## Why this matters for W17 framing

Synthesis #68 isolated the tri-modal merge-velocity distribution on opencode and named a long-tail mode (`>30 days`). Synthesis #70 extends the long-tail-mode finding cross-repo: **the long-tail PR cohort is a real population in litellm and ollama as well**, not an opencode artifact. The long-tail-mode claim therefore generalizes from "opencode has a long-tail merge mode" to "**multiple W17 tracked repos have a long-tail PR population that exhibits coordinated refresh behavior**."

The reviewer-absorption-capacity framing from Addendums 9/11/12 (zero merges in window across all repos, while open volume and refresh volume remain elevated) takes on a different complexion under synthesis #70: the **long-tail population is being kept alive by author-side refresh activity, not by maintainer-side merge activity**. If mechanism 3 (maintainer triage) is the right read, a merge wave is imminent. If mechanism 1 or 2 is right, the long-tail cohort is in a holding pattern that can persist indefinitely.

## Open questions / next-tick watch

- Are the per-PR pushes content-bearing or pure-rebase? (decides between mechanisms 1 and 3)
- Does the same shape recur tomorrow at 07–08Z UTC? (decides between mechanisms 2 and 3)
- Is the suspicious 1-second opencode pair a single bot or two humans? (decides whether synthesis #56 partially absorbs synthesis #70)
- Does any of the 8 PRs merge in the next 24h? (mechanism 3 prediction)
- Does any of the 8 PRs get explicitly closed in the next 24h? (mechanism 3 alternative — triage as close, not as merge)
