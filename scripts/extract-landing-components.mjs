import { mkdir, writeFile } from "node:fs/promises";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = process.cwd();
const html = readFileSync(join(root, "index.html"), "utf8");
const outputDir = join(root, "src", "components", "landing");

const components = [
  {
    name: "Header",
    start: '<header class="site-header"',
    end: "</header>",
    includeEnd: true,
  },
  {
    name: "HeroSection",
    start: '<section class="hero"',
    end: '<section class="product-section"',
  },
  {
    name: "ProductSection",
    start: '<section class="product-section"',
    end: '<section class="insights-section"',
  },
  {
    name: "InsightsSection",
    start: '<section class="insights-section"',
    end: '<section class="spotlight-section"',
  },
  {
    name: "FounderSection",
    start: '<section class="spotlight-section"',
    end: '<section class="final-cta-section"',
  },
  {
    name: "FinalCtaSection",
    start: '<section class="final-cta-section"',
    end: '<footer class="site-footer"',
  },
  {
    name: "Footer",
    start: '<footer class="site-footer"',
    end: "</footer>",
    includeEnd: true,
  },
];

function extract({ start, end, includeEnd = false }) {
  const startIndex = html.indexOf(start);

  if (startIndex < 0) {
    throw new Error(`Could not find start marker: ${start}`);
  }

  const endIndex = html.indexOf(end, startIndex + start.length);

  if (endIndex < 0) {
    throw new Error(`Could not find end marker: ${end}`);
  }

  return html.slice(startIndex, includeEnd ? endIndex + end.length : endIndex).trim();
}

function toJsx(markup) {
  return markup
    .replace(/\bclass=/g, "className=")
    .replace(/\bsrc="assets\//g, 'src="/assets/')
    .replace(/\bhref="assets\//g, 'href="/assets/')
    .replace(/<img([^>]*?)(?<!\/)>/g, "<img$1 />")
    .replace(/<circle([^>]*?)(?<!\/)>/g, "<circle$1 />")
    .replace(/<rect([^>]*?)(?<!\/)>/g, "<rect$1 />")
    .replace(/<path([^>]*?)(?<!\/)>/g, "<path$1 />");
}

function componentSource(name, markup) {
  return `export function ${name}() {
  return (
${toJsx(markup)
  .split("\n")
  .map((line) => `    ${line}`)
  .join("\n")}
  );
}
`;
}

await mkdir(outputDir, { recursive: true });
await mkdir(dirname(join(root, "src", "components", "landing", "index.ts")), { recursive: true });

for (const component of components) {
  await writeFile(join(outputDir, `${component.name}.tsx`), componentSource(component.name, extract(component)), "utf8");
}

await writeFile(
  join(outputDir, "index.ts"),
  `${components.map(({ name }) => `export { ${name} } from "./${name}";`).join("\n")}
export { ClientScripts } from "./ClientScripts";
`,
  "utf8",
);
