# Daily addendum — 2026-04-24 (refresh @ 09:49Z)

**Window since last index snapshot:** 2026-04-24T08:37Z → 2026-04-24T09:49Z (≈1h12m)

The morning INDEX.md was generated against a window ending 08:37Z. This refresh captures what landed in the gap between that snapshot and 09:49Z, plus the late-Thursday/early-Friday material that the rolling-24h window already covered but the morning narrative under-weighted. Treat this as augmentation, not replacement.

## Codex: 0.125.0-alpha.1 is live, and three release-day regression issues are open

`rust-v0.125.0-alpha.1` was cut at 06:35Z this morning by `@github-actions[bot]`, exactly as the W17 weekly note predicted. The morning INDEX correctly logs the alpha tag in the release count (3 releases over the rolling 24h includes 0.124.0-alpha.2, 0.124.0-alpha.3, and the 0.124.0 stable promotion at 18:29Z Thursday — the alpha.1 cut at 06:35Z falls inside the new window). What the INDEX cannot show is the **regression issue cluster filed in the first three hours after the alpha was tagged**:

- **[openai/codex#19335]** — macOS npm install of 0.125.0-alpha.1 is killed by AMFI on launch because the new build flips a keychain entitlement that is not in the existing notarization profile. Anyone on a managed Mac who `npm i -g @openai/codex@alpha` this morning got a binary that won't start. There is no workaround other than reverting to 0.124.0 stable.
- **[openai/codex#19330]** — Codex CLI 0.123/0.124 (note: pre-alpha-1) **regression on Windows**: WebSocket fallback path triggers, then the stream disconnects before completion. This is filed as a regression against 0.123, which means it has been in stable for ~32h. The 0.125.0-alpha.1 release notes do not name a fix.
- **[openai/codex#19338]** — VS Code extension starts the same MCP stdio server **twice** from a single config entry. Doubled subprocesses, doubled tool listings, doubled token spend on the initial tool-list call. Filed against 0.124. No PR yet.
- **[openai/codex#19331]** — macOS/Kitty TUI stays non-reactive after `task_complete` while the underlying process is still busy. This is the third "TUI stuck" issue this week; the prior two were closed against 0.122 with terminal-detection fixes that evidently don't cover Kitty.

Two PRs landed in the gap window: **[openai/codex#19308]** (surface reasoning tokens in exec JSON usage) and **[openai/codex#19323]** (update models.json fixtures). #19308 is operationally interesting — it means downstream agents that wrap `codex exec --json` and parse the usage block now get reasoning-token counts separated from completion tokens, which changes any cost-tracking math built against the old format. If you ship a wrapper, audit your usage parser before pinning to 0.125.0-alpha.1+.

The pattern across #19330, #19331, #19335, #19338: **every one is a "ships in stable, doesn't get caught until users on diverse hosts hit it" regression**. Alpha → stable in 12h (0.124.0) and stable → alpha in another 12h (0.125.0-alpha.1) does not leave room for a real bake-window. This is the cost of the W17 cadence the morning INDEX summary called out as a feature.

## LiteLLM: nightly-per-shift cadence holds, no new cuts in the gap

The morning INDEX shows 3 LiteLLM releases in the rolling-24h window (v1.83.12-nightly at 23:29Z Thursday, v1.83.7-stable.patch.1 at 23:36Z Thursday, v1.83.13-nightly at 05:47Z Friday). **No new release in the 1h12m gap.** The 6-hour nightly cadence flagged in the W17 weekly held overnight and into Friday morning, but Friday's 05:47Z cut is now ~4h old without a follow-on. Watch for v1.83.14-nightly around 11:00–12:00Z if the cadence holds; if it doesn't appear by 14:00Z, the post-test-cleanup release pulse is over and the project is back to one-cut-per-day.

## opencode: HTTP-API surface still the operational story

The morning INDEX shows 16 PRs merged + 56 new open + 58 issues touched + 38 commits in the rolling-24h. No new merges in the gap window. The story unchanged from the late-Thursday W17 update: `--no-vcs-diff` is the operational mitigation for the OOM cluster on umbrella workspaces, and the rolling window is dropping older issue activity faster than fresh issues are filed. **Don't pin to v1.14.22 if you run an umbrella workspace** until the [#24079] flag becomes default-on or is replaced by automatic detection.

## What changed in the narrative since the morning INDEX

1. **Codex 0.125.0-alpha.1 cut** — predicted by the W17 evening update, confirmed at 06:35Z.
2. **Three Codex regression issues filed against the alpha and the prior stable** — material the morning INDEX cannot reflect because they postdate the snapshot or were filed in the gap.
3. **No new LiteLLM release in the gap** — the 6h cadence is now ~4h overdue at the time of writing.
4. **Reasoning-token surfacing in Codex exec JSON** ([openai/codex#19308]) — operationally interesting for downstream wrappers; not in any release-notes narrative yet.

Next refresh expected after the next dispatcher tick.
