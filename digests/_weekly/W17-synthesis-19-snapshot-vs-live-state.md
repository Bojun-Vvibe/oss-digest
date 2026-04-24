# W17 cross-repo synthesis #19 — snapshot-vs-live: state captured at one moment governing behavior at every later moment (2026-04-24T16:11Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern

A surprising fraction of W17's bugs across the four tracked projects share the same micro-shape: **at some point in the past, a value was read from a live source and copied into a process-local variable; from that point on, the live source kept moving and the local copy did not.** Every later read of the local copy returns a value that was correct *then* and is wrong *now*. The bug is invisible until something downstream notices the divergence — usually a user, usually after the original capture is too far in the past to remember.

This is not the same pattern as synthesis #16 ("accepted-but-unpropagated"). In #16, a user-initiated mutation is accepted by one consumer and silently dropped by another. In #19, **no mutation happens at all** — the live source moves on its own, and the snapshot just goes stale. The fix-shape is also different: #16 wants change-fan-out; #19 wants the snapshot replaced with a live read, or the snapshot annotated with an as-of timestamp and an invalidation hook.

This week the pattern shows up in at least seven distinct forms across the four tracked repos.

## Concrete instances from W17

1. **`Migrate fork and resume reads to thread store` ([openai/codex#18900], open ~10 days, updated 2026-04-24T16:07Z).** The fork/resume path currently reads conversation state from a per-session in-memory snapshot taken at session start. When the user forks a long-running session and resumes it later, the fork sees the state as it was *at fork time*, not as the parent session has since evolved it. The PR moves the read to the thread store, which is the single live source. The structural admission embedded in the PR title is exactly the synthesis #19 shape: "we were reading from a snapshot; we should have been reading from the store." Until this lands, every active fork has a quiet drift between its view and the parent's.

2. **`fix(env): proxy directly to process.env instead of snapshotting` ([anomalyco/opencode#12822], updated 2026-04-24T16:01Z).** The `env` reader currently takes an at-startup snapshot of `process.env` and serves every later lookup from the snapshot. Any environment variable mutated mid-process — by a child process, by an MCP server's startup script, by a user's `setenv` call — is invisible to opencode's env reader. The fix replaces the snapshot with a live `Proxy` over `process.env`. The PR title is, again, a verbatim statement of the synthesis: snapshot bad, live read good.

3. **`Remote SSH Desktop reuses stale app-server and masks model_not_found as Reconnecting` ([openai/codex#19300], filed 2026-04-24T06:18Z, updated 2026-04-24T16:00Z).** The desktop holds a long-lived connection to an app-server discovered at first launch. After an in-place desktop upgrade, the new desktop reuses the snapshot of the connection rather than re-discovering the app-server. The snapshot is not the *connection state* (which would be benign) but the *identity of the server* (which is a moving target across upgrades). Same shape: a value captured at one moment is quietly wrong at every later moment.

4. **`POST /model/update` does not invalidate in-process router cache ([BerriAI/litellm#26427], opened 2026-04-24T13:25Z, related work in [BerriAI/litellm#26434] "Fix/shared health check polling").** The proxy's `Router` keeps an in-process snapshot of the model registry. The management API mutates the registry in the database; the in-process snapshot is not invalidated. From the user's perspective, the management surface (which knows about the mutation) and the inference surface (which still routes from the snapshot) disagree until the proxy is restarted. #26434 is the polling-side cousin — multiple consumers of a health-check signal each held their own copy of state because each polled independently.

5. **`Guard npm update prompt on registry readiness` ([openai/codex#19389], opened 2026-04-24T15:53Z).** The npm update prompt fires from a snapshot of the local installed-version metadata captured at CLI startup. If the user installs a fresh CLI in a state where the npm registry has not yet propagated the install, the snapshot says "version unknown" or "version older than registry-latest," and the prompt fires with a value that was correct at the moment of capture but does not reflect the live state of the registry. The PR's "guard … on registry readiness" wording is the standard remediation: don't snapshot until the source is stable.

6. **`fix: remove duplicate MAX_SIZE_PER_ITEM_IN_MEMORY_CACHE_IN_KB definition` ([BerriAI/litellm#26385], updated 2026-04-24T16:01Z).** Two definitions of the same constant exist in the codebase, with different values. They were each correct at the moment they were introduced; they have since drifted because one was updated and the other was not. Constants are the degenerate case of a snapshot — a value captured *at the moment the source file was written* and never re-read against any source of truth. The PR deletes the duplicate; the deeper problem is that no test ever asserted the two were equal.

7. **`Use OpenTUI theme detection for initial TUI mode, again` ([anomalyco/opencode#23846], merged 2026-04-24T15:28Z).** The TUI captures a theme at initialization. After a terminal-side theme change mid-session, the TUI continues to render in the snapshot theme. This was *fixed* before, regressed, and has now been re-landed. The "again" in the title is the tell: the original fix introduced a live read, a later refactor re-introduced the snapshot, and nobody noticed because the test suite did not assert "theme follows terminal across the session boundary." Synthesis #19 in the most painful form — a known bug that re-emerges when the snapshot pattern returns.

## Adjacent instances worth naming

- **`config.toml context window settings are not respected` ([openai/codex#19185], updated 2026-04-24T14:57Z).** The CLI snapshots the config at startup and serves all later reads from the snapshot. A config edit during a running session does not propagate. This is a snapshot bug *and* a synthesis #16 (accepted-but-unpropagated) bug, in the same way that a person can be both tall and left-handed.

- **`Codex auto-mirrors [parallel-ecosystem] marketplaces, breaking MCP handshake for [parallel-ecosystem]-only plugins` ([openai/codex#19372], filed 2026-04-24).** The marketplace catalog is snapshotted at startup. New marketplace additions on the live side don't appear; deletions on the live side keep appearing. The user-visible error is an MCP-handshake failure for a plugin that the live side already removed.

## Why snapshot-vs-live is its own pattern

The four-project corpus collected this week has many snapshots that are *fine*. The TUI snapshots the user's preferred prompt format at startup; nothing breaks if it doesn't refresh. The CLI snapshots the SHA of its own binary at startup; nothing breaks if it doesn't refresh. The synthesis is *not* "snapshots are always wrong." The synthesis is sharper:

> **A snapshot is a contract that says: "the source will not change in a way I care about between now and the next time I read."**

When the source can change in a way the snapshot's consumer cares about, the snapshot is a latent bug. The four projects have collectively shipped at least seven snapshots this week where the source *does* change in a way the consumer cares about, and the snapshot is the proximate cause of the user-visible bug.

The contract reading also explains why these bugs are so persistent and so easy to re-introduce (cf. #23846's "again"): the snapshot is a *line of code* that looks identical whether the source changes or not. There is nothing in the snapshot's syntax that tells the next reader "this assumes the source is stable." That is the root of #23846's regression and the structural reason synthesis #19 will keep producing fresh instances.

## What a snapshot-vs-live discipline would look like

The four projects would not need to abandon snapshots. A useful discipline has three rules:

1. **Every snapshot is annotated with the source it was taken from and an as-of moment.** A `RouterCache::from(registry, at = now)` value carries enough metadata that downstream code can ask "is the source still at this version?"
2. **Every source that participates in snapshots advertises a `version` (or `revision`, or `etag`).** The proxy's model registry already has this in the database (it's the row's update timestamp); the in-process router does not propagate it.
3. **A snapshot's consumer is responsible for re-reading or invalidating before any operation whose correctness depends on the snapshot being current.** This is the rule the desktop's app-server-connection cache does not follow (#19300), the rule the env reader does not follow (#12822), the rule the router cache does not follow (#26427), and the rule the TUI theme detector did not follow until #23846 was re-landed.

These three rules do not abolish snapshots; they make snapshots *legible*. A future code reviewer can see a snapshot, ask "what's the source's revision?", and notice when the answer is "we don't track that." That review-time question is the thing the four projects collectively lack today.

## Cross-references

- **Synthesis #11 (presentation-vs-enforcement drift)** is a snapshot bug at the UI/runtime seam: the UI snapshots the runtime's policy at render time and the runtime moves on without telling the UI. Synthesis #19 is the same shape with no UI involved.
- **Synthesis #14 (registry drift)** is a snapshot bug at the catalog/runtime seam: the published catalog is a snapshot of what the runtime *was*, and the runtime has since moved.
- **Synthesis #16 (accepted-but-unpropagated)** is the *mutation* sibling: the user changes the live source, and a snapshot held by another consumer doesn't get the news. Synthesis #19 is the *no-mutation* sibling: the live source moves on its own (because of an upgrade, a new install, a child-process env change, an external registry update), and the snapshot doesn't get the news.
- **Synthesis #18 (version skew CLI vs server)** is a snapshot bug at the version-handshake seam: the CLI snapshots the server's protocol-version at first connection and never re-checks.

## Net read

If the four projects each instituted the three-rule discipline above for *just* the snapshots whose consumers care about freshness, the user-visible bug rate from this pattern in W18 would drop measurably. The dominant cost is not the discipline itself — `Cache::with_revision(rev)` is a small wrapper — but the cost of inventorying existing snapshots and deciding which ones need it. That inventory is the thing none of the four projects has done, and the W17 corpus is what the absence of that inventory looks like.

The shortest-path forward is not new infrastructure; it is renaming. Every variable in the code today named `cached_*`, `current_*`, `loaded_*`, `_snapshot`, or `_at_startup` is a candidate. A grep across the four projects would find dozens. Each finding is a chance to ask "does the source move underneath this?" and either delete the snapshot or annotate it.

— end synthesis #19 —
