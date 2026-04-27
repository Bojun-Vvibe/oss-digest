# W17 synthesis #121 — same-day cross-repo three-duo convergent-independent-author fix multiplicity with embedded thinking-content trio across litellm / opencode / qwen-code / goose

**Seeded:** 2026-04-27 ADDENDUM-91
**Capture window:** 2026-04-27, all open queues observed at 13:24:30Z

## Phenomenon

On a single calendar day, **three independent convergent-fix duos** appear simultaneously across **three repos**, where in each duo two different authors **independently file fix-shaped PRs targeting the same underlying problem on different code surfaces of the same repo**. **Additionally**, one of the duos (qwen-code thinking-tags) extends to a **cross-repo trio** by gaining a fourth same-day PR on the same semantic surface in a different repo (block/goose). Total: **7 PRs across 4 repos all open simultaneously, all targeting variations of the same three problems**.

This is structurally distinct from synth #82 (duplicate-PR convergence by independent authors on micro-feature surface), which is **intra-repo and single-duo**. Synth #121 is **multi-duo, cross-repo, with a same-day same-surface escalation to trio in one of the strands**.

## The three duos + trio extension

### Duo A — litellm non-ASCII HTTP response header sanitization (httpx vs aiohttp)

| PR | head SHA | Author | Title |
|---|---|---|---|
| BerriAI/litellm #26598 | `45336b0179c7e24505c9035ebb0b70962dc70a82` | zyz23333 | fix(custom_httpx): preserve non-ascii response headers |
| BerriAI/litellm #26593 | `c1323e20d90e95acb7ab0693fc3df37da6324c5f` | weiguangli-io | fix(aiohttp): sanitize non-ASCII response headers before passing to httpx |

Both target the same underlying defect (non-ASCII bytes in upstream HTTP response headers crashing or corrupting the litellm pipeline) on **two different HTTP-client surfaces**. zyz23333 fixes the custom_httpx path; weiguangli-io fixes the aiohttp→httpx bridging path. Authors are independent. Both PRs are stable (unchanged headRefOid across two capture windows: Add.90 → Add.91).

### Duo B — opencode MCP tool surface visibility/safety

| PR | head SHA | Author | Title |
|---|---|---|---|
| anomalyco/opencode #24618 | `c11a6d474545129fff4cd312f1299cc311c53a6b` | leandrosnx | fix: guard against undefined MCP tool output causing output.split crash |
| anomalyco/opencode #24605 | `bd300d4d784b3cf6842cd3b6b378416aa23774f3` | rachadaccoumeh | fix: show MCP tool arguments in permission dialog |

Both target the **MCP tool runtime/UX boundary** — leandrosnx fixes a crash on undefined MCP tool output; rachadaccoumeh adds visibility to MCP tool arguments at the permission-prompt boundary. Authors are independent. **#24618 is fresh-this-window** (not in Add.90 snapshot); #24605 was already open. Convergence is **opening-into**, not stable simultaneous.

### Duo C — qwen-code OpenAI-compatible thinking-tag parsing

| PR | head SHA | Author | Title |
|---|---|---|---|
| QwenLM/qwen-code #3677 | `77c53e05a2f5d11eff5e08884ba88d6df782130a` | shenyankm | fix(openai): parse MiniMax thinking tags |
| QwenLM/qwen-code #3675 | `7ea2d3ae670534629abbc2bef4b41dcbc039b2b2` | YlLVTECH | Add support for `<think>` tags in OpenAI-compatible responses |

Both target **`<think>` tag parsing on the OpenAI-compatible response pathway**. shenyankm targets MiniMax-specific tag variants; YlLVTECH adds a more general `<think>` tag handler. Authors are independent. Both stable across the Add.90→Add.91 window.

### Trio extension — cross-repo thinking-content surface

The duo C surface gains a same-day same-semantic third PR in a **different repo**:

| PR | head SHA | Author | Repo | Title |
|---|---|---|---|---|
| block/goose #8857 | `95a5facfa1d731c163b41f2703a8abf8d3342adb` | jh-block | block/goose | Preserve thinking content for providers that require it |

This makes qwen-code #3677 + qwen-code #3675 + goose #8857 a **same-day cross-repo thinking-content trio**. All three are fix/feature-shaped PRs handling the same upstream-LLM concept (thinking content) on different agent toolkits' OpenAI-compatible response handlers.

## Why simultaneity matters

