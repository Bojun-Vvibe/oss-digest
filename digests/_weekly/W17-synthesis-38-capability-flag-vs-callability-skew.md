# W17 cross-repo synthesis #38 — capability-flag-vs-callability-skew: when a model, tool, or feature is *callable* through the runtime dispatch path before the *capability registry* (capability flags, pricing maps, validation enums, threshold tables) catches up, callers querying capability-by-flag get "no" for something that in fact works, and callers calling-and-handling-errors get "yes" for something the catalog claims doesn't exist — the two answers diverge for the duration of the catch-up window (2026-04-24T22:32Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through every PR before acting._

## The pattern in one sentence

**A coding-agent project ships a new model / tool / feature into the *runtime dispatch path* (the route table, the model resolver, the tool registry, the OAuth flow) faster than it ships into the *capability registry* (the capability-flag table, the cost map, the validation enum, the context-size threshold table, the docs string), so for the duration of the catch-up window — minutes, hours, occasionally days — the system gives two different answers depending on which surface the caller queries: a `supports_X(model)` query against the capability registry returns false; an actual call to the model with feature X enabled returns success; a downstream cost-tracking query returns `cost=0` because the cost map has no entry; a docs/upgrade-guide lookup returns "no documentation" because the docs string is unwritten; in W17, six anchor exhibits across BerriAI/litellm, openai/codex, anomalyco/opencode, charmbracelet/crush, and ollama/ollama follow this script: litellm #26449 (`Day-0 support for GPT-5.5 and GPT-5.5 Pro` MERGED 21:10Z) shipped the runtime dispatch entries before litellm #26456 (`gpt-5.5 reasoning_effort capability flags + add supports_low_reasoning_effort` OPEN 22:09Z) shipped the capability flags — for ~59 minutes and counting, `supports_low_reasoning_effort("gpt-5.5")` returned false while a call with `reasoning_effort=low` returned success; codex #19443 (`Add gpt-image-2 to bundled OpenAI Docs skill` MERGED 21:48Z) shipped the catalog entry before codex #19422 (`Clarify bundled OpenAI Docs upgrade guide wording` OPEN 22:09Z) shipped the upgrade-guide wording — catalog says gpt-image-2 exists, upgrade guide is silent on how to migrate to it; anomalyco/opencode #24212 (`ensure gpt-5.5 compacts at correct context size when using openai oauth` MERGED 21:39Z) shipped the dispatch fix for gpt-5.5 over OAuth before any `compact_threshold(model, auth_path)` capability-query existed at all — gpt-5.5 was callable over OAuth before the context-size compaction capability had a published threshold; crush #2703 (`fix re-authorization flow not triggering on certain conditions` MERGED 14:27Z) shipped the dispatch-side re-auth trigger fix without an accompanying capability-flag declaring "supports re-auth on condition X" — callers can't discover capability without trying-and-handling; ollama #15787 (`api: accept 'max' as a think value` MERGED 08:49Z) widened the *accepted* validation surface for the `think` field to include "max" without updating the *advertised* enumeration that clients use for validation — clients querying the enum see the old set, calls with "max" succeed; ollama #15789 (`openai: map responses reasoning effort to think` MERGED 09:49Z) added the dispatch-side mapping of OpenAI-responses `reasoning_effort` to internal `think` without adding a capability flag for "supports cross-API reasoning-effort translation" — clients calling through OpenAI-responses get the translation, clients querying capability don't see it advertised.**

In each exhibit, the shape is identical: **a feature is *callable* before it is *advertised* → callers using try-and-handle get success → callers using query-then-call get false negatives → the cost-tracking layer / capability-discovery layer / docs layer / validation-enum layer lags behind the dispatch layer → the lag is invisible from any single PR diff because the dispatch PR and the capability PR are separate diffs, often filed by different authors at different times.** The bug is *not* the dispatch landing first (early dispatch is often correct — bug fixes need to ship); the bug is that the catalog's lag time is *not bounded* and *not observable* — there is no SLA between the dispatch landing and the catalog catching up, and no monitor that fires when callers query a capability that actually works.

## Why this is *not* synthesis #21 (advertised-capability-vs-runtime-delivery)

#21 names cases where the catalog *advertises* a capability that the runtime does *not actually deliver* — the catalog over-promises and the runtime under-delivers. **#38 names the inverse case**: the runtime *delivers* a capability that the catalog has not yet *advertised* — the runtime over-delivers and the catalog under-promises. Both are catalog-vs-runtime drift; the direction is opposite.

