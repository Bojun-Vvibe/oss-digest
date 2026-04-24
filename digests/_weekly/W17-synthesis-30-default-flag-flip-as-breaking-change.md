# W17 cross-repo synthesis #30 — default-flag-flip-as-breaking-change: introducing an opt-in flag that re-labels the *recommended* path is the prelude to a silent contract change (2026-04-24T19:10Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern in one sentence

**A coding-agent project ships an opt-in flag that, by its own description, redefines which surface is "recommended" for a given operation; the flag's *current* default leaves observable behavior unchanged, but the public framing — "recommended path", "preferred shape", "default going forward" — locks in a future where flipping the default is no longer treated as a breaking change because "users were already expected to be on it"; in W17, six exhibits across litellm, codex, and the opencode fork follow this script: litellm #25359 (`route_all_chat_openai_to_responses`, default `False`, framed as "the recommended path for OpenAI models"), codex #19414 (`make legacy profile conversion cwd-free`, removes an implicit cwd-default callers depended on), codex #19424 (strip object-shaped JSON Schema defaults to "fix codegen-hostile" generated clients), codex #19160 (remove the public `parse_patch_streaming` / `ParseMode::Streaming` API as a "consolidation"), codex #19013 (replace blanket-block default with explicit allow-list for `connector_openai_*`), and anomalyco/opencode #23844 (require explicit `workspace` parameter for `question.reply` instead of falling back to the default workspace).**

The PR diff is small. The commit message is innocuous ("feat", "fix", "consolidate", "make ... cwd-free"). But each PR converts a *previously-implicit default* into an *explicit user choice* — and the next release that flips the default is positioned to claim "we already documented the recommended path; this is just the default catching up."

## Why this is *not* synthesis #17 (feature-flags-as-load-bearing-defaults)

Synthesis #17 names the *consumption-side* failure: a flag's default is silently providing critical behavior, callers depend on the default, and changing it breaks them. The fix shape is to make the default explicit at call sites.

Synthesis #30 names the *production-side* setup for that future failure: a project ships a *new* opt-in flag whose framing positions the future default-flip as a non-breaking change. **#17 is the call-site that was always going to break**; **#30 is the upstream PR that retroactively legitimates the eventual break.** The two compose: every #17 exhibit started life as a #30 PR somewhere upstream. **The three exhibits below in this synthesis (litellm #25359, codex #19414, anomalyco/opencode #23844) will, if shipped as-framed, produce textbook #17 exhibits in the next 1-2 release cycles.**

## Why this is *not* synthesis #14 (published-spec-lies-registry-drift)

#14 is a *catalog* problem: the published name doesn't resolve at runtime. #30 is a *contract* problem: the published name resolves correctly *today* but the project is preparing the public framing for a contract change. #14 is "the spec lies about what exists"; #30 is "the spec is preparing to redefine what 'default' means."

## Why this is *not* synthesis #18 (version-skew-cli-vs-server)

#18 is two artifacts at incompatible versions; the fix is to align them. #30 is one artifact at one version, but the *meaning* of the unflipped default is being moved out from under callers who never got a release-notes warning.

## Why this is *not* synthesis #19 (snapshot-vs-live-state)

#19 is about a snapshot that drifted from the live state it was supposed to mirror. #30 is about a *default* that is being relabeled while still in effect. Snapshot drift is unintentional; default-flip framing is deliberate.

## The exhibits

### Exhibit A — litellm #25359 (MERGED today): "the recommended path for OpenAI models"

