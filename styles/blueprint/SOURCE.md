# Blueprint swarm provenance

The opening “swarm construction” experience uses the npm package
[`@fxshelf/swarm-cursors`](https://www.npmjs.com/package/@fxshelf/swarm-cursors)
(same MIT lineage as [swarm-cursors-skills](https://github.com/cxyax/swarm-cursors-skills)).

Portfolio-specific pieces stay under `styles/blueprint/swarm-portfolio/`:

- `create-portfolio-scene.js` — full drawn site scene + i18n copy
- `portfolio-actions.js` — click / scroll targets for that scene
- `LuSeal.jsx` / `lu-seal-path.js` — 九叠篆「卢」intro mark
- `apply-scene-palette.js` — light/dark palette shim (not exported by the package)

Visual / motion credit:

- Joel Califa — Swarm (https://califa.github.io/swarm-site/)
- Upstream skill: https://github.com/cxyax/swarm-cursors-skills

This portfolio does not claim authorship of the original motion design. Runtime
pages configure a React scene for this site; they do not depend on the skill CLI
or any AI API key.
