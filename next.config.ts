import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const nextConfig: NextConfig = {
  /* config options here */
};

// fumadocs-mdx compiles content/docs (see source.config.ts) for /docs.
const withMDX = createMDX();

export default withMDX(nextConfig);
