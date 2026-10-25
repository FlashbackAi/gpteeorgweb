import { defineConfig, defineDocs } from "fumadocs-mdx/config";

// Developer docs (teepin.com/docs): MDX pages in content/docs, compiled at
// build time by fumadocs-mdx into .source/ (generated, git-ignored).
export const docs = defineDocs({
  dir: "content/docs",
});

export default defineConfig();
