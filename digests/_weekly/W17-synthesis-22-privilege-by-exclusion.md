# W17 cross-repo synthesis #22 — privilege-by-exclusion: when "admin" is defined as everything-minus-blocklist (2026-04-24T17:14Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._

## The pattern in one sentence

**A privileged role is implemented as "everything not explicitly denied" rather than "explicitly granted scopes," and every new feature added to the surface silently expands the privilege without anyone naming the expansion.**

The afternoon of 2026-04-24 produced three independent litellm PRs against the proxy auth surface, each closing a *different corner* of the same matrix: org admins able to do UI-side operations they should not (#26442), proxy-admins bypassing per-team rate limits when impersonating (#26438), and JWTs without `team_id` falling through to a single-team fallback that was supposed to be a safety net but became a default (#26418). Combined with codex's permissions-rank inversion (#19384) and the opencode silent-model-downgrade bug (#24186), the day produces enough exhibits to name privilege-by-exclusion as its own pattern, distinct from the W17 ACL/presentation drift cluster (synthesis #11) and from the load-bearing-default cluster (synthesis #17).

## Why this is *not* synthesis #11 or synthesis #17

- **Not ACL/presentation drift (#11)**: that pattern was about the *display* of permissions diverging from the *enforcement*. The pattern here is about the *enforcement itself* being defined too widely — there is no "display" half of the contract being violated, because the system genuinely allows the action.
- **Not load-bearing default (#17)**: load-bearing defaults are about a *value* (a flag, a config) silently controlling behavior. This pattern is about a *role* — a structural identity in the auth model — silently controlling which operations are reachable. Roles change less often than configs, but when they expand, the expansion is invisible because no value changed.

Privilege-by-exclusion is the *role-shape* of the same family of bugs, and the litellm proxy is now the cleanest exhibit because three PRs in one day name three different ways the same `proxy_admin` role allowed something it should not have.

## The exhibits

### Exhibit A — litellm `proxy_admin` bypasses team-level rate limits

[BerriAI/litellm#26438] — *"fix(jwt-auth): apply team TPM/RPM + attribution for admins using x-litellm-team-id."*

The proxy supports an `x-litellm-team-id` header that lets a `proxy_admin` act on behalf of a specific team — the canonical "admin impersonates user" pattern. Until this PR, the rate-limit check (TPM / tokens-per-minute, RPM / requests-per-minute) was wired to the *acting identity*, not the *impersonated identity*. So a `proxy_admin` impersonating Team A would have their requests counted against the admin's own (effectively unlimited) limits, not against Team A's limits.

The user-visible effect: a proxy_admin running automation "on behalf of" a team would silently exceed the team's TPM cap, while the team's own users would still hit the cap and 429. The team's bill would reflect the admin's traffic, but the team's *limits* would not. This is privilege-by-exclusion in its purest form: the admin role was defined as "all the user roles, minus rate limiting" without anyone ever writing down that the rate-limiting exclusion was intentional. It was not — it was just what fell out of "admin == bypass these checks."

The PR also adds *attribution* (the audit log will name the team being acted on, not just the admin acting). That is the "make the privilege visible" half of the fix; the rate-limit half is the "narrow the privilege" half. Both are needed because either alone leaves a gap (attribution-only without rate-limiting still lets the admin spend the team's budget; rate-limiting-only without attribution still lets the admin do it untracked).

### Exhibit B — litellm org admins can create keys/teams/models from the UI without scope checks

[BerriAI/litellm#26442] — *"feat: restrict org admins from creating keys, teams, models via UI settings."*

Until this PR, an `org_admin` (the role one rung below `proxy_admin`) could open the UI Settings panel and create new API keys, new teams, and new model registrations *without* the same scope checks that the corresponding API endpoints enforce. The UI was wired straight to the underlying mutation, with the assumption that "if you can see this panel, you are allowed to use it" — which is the textbook UI-as-trust-boundary mistake.

What makes this exhibit interesting is the *shape* of the fix: it does not add UI-level checks (which would be the synthesis-#11 shape — make the presentation match the enforcement). It restricts the *role itself* — `org_admin` is no longer in the allow-list for those mutations. The fix is to narrow the role, not to add a guard at the UI seam. That is the right shape for privilege-by-exclusion, because adding a guard at the UI seam would just push the same bug to the next surface that exposes the same role.

This is the third PR of the day against the same auth surface. It is also a reminder that "org admin" was historically defined as "almost-proxy-admin minus a few things" — which is exactly the exclusion definition that the pattern names.

### Exhibit C — litellm JWT without `team_id` falls back to a single-team default

[BerriAI/litellm#26418] — *"fix(proxy): single-team DB fallback when JWT has no team_id."*

This one is the *opposite* direction of #26438 and worth examining for that reason. The bug: when a JWT arrives without a `team_id` claim, the proxy was throwing an error. The fix: fall back to a database lookup, and if exactly one team is in scope for the user, treat that as the implicit `team_id`.

This is privilege-by-exclusion in the *constructive* direction. Instead of "the admin can do everything not denied," it is "the JWT can act on whatever team the system can guess for it." The fix is reasonable when "exactly one team is in scope" is a true safety property — but the bug it closes is a JWT-shape bug, and the fix changes the *contract* for JWTs (now a JWT can authenticate without naming the team). The next bug in this lineage will be a JWT that *should* have named a team and did not, where the fallback successfully picks the wrong team because "exactly one team in scope" turns out to be a weaker guard than the author thought (e.g., what about service accounts that are members of multiple orgs?).

This pairs with #26438 because together they name the two corners of the JWT-scope matrix: the admin can act *across* teams without checks (#26438), and the user can act *on a team* without naming it (#26418). The auth surface had bugs at both diagonal corners of the same 2x2.

### Exhibit D — codex `full access` permissions ranked lower than `auto-review`

[openai/codex#19384] — *"full access permissions lower than auto-review."*

The codex permissions UI presents a *ranked* list of permission profiles, where higher rank corresponds to more capability. The bug: the "full access" profile is ranked *below* the "auto-review" profile, which means the UI presents auto-review as "stronger" than full-access — which is wrong both as a UX claim and as a security claim (auto-review is a strict subset of full-access).

This is privilege-by-exclusion at the *presentation* layer: the rank ordering was derived from some implicit "more restrictive == more secure == higher rank" heuristic that breaks the moment a profile (auto-review) explicitly *adds* an unrestricted capability (auto-approval) that another more-restrictive profile lacks. The exclusion logic was unnamed; when a profile broke the implicit ordering, the UI silently mis-ranked it.

The codex permissions refactor train (#19391–#19395, catalogued in synthesis #21) is the structural fix for *all* of these by collapsing runtime config and profile into a single source of truth. Notably, that train does not specifically name #19384 — the rank-ordering bug is a *consequence* of having two representations, not a direct target. If the train lands and #19384 stays open, the rank-ordering is its own bug.

### Exhibit E — opencode silent backend Zen-model downgrade

[anomalyco/opencode#24186] — *"[BUG] backend Zen models downgraded without notification."*

The opencode backend silently downgrades Zen-routed model requests to a cheaper variant under some load condition (the issue body suggests cost-control), and the client receives no notification. The user has selected a model; the backend has substituted a different one; the UI continues to show the originally-selected model.

This is privilege-by-exclusion at the *substitution* layer. The backend has the privilege to substitute models; nobody named the requirement that the substitution must be reported. The privilege "swap models for cost reasons" was implicitly granted by the absence of any check that prohibits it. Same shape as #26442 (UI-side scope leak) — the system has a privilege that was never explicitly granted, just never explicitly denied.

Pairs with [anomalyco/opencode#24189] (the DeepSeek cache-usage telemetry gap noted in the addendum and synthesis #21): both are about *the user being unable to verify what the backend actually did*. #24189 is observability missing for a known feature; #24186 is observability missing for a *substitution* the user did not ask for.

### Exhibit F — codex subagent TOML config silently using defaults on Windows

[openai/codex#19399] — *"Subagent-specific TOML config no longer works on Codex Windows; named agents spawn with default config."*

Sub-pattern of #24186 at the agent-config layer. The user has written a subagent-specific TOML config; on Windows, the named agent spawns with the *default* config and the user-specified TOML is silently ignored. The system has the privilege to "fall back to defaults if the named-agent config is unloadable" — which is reasonable as an error-recovery posture, but here it is engaging on Windows even when the config exists and is readable, because the path resolution is broken on that platform.

The fix space is again "name what the privilege is for and check the precondition before exercising it." The fallback-to-defaults privilege exists for a reason (a corrupt config should not block the agent from running); it should not be reachable when the config is fine and the bug is path resolution.

## The diagnostic shape

A bug fits the privilege-by-exclusion pattern when it has all four of:

1. **A role or system component is empowered to take an action that affects another principal** (a team's quota, a user's session, a model selection, a config choice).
2. **No explicit grant for that specific action exists in the role's documented capabilities** — the action is reachable because nothing prevents it, not because anything authorizes it.
3. **The affected principal has no way to detect the action from their side** — the audit log does not name them, the UI does not annotate the substitution, the rate-limit counter does not move.
4. **The fix is to narrow the role, not to add a check at the surface where the action was discovered** — adding a check at the discovery surface (e.g., a UI guard) just shifts the bug to the next surface that exposes the same role.

When all four are present, the fix shape is the same as the litellm trio: rewrite the role definition to enumerate what it *can* do, and explicitly deny everything else by default. That is the inverse of the original implementation, where the role was "almost-everything minus a small blocklist."

## Why the pattern is endemic in this kind of system

The four projects in this digest all expose a *programmable proxy* between the user and one or more model providers. Programmable proxies grow privileged roles (admin, operator, automation account) because their value proposition is "you can do anything to your traffic that you could do directly to the provider, plus more." That value proposition is structurally a *no-blocklist* design — the admin role is defined to be permissive precisely because the product's selling point is "you are not constrained by the provider's defaults."

The natural failure mode is that every new *user* feature added to the proxy (rate limiting, team budgets, JWT scopes, audit logging) needs a corresponding *admin* exclusion clause to be deliberate, not implicit. The clauses are usually implicit. So every user feature that ships against an existing admin role accidentally expands the admin's privilege by the negative-space carved out for users.

litellm's three PRs in one day is what happens when a release cycle finally ships several user-features and someone audits the admin side: every audit produces a separate PR, because the admin's expansions were each independent. There is no single "admin scope" change that fixes all three; there are three separate "we forgot to exclude admin from this check" patches.

## Distinct from synthesis #11 (ACL/presentation drift)

Synthesis #11 was about: the system *enforces* X, the *display* shows Y, and the user reasons about Y. The fix is to bring the display in line with the enforcement.

This synthesis is about: the system *enforces* "admin can do anything not blocked," the user reasons about "admin can do these specific things," and the *enforcement itself* is the surface that is too wide. The fix is not to bring the display in line with the enforcement — the display is already correct ("admin"). The fix is to redefine what "admin" enforces.

The two patterns can co-occur (a UI says "team A can spend $X" while the enforcement applies the limit only to team A's *non-admin* members — that is both a display bug and a privilege-exclusion bug), but the fix space is different. Synthesis-#11 fixes go in the presentation layer; synthesis-#22 fixes go in the role/policy layer.

## Distinct from synthesis #17 (load-bearing defaults)

Synthesis #17 named the case where a *value* default silently controls behavior (the litellm `disable_db_writes` flag was the canonical case). Privilege-by-exclusion is about *the absence of a check* silently controlling behavior — there is no value to flip, only a check that was never written.

In practice, a privilege-by-exclusion bug often gets its first fix as a *new flag* (a `restrict_admin_team_writes` boolean, etc.) — which then becomes the next synthesis-#17 exhibit because the new flag's default value silently controls whether the privilege exists. The two patterns are sequential phases of the same maintenance arc: first you discover the privilege is too wide (synthesis #22), then you flag-gate the narrowing (synthesis #17), then someone changes the flag default and the cycle restarts.

litellm #26442's fix shape is notably *not* a flag-gate — it is a direct restriction of the role. That is the durable shape; the flag-gate would have been the easy shape and the next-bug shape.

## Watch list for next week (W18)

- Whether litellm #26438, #26442, and #26418 all merge in the same release. If they do, there is a deliberate scope-tightening pass underway and we should expect a fourth PR (the one auditing what is left). If only one or two merge, the auth surface stays partially-narrowed and the pattern will keep producing exhibits.
- Whether codex #19384 (full-access ranked below auto-review) is closed by the permissions refactor train (#19391–#19395) or remains a separate open issue. If it remains open after the train merges, the train was not a complete fix and the rank-ordering needs its own PR.
- Whether opencode (anomalyco) #24186 (silent Zen-model downgrade) gets a notification path or a refusal path. Notification path = "we substituted, here is the receipt." Refusal path = "we cannot serve your selected model right now, error." Both are valid; silently substituting is not.
- Whether codex #19399 (Windows subagent TOML default-fallback) gets fixed at the path-resolution layer or at the fallback-precondition layer. Path-resolution-only fix leaves the privilege-by-exclusion shape intact for the next platform where path resolution breaks.
- Whether any of the four projects ships a documented "admin role audit" — i.e., a checklist of what the admin role *can* do, in positive terms. Currently none of them have one (or none are linked from the auth docs). The presence of one would predict fewer instances of this pattern next week.

## Reference

Issues / PRs cited:
- BerriAI/litellm: #26438, #26442, #26418, #26434, #26441
- openai/codex: #19384, #19391, #19392, #19393, #19394, #19395, #19399, #19256, #19362, #19363
- anomalyco/opencode: #24186, #24189
- charmbracelet/crush: (no in-window exhibit; crush has a much narrower auth surface than the proxy/CLI products and does not reproduce this pattern in W17 — the absence reinforces that the pattern is endemic to *programmable proxies* specifically)

Cross-repo coverage: 3 of 4 active repos (litellm, codex, opencode); 17 distinct issue/PR numbers cited.
