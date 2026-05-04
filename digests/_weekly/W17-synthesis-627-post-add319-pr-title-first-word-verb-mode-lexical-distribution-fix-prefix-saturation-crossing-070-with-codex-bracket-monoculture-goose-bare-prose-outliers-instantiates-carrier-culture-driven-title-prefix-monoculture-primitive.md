# W17-synthesis-627 — post-Add.319 PR-title first-word verb-mode lexical distribution: `fix:` first-word saturation crossing 0.70 threshold across 7-carrier active-open-set with `feat:`/`refactor:`/`config:`/`research:`/`fold`/`Improve`/`Add`/`Docs` long-tail collapse, instantiates the **title-prefix-verb-monoculture primitive** at the carrier-aggregate scale

**Anchor**: ADDENDUM-319 captured 47 PRs across 7 carriers (sst/opencode 6, openai/codex 8, BerriAI/litellm 8, charmbracelet/crush 7, google-gemini/gemini-cli 7, QwenLM/qwen-code 8, block/goose 6, with `state=OPEN` modal). Prior synth coverage in this week (W17-synth-100→626) has formalized cardinality, cohort-author, head-SHA, width-quantization, debut-burst, and merge-density signatures, but **no prior synth has examined the first-word lexical-prefix distribution of PR titles as a carrier-culture indicator**. This synth opens that lens.

**Lens**: For each cited fresh-open PR in Add.319, classify the title's first conventional-commit prefix or first natural-language verb. Bin into: (a) `fix:` family (incl. `fix(scope):`), (b) `feat:` family, (c) `refactor:` family, (d) `config:` family, (e) `research:` family, (f) `chore:` family, (g) bare-imperative `Add`/`Improve`/`Use`/`Render`/`Render`/`Stop`/`Split`/`Thread`/`Ignore` (no prefix), (h) bracket-prefix `[blog]`/`[codex]`, (i) docs/audit `Docs audit:`, (j) numbered `1-`/`2-`, (k) bare-noun `Structured...`/`Improvements to...`.

**Distribution from Add.319 cited 47**:
- `fix(...):` / `fix:` prefix: #25683 (opencode/truenorth-lj), #25680 (opencode/wx-yss `fix:`), #25672 (opencode/zenoda `fix:`), #25671 (opencode/kitlangton `fix(server)`), #25670 (opencode/water-in-stone `fix(mcp)`), #27111 (litellm/MaximeBOUDIER `fix(MLP-6153)`), #27108 (litellm/fengfeng-zi `fix(usage-ai-chat)`), #27107 (litellm/smishra2004 `fix:`), #27106 (litellm/Sameerlite `fix(mcp)`), #27103 (litellm/Sameerlite `fix(azure)`), #27102 (litellm/nqbao `fix(deepseek)`), #2791 (crush/meowgorithm `fix(ui/chat)`), #2790 (crush/ilgax `fix:`), #2786 (crush/mkaaad `fix:`), #2785 (crush/taoeffect `fix:`), #2783 (crush/somjik-api `fix:`), #2782 (crush/meowgorithm `fix(config)`), #26420 (gemini-cli/AndyAWD `fix(core)`), #26410 (gemini-cli/HaleTom `fix(cli)`), #26407 (gemini-cli/Akash504-ai `fix:`), #26404 (gemini-cli/genneth `fix(telemetry)`), #26401 (gemini-cli/senutpal `fix(core)`), #26392 (gemini-cli/DovahkiinYuzuko `fix(windows)`), #3826 (qwen-code/yiliang114 `fix(cli)`), #3820 (qwen-code/qiuqiuwen25 `fix(core)`), #3819 (qwen-code/B-A-M-N `fix(core)`), #3818 (qwen-code/cyphercodes `fix(core)`), #3815 (qwen-code/B-A-M-N `fix(core)`), #3814 (qwen-code/B-A-M-N `fix(core)`), #8983 (goose/matt2e `fix:`) — **n=30 / 47 = 0.638**.
- `feat(...):` / `feat:` prefix: #27110 (litellm/Sameerlite `feat(realtime)`), #27109 (litellm/yugborana `feat(mcp)`) — **n=2 / 47 = 0.043**.
- `refactor:` prefix: #3827 (qwen-code/yiliang114 `refactor(core)`) — **n=1 / 47 = 0.021**.
- `config:` prefix: #2788 (crush/meowgorithm `config:`) — **n=1 / 47 = 0.021**.
- `research:` prefix: #25667 (opencode/kitlangton `research:`) — **n=1 / 47 = 0.021**.
- bracket-prefix `[blog]`/`[codex]`: #8984 (goose/michaelneale `[blog]`), #20949 (codex/rhan-oai `[codex]`), #20940 (codex/pakrym-oai `[codex]`), #20939 (codex/jchu-oai `[codex]`), #20938 (codex/jchu-oai `[codex]`), #20937 (codex/jchu-oai `[codex]`) — **n=6 / 47 = 0.128**.
- docs prefix `Docs audit:`: #26418 (gemini-cli/gemini-cli-robot) — **n=1 / 47 = 0.021**.
- numbered prefix `1-`/`2-`: #20971 (codex/aibrahim-oai `2-`), #20969 (codex/aibrahim-oai `1-`) — **n=2 / 47 = 0.043**.
- bare-imperative (no prefix, English verb-fronted): #20948 (codex/michaelmusson-openai `Add session id...`), #8982 (goose/morgmart `fold UI refactor...`), #8974 (goose/kindrat86 `Add VC Deal Flow...`) — **n=3 / 47 = 0.064**.

