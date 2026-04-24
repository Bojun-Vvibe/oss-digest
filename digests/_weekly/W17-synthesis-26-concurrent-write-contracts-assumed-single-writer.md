# W17 cross-repo synthesis #26 — concurrent-write contracts assumed single-writer: agent-session state stores break when the project's *own* sub-agent surface is multi-writer (2026-04-24T18:45Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern in one sentence

**Every coding-agent project ships a session state store (SQLite, log DB, thread store, response-pipeline buffer) that was designed for a *single writer* — one human-driven session — and the same projects have now shipped *sub-agent* / *thread-fork* / *pass-through-endpoint* surfaces that are inherently multi-writer; on 2026-04-24 the resulting concurrent-write breakage filed as a cross-repo cluster (crush SQLite corruption, codex thread-store migration anxiety, litellm pass-through pipeline gap) — six PRs across two repos, all editing the *write contract* of a state store the project's own newer features have outgrown.**

The store was correct when it was written. Then sub-agents shipped, or thread-fork shipped, or the pass-through endpoint shipped, and suddenly two of the project's own callers want to write at once. Nobody re-derived the store's concurrency contract; the bugs file when the second writer arrives.

## Why this is *not* synthesis #15 (sync-debt as merge-main PR) or #20 (patch-pr-graveyard)

Both of those name *merge / coordination* problems on the development side — the train of refactor PRs that cannot land in any order, the backport queue that never closes. This synthesis names a *runtime data-corruption* problem on the user side — the SQLite file is *literally* unreadable, the thread store reads the wrong session, the guardrail pipeline missed the response.

The two families overlap on codex's permissions train (which is a sync-debt symptom and also a concurrency-contract symptom on the *config* surface), but the defining gap here is "the store on disk now has bytes the reader cannot parse," not "the PR queue is stuck."

## Why this is *not* synthesis #19 (snapshot-vs-live-state)

Snapshot-vs-live names a *temporal* gap — one writer wrote at T0, one reader read at T1, the world moved between them. This synthesis names a *spatial* gap — two writers wrote *concurrently*, the second one stomped on the first, and the resulting bytes are not what either writer intended. Snapshot bugs corrupt your view of state; concurrency bugs corrupt the state itself.

## The exhibits

### Exhibit A — crush SQLite corruption under concurrent sub-agents

