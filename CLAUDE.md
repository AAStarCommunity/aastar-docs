# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

VitePress documentation site for the AAStar SDK, served at https://docs.aastar.io. Content is authored as Markdown and **auto-generated from the `aastar-sdk` repo** — treat most pages under `api/`, `guide/`, and `examples/` as generated/synced output, not hand-maintained source. The only real "code" is `.vitepress/config.ts` (site config + sidebars) and `.vitepress/theme/`.

## Commands

```bash
pnpm install              # install deps (use pnpm, not npm)
./run.sh                  # dev server on port 5173 (kills any process already on that port)
pnpm docs:dev             # raw dev server (vitepress)
./build.sh                # clean .vitepress/cache then build → .vitepress/dist/
pnpm docs:build           # raw build
pnpm docs:preview         # preview the built site
```

There are no tests or linters in this repo.

## Deployment

Deployment is **git-push-driven**, despite some stale instructions in `README.md`/`LOCAL_DEV.md`:

- `./deploy.sh ["commit message"]` stages all changes, commits, and pushes to `origin/main`, which triggers a **Cloudflare Pages** build.
- `.vitepress/dist/` is gitignored and built by Cloudflare, not committed. Ignore README references to a Vercel flow, `package.json.backup`, or committing `dist/` — those are outdated. The license is **Apache-2.0** (footer/NOTICE), not the MIT in README.

## Versioning model (the one non-obvious thing here)

The site serves a "latest" version at the root and **frozen archived snapshots** under version-numbered directories (currently `0.16.23/`).

- A frozen version is a **literal copy** of `guide/`, `api/`, `examples/`, `zh/`, `index.md`, and `changelog.md` placed under `<version>/` (e.g. `0.16.23/guide/...`). It has no own `.vitepress`.
- In `.vitepress/config.ts`, the helper `prefixSidebar(items, '/<version>')` deep-clones the latest sidebars and rewrites every root-absolute `link` to be version-prefixed, so the archived snapshot reuses the latest sidebar structure without hand-editing. The `sidebar` map registers both root paths (`/guide/`, `/api/`, …) and prefixed paths (`/0.16.23/guide/`, …).
- The `nav` version dropdown ("vX.Y.x (latest)" → older versions) is maintained by hand.

**To freeze a new version**, the manual steps are: copy the current root content dirs into a new `<version>/` folder, then in `config.ts` add `<version>/...` entries to the `sidebar` map (via `prefixSidebar`) and add the version to the `nav` dropdown. `ARCHIVED_VERSION` is a single constant near the bottom of the config.

## config.ts specifics

- `ignoreDeadLinks: true` — dead links don't fail the build (expected, since content is synced from another repo).
- A custom Vite middleware (`aastar-docs-rewrite-docs-prefix`) 302-redirects any `/docs` or `/docs/...` URL to the same path with the `/docs` prefix stripped. This runs in both dev and preview servers; keep both `configureServer` and `configurePreviewServer` copies in sync if you change it.
- Search is local provider; site is bilingual (English at root, Chinese under `zh/`).

## Secrets / CI

The only GitHub Actions workflow is `.github/workflows/check-secrets.yml`, which scans the repo on push/PR for private keys and API tokens (Ethereum keys, PEM, AWS, OpenAI/Anthropic/Google AI keys, GitHub PATs, Stripe). It **fails the build** if any match. Never commit real keys or 64-hex-char `0x...` strings, even in example/doc Markdown — use placeholders. Real secrets go in `.env` (gitignored; see `.env.example`). Notes from hardening: the bare-`0x{64hex}` Ethereum heuristic is **skipped for Markdown** (blockchain docs are full of tx hashes / bytes32 / bytecode) but the contextual `private_key = "0x…"` check runs on every file; TypeDoc's `_media/` dir (example source with placeholder keys like `0x1234…`) is in `EXCLUDED_DIRS`.

## Release runbook — track an SDK release → update docs → publish

This is the repeatable procedure when **`aastar-sdk` cuts a new release** and the docs site must follow. Run it end-to-end; don't skip steps. (`$SDK` = `../aastar-sdk`, a sibling checkout.)

