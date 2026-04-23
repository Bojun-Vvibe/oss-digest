# anomalyco/opencode — 2026-04-17

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-04-16T23:59:59.000Z → 2026-04-17T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Three patch releases shipped in a single day — **v1.4.8**, **v1.4.9**, and **v1.4.10** — all driven by workspace/remote-session hardening and a steady flow of incremental fixes. If you only read one thing, skim the v1.4.10 notes: it restores workspace history on reconnect, normalizes provider metadata so models still load with incomplete catalog data, and threads OTEL exporter settings through managed workspaces (#23121, #23140, #23154).

The day's most consequential feature is the new **LLM Gateway provider** (#7847, @smakosh), landing in v1.4.9 with config support and model usage reporting. Alongside it, GitHub Copilot Opus 4.7 variants are now restricted to "medium" reasoning effort to avoid unsupported modes (#23097), and the Copilot model list filters out disabled models (#23176). Remote workspace reconnection got exponential backoff (#23083) plus more explicit routing to fix instance-selection bugs (#23150, #23171).

A large parallel thread of work from @kitlangton is the **migration of config schemas to Effect Schema** — model-id/command (#23175), permissions (#23168), LSP (#23167), MCP via Schema.Class (#23163), skills/formatter/console-state (#23162), plus tuple support and a zod superRefine bridge (#23178, #23173). @thdxr migrated config loading itself to the Effect framework (#23032) and consolidated the npm install API around object-based package specs (#23181, #23151). HTTP routes for projects, providers, and config-providers were moved onto HttpApi (#23003, #23004). Net effect: a noticeable architectural shift toward Effect across core, worth a look if you track this codebase's internals.

Smaller but user-visible fixes: prompt input is preserved across unmount/remount (#22508), `--session-id` now navigates correctly post-init, light-mode detection in Ghostty is fixed, revert diffs show real filenames instead of `/dev/null` (#23006), Azure prompt caching is enabled with a default per-session key, and plugin tools can return metadata in execute results (#22827). The beta desktop app conditionally hides the file tree (#23099) and titlebar tools moved behind a setting (#19029). No new issues or PRs were opened in the window — activity was entirely merge-and-ship on `dev`.

## Releases

- **[v1.4.10](https://github.com/anomalyco/opencode/releases/tag/v1.4.10)** — v1.4.10 _by @opencode-agent[bot] at 2026-04-17T20:13:50Z_
  > ## Core
  > 
  > - Restored workspace history on connect so existing sessions catch up before live sync resumes
  > - Passed OTEL exporter settings into managed workspaces so telemetry works there too
  > - Normalized provider metadata defaults so models still load when catalog data is incomplete
  > - Passed `EXA_API_KEY` to the `websearch` tool to reduce rate limits (@rasdani)
  > 
  > ## TUI
  > 
  > - Added a restore flow for sessions whose workspace is unavailable, with clearer workspace status indicators
  > - Fixed agent cyclin…
- **[v1.4.9](https://github.com/anomalyco/opencode/releases/tag/v1.4.9)** — v1.4.9 _by @opencode-agent[bot] at 2026-04-17T16:20:14Z_
  > ## Core
  > - Added LLM Gateway as a provider, including config support and model usage reporting. (@smakosh)
  > - Limited GitHub Copilot Opus 4.7 models to medium reasoning effort to avoid unsupported variants. (@OpeOginni)
  > - Improved remote workspace reconnection with exponential backoff and clearer failure handling.
  > 
  > ## TUI
  > - Fixed `--session-id` so it opens the requested session after app startup.
  > - Fixed light mode detection in Ghostty.
  > 
  > ## Desktop
  > - Fixed the beta desktop app so the file tree sti…
- **[v1.4.8](https://github.com/anomalyco/opencode/releases/tag/v1.4.8)** — v1.4.8 _by @opencode-agent[bot] at 2026-04-17T13:37:31Z_
  > ## Core
  > 
  > - Fixed a crash when experimental mode was enabled.
  > - Let plugin tools return metadata in execute results. (@jquense)
  > - Show real filenames instead of `/dev/null` in revert diffs.
  > - Improved workspace session handling when a workspace no longer exists.
  > - Fixed Windows `ctrl+z` terminal suspend and input undo behavior.
  > - Enabled Azure prompt caching with a default per-session cache key.
  > 
  > ## TUI
  > 
  > - Preserve prompt input when views unmount and remount.
  > - Keep session list dialogs ordered m…


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`cded68a`](https://github.com/anomalyco/opencode/commit/cded68a2e2e233b8026c50408771b25d0f4e9682) refactor(npm): use object-based package spec for install API (#23181) — _@thdxr_
- [`0068cce`](https://github.com/anomalyco/opencode/commit/0068ccec35493e2657678a4ab0654a278bd14685) fix: ensure copilot model list filters out disabled models (#23176) — _@rekram1-node_
- [`89e8994`](https://github.com/anomalyco/opencode/commit/89e8994fd15c4ac1235930a07e0b6e37254df22b) chore: generate — _@opencode-agent[bot]_
- [`5980b0a`](https://github.com/anomalyco/opencode/commit/5980b0a5eeb8f7a8dc31433f86e458dbe3358269) feat(effect-zod): add tuple support; migrate config/plugin to Effect Schema (#23178) — _@kitlangton_
- [`89029a2`](https://github.com/anomalyco/opencode/commit/89029a20ef1548f6637c15f63f39f281e4a6dae7) chore: generate — _@opencode-agent[bot]_
- [`ce69bd9`](https://github.com/anomalyco/opencode/commit/ce69bd97b90200a4d9794bd0409d3b4bb7996e54) refactor(config): migrate model-id and command to Effect Schema (#23175) — _@kitlangton_
- [`999d865`](https://github.com/anomalyco/opencode/commit/999d8651aab7f9531539f686f685375fcbb19437) feat(server): wrap remaining route handlers in request spans (#23169) — _@kitlangton_
- [`ed0f022`](https://github.com/anomalyco/opencode/commit/ed0f0225025336ad84c04210850fcd7bfb38f221) chore: generate — _@opencode-agent[bot]_
- [`b1307d5`](https://github.com/anomalyco/opencode/commit/b1307d5c2a41c12d6696b31fe46bea7882993753) refactor(config): migrate skills, formatter, console-state to Effect Schema (#23162) — _@kitlangton_
- [`dc16013`](https://github.com/anomalyco/opencode/commit/dc16013b4f0aa5e4d3eb433046965e1274da3990) chore: generate — _@opencode-agent[bot]_
- [`e7686db`](https://github.com/anomalyco/opencode/commit/e7686dbd643241f7e4ebf4a5e37e5ef33ad7797f) feat(effect-zod): translate Schema.check filters into zod .superRefine + promote LSP refinement to Effect layer (#23173) — _@kitlangton_
- [`47f553f`](https://github.com/anomalyco/opencode/commit/47f553f9ba9d98056fa5a20fd1a4e6d4d63df016) fix(core): more explicit routing to fix workspace instance issue (#23171) — _@jlongster_
- [`d11268e`](https://github.com/anomalyco/opencode/commit/d11268ece76d132108feda4bb91f0caacac51719) refactor(config): migrate permission Action/Object/Rule leaves to Effect Schema (#23168) — _@kitlangton_
- [`650a13a`](https://github.com/anomalyco/opencode/commit/650a13a6908e23c30e07329f9f3ec816d7a6f2a7) refactor(config): migrate lsp schemas to Effect Schema (#23167) — _@kitlangton_
- [`5443532`](https://github.com/anomalyco/opencode/commit/54435325b6adf292d720885622f1282eaed98c92) chore: generate — _@opencode-agent[bot]_
- [`11fa257`](https://github.com/anomalyco/opencode/commit/11fa257549a1094b43d25f014e54557ed6aab660) refactor(config): migrate mcp schemas to Effect Schema.Class (#23163) — _@kitlangton_
- [`6af8ab0`](https://github.com/anomalyco/opencode/commit/6af8ab0df201e245fac503aa8822750662ebf6b9) docs(http-api): refresh bridge inventory and clarify Schema.Class vs Struct (#23164) — _@kitlangton_
- [`984f5ed`](https://github.com/anomalyco/opencode/commit/984f5ed6eb0cbf3048d8c1dbd8f643f5a01d2501) fix(opencode): skip share sync for unshared sessions (#23159) — _@kitlangton_
- [`c2061c6`](https://github.com/anomalyco/opencode/commit/c2061c6bbfa83147792ab9aec251cf193ccb6b0d) chore: generate — _@opencode-agent[bot]_
- [`b708e84`](https://github.com/anomalyco/opencode/commit/b708e8431ec3fcda2a53a3c3e3b8608e5edfb16d) docs(opencode): annotate plugin loader flow (#23160) — _@thdxr_
- [`9b6c397`](https://github.com/anomalyco/opencode/commit/9b6c3971712baaecacb1d09eb21c4d6f77955622) release: v1.4.10 — _@opencode_
- [`9b0659d`](https://github.com/anomalyco/opencode/commit/9b0659d4f9b64cb2416bb340c503037d0778349e) chore: generate — _@opencode-agent[bot]_
- [`f83ceca`](https://github.com/anomalyco/opencode/commit/f83cecaaf6ee29da70109575595901884cdbc312) fix(opencode): untrace streaming event hot paths (#23156) — _@kitlangton_
- [`aa05b9a`](https://github.com/anomalyco/opencode/commit/aa05b9abe5ff3a4b29b72fb878be969567eda5bb) fix(core): pass OTEL config to workspace env (#23154) — _@jlongster_
- [`68834cf`](https://github.com/anomalyco/opencode/commit/68834cfcc37ce51c1b0b4895b9563a86f1611c9a) fix(opencode): normalize provider metadata and tag otel runs (#23140) — _@kitlangton_
- [`5621373`](https://github.com/anomalyco/opencode/commit/5621373bc2d5ca106e9fbb2d2fbc3bc547dd744c) fix(core): move instance middleware after control plane routes (#23150) — _@jlongster_
- [`8858256`](https://github.com/anomalyco/opencode/commit/88582566bf2bfd2d26000f0c25735bf48ddeca00) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`d6e1362`](https://github.com/anomalyco/opencode/commit/d6e1362fee569e9d9fa9bc0c6c982f64b2027b30) chore: generate — _@opencode-agent[bot]_
- [`b275b85`](https://github.com/anomalyco/opencode/commit/b275b8580d7bd3b884cf535e28c1b826759eb14b) feat(tui): minor UX improvements for workspaces (#23146) — _@jlongster_
- [`467be08`](https://github.com/anomalyco/opencode/commit/467be08e679d82c20164870f067eb759abe5f6ec) refactor: consolidate npm exports and trace flock acquisition (#23151) — _@thdxr_
- [`bbb422d`](https://github.com/anomalyco/opencode/commit/bbb422d1250da1400c9c228d363bebb336e238ca) chore: bump ai to 6.0.168 and @ai-sdk/gateway to 3.0.104 (#23145) — _@rekram1-node_
- [`b1f0765`](https://github.com/anomalyco/opencode/commit/b1f076558cf75c9ae5322f6195e68c3c380e3f9c) test: align plugin loader npm mocks — _@thdxr_
- [`992435a`](https://github.com/anomalyco/opencode/commit/992435aaf8371dc784f9f3489e998e5c93451d18) do not flock until reify — _@thdxr_
- [`2f73e73`](https://github.com/anomalyco/opencode/commit/2f73e73e9d03262fb59d4e942b3e1e073cb76cb9) trace npm fully — _@thdxr_
- [`4c30a78`](https://github.com/anomalyco/opencode/commit/4c30a78cd9623fe8f3a7c27860a7b8a0cc760e39) fix: revert sdk generation script change (#23133) — _@jlongster_
- [`a8c78fc`](https://github.com/anomalyco/opencode/commit/a8c78fc005a9a1cff3622a68f65b1df550cb2ccc) fix(core): add historical sync on workspace connect (#23121) — _@jlongster_
- [`fcb473f`](https://github.com/anomalyco/opencode/commit/fcb473ff64f0767461c27db8942ce41df3e115d3) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`797953c`](https://github.com/anomalyco/opencode/commit/797953c88d29319deb8e003594f31fe6d2e9b8b3) when generating sdk only format sdk, much faster (#23122) — _@jlongster_
- [`ce0cfb0`](https://github.com/anomalyco/opencode/commit/ce0cfb0ea5c86af77b97fc41e9076721f601c052) chore: generate — _@opencode-agent[bot]_
- [`13dfe56`](https://github.com/anomalyco/opencode/commit/13dfe569efda341cb7b6d4d163e4aee471e65043) tui: fix agent cycling and prompt metadata polish (#23115) — _@kitlangton_
- [`c491161`](https://github.com/anomalyco/opencode/commit/c491161c0c6b69fe95672bba395a13b506940512) chore: bump @ai-sdk/anthropic to 3.0.71 and dependents (#23120) — _@rekram1-node_
- [`fde3d91`](https://github.com/anomalyco/opencode/commit/fde3d9133bdf53d5bab9cf44f7f9ec4a23ae4fb4) fix(opencode): pass `EXA_API_KEY` to `websearch` tool to avoid rate limits (#16362) — _@rasdani_
- [`0d582f9`](https://github.com/anomalyco/opencode/commit/0d582f9d3f9b20d5443fdee72aaf653778bf885e) chore: bump gitlab-ai-provider to 6.6.0 (#23057) — _@vglafirov_
- [`1a59133`](https://github.com/anomalyco/opencode/commit/1a5913316850b256e497b899e29f7995302dcfa0) Improve light mode dark mode copy — _@thdxr_
- [`803d9eb`](https://github.com/anomalyco/opencode/commit/803d9eb7ad5f4dfd832d7506a7cad83ded52253e) release: v1.4.9 — _@opencode_
- [`a27d3c1`](https://github.com/anomalyco/opencode/commit/a27d3c162335946d3e6ed8a6a5a621006a88511e) tui: fix session resumption with --session-id flag to navigate after app initialization — _@thdxr_
- [`551216a`](https://github.com/anomalyco/opencode/commit/551216a452836a033e35bf88f64845bc966eef8f) fix incorrect light mode in ghostty — _@thdxr_
- [`38cd397`](https://github.com/anomalyco/opencode/commit/38cd3979f20b4d7842268b501568bf930b8e867a) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`3fe602c`](https://github.com/anomalyco/opencode/commit/3fe602cda3e34761256c53254accc46abdff1c17) feat: add LLM Gateway provider (#7847) — _@smakosh_
- [`3a4b490`](https://github.com/anomalyco/opencode/commit/3a4b49095c5273383ea581dfbc31628d80ac43a2) chore: generate — _@opencode-agent[bot]_
- [`ac5b395`](https://github.com/anomalyco/opencode/commit/ac5b395c5d709378592ea6b3ab8c9fe5061b53d5) docs: adding Mistral to docs as a provider (it is already a provider, just docs update) #23070 (#23072) — _@jenperson_
- [`8fbbca5`](https://github.com/anomalyco/opencode/commit/8fbbca5f4bf6a7a971ce49d7ac2c8122767f5308) fix(opencode): rescrict github copilot opus 4.7 variants to "medium" (#23097) — _@OpeOginni_
- [`2415820`](https://github.com/anomalyco/opencode/commit/2415820ecdacf1c8a7c94572297515036207238e) fix: conditionally show file tree in beta channel (#23099) — _@Brendonovich_
- [`20103eb`](https://github.com/anomalyco/opencode/commit/20103eb97be978deec529b718e15678875462098) sync — _@fwang_
- [`10c4ab9`](https://github.com/anomalyco/opencode/commit/10c4ab9a3d63dc55ecba89985c3fd23517e769fd) roll back opentui — _@thdxr_
- [`7e39c9b`](https://github.com/anomalyco/opencode/commit/7e39c9b95001ce93d2f3124fe12fb307ea5427be) back to opentui 0.1.99 — _@thdxr_
- [`cc063d4`](https://github.com/anomalyco/opencode/commit/cc063d4c32a9d9800a27b4e73fc46781e2c2f08b) chore: generate — _@opencode-agent[bot]_
- [`3707e4a`](https://github.com/anomalyco/opencode/commit/3707e4a49cb97639408a9e0da7cf148ca5ce8834) zen: routing logic — _@fwang_
- [`cb425ac`](https://github.com/anomalyco/opencode/commit/cb425ac927cde685ef9b6e38a62ad71c408a47df) chore: generate — _@opencode-agent[bot]_
- [`0f80c82`](https://github.com/anomalyco/opencode/commit/0f80c827ed2f0ee32f8dfb8812605ed64ab47254) feat(core): exponential backoff of workspace reconnect (#23083) — _@jlongster_
- [`fffc496`](https://github.com/anomalyco/opencode/commit/fffc496f41ffc2be3149dbd2faf9a577be0a390a) remove log — _@thdxr_
- [`06ae439`](https://github.com/anomalyco/opencode/commit/06ae43920b3f2384187135cbd71248a8f49ba98f) release: v1.4.8 — _@opencode_
- [`e78d75a`](https://github.com/anomalyco/opencode/commit/e78d75a003acfdbd9263753913d1bee395ef652a) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`ec3ac0c`](https://github.com/anomalyco/opencode/commit/ec3ac0c4b0a78d0f4de268a1d54401182497fabc) upgrade opentui to 0.1.100 (#22928) — _@kommander_
- [`c57c531`](https://github.com/anomalyco/opencode/commit/c57c5315c17e1648d6699abd25db8ee195f44de1) chore: generate — _@opencode-agent[bot]_
- [`a726530`](https://github.com/anomalyco/opencode/commit/a7265307355e7efed9e276da6625c96458009db6) fix(app): workspace loading and persist ready state (#23046) — _@Brendonovich_
- [`d995059`](https://github.com/anomalyco/opencode/commit/d9950598d0da16fc0f8e6c289050a9d3da055af7) core: migrate config loading to Effect framework (#23032) — _@thdxr_
- [`81f0885`](https://github.com/anomalyco/opencode/commit/81f0885879f1e89b21774fc1fc6c603bd0ecd967) chore: generate — _@opencode-agent[bot]_
- [`65b2a10`](https://github.com/anomalyco/opencode/commit/65b2a10e97d34e6b8a832a69b5a75f90f21e076c) fade in prompt metadata transitions (#23037) — _@thdxr_
- [`7605acf`](https://github.com/anomalyco/opencode/commit/7605acff650db0d41d80429b662b5c0725d89675) refactor(core): move server routes around to clarify workspacing (#23031) — _@jlongster_
- [`e7f8f7f`](https://github.com/anomalyco/opencode/commit/e7f8f7fa3bceab49b1606de72d969be63c3e8785) fix crash on experimental — _@thdxr_
- [`72d7cb7`](https://github.com/anomalyco/opencode/commit/72d7cb717d5b2994a525257cd7fccf0533ca34ee) remove accidental commit of daytona plugin (#23030) — _@jlongster_
- [`f0caeb9`](https://github.com/anomalyco/opencode/commit/f0caeb9b25ae4f57232a152a4e1c8bdd823e2f65) chore: generate — _@opencode-agent[bot]_
- [`76a1410`](https://github.com/anomalyco/opencode/commit/76a141090ea33da574d06e17cd1c5dbddbde2952) chore: delete filetime module (#22999) — _@rekram1-node_
- [`4bd5a15`](https://github.com/anomalyco/opencode/commit/4bd5a158a5cbc09ac52df8dc7001fb3dc4110506) fix: preserve prompt input across unmount/remount cycles (#22508) — _@thdxr_
- [`dfaae14`](https://github.com/anomalyco/opencode/commit/dfaae1454454f02db7879ad7bdfd8a18feba83b5) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`79e9baf`](https://github.com/anomalyco/opencode/commit/79e9baf55acd6b5d2c8b49486cbd6a507897bf84) fix(app): use fetchQuery instead of ensureQueryData in global sync (#23025) — _@Brendonovich_
- [`a488229`](https://github.com/anomalyco/opencode/commit/a4882290aa0a0f12c6ba849ce23cda4991017337) Merge branch 'dev' into nxl/improve-compaction-strategy — _@Brendonovich_
- [`9ee89f7`](https://github.com/anomalyco/opencode/commit/9ee89f7868bbdb5b412b9b475c41af22ac4f2a20) refactor: move project read routes onto HttpApi (#23003) — _@kitlangton_
- [`67dbb3c`](https://github.com/anomalyco/opencode/commit/67dbb3cf18279c1a8f3f60e242d9b09e1270d01a) chore: generate — _@opencode-agent[bot]_
- [`4260c40`](https://github.com/anomalyco/opencode/commit/4260c40efa332deeebaf730382d5388adc95d024) refactor(tui): inline final Go shimmer settings (#23017) — _@kitlangton_
- [`0bedea5`](https://github.com/anomalyco/opencode/commit/0bedea52b19515c69057866ec958769004147f66) fix(tui): tui resiliency when workspace is dead, disable directory filter in session list (#23013) — _@jlongster_
- [`fbbab9d`](https://github.com/anomalyco/opencode/commit/fbbab9d6c8a03c4cd5bed0d13a85f52e3aca47ce) feat(app): hide desktop titlebar tools behind settings (#19029) — _@jayair_
- [`cccb907`](https://github.com/anomalyco/opencode/commit/cccb907a9b3df7eb6fae71ee9e2392dccc73e9d3) feat(tui): animated GO logo + radial pulse in free-limit upsell dialog (#22976) — _@kitlangton_
- [`ee7339f`](https://github.com/anomalyco/opencode/commit/ee7339f2c6a4575a81bcaff2240076571db03e11) refactor: move provider and config provider routes onto HttpApi (#23004) — _@kitlangton_
- [`c51f3e3`](https://github.com/anomalyco/opencode/commit/c51f3e35cabb5cbb49d4fddc240b880c58286a97) chore: retire namespace migration tooling + document module shape (#23010) — _@kitlangton_
- [`7b3bb9a`](https://github.com/anomalyco/opencode/commit/7b3bb9a76181c478553b9319b734354f988cdac3) fix: preserve plugin tool metadata in execute result (#22827) — _@jquense_
- [`dc38f22`](https://github.com/anomalyco/opencode/commit/dc38f22bd8fcb77347759069f7082d15d1c95f29) chore: generate — _@opencode-agent[bot]_
- [`220e3e9`](https://github.com/anomalyco/opencode/commit/220e3e9a2bbd9578f84ec28b6db2b59c7a5a1b7f) refactor: make formatter config opt-in (#22997) — _@thdxr_
- [`f135c0b`](https://github.com/anomalyco/opencode/commit/f135c0b5eefae50e95f549002aea4bd1e510c4f7) app: use tanstack query to load session vcs state (#22277) — _@Brendonovich_
- [`ebe6ea5`](https://github.com/anomalyco/opencode/commit/ebe6ea580d6f7985b5ae805f373454079f1ca116) chore: generate — _@opencode-agent[bot]_
- [`ee70804`](https://github.com/anomalyco/opencode/commit/ee708040f6c21b6779ed3d0795928a56a78b8416) fix: prefer real undo filenames over /dev/null (#23006) — _@thdxr_
- [`61c4815`](https://github.com/anomalyco/opencode/commit/61c4815a372e28518fb0761ea4e53849b94d20b0) refactor: unwrap FileWatcher namespace + self-reexport (redo) (#23000) — _@kitlangton_
- [`01bb54a`](https://github.com/anomalyco/opencode/commit/01bb54a94dba8e797dbe45d083027ff9002a5575) refactor: split config parsing steps (#22996) — _@thdxr_
- [`f592c38`](https://github.com/anomalyco/opencode/commit/f592c3846b285a53d9f657d1eb57f124d5b9b18b) refactor: convert Flag namespace to const object with getters (#22984) — _@kitlangton_
- [`c026e25`](https://github.com/anomalyco/opencode/commit/c026e25088bcd8668fba7333f97be03b70971f30) refactor: eliminate account/ barrel, route consumers to sibling files (#22995) — _@kitlangton_
- [`8ba73be`](https://github.com/anomalyco/opencode/commit/8ba73bed23c88c0c28c530ca57cdd6329269ecbd) refactor: collapse auth/ barrel — merge auth.ts into index.ts + self-reexport (#22993) — _@kitlangton_
- [`4f8986a`](https://github.com/anomalyco/opencode/commit/4f8986aa48cbab66ca6e72272c3c7d27ffc8e0eb) refactor: unwrap Question namespace + fix script to emit "." for index.ts (#22992) — _@kitlangton_
- [`9c87a14`](https://github.com/anomalyco/opencode/commit/9c87a144e879dd9b76c90cb1415e63005aac2843) refactor: normalize AccountRepo to canonical Effect service pattern (#22991) — _@kitlangton_
- [`5b9fa32`](https://github.com/anomalyco/opencode/commit/5b9fa322551b77ddf2ab004c5491a82d37081b22) chore: generate — _@opencode-agent[bot]_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
