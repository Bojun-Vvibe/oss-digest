# W17-synth-723 — CROSS_CARRIER_THEME_CONVERGENCE_NO_CITATION: ACP-protocol and skills-loader surfaces attract independent parallel PR proposals from carrier-disjoint authors (gemini-cli #26554 sripasg, goose #9040/#9045/#9046 kalvinnchau, codex #21287 pakrym-oai, qwen-code #3862 Hades1123) with zero cross-author awareness — distinct from synth-717's reciprocal-citation closed loop and synth-79's defensive payload convergence

**Anchor**: ADDENDUM-374 NO 6 (CROSS_CARRIER_THEME_CONVERGENCE_NO_CITATION sub-class introduction); contrasts against W17-synth-717 (reciprocal-citation Z′_bot ↔ K_human pair on litellm Prometheus substrate) and W17-synth-79 (cross-repo defensive payload-shape convergence triggered by a known bug class).

## What synth-717 and synth-79 established

**synth-717** described a closed-loop where one author (litellm bot oss-agent-shin) opens a fix and a second author (ishaan-berri) opens a follow-up that **explicitly cites the bot's PR number in its title** — the citation is the coordination signal, and both ends merge. The substrate (Prometheus metric cardinality) is **single-carrier** (litellm-only), and the coordination is **explicit** (PR title contains the cited PR number).

**synth-79** described a different mechanism: when a payload-shape bug surfaces in one carrier, defensive-shape changes appear in **other** carriers within a short window, even though no PR cites another. The trigger is a **shared bug class** (e.g. malformed JSON tool-call payloads from a vendor endpoint), and the coordination is **environmental** (all carriers consume the same upstream).

Both mechanisms predict cross-PR alignment, but neither predicts what we now observe in Add.374.

## What ADDENDUM-374 NO 6 reveals

Within the W18-day-1 ~8h window, **6 PRs across 4 carriers** all touch the **ACP-protocol surface or the built-in-skills loader surface**, with no cross-author citation and no shared upstream bug:

| Carrier | PR | author | theme |
|---|---|---|---|
| gemini-cli | #26554 | sripasg | acp tool explanation: thought-stream → tool-call content |
| goose | #9040 | kalvinnchau | acp agent support to sources crud |
| goose | #9045 | kalvinnchau | acp expose built-in skills via sources list |
| goose | #9046 | kalvinnchau | goose2 UI for built-in skills |
| codex | #21287 | pakrym-oai | move skills watcher to app-server |
| qwen-code | #3862 | Hades1123 | nested skill directories |

The authors are **carrier-disjoint**: sripasg only in gemini-cli, kalvinnchau only in goose, pakrym-oai only in codex, Hades1123 only in qwen-code. None of the PR titles cite another carrier's work. The two surfaces (ACP protocol and skills loader) are **architecturally adjacent** (ACP exposes skills as a resource type; the skills loader is what populates that resource) but conceptually distinct.

## Mechanism: maturity inflection vs. bug-class trigger

synth-79's mechanism requires a **shared upstream bug** as the trigger. Inspecting the 6 ACP/skills PRs:
- #26554 sripasg: refactor (move existing field, no bug claim in title)
- #9040 kalvinnchau: feature add (CRUD on agent sources)
- #9045 kalvinnchau: feature add (expose existing data via new path)
- #9046 kalvinnchau: feature add (UI surface for new data)
- #21287 pakrym-oai: refactor (relocate watcher to a different binary)
- #3862 Hades1123: feature add (nested directory support)

**Zero of 6 are bug fixes**. All are refactors or feature additions. This **rules out** the synth-79 mechanism (no shared bug class to defend against).

What remains as the explanation: the ACP protocol and the built-in-skills concept have reached a **maturity inflection point** where multiple ecosystem participants — independently, working from their own carrier's pain points — identify the same gaps. The convergence is **structurally determined** by the protocol's own design surface area, not by coordination or shared trigger.

## Distinguishing from synth-717's closed-loop reciprocal pattern

synth-717 required all of:
- single carrier (litellm)
- explicit citation in PR title (`27268 →` etc.)
- bot-anchor + human-citing-bot pair
- single substrate (Prometheus metric cardinality)
- both ends merge

synth-723's pattern requires none of these:
- multi-carrier (4 distinct: gemini-cli, goose, codex, qwen-code)
- zero explicit citations
- all-human authors (no bots in this convergence)
- two adjacent substrates (ACP protocol + skills loader), not one
- merge state mixed and slow (none merged at observation time; some frozen, some idle, some active)

The two patterns are **non-overlapping mechanism classes** and the W18-day-1 sample contains exemplars of both running concurrently in the same 8h window — strong evidence that cross-carrier coordination is **not a single mechanism** but a family of distinct ones with distinct preconditions.

## Predicted lifecycle of theme-convergence

Hypothesis: theme-convergence PRs follow this lifecycle:
1. **Convergent open phase** (T+0 to T+12h): N independent PRs accumulate on the same surface from carrier-disjoint authors.
2. **Cross-carrier observation phase** (T+12h to T+72h): if any of the PRs becomes prominent (merges first, has high commentary, or is referenced in a release note), other authors **may begin citing it** — converting CROSS_CARRIER_THEME_CONVERGENCE_NO_CITATION into a partial-citation regime.
3. **Standardization phase** (T+72h+): the surface either stabilizes around one carrier's design (others adopt) OR forks into divergent designs (each carrier ships its own).

The Add.374 sample is in phase 1; the next 12–24h of digest data should show whether any of the 6 PRs becomes an explicit cite-target for a 7th PR.

## Specific PRs cited (≥10 required)

**ACP/skills convergence cluster**: #26554, #9040, #9045, #9046, #21287, #3862 (6 PRs)

**Synth-717 reciprocal-citation reference (contrast)**: #27268, #27271 (2 PRs)

**Synth-79 defensive-payload reference (contrast, recent W18 instance)**: #25971 ctharvey (`fix(opencode): recover malformed GLM/NVIDIA tool calls`) — single carrier instance, no cross-carrier replication observed in current window (1 PR)

**Carrier-context PRs (other ACP/skills-adjacent activity that did NOT join convergence)**:
- litellm: no ACP/skills PRs in W18-day-1 window — substrate is provider-routing, not agent-protocol
- crush: #2800 BrunoKrugel `feat(tools): create an allow list for MCP tools` — adjacent (tool/skill governance) but **MCP not ACP**, so excluded from current convergence (1 PR)
- opencode: #25962 Brendonovich desktop utilityProcess — adjacent architectural refactor on the desktop/server boundary, but **not skills/ACP** specifically (1 PR)

**Total unique PRs cited: 11**

## Predict (carry forward)

- **T+1 tick (Add.375)**: at least one of {#21287, #26554, #9040, #9045, #9046, #3862} merges, OR none merge and all stay in the convergent-open phase; if a 7th ACP/skills PR appears in litellm or crush within 3 ticks, the convergence is **expanding** (predicting standardization); if none appears in 6 ticks, the convergence is **plateauing** (predicting fork).
- **T+12–24h**: first explicit cross-carrier citation appears (likely a kalvinnchau PR title referencing gemini-cli #26554's tool-explanation routing pattern, OR a codex PR referencing kalvinnchau's sources-list structure), marking phase-1 → phase-2 transition.
- **T+72h**: surface stabilizes around either kalvinnchau's goose-side ACP design (most-prolific contributor wins) OR sripasg's gemini-cli-side pattern (first to merge wins).
