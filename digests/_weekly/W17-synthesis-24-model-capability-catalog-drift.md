# W17 cross-repo synthesis #24 — model-capability catalog drift: the static lookup tells a different story than the runtime (2026-04-24T18:00Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern in one sentence

**Every shim and CLI maintains a *static catalog* of "what this model supports" — context window, parameter set, tool surface, modality — and on 2026-04-24 the catalog and the live API disagreed in seven independently-filed bugs across codex, litellm, and opencode against three different new-model rollouts (gpt-5.5, Claude Opus 4.7, Zen, DeepSeek V4).**

The catalog exists because the runtime cannot afford an HTTP round-trip per "does this model support `temperature`?" question — so each project ships a hard-coded table, updates it manually, and inevitably drifts. New-model launches make the drift *visible* because the model and its catalog row land in different PRs (often different repos), and on launch day the table is wrong in at least one place.

## Why this is *not* synthesis #14 (published-spec lies / registry drift)

Synthesis #14 named the *published spec* drifting from what the registry actually serves: documentation says one thing, the registry has a different version. That pattern is about *one project* with two surfaces (docs + registry) telling different stories.

This synthesis is about *the same project's runtime* disagreeing with *the same project's catalog*. There is no third-party document — the catalog *is* the project's own internal source of truth, and the runtime contradicts it. That is a structurally different bug, even though both share the symptom of "lookup says X, reality says Y." Synthesis #14 is fixed by re-syncing the registry; this pattern is fixed by *removing* the static catalog or making it derived from a runtime probe.

## Why this is *not* synthesis #21 (gpt-5.5 / advertised-capability vs runtime-delivery)

Synthesis #21 was specifically about gpt-5.5: a single model whose advertised 400k context did not survive contact with the runtime. That synthesis is *one model, one project*.

This synthesis is the cross-repo, cross-model generalization. Two repos hit catalog-drift bugs against *different* new models on the *same afternoon*, and the two bugs have the same shape. The pattern is *not* "gpt-5.5 was launched badly"; it is "every new-model launch will produce at least one catalog-drift bug because the catalog and the model are maintained by different humans on different timelines."

## The exhibits

### Exhibit A — codex catalog says gpt-5.5 supports 400k context, runtime cannot reach it

