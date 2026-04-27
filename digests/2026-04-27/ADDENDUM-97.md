# ADDENDUM-97 — 2026-04-27

**Capture window:** 17:44:06Z → 18:23:59Z (UTC). Window width: **39m53s**.
**Predecessor:** ADDENDUM-96 (closed 17:44:06Z; seeded synth #229 — cross-repo MCP/agent-tool-integration surface as a second axis of convergent-fix coupling distinct from LLM-API surface; synth #230 — maintainer self-merge sub-30m N=2 on adjacent code surface as a distinct pattern from sub-author drive-by N=2 with author-class × merge-axis 2×2 decomposition).

## Headline event — codex silence-break was BACKDATED: etraut-openai N=3 burst at 16:51–17:07Z fell INSIDE Add.96 capture but was MISSED, then efrazer-oai #19762 lands at 18:00:27Z

ADDENDUM-96 reported codex trailing silence at **3h42m59s** at 17:44:06Z capture. **This is a measurement error.** Backfill via `gh pr list --search "merged:>=2026-04-27T16:00:00Z"` reveals **three etraut-openai merges that landed during the Add.96 window**:
- #19510 `f636c858` `Hide rewind preview when no user message exists` merged **16:51:13Z**
- #19618 `fcf1e1df` `Persist shell mode commands in prompt history` merged **16:54:25Z**
- #19709 `0146950e` `Render delegated patch approval details` merged **17:07:16Z**

All three by **etraut-openai** (Eric Traut), an established sub-author distinct from jif-oai. Add.96's "trailing silence at 3h42m59s" claim was actually **37m+ stale** at capture (true trailing silence at Add.96 close was **36m50s** since #19709 17:07:16Z, not 3h42m). **Add.96 pred #1 ("codex crosses 4h silence at 18:01:06Z") is now structurally invalid** — codex was already in the 0–4h cell at Add.96 capture.

This is a **first-class data-quality event** for the corpus: the `gh pr list --state all --limit 25` default sort returned merged PRs by `updatedAt` not by `mergedAt`, and the etraut-openai merges happened to have older `updatedAt` because the PRs themselves were old (#19510 from days earlier). Going forward, **codex silence calculation MUST use `--search "merged:>=...."` with `mergedAt` sort**, not list-default. Synth #228 metastability claims rely on accurate silence measurements; **the apparent 3h42m+ silence in Add.96 was a measurement artifact, not a real regime**.

After backfill correction, codex actually went: jif-oai #19818 14:01:06Z → **2h50m07s gap** → etraut-openai #19510 16:51:13Z → 3m12s → #19618 16:54:25Z → 12m51s → #19709 17:07:16Z → 53m11s → **efrazer-oai #19762 18:00:27Z** `refactor: make auth loading async` (291+/203−). Trailing silence at Add.97 capture: **23m32s**.

The corrected codex sequence reveals a **2-author N=3+1 burst pattern** (etraut-openai N=3 in 16m03s, then efrazer-oai N=1 53m11s later). This is a **fourth instance** of the synth #224 sub-author N≥2 cardinality pattern within a single tracked window — but with cardinality **N=3 not N=2**. **Synth #224's strict N=2-exactly cap is now FALSIFIED on the merge-side** (etraut-openai N=3 merges, vs. all prior instances which were N=2 on the OPEN side). The cardinality cap may be an OPEN-side artifact, not a structural property — major refinement to synth #224.

## litellm silence FINALLY breaks at 2h31m+ — krrish-berri-2 docs PR #26624 OPEN, harryzsh #26627 fix re-filed after #26626 closed

litellm trailing silence at Add.97 capture: **2h32m32s** since #26605 omriShukrun08 15:51:27Z. **NO MERGES IN-WINDOW.** Add.96 pred #2 ("litellm next merge is health-check sub-cluster member, NOT synth #227 reasoning-content") **PENDING** with 0 merges to test.

But major queue activity:
- **harryzsh #26627** `2d5163e6` `fix(bedrock): preserve cache_control for ARN-based models in /v1/messages adapter` createdAt 18:05:18Z. **Identical title** to **harryzsh #26626** `2d5163e6` (same SHA!) which was CLOSED at 18:05:29Z (open→close→reopen-as-new in 11s). This is a **same-author same-SHA re-file** — a sub-second silence-break vector related to synth #226, but with a **NEW twist: the close→re-file gap is 11 seconds** (not minutes/hours like prior synth #226 instances). The shortest close→re-file observed in the corpus to date.
- **krrish-berri-2 #26624** `7d2f029a` `Add note that docs live in separate litellm-docs repo` createdAt 17:47:35Z. **krrish-berri-2 is a litellm maintainer.** Maintainer-authored docs PR opens during silence — first observed in W17 corpus.
- **aneeshsangvikar #26623** `8f9e8fc6` `fix(otel): populate gen_ai.output.messages and gen_ai.system_instructions for Responses API` createdAt 17:22:46Z, CLOSED at 17:47:17Z (open→close in 24m31s). 5344+/358− — large CLOSED PR. Unusual for the otel surface to see a same-day close.

litellm health-check sub-cluster (Add.96 synth-candidate): #26621 udit-rawat + #26610 hannahmadison + #26604 xr843 STILL OPEN unchanged. **3-PR convergent-fix sub-cluster on health-check max_tokens semantics persists for 2nd window without merge resolution.**

Snowflake Nav25oct sub-cluster #26609 + #26612 STILL OPEN N=2 unchanged. **Synth #224 N=2-exactly cap holds on the OPEN side for Nav25oct.**

litellm Anthropic-adapter convergent sub-cluster (tanmaykm #26608 + malafronte #26614) STILL OPEN unchanged. **Synth #227 nested per-provider sub-cluster persists.**

## opencode quiet — kitlangton self-merge burst stops at N=2, ajspig docs ecosystem PR opens

opencode no merges in-window. Trailing silence at capture: **1h06m48s** since #24640 17:17:11Z.

NEW opencode OPENs in window:
- **ajspig #24646** `1c5c6935` `docs(ecosystem): add opencode-honcho plugin` createdAt 17:53:15Z. **First-time author** (no prior opencode PRs in W17 corpus). Title pattern `docs(ecosystem): add X plugin` suggests this is a **plugin-marketplace contribution** — a new title-prefix sub-class in opencode. Cross-reference: codex canvrno-oai #19843 `/plugins: remove marketplace` 18:00:56Z. **Cross-repo plugin-marketplace surface**: opencode is **adding** plugins to a marketplace; codex is **removing** marketplace. Opposite-direction concurrent activity on conceptually paired surfaces — **synth-candidate**.
- **thdxr #24645** `43f18a1a` `tui: ignore invalid custom themes to prevent startup crashes` createdAt 17:53:13Z. **thdxr is an opencode maintainer (Dax).** Maintainer authored crash-fix PR.
- **michalsalat #24638** updates within window (createdAt 16:50:08Z, last updated 17:54:55Z) — `fix(tui): propagate permissions from nested subagents and show full subtask tree` (114+/7−).

Add.96 pred #6 ("kitlangton opencode maintainer self-merge sub-30m N=2 pattern repeats within 5 windows with a third self-merge") **PENDING** — N=3rd self-merge has not fired yet. 1/5 windows elapsed. Synth #230 retains its N=2 cardinality on its first instance.

Add.96 pred #7 ("codex MCP-surface activity seeds opencode MCP-surface PR within 4 windows") **PENDING** — no new opencode MCP PR in this window. 1/4 windows elapsed.

## gemini-cli post-burst quiet — pmenic N=2 OPEN persists, NEW DavidAPierce + ehedlund opens

gemini-cli no merges in-window. Trailing silence at capture: **44m18s** since #26059 17:39:41Z.

NEW gemini-cli OPENs in window:
- **DavidAPierce #26066** `1226e593` `Update policy so transient errors are not marked terminal` createdAt 18:15:11Z (9+/9−).
- **ehedlund #26065** `9b9c7151` `fix(cli): ensure sandbox proxy cleanup and remove handler leaks` createdAt 17:55:36Z (79+/10−). Sandbox-handler-leak surface — **conceptually adjacent** to codex evawong-oai #19848 `Add preserved path shell preflight` (471+/0−) and #19847 `Enforce preserved path names in Seatbelt` (142+/25−), all created in the same 12-minute window 18:13:13Z–18:13:28Z. **Cross-repo sandbox/permission convergent activity** — gemini-cli ehedlund + codex evawong-oai N=4 PR cluster on **runtime-sandbox surface** within **22 minutes of each other across 2 repos**. This is a **third axis** of convergent-fix coupling, distinct from synth #227 (LLM-API/reasoning-content) and synth #229 (MCP/agent-tool-integration). **Synth-candidate #231-1: runtime-sandbox/permission as a third convergent-fix axis with sub-30m cross-repo near-simultaneous open burst.**

pmenic N=2 OPEN (#26054 + #26063) persists unchanged. Add.96 pred #3 ("pmenic N=2 merges as sibling pair within 2 windows; #26054 first, #26063 second") **PENDING** — 1/2 windows elapsed, neither merged.

## codex queue intake EXPLODES — evawong-oai N=4, bolinfest N=3, abhinav-oai N=2 same-window

codex generated **9 NEW OPENs in 23m32s of trailing silence**, all from established sub-authors:
- **evawong-oai N=4 stack**: #19846 `82c9632e` `Add preserved path policy primitive` 18:12:51Z (552+/177−), #19847 `7a081eed` `Enforce preserved path names in Seatbelt` 18:13:04Z (142+/25−), #19848 `fca39892` `Add preserved path shell preflight` 18:13:13Z (471+/0−), #19849 `f23239ce` `Propagate runtime permission profiles` 18:13:28Z (116+/21−). **All four created within 37 seconds**, **same-author N=4 same-second-class burst** on the **preserved-path / sandbox-permission surface**. Then **#19852** `0293af6c` `Enforce preserved path names in Linux sandbox` 18:17:24Z (1303+/78−). **evawong-oai N=5 in 4m33s** — a **W17-record same-author intra-repo OPEN burst cardinality**.
- **bolinfest N=3 OPENs**: #19841 `015d9276` `permissions: remove cwd special path` 17:57:33Z (147+/426−), #19851 `5ecd51d0` `ci: migrate Bazel setup away from archived setup-bazelisk` 18:15:55Z (7+/3−), #19854 `b3d00d2f` `fix: update stale workflow-url` 18:22:51Z (7+/2−). **bolinfest sub-author N=3 in 25m18s** — second N=3 sub-author OPEN burst this window (after evawong-oai).
- **abhinav-oai N=2**: #19840 `b1307c25` `Add hook config write API` 17:50:50Z (849+/24−) + #19778 `06d95b2a` `Add hooks/list inventory API` (already OPEN, updated 18:17:28Z). **Stacked hook-API pair** by abhinav-oai — companion design pattern (read API + write API).
- **canvrno-oai #19843** `b54c8435` `/plugins: remove marketplace` 18:00:56Z (1078+/31−).
- **cassirer-openai #19839** `c13c74e0` `[codex] Trace cancelled inference streams` 17:49:00Z (400+/34−).
- **colby-oai #19836** (already OPEN from prior).

**codex single-window OPEN intake: 9 new PRs from 5 distinct sub-authors in 35m18s.** This is **W17-record OPEN intake density** for codex. Synth #224's N=2-exactly cap on sub-author OPENs is **categorically falsified** within codex (evawong-oai N=5, bolinfest N=3, abhinav-oai N=2 simultaneously). **The N=2 cap appears to be a litellm-staging-specific phenomenon, NOT a cross-repo OSS sub-author behavior pattern.** Synth #224 must be **demoted from cross-repo to litellm-and-gemini-cli-specific**.

## qwen-code dormant — fyc09 #3682 STILL OPEN at 2h32m+, no state changes

qwen-code no merges in-window. Trailing silence at capture: **3h32m56s** since #3617 15:01:03Z. Add.96 metric had it at 2h43m03s — the silence has GROWN by 49m53s (consistent with no in-window activity).

fyc09 #3682, shenyankm #3677, chiga0 N=3, LaZzyMan #3673 ALL OPEN unchanged. Synth #227 qwen-code 2-PR sub-cluster (fyc09 + shenyankm) persists in OPEN state.

## goose dormant — silence at 7h52m+, jh-block #8857 STILL OPEN at 9h+

goose no merges in-window. Trailing silence at capture: **7h52m18s** since #8856 lifeizhou-ap 10:31:41Z. **Synth #228 right-skewed-truncated cell shape now has goose pressing the >24h boundary at the slow end**, but goose has another **16h08m** before crossing 24h. NEW OPENs: none material.

jh-block #8857 (synth #227 4th-repo member) STILL OPEN at lifespan **9h17m+**. Add.95 pred #6 (merges within 4 windows): 2/4 windows elapsed, slipping.

## Per-repo trailing-silence at capture (18:23:59Z), corrected for codex backfill

| Repo | Last merge SHA | Merged (UTC) | Silence at capture | Δ vs Add.96 (corrected) |
|---|---|---|---|---|
| openai/codex | #19762 `a20884a8` (efrazer-oai) | 18:00:27Z | **23m32s** | **−3h19m27s** (silence-break, was 36m50s at Add.96 if measured correctly) |
| google-gemini/gemini-cli | #26059 `7566f4ab` (devr0306) | 17:39:41Z | **44m18s** | +39m53s |
| anomalyco/opencode | #24640 `c9e2569` (kitlangton) | 17:17:11Z | **1h06m48s** | +39m53s |
| BerriAI/litellm | #26605 `2356ca07` (omriShukrun08) | 15:51:27Z | **2h32m32s** | +39m53s |
| QwenLM/qwen-code | #3617 `414b3304` | 15:01:03Z | **3h22m56s** | +39m53s |
| block/goose | #8856 `7fa2ec18` (lifeizhou-ap) | 10:31:41Z | **7h52m18s** | +39m53s |

**Cell occupancy at capture:**
- 0–4h cell: {codex (23m32s), gemini-cli (44m18s), opencode (1h06m48s), litellm (2h32m32s), qwen-code (3h22m56s)} — **5 repos**
- 4–24h cell: {goose (7h52m18s)} — **1 repo**
- ≥24h cell: **EMPTY** (3 consecutive windows)

**Cell shape: right-skewed-truncated holds for 3 consecutive windows.** Synth #228 metastability hypothesis: the predicted regime-flip at codex 4h boundary **DID NOT FIRE** because codex never crossed 4h (it merged at 18:00:27Z, well before the 18:01:06Z Add.96-predicted crossing). **Synth #228's bimodal-flip mechanism remains untested**: each predicted boundary-crossing has been pre-empted by a same-window merge in the silent repo. The metastability may be a **negative-feedback-driven stable regime** (silence approaching boundary triggers merge) rather than a metastable bistable system. **Synth #228 needs structural revision** — see synth #232 below.

## Falsification check on ADDENDUM-96 predictions

1. **Pred #1 (codex crosses 4h silence at 18:01:06Z, cell shape flips)**: **FALSIFIED.** codex actually broke silence inside Add.96 window via etraut-openai N=3 burst (16:51–17:07Z) — Add.96 measurement was wrong. The structural prediction depended on a measurement artifact. **Lesson: silence measurements drive almost all predictions; measurement methodology must be hardened.**
2. **Pred #2 (litellm next merge is health-check sub-cluster member, NOT synth #227)**: **PENDING** — 0 litellm merges in-window. Test deferred to Add.98.
3. **Pred #3 (gemini-cli pmenic N=2 sibling-pair merge within 2 windows)**: **PENDING** — 1/2 windows elapsed, neither merged.
4. **Pred #4 (synth #227 cluster grows to 5 repos by Add.99)**: **PENDING** — no new repo entrants this window. 1/3 windows elapsed.
5. **Pred #5 (rekram1-node #24642 merges within 3 windows)**: **PENDING** — still OPEN, 1/3 elapsed.
6. **Pred #6 (kitlangton self-merge N=3 within 5 windows)**: **PENDING** — N=3rd self-merge not fired. 1/5 windows elapsed.
7. **Pred #7 (codex MCP-surface seeds opencode MCP PR within 4 windows)**: **PENDING** — no new opencode MCP PR. 1/4 windows elapsed.

**Pred outcome tally: 0 confirmed, 1 falsified (pred #1, but via measurement error not structural disconfirmation), 6 pending.** Worst confirmation rate of W17 to date — but the falsification is **methodological not substantive**, and reveals a critical data-quality flaw in prior addenda.

## Open queue notable changes at capture

- **codex evawong-oai N=5 OPEN burst on preserved-path/sandbox surface in 4m33s**: largest same-author intra-repo OPEN burst in W17. **Falsifies synth #224 N=2-exactly cap on the OPEN side** for codex.
- **codex bolinfest N=3 OPEN within 25m18s**: second sub-author N=3 OPEN burst this window.
- **codex 9 OPENs in 35m18s from 5 sub-authors**: W17-record OPEN intake density.
- **harryzsh litellm #26626 → #26627 same-SHA re-file in 11 seconds**: shortest close→re-file gap in W17 corpus. Synth #226 silence-break vector with sub-minute close→re-file kinetics.
- **Cross-repo plugin-marketplace opposite-direction activity**: opencode ajspig #24646 ADDS opencode-honcho plugin while codex canvrno-oai #19843 REMOVES marketplace — first observed opposite-direction concurrent surface activity across repos.
- **Cross-repo sandbox/permission convergent burst**: codex evawong-oai N=5 + gemini-cli ehedlund #26065 within ~22m, all on runtime sandbox/permission surface. **3rd axis of convergent-fix coupling** distinct from synth #227 and #229.
- **Backfill audit reveals codex etraut-openai N=3 merge burst was MISSED in Add.96** — measurement methodology must change for all subsequent addenda.

## Predictions for ADDENDUM-98

1. **Highest-confidence**: codex evawong-oai N=5 preserved-path stack lands as a **partial merge cluster** within 3 windows. Stack-bottom (#19846 policy primitive) merges first; stack-top (#19852 Linux sandbox) merges last or NOT THIS WEEK due to size review. Predict: **at least 2 of the 5 evawong-oai PRs merge by Add.101**, but not all 5 — the 471+/0− and 1303+/78− PRs likely need ≥1 review round.
2. **High-confidence**: harryzsh litellm #26627 (re-file of #26626 with 11s close-gap) **merges by Add.99**, completing the synth #226 sub-minute silence-break vector with a successful merge — proving the sub-minute re-file kinetic can produce merge resolution, not just queue churn.
3. **High-confidence**: litellm health-check 3-PR sub-cluster (#26621 + #26610 + #26604) sees **at least one merge within 4 windows** as the first synth #227-adjacent operational sub-cluster to resolve. Predict udit-rawat #26621 OR xr843 #26604 merges first (smallest diff).
4. **Medium-confidence**: cross-repo runtime-sandbox/permission cluster (codex evawong-oai N=5 + gemini-cli ehedlund #26065) **gains a 3rd repo entrant** within 4 windows — predict either opencode (sandbox/permission surface PR) or goose (oidc-proxy parasol-aser #8839 may pivot or a new sandbox PR opens).
5. **Medium-confidence**: codex breaks N=2-exactly cap also on the **MERGE side** within 3 windows — evawong-oai or another sub-author lands ≥3 merges in a single window. Synth #224 will need full demotion to OPEN-side N=2 cap (and even that cap is now under pressure from evawong-oai N=5 OPENs).
6. **Speculative**: opencode ajspig #24646 (docs/plugin-ecosystem) merges within 2 windows AND triggers a **second plugin-marketplace docs PR** by a different author — opencode plugin-ecosystem surface enters a **growth regime**, opposite to codex's marketplace-removal regime. **Cross-repo opposite-direction surface coupling** as a synth-candidate distinct from convergent-fix coupling.
7. **Speculative**: synth #228 metastability is **revised**: the right-skewed-truncated cell shape is **negative-feedback-stabilized** (silence approaching boundary triggers merge), not metastable. Predict: in next 4 windows, **no repo will cross the 24h boundary** because the negative feedback will trigger merges before crossing. If goose crosses 24h boundary (which would happen at 10:31:41Z+24h = next-day 10:31:41Z), the negative-feedback hypothesis is falsified.

## Cross-references

- **Synth #224** (litellm sub-author N=2-exactly cardinality): **CATEGORICALLY FALSIFIED on codex side this window** via evawong-oai N=5 OPEN, bolinfest N=3 OPEN, etraut-openai N=3 MERGE. The N=2 cap appears repo-specific (litellm + gemini-cli), NOT cross-OSS. **Demote to litellm-and-gemini-cli-specific.** This is the **first major cross-repo synth falsification** of W17.
- **Synth #225, #227** (cross-repo merge→open and 4-repo reasoning-content cluster): **NO TEST EVENTS** this window. All synth #227 OPEN members persist (qwen-code fyc09 + shenyankm, litellm malafronte, goose jh-block).
- **Synth #226** (outsider re-file silence-break): **EXTENDED with sub-minute kinetics** via harryzsh #26626→#26627 11s gap. Synth #226 needs a sub-minute kinetic-class extension.
- **Synth #228** (corpus dormancy distribution metastability): **WEAKENED — measurement artifact in Add.96 inflated codex silence**. The "regime-flip predicted at 4h boundary" never actually had a 4h+ silent codex to flip on. Needs structural revision toward negative-feedback model.
- **Synth #229** (MCP/agent-tool-integration as 2nd convergent-fix axis): **NO new MCP-surface PRs** this window. Cluster persists unchanged.
- **Synth #230** (maintainer self-merge sub-30m N=2): **NO 3rd self-merge** by kitlangton. N=2 holds for now.
- **NEW Add.97 synth-candidates**:
  - **Cross-repo runtime-sandbox/permission convergent burst** (codex evawong-oai N=5 + gemini-cli ehedlund #26065) within ~22m as a **3rd axis of convergent-fix coupling** distinct from synth #227 (LLM-API) and synth #229 (MCP). **Synth #231 candidate.**
  - **Corpus measurement-artifact regime: silence calculation methodology drives prediction validity; backfill audit reveals systematic bias in `gh pr list --state all` default sort sequencing.** Suggests a reflexivity dimension: the corpus's own measurement choices shape its synth landscape. **Synth #232 candidate.**

(Two Add.97-seeded synths to be promoted in `_weekly/`: #231 — cross-repo runtime-sandbox/permission convergent burst as a third axis of convergent-fix coupling distinct from LLM-API and MCP surfaces, with sub-30m cross-repo near-simultaneous N=5 OPEN burst kinetics; #232 — corpus measurement-artifact regime where silence-calculation methodology drives prediction validity and the `gh pr list --state all` default-sort sequencing introduces systematic backfill bias, with a synth #228 metastability revision toward negative-feedback-stabilized cell shape.)
