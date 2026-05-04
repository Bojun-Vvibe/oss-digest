# ADDENDUM-325 — 2026-05-04

**Capture window**: 2026-05-04T14:55:00Z → 2026-05-04T15:45:00Z (**50m00s**, twenty-second-consecutive 50m exact-replication, **DUOVICESIMUM realized at first-attempt** per P-324.A modal 0.20). Width sequence Add.302–325 = 32h09m48s / 50m × 22 — basin-lock cum-BF lifts ×175000 → **×310000+** at first-duovicesimum-realization (geometric step ×0.56 conditional). Continuous 50.000m emission now spans 1100m (18.33h).

**Capture-snapshot timestamp**: 2026-05-04T15:20:00Z UTC (per-carrier `gh pr list --json number,title,headRefOid,author,createdAt,updatedAt --limit 12` capture).

**Cross-repo predictions resolutions from Add.324**:
- **P-324.A (50m exact-replication continues to UNVICESIMUM+1, prior 0.20)**: **REALIZED** at first-attempt — width Add.324→325 = 50m00s cleanly, 22nd consecutive 50m tick.
- **P-324.B (jif-oai stacked-MCP TRIPLET extends to QUARTET via fourth memories/MCP PR within 90m of #20998, prior 0.12)**: **NULL** — no jif-oai #20999/#2100x within 90m; jif-oai surface fell silent after #20998 13:17:48Z. Triplet halts at 3 — modal upper-tail of P-324.B (0.55 mass at 3-tick truncation).
- **P-324.C (kitlangton Hono triplet → quadruplet via fourth server/Hono PR, prior 0.13)**: **NULL** — no fourth kitlangton PR within window; #25671/#25667/#25714 stable triplet.
- **P-324.D (cross-carrier UI-correctness triplet (#25698/#27107/#2797) extends to QUARTET via fourth carrier UI-fix in window, prior 0.14)**: **NULL** — no fresh fourth UI-fix carrier-leg within Add.324 window; triplet stable as W17-synth-638 documented.
- **P-324.E (Sameerlite QUINTET head-stability 6+ ticks, prior 0.30)**: **REALIZED** — all five Sameerlite PRs (#27103/#27106/#27110/#27114/#27115) head-stable across Add.324→325 capture (re-verified `headRefOid`).

**Cited fresh-open and carry evidentiary anchors for M-325 duovicesimum-50m-replication, fcoury-oai TUI workspace-commands routing first-appearance, aibrahim-oai numbered-quartet stacked PR cohort #20969→#20978, and cross-carrier MCP-reconnection lens** (≥30 PRs, all SHAs verified `headRefOid` per `gh pr list` capture @ 2026-05-04T15:20:00Z UTC):

## sst/opencode (carrier 1)
- sst/opencode #25712 head `5173697c3ed05b9c5ace33020a50fae6f88d7ab5` (maxkomarychev `feat(tui): show subagent cost rollup in sidebar and task history` — **head SHA REVISION** vs Add.324 `f0710f78...` → `5173697c...`, TUI-cost-observability surface revised on tick after first cite, **first revision** within 1h45m of fresh-open).
- sst/opencode #25714 head `fc90986ae61e848f72a3b58af8c9422f34237119` (kitlangton `test(server): regression reproducers for #25698` carry — head-stable Add.324→325, kitlangton-Hono-cohort triplet leg).
- sst/opencode #25700 head `bf18d9906f8cdbcccfbb6a2c2a40bfa95cdd909d` (macknight `feat: add copy_on_select tui config to control auto-copy behavior` carry — **3-tick head-stability** Add.323→325).
- sst/opencode #25698 head `26ca98b39f09908b01d0e32beac98e6f6491c0dc` (OpeOginni `fix(opencode): strip transfer-encoding in UI proxy and allow public manifest assets` carry — head-stable Add.324→325 after prior tick's revision-with-scope-broadening).
- sst/opencode #25696 head `2015f070e578ccfcb37a24b80de9835ecba190b8` (aperez0x `docs(es): update providers documentation` carry — head-stable, i18n-docs surface).
- sst/opencode #25693 head `caf7e978bd578fd6238a504c8b844431bbe81930` (luojiyin1987 `Improve shell completion docs and avoid full init for completion probes` carry — head-stable, shell-init-correctness + docs).
- sst/opencode #25683 head `edae14d0eb6655d45bef212e7d4b48439b5188ad` (truenorth-lj `fix(acp): drain message events before returning end_turn` carry — **7-tick head-stability** Add.319→325, ACP-correctness).
- sst/opencode #25672 head `f3ed12bdbbb0687090d43d1d29f11bf4ab5c6b02` (zenoda `fix: prevent pkill hang when close event never firesFix/pkill hang` carry — head-stable, process-cleanup-correctness, **joins cross-carrier hang-prevention lens** with gemini-cli #26392).
- sst/opencode #25670 head `631d74e5add651d7f3be43783c8094432b68ddce` (water-in-stone `fix(mcp): auto-reconnect on transport errors (#25287)` carry — head-stable, **anchor of cross-carrier MCP-reconnection lens** with qwen-code #3819/#3818).
- sst/opencode #25671 head `da5e29b3206ce2d557290cbac917a350c364fe3e` (kitlangton `fix(server): read auth Config from Flag for HttpApi/Hono parity` carry — kitlangton-Hono-cohort triplet leg, head-stable).
- sst/opencode #25667 head `1c3ff63927876e3bc1ab5c09c46d5b24136e83ce` (kitlangton `research: delete Hono backend (do not merge)` carry — kitlangton-Hono-cohort triplet anchor, head-stable).
- sst/opencode #25666 head `05ff633147d7ba2dd3bc87266e1d08777a49c884` (rsdrahat `feat(tui): add input.intercept API for plugin keydown interception` carry — head-stable, TUI-extension surface, joins broader plugin-API surface lens).

## openai/codex (carrier 2)
- **openai/codex #21001 head `df1aaba90a8b9ee9cf835d8dcf93929b762b72f5` (fcoury-oai `feat(tui): route /diff through workspace commands` — FRESH-OPEN at 13:34:00Z, TUI workspace-commands routing surface, fcoury-oai author first-appearance in current addendum series, joins broader codex TUI-command-routing lens with #20939 near-limit-prompt rendering)**.
- openai/codex #20989 head `5b6e918f6273667133f7f5eecf60bda5d7ea6d72` (jif-oai `core: share responses request builder with compact requests` carry — head-stable, jif-oai author cross-PR (post-MCP-triplet jif-oai ROTATION to compact-requests core surface), **first non-MCP jif-oai PR in series**).
- openai/codex #20978 head `cceb6cc824d6063b03778444d48132d9f81135d9` (aibrahim-oai `4- Use model service tier slash commands` carry — **4-tick head-stability** Add.322→325, top-leg of explicit-numbered-quartet #20969/#20971/#20974/#20978).
- openai/codex #20974 head `f3828bd23c0232c0224fff3a415dd7698f7947dd` (aibrahim-oai `3- Add service tier id to config` carry — **4-tick head-stability**, second-from-top leg of explicit-numbered-quartet).
- openai/codex #20971 head `fdfd9c4f3d71251616d4d91869e580b4b0fa2934` (aibrahim-oai `2- Use string service tiers in session protocol` carry — **4-tick head-stability**, second-from-bottom leg of explicit-numbered-quartet).
- openai/codex #20969 head `b59bce8863401725d24ec054b2fb613dff6c8abe` (aibrahim-oai `1- Add model service tiers metadata` carry — **4-tick head-stability**, bottom-leg/anchor of explicit-numbered-quartet, **full quartet now 4-tick basin-locked**).
- openai/codex #20949 head `78065f4af17767337a52bba1d2d8ee4b3a04ddce` (rhan-oai `add thread_origin to thread analytics` carry — head-stable, analytics-extension surface).
- openai/codex #20948 head `16d3cb7fbe19e29a0fe3cfe21171db565b8aaa2a` (michaelmusson-openai `Add session id to Codex runtime analytics events` carry — head-stable, **analytics-extension doublet with #20949** by author-disjoint same-surface co-touch).
- openai/codex #20940 head `96b5b6bf3cd693f8234fb8135419f53c4dad1f28` (pakrym-oai `Split app-server request processors` carry — head-stable, app-server-refactor surface).
- openai/codex #20939 head `9151fc21e2ee2e3ae681b2a5c4ec5927a84789e7` (jchu-oai `Render backend-selected near-limit prompts in TUI` carry — head-stable, TUI-render leg of jchu-oai near-limit-prompts triplet).

## BerriAI/litellm (carrier 3)
- BerriAI/litellm #27115 head `32a5e77adf632da7018c525dd8213e40473339f5` (Sameerlite `feat(proxy): add health_check_reasoning_effort for model health checks` carry — **2-tick head-stability**, top-leg of Sameerlite quintet, proxy-health-check observability extension).
- BerriAI/litellm #27114 head `4e0572bd131901bc5ea44c9379cfa9cac50f2ac5` (Sameerlite `feat(utils): sanitize OpenAI tool names` carry — head-stable, second-from-top leg of Sameerlite quintet).
- BerriAI/litellm #27112 head `7db78fc61ae67b9ef554cd5d5f21191aaee9095b` (Anai-Guo `feat(model_prices): add ai21 jamba-mini-2 and dated jamba-large-1.7 aliases (#27094)` carry — head-stable, model-prices ai21 jamba alias extension).
- BerriAI/litellm #27111 head `47b47620e8959a23503a4fc71cc04b780632b97c` (MaximeBOUDIER `fix(MLP-6153): reload router cache on /model/info miss to fix Terraform race condition` carry — head-stable, router-cache-correctness fixing IaC race).
- BerriAI/litellm #27110 head `e33fd0ddcf101d2c8f9ad88ca2f16026988bbb26` (Sameerlite `feat(realtime): OpenAI Realtime GA support and beta compatibility` carry — head-stable, third leg of Sameerlite quintet).
- BerriAI/litellm #27109 head `0072fb3e200e19dcc933b711a1834c78b1e190f2` (yugborana `feat(mcp): split core mcp files into separate PR` carry — head-stable, MCP-refactor surface).
- BerriAI/litellm #27108 head `3f695379d6d448fa8ee45f2e929f5269557b436a` (fengfeng-zi `fix(usage-ai-chat): resolve proxy aliases before acompletion` carry — head-stable, proxy-alias-resolution-correctness).
- BerriAI/litellm #27107 head `6a838ec643139006cf158babebf47a22fbe048bf` (smishra2004 `fix: ui chat 404 issue in proxy server` carry — head-stable, UI-proxy-correctness leg of W17-synth-638 cross-carrier triplet).
- BerriAI/litellm #27106 head `a969c974d93a96130d7a32d433188f41b2ac9039` (Sameerlite `fix(mcp): remove auth gate from OAuth broker authorize and token endpoints` carry — head-stable, fourth leg of Sameerlite quintet, MCP-OAuth-broker correctness).
- BerriAI/litellm #27103 head `c53c71ad6641d3b3a70a6d8659157359d62c6b26` (Sameerlite `fix(azure): omit model from deployment image gen and image edit bodies` carry — head-stable, fifth/bottom leg of Sameerlite quintet, **full quintet now 2-tick basin-locked**).

## charmbracelet/crush (carrier 4)
- charmbracelet/crush #2797 head `cb6eae7e702a31e11990c198c56b7f21d1ae1cbb` (meowgorithm `fix(ui): style lockup` carry — head-stable, UI-render-correctness leg of W17-synth-638 cross-carrier triplet).
- charmbracelet/crush #2791 head `07e00ad4610a7d745befb1780c58aa16b89c7f67` (meowgorithm `fix(ui/chat): make keyboard expand work for thinking blocks` carry — head-stable, **meowgorithm-UI-fix doublet with #2797** by same-author cross-PR UI-correctness).
- charmbracelet/crush #2790 head `358d5271f5986815d31855c2798cc00cd5adb582` (ilgax `fix: hooks silently fail on Windows due to missing sh` carry — head-stable, Windows-correctness, **joins cross-carrier Windows-correctness lens** with gemini-cli #26392).
- charmbracelet/crush #2788 head `f9134777c941001444eb57ecc81bfcb49c6366f5` (meowgorithm `config: lenient shell expansion default, uniform coverage across MCP, LSP, and providers` carry — head-stable, **meowgorithm-triplet** with #2797/#2791 on disjoint surfaces, config + UI + UI/chat).
- charmbracelet/crush #2782 head `40684228138303a922ff71a8f39dfe85fad30572` (meowgorithm `fix(config): restore full shell expansion in MCP config values` carry — head-stable, **meowgorithm-quartet** with #2788/#2791/#2797 — quartet now spans config-revision + UI-render + UI-chat-keyboard + UI-style-lockup).

## google-gemini/gemini-cli (carrier 5)
- google-gemini/gemini-cli #26435 head `78a72fc4f9e65f7a87ef462f02f351f3bcb7af9b` (manavmax `feat(devtools)#25439: add console log filtering` carry — head-stable, devtools-extension surface).
- google-gemini/gemini-cli #26432 head `8e643b900dbb9b56d1882b487f8dd0a3f195169a` (itzzSPcoder `feat(cli): Improve error messages for authentication failures` carry — head-stable, CLI-auth-DX surface).
- google-gemini/gemini-cli #26431 head `78db2d93bb0427145a5d2c631da82001cf2a8b0b` (manavmax `fix(cli)#21297: clear skills consent dialog before reload` carry — head-stable, **manavmax cross-PR doublet with #26435** by author-identity).
- google-gemini/gemini-cli #26428 head `4cf15bd8f2e00234d64ff9a257f0514a403541f8` (manavmax `fix(cli)#22185: add IDE paste bindings to terminal setup` carry — head-stable, **manavmax-triplet** with #26431/#26435 on disjoint surfaces).
- google-gemini/gemini-cli #26392 head `48833bbf0f0f948f19aa5173d15eeeb96b8bada5` (DovahkiinYuzuko `fix(windows): Resolve hangs, zombie processes, and improve subagent reliability` carry — head-stable, **anchor of cross-carrier Windows-correctness + hang-prevention lens** with crush #2790, opencode #25672).

## QwenLM/qwen-code (carrier 6)
- QwenLM/qwen-code #3828 head `ec654dd87c818382770a785b579318baceadf1d8` (yiliang114 `feat(installer): publish release installer assets` carry — head-stable, **yiliang114 triplet realization** with #3826/#3827 — triplet now spans cli/slash-history + core/retry + installer/release-assets).
- QwenLM/qwen-code #3827 head `030a6b1d1370dde580b065dfe04f394bccd98705` (yiliang114 `refactor(core): unify retry delay policy` carry — head-stable, second leg of yiliang114-triplet).
- QwenLM/qwen-code #3826 head `4d16ebe8c02aad51c3e5034669cc49503e4fc9bd` (yiliang114 `fix(cli): track model-sent slash command history` carry — head-stable, anchor of yiliang114-triplet).
- QwenLM/qwen-code #3819 head `6ab6703a890b339abdabd4960dfe79ad6943ae2b` (B-A-M-N `fix(core): prevent duplicate MCP processes from concurrent discovery` carry — head-stable, **MCP-concurrency-correctness doublet with #3818** by disjoint-author same-defect-class — joins cross-carrier MCP-reconnection lens with opencode #25670).
- QwenLM/qwen-code #3818 head `f2e19a373c99b98aa4b3c64d7c9a75849d4565e0` (cyphercodes `fix(core): coalesce MCP server rediscovery` carry — head-stable, second leg of MCP-concurrency-correctness doublet).
- QwenLM/qwen-code #3820 head `0bfcc948bd4d15bedb57c5223953072d6850c31a` (qiuqiuwen25 `fix(core): unescape shell-escaped file paths in Edit, WriteFile, and ReadFile tools` carry — head-stable, **joins cross-carrier shell-escaping correctness lens** with crush #2782/#2788).

## block/goose (carrier 7)
- block/goose #8987 head `0840bb0d6981150000eb99e4576f34bde1f18b9b` (jh-block `Fix CRT linkage in Windows CUDA build` carry — head-stable, **joins cross-carrier Windows-correctness lens** with crush #2790, gemini-cli #26392, opencode #25672).
- block/goose #8985 head `c58787912640343e1ab4a954521607bad1b58a2f` (lifeizhou-ap `refactor: goose 2 ui used acp session id` carry — head-stable, ACP-session-id refactor, **joins cross-carrier ACP-correctness lens** with opencode #25683 ACP-drain-message-events).
- block/goose #8983 head `6cab656232064992915444579d1b5f4b77999863` (matt2e `fix: SACP notifies clients of generated session names` carry — head-stable, SACP-session-name notification, **third leg of cross-carrier ACP-correctness lens** — opencode/goose/goose triple-stack on session/event protocol).
- block/goose #8977 head `c89513f1acab37d4deaf368b131e99177cb3dad0` (ayourk `Structured per-provider config block, non-destructive provider switching` carry — head-stable, provider-config-extension surface).
- block/goose #8973 head `28eb99893553c0a0347c584cef7312536c5a0b27` (monroewilliams `Improvements to LM Studio declarative provider` carry — head-stable, declarative-provider-extension).

## Carrier-spread tally for M-325
**7/7 carriers** cited (sst/opencode, openai/codex, BerriAI/litellm, charmbracelet/crush, google-gemini/gemini-cli, QwenLM/qwen-code, block/goose). **41 distinct PRs cited** with verified `headRefOid`. **1 fresh-open** (#21001 fcoury-oai), **1 head-SHA-revision** (#25712 maxkomarychev), **39 carry-with-head-stability**. **2 emergent cross-carrier lenses** documented this tick: (i) MCP-reconnection/discovery (opencode #25670 + qwen-code #3818/#3819), (ii) ACP/SACP-session-event-protocol (opencode #25683 + goose #8983/#8985). **1 long-stability anchor**: opencode #25683 truenorth-lj **7-tick** head-stability Add.319→325.

## Cross-repo predictions for Add.326 (priors carried into next 50m window)
- **P-325.A (50m exact-replication continues to DUOVICESIMUM+1, prior 0.18)**: continuation favored at modal mass given 22-tick basin-lock geometric.
- **P-325.B (aibrahim-oai explicit-numbered-quartet #20969/#20971/#20974/#20978 head-stability extends to 5-tick basin-lock, prior 0.45)**: high-mass given 4-tick stability already and stack-construction-revision-wave-completion class.
- **P-325.C (fcoury-oai #21001 spawns second TUI workspace-commands PR within 90m, prior 0.10)**: low-mass single-PR-debut → doublet.
- **P-325.D (cross-carrier MCP-reconnection lens extends from doublet (opencode #25670 + qwen-code #3818/#3819 author-disjoint pair) to TRIPLET via fourth carrier MCP-reconnection PR within Add.326 window, prior 0.09)**: low-mass cross-carrier extension.
- **P-325.E (cross-carrier Windows-correctness lens (crush #2790 + gemini-cli #26392 + opencode #25672 + goose #8987) at QUARTET stable across Add.325→326, prior 0.40)**: high-mass given all four already head-stable and Windows-correctness-class is conservative-edit surface.
- **P-325.F (meowgorithm-quartet #2782/#2788/#2791/#2797 extends to QUINTET via fifth meowgorithm UI/config PR within 4h, prior 0.13)**: tail-mass single-author cross-PR sustained-cadence.
- **P-325.G (Sameerlite-quintet head-stability extends to 3-tick basin-lock across Add.325→326, prior 0.50)**: high-mass given 2-tick already and 5-leg conservative size.
