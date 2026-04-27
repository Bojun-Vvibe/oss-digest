# 2026-04-27 ADDENDUM-77

**Window:** 2026-04-27T03:03:06Z → 2026-04-27T03:29:27Z (26m21s — opens on Add.76 close; closes on the gh-API capture timestamp).

## openai/codex — abhinav-oai #19739 MERGED at 03:18:58Z, 36m18s AFTER bolinfest #19395; P192a's directional inversion now fully resolved (both PRs cleared, ordering opposite to prediction)

**#19739** `inline hostname resolution for remote sandbox config` (abhinav-oai, head `abhinav/lazy-remote-sandbox-hostname` → base `main`, +11/−215 on **11 files**, createdAt **2026-04-27T01:05:09Z**) merged at **2026-04-27T03:18:58Z** with mergeCommit `c3e60849e56b2d9d3d8ff627d89772a117ad265a`. Lifespan **2h13m49s**.

**P192a falsification context, completed.** Add.76 recorded P192a (synth #192's prediction "abhinav-oai #19739 merges before #19395 within 24h of 01:26:00Z, probability ~0.55") as falsified at 02:42:40Z when **#19395 cleared first**. With #19739 now merged at **03:18:58Z**, the full ordering is established:

| PR | Author | createdAt | mergedAt | Lifespan |
|---|---|---|---|---|
| #19395 | bolinfest | 2026-04-24T16:02:58Z | **2026-04-27T02:42:40Z** | 2d10h39m42s |
| #19739 | abhinav-oai | **2026-04-27T01:05:09Z** | 2026-04-27T03:18:58Z | 2h13m49s |

Inter-merge gap: **36m18s** (#19395 → #19739). The "fast small-PR-on-main beats slow chained-stack" intuition that motivated P192a holds in absolute terms (#19739's 2h13m49s lifespan is **27.4×** shorter than #19395's 2d10h39m42s), but #19739 is **flat-on-main** itself — head `abhinav/lazy-remote-sandbox-hostname` → base `main`, not chained — so the actual chained stack (bolinfest #19734–#19737) is still **0/4 merged** at Add.77 close, lifespan **2h49m06s–2h49m10s**. P192a's underlying intuition stays consistent with observed evidence; only the prediction's specific ordering between two flat-on-main PRs was wrong.

**Diff-shape contrast.** #19739 is +11/−215 on 11 files (deletion-heavy: 19.5× more lines removed than added). #19395 is +295/−148 on 11 files (addition-heavy: 2.0× more added than removed). Same file-count (11), opposite-signed churn balance — both cleared in the same 36m18s window.

## openai/codex — etraut-openai #19753 + bryanashley #19751 OPEN within 2m53s as second cross-author flat-on-main near-simultaneous-open observation in W17 (both base=main, both unrelated surfaces, post-#19739-merge stagger)

Two new codex opens in the strict Add.77 window:

| PR | Author | Title | head | createdAt | Diff | Files |
|---|---|---|---|---|---|---|
| #19751 | bryanashley | `Add opaque identity and make available to pass through to remote contracts` | `bryanashley/rust-mt-as-exploration` | **2026-04-27T03:23:05Z** | +258/−8 | 12 |
| #19753 | etraut-openai | `Terminate stdio MCP servers on shutdown` | `etraut/mcp-lifecycle-management` | **2026-04-27T03:25:58Z** | +343/−25 | 9 |

**Open-gap:** #19753 opens **2m53s after** #19751. Both are flat-on-`main` (no chained-stack relationship). Both authors distinct. Surfaces are **disjoint**: #19751 touches remote-contract identity passthrough (Rust mt_as exploration); #19753 touches MCP server lifecycle (stdio termination on shutdown). No file-set overlap is implied by branch names, distinct from the synth #198 yiliang/shenyankm collision pattern (where both authors touched `cli/sticky todo`).

**Same-second-cardinality discriminator:** the synth #192 4-PR same-second open-tuplet was single-author (one author opening 4 disjoint surfaces in 1 second). The synth #198 yiliang/shenyankm collision was cross-author with **shared file-set**. This Add.77 pair is **cross-author with disjoint surface** at 2m53s gap — a third intermediate cardinality. Predict: zero merge interference, both PRs proceed on independent review timelines (no maintainer adjudication needed since file-sets do not overlap).

**Stagger from preceding merge:** #19751 opens 4m07s after #19739 merged (03:18:58Z). #19753 opens 7m00s after. The two new opens cluster after the most recent codex merge but precede any further merge in this window — typical "post-merge-clear-the-queue" rhythm.

## QwenLM/qwen-code — B-A-M-N #3654 CLOSED at 03:26:26Z (1-line trivial diff, 3h16m30s lifespan); third terminal event in B-A-M-N #3651/#3653/#3654 same-author triplet, third closes-without-merge

**#3654** `refactor: unify tool execution logic across Interactive, Non-Interactive, and ACP modes` (B-A-M-N, head `refactor/unify-tool-execution-3247` → base `main`, +1/−0 on **1 file**, createdAt 2026-04-27T00:09:56Z) closed-without-merge at **2026-04-27T03:26:26Z**. Lifespan **3h16m30s**.

The B-A-M-N qwen-code series this window:
- **#3651** CLOSED earlier (synth #196 record — first close-then-resubmit; original of byte-shrunk pair).
- **#3653** MERGED 2026-04-27T00:44:19Z, mergeCommit `ccb9857a5c51cf8ac39101dbe909c2a3648166dd` (synth #196 record — shrink-rewrite that landed in 1h22m26s).
- **#3654** CLOSED at **03:26:26Z** with a **1-line diff** (+1/−0 on 1 file) — minimum-possible non-empty diff.

The 1-line diff on a refactor titled `unify tool execution logic across Interactive, Non-Interactive, and ACP modes` is anomalous: a refactor with that title-scope on a single 1-line addition either (a) cites prior work in #3653 and adds a one-line cap, (b) was a placeholder PR opened with intent to grow, or (c) is a misclick / draft-state artifact. The CLOSED outcome at 3h16m30s lifespan suggests the maintainer (or the author themselves) judged the 1-line diff unmergeable against the title's announced scope.

This makes B-A-M-N's same-window record on this surface: **2 CLOSE-without-merge events (#3651, #3654) + 1 MERGE event (#3653) + 1 OPEN trailing (#3648 `fix(acp): repair integration against current core API`, opened 2026-04-26T15:00:01Z, still open at 12h28m26s)**. **3-of-4 PRs in B-A-M-N's W17 same-author qwen-code burst are non-merge terminal events.** Synth #196's "single-author close-then-reopen with diff-shrinkage" topology now has a same-author **second-close** (not reopen, just close) trailing the merge — a four-state same-author signature: open → close → reopen-shrunk → merge → followup-open → second-close → still-open(#3648).

## BerriAI/litellm — same-second close pair #26054/#26216 at 03:26:24Z/03:27:26Z (62-second gap) on `litellm_internal_staging` base + new restato #26568 + Sameerlite #26569 opens; staging-branch close-and-rotate cycle visible

Two `litellm_internal_staging`-base closes in this window:

| PR | Author | Title | createdAt | closedAt | Age | Diff |
|---|---|---|---|---|---|---|
| #26054 | geraint0923 | `fix(format): fix the format lint` | 2026-04-19T05:50:51Z | **03:26:24Z** | 8d21h35m33s | **+0/−0 on 0 files** (empty) |
| #26216 | krrish-berri-2 | `Litellm oss staging 04 21 2026` | 2026-04-22T03:19:36Z | **03:27:26Z** | 5d0h7m50s | +4501/−231 on 55 files |

Inter-close gap: **62 seconds**. Both base=`litellm_internal_staging` (not `main`). Both never merged.

**#26054 is empty (+0/−0 on 0 files)** — a no-content PR that sat for 8d21h35m before close. Likely a drained or rebased-away formatting PR whose actual content already landed via another route. The close is housekeeping.

**#26216 is a maintainer's rolling staging branch** (krrish-berri-2 = Krrish Dholakia, litellm core maintainer): a 4501-line additions / 55-file PR titled `Litellm oss staging 04 21 2026`. Closed without merge at 5d age. Concurrent with this close, **Sameerlite opens #26569** at **03:26:57Z** (titled `Litellm oss staging 04 21 2026 2`, 27 seconds before #26216 closed) — the literal `_2` suffix and identical date stem signals **branch-rotation: previous staging PR closed, successor PR opened against same base 27 seconds before predecessor's close**. Compare with synth #196's close-then-reopen: there the close-reopen is **author-internal-rewrite** of a feature PR; here it is **maintainer-team rotational replacement** of a date-stamped weekly staging branch. Different topology — the new PR is not a rewrite of the closed PR, just the next instance in a recurring weekly cadence (`04_21_2026` → `04_21_2026_2` = same intended date-anchor, second iteration).

**Open in window: restato #26568** `feat(arize): emit prompt-caching tokens as OpenInference span attributes` opened **02:33:43Z** (just before Add.76's window-opener cutoff; tracked here for completeness), still OPEN at 55m44s lifespan. Sameerlite #26569 opens at **03:26:57Z**, OPEN at 2m30s at Add.77 close.

## Window closure summary

- **Merges in window (03:03:06Z → 03:29:27Z):** 1 (codex #19739 at 03:18:58Z, abhinav-oai).
- **Opens in window:** 3 (codex #19751 bryanashley 03:23:05Z; codex #19753 etraut-openai 03:25:58Z; litellm #26569 Sameerlite 03:26:57Z).
- **Closes-without-merge in window:** 3 (qwen-code #3654 B-A-M-N 03:26:26Z; litellm #26054 geraint0923 03:26:24Z; litellm #26216 krrish-berri-2 03:27:26Z).
- **Active prediction state:**
  - **P192a (synth #192)** remains FALSIFIED (recorded in Add.76 at 02:42:40Z). With #19739 now merged at 03:18:58Z, both PRs cited in P192a have cleared with the predicted-loser-in-ordering (#19395) clearing first. **Net P192a outcome: directionally inverted; magnitude correct (#19739 was indeed faster end-to-end, just opened later).**
  - **P198a (synth #198, prob ~0.55):** #3647 (shenyankm sticky-todo survivor) remains OPEN at Add.77 close. Lifespan **12h38m00s** at 03:29:27Z. 24h window remaining: 14h33m39s. Status: pending.
  - **P198b (synth #198, prob ~0.30):** yiliang114 has **not** opened a new qwen-code PR in this window. yiliang114's #3618 (vscode-companion slash commands) remains the only yiliang114 open PR. 7d window remaining: 6d20h33m39s. Status: pending.
  - **P198c (synth #198, prob ~0.50):** maintainer ancient-PR close-burst follow-up — at Add.77 close (03:29:27Z, +1h25m35s after the #2504 close at 02:17:52Z), **zero additional ancient closes** observed in qwen-code (B-A-M-N #3654 closed but with 3h16m30s lifespan, NOT ancient). Prediction needs 6h window (until 09:03:06Z) to evaluate; 4h33m39s remaining. Status: pending, **leaning falsified** at +1h25m if no further ancient triage occurs in next 4h.
- **W17 first-of-kind events surfaced in this window:**
  - (e) **Cross-author near-simultaneous flat-on-main open with disjoint surfaces** — codex #19751 (bryanashley) + #19753 (etraut-openai), 2m53s gap, no file-set overlap implied. Distinct from synth #198 collision (overlapping surface) and synth #192 4-PR same-second (single-author).
  - (f) **Maintainer-team rotational staging-branch replacement at 27-second precede-and-close lag** — litellm #26569 opens 27s before #26216 closes, both `Litellm oss staging 04 21 2026[_2]` identifiers, both base=`litellm_internal_staging`. Open-precedes-close by 27 seconds suggests workflow-driven open-then-rotate, not author-driven rewrite.
  - (g) **Same-author 4-PR W17 burst with 3-of-4 non-merge outcomes** — B-A-M-N's #3651 close → #3653 merge → #3654 close → #3648 still-open. Three closes-without-merge with one merge in between. Distinct from synth #196's clean two-state close→reopen-merge.
- **Author cardinality in 03:03:06Z–03:29:27Z strict window:** 6 distinct authors with terminal events (abhinav-oai merge; bryanashley + etraut-openai + Sameerlite opens; B-A-M-N + geraint0923 + krrish-berri-2 closes — 7 events, 6 authors since krrish-berri-2's PR was closed by maintainer action visible as Sameerlite-rotation; counting strict actor-of-event: abhinav-oai, bryanashley, etraut-openai, Sameerlite, B-A-M-N, geraint0923, krrish-berri-2 = 7).
