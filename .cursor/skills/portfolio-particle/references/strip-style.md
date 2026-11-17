# Keep only Particle (粒子), remove Blueprint / Atelier / Classic

## Delete / stop shipping

- `styles/blueprint/` (entire package, including `swarm-portfolio/`)
- `styles/atelier/` (entire package, including `canvasui/`)
- `styles/classic/` (entire package, including `lib/`, `vendor/`)
- `app/blueprint/`, `app/atelier/`, `app/classic/`
- Unused deps after removal: `@fxshelf/card-orbit`, `@fxshelf/swarm-cursors`, `vanta`, `three-vanta` — remove only after confirming particle does not use them
- Do **not** remove `three` (particle engine uses it)
- `Fraunces` font in root layout — remove only after confirming nothing references it; keep `Noto Serif SC` (root `uno.config.ts` `fontFamily.serif` uses it for the particle `font-serif` shortcut)

## Registry & Uno

1. `styles/types.ts` — `StyleMode` = `"particle"` only
2. `styles/registry.ts` — register only `particle`, `DEFAULT_STYLE = "particle"`
3. `uno.config.ts` — import / spread only `particle` + `shared` uno modules
4. `lib/style.ts` / FOUC scripts — derived from the registry, no edit needed
5. Root `app/page.tsx` — redirect to particle

## App shell

- `app/particle/` remains
- Hide or remove `StyleRail` when a single style remains
- Ensure `DEFAULT_STYLE` / storage fallback is `particle`

## Verify

- `npm install`
- `npx tsc --noEmit`
- `npm run dev` → open `/` or `/particle`
- No imports left to `@/styles/blueprint`, `@/styles/atelier`, `@/styles/classic`
