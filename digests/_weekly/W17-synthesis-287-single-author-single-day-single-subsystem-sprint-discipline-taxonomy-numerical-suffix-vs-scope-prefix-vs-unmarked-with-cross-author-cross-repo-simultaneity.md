# W17 Synthesis #287 — Single-Author Single-Day Single-Subsystem Sprint Discipline Taxonomy: Numerical-Suffix vs. Scope-Prefix vs. Unmarked With Same-Day Cardinality N≥4 Observed Cross-Author Cross-Repo Simultaneously Distinct From Synth #285 Single-Numerical-Series And Synth #210 Branch-Prefix-Class-Discriminator

**Date:** 2026-04-28 (capture window through Add.127 close 16:57Z)
**Repos:** openai/codex (jif-oai n=8 memory + hinting day with numerical-suffix subset n=3 "memories 1/2/3"), sst/opencode (kitlangton n=4 httpapi day with scope-prefix discipline `(httpapi):`).
**Refines:** synth #199 (title-prefix discipline as merge-velocity correlate), synth #210 (`headRefName` prefix-class as merge-lane discriminator), synth #213 (branch-prefix dominates title-prefix when disagreeing), synth #285 (single-author single-subsystem sequentially-numbered title-suffix series).
**Distinct from:** synth #285 (which catalogued *only* the numerical-suffix variant on a single instance; synth #287 establishes a taxonomy across discipline classes), synth #210 (which discriminated by branch-prefix only; synth #287 covers title structure as well), synth #91 (single-author triplet metronome which is cadence-defined not discipline-defined).

## Pattern

Synth #285 named the jif-oai "memories 1/2/3" pattern — a single author publishing a numerically-named PR series of cardinality ≥3 within a single day on a single subsystem. The framing was instance-specific; it did not anticipate that **other authors on other repos would simultaneously execute single-day single-subsystem sprints with a *different* discipline structure**.

Add.127 capture (16:35→16:57Z) merged kitlangton #24811 `c00058ed7a42` `fix(httpapi): align request body openapi shape`, extending the kitlangton same-day httpapi sprint to n=4 PRs all sharing the parenthesized scope-prefix `(httpapi):` in their title. This is **not** a numerical-suffix series — there is no `httpapi 1`, `httpapi 2`, `httpapi 3`. It is a **scope-prefix-disciplined** sprint where the author signals subsystem coherence via the conventional-commits scope token in `(httpapi)` rather than via a numerical suffix.

Synth #287 names the **single-author single-day single-subsystem sprint discipline taxonomy** with three observed classes:

1. **Numerical-suffix discipline (Class N).** Author appends explicit numeric tokens to title (e.g. `house-keeping memories 1`, `house-keeping memories 2`, `house-keeping memories 3`) signaling sequence position. Witnessed: jif-oai codex #19998/#20000/#20005 (Add.124–Add.126).
2. **Scope-prefix discipline (Class S).** Author uses conventional-commits-style parenthesized scope `(subsystem):` repeatedly across a sprint, with the scope token providing subsystem coherence and the title body providing per-PR specificity (e.g. `refactor(httpapi):` → `fix(httpapi):` → `fix(httpapi):` → `fix(httpapi):`). Witnessed: kitlangton opencode #24716/#24799/#24809/#24811 (Add.124, Add.125, Add.125, Add.127).
3. **Unmarked discipline (Class U).** Author runs a single-day single-subsystem sprint with neither numerical suffixes nor consistent scope prefixes — subsystem coherence is recoverable only by reading PR bodies or branch names. Witnessed: jif-oai's own pre-numerical setup PRs #19961/#19963/#19967/#19970/#19990 on memory/hinting (which used freeform titles like `feat: trigger memories from user turns with cooldown`, `feat: skip memory startup when Codex rate limits are low`, `Stabilize memory Phase 2 input ordering` — same author, same calendar day, same subsystem, no shared title token).

## Concrete W17 instances (Add.124–Add.127 capture span)

### Class N — Numerical-suffix discipline
- **Author:** jif-oai. **Repo:** openai/codex. **Subsystem:** memory.
- **PRs (numerical subset, n=3):**
  - #19998 `5a79dfab7c67` 15:11:50Z `feat: house-keeping memories 1`
  - #20000 `21e19912e0cd` 15:26:45Z `feat: house-keeping memories 2`
  - #20005 `5b7d6f5c4f55` 16:13:35Z `feat: house-keeping memories 3`
- **Span:** 1h01m45s. **Inter-merge gaps:** 14m55s, 46m50s.
- **Title token shared:** `house-keeping memories N` with N∈{1,2,3}.
- **Branch token:** not consistently `house-keeping/N` (per Add.126 enumeration); discipline lives in title only.

### Class S — Scope-prefix discipline
- **Author:** kitlangton. **Repo:** sst/opencode. **Subsystem:** httpapi.
- **PRs (n=4):**
  - #24716 13:22:50Z (sprint start, sha not enumerated in current window)
  - #24799 `7739cc53b4c4ad78621103032f0d94a9d76a7252` 15:02:35Z `refactor(httpapi): fork server startup by flag`
  - #24809 `ea3c6c34811de792ba6870766dd0a36f3a392bc6` 15:10:01Z `fix(httpapi): document instance query parameters`
  - #24811 `c00058ed7a423d1b993362fa2d23a072c5967555` 16:55:37Z `fix(httpapi): align request body openapi shape`
