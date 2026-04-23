# openai/codex — 2026-04-06

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-05T23:59:59.000Z → 2026-04-06T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A busy day of mostly fixes and infra cleanup on `main` — no releases, PRs, or issues surfaced in the window, just 28 merged commits.

The headline change is performance: `/mcp` inventory listing was sped up after a regression introduced when the TUI was moved onto the app server API (#16831). Alongside it, device-code auth was rerouted through the app server, which also enables it for remote TUI sessions (#16827), and a new remote-control transport landed in the app server (#15951). AuthManager initialization was centralized into a shared helper that also applies the forced ChatGPT workspace override (#16764).

Several correctness fixes worth noting. `mcp-server` now respects the configured residency requirement so non-US requests no longer drop the `r=` hint (#16952). The SQLite migrator no longer hard-fails when it sees a DB written by a newer Codex binary (#16924), and guardian events for `CommandExecution` items are now emitted in the right order so the UI can render auto-approvals correctly (#16462). A `thread/metadata/update` fix from #16877 was reverted in #16923. `codex exec --ephemeral` no longer backfills empty `turn/completed` items via `thread/read` (#16795), and the `/fast off` regression that left app-server sessions pinned to a service tier is fixed (#16833).

TUI polish: percent-escaped bare local file links now decode like `file://` links (#16810), skill doc reads are annotated with the skill name (#16813), the resume picker has cleaner timestamp labels and stable ordering (#16822), and CJK word navigation in the composer no longer treats whole runs as one word (#16829). `codex exec --help` text was corrected on two fronts (#16881, #16888).

Plugin/infra: non-curated plugin cache now refreshes from the plugin list using `plugin.json` versions (#16191), with a chatgpt.com fallback for curated plugin downloads (#16947). Bazel work restored `lzma-sys` wiring (#16744), pinned `simdutf` away from a live Googlesource fetch (#16925), enabled `--experimental_remote_downloader` (#16928), and persists the repository cache (#16926). macOS Seatbelt gained a narrow allow rule for PyTorch/libomp shm (#16945). Analytics added protocol-native turn timestamps (#16638), and a clippy warning was cleaned up (#16939).

Read first: #16831, #16952, #16924, #15951.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`9f737c2`](https://github.com/openai/codex/commit/9f737c28dd5dce0eeb6865eb98fcd106c625c26f) Speed up /mcp inventory listing (#16831) — _@etraut-openai_
- [`756c45e`](https://github.com/openai/codex/commit/756c45ec61257d33e72f1e726e9f97872d67f353) [codex-analytics] add protocol-native turn timestamps (#16638) — _@rhan-oai_
- [`e88c2cf`](https://github.com/openai/codex/commit/e88c2cf4d79c9bfe4fd75b8335b866ce35ab15a3) tui: route device-code auth through app server (#16827) — _@etraut-openai_
- [`54faa76`](https://github.com/openai/codex/commit/54faa769604ed0d62e4b7500f21991d3923b51e3) Respect residency requirements in mcp-server (#16952) — _@etraut-openai_
- [`e62d645`](https://github.com/openai/codex/commit/e62d645e6721825fbae3bd2292f77957275c1bd5) feat: refresh non-curated cache from plugin list. (#16191) — _@xl-openai_
- [`03edd4f`](https://github.com/openai/codex/commit/03edd4fbee45e1f4fa736f1077b2df312d286f60) feat: fallback curated plugin download from backend endpint. (#16947) — _@xl-openai_
- [`36cd163`](https://github.com/openai/codex/commit/36cd1635048d678e6f70474a253f57b5eb8ac911) [codex] Allow PyTorch libomp shm in Seatbelt (#16945) — _@viyatb-oai_
- [`73dab20`](https://github.com/openai/codex/commit/73dab2046fdcd38fe6cf98ee4afe8de87d3124f6) app-server: Add transport for remote control (#15951) — _@euroelessar_
- [`03c0795`](https://github.com/openai/codex/commit/03c07956cfa1e729dde24d767a2ced322455cdb2) Revert "[codex-backend] Make thread metadata updates tolerate pending backfill" (#16923) — _@joeytrasatti-openai_
- [`756ba8b`](https://github.com/openai/codex/commit/756ba8baae8b033e02fa8f26b5d16ad5b06adc02) Fix clippy warning (#16939) — _@mzeng-openai_
- [`1525bbd`](https://github.com/openai/codex/commit/1525bbdb9a77ce7a817b19465a6cce8e2c0800bf) app-server: centralize AuthManager initialization (#16764) — _@euroelessar_
- [`46b7e4f`](https://github.com/openai/codex/commit/46b7e4fb2cfca7e376f167b51dd9c1eac5e9c70e) build: restore lzma-sys Bazel wiring for devbox codex run (#16744) — _@starr-openai_
- [`9bb8133`](https://github.com/openai/codex/commit/9bb813353ec73e8116ddea74de0d73fb80106b2d) fix(sqlite): don't hard fail migrator if DB is newer (#16924) — _@owenlin0_
- [`bd30bad`](https://github.com/openai/codex/commit/bd30bad96f92de4d6b7f2429ddfc322937bc670a) fix(guardian): fix ordering of guardian events (#16462) — _@owenlin0_
- [`4eabc3d`](https://github.com/openai/codex/commit/4eabc3dcb1b1e902c9f97b97008499acb27bd5d0) bazel: Enable `--experimental_remote_downloader` (#16928) — _@euroelessar_
- [`0225479`](https://github.com/openai/codex/commit/0225479f0d213e8363656fb4bd6bba12e0d8532f) bazel: Always save bazel repository cache (#16926) — _@euroelessar_
- [`2b4cc22`](https://github.com/openai/codex/commit/2b4cc221df31d43e63a6bc818b7529a7477313d5) fix(bazel): fix simdutf (#16925) — _@owenlin0_
- [`ded5596`](https://github.com/openai/codex/commit/ded559680df03ebf944d01d8fd19be1debb51d04) feat(requirements): support allowed_approval_reviewers (#16701) — _@owenlin0_
- [`4ce97ce`](https://github.com/openai/codex/commit/4ce97cef0216118c86ae9f76b10ce6043a7b1874) [codex-backend] Make thread metadata updates tolerate pending backfill (#16877) — _@joeytrasatti-openai_
- [`54dbbb8`](https://github.com/openai/codex/commit/54dbbb839ece332c68558829d45e5cc493e03cc4) (tui): Decode percent-escaped bare local file links (#16810) — _@etraut-openai_
- [`f44eb29`](https://github.com/openai/codex/commit/f44eb29181ad5a3425f5d187558064a2fa56a22a) Annotate skill doc reads with skill names (#16813) — _@etraut-openai_
- [`4294031`](https://github.com/openai/codex/commit/4294031a93b14d71f613dd089df3ef711ede3da3) Fix resume picker timestamp labels and stability (#16822) — _@etraut-openai_
- [`fb41a79`](https://github.com/openai/codex/commit/fb41a79f3769381a14a5cf1d4b4ec75352bf7856) [regression] Fix ephemeral turn backfill in exec (#16795) — _@etraut-openai_
- [`ab58141`](https://github.com/openai/codex/commit/ab58141e22512bec1c47714502c9396b1921ace1) Fix TUI fast mode toggle regression (#16833) — _@etraut-openai_
- [`82b061a`](https://github.com/openai/codex/commit/82b061afb21a87b6b3ed3b4e79480ed1e8bf4d9e) Fix CJK word navigation in the TUI composer (#16829) — _@etraut-openai_
- [`624c69e`](https://github.com/openai/codex/commit/624c69e8406cd79e8afb29e4b268ca3fede8634a) [codex] add response proxy subagent header test (#16876) — _@tibo-openai_
- [`e65ee38`](https://github.com/openai/codex/commit/e65ee385793bf0b82cc958b9fc5081f81110706b) Clarify `codex exec` approval help (#16888) — _@etraut-openai_
- [`d9b8993`](https://github.com/openai/codex/commit/d9b899309dbba0921350bb7f8d947dbf3efec48d) Fix misleading codex exec help usage (#16881) — _@etraut-openai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