Across 4 repos and 7 PRs, the **simultaneity envelope** is the calendar day 2026-04-27 with all 7 PRs open at 13:24:30Z capture. The probabilistic baseline for three concurrent independent-author convergent duos in the same day across the 6-repo target set is **low** — over the W17 corpus to date, prior synths captured **single duos** (synth #82) or **single-repo same-author refile multiplicities** (synth #100) but not **multi-duo cross-repo same-day**.

The trio extension (Duo C → trio via goose) is additionally rare: the thinking-content concept crossing **repo boundaries** within the same day suggests an **upstream provider event** (e.g., a new MiniMax tag format, a Gemini reasoning-content spec change, or a community blog post documenting a defect) is driving multiple downstream repos to converge same-day. This is a **terminology-cascade signature** rather than coincidence.

## Defining properties (for future detection)

A future event qualifies as synth #121 iff ALL of:

1. **Three or more convergent-fix duos** appear on the same calendar day, each duo within a single repo, where each duo has:
   - Two PRs by **independent authors** (no overlap).
   - Both PRs targeting **the same underlying problem on different code surfaces** of the same repo (different files, different functions, different code paths — NOT two PRs editing the same file).
   - Both PRs filed/opened (not necessarily merged) within the same calendar day, and **simultaneously open** at the same capture instant.
2. The three duos span **at least three different repos** in the target set.
3. **At least one of the duos** extends to a **cross-repo trio or quartet** via a same-day same-semantic PR in a different target repo.
4. None of the four/seven PRs are **bot-generated**, **dependabot-mass-bumps**, or **same-author refiles** (this excludes synth #82, synth #98, synth #100 territory).

## Cross-references and discriminators

- **Synth #82** (duplicate PR convergence by independent authors on micro-feature surface): single-duo intra-repo. Synth #121 is **multi-duo cross-repo**. Synth #82 is the **building block**; synth #121 is the **emergent multiplicity** of synth #82 events.
- **Synth #100** (qwen-code dreamWB N=3 same-SHA closed-refile prelude): same-author intra-repo. Synth #121 explicitly **excludes same-author** by definition.
- **Synth #98** (bot-driven sub-10s N=3 stale PR mass close sweep): bot-mediated. Synth #121 explicitly **excludes bot-driven** convergence.
- **Synth #89** (cross-repo author handoff identical content refile with preceding open lead): same-content cross-repo. Synth #121 is **same-problem different-solution**, not same-content.
- **Synth #218** (Grammar inventory): the 7 PRs span Grammar A (`fix:`/`feat:`/`docs:`-prefixed branches) for opencode and litellm, while qwen-code uses Grammar A with parenthesized scope (`fix(openai):`). Per-repo grammar holds; cross-repo grammar diverges as expected.

## Predictive payload

If synth #121 is real and not a one-day artifact:
- **Discriminator window**: by 2026-04-28 capture, expect **at least one** of the seven PRs to merge AND **at least one** to close as duplicate/superseded. The pattern of *which* member of each duo wins (the surface-specific or the general fix) reveals repo-level review-preference. litellm with its 34h+ mainline dormancy is least likely to resolve fast. opencode with its 13:24:30Z fresh openings is most likely to resolve next-window.
- **Trio→quartet test**: if a fourth thinking-content PR appears in codex or gemini-cli or opencode by Add.95, the cross-repo terminology cascade hypothesis upgrades from "same-day three-repo trio" to "multi-day four-repo cascade" and seeds a follow-up synth.
- **Negative-prediction**: if all three duos collapse via single-merge-and-close-of-duplicate, the pattern is **healthy convergence resolution**; if duos persist past 48h with both halves open, the pattern signals **review-bottleneck cross-repo correlation** (synth-novel territory in itself).

## Cited PRs/SHAs (7 concrete + 1 baseline)

- litellm #26598 `45336b0179c7e24505c9035ebb0b70962dc70a82` (zyz23333)
- litellm #26593 `c1323e20d90e95acb7ab0693fc3df37da6324c5f` (weiguangli-io)
- anomalyco/opencode #24618 `c11a6d474545129fff4cd312f1299cc311c53a6b` (leandrosnx)
- anomalyco/opencode #24605 `bd300d4d784b3cf6842cd3b6b378416aa23774f3` (rachadaccoumeh)
- qwen-code #3677 `77c53e05a2f5d11eff5e08884ba88d6df782130a` (shenyankm)
- qwen-code #3675 `7ea2d3ae670534629abbc2bef4b41dcbc039b2b2` (YlLVTECH)
- block/goose #8857 `95a5facfa1d731c163b41f2703a8abf8d3342adb` (jh-block) — trio extension
- baseline cross-reference: anomalyco/opencode #24595 `a82448915ff4adb352241e0eb4aba241e9d3302f` (andocodes, "fix(opencode): don't override User-Agent set via provider options.headers") — **non-duo single-author MCP-adjacent fix**, cited as **counterexample** showing that not every same-day fix in a repo participates in a duo. The duo-multiplicity hypothesis requires explicit **paired-surface** evidence; isolated fixes don't count.
