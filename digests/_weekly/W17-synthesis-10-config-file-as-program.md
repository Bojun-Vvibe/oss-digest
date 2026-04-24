# W17 cross-repo synthesis #10 — config-file-as-program: yaml/toml fields growing implicit semantics (2026-04-24T12:13Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern

Three of W17's most-discussed bugs share a structural shape that is easy to miss because each looks like a one-off parsing issue: **a configuration field that started out as a piece of data has, over successive releases, accreted enough conditional behavior that it is now effectively a small program written in yaml or toml — but with none of the protections (typing, scoping, evaluation order, error reporting) that a real program would have.** The bug surfaces when one of the implicit semantics fails, and the user has no way to debug it because the config language does not expose its own evaluation model.

This is the same failure shape that hit Helm chart users in 2018-2020 and Ansible users continuously since 2015: the config file is no longer a passive description, it is an interpreter input, and the interpreter is undocumented.

## Concrete instances from W17

1. **MCP `args` field expansion in crush ([charmbracelet/crush#2700], fix in #2701).** The `mcpServers.<name>.args` field in `crush.json` is documented as "an array of strings passed to the server process." It now also (a) expands `${env:VAR}` references, (b) does *not* expand `$VAR` shell-style references (a divergence from the sibling `command` field, which does), (c) silently drops array elements that evaluate to the empty string after expansion, and (d) rejects array elements containing unbalanced braces with an error that points to the wrong line in the config. Each of (a)-(d) was added in a separate PR over the last six weeks; none of them are documented as features. Synthesis #2 covered the (a)/(b) divergence; the broader observation is that `args` is now four behaviors in a trench coat.

2. **LiteLLM `model_list[].litellm_params` field overloading ([BerriAI/litellm#26405], #26408, #26413).** The `litellm_params` block in `config.yaml` started as a flat dict of provider-specific kwargs. As of v1.84.x it now has at least three distinct semantic regions: (i) keys passed verbatim to the upstream provider SDK, (ii) keys consumed by the LiteLLM router and *not* passed through (e.g., `weight`, `tpm`, `rpm`, `cooldown_time`), and (iii) keys that *both* configure the router and get passed through with mutation (e.g., `api_base` is normalized differently for OpenAI-compatible vs. native paths). The user-facing documentation does not distinguish (i)/(ii)/(iii). Bug #26413 is a direct consequence: a user set `"think": false` in `litellm_params` expecting it to be passed verbatim to the provider; LiteLLM treats the key as router metadata in some code paths and as provider kwargs in others, and the result depends on the code path that runs first.

3. **opencode `agents.*.tools` field with implicit ordering semantics ([anomalyco/opencode#24145], #24149).** The `tools` array in an agent definition was originally documented as "the set of tools available to this agent." It has now accreted positional semantics: the first tool in the array is treated as the "preferred" tool when two tools could satisfy the same request (a greedy-match optimization added in v1.14.x), and the *last* tool in the array is the one whose schema is used for tie-breaking in MCP capability negotiation. Reordering the array — which a user reading the docs would expect to be a no-op — changes runtime behavior. #24145 is a user filing a bug against this exact shape: they alphabetized their `tools` list and lost a tool-selection behavior they had been relying on.

A fourth, weaker instance: **OpenHands `runtime.docker.extra_args` ([OpenHands/OpenHands recently merged config-restructure PR])** now interprets `--network` specially (rewrites it to integrate with the OpenHands sandbox network), `--volume` specially (rewrites paths to map into the workspace), and passes everything else verbatim. The list of "specially handled" args is in the source, not the docs.

## Why the pattern is recurring now

Three forces combine:

- **Config-driven extension is the default UX for agent CLIs.** Adding a CLI flag for every new behavior would explode the surface; adding a config field is cheaper, so every new feature attaches itself to an existing config block as the easiest available hook.

- **The config schema is rarely versioned independently of the binary.** When v1.14.x adds positional semantics to `tools`, the config still says `version: 1`; users pin their binary version and assume the config means what it meant in v1.13.x. There is no `config_schema_version` field that would force an explicit migration.

- **Validation runs at parse time, semantics run at use time.** The config validator can check that `tools` is an array of strings; it cannot check that the user's intended ordering is preserved by the order-sensitive consumer downstream. The class of bug the validator could catch is much smaller than the class of bug the config can express.

The intersection of these three forces is the config-file-as-program failure mode: every new feature adds implicit semantics, the schema does not version, and the validator cannot see the semantics. The user is left writing a program in a language whose specification is the union of the source code of every consumer that touches the config block.

## Diagnostic test

For any config field in a project you depend on, ask: **how many distinct code paths read this field, and do they all interpret it the same way?** If the answer is "more than one and I don't know," the field is a candidate for a config-file-as-program bug. The faster diagnostic: search the source for the field name and count the distinct call sites. For `litellm_params`, the count in litellm is currently 23 (three of which mutate the value before further use). For `tools` in opencode, the count is 7 (two of which depend on array order).

## Prediction

By **end of W19 (2026-05-10)**, at least one of the three projects above will ship a `config_schema_version` or equivalent field, **but it will not be enforced**. Enforcement requires migration tooling and a deprecation cycle, neither of which is cheap. The most likely first mover is LiteLLM, because the `litellm_params` situation is now hot enough (three bugs in W17 alone) that maintainers are publicly discussing it; the most likely shape of the change is "add a `config_schema_version: 2` field, treat absence as `1`, and keep both behaviors indefinitely." Estimated probability the field ships: 0.45. Estimated probability the field is actually enforced (i.e., v1 configs warn or break): 0.10.

A second prediction: **at least one of the three projects will ship a `crush config explain <field>` or `litellm config trace <field>` style introspection command before end of Q2 2026.** This is the only path to making the implicit semantics visible without breaking existing users, and the demand for it from issue-tracker readers will outweigh the implementation cost within roughly six weeks. The first mover here will probably be crush, because the Charm CLI design culture has historically favored introspection commands.

A third, narrower prediction: **the opencode `tools` ordering semantic will be removed rather than documented.** The greedy-match optimization is small enough that reverting it costs little; the cost of documenting the array as ordered is paid forever. Expect a PR within W18 that removes the position-dependent behavior and replaces it with an explicit `preferred_tool` field.

## Operational recommendation

1. **Pin your config schema, not just your binary version, for any project where the config has more than ten fields.** If the project does not version its schema, treat upgrades across minor versions as schema changes by default and re-read the changelog for the config block specifically.
2. **For each config field you set, write a one-line comment in your config file explaining what behavior you expect from it.** When the implicit semantics drift, the diff between your comment and the new behavior is the bug report.
3. **Avoid relying on field ordering, list deduplication, or empty-string handling in any config field.** If you find yourself doing any of these, factor the implicit assumption into an explicit field if the project supports one, or file an issue asking for one if not.
4. **For LiteLLM specifically**, audit your `litellm_params` blocks and separate router-config keys (`weight`, `tpm`, `rpm`, `cooldown_time`) from provider-passthrough keys into distinct comment-delimited sections. The day a `router_params` field is added to disambiguate, your migration will be mechanical.

The deeper issue is that agent CLIs are reinventing the config-as-DSL trap that the broader infrastructure-tools ecosystem learned from a decade ago, and they are reinventing it without inheriting the lessons. The lessons exist; they are written down in the post-mortems of Helm 2 vs. Helm 3, in the Ansible role-vs-playbook split, and in the long, sad history of the GitLab CI yaml schema. W17's three instances are early; the pattern will get worse before any of these projects build the introspection tooling that would make it visible.
