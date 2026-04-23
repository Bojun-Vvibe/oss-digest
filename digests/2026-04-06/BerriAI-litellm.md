# BerriAI/litellm — 2026-04-06

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-05T23:59:59.000Z → 2026-04-06T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline change is a new **multi-window budget system** for API keys and teams (#24883/#25109): keys/teams can now hold multiple concurrent `BudgetLimitEntry` windows instead of a single rolling budget, a notable schema and proxy-behavior change worth reading before upgrading. A companion type fix closes an unclosed paren on the `budget_limits` field in `TeamBase` (commit `cf9fdff`), and the Prisma schemas are auto-synced (`a65a942`), confirming this is a live DB-touching feature.

Close behind, **per-member model scoping for teams** lands via #24950: teams gain `default_team_member_models` and individual members can now be restricted to a subset of the team's models. This expands the RBAC surface and likely affects anyone using team-based key provisioning. The same commit also slips in a Bedrock cost-lookup fix that strips `[1m]`/`[200k]` context-window suffixes before pricing.

Operational/correctness fixes worth noting:
- **Stale managed-object cleanup is now batched** (#25227) via a new `STALE_OBJECT_CLEANUP_BATCH_SIZE` (default 1000) to prevent a 300K-row `UPDATE` storm — relevant for large deployments seeing DB spikes.
- **UI login redirect loop** behind reverse proxies that inject `HttpOnly` on cookies is fixed (#23532) — check this if you run LiteLLM behind nginx/ingress.
- `/v1/messages/count_tokens` now returns the **actual upstream status code** instead of masking errors (#21352).

Infra/DX cleanup: the redundant `test-litellm-matrix.yml` workflow is removed in favor of the semantic unit-test workflow (#25251), the consistently-flaky `proxy_e2e_azure_batches_tests` workflow is dropped (#25247), and Black formatting is now enforced in contributor docs (#25135). Security blog posts gained cosign verification instructions (#25122), matching the signed `v1.82.3.dev.6` pre-release cut today.

One in-flight item without a PR number: `ea4a61a` adds `applyGuardrail` to the inline IAM policy — likely a precursor to upcoming Bedrock Guardrails changes.

No new issues, open PRs, or stable releases in the window.

## Releases

- **[v1.82.3.dev.6](https://github.com/BerriAI/litellm/releases/tag/v1.82.3.dev.6)** — v1.82.3.dev.6 _by @github-actions[bot] at 2026-04-06T18:54:11Z_
  > ## Verify Docker Image Signature
  > 
  > All LiteLLM Docker images are signed with [cosign](https://docs.sigstore.dev/cosign/overview/). To verify the integrity of an image before deploying:
  > 
  > ```bash
  > cosign verify \
  >   --key https://raw.githubusercontent.com/BerriAI/litellm/v1.82.3.dev.6/cosign.pub \
  >   ghcr.io/berriai/litellm:v1.82.3.dev.6
  > ```
  > 
  > Expected output:
  > 
  > ```
  > The following checks were performed on each of these signatures:
  >   - The cosign claims were validated
  >   - The signatures were verified agai…


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`d132b1b`](https://github.com/BerriAI/litellm/commit/d132b1bf51cb7c3e6932bae9984216d4f622f945) [Infra] Remove Redundant Matrix Unit Test Workflow (#25251) — _@yuneng-berri_
- [`d2d99aa`](https://github.com/BerriAI/litellm/commit/d2d99aa082f994abf44ef721a87a308ac8105355) [Docs] Enforce Black Formatting in Contributor Docs (#25135) — _@yuneng-berri_
- [`a60e19a`](https://github.com/BerriAI/litellm/commit/a60e19aeb8c0c0edfd10c611cb74605571a2020d) Remove flaky proxy_e2e_azure_batches_tests CI workflow (#25247) — _@yuneng-berri_
- [`cf9fdff`](https://github.com/BerriAI/litellm/commit/cf9fdff72e752debc2b003af9f343c02c05e83bb) fix(types): close unclosed paren on budget_limits field in TeamBase — _@ishaan-berri_
- [`a65a942`](https://github.com/BerriAI/litellm/commit/a65a942fa811e141433d98094e6ed67d3e3b99a1) chore: sync schema.prisma copies from root — _@github-actions[bot]_
- [`0afffe4`](https://github.com/BerriAI/litellm/commit/0afffe436686da1f89a5b83b07bb14e1bf0a5bb7) feat: multiple concurrent budget windows per API key and team (#24883) (#25109) — _@ishaan-berri_
- [`ea4a61a`](https://github.com/BerriAI/litellm/commit/ea4a61a13e09b3b6db0204a4d3a701879207af97) added applyguardrail to inline iam — _@shivamrawat1_
- [`414d396`](https://github.com/BerriAI/litellm/commit/414d3966bfe212d5d2376c3b6ae1c3adbb0f67ef) feat(teams): per-member model scope + team default_team_member_models (#24950) — _@ishaan-berri_
- [`8b0fadf`](https://github.com/BerriAI/litellm/commit/8b0fadf99c95d3f3dd51a957b3716af9aff7585a) [bug-fix]return actual status code - /v1/messages/count_tokens endpoint (#21352) — _@otaviofbrito_
- [`c2f486a`](https://github.com/BerriAI/litellm/commit/c2f486acfe09051f69a7d56ddaabb5ce1d330829) fix: batch-limit stale managed object cleanup to prevent 300K row UPDATE (#25227) — _@ishaan-berri_
- [`f233520`](https://github.com/BerriAI/litellm/commit/f233520c44061a07e3c43ba34ba6f79c73cc0bae) fix(ui): resolve login redirect loop when reverse proxy adds HttpOnly to cookies (#23532) — _@jaxhend_
- [`39c1042`](https://github.com/BerriAI/litellm/commit/39c1042258b7318dc2fefc2ce392f913a9257806) [Docs] Add cosign Docker image verification steps to security blog posts (#25122) — _@yuneng-berri_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
