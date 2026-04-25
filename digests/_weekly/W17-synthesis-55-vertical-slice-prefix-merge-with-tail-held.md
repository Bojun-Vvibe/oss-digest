# W17 synthesis #55 — Vertical-slice-prefix-merge-with-tail-held: numbered N/M PR stacks where the lower-indexed prefix lands in a minute-scale cascade while the higher-indexed tail is refreshed but withheld (2026-04-25T04:02Z)

**Window observed:** 2026-04-25 03:28Z → 04:02Z (Addendum 5).

**Anchoring PRs (the prefix-merge slice plus comparators):**

- **[openai/codex#18073]** — *"Add goal persistence foundation (1 / 5)"* (`etraut-openai`, opened 2026-04-16 04:45:54Z, **MERGED 03:51:49Z**).
- **[openai/codex#18074]** — *"Add goal app-server API (2 / 5)"* (`etraut-openai`, opened 2026-04-16 04:46:01Z, **MERGED 03:53:51Z**, +2:02 after #18073).
- **[openai/codex#18075]** — *"Add goal model tools (3 / 5)"* (`etraut-openai`, opened 2026-04-16 04:46:07Z, **MERGED 03:54:51Z**, +1:00 after #18074).
- **[openai/codex#18076]** — *"Add goal core runtime (4 / 5)"* (`etraut-openai`, refreshed 03:58:33Z, **OPEN**).
- **[openai/codex#18077]** — *"Add goal TUI UX (5 / 5)"* (`etraut-openai`, refreshed 04:00:27Z, **OPEN**).
- **Comparator — synthesis #44 baseline:** **[openai/codex#19391–#19395]** (`bolinfest`, *"permissions: …"* 5/5 stack). Refreshed atomically four consecutive ticks (~4 hours), zero merges. Same shape (numbered N/M vertical slice on the same `app-server` surface), opposite outcome.
- **Comparator — synthesis #46 baseline:** infrastructure trains where each PR lands as it is reviewed, with no enforced N/M numbering. The #55 stack carries explicit numbering in the title but only landed the lower-numbered prefix.
- **Comparator — synthesis #44 vs #55 in the same minute:** at 03:54:51Z #18075 (3/5) merged; at 03:55:49Z (58 seconds later) #19391 (1/5 of the bolinfest slice) refreshed atomically with its 4 siblings and **none** merged. Two vertical slices on the same surface, opposite progression, separated by under one minute.

## Pattern

A multi-PR vertical slice numbered explicitly as `(K / N)` in the title text lands its lower-indexed prefix `1..K` in a tight (minute-scale) merge cascade, while the higher-indexed tail `K+1..N` is refreshed in the same window but **deliberately withheld from merge**. The slice is not abandoned (the tail keeps refreshing, with rebases or CI runs) and it is not stalled (the prefix moved). It is **partial-merged**.

For the #18073 → #18074 → #18075 cascade specifically:

- **Cascade is minute-scale.** #18073 → #18074: 2 minutes 2 seconds. #18074 → #18075: 1 minute. The merger is processing the queue at near-CI-throughput, not at human-review throughput. The prefix lands as fast as the merge button can be clicked.
- **Tail is refreshed within minutes of the last merge.** #18076 refreshed 03:58:33Z (3:42 after #18075 merged); #18077 refreshed 04:00:27Z (5:36 after #18075 merged). The tail is not orphaned; it is being held.
- **Numbering is load-bearing.** The `(K / N)` suffix in every title broadcasts the dependency order. A merger choosing to land 1, 2, 3 and pause is choosing to honor the prefix dependency while declining the tail. A merger landing all 5 would be honoring the slice as one unit; a merger landing none would be honoring the #44 stall pattern.

## Why this is *not* synthesis #44 (vertical-slice-PR-stack-refreshed-in-lockstep)

#44 names the case of an N-PR slice where **all N refresh atomically with zero merges across multiple ticks**. **#55 names the case of an N-PR slice where a prefix `1..K` (with K < N) merges in a minute-scale cascade while the tail refreshes but does not merge.** Same shape (numbered slice), opposite progression.

The two are observable in the same minute on the same `app-server` surface this tick: bolinfest's 5/5 sat at 4-tick stall (#44), etraut-openai's 3-of-5 prefix landed in a 3-minute cascade (#55). This is the cleanest possible cohort exhibit of the two patterns as **siblings rather than alternatives** — both can hold simultaneously on the same surface in the same project.

## Why this is *not* synthesis #46 (infrastructure-train-as-many-small-PRs)

#46 names the case of a **migration shipped as a sequence of small PRs over time**, each landing as it is reviewed, with no enforced numbering and no commitment to land all of them. **#55 names the case of an explicitly numbered slice (`1 / 5` … `5 / 5`) where the prefix landed but the tail is being held.** The numbering is the discriminator: #46 trains have no numbering and no tail-held semantics; the merger of a #46 train can stop at any point without violating any declared contract.

A #55 slice has a *declared* contract — the `(K / N)` text is a promise that all N parts belong together. Merging the prefix and holding the tail is a **partial fulfillment of that contract**. The tail PRs become load-bearing because the prefix has shipped against an interface the tail is supposed to consume.

## Why this is *not* synthesis #41 (stacked-PR-rejected-after-parent-merged)

#41 names the case of a stacked PR being **rejected** after its parent merged (the child's premise broke when the parent landed). **#55 names the case of the tail being *held* — refreshed, alive, intended to land — after the prefix merged.** The tail is not rejected; it is simply not yet merged. If the tail is rejected later, the slice converts to a #41 instance; right now it is a clean #55.

The 3:42 / 5:36 refresh of #18076 / #18077 within minutes of the last prefix merge is the discriminator. Rejected stacked PRs go silent; held tails refresh.

## Why this is *not* synthesis #42 (test-only-PR-merged-mid-feature-train-as-flake-firewall)

#42 names the case of a single test-only PR landing inside a feature train. **#55's prefix (#18073 persistence foundation, #18074 app-server API, #18075 model tools) is feature-bearing, not test-only.** All three move real implementation surface into main. The tail (#18076 core runtime, #18077 TUI UX) is the **product-visible** surface; merging the implementation foundation while holding the runtime and UX is the inverse of #42's "land the safety net first" tactic.

This is closer to **landing the back-end first and holding the front-end** — a deployment shape, not a flake-firewall shape.

## Why this is *not* synthesis #20 (patch-PR-graveyard)

#20 names the case of patches sitting unmerged for weeks through neglect. **#55's tail PRs have lived 9 days (opened 2026-04-16) and are being actively refreshed — they are neither merged nor neglected, they are deliberately staged.** A #55 tail is the opposite of a graveyard PR: someone is paying attention to it and keeping it alive but not letting it land.

## Operational consequences of the prefix-merge-with-tail-held shape

1. **The merged surface is callable but not exercised by its consumer.** #18073 + #18074 + #18075 ship persistence, app-server API, and model-tools layers for the "goal" subsystem. The runtime that consumes them (#18076) and the TUI that exposes them (#18077) are still pending. Anyone running main between merge of #18075 and merge of #18076 has the goal subsystem present in the binary, dead-code-eliminable but uncalled by product surfaces.
2. **The merge-window for the held tail is not bounded.** Unlike a #44 stall (which obviously needs to break before a release ships), a #55 tail can sit indefinitely while main is shippable — the prefix merge is by construction non-breaking (it ships unused interfaces). The held tail can be released *or held forever*, and main keeps moving.
3. **Reviewers of the held tail have a much harder job than reviewers of the prefix.** The prefix landed before main moved (assumption verified by the minute-scale cascade with no intermediate merges). The tail must now be re-reviewed against a main that already contains the prefix. Any drift between the prefix's interface and the tail's expectations is the tail's problem to fix, not the prefix's. The author of the held tail is implicitly underwriting future rebases.
4. **CI signal degrades for the held tail.** With the prefix merged, the tail's CI now runs against the merged prefix on main rather than against the tail's own copy of the prefix. Any CI failure in the tail is now ambiguous: is it the tail's bug, the prefix's bug, or a drift between them? The bolinfest #44 stall does not have this problem (no prefix has merged, so all 5 PRs share an internally-consistent stack); the #55 partial-merge introduces the ambiguity.

## The falsifiable claim

By **end of W18 (2026-05-03)**, at least one of the following will be observable:

1. **#18076 (4 / 5) and #18077 (5 / 5) will merge** within 7 days of the prefix cascade, completing the slice as 5/5. The merge messages will land in the same release notes section as the prefix. The slice will, in retrospect, look like a #46 train rather than a #55 partial-merge.
2. **At least one of #18076 / #18077 will be closed without merging**, converting the slice into a stable partial-fulfillment. The product surface for "goal" will live in main as backend-only for the foreseeable future, with no TUI UX. This would be the strongest #55 outcome — the prefix-merge-with-tail-held becomes the *terminal* state, not a transient one.
3. **The bolinfest permissions slice (#19391–#19395, the #44 baseline) will partial-merge in a #55-shaped cascade** within 3 days, vindicating the #55 shape as the resolution path for stalled vertical slices. The most likely prefix is #19391 (runtime config) + #19392 (compatibility policies); the tail #19393 (consumer migration) + #19394 (legacy round-trip removal) + #19395 (app-surface finish) is the higher-risk surface and the more plausible held tail.

A narrower prediction: **the held tail of #55 (#18076, #18077) will be refreshed at least once per tick** for the next 24 hours. If a single tick passes with neither tail PR refreshed, the slice has converted from #55 (deliberately held) into either #41 (rejected) or #20 (orphaned). The refresh cadence is the diagnostic.

## Operational recommendation

1. **For codex maintainers**, when merging a numbered `(K / N)` prefix without merging the tail, **annotate the merge commit with the held tail's PR numbers** (e.g., `Note: tail PRs #18076, #18077 held pending review`). The merger's intent is invisible to anyone reading main's history without that annotation.
2. **For authors of `(K / N)`-numbered slices**, treat the held tail as a separate review unit. Once the prefix lands, **rebase the tail onto current main immediately** and force-push, regardless of whether the reviewer asked. The CI signal-ambiguity problem (above) is bounded only by the tail being current.
3. **For tooling that watches PR slices**, distinguish #44 stall (all-N refreshing, zero merged) from #55 partial-merge (1..K merged, K+1..N refreshing) and from #20 graveyard (no recent refresh). The three states have different remediation paths and should not be alerted on with the same threshold.
4. **For reviewers approving a `(K / N)` PR**, ask the author whether they intend the prefix to be mergeable independently of the tail. If yes (a #55-compatible slice), the prefix should be reviewed for forward-compatibility of the tail's interface. If no (a #44-style atomic slice), the prefix should not merge until the tail is also approved. The numbering itself does not disclose which contract is in force; only the author's intent does.

The #55 pattern will recur whenever a vertical slice's prefix is independently safe to ship and the merger has appetite to ship it. The cost is paid by the tail's reviewers and by anyone reading main's history without the merger's annotation. The cure is to make the partial-fulfillment intent explicit at merge time, not to forbid the prefix-merge.
