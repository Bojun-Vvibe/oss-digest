# W17 cross-repo synthesis #28 — admin / external-provider / LSP as the overscoped actor: four projects retroactively scope down a previously-implicit privilege in the same week (2026-04-24T19:05Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern in one sentence

**Coding-agent projects originally trusted three actors implicitly — the org admin, the external/sub-provider, and the LSP server — to operate at the full scope of the host process; on 2026-04-24 four projects (litellm, opencode, crush, codex) shipped or proposed PRs that retroactively *scope these actors down*: org admins lose UI-side ability to mint keys/teams/models, external providers get a session-scoped permission bridge, LSP-driven workspace edits get a workspace-root boundary check, and codex's permissions refactor train (#19391–#19395, #19414) is the underlying machinery that makes profile-backed scoping possible at all — six PRs across four repos in the same week, all admitting "this actor was getting more privilege than the policy intended."**

The actor was never explicitly granted full scope. They got it because *the absence of a check is itself a grant.* This week's fix-cluster is the codebase finally writing the check.

## Why this is *not* synthesis #22 (privilege-by-exclusion)

Synthesis #22 names a specific *implementation pattern*: a privileged code path is implemented as a *separate file* that doesn't inherit the standard pipeline (litellm pass-through bypassing post-call guardrails, etc.). The privilege escalation happens because the *code* lives outside the policy, not because the *actor* was over-trusted.

Synthesis #28 names an *actor model* problem: the actor's role label ("org admin," "external provider," "LSP server") was treated as a sufficient proxy for "trusted at host scope," and the policy was never written down anywhere except as the *absence of a deny*. The fix shape is different: #22 fixes route *the code through the pipeline*; #28 fixes route *the actor through a scoping bridge / role check / boundary*.

The two overlap on litellm #26442, which is both a privilege-by-exclusion symptom (the org-admin path didn't go through the rate-limit pipeline) and an overscoped-actor symptom (org-admin was implicitly trusted for write operations that the policy didn't actually allow). Cited in both places.

## Why this is *not* synthesis #17 (feature-flags-as-load-bearing-defaults)

Feature flags load-bearing means *defaults that nobody set are silently providing critical behavior*. Overscoped-actor means *roles that were defined in passing are silently providing critical privilege*. Adjacent — both are "policy-by-default-rather-than-by-policy" failures — but the remediation shape is different: #17 wants the default *changed* or made *explicit*; #28 wants the *actor itself* re-bound to a narrower scope.

## Why this is *not* synthesis #18 (version-skew-cli-vs-server)

#18 is a temporal/release-skew problem — two artifacts in the same system at incompatible versions. #28 is a static actor-model problem — the *current* code's policy gives this actor too much.

## The exhibits

### Exhibit A — litellm: org admins can no longer mint keys/teams/models from the UI

