/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    // Optional: Add a trailing slash to all paths `/about` -> `/about/`
    // trailingSlash: true,
    // Optional: Change the output directory `out` -> `dist`
    images: {
      unoptimized: true
    },
    distDir: 'out',
  }

module.exports = nextConfig