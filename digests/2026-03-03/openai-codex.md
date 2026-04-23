# openai/codex — 2026-03-03

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-02T23:59:59.000Z → 2026-03-03T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A high-volume commit day (45 commits, no releases or merged PRs surfaced via the PR feed) dominated by app-server protocol work, a new presentation/spreadsheet artifact stack, and realtime API churn.

The headline is a **security fix in the network proxy**: `fix(network-proxy): reject mismatched host headers` (#13275) now rejects plain HTTP absolute-form requests whose `Host` header disagrees with the request-target authority, with new host/port-aware handling. Worth reading first.

A new user-facing capability landed behind a flag: original-resolution `view_image` support gated by the `view_image_original_resolution` feature (#13050). Users on Windows also get a direct install script at `scripts/install/install.ps1`, published alongside the existing installer (#12741). A **Fast mode** toggle was added that sends `service_tier=priority` on requests when enabled (#13212), with app-server plumbing following in #13334. TUI onboarding renames the "Team" plan to "Business" (#13313).

Realtime saw a revert-and-reland cycle: prompt changes were merged (#13376), reverted (#13385), then re-landed (#13398); separately the realtime websocket API migrated to the new session/handoff flow with configurable model + API-key auth (#13265), handoff text now concatenates all messages in order (#13395), and the legacy Responses V1 websocket implementation was removed entirely (#13364).

App-server protocol work is heavy: a v2 `thread/metadata/update` endpoint (#13280); a flat v2 schema bundle export with an `--experimental` flag (#13324); deletion of v1 RPC methods/notifications (#13375) with a follow-up restoring accidentally-removed `EventMsg` TS types (#13397); tracing added across all JSON-RPC requests (#13285, #13286); silencing of spurious `Idle` status before `thread/started` (#13079); and a race fix so `turn/started` only fires when a turn really begins (#13261).

TUI/core fixes worth noting: pending Enter steers now submit immediately mid-turn instead of routing through `queued_user_messages` (#12868); parsed command summaries collapse to `Unknown` if any stage is unparsed (#13043); file-search `.gitignore` is scoped to the repo, fixing breakage when `$HOME` has a broad ignore (#13250, closes #3493); and the kill buffer is preserved across submit/slash clears (#12006).

Finally, jif-oai shipped ~10 sequential commits building out presentation and spreadsheet artifacts (#13341–#13362), plus plugin config refactor keying on `<plugin>@<marketplace>` (#13333).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`b92146d`](https://github.com/openai/codex/commit/b92146d48b66798fc70f58952a68efc0f26b01e5) Add under-development original-resolution view_image support (#13050) — _@fjord-oai_
- [`935754b`](https://github.com/openai/codex/commit/935754baa353f13f76149f55c11a3b362a6089db) Add thread metadata update endpoint to app server (#13280) — _@joeytrasatti-openai_
- [`299b8ac`](https://github.com/openai/codex/commit/299b8ac4455a76d510f9967f0392058c62e4a7ce) tui: align pending steers with core acceptance (#12868) — _@charley-oai_
- [`24a2d0c`](https://github.com/openai/codex/commit/24a2d0c696d8b1b3d0c137f8e67126b33b07d189) fix(network-proxy): reject mismatched host headers (#13275) — _@viyatb-oai_
- [`9b004e2`](https://github.com/openai/codex/commit/9b004e2db126995307bc32735ad3ee20e6fe5ced) Refactor plugin config and cache path (#13333) — _@xl-openai_
- [`041c896`](https://github.com/openai/codex/commit/041c896509796c438e34406e43473e60b8282cfc) Revert "Revert "realtime prompt changes"" (#13398) — _@aibrahim-oai_
- [`bab32af`](https://github.com/openai/codex/commit/bab32afa93292b181e350c2c0416f77fd82adf2b) Require deduplicator success before commenting (#13399) — _@etraut-openai_
- [`6bee02a`](https://github.com/openai/codex/commit/6bee02a346d0aa8dc4d5dcb312545fa37408b6ca) Build delegated realtime handoff text from all messages (#13395) — _@aibrahim-oai_
- [`d7eb195`](https://github.com/openai/codex/commit/d7eb195b62a54d63ddd28e884d0b4aed0276cdd3) chore(app-server): restore EventMsg TS types (#13397) — _@owenlin0_
- [`167158f`](https://github.com/openai/codex/commit/167158f93ce96cc554ab0a75aaed97f743ecb1ed) chore(app-server): delete v1 RPC methods and notifications (#13375) — _@owenlin0_
- [`72d368e`](https://github.com/openai/codex/commit/72d368e03aab573ff03785720da28e05337fd9c8) fix (#13389) — _@aibrahim-oai_
- [`8afe212`](https://github.com/openai/codex/commit/8afe2127dcc022bf8fdc0d6a80f957a50652c113) Revert "realtime prompt changes" (#13385) — _@aibrahim-oai_
- [`c2d008a`](https://github.com/openai/codex/commit/c2d008aca59697aff3a65949e7ffed06bd715dea) Collapse parsed command summaries when any stage is unknown (#13043) — _@nornagon-openai_
- [`39f00f2`](https://github.com/openai/codex/commit/39f00f2a06d9c8a5b5fb14998d8880ceb489f9ff) chore: rm --all-features flag from rust-analyzer (#13381) — _@sayan-oai_
- [`c4bd0aa`](https://github.com/openai/codex/commit/c4bd0aa3b914f0e7e3f09990363521fb60d67706) app-server: source /feedback logs from sqlite at trace level (#12969) — _@charley-oai_
- [`69df12e`](https://github.com/openai/codex/commit/69df12efb35d07387165f48103e238f4f32044fa) Remove Responses V1 websocket implementation (#13364) — _@pakrym-oai_
- [`8da7e4b`](https://github.com/openai/codex/commit/8da7e4bdae61881b2241b6e6225aa8d44c67789f) app-server-protocol: export flat v2 schema bundle (#13324) — _@apanasenko-oai_
- [`f628824`](https://github.com/openai/codex/commit/f6288248f48425e971c7a0d3898bcd0685bfccc2) realtime prompt changes (#13376) — _@aibrahim-oai_
- [`168e35b`](https://github.com/openai/codex/commit/168e35b6f237678ced5eaf8766e1c83c83259b29) Add Windows direct install script (#12741) — _@efrazer-oai_
- [`8159f05`](https://github.com/openai/codex/commit/8159f05dfd1e2ce70a9dbc043fbbfe1da8782860) feat: wire spreadsheet artifact (#13362) — _@jif-oai_
- [`24ba01b`](https://github.com/openai/codex/commit/24ba01b9dabb28d426dccf903bc62f81e2741de8) feat: artifact presentation part 7 (#13360) — _@jif-oai_
- [`1df040e`](https://github.com/openai/codex/commit/1df040e62bdc1e96b69eaf53639b638050a3eeb1) feat: add multi-actions to presentation tool (#13357) — _@jif-oai_
- [`ad393fa`](https://github.com/openai/codex/commit/ad393fa753f534fe4e134e0f3712482eb3b8e072) feat: pres artifact part 5 (#13355) — _@jif-oai_
- [`821024f`](https://github.com/openai/codex/commit/821024f9c9756ae2fa554e439f9598829efbbf73) feat: spreadsheet part 3 (#13350) — _@jif-oai_
- [`a7d90b8`](https://github.com/openai/codex/commit/a7d90b867d93c90c258680b5f5a1f888bf244418) feat: presentation part 4 (#13348) — _@jif-oai_
- [`875eaac`](https://github.com/openai/codex/commit/875eaac0d1b2e4025265f3e3a0137528b5f54828) feat: spreadsheet v2 (#13347) — _@jif-oai_
- [`8c5e50e`](https://github.com/openai/codex/commit/8c5e50ef3962614180e3fb84393cdc669764d6a1) feat: spreadsheet artifact (#13345) — _@jif-oai_
- [`564a883`](https://github.com/openai/codex/commit/564a883c2abd9a4104ef1a88cdda0e94ad7a39d6) feat: pres artifact 3 (#13346) — _@jif-oai_
- [`72dc444`](https://github.com/openai/codex/commit/72dc444b2c40d8922d84ec999d37055bf2d7777a) feat: pres artifact 2 (#13344) — _@jif-oai_
- [`4874b92`](https://github.com/openai/codex/commit/4874b9291ac98bbaa0d322450999a589ba6f92bc) feat: presentation artifact p1 (#13341) — _@jif-oai_
- [`07e532d`](https://github.com/openai/codex/commit/07e532dcb927b08b0174bd8d0cdf7d0632eea14f) app-server service tier plumbing (plus some cleanup) (#13334) — _@pash-openai_
- [`938c6dd`](https://github.com/openai/codex/commit/938c6dd3880c3a38708e0b1d2bbe54dc2fe10683) fix: db windows path (#13336) — _@jif-oai_
- [`cacefb5`](https://github.com/openai/codex/commit/cacefb52284a9e0f4e780104d66007f877ad0dc0) fix: agent when profile (#13235) — _@jif-oai_
- [`3166a5b`](https://github.com/openai/codex/commit/3166a5ba824ccb5ae849e0cbec6ecc84f9e67871) fix: agent race (#13248) — _@jif-oai_
- [`6deb72c`](https://github.com/openai/codex/commit/6deb72c04b07f21932e3ebba8be7f1918d199e45) Renaming Team to Business plan during TUI onboarding (#13313) — _@bwanner-oai_
- [`745c48b`](https://github.com/openai/codex/commit/745c48b0881561403ff30f418f698b53306a217f) fix(core): scope file search gitignore to repository context (#13250) — _@fcoury_
- [`2f5b01a`](https://github.com/openai/codex/commit/2f5b01abd605dfa1304b3b8a12b0033ddf020c75) add fast mode toggle (#13212) — _@pash-openai_
- [`56cc2c7`](https://github.com/openai/codex/commit/56cc2c71f40c5349b9e48351731c589127faeea6) tui: preserve kill buffer across submit and slash-command clears (#12006) — _@rakan-oai_
- [`0bb152b`](https://github.com/openai/codex/commit/0bb152b01d2629afb43f19ab81a21460ce2b6314) chore:  remove SkillMetadata.permissions and derive skill sandboxing from permission_profile (#13061) — _@celia-oai_
- [`9965bf3`](https://github.com/openai/codex/commit/9965bf31facc48201551c416615299d457c54ad3) feat(app-server-test-client): support tracing (#13286) — _@owenlin0_
- [`5008433`](https://github.com/openai/codex/commit/50084339a6f8dd72414dc387a07c7311a00fe3bc) Adjusting plan prompt for clarity and verbosity (#13284) — _@bfioca-openai_
- [`9022cdc`](https://github.com/openai/codex/commit/9022cdc563db0a26f240bedb678539fc1534d7d5) app-server: Silence thread status changes caused by thread being created (#13079) — _@euroelessar_
- [`146b798`](https://github.com/openai/codex/commit/146b798129c123da0f207e821274ec2488b278fb) fix(app-server): emit turn/started only when turn actually starts (#13261) — _@owenlin0_
- [`b20b6aa`](https://github.com/openai/codex/commit/b20b6aa46fa54297eb52d73db475b5901ed76062) Update realtime websocket API (#13265) — _@aibrahim-oai_
- [`d473e8d`](https://github.com/openai/codex/commit/d473e8d56d40b990e5f1e90130529df1978041f8) feat(app-server): add tracing to all app-server APIs (#13285) — _@owenlin0_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
