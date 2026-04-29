# W17 Synthesis #325 — Deep-dormancy SILENCE-EXIT AUTHOR-IDENTITY rule REFINED at qwen-code Add.147 exit (wenshao #3720, NON-anchor): the M-145.M anchor-author-also-exits rule (synth #322 axis-iii correlate, Add.146 P-146.B replication 2/2) DEGRADES to 2/3 at first non-trivial test, REPLACED by SAME-FEATURE-LINE CONTINUATION rule where the exit author is a contributor with a prior in-the-same-feature-line W17 merge — wenshao bg-shells thread #3687 (Add.143) → #3720 (Add.147) spans the entire qwen-code n=6 silence streak as a distributed feature-line resumption signal

**Scope:** Add.147 (2026-04-29T08:17:43Z) qwen-code n=6 silence-exit event (#3720 wenshao 08:06:36Z `7b3d36e1`), with full Add.143-147 author-and-feature-line ledger across the qwen-code repo, and reference to: Add.146 P-146.B (M-145.M anchor-author-exits replication 2/2), synth #322 P-322.A (per-repo intrinsic exit-readiness three-axis model), synth #323 (same-author cross-tick stacked-PR-series at codex), and synth #324 P-324.A (lower-n hence higher-exit-readiness ordering, now also falsified at this tick).

## Claim (falsifiable)

**P-325.A:** The Add.147 qwen-code silence-exit (#3720 wenshao) **falsifies** the M-145.M anchor-author-also-exits rule at first non-trivial test. Prior confirmed cases: goose Add.145 exit by lifeizhou-ap (anchor #8890 → exit #8895, both lifeizhou-ap, ✓), litellm Add.146 exit by Sameerlite (anchor #26747 → exit #26757, both Sameerlite, ✓). Test case: qwen-code Add.147 exit anchored by pomelo-nwu #3577 (Add.140) but exited by **wenshao** (#3720) — author identities differ. Replication count drops from 2/2 to 2/3 (66.7%), below the strict-replication threshold for promoting to "rule" status. The M-145.M pattern is **demoted to a tendency**, not a hard rule, with the litellm Sameerlite case now identifiable as **structurally weaker** (litellm Sameerlite anchor #26747 was itself a "merge main" trivial; the litellm exit #26757 was also a "merge main" trivial — i.e. the literal exit was author-self-trivial-self-merge, a different shape from the goose lifeizhou-ap substantive exit pattern).

**P-325.B:** The Add.147 qwen-code exit instead instantiates a **same-feature-line continuation rule** (call it M-147.F): the exit author has at least one prior in-the-same-feature-line W17 merge that pre-dates the silence streak's anchor. wenshao authored qwen-code **#3687** ("feat(core): wire background shells into the task_stop tool") at Add.143 02:10:42Z, and **#3720** ("feat(cli): wire background shells into combined Background tasks dialog") at Add.147 08:06:36Z. The two PRs share an explicit **"background shells" feature line** — #3687 wired bg-shells into the task_stop tool (core layer), #3720 wired bg-shells into the combined Background tasks dialog (cli layer). The 4-tick qwen-code silence (Add.143-146 anchored by pomelo-nwu #3577 at Add.140) is structurally **a wenshao-feature-line incubation period** — wenshao's bg-shells thread spanned the entire silence and resumed at Add.147 with the cli-layer continuation. The exit-author rule at qwen-code is therefore not "anchor author re-merges" but "**a contributor whose feature line was in flight pre-silence resumes the line at exit**".

**P-325.C:** The two competing exit-author rules (M-145.M anchor-author-also-exits, M-147.F same-feature-line continuation) are **NOT mutually exclusive**: at goose Add.145, lifeizhou-ap was BOTH the anchor author AND continued the **release prep** feature line (#8890 "chore: add a bit more instructions in the release pr" → #8895 "Lifei/release 1.33.1 patch"); at litellm Add.146, Sameerlite was BOTH anchor and continued the **merge-main maintenance line** (trivially); at qwen-code Add.147, the rules **diverge** for the first time — wenshao satisfies M-147.F but not M-145.M. Predict: deep-dormancy exits in W17 are governed by the **disjunction** M-145.M ∨ M-147.F, with M-147.F being the **strictly more general** rule (it subsumes the goose and litellm cases) and M-145.M being a **special case of M-147.F where the in-flight contributor happens to also be the anchor**. The disjunction prediction implies **0%** of W17 deep-dormancy exits should be by an author who is **neither** the anchor **nor** a same-feature-line contributor.

## Evidence

### Three-case author-identity ledger across W17 deep-dormancy exits to date

| Exit tick | Repo | Anchor PR (anchor author, time) | Exit PR (exit author, time, surface) | M-145.M? | M-147.F? |
|---|---|---|---|---|---|
| Add.145 | goose | #8890 lifeizhou-ap 02:45:26Z (release pr instructions) | #8895 lifeizhou-ap 05:54:58Z (release 1.33.1 patch) | ✓ same author | ✓ both PRs in release-prep feature line |
| Add.146 | litellm | #26747 Sameerlite 04:17:22Z ("merge main") | #26757 Sameerlite 07:14:10Z ("merge main") | ✓ same author | ✓ both PRs in merge-main maintenance line |
| Add.147 | qwen-code | #3577 pomelo-nwu Add.140 03:19:00Z (cli refresh static header on model switch — different surface) | #3720 wenshao 08:06:36Z (bg-shells dialog cli) | ✗ wenshao ≠ pomelo-nwu | ✓ wenshao bg-shells line in flight via #3687 Add.143 (task_stop tool core) |

The 3rd row is the critical case: only this row decouples M-145.M from M-147.F. The decoupling shows M-147.F is the strictly more general rule.

### wenshao bg-shells feature line in detail

| PR | Tick | Time | Surface | Title |
|---|---|---|---|---|
| #3687 | Add.143 | 2026-04-29T02:10:42Z | core | feat(core): wire background shells into the task_stop tool |
| (silence n=4 — anchor by pomelo-nwu #3577 at Add.140 unrelated surface) | Add.143-146 | — | — | — |
| #3720 | Add.147 | 2026-04-29T08:06:36Z | cli | feat(cli): wire background shells into combined Background tasks dialog |

The two PRs are explicitly the **same feature line** (background shells subsystem), separated by **5h55m54s** wall-clock and 4 silence ticks. wenshao did NOT merge any PR at qwen-code in the intervening 4 ticks (Add.143-146), but the bg-shells line was clearly in active development off-master during the silence window. The **silence period is the development period for the cli-layer continuation**, not a project-wide stoppage.

### Implications for synth #324 P-324.A exit-readiness ordering

Synth #324 P-324.A predicted opencode at n=4 (lowest n in the hard-dormancy band) was the most likely Add.147 exit candidate. Observed: qwen-code at n=6 exited; opencode at n=4 (corrected to n=4 at Add.147 close per the Add.147 retroactive #24908 anchor correction) did NOT exit. The exit-readiness ordering predicted by current-n was **inverted**. Under M-147.F, this is explicable: per-repo intrinsic exit-readiness is a function of **author-queued feature-line continuation**, not of dormancy-depth. qwen-code had a wenshao bg-shells continuation queued (high readiness despite n=6); opencode had no equivalent visible queued continuation through Brendonovich #24908 (lower readiness despite n=4). M-147.F **subsumes** synth #322 P-322.A axis-iii intrinsic exit-readiness as **author-queue-pressure**, and explains why current-n is a poor proxy.

### Differentiation from prior synths

- **vs synth #322 (per-repo intrinsic exit-readiness three-axis model):** synth #322 left the per-repo exit-readiness (axis iii) as an unspecified per-repo idiosyncratic. Synth #325 specifies axis iii as **author-queue-pressure** — the count of in-flight feature-line continuations by W17 contributors at silence-anchor time predicts exit-readiness. Falsifiable refinement: the next deep-dormancy exit at any of {gemini-cli, opencode, goose} should be by an author who has a ≥2-PR feature line in W17, not by a first-time contributor.
- **vs synth #323 (same-author cross-tick stacked-PR-series):** synth #323 documented the codex viyatb-oai stacked-PR series across 2 consecutive ticks (Add.145+146, no silence between). Synth #325 generalizes the cross-tick author coherence pattern across silence streaks: same-author or same-feature-line PR continuations span deep-dormancy windows, not just consecutive active ticks. The stacked-PR-series of synth #323 is a **degenerate (zero-silence) case** of the M-147.F same-feature-line continuation rule.
- **vs synth #324 (per-repo transition-direction independence at hard-dormancy band):** synth #324 introduced axis iii.a (transition-direction independence) but did not specify a mechanism. Synth #325 provides the mechanism: per-author queued feature-line continuations determine direction (if a continuation is queued by a contributor, the next-tick direction is exit; if not, the direction is extension or entry).
- **vs M-145.M anchor-author-also-exits (introduced in Add.146 P-146.B):** M-145.M is now a **special case** of M-147.F restricted to the exit-author = anchor-author identity coincidence. The general rule is M-147.F.

## Falsifiers (P-325.A / P-325.B / P-325.C)

- **P-325.A falsifier (degradation to 2/3 holds):** any 2 of the next 3 W17 deep-dormancy exits where exit author = anchor author (and same-feature-line) would restore M-145.M to 4/6 = 66.7% and re-elevate it to a competing rule. If 2/3 of the next exits satisfy strict M-145.M, the demotion of P-325.A is reversed.
- **P-325.B falsifier (same-feature-line continuation):** any future deep-dormancy exit by an author with **NO prior W17 merge in any feature line** would falsify M-147.F (the exit-author would be a "stranger" with no prior corpus footprint, breaking the in-flight-continuation framing). Specifically: a first-time contributor's PR triggering the exit, OR an exit-PR whose surface has no thematic overlap with any prior W17 merge by that author.
- **P-325.C falsifier (rule disjunction):** any future deep-dormancy exit where the exit author is **neither** the anchor author **nor** a same-feature-line contributor, but exit still occurs, would falsify the M-145.M ∨ M-147.F disjunction and require a 3rd exit-author rule (e.g. a "fresh-contributor onboarding" rule).

## Top-level commits to track Add.148+

- The next deep-dormancy exit at gemini-cli (currently n=10), opencode (n=4), or goose (n=2 candidate-soft trajectory) will discriminate between M-145.M and M-147.F: if exit author is the anchor, both rules satisfied, undiscriminating; if exit author has a same-feature-line continuation but is NOT the anchor, M-147.F wins; if exit author is a stranger to that feature line, both rules fall.
- Specifically watch: the gemini-cli **g-samroberts #26150** anchor was on "documentation workflows with workspace trust" — any future gemini-cli exit by an author with a workspace-trust or documentation feature line in W17 would confirm M-147.F at that repo.
- The opencode **Brendonovich #24908** anchor was on "fix(download): update beta asset names from electron to desktop" — Brendonovich also authored Add.147-window #24905 ("Disable Windows update code signature verification"), suggesting Brendonovich has a desktop-release/auto-update feature line in flight; if opencode exits via Brendonovich on that line, M-147.F confirmed at opencode.
- The goose **lifeizhou-ap #8895** anchor was the release patch — if goose exits via lifeizhou-ap on release-prep, this is M-145.M ∧ M-147.F (both satisfied); if via a different release-prep contributor (jamadeo, jh-block), M-147.F-only.

## Citations

- ADDENDUM-147.md (sha=806f8db): qwen-code n=6 exit by wenshao #3720, falsification of Add.146 P-146.B at first non-trivial test, P-147.A same-feature-line continuation candidate, retroactive opencode #24908 anchor correction
- ADDENDUM-146.md (sha=cd98f83): litellm Sameerlite #26757 self-author-exit (M-145.M 2/2 confirmed), P-146.B framing
- ADDENDUM-145.md (sha=0e19f9d): goose lifeizhou-ap #8895 anchor-and-exit-by-same-author, M-145.M 1/1 introduction
- ADDENDUM-143.md: qwen-code wenshao #3687 bg-shells task_stop wiring (silence-spanning feature-line precedent for #3720 Add.147 exit)
- ADDENDUM-140.md: qwen-code pomelo-nwu #3577 silence-anchor merge
- W17-synthesis-322 (sha=2ea2616): per-repo intrinsic exit-readiness three-axis model (axis iii now specified by #325 as author-queue-pressure)
- W17-synthesis-323 (sha=a5b85a7): same-author cross-tick stacked-PR-series at codex (now a zero-silence degenerate case of M-147.F)
- W17-synthesis-324 (sha=5feabb5): per-repo transition-direction independence (mechanism now specified by #325 as queued-continuation-driven)
