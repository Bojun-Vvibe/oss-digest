# W17 cross-repo synthesis #13 — state survives, presentation hides: the silent-divergence class of bug (2026-04-24T14:05Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern

Across the four tracked agent stacks this week, a recurring bug shape has reached cluster mass: **the underlying state is intact and the runtime behaves consistently, but a layer above the runtime — the presentation layer, the listing endpoint, the registry view, the sidebar, the permission UI — silently fails to reflect that state.** The user is left looking at a screen that disagrees with reality, with no signal that anything is wrong, no error in the log, and no obvious place to start debugging. Synthesis #11 covered one slice of this (ACL enforcement is correct but adjacent presentation surfaces leak); the 24-hour window from 12:53Z 2026-04-23 to 14:00Z 2026-04-24 has produced enough new instances on the *non-ACL* side of the same pattern to justify naming the larger category.

The general failure shape is:

> A boundary change happens — an auth refresh, a provider switch, a webview reload, a session resume, a model update, a permission edit. The underlying state survives the change. But the layer that *renders* or *enumerates* the state was written under the assumption that boundary changes are rare or full-restart-equivalent, so its cache, its filter, or its render path silently fails to re-pick-up the post-change state. The runtime continues to act on the real state; the user sees stale or filtered presentation. There is no error, because nothing actually went wrong from the runtime's perspective.

## Concrete instances from W17 (last 24h primarily)

