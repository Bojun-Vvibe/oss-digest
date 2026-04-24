# W17 cross-repo synthesis #32 — advertised-validation-surface-vs-accepted-validation-surface: when the catalog of accepted args is wider than what the upstream actually accepts, callers have no recovery path (2026-04-24T19:36Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern in one sentence

**A coding-agent project advertises a validation surface — a JSON Schema, a `supported_openai_params` list, a UI dropdown of providers, a connector allow-list, an exposed runtime class — that is *wider* than the surface the project actually accepts at runtime, and there is no recovery path that surfaces the divergence to the caller in a way they can act on; in W17, six exhibits across litellm, codex, and OpenHands follow this script: litellm #26262 (`invoke post-call guardrails on pass-through endpoint responses` — MERGED, recovery path was missing entirely), litellm #26445 (`drop temperature from anthropic reasoning-family supported params` — advertised param is rejected by the model, fix is to *remove* it from the catalog), litellm #26419 (`add missing 'zai' provider to Add-Model dropdown` — runtime accepted, UI did not), codex #19424 (`Strip sandbox access defaults from app-server JSON schema` — schema-export defaults diverged from runtime accept), codex #19013 (`Allow plugin-declared first-party connectors` — runtime blanket-block was wider than the *advertised* allow-list), and OpenHands #14117 (`Removed V0 runtime` — removes the validation/recovery surface that *was* the V0 contract).**

In each exhibit the *catalog* and the *acceptor* disagree, and the disagreement is invisible to the caller until either (a) the call hits the upstream and is rejected, or (b) the caller's local validation passes and produces a wrong result, or (c) the caller has no recovery option because the contract surface they were depending on is being removed without replacement.

## Why this is *not* synthesis #14 (published-spec-lies-registry-drift)

#14 names the case where the *published name* doesn't resolve at runtime — the registry lies about what *exists*. #32 names the case where the *resolved entity* doesn't accept what the catalog *advertised it accepts* — the registry lies about what each entity *takes*. **#14 is "the name doesn't exist"; #32 is "the name exists, but the args you were told to send are wrong."**

## Why this is *not* synthesis #24 (model-capability-catalog-drift)

#24 names a *capability* mismatch (model X claims it supports tool calls, runtime says no). #32 names an *argument-shape* mismatch on a capability that *both* sides agree exists (the model accepts `temperature` per the catalog; the upstream rejects it per the wire protocol). #24 is "the *what* lies"; #32 is "the *what's accepted* lies."

## Why this is *not* synthesis #29 (error-message-vs-actionable-error)

#29 names the case where the error *that gets produced* is technically correct but operationally useless. #32 names the case where there *is no error path at all* on the divergence — pass-through guardrails are *skipped silently* (#26262), the schema strip emits no warning (#19424), the missing UI dropdown entry is a UX dead-end with no message. **#29 is "the error is unhelpful"; #32 is "there is no error."**

## The exhibits

### Exhibit A — litellm #26262 (MERGED): post-call guardrails on pass-through endpoint responses

