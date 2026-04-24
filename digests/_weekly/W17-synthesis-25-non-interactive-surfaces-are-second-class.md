# W17 cross-repo synthesis #25 — non-interactive surfaces are second-class: every project's pipe / SSH / scripted-invocation path is silently broken (2026-04-24T18:40Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern in one sentence

**Every coding-agent CLI in W17 has at least one open bug where the *non-interactive* invocation surface — `... run` subcommand, piped stdin/stdout, remote SSH launch, scripted env-var mutation — is silently broken in a way the *interactive* TUI is not, because the projects test the TUI continuously and the headless surfaces approximately never.**

The non-interactive surfaces are how *automation* uses these tools — CI scripts, editor integrations, agent-of-agents orchestration, cron jobs, container entrypoints. None of those have a human in the loop to notice a rendering corruption or a "command not found" that should not be. The bugs file when an automation breaks; they get triaged behind whatever the interactive cohort is screaming about that day.

## Why this is *not* synthesis #19 (snapshot-vs-live-state)

Synthesis #19 named state that was sampled once and then diverged from reality (the env snapshot, the credit balance display, the routing decision frozen at session start). Several of *this* synthesis's exhibits also have a snapshot-vs-live-state component (the env one is identical), but the *defining* gap here is **interactive vs non-interactive**, not snapshot vs live. A non-interactive process that *correctly* re-reads live state on every call still hits these bugs because the bug is on the *invocation path itself*, not the data the invocation consumes.

The two syntheses overlap on opencode #12822 (env snapshot vs live `process.env`) but the rest of the exhibits here have nothing to do with snapshots — they are about which surface is exercised at all.

## Why this is *not* synthesis #11 (acl-presentation-drift) or #16 (accepted-but-unpropagated)

Both of those name a *single* surface (presentation, or acceptance) that drifts from a backing truth. This synthesis names a *whole class* of surfaces (everything that is not the interactive TUI) that the projects do not exercise often enough to notice when they break. The shape is "surfaces below a triage-attention threshold," not "one specific layer's contract is wrong."

## The exhibits

### Exhibit A — anomalyco/opencode TUI corrupts rendering when stdin is piped in

