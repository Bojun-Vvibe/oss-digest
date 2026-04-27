# ADDENDUM-93 — 2026-04-27

**Capture window:** 14:13:16Z → 15:13:39Z (UTC). Window width: **60m23s**.
**Predecessor:** ADDENDUM-92 (closed 14:13:16Z; seeded synth #221 — litellm staging-queue sub-author N=2 back-to-back open-pair recurring across consecutive windows; synth #222 — codex jif-oai N=6 self-merge sprint extension with author-preannounced multi-part follow-up regime).

## Headline event — jif-oai sprint TERMINATES at N=6, `part 2` no-show falsifies preannouncement signal

ADDENDUM-92 pred #1 (and synth #222 pred #1): **"chore: split memories part 2" merges by Add.93, validating preannouncement signal**. **FALSIFIED.** No `part 2` PR was opened, and no jif-oai PR merged in this 60m23s window. codex last merge remains #19818 `bb83eec825` at 14:01:06Z. Trailing silence at capture: **1h12m33s**.

The `part 1` naming convention in #19818 was therefore **decorative, not predictive**. Synth #222's "author-preannounced explicit follow-up regime as predictive cascade extender" hypothesis is **partially falsified** at the leading-indicator level. Synth #222's structural claim (the 6-regime cascade itself happened) survives; the prospective claim (`part N+1` reliably follows `part 1`) does not.

This is the **first** observed W17 case where a `part 1`-titled merge did NOT generate a follow-up `part 2` PR within ≥60m — making `part 1` a **null preannouncement** in this instance.

## qwen-code regime shift — monopoly transfer from codex/jif-oai to qwen-code multi-author

For three consecutive windows (Add.90, Add.91, Add.92), codex was the only repo breaking silence and jif-oai was the only author. **Add.93 inverts this**: codex silent, qwen-code merged twice, opencode merged once, goose merged once. **codex monopoly broken by absence.**

| Repo | PR | SHA (short) | Author | Merged (UTC) | Time-into-window |
|---|---|---|---|---|---|
| anomalyco/opencode | #24614 | `ede354b0e6` | SeashoreShi | 14:44:53Z | +31m37s |
| QwenLM/qwen-code | #3656 | `8a278767ed` | qqqys | 14:50:18Z | +37m02s |
| QwenLM/qwen-code | #3617 | `414b3304cd` | mohitsoni48 | 15:01:03Z | +47m47s |
| block/goose | #8804 | `739f4e88b8` | maxamillion | 15:10:37Z | +57m21s |

**Four merges, four distinct repos×authors, zero codex.** Author-concentration ratio: **1.0/4 = 25%**, vs Add.92's 100% jif-oai-codex. This is a **regime inversion** at the cross-repo level.

Adjacent window (qwen-code #3624 `f0e8601982`, doudouOUC, 14:01:47Z) merged **31s before** this window opened at 14:13:16Z and is the bridge merge tying qwen-code's burst across the Add.92→Add.93 boundary. Counting #3624 + #3656 + #3617, qwen-code merged **3 PRs in 59m16s** (14:01:47Z → 15:01:03Z) by **3 distinct authors** (doudouOUC, qqqys, mohitsoni48) — a **multi-author burst**, the dual of jif-oai's single-author N=6 sprint immediately preceding.

## Convergent-fix-duo PARTIAL resolution (Add.91/92 pred #3 PARTIALLY CONFIRMED)

Six PRs were tracked across Add.91/92 as a persistence-class phenomenon (synth #121): litellm #26598/#26593, opencode #24618/#24605, qwen-code #3677/#3675. Status changes in this window:

| PR | Author | Repo | Surface | Status at Add.93 | Δ from Add.92 |
|---|---|---|---|---|---|
| opencode #24614 | SeashoreShi | opencode | docs CLI env var typo | **MERGED `ede354b0e6` at 14:44:53Z** | RESOLVED (was OPEN; not in tracked duo but in Add.92 queue head) |
| litellm #26598 | zyz23333 | litellm | (convergent fix) | unchanged OPEN | persistent |
| litellm #26593 | weiguangli-io | litellm | (convergent fix) | unchanged OPEN | persistent |
| opencode #24618 | leandrosnx | opencode | (convergent fix) | unchanged OPEN | persistent |
| opencode #24605 | rachadaccoumeh | opencode | (convergent fix) | unchanged OPEN | persistent |
| qwen-code #3677 | shenyankm | qwen-code | parse MiniMax thinking tags | unchanged OPEN | persistent |
| qwen-code #3675 | YlLVTECH | qwen-code | (convergent fix) | unchanged OPEN | persistent |

**Pred #3 (third re-arm)** technically still falsified for the strict six-PR duo set: 0/6 changed status. But **#24614** (a queue-head opencode PR not in the strict duo set) merging shows opencode's queue moved while the convergent-duo PRs did not — **selection regime preferentially picks non-duo PRs**, suggesting convergent-fix duos are **mutually-blocked** (each waiting for maintainer attention to disambiguate) while solo PRs proceed. **New synth-candidate**: convergent-fix-duo mutual-block as merge-suppression mechanism.

## qwen-code multi-author burst — three authors in 59m16s on disjoint surfaces

| PR | Merge SHA | Author | Surface | Merged (UTC) |
|---|---|---|---|---|
| #3624 | `f0e8601982` | doudouOUC (jinye) | `fix(cli): add API Key option to qwen auth interactive menu` | 14:01:47Z |
| #3656 | `8a278767ed` | qqqys | `fix(core): recover from }{ glued records on session JSONL load (#3606)` | 14:50:18Z |
| #3617 | `414b3304cd` | mohitsoni48 (Bramha.dev) | `fix(core): split tool-result media into follow-up user message for strict OpenAI compat` | 15:01:03Z |

Inter-merge cadence: **48m31s, 10m45s**. Surfaces: auth UX, session JSONL parser robustness, OpenAI-compat tool-result media handling — **fully disjoint**. Authors: **3 distinct, zero overlap**, all `fix` prefix, all touching `core` or `cli` packages. This is the **dual** of jif-oai's monopoly sprint: where jif-oai was 1-author-N-PRs on related surfaces, qwen-code is N-authors-N-PRs on disjoint surfaces, both in **same ~60m window** (jif-oai 11:31:57Z → 14:01:06Z; qwen-code 14:01:47Z → 15:01:03Z). The two patterns are **temporally adjacent** (49s gap between qwen-code #3624 merge and jif-oai's last merge #19818 at 14:01:06Z) — corpus-level **monopoly→dispersal phase transition** at 14:01Z.

## opencode #24614 SeashoreShi merge — Add.92 queue head clears

Add.92 logged `anomalyco/opencode #24614 (SeashoreShi, 7d35c9abbd)` as unchanged in queue head. The headRefOid in the actual merge is `ede354b0e6dae8a37b63e314fc4baf68f7ec6fdb` (different from Add.92's logged head SHA `7d35c9abbd`) — a **rebase or force-push happened in-window before merge**. This is consistent with synth #218 (per-repo branch-naming grammar) extended: anomalyco/opencode also exhibits **in-window force-push-then-merge** for trivial docs PRs.

## goose #8804 maxamillion — first non-dependabot, non-lifeizhou-ap goose merge in this capture

Goose's last non-bot merge before Add.93 was lifeizhou-ap #8856 (auto-merge policy adoption, 10:31:41Z). Add.93 introduces **maxamillion** as a **new author**: #8804 `fix(shell): prevent login-shell PATH probe from suspending goose on startup` merged 15:10:37Z (Δ4h38m56s after #8856). This is a **substantive shell-PATH bugfix**, not a chore — first **non-CI / non-policy** goose merge in 4h+. Goose silence resets to **3m02s at capture**.

## Per-repo trailing-silence at capture (15:13:39Z)

| Repo | Last merge SHA | Merged (UTC) | Silence at capture | Δ vs Add.92 |
|---|---|---|---|---|
| block/goose | #8804 `739f4e88b8` | 15:10:37Z | **3m02s** | RESET (was 3h41m35s) |
| QwenLM/qwen-code | #3617 `414b3304cd` | 15:01:03Z | **12m36s** | RESET (was 1h44m59s) |
| anomalyco/opencode | #24614 `ede354b0e6` | 14:44:53Z | **28m46s** | RESET (was 5h10m48s) |
| openai/codex | #19818 `bb83eec825` | 14:01:06Z | **1h12m33s** | +60m23s (no merge in-window) |
| BerriAI/litellm | #26545 `3d2b8fed32` | 2026-04-26T03:07:01Z | **36h06m38s** | +60m23s |
| google-gemini/gemini-cli | #25942 `31bdf112d2` | 2026-04-24T21:55:46Z | **65h17m53s** | +60m23s, **CROSSED 65h marker at 14:55:46Z as Add.92 pred #2 forecast** |

**Cell occupancy at capture:**
- 0–4h cell: {goose (3m02s), qwen-code (12m36s), opencode (28m46s), codex (1h12m33s)}
- 4–24h cell: **EMPTY** (opencode left)
- ≥24h cell: {litellm (36h06m), gemini-cli (65h17m)}

**Cell shape SHIFTED from Add.92.** The 4–24h cell **emptied** — first time in 3 windows. Four repos collapsed into the 0–4h cell. **Rapid-cell concentration** is the new state.

## Falsification check on ADDENDUM-92 predictions

1. **Pred #1** (jif-oai N=7 via `part 2`): **FALSIFIED.** No `part 2`, no jif-oai merge in-window. codex silence reached 1h12m33s. The cascade terminates at N=6.
2. **Pred #2** (gemini-cli crosses 65h at 14:55:46Z): **CONFIRMED.** Now at 65h17m53s.
3. **Pred #3** (≥1 of 6 convergent-duo PRs changes status): **FALSIFIED for strict set (0/6).** Partially confirmed at the queue-head level via #24614 (non-duo). Re-arm for Add.94.
4. **Pred #4** (xr843 N=3 third PR by 15:00Z): **FALSIFIED.** xr843 opened only #26603 and #26604 in Add.92; no third PR observed in litellm open queue. Sub-author session **stalled at N=2**, mirroring Bytechoreographer (synth #221 pattern strengthens — N=2 IS the recurrence cardinality, not a way-station to N=3+).
5. **Pred #5** (bolinfest pr19772–19776 crosses 8h-stalled at 15:14:28Z): **CONFIRMED-IMMINENT** (1m before capture; chain still all OPEN, headRefOids #19773 `cac068aa`, #19774 `cac068aa`, #19775 `6c92cc40`, #19776 `1db629a8` — note the #19773/#19774 SHA collision, both at `cac068aa`-prefix indicates shared commit base). Chain now ~9h25m stalled past the original 05:49:54Z createdAt cluster.
6. **Pred #6** (non-jif-oai author merges into codex): **FALSIFIED-by-absence — no codex author merged at all.** Monopoly ended via repo-silence, not via author-substitution.
7. **Pred #7** (shenyankm or chiga0 second-PR merges in qwen-code): **FALSIFIED.** Neither author merged. shenyankm #3677/#3668 unchanged; chiga0 #3680/#3671/#3663 unchanged. Sub-author dual-concentration **persists at OPEN-only level**, never reaches merge phase.

**Pred outcome tally: 2 confirmed (2, 5-imminent), 5 falsified (1, 3, 4, 6, 7).** **Worst-prediction window of W17 so far.** The window's regime inversion (codex monopoly → cross-repo dispersal) was not predicted by any Add.92 pred. Continuation-of-monopoly bias of the predictor is now a **documented systematic error** for monopoly-state windows — monopolies appear to terminate by exhaustion, not by gradual transition.

## Open queue notable changes at capture

- **codex #19805** (jif-oai, `dfa03848`): **STILL OPEN, headRefOid unchanged across 4 ADDENDUM windows (Add.90/91/92/93)**. Persistent-skip property of synth #222 **strengthens** — author had every opportunity but did not select. Sub-pattern confirmed.
- **codex #19807** (vb-openai, `a37adea0`): unchanged through 4 windows. Cross-author starvation marker now even stronger (codex went silent without merging it either).
- **codex bolinfest stack #19773–#19776**: see pred #5 above; chain dormancy confirmed at 9h+.
- **qwen-code #3677, #3668** (shenyankm dual): unchanged.
- **qwen-code #3680, #3671, #3663** (chiga0 triple — note #3663 newly visible): chiga0 now has **3 open PRs in qwen-code queue head** — escalation from 2 to 3.
- **litellm queue**: no new merges since Add.92 cutoff. Bytechoreographer #26601/#26600 and xr843 #26603/#26604 remain OPEN. Litellm staging silence now 36h+.

## Predictions for ADDENDUM-94

1. **Highest-confidence**: codex breaks silence with a non-jif-oai author by Add.94. Candidates: aibrahim-oai #19797, abhinav-oai #19778, or a bolinfest stack-collapse via single PR. Re-arm of Add.92 pred #6.
2. **Highest-confidence**: gemini-cli crosses 66h at 15:55:46Z (42m07s post-capture).
3. **Medium-confidence**: qwen-code multi-author burst continues — at least one of {chiga0, shenyankm, LaZzyMan, pomelo-nwu} merges by Add.94, ratifying the dispersal regime.
4. **Medium-confidence**: jif-oai #19805 finally merges OR jif-oai opens net-new branch (NOT `part 2`) — author re-engagement after sprint termination, but **on a different surface than the persistent-skip**.
5. **Medium-confidence**: ≥1 convergent-duo PR (litellm #26598/#26593, opencode #24618/#24605, qwen-code #3677/#3675) finally resolves — third re-arm. Mutual-block hypothesis (this addendum) predicts the resolution is via close-not-merge for one member of a duo.
6. **Speculative**: chiga0 reaches N=4 open in qwen-code queue head (currently at 3), establishing chiga0 as the dominant qwen-code sub-author concurrent with cross-author burst.
7. **Speculative**: litellm staging breaks 36h+ silence — yuneng-jiang or krrish-berri-2 merges an `[Infra]` or `fix(memory)` PR. The 36h marker is unusually long for litellm staging which typically merges every 18–24h.

## Cross-references

- **Synth #120/#222** (jif-oai cascade): structural claim (N=6 cascade with 6 regimes) survives; prospective claim (`part 1` preannounces `part 2`) **falsified** by Add.93 — `part 2` no-show. Synth-candidate refinement: **`part N` naming is a null signal in the absence of an in-flight `part N+1` branch within 30m of `part N` merge**.
- **Synth #121** (three-duo convergent-fix multiplicity): **persists at N=6 PRs across 3 windows**. Mutual-block hypothesis (Add.93 novel) is the **synth #223 candidate**.
- **Synth #221** (litellm sub-author N=2 back-to-back recurring): **strengthens** via xr843 stalling at N=2 (no N=3) — the recurrence cardinality is **exactly N=2**, not "N≥2". This is a sub-pattern refinement promoted to **synth #224**.
- **Add.90/91/92 codex jif-oai monopoly**: terminated by **repo-silence** in Add.93, not by gradual author-substitution. **Monopoly→dispersal phase transition at 14:01Z** is a corpus-level event.
- **qwen-code 3-author burst (doudouOUC/qqqys/mohitsoni48)**: dual of jif-oai monopoly; temporally adjacent (49s gap). The corpus has **bimodal merge-regime** (concentrated then dispersed) within a single 3.5h interval — candidate for higher-order synth in W18.

(Two Add.93-seeded synths promoted in `_weekly/`: #223 — convergent-fix-duo mutual-block as merge-suppression mechanism (six PRs persist 3 windows while non-duo queue-head PRs merge); #224 — litellm staging-queue sub-author back-to-back is N=2 EXACTLY, not a stepping stone — Bytechoreographer + xr843 both stall at the same cardinality.)
