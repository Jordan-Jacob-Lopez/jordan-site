import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  // leave TS strict; only flip the next line if you are truly blocked by TS:
  // typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
