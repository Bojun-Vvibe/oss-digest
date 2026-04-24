# W17 cross-repo synthesis #20 — the patch-PR graveyard: bugs whose fix history outweighs their fix (2026-04-24T16:13Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern

Some bugs in the W17 corpus have, by now, generated more PRs than their underlying issue has comments. The fix history is longer than the bug history. Each PR closes a single visible symptom; the next reporter, days or weeks later, files essentially the same bug with a slightly different reproducer; another PR ships; the cycle repeats. The issue is never closed because the underlying contract violation is never named — only the latest manifestation is patched.

This is a different shape from synthesis #15 (sync-debt) and from synthesis #18 (version skew). In #15, the *cadence* of merging is itself the problem. In #18, two halves of a system disagree about what version they speak. In #20, **a single bug accumulates a graveyard of attempted fixes** — each one technically correct for its specific reproducer, none of them addressing the contract that keeps the bug coming back.

The graveyard pattern has a tell: PR titles that say "again," "supersedes," "closes (and reopens)," "another fix for," or that explicitly cite a previously-merged PR as having "already fixed" what is observably still broken. Where the tell is present, the *next* PR against the same surface is more likely than not to be another graveyard entry.

## Concrete instances from W17

1. **`fix(adapters,vertex): pass output_config through to backends that accept it` ([BerriAI/litellm#26439], opened 2026-04-24T16:07Z, closes #23380, supersedes #23475/#23396/#23706/#22727).** The PR title's parenthetical is a four-PR graveyard in plain sight. Issue #23380 is the bug ("`output_config` is silently dropped on Vertex calls"); the fix has now been attempted **five times**. Each prior attempt was reviewed in isolation, accepted as a partial fix, merged or abandoned, and the issue stayed open because the *next* reporter hit a different `output_config` field that the prior PR didn't touch. #26439 is the broadest attempt yet — it routes the entire `output_config` shape rather than individual fields — but until the issue is closed by a reporter rather than by a maintainer, the sixth PR cannot be ruled out.

2. **`OpenAI-curated plugin manifests are repeatedly validated during normal turn/subagent setup` ([openai/codex#19382], filed 2026-04-24T14:47Z), citing [openai/codex#17638] as having "already fixed" one curated-marketplace loading path.** The reporter searched the issue tracker, found #17638 ("OpenAI plugin manifests are validated on every turn"), saw that it was closed, and filed #19382 against the *next* code path with the same shape. The original fix patched one code path; the runtime has at least one more. This is a graveyard entry that is *honest about being one* — the reporter explicitly names the prior fix and explains why it doesn't cover the new path. The honesty is rare, and it is also evidence that the *contract* ("plugin manifests are validated once per session") was never written down; only one *path* was patched.

3. **`Fix hang on turn/interrupt` ([openai/codex#18392], merged 2026-04-24T14:47Z).** Real fix to a real bug, but the addendum notes that "the same surface (the interrupt/turn boundary) has shipped at least three fixes in the last two weeks." Three fixes in two weeks on the same boundary is the cadence of a graveyard, not the cadence of a bug. The interrupt/turn boundary is repeatedly *almost correct*; each fix patches the failure mode of the previous one. The next interrupt-related issue is more likely to be a fourth graveyard entry than a fundamentally new bug.

4. **`Enable hooks on Windows` ([openai/codex#17478], closed 2026-04-24T15:26Z, originally filed 2026-04-11).** Two weeks open. During those two weeks, the issue accumulated workarounds, partial PRs, and surface-by-surface enablements. The final close-out is a single PR; the *journey* to that PR is the graveyard. Relevant because the immediate next request ([openai/codex#19383], "Allow Codex hooks to run silently") is already a follow-up against the surface the close-out just enabled. The graveyard pattern continues into the post-fix UX phase: cap landed, polish absent, next graveyard begins.

5. **`fix: enable compaction prune by default` ([anomalyco/opencode#24127], closed without merge 2026-04-24T14:44Z).** A PR that *attempted* to fix the compaction-bloat bug by changing a default to "prune on." Was closed without merge because pruning by default broke session-replay for any user who paused mid-session and resumed days later. The bug it tried to fix is still open; the closing comment names the next constraint ("preserve session-replay across pruning") that the next PR will need to satisfy. The graveyard already has at least one entry against this issue.

6. **`fix(replay): preserve tool_calls on replay path` ([anomalyco/opencode#24170], the precursor PR named in the closing comment of #24127).** Lands the *constraint* that #24127 then violated. Two adjacent PRs against the same boundary, where the second one violates the contract the first one established. The graveyard here is structural: the project does not have a single named contract for "what survives a replay," so each PR re-discovers the constraint by violating it.

7. **`fix(agent): prune excess images from history to prevent session deadlock` ([charmbracelet/crush#2613], open since 2026-04-13, comment activity 2026-04-24).** Open eleven days. The maintainer-and-reporter dialogue is a slow-motion graveyard: every proposal is shot down by a counter-example, every counter-proposal introduces a new failure mode. Today the proposal is `[agent].image_history_limit = 3`; the reporter notes that "3" silently breaks image-heavy users. The PR is, in effect, *rehearsing* the synthesis #17 problem — defaults are spec — in real time, without anyone naming it. When the PR finally merges, whatever value it picks for the default will become the next graveyard entry's bug-of-record.

8. **`Use OpenTUI theme detection for initial TUI mode, again` ([anomalyco/opencode#23846], merged 2026-04-24T15:28Z).** The "again" in the title is the cleanest possible graveyard tell. The fix landed before, regressed, and has been re-landed. The graveyard for *this* particular bug is at least two PRs deep. The deeper question — why did the regression happen in the first place — is unaddressed.

## Adjacent instances worth naming

- **`Litellm clean litellm oss staging 04 01 2026` ([BerriAI/litellm#25856], open since 2026-04-16).** A weekly "clean staging" PR. The act of needing a weekly clean PR is the project admitting that the staging branch routinely accumulates state that the next-week PR has to remove. Each cleaning PR is a graveyard entry against the same underlying bug ("staging drifts").
- **`merge main` cluster ([BerriAI/litellm#26430, #26433, #26437] etc., 2026-04-24).** Each `merge main` PR is, structurally, a graveyard entry against "the staging branch is not main." The bug never closes because the staging-vs-main split is the project's intentional shape; the graveyard is the cost of that shape.

## Why the patch-PR graveyard is its own pattern

A bug whose fix history is longer than the bug history is a bug whose **contract** has never been written down. The PRs are patching *symptoms* in code without ever asserting an invariant in tests or docs. The five-PR Vertex `output_config` chain (#26439 et al.) is the cleanest example: there is no test that says "every key in `output_config` is propagated to every backend that accepts it." Each PR adds a key or a backend; the test for "every key on every backend" does not exist; the next missing pair becomes the next reporter's bug.

The contract-shaped fix is small. It is one test per bug-class that asserts the *invariant* the bug violates:

- For #23380 / #26439: a parameterized test over `(every_output_config_key × every_backend_that_accepts_it)`.
- For #19382 / #17638: a test that asserts "plugin manifests are validated at most N times per session, for N ≤ 1."
- For #18392 and the interrupt/turn cluster: a property test that asserts "after Ctrl-C in any turn state, the next user input is accepted within K events."
- For #23846 (theme): a test that asserts "after a terminal-side theme change mid-session, the next render reflects the new theme."

None of these tests are hard to write. The reason they aren't written is that each PR's author is reasoning about a *bug* (a specific reproducer) rather than about a *contract* (the invariant the reproducer happens to violate). That is the discipline gap, and the graveyard is what the gap costs.

## Cross-references

- **Synthesis #14 (the published spec lies)**: the graveyard pattern is downstream. When the spec doesn't match the runtime, fixes patch the runtime to match a *symptom* the spec implied; the rest of the spec keeps generating fresh symptoms.
- **Synthesis #16 (accepted-but-unpropagated)**: a PR that fixes propagation in *one* consumer but not the others is a graveyard entry waiting for the next consumer to be discovered. #19382 against #17638 is the literal example of that.
- **Synthesis #18 (version skew)**: every CLI-side patch for a server-side regression is a graveyard entry against "the two halves don't negotiate."
- **Synthesis #19 (snapshot vs live)**: #23846's "again" is *both* a graveyard entry and a snapshot regression; the two patterns intersect cleanly when a snapshot-related fix is reverted by a refactor that didn't notice the snapshot was load-bearing.

## What a graveyard-aware review discipline would look like

The cheapest possible improvement is one rule at PR-review time:

> **Before merging a fix PR, search the issue tracker and the closed-PR list for the same surface. If you find a prior fix, the new PR's body must say what the prior fix missed.**

This is the convention #19382 follows by accident — the reporter cites #17638 — and that #26439 follows on purpose — the title supersedes four prior PRs. Where this convention is absent, the graveyard is invisible. Making it visible costs the reviewer five minutes and the author one paragraph.

The deeper improvement — adding the contract-level test per fix — is a real cost. But it pays for itself within the *first* graveyard cycle it prevents. A test that asserts "every `output_config` key is propagated to every backend that accepts it" would have caught #26439's superseded predecessors at PR-review time, instead of letting four of them merge as partial fixes that left the bug open.

## Net read

The four projects collectively spent W17 patching graveyards. The corpus contains at least three multi-PR graveyards (Vertex `output_config`, codex interrupt/turn, opencode replay/prune) and several adjacent graveyard-shaped clusters (litellm staging, codex hooks landing). Until the projects make the graveyards *visible* — by citing prior fixes in PR bodies and by writing contract-level tests instead of reproducer-level tests — synthesis #20 will keep producing fresh entries every week.

The interesting prediction this synthesis makes is testable: if any of the projects adopts the "cite the prior fix in the PR body" rule for one month, the per-issue PR count for graveyard-bearing surfaces should fall measurably, because the rule forces the reviewer to ask "what did the prior fix miss?" before approving the next attempt. That question, asked once, retires more graveyards than another five PRs would.

— end synthesis #20 —
