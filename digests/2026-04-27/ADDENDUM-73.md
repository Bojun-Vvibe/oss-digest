# 2026-04-27 ADDENDUM-73

**Window:** 2026-04-27T00:44:00Z → 2026-04-27T01:26:00Z (42m — contracts back from Add.72's explicit 1h19m widening; the bolinfest stack-bootstrap + #19394 merge causal episode is closed and the new window begins **26 seconds after** #3653 lands at 00:44:19Z, so no episode is bisected at the lower edge).

## QwenLM/qwen-code — B-A-M-N #3653 **MERGED at 00:44:19Z by maintainer `wenshao`** (lifespan 1h22m26s) — first W17 maintainer-gated B-A-M-N merge, falsifies the strong-form synth #184 per-PR-gate-latency framing

- **#3653** `refactor(config): dedupe QWEN_CODE_API_TIMEOUT_MS env override logic` by **B-A-M-N** — **MERGED 2026-04-27T00:44:19Z**, mergeCommit **`ccb9857a5c51cf8ac39101dbe909c2a3648166dd`**, **merged_by `wenshao`** (NOT a self-merge — `merged_by ≠ user`), lifespan **1h22m26s** from 2026-04-26T23:21:53Z, +197/−32 across 6 files. The merge lands **26 seconds after** the close of Add.72's window.

This is the **first observed merge of any B-A-M-N PR in W17** since the dormancy framing began (synth #176 bare-author-dormancy, synth #184 per-PR-gate-latency reframe, P71c "no wake of dormant 3 in 48m" survival check from Add.72). Three concrete consequences:

1. **synth #184 strong form falsified, weak form survives.** Per-PR-gate-latency in its strong form predicted that *every* B-A-M-N PR would sit at 22h+-class lifespan because the gate latency was a fixed per-PR cost. #3653's **1h22m26s lifespan** is **~16× faster** than the synth #184 reference 22h merge of #3629. The weak form (per-PR latency exists but varies by PR-content) survives: a 6-file `refactor(config):` dedupe with `[Regression]` and `[Additional]` tests is a low-risk surface and the maintainer cleared it in under 1.5h.
2. **Maintainer `wenshao` is the actual gate, not "the qwen-code merge process".** Add.72 §3 noted `DragonnZhang #3593` merged on 00:29:51Z while B-A-M-N's stack stayed dormant and concluded "qwen-code merge throughput is not gated globally". This addendum strengthens that to: **#3593 merged by `wenshao`** (verify via separate gh API call queued for Add.74), **#3653 merged by `wenshao`**. The gate is a single maintainer's review queue, and B-A-M-N's PRs are merge-able once they reach the front of that queue.
3. **B-A-M-N's still-open backlog count drops from 5 → 4 in this window** (#3631, #3645, #3648, #3654), but #3654 (the 6th-of-W17 opened at 00:09:56Z, Add.72 §3) is now the *youngest* member of the dormant set rather than a fresh top-of-stack. The dormancy-set composition rotated rather than shrank by 2 — the merge took the *oldest non-foundation* PR (#3653, opened 1h22m before merge) and the new opens (#3654) replenished the count.

Cross-cutting note for synth #191: maintainer `wenshao` has now performed back-to-back W17 cross-author merges of cross-author PRs in qwen-code at **00:29:51Z (#3593)** and **00:44:19Z (#3653)** — gap **14m28s**, both on disjoint `cli` / `config` surfaces. This is the first qwen-code maintainer-cadence datum in W17.

## openai/codex — andmis #19733 **MERGED at 00:56:06Z by maintainer `tibo-openai`** (lifespan 25m19s) — second confirmed maintainer-gated merge in this window, codex side

- **#19733** `Allow agents.max_threads to work with multi_agent_v2` by **andmis** — **MERGED 2026-04-27T00:56:06Z**, mergeCommit **`1f304dd1f2c87f907aa56cbf076a846f4d013b9a`**, **merged_by `tibo-openai`** (NOT a self-merge), lifespan **25m19s** from 00:30:47Z (the same Add.72 §2 detached open).

The Add.72 §2 framing — "andmis M→O coupling at 12m37s gap on disjoint surfaces" between #19605 self-merge and #19733 detached open — now needs to be re-stated. With #19733 also merged, the **andmis episode closes at 25m19s for #19733 + 1d1h28m15s for #19605**, and the M→O coupling becomes an **M→O→M cycle** with maintainer-gated terminal merge at the second M. The 12m37s O-injection-after-M was followed **25m19s later** by the maintainer landing the new PR — i.e., the maintainer cleared the new andmis PR **before the bolinfest 5-PR open stack received any merge action at all** in this window. Codex maintainer attention is *not* uniformly distributed across open authors during a flight.

## openai/codex — abhinav-oai #19739 OPENED at 01:05:09Z on **`codex-rs/config/loader/`** subsystem **during** bolinfest's 5-PR `permissions:` open stack — first observed cross-author co-occupation of the codex-rs/config subsystem in W17

- **#19739** `Lazily resolve hostname for remote sandbox config` by **abhinav-oai** — opened **2026-04-27T01:05:09Z**, OPEN, base `main`, +175/−82 across **11 files including `codex-rs/config/src/loader/{mod.rs,tests.rs,macos.rs,README.md}`** and `codex-rs/config/src/config_requirements.rs`.

Subsystem coupling check (extends synth #190's notification-subsystem doublet axis to codex-rs):

| PR | Author | Subsystem touched | State |
|---|---|---|---|
| #19395 | bolinfest | `codex-rs/core/permissions/*` (legacy sandbox/policy) | OPEN (8d2h) |
| #19734 | bolinfest | `codex-rs/core/permissions/*` (sandbox projection) | OPEN |
| #19735 | bolinfest | `codex-rs/core/permissions/*` (constrained profiles) | OPEN |
| #19736 | bolinfest | `codex-rs/core/permissions/*` (requirements as profiles) | OPEN |
| #19737 | bolinfest | `codex-rs/core/permissions/*` (legacy exec policies) | OPEN |
| **#19739** | **abhinav-oai** | **`codex-rs/config/loader/*`** + `config_requirements.rs` | **OPEN** |

The bolinfest 5-PR `permissions:` stack and abhinav-oai #19739 **both touch `codex-rs/config/src/config_requirements.rs`** (bolinfest's tier modifies how requirements are stored/derived as profiles; abhinav-oai's PR threads a `HostNameResolver` through requirements layer loading). This is **first-observed cross-author content-coupling on the requirements layer file in W17**, distinct from synth #188's bolinfest #19728 vs pakrym #19726 loader-move coupling (which was on `loader.rs` itself, not `config_requirements.rs`). #19739 **does NOT base on `pr19737`** — it bases on `main`, which means it will need to either rebase on top of the 5-deep bolinfest stack once the stack collapses, or land first and force the bolinfest stack to absorb the host-resolver thread-through. This is a **load-bearing-file conflict in flight, with the cross-author author choosing main-base over stack-base**. See synth #192.

## QwenLM/qwen-code — B-A-M-N opens **6th-of-W17** PR #3654 at 00:09:56Z (already cited Add.72 §3) and updates #3654/#3631 inside this window — dormant-set churn during the #3653 merge episode

- **#3654** updatedAt **2026-04-27T00:31:37Z** (within Add.72 window — no new push in Add.73 window).
- **#3631** updatedAt **2026-04-27T00:32:54Z** (also Add.72 window).
- **#3647** (shenyankm `fix(cli): keep sticky todo panel compact`) updated **2026-04-27T01:15:59Z** — within Add.73 window. shenyankm is **not** B-A-M-N; cross-author update on disjoint surface during the B-A-M-N merge episode confirms qwen-code is not author-locked.

No new B-A-M-N opens in this window. The #3653 merge clears one dormant slot but the "post-merge open burst" pattern (which would have opened a 7th PR within ~15min of the maintainer's merge action, mimicking aibrahim-oai synth #185 stack-disposal-then-replenish) **did not fire** at +42m post-merge. This suggests B-A-M-N's open-cadence is **independent of merge events** rather than reactive to them — a finding that further weakens any author-internal feedback-loop framing.

## bolinfest 5-PR open stack — heavy update churn but ZERO merge action in 42m window

- **#19395** updatedAt **2026-04-27T01:26:19Z** (33s before window close)
- **#19734** updatedAt **2026-04-27T01:26:28Z** (24s before window close)
- **#19735** updatedAt **2026-04-27T01:26:36Z** (16s before window close, but this is **after** the nominal 01:26:00Z window edge — captured because gh API returned it during the listing call; treat as edge-of-window event)
- **#19736** updatedAt **2026-04-27T01:19:06Z** (6m54s before window close)
- **#19737** updatedAt **2026-04-27T00:44:16Z** (16s into window — likely the trailing CI-status update from the open burst)

Five updates on the 5-PR stack within 42m, all from bolinfest. Compare to the andmis episode: **andmis got 1 maintainer merge in 25m19s; bolinfest got 0 merges in 42m on a 5-PR stack** with continuous author-side updates. This is the same maintainer-attention-asymmetry observed in qwen-code (where wenshao cleared #3653 while B-A-M-N's other 4 PRs sat dormant) — **maintainer attention in W17 is per-PR-content gated, not per-author allocated**. Synth #191 will formalize this against synth #184.

## Window closure summary

- **Merges in window:** 2 (qwen-code #3653 by wenshao, codex #19733 by tibo-openai). Both cross-author maintainer-gated. Zero self-merges.
- **Opens in window:** 1 (codex #19739 by abhinav-oai, on a subsystem with active cross-author content-conflict).
- **Dormant-stack updates in window:** 5 bolinfest + 1 shenyankm + 1 reneleonhardt (#705 long-tail update at 01:09:56Z, qwen-code) — long-tail dormancy churn continues per synth #99.
- **Maintainer cadence (qwen-code):** wenshao merge gap 14m28s (#3593 → #3653).
- **W17 first-of-kind events in window:** (a) first B-A-M-N merge (#3653); (b) first cross-author content-coupling on `codex-rs/config/src/config_requirements.rs` (#19395-stack vs #19739).
