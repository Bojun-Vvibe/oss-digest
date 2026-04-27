# W17 Synthesis #231 — Cross-repo runtime-sandbox/permission convergent burst as a third axis of convergent-fix coupling, distinct from LLM-API (synth #227) and MCP/agent-tool (synth #229), with sub-30m near-simultaneous N=5 same-author OPEN-burst kinetics

**Seeded by:** ADDENDUM-97 (2026-04-27, capture 17:44:06Z → 18:23:59Z).
**Predecessors:** synth #227 (4-repo reasoning-content cluster as upstream-API behavior-change propagation seed), synth #229 (cross-repo MCP/agent-tool-integration as second axis of convergent-fix coupling). This synth identifies a **third structurally-distinct axis** along which convergent-fix activity propagates across the 6-repo corpus.

## Claim

Within a 22-minute envelope (17:55:36Z → 18:17:24Z UTC, 2026-04-27), the codex and gemini-cli repos opened **6 PRs by 2 distinct authors on a unified runtime-sandbox/permission semantic surface**:

- codex evawong-oai #19846 `82c9632e` `Add preserved path policy primitive` (552+/177−) at 18:12:51Z
- codex evawong-oai #19847 `7a081eed` `Enforce preserved path names in Seatbelt` (142+/25−) at 18:13:04Z
- codex evawong-oai #19848 `fca39892` `Add preserved path shell preflight` (471+/0−) at 18:13:13Z
- codex evawong-oai #19849 `f23239ce` `Propagate runtime permission profiles` (116+/21−) at 18:13:28Z
- codex evawong-oai #19852 `0293af6c` `Enforce preserved path names in Linux sandbox` (1303+/78−) at 18:17:24Z
- gemini-cli ehedlund #26065 `9b9c7151` `fix(cli): ensure sandbox proxy cleanup and remove handler leaks` (79+/10−) at 17:55:36Z

