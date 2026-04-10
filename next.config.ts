import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '**',
      },
      {
        // This covers lh3, lh4, and the base googleusercontent domain
        protocol: 'https',
        hostname: '*.googleusercontent.com', 
        pathname: '**',
      },
      {
        // Keep the http version just in case your URLs use it
        protocol: 'http',
        hostname: '*.googleusercontent.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;