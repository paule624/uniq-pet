import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The repo lives in a nested folder; pin Turbopack to this project root
  // so it ignores unrelated lockfiles higher up the tree.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