[openai/codex#19409] — *"GPT-5.5 context catalog mismatch makes 400K/1M setup unsafe and can bypass auto-compaction."*

Filed 17:32Z. The codex *context catalog* (the in-process table the runtime consults to decide *when* to compact) reports 400k for gpt-5.5. The actual sustainable context is closer to 220k (the value at which #19386 reproducibly fails). Worse: on the 1M setup the catalog can *bypass* auto-compaction entirely, because the catalog says there is plenty of headroom when there is not.

This is the *purest* exhibit because the bug is named in the title: "*context catalog mismatch*." Not "compaction is broken" (that is the symptom in #19386); the underlying mechanism is that the catalog the compactor trusts is wrong. The fix surface is a different file from the compactor.

### Exhibit B — litellm catalog says Claude Opus 4.7 supports `temperature`, Anthropic rejects it

[BerriAI/litellm#26444] — *"[Bug]: get_supported_openai_params still reports 'temperature' as supported for Anthropic Claude Opus 4.7 — Anthropic rejects temperature on this model."*

Filed 17:24Z. `get_supported_openai_params` is litellm's lookup function — given a model name, return the set of OpenAI-API-shaped parameters that model accepts. For Claude Opus 4.7 it still returns `temperature` in the supported set. The Anthropic API rejects requests that include `temperature` for Opus 4.7 (the model uses a different sampling discipline at this rev).

So a user who introspects the supported params, builds a request including `temperature`, and sends it through litellm gets a 400 from upstream. The litellm catalog is wrong; the Anthropic API is right; the user wrote correct code against the catalog and was punished for trusting it.

Same shape as Exhibit A: project-internal catalog disagrees with runtime, on a model that landed recently.

### Exhibit C — codex desktop picker hides gpt-5.5 even when backend reports it available

[openai/codex#19404] — *"Desktop app model picker does not show gpt-5.5 even when backend reports it available."*

Filed 17:08Z (caught in the previous addendum, restated here). The desktop app's model picker is driven by a *separately-maintained* catalog — distinct from the runtime catalog in Exhibit A. The backend reports gpt-5.5 as available; the desktop catalog does not include it; the picker hides it. The symptom is the *opposite* of Exhibit A (here the catalog is *too narrow*, there it is *too wide*) but the underlying defect is identical: a catalog drift on a new-model rollout.

The fact that codex has *two* catalogs (runtime in #19409, desktop picker in #19404) drifting in *opposite directions* on the same model on the same day is itself the pattern — not a coincidence.

### Exhibit D — codex bundled docs skill is being updated for gpt-5.5 in a separate PR

[openai/codex#19407] — *"Update bundled OpenAI Docs skill for GPT-5.5."*

Filed 18:00Z (edge of window). The codex agent ships with a *bundled OpenAI Docs skill* that includes model-capability descriptions used for in-agent retrieval. This PR updates that skill to know about gpt-5.5. So codex now has *three* representations of "what gpt-5.5 supports": the runtime context catalog (#19409), the desktop picker catalog (#19404), and the bundled docs skill (#19407) — and all three are being maintained independently.

#19407 is *the right shape of fix* — update the catalog when a new model lands — but the existence of three independent catalogs that all need this same update is the shape of the pattern. The next new-model launch will produce the same three updates, and one of them will be missed again.

### Exhibit E — codex #19386 is the *original* observation; #19409 is the *catalog-shaped* explanation

[openai/codex#19386] — *"GPT-5.5 Codex session hits unrecoverable compaction failure around ~220k tokens despite advertised 400k context."*

Filed earlier in the day (in the 16:09Z window's set). Reads as a runtime-failure bug, but the gap between *advertised 400k* and *delivered 220k* is exactly the catalog-drift gap that #19409 names mechanistically. Without #19409, #19386 looks like "compaction has a memory leak"; with #19409, it is clearly "the catalog promised more than the model delivers, and the compactor trusted the catalog."

So #19386 + #19409 form a "symptom + diagnosis" pair on the same model in the same project on the same day. Whether the fix is at the catalog or the compactor is the architecturally important question.

### Exhibit F — opencode silently downgrades Zen-routed models without notification

[anomalyco/opencode#24186] — *"[BUG] backend Zen models downgraded without notification."*

Filed 16:28Z (in the previous addendum's window). The Zen routing layer silently downgrades certain models to cheaper variants and does not surface this in any user-facing channel — no banner, no log line, no token in the response. From the user's perspective, the model they asked for is the model they got; from the backend's perspective, a different model produced the response.

This is catalog drift at the *routing* layer rather than the *capability* layer: the catalog that maps "user-requested model" to "actually-served model" is silently rewriting the answer. It belongs in this synthesis because the user is making decisions (cost estimates, output expectations) based on a catalog entry that the runtime is unilaterally overriding.

### Exhibit G — anomalyco/opencode DeepSeek surface is a fourth model with catalog gaps

[anomalyco/opencode#24189] — *"DeepSeek cache usage is not reported in opencode stats (v1.14.24)."* and adjacent #24188.

Filed 17:03Z (previous window). The opencode stats surface — which is itself a catalog of "what this model session has cost / used" — does not have a row for DeepSeek cache usage. So users running DeepSeek see a *partial* row in the catalog, and the missing row is not flagged as missing; it is just silently zero. Same shape as Exhibit F (silent rewrite) but on the *post-hoc* catalog (usage stats) rather than the routing catalog.

This is a fourth model (DeepSeek joins gpt-5.5, Claude Opus 4.7, Zen) producing catalog-drift bugs in W17.

## What ties the exhibits together

| Project       | Catalog               | Drift direction                  | Model                |
|---------------|-----------------------|----------------------------------|----------------------|
| codex         | runtime context size  | catalog wider than runtime       | gpt-5.5              |
| codex         | desktop picker        | catalog narrower than runtime    | gpt-5.5              |
| codex         | bundled docs skill    | catalog stale, being updated     | gpt-5.5              |
| litellm       | supported_openai_params| catalog wider than runtime      | Claude Opus 4.7      |
| opencode      | Zen routing table     | catalog rewrites silently        | (multiple Zen models)|
| opencode      | usage stats           | catalog incomplete (missing rows)| DeepSeek             |

Six exhibits, three repos, four models, one afternoon. Every project that ships a model-capability catalog produced at least one drift bug.

## Why this keeps happening

Three structural reasons, all of which are visible in the exhibits:

1. **The catalog and the model live on different release timelines.** A model is added by the vendor; the catalog row is added by the shim project's maintainers. The two events are days to weeks apart, and the bugs file in the gap.
2. **Each project ships *multiple* catalogs.** codex has at least three (runtime context, desktop picker, docs skill). litellm has at least two (supported params, model registry). opencode has at least two (routing, usage). When a new model lands, every catalog needs an update; some get it, some do not.
3. **The catalog is a *cache*, not a *source of truth*, but the code treats it as a source of truth.** A vendor probe (`GET /v1/models/{id}`) is what the catalog purports to summarize, but no project re-derives the catalog from the probe — they copy it once, by hand.

## What a working alternative looks like

Three approaches, in order of plausibility:

1. **Capability probes on first use.** When a new model name appears, hit a vendor capability endpoint, derive the catalog row at runtime, and cache for a TTL. Solves Exhibits A, B, C, D — but requires the vendor to *have* a capability endpoint that returns context size, supported params, and tool surface. Not all vendors do.
2. **Catalog generated from CI against a vendor-supplied manifest.** OpenAI, Anthropic, DeepSeek each publish a model manifest (some do, some do not, with varying schemas). CI generates the catalog row from the manifest, fails the build if the manifest changed. Solves the "humans copy by hand" failure mode but inherits whatever the vendor's manifest does or does not include.
3. **Treat absence of a row as an *error*, not a *zero*.** Specifically for Exhibit G (DeepSeek cache stats silently zero): if the model is in the catalog but a metric is not, the UI should say "unknown" not "0." This is the cheapest fix and would catch the drift the soonest.

The codex permissions refactor train (#19391–#19395, synthesis #21) hints at approach 1 for the *permissions* catalog — collapsing runtime config and profile into a single source of truth. The same shape of refactor applied to the *capability* catalog would close most of the bugs in this synthesis.

## Watch list for next refresh

- Whether [openai/codex#19409] proposes a fix at the catalog (correct) or at the compactor (would re-open the bug for the next model).
- Whether [BerriAI/litellm#26444] is fixed by editing the params table or by deriving the params table from a vendor probe.
- Whether [openai/codex#19407] is the *only* docs-skill update needed for gpt-5.5 or whether more land later in the week (more updates ⇒ more catalogs to maintain).
- Whether [anomalyco/opencode#24186] gets a notification path or a routing-layer fix that prevents the silent downgrade entirely.