**[BerriAI/litellm#26262]** — MERGED 19:15Z. Title: *"fix(proxy): invoke post-call guardrails on pass-through endpoint responses (#20270)."*

Pre-fix: the pass-through endpoint surface allowed callers to bypass the proxy's *normal* request/response shape and forward to an upstream provider directly. The post-call guardrail layer — which validates response content against the configured guardrail policy — *was not invoked* on the pass-through code path. **There was no recovery surface**: a guardrail violation on a pass-through response simply did not exist as a concept until this PR landed.

The fix wires the guardrail invocation into the pass-through path. The synthesis-#32 framing: prior to this PR, the *advertised* guardrail surface was "all responses through this proxy are guardrail-checked"; the *accepted* surface was "all responses except pass-through ones." Callers who relied on the advertised contract had no signal that the pass-through path silently exempted them — there was no error to recover from because the validation was never run.

This PR is also a synthesis #22 (privilege-by-exclusion) closer; the synthesis-#32 lens is the *recovery-path absence*: even if a caller knew about the gap, there was no per-response API to retroactively run the guardrails. The fix changes that, but for any historical pass-through response, the recovery surface remains absent.

### Exhibit B — litellm #26445: drop temperature from anthropic reasoning-family supported params

**[BerriAI/litellm#26445]** — OPEN PR, 19:21Z. Title: *"fix(anthropic): drop temperature from reasoning-family supported params."*

The `supported_openai_params` list for Anthropic reasoning-family models advertised `temperature` as accepted. The upstream Anthropic API rejects `temperature` for these models. Callers reading the catalog passed `temperature` and got upstream-rejection errors with no local indication that the catalog was wrong.

The fix is the *removal* of `temperature` from the catalog. Note the asymmetry: the local validator now *strips* `temperature` from the request before send. **Callers who depended on `temperature` for these models have no recovery path** — the param is not "rejected with explanation" or "downgraded to a near-equivalent"; it is silently dropped at the proxy layer. The caller's locally-correct request becomes a different request on the wire.

The synthesis-#32 signature: the *advertised* validation surface was wider than the *accepted* one; the fix narrows the advertised surface to match the accepted one *and* introduces a silent rewrite at the proxy layer. The new behavior is correct *relative to the upstream*; it is also a contract change against any caller that read `supported_openai_params` as ground truth.

### Exhibit C — litellm #26419: add missing 'zai' (Z.AI / Zhipu AI) provider to Add-Model dropdown

**[BerriAI/litellm#26419]** — OPEN PR, 19:13Z. Title: *"fix(ui): add missing 'zai' (Z.AI / Zhipu AI) provider to Add-Model dropdown."*

The `zai` provider is supported in the routing layer (and has been for some weeks). The Add-Model UI dropdown did not include `zai`. A user wanting to add a `zai` model through the UI had no path — the recovery option was "go edit the YAML directly," which was not signposted from the UI.

The synthesis-#32 framing: the *advertised* surface (the UI dropdown) was *narrower* than the *accepted* surface (the routing layer). This is the inverse direction from Exhibit B but the same shape: the catalog and the acceptor disagree, and the caller has no signal of the divergence — they simply hit a UX dead-end with no error message saying "this provider is supported, just not from the UI; here is the YAML key to use." The recovery path is *known* internally but not surfaced.

### Exhibit D — codex #19424: strip sandbox access defaults from app-server JSON schema

**[openai/codex#19424]** — OPEN PR, refreshed 19:33Z, +88/-64. Title: *"Strip sandbox access defaults from app-server JSON schema."*

The exported JSON Schema for `ReadOnlySandboxPolicy.access` and `WorkspaceWriteSandboxPolicy.readOnlyAccess` carried object-shaped defaults that downstream code generators materialized into client code as if those defaults were the *contract*. Runtime serde defaults remained authoritative, so when runtime defaults shifted, generated clients drifted.

The fix removes the object-shaped schema defaults (keeps scalar defaults like `networkAccess: false`).

The synthesis-#32 framing: the schema *advertised* a default (an object that codegen could materialize); the runtime *accepted* a different default (the serde default, recomputed at runtime). The caller's recovery path was nonexistent — the codegen ran at build time, against the advertised schema, with no signal that the runtime default was different.

The PR fixes the schema to *not advertise* an object default. Callers who were relying on the schema-advertised default for codegen now have *no* default in the schema and must hard-code one or query runtime. **The recovery path moves from "use the advertised default" to "ask the runtime" — but no API for asking the runtime is shipped in the same PR.** The validation surface narrows; the recovery surface narrows alongside it.

### Exhibit E — codex #19013: allow plugin-declared first-party connectors

**[openai/codex#19013]** — OPEN PR, refreshed 19:21Z, +591 lines. Title: *"Allow plugin-declared first-party connectors."*

Pre-fix: every `connector_openai_*` connector id was blanket-blocked by the runtime's allow-list, regardless of whether a plugin had explicitly declared it. The *advertised* allow-list was "any connector you register"; the *accepted* allow-list was "any connector except `connector_openai_*`."

Post-fix: plugins can declare `plugin_declared_connector_ids` to opt specific 1p connectors past the blanket-block.

The synthesis-#32 framing: the runtime's blanket-block was an *un-advertised* validation predicate — the allow-list documentation said nothing about the `connector_openai_*` exclusion. Plugins that registered such ids saw their registrations silently succeed but their traffic silently fail. The recovery path (declare the id explicitly) didn't exist before this PR; it now exists but is opt-in.

This is also a synthesis #28 exhibit (privilege-by-exclusion). The synthesis-#32 lens is on the *validation-surface advertising*: the runtime's *real* validator was wider in scope than what was published.

### Exhibit F — OpenHands #14117: removed V0 runtime

**[OpenHands/OpenHands#14117]** — OPEN PR, refreshed 19:25Z. Title: *"Removed V0 runtime."*

The V0 runtime class is removed entirely. Any caller that pinned to V0 — whether by config, by environment variable, or by direct class reference — has no recovery path post-merge. The advertised validation surface (V0 accepts these args, returns these shapes, fails in these ways) is gone; there is no V0 acceptor to disagree with the V0 catalog because the catalog itself is being deleted.

This is the cleanest *removal*-direction #32 exhibit: the divergence between advertised-and-accepted is being resolved by *removing both*, with no migration shim. Callers must move to the V1+ runtime; the PR body does not include a per-API mapping table from V0 to V1.

The synthesis-#32 signature: the *recovery path* (use V1 instead) is structurally available but operationally undocumented. The caller is told "V0 is gone"; they are not told "here is the V1 equivalent of every V0 surface you used."

## What ties the six exhibits together

| Exhibit | Advertised surface | Accepted surface | Direction of disagreement | Recovery path |
|---|---|---|---|---|
| A (litellm #26262) | "All responses guardrail-checked" | "Pass-through skipped" | Advertised wider | Absent pre-fix; partial post-fix |
| B (litellm #26445) | `temperature` accepted | Upstream rejects | Advertised wider | Silent rewrite at proxy |
| C (litellm #26419) | UI dropdown subset | Routing layer superset | Advertised narrower | Edit YAML (unsignposted) |
| D (codex #19424) | Schema object defaults | Runtime serde defaults | Advertised differs | Removed; ask runtime (no API shipped) |
| E (codex #19013) | "Any connector registers" | `connector_openai_*` blocked | Advertised wider | Opt-in declaration (new) |
| F (OpenHands #14117) | V0 runtime exists | V0 runtime removed | Both deleted | V1, undocumented mapping |

Across all six: the *validator* and the *catalog* of what the validator accepts are owned by different code paths, maintained on different cadences, and updated through different PR review surfaces. **No project in the cluster has a CI check that re-derives the catalog from the validator (or vice versa).** Drift between the two is not detected until a user hits it — and the user's error path is, by definition, the one with no recovery surface.

## The pattern's deceptive feature

Each fix changes the *catalog* to match the *validator*, not the other way around. **None of the six exhibits ship a validation-surface contract test** that would prevent the next divergence. The fix is point-in-time; the architectural pattern that produced the divergence is unchanged. Expect the same six projects to ship more #32 exhibits in W18, on different surfaces, with the same shape.

## Cluster forecast

#32 exhibits to watch for in W18:

1. **litellm follow-up to #26445**: a sibling PR drops `top_p` or `top_k` from another model family's `supported_openai_params` for the same reason — the catalog and the upstream wire protocol drifted and the catalog gets narrowed.
2. **codex follow-up to #19424**: a downstream SDK files an issue when their codegen breaks; the issue is closed as "use runtime defaults"; the runtime-default-query API still does not ship.
3. **A new repo joins the cluster**: crush or anomalyco/opencode files a "supported params list is wrong" issue; expect a single-line removal PR with no test.
4. **The catalog-derivation CI check**: zero projects ship one in W18. (Confidence: high.)

## Action items for the digest

1. **On the next #14 (published-spec-lies-registry-drift) refresh**, distinguish #14 from #32 by what's lying — name vs accepted args.
2. **On the next #24 (model-capability-catalog-drift) refresh**, distinguish #24 from #32 by what's drifting — capabilities vs accepted-arg shapes.
3. **On the next #29 (error-message-vs-actionable-error) refresh**, contrast: #29 has an error; #32 has no error.
4. **Open a watch on litellm `supported_openai_params`**: every entry that lacks a corresponding upstream-acceptance test is a latent #32.
5. **Track each of the six exhibits** for a follow-up validation-surface contract test. None will ship one. The first project that does is the cluster's exit criterion.

## Open questions

1. Does any project in the cluster have a CI job that diffs the *advertised* validation surface (schema, supported-params list, dropdown options) against the *accepted* one (runtime call test against a real upstream)? (If yes, none of the six exhibits cite it.)
2. Of the six, how many users discovered the divergence by *upstream rejection* vs *silent wrong result*? (Exhibits A, C, E lean toward silent; B, D, F lean toward upstream rejection.)
3. Is the recovery-path-absence pattern *worse* in proxy/aggregator projects (litellm) than in single-runtime projects (codex, OpenHands)? Spot check suggests yes — the aggregator is necessarily a catalog of validators, and each catalog entry is a #32 risk.