The evawong-oai N=5 sub-stack landed in **4 minutes 33 seconds** (#19846 → #19852, 18:12:51Z → 18:17:24Z). The first four (#19846–#19849) landed in **37 seconds**. The gemini-cli ehedlund PR opened **17m15s before** the evawong-oai stack started, and **21m48s before** the evawong-oai stack closed. Total cross-repo cluster envelope: **21m48s**.

This is structurally distinct from synth #227 (LLM-API behavior-change propagation, surface = `reasoning_content` / `<think>` parsing / model-side response semantics) and synth #229 (MCP/agent-tool-integration, surface = tool-output guarding, custom MCP fileparams metadata). The new third axis has surface = **process-runtime sandbox boundary enforcement** (preserved-path policy, Seatbelt enforcement, Linux sandbox enforcement, sandbox proxy cleanup, handler-leak elimination, runtime permission profile propagation). This surface is **OS-and-security-layer**, NOT model-layer (synth #227) and NOT tool-layer (synth #229).

## Why this is a NOT a recycle of prior synths

Prior W17 axis-classification synths:

- **Synth #227** (LLM-API/reasoning-content): cluster members touch *model response parsing*. Files modified: `litellm/llms/anthropic/...`, `gemini-cli/packages/core/src/coreToolScheduler.ts`-style model-output handlers, `qwen-code/packages/core/src/openai/...` parsers. The **upstream cause** was inferred to be a model-side API behavior change (Anthropic / OpenAI / DeepSeek changing how `reasoning_content` or `<think>` blocks are emitted).
- **Synth #229** (MCP/agent-tool-integration): cluster members touch *tool-call validation and output handling*. Files: codex `disallow fileparams metadata for custom mcps` (#19836), opencode `guard against undefined MCP tool output` (#24618), opencode `show MCP tool arguments in permission dialog` (#24605, CLOSED). The **upstream cause** was inferred to be MCP spec ambiguity around tool-arg validation and output schemas.

The new synth #231 cluster has **none of those properties**:

- No PR touches model-response parsing.
- No PR touches MCP tool-call validation.
- All 6 PRs touch the **OS/process runtime boundary**: which paths are accessible, which permission profiles propagate to subprocesses, how the sandbox proxy cleans up, how Seatbelt rules enforce path names, how Linux sandbox rules enforce path names, how subagent permissions propagate up the tree.

The **upstream cause is hypothesized to be a coordinated security-review finding** at OpenAI (driving evawong-oai's preserved-path stack) that propagates as a **defensive cross-repo signal** to gemini-cli's sandbox-proxy maintainers. The mechanism is NOT shared API surface (synth #227) and NOT shared protocol surface (synth #229) — it is **shared threat-model surface**.

## Why this is a NOT a recycle of synth #224 (sub-author N=2-exactly cardinality)

evawong-oai's N=5 burst would falsify synth #224 if synth #224 still applied to codex (which Add.97 establishes it does NOT — synth #224 has been demoted to litellm-and-gemini-cli-specific). But the synth #231 claim is **not about cardinality**; it is about **cross-repo surface coupling kinetics**. The fact that evawong-oai chose to **stack 5 PRs on the same surface in the same minute** (#19846–#19849 in 37 seconds) is the **author-side signature of a coordinated security review**, not a sub-author drive-by N=2 pattern.

Compare to the closest synth #224 instance: gemini-cli pmenic N=2 (#26054 + #26063) opened at 16:52:06Z and 17:41:39Z — 49m33s apart, **two distinct surfaces** (rename typo vs security/temp-dir). pmenic's pair has **2 surfaces × 49m gap × N=2**. evawong-oai's stack has **1 surface × 4m33s gap × N=5**. These are categorically different author-side regimes.

## Why this is NOT a recycle of synth #223 (convergent-fix-duo merge-suppression via close-not-merge)

Synth #223 is about *resolution kinetics* of convergent fixes (one merges, the other gets closed-not-merged). Synth #231 is about *opening kinetics* of cross-repo convergent activity. Synth #231 makes no resolution claim yet — all 6 PRs are OPEN at Add.97 capture. Resolution prediction is deferred to Add.98–Add.101.

## Concrete data: evawong-oai stack diff-size profile

| PR | Title | Additions | Deletions | Total LOC delta |
|---|---|---:|---:|---:|
| #19846 | Add preserved path policy primitive | 552 | 177 | 729 |
| #19847 | Enforce preserved path names in Seatbelt | 142 | 25 | 167 |
| #19848 | Add preserved path shell preflight | 471 | 0 | 471 |
| #19849 | Propagate runtime permission profiles | 116 | 21 | 137 |
| #19852 | Enforce preserved path names in Linux sandbox | 1303 | 78 | 1381 |

**Total stack diff: 2884 LOC across 5 PRs in 4m33s.** Average 577 LOC/PR. Median 471 LOC/PR. The largest (#19852, Linux sandbox enforcement, 1381 LOC) lands **last** — consistent with **stacked PR review-engineering** where the API-surface PR (#19846 policy primitive) is opened first to establish the type signature, and consumers (#19847, #19852, #19848, #19849) reference it.

This **stacked-PR review-engineering pattern** with a single author opening N=5 PRs in 4m33s is itself a synth-candidate at the author-tool dimension (the author is using `git push` + a stack manager like `gh prx` or `git-spice` to mass-open). But this is incidental to synth #231's **surface** claim.

## ehedlund #26065 timing relative to evawong-oai

ehedlund #26065 opened at **17:55:36Z**, **17m15s before** evawong-oai #19846 at 18:12:51Z. This is the **inverse of the synth #225 merge→open coupling** (which was: a merge in repo A triggers a related OPEN in repo B). Here, an **OPEN in gemini-cli precedes an OPEN burst in codex on a related surface**. This may be:

1. **Causal**: ehedlund saw an upstream notice (e.g., a sandbox CVE disclosure thread) and filed first; evawong-oai's team filed later from the same upstream notice.
2. **Coincidental**: both teams had independently-scheduled security reviews concluding within the same hour.
3. **Reflexive**: gemini-cli ehedlund was monitoring codex stack activity (perhaps via a security-watcher bot) and filed reactively when an early signal appeared.

The data does not distinguish (1) vs (2) vs (3) yet. **A clean test**: if a **third repo** (most likely opencode given its sandbox/permission surface in #24638 michalsalat) opens a sandbox/permission PR within 4 windows, hypothesis (1) gains support. If no third repo follows, (2) remains the parsimonious explanation.

## Surface-classification axis taxonomy as of Add.97

This synth #231 fills the **third corner** of a 3-axis taxonomy of cross-repo convergent-fix coupling:

| Axis | Surface | Upstream cause type | Anchor synth | First instance | Cluster size |
|---|---|---|---|---|---|
| **LLM-API** | Model-output parsing (`reasoning_content`, `<think>` tags) | Model-vendor API behavior change | #227 | 2026-04-26 | 5+ PRs / 4 repos |
| **MCP/agent-tool** | Tool-call validation, output schemas, custom-MCP metadata | MCP spec ambiguity / agent-tool integration drift | #229 | 2026-04-27 (Add.96) | 3 PRs / 2 repos |
| **Runtime-sandbox/permission** | OS process boundary, preserved paths, sandbox enforcement, permission propagation | Coordinated security review / threat-model update | #231 | 2026-04-27 (Add.97) | 6 PRs / 2 repos |

The taxonomy is **not exhaustive** but is **structurally orthogonal**: each axis has a distinct surface, distinct upstream-cause class, and distinct propagation kinetics. A 4th axis is plausible (e.g., **build-and-release infrastructure** axis — bolinfest's #19851 Bazel migration + #19854 stale workflow URL fix are infrastructure-axis, semantically adjacent to goose lifeizhou-ap #8856 dependabot auto-merge). But the build/release axis lacks the **cross-repo near-simultaneous coupling** that defines synths #227, #229, #231.

## Falsifiable predictions

1. **Highest-confidence**: A 3rd repo opens a runtime-sandbox/permission PR within 4 windows. Most likely entrants: opencode (extending michalsalat #24638's permission propagation), goose (fresh3nough #8849 ACP+ migration may include sandbox concerns), litellm (less likely — proxy-layer, not runtime-layer).
2. **High-confidence**: At least 2 of the 5 evawong-oai PRs merge within 4 windows; the 1303-LOC #19852 takes ≥1 review round and may not merge this week. The 471+/0− #19848 (preflight, no deletions, only additions) likely lands first as it is the most additive.
3. **High-confidence**: gemini-cli ehedlund #26065 merges within 3 windows (only 79+/10−, established author, fix-class title prefix).
4. **Medium-confidence**: A second cross-repo sandbox PR pair appears within 6 windows on a **distinct sub-surface** (e.g., capability dropping, syscall filtering, namespace isolation) — same axis #231, different sub-surface, different author pair. This would be the synth #231 equivalent of synth #227's per-provider nested sub-cluster structure.
5. **Speculative**: The runtime-sandbox/permission axis has **higher merge-decision latency** than the LLM-API axis or the MCP axis, because security-review PRs need security-team review which is slower than maintainer-team review. Empirical test: after 7 days, compare merge-rates across the 3 axes; predict #231 axis < #229 axis < #227 axis on merge-fraction. (Will revisit at end of W17.)

## What this synth does NOT claim

- It does NOT claim that runtime-sandbox/permission is the **only** 3rd axis. Build-and-release infrastructure may be a 4th axis.
- It does NOT claim that the cluster will all merge. It is plausible that some PRs are closed-not-merged after security review redirects the implementation. The cluster's **OPEN-burst signature** is the synth claim, not the merge outcome.
- It does NOT claim that all OS-sandbox PRs across the corpus belong to this cluster. Filter is **temporal proximity (sub-30m cross-repo) AND surface adjacency (preserved paths / sandbox enforcement / permission propagation)**.

## Cross-references

- Reference Add.97 sections "codex queue intake EXPLODES" and "gemini-cli post-burst quiet" for raw event data.
- Synth #227 anchor for axis #1 (LLM-API).
- Synth #229 anchor for axis #2 (MCP/agent-tool).
- Synth #224 demotion: synth #231's evawong-oai N=5 OPEN burst is the data event that falsifies synth #224's N=2-exactly cap on the codex side.
- Synth #232 (forthcoming): addresses the methodological reflexivity issue surfaced by Add.97's codex backfill audit, distinct from synth #231's substantive axis claim.
