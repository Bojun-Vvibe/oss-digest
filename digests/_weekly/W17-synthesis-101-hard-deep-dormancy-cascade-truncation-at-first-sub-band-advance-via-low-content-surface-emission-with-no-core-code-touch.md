# W17 Synthesis #101 — Hard-deep-dormancy cascade-truncation at first sub-band advance via low-content-surface emission, with no core-code touch (goose acekyd #8884 `819ca464` blog-emission at depth 8h44m12s, 16m08s pre-9h-boundary, Add.160)

**Anchor window:** 2026-04-29T09:04:15Z (goose jh-block #8901 `37db6dec` reset) → 17:48:27Z (goose acekyd #8884 `819ca464` silence-break). Total dormancy span: **8h44m12s** across Add.151+ silence ticks Add.158 (n=7), Add.159 (n=8 + 8h boundary crossed at +31m32s), Add.160 (silence-break before 9h boundary).
**Anchor repo:** block/goose.
**Anchor actor:** acekyd (Adewale Abati) on the silence-break; jh-block (anonymized) on the prior reset.
**Parent synths:** #336 (cascade-monotonicity property of M-152.U class hard-deep-dormancy entries — once a repo crosses a structural deep-band boundary it continues to deeper sub-bands without intervening exit), #342 (M-152.U fine-grained taxonomy at 1-hour sub-band resolution within the deep-dormancy band: 7-8h, 8-9h, 9-10h, 10-11h, ... each treated as a sub-band with its own crossing/exit characteristics).

## Why this is distinct from #336 and #342

- **#336** asserts cascade-monotonicity: M-152.U class entries (≥10h band) tend to advance monotonically through deeper bands. Goose's Add.160 exit is **at 8h44m12s — below the 10h band entry** for the M-152.U class proper. So #336's strict M-152.U monotonicity is not formally violated. But ADDENDUM-159 explicitly framed goose's 8-9h cascade as **"M-152.U-like trajectory at the 7-8-9h entry phase"** — meaning the structural property of cascade-extension was being tracked as a pre-M-152.U precursor signal. Synth #101 captures the **falsification of that precursor signal**: the cascade-extension does NOT structurally pre-determine M-152.U entry. A repo can enter a deep cascade trajectory and exit before reaching the 10h band.
- **#342** treats each 1-hour sub-band as a stable analytic unit with its own crossing-or-exit dynamics. #342 implicitly assumes that once a repo enters a sub-band, it either exits within that sub-band or advances to the next deeper sub-band. Synth #101 introduces a new exit-channel class — **low-content-surface exit** — that #342's framework did not distinguish from generic emission-exits. The exit surface itself is a structural property of the silence-break that #342 ignored.

## The observation in detail

| Time (UTC) | Goose state | Tick / event |
|---|---|---|
| 2026-04-29T09:04:15Z | jh-block #8901 `37db6dec` `build: set LLAMA_STATIC_CRT for Windows CUDA` merges; silence reset | Pre-Add.151 |
| (multiple Add ticks of n=1, 2, ..., 7 silence advancing) | Goose silent through Add.151-158 | |
| 2026-04-29 16:32:43Z (Add.159 open) | Goose at silence depth 7h28m28s (n=7) | Add.159 open |
| 2026-04-29T17:04:15Z | **8h boundary crosses** at +31m32s into Add.159 window — uncontested | Add.159 mid-tick (cascade extension) |
| 2026-04-29T17:27:23Z (Add.159 close) | Goose at silence depth 8h23m08s+ (n=8) | Add.159 close |
| 2026-04-29T17:48:27Z | **acekyd #8884 `819ca464` `blog: goose with peekaboo` merges** — silence-break at depth 8h44m12s | Add.160, +21m04s into window |
| 2026-04-29T18:04:15Z | (would-have-been 9h boundary, +13m10s after Add.160 close) — **PREEMPTED by silence-break 16m08s earlier** | Did not occur |

The structural object: goose **entered the 7-8h band at jh-block reset + 7h** (early in W17), **crossed the 8h boundary uncontested at Add.159** (synth #336/#342 monotonic-extension predicate held at that crossing), then **exited the 8-9h band 16m08s before the 9h boundary** via a single emission whose surface is **non-core** (`blog:` prefix indicating documentation/marketing content, not Rust/TS source code in the goose binary or web app).

## The exit-surface anatomy

PR #8884's title is `blog: goose with peekaboo`. From the title alone:
1. The `blog:` prefix is goose's conventional commit type for **blog-post content** (Markdown in `documentation/` or `web/` subtree, not source code).
2. The body subject "goose with peekaboo" indicates an **integration showcase** — a tutorial or reference about using goose with another tool ("peekaboo" being a separate product), not a behavior change in goose itself.
3. The author **acekyd** (Adewale Abati) has not appeared in the W17 tracked goose merges prior to this PR — this is a **fresh author** for the W17 dataset, structurally consistent with marketing/devrel/blog contributions that come from authors outside the core engineering rotation.

The surface of #8884 is therefore **structurally unable to constitute a core-code emission** that would justify the cascade-extension stopping. In a strict sense, **the goose binary did not move** at 17:48:27Z; only the documentation site did. From the perspective of an end-user pulling `goose` from a release channel, **the dormancy continues** past Add.160; only the blog feed updated.

## Why this matters for the M-152.U class taxonomy

The M-152.U class (≥10h hard-deep-dormancy) was originally framed (synth #336) as a **structural emergent property** of repos that have entered a sustained code-freeze regime — typically before a release cut, during a contributor offboarding gap, or under a planned merge-window pause. The cascade-monotonicity property (synth #336) was attractive because it suggested **once a repo enters a sustained pause, it tends to stay paused at progressively deeper bands** until a discrete release event resets it.

Synth #101 introduces a structural caveat: **cascade-extension can be terminated by emissions that do not constitute the kind of release event the M-152.U class was meant to capture**. Specifically:
- A blog-post merge does not cut a binary release.
- A docs merge does not change behavior.
- A version-bump-only merge (e.g., `chore(release): bump version to X.Y.Z`) does not contain code changes.
- A dependabot auto-merge of a `package-lock.json` does not introduce author intent.

All four of these are **low-content-surface emissions** that can mathematically reset the silence-counter (the GitHub merge-event timestamp advances) but do not constitute a structural release event. The M-152.U class taxonomy should be **partitioned into core-code-emission cascades vs low-content-surface cascades**, with separate cascade-monotonicity properties for each.

## The low-content-surface exit predicate

A silence-break event qualifies as a **low-content-surface exit** under #101 when:
1. The PR title prefix is one of: `blog:`, `docs:`, `chore(release):`, `chore(deps):`, `chore: bump`, `[Infra] Version Bump`, or any title matching the regex `^(release|version|bump|nightly)\b`.
2. The PR diff modifies exclusively documentation files (`*.md`, `docs/**`, `documentation/**`, `web/**`, `blog/**`), version-string files (`Cargo.toml` version field, `package.json` version field, `pyproject.toml` version field), or lockfiles (`package-lock.json`, `yarn.lock`, `Cargo.lock`, `uv.lock`, `poetry.lock`).
3. The PR has zero changes to source code under the repo's primary source tree (`src/**`, `crates/**`, `pkg/**`, etc.).
4. The PR author either is a bot (`*-ci-bot`, `app/github-actions`, `dependabot[bot]`) OR is not present in the prior 30-day commit history of source code under the primary source tree.

Goose acekyd #8884 satisfies predicates 1 and 4 directly from observable metadata (title prefix `blog:`, author absent from W17 prior tracked merges). Predicates 2 and 3 require diff inspection to confirm, but the title `blog: goose with peekaboo` is a strong prior.

## Falsifiable predictions

1. **(P-101.A) Future 8-9h-band cascade exits are dominantly low-content-surface.** Across the next 5 W17/W18 instances of a tracked repo crossing the 8h boundary and exiting before the 9h boundary, ≥3 exits occur via low-content-surface PRs (blog/docs/release/version-bump). Falsifier: ≤2 of next 5 8-9h-band exits are low-content-surface; the goose Add.160 case is structurally idiosyncratic.

2. **(P-101.B) Core-code cascade-monotonicity holds.** When the partition by surface class is applied, the cascade-monotonicity property (synth #336) holds strictly for **core-code-emission-only** cascades: a repo whose silence is broken only by core-code emissions advances through sub-bands monotonically with no skip or back-tracking. Falsifier: an instance is observed in W17/W18 of a core-code-only cascade exiting at an early sub-band before reaching its prior maximum depth.

3. **(P-101.C) Opencode 11-12h cascade exit-surface prediction.** Opencode's current 11-12h sub-band cascade (depth 11h00m59s+ at Add.160 close) will exit either (a) via a core-code PR in the `packages/opencode/src/server/routes/instance/httpapi/*.ts` or `packages/opencode/specs/effect/http-api.md` surface (continuing kitlangton's HTTP API series from synth #99), at deeper sub-bands ≥12h; OR (b) via a low-content-surface PR (release notes, version bump) at the current sub-band before the 12h boundary at 18:50:06Z. Falsifier: opencode exits via a core-code surface other than the HTTP API series, OR exits at a sub-band intermediate between current and the kitlangton HTTP API anchor's natural cadence.

4. **(P-101.D) Cross-repo low-content-surface-exit rate.** Of all M-152.U-precursor cascade exits (8h+ band) observed across the 6 tracked repos in W17 + W18, ≥40% occur via low-content-surface PRs. Falsifier: <40% — implying that core-code-emission is still the dominant cascade-exit mechanism even in deep bands.

5. **(P-101.E) Goose author-fresh-emission-on-blog re-recurrence.** Within W18, the goose repository sees ≥1 additional blog-prefix PR by an author absent from W17 core-code merges, indicating that blog/docs contributions are systematically off-cycle from core engineering. Falsifier: zero such instances in W18.

## Distinctness from prior synths (formal)

- **vs #336**: #336 asserts cascade-monotonicity for the M-152.U class (≥10h band). #101 partitions cascade trajectories by exit-surface class and asserts that low-content-surface exits **violate** the cascade-monotonicity-by-depth property because they reset silence at a structurally negligible depth. The falsification signal is not the depth but the **content-class of the resetting emission**.
- **vs #342**: #342's 1-hour sub-band taxonomy treats all crossings as equivalent. #101 introduces a **per-sub-band exit-surface distribution** as a new analytic dimension, with the prediction that lower sub-bands (8-9h, 9-10h) have a higher low-content-surface-exit fraction than deeper sub-bands (12-13h+).
- **vs #98** (bot-driven sub-10s N=3 stale-PR mass-close sweep across heterogeneous dependency surfaces): #98 captures **bot-driven cleanup events** that may or may not advance silence counters. #101's low-content-surface emissions are **human-authored but structurally non-substantive** — a different mechanism than #98's bot-mass-close. The two together suggest a broader synthesis is needed about "silence-counter resets that do not constitute structural code activity."
- **vs #294** (sustained-emission shape across silence-break and trailing tick): #294 treats silence-break emissions as homogeneous events. #101 says the silence-break **surface class** (core-code vs low-content) is itself a structural variable that affects whether the cascade-monotonicity property holds going forward.

## Risk and observability lens

- **False-positive cascade-extension signal**: a repo that appears to be in a sustained dormancy may have its silence-counter reset by a blog/docs PR that does not change behavior. Downstream consumers of the digest who use cascade-extension as a signal for "this repo is in a code-freeze" will be misled if the silence-counter is reset by non-code activity. Detector should expose **two parallel silence-counters per repo**: one resetting on any merge (current behavior), one resetting only on core-code merges (new). M-152.U class membership should be evaluated against the core-code counter.
- **Release-cycle correlation**: low-content-surface exits cluster around release events (version bumps, release-notes blog posts, changelog updates). The observation that goose exited via a blog PR **after** Add.158 silence (~7h25m) and **before** any goose 1.34.0 release is suggestive — the blog post may be **pre-release marketing** preceding a near-future release cut. Detector should cross-reference low-content-surface exits with each repo's recent release tag history (latest goose release tag was 1.33.0 at Add.158 #8872 `chore(release): bump version to 1.33.0 (minor)` 2026-04-28T10:08:54Z `52b3f21e`; the next minor 1.34.0 has not yet cut).
- **Author-fresh-emission as a routing signal**: the acekyd author is fresh to W17 goose tracked merges. This is structurally consistent with **devrel/marketing/community** contribution patterns being off-cycle from core-engineering rotation. Detector should maintain per-repo **author-class taxonomies** (core-engineering, devrel, dependabot, release-bot) and report cascade-exits with author-class context.
- **Inter-repo applicability**: the same partition by exit-surface should be applied to all 6 tracked repos. The opencode kitlangton HTTP API series (#99) suggests opencode core-code emissions are self-organized into anchor-bound series; the codex etraut-openai TUI series (#100) suggests the same for codex. By contrast, low-content-surface emissions in any repo are author-fresh and surface-disjoint from these series. The structural distinction between **anchored-series core-code** and **drive-by low-content** is a candidate for synthesis at the cross-repo level.