[charmbracelet/crush#2690] — *"fix(db): prevent SQLITE_NOTADB corruption under concurrent sub-agents."*

Filed 18:09Z. Anchor exhibit. When crush spawns multiple sub-agents (the project's own multi-agent surface), each sub-agent opens the same session SQLite database and writes concurrently. SQLite's WAL mode tolerates multiple readers but the way crush opened the connection (or did not call `BEGIN IMMEDIATE`, or held no lock at all) allowed two writers to interleave at the page level — corrupting the SQLite header to the point that subsequent opens fail with `SQLITE_NOTADB` ("file is not a database").

The PR fixes this by serializing writes (the standard remediation), but the *fact pattern* — a single-writer-designed store met the project's own multi-writer surface and produced disk corruption, not just a stale read — is the cross-repo signal.

### Exhibit B — codex log DB refactored into a buffered sink interface

[openai/codex#19234] — *"Refactor log DB into buffered sink interface."*

Refreshed 18:19Z. The codex log DB (separate from the thread store, separate from the session store) is being refactored to interpose a *buffered sink* between callers and the underlying database. The motivation in the PR description is performance, but the architectural shape is the same as Exhibit A's fix: serialize writes through a single in-process buffer so the on-disk store sees one writer at a time.

The interpretation: codex anticipates (or has already hit, internally) the same multi-writer-into-single-writer-store problem crush hit publicly. The buffered sink is a defense.

### Exhibit C — codex thread-turn-list migration to thread store

[openai/codex#19280] — *"[codex] Migrate thread turns list to thread store."*

Refreshed 18:31Z. Thread turns (the per-turn records that make up a session) are being migrated from wherever they currently live into the thread store — which is the same store the resume / fork code paths read from. The migration is a *write-contract change* on the thread store, and it is happening at the same time the resume path is broken (#19010, exhibit D below) and at the same time the fork path is being rewritten (#18900, exhibit E).

So the thread store has *three concurrent rewrites* of its write contract in flight: turn-list migration (#19280), fork-and-resume read migration (#18900), and the implicit contract change from any extension that reconnects mid-session (#19010 surface). Whichever lands first sets the contract for the others.

### Exhibit D — codex extension fails to resume after connection loss (multi-writer race on resume)

[openai/codex#19010] — *"Latest codex extension fails to resume after connections lost."*

Refreshed 17:56Z. Featured in synthesis #25 as a non-interactive bug, but the *concurrency* angle is distinct: when the connection drops and the extension reconnects, *two* code paths now race to read the session state — the original (now-dead) connection's cleanup and the new connection's resume. If the original connection's writer has not flushed before the new connection's reader runs, resume sees an inconsistent state and bails.

This is an exhibit here because the fix surface is the *thread store's write-contract* (Exhibits B and C) — guarantee that writes from a connection are durable before that connection is allowed to be considered "dead."

### Exhibit E — codex fork and resume reads migrating to thread store

[openai/codex#18900] — *"Migrate fork and resume reads to thread store."*

Refreshed 18:31Z (same minute as #19280). The fork and resume code paths are being moved to read from the thread store. *Fork is intrinsically multi-writer* — the user forks a session, both the original and the fork now exist as writers against the same parent session record. If the thread store does not have an explicit fork-write contract (copy-on-write? snapshot-and-branch?), the fork will eventually hit the same data-corruption shape as Exhibit A.

That #18900 and #19280 last-touched at the *same minute* (18:31Z) is the giveaway that codex is mid-rewrite of the thread store concurrency model — and that the rewrite is happening *across multiple PRs in flight at once*, which is itself the multi-writer problem applied to the *PRs that are fixing the multi-writer problem*.

### Exhibit F — litellm pass-through endpoint missed post-call guardrails (write skipped because pipeline forked)

[BerriAI/litellm#26262] — *"fix(proxy): invoke post-call guardrails on pass-through endpoint responses."*

Refreshed 18:28Z. The standard request pipeline runs post-call guardrails after the model returns; the pass-through endpoint was implemented as a *separate* code path that bypassed the guardrail step entirely. From the perspective of "writes against the response-processing pipeline," the pass-through code was a *second writer* (it wrote responses into the response surface) that was not coordinated with the *first writer* (the pipeline that also writes responses, with guardrails). Two writers, no coordination, and the second writer's outputs missed the security pass.

The fix is to make pass-through call into the guardrail step explicitly — the in-memory equivalent of crush #2690's "serialize writes through a single point." The *failure mode* is different (security gap vs disk corruption) but the *defect class* is identical: a state-mutation surface (response processing) gained a second writer without updating its concurrency contract.

### Exhibit G — codex apply_patch streaming parser made stateful

[openai/codex#19160] — *"Make apply_patch streaming parser stateful."*

Refreshed 17:57Z. The `apply_patch` streaming parser is being given internal state — the *opposite* shape of fix from Exhibits A and F (those serialize against a shared store; this one *adds* per-instance state to a parser that was previously stateless). The connection to this synthesis is that the parser is the *write surface* into the file system: it consumes a streaming patch and applies edits. Without state, two concurrent invocations would interleave; with state, each invocation has its own buffer.

So codex is now *both* serializing writes through buffered sinks (#19234) and giving its write parsers their own per-invocation state (#19160) — both are responses to the same architectural pressure, applied at different layers.

## What ties the exhibits together

| Project   | Store / write surface          | Concurrency defect                                        | Fix shape                            |
|-----------|--------------------------------|-----------------------------------------------------------|--------------------------------------|
| crush     | session SQLite DB              | sub-agents wrote concurrently, header corrupted           | serialize writes (#2690)             |
| codex     | log DB                         | (anticipated) interleaved writes from many callers        | buffered sink interface (#19234)     |
| codex     | thread store (turn list)       | migration to a store also being read by fork/resume       | move turn list under thread store (#19280) |
| codex     | thread store (resume race)     | dead-connection writer vs new-connection reader           | (depends on #19234 + #18900 landing) |
| codex     | thread store (fork)            | fork is multi-writer by definition                        | migrate fork reads to thread store (#18900) |
| litellm   | response-processing pipeline   | pass-through path forked the pipeline, skipped guardrails | re-merge pass-through into pipeline (#26262) |
| codex     | apply_patch parser             | stateless parser, concurrent invocations would interleave | give parser per-invocation state (#19160) |

Seven exhibits, three repos, two distinct fix shapes (serialize against shared store; isolate per-instance state). Every exhibit is a write-contract change on a store that was designed before the project's current multi-writer surfaces existed.

## Why this keeps happening

1. **The store predates the multi-writer surface.** The session DB was written when there was one human, one session, one writer. Sub-agents, fork, resume, pass-through endpoints all shipped *later* — and none of them re-derived the store's concurrency contract. The bugs file when the new feature arrives in production.
2. **The fix is invisible from a feature-PR diff.** A PR that adds sub-agents does not, on its face, look like a PR that needs a SQLite-locking review. The reviewer sees `+12 files, agent spawn logic`; the concurrency defect is one layer down.
3. **SQLite (and most embedded stores) tolerate one mistake quietly and the second mistake catastrophically.** First concurrent write: maybe a stale row, maybe a rolled-back transaction — survivable, looks like a flake. Second: header corruption (`SQLITE_NOTADB`) and the entire database is gone. Crush #2690 caught the second case in the wild; if it had filed earlier it would have been "intermittent missing turns" and gotten triaged at lower priority.

## What a working alternative looks like

Three approaches, in order of plausibility:

1. **Single writer per store; everyone else is a reader-with-a-channel-back.** crush #2690's fix (serialize writes) is one form. codex #19234's buffered sink is the same idea generalized. Architecturally cheapest; throughput-cap is real but rarely the actual bottleneck for a coding-agent session DB.
2. **Per-session store, never shared.** If sub-agents each get their own SQLite file, the concurrent-write problem disappears by construction. Cost: cross-session queries become harder; the coordinator has to assemble views from multiple files.
3. **Treat the store's write contract as a typed interface, not a side-effect.** Force every caller of `session_db.write()` to declare its concurrency assumptions (`single`, `serialized`, `cas`). The compiler / type-checker then refuses to add a sub-agent caller against a `single`-marked store without an explicit contract change.

## Watch list for next refresh

- Whether [charmbracelet/crush#2690] merges with the simple write-serialization fix or whether reviewers push for per-sub-agent stores (option 2 above).
- Whether [openai/codex#19234] (buffered sink) lands before [openai/codex#19280] / [openai/codex#18900] (thread-store migrations) — the buffered sink should land first or the migrations have nothing to write through.
- Whether [openai/codex#19010] (extension resume) gets a fix that names the dead-connection-writer race or one that papers over it with a retry.
- Whether [BerriAI/litellm#26262] is followed by an audit of *other* pass-through-style endpoints that also forked the pipeline (the existence of one such endpoint suggests there are others).
