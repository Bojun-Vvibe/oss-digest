# 2026-04-26 ADDENDUM-64

**Window:** 2026-04-26T17:48:00Z → 2026-04-26T18:24:04Z (36m04s — 20% wider than Add.63's 30m, continuing the slow window-width creep started Add.62→63).

## Cross-repo cardinality jumps from 3 → 2 with full membership turnover — synth #171 P-171.A and P-171.C **falsified together**

Active-repo set this window: **sst/opencode + block/goose**.
- Add.63 active triple: {qwen-code, litellm, cline} — synth #171 declared {qwen-code, litellm} as the persistent core.
- Add.64 active set: **{opencode, goose}** — neither qwen-code nor litellm shows a state-change event. **The persistent-core finding (synth #171 P-171.A) collapses at one-window horizon** — qwen-code AND litellm both dropped simultaneously.
- Cardinality drops from 3 to 2 — the three-window cardinality-stable run (Add.61/62/63) ends at exactly four windows would-have-been. P-171.C (third-slot rotation continues with a third distinct repo) is **also falsified** — there is no third slot, the entire active set rotated.
- This is the **first observed full-active-set turnover within a single window-pair** in W17 — Add.63 → Add.64 shares zero repos. Distinct from synth #167's halving (which preserved {qwen-code, litellm}); distinct from synth #163's regime collapse (which preserved one repo). See synth #173.

## sst/opencode — wake-up burst, 4 PR-state-change events, ends 3-window opencode silence

- **#24519** `fix: allow deepseek reasoner and chat to have variants since they are now v4 flash` by **rekram1-node** — head `9d6718131ead6cbe470f548c95373276075612b8`, **CLOSED without merge** at 17:52:29Z, 4m16s after createdAt 17:48:13Z. Sub-5-minute self-close on deepseek-v4-flash variant addition. Cross-repo echo of cline #10414 (richpix, "Update: Deepseek reasoner check to include v4-pro") and cline #10418 (Jabca, "add deepseek-v4 models"). **Three repos within W17 each touching deepseek-v4 reasoner/chat surface independently**; opencode's #24519 is the only one of the three that closed itself within minutes — synth #59 sub-15-minute self-close pattern recurs here on a model-catalog surface, NOT a flaky-test surface. **Synth #59 generalizes**: sub-15min self-close is not specific to test-flake; it now covers model-catalog drift fixes.
- **#24518** `feat(httpapi): bridge event stream` by **kitlangton** — head `2b98b9a6f4bc5641fcd62baaa8ee5af95e038f0d`, **OPEN**, base dev, createdAt 17:34:57Z (13m03s pre-window), no further state change. Continuation of kitlangton's W17 httpapi-bridge stream: #24485 (read routes, MERGED 15:49:11Z), #24486 (lifecycle MERGED 15:50:27Z), #24487 (mutations MERGED 16:00:03Z), #24510 (remaining session MERGED 16:24:20Z), now #24518 (event stream). **kitlangton's MMM-M-O ladder** — four atomic merges followed by a fifth open continuation on the same `httpapi` surface family within ~3h41m, no rejection cycle observed.
- **#24515** `feat(tool): add patch_file, ast_query, ast_edit — hash-anchored + AST-native editing` by **r3vs** — head `553e737087e9389614d552f22211812dafc357fa`, **OPEN**, base dev, **updated 18:08:31Z** (60m pre-update lag from createdAt 17:08:41Z). First-time r3vs touch in the tracked addendum sequence; large-surface tool-add with AST-native semantics — distinct from the model-catalog and httpapi families dominating W17 opencode merges.
- **#24509** `fix: preserve enterpriseUrl through OAuth/PAT callback for self-hosted GitLab` by **deve1993** — **CLOSED without merge** at 18:16:11Z, 2h01m after createdAt 16:14:55Z. Self-hosted-GitLab OAuth fix abandoned without merge; this is the second close-without-merge on opencode this window (#24519 was first), bringing window close-without-merge count to **2** — synth #152 P-152.A null-result streak (zero closes-without-merge across windows) **breaks at window 12**. The 11-consecutive-window null run ends in this window with two simultaneous closes.

## block/goose — silence break at window-9 boundary via angiejones MERGE on context-window indicator

- **#8851** `colorize context window indicator` by **angiejones** — head `23cb4e9e47474fd3f868f101f4816d7d9830e350`, **MERGED** at 18:00:35Z, base main. createdAt 2026-04-26T00:28:15Z (17h32m pre-merge — long-tail PR), updated 18:00:36Z. **First goose touch since Add.54** (9 consecutive silent windows broken). Merge-mode silence-break, NOT open-mode like cline's Add.63 break (Jabca #10418 was an OPEN debut-author touch).
- Silence-break sub-modes now distinguishable: cline (Add.63) broke via debut-author-OPEN-additive; goose (Add.64) breaks via established-author-MERGE-completion (angiejones is the same author who merged #8838 on 2026-04-25 at 02:20:10Z, the prior most-recent goose merge). **Two distinct silence-break shapes within two consecutive windows on different repos** — see synth #173 for the silence-break taxonomy split.

## openai/codex — bolinfest stack post-rebase#23 dormancy now ≥169m31s — synth #170/#171 unbounded reading **further confirmed at +87% over synth #166 envelope**

- bolinfest stack rebase#23 fired at 2026-04-26T15:34:33Z. Add.63 measured dormancy ≥133m27s (+47% over the 90m33s envelope of synth #166).
- Add.64 window-close 18:24:04Z, no rebase#24 fired. Dormancy now **≥169m31s** — **+87.3% over the 90m33s envelope**. **Sixth consecutive falsification** in the synth #131 → #138 → #161 → #166 → #170 → #171 chain — every cadence model proposed for bolinfest's stack rebase has now been broken at the next observation horizon.
- bolinfest #19683 (`test: harden app-server integration tests`, base main, head `0b157cc2`) last updated 16:04:50Z — 2h19m stale at window-close. bolinfest #19606 (`permissions: make runtime config profile-backed`, base `pr19683` — stacked-on-PR) last updated 16:04:33Z — same. **The stack is fully cold for the entire window** with NOT a single touch by bolinfest, NOT a single rebase, NOT a single cross-author reply.
- P-171.B (no rebase#24 within next single-window horizon) is **CONFIRMED** — bolinfest stack remained dormant through Add.64. This is the first synth #171 prediction to confirm.

## QwenLM/qwen-code — silent (full silence after Add.63's #3648 commit)

- Zero PR-state-change events in window. B-A-M-N's #3648 last touched 17:28:56Z (Add.63), no further commits. The **B-A-M-N n=5 regime quiesces** — no sixth surface this window. Synth #160 falsification at n=5 holds, no further extension.
- yiliang114's `lsp` and `cli` activity (#3649 16:49:20Z, #3646 15:25:13Z) all pre-window.

## BerriAI/litellm — silent

- Zero PR-state-change events. **#26551 (someswar177, base `litellm_oss_branch`) last updated 17:28:36Z** (Add.63) — now 55m28s stale. Synth #172 P-172.A (third W17 PR on a non-staging `litellm_*_branch` channel within 4 windows) **clock starts** — Add.64 = window 1 of 4, no new such PR yet.
- The internal-staging burst (#26543/26542/26541/26536/26532/26525/26522/26520) all pre-Add.62.

## cline/cline, charmbracelet/crush, All-Hands-AI/OpenHands, Aider-AI/aider — silent

- **cline silent for 1 window** after Jabca #10418 break in Add.63. Single-window silence-break recurrence rate so far in W17: 0/1.
- **crush silent 4 consecutive windows**.
- **OpenHands silent 4 consecutive windows**.
- **aider silent 10 consecutive windows** (Add.55–64) — extends past 9-window mark from Add.63.

## Window summary

- **1 merge** (goose #8851) — merge-rate 1/window after Add.63's 0/window. Goose-side merge ends repo-merge-drought at 9 windows.
- **2 closes-without-merge** (opencode #24519, opencode #24509) — **synth #152 P-152.A null-result streak BREAKS at window 12**. First non-zero close-without-merge window since Add.52.
- **4 PR-state-change events on opencode** (#24519, #24518, #24515, #24509) — opencode wakes up after 3-window silence (synth #167 single-silent-window debut framing now extended to 3-window-silence-then-burst).
- **1 strict-new-open in window** (opencode #24519, createdAt 17:48:13Z, 13s post-window-open) — first strict-new-open in 4 windows (Add.61/62/63 all 0).
- **bolinfest stack dormancy ≥169m31s** — synth #166 envelope breached at +87.3%. Synth #171 P-171.B confirmed; sixth-falsification of bolinfest cadence chain.
- **Active-repo set fully turns over Add.63 → Add.64** — synth #171 P-171.A and P-171.C falsified jointly, see synth #173.
- **Sub-5-minute self-close on opencode #24519 model-catalog surface** generalizes synth #59 beyond flaky-test surface — see synth #174.

## Cross-repo observation: deepseek-v4 surface gravity well across three repos in W17

Within W17 alone, three independent repos each opened a deepseek-v4-related model-catalog PR by three different authors:
- **cline #10414** (richpix, "Update: Deepseek reasoner check to include v4-pro", OPEN, 2026-04-26T02:55:13Z)
- **cline #10418** (Jabca, "add deepseek-v4 models", OPEN, 2026-04-26T11:56:13Z)
- **opencode #24519** (rekram1-node, "fix: allow deepseek reasoner and chat to have variants since they are now v4 flash", **CLOSED at 17:52:29Z within 4m16s of open**)

This is a synth #49-style cross-repo "API surface gravity well" event — three authors converging on the same external model-API surface (deepseek-v4 family) within a single calendar day across two repos, with two surface variants (v4-flash, v4-pro) being patched at the model-catalog layer. Note **opencode's variant rejected itself** while both cline variants remain OPEN — possible signal that opencode upstream considers the model-catalog management out-of-scope for ad-hoc PRs (model-catalog comes from `models.dev` per #8838 angiejones merge).

PRs cited: opencode #24519 / #24518 / #24515 / #24509 / #24510 / #24487 / #24486 / #24485 / #8838 (cross-ref); goose #8851; codex #19683 / #19606 (silent reference, stack dormancy measurement); qwen-code #3648 (silent reference); litellm #26551 (silent reference); cline #10414 / #10418 (cross-repo deepseek-v4 cluster).
