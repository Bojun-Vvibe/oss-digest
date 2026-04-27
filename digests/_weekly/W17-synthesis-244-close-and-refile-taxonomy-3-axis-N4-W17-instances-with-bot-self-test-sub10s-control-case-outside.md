# W17 synthesis #244 — same-author close-and-refile of an unmerged PR splits into a **3-axis taxonomy** at N=4 W17 instances (sanchitmonga22, yuneng-berri, kitlangton, ayushh0110); axes are **{branch identity, title delta, close trigger}** with an emergent fourth pattern (bot self-test sub-10s open-and-close) sitting outside the taxonomy as a control case

## Context

A close-and-refile event is defined here as: a single GitHub author opens a PR, the PR is closed (CLOSED, not MERGED), and the same author opens a new PR with **content overlap** (same title, same branch, or near-identical diff) within a short window (≤24h). This pattern recurred 4 times in W17 across three repos and one repo-internal automation account opened a near-degenerate variant. Synth #244 establishes the taxonomy.

## The four W17 instances

| Instance | Repo | Author | Closed PR | Refile PR | Gap | Branch identity | Title delta | Trigger |
|---|---|---|---|---|---|---|---|---|
| **A** | opencode | sanchitmonga22 | **#24664** (closed 20:42:21Z, lifespan 13m51s) | **#24666** (opened 20:47:12Z) | **4m51s** | **same** branch `feat/plugin-model-before-hook` | **shortened** ("for routing-style plugins" suffix dropped) | manual close, edits made on same branch then reopened |
| **B** | litellm | yuneng-berri | **#26638** (closed 22:00:00Z, lifespan 8m09s) | **#26643** (opened 22:00:41Z) | **41s** | **different**: `claude/pedantic-hoover-4aeb88` → `litellm_fix-config-update-targeted-upserts` | **byte-identical** | manual close, branch rotation from auto-generated to descriptive |
| **C** | opencode | kitlangton | **#24679** (closed 22:15:35Z, lifespan 15m17s) | **#24682** (opened 22:16:05Z) | **30s** | **different**: `kit/httpapi-json-shape-parity` → `kit/httpapi-json-parity-dev` | **byte-identical** | manual close (presumed; close happens 23s after #24677 merge by same author — likely workflow rotation) |
| **D** | litellm | ayushh0110 | **#26634** (closed 21:42:23Z, lifespan 28m48s) | **#26641** (opened 21:55:46Z, **also closed at 22:37:02Z lifespan 41m16s**) | **13m23s** | **same** branch `fix/mcp-filter-preserve-native-tools` | **byte-identical** | manual close, edits pushed to same branch, reopened, **then closed again without merge** |

## The taxonomy axes

Three orthogonal binary axes cleanly partition instances A–D:

1. **Branch identity**: `same` (A, D) vs `different` (B, C).
2. **Title delta**: `byte-identical` (B, C, D) vs `edited` (A only).
3. **Close trigger**: `single close-then-reopen` (A, B, C) vs `repeated-close cycle` (D, which closed twice).

| | Branch=same | Branch=different |
|---|---|---|
| **Title=identical** | D | B, C |
| **Title=edited** | A | (no instance) |

The **(Branch=same, Title=identical, Repeated-close)** quadrant (D) is structurally the **most pessimistic** sub-pattern: it represents a contributor unable to converge to a mergeable state across multiple cycles on the same branch with no title rescope between cycles. Empirically it is also the **only quadrant where neither attempt has merged at the time of synth promotion**.

The **(Branch=different, Title=identical, Single-close)** quadrant (B, C) is structurally the **most optimistic** sub-pattern: branch rotation suggests deliberate workflow hygiene rather than failed convergence; identical title suggests the contributor is confident the PR's *intent* is correct and is only re-staging the *vehicle*. This is the only quadrant with N=2 in W17 (B, C).

The **(Branch=same, Title=edited, Single-close)** quadrant (A) has been informally read as "PR scope rescope": the author closed a too-broad framing and reopened a narrower one on the same code. This is the **most informationally-rich** sub-pattern in terms of intent signaling and matches what one would expect from a PR review feedback loop where the reviewer asked for scope reduction.

## The control case sitting outside the taxonomy

**oss-agent-shin #26646** `test: validate oss-agent-shin PAT can file PRs` opened **22:21:18Z** closed **22:21:24Z** — lifespan **6 seconds**. Branch `worktree-compiled-wondering-bear`, head SHA `0beec45c138d3d92a956cc1e1dc75fa2bd2ae782`. The author is an **automation account** (agent), the title explicitly self-identifies as PAT validation, and there is no refile. This is **not a close-and-refile event** but it is structurally adjacent: a PR opened by a single author that closes within seconds without merge, with no human review opportunity.

The control case matters because it **bounds the close-and-refile taxonomy from below**: any genuine close-and-refile must have a non-trivial first-PR lifespan (long enough for a human or CI signal to motivate the close). Instances A–D all have first-PR lifespans of **8m09s – 28m48s**, two orders of magnitude above #26646. The taxonomy's first-PR lifespan **floor of ≈8min** therefore separates **deliberate close-and-refile** from **automation self-test**.

## Cross-pattern temporal clustering