Both can compose: a feature can ship to the runtime, then a capability flag is added that *advertises* it correctly, then a runtime regression breaks delivery while the flag stays true — the timeline traverses #38 (runtime ahead) → #21 (catalog ahead). In W17, the litellm GPT-5.5 trajectory is currently in the #38 phase: dispatch shipped at 21:10Z, capability flags pending at 22:09Z. If the capability PR (#26456) lands and a subsequent regression breaks `supports_low_reasoning_effort` delivery, the trajectory will flip into #21.

## Why this is *not* synthesis #14 (published-spec-lies-registry-drift)

#14 names cases where a published *registry* (catalog, manifest, list of names) lies about what *exists*. **#38 names cases where the registry is silent on capability that exists** — the registry is not lying, it is simply unaware. #14 is *false-positive* drift; #38 is *false-negative* drift.

Practically: a #14 caller sees an entry in the registry and tries to use it, getting a runtime error. A #38 caller does *not* see an entry in the registry and never tries — capability is *callable but undiscoverable*. The #38 case is harder to monitor because there is no error log to grep — silence on the caller side is the only signal.

## Why this is *not* synthesis #18 (version-skew-cli-vs-server)

#18 names cases where the CLI and the server disagree on what version of a contract is current. **#38 names cases where the *dispatch surface* and the *capability-discovery surface* on the *same side* (server-side, or client-side) disagree on what capability exists** — the skew is not between two parties, but between two registries within one party.

The two patterns *can* compose: a server-side #38 (dispatch ahead of capability flags) propagating to a client-side capability-discovery query produces a *cross-party* read that looks like a #18 exhibit (server says callable, client thinks not supported). But the *originating* skew is structural (#38) on the server side before it becomes interparty (#18).

## Why this is *not* synthesis #24 (model-capability-catalog-drift)

#24 names cases where the *catalog of models* in the discovery surface drifts from the *catalog of models* the runtime can actually serve — i.e., model-level presence/absence drift. **#38 names cases where a *single model* (or feature, or tool) is present on both sides but its *capability flags / cost / threshold / validation enum* drift between the two sides** — capability-level drift, not presence-level drift.