[anomalyco/opencode#24195] — *"Bug: Piping stdin into TUI breaks rendering (reproduced)."*

Filed 18:20Z. Reproducer in body. The interactive opencode TUI works fine; the moment any data is piped on stdin (`echo "..." | opencode`), the rendering breaks. The TUI presumably blocks on its own stdin reader expecting an isatty, gets a pipe instead, and the pty / cursor-positioning code paths drop into an undefined state.

This is the *purest* exhibit because the bug only exists when the user invokes the tool the way an automation would. Every interactive run hides it.

### Exhibit B — charmbracelet/crush `run` subcommand does not write to stdout

[charmbracelet/crush#2705] — *"crush run doesn't print LLM response to stdout."*

Filed in the previous addendum window, refreshed 18:06Z. `crush run` is the *named* non-interactive subcommand — its entire purpose is to be piped into something — and it does not write the model response to stdout. Any script that does `crush run "summarize this" | jq ...` gets nothing.

This bug is *zero-effort to find* if anyone ran `crush run` against an automation case during release; the fact that v0.x has shipped with this gap means nobody on the project's release path uses the non-interactive subcommand. That is the *project-internal evidence* that the surface is unowned, in addition to the *user-facing evidence* that the bug exists.

### Exhibit C — codex remote SSH launcher resolves `codex` against the wrong PATH

[openai/codex#19198] — *"Remote SSH connection falsely reports No `codex` found in PATH when `codex` is installed at a custom path."*

Filed earlier, refreshed 18:25Z. When codex is invoked over SSH (e.g. by a remote-development extension), the launcher does `which codex` against the *non-interactive* SSH `PATH`, not the user's interactive-shell `PATH`. Anyone whose `codex` lives in a custom directory exported only from `.zshrc` / `.bashrc` (not `.profile`) gets "No `codex` found in PATH" even though `codex` is installed.

The fix is well-known (source the user's interactive shell rc explicitly, or document where to put the export), but the *bug-class signal* is identical to A and B: the SSH launch is a non-interactive surface, the project does not exercise it, the regression files when a real user trips on it.

### Exhibit D — codex extension fails to resume after a connection drop

[openai/codex#19010] — *"Latest codex extension fails to resume after connections lost."*

Refreshed 17:56Z. The codex editor extension's resume path — used when the user's editor-to-codex connection drops and recovers — silently fails to resume the session. The user has to start over.

This is non-interactive in a *temporal* sense rather than an invocation sense: the resume codepath runs without a human's deliberate keypress, in response to a connection event. Same triage gap — the project's manual test is "open the extension and use it," not "open it, kill the connection, wait, expect resume."

### Exhibit E — codex falsely reports "out of Codex messages" when balance is positive

[openai/codex#19417] — *"Showing 'You're out of Codex messages' either I have credits."*

Filed 18:35Z (edge of window). The credit/quota check fires *before* the balance refresh, so a fresh CLI invocation against a positive balance gets the empty-quota gate. This bites *automation* harder than humans because automation invokes the CLI fresh each time (no in-process balance cache to be warm), and so the cold-start gate hits every call.

The bug is in the same family as Exhibit C — the cold-invocation path is not the path the project tests.

### Exhibit F — anomalyco/opencode env was snapshotted at startup, scripted mutations lost

[anomalyco/opencode#12822] — *"fix(env): proxy directly to process.env instead of snapshotting."*

Refreshed 18:29Z. opencode took a snapshot of `process.env` at startup; any script that did `OPENCODE_FOO=bar` *after* opencode had started but *before* invoking a sub-process saw its mutation ignored — the sub-process got the startup snapshot.

This bug is non-interactive-shaped because *no human ever mutates `process.env` between two interactions* — only scripts and orchestrators do. The pattern is exactly Exhibit B's: the *named* automation surface (env-vars passed across invocations) was unowned.

### Exhibit G — codex Linux sandbox launch failure

[openai/codex#19413] — *"bwrap: loopback: Failed RTM_NEWADDR: Operation not permitted."*

Filed 18:09Z (#19412 closed, #19413 reopened). The Linux sandbox cannot bring up loopback inside the user namespace, so codex cannot start at all in the standard sandboxed launch mode. This is non-interactive in the sense that the *sandbox-launch* path is what containerized / scripted users hit; interactive-on-host users skip it entirely.

Together with the Windows MSIX blank-splash (#19415) and macOS unsupported-feature-flag (#19220) startup failures from the same window, the codex *non-interactive launch surface* (sandbox, MSIX-installed desktop, scripted macOS launch) has three distinct startup gates open simultaneously.

## What ties the exhibits together

| Project   | Surface                    | What broke                                           |
|-----------|----------------------------|------------------------------------------------------|
| opencode  | TUI with piped stdin       | rendering corrupts                                   |
| crush     | `run` subcommand stdout    | response never written                               |
| codex     | remote SSH launcher        | wrong PATH, falsely "not found"                      |
| codex     | extension reconnect        | resume fails silently                                |
| codex     | cold CLI invocation        | quota gate fires before balance refresh              |
| opencode  | env across invocations     | snapshot lost scripted mutations                     |
| codex     | sandboxed launch (Linux)   | bwrap loopback denied                                |

Six exhibits, three repos, one window. The shared trait: *no human is in the loop on the broken path*, so the bug went to GA.

## Why this keeps happening

1. **Release tests are hand-driven from the TUI.** Every project's release checklist is "open it, do the demo, ship." None of the four CLIs in this synthesis appear to have an automation-shaped smoke test (`echo X | tool`, `tool run -p ... | jq`, `ssh remote 'tool ...'`).
2. **The non-interactive surface is the *integration* surface.** Editor extensions, CI workflows, agent-of-agents systems all consume these tools through the very paths that are unowned. So the *tools' own users* do not file these bugs — *integrators* do, and integrators triage on a different cadence.
3. **Failure modes on these surfaces are *silent or misattributed*.** Stdout missing looks like "model returned nothing," PATH wrong looks like "tool not installed," env snapshot looks like "the script set the var wrong." Users blame their own setup before the tool — the bug stays unfiled longer than it would on the interactive path.

## What a working alternative looks like

Three approaches, in order of plausibility:

1. **Make `run`-style subcommands a release blocker.** A two-line CI step (`echo "ping" | tool run --provider mock -` and assert the response token appears on stdout) would have caught crush #2705 and opencode #24195 before tag.
2. **Test the SSH-launch and sandbox-launch paths in CI.** A container image that installs codex in `/opt/codex/bin` and tries to launch it over SSH covers Exhibit C; a bwrap launch test covers Exhibit G. Both are mechanical and CI-cheap.
3. **Stop treating "is a tty" as "is the only supported shape."** Almost every exhibit here can be paraphrased as "the code branched on `isatty` and the non-tty branch was never written." A code-search for `isatty` / `process.stdout.isTTY` / `terminfo` callsites in each project, with a rule that every such branch must have at least one test, would surface most of the future versions of these bugs before they file.

## Watch list for next refresh

- Whether [anomalyco/opencode#24195] (piped-stdin TUI break) gets a same-day fix or sits the way #6680 (archived sessions) has been sitting.
- Whether [charmbracelet/crush#2705] (`crush run` no stdout) gets prioritized given crush also shipped a serious DB-corruption fix in #2690 in the same window.
- Whether [openai/codex#19198] (SSH PATH) gets a doc fix or a code fix.
- Whether the codex 0.125.0 GA release notes mention any of the three startup-gate failures (#19415 / #19220 / #19413) or whether they ship un-mentioned.
