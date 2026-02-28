import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["alva-ui"],
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
