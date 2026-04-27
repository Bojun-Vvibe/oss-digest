# ADDENDUM-104 — 2026-04-28 (capture 2026-04-27T23:00Z)

**Capture window:** 22:39:00Z → 23:00:00Z (UTC). Window width: **21m00s**.
**Predecessor:** ADDENDUM-103 (closed 22:39:00Z; carry preds A'-I as listed there; key actives: Pred B jeevan6996 burst, Pred C' yuneng-berri #26643, Pred D skgandikota burst, Pred F session-state 4th-author, Pred G close-and-refile 4th sub-pattern, Pred H evawong-oai preserved-path stack, Pred I gemini-cli pause).

## Headline event — ayushh0110 **Pred G TRIGGERED**: litellm #26641 closed 22:37:02Z (Add.103 capture moment) → **#26650 opened 22:39:52Z** with **identical title** on **explicitly versioned branch `fix/mcp-filter-preserve-native-tools-v2`** — a **fourth distinct close-and-refile sub-pattern** absent from synth #244's three-axis taxonomy: **same-author-same-title with explicit numeric branch suffix versioning**

**#26650** ayushh0110 `fix(mcp): preserve native tools in semantic filter hook` opened **22:39:52Z** on branch `fix/mcp-filter-preserve-native-tools-v2` (head `6c62c5cae5ef7ba87034d05768da32919d51d1bb`). Title is **byte-identical** to closed #26641 and closed #26634 (now N=3 attempts on the **same conceptual surface** by ayushh0110 in ~1h44m: #26634 21:13:35Z→close 21:42:23Z 28m48s; #26641 21:55:46Z→close 22:37:02Z 41m16s; #26650 22:39:52Z→OPEN). The branch suffix progression is `(none)` → `(none, same branch)` → `-v2`. **This is structurally distinct from the three sub-patterns enumerated in synth #244:**

- (a) same-branch-repeated-push-then-close (was: ayushh0110 #26634→#26641 same branch `fix/mcp-filter-preserve-native-tools`),
- (b) different-branch-with-identical-title (yuneng-berri #26638 branch `feat-config-update-targeted-writes` → #26643 `feat-config-update-targeted-writes-v2`; kitlangton #24679 `kit/httpapi-json-shape-parity` → #24682 `kit/httpapi-json-parity-dev`),
- (c) close-then-edit-title-then-reopen (sanchitmonga22 #24664 `feat(plugin): add model.before hook for routing-style plugins` → #24666 `feat(plugin): add model.before hook`).

The new sub-pattern **(d): explicit numeric-suffix branch versioning on third or later attempt with title preserved verbatim** is empirically distinct because it betrays the author's **internal mental model that previous attempts are formal "versions"**, not topical iterations — a **meta-cognitive footprint absent from (a)/(b)/(c)**. Note the cross-reference: yuneng-berri's #26643 branch was `...-v2` too (Add.102) but yuneng's case had only two attempts and a renamed concept; ayushh0110 now has **three attempts and explicit `-v2` only on the third**, indicating the suffix is invoked only when the author crosses a personal threshold of "this is a re-attempt, not the original". **Pred G triggered with sub-pattern (d). Promotable to synth #245.**

## Second cross-repo close-without-merge event in window — **ishaan-berri #26649 OPENED 22:37:58Z, CLOSED 22:41:55Z** lifespan-to-close **3m57s** by an **internal `-berri` maintainer-suffix author**, NOT merged

**#26649** ishaan-berri `fix(projects): internal users can see projects in Create Key dialog` opened 22:37:58Z **CLOSED 22:41:55Z** on branch `task-d489df08`. **3m57s open-to-close, NOT merged**. The branch name `task-d489df08` is hex-suffix automation-style (uuid7-prefix-class), suggesting ishaan-berri's PR was opened by an agent/script and self-closed within 4 minutes when whatever check failed. This is the **second sub-10m close-without-merge by a `-berri` suffix maintainer in W17** (first was milan-berri-adjacent activity per Add.~94 range; ishaan-berri has historically had extremely high merge rate per Add.93 baseline). **#26649 widens the `-berri` close-rate distribution to non-zero**, which is **directly relevant to synth #242's surface-class-not-author thesis**: even the strongest internal-suffix maintainer kinetic priors (near-100% merge) admit short-duration self-aborts on auto-generated PRs. **Sub-thread for synth #246 below: when author-class signal is contaminated by automation-class, the apparent kinetic distribution is bimodal even for "uniform" authors.**

## opencode in-window summary — **silent on merges**, single trailing OPEN

In-window MERGED: **0**. In-window CLOSED-not-merged: **0**. In-window OPENs: **0** (the latest opencode PR is still #24682 from 22:16:05Z). **Trailing merged-silence at capture: 44m48s** since #24677 22:15:12Z — extending the silence noted in Add.103 by 21m. **Pred A' (kitlangton series modally-undescribable) status:** no new kitlangton merge in window → cannot evaluate; carry. **Pred B (jeevan6996 burst):** still 0/3 of {#24674 53m+1h05m=58m38s+, #24678 46m+21m=1h08m17s+, #24680 38m+21m=59m23s+} merged at capture. None merged in 21min window. Pred B still open; carry to Add.105.

## codex in-window — **silent**, no merges, no opens, no closes

In-window MERGED: **0**. In-window OPENs: **0** (latest codex PR is #19884 mzeng-openai 22:34:25Z, opened **just before** Add.103 capture-close, did not change state). In-window CLOSED-not-merged: **0**. **Trailing merged-silence at capture: 1h01m31s** since #19839 21:58:29Z (cassirer-openai). This is the **first 1h+ merged-silence stretch in codex during W17 hot-window** since Add.79-era. **Pred H (evawong-oai preserved-path stack):** all 5 of {#19846, #19847, #19848, #19849, #19852} still OPEN at 4h47m+ since open. **0/5 merged extended by another 21min** = stack age now 4h47m → 5h09m+; the originally-closed sibling #19867 (lifespan-to-close 2h37m11s) still does not change the unmerged-rate. **Pred H continues passing predicted-direction (≥2h, ≤fully-merged-cluster).**

## litellm in-window — **dominant repo for window**: 4 NEW OPENs (#26649 closed in-window, #26650, #26651, plus carry-overs), **0 merges**, extending the litellm merged-silence to **3h46m+**

NEW OPENs (3): **#26649** ishaan-berri (above, also closed in-window), **#26650** ayushh0110 (above, third attempt v2-suffix), **#26651** lmcdonald-godaddy `Fix GPT-5.5 Pro Pricing` (22:52:23Z OPEN, branch `gpt-5.5-pro-fix-pricing`, model-pricing surface — **first-time-author** signature in W17 sample, no prior PRs from `lmcdonald-godaddy`).

In-window MERGED: **0**. **Trailing merged-silence at capture: 3h46m46s** since #26622 19:13:14Z. This is **3 consecutive Addenda with zero litellm merges** (Add.102: 0; Add.103: 0; Add.104: 0). Concurrently, the litellm OPEN backlog grew by **+3 net in-window** (one closed offsets), with **N=15+ OPEN PRs** counting carry-overs from Adds 100-103 (yuneng-berri ×3, skgandikota ×3, ayushh0110 v3 attempt, milan-berri, emerzon, mubashir1osmani, freddyhaddad, samrusani, alighazi288, ryan-crabbe-berri, Michael-RZ-Berri, musse, harryzsh, udit-rawat, bringCool, lmcdonald-godaddy). **Promotable: litellm has entered a merge-pause regime distinct from open-pause.** Open-rate is high; merge-rate is zero. This **decouples open-throughput from merge-throughput** in a way no other tracked repo currently exhibits. Candidate for cross-repo metric in synth #246.

**Pred C' (yuneng-berri #26643):** still OPEN at capture, lifespan-since-open 59m19s (no resolution). Add.103 Pred C' window was "by Add.105" → 1 tick remaining.
**Pred D (skgandikota burst):** {#26639, #26640, #26642} all still OPEN at 1h+ each. 0/3 merged. Carry.

## gemini-cli in-window — **silent extending Pred I**: **third consecutive Addendum with zero merges**

In-window MERGED: **0**. In-window OPENs: **0**. **Trailing merged-silence at capture: 1h42m28s** since #26079 21:17:32Z. **Pred I (Add.103) — gemini-cli pause through Add.105:** Add.103 saw 0 merges, Add.104 sees 0 merges → 2 of 3 ticks pass. If Add.105 also shows 0, **Pred I confirms**. The pause is now **1h42m+** which already exceeds typical inter-merge gaps for gemini-cli (Add.79-100 baseline median ~25-40min during active hours). **Pred I likely to confirm at Add.105**; pre-emptive note for synth #246.

## goose in-window — **silent**

In-window MERGED: **0**. In-window OPENs: **0**. Trailing merged-silence: **48m40s** since #8854 22:11:20Z. The lifeizhou-ap N=2 multi-hour-shallow-surface pattern (Add.103 sub-thread for synth #244) does not extend in-window.

## qwen-code in-window — **silent**

In-window MERGED: **0** (extending merged-silence to **10h32m+** since #3661 12:28:17Z). In-window OPENs: **0**. **No qwen-code merge has occurred in the entire span of Adds 100-104** (~6h elapsed). Pre-emptive: this also feeds the cross-repo merge-pause metric below.

## Cross-repo merge-pause inventory at capture 23:00Z

| Repo | Merge-silence | Open-silence | Last merged PR |
|------|--------------|--------------|----------------|
| sst/opencode | 44m48s | 44m | #24677 22:15:12Z |
| openai/codex | 1h01m31s | 25m35s | #19839 21:58:29Z |
| BerriAI/litellm | 3h46m46s | 7m37s | #26622 19:13:14Z |
| google-gemini/gemini-cli | 1h42m28s | 2h15m | #26079 21:17:32Z |
| block/goose | 48m40s | 2h22m | #8854 22:11:20Z |
| QwenLM/qwen-code | 10h32m | 22m41s | #3661 12:28:17Z |

**Aggregate observation: 4 of 6 repos have merge-silence ≥45min concurrently; 5 of 6 have merge-silence ≥1h if you exclude opencode by 16min.** This is a **synchronous cross-repo merge-pause** during a window where opens are still occurring at normal rate (litellm +3 in 21min). Promotable to synth #246 as cross-repo regime asymmetry.

## Pred-status table for ADDENDUM-104 close

- **Pred A'** (kitlangton modally-undescribable, Add.103) → no kitlangton merge in window → carry.
- **Pred B** (jeevan6996 burst, ≥1 merge by Add.105) → 0/3 still; **1 tick remaining**, carry.
- **Pred C'** (yuneng-berri #26643 resolves by Add.105) → still OPEN; **1 tick remaining**, carry.
- **Pred D** (skgandikota burst ≥1 merge by Add.105) → 0/3 still; **1 tick remaining**, carry.
- **Pred E** (axis-7 lifecycle-hooks 3rd by Add.106) → no new in window; carry.
- **Pred F** (axis-1 session-state 4th-author by Add.105) → no new session-state opener in window; carry, **1 tick remaining**.
- **Pred G** (4th close-and-refile sub-pattern by Add.106) → **TRIGGERED in-window** by ayushh0110 #26650. **CONFIRMED.** → **Promote to synth #245.**
- **Pred H** (evawong-oai stack) → 0/5 merged extending; **carry**, ≥2h Class S still passing.
- **Pred I** (gemini-cli pause through Add.105) → **passing**, 2 of 3 ticks confirmed; **1 tick remaining**.

## New predicates opened by ADDENDUM-104

- **Pred J (sub-pattern (d) generalization):** at least one further **same-author identical-title PR with explicit numeric-suffix branch versioning** appears in any tracked repo by Add.110. If yes, sub-pattern (d) is recurrent. If no within 6 ticks, ayushh0110 instance is unique-but-classifiable.
- **Pred K (cross-repo merge-pause coherence):** by Add.105, ≥3 of the 6 repos still show merge-silence ≥1h (defining merge-silence at Add.105's capture time, lower bound). If yes, the cross-repo synchronous merge-pause is **time-correlated, not per-repo idiosyncratic**.
- **Pred L (litellm decoupled regime):** by Add.106, litellm merge:open ratio in-window remains ≤0.2 (across all in-window OPENs and merges within Adds 102-106 collectively). If yes, litellm is in a **structural merge-pause regime** independent of per-PR review timing.
- **Pred M (`-berri` suffix self-close rate):** if a 2nd `-berri`-suffix maintainer PR closes-without-merge under 10min by Add.110, the previously-assumed near-uniform merge prior for `-berri` authors is empirically falsified.

## Capture close

**23:00:00Z.** Next addendum (ADDENDUM-105) target window: 23:00:00Z → next tick.
