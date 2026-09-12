import { readFile, access } from "node:fs/promises";
import { JSDOM } from "jsdom";
import { routes } from "../.ssr/entry-server.js";
let checked = 0;
for (const route of routes) {
  const html = await readFile(`dist${route}index.html`, "utf8");
  const doc = new JSDOM(html).window.document;
  if (doc.querySelectorAll("h1").length !== 1)
    throw Error(`${route}: expected one h1`);
  if (!doc.title.includes("Winson Baring"))
    throw Error(`${route}: missing title`);
  if (!doc.querySelector('meta[name="description"]'))
    throw Error(`${route}: missing description`);
  for (const el of doc.querySelectorAll("[src],a[href],link[href]")) {
    const url = el.getAttribute("src") ?? el.getAttribute("href");
    if (!url?.startsWith("/") || url.startsWith("//")) continue;
    const local = url.split(/[?#]/)[0];
    await access(
      `dist${local}${local.endsWith("/") ? "index.html" : ""}`,
    ).catch(() => {
      throw Error(`${route}: missing asset/route ${url}`);
    });
    checked++;
  }
  if (/[—]/.test(doc.body.textContent))
    throw Error(`${route}: banned dash in copy`);
  if (/placeholder|Lorem ipsum/i.test(doc.body.textContent))
    throw Error(`${route}: placeholder copy`);
}
console.log(
  `Verified ${routes.length} prerendered routes and ${checked} local links/assets.`,
);
