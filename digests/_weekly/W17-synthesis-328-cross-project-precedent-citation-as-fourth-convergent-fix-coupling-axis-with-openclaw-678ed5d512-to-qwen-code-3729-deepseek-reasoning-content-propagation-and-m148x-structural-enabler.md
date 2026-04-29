# W17 Synthesis #328 — Cross-PROJECT precedent citation as a 4th convergent-fix coupling axis distinct from cross-W17-repo coupling: qwen-code tanzhenxin #3729 (`762f603e` Add.148, "fix(core): inject reasoning_content on DeepSeek tool-call replays") cites `openclaw/openclaw` commit `678ed5d512` as live-DeepSeek-API corroborating precedent for the empty-string `reasoning_content` injection — establishing that the W17 reasoning_content surface convergence (synth #145, #225, #227, #237) is propagating beyond the 6 W17-tracked repos into the WIDER OSS LLM-tooling ecosystem; AND the M-148.X post-silence-exit author-AND-feature-line-double-rotation pattern (Add.148) is structurally enabled by cross-project precedent (allowing fresh authors to land on fresh feature lines with external corroboration rather than requiring intra-repo same-author / same-feature-line continuation per M-145.M / M-147.F)

**Scope:** Add.148 qwen-code tanzhenxin #3729 (DeepSeek `reasoning_content` injection, 153+/35-, fixes #3695+#3619+relates #3724, mergeCommit `762f603e9b3633b1a484c5173be8cb10d811137f`) with reference to synth #145 (cross-repo preserve-reasoning-content theme convergence sub-2h proximity), synth #225 (cross-repo merge-to-open coupling on reasoning_content lifecycle), synth #227 (4-repo reasoning_content cluster as upstream API behavior change propagation seed with chain amplification), synth #237 (error classification / retry policy state machine as 5th convergent axis), and synth #325 M-147.F + Add.148 M-148.X (post-silence-exit author / feature-line continuation classes).

## Claim (falsifiable)

