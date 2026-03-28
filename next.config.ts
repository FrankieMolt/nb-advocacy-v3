import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  
  // Compression already enabled by default in Next.js
  
  // Image optimizations
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      { protocol: 'https', hostname: 'static.cdnlogo.com' },
      { protocol: 'https', hostname: 'seeklogo.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.cbc.ca' },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60, // Cache images for 60 seconds minimum
  },
  
  // Performance optimizations
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  
  // Experimental features for smaller bundles
  experimental: {
    optimizeCss: true, // Critical CSS inlining
  },
  
  // Headers for caching are handled via vercel.json or netlify.toml for static export
  // The async headers() function is incompatible with output: 'export'
  // (kept here as a comment for reference - security headers should be set at hosting level)
};

export default nextConfig;