- **Span (last 3 enumerated):** 1h53m02s. **Inter-merge gaps (last 3):** 7m26s, 1h45m36s.
- **Title token shared:** parenthesized scope `(httpapi):` across all 4 PRs; conventional-commits prefix varies (`refactor` / `fix` / `fix` / `fix`).
- **Branch token:** `kit/httpapi-*` (e.g. `kit/httpapi-hard-fork`, `kit/httpapi-sdk-query-parity`, `kit/httpapi-sdk-body-parity`) — branch discipline is **author-namespaced + subsystem-prefixed**, providing a second-axis fingerprint orthogonal to title.

### Class U — Unmarked discipline (negative case)
- **Author:** jif-oai. **Repo:** openai/codex. **Subsystem:** memory + hinting (mixed).
- **PRs (n=5):**
  - #19961 `b7c0f269109f` 11:06:41Z `feat: fix hinting 2`
  - #19963 `54d14011708b` 11:12:51Z `feat: fix hinting 3`
  - #19967 `fa127be25ff5` 11:32:06Z `Stabilize memory Phase 2 input ordering`
  - #19970 `a9e5c34083d4` 14:23:14Z `feat: trigger memories from user turns with cooldown`
  - #19990 `1b743603651d` 15:07:16Z `feat: skip memory startup when Codex rate limits are low`
- **Note:** #19961/#19963 use `fix hinting N` numerical-suffix on a *different* subsystem (hinting, not memory). The boundary between Class N and Class U is **subsystem-scoped**: jif-oai ran a Class N sprint on `hinting` (n=2: "hinting 2", "hinting 3") and a Class N sprint on `memory` (n=3: "memories 1/2/3"), with a Class U bridge of n=3 unmarked memory PRs in between.

## Cross-class properties

| Property | Class N (jif-oai memory) | Class S (kitlangton httpapi) | Class U (jif-oai memory bridge) |
|----------|--------------------------|-------------------------------|----------------------------------|
| Cardinality observed | n=3 | n=4 | n=3 |
| Discipline locus | title suffix | title scope-prefix + branch namespace | none |
| Shared title token | `memories N` | `(httpapi):` | none |
| Shared branch token | none enumerated | `kit/httpapi-*` | none |
| Subsystem coherence recoverable from | title alone | title + branch | PR body / branch only |
| Inter-merge cadence | 14m55s, 46m50s | 7m26s, 1h45m36s | 6m10s, 19m15s, 2h51m08s, 44m02s |
| Conv-commits prefix | uniform `feat:` | varies `refactor/fix/fix/fix` | uniform `feat:` |
| Cross-repo simultaneity | yes — both Class N and Class S land on same calendar day across openai/codex and sst/opencode | yes | yes |

## Falsifiable predictions

- **Pred 287-A:** within 8 ticks, a third single-author single-day single-subsystem sprint of cardinality n≥4 emerges on a third repo (not codex, not opencode), and falls into one of Classes {N, S, U}. If it falls into a fourth class (e.g. emoji-tagged, date-tagged, version-tagged), 287-A is falsified and the taxonomy expands.
- **Pred 287-B:** Class S sprints have systematically **lower title-suffix entropy and higher branch-namespace entropy** than Class N sprints. Operationalize: Shannon entropy of last-token-after-colon (Class S high) vs. first-token-after-colon (Class N high). Window: next 5 cross-class instances.
- **Pred 287-C:** **Class N sprints terminate at small n (n≤5)**, **Class S sprints can extend further (n≥6)**. Mechanism: numerical naming forces the author to commit to a finite series (`memories 4`, `memories 5` becomes effortful), while scope-prefix is per-PR-fresh. Window: next 4 sprint-terminations across W17.
- **Pred 287-D:** Class U sprints **convert to Class N or Class S in the same calendar day** at a rate above 50%. jif-oai's own pre-numerical Class U bridge converted to Class N via #19998/#20000/#20005 within ~4 hours.
- **Pred 287-E:** **Cross-class simultaneity (≥2 distinct classes on same calendar day across multiple repos) recurs at a rate of at least 1 instance per W17 day** going forward. If 0 days in next 3 produce cross-class simultaneity, 287-E is falsified.

## Author-cohort notes (cross-repo same-day appearances)

- **jif-oai (codex):** appeared in Class N (memory) and Class U (memory bridge) on same calendar day — single author splits across classes.
- **kitlangton (opencode):** appeared in Class S (httpapi) only this day — n=4.
- **No author appears in ≥2 repos this day** in the synth #287 sprint slot — Class S and Class N are author-disjoint and repo-disjoint despite cross-repo simultaneity.

## Methodological note

Synth #287 differs from synth #210 in unit of analysis: synth #210 discriminates **per-PR merge lane** by branch-prefix class; synth #287 discriminates **per-sprint discipline class** by intra-sprint title/branch token sharing. The two are orthogonal — a Class S sprint may straddle synth #210's `feat`/`fix` branch lanes (kitlangton's sprint includes both `refactor` and `fix` conv-commits prefixes, with different median lifespans by synth #210). Synth #287 thus operates **above** synth #210's lane abstraction, on the sprint as a whole.
