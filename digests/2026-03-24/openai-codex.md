# openai/codex — 2026-03-24

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-23T23:59:59.000Z → 2026-03-24T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day is dominated by **app-server and sandboxing refactors**, plus a flurry of plugin/TUI polish. No releases, PRs, or issues surfaced in the window — just commits to `main`.

The biggest structural moves are in sandboxing and crate extraction. `pakrym-oai` carved a new `codex-sandboxing` crate out of `codex-core`, landing landlock helpers (#15592), macOS seatbelt builders (#15593), policy transforms (#15599), and the sandbox manager itself (#15603); a related cleanup drops `sandbox_permissions` from exec request types (#15665). `aibrahim-oai` split string truncation into `codex-utils-string` (#15572) and `0f957a9` extracts a dedicated `codex-git-utils` crate (#15564). On the security side, `rreichel3-oai` allows a global `*` wildcard in `network.allowed_domains` to enable denylist-only setups (#15549) — worth a read if you operate the network proxy.

App-server work is the other major theme. `etraut-openai` finished migrating non-interactive `codex exec` onto the app-server (#15424); `euroelessar` added v2 filesystem watch RPCs (#14533) backed by a reusable `FileWatcher`/`SkillWatcher` split (#15093), backpressure/batching for `command/exec` (#15547), and surfaces `codex_home` in the initialize response (#15689). Auth refresh got two fixes from `celia-oai`: stop refresh storms after permanent token failure (#15530) and key proactive refresh off JWT expiry (#15545). `tui_app_server` got several bug fixes: ChatGPT login now opens the local browser (#15672), Ctrl+C cancels active login (#15673), and bootstrap tolerates missing rate limits while logged out (#15670).

Plugin/TUI polish is heavy: pretty plugin labels and provenance preservation on MCP refresh (#15606), sort installed-first (#15558), refresh `$mentions` after install/uninstall (#15598), suppress OAuth URL spam (#15666), include marketplace load errors in `plugin/list` (#15438), plus assorted wording and alignment tweaks (#15660, #15669, #15674, #15676). New built-in skills: `imagegen` (#15600) and `plugin-creator` (#15554). Sub-agent v2 gains `list_agents` (#15621) and starts a turn on agent interaction while disabling notifier v2 (#15624).

Noise to ignore: nine empty "git glitch" debugging commits from `jif-oai` (#15650–#15658).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`4a210fa`](https://github.com/openai/codex/commit/4a210faf338c9a63c27c4216c1588097472fa2b3) fix: keep rmcp-client env vars as OsString (#15363) — _@bolinfest_
- [`24c4eca`](https://github.com/openai/codex/commit/24c4ecaaac7ba9205e9c48376de7450a087f1576) app-server: Return codex home in initialize response (#15689) — _@euroelessar_
- [`6323f01`](https://github.com/openai/codex/commit/6323f0104d17d211029faab149231ba787f7da37) Use delayed shimmer for plugin loading headers in tui and tui_app_server (#15674) — _@canvrno-oai_
- [`301b17c`](https://github.com/openai/codex/commit/301b17c2a198c8c1ea9438dbf97949e226052f6c) app-server: add filesystem watch support (#14533) — _@euroelessar_
- [`062fa7a`](https://github.com/openai/codex/commit/062fa7a2bb96b7b6f5fd0bc1edb7c48d75024114) Move string truncation helpers into codex-utils-string (#15572) — _@aibrahim-oai_
- [`0b619af`](https://github.com/openai/codex/commit/0b619afc87ae51df852e61ab9f10c3403d3288fc) Drop sandbox_permissions from sandbox exec requests (#15665) — _@pakrym-oai_
- [`b32d921`](https://github.com/openai/codex/commit/b32d921cd95dc74f69a367e9266a5da886926b8b) [plugins] Additional gating for tool suggest and apps. (#15573) — _@mzeng-openai_
- [`4b91a7b`](https://github.com/openai/codex/commit/4b91a7b3916ab631043f26f24c92aa4ac2577348) Suppress plugin-install MCP OAuth URL console spam (#15666) — _@canvrno-oai_
- [`b364faf`](https://github.com/openai/codex/commit/b364faf4ecc69401ca4c796d398d6646a6da7621) Tweak /plugin menu wording (#15676) — _@canvrno-oai_
- [`c023e9d`](https://github.com/openai/codex/commit/c023e9d959e0fc64081e0e5b4ea768df12140bd1) tui_app_server: cancel active login before Ctrl+C exit (#15673) — _@etraut-openai_
- [`1b86377`](https://github.com/openai/codex/commit/1b86377635abe5d765cee603fc803951770fecbd) tui_app_server: open ChatGPT login in the local browser (#15672) — _@etraut-openai_
- [`989e513`](https://github.com/openai/codex/commit/989e513969424117baabd1090914d1ad29a05d0b) tui: always restore the terminal on early exit (#15671) — _@etraut-openai_
- [`3ba0e85`](https://github.com/openai/codex/commit/3ba0e85edd717f46067f31dc712205691a1fc8b5) Clean up TUI /plugins row allignment (#15669) — _@canvrno-oai_
- [`0f957a9`](https://github.com/openai/codex/commit/0f957a93cd4f9e83a6daa2181c8cf58d4cee80cf) Move git utilities into a dedicated crate (#15564) — _@aibrahim-oai_
- [`fc97092`](https://github.com/openai/codex/commit/fc97092f7553d6c9367dd3c9d7825ad2fa2cdcb9) tui_app_server: tolerate missing rate limits while logged out (#15670) — _@etraut-openai_
- [`e89e513`](https://github.com/openai/codex/commit/e89e5136bdd11931bb143fcafa2e89cc8313e99b) fix: keep zsh-fork release assets after removing shell-tool-mcp (#15644) — _@bolinfest_
- [`363b373`](https://github.com/openai/codex/commit/363b373979e53140ea65d73151f38b6f180dc42a) Hide numeric prefixes on disabled TUI list rows (#15660) — _@canvrno-oai_
- [`2d61357`](https://github.com/openai/codex/commit/2d61357c76436da6d3637b14960687bfd5323e7f) Trim pre-turn context updates during rollback (#15577) — _@charley-oai_
- [`88694e8`](https://github.com/openai/codex/commit/88694e8417c7593e87d4a5251df0e5eedbe94e2e) chore: stop app-server auth refresh storms after permanent token failure (#15530) — _@celia-oai_
- [`7dc2cd2`](https://github.com/openai/codex/commit/7dc2cd2ebe5bd65a4e517bede9f29ddd97f35e30) chore:  use access token expiration for proactive auth refresh (#15545) — _@celia-oai_
- [`621862a`](https://github.com/openai/codex/commit/621862a7d18376c05f34be75d8c454a7937bc958) feat: include marketplace loading error in plugin/list (#15438) — _@xl-openai_
- [`773fbf5`](https://github.com/openai/codex/commit/773fbf56a43a38ef65e9f64da279db22264aa3d5) feat: communication pattern v2 (#15647) — _@jif-oai_
- [`d61c03c`](https://github.com/openai/codex/commit/d61c03ca08998af6f7a8daa24d7bca4e8cfeddef) app-server: Add back pressure and batching to `command/exec` (#15547) — _@euroelessar_
- [`daf5e58`](https://github.com/openai/codex/commit/daf5e584c2d1d1e239098426540ec43af1e154b8) core: Make FileWatcher reusable (#15093) — _@euroelessar_
- [`bb7e9a8`](https://github.com/openai/codex/commit/bb7e9a8171d5fa564bc2689050691dd3d7ad34c7) Increase voice space hold timeout to 1s (#15579) — _@aibrahim-oai_
- [`66edc34`](https://github.com/openai/codex/commit/66edc347ae6c84902b88bc46774712415d2dfd99) Pretty plugin labels, preserve plugin app provenance during MCP tool refresh (#15606) — _@canvrno-oai_
- [`f1658ab`](https://github.com/openai/codex/commit/f1658ab64283e727f468f79f90e3a07afaada898) try to fix git glitch (#15650) — _@jif-oai_
- [`1ababa7`](https://github.com/openai/codex/commit/1ababa70168053ead5af3fb18fdedc0a21715e71) try to fix git glitch (#15651) — _@jif-oai_
- [`85a17a7`](https://github.com/openai/codex/commit/85a17a70f7606cbf63be14946aeae4ba7213c5a6) try to fix git glitch (#15652) — _@jif-oai_
- [`48ba256`](https://github.com/openai/codex/commit/48ba256cbd09217bc89bd8775bdc7c9b2ddf9c5b) try to fix git glitch (#15653) — _@jif-oai_
- [`4cbc489`](https://github.com/openai/codex/commit/4cbc4894f98abb1717fc1e257d673fcec19c5364) try to fix git glitch (#15654) — _@jif-oai_
- [`b76630f`](https://github.com/openai/codex/commit/b76630f2af71c4157cbe6ee362ff7ebb8e492fe3) try to fix git glitch (#15655) — _@jif-oai_
- [`074b069`](https://github.com/openai/codex/commit/074b06929d723374f61a8cda277d0e5066f0163b) try to fix git glitch (#15656) — _@jif-oai_
- [`3c0c571`](https://github.com/openai/codex/commit/3c0c571012e327f72196b2f1f823395178c95c02) try to fix git glitch (#15657) — _@jif-oai_
- [`4b8425b`](https://github.com/openai/codex/commit/4b8425b64b80357777b3a089b8156fce082db692) try to fix git glitch (#15658) — _@jif-oai_
- [`910cf49`](https://github.com/openai/codex/commit/910cf49269cc07eb97bc551f13b47b61b4d10232) [codex] Stabilize second compaction history test (#15605) — _@charley-oai_
- [`b51d5f1`](https://github.com/openai/codex/commit/b51d5f18c7154498524b705ab2fbb81259d2bbed) feat: disable notifier v2 and start turn on agent interaction (#15624) — _@jif-oai_
- [`0f90a34`](https://github.com/openai/codex/commit/0f90a3467699f74561a0058bbdb676bb790877cf) Refresh mentions list after plugin install/uninstall (#15598) — _@canvrno-oai_
- [`2d5a3bf`](https://github.com/openai/codex/commit/2d5a3bfe76d26c6fe3153ddd4ea5f085185e3d72) [Codex TUI] - Sort /plugins TUI menu by installed status first, alpha second (#15558) — _@canvrno-oai_
- [`68baac7`](https://github.com/openai/codex/commit/68baac7cf4f264a22f5674e70a89046480d99ec3) Bump vedantmgoyal9/winget-releaser from 19e706d4c9121098010096f9c495a70a7518b30f to 7bd472be23763def6e16bd06cc8b1cdfab0e2fd5 (#14777) — _@dependabot[bot]_
- [`d734348`](https://github.com/openai/codex/commit/d7343486da162e8cf35564d09834ce6d6864cecf) chore(deps): bump pnpm/action-setup from 4 to 5 (#15484) — _@dependabot[bot]_
- [`f49eb8e`](https://github.com/openai/codex/commit/f49eb8e9d7a758d6bd81a5d7f6e8c615b2b6bd42) Extract sandbox manager and transforms into codex-sandboxing (#15603) — _@pakrym-oai_
- [`45f6884`](https://github.com/openai/codex/commit/45f68843b8bb6abb0bcdcde73ed51a98a483e8de) Finish moving codex exec to app-server (#15424) — _@etraut-openai_
- [`1db6cb9`](https://github.com/openai/codex/commit/1db6cb9789f5964e28bdc2cade6005906c40048a) Allow global network allowlist wildcard (#15549) — _@rreichel3-oai_
- [`95e1d59`](https://github.com/openai/codex/commit/95e1d5993985019ce0ce0d10689caf1375f95120) nit: optim on list agents (#15623) — _@jif-oai_
- [`38c088b`](https://github.com/openai/codex/commit/38c088ba8d03b7b211464166e04be0391e53266e) feat: list agents for sub-agent v2 (#15621) — _@jif-oai_
- [`567832c`](https://github.com/openai/codex/commit/567832c6fe98a868c42ecc3bb5f35dc051335f73) fix: flaky test (#15614) — _@jif-oai_
- [`f954527`](https://github.com/openai/codex/commit/f9545278e2a2922c6f0202a3ea9522e4b9985f9f) nit: split v2 wait (#15613) — _@jif-oai_
- [`7957735`](https://github.com/openai/codex/commit/79577355c1048907fd5d717bc6da42f766752cef) Stabilize macOS CI test timeouts (#15581) — _@dylan-hurd-oai_
- [`c850607`](https://github.com/openai/codex/commit/c850607129d175b52ca99d2d46c8b3a18eb25381) Remove filter from plugins/list result (#15580) — _@canvrno-oai_
- [`9deb8ce`](https://github.com/openai/codex/commit/9deb8ce3fcc48b43216c8391a00572cbefcb6ae5) Move sandbox policy transforms into codex-sandboxing (#15599) — _@pakrym-oai_
- [`a10960e`](https://github.com/openai/codex/commit/a10960e41c02f1a1c2819d9384039a8b9b67480d) move imagegen skill into system skills (#15600) — _@dkundel-openai_
- [`c241006`](https://github.com/openai/codex/commit/c2410060ead90d7229158dbf2b8219c217b632e6) [codex-cli][app-server] Update self-serve business usage limit copy in error returned (#15478) — _@dhruvgupta-oai_
- [`431af08`](https://github.com/openai/codex/commit/431af0807ce18b66643c28e1c9cd1d5d8f1e4a8e) Move macOS sandbox builders into codex-sandboxing (#15593) — _@pakrym-oai_
- [`2227248`](https://github.com/openai/codex/commit/2227248cd60ab35df5bd13b4f3f54e577564ce3c) Extract landlock helpers into codex-sandboxing (#15592) — _@pakrym-oai_
- [`db8bb72`](https://github.com/openai/codex/commit/db8bb7236d1266dd9596dc01cb46e414fd794538) Add plugin-creator as system skill (#15554) — _@alexsong-oai_
- [`f547b79`](https://github.com/openai/codex/commit/f547b79bd0003fe2e12b7c9f9449b303f37fcc27) Add fork snapshot modes (#15239) — _@charley-oai_
- [`84fb180`](https://github.com/openai/codex/commit/84fb180eeb9ef8bbef9986a715925c10d6e15e37) fix: build PATH env var using OsString instead of String (#15360) — _@bolinfest_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
