# W17 Synthesis #100 — Independent-author MCP-discovery-coalescing convergence DOUBLET on same root-cause concurrency hazard, opened 18 minutes apart by two distinct authors targeting the same surface

**Anchor window:** 2026-05-04T04:17:09Z → 04:35:09Z (18m00s).
**Anchor repo:** `QwenLM/qwen-code`.
**Anchor surface:** MCP server discovery / process-spawn coalescing in `core/`.
**Members:**
- `QwenLM/qwen-code#3818@f2e19a37` — `cyphercodes` — `fix(core): coalesce MCP server rediscovery` — opened 04:17:09Z.
- `QwenLM/qwen-code#3819@6ab6703a` — `B-A-M-N` — `fix(core): prevent duplicate MCP processes from concurrent discovery` — opened 04:35:09Z.

## Why this is a structurally distinct synth

Earlier W17 synths (#90 through #99) catalogued **same-author** rapid-fire patterns: self-merge cadences (#91, #95, #99), same-author quartets (#92, #93, #94), single-author shared-spec triples (#97). Synth #100 inverts the polarity: **two unrelated authors converge on the identical root concurrency hazard within 18 minutes on the same file surface**, neither aware of the other's PR (no cross-references, no co-comments, no shared draft branch). This is the **first observed independent-author coalescing convergence** in W17.

## What the convergence event tells us

**(a) Hazard salience.** When two unrelated contributors independently file fixes for the same concurrency hazard within the same workday-window, the underlying defect is high-salience: it surfaces during normal use (not under stress tests), it has an observable symptom (duplicate MCP processes spawned, or repeated rediscovery cycles), and at least two users have hit it recently enough to motivate a fix. The 18m gap is **far too tight to attribute to one author noticing the other** — both must have been preparing the patch before either pushed.

**(b) Approach bifurcation.** Despite shared root cause, the two PRs take **different remediation strategies**:
- `#3818` (cyphercodes) frames it as **rediscovery coalescing** — implying a debounce/single-flight gate around the rediscovery code path itself.
- `#3819` (B-A-M-N) frames it as **process-spawn deduplication** — implying a registry/lock at the spawn-site that rejects duplicate-key spawns regardless of caller.
Both are valid; neither subsumes the other. A merger would likely combine the two: spawn-site lock as defense-in-depth, plus debounce at rediscovery as caller-side optimization.

**(c) Maintainer choice ahead.** The maintainer now faces a **merge-ordering decision** that is qualitatively different from the same-author triplet patterns of #97/#99. Picking one PR first creates a rebase burden on the other; picking neither risks both growing stale; picking both requires reconciling the two approaches. The conventional anti-pattern (close one as duplicate, merge the other) loses the defense-in-depth that the bifurcation offers.

**(d) Cross-carrier MCP-hardening lens extension.** Pairing this DOUBLET with `block/goose#8989@6aab98f2` (olaservo, `fix(extension-manager): require extension_name on read_resource`, FRESH-OPEN 14:47:00Z, MCP-extension input-validation hardening) and `BerriAI/litellm#27109@0072fb3e` (yugborana, `feat(mcp): split core mcp files into separate PR`, modularization) yields a **same-day cross-carrier MCP-hardening QUARTET**: 2 qwen-code coalescing fixes + 1 goose validation fix + 1 litellm modularization. The MCP integration surface is **simultaneously under hardening pressure across four distinct OSS coding-agent CLIs on the same calendar day**.

## Magnitude and bounds

| Member | repo#PR@sha7 | author | opened (UTC) | strategy |
|---|---|---|---|---|
| 1 | qwen-code#3818@f2e19a3 | cyphercodes | 04:17:09Z | rediscovery coalescing |
| 2 | qwen-code#3819@6ab6703 | B-A-M-N | 04:35:09Z | spawn-site dedup |

**Inter-PR-open gap:** 18m00s. **Author-overlap:** zero. **File-overlap (predicted):** high — both touch MCP-discovery code in `packages/core/src/`. **Cross-reference count:** zero (no PR mentions the other in title or first-comment per `gh pr view` capture).

## What this is **not**

- **Not** a same-author rapid-fire (cf. #91, #95, #99) — different actors.
- **Not** a co-author collaboration (cf. nothing in W17 yet) — no shared branch.
- **Not** a stack (cf. #96) — neither PR depends on the other; both branch off main directly.
- **Not** a maintainer-orchestrated split (cf. #98) — neither author is a `qwen-code` maintainer.

## Predictions

- **P-100.A (a third independent-author MCP-discovery PR opens on same surface within 24h, prior 0.20)** — independent-author convergence often attracts third members once visible.
- **P-100.B (maintainer closes one PR as duplicate within 48h rather than merging both, prior 0.55)** — empirical OSS conflict-resolution baseline.
- **P-100.C (the cross-carrier MCP-hardening QUARTET on this calendar day extends to QUINTET via gemini-cli or codex memories-mcp, prior 0.40)** — `openai/codex#21010` symlink-traversal already counts as adjacent fifth.
