import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',

  // Disable Image Optimization because GitHub Pages doesn't support it
  images: {
    unoptimized: true,
  },

  // NOTE: If your GitHub Pages URL looks like "https://Mustapha616.github.io/Tripa"
  // you must uncomment and set the basePath and assetPrefix to your repo name:
  basePath: '/Tripa',
  assetPrefix: '/Tripa/',
};

export default nextConfig;
