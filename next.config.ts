/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export', // Enables static HTML export
  basePath: isProd ? '/portfolio' : '', // Replace 'your-repository-name'
  assetPrefix: isProd ? '/portfolio/' : '', // Replace 'your-repository-name'
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
};

module.exports = nextConfig;