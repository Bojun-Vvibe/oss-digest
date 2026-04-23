# openai/codex — 2026-04-15

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-14T23:59:59.000Z → 2026-04-15T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline is the **0.121.0 stable release** ([rust-v0.121.0](https://github.com/openai/codex/releases/tag/rust-v0.121.0)), which lands the new plugin **marketplace** (`codex marketplace add` from GitHub, git URLs, local dirs, or `marketplace.json` URLs — #17087, #17717, #17756), TUI prompt-history improvements including `Ctrl+R` reverse search (#17550, #17336), and a new memory-mode UX with reset/delete and extension cleanup (#17632, #17626, #17913, #17937, #17844). A 0.122.0-alpha.1 prerelease cut the same day signals the next train is already moving.

Memory features dominated the day's commits. jif-oai shipped the memories menu (#17632), a reset-memories button (#17937), an endpoint to delete memories (#17913), cleanup of the memories extension (#17844), rollout sanitization before phase 1 (#17938), and restored TRACE log propagation to the DB and `/feedback` (#17953, fixing a regression from #16184).

Marketplace work continued post-release: alternate manifest layouts and local-string sources (#17885), plus a Windows path-detection fix that was blocking CI (#17917). Plugin support also landed in external-agent config migration (#17855).

Notable infra/security changes worth a closer read:
- **Standalone installer overhaul** (#17022) — significant UX changes to how the codex binary is installed.
- **macOS sandbox Unix-socket allowlists** (#17654) lets sandboxes deny network but permit specific sockets; paired with sandbox-state delivered via MCP `_meta` (#17763) and removal of the old `codex/sandbox-state` custom request (#17957).
- **Azure Responses providers** now correctly use remote compaction (#17958), with a follow-up rename for clarity (#17965).
- **App-server** tracks remote-control seq IDs per stream with per-stream unacked retention (#17902), and stale approval/elicitation requests are now dismissed after remote resolution (#15134).

Smaller but useful: dummy MCP tools for previously-called-but-missing tools (#17853), fix for empty namespaced MCP tool descriptions (#17946), `fs/readDirectory` now skips broken symlinks (#17907), MCP image outputs honor `codex/imageDetail: "original"` (#17714), and guardian review sessions disable hooks to stop Stop-hook interference (#17872). Docs churn around `SECURITY.md` (#17848 reverted in #18003, then partially restored in #18004) is worth noting if you track security boundaries documentation.

No issues or external PRs were opened/merged in the window — all activity is direct commits from OpenAI staff.

## Releases

- **[rust-v0.121.0](https://github.com/openai/codex/releases/tag/rust-v0.121.0)** — 0.121.0 _by @github-actions[bot] at 2026-04-15T20:45:18Z_
  > ## New Features
  > - Added `codex marketplace add` and app-server support for installing plugin marketplaces from GitHub, git URLs, local directories, and direct `marketplace.json` URLs (#17087, #17717, #17756).
  > - Added TUI prompt history improvements, including `Ctrl+R` reverse search and local recall for accepted slash commands (#17550, #17336).
  > - Added TUI and app-server controls for memory mode, memory reset/deletion, and memory-extension cleanup (#17632, #17626, #17913, #17937, #17844).
  > - Expa…
- **[rust-v0.122.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.1)** _(prerelease)_ — 0.122.0-alpha.1 _by @github-actions[bot] at 2026-04-15T21:51:21Z_
  > Release 0.122.0-alpha.1
- **[rust-v0.121.0-alpha.14](https://github.com/openai/codex/releases/tag/rust-v0.121.0-alpha.14)** _(prerelease)_ — 0.121.0-alpha.14 _by @github-actions[bot] at 2026-04-15T13:57:10Z_
  > Release 0.121.0-alpha.14
- **[rust-v0.121.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.121.0-alpha.13)** _(prerelease)_ — 0.121.0-alpha.13 _by @github-actions[bot] at 2026-04-15T11:50:21Z_
  > Release 0.121.0-alpha.13
- **[rust-v0.121.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.121.0-alpha.12)** _(prerelease)_ — 0.121.0-alpha.12 _by @github-actions[bot] at 2026-04-15T05:46:23Z_
  > Release 0.121.0-alpha.12
- **[rust-v0.121.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.121.0-alpha.11)** _(prerelease)_ — 0.121.0-alpha.11 _by @github-actions[bot] at 2026-04-15T03:38:15Z_
  > Release 0.121.0-alpha.11


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`c2bdb78`](https://github.com/openai/codex/commit/c2bdb7812cca9157b0e26a7deff480c1a2b2c4ad) Clarify realtime v2 context and handoff messages (#17896) — _@bxie-openai_
- [`18d61f6`](https://github.com/openai/codex/commit/18d61f6923896aa273ae9a369d423ac75dd8963a) [docs] Restore SECURITY.md update from PR 17848 (#18004) — _@evawong-oai_
- [`28b76d1`](https://github.com/openai/codex/commit/28b76d13fe1a47b25b49354ee05741ddadb3ac84) [mcp] Add dummy tools for previously called but currently missing tools. (#17853) — _@mzeng-openai_
- [`9d1bf00`](https://github.com/openai/codex/commit/9d1bf002c6f3d25b355a0104994bc4b410011a14) Significantly improve standalone installer (#17022) — _@efrazer-oai_
- [`9e2fc31`](https://github.com/openai/codex/commit/9e2fc318549f7546c87b9bd63db98a7c57f54cb4) Support original-detail metadata on MCP image outputs (#17714) — _@fjord-oai_
- [`17d94bd`](https://github.com/openai/codex/commit/17d94bd1e32f8f75676a0927ca297031f4b7d7ae) [docs] Revert extra changes from PR 17848 (#18003) — _@evawong-oai_
- [`e70ccde`](https://github.com/openai/codex/commit/e70ccdeaf79c3298a5a37e94449684a81dc63b8c) feat: Support alternate marketplace manifests and local string (#17885) — _@xl-openai_
- [`83dc8da`](https://github.com/openai/codex/commit/83dc8da9cccb8aadb649ccb6ee10ac01e3600e94) Re-enable it (#18002) — _@jif-oai_
- [`bc969b6`](https://github.com/openai/codex/commit/bc969b6516f2fb7a4817b665ab1507f4f4beedc2) Dismiss stale app-server requests after remote resolution (#15134) — _@ebrevdo_
- [`ba36415`](https://github.com/openai/codex/commit/ba36415a30d895bbeabdf3ce0d4f2192f26c2fa9) [codex] Restore remote exec-server filesystem tests (#17989) — _@starr-openai_
- [`50d3128`](https://github.com/openai/codex/commit/50d3128269ebfa6221d02ecfbbc46b0007643bea) Migrate archive/unarchive to local ThreadStore (#17892) — _@wiltzius-openai_
- [`ab71502`](https://github.com/openai/codex/commit/ab715021e602582e20df8ede0d9904240e69f065) Auto install start-codex-exec.sh dependencies (#17990) — _@pakrym-oai_
- [`0bb438b`](https://github.com/openai/codex/commit/0bb438bca68d7c2064453ee9399f59f0cbec233e) [docs] Add security boundaries reference in SECURITY.md (#17848) — _@evawong-oai_
- [`f2a4925`](https://github.com/openai/codex/commit/f2a4925f6398107dc29585b42fa2c783830c8103) Support remote compaction for Azure responses providers (#17958) — _@ivanmurashko_
- [`6696e0b`](https://github.com/openai/codex/commit/6696e0bbc3b5fcefaaa161c4322d906c0748bdd4) chore: tmp disable (#17981) — _@jif-oai_
- [`81d9cde`](https://github.com/openai/codex/commit/81d9cde9cbd7aaa9b89508adcfba31c5c9b84fc1) chore(tui) cleanup (#17920) — _@dylan-hurd-oai_
- [`7e7b35b`](https://github.com/openai/codex/commit/7e7b35b4d296cd19280b5468814323db0d68c1a7) fix: propagate log db (#17953) — _@jif-oai_
- [`66533dd`](https://github.com/openai/codex/commit/66533ddc61e2795ea58f23cf3b88515d6085ee67) mcp: remove codex/sandbox-state custom request support (#17957) — _@bolinfest_
- [`83abf67`](https://github.com/openai/codex/commit/83abf67d20e3294ae9e8be3bc99e92b89f2c9844) app-server: track remote-control seq IDs per stream (#17902) — _@euroelessar_
- [`f5e8eac`](https://github.com/openai/codex/commit/f5e8eac2ae15114c0a6309ae0114dd109b0a5d58) Refactor auth providers to mutate request headers (#17866) — _@pakrym-oai_
- [`f53210d`](https://github.com/openai/codex/commit/f53210d332f9f8a8433009bea9d1122f1e86a57f) Add CLI update announcement (#17942) — _@shijie-oai_
- [`cdfcd2c`](https://github.com/openai/codex/commit/cdfcd2ca9268adbd4bd3ba5af527c97fa8a82805) [codex] Add local thread store listing (#17824) — _@wiltzius-openai_
- [`78ce61c`](https://github.com/openai/codex/commit/78ce61c78eaf1eb596b5b78031a47443a4706e44) Fix empty tool descriptions (#17946) — _@shijie-oai_
- [`aca781b`](https://github.com/openai/codex/commit/aca781b3a789ed5523b6f0d73f91459970033aa8) fix: rename is_azure_responses_wire_base_url to is_azure_responses_provider (#17965) — _@bolinfest_
- [`652380d`](https://github.com/openai/codex/commit/652380d3628698ab441739df75aa6aa6dde5705d) chore(features) codex dependencies feat (#17960) — _@dylan-hurd-oai_
- [`a3d475d`](https://github.com/openai/codex/commit/a3d475d33fa2e27bfc2a795bf76aa1a8d006cd03) Fix fs/readDirectory to skip broken symlinks (#17907) — _@willwang-openai_
- [`8e784bb`](https://github.com/openai/codex/commit/8e784bba2fb795ec9248bbfd9a26fdad1b809dc6) Register agent identities behind use_agent_identity (#17386) — _@adrian-openai_
- [`1dead46`](https://github.com/openai/codex/commit/1dead46c90876ea22ac0b512a934fc7091b97ec2) Remove exec-server fs sandbox request preflight (#17883) — _@pakrym-oai_
- [`da86ced`](https://github.com/openai/codex/commit/da86cedbd439d38fbd7e613e4e88f8f6f138debb) feat: reset memories button (#17937) — _@jif-oai_
- [`ec13aaa`](https://github.com/openai/codex/commit/ec13aaac892565578f396a82058be0914d018690) feat: sanitize rollouts before phase 1 (#17938) — _@jif-oai_
- [`ea13527`](https://github.com/openai/codex/commit/ea135279618aecff7934d63c8baf742cfa6d47d2) nit: doc (#17941) — _@jif-oai_
- [`0df7e9a`](https://github.com/openai/codex/commit/0df7e9a8207296e6b7c967e22a4fee48af35aa09) register all mcp tools with namespace (#17404) — _@sayan-oai_
- [`9402347`](https://github.com/openai/codex/commit/9402347f34e60c60cb27e89e71ceaf5e53bd7956) feat: memories menu (#17632) — _@jif-oai_
- [`544b4e3`](https://github.com/openai/codex/commit/544b4e39e3aba5990f9af42a3381695927695f4b) nit: stable test (#17924) — _@jif-oai_
- [`5e544be`](https://github.com/openai/codex/commit/5e544be3c9bff69af2395c19278d924dc24ad233) chore: do not disable memories for past rollouts on reset (#17919) — _@jif-oai_
- [`b99a62c`](https://github.com/openai/codex/commit/b99a62c5269d5480fd8b4640fd6689c3393bf957) [codex] Fix current main CI blockers (#17917) — _@sayan-oai_
- [`af9230d`](https://github.com/openai/codex/commit/af9230d74d25ba55022fae6e44c521194929ffe9) chore: exp flag (#17921) — _@jif-oai_
- [`b6244f7`](https://github.com/openai/codex/commit/b6244f776ded1bde4beea3c6bd0c43d9e40186d4) feat: cleaning of memories extension (#17844) — _@jif-oai_
- [`7579d5a`](https://github.com/openai/codex/commit/7579d5ad75a916b78ffaef3ab6eb86a940994054) feat: add endpoint to delete memories (#17913) — _@jif-oai_
- [`1324800`](https://github.com/openai/codex/commit/13248008f982f15037674a746c1bf97ae7ea2367) fix: cargo deny (#17915) — _@jif-oai_
- [`2e10037`](https://github.com/openai/codex/commit/2e1003728c61e62636dd7a29a7fee95050fb9cc6) Support Unix socket allowlists in macOS sandbox (#17654) — _@aaronl-openai_
- [`42528a9`](https://github.com/openai/codex/commit/42528a905d016d26f9553d2a42c9f94aa25820eb) Send sandbox state through MCP tool metadata (#17763) — _@aaronl-openai_
- [`e4a3612`](https://github.com/openai/codex/commit/e4a3612f11ba68ac82111ea986801a3337554083) fix: add websocket capability token hash support (#17871) — _@viyatb-oai_
- [`c6defb1`](https://github.com/openai/codex/commit/c6defb1f0f7272fcd212f63f01460477d2b73e3b) fix: cleanup the contract of the general-purpose exec() function (#17870) — _@bolinfest_
- [`d34bc66`](https://github.com/openai/codex/commit/d34bc66466670630ec9ca080c775e279c66d536a) sandbox: remove dead seatbelt helper and update tests (#17859) — _@bolinfest_
- [`e063596`](https://github.com/openai/codex/commit/e063596c67b2c5f047694960ff1b14275d95aa1d) Reuse remote exec-server in core tests (#17837) — _@starr-openai_
- [`679f63b`](https://github.com/openai/codex/commit/679f63ba06ed2a3fb760c2bbd360d10ab340ecfd) Fix clippy warnings in external agent config migration (#17884) — _@canvrno-oai_
- [`6f5ddd4`](https://github.com/openai/codex/commit/6f5ddd408bcfc52f2cecbccef2230d3bc38c4fd7) Wrap delegated input text (#17868) — _@guinness-oai_
- [`130b047`](https://github.com/openai/codex/commit/130b047beb95acc0d06a01e735b48c6342baf43f) Disable hooks in guardian review sessions (#17872) — _@abhinav-oai_
- [`ca65056`](https://github.com/openai/codex/commit/ca650561d6655d29494b06f08bf89cdc943e7664) support plugins in external agent config migration (#17855) — _@alexsong-oai_
- [`2bfa627`](https://github.com/openai/codex/commit/2bfa62761305b28d0de2e2ece9ca7c05650664b8) Fix for CI Tests failing from stack overflow  (#17846) — _@won-openai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