The two compose: a model can be missing from the catalog entirely (#24 exhibit) *and*, once added, can land with stale capability flags (#38 exhibit). In W17, GPT-5.5 traversed this trajectory in 4 hours: pre-21:10Z it was a #24 exhibit (entirely absent from litellm catalog); 21:10Z–22:09Z it became a #38 exhibit (present but capability flags incomplete); 22:09Z onwards (when #26456 lands) it will exit both — assuming #26361 (Azure cost map) also lands.

## What sets the alarm

For each W17 exhibit, the *skew signal* is the same: a "Day-0 support" or "Add X" or "Map A to B" PR title lands without a sibling "supports_X capability flag" or "X cost-map entry" or "X validation enum extension" PR landing within the same dispatcher tick. The *time* between the dispatch PR and the capability PR is the catch-up window.

In W17:
- **litellm GPT-5.5**: 59min and counting between dispatch (#26449 MERGED 21:10Z) and capability flags (#26456 OPEN 22:09Z). Cost map (#26361 OPEN since 21:00Z) is now 92min behind dispatch.
- **codex gpt-image-2**: 21min between catalog landing (#19443 MERGED 21:48Z) and upgrade-guide clarification (#19422 OPEN 22:09Z, refreshed in window).
- **anomalyco/opencode gpt-5.5 OAuth context-size**: dispatch fix (#24212 MERGED 21:39Z) landed without a published `compact_threshold(model, auth_path)` capability — discoverability gap is open-ended.
- **crush hyper re-auth condition**: dispatch fix (#2703 MERGED 14:27Z) landed without a capability flag declaring re-auth-on-condition support. Open-ended.
- **ollama think-value validation widening**: dispatch widening (#15787 MERGED 08:49Z) landed without an accompanying client-side enumeration update. Discoverability gap is at the docs string level.
- **ollama OpenAI responses → think mapping**: dispatch mapping (#15789 MERGED 09:49Z) landed without a published "supports cross-API reasoning-effort translation" capability flag.

## Mechanism

1. A new model / tool / feature is announced or shipped upstream (OpenAI ships GPT-5.5; gpt-image-2 becomes available; a new `think` value is desired).
2. The downstream OSS project files a *day-0* dispatch PR — the smallest possible change to make the new thing callable through the runtime path.
3. The day-0 PR lands fast, often within hours of upstream announcement, because the smallest-callable change is genuinely small (a few lines in a route table, a model resolver entry, a string-to-enum mapping).
4. The capability registry (capability flags, cost map, validation enum, context-size threshold, docs string, upgrade guide) is *separate* from the dispatch surface — different files, different reviewers, different rebase calculus.
5. The capability registry update is filed as a follow-up PR, often by the same author, sometimes by a different author who notices the gap.
6. The follow-up PR sits in review queue. The dispatch PR has already landed. The catch-up window opens.
7. During the catch-up window, capability-discovery callers see false negatives. Try-and-handle callers see correct behavior. Cost-tracking callers see `cost=0` for billable calls (the litellm GPT-5.5 Azure cost-map exhibit). Validation callers reject inputs the runtime would accept (the ollama "max" think-value exhibit). Docs/upgrade-guide readers see no migration path (the codex gpt-image-2 exhibit).
8. The follow-up PR eventually lands. The catch-up window closes. There is no monitor that fires when the window opens or closes.

## Action

- **For maintainers**: when filing a day-0 dispatch PR, file the capability-registry sibling PR *in the same hour* and link them in both PR bodies. Otherwise the capability-registry update slides indefinitely.
- **For reviewers**: when reviewing a day-0 dispatch PR, ask "what is the capability-flag / cost-map / validation-enum / docs-string sibling and is it filed?" If not, request that it be filed before merge.
- **For downstream consumers**: do *not* use `supports_X(model)` as a gate for calling X. Use try-and-handle. Capability-discovery surfaces lag dispatch surfaces by minutes-to-hours-to-days; gating on capability-discovery underutilizes capability that exists.
- **For cost-tracking layers**: when the cost map has no entry for a callable model, log a `cost_unknown` event rather than silently reporting `cost=0`. Silent zero-cost is the worst failure mode of #38 — it under-reports spend without surfacing the gap.
- **For docs/upgrade-guide writers**: subscribe to dispatch-PR-merged events on the catalog-relevant file paths and auto-file a docs-stub PR. Otherwise the docs lag.

## Anchor exhibits this synthesis was extracted from

- BerriAI/litellm#26449 (dispatch MERGED 21:10Z) + #26456 (capability flags OPEN 22:09Z) + #26361 (cost map OPEN since 21:00Z prior window) + #26458 (Azure-side catalog OPEN 22:14Z) + #26459 (enforcement reseed OPEN 22:24Z)
- openai/codex#19443 (catalog MERGED 21:48Z) + #19422 (upgrade-guide wording OPEN 22:09Z)
- anomalyco/opencode#24212 (gpt-5.5 OAuth context-size MERGED 21:39Z) + #24218 (interleaved auto-enable OPEN 22:15Z, default-flip class)
- charmbracelet/crush#2703 (hyper re-auth fix MERGED 14:27Z) + crush#2700 (structured retry fields MERGED 12:40Z)
- ollama/ollama#15787 (`think` accepts "max" MERGED 08:49Z) + ollama#15789 (OpenAI responses → think mapping MERGED 09:49Z)

## Reverse direction (when the pattern does *not* fire)

The pattern requires the *dispatch* and the *capability registry* to live in *different files / different surfaces*. A feature that ships dispatch-and-capability in a single atomic PR is not a #38 exhibit — the catch-up window is zero. In W17, anomalyco/opencode#24216 (`test(httpapi): cover hono bridge middleware` MERGED 22:03Z) is *not* a #38 exhibit because the test landed alongside the dispatch fix — they are in the same logical change, even though they are different files.

The pattern also does not fire when the capability registry is *generated* from the dispatch surface (single source of truth, derived registry). The anomalyco/opencode#24219 (`docs(effect): add generated http route inventory` OPEN 22:15Z) PR is an *anti-#38* exhibit — generated docs cannot lag dispatch by definition. If the broader capability-registry layer were generated rather than hand-maintained, the catch-up window would close mechanically.

The dispatch-vs-capability separation is a structural choice. Hand-maintained capability registries trade integrity for flexibility — the registry can carry information the dispatch surface cannot derive (pricing, deprecation schedules, regional availability). The cost of that flexibility is the catch-up window. #38 is the price.