**P-328.A:** The W17 reasoning_content surface convergence (4-repo cluster per synth #227, sub-2h temporal proximity per synth #145) is propagating BEYOND the 6 W17-tracked repos into the wider OSS LLM-tooling ecosystem. The Add.148 qwen-code #3729 PR body explicitly cites `openclaw/openclaw@678ed5d512` as the **live-DeepSeek-API corroborating precedent** for the empty-string `reasoning_content` injection on tool-call replay turns, treating the cross-project commit as a substitute for live-API integration testing. The cross-PROJECT precedent citation establishes a **4th coupling axis** for convergent-fix activity, distinct from the 3 prior axes documented in synth #229+#231+#236+#237 (LLM API surface, MCP agent-tool integration, runtime sandbox permissions, conversation memory architecture, error classification). Predict: ≥1 of the next 3 reasoning_content / DeepSeek / OpenAI-API-translation fixes across the 6 W17-tracked repos will cite at least one cross-project (non-W17-tracked) precedent in the PR body, refining the synth #227 chain-amplification model from "intra-W17-cluster" to "intra-and-extra-W17-cluster" propagation. Falsifier is any 3 consecutive future reasoning_content fixes that cite ONLY W17-tracked-repo precedent OR no precedent at all.

**P-328.B:** The Add.148 M-148.X post-silence-exit pattern (author-AND-feature-line-double-rotation: tanzhenxin is neither the silence anchor pomelo-nwu #3577 nor the silence exiter wenshao #3720; tanzhenxin's surface DeepSeek/reasoning_content is disjoint from wenshao's bg-shells surface) is **structurally ENABLED by cross-project precedent**: tanzhenxin can land a fresh feature line on qwen-code without prior intra-repo W17 history because the openclaw precedent provides the validation substrate that would otherwise require an intra-repo author / feature-line history. Without the cross-project precedent, the M-148.X pattern would require either (a) author-pool depth (qwen-code has author-pool ≥5, supporting fresh-author entries) OR (b) live-API integration tests (which the PR body explicitly says are not exercised: "Cross-check against the real DeepSeek API: openclaw ships the same workaround ... confirming the empty-string approach is accepted in production"). Predict: M-148.X-class post-silence-exit ticks will be **disproportionately associated** with PRs that cite cross-project precedent or upstream-API-corroborating evidence; M-145.M (anchor-author-continuation) and M-147.F (same-feature-line-different-author-continuation) ticks will be **disproportionately associated** with PRs that cite ONLY intra-repo precedent. Falsifier is any 3 consecutive future M-148.X-class ticks with no cross-project / upstream-API citation in the PR body.

**P-328.C:** The cross-project precedent citation pattern is **measurable via PR-body link analysis** and is a **leading indicator** of cross-W17-repo convergent-fix arrival on the same surface. Specifically: when a W17 PR cites a cross-project precedent on a surface (here `openclaw/openclaw@678ed5d512` on DeepSeek `reasoning_content`), the probability of a follow-up W17 PR on the same surface within the next 3 ticks is **higher than the W17 baseline cross-repo same-surface convergence rate** (synth #145 sub-2h proximity is observed at ~5% of all PRs in late-W17). Predict: at least 1 of {sst/opencode, openai/codex, BerriAI/litellm, google-gemini/gemini-cli, block/goose} will emit a PR touching DeepSeek `reasoning_content` translation logic within 3 ticks of Add.148 (i.e. by Add.151), tracking the propagation seed established by qwen-code #3729 + openclaw `678ed5d512`. Falsifier is the absence of any such follow-up across the 5 non-qwen-code W17-tracked repos through Add.151.

## Evidence

### qwen-code #3729 PR body — cross-project precedent citation excerpts

From the PR body (verbatim quoted excerpts):

> Root cause: DeepSeek's API endpoint sometimes returns a tool-calls response with **no `reasoning_content`** (e.g. when the model decided not to reason for that round). When qwen-code replays the conversation on the next turn, that assistant message goes back without `reasoning_content` — and DeepSeek's thinking mode then rejects the request with HTTP 400 ("The reasoning_content in the thinking mode must be passed back to the API"). DeepSeek emits a shape that, on round-trip, it then refuses to accept.

> Fix: in the DeepSeek provider, normalize outgoing assistant messages so any turn carrying `tool_calls` always has `reasoning_content` set. When the model emitted no reasoning text, we send back an **empty string** (`""`).

> **Cross-check against the real DeepSeek API**: openclaw ships the same workaround (inject empty `reasoning_content` on tool-calling turns) against the live endpoint — https://github.com/openclaw/openclaw/commit/678ed5d512 — confirming the empty-string approach is accepted in production.

> Main risk: the fix sends `""` when no reasoning text was produced. Corroborated by openclaw's production fix; no source-only test can fully prove live-API acceptance, but the precedent removes most of that uncertainty.

The cross-project citation is **load-bearing** in the PR's risk/validation argument: the author explicitly defers live-API validation to the openclaw precedent, treating the external project as a substitute for in-repo integration testing.

### W17 prior reasoning_content surface PRs cited as context

| Tick | Repo | PR | Author | SHA | Surface |
|---|---|---|---|---|---|
| ... (synth #145 cluster, 2026-04-23) | sst/opencode + BerriAI/litellm + qwen-code + block/goose | (4-repo cluster) | various | various | preserve_reasoning_content / streaming reasoning shape |
| ... (synth #225, 2026-04-26) | (cross-repo merge-to-open coupling pair) | various | various | various | reasoning_content lifecycle |
| ... (synth #227, 2026-04-27) | (4-repo upstream-API-change propagation) | various | various | various | reasoning_content as upstream-change seed |
| Add.148 (2026-04-29 08:28:29Z) | QwenLM/qwen-code | #3729 | tanzhenxin | `762f603e9b3633b1a484c5173be8cb10d811137f` | DeepSeek `reasoning_content` empty-string injection on tool-call replays |

The Add.148 #3729 datapoint is the **first observed instance in W17** of a reasoning_content fix that cites a cross-project precedent rather than an intra-W17-cluster precedent. Synths #145+#225+#227+#237 documented intra-W17-cluster propagation; #328 extends the model to extra-W17-cluster propagation.

### Post-silence-exit class taxonomy update (refining synth #325 + Add.148 M-148.X)

| Class | Pattern | W17 instance count | Example | Cross-project precedent likelihood |
|---|---|---|---|---|
| M-145.M | Anchor-author also exits silence | 2/4 (goose Add.145, litellm Add.146) | goose lifeizhou-ap #8895 closes goose silence anchored by lifeizhou-ap #8893 | LOW — same author has intra-repo precedent |
| M-147.F | Different author, same feature-line continuation | 1/4 (qwen-code Add.147) | wenshao #3720 extends wenshao bg-shells thread #3687 from Add.143 | LOW — same feature-line has intra-repo precedent |
| M-148.X | Different author, different feature-line | 1/4 (qwen-code Add.148) | tanzhenxin #3729 on DeepSeek reasoning_content (no prior wenshao or pomelo-nwu reasoning_content thread) | **HIGH** — fresh-author + fresh-feature-line requires external validation substrate |

Distribution: 2/4 M-145.M, 1/4 M-147.F, 1/4 M-148.X. The M-148.X class is the **lowest-precedent-density** class and would be expected to require external substantiation (cross-project precedent, upstream-API-corroborating evidence, or live-API integration tests). The Add.148 instance does indeed cite cross-project precedent (`openclaw/openclaw@678ed5d512`), supporting P-328.B.

### Cross-project propagation chain: openclaw → qwen-code

The propagation chain established at Add.148 is:

1. **Upstream API behavior**: DeepSeek API enforces `reasoning_content` round-trip on tool-call turns in thinking mode (HTTP 400 on missing field).
2. **First mover (extra-W17)**: `openclaw/openclaw@678ed5d512` lands the empty-string injection workaround against the live endpoint.
3. **W17 propagation**: qwen-code tanzhenxin #3729 (Add.148) lands the same workaround in qwen-code, citing the openclaw commit as live-API corroboration.
4. **Predicted W17 follow-on (P-328.C)**: ≥1 of {sst/opencode, openai/codex, BerriAI/litellm, google-gemini/gemini-cli, block/goose} emits a similar fix within 3 ticks of Add.148.

This propagation shape **inverts** the synth #227 model where the propagation seed was internal to the W17 cluster (a single W17 PR triggered cross-W17-repo follow-ups). Here the propagation seed is **external** to W17 (openclaw), and W17 is on the receiving end of the propagation. The synth #227 chain-amplification model needs reformulation to admit external seeds.

## Mechanism

The cross-project precedent citation pattern is mechanistically driven by:
1. **Live-API integration test cost**: validating against a live commercial API (DeepSeek, OpenAI, Anthropic) requires API credentials and is expensive / unreliable in CI; PR authors substitute external production deployments as evidence.
2. **OSS LLM-tooling ecosystem density**: the wider ecosystem (openclaw, opencompass, langchain, llamaindex, etc.) is dense enough that for any given upstream-API behavior change, multiple downstream projects land workarounds within hours-to-days, providing a pool of precedents to cite.
3. **Author-pool fresh-entry pressure**: qwen-code's author-pool (≥5 authors in W17) admits fresh-author entries via M-148.X; fresh authors lack intra-repo precedent and lean on external precedent to justify changes.
4. **Reasoning_content surface specificity**: this surface is unusually constrained (DeepSeek's HTTP 400 on missing field is a hard error, not a soft regression), creating a strong selection pressure toward "ship the workaround that works in production right now" rather than "design a clean abstraction."

## Falsifiers

- **P-328.A**: Any 3 consecutive future reasoning_content / DeepSeek / OpenAI-API-translation fixes that cite ONLY W17-tracked-repo precedent or no precedent at all.
- **P-328.B**: Any 3 consecutive future M-148.X-class ticks with no cross-project / upstream-API citation in the PR body.
- **P-328.C**: Absence of any DeepSeek `reasoning_content` follow-up across {sst/opencode, openai/codex, BerriAI/litellm, google-gemini/gemini-cli, block/goose} through Add.151.

## Cross-references

- **synth #145**: cross-repo preserve-reasoning-content theme convergence at sub-2h proximity — extended here to cross-PROJECT propagation at sub-day proximity.
- **synth #225**: cross-repo merge-to-open convergent fix awareness coupling on reasoning_content — refined here with cross-project awareness coupling.
- **synth #227**: 4-repo reasoning_content cluster as upstream-API-change propagation seed with chain amplification — extended here to admit EXTERNAL seeds (openclaw → qwen-code).
- **synth #229**: 4-axis convergent-fix coupling (LLM API + MCP + runtime sandbox + conversation memory) — synth #328 establishes a 4th-prime axis: cross-project precedent citation.
- **synth #237**: error classification / retry policy state machine as 5th axis — synth #328 cross-project axis is orthogonal: any of the 4-5 prior axes can be cross-project-precedent-cited.
- **synth #325 M-147.F + Add.148 M-148.X**: post-silence-exit author / feature-line continuation classes — synth #328 refines the M-148.X class as cross-project-precedent-enabled.

## Concluding observation

The Add.148 qwen-code tanzhenxin #3729 datapoint is small in raw merge count (1 in-window merge in a single-active tick) but structurally significant: it establishes the **first W17 instance of cross-project precedent citation as load-bearing PR validation evidence**, refining the synth #227 chain-amplification model to admit external seeds and refining the synth #325 / Add.148 M-148.X post-silence-exit class to identify cross-project precedent as the structural enabler of fresh-author + fresh-feature-line landings. The next 3 ticks (Add.149-151) carry strong predictions: (a) follow-on DeepSeek reasoning_content fix in ≥1 of 5 non-qwen-code W17 repos (P-328.C), (b) cross-project precedent citation in ≥1 of next 3 reasoning_content fixes (P-328.A), and (c) cross-project citation in ≥1 of next 3 M-148.X-class ticks (P-328.B). Falsification of all 3 within 3 ticks would invalidate the cross-project propagation hypothesis as a structural feature of late-W17.
