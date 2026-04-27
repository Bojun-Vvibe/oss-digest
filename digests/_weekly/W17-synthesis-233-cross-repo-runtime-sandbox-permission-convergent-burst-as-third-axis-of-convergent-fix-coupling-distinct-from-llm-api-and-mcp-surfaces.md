# W17 synthesis #233 — cross-repo runtime-sandbox / permission convergent burst as a third axis of convergent-fix coupling distinct from LLM-API and MCP surfaces, with sub-30m cross-repo near-simultaneous N=5 OPEN burst kinetics

**Promoted from:** ADDENDUM-97 synth-candidate #231 (2026-04-27 18:23:59Z capture).
**First operational evidence:** 2026-04-27 18:13:13Z–18:17:24Z (codex evawong-oai N=5 same-second-class OPEN burst on preserved-path / sandbox-permission surface) + 17:55:36Z (gemini-cli ehedlund #26065 sandbox-handler-leak fix). Cross-repo span: ~22 minutes.
**ADDENDUM-98 follow-up:** No 3rd-repo entrant yet (1/4 windows on Add.97 pred #4). Cluster persists unchanged.

## Claim

A **third axis of cross-repo convergent-activity coupling** has emerged in W17, structurally distinct from the two prior axes already documented in the corpus:

- **Axis 1 (synth #227)**: LLM-API surface / `reasoning_content` & response-shape — links codex, litellm, qwen-code, goose around LLM-protocol-level fixes.
- **Axis 2 (synth #229)**: MCP / agent-tool-integration surface — links codex, opencode, gemini-cli around tool-spec / MCP-server / tool-call-handler PRs.
- **Axis 3 (this synth)**: **Runtime-sandbox / permission / preserved-path surface** — operating-system-level execution-permission policy plumbing (Seatbelt, Linux sandbox, preserved-path policy primitives, sandbox-proxy cleanup, handler-leak prevention).

The seeding cluster (verified by PR number and SHA via `gh api repos/.../pulls/<n>`):

- **codex evawong-oai N=5 OPEN burst** in 4m33s span (all 2026-04-27, all status open at Add.97 capture, ALL still open at Add.98 capture):
  - #19846 `82c9632e` `Add preserved path policy primitive` 18:12:51Z (552+/177−)
  - #19847 `7a081eed` `Enforce preserved path names in Seatbelt` 18:13:04Z (142+/25−)
  - #19848 `fca39892` `Add preserved path shell preflight` 18:13:13Z (471+/0−)
  - #19849 `f23239ce` `Propagate runtime permission profiles` 18:13:28Z (116+/21−)
  - #19852 `0293af6c` `Enforce preserved path names in Linux sandbox` 18:17:24Z (1303+/78−)
- **codex bolinfest #19841** `015d9276` `permissions: remove cwd special path` 17:57:33Z (147+/426−). **Same-surface (permissions/cwd-handling) by a distinct sub-author** within the same window — converges with evawong-oai stack on the OS-permission boundary semantics.
- **gemini-cli ehedlund #26065** `9b9c7151` `fix(cli): ensure sandbox proxy cleanup and remove handler leaks` 17:55:36Z (79+/10−). Sandbox-handler-leak surface — operationally adjacent to codex's preserved-path / Seatbelt enforcement (both deal with **process-isolation lifecycle hygiene**).

## Distinguishing kinetics

What makes this a **distinct axis** rather than a coincidental same-week activity cluster is the **kinetic profile**:

1. **Cross-repo near-simultaneous open burst**: codex preserved-path stack and gemini-cli sandbox-cleanup PR were opened within 22 minutes of each other across 2 different repos. The two prior axes (#227, #229) emerged with **multi-day cross-repo open spans**, not sub-30m.
2. **Same-author N=5 same-second-class intra-repo open burst** is unprecedented in W17 corpus prior to this cluster (synth #224 documented N=2-exactly cap which this falsifies on the OPEN side).
3. **Diff-size asymmetry**: the codex stack ranges from 116+/21− to 1303+/78− (single-stack span >10× in lines changed). Synth #227 / #229 clusters tend to have within-1× diff sizes per cluster member.
4. **Surface specificity**: every PR in this cluster touches **OS-level execution-isolation primitives** (Seatbelt is macOS-specific, Linux sandbox is Linux-specific, preserved-path is a cross-OS concept, handler-leak is event-loop hygiene). This is **infrastructure-below-the-LLM-call**, whereas axes 1 and 2 are **at-the-LLM-call** and **at-the-tool-call** respectively. The 3 axes correspond to a clean **layered decomposition**:
   - Axis 1 (LLM-API): the model-protocol layer
   - Axis 2 (MCP/tools): the tool-integration layer
   - Axis 3 (sandbox/permission): the OS-execution layer

This **layered cross-repo convergent-fix coupling** is the structural claim. The corpus appears to be exhibiting **coordinated cross-repo activity at each architectural layer of the agent stack**, not random cross-repo coincidences.

## ADDENDUM-98 follow-up evidence

In the 52-minute window after the cluster's seeding, the following tests apply:

- **Codex evawong-oai N=5 stack: 0 of 5 merged** at Add.98 capture. Stack persists in OPEN state for 1h+ after seeding. (Add.97 pred #1 PENDING at 1/3 windows.)
- **No 3rd-repo entrant** (no opencode / litellm / goose / qwen-code sandbox-permission PR opened in the Add.98 window). (Add.97 pred #4 PENDING at 1/4 windows.)
- **No abandonment**: none of the cluster PRs closed-without-merge. The cluster has **non-zero half-life** in the OPEN state, distinguishing it from drive-by sub-clusters.
- **codex starr-openai #19862** `[codex] Shard exec Bazel integration test` opened 18:52:10Z — **CI-test surface for sandbox/exec**. Adjacent (but not a direct member) to the sandbox-execution surface. **Indirect surface-adjacent activity** within the same repo.

## Falsification conditions

This synth is falsified if any of the following occur within 4 windows from Add.97:
1. The codex evawong-oai N=5 stack is fully closed-without-merge (cluster was a one-off design exploration, not a real surface).
2. No 3rd-repo entrant appears within 4 windows AND the cluster fully merges (cluster was codex+gemini-cli internal alignment, not a corpus-wide axis).
3. A new sub-author opens ≥3 sandbox/permission PRs on a 4th repo (opencode, goose, litellm, qwen-code) within 4 windows AND those PRs cite each other or share a design doc — would PROMOTE this from "convergent" to "coordinated" and require a separate synth.

## Cross-references

- Synth #224 (sub-author N=2-exactly cardinality): **falsified on OPEN side by evawong-oai N=5** within this cluster — this synth (#233) is **the operational vehicle of that falsification**.
- Synth #227 (LLM-API/reasoning-content axis 1): structurally distinct surface (model-protocol vs. OS-execution).
- Synth #229 (MCP/agent-tool axis 2): structurally distinct surface (tool-integration vs. OS-execution).
- Synth #230 (maintainer self-merge sub-30m N=2 on adjacent surface): **bolinfest #19854 + #19851 sub-30m N=2 merge** on Bazel + npm-staging CI in Add.98 window is an instance of synth #230 on **CI-adjacent** surface, structurally adjacent to (but not a member of) this cluster.
- Synth #235 (maintainer-led closure of outsider-opened convergent sub-cluster, Add.98-seeded via litellm #26622): a **resolution kinetic** that may apply to this cluster's eventual merge pattern — predict codex maintainers (rust-team) merge evawong-oai stack rather than evawong-oai self-merging.

## Predictions specific to this synth

1. **codex evawong-oai #19846 `Add preserved path policy primitive` merges first** of the N=5 stack (smallest review surface, stack-bottom dependency) within 3 windows from Add.97.
2. **#19852 `Enforce preserved path names in Linux sandbox` (1303+/78−) merges last or NOT THIS WEEK** due to size + cross-platform review burden.
3. **3rd-repo entrant within 4 windows from Add.97** with high probability — predict opencode is most likely (sandbox/permission is on opencode's roadmap per kitlangton's prior #24638 nested-permission work) > goose > litellm > qwen-code.
4. **Cluster total merge count by end of W17 (Add.105)**: at least 3 of the 6 cluster PRs (5 evawong-oai + 1 ehedlund) merge; bolinfest #19841 is independent (not a strict member, distinct semantic of `cwd special path`).
