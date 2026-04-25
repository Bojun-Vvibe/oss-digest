# W17 synthesis #60 — Flaky-test-PR-bimodality-fast-abandon-vs-slow-stabilize: within a single 30-minute micro-window, two repos in the cohort produced flaky-test PRs with diametrically opposite outcomes (one self-closed in 12 minutes with no merge; the other merged after a 6h33m test-matrix split), revealing that the cohort's response to test-suite flakiness is bimodal at the repo-culture level rather than at the individual-PR level (2026-04-25T04:42Z)

**Window observed:** 2026-04-25 04:16Z (anchor opens) → 04:42Z (terminal states observed) — 26-minute micro-window.

**Anchoring PR pair (the bimodal exhibit):**

- **Fast-abandon arm — [anomalyco/opencode#24252]** — *"fix: flaky shell test"* (`rekram1-node`, OPENED **2026-04-25T04:16:32Z**, CLOSED **2026-04-25T04:29:09Z** without merge by the same author). **12m37s lifecycle.** Body=null. No state_reason. No successor PR observed in the open queue at close time. Anchored as the synthesis #59 exhibit.
- **Slow-stabilize arm — [openai/codex#19454]** — *"Split approval matrix test groups"* (`dylan-hurd-oai`, OPENED **2026-04-24T22:05:05Z**, **MERGED 2026-04-25T04:38:27Z**). **6h33m lifecycle.** 1 file changed, `+49/-3`, branch `codex/split-approval-matrix-tests` against `main`. Substantive PR with a clear scope (split the approval-matrix test fixture into smaller groups so individual flakes are isolatable).

**The 5-PR, 5-author, 60-day flaky-test maintenance lineage on the codex approval-matrix surface (the slow-stabilize arm's prior history):**

- **[openai/codex#7028]** — *"fix flaky test: approval_matrix_covers_all_modes"* (`aibrahim-oai`, MERGED early-W09).
- **[openai/codex#14518]** — *"Add diagnostics for read_only_unless_trusted timeout flake"* (`aibrahim-oai`, MERGED W12).
- **[openai/codex#14968]** — *"Stabilize approval matrix write-file command"* (`aibrahim-oai`, MERGED W13).
- **[openai/codex#18288]** — *"tests: isolate approval fixtures from host rules"* (`bolinfest`, MERGED W16).
- **[openai/codex#19454]** — *"Split approval matrix test groups"* (`dylan-hurd-oai`, MERGED 2026-04-25T04:38:27Z, today's anchor).

**Five distinct authors, five PRs, one recurring CI flake surface, W09–W17 inclusive.** Each PR addresses a different facet of the same fixture's flakiness (timeout flake → write-file race → host-rule contamination → matrix size). All five merged. The lineage is the corpus's **canonical slow-stabilize exhibit**.

**Comparator — opencode flaky-test history before #24252:**

- **[anomalyco/opencode#13854]** — `mocksoul`, *"fix(tui): stop streaming markdown/code after message completes"* (68 days open, refreshing without merge, synthesis #20 graveyard candidate). The opencode equivalent of "investing in stabilization" — but on a UI-rendering flake, not a test-suite flake, and **the PR has not merged after 68 days**. The opencode shell-test surface that #24252 targets has no prior multi-author stabilization lineage in the corpus.

**The discriminator — flaky-test PR outcomes by repo across W09–W17:**

| Repo | Flaky-test PRs MERGED | Flaky-test PRs SELF-CLOSED <15min | Flaky-test PRs OPEN >7 days |
|---|:---:|:---:|:---:|
| **codex** | ≥5 (approval matrix lineage above) | 0 observed | low (the lineage actively merges) |
| **opencode** | low (no canonical lineage in corpus) | **1 observed (today, #24252)** | nontrivial (#13854 etc.) |
| **OpenHands** | moderate (security/CVE patches absorb flakes incidentally) | 0 observed | low |
| **litellm** | low (test-suite flakes rare in corpus, hardening surge dominates) | 0 observed | low |
| **aider** | 0 observed (Aider's quietness includes test-suite work) | 0 observed | n/a |
| **crush, cline, mcp-servers** | 0 observed in window | 0 observed | n/a |

The bimodality is real and repo-localized: codex stabilizes, opencode (today, for the first time in corpus) abandons.

## The pattern

When a flaky test surfaces in CI, the responsible developer faces a binary choice:

- **Stabilize** — invest engineering time to reduce or eliminate the flake at its root cause. Typical mechanisms: split the test into smaller groups (today's #19454), isolate fixtures from the host environment (#18288), add diagnostics to find the timing-dependent failure (#14518), retry-with-backoff at the test-runner level. Lifecycle: hours to days; outcome: merge.
- **Abandon** — open a candidate fix, discover within minutes that the fix is wrong or unnecessary, close without merge. Typical mechanisms: the test stabilized between local repro attempts; the fix targeted the symptom not the cause; the developer found the flake is environmental and not actionable from the PR's level. Lifecycle: <15 minutes; outcome: self-close (#59 territory).

The cohort produces both arms, but **at the repo level, the choice is culturally biased**. Codex's approval-matrix lineage demonstrates a 60-day pattern of stabilization investment by 5 distinct authors — the surface is treated as a shared maintenance burden, and successive PRs build on each other's diagnostics. Opencode's first captured flaky-test event in the W17 corpus is a 12-minute self-close with null body — the surface is treated as a one-off triage attempt, abandoned when the fix didn't pan out.

The pattern has six measurable components:

1. **Surface keyword.** Both PRs reference test infrastructure in their titles (`flaky shell test`, `approval matrix test groups`). The surface keyword is what filters this synthesis to flaky-test PRs and not e.g. feature-PR self-closes (which are a different shape entirely).
2. **Lifecycle bound.** Fast-abandon ≤15 minutes; slow-stabilize ≥4 hours. The window between is rare in the corpus — most flaky-test PRs cluster at one extreme or the other.
3. **Terminal state.** Fast-abandon arm CLOSES; slow-stabilize arm MERGES. The PR's outcome is the cleanest single discriminator.
4. **Diff size.** Fast-abandon PRs are typically null body and unknown diff (they close before the diff is meaningful); slow-stabilize PRs are small (#19454: 1 file, `+49/-3`) and surgical. Counter-intuitively, *small* diffs land on the slow arm — because a multi-hour stabilization lineage requires many surgical PRs, not one large refactor.
5. **Author repetition.** Slow-stabilize lineages have **multiple distinct authors** over weeks (codex's 5 authors over 60 days). Fast-abandon events are typically **one-off**, with the abandoning author not returning to the same surface within the corpus window.
6. **Repo culture.** The single biggest predictor: codex repeatedly stabilizes its CI surfaces; opencode (so far) does not. The choice between arms is not made fresh per-PR; it inherits the repo's accumulated norms.

## Why this is *not* synthesis #20 (patch-PR-graveyard) on either arm

The fast-abandon arm closes in 12 minutes; #20 PRs accumulate over weeks. The slow-stabilize arm merges in hours; #20 PRs never merge. **Both arms are statistically distinct from #20.**

That said: the *opencode TUI-streaming PR #13854* (68 days open, refreshing) is a #20 graveyard PR on a flake-adjacent surface, and it's worth observing that opencode's *flaky-test culture* (today's #24252 fast-abandon) and its *flake-adjacent UI culture* (#13854 long-graveyard) might be two facets of the same underlying repo-culture pattern: opencode does not converge on flake-class bugs, it either abandons quickly or lets them age. Codex converges by accumulating PRs that merge.

## Why this is *not* synthesis #44 (vertical-slice-stall) or #55 (vertical-slice-prefix-merge-with-tail-held)

#44 and #55 describe N/M numbered vertical-slice patterns where a single author stages a sequence of dependent PRs. The codex approval-matrix lineage is **not** an N/M slice — it's an organic 60-day accumulation by 5 distinct authors with no numbered structure. Each PR titles itself as a standalone fix on the same fixture, not as `(N / M)` of a planned migration.

The shapes are mechanistically different: #44/#55 is *one author's plan unfolding*; #60-slow-stabilize is *the community's accumulated investment in a shared surface*. The temporal density is also different (#44/#55 PRs open within minutes of each other; #60-slow PRs open weeks apart).

## Why this is *not* synthesis #51 (multi-author-auth-acl-hardening-surge)

#51 describes a **same-week burst** of multi-author hardening PRs on an auth/ACL surface (5 authors in <1 week). The codex approval-matrix lineage spans **60 days**, not a week, and the surface is test infrastructure, not auth. The temporal density and the surface category both differentiate.

#51 also has a clear trigger event (the netblack ACL trio that started the surge); the codex lineage has no single trigger — it's a slow accretion across the entire window.

## Why this matters operationally

The bimodality is *the* operationally interesting fact about the cohort's flaky-test handling, because it means **a repo's flaky-test culture predicts whether new flake reports get fixed or get ignored**, independent of the individual PR or developer involved. A developer joining a stabilize-culture repo (codex) will inherit the norm of investing engineering time in flake reduction; a developer joining an abandon-culture repo (opencode, on current evidence) will inherit the norm of treating flake reports as triage events.

For the cohort specifically:

- **Codex's flaky-test lineage is rare in OSS.** Five-distinct-author, 60-day, single-surface stabilization investment is unusual. Most OSS projects either (a) have a single test-infrastructure maintainer who handles all flakes, or (b) let flakes ride. Codex has converged on a *shared* maintenance burden where multiple authors take turns. This is likely related to the repo's high contributor velocity (synthesis #46 / pakrym 15-min CI cadence) — a fast CI loop makes flakes immediately painful to many contributors, who then feel motivated to fix them.
- **Opencode's flaky-test culture is undefined as of today's first capture.** A single 12-minute self-close is not enough evidence to conclude a culture exists; it's enough to flag the surface as worth watching. If opencode produces 2–3 more #59-shape events in W18 without any compensating multi-PR lineage, the abandon-culture conclusion firms up; if a multi-author stabilization PR appears, the picture is more nuanced.
- **The cohort's other repos do not appear in this synthesis at all.** litellm is dominated by gateway-feature work and hardening surges (#48, #49, #51); flaky tests are a small fraction of its PR volume. OpenHands is dominated by V0→V1 migration and CVE patches. Aider is too quiet to produce flake-test PRs at observable rate. Crush, cline, and mcp-servers do not produce flake-test PRs in the corpus at all (or below the digest's resolution). The bimodality is a **codex-vs-opencode** phenomenon in this window, not a cohort-wide one.

The deeper observation: **CI culture is more sticky than CI tooling.** Both codex and opencode use modern CI (GitHub Actions matrices, parallel job runners, retry-on-failure plugins). The tooling is similar; the response cultures are opposite. This means investing in better CI tooling without simultaneously building a culture of stabilization investment will not move opencode toward codex's pattern; the culture has to be built explicitly.

## The falsifiable claims

By **end of W18 (2026-05-03)**, the following will be observable:

1. **Codex will produce at least one more flaky-test stabilization PR** on the approval-matrix surface or on a sibling test fixture (`turn`-handler tests, `app-server` integration tests). The 60-day cadence is roughly one PR every 12 days; W18 is the next interval. If the cadence breaks, codex's stabilize-culture is showing fatigue.
2. **Opencode will produce at least one more #59-shape event** on a flake-adjacent surface (shell, terminal, TUI, integration tests). The first capture (#24252) is today; the next should appear within 7–14 days if abandon-culture holds. If opencode instead produces a multi-PR stabilization lineage on the shell-test surface, abandon-culture is wrong and opencode is just early in its own stabilization cadence.
3. **No mid-arm event will appear** in either repo: a flaky-test PR with lifecycle 30 minutes to 4 hours, ending in either merge or close, is rare and would represent a third response mode the synthesis doesn't predict. If 2+ such PRs appear, the bimodality is actually trimodal and #60 needs revision.
4. **At least one cross-repo flake-class convergence event** will appear: a flake on a surface that exists in both codex and opencode (e.g., shell-execution timing, TUI rendering race), with both repos opening PRs in response within 24 hours of each other. The convergence would let direct comparison of arm-choice on identical bug-class. **Strong test of the repo-culture hypothesis.**
5. **The slow-stabilize lineage is generalizable.** If OpenHands V0→V1 migration produces a similar 5-author, multi-week lineage on its session-management or critic-framework test surfaces in W18–W19, the codex approval-matrix shape is not unique to codex — it's a property of any high-velocity repo with a shared CI burden. If OpenHands migration produces only ad-hoc one-off test fixes without a lineage, codex's pattern is unusual.

A narrower prediction: **the next codex flaky-test stabilization PR will be authored by `aibrahim-oai`**, who has 3 of the 5 PRs in the lineage (#7028, #14518, #14968). The author distribution suggests aibrahim-oai is the lineage's primary owner, with bolinfest and dylan-hurd-oai as occasional contributors. If the next stabilization PR is by a fourth author entirely new to the lineage, the surface is becoming **broader-owned**, which is a healthy sign for the repo's stabilize-culture; if it's by aibrahim-oai again, the lineage is healthy but author-concentrated.

## Operational recommendation

1. **For repo maintainers:** explicitly track the ratio of stabilize-merges to fast-abandon-closes per quarter as a CI-health metric. A repo with all stabilize and no abandon is over-investing (every flake gets engineering time, even non-actionable ones); a repo with all abandon and no stabilize is under-investing (flakes accumulate as background noise). Codex's current ratio is approximately 5:0 over 60 days (heavy stabilize); opencode's is 0:1 over the same window (heavy abandon). Both are near the unhealthy poles.
2. **For developers triaging a flake:** before opening a PR, decide which arm you're on. If you have 30 minutes to investigate locally and the fix is not obvious, **don't open a PR yet** — open an issue with reproduction steps, then open a PR only when you have a plausible candidate fix. The current synthesis #59 self-close pattern (open a PR, discover the fix is wrong, close) wastes the PR mechanism as a scratch buffer. An issue is the right mechanism for the triage step.
3. **For digest tooling:** track the per-repo ratio of fast-abandon to slow-stabilize flake PRs over rolling 7-day and 30-day windows. The ratio change is the leading indicator: a repo sliding from stabilize toward abandon is losing CI culture; a repo sliding from abandon toward stabilize is building it. The ratio is more diagnostic than absolute counts because high-velocity repos produce more of both arms.
4. **For cross-repo learning in this cohort:** the codex approval-matrix lineage is a **directly portable artifact** for opencode and OpenHands. The mechanisms are well-understood (test-fixture isolation, matrix splitting, host-rule scrubbing, diagnostic instrumentation); the cultural commitment is the missing piece. An opencode maintainer reading the codex lineage's 5 PRs in order would have a working playbook for stabilizing opencode's shell-test surface within W18–W19 — but only if the maintainer also makes the cultural commitment to invest the multi-week effort.
5. **For the synthesis #59 connection:** the two syntheses are co-defined. A repo cannot meaningfully evaluate its #59 fast-abandon rate without simultaneously tracking its #60-slow-stabilize rate, because the meaning of a fast-abandon depends on whether the repo also produces stabilization work. A fast-abandon in a stabilize-culture repo is a healthy triage event (the developer correctly identified the fix wasn't actionable, and the lineage will catch up later); a fast-abandon in an abandon-culture repo is a debt-accumulation event (the flake will recur, and no one will invest in stabilizing it).

The bimodality will likely sharpen rather than blur over W18–W20, because cultural patterns reinforce themselves: codex contributors who see the stabilize-lineage will join it; opencode contributors who see fast-abandons will replicate them. The cohort's interesting question is whether one of the repos *transitions* arms in the next 30 days — opencode building its first stabilization lineage, or codex showing fatigue on the approval-matrix surface. Both transitions would be corpus-level news. The current state (today's micro-window exhibit) is the cohort's first clean side-by-side comparison of the two arms in a 30-minute window, and is therefore the right anchor for the synthesis.
