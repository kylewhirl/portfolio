import { readFile } from "node:fs/promises";
import path from "node:path";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

export async function loadMdxComponent(slug: string) {
  const filePath = path.join(process.cwd(), "src", "content", "writing", `${slug}.mdx`);
  const source = await readFile(filePath, "utf8");

  const { default: Content } = await evaluate(source, {
    ...runtime,
    development: false,
  });

  return Content;
}
