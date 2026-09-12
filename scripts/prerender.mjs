import { readFile, writeFile, mkdir } from "node:fs/promises";
import { render, routes, pageMeta } from "../.ssr/entry-server.js";
const template = await readFile("dist/index.html", "utf8");
const escape = (s) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
for (const route of [...routes, "/404/"]) {
  const { title, description } = pageMeta(route);
  const html = template
    .replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`)
    .replace("<title>Winson Baring</title>", `<title>${escape(title)}</title>`)
    .replace(
      "<!--meta-->",
      `<meta name="description" content="${escape(description)}"><link rel="canonical" href="https://portfolio.winson.codes${route}"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="https://portfolio.winson.codes${route}">`,
    );
  const dir = route === "/404/" ? "dist" : `dist${route}`;
  await mkdir(dir, { recursive: true });
  await writeFile(
    route === "/404/" ? "dist/404.html" : `${dir}/index.html`,
    html,
  );
}
await writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((p) => `<url><loc>https://portfolio.winson.codes${p}</loc></url>`).join("")}</urlset>`,
);
console.log(`Prerendered ${routes.length} routes and custom 404.`);
