# ADDENDUM-103 — 2026-04-28 (capture 2026-04-27T22:39Z)

**Capture window:** 22:00:30Z → 22:39:00Z (UTC). Window width: **38m30s**.
**Predecessor:** ADDENDUM-102 (closed 22:00:30Z; carry-over preds: Pred A on kitlangton #24677 ≤5m vs 17–22m; Pred B on jeevan6996 burst ≥1 merge by Add.104; Pred C on litellm yuneng-berri #26643 30m resolution; Pred D on skgandikota burst ≥1 merge by Add.104; Pred E axis-7 lifecycle-hooks third-instance by Add.106; Pred F axis-1 session-state 4th author by Add.103; #242-Pred-1/2/3 surface-class-stratification predicates).

## Headline event — kitlangton **Pred A FALSIFIED**: #24677 merged at **24m31s**, landing in **neither Mode A (≤5m) nor Mode C (17–22m)** but in a **new Mode D ≈23–28m**, completing the third consecutive falsification of a kitlangton kinetic claim within one tick of promotion (synth #97 → #239 → #241 → #243-pending)

**#24677** `fix(session): remove compaction summary dividers` (kitlangton, branch `kit/remove-compaction-dashes`) opened 21:50:41Z merged **22:15:12Z** SHA `ce78a4265d7b01de6e414ab0ac3bbbcdd9ff226d` (head `41ec893de895e191b2cf7edf0aff957d3f3c7322`). Lifespan: **24m31s** — exceeds the synth #241 Mode C upper bound (22m) by **2m31s**. **Pred A as written: FALSIFIED.** This is the **fourth consecutive synth-promoted kinetic model** of the kitlangton same-day series to fail at first real test (#97 → #238/#239 cycle; #239 → #241; #241 → ADDENDUM-103 here). The methodological note at the end of synth #241 ("any kinetic-modality claim on the kitlangton series must defer promotion until N≥12 with N≥3 in any non-Mode-A cluster") is now **empirically vindicated**: the series is **not modally describable at the N≤10 sample size** and any attempt to fit one fails inside one tick. **Promotable to synth #243 as a meta-claim.** Updated full session lifespan vector (N=10): **2h01m58s → 15m28s → 4m01s → 15m51s → 14m14s → 3m40s → 3m51s → 19m43s → 1m46s → 24m31s**.

## Second kitlangton event in window — **#24679 CLOSED 22:15:35Z without merge** (lifespan-to-close 15m17s) → **#24682 OPENED 22:16:05Z** with **identical title** but new branch `kit/httpapi-json-parity-dev` (vs. closed `kit/httpapi-json-shape-parity`) — kitlangton's **first close-and-refile of W17**, gap **30s**, structurally analogous to opencode sanchitmonga22 #24664→#24666 (Add.101) and litellm yuneng-berri #26638→#26643 (Add.102)

**#24679** `test(httpapi): cover session json parity` opened 22:00:18Z **CLOSED 22:15:35Z** (head SHA `fe43bea178ec45585332ea493a19be56cd7b8948`); **#24682** opened **22:16:05Z** (head `cd47262081e8ced842ddd210f44ec70ea1f0edd0`, branch `kit/httpapi-json-parity-dev`) — title **byte-identical**, branch name **rotated from `-shape-parity` to `-parity-dev`**. Combined cross-repo "same-author close-and-reopen with sub-15min gap" sample is now **N=4 within W17** (sanchitmonga22, yuneng-berri, kitlangton, plus Add.102 ayushh0110 #26634→#26641 close-and-reopen which was on the same branch — that one's actually a close-then-same-branch-reopen variant). The kitlangton instance is **distinct on three axes** from prior three: (a) author is the **internal maintainer who self-merges** (the others are outside or non-self-merging), (b) the closed PR reached its close via **manual close, not failed CI**, and (c) **the reopen happens 30s after close**, the **shortest gap of any close-and-refile observed this week** (vs. 41s for yuneng-berri, ~5min for sanchitmonga22). **This is the close-and-refile pattern arriving at the kitlangton author for the first time** — relevant to synth #243 below.

## opencode in-window summary

In-window MERGED (1): **#24677** kitlangton 24m31s (above). In-window CLOSED-NOT-MERGED (1): **#24679** kitlangton (above). NEW OPENs (1): **#24682** kitlangton (above). Trailing merged-silence at capture: **23m48s** since #24677 22:15:12Z. Trailing kitlangton-OPEN backlog (still open at capture): **#24680** jeevan6996 (Pred B carry), **#24682** kitlangton (just opened), **#24674** jeevan6996 (Pred B carry, 53m05s+), **#24678** jeevan6996 (Pred B carry, 46m08s+). **Pred B status**: 0/3 merged at 38m30s into the prediction window — still open.

## codex — **two major Class S confirmations** of synth #242 within one window: cassirer-openai #19839 (4h09m29s) and bolinfest #19841 (2h43m55s)

**#19839** cassirer-openai `[codex] Trace cancelled inference streams` opened 17:49:00Z merged **21:58:29Z** SHA `5687c27df9902c527e8d4eefa84fe1ee517b434c` (head `5687c27df9902c527e8d4eefa84fe1ee517b434c`). Lifespan **4h09m29s** — **observability-stream-cancellation tracing** = telemetry-architecture surface, archetypal Class S per synth #242. **#242-Pred-1: PASSING evidence accumulating.**

**#19841** bolinfest `permissions: remove cwd special path` opened 17:57:33Z merged **20:41:28Z** SHA `f7d5c241cd8c5a9f7d5e117940bff93299b6bb77` (head `f7d5c241cd8c5a9f7d5e117940bff93299b6bb77`). Lifespan **2h43m55s** — **runtime-sandbox primitive change** (cwd as special permission path is a security-boundary primitive). This is **structurally significant** because bolinfest's two prior W17 PRs (#19854 9m58s, #19851 22m36s) were both Class F, demonstrating that **the same maintainer-author crosses surface classes within hours** with kinetics matching the surface, not the author. **#242-Pred-1: directly confirmed for bolinfest.** The author-marginal kinetic claim from Add.101 is now firmly retracted; surface-class is the dominant variable.

**evawong-oai #19867** `Ignore legacy Windows cmd sandbox test in CI` opened 19:47:09Z **CLOSED 22:24:20Z** (lifespan-to-close **2h37m11s**, NOT merged) — **first close in the evawong-oai N=5 (now N=6 with #19867) preserved-path / sandbox cluster** which was 0/5 merged as of Add.102. The closed PR was a **sibling test-skip** to the preserved-path family rather than a member of the preserved-path stack itself, but it shares the `bugb15632-` branch prefix. **Add.97 Pred #1 (≥2 merged from N=5) was already FAILED** (synth #240); this closes another sibling without merge, **strengthening synth #240's transfer-failure thesis**.

**joeytrasatti-openai #19874 MERGED 21:02:41Z** lifespan **27m55s** (already cited in Add.102). NEW codex OPENs in window (1 strict): **#19884** mzeng-openai `Add MCP app feature flag` (22:34:25Z) — Class F MCP-feature-flag (axis-2 MCP). Trailing codex merged-silence at capture: **41m+** since #19839 21:58:29Z.

## litellm — **ayushh0110 #26641 CLOSED 22:37:02Z** completes the **#26634→#26641→close** double-cycle (third lifecycle event in 1h24min on `fix/mcp-filter-preserve-native-tools`); **oss-agent-shin #26646 opened-and-closed in 6 seconds** (22:21:18Z→22:21:24Z) — the **shortest single-PR lifespan observed in W17 across all six tracked repos**

**#26641** `fix(mcp): preserve native tools in semantic filter hook` (ayushh0110) opened 21:55:46Z **CLOSED 22:37:02Z** (lifespan-to-close **41m16s**, NOT merged). Combined with **#26634** (same title, opened 21:13:35Z, CLOSED 21:42:23Z lifespan 28m48s) the author has now produced **two CLOSED-not-merged PRs on the same branch within 1h24m** with no merge in sight. The branch `fix/mcp-filter-preserve-native-tools` was reused for both attempts (head SHA changed: `bf6a891aeb491ad504f9e41dbfb22a71b5788df3` → `2e1a61dced7013cabbaf64f5ba146839bda21d4b`). **This is structurally distinct from yuneng-berri #26638→#26643** which used **different branches**, and from kitlangton #24679→#24682 above. **Three distinct close-and-refile sub-patterns now live within W17**: (a) same-branch repeated push-then-close (ayushh0110), (b) different-branch with identical-title (yuneng-berri, kitlangton), (c) close-then-edit-title-then-reopen (sanchitmonga22). **Promotable to synth #244 as taxonomy.**

**#26646** oss-agent-shin `test: validate oss-agent-shin PAT can file PRs` opened **22:21:18Z** CLOSED **22:21:24Z** — lifespan-to-close **6s**. Branch `worktree-compiled-wondering-bear`, head SHA `0beec45c138d3d92a956cc1e1dc75fa2bd2ae782`. This is a **bot/agent self-test PR** with **6-second open-to-close** — the shortest single-PR lifespan in W17. Compares against synth #98's `bot-driven sub-10s n3 stale pr mass close sweep` (which was a sweep of pre-existing aged PRs); #26646 is an **opened-then-self-closed** sub-10s sequence by an automation-account, **a sub-pattern not previously observed**.

NEW litellm in-window OPENs (5): **#26644** emerzon `Add gpt-image-2 support` (22:09:48Z) — model-pricing/feature surface; **#26645** milan-berri `feat(logging): add retry settings for generic API logger` (22:20:49Z) — observability surface, **second milan-berri PR of day after #26606 streaming hidden response cost (Add.~95-range)**; **#26648** yuneng-berri `fix(guardrails): show YAML-defined guardrails in Guardrail Monitor` (22:23:02Z) — guardrail UI; **#26649** ishaan-berri `fix(projects): internal users can see projects in Create Key dialog` (22:37:58Z); plus **#26646** above. **yuneng-berri now has 4 OPEN PRs simultaneously (#26635, #26643, #26648 + previously open) — single-author backlog inflation in litellm during this same window.**

litellm in-window MERGED: **0**. Trailing merged-silence at capture: **3h25m+** since #26622 19:13:14Z (extending the silence noted in Add.102 by 38m).

## gemini-cli — silent in window (extending prior silence)

In-window MERGED: **0**. In-window OPENs: **0**. Trailing merged-silence: **1h21m+** since #26079 21:17:32Z. Trailing open-silence: **1h54m+** since #26078 20:44:07Z (Adib234). **gemini-cli single-axis pause now 2 consecutive Addenda** while other repos remain hot — promotable observation if it persists into Add.104.

## goose — **lifeizhou-ap #8854 MERGED 22:11:20Z lifespan 17h52m16s** (Class S evidence, non-internal contributor)

**#8854** `fix: remove defaults yaml` (lifeizhou-ap) opened 2026-04-27T04:19:04Z merged **22:11:20Z**. Lifespan **17h52m16s** on a **config-removal surface** — this is **nominally Class F surface** (config delete) but lifespan is in **deep Class S range**. The confound: lifeizhou-ap is **not a `block/`-suffix maintainer signature**, so kinetics-vs-author confound applies (synth #242 explicitly noted goose angiejones #8851 17h32m20s as confounded for the same reason). **Two goose PRs in 24h with sub-day-but-multi-hour lifespans on shallow surfaces**, both by non-suffix authors, suggests goose has a **separate baseline kinetic regime** independent of Class F/S — possibly a **maintainer-review-availability constraint** rather than surface-class-driven. **Synth #244 candidate sub-thread.** Trailing merged-silence: **27m40s** since #8854 22:11:20Z.

## qwen-code — single new OPEN, no merges

**#3683** salmanmkc `Upgrade GitHub Actions to latest versions` (22:37:19Z OPEN) — CI infrastructure / workflow update, no convergence signal. Trailing merged-silence: **10h11m+** since #3661 12:28:17Z. **Add.100 axis-4 prediction (≥1 qwen-code OR goose merge by Add.103)**: goose merged **#8854** at 22:11:20Z and **#8856** at 10:31:41Z within window of prediction → **Pred PASSING via goose branch**, qwen-code branch unmet.

## Cross-repo independent-author convergence in window — **session-state-handling axis (synth #227 axis-1 sub-axis) gets its 4th author**

**Pred F (Add.102) potential trigger**: opencode session-state authors observed in Add.102 were kitlangton (#24671 #24676), kill74 (#24673), jeevan6996 (#24674 indirectly via tui state). In Add.103 window, **#24682 kitlangton (httpapi json parity)** is again session-API surface but same author — does NOT add a 4th distinct author. **Pred F NOT YET triggered** by Add.103 evidence. Carry to Add.104.

**axis-7 lifecycle-hooks status**: Add.102 noted codex #19882 + goose #8842 as N=2 within 3 days. No new lifecycle-hooks PRs in window. Carry Pred E.

## Predicates carried forward to ADDENDUM-104

- **Pred A' (synth #243 candidate, the meta-claim):** the next kitlangton same-day self-merge series PR's lifespan **does not match any prior-session mode boundary within ±2m** — i.e., the series remains modally undescribable at N=11. If the next merge lands within ±2m of {1m46s, 3m51s, 14m14s, 19m43s, 24m31s} it would weakly support a continuous distribution; if it lands outside all such bands it confirms the meta-claim.
- **Pred B (jeevan6996 burst kinetics, carry):** at least 1 of {#24674, #24678, #24680} merges by Add.105.
- **Pred C':** litellm yuneng-berri #26643 (descriptive-branch-name re-file) merges OR closes by Add.105 (extending Add.102 Pred C by 2 ticks since 30min target window expired without resolution).
- **Pred D (skgandikota burst, carry):** at least 1 of {#26639, #26640, #26642} merges by Add.105.
- **Pred E (axis-7 lifecycle-hooks, carry):** third independent lifecycle-hooks PR by Add.106.
- **Pred F (axis-1 session-state 4th-author, carry):** opencode session-state PR by 4th distinct author by Add.105.
- **Pred G (close-and-refile taxonomy):** if a 4th distinct close-and-refile sub-pattern appears in any tracked repo by Add.106, the taxonomy in synth #244 needs a 4th branch.
- **Pred H (#242-Pred-1 extension):** evawong-oai's #19846/#19847/#19848/#19849/#19852 preserved-path stack — if any of the 4 still-OPEN siblings merge by Add.110, lifespan ≥2h (Class S). Currently 0/5 merged at **4h26m+** since open + #19867 sibling closed at 2h37m11s.
- **Pred I (gemini-cli pause):** if gemini-cli has zero merges from 21:17:32Z (#26079) through Add.105 close, the pause becomes a **promotable observation** as a cross-repo regime-asymmetry signal.

## Capture close

**22:39:00Z.** Next addendum (ADDENDUM-104) target window: 22:39:00Z → next tick.