[BerriAI/litellm#26442] (17:23Z, OPEN PR) — *"feat: restrict org admins from creating keys, teams, models via UI settings."*

The org-admin role previously had blanket UI-write permission for keys, teams, and model definitions — three of the most consequential write surfaces on a litellm proxy. The PR introduces UI-side gates that prevent these creations. The notable architectural admission is in the title's word *"UI"*: **the underlying API still allows it**, only the UI is being scoped down. This is a UI-as-policy-layer change — the most fragile place to put policy, but also the only place the project can move quickly.

This exhibit is the cleanest single statement of the synthesis: an actor (org-admin) that was implicitly trusted for write operations is being re-scoped down, in the surface (UI) where the actor most commonly acts.

### Exhibit B — litellm: org admins were also bypassing per-team rate limits

[BerriAI/litellm#26438] (17:06Z, OPEN PR) — *"fix(jwt-auth): apply team TPM/RPM + attribution for admins using x-litellm-team-id."*

Companion to Exhibit A. Per-team TPM/RPM rate limits and per-team usage attribution were being silently skipped when the calling actor was an org admin — even when the admin explicitly passed `x-litellm-team-id` to act *as* a team. The admin path inherited "no rate limit, no attribution" from the implicit trust. The fix wires the team header into the rate-limit pipeline on the admin path.

Two PRs, **same week, same actor (org-admin), two different over-grants** — write surfaces (#26442) and rate-limit/attribution surfaces (#26438). When two independent fixes for the same actor's over-scope land in the same week, the actor model itself is being re-derived, not patched.

### Exhibit C — opencode: external providers get a session-scoped permission bridge

[anomalyco/opencode#24179] (15:12Z, OPEN PR) — *"feat: expose a session-scoped permission bridge for external providers."*

External providers (Anthropic via Bedrock, Google via Vertex, etc.) were previously inheriting *the session's* full permission scope — every tool, every read, every write. The PR adds a bridge that scopes the external provider's access *per-session and per-tool-set*, so a Bedrock-routed call cannot, e.g., trigger a filesystem write tool that the user only granted to the local Claude.

This is the *external-provider* member of the same actor-model fix cluster: the actor was implicitly trusted at host scope; now they get a narrower scope through an explicit bridge.

### Exhibit D — opencode: bedrock provider attempted a model allowlist (closed)

[anomalyco/opencode#24194] (17:51Z, CLOSED) — *"restrict amazon-bedrock provider to curated model allowlist."*

Closed without merge, but the *direction* is the synthesis-#28 direction: scope the bedrock provider's accessible models down from "every model the AWS account can reach" to a curated allowlist. The closure suggests the *fix shape* (allowlist in opencode) was wrong — likely because the right scope is at the bridge layer (Exhibit C) rather than at the provider config — but the underlying need is the same overscoped-actor problem. Watch for a follow-up PR that uses #24179's bridge.

### Exhibit E — crush: LSP-driven edits get a workspace boundary

[charmbracelet/crush#2699] (10:26Z, OPEN PR) — *"fix(lsp): enforce workspace boundary for workspace edits."*

LSP servers can issue `workspace/applyEdit` commands. Before this PR, the host (crush) honored those edits *anywhere on the filesystem the host process could write*. After this PR, edits outside the project workspace root are rejected. The *LSP server* — a third-party process — was implicitly trusted at host filesystem scope; the PR re-scopes it to the workspace root.

This is the *LSP-server* member of the cluster. Same actor-model gap as Exhibits A–D: a role was implicitly trusted at host scope; the PR adds the missing boundary.

Note that **crush has another LSP-trust PR open** (#2694, "fix(skills): deduplicate skills discovered via symlinked directories") which is in the same trust-the-filesystem-discovery-too-much family — symlinked skills directories were getting double-indexed and trusted at face value. Adjacent exhibit, lower-grade.

### Exhibit F — codex: the permissions refactor train is the underlying machinery

[openai/codex#19391, #19392, #19393, #19394, #19395, #19414] — *"permissions: make runtime config profile-backed / derive compatibility policies from profiles / migrate approval and sandbox consumers to profiles / remove core legacy policy round trips / finish profile-backed app surfaces / make legacy profile conversion cwd-free."*

Six open PRs forming a single train. None merged through 18:55Z 2026-04-24, despite at least two rebase cycles today. The train's collective intent is **to replace codex's currently-implicit, legacy-policy-derived permission resolution with explicit profile-backed scoping** — exactly the kind of machinery that makes Exhibits A–E *expressible at all* in a coding-agent codebase.

The train belongs to this synthesis as the *infrastructure layer* of the same fix-cluster: litellm/opencode/crush are doing the per-actor scoping work in their own codebases, codex is rebuilding the permission-resolution machinery underneath. **That none of the codex train has landed in two days is a release-risk signal in its own right** — it means the permission-resolution layer is currently in a half-migrated state where some surfaces are profile-backed and some are not.

#19410 ("Remove js_repl feature") is filed independently but touches the same surface — removing a tool whose privilege was implicit and whose use was rare enough that nobody had explicitly de-scoped it.

## Cross-repo PR census (six exhibits, four repos)

| Repo | PR/Issue | Actor being re-scoped | Surface |
|---|---|---|---|
| litellm | #26442 | org-admin | UI write (keys/teams/models) |
| litellm | #26438 | org-admin | rate-limit / attribution |
| opencode | #24179 | external provider | session permission scope |
| opencode | #24194 (closed) | bedrock provider | model allowlist |
| crush | #2699 | LSP server | workspace edit boundary |
| crush | #2694 | filesystem (skill discovery) | symlink dedup |
| codex | #19391–#19395, #19414 | host policy machinery | profile-backed permissions |

That's **eleven PRs/issues across four projects** all working the same actor-model gap in the same week.

## Why now

Two things changed in W17 that made this cluster legible:

1. **Sub-agent / multi-actor surfaces shipped widely** (crush sub-agents per #2690, opencode background subagents per #24174, codex multi-thread spawn per #19360). The moment a project has multiple agents acting concurrently, the *implicit-trust-at-host-scope* model breaks: which agent's permissions does this write inherit? The actor model has to become explicit because there are now *more actors*.
2. **External-provider routing matured** (litellm pass-through endpoints per #26262, opencode bedrock per #24193/#24194, codex Bedrock apply_patch per #19416). When external providers are first-class call paths, the question "what scope does this provider's response get?" becomes urgent in a way it isn't when there's only one provider.

The fix cluster is the codebase catching up to the actor topology of its own newer features.

## Operational implication

If you operate a coding-agent stack:

- **Org-admin tokens on litellm proxies are the most over-scoped credential in the cluster.** Until #26442 lands, prefer operating through team tokens.
- **External-provider routes through opencode forks have full session scope** until #24179 lands. Treat Bedrock/Vertex calls as if they could touch any tool the local agent could.
- **LSP servers running under crush can write outside your workspace** until #2699 lands. If you connect an untrusted LSP, this matters.
- **codex's permission machinery is in a half-migrated state** for as long as the #19391–#19414 train sits unlanded. Some surfaces are profile-backed, some are still legacy-policy-resolved. Don't trust either's claims about effective scope until the train lands.

## Predictions for next 48h

1. **litellm #26442 lands first** — it is the most-scoped, least-controversial of the cluster.
2. **opencode #24179 attracts a follow-up PR** that re-tries Exhibit D's bedrock allowlist at the bridge layer rather than the provider config layer.
3. **At least one PR from the codex permissions train (#19391–#19414) merges** — likely #19391 (the foundation PR), without which the rest cannot land — but the merge will *not* close the cluster; the others will need follow-up work.
4. **A new exhibit appears for the MCP-server actor** — MCP servers are the obvious next overscoped-actor (third-party process, host-scope filesystem, no per-server scope check in any of the four projects). Watch for an MCP-scoping PR by W17 close.

## See also

- Synthesis #22 (privilege-by-exclusion) — adjacent and partially overlapping; #22 names code-path-level privilege escalation, #28 names actor-model-level privilege over-grant.
- Synthesis #17 (feature-flags-as-load-bearing-defaults) — adjacent; #17 is policy-by-default for *behavior*, #28 is policy-by-default for *privilege*.
- Synthesis #20 (patch-pr-graveyard) — relevant because the codex permissions train may itself become a graveyard exhibit if it does not land within W17.
