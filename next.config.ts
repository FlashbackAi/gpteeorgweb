import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const nextConfig: NextConfig = {
  // Retired storage pages (direct storage cut-over): signed links became share links, and the S3-compatible
  // endpoint is retired.
  async redirects() {
    return [
      { source: "/docs/storage/signed-links", destination: "/docs/storage/share-links", permanent: true },
      { source: "/docs/storage/s3", destination: "/docs/storage", permanent: true },
    ];
  },
};

// fumadocs-mdx compiles content/docs (see source.config.ts) for /docs.
const withMDX = createMDX();

export default withMDX(nextConfig);
