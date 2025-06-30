import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
  images: {
    unoptimized: true, // Required for static export with next/image
  },
  env: {
    NEXT_PUBLIC_CUSTOM_IMAGE_BASE_PATH: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  },
};


export default nextConfig;