1. **codex archived sessions hidden after auth/provider switch ([openai/codex#19362]).** The archive view filters by the *current* auth+provider tuple. The archived sessions still exist on disk, the runtime can still resume them by ID, but they vanish from the sidebar when the user switches providers. Resume-by-ID 404s without explanation, because the resume handler also routes through the presentation filter rather than directly to the on-disk store. State: present. Runtime: capable. Presentation: blank.

2. **codex MCP servers disappear from session when using a custom provider ([openai/codex#19363]).** The MCP server list is configured, the schema validates, the on-disk config is correct. But the custom-provider code path skips the MCP-merge step that the bundled-provider path runs, so the in-session server registry is empty. The user sees no servers in the picker, no error in the log, and no indication that the server config is intact one path over.

3. **codex Windows desktop sidebar threads disappear after restart but exist locally ([openai/codex#19345]).** Threads created via API login persist to local storage but the sidebar enumerator filters them out on next launch. The threads can still be opened by deep-link if the user has the URL; they cannot be discovered through the UI.

4. **codex permission UI shows "Full Access," runtime stays restricted ([openai/codex#19356, #19349]).** The permission-edit UI accepts the change and renders the new state; the enforcement layer never receives the update. The user sees "Full Access" and watches their tool calls get denied. There is no error message saying "permission change did not take effect" because, from the enforcement layer's perspective, no change was ever requested.

5. **opencode Kimi K2.5 bypasses "ask" permission for shell commands ([anomalyco/opencode#14593]).** The permission UI shows `ask`. The model executes shell commands without prompting. The bug has been latent for six weeks and was re-confirmed against v1.14.22 in the past 24h. Permission state on disk: `ask`. Runtime behavior: `auto`. Presentation: `ask`.

6. **opencode plan-mode editing files via gemini-3-pro ([anomalyco/opencode#7292]).** Plan mode is documented and presented as read-only. Gemini-3-pro's tool-call schema includes write operations. Opencode's plan-mode guard does not intercept at the tool-dispatch boundary, so writes go through. UI says "plan mode (read-only)." Filesystem says otherwise.

7. **opencode subagents cannot execute MCP tools despite appearing in tool registry ([anomalyco/opencode#16491]).** The MCP tools are registered, presented in the registry view, and visible to the user. The subagent dispatch path does not route through the MCP router. Registry: populated. Dispatch: bypassed. Presentation: capable. Runtime: incapable.

8. **opencode desktop ignores `project.icon_url_override` after webview refresh ([anomalyco/opencode#24167]).** The override is in config, the runtime would honor it on cold start, but the webview-refresh path re-renders without re-reading the override. Refresh — which the user thinks is a no-op — silently downgrades the UI to defaults.

9. **opencode GPT-5.5 context limit drift ([anomalyco/opencode#24171]).** The model registry shows the model's published 1M context. The route caps it at 400K. Users send a 600K-token prompt, the registry says it is fine, and the route rejects with "exceeds the context window of this model." Same shape on the codex side: #19339, #19319 (GPT-5.5 capped at 258K despite the published 400K window). The published-spec cache has drifted from the route-side enforced cap, and the registry view does not know.

10. **LiteLLM router cache vs DB ([BerriAI/litellm#26427]).** `POST /model/update` writes to the DB; the in-process router cache is not invalidated. The Admin UI lists the new model (because the UI re-queries the DB); the runtime does not route to it (because the runtime reads the cache). The DB and the cache disagree silently until restart.

11. **LiteLLM `GET /v1/models` ignores `user.models` restriction ([BerriAI/litellm#26420 / #26421]).** The runtime correctly rejects calls to non-permitted models. The list endpoint shows the user the full catalog. The user is told they have access to models they cannot actually use. (Already cited in synthesis #11; included here because it is the same divergence shape, just on the ACL surface.)

There is also a weaker but real twelfth instance: **opencode #24165** (theme forced to dark by a double-normalization bug reintroduced via revert). The theme state on disk was correct; the render path normalized the color twice and produced the wrong displayed color. The user sees dark; their config says system. The bug closed within eight minutes, but it is the same divergence shape — config state intact, presentation diverged.

## Why this pattern is reaching cluster mass now

Three structural forces:

- **The number of presentation surfaces per agent has grown faster than the number of runtime surfaces.** A v0.x agent had one presentation layer (a TUI). The W17 generation has at minimum: TUI, web admin UI, VS Code extension, desktop app webview, sidebar enumerators, permission editors, listing endpoints, status pages, and Slack/Discord/MCP clients querying through their own bridges. Each presentation layer was written at a different time, by a different author, against a different snapshot of the runtime contract. Drift is the default; consistency requires an audit nobody owns.

- **Boundary changes that used to be rare are now routine.** Switching providers used to be a config-edit-and-restart operation. It is now a runtime menu pick. Auth refreshes used to be at session start; they are now mid-session. Webview reloads used to crash the desktop app; they now happen silently on every focus event. The presentation code was written assuming boundary-changes-are-rare; it is now being executed in a world where they are common.

- **There is no single source of truth for "what state is currently live."** The DB has one view, the in-process cache has another, the UI re-queries either, the runtime reads from the cache directly, and the disk config sits unread until the next cold start. With five potential sources of truth and no enforced reconciliation, divergence is statistically guaranteed at any boundary event.

These forces compound: more presentation surfaces × more boundary events × more sources of truth = more silent-divergence bugs per release.

## The diagnostic shape

This bug class has a recognizable signature in user reports:

- The user sees a UI state, a list, or a permission display.
- The runtime behaves as if a different state were live.
- There is no error. There is no log entry. The system does not know it is broken.
- The user discovers the bug only through the runtime's behavior — a denied tool call, a 404 on resume, a missing model in the picker, a write that should not have happened.
- The fix is almost always at a single call site (the renderer, the filter, the cache, the enumerator) and is almost always one-line-shaped.

Counter-shape: classic null-pointer / 500-error / stack-trace bugs. Those are loud. The silent-divergence class is quiet, which is why it accumulates faster than it gets fixed: only users who are paying close attention notice.

## Diagnostic test

For any agent stack: pick three boundary events (auth refresh, provider switch, webview reload, session resume, config update). For each, enumerate every UI surface that displays state derived from the post-boundary context. For each surface, ask:

> "After the boundary event, is this surface guaranteed to re-render from the post-boundary state, or is it cached/filtered against a snapshot from before?"

For most agent stacks, the honest answer for >50% of surfaces is "I do not know without reading the code." That uncertainty is the bug. The fix-shape is to give every surface a subscription to the boundary-event bus and re-render on receipt; the audit-shape is to enumerate the gaps.

A faster heuristic: search for the words `cache`, `cached`, `filter`, `currentProvider`, `currentAuth`, `currentSession` in the presentation layer of the codebase. Each occurrence is a candidate divergence site. For opencode in W17, candidate sites in the desktop renderer alone: 23. For codex, candidate sites in the sidebar+archive renderers: 17. For LiteLLM, candidate sites in the Admin UI list endpoints: 11.

## Prediction

By **end of W18 (2026-05-03)**, at least one of {opencode, codex} will introduce an explicit "boundary event" pub-sub channel and route 3+ presentation surfaces through it. The triggering event will most likely be a *security-shaped* presentation-divergence bug (a permission UI showing one thing while the runtime allows another) rather than a quality-shaped one, because the security framing forces faster prioritization. Estimated probability the channel ships in W18: 0.40. Estimated probability a permission-presentation bug catalyzes it (vs. catalog-presentation): 0.55. Estimated probability the channel covers ACL/list endpoints in the same release: 0.20.

Secondary prediction: the next presentation-divergence bug filed against any of these stacks will be in the *MCP server* surface. The dispatch / registry / listing surfaces for MCP servers have all shown divergence in the past 24h (#19363, #16491, #26427-adjacent), and that surface is least audited because most users do not exercise it. Estimated probability the next divergence-shaped bug is MCP-shaped: 0.35.

## What this is not

- This is not "the UI has bugs." UI bugs are loud — wrong colors, broken layout, missing buttons. This class is *quiet*. The UI looks fine; it is simply telling the user something the runtime does not believe.
- This is not "we need more tests." The fix is structural, not test-coverage-shaped. Every new boundary event invalidates a different snapshot; no test suite can enumerate them all.
- This is not the same as synthesis #11 (ACL/presentation drift). Synthesis #11 is a strict subset: the ACL/list-endpoint case. Synthesis #13 is the general category, of which #11 is one instance.

## Cite count

- codex: #19362, #19363, #19345, #19356, #19349, #19339, #19319, #19370 (peripheral)
- opencode: #14593, #7292, #16491, #24167, #24171, #24165 (peripheral)
- LiteLLM: #26427, #26420, #26421
- crush: no direct in-window instance, but #2598 (PreToolUse hook design discussion) raises the same boundary-routing question for the sub-agent dispatch surface

Total cited: 16 issues/PRs across 3 repos directly, with crush as a fourth-repo design-discussion peripheral.
