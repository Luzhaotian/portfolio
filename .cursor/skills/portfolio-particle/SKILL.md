---
name: portfolio-particle
description: >-
  Scaffold a personal portfolio from Luzhaotian's GitHub using the Particle (粒子)
  visual style with a full-viewport WebGL particle background. Use when the user
  wants 粒子/particle portfolio, fork this template, fill site-content.yaml, or
  optionally learn GitHub signup, git push, and GitHub Pages / Vercel deploy.
disable-model-invocation: false
---

# Portfolio · Particle（粒子）

Source template: `https://github.com/Luzhaotian/portfolio`

This skill scaffolds a **single-style** site kept as **particle / 粒子**.

## Mandatory confirmations (ask before coding)

Use the AskQuestion tool when available; otherwise ask clearly in chat.

1. **Style confirm** — Default is Particle. Ask: keep **粒子 (particle)** or switch to **静奢 (atelier)** / **经典 (classic)** / **蓝图 (blueprint)**?
   - If user chooses another style → stop and follow that style’s skill instead.
2. **Content mode**
   - **Fill now**: collect profile / about / skills / projects (can be partial)
   - **Preview only**: skip personal facts; use root `site-content.yaml` placeholders
3. **How to get the code** — Ask them to choose, and explain the difference:
   - **Fork** — copy the repo into their GitHub account, then clone their fork. Keeps a `forked from` link, so template updates can be synced via `upstream`. Shows `forked from`; a public fork generally can't be made private.
   - **Pull (clone upstream)** — `git clone` the upstream repo directly, no fork link. Independent copy; to go live they push to their own (new) repo, and syncing updates needs a manually added `upstream` remote.
   - Local-only preview without a GitHub account → Pull.
4. **GitHub account** — Only needed for Fork / go-live. If they have none, offer signup help.
5. **Target directory** — empty folder or new clone path
6. **Go live? (optional)** — Ask whether they want help pushing commits and deploying (GitHub Pages recommended; Vercel optional). If they only want local preview, **skip** go-live entirely — do not force it

Do **not** invent the user's real bio. Placeholders only when previewing.

## Workflow

### 1) Choose how to get the code

Ask the user to pick **Fork** or **Pull (clone upstream)** (see confirmations). Then:

```bash
# Fork route — clone their fork
git clone https://github.com/<user>/portfolio.git <target>
# Pull route — clone upstream directly
git clone https://github.com/Luzhaotian/portfolio.git <target>
cd <target>
```

Push later commits to the user's own copy (their fork, or their own repo) — never to upstream.
To sync future template updates later:

```bash
git remote add upstream https://github.com/Luzhaotian/portfolio.git
```

If the user already has the repo open, work in-place (still confirm style + content mode, and check where `origin` points).

### 2) Content file

- Ensure repo-root `site-content.yaml` exists (template ships in the repo).
- If **fill now**: update YAML with user answers (`meta.mode: ready`, `preferredStyle: particle`).
- If **preview**: keep placeholders; set `meta.mode: preview`, `preferredStyle: particle`.
- Tell the user they can edit `site-content.yaml` anytime and ask the agent to re-apply.

### 3) Keep only Particle

Follow `references/strip-style.md`.

### 4) Apply content into code

Follow `references/apply-content.md`.
Replace Luzhaotian-specific copy in `data/*` and `lib/i18n/locales/*`.

### 5) Install & verify

```bash
npm install
npx tsc --noEmit
npm run dev
```

Open the particle route (usually `/` → `/particle`). Desktop: full-viewport WebGL particle morph behind content; reduced-motion / mobile falls back to a static silhouette.

### 6) Go live (only if user opted in)

Follow `references/go-live.md`：把提交推送到自己的副本 → 开启 GitHub Pages（或 Vercel）。

Local success alone is enough to mark the scaffold done when go-live was declined.

## Architecture hints

- Styles live under `styles/particle` vs `styles/atelier` / `styles/classic` (see `styles/README.md`).
- Particle FX: `styles/particle/components/ParticleStage.tsx` + `engine/` (Three.js morph) + `public/particle/` silhouettes.
- Structure ids in `data/`; bilingual copy in `lib/i18n/locales/{zh,en}.ts`.
- Shared chrome: `styles/shared/*`. App shell providers: `components/*`.

## Done criteria

- [ ] User confirmed particle (or redirected to atelier / classic skill)
- [ ] `site-content.yaml` present and explained
- [ ] Atelier + Classic packages removed / unreachable
- [ ] Content is placeholders or user-provided — not the template author's identity
- [ ] `tsc` clean; particle background initializes on desktop; dev server runs
- [ ] Go-live: completed **or** explicitly skipped per user choice