1. **Determine the published version — from the right file.** In `$SDK`: `git fetch --tags && git checkout main && git pull`. The authoritative version is **`packages/sdk/package.json`** (+ `npm view @aastar/sdk version` + the `vX.Y.Z` git tag + top of `CHANGELOG.md`). ⚠️ **Never read the repo-root `package.json`** — in this monorepo root is `0.0.0-private` (and was misleadingly stale before that). Confirm the tag's commit; that's the release commit.
2. **Regenerate the API docs at the release commit.** In `$SDK` on that commit: `pnpm run docs:generate` (TypeDoc → `$SDK/docs/api`). This makes the `Defined in` source links point at the release commit. (`docs/api` is git-tracked in the SDK; you don't have to commit it there — it just feeds the sync.)
3. **Branch + sync.** In this repo: `git checkout main && git pull && git checkout -b docs/sync-sdk-<version>`, then run the SDK's `bash $SDK/scripts/extract-docs.sh`. That script is self-cleaning (path-resolved, dynamic package list from `typedoc.json` entryPoints, `rm -rf guide/docs`, `rsync --delete` examples) and runs `sanitize-typedoc-md.cjs` at the end. It preserves the docs-repo-owned `guide/{concepts,use-cases,deployments}` and the curated `examples/index.md`.
4. **Reconcile the API sidebar.** Compare `ls api/@aastar` to the **latest** `apiSidebar` Core Modules in `config.ts`. If packages were added/removed, edit `apiSidebar` — but **leave `apiSidebarArchived` frozen** (it backs `/0.16.23/` and must keep that snapshot's old module set).
5. **Bump the version labels** (the only routinely-hand-edited bit): the `nav` dropdown in `config.ts` (`vX.Y.Z (latest)`, two spots) and the `Status-…` badge in `index.md`.
6. **Spot-check the things that drift:** no `MIT` residue in latest (`grep` excluding `0.16.23/` and the "如 MIT" example line — upstream is Apache now so this should be clean); `guide/docs/API_REFERENCE.md` shows the right `Version:` (upstream `update_versions.cjs` auto-bumps it); deployment addresses in `guide/deployments/*` still match `@aastar/core` `CANONICAL_ADDRESSES` (single source of truth, all 3 chains); every `/guide/docs/*` link in `config.ts` resolves (SDK occasionally renames pages).
7. **Build, PR, verify CI.** `pnpm run docs:build` must pass locally (the sanitizer is what keeps it green). Commit (`api guide examples zh changelog.md .vitepress/config.ts index.md`), push, open a PR. Required-green checks: **Scan for Private Keys and Secrets** + **Cloudflare Pages**. Branch protection requires **1 approving review** and **`enforce_admins: true`** — so you cannot self-merge; the user (or a reviewer) must approve.
8. **Publish = merge.** Merging to `main` auto-triggers the Cloudflare production build (there is no separate "publish" step). Confirm the main commit's `Cloudflare Pages` check goes `success`; then docs.aastar.io serves the new version.

### Lessons banked (mistakes not to repeat)
- **Monorepo version:** read `packages/sdk/package.json`, never repo-root. (Cost a wrong "it's only a tag-level bump" call.)
- **TypeDoc ↔ VitePress:** prose pseudo-tags (`<jwt>`, `<void>`, `Promise<T>`) break the Vue compiler → the `sanitize-typedoc-md.cjs` pass is mandatory (now wired into the sync).
- **Secret-scan false positives** on a docs repo come from bytecode / tx hashes / `_media` placeholder keys — fixed via Markdown-skip + `_media` exclusion; don't "fix" by deleting real content.
- **Sidebar mirroring:** changing `apiSidebar` used to silently break the frozen `/0.16.23/` archive — that's why the archived sidebar is a separate frozen copy.
- **Don't blanket-delete `guide/`** on sync: `concepts/`, `use-cases/`, `deployments/` are hand-maintained.
- **Cross-repo coupling:** doc-source fixes (license badges, `API_REFERENCE.md` version) belong **upstream in the SDK** (tracked via SDK issues), else every sync reintroduces them.
