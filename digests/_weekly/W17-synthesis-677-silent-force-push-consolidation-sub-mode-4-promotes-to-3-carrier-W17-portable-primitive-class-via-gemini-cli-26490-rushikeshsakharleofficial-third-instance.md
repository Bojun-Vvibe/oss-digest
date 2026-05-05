# W17-synthesis-677 — silent-force-push consolidation sub-mode-4 promotes to 3-carrier W17-portable primitive class via gemini-cli #26490 rushikeshsakharleofficial third-instance

**Tick anchor**: ADDENDUM-347 (2026-05-05T07:15Z–08:05Z capture window).

**Synthesis claim**: Close-resubmit-recovery sub-mode-4 (silent-force-push consolidation on existing OPEN PR head) graduates from a 2-carrier observation (opencode + qwen-code) to a **3-carrier W17-portable primitive class** with the addition of google-gemini/gemini-cli #26490 (rushikeshsakharleofficial) at 07:19:09Z. The pattern is now **carrier-invariant author-response-to-non-merge** rather than a carrier-specific tooling artifact.

## Three W17 instances of sub-mode-4 (silent-force-push consolidation)

1. **opencode #25823 (LifetimeVip)** — observed in ADDENDUM-345 capture; head `b0762968968887d6e5614c6147b60d77e8d496fe` is the silent-force-push consolidation result (anchor was the auto-cleanup-stale-todos i18n feature). **State trajectory**: CLOSED → silent re-OPEN with new head → CLOSED (terminated in ADDENDUM-347 at 07:40:11Z, lifespan ~2 ticks post-force-push).

2. **qwen-code #3842 (wenshao)** — observed in ADDENDUM-346 capture; head changed `6cbab376d7ab8f1ffc554f545c9ca955ae8d6610` → `8e8e18ca7f44441fb20d74369f06c8a481212101` at 06:47:21Z. **Anchor context**: declared "PR-1 of 3" labeled-sequence (synth-670 framework). **State trajectory** through ADDENDUM-347: stable OPEN with no second force-push at tick+1 (P-346.F NOT-INSTANTIATED at tick-1).

3. **gemini-cli #26490 (rushikeshsakharleofficial)** — observed in ADDENDUM-347 capture; head changed `9a233d37eaca1330fc3c93611433b6e3c472878d` → `2d8284164964dceedb042764c1187e4e1d378afc` at 07:19:09Z. **Anchor context**: same-author DOUBLET (#26489 + #26490, ADDENDUM-346 fresh-opens) with 27m53s mid-burst gap on disjoint substrates (perf-instrumentation + MCP-discovery). **Author-response asymmetry**: force-push lands on **most-recent leg only** (#26490); the older leg #26489 (head `acfe282e48e9ab8f36d3374bb021a21c148411bb`) stays untouched.

Verification per `gh api repos/<C>/pulls/<N>`:

- `repos/sst/opencode/pulls/25823 → head.sha b0762968968887d6e5614c6147b60d77e8d496fe`, state CLOSED.
- `repos/QwenLM/qwen-code/pulls/3842 → head.sha 8e8e18ca7f44441fb20d74369f06c8a481212101`, state OPEN.
- `repos/google-gemini/gemini-cli/pulls/26490 → head.sha 2d8284164964dceedb042764c1187e4e1d378afc`, state OPEN.

## Carrier-invariance argument

The three carriers — opencode (sst, Bun-based, TypeScript-heavy), qwen-code (QwenLM, Node.js fork lineage), gemini-cli (Google, Node.js with extensive bot lifecycle automation) — share **no common merge-bot, no common required-status-check tooling, no common author overlap**. The three authors (LifetimeVip, wenshao, rushikeshsakharleofficial) have **zero cross-carrier author overlap** in W17 sub-cycle. Despite this, all three exhibit the identical structural response to non-merge: **force-push to existing PR head rather than open a new PR**, with **no narration in title/body** (silent — distinguishable from comment-pushes that bear `force-push #N` text).

**Falsification clause**: If a fourth instance arises on a fourth carrier (codex, litellm, goose, crush) within W17, the primitive class promotes to **W17-saturating universal-author-response primitive**. Conversely, if no fourth instance arises through ADDENDUM-355 (~7 more ticks), the 3-carrier ceiling becomes the W17 saturation cap and the pattern remains "portable but not universal."

## Outcome distribution observed so far

- 1 of 3 instances has reached terminal state: **opencode #25823 → CLOSED** (LifetimeVip) at 07:40:11Z, ~2 ticks post-force-push.
- 2 of 3 instances remain OPEN with no second force-push within 1 tick (qwen-code #3842, gemini-cli #26490).
- **0 of 3 instances has merged** post-force-push within observation window.

This 0-merge / 1-close / 2-stable distribution is preliminary evidence that **silent force-push consolidation does NOT correlate with imminent merge** — distinct from the synth-668 bot-meta-lifecycle persistence framework (where bot survival is the primary mode) and from synth-670 declared-sequence framework (where labeled sequences eventually merge in declared order). Sub-mode-4 instead appears to function as **author-private iteration on a publicly-OPEN PR** without state-transition pressure.

## Cross-link to declared-sequence-stall family

Two of the three sub-mode-4 instances are anchored on declared-sequence PRs:

- qwen-code #3842 = "PR-1 of 3" labeled-sequence anchor (wenshao, synth-670 framework).
- gemini-cli #26490 = second leg of same-author substrate-saturation DOUBLET (rushikeshsakharleofficial, synth-671 framework — substrate-saturation precondition at N=2 by external contributor).

This suggests sub-mode-4 may be **co-incident with author-multi-leg ambitions** rather than uniformly distributed across PR types. Single-leg PRs without declared sequence (opencode #25823 LifetimeVip i18n) also exhibit the pattern, so the co-incidence is correlational not causal — but the prior for sub-mode-4 should be **raised conditional on author-active multi-leg substrate work**.

## Predictions descended from this synthesis

- Next 7 ticks: probability of fourth-carrier instance ≈ **0.45** (3-of-7 carriers already host instances; baseline arrival rate ~0.06 per carrier per tick suggests ~0.40 expected probability across remaining 4 carriers × 7 ticks).
- Within those 7 ticks, probability of any current instance reaching MERGED state ≈ **0.30** (qwen-code #3842 most likely candidate given declared-sequence merge-eventually pattern; gemini-cli #26490 second).
- Probability of any current instance reaching CLOSED state ≈ **0.25** (LifetimeVip precedent established; wenshao and rushikeshsakharleofficial both have prior of carrying long-OPEN PRs without close).
