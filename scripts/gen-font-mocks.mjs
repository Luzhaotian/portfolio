// Regenerate font-mocks.json — CSS snapshots for every next/font/google call
// in the repo, keyed by the exact URL the loader would request.
//
// Why: GitHub Actions runners sometimes receive Google Fonts CSS responses
// whose src URLs carry query strings, which crashes the next/font loader
// (`/\.(woff2)$/.exec(...)[1]` → null). The build consumes this file via
// NEXT_FONT_GOOGLE_MOCKED_RESPONSES (see .github/workflows/deploy.yml) so CSS
// parsing never depends on a live Google Fonts response. Font *files* are
// still downloaded from fonts.gstatic.com at build time.
//
// Re-run after adding/removing fonts or changing weight/subset options:
//   npm run gen:font-mocks
import https from "node:https";
import { createRequire } from "node:module";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const {
  validateGoogleFontFunctionCall,
} = require("next/dist/compiled/@next/font/dist/google/validate-google-font-function-call.js");
const {
  getFontAxes,
} = require("next/dist/compiled/@next/font/dist/google/get-font-axes.js");
const {
  getGoogleFontsUrl,
} = require("next/dist/compiled/@next/font/dist/google/get-google-fonts-url.js");

// Keep in sync with app/layout.tsx and app/blueprint/layout.tsx.
// [functionName, options passed to the font function]
const FONTS = [
  ["Fraunces", { subsets: ["latin"], axes: ["SOFT", "opsz"] }],
  ["Geist", { subsets: ["latin"] }],
  ["Geist_Mono", { subsets: ["latin"] }],
  ["Noto_Serif_SC", { subsets: ["latin"], weight: ["400", "500", "600"] }],
  ["Space_Grotesk", { subsets: ["latin"], weight: ["400", "500", "600", "700"] }],
  ["Source_Sans_3", { subsets: ["latin"], weight: ["400", "600"] }],
  ["IBM_Plex_Mono", { subsets: ["latin"], weight: ["400", "500"] }],
];

// Same UA the loader uses, so we capture the same woff2-only response.
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36";

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": UA } }, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`status ${res.statusCode} for ${url}`));
          res.resume();
          return;
        }
        let body = "";
        res.setEncoding("utf8");
        res.on("data", (c) => (body += c));
        res.on("end", () => resolve(body));
      })
      .on("error", reject);
  });
}

const mocks = {};
for (const [name, options] of FONTS) {
  const v = validateGoogleFontFunctionCall(name, options);
  const axes = getFontAxes(v.fontFamily, v.weights, v.styles, v.selectedVariableAxes);
  const url = getGoogleFontsUrl(v.fontFamily, axes, v.display);
  const css = await fetchText(url);
  // Sanity: every src URL must end with a plain extension, or the loader
  // crashes with the exact null-pointer error we are working around.
  const bad = [...css.matchAll(/src: url\((.+?)\)/g)].filter(
    (m) => !/\.(woff|woff2|eot|ttf|otf)$/.test(m[1])
  );
  if (bad.length) {
    console.error(
      `Unexpected src URL shape for ${v.fontFamily}:`,
      bad.map((m) => m[1])
    );
    process.exit(1);
  }
  mocks[url] = css;
  console.log(`captured ${v.fontFamily} (${css.length} bytes)`);
}

const out = fileURLToPath(new URL("../font-mocks.json", import.meta.url));
writeFileSync(
  out,
  JSON.stringify(Object.fromEntries(Object.entries(mocks).sort()), null, 2) + "\n"
);
console.log(`wrote ${Object.keys(mocks).length} responses → font-mocks.json`);
