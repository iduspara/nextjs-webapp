/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.finanztip.de',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: 'dist',
};

module.exports = nextConfig;