All four close-and-refile events occurred within a **2h08m window** of W17 (sanchitmonga22 closed 20:42:21Z → ayushh0110 closed-second-time 22:37:02Z). Two repos (opencode, litellm) participated; codex, gemini-cli, goose, qwen-code did not. The dense temporal clustering inside ≈2h across two repos is **suggestive of a shared workflow trigger** — possibly a CI infrastructure event, a shared code-formatter rollout, or a shared LLM-agent that is producing PR drafts for multiple authors. The synth does **not** make this claim because the available metadata cannot rule out coincidence at N=4.

A weak supporting observation: instance B (yuneng-berri) used branch `claude/pedantic-hoover-4aeb88` — an **auto-generated branch name in the `claude/<adjective>-<noun>-<hex>` namespace**, which is the convention used by Claude-Code-driven PR drafting. Instances A, C, D use **descriptive author-prefixed branches**, suggesting human-authored. **Mixed automation provenance within the close-and-refile cohort** — relevant to whether the taxonomy generalizes.

## Comparison to other "abandon-and-restart" patterns observed earlier in W17

- **Synth #59** (sub-15-minute self-close on flaky-test surface): single-PR close without refile; not the same pattern (no refile event).
- **Synth #66** (opencode self-close pattern is surface-agnostic and time-bimodal): aggregate observation about self-closes; the close-and-refile sub-pattern was **not separately classified** in #66.
- **Synth #82** (duplicate PR convergence by independent authors on micro-feature surface): different authors, not same-author refile.
- **Synth #87** (asymmetric half-merge of sub-10s doublet — prune half lands, rework half iterates): the "rework half iterates" sub-pattern is a **near-cousin of close-and-refile** but the iteration happens **without explicit close**, so not subsumed.
- **Synth #93** (first-appearance author debut as 4-PR introduction with 3-PR rapid burst): debut burst, not close-and-refile.

The close-and-refile taxonomy in #244 is therefore **a fresh axis not subsumed by any prior W17 synth**, and it complements the close-without-refile observations in #59 and #66.

## Operational implication

When projecting whether a CLOSED-not-merged PR will be refiled (and on what timescale), classify by:

1. **First-PR lifespan**: if <60s, almost certainly **not** a refile candidate (automation/control case territory). Refile candidates concentrate at **first-PR lifespan 8–30min**.
2. **Branch namespace**: auto-generated branch (`claude/`, `cursor/`, `codex/<random>`) suggests possible refile within ≈1min on a renamed branch (instance B class). Author-prefixed descriptive branches suggest refile is more likely on the same branch with edits (instance A, D class).
3. **Title delta on refile**: byte-identical title implies single-cycle convergence is more likely (B, C); edited title implies scope rescope and convergence likelihood is higher (A); same-branch byte-identical refile is the highest-risk sub-pattern (D).

## Predicates this synth puts up

- **#244-Pred-1:** the next close-and-refile event observed in any tracked repo by Add.108 falls into one of the three already-instantiated quadrants (B/C, A, or D). If it falls into the empty fourth quadrant **(Branch=different, Title=edited)**, the taxonomy expands to 4 quadrants.
- **#244-Pred-2 (D-quadrant resolution):** ayushh0110's `fix/mcp-filter-preserve-native-tools` branch will see **either a third refile attempt with the same branch+title within 24h** or **branch abandonment** (no further activity for ≥48h). Tests whether D-quadrant authors re-converge or abandon.
- **#244-Pred-3 (C-instance kitlangton resolution):** #24682 either merges within ≤30min (matching the kitlangton same-day session lifespan distribution per synth #243) or stays open ≥4h (out-of-pattern). The middle band ≈30min–4h would be a **novel kitlangton lifespan regime** and would itself be promotable.
- **#244-Pred-4 (temporal clustering durability):** by Add.110, no other 2h-window in W17 contains ≥3 close-and-refile events. If another such cluster appears, the W17 burst is repeating, and shared-trigger investigation is warranted.
- **#244-Pred-5 (automation control bound):** no genuine close-and-refile event in any tracked repo by Add.110 has a first-PR lifespan <60s. Operationalizes the floor between automation and deliberate refile.

## What this synth does NOT claim

- It does not claim a single causal mechanism for the 2h close-and-refile cluster — coincidence is permitted at N=4.
- It does not claim the three taxonomy axes are exhaustive — additional axes (e.g., diff size delta between closed and refiled PR, files-touched overlap, presence of CI failure on closed PR) are likely once instrumented but are not visible in `gh pr list` JSON.
- It does not claim D-quadrant always fails to merge — only that it has the most cycles and zero merges across the W17 sample.
- It does not subsume synth #59, #66, #82, #87, or #93 — each addresses a distinct related-but-not-identical pattern.

## Relationship to synth #243 (this same tick)

Synth #243's meta-claim is "kitlangton same-day series is modally undescribable at N≤10." Instance C of this synth's taxonomy (kitlangton #24679→#24682) is **the first close-and-refile event by kitlangton in W17**. That close-and-refile event happened **9m23s after #24677 merged** — i.e., during the same author session whose modal fit just failed for the fourth time. **The arrival of a new behavioral pattern (close-and-refile) into a series whose kinetic model is already failing to describe it suggests the series has a regime-change-prone author**, not a stable kinetic process. This is consistent with #243's "honest model" framing of "random-walk over a skewed lifespan distribution with author-and-surface-class confounding," and weakly supports #243's binding rule against further kinetic-modality promotion on the kitlangton series until N≥15.
