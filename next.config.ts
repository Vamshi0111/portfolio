/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export', // Enables static HTML export
  basePath: isProd ? '/your-repository-name' : '', // Replace 'your-repository-name'
  assetPrefix: isProd ? '/your-repository-name/' : '', // Replace 'your-repository-name'
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
};

module.exports = nextConfig;