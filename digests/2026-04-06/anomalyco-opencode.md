# anomalyco/opencode — 2026-04-06

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-04-05T23:59:59.000Z → 2026-04-06T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Two releases shipped today: **v1.3.16** and **v1.3.17**, both rolling up a busy day of provider, TUI, and server-refactor work.

The headline change is structural: `thdxr` landed a refactor replacing `Bun.serve` with Hono Node adapters for the main server (#18335) and a parallel swap to `node:http` for the OAuth handlers (#18327). This is a meaningful runtime shift worth reading if you embed or extend the server.

Provider work dominates the rest. `rekram1-node` bumped the OpenRouter AI SDK to fix outstanding OpenRouter issues (#21242), removed an `ai-sdk/provider-utils` patch (#21245), moved max-token exclusions into plugins (#21225), and exposed `maxOutputTokens` mutation via the `chat.params` hook (#21220) — useful if you're writing plugins. Copilot Anthropic models now share reasoning-effort config with the Copilot CLI, and a Qwen variants bug was fixed (#21212). Azure gets correct `providerOptions` keys for both `openai` and `azure` paths (#20272, @meruiden), and Cloudflare Workers AI now surfaces a clear error when env vars are missing (#20399, @mchenco) plus updated `/connect` docs (#20589).

Two fixes stand out for stability: a TypeScript LSP **memory leak** fix ensuring the TS server uses native project config (#19953, @derekbar90), and a plugin loader fix that parses package specifiers via `npm-package-arg` and sanitizes win32 cache paths (#21135, @Hona).

TUI/Windows users get several improvements: `Ctrl+Z` now defaults to undo instead of terminal suspend on Windows (#21138), the kitty keyboard workaround was reverted to fix input issues (#20180), opentui upgraded to 0.1.97 (#21137, @kommander), and mouse capture is now disablable via config or `OPENCODE_DISABLE_MOUSE` (#13748, @blackheaven).

ACP gained proper session model/mode config option exposure (#21134, @georgeharker). Output token totals are also now correct when reasoning tokens are reported separately. Two unlabeled `zen:` commits from `fwang` (ipv6 normalization, header check removal) landed without PR context.

No new issues or open PRs were recorded in the window.

## Releases

- **[v1.3.17](https://github.com/anomalyco/opencode/releases/tag/v1.3.17)** — v1.3.17 _by @opencode-agent[bot] at 2026-04-06T07:39:42Z_
  > ## Core
  > - Cloudflare Workers AI and AI Gateway now prompt for missing account details and show clear setup errors when required Cloudflare variables are missing (@mchenco)
  > 
  > ## TUI
  > - Restored the default kitty keyboard handling on Windows terminals to avoid input issues from the workaround rollback
  > 
  > **Thank you to 1 community contributor:**
  > - @mchenco:
  >   - fix: show clear error when Cloudflare provider env vars are missing (#20399)
- **[v1.3.16](https://github.com/anomalyco/opencode/releases/tag/v1.3.16)** — v1.3.16 _by @opencode-agent[bot] at 2026-04-06T03:45:09Z_
  > ## Core
  > 
  > - Support Azure model options on both chat and responses paths (@meruiden)
  > - Expose session model and mode config options through ACP (@georgeharker)
  > - Add a separating blank line before read tool file contents for clearer output
  > - Fix output token totals when reasoning tokens are reported separately
  > 
  > ## TUI
  > 
  > - Default `Ctrl+Z` to undo on Windows instead of terminal suspend
  > - Let you disable TUI mouse capture in config or with `OPENCODE_DISABLE_MOUSE` (@blackheaven)
  > - Hide org switching…


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`31f6f43`](https://github.com/anomalyco/opencode/commit/31f6f43cfc0f8081b5e9ffbc400bf76f28a9027a) chore: remove ai-sdk/provider-utils patch and update pkg (#21245) — _@rekram1-node_
- [`090ad82`](https://github.com/anomalyco/opencode/commit/090ad8290e487861697a3e6dcf1026bd5d4f92db) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`d1258ac`](https://github.com/anomalyco/opencode/commit/d1258ac19cc38496d4715d37e9683c4837936a40) fix: bump openrouter ai sdk pkg to fix openrouter issues (#21242) — _@rekram1-node_
- [`48c1b6b`](https://github.com/anomalyco/opencode/commit/48c1b6b3387647edfde931c3a50a325c37245b06) tweak: move the max token exclusions to plugins  @rekram1-node (#21225) — _@rekram1-node_
- [`40e4cd2`](https://github.com/anomalyco/opencode/commit/40e4cd27a19f41f65e21056dc6eb19fa6399bbff) tweak: adjust chat.params hook to allow altering of the maxOutputTokens (#21220) — _@rekram1-node_
- [`5a6d10c`](https://github.com/anomalyco/opencode/commit/5a6d10cd5363bd47c8e666bbc63435853a1f25b5) tweak: ensure copilot anthropic models have same reasoning effort model as copilot cli, also fix qwen incorrectly having variants (#21212) — _@rekram1-node_
- [`527b514`](https://github.com/anomalyco/opencode/commit/527b51477da3d07107db71da71e339003d9481ca) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`535343b`](https://github.com/anomalyco/opencode/commit/535343bf567af41cdecf0f130e6c75e3bae16cd6) refactor(server): replace Bun serve with Hono node adapters (#18335) — _@thdxr_
- [`4394e42`](https://github.com/anomalyco/opencode/commit/4394e42615386d5246bf8a4ac9d2357f1242c687) upgrade opentui to 0.1.97 (#21137) — _@kommander_
- [`2e4c43c`](https://github.com/anomalyco/opencode/commit/2e4c43c1cf6a14c6b2d1d502b70337fae35bc1ce) refactor: replace Bun.serve with Node http.createServer in OAuth handlers (#18327) — _@thdxr_
- [`965c751`](https://github.com/anomalyco/opencode/commit/965c751522a72f16a523dc86168aadd349765139) docs: update Cloudflare provider setup to reflect /connect prompt flow (#20589) — _@mchenco_
- [`24bdd3c`](https://github.com/anomalyco/opencode/commit/24bdd3c9fb933c1663f1adfa61c9c8c49d5d52c4) chore: generate — _@opencode-agent[bot]_
- [`01f0319`](https://github.com/anomalyco/opencode/commit/01f031919297b4f1d6cb1f883cc0dbc1481b73a3) fix(lsp): MEMORY LEAK: ensure typescript server uses native project config (#19953) — _@derekbar90_
- [`517e6c9`](https://github.com/anomalyco/opencode/commit/517e6c9aa4c61dbc125e7654fc596f1d529f20d9) release: v1.3.17 — _@opencode_
- [`a4a9ea4`](https://github.com/anomalyco/opencode/commit/a4a9ea4ab00fe58d35ea6fc4971bd47cb9e5b0ac) fix(tui): revert kitty keyboard events workaround on windows (#20180) — _@Hona_
- [`eaa272e`](https://github.com/anomalyco/opencode/commit/eaa272ef7f034137746d2ed5d13383d9ef20ca8d) fix: show clear error when Cloudflare provider env vars are missing (#20399) — _@mchenco_
- [`70b636a`](https://github.com/anomalyco/opencode/commit/70b636a360517ddb91658eff8ce0c2bbde45cb9f) zen: normalize ipv6 — _@fwang_
- [`a8fd015`](https://github.com/anomalyco/opencode/commit/a8fd0159bee09a6d89cb53c86b3119a668c9ef23) zen: remove header check — _@fwang_
- [`342436d`](https://github.com/anomalyco/opencode/commit/342436dfc45062ef8383d356de24418a967eb512) release: v1.3.16 — _@opencode_
- [`77a462c`](https://github.com/anomalyco/opencode/commit/77a462c93022b0545a952d903d52f74feaa7105d) fix(tui): default Ctrl+Z to undo on Windows (#21138) — _@Hona_
- [`9965d38`](https://github.com/anomalyco/opencode/commit/9965d385de42c902282dc1316235d75f036142fb) fix: pass both 'openai' and 'azure' providerOptions keys for @ai-sdk/azure (#20272) — _@meruiden_
- [`f0f1e51`](https://github.com/anomalyco/opencode/commit/f0f1e51c5c48111198612f9eca652aeffbad49d7) fix(core): implement proper configOptions for acp (#21134) — _@georgeharker_
- [`4712c18`](https://github.com/anomalyco/opencode/commit/4712c18a5833da85cd3946357662b148e78573f7) feat(tui): make the mouse disablable (#6824, #7926) (#13748) — _@blackheaven_
- [`9e156ea`](https://github.com/anomalyco/opencode/commit/9e156ea168fd5b21627e341085bba73018454cb1) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`68f4aa2`](https://github.com/anomalyco/opencode/commit/68f4aa220ea68c539bd1e316a4e96fdd76b93560) fix(plugin): parse package specifiers with npm-package-arg and sanitize win32 cache paths (#21135) — _@Hona_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