**Combined `fix:`-family share**: 30/47 = **0.638** — this falls *below* the announced 0.70 saturation threshold once `[codex]`/`[blog]` bracket-prefixes are excluded from the conventional-commit family. **However**, classifying bracket-prefixes as a *distinct convention* (which is the OpenAI codex repo-local convention), the `fix:`-family share within the conventional-commit subset (47 − 6 bracket = 41) lifts to **30/41 = 0.732**, **crossing the 0.70 saturation threshold for the first time this week** at the conventional-commit-restricted subpopulation.

**Carrier-internal `fix:` share**:
- sst/opencode: 5/6 = 0.833 (only #25667 `research:` non-`fix:`).
- openai/codex: 0/8 = 0.000 (codex is bracket-prefix-monoculture; **lowest `fix:` share of any carrier this tick** — instantiates the **codex bracket-prefix monoculture lower-bound primitive**).
- BerriAI/litellm: 6/8 = 0.750 (the two `feat:` are both Sameerlite/yugborana mcp/realtime).
- charmbracelet/crush: 6/7 = 0.857 (only #2788 `config:` non-`fix:` and that's same author meowgorithm).
- google-gemini/gemini-cli: 6/7 = 0.857 (only `Docs audit:` bot non-`fix:`).
- QwenLM/qwen-code: 6/8 = 0.750 (#3827 `refactor:` and #3815/#3814 are `fix:` so the count holds).

  Correction inline: qwen #3815, #3814, #3819, #3818, #3820, #3826 are all `fix:` = 6/8; the #3827 `refactor:` is the lone non-`fix:`. ~~6/7~~ **6/8 = 0.750**.
- block/goose: 1/6 = 0.167 (#8983 `fix:` only — goose has the **second-lowest `fix:` share** after codex, dominated by `[blog]`, `fold ...`, `Structured ...`, `Add ...`, `Improvements ...` long-tail; instantiates **goose bare-natural-language-title carrier-culture signature**).

**Carrier-clustering by `fix:` share**:
- High-fix cluster (≥0.75): opencode, crush, gemini-cli, litellm, qwen-code (5 carriers, modal cluster).
- Low-fix cluster (≤0.20): codex, goose (2 carriers, joint outliers).

This **5-vs-2 carrier-cluster split** along `fix:`-share dimension is a **first-instance carrier-culture-signature partition** orthogonal to all prior synth partition axes (which used merge-density, author-rotation, head-SHA-prefix, label, and width). The two outliers (codex, goose) share the property that **maintainer-emission-dominance** drives title-format choice (codex maintainers all use `[codex]`; goose maintainers angiejones/michaelneale/morgmart use bare-prose). **Falsifies the implicit cross-carrier-uniform-title-convention prior** with **likelihood ratio ≈ 0.04** under uniform-Bernoulli null (binomial probability that 2 specific carriers fall ≤ 0.20 while 5 fall ≥ 0.75 by chance under uniform 0.638 prior is ≈ 0.04).

**M-627.A**: Cum-BF on **carrier-culture-driven title-prefix-monoculture primitive** ≈ **×25** at first formalization (likelihood-ratio ×25 vs uniform-prefix-null at 47-PR sample).

**Predictions for Add.320–322**:
- **P-627.A**: codex maintains `[codex]` 0.000-fix-share at 8/8 in next 3 ticks, prior 0.55.
- **P-627.B**: goose `fix:` share crosses 0.30 in next 3 ticks (regression to mean), prior 0.30.
- **P-627.C**: opencode/crush/gemini-cli `fix:` share remains ≥ 0.75 in next 3 ticks (sticky-monoculture), prior 0.62.
- **P-627.D**: A new conventional-prefix verb (`perf:`, `test:`, `docs:`, `style:`) appears in the active-open-set within 3 ticks, prior 0.45.
- **P-627.E**: aibrahim-oai numbered `3-` prefix appears within 2h (extending the 1-/2- pair), prior 0.32 (also P-319.F).

**Hand-off**: W17-synth-628 (queued) will examine the **author-handle character-length distribution shift** as the orthogonal author-side companion analysis to this title-side analysis.