**[BerriAI/litellm#25359]** — MERGED 19:06Z. Title: *"feat(openai): add `route_all_chat_openai_to_responses` global flag."*

What it ships: `litellm.route_all_chat_openai_to_responses` (env: `LITELLM_ROUTE_ALL_CHAT_OPENAI_TO_RESPONSES`). When set, *all* `/chat/completions` calls to OpenAI are silently routed through the Responses API bridge.

The default is `False`. Three unit tests in `tests/test_litellm/test_main.py` verify (a) flag routes OpenAI to responses, (b) flag does not affect Azure, (c) **flag defaults to False**. So today, observable behavior is unchanged.

The PR body is the giveaway:

> Adds a global feature flag `litellm.route_all_chat_openai_to_responses` that, when enabled, routes all OpenAI `/chat/completions` requests through the existing Responses API bridge. **This makes the Responses API the recommended path for OpenAI models without requiring users to prefix models with `responses/`.**

"Recommended path" without flipping the default is a contradiction in terms — *users who do nothing get the un-recommended path.* The only resolutions are (1) the framing is wrong and the flag is just an opt-in (in which case the PR description is misleading), or (2) the framing is right and a future release will flip the default. **Once the framing is in the merged PR body, future maintainers can cite it as evidence that the user community had been warned, and a default-flip release will be marked "minor" instead of "breaking."**

Side observation: the *same* PR slips in a fix to `responses/litellm_completion_transformation/transformation.py` to preserve the full `reasoning` dict including the `summary` key (instead of extracting only `effort`). That is a quiet bug fix on the reasoning-shape contract surface (synthesis #23) **landing as an undocumented rider in a feature PR.** Riders in feature PRs are themselves a #30-adjacent practice: bug-fix changes that should have had their own release-notes entry are co-landed with a feature, and the feature framing eats their visibility.

### Exhibit B — codex #19414: "cwd-free" legacy profile conversion (removing an implicit default)

**[openai/codex#19414]** — OPEN PR, by bolinfest, refreshed 19:09Z. Title: *"permissions: make legacy profile conversion cwd-free."*

The legacy → profile policy converter currently reads `cwd` from the surrounding process to resolve relative paths in policy expressions. This PR makes the converter take cwd as an explicit argument.

Reading the title charitably: "cwd-free" sounds like a cleanup. **Reading the title strictly:** the same legacy policy file produced *different* profiles depending on which directory the converter was invoked from. Anyone who scripted the converter into a CI pipeline, a build tool, or a wrapper invocation that happened to set `cwd` to the project root *implicitly relied* on that cwd. Their conversion result is about to change.

The PR does not announce a deprecation period, a backwards-compatible shim, or a migration guide. The `cwd` parameter goes from "implicitly the process cwd" to "explicitly required" — and existing callers who pass nothing now get a different (or failing) result.

This is exactly the synthesis #17 setup: the *cwd default* was load-bearing for a class of callers that nobody documented. Making it explicit is the right fix; doing it without the deprecation window is the breaking-change-as-cleanup pattern.

### Exhibit C — codex #19424: strip JSON Schema object defaults to "fix codegen-hostile" defaults

**[openai/codex#19424]** — OPEN PR, by neil-oai, +88/-64. Title: *"Strip sandbox access defaults from app-server JSON schema."*

What changes: object-shaped defaults (`access`, `readOnlyAccess`) are removed from the *exported* JSON Schema. **Runtime serde defaults are kept. Scalar schema defaults like `networkAccess: false` are kept.**

The PR body is explicit:

> Strip codegen-hostile object defaults from `ReadOnlySandboxPolicy.access` and `WorkspaceWriteSandboxPolicy.readOnlyAccess` during app-server JSON Schema export.

"Codegen-hostile" is a euphemism. What actually happened: downstream code generators consumed the exported schema, materialized the default object as if it were a *contract*, and produced clients that froze the default values into generated code. When the runtime later changed those defaults, the generated clients drifted.

The fix is correct. **But the change is a contract change for every downstream consumer that was relying on the schema's object defaults to drive codegen.** Those consumers will, in the next release, suddenly see *no* default in the schema where they previously saw an object — and their codegen will either error out (best case) or silently emit different client code (worst case).

There is no deprecation window. There is no schema-version bump (none of the schema files in the diff bump a `version` field). The fix is shipped as a `+88/-64` change to the schema export with no separate release-notes call-out.

### Exhibit D — codex #19160: remove the public `parse_patch_streaming` / `ParseMode::Streaming` API

**[openai/codex#19160]** — OPEN PR, +521 lines. Title: *"Make apply_patch streaming parser stateful."*

Buried in the PR body: *"remove the public `parse_patch_streaming` / `ParseMode::Streaming` path so streaming progress stays owned by the diff consumer."* This is a **public API removal** filed under a "make X stateful" title. Any downstream crate that depended on `parse_patch_streaming` is broken at compile time on next release.

The framing positions the removal as a *consolidation* — the parser is being unified, the streaming progress is being moved to the diff consumer. From the consumer's side, the public surface they import disappears. **No deprecation cycle, no `#[deprecated]` attribute, no release-notes call-out.**

This is the cleanest #30 exhibit because the *direction of removal* is the opposite of #25359 / #19414: instead of introducing an opt-in flag that re-labels the default, it *removes* a public surface that was the implicit default. Both shapes share the same pre-condition (the change is breaking) and the same framing strategy (the PR title makes the change sound like a consolidation/cleanup).

### Exhibit E — codex #19013: replace blanket-block default with explicit allow-list

**[openai/codex#19013]** — OPEN PR, +591 lines. Title: *"Allow plugin-declared first-party connectors."*

The current connector filter blocks every `connector_openai_*` id by *blanket policy*. This PR introduces `plugin_declared_connector_ids` so plugin-bundled 1p connectors are allow-listed.

This looks like a feature addition (allow more connectors). **It is also a default-semantics change**: previously, the *meaning* of `connector_openai_*` at runtime was "always blocked." Going forward, the meaning is "blocked unless your active plugin declares it." Plugins that *do* declare such connectors will start receiving traffic that was previously blocked — and downstream code that assumed `connector_openai_*` traffic could never reach a handler will need re-auditing.

There is no deprecation cycle for the blanket-block default; the moment the PR lands, plugin-declared 1p connectors start getting traffic.

### Exhibit F — anomalyco/opencode #23844: workspace param goes from "default-fallback" to "must-pass-current"

**[anomalyco/opencode#23844]** — OPEN PR, refreshed 19:09Z, +6 lines. Title: *"fix(tui): route question replies through current workspace."*

Pre-fix: `question.reply` POSTs without a `workspace` query parameter went to the *default* workspace. Post-fix: TUI passes the current workspace explicitly.

The PR body says:

> POST requests need the explicit `workspace` query parameter for remote workspace routing.

That sentence is a contract change announcement disguised as a bug fix. Pre-fix, the *default* workspace was the implicit fallback for any caller that didn't supply a `workspace` param. Post-fix, the TUI supplies it — but the *server* still presumably accepts the param-less form and routes to the default. **Until the server enforces "workspace param required," third-party clients that imitated the old TUI behavior will continue to silently mis-route.**

This is a partial #30: the breaking change is being *prepared* on the client side without the server-side enforcement that would make the contract change irreversible. Watch for a follow-up server-side PR that makes the param required; that's the moment the contract actually flips.

## What ties the six exhibits together

| Exhibit | Surface change | Today's behavior | Tomorrow's behavior | Framing strategy |
|---|---|---|---|---|
| A (litellm #25359) | Add opt-in routing flag | Default unchanged | Default flip → all OpenAI through Responses | "Recommended path" |
| B (codex #19414) | Make cwd explicit in legacy converter | Old call sites silently broken | Explicit cwd required everywhere | "cwd-free" cleanup |
| C (codex #19424) | Strip object defaults from exported schema | Generated clients drift | New codegen has no defaults | "codegen-hostile" defaults |
| D (codex #19160) | Remove public streaming-parse API | Consumers compile-fail | Internal-only parser | "Make X stateful" consolidation |
| E (codex #19013) | Replace blanket-block with allow-list | Plugins start getting traffic | New traffic surface live | Feature addition |
| F (opencode #23844) | TUI sends workspace explicitly | Server still accepts param-less form | (Pending) server requires param | "Bug fix" |

Across all six: the PR title and body are framed as *cleanup*, *fix*, *recommended path*, or *feature*; the *contract change* is real but unannounced; **no exhibit ships with a deprecation window, a `CHANGELOG` breaking-change notice, or a version bump that signals the change**. Each PR — taken alone — is defensible. Each PR — taken as a setup for the next release — establishes the framing that lets the eventual default-flip be marked as non-breaking.

## The pattern's deceptive feature

Each PR is **diff-small**. Exhibit F is 6 lines. Exhibit B is presumably similar (the converter signature change is one parameter). Exhibit A's *flag plumbing* is small; only the framing is large. **The pattern is invisible at the line-count level and visible only at the framing level** — which is why a per-PR code review process catches none of these as breaking changes. The breaking-change signal is in the PR description, not in the diff.

## Cluster forecast

The next #30 exhibits to watch for in W18:

1. **litellm follow-up**: a release-notes entry recommending users set `route_all_chat_openai_to_responses=True`, followed (1-2 releases later) by a default-flip PR that cites the recommendation as prior warning.
2. **codex permissions train follow-up**: once the train (#19391–#19395, #19414) lands, expect a "make legacy policy file deprecated" PR that closes the migration window.
3. **codex #19424 follow-up**: a downstream consumer (likely an SDK) files an issue when their codegen breaks; the issue is closed as "use runtime defaults instead of schema defaults"; that close-comment becomes the de-facto contract change.
4. **opencode #23844 follow-up**: a server-side PR that makes the `workspace` query param required.

## Action items for the digest

1. **On the next #17 (feature-flags-as-load-bearing-defaults) refresh**, cite synthesis #30 as the upstream-side dual.
2. **Track each of the six exhibits** for a follow-up release-notes entry or default-flip PR; the moment one lands, that is a confirmed #30 → #17 transition and the next synthesis can name the cycle time.
3. **On the next #14 (published-spec-lies-registry-drift) refresh**, cite #19424 as the schema-export sibling of catalog drift — schemas can lie about defaults the same way catalogs lie about names.

## Open questions

1. Does any of the six projects have a CONTRIBUTING.md rule that requires breaking-change PRs to be flagged in the title / labels / changelog? (If yes, none of the six exhibits comply; if no, the projects are inviting #30 patterns.)
2. Of the six, how many have a `CHANGELOG.md` or release-notes file in the repo? (Spot check would tell us whether the framing-only contract change is a blind spot or a deliberate choice.)
3. Is there a static-analysis tool that flags PRs whose body uses words like "recommended path", "preferred", "default going forward" — i.e. that scans for #30-style framing? (Probably not; would be useful.)
