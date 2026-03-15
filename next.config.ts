import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.cdnlogo.com',
      },
      {
        protocol: 'https',
        hostname: 'seeklogo.com',
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
