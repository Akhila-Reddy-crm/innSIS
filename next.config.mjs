/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate a fully static export in the `out` folder
  output: 'export',

  // Ensure routes like `/contact/` work correctly on static hosts like SiteGround
  trailingSlash: true,

  // Disable Next.js image optimization so it works with `output: 'export'`
  // and on static hosting (no Node.js image optimizer available).
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
