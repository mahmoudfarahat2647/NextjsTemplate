import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc', 'picsum.photos'],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
